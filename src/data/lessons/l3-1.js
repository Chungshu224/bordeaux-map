// L3-1: 氣候變遷對波爾多的影響與應對
// 分析全球氣候變遷如何重塑波爾多葡萄酒業
// Updated: 2025-12-30

export const l31Content = [
  // 課程導讀
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          氣候變遷已成為波爾多葡萄酒產業面臨的最重大挑戰。過去50年，年平均氣溫上升了1.7°C，採收期提前10-15天，降雨模式劇烈變化。這些改變不僅影響葡萄品質，更可能重塑整個產區的格局。
        </p>

        <p class="intro-context">
          本課程將帶您深入了解氣候變遷的科學證據、對葡萄種植與釀酒的具體影響，以及 Château Lafite、Château Margaux 等頂級酒莊如何透過創新策略應對這一全球性挑戰。從精準農業到新品種試驗，從水資源管理到可持續發展，探索波爾多的適應之路。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>📊 掌握氣候變化的科學數據</h4>
            <p>理解過去50年波爾多溫度上升1.7°C、採收期提前、極端天氣增加等關鍵趨勢與影響</p>
          </div>

          <div class="point-item">
            <h4>🍇 分析對葡萄生長的影響</h4>
            <p>學習溫度、降雨如何改變生長週期、成熟度、酸度平衡，以及對品種適應性的挑戰</p>
          </div>

          <div class="point-item">
            <h4>🏰 了解頂級酒莊的應對策略</h4>
            <p>探索名莊如何透過品種試驗、葉幕管理、精準灌溉等創新技術應對氣候挑戰</p>
          </div>

          <div class="point-item">
            <h4>🗺️ 評估產區格局的重塑</h4>
            <p>分析溫度上升如何改變產區界限、影響風土特性，以及對列級莊制度的衝擊</p>
          </div>

          <div class="point-item">
            <h4>🌱 理解可持續發展的核心作用</h4>
            <p>掌握有機認證、碳中和計畫、生物多樣性保護等永續實踐在氣候應對中的重要性</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將全面理解氣候變遷如何重塑波爾多葡萄酒業，以及這個傳統產區如何在保持經典風格的同時，勇敢擁抱創新以應對未來挑戰。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>35分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🌡️'
  },

  // ========== 第一章：氣候變遷的科學證據 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '氣候變遷的科學證據',
    subtitle: '數據、趨勢與觀測',
    icon: '📊',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '波爾多半個世紀的溫度變化',
    content: [
      {
        subtitle: '年均溫度上升趨勢',
        text: '根據波爾多氣象站的長期監測數據，自1970年至2020年，該地區年平均氣溫上升了約1.7°C。特別是1990年代以後，升溫速度明顯加快。',
        highlight: '關鍵數據：1970年基準溫度12.8°C → 2020年達到14.5°C'
      },
      {
        subtitle: '生長季節的顯著變化',
        text: '溫暖的氣候使葡萄生長季（4月-10月）平均延長了15-20天。更值得注意的是，採收期普遍提前了10-15天，這在以精確把握採收時機而聞名的波爾多是革命性的變化。',
        highlight: '1980年代平均採收日期：9月28日 → 2010年代：9月15日'
      },
      {
        subtitle: '極端天氣事件頻率增加',
        text: '不僅平均溫度上升，極端高溫事件（超過35°C）的頻率也顯著增加。同時，降雨變得更加不穩定和極端化。',
        highlight: '熱浪天數：1970年代年均5天 → 2010年代年均15天'
      }
    ]
  },

  {
    type: 'chart',
    title: '波爾多溫度變化趨勢（1970-2020）',
    chartType: 'line',
    description: '年平均溫度的長期演變',
    data: {
      labels: ['1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
      datasets: [
        {
          label: '年平均溫度 (°C)',
          data: [12.8, 12.9, 13.0, 13.1, 13.3, 13.5, 13.7, 13.9, 14.1, 14.3, 14.5],
          color: '#FF6B6B'
        }
      ]
    },
    insights: [
      '1970-1990：緩慢升溫期，20年上升約0.5°C',
      '1990-2010：加速期，20年上升約0.8°C',
      '2010-2020：快速升溫，10年上升約0.4°C',
      '整體趨勢：非線性加速上升，且無逆轉跡象'
    ]
  },

  {
    type: 'statistics',
    title: '關鍵氣候指標變化',
    stats: [
      {
        indicator: '年均溫度',
        past: '12.8°C (1970s)',
        present: '14.5°C (2020s)',
        change: '+1.7°C',
        impact: '高'
      },
      {
        indicator: '生長季天數',
        past: '180天',
        present: '195-200天',
        change: '+15-20天',
        impact: '高'
      },
      {
        indicator: '採收日期',
        past: '9月28日',
        present: '9月15日',
        change: '提前13天',
        impact: '極高'
      },
      {
        indicator: '熱浪天數',
        past: '5天/年',
        present: '15天/年',
        change: '+200%',
        impact: '高'
      },
      {
        indicator: '年降雨量',
        past: '900mm',
        present: '850mm',
        change: '-50mm',
        impact: '中'
      }
    ]
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：氣候數據',
    question: '根據科學數據，波爾多地區過去50年年平均溫度上升了多少？',
    options: [
      '約0.5°C',
      '約1.0°C',
      '約1.7°C',
      '約2.5°C'
    ],
    correct: 2,
    explanation: '根據波爾多氣象站的長期監測，1970年至2020年間年平均溫度上升了約1.7°C。雖然看似不大，但這對葡萄種植和葡萄酒品質產生了深遠影響。'
  },

  {
    type: 'comparison',
    title: '經典年份對比：1982 vs 2020',
    subtitle: '兩個偉大年份的氣候差異',
    items: [
      {
        label: '1982年（傳統氣候典範）',
        icon: '🍇',
        metrics: [
          { name: '採收日期', value: '9月底至10月初' },
          { name: '生長季均溫', value: '17.5°C' },
          { name: '降雨量', value: '650mm（分布均勻）' },
          { name: '糖度達標', value: '相對緩慢成熟' },
          { name: '酸度', value: '天然平衡（偏高）' },
          { name: '潛在酒精度', value: '12.5-13%' }
        ],
        style: '經典優雅、平衡感極佳、陳年潛力長'
      },
      {
        label: '2020年（現代氣候典範）',
        icon: '🌡️',
        metrics: [
          { name: '採收日期', value: '9月中旬' },
          { name: '生長季均溫', value: '19.2°C' },
          { name: '降雨量', value: '550mm（集中降雨）' },
          { name: '糖度達標', value: '快速成熟' },
          { name: '酸度', value: '需管理性保留' },
          { name: '潛在酒精度', value: '13.5-14%' }
        ],
        style: '果味濃郁、酒體飽滿、需控制平衡'
      }
    ],
    conclusion: '兩個年份都是偉大年份，但氣候條件和葡萄酒風格已有明顯差異。現代釀酒師需要更多技術干預來保持波爾多的經典風格。'
  },

  // ========== 第二章：對葡萄種植的影響 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '對葡萄種植的多維影響',
    subtitle: '從葡萄園到酒杯的連鎖反應',
    icon: '🍇',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '氣候變化對葡萄生理的影響',
    content: `<div class="impact-overview">
  <h3>四大核心影響面向</h3>
  <p>氣候變遷深刻改變了葡萄從生長到成熟的每個階段，對葡萄生理機能產生多維度影響：</p>
  <ul class="impact-list">
    <li><strong>糖分累積加速</strong>：溫度升高加快光合作用，糖分積累速度提升12-15%</li>
    <li><strong>酸度平衡挑戰</strong>：高溫導致蘋果酸快速降解，威脅酒款新鮮度</li>
    <li><strong>酚類成熟複雜化</strong>：理想採收窗口從7-10天縮短至3-5天</li>
    <li><strong>水分脅迫加劇</strong>：降雨減少加上高溫蒸散，藤蔓壓力增大</li>
  </ul>

  <h3>糖、酸、酚類成熟的平衡挑戰</h3>
  <p>傳統波爾多釀酒哲學追求糖度、酸度、酚類（單寧與花青素）的完美平衡。氣候變化使這三者的成熟時間點出現分離：</p>
  <div class="highlight-box">
    <strong>關鍵問題</strong>：當糖分已達理想水平時，酸度可能過低，而酚類可能尚未完全成熟；或反之，等待酚類成熟時，糖度過高、酸度流失。
  </div>

  <h3>對葡萄酒風格的連鎖影響</h3>
  <p>這些生理變化直接影響最終酒款特質：</p>
  <ul class="impact-list">
    <li><strong>酒精度上升</strong>：從傳統的12.5-13%提升至13.5-14.5%</li>
    <li><strong>酸度結構改變</strong>：清爽感與陳年潛力受到挑戰</li>
    <li><strong>風味特徵轉變</strong>：從新鮮果香轉向成熟果醬、乾果風格</li>
    <li><strong>平衡與優雅度</strong>：波爾多經典的精緻與平衡感面臨考驗</li>
  </ul>

  <h3>釀酒師的應對策略</h3>
  <p>面對這些挑戰，頂級酒莊採取多重策略：</p>
  <ul class="strategy-list">
    <li><strong>精準時機掌控</strong>：分批採收、清晨或夜間採收</li>
    <li><strong>葡萄園管理優化</strong>：調整葉幕結構、控制產量</li>
    <li><strong>水分管理精細化</strong>：合理灌溉（法規允許時）</li>
    <li><strong>技術輔助決策</strong>：使用數據分析確定最佳採收窗口</li>
  </ul>
</div>`
  },

  {
    type: 'content',
    title: '葡萄生理與品質：糖分累積加速',
    content: [
      {
        subtitle: '糖分累積加速',
        text: '溫度升高直接加快光合作用與糖分積累，潛在酒精度從傳統12-12.5%普遍升至13-14%，部分年份甚至>14.5%。',
        details: '影響：更高酒精度可能掩蓋細緻風味，降低平衡與優雅度。',
        highlight: '酒精度12.5%→14% ≈ 糖分累積增加約12%'
      }
    ]
  },

  {
    type: 'content',
    title: '葡萄生理與品質：酸度下降的挑戰',
    content: [
      {
        subtitle: '酸度下降的挑戰',
        text: '高溫加速蘋果酸降解，葡萄天然酸度顯著下降，威脅新鮮感與陳年潛力。',
        details: '應對：更精準採收（分批/夜採），優化葉幕以降溫，保留酸度。',
        highlight: '酸度每下降1 g/L，清爽感與張力明顯減弱'
      }
    ]
  },

  {
    type: 'content',
    title: '葡萄生理與品質：酚類成熟的複雜性',
    content: [
      {
        subtitle: '酚類成熟的複雜性',
        text: '溫暖有利單寧/花青素成熟，但過熱易「過熟」：乾果、果醬、葡萄乾風格。',
        details: '平衡挑戰：糖度、酸度、酚類成熟的最佳交集窗口縮短。',
        highlight: '理想採收窗口由7-10天縮短至3-5天'
      }
    ]
  },

  {
    type: 'content',
    title: '葡萄生理與品質：水分脅迫增加',
    content: [
      {
        subtitle: '水分脅迫增加',
        text: '降雨減少 + 高溫蒸散 → 藤蔓水分壓力升高。適度有利濃縮，過度損害成熟。',
        details: '解法：精準灌溉（法規允許時）、覆蓋作物與覆蓋物、提升土壤碳與團粒結構。',
        highlight: '2019年等乾旱年，部分藤蔓出現成熟停滯現象'
      }
    ]
  },

  {
    type: 'impact-matrix',
    title: '氣候變化對不同葡萄品種的影響',
    description: '各主要品種的敏感度分析',
    varieties: [
      {
        name: 'Cabernet Sauvignon',
        sensitivity: '中等',
        positives: ['晚熟品種受益於延長的生長季', '單寧成熟度提升', '顏色深度增加'],
        negatives: ['潛在酒精度過高', '可能損失優雅感', '需要更多水分管理'],
        adaptation: '調整種植密度、改善灌溉、優化葉幕管理'
      },
      {
        name: 'Merlot',
        sensitivity: '高',
        positives: ['成熟穩定性提高', '果味更豐富'],
        negatives: ['過快成熟風險高', '酸度流失快', '容易過熟'],
        adaptation: '提前採收、增加Cabernet Franc比例、選擇涼爽地塊'
      },
      {
        name: 'Cabernet Franc',
        sensitivity: '低-中',
        positives: ['在溫暖氣候下表現穩定', '保持良好酸度', '增加清爽感'],
        negatives: ['過度成熟時出現植物性風味'],
        adaptation: '調配比例增加，成為應對氣候變化的重要品種'
      },
      {
        name: 'Petit Verdot',
        sensitivity: '低',
        positives: ['過去難以成熟，現在更可靠', '提供結構和香料特徵'],
        negatives: ['在極端炎熱年份可能過快成熟'],
        adaptation: '使用比例逐步增加，特別是在Médoc產區'
      }
    ]
  },

  {
    type: 'content',
    title: '品種分析：Cabernet Sauvignon（CS）',
    content: [
      {
        subtitle: '敏感度',
        text: '中等'
      },
      {
        subtitle: '正面影響',
        keyFactors: ['晚熟受益於生長季延長', '單寧成熟度提升', '顏色深度增加']
      },
      {
        subtitle: '挑戰',
        keyFactors: ['潛在酒精度偏高', '優雅感可能下降', '需強化水分管理']
      },
      {
        subtitle: '適應策略',
        keyFactors: ['調整種植密度與樹勢', '灌溉與覆蓋作物管理', '葉幕降溫與遮蔭']
      }
    ]
  },

  {
    type: 'content',
    title: '品種分析：Merlot',
    content: [
      {
        subtitle: '敏感度',
        text: '高'
      },
      {
        subtitle: '正面影響',
        keyFactors: ['成熟穩定性提升', '果味更豐富']
      },
      {
        subtitle: '挑戰',
        keyFactors: ['過快成熟風險高', '酸度流失快', '容易過熟']
      },
      {
        subtitle: '適應策略',
        keyFactors: ['提前與分批採收', '提高Cabernet Franc比例', '配置於較涼爽與保水佳地塊']
      }
    ]
  },

  {
    type: 'content',
    title: '品種分析：Cabernet Franc（CF）',
    content: [
      {
        subtitle: '敏感度',
        text: '低-中'
      },
      {
        subtitle: '正面影響',
        keyFactors: ['在溫暖條件下表現穩定', '保持良好酸度', '增加清爽與花香感']
      },
      {
        subtitle: '挑戰',
        keyFactors: ['極端炎熱時可能出現草本感', '部分地塊成熟不一']
      },
      {
        subtitle: '適應策略',
        keyFactors: ['提高在調配中的比例', '精細化採收時點', '選擇石灰岩/涼爽地塊']
      }
    ]
  },

  {
    type: 'content',
    title: '品種分析：Petit Verdot（PV）',
    content: [
      {
        subtitle: '敏感度',
        text: '低'
      },
      {
        subtitle: '正面影響',
        keyFactors: ['過去難成熟，現更可靠', '提供結構與香料感']
      },
      {
        subtitle: '挑戰',
        keyFactors: ['極端炎熱年成熟過快', '酒精與單寧管理需拿捏']
      },
      {
        subtitle: '適應策略',
        keyFactors: ['逐步提高比例（尤其左岸）', '針對年份微調萃取', '選擇礫石/排水佳地塊']
      }
    ]
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：葡萄生理',
    question: '氣候變暖對波爾多葡萄酒風格的主要挑戰是什麼？',
    options: [
      '酒精度降低，單寧不足',
      '酒精度提高，酸度降低',
      '顏色變淺，風味變弱',
      '成熟期延後，品質下降'
    ],
    correct: 1,
    explanation: '氣候變暖使糖分累積加快，導致酒精度提高（從傳統12.5%升至13-14%）；同時高溫加速蘋果酸降解，使酸度降低。這威脅到波爾多葡萄酒的經典平衡感和優雅風格，是酒莊面臨的最大挑戰。'
  },

  // ========== 第三章：酒莊的應對策略 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '頂級酒莊的創新應對',
    subtitle: '技術、管理與哲學的全方位革新',
    icon: '🏰',
    background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
  },

  {
    type: 'content',
    title: '案例研究：Château Margaux — 總覽',
    content: [
      {
        subtitle: '酒莊背景',
        text: 'Château Margaux｜1855一級莊，左岸Margaux法定產區的標誌性代表。'
      },
      {
        subtitle: '挑戰',
        text: '在氣候變暖下，維持其典型的優雅、平衡與精緻細節表達。'
      },
      {
        subtitle: '成果',
        keyFactors: [
          '炎熱年份（2003、2009、2018）仍維持平衡感',
          '風格連貫：細緻單寧與花香層次未受稀釋',
          '成為產區氣候適應標桿，市場與評分表現穩健'
        ]
      },
      {
        subtitle: '核心觀點',
        text: '「我們不是對抗氣候，而是在新條件下找到風土的新表達。」— Paul Pontallier'
      }
    ]
  },

  {
    type: 'content',
    title: 'Château Margaux — 葡萄園精細管理',
    content: [
      {
        subtitle: '關鍵作法',
        keyFactors: [
          '行間/株間綠覆蓋：降低土壤溫度、提升持水',
          '葉幕策略：關鍵期保留葉片遮蔭果串',
          '精準滴灌：依土壤含水與藤齡靈活補水',
          '修剪微調：控產以提升濃度與均一成熟'
        ]
      },
      {
        subtitle: '效果',
        highlight: '顯著降低熱浪直擊果串的傷害，維持成熟節奏的穩定性'
      }
    ]
  },

  {
    type: 'content',
    title: 'Château Margaux — 品種配比微調',
    content: [
      {
        subtitle: '方向',
        keyFactors: [
          '提高Cabernet Franc至約12%：在暖年保酸度與花香',
          '增加Petit Verdot至約5%：補充結構與清爽感',
          '微調Merlot：降低過熟風險',
          '維持CS為主（~75%）：確保風格連貫'
        ]
      },
      {
        subtitle: '效果',
        highlight: '暖年仍能保持優雅與平衡，細膩感不流失'
      }
    ]
  },

  {
    type: 'content',
    title: 'Château Margaux — 採收時機與流程',
    content: [
      {
        subtitle: '關鍵作法',
        keyFactors: [
          '分批採收：依地塊成熟度分4-6批',
          '夜間/清晨採收：降溫減氧化',
          '多維度監測：糖度、酸度、酚類成熟度綜合評估',
          '決策窗口縮短：由1週壓縮至3-4天'
        ]
      },
      {
        subtitle: '效果',
        highlight: '更精準掌握平衡點，避免過熟或酸度流失'
      }
    ]
  },

  {
    type: 'content',
    title: 'Château Margaux — 釀造工藝優化',
    content: [
      {
        subtitle: '關鍵作法',
        keyFactors: [
          '精密溫控發酵（±0.5°C）',
          '縮短浸漬避免過度萃取',
          '新桶比例降至60-70%以凸顯果香清爽',
          'SO₂精準管理：保護酸度與新鮮度'
        ]
      },
      {
        subtitle: '效果',
        highlight: '在釀造端進一步精煉，確保細節與優雅呈現'
      }
    ]
  },

  {
    type: 'multi-estate-comparison',
    title: '多個頂級酒莊的應對策略比較',
    description: '不同理念與實踐路徑',
    estates: [
      {
        name: 'Château Latour',
        approach: '科技驅動',
        keyMeasures: ['投資精準農業技術', '實時監測系統', '數據驅動決策'],
        philosophy: '用現代科技精確應對氣候挑戰'
      },
      {
        name: 'Château Palmer',
        approach: '生物動力法',
        keyMeasures: ['有機認證', '生物動力實踐', '增強土壤生命力'],
        philosophy: '通過生態平衡增強葡萄藤韌性'
      },
      {
        name: 'Château Pontet-Canet',
        approach: '有機與馬耕',
        keyMeasures: ['有機認證', '馬匹耕作', '覆蓋作物'],
        philosophy: '傳統與生態相結合的可持續路徑'
      }
    ],
    insight: '頂級酒莊的應對策略各有特色，但都強調因地制宜和長期可持續性'
  },

  // ========== 知識檢測：酒莊應對策略 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：酒莊應對策略',
    questions: [
      {
        question: 'Château Palmer 採用的主要應對策略是什麼？',
        options: [
          '精準農業技術',
          '生物動力法',
          '馬匹耕作',
          '滴灌系統'
        ],
        correct: 1,
        explanation: 'Château Palmer 採用生物動力法（biodynamic）作為應對氣候變遷的策略，通過有機認證、生物動力實踐和增強土壤生命力來增強葡萄藤韌性。'
      },
      {
        question: '頂級酒莊在應對氣候變遷時的共同理念是什麼？',
        options: [
          '完全依賴科技解決問題',
          '因地制宜和長期可持續性',
          '僅關注短期經濟效益',
          '統一採用相同策略'
        ],
        correct: 1,
        explanation: '儘管不同酒莊策略各異（如Latour的科技驅動、Palmer的生物動力法、Pontet-Canet的有機馬耕），但都強調因地制宜和長期可持續性的重要性。'
      }
    ]
  },

  // ========== 第四章：產區格局重塑 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '產區格局的重新洗牌',
    subtitle: '贏家與輸家的分化',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '傳統產區的挑戰與機遇',
    content: [
      {
        subtitle: '左岸Médoc：雙刃劍效應',
        text: '排水極佳的礫石土壤在溫暖年份有助於Cabernet Sauvignon達到完美成熟，但在極端乾旱年份可能面臨嚴重水分脅迫。',
        opportunities: ['Cabernet Sauvignon成熟度更穩定', 'Petit Verdot變得更可靠', '陳年潛力保持優勢'],
        challenges: ['需要投資灌溉設施', '酒精度控制難度增加', '需要更精細的葡萄園管理'],
        verdict: '整體仍保持優勢，但成本和技術要求提高'
      },
      {
        subtitle: '右岸Pomerol & Saint-Émilion：Merlot的挑戰',
        text: '黏土土壤的保水性是優勢，但Merlot早熟特性在高溫下成為風險。過快成熟可能損害品質。',
        opportunities: ['黏土保水性在乾旱年份是優勢', '石灰岩高原保持清爽感', 'Cabernet Franc比例可提高'],
        challenges: ['Merlot過度成熟風險高', '採收窗口極短', '酸度保留難度大'],
        verdict: '需要重大調整，可能改變傳統調配比例'
      },
      {
        subtitle: 'Graves：穩定的表現者',
        text: '礫石與黏土混合的多樣化土壤提供了靈活性，既能排水又能保水。紅白酒都有發展潛力。',
        opportunities: ['土壤多樣性提供緩衝', '白葡萄酒品質提升', '相對平衡的風險'],
        challenges: ['需要因地塊微調策略'],
        verdict: '可能成為氣候變化的受益者'
      },
      {
        subtitle: 'Entre-Deux-Mers：逆襲的機會',
        text: '傳統的"次級產區"因氣候變暖而受益。過去成熟度不足的問題得到解決，開始產出高品質白葡萄酒和紅葡萄酒。',
        opportunities: ['葡萄成熟度顯著提升', '白葡萄酒市場機會大', '土地成本相對低'],
        challenges: ['品牌認知度需要建立', '基礎設施需要升級'],
        verdict: '未來之星，值得關注'
      }
    ]
  },

  {
    type: 'content',
    title: '產區氣候影響評估矩陣',
    content: `
      <div class="regional-impact-matrix">
        <p class="section-description">風險等級與適應能力綜合評估</p>
        
        <div class="region-cards">
          <div class="region-card high-value">
            <h4>🏆 Médoc (左岸)</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value excellent">極高</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value moderate">中-高</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value high">高</span></div>
            </div>
            <div class="outlook">
              <strong>未來展望：</strong>保持優勢，但需持續投資
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>礫石土壤適合CS</li>
                <li>需要灌溉投資</li>
                <li>技術實力強</li>
              </ul>
            </div>
          </div>

          <div class="region-card high-value">
            <h4>💎 Pomerol (右岸)</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value excellent">極高</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value high">高</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value moderate">中</span></div>
            </div>
            <div class="outlook">
              <strong>未來展望：</strong>面臨挑戰，需重大調整
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>Merlot脆弱性</li>
                <li>黏土保水優勢</li>
                <li>規模小限制投資</li>
              </ul>
            </div>
          </div>

          <div class="region-card high-value">
            <h4>⭐ Saint-Émilion (右岸)</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value excellent">極高</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value moderate">中-高</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value high">高</span></div>
            </div>
            <div class="outlook">
              <strong>未來展望：</strong>多樣化土壤提供靈活性
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>石灰岩高原優勢</li>
                <li>CF比例可增加</li>
                <li>分級體系支持創新</li>
              </ul>
            </div>
          </div>

          <div class="region-card medium-value">
            <h4>🌟 Graves</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value high">高</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value moderate">中</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value high">高</span></div>
            </div>
            <div class="outlook">
              <strong>未來展望：</strong>穩定表現，可能提升
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>紅白酒雙優勢</li>
                <li>土壤多樣性</li>
                <li>靠近波爾多市</li>
              </ul>
            </div>
          </div>

          <div class="region-card challenge">
            <h4>⚠️ Sauternes</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value high">高</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value extreme">極高</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value low">低</span></div>
            </div>
            <div class="outlook warning">
              <strong>未來展望：</strong>嚴峻挑戰
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>貴腐菌條件改變</li>
                <li>乾白轉型可能性</li>
                <li>經濟壓力大</li>
              </ul>
            </div>
          </div>

          <div class="region-card opportunity">
            <h4>📈 Entre-Deux-Mers</h4>
            <div class="metrics">
              <div class="metric"><span class="label">當前優勢：</span><span class="value moderate">中</span></div>
              <div class="metric"><span class="label">氣候風險：</span><span class="value low">低</span></div>
              <div class="metric"><span class="label">適應能力：</span><span class="value moderate">中</span></div>
            </div>
            <div class="outlook positive">
              <strong>未來展望：</strong>顯著提升潛力
            </div>
            <div class="key-factors">
              <strong>關鍵因素：</strong>
              <ul>
                <li>成熟度改善</li>
                <li>白酒機會</li>
                <li>價格優勢</li>
              </ul>
            </div>
          </div>
        </div>

        <style>
          .regional-impact-matrix {
            padding: 1rem 0;
          }
          .section-description {
            text-align: center;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .region-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
          }
          .region-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .region-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .region-card h4 {
            color: white;
            margin: 0 0 1rem 0;
            font-size: 1.25rem;
            border-bottom: 2px solid rgba(255,255,255,0.3);
            padding-bottom: 0.5rem;
          }
          .region-card.high-value {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .region-card.medium-value {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          }
          .region-card.challenge {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          }
          .region-card.opportunity {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }
          .metrics {
            background: rgba(255,255,255,0.15);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
          }
          .metric {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            color: white;
          }
          .metric .label {
            font-weight: 500;
          }
          .metric .value {
            font-weight: bold;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.9rem;
          }
          .metric .value.excellent {
            background: rgba(76, 175, 80, 0.9);
          }
          .metric .value.high {
            background: rgba(33, 150, 243, 0.9);
          }
          .metric .value.moderate {
            background: rgba(255, 152, 0, 0.9);
          }
          .metric .value.low {
            background: rgba(244, 67, 54, 0.7);
          }
          .metric .value.extreme {
            background: rgba(183, 28, 28, 0.9);
          }
          .outlook {
            background: rgba(255,255,255,0.2);
            border-radius: 8px;
            padding: 0.75rem;
            margin-bottom: 1rem;
            color: white;
            font-size: 0.95rem;
          }
          .outlook.warning {
            background: rgba(255, 193, 7, 0.3);
          }
          .outlook.positive {
            background: rgba(76, 175, 80, 0.3);
          }
          .key-factors {
            color: white;
          }
          .key-factors strong {
            display: block;
            margin-bottom: 0.5rem;
          }
          .key-factors ul {
            margin: 0;
            padding-left: 1.25rem;
          }
          .key-factors li {
            margin: 0.25rem 0;
            font-size: 0.9rem;
          }
        </style>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🏆',
        title: '頂級產區面臨挑戰',
        content: 'Médoc、Pomerol、Saint-Émilion等頂級產區雖有極高優勢，但需持續投資適應氣候變化'
      },
      {
        id: 2,
        icon: '📈',
        title: '新興產區機會',
        content: 'Entre-Deux-Mers等原本較冷涼的產區，在氣候變暖下可能迎來品質提升的黃金時期'
      }
    ]
  },

  {
    type: 'interactive-quiz',
    title: '知識檢測：產區影響',
    question: '以下哪個波爾多產區可能成為氣候變暖的主要受益者？',
    options: [
      'Pomerol（黏土為主，Merlot主導）',
      'Sauternes（依賴貴腐菌）',
      'Entre-Deux-Mers（傳統涼爽產區）',
      'Médoc（礫石土壤，乾旱風險）'
    ],
    correct: 2,
    explanation: 'Entre-Deux-Mers傳統上因氣候較涼爽而成熟度不足，被視為"次級產區"。氣候變暖使得該產區的葡萄成熟度顯著提升，特別是白葡萄酒品質大幅改善，有望成為"逆襲"的代表。相比之下，Pomerol面臨Merlot過熟挑戰，Sauternes的貴腐菌條件改變，Médoc需要大量灌溉投資。'
  },

  // ========== 第五章：可持續發展之路 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '可持續發展的戰略轉型',
    subtitle: '從被動應對到主動建設',
    icon: '♻️',
    background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
  },

  {
    type: 'content',
    title: '波爾多葡萄酒業的綠色革命',
    content: [
      {
        subtitle: '有機與生物動力法的加速普及',
        text: '2010年，波爾多僅約3%的葡萄園採用有機種植。到2023年，這一比例已提升至超過18%，且每年以2-3個百分點的速度增長。越來越多頂級酒莊獲得有機（AB）或生物動力（Demeter）認證。',
        stats: '2010: 3% → 2015: 8% → 2020: 15% → 2023: 18% → 目標2030: 30%',
        drivers: ['市場需求增加', '環境意識提升', '化學品成本上升', '土壤健康長期效益']
      },
      {
        subtitle: '碳中和的宏偉目標',
        text: '2019年，波爾多葡萄酒行業集體宣布2050年碳中和目標，這是全球主要產區中最雄心勃勃的承諾之一。實現路徑包括減少化學品使用、採用可再生能源、優化物流、增加碳匯等。',
        milestones: ['2025: 減排30%', '2030: 減排50%', '2040: 減排80%', '2050: 碳中和'],
        keyActions: ['太陽能板安裝', '生物質鍋爐', '輕量化酒瓶', '本地化供應鏈']
      },
      {
        subtitle: '水資源的精密管理',
        text: '面對日益頻繁的乾旱，水資源管理從"靠天吃飯"轉向主動管理。建立蓄水池收集冬季雨水、採用精準滴灌、種植覆蓋作物保持土壤濕度、選擇抗旱砧木等措施綜合應用。',
        innovations: ['智能灌溉系統', '土壤濕度傳感器', '覆蓋作物技術', '抗旱砧木研發'],
        challenge: '平衡水分管理與傳統terroir理念的張力'
      },
      {
        subtitle: '生物多樣性的恢復',
        text: '現代單一栽培對生態系統造成壓力。越來越多酒莊在葡萄園周邊保留自然植被帶、建立生態廊道、種植蜜源植物、設置昆蟲旅館和鳥類巢箱，通過引入天敵自然控制害蟲。',
        benefits: ['減少化學農藥使用', '增強生態系統韌性', '改善土壤微生物群', '提升品牌形象'],
        examples: ['Château Pontet-Canet的蜂箱計畫', 'Smith Haut Lafitte的生態走廊']
      }
    ]
  },

  {
    type: 'content',
    title: '波爾多可持續發展認證體系',
    content: `
      <div class="sustainability-certifications">
        <p class="section-description">多層次的環境標準與認證</p>
        
        <div class="certification-cards">
          <div class="cert-card level-entry">
            <div class="cert-header">
              <h4>🌱 HVE (Haute Valeur Environnementale)</h4>
              <span class="level-badge entry">入門級</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 認證要求：</strong>
                <ul>
                  <li>生物多樣性保護</li>
                  <li>植物保護產品減量</li>
                  <li>肥料管理</li>
                  <li>水資源管理</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">波爾多普及率</div>
                    <div class="metric-value">約60%的葡萄園</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">認證成本</div>
                    <div class="metric-value">相對較低</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">市場價值</div>
                    <div class="metric-value">基本環境標準，市場認知度中等</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cert-card level-advanced">
            <div class="cert-header">
              <h4>🍃 Agriculture Biologique (AB)</h4>
              <span class="level-badge advanced">進階級</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 認證要求：</strong>
                <ul>
                  <li>禁用化學合成農藥和化肥</li>
                  <li>3年轉換期</li>
                  <li>嚴格的追溯體系</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">波爾多普及率</div>
                    <div class="metric-value">約18%的葡萄園</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">認證成本</div>
                    <div class="metric-value">中等（轉換期產量可能下降）</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">市場價值</div>
                    <div class="metric-value">歐洲市場高度認可<br><strong>價格溢價 10-20%</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cert-card level-premium">
            <div class="cert-header">
              <h4>⭐ Biodynamie (Demeter)</h4>
              <span class="level-badge premium">最高級</span>
            </div>
            
            <div class="cert-body">
              <div class="requirements">
                <strong>📋 認證要求：</strong>
                <ul>
                  <li>符合有機標準</li>
                  <li>生物動力曆法</li>
                  <li>生物動力配劑</li>
                  <li>整體農場理念</li>
                </ul>
              </div>
              
              <div class="metrics">
                <div class="metric-item">
                  <span class="icon">📊</span>
                  <div>
                    <div class="metric-label">波爾多普及率</div>
                    <div class="metric-value">約3%的葡萄園</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">💰</span>
                  <div>
                    <div class="metric-label">認證成本</div>
                    <div class="metric-value">高（需徹底改變管理方式）</div>
                  </div>
                </div>
                <div class="metric-item">
                  <span class="icon">🏷️</span>
                  <div>
                    <div class="metric-label">市場價值</div>
                    <div class="metric-value">高端市場追捧<br><strong>價格溢價 20-30%+</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trend-note">
          <div class="trend-icon">📈</div>
          <div class="trend-content">
            <strong>發展趨勢：</strong>從HVE向有機和生物動力法的梯度升級
          </div>
        </div>

        <style>
          .sustainability-certifications {
            padding: 1rem 0;
          }
          .section-description {
            text-align: center;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .certification-cards {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          .cert-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .cert-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .cert-card.level-entry {
            border: 3px solid #4CAF50;
          }
          .cert-card.level-advanced {
            border: 3px solid #2196F3;
          }
          .cert-card.level-premium {
            border: 3px solid #9C27B0;
          }
          .cert-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .cert-card.level-entry .cert-header {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          }
          .cert-card.level-advanced .cert-header {
            background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          }
          .cert-card.level-premium .cert-header {
            background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
          }
          .cert-header h4 {
            color: white;
            margin: 0;
            font-size: 1.35rem;
          }
          .level-badge {
            background: rgba(255,255,255,0.3);
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .cert-body {
            padding: 1.5rem;
            background: white;
          }
          .requirements {
            margin-bottom: 1.5rem;
          }
          .requirements strong {
            display: block;
            color: #333;
            margin-bottom: 0.75rem;
            font-size: 1.05rem;
          }
          .requirements ul {
            margin: 0;
            padding-left: 1.5rem;
          }
          .requirements li {
            margin: 0.5rem 0;
            color: #555;
            line-height: 1.6;
          }
          .metrics {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
          }
          .metric-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }
          .metric-item .icon {
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          .metric-label {
            font-weight: 600;
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
          }
          .metric-value {
            color: #333;
            font-size: 1rem;
            line-height: 1.5;
          }
          .metric-value strong {
            color: #f5576c;
          }
          .trend-note {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 1.25rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          }
          .trend-icon {
            font-size: 2rem;
            flex-shrink: 0;
          }
          .trend-content {
            color: #333;
            line-height: 1.6;
          }
          .trend-content strong {
            display: inline;
            color: #d84315;
          }
          @media (max-width: 768px) {
            .cert-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }
            .metrics {
              gap: 0.75rem;
            }
          }
        </style>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🌱',
        title: '三級認證體系',
        content: 'HVE入門(60%) → AB有機(18%) → Demeter生物動力(3%)，形成完整的可持續發展階梯'
      },
      {
        id: 2,
        icon: '💰',
        title: '市場溢價明顯',
        content: '有機認證可獲得10-20%溢價，生物動力認證可達20-30%以上，推動產業升級'
      }
    ]
  },

  // ========== 知識檢測：可持續發展認證 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：可持續發展認證',
    questions: [
      {
        question: '波爾多的三級可持續發展認證體系中，入門級認證是什麼？',
        options: [
          'AB有機認證',
          'HVE環境高價值認證',
          'Demeter生物動力認證',
          'ISO環境管理認證'
        ],
        correct: 1,
        explanation: 'HVE（Haute Valeur Environnementale，環境高價值認證）是入門級認證，目前波爾多約60%的酒莊獲得此認證，形成完整的可持續發展階梯。'
      },
      {
        question: '生物動力認證（Demeter）能為葡萄酒帶來多少市場溢價？',
        options: [
          '5-10%',
          '10-20%',
          '20-30%以上',
          '沒有溢價'
        ],
        correct: 2,
        explanation: 'Demeter生物動力認證是最高級認證，目前僅3%的波爾多酒莊獲得，但可帶來20-30%以上的市場溢價，遠高於有機認證的10-20%溢價。'
      }
    ]
  },

  // ========== 第六章：未來展望 ==========
  {
    type: 'chapter-divider',
    chapter: '6',
    title: '2050年：波爾多的未來圖景',
    subtitle: '三種可能的發展路徑',
    icon: '🔮',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '波爾多2050年三種情境分析',
    content: `
      <div class="future-scenarios">
        <p class="section-description">基於IPCC氣候模型與行業趨勢的預測</p>
        
        <div class="scenario-cards">
          <!-- 樂觀情境 -->
          <div class="scenario-card optimistic">
            <div class="scenario-header">
              <h4>🌿 樂觀情境：適應成功</h4>
              <div class="probability">實現機率：30%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+1.5°C</span>
                <span class="temp-note">（控制在巴黎協定目標內）</span>
              </div>
              
              <div class="conditions">
                <strong>前提條件：</strong>
                <ul>
                  <li>全球溫室氣體排放在2030年前達峰並快速下降</li>
                  <li>可再生能源占比超過80%</li>
                  <li>碳捕捉技術得到大規模應用</li>
                  <li>波爾多葡萄酒業完成綠色轉型</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>影響評估：</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ 產區格局</span>
                  <span class="impact-text">傳統產區格局基本保持，Entre-Deux-Mers等涼爽產區品質提升</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 品種結構</span>
                  <span class="impact-text">品種結構微調即可應對，CF和PV比例適度增加</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 葡萄酒風格</span>
                  <span class="impact-text">通過技術創新保持經典優雅風格，酒精度控制在13-13.5%</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 可持續性</span>
                  <span class="impact-text">50%以上葡萄園獲得有機認證，碳中和目標如期實現</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 市場表現</span>
                  <span class="impact-text">波爾多保持全球頂級產區地位，價格體系穩定</span>
                </div>
              </div>
              
              <div class="conclusion">
                <strong>關鍵挑戰：</strong>需要持續技術投資和管理創新，但在可控範圍內
              </div>
              <div class="likelihood">
                <strong>可行性：</strong>需要全球氣候政策協同，成功機率中等
              </div>
            </div>
          </div>

          <!-- 中等情境 -->
          <div class="scenario-card moderate">
            <div class="scenario-header">
              <h4>⚡ 中等情境：深度調整</h4>
              <div class="probability">實現機率：50%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box warning">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+2-3°C</span>
                <span class="temp-note">（當前政策路徑）</span>
              </div>
              
              <div class="conditions">
                <strong>前提條件：</strong>
                <ul>
                  <li>全球溫室氣體排放到2040年代才達峰</li>
                  <li>極端天氣事件頻率增加50-100%</li>
                  <li>降雨模式顯著改變</li>
                  <li>需要大規模適應性基礎設施投資</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>影響評估：</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ 產區格局</span>
                  <span class="impact-text">產區價值重新洗牌：Entre-Deux-Mers大幅提升，部分傳統優質產區面臨挑戰，Sauternes可能衰落</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 品種結構</span>
                  <span class="impact-text">品種結構重大調整：Merlot比例下降，CF、PV甚至Marselan等新品種比例增加；試驗性引入地中海品種</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 葡萄酒風格</span>
                  <span class="impact-text">風格向更飽滿、更強勁方向演變，酒精度普遍在13.5-14.5%；傳統優雅風格更難保持</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 可持續性</span>
                  <span class="impact-text">有機種植成為主流（>40%），但乾旱管理成本高企</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 市場表現</span>
                  <span class="impact-text">市場分化：頂級酒莊保持地位但投資需求大；中小酒莊壓力增加</span>
                </div>
              </div>
              
              <div class="challenges">
                <strong>關鍵挑戰：</strong>
                <ul>
                  <li>需要引入新品種，可能影響AOC規則和市場認知</li>
                  <li>灌溉需求與水資源緊張的矛盾</li>
                  <li>極端年份頻發，投資回報波動加劇</li>
                  <li>需要重新定義"波爾多風格"</li>
                </ul>
              </div>
              <div class="likelihood">
                <strong>可行性：</strong>當前最可能的發展路徑，需要產業全面變革
              </div>
            </div>
          </div>

          <!-- 悲觀情境 -->
          <div class="scenario-card pessimistic">
            <div class="scenario-header">
              <h4>🔥 悲觀情境：系統性挑戰</h4>
              <div class="probability">實現機率：20%</div>
            </div>
            
            <div class="scenario-body">
              <div class="temperature-box danger">
                <span class="temp-icon">🌡️</span>
                <span class="temp-value">+3-4°C</span>
                <span class="temp-note">（高排放情境）</span>
              </div>
              
              <div class="conditions">
                <strong>前提條件：</strong>
                <ul>
                  <li>全球排放持續增長到2050年代</li>
                  <li>極端乾旱與洪水成為新常態</li>
                  <li>部分產區出現系統性風險</li>
                  <li>全球葡萄酒版圖重構</li>
                </ul>
              </div>
              
              <div class="impacts">
                <strong>影響評估：</strong>
                <div class="impact-item">
                  <span class="impact-label">🗺️ 產區格局</span>
                  <span class="impact-text">傳統產區格局崩潰：Médoc、Pomerol等核心產區面臨生存危機；波爾多葡萄酒帶可能北移</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍇 品種結構</span>
                  <span class="impact-text">徹底品種革命：大規模引入耐熱抗旱的地中海和新世界品種；傳統品種可能僅在特定地塊存續</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🍷 葡萄酒風格</span>
                  <span class="impact-text">波爾多傳統風格難以為繼，向"新波爾多"風格轉型：酒精度14.5%+，果味主導，結構簡單</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">🌱 可持續性</span>
                  <span class="impact-text">環境壓力極大，部分邊際產區被迫放棄葡萄種植</span>
                </div>
                <div class="impact-item">
                  <span class="impact-label">💼 市場表現</span>
                  <span class="impact-text">市場動盪：品牌價值受損，競爭力下降；北歐和英國產區崛起</span>
                </div>
              </div>
              
              <div class="challenges critical">
                <strong>關鍵挑戰：</strong>
                <ul>
                  <li>傳統terroir概念面臨根本性挑戰</li>
                  <li>AOC體系可能需要徹底重構</li>
                  <li>經濟模式不可持續，大量酒莊面臨破產</li>
                  <li>文化身份危機："這還是波爾多嗎？"</li>
                </ul>
              </div>
              <div class="likelihood critical">
                <strong>可行性：</strong>如果全球氣候行動失敗，這一災難性情境可能成為現實
              </div>
            </div>
          </div>
        </div>

        <div class="conclusion-note">
          <div class="conclusion-icon">🔮</div>
          <div class="conclusion-text">
            <strong>結論：</strong>未來的波爾多將取決於兩個關鍵因素：全球氣候政策的成功與否，以及波爾多葡萄酒業的適應能力和創新意願。
          </div>
        </div>

        <style>
          .future-scenarios {
            padding: 1rem 0;
          }
          .section-description {
            text-align: center;
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
          }
          .scenario-cards {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .scenario-card {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .scenario-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .scenario-card.optimistic {
            border: 3px solid #4CAF50;
          }
          .scenario-card.moderate {
            border: 3px solid #FF9800;
          }
          .scenario-card.pessimistic {
            border: 3px solid #F44336;
          }
          .scenario-header {
            padding: 1.5rem;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .scenario-card.optimistic .scenario-header {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
          }
          .scenario-card.moderate .scenario-header {
            background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
          }
          .scenario-card.pessimistic .scenario-header {
            background: linear-gradient(135deg, #F44336 0%, #D32F2F 100%);
          }
          .scenario-header h4 {
            margin: 0;
            font-size: 1.4rem;
          }
          .probability {
            background: rgba(255,255,255,0.3);
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .scenario-body {
            padding: 1.5rem;
            background: white;
          }
          .temperature-box {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: #e8f5e9;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
          }
          .temperature-box.warning {
            background: #fff3e0;
          }
          .temperature-box.danger {
            background: #ffebee;
          }
          .temp-icon {
            font-size: 1.8rem;
          }
          .temp-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #2e7d32;
          }
          .temperature-box.warning .temp-value {
            color: #e65100;
          }
          .temperature-box.danger .temp-value {
            color: #c62828;
          }
          .temp-note {
            color: #666;
            font-size: 0.9rem;
          }
          .conditions, .impacts, .challenges {
            margin-bottom: 1.5rem;
          }
          .conditions strong, .impacts strong, .challenges strong, .conclusion strong, .likelihood strong {
            display: block;
            color: #333;
            margin-bottom: 0.75rem;
            font-size: 1.05rem;
          }
          .conditions ul, .challenges ul {
            margin: 0;
            padding-left: 1.5rem;
          }
          .conditions li, .challenges li {
            margin: 0.5rem 0;
            color: #555;
            line-height: 1.6;
          }
          .challenges.critical li {
            color: #c62828;
            font-weight: 500;
          }
          .impact-item {
            display: flex;
            gap: 1rem;
            margin: 0.75rem 0;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 6px;
          }
          .impact-label {
            font-weight: 600;
            color: #555;
            min-width: 120px;
            flex-shrink: 0;
          }
          .impact-text {
            color: #333;
            line-height: 1.6;
          }
          .conclusion, .likelihood {
            background: #f0f4ff;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
          }
          .likelihood.critical {
            background: #ffebee;
          }
          .conclusion-note {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .conclusion-icon {
            font-size: 2.5rem;
            flex-shrink: 0;
          }
          .conclusion-text {
            color: #333;
            line-height: 1.7;
          }
          .conclusion-text strong {
            color: #d84315;
            display: inline;
          }
          @media (max-width: 768px) {
            .scenario-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }
            .impact-item {
              flex-direction: column;
              gap: 0.5rem;
            }
            .impact-label {
              min-width: auto;
            }
          }
        </style>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '⚡',
        title: '中等情境最可能',
        content: '50%機率的+2-3°C情境需要深度調整：產區重洗牌、品種大改變、風格演化'
      },
      {
        id: 2,
        icon: '🔑',
        title: '兩大決定因素',
        content: '波爾多未來取決於：全球氣候政策成功與否 + 葡萄酒業適應創新能力'
      }
    ]
  },

  {
    type: 'content',
    title: '給不同參與者的行動建議',
    content: `
      <div class="actionable-insights">
        <div class="audience-cards">
          <div class="audience-card consumer">
            <div class="audience-header">
              <h4>🍷 消費者</h4>
            </div>
            <div class="recommendations">
              <div class="recommendation-item">
                <span class="rec-icon">📊</span>
                <span class="rec-text">了解年份差異變大，學習評估氣候因素對品質的影響</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">關注酒莊的可持續實踐，用消費選擇支持環保酒莊</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌍</span>
                <span class="rec-text">嘗試新興產區的酒款，可能發現性價比驚喜</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🔄</span>
                <span class="rec-text">適應風格演變，理解"新波爾多"風格的價值</span>
              </div>
            </div>
          </div>

          <!-- 酒莊經營者 -->
          <div class="audience-card">
            <div class="audience-header">
              <span class="audience-icon">🏰</span>
              <h4>酒莊經營者</h4>
            </div>
            <div class="recommendations">
              <div class="rec-item">
                <span class="rec-icon">💧</span>
                <span class="rec-text">盡早投資氣候適應性基礎設施（灌溉、監測系統）</span>
              </div>
              <div class="rec-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">考慮有機或生物動力轉型，提升土壤韌性</span>
              </div>
              <div class="rec-item">
                <span class="icon">🍇</span>
                <span class="text">靈活調整品種配比，試驗新品種</span>
              </div>
              <div class="rec-item">
                <span class="icon">📊</span>
                <span class="text">加強團隊的氣候科學和數據分析能力</span>
              </div>
              <div class="rec-item">
                <span class="icon">🤝</span>
                <span class="text">參與產區集體行動，共享知識和資源</span>
              </div>
            </div>
          </div>

          <div class="audience-card">
            <div class="audience-header">
              <h4>💼 投資者</h4>
            </div>
            <div class="recommendations-list">
              <div class="recommendation-item">
                <span class="rec-icon">📊</span>
                <span class="rec-text">重新評估產區風險：涼爽產區可能被低估</span>
              </div>
              <div class="recommendation-item">
                <span class="rec-icon">🌱</span>
                <span class="rec-text">關注酒莊的可持續實踐，這關係長期價值</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">💰</span>
                <span class="text">理解氣候適應性投資的必要性和成本</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">📊</span>
                <span class="text">多元化投資組合，分散氣候風險</span>
              </div>
              <div class="recommendation-item">
                <span class="icon">🔮</span>
                <span class="text">長期視角：氣候挑戰也是創新機遇</span>
              </div>
            </div>
          </div>

          <div class="audience-card">
            <div class="audience-header">
              <h4>📚 學習者與專業人士</h4>
            </div>
            <div class="audience-body">
              <ul class="recommendations">
                <li>持續更新氣候科學知識，這將成為葡萄酒專業的核心</li>
                <li>關注行業創新案例，學習最佳實踐</li>
                <li>培養系統性思維，理解氣候-土壤-品種-釀造的複雜關聯</li>
                <li>參與行業對話，貢獻專業知識</li>
                <li>保持開放心態，適應產區和風格的演變</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="action-note">
          <div class="note-icon">💪</div>
          <div class="note-content">
            <strong>行動號召：</strong>氣候變遷不是遙遠的未來，而是當下的現實。無論你是消費者、從業者還是投資者，我們都可以在各自的位置上採取行動，共同塑造波爾多葡萄酒的可持續未來。
          </div>
        </div>

        <style>
          .actionable-insights {
            padding: 1rem 0;
          }
          .audience-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
          }
          .audience-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .audience-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
          .audience-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.25rem 1.5rem;
            color: white;
          }
          .audience-card:nth-child(1) .audience-header {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          }
          .audience-card:nth-child(2) .scenario-header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          }
          .audience-header h4 {
            margin: 0;
            font-size: 1.35rem;
            color: white;
          }
          .recommendations {
            padding: 1.5rem;
            background: white;
          }
          .recommendation-item {
            display: flex;
            gap: 1rem;
            margin: 0.75rem 0;
            padding: 0.75rem;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #667eea;
          }
          .recommendation-item .number {
            font-weight: bold;
            color: #667eea;
            flex-shrink: 0;
          }
          .recommendation-item .text {
            color: #333;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .audience-cards {
              gap: 1.25rem;
            }
          }
        </style>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '🎯',
        title: '四類參與者',
        content: '消費者、酒莊經營者、投資者、學習者——每個角色都有具體的行動方向'
      },
      {
        id: 2,
        icon: '🤝',
        title: '協同應對',
        content: '氣候變遷需要產業鏈各方共同努力：消費支持、管理創新、資本配置、知識更新'
      }
    ]
  },

  // ========== 課程總結與展望 ==========
  {
    type: 'chapter-divider',
    chapter: '總結',
    title: '課程總結與展望',
    subtitle: '建立系統性思維框架',
    icon: '🎓',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'key-takeaways',
    title: '核心要點總結',
    icon: '💡',
    takeaways: [
      {
        point: '氣候變遷的規模與速度',
        detail: '過去50年波爾多年均溫度上升1.7°C，生長季延長15-20天，採收提前13天。這看似微小的變化對葡萄種植產生革命性影響。'
      },
      {
        point: '對葡萄品質的多維影響',
        detail: '糖分累積加快（酒精度從12.5%升至13-14%）、酸度降低（蘋果酸快速降解）、酚類成熟窗口縮短。三者平衡難度顯著增加。'
      },
      {
        point: '頂級酒莊的系統性應對',
        detail: '從葡萄園精細管理、品種配比調整、採收時機優化到釀造工藝創新，多層次綜合措施是保持品質的關鍵。'
      },
      {
        point: '產區格局的重新洗牌',
        detail: 'Médoc面臨灌溉投資需求，Pomerol的Merlot風險增加，Entre-Deux-Mers等涼爽產區迎來發展機遇。'
      },
      {
        point: '可持續發展成為主流',
        detail: '有機種植從3%增至18%並持續增長，碳中和2050目標，HVE→有機→生物動力的梯度升級路徑清晰。'
      },
      {
        point: '未來取決於兩個變量',
        detail: '全球氣候政策的成功程度（控制升溫幅度）+ 波爾多產業的適應創新能力 = 決定性因素。'
      }
    ]
  },

  {
    type: 'reflection-questions',
    title: '思考與討論',
    icon: '🤔',
    questions: [
      {
        question: '氣候變化後的波爾多葡萄酒，還能稱為"傳統波爾多風格"嗎？',
        prompts: [
          '風格的本質是什麼：是特定的味覺特徵，還是產地與風土的表達？',
          '如果採用新品種、新技術，AOC體系如何調整？',
          '消費者會接受"新波爾多"風格嗎？'
        ]
      },
      {
        question: '小酒莊在氣候變化面前是否處於劣勢？',
        prompts: [
          '大酒莊有資本優勢投資適應性基礎設施',
          '但小酒莊可能更靈活，更易於調整策略',
          '合作社和產區集體行動能縮小差距嗎？'
        ]
      },
      {
        question: '氣候適應與terroir理念是否矛盾？',
        prompts: [
          '灌溉是否違背"風土"的自然表達？',
          '新品種的引入如何與傳統調和？',
          'Terroir概念本身是否需要重新定義？'
        ]
      }
    ]
  },

  {
    type: 'content',
    title: '延伸學習資源',
    content: `
      <div class="further-resources">
        <div class="intro-text">
          <span class="intro-icon">📚</span>
          <p>想要更深入了解氣候變遷對波爾多的影響？以下精選資源涵蓋科學研究、行業動態、媒體報導和實踐案例，幫助您建立全面的知識體系。</p>
        </div>

        <!-- 科學研究 -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🔬</span>
            科學研究
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>IPCC Sixth Assessment Report: Wine Sector</h5>
                <span class="difficulty-badge advanced">高級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">📄 國際報告</span>
              </div>
              <p class="resource-description">聯合國政府間氣候變化專門委員會（IPCC）關於葡萄酒產業的最新評估</p>
              <a href="https://www.ipcc.ch/" target="_blank" class="resource-link">🔗 前往資源</a>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>Climate Change and Wine: A Review</h5>
                <span class="difficulty-badge expert">專業</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">📚 學術綜述</span>
              </div>
              <p class="resource-description">Journal of Wine Economics發表的氣候變化對葡萄酒影響的綜合文獻回顧</p>
            </div>
          </div>
        </div>

        <!-- 行業動態 -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">📊</span>
            行業動態
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>Bordeaux 2050: Sustainable Roadmap</h5>
                <span class="difficulty-badge intermediate">中級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎯 戰略規劃</span>
              </div>
              <p class="resource-description">波爾多葡萄酒行業委員會（CIVB）發布的2050碳中和路線圖</p>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>Annual Climate Report by Liv-ex</h5>
                <span class="difficulty-badge intermediate">中級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">💼 市場分析</span>
              </div>
              <p class="resource-description">Liv-ex發布的年度氣候影響與市場表現分析報告</p>
            </div>
          </div>
        </div>

        <!-- 媒體與紀錄片 -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🎬</span>
            媒體與紀錄片
          </h4>
          <div class="resource-list">
            <div class="resource-item">
              <div class="resource-header">
                <h5>《變化中的風土》(Terroir in Transition)</h5>
                <span class="difficulty-badge beginner">入門</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎥 紀錄片</span>
              </div>
              <p class="resource-description">探訪波爾多多家酒莊，記錄他們應對氣候挑戰的實踐</p>
            </div>

            <div class="resource-item">
              <div class="resource-header">
                <h5>The Wine Economist Podcast: Climate Series</h5>
                <span class="difficulty-badge intermediate">中級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🎙️ 播客</span>
              </div>
              <p class="resource-description">葡萄酒經濟學家Mike Veseth主持的氣候變化系列訪談</p>
            </div>
          </div>
        </div>

        <!-- 實踐案例 -->
        <div class="resource-category">
          <h4 class="category-title">
            <span class="category-icon">🏰</span>
            實踐案例
          </h4>
          <div class="resource-list">
            <div class="resource-item featured">
              <div class="resource-header">
                <h5>Château Pontet-Canet: Organic Pioneer</h5>
                <span class="difficulty-badge intermediate">中級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🍷 酒莊案例</span>
              </div>
              <p class="resource-description">深入分析Pontet-Canet從常規轉向有機和生物動力的完整歷程</p>
            </div>

            <div class="resource-item featured">
              <div class="resource-header">
                <h5>Smith Haut Lafitte: Carbon Negative</h5>
                <span class="difficulty-badge intermediate">中級</span>
              </div>
              <div class="resource-meta">
                <span class="resource-type">🍷 酒莊案例</span>
              </div>
              <p class="resource-description">首個實現"碳負"的波爾多列級莊的創新實踐</p>
            </div>
          </div>
        </div>

        <div class="learning-path">
          <h4>💡 建議學習路徑</h4>
          <div class="path-steps">
            <div class="path-step">
              <span class="step-number">1</span>
              <span class="step-text"><strong>入門：</strong>從紀錄片開始，建立直觀認識</span>
            </div>
            <div class="path-step">
              <span class="step-number">2</span>
              <span class="step-text"><strong>進階：</strong>閱讀酒莊案例，了解實際應對策略</span>
            </div>
            <div class="path-step">
              <span class="step-number">3</span>
              <span class="step-text"><strong>深化：</strong>關注行業動態和市場分析報告</span>
            </div>
            <div class="path-step">
              <span class="step-number">4</span>
              <span class="step-text"><strong>專業：</strong>研讀IPCC報告和學術綜述</span>
            </div>
          </div>
        </div>

        <style>
          .further-resources {
            padding: 1rem 0;
          }
          .intro-text {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            color: white;
          }
          .intro-icon {
            font-size: 2.5rem;
            flex-shrink: 0;
          }
          .intro-text p {
            margin: 0;
            line-height: 1.6;
            font-size: 1.05rem;
          }
          .resource-category {
            margin-bottom: 2rem;
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          }
          .category-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin: 0 0 1.25rem 0;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid #e0e0e0;
            color: #333;
            font-size: 1.3rem;
          }
          .category-icon {
            font-size: 1.5rem;
          }
          .resource-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .resource-item {
            background: #f8f9fa;
            padding: 1.25rem;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .resource-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .resource-item.featured {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            border-left-color: #f5576c;
          }
          .resource-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.75rem;
            gap: 1rem;
          }
          .resource-header h5 {
            margin: 0;
            color: #333;
            font-size: 1.1rem;
            flex: 1;
          }
          .difficulty-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            white-space: nowrap;
          }
          .difficulty-badge.beginner {
            background: #4CAF50;
            color: white;
          }
          .difficulty-badge.intermediate {
            background: #2196F3;
            color: white;
          }
          .difficulty-badge.advanced {
            background: #FF9800;
            color: white;
          }
          .difficulty-badge.expert {
            background: #9C27B0;
            color: white;
          }
          .resource-meta {
            margin-bottom: 0.5rem;
          }
          .resource-type {
            display: inline-block;
            color: #666;
            font-size: 0.9rem;
            font-weight: 500;
          }
          .resource-description {
            color: #555;
            line-height: 1.6;
            margin: 0.5rem 0;
          }
          .resource-link {
            display: inline-block;
            margin-top: 0.5rem;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }
          .resource-link:hover {
            color: #764ba2;
            text-decoration: underline;
          }
          .learning-path {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            padding: 1.5rem;
            border-radius: 12px;
            margin-top: 2rem;
          }
          .learning-path h4 {
            margin: 0 0 1rem 0;
            color: #333;
            font-size: 1.2rem;
          }
          .path-steps {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .path-step {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: rgba(255,255,255,0.7);
            padding: 0.75rem 1rem;
            border-radius: 8px;
          }
          .step-number {
            background: #667eea;
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
          }
          .step-text {
            color: #333;
            line-height: 1.5;
          }
          .step-text strong {
            color: #667eea;
          }
          @media (max-width: 768px) {
            .resource-header {
              flex-direction: column;
              align-items: flex-start;
            }
            .intro-text {
              flex-direction: column;
              text-align: center;
            }
          }
        </style>
      </div>
    `,
    highlights: [
      {
        id: 1,
        icon: '📚',
        title: '多元資源',
        content: '涵蓋科學研究、行業動態、媒體報導、實踐案例四大類別，滿足不同學習需求'
      },
      {
        id: 2,
        icon: '🎯',
        title: '學習路徑',
        content: '從入門紀錄片→酒莊案例→行業報告→學術研究，循序漸進深化理解'
      }
    ]
  },

  // 結束頁
  {
    type: 'course-complete',
    title: '🎉 課程完成！',
    subtitle: '氣候變遷對波爾多的影響與應對',
    achievement: 'Level 3 - 課程 1 完成',
    summary: '您已經深入了解了氣候變遷對波爾多葡萄酒產業的多維影響，從科學數據到產區格局，從酒莊應對到未來展望。這些知識將幫助您更深刻地理解現代波爾多葡萄酒的挑戰與機遇。',
    stats: {
      chapters: 6,
      topics: 20,
      caseStudies: 3,
      quizzes: 4,
      timeSpent: '約35分鐘'
    },
    nextSteps: [
      {
        action: '複習重點',
        items: [
          '溫度上升1.7°C的具體影響',
          'Château Margaux的綜合應對策略',
          '三種未來情境的差異與可能性'
        ]
      },
      {
        action: '實踐應用',
        items: [
          '品鑑不同年份的波爾多葡萄酒，體會氣候影響',
          '關注最新的產區氣候報告和酒莊動態',
          '參與氣候與葡萄酒的討論社群'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '進入L3-2：土壤科學與風土表達',
          '探索其他產區如何應對氣候變化',
          '深入研究可持續葡萄種植實踐'
        ]
      }
    ],
    certificate: '您已獲得本課程學習證明',
    shareMessage: '我剛完成了Level 3的「氣候變遷對波爾多的影響與應對」課程！深入了解了溫度上升、產區變化和可持續發展。 #波爾多葡萄酒 #氣候變遷 #葡萄酒學習'
  },

  // ========== 知識檢測：未來展望 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：未來展望',
    questions: [
      {
        question: '根據2050年情境分析，樂觀情境（機率30%）假設溫度上升幅度是？',
        options: [
          '+1.5°C',
          '+2-3°C',
          '+3-4°C',
          '+4-5°C'
        ],
        correct: 0,
        explanation: '樂觀情境（30%機率）假設全球成功控制溫室氣體排放，波爾多溫度上升控制在+1.5°C，大部分產區能通過適應措施維持傳統風格。'
      },
      {
        question: '在悲觀情境下（機率20%），波爾多面臨的最大挑戰是什麼？',
        options: [
          '葡萄酒價格下降',
          '酒莊數量減少',
          '傳統風格難以維持，產區特性模糊',
          '市場需求下降'
        ],
        correct: 2,
        explanation: '悲觀情境假設溫度上升+3-4°C，將導致傳統風格難以維持、產區特性模糊、高端市場萎縮等系統性挑戰，對波爾多的地位造成根本性威脅。'
      }
    ]
  }
]

export default l31Content
