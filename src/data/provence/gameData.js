/**
 * 普羅旺斯與科西嘉小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 PROVENCE_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（日照時數、科西嘉面積、Côtes de Provence 品種占比、Bandol 色彩比例、
 * Ajaccio 細節、Vin de Corse 成立年、IGP 占比等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/provenceUi/index.js'

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
  { key: 'west', label: '普羅旺斯西部與海岸' },
  { key: 'east', label: '普羅旺斯東部與內陸' },
  { key: 'corsica', label: '科西嘉' }
]

// ── 產地（AOC／補充地理名稱／城鎮）──────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: "Coteaux d'Aix-en-Provence", zone: 'west', easy: true, hint: '1985 年認定 AOC、INAO 列出 49 個村的西部產區，白酒的 Vermentino 至少 50%' },
  { name: 'Les Baux-de-Provence', zone: 'west', easy: true, hint: 'Alpilles 的小產區，紅酒的 Cabernet Sauvignon 最多 20%，Trévallon 因此離開 AOC' },
  { name: 'Bandol', zone: 'west', easy: true, hint: '面海的石砌梯田，紅酒以 Mourvèdre 為主（至少 50%）並在橡木桶陳放至少 18 個月' },
  { name: 'Cassis', zone: 'west', easy: false, hint: '馬賽以東的港口小鎮，Cap Canaille 懸崖之下，以白酒為重，AOC 1936 年' },
  { name: 'Palette', zone: 'west', easy: false, hint: 'Aix 附近的極小產區，Château Simone 為代表，許可品種多達二十餘種' },
  { name: 'Côtes de Provence', zone: 'east', easy: true, hint: '最大的 AOC，約九成產量是玫瑰紅，基本 AOC 產量 55 hl/ha' },
  { name: 'Sainte-Victoire', zone: 'east', easy: false, hint: 'Côtes de Provence 的補充地理名稱，只做紅酒與玫瑰紅，Grenache 與 Syrah 合計至少 50%' },
  { name: 'Fréjus', zone: 'east', easy: false, hint: 'Côtes de Provence 的補充地理名稱，玫瑰紅需要至少 20% 的 Tibouren' },
  { name: 'La Londe', zone: 'east', easy: true, hint: 'Côtes de Provence 五個地名中唯一也做白酒的，Vermentino 至少 50%' },
  { name: 'Pierrefeu', zone: 'east', easy: false, hint: 'Côtes de Provence 的補充地理名稱，2013 年成立，紅酒產量 45 hl/ha' },
  { name: 'Notre-Dame des Anges', zone: 'east', easy: false, hint: 'Côtes de Provence 最新的補充地理名稱，2019 年成立，Carignan 最多 10%' },
  { name: 'Coteaux Varois en Provence', zone: 'east', easy: false, hint: 'Var 的 28 個村，內陸高地，1993 年成為 AOC，2005 年改為現名' },
  { name: 'Bellet', zone: 'east', easy: false, hint: '尼斯後方的小產區，白酒以 Rolle 為主，紅酒用 Braquet 與 Folle Noire' },
  { name: 'Pierrevert', zone: 'east', easy: false, hint: 'Durance 河谷的高海拔產區，介於普羅旺斯與 Rhône 之間' },
  { name: 'Patrimonio', zone: 'corsica', easy: true, hint: '1968 年成立，科西嘉第一個 AOC，紅酒與玫瑰紅以 Nielluccio 為主' },
  { name: 'Muscat du Cap Corse', zone: 'corsica', easy: true, hint: 'AOC 1993 年，用 Muscat à petits grains blancs 做成的 vin doux naturel' },
  { name: 'Coteaux du Cap Corse', zone: 'corsica', easy: false, hint: '北端半島，片岩土壤與強勁海風，AOC 1993 年，以 Vermentino 白酒為主' },
  { name: 'Ajaccio', zone: 'corsica', easy: true, hint: '西岸花崗岩土壤，以 Sciaccarellu 為標誌品種，帶胡椒與香料感' },
  { name: 'Calvi', zone: 'corsica', easy: false, hint: 'Vin de Corse 的地名之一，位於西北海岸，花崗岩與砂質土壤' },
  { name: 'Sartène', zone: 'corsica', easy: false, hint: '南部內陸花崗岩地帶，紅酒結構較紮實，用 Sciaccarellu 與 Grenache' },
  { name: 'Porto-Vecchio', zone: 'corsica', easy: false, hint: '東南海岸，玫瑰紅與白酒清新，Vermentino 表現佳' }
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
  { name: 'Mourvèdre', color: '紅葡萄', desc: 'Bandol 紅酒的主角（至少 50%），晚熟、單寧強，適合陳年' },
  { name: 'Grenache', color: '紅葡萄', desc: "Coteaux d'Aix 要求至少 20%，也是 Sainte-Victoire 的主要品種之一（與 Syrah 合計至少 50%）" },
  { name: 'Tibouren', color: '紅葡萄', desc: 'Fréjus 玫瑰紅至少需要 20% 的普羅旺斯在地品種' },
  { name: 'Carignan', color: '紅葡萄', desc: 'Notre-Dame des Anges 地名最多可用 10%' },
  { name: 'Braquet', color: '紅葡萄', desc: 'Bellet 的在地紅葡萄，與 Folle Noire 並列' },
  { name: 'Nielluccio', color: '紅葡萄', desc: '即 Sangiovese，科西嘉 Patrimonio 紅酒與玫瑰紅的主角' },
  { name: 'Sciaccarellu', color: '紅葡萄', desc: '科西嘉 Ajaccio 的標誌紅葡萄，帶胡椒與香料感、色淺柔和' },
  { name: 'Vermentino', color: '白葡萄', desc: "普羅旺斯與科西嘉白酒的要角，La Londe 與 Coteaux d'Aix 白酒至少 50%，普羅旺斯又稱 Rolle" },
  { name: 'Clairette', color: '白葡萄', desc: 'Côtes de Provence 白酒的主要品種之一，與 Sémillon、Ugni Blanc、Vermentino 並列' },
  { name: 'Muscat à petits grains blancs', color: '白葡萄', desc: 'Muscat du Cap Corse 天然甜酒的原料' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Bandol 紅酒', grape: 'Mourvèdre' },
  { dac: 'Fréjus 玫瑰紅', grape: 'Tibouren' },
  { dac: 'Patrimonio 紅酒', grape: 'Nielluccio' },
  { dac: 'Ajaccio', grape: 'Sciaccarellu' },
  { dac: 'Muscat du Cap Corse', grape: 'Muscat à petits grains blancs' },
  { dac: 'Bellet 紅酒（與 Folle Noire）', grape: 'Braquet' },
  { dac: 'La Londe 白酒', grape: 'Vermentino' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'Côtes de Provence 基本 AOC 的產量上限（基本值）？', ans: '55 hl/ha', wrong: ['35 hl/ha', '45 hl/ha', '75 hl/ha'], explain: '55 hl/ha（上限 66）。' },
  { stem: 'Pierrefeu 紅酒的產量？', ans: '45 hl/ha', wrong: ['35 hl/ha', '55 hl/ha', '60 hl/ha'], explain: '45 hl/ha；玫瑰紅為 50。' },
  { stem: "Coteaux d'Aix-en-Provence 的產量？", ans: '60 hl/ha', wrong: ['40 hl/ha', '45 hl/ha', '50 hl/ha'], explain: 'INAO：60 hl/ha。' },
  { stem: 'Les Baux 紅酒的 Cabernet Sauvignon 上限？', ans: '20%', wrong: ['5%', '50%', '90%'], explain: '最多 20%。' },
  { stem: 'Fréjus 玫瑰紅至少需要多少 Tibouren？', ans: '20%', wrong: ['5%', '10%', '50%'], explain: 'INAO：至少 20%。' },
  { stem: 'La Londe 白酒的 Vermentino 至少占多少？', ans: '50%', wrong: ['10%', '20%', '90%'], explain: '至少 50%。' },
  { stem: 'Bandol 紅酒的 Mourvèdre 至少占多少？', ans: '50%', wrong: ['20%', '30%', '90%'], explain: '至少 50%。' },
  { stem: 'Bandol 紅酒在橡木桶至少陳放多久？', ans: '18 個月', wrong: ['6 個月', '12 個月', '36 個月'], explain: '至少 18 個月。' },
  { stem: '補充地理名稱玫瑰紅的最低天然酒精度？', ans: '11.5%', wrong: ['10%', '11%', '12.5%'], explain: '地名玫瑰紅 11.5%、紅酒 12%；基本 AOC 為 11%。' },
  { stem: 'Coteaux Varois en Provence 有幾個村？', ans: '28 個', wrong: ['11 個', '49 個', '84 個'], explain: 'Var 的 28 個村。' },
  { stem: "Coteaux d'Aix-en-Provence 的 INAO 村數？", ans: '49 個', wrong: ['7 個', '28 個', '84 個'], explain: 'Bouches-du-Rhône 47 個、Var 2 個。' },
  { stem: 'Notre-Dame des Anges 的 Carignan 最多可用？', ans: '10%', wrong: ['2%', '20%', '50%'], explain: '最多 10%。' }
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
  { g: '法規與規格', easy: true, stem: '哪個地名在 Côtes de Provence 五個地名中也做白酒？', ans: 'La Londe', wrong: ['Fréjus', 'Pierrefeu', 'Sainte-Victoire'], explain: '其他四個只做紅酒與玫瑰紅。' },
  { g: '法規與規格', easy: true, stem: 'Côtes de Provence 的補充地理名稱屬於哪一層？', ans: 'AOC 內更嚴格的層級', wrong: ['獨立的 AOC', 'IGP', 'VDQS'], explain: '地名＝更低產量、更高成熟度、更窄的品種規則。' },
  { g: '法規與規格', easy: true, stem: 'Les Baux 規格對除草劑的規定？', ans: '禁用', wrong: ['必須使用', '僅限白酒', '無規定'], explain: 'INAO 文本只規定禁用除草劑。' },
  { g: '法規與規格', easy: false, stem: 'Domaine de Trévallon 為何離開 Les Baux AOC？', ans: '不接受 Cabernet 20% 上限', wrong: ['產量太低', '價格因素', '氣候變遷'], explain: '1993 年拒絕遵守 Cabernet 20% 上限，改用 IGP Alpilles。' },
  { g: '法規與規格', easy: false, stem: 'Muscat du Cap Corse 屬於哪一類酒款？', ans: '天然甜酒（VDN）', wrong: ['氣泡酒', '乾紅酒', '橘酒'], explain: '用 Muscat à petits grains blancs 做成。' },
  { g: '法規與規格', easy: false, stem: '地名與基本 AOC 的產量差異？', ans: '地名至少低 5 hl/ha', wrong: ['地名較高', '兩者相同', '地名不設上限'], explain: 'INAO：地名的產量至少比 AOC 低 5 hl/ha。' },
  { g: '歷史年份', easy: true, stem: 'Bandol 成為 AOC 的年份？', ans: '1941 年', wrong: ['1936 年', '1985 年', '2005 年'], explain: '1941 年。' },
  { g: '歷史年份', easy: true, stem: "Coteaux d'Aix-en-Provence 成為 AOC 的年份？", ans: '1985 年', wrong: ['1956 年', '1993 年', '1995 年'], explain: '1985 年 12 月 24 日；1956 年是 VDQS。' },
  { g: '歷史年份', easy: true, stem: 'Patrimonio 成立的年份？', ans: '1968 年', wrong: ['1941 年', '1985 年', '1993 年'], explain: '科西嘉第一個 AOC。' },
  { g: '歷史年份', easy: false, stem: 'Cassis 的 AOC 年份？', ans: '1936 年', wrong: ['1941 年', '1948 年', '1993 年'], explain: '法國最早的 AOC 之一。' },
  { g: '歷史年份', easy: false, stem: 'Palette 的 AOC 年份？', ans: '1948 年', wrong: ['1936 年', '1941 年', '1995 年'], explain: '1948 年。' },
  { g: '歷史年份', easy: false, stem: 'Les Baux-de-Provence 的 AOC 年份？', ans: '1995 年', wrong: ['1985 年', '1993 年', '2005 年'], explain: '1995 年 4 月 20 日。' },
  { g: '歷史年份', easy: false, stem: 'Coteaux Varois 成為 AOC 的年份？', ans: '1993 年', wrong: ['1974 年', '1984 年', '2005 年'], explain: '1974 vin de pays → 1984 VDQS → 1993 AOC。' },
  { g: '歷史年份', easy: false, stem: 'Notre-Dame des Anges 地名成立於？', ans: '2019 年', wrong: ['2005 年', '2008 年', '2013 年'], explain: '2019 年。' },
  { g: '歷史年份', easy: true, stem: 'Phocaeans 在 Marseille 建立殖民港約在何時？', ans: '約公元前 600 年', wrong: ['約公元前 125 年', '約 1769 年', '約 1955 年'], explain: '羅馬 Provincia 約在公元前 125 年。' },
  { g: '栽培與釀造', easy: true, stem: 'Mistral 對葡萄園的主要好處？', ans: '降低病害壓力', wrong: ['增加濕度', '防止乾旱', '增加雨量'], explain: '吹乾葡萄、降低病害。' },
  { g: '栽培與釀造', easy: true, stem: '普羅旺斯玫瑰紅的代表手法？', ans: '直接壓榨', wrong: ['長時間浸皮', '紅白混調', '碳酸浸皮'], explain: '接觸皮極短，色淺細緻。' },
  { g: '栽培與釀造', easy: false, stem: '玫瑰紅通常避免什麼？', ans: '乳酸發酵', wrong: ['低溫發酵', '早採', '冷卻壓榨'], explain: '維持清脆酸度。' },
  { g: '栽培與釀造', easy: false, stem: 'Bandol 的石砌梯田稱為？', ans: 'Restanques', wrong: ['Calanques', 'Garrigue', 'Clos'], explain: '面海的圓形劇場式坡地。' },
  { g: '栽培與釀造', easy: false, stem: 'Patrimonio 的土壤？', ans: '石灰黏土', wrong: ['花崗岩', '片岩', '玄武岩'], explain: 'Saint-Florent 後方的石灰黏土坡地。' },
  { g: '栽培與釀造', easy: false, stem: 'Cap Corse 的土壤？', ans: '片岩', wrong: ['石灰黏土', '玄武岩', '泥炭'], explain: '山勢陡峭、片岩土壤、海風強。' },
  { g: '市場與產業', easy: true, stem: 'Côtes de Provence 2025 年玫瑰紅約占產量？', ans: '約九成', wrong: ['約一成', '約一半', '100%'], explain: '814,611／902,027 hl。' },
  { g: '市場與產業', easy: false, stem: "Coteaux d'Aix 2025 年玫瑰紅約占產量？", ans: '約 84%', wrong: ['約 40%', '約 60%', '100%'], explain: '182,412／216,459 hl。' },
  { g: '市場與產業', easy: true, stem: 'CIVP 是什麼？', ans: '普羅旺斯葡萄酒行業協會', wrong: ['法國國家酒類管理局', '合作社品牌', '酒商'], explain: '科西嘉的對應組織是 CIV Corse。' },
  { g: '市場與產業', easy: false, stem: 'Côtes de Provence 2025 年產量？', ans: '902,027 hl', wrong: ['90,203 hl', '216,459 hl', '9,020,270 hl'], explain: 'CIVP 2025。' },
  { g: '市場與產業', easy: false, stem: '科西嘉酒款差異化的重點？', ans: '在地品種', wrong: ['國際品種', '低價', '大量生產'], explain: 'Nielluccio、Sciaccarellu、Vermentino。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
