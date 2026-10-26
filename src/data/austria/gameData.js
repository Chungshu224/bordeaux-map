/**
 * 奧地利小遊戲題庫（產區速答／品種配對／分級辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（§ 11 Weingesetz、Vinea Wachau、DAC 規章彙整，詳見
 * AUSTRIA_COURSE_FRAMEWORK.md 第 10–12 節）。來源有出入的數字（Kremstal DAC 年份、Ausbruch 門檻、
 * Eisenberg 年份、面積等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/austriaUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 四個葡萄酒邦（與課程、地圖一致；Wien 單列）──────────────────
export const ZONES = [
  { key: 'noe', label: 'Niederösterreich' },
  { key: 'bgld', label: 'Burgenland' },
  { key: 'wien', label: 'Wien' },
  { key: 'stmk', label: 'Steiermark' }
]

// ── 18 個 DAC ────────────────────────────────────────────────
// hint 只放特徵，不含該 DAC 自己的名稱（「線索 → DAC」題型共用）
export const DAC_ITEMS = [
  { name: 'Wachau',               zone: 'noe',  easy: true,  hint: 'Vinea Wachau 的 Steinfeder／Federspiel／Smaragd 三級，沿多瑙河的狹窄河谷與梯田' },
  { name: 'Kremstal',             zone: 'noe',  easy: true,  hint: '以 Krems 與 Stein 周邊為中心，僅限 Grüner Veltliner 與 Riesling' },
  { name: 'Kamptal',              zone: 'noe',  easy: true,  hint: '以 Langenlois 為中心，2008 年成為 DAC，僅限 Grüner Veltliner 與 Riesling' },
  { name: 'Traisental',           zone: 'noe',  easy: false, hint: '位於多瑙河以南的 Traisen 河谷，僅限 Grüner Veltliner 與 Riesling' },
  { name: 'Weinviertel',          zone: 'noe',  easy: true,  hint: '第一個 DAC（2002 年份），僅限 Grüner Veltliner' },
  { name: 'Wagram',               zone: 'noe',  easy: false, hint: '2021 年成為 DAC，以黃土地形聞名' },
  { name: 'Carnuntum',            zone: 'noe',  easy: true,  hint: '2019 年成為 DAC，紅酒為 Blaufränkisch 與 Zweigelt，白酒為 Pinot Blanc、Chardonnay、Grüner Veltliner' },
  { name: 'Thermenregion',        zone: 'noe',  easy: false, hint: '2023 年成為 DAC，位於 Wien 南方' },
  { name: 'Wiener Gemischter Satz', zone: 'wien', easy: true, hint: '混植混釀（field blend）：至少三個白品種，最大宗不超過 50%，第三品種至少 10%' },
  { name: 'Neusiedlersee',        zone: 'bgld', easy: true,  hint: '以 Zweigelt 為核心的紅酒 DAC，Klassik 至少 85% Zweigelt，並有甜型（2020 年起）' },
  { name: 'Leithaberg',           zone: 'bgld', easy: true,  hint: '紅酒至少 85% Blaufränkisch，白酒為 Pinot Blanc、Chardonnay、Neuburger、Grüner Veltliner' },
  { name: 'Mittelburgenland',     zone: 'bgld', easy: true,  hint: '2005 年成為 DAC，僅限 Blaufränkisch' },
  { name: 'Eisenberg',            zone: 'bgld', easy: false, hint: '位於 Burgenland 最南部，以 Blaufränkisch 為核心' },
  { name: 'Rosalia',              zone: 'bgld', easy: false, hint: '2017 年成為 DAC，Blaufränkisch 與 Zweigelt，並涵蓋粉紅酒' },
  { name: 'Ruster Ausbruch',      zone: 'bgld', easy: false, hint: '以 Rust 為名的甜酒 DAC（2020 年），依酒法須符合 Trockenbeerenauslese 條件' },
  { name: 'Südsteiermark',        zone: 'stmk', easy: true,  hint: '以 Sauvignon Blanc、Welschriesling、Morillon（Chardonnay）等白酒聞名' },
  { name: 'Vulkanland Steiermark', zone: 'stmk', easy: false, hint: '名稱來自火山地形的 Steiermark DAC' },
  { name: 'Weststeiermark',       zone: 'stmk', easy: true,  hint: '納入 Blauer Wildbacher，釀成高酸的 Schilcher 粉紅酒' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = DAC → 四個邦之一（附線索，4 選項）；
//  困難 = 一半是「只給名稱、無線索」的 DAC → 邦，一半是「線索 → DAC」（優先同邦干擾項，不足以其他邦補）
export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? DAC_ITEMS.filter(c => c.easy) : DAC_ITEMS
  const zoneQ = (c, withHint) => ({
    tag: gt('DAC → 葡萄酒邦'),
    stem: c.name,
    hint: withHint ? gt(c.hint) : undefined,
    options: ZONES.map(z => z.label),
    correct: ZONES.findIndex(z => z.key === c.zone),
    explain: gt('{name} 位於「{g}」。', { name: c.name, g: ZONE_LABEL[c.zone] })
  })
  if (diff === 'easy') return shuffle(pool).map(c => zoneQ(c, true))
  const clueQ = c => {
    const same = shuffle(DAC_ITEMS.filter(x => x.zone === c.zone && x.name !== c.name))
    const other = shuffle(DAC_ITEMS.filter(x => x.zone !== c.zone))
    const opts = shuffle([c, ...[...same, ...other].slice(0, 3)])
    return {
      tag: gt('線索 → DAC'),
      stem: gt(c.hint),
      hint: gt('這是哪個 DAC？'),
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
  { name: 'Grüner Veltliner', color: '白', desc: '白胡椒、萊姆與青蘋果；奧地利種植最多的品種（2025 年約 32.3%）' },
  { name: 'Riesling',         color: '白', desc: '檸檬、白桃與礦物感，高酸；Wachau 的 Riesling 多種在上段片麻岩梯田' },
  { name: 'Welschriesling',   color: '白', desc: '種植面積排名第三的品種（2025 年約 6.3%）' },
  { name: 'Weissburgunder',   color: '白', desc: '即 Pinot Blanc，Leithaberg 與 Carnuntum 的白酒允許使用' },
  { name: 'Neuburger',        color: '白', desc: 'Leithaberg 白酒允許的品種之一' },
  { name: 'Sauvignon Blanc',  color: '白', desc: 'Südsteiermark 的代表性白酒品種之一' },
  { name: 'Zweigelt',         color: '紅', desc: 'St. Laurent 與 Blaufränkisch 的雜交（1922 年）；奧地利種植最多的紅葡萄（2025 年約 13.4%）' },
  { name: 'Blaufränkisch',    color: '紅', desc: '結構最強的奧地利紅葡萄（2025 年約 5.8%）；Mittelburgenland 與 Eisenberg 僅限此品種' },
  { name: 'St. Laurent',      color: '紅', desc: 'Zweigelt 的親本之一' },
  { name: 'Blauer Wildbacher', color: '紅', desc: 'Weststeiermark DAC 納入的品種，釀成高酸的 Schilcher 粉紅酒' }
]

// DAC → 核心品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Weinviertel', grape: 'Grüner Veltliner' },
  { dac: 'Mittelburgenland', grape: 'Blaufränkisch' },
  { dac: 'Neusiedlersee', grape: 'Zweigelt' },
  { dac: 'Schilcher（Weststeiermark）', grape: 'Blauer Wildbacher' }
]

// 品種比例與酒精度門檻（課程已查證；Kremstal 年份、Ausbruch 門檻等有出入者不列）
const RATIO_ITEMS = [
  { stem: 'Leithaberg 紅酒的 Blaufränkisch 最低比例？', ans: '85%', wrong: ['50%', '60%', '100%'], explain: 'Leithaberg 紅酒至少 85% Blaufränkisch。' },
  { stem: 'Neusiedlersee Klassik 的 Zweigelt 最低比例？', ans: '85%', wrong: ['50%', '70%', '100%'], explain: 'Klassik 至少 85% Zweigelt；Reserve 為至少 60%。' },
  { stem: 'Neusiedlersee Reserve 的 Zweigelt 最低比例？', ans: '60%', wrong: ['50%', '85%', '100%'], explain: 'Reserve 至少 60% Zweigelt；Klassik 為至少 85%。' },
  { stem: 'Wiener Gemischter Satz 最大宗品種的比例上限？', ans: '50%', wrong: ['30%', '70%', '85%'], explain: '最大宗品種不得超過 50%，第三品種至少 10%。' },
  { stem: 'Wiener Gemischter Satz 第三品種的最低比例？', ans: '10%', wrong: ['5%', '25%', '33%'], explain: '第三品種至少 10%，且至少三個白品種。' },
  { stem: 'Carnuntum DAC 混釀酒須有多少比例來自指定品種？', ans: '至少三分之二', wrong: ['至少一半', '至少四分之三', '必須 100%'], explain: '混釀酒至少三分之二來自 DAC 指定品種。' },
  { stem: 'Weinviertel DAC Klassik 的最低酒精度？', ans: '12%', wrong: ['11%', '12.5%', '13%'], explain: 'Klassik 最低 12%，Reserve 最低 13%。' },
  { stem: 'Weinviertel DAC Reserve 的最低酒精度？', ans: '13%', wrong: ['12%', '12.5%', '14%'], explain: 'Reserve 最低 13%（自 2009 年份起）。' },
  { stem: 'Mittelburgenland DAC Klassik 的酒精度範圍？', ans: '12.5–13%', wrong: ['10–11%', '13–14%', '14.5% 以上'], explain: 'Klassik 12.5–13%，Reserve 最低 13%。' },
  { stem: 'Carnuntum DAC 紅酒的最低酒精度？', ans: '12.0%', wrong: ['11.0%', '12.5%', '13.5%'], explain: 'Carnuntum 紅酒最低 12.0%。' }
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
  return { tag: gt('DAC → 核心品種'), stem: gt('{dac} 的核心品種是？', { dac: gt(item.dac) }), options, correct,
    explain: gt('{dac} 以 {name} 為核心：{desc}。', { dac: gt(item.dac), name: g.name, desc: gt(g.desc) }) }
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

// ── 分級辨識（Wachau 三級、Prädikat、Sekt Austria、產地金字塔與制度數字）────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  // Wachau
  { g: 'Wachau 三級', easy: true,  stem: '哪一級最濃縮，且最早於採收次年 5 月 1 日上市？', ans: 'Smaragd', wrong: ['Steinfeder', 'Federspiel', 'Klassik'], explain: 'Smaragd 至少 12.5% abv、18.5 °KMW，不早於次年 5 月 1 日上市。' },
  { g: 'Wachau 三級', easy: true,  stem: '酒精度 11.5–12.5%、殘糖不超過 4 g/L 的是哪一級？', ans: 'Federspiel', wrong: ['Steinfeder', 'Smaragd', 'Reserve'], explain: 'Federspiel 為 11.5–12.5% abv，殘糖不超過 4 g/L。' },
  { g: 'Wachau 三級', easy: true,  stem: '酒精度最高 11.5% 的最輕盈一級是？', ans: 'Steinfeder', wrong: ['Federspiel', 'Smaragd', 'Klassik'], explain: 'Steinfeder 酒精度最高 11.5%。' },
  { g: 'Wachau 三級', easy: false, stem: 'Smaragd 的酒精度下限？', ans: '12.5%', wrong: ['11.5%', '12%', '13.5%'], explain: 'Smaragd 至少 12.5% abv。' },
  // Prädikat（§ 11 Weingesetz）
  { g: 'KMW 門檻', easy: true,  stem: 'Spätlese 的最低 KMW？', ans: '19', wrong: ['17', '21', '25'], explain: 'Spätlese 最低 19 KMW（完全成熟的葡萄）。' },
  { g: 'KMW 門檻', easy: true,  stem: 'Auslese 的最低 KMW？', ans: '21', wrong: ['19', '25', '30'], explain: 'Auslese 最低 21 KMW（精選、去除未熟與病果）。' },
  { g: 'KMW 門檻', easy: true,  stem: 'Beerenauslese 的最低 KMW？', ans: '25', wrong: ['19', '21', '30'], explain: 'Beerenauslese 最低 25 KMW。' },
  { g: 'KMW 門檻', easy: true,  stem: 'Trockenbeerenauslese 的最低 KMW？', ans: '30', wrong: ['21', '25', '45'], explain: 'Trockenbeerenauslese 最低 30 KMW。' },
  { g: 'KMW 門檻', easy: false, stem: 'Eiswein 的最低 KMW？', ans: '25', wrong: ['19', '21', '30'], explain: 'Eiswein 最低 25 KMW，葡萄須在採收與壓榨時處於冰凍狀態。' },
  { g: 'KMW 門檻', easy: false, stem: 'Kabinett 的最低 KMW？', ans: '17', wrong: ['15', '19', '21'], explain: 'Kabinett 最低 17 KMW，屬 Qualitätswein 而非 Prädikat，且不可加糖。' },
  { g: 'KMW 門檻', easy: false, stem: 'Qualitätswein 的最低 KMW？', ans: '15', wrong: ['12', '17', '19'], explain: 'Qualitätswein 最低 15 KMW；Landwein 為 14。' },
  { g: 'Prädikat 規則', easy: false, stem: '下列哪一個在酒法中「不是」獨立的 Prädikat 類別？', ans: 'Ausbruch', wrong: ['Eiswein', 'Strohwein', 'Beerenauslese'], explain: 'Ausbruch 不是獨立類別：符合 Trockenbeerenauslese 條件且產自 Rust 的酒才可標示 Ruster Ausbruch。' },
  { g: 'Prädikat 規則', easy: false, stem: 'Strohwein 的葡萄一般須風乾至少多久？', ans: '三個月', wrong: ['一週', '一個月', '一年'], explain: '一般至少三個月（兩個月且達 30 KMW 可提早壓榨）。' },
  { g: 'Prädikat 規則', easy: false, stem: 'Eiswein 的葡萄在採收與壓榨時須處於什麼狀態？', ans: '冰凍', wrong: ['貴腐菌感染', '風乾於稻草上', '機械冷卻'], explain: 'Eiswein 只能用採收與壓榨時冰凍的葡萄。' },
  // Sekt Austria
  { g: 'Sekt Austria', easy: true,  stem: 'Sekt Austria Klassik 的酒渣陳年至少多久？', ans: '9 個月', wrong: ['18 個月', '24 個月', '30 個月'], explain: 'Klassik 9、Reserve 18、Grosse Reserve 30 個月。' },
  { g: 'Sekt Austria', easy: true,  stem: 'Sekt Austria Reserve 的酒渣陳年至少多久？', ans: '18 個月', wrong: ['9 個月', '24 個月', '36 個月'], explain: 'Reserve 為傳統法、至少 18 個月，葡萄與基酒來自同一個邦。' },
  { g: 'Sekt Austria', easy: false, stem: 'Sekt Austria Grosse Reserve 的酒渣陳年至少多久？', ans: '30 個月', wrong: ['9 個月', '18 個月', '36 個月'], explain: 'Grosse Reserve 至少 30 個月，採收三年後才可上市。' },
  { g: 'Sekt Austria', easy: false, stem: 'Sekt Austria Grosse Reserve 的產地規定？', ans: '單一酒村', wrong: ['奧地利任一處', '單一個邦', '單一 DAC'], explain: 'Grosse Reserve 來自單一酒村（可再標示 Ried）。' },
  // 產地金字塔與制度
  { g: '產地金字塔', easy: true,  stem: 'DAC 的產地金字塔由寬到窄的順序是？', ans: 'Gebietswein → Ortswein → Riedenwein', wrong: ['Riedenwein → Ortswein → Gebietswein', 'Ortswein → Gebietswein → Riedenwein', 'Gebietswein → Riedenwein → Ortswein'], explain: '產區 → 村莊 → 單一葡萄園。' },
  { g: '產地金字塔', easy: true,  stem: 'Ried 指的是什麼？', ans: '有名稱的單一葡萄園地塊', wrong: ['一種橡木桶', '一個 DAC 的別稱', '一種釀酒法'], explain: '標籤上以 Ried＋名稱表示。' },
  { g: '制度數字', easy: true,  stem: '奧地利目前共有幾個 DAC（本課程以 ÖWM 為準）？', ans: '18', wrong: ['9', '14', '30'], explain: 'Burgenland 6、Niederösterreich 8、Wien 1、Steiermark 3，共 18 個。' },
  { g: '制度數字', easy: false, stem: 'Niederösterreich 有幾個 DAC？', ans: '8', wrong: ['3', '6', '10'], explain: 'Niederösterreich 共 8 個 DAC。' },
  { g: '制度數字', easy: false, stem: 'Burgenland 有幾個 DAC？', ans: '6', wrong: ['3', '8', '10'], explain: 'Burgenland 共 6 個 DAC，含 Ruster Ausbruch。' },
  { g: '制度數字', easy: false, stem: 'ÖTW 成立於哪一年？', ans: '1992', wrong: ['1985', '2002', '2020'], explain: 'ÖTW 於 1992 年由多瑙河沿岸酒莊成立，是民間協會而非法定分級。' },
  { g: '制度數字', easy: true,  stem: '奧地利第一個 DAC 是哪個產區？', ans: 'Weinviertel', wrong: ['Wachau', 'Kamptal', 'Carnuntum'], explain: 'Weinviertel 自 2002 年份起。' },
  { g: '制度數字', easy: false, stem: 'Wachau DAC 自哪一年份起強制實施？', ans: '2020', wrong: ['2002', '2013', '2023'], explain: 'Wachau DAC 自 2020 年份起強制實施，2021 年 8 月核准。' },
  { g: '制度數字', easy: false, stem: 'Wiener Gemischter Satz 於哪一年成為 DAC？', ans: '2013', wrong: ['2002', '2008', '2018'], explain: 'Wiener Gemischter Satz 為 2013 年。' },
  { g: '制度數字', easy: false, stem: 'Steiermark 的三個 DAC 於哪一年成立？', ans: '2018', wrong: ['2008', '2013', '2023'], explain: 'Vulkanland、Süd-、Weststeiermark 均為 2018 年。' },
  { g: '制度數字', easy: false, stem: 'Carnuntum DAC 於哪一年成立？', ans: '2019', wrong: ['2005', '2013', '2023'], explain: 'Carnuntum DAC 為 2019 年。' },
  { g: '制度數字', easy: false, stem: 'Thermenregion DAC 於哪一年成立？', ans: '2023', wrong: ['2013', '2018', '2021'], explain: 'Thermenregion DAC 為 2023 年。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
