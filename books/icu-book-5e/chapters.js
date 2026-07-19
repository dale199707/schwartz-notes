(function () {
  const sections = [
    ['I', 'Vascular Access', [[1, 'Vascular Access Primer', 'vascular-access-primer'], [2, 'Central Venous Access', 'central-venous-access'], [3, 'The Indwelling Vascular Catheter', 'indwelling-vascular-catheter']]],
    ['II', 'Common Practices', [[4, 'Alimentary Prophylaxis', 'alimentary-prophylaxis'], [5, 'Venous Thromboprophylaxis', 'venous-thromboprophylaxis'], [6, 'Analgesia and Sedation in the ICU', 'analgesia-sedation-icu']]],
    ['III', 'Physiological Monitoring', [[7, 'Oximetry and Capnography', 'oximetry-capnography'], [8, 'The Pulmonary Artery Catheter', 'pulmonary-artery-catheter'], [9, 'Systemic Oxygenation', 'systemic-oxygenation']]],
    ['IV', 'Intravenous Fluid Therapy', [[10, 'Intravenous Fluids', 'intravenous-fluids'], [11, 'Fluid Management', 'fluid-management']]],
    ['V', 'Blood Components', [[12, 'Anemia and Red Blood Cell Transfusions', 'anemia-red-blood-cell-transfusions'], [13, 'Platelets and Plasma', 'platelets-plasma']]],
    ['VI', 'Shock Syndromes', [[14, 'Approaches to Clinical Shock', 'approaches-clinical-shock'], [15, 'Hemorrhagic Shock', 'hemorrhagic-shock'], [16, 'Cardiogenic Shock', 'cardiogenic-shock'], [17, 'Inflammatory Shock Syndromes', 'inflammatory-shock-syndromes']]],
    ['VII', 'Cardiac Disorders', [[18, 'Acute Heart Failure(s)', 'acute-heart-failures'], [19, 'Tachyarrhythmias', 'tachyarrhythmias'], [20, 'Acute Coronary Syndromes', 'acute-coronary-syndromes'], [21, 'Cardiac Arrest', 'cardiac-arrest']]],
    ['VIII', 'Respiratory Disorders', [[22, 'Acute Pulmonary Embolism', 'acute-pulmonary-embolism'], [23, 'Asthma and COPD in the ICU', 'asthma-copd-icu'], [24, 'Acute Respiratory Distress Syndrome', 'acute-respiratory-distress-syndrome']]],
    ['IX', 'Respiratory Management', [[25, 'Oxygen Inhalation', 'oxygen-inhalation'], [26, 'Noninvasive Ventilation', 'noninvasive-ventilation'], [27, 'Conventional Mechanical Ventilation', 'conventional-mechanical-ventilation'], [28, 'The Ventilator-Dependent Patient', 'ventilator-dependent-patient'], [29, 'Ventilator-Associated Pneumonia', 'ventilator-associated-pneumonia'], [30, 'Discontinuing Mechanical Ventilation', 'discontinuing-mechanical-ventilation']]],
    ['X', 'Acid-Base Disorders', [[31, 'Acid-Base Analysis', 'acid-base-analysis'], [32, 'Lactic Acidosis and Ketoacidosis', 'lactic-acidosis-ketoacidosis'], [33, 'Metabolic Alkalosis', 'metabolic-alkalosis']]],
    ['XI', 'Renal & Electrolyte Disorders', [[34, 'Acute Kidney Injury', 'acute-kidney-injury'], [35, 'Sodium', 'sodium'], [36, 'Potassium', 'potassium'], [37, 'Magnesium', 'magnesium'], [38, 'Calcium and Phosphorus', 'calcium-phosphorus']]],
    ['XII', 'The Abdomen & Pelvis', [[39, 'Liver Failure', 'liver-failure'], [40, 'Acute Pancreatitis', 'acute-pancreatitis'], [41, 'Abdominal Infections in the ICU', 'abdominal-infections-icu'], [42, 'Urinary Tract Infections in the ICU', 'urinary-tract-infections-icu']]],
    ['XIII', 'Altered Body Temperature', [[43, 'Thermoregulatory Disorders', 'thermoregulatory-disorders'], [44, 'Fever in the ICU', 'fever-icu']]],
    ['XIV', 'Nervous System Disorders', [[45, 'Disorders of Consciousness', 'disorders-consciousness'], [46, 'Disorders of Movement', 'disorders-movement'], [47, 'Acute Stroke in the ICU', 'acute-stroke-icu']]],
    ['XV', 'Nutrition & Metabolism', [[48, 'Nutritional Requirements', 'nutritional-requirements'], [49, 'Enteral Nutrition', 'enteral-nutrition'], [50, 'Parenteral Nutrition', 'parenteral-nutrition'], [51, 'Adrenal and Thyroid Dysfunction', 'adrenal-thyroid-dysfunction']]],
    ['XVI', 'Overdoses & Poisons', [[52, 'Pharmaceutical Drug Overdoses', 'pharmaceutical-drug-overdoses'], [53, 'Nonpharmaceutical Poisons', 'nonpharmaceutical-poisons']]]
  ];

  const chapterFiles = [];
  window.ICU_BOOK_CHAPTERS = sections.flatMap(([number, section, chapters]) => chapters.map(([id, title, slug]) => {
    const file = `books/icu-book-5e/chapters/chapter-${String(id).padStart(2, '0')}-${slug}.md`;
    chapterFiles.push(file);
    return { id, title, zh: '待整理', part: `Section ${number} · ${section}`, file };
  }));

  const clean = value => value.trim()
    .replace(/\\([<>*])/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
  const section = (text, heading) => {
    const match = text.match(new RegExp(`^## ${heading}\\r?$`, 'm'));
    if (!match || match.index === undefined) return '';
    const body = text.slice(match.index + match[0].length).replace(/^\r?\n/, '');
    const end = body.search(/^## /m);
    return (end < 0 ? body : body.slice(0, end)).trim();
  };
  const bullets = text => text.split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.startsWith('- ') && !line.includes('待 Claude'))
    .map(line => clean(line.slice(2)));
  const tables = text => {
    const lines = text.split(/\r?\n/); const output = [];
    const row = line => line.trim().replace(/^\||\|$/g, '').split('|').map(cell => clean(cell));
    for (let i = 0; i < lines.length; i += 1) {
      if (!lines[i].includes('|') || !lines[i + 1] || !/^\s*\|?\s*:?-+/.test(lines[i + 1])) continue;
      const headers = row(lines[i]); const rows = []; i += 2;
      while (i < lines.length && lines[i].includes('|')) { rows.push(row(lines[i])); i += 1; }
      i -= 1; output.push([headers, ...rows]);
    }
    return output;
  };
  const references = text => text.split(/\r?\n/).flatMap(line => {
    const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return match ? [{ label: match[1], url: match[2] }] : [];
  });
  const parse = text => {
    if (!/^<!--\s*status:\s*ready\s*-->$/m.test(text)) return null;
    const heading = text.match(/^# Chapter\s+(\d+):\s*(.+)\r?$/m);
    if (!heading) return null;
    const id = Number(heading[1]);
    return [id, {
      title: clean(heading[2]), zh: clean(heading[2]),
      part: window.ICU_BOOK_CHAPTERS.find(chapter => chapter.id === id)?.part || '',
      bullets: bullets(section(text, '核心整理')),
      pearls: bullets(section(text, 'Clinical pearl')),
      tables: tables(section(text, '快速比較表')),
      updates: bullets(section(text, '後續證據更新')),
      references: references(section(text, 'References'))
    }];
  };

  window.ICU_NOTES_PENDING = Promise.all(chapterFiles.map(file => fetch(file).then(response => {
    if (!response.ok) throw new Error(`無法載入 ${file}`);
    return response.text();
  }))).then(texts => {
    window.ICU_BOOK_NOTES = Object.fromEntries(texts.map(parse).filter(Boolean));
  }).catch(error => {
    window.ICU_BOOK_NOTES = {};
    console.error('ICU Book 章節載入失敗：', error);
  });
}());
