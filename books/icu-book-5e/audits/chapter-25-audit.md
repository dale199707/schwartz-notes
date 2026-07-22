# Chapter 25 evidence audit — Oxygen Inhalation

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-22
- Current guidance: SRLF-SFMU Acute Hypoxemic Respiratory Failure Consensus (2024); UK-ROX (2025)
- Pre-revision score: **7/10**
- Post-revision score: **10/10**

| Q# | Verification question | Source-grounded answer | Chapter finding | Verdict | Required correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Is oxygen prescribed for hypoxemia rather than dyspnea alone? | Oxygen treats hypoxemic failure; benefit in nonhypoxemic dyspnea is unproven. | Principle present but indication not explicit. | SUPPORTED | Added the no-hypoxemia boundary. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 2 | Is low-flow FiO₂ variability explained correctly? | Delivered FiO₂ changes with device flow, inspiratory demand, minute ventilation and mask seal. | Correct. | SUPPORTED | Added simple-mask and reservoir safety checks. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 3 | Is HFNO's FiO₂ precision conditional on meeting inspiratory demand? | HFNO is more stable only when total flow meets demand; distending pressure is variable and not equivalent to set PEEP. | Overstated as intrinsically precise. | SUPPORTED | Added flow and pressure limits. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 4 | Are hypercapnic deterioration and nonpulmonary mimics recognized? | Oxygen-induced hypercapnia requires titration and ventilatory assessment; oxygen does not treat shock, anemia or metabolic drive. | Broadly correct. | SUPPORTED | Added oxygenation-versus-ventilation decision point. | [GOLD 2026](https://goldcopd.org/2026-gold-report-and-pocket-guide/) |
| 5 | Are pulse-oximetry limitations handled safely? | Low perfusion, motion, dyshemoglobins, device bias and skin pigmentation can conceal hypoxemia; blood gas/co-oximetry is used when discordant. | Partly correct. | SUPPORTED | Added measurement and confirmation triggers. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 6 | Are oxygen targets population-specific? | 2024 consensus suggests 94–98% without hypercapnia risk and 88–92% with risk, but disease-specific guidance overrides this. | Missing general target and scope. | SUPPORTED | Added consensus exclusions and post-arrest/asthma examples. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2), [AHA post-arrest 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/post-cardiac-arrest-care) |
| 7 | Is HFNO used in the population supported by guidance? | In de novo hypoxemic ARF without intubation criteria, HFNO is favored at oxygen >6 L/min or P/F <200; this excludes hypercapnic ARF and cardiogenic edema. | Trial discussion lacked operational scope. | SUPPORTED | Added thresholds and exclusions. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 8 | Are HFNO failure and intubation criteria explicit? | Worsening work, shock, mental status, acidosis and severe refractory hypoxemia require escalation; ROX is adjunctive. | Critical omission. | SUPPORTED | Added failure criteria and ROX limitations. | [SRLF-SFMU 2024](https://link.springer.com/article/10.1186/s13613-024-01367-2) |
| 9 | Are FLORALI and RECOVERY-RS compared fairly? | FLORALI's primary intubation endpoint was negative; mortality was secondary and P/F subgroup post hoc. RECOVERY-RS found no HFNO benefit over conventional oxygen in COVID-19. | Correct. | SUPPORTED | Retained endpoint hierarchy and population limits. | [FLORALI](https://www.nejm.org/doi/full/10.1056/NEJMoa1503326), [RECOVERY-RS](https://pmc.ncbi.nlm.nih.gov/articles/PMC8787685/) |
| 10 | Does UK-ROX change universal conservative targeting? | Target SpO₂ 90% did not reduce 90-day mortality in 16,500 ventilated ICU adults; universal 88–92% targeting is unsupported. | Correct. | SUPPORTED | Added that this does not prove hyperoxia harmless. | [UK-ROX](https://pmc.ncbi.nlm.nih.gov/articles/PMC12163715/) |

## Corrections and residual uncertainty

Added device safety checks, population-specific saturation targets, 2024 HFNO thresholds, ROX/failure monitoring and explicit intubation triggers. No single SpO₂ target or noninvasive device is optimal across all ICU diagnoses.

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. This 10/10 score is an editorial threshold, not a guarantee of clinical correctness; current disease-specific guidance, device performance and local airway protocols control patient care.
