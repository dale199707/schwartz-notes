# Chapter 016 evidence audit — Thoracoscopy

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-22
- Pre-revision score: **4/10**
- Post-revision score: **10/10**
- Current guidance checked: ERAS/ESTS lung surgery（2019）、VIOLET RCT（2022）、AATS early-stage NSCLC（2023）、CALGB 140503（2023）、STS pleural drains（2024）

| Q# | Verification question | Source-grounded answer | Chapter finding | Verdict | Required correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Scope／definitions：surgical VATS是否與 medical thoracoscopy分開？ | VATS通常是 surgical GA procedure；medical thoracoscopy可採 local／sedation且 scope不同。 | 原稿把 thoracoscopy一概寫成GA + one-lung ventilation。 | SUPPORTED | 已界定本章以VATS為主並列重要例外。 | [ERAS/ESTS 2019](https://pubmed.ncbi.nlm.nih.gov/30304509/) |
| 2 | Anatomy：port位置是否應固定第7／6／4肋？ | Port map依 target、hilum、platform與 stapler angles個別設計；沿rib上緣仍要注意 collateral branches。 | 原稿給固定三孔位置並稱 camera最關鍵。 | SUPPORTED | 已改 operation-specific mapping與 residual nerve risk。 | [VIOLET 2022](https://pubmed.ncbi.nlm.nih.gov/38319202/) |
| 3 | Mechanism：trocar leveraging如何造成術後疼痛？ | Intercostal nerve被 port、instrument torque或 rib pressure壓迫可造成 acute／chronic pain。 | 原稿有避免 leveraging但未說明機制與 port-size tradeoff。 | SUPPORTED | 已連結 intercostal compression與 pain prevention。 | [ERAS/ESTS 2019](https://pubmed.ncbi.nlm.nih.gov/30304509/) |
| 4 | Red flags：何時應立即 conversion？ | Uncontrolled bleeding、hilum無法辨識／控制、ventilation failure、margin不足或 anatomy不明須及早轉開胸。 | 原稿只說預先擬定出血計畫，無明確 stop criteria。 | SUPPORTED | 已加入 conversion red flags。 | [AATS 2023](https://doi.org/10.1016/j.jtcvs.2023.04.039) |
| 5 | Diagnostic／preoperative strategy：lung isolation是否每種 thoracoscopy必需？ | Major VATS resection常需；selected pleural／non-intubated procedures例外，依 procedure與 anesthesia plan。 | 原稿把 DLT／blocker與SLV寫成所有VATS前提。 | SUPPORTED | 已加 procedure-specific例外與 bronchoscopy confirmation。 | [ERAS/ESTS 2019](https://pubmed.ncbi.nlm.nih.gov/30304509/) |
| 6 | Risk classification：adhesion、大腫瘤與 hilar granuloma是否 absolute contraindication？ | 多為 technical/conversion risk；高經驗center可處理 selected cases。 | 原稿稱相對禁忌尚可，但「最大呼吸器支持者通常不耐受」過度籠統。 | SUPPORTED | 已以 physiology與 expertise個別化，移除不明確 ventilator標籤。 | [AATS 2023](https://doi.org/10.1016/j.jtcvs.2023.04.039) |
| 7 | First-line management：VATS是否所有 early-stage NSCLC一律首選？ | 對適合VATS與open lobectomy者，VIOLET顯示 recovery較佳；仍需 stage、resectability與oncologic quality選擇。 | 原稿寫「已成early-stage NSCLC首選」未限定 population。 | SUPPORTED | 已限定於 technically／oncologically suitable patients。 | [VIOLET 2022](https://pubmed.ncbi.nlm.nih.gov/38319202/) |
| 8 | Procedure／contraindication：oncologic VATS是否仍需R0與nodes？ | 是；minimally invasive不能降低 margin與 lymph-node evaluation。 | 原稿只提 specimen bag，缺 oncologic completeness。 | SUPPORTED | 已加入 R0與 adequate nodal evaluation。 | [AATS 2023](https://doi.org/10.1016/j.jtcvs.2023.04.039) |
| 9 | Comparison／pearl：固定<300 mL、24 h拔 drain是否安全？ | Drain removal依 air leak、fluid character／volume、expansion與stability；無 universal 300 mL／24 h規則。 | 原稿以<300 mL和24小時作一般門檻。 | SUPPORTED | 已改 criteria-based、procedure-specific management。 | [STS 2024](https://pubmed.ncbi.nlm.nih.gov/38723882/) |
| 10 | Post-2019 evidence：segmentectomy證據是否限定適當族群？ | CALGB 140503限 peripheral ≤2 cm且 intraoperative node-negative；不是所有early-stage tumor。 | 原稿籠統說 selected patients，但未寫關鍵 inclusion limits。 | SUPPORTED | 已補 tumor size、peripheral location與 node-negative限制。 | [CALGB 140503](https://www.nejm.org/doi/full/10.1056/NEJMoa2212083) |

## Corrections made

分開 surgical與 medical thoracoscopy；移除固定 port map與 drain threshold，加入 conversion criteria、oncologic completeness、relative-risk而非 blanket contraindications，以及 VIOLET／CALGB的 population限制。

## Residual uncertainty

Uniportal、robotic、non-intubated VATS及 complex resections受 center experience強烈影響；drain protocol亦需 procedure-specific local standard。**10/10只代表本章通過本專案 audit threshold，不是個別病人安全或臨床正確性的保證。**
