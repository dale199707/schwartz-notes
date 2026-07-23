# Medical Notes Library 專案完整交接

- 最後更新：2026-07-24
- 交接版本：v17（repository 已由使用者改為 private；Zollinger 原書圖版完成 144 章／260 張對應，納入私人閉源版本）
- 本機 repo：`/Users/tinrepin/Desktop/medical`
- GitHub repo：`dale199707/schwartz-notes`
- 正式網站：<https://dale199707.github.io/schwartz-notes/>
- 正式部署分支：`main`

## 0. 給新 Chat 的最短指令

新 Chat 開始時，使用者可直接貼上：

> 請先完整閱讀 `/Users/tinrepin/Desktop/medical/PROJECT_HANDOFF.md`、專案 `/Users/tinrepin/Desktop/medical/README.md` 與 `/Users/tinrepin/Downloads/AGENTS.md`，確認 `/Users/tinrepin/Desktop/medical` 的 Git 狀態與目前正式網站版本後，再協助新增下一本書。請保留 Schwartz 與 ICU Book 正式版本，不要直接大幅改寫 `main`；先建立 `codex/` 功能分支與新書網站骨架，再讓 Claude 把原稿放入新書自己的 `claude/`，之後由 Codex 做格式整理、來源查核、十題 evidence audit、網站同步與分批提交。

若新書資料已知，可在後面補上：

```text
新書名稱：
Edition：
出版年份：
作者／編者：
原始教材或章節目錄位置：
Claude 原稿預計放置位置：
總章數：
希望每批處理章數：
```

新 Chat 讀完本檔後，若上述資料已齊全，不需重問；直接檢查檔案、提出最小變更範圍並建立新書骨架。若缺少會影響目錄或資料模型的資訊，才向使用者確認。

## 1. 新 Chat 接手前必做

在修改任何檔案前，依序完成：

1. 完整閱讀本檔、根目錄 `README.md` 與 `/Users/tinrepin/Downloads/AGENTS.md`。
2. 執行唯讀 Git 檢查，確認目前 branch、`main`／`origin/main` 關係與未提交變更。
3. 不得覆蓋、刪除或順手整理不屬於本次工作的使用者變更。
4. 從最新且乾淨的 `main` 建立 `codex/<book-id>-library` 功能分支；未經使用者同意不得直接部署 `main`。
5. 先確認新書的 title、edition、publication year、chapter count、正式目錄及檔案位置。
6. 若任務涉及醫學內容驗證，必須使用 `validate-medical-chapter` skill，完整執行十題 evidence audit。
7. 若任務涉及 OpenAI、Cloudflare Worker 或 secrets，不得讀出、顯示、寫入或提交任何 secret。

## 2. 使用者偏好與協作方式

- 主要溝通語言：繁體中文，採台灣用語。
- 使用者是外科住院醫師；說明應直接、清楚，不需過度技術化。
- anatomy、disease、drug、procedure、guideline、trial 與重要專有名詞保留英文。
- 內容偏好條列、比較表、Clinical pearl、red flag、decision point 與適度留白。
- 不逐段翻譯，不大量轉錄教材，不為了改而改。
- 原則上 Claude 主要負責撰寫原始章節；Codex 負責網站架構、格式整合、事實與來源驗證、evidence audit、Git 與部署。若使用者明確授權（例如 Claude 額度用盡），Codex 也可直接依原書與近期 evidence 撰寫下一批正式稿。
- 大型變更先在功能分支完成；使用者確認後才合併 `main` 與部署正式網站。
- 每次只 stage 明確指定的檔案，禁止 `git add -A`。

## 3. 目前正式狀態

2026-07-24 的已部署基準：

- 正式 commit 為 `ffab2be`（`Complete Zollinger chapters 71-150`），GitHub Pages deployment 已成功。
- `main` 與 `origin/main` 同步於 `ffab2be`。
- Schwartz 54 / 54 章完成，54 / 54 章通過 evidence audit。
- ICU Book 53 / 53 章完成，53 / 53 章通過 evidence audit。
- Zollinger Chapter 1–150 已完成，150 / 150 章通過 evidence audit。私人版本另加入 144 章／260 張原書圖版；Chapter 5 同時保留原創上腹動脈血流關係 SVG。
- ICU Book 的書籍狀態已是 `complete`，網站選單不再顯示「整理中」。
- 網站預設開啟 Schwartz Chapter 1。
- 右側「詢問 AI」在首次載入時預設收合。
- 左側章節目錄可點擊收合／展開。
- 「核心整理」與「Clinical pearl」可選取文字並套用黃、綠、藍螢光標記；點擊既有標記可改色或清除。

