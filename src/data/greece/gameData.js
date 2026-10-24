/**
 * 希臘小遊戲題庫（產區速答／品種配對）
 * 事實一律取自課程 Level 1–3 已查證內容（Wines of Greece 官方 PDO 頁、WineWithSeth、CMS 2018）。
 * 數字細節仍可能隨官方規格更新；不放有出入的數字（如 Reserve 月數）。
 */

import { gt } from '../../locales/greeceUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 六大地理區（教學分法；與課程、地圖一致）──────────────────────
export const REGION_GROUPS = [
  { key: 'macedonia',       label: '馬其頓' },
  { key: 'epirus_thessaly', label: '伊庇魯斯與色薩利' },
  { key: 'peloponnese',     label: '伯羅奔尼撒' },
  { key: 'ionian',          label: '愛奧尼亞群島' },
  { key: 'aegean',          label: '愛琴海島嶼' },
  { key: 'crete',           label: '克里特' }
]
const GROUP_LABEL = Object.fromEntries(REGION_GROUPS.map(g => [g.key, g.label]))

// ── 33 個 PDO（easy: 較常見，納入簡單模式）──────────────────────
// hint 只放特徵，不直接說出地理區
export const PDO_ITEMS = [
  { name: 'Naoussa',                   group: 'macedonia',       easy: true,  hint: '100% Xinomavro 的紅酒，石灰質黏土與泥灰岩土壤' },
  { name: 'Amyndeo（Amyntaio）',        group: 'macedonia',       easy: true,  hint: '僅 Xinomavro，較涼的高海拔，並有天然氣泡粉紅' },
  { name: 'Goumenissa',                group: 'macedonia',       easy: false, hint: 'Xinomavro 混 Negoska（至少 20%），葡萄園須在海拔 150 公尺以上' },
  { name: 'Slopes of Meliton',         group: 'macedonia',       easy: false, hint: '靠海的 Halkidiki 半島，白酒以 Assyrtiko、Athiri、Roditis 組成' },
  { name: 'Rapsani',                   group: 'epirus_thessaly', easy: true,  hint: 'Xinomavro、Stavroto、Krassato 混釀，片岩土壤' },
  { name: 'Messenikola',               group: 'epirus_thessaly', easy: false, hint: '至少 70% Mavro Messenikola，其餘 Carignan 與 Syrah' },
  { name: 'Anchialos',                 group: 'epirus_thessaly', easy: false, hint: '乾白，至少 80% Roditis，其餘 Savatiano' },
  { name: 'Zitsa',                     group: 'epirus_thessaly', easy: true,  hint: '該區唯一的 PDO，Debina 白酒，可為靜態或氣泡' },
  { name: 'Nemea',                     group: 'peloponnese',     easy: true,  hint: '100% Agiorgitiko，海拔約 200 至 850 公尺' },
  { name: 'Mantineia',                 group: 'peloponnese',     easy: true,  hint: '至少 85% Moschofilero，約 650–800 公尺的高原，希臘最冷涼產區之一' },
  { name: 'Patras',                    group: 'peloponnese',     easy: false, hint: '乾白，100% Roditis，海岸地中海氣候與鈣質土壤' },
  { name: 'Muscat of Patras',          group: 'peloponnese',     easy: false, hint: '100% Muscat Blanc 的甜酒' },
  { name: 'Muscat of Rio Patras',      group: 'peloponnese',     easy: false, hint: '100% Muscat Blanc 的甜酒，位於 Patras 東側的子區 Rio' },
  { name: 'Mavrodaphne of Patras',     group: 'peloponnese',     easy: true,  hint: '甜型強化紅酒，Mavrodaphne 至少 51%，其餘 Black Corinthian' },
  { name: 'Monemvasia-Malvasia',       group: 'peloponnese',     easy: false, hint: '與中世紀 Malvasia 貿易的港口相連，甜白酒' },
  { name: 'Mavrodaphne of Cephalonia', group: 'ionian',          easy: false, hint: 'Mavrodaphne 品種的紅酒' },
  { name: 'Robola of Cephalonia',      group: 'ionian',          easy: true,  hint: '乾白，採用該島特有的 Robola，柑橘風味為主' },
  { name: 'Muscat of Cephalonia',      group: 'ionian',          easy: false, hint: '甜 Muscat 酒款' },
  { name: 'Samos',                     group: 'aegean',          easy: true,  hint: 'Muscat Blanc à Petits Grains 占種植 98%，石砌梯田，Vin Doux 與 Nectar' },
  { name: 'Paros',                     group: 'aegean',          easy: false, hint: '乾白為 100% Monemvasia，乾紅含至少 35% Mandilaria' },
  { name: 'Malvasia Paros',            group: 'aegean',          easy: false, hint: '與 Paros 範圍相同的 Malvasia PDO' },
  { name: 'Santorini',                 group: 'aegean',          easy: true,  hint: '火山土壤、Assyrtiko、Nykteri 與 Vinsanto' },
  { name: 'Rhodes',                    group: 'aegean',          easy: false, hint: '紅酒 100% Mandilaria、白酒 100% Athiri' },
  { name: 'Muscat of Rhodes',          group: 'aegean',          easy: false, hint: '島上的 Muscat 甜酒 PDO' },
  { name: 'Lemnos',                    group: 'aegean',          easy: true,  hint: '白酒 100% Muscat of Alexandria，紅酒用 Limnio' },
  { name: 'Muscat of Lemnos',          group: 'aegean',          easy: false, hint: '獨立的 Muscat of Alexandria 甜酒 PDO' },
  { name: 'Peza',                      group: 'crete',           easy: true,  hint: '紅白皆有；Kotsifali、Mandilari 與 Vilana' },
  { name: 'Archanes',                  group: 'crete',           easy: false, hint: '紅酒，Kotsifali 與 Mandilari' },
  { name: 'Dafnes（Daphnes）',          group: 'crete',           easy: false, hint: '紅酒，Liatiko' },
  { name: 'Sitia',                     group: 'crete',           easy: true,  hint: '紅酒以 Liatiko、白酒以 Vilana 為主，位於東端' },
  { name: 'Malvasia Sitia',            group: 'crete',           easy: false, hint: '與 Sitia 範圍相同的 Malvasia PDO' },
  { name: 'Candia',                    group: 'crete',           easy: false, hint: 'Heraklion 一帶，Candia 是它的古名' },
  { name: 'Malvasia Candia',           group: 'crete',           easy: false, hint: '與 Candia 範圍相同的 Malvasia PDO' }
]

