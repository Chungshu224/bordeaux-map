/**
 * Lesson i18n 共用工具
 *
 * 設計：將 lessonContent[] 的可翻譯字串「平坦化」為 flat key map：
 *   slides.0.title              → '課程導讀'
 *   slides.0.content            → '<div>...</div>'
 *   slides.1.highlights.0.title → '巴黎評判傳奇'
 *   slides.1.quiz.question      → '...'
 *   slides.1.quiz.options.0     → '...'
 *   slides.1.quiz.explanation   → '...'
 *
 * 翻譯後再用 applyTranslations() 把 flat 翻譯覆蓋回 deep clone 的 slides。
 *
 * 設計原則：只覆寫純 string 欄位、不動結構；以 component 為主的 slide
 * （例如 { component: 'CaliforniaRegionMapSlide' }）跳過，
 * 由元件自行處理 i18n。
 */

// 哪些 string 欄位需要翻譯（白名單，避免誤翻 className/id 等）
const TRANSLATABLE_KEYS = new Set([
  'title',
  'subtitle',
  'content',
  'description',
  'question',
  'explanation',
  'caption',
  'label',
  'text',
  'note',
  'summary',
  'duration',
  'point',
  'detail',
  'value',
])

// 哪些 key 在 highlights/quiz options 等陣列底下需要遞迴
const RECURSIVE_KEYS = new Set([
  'highlights',
  'options',
  'items',
  'cards',
  'sections',
  'list',
  'objectives',
  'questions',
  'blocks',
  'steps',
  'takeaways',
  'categories',
])

/**
 * 把 lessonContent 陣列展平為 flat translation map。
 * @returns {Record<string,string>}
 */
export function extractTranslatable(slides) {
  const out = {}
  if (!Array.isArray(slides)) return out
  slides.forEach((slide, i) => {
    if (!slide || typeof slide !== 'object') return
    // component slides: translate title, componentProps.title/items, and presenterNotes
    if (slide.component) {
      if (typeof slide.title === 'string' && slide.title.trim()) {
        out[`slides.${i}.title`] = slide.title
      }
      if (slide.componentProps && typeof slide.componentProps === 'object') {
        const cp = slide.componentProps
        if (typeof cp.title === 'string' && cp.title.trim()) {
          out[`slides.${i}.componentProps.title`] = cp.title
        }
        if (Array.isArray(cp.items)) {
          cp.items.forEach((item, j) => {
            if (!item || typeof item !== 'object') return
            if (typeof item.question === 'string') out[`slides.${i}.componentProps.items.${j}.question`] = item.question
            if (typeof item.explanation === 'string') out[`slides.${i}.componentProps.items.${j}.explanation`] = item.explanation
            if (Array.isArray(item.options)) {
              item.options.forEach((opt, k) => {
                if (typeof opt === 'string') out[`slides.${i}.componentProps.items.${j}.options.${k}`] = opt
              })
            }
          })
        }
      }
      if (Array.isArray(slide.presenterNotes)) {
        slide.presenterNotes.forEach((note, j) => {
          if (typeof note === 'string' && note.trim()) {
            out[`slides.${i}.presenterNotes.${j}`] = note
          }
        })
      }
      return
    }
    walk(slide, `slides.${i}`, out)
  })
  return out
}

function walk(node, prefix, out) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, `${prefix}.${i}`, out))
    return
  }
  if (!node || typeof node !== 'object') return
  for (const [k, v] of Object.entries(node)) {
    const childPrefix = `${prefix}.${k}`
    if (typeof v === 'string') {
      if (TRANSLATABLE_KEYS.has(k) && v.trim().length > 0) {
        out[childPrefix] = v
      }
    } else if (Array.isArray(v)) {
      // options / headers / prompts（字串陣列）特殊處理：直接收集字串元素
      if ((k === 'options' || k === 'headers' || k === 'prompts') && v.every(x => typeof x === 'string')) {
        v.forEach((s, i) => {
          if (s.trim().length > 0) out[`${childPrefix}.${i}`] = s
        })
      } else if (k === 'rows') {
        // rows: string[][]  →  rows.i.j
        v.forEach((row, i) => {
          if (Array.isArray(row)) {
            row.forEach((cell, j) => {
              if (typeof cell === 'string' && cell.trim().length > 0) {
                out[`${childPrefix}.${i}.${j}`] = cell
              }
            })
          }
        })
      } else if (RECURSIVE_KEYS.has(k)) {
        v.forEach((item, i) => walk(item, `${childPrefix}.${i}`, out))
      }
    } else if (v && typeof v === 'object') {
      // 物件：quiz 等繼續遞迴（不限白名單）
      walk(v, childPrefix, out)
    }
  }
}

/**
 * 將 flat 翻譯 map 套回 slides，回傳 deep-cloned 新 slides。
 * 缺少的 key 自動 fallback 到原文。
 */
export function applyTranslations(slides, flatMap) {
  if (!Array.isArray(slides)) return slides
  if (!flatMap || typeof flatMap !== 'object') return slides
  const cloned = deepClone(slides)
  for (const [key, value] of Object.entries(flatMap)) {
    if (typeof value !== 'string' || value.length === 0) continue
    setByPath(cloned, key, value)
  }
  return cloned
}

/**
 * Italy 課程專用：將 flat map 套回完整的 lesson 物件（含 title, quiz, slides）。
 * 支援任意 dot-path（如 title、slides.0.title、quiz.0.question 等）。
 * 缺少的 key 自動 fallback 到原文。
 */
export function applyItalyTranslations(lesson, flatMap) {
  if (!lesson || typeof lesson !== 'object') return lesson
  if (!flatMap || typeof flatMap !== 'object') return lesson
  const cloned = deepClone(lesson)
  for (const [key, value] of Object.entries(flatMap)) {
    if (typeof value !== 'string' || value.length === 0) continue
    setByPathAny(cloned, key, value)
  }
  return cloned
}

function setByPathAny(root, dotPath, value) {
  const parts = dotPath.split('.')
  if (parts.length === 1) {
    const k = parts[0]
    if (typeof root[k] === 'string') root[k] = value
    return
  }
  let cur = root
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i]
    const idx = /^\d+$/.test(p) ? Number(p) : p
    if (cur == null || typeof cur !== 'object') return
    cur = cur[idx]
  }
  if (cur == null || typeof cur !== 'object') return
  const last = parts[parts.length - 1]
  const lastIdx = /^\d+$/.test(last) ? Number(last) : last
  if (typeof cur[lastIdx] === 'string') {
    cur[lastIdx] = value
  }
}

function deepClone(v) {
  if (v == null) return v
  if (Array.isArray(v)) return v.map(deepClone)
  if (typeof v === 'object') {
    const o = {}
    for (const [k, val] of Object.entries(v)) o[k] = deepClone(val)
    return o
  }
  return v
}

function setByPath(root, dotPath, value) {
  const parts = dotPath.split('.')
  // 第一段固定是 'slides'
  if (parts[0] !== 'slides') return
  let cur = root
  for (let i = 1; i < parts.length - 1; i++) {
    const p = parts[i]
    const idx = /^\d+$/.test(p) ? Number(p) : p
    if (cur == null || typeof cur !== 'object') return
    cur = cur[idx]
  }
  if (cur == null || typeof cur !== 'object') return
  const last = parts[parts.length - 1]
  const lastIdx = /^\d+$/.test(last) ? Number(last) : last
  // 只覆寫已存在的字串欄位（避免造出新 key）
  if (typeof cur[lastIdx] === 'string') {
    cur[lastIdx] = value
  }
}
