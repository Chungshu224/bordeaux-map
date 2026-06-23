/**
 * HU L2-2 托卡伊年份差異：傳奇年份解析與陳年潛力判讀
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '托卡伊年份差異',
    subtitle: '從 1999 到 2017：傳奇年份的氣候條件與陳年表現',
    icon: '📅',
    background: 'linear-gradient(135deg, #8b6914 0%, #4a3728 100%)'
  },

  {
    title: '決定托卡伊年份的三大氣候因素',
    highlights: [
      { id: 1, icon: '🌫️', title: '秋季晨霧（9–10 月）', content: 'Bodrog 河谷的秋霧為 Botrytis Cinerea 提供濕氣；晨霧天數越多，Aszú 果漿越豐富，頂級甜酒潛力越高' },
      { id: 2, icon: '☀️', title: '午後暖乾（溫差）', content: '晝夜溫差大才能讓霧氣蒸發防止腐爛；若整天潮濕則灰霉病（Grey Rot）取代貴腐菌，造成損失' },
      { id: 3, icon: '💧', title: '夏季降雨量', content: '豐沛的夏季降雨讓葡萄皮薄（更易被貴腐菌穿透），同時保持足夠酸度；乾旱年則葡萄過熟、酸度低' }
    ],
    content: `<div class="vintage-factors">
      <p class="lead-text">托卡伊的年份品質幾乎完全由 9–10 月的微氣候決定——每一瓶 Aszú 都是天氣的產物，而非人的意志。</p>
      <div class="climate-matrix">
        <h4>🌡️ 年份品質判斷矩陣</h4>
        <table class="vintage-table">
          <thead><tr><th>條件</th><th>優質年份</th><th>平庸年份</th></tr></thead>
          <tbody>
            <tr><td>9月降雨</td><td>充足（濕度夠讓霧形成）</td><td>乾旱或過多</td></tr>
            <tr><td>10月溫度</td><td>暖日 + 涼夜（大溫差）</td><td>持續低溫或持續高溫</td></tr>
            <tr><td>貴腐比例</td><td>30% 以上葡萄被感染</td><td>低於 10%</td></tr>
            <tr><td>酸度</td><td>高（pH 3.2–3.5）</td><td>低（pH 3.6+）</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: '近三十年傳奇年份解析',
    highlights: [
      { id: 1, icon: '⭐⭐⭐', title: '2017 — 近年最佳', content: '炎熱乾旱的夏季 + 完美的秋季貴腐條件，Aszú 糖分極度濃縮，預計需 20–30 年達到飲用高峰' },
      { id: 2, icon: '⭐⭐⭐', title: '2009 — 現代傳奇', content: '近乎完美的貴腐年份，貴腐比例超過 40%，現已展現蜂蜜＋柑橘醬＋番紅花的複雜風味，現可開瓶' },
      { id: 3, icon: '⭐⭐', title: '2013 — 挑戰中的精彩', content: '夏季涼爽、秋季不穩定，貴腐出現晚，但優質酒莊篩選嚴格，出品酸度鮮活，適合長期陳年' },
      { id: 4, icon: '⭐⭐⭐', title: '1999 — 世紀年份', content: '托卡伊最後幾個 20 世紀傳奇年，貴腐菌感染率超過 50%，現在仍處於飲用高峰，橘皮醬＋香料＋煙燻' }
    ],
    content: `<div class="vintage-chart">
      <h4>📊 年份評分速查表（近 30 年）</h4>
      <table class="vintage-score-table">
        <thead><tr><th>年份</th><th>評級</th><th>特色</th><th>建議飲用</th></tr></thead>
        <tbody>
          <tr><td>2017</td><td>⭐⭐⭐⭐⭐</td><td>極度濃縮，驚人複雜度</td><td>2030–2060+</td></tr>
          <tr><td>2013</td><td>⭐⭐⭐</td><td>高酸，需時間展開</td><td>2025–2045</td></tr>
          <tr><td>2009</td><td>⭐⭐⭐⭐⭐</td><td>近年最佳，現可開瓶</td><td>現在–2040</td></tr>
          <tr><td>2006</td><td>⭐⭐⭐⭐</td><td>平衡優雅，酸甜兼備</td><td>現在–2035</td></tr>
          <tr><td>2000</td><td>⭐⭐⭐⭐</td><td>千禧年份，豐潤圓熟</td><td>現在–2030</td></tr>
          <tr><td>1999</td><td>⭐⭐⭐⭐⭐</td><td>世紀經典，橘皮醬複雜</td><td>現在–2030</td></tr>
          <tr><td>1993</td><td>⭐⭐⭐⭐</td><td>現代復興第一個傳奇年</td><td>已達高峰</td></tr>
        </tbody>
      </table>
    </div>`
  },

  {
    title: '陳年潛力判讀：如何評估一瓶 Aszú 的生命週期',
    highlights: [
      { id: 1, icon: '🎨', title: '顏色變化', content: '年輕 Aszú：金黃色 → 10–20 年：深琥珀色 → 30 年以上：深棕銅色。顏色過深的年輕酒可能氧化' },
      { id: 2, icon: '👃', title: '香氣演化', content: '年輕：新鮮蜂蜜、杏桃、橙皮 → 中期：香料（番紅花、肉桂）、焦糖 → 老年：普洱茶、煙燻、榛果' },
      { id: 3, icon: '💧', title: '酸度是長壽鑰匙', content: 'Furmint 天生高酸（總酸 7–12 g/L），是 Aszú 能陳年 50–100 年的主因；低酸年份的 Aszú 陳年潛力大幅下降' },
      { id: 4, icon: '🍷', title: '殘糖量與陳年', content: '殘糖越高（Esszencia 150+ g/L）陳年越久；5–6 Puttonyos 的經典款可陳年 30–50 年；Esszencia 可超過 100 年' }
    ],
    quiz: {
      question: '在托卡伊年份中，決定是否有大量 Aszú 果漿的最關鍵氣候條件是？',
      options: ['夏季高溫', '秋季晨霧與午後暖乾的組合', '春季提早回暖', '冬季嚴寒'],
      answer: 1,
      explanation: '貴腐菌（Botrytis Cinerea）需要「早晨濕潤（霧氣提供）+ 午後乾燥暖和」的特定微氣候才能形成貴腐而非灰霉病。這種條件由 Bodrog 與 Tisza 河谷的地形所提供，9–10 月最易出現。'
    }
  }
]
