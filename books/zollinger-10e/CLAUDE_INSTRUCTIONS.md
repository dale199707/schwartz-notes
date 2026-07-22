# Zollinger 10th Edition 章節整理交付規格

來源教材：E. Christopher Ellison、Robert M. Zollinger, Jr., *Zollinger's Atlas of Surgical Operations*, 10th Edition (2016)。

## 工作方式

1. 每次只整理使用者指定的章節，完成稿放在 `claude/`。
2. 檔名必須使用 `chapters.js` 產生的三位數格式：`chapter-001-surgical-technique.md` 至 `chapter-150-suture-of-tendon.md`。
3. 保留章首 `# Chapter XXX: English title`。Claude 原稿不加入 `status: ready`；此狀態由 Codex 查核後加入正式稿。
4. 不逐段翻譯、不大量轉錄教材；以繁體中文重組，anatomy、disease、drug、procedure、instrument、guideline 與重要專有名詞保留英文。
5. 本書為 2016 年教材。凡 indication、contraindication、operative approach、perioperative care、dose、threshold、complication management 或 follow-up，必須與最新可靠來源交叉核對。
6. Claude 完稿不代表 evidence audit 通過；必須由 Codex 另行完成十題 evidence audit。

## 每章固定格式

```markdown
# Chapter XXX: English Chapter Title

## 核心整理

- 8–15 個可獨立閱讀的重點。

## Clinical pearl

- 2–4 個 decision point、danger anatomy、red flag 或常見技術陷阱。

## 快速比較表

| 比較面向 | A | B |
|---|---|---|
| ... | ... | ... |

## 後續證據更新

- 相對 2016 年教材會改變決策的更新；若沒有明確更新，直接寫明。

## References

- [組織／作者，年份，標題](https://...)
```

## 手術章節內容重點

- 清楚區分 indication、contraindication／不適合情境、preoperative preparation、positioning、exposure、critical anatomy、主要步驟、closure、postoperative care 與 complications。
- 若不同 approach 的選擇會影響 outcome，說明適用族群與限制，不把單一術式寫成普遍標準。
- 教材中的歷史性術式需標示當代角色；若已被較新方法取代，說明仍可能適用的情境。
- 不杜撰 instrument、suture size、dose、數值、trial、guideline recommendation class 或 URL。

## 圖片規則

- 不得截圖、裁切、描摹、重製或上傳教材 PDF 的插圖、封面與頁面。
- Claude 可在文字中提出「建議圖解主題」，但不得自行把教材圖放進 repo。
- 若建議使用外部圖，必須提供原始來源、作者、license 與可公開再利用的依據。
- 原創 SVG 必須依一般醫學概念重新設計，不沿用教材的版面、構圖、編號或圖說。

## 禁止修改

不得修改 `chapters/`、`audits/`、`figures/`、`chapters.js`、`figures.js`、`books.js`、`index.html`、Schwartz 或 ICU Book 的任何檔案。
