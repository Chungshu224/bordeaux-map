// Generate all missing Bourgogne locale overlay files
// Missing: beginner zh-TW (8), intermediate all-3-langs (24), advanced all-3-langs (45)
const fs = require('fs');
const path = require('path');

const DEST_BASE = 'src/locales';
const PUBLIC = 'public/bourgogne/data/courses';

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

// ── Extract zh-TW keys from source ──────────────────────────────────────────
function extractZhTW(srcFile) {
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
  const out = {};
  out['title'] = data.title;
  if (data.description) out['description'] = data.description;
  data.lessons.forEach((l, lIdx) => {
    const lb = `lessons.${lIdx}`;
    out[`${lb}.title`] = l.title;
    if (l.duration) out[`${lb}.duration`] = l.duration;
    if (l.slides) {
      l.slides.forEach((s, sIdx) => {
        const sb = `${lb}.slides.${sIdx}`;
        if (s.title)       out[`${sb}.title`]       = s.title;
        if (s.subtitle)    out[`${sb}.subtitle`]    = s.subtitle;
        if (s.description) out[`${sb}.description`] = s.description;
        if (s.content)     out[`${sb}.content`]     = s.content;
        if (s.intro)       out[`${sb}.intro`]       = s.intro;
        if (s.points) s.points.forEach((p, pi) => { out[`${sb}.points.${pi}`] = p; });
      });
    }
    if (l.quiz && Array.isArray(l.quiz)) {
      l.quiz.forEach((q, qi) => {
        const qb = `${lb}.quiz.${qi}`;
        if (q.question) out[`${qb}.question`] = q.question;
        if (q.options)  q.options.forEach((o, oi) => { out[`${qb}.options.${oi}`] = o; });
        if (q.explanation) out[`${qb}.explanation`] = q.explanation;
      });
    }
  });
  return out;
}

// ── Build overlay from translation data ─────────────────────────────────────
function buildOverlay(srcFile, trans) {
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
  const out = {};
  if (trans.title) out['title'] = trans.title;
  data.lessons.forEach((l, lIdx) => {
    const t = trans.lessons[lIdx];
    if (!t) return;
    const lb = `lessons.${lIdx}`;
    if (t.title) out[`${lb}.title`] = t.title;
    if (t.duration) out[`${lb}.duration`] = t.duration;
    if (l.slides && l.slides[0]) {
      const s0 = l.slides[0];
      if (s0.subtitle && /分鐘|分/.test(s0.subtitle)) {
        out[`${lb}.slides.0.subtitle`] = `Lesson ${lIdx + 1} - ${t.duration}`;
      }
    }
  });
  return out;
}
function buildOverlayJA(srcFile, trans) {
  const data = JSON.parse(fs.readFileSync(srcFile, 'utf-8'));
  const out = {};
  if (trans.title) out['title'] = trans.title;
  data.lessons.forEach((l, lIdx) => {
    const t = trans.lessons[lIdx];
    if (!t) return;
    const lb = `lessons.${lIdx}`;
    if (t.title) out[`${lb}.title`] = t.title;
    if (t.duration) out[`${lb}.duration`] = t.duration;
    if (l.slides && l.slides[0]) {
      const s0 = l.slides[0];
      if (s0.subtitle && /分鐘|分/.test(s0.subtitle)) {
        out[`${lb}.slides.0.subtitle`] = `Lesson ${lIdx + 1} - ${t.duration}`;
      }
    }
  });
  return out;
}

// ════════════════════════════════════════════════════════════════════════════
// TRANSLATION DATA
// ════════════════════════════════════════════════════════════════════════════