接手時仍須重新以 Git 與正式網站確認，不可只相信本段日期。

Zollinger 全書內容已完成；原書圖版整合在 `codex/zollinger-private-images` 完成。使用者已以 GitHub 設定頁截圖確認 repository 為 private，並明確要求直接上傳私人版本。

## 4. 目前書籍

### 4.1 Schwartz’s Principles of Surgery, 11th Edition

- 書籍 ID：`schwartz-11e`
- 教材年份：2019
- 章數：54
- Metadata：`books/schwartz-11e/book.json`
- 原始 Markdown：根目錄 `chapter-*.md`
- 網站資料：`notes.js`、`notes-extra.js` 至 `notes-extra-4.js`
- Audit：根目錄 `audits/index.md` 與 `audits/chapter-XX-audit.md`
- 狀態：正式穩定版本，54 / 54 `passed`

Schwartz 是較早建立的 legacy 資料結構。新增新書時不得順便搬移、重新命名或批次改寫 Schwartz；除非使用者另外授權 migration。

### 4.2 The ICU Book, 5th Edition

- 書籍 ID：`icu-book-5e`
- 教材年份：2025
- 章數：53
- Metadata：`books/icu-book-5e/book.json`
- Claude 原稿：`books/icu-book-5e/claude/`
- 網站正式 Markdown：`books/icu-book-5e/chapters/`
- 網站 loader／parser：`books/icu-book-5e/chapters.js`
- Audit：`books/icu-book-5e/audits/`
- Claude 規格：`books/icu-book-5e/CLAUDE_INSTRUCTIONS.md`
- 狀態：正式完成，53 / 53 `passed`

ICU Book 是下一本書應優先參考的資料夾模型。網站永遠讀取 `chapters/`，不直接讀取 `claude/`。

### 4.3 Zollinger’s Atlas of Surgical Operations, 10th Edition

- 書籍 ID：`zollinger-10e`
- 教材年份：2016
- 作者：E. Christopher Ellison、Robert M. Zollinger, Jr.
- 章數：150（14 sections）
- 本機教材：`Zollinger/Zollinger's Atlas of Surgical Operations 10th ed.pdf`（由 `*.pdf` 規則忽略，不得提交）
- 本機原書圖版來源：`Zollinger/Zollinger_Images/`（由 `.gitignore` 排除）
- 私人網站圖版：`books/zollinger-10e/private-figures/`（144 章、260 張 JPG）
- 私人圖片 manifest：`books/zollinger-10e/private-figures.js`
- 產生工具：`scripts/build-zollinger-private-figures.mjs`
- Metadata：`books/zollinger-10e/book.json`
- Claude 原稿：`books/zollinger-10e/claude/`
- 網站正式 Markdown：`books/zollinger-10e/chapters/`
- 網站 loader／parser：`books/zollinger-10e/chapters.js`
- 合法圖片 manifest：`books/zollinger-10e/figures.js`
- 圖片授權紀錄：`books/zollinger-10e/figures/README.md`
- Audit：`books/zollinger-10e/audits/`
- Claude 規格：`books/zollinger-10e/CLAUDE_INSTRUCTIONS.md`
- 狀態：正式內容完成，Chapter 1–150 為 `ready` 且 150 / 150 `passed`，書籍 metadata 為 `complete`。Chapter 71–150 已由 commit `ffab2be` 部署。

Zollinger 的原書手術圖可由工具從 PDF 轉成頁面 PNG 或抽出內嵌 JPEG；本機 `Zollinger_Images/` 已包含按 chapter 分類的裁切圖版與 `_INDEX.csv`，僅可供私人定位與理解。McGraw-Hill 版權頁禁止未經授權重製或散布，因此不得直接提交或放上 GitHub Pages；正式網站只使用 Public Domain、相容 Creative Commons、已取得授權或未仿製教材構圖的原創圖解。

