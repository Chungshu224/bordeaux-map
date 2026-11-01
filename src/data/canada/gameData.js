/**
 * 加拿大小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 CANADA_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（面積、酒廠數、Niagara Escarpment 高度、冰酒出汁率與酒精濃度、經濟衝擊、年度產量等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/canadaUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 三個產區群（與課程、地圖一致）──────────────────────────
export const ZONES = [
  { key: 'ontario', label: '安大略（Ontario）' },
  { key: 'bc', label: '英屬哥倫比亞（BC）' },
  { key: 'east', label: '東部與沿海（Nova Scotia、Quebec）' }
]

// ── 產地（認定產區／GI／次產區）──────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Niagara Peninsula', zone: 'ontario', easy: true, hint: '加拿大種植面積最大的栽培區，下分 10 個次產區（3＋4＋3）' },
  { name: 'Lake Erie North Shore', zone: 'ontario', easy: true, hint: 'Ontario 最南、積溫最高的認定產區，Lake Erie 是五大湖中最淺也最暖的一個' },
  { name: 'Prince Edward County', zone: 'ontario', easy: true, hint: '2007 年成為認定產區，Ontario 最北、沒有次產區，建在奧陶紀石灰岩上，冬季需要培土埋藤' },
  { name: 'South Islands', zone: 'ontario', easy: false, hint: '以 Pelee Island 為中心的次產區，2015 年 7 月加入' },
  { name: 'Beamsville Bench', zone: 'ontario', easy: false, hint: 'Niagara Escarpment 最西的次產區，位於 Lake Iroquois Shore Bluff 的山腳' },
  { name: 'Short Hills Bench', zone: 'ontario', easy: false, hint: 'Niagara Escarpment 最東的次產區，位於 Twelve Mile Creek 與 Fifteen Mile Creek 之間' },
  { name: 'Vinemount Ridge', zone: 'ontario', easy: false, hint: '2015 年冬後 Chardonnay 芽存活率低至 10% 的 West Niagara 次產區' },
  { name: 'Niagara-on-the-Lake', zone: 'ontario', easy: false, hint: '含 Niagara Lakeshore、Four Mile Creek、St. David\'s Bench、Niagara River 四個次產區' },
  { name: 'Okanagan Valley', zone: 'bc', easy: true, hint: 'GI 於 1990 年指定，占 BC 種植面積約 86%，谷地南北長約 175 公里' },
  { name: 'Similkameen Valley', zone: 'bc', easy: true, hint: '半乾燥的東西向狹長山谷，被稱為加拿大的有機之都，沒有次 GI' },
  { name: 'Golden Mile Bench', zone: 'bc', easy: false, hint: '2015 年成為 BC 第一個次 GI，位於 Okanagan 較暖的南段' },
  { name: 'Naramata Bench', zone: 'bc', easy: false, hint: '2019 年成為次 GI，位於 Penticton 以北、Okanagan Lake 東岸' },
  { name: 'Okanagan Falls', zone: 'bc', easy: false, hint: '2018 年成為 Okanagan 的次 GI' },
  { name: 'Cowichan Valley', zone: 'bc', easy: true, hint: '2020 年 7 月 10 日認定的次 GI，Okanagan 以外的第一個' },
  { name: 'Fraser Valley', zone: 'bc', easy: false, hint: '涼爽濕潤的海洋性氣候，適合芳香白酒與 Pinot Noir' },
  { name: 'Vancouver Island', zone: 'bc', easy: false, hint: '涼爽的沿岸海洋氣候，Pinot Noir、Pinot Gris 與 Ortega 是重點，含 Cowichan Valley 次 GI' },
  { name: 'Lillooet', zone: 'bc', easy: false, hint: '2018 年新增的 GI，白天熱、夜晚涼，是最小的 GI' },
  { name: 'Kootenays', zone: 'bc', easy: false, hint: '2018 年新增的 GI，高海拔（450–750 公尺）的冷涼大陸性氣候' },
  { name: 'Annapolis Valley', zone: 'east', easy: false, hint: 'Nova Scotia 四個主要地區之一，大西洋調節溫度極端並拉長採收期' },
  { name: 'Nova Scotia（Tidal Bay）', zone: 'east', easy: true, hint: '2012 年 6 月推出唯一的官方產區名稱，100% 本地葡萄、酒精濃度不超過 11%' },
  { name: 'Québec', zone: 'east', easy: true, hint: 'Vin du Québec PGI 自 2018 年保證 100% 本地葡萄，酒類分銷由 SAQ 壟斷' },
  { name: 'Malagash Peninsula', zone: 'east', easy: false, hint: 'Nova Scotia 的四個主要地區之一（另三個是 Annapolis Valley、Gaspereau Valley、South Shore）' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = 產地 → 三個產區群之一（附線索）；
//  困難 = 一半是「只給名稱、無線索」的產地 → 產區群，一半是「線索 → 產地」
export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? DAC_ITEMS.filter(c => c.easy) : DAC_ITEMS
  const zoneQ = (c, withHint) => ({
    tag: gt('產地 → 產區群'),
    stem: c.name,
    hint: withHint ? gt(c.hint) : undefined,
    options: ZONES.map(z => gt(z.label)),
    correct: ZONES.findIndex(z => z.key === c.zone),
    explain: gt('{name} 位於「{g}」。', { name: c.name, g: gt(ZONE_LABEL[c.zone]) })
  })
  if (diff === 'easy') return shuffle(pool).map(c => zoneQ(c, true))
  const clueQ = c => {
    const same = shuffle(DAC_ITEMS.filter(x => x.zone === c.zone && x.name !== c.name))
    const other = shuffle(DAC_ITEMS.filter(x => x.zone !== c.zone))
    const opts = shuffle([c, ...[...same, ...other].slice(0, 3)])
    return {
      tag: gt('線索 → 產地'),
      stem: gt(c.hint),
      hint: gt('這是哪個產地？'),
      options: opts.map(o => o.name),
      correct: opts.indexOf(c),
      explain: gt('答案是 {name}。', { name: c.name })
    }
  }
  const items = shuffle(pool)
  return shuffle(items.map((c, i) => (i % 2 === 0 ? zoneQ(c, false) : clueQ(c))))
}

// ── 品種（描述皆為課程已查證者）────────────────────────────
export const GRAPES = [
  { name: 'Vidal', color: '白葡萄', desc: 'Ontario 冰酒最主要的葡萄，1984 年 Inniskillin 的第一批冰酒就用它，是耐寒的雜交種' },
  { name: 'Riesling', color: '白葡萄', desc: '2023 年 Okanagan 各品種中減產最少（41%）、相對最耐寒的品種' },
  { name: "L'Acadie Blanc", color: '白葡萄', desc: 'Nova Scotia 最重要的白品種，在 Ontario 的 Vineland 育成的雜交種，用於靜態酒與氣泡酒' },
  { name: 'Ortega', color: '白葡萄', desc: 'Vancouver Island 與 Cowichan Valley 的重點白品種' },
  { name: 'Chardonnay', color: '白葡萄', desc: '2015 年冬後 Vinemount Ridge 芽存活率低至 10% 的白品種，也是 Prince Edward County 的主力' },
  { name: 'Cabernet Franc', color: '紅葡萄', desc: '2015 年冬後 Niagara 芽存活率低至 17% 的紅品種，也被用來做冰酒' },
  { name: 'Syrah', color: '紅葡萄', desc: '2023 年 Okanagan 減產最嚴重（72%）的品種，暖地紅酒的代表' },
  { name: 'Merlot', color: '紅葡萄', desc: 'Okanagan 種植最廣的品種，2023 年減產 66%' },
  { name: 'Frontenac', color: '紅葡萄', desc: 'Quebec 常見的耐寒雜交種，有 noir、gris、blanc 三種，源自 University of Minnesota' },
  { name: 'Pinot Noir', color: '紅葡萄', desc: 'Prince Edward County 的主力紅品種，Vancouver Island 與 Fraser Valley 也是重點' },
  { name: 'Maréchal Foch', color: '紅葡萄', desc: 'Nova Scotia、Quebec 與 BC 冷涼產區常見的紅色雜交種' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Ontario 冰酒', grape: 'Vidal' },
  { dac: 'Nova Scotia 的白酒與氣泡酒', grape: "L'Acadie Blanc" },
  { dac: 'Okanagan 種植最廣的品種', grape: 'Merlot' },
  { dac: 'Vancouver Island 的重點白品種', grape: 'Ortega' },
  { dac: 'Quebec 的耐寒雜交種', grape: 'Frontenac' },
  { dac: 'Prince Edward County 的紅酒', grape: 'Pinot Noir' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'BC 現行 GI 標示（含次 GI）至少多少葡萄來自該範圍？', ans: '85%', wrong: ['51%', '75%', '100%'], explain: '依 B.C. Reg. 168/2018 第 57 條，至少 85%。' },
  { stem: 'VQA 冰酒的葡萄需要穩定降到多低的溫度才能採收？', ans: '-8°C 或更低', wrong: ['-3°C', '-5°C', '-20°C'], explain: '在樹上自然結冰、持續達 -8°C 或更低。' },
  { stem: '冰酒的最低糖度？', ans: '35°Brix', wrong: ['22°Brix', '26°Brix', '30°Brix'], explain: 'Icewine 至少 35°Brix。' },
  { stem: 'Late Harvest 的最低糖度？', ans: '22°Brix', wrong: ['26°Brix', '30°Brix', '35°Brix'], explain: 'Late Harvest 22、Select Late Harvest 26、Special Select 30、Icewine 35。' },
  { stem: 'Special Select Late Harvest 的最低糖度？', ans: '30°Brix', wrong: ['22°Brix', '26°Brix', '35°Brix'], explain: '至少 30°Brix。' },
  { stem: 'VQA 氣泡酒二次發酵的最低壓力？', ans: '300 kPa', wrong: ['100 kPa', '200 kPa', '600 kPa'], explain: '不低於 300 kPa，且為天然碳酸。' },
  { stem: 'Tidal Bay 的酒精濃度上限？', ans: '11%', wrong: ['9%', '12.5%', '14%'], explain: '不超過 11%。' },
  { stem: 'Tidal Bay 必須使用多少比例的 Nova Scotia 葡萄？', ans: '100%', wrong: ['51%', '75%', '85%'], explain: '100% Nova Scotia 葡萄。' },
  { stem: 'BC 冰酒裝瓶時的殘糖下限？', ans: '100 g/L', wrong: ['20 g/L', '45 g/L', '250 g/L'], explain: 'B.C. Reg. 168/2018 第 41 條：至少 100 g/L。' },
  { stem: 'BC 冰酒的揮發酸上限？', ans: '2.1 g/L', wrong: ['0.5 g/L', '1.2 g/L', '4.0 g/L'], explain: '不超過 2.1 g/L。' },
  { stem: '要使用 Appassimento 一詞，風乾葡萄至少占多少？', ans: '85%', wrong: ['10%', '51%', '100%'], explain: 'VQA Ontario：至少 85%。' },
  { stem: 'VQA Ontario 的 Skin Fermented White 至少浸皮多久？', ans: '10 天', wrong: ['3 天', '5 天', '30 天'], explain: '至少 10 天。' },
  { stem: 'Niagara Peninsula 共有幾個次產區？', ans: '10 個', wrong: ['3 個', '7 個', '14 個'], explain: '3＋4＋3 共 10 個。' },
  { stem: 'BC 目前有幾個次 GI？', ans: '12 個', wrong: ['5 個', '9 個', '20 個'], explain: 'Okanagan 11 個加上 Cowichan Valley。' },
  { stem: 'Okanagan Valley 有幾個次 GI？', ans: '11 個', wrong: ['3 個', '6 個', '12 個'], explain: '12 個次 GI 中 11 個在 Okanagan。' },
  { stem: 'VQA 認定的 Ontario 產區共有幾個？', ans: '3 個', wrong: ['2 個', '5 個', '11 個'], explain: 'Niagara Peninsula、Lake Erie North Shore、Prince Edward County。' }
]
const GRAPE_BY_NAME = Object.fromEntries(GRAPES.map(g => [g.name, g]))

function pick4(correct, poolItems, key) {
  // 同色品種不足 4 個時（白葡萄只有 3 種），以其他顏色補足選項
  const same = shuffle(poolItems.filter(x => x !== correct))
  const wrong = [...same, ...shuffle(GRAPES.filter(x => x !== correct && !poolItems.includes(x)))].slice(0, 3)
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
  return { tag: gt('產地 → 代表品種'), stem: gt('{dac} 的代表品種是？', { dac: gt(item.dac) }), options, correct,
    explain: gt('{dac} 以 {name} 為代表：{desc}。', { dac: gt(item.dac), name: g.name, desc: gt(g.desc) }) }
}
function ratioQ(r) {
  const opts = shuffle([r.ans, ...r.wrong])
  return { tag: gt('比例與門檻'), stem: gt(r.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(r.ans), explain: gt(r.explain) }
}

export function buildGrapeQuestions(diff) {
  if (diff === 'easy') return shuffle(GRAPES).map(g2d)
  return shuffle([
    ...GRAPES.map(g2d),
    ...GRAPES.map(d2g),
    ...DAC_GRAPE.map(c2g),
    ...RATIO_ITEMS.map(ratioQ)
  ])
}

// ── 制度辨識（法規與規格、歷史年份、栽培與釀造、市場與產業）────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '法規與規格', easy: true, stem: 'VQA 冰酒的葡萄必須如何結冰？', ans: '在樹上自然結冰', wrong: ['採收後放進冷凍庫', '先風乾再冷凍', '加糖後冷凍'], explain: '人工冷凍不得稱 Icewine。' },
  { g: '法規與規格', easy: true, stem: 'Tidal Bay 是哪個省的官方產區名稱？', ans: 'Nova Scotia', wrong: ['Ontario', 'Quebec', 'British Columbia'], explain: 'Nova Scotia 第一個也是唯一的官方產區名稱。' },
  { g: '法規與規格', easy: true, stem: 'Vin du Québec PGI 自 2018 年起保證什麼？', ans: '100% Quebec 葡萄', wrong: ['100% 有機', '100% vinifera', '全部橡木桶陳年'], explain: '來自特定產區，並須通過品評小組。' },
  { g: '法規與規格', easy: false, stem: '「Icewine」一詞可以用在人工冷凍的葡萄酒嗎？', ans: '不行，是受保護的用語', wrong: ['可以', '只限 BC', '只限出口'], explain: '沒有 VQA 認證的酒不得在標籤上使用 Icewine。' },
  { g: '法規與規格', easy: false, stem: 'Okanagan 以外第一個被認定的 BC 次 GI 是？', ans: 'Cowichan Valley', wrong: ['Naramata Bench', 'Similkameen Valley', 'Kootenays'], explain: '2020 年 7 月 10 日。' },
  { g: '法規與規格', easy: false, stem: 'Prince Edward County 有幾個次產區？', ans: '沒有', wrong: ['2 個', '3 個', '10 個'], explain: '是 Ontario 唯一沒有次產區的產區。' },
  { g: '法規與規格', easy: false, stem: 'Reg 168/2018 取代了哪個 BC 規定？', ans: 'Reg 79/2005', wrong: ['Reg 12/1990', 'Reg 5/2012', 'Reg 300/2025'], explain: '2018 年 7 月 27 日。' },
  { g: '歷史年份', easy: true, stem: 'Ontario 的 Vintners Quality Alliance Act 何時生效？', ans: '2000 年 6 月 29 日', wrong: ['1988 年', '1998 年', '2018 年'], explain: '1999 年法案於 2000 年 6 月 29 日公布。' },
  { g: '歷史年份', easy: true, stem: 'Prince Edward County 成為認定產區的年份？', ans: '2007 年', wrong: ['1988 年', '1999 年', '2018 年'], explain: '2007 年。' },
  { g: '歷史年份', easy: true, stem: 'Inniskillin 取得酒廠執照、創辦的年份？', ans: '1975 年', wrong: ['1811 年', '1866 年', '1990 年'], explain: 'Donald Ziraldo 與 Karl Kaiser 在 1975 年創辦。' },
  { g: '歷史年份', easy: false, stem: 'Johann Schiller 在 Credit River 種下葡萄園的年份？', ans: '1811 年', wrong: ['1634 年', '1866 年', '1975 年'], explain: '1811 年。' },
  { g: '歷史年份', easy: false, stem: 'Pelee Island 以 Catawba 開始商業釀酒的年份？', ans: '1866 年', wrong: ['1811 年', '1916 年', '1988 年'], explain: '1866 年，30 英畝的 Catawba。' },
  { g: '歷史年份', easy: false, stem: 'Tidal Bay 正式推出的年份？', ans: '2012 年', wrong: ['2003 年', '2007 年', '2018 年'], explain: '2012 年 6 月。' },
  { g: '歷史年份', easy: false, stem: 'Okanagan Valley GI 指定的年份？', ans: '1990 年', wrong: ['1975 年', '2000 年', '2015 年'], explain: '1990 年。' },
  { g: '歷史年份', easy: false, stem: 'Cellared in Canada 標示何時被禁？', ans: '2018 年 3 月 12 日', wrong: ['2000 年', '2012 年', '2025 年'], explain: 'CFIA 自 2018 年 3 月 12 日起禁用。' },
  { g: '歷史年份', easy: false, stem: 'BC 的拔樹計畫（1988–1990 年）大約拔除了多少既有葡萄園？', ans: '約 65%', wrong: ['約 5%', '約 20%', '約 95%'], explain: '約 65%，改種 vinifera。' },
  { g: '栽培與釀造', easy: true, stem: '冰酒通常在什麼時段採收？', ans: '夜間', wrong: ['正午', '春天', '夏天'], explain: '夜間溫度最低，葡萄保持結冰。' },
  { g: '栽培與釀造', easy: true, stem: 'Prince Edward County 的種植者如何度過嚴寒？', ans: '採收後培土埋藤', wrong: ['加熱葡萄園', '建大型溫室', '不做任何保護'], explain: '冬季可低於 -24°C。' },
  { g: '栽培與釀造', easy: true, stem: '風機（wind machines）在什麼條件下有效？', ans: '平靜晴朗、有逆溫層的夜晚', wrong: ['長時間有風的寒流', '下雪時', '任何情況都一樣'], explain: '需要逆溫層。' },
  { g: '栽培與釀造', easy: false, stem: '被公認為煙害標記的化合物是？', ans: 'Guaiacol 與 4-methylguaiacol', wrong: ['酒石酸與蘋果酸', '乙醇與甘油', '二氧化硫與乙酸'], explain: '兩者是標記。' },
  { g: '栽培與釀造', easy: false, stem: '冰酒榨汁時若葡萄回溫會怎樣？', ans: '果汁被稀釋、品質下降', wrong: ['糖度更高', '香氣更濃', '沒有影響'], explain: '果汁被融化的水稀釋。' },
  { g: '栽培與釀造', easy: false, stem: '2024 年 1 月 BC 寒害的特徵？', ans: '暖和後驟降到 -25°C 以下', wrong: ['長期乾旱', '夏季霜害', '冰雹'], explain: '降溫太快太劇烈。' },
  { g: '栽培與釀造', easy: false, stem: 'Niagara 的湖泊效應如何隨距離變化？', ans: '離岸越遠，影響越弱', wrong: ['離岸越遠越強', '全區相同', '只在冬季出現'], explain: '造成湖岸與內陸次產區的風味差異。' },
  { g: '市場與產業', easy: true, stem: '加拿大酒在國內銷售的占比約為？', ans: '約 30%', wrong: ['約 5%', '約 60%', '約 90%'], explain: '51% 是產業倡議的目標。' },
  { g: '市場與產業', easy: true, stem: '加拿大酒出口的主要項目是？', ans: '冰酒', wrong: ['氣泡酒', '加烈酒', '散酒'], explain: '出口以冰酒為大宗。' },
  { g: '市場與產業', easy: false, stem: 'Wine Growers Canada 大約代表全國多少比例的產量？', ans: '約 90%', wrong: ['約 30%', '約 50%', '100%'], explain: 'canada.ca，2022。' },
  { g: '市場與產業', easy: false, stem: '2018 年最高法院對省際酒類貿易的決定？', ans: '駁回完全自由貿易的主張', wrong: ['宣布全面自由化', '禁止所有省際運送', '要求聯邦專賣'], explain: 'Fine Vintage。' },
  { g: '市場與產業', easy: false, stem: 'BC 與 Ontario 開放超市販酒的年份（初期僅 VQA）？', ans: 'BC 2015、Ontario 2016', wrong: ['BC 1990、Ontario 1988', '皆為 2000', '皆為 2025'], explain: '初期僅限 VQA 酒。' },
  { g: '市場與產業', easy: false, stem: 'Ontario 生產全國多少比例的冰酒？', ans: '90% 以上', wrong: ['約 10%', '約 30%', '約 50%'], explain: 'Ontario 超過 90%，各產區皆有少量。' },
  { g: '市場與產業', easy: false, stem: 'Quebec 的酒類分銷由誰壟斷？', ans: 'SAQ', wrong: ['LCBO', 'BCLDB', 'CFIA'], explain: 'Société des alcools du Québec。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