const L1_EN = {
  'beginner-m1': { title: 'Introduction to Burgundy', lessons: [
    { title: 'Geography and Climate', duration: '15 min' },
    { title: 'Wine History and the Monastic Tradition', duration: '20 min' },
    { title: 'Key Grape Varieties', duration: '15 min' },
    { title: 'How to Read a Burgundy Wine Label', duration: '15 min' },
  ]},
  'beginner-m2': { title: 'Terroir and Grape Varieties', lessons: [
    { title: 'The AOC Appellation System', duration: '15 min' },
    { title: 'The Four-Tier Classification Explained', duration: '20 min' },
    { title: 'How to Read Classification Labels', duration: '10 min' },
  ]},
  'beginner-m3': { title: 'Exploring Côte de Nuits', lessons: [
    { title: 'Côte de Nuits Overview: Kingdom of Red Wine', duration: '15 min' },
    { title: 'Northern Villages: Marsannay, Fixin, Gevrey-Chambertin', duration: '15 min' },
    { title: 'Central Villages: Morey-Saint-Denis, Chambolle-Musigny, Vougeot', duration: '12 min' },
    { title: 'The Southern Duo: Vosne-Romanée & Nuits-Saint-Georges', duration: '15 min' },
  ]},
  'beginner-m4': { title: 'Exploring Côte de Beaune', lessons: [
    { title: 'Côte de Beaune Overview: Paradise of White Wine', duration: '12 min' },
    { title: 'Three Great White Wine Villages: Meursault, Puligny, Chassagne', duration: '18 min' },
    { title: 'Two Red Wine Giants: Pommard & Volnay', duration: '12 min' },
    { title: 'Other Important Villages and Tasting Tips', duration: '10 min' },
  ]},
  'beginner-m5': { title: 'Chablis In-Depth', lessons: [
    { title: '🗺️ Chablis Region Map', duration: '2 min' },
    { title: "Chablis' Unique Terroir", duration: '15 min' },
    { title: 'Chablis: Four Classifications and Seven Grand Crus', duration: '20 min' },
    { title: 'Chablis Tasting and Food Pairing', duration: '15 min' },
  ]},
  'beginner-m6': { title: 'Introduction to Beaujolais', lessons: [
    { title: "Beaujolais: Burgundy's Rebel Child", duration: '15 min' },
    { title: 'The Ten Crus In Depth', duration: '20 min' },
    { title: 'Beaujolais Tasting and Food Pairing', duration: '10 min' },
  ]},
  'beginner-m7': { title: 'Côte Chalonnaise and Mâconnais', lessons: [
    { title: "Côte Chalonnaise: Extension of the Côte d'Or", duration: '15 min' },
    { title: 'Mâconnais: Accessible White Wine Paradise', duration: '12 min' },
    { title: 'Value-for-Money Buying Guide', duration: '13 min' },
  ]},
  'beginner-m8': { title: 'Vintages and Prestigious Estates', lessons: [
    { title: 'The Importance of Vintages', duration: '15 min' },
    { title: "Burgundy's Prestigious Estates", duration: '18 min' },
    { title: 'Tasting and Collecting Advice', duration: '12 min' },
  ]},
};

const L1_JA = {
  'beginner-m1': { title: 'ブルゴーニュへの入門', lessons: [
    { title: '地理的位置と気候環境', duration: '15分' },
    { title: 'ワインの歴史と修道院の伝統', duration: '20分' },
    { title: '主要ブドウ品種', duration: '15分' },
    { title: 'ワインラベルの読み方ガイド', duration: '15分' },
  ]},
  'beginner-m2': { title: 'テロワールとブドウ品種', lessons: [
    { title: 'AOC法定産地制度', duration: '15分' },
    { title: '四段階格付制度の詳解', duration: '20分' },
    { title: '格付表示の読み方', duration: '10分' },
  ]},
  'beginner-m3': { title: 'コート・ド・ニュイ探索', lessons: [
    { title: 'コート・ド・ニュイ概要：赤ワインの王国', duration: '15分' },
    { title: '北部三村：マルサネ、フィクサン、ジュヴレ・シャンベルタン', duration: '15分' },
    { title: '中部三村：モレ・サン・ドニ、シャンボル・ミュジニ、ヴジョ', duration: '12分' },
    { title: '南部二大銘村：ヴォーヌ・ロマネとニュイ・サン・ジョルジュ', duration: '15分' },
  ]},
  'beginner-m4': { title: 'コート・ド・ボーヌ探索', lessons: [
    { title: 'コート・ド・ボーヌ概要：白ワインの楽園', duration: '12分' },
    { title: '白ワイン三大名村：ムルソー、ピュリニー、シャサーニュ', duration: '18分' },
    { title: '赤ワイン二大巨頭：ポマールとヴォルネイ', duration: '12分' },
    { title: 'その他の重要村とテイスティングのヒント', duration: '10分' },
  ]},
  'beginner-m5': { title: 'シャブリの深掘り', lessons: [
    { title: '🗺️ シャブリ産地マップ概要', duration: '2分' },
    { title: 'シャブリの独自テロワール', duration: '15分' },
    { title: 'シャブリ四段階格付と七つのグラン・クリュ', duration: '20分' },
    { title: 'シャブリのテイスティングとフードペアリング', duration: '15分' },
  ]},
  'beginner-m6': { title: 'ボジョレー入門', lessons: [
    { title: 'ボジョレー：ブルゴーニュの反逆者', duration: '15分' },
    { title: '十の特級村（Cru）深掘り解説', duration: '20分' },
    { title: 'ボジョレーのテイスティングとフードペアリング', duration: '10分' },
  ]},
  'beginner-m7': { title: 'コート・シャロネーズとマコネ', lessons: [
    { title: 'コート・シャロネーズ：コート・ドールの延長', duration: '15分' },
    { title: 'マコネ：親しみやすい白ワインの楽園', duration: '12分' },
    { title: 'コスパ重視の購入ガイド', duration: '13分' },
  ]},
  'beginner-m8': { title: 'ヴィンテージと名門ドメーヌ', lessons: [
    { title: 'ヴィンテージの重要性', duration: '15分' },
    { title: 'ブルゴーニュ名門ドメーヌ', duration: '18分' },
    { title: 'テイスティングとコレクションのアドバイス', duration: '12分' },
  ]},
};

