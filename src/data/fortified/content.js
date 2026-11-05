// 全球強化酒專論：各課課文總表（依課程 id 查）
import { LEVEL1_CONTENT } from './level1Content.js'
import { LEVEL2_CONTENT } from './level2Content.js'

// 撰寫時正解多半放在同一位置；這裡依題目序固定輪轉選項，讓正解位置分散（結果固定、非隨機）
function spread(content) {
  let n = 0
  const out = {}
  for (const [id, lesson] of Object.entries(content)) {
    out[id] = lesson.quiz ? {
      ...lesson,
      quiz: lesson.quiz.map((q) => {
        const k = (n++ * 3 + 1) % q.options.length
        const options = q.options.map((_, i) => q.options[(i - k + q.options.length) % q.options.length])
        return { ...q, options, answer: (q.answer + k) % q.options.length }
      })
    } : lesson
  }
  return out
}

export const FORTIFIED_CONTENT = spread({ ...LEVEL1_CONTENT, ...LEVEL2_CONTENT })
