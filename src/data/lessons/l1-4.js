/**
 * L1-4 左岸與右岸的差異
 * 深入了解波爾多兩大產區的風土特色和酒款風格
 */

export const lessonContent = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          「左岸還是右岸？」這是波爾多愛好者最常討論的話題。吉隆河 (Gironde) 如同一條分界線，將波爾多劃分為截然不同的兩個世界：左岸的礫石土壤孕育出強勁優雅的赤霞珠，右岸的黏土與石灰岩則讓梅洛展現柔順飽滿的魅力。
        </p>

        <p class="intro-context">
          本課程將帶您深入探索左岸與右岸的核心差異。我們將學習河流如何劃分產區、左岸的梅多克 (Médoc) 與格拉夫 (Graves)、右岸的聖愛美濃 (Saint-Émilion) 與龐美侯 (Pomerol)、兩海之間 (Entre-Deux-Mers) 的獨特地位，以及土壤、氣候、品種、風格的系統性差異。理解左右岸，就是理解波爾多葡萄酒風格多樣性的關鍵。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解河流劃分系統</h4>
            <p>學習吉隆河、加龍河、多爾多涅河如何界定左岸、右岸與兩海之間</p>
          </div>

          <div class="point-item">
            <h4>🪨 掌握土壤差異</h4>
            <p>理解左岸礫石vs右岸黏土與石灰岩的成因、特性與影響</p>
          </div>

          <div class="point-item">
            <h4>🍇 認識品種配置</h4>
            <p>學習為何左岸偏愛赤霞珠、右岸鍾情梅洛的土壤與氣候原因</p>
          </div>

          <div class="point-item">
            <h4>🍷 辨識風格特徵</h4>
            <p>掌握左岸的結構強勁vs右岸的柔順圓潤之風格差異</p>
          </div>

          <div class="point-item">
            <h4>🏰 了解著名產區</h4>
            <p>認識梅多克、格拉夫、聖愛美濃、龐美侯等核心產區的位置與特色</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠清楚區分左岸與右岸的風土差異與酒款風格，並理解這些差異背後的科學原因。這是進階學習各子產區的重要基礎！
        </p>
      </div>
    `
  },

  {
    title: '地理位置與河流劃分',
    component: 'SlideRiversAndBanks',
    duration: '15分鐘',
    level: '初級',
    courseIntro: '深入了解波爾多兩大產區的風土特色和酒款風格',
    highlights: [
      { id: 1, icon: '🌊', title: '河流分界', content: '吉隆河與多爾多涅河劃分左右岸產區' },
      { id: 2, icon: '🗺️', title: '產區分布', content: '左岸梅多克，右岸聖愛美濃與龐美侯' }
    ],
    content: `<div class="geographical-division">
      <p class="lead-text">波爾多的左岸與右岸由三條主要河流自然劃分，形成截然不同的風土條件和釀酒傳統。</p>
      <div class="river-system">
        <div class="river-definition">
          <h4>🌊 河流分界系統</h4>
          <div class="river-details">
            <div class="garonne-river">
              <h5>吉隆河 (Garonne)</h5>
              <ul>
                <li><strong>流向：</strong>從東南向西北流經波爾多市</li>
                <li><strong>左岸定義：</strong>河流左側（西南側）為左岸產區</li>
                <li><strong>主要產區：</strong>梅多克、格拉夫、蘇岱</li>
                <li><strong>特色：</strong>砂礫土壤，排水良好</li>
              </ul>
            </div>
            <div class="dordogne-river">
              <h5>多爾多涅河 (Dordogne)</h5>
              <ul>
                <li><strong>流向：</strong>從東向西流經右岸產區</li>
                <li><strong>右岸定義：</strong>河流右側（北側）為右岸產區</li>
                <li><strong>主要產區：</strong>聖愛美濃、龐美侯、弗朗丘</li>
                <li><strong>特色：</strong>粘土和石灰岩土壤</li>
              </ul>
            </div>
            <div class="gironde-estuary">
              <h5>吉隆河口 (Gironde Estuary)</h5>
              <ul>
                <li><strong>形成：</strong>兩河匯流後形成的河口</li>
                <li><strong>影響：</strong>調節氣候，減少極端天氣</li>
                <li><strong>重要性：</strong>影響兩岸的微氣候條件</li>
                <li><strong>航運：</strong>歷史上重要的貿易通道</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="orientation-concept">
          <h4>🧭 方位概念理解</h4>
          <div class="orientation-explanation">
            <p class="concept-note">
              <strong>重要提醒：</strong>左岸右岸的劃分是站在河口面向內陸的視角，
              左岸實際位於波爾多的西南部，右岸位於東北部。
            </p>
            <div class="orientation-details">
              <h5>地理方位說明</h5>
              <ul>
                <li><strong>左岸方位：</strong>波爾多市西南側，包含梅多克半島</li>
                <li><strong>右岸方位：</strong>波爾多市東北側，延伸至利布爾訥</li>
                <li><strong>視角基準：</strong>從河口向內陸觀察的傳統方位</li>
                <li><strong>實用記憶：</strong>左岸=砂礫=卡本內-蘇維濃，右岸=粘土=梅洛</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '波爾多左岸和右岸的劃分是基於什麼？',
      options: ['行政區域劃分', '河流地理位置', '葡萄品種差異', '酒莊等級制度'],
      correct: 1,
      explanation: '波爾多左岸和右岸的劃分是基於河流地理位置，以吉隆河和多爾多涅河為分界線，從河口面向內陸的視角劃分左右岸。'
    }
  },
  {
    title: '左右岸對比矩陣（品種／土壤／典型AOC／價格／形容詞）',
    highlights: [
      { id: 1, icon: '⚖️', title: '一眼看懂', content: '從五個面向快速對照左右岸差異' },
      { id: 2, icon: '🧠', title: '記憶輔助', content: '左岸＝Cab骨架；右岸＝Mer柔順' }
    ],
    blocks: [
      {
        type: 'compare',
        props: {
          headers: ['面向', '左岸 (Left Bank)', '右岸 (Right Bank)'],
          rows: [
            ['葡萄品種', 'Cabernet Sauvignon 主導，Merlot 補，Cabernet Franc 少量', 'Merlot 主導，Cabernet Franc 輔，Cabernet Sauvignon 少量或無'],
            ['土壤', '礫石/砂礫（排水佳、蓄熱）｜部分砂質與黏土交錯', '黏土/石灰岩（保水、礦物）｜部分砂質黏土'],
            ['典型 AOC', 'Margaux、Pauillac、St‑Julien、St‑Estèphe、Pessac‑Léognan', 'St‑Émilion、Pomerol、Fronsac'],
            ['價格帶（概略）', '跨度大：中價到超高端（含五級酒莊體系）', '中價到高端（頂尖 Pomerol/St‑Émilion 價格不俗）'],
            ['風格形容詞', '力量、結構、骨架、陳年潛力', '柔順、圓潤、優雅、較早適飲']
          ]
        }
      }
    ],
    quiz: {
      question: '以下哪個描述較符合左岸（Left Bank）的典型特徵？',
      options: [
        'Merlot 主導、柔順早飲、黏土石灰岩',
        'Cabernet Sauvignon 主導、礫石蓄熱、結構強勁',
        'Sauvignon Blanc 主導、青草柑橘、清脆酸度',
        '主要 AOC：St‑Émilion、Pomerol、Fronsac'
      ],
      correct: 1,
      explanation: '左岸以 Cabernet Sauvignon 為主，典型礫石/砂礫土壤具排水與蓄熱能力，風格偏力量與結構；右岸才是 Merlot 主導與黏土石灰岩。'
    }
  },
  {
    title: '土壤結構與風土差異',
    highlights: [
      { id: 1, icon: '🪨', title: '左岸砂礫', content: '砂礫土壤排水佳，適合卡本內-蘇維濃' },
      { id: 2, icon: '🏺', title: '右岸粘土', content: '粘土保水性強，適合梅洛生長' }
    ],
    content: `<div class="soil-terroir">
      <p class="lead-text">左岸與右岸的土壤結構根本差異決定了各自適合的葡萄品種和酒款風格，這是波爾多風土多樣性的核心。</p>
      <div class="soil-analysis">
        <div class="left-bank-soils">
          <h4>🪨 左岸土壤特徵</h4>
          <div class="soil-composition">
            <div class="gravel-soils">
              <h5>砂礫土壤 (Gravel)</h5>
              <ul>
                <li><strong>組成：</strong>石英和燧石砂礫，粒徑2-60mm</li>
                <li><strong>深度：</strong>表層砂礫層厚度1-5米</li>
                <li><strong>排水性：</strong>極佳，避免根部積水</li>
                <li><strong>蓄熱性：</strong>白天吸熱，夜間釋放</li>
                <li><strong>透氣性：</strong>良好，促進根系深扎</li>
              </ul>
            </div>
            <div class="subsoil-layers">
              <h5>底土層結構</h5>
              <ul>
                <li><strong>砂質粘土：</strong>提供適量水分保持</li>
                <li><strong>鐵質層：</strong>含鐵氧化物，影響酒色</li>
                <li><strong>石灰岩基：</strong>某些地區有石灰岩基底</li>
                <li><strong>排水系統：</strong>天然排水，無需人工干預</li>
              </ul>
            </div>
            <div class="terroir-effects">
              <h5>對葡萄的影響</h5>
              <ul>
                <li><strong>水分控制：</strong>適度水分緊迫，提高果實濃縮度</li>
                <li><strong>成熟條件：</strong>溫暖的土壤有利於晚熟品種</li>
                <li><strong>根系發展：</strong>促使根系深扎尋找養分</li>
                <li><strong>風味表現：</strong>增強礦物質和複雜度</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-bank-soils">
          <h4>🏺 右岸土壤特徵</h4>
          <div class="soil-composition">
            <div class="clay-soils">
              <h5>粘土土壤 (Clay)</h5>
              <ul>
                <li><strong>組成：</strong>以粘土礦物為主，細粒結構</li>
                <li><strong>持水性：</strong>強，能長期保持土壤濕度</li>
                <li><strong>保溫性：</strong>溫度變化緩慢，較為穩定</li>
                <li><strong>養分豐富：</strong>有機質含量高</li>
                <li><strong>工作性：</strong>濕時粘稠，乾時堅硬</li>
              </ul>
            </div>
            <div class="limestone-influence">
              <h5>石灰岩因素</h5>
              <ul>
                <li><strong>聖愛美濃高原：</strong>石灰岩高原，排水良好</li>
                <li><strong>龐美侯粘土：</strong>深層粘土，保水性極強</li>
                <li><strong>pH值：</strong>偏鹼性，影響養分吸收</li>
                <li><strong>礦物質：</strong>豐富的鈣質和微量元素</li>
              </ul>
            </div>
            <div class="terroir-effects">
              <h5>對葡萄的影響</h5>
              <ul>
                <li><strong>水分供應：</strong>穩定的水分供應，減少乾旱壓力</li>
                <li><strong>早熟條件：</strong>適合早熟品種如梅洛</li>
                <li><strong>質感影響：</strong>造就柔順圓潤的酒質</li>
                <li><strong>香氣發展：</strong>促進果香和花香的表現</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="soil-comparison">
          <h4>⚖️ 土壤對比分析</h4>
          <div class="comparison-table">
            <table class="soil-comparison-table">
              <thead>
                <tr>
                  <th>特性</th>
                  <th>左岸砂礫土</th>
                  <th>右岸粘土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>排水性</strong></td>
                  <td>極佳，快速排水</td>
                  <td>較差，易積水</td>
                </tr>
                <tr>
                  <td><strong>保水性</strong></td>
                  <td>較差，需深根取水</td>
                  <td>優秀，長期保濕</td>
                </tr>
                <tr>
                  <td><strong>溫度調節</strong></td>
                  <td>日間吸熱，夜間釋放</td>
                  <td>溫度變化緩慢</td>
                </tr>
                <tr>
                  <td><strong>適合品種</strong></td>
                  <td>卡本內-蘇維濃</td>
                  <td>梅洛、卡本內-弗朗</td>
                </tr>
                <tr>
                  <td><strong>酒款風格</strong></td>
                  <td>結構強勁，需陳年</td>
                  <td>柔順優雅，早期適飲</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '為什麼左岸的砂礫土壤特別適合卡本內-蘇維濃？',
      options: ['保水性強，適合早熟', '排水佳且蓄熱，適合晚熟', '養分豐富，促進生長', '土壤偏酸，增加酸度'],
      correct: 1,
      explanation: '左岸砂礫土壤排水性佳，避免積水，同時具有良好的蓄熱性，為晚熟的卡本內-蘇維濃提供理想的成熟條件。'
    }
  },
  {
    title: '酒款風格與品種特色',
    highlights: [
      { id: 1, icon: '🏰', title: '左岸風格', content: '結構強勁，陳年潛力佳，需要時間發展' },
      { id: 2, icon: '💎', title: '右岸風格', content: '優雅精緻，早期適飲，質感柔順' }
    ],
    content: `<div class="style-characteristics">
      <p class="lead-text">左岸與右岸的風土差異造就了截然不同的酒款風格，從葡萄品種選擇到最終酒款表現都有明顯差異。</p>
      <div class="wine-styles">
        <div class="left-bank-style">
          <h4>🏰 左岸酒款特色</h4>
          <div class="style-analysis">
            <div class="grape-composition">
              <h5>主要品種組成</h5>
              <ul>
                <li><strong>卡本內-蘇維濃：</strong>60-80%，提供骨架結構</li>
                <li><strong>梅洛：</strong>15-35%，增加柔順度</li>
                <li><strong>卡本內-弗朗：</strong>5-15%，提供優雅感</li>
                <li><strong>小維鐸：</strong>偶爾使用，增加顏色和香料</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>果香：</strong>黑醋栗、黑莓、李子干</li>
                <li><strong>草本：</strong>薄荷、月桂葉、青椒（年輕時）</li>
                <li><strong>橡木：</strong>雪松、煙草、香草</li>
                <li><strong>陳年：</strong>皮革、土壤、礦物質</li>
              </ul>
            </div>
            <div class="structural-elements">
              <h5>結構特點</h5>
              <ul>
                <li><strong>單寧：</strong>高單寧，質地較粗獷</li>
                <li><strong>酸度：</strong>中高酸度，帶來清新感</li>
                <li><strong>酒體：</strong>中重到重體，濃郁度高</li>
                <li><strong>酒精度：</strong>13-14.5%，平衡適中</li>
              </ul>
            </div>
            <div class="aging-potential">
              <h5>陳年潛力</h5>
              <ul>
                <li><strong>適飲期：</strong>5-30年，視等級而定</li>
                <li><strong>發展階段：</strong>年輕時較封閉，需要醒酒</li>
                <li><strong>成熟表現：</strong>複雜度高，層次豐富</li>
                <li><strong>巔峰期：</strong>10-20年間達到最佳狀態</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-bank-style">
          <h4>💎 右岸酒款特色</h4>
          <div class="style-analysis">
            <div class="grape-composition">
              <h5>主要品種組成</h5>
              <ul>
                <li><strong>梅洛：</strong>60-90%，主導柔順風格</li>
                <li><strong>卡本內-弗朗：</strong>10-30%，增加優雅度</li>
                <li><strong>卡本內-蘇維濃：</strong>少量或無，提供結構</li>
                <li><strong>品種純度：</strong>有些酒款達95%以上單一品種</li>
              </ul>
            </div>
            <div class="flavor-profile">
              <h5>風味特徵</h5>
              <ul>
                <li><strong>果香：</strong>紅色漿果、櫻桃、李子</li>
                <li><strong>花香：</strong>紫羅蘭、玫瑰花瓣</li>
                <li><strong>香料：</strong>甘草、丁香、肉桂</li>
                <li><strong>陳年：</strong>松露、濕土、咖啡</li>
              </ul>
            </div>
            <div class="structural-elements">
              <h5>結構特點</h5>
              <ul>
                <li><strong>單寧：</strong>中等單寧，質地絲滑</li>
                <li><strong>酸度：</strong>中等酸度，平衡良好</li>
                <li><strong>酒體：</strong>中等到中重體，優雅均衡</li>
                <li><strong>酒精度：</strong>13-14%，溫和適中</li>
              </ul>
            </div>
            <div class="aging-potential">
              <h5>陳年潛力</h5>
              <ul>
                <li><strong>適飲期：</strong>3-25年，早期適飲性佳</li>
                <li><strong>發展階段：</strong>年輕時已經迷人</li>
                <li><strong>成熟表現：</strong>精緻複雜，質感絲滑</li>
                <li><strong>巔峰期：</strong>8-15年間展現最佳風采</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="style-comparison">
          <h4>🥂 風格對比總結</h4>
          <div class="comparison-summary">
            <div class="comparison-aspects">
              <div class="power-vs-elegance">
                <h5>力量 vs 優雅</h5>
                <p><strong>左岸：</strong>力量型，結構主導，需要時間柔化</p>
                <p><strong>右岸：</strong>優雅型，平衡主導，天然和諧</p>
              </div>
              <div class="youth-vs-maturity">
                <h5>年輕 vs 成熟</h5>
                <p><strong>左岸：</strong>年輕時較封閉，成熟後複雜度極高</p>
                <p><strong>右岸：</strong>年輕時已迷人，成熟後更加精緻</p>
              </div>
              <div class="food-pairing">
                <h5>餐酒搭配傾向</h5>
                <p><strong>左岸：</strong>適合重口味肉類，烤牛排、羊排</p>
                <p><strong>右岸：</strong>適合精緻料理，鴨肉、野味、乳酪</p>
              </div>
              <div class="collector-appeal">
                <h5>收藏價值</h5>
                <p><strong>左岸：</strong>長期陳年潛力，投資收藏首選</p>
                <p><strong>右岸：</strong>即時享受價值，品鑑收藏兼顧</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '右岸酒款相比左岸酒款的主要特點是什麼？',
      options: ['單寧更高，需要更長陳年', '以梅洛為主，早期適飲性更佳', '酒精度更高，風格更強勁', '酸度更高，更適合陳年'],
      correct: 1,
      explanation: '右岸酒款以梅洛為主導品種（60-90%），單寧相對柔順，年輕時已經展現迷人風采，具有更好的早期適飲性。'
    }
  },

  // 結束頁
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-4 左岸核心產區詳解 - Médoc與Graves',
    description: '恭喜您完成波爾多左岸核心產區的深度學習！您已全面掌握Médoc與Graves兩大左岸產區的風土特色、產區劃分、酒款風格。從Médoc的砂礫土壤與Cabernet Sauvignon主導，到Graves的多樣風土與紅白雙全，您現在理解了左岸葡萄酒的精髓——強勁骨架、陳年潛力、優雅複雜度。',
    skills: [
      '深入理解Médoc產區的砂礫風土與分級體系',
      '認識Médoc四大村莊（Margaux、Pauillac、Saint-Julien、Saint-Estèphe）',
      '掌握Graves產區的紅白雙全特色',
      '了解1855分級制度與Cru Bourgeois',
      '理解左岸Cabernet Sauvignon主導的風格特徵'
    ],
    nextSteps: [
      {
        action: '品鑑實踐',
        items: [
          '品鑑一款Médoc村莊級酒款，感受砂礫風土',
          '品鑑一款Graves紅酒或白酒',
          '對比Médoc與Graves的風格差異',
          '尋找黑醋栗、雪松、石墨等經典左岸香氣'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L1-5：右岸核心產區詳解',
          '探索Pomerol與Saint-Émilion的Merlot世界',
          '對比左岸與右岸的風格差異'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    reflection: {
      title: '課程反思',
      questions: [
        '為什麼Médoc的砂礫土壤如此適合Cabernet Sauvignon？',
        'Médoc四大村莊各自的特色是什麼？',
        'Graves與Médoc的根本差異在哪裡？',
        '1855分級制度的歷史意義是什麼？'
      ]
    },
    keyInsight: '左岸的核心是Cabernet Sauvignon與砂礫土壤的完美結合。Médoc的深層砂礫提供優秀排水，造就Cabernet的強勁骨架與陳年潛力；Graves的多樣風土則展現更豐富的風格。理解左岸，就是理解如何通過風土與品種的匹配，創造出世界上最具陳年潛力、最優雅複雜的紅葡萄酒。',
    shareMessage: '我剛完成了波爾多葡萄酒Level 1的「左岸核心產區詳解」課程！現在我能分辨Médoc與Graves的風格了！🏆🍷 #波爾多 #左岸 #Médoc #葡萄酒學習'
  }
]

export default lessonContent
