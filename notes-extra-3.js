(function () {
  const files = [
    'chapter-16-skin-and-subcutaneous-tissue.md',
    'chapter-18-head-and-neck.md',
    'chapter-23-arterial-disease.md',
    'chapter-24-venous-and-lymphatic-disease.md',
    'chapter-27-bariatric-surgery.md',
    'chapter-35-abdominal-wall-ventral-hernia.md',
    'chapter-37-inguinal-hernias.md'
  ];

  const clean = value => value.trim()
    .replace(/\\([<>*])/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  const section = (text, heading) => {
    const match = text.match(new RegExp(`^## ${heading}\\r?$`, 'm'));
    if (!match || match.index === undefined) return '';
    const body = text.slice(match.index + match[0].length).replace(/^\r?\n/, '');
    const end = body.search(/^## /m);
    return (end < 0 ? body : body.slice(0, end)).trim();
  };
  const bullets = text => text.split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.startsWith('- '))
    .map(line => clean(line.slice(2)));
  const tables = text => {
    const lines = text.split(/\r?\n/);
    const output = [];
    const row = line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => clean(cell));
    for (let i = 0; i < lines.length; i += 1) {
      if (!lines[i].includes('|') || !lines[i + 1] || !/^\s*\|?\s*:?-+/.test(lines[i + 1])) continue;
      const headers = row(lines[i]); const rows = []; i += 2;
      while (i < lines.length && lines[i].includes('|')) { rows.push(row(lines[i])); i += 1; }
      i -= 1; output.push([headers, ...rows]);
    }
    return output;
  };
  const references = text => text.split(/\r?\n/).flatMap(line => {
    const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return match ? [{ label: match[1], url: match[2] }] : [];
  });
  const parse = text => {
    const heading = text.match(/^# Chapter\s+(\d+):\s*(.+)\r?$/m);
    if (!heading) return null;
    const id = Number(heading[1]);
    const validation = section(text, 'Codex 驗證補強（2026）');
    return [id, {
      title: clean(heading[2]),
      zh: clean(heading[2]),
      part: '',
      bullets: [
        ...bullets(section(text, '核心整理')),
        ...bullets(validation)
      ],
      pearls: bullets(section(text, 'Clinical pearl')),
      tables: tables(section(text, '快速比較表')),
      updates: bullets(section(text, '後續證據更新')),
      references: [
        ...references(section(text, 'References')),
        ...references(validation)
      ]
    }];
  };

  window.loadMarkdownNotes = chapterFiles => Promise.all(chapterFiles.map(file => fetch(file).then(response => {
    if (!response.ok) throw new Error(`無法載入 ${file}`);
    return response.text();
  }))).then(texts => {
    const chapters = Object.fromEntries(texts.map(parse).filter(Boolean));
    window.CLAUDE_NOTES = Object.assign(window.CLAUDE_NOTES || {}, chapters);
  }).catch(error => console.error('新增章節載入失敗：', error));
  window.CLAUDE_NOTES_PENDING = window.loadMarkdownNotes(files);
}());
