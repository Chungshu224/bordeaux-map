// 全球氣泡酒專論：遊戲題庫與出題器（題目皆取自已查證內容；有 ⚠ 的數字不出題）
import { REGIONS, METHODS } from './regions.js'
import { SPARKLING_CONTENT } from './content.js'

export const GAMES = [
  { id: 'method', icon: '🧪', title: '釀法配對', desc: '產區 → 主要釀法' },
  { id: 'sweet', icon: '🍬', title: '甜度級別', desc: '殘糖 g/L → 甜度用語' },
  { id: 'label', icon: '🏷️', title: '標籤判讀', desc: '標籤用語 → 釀法' },
  { id: 'blind', icon: '👃', title: '盲品線索', desc: '風味描述 → 釀法或風格' },
  { id: 'flash', icon: '⚡', title: '知識閃問', desc: '取自 Level 1–3 課程測驗' }
]

const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}
// 以正解加上干擾選項組成 n 個選項，並回傳正解位置
function build(q, correct, pool, explain, n = 4) {
  const wrong = shuffle(pool.filter(x => x !== correct)).slice(0, n - 1)
  const options = shuffle([correct, ...wrong])
  return { q, options, answer: options.indexOf(correct), explain }
}
const take = (list, n) => shuffle(list).slice(0, n)

// ① 釀法配對：只取單一釀法的產區
const MBY = Object.fromEntries(METHODS.map(m => [m.id, m]))
const METHOD_POOL = ['traditional', 'tank', 'ancestral', 'asti'].map(k => MBY[k].label)
function methodQuestions(n) {
  const regs = REGIONS.filter(r => r.methods.length === 1 && MBY[r.methods[0]] && r.methods[0] !== 'varies')
  return take(regs, n).map(r => {
    const label = MBY[r.methods[0]].label
    return build(`「${r.name}」（${r.country}）的主要釀法是？`, label, METHOD_POOL, `${r.name}：${r.note}`)
  })
}

// ② 甜度級別：只用已證實的四級（英國保留版 EU 2019/33 附件 III A）
const SWEET_LEVELS = [
  { label: 'Extra Dry', lo: 12, hi: 17 },
  { label: 'Dry（法文 Sec）', lo: 17, hi: 32 },
  { label: 'Medium Dry（法文 Demi-sec）', lo: 32, hi: 50 },
  { label: 'Sweet（法文 Doux）', lo: 50, hi: 70 }
]
function sweetQuestions(n) {
  const out = []
  for (let i = 0; i < n; i++) {
    const lv = SWEET_LEVELS[i % SWEET_LEVELS.length]
    // 避開邊界值，取範圍中間 60% 內的整數
    const span = lv.hi - lv.lo
    const g = Math.round(lv.lo + span * (0.2 + Math.random() * 0.6))
    out.push(build(`殘糖 ${g} g/L 的氣泡酒，依 EU 用語屬於哪一級？`, lv.label, SWEET_LEVELS.map(x => x.label),
      `Extra Dry 12–17、Dry 17–32、Medium Dry 32–50、Sweet 超過 50 g/L。Extra Dry 比 Dry/Sec 更乾。`))
  }
  return shuffle(out)
}

// ③ 標籤判讀
const LABELS = [
  ['Méthode Traditionnelle', '傳統法'], ['Metodo Classico', '傳統法'], ['Método Tradicional', '傳統法'], ['Cap Classique', '傳統法'],
  ['Charmat', '槽式法'], ['Martinotti', '槽式法'], ['Metodo Italiano', '槽式法'],
  ['Méthode Ancestrale', '祖傳法'], ['Pét-Nat', '祖傳法']
]
const LABEL_POOL = ['傳統法', '槽式法', '祖傳法', '轉移法', 'Asti 法']
function labelQuestions(n) {
  return take(LABELS, n).map(([t, a]) => build(`標籤上寫著「${t}」，通常代表？`, a, LABEL_POOL, `「${t}」是${a}的標籤用語。Méthode Champenoise 在 EU 內只留給香檳。`))
}

// ④ 盲品線索
const BLIND = [
  ['明顯的麵包、餅乾、烤吐司，氣泡細緻綿密', '傳統法（酒渣陳年較久）'],
  ['清新花香與梨、桃，氣泡較粗，沒有自溶風味', '槽式法'],
  ['甜、低酒精、葡萄味明顯', 'Asti 法（Moscato 類型）'],
  ['氣泡粗而短、風味簡單', '氣體注入'],
  ['渾濁、帶酵母感', '祖傳法／Pét-Nat'],
  ['紅色、帶紅色果香，乾到甜', '起泡紅酒（如 Lambrusco）']
]
function blindQuestions(n) {
  const pool = BLIND.map(b => b[1])
  return take(BLIND, n).map(([d, a]) => build(`盲品描述：${d}。最可能是？`, a, pool, `這是辨識線索（傾向），不是絕對：麵包味只能推到傳統法，產區要靠品種、酸度與甜度判斷。`))
}

// ⑤ 知識閃問：取自課程小測驗
function flashQuestions(n) {
  const all = Object.values(SPARKLING_CONTENT).flatMap(c => c.quiz || [])
  return take(all, n).map(x => ({ q: x.q, options: x.options, answer: x.answer, explain: x.explain }))
}

export function makeQuestions(gameId, n = 10) {
  switch (gameId) {
    case 'method': return methodQuestions(n)
    case 'sweet': return sweetQuestions(n)
    case 'label': return labelQuestions(n)
    case 'blind': return blindQuestions(n)
    case 'flash': return flashQuestions(n)
    default: return []
  }
}
