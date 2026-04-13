/**
 * L1-3 波爾多主要葡萄品種基礎
 * 認識波爾多紅白酒的經典葡萄品種（優化版）
 */

export const lessonContent = [
  // ── 課程導讀 ────────────────────────────────────────────
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">如果說土壤和氣候是波爾多的舞台，那麼葡萄品種就是這個舞台上的主角。波爾多最大的特色之一，就是「混釀藝術」——酒莊依據年份、風土與目標風格，將不同葡萄品種巧妙調配，創造出複雜而平衡的佳釀。</p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item"><h4>🍇 掌握六大經典品種</h4><p>Cabernet Sauvignon、Merlot、Cabernet Franc、Sémillon、Sauvignon Blanc、Muscadelle 的特性</p></div>
          <div class="point-item"><h4>🎨 理解混釀藝術</h4><p>學習不同品種在混釀中的角色定位與互補關係</p></div>
          <div class="point-item"><h4>🗺️ 認識品種-產區配對</h4><p>理解左岸以 Cab Sauv 為主、右岸以 Merlot 為主的原因</p></div>
          <div class="point-item"><h4>👃 辨識風味特徵</h4><p>學習每個品種典型的香氣、口感與結構特點</p></div>
        </div>
      </div>
    `
  },

  // ── 章節分隔：紅酒品種 ──────────────────────────────────
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '紅酒品種',
    subtitle: '三大主力：Cab Sauv・Merlot・Cab Franc',
    icon: '🍇',
    background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)'
  },

  // ── 卡本內蘇維濃 ────────────────────────────────────────
  {
    title: '🍇 卡本內蘇維濃（Cabernet Sauvignon）',
    highlights: [
      { id: 1, icon: '🏗️', title: '結構骨架', content: '高單寧、高酸、晚熟，是左岸混釀的骨幹' },
      { id: 2, icon: '⏳', title: '陳年潛能', content: '需瓶陳 5–15 年以上才達飲用頂峰' }
    ],
    blocks: [
      {
        type: 'compare',
        title: '品種速覽',
        headers: ['項目', '特性'],
        rows: [
          ['果實', '小粒・厚皮・晚熟'],
          ['顏色', '深紫紅，濃郁飽滿'],
          ['單寧', '高，提供骨架結構'],
          ['酸度', '中至高，帶來活力'],
          ['主要香氣', '黑醋栗、黑莓、薄荷、青椒（未熟時）'],
          ['陳年香氣', '雪松、煙草、皮革、鉛筆芯'],
          ['主要產區', '左岸梅多克：Pauillac、Saint-Estèphe、Margaux、Saint-Julien']
        ]
      },
      {
        type: 'info',
        title: '為何左岸偏愛 Cab Sauv？',
        content: '梅多克深礫石土壤排水佳、日間大量蓄熱，加速晚熟品種的成熟；貧瘠土壤使葡萄自然降產，風味更加集中。'
      }
    ],
    hasMap: true,
    geojsonPaths: [
      '/geojson/LeftBank/Medoc/Pauillac_AOC.geojson',
      '/geojson/LeftBank/Medoc/Margaux_AOC.geojson',
      '/geojson/LeftBank/Medoc/St-Julien_AOC.geojson',
      '/geojson/LeftBank/Medoc/St-Estephe_AOC.geojson',
      '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',
      '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson'
    ],
    quiz: {
      question: '為什麼卡本內蘇維濃在波爾多左岸表現最佳？',
      options: [
        '左岸降雨量高，適合早熟品種',
        '梅多克的礫石排水土壤能加速晚熟品種成熟並集中風味',
        '左岸緯度高，溫度較低',
        '卡本內蘇維濃只在左岸才能生長'
      ],
      correct: 1,
      explanation: '梅多克礫石土壤排水佳、蓄熱強，有助晚熟的 Cab Sauv 達充分成熟；貧瘠土壤同時降低產量，使風味更集中。'
    }
  },

  // ── 梅洛 ────────────────────────────────────────────────
  {
    title: '🍷 梅洛（Merlot）',
    highlights: [
      { id: 1, icon: '🕊️', title: '柔順圓潤', content: '早熟品種，單寧絲滑，是右岸混釀的靈魂' },
      { id: 2, icon: '🍫', title: '親和風格', content: '李子、巧克力調，年輕即可享用' }
    ],
    blocks: [
      {
        type: 'compare',
        title: '品種速覽',
        headers: ['項目', '特性'],
        rows: [
          ['果實', '中大粒・薄皮・早熟'],
          ['顏色', '寶石紅，相對較淺'],
          ['單寧', '中等，質地柔順絲滑'],
          ['酸度', '中等，較 Cab Sauv 低'],
          ['主要香氣', '李子、紅/黑櫻桃、巧克力、咖啡'],
          ['陳年香氣', '香草、果乾、煙草'],
          ['主要產區', '右岸：Pomerol（Pétrus 幾近 100% Merlot）、Saint-Émilion']
        ]
      },
      {
        type: 'info',
        title: '為何右岸偏愛 Merlot？',
        content: '右岸黏土保水性強，能在乾熱年份為薄皮早熟的 Merlot 提供水分；黏土降低了礫石帶來的快速排水，使 Merlot 不因過度乾旱而萎縮。'
      }
    ],
    hasMap: true,
    geojsonPaths: [
      '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',
      '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson'
    ],
    quiz: {
      question: '梅洛葡萄品種的主要特點是什麼？',
      options: [
        '高單寧，晚熟，需長時間陳年',
        '柔順圓潤，早熟，較早達適飲期',
        '高酸度，草本氣息強烈',
        '深色濃郁，結構極強'
      ],
      correct: 1,
      explanation: 'Merlot 是早熟品種，果實較大皮薄，單寧中等、口感柔順圓潤，適合年輕享用，是波爾多右岸調配酒的核心角色。'
    }
  },

  // ── 卡本內弗朗 ──────────────────────────────────────────
  {
    title: '🌿 卡本內弗朗（Cabernet Franc）',
    highlights: [
      { id: 1, icon: '🌸', title: '優雅花香', content: '紫羅蘭是標誌，草本與花香兼備，風格精緻' },
      { id: 2, icon: '🔑', title: '調配關鍵', content: '右岸配角提升酸度；左岸配角增添花香與精緻感' }
    ],
    blocks: [
      {
        type: 'compare',
        title: '品種速覽',
        headers: ['項目', '特性'],
        rows: [
          ['果實', '中等粒・中等皮厚・中熟'],
          ['顏色', '中等深紅'],
          ['單寧', '中等，質地優雅細緻'],
          ['酸度', '較高，帶來清新感'],
          ['主要香氣', '覆盆子、紫羅蘭、青椒、香料'],
          ['陳年香氣', '煙草、土壤、乾燥花草'],
          ['主要產區', '右岸 Saint-Émilion（如 Cheval Blanc 約 60% Cab Franc）、左岸調配']
        ]
      },
      {
        type: 'misconception',
        content: '「Cabernet Franc 是次等品種」→ 在聖愛美濃它可擔綱主角，在寒涼年份比 Cab Sauv 更易達到成熟，帶來不可替代的紫羅蘭香料層次。'
      }
    ],
    quiz: {
      question: '卡本內弗朗最典型的標誌性香氣是？',
      options: ['黑醋栗與雪松', '李子與巧克力', '紫羅蘭與覆盆子', '蜂蜜與杏乾'],
      correct: 2,
      explanation: 'Cabernet Franc 以紫羅蘭花香和覆盆子紅果調最具辨識度，搭配草本香料氣息，風格優雅精緻，是右岸重要的芳香提升品種。'
    }
  },

  // ── 章節分隔：白酒品種 ──────────────────────────────────
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '白酒品種',
    subtitle: '三大白酒品種：SB・Sémillon・Muscadelle',
    icon: '🤍',
    background: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)'
  },

  // ── 白蘇維濃 ────────────────────────────────────────────
  {
    title: '🤍 白蘇維濃（Sauvignon Blanc）',
    highlights: [
      { id: 1, icon: '🍋', title: '清脆活潑', content: '高酸、柑橘青草調，白酒骨架的來源' },
      { id: 2, icon: '🌿', title: '香氣鮮明', content: '青草、番石榴、白醋栗，風格直接易辨識' }
    ],
    blocks: [
      {
        type: 'compare',
        title: '品種速覽',
        headers: ['項目', '特性'],
        rows: [
          ['果實', '小粒・薄皮・中早熟'],
          ['顏色', '淺檸檬至淡金黃'],
          ['酸度', '高，帶來清脆活力'],
          ['主要香氣', '青草、番石榴、白醋栗、接骨木花、葡萄柚'],
          ['釀造方式', '不鏽鋼保留清新果香 / 橡木桶增添複雜度'],
          ['主要產區', 'Pessac-Léognan（頂級干白）、Graves、Entre-Deux-Mers']
        ]
      },
      {
        type: 'info',
        title: '調配中的角色',
        content: '干型白酒中提供酸度骨架與清新果香；在蘇岱甜酒中與 Sémillon 互補，以活力平衡濃郁甜感。'
      }
    ],
    hasMap: true,
    geojsonPaths: [
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson',
      '/geojson/LeftBank/Graves/Graves_AOC.geojson',
      '/geojson/Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson'
    ],
    quiz: {
      question: '白蘇維濃在波爾多白酒調配中最主要的貢獻是？',
      options: ['提供甜度和圓潤酒體', '增加花香和香料氣息', '提供酸度骨架和清新感', '增加酒精度與濃郁度'],
      correct: 2,
      explanation: '白蘇維濃以高酸度和清新的柑橘/青草果香著稱，為調配酒提供骨架結構和活潑的口感，是波爾多白酒清新風格的主要來源。'
    }
  },

  // ── 賽美容 + 密思卡岱 ───────────────────────────────────
  {
    title: '🍯 賽美容（Sémillon）＋ 🌸 密思卡岱（Muscadelle）',
    highlights: [
      { id: 1, icon: '🍯', title: '賽美容', content: '薄皮易感染貴腐菌，是蘇岱甜酒的靈魂；干白中增添酒體' },
      { id: 2, icon: '🌸', title: '密思卡岱', content: '少量添加，賦予玫瑰花、橙花的精緻花香層次' }
    ],
    blocks: [
      {
        type: 'compare',
        title: 'Sémillon 速覽',
        headers: ['項目', '特性'],
        rows: [
          ['果實', '中等粒・薄皮・中晚熟（易感染貴腐菌）'],
          ['顏色', '金黃色，陳年後更深'],
          ['酸度', '中低，質地豐潤油滑'],
          ['主要香氣', '蜂蜜、白桃、杏桃、無花果'],
          ['陳年香氣', '堅果、奶油、烤麵包、蜜蠟'],
          ['主要產區', 'Sauternes / Barsac（一級貴腐甜酒）、Graves 干白']
        ]
      },
      {
        type: 'compare',
        title: 'Muscadelle 速覽',
        headers: ['項目', '比例與貢獻'],
        rows: [
          ['種植比例', '通常僅 5–10%，使用量少'],
          ['香氣特徵', '玫瑰花、橙花，慕絲卡系花香'],
          ['調配功能', '精緻化香氣層次，延長餘韻'],
          ['適用酒款', '干型白酒與甜型酒皆可使用']
        ]
      }
    ],
    hasMap: true,
    geojsonPaths: [
      '/geojson/Sauternais/Sauternes_AOC.geojson',
      '/geojson/Sauternais/Barsac_AOC.geojson',
      '/geojson/LeftBank/Graves/Pessac-Leognan_AOC.geojson'
    ],
    quiz: {
      question: 'Sémillon（賽美容）成為蘇岱貴腐甜酒主要品種的最關鍵原因是？',
      options: [
        '高酸度使甜酒保持新鮮',
        '薄皮易被貴腐菌（Botrytis cinerea）感染，濃縮糖分與風味',
        '晚熟特性使葡萄積累更多糖分',
        '顏色最深，適合甜酒的金黃色澤'
      ],
      correct: 1,
      explanation: 'Sémillon 薄皮容易受到貴腐菌（Noble Rot）侵染，使水分蒸發、糖分及香氣高度濃縮，是蘇岱/巴薩克貴腐甜酒風格的核心物質基礎。'
    }
  },

  // ── 香氣家族互動輪 ──────────────────────────────────────
  {
    title: '🌀 香氣家族互動輪',
    highlights: [
      { id: 1, icon: '🌀', title: '互動探索', content: '點選家族高亮，滑過顯示筆記；支援搜尋過濾' },
      { id: 2, icon: '🔎', title: '從家族到細節', content: '先定位大方向，再收斂到具體香氣筆記' }
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
          { name: '青椒', examples: ['青梗味'], notes: '成熟度不足或 Cab Franc 特徵' },
          { name: '薄荷', examples: ['月桂葉'], notes: 'Cabernet 家族常見' }
        ]},
        { name: '花香', color: '#a855f7', items: [
          { name: '紫羅蘭', examples: [], notes: 'Cabernet Franc 標誌性香氣' },
          { name: '乾花', examples: [], notes: '熟成年份常見' }
        ]},
        { name: '柑橘/核果', color: '#f59e0b', items: [
          { name: '檸檬', examples: ['葡萄柚'], notes: 'Sauvignon Blanc 清脆調' },
          { name: '白桃', examples: [], notes: 'Sémillon 油潤感' }
        ]},
        { name: '蜂蜜/果乾', color: '#eab308', items: [
          { name: '蜂蜜', examples: [], notes: '甜酒與熟成 Sémillon' },
          { name: '杏乾', examples: ['無花果乾'], notes: '貴腐濃縮風味' }
        ]},
        { name: '桶味/香料', color: '#b45309', items: [
          { name: '雪松', examples: ['烤麵包'], notes: '左岸常見第三類香氣' },
          { name: '香草', examples: ['甜香料'], notes: '橡木桶烘烤影響' }
        ]}
      ]
    }
  },

  // ── 章節分隔：調配與辨識 ────────────────────────────────
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '調配與辨識',
    subtitle: '混釀比例・風格光譜・快速辨識技巧',
    icon: '🎨',
    background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)'
  },

  // ── 混釀比例速查表 ──────────────────────────────────────
  {
    title: '典型混釀比例速查',
    highlights: [
      { id: 1, icon: '🧪', title: '左岸 vs 右岸', content: '左岸以 Cab Sauv 為骨架；右岸以 Merlot 為靈魂' },
      { id: 2, icon: '📝', title: '記憶口訣', content: '左Cab骨架・右Mer柔沙；白蘇清脆・賽美豐潤' }
    ],
    blocks: [
      {
        type: 'compare',
        headers: ['風格', '主力品種', '典型比例', '記憶關鍵字'],
        rows: [
          ['左岸紅（梅多克/佩薩克）', 'Cabernet Sauvignon', 'CS 60–80% ｜ Merlot 15–35% ｜ CF 5–15%', '「骨架」強勁，需瓶陳'],
          ['右岸紅（聖愛美濃/龐美侯）', 'Merlot', 'Merlot 60–90% ｜ CF 10–30% ｜ CS 少量或無', '「柔沙」圓潤，較早飲'],
          ['干型白（格拉夫/兩海之間）', 'Sauvignon Blanc', 'SB 60–80% ｜ Sémillon 20–40% ｜ Musc 0–10%', '「清脆」骨架，Sémi 豐潤'],
          ['貴腐甜酒（蘇岱/巴薩克）', 'Sémillon', 'Sémillon 60–90% ｜ SB 10–30% ｜ Musc 5–15%', '「豐潤」蜂蜜，甜酒靈魂']
        ]
      },
      {
        type: 'info',
        title: '一句話口訣',
        content: '左Cab骨架、右Mer柔沙；白蘇清脆、賽美豐潤。年份差異時，比例微調求平衡。'
      }
    ],
    quiz: {
      question: '波爾多右岸酒款主要以哪個葡萄品種為主導？',
      options: ['卡本內蘇維濃', '梅洛', '卡本內弗朗', '白蘇維濃'],
      correct: 1,
      explanation: '波爾多右岸（聖愛美濃、龐美侯等）以 Merlot 為主導品種，通常佔 60–90%，創造出柔順優雅、早期適飲的酒款風格。'
    }
  },

  // ── 風格光譜互動 ────────────────────────────────────────
  {
    title: '風格光譜（互動）',
    highlights: [
      { id: 1, icon: '📈', title: '三軸定位', content: '酒體・單寧・酸度一眼看懂四大波爾多風格' },
      { id: 2, icon: '🌤️', title: '年份對比', content: '偏暖/偏涼一鍵切換，對比風格差異' }
    ],
    component: 'StyleSpectrum',
    componentProps: {
      defaultKey: 'left-red',
      defaultCompare: true,
      defaultCompareKey: 'right-red',
      presets: [
        { key: 'left-red',  label: '左岸紅',  axes: { body: 7.5, tannin: 8.0, acidity: 6.0 } },
        { key: 'right-red', label: '右岸紅',  axes: { body: 6.5, tannin: 6.0, acidity: 6.0 } },
        { key: 'dry-white', label: '干型白',  axes: { body: 4.5, tannin: 0.0, acidity: 7.5 } },
        { key: 'sweet',     label: '貴腐甜',  axes: { body: 8.0, tannin: 0.0, acidity: 5.0 } }
      ],
      yearAdjust: {
        normal: { body: 0, tannin: 0, acidity: 0 },
        'left-red':  { warm: { body: 0.5, tannin: 0.5, acidity: -0.3 }, cool: { body: -0.4, tannin: -0.3, acidity: 0.4 } },
        'right-red': { warm: { body: 0.4, tannin: 0.3, acidity: -0.2 }, cool: { body: -0.3, tannin: -0.2, acidity: 0.3 } },
        'dry-white': { warm: { body: 0.2, tannin: 0.0, acidity: -0.6 }, cool: { body: -0.2, tannin: 0.0, acidity: 0.7 } },
        sweet:       { warm: { body: 0.3, tannin: 0.0, acidity: -0.3 }, cool: { body: -0.2, tannin: 0.0, acidity: 0.3 } }
      }
    }
  },

  // ── 四大風格快速比較 ────────────────────────────────────
  {
    title: '四大風格快速比較',
    highlights: [
      { id: 1, icon: '🧭', title: '快速定位', content: '用酸度/單寧/適飲期三個維度幫你區分四大波爾多風格' }
    ],
    blocks: [
      {
        type: 'compare',
        headers: ['維度', '左岸紅', '右岸紅', '干型白', '貴腐甜'],
        rows: [
          ['酒體', '中高→飽滿', '中至中高', '輕至中等', '飽滿濃郁'],
          ['單寧', '中高～高（明顯）', '中等（細緻）', '無', '無'],
          ['酸度', '中等', '中等', '中高（清脆）', '中等（甜度平衡）'],
          ['香氣主調', '黑醋栗・雪松・煙草', '李子・紅果・花香', '青草・柑橘・白花', '蜂蜜・杏乾・貴腐風味'],
          ['適飲期', '需瓶陳（較晚飲）', '較早適飲', '年輕清新', '可長期陳年']
        ]
      }
    ]
  },

  // ── 年份對調配的影響 ────────────────────────────────────
  {
    title: '年份氣候如何影響調配比例？',
    highlights: [
      { id: 1, icon: '☀️', title: '溫暖年份', content: 'Cab Sauv 成熟更佳，比例可上調；白酒提高 SB 比例保清新' },
      { id: 2, icon: '🌧️', title: '涼爽年份', content: 'Merlot 較早熟更有優勢；Cab Franc 提供酸度支撐' }
    ],
    blocks: [
      {
        type: 'compare',
        headers: ['年份類型', '紅酒調配策略', '白酒調配策略'],
        rows: [
          ['溫暖年份（如 2015、2018）', 'Cab Sauv 比例可上調；單寧圓潤，結構佳', '提高 SB 比例，保留清新感；避免過熟'],
          ['涼爽/困難年份（如 2013）', '增加 Merlot 與 Cab Franc（成熟度更佳）；嚴格篩選', '提高 Sémillon 比例，增添酒體與豐潤感']
        ]
      },
      {
        type: 'info',
        title: '為何波爾多採用混釀而非單一品種？',
        content: '波爾多位於北緯 45°，年份氣候差異大。多品種混釀是「風險分散」策略——不同成熟期與氣候耐受度確保每年都能調出平衡酒款。'
      }
    ]
  },

  // ── 聞香辨識技巧 ────────────────────────────────────────
  {
    title: '品種辨識：聞香步驟與香氣快查',
    highlights: [
      { id: 1, icon: '👃', title: '階段式聞香', content: '不旋杯→旋杯→近聞，逐步解碼香氣層次' },
      { id: 2, icon: '🔗', title: '香氣→品種', content: '黑醋栗＋草本→CS；李子＋巧克力→Merlot；紫羅蘭→CF' }
    ],
    blocks: [
      {
        type: 'steps',
        title: '系統性聞香步驟',
        steps: [
          { text: '不旋杯先聞：最揮發的輕盈香氣（花香、青草）' },
          { text: '旋杯後近聞：主要果香家族（黑果/紅果/柑橘）' },
          { text: '遠近切換：遠聞定家族大方向，近聞找細節筆記' },
          { text: '分辨三層次：Primary（葡萄本香）／Secondary（酵母工藝）／Tertiary（熟成桶陳）' },
          { text: '回推品種：黑醋栗＋草本→Cab Sauv；李子＋巧克力→Merlot；紫羅蘭→Cab Franc；蜂蜜＋柑橘→Sémi＋SB 白酒' }
        ]
      },
      {
        type: 'compare',
        title: '香氣→品種快查表',
        headers: ['聞到的香氣', '最可能的品種'],
        rows: [
          ['黑醋栗・薄荷・雪松', 'Cabernet Sauvignon（左岸）'],
          ['李子・紅櫻桃・巧克力', 'Merlot（右岸）'],
          ['紫羅蘭・覆盆子・青椒', 'Cabernet Franc'],
          ['青草・葡萄柚・接骨木花', 'Sauvignon Blanc'],
          ['蜂蜜・白桃・奶油・蜜蠟', 'Sémillon（熟成或甜酒）'],
          ['玫瑰花・橙花香', 'Muscadelle（調配少量）']
        ]
      }
    ]
  },

  // ── 常見迷思澄清 ────────────────────────────────────────
  {
    title: '⚠️ 常見混淆點快速澄清',
    highlights: [
      { id: 1, icon: '❗', title: '品種 ≠ 絕對風格', content: '品種特性是傾向，氣候、成熟度、釀造才決定最終表現' }
    ],
    blocks: [
      { type: 'misconception', content: '「卡本內蘇維濃 ＝ 青椒味」→ 青椒（吡嗪）來自成熟度不足；充分成熟的 Cab Sauv 以黑醋栗、雪松為主，青椒退為背景。' },
      { type: 'misconception', content: '「卡本內弗朗是次等品種」→ Cab Franc 在 Saint-Émilion（如 Cheval Blanc）能擔綱主角，紫羅蘭花香與優雅線條是其不可取代性。' },
      { type: 'misconception', content: '「右岸 ＝ 梅洛單一品種」→ 右岸多為梅洛主導混釀，Cab Franc 常扮演提酸增香的關鍵配角。' },
      { type: 'misconception', content: '「蘇岱 ＝ 只是晚收甜白」→ 蘇岱的核心是貴腐菌（Botrytis cinerea）帶來的風味濃縮，不只是晚收糖分累積。' },
      { type: 'misconception', content: '「兩海之間只做白酒」→ Entre-Deux-Mers AOC 是干白專屬，但區內地塊可在 Bordeaux AOC 名義下生產紅酒。' }
    ],
    quiz: {
      question: '以下哪一個搭配最貼近右岸紅酒的典型風格？',
      options: [
        '高單寧＋黑醋栗＋晚熟需長陳',
        '中等單寧＋李子紅果＋較早適飲',
        '高酸度＋青草柑橘＋清脆口感',
        '蜂蜜杏乾＋濃潤甜感＋長熟能力'
      ],
      correct: 1,
      explanation: '右岸以 Merlot 為主導，典型是李子與紅果調、單寧圓潤絲滑、較早適飲；高單寧長陳是左岸 Cab Sauv 主導的特徵。'
    }
  },

  // ── 結束頁 ──────────────────────────────────────────────
  {
    type: 'end',
    title: '課程完成',
    achievement: 'L1-3 主要葡萄品種',
    description: '恭喜完成波爾多主要葡萄品種學習！您已掌握六大品種的特性、香氣辨識技巧，以及左岸右岸混釀比例背後的邏輯。',
    skills: [
      '識別 Cabernet Sauvignon、Merlot、Cabernet Franc 的香氣與結構特徵',
      '識別 Sauvignon Blanc、Sémillon、Muscadelle 的風味特性',
      '理解左岸（Cab Sauv 主導）與右岸（Merlot 主導）混釀邏輯',
      '掌握貴腐甜酒（蘇岱/巴薩克）的品種組成與特色',
      '應用香氣線索回推品種與產區'
    ],
    nextSteps: [
      {
        action: '鞏固記憶',
        items: [
          '默寫六大品種的核心香氣筆記',
          '用「左Cab骨架・右Mer柔沙；白蘇清脆・賽美豐潤」口訣複習混釀比例',
          '品鑑一款左岸與一款右岸紅酒，感受風格差異'
        ]
      },
      {
        action: '進入下一課',
        items: ['L1-4：波爾多分級制度——1855 年分級、聖愛美濃分級與 Pomerol 的特殊地位']
      }
    ]
  },

  // ====== inject-bordeaux-quiz ======
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "🧠 知識檢測",
        "isFinalExam": false,
        "passScore": 70,
        "questions": [
          {
            "type": "single",
            "question": "波爾多左岸最主要的紅葡萄品種是？",
            "options": [
              "A. Merlot",
              "B. Cabernet Franc",
              "C. Cabernet Sauvignon",
              "D. Petit Verdot"
            ],
            "correct": 2,
            "explanation": "Cabernet Sauvignon 是波爾多左岸梅多克和格拉夫的主導品種，以高單寧、高酸、深色和長陳年潛力著稱，在礫石排水良好的土壤中表現最佳。"
          },
          {
            "type": "single",
            "question": "波爾多右岸最主要的葡萄品種是？",
            "options": [
              "A. Cabernet Sauvignon",
              "B. Merlot",
              "C. Petit Verdot",
              "D. Malbec"
            ],
            "correct": 1,
            "explanation": "Merlot 統治右岸（波美侯、聖愛美濃），在黏土和石灰岩土壤上表現卓越，比 Cabernet Sauvignon 更早熟、單寧更柔，口感圓潤豐盈，是世界種植面積最廣的紅葡萄品種之一。"
          },
          {
            "type": "multiple",
            "question": "波爾多的主要紅葡萄品種包括哪些？（多選）",
            "options": [
              "A. Cabernet Sauvignon",
              "B. Merlot",
              "C. Cabernet Franc",
              "D. Syrah"
            ],
            "correct": [
              0,
              1,
              2
            ],
            "explanation": "Cabernet Sauvignon、Merlot 和 Cabernet Franc 都是波爾多允許的紅葡萄品種。Syrah/Shiraz 是隆河谷地的品種，波爾多 AOC 規範中不允許使用。另有少量 Petit Verdot 和 Malbec。"
          },
          {
            "type": "single",
            "question": "波爾多主要白葡萄品種包含哪兩種？",
            "options": [
              "A. Chardonnay 和 Sauvignon Blanc",
              "B. Sauvignon Blanc 和 Sémillon",
              "C. Riesling 和 Gewürztraminer",
              "D. Viognier 和 Roussanne"
            ],
            "correct": 1,
            "explanation": "Sauvignon Blanc（帶清爽草本香）和 Sémillon（圓潤蠟質感，陳年後發展出複雜度）是波爾多最重要的白葡萄品種，在格拉夫和蘇玳都有頂尖表現，蘇玳更以 Sémillon 的貴腐甜酒聞名。"
          },
          {
            "type": "single",
            "question": "為什麼波爾多採用「調配（Blending）」而非單一品種釀酒？",
            "options": [
              "A. 法規禁止使用單一品種",
              "B. 調配可以平衡不同品種的優缺點，提升複雜度和穩定性",
              "C. 單一品種在波爾多根本無法成熟",
              "D. 這是現代派的新趨勢，傳統上並不如此"
            ],
            "correct": 1,
            "explanation": "波爾多採用多品種調配（所謂「波爾多調配」）是因為：不同品種的成熟時間、酸度、單寧、香氣各不相同，調配可取長補短；也讓酒莊在年份差異較大的情況下仍能維持穩定風格。"
          }
        ]
      }
    }
  }
]

export default lessonContent


