# Chapter 13 evidence audit

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **6/10**
- Post-revision score: **10/10**
- Current major guidance checked: SSC 2021, ANDROMEDA-SHOCK, PPV review 2023, GDT meta-analysis 2023

| Q# | Verification question | Source-grounded answer | Chapter finding before revision | Verdict before revision | Correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Are ECG, pressure, SpO2, temperature, urine output, and capnography core monitoring domains? | Yes, selected according to anesthetic, procedure, and patient risk. | Correct. | SUPPORTED | None. | Standard perioperative practice |
| 2 | Can pulse oximetry be falsely reassuring in carbon-monoxide poisoning? | Yes; use co-oximetry when dyshemoglobinemia is suspected. | Correct. | SUPPORTED | Retained. | Schwartz 11e |
| 3 | Does static CVP predict fluid responsiveness well? | No; it may contribute to context but should not be used alone to decide fluid loading. | Correct. | SUPPORTED | None. | [SSC 2021](https://pubmed.ncbi.nlm.nih.gov/34599691/) |
| 4 | Under what conditions are PPV/SVV reliable? | Controlled ventilation, regular rhythm, adequate tidal-volume interaction, and absence of major confounders; PLR with real-time flow is useful in other settings. | Mentioned only positive-pressure ventilation and sinus rhythm. | NEEDS_NUANCE | Added low-VT, spontaneous breathing, RV/chest-pressure, and PLR conditions. | [PPV review](https://pubmed.ncbi.nlm.nih.gov/36732851/) |
| 5 | Does fluid responsiveness equal a clinical indication for fluid? | No. It predicts a flow increase, not whether benefit exceeds edema/congestion risk. | Omitted this critical distinction. | CRITICAL_OMISSION | Added explicit decision gate. | [SSC 2021](https://pubmed.ncbi.nlm.nih.gov/34599691/) |
| 6 | Is lactate a specific marker of anaerobic metabolism? | No; it integrates production, adrenergic drive, and hepatic/renal clearance. | Table labeled lactate as anaerobic metabolism. | INCORRECT | Replaced with multimodal interpretation. | [SSC 2021](https://pubmed.ncbi.nlm.nih.gov/34599691/) |
| 7 | Can capillary refill complement lactate-guided resuscitation? | Yes; ANDROMEDA-SHOCK did not prove lower mortality but supports peripheral perfusion as a rapid complementary endpoint. | Clinical pearl appropriately recommended integration. | SUPPORTED | Retained and cited. | [ANDROMEDA-SHOCK](https://pubmed.ncbi.nlm.nih.gov/30772908/) |
| 8 | Does perioperative goal-directed therapy consistently reduce mortality? | No. Meta-analyses suggest fewer complications in selected high-risk surgery, with heterogeneous protocols and inconsistent mortality benefit. | Presented GDT as generally avoiding over/under-resuscitation without evidence limits. | NEEDS_NUANCE | Added population, heterogeneity, and harm-avoidance limits. | [GDT meta-analysis](https://pubmed.ncbi.nlm.nih.gov/37386648/) |
| 9 | Did ESCAPE prove PAC is never useful? | No. It argues against routine use in its population; PAC remains useful for selected complex or mixed hemodynamic states. | Suggested broad replacement by less-invasive devices. | NEEDS_NUANCE | Added current selective indications. | [ESCAPE](https://doi.org/10.1001/jama.294.13.1625) |
| 10 | Should invasive monitoring be used only when results can alter management? | Yes; indication, interpretation expertise, complications, and actionability must be explicit. | Correct. | SUPPORTED | Retained. | General monitoring principle |

## Re-audit conclusion

After revision, all ten questions are `SUPPORTED`. The chapter now separates responsiveness from need, removes anaerobic-only lactate language, and defines when dynamic indices and PAC data are actionable.

Monitoring devices and algorithms remain setting dependent. A 10/10 audit score is a quality threshold, not a substitute for clinical examination and expert interpretation.
