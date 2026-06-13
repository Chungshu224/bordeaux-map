/**
 * LO-L4-7 Level 4 大師評量
 * 涵蓋: 全羅亞爾 L1–L4 跨產區綜合考核（58 AOC）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          這是羅亞爾河谷課程的最終大考——Level 4 大師評量。從南特的 Muscadet 到奧弗涅的火山 Gamay，從 Layon 貴腐到 Sancerre 燧石，七道涵蓋四個 Level 的綜合考題等待著你。這不只是知識測試，更是一個整合所有學習的思維訓練。通過後，你將獲得羅亞爾河谷葡萄酒大師認證。
        </p>
        <div class="exam-info">
          <div class="info-item">
            <h4>📝 評量範圍</h4>
            <p>Level 1–4 全部 26 堂課，涵蓋羅亞爾河谷 58 個 AOC</p>
          </div>
          <div class="info-item">
            <h4>🎯 題目數量</h4>
            <p>7 道大師級綜合題，包含跨 Level 整合題和餐酒配對應用題</p>
          </div>
          <div class="info-item">
            <h4>🏆 通過標準</h4>
            <p>答對 6 題（85%）以上獲得「Loire Wine Master」認證</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: 'Level 4 大師評量',
    questions: [
      {
        id: 'q1',
        question: 'Muscadet AOC 中，「Cru Communaux」（如 Granite de Clisson、Orthogneiss de Gorges）代表什麼意義？',
        options: [
          '它們是 Muscadet 的甜型版本，殘糖高於 20 g/L',
          '特定地質地塊的頂級 Muscadet，法規要求最少 20 個月在死酵母（lies）上陳年，品質遠高於基礎 Muscadet sur Lie',
          '這是 Muscadet 的有機認證標誌，只有通過有機認證的酒莊才可使用',
          '「Communaux」指共用公共地下酒窖陳年的生產者聯盟'
        ],
        correctIndex: 1,
        explanation: 'Muscadet Cru Communaux（也稱 Muscadet Cru Communal）是 2011 年引入的頂級等級，代表特定地質地塊的最高品質 Muscadet：最少 20 個月（部分要求 24 個月）在死酵母上陳年（比基礎 sur Lie 的 6 個月更長），每個 Cru 以地質命名（Granite de Clisson, Orthogneiss de Gorges, Gneiss de Monnières-Saint-Fiacre 等），是 Muscadet 重建品質形象的核心策略。'
      },
      {
        id: 'q2',
        question: '下列關於 Savennières AOC 的陳述，哪一項是正確的？',
        options: [
          '它以 Sauvignon Blanc 為主要品種，位於 Sancerre 旁邊',
          '它以 100% Chenin Blanc 釀造干型白酒，在安茹西部片岩坡地上，是羅亞爾最需要耐心等待的干型白酒，通常需要 8–20 年才展現全貌',
          '它是羅亞爾唯一允許使用 Grenache 的 AOC',
          '它的年產量是 Muscadet 的三倍，是羅亞爾最大的白酒 AOC'
        ],
        correctIndex: 1,
        explanation: 'Savennières AOC 以 100% Chenin Blanc 釀造完全干型白酒（Sec），種植在安茹西部的片岩（schiste）和火山岩坡地上。Nicolas Joly 的 Coulée de Serrant（Biodynamie 農法）是最著名代表，通常需要 8–20 年才展現全部複雜度，是法國最偉大的干型白酒之一。'
      },
      {
        id: 'q3',
        question: 'Vouvray AOC 的「Tuffeau」地質最主要的影響是什麼？',
        options: [
          '讓 Vouvray 的葡萄藤每年只能結一次果，產量極低',
          'Tuffeau（凝灰岩）的多孔隙結構保存水分、保持恆溫，讓 Vouvray 的 Chenin Blanc 在乾旱年份仍保持充足水分，在夏日炎熱中維持酸度',
          '讓 Vouvray 必須使用 100% 新橡木桶陳年',
          '讓 Vouvray 只能釀造甜型葡萄酒，禁止干型'
        ],
        correctIndex: 1,
        explanation: 'Vouvray 的 Tuffeau（凝灰岩）地質最重要的特性是其多孔隙結構：就像海綿一樣，在春雨時吸收大量水分，在夏季炎熱時緩慢釋放給葡萄根系。這種「天然灌溉」機制讓 Vouvray 在乾旱年份（如 2019、2022）仍能保持自然酸度，是 Vouvray 多甜度葡萄酒風格的地質基礎。'
      },
      {
        id: 'q4',
        question: '羅亞爾河谷三大 Cabernet Franc AOC（Chinon、Bourgueil、Saumur-Champigny）的主要風格差異來源是什麼？',
        options: [
          '它們使用了不同的 Cabernet Franc 克隆品系',
          '主要是土壤差異：Saumur-Champigny 的凝灰岩台地（最清爽）、Chinon 的三土壤（最多樣）、Bourgueil 的凝灰岩+礫石混合（最厚重）',
          '採收時間不同：Chinon 在 8 月，Bourgueil 在 9 月，Saumur-Champigny 在 10 月',
          '只有 Saumur-Champigny 允許 100% Cabernet Franc，其他兩個需要混入 Merlot'
        ],
        correctIndex: 1,
        explanation: '三個 AOC 都以 Cabernet Franc 為主，風格差異主要來自土壤：Saumur-Champigny 的凝灰岩台地賦予清爽礦物感（是三者中最「純淨」的）；Chinon 的三種土壤（礫石/凝灰岩坡/黏土台地）造就最多樣的風格；Bourgueil 的凝灰岩和礫石混合賦予更厚重的結構。這三個 AOC 都允許 100% Cabernet Franc（不需要 Merlot）。'
      },
      {
        id: 'q5',
        question: '下列哪個配對最能體現「地域配對（Terroir Pairing）」的概念？',
        options: [
          'Bordeaux 紅酒 × 台灣牛肉麵',
          'Sancerre 白酒 × Crottin de Chavignol 起司（兩者都來自同一個 Chavignol 村）',
          'Champagne × 義大利 Parmigiano Reggiano 起司',
          'Burgundy Pinot Noir × 美國德州烤肉'
        ],
        correctIndex: 1,
        explanation: '「地域配對」最完美的體現是 Sancerre 白酒 × Crottin de Chavignol：兩者都來自同一個 Chavignol 小村（人口不足 200 人）。山羊在 Sancerre 葡萄園旁邊的草場吃草，吸收相同的 Kimmeridgian 礦物質，讓起司和葡萄酒共享了深層的風土個性——這是地域共鳴最直接的例子，也是法國美食哲學「吃喝本地」的教科書案例。'
      },
      {
        id: 'q6',
        question: 'Quarts-de-Chaume 在 2011 年獲得「Grand Cru」稱號的條件是什麼（最主要的評估標準）？',
        options: [
          '因為它是面積最大的羅亞爾甜酒 AOC',
          '面積僅約 35 公頃的微型產區，長達數十年的頂級品質記錄（可媲美 Sauternes Grand Cru），極嚴格的產量限制（最高 25 hl/ha），以及手工多次逐串採收的貴腐標準',
          '因為它是第一個使用 GPS 精準定位地塊的 AOC',
          '因為 Nicolas Joly 的 Biodynamie 農法為它帶來了 Grand Cru 認定'
        ],
        correctIndex: 1,
        explanation: 'Quarts-de-Chaume 的 Grand Cru 認定（2011 年正式法規承認）來自多個嚴格標準：極小面積（35 公頃，只有 4–5 個主要生產者）、數十年的頂級品質記錄（可媲美 Sauternes 最佳 Grand Cru）、最低殘糖要求（136 g/L + 天然貴腐）、手工多次逐串採收（Trie par Trie），以及最低陳年 18 個月在木桶中。這是羅亞爾河谷迄今唯一的 Grand Cru 等級 AOC。'
      },
      {
        id: 'q7',
        question: '完成這道「整合題」：為以下餐點選擇最合適的羅亞爾葡萄酒——「台式三杯雞（九層塔、薑、麻油、辣椒）」',
        options: [
          'Quarts-de-Chaume Grand Cru（貴腐甜酒）——甜度可以中和辣椒的刺激',
          'Chinon Rouge（礫石款，年輕）——Cabernet Franc 的清爽酸度和紫羅蘭香氣，低單寧不與醬汁的麻油和辣椒衝突，高酸切割雞肉的油脂',
          'Muscadet sur Lie——海洋礦物感與三杯雞的濃郁醬汁形成對比',
          'Crémant-de-Loire Blanc de Blancs——氣泡洗淨辣椒刺激'
        ],
        correctIndex: 1,
        explanation: '三杯雞的配對邏輯：(1) 辣椒 + 九層塔的辛香需要「不搶主角」的葡萄酒，Cabernet Franc 的低單寧（比 Bordeaux 柔和）不會與辣椒產生惱人的苦澀疊加；(2) 麻油的豐富油脂需要足夠的酸度切割；(3) Chinon 礫石款的清爽紫羅蘭和紅果感與九層塔的草本辛香形成「草本 × 草本」的和諧共鳴。甜酒（Quarts-de-Chaume）雖然可以中和辣度，但甜度與麻油的組合會偏膩；Muscadet 的海洋礦物感與三杯雞的陸地辛香風味差距過大。'
      }
    ]
  }
]
