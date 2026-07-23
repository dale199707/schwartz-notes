(function () {
  window.MEDICAL_BOOK_DATA = window.MEDICAL_BOOK_DATA || {};

  const sections = [
    ['I', 'Basics', [
      [1, 'Surgical Technique'],
      [2, 'Anesthesia'],
      [3, 'Preoperative Preparation and Postoperative Care'],
      [4, 'Ambulatory Surgery']
    ]],
    ['II', 'Surgical Anatomy', [
      [5, 'Arterial Blood Supply to the Upper Abdominal Viscera'],
      [6, 'Venous and Lymphatic Supply to the Upper Abdominal Viscera'],
      [7, 'Anatomy of the Large Intestine'],
      [8, 'Anatomy of the Abdominal Aorta and Inferior Vena Cava'],
      [9, 'Thoracic and Pulmonary Anatomy']
    ]],
    ['III', 'General Abdomen and Thorax', [
      [10, 'Laparotomy'],
      [11, 'Hasson Open Technique for Laparoscopic Access'],
      [12, 'Veress Needle Technique'],
      [13, 'Diagnostic Laparoscopy'],
      [14, 'Chronic Ambulatory Peritoneal Dialysis Catheter Insertion'],
      [15, 'Thoracotomy Incision'],
      [16, 'Thoracoscopy']
    ]],
    ['IV', 'Esophagus and Stomach', [
      [17, 'Gastrostomy'],
      [18, 'Percutaneous Endoscopic Gastrostomy'],
      [19, 'Closure of Perforation—Subphrenic Abscess'],
      [20, 'Gastrojejunostomy'],
      [21, 'Pyloroplasty—Gastroduodenostomy'],
      [22, 'Vagotomy'],
      [23, 'Vagotomy, Subdiaphragmatic Approach'],
      [24, 'Hemigastrectomy, Billroth I Method'],
      [25, 'Hemigastrectomy, Billroth I Stapled'],
      [26, 'Gastrectomy, Subtotal'],
      [27, 'Gastrectomy, Subtotal—Omentectomy'],
      [28, 'Gastrectomy, Polya Method'],
      [29, 'Gastrectomy, Hofmeister Method'],
      [30, 'Hemigastrectomy, Billroth II Stapled'],
      [31, 'Total Gastrectomy'],
      [32, 'Total Gastrectomy, Stapled'],
      [33, 'Roux-en-Y Gastrojejunostomy'],
      [34, 'Fundoplication'],
      [35, 'Fundoplication, Laparoscopic'],
      [36, 'Esophageal Myotomy, Laparoscopic'],
      [37, 'Roux-en-Y Gastric Bypass, Laparoscopic'],
      [38, 'Sleeve Gastrectomy, Laparoscopic'],
      [39, 'The Adjustable Gastric Band, Laparoscopic'],
      [40, 'Esophagectomy Transhiatal'],
      [41, 'Esophagectomy, Transthoracic'],
      [42, 'Pyloromyotomy']
    ]],
    ['V', 'Small Intestine, Colon, and Rectum', [
      [43, "Intussusception and Meckel's Diverticulectomy"],
      [44, 'Resection of Small Intestine'],
      [45, 'Resection of Small Intestine, Stapled'],
      [46, 'Enteroenterostomy, Stapled'],
      [47, 'Enterostomy'],
      [48, 'Appendectomy'],
      [49, 'Appendectomy, Laparoscopic'],
      [50, 'Surgical Anatomy of Large Intestine'],
      [51, 'Loop Ileostomy'],
      [52, 'Transverse Colostomy'],
      [53, 'Closure of Colostomy'],
      [54, 'Colon Anastomosis, Stapled'],
      [55, 'Colectomy, Right'],
      [56, 'Colectomy, Right, Laparoscopic'],
      [57, 'Colectomy, Left, End-to-End Anastomosis'],
      [58, 'Colectomy, Left, Laparoscopic'],
      [59, 'Abdominoperineal Resection'],
      [60, 'Total Colectomy and Total Proctocolectomy'],
      [61, 'Anterior Resection of Rectosigmoid: End-to-End Anastomosis'],
      [62, 'Anterior Resection, Stapled'],
      [63, 'Anterior Resection of Rectosigmoid: Side-to-End Anastomosis (Baker)'],
      [64, 'Ileoanal Anastomosis'],
      [65, 'Rectal Prolapse, Perineal Repair'],
      [66, 'Rubber Banding and Excision of Hemorrhoids'],
      [67, 'Perirectal Abscess, Fistula-in-Ano, and Anal Fissure'],
      [68, 'Excision of Pilonidal Sinus']
    ]],
    ['VI', 'Gallbladder, Bile Ducts, and Liver', [
      [69, 'Cholecystectomy, Laparoscopic'],
      [70, 'Cholecystectomy, Open Retrograde Technique'],
      [71, 'Common Bile Duct Exploration, Open'],
      [72, 'Common Bile Duct Exploration, Transduodenal Technique'],
      [73, 'Choledochoduodenostomy'],
      [74, 'Cholecystectomy, Partial Cholecystectomy'],
      [75, 'Cholecystostomy'],
      [76, 'Choledochojejunostomy'],
      [77, 'Local Resection of Hilar Tumor, Klatskin'],
      [78, 'Biopsy of Liver, Open'],
      [79, 'Anatomy and Resections of the Liver'],
      [80, 'Local Resection of Hepatic Tumor (Nonanatomic)'],
      [81, 'Right Hepatectomy (Segments 5, 6, 7, 8 ± Segment 1)'],
      [82, 'Left Hepatectomy (Segments 2, 3, 4 ± Segment 1)'],
      [83, 'Extended Right Hepatectomy (Segments 4, 5, 6, 7, 8 ± Segment 1)']
    ]],
    ['VII', 'Pancreas and Spleen', [
      [84, 'Drainage of Cyst or Pseudocyst of the Pancreas'],
      [85, 'Pancreaticojejunostomy (Puestow–Gillesby Procedure)'],
      [86, 'Resection of the Tail of the Pancreas'],
      [87, 'Resection of the Tail of the Pancreas with Splenic Preservation, Laparoscopic'],
      [88, 'Pancreaticoduodenectomy (Whipple Procedure)'],
      [89, 'Total Pancreatectomy'],
      [90, 'Splenectomy'],
      [91, 'Splenectomy, Laparoscopic'],
      [92, 'Splenic Conservation']
    ]],
    ['VIII', 'Genitourinary', [
      [93, 'A Gynecologic Procedures Overview'],
      [94, 'Total Abdominal Hysterectomy'],
      [95, 'Salpingectomy—Oophorectomy'],
      [96, 'Gynecologic System—Routine for Vaginal Procedures'],
      [97, 'Diagnostic Techniques for Cervical Lesions—Dilatation and Curettage'],
      [98, 'Ureteral Injury Repair'],
      [99, 'Donor Nephrectomy, Laparoscopic'],
      [100, 'Kidney Transplant']
    ]],
    ['IX', 'Hernia', [
      [101, 'Repair of Ventral Hernia, Laparoscopic'],
      [102, 'Repair of Ventral Hernia, Open Component Parts Separation'],
      [103, 'Repair of Umbilical Hernia'],
      [104, 'Repair of Indirect Inguinal Hernia'],
      [105, 'Repair of Indirect Inguinal Hernia (Shouldice)'],
      [106, 'Repair of Direct Inguinal Hernia (McVay)'],
      [107, 'Repair of Inguinal Hernia with Mesh (Lichtenstein)'],
      [108, 'Repair of Inguinal Hernia with Mesh (Rutkow and Robbins)'],
      [109, 'Repair of Femoral Hernia'],
      [110, 'Repair of Femoral Hernia with Mesh'],
      [111, 'Laparoscopic Anatomy of the Inguinal Region'],
      [112, 'Repair of Inguinal Hernia, Laparoscopic Transabdominal Preperitoneal (TAPP)'],
      [113, 'Repair of Inguinal Hernia, Laparoscopic Totally Extraperitoneal (TEP)'],
      [114, 'Hydrocele Repair']
    ]],
    ['X', 'Endocrine', [
      [115, 'Thyroidectomy, Subtotal'],
      [116, 'Parathyroidectomy'],
      [117, 'Adrenalectomy, Bilateral'],
      [118, 'Adrenalectomy, Left Laparoscopic'],
      [119, 'Adrenalectomy, Right Laparoscopic']
    ]],
    ['XI', 'Head and Neck', [
      [120, 'Tracheotomy'],
      [121, 'Tracheotomy, Percutaneous Dilational'],
      [122, 'Radical Neck Dissection'],
      [123, "Zenker's Diverticulectomy"],
      [124, 'Parotidectomy, Lateral Lobectomy']
    ]],
    ['XII', 'Skin, Soft Tissue, and Breast', [
      [125, 'Sentinel Lymph Node Dissection, Melanoma'],
      [126, 'Breast Anatomy and Incisions'],
      [127, 'Modified Radical Mastectomy'],
      [128, 'Sentinel Lymph Node Dissection, Breast'],
      [129, 'Axillary Dissection, Breast'],
      [130, 'Skin Graft']
    ]],
    ['XIII', 'Vascular', [
      [131, 'Carotid Endarterectomy'],
      [132, 'Vascular Access, Arteriovenous Fistula'],
      [133, 'Venous Access, Port Placement, Internal Jugular Vein'],
      [134, 'Venous Access, Central Venous Catheter, Subclavian Vein'],
      [135, 'Resection of Abdominal Aortic Aneurysm'],
      [136, 'Aortofemoral Bypass'],
      [137, 'Thromboembolectomy, Superior Mesenteric Artery'],
      [138, 'Femorofemoral Bypass'],
      [139, 'Femoropopliteal Reconstruction'],
      [140, 'Saphenous Vein In Situ Arterial Bypass'],
      [141, 'Thromboembolectomy, Femoral'],
      [142, 'Inferior Vena Caval Filter Insertion'],
      [143, 'Endovenous Laser Ablation of the Great Saphenous Vein and Stab Phlebectomy'],
      [144, 'Shunting Procedures for Portal Hypertension']
    ]],
    ['XIV', 'Extremities', [
      [145, 'Fasciotomy'],
      [146, 'Escharotomy'],
      [147, 'Principles of Amputation'],
      [148, 'Amputation, Supracondylar'],
      [149, 'Incision and Drainage of Infections of the Hand'],
      [150, 'Suture of Tendon']
    ]]
  ];

  const slugify = title => title.toLocaleLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const chapterFile = (id, title) => `books/zollinger-10e/chapters/chapter-${String(id).padStart(3, '0')}-${slugify(title)}.md`;
  const chapters = sections.flatMap(([number, section, items]) => items.map(([id, title]) => ({
    id,
    title,
    zh: '待整理',
    part: `Section ${number} · ${section}`,
    file: chapterFile(id, title)
  })));

  // Codex 將正式稿同步至 chapters/ 時，才把相應章號加入此清單。
  const readyChapterIds = Array.from({ length: 150 }, (_, index) => index + 1);
  const clean = value => value.trim()
    .replace(/\\([<>*()])/g, '$1')
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
    .filter(line => line.startsWith('- '))
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
    const match = line.trim().match(/^-\s+\[([^\]]+)\]\((https?:\/\/.*)\)\s*$/);
    return match ? [{ label: clean(match[1]), url: match[2].replace(/\\([()])/g, '$1') }] : [];
  });
  const parse = text => {
    if (!/^<!--\s*status:\s*ready\s*-->$/m.test(text)) return null;
    const heading = text.match(/^# Chapter\s+(\d+):\s*(.+)\r?$/m);
    if (!heading) return null;
    const id = Number(heading[1]);
    return [id, {
      title: clean(heading[2]),
      zh: clean(heading[2]),
      part: chapters.find(chapter => chapter.id === id)?.part || '',
      bullets: bullets(section(text, '核心整理')),
      pearls: bullets(section(text, 'Clinical pearl')),
      tables: tables(section(text, '快速比較表')),
      updates: bullets(section(text, '後續證據更新')),
      references: references(section(text, 'References'))
    }];
  };

  const bookData = window.MEDICAL_BOOK_DATA['zollinger-10e'] = {
    chapters,
    notes: {},
    figures: {}
  };
  const readyFiles = chapters.filter(chapter => readyChapterIds.includes(chapter.id)).map(chapter => chapter.file);
  bookData.pending = Promise.all(readyFiles.map(file => fetch(file).then(response => {
    if (!response.ok) throw new Error(`無法載入 ${file}`);
    return response.text();
  }))).then(texts => {
    bookData.notes = Object.fromEntries(texts.map(parse).filter(Boolean));
  }).catch(error => {
    bookData.notes = {};
    console.error('Zollinger 章節載入失敗：', error);
  });
}());
