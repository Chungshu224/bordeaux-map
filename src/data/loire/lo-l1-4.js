/**
 * LO-L1-4 Muscadet 家族全解——四大 AOC 比較
 * Sur Lie 技術、Crus Communaux 地塊分級與四大 AOC 風格差異
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Muscadet 不是一個單一 AOC，而是一個家族。四個法定產區各有不同的地理範圍和土壤特性，其中以 Muscadet-Sèvre-et-Maine 最為重要，佔全家族產量的 85%。此外，Sur Lie 帶酒泥陳釀技術和「地塊分級」制度，讓 Muscadet 從平價開胃酒升級為值得窖藏的精品白酒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 比較四大 Muscadet AOC 的異同</h4>
            <p>了解 Muscadet、MSM、MCDGL、MCDLL 在地理、土壤和風格上的差異</p>
          </div>
          <div class="point-item">
            <h4>🦠 掌握 Sur Lie 陳釀技術</h4>
            <p>理解帶酒泥陳釀（至少至隔年 3 月）如何為 Muscadet 增添複雜度、酒體與氣泡感</p>
          </div>
          <div class="point-item">
            <h4>🏆 認識 Crus Communaux 地塊分級</h4>
            <p>Clisson、Gorges、Le Pallet——三個旗艦 cru 的土壤特色與風格差異</p>
          </div>
          <div class="point-item">
            <h4>🦪 了解 Muscadet 的品飲與餐搭</h4>
            <p>為何 Muscadet sur lie 是搭配生蠔、貽貝、海鮮的最佳選擇</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Muscadet 四大 AOC 分布',
    componentProps: {
      slide: {
        title: 'Muscadet 四大 AOC 分布',
        description: 'Pays Nantais 的 17 個 AOP 中，Muscadet 家族是絕對核心',
        mapGroup: 'PayNantes',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson', 'Muscadet-Côtes-de-Grandlieu.geojson', 'Muscadet-Coteaux-de-la-Loire.geojson'],
      }
    }
  },

  {
    title: '🗺️ 四大 Muscadet AOC 比較',
    highlights: [
      { id: 1, icon: '🥇', title: 'Muscadet-Sèvre-et-Maine（MSM）', content: '最重要！佔全家族產量 85%，Sèvre 和 Maine 兩條河流交匯，花崗岩+片岩+輝長岩多元土壤，礦石感最豐富' },
      { id: 2, icon: '🏞️', title: 'Muscadet-Côtes-de-Grandlieu（MCDGL）', content: 'Grandlieu 湖周邊，黏土+砂岩為主，風格較圓潤柔和，適飲性高' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">四個 Muscadet AOC 雖共用同一品種（Melon de Bourgogne），但地理位置和土壤不同，風格各有特色：</p>
      <div class="region-grid main-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🥇</span>
            <span class="rc-name">Muscadet-Sèvre-et-Maine</span>
            <span class="rc-aop">85%</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">花崗岩 · 片岩 · 輝長岩</div>
            <div class="rc-style">最精緻礦石感，陳年潛力最強</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🏞️</span>
            <span class="rc-name">Muscadet-Côtes-de-Grandlieu</span>
            <span class="rc-aop">次要</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">黏土 · 砂岩</div>
            <div class="rc-style">圓潤柔和，果香豐，易飲</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">🌿</span>
            <span class="rc-name">Muscadet-Coteaux-de-la-Loire</span>
            <span class="rc-aop">稀少</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">片岩 · 火山岩</div>
            <div class="rc-style">最輕盈清脆，活潑高酸</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🍾</span>
            <span class="rc-name">Muscadet（基礎）</span>
            <span class="rc-aop">簡單</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">無特定地理限制</div>
            <div class="rc-style">日常飲用，清新簡單</div>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Muscadet-Sèvre-et-Maine（MSM）約佔整個 Muscadet 家族產量的多少？',
      options: ['30%', '50%', '70%', '85%'],
      correct: 3,
      explanation: 'Muscadet-Sèvre-et-Maine 是 Muscadet 家族中最重要的 AOC，佔全家族總產量約 85%。它位於 Sèvre 和 Maine 兩條河流的交匯地帶，以花崗岩、片岩和輝長岩多元土壤為主，也是 Crus Communaux 地塊分級制度的核心產區。'
    }
  },

  {
    title: '🦠 Sur Lie：帶酒泥陳釀的魔法',
    highlights: [
      { id: 1, icon: '🦠', title: '酵母自溶（Autolysis）', content: '酵母細胞分解後釋放氨基酸、多醣和甘油，為酒款增添麵包、奶油、酵母氣息和豐潤口感，同時提升酒體' },
      { id: 2, icon: '🍾', title: '天然 CO₂ 保護', content: '酒泥產生的微量 CO₂ 保留在酒中，帶來輕盈氣泡感和活潑清新感，同時防止氧化，是 Muscadet 清新風格的秘密' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">Sur Lie（帶酒泥陳釀）是 Muscadet 最重要的釀造技術，讓它從「廉價開胃酒」升級為「值得認真對待的精品白酒」——<span class="intro-highlight">不過濾、不換桶、讓酒與死酵母共存至少到隔年 3 月</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">採收後</div>
        <div class="timeline-content"><strong>🍇 發酵完成</strong><p>葡萄酒完成酒精發酵，死酵母（酒泥 / lies）沉澱在酒桶底部。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">整個冬季</div>
        <div class="timeline-content"><strong>❄️ 不換桶、不過濾</strong><p>Sur Lie 要求酒款整個冬季不換桶、不過濾，讓酒與酒泥持續接觸，進行「自溶」過程，釋放複雜度。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">隔年 3 月</div>
        <div class="timeline-content"><strong>📋 法規最短期限</strong><p>法規規定 sur lie 陳釀最少至次年 3 月 1 日，以保留 CO₂、酵母風味和豐潤口感後才能裝瓶。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">Crus Communaux</div>
        <div class="timeline-content"><strong>⏰ 頂級地塊延長陳釀</strong><p>Clisson、Gorges、Le Pallet 要求更長的 sur lie 陳釀期（24–36 個月），產出更複雜的陳年型 Muscadet。</p></div>
      </div>
    </div>`,
    quiz: {
      question: 'Sur Lie 法規要求 Muscadet 至少陳釀至何時才能裝瓶？',
      options: ['採收當年 12 月', '次年 1 月', '次年 3 月', '次年 6 月'],
      correct: 2,
      explanation: '法規規定 Muscadet sur lie 必須帶酒泥陳釀至次年 3 月 1 日後才能裝瓶。頂級地塊（Crus Communaux）通常陳釀 24–36 個月，以產出更複雜、值得窖藏的陳年型風格。這個技術讓 Muscadet 獲得獨特的酵母麵包香、豐潤口感和清新氣泡感。'
    }
  },

  {
    title: '🏆 Crus Communaux：10 個官方認可地塊',
    highlights: [
      { id: 1, icon: '🍫', title: 'Clisson（片岩）★★★', content: '唯一要求 36 個月 sur lie，風格最圓潤豐滿，帶烤麵包與礦石香，陳年後蜂蜜複雜度最高，是考試首選必背地塊' },
      { id: 2, icon: '⚫', title: 'Gorges（輝長岩）★★★', content: '輝長岩（Gabbro）是 Pays Nantais 最稀有的土壤，釀出礦石張力最強、最深邃的 Muscadet，需要時間開放方顯真章' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">2011 年建立的 Crus Communaux 制度是 Muscadet 品質革命里程碑。全部 10 個官方認可的地塊均位於 Muscadet-Sèvre-et-Maine，★★★ 為考試重點：</p>
      <div class="region-grid secondary-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🍫</span>
            <span class="rc-name">Clisson ★★★</span>
            <span class="rc-aop">片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 <strong>36 個月</strong> sur lie（最長）</div>
            <div class="rc-style">豐滿圓潤，烤麵包香，蜂蜜陳年複雜度</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">⚫</span>
            <span class="rc-name">Gorges ★★★</span>
            <span class="rc-aop">輝長岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">深邃強勁，最強礦石張力，碘鹹感</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🪨</span>
            <span class="rc-name">Le Pallet ★★★</span>
            <span class="rc-aop">花崗岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">精確高雅，清晰礦石，結構紮實</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🏰</span>
            <span class="rc-name">Château-Thébaud ★★</span>
            <span class="rc-aop">正長片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">圓潤果香，柔順易飲，細膩礦石</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🌿</span>
            <span class="rc-name">Goulaine ★★</span>
            <span class="rc-aop">片麻岩+雲母片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">細膩優雅，花香調，長度出色</div>
          </div>
        </div>
        <div class="region-card rg-poitou">
          <div class="rc-header">
            <span class="rc-icon">🔵</span>
            <span class="rc-name">Mouzillon-Tillières ★★</span>
            <span class="rc-aop">複合變質岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">清新活潑，表達土壤多樣性</div>
          </div>
        </div>
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">🍇</span>
            <span class="rc-name">Vallet ★</span>
            <span class="rc-aop">片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">均衡結構，純粹礦石，平易近人</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">⛪</span>
            <span class="rc-name">Saint-Fiacre-sur-Maine ★</span>
            <span class="rc-aop">正長片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">清爽純粹，鹹鮮礦石，輕快酸度</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🌊</span>
            <span class="rc-name">La Haye-Fouassière ★</span>
            <span class="rc-aop">雲母片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">輕盈鮮活，精緻花香，海洋清新</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🏡</span>
            <span class="rc-name">Montières-sur-Lay ★</span>
            <span class="rc-aop">花崗岩+片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">最少 24 個月 sur lie</div>
            <div class="rc-style">平衡易飲，展現混合地質個性</div>
          </div>
        </div>
      </div>
      <div class="region-tip">🔑 考試記憶技巧：<strong>Clisson（片岩→豐滿，36m）、Gorges（輝長岩→礦石最強）、Le Pallet（花崗岩→精確）</strong> 為三大旗艦，其餘 7 個均需最少 24 個月 sur lie。</div>
    </div>`,
    quiz: {
      question: '哪個 Cru Communal 以輝長岩（Gabbro）土壤著稱，釀出礦石感最強烈的 Muscadet？',
      options: ['Clisson', 'Gorges', 'Le Pallet', 'Château-Thébaud'],
      correct: 1,
      explanation: 'Gorges 是 Muscadet-Sèvre-et-Maine 中最獨特的地塊，以罕見的輝長岩（Gabbro）土壤為主。輝長岩是一種深色火成岩，賦予酒款最深邃、最強烈的礦石張力，最少需要 24 個月 sur lie 陳釀。相較之下，Clisson 以片岩為主且要求最長的 36 個月 sur lie，Le Pallet 以花崗岩為主風格最精確高雅。'
    }
  }
]
