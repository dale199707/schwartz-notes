(function () {
  const files = [
    'chapter-02-systemic-response-to-injury.md',
    'chapter-03-fluid-and-electrolyte-management.md',
    'chapter-04-hemostasis-surgical-bleeding-transfusion.md',
    'chapter-05-shock.md',
    'chapter-06-surgical-infections.md',
    'chapter-07-trauma.md',
    'chapter-08-burns.md',
    'chapter-09-wound-healing.md',
    'chapter-10-oncology.md',
    'chapter-11-transplantation.md',
    'chapter-12-quality-and-patient-safety.md',
    'chapter-13-physiologic-monitoring.md',
    'chapter-14-minimally-invasive-surgery-robotics.md',
    'chapter-16-skin-and-subcutaneous-tissue.md',
    'chapter-17-the-breast.md',
    'chapter-18-head-and-neck.md',
    'chapter-19-chest-wall-lung-mediastinum-pleura.md',
    'chapter-20-congenital-heart-disease.md',
    'chapter-21-acquired-heart-disease.md',
    'chapter-22-thoracic-aneurysms-and-aortic-dissection.md',
    'chapter-23-arterial-disease.md',
    'chapter-24-venous-and-lymphatic-disease.md',
    'chapter-25-esophagus-and-diaphragmatic-hernia.md',
    'chapter-26-stomach.md',
    'chapter-27-bariatric-surgery.md',
    'chapter-28-small-intestine.md',
    'chapter-29-colon-rectum-anus.md',
    'chapter-30-the-appendix.md',
    'chapter-31-liver.md',
    'chapter-32-gallbladder-extrahepatic-biliary.md',
    'chapter-33-pancreas.md',
    'chapter-34-the-spleen.md',
    'chapter-35-abdominal-wall-ventral-hernia.md',
    'chapter-36-soft-tissue-sarcoma.md',
    'chapter-37-inguinal-hernias.md',
    'chapter-38-thyroid-parathyroid-adrenal.md'
  ];
  const previous = window.CLAUDE_NOTES_PENDING;
  const current = window.loadMarkdownNotes(files);
  window.CLAUDE_NOTES_PENDING = Promise.all([previous, current]);
}());
