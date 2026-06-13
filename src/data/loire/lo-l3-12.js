/**
 * LO-L3-12 Level 3 綜合評量
 * 涵蓋: 白詩南工藝、Savennières、貴腐甜酒、Crémant、Vouvray、Sancerre、中央產區
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Level 3 是羅亞爾河谷最豐富的一個層次——從安茹片岩坡地的干型白詩南，到 Layon 河谷的頂級貴腐，再到 Sancerre 的燧石礦物雙雄，你已走過 32 個白酒和氣泡 AOC。這份評量將測試你對整個白詩南工藝光譜、中央產區土壤辨識、以及羅亞爾食物配對原理的掌握程度。
        </p>
        <div class="exam-info">
          <div class="info-item">
            <h4>📝 評量範圍</h4>
            <p>Level 3 全部 11 堂課（lo-l3-1 ～ lo-l3-11）共 32 個白酒/氣泡 AOC</p>
          </div>
          <div class="info-item">
            <h4>🎯 題目數量</h4>
            <p>5 道綜合題，涵蓋白詩南甜度系統、貴腐科學、Sancerre 地質、配對原理</p>
          </div>
          <div class="info-item">
            <h4>🏆 通過標準</h4>
            <p>答對 4 題（80%）以上即可解鎖 Level 4</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: 'Level 3 綜合評量',
    questions: [
      {
        id: 'q1',
        question: 'Vouvray 甜度系統中，「Moelleux」的殘糖範圍通常是？',
        options: [
          '0–4 g/L（完全干型）',
          '4–12 g/L（微甜）',
          '30–80 g/L（半甜到甜型）',
          '超過 150 g/L（貴腐等級）'
        ],
        correctIndex: 2,
        explanation: 'Vouvray 的甜度分級：Sec（0–4 g/L）、Demi-Sec（4–18 g/L）、Moelleux（30–80 g/L，有時更高）、Liquoreux（80 g/L+，貴腐或極甜）。Moelleux 是「柔軟的」意思，代表帶有明顯甜感但仍保有 Chenin Blanc 高酸度的平衡甜型風格。'
      },
      {
        id: 'q2',
        question: 'Muscadet Sèvre et Maine sur Lie 最重要的釀造特色是什麼？',
        options: [
          '在新橡木桶中陳年至少 18 個月',
          '裝瓶前在死酵母沉澱（lies）上陳年至少 6 個月，賦予酵母麵包感和細膩口感',
          '使用貴腐菌感染的葡萄',
          '必須在凝灰岩地下洞窟中完成發酵'
        ],
        correctIndex: 1,
        explanation: '「sur Lie」是 Muscadet 最重要的品質標誌——葡萄酒在死酵母沉澱（lies）上陳年（至少 6 個月，頂級款可達 20+ 個月），酵母自溶賦予麵包屑、奶油和輕微氣泡感（CO₂ 保留），大幅提升口感複雜度和質地。'
      },
      {
        id: 'q3',
        question: 'Sancerre × Crottin de Chavignol 被稱為「地域配對教科書」的最根本原因是？',
        options: [
          '因為兩者都以「S」開頭，方便記憶',
          '兩者都來自同一個 Chavignol 村，山羊在葡萄園旁的草場吃草，吸收相同的礦物質，形成深層的「風土共鳴」',
          '因為起司的高脂肪含量讓飲酒者在喝更多 Sancerre 時不容易醉',
          '法律規定 Sancerre 必須與 Crottin 一起銷售'
        ],
        correctIndex: 1,
        explanation: '最深層的原因是「地域共鳴（terroir pairing）」——Chavignol 村的山羊在 Sancerre 葡萄園附近的同一片草場吃草，它們的奶（製成 Crottin）和旁邊生長的葡萄（釀成 Sancerre）吸收了相同的礦物質和植物個性，這種同源性造就了最自然的和諧。'
      },
      {
        id: 'q4',
        question: '下列哪個描述最準確地說明 Savennières AOC 的特色？',
        options: [
          '以 Sauvignon Blanc 釀造，風格類似 Sancerre',
          '以 100% Chenin Blanc 釀造干型白酒，在安茹片岩坡地上，Nicolas Joly 的 Biodynamie 農法讓它成為世界頂級白酒之一',
          '主要生產 Cabernet Franc 紅酒，是安茹最昂貴的紅酒 AOC',
          '以 Melon de Bourgogne 釀造，風格與 Muscadet 相同'
        ],
        correctIndex: 1,
        explanation: 'Savennières AOC 以 100% Chenin Blanc 釀造干型白酒，坐落在安茹西部的片岩（schiste）和火山岩混合坡地上。Nicolas Joly 的 Clos de la Coulée de Serrant（Biodynamie 農法）是最知名的生產者，被認為是世界最偉大的干型白酒之一。'
      },
      {
        id: 'q5',
        question: 'Pouilly-Fumé 和 Pouilly-sur-Loire 最關鍵的區別是什麼？',
        options: [
          '它們是完全相同的 AOC，只是名稱有所不同',
          'Pouilly-Fumé 使用 Sauvignon Blanc（高品質），Pouilly-sur-Loire 使用 Chasselas（品質較簡單），兩者來自同一片土地',
          'Pouilly-Fumé 來自法國南部，Pouilly-sur-Loire 來自北部',
          'Pouilly-sur-Loire 是甜型，Pouilly-Fumé 是干型'
        ],
        correctIndex: 1,
        explanation: 'Pouilly-Fumé AOC（Sauvignon Blanc）和 Pouilly-sur-Loire AOC（Chasselas）來自完全相同的地理區域（Nièvre 省 Pouilly-sur-Loire 鎮），但品種不同：Pouilly-Fumé 使用 Sauvignon Blanc，是頂級 AOC；Pouilly-sur-Loire 使用 Chasselas，風格更簡單，現在幾乎被放棄，面積越來越小。'
      }
    ]
  }
]