const L2_EN = {
  'intermediate-m1': { title: 'Côte de Nuits In-Depth Analysis', lessons: [
    { title: 'Côte de Nuits Overview', duration: '20 min' },
    { title: 'Gevrey-Chambertin Village', duration: '18 min' },
    { title: 'Chambolle-Musigny and Morey-Saint-Denis', duration: '18 min' },
    { title: 'Vosne-Romanée: The Grand Cru Paradise', duration: '20 min' },
    { title: 'Nuits-Saint-Georges and Other Villages', duration: '14 min' },
  ]},
  'intermediate-m2': { title: 'Côte de Beaune: White Wine Sanctuaries', lessons: [
    { title: 'Côte de Beaune Overview', duration: '18 min' },
    { title: 'Montrachet: The King of White Wine', duration: '20 min' },
    { title: 'Meursault: The Golden Land', duration: '17 min' },
    { title: 'Corton Hill: Red and White Dual Masters', duration: '16 min' },
    { title: 'Côte de Beaune Red Wine Regions', duration: '14 min' },
  ]},
  'intermediate-m3': { title: 'Terroir and Soil Science', lessons: [
    { title: 'The Concept of Terroir', duration: '18 min' },
    { title: 'Geological Structure and Soil Types', duration: '20 min' },
    { title: 'Slope Aspect, Altitude, and Microclimate', duration: '17 min' },
    { title: 'Climate Factors and Vintage Variation', duration: '15 min' },
  ]},
  'intermediate-m4': { title: 'Complete Grand Cru Guide', lessons: [
    { title: 'The Grand Cru System and Classification', duration: '15 min' },
    { title: 'Côte de Nuits Grand Crus (Part 1)', duration: '18 min' },
    { title: 'Côte de Nuits Grand Crus (Part 2)', duration: '17 min' },
    { title: 'Côte de Nuits Grand Crus (Part 3)', duration: '20 min' },
    { title: 'Côte de Beaune Grand Crus', duration: '16 min' },
    { title: 'Grand Cru Tasting and Purchasing', duration: '14 min' },
  ]},
  'intermediate-m5': { title: 'Premier Cru Selection Analysis', lessons: [
    { title: 'Understanding the Premier Cru System', duration: '20 min' },
    { title: 'Top Premier Crus of Côte de Nuits', duration: '22 min' },
    { title: 'Top Premier Crus of Côte de Beaune', duration: '20 min' },
    { title: 'Premier Cru Buying and Investment Strategy', duration: '18 min' },
  ]},
  'intermediate-m6': { title: 'Climate and Vintage Interpretation', lessons: [
    { title: 'The Importance of Vintages', duration: '18 min' },
    { title: 'Key Vintages 2000–2020 in Review', duration: '22 min' },
    { title: 'The Impact of Climate Change', duration: '20 min' },
  ]},
  'intermediate-m7': { title: 'Advanced Tasting Techniques', lessons: [
    { title: 'Professional Tasting Process', duration: '20 min' },
    { title: 'Aroma Identification and Classification', duration: '22 min' },
    { title: 'Structure Analysis and Balance', duration: '18 min' },
    { title: 'Assessing Aging Potential', duration: '15 min' },
  ]},
  'intermediate-m8': { title: 'Domaines and Winemakers', lessons: [
    { title: 'Top Burgundy Domaines', duration: '22 min' },
    { title: 'Winemaking Philosophy and Style', duration: '20 min' },
    { title: 'Rising Domaines and Future Trends', duration: '23 min' },
  ]},
};

