// L2-10: 蘇玳與巴薩克 - 貴腐甜酒的傳奇
import mapboxgl from 'mapbox-gl'

export const l210Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          蘇玳（Sauternes）——波爾多最神秘的魔法，世界甜酒的黃金標準。在這片沼澤霧氣彌漫的南部低地，每年秋晨的薄霧與午後的金陽，催生出一種名為「貴腐」（Noble Rot）的真菌奇蹟，將平凡的葡萄轉化為金黃色的液態甘露。Château d'Yquem，這個唯一的「一級特優酒莊」，更是被世人譽為葡萄酒世界中最偉大的甜酒。
        </p>

        <p class="intro-context">
          本課程將深入蘇玳的核心秘密。我們將探索西隆河與加倫河交匯創造的獨特微氣候，學習貴腐菌（Botrytis cinerea）如何穿透葡萄皮、蒸發水分並濃縮糖分與酸度；深入理解「逐粒篩選」（tries sélectionnées）採收工藝的艱辛；了解1855年蘇玳分級體系與d'Yquem的至高地位；最終學習如何品鑑這杯「凝固的陽光」，以及蘇玳與世界三大貴腐甜酒的比較視角。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🌫️ 理解貴腐微氣候奇蹟</h4>
            <p>掌握西隆河霧氣與加倫河暖流如何共同創造蘇玳的獨特氣候條件</p>
          </div>

          <div class="point-item">
            <h4>🍄 深入貴腐菌作用機制</h4>
            <p>學習 Botrytis cinerea 如何穿透葡萄皮、蒸散水分、濃縮風味的科學原理</p>
          </div>

          <div class="point-item">
            <h4>🍇 認識三大品種組合</h4>
            <p>理解賽美容、白蘇維濃、蜜思卡黛三品種在貴腐甜酒中各自的角色</p>
          </div>

          <div class="point-item">
            <h4>🏰 掌握1855年分級制度</h4>
            <p>了解蘇玳獨立的分級體系，以及 Château d'Yquem 一級特優的歷史地位</p>
          </div>

          <div class="point-item">
            <h4>🌍 建立全球貴腐視野</h4>
            <p>比較法國蘇玳、德國逐粒枯萄精選、匈牙利托卡伊三大貴腐產區的異同</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將能夠理解蘇玳「自然之賜、人工之極」的獨特價值哲學，並以專業角度品鑑這瓶「金色奇蹟」。
        </p>
      </div>
    `
  },

  // ========== 第一章：地理與微氣候 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '地理與微氣候',
    subtitle: '霧與陽光的完美協奏',
    icon: '🌫️',
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
  },

  // ========== 1. 產區地理 =========
  {
    title: '蘇玳：波爾多南部的黃金地帶',
    duration: '20分鐘',
    level: '中級',
    courseIntro: '蘇玳位於波爾多南方約40公里，加倫河左岸的沼澤平原，是世界上最著名的甜白酒產區。',
    highlights: [
      { id: 1, icon: '🗺️', title: '波爾多南部', content: '位於加倫河左岸，距市區約40公里' },
      { id: 2, icon: '🌊', title: '雙河交匯', content: '西隆河注入加倫河，創造獨特微氣候' }
    ],
    content: `<div class="sauternes-geography">
      <p class="lead-text">蘇玳（Sauternes）與巴薩克（Barsac）位於波爾多以南約40公里，緊鄰加倫河左岸。這片總面積約2,200公頃的甜酒聖地，由五個村莊組成：Sauternes、Barsac、Fargues、Bommes、Preignac。</p>
      <div class="geography-grid">
        <div class="geo-card">
          <h4>🗺️ 地理位置</h4>
          <ul>
            <li><strong>行政區域：</strong>吉倫特省南部，格拉夫（Graves）南端</li>
            <li><strong>總面積：</strong>Sauternes AOC 約1,900公頃，Barsac AOC 約550公頃</li>
            <li><strong>海拔：</strong>低平地形，介於海拔10–40公尺之間</li>
            <li><strong>方位：</strong>葡萄園朝向東南，最大化秋季日照</li>
          </ul>
        </div>
        <div class="geo-card">
          <h4>🌊 關鍵地理要素</h4>
          <ul>
            <li><strong>加倫河（Garonne）：</strong>西側大型河流，提供暖流與濕潤</li>
            <li><strong>西隆河（Ciron）：</strong>來自朗德森林的冷水支流，為貴腐菌製造霧氣</li>
            <li><strong>沙礫與黏土：</strong>混合土壤提供良好排水性</li>
            <li><strong>森林屏障：</strong>南部朗德松林遮擋寒風</li>
          </ul>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'Sauternais',
    geojsonPaths: [
      '/geojson/Sauternais/Sauternes_AOC.geojson',
      '/geojson/Sauternais/Barsac_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 300)
        else map.once('idle', () => setTimeout(resolve, 300))
      })
      map.flyTo({ center: [-0.3300, 44.5700], zoom: 11, pitch: 0, bearing: 0, duration: 2000 })
    },
    quiz: {
      question: '哪條支流的冷水注入加倫河，為蘇玳產區創造出晨霧？',
      options: ['多爾多涅河', '加爾訥河', '西隆河', '薩夫河'],
      correct: 2,
      explanation: '西隆河（Ciron）是一條發源自朗德（Landes）森林的冷水支流，當其冷水遇到加倫河（Garonne）溫暖的河水時，就會在秋季清晨產生濃霧，為貴腐菌的生長提供了理想的濕度條件。'
    }
  },

  // ========== 2. 微氣候奇蹟 =========
  {
    title: '微氣候奇蹟：晨霧與午後金陽',
    highlights: [
      { id: 1, icon: '🌅', title: '清晨薄霧', content: '西隆河冷水形成霧氣，濕潤貴腐菌生長所需環境' },
      { id: 2, icon: '☀️', title: '午後晴朗', content: '金秋陽光蒸發水分，讓貴腐菌作用加速濃縮' }
    ],
    content: `<div class="microclimate-magic">
      <p class="lead-text">蘇玳的微氣候是世界上最精妙的自然「釀酒工具」。每年秋季（九至十一月），一個魔法般的日夜循環在此上演。</p>
      <div class="climate-cycle">
        <div class="cycle-step morning">
          <h4>🌙 清晨（6:00–10:00）</h4>
          <p>西隆河的冷水與加倫河的暖流交匯，產生濃密霧氣，籠罩整個葡萄園。相對濕度高達90%以上，為貴腐菌（Botrytis cinerea）的孢子萌發提供完美條件。</p>
        </div>
        <div class="cycle-arrow">↓</div>
        <div class="cycle-step afternoon">
          <h4>☀️ 午後（12:00–17:00）</h4>
          <p>秋季陽光逐漸穿透霧氣，氣溫升至20–25°C，霧氣消散。暖乾的午後環境讓貴腐菌活動加速，同時防止「灰腐」（grey rot）等有害黴菌滋生，確保貴腐進行有「貴氣」的方向。</p>
        </div>
        <div class="cycle-arrow">↓</div>
        <div class="cycle-step result">
          <h4>🍇 結果：完美的貴腐進程</h4>
          <p>這種「濕潤–乾燥」的日夜循環可能持續數週，逐步讓葡萄脫水、濃縮，同時保持酸度平衡，是只有蘇玳才能年年穩定複製的氣候奇蹟。</p>
        </div>
      </div>
      <div class="risk-note">
        <h5>⚠️ 脆弱的平衡</h5>
        <p>貴腐的發生需要精確的溫濕度節奏。若秋雨過多或氣溫驟降，則可能轉為「灰腐」（破壞性黴菌），使整批葡萄腐爛。這就是為何蘇玳年份差異極大——有時需要全部放棄採收（如1974、1992年）。</p>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '蘇玳微氣候中，「清晨霧氣＋午後晴朗」的循環主要有什麼作用？',
      options: [
        '早上降溫保存酸度，下午升溫促進成熟',
        '清晨霧氣滋養貴腐菌，午後陽光蒸發水分並防止灰腐',
        '霧氣降低酒精度，陽光提升糖分',
        '早晚溫差大，賦予礦物感'
      ],
      correct: 1,
      explanation: '蘇玳微氣候的精髓在於：清晨西隆河霧氣提供高濕度，讓貴腐菌孢子萌發並穿透葡萄皮；午後晴朗的陽光蒸發水分使葡萄快速脫水濃縮，同時高溫抑制破壞性灰腐菌，形成「善腐而不惡腐」的完美條件。'
    }
  },

  // ========== 第二章：貴腐菌 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '貴腐菌的神奇作用',
    subtitle: 'Botrytis cinerea — 腐爛中的昇華',
    icon: '🍄',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  // ========== 3. 貴腐菌科學 =========
  {
    title: '貴腐菌（Botrytis cinerea）：點石成金的真菌',
    highlights: [
      { id: 1, icon: '🔬', title: '穿透葡萄皮', content: '菌絲穿透果皮，形成無數微小孔隙' },
      { id: 2, icon: '💧', title: '蒸散作用', content: '水分透過孔隙蒸發，糖分、酸度與甘油大幅濃縮' }
    ],
    content: `<div class="botrytis-science">
      <p class="lead-text">Botrytis cinerea，在一般葡萄酒產區是令人聞之色變的「灰腐」病菌，但在蘇玳的特殊微氣候下，它卻搖身一變成為「貴腐菌」（Noble Rot），執行一場精密的化學轉化。</p>
      <div class="botrytis-process">
        <h4>📋 貴腐作用的4個關鍵步驟</h4>
        <div class="process-steps">
          <div class="step">
            <span class="step-num">1</span>
            <div class="step-content">
              <h5>孢子附著</h5>
              <p>清晨霧氣中，Botrytis孢子附著在成熟的賽美容葡萄皮上，開始萌發菌絲。</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num">2</span>
            <div class="step-content">
              <h5>穿透果皮</h5>
              <p>菌絲穿透薄薄的葡萄皮，在表面形成無數細小孔隙，但不破壞果肉細胞。</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num">3</span>
            <div class="step-content">
              <h5>脫水濃縮</h5>
              <p>午後陽光使水分快速蒸散。一顆正常葡萄可能失去原本重量的50–70%，剩餘的糖分、酸度、甘油、風味物質被高度濃縮。</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num">4</span>
            <div class="step-content">
              <h5>風味轉化</h5>
              <p>貴腐菌消耗部分酸度並產生特有的化合物（如botrycinol、貴腐酮），賦予蘇玳獨特的蜂蜜、藏紅花、杏乾、薑汁等香氣，這是其他甜酒工藝無法複製的關鍵。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="concentration-table">
        <h5>📊 貴腐前後的成分變化</h5>
        <div class="comparison-row"><span class="label">殘糖</span><span class="before">20–25 g/L（成熟葡萄）</span><span class="after">300–500 g/L（貴腐後）</span></div>
        <div class="comparison-row"><span class="label">甘油</span><span class="before">微量</span><span class="after">大量增加（賦予油潤口感）</span></div>
        <div class="comparison-row"><span class="label">水分</span><span class="before">70–75%</span><span class="after">30–40%（大幅脫水）</span></div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '貴腐菌對葡萄最關鍵的物理作用是什麼？',
      options: [
        '加速葡萄糖轉化為酒精',
        '穿透果皮造成孔隙，讓水分蒸散、糖酸濃縮',
        '讓葡萄皮產生更多色素',
        '提升葡萄的單寧含量'
      ],
      correct: 1,
      explanation: '貴腐菌（Botrytis cinerea）最核心的作用是：菌絲穿透葡萄果皮後，在果皮上形成無數微小孔隙，水分因此大量蒸散。這個過程讓葡萄的糖分、酸度、甘油和獨特風味物質高度濃縮，奠定了蘇玳甜酒的複雜度與陳年潛力的基礎。'
    }
  },

  // ========== 第三章：葡萄品種 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '三大葡萄品種',
    subtitle: '賽美容、白蘇維濃、蜜思卡黛的黃金組合',
    icon: '🍇',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  // ========== 4. 三大品種 =========
  {
    title: '三種白葡萄的完美分工',
    highlights: [
      { id: 1, icon: '👑', title: '賽美容（Sémillon）', content: '主角，薄皮最易感染貴腐，貢獻酒體與油潤感' },
      { id: 2, icon: '🍋', title: '白蘇維濃（Sauvignon Blanc）', content: '配角，補充清爽酸度，平衡甜度' }
    ],
    content: `<div class="grape-varieties">
      <p class="lead-text">蘇玳甜酒是三種白葡萄品種的精心組合，各司其職，共同構成酒款的複雜結構。</p>
      <div class="variety-cards">
        <div class="variety-card semillon">
          <h4>🍇 賽美容（Sémillon）— 靈魂品種</h4>
          <div class="variety-details">
            <div class="detail-row"><span class="label">比例</span><span class="value">70–80%（主要品種）</span></div>
            <div class="detail-row"><span class="label">為何適合</span><span class="value">果皮薄，最易被貴腐菌穿透感染</span></div>
            <div class="detail-row"><span class="label">風味貢獻</span><span class="value">濃郁的蜂蜜、杏桃、桃子風味；陳年後產生蜂蠟、堅果、藏紅花</span></div>
            <div class="detail-row"><span class="label">口感貢獻</span><span class="value">豐滿酒體、油潤質感，高甘油帶來絲滑感</span></div>
          </div>
        </div>
        <div class="variety-card sauvignon">
          <h4>🍋 白蘇維濃（Sauvignon Blanc）— 酸度守護者</h4>
          <div class="variety-details">
            <div class="detail-row"><span class="label">比例</span><span class="value">20–25%（重要配角）</span></div>
            <div class="detail-row"><span class="label">果皮特性</span><span class="value">果皮較厚，貴腐菌較難侵入，感染率低</span></div>
            <div class="detail-row"><span class="label">風味貢獻</span><span class="value">柑橘、萊姆皮、青蘋果的清新香氣</span></div>
            <div class="detail-row"><span class="label">口感貢獻</span><span class="value">補充天然高酸，平衡糖分，維持清爽尾韻與陳年潛力</span></div>
          </div>
        </div>
        <div class="variety-card muscadelle">
          <h4>🌸 蜜思卡黛（Muscadelle）— 香氣點綴</h4>
          <div class="variety-details">
            <div class="detail-row"><span class="label">比例</span><span class="value">5%以下（少量添加）</span></div>
            <div class="detail-row"><span class="label">特性</span><span class="value">芳香型品種，含天然麝香（muscat）氣息</span></div>
            <div class="detail-row"><span class="label">風味貢獻</span><span class="value">賦予花香、麝香、茉莉等迷人芬芳，增加香氣複雜度</span></div>
            <div class="detail-row"><span class="label">注意</span><span class="value">比例過高反而失去平衡，各家酒莊使用量極為謹慎</span></div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '蘇玳甜酒中，賽美容（Sémillon）為何是最重要的品種？',
      options: [
        '因為它產量最大、價格最低',
        '因為果皮薄，最容易被貴腐菌穿透感染',
        '因為它含有最多天然糖分',
        '因為它的酸度最高，可平衡甜度'
      ],
      correct: 1,
      explanation: '賽美容（Sémillon）之所以是蘇玳最主要的品種（佔70–80%），正是因為其果皮特別薄。薄薄的果皮讓貴腐菌（Botrytis cinerea）能夠輕易穿透，充分完成脫水濃縮的過程，同時賽美容本身也能發展出蜂蜜、蜂蠟、杏桃等適合貴腐甜酒的複雜風味。'
    }
  },

  // ========== 第四章：採收工藝 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '逐粒篩選採收',
    subtitle: 'Tries Sélectionnées — 葡萄酒界最昂貴的人工',
    icon: '✋',
    background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
  },

  // ========== 5. 採收工藝 =========
  {
    title: '逐粒篩選（Tries Sélectionnées）：人工中的極致',
    highlights: [
      { id: 1, icon: '👋', title: '多次入園', content: '採收者需反覆進出葡萄園5至11次' },
      { id: 2, icon: '🍇', title: '逐串甚至逐粒', content: '只摘選達到完美貴腐程度的果粒' }
    ],
    content: `<div class="harvest-art">
      <p class="lead-text">蘇玳的採收是葡萄酒界最艱辛、最昂貴的人工作業。由於貴腐菌感染並非同步進行，同一串葡萄上可能同時存在完美貴腐、半感染、未感染甚至灰腐的果粒，因此必須仰賴人工的逐次挑選。</p>
      <div class="harvest-steps">
        <h4>🔄 採收流程</h4>
        <div class="tries-process">
          <div class="try-item">
            <div class="try-number">第1次</div>
            <div class="try-desc">9月下旬至10月初，摘取第一批達到理想貴腐程度的果粒或整串</div>
          </div>
          <div class="try-item">
            <div class="try-number">第2–3次</div>
            <div class="try-desc">間隔數日至一週後再次入園，挑選後續達到貴腐標準的果粒</div>
          </div>
          <div class="try-item">
            <div class="try-number">第4–11次</div>
            <div class="try-desc">如此反覆，頂級酒莊（如d'Yquem）可能進行多達11次，直至11月霜降</div>
          </div>
        </div>
      </div>
      <div class="cost-reality">
        <h4>💰 成本的真相</h4>
        <div class="cost-facts">
          <div class="cost-item">
            <span class="cost-icon">🧑‍🌾</span>
            <div>
              <strong>人工密度極高</strong>
              <p>每公頃葡萄園在整個採收季可能需要100人工日以上，是一般葡萄酒的10倍以上。</p>
            </div>
          </div>
          <div class="cost-item">
            <span class="cost-icon">📉</span>
            <div>
              <strong>產量極低</strong>
              <p>法定最高產量僅25 hl/ha（一般紅酒產區是50–60 hl/ha）。Château d'Yquem平均每株葡萄藤只能生產一杯酒（約100ml）。</p>
            </div>
          </div>
          <div class="cost-item">
            <span class="cost-icon">🌧️</span>
            <div>
              <strong>年份風險</strong>
              <p>不理想的年份（如雨水過多）可能導致部分批次全部廢棄，甚至整年不生產頂級酒款（d'Yquem在1910、1952、1964、1972、1974、1992、2012年等年份未出品）。</p>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '蘇玳採收為何需要多次反覆進入葡萄園（tries sélectionnées）？',
      options: [
        '因為葡萄園面積太大，一次摘不完',
        '因為貴腐菌感染不同步，每粒葡萄達到最佳狀態的時間不同',
        '為了讓葡萄充分接受陽光照射',
        '因為工人體力有限，必須分批作業'
      ],
      correct: 1,
      explanation: '蘇玳必須多次採收（tries）的根本原因，在於貴腐菌並非均勻感染整片葡萄園或同一串葡萄。即使同一串中，也可能一半已完美貴腐、另一半尚未感染，因此必須反覆入園，只摘取當下達到理想貴腐程度的果粒。這種「逐粒篩選」工藝是蘇玳成本高昂的核心原因。'
    }
  },

  // ========== 第五章：1855年分級制度 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '1855年分級制度',
    subtitle: 'Château d\'Yquem 與頂級酒莊群像',
    icon: '🏆',
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'
  },

  // ========== 6. 分級制度 =========
  {
    title: '1855年蘇玳分級：唯一的「特優一級」',
    highlights: [
      { id: 1, icon: '👑', title: 'Premier Cru Supérieur', content: 'Château d\'Yquem — 全世界唯一獨占此等級的甜酒' },
      { id: 2, icon: '⭐', title: '1er & 2ème Cru', content: '11個一級莊、15個二級莊，形成完整分級階層' }
    ],
    content: `<div class="sauternes-classification">
      <p class="lead-text">1855年，拿破崙三世在巴黎世博會上同時確立了梅多克與蘇玳的分級制度。蘇玳分級獨立成冊，最頂端設有一個前所未有的特殊等級，專門為 Château d'Yquem 而設。</p>
      <div class="classification-pyramid">
        <div class="level premier-superieur">
          <h5>👑 Premier Cru Supérieur（一級特優）</h5>
          <p><strong>Château d'Yquem</strong> — 全世界唯一佔有此等級的甜酒，無可取代的標竿。</p>
        </div>
        <div class="level premier-cru">
          <h5>⭐ Premiers Crus（一級莊，共11個）</h5>
          <p>Château La Tour Blanche、Château Lafaurie-Peyraguey、Château Clos Haut-Peyraguey、Château de Rayne Vigneau、Château Suduiraut、Château Coutet（Barsac）、Château Climens（Barsac）、Château Guiraud、Château Rieussec、Château Rabaud-Promis、Château Sigalas-Rabaud</p>
        </div>
        <div class="level deuxieme-cru">
          <h5>⭐⭐ Deuxièmes Crus（二級莊，共15個）</h5>
          <p>Château de Myrat、Château Doisy-Daëne、Château Doisy-Dubroca、Château Doisy-Védrines、Château d'Arche、Château Filhot、Château Broustet、Château Nairac、Château Caillou、Château Suau、Château de Malle、Château Romer、Château Romer du Hayot、Château Lamothe、Château Lamothe Guignard</p>
        </div>
      </div>
      <div class="classification-note">
        <p>💡 <strong>蘇玳 vs 梅多克分級的差異：</strong>蘇玳分級從未有任何調整（梅多克1973年升了Mouton Rothschild），各酒莊等級至今維持170年不變，穩定性極高。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'Sauternais',
    geojsonPaths: [
      '/geojson/Sauternais/Sauternes_AOC.geojson',
      '/geojson/Sauternais/Barsac_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })
      map.flyTo({ center: [-0.3350, 44.5700], zoom: 11.5, pitch: 0, bearing: 0, duration: 1200 })
    },
    quiz: {
      question: '在1855年蘇玳分級制度中，哪個等級是特別為 Château d\'Yquem 設立的？',
      options: ['Grand Premier Cru', 'Premier Grand Cru Classé A', 'Premier Cru Supérieur', 'Cru Exceptionnel'],
      correct: 2,
      explanation: '1855年分級為蘇玳設立了「Premier Cru Supérieur（一級特優）」這個在標準一級莊之上的特殊等級，全世界只有 Château d\'Yquem 一家佔有此殊榮，這在全球葡萄酒分級史上是獨一無二的設計。'
    }
  },

  // ========== 7. Château d'Yquem =========
  {
    title: "Château d'Yquem：世界甜酒的至高標竿",
    highlights: [
      { id: 1, icon: '👑', title: '唯一一級特優', content: '1855年起至今170年，地位從未動搖' },
      { id: 2, icon: '🌟', title: '最嚴格品管', content: '不良年份直接不出品，品質至上' }
    ],
    content: `<div class="dyquem-profile">
      <div class="chateau-header">
        <img src="/images/chateaux/Sauternais/dyquem.jpg" alt="Château d'Yquem" style="max-width:100%;max-height:220px;object-fit:contain;border-radius:8px;margin-bottom:16px;" onerror="this.style.display='none'" />
      </div>
      <p class="lead-text">Château d'Yquem 不僅是蘇玳最高等級的酒莊，更被世界公認為甜白酒的絕對頂點。它的歷史可以追溯至1593年，並在1999年被路易威登集團（LVMH）收購，進一步鞏固了其精品地位。</p>
      <div class="dyquem-facts">
        <div class="fact-card">
          <h5>🏰 基本資料</h5>
          <ul>
            <li><strong>面積：</strong>113公頃（葡萄園約100公頃）</li>
            <li><strong>品種：</strong>賽美容80%、白蘇維濃20%</li>
            <li><strong>產量：</strong>每年約8萬–10萬瓶（品質差的年份大幅減少或全部放棄）</li>
            <li><strong>橡木桶：</strong>100%全新法國橡木桶陳年18個月以上</li>
          </ul>
        </div>
        <div class="fact-card">
          <h5>🎯 釀造哲學</h5>
          <ul>
            <li><strong>採收次數：</strong>多達7–11次，可能持續整個秋天</li>
            <li><strong>品質門檻：</strong>每年嚴格評估，不達標則降級或全數放棄</li>
            <li><strong>不出品年份：</strong>1910、1952、1964、1972、1974、1992等，寧缺毋濫</li>
            <li><strong>一藤一杯：</strong>每株葡萄藤僅生產約一杯（100ml）的酒</li>
          </ul>
        </div>
        <div class="fact-card">
          <h5>🍯 風味特徵</h5>
          <ul>
            <li><strong>年輕時：</strong>豐盛的蜂蜜、杏桃、鳳梨、芒果、香草</li>
            <li><strong>10–20年：</strong>藏紅花、肉桂、杏仁、橙皮蜜餞</li>
            <li><strong>30年以上：</strong>蜂蠟、松露、堅果、太妃糖、液態金的濃郁深邃</li>
            <li><strong>陳年潛力：</strong>頂級年份可陳年50–100年以上</li>
          </ul>
        </div>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'Sauternais-dyquem',
    geojsonPaths: ['/geojson/Sauternais/Sauternes_AOC.geojson'],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      const dyquemPos = [-0.3068, 44.5727]
      map.flyTo({ center: dyquemPos, zoom: 14, duration: 1500 })

      const el = document.createElement('div')
      el.innerHTML = '👑'
      el.style.cssText = `font-size:36px;cursor:pointer;filter:drop-shadow(0 3px 6px rgba(0,0,0,0.3));`

      const popupContent = document.createElement('div')
      popupContent.innerHTML = `
        <img src="/images/chateaux/Sauternais/dyquem.jpg" alt="Château d'Yquem"
          style="width:100%;max-height:180px;object-fit:contain;display:block;background:#fefcf0;"
          onerror="this.style.display='none'" />
        <div style="padding:12px;">
          <div style="display:flex;gap:8px;align-items:center">
            <span style="font-size:28px">👑</span>
            <div>
              <h3 style="margin:0;color:#8B6914;font-size:16px">Château d'Yquem</h3>
              <p style="margin:4px 0 0 0;font-size:12px;color:#888">Premier Cru Supérieur · 世界甜酒之王</p>
            </div>
          </div>
          <div style="margin-top:8px;font-size:13px;">
            <p style="margin:4px 0"><strong>面積：</strong>113 公頃</p>
            <p style="margin:4px 0"><strong>品種：</strong>賽美容 80% · 白蘇維濃 20%</p>
            <p style="margin:4px 0"><strong>特色：</strong>全球唯一一級特優甜酒</p>
          </div>
        </div>
      `

      const popup = new mapboxgl.Popup({ offset: 30, maxWidth: '320px' }).setDOMContent(popupContent)
      const marker = new mapboxgl.Marker(el).setLngLat(dyquemPos).setPopup(popup).addTo(map)
      return () => { marker.remove(); popup.remove() }
    },
    quiz: {
      question: "Château d'Yquem 採取哪種措施確保每年的品質不因年份差異而打折？",
      options: [
        '大量採購其他產區的葡萄進行調配',
        '不良年份直接不出品頂級酒款，寧缺毋濫',
        '改用現代技術人工控制糖分',
        '降低採收標準，增加產量以彌補損失'
      ],
      correct: 1,
      explanation: "Château d'Yquem 的品質哲學是「寧缺毋濫」。在達不到其嚴格品質標準的年份（如1910、1952、1992等），酒莊會選擇直接不出品旗艦酒款，或將葡萄降級使用，這種對品質近乎偏執的堅守，是其170年來維持「一級特優」地位的核心原因。"
    }
  },

  // ========== 8. 其他頂級酒莊 =========
  {
    title: '一級莊群像：蘇玳與巴薩克的明星',
    highlights: [
      { id: 1, icon: '🌟', title: 'Rieussec & Suduiraut', content: '公認最接近d\'Yquem水準的一級莊' },
      { id: 2, icon: '🏅', title: 'Climens & Coutet', content: '巴薩克AOC的雙星，風格較輕盈精緻' }
    ],
    content: `<div class="premier-cru-estates">
      <p class="lead-text">除了 d'Yquem，蘇玳與巴薩克還有一批品質卓越的一級莊，各具特色，提供了不同價位與風格的選擇。</p>
      <div class="estate-grid">
        <div class="estate-card">
          <img src="/images/chateaux/Sauternais/rieussec.jpg" alt="Château Rieussec" style="width:100%;height:120px;object-fit:contain;background:#fefcf0;" onerror="this.style.display='none'" />
          <h5>Château Rieussec</h5>
          <p>鄰近d'Yquem，風格濃郁豐厚，以深邃的橙皮、蜂蠟和杏乾風味著稱。由拉菲羅斯柴爾德集團擁有。</p>
        </div>
        <div class="estate-card">
          <img src="/images/chateaux/Sauternais/suduiraut.jpg" alt="Château Suduiraut" style="width:100%;height:120px;object-fit:contain;background:#fefcf0;" onerror="this.style.display='none'" />
          <h5>Château Suduiraut</h5>
          <p>以奢華的熱帶水果（芒果、鳳梨）和精緻花香著稱，酒體飽滿，常被視為d'Yquem最強勁的挑戰者。</p>
        </div>
        <div class="estate-card">
          <img src="/images/chateaux/Sauternais/climens.jpg" alt="Château Climens" style="width:100%;height:120px;object-fit:contain;background:#fefcf0;" onerror="this.style.display='none'" />
          <h5>Château Climens（Barsac）</h5>
          <p>巴薩克最頂尖的酒莊，幾乎100%賽美容，風格相對輕盈、精緻，以優雅的檸檬蜂蜜和礦物感聞名。</p>
        </div>
        <div class="estate-card">
          <img src="/images/chateaux/Sauternais/coutet.jpg" alt="Château Coutet" style="width:100%;height:120px;object-fit:contain;background:#fefcf0;" onerror="this.style.display='none'" />
          <h5>Château Coutet（Barsac）</h5>
          <p>巴薩克面積最大的一級莊，風格清新細緻，酸度較佳，並在頂級年份推出超稀少的特選款「Cuvée Madame」。</p>
        </div>
      </div>
      <div class="guiraud-note">
        <h5>🌱 Château Guiraud — 有機先鋒</h5>
        <p>Sauternes AOC 內第一個獲得有機認證（AB）的一級莊，證明生物動力法與頂級貴腐甜酒完全相容，備受現代消費者矚目。</p>
      </div>
    </div>`,
    hasMap: true,
    mapFocus: 'Sauternais-estates',
    geojsonPaths: [
      '/geojson/Sauternais/Sauternes_AOC.geojson',
      '/geojson/Sauternais/Barsac_AOC.geojson'
    ],
    showBordeaux: false,
    onMapReady: async (map) => {
      await new Promise(resolve => {
        if (map.loaded() && !map.isMoving()) setTimeout(resolve, 200)
        else map.once('idle', () => setTimeout(resolve, 200))
      })

      const estates = [
        { pos: [-0.2908, 44.5644], emoji: '🌟', name: 'Château Rieussec', desc: '一級莊，鄰近d\'Yquem', img: '/images/chateaux/Sauternais/rieussec.jpg' },
        { pos: [-0.3457, 44.6036], emoji: '✨', name: 'Château Suduiraut', desc: '一級莊，熱帶水果風格', img: '/images/chateaux/Sauternais/suduiraut.jpg' },
        { pos: [-0.3568, 44.5569], emoji: '💙', name: 'Château Climens', desc: '巴薩克一級莊', img: '/images/chateaux/Sauternais/climens.jpg' },
        { pos: [-0.3386, 44.5534], emoji: '🏅', name: 'Château Coutet', desc: '巴薩克一級莊', img: '/images/chateaux/Sauternais/coutet.jpg' }
      ]

      const bounds = new mapboxgl.LngLatBounds()
      estates.forEach(e => bounds.extend(e.pos))
      map.fitBounds(bounds, { padding: 80, maxZoom: 13, duration: 1200 })

      const markers = []
      estates.forEach(({ pos, emoji, name, desc, img }) => {
        const el = document.createElement('div')
        el.innerHTML = emoji
        el.style.cssText = `font-size:28px;cursor:pointer;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));`

        const popupContent = document.createElement('div')
        popupContent.innerHTML = `
          <img src="${img}" alt="${name}" style="width:100%;max-height:160px;object-fit:contain;display:block;background:#fefcf0;" onerror="this.style.display='none'" />
          <div style="padding:10px;">
            <h3 style="margin:0;color:#8B6914;font-size:14px">${name}</h3>
            <p style="margin:4px 0 0;font-size:12px;color:#666">${desc}</p>
          </div>
        `
        const popup = new mapboxgl.Popup({ offset: 24, maxWidth: '280px' }).setDOMContent(popupContent)
        const marker = new mapboxgl.Marker(el).setLngLat(pos).setPopup(popup).addTo(map)
        markers.push({ marker, popup })
      })
      return () => markers.forEach(m => { m.marker.remove(); m.popup.remove() })
    },
    quiz: {
      question: '巴薩克（Barsac）AOC 與蘇玳（Sauternes）AOC 的關係是？',
      options: [
        '巴薩克是蘇玳的子產區，不能單獨標示',
        '兩者完全獨立，風格毫無關係',
        '巴薩克酒莊可選擇以「Barsac AOC」或「Sauternes AOC」標示',
        '巴薩克只能生產干型白酒'
      ],
      correct: 2,
      explanation: '巴薩克（Barsac）是蘇玳南部的一個獨立AOC，其酒莊具有特殊的選擇權：可以在酒標上標示「Barsac AOC」（強調其輕盈精緻的在地特色），也可以選擇標示「Sauternes AOC」（利用更廣為人知的蘇玳名號行銷）。風格上，巴薩克通常比蘇玳主產區更輕盈，帶有更多的檸檬與礦物感。'
    }
  },

  // ========== 第六章：風味輪廓與陳年 ==========
  {
    type: 'chapter-divider',
    chapter: '6',
    title: '風味輪廓與陳年潛力',
    subtitle: '從蜂蜜金黃到「液態琥珀」的蛻變',
    icon: '🍯',
    background: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)'
  },

  // ========== 9. 風味與陳年 =========
  {
    title: '蘇玳的風味演化：時間的魔法',
    highlights: [
      { id: 1, icon: '🍑', title: '年輕時：熱帶水果盛宴', content: '蜂蜜、杏桃、鳳梨、烤榛果' },
      { id: 2, icon: '🍯', title: '陳年後：複雜的琥珀世界', content: '藏紅花、肉桂、蜂蠟、松露' }
    ],
    content: `<div class="flavor-aging">
      <p class="lead-text">蘇玳甜酒的偉大之處在於其驚人的陳年潛力。不同於大多數甜酒趁年輕飲用，頂級蘇玳在瓶中陳放30年甚至50年後，才能展現其最完整的生命力。</p>
      <div class="aging-timeline">
        <div class="age-phase">
          <h5>🌱 年輕（1–5年）</h5>
          <div class="flavor-tags">
            <span>🍑 杏桃</span><span>🍍 鳳梨</span><span>🍊 柑橘蜜</span>
            <span>🌼 金合歡花</span><span>🍋 蜂蜜檸檬</span>
          </div>
          <p>口感：甘甜、圓潤，酸甜平衡，清新果香為主</p>
        </div>
        <div class="age-divider">→ 歲月魔法 →</div>
        <div class="age-phase">
          <h5>🌿 中年（10–20年）</h5>
          <div class="flavor-tags">
            <span>🥭 芒果乾</span><span>🍊 橙皮蜜餞</span><span>🫚 杏仁油</span>
            <span>🌶️ 藏紅花</span><span>🍂 秋季香料</span>
          </div>
          <p>口感：更加油潤豐厚，酸度開始整合，複雜度大幅提升</p>
        </div>
        <div class="age-divider">→ 歲月魔法 →</div>
        <div class="age-phase">
          <h5>🏆 成熟（30年以上）</h5>
          <div class="flavor-tags">
            <span>🍯 蜂蠟</span><span>🌰 腰果焦糖</span><span>🪨 燧石礦物</span>
            <span>🍄 松露</span><span>☕ 太妃糖咖啡</span>
          </div>
          <p>口感：如液態琥珀，油滑如絲，餘韻可延續一分鐘以上</p>
        </div>
      </div>
      <div class="serving-tips">
        <h5>🌡️ 品飲建議</h5>
        <ul>
          <li><strong>侍酒溫度：</strong>8–12°C（過冷會壓抑香氣，過暖則甜膩）</li>
          <li><strong>杯型：</strong>半型鬱金香杯或白酒杯，避免大型勃根地杯（會加速揮發）</li>
          <li><strong>份量：</strong>標準倒杯量 60–75ml（是紅酒的一半），避免味覺疲勞</li>
          <li><strong>醒酒：</strong>年輕酒款無需醒酒；老年份可短醒10分鐘釋放香氣</li>
        </ul>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '頂級蘇玳（如d\'Yquem）建議的適飲窗口通常從何時開始？',
      options: [
        '出廠後立即飲用效果最佳',
        '5年以內，保留最新鮮果香',
        '10–15年後，讓風味整合並展現複雜度',
        '只能在50年以後才能開瓶'
      ],
      correct: 2,
      explanation: '雖然年輕的蘇玳（1–5年）也有其清新可口的果香，但頂級蘇玳（如d\'Yquem等一級特優和一級莊）的黃金品飲期通常在出品後10–20年才真正展開，且優質年份可以輕鬆陳年30–50年甚至更長。耐心等待，是品飲蘇玳的最高美德。'
    }
  },

  // ========== 第七章：世界三大貴腐甜酒 ==========
  {
    type: 'chapter-divider',
    chapter: '7',
    title: '世界三大貴腐甜酒',
    subtitle: '法德匈三國鼎立，各有千秋',
    icon: '🌍',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // ========== 10. 全球比較 =========
  {
    title: '全球貴腐甜酒：蘇玳 vs 德國 vs 匈牙利',
    highlights: [
      { id: 1, icon: '🇩🇪', title: '德國逐粒枯萄精選', content: 'Trockenbeerenauslese，甜度最高，幾近糖漿' },
      { id: 2, icon: '🇭🇺', title: '匈牙利托卡伊', content: 'Tokaji Aszú，以「篓」（puttonyos）計算糖分' }
    ],
    content: `<div class="global-botrytis">
      <p class="lead-text">貴腐甜酒並非蘇玳獨有。世界上另有兩大頂級貴腐產區，各自發展出截然不同的工藝與風格體系。</p>
      <div class="comparison-table">
        <div class="compare-header">
          <div class="col country">產區</div>
          <div class="col">主要品種</div>
          <div class="col">貴腐工藝</div>
          <div class="col">風格特色</div>
        </div>
        <div class="compare-row sauternes">
          <div class="col country"><span>🇫🇷</span><strong>法國・蘇玳</strong></div>
          <div class="col">賽美容（主）、白蘇維濃</div>
          <div class="col">逐次整串採收（tries），同時發酵貴腐與非貴腐葡萄</div>
          <div class="col">豐滿圓潤，蜂蜜杏桃調性，酸甜平衡，陳年潛力30–100年</div>
        </div>
        <div class="compare-row germany">
          <div class="col country"><span>🇩🇪</span><strong>德國・萊茵高/摩澤爾</strong></div>
          <div class="col">麗絲玲（Riesling）為主</div>
          <div class="col">TBA（Trockenbeerenauslese）：只採完全乾縮的貴腐葡萄乾</div>
          <div class="col">糖分最高（殘糖可達600g/L），酸度極強，幾乎不可能發酵完全，酒精度很低（5–6%）</div>
        </div>
        <div class="compare-row hungary">
          <div class="col country"><span>🇭🇺</span><strong>匈牙利・托卡伊</strong></div>
          <div class="col">富爾民特（Furmint）為主</div>
          <div class="col">將貴腐果粒（Aszú）混入基底酒，以「篓數」（puttonyos）標示甜度</div>
          <div class="col">獨特的氧化熟成風格，橙皮蜜餞、蜂蜜、菸草，口感如液態太妃糖</div>
        </div>
      </div>
      <div class="unique-sauternes">
        <h5>🏆 蘇玳的獨特之處</h5>
        <p>三大貴腐中，蘇玳以「逐次多回採收」搭配「三種品種混釀」最為獨特，且糖分與酸度的平衡最為和諧，這也是為何 d'Yquem 能長期獨占「世界最偉大甜酒」地位的核心原因。</p>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '德國 Trockenbeerenauslese（TBA）與蘇玳甜酒最主要的工藝差異是什麼？',
      options: [
        'TBA 使用不鏽鋼桶發酵，蘇玳使用橡木桶',
        'TBA 只採收完全乾縮的貴腐葡萄乾，蘇玳是多次採收整串',
        'TBA 添加二氧化硫防腐，蘇玳完全不添加',
        'TBA 以紅葡萄品種為主，蘇玳則是白葡萄'
      ],
      correct: 1,
      explanation: '德國 Trockenbeerenauslese（TBA，字面意義「乾縮漿果精選」）的工藝是只採收已完全乾縮成葡萄乾狀態的貴腐果粒，糖分極度濃縮（殘糖可超過600g/L），但因此酒精度極低。蘇玳則是進行多次採收（tries），採收的是各種貴腐程度的果粒，並以三種品種混釀達到平衡。'
    }
  },

  // ========== 第八章：配餐與服務 ==========
  {
    type: 'chapter-divider',
    chapter: '8',
    title: '配餐藝術與服務技巧',
    subtitle: '甜酒與美食的黃金組合',
    icon: '🍽️',
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },

  // ========== 11. 配餐 =========
  {
    title: '蘇玳配餐：「同享」與「對比」的雙重哲學',
    highlights: [
      { id: 1, icon: '🦆', title: '經典CP：鵝肝', content: '甜潤的蘇玳平衡鵝肝的油脂，波爾多最經典的傳統搭配' },
      { id: 2, icon: '🧀', title: '意外CP：藍紋乳酪', content: '羅克福的鹹味強化蘇玳的甜度，創造層次衝擊' }
    ],
    content: `<div class="food-pairing">
      <p class="lead-text">蘇玳配餐遵循兩大哲學：「同類相吸」（以甜配甜、以濃配濃）和「對比平衡」（甜酒搭配鹹食，形成張力）。兩種方式都能帶來令人難忘的餐酒體驗。</p>
      <div class="pairing-categories">
        <div class="pairing-group classic">
          <h4>🏆 經典搭配</h4>
          <div class="pairing-items">
            <div class="pair-item">
              <span class="food-icon">🦆</span>
              <div>
                <strong>肥肝（Foie Gras）</strong>
                <p>波爾多傳統搭配，蘇玳的甜潤化解肥肝的濃重油脂，兩者共同創造出無與倫比的奢華口感。最好選冷盤或慕斯形式（非熱煎，以免甜酒失衡）。</p>
              </div>
            </div>
            <div class="pair-item">
              <span class="food-icon">🧀</span>
              <div>
                <strong>藍紋乳酪（Roquefort、Gorgonzola）</strong>
                <p>鹹辣強烈的藍乳酪與蘇玳甜潤形成強烈對比，反而相互提升，是侍酒師最愛推薦的「意外絕配」。</p>
              </div>
            </div>
            <div class="pair-item">
              <span class="food-icon">🍮</span>
              <div>
                <strong>法式甜點（烤布蕾、泡芙）</strong>
                <p>選擇甜度略低、奶香豐富的甜點搭配，蘇玳的酸度避免整體過甜。Crème brûlée 是傳統首選。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pairing-group surprising">
          <h4>💡 現代創意搭配</h4>
          <div class="pairing-items">
            <div class="pair-item">
              <span class="food-icon">🦐</span>
              <div>
                <strong>龍蝦與海鮮（焗烤或奶油醬）</strong>
                <p>蘇玳的酸度切割奶油醬的厚重，甜潤感配合甲殼類的自然甜味，帶出海鮮的鮮美。</p>
              </div>
            </div>
            <div class="pair-item">
              <span class="food-icon">🍛</span>
              <div>
                <strong>亞洲料理（泰式咖哩、廣式燒臘蜂蜜烤鴨）</strong>
                <p>蘇玳的甜潤與辛香料的辣度、燒臘的焦糖感形成互補，近年日、港地區高端餐廳的熱門選擇。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="avoid-list">
          <h5>⚠️ 建議避免的搭配</h5>
          <ul>
            <li>重度紅肉料理（牛排、羊架）— 甜酒無法配合強烈單寧食物</li>
            <li>過甜的奶油糖果 — 兩者甜度相加造成味覺疲勞</li>
            <li>非常酸辣的菜餚 — 破壞蘇玳微妙的酸甜平衡</li>
          </ul>
        </div>
      </div>
    </div>`,
    hasMap: false,
    quiz: {
      question: '為什麼蘇玳與藍紋乳酪（如Roquefort）被視為「絕配」？',
      options: [
        '兩者都是甜的，互相增強',
        '蘇玳的甜潤與藍乳酪的鹹辣形成對比張力，相互提升',
        '兩者原料相同，都來自法國',
        '藍乳酪含有的黴菌與貴腐菌屬同一類'
      ],
      correct: 1,
      explanation: '蘇玳與藍紋乳酪的「對比平衡」搭配是餐酒配對中「contrast」哲學的最佳示範。藍乳酪（如Roquefort）強烈的鹹味和辛辣感，搭上蘇玳豐滿甜潤的口感，兩者在口腔中相互拉扯，卻意外和諧並達到彼此的最佳狀態，讓雙方的特色都得到更好的展現。'
    }
  }
]

