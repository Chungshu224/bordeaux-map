/**
 * L1-3 波爾多主要葡萄品種基礎
 * 認識波爾多紅白酒的經典葡萄品種
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          如果說土壤和氣候是波爾多的舞台，那麼葡萄品種就是這個舞台上的主角。波爾多最大的特色之一，就是「混釀藝術」——酒莊會根據年份、風土與目標風格，將不同葡萄品種巧妙調配，創造出複雜而平衡的佳釀。
        </p>

        <p class="intro-context">
          本課程將帶您認識波爾多最重要的六大葡萄品種。紅葡萄品種：赤霞珠 (Cabernet Sauvignon)、梅洛 (Merlot)、卡本內弗朗 (Cabernet Franc)；白葡萄品種：賽美蓉 (Sémillon)、白蘇維濃 (Sauvignon Blanc)、密思卡岱 (Muscadelle)。我們將深入學習每個品種的特性、風味特徵、種植區域，以及它們在混釀中扮演的角色。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 掌握六大經典品種</h4>
            <p>深入認識 Cabernet Sauvignon、Merlot、Cabernet Franc、Sémillon、Sauvignon Blanc、Muscadelle 的獨特特性</p>
          </div>

          <div class="point-item">
            <h4>🎨 理解混釀藝術</h4>
            <p>學習不同品種在混釀中的角色定位與互補關係</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 認識品種-產區配對</h4>
            <p>理解左岸以赤霞珠為主、右岸以梅洛為主的原因與邏輯</p>
          </div>

          <div class="point-item">
            <h4>👃 辨識風味特徵</h4>
            <p>學習每個品種典型的香氣、口感與結構特點</p>
          </div>

          <div class="point-item">
            <h4>🌱 了解生長特性</h4>
            <p>掌握各品種對氣候、土壤、成熟期的不同需求</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠辨識波爾多主要葡萄品種的特徵，並理解混釀背後的邏輯與藝術。這是品鑑波爾多葡萄酒的重要基礎！
        </p>
      </div>
    `
  },

  {
    title: '香氣家族互動輪',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '認識波爾多紅白酒的經典葡萄品種',
    highlights: [
      { id: 1, icon: '🌀', title: '互動探索', content: '點選家族高亮，滑過顯示筆記；支援搜尋過濾' },
      { id: 2, icon: '🔎', title: '從家族到細節', content: '先定位大方向，再收斂到具體筆記' }
    ],
    component: 'AromaWheel',
    componentProps: {
      data: [
        { name: '黑色水果', color: '#6b7280', items: [
          { name: '黑醋栗', examples: ['黑加侖', '黑莓'], notes: '常見於 Cabernet Sauvignon' },
          { name: '李子', examples: ['熟李', '烏梅'], notes: 'Merlot 常見' }
        ]},
        { name: '紅色水果', color: '#ef4444', items: [
          { name: '紅櫻桃', examples: ['覆盆子'], notes: '右岸風格、Cabernet Franc' },
          { name: '草莓', examples: [], notes: '年輕或較冷年份' }
        ]},
        { name: '草本/青味', color: '#22c55e', items: [
          { name: '青椒', examples: ['青梗味'], notes: '成熟度、栽培與品種表現' },
          { name: '薄荷', examples: ['月桂葉'], notes: 'Cabernet 家族常見' }
        ]},
        { name: '花香', color: '#a855f7', items: [
          { name: '紫羅蘭', examples: [], notes: 'Cabernet Franc 代表香氣' },
          { name: '乾花', examples: [], notes: '熟成年份常見' }
        ]},
        { name: '柑橘/核果', color: '#f59e0b', items: [
          { name: '檸檬', examples: ['葡萄柚'], notes: 'Sauvignon Blanc 清脆調' },
          { name: '白桃', examples: [], notes: 'Sémillon 油潤感' }
        ]},
        { name: '蜂蜜/果乾', color: '#eab308', items: [
          { name: '蜂蜜', examples: [], notes: '甜酒與熟成 Sémillon' },
          { name: '杏乾', examples: ['無花果乾'], notes: '貴腐濃縮' }
        ]},
        { name: '桶味/香料', color: '#b45309', items: [
          { name: '雪松', examples: ['烤麵包'], notes: '左岸常見第三香' },
          { name: '香草', examples: ['甜香料'], notes: '橡木桶烘烤影響' }
        ]}
      ]
    }
  },
  {
    title: '風格光譜（互動）',
    highlights: [
      { id: 1, icon: '📈', title: '三軸定位', content: '酒體・單寧・酸度一眼看懂' },
      { id: 2, icon: '🌤️', title: '年份調整', content: '偏暖/偏涼一鍵切換對照' }
    ],
    component: 'StyleSpectrum',
    componentProps: {
      defaultKey: 'left-red',
      defaultCompare: true,
      defaultCompareKey: 'right-red',
      presets: [
        { key: 'left-red', label: '左岸紅', axes: { body: 7.5, tannin: 8.0, acidity: 6.0 } },
        { key: 'right-red', label: '右岸紅', axes: { body: 6.5, tannin: 6.0, acidity: 6.0 } },
        { key: 'dry-white', label: '干型白', axes: { body: 4.5, tannin: 0.0, acidity: 7.5 } },
        { key: 'sweet', label: '貴腐甜', axes: { body: 8.0, tannin: 0.0, acidity: 5.0 } }
      ],
      yearAdjust: {
        normal: { body: 0, tannin: 0, acidity: 0 },
        'left-red': {
          warm: { body: 0.5, tannin: 0.5, acidity: -0.3 },
          cool: { body: -0.4, tannin: -0.3, acidity: 0.4 }
        },
        'right-red': {
          warm: { body: 0.4, tannin: 0.3, acidity: -0.2 },
          cool: { body: -0.3, tannin: -0.2, acidity: 0.3 }
        },
        'dry-white': {
          warm: { body: 0.2, tannin: 0.0, acidity: -0.6 },
          cool: { body: -0.2, tannin: 0.0, acidity: 0.7 }
        },
        'sweet': {
          warm: { body: 0.3, tannin: 0.0, acidity: -0.3 },
          cool: { body: -0.2, tannin: 0.0, acidity: 0.3 }
        }
      }
    }
  },

  // ========== 第一章：品種特性 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '品種特性',
    subtitle: '認識紅白葡萄品種',
    icon: '🍇',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '紅酒葡萄品種：三大主力',
    highlights: [
      { id: 1, icon: '🍇', title: '卡本內-蘇維濃', content: '骨幹品種，提供結構和陳年潛力' },
      { id: 2, icon: '🍷', title: '梅洛', content: '柔順品種，增添圓潤口感和早期適飲性' }
    ],
    content: `<div class="red-varieties">
      <p class="lead-text">波爾多紅酒的卓越品質來自於三個主要葡萄品種的完美調配，每個品種都有其獨特的特性和貢獻。</p>
      <div class="variety-profiles">
        <div class="cabernet-sauvignon">
          <h4>🍇 卡本內-蘇維濃 (Cabernet Sauvignon)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>果實特點：</strong>小粒、厚皮、晚熟</li>
                <li><strong>顏色：</strong>深紫紅色，顏色濃郁</li>
                <li><strong>單寧：</strong>高單寧，提供結構骨架</li>
                <li><strong>酸度：</strong>適中至高酸度</li>
                <li><strong>酒精度：</strong>通常較高，13-14.5%</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>主要香氣：</strong>黑醋栗、青椒、薄荷</li>
                <li><strong>陳年香氣：</strong>雪松、煙草、皮革</li>
                <li><strong>口感：</strong>結構強勁，需要時間柔化</li>
                <li><strong>餘韻：</strong>悠長，層次豐富</li>
              </ul>
            </div>
            <div class="growing-conditions">
              <h5>適宜產區</h5>
              <p>在波爾多左岸表現最佳，特別是梅多克地區，砂礫土壤提供良好排水，有利於晚熟品種的成熟。</p>
            </div>
          </div>
        </div>
        <div class="merlot">
          <h4>🍷 梅洛 (Merlot)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>果實特點：</strong>中等偏大、皮薄、早熟</li>
                <li><strong>顏色：</strong>寶石紅色，相對較淺</li>
                <li><strong>單寧：</strong>中等單寧，質地柔順</li>
                <li><strong>酸度：</strong>中等酸度</li>
                <li><strong>酒精度：</strong>中等，12.5-14%</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>主要香氣：</strong>李子、櫻桃、巧克力</li>
                <li><strong>陳年香氣：</strong>香草、咖啡、果乾</li>
                <li><strong>口感：</strong>圓潤柔軟，易於入口</li>
                <li><strong>餘韻：</strong>中等長度，溫和愉悦</li>
              </ul>
            </div>
            <div class="growing-conditions">
              <h5>適宜產區</h5>
              <p>在波爾多右岸表現優異，特別是聖愛美濃和龐美侯，粘土土壤保持水分，適合早熟品種的發展。</p>
            </div>
          </div>
        </div>
        <div class="cabernet-franc">
          <h4>🌿 卡本內-弗朗 (Cabernet Franc)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>果實特點：</strong>中等粒、中等皮厚、中熟</li>
                <li><strong>顏色：</strong>中等深紅色</li>
                <li><strong>單寧：</strong>中等單寧，質地優雅</li>
                <li><strong>酸度：</strong>較高酸度，帶來清新感</li>
                <li><strong>酒精度：</strong>中等，12-13.5%</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>主要香氣：</strong>覆盆子、青椒、紫羅蘭</li>
                <li><strong>陳年香氣：</strong>香料、煙草、土壤</li>
                <li><strong>口感：</strong>優雅精緻，帶有草本氣息</li>
                <li><strong>餘韻：</strong>清新持久，帶有香料感</li>
              </ul>
            </div>
            <div class="growing-conditions">
              <h5>適宜產區</h5>
              <p>在右岸聖愛美濃表現卓越，作為主要品種；在左岸常作為調配品種，增添優雅和香料氣息。</p>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    geojsonPaths: [
      // Cabernet Sauvignon 適宜產區：左岸梅多克
      '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
      '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson',
      '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson',
      '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson',
      
      // Merlot 與 Cabernet Franc 適宜產區：右岸
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson'
    ],
    quiz: {
      question: '梅洛葡萄品種的主要特點是什麼？',
      options: ['高單寧，晚熟', '柔順圓潤，早熟', '高酸度，草本氣息', '深色濃郁，結構強'],
      correct: 1,
      explanation: '梅洛是早熟品種，果實較大皮薄，釀造的酒款單寧適中，口感柔順圓潤，易於入口，是波爾多調配酒中的重要柔化元素。'
    }
  },
  {
    title: '白酒葡萄品種：清香典雅',
    highlights: [
      { id: 1, icon: '🤍', title: '白蘇維翁', content: '清新爽口，帶有青草和柑橘香氣' },
      { id: 2, icon: '🍯', title: '賽美容', content: '圓潤豐富，適合釀造甜酒' }
    ],
    content: `<div class="white-varieties">
      <p class="lead-text">波爾多白酒雖然產量不及紅酒，但同樣展現出卓越的品質，主要由兩個經典品種構成完美平衡。</p>
      <div class="white-variety-profiles">
        <div class="sauvignon-blanc">
          <h4>🤍 白蘇維翁 (Sauvignon Blanc)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>果實特點：</strong>小粒、薄皮、中早熟</li>
                <li><strong>顏色：</strong>淺檸檬色到金黃色</li>
                <li><strong>酸度：</strong>高酸度，帶來清新活力</li>
                <li><strong>酒精度：</strong>中等，11.5-13%</li>
                <li><strong>特殊性：</strong>香氣表現力強，風格鮮明</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>主要香氣：</strong>青草、番石榴、白醋栗</li>
                <li><strong>花果香氣：</strong>檸檬、葡萄柚、接骨木花</li>
                <li><strong>草本氣息：</strong>新鮮薄荷、刺激性植物香</li>
                <li><strong>口感：</strong>清脆爽口，充滿活力</li>
                <li><strong>餘韻：</strong>乾淨俐落，帶有檸檬皮的苦味</li>
              </ul>
            </div>
            <div class="wine-styles">
              <h5>釀酒風格</h5>
              <ul>
                <li><strong>不鏽鋼發酵：</strong>保持純淨果香</li>
                <li><strong>橡木桶陳年：</strong>增加複雜度和質感</li>
                <li><strong>酒泥接觸：</strong>提升酒體和口感豐富度</li>
                <li><strong>調配角色：</strong>提供骨架和清新感</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="semillon">
          <h4>🍯 賽美容 (Sémillon)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>果實特點：</strong>中等粒、薄皮、中晚熟</li>
                <li><strong>顏色：</strong>金黃色，陳年後更深</li>
                <li><strong>酸度：</strong>中低酸度，質地豐潤</li>
                <li><strong>酒精度：</strong>中高，12-14%</li>
                <li><strong>特殊性：</strong>易感染貴腐菌，適合甜酒</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>主要香氣：</strong>蜂蜜、蜂蜜、無花果</li>
                <li><strong>果實香氣：</strong>白桃、杏桃、熱帶水果</li>
                <li><strong>陳年香氣：</strong>堅果、奶油、烤麵包</li>
                <li><strong>口感：</strong>圓潤豐滿，油潤質感</li>
                <li><strong>餘韻：</strong>悠長甜美，層次複雜</li>
              </ul>
            </div>
            <div class="wine-styles">
              <h5>釀酒風格</h5>
              <ul>
                <li><strong>干型調配：</strong>增加酒體和複雜度</li>
                <li><strong>貴腐甜酒：</strong>蘇岱和巴薩克的精華</li>
                <li><strong>橡木陳年：</strong>發展堅果和香草風味</li>
                <li><strong>晚收風格：</strong>濃縮度高，風味集中</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="muscadelle">
          <h4>🌸 慕絲卡岱 (Muscadelle)</h4>
          <div class="variety-details">
            <div class="characteristics">
              <h5>品種特性</h5>
              <ul>
                <li><strong>種植比例：</strong>較少，通常5-10%</li>
                <li><strong>香氣特點：</strong>花香濃郁，慕絲卡香氣</li>
                <li><strong>釀酒角色：</strong>提供香氣複雜度</li>
                <li><strong>適用性：</strong>干型和甜型酒款皆適用</li>
              </ul>
            </div>
            <div class="flavor-contribution">
              <h5>調配貢獻</h5>
              <ul>
                <li><strong>花香層次：</strong>玫瑰花、橙花香氣</li>
                <li><strong>香料氣息：</strong>淡雅的香料和草本氣息</li>
                <li><strong>口感提升：</strong>增加酒款的精緻度</li>
                <li><strong>香氣持久：</strong>延長香氣的持續時間</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: true,
    geojsonPaths: [
      // 白蘇維翁 (Sauvignon Blanc) 主要干白產區
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson',  // 頂級干白產區
      '/geojson/LeftBank/Graves/Graves_AOC.geojson',          // 傳統干白產區
      '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson', // 清爽干白產區
      
      // 賽美容 (Sémillon) 貴腐甜酒產區
      '/geojson/Sauternais/Sauternes_AOC.geojson',            // 頂級甜酒產區
      '/geojson/Sauternais/Barsac_AOC.geojson'                // 優雅甜酒產區
    ],
    quiz: {
  question: '波爾多白酒中，白蘇維翁葡萄的主要作用是什麼？',
      options: ['提供甜度和酒體', '增加花香和香料氣息', '提供酸度和清新感', '增加酒精度和濃郁度'],
      correct: 2,
  explanation: '白蘇維翁是波爾多白酒的重要品種，以其高酸度和清新的果香著稱，為調配酒提供骨架結構和活潑的口感。'
    }
  },

  // ========== 第二章：調配與辨識 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '調配與辨識',
    subtitle: '混釀藝術與風格分析',
    icon: '🎨',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    title: '品種調配的藝術與科學',
    highlights: [
      { id: 1, icon: '🎨', title: '調配哲學', content: '各品種優勢互補，創造平衡完美的酒款' },
      { id: 2, icon: '⚖️', title: '比例平衡', content: '依據年份和風土條件調整品種比例' }
    ],
    content: `<div class="blending-art">
      <p class="lead-text">波爾多葡萄酒的精髓在於調配藝術，通過不同品種的巧妙結合，創造出比單一品種更加複雜和平衡的酒款。</p>
      <div class="blending-principles">
        <div class="red-blending">
          <h4>🍷 紅酒調配策略</h4>
          <div class="blending-styles">
            <div class="left-bank-style">
              <h5>左岸風格 (卡本內-蘇維濃主導)</h5>
              <div class="blend-composition">
                <p><strong>典型比例：</strong></p>
                <ul>
                  <li>卡本內-蘇維濃：60-80%</li>
                  <li>梅洛：15-35%</li>
                  <li>卡本內-弗朗：5-15%</li>
                  <li>其他品種：少量</li>
                </ul>
                <p><strong>風格特點：</strong>結構強勁，陳年潛力佳，需要時間發展</p>
              </div>
            </div>
            <div class="right-bank-style">
              <h5>右岸風格 (梅洛主導)</h5>
              <div class="blend-composition">
                <p><strong>典型比例：</strong></p>
                <ul>
                  <li>梅洛：60-90%</li>
                  <li>卡本內-弗朗：10-30%</li>
                  <li>卡本內-蘇維濃：少量或無</li>
                </ul>
                <p><strong>風格特點：</strong>柔順易飲，早期適飲性佳，優雅精緻</p>
              </div>
            </div>
          </div>
          <div class="blending-benefits">
            <h5>調配優勢</h5>
            <ul>
              <li><strong>結構平衡：</strong>卡本內-蘇維濃提供骨架，梅洛增加柔順</li>
              <li><strong>香氣複雜：</strong>多品種帶來層次豐富的香氣表現</li>
              <li><strong>風險分散：</strong>不同成熟期降低天氣風險</li>
              <li><strong>年份調整：</strong>根據年份特點調整比例</li>
            </ul>
          </div>
        </div>
        <div class="white-blending">
          <h4>🤍 白酒調配策略</h4>
          <div class="white-blend-styles">
            <div class="dry-white-style">
              <h5>干型白酒調配</h5>
              <div class="blend-composition">
                <p><strong>典型比例：</strong></p>
                <ul>
                  <li>白蘇維翁：60-80%</li>
                  <li>賽美容：20-40%</li>
                  <li>慕絲卡岱：0-10%</li>
                </ul>
                <p><strong>風格特點：</strong>清新活潑，平衡優雅，適合年輕享用</p>
              </div>
            </div>
            <div class="sweet-wine-style">
              <h5>甜酒調配 (蘇岱/巴薩克)</h5>
              <div class="blend-composition">
                <p><strong>典型比例：</strong></p>
                <ul>
                  <li>賽美容：60-90%</li>
                  <li>白蘇維翁：10-30%</li>
                  <li>慕絲卡岱：5-15%</li>
                </ul>
                <p><strong>風格特點：</strong>濃郁甜美，複雜度高，超長陳年潛力</p>
              </div>
            </div>
          </div>
          <div class="white-blending-benefits">
            <h5>白酒調配優勢</h5>
            <ul>
              <li><strong>酸度平衡：</strong>白蘇維翁提供活力，賽美容增加豐滿</li>
              <li><strong>香氣互補：</strong>清新果香與蜂蜜香氣的完美結合</li>
              <li><strong>質感層次：</strong>爽脆與圓潤的質感平衡</li>
              <li><strong>陳年發展：</strong>不同品種在陳年中展現不同特質</li>
            </ul>
          </div>
        </div>
        <div class="vintage-factors">
          <h4>🌡️ 年份對調配的影響</h4>
          <div class="vintage-adjustments">
            <div class="warm-vintage">
              <h5>溫暖年份調配策略</h5>
              <ul>
                <li>增加梅洛比例，帶來清新感</li>
                <li>加入更多卡本內-弗朗，增加酸度</li>
                <li>白酒中提高白蘇維翁比例</li>
                <li>控制酒精度，保持平衡</li>
              </ul>
            </div>
            <div class="cool-vintage">
              <h5>涼爽年份調配策略</h5>
              <ul>
                <li>增加卡本內-蘇維濃比例</li>
                <li>選擇成熟度最佳的地塊</li>
                <li>延長陳年時間發展複雜度</li>
                <li>白酒中增加賽美容比例</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '波爾多右岸酒款主要以哪個葡萄品種為主導？',
  options: ['卡本內-蘇維濃', '梅洛', '卡本內-弗朗', '白蘇維翁'],
      correct: 1,
      explanation: '波爾多右岸（聖愛美濃、龐美侯等）以梅洛為主導品種，通常佔60-90%，創造出柔順優雅、早期適飲的酒款風格。'
    }
  },
  {
    title: '香氣家族與辨識技巧',
    highlights: [
      { id: 1, icon: '🌀', title: '香氣家族', content: '先找家族（水果／花香／草本／桶味），再細化筆記' },
      { id: 2, icon: '👃', title: '聞香技巧', content: '旋杯前後、遠近距離切換，從大方向到細節' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['家族', '代表筆記', '常見於'],
          rows: [
            ['黑色水果', '黑醋栗、黑莓、李子', 'Cabernet Sauvignon、Merlot'],
            ['紅色水果', '草莓、覆盆子、紅櫻桃', 'Merlot、Cabernet Franc'],
            ['草本/青味', '青椒、月桂葉、薄荷', 'Cabernet 家族（特別是 Cab Franc）'],
            ['花香', '紫羅蘭、牡丹、乾花', 'Cabernet Franc、右岸混釀'],
            ['柑橘/核果', '檸檬、葡萄柚、白桃', 'Sauvignon Blanc（柑橘）／Sémillon（核果）'],
            ['蜂蜜/果乾', '蜂蜜、杏乾、無花果乾', 'Sémillon（甜酒）'],
            ['桶味（第三類）', '雪松、香草、烤麵包、甜香料', '橡木桶影響（左岸常見）']
          ]
        }
      },
      {
        type: 'steps',
        title: '聞香小撇步',
        steps: [
          '先不旋杯聞「第一印象」；再旋杯強化揮發香氣',
          '鼻子遠近距離切換：遠聞抓家族，近聞找細節',
          '先分 Primary（葡萄本香）/ Secondary（酵母與工藝）/ Tertiary（熟成）',
          '把筆記對回品種邏輯：Cab 家族常見黑醋栗＋草本；Merlot 偏李子＋巧克力',
          '白酒注意酸度線索：Sauvignon 清脆柑橘；Sémillon 油潤蜂蜜'
        ]
      }
    ]
  },
  {
    title: '風格光譜：左岸 vs 右岸 vs 白/甜',
    highlights: [
      { id: 1, icon: '📈', title: '快速定位', content: '以酒體/單寧/酸度三軸快速判斷風格' },
      { id: 2, icon: '🧭', title: '比對記憶點', content: '左岸「骨架」；右岸「柔順」；白酒「清脆」；甜酒「濃潤」' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['維度', '左岸紅', '右岸紅', '干型白', '貴腐甜'],
          rows: [
            ['酒體', '中高至飽滿', '中至中高', '輕至中等', '飽滿濃郁'],
            ['單寧', '中高～高（明顯）', '中等（質地細緻）', '無', '無'],
            ['酸度', '中等', '中等', '中高（清脆）', '中等（以甜度平衡）'],
            ['香氣主調', '黑醋栗、雪松、煙草', '李子、紅果、花香', '青草、柑橘、白花', '蜂蜜、杏乾、貴腐風味'],
            ['適飲期', '較晚（需瓶陳）', '較早（年輕可飲）', '年輕清新', '長熟陳年能力']
          ]
        }
      }
    ]
  },
  {
    title: '典型混釀比例與記憶口訣',
    highlights: [
      { id: 1, icon: '🧪', title: '典型比例', content: '左岸以 Cabernet Sauvignon 為主；右岸以 Merlot 為主' },
      { id: 2, icon: '📝', title: '口訣', content: '左Cab骨架、右Mer柔沙；白蘇清脆、賽美豐潤' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['風格/區域', '典型比例', '記憶口訣'],
          rows: [
            ['左岸紅（梅多克/佩薩克）', 'Cabernet Sauvignon 60–80%｜Merlot 15–35%｜Cabernet Franc 5–15%', '左Cab「骨架」強，需時間'],
            ['右岸紅（聖愛美濃/龐美侯）', 'Merlot 60–90%｜Cabernet Franc 10–30%｜Cabernet Sauvignon 少量或無', '右Mer「柔沙」感，較早飲'],
            ['干型白（格拉夫/佩薩克）', 'Sauvignon Blanc 60–80%｜Sémillon 20–40%｜Muscadelle 0–10%', '白蘇「清脆」，賽美「豐潤」'],
            ['甜酒（蘇岱/巴薩克）', 'Sémillon 60–90%｜Sauvignon Blanc 10–30%｜Muscadelle 5–15%', '賽美是甜酒靈魂']
          ]
        }
      },
      {
        type: 'info',
        title: '一句話總結',
        content: '左岸Cab骨架、右岸Mer柔沙；白蘇清脆、賽美豐潤。遇到年份差異，比例會微調以求平衡。'
      }
    ]
  },
  {
    title: '常見混淆點（快速澄清）',
    highlights: [
      { id: 1, icon: '❗', title: '品種 vs 產區', content: '不要把品種特性與產區風格完全畫上等號' }
    ],
    blocks: [
      { type: 'misconception', content: '「卡本內-蘇維濃＝青椒味」→ 青味與成熟度/氣候/釀造相關，不是必然；成熟度佳時以黑醋栗、雪松為主。' },
      { type: 'misconception', content: '「卡本內-弗朗＝次等品」→ Cab Franc 在右岸能展現紫羅蘭與優雅線條，是關鍵角色。' },
      { type: 'misconception', content: '「右岸＝梅洛單一品種」→ 多為梅洛主導混釀，Cab Franc 常扮演提酸增香的重要配角。' },
      { type: 'misconception', content: '「蘇岱＝晚收甜白」→ 其核心是貴腐菌貴腐化帶來的濃縮與複雜度，非僅晚收。' },
      { type: 'misconception', content: '「兩海之間只做白酒」→ Entre‑Deux‑Mers AOC 是干白專屬，但區內可用其他 AOC 生產紅酒。' }
    ],
    quiz: {
      question: '以下哪一個搭配較貼近右岸紅酒的典型風格？',
      options: ['高單寧＋黑醋栗＋晚熟', '中等單寧＋李子紅果＋較早適飲', '高酸度＋青草柑橘＋清脆口感', '蜂蜜杏乾＋濃潤甜感＋長熟能力'],
      correct: 1,
      explanation: '右岸以 Merlot 為主導，常見李子與紅果調、單寧較圓滑、較早適飲；左岸則更偏黑醋栗與高單寧骨架。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-3 產區分類與特色 - 波爾多全景地圖',
    description: '恭喜您完成波爾多產區分類的全面學習！您已掌握波爾多完整的產區體系，從左岸的Médoc、Graves到右岸的Pomerol、Saint-Émilion，從干型紅白酒到甜白Sauternes，您現在擁有了波爾多葡萄酒的完整地圖。理解產區分類，就是理解波爾多的多樣性與複雜性。',
    skills: [
      '掌握波爾多完整的產區分類體系',
      '理解左岸主要產區（Médoc、Graves）的特色',
      '認識右岸核心產區（Pomerol、Saint-Émilion）的風格',
      '了解Sauternes甜白與Entre-Deux-Mers干白',
      '建立產區、品種、風格的完整關聯'
    ],
    nextSteps: [
      {
        action: '鞏固學習',
        items: [
          '繪製波爾多產區地圖，標注主要產區位置',
          '總結左岸與右岸各產區的核心特徵',
          '記憶Médoc四大村莊與右岸雙珠',
          '品鑑不同產區的代表酒款'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-4：左岸核心產區詳解',
          '深入了解Médoc、Graves的風土',
          '探索列級莊分級制度'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '波爾多為什麼會形成如此多樣的產區？',
        '左岸與右岸產區的根本差異是什麼？',
        '您最想深入探索哪個產區？為什麼？',
        'Sauternes貴腐甜白的獨特性在哪裡？'
      ]
    },
    keyInsight: '波爾多的產區多樣性是風土複雜性的直接體現。從砂礫到黏土、從Cabernet到Merlot、從干紅到甜白，每個產區都在講述自己獨特的風土故事。理解產區分類不僅是記憶地名，更是理解土壤、氣候、品種、傳統如何共同塑造每個產區的獨特個性。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的「產區分類與特色」課程！現在我能辨識波爾多的完整產區地圖了！🗺️🍷 #波爾多 #產區地圖 #葡萄酒學習'
  }
]

export default lessonContent
