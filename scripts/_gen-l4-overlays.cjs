// Generate EN/JA/zh-TW lesson overlay files for Bourgogne L4 (master-m1~m8)
const fs = require('fs');
const path = require('path');

const SRC = 'public/bourgogne/data/courses/level4';
const DEST_BASE = 'src/locales';

// EN translations for all 8 modules
const EN_DATA = {
  'm1': {
    title: 'Burgundy History & Cultural Heritage In-Depth Study',
    lessons: [
      { title: 'Roman Era to Medieval Wine Civilization', duration: '15 min' },
      { title: 'The Valois Dukes and the Golden Age of Burgundy', duration: '16 min' },
      { title: 'The French Revolution and the Property Revolution', duration: '14 min' },
      { title: 'The Phylloxera Crisis and Reconstruction', duration: '15 min' },
      { title: 'Establishing the AOC System and Appellation Definitions', duration: '16 min' },
      { title: "Burgundy's Modern Cultural Influence", duration: '14 min' },
    ]
  },
  'm2': {
    title: 'Global Premium Pinot Noir Comparative Study',
    lessons: [
      { title: "Pinot Noir's Global Adaptability Research", duration: '15 min' },
      { title: "Burgundy: Pinot Noir's Homeland and Standard", duration: '16 min' },
      { title: "New Zealand's Central Otago: The New World Star", duration: '15 min' },
      { title: "Oregon's Willamette Valley: Inheriting the Burgundy Spirit", duration: '15 min' },
      { title: "German Spätburgunder: The Underestimated Elegance", duration: '16 min' },
      { title: "California's Sonoma Coast: Balance of Power and Grace", duration: '14 min' },
      { title: 'Blind Tasting: Global Pinot Noir Identification Techniques', duration: '18 min' },
    ]
  },
  'm3': {
    title: 'Professional Sommelier Training',
    lessons: [
      { title: 'Professional Wine Service Techniques', duration: '15 min' },
      { title: 'Burgundy Wine and Food Pairing', duration: '18 min' },
      { title: 'Wine List Construction Strategy', duration: '16 min' },
      { title: 'Professional Tasting Vocabulary and Descriptions', duration: '15 min' },
      { title: 'Wine Cellar Management Practice', duration: '16 min' },
      { title: 'Sommelier Certification Systems', duration: '14 min' },
      { title: 'Client Communication and Sales Skills', duration: '16 min' },
      { title: 'Handling Special Situations and Complaints', duration: '14 min' },
    ]
  },
  'm4': {
    title: 'Wine Education & Teaching Methods',
    lessons: [
      { title: 'Teaching Methodology Design for Wine Education', duration: '16 min' },
      { title: 'Wine Tasting Event Design and Hosting Techniques', duration: '17 min' },
      { title: 'Certification Exam Preparation Strategies', duration: '15 min' },
      { title: 'Online Wine Education', duration: '14 min' },
      { title: 'Corporate Wine Training', duration: '15 min' },
      { title: 'Building Your Personal Teaching Brand', duration: '18 min' },
    ]
  },
  'm5': {
    title: 'Business Cases & Market Strategy',
    lessons: [
      { title: 'Burgundy Wine Market Analysis', duration: '16 min' },
      { title: 'Wine Merchant Business Model Analysis', duration: '17 min' },
      { title: 'Brand Strategy and Positioning', duration: '16 min' },
      { title: 'Pricing Strategy and Psychology', duration: '15 min' },
      { title: 'Consumer Behavior Analysis', duration: '17 min' },
      { title: 'Digital Marketing and Social Media Management', duration: '16 min' },
      { title: 'Business Case Analysis', duration: '18 min' },
    ]
  },
  'm6': {
    title: 'International Trade & Import/Export Practice',
    lessons: [
      { title: 'Complete Guide to Wine Import Procedures', duration: '18 min' },
      { title: 'Customs Duties and Tax Planning', duration: '16 min' },
      { title: 'Logistics and Temperature Control Management', duration: '15 min' },
      { title: 'International Wine Fair Strategy', duration: '17 min' },
      { title: 'En Primeur Futures Trading', duration: '14 min' },
    ]
  },
  'm7': {
    title: 'Winery Management & Entrepreneurship',
    lessons: [
      { title: 'Winery Business Model Analysis', duration: '17 min' },
      { title: 'Winery Financial Planning', duration: '18 min' },
      { title: 'Brand Building and Marketing', duration: '16 min' },
      { title: 'Sustainable Management and Organic Certification', duration: '15 min' },
      { title: 'Human Resources Management', duration: '16 min' },
      { title: 'Risk Management and Insurance', duration: '14 min' },
    ]
  },
  'm8': {
    title: 'Expert Thesis & Comprehensive Assessment',
    lessons: [
      { title: 'Professional Thesis Writing Guide', duration: '20 min' },
      { title: 'Comprehensive Blind Tasting Practice', duration: '20 min' },
      { title: 'Oral Examination Simulation and Techniques', duration: '18 min' },
      { title: 'Case Study Analysis', duration: '20 min' },
      { title: 'Continuing Professional Development Plan', duration: '16 min' },
      { title: 'Master-Level Tasting Notes Writing', duration: '18 min' },
      { title: 'Building Your Professional Network', duration: '15 min' },
      { title: 'Final Comprehensive Assessment Preparation', duration: '18 min' },
    ]
  },
};

