/**
 * 知識閃問題庫：直接取自 Level 1–3 課程測驗（已逐題查證），不另外維護一份。
 * 簡單 = Level 1；困難 = Level 2 + 3。
 */
import { shuffle } from './gameData.js'
import { i18n } from '../../locales/index.js'

// 非中文時，題幹／選項／解析套用各課程 overlay（與課程內測驗同一份翻譯）
const OVERLAYS = {
  en: import.meta.glob('../../locales/en/lessons/languedoc/*.json', { eager: true, import: 'default' }),
  ja: import.meta.glob('../../locales/ja/lessons/languedoc/*.json', { eager: true, import: 'default' })
}
function overlayFor(path) {
  const loc = i18n.global.locale.value
  const id = path.match(/(lg-l\d-\d)\.js$/)?.[1]
  if (!id || !OVERLAYS[loc]) return null
  const hit = Object.entries(OVERLAYS[loc]).find(([p]) => p.endsWith('/' + id + '.json'))
  return hit ? hit[1] : null
}

const modules = import.meta.glob('./lg-l[123]-*.js', { eager: true })

const LEVEL_OF = f => Number((f.match(/lg-l(\d)-/) || [])[1])
const LABELS = { 1: 'Level 1', 2: 'Level 2', 3: 'Level 3' }

function collect(level) {
  const out = []
  for (const [path, mod] of Object.entries(modules)) {
    if (LEVEL_OF(path) !== level) continue
    const ov = overlayFor(path)
    ;(mod.lessonContent || []).forEach((slide, si) => {
      if (slide.component !== 'QuizSlide') return
      ;(slide.componentProps?.slide?.questions || []).forEach((q, qi) => {
        if (q.type !== 'single' || !Array.isArray(q.options)) return
        const base = `slides.${si}.componentProps.slide.questions.${qi}`
        const t = k => (ov && ov[`${base}.${k}`]) || null
        out.push({
          ...q,
          level,
          question: t('question') || q.question,
          options: q.options.map((o, oi) => t(`options.${oi}`) || o),
          explanation: t('explanation') || q.explanation,
          zhQuestion: q.question
        })
      })
    })
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
  const uniq = pool.filter(q => (seen.has(q.zhQuestion) ? false : (seen.add(q.zhQuestion), true)))
  return shuffle(uniq).map(toGameQuestion)
}