// 結束頁
const endPage = {
  type: 'end',
  title: '課程完成',
  achievement: 'L2-10 蘇玳與巴薩克 - 貴腐甜酒的傳奇',
  description: '恭喜您完成蘇玳貴腐甜酒的深度學習！您已全面掌握這個波爾多最獨特的甜酒聖地。從西隆河晨霧與午後金陽創造的微氣候奇蹟，到 Botrytis cinerea 的點石成金科學，再到 Château d\'Yquem 的至高傳奇——蘇玳是自然的恩賜與人類工藝的極致結合。',
  skills: [
    '理解西隆河霧氣與加倫河暖流共同創造的蘇玳微氣候',
    '掌握 Botrytis cinerea 貴腐菌的科學作用機制',
    '認識賽美容、白蘇維濃、蜜思卡黛三品種的角色分工',
    '了解1855年蘇玳分級與 Château d\'Yquem 的至高地位',
    '學會蘇玳甜酒的配餐哲學與品鑑技巧',
    '建立全球三大貴腐甜酒（法德匈）的比較視野'
  ],
  nextSteps: [
    {
      action: '品鑑實踐',
      items: [
        '尋找入門款蘇玳（如 Château Guiraud、Château Filhot）開始品飲',
        '嘗試蘇玳搭配肥肝或藍紋乳酪，親身體驗「對比平衡」的魔力',
        '比較同年份的蘇玳一級莊與 d\'Yquem 的風格差異',
        '尋找10年以上的老年份蘇玳，感受陳年的蜂蠟琥珀香氣'
      ]
    },
    {
      action: '繼續學習',
      items: [
        '完成 Level 2 綜合評量（L2-9），驗證整體學習成果',
        '在 Level 3 深入學習貴腐釀造的科學細節（L3-5）',
        '比較蘇玳與匈牙利 Tokaji Aszú 的品飲差異'
      ]
    }
  ],
  certificate: '您已獲得本課程學習證明',
  reflection: {
    title: '課程反思',
    questions: [
      '為什麼蘇玳的晨霧與午後晴朗的循環缺一不可？',
      'Château d\'Yquem 在不良年份選擇不出品，這對品牌價值有何影響？',
      '蘇玳甜酒與德國 TBA 的釀造工藝最根本的差異是什麼？',
      '您認為「同類相吸」還是「對比平衡」的配餐哲學更適合蘇玳？為什麼？'
    ]
  },
  keyInsight: '蘇玳是大自然與人類智慧合作的奇蹟。西隆河的冷霧與加倫河的暖流，在每年秋天上演一場精妙的氣候協奏；貴腐菌在這片微氣候中完成點石成金的轉化；而採收者以逐粒篩選的耐心與堅持，讓這場自然的饋贈得以成瓶。Château d\'Yquem 以一藤一杯的苛求與不良年份拒絕出品的勇氣，定義了甜酒的最高境界。理解蘇玳，就是理解波爾多中那份「以自然為師、以工藝為徒」的最深層哲學。',
  shareMessage: '我剛完成了Level 2的「蘇玳貴腐甜酒傳奇」課程！深入理解了西隆河霧氣創造的微氣候奇蹟，以及 Château d\'Yquem 作為世界唯一「一級特優」的至高傳奇。🍯👑 #波爾多 #Sauternes #dYquem #貴腐甜酒'
}

l210Content.push(endPage)

export default l210Content