const L2_JA = {
  'intermediate-m1': { title: 'コート・ド・ニュイ産地深掘り解析', lessons: [
    { title: 'コート・ド・ニュイ産地総覧', duration: '20分' },
    { title: 'ジュヴレ・シャンベルタン村', duration: '18分' },
    { title: 'シャンボル・ミュジニとモレ・サン・ドニ', duration: '18分' },
    { title: 'ヴォーヌ・ロマネ：グラン・クリュの楽園', duration: '20分' },
    { title: 'ニュイ・サン・ジョルジュとその他の村', duration: '14分' },
  ]},
  'intermediate-m2': { title: 'コート・ド・ボーヌ白ワインの聖地', lessons: [
    { title: 'コート・ド・ボーヌ産地総覧', duration: '18分' },
    { title: 'モンラッシェ：白ワインの王', duration: '20分' },
    { title: 'ムルソー：黄金の大地', duration: '17分' },
    { title: 'コルトン山：赤白の二冠', duration: '16分' },
    { title: 'コート・ド・ボーヌ赤ワイン産地', duration: '14分' },
  ]},
  'intermediate-m3': { title: 'テロワールと土壌科学', lessons: [
    { title: 'テロワールの概念', duration: '18分' },
    { title: '地質構造と土壌タイプ', duration: '20分' },
    { title: '斜面の向き、標高、微気候', duration: '17分' },
    { title: '気候要因とヴィンテージ差', duration: '15分' },
  ]},
  'intermediate-m4': { title: 'グラン・クリュ完全ガイド', lessons: [
    { title: 'グラン・クリュ制度と分類', duration: '15分' },
    { title: 'コート・ド・ニュイのグラン・クリュ（上）', duration: '18分' },
    { title: 'コート・ド・ニュイのグラン・クリュ（中）', duration: '17分' },
    { title: 'コート・ド・ニュイのグラン・クリュ（下）', duration: '20分' },
    { title: 'コート・ド・ボーヌのグラン・クリュ', duration: '16分' },
    { title: 'グラン・クリュのテイスティングと購入', duration: '14分' },
  ]},
  'intermediate-m5': { title: 'プルミエ・クリュ精選分析', lessons: [
    { title: 'プルミエ・クリュ制度の解析', duration: '20分' },
    { title: 'コート・ド・ニュイのトッププルミエ・クリュ', duration: '22分' },
    { title: 'コート・ド・ボーヌのトッププルミエ・クリュ', duration: '20分' },
    { title: 'プルミエ・クリュの購入と投資戦略', duration: '18分' },
  ]},
  'intermediate-m6': { title: '気候とヴィンテージの読み解き', lessons: [
    { title: 'ヴィンテージの重要性', duration: '18分' },
    { title: '近代重要ヴィンテージ振り返り（2000-2020）', duration: '22分' },
    { title: '気候変動の影響', duration: '20分' },
  ]},
  'intermediate-m7': { title: '上級テイスティング技術', lessons: [
    { title: 'プロのテイスティングプロセス', duration: '20分' },
    { title: 'アロマの識別と分類', duration: '22分' },
    { title: '構造分析とバランス', duration: '18分' },
    { title: '熟成ポテンシャルの判断', duration: '15分' },
  ]},
  'intermediate-m8': { title: 'ドメーヌと醸造家', lessons: [
    { title: 'ブルゴーニュ名門ドメーヌ', duration: '22分' },
    { title: '醸造哲学とスタイル', duration: '20分' },
    { title: '新興ドメーヌと未来のトレンド', duration: '23分' },
  ]},
};