export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? PDO_ITEMS.filter(p => p.easy) : PDO_ITEMS
  return shuffle(pool).map(p => {
    const correctGroup = REGION_GROUPS.find(g => g.key === p.group)
    // 簡單：4 選項；困難：6 選項（六大地理區全列）
    const others = shuffle(REGION_GROUPS.filter(g => g.key !== p.group))
    const groups = diff === 'easy' ? shuffle([correctGroup, ...others.slice(0, 3)]) : REGION_GROUPS
    return {
      tag: gt('PDO → 地理區'),
      stem: p.name,
      hint: gt(p.hint),
      options: groups.map(g => gt(g.label)),
      correct: groups.findIndex(g => g.key === p.group),
      explain: gt('{name} 位於「{g}」。', { name: p.name, g: gt(GROUP_LABEL[p.group]) })
    }
  })
}

// ── 品種 ──────────────────────────────────────────────────────
export const GRAPES = [
  { name: 'Assyrtiko',    color: '白', desc: '高酸、礦物感與鹹感，Santorini 火山土壤的代表品種' },
  { name: 'Moschofilero', color: '白', desc: '玫瑰與茉莉花香、低酒精、酸度鮮明，常見於高海拔 Mantineia' },
  { name: 'Malagousia',   color: '白', desc: '桃、芒果與柑橘香，酒體比 Moschofilero 更豐腴' },
  { name: 'Savatiano',    color: '白', desc: '希臘種植最廣的白品種，耐旱但天然酸度低，Retsina 的主要基酒' },
  { name: 'Roditis',      color: '白', desc: 'Patras 乾白 PDO 100% 使用，也是 Anchialos 的主要品種' },
  { name: 'Vidiano',      color: '白', desc: '克里特白品種，杏、青檸、梨，帶洋甘菊與茉莉香，礦物感鮮明' },
  { name: 'Vilana',       color: '白', desc: '克里特白品種，中等酒體，熱帶水果、百里香與柑橘' },
  { name: 'Robola',       color: '白', desc: 'Cephalonia 島特有品種，柑橘風味為主的乾白' },
  { name: 'Debina',       color: '白', desc: 'Zitsa 的白品種，可釀靜態或氣泡，來自涼爽高海拔的內陸山區' },
  { name: 'Muscat of Alexandria', color: '白', desc: 'Lemnos 白酒 100% 使用，風格乾型至半甜' },
  { name: 'Muscat Blanc à Petits Grains', color: '白', desc: 'Samos 當地稱 Moschato Aspro，占種植的 98%' },
  { name: 'Athiri',       color: '白', desc: 'Rhodes 白酒 100% 使用，也是 Santorini 乾白的搭配品種之一' },
  { name: 'Monemvasia',   color: '白', desc: 'Paros 乾白 100% 使用，也是 Monemvasia-Malvasia 甜白的品種' },
  { name: 'Xinomavro',    color: '紅', desc: '色淡、高酸高單寧、可陳年，陳年後轉磚紅；北部馬其頓的旗艦紅葡萄' },
  { name: 'Agiorgitiko',  color: '紅', desc: '柔和多果味，可釀粉紅、新酒到橡木 Reserve；Nemea 的 100% 品種' },
  { name: 'Mavrodaphne',  color: '紅', desc: '甜型強化紅酒的品種，Patras 至少 51%，其餘為 Black Corinthian' },
  { name: 'Limnio',       color: '紅', desc: 'Lemnos 紅酒的品種，也是 Slopes of Meliton 紅酒的本體' },
  { name: 'Kotsifali',    color: '紅', desc: '克里特紅品種，肉感，李子與酸櫻桃，常作調配' },
  { name: 'Mandilaria',   color: '紅', desc: '酒體飽滿、酸度高，帶泥土與無花果；Rhodes 紅酒 100% 使用' },
  { name: 'Liatiko',      color: '紅', desc: '可乾可甜，帶皮革與無花果；Sitia 紅酒至少 80% 使用' }
]

