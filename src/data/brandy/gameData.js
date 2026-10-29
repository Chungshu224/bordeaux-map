/**
 * 白蘭地小遊戲題庫（產區速答／品種配對／制度辨識）
 * 事實一律取自課程 Level 1–3 已查證內容（詳見 BRANDY_COURSE_FRAMEWORK.md）。
 * 來源有出入的數字（各 cru 公頃數、Ugni Blanc 占比、Armagnac XO 年數、蒸餾酒精度細節、
 * 哪些酒廠帶酒泥蒸餾、獲豁免的酒廠名單等）一律不放進題庫。
 * 資料維持中文原文；顯示時才用 gt() 轉換，判斷對錯仍以原文索引，不受語言影響。
 */

import { gt } from '../../locales/brandyUi/index.js'

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
  { key: 'cognac', label: 'Cognac（Charente）' },
  { key: 'armagnac', label: 'Armagnac（Gascogne）' },
  { key: 'europe', label: '歐洲其他產區' },
  { key: 'world', label: '新世界與其他產區' }
]

// ── 產地（cru／子區／地理標示）──────────────────────────────
// hint 只放特徵，不含該產地自己的名稱（「線索 → 產地」題型共用）
export const DAC_ITEMS = [
  { name: 'Grande Champagne', zone: 'cognac', easy: true, hint: '薄層黏土與富含石灰的白堊質土壤，細緻輕盈、以花香為主，需要長時間桶陳' },
  { name: 'Petite Champagne', zone: 'cognac', easy: false, hint: '與 Grande Champagne 同屬白堊質土壤，風格相近但細緻度稍遜' },
  { name: 'Borderies', zone: 'cognac', easy: true, hint: '最小的 cru，黏土與燧石土壤，酒質圓潤、帶紫羅蘭香' },
  { name: 'Fins Bois', zone: 'cognac', easy: false, hint: '環繞前三個 cru、面積最大，紅色黏質石灰土，成熟較快、常作調配基底' },
  { name: 'Bons Bois', zone: 'cognac', easy: false, hint: '形成大片環帶，砂質土壤由中央山地侵蝕而來' },
  { name: 'Bois Ordinaires', zone: 'cognac', easy: true, hint: '沿海岸與 Ré、Oléron 島，幾乎全是砂土，帶海洋風味、熟成快' },
  { name: 'Bas-Armagnac', zone: 'armagnac', easy: true, hint: '位於西部，貧瘠偏酸的黏質壤土，輕盈果香，約占產量 62%' },
  { name: 'Armagnac-Ténarèze', zone: 'armagnac', easy: false, hint: '位於中部的過渡區，厚重的黏土石灰質 terreforts，風格較豐滿，約占 37%' },
  { name: 'Haut-Armagnac', zone: 'armagnac', easy: false, hint: '位於南部與東部的石灰質丘陵，葡萄園零散，約占 1%' },
  { name: 'Brandy de Jerez', zone: 'europe', easy: true, hint: '使用 solera 系統與曾裝雪莉酒的美國橡木桶，Gran Reserva 平均至少 3 年' },
  { name: 'Penedès', zone: 'europe', easy: false, hint: '位於 Catalunya 的白蘭地，基酒品種有 Parellada、Folle Blanche 與 Ugni Blanc' },
  { name: 'Metaxa', zone: 'europe', easy: true, hint: '1888 年創立，以蒸餾酒調配 Samos 麝香葡萄酒與地中海植物的希臘烈酒' },
  { name: 'Grappa di Barolo', zone: 'europe', easy: false, hint: '以釀酒後的葡萄渣蒸餾，使用地區名時酒精度至少 40%' },
  { name: 'Grappa Friulana', zone: 'europe', easy: false, hint: '八個 Grappa 地理標示之一，Riserva 至少 18 個月木桶' },
  { name: 'Pisco（秘魯）', zone: 'world', easy: true, hint: '單次蒸餾、不加水、不用橡木，惰性容器靜置至少 3 個月，八個核准品種' },
  { name: 'Pisco（智利）', zone: 'world', easy: false, hint: '1931 年劃定 Coquimbo 與 Atacama，允許橡木熟成與加水降度' },
  { name: '南非 Paarl', zone: 'world', easy: false, hint: 'KWV 1918 年成立於此，Pot-still brandy 須 100% 壺式蒸餾並熟成至少 3 年' },
  { name: 'Klein Karoo', zone: 'world', easy: false, hint: '南非白蘭地原料產區之一，與 Paarl、Stellenbosch、Robertson、Worcester 並列' },
  { name: 'Yerevan', zone: 'world', easy: true, hint: '1887 年有商人在此創立酒廠，1999 年國家標準要求用當地葡萄在國內生產' }
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
  { name: 'Ugni Blanc', color: '法國產區', desc: 'Cognac 最主要的品種，當地稱 Saint-Émilion，低酒精、高酸；也是 Penedès 的基酒品種之一' },
  { name: 'Folle Blanche', color: '法國產區', desc: '根瘤蚜之前 Cognac 的主要品種，現在占不到 1%；Armagnac 也使用' },
  { name: 'Colombard', color: '法國產區', desc: '高酸低糖，是 Cognac 與 Armagnac 的允許品種，也是南非白蘭地的基酒品種之一' },
  { name: 'Montils', color: '法國產區', desc: 'Cognac 規格中較早熟的品種' },
  { name: 'Folignan', color: '法國產區', desc: 'Ugni Blanc 與 Folle Blanche 的雜交種，2005 年才納入 Cognac 規格' },
  { name: 'Baco', color: '法國產區', desc: 'Armagnac 使用的雜交品種（Baco 22A），適合 Bas-Armagnac 的砂質土' },
  { name: 'Airén', color: '其他產區', desc: 'Brandy de Jerez 使用的品種之一，與 Palomino 並列' },
  { name: 'Palomino', color: '其他產區', desc: 'Brandy de Jerez 使用的品種之一，與 Airén 並列，採 solera 系統' },
  { name: 'Parellada', color: '其他產區', desc: 'Brandy del Penedès 的基酒品種之一' },
  { name: 'Quebranta', color: '其他產區', desc: '秘魯 Pisco 的非芳香品種；Italia、Moscatel、Torontel、Albilla 則是芳香品種' },
  { name: 'Chenin Blanc', color: '其他產區', desc: '南非白蘭地主要基酒品種，與 Colombar 並列，帶較豐富的黃色水果味' }
]

