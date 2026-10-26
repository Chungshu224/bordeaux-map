/**
 * 香檳小遊戲題庫（產區速答／品種配對／分級辨識／釀造順序）
 * 事實一律取自課程 Level 1–3 已查證且「進測驗」的內容（INAO 規格 2024-01-25、Comité Champagne、DGCCRF）。
 * 來源有出入的數字一律不放：品種比例、生產者家數、Premier Cru 42／44、Échelle 終止年份、面積與村數、
 * 甜度級別的邊界值（只用區間中段的值，或只考順序）。
 * 子產區歸屬（尤其 Premier Cru）是通行分法，AOC 本身沒有法定子產區；歸屬有爭議的村莊（Pierry、Tauxières、Mutigny、Avenay-Val-d'Or）不出題。
 */

import { gt } from '../../locales/champagneUi/index.js'

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── 四大產區（教學分法；與課程、地圖一致）──────────────────────
export const REGION_GROUPS = [
  { key: 'montagne', label: '漢斯山（Montagne de Reims）' },
  { key: 'vallee',   label: '馬恩河谷（Vallée de la Marne）' },
  { key: 'blancs',   label: '白丘（Côte des Blancs）' },
  { key: 'bar',      label: '巴爾丘（Côte des Bar）' }
]
const GROUP_LABEL = Object.fromEntries(REGION_GROUPS.map(g => [g.key, g.label]))

// ── 17 個 Grand Cru 村莊（INAO 規格 2024；漢斯山 9／馬恩河谷 2／白丘 6）────
export const GRAND_CRU = [
  { name: 'Ambonnay', group: 'montagne' }, { name: 'Beaumont-sur-Vesle', group: 'montagne' },
  { name: 'Bouzy', group: 'montagne' }, { name: 'Louvois', group: 'montagne' },
  { name: 'Mailly-Champagne', group: 'montagne' }, { name: 'Puisieulx', group: 'montagne' },
  { name: 'Sillery', group: 'montagne' }, { name: 'Verzenay', group: 'montagne' }, { name: 'Verzy', group: 'montagne' },
  { name: 'Aÿ', group: 'vallee' }, { name: 'Tours-sur-Marne', group: 'vallee' },
  { name: 'Avize', group: 'blancs' }, { name: 'Chouilly', group: 'blancs' }, { name: 'Cramant', group: 'blancs' },
  { name: 'Le Mesnil-sur-Oger', group: 'blancs' }, { name: 'Oger', group: 'blancs' }, { name: 'Oiry', group: 'blancs' }
]

// ── Premier Cru（INAO 規格列出的 42 村中，子產區無爭議者；僅供「困難」模式）────
export const PREMIER_CRU = [
  { name: 'Ludes', group: 'montagne' }, { name: 'Chigny-lès-Roses', group: 'montagne' }, { name: 'Rilly-la-Montagne', group: 'montagne' },
  { name: 'Villers-Allerand', group: 'montagne' }, { name: 'Villers-Marmery', group: 'montagne' }, { name: 'Trépail', group: 'montagne' },
  { name: 'Écueil', group: 'montagne' }, { name: 'Sermiers', group: 'montagne' }, { name: 'Taissy', group: 'montagne' },
  { name: 'Cormontreuil', group: 'montagne' }, { name: 'Billy-le-Grand', group: 'montagne' },
  { name: 'Hautvillers', group: 'vallee' }, { name: 'Dizy', group: 'vallee' }, { name: 'Cumières', group: 'vallee' }, { name: 'Champillon', group: 'vallee' },
  { name: 'Vertus', group: 'blancs' }, { name: 'Cuis', group: 'blancs' }, { name: 'Grauves', group: 'blancs' },
  { name: 'Bergères-lès-Vertus', group: 'blancs' }, { name: 'Étréchy', group: 'blancs' }
]

function regionOptions(item, diff) {
  const correctGroup = REGION_GROUPS.find(g => g.key === item.group)
  const others = shuffle(REGION_GROUPS.filter(g => g.key !== item.group))
  return shuffle([correctGroup, ...others.slice(0, 3)])
}

