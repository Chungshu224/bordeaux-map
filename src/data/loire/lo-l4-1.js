/**
 * LO-L4-1 奧弗涅丘——火山土壤精品
 * AOCs: Côtes-d'Auvergne、Côtes-d'Auvergne-Boudes、Côtes-d'Auvergne-Chateaugay、Côtes-d'Auvergne-Corent、Côtes-d'Auvergne-Madargues
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">奧弗涅丘——火山土壤精品——本課程涵蓋 Côtes-d'Auvergne、Côtes-d'Auvergne-Boudes、Côtes-d'Auvergne-Chateaugay、Côtes-d'Auvergne-Corent、Côtes-d'Auvergne-Madargues，深入探討相關 AOC 的地理、土壤、品種與風格特色。</p>
      </div>
    `
  },
  {
    title: '奧弗涅丘——火山土壤精品',
    content: `
      <div class="lesson-content">
        <p>本課程系統學習 Côtes-d\'Auvergne、Côtes-d\'Auvergne-Boudes、Côtes-d\'Auvergne-Chateaugay、Côtes-d\'Auvergne-Corent、Côtes-d\'Auvergne-Madargues 的風土特色，幫助您建立紮實的羅亞爾河谷知識框架。</p>
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
        options: ['Côtes-d\'Auvergne', 'Bordeaux', 'Champagne', 'Bourgogne'],
        correctIndex: 0,
        explanation: 'Côtes-d\'Auvergne 是羅亞爾河谷的重要 AOC，是本課程的核心學習對象。'
      }
    ]
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Massif Central 火山產區地圖',
    componentProps: {
      slide: {
        title: 'Massif Central：Côtes d\'Auvergne',
        description: '火山岩土壤孕育的獨特風土，羅亞爾河谷最南端的精品產區',
        mapGroup: 'MassifCentral',
        highlightFiles: ['Côtes-dAuvergne.geojson'],
      }
    }
  }
]