const L3_EN = {
  'advanced-m1': { title: 'Advanced Terroir In-Depth Analysis', lessons: [
    { title: 'The Scientific Definition of Terroir', duration: '18 min' },
    { title: 'Influence of Slope Aspect and Altitude', duration: '16 min' },
    { title: 'The Secrets of Limestone and Marl', duration: '17 min' },
    { title: 'The Precision of Microclimate Control', duration: '15 min' },
    { title: 'Perfect Pairing of Terroir and Grape Variety', duration: '16 min' },
    { title: "Climate Change's Impact on Terroir", duration: '18 min' },
  ]},
  'advanced-m2': { title: 'Master Domaine Studies', lessons: [
    { title: 'Domaine de la Romanée-Conti (DRC)', duration: '20 min' },
    { title: 'Domaine Leroy', duration: '18 min' },
    { title: 'Domaine Armand Rousseau', duration: '16 min' },
    { title: 'Domaine Coche-Dury: King of White Wine', duration: '15 min' },
    { title: 'Domaine Comte Georges de Vogüé', duration: '14 min' },
    { title: 'Rising Names: Dujac, Méo-Camuzet', duration: '15 min' },
    { title: 'Comparative Winemaking Philosophies and Blind Recognition', duration: '12 min' },
  ]},
  'advanced-m3': { title: 'Professional Climate and Vintage Analysis', lessons: [
    { title: 'Scientific Methods for Vintage Assessment', duration: '20 min' },
    { title: 'Classic Great Vintages 1945–2000 Analyzed', duration: '18 min' },
    { title: '21st-Century Vintages Full Analysis 2000–2024', duration: '22 min' },
    { title: 'Predicting Drinking Windows', duration: '16 min' },
    { title: 'Vintage Buying and Investment Strategy', duration: '14 min' },
  ]},
  'advanced-m4': { title: 'Soil and Geological Science', lessons: [
    { title: 'Jurassic Geological Period Analysis', duration: '18 min' },
    { title: "Chablis' Kimmeridgian Miracle", duration: '17 min' },
    { title: 'Soil Differences: Côte de Nuits vs Côte de Beaune', duration: '18 min' },
    { title: 'Trace Elements and Flavor Expression', duration: '16 min' },
    { title: 'Soil Analysis and Parcel Selection', duration: '16 min' },
  ]},
  'advanced-m5': { title: 'Advanced Winemaking Craft', lessons: [
    { title: 'The Art and Science of Whole-Cluster Fermentation', duration: '18 min' },
    { title: 'The Science of Oak Barrel Aging', duration: '17 min' },
    { title: 'Lees Aging and Bâtonnage Techniques', duration: '15 min' },
    { title: 'Malolactic Fermentation and Acidity Management', duration: '16 min' },
    { title: 'Maceration and Extraction Techniques', duration: '15 min' },
    { title: 'Filtration, Fining, and Bottling', duration: '14 min' },
  ]},
  'advanced-m6': { title: 'Grand Cru Parcel Comparison', lessons: [
    { title: 'Clos de Vougeot: 50 Hectares of Diversity', duration: '18 min' },
    { title: 'The Chambertin Family: Eight Siblings', duration: '20 min' },
    { title: 'Corton: A Grand Cru for Red and White', duration: '17 min' },
    { title: 'The Montrachet Family: Five Siblings', duration: '18 min' },
    { title: 'Musigny vs Bonnes-Mares', duration: '16 min' },
    { title: 'Grand Cru Investment Value Comparison', duration: '16 min' },
  ]},
  'advanced-m7': { title: 'Market and Investment Analysis', lessons: [
    { title: 'Overview of the Burgundy Wine Market', duration: '18 min' },
    { title: 'Auction Market Price Analysis', duration: '16 min' },
    { title: 'Portfolio Strategy', duration: '15 min' },
    { title: 'En Primeur Market and Allocation Systems', duration: '16 min' },
    { title: 'Risk Management and Exit Strategy', duration: '15 min' },
  ]},
  'advanced-m8': { title: 'Professional Collecting and Storage', lessons: [
    { title: 'Principles of Professional Cellar Design', duration: '18 min' },
    { title: 'Storage Conditions and Bottle Condition Management', duration: '18 min' },
    { title: 'Provenance Authentication and Fake Wine Detection', duration: '16 min' },
    { title: 'Collection Insurance and Risk Management', duration: '18 min' },
  ]},
  'advanced-m9': { title: 'Professional Blind Tasting Training', lessons: [
    { title: 'Systematic Blind Tasting Methodology', duration: '18 min' },
    { title: 'Village Character Identification', duration: '17 min' },
    { title: 'Vintage Identification Techniques', duration: '16 min' },
    { title: 'Producer Style Recognition', duration: '17 min' },
    { title: 'Assessing the Stage of Aging', duration: '16 min' },
    { title: 'Writing Professional Tasting Notes', duration: '16 min' },
  ]},
  'advanced-m10': { title: 'The Art of Food and Wine Pairing', lessons: [
    { title: 'The Science of Food and Wine Pairing', duration: '18 min' },
    { title: 'Classic French Pairings with Burgundy', duration: '19 min' },
    { title: 'Creative Asian Cuisine Pairings', duration: '19 min' },
    { title: 'Michelin Restaurant Case Studies', duration: '19 min' },
  ]},
  'advanced-m11': { title: 'Biodynamic Viticulture Research', lessons: [
    { title: 'Philosophy of Biodynamic Viticulture', duration: '17 min' },
    { title: 'Biodynamic Preparations and Practices', duration: '17 min' },
    { title: 'Lunar Cycles and Cosmic Rhythms', duration: '17 min' },
    { title: 'DRC and Leroy: In-Depth Case Studies', duration: '17 min' },
    { title: 'Scientific Debate and Empirical Research', duration: '17 min' },
  ]},
  'advanced-m12': { title: 'Climate Change and the Future', lessons: [
    { title: 'Climate Change Data Analysis for Burgundy', duration: '16 min' },
    { title: 'Earlier Harvests and the Ripeness Challenge', duration: '16 min' },
    { title: 'Domaine Adaptation Strategies and Innovation', duration: '16 min' },
    { title: 'Reassessing Parcel Values and New Opportunities', duration: '16 min' },
    { title: 'Predictions for Burgundy in 2050', duration: '16 min' },
  ]},
  'advanced-m13': { title: 'Auction and Trading Practice', lessons: [
    { title: 'Introduction to International Auction Houses', duration: '18 min' },
    { title: 'The Auction Process and Rules', duration: '17 min' },
    { title: 'Price Valuation and Market Analysis', duration: '18 min' },
    { title: 'Bidding Strategy and Risk Management', duration: '17 min' },
  ]},
  'advanced-m14': { title: 'Professional Tasting Report Writing', lessons: [
    { title: 'Professional Tasting Terminology', duration: '19 min' },
    { title: 'Comparing Scoring Systems', duration: '19 min' },
    { title: 'Structure of Tasting Notes', duration: '19 min' },
    { title: 'Practical Workshop', duration: '18 min' },
  ]},
  'advanced-m15': { title: 'Comprehensive Case Studies', lessons: [
    { title: 'Case Study 1: Planning a Domaine Visit', duration: '18 min' },
    { title: 'Case Study 2: Building a Wine Collection Portfolio', duration: '18 min' },
    { title: 'Case Study 3: Designing a Restaurant Wine List', duration: '18 min' },
    { title: 'Level 3 Comprehensive Review', duration: '18 min' },
    { title: 'Certification Exam Preparation', duration: '18 min' },
  ]},
};

