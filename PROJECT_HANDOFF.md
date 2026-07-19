# Medical Notes 專案完整交接

最後更新：2026-07-19  
目前正式分支：`main`  
目前專案狀態：Schwartz 11th Edition 已完成，準備擴充為多書筆記網站

## 1. 新 Chat 必做的第一步

開始任何修改前，請依序完成：

1. 完整閱讀本檔案與根目錄 `README.md`。
2. 閱讀使用者提供的個人協作說明 `/Users/tinrepin/Downloads/AGENTS.md`（若檔案仍存在）。
3. 檢查 `/Users/tinrepin/Desktop/medical` 的 Git 狀態，不得覆蓋使用者未提交的變更。
4. 若工作涉及醫學內容驗證，使用 `validate-medical-chapter` skill，並完整遵循其十題 evidence audit 流程。
5. 若工作涉及 OpenAI API、Worker 或 secrets，先遵循 OpenAI 憑證安全流程；不得讀出、顯示或提交任何 secret。

建議新 Chat 的第一句：

> 請先完整閱讀 `/Users/tinrepin/Desktop/medical/PROJECT_HANDOFF.md`、專案 `README.md` 與 `/Users/tinrepin/Downloads/AGENTS.md`，確認 Git 狀態後，再把現有網站規劃成多書筆記庫。先保留 Schwartz 正式版本，不要直接大幅改寫 `main`。

## 2. 使用者需求與溝通偏好

- 主要溝通語言：繁體中文。
- 使用者偏好直接看到成果，不需要過度技術化的說明。
- 醫學術語、器官、藥物、procedure、disease、guideline 與重要專有名詞保留英文。
- 內容以條列為主，搭配比較表格、Clinical pearl、更新提醒與必要示意圖。
- 文字要充實但不可過度密集；使用留白、卡片、分段、表格與視覺層級降低閱讀負擔。
- 大型修改應先保護現有正式網站，完成驗證後再 commit、push 與部署。

## 3. 專案位置與正式服務

- 本機 repo：`/Users/tinrepin/Desktop/medical`
- GitHub repo：`dale199707/schwartz-notes`
- 正式網站：<https://dale199707.github.io/schwartz-notes/>
- GitHub Pages 分支：`main`
- Cloudflare Worker：`schwartz-medical-ai`
- Worker base URL：<https://schwartz-medical-ai.dale199707.workers.dev>
- 公開 AI endpoint 設定：根目錄 `ai-config.js`

`ai-config.js` 的 Worker URL 是公開資訊；OpenAI API key 與 AI 使用密碼不是公開資訊。

## 4. 第一冊目前完成狀態

書籍：`Schwartz’s Principles of Surgery, 11th Edition`（教材年份 2019）

- 全書 54 章 Markdown 已到齊。
- 54 章均已完成十題 evidence audit，狀態記錄於 `audits/index.md`。
- 每章 audit 細節保存在 `audits/chapter-XX-audit.md`。
- 網站不再顯示「Claude 初稿」或「Codex 驗證版」等製作流程標籤。
- 原始 Markdown 仍保存在 repo 根目錄，命名為 `chapter-XX-slug.md`。
- 網站實際載入資料分散於 `notes.js`、`notes-extra.js` 至 `notes-extra-4.js`。
- 第一冊目前視為穩定版本；建立第二冊時不得破壞既有 54 章、audit 紀錄或網址功能。

重要限制：10/10 audit 是本專案的內容門檻，不代表可取代臨床判斷。所有臨床處置仍需以最新 guideline、院內規範與病人情境為準。

## 5. 醫學內容編輯規則

每章固定包含：

1. 核心整理：8–15 個能獨立閱讀的重點。
2. Clinical pearl：2–4 個 decision point、red flag 或常見陷阱。
3. 快速比較表：至少 4 列、3 欄，重點是比較而非重複條列。
4. 後續證據更新：標明相對於教材出版年份的重要改變。
5. References：可點擊的正式來源與年份。

內容原則：