export function buildRegionQuestions(diff) {
  const toQ = (v, tag, hint) => {
    const groups = regionOptions(v, diff)
    return {
      tag: gt(tag), stem: v.name, hint: gt(hint),
      options: groups.map(g => gt(g.label)),
      correct: groups.findIndex(g => g.key === v.group),
      explain: gt('{name} 位於「{g}」。', { name: v.name, g: gt(GROUP_LABEL[v.group]) })
    }
  }
  const gc = GRAND_CRU.map(v => toQ(v, 'Grand Cru 村莊 → 產區', 'Grand Cru 村莊'))
  if (diff === 'easy') return shuffle(gc)
  const pc = PREMIER_CRU.map(v => toQ(v, 'Premier Cru 村莊 → 產區', 'Premier Cru 村莊'))
  // 反向題：哪一個是某產區的 Grand Cru？
  const reverse = REGION_GROUPS.filter(g => g.key !== 'bar').flatMap(g => {
    const inG = GRAND_CRU.filter(v => v.group === g.key)
    return shuffle(inG).slice(0, 2).map(v => {
      const wrong = shuffle(GRAND_CRU.filter(x => x.group !== g.key)).slice(0, 3)
      const opts = shuffle([v, ...wrong])
      return {
        tag: gt('產區 → Grand Cru 村莊'),
        stem: gt('下列哪一個是「{g}」的 Grand Cru 村莊？', { g: gt(g.label) }),
        options: opts.map(o => o.name), correct: opts.indexOf(v),
        explain: gt('{name} 是「{g}」的 Grand Cru；17 個 Grand Cru 的分布為漢斯山 9、馬恩河谷 2、白丘 6。', { name: v.name, g: gt(g.label) })
      }
    })
  })
  // 分級題：Grand Cru 還是 Premier Cru？
  const grade = shuffle([...shuffle(GRAND_CRU).slice(0, 5).map(v => ({ v, gc: true })), ...shuffle(PREMIER_CRU).slice(0, 5).map(v => ({ v, gc: false }))]).map(({ v, gc: isGc }) => {
    const opts = ['Grand Cru', 'Premier Cru']
    return {
      tag: gt('村莊 → 分級'), stem: v.name, options: opts, correct: isGc ? 0 : 1,
      explain: gt('{name} 在 INAO 規格中列為 {g}。', { name: v.name, g: isGc ? 'Grand Cru' : 'Premier Cru' })
    }
  })
  return shuffle([...gc, ...pc, ...reverse, ...grade])
}

