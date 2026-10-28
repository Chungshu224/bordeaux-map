/**
 * 阿根廷小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 ARGENTINA_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（Luján de Cuyo／San Rafael DOC 起始年份、Catamarca 面積、Patagonia 緯度、
 * Adrianna 種植年份、標示比例 85%／80%／100%、海拔每 100 公尺降溫幅度、IG 總數等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/argentinaUi/index.js'

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
  { key: 'mendoza', label: 'Mendoza' },
  { key: 'sanjuan', label: 'San Juan 與 San Rafael' },
  { key: 'north', label: '北部（Salta 等）' },
  { key: 'patagonia', label: 'Patagonia' }
]

// ── 產地（省／行政區／地點）────────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Luján de Cuyo', zone: 'mendoza', easy: true, hint: 'Malbec 的傳統核心，葡萄園約 800 至 1,100 公尺，阿根廷兩個 DOC 之一' },
  { name: 'Maipú', zone: 'mendoza', easy: true, hint: '位於 Mendoza 市南方，葡萄園約 640 至 1,000 公尺，比 Luján de Cuyo 溫暖，酒款通常更豐厚' },
  { name: 'Agrelo', zone: 'mendoza', easy: false, hint: '約 950 至 1,050 公尺、約 9,000 公頃，Malbec 色深、黑色水果與柔軟的甜單寧' },
  { name: 'Las Compuertas', zone: 'mendoza', easy: false, hint: '約 1,050 至 1,100 公尺，是 Luján de Cuyo 最高的次產區，Malbec 結構緊實、適合久存' },
  { name: 'Tupungato', zone: 'mendoza', easy: true, hint: 'Uco Valley 由北到南三個行政區的最北者' },
  { name: 'Gualtallary', zone: 'mendoza', easy: true, hint: '部分區塊的石灰質 caliche 最高可達 40%，Catena 的 Adrianna 葡萄園在此' },
  { name: 'Paraje Altamira', zone: 'mendoza', easy: false, hint: '2013 年被稱為阿根廷第一個以風土界定的 GI' },
  { name: 'Pedernal', zone: 'sanjuan', easy: false, hint: '約 1,300 至 1,400 公尺、約 850 公頃，GI 於 2007 年，比溫暖的 Tulum 更高更涼' },
  { name: 'Calingasta', zone: 'sanjuan', easy: false, hint: '海拔約 1,500 至 2,000 公尺以上的高海拔地帶，屬 San Juan' },
  { name: 'San Rafael', zone: 'sanjuan', easy: true, hint: '在 Mendoza 市南方約 200 至 230 公里，Atuel 河與 Diamante 河融雪灌溉，常見防雹網，阿根廷兩個 DOC 之一' },
  { name: 'Cafayate', zone: 'north', easy: true, hint: 'Calchaquí 河谷最大的次產區（2,518 公頃），鎮約 1,700 公尺，Torrontés 的核心產地' },
  { name: 'Cachi', zone: 'north', easy: false, hint: 'Calchaquí 次產區中最北者，約 87 公頃' },
  { name: 'Quebrada de Humahuaca', zone: 'north', easy: false, hint: '位於 Jujuy，約 2,200 至 3,329 公尺，海拔極高' },
  { name: 'La Rioja', zone: 'north', easy: false, hint: '以此省命名的 Torrontés 變種，是三個變種中種植最廣、品質評價最高者' },
  { name: 'Río Negro', zone: 'patagonia', easy: true, hint: 'Bodega Chacra 有 1932 年未嫁接的 Pinot Noir；涼爽來自緯度與風' },
  { name: 'Neuquén', zone: 'patagonia', easy: false, hint: '與 Río Negro、Chubut 同屬寒涼的緯度型產區，年降雨不到 200 公釐' }
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
  { name: 'Malbec', color: '紅', desc: '阿根廷最大宗的紅葡萄，約 46,941 公頃（Wines of Argentina），Mendoza 占 84.4%' },
  { name: 'Bonarda', color: '紅', desc: '繼 Malbec 之後種植最廣的紅葡萄，2022 年 17,448 公頃（INV），84.1% 在 Mendoza' },
  { name: 'Syrah', color: '紅', desc: 'San Juan 的招牌品種；1990 年約 700 公頃，增加到超過 10,000 公頃（Wikipedia，2003 年前後的數據）' },
  { name: 'Cabernet Franc', color: '紅', desc: 'Uco Valley 的第二主要紅葡萄，居 Malbec 之後' },
  { name: 'Pinot Noir', color: '紅', desc: 'Patagonia 涼爽產區的代表紅葡萄；Bodega Chacra 有 1932 年未嫁接的老樹' },
  { name: 'Torrontés Riojano', color: '白', desc: 'Muscat of Alexandria 與 Criolla Chica 的自然雜交（2003 年 DNA 研究），約占 Torrontés 面積的 80%' },
  { name: 'Pedro Giménez', color: '白', desc: '曾是阿根廷種植最廣的白葡萄（Wikipedia，2003 年前後的數據）' },
  { name: 'Chardonnay', color: '白', desc: 'Gualtallary 石灰質區塊出色的白葡萄' },
  { name: 'Muscat of Alexandria', color: '白', desc: 'Torrontés Riojano 的親本之一，與 Criolla Chica 自然雜交' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Luján de Cuyo', grape: 'Malbec' },
  { dac: 'Cafayate', grape: 'Torrontés Riojano' },
  { dac: 'San Juan', grape: 'Syrah' },
  { dac: 'Patagonia', grape: 'Pinot Noir' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: 'IP（Indicación de Procedencia）的酒中，至少多少比例須來自該地區生產與釀造的葡萄？', ans: '80%', wrong: ['60%', '95%', '100%'], explain: 'IP 僅限餐酒與地區酒，至少 80% 來自該地區。' },
  { stem: 'Luján de Cuyo DOC 要求至少多少比例的 Malbec？', ans: '85%', wrong: ['60%', '75%', '100%'], explain: 'Wine With Seth：至少 85% Malbec、葡萄園至少 10 年。' },
  { stem: 'Luján de Cuyo DOC 要求葡萄園至少多少年？', ans: '10 年', wrong: ['3 年', '5 年', '25 年'], explain: 'Wine With Seth：葡萄園至少 10 年、每公頃超過 5,000 株。' },
  { stem: '紅酒標示 Reserva 至少須在桶中陳放多久？', ans: '12 個月', wrong: ['3 個月', '6 個月', '24 個月'], explain: '紅酒 Reserva 至少 12 個月、Gran Reserva 至少 24 個月（Wines of Argentina）。' },
  { stem: '紅酒標示 Gran Reserva 至少須在桶中陳放多久？', ans: '24 個月', wrong: ['12 個月', '18 個月', '36 個月'], explain: '紅酒 Gran Reserva 至少 24 個月在桶中。' },
  { stem: '阿根廷的 DOC 總共有幾個？', ans: '2 個', wrong: ['1 個', '5 個', '10 個'], explain: '共 2 個，皆在 Mendoza：Luján de Cuyo 與 San Rafael。' }
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

// ── 制度辨識（原產地制度、歷史年份、海拔與氣候）──────────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '原產地制度', easy: true, stem: '阿根廷的原產地制度由寬到嚴的順序是？', ans: 'IP → IG → DOC', wrong: ['DOC → IG → IP', 'IG → IP → DOC', 'IG → DOC → IP'], explain: '三層：IP、IG、DOC，由寬到嚴。' },
  { g: '原產地制度', easy: true, stem: '阿根廷的原產地法律是哪一年通過的第幾號法？', ans: '1999 年第 25.163 號法', wrong: ['1999 年第 14.878 號法', '2010 年第 25.163 號法', '1973 年第 25.163 號法'], explain: '1999 年的第 25.163 號法，由國家葡萄酒學院（INV）監督。' },
  { g: '原產地制度', easy: true, stem: '監督阿根廷葡萄酒原產地法律的機構是？', ans: 'INV（國家葡萄酒學院）', wrong: ['Wines of Argentina', 'OIV', 'Catena Institute'], explain: '國家葡萄酒學院（INV）負責監督。' },
  { g: '原產地制度', easy: false, stem: '阿根廷的 DOC 是下列哪一組？', ans: 'Luján de Cuyo 與 San Rafael', wrong: ['Uco Valley 與 Cafayate', 'Maipú 與 San Juan', 'Patagonia 與 Salta'], explain: '兩個 DOC 都在 Mendoza：Luján de Cuyo 與 San Rafael。' },
  { g: '原產地制度', easy: false, stem: 'IG（Indicación Geográfica）所指的範圍是？', ans: '不大於一個省或已認可的跨省區域', wrong: ['一個酒莊的葡萄園', '整個阿根廷', '只限 Mendoza 省'], explain: 'IG 界定的產區範圍不大於一個省或已認可的跨省區域。' },
  { g: '原產地制度', easy: false, stem: '實務上，多數阿根廷酒款使用哪一層標示？', ans: 'IG', wrong: ['DOC', '都使用 DOC', '都不標示產地'], explain: 'DOC 是少數產區的選擇，實務上多數酒款仍使用 IG。' },
  { g: '歷史年份', easy: true, stem: '神父 Juan Cedrón 被認為於哪一年種下首批葡萄？', ans: '1556', wrong: ['1492', '1853', '1885'], explain: '1556 年；地點各來源說法不一。' },
  { g: '歷史年份', easy: true, stem: '把 Malbec 插條帶進阿根廷的法國農學家是？', ans: 'Michel Aimé Pouget', wrong: ['Nicolás Catena', 'Domingo Faustino Sarmiento', 'Juan Cedrón'], explain: 'Pouget 應 Sarmiento 之邀引入；Sarmiento 是邀請者而非引入者。' },
  { g: '歷史年份', easy: false, stem: 'Mendoza 與 Buenos Aires 之間的鐵路於哪一年完工？', ans: '1885', wrong: ['1556', '1853', '1977'], explain: '1885 年鐵路完工，Mendoza 的酒得以運往主要消費市場。' },
  { g: '歷史年份', easy: false, stem: '阿根廷的葡萄酒產量在哪一年達到高峰？', ans: '1977', wrong: ['1885', '1956', '2002'], explain: '產量在 1977 年達到高峰，重點是數量而非品質。' },
  { g: '歷史年份', easy: false, stem: '2003 年的 DNA 研究確認 Torrontés Riojano 是哪兩個品種的自然雜交？', ans: 'Muscat of Alexandria × Criolla Chica', wrong: ['Malbec × Bonarda', 'Pedro Giménez × Chardonnay', 'Pinot Noir × Criolla Chica'], explain: '2003 年 DNA 研究：Muscat of Alexandria 與 Criolla Chica 的自然雜交。' },
  { g: '歷史年份', easy: false, stem: 'Paraje Altamira 在哪一年被稱為阿根廷第一個以風土界定的 GI？', ans: '2013', wrong: ['1999', '2007', '2019'], explain: 'Paraje Altamira（2013）；San Pablo 等另外三處為 2019 年。' },
  { g: '歷史年份', easy: false, stem: 'Pedernal 的 GI 是哪一年？', ans: '2007', wrong: ['1999', '2013', '2019'], explain: 'Pedernal 約 1,300–1,400 公尺，GI 於 2007 年。' },
  { g: '海拔與氣候', easy: true, stem: '多數阿根廷產區的年降雨量大約是？', ans: '很少超過 250 公釐', wrong: ['約 1,000 公釐', '約 2,000 公釐', '超過 3,000 公釐'], explain: '多數產區年降雨很少超過 250 公釐，仰賴安地斯融雪灌溉。' },
  { g: '海拔與氣候', easy: true, stem: '阿根廷葡萄園主要的灌溉水源是？', ans: '安地斯融雪', wrong: ['夏季雷雨', '大西洋海霧', '地下鹽湖'], explain: '水來自 Mendoza、Tunuyán、San Juan、Atuel 等河流的融雪。' },
  { g: '海拔與氣候', easy: false, stem: '來自安地斯的炎熱乾燥強風，若在初夏開花期出現會降低產量，名稱是？', ans: 'Zonda 風', wrong: ['Mistral 風', 'Pampero 風', 'Sirocco 風'], explain: 'Zonda 風是理解阿根廷開花期風險的關鍵詞。' },
  { g: '海拔與氣候', easy: false, stem: 'Calchaquí 河谷的葡萄園海拔大約從多少公尺起跳？', ans: '1,530 公尺', wrong: ['300 公尺', '800 公尺', '1,000 公尺'], explain: 'Calchaquí 河谷約 1,530 至 3,111 公尺，是全球最高的葡萄園之一。' },
  { g: '海拔與氣候', easy: false, stem: '阿根廷海拔最高的葡萄園（Finca Moya，3,329 公尺）位於哪個省？', ans: 'Jujuy', wrong: ['Salta', 'Mendoza', 'Río Negro'], explain: '最高的 Finca Moya 在 Jujuy，達 3,329 公尺。' },
  { g: '海拔與氣候', easy: false, stem: 'Patagonia 的涼爽主要來自什麼？', ans: '緯度與風', wrong: ['海拔', '雪水', '石灰質土壤'], explain: 'Patagonia 海拔僅 250–700 公尺，涼爽來自緯度與風。' },
  { g: '海拔與氣候', easy: false, stem: 'San Juan 的 Zonda 風主要在哪段期間吹？', ans: '5 至 11 月', wrong: ['12 至 2 月', '3 至 4 月', '全年無風'], explain: 'Zonda 風主要在 5 至 11 月吹，能在數小時內讓氣溫升高 10–15°C，並抑制黴菌。' },
  { g: '產業與品種', easy: true, stem: '2023 年 Malbec 占阿根廷出口品種酒容量的大約多少？', ans: '69.3%', wrong: ['25%', '40%', '90%'], explain: '2023 年 Malbec 占出口品種酒容量的 69.3%（INV）。' },
  { g: '產業與品種', easy: false, stem: '阿根廷出口金額中，瓶裝酒約占多少？', ans: '約 90%', wrong: ['約 30%', '約 50%', '約 70%'], explain: '瓶裝酒約占出口金額的 90%；散裝只有約 3,300 萬歐元。' },
  { g: '產業與品種', easy: false, stem: 'Chandon 在阿根廷創立於哪一年？', ans: '1959', wrong: ['1885', '1977', '1999'], explain: 'Chandon 創立於 1959 年（LVMH），約占阿根廷氣泡酒市場 90%。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
