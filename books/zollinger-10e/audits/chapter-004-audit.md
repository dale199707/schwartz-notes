# Chapter 004 evidence audit — Ambulatory Surgery

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-22
- Pre-revision score: **5/10**
- Post-revision score: **10/10**

| Q# | Verification question | Before revision | Correction / answer | Verdict | Source |
|---:|---|---|---|---|---|
| 1 | Scope：是否以 procedure、patient、anesthesia、system 四層選擇 day surgery？ | 主要列術式與 ASA。 | 加入 center capability、transfer、after-hours support 與 recovery needs。 | SUPPORTED | [SAMBA OSA statement](https://doi.org/10.1213/ANE.0b013e318269cfd7) |
| 2 | Foundation：ASA class 是否為描述工具而非單獨准入規則？ | ASA I／II 好、III 小心，過度簡化。 | 改為穩定度、術式與場域能力綜合判斷。 | SUPPORTED | [ASA classification](https://www.asahq.org/standards-and-practice-parameters/statement-on-asa-physical-status-classification-system) |
| 3 | Mechanism：OSA、opioid、CPAP 與 postoperative risk 的關係是否正確？ | OSA 僅在待補更新中。 | 加入 optimized comorbidity、CPAP 與 nonopioid selection framework。 | SUPPORTED | [SAMBA OSA statement](https://doi.org/10.1213/ANE.0b013e318269cfd7) |
| 4 | Red flags：是否提供明確返院／求助條件？ | 只有聯絡方式。 | 加入 bleeding、dyspnea、chest pain／syncope、uncontrolled pain／vomiting 等。 | SUPPORTED | [ASA postanesthetic care](https://www.asahq.org/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-postanesthetic-care.pdf) |
| 5 | Diagnostic／assessment：routine pre-op tests 是否 risk-based？ | 依年齡安排 Hct、renal、ECG、CXR。 | 依 surgery grade、ASA、症狀與共病；健康 minor surgery 不 routine testing。 | SUPPORTED | [NICE NG45](https://www.nice.org.uk/guidance/ng45/chapter/recommendations) |
| 6 | Risk／classification：URI 是否避免一律取消？ | URI 被寫成延期指標，缺乏分層。 | 依 fever、productive cough、wheeze、lower-airway involvement 與脆弱度判斷。 | SUPPORTED | [ASA physical status](https://www.asahq.org/standards-and-practice-parameters/statement-on-asa-physical-status-classification-system) |
| 7 | First line：麻醉 technique 是否個別化而非 epidural 固定優於 spinal？ | 明確宣稱 epidural 較佳。 | 移除排名；改按術式、抗凝、airway、pain／PONV 與 recovery goal。 | SUPPORTED | [ASA postanesthetic care](https://www.asahq.org/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-postanesthetic-care.pdf) |
| 8 | Procedure／contraindication：discharge criteria、陪同者與 voiding 是否正確？ | Caregiver 正確，但返家流程過度固定。 | 使用 criteria-based discharge；voiding 僅選定病人要求，保留 responsible adult。 | SUPPORTED | [ASA postanesthetic care](https://www.asahq.org/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-postanesthetic-care.pdf) |
| 9 | Table／pearls：返家活動是否避免 routine bed rest？ | 建議返家臥床數小時。 | 改為除術式禁忌外安全早期活動。 | SUPPORTED | [Odor 2020](https://pubmed.ncbi.nlm.nih.gov/32161042/) |
| 10 | Post-2019 evidence：是否有近年 fasting 與 perioperative assessment 更新？ | Fasting 有 2023，其他更新待補。 | 納入 ASA 2023 fasting 並以現行 risk-based framework 改寫。 | SUPPORTED | [ASA fasting 2023](https://doi.org/10.1097/ALN.0000000000004381) |

## Re-audit conclusion

十題在修訂後均為 `SUPPORTED`。本章最重要的改動是取消年齡式 routine testing、固定 epidural 優先與返家 bed rest，並加入 OSA 的 ambulatory selection 條件與 criteria-based discharge。