使用者於 2026-07-24 要求為未來的私人／閉源版本加入原書圖版。本機 `codex/zollinger-private-images` 已完成 Chapter 5–150 對應：Chapter 1–4、93、96 無圖，其餘 144 章共 260 張；Chapter 150 的來源資料夾雖名為 `Ch150_Index`，實際影像為 Suture of Tendon，已依內容正確對應。Chapter 5 保留原創 SVG，並在私人版本追加原書圖版。

使用者已於 2026-07-24 以 GitHub 設定頁截圖確認 `dale199707/schwartz-notes` 為 private，並表示已自行檢查存取狀態、要求略過額外閘門直接上傳。整理後的 `private-figures.js` 與 `private-figures/` 可納入此私人 repository；原始 `Zollinger/Zollinger_Images/` 與 PDF 仍保持忽略。此 repository 不得再次改為 public，也不得將私人圖版發布到公開 Pages、其他公開 branch 或第三方網站。

## 5. 網站與服務架構

此專案是無框架的 GitHub Pages 靜態網站，沒有 npm build step。

主要檔案：

- `index.html`：UI、樣式、書籍切換、搜尋、章節渲染、個人筆記、重要標記、螢光筆與 AI UI。
- `books.js`：網站書籍清單與每本書的公開 metadata。
- `books/<book-id>/book.json`：單本書 metadata。
- `notes*.js`：Schwartz 網站資料。
- `books/icu-book-5e/chapters.js`：ICU 章節目錄、Markdown fetch、parser 與 notes registry。
- `ai-config.js`：公開的 Worker endpoint。
- `worker/`：Cloudflare Worker。
- `assets/anatomy/`：合法授權 anatomy 圖片與授權紀錄。

### 5.1 多書 loader 的關鍵技術事實

Zollinger 功能分支已將第三本書載入邏輯泛化為 `window.MEDICAL_BOOK_DATA[bookId]` registry，並保留 Schwartz legacy adapter。合併後的載入方式為：

1. `schwartz-11e` 使用 `schwartzReady`／`schwartzChapters`。
2. ICU 與 Zollinger 依 `bookId` 使用各自的 registry data、pending loader 與 figures manifest。

因此未來第四本書仍不能只在 `books.js` 加一列；必須依既有 registry model 加入獨立 chapter metadata、notes、pending loader 與合法圖片 manifest。同時保留 Schwartz legacy adapter，不要為此大幅重寫整個 `index.html`。

泛化後至少應能依 `bookId` 取得：

- chapter metadata array
- chapter notes object
- pending loader Promise
- optional parser／source path

完成後必須回歸測試 Schwartz 與 ICU，確認內容、搜尋、章節數與瀏覽器保存資料均未互相污染。

## 6. 新書標準資料夾

新書 ID 使用小寫英數與連字號，建議格式為 `<short-title>-<edition>`，例如 `sabiston-22e`。

```text
books/
  <book-id>/
    book.json
    README.md
    CLAUDE_INSTRUCTIONS.md
    chapters.js
    claude/
      chapter-01-slug.md
    chapters/
      chapter-01-slug.md
    audits/
      index.md
      chapter-01-audit.md
```

`book.json` 至少包含：

```json
{
  "id": "<book-id>",
  "title": "Full English Title",
  "edition": "Nth Edition",
  "publicationYear": 2026,
  "languagePolicy": "繁體中文整理，醫學專有名詞保留英文",
  "chapterCount": 0,
  "status": "drafting"
}
```

`books.js` 另需加入 `shortTitle`、`source` 及相同的章數／狀態。只有所有章節與 audit 均完成後才將 book status 改為 `complete`。

### 6.1 新書骨架完成條件

內容尚未交給 Claude 前，網站骨架至少要做到：

1. 新書可從 selector 切換。
2. 書名、edition、出版年份與章節數正確。
3. 左側顯示正式章節目錄與 section／part。
4. 未完成章節顯示清楚的待整理內容，不讀取別本書資料。
5. 搜尋、章節收合、AI context 與瀏覽器儲存均帶正確 `bookId`。
6. Schwartz 預設 Chapter 1、AI 預設收合等現有行為不變。
7. Schwartz 54 章與 ICU 53 章仍可正常讀取。

