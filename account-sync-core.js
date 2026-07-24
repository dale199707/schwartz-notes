(function attachMedicalNotesSyncCore(global) {
  const kinds = new Set(['personal-notes', 'important', 'highlights']);

  function canonicalize(value) {
    if (Array.isArray(value)) return value.map(canonicalize);
    if (!value || typeof value !== 'object') return value;
    return Object.keys(value).sort().reduce((result, key) => {
      result[key] = canonicalize(value[key]);
      return result;
    }, {});
  }

  function canonicalStringify(value) {
    return JSON.stringify(canonicalize(value)) ?? 'null';
  }

  function hashPayload(value) {
    const input = canonicalStringify(value);
    let hash = 2166136261;
    for (let index = 0; index < input.length; index += 1) {
      hash ^= input.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
  }

  function recordKey(bookId, chapterId, kind) {
    if (!kinds.has(kind)) throw new Error(`Unsupported sync kind: ${kind}`);
    return `${bookId}\u001f${String(chapterId)}\u001f${kind}`;
  }

  function parseRecordKey(key) {
    const [bookId, chapterId, kind] = String(key).split('\u001f');
    if (!bookId || !chapterId || !kinds.has(kind)) throw new Error('Invalid sync record key');
    return { bookId, chapterId, kind };
  }

  function isEmptyPayload(kind, payload) {
    if (kind === 'personal-notes') return !String(payload || '').trim();
    if (kind === 'important') return !Array.isArray(payload) || payload.length === 0;
    return !payload || typeof payload !== 'object' || Object.keys(payload).length === 0;
  }

  function normalizedRanges(value) {
    const colors = new Set(['yellow', 'green', 'blue']);
    return (Array.isArray(value) ? value : [])
      .map(item => ({
        start: Number(item.start),
        end: Number(item.end),
        color: String(item.color)
      }))
      .filter(item => Number.isInteger(item.start)
        && Number.isInteger(item.end)
        && item.start >= 0
        && item.end > item.start
        && colors.has(item.color))
      .sort((a, b) => a.start - b.start || a.end - b.end);
  }

  function overlayRange(ranges, incoming) {
    const next = [];
    ranges.forEach(item => {
      if (item.end <= incoming.start || item.start >= incoming.end) {
        next.push(item);
        return;
      }
      if (item.start < incoming.start) next.push({ ...item, end: incoming.start });
      if (item.end > incoming.end) next.push({ ...item, start: incoming.end });
    });
    next.push(incoming);
    return next.sort((a, b) => a.start - b.start || a.end - b.end);
  }

  function mergeHighlights(local, remote) {
    const merged = {};
    const targets = new Set([
      ...Object.keys(remote && typeof remote === 'object' ? remote : {}),
      ...Object.keys(local && typeof local === 'object' ? local : {})
    ]);
    targets.forEach(target => {
      let ranges = normalizedRanges(remote?.[target]);
      normalizedRanges(local?.[target]).forEach(range => {
        ranges = overlayRange(ranges, range);
      });
      if (ranges.length) merged[target] = ranges;
    });
    return merged;
  }

  function mergePayload(kind, local, remote) {
    if (kind === 'important') {
      return [...new Set([
        ...(Array.isArray(remote) ? remote : []),
        ...(Array.isArray(local) ? local : [])
      ].filter(Number.isInteger))].sort((a, b) => a - b);
    }
    if (kind === 'highlights') return mergeHighlights(local, remote);

    const localText = String(local || '').trim();
    const remoteText = String(remote || '').trim();
    if (!localText) return remoteText;
    if (!remoteText || localText === remoteText) return localText;
    if (remoteText.includes(localText)) return remoteText;
    if (localText.includes(remoteText)) return localText;
    return `${remoteText}\n\n--- 同步時保留的本機版本 ---\n${localText}`;
  }

  const api = {
    canonicalStringify,
    hashPayload,
    isEmptyPayload,
    mergePayload,
    parseRecordKey,
    recordKey
  };

  global.MedicalNotesSyncCore = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
}(typeof window === 'undefined' ? globalThis : window));
