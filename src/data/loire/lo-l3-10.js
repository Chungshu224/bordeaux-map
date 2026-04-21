/**
 * LO-L3-10 中央產區隱藏版精品
 * AOCs: Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">中央產區隱藏版精品——本課程涵蓋 Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain，深入探討相關 AOC 的地理、土壤、品種與風格特色。</p>
      </div>
    `
  },
  {
    title: '中央產區隱藏版精品',
    content: `
      <div class="lesson-content">
        <p>本課程系統學習 Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain 的風土特色，幫助您建立紮實的羅亞爾河谷知識框架。</p>
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
        question: '以下哪個 AOC 屬於本課程範圍？',
        options: ['Menetou-Salon', 'Bordeaux', 'Champagne', 'Bourgogne'],
        correctIndex: 0,
        explanation: 'Menetou-Salon 是羅亞爾河谷的重要 AOC，是本課程的核心學習對象。'
      }
    ]
  }
]