若使用者只要求「先架網站，之後再讓 Claude 寫內容」，做到本節即可先交付，不要自行生成整本內容。

## 7. Claude 與 Codex 的固定分工

### 7.1 Claude 負責

- 只把指定章節的原始 Markdown 寫入新書自己的 `claude/`。
- 檔名必須與正式 `chapters/` 對應檔名一致。
- 依 `CLAUDE_INSTRUCTIONS.md` 寫核心整理、Clinical pearl、快速比較、後續證據更新與 References。
- 不修改 `chapters/`、`audits/`、`chapters.js`、`books.js`、`index.html` 或其他書籍。
- 不自行宣稱 evidence audit 通過。

### 7.2 Codex 負責

1. 保留 Claude 原稿，不把 `claude/` 當成正式網站來源。
2. 檢查檔名、章號、標題、固定 section、條列數、表格與 References 格式。
3. 查核診斷、治療、dose、threshold、contraindication、prognosis、follow-up 與 guideline currency。
4. 檢查每個外部連結是否實際對應所述來源；404、錯頁或不相關 landing page 必須更換。
5. 修訂後在正式章首加入 `<!-- status: ready -->`，同步至 `chapters/`。
6. 使用 `validate-medical-chapter` skill 完成十題 evidence audit。
7. 在該書 `audits/` 保存逐題依據，更新 `audits/index.md`。
8. 確認 loader 能解析 Markdown，網站章數與 ready 數量正確。
9. 依使用者指定批次 commit／push；未經同意不部署 `main`。

Claude 原稿與 Codex 正式稿內容可能相近，這是正常的。差異不在於一定要大幅改寫，而在於正式稿已通過格式整理、臨床主張查核、連結核對與 evidence audit。

## 8. 章節 Markdown 固定格式

每章使用：

```markdown
<!-- status: ready -->
# Chapter XX: English Chapter Title

## 核心整理

- 8–15 個可獨立閱讀的重點。

## Clinical pearl

- 2–4 個 decision point、red flag 或常見陷阱。

## 快速比較表

| 比較面向 | A | B |
|---|---|---|
| ... | ... | ... |

## 後續證據更新

- 相對教材出版年份、會改變臨床決策的更新；若沒有明確更新，直接寫明。

## References

- [組織／作者，年份，標題](https://...)
```

內容原則：

- 以繁體中文重新組織，不逐段翻譯或大量轉錄原文。
- anatomy、disease、drug、procedure、guideline 與重要名詞保留英文。
- 每個會改變臨床處置的主張需有可點擊來源、年份、適用族群與限制。
- 教材觀點與後續 evidence 必須區分。
- 不杜撰數據、作者、trial、recommendation class 或 URL。
- 爭議性結論不可寫成普遍標準治療。

## 9. 十題 evidence audit

醫學章節正式上線前，必須使用 `validate-medical-chapter` skill：

1. 每章提出 10 個彼此獨立、可被反證的問題。
2. 問題需涵蓋正確性、完整性、臨床 recommendation、數值／dose／threshold、比較表、Clinical pearl 與 evidence currency。
3. 每題需有可靠且直接支持的來源。
4. 任一題不完整即修訂文稿並重新評分。
5. 只有 10 / 10 `SUPPORTED` 且來源無失效、撤稿或明顯過時，才標記 `passed`。
6. Audit 報告必須保存在該書自己的 `audits/chapter-XX-audit.md`。
7. `audits/index.md` 需記錄 chapter、title、draft status、score、audit status 與報告連結。

`ready` 只代表網站可載入，不代表醫學內容已驗證；`passed` 才代表完成本專案的十題 audit 門檻。10 / 10 仍不取代臨床判斷、最新 guideline 或院內規範。

## 10. References 與連結規則

- 優先官方 guideline、政府／專業學會、PubMed、DOI、systematic review 或 pivotal trial。
- 不只檢查 HTTP 狀態；還要確認頁面標題、年份與內容確實支持章節主張。
- 期刊網站改版造成 404 時，優先改用同一文獻的 PubMed、DOI 或正式學會頁。
- 避免連到搜尋結果頁、新聞摘要、無法辨識的轉址或不相關首頁。
- 若來源需要登入才能看全文，但 citation metadata 正確，可保留 DOI／PubMed；能提供公開正式版本時優先使用。
- 不得引用已撤稿文章支撐 recommendation。
- 每批章節完成後應另做一次全批次 link audit。

