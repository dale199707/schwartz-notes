# Chapter 134 evidence audit — Venous Access, Central Venous Catheter, Subclavian Vein

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-24
- Pre-revision score（atlas-derived outline）: **4/10**
- Post-revision score: **10/10**
- Current guidance checked: ASA 2020；CDC 2024；Association of Anaesthetists 2025；3SITES

| Q# | Verification question | Source-grounded answer | Chapter finding | Verdict | Required correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Duration：CVC可依固定 7–10天 replacement？ | 不應 routine scheduled replacement；每日評估必要性。 | 已移除固定期限。 | SUPPORTED | 補 prompt removal。 | [CDC 2024](https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infections/summary-recommendations.html) |
| 2 | Site：subclavian在所有 outcome都最好？ | 感染／DVT較少但 pneumothorax較多。 | 已呈現 tradeoff。 | SUPPORTED | 移除 single-best site。 | [3SITES](https://pubmed.ncbi.nlm.nih.gov/26398070/) |
| 3 | CKD：subclavian可 routine使用？ | 應避免 central stenosis以保留 dialysis access。 | 已列 CKD exception。 | SUPPORTED | 補 vein preservation。 | [Safe access 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12519924/) |
| 4 | Imaging：landmark technique永遠 default？ | 有能力時 ultrasound-guided axillary／subclavian可降低風險。 | 已採 skill-based preference。 | SUPPORTED | 補 ultrasound option。 | [ASE 2025](https://www.asecho.org/guideline/ultrasound-guided-vascular-cannulation-2/) |
| 5 | Sterility：小 drape與 gloves足夠？ | 需 maximal sterile barrier與 full-body drape。 | 已完整列 bundle。 | SUPPORTED | 補 barrier標準。 | [CDC 2024](https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infections/summary-recommendations.html) |
| 6 | Position：所有人都 Trendelenburg？ | 無法耐受或 raised ICP者需個別化。 | 已列 contraindication。 | SUPPORTED | 移除 universal positioning。 | [Safe access 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12519924/) |
| 7 | Wire：血色／pulsatility足以確認 vein？ | 不足，dilation前需 ultrasound／pressure等確認。 | 已明確 safety step。 | SUPPORTED | 補 confirm-before-dilate。 | [ASA 2020](https://www.asahq.org/sitecore/shell/~/media/sites/asahq/files/public/resources/standards-guidelines/practice-guidelines-for-central-venous-access.pdf) |
| 8 | Tip：CXR是每種 placement唯一確認方式？ | 可用 ECG／fluoro／US等；依方法另評估 PTX。 | 已個別化。 | SUPPORTED | 補 modern confirmation。 | [Safe access 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12519924/) |
| 9 | Dressing：insertion technique完成就足夠？ | CHG dressing與 maintenance bundle影響 CLABSI。 | 已納入 aftercare。 | SUPPORTED | 補 maintenance。 | [CDC 2024](https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infections/summary-recommendations.html) |
| 10 | Infection：suspected line sepsis可 routine guidewire exchange？ | 不應以 wire exchange掩蓋感染。 | 已列限制。 | SUPPORTED | 補 infection management boundary。 | [CDC 2024](https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infections/summary-recommendations.html) |

## Corrections made

補 site tradeoff、CKD vein preservation、ultrasound、confirm-before-dilate、infection bundle與不做 scheduled replacement。

## Residual uncertainty

Subclavian／axillary ultrasound的術語、視窗與 evidence依技術及 operator experience不同；site choice必須逐例權衡。**10/10只代表通過本專案 audit threshold，不保證個別病人的臨床正確性或安全性。**
