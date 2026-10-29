/**
 * 朗格多克—魯西永小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 LANGUEDOC_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（葡萄園面積、La Livinière 年份與面積、Corbières 的 Carignan 上限、Faugères 的 AOC 年份、
 * Collioure 年份、Montpeyroux 層級、「第一個法定產區」、2025 年野火規模等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/languedocUi/index.js'

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
  { key: 'west', label: '西部（Aude 與 Limoux）' },
  { key: 'east', label: '中東部（Hérault 與沿海）' },
  { key: 'roussillon', label: '魯西永（乾型酒）' },
  { key: 'vdn', label: '魯西永（VDN）' }
]

// ── 產地（AOC／子區）────────────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Corbières', zone: 'west', easy: true, hint: '約 13,500 公頃、橫跨 Aude 的 87 個村鎮，1985 年列為 AOC，約九成為紅酒' },
  { name: 'Corbières-Boutenac', zone: 'west', easy: false, hint: '2005 年成為獨立 AOC，以 Carignan 為核心' },
  { name: 'Fitou', zone: 'west', easy: true, hint: '兩個相距約 20 公里的區塊（沿海 Maritime 與內陸 Hautes-Corbières），Carignan 至少 40%' },
  { name: 'Minervois', zone: 'west', easy: true, hint: '比 Corbières 涼，Carignan 加 Cinsault 合計上限 40%，Syrah 加 Mourvèdre 至少 20%' },
  { name: 'Limoux', zone: 'west', easy: true, hint: '海拔 150–400 公尺，Blanquette 的 Mauzac 至少 90%，Crémant 1990 年成為 AOC' },
  { name: 'Cabardès', zone: 'west', easy: false, hint: '2007 年隨 Languedoc AOC 更名而被納入名單，位於產區西緣' },
  { name: 'La Clape', zone: 'east', easy: true, hint: '2015 年獨立 AOC，離海不到 12 公里，白酒 Bourboulenc 至少 40%' },
  { name: 'Saint-Chinian', zone: 'east', easy: true, hint: '北部片岩、南部黏土與白堊，2004 年承認 Berlou 與 Roquebrun 兩個子區' },
  { name: 'Faugères', zone: 'east', easy: true, hint: '以片岩為主、約 1,800 公頃、七個村鎮，片岩可保水至體積的三分之一' },
  { name: 'Pézenas', zone: 'east', easy: false, hint: 'Languedoc 規格中 11 個 DGC 之一' },
  { name: 'Terrasses du Larzac', zone: 'east', easy: true, hint: '2014 年獨立 AOC，只產紅酒，夏季日夜溫差可超過 20°C，最高 45 hL/ha' },
  { name: 'Pic Saint-Loup', zone: 'east', easy: true, hint: '2017 年 1 月成為 AOC，只產紅與粉紅，涼而濕，紅酒 Syrah 至少 50%' },
  { name: 'Picpoul de Pinet', zone: 'east', easy: true, hint: '純白酒、100% Piquepoul Blanc，位於 Thau 潟湖旁' },
  { name: 'Muscat de Frontignan', zone: 'east', easy: false, hint: '1936 年成為 AOC，最早列為 AOC 的四個 VDN 之一，位於 Frontignan 與 Vic-la-Gardiole' },
  { name: 'Côtes du Roussillon', zone: 'roussillon', easy: true, hint: '涵蓋 Roussillon 平原的不加烈紅、粉紅與部分白酒' },
  { name: 'Côtes du Roussillon-Villages', zone: 'roussillon', easy: false, hint: '限於 Roussillon 北部三分之一，只產紅酒，含 Agly 河谷村鎮但不含 Maury 與 Rivesaltes' },
  { name: 'Côtes du Roussillon Les Aspres', zone: 'roussillon', easy: false, hint: '為南部較優質的酒而設的名稱' },
  { name: 'Collioure', zone: 'roussillon', easy: true, hint: '邊界與 Banyuls 相同，涵蓋四個村鎮，以 Grenache、Syrah、Mourvèdre 的紅酒為主' },
  { name: 'Banyuls', zone: 'vdn', easy: true, hint: '梯田葡萄園，Grenache Noir 至少 50%，Grand Cru 至少 75% 且須至少 30 個月熟成' },
  { name: 'Maury', zone: 'vdn', easy: true, hint: '黑色片岩，Grenache Noir 至少 75%，2011 年份起可做辛口的 Sec' },
  { name: 'Rivesaltes', zone: 'vdn', easy: false, hint: '1936 年創立、1972 年整合數個較小名稱，風格有 Ambré、Tuilé、Grenat 與 Hors d\'âge' }
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
  { name: 'Grenache', color: '紅', desc: 'Languedoc AOC 的主要品種之一；Banyuls Grand Cru 與 Maury 的 Grenache Noir 至少 75%' },
  { name: 'Syrah', color: '紅', desc: 'Pic Saint-Loup 紅酒至少 50%；與 Mourvèdre 合計在 Languedoc AOC 紅酒至少 20%' },
  { name: 'Mourvèdre', color: '紅', desc: 'Languedoc AOC 的主要品種之一，與 Syrah 合計至少 20%，也是 Collioure 的主要品種' },
  { name: 'Carignan', color: '紅', desc: '源自西班牙 Aragón、名稱來自 Cariñena；Fitou 規定至少 40%，Languedoc AOC 紅酒上限 40%' },
  { name: 'Cinsault', color: '紅', desc: 'Languedoc AOC 紅酒與 Carignan 各上限 40%，常用於粉紅酒與輕盈紅酒' },
  { name: 'Piquepoul Blanc', color: '白', desc: 'Picpoul de Pinet 100% 使用的白葡萄，在 Languedoc AOC 白酒中上限 50%' },
  { name: 'Mauzac', color: '白', desc: 'Blanquette de Limoux 至少 90%，Méthode Ancestrale 則是 100%' },
  { name: 'Bourboulenc', color: '白', desc: 'La Clape 白酒至少 40%，與 Grenache Blanc 合計至少 60%' },
  { name: 'Grenache Blanc', color: '白', desc: 'Rivesaltes 白葡萄品種之一，也在 Roussillon 白酒中提供酒體' },
  { name: 'Muscat', color: '白', desc: 'Muscat de Rivesaltes 只能用 Muscat 品種；Frontignan、Mireval、Lunel 也產 Muscat 甜酒' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Picpoul de Pinet', grape: 'Piquepoul Blanc' },
  { dac: 'Blanquette de Limoux', grape: 'Mauzac' },
  { dac: 'La Clape（白酒）', grape: 'Bourboulenc' },
  { dac: 'Pic Saint-Loup', grape: 'Syrah' },
  { dac: 'Fitou', grape: 'Carignan' },
  { dac: 'Muscat de Rivesaltes', grape: 'Muscat' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'Fitou 規定 Carignan 最低須占多少比例？', ans: '40%', wrong: ['20%', '60%', '80%'], explain: 'Wine With Seth：Carignan 至少 40%；Carignan 加 Grenache 至少 60%，各至少 20%。' },
  { stem: 'Pic Saint-Loup 紅酒的 Syrah 最低比例是？', ans: '50%', wrong: ['30%', '75%', '90%'], explain: 'Wine With Seth：紅酒 Syrah 至少 50%（粉紅酒 30%）。' },
  { stem: 'Banyuls Grand Cru 的 Grenache Noir 最低比例是？', ans: '75%', wrong: ['50%', '60%', '90%'], explain: 'Banyuls 本身至少 50%，Grand Cru 至少 75% 且須至少 30 個月熟成。' },
  { stem: 'Crémant de Limoux 至少須在酒渣上陳年多久？', ans: '12 個月', wrong: ['3 個月', '9 個月', '24 個月'], explain: 'Wine With Seth：12 個月，高於歐盟 Crémant 的 9 個月下限。' },
  { stem: 'Languedoc AOC 紅酒中，Carignan 的上限是？', ans: '40%', wrong: ['10%', '20%', '75%'], explain: '2023 年規格：Carignan 與 Cinsaut 各上限 40%。' }
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

// ── 制度辨識（原產地制度、歷史年份、地理與氣候、產業）────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '原產地制度', easy: true, stem: 'Pays d\'Oc IGP 准許多少個葡萄品種？', ans: '58 個', wrong: ['12 個', '28 個', '108 個'], explain: 'Wine With Seth：58 個。' },
  { g: '原產地制度', easy: true, stem: 'IGP 酒標標示品種，該品種至少須占多少？', ans: '85%', wrong: ['51%', '75%', '100%'], explain: 'Wine With Seth：標示品種需至少 85%。' },
  { g: '原產地制度', easy: true, stem: '2007 年 4 月 30 日的法令將哪個名稱改為 Languedoc？', ans: 'Coteaux du Languedoc', wrong: ['Pays d\'Oc', 'Vin de France', 'Grès de Montpellier'], explain: '該法令同時納入 Corbières、Minervois 等區（Languedoc AOC 頁）。' },
  { g: '原產地制度', easy: true, stem: 'Picpoul de Pinet 的規定是？', ans: '純白酒、100% Piquepoul Blanc', wrong: ['只有粉紅酒', '紅白皆可、Syrah 為主', '氣泡酒、Mauzac 至少 90%'], explain: '2013 年 9 月 23 日有獨立規格。' },
  { g: '原產地制度', easy: true, stem: 'VDN（Vin Doux Naturel）發酵中加入的烈酒比例約為？', ans: '5–10%', wrong: ['1–2%', '20–25%', '40–50%'], explain: '5–10% 葡萄烈酒（至少 95% abv）中止發酵（Wine With Seth）。' },
  { g: '原產地制度', easy: false, stem: 'Vin de Pays 全面改稱 IGP 的日期是？', ans: '2009 年 8 月 1 日', wrong: ['1987 年 1 月 1 日', '2007 年 4 月 30 日', '2016 年 1 月 1 日'], explain: '依歐盟 607/2009 號規則（Wine With Seth）。' },
  { g: '原產地制度', easy: false, stem: '75 個 IGP 中，省級（departmental）IGP 有幾個？', ans: '28 個', wrong: ['6 個', '41 個', '75 個'], explain: '6 個大區 + 28 個省級 + 41 個小區。' },
  { g: '原產地制度', easy: false, stem: 'Languedoc AOC 紅酒中，Mourvèdre 加 Syrah 至少須占？', ans: '20%', wrong: ['5%', '40%', '75%'], explain: '2023 年規格；主要品種合計至少 50%。' },
  { g: '原產地制度', easy: false, stem: 'Terrasses du Larzac 的產量上限是？', ans: '45 hL/ha', wrong: ['30 hL/ha', '60 hL/ha', '80 hL/ha'], explain: '低於 Languedoc AOC 紅酒的基礎 50 hL/ha。' },
  { g: '歷史年份', easy: true, stem: 'Canal du Midi 通航於哪一年？', ans: '1681 年', wrong: ['1531 年', '1868 年', '1985 年'], explain: '連接地中海與大西洋（Wine With Seth）。' },
  { g: '歷史年份', easy: true, stem: '阿爾及利亞獨立、終止摻調阿爾及利亞酒是哪一年？', ans: '1962 年', wrong: ['1907 年', '1938 年', '2007 年'], explain: 'Wikipedia：1962 年。' },
  { g: '歷史年份', easy: false, stem: 'La Clape 在哪一年成為獨立 AOC？', ans: '2015 年', wrong: ['1985 年', '2007 年', '2017 年'], explain: '2015 年 6 月 9 日（Wine With Seth）。' },
  { g: '歷史年份', easy: false, stem: 'Terrasses du Larzac 升為獨立 AOC 是哪一年？', ans: '2014 年', wrong: ['2004 年', '2007 年', '2017 年'], explain: '2004 年為地理名稱，2014 年升為獨立 AOC。' },
  { g: '歷史年份', easy: false, stem: 'Maury Sec 從哪個年份起設立？', ans: '2011 年份', wrong: ['1936 年份', '1971 年份', '2017 年份'], explain: '允許以相同品種做不甜的靜態酒（Wikipedia）。' },
  { g: '歷史年份', easy: false, stem: 'Corbières-Boutenac 成為獨立 AOC 是哪一年？', ans: '2005 年', wrong: ['1948 年', '1985 年', '2017 年'], explain: 'Gérard Bertrand 與 wein.plus 一致為 2005 年。' },
  { g: '地理與氣候', easy: true, stem: 'Tramontane 是什麼風？', ans: '乾燥的西北風', wrong: ['潮濕的東南風', '冬季暴風雪', '沙漠熱風'], explain: '在 Pyrénées 與 Massif Central 之間被導引，抑制病害。' },
  { g: '地理與氣候', easy: true, stem: 'Marin 風通常帶來什麼？', ans: '春秋的濕氣', wrong: ['極乾熱氣', '降雪', '沙塵'], explain: '溫暖的東南海風。' },
  { g: '地理與氣候', easy: true, stem: 'Faugères 的主要土壤是？', ans: '片岩', wrong: ['石灰岩', '玄武岩', '沙'], explain: '約 1,800 公頃（Wikipedia）。' },
  { g: '地理與氣候', easy: false, stem: 'Fitou 的兩個區塊是？', ans: 'Maritime 與 Hautes-Corbières', wrong: ['Nord 與 Sud', 'Berlou 與 Roquebrun', 'Terrasses 與 Grès'], explain: '兩區相距約 20 公里。' },
  { g: '地理與氣候', easy: false, stem: 'Pic Saint-Loup 的氣候特徵是？', ans: '涼而濕、晝夜溫差大', wrong: ['極乾熱', '沙漠氣候', '終年無雨'], explain: '年雨量約 900–1,000 公釐。' },
  { g: '地理與氣候', easy: false, stem: 'Collioure 與哪個產區的邊界相同？', ans: 'Banyuls', wrong: ['Maury', 'Rivesaltes', 'Fitou'], explain: '涵蓋 Banyuls、Cerbère、Collioure、Port-Vendres 四個村鎮。' },
  { g: '產業與品種', easy: true, stem: 'Languedoc 與 Roussillon 的產量比例大約是？', ans: '90 : 10', wrong: ['50 : 50', '10 : 90', '70 : 30'], explain: 'Languedoc 約 90%、Roussillon 約 10%（Wine With Seth）。' },
  { g: '產業與品種', easy: false, stem: '2024 年 11 月的永久拔樹方案，每公頃補助上限是？', ans: '4,000 歐元', wrong: ['400 歐元', '1,000 歐元', '40,000 歐元'], explain: '預算上限 1.2 億歐元（Pleinchamp）。' },
  { g: '產業與品種', easy: false, stem: 'Rivesaltes 的 Hors d\'âge 指的是？', ans: 'Ambré 或 Tuilé 陳年 5 年', wrong: ['當年新酒', '鋼槽陳 3 個月', '氣泡 VDN'], explain: 'Wikipedia：Ambré 或 Tuilé 陳年五年。' },
  { g: '產業與品種', easy: false, stem: '2023 年 8 月底熱浪有幾天超過 40°C？', ans: '4 天', wrong: ['1 天', '2 天', '10 天'], explain: 'Decanter：四天，果粒乾縮、產量崩落。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
