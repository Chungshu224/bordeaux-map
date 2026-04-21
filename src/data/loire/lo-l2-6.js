/**
 * LO-L2-6 都漢支流紅酒
 * AOCs: Coteaux-du-Loir (紅)、Coteaux-du-Vendômois (紅/粉紅)、Orléans (紅)、Orléans-Cléry
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">Pineau d'Aunis 的辛香特色與支流產區。本課程將系統介紹相關 AOC 的地理位置、土壤特性、葡萄品種規定與風格特色。</p>
        <h3 class="section-title">本課程涵蓋 AOC</h3>
        <p class="aoc-list">Coteaux-du-Loir (紅)、Coteaux-du-Vendômois (紅/粉紅)、Orléans (紅)、Orléans-Cléry</p>
      </div>
    `
  },
  {
    title: '都漢支流紅酒',
    content: `
      <div class="lesson-content">
        <p>本課程深入探討 Coteaux-du-Loir (紅)、Coteaux-du-Vendômois (紅/粉紅)、Orléans (紅)、Orléans-Cléry 等產區的風土特色、葡萄品種規定，以及與餐食搭配的實用指南。</p>
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
        options: ['Coteaux-du-Loir (紅)', 'Champagne', 'Bordeaux', 'Bourgogne'],
        correctIndex: 0,
        explanation: 'Coteaux-du-Loir (紅) 是羅亞爾河谷的重要 AOC，也是本課程的核心學習對象。'
      }
    ]
  }
]