const L3_JA = {
  'advanced-m1': { title: 'トップテロワール深掘り解析', lessons: [
    { title: 'テロワールの科学的定義', duration: '18分' },
    { title: '斜面の向きと標高の影響', duration: '16分' },
    { title: '石灰岩と泥灰岩の秘密', duration: '17分' },
    { title: '微気候の精密コントロール', duration: '15分' },
    { title: 'テロワールとブドウ品種の完璧な組み合わせ', duration: '16分' },
    { title: '気候変動がテロワールに与える影響', duration: '18分' },
  ]},
  'advanced-m2': { title: '名門ドメーヌ研究', lessons: [
    { title: 'ドメーヌ・ド・ラ・ロマネ・コンティ（DRC）', duration: '20分' },
    { title: 'ドメーヌ・ルロワ', duration: '18分' },
    { title: 'ドメーヌ・アルマン・ルソー', duration: '16分' },
    { title: 'ドメーヌ・コシュ・デュリ（白ワインの王）', duration: '15分' },
    { title: 'ドメーヌ・コント・ジョルジュ・ド・ヴォギュエ', duration: '14分' },
    { title: '新世代の名家：Dujac、Méo-Camuzet', duration: '15分' },
    { title: '醸造哲学の比較とブラインド識別', duration: '12分' },
  ]},
  'advanced-m3': { title: '気候とヴィンテージの専門分析', lessons: [
    { title: 'ヴィンテージ評価の科学的方法', duration: '20分' },
    { title: '古典的偉大ヴィンテージ解析（1945-2000）', duration: '18分' },
    { title: '21世紀ヴィンテージ完全解析（2000-2024）', duration: '22分' },
    { title: '飲み頃ウィンドウの予測', duration: '16分' },
    { title: 'ヴィンテージ購入と投資戦略', duration: '14分' },
  ]},
  'advanced-m4': { title: '土壌地質科学', lessons: [
    { title: 'ジュラ紀地質年代の解析', duration: '18分' },
    { title: 'シャブリのキメリジャンの奇跡', duration: '17分' },
    { title: 'コート・ド・ニュイとコート・ド・ボーヌの土壌差', duration: '18分' },
    { title: '微量元素と風味表現', duration: '16分' },
    { title: '土壌分析と区画選択', duration: '16分' },
  ]},
  'advanced-m5': { title: '醸造技術の上級編', lessons: [
    { title: '全房発酵の芸術と科学', duration: '18分' },
    { title: '樽熟成の学問', duration: '17分' },
    { title: '澱熟成とバトナージュ技術', duration: '15分' },
    { title: 'マロラクティック発酵と酸度管理', duration: '16分' },
    { title: 'マセレーションと抽出技術', duration: '15分' },
    { title: 'フィルタリング、清澄化、瓶詰め', duration: '14分' },
  ]},
  'advanced-m6': { title: 'グラン・クリュ区画比較', lessons: [
    { title: 'クロ・ド・ヴージョ：50ヘクタールの多様性', duration: '18分' },
    { title: 'シャンベルタンファミリー：八兄弟', duration: '20分' },
    { title: 'コルトン：赤白のグラン・クリュ', duration: '17分' },
    { title: 'モンラッシェファミリー：五兄弟', duration: '18分' },
    { title: 'ミュジニー vs ボンヌ・マール', duration: '16分' },
    { title: 'グラン・クリュ投資価値比較', duration: '16分' },
  ]},
  'advanced-m7': { title: '市場投資分析', lessons: [
    { title: 'ブルゴーニュワイン市場概況', duration: '18分' },
    { title: 'オークション市場価格分析', duration: '16分' },
    { title: '投資ポートフォリオ戦略', duration: '15分' },
    { title: 'アン・プリムール市場と配分システム', duration: '16分' },
    { title: 'リスク管理と出口戦略', duration: '15分' },
  ]},
  'advanced-m8': { title: 'コレクションとストレージの専門知識', lessons: [
    { title: 'プロのセラー設計原則', duration: '18分' },
    { title: '保管条件とボトルコンディション管理', duration: '18分' },
    { title: '来歴鑑定と偽物ワイン検出', duration: '16分' },
    { title: 'コレクション保険とリスク管理', duration: '18分' },
  ]},
  'advanced-m9': { title: '専門ブラインドテイスティング訓練', lessons: [
    { title: '体系的なブラインドテイスティング方法論', duration: '18分' },
    { title: '村の特徴識別', duration: '17分' },
    { title: 'ヴィンテージ識別技術', duration: '16分' },
    { title: '生産者スタイル認識', duration: '17分' },
    { title: '熟成段階の判断', duration: '16分' },
    { title: '専門テイスティングノート執筆', duration: '16分' },
  ]},
  'advanced-m10': { title: 'フードペアリングの芸術', lessons: [
    { title: 'フードペアリングの科学的原理', duration: '18分' },
    { title: 'ブルゴーニュとフランス料理の定番ペアリング', duration: '19分' },
    { title: 'アジア料理の創造的ペアリング', duration: '19分' },
    { title: 'ミシュランレストランケーススタディ', duration: '19分' },
  ]},
  'advanced-m11': { title: 'ビオディナミ農法研究', lessons: [
    { title: 'ビオディナミ農法の哲学的基礎', duration: '17分' },
    { title: 'ビオディナミ製剤と実践', duration: '17分' },
    { title: '月相と宇宙のリズム', duration: '17分' },
    { title: 'DRCとルロワの深掘りケーススタディ', duration: '17分' },
    { title: '科学的論争と実証研究', duration: '17分' },
  ]},
  'advanced-m12': { title: '気候変動と未来', lessons: [
    { title: 'ブルゴーニュの気候変動データ分析', duration: '16分' },
    { title: '早まる収穫と成熟度の課題', duration: '16分' },
    { title: 'ドメーヌの適応戦略とイノベーション', duration: '16分' },
    { title: '区画価値の再評価と新たな機会', duration: '16分' },
    { title: '2050年のブルゴーニュ予測', duration: '16分' },
  ]},
  'advanced-m13': { title: 'オークションと取引実務', lessons: [
    { title: '国際オークションハウス入門', duration: '18分' },
    { title: 'オークションプロセスとルール', duration: '17分' },
    { title: '価格評価と市場分析', duration: '18分' },
    { title: '入札戦略とリスク管理', duration: '17分' },
  ]},
  'advanced-m14': { title: '専門テイスティングレポート執筆', lessons: [
    { title: '専門テイスティング用語', duration: '19分' },
    { title: 'スコアリングシステムの比較', duration: '19分' },
    { title: 'テイスティングノートの構造', duration: '19分' },
    { title: '実践演習', duration: '18分' },
  ]},
  'advanced-m15': { title: '総合ケーススタディ', lessons: [
    { title: 'ケース1：ドメーヌ訪問計画', duration: '18分' },
    { title: 'ケース2：コレクションポートフォリオ構築', duration: '18分' },
    { title: 'ケース3：レストランワインリスト設計', duration: '18分' },
    { title: 'Level 3 総復習', duration: '18分' },
    { title: '認定試験準備', duration: '18分' },
  ]},
};

