/**
 * LO-L2-8 Chinon × Rillettes + Level 2 綜合評量
 * AOCs: 全 Level 2 AOC
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">都漢鄉村料理配對與 Level 2 知識測驗。本課程將系統介紹相關 AOC 的地理位置、土壤特性、葡萄品種規定與風格特色。</p>
        <h3 class="section-title">本課程涵蓋 AOC</h3>
        <p class="aoc-list">全 Level 2 AOC</p>
      </div>
    `
  },
  {
    title: 'Chinon × Rillettes + Level 2 綜合評量',
    content: `
      <div class="lesson-content">
        <p>本課程深入探討 全 Level 2 AOC 等產區的風土特色、葡萄品種規定，以及與餐食搭配的實用指南。</p>
        <p>透過系統學習，您將能夠辨識這些 AOC 的典型風格，並在品飲時準確描述其特色。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: '以下哪個 AOC 屬於本課程的學習範圍？',
        options: ['全 Level 2 AOC', 'Champagne', 'Bordeaux', 'Bourgogne'],
        correctIndex: 0,
        explanation: '全 Level 2 AOC 是羅亞爾河谷的重要 AOC，也是本課程的核心學習對象。'
      }
    ]
  }
]
