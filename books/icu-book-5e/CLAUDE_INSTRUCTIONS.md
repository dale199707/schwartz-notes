# ICU Book 章節整理交付規格

來源教材：Paul L. Marino, *The ICU Book*, 5th Edition (2025)。

## 工作方式

1. 每次只整理一章，將完成稿放在 `claude/`，檔名必須與 `chapters/` 中對應的占位稿完全相同。
2. 保留章首 `# Chapter XX: English title`。Claude 原稿不需加入網站狀態；`status: ready` 由 Codex 完成格式檢查並同步到 `chapters/` 時加入。
3. 不逐段翻譯、不大量轉錄教材；以繁體中文重新組織，anatomy、disease、drug、procedure、guideline 與重要專有名詞保留英文。
4. 每章固定包含：核心整理、Clinical pearl、快速比較表、後續證據更新、References。
5. 涉及 diagnosis、treatment、dose、threshold、contraindication、prognosis 或 follow-up 時，必須查核最新 guideline 或可靠原始文獻。
6. Claude 完稿不代表 evidence audit 通過；必須另由 Codex 使用 `validate-medical-chapter` skill 完成十題 evidence audit，才可在 `audits/index.md` 標為 `passed`。

## 最低內容規格

- 核心整理：8-15 個可獨立閱讀的重點。
- Clinical pearl：2-4 個 decision point、red flag 或常見陷阱。
- 快速比較表：至少 4 列、3 欄，必須有實質比較。
- 後續證據更新：相對於 2025 年教材會改變臨床決策的 evidence；若目前沒有明確更新，需直接寫明。
- References：每個會改變臨床處置的重點附可點擊來源與年份，優先正式 guideline、政府、專業學會、systematic review 或 pivotal trial。

## 禁止事項

- 不可複製或上傳教材圖片。
- 不可杜撰來源、數據、作者或 recommendation class。
- 不可把爭議性結論寫成標準治療。
- 不可修改 `chapters/`、`audits/`、`books/schwartz-11e/`、根目錄 `chapter-*.md`、`notes*.js` 或 Schwartz `audits/`。
