import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const sourceRoot = path.join(repositoryRoot, 'Zollinger', 'Zollinger_Images');
const chapterRoot = path.join(repositoryRoot, 'books', 'zollinger-10e', 'chapters');
const outputRoot = path.join(repositoryRoot, 'books', 'zollinger-10e', 'private-figures');
const manifestPath = path.join(repositoryRoot, 'books', 'zollinger-10e', 'private-figures.js');

const pad = value => String(value).padStart(3, '0');
const pageNumber = filename => {
  const match = filename.match(/_p(\d+)\.jpg$/i);
  if (!match) throw new Error(`無法解析 PDF page：${filename}`);
  return Number(match[1]);
};

const chapterFiles = await readdir(chapterRoot);
const chapterTitles = new Map();
for (const filename of chapterFiles.filter(name => /^chapter-\d{3}-.*\.md$/.test(name))) {
  const text = await readFile(path.join(chapterRoot, filename), 'utf8');
  const heading = text.match(/^# Chapter\s+(\d+):\s*(.+)$/m);
  if (!heading) throw new Error(`章節標題格式錯誤：${filename}`);
  chapterTitles.set(Number(heading[1]), heading[2].trim());
}

const sourceDirectories = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter(entry => entry.isDirectory() && /^Ch\d{3}_/.test(entry.name))
  .map(entry => entry.name)
  .sort();

const groupedImages = new Map();
for (const directory of sourceDirectories) {
  const chapterId = Number(directory.slice(2, 5));
  if (chapterId === 0) continue;
  const images = (await readdir(path.join(sourceRoot, directory)))
    .filter(filename => /\.jpg$/i.test(filename))
    .sort((a, b) => pageNumber(a) - pageNumber(b));
  if (!images.length) continue;
  if (!chapterTitles.has(chapterId)) throw new Error(`圖片找不到正式章節：${directory}`);
  groupedImages.set(chapterId, images.map(filename => ({
    source: path.join(sourceRoot, directory, filename),
    page: pageNumber(filename)
  })));
}

const expectedMissing = [1, 2, 3, 4, 93, 96];
const actualMissing = [...chapterTitles.keys()]
  .filter(id => !groupedImages.has(id))
  .sort((a, b) => a - b);
if (JSON.stringify(actualMissing) !== JSON.stringify(expectedMissing)) {
  throw new Error(`未附圖片章節不符預期：${actualMissing.join(', ')}`);
}

const imageCount = [...groupedImages.values()].reduce((total, images) => total + images.length, 0);
if (groupedImages.size !== 144 || imageCount !== 260) {
  throw new Error(`圖片盤點不符預期：chapters=${groupedImages.size}, images=${imageCount}`);
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

const manifest = {};
for (const [chapterId, images] of [...groupedImages.entries()].sort(([a], [b]) => a - b)) {
  const title = chapterTitles.get(chapterId);
  manifest[chapterId] = [];
  for (const [index, image] of images.entries()) {
    const outputName = `chapter-${pad(chapterId)}-page-${pad(image.page)}.jpg`;
    const relativeSource = `books/zollinger-10e/private-figures/${outputName}`;
    await copyFile(image.source, path.join(outputRoot, outputName));
    manifest[chapterId].push({
      src: relativeSource,
      alt: `${title} 原書手術圖版，PDF page ${image.page}`,
      title: `${title} · 圖版 ${index + 1}/${images.length}`,
      description: `原書手術步驟圖版（PDF p.${image.page}）；僅限私人學習環境顯示，不得公開散布。`,
      source: relativeSource,
      credit: `Zollinger’s Atlas of Surgical Operations, 10th ed.（2016），PDF p.${image.page} · 私人學習用`
    });
  }
}

const manifestText = `(function () {
  window.MEDICAL_BOOK_DATA = window.MEDICAL_BOOK_DATA || {};
  const bookData = window.MEDICAL_BOOK_DATA['zollinger-10e'];
  if (!bookData) return;
  const privateFigures = ${JSON.stringify(manifest, null, 2)};
  bookData.figures = bookData.figures || {};
  Object.entries(privateFigures).forEach(([chapterId, figures]) => {
    bookData.figures[chapterId] = [...(bookData.figures[chapterId] || []), ...figures];
  });
}());
`;

await writeFile(manifestPath, manifestText, 'utf8');
await writeFile(
  path.join(outputRoot, 'README.md'),
  [
    '# Zollinger 私人圖版',
    '',
    '本目錄由 `scripts/build-zollinger-private-figures.mjs` 從使用者本機教材副本產生。',
    '',
    '- 僅供私人學習與已限制存取的環境使用。',
    '- 不得部署到公開 GitHub Pages、公開 repository 或其他公開網站。',
    '- Chapter 1–4、93、96 沒有對應圖版。',
    '- Chapter 150 的來源資料夾雖名為 `Ch150_Index`，圖像內容實際為 Suture of Tendon，已依影像內容對應至 Chapter 150。',
    '',
    `產出：${groupedImages.size} 個章節、${imageCount} 張 JPG。`,
    ''
  ].join('\n'),
  'utf8'
);

console.log(JSON.stringify({
  chaptersWithImages: groupedImages.size,
  images: imageCount,
  chaptersWithoutImages: actualMissing,
  outputRoot,
  manifestPath
}, null, 2));
