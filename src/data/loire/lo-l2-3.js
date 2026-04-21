/**
 * LO-L2-3 安茹粉紅光譜與上普瓦圖
 * AOCs: Cabernet-d'Anjou、Rosé-d'Anjou、Rosé-de-Loire、Haut-Poitou
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">安茹粉紅酒的甜度光譜與上普瓦圖高原白酒。本課程將系統介紹相關 AOC 的地理位置、土壤特性、葡萄品種規定與風格特色。</p>
        <h3 class="section-title">本課程涵蓋 AOC</h3>
        <p class="aoc-list">Cabernet-d'Anjou、Rosé-d'Anjou、Rosé-de-Loire、Haut-Poitou</p>
      </div>
    `
  },
  {
    title: '安茹粉紅光譜與上普瓦圖',
    content: `
      <div class="lesson-content">
        <p>本課程深入探討 Cabernet-d'Anjou、Rosé-d'Anjou、Rosé-de-Loire、Haut-Poitou 等產區的風土特色、葡萄品種規定，以及與餐食搭配的實用指南。</p>
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
        options: ["Cabernet-d'Anjou", 'Champagne', 'Bordeaux', 'Bourgogne'],
        correctIndex: 0,
        explanation: "Cabernet-d'Anjou 是羅亞爾河谷的重要 AOC，也是本課程的核心學習對象。"
      }
    ]
  }
]
