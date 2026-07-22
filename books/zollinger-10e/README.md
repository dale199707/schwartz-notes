# Zollinger's Atlas of Surgical Operations, 10th Edition 筆記

來源：E. Christopher Ellison、Robert M. Zollinger, Jr., *Zollinger's Atlas of Surgical Operations*, 10th Edition, McGraw-Hill Education, 2016。

目前狀態：網站骨架與 150 章正式目錄完成；Chapter 1–20 已完成 Codex evidence audit，20 / 150 章通過。

## 目錄

- `book.json`：書籍 metadata 與總章數。
- `chapters.js`：14 sections、150 章網站目錄、Markdown loader 與 parser。
- `figures.js`：合法授權或原創圖解的 chapter manifest。
- `claude/`：Claude 原始 Markdown；Codex 查核前不由網站直接載入。
- `chapters/`：網站正式載入的 Markdown。
- `figures/`：僅存放 Public Domain、相容 Creative Commons、已取得授權或原創圖片。
- `audits/index.md`：逐章 draft 與 evidence audit 進度。
- `CLAUDE_INSTRUCTIONS.md`：交給 Claude 的內容格式、圖片與來源限制。

## 圖片原則

本機教材 PDF 的手術插圖受 McGraw-Hill Education 版權保護，可以用工具擷取供私人定位與內容理解，但不得直接複製、上傳或提交至公開網站。正式網站只使用：

1. Public Domain 圖片。
2. 授權相容且完整標示作者、license 與原始連結的圖片。
3. 已取得權利人書面授權的圖片。
4. 依醫學概念重新設計、未仿製教材構圖的原創 SVG／示意圖。

本機已另有 `Zollinger/Zollinger_Images/`，包含按 chapter 分類的原書圖版與 `_INDEX.csv`。此資料夾由 `.gitignore` 排除，只供本機內容整理、頁碼定位與辨識關鍵 anatomy／operative sequence；不得複製到 `books/zollinger-10e/figures/` 或加入 `figures.js`。

## 章節狀態

1. `claude/` 原稿：Claude 完成的交付來源，先保留原樣。
2. `draft`：網站顯示正式章名與待整理狀態。
3. `ready`：Codex 完成格式與主張查核後同步到 `chapters/`，並將章號加入 `chapters.js` 的 `readyChapterIds`。
4. `passed`：Codex 完成十題 evidence audit 並留存逐題證據後才可標記。

## 已完成內容

- Chapter 1–20 已由 Claude 交付原稿，Codex 完成主張查核、修訂與每章十題 evidence audit。
- Chapter 1–20 已同步至 `chapters/`，並列入 `readyChapterIds`。
- Chapter 6–20 依使用者指示未新增、搜尋或設計任何圖片。
- Chapter 5 已加入一張本專案原創的上腹動脈血流關係 SVG；Chapter 1–4 的本機圖庫無對應原書圖版，因此本批未硬加無關圖片。
