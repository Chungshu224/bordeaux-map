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
        description: 'Pays Nantais 的 17 個 AOP 中，Muscadet 家族是絕對核心——點擊按鈕查看各 AOC 詳情',
        mapGroup: 'PayNantes',
        highlightFiles: [
          'Muscadet.geojson',
          'Muscadet-Sèvre-et-Maine.geojson',
          'Muscadet-Côtes-de-Grandlieu.geojson',
          'Muscadet-Coteaux-de-la-Loire.geojson',
          'Gros-Plant-du-Pays-Nantais.geojson',
        ],
        highlightColors: {
          'Muscadet.geojson':                         '#a78bfa',
          'Muscadet-Sèvre-et-Maine.geojson':          '#0ea5e9',
          'Muscadet-Côtes-de-Grandlieu.geojson':      '#10b981',
          'Muscadet-Coteaux-de-la-Loire.geojson':     '#f59e0b',
          'Gros-Plant-du-Pays-Nantais.geojson':       '#fb923c',
        },
        aocButtons: [
          {
            id: 'msm',
            file: 'Muscadet-Sèvre-et-Maine.geojson',
            label: 'Muscadet-Sèvre-et-Maine',
            short: 'MSM ★★★',
            color: '#0ea5e9',
            center: [-1.35, 47.08],
            zoom: 10,
            aop: '85% 產量，最重要',
            soil: '花崗岩 · 片岩 · 輝長岩',
            grapes: 'Melon de Bourgogne 100%',
            surLie: '最少至次年 3 月；Crus Communaux 需 24–36 個月',
            style: '礦石張力最豐富，唯一擁有 10 個 Crus Communaux 地塊的 AOC，陳年後展現蜂蜜與烤麵包複雜度',
            note: '⭐ Clisson（片岩）、Gorges（輝長岩）、Le Pallet（花崗岩）為三大旗艦 Cru',
          },
          {
            id: 'mcdgl',
            file: 'Muscadet-Côtes-de-Grandlieu.geojson',
            label: 'Muscadet-Côtes-de-Grandlieu',
            short: 'MCDGL ★★',
            color: '#10b981',
            center: [-1.65, 47.05],
            zoom: 10.5,
            aop: 'Grandlieu 湖周邊',
            soil: '黏土 · 砂岩 · 粉砂土',
            grapes: 'Melon de Bourgogne 100%',
            surLie: '最少至次年 3 月',
            style: '圓潤柔和，果香豐富，比 MSM 更易飲，海洋清新感稍低',
          },
          {
            id: 'mcdll',
            file: 'Muscadet-Coteaux-de-la-Loire.geojson',
            label: 'Muscadet-Coteaux-de-la-Loire',
            short: 'MCDLL ★★',
            color: '#f59e0b',
            center: [-1.2, 47.35],
            zoom: 10.5,
            aop: '最稀少，沿羅亞爾河上游',
            soil: '片岩 · 火山岩 · 結晶岩',
            grapes: 'Melon de Bourgogne 100%',
            surLie: '最少至次年 3 月',
            style: '最輕盈清脆，活潑高酸，鹹鮮礦石，有時帶輕微石灰感',
          },
          {
            id: 'muscadet',
            file: 'Muscadet.geojson',
            label: 'Muscadet（基礎 AOC）',
            short: 'Muscadet',
            color: '#a78bfa',
            center: [-1.8, 47.1],
            zoom: 9,
            aop: '最廣泛的通用 AOC',
            soil: '無特定地理限制，多元混合',
            grapes: 'Melon de Bourgogne 100%',
            surLie: '可不標示；標示者需至次年 3 月',
            style: '清新簡單，日常飲用風格，通常不展現土壤個性，定價親民',
          },
          {
            id: 'gros-plant',
            file: 'Gros-Plant-du-Pays-Nantais.geojson',
            label: 'Gros Plant du Pays Nantais',
            short: 'Gros Plant',
            color: '#fb923c',
            center: [-1.6, 47.0],
            zoom: 10,
            aop: '非 Muscadet，獨立 AOC',
            soil: '花崗岩 · 片岩（與 MSM 重疊）',
            grapes: 'Folle Blanche（非 Melon）',
            surLie: '可標示 sur lie',
            style: '極高酸、瘦削、銳利，幾乎無果香，礦石感原始強烈，傳統生蠔搭配白酒',
            note: '⚠️ 注意：使用 Folle Blanche，不是 Melon de Bourgogne，風格截然不同',
          },
        ],
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
    title: '🦠 Sur Lie：帶酒泥陳釀的三個境界',
    highlights: [
      { id: 1, icon: '🏗️', title: '地下混凝土桶：南特獨有工藝', content: '所有 Muscadet 的 sur lie 陳釀均在「地下混凝土桶」（覆蓋玻璃或陶磚的地下水槽）中進行，這是南特產區特有的傳統設施，穩定的地下溫度是陳釀品質的關鍵' },
      { id: 2, icon: '⏰', title: '三個陳釀等級，三種風格境界', content: '短期（< 6 個月）→ 清新活潑；中期（< 18 個月）→ 豐潤結構；長期（> 24 個月）→ 複雜陳年，對應 10 個 Crus Communaux 地塊等級制度' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">Sur Lie（帶酒泥陳釀）是 Muscadet 最核心的釀造工藝。MSM、MCDGL、MCDLL <strong>三個地區 AOC 均強制要求</strong>，10 個 Crus Communaux 更需 24 個月以上——<span class="intro-highlight">時間長短決定風格境界</span></p>
    </div>
    <div class="region-overview" style="margin-top:10px">
      <p class="region-intro">🏗️ 傳統儲存方式：<strong>地下混凝土桶</strong>（覆蓋玻璃磚或陶磚的地下水槽）——南特獨有的傳統設施，穩定地下溫度確保緩慢、均勻的酒泥接觸。</p>
      <div class="region-grid main-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">💧</span>
            <span class="rc-name">短期 Sur Lie</span>
            <span class="rc-aop">&lt; 6 個月</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">基礎 Muscadet AOC</div>
            <div class="rc-style">清新活潑，花果香明顯，高酸輕盈，適合即飲</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🌿</span>
            <span class="rc-name">中期 Sur Lie</span>
            <span class="rc-aop">&lt; 18 個月</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">地區 AOC（MSM / MCDGL / MCDLL）</div>
            <div class="rc-style">豐潤結構，麵包奶油香，CO₂ 氣泡感，平衡複雜</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">🏆</span>
            <span class="rc-name">長期 Sur Lie</span>
            <span class="rc-aop">&gt; 24 個月</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">10 個 Crus Communaux 地塊</div>
            <div class="rc-style">複雜陳年，蜂蜜榲桲，香料礦石，可窖藏 10–40 年</div>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-container" style="margin-top:12px">
      <div class="timeline-item">
        <div class="timeline-badge ancient">採收後</div>
        <div class="timeline-content"><strong>🍇 酒精發酵完成</strong><p>死酵母（lies）自然沉澱於地下混凝土桶底部，不換桶、不過濾，開始漫長的自溶（Autolysis）過程。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">自溶作用</div>
        <div class="timeline-content"><strong>🦠 酵母細胞分解釋放複雜度</strong><p>酵母壁破裂，釋放氨基酸、多醣、甘油，賦予麵包奶油香、豐潤口感；同時微量 CO₂ 留存，帶來活潑氣泡感，防止氧化。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge renaissance">次年 3 月</div>
        <div class="timeline-content"><strong>📋 地區 AOC 最短法定期限</strong><p>MSM、MCDGL、MCDLL 三個地區 AOC 均要求最少陳釀至次年 3 月 1 日。這是「Muscadet Sur Lie」標示的法律門檻。</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">24–48 個月</div>
        <div class="timeline-content"><strong>🏆 Crus Communaux：最長陳釀</strong><p>10 個地塊分級均需超過 24 個月；Château-Thébaud 最長可達 48 個月，頂級年份展現 10–40 年陳年潛力。</p></div>
      </div>
    </div>`,
    quiz: {
      question: '根據官方規定，哪幾個 Muscadet AOC 強制要求 Sur Lie 陳釀？',
      options: [
        '所有 Muscadet AOC 均強制要求',
        'MSM、MCDGL、MCDLL 三個地區 AOC',
        '只有 Muscadet-Sèvre-et-Maine（MSM）',
        '只有 10 個 Crus Communaux 地塊'
      ],
      correct: 1,
      explanation: '根據官方規定，Muscadet-Sèvre-et-Maine（MSM）、Muscadet-Côtes-de-Grandlieu（MCDGL）、Muscadet-Coteaux-de-la-Loire（MCDLL）三個地區 AOC 均強制要求 Sur Lie 陳釀，最少至次年 3 月 1 日。10 個 Crus Communaux 地塊更需超過 24 個月。基礎通用 Muscadet AOC 則可選擇是否標示 Sur Lie。'
    }
  },

  {
    title: '🏆 Crus Communaux：10 個官方認可地塊',
    highlights: [
      { id: 1, icon: '💪', title: 'Clisson — Power（力量）★★★', content: '花崗岩母岩，24–36 個月 sur lie，高酒精、豐滿圓潤，香氣為熟梨、蜜桃、熟柑橘、蜂蜜與榲桲，是 MSM 南部旗艦地塊' },
      { id: 2, icon: '⚫', title: 'Gorges — Length（長度）★★★', content: '輝長岩（Gabbro）子土，最古老的 Cru，24–40 個月 sur lie，年輕時封閉，薄荷、檸檬、煙燻、燧石香，礦石張力最強' }
    ],
    content: `<div class="region-overview">
      <p class="region-intro">2011 年建立的 Crus Communaux 是 Muscadet 品質革命里程碑。9 個位於 MSM，<strong>Champtoceaux 唯一位於 MCDLL</strong>。每個 Cru 均有官方認定的個性關鍵字：</p>
      <div class="region-grid secondary-grid">
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">💪</span>
            <span class="rc-name">Clisson ★★★</span>
            <span class="rc-aop">Power · 花崗岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>24–36 個月</strong> · MSM 南部</div>
            <div class="rc-style">高酒精豐滿，熟梨·蜂蜜·榲桲，陳年複雜度最高</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">〰️</span>
            <span class="rc-name">Gorges ★★★</span>
            <span class="rc-aop">Length · 輝長岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>24–40 個月</strong> · Sèvre 河丘</div>
            <div class="rc-style">年輕封閉，薄荷·煙燻·燧石，礦石張力最長</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🪨</span>
            <span class="rc-name">Le Pallet ★★★</span>
            <span class="rc-aop">Unctuosity · 片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>18+ 個月</strong> · Sèvre 右岸中心</div>
            <div class="rc-style">豐潤圓滑，果香·礦石，絲滑口感</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">⚖️</span>
            <span class="rc-name">Goulaine ★★</span>
            <span class="rc-aop">Balance · 片麻岩+雲母片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>20–30 個月</strong> · 沼澤地丘陵</div>
            <div class="rc-style">最先採收，熟果·蜂蜜，均衡優雅</div>
          </div>
        </div>
        <div class="region-card rg-anjou">
          <div class="rc-header">
            <span class="rc-icon">🏰</span>
            <span class="rc-name">Château-Thébaud ★★</span>
            <span class="rc-aop">Refinement · 花崗閃長岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>36–48 個月</strong> · Maine 河丘</div>
            <div class="rc-style">茴香·甘草·香料，優雅鹹感收尾</div>
          </div>
        </div>
        <div class="region-card rg-poitou">
          <div class="rc-header">
            <span class="rc-icon">🔬</span>
            <span class="rc-name">Mouzillon-Tillières ★★</span>
            <span class="rc-aop">Complexity · 複合變質岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>24+ 個月</strong> · MSM</div>
            <div class="rc-style">多元土壤帶來複雜礦石層次</div>
          </div>
        </div>
        <div class="region-card rg-touraine">
          <div class="rc-header">
            <span class="rc-icon">💪🏼</span>
            <span class="rc-name">Monnières-Saint Fiacre ★</span>
            <span class="rc-aop">Body · 片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>24+ 個月</strong> · Sèvre 左岸</div>
            <div class="rc-style">豐腴柔滑，橙花·異國果香·蜂蠟</div>
          </div>
        </div>
        <div class="region-card rg-centre">
          <div class="rc-header">
            <span class="rc-icon">🌸</span>
            <span class="rc-name">La Haye Fouassière ★</span>
            <span class="rc-aop">Elegance · 正長片麻岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>18 個月</strong>（最短）· 最西端 Cru</div>
            <div class="rc-style">薄荷·花香·燧石礦石，早熟優雅</div>
          </div>
        </div>
        <div class="region-card rg-pays">
          <div class="rc-header">
            <span class="rc-icon">✨</span>
            <span class="rc-name">Vallet ★</span>
            <span class="rc-aop">Opulence · 雲母片岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>18+ 個月</strong> · MSM 東北內陸</div>
            <div class="rc-style">豐盛花果香，晚熟規律，優雅奢潤</div>
          </div>
        </div>
        <div class="region-card rg-loir">
          <div class="rc-header">
            <span class="rc-icon">🥂</span>
            <span class="rc-name">Champtoceaux ★</span>
            <span class="rc-aop">Silkiness · 雲母片岩+角閃岩</span>
          </div>
          <div class="rc-body">
            <div class="rc-grape">Sur lie <strong>17+ 個月</strong> · <em>唯一位於 MCDLL</em></div>
            <div class="rc-style">絲滑柔順，橙花·柑橘·香料，陳年顯香草</div>
          </div>
        </div>
      </div>
      <div class="region-tip">🔑 考試重點：<strong>Clisson（花崗岩→Power）、Gorges（輝長岩→Length）、Le Pallet（片麻岩→Unctuosity）</strong> 為三大旗艦；Château-Thébaud 陳釀最長（36–48m）；Champtoceaux 唯一不在 MSM 的 Cru。</div>
    </div>`,
    quiz: {
      question: '下列哪個 Cru Communal 是唯一不位於 Muscadet-Sèvre-et-Maine（MSM）的地塊？',
      options: ['Clisson', 'Vallet', 'Champtoceaux', 'Gorges'],
      correct: 2,
      explanation: 'Champtoceaux 是 10 個 Crus Communaux 中唯一位於 Muscadet-Coteaux-de-la-Loire（MCDLL）的地塊，位於 Ancenis 附近羅亞爾河兩岸山丘。土壤以雲母片岩、片麻岩、角閃岩等複合變質岩為主，風格被官方定義為「Silkiness（絲滑）」，最少 17 個月 sur lie。其餘 9 個 Crus 均位於 MSM 範圍內。'
    }
  }
]
