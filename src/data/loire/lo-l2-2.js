/**
 * LO-L2-2 安茹紅酒三兄弟與索米爾
 * Anjou、Anjou-Villages、Anjou-Brissac、Saumur（紅）、Saumur-Champigny
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          安茹是一個以白詩南聞名的產區，但這裡的 Cabernet Franc 同樣出色。從入門的 Anjou Rouge，到精選的 Anjou-Villages，再到頂峰的 Anjou-Brissac，以及索米爾最偉大的 Saumur-Champigny——這五個 AOC 構成了安茹-索米爾紅酒的完整光譜。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍷 掌握安茹紅酒 AOC 層級</h4>
            <p>Anjou、Anjou-Villages、Anjou-Brissac 的品質差異與規定</p>
          </div>
          <div class="point-item">
            <h4>🏰 認識 Saumur-Champigny</h4>
            <p>凝灰岩上的 Cabernet Franc，為何被稱為羅亞爾最優雅的紅酒</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Anjou Rouge — 安茹紅酒入門',
    highlights: [
      { id: 1, icon: '🍷', title: 'Anjou Rouge', content: '以 Cabernet Franc 和 Cabernet Sauvignon 為主，允許少量 Gamay，酒體輕至中等' },
      { id: 2, icon: '⬆️', title: 'Anjou-Villages', content: '嚴格限定為 Cabernet Franc 和 Cabernet Sauvignon，品質更高，主要產自片岩土壤村莊' },
      { id: 3, icon: '🌟', title: 'Anjou-Brissac', content: 'Anjou-Villages 的特級村，位於 Brissac-Quincé，片岩與砂岩混合土壤，結構更佳' }
    ],
    content: `
      <div class="anjou-reds">
        <p>安茹紅酒的三個層級代表了不同的品質追求：</p>
        <p><strong>Anjou Rouge</strong>：日常飲用，混釀靈活，果香清新，適合年輕飲用。</p>
        <p><strong>Anjou-Villages</strong>：精選村莊，純 Cabernet，帶有更多礦物感和陳年潛力。</p>
        <p><strong>Anjou-Brissac</strong>：頂級表現，Brissac 獨特的片岩坡地造就複雜的結構與香料氣息。</p>
      </div>
    `
  },
  {
    title: 'Saumur Rouge 與 Saumur-Champigny',
    highlights: [
      { id: 1, icon: '🍾', title: 'Saumur Rouge', content: '索米爾基礎紅酒，凝灰岩土壤，輕盈優雅，Cabernet Franc 主導' },
      { id: 2, icon: '⭐', title: 'Saumur-Champigny', content: '索米爾最佳紅酒產區，古老凝灰岩平台，Cabernet Franc 展現紅果花香與絲滑單寧' }
    ],
    content: `
      <div class="saumur-reds">
        <p><strong>Saumur-Champigny</strong> 是安茹-索米爾紅酒的王者。這個小產區位於索米爾東南，種植於古老的凝灰岩台地之上。</p>
        <p>典型風格：覆盆子、草莓、紫羅蘭的清新果香，單寧絲滑，酸度清爽，略帶凝灰岩的礦物質感。</p>
        <p>最佳年份可陳年 10-15 年，展現皮革、煙草、香料的複雜演化。代表酒莊：Clos Rougeard（羅亞爾最傳奇紅酒之一）。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Saumur-Champigny 最主要的葡萄品種是？',
        options: ['Pinot Noir', 'Gamay', 'Cabernet Franc', 'Cabernet Sauvignon'],
        correctIndex: 2,
        explanation: 'Saumur-Champigny 以 Cabernet Franc 為主導品種，凝灰岩土壤使其展現出獨特的輕盈優雅風格。'
      }
    ]
  }
]
