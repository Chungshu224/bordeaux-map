/**
 * 西南產區小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 SOUTHWEST_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（葡萄園面積、La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、
 * Collioure 年份、Montpeyroux 層級、「第一個法定產區」、2025 年野火規模等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/southwestUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 四個產區群（與課程、地圖一致）──────────────────────────
export const ZONES = [
  { key: 'dordogne', label: 'Dordogne（Bergerac 一帶）' },
  { key: 'valleys', label: 'Lot・Garonne・Tarn 河谷' },
  { key: 'gascony', label: 'Gascogne（Adour 流域）' },
  { key: 'pyrenees', label: '比利牛斯山麓（Béarn・巴斯克）' }
]

// ── 產地（AOC／子區）────────────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Bergerac', zone: 'dordogne', easy: true, hint: '1936 年取得 AOC，位於 Dordogne，紅酒以 Cabernet Sauvignon、Merlot、Cabernet Franc 混調為主' },
  { name: 'Pécharmant', zone: 'dordogne', easy: true, hint: '1946 年的 AOC，約 450 公頃，強勁耐存的紅酒' },
  { name: 'Monbazillac', zone: 'dordogne', easy: true, hint: '1936 年的 AOC，Sémillon 占逾 70%，所有果實都須受貴腐菌影響' },
  { name: 'Saussignac', zone: 'dordogne', easy: false, hint: '2005 年的 AOC，約 20 公頃，蜂蜜與蜜漬杏桃香的甜白酒' },
  { name: 'Montravel', zone: 'dordogne', easy: false, hint: '1937 年認定，紅酒 Montravel Rouge 到 2001 年才取得，高原土壤有 boulbène 與燧石' },
  { name: 'Rosette', zone: 'dordogne', easy: false, hint: '1946 年的 AOC，約 40 公頃，半甜白酒，1960 年代復興' },
  { name: 'Côtes de Duras', zone: 'dordogne', easy: false, hint: '1937 年的 AOC，位於 Lot-et-Garonne，在波爾多與 Bergerac 交界' },
  { name: 'Cahors', zone: 'valleys', easy: true, hint: '1971 年取得 AOC，只產紅酒，Malbec 至少 70%，每公頃至少 4,000 株' },
  { name: 'Marcillac', zone: 'valleys', easy: true, hint: '1990 年升為 AOC，位於 Aveyron，紅色黏土 rougiers，主要品種 Mansois' },
  { name: 'Buzet', zone: 'valleys', easy: false, hint: '1973 年成為 AOC、1986 年改稱現名，約 1,800 公頃、27 個村鎮' },
  { name: 'Côtes du Marmandais', zone: 'valleys', easy: false, hint: '1990 年自 VDQS 升為 AOC，位於 Garonne 沿岸，品種多達 12 種' },
  { name: 'Gaillac', zone: 'valleys', easy: true, hint: '白酒 1938 年、紅酒 1970 年取得 AOC，Mauzac 與 Len de l\'El 為關鍵白品種，有 Méthode Gaillacoise 氣泡酒' },
  { name: 'Fronton', zone: 'valleys', easy: true, hint: '位於 Toulouse 以北約 35 公里，以 Négrette 為特色，紅酒約占 85%' },
  { name: 'Madiran', zone: 'gascony', easy: true, hint: '1948 年 7 月 10 日法令認定，只產紅酒，Tannat 至少占每個酒莊葡萄園的 60%' },
  { name: 'Pacherenc du Vic-Bilh', zone: 'gascony', easy: false, hint: '與 Madiran 同區的白酒，乾白 Courbu 與 Petit Manseng 合計至少 60%' },
  { name: 'Saint-Mont', zone: 'gascony', easy: false, hint: '2011 年升為 AOC，位於 Gers，11 世紀本篤會修道院，Plaimont 合作社為主要生產者' },
  { name: 'Tursan', zone: 'gascony', easy: false, hint: 'VDQS 1958 年、AOC 2011 年，白酒用 Baroque 占 30–90%，Adour 河為北界' },
  { name: 'Côtes de Gascogne IGP', zone: 'gascony', easy: true, hint: '以 Gers 為核心的 IGP，生產潛力逾 1 億瓶、約 75% 出口' },
  { name: 'Bas-Armagnac', zone: 'gascony', easy: false, hint: 'Armagnac 三個地區中位於西部，貧瘠酸性黏壤土，蒸餾酒輕盈帶果香' },
  { name: 'Ténarèze', zone: 'gascony', easy: false, hint: 'Armagnac 三個地區中位於中部，重黏土石灰岩，蒸餾酒較豐厚、需長期培養' },
  { name: 'Jurançon', zone: 'pyrenees', easy: true, hint: '甜酒 1936 年取得 AOC，靠葡萄在藤上風乾而非貴腐濃縮，Gros 與 Petit Manseng 合計至少 50%' },
  { name: 'Béarn', zone: 'pyrenees', easy: false, hint: '1951 年為 VDQS、1975 年成為 AOC，約 259 公頃，六種紅葡萄含 Tannat 與 Fer' },
  { name: 'Irouléguy', zone: 'pyrenees', easy: true, hint: '1970 年 10 月的 AOC，梯田部分坡度達 60°，深紅色土壤，現約 210 公頃' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = 產地 → 四個產區群之一（附線索）；
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
  { name: 'Malbec', color: '紅', desc: 'Cahors 至少 70%；又稱 Côt；2007 年 UIVC 與阿根廷葡萄酒機構合作，4 月 17 日為 World Malbec Day' },
  { name: 'Tannat', color: '紅', desc: 'Madiran 至少占每個酒莊葡萄園的 60%；微氧化於 1991 年在 Madiran 發明；Tursan 紅酒最多 40%' },
  { name: 'Négrette', color: '紅', desc: 'Fronton 的特色品種，酸度與單寧低但色深，帶紫羅蘭、覆盆子與甘草香' },
  { name: 'Fer Servadou', color: '紅', desc: '在 Marcillac 的當地名稱是 Mansois，約占九成；在 Gaillac 稱 Braucol，也是 Madiran 的輔助品種' },
  { name: 'Duras', color: '紅', desc: 'Gaillac 紅酒的品種之一：Duras、Braucol、Prunelart、Syrah 四種中至少用兩種，合計至少 70%' },
  { name: 'Cabernet Franc', color: '紅', desc: 'Buzet 紅酒品種之一，也是 Madiran 與 Béarn 的輔助品種' },
  { name: 'Mauzac', color: '白', desc: 'Gaillac 的關鍵白品種；Méthode Gaillacoise 僅用 Mauzac，單次發酵在瓶中完成' },
  { name: 'Sémillon', color: '白', desc: 'Monbazillac 占逾 70%，所有果實都須受貴腐菌影響' },
  { name: 'Petit Manseng', color: '白', desc: 'Jurançon 甜酒的關鍵品種，可留在藤上到 11 月甚至 12 月，由 foehn 乾風助力風乾' },
  { name: 'Gros Manseng', color: '白', desc: 'Jurançon 中與 Petit Manseng 合計至少 50%，Vendanges Tardives 只能用 Petit 與 Gros Manseng' },
  { name: 'Courbu', color: '白', desc: 'Pacherenc du Vic-Bilh 乾白中與 Petit Manseng 合計至少 60%' },
  { name: 'Ugni Blanc', color: '白', desc: 'Armagnac 主要的蒸餾品種' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Cahors', grape: 'Malbec' },
  { dac: 'Madiran', grape: 'Tannat' },
  { dac: 'Fronton', grape: 'Négrette' },
  { dac: 'Marcillac', grape: 'Fer Servadou' },
  { dac: 'Monbazillac', grape: 'Sémillon' },
  { dac: 'Jurançon', grape: 'Petit Manseng' },
  { dac: 'Armagnac', grape: 'Ugni Blanc' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'Cahors 規定 Malbec 最低須占多少比例？', ans: '70%', wrong: ['40%', '50%', '90%'], explain: 'Wine With Seth：Malbec 至少 70%，Merlot 與 Tannat 各可至 30%。' },
  { stem: 'Madiran 規定 Tannat 至少占每個酒莊葡萄園的多少？', ans: '60%', wrong: ['30%', '75%', '90%'], explain: 'Wine With Seth、Wikipedia：Tannat 至少 60%。' },
  { stem: 'Monbazillac 的 Sélection de Grains Nobles 殘糖至少多少？', ans: '85 g/L', wrong: ['35 g/L', '45 g/L', '120 g/L'], explain: 'Wine With Seth：經典款至少 45 g/L，SGN 至少 85 g/L。' },
  { stem: 'Gaillac Doux 的殘糖至少是多少？', ans: '70 g/L', wrong: ['4 g/L', '35 g/L', '120 g/L'], explain: 'Wine With Seth：至少 70 g/L；舊稱 Liquoreux 與 Moelleux 已不再允許。' },
  { stem: 'Jurançon Sec 的殘糖上限是多少？', ans: '4 g/L', wrong: ['1 g/L', '12 g/L', '35 g/L'], explain: 'Wine With Seth：Jurançon Sec 最多 4 g/L；甜酒至少 40 g/L，Vendanges Tardives 至少 55 g/L。' }
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

// ── 制度辨識（原產地制度、歷史年份、地理與氣候、產業與技術）────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '原產地制度', easy: true, stem: 'Vin de Pays 全面改稱 IGP 的日期是？', ans: '2009 年 8 月 1 日', wrong: ['1987 年 1 月 1 日', '1936 年 5 月 4 日', '2016 年 1 月 1 日'], explain: '依歐盟 607/2009 號規則（Wine With Seth）。' },
  { g: '原產地制度', easy: true, stem: 'Gaillac Doux 取代了哪些舊稱？', ans: 'Liquoreux 與 Moelleux', wrong: ['Primeur 與 Perlé', 'Sec 與 Brut', 'Rancio 與 Vin de Voile'], explain: '這兩個舊稱已不再允許（Wine With Seth）。' },
  { g: '原產地制度', easy: true, stem: 'Cahors 規定每公頃至少種多少株？', ans: '4,000 株', wrong: ['1,000 株', '2,500 株', '10,000 株'], explain: 'Wikipedia：至少 4,000 株。' },
  { g: '原產地制度', easy: false, stem: 'Madiran 微氧化通常在哪個階段進行？', ans: '酒精發酵與乳酸發酵之間', wrong: ['裝瓶之後', '採收前', '蒸餾時'], explain: 'wein.plus。' },
  { g: '原產地制度', easy: false, stem: 'Madiran 的去梗規定是？', ans: '必須去梗', wrong: ['禁止去梗', '只有白酒需要', '沒有規定'], explain: 'Wine With Seth。' },
  { g: '原產地制度', easy: false, stem: 'Côtes de Gascogne 的 Vin de Pays 較嚴標準法令是哪一天？', ans: '1982 年 1 月 25 日', wrong: ['1936 年 5 月 4 日', '2009 年 8 月 1 日', '2011 年 6 月 1 日'], explain: 'Wikipedia。' },
  { g: '歷史年份', easy: true, stem: 'Saint-Mont 與 Tursan 升為 AOC 是哪一年？', ans: '2011 年', wrong: ['1948 年', '1971 年', '2005 年'], explain: 'Wine With Seth、Wikipedia。' },
  { g: '歷史年份', easy: true, stem: 'Cahors 取得 AOC 是哪一年？', ans: '1971 年', wrong: ['1936 年', '1948 年', '2011 年'], explain: 'Wine With Seth、Wikipedia。' },
  { g: '歷史年份', easy: false, stem: 'Madiran 取得 AOC 的法令是哪一年？', ans: '1948 年', wrong: ['1936 年', '1971 年', '2011 年'], explain: '1948 年 7 月 10 日法令（Wine With Seth）。' },
  { g: '歷史年份', easy: false, stem: '微氧化（MOX）是哪一年在 Madiran 發明的？', ans: '1991 年', wrong: ['1948 年', '1971 年', '2009 年'], explain: '1996 年獲歐盟批准（Wine With Seth）。' },
  { g: '歷史年份', easy: false, stem: 'Armagnac 產地名稱法令是哪一年？', ans: '1909 年', wrong: ['1936 年', '1971 年', '2011 年'], explain: 'wein.plus。' },
  { g: '歷史年份', easy: false, stem: 'Cahors 於 1956 年發生什麼事？', ans: '2 月霜害使幾乎所有葡萄園需要重植', wrong: ['取得 AOC', '根瘤蚜傳入', '阿根廷合作開始'], explain: '之後 Malbec 更為主導（Wine With Seth）。' },
  { g: '地理與氣候', easy: true, stem: 'Monbazillac 的貴腐黴得到哪條支流晨霧的助長？', ans: 'Gardonette', wrong: ['Tarn', 'Adour', 'Lot'], explain: 'Cellar Tours。' },
  { g: '地理與氣候', easy: true, stem: 'Jurançon 的甜酒如何濃縮？', ans: '在藤上風乾（passerillage）', wrong: ['貴腐黴', '加烈', '冷凍'], explain: '厚皮使貴腐黴難以穿透（Wine With Seth）。' },
  { g: '地理與氣候', easy: false, stem: 'Madiran 的年雨量約多少？', ans: '約 1,000 公釐', wrong: ['約 300 公釐', '約 600 公釐', '約 2,000 公釐'], explain: 'Wine With Seth。' },
  { g: '地理與氣候', easy: false, stem: 'Jurançon 藤蔓為何高架整枝到約 2 公尺？', ans: '降低地面霜害風險', wrong: ['增加貴腐', '便於機械採收', '降低酸度'], explain: 'Wine With Seth。' },
  { g: '地理與氣候', easy: false, stem: 'Marcillac 的土壤是？', ans: '富含氧化鐵的紅色黏土 rougiers', wrong: ['白堊', '玄武岩', '沙質沖積土'], explain: 'Wikipedia。' },
  { g: '產業與技術', easy: true, stem: 'Armagnac 出蒸餾器時的酒精度約？', ans: '52–63%', wrong: ['20–30%', '80–90%', '95%'], explain: 'wein.plus；Cognac 約 70%。' },
  { g: '產業與技術', easy: true, stem: 'Côtes de Gascogne 約多少比例出口？', ans: '約 75%', wrong: ['約 10%', '約 25%', '約 50%'], explain: 'Wikipedia、Wine Folly。' },
  { g: '產業與技術', easy: false, stem: 'Plaimont 生產 Saint-Mont AOP 的多少比例（Decanter，資料較舊）？', ans: '98%', wrong: ['10%', '25%', '50%'], explain: 'Decanter。' },
  { g: '產業與技術', easy: false, stem: 'Cahors 約有多少比例外銷？', ans: '約 25%', wrong: ['約 5%', '約 60%', '約 90%'], explain: 'Wine With Seth。' },
  { g: '產業與技術', easy: false, stem: 'Armagnac 裝瓶時降到幾度？', ans: '40%', wrong: ['20%', '30%', '60%'], explain: 'wein.plus。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
