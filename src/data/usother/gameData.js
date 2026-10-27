/**
 * 美國其他產區小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 USOTHER_COURSE_FRAMEWORK.md 第 10–12 節）。
 * 來源有出入的資料（Willamette 母 AVA 與 Van Duzer 的核准年、Wahluke Slope 與 Ancient Lakes 的核准年、
 * Washington 與 Texas 的全美排名、New York 酒廠數等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/usotherUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 四個分組（與課程、地圖一致；跨州 AVA 另以「州與跨州」題型出題）──
export const ZONES = [
  { key: 'oregon', label: 'Oregon' },
  { key: 'washington', label: 'Washington' },
  { key: 'newyork', label: 'New York' },
  { key: 'other', label: 'Idaho・Virginia・Texas' }
]

// ── 產地（只收單一州的 AVA）──────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Willamette Valley', zone: 'oregon', easy: true, hint: '被 Coast Range、Cascades 與 Columbia River 圍繞的山谷，年降雨約 40 英寸，到 2022 年共有 11 個子 AVA' },
  { name: 'Dundee Hills', zone: 'oregon', easy: true, hint: '以 Jory 土壤（玄武岩風化的紅色黏土）為代表，2004 年核准' },
  { name: 'Yamhill-Carlton', zone: 'oregon', easy: false, hint: '位於 Coast Range 的雨影中，以 Willakenzie 海洋沉積岩為代表，2004 年核准' },
  { name: 'Van Duzer Corridor', zone: 'oregon', easy: false, hint: 'Coast Range 上讓太平洋海風在夏季午後進入山谷的缺口' },
  { name: 'Laurelwood District', zone: 'oregon', easy: false, hint: '2020 年核准，名稱來自覆蓋在玄武岩上的風積黃土' },
  { name: 'Southern Oregon', zone: 'oregon', easy: true, hint: '地中海式影響、夏季炎熱乾燥，Tempranillo 是代表（Abacela 創立於 1995 年）' },
  { name: 'The Rocks District of Milton-Freewater', zone: 'oregon', easy: false, hint: '2015 年核准、位於 Umatilla County，是 Walla Walla 內的子 AVA' },
  { name: 'Yakima Valley', zone: 'washington', easy: true, hint: '1983 年核准，是 Washington 的第一個 AVA' },
  { name: 'Red Mountain', zone: 'washington', easy: true, hint: '2001 年核准、約 4,040 英畝的沙漠氣候小產區，以結構強勁的紅酒為主' },
  { name: 'Horse Heaven Hills', zone: 'washington', easy: true, hint: '2005 年核准，風很強、年降雨約 6.2 英寸' },
  { name: 'Wahluke Slope', zone: 'washington', easy: false, hint: '年降雨約 5.9 英寸、深層風積砂與黃土，以 Merlot 與 Cabernet Sauvignon 聞名' },
  { name: 'Ancient Lakes of Columbia Valley', zone: 'washington', easy: false, hint: '海拔約 1,200 至 1,500 英尺，以 Riesling 與 Chardonnay 等白葡萄為主' },
  { name: 'Puget Sound', zone: 'washington', easy: true, hint: '1995 年核准，濕潤涼爽，多數酒廠使用東 Washington 的葡萄' },
  { name: 'Finger Lakes', zone: 'newyork', easy: true, hint: '含 11 個湖，以 Riesling 最具代表性，湖效應保護葡萄藤並延長生長季' },
  { name: 'Seneca Lake', zone: 'newyork', easy: false, hint: 'Finger Lakes 的子 AVA，2003 年核准，過去百年只凍結過少數幾次' },
  { name: 'Cayuga Lake', zone: 'newyork', easy: false, hint: 'Finger Lakes 的子 AVA，1988 年核准' },
  { name: 'North Fork of Long Island', zone: 'newyork', easy: true, hint: '1986 年核准，1973 年 Hargrave 在 Cutchogue 種下 Long Island 第一座商業 vinifera 葡萄園' },
  { name: 'The Hamptons, Long Island', zone: 'newyork', easy: false, hint: '1985 年核准，面對大西洋，較涼、多霧' },
  { name: 'Hudson River Region', zone: 'newyork', easy: true, hint: '紐約的第一個 AVA（1982 年），Brotherhood Winery 創立於 1839 年' },
  { name: 'Niagara Escarpment', zone: 'newyork', easy: false, hint: '2005 年核准，位於排水良好的石灰岩山脊' },
  { name: 'Monticello', zone: 'other', easy: true, hint: 'Virginia 的 AVA，1984 年核准，位於 Blue Ridge 東坡，Jefferson 曾支持 Mazzei 種葡萄' },
  { name: 'Texas High Plains', zone: 'other', easy: true, hint: '1993 年核准，海拔多在 3,000 至 4,000 英尺，全州近半商業釀酒葡萄產自此' },
  { name: 'Texas Hill Country', zone: 'other', easy: false, hint: '1991 年核准，超過 900 萬英畝但種植不到 800 英畝' },
  { name: 'Bell Mountain', zone: 'other', easy: false, hint: '1986 年核准，是第一個完全位於 Texas 的 AVA' },
  { name: 'Eagle Foothills', zone: 'other', easy: false, hint: '位於 Idaho 的 Snake River Valley 之內的子 AVA' }
]
const ZONE_LABEL = Object.fromEntries(ZONES.map(z => [z.key, z.label]))

// 產區速答：
//  簡單 = 產地 → 州（附線索）；
//  困難 = 一半是「只給名稱、無線索」的產地 → 州，一半是「線索 → 產地」
export function buildRegionQuestions(diff) {
  const pool = diff === 'easy' ? DAC_ITEMS.filter(c => c.easy) : DAC_ITEMS
  const zoneQ = (c, withHint) => ({
    tag: gt('產地 → 州'),
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

// ── 品種（描述皆為課程已查證者）──────────────────────────────
export const GRAPES = [
  { name: 'Riesling', color: '白', desc: 'Finger Lakes 的代表品種；2024 年約占 Washington 壓榨量 15%，僅次於 Cabernet Sauvignon' },
  { name: 'Pinot Gris', color: '白', desc: 'Oregon 最重要的白品種，2022 年種植 5,546 英畝（全州第二多的品種）' },
  { name: 'Chardonnay', color: '白', desc: 'Long Island 的優勢品種之一，Oregon 2022 年種植 2,518 英畝' },
  { name: 'Viognier', color: '白', desc: 'Virginia Monticello AVA 最具代表性的品種之一' },
  { name: 'Madeleine Angevine', color: '白', desc: '適合 Puget Sound 濕潤涼爽氣候的品種' },
  { name: 'Pinot Noir', color: '紅', desc: 'Oregon 種植最多的品種，2022 年種植 24,729 英畝' },
  { name: 'Cabernet Sauvignon', color: '紅', desc: '2024 年約占 Washington 壓榨量 27%，是最大宗的品種' },
  { name: 'Merlot', color: '紅', desc: 'Long Island 的優勢品種之一，也是 Wahluke Slope 的代表' },
  { name: 'Syrah', color: '紅', desc: '一般說法中 The Rocks District of Milton-Freewater 以此聞名' },
  { name: 'Tempranillo', color: '紅', desc: 'Southern Oregon 的代表品種，也是 Texas 種植最多的品種之一' },
  { name: 'Cabernet Franc', color: '紅', desc: 'Monticello 的重要品種，在 Long Island 也很重要' },
  { name: 'Concord', color: '紅', desc: '屬 Vitis labrusca，是 Lake Erie AVA 的主要品種' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Dundee Hills', grape: 'Pinot Noir' },
  { dac: 'Southern Oregon', grape: 'Tempranillo' },
  { dac: 'Finger Lakes', grape: 'Riesling' },
  { dac: 'Lake Erie', grape: 'Concord' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: '聯邦規定 AVA 標示至少需多少比例來自該 AVA？', ans: '85%', wrong: ['75%', '95%', '100%'], explain: '聯邦規定 85%。' },
  { stem: '聯邦規定標示州或郡產地至少需多少比例？', ans: '75%', wrong: ['51%', '85%', '95%'], explain: '州或郡為 75%。' },
  { stem: 'Oregon 品種標示的一般最低比例是？', ans: '90%', wrong: ['75%', '85%', '100%'], explain: '90%，少數品種例外（採聯邦 75%）。' },
  { stem: '標示 Oregon 的 AVA 時，需有多少比例來自該產區？', ans: '95%', wrong: ['75%', '85%', '100%'], explain: '95%（且 100% 來自 Oregon）。' },
  { stem: '酒款含多少認證葡萄可使用 Salmon-Safe 標誌？', ans: '95%', wrong: ['50%', '75%', '100%'], explain: '含 95% 認證葡萄可用 Salmon-Safe 標誌。' },
  { stem: '酒款含多少認證葡萄可使用 Sustainable WA 標誌？', ans: '75%', wrong: ['50%', '85%', '95%'], explain: '含 75% 認證葡萄可用 Sustainable WA 標誌。' }
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
    ...DAC_GRAPE.filter(i => GRAPE_BY_NAME[i.grape]).map(c2g),
    ...RATIO_ITEMS.map(ratioQ)
  ])
}

// ── 制度辨識（AVA 制度、州與跨州、重要年份、產業）────────────
// easy: true 者進簡單模式；全部進困難模式
const Y = (stem, ans, wrong, explain, easy = false) => ({ g: '重要年份', easy, stem, ans, wrong, explain })
const CLASS_ITEMS = [
  { g: 'AVA 制度', easy: true, stem: '第一個由聯邦確立的 AVA 是哪一個？', ans: 'Augusta（Missouri）', wrong: ['Napa Valley', 'Willamette Valley', 'Finger Lakes'], explain: 'Augusta 於 1980 年 6 月 20 日成為第一個聯邦 AVA。' },
  { g: 'AVA 制度', easy: true, stem: '2003 年 1 月起負責 AVA 的聯邦機構是？', ans: 'TTB', wrong: ['ATF', 'USDA', 'FDA'], explain: '1980 年起由 ATF 劃定；2003 年 1 月依國土安全法改由 TTB 負責。' },
  { g: 'AVA 制度', easy: true, stem: 'AVA 與歐洲 AOC 最大的差別是？', ans: 'AVA 只界定地理範圍，不規定品種或釀法', wrong: ['AVA 規定可用品種', 'AVA 規定最高產量', 'AVA 規定橡木桶陳年'], explain: 'AVA 只界定地理範圍。' },
  { g: 'AVA 制度', easy: false, stem: '酒廠通常標示哪一層的 AVA？', ans: '適用的最具體 AVA', wrong: ['最大的 AVA', '州名', '隨機選一個'], explain: 'AVA 可巢狀，酒廠通常標示適用的最具體者。' },
  { g: '州與跨州', easy: true, stem: '下列哪一個 AVA 跨越 Oregon 與 Washington？', ans: 'Columbia Gorge', wrong: ['Red Mountain', 'Yakima Valley', 'Puget Sound'], explain: 'Columbia Gorge 跨 Oregon（Hood River、Wasco）與 Washington（Skamania、Klickitat）。' },
  { g: '州與跨州', easy: false, stem: 'The Rocks District of Milton-Freewater 位於哪個州？', ans: 'Oregon', wrong: ['Washington', 'Idaho', 'New York'], explain: '位於 Oregon 的 Umatilla County，是 Walla Walla 內的子 AVA。' },
  { g: '州與跨州', easy: false, stem: 'Snake River Valley AVA 跨越哪兩個州？', ans: 'Idaho 與 Oregon', wrong: ['Idaho 與 Washington', 'Idaho 與 Montana', 'Idaho 與 Utah'], explain: 'Idaho 與 Oregon（Malheur、Baker 郡）。' },
  { g: '州與跨州', easy: false, stem: 'Lake Erie AVA 涵蓋哪三個州？', ans: 'New York、Pennsylvania、Ohio', wrong: ['New York、New Jersey、Ohio', 'Michigan、Ohio、Indiana', 'New York、Vermont、Ohio'], explain: 'New York、Pennsylvania 與 Ohio。' },
  { g: '州與跨州', easy: true, stem: 'Walla Walla Valley AVA 位於哪裡？', ans: 'Washington 東南與 Oregon 東北角', wrong: ['僅 Washington 西部', '僅 Oregon 南部', 'Idaho 與 Montana 交界'], explain: '跨 Washington 東南與 Oregon 東北角。' },
  Y('Washington 第一個 AVA（Yakima Valley）核准於哪一年？', '1983', ['1980', '1984', '2001'], 'Yakima Valley 於 1983 年 4 月 4 日核准。', true),
  Y('Columbia Gorge AVA 核准於哪一年？', '2004', ['1984', '1991', '2015'], '2004 年 5 月 10 日。'),
  Y('Red Mountain AVA 核准於哪一年？', '2001', ['1983', '1995', '2005'], '2001 年 4 月 10 日。'),
  Y('Horse Heaven Hills AVA 核准於哪一年？', '2005', ['1995', '2001', '2012'], '2005 年 7 月 1 日。'),
  Y('Puget Sound AVA 核准於哪一年？', '1995', ['1983', '2005', '2016'], '1995 年 10 月 4 日。'),
  Y('The Rocks District of Milton-Freewater 核准於哪一年？', '2015', ['1984', '2001', '2020'], '2015 年 2 月。'),
  Y('Hudson River Region（紐約第一個 AVA）核准於哪一年？', '1982', ['1976', '1985', '1988'], '1982 年 6 月 4 日。', true),
  Y('母 AVA「Long Island」核准於哪一年？', '2001', ['1985', '1986', '2005'], '2001 年 5 月 14 日，晚於 Hamptons（1985）與 North Fork（1986）。'),
  Y('Seneca Lake AVA 核准於哪一年？', '2003', ['1982', '1988', '2016'], '2003 年。'),
  Y('Snake River Valley AVA 核准於哪一年？', '2007', ['1984', '1993', '2019'], '2007 年 4 月 9 日，是 Idaho 的第一個 AVA。'),
  Y('Monticello AVA 核准於哪一年？', '1984', ['1976', '1993', '2007'], '1984 年 1 月 23 日，Virginia 第四個產區。'),
  Y('Texas High Plains AVA 核准於哪一年？', '1993', ['1986', '1991', '2005'], '1993 年 3 月 2 日。'),
  { g: '產業與制度', easy: true, stem: 'Granholm v. Heald 裁定於哪一年？', ans: '2005', wrong: ['1933', '1976', '2022'], explain: '2005 年 5 月 16 日，裁定州不得歧視外州酒廠的直送。' },
  { g: '產業與制度', easy: false, stem: 'Sustainable WA 於哪一年推出？', ans: '2022', wrong: ['2005', '2015', '2026'], explain: '2022 年；2024 年 4 月 11 日宣布與 Salmon-Safe 雙認證。' },
  { g: '產業與制度', easy: false, stem: 'New York 農場酒廠法通過於哪一年？', ans: '1976', wrong: ['1933', '1962', '1982'], explain: '1976 年；當時全州只有 19 家酒廠。' },
  { g: '產業與制度', easy: false, stem: 'Konstantin Frank 的第一個年份推出於哪一年？', ans: '1962', wrong: ['1951', '1973', '1982'], explain: '1962 年；1951 年是他移民美國的年份。' },
  { g: '產業與制度', easy: false, stem: 'Brotherhood Winery（Hudson River）創立於哪一年？', ans: '1839', wrong: ['1776', '1933', '1962'], explain: '1839 年，被稱為北美持續營運最久的酒廠。' },
  { g: '產業與制度', easy: false, stem: 'Long Island 第一座商業 vinifera 葡萄園種於哪一年？', ans: '1973', wrong: ['1962', '1976', '1985'], explain: '1973 年（Hargrave，Cutchogue）。' },
  { g: '產業與制度', easy: false, stem: 'Domaine Drouhin Oregon 買下土地是哪一年？', ans: '1987', wrong: ['1961', '1975', '1999'], explain: '1987 年，買下 100 英畝。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