// 產地 → 代表品種（皆為課程已查證且無歧義者）
const DAC_GRAPE = [
  { dac: 'Cognac', grape: 'Ugni Blanc' },
  { dac: 'Armagnac 的雜交品種', grape: 'Baco' },
  { dac: 'Brandy de Jerez（與 Palomino 並列）', grape: 'Airén' },
  { dac: 'Brandy del Penedès', grape: 'Parellada' },
  { dac: '秘魯 Pisco 的非芳香品種', grape: 'Quebranta' },
  { dac: '南非白蘭地（與 Colombar 並列）', grape: 'Chenin Blanc' }
]

// 制度比例與門檻（課程已查證）
const RATIO_ITEMS = [
  { stem: '歐盟 Brandy 裝瓶至少多少 % vol？', ans: '36%', wrong: ['30%', '40%', '43%'], explain: 'Regulation (EU) 2019/787：Brandy 至少 36% vol。' },
  { stem: '歐盟 Brandy 的添加糖（以轉化糖計）上限是多少？', ans: '35 g/L', wrong: ['5 g/L', '20 g/L', '100 g/L'], explain: '35 g/L；Wine spirit 為 20 g/L。' },
  { stem: 'Fine Champagne 中 Grande Champagne 至少占多少？', ans: '50%', wrong: ['10%', '30%', '90%'], explain: 'cognac.com、Wikipedia：至少 50%。' },
  { stem: 'Cognac XO 的最低年數（2018 年 4 月起）？', ans: '10 年', wrong: ['2 年', '6 年', '14 年'], explain: 'XXO 為 14 年；舊版資料的 6 年已過時。' },
  { stem: 'Deutscher Weinbrand 至少須在橡木桶熟成多久？', ans: '12 個月', wrong: ['3 個月', '6 個月', '3 年'], explain: '桶容小於 1,000 公升，最低 38%。' },
  { stem: 'Solera Gran Reserva 平均至少多久？', ans: '3 年', wrong: ['6 個月', '1 年', '10 年'], explain: 'Solera 6 個月、Reserva 1 年、Gran Reserva 3 年。' },
  { stem: 'Grappa Riserva／Stravecchia 至少須在木桶多久？', ans: '18 個月', wrong: ['3 個月', '12 個月', '5 年'], explain: 'Vecchia／Invecchiata 為 12 個月。' },
  { stem: '標示單一品種的 Grappa，該品種須占至少多少？', ans: '85%', wrong: ['50%', '70%', '100%'], explain: 'Difford\'s Guide：至少 85%。' },
  { stem: '南非 Pot-still brandy 最短熟成多久？', ans: '3 年', wrong: ['6 個月', '1 年', '8 年'], explain: '桶容 340 公升以下，且須 100% 壺式蒸餾。' },
  { stem: '秘魯 Pisco 蒸餾後須在惰性容器靜置至少多久？', ans: '3 個月', wrong: ['1 週', '1 年', '3 年'], explain: '不加水、不用橡木。' }
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

// ── 制度辨識（法規與規格、歷史年份、蒸餾與熟成、市場與產業）────────
// easy: true 者進簡單模式；全部進困難模式
const CLASS_ITEMS = [
  { g: '法規與規格', easy: true, stem: 'Brandy 一詞源自荷蘭語的哪個字？', ans: 'brandewijn（燒過的酒）', wrong: ['brandeverre', 'branduyt', 'brandvuur'], explain: 'etymonline。' },
  { g: '法規與規格', easy: true, stem: '歐盟 Brandy 在 1,000 公升以上橡木容器至少熟成多久？', ans: '1 年', wrong: ['6 個月', '2 年', '3 年'], explain: '小於 1,000 公升的橡木桶則為 6 個月。' },
  { g: '法規與規格', easy: true, stem: 'Grappa 的原料是什麼？', ans: '葡萄渣（皮、籽、梗）', wrong: ['葡萄酒', '蘋果酒', '葡萄汁濃縮液'], explain: 'Grappa 屬 grape marc spirit。' },
  { g: '法規與規格', easy: false, stem: 'VS／VSOP／XO 是什麼性質的用語？', ans: '各產區的行業規範', wrong: ['歐盟統一定義', '品種名稱', '蒸餾器類型'], explain: '不是統一的歐盟定義。' },
  { g: '法規與規格', easy: false, stem: '秘魯 Pisco 蒸餾後可否加水降度？', ans: '不可', wrong: ['可以', '僅限出口', '僅限 Acholado'], explain: '不得加水或添加物；智利則允許。' },
  { g: '法規與規格', easy: false, stem: 'Deutscher Weinbrand 的添加糖上限是多少？', ans: '20 g/L', wrong: ['5 g/L', '35 g/L', '100 g/L'], explain: '歐盟 Brandy 一般上限為 35 g/L。' },
  { g: '歷史年份', easy: true, stem: 'Armagnac 的 AOC 是哪一年授予？', ans: '1936 年', wrong: ['1909 年', '1941 年', '2005 年'], explain: '1909 年的 Fallières 法令劃定三個區。' },
  { g: '歷史年份', easy: true, stem: 'Armagnac 最早的生產文獻約是哪一年？', ans: '1310 年', wrong: ['1479 年', '1688 年', '1936 年'], explain: 'alcademics。' },
  { g: '歷史年份', easy: false, stem: 'Folignan 是哪一年納入 Cognac 規格？', ans: '2005 年', wrong: ['1909 年', '1938 年', '2018 年'], explain: 'Ugni Blanc 與 Folle Blanche 的雜交種（Martell）。' },
  { g: '歷史年份', easy: false, stem: 'Metaxa 由 Spyros Metaxa 創立於哪一年？', ans: '1888 年', wrong: ['1715 年', '1887 年', '1982 年'], explain: 'Wikipedia。' },
  { g: '歷史年份', easy: false, stem: 'Germain-Robin 由誰、哪一年創立？', ans: 'Hubert Germain-Robin 與 Ansley Coale，1982 年', wrong: ['Gallo 家族，1933 年', 'Spyros Metaxa，1888 年', 'KWV，1918 年'], explain: 'Cigar Aficionado。' },
  { g: '蒸餾與熟成', easy: true, stem: 'Cognac 必須經過幾次蒸餾？', ans: '二次', wrong: ['一次', '三次', '不限'], explain: '第一次得 brouillis，第二次得 eau-de-vie。' },
  { g: '蒸餾與熟成', easy: true, stem: 'Cognac 蒸餾須在何時前結束？', ans: '次年 3 月 31 日', wrong: ['12 月 31 日', '次年 9 月 30 日', '沒有期限'], explain: 'Armagnac 同樣如此。' },
  { g: '蒸餾與熟成', easy: false, stem: '大部分 Armagnac 使用哪種蒸餾器？', ans: '小型連續式蒸餾器', wrong: ['Charentais 銅壺', 'Coffey 蒸餾器', '真空蒸餾器'], explain: '超過 95% 使用 alambic armagnacais。' },
  { g: '蒸餾與熟成', easy: false, stem: 'Rancio 約在橡木熟成多久後開始出現？', ans: '約 10 年', wrong: ['約 1 年', '約 50 年', '一開始就有'], explain: 'Difford\'s Guide。' },
  { g: '蒸餾與熟成', easy: false, stem: '橡木炭化層的「減法」作用是？', ans: '像活性碳吸附硫化物', wrong: ['增加糖度', '提高酒精度', '加速蒸發'], explain: 'WSET Level 2。' },
  { g: '市場與產業', easy: true, stem: '下列何者不屬於 Cognac 四大酒廠？', ans: 'Asbach', wrong: ['Courvoisier', 'Hennessy', 'Rémy Martin'], explain: 'Asbach 是德國 Weinbrand 品牌。' },
  { g: '市場與產業', easy: false, stem: '2024 年 Cognac 全球出口價值變化（BNIC）？', ans: '下降 10.6%', wrong: ['上升 10.6%', '下降 50%', '持平'], explain: 'The Drinks Business。' },
  { g: '市場與產業', easy: false, stem: '中國對歐盟白蘭地終裁稅率範圍？', ans: '27.7–34.9%', wrong: ['5–10%', '15–20%', '60–80%'], explain: '2025 年 7 月 5 日起（Just Drinks）。' },
  { g: '市場與產業', easy: false, stem: 'Armagnac 與 Cognac 產業結構的主要對比？', ans: 'Armagnac 以小型生產者為主，Cognac 大廠集中', wrong: ['兩者結構相同', 'Armagnac 由四大酒廠控制', 'Cognac 全由小農裝瓶'], explain: 'Wikipedia。' }
]

export function buildClassificationQuestions(diff) {
  const pool = diff === 'easy' ? CLASS_ITEMS.filter(i => i.easy) : CLASS_ITEMS
  return shuffle(pool.map(f => {
    const opts = shuffle([f.ans, ...f.wrong])
    return { tag: gt(f.g), stem: gt(f.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(f.ans), explain: gt(f.explain) }
  }))
}
