/**
 * 隆河小遊戲題庫（產區速答／品種配對／分級辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（INAO 產品規格、Inter Rhône《Chiffres clés 2025》，詳見
 * RHONE_COURSE_FRAMEWORK.md 第 10–12 節）。來源有出入的數字（面積、Cairanne 年份與比例、
 * 草案版單產與酒精度、VDN 殘糖與年限等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/rhoneUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 北／南（教學分法；與課程、地圖一致）──────────────────────
export const ZONES = [
  { key: 'north', label: '北隆河' },
  { key: 'south', label: '南隆河' }
]

// ── 18 個 cru（北 8＋南 10）──────────────────────────────────
// hint 只放特徵，不直接說出北／南，也不含該 cru 自己的名稱（「線索 → cru」題型共用）
export const CRU_ITEMS = [
  { name: 'Côte-Rôtie',          zone: 'north', easy: true,  hint: '紅酒，Syrah 至少 80%、Viognier 至多 20%，有 Côte Blonde 與 Côte Brune 兩個坡面' },
  { name: 'Condrieu',            zone: 'north', easy: true,  hint: '100% Viognier 的白酒，7 個村莊橫跨三個省' },
  { name: 'Château-Grillet',     zone: 'north', easy: false, hint: '單一莊園（monopole）AOC，被 Condrieu 的範圍環繞，只產 Viognier 白酒' },
  { name: 'Saint-Joseph',        zone: 'north', easy: true,  hint: '右岸的長條形 cru，26 個村莊（Ardèche 23、Loire 3），紅酒 Syrah 至少 90%' },
  { name: 'Hermitage',           zone: 'north', easy: true,  hint: 'Drôme 省 Tain 後方的名丘，紅酒 Syrah 至少 85%，並有稻草酒（vin de paille）' },
  { name: 'Crozes-Hermitage',    zone: 'north', easy: true,  hint: 'Drôme 省 11 個村莊，環繞 Hermitage 名丘的紅白酒 AOC' },
  { name: 'Cornas',              zone: 'north', easy: true,  hint: 'Ardèche 省單一村莊，100% Syrah 的紅酒' },
  { name: 'Saint-Péray',         zone: 'north', easy: false, hint: 'Ardèche 省、以 Crussol 石灰岩山塊為地標，只有白酒，含靜態與氣泡' },
  { name: 'Châteauneuf-du-Pape', zone: 'south', easy: true,  hint: '18 個條目（一般稱 13 個品種）、強制手工採收與分選，Vaucluse 省 5 個村莊' },
  { name: 'Gigondas',            zone: 'south', easy: true,  hint: 'Dentelles de Montmirail 山腳下，紅酒 Grenache 至少 50%' },
  { name: 'Vacqueyras',          zone: 'south', easy: true,  hint: '由 Sarrians 與同名村莊兩個村莊組成，1990 年升格' },
  { name: 'Vinsobres',           zone: 'south', easy: false, hint: '2006 年 2 月法令升格，紅酒 Grenache 至少 50%、Syrah＋Mourvèdre 至少 25%' },
  { name: 'Beaumes-de-Venise',   zone: 'south', easy: false, hint: '乾紅酒 2005 年升格，4 個村莊；同名的 Muscat 天然甜酒是另一個 AOC' },
  { name: 'Rasteau',             zone: 'south', easy: true,  hint: '先以 1944 年天然甜酒（VDN）認定，乾紅酒 2010 年才升格為 cru' },
  { name: 'Cairanne',            zone: 'south', easy: false, hint: 'Vaucluse 省的村莊，原為 Côtes du Rhône Villages 的可加註地名，後升格為 cru' },
  { name: 'Lirac',               zone: 'south', easy: true,  hint: 'Gard 省右岸，4 個村莊，隔河與 Châteauneuf-du-Pape 相望，產紅、粉紅、白酒' },
  { name: 'Tavel',               zone: 'south', easy: true,  hint: '隆河唯一只產粉紅酒的 cru，只允許靜態粉紅酒' },
  { name: 'Laudun',              zone: 'south', easy: false, hint: '2024 年 9 月升格為第 18 個 cru，Gard 省三個村莊' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = cru → 北／南（附線索，2 選項）；
//  困難 = 一半是「只給名稱、無線索」的 cru → 北／南，一半是「線索 → cru」（同側 4 選項）
export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? CRU_ITEMS.filter(c => c.easy) : CRU_ITEMS
  const zoneQ = (c, withHint) => {
    const zs = ZONES
    return {
      tag: gt('Cru → 北／南隆河'),
      stem: c.name,
      hint: withHint ? gt(c.hint) : undefined,
      options: zs.map(z => gt(z.label)),
      correct: zs.findIndex(z => z.key === c.zone),
      explain: gt('{name} 位於「{g}」。', { name: c.name, g: gt(ZONE_LABEL[c.zone]) })
    }
  }
  if (diff === 'easy') return shuffle(pool).map(c => zoneQ(c, true))
  const clueQ = c => {
    const same = CRU_ITEMS.filter(x => x.zone === c.zone && x.name !== c.name)
    const opts = shuffle([c, ...shuffle(same).slice(0, 3)])
    return {
      tag: gt('線索 → Cru'),
      stem: gt(c.hint),
      hint: gt('這是同一側（{g}）的哪個 cru？', { g: gt(ZONE_LABEL[c.zone]) }),
      options: opts.map(o => o.name),
      correct: opts.indexOf(c),
      explain: gt('答案是 {name}。', { name: c.name })
    }
  }
  const items = shuffle(pool)
  return shuffle(items.map((c, i) => (i % 2 === 0 ? zoneQ(c, false) : clueQ(c))))
}

// ── 品種 ──────────────────────────────────────────────────────
export const GRAPES = [
  { name: 'Syrah',        color: '紅', desc: '黑色水果、黑胡椒、橄欖與紫羅蘭，成熟或陳年後出現煙燻、培根與皮革；北隆河紅酒的主角' },
  { name: 'Grenache',     color: '紅', desc: '隆河種植最多的紅葡萄，紅色莓果與香料感，酒精度高，顏色與單寧相對較淡、易氧化' },
  { name: 'Mourvèdre',    color: '紅', desc: '晚熟、需要溫暖，提供結構、單寧與野味、皮革調，常與 Grenache、Syrah 混釀' },
  { name: 'Cinsault',     color: '紅', desc: '香氣花香、酒體輕盈，常用於粉紅酒與混釀' },
  { name: 'Carignan',     color: '紅', desc: '酸度與單寧高，老藤才有深度' },
  { name: 'Viognier',     color: '白', desc: '杏桃、桃子、白花與麝香感，酸度偏低、酒精度高、口感油潤；Condrieu 與 Château-Grillet 100% 使用' },
  { name: 'Marsanne',     color: '白', desc: '質地豐厚、帶蠟感，蜂蜜、杏仁與梨，酸度中等，陳年後更圓潤' },
  { name: 'Roussanne',    color: '白', desc: '香氣比 Marsanne 更細緻，花、草本茶與香料感，酸度較高、陳年潛力強，較難栽培' },
  { name: 'Grenache Blanc', color: '白', desc: '南部種植最多的白品種，酒體豐滿、酸度偏低' },
  { name: 'Clairette',    color: '白', desc: '帶鮮明草本與酸度；Clairette de Die 二次瓶內發酵版唯一使用的品種' },
  { name: 'Bourboulenc',  color: '白', desc: '南部白品種，保留酸度，常與 Grenache Blanc、Clairette 等混合' },
  { name: 'Muscat Blanc à Petits Grains', color: '白', desc: '用於 Muscat de Beaumes-de-Venise 等天然甜酒（VDN）的麝香品種' }
]

// cru → 核心品種（皆為課程已查證且無歧義者）
const CRU_GRAPE = [
  { cru: 'Cornas', grape: 'Syrah' },
  { cru: 'Condrieu', grape: 'Viognier' },
  { cru: 'Château-Grillet', grape: 'Viognier' },
  { cru: 'Muscat de Beaumes-de-Venise', grape: 'Muscat Blanc à Petits Grains' },
  { cru: 'Clairette de Die（二次瓶內發酵版）', grape: 'Clairette' }
]

// 品種比例（INAO 現行規格與課程一致者；Cairanne、草案版數字不列）
const RATIO_ITEMS = [
  { stem: 'Côte-Rôtie 的 Syrah 最低比例？', ans: '80%', wrong: ['50%', '70%', '100%'], explain: 'Côte-Rôtie 規定 Syrah 至少 80%，Viognier 至多占 Syrah 地塊葡萄樹的 20%。' },
  { stem: 'Hermitage 紅酒的 Syrah 最低比例（酒莊種植計）？', ans: '85%', wrong: ['50%', '70%', '90%'], explain: 'Hermitage 與 Crozes-Hermitage 為 85%，Saint-Joseph 為 90%。' },
  { stem: 'Saint-Joseph 紅酒的 Syrah 最低比例（酒莊種植計）？', ans: '90%', wrong: ['60%', '70%', '85%'], explain: 'Saint-Joseph 為 90%；Hermitage 與 Crozes-Hermitage 為 85%。' },
  { stem: 'Gigondas 紅酒與粉紅酒的 Grenache 最低比例？', ans: '50%', wrong: ['30%', '40%', '80%'], explain: 'Gigondas 規定 Grenache 至少 50%。' },
  { stem: 'Côtes du Rhône 的 Grenache 最低比例（酒莊整體種植）？', ans: '30%', wrong: ['15%', '40%', '50%'], explain: '至少 30%（Montélimar 緯線以北的酒莊例外）；40% 是 Villages 的要求。' },
  { stem: 'Côtes du Rhône Villages 的 Grenache 最低比例？', ans: '40%', wrong: ['20%', '30%', '60%'], explain: 'Villages 要求 Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%。' },
  { stem: 'Côtes du Rhône 的 Syrah＋Mourvèdre 合計最低比例（已投產葡萄樹自 2022 年採收起）？', ans: '20%', wrong: ['10%', '15%', '25%'], explain: '2022 年採收起為 20%；舊筆記的 15% 是過渡版本，25% 是 Villages。' },
  { stem: 'Côtes du Rhône Villages 的 Syrah＋Mourvèdre 合計最低比例？', ans: '25%', wrong: ['15%', '20%', '40%'], explain: 'Villages：Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%、主要品種至少 80%。' },
  { stem: 'Vacqueyras 紅酒的 Syrah＋Mourvèdre 合計最低比例？', ans: '20%', wrong: ['10%', '25%', '50%'], explain: 'Vacqueyras：Grenache 至少 50%、Syrah＋Mourvèdre 至少 20%。' },
  { stem: 'Vinsobres 紅酒的 Syrah＋Mourvèdre 合計最低比例？', ans: '25%', wrong: ['15%', '20%', '50%'], explain: 'Vinsobres：Grenache 至少 50%、Syrah＋Mourvèdre 至少 25%。' },
  { stem: 'Lirac 紅酒與粉紅酒的 Grenache 最低比例？', ans: '40%', wrong: ['30%', '50%', '60%'], explain: 'Lirac：Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%。' },
  { stem: 'Tavel 的 Grenache（黑、白、灰合計）須落在哪個範圍？', ans: '大於 30%、小於 60%', wrong: ['至少 80%', '至少 50%', '不得超過 30%'], explain: 'Tavel 規定 Grenache 合計大於 30%、小於 60%，且每款調配必須含 Grenache noir。' }
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
function c2g(item) {
  const g = GRAPE_BY_NAME[item.grape]
  const same = GRAPES.filter(x => x.color === g.color)
  const { options, correct } = pick4(g, same, 'name')
  return { tag: gt('Cru → 核心品種'), stem: gt('{cru} 的核心品種是？', { cru: gt(item.cru) }), options, correct,
    explain: gt('{cru} 以 {name} 為核心：{desc}。', { cru: gt(item.cru), name: g.name, desc: gt(g.desc) }) }
}
function ratioQ(r) {
  const opts = shuffle([r.ans, ...r.wrong])
  return { tag: gt('品種比例'), stem: gt(r.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(r.ans), explain: gt(r.explain) }
}

export function buildGrapeQuestions(diff) {
  if (diff === 'easy') return shuffle(GRAPES).map(g2d)
  return shuffle([
    ...GRAPES.map(g2d),
    ...GRAPES.map(d2g),
    ...CRU_GRAPE.map(c2g),
    ...RATIO_ITEMS.map(ratioQ)
  ])
}

// ── 分級辨識（金字塔與術語）──────────────────────────────────
const TIERS = ['Côtes du Rhône', 'Côtes du Rhône Villages', 'Villages ＋ 地名', 'Cru（獨立 AOC）']

const TIER_ITEMS = [
  { stem: '涵蓋整個河谷的基礎名稱，Grenache 至少 30%', ans: TIERS[0], explain: 'Côtes du Rhône 是整個河谷的基礎名稱，Grenache 至少 30%。' },
  { stem: '標籤只寫「Côtes du Rhône」', ans: TIERS[0], explain: '只寫 Côtes du Rhône 就是金字塔的底層。' },
  { stem: '僅限南部四個省，Grenache 至少 40%', ans: TIERS[1], explain: 'Côtes du Rhône Villages 限南部四省，Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%。' },
  { stem: '標籤寫成「Côtes du Rhône Villages」，沒有加註地名', ans: TIERS[1], explain: '沒有加註地名的 Villages，仍屬金字塔第二層。' },
  { stem: '標籤寫成「Côtes du Rhône Villages Séguret」', ans: TIERS[2], explain: 'Séguret 是 21 個可加註地名的村莊之一，仍屬 Côtes du Rhône Villages 這個 AOC。' },
  { stem: '標籤寫成「Côtes du Rhône Villages Plan de Dieu」', ans: TIERS[2], explain: 'Plan de Dieu 是 21 個可加註地名之一，仍屬 Villages AOC。' },
  { stem: '標籤寫成「Côtes du Rhône Villages Visan」', ans: TIERS[2], explain: 'Visan 是 21 個可加註地名之一，仍屬 Villages AOC。' },
  { stem: 'Gigondas', ans: TIERS[3], explain: 'Gigondas 是獨立的 AOC，也是 cru。' },
  { stem: 'Cornas', ans: TIERS[3], explain: 'Cornas 是北隆河的 cru，100% Syrah。' },
  { stem: 'Tavel', ans: TIERS[3], explain: 'Tavel 是只產粉紅酒的 cru。' },
  { stem: 'Vacqueyras', ans: TIERS[3], explain: 'Vacqueyras 於 1990 年升格為 cru。' },
  { stem: 'Laudun', ans: TIERS[3], explain: 'Laudun 於 2024 年成為第 18 個 cru，不再以 Villages 地名銷售。' }
]

// 數字與規範（皆為課程已查證的項目）
const FACT_ITEMS = [
  { stem: '隆河目前共有幾個 cru？（北 8＋南 10）', ans: '18', wrong: ['10', '14', '21'], explain: 'Inter Rhône 標示 18 個 cru，2024 年 Laudun 為第 18 個。' },
  { stem: '北隆河共有幾個 cru？', ans: '8', wrong: ['5', '10', '18'], explain: '北隆河 8 個：Côte-Rôtie、Condrieu、Château-Grillet、Saint-Joseph、Hermitage、Crozes-Hermitage、Cornas、Saint-Péray。' },
  { stem: '南隆河共有幾個 cru？', ans: '10', wrong: ['8', '12', '18'], explain: '南隆河 10 個，包含 2024 年升格的 Laudun。' },
  { stem: '可在 Côtes du Rhône Villages 之後加註地名的村莊共有幾個？', ans: '21', wrong: ['8', '18', '95'], explain: 'INAO 清單共 21 個地名，仍屬 Villages 這個 AOC。' },
  { stem: 'Côtes du Rhône Villages 限於哪四個省？', ans: 'Ardèche、Drôme、Gard、Vaucluse',
    wrong: ['Rhône、Loire、Ardèche、Drôme', 'Isère、Savoie、Vaucluse、Gard', 'Bouches-du-Rhône、Var、Gard、Vaucluse'],
    explain: 'Villages 僅限南部四省：Ardèche、Drôme、Gard、Vaucluse。' },
  { stem: '哪個 cru 只生產粉紅酒？', ans: 'Tavel', wrong: ['Lirac', 'Rasteau', 'Vacqueyras'], explain: 'Tavel 是隆河唯一專產粉紅酒的 cru。' },
  { stem: '哪個 cru 是被 Condrieu 範圍環繞的單一莊園 AOC？', ans: 'Château-Grillet', wrong: ['Cornas', 'Hermitage', 'Saint-Péray'], explain: 'Château-Grillet 是單一莊園（monopole）AOC，只產 Viognier 白酒。' },
  { stem: '一個 cru 在法規上等於？', ans: '一個獨立的 AOC', wrong: ['Côtes du Rhône 的一個村莊地名', 'Villages 的一個加註名稱', 'IGP 的一個產區'],
    explain: 'cru 各自是獨立的 AOC，標籤上不再寫 Côtes du Rhône Villages。' },
  { stem: 'Laudun 於哪一年升格為 cru？', ans: '2024', wrong: ['1990', '2006', '2016'], explain: '2024 年 9 月 11 日 INAO 全國委員會通過，為第 18 個 cru。' },
  { stem: 'Gigondas 於哪一年升格為 cru？', ans: '1971', wrong: ['1990', '2005', '2010'], explain: 'Gigondas 為 1971 年 1 月 6 日法令；Vacqueyras 為 1990 年。' },
  { stem: 'Vacqueyras 於哪一年升格為 cru？', ans: '1990', wrong: ['1971', '2005', '2010'], explain: 'Vacqueyras 為 1990 年；Gigondas 為 1971 年。' },
  { stem: 'Rasteau 的乾紅酒於哪一年升格為 cru？', ans: '2010', wrong: ['1944', '1971', '2024'], explain: 'Rasteau 先以 1944 年天然甜酒（VDN）認定，乾紅酒於 2010 年升格。' },
  { stem: 'Châteauneuf-du-Pape 的法定品種清單中，下列何者「不」在內？', ans: 'Viognier', wrong: ['Roussanne', 'Cinsault', 'Counoise'], explain: 'Marsanne 與 Viognier 不在 Châteauneuf-du-Pape 的許可清單內。' }
]

export function buildClassificationQuestions(diff) {
  const mk = (stem, tag, ans, wrong, explain) => {
    const opts = shuffle([ans, ...wrong])
    return { tag: gt(tag), stem: gt(stem), options: opts.map(o => gt(o)), correct: opts.indexOf(ans), explain: gt(explain) }
  }
  // 層級題固定四個選項（金字塔四層），順序固定以便記憶
  const tiers = TIER_ITEMS.map(t => ({
    tag: gt('金字塔：屬於哪一層？'), stem: gt(t.stem), options: TIERS.map(o => gt(o)),
    correct: TIERS.indexOf(t.ans), explain: gt(t.explain)
  }))
  if (diff === 'easy') return shuffle(tiers)
  const facts = FACT_ITEMS.map(f => mk(f.stem, '制度數字與規範', f.ans, f.wrong, f.explain))
  return shuffle([...tiers, ...facts])
}
