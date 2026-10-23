/**
 * 知識閃問題庫：直接取自 Level 1–3 課程測驗（已逐題查證），不另外維護一份。
 * 簡單 = Level 1；困難 = Level 2 + 3。
 */
import { shuffle } from './gameData.js'

const modules = import.meta.glob('./gr-l[123]-*.js', { eager: true })

const LEVEL_OF = f => Number((f.match(/gr-l(\d)-/) || [])[1])
const LABELS = { 1: 'Level 1', 2: 'Level 2', 3: 'Level 3' }

function collect(level) {
  const out = []
  for (const [path, mod] of Object.entries(modules)) {
    if (LEVEL_OF(path) !== level) continue
    for (const slide of mod.lessonContent || []) {
      if (slide.component !== 'QuizSlide') continue
      for (const q of slide.componentProps?.slide?.questions || []) {
        if (q.type !== 'single' || !Array.isArray(q.options)) continue
        out.push({ ...q, level })
      }
    }
  }
  return out
}

function toGameQuestion(q) {
  const clean = o => String(o).replace(/^[A-D][.、．]\s*/, '')
  const items = q.options.map((o, i) => ({ text: clean(o), right: i === q.correct }))
  const opts = shuffle(items)
  return {
    tag: LABELS[q.level],
    stem: q.question,
    options: opts.map(o => o.text),
    correct: opts.findIndex(o => o.right),
    explain: q.explanation || ''
  }
}

export function buildFlashQuestions(diff) {
  const pool = diff === 'easy' ? collect(1) : [...collect(2), ...collect(3)]
  // 同題幹去重（綜合評量常重複課內題）
  const seen = new Set()
  const uniq = pool.filter(q => (seen.has(q.question) ? false : (seen.add(q.question), true)))
  return shuffle(uniq).map(toGameQuestion)
}
