# Chapter 36 evidence audit — Potassium

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-22
- Current guidance: UKKA Hyperkalaemia Guideline 2023; Resuscitation Council UK 2025
- Pre-revision score: **5/10**
- Post-revision score: **10/10**

| Q# | Verification question | Source-grounded answer | Chapter finding | Verdict | Required correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Are true, redistribution and pseudohyperkalemia distinguished? | Serum K may rise from total-body excess, shift or specimen/cell-count artifact; unstable cases are treated while repeating. | Pseudohyperkalemia absent. | SUPPORTED | Added repeat-without-delay boundary. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 2 | Is serum K separated from total-body potassium? | Only a small fraction is extracellular; DKA can have total deficit despite normal/high serum K. | Correct. | SUPPORTED | Preserved with DKA context. | [Emergency Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9108908/) |
| 3 | Is ECG progression prevented from becoming a reliable sequence? | ECG sensitivity is limited and changes need not occur in order. | Sequence appeared deterministic. | SUPPORTED | Added nonsequential warning. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 4 | Is severe hyperkalemia recognized even with normal ECG? | K ≥6.5 mmol/L requires urgent treatment/monitoring regardless of a reassuring ECG. | Too ECG-centered. | SUPPORTED | Added numeric red flag. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 5 | Is post-treatment K/glucose monitoring explicit? | K at 1,2,4,6,24 h and glucose through 6 h are suggested after moderate/severe treatment. | Incomplete. | SUPPORTED | Added schedules and rebound risk. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 6 | Are moderate/severe categories linked to escalation? | UKKA defines moderate 6.0–6.4 and severe ≥6.5 mmol/L, while context still matters. | Missing. | SUPPORTED | Added threshold and caveat. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 7 | Is IV calcium dosed without underdosing calcium gluconate? | 10% chloride 10 mL or 10% gluconate 30 mL is recommended for ECG toxicity. | Gluconate 10 mL underdosed. | SUPPORTED | Corrected salt-specific doses. | [MHRA 2023](https://www.gov.uk/drug-device-alerts/national-patient-safety-alert-potential-risk-of-underdosing-with-calcium-gluconate-in-severe-hyperkalaemia-natpsa-slash-2023-slash-007-slash-mhra) |
| 8 | Are insulin, binder and dialysis limitations safe? | Insulin requires hypoglycemia prevention; binders are adjuncts; refractory life-threatening disease needs dialysis. | Binder could appear to avoid dialysis. | SUPPORTED | Removed substitution claim. | [UKKA 2023](https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0) |
| 9 | Is the comparison fair for SPS, SZC and patiromer? | SPS has weak acute evidence/harm; novel binders lack definitive head-to-head outcome equivalence. | Claimed equal acute efficacy. | SUPPORTED | Reframed evidence and endpoints. | [SPS RCT](https://pubmed.ncbi.nlm.nih.gov/26576619/) |
| 10 | Are post-2019 changes incorporated? | Current guidance adds full calcium gluconate dosing, novel binders and detailed monitoring. | Monitoring/dose update absent. | SUPPORTED | Integrated 2023/2025 updates. | [Resuscitation Council UK 2025](https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines) |

## Corrections and residual uncertainty

Corrected calcium gluconate underdosing, constrained binder claims, added severe-K and monitoring thresholds, and removed a universal high-normal potassium target. Acute novel-binder effects on dialysis, arrhythmia and mortality remain uncertain.

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. This 10/10 score is an editorial threshold, not a guarantee of clinical correctness; emergency hyperkalemia requires local medication concentrations, monitoring and dialysis access plans.
