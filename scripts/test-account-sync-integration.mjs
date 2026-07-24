import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

class FakeElement {
  constructor() {
    this.dataset = {};
    this.hidden = false;
    this.textContent = '';
    this.value = '';
    this.disabled = false;
    this.listeners = {};
  }

  addEventListener(type, listener) {
    this.listeners[type] = listener;
  }

  showModal() {
    this.open = true;
  }

  close() {
    this.open = false;
  }
}

class FakeStorage {
  constructor() {
    this.values = new Map();
  }

  getItem(key) {
    return this.values.has(key) ? this.values.get(key) : null;
  }

  setItem(key, value) {
    this.values.set(key, String(value));
  }

  removeItem(key) {
    this.values.delete(key);
  }
}

const selectors = [
  '#syncBar',
  '#syncStatus',
  '#syncUser',
  '#syncNow',
  '#accountButton',
  '#accountDialog',
  '#accountClose',
  '#accountLoginForm',
  '#accountEmail',
  '#accountLoginSubmit',
  '#accountLoginMessage',
  '#accountSignedIn',
  '#accountSignedInEmail',
  '#accountSignOut',
  '#accountSetup'
];
const elements = Object.fromEntries(selectors.map(selector => [selector, new FakeElement()]));
const localStorage = new FakeStorage();
localStorage.setItem(
  'medical-notes-schwartz-11e-personal-notes-v1',
  JSON.stringify({ 1: '既有本機筆記' })
);

const rows = new Map();
let authStateListener = null;
let selectDelayMs = 0;
const fakeClient = {
  auth: {
    onAuthStateChange(listener) {
      authStateListener = listener;
      return { data: { subscription: { unsubscribe() {} } } };
    },
    async getSession() {
      return {
        data: {
          session: {
            user: { id: 'user-1', email: 'reader@example.com' }
          }
        }
      };
    },
    async signInWithOtp() {
      return { error: null };
    },
    async signOut() {
      return { error: null };
    }
  },
  from() {
    return {
      upsert(row) {
        const key = `${row.user_id}|${row.book_id}|${row.chapter_id}|${row.kind}`;
        const stored = { ...row, updated_at: '2026-07-24T00:00:00.000Z' };
        rows.set(key, stored);
        return {
          select() {
            return {
              async single() {
                return { data: stored, error: null };
              }
            };
          }
        };
      },
      select() {
        return {
          async eq(_column, userId) {
            if (selectDelayMs) {
              await new Promise(resolve => setTimeout(resolve, selectDelayMs));
            }
            return {
              data: [...rows.values()].filter(row => row.user_id === userId),
              error: null
            };
          }
        };
      }
    };
  }
};

const context = vm.createContext({
  CustomEvent: class {
    constructor(type, options) {
      this.type = type;
      this.detail = options?.detail;
    }
  },
  console,
  document: {
    querySelector(selector) {
      return elements[selector] || null;
    }
  },
  localStorage,
  navigator: { onLine: true },
  setTimeout,
  clearTimeout,
  window: {
    MEDICAL_NOTES_SYNC_CONFIG: {
      supabaseUrl: 'https://medical-notes.supabase.co',
      supabasePublishableKey: 'sb_publishable_test_key_long_enough',
      tableName: 'medical_note_state'
    },
    addEventListener() {},
    dispatchEvent() {},
    location: {
      origin: 'http://127.0.0.1:8877',
      pathname: '/'
    },
    supabase: {
      createClient() {
        return fakeClient;
      }
    }
  }
});
context.globalThis = context;

vm.runInContext(
  fs.readFileSync(new URL('../account-sync-core.js', import.meta.url), 'utf8'),
  context
);
vm.runInContext(
  fs.readFileSync(new URL('../account-sync.js', import.meta.url), 'utf8'),
  context
);

await context.window.MedicalNotesSync.init({ books: [{ id: 'schwartz-11e' }] });

assert.equal(context.window.MedicalNotesSync.isSignedIn(), true);
assert.equal(
  rows.get('user-1|schwartz-11e|1|personal-notes').payload,
  '既有本機筆記'
);
assert.equal(elements['#syncUser'].textContent, 'reader@example.com');

context.window.MedicalNotesSync.queueRecord('schwartz-11e', 1, 'important', [0, 2]);
await new Promise(resolve => setTimeout(resolve, 350));

assert.deepEqual(
  JSON.parse(JSON.stringify(rows.get('user-1|schwartz-11e|1|important').payload)),
  [0, 2]
);
assert.equal(elements['#syncStatus'].textContent, '所有變更已同步');

rows.set('user-1|schwartz-11e|1|personal-notes', {
  user_id: 'user-1',
  book_id: 'schwartz-11e',
  chapter_id: '1',
  kind: 'personal-notes',
  payload: '另一台裝置的版本',
  updated_at: '2026-07-24T00:01:00.000Z'
});
localStorage.setItem(
  'medical-notes-schwartz-11e-personal-notes-v1',
  JSON.stringify({ 1: '目前裝置的版本' })
);
context.window.MedicalNotesSync.queueRecord(
  'schwartz-11e',
  1,
  'personal-notes',
  '目前裝置的版本'
);
await context.window.MedicalNotesSync.syncAll();

const mergedNote = '另一台裝置的版本\n\n--- 同步時保留的本機版本 ---\n目前裝置的版本';
assert.equal(
  rows.get('user-1|schwartz-11e|1|personal-notes').payload,
  mergedNote
);
assert.deepEqual(
  JSON.parse(localStorage.getItem('medical-notes-schwartz-11e-personal-notes-v1')),
  { 1: mergedNote }
);

authStateListener('SIGNED_OUT', null);
await new Promise(resolve => setTimeout(resolve, 20));

assert.deepEqual(
  JSON.parse(localStorage.getItem('medical-notes-schwartz-11e-personal-notes-v1')),
  {}
);
assert.equal(localStorage.getItem('medical-notes-last-account-v1'), null);

localStorage.setItem(
  'medical-notes-schwartz-11e-personal-notes-v1',
  JSON.stringify({ 2: '登出期間新增的筆記' })
);
context.window.MedicalNotesSync.queueRecord(
  'schwartz-11e',
  2,
  'personal-notes',
  '登出期間新增的筆記'
);

authStateListener('SIGNED_IN', {
  user: { id: 'user-2', email: 'second@example.com' }
});
await new Promise(resolve => setTimeout(resolve, 30));

assert.equal(
  rows.get('user-2|schwartz-11e|2|personal-notes').payload,
  '登出期間新增的筆記'
);
assert.equal(rows.has('user-2|schwartz-11e|1|personal-notes'), false);
assert.equal(
  rows.get('user-1|schwartz-11e|1|personal-notes').payload,
  mergedNote
);
assert.equal(elements['#syncUser'].textContent, 'second@example.com');

selectDelayMs = 30;
const inFlightSync = context.window.MedicalNotesSync.syncAll();
authStateListener('SIGNED_OUT', null);
await inFlightSync;
await new Promise(resolve => setTimeout(resolve, 40));
selectDelayMs = 0;

assert.deepEqual(
  JSON.parse(localStorage.getItem('medical-notes-schwartz-11e-personal-notes-v1')),
  {}
);

console.log('account sync integration: ok');