// ════════════════════════════════════════════════════════════════════════════
// GENERATE FILES
// ════════════════════════════════════════════════════════════════════════════

let count = 0;

function generate(levelDir, moduleId, enTrans, jaTrans) {
  const srcFile = path.join(PUBLIC, levelDir, `${moduleId}.json`);
  if (!fs.existsSync(srcFile)) { console.warn(`SKIP: ${srcFile}`); return; }

  const zhDir = path.join(DEST_BASE, 'zh-TW', 'lessons', 'bourgogne');
  const enDir = path.join(DEST_BASE, 'en', 'lessons', 'bourgogne');
  const jaDir = path.join(DEST_BASE, 'ja', 'lessons', 'bourgogne');
  ensureDir(zhDir); ensureDir(enDir); ensureDir(jaDir);

  const zhOverlay = extractZhTW(srcFile);
  const enOverlay = buildOverlay(srcFile, enTrans);
  const jaOverlay = buildOverlayJA(srcFile, jaTrans);

  fs.writeFileSync(path.join(zhDir, `${moduleId}.json`), JSON.stringify(zhOverlay, null, 2), 'utf-8');
  fs.writeFileSync(path.join(enDir, `${moduleId}.json`), JSON.stringify(enOverlay, null, 2), 'utf-8');
  fs.writeFileSync(path.join(jaDir, `${moduleId}.json`), JSON.stringify(jaOverlay, null, 2), 'utf-8');

  count += 3;
  console.log(`✅ ${moduleId}: zh-TW(${Object.keys(zhOverlay).length}) EN(${Object.keys(enOverlay).length}) JA(${Object.keys(jaOverlay).length})`);
}

