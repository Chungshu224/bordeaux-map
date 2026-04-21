/**
 * LO-L3-9 中央產區雙雄——桑塞爾 & 普依
 * AOCs: Sancerre、Pouilly-Fumé、Pouilly-sur-Loire
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">中央產區雙雄——桑塞爾 & 普依——本課程涵蓋 Sancerre、Pouilly-Fumé、Pouilly-sur-Loire，深入探討相關 AOC 的地理、土壤、品種與風格特色。</p>
      </div>
    `
  },
  {
    title: '中央產區雙雄——桑塞爾 & 普依',
    content: `
      <div class="lesson-content">
        <p>本課程系統學習 Sancerre、Pouilly-Fumé、Pouilly-sur-Loire 的風土特色，幫助您建立紮實的羅亞爾河谷知識框架。</p>
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
        options: ['Sancerre', 'Bordeaux', 'Champagne', 'Bourgogne'],
        correctIndex: 0,
        explanation: 'Sancerre 是羅亞爾河谷的重要 AOC，是本課程的核心學習對象。'
      }
    ]
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 產區地圖',
    componentProps: {
      slide: {
        title: 'Centre-Loire：Sancerre & Pouilly-Fumé',
        description: '羅亞爾河谷最東端的 Sauvignon Blanc 聖地，礦石感的巔峰',
        mapGroup: 'Centre',
        highlightFiles: ['Sancerre.geojson', 'Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson', 'Menetou-Salon.geojson'],
      }
    }
  }
]
