/**
 * LO-L2-4 希農——品麗珠的靈魂故鄉
 * AOCs: Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">三大 Cabernet Franc 產區的土壤差異與風格比較。本課程將系統介紹相關 AOC 的地理位置、土壤特性、葡萄品種規定與風格特色。</p>
        <h3 class="section-title">本課程涵蓋 AOC</h3>
        <p class="aoc-list">Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil</p>
      </div>
    `
  },
  {
    title: '希農——品麗珠的靈魂故鄉',
    content: `
      <div class="lesson-content">
        <p>本課程深入探討 Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil 等產區的風土特色、葡萄品種規定，以及與餐食搭配的實用指南。</p>
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
        options: ['Chinon', 'Champagne', 'Bordeaux', 'Bourgogne'],
        correctIndex: 0,
        explanation: 'Chinon 是羅亞爾河谷的重要 AOC，也是本課程的核心學習對象。'
      }
    ]
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Touraine 品麗珠三角產區地圖',
    componentProps: {
      slide: {
        title: 'Touraine：Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil',
        description: '都漢的品麗珠鐵三角——礫石與凝灰岩孕育的優雅紅酒',
        mapGroup: 'Touraine',
        highlightFiles: ['Chinon.geojson', 'Bourgueil.geojson', 'Saint-Nicolas-de-Bourgueil.geojson'],
      }
    }
  }
]
