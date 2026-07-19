# Chapter 07 evidence audit — Oximetry and Capnography

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **5/10**
- Post-revision score: **10/10**

| Q# | Verification question | Before revision | Correction / answer | Verdict | Source |
|---:|---|---|---|---|---|
| 1 | Does standard pulse oximetry estimate functional saturation and fail to identify dyshemoglobins? | Supported. | Retained co-oximetry requirement. | SUPPORTED | [FDA pulse oximeters](https://www.fda.gov/medical-devices/products-and-medical-procedures/pulse-oximeters) |
| 2 | Is the SpO₂–PaO₂ relationship sigmoid? | Supported. | Retained. | SUPPORTED | [FDA pulse oximeters](https://www.fda.gov/medical-devices/products-and-medical-procedures/pulse-oximeters) |
| 3 | Was occult hypoxemia 11.7% vs 3.6% in the cited cohort? | Supported. | Retained as observational cohort data. | SUPPORTED | [NEJM 2020](https://www.nejm.org/doi/full/10.1056/NEJMc2029240) |
| 4 | Is FDA’s 2025 skin-tone document final guidance? | Correctly called draft. | Added direct FDA draft source and nonbinding status. | SUPPORTED | [FDA draft guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and) |
| 5 | Is there a validated universal skin-tone correction or target adjustment? | Implied raising targets. | Removed prescriptive correction; advised confirmation at decision boundaries. | SUPPORTED | [FDA 2025](https://www.fda.gov/news-events/press-announcements/fda-proposes-updated-recommendations-help-improve-performance-pulse-oximeters-across-skin-tones) |
| 6 | Can pulse oximetry assess ventilation under supplemental oxygen? | Correctly rejected. | Retained capnography/blood-gas distinction. | SUPPORTED | [AHA ALS 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support) |
| 7 | Is waveform capnography the most reliable ETT confirmation in adult cardiac arrest? | Supported, but 100% sensitivity/specificity overstated. | Added low-flow and technical false-negative caveats. | SUPPORTED | [AHA ALS 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support) |
| 8 | Do EtCO₂ values during CPR depend only on cardiac output? | Incorrectly exclusive. | Added ventilation, drugs, airway and etiology. | SUPPORTED | [AHA ALS 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support) |
| 9 | Can EtCO₂ <10 mmHg after 20 min alone terminate resuscitation? | Correctly rejected. | Retained multimodal, intubated-adult restriction. | SUPPORTED | [AHA ALS 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support) |
| 10 | Can EtCO₂ substitute for PaCO₂ when dead space changes? | Correctly rejected. | Retained gradient reassessment. | SUPPORTED | [AHA ALS 2025](https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support) |

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. Borderline SpO₂ and EtCO₂ values require clinical and device-context confirmation.
