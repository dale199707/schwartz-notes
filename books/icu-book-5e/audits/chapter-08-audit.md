# Chapter 08 evidence audit — The Pulmonary Artery Catheter

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **6/10**
- Post-revision score: **10/10**

| Q# | Verification question | Before revision | Correction / answer | Verdict | Source |
|---:|---|---|---|---|---|
| 1 | Does a PAC directly measure RA/RV/PA pressures, PAOP, CO and SvO₂? | Supported. | Retained. | SUPPORTED | [PAC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11589280/) |
| 2 | Does PAOP directly equal LV preload volume? | Overstated surrogate chain. | Reframed as LA pressure estimate with additional assumptions for LVEDP/volume. | SUPPORTED | [PAC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11589280/) |
| 3 | Should PAOP be read at end-expiration from the waveform? | Supported. | Retained with zeroing/position checks. | SUPPORTED | [PAC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11589280/) |
| 4 | Can chest-tip height alone prove West zone 3? | Overstated. | Made radiography supportive rather than definitive. | SUPPORTED | [PAC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11589280/) |
| 5 | Did ESCAPE support routine PAC-guided therapy in stable advanced HF without shock? | Correctly rejected. | Retained population boundary. | SUPPORTED | [ESCAPE](https://jamanetwork.com/journals/jama/fullarticle/201634) |
| 6 | Do general-ICU RCTs show routine PAC survival benefit? | Correctly rejected. | Retained. | SUPPORTED | [PAC-Man review](https://ccforum.biomedcentral.com/articles/10.1186/cc4834) |
| 7 | Do observational cardiogenic-shock associations prove causality? | Correctly rejected. | Retained confounding explanation. | SUPPORTED | [ACC 2025](https://www.jacc.org/doi/10.1016/j.jacc.2025.02.018) |
| 8 | Has PACCS reported a mortality result as of 2026-07-19? | No; status needed updating. | Added current estimated 2026-09 completion and direct registry link. | SUPPORTED | [ClinicalTrials.gov](https://clinicaltrials.gov/study/NCT05485376) |
| 9 | Can ScvO₂ be converted to SvO₂ with a fixed 5–8% correction? | Overstated. | Removed fixed correction, especially in shock. | SUPPORTED | [ACC 2025](https://www.jacc.org/doi/10.1016/j.jacc.2025.02.018) |
| 10 | Should thermodilution CO average discordant injections? | Technique incomplete. | Required ≥3 quality readings close to one another and troubleshooting. | SUPPORTED | [PAC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC11589280/) |

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. Selective use remains consensus-supported while a cardiogenic-shock mortality benefit is unproven.
