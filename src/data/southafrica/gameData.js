/**
 * 南非小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 SOUTHAFRICA_COURSE_FRAMEWORK.md 第 10–12 節）。
 * 來源有出入的數字（Stellenbosch 面積、District／Ward 總數、Geographical Unit 數量、Swellendam 歸屬、
 * 甜酒糖度門檻、Pinotage 雜交年份等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/southafricaUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 五大 Region（與課程、地圖一致）──────────────────────────
export const ZONES = [
  { key: 'coastal', label: 'Coastal Region' },
  { key: 'southcoast', label: 'Cape South Coast' },
  { key: 'breede', label: 'Breede River Valley' },
  { key: 'kleinkaroo', label: 'Klein Karoo' },
  { key: 'olifants', label: 'Olifants River' }
]

// ── 產地（District／Ward）────────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Stellenbosch', zone: 'coastal', easy: true, hint: '1679 年由 Simon van der Stel 創立，山坡為風化花崗岩，旗艦品種是 Cabernet Sauvignon' },
  { name: 'Paarl', zone: 'coastal', easy: true, hint: '因 Paarl Rock 得名，比 Stellenbosch 更內陸、更溫暖；KWV 於 1918 年設於此' },
  { name: 'Franschhoek Valley', zone: 'coastal', easy: true, hint: '2010 年起為獨立 District，Huguenot 自 1688 年抵達；Semillon 老藤與 Cap Classique 是特色' },
  { name: 'Swartland', zone: 'coastal', easy: true, hint: '炎熱乾燥的旱作老藤產區，Swartland Revolution（2010–2015）帶動新浪潮' },
  { name: 'Tulbagh', zone: 'coastal', easy: false, hint: '被群山包圍的盆地 District（1971 年劃定），1969 年 9 月 29 日的地震重創城鎮' },
  { name: 'Wellington', zone: 'coastal', easy: false, hint: '2012 年 9 月 21 日從 Paarl 獨立成 District' },
  { name: 'Constantia', zone: 'coastal', easy: true, hint: '開普最古老的葡萄酒產地之一，Vin de Constance 以 Muscat de Frontignan 釀成，2017 年起屬 Cape Town District' },
  { name: 'Durbanville', zone: 'coastal', easy: false, hint: '1989 年在 Tygerberg 內劃界，2017 年併入 Cape Town District，Sauvignon Blanc 是代表品種' },
  { name: 'Walker Bay', zone: 'southcoast', easy: true, hint: '2004 年 5 月升為 District，Hemel-en-Aarde 的 Pinot Noir 與 Chardonnay 聞名' },
  { name: 'Hemel-en-Aarde Valley', zone: 'southcoast', easy: false, hint: '有 Valley、Upper Valley、Ridge 三個 Ward，Tim Hamilton Russell 1975 年勘查此地' },
  { name: 'Elgin', zone: 'southcoast', easy: true, hint: '海拔約 200 至 400 公尺的涼爽高地，長期是蘋果與梨產區，2011 年升為獨立 District' },
  { name: 'Elim', zone: 'southcoast', easy: false, hint: '距海約 15 至 17 公里、被稱為非洲最南端的產區，第一支 WO 酒是 1999 年 Sauvignon Blanc' },
  { name: 'Robertson', zone: 'breede', easy: true, hint: 'Breede 河貫穿、富含石灰的土壤，高度依賴灌溉，Chardonnay 是主要品種' },
  { name: 'Worcester', zone: 'breede', easy: false, hint: '被視為最重要的白蘭地產區，屬 Breede River Valley' },
  { name: 'Calitzdorp', zone: 'kleinkaroo', easy: true, hint: 'Cape Port 風格酒的中心，年降雨約 200 mm，須用「Cape」前綴稱呼' },
  { name: 'Montagu', zone: 'kleinkaroo', easy: false, hint: 'Klein Karoo 西端、位於 Route 62 的獨立 Ward，土壤淺而含石灰質' },
  { name: 'Citrusdal Mountain', zone: 'olifants', easy: false, hint: '高海拔 District，內有 Piekenierskloof 與 Cederberg Ward' },
  { name: 'Vredendal', zone: 'olifants', easy: false, hint: '沿海平原的獨立 Ward，年降雨約 150 至 200 mm，需灌溉，合作酒廠處理大部分產量' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = 產地 → 五大 Region 之一（附線索）；
//  困難 = 一半是「只給名稱、無線索」的產地 → Region，一半是「線索 → 產地」
export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? DAC_ITEMS.filter(c => c.easy) : DAC_ITEMS
  const zoneQ = (c, withHint) => ({
    tag: gt('產地 → Region'),
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

// ── 品種（描述皆為課程已查證者；面積比例為 2025 年）──────────
export const GRAPES = [
  { name: 'Chenin Blanc', color: '白', desc: '南非種植最多的品種（2025 年約 18.4%），當地舊稱 Steen' },
  { name: 'Sauvignon Blanc', color: '白', desc: '種植面積排名第二的白葡萄（2025 年約 12.1%）；Constantia 與 Durbanville 的代表品種' },
  { name: 'Colombard', color: '白', desc: '2025 年約占 10.6%，在南非多用於基酒與散裝酒' },
  { name: 'Chardonnay', color: '白', desc: '2025 年約占 7.6%；Robertson 與 Elgin 的重要品種' },
  { name: 'Semillon', color: '白', desc: 'Franschhoek 以 1902 年 Eikehof 區塊等老藤聞名' },
  { name: 'Cabernet Sauvignon', color: '紅', desc: '2025 年約占 9.9%，是 Stellenbosch 的旗艦品種' },
  { name: 'Syrah', color: '紅', desc: '2025 年約占 9.4%；在 Swartland 與 Paarl 表現突出' },
  { name: 'Pinotage', color: '紅', desc: 'Pinot Noir 與 Cinsault 的雜交品種，南非的代表紅葡萄（2025 年約 7.6%）' },
  { name: 'Merlot', color: '紅', desc: '2025 年約占 5.7%，常見於波爾多式混釀' },
  { name: 'Pinot Noir', color: '紅', desc: 'Hemel-en-Aarde 與 Elgin 等涼爽產地的代表紅葡萄' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Stellenbosch', grape: 'Cabernet Sauvignon' },
  { dac: 'Hemel-en-Aarde Valley', grape: 'Pinot Noir' },
  { dac: 'Durbanville', grape: 'Sauvignon Blanc' },
  { dac: 'Robertson', grape: 'Chardonnay' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'Wine of Origin 標示產地時，葡萄須有多少比例來自該產地？', ans: '100%', wrong: ['75%', '85%', '95%'], explain: '產地 100%；品種與年份則各須 85%。' },
  { stem: 'Wine of Origin 標示品種時，最低比例是？', ans: '85%', wrong: ['75%', '90%', '100%'], explain: '品種 85%、年份 85%、產地 100%。' },
  { stem: 'Wine of Origin 標示年份時，最低比例是？', ans: '85%', wrong: ['75%', '90%', '100%'], explain: '年份 85%、品種 85%、產地 100%。' },
  { stem: 'Single Vineyard 的面積上限？', ans: '6 公頃', wrong: ['2 公頃', '10 公頃', '20 公頃'], explain: 'Single Vineyard 不超過 6 公頃。' },
  { stem: 'Cap Classique 基酒的壓榨方式？', ans: '整串壓榨', wrong: ['機械去梗後壓榨', '浸皮後壓榨', '不限'], explain: '基酒須整串壓榨（僅限 cuvée）。' },
  { stem: 'Cap Classique 瓶內壓力至少多少？', ans: '3 bar', wrong: ['1 bar', '5 bar', '6 bar'], explain: '瓶內壓力至少 3 bar。' }
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

// ── 制度辨識（WO 階層、Cap Classique、重要年份）──────────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: 'WO 階層', easy: true, stem: 'Wine of Origin 產地階層由大到小的順序是？', ans: 'Geographical Unit → Region → District → Ward', wrong: ['Ward → District → Region → Geographical Unit', 'Region → Geographical Unit → Ward → District', 'District → Region → Ward → Geographical Unit'], explain: '由大到小：Geographical Unit、Region、District、Ward。' },
  { g: 'WO 階層', easy: true, stem: '下列哪一個是 Ward？', ans: 'Constantia', wrong: ['Stellenbosch', 'Swartland', 'Walker Bay'], explain: 'Constantia 是 Cape Town District 的 Ward；其餘為 District。' },
  { g: 'WO 階層', easy: false, stem: '下列哪一個是 District？', ans: 'Walker Bay', wrong: ['Constantia', 'Durbanville', 'Elim'], explain: 'Walker Bay 是 District（2004 年 5 月升格）；其餘為 Ward。' },
  { g: 'WO 階層', easy: false, stem: 'Elim 屬於哪個 District？', ans: 'Cape Agulhas', wrong: ['Walker Bay', 'Elgin', 'Overberg'], explain: 'Elim 是 Cape Agulhas District 的 Ward。' },
  { g: 'WO 階層', easy: true, stem: '標示「Single Vineyard」的葡萄園面積上限是？', ans: '6 公頃', wrong: ['2 公頃', '10 公頃', '20 公頃'], explain: 'Single Vineyard 不超過 6 公頃。' },
  { g: 'Cap Classique', easy: true, stem: 'Cap Classique 現行的酒渣陳年最低期間（2023 年份起）？', ans: '12 個月', wrong: ['3 個月', '9 個月', '24 個月'], explain: '自 2023 年份起至少 12 個月（舊規為 9 個月）。' },
  { g: 'Cap Classique', easy: false, stem: 'Cap Classique 必須用什麼方法釀造？', ans: '傳統法（瓶內二次發酵）', wrong: ['Charmat 槽式法', '單次發酵後充氣', '轉移法或充氣皆可'], explain: 'Cap Classique 指瓶內二次發酵的傳統法氣泡酒。' },
  { g: 'Cap Classique', easy: false, stem: 'Cap Classique 瓶內壓力至少多少？', ans: '3 bar', wrong: ['1 bar', '5 bar', '6 bar'], explain: '瓶內壓力至少 3 bar。' },
  { g: 'Cap Classique', easy: false, stem: 'Kaapse Vonkel 於哪一年開始釀造？', ans: '1971', wrong: ['1918', '1992', '2004'], explain: 'Kaapse Vonkel 為 1971 年（1973 年上市）。' },
  { g: '重要年份', easy: true, stem: 'Stellenbosch 創立於哪一年？', ans: '1679', wrong: ['1652', '1688', '1918'], explain: '1679 年由 Simon van der Stel 創立。' },
  { g: '重要年份', easy: false, stem: 'Walker Bay 升格為 District 是哪一年？', ans: '2004', wrong: ['1981', '1993', '2011'], explain: '1981 年為 Overberg 的 Ward，2004 年 5 月升為 District。' },
  { g: '重要年份', easy: false, stem: 'Franschhoek 升格為獨立 District 是哪一年？', ans: '2010', wrong: ['1971', '2004', '2017'], explain: '2010 年起為獨立 District，之前是 Paarl 的 Ward。' },
  { g: '重要年份', easy: false, stem: 'Elgin 升格為獨立 District 是哪一年？', ans: '2011', wrong: ['1990', '2004', '2017'], explain: '1990 年為 Overberg 的 Ward，2011 年升為 District。' },
  { g: '重要年份', easy: false, stem: 'Constantia 與 Durbanville 併入 Cape Town District 是哪一年？', ans: '2017', wrong: ['2004', '2010', '2023'], explain: '2017 年起兩者為 Cape Town District 的 Ward。' },
  { g: '重要年份', easy: false, stem: 'Wellington 從 Paarl 獨立成 District 是哪一年？', ans: '2012', wrong: ['2004', '2010', '2017'], explain: '2012 年 9 月 21 日。' },
  { g: '重要年份', easy: false, stem: 'Cape Port 的稱呼規範於哪一年起適用？', ans: '2012', wrong: ['1992', '2004', '2023'], explain: '2012 年起須使用 Cape Vintage、Cape Tawny 等「Cape」前綴。' },
  { g: '制度與產業', easy: true, stem: 'IPW（Integrated Production of Wine）制度於哪一年開始？', ans: '1998', wrong: ['1973', '1992', '2010'], explain: 'IPW 於 1998 年開始。' },
  { g: '制度與產業', easy: false, stem: 'BWI（Biodiversity & Wine Initiative）於哪一年成立？', ans: '2004', wrong: ['1998', '2007', '2010'], explain: 'BWI 於 2004 年成立。' },
  { g: '制度與產業', easy: false, stem: 'KWV 設立於哪一年？', ans: '1918', wrong: ['1679', '1973', '1997'], explain: 'KWV 於 1918 年設於 Paarl；配額於 1992 年廢除，1997 年私有化。' },
  { g: '制度與產業', easy: true, stem: '自 2023 年 8 月 1 日起取代 Wine and Spirit Board 的機構是？', ans: 'WCA', wrong: ['KWV', 'SAWIS', 'WOSA'], explain: 'WCA 自 2023-08-01 取代 Wine and Spirit Board。' },
  { g: '制度與產業', easy: false, stem: 'Wine of Origin 基礎規章何時開始正式實施？', ans: '1973', wrong: ['1918', '1962', '1993'], explain: '1972 年訂定、1973 年正式實施；Geographical Units 於 1993 年劃定。' },
  { g: '制度與產業', easy: false, stem: 'Swartland Revolution 約發生於哪段期間？', ans: '2010–2015', wrong: ['1973–1980', '1992–1997', '2018–2023'], explain: 'Swartland Revolution 為 2010–2015 年。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
