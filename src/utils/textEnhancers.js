// Centralized text enhancement: annotate foreign proper nouns with original forms
// - Grape varieties: zh -> en (with normalize of aliases)
// - AOC names: zh -> en (subset for Bordeaux)
// - Legal grades: zh -> fr/en labels
// - Châteaux names: zh -> Fr original labels

function safeReplaceAll(text, zh, en) {
  // Avoid duplicate if already followed by parentheses
  const pattern = new RegExp(`${escapeReg(zh)}(?!\\s*[（(])`, 'g')
  return text.replace(pattern, `${zh}（${en}）`)
}

function escapeReg(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// 1) Normalize aliases first
function normalize(text) {
  if (!text || typeof text !== 'string') return text
  // Common alias mappings (zh -> zh normalized)
  return text
    .replace(/長相思/g, '白蘇維濃')
    .replace(/白蘇維翁/g, '白蘇維濃')
    .replace(/赤霞珠/g, '卡本內蘇維濃')
    .replace(/品麗珠/g, '卡本內弗朗')
    // Saint-Émilion 多種中文寫法，統一為「聖愛美濃」
    .replace(/聖埃米利永/g, '聖愛美濃')
    .replace(/聖艾美濃/g, '聖愛美濃')
    .replace(/聖艾美隆/g, '聖愛美濃')
    .replace(/聖愛美隆/g, '聖愛美濃')
    // Hyphen 與連寫歸一
  .replace(/佩薩克[‑–-]?雷奧良/g, '佩薩克‑雷奧良')
  .replace(/拉朗德[‑–-]?波美侯/g, '拉朗德‑波美侯')
}

function annotateVarieties(text) {
  if (!text || typeof text !== 'string') return text
  const mappings = {
    '白蘇維濃': 'Sauvignon Blanc',
    '賽美蓉': 'Sémillon',
    '密斯卡岱': 'Muscadelle',
    '梅洛': 'Merlot',
    '卡本內蘇維濃': 'Cabernet Sauvignon',
    '卡本內弗朗': 'Cabernet Franc',
    '小維多': 'Petit Verdot',
    '馬爾貝克': 'Malbec',
    '佳美娜': 'Carmenère'
  }
  let out = text
  for (const [zh, en] of Object.entries(mappings)) out = safeReplaceAll(out, zh, en)
  return out
}

function annotateAOC(text) {
  if (!text || typeof text !== 'string') return text
  const mappings = {
    '波爾多 AOC': 'Bordeaux AOC',
    '波爾多上級 AOC': 'Bordeaux Supérieur AOC',
    '梅多克 AOC': 'Médoc AOC',
    '上梅多克 AOC': 'Haut‑Médoc AOC',
    '里斯特拉克‑梅多克 AOC': 'Listrac‑Médoc AOC',
    '里斯特拉克-梅多克 AOC': 'Listrac‑Médoc AOC',
    '穆利‑梅多克 AOC': 'Moulis‑en‑Médoc AOC',
    '穆利-梅多克 AOC': 'Moulis‑en‑Médoc AOC',
    '瑪歌 AOC': 'Margaux AOC',
    '波雅克 AOC': 'Pauillac AOC',
    '聖朱利安 AOC': 'Saint‑Julien AOC',
    '聖埃斯泰夫 AOC': 'Saint‑Estèphe AOC',
  '聖埃米利永 AOC': 'Saint‑Émilion AOC',
  '聖愛美濃 AOC': 'Saint‑Émilion AOC',
  '聖艾美濃 AOC': 'Saint‑Émilion AOC',
  '聖艾美隆 AOC': 'Saint‑Émilion AOC',
  '聖埃米利永特級園 AOC': 'Saint‑Émilion Grand Cru AOC',
  '聖愛美濃特級園 AOC': 'Saint‑Émilion Grand Cru AOC',
  '聖埃美隆特級園 AOC': 'Saint‑Émilion Grand Cru AOC',
    '波美侯 AOC': 'Pomerol AOC',
    '拉朗德‑波美侯 AOC': 'Lalande‑de‑Pomerol AOC',
    '拉朗德-波美侯 AOC': 'Lalande‑de‑Pomerol AOC',
    '格拉夫 AOC': 'Graves AOC',
    '佩薩克‑雷奧良 AOC': 'Pessac‑Léognan AOC',
    '佩薩克-雷奧良 AOC': 'Pessac‑Léognan AOC',
    '蘇玳 AOC': 'Sauternes AOC',
    '巴薩克 AOC': 'Barsac AOC',
    '兩海之間 AOC': 'Entre‑Deux‑Mers AOC',
    '布爾丘 AOC': 'Côtes de Bourg AOC',
    '布拉伊‑波爾多丘 AOC': 'Blaye Côtes de Bordeaux AOC',
    '布拉伊-波爾多丘 AOC': 'Blaye Côtes de Bordeaux AOC',
    '卡斯蒂永‑波爾多丘 AOC': 'Castillon Côtes de Bordeaux AOC',
    '卡斯蒂永-波爾多丘 AOC': 'Castillon Côtes de Bordeaux AOC',
    '弗朗克‑波爾多丘 AOC': 'Francs Côtes de Bordeaux AOC',
    '弗朗克-波爾多丘 AOC': 'Francs Côtes de Bordeaux AOC'
  }
  let out = text.replace(/波美洛/g, '波美侯')
  for (const [zh, en] of Object.entries(mappings)) out = safeReplaceAll(out, zh, en)
  return out
}

// 2a) Annotate generic region names (no AOC suffix)
function annotateRegions(text) {
  if (!text || typeof text !== 'string') return text
  const mappings = {
    '波爾多': 'Bordeaux',
    '梅多克': 'Médoc',
    '上梅多克': 'Haut‑Médoc',
    '里斯特拉克‑梅多克': 'Listrac‑Médoc',
    '穆利‑梅多克': 'Moulis‑en‑Médoc',
    '瑪歌': 'Margaux',
    '波雅克': 'Pauillac',
    '聖朱利安': 'Saint‑Julien',
    '聖埃斯泰夫': 'Saint‑Estèphe',
  '聖埃米利永': 'Saint‑Émilion',
  '聖愛美濃': 'Saint‑Émilion',
    '波美侯': 'Pomerol',
    '拉朗德‑波美侯': 'Lalande‑de‑Pomerol',
    '格拉夫': 'Graves',
    '佩薩克‑雷奧良': 'Pessac‑Léognan',
    '蘇玳': 'Sauternes',
    '巴薩克': 'Barsac',
    '兩海之間': 'Entre‑Deux‑Mers',
    '布爾丘': 'Côtes de Bourg',
    '布拉伊': 'Blaye',
    '卡斯蒂永': 'Castillon',
    '弗朗克': 'Francs'
  }
  let out = text
  for (const [zh, en] of Object.entries(mappings)) out = safeReplaceAll(out, zh, en)
  return out
}

function annotateGrades(text) {
  if (!text || typeof text !== 'string') return text
  const mappings = {
    '一級酒莊': 'Premier Grand Cru Classé',
    '二級酒莊': 'Deuxième Grand Cru Classé',
    '三級酒莊': 'Troisième Grand Cru Classé',
    '四級酒莊': 'Quatrième Grand Cru Classé',
    '五級酒莊': 'Cinquième Grand Cru Classé',
    '特級A級': 'Premier Grand Cru Classé A',
    '特級B級': 'Premier Grand Cru Classé B',
    '特等酒莊': 'Grand Cru Classé',
    '中級酒莊': 'Cru Bourgeois',
    '優異中級酒莊': 'Cru Bourgeois Supérieur',
    '特優中級酒莊': 'Cru Bourgeois Exceptionnel'
  }
  let out = text
  for (const [zh, en] of Object.entries(mappings)) out = safeReplaceAll(out, zh, en)
  return out
}

function annotateChateaux(text) {
  if (!text || typeof text !== 'string') return text
  const mappings = {
    '拉菲堡': 'Château Lafite Rothschild',
    '拉圖堡': 'Château Latour',
    '瑪歌堡': 'Château Margaux',
    '木桐堡': 'Château Mouton Rothschild',
    '侯伯王堡': 'Château Haut‑Brion',
    '白馬堡': 'Château Cheval Blanc',
    '歐頌堡': 'Château Ausone',
    '金鐘堡': 'Château Angélus',
    '柏菲堡': 'Château Pavie',
    '費加洛堡': 'Château Figeac',
    '里鵬': 'Le Pin',
    '柏翠': 'Pétrus',
    '杜霍堡': 'Château Ducru‑Beaucaillou',
    '雄獅堡': 'Château Léoville Las Cases',
    '林奇巴古堡': 'Château Lynch‑Bages',
    '巴塔耶堡': 'Château Batailley'
  }
  let out = text
  for (const [zh, en] of Object.entries(mappings)) out = safeReplaceAll(out, zh, en)
  return out
}

export function enhanceText(text) {
  if (!text || typeof text !== 'string') return text
  let out = normalize(text)
  out = annotateVarieties(out)
  out = annotateAOC(out)
  out = annotateRegions(out)
  out = annotateGrades(out)
  out = annotateChateaux(out)
  return out
}

export default { enhanceText }