- 不逐段翻譯，不大量轉錄原文。
- 不杜撰來源、數據、作者或 recommendation class。
- 涉及 diagnosis、treatment、dose、threshold、contraindication、prognosis 或 follow-up 時，必須查核最新資料。
- 優先使用正式學會 guideline、政府資料、systematic review、major peer-reviewed trial 或原始 pivotal trial。
- 每個會改變臨床處置的重點需附來源連結與年份，並寫明適用族群和限制。
- 明確區分教材觀點、後續 evidence、高確定性共識與仍有爭議的結論。
- 不可因通過格式檢查就宣稱內容已驗證；只有完成十題 evidence audit 才可標記通過。

## 6. 十題 evidence audit 規則

- 使用 `validate-medical-chapter` skill。
- 每章提出 10 個彼此獨立、可被反證、能檢驗正確性或完整性的問題。
- 每題都需有獨立可靠來源支持。
- 若任何一題無法完整回答，需補充或修正文稿，再重新評分。
- 只有 10/10 `SUPPORTED` 且來源沒有失效、撤稿或明顯過時，才可標記 `passed`。
- 修訂前後分數與逐題依據需保存於該書自己的 audit 目錄。

第二冊不可沿用 Schwartz 的 audit 結果；必須獨立驗證。

## 7. 現有網站功能

主要程式位於根目錄 `index.html`，目前是無框架的靜態網站。

- 繁體中文介面與英文醫學名詞。
- 章節側欄與目前章節高亮。
- 可搜尋標題及所有章節內容。
- 核心重點可用星號標記為重要，側欄顯示該章重要項目數量。
- 每章有自己的個人筆記欄位。
- 個人筆記與重要標記只存在使用者瀏覽器，不會上傳。
- AI 欄位可浮動、收合；收合後主要內容欄會自動擴張。
- AI 密碼先經 `/verify` 驗證；成功後才解鎖問題欄和查詢按鈕。
- AI 回答使用 web search，顯示可點擊來源。
- 部分章節有自製 SVG 示意圖或具合法授權的 anatomy 圖片。

瀏覽器儲存鍵：

- 重要標記：`schwartz-important-v1`（`localStorage`）
- 個人筆記：`schwartz-personal-notes-v1`（`localStorage`）
- AI 密碼暫存：`schwartz-ai-access-v1`（`sessionStorage`）

擴充多書架構時，這些 key 必須加入 `bookId`，避免不同書籍的章節編號互相覆蓋。

## 8. 圖片與版權規則

- 不得直接擷取或上傳原文教材的受版權保護圖片。
- 優先使用 Public Domain、CC BY、CC BY-SA 或其他允許使用的來源。
- 新增圖片前，必須到原始來源頁確認授權。
- Caption 必須保留作者、授權名稱與來源連結。
- 現有圖片授權紀錄位於 `assets/anatomy/README.md`。
- 若找不到適當授權圖片，可優先製作原創 SVG 示意圖，不可仿製教材插圖。

## 9. AI 與 Worker 架構

Worker 程式位於 `worker/`：

- `worker/src/index.js`：CORS、密碼驗證、rate limit 與 OpenAI Responses API 呼叫。
- `worker/wrangler.toml`：Worker 名稱、正式 origin、model 與 rate limiter。
- `worker/README.md`：部署摘要。

目前 endpoint：

- `POST /verify`：只驗證 AI 使用密碼，不呼叫 OpenAI。
- `POST /ask`：再次驗證密碼後才呼叫 OpenAI。

目前安全設定：

- `ALLOWED_ORIGIN`：`https://dale199707.github.io`
- `OPENAI_MODEL`：`gpt-5.6-sol`
- Rate limit：同一來源每 60 秒 6 次 AI access request。
- 必要 Worker secrets：`OPENAI_API_KEY`、`AI_ACCESS_PASSWORD`

絕對禁止：

- 不可把任何 secret 寫入 `index.html`、`ai-config.js`、`wrangler.toml`、README、commit、issue 或對話摘要。
- 不可用會顯示內容的方式讀取 `.env.local`、`.dev.vars` 或 Cloudflare secrets。
- 不可把 OpenAI API key 放在 GitHub Pages 前端。

