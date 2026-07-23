# 醫學原文書筆記庫

個人學習用的多書靜態網站，將醫學原文書整理成繁體中文重點筆記，並保留英文醫學術語。第一冊《Schwartz’s Principles of Surgery, 11th Edition》與第二冊《The ICU Book, 5th Edition》為正式完成版本；第三冊《Zollinger’s Atlas of Surgical Operations, 10th Edition》（2016）已完成 150 章網站骨架，Chapter 1–70 已完成整理與驗證。

若要在新的 Chat 接續本專案或新增其他書籍，請先完整閱讀 [`PROJECT_HANDOFF.md`](PROJECT_HANDOFF.md)。

## 使用方式

直接以瀏覽器開啟 `index.html`。網站不需安裝套件或啟動伺服器。

網站預設開啟 Schwartz Chapter 1，右側「詢問 AI」預設收合。上方書籍選單會切換目前書籍；章節搜尋、完成度、重要標記、個人筆記與螢光標記皆以目前書籍為範圍。

在「核心整理」或「Clinical pearl」選取文字後，可套用黃、綠、藍三種螢光標記；點擊既有標記可以改色或清除。個人筆記、重要標記與螢光標記只保存在目前瀏覽器，不會上傳。舊版 Schwartz 瀏覽器資料會自動複製到新的含 `bookId` 儲存鍵，舊鍵不會刪除。

## 多書架構

- `books.js`：瀏覽器使用的書籍清單與狀態。
- `books/<bookId>/book.json`：每本書可獨立維護的 metadata。
- 現有 `notes.js`、`notes-extra*.js`、`chapter-*.md` 與 `audits/`：保留為 Schwartz 正式資料來源，migration 期間不搬動。
- ICU Book 的 53 章正式稿位於 `books/icu-book-5e/chapters/`；Claude 原稿保留於 `books/icu-book-5e/claude/`，Codex 完成查核、修訂與 evidence audit 後同步為網站版本。
- Zollinger 的 metadata、150 章正式目錄、Claude 規格、圖片授權紀錄與 audit index 位於 `books/zollinger-10e/`；原書插圖受版權保護，不直接上傳，正式網站只採合法授權或原創圖解。
- 新書須建立自己的 chapters 與 audits；`ready` 表示可預覽，不等同驗證通過，只有完成十題 evidence audit 才可在 audit index 標為 `passed`。
- AI request 會一併帶入 `bookId`、書名、edition、出版年份與章節背景。

## 編輯規則

- 以條列式整理核心觀念，避免逐段翻譯或大量轉錄原文。
- 醫學術語、器官、藥物與重要專有名詞採英文。
- 每章固定包含：核心整理、Clinical pearl、快速比較表與更新提醒。
- 教材出版於 2019 年；涉及臨床處置時，需與最新 guideline 交叉核對。
- 新增或更新臨床處置建議時，應優先採用正式學會 guideline、systematic review 或具代表性的近期 pivotal trial；不可把未確認的資訊寫成共識。
- 每個會改變臨床處置的重點都要附可點擊的來源連結與出版年份；連結優先指向 guideline 或原始研究的官方頁面、期刊頁面或 PubMed。
- 明確標示內容屬於「2019 年教材觀點」或「後續證據更新」，並在有分歧時簡述適用條件。

## 內容進度

Schwartz 54 章與 ICU Book 53 章均已加入網站並完成 Codex 十題 evidence audit。Zollinger 150 章中 Chapter 1–70 已標記為 `ready` 並完成 10/10 audit，其餘章節仍為目錄與占位狀態。

Schwartz 的 Claude 原稿保留於專案根目錄，網站使用 `notes.js` 與後續資料檔載入；ICU 與 Zollinger 則使用各自的 `claude/`、`chapters/` 與 `audits/`。Schwartz 與 ICU 既有章節，以及 Zollinger Chapter 1–70，均已達本專案的 10/10 audit 門檻；Zollinger 其餘章節尚待逐批整理與驗證。

醫學內容另以 `validate-medical-chapter` skill 進行十題 evidence audit；逐章狀態與修訂前後分數記錄於 `audits/index.md`。格式完整不等同內容已驗證，只有 10/10 題皆獲獨立來源支持才標記通過。

## Claude 初稿交接格式

Claude 產出的每一章請存為獨立 Markdown 檔，檔名使用 `chapter-XX-slug.md`，並嚴格依照下列欄位順序：

1. `# Chapter XX: 英文章名`
2. `## 核心整理`：8–15 個可獨立閱讀的條列。
3. `## Clinical pearl`：2–4 點，聚焦 decision point、red flag 或常見陷阱。
4. `## 快速比較表`：至少 4 列、3 欄以上的 Markdown 表格。
5. `## 後續證據更新`：僅列出與 2019 年教材相比會改變臨床決策的近期 evidence；每點都要註明適用族群與限制。
6. `## References`：每筆格式為 `- [組織／作者，年份，標題](https://...)`，優先放 guideline、原始 pivotal trial 或 PubMed。

禁止逐段翻譯、杜撰來源、引用無法驗證的數據，或把尚有爭議的研究結論寫成標準治療。
