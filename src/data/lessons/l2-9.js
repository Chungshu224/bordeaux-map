/**
 * L2-9 波爾多產區進階總結與綜合評量
 * 綜合評估L2階段的學習成果，作為進階L3的能力檢驗
 */

export const l29Content = [
  // ========== 課程導讀 ==========
  {
    type: 'intro',
    title: '📚 Level 2 綜合評量',
    duration: '完成時間：約30分鐘',
    level: '中級',
    courseIntro: '經過八個課程的深入學習，您已經掌握了波爾多主要產區的風土特色、釀酒哲學和名莊風格。本課程將系統回顧L2的核心知識，並通過綜合評量測試您是否已具備進階到Level 3的能力。',
    objectives: [
      { icon: '🗺️', text: '系統回顧左右岸主要產區特色' },
      { icon: '🍇', text: '掌握產區間的風土差異與風格對比' },
      { icon: '🏰', text: '理解各產區代表性酒莊的特點' },
      { icon: '🎯', text: '通過綜合評量，驗證進階L3的準備度' }
    ]
  },

  // ========== 第一章：左岸產區回顧 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '左岸產區知識體系',
    subtitle: 'Médoc與Graves的風土精髓',
    icon: '🏛️',
    background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)'
  },
  
  {
    type: 'content-with-quiz',
    title: 'Médoc半島的地理與風土',
    content: `
      <div class="knowledge-review">
        <h4>🗺️ 核心知識點</h4>
        <div class="key-points-grid">
          <div class="point-card">
            <h5>地理位置</h5>
            <ul>
              <li>Gironde河<strong>左岸</strong>狹長半島</li>
              <li>從波爾多市西北延伸至大西洋約<strong>60公里</strong></li>
              <li>寬度約15公里，總面積約16,500公頃</li>
            </ul>
          </div>
          <div class="point-card">
            <h5>土壤特徵</h5>
            <ul>
              <li><strong>砂礫土壤</strong>（Graves）為主</li>
              <li>優異的<strong>排水性</strong>與<strong>儲熱能力</strong></li>
              <li>最適合<strong>Cabernet Sauvignon</strong>生長</li>
            </ul>
          </div>
          <div class="point-card">
            <h5>氣候優勢</h5>
            <ul>
              <li><strong>大西洋</strong>與<strong>Gironde河</strong>雙重調節</li>
              <li>溫和的<strong>海洋性氣候</strong></li>
              <li>河流提供<strong>防霜凍</strong>保護</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Médoc半島的砂礫土壤最適合哪個葡萄品種生長？',
      options: ['Merlot', 'Cabernet Sauvignon', 'Cabernet Franc', 'Petit Verdot'],
      correct: 1,
      explanation: 'Médoc的砂礫土壤具有優異的排水性和儲熱能力，最適合晚熟的Cabernet Sauvignon生長，讓其充分成熟並發展出強勁的結構和複雜的風味。'
    }
  },

  {
    type: 'comparison-matrix',
    title: 'Médoc四大明星產區對比',
    description: '深入理解Margaux、Pauillac、Saint-Julien、Saint-Estèphe的差異',
    categories: [
      {
        name: 'Margaux',
        icon: '💃',
        items: [
          { label: '風格特色', value: '優雅細膩、如絲般柔順', highlight: true },
          { label: '土壤組成', value: '細砂礫為主，排水極佳' },
          { label: '主導品種', value: 'Cabernet Sauvignon（優雅型）' },
          { label: '香氣特徵', value: '紫羅蘭、玫瑰、紅色莓果' },
          { label: '陳年潛力', value: '20-40年' },
          { label: '代表酒莊', value: 'Château Margaux (一級莊)' }
        ]
      },
      {
        name: 'Pauillac',
        icon: '👑',
        items: [
          { label: '風格特色', value: '強勁有力、結構完整', highlight: true },
          { label: '土壤組成', value: '深厚砂礫，石英含量高' },
          { label: '主導品種', value: 'Cabernet Sauvignon（強勁型）' },
          { label: '香氣特徵', value: '黑醋栗、雪松、鉛筆芯、煙燻' },
          { label: '陳年潛力', value: '25-50年+' },
          { label: '代表酒莊', value: 'Lafite、Latour、Mouton（三大一級莊）' }
        ]
      },
      {
        name: 'Saint-Julien',
        icon: '⚖️',
        items: [
          { label: '風格特色', value: '完美平衡、優雅與力量兼具', highlight: true },
          { label: '土壤組成', value: '砂礫與黏土的理想組合' },
          { label: '主導品種', value: 'Cabernet Sauvignon + Merlot 平衡' },
          { label: '香氣特徵', value: '黑醋栗、黑櫻桃、香料、皮革' },
          { label: '陳年潛力', value: '20-35年' },
          { label: '代表酒莊', value: 'Léoville系列、Ducru-Beaucaillou' }
        ]
      },
      {
        name: 'Saint-Estèphe',
        icon: '💪',
        items: [
          { label: '風格特色', value: '強勁濃郁、單寧堅實', highlight: true },
          { label: '土壤組成', value: '較高黏土含量，保水性強' },
          { label: '主導品種', value: 'Merlot比例較高（柔化單寧）' },
          { label: '香氣特徵', value: '深色莓果、泥土、煙燻、礦物' },
          { label: '陳年潛力', value: '20-40年' },
          { label: '代表酒莊', value: 'Cos d\'Estournel、Montrose' }
        ]
      }
    ],
    quiz: {
      question: '哪個產區被認為是Médoc中"最平衡"的產區，兼具優雅與力量？',
      options: ['Margaux', 'Pauillac', 'Saint-Julien', 'Saint-Estèphe'],
      correct: 2,
      explanation: 'Saint-Julien被譽為Médoc最平衡的產區，其土壤組成（砂礫與黏土的完美比例）和品種搭配，使得酒款兼具Margaux的優雅和Pauillac的力量。'
    }
  },

  {
    type: 'key-takeaways',
    title: '左岸產區核心要點',
    icon: '📌',
    takeaways: [
      {
        point: '土壤決定風格',
        detail: '從Margaux的細砂礫到Saint-Estèphe的黏土，土壤組成直接影響酒款的力量與優雅平衡。'
      },
      {
        point: 'Cabernet Sauvignon的天堂',
        detail: '左岸的砂礫土和海洋性氣候為晚熟的Cabernet Sauvignon提供了理想的成熟條件。'
      },
      {
        point: '1855分級的遺產',
        detail: '61個列級莊中，60個來自Médoc（1個來自Graves），奠定了左岸在世界酒壇的地位。'
      }
    ]
  },

  // ========== 第二章：右岸產區回顧 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '右岸產區知識體系',
    subtitle: 'Pomerol與Saint-Émilion的風土魅力',
    icon: '💎',
    background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)'
  },

  {
    type: 'content-with-quiz',
    title: 'Pomerol：稀世珍寶的秘密',
    content: `
      <div class="knowledge-review">
        <h4>💎 Pomerol的獨特性</h4>
        <div class="pomerol-highlights">
          <div class="highlight-box">
            <h5>🗺️ 地理規模</h5>
            <p>波爾多<strong>最小</strong>的主要產區，僅約<strong>800公頃</strong></p>
            <p>位於Dordogne河右岸，緊鄰Saint-Émilion</p>
          </div>
          <div class="highlight-box">
            <h5>🪨 獨特土壤</h5>
            <p><strong>藍色黏土</strong>（Blue Clay）— Pomerol的靈魂</p>
            <p>富含<strong>鐵質</strong>，保水性強，最適合Merlot</p>
            <p>高台區（Plateau）砂礫增加排水與複雜度</p>
          </div>
          <div class="highlight-box">
            <h5>👑 無官方分級</h5>
            <p>沒有正式分級制度，靠<strong>品質與聲譽</strong>說話</p>
            <p><strong>Pétrus</strong>— 公認的"無冕之王"</p>
            <p>其他頂級：Le Pin、Lafleur、Vieux Château Certan</p>
          </div>
          <div class="highlight-box">
            <h5>🍇 Merlot主導</h5>
            <p>Merlot比例高達<strong>80-100%</strong></p>
            <p>風格：<strong>豐滿、天鵝絨般、果味濃郁</strong></p>
            <p>香氣：黑李子、松露、黑櫻桃、巧克力</p>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Pomerol產區的藍色黏土（Blue Clay）最適合哪個品種生長？',
      options: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot'],
      correct: 1,
      explanation: 'Pomerol的藍色黏土富含鐵質，保水性強，為Merlot提供了理想的生長條件，使其能發展出豐富的果味和天鵝絨般的質地。'
    }
  },

  {
    type: 'content-with-quiz',
    title: 'Saint-Émilion：右岸最大的明珠',
    content: `
      <div class="knowledge-review">
        <h4>🏰 Saint-Émilion的全貌</h4>
        <div class="saint-emilion-structure">
          <div class="structure-section">
            <h5>📍 地理與規模</h5>
            <ul>
              <li>右岸<strong>最大</strong>產區，約<strong>5,400公頃</strong></li>
              <li>位於Dordogne河右岸，擁有豐富的地形變化</li>
              <li>中世紀古鎮，<strong>UNESCO世界文化遺產</strong></li>
            </ul>
          </div>
          <div class="structure-section">
            <h5>🗺️ 土壤與地形劃分</h5>
            <ul>
              <li><strong>高台區（Côtes）：</strong>石灰岩土壤，Cabernet Franc表現優異</li>
              <li><strong>坡地（Piedmont）：</strong>砂土與黏土混合，風格多樣</li>
              <li><strong>平原區（Graves）：</strong>砂礫土壤，類似左岸風格</li>
            </ul>
          </div>
          <div class="structure-section">
            <h5>🏅 Saint-Émilion分級制度</h5>
            <ul>
              <li><strong>Premier Grand Cru Classé A：</strong>最高等級（4家）
                <ul>
                  <li>Château Ausone（高台石灰岩）</li>
                  <li>Château Cheval Blanc（砂礫平原）</li>
                  <li>Château Angélus</li>
                  <li>Château Pavie</li>
                </ul>
              </li>
              <li><strong>Premier Grand Cru Classé B：</strong>14家頂級酒莊</li>
              <li><strong>Grand Cru Classé：</strong>64家優質酒莊</li>
              <li><strong>每10年重新評估</strong>（與左岸1855永久分級不同）</li>
            </ul>
          </div>
          <div class="structure-section">
            <h5>🍇 品種特色</h5>
            <ul>
              <li><strong>Merlot：</strong>主導品種（約60%），帶來豐富果味</li>
              <li><strong>Cabernet Franc：</strong>重要角色（約30%），增添優雅與香氣</li>
              <li>風格介於左岸的強勁與Pomerol的柔順之間</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Saint-Émilion的分級制度與左岸1855分級最大的區別是什麼？',
      options: ['沒有一級莊', '分級更嚴格', '每10年重新評估', '只有紅酒'],
      correct: 2,
      explanation: 'Saint-Émilion的分級制度每10年重新評估一次，確保分級反映當前品質，這與1855年固定不變的分級形成鮮明對比，體現了更動態的品質管理理念。'
    }
  },

  {
    type: 'comparison-table',
    title: 'Pomerol vs Saint-Émilion：右岸雙星對比',
    description: '理解右岸兩大產區的異同',
    headers: ['對比維度', 'Pomerol', 'Saint-Émilion'],
    rows: [
      ['產區規模', '約800公頃（最小）', '約5,400公頃（右岸最大）'],
      ['主要土壤', '藍色黏土（Blue Clay）+ 砂礫', '石灰岩、黏土、砂礫（多樣化）'],
      ['主導品種', 'Merlot（80-100%）', 'Merlot（60%）+ Cab Franc（30%）'],
      ['風格特色', '豐滿、天鵝絨般、極度柔順', '優雅、平衡、複雜多層次'],
      ['分級制度', '無官方分級', 'Premier Grand Cru Classé（動態）'],
      ['代表酒莊', 'Pétrus、Le Pin、Lafleur', 'Ausone、Cheval Blanc、Angélus'],
      ['價格定位', '極高（稀缺性）', '高，但相對多樣化'],
      ['香氣特徵', '黑李子、松露、巧克力', '紅色莓果、紫羅蘭、礦物感']
    ],
    quiz: {
      question: '為什麼Pomerol的酒款價格通常極高？',
      options: ['因為有一級莊', '因為產區面積小且產量稀少', '因為使用Cabernet Sauvignon', '因為有最古老的分級'],
      correct: 1,
      explanation: 'Pomerol是波爾多最小的主要產區，僅約800公頃，產量極其有限。加上Pétrus等頂級酒莊的世界級品質，稀缺性與卓越品質共同推高了價格。'
    }
  },

  {
    type: 'key-takeaways',
    title: '右岸產區核心要點',
    icon: '📌',
    takeaways: [
      {
        point: 'Merlot的天堂',
        detail: '右岸的黏土土壤為Merlot提供了理想環境，造就了與左岸截然不同的柔順、果味豐富的風格。'
      },
      {
        point: '土壤多樣性',
        detail: '從Pomerol的藍色黏土到Saint-Émilion的石灰岩高台，土壤多樣性帶來了豐富的風格變化。'
      },
      {
        point: '品質導向',
        detail: 'Pomerol無官方分級但頂級酒莊享譽世界，Saint-Émilion的動態分級確保品質持續提升。'
      }
    ]
  },

  // ========== 第三章：綜合評量 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: 'Level 2 綜合評量',
    subtitle: '測試您的產區知識掌握程度',
    icon: '📝',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '評量說明',
    content: `
      <div class="assessment-intro">
        <h4>📋 評量目標</h4>
        <p>本綜合評量將測試您對Level 2所學內容的掌握程度，包括：</p>
        <ul>
          <li>✅ 左岸四大明星產區的風土特色</li>
          <li>✅ 右岸Pomerol與Saint-Émilion的差異</li>
          <li>✅ 產區土壤與品種的對應關係</li>
          <li>✅ 分級制度的理解與應用</li>
          <li>✅ 代表性酒莊的識別能力</li>
        </ul>
        <div class="passing-criteria">
          <h5>🎯 通過標準</h5>
          <p><strong>答對12題或以上（80%）</strong>即可通過評量，獲得進階Level 3的資格。</p>
          <p>Level 3將深入探討波爾多的風土科學、氣候變遷、釀酒工藝等進階主題。</p>
        </div>
      </div>
    `
  },

  // ========== 綜合評量題目（15題）==========
  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第1題',
    content: '<p class="quiz-intro">以下開始正式評量，請仔細閱讀每個問題。</p>',
    quiz: {
      question: 'Médoc半島的砂礫土壤主要來源於什麼地質作用？',
      options: ['火山噴發沉積', '古代河流沖積', '冰川搬運', '風力堆積'],
      correct: 1,
      explanation: 'Médoc的砂礫土壤主要來自於第四紀冰河時期河流沖積作用，Garonne河和Dordogne河帶來的沖積物在Gironde河口形成了深厚的砂礫層。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第2題',
    content: '',
    quiz: {
      question: '以下哪個產區以"優雅細膩、如絲般柔順"的風格著稱？',
      options: ['Pauillac', 'Saint-Estèphe', 'Margaux', 'Pomerol'],
      correct: 2,
      explanation: 'Margaux以其優雅細膩、柔順如絲的風格而聞名，被譽為"Médoc的香水"，其細砂礫土壤造就了這種獨特的優雅風格。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第3題',
    content: '',
    quiz: {
      question: 'Pauillac產區擁有幾座1855一級莊（Premiers Crus）？',
      options: ['1座', '2座', '3座', '4座'],
      correct: 2,
      explanation: 'Pauillac擁有3座一級莊：Château Lafite Rothschild、Château Latour和Château Mouton Rothschild（1973年升級），是所有產區中一級莊最多的。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第4題',
    content: '',
    quiz: {
      question: 'Saint-Julien產區的典型特色是什麼？',
      options: ['最強勁的單寧', '完美的平衡與優雅', '最高的Merlot比例', '最細膩的香氣'],
      correct: 1,
      explanation: 'Saint-Julien被譽為Médoc最平衡的產區，其土壤（砂礫與黏土的理想組合）和品種搭配，使得酒款完美平衡了優雅與力量。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第5題',
    content: '',
    quiz: {
      question: '為什麼Saint-Estèphe的Merlot種植比例比其他Médoc產區更高？',
      options: ['因為氣候更溫暖', '因為土壤黏土含量較高', '因為靠近大西洋', '因為歷史傳統'],
      correct: 1,
      explanation: 'Saint-Estèphe的土壤黏土含量較高，保水性強，更適合早熟的Merlot。增加Merlot比例也有助於柔化該產區強勁的單寧結構。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第6題',
    content: '',
    quiz: {
      question: 'Pomerol產區最著名的土壤類型是什麼？',
      options: ['紅色砂礫', '藍色黏土（Blue Clay）', '白色石灰岩', '黃色砂土'],
      correct: 1,
      explanation: 'Pomerol最著名的是其藍色黏土（Blue Clay），富含鐵質，保水性強，為Merlot提供了理想的生長條件，是Pétrus等頂級酒莊的土壤基礎。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第7題',
    content: '',
    quiz: {
      question: 'Château Pétrus的葡萄園面積約為多少？',
      options: ['5公頃', '11.5公頃', '50公頃', '100公頃'],
      correct: 1,
      explanation: 'Château Pétrus的葡萄園面積僅約11.5公頃，極其稀少的產量（年產約30,000瓶）加上卓越品質，使其成為世界上最昂貴的葡萄酒之一。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第8題',
    content: '',
    quiz: {
      question: 'Saint-Émilion分級制度的特色是什麼？',
      options: ['永久固定不變', '每10年重新評估', '每年更新', '沒有分級'],
      correct: 1,
      explanation: 'Saint-Émilion的分級制度每10年重新評估一次（最近一次為2022年），這種動態機制確保分級反映當前品質水準，與1855固定分級形成對比。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第9題',
    content: '',
    quiz: {
      question: 'Saint-Émilion的Premier Grand Cru Classé A等級目前有幾家酒莊？',
      options: ['2家', '4家', '5家', '8家'],
      correct: 1,
      explanation: '2022年的最新分級中，Saint-Émilion的Premier Grand Cru Classé A等級有4家：Ausone、Cheval Blanc、Angélus和Pavie。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第10題',
    content: '',
    quiz: {
      question: 'Château Ausone位於Saint-Émilion的哪個地形區域？',
      options: ['砂礫平原', '高台石灰岩區', '河谷低地', '森林區'],
      correct: 1,
      explanation: 'Château Ausone位於Saint-Émilion的高台石灰岩區（Côtes），陡峭的南向坡地和石灰岩土壤賦予了其葡萄酒優雅的礦物感和卓越的陳年潛力。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第11題',
    content: '',
    quiz: {
      question: 'Château Cheval Blanc位於Saint-Émilion的哪個地形區域？',
      options: ['高台石灰岩區', '砂礫平原區', '黏土坡地', '河岸沖積區'],
      correct: 1,
      explanation: 'Château Cheval Blanc位於Saint-Émilion西北部的砂礫平原區（Graves），緊鄰Pomerol，其土壤類似左岸，造就了獨特的風格。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第12題',
    content: '',
    quiz: {
      question: '在Cabernet Franc的種植比例上，哪個產區通常最高？',
      options: ['Pauillac', 'Margaux', 'Pomerol', 'Saint-Émilion高台區'],
      correct: 3,
      explanation: 'Saint-Émilion的高台石灰岩區最適合Cabernet Franc生長，該品種在此比例可達30-40%，比左岸和Pomerol都高，為酒款帶來優雅的花香和礦物感。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第13題',
    content: '',
    quiz: {
      question: '波爾多的"車庫酒"（Garage Wine）運動起源於哪裡？',
      options: ['Médoc', 'Pomerol', 'Libournais衛星產區', 'Graves'],
      correct: 2,
      explanation: '車庫酒運動起源於1990年代的Libournais地區（特別是Saint-Émilion衛星產區），以極小產量、極致品質和現代釀造手法挑戰傳統，代表酒莊如Le Pin、Valandraud等。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第14題',
    content: '',
    quiz: {
      question: '左岸和右岸在釀造理念上的主要差異是什麼？',
      options: [
        '左岸更注重傳統，右岸更注重創新',
        '左岸強調結構與陳年，右岸強調果味與平易近人',
        '左岸全部使用新橡木桶，右岸不用',
        '左岸產量更大，右岸產量更小'
      ],
      correct: 1,
      explanation: '左岸（特別是列級莊）傳統上強調Cabernet Sauvignon的結構、單寧和長期陳年潛力；右岸則以Merlot為主，更注重果味的表現和年輕時的平易近人，雖然頂級酒莊也具備卓越陳年潛力。'
    }
  },

  {
    type: 'content-with-quiz',
    title: '綜合評量 - 第15題',
    content: '',
    quiz: {
      question: '以下哪個說法是正確的？',
      options: [
        'Pomerol有正式的分級制度',
        'Saint-Émilion的分級永久固定',
        'Médoc的1855分級可以每10年修改',
        'Pomerol沒有官方分級但Pétrus被公認為頂級'
      ],
      correct: 3,
      explanation: 'Pomerol是波爾多主要產區中唯一沒有官方分級制度的，但Château Pétrus憑藉其卓越品質和世界聲譽被公認為產區的"無冕之王"，價格與一級莊相當甚至更高。'
    }
  },

  // ========== 評量結果與展望 ==========
  {
    type: 'course-complete',
    title: '🎉 Level 2 綜合評量完成',
    subtitle: '波爾多產區進階知識掌握度評估',
    achievement: '您已完成Level 2的所有課程與綜合評量',
    summary: '恭喜您完成Level 2的綜合評量！如果您答對12題或以上（80%），說明您已經扎實掌握了波爾多主要產區的風土特色、品種特性、分級制度和代表酒莊。您現在已經具備進階到Level 3的能力，準備探索更深入的風土科學、氣候變遷、釀酒工藝等專業主題。',
    nextSteps: [
      {
        action: '🎯 評估結果',
        items: [
          '答對12-15題（80-100%）：優秀！完全掌握L2知識，可直接進階L3',
          '答對9-11題（60-79%）：良好！建議複習薄弱環節後進階L3',
          '答對8題以下（<60%）：建議重新學習L2課程並再次評量'
        ]
      },
      {
        action: '📚 Level 3 預習建議',
        items: [
          '複習左右岸的土壤科學基礎知識',
          '了解氣候變遷對波爾多的影響',
          '探索現代釀酒技術的發展趨勢',
          '關注可持續發展與有機種植實踐'
        ]
      },
      {
        action: '🍷 實踐建議',
        items: [
          '品評並對比左岸（如Pauillac）與右岸（如Pomerol）的酒款',
          '嘗試識別不同產區的風格特徵',
          '參觀波爾多產區或參加品酒活動',
          '建立個人的波爾多酒款品鑑筆記'
        ]
      }
    ]
  },

  {
    type: 'reflection-questions',
    title: '學習反思',
    icon: '💭',
    questions: [
      {
        question: '在左岸四大產區中，您最喜歡哪個產區的風格？為什麼？',
        prompts: [
          '您更偏好Margaux的優雅、Pauillac的強勁、Saint-Julien的平衡，還是Saint-Estèphe的濃郁？',
          '這種偏好與您的個人口味、餐飲搭配習慣或收藏目標有什麼關係？'
        ]
      },
      {
        question: '如果讓您在Pomerol和Saint-Émilion之間選擇投資一款酒，您會如何決策？',
        prompts: [
          '考慮產區規模、稀缺性、價格走勢、風格偏好等因素',
          'Pomerol的極致稀缺 vs Saint-Émilion的多樣選擇，哪個更符合您的策略？'
        ]
      }
    ]
  },

  // 結束頁
  {
    type: 'end',
    title: 'Level 2 完成',
    achievement: 'L2-9 波爾多產區進階總結 - Level 2 認證',
    description: '恭喜您完成Level 2的所有課程與綜合評量！您已系統性地掌握了波爾多左岸Médoc四大村莊（Margaux、Pauillac、Saint-Julien、Saint-Estèphe）與右岸核心產區（Pomerol、Saint-Émilion）及衛星產區的深度知識。從風土差異到酒莊分級，從品鑑技巧到投資策略，您已具備專業級的波爾多產區認知。',
    skills: [
      '完整掌握波爾多左岸與右岸所有主要產區的風土特色',
      '理解不同產區的土壤、氣候、品種配比對風格的影響',
      '熟悉1855分級與Saint-Émilion分級制度',
      '能夠品鑑並區分不同產區酒款的風格差異',
      '掌握波爾多葡萄酒的投資與收藏策略',
      '建立了完整的波爾多產區知識體系'
    ],
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '組織一場波爾多產區對比品鑑會（左岸vs右岸）',
          '建立個人的波爾多酒款收藏清單',
          '嘗試盲品不同產區的酒款，測試辨識能力',
          '規劃一次波爾多產區深度旅行'
        ]
      },
      {
        action: '進階學習',
        items: [
          '準備進入Level 3：波爾多葡萄酒專業深化',
          '參加專業侍酒師課程或WSET認證',
          '深入研究特定年份的品質評估',
          '關注波爾多期酒市場動態'
        ]
      }
    ],
    certificate: '您已獲得Level 2波爾多產區專家認證',
    reflection: {
      title: 'Level 2 總反思',
      questions: [
        '左岸與右岸的根本差異是什麼？各自的魅力何在？',
        '如果只能選擇三個波爾多產區深入研究，您會選哪三個？為什麼？',
        '在品鑑中，您最能辨識哪個產區的風格特徵？',
        'Level 2的學習如何改變了您對波爾多葡萄酒的理解？'
      ]
    },
    keyInsight: 'Level 2的學習讓我們從產區層面深入理解波爾多的複雜性與多樣性。左岸的Cabernet Sauvignon主導、右岸的Merlot主導，不僅是品種差異，更是風土哲學的不同詮釋。從Médoc的砂礫到Pomerol的藍黏土，從1855分級的歷史傳承到Saint-Émilion的動態調整，波爾多的每個產區都在講述自己獨特的故事。掌握產區知識，就是掌握解讀波爾多葡萄酒的密碼本。',
    shareMessage: '我完成了波爾多葡萄酒Level 2的完整學習！從Médoc四大村莊到右岸珍寶Pomerol，系統掌握了所有主要產區的風土密碼，獲得Level 2認證！準備進入Level 3專業深化！🎓🍷 #波爾多 #Level2完成 #產區專家 #葡萄酒認證'
  }
]

export default l29Content