// PDO → 核心品種（皆為課程已查證且不含歧義者）
const PDO_GRAPE = [
  { pdo: 'Nemea', grape: 'Agiorgitiko' },
  { pdo: 'Naoussa', grape: 'Xinomavro' },
  { pdo: 'Mantineia', grape: 'Moschofilero' },
  { pdo: 'Zitsa', grape: 'Debina' },
  { pdo: 'Santorini（乾白）', grape: 'Assyrtiko' },
  { pdo: 'Samos', grape: 'Muscat Blanc à Petits Grains' },
  { pdo: 'Mavrodaphne of Patras', grape: 'Mavrodaphne' },
  { pdo: 'Patras', grape: 'Roditis' },
  { pdo: 'Robola of Cephalonia', grape: 'Robola' },
  { pdo: 'Rhodes（白酒）', grape: 'Athiri' }
]
const GRAPE_BY_NAME = Object.fromEntries(GRAPES.map(g => [g.name, g]))

function pick4(correct, poolItems, key) {
  const wrong = shuffle(poolItems.filter(x => x !== correct)).slice(0, 3)
  const opts = shuffle([correct, ...wrong])
  return { options: opts.map(o => gt(o[key])), correct: opts.indexOf(correct) }
}

function g2d(g) {
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'desc')
  return { tag: gt('品種 → 特徵'), stem: gt('{name}（{color}）最符合哪一項描述？', { name: g.name, color: gt(g.color) }), options, correct,
    explain: gt('{name}：{desc}。', { name: g.name, desc: gt(g.desc) }) }
}
function d2g(g) {
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'name')
  return { tag: gt('特徵 → 品種'), stem: gt(g.desc), hint: gt('這是哪個{color}品種？', { color: gt(g.color) }), options, correct,
    explain: gt('答案是 {name}。', { name: g.name }) }
}
function p2g(item) {
  const g = GRAPE_BY_NAME[item.grape]
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'name')
  return { tag: gt('PDO → 核心品種'), stem: gt('{pdo} 的核心品種是？', { pdo: gt(item.pdo) }), options, correct,
    explain: gt('{pdo} 以 {name} 為核心：{desc}。', { pdo: gt(item.pdo), name: g.name, desc: gt(g.desc) }) }
}

