# The ICU Book, 5th Edition 筆記

來源：Paul L. Marino, *The ICU Book*, 5th Edition, Wolters Kluwer, 2025。

目前狀態：網站骨架完成，10 / 53 章內容完成（ready），10 / 53 章通過 evidence audit。

## 目錄

- `book.json`：書籍 metadata 與總章數。
- `chapters.js`：網站章節目錄、Markdown loader 與 parser。
- `claude/`：Claude 新交付的原始 Markdown；Codex 檢查前不由網站直接載入。
- `chapters/`：網站實際載入的 53 份 Markdown（未完成者為占位稿，通過格式檢查者為 `ready`）。
- `audits/index.md`：逐章 draft 與 evidence audit 進度。
- `CLAUDE_INSTRUCTIONS.md`：交給 Claude 的內容格式與限制。

## 章節狀態

1. `claude/` 原稿：Claude 完成的交付來源，先保留原樣。
2. `draft`：`chapters/` 的網站占位稿，網站顯示章名與待整理狀態。
3. `ready`：Codex 確認 Claude 原稿格式並同步到 `chapters/` 後，網站自動載入內容。
4. `passed`：另由 Codex 完成十題 evidence audit，並在 `audits/index.md` 留存逐題證據後才可標記。

修改章節時不得複製教材圖片或大段原文，也不得改動 Schwartz 的資料檔與 audit。
