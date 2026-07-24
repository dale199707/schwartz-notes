import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../account-sync-core.js', import.meta.url), 'utf8');
const context = { globalThis: {} };
vm.runInNewContext(source, context);
const core = context.globalThis.MedicalNotesSyncCore;

assert.equal(
  core.canonicalStringify({ b: 2, a: { d: 4, c: 3 } }),
  '{"a":{"c":3,"d":4},"b":2}'
);
assert.equal(core.hashPayload({ a: 1, b: 2 }), core.hashPayload({ b: 2, a: 1 }));
assert.deepEqual(
  [...core.mergePayload('important', [3, 1], [2, 3])],
  [1, 2, 3]
);
assert.equal(
  core.mergePayload('personal-notes', '本機筆記', '雲端筆記'),
  '雲端筆記\n\n--- 同步時保留的本機版本 ---\n本機筆記'
);
assert.deepEqual(
  JSON.parse(JSON.stringify(core.mergePayload(
    'highlights',
    { 'core:0': [{ start: 4, end: 8, color: 'green' }] },
    { 'core:0': [{ start: 0, end: 6, color: 'yellow' }] }
  ))),
  {
    'core:0': [
      { start: 0, end: 4, color: 'yellow' },
      { start: 4, end: 8, color: 'green' }
    ]
  }
);
assert.equal(core.isEmptyPayload('personal-notes', '   '), true);
assert.equal(core.isEmptyPayload('important', [1]), false);
assert.deepEqual(
  { ...core.parseRecordKey(core.recordKey('icu-book-5e', 27, 'highlights')) },
  { bookId: 'icu-book-5e', chapterId: '27', kind: 'highlights' }
);

console.log('account sync core: ok');
