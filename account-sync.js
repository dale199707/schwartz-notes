(function attachMedicalNotesSync(global) {
  const core = global.MedicalNotesSyncCore;
  const config = global.MEDICAL_NOTES_SYNC_CONFIG || {};
  const storageKinds = ['personal-notes', 'important', 'highlights'];
  const syncMetaPrefix = 'medical-notes-cloud-meta-v1';
  const outboxPrefix = 'medical-notes-cloud-outbox-v1';
  const localDirtyPrefix = 'medical-notes-cloud-local-dirty-v1';
  const localSnapshotPrefix = 'medical-notes-cloud-snapshot-v1';
  const lastAccountKey = 'medical-notes-last-account-v1';
  const debounceTimers = new Map();
  let client = null;
  let currentUser = null;
  let bookIds = [];
  let syncPromise = null;
  let syncQueued = false;
  let elements = {};

  function storageKey(bookId, kind) {
    return `medical-notes-${bookId}-${kind}-v1`;
  }

  function safeRead(key, fallback = {}) {
    try {
      return JSON.parse(localStorage.getItem(key) || '') || fallback;
    } catch {
      return fallback;
    }
  }

  function safeWrite(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function configured() {
    return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(String(config.supabaseUrl || ''))
      && String(config.supabasePublishableKey || '').length > 20;
  }

  function available() {
    return configured() && Boolean(global.supabase?.createClient);
  }

  function tableName() {
    return config.tableName || 'medical_note_state';
  }

  function userStorageKey(prefix, userId = currentUser?.id) {
    return `${prefix}:${userId || 'signed-out'}`;
  }

  function lastAccountId() {
    try {
      return localStorage.getItem(lastAccountKey) || '';
    } catch {
      return '';
    }
  }

  function localOwnerId() {
    return currentUser?.id || 'unclaimed';
  }

  function dirtyStorageKey(userId = localOwnerId()) {
    return `${localDirtyPrefix}:${userId}`;
  }

  function activeSnapshot() {
    const snapshot = {};
    bookIds.forEach(bookId => {
      storageKinds.forEach(kind => {
        snapshot[storageKey(bookId, kind)] = localBookState(bookId, kind);
      });
    });
    return snapshot;
  }

  function saveActiveSnapshot(userId = localOwnerId()) {
    if (!userId) return;
    safeWrite(`${localSnapshotPrefix}:${userId}`, activeSnapshot());
  }

  function restoreActiveSnapshot(userId) {
    const snapshot = safeRead(`${localSnapshotPrefix}:${userId}`);
    bookIds.forEach(bookId => {
      storageKinds.forEach(kind => {
        const key = storageKey(bookId, kind);
        safeWrite(key, snapshot[key] || {});
      });
    });
  }

  function prepareAccountLocalState(userId) {
    const previousUserId = lastAccountId();
    if (previousUserId && previousUserId !== userId) {
      saveActiveSnapshot(previousUserId);
      restoreActiveSnapshot(userId);
    }
    if (!previousUserId) {
      const unclaimed = safeRead(dirtyStorageKey('unclaimed'));
      if (Object.keys(unclaimed).length) {
        const claimed = safeRead(dirtyStorageKey(userId));
        Object.assign(claimed, unclaimed);
        safeWrite(dirtyStorageKey(userId), claimed);
        try {
          localStorage.removeItem(dirtyStorageKey('unclaimed'));
        } catch {}
      }
    }
    try {
      localStorage.setItem(lastAccountKey, userId);
    } catch {}
  }

  function readMeta(userId) {
    return safeRead(userStorageKey(syncMetaPrefix, userId));
  }

  function writeMeta(meta, userId) {
    safeWrite(userStorageKey(syncMetaPrefix, userId), meta);
  }

  function readOutbox(userId) {
    return safeRead(userStorageKey(outboxPrefix, userId));
  }

  function writeOutbox(outbox, userId) {
    safeWrite(userStorageKey(outboxPrefix, userId), outbox);
  }

  function setStatus(state, message) {
    if (!elements.status || !elements.bar) return;
    elements.bar.dataset.syncState = state;
    elements.status.textContent = message;
  }

  function renderAccount() {
    if (!elements.accountButton) return;
    const signedIn = Boolean(currentUser);
    elements.accountButton.textContent = signedIn ? '帳號設定' : '登入同步';
    elements.syncNow.hidden = !signedIn;
    elements.user.hidden = !signedIn;
    elements.user.textContent = signedIn ? currentUser.email : '';
    elements.loginForm.hidden = signedIn || !available();
    elements.signedInPanel.hidden = !signedIn;
    elements.setupPanel.hidden = available();
    if (signedIn) {
      elements.signedInEmail.textContent = currentUser.email || '已登入';
      setStatus('synced', '已登入，正在確認雲端資料…');
    } else if (available()) {
      setStatus('local', '未登入；筆記目前只保存在這台裝置');
    } else {
      setStatus('local', '雲端同步目前不可用；目前使用本機模式');
    }
  }

  function openDialog() {
    renderAccount();
    if (typeof elements.dialog.showModal === 'function') elements.dialog.showModal();
    else elements.dialog.setAttribute('open', '');
  }

  function closeDialog() {
    if (typeof elements.dialog.close === 'function') elements.dialog.close();
    else elements.dialog.removeAttribute('open');
  }

  function localBookState(bookId, kind) {
    return safeRead(storageKey(bookId, kind));
  }

  function extractLocalRecords() {
    const records = new Map();
    bookIds.forEach(bookId => {
      storageKinds.forEach(kind => {
        const values = localBookState(bookId, kind);
        Object.entries(values).forEach(([chapterId, payload]) => {
          if (core.isEmptyPayload(kind, payload)) return;
          const key = core.recordKey(bookId, chapterId, kind);
          records.set(key, { bookId, chapterId, kind, payload });
        });
      });
    });
    return records;
  }

  function applyLocalRecord(record) {
    const values = localBookState(record.bookId, record.kind);
    if (core.isEmptyPayload(record.kind, record.payload)) delete values[record.chapterId];
    else values[record.chapterId] = record.payload;
    safeWrite(storageKey(record.bookId, record.kind), values);
  }

  function notifyUpdated(changedBooks) {
    changedBooks.forEach(bookId => {
      global.dispatchEvent(new CustomEvent('medical-notes-sync-updated', {
        detail: { bookId }
      }));
    });
  }

  function rowFromRecord(record, userId = currentUser?.id) {
    if (!userId) throw new Error('A signed-in user is required');
    return {
      user_id: userId,
      book_id: record.bookId,
      chapter_id: String(record.chapterId),
      kind: record.kind,
      payload: record.payload
    };
  }

  async function upsertRecord(record, userId) {
    const { data, error } = await client
      .from(tableName())
      .upsert(rowFromRecord(record, userId), {
        onConflict: 'user_id,book_id,chapter_id,kind'
      })
      .select('book_id,chapter_id,kind,payload,updated_at')
      .single();
    if (error) throw error;
    return data;
  }

  function queueRecord(bookId, chapterId, kind, payload) {
    const key = core.recordKey(bookId, chapterId, kind);
    const record = { bookId, chapterId: String(chapterId), kind, payload };
    const ownerId = localOwnerId();
    const dirtyKey = dirtyStorageKey(ownerId);
    const dirty = safeRead(dirtyKey);
    dirty[key] = record;
    safeWrite(dirtyKey, dirty);
    if (!currentUser || !client) return;
    const userId = currentUser.id;
    const outbox = readOutbox(userId);
    outbox[key] = record;
    writeOutbox(outbox, userId);
    setStatus('pending', '已儲存在本機，等待同步…');
    clearTimeout(debounceTimers.get(key));
    debounceTimers.set(key, setTimeout(() => {
      debounceTimers.delete(key);
      syncAll();
    }, kind === 'personal-notes' ? 900 : 250));
  }

  function promoteLocalDirty(userId) {
    const dirty = safeRead(dirtyStorageKey(userId));
    if (!Object.keys(dirty).length) return;
    const outbox = readOutbox(userId);
    Object.assign(outbox, dirty);
    writeOutbox(outbox, userId);
  }

  function clearPendingRecord(key, record, userId) {
    const expectedHash = core.hashPayload(record.payload);
    const outbox = readOutbox(userId);
    if (outbox[key] && core.hashPayload(outbox[key].payload) === expectedHash) {
      delete outbox[key];
      writeOutbox(outbox, userId);
    }
    const dirtyKey = dirtyStorageKey(userId);
    const dirty = safeRead(dirtyKey);
    if (dirty[key] && core.hashPayload(dirty[key].payload) === expectedHash) {
      delete dirty[key];
      safeWrite(dirtyKey, dirty);
    }
  }

  async function syncAll() {
    if (!currentUser || !client) return;
    if (syncPromise) {
      syncQueued = true;
      return syncPromise;
    }
    const userId = currentUser.id;
    syncPromise = (async () => {
      setStatus('syncing', '正在同步所有裝置的資料…');
      promoteLocalDirty(userId);
      const { data, error } = await client
        .from(tableName())
        .select('book_id,chapter_id,kind,payload,updated_at')
        .eq('user_id', userId);
      if (error) throw error;
      if (currentUser?.id !== userId) return;

      const remoteRecords = new Map((data || []).map(row => {
        const key = core.recordKey(row.book_id, row.chapter_id, row.kind);
        return [key, {
          bookId: row.book_id,
          chapterId: row.chapter_id,
          kind: row.kind,
          payload: row.payload,
          updatedAt: row.updated_at
        }];
      }));
      const localRecords = extractLocalRecords();
      Object.entries(readOutbox(userId)).forEach(([key, record]) => {
        localRecords.set(key, record);
      });
      const meta = readMeta(userId);
      const changedBooks = new Set();
      const keys = new Set([...remoteRecords.keys(), ...localRecords.keys()]);

      for (const key of keys) {
        if (currentUser?.id !== userId) return;
        const local = localRecords.get(key);
        const remote = remoteRecords.get(key);
        if (!remote && local) {
          const row = await upsertRecord(local, userId);
          if (currentUser?.id !== userId) return;
          clearPendingRecord(key, local, userId);
          meta[key] = { hash: core.hashPayload(row.payload), syncedAt: row.updated_at };
          continue;
        }
        if (remote && !local) {
          applyLocalRecord(remote);
          changedBooks.add(remote.bookId);
          meta[key] = { hash: core.hashPayload(remote.payload), syncedAt: remote.updatedAt };
          continue;
        }
        if (!local || !remote) continue;

        const localHash = core.hashPayload(local.payload);
        const remoteHash = core.hashPayload(remote.payload);
        const lastHash = meta[key]?.hash;
        if (localHash === remoteHash) {
          clearPendingRecord(key, local, userId);
          meta[key] = { hash: remoteHash, syncedAt: remote.updatedAt };
        } else if (lastHash && localHash === lastHash) {
          applyLocalRecord(remote);
          changedBooks.add(remote.bookId);
          clearPendingRecord(key, local, userId);
          meta[key] = { hash: remoteHash, syncedAt: remote.updatedAt };
        } else if (lastHash && remoteHash === lastHash) {
          const row = await upsertRecord(local, userId);
          if (currentUser?.id !== userId) return;
          clearPendingRecord(key, local, userId);
          meta[key] = { hash: core.hashPayload(row.payload), syncedAt: row.updated_at };
        } else {
          const merged = {
            ...local,
            payload: core.mergePayload(local.kind, local.payload, remote.payload)
          };
          const row = await upsertRecord(merged, userId);
          if (currentUser?.id !== userId) return;
          applyLocalRecord(merged);
          changedBooks.add(merged.bookId);
          clearPendingRecord(key, local, userId);
          meta[key] = { hash: core.hashPayload(row.payload), syncedAt: row.updated_at };
        }
      }

      if (currentUser?.id !== userId) return;
      writeMeta(meta, userId);
      saveActiveSnapshot(userId);
      notifyUpdated(changedBooks);
      setStatus('synced', '所有變更已同步');
    })().catch(() => {
      setStatus('error', navigator.onLine ? '同步失敗，請稍後再試' : '目前離線，登入狀態與本機資料不受影響');
    }).finally(() => {
      syncPromise = null;
      if (syncQueued) {
        syncQueued = false;
        setTimeout(syncAll, 0);
      }
    });
    return syncPromise;
  }

  async function handleSession(session) {
    const previousUser = currentUser;
    const nextUser = session?.user || null;
    currentUser = nextUser;
    renderAccount();
    if (!nextUser) {
      if (previousUser?.id) {
        saveActiveSnapshot(previousUser.id);
        restoreActiveSnapshot('unclaimed');
        try {
          localStorage.removeItem(lastAccountKey);
        } catch {}
      }
      notifyUpdated(new Set(bookIds));
      return;
    }
    prepareAccountLocalState(nextUser.id);
    notifyUpdated(new Set(bookIds));
    await syncAll();
  }

  async function requestMagicLink(event) {
    event.preventDefault();
    const email = elements.email.value.trim();
    if (!email) return;
    elements.loginSubmit.disabled = true;
    elements.loginMessage.textContent = '正在寄送登入連結…';
    const redirectTo = `${global.location.origin}${global.location.pathname}`;
    const { error } = await client.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
        shouldCreateUser: true
      }
    });
    elements.loginSubmit.disabled = false;
    elements.loginMessage.textContent = error
      ? `無法寄送：${error.message}`
      : '登入連結已寄出，請到信箱開啟。';
  }

  async function signOut() {
    if (!client) return;
    elements.signOut.disabled = true;
    await client.auth.signOut();
    elements.signOut.disabled = false;
    closeDialog();
  }

  async function init(options = {}) {
    if (!core) throw new Error('MedicalNotesSyncCore is required');
    bookIds = (options.books || []).map(book => typeof book === 'string' ? book : book.id).filter(Boolean);
    elements = {
      bar: document.querySelector('#syncBar'),
      status: document.querySelector('#syncStatus'),
      user: document.querySelector('#syncUser'),
      syncNow: document.querySelector('#syncNow'),
      accountButton: document.querySelector('#accountButton'),
      dialog: document.querySelector('#accountDialog'),
      close: document.querySelector('#accountClose'),
      loginForm: document.querySelector('#accountLoginForm'),
      email: document.querySelector('#accountEmail'),
      loginSubmit: document.querySelector('#accountLoginSubmit'),
      loginMessage: document.querySelector('#accountLoginMessage'),
      signedInPanel: document.querySelector('#accountSignedIn'),
      signedInEmail: document.querySelector('#accountSignedInEmail'),
      signOut: document.querySelector('#accountSignOut'),
      setupPanel: document.querySelector('#accountSetup')
    };
    if (!elements.bar) return;

    elements.accountButton.addEventListener('click', openDialog);
    elements.close.addEventListener('click', closeDialog);
    elements.syncNow.addEventListener('click', syncAll);
    elements.loginForm.addEventListener('submit', requestMagicLink);
    elements.signOut.addEventListener('click', signOut);
    elements.dialog.addEventListener('click', event => {
      if (event.target === elements.dialog) closeDialog();
    });
    global.addEventListener('online', syncAll);
    global.addEventListener('focus', syncAll);
    renderAccount();

    if (!available()) return;
    client = global.supabase.createClient(
      config.supabaseUrl,
      config.supabasePublishableKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );
    client.auth.onAuthStateChange((_event, session) => {
      setTimeout(() => handleSession(session), 0);
    });
    const { data } = await client.auth.getSession();
    await handleSession(data.session);
  }

  global.MedicalNotesSync = {
    init,
    isSignedIn: () => Boolean(currentUser),
    queueRecord,
    syncAll
  };
}(window));
