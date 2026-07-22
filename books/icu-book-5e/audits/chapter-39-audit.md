# Chapter 39 evidence audit — Liver Failure

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-22
- Current guidance: AASLD ALF/ACLF guidance; AASLD ascites/SBP/HRS 2021; ADQI-ICA 2024; FDA terlipressin label 2023
- Pre-revision score: **5/10**
- Post-revision score: **10/10**

| Q# | Verification question | Source-grounded answer | Chapter finding | Verdict | Required correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Are ALF and ACLF definitions accurate with exceptions? | ALF usually occurs without cirrhosis within <26 weeks with INR ≥1.5 and encephalopathy; ACLF requires chronic disease and organ failure. | Time/INR and exceptions absent. | SUPPORTED | Added operational definition. | [AASLD ALF](https://www.aasld.org/practice-guidelines/management-acute-liver-failure) |
| 2 | Is cirrhosis hemostasis represented as rebalanced without saying tests are useless? | INR alone does not predict bleeding; clinical/procedure context and thrombotic risk remain relevant. | Broadly correct. | SUPPORTED | Added individualized VTE/procedure boundary. | [AASLD ACLF](https://www.aasld.org/practice-guidelines/acute-chronic-liver-failure-and-management) |
| 3 | Is ALF natural history broader than cerebral edema alone? | Shock, AKI, infection, respiratory failure and cerebral edema all drive death/transplant. | Claimed one main cause. | SUPPORTED | Reframed as multiorgan syndrome. | [ALF Update](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576953/) |
| 4 | Are acetaminophen and cerebral-edema red flags actionable? | Suspected acetaminophen requires immediate NAC; high-grade encephalopathy/ammonia/SIRS/AKI trigger neuroprotection and early CRRT consideration. | Mostly correct. | SUPPORTED | Added transplant/poison pathway and nonmechanical ammonia threshold. | [ALF Update](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576953/) |
| 5 | Is the diagnostic strategy complete enough for transplant emergency? | Toxic, viral, autoimmune, Wilson, vascular, pregnancy and organ-failure testing proceed in parallel. | Workup missing. | SUPPORTED | Added initial bundle and early transfer. | [AASLD ALF](https://www.aasld.org/practice-guidelines/management-acute-liver-failure) |
| 6 | Are ACLF classifications acknowledged as noninterchangeable? | EASL-CLIF, NACSELD and APASL define different populations and grades. | Correct. | SUPPORTED | Preserved and linked to trajectory. | [AASLD ACLF](https://www.aasld.org/practice-guidelines/acute-chronic-liver-failure-and-management) |
| 7 | Is first-line management tied to cause and early transplantation? | NAC is immediate for acetaminophen; selected non-APAP use is less certain; transplant-center referral is early. | NAC overgeneralized. | SUPPORTED | Added etiology/grade limits. | [ALF Update](https://pmc.ncbi.nlm.nih.gov/articles/PMC10576953/) |
| 8 | Are HRS criteria and terlipressin contraindications current? | Mandatory 48-h albumin is removed; hypoxia/ischemia are contraindications and respiratory failure is boxed warning. | Old albumin challenge and incomplete warning. | SUPPORTED | Replaced with ADQI-ICA/FDA criteria. | [ADQI-ICA 2024](https://pubmed.ncbi.nlm.nih.gov/38527522/) |
| 9 | Are SBP and variceal-bleeding pearls appropriately qualified? | PMN ≥250 needs antibiotics; albumin benefit is clearest in high-risk SBP; acute variceal bleeding needs vasoactive/antibiotic/early endoscopy. | Albumin applied to all SBP. | SUPPORTED | Added high-risk criteria. | [AASLD Ascites/SBP/HRS](https://www.aasld.org/practice-guidelines/diagnosis-evaluation-and-management-ascites-spontaneous-bacterial-peritonitis) |
| 10 | Does post-2019 evidence change HRS practice? | ADQI-ICA 2024 uses appropriate resuscitation plus 24-h reassessment, not automatic 48-h albumin. | Major update missing. | SUPPORTED | Integrated new criteria and immediate treatment. | [ADQI-ICA 2024](https://pubmed.ncbi.nlm.nih.gov/38527522/) |

## Corrections and residual uncertainty

Added operational ALF definition/workup, removed a single-cause mortality claim, updated HRS-AKI criteria, and incorporated terlipressin respiratory contraindications and high-risk SBP albumin selection. ACLF definitions and transplant benefit by phenotype remain heterogeneous.

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. This 10/10 score is an editorial threshold, not a guarantee of clinical correctness; ALF/ACLF requires immediate transplant-center, hepatology, toxicology and local protocol integration.
