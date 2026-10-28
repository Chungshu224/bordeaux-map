/**
 * 阿根廷小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 CHILE_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離、
 * Maule 面積表、Carmenère 面積、最早種植的人物與年份、根瘤蚜年份、野火面積等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/chileUi/index.js'

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
  { key: 'north', label: '北部（Coquimbo）' },
  { key: 'aconcagua', label: 'Aconcagua 區' },
  { key: 'central', label: '中央谷地' },
  { key: 'south', label: '南部（Sur）' }
]

// ── 產地（省／行政區／地點）────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Elqui', zone: 'north', easy: true, hint: '位於 Atacama 沙漠南端，年降雨不到 70 公釐，葡萄園最高到約 2,000 公尺，以皮斯可聞名' },
  { name: 'Limarí', zone: 'north', easy: true, hint: '半乾燥氣候，受稱為 Camanchaca 的晨霧調節，土壤有多層碳酸鈣、礦物感強' },
  { name: 'Aconcagua Valley', zone: 'aconcagua', easy: true, hint: '山脈走廊擋住海洋影響，是智利最溫暖的微氣候之一，Seña 在此' },
  { name: 'Casablanca Valley', zone: 'aconcagua', easy: true, hint: '約在 Santiago 以西 70 公里，Humboldt 寒流的晨霧與午後海風，主要風險是春霜' },
  { name: 'San Antonio', zone: 'aconcagua', easy: false, hint: '比 Casablanca 更靠海，Pinot Noir 的比重逐漸增加，其中有一個 Zone 叫 Leyda' },
  { name: 'Leyda', zone: 'aconcagua', easy: false, hint: 'San Antonio 內的一個 Zone，Decanter 提到 Viña Leyda 這個生產者' },
  { name: 'Maipo Valley', zone: 'central', easy: true, hint: '緊鄰 Santiago 南方，被視為智利 Cabernet Sauvignon 的核心，Don Melchor 在此' },
  { name: 'Alto Maipo', zone: 'central', easy: false, hint: '安地斯山麓的圓礫河石與砂，排水好，Concha y Toro 的 Pirque 一帶' },
  { name: 'Cachapoal Valley', zone: 'central', easy: false, hint: 'Rapel Valley DO 的北半，位於 Maipo 與 Colchagua 之間，Rancagua 在中央窪地' },
  { name: 'Peumo', zone: 'central', easy: false, hint: '以 Carmenère 聞名，Concha y Toro 的 Carmín de Peumo 首個年份是 1996' },
  { name: 'Colchagua Valley', zone: 'central', easy: true, hint: 'Rapel DO 的南半，擁有智利最大的 Carmenère 種植' },
  { name: 'Apalta', zone: 'central', easy: false, hint: '花崗岩分解土、朝北山坡，Clos Apalta 首個年份是 1997' },
  { name: 'Curicó Valley', zone: 'central', easy: false, hint: 'Teno 河與 Lontué 河在附近匯成 Mataquito 河，Miguel Torres Chile 於 1979 年設立' },
  { name: 'Maule Valley', zone: 'central', easy: true, hint: '中央谷地南端，VIGNO 乾耕老藤 Carignan 的家鄉' },
  { name: 'Itata', zone: 'south', easy: true, hint: '位於 Ñuble 區，老藤 País 樹齡 80 至 150 年以上，年降雨 800 至 1,200 公釐' },
  { name: 'Bío-Bío', zone: 'south', easy: false, hint: '與 Itata 有相同的品種與土壤（花崗岩與火山質），同樣以乾耕老藤為特色' },
  { name: 'Malleco', zone: 'south', easy: false, hint: '課程資料中只出現在名單裡，定位是往南的邊疆' }
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
  { name: 'Cabernet Sauvignon', color: '紅', desc: '智利最大宗的紅葡萄，超過 40,000 公頃（Wine With Seth）；Maipo 被視為其核心產地' },
  { name: 'Carmenère', color: '紅', desc: '20 世紀大部分時間被當成 Merlot，1994 年 11 月被確認為獨立品種；晚熟，太早採收有明顯青椒味' },
  { name: 'País', color: '紅', desc: '殖民時期傳入的 Mission 葡萄，是智利最古老的品種，近年老藤受到重視' },
  { name: 'Carignan', color: '紅', desc: '在 Maule 以乾耕老藤聞名，VIGNO 標章要求樹齡至少 30 年' },
  { name: 'Syrah', color: '紅', desc: '在 Elqui 這樣的乾熱產區表現優異；Aconcagua Valley 也以它聞名' },
  { name: 'Cinsault', color: '紅', desc: '19 世紀引入，Itata 的老藤紅葡萄之一，與 País 並列復興主角' },
  { name: 'Sauvignon Blanc', color: '白', desc: '智利最大宗的白葡萄，也是 Casablanca 的領導品種' },
  { name: 'Chardonnay', color: '白', desc: '沿海涼區表現尤其受重視，Limarí 的石灰質土壤出色' },
  { name: 'Moscatel de Alejandría', color: '白', desc: 'Itata 的白葡萄，用於餐酒與皮斯可，多為乾耕老藤' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Casablanca Valley', grape: 'Sauvignon Blanc' },
  { dac: 'Maule Valley', grape: 'Carignan' },
  { dac: 'Itata', grape: 'País' },
  { dac: 'Elqui', grape: 'Syrah' },
  { dac: 'Maipo Valley', grape: 'Cabernet Sauvignon' },
  { dac: 'Peumo', grape: 'Carmenère' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: '智利酒標示產地、品種或年份，各須至少多少比例符合？', ans: '75%', wrong: ['60%', '85%', '100%'], explain: 'Wine With Seth：各須至少 75%，最多 25% 可來自其他。' },
  { stem: '酒標使用 Costa、Entre Cordilleras 或 Andes，須至少多少比例（容量）來自符合條件的地區？', ans: '85%', wrong: ['60%', '75%', '100%'], explain: 'Wine With Seth：這三個詞要求至少 85%（容量）。' },
  { stem: 'VIGNO 要求 Carignan 的樹齡至少多少年？', ans: '30 年', wrong: ['3 年', '10 年', '60 年'], explain: '同時須乾耕、上市前陳年兩年。' },
  { stem: 'VIGNO 的酒在上市前須陳年多久？', ans: '兩年', wrong: ['六個月', '一年', '五年'], explain: 'Maule 乾耕老藤 Carignan：樹齡至少 30 年、上市前陳年兩年。' },
  { stem: '智利的 Reserva、Gran Reserva 等品質用語，規定的是什麼？', ans: '酒精度與橡木使用', wrong: ['最低桶陳月數', '葡萄園最低樹齡', '最低單位產量'], explain: 'Wine With Seth：是酒精與橡木規定，而非最低陳年時間。' }
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

// ── 制度辨識（原產地制度、歷史年份、海拔與氣候）──────────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '原產地制度', easy: true, stem: '智利建立原產地命名（DO）框架的 Decreto 464 是哪一年公布的？', ans: '1995 年', wrong: ['1975 年', '1985 年', '2005 年'], explain: '1995 年 5 月 26 日公布，由農牧局（SAG）管理。' },
  { g: '原產地制度', easy: true, stem: '管理智利 DO 制度的機構是？', ans: 'SAG（農牧局）', wrong: ['OIV', 'INAO', 'Wines of Chile 協會'], explain: 'Decreto 464 由 SAG 管理。' },
  { g: '原產地制度', easy: true, stem: '酒標標示產地、品種或年份，各須至少多少比例？', ans: '75%', wrong: ['50%', '85%', '100%'], explain: '至少 75% 符合，最多 25% 可來自其他（Wine With Seth）。' },
  { g: '原產地制度', easy: false, stem: '酒標使用 Costa、Entre Cordilleras 或 Andes 時，須至少多少比例？', ans: '85%', wrong: ['60%', '75%', '95%'], explain: 'Wine With Seth：至少 85%（容量）。' },
  { g: '原產地制度', easy: false, stem: 'Entre Cordilleras 指的是？', ans: '安地斯與海岸山脈之間的中央谷地', wrong: ['受太平洋影響的沿海地點', '安地斯山麓', '最南端的產區'], explain: '三個橫向詞：Costa（沿海）、Entre Cordilleras（中央窪地）、Andes（山麓）。' },
  { g: '原產地制度', easy: false, stem: 'Reserva、Gran Reserva 等品質用語的規定重點是？', ans: '酒精度與橡木使用', wrong: ['最低桶陳月數', '最低瓶陳年數', '葡萄園最低樹齡'], explain: '是酒精與橡木規定，而非最低陳年時間（Wine With Seth）。' },
  { g: '歷史年份', easy: true, stem: 'Jean-Michel Boursiquot 在 Carmen 酒莊確認 Carmenère 是獨立品種，是哪一年？', ans: '1994 年', wrong: ['1851 年', '1883 年', '2005 年'], explain: '1994 年 11 月確認；智利農業部於 1998 年正式承認。' },
  { g: '歷史年份', easy: true, stem: '1851 年 Silvestre Ochagavía 在哪裡率先引入歐洲品種？', ans: 'Talagante', wrong: ['Casablanca', 'Elqui', 'Itata'], explain: '1851 年在 Talagante 引入；1850 年代智利生產者自 Bordeaux 進口插條。' },
  { g: '歷史年份', easy: false, stem: 'Concha y Toro 創立於哪一年？', ans: '1883', wrong: ['1856', '1870', '1979'], explain: 'Concha y Toro 1883 年，位於 Pirque（Wine With Seth）。' },
  { g: '歷史年份', easy: false, stem: 'Don Melchor 的首個年份是？', ans: '1987', wrong: ['1970', '1996', '2005'], explain: '首個年份 1987（1990 年上市）；Almaviva 則是 1996 年成立。' },
  { g: '歷史年份', easy: false, stem: 'Almaviva 於哪一年由 Concha y Toro 與 Baron Philippe de Rothschild 合資成立？', ans: '1996', wrong: ['1987', '1999', '2008'], explain: '1996 年各半合資（Wine With Seth）。' },
  { g: '歷史年份', easy: false, stem: 'Clos Apalta 的哪個年份在 2008 年被 Wine Spectator 選為年度酒？', ans: '2005', wrong: ['1997', '2001', '2008'], explain: '首個年份是 1997，2005 年份成為 2008 年度酒，是智利首次。' },
  { g: '歷史年份', easy: false, stem: '2010 年 2 月 27 日的智利地震，規模是？', ans: '8.8', wrong: ['6.2', '7.0', '9.5'], explain: 'Decanter：約 50 年來最強；Maule 與 Bío-Bío 最靠近震央。' },
  { g: '地理與氣候', easy: true, stem: '為沿海帶來晨霧與午後海風的寒流是？', ans: 'Humboldt 寒流', wrong: ['墨西哥灣流', '黑潮', '本格拉寒流'], explain: '寒流沿岸北上，沿海地帶有晨霧與海風。' },
  { g: '地理與氣候', easy: true, stem: '智利葡萄園的主要灌溉水源是？', ans: '安地斯融雪', wrong: ['夏季雷雨', '海水淡化', '地下鹽湖'], explain: '融雪經水渠與現代滴灌輸送。' },
  { g: '地理與氣候', easy: true, stem: 'Limarí 的晨霧叫什麼？', ans: 'Camanchaca', wrong: ['Zonda', 'Mistral', 'Pampero'], explain: 'Wine With Seth：Limarí 受 Camanchaca 晨霧調節。' },
  { g: '地理與氣候', easy: false, stem: 'Elqui 的年降雨大約是？', ans: '不到 70 公釐', wrong: ['約 700 公釐', '約 1,500 公釐', '超過 3,000 公釐'], explain: 'Wikipedia：晴朗的沙漠型氣候，年降雨不到 70 公釐。' },
  { g: '地理與氣候', easy: false, stem: 'Casablanca 的主要風險是？', ans: '春霜（9 至 11 月）', wrong: ['冬季積雪', '夏季颱風', '火山灰'], explain: '春霜是它的主要風險（Wine With Seth）。' },
  { g: '地理與氣候', easy: false, stem: 'Itata 的年降雨大約是？', ans: '800 至 1,200 公釐', wrong: ['不到 70 公釐', '約 215 公釐', '超過 3,000 公釐'], explain: '溫帶偏濕，降雨足以乾耕（Wine With Seth）。' },
  { g: '地理與氣候', easy: false, stem: 'Aconcagua 峰的高度大約是？', ans: '6,961 公尺', wrong: ['2,500 公尺', '4,200 公尺', '8,848 公尺'], explain: '安地斯最高峰，融雪是智利葡萄園的主要水源。' },
  { g: '產業與品種', easy: true, stem: '2023 年 SAG 統計，紅葡萄占釀酒葡萄面積的大約多少？', ans: '72.8%', wrong: ['27.2%', '50%', '95%'], explain: '紅葡萄 90,609 公頃，白葡萄占 27.2%。' },
  { g: '產業與品種', easy: false, stem: '2024 年瓶裝酒占智利出口金額的大約多少？', ans: '75%', wrong: ['25%', '40%', '100%'], explain: 'Vinetur：瓶裝占出口量 54%、出口值 75%。' },
  { g: '產業與品種', easy: false, stem: '2024 年智利最大的瓶裝酒市場是？', ans: '巴西', wrong: ['中國', '日本', '冰島'], explain: '巴西約成長 30%；中國瓶裝量下降 11.5%。' },
  { g: '產業與品種', easy: false, stem: '2012 年 1 至 7 月，十大酒廠占瓶裝酒出口值的大約多少？', ans: '53%', wrong: ['5%', '15%', '90%'], explain: 'Portal Fruticola：集中度高，且當時 Concha y Toro 居首。' },
  { g: '產業與品種', easy: false, stem: 'Slow Food 估計 2023 年野火後，Itata 葡萄園損失約多少？', ans: '約 25%', wrong: ['約 2%', '約 60%', '約 90%'], explain: '部分 País 老藤達 200 至 250 年。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
