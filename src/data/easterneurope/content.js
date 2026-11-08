// 東歐與巴爾幹課程課文總表（依課程 id 查）
import { EE_LEVEL1_CONTENT } from './level1Content.js'

// 正解位置依題目序固定輪轉（結果固定、非隨機），讓正解分散在各選項
function spread(content) {
  let n = 0
  const out = {}
  for (const [id, lesson] of Object.entries(content)) {
    out[id] = lesson.quiz ? {
      ...lesson,
      quiz: lesson.quiz.map((q) => {
        const k = (n * 5 + (n >> 1) + (n * n) % 3 + 1) % q.options.length
        n++
        const options = q.options.map((_, i) => q.options[(i - k + q.options.length) % q.options.length])
        return { ...q, options, answer: (q.answer + k) % q.options.length }
      })
    } : lesson
  }
  return out
}

export const EE_CONTENT = spread({ ...EE_LEVEL1_CONTENT })
