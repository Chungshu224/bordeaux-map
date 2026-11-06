// 瑞士葡萄酒課程：各課課文總表（依課程 id 查）
import { SWI_LEVEL1_CONTENT } from './level1Content.js'
import { SWI_LEVEL2_CONTENT } from './level2Content.js'
import { SWI_LEVEL3_CONTENT } from './level3Content.js'

// 撰寫時正解多半放在同一位置；這裡依題目序固定輪轉選項，讓正解位置分散（結果固定、非隨機）
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

export const SWI_CONTENT = spread({ ...SWI_LEVEL1_CONTENT, ...SWI_LEVEL2_CONTENT, ...SWI_LEVEL3_CONTENT })