export function buildGrapeQuestions(diff) {
  if (diff === 'easy') return shuffle(GRAPES).map(g2d)
  return shuffle([
    ...GRAPES.map(g2d),
    ...GRAPES.map(d2g),
    ...PDO_GRAPE.map(p2g)
  ])
}

// ── 分級辨識（制度與術語）────────────────────────────────────────
// 每題的選項是人工挑選的（正解＋不會產生歧義的干擾項）。
const TERM_ITEMS = [
  { stem: '葡萄須 100% 來自該區的歐盟層級保護名稱', ans: 'PDO', wrong: ['PGI', 'Retsina', 'Verdea'],
    explain: 'PDO 要求葡萄 100% 來自該區；目前登記 33 個。' },
  { stem: '至少 85% 的葡萄來自該區，其餘可來自希臘其他地區', ans: 'PGI', wrong: ['PDO', 'Retsina', 'Verdea'],
    explain: 'PGI 至少 85% 來自該區；目前約 114 個，分 Regional、District、Area 三級。' },
  { stem: '舊制用語，適用乾型酒，瓶頸為紅色封帶', ans: 'OPAP', wrong: ['OPE', 'PGI', 'Retsina'],
    explain: 'OPAP＝優質法定產區（乾型酒），瓶頸紅色封帶。' },
  { stem: '舊制用語，適用甜酒與強化酒，瓶頸為藍色封帶', ans: 'OPE', wrong: ['OPAP', 'PGI', 'Verdea'],
    explain: 'OPE＝受控法定產區（甜酒與強化酒），瓶頸藍色封帶。' },
  { stem: '歐盟認定的傳統名稱，僅限希臘使用，發酵中加入阿勒頗松樹脂', ans: 'Retsina', wrong: ['Verdea', 'PDO', 'OPE'],
    explain: 'Retsina 是傳統名稱；樹脂在發酵結束後移除。' },
  { stem: 'Zakynthos 的傳統名稱白酒', ans: 'Verdea', wrong: ['Retsina', 'OPAP', 'OPE'],
    explain: 'Verdea 是 Zakynthos 的傳統名稱。' },
  { stem: 'Naoussa', ans: 'PDO', wrong: ['PGI', 'Retsina', 'Verdea'], explain: 'Naoussa 是 100% Xinomavro 的 PDO。' },
  { stem: 'Nemea', ans: 'PDO', wrong: ['PGI', 'Retsina', 'Verdea'], explain: 'Nemea 是 100% Agiorgitiko 的 PDO。' },
  { stem: 'Santorini', ans: 'PDO', wrong: ['PGI', 'Retsina', 'Verdea'], explain: 'Santorini 是 PDO。' },
  { stem: 'PGI Crete', ans: 'PGI', wrong: ['PDO', 'Retsina', 'Verdea'], explain: '克里特島上大部分的酒以 PGI Crete 銷售。' },
  { stem: 'PGI Attica', ans: 'PGI', wrong: ['PDO', 'OPAP', 'OPE'], explain: 'Attica 沒有 PDO，非松脂酒以 PGI Attica 銷售。' },
  { stem: 'PGI Thrace', ans: 'PGI', wrong: ['PDO', 'OPAP', 'OPE'], explain: '色雷斯沒有 PDO，以 PGI 標示。' }
]