// ── 品種與產區風格 ──────────────────────────────────────────────
const MAINS = ['Pinot Noir', 'Meunier', 'Chardonnay']
const GRAPE_Q = [
  { stem: 'Pinot Noir 在調配中的主要角色是？', tag: '品種 → 角色', ans: '骨架：紅色水果、飽滿酒體與陳年架構',
    wrong: ['圓潤的果味，讓 NV 更早適飲', '細緻、柑橘與花香、高酸', '專門提供氣泡的細緻度'],
    explain: 'Pinot Noir 帶來結構、酒體與紅色水果；在漢斯山與巴爾丘最為重要。' },
  { stem: 'Chardonnay 在調配中的主要角色是？', tag: '品種 → 角色', ans: '細緻、柑橘與花香、高酸與陳年潛力',
    wrong: ['骨架：紅色水果與飽滿酒體', '圓潤的果味，讓 NV 更早適飲', '提供深色澤與單寧'],
    explain: 'Chardonnay 帶來細緻、柑橘與花香、高酸與陳年潛力；白丘是核心。' },
  { stem: 'Meunier 在調配中的主要角色是？', tag: '品種 → 角色', ans: '圓潤的果味與柔和口感，常讓 NV 更早適飲',
    wrong: ['骨架：紅色水果與陳年架構', '細緻、柑橘與花香、高酸', '帶來最高的酸度與礦物感'],
    explain: 'Meunier 果味豐厚、酸度較低，讓 NV 更早適飲；馬恩河谷最具代表。' },
  { stem: '下列哪一項最符合 Meunier 的栽培特性？', tag: '品種 → 特性', ans: '發芽較晚、較耐春霜，成熟較早',
    wrong: ['發芽最早、最怕春霜', '成熟最晚、需要最溫暖的年份', '只能種在白堊以外的土壤'],
    explain: 'Meunier 發芽較晚所以較耐春霜，成熟也較早。' },
  { stem: '漢斯山的主要品種是？', tag: '產區 → 主品種', ans: 'Pinot Noir', wrong: ['Chardonnay', 'Meunier', 'Arbane'], explain: '漢斯山與巴爾丘以 Pinot Noir 為主。' },
  { stem: '馬恩河谷的代表品種是？', tag: '產區 → 主品種', ans: 'Meunier', wrong: ['Chardonnay', 'Pinot Noir', 'Petit Meslier'], explain: '馬恩河谷越往西，Meunier 越占優勢。' },
  { stem: '白丘的主要品種是？', tag: '產區 → 主品種', ans: 'Chardonnay', wrong: ['Pinot Noir', 'Meunier', 'Pinot Blanc'], explain: '白丘以 Chardonnay 為主。' },
  { stem: '巴爾丘（Aube）的主要品種是？', tag: '產區 → 主品種', ans: 'Pinot Noir', wrong: ['Chardonnay', 'Meunier', 'Arbane'], explain: '巴爾丘以 Pinot Noir 為主。' },
  { stem: 'Blanc de Blancs 使用的葡萄是？', tag: '風格 → 品種', ans: '只用白葡萄（實務上幾乎都是 Chardonnay）',
    wrong: ['只用 Pinot Noir 和／或 Meunier', '白、黑葡萄各半', '只用 Pinot Blanc'], explain: 'Blanc de Blancs 100% 白葡萄；Blanc de Noirs 只用黑葡萄。' },
  { stem: 'Blanc de Noirs 使用的葡萄是？', tag: '風格 → 品種', ans: '只用 Pinot Noir 和／或 Meunier，釀成白酒',
    wrong: ['只用 Chardonnay', '黑白葡萄調配後的粉紅酒', '只用 Arbane'], explain: 'Blanc de Noirs 用黑葡萄釀成白酒，風格較豐滿、偏紅色水果。' },
  { stem: 'Arbane 屬於哪一類？', tag: '古老與新品種', ans: '法定許可但極少種植的古老品種',
    wrong: ['三大主要品種之一', '抗黴病的新品種', 'Chardonnay 的粉紅變異'], explain: 'Arbane、Petit Meslier、Pinot Blanc、Pinot Gris 都是許可品種，但合計占比極低。' },
  { stem: 'Voltis 是什麼？', tag: '古老與新品種', ans: '抗黴病的新品種（INRAE 與 JKI 培育），與傳統品種分開管理',
    wrong: ['最古老的法定品種', '白丘的特有無性繁殖系', 'Meunier 的別名'], explain: 'Voltis 屬新品種，園區上限 5%、單一調配上限 10%。' }
]