## 11. 網站現有功能與瀏覽器資料

現有功能：

- 多書 selector。
- 章節搜尋與完成章數。
- 可收合的左側章節目錄。
- 每個核心重點可標記星號，側欄顯示該章重要項目數。
- 每章個人筆記，自動儲存在目前瀏覽器。
- 核心整理／Clinical pearl 的黃、綠、藍螢光標記。
- 右側 AI 面板可收合，使用密碼驗證後才解鎖查詢。
- AI request 會帶入 book title、edition、publication year、chapter 與 core notes。

目前 localStorage key 由 `index.html` 的 `storageKey(kind)` 產生：

- `medical-notes-<bookId>-important-v1`
- `medical-notes-<bookId>-personal-notes-v1`
- `medical-notes-<bookId>-highlights-v1`

Schwartz 舊版 `schwartz-important-v1` 與 `schwartz-personal-notes-v1` 會複製到新 key，不刪除舊資料。AI 密碼暫存使用 `sessionStorage` 的 legacy key `schwartz-ai-access-v1`。

任何新書都必須沿用 `bookId` 隔離，不得讓相同 chapter number 互相覆蓋。

## 12. AI 與 Cloudflare Worker

- Worker 名稱：`schwartz-medical-ai`
- Base URL：<https://schwartz-medical-ai.dale199707.workers.dev>
- 前端設定：`ai-config.js`
- Worker 程式：`worker/src/index.js`
- 設定：`worker/wrangler.toml`

Endpoints：

- `POST /verify`：只驗證 AI 使用密碼，不呼叫 OpenAI。
- `POST /ask`：再次驗證密碼後呼叫 OpenAI Responses API，回傳回答與 citations。

必要 secrets：

- `OPENAI_API_KEY`
- `AI_ACCESS_PASSWORD`

絕對禁止把 secret 放入 `index.html`、`ai-config.js`、`wrangler.toml`、README、handoff、commit、issue 或對話輸出。不得用會顯示內容的方式讀取 `.env.local`、`.dev.vars` 或 Cloudflare secrets。

一般新增書籍只需擴充 AI context，不應重新部署 Worker；除非 request／response schema 或 security policy 改變。

## 13. 圖片與版權

- Public／可散布版本不得複製、截圖或上傳教材內受版權保護的圖片。
- `books/zollinger-10e/private-figures/` 是使用者明確要求、只供私人閉源 repository 使用的例外；不得重新公開或分享。
- 優先使用 Public Domain、CC BY、CC BY-SA 等允許使用的來源。
- 新增圖片前必須確認原始來源授權。
- Caption 保留作者、授權與來源連結。
- 現有授權紀錄：`assets/anatomy/README.md`。
- 找不到合法圖片時，優先製作原創 SVG 概念圖，不仿製教材插圖。

## 14. 新書完整工作流程

### Phase A：收件與規劃

1. 確認書名、edition、publication year、作者、chapter count 與正式目錄。
2. 確認教材／章節目錄及 Claude 原稿的本機位置。
3. 決定 `<book-id>`、檔名 slug 與每批章數。
4. 從最新乾淨 `main` 建立 `codex/<book-id>-library`。
5. 只提出與新書相關的最小架構變更；不得把 Schwartz migration 混入同一批。

### Phase B：先架網站

1. 建立新書資料夾、metadata、README、Claude 規格、chapter placeholders 與 audit index。
2. 在 `books.js` 登錄新書。
3. 泛化 book-data loader，使第三本書依自己的 `bookId` 載入。
4. 將新書 script／pending loader 接入頁面。
5. 驗證 selector、章節目錄、placeholder、搜尋、AI context 與 localStorage isolation。
6. 回歸測試 Schwartz／ICU。

### Phase C：Claude 交稿

1. Claude 只寫入 `books/<book-id>/claude/`。
2. 可分批 5 章交付，或依使用者指定。
3. 原稿到齊後先核對實際檔名與目錄，不猜測位置。

### Phase D：Codex 驗證與同步

