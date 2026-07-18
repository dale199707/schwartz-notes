# Chapter 24 evidence audit

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **4/10**
- Post-revision score: **10/10**
- Current major guidance checked: ASH VTE 2020, CHEST VTE 2021, ATTRACT, EVRA

| Q# | Verification question | Source-grounded answer | Chapter finding before revision | Verdict before revision | Correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Can low-probability DVT with a negative high-sensitivity D-dimer be excluded without ultrasound? | Yes, within a validated diagnostic pathway. | Correct. | SUPPORTED | Retained. | [ASH diagnosis](https://pubmed.ncbi.nlm.nih.gov/30482764/) |
| 2 | Are DOACs preferred for most VTE patients? | Yes, but important exceptions include pregnancy, severe renal disease, high-risk APS, interactions, and selected GI/GU cancers. | Limited the rule to noncancer VTE and gave few exceptions. | NEEDS_NUANCE | Added cancer use and contraindication domains. | [ASH 2020](https://pubmed.ncbi.nlm.nih.gov/33007077/) |
| 3 | Does every provoked or unprovoked VTE receive the same treatment duration? | No; at least three months is usual, followed by recurrence-versus-bleeding assessment. | Duration was only described generally. | INCOMPLETE | Added transient, unprovoked, persistent, and reduced-dose extended pathways. | [CHEST 2021](https://pubmed.ncbi.nlm.nih.gov/34352278/) |
| 4 | Should an IVC filter be added for patients who can receive anticoagulation? | No; filters are mainly for acute VTE with an absolute anticoagulation contraindication. | Also listed recurrent embolism on anticoagulation as a routine indication. | NEEDS_NUANCE | Narrowed indication and required retrieval planning. | [CHEST 2021](https://pubmed.ncbi.nlm.nih.gov/34352278/) |
| 5 | Is “massive/submassive” the preferred modern PE risk framework? | No; high-, intermediate-, and low-risk categories based on hemodynamics, RV strain, biomarkers, and clinical score are clearer. | Used older terminology. | OUTDATED | Replaced risk labels. | [ESC PE 2019](https://pubmed.ncbi.nlm.nih.gov/31504429/) |
| 6 | Does intermediate-high-risk PE routinely receive systemic thrombolysis? | No; monitor closely and use rescue reperfusion if deterioration occurs. | Said treatment was individualized but did not state the no-routine-lysis boundary. | INCOMPLETE | Added monitoring and rescue strategy. | [ESC PE 2019](https://pubmed.ncbi.nlm.nih.gov/31504429/) |
| 7 | Does ATTRACT support routine pharmacomechanical thrombolysis for proximal DVT? | No; it did not reduce overall PTS and increased bleeding. | Correct. | SUPPORTED | Retained. | [ATTRACT](https://pubmed.ncbi.nlm.nih.gov/29211671/) |
| 8 | Is compression central to venous-ulcer care? | Yes, after arterial perfusion assessment. | Correct, but the Markdown emphasis was visibly escaped. | SUPPORTED | Fixed presentation and added perfusion prerequisite. | [ESVS venous 2022](https://pubmed.ncbi.nlm.nih.gov/35346532/) |
| 9 | Does early superficial venous ablation improve ulcer healing when added to compression? | Yes, in suitable reflux anatomy. | Mentioned reflux correction without evidence/timing. | INCOMPLETE | Added EVRA and limitations. | [EVRA](https://pubmed.ncbi.nlm.nih.gov/29688123/) |
| 10 | Is complete decongestive therapy the foundation of lymphedema management? | Yes, with surgery reserved for selected patients. | Correct. | SUPPORTED | Retained. | [ISL consensus](https://pubmed.ncbi.nlm.nih.gov/38624915/) |

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. VTE drug exceptions, duration, IVC filters, PE risk, and venous-ulcer sequencing are now explicit.

A 10/10 score does not replace individualized anticoagulation and bleeding-risk review.
