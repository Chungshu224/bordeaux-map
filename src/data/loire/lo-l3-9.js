/**
 * LO-L3-9 中央產區雙雄——桑塞爾 & 普依
 * AOCs: Sancerre、Pouilly-Fumé、Pouilly-sur-Loire
 * 主題：燧石、Kimmeridgian、白堊三土壤對比；Sauvignon Blanc 全球標竿
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          來到中央羅亞爾（Centre-Loire），意味著羅亞爾河之旅即將抵達源頭——這裡的氣候已轉為半大陸型，土壤從凝灰岩切換為侏羅紀晚期的 <strong>Kimmeridgian 泥灰岩</strong>、<strong>Silex 燧石</strong>與<strong>白堊石灰岩</strong>三巨頭。Sancerre 與 Pouilly-Fumé 隔河相望，卻造就了 Sauvignon Blanc 在世界舞台上的最高典範。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🪨 三土壤系統</h4>
            <p>掌握 Caillottes（白堊）、Terres Blanches（Kimmeridgian）、Silex（燧石）三土壤如何塑造 Sauvignon Blanc 的多樣性</p>
          </div>
          <div class="point-item">
            <h4>🔥 燧石煙燻香的奧秘</h4>
            <p>理解 pierre à fusil 香氣的化學成因與 Pouilly-Fumé 命名典故</p>
          </div>
          <div class="point-item">
            <h4>⚖️ Sancerre vs Pouilly-Fumé 系統比較</h4>
            <p>從地理、土壤、品種多樣性到風格表現，建立兩大 AOC 的判別能力</p>
          </div>
          <div class="point-item">
            <h4>🌟 名家與酒款</h4>
            <p>認識 Henri Bourgeois、Edmond Vatan、Didier Dagueneau 等中央羅亞爾代表生產者</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '中央羅亞爾——羅亞爾河的源頭精品',
    highlights: [
      { id: 1, icon: '⛰️', title: '半大陸型氣候', content: '冬寒夏熱、溫差大，葡萄保留集中香氣，亦帶來春霜風險' },
      { id: 2, icon: '🌊', title: '羅亞爾河源頭', content: '此處羅亞爾河蜿蜒於 Sancerre 高地與 Pouilly 平原之間，河流影響微氣候' },
      { id: 3, icon: '🍇', title: '兩大主角', content: 'Sauvignon Blanc 為主，Pinot Noir 釀製粉紅與紅酒（僅 Sancerre 可釀紅）' }
    ],
    content: `
      <div class="loire-centre-overview">
        <p class="lead-text">中央羅亞爾位於法國中部 Bourges 城以南，距離羅亞爾河出海口已超過 700 公里。這裡的氣候、土壤與葡萄品種，與西部 Muscadet、安茹的 Chenin Blanc 世界完全不同——Sauvignon Blanc 在這裡找到了它的精神原點。</p>
        <div class="key-facts">
          <h4>📐 中央羅亞爾基本數據</h4>
          <ul>
            <li><strong>主要 AOC：</strong>Sancerre、Pouilly-Fumé、Pouilly-sur-Loire、Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant</li>
            <li><strong>葡萄園面積：</strong>約 6,500 公頃（佔羅亞爾河谷約 12%）</li>
            <li><strong>主要品種：</strong>Sauvignon Blanc（白）、Pinot Noir（紅/粉紅）</li>
            <li><strong>氣候：</strong>半大陸型，年均溫 11–12°C，年雨量約 600 mm</li>
            <li><strong>主要威脅：</strong>春霜（4 月晚霜可能毀掉整年產量）</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: '為何中央羅亞爾的氣候與西邊的 Muscadet 截然不同？',
      options: [
        '中央羅亞爾離海洋遠，氣候轉為半大陸型，溫差更大、冬季更冷',
        '中央羅亞爾海拔較低',
        '中央羅亞爾位於山谷裡，氣候更溫和',
        '中央羅亞爾受地中海影響'
      ],
      correct: 0,
      explanation: '中央羅亞爾距離大西洋約 350 公里，已脫離海洋型氣候影響。半大陸型氣候帶來明顯的日夜與季節溫差，這正是 Sauvignon Blanc 能發展出集中香氣與礦物張力的關鍵條件，但同時也帶來春霜風險（如 2016、2017、2021 等年份多次受損）。'
    }
  },

  {
    component: 'LoireAOCCompareSlide',
    title: 'Sancerre × Pouilly-Fumé 系統對比',
    componentProps: {
      slide: {
        title: 'Sancerre × Pouilly-Fumé：一河之隔，風格各異',
        description: '同樣以 Sauvignon Blanc 為主，卻因土壤組成與酒款規範不同，展現出截然不同的風格光譜'
      }
    }
  },

  {
    title: 'Sancerre 三土壤系統',
    highlights: [
      { id: 1, icon: '🥌', title: 'Caillottes（白堊石灰）', content: '占 Sancerre 約 40%，年輕易飲、清新柑橘香' },
      { id: 2, icon: '🧱', title: 'Terres Blanches（Kimmeridgian 泥灰岩）', content: '占約 40%，與 Chablis 同源，結構紮實、礦物深度' },
      { id: 3, icon: '🔥', title: 'Silex（燧石）', content: '占約 20%，最稀有，產出最具陳年潛力的煙燻燧石風格' }
    ],
    content: `
      <div class="sancerre-soils">
        <p class="lead-text">Sancerre 之所以複雜迷人，關鍵在於同一個 AOC 內並存三種完全不同的土壤類型。每種土壤都對 Sauvignon Blanc 賦予獨特的個性，使 Sancerre 不只是「一種風味」，而是「一個風土光譜」。</p>
        <div class="soil-grid">
          <div class="soil-block caillottes">
            <h4>🥌 Caillottes（白堊石灰小石塊）</h4>
            <p><strong>地質：</strong>侏羅紀中期形成的白色小石灰岩塊</p>
            <p><strong>分布：</strong>Bué、Crézancy、Sury-en-Vaux 等村莊</p>
            <p><strong>特性：</strong>排水極佳、加熱快、保水力低</p>
            <p><strong>風格：</strong>清新柑橘、青蘋果、白花，年輕易飲（2–4 年）</p>
            <p><strong>代表生產者：</strong>Pascal Jolivet、Domaine Vacheron（部分酒款）</p>
          </div>
          <div class="soil-block terres-blanches">
            <h4>🧱 Terres Blanches（Kimmeridgian 泥灰岩）</h4>
            <p><strong>地質：</strong>侏羅紀晚期，富含海洋化石（牡蠣化石 Exogyra virgula）</p>
            <p><strong>分布：</strong>Chavignol、Verdigny 等村莊（Sancerre 西部）</p>
            <p><strong>特性：</strong>保水性佳、富含礦物質、Chablis 同質土壤</p>
            <p><strong>風格：</strong>結構紮實、白堊礦物、濕潤草本香、5–10 年陳年潛力</p>
            <p><strong>代表生產者：</strong>François Cotat、Edmond Vatan、Henri Bourgeois</p>
          </div>
          <div class="soil-block silex">
            <h4>🔥 Silex（燧石）</h4>
            <p><strong>地質：</strong>白堊紀晚期，黑色硬燧石碎片</p>
            <p><strong>分布：</strong>Ménétréol-sous-Sancerre、Saint-Satur 等村莊（Sancerre 東部，靠近羅亞爾河）</p>
            <p><strong>特性：</strong>吸熱快、夜晚緩慢釋放熱量、保溫性佳</p>
            <p><strong>風格：</strong>煙燻 pierre à fusil、火藥味、高酸礦物張力，10+ 年陳年</p>
            <p><strong>代表生產者：</strong>Domaine Vacheron Belle Dame、Lucien Crochet Cuvée Prestige</p>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Sancerre 三土壤中，哪一種與 Chablis 同源？',
      options: ['Caillottes（白堊石灰）', 'Silex（燧石）', 'Terres Blanches（Kimmeridgian 泥灰岩）', '花崗岩'],
      correct: 2,
      explanation: 'Terres Blanches 是 Kimmeridgian 泥灰岩的法文名稱，這種土壤形成於侏羅紀晚期的淺海環境，富含 Exogyra virgula 牡蠣化石。它在勃艮第 Chablis 也是主要土壤，因此 Chablis 和 Sancerre 雖然品種不同（Chardonnay vs Sauvignon Blanc），卻共享相似的礦物深度與陳年潛力。'
    }
  },

  {
    component: 'LoireGrapeProfileSlide',
    title: 'Sauvignon Blanc：中央羅亞爾的靈魂',
    componentProps: {
      slide: {
        title: 'Sauvignon Blanc：中央羅亞爾的靈魂',
        description: '從新世界的熱帶水果風到 Loire 的礦物煙燻——中央羅亞爾是 Sauvignon Blanc 最古典、最深邃的版本',
        defaultKey: 'sauvignon'
      }
    }
  },

  {
    title: 'Pouilly-Fumé：燧石煙燻的代名詞',
    highlights: [
      { id: 1, icon: '🔥', title: 'Silex 主導', content: 'Pouilly-Fumé 約 60% 為燧石土壤，遠高於 Sancerre 的 20%' },
      { id: 2, icon: '🌫️', title: 'Fumé 命名典故', content: '法文 fumé 意為「煙燻」——因葡萄成熟時果皮反射陽光如煙霧繚繞，亦呼應酒款的煙燻香氣' },
      { id: 3, icon: '🍷', title: '僅產白酒', content: '與 Sancerre 不同，Pouilly-Fumé 僅生產 Sauvignon Blanc 白酒（紅與粉紅另需 Coteaux-du-Giennois）' }
    ],
    content: `
      <div class="pouilly-fume">
        <p class="lead-text">Pouilly-Fumé 與 Sancerre 隔著羅亞爾河相望，距離不過 5 公里，卻因土壤組成的差異，產出截然不同的 Sauvignon Blanc 風格。Pouilly-Fumé 強調的是<strong>單一風格的極致</strong>——燧石主導、煙燻深邃，而非 Sancerre 的多樣性光譜。</p>
        <div class="fume-features">
          <h4>🔥 「Fumé」（煙燻）的雙重意涵</h4>
          <ol>
            <li><strong>視覺：</strong>當地葡萄成熟時，果皮上的灰藍色霜（Pruina）在陽光下反射如煙霧，農夫稱之為 <em>blanc fumé</em>（煙燻白）</li>
            <li><strong>嗅覺：</strong>燧石土壤孕育的酒款帶有明顯的「pierre à fusil」（火槍石/火藥）香氣，是燧石加熱後揮發物的化學特徵</li>
          </ol>
        </div>
        <div class="fume-style">
          <h4>🍇 風格特徵</h4>
          <ul>
            <li><strong>香氣：</strong>燧石、煙燻、火藥、白胡椒、青檸、葡萄柚（比 Sancerre 更「灰白」、較少柑橘綠調）</li>
            <li><strong>口感：</strong>結構紮實、酸度集中、酒體中等，礦物感從始至終貫穿</li>
            <li><strong>陳年：</strong>頂級 Pouilly-Fumé（如 Dagueneau Pur Sang、Silex）可陳放 15+ 年，發展出蜂蠟、堅果、煙燻烤麵包的複雜度</li>
          </ul>
        </div>
        <div class="fume-producers">
          <h4>🌟 代表生產者</h4>
          <ul>
            <li><strong>Didier Dagueneau（已故，由其子 Louis-Benjamin 接手）：</strong>Pouilly-Fumé 的革命者，Pur Sang、Silex、Buisson Renard、Astéroïde 系列被視為 Sauvignon Blanc 世界最頂級之作</li>
            <li><strong>Domaine Henri Bourgeois：</strong>同時擁有 Sancerre 與 Pouilly-Fumé 的家族，產品線完整</li>
            <li><strong>Jonathan Pabiot：</strong>新世代，自然酒風格</li>
            <li><strong>Château de Tracy：</strong>歷史悠久，傳統嚴謹的家族酒莊</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: '為何 Pouilly-Fumé 被稱為「煙燻」（Fumé）？以下哪個說法**不**正確？',
      options: [
        '葡萄成熟時果皮上的灰藍色霜在陽光下反射如煙霧',
        '酒款帶有燧石加熱後的 pierre à fusil 火藥香氣',
        '當地傳統使用煙燻木桶陳釀',
        '與 Pouilly-sur-Loire（用 Chasselas）區分品種特色'
      ],
      correct: 2,
      explanation: 'Pouilly-Fumé 並非使用煙燻木桶陳釀——多數頂級酒款甚至使用不鏽鋼槽以保留純淨礦物感。「Fumé」的命名來自葡萄果皮反射的視覺效果以及燧石土壤帶來的煙燻香氣，這是地質與品種互動的自然產物，並非釀造工藝造成。'
    }
  },

  {
    title: '中央羅亞爾的衛星 AOC',
    highlights: [
      { id: 1, icon: '🪙', title: '性價比典範', content: 'Menetou-Salon、Quincy、Reuilly 通常價格僅 Sancerre 一半，品質卻不遑多讓' },
      { id: 2, icon: '🍇', title: '品種多樣', content: '除 Sauvignon Blanc，部分 AOC 還產 Pinot Gris、Pinot Noir 紅與粉紅' }
    ],
    content: `
      <div class="centre-satellites">
        <p class="lead-text">如果 Sancerre 與 Pouilly-Fumé 是中央羅亞爾的雙星，那麼 Menetou-Salon、Quincy、Reuilly 就是值得探索的星雲——它們提供類似的風土邏輯，但價格更親民，是日常飲用的優質選擇。</p>
        <div class="satellite-grid">
          <div class="satellite-block">
            <h4>🍃 Menetou-Salon</h4>
            <p><strong>地理：</strong>Sancerre 西南方約 30 公里</p>
            <p><strong>土壤：</strong>主要為 Kimmeridgian 泥灰岩（與 Sancerre Terres Blanches 同源）</p>
            <p><strong>品種：</strong>Sauvignon Blanc（白）、Pinot Noir（紅/粉紅）</p>
            <p><strong>風格：</strong>近似 Sancerre Terres Blanches 風格，礦物感強、價格約 Sancerre 60–70%</p>
            <p><strong>名家：</strong>Henry Pellé、Domaine de l'Ermitage</p>
          </div>
          <div class="satellite-block">
            <h4>🌾 Quincy</h4>
            <p><strong>地理：</strong>Cher 河谷，Bourges 西方</p>
            <p><strong>土壤：</strong>河階礫石與沙地（與 Sancerre 完全不同）</p>
            <p><strong>品種：</strong>僅 Sauvignon Blanc 白酒</p>
            <p><strong>風格：</strong>果香奔放、酸度活潑、口感較柔和、易飲性高</p>
            <p><strong>名家：</strong>Domaine Trotereau、Mardon</p>
          </div>
          <div class="satellite-block">
            <h4>🌸 Reuilly</h4>
            <p><strong>地理：</strong>Quincy 西方，Indre 河谷</p>
            <p><strong>土壤：</strong>礫石、黏土石灰、片岩混合</p>
            <p><strong>品種：</strong>Sauvignon Blanc（白）、Pinot Noir、Pinot Gris（紅/粉紅）</p>
            <p><strong>風格：</strong>多元風格、Pinot Gris 粉紅酒尤具特色（罕見）</p>
            <p><strong>名家：</strong>Claude Lafond、Denis Jamain</p>
          </div>
          <div class="satellite-block">
            <h4>🌄 Coteaux-du-Giennois</h4>
            <p><strong>地理：</strong>Pouilly-Fumé 北方</p>
            <p><strong>土壤：</strong>燧石、白堊石灰、黏土</p>
            <p><strong>品種：</strong>Sauvignon Blanc（白）、Pinot Noir + Gamay（紅/粉紅）</p>
            <p><strong>風格：</strong>輕盈紅酒搭配清新白酒，村莊型酒款風格</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 地圖：Sancerre × Pouilly × 衛星 AOC',
    componentProps: {
      slide: {
        title: 'Centre-Loire 地圖：Sancerre × Pouilly × 衛星 AOC',
        description: '視覺化中央羅亞爾雙雄與周邊衛星 AOC 的相對位置',
        mapGroup: 'Centre',
        highlightFiles: ['Sancerre.geojson', 'Pouilly-Fumé.geojson', 'Pouilly-sur-Loire.geojson', 'Menetou-Salon.geojson', 'Quincy.geojson', 'Reuilly.geojson']
      }
    }
  },

  {
    type: 'quiz',
    title: 'Level 3-9 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Sancerre 與 Pouilly-Fumé 最主要的風格差異來自？',
        options: [
          '釀造工藝不同',
          '土壤組成比例不同（Sancerre 三土壤並存；Pouilly-Fumé 燧石主導）',
          '葡萄品種不同',
          '氣候差異極大'
        ],
        correctIndex: 1,
        explanation: '兩者氣候相同（隔著羅亞爾河，距離僅 5 公里）、品種相同（皆以 Sauvignon Blanc 為主）。最關鍵的差異在於土壤：Pouilly-Fumé 約 60% 為燧石，產生強烈煙燻 pierre à fusil 風格；Sancerre 則三種土壤並存（Caillottes 40% / Terres Blanches 40% / Silex 20%），產出更多元的風格光譜。'
      },
      {
        id: 'q2',
        question: 'Pouilly-sur-Loire 與 Pouilly-Fumé 最大的差別是？',
        options: [
          '葡萄品種——Pouilly-sur-Loire 使用 Chasselas，Pouilly-Fumé 使用 Sauvignon Blanc',
          '地理位置不同',
          '酒款顏色不同',
          '陳年規定不同'
        ],
        correctIndex: 0,
        explanation: 'Pouilly-sur-Loire 是同一行政區但使用 Chasselas 品種釀造的清淡白酒，產量與名氣遠不如 Pouilly-Fumé。1937 年 AOC 認定時將兩者並列：使用 Sauvignon Blanc 者掛「Pouilly-Fumé」（亦稱 Blanc Fumé de Pouilly），使用 Chasselas 者掛「Pouilly-sur-Loire」。'
      },
      {
        id: 'q3',
        question: 'Didier Dagueneau 為哪個 AOC 帶來革命性的影響？',
        options: ['Sancerre', 'Pouilly-Fumé', 'Vouvray', 'Muscadet'],
        correctIndex: 1,
        explanation: 'Didier Dagueneau（1956–2008）是 Pouilly-Fumé 的革命者，他導入單一葡萄園概念、降低產量、嚴格控管成熟度，推出 Pur Sang、Silex、Buisson Renard、Astéroïde 等系列酒款，讓 Pouilly-Fumé 從「便宜的 Sancerre 替代品」躍升為 Sauvignon Blanc 世界最頂級的代表。他的兒子 Louis-Benjamin Dagueneau 繼承後繼續維持高水準。'
      },
      {
        id: 'q4',
        question: '中央羅亞爾的衛星 AOC 中，哪一個以稀有的 Pinot Gris 粉紅酒著稱？',
        options: ['Menetou-Salon', 'Quincy', 'Reuilly', 'Coteaux-du-Giennois'],
        correctIndex: 2,
        explanation: 'Reuilly 是中央羅亞爾極少數官方允許使用 Pinot Gris 釀製粉紅酒的 AOC（vin gris 風格）。這些粉紅酒色澤淡雅近乎銅色，帶有玫瑰花瓣與紅色水果香氣，是法國境內非常獨特的存在。'
      }
    ]
  }
]
