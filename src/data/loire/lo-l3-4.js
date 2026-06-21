/**
 * LO-L3-4 頂級甜酒——Quarts-de-Chaume Grand Cru & Bonnezeaux
 * AOCs: Quarts-de-Chaume Grand Cru、Bonnezeaux
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在整個羅亞爾河谷，有兩個面積極小的甜酒產區，被公認為法國最偉大的甜白酒之一，可媲美 Sauternes 和 Alsace SGN：Quarts-de-Chaume Grand Cru 和 Bonnezeaux。兩者都以白詩南（Chenin Blanc）和貴腐菌（Botrytis）為靈魂，種植在 Layon 河谷的片岩坡地上，卻因各自獨特的地塊而展現出截然不同的偉大個性。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍯 深入認識 Quarts-de-Chaume Grand Cru</h4>
            <p>羅亞爾河谷唯一的 Grand Cru 等級 AOC（直到 2011 年），35 公頃的微型產區</p>
          </div>
          <div class="point-item">
            <h4>🌺 理解 Bonnezeaux 的獨特風土</h4>
            <p>同樣在 Layon 片岩坡地，但 Bonnezeaux 面積更大、個性更奔放</p>
          </div>
          <div class="point-item">
            <h4>🌫️ 掌握貴腐菌（Botrytis）的作用原理</h4>
            <p>Layon 河谷特殊的晨霧條件如何讓貴腐菌發展，創造頂級甜酒</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Layon 河谷：甜酒的天然溫床',
    highlights: [
      { id: 1, icon: '🌫️', title: '晨霧條件', content: '每年秋天，Layon 河谷清晨的霧氣為 Botrytis cinerea（灰黴菌）提供濕潤環境，讓貴腐菌在葡萄表皮發展，水分蒸發，糖分、酸度、香氣全面濃縮' },
      { id: 2, icon: '☀️', title: '午後乾燥', content: '關鍵是「霧濕 + 晴燥」的交替循環——午後陽光使葡萄表皮乾燥，防止灰黴菌過度蔓延，確保是有益的「貴腐」而非有害的「灰腐」' },
      { id: 3, icon: '🪨', title: '片岩坡地', content: 'Layon 河谷的南向片岩坡地（schiste）保熱性好，反射陽光，幫助葡萄充分成熟，同時片岩的礦物特性賦予甜酒獨特的鹹礦物感' }
    ],
    content: `
      <div class="layon-terroir">
        <p>Layon 是羅亞爾河的一條南部支流，它的河谷提供了法國最完美的甜酒風土條件之一。這條河谷不算寬，卻因獨特的微氣候（Microclimate）聚集了多個頂級甜酒 AOC：Coteaux-du-Layon、Coteaux-du-Layon Villages、以及王冠上的兩顆寶石——Bonnezeaux 和 Quarts-de-Chaume。</p>
        <div class="botrytis-science">
          <h4>🔬 貴腐菌（Botrytis cinerea）的科學</h4>
          <p>灰黴菌以「有益（貴腐）」和「有害（灰腐）」兩種形式存在。正確的貴腐菌感染過程：</p>
          <ol>
            <li>清晨霧氣提供濕度，菌絲穿入葡萄皮（但葡萄仍完整，不腐爛）</li>
            <li>午後陽光乾燥，蒸發水分，葡萄皮皺縮（「rôti」= 烤過一般）</li>
            <li>糖度從 20% 濃縮至 30–40%，酸度同步提升，特殊的「貴腐香氣」（蜂蜜、薑、橙皮、杏桃乾）形成</li>
          </ol>
        </div>
      </div>
    `
  },
  {
    component: 'LoireRegionMapSlide',
    title: 'Layon 甜酒帶地圖',
    componentProps: {
      slide: {
        title: 'Layon 甜酒帶地圖',
        description: 'Layon 河谷甜酒三層級——廣域 Coteaux-du-Layon、精選 Bonnezeaux（92 ha）、頂峰 Quarts-de-Chaume Grand Cru（35 ha）的嵌套地理',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Coteaux-du-Layon.geojson', 'Bonnezeaux.geojson', 'Quarts-de-Chaume.geojson'],
      }
    }
  },

  {
    title: 'Quarts-de-Chaume Grand Cru — 羅亞爾的頂峰',
    content: `
      <div class="quarts-de-chaume">
        <p><strong>Quarts-de-Chaume</strong>（AOC 成立 1954 年，Grand Cru 稱號 2011 年獲正式法規承認）是羅亞爾河谷面積最小、最珍貴的甜酒產區。</p>
        <div class="qdc-facts">
          <div class="fact-item">
            <h4>📐 面積：約 35 公頃</h4>
            <p>之所以如此珍稀，因為法律規定只有在這 35 公頃的特定坡地上生產的酒才可使用這個名稱。4 個主要生產者，每年總產量僅約 75,000 瓶。</p>
          </div>
          <div class="fact-item">
            <h4>🪨 地質：石英岩 + 片岩</h4>
            <p>Quarts-de-Chaume 位於 Rochefort-sur-Loire 村，土壤以石英岩和片岩為主（與 Bonnezeaux 的片岩略有差異），賦予更多礦物深度和緊緻結構。</p>
          </div>
          <div class="fact-item">
            <h4>📜 歷史：Quarts 的由來</h4>
            <p>「Quarts」指「四分之一」——中世紀時，這片葡萄園由修道院（Abbaye de Ronceray）管理，每年收成的四分之一要上繳給領主，這個份額就被稱為「la quart」，逐漸演變為地名。</p>
          </div>
        </div>
        <div class="qdc-style">
          <h4>🍷 風格特色</h4>
          <p><strong>年輕時（1–5 年）：</strong>金黃色澤，蜂蜜、新鮮杏桃、白桃、金合歡花、薑的清新甜感，酸度高達 pH 3.2，完美平衡甜度</p>
          <p><strong>陳年後（10–30 年）：</strong>深金棕色，橙皮蜜餞、薑糖、烤椰子、太妃糖、烤榛果、煙燻礦物的複雜演化，稱為「rancio」特質，是羅亞爾最神秘的陳年轉化之一</p>
          <p><strong>代表酒莊：</strong>Château-Bellerive（Domaine des Baumard 的旗艦）、Domaine Ogereau、Château de la Roche-aux-Moines（Nicolas Joly）</p>
        </div>
      </div>
    `
  },
  {
    title: 'Bonnezeaux — 更奔放的甜酒詩篇',
    content: `
      <div class="bonnezeaux-section">
        <p><strong>Bonnezeaux AOC</strong>（1951 年）位於 Thouarcé 村，面積約 92 公頃（比 Quarts-de-Chaume 大近三倍），但也是法國最小、最罕見的 AOC 之一。它與 Quarts-de-Chaume 在同一個 Layon 支流體系，但風格更為奔放豐潤。</p>
        <div class="bonnezeaux-terroir">
          <h4>🪨 土壤差異</h4>
          <p>Bonnezeaux 三個主要坡地（La Montagne、Beauregard、Fesles）以深紫色片岩（schiste violet）為主，比 Quarts-de-Chaume 的石英岩更能保熱，釀出的酒顏色更深，香氣更豐潤奔放。</p>
        </div>
        <div class="bonnezeaux-style">
          <h4>🍷 與 Quarts-de-Chaume 的風格對比</h4>
          <table>
            <thead><tr><th>特色</th><th>Quarts-de-Chaume</th><th>Bonnezeaux</th></tr></thead>
            <tbody>
              <tr><td>面積</td><td>35 公頃（微型）</td><td>92 公頃（小型）</td></tr>
              <tr><td>土壤</td><td>石英岩 + 片岩（淺色）</td><td>深紫色片岩（更保熱）</td></tr>
              <tr><td>風格</td><td>精緻、礦物感強、緊緻</td><td>豐潤、奔放、熱帶果香更明顯</td></tr>
              <tr><td>香氣</td><td>薑、金合歡、白桃</td><td>芒果、百香果、熱帶蜂蜜</td></tr>
              <tr><td>等級</td><td>Grand Cru（2011）</td><td>獨立 AOC（非 Grand Cru）</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>代表酒莊：</strong>Château de Fesles（最大面積生產者）、Domaine de la Croix des Loges</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Quarts-de-Chaume 的「Quarts」這個名稱來自哪裡？',
        options: [
          '法語「四季」，表示全年都能採收',
          '中世紀修道院時代，葡萄園收成的四分之一要上繳給領主的份額',
          '法語「石英」，指土壤中豐富的石英岩',
          '一位 18 世紀釀酒師的姓氏'
        ],
        correctIndex: 1,
        explanation: '「Quarts」指「四分之一（quart）」——中世紀時這片葡萄園由修道院管理，每年收成的四分之一要上繳給領主，這個份額（「la quart」）逐漸成為地名，演變為今日的 Quarts-de-Chaume。'
      },
      {
        id: 'q2',
        question: 'Layon 河谷的甜酒依賴什麼關鍵的自然條件？',
        options: [
          '地中海氣候帶來的強烈日照',
          '清晨霧氣（促進貴腐菌）+ 午後陽光（讓葡萄皮乾燥）的循環交替',
          '豐富的地下水源，保持葡萄藤不受乾旱影響',
          '來自大西洋的暖流'
        ],
        correctIndex: 1,
        explanation: '貴腐菌甜酒需要「濕」和「乾」的精確交替：Layon 河谷清晨霧氣提供濕度讓貴腐菌感染葡萄，午後陽光讓葡萄皮乾燥防止有害灰腐，這種微氣候循環是釀造頂級甜酒的關鍵。'
      },
      {
        id: 'q3',
        question: 'Bonnezeaux 和 Quarts-de-Chaume 最主要的風格差異是？',
        options: [
          'Bonnezeaux 使用 Sauvignon Blanc，Quarts-de-Chaume 使用 Chenin Blanc',
          'Quarts-de-Chaume 風格更精緻礦物，Bonnezeaux 風格更豐潤奔放、熱帶果香更明顯',
          '兩者風格完全相同，只差面積大小',
          'Bonnezeaux 是干型白酒，Quarts-de-Chaume 才是甜型'
        ],
        correctIndex: 1,
        explanation: '兩者都以 Chenin Blanc 和貴腐菌為核心，但土壤差異造成明顯的風格分別：Quarts-de-Chaume（石英岩）更精緻礦物；Bonnezeaux（深紫色片岩，更保熱）更豐潤奔放，熱帶蜂蜜和芒果香氣更突出。'
      }
    ]
  }
]
