/**
 * 希臘小遊戲題庫（產區速答／品種配對）
 * 事實一律取自課程 Level 1–3 已查證內容（Wines of Greece 官方 PDO 頁、WineWithSeth、CMS 2018）。
 * 數字細節仍可能隨官方規格更新；不放有出入的數字（如 Reserve 月數）。
 */

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
      tag: 'PDO → 地理區',
      stem: p.name,
      hint: p.hint,
      options: groups.map(g => g.label),
      correct: groups.findIndex(g => g.key === p.group),
      explain: `${p.name} 位於「${GROUP_LABEL[p.group]}」。`
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
  return { options: opts.map(o => o[key]), correct: opts.indexOf(correct) }
}

function g2d(g) {
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'desc')
  return { tag: '品種 → 特徵', stem: `${g.name}（${g.color}）最符合哪一項描述？`, options, correct,
    explain: `${g.name}：${g.desc}。` }
}
function d2g(g) {
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'name')
  return { tag: '特徵 → 品種', stem: g.desc, hint: `這是哪個${g.color}品種？`, options, correct,
    explain: `答案是 ${g.name}。` }
}
function p2g(item) {
  const g = GRAPE_BY_NAME[item.grape]
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'name')
  return { tag: 'PDO → 核心品種', stem: `${item.pdo} 的核心品種是？`, options, correct,
    explain: `${item.pdo} 以 ${g.name} 為核心：${g.desc}。` }
}

export function buildGrapeQuestions(diff) {
  if (diff === 'easy') return shuffle(GRAPES).map(g2d)
  return shuffle([
    ...GRAPES.map(g2d),
    ...GRAPES.map(d2g),
    ...PDO_GRAPE.map(p2g)
  ])
}
