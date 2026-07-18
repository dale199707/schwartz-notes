# Chapter 21 evidence audit

- Audit model: `validate-medical-chapter` v1
- Audit date: 2026-07-19
- Pre-revision score: **5/10**
- Post-revision score: **10/10**
- Current major guidance checked: ACC/AHA/SCAI revascularization 2021, ESC/EACTS valves 2025, ESC endocarditis 2023

| Q# | Verification question | Source-grounded answer | Chapter finding before revision | Verdict before revision | Correction | Sources |
|---:|---|---|---|---|---|---|
| 1 | Is CABG automatically indicated for every three-vessel stable CAD case? | No; benefit depends on EF, diabetes, left main, complexity, symptoms, feasibility, and Heart-Team assessment. | Used the traditional left-main/three-vessel shorthand. | NEEDS_NUANCE | Added evidence pathways and normal-EF uncertainty. | [Revascularization guideline](https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038) |
| 2 | Is LIMA–LAD foundational and radial artery preferred for a suitable second target? | Yes. | Included LIMA but omitted current radial-over-vein preference. | NEEDS_NUANCE | Added second-conduit recommendation. | [Revascularization guideline](https://www.ahajournals.org/doi/10.1161/CIR.0000000000001038) |
| 3 | Does a bioprosthetic valve guarantee no long-term anticoagulation? | No; AF, VTE, and early postoperative strategies may still require antithrombotic therapy. | Said bioprosthesis avoids long-term anticoagulation without exception. | NEEDS_NUANCE | Added other indications and lifetime strategy. | [Valve guideline](https://pubmed.ncbi.nlm.nih.gov/40878295/) |
| 4 | Is repair preferred for all mitral regurgitation? | No; durable repair is preferred in primary degenerative MR at expert centers, while secondary MR follows HF/CRT and phenotype-based TEER/surgery pathways. | Applied “repair over replacement” too broadly. | INCORRECT | Split primary and secondary disease. | [Valve guideline](https://pubmed.ncbi.nlm.nih.gov/40878295/) |
| 5 | Are symptomatic severe AS patients candidates for valve intervention? | Yes, with TAVR versus SAVR based on age, anatomy, life expectancy, concomitant disease, and lifetime strategy. | Correct urgency, later updated with Heart-Team detail. | SUPPORTED | Retained. | [Valve guideline](https://pubmed.ncbi.nlm.nih.gov/40878295/) |
| 6 | Are infective-endocarditis surgical indications a simple vegetation-size rule? | No; heart failure, uncontrolled infection, embolic risk, organism, anatomy, neurologic events, and timing are integrated by an Endocarditis Team. | Listed correct domains but lacked timing/team nuance. | NEEDS_NUANCE | Added integrated decision framework. | [ESC 2023](https://pubmed.ncbi.nlm.nih.gov/37622656/) |
| 7 | Do post-MI VSD, papillary rupture, and free-wall rupture require urgent recognition? | Yes; new murmur, shock, pulmonary edema, or tamponade demands immediate imaging/support and surgical team involvement. | Correct. | SUPPORTED | None. | Cardiac emergency principle |
| 8 | Did ISCHEMIA show no benefit for any invasive strategy in all CAD? | No; it applies to stable patients without significant left main, recent ACS, or severe LV dysfunction and mainly informs initial strategy. | Correctly stated exclusions and symptom benefit. | SUPPORTED | Retained. | [ISCHEMIA](https://pubmed.ncbi.nlm.nih.gov/32227755/) |
| 9 | Is TEER beneficial for every secondary MR patient? | No; COAPT benefit requires severe symptomatic MR despite optimized therapy and suitable ventricular/anatomic profile. | Correctly limited. | SUPPORTED | None. | [COAPT](https://pubmed.ncbi.nlm.nih.gov/30280640/) |
| 10 | Is TAVR universally preferable in low-risk severe AS? | No; five-year outcomes are similar and patient age, anatomy, concomitant surgery, and lifetime valve strategy matter. | Correctly qualified. | SUPPORTED | Retained. | [PARTNER 3 five-year](https://pubmed.ncbi.nlm.nih.gov/37874020/) |

## Re-audit conclusion

All ten questions are `SUPPORTED` after revision. CABG, valve choice, MR, and endocarditis decisions are now phenotype- and Heart-Team based rather than slogan based.

A 10/10 score is a quality threshold, not a substitute for current Heart-Team and endocarditis-team decisions.