需要更換 AI 使用密碼時，只更新 Cloudflare secret，不需修改網站程式碼。需要部署 Worker 時，從 `worker/` 執行 Wrangler deploy，且不可用缺少必要 secret 的檔案覆蓋現有 secrets。

## 10. 主要檔案地圖

- `index.html`：網站 UI、樣式、搜尋、章節渲染、重要標記、個人筆記、AI UI。
- `notes.js`、`notes-extra*.js`：網站章節資料。
- `chapter-*.md`：Claude／人工整理後的章節來源稿。
- `audits/`：逐章十題 evidence audit。
- `assets/anatomy/`：可合法使用的 anatomy 圖片與授權紀錄。
- `ai-config.js`：公開 Worker endpoint。
- `worker/`：Cloudflare Worker。
- `.gitignore`：排除 PDF、macOS 檔案與 secrets。

此專案目前沒有 build step 或套件安裝需求，GitHub Pages 直接提供靜態檔案。

## 11. 第二本書的建議實作方向

建議沿用同一個 repo 與同一個網站，逐步改造成「醫學原文書筆記庫」。不要為每本書複製一套 `index.html` 與 Worker。

開始前：

1. 從最新 `main` 建立 `codex/multi-book-library` branch。
2. 保留目前 Schwartz 正式版本可隨時運作。
3. 先確認第二本書的名稱、edition、出版年份、章節目錄與原始檔位置。
4. 先設計資料模型與 migration，再搬動現有資料；不可先刪除或批次改寫 54 章。

建議目標結構：

```text
books/
  schwartz-11e/
    book.json
    chapters/
    audits/
  second-book-id/
    book.json
    chapters/
    audits/
assets/
worker/
index.html
```

`book.json` 至少應包含：

- `id`
- `title`
- `edition`
- `publicationYear`
- `languagePolicy`
- `chapterCount`
- `status`

多書網站必要功能：

- 首頁或上方 selector 可切換書籍。
- 章節目錄、搜尋、完成度與重要標記依目前書籍篩選。
- `localStorage` key 使用 `bookId + chapterId`。
- AI request context 必須包含書名、edition、章節名稱與章節重點。
- AI 回答需分清「目前書籍內容」與「最新 guideline／研究」。
- 各書 audit、References、圖片授權與完成進度互相獨立。
- 未完成的第二冊不得讓第一冊顯示成未完成或失去既有功能。

## 12. 每次修改後的驗證清單

最低要求：

1. `git diff --check` 通過。
2. JavaScript syntax check 通過。
3. 搜尋標題與內文皆正常。
4. 重要標記數量與章節切換正常。
5. 個人筆記不會跨書或跨章覆蓋。
6. AI 欄位收合後，主要內容欄會擴張。
7. 錯誤 AI 密碼回覆 401；正確密碼可通過 `/verify`。
8. `/verify` 不可觸發 OpenAI 呼叫。
9. `/ask` 回答包含可點擊來源；僅在必要時進行一次付費 live test。
10. tracked files 不含 API key、AI 密碼或其他 secret。
11. GitHub Pages 完成同步後，再確認正式網站包含新版標記或功能。

若改動牽涉版面，需同時檢查 desktop 與 mobile 寬度。

## 13. Git 與部署原則

- 不使用 destructive reset 或直接刪除現有章節。
- 只 stage 本次工作涉及的檔案。
- commit message 應清楚描述使用者可見的成果。
- Worker 與前端若同時修改：先部署 Worker 相容版本，再推送前端，避免前端先呼叫尚不存在的 endpoint。
- Push 後需等待 GitHub Pages 同步，再檢查正式網址。
- Secrets 的變更不需 commit；程式碼、文件與公開設定才進 Git。

## 14. 目前下一步

第一冊暫時不再新增功能。下一個專案目標是接收第二本醫學原文書，將現有單書網站安全改造成多書筆記庫。

新 Chat 應先向使用者確認第二本書的：

- 書名與 edition
- 出版年份
- 檔案所在資料夾
- 章節數與目前已整理的檔案數
- 是否沿用本交接檔的醫學內容規格

確認後先提出 migration 計畫與 branch 範圍，再開始實作。
