(function () {
  const files = [
    'chapter-12-quality-and-patient-safety.md',
    'chapter-13-physiologic-monitoring.md',
    'chapter-14-minimally-invasive-surgery-robotics.md',
    'chapter-20-congenital-heart-disease.md',
    'chapter-21-acquired-heart-disease.md',
    'chapter-36-soft-tissue-sarcoma.md'
  ];
  const previous = window.CLAUDE_NOTES_PENDING;
  const current = window.loadMarkdownNotes(files);
  window.CLAUDE_NOTES_PENDING = Promise.all([previous, current]);
}());