export function buildGrapeQuestions(diff) {
  const mk = q => {
    const opts = shuffle([q.ans, ...q.wrong])
    return { tag: gt(q.tag), stem: gt(q.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(q.ans), explain: gt(q.explain) }
  }
  const easyTags = ['品種 → 角色', '產區 → 主品種', '風格 → 品種']
  const pool = diff === 'easy' ? GRAPE_Q.filter(q => easyTags.includes(q.tag)) : GRAPE_Q
  return shuffle(pool).map(mk)
}

// ── 分級辨識（制度與術語）────────────────────────────────────────
const CODE_ITEMS = [
  { code: 'NM', full: 'négociant-manipulant', zh: '酒廠：買入葡萄、果汁或酒，在自家完成最後階段，大型酒廠多屬此類' },
  { code: 'RM', full: 'récoltant-manipulant', zh: '種植者自釀自售：只用自己收成的葡萄在自家釀製' },
  { code: 'CM', full: 'coopérative de manipulation', zh: '合作社' },
  { code: 'RC', full: 'récoltant-coopérateur', zh: '合作社成員，以自己的品牌銷售合作社釀的酒' },
  { code: 'SR', full: 'société de récoltants', zh: '種植者協會' },
  { code: 'ND', full: 'négociant-distributeur', zh: '經銷商' },
  { code: 'MA', full: 'marque d\'acheteur', zh: '買家品牌' }
]
const CODE_EASY = ['NM', 'RM', 'CM']

const TERM_ITEMS = [
  { stem: '殘糖低於 3 g/L，且不另加糖', ans: 'Brut Nature', wrong: ['Extra Brut', 'Brut', 'Extra Dry'], explain: 'Brut Nature（Pas Dosé）低於 3 g/L 且不添加糖。' },
  { stem: '由最乾到最甜，下列何者排序正確？', ans: 'Extra Brut → Brut → Sec → Demi-Sec', wrong: ['Brut → Extra Brut → Sec → Demi-Sec', 'Brut → Sec → Extra Brut → Demi-Sec', 'Extra Brut → Sec → Brut → Demi-Sec'],
    explain: '由乾到甜：Brut Nature → Extra Brut → Brut → Extra Dry → Sec → Demi-Sec → Doux。' },
  { stem: '殘糖約 40 g/L 的香檳，甜度用語是？', ans: 'Demi-Sec', wrong: ['Brut', 'Sec', 'Doux'], explain: 'Demi-Sec 約 32–50 g/L（法規容許每級 ±3 g/L 誤差）。' },
  { stem: '殘糖約 60 g/L 的香檳，甜度用語是？', ans: 'Doux', wrong: ['Demi-Sec', 'Sec', 'Extra Dry'], explain: 'Doux 超過 50 g/L，是最甜的一級。' },
  { stem: '殘糖約 25 g/L 的香檳，甜度用語是？', ans: 'Sec', wrong: ['Brut', 'Demi-Sec', 'Doux'], explain: 'Sec 約 17–32 g/L；名字是「乾」，實際上是微甜。' },
  { stem: '殘糖約 8 g/L 的香檳，甜度用語是？', ans: 'Brut', wrong: ['Sec', 'Demi-Sec', 'Doux'], explain: 'Brut 低於 12 g/L，是最常見的級別。' },
  { stem: '下列哪一個比 Brut 更甜，名字卻容易讓人誤以為更乾？', ans: 'Extra Dry', wrong: ['Extra Brut', 'Brut Nature', 'Pas Dosé'], explain: 'Extra Dry 約 12–17 g/L，比 Brut 甜。' },
  { stem: '哪一個步驟決定香檳最終的甜度？', ans: '除渣後的 dosage（liqueur d\'expédition）', wrong: ['壓榨', '轉瓶 remuage', '調配 assemblage'], explain: '除渣後補回的 liqueur d\'expédition 決定最終甜度。' },
  { stem: '依 INAO 規格，NV 香檳自裝瓶起的最短陳年是？', ans: '15 個月', wrong: ['12 個月', '24 個月', '36 個月'], explain: 'NV 至少 15 個月；Vintage 至少 36 個月（自裝瓶起）。' },
  { stem: '依 INAO 規格，Vintage 香檳自裝瓶起的最短陳年是？', ans: '36 個月', wrong: ['15 個月', '24 個月', '48 個月'], explain: 'Vintage 至少 36 個月。' },
  { stem: '標籤上的 Millésime 代表？', ans: '全部來自該年份的葡萄（Vintage）', wrong: ['最高等級的 Prestige Cuvée', '只用 Chardonnay', '殘糖為零'], explain: 'Millésime＝年份香檳；依 DGCCRF 指南，葡萄須 100% 來自該年。' },
  { stem: '「Prestige Cuvée」在法規上的地位是？', ans: '市場用語，沒有法定定義', wrong: ['INAO 規格定義的最高等級', '只能用 Grand Cru 葡萄', '必須陳年至少 60 個月'], explain: 'INAO 規格與 DGCCRF 指南都沒有 Prestige cuvée 的法定定義。' },
  { stem: '歐盟內，「méthode champenoise」一詞專屬於？', ans: 'Champagne', wrong: ['任何傳統法氣泡酒', 'Crémant', 'Cava'], explain: '其他產區改用 traditional method（méthode traditionnelle）等說法。' }
]

const FACT_ITEMS = [
  { stem: 'INAO 規格中，可使用「Grand Cru」的村莊共有幾個？', ans: '17 個', wrong: ['9 個', '42 個', '319 個'], explain: '17 個 Grand Cru：漢斯山 9、馬恩河谷 2、白丘 6。' },
  { stem: '17 個 Grand Cru 在漢斯山、馬恩河谷、白丘的分布依序為？', ans: '9／2／6', wrong: ['6／2／9', '9／6／2', '8／3／6'], explain: '漢斯山 9、馬恩河谷 2（Aÿ、Tours-sur-Marne）、白丘 6。' },
  { stem: '價格量表中，Grand Cru 與 Premier Cru 的百分比分別是？', ans: '100%；90–99%', wrong: ['90%；80–89%', '100%；80–99%', '95%；85–94%'], explain: '100%＝Grand Cru，90–99%＝Premier Cru，其餘最低 80%。' },
  { stem: '哪個子產區沒有任何 Grand Cru 或 Premier Cru 村莊？', ans: '巴爾丘（Côte des Bar，Aube）', wrong: ['漢斯山', '馬恩河谷', '白丘'], explain: '規格列出的 Grand／Premier Cru 村莊全部在 Marne 省。' },
  { stem: '依規格，Vintage 香檳最多可占一位業者當年酒量的？', ans: '80%', wrong: ['50%', '65%', '100%'], explain: 'Vintage 不得超過該年度酒量的 80%，且不含儲備酒。' },
  { stem: '依規格，除渣最早可在裝瓶後多久進行？', ans: '12 個月', wrong: ['3 個月', '6 個月', '15 個月'], explain: '除渣不得早於裝瓶後 12 個月；上市的最短陳年另有 15／36 個月規定。' },
  { stem: '關於儲備酒，下列何者正確？', ans: '儲備酒不可標示年份', wrong: ['儲備酒可標示為年份酒', '儲備酒完全禁止', '儲備酒必須全數用於 Vintage'], explain: '儲備酒不可標示年份；每位業者另有儲備上限（數值各來源有出入，不進測驗）。' },
  { stem: '每年的「商業產量」（可上市產量）由誰決定？', ans: 'Comité Champagne', wrong: ['INAO 單獨決定', '各酒莊自行決定', '歐盟執委會'], explain: 'Comité Champagne 每年夏季決定商業產量。' },
  { stem: '瓶中二次發酵完成後，瓶內壓力大約是？', ans: '約 5–6 bar', wrong: ['約 1–2 bar', '約 10 bar', '約 20 bar'], explain: 'Comité Champagne：5–6 bar，約為汽車輪胎的三倍。' }
]

export function buildClassificationQuestions(diff) {
  const mk = (stem, tag, ans, wrong, explain) => {
    const opts = shuffle([ans, ...wrong])
    return { tag: gt(tag), stem: gt(stem), options: opts.map(o => gt(o)), correct: opts.indexOf(ans), explain: gt(explain) }
  }
  const codes = CODE_ITEMS.filter(c => diff !== 'easy' || CODE_EASY.includes(c.code)).flatMap(c => {
    const otherCodes = shuffle(CODE_ITEMS.filter(x => x.code !== c.code)).slice(0, 3)
    return [
      mk(`標籤代碼「${c.code}」代表？`, '標籤代碼', c.zh, otherCodes.map(o => o.zh), `${c.code}＝${c.full}：${c.zh}。`),
      mk(c.zh, '定義 → 標籤代碼', c.code, otherCodes.map(o => o.code), `答案是 ${c.code}（${c.full}）。`)
    ]
  })
  const terms = TERM_ITEMS.map(t => mk(t.stem, '甜度、陳年與標示', t.ans, t.wrong, t.explain))
  if (diff === 'easy') return shuffle([...codes, ...terms.slice(0, 9)])
  const facts = FACT_ITEMS.map(f => mk(f.stem, '制度數字與規範', f.ans, f.wrong, f.explain))
  return shuffle([...codes, ...terms, ...facts])
}

// ── 釀造順序（引擎為單選題，排序改為「下一步／前一步」）────────────
export const PROCESS_STEPS = [
  '手採與整串壓榨', '一次發酵', '調配 assemblage', '裝瓶 tirage', '二次發酵與酒渣陳年', '轉瓶 remuage', '除渣 dégorgement', 'dosage 與封瓶'
]
export function buildProcessQuestions(diff) {
  const qs = []
  for (let i = 0; i < PROCESS_STEPS.length - 1; i++) {
    const wrong = shuffle(PROCESS_STEPS.filter((_, j) => j !== i + 1 && j !== i)).slice(0, 3)
    const opts = shuffle([PROCESS_STEPS[i + 1], ...wrong])
    qs.push({ tag: gt('傳統法步驟：下一步'), stem: gt('「{s}」之後緊接著的步驟是？', { s: gt(PROCESS_STEPS[i]) }),
      options: opts.map(o => gt(o)), correct: opts.indexOf(PROCESS_STEPS[i + 1]),
      explain: gt('傳統法順序：手採壓榨 → 一次發酵 → 調配 → 裝瓶 → 二次發酵與酒渣陳年 → 轉瓶 → 除渣 → dosage 與封瓶。') })
  }
  const first = ['調配 assemblage', '裝瓶 tirage', '轉瓶 remuage', '除渣 dégorgement']
  for (const s of first) {
    const i = PROCESS_STEPS.indexOf(s)
    const wrong = shuffle(PROCESS_STEPS.filter((_, j) => j !== i - 1 && j !== i)).slice(0, 3)
    const opts = shuffle([PROCESS_STEPS[i - 1], ...wrong])
    qs.push({ tag: gt('傳統法步驟：前一步'), stem: gt('緊接在「{s}」之前的步驟是？', { s: gt(s) }),
      options: opts.map(o => gt(o)), correct: opts.indexOf(PROCESS_STEPS[i - 1]),
      explain: gt('傳統法順序：手採壓榨 → 一次發酵 → 調配 → 裝瓶 → 二次發酵與酒渣陳年 → 轉瓶 → 除渣 → dosage 與封瓶。') })
  }
  const concept = [
    { stem: '傳統法與 Charmat 最關鍵的差別是？', ans: '傳統法在瓶中二次發酵，Charmat 在大槽中二次發酵', wrong: ['傳統法不加糖', 'Charmat 需要酒渣陳年', '兩者都在大槽中發酵'], explain: 'Prosecco 是最典型的 Charmat（槽式法）。' },
    { stem: '哪個步驟把酒渣集中到瓶頸？', ans: '轉瓶 remuage', wrong: ['調配 assemblage', '裝瓶 tirage', 'dosage'], explain: '轉瓶（手轉或 gyropalette）讓酒渣集中到瓶頸，再冷凍除渣。' },
    { stem: 'liqueur de tirage 由什麼組成？', ans: '糖、酵母與澄清劑（加入基酒中）', wrong: ['酒與糖（除渣後補回）', '只有酵母', '蒸餾酒精'], explain: 'Liqueur de tirage 在裝瓶時加入；除渣後補回的是 liqueur d\'expédition（酒＋糖）。' },
    { stem: '二次發酵產生的氣泡，來自哪裡？', ans: '酵母發酵糖產生的 CO₂，被鎖在密閉瓶內', wrong: ['人工灌入 CO₂', '一次發酵的殘留氣體', '木塞的化學反應'], explain: '在瓶中二次發酵，CO₂ 溶入酒中，產生約 5–6 bar 的壓力。' },
    { stem: '酒渣陳年期間，酵母死亡後分解（自溶）會帶來什麼？', ans: '麵包、brioche、堅果等風味與更細緻的氣泡', wrong: ['更強的單寧', '更高的酸度', '紅色水果香氣'], explain: '自溶是傳統法風格的核心。' }
  ].map(q => mk2(q))
  function mk2(q) {
    const opts = shuffle([q.ans, ...q.wrong])
    return { tag: gt('釀造概念'), stem: gt(q.stem), options: opts.map(o => gt(o)), correct: opts.indexOf(q.ans), explain: gt(q.explain) }
  }
  return diff === 'easy' ? shuffle([...qs.slice(0, 7), ...concept]) : shuffle([...qs, ...concept])
}
