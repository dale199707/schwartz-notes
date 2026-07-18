# Chapter 08 evidence audit

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **4/10**
- Post-revision score: **10/10**
- Current major guidance checked: ABA burn shock CPG 2024, ABA referral guidance 2022, FDA oxandrolone withdrawal 2023

| Q# | Verification question | Source-grounded answer | Chapter finding before revision | Verdict before revision | Correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Which depths count toward TBSA? | Partial- and full-thickness burns count; superficial epidermal burns do not. | Correct. | SUPPORTED | None. | [ABA referral guide](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral) |
| 2 | What initial adult burn-resuscitation formula is currently recommended? | For adults with ≥20% TBSA, ABA recommends starting near 2 mL/kg/%TBSA and titrating; the formula is not a fixed endpoint. | Gave a broad 2–4 mL range without adult threshold or current 2 mL recommendation. | NEEDS_NUANCE | Added population, starting dose, timing, and titration language. | [ABA CPG](https://pubmed.ncbi.nlm.nih.gov/38051821/) |
| 3 | Is urine output the sole resuscitation target? | No. It is important, but must be integrated with perfusion, acid-base trend, fluid balance, and selected pressure monitoring. | Called urine output the main endpoint without warning against fluid escalation for nonresponsive oliguria. | NEEDS_NUANCE | Added multimodal endpoints and abdominal/ocular pressure monitoring. | [ABA CPG](https://pubmed.ncbi.nlm.nih.gov/38051821/) |
| 4 | Do facial burns or singed nasal hair alone mandate intubation? | No. They prompt assessment; progressive airway signs, expected edema, transport, and respiratory status determine early definitive airway. | Used a very low threshold that could imply sign-only intubation. | NEEDS_NUANCE | Added airway indications and bronchoscopy role. | ISBI 2018; Schwartz 11e |
| 5 | Is 100% oxygen appropriate for suspected carbon-monoxide poisoning? | Yes; pulse oximetry may be falsely reassuring and co-oximetry is required. | Correct. | SUPPORTED | None. | Schwartz 11e |
| 6 | When is escharotomy indicated? | Circumferential full-thickness burns causing impaired limb perfusion or restrictive chest mechanics require urgent decompression. | Correct. | SUPPORTED | Retained. | Schwartz 11e |
| 7 | Are systemic prophylactic antibiotics routinely recommended? | No; use surveillance, wound care, and treatment for documented/suspected infection. | Correct. | SUPPORTED | Retained. | ISBI 2018 |
| 8 | Is silver sulfadiazine the default topical treatment for partial-thickness burns? | No. Dressing selection is contextual, and newer dressings often reduce changes and speed healing compared with SSD. | Listed SSD as a standard topical option without its healing limitation. | NEEDS_NUANCE | Removed default status and added comparative evidence. | [Systematic review](https://pubmed.ncbi.nlm.nih.gov/31090826/) |
| 9 | Should propranolol and oxandrolone be presented as routine adjuncts? | Propranolol requires specialist monitoring; FDA withdrew Oxandrin for safety/effectiveness reasons. | Presented both as common adjuncts. | INCORRECT | Removed routine oxandrolone recommendation and restricted propranolol. | [FDA 2023](https://www.govinfo.gov/content/pkg/FR-2023-09-13/pdf/2023-19796.pdf) |
| 10 | Are the stated burn-center referral criteria current? | Current ABA guidance distinguishes immediate consultation/transfer from consultation and includes ≥10% partial, any full thickness, deep critical-area, inhalation, chemical/high-voltage, and pediatric considerations. | Used an older >10% list and did not distinguish consultation tiers. | NEEDS_NUANCE | Updated criteria and pediatric/electrical detail. | [ABA 2022](https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral) |

## Re-audit conclusion

After revision, all ten questions are `SUPPORTED`. Formula-based resuscitation is now a starting estimate with explicit population and stop rules, and outdated routine oxandrolone use has been removed.

Burn airway and fluid decisions remain center- and patient-specific. A 10/10 audit score is a quality threshold, not a substitute for burn-center consultation.