1. 逐章做結構檢查與 medical claims audit。
2. 檢查並修復 References。
3. 執行十題 evidence audit。
4. 同步正式稿至 `chapters/`，更新 audit index。
5. 驗證網站實際載入數量與內容。
6. 每批完成後依使用者指示 commit／push。

### Phase E：正式部署

1. 確認功能分支乾淨且 tests 通過。
2. 同步最新 `main`，避免覆蓋遠端更新。
3. 使用者明確同意後才 fast-forward／merge 到 `main`。
4. Push `main` 觸發 GitHub Pages。
5. 等待 `pages build and deployment` 成功。
6. 以 cache-busting query 讀取正式頁面，確認 commit 的新標記已上線。

## 15. 每次修改後的驗證清單

最低要求：

1. `git diff --check` 通過。
2. `book.json` 與其他 JSON 可解析。
3. `index.html` module JavaScript syntax check 通過。
4. 章節檔數、目錄章數、loader 章數與 `chapterCount` 一致。
5. 每份 ready Markdown 都有固定六個 heading 與 `<!-- status: ready -->`。
6. References parser 能處理 URL 內的圓括號與跳脫字元。
7. 新書內容不會錯讀 ICU 或 Schwartz。
8. 搜尋、章節切換、重要標記、個人筆記與螢光筆正常。
9. localStorage 不跨書或跨章覆蓋。
10. AI context 顯示正確書名、edition 與 chapter。
11. AI 面板收合後版面正常；desktop 與 mobile 都需檢查。
12. Schwartz 54 / 54 與 ICU 53 / 53 仍可載入。
13. tracked files 不含 PDF、`.DS_Store`、API key、AI 密碼或其他 secret。
14. Push 後確認遠端 branch SHA；部署後確認 GitHub Pages build 與正式 HTML。

因 ICU 與未來新書會在瀏覽器以 `fetch()` 載入 Markdown，本機完整測試宜使用 local static server；單純 `file://` 可能被瀏覽器阻擋。正式網站則由 GitHub Pages 提供。

## 16. Git 規則

- 不使用 destructive reset、強制 push 或直接刪除既有章節。
- 不使用 `git add -A`；只 stage 本次涉及的明確檔案。
- commit message 清楚描述使用者可見成果或章節範圍。
- 依 `/Users/tinrepin/Downloads/AGENTS.md`：commit 後，在 push 前同步遠端並處理必要 rebase。
- 未經使用者明確同意，不合併 `main`、不部署正式網站。
- 文件或網站發布後，需回報 branch、commit、push、部署狀態與正式網址。

## 17. 不可踩的坑

1. 不要把 `claude/` 直接當網站來源。
2. 不要因內容看起來完整就跳過十題 audit。
3. 不要只在 `books.js` 加第三本書而忘記目前 loader 仍指向 ICU。
4. 不要讓第三本書 chapter 1 覆蓋其他書 chapter 1 的 localStorage。
5. 不要把 `ready` 寫成 `passed`；兩者含義不同。
6. 不要大幅重構 Schwartz legacy 資料，除非使用者另行授權。
7. 不要把教材 PDF、未整理的來源圖片、`.DS_Store` 或 secrets 加入 Git；`private-figures/` 只可存在於確認為 private 的 repository。
8. 不要用 HTTP 200 取代內容核對；錯誤 landing page 仍是失效 reference。
9. 不要在未確認正式目錄時自行猜 chapter title 或總章數。
10. 不要在功能分支尚未驗證時直接 push `main`。

## 18. 下一個任務

Schwartz、ICU Book 與 Zollinger 全書內容均已完成；Zollinger 私人圖版亦完成。此次私人圖片提交必須維持下列結果：

1. `private-figures/` 共 260 張 JPG，對應 144 個章節。
2. Chapter 5 共兩張圖（原創 SVG + 私人原書圖版）、Chapter 88 九張、Chapter 150 一張。
3. Chapter 1–4、93、96 沒有誤配圖片。
4. 原始 PDF、`Zollinger/Zollinger_Images/`、`.DS_Store` 與 secrets 不得追蹤。
5. Repository 必須持續保持 private；若未來要重新公開，必須先從完整 Git history 移除所有 `private-figures/` 內容，而不只是刪除目前工作樹檔案。

處理 Zollinger 時必須保護 Schwartz 與 ICU Book 正式版本，不得重新做或大幅改寫既有兩本書。