// zh-TW only for beginner (EN/JA already exist)
function generateZhOnly(levelDir, moduleId) {
  const srcFile = path.join(PUBLIC, levelDir, `${moduleId}.json`);
  if (!fs.existsSync(srcFile)) { console.warn(`SKIP: ${srcFile}`); return; }
  const zhDir = path.join(DEST_BASE, 'zh-TW', 'lessons', 'bourgogne');
  ensureDir(zhDir);
  const zhOverlay = extractZhTW(srcFile);
  fs.writeFileSync(path.join(zhDir, `${moduleId}.json`), JSON.stringify(zhOverlay, null, 2), 'utf-8');
  count++;
  console.log(`✅ ${moduleId} zh-TW(${Object.keys(zhOverlay).length})`);
}

// ─ L1 (beginner): zh-TW only ─────────────────────────────────────────────
console.log('\n=== L1 beginner: zh-TW ===');
for (let i = 1; i <= 8; i++) generateZhOnly('level1', `beginner-m${i}`);

// ─ L2 (intermediate): all 3 langs ────────────────────────────────────────
console.log('\n=== L2 intermediate: EN + JA + zh-TW ===');
for (let i = 1; i <= 8; i++) {
  const id = `intermediate-m${i}`;
  generate('level2', id, L2_EN[id], L2_JA[id]);
}

// ─ L3 (advanced): all 3 langs ────────────────────────────────────────────
console.log('\n=== L3 advanced: EN + JA + zh-TW ===');
for (let i = 1; i <= 15; i++) {
  const id = `advanced-m${i}`;
  generate('level3', id, L3_EN[id], L3_JA[id]);
}

console.log(`\n✅ Done: ${count} files generated`);