const LEVEL_ITEMS = [
  { stem: 'PGI Aegean Sea', ans: 'Regional', explain: 'Aegean Sea 是 Regional 級 PGI。' },
  { stem: 'PGI Imathia', ans: 'District', explain: 'Imathia 是 District 級 PGI。' },
  { stem: 'PGI Drama', ans: 'District', explain: 'Drama 是 District 級 PGI。' },
  { stem: 'PGI Florina', ans: 'District', explain: 'Florina 是 District 級 PGI。' },
  { stem: 'PGI Halkidiki', ans: 'District', explain: 'Halkidiki 是 District 級 PGI。' },
  { stem: 'PGI Achaia', ans: 'District', explain: 'Achaia 是 District 級 PGI。' },
  { stem: 'PGI Cyclades', ans: 'District', explain: 'Cyclades 是 District 級 PGI。' },
  { stem: 'PGI Epanomi', ans: 'Area', explain: 'Epanomi 是 Area 級 PGI（如 Ktima Gerovassiliou）。' },
  { stem: 'PGI Slopes of Aigialia', ans: 'Area', explain: 'Slopes of Aigialia 是 Area 級 PGI。' }
]

const FACT_ITEMS = [
  { stem: '希臘目前登記的 PDO 數量約為？（Wines of Greece）', ans: '33', wrong: ['28', '58', '114'],
    explain: '現行為 33 個；2018 年教材列 28 個，舊資料的 PGI 為 58，現行約 114。' },
  { stem: '希臘目前的 PGI 數量約為？', ans: '114', wrong: ['33', '58', '8'], explain: '約 114 個；Regional 8、District 37，其餘為 Area。' },
  { stem: 'Regional 級 PGI 共有幾個？', ans: '8', wrong: ['37', '33', '114'], explain: 'Regional 8 個、District 37 個。' },
  { stem: 'District 級 PGI 共有幾個？', ans: '37', wrong: ['8', '33', '114'], explain: 'District 37 個，約以行政縣為界。' },
  { stem: 'Retsina 的樹脂上限約為體積的多少？', ans: '1%（10 g/L）', wrong: ['5%', '0.1%', '10%'], explain: '資料記載約 1%（10 g/L），且須在發酵進行到三分之二前加入。' },
  { stem: '「Reserve／Grand Reserve」這類陳年用語適用於？', ans: '前 OPAP／OPE 的 PDO 酒款',
    wrong: ['PGI 酒款', '所有希臘酒', '只限 Retsina'], explain: 'PGI 不可使用；各 PDO 另有自己的陳年規範（如 Mavrodaphne of Patras）。' },
  { stem: 'OPAP 與 OPE 源於哪一年的法令？', ans: '1969 年', wrong: ['1981 年', '2009 年', '1992 年'],
    explain: '源於 1969 年法令，2009 年起納入歐盟 PDO 架構。' }
]

export function buildClassificationQuestions(diff) {
  const mk = (stem, tag, ans, wrong, explain) => {
    const opts = shuffle([ans, ...wrong])
    return { tag: gt(tag), stem: gt(stem), options: opts.map(o => gt(o)), correct: opts.indexOf(ans), explain: gt(explain) }
  }
  const terms = TERM_ITEMS.map(t => mk(t.stem, '辨識術語／制度', t.ans, t.wrong, t.explain))
  if (diff === 'easy') return shuffle(terms)
  const levels = LEVEL_ITEMS.map(l => mk(l.stem, 'PGI 屬於哪一級？', l.ans,
    shuffle(['Regional', 'District', 'Area', 'PDO'].filter(x => x !== l.ans)), l.explain))
  const facts = FACT_ITEMS.map(f => mk(f.stem, '制度數字與規範', f.ans, f.wrong, f.explain))
  return shuffle([...terms, ...levels, ...facts])
}