// JA translations
const JA_DATA = {
  'm1': {
    title: 'ブルゴーニュの歴史と文化的遺産 深掘り研究',
    lessons: [
      { title: 'ローマ時代から中世のワイン文明', duration: '15分' },
      { title: 'ヴァロワ公爵とブルゴーニュの黄金時代', duration: '16分' },
      { title: 'フランス革命と所有権革命', duration: '14分' },
      { title: 'フィロキセラ危機と復興', duration: '15分' },
      { title: 'AOCシステムの確立と産地定義', duration: '16分' },
      { title: '現代ブルゴーニュの文化的影響力', duration: '14分' },
    ]
  },
  'm2': {
    title: '世界トップ・ピノ・ノワール比較研究',
    lessons: [
      { title: 'ピノ・ノワールの世界的適応性研究', duration: '15分' },
      { title: 'ブルゴーニュ：ピノ・ノワールの故郷と基準', duration: '16分' },
      { title: 'ニュージーランド・セントラルオタゴ：ニューワールドの星', duration: '15分' },
      { title: 'オレゴン・ウィラメットバレー：ブルゴーニュ精神の継承', duration: '15分' },
      { title: 'ドイツのシュペートブルグンダー：過小評価された優雅さ', duration: '16分' },
      { title: 'カリフォルニア・ソノマコースト：力と優雅さのバランス', duration: '14分' },
      { title: 'ブラインドテイスティング：世界のピノ・ノワール識別技術', duration: '18分' },
    ]
  },
  'm3': {
    title: 'ソムリエ専門技術訓練',
    lessons: [
      { title: 'プロのワインサービス技術', duration: '15分' },
      { title: 'ブルゴーニュワインとフードペアリング', duration: '18分' },
      { title: 'ワインリスト構築戦略', duration: '16分' },
      { title: 'プロのテイスティング語彙と記述', duration: '15分' },
      { title: 'ワインセラー管理実務', duration: '16分' },
      { title: 'ソムリエ認定制度', duration: '14分' },
      { title: 'クライアントコミュニケーションと販売スキル', duration: '16分' },
      { title: '特殊状況とクレームへの対応', duration: '14分' },
    ]
  },
  'm4': {
    title: 'ワイン教育と指導法',
    lessons: [
      { title: 'ワイン教育の指導法設計', duration: '16分' },
      { title: 'テイスティングイベントのデザインとホスティング', duration: '17分' },
      { title: '認定試験準備戦略', duration: '15分' },
      { title: 'オンラインワイン教育', duration: '14分' },
      { title: '企業向けワイン研修', duration: '15分' },
      { title: '個人教育ブランドの構築', duration: '18分' },
    ]
  },
  'm5': {
    title: 'ビジネスケースと市場戦略',
    lessons: [
      { title: 'ブルゴーニュワイン市場分析', duration: '16分' },
      { title: 'ワイン商ビジネスモデル分析', duration: '17分' },
      { title: 'ブランド戦略とポジショニング', duration: '16分' },
      { title: '価格戦略と心理学', duration: '15分' },
      { title: '消費者行動分析', duration: '17分' },
      { title: 'デジタルマーケティングとSNS運営', duration: '16分' },
      { title: 'ビジネスケース分析', duration: '18分' },
    ]
  },
  'm6': {
    title: '国際貿易・輸出入実務',
    lessons: [
      { title: 'ワイン輸入手続き完全解説', duration: '18分' },
      { title: '関税と税務計画', duration: '16分' },
      { title: '物流と温度管理', duration: '15分' },
      { title: '国際ワインフェア戦略', duration: '17分' },
      { title: 'アン・プリムール先物取引', duration: '14分' },
    ]
  },
  'm7': {
    title: 'ワイナリー経営と起業管理',
    lessons: [
      { title: 'ワイナリービジネスモデル分析', duration: '17分' },
      { title: 'ワイナリー財務計画', duration: '18分' },
      { title: 'ブランド構築とマーケティング', duration: '16分' },
      { title: '持続可能な経営とオーガニック認定', duration: '15分' },
      { title: '人事管理', duration: '16分' },
      { title: 'リスク管理と保険', duration: '14分' },
    ]
  },
  'm8': {
    title: '専門論文と総合評価',
    lessons: [
      { title: '専門論文執筆ガイド', duration: '20分' },
      { title: '総合ブラインドテイスティング練習', duration: '20分' },
      { title: '口頭試問シミュレーションと対応技術', duration: '18分' },
      { title: 'ケーススタディ分析', duration: '20分' },
      { title: '継続的専門能力開発計画', duration: '16分' },
      { title: 'マスターレベルのテイスティングノート執筆', duration: '18分' },
      { title: 'プロフェッショナルネットワークの構築', duration: '15分' },
      { title: '最終総合評価準備', duration: '18分' },
    ]
  },
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateOverlay(srcFile, translations, locale) {
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
  const overlay = {};

  // Module-level title
  if (translations.title) overlay['title'] = translations.title;

  // Lesson-level entries
  data.lessons.forEach((lesson, idx) => {
    const t = translations.lessons[idx];
    if (!t) return;
    const base = `lessons.${idx}`;
    if (t.title)    overlay[`${base}.title`]    = t.title;
    if (t.duration) overlay[`${base}.duration`] = t.duration;

    // Also translate the title slide subtitle if it contains the duration
    if (lesson.slides && lesson.slides[0]) {
      const s0 = lesson.slides[0];
      if (s0.subtitle && /分鐘/.test(s0.subtitle)) {
        overlay[`${base}.slides.0.subtitle`] = `Lesson ${idx + 1} - ${t.duration}`;
      }
    }
  });

  return overlay;
}

// zh-TW: extract full source content (for completeness)
function generateZhTW(srcFile) {
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
  const overlay = {};
  overlay['title'] = data.title;
  data.lessons.forEach((lesson, lIdx) => {
    const base = `lessons.${lIdx}`;
    overlay[`${base}.title`] = lesson.title;
    if (lesson.duration) overlay[`${base}.duration`] = lesson.duration;
    if (lesson.slides) {
      lesson.slides.forEach((slide, sIdx) => {
        const sb = `${base}.slides.${sIdx}`;
        if (slide.title)    overlay[`${sb}.title`]    = slide.title;
        if (slide.subtitle) overlay[`${sb}.subtitle`] = slide.subtitle;
        if (slide.description) overlay[`${sb}.description`] = slide.description;
        if (slide.content)  overlay[`${sb}.content`]  = slide.content;
        if (slide.points)   slide.points.forEach((p, pi) => { overlay[`${sb}.points.${pi}`] = p; });
      });
    }
  });
  return overlay;
}

let total = 0;
for (let i = 1; i <= 8; i++) {
  const mKey = `m${i}`;
  const moduleId = `master-m${i}`;
  const srcFile = path.join(SRC, `${moduleId}.json`);

  if (!fs.existsSync(srcFile)) { console.warn(`SKIP: ${srcFile} not found`); continue; }

  // EN
  const enDir = path.join(DEST_BASE, 'en', 'lessons', 'bourgogne');
  ensureDir(enDir);
  const enOverlay = generateOverlay(srcFile, EN_DATA[mKey], 'en');
  fs.writeFileSync(path.join(enDir, `${moduleId}.json`), JSON.stringify(enOverlay, null, 2), 'utf-8');

  // JA
  const jaDir = path.join(DEST_BASE, 'ja', 'lessons', 'bourgogne');
  ensureDir(jaDir);
  const jaOverlay = generateOverlay(srcFile, JA_DATA[mKey], 'ja');
  fs.writeFileSync(path.join(jaDir, `${moduleId}.json`), JSON.stringify(jaOverlay, null, 2), 'utf-8');

  // zh-TW
  const zhDir = path.join(DEST_BASE, 'zh-TW', 'lessons', 'bourgogne');
  ensureDir(zhDir);
  const zhOverlay = generateZhTW(srcFile);
  fs.writeFileSync(path.join(zhDir, `${moduleId}.json`), JSON.stringify(zhOverlay, null, 2), 'utf-8');

  total++;
  console.log(`✅ ${moduleId}: EN(${Object.keys(enOverlay).length}) JA(${Object.keys(jaOverlay).length}) zh-TW(${Object.keys(zhOverlay).length}) keys`);
}
console.log(`\nDone: ${total * 3} files generated`);
