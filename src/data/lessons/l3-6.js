// L3-6: 調配藝術與釀酒師哲學
// 理解波爾多混釀的藝術與科學

export const l36Content = [
  // ========== 封面與導讀 ==========
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          波爾多葡萄酒的偉大，不僅在於其優越的風土，更在於釀酒師精湛的調配藝術。調配（Assemblage）是波爾多最核心的技藝，將不同品種、不同地塊的葡萄酒融合為完美的整體。
        </p>

        <p class="intro-context">
          一瓶頂級波爾多紅酒往往由 3-5 個品種調配而成：Cabernet Sauvignon 提供骨架與陳年潛力，Merlot 賦予柔順與果味，Cabernet Franc 增添優雅與複雜度。調配比例的微調能創造出截然不同的風格，這正是釀酒師藝術與科學的完美結合。
        </p>

        <h3 class="section-title">本課程學習目標</h3>

        <div class="learning-points">
          <div class="point-item">
            <h4>🧪 掌握波爾多經典調配比例與原理</h4>
            <p>理解左岸 Cabernet 主導（60-80%）與右岸 Merlot 主導（60-90%）的風格差異，學習品種角色分配</p>
          </div>

          <div class="point-item">
            <h4>🍇 理解不同葡萄品種的獨特角色</h4>
            <p>深入了解五大品種（CS、Merlot、CF、Petit Verdot、Malbec）在調配中的功能與貢獻</p>
          </div>

          <div class="point-item">
            <h4>🎨 探索頂級釀酒師的調配哲學</h4>
            <p>學習 Château Margaux、Haut-Brion 等名莊釀酒師如何在傳統與創新之間做出決策</p>
          </div>

          <div class="point-item">
            <h4>👃 學習專業品鑑與調配技巧</h4>
            <p>掌握逐桶品鑑（Barrel Tasting）的方法，理解如何評估各組分的陳年潛力與協調性</p>
          </div>

          <div class="point-item">
            <h4>📊 分析年份變化對調配策略的影響</h4>
            <p>了解優秀年份（如2009、2010）與困難年份（如2013）的調配策略差異，學習靈活應對</p>
          </div>
        </div>

        <p class="intro-conclusion">
          完成本課程後，您將深刻理解為什麼波爾多混釀被視為葡萄酒世界的典範，以及頂級釀酒師如何通過調配藝術創造出超越單一品種的卓越作品。
        </p>

        <div class="course-info">
          <p><strong>預計學習時間：</strong>38分鐘</p>
          <p><strong>難度等級：</strong>高級專業</p>
        </div>
      </div>
    `,
    icon: '🎨'
  },

  // ========== 第一章：調配的基礎原理 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '調配的基礎原理',
    subtitle: '從單一品種到完美融合',
    icon: '🧪',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '為什麼要調配？',
    content: [
      {
        subtitle: '複雜度的創造',
        text: '單一品種葡萄酒雖然能夠表達純粹的品種特性，但調配能創造出任何單一品種都無法達到的複雜度和平衡感。就像交響樂團中不同樂器的和諧配合，每個品種都扮演著獨特的角色。',
        highlight: '1 + 1 > 2：調配的魔力在於整體效果超越各部分之和'
      },
      {
        subtitle: '風險的分散',
        text: '波爾多的海洋性氣候變化多端，不同品種的成熟期和抗病性各異。通過調配，釀酒師可以平衡年份間的差異，確保每年都能釀造出高品質的葡萄酒。',
        highlight: '氣候保險：多品種種植降低了單一年份的風險'
      },
      {
        subtitle: '風格的塑造',
        text: '調配是釀酒師表達個人風格和酒莊哲學的重要工具。同樣的品種，不同的比例組合，能創造出截然不同的風格表達。',
        highlight: '藝術表達：調配比例反映釀酒師的美學理念'
      }
    ]
  },

  {
    type: 'content',
    title: '波爾多調配的三大支柱',
    content: [
      {
        subtitle: 'Cabernet Sauvignon - 架構之王 👑',
        text: 'Cabernet Sauvignon 是波爾多左岸的靈魂，提供了葡萄酒的骨架與力量。它的厚實單寧、深邃顏色和黑醋栗、黑櫻桃等黑色水果香氣，賦予葡萄酒強大的陳年潛力。在調配中，CS 通常佔 40-70%，是結構的基石。',
        highlight: '🎯 角色定位：骨架 | ⏱️ 陳年潛力：20-50年 | 📊 典型比例：40-70%'
      },
      {
        subtitle: 'Merlot - 柔順之源 🍇',
        text: 'Merlot 為調配帶來圓潤的口感和豐富的果味。它的早熟特性和較低的單寧，能軟化 Cabernet Sauvignon 的剛性，使酒體更加平衡和易飲。右岸以 Merlot 為主導（60-90%），而左岸則用它來增添肉感（20-40%）。',
        highlight: '🎯 角色定位：肉感與果味 | 🌡️ 早熟性：比CS早2週 | 📊 典型比例：20-90%'
      },
      {
        subtitle: 'Cabernet Franc - 優雅調味師 🌸',
        text: 'Cabernet Franc 雖然比例較小（5-25%），卻扮演著畫龍點睛的角色。它帶來紫羅蘭、鉛筆芯、香料等複雜香氣，提升整體的優雅度和清新感。特別在右岸（如 Cheval Blanc），CF 的比例可達 40-60%。',
        highlight: '🎯 角色定位：香氣與優雅 | 🌺 特色：花香與香料 | 📊 典型比例：5-25%'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '🏛️',
          title: '左岸調配典型',
          description: 'CS 60% + Merlot 30% + CF 10%',
          detail: '結構主導，力量型風格'
        },
        {
          icon: '🌊',
          title: '右岸調配典型',
          description: 'Merlot 70% + CF 20% + CS 10%',
          detail: '柔順優雅，早適飲風格'
        },
        {
          icon: '⚖️',
          title: '調配黃金法則',
          description: '1+1+1 > 3',
          detail: '整體效果超越各部分之和'
        },
        {
          icon: '🎨',
          title: '釀酒師的畫布',
          description: '每1%的調整都能改變風格',
          detail: '微調創造獨特性格'
        }
      ]
    }
  },

  // 知識檢測：調配基礎
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配基礎',
    questions: [
      {
        question: '波爾多調配的三大支柱品種中，哪個品種主要負責提供「骨架與陳年潛力」？',
        options: [
          'Merlot',
          'Cabernet Sauvignon',
          'Cabernet Franc',
          'Petit Verdot'
        ],
        correct: 1,
        explanation: 'Cabernet Sauvignon 是「架構之王」，提供厚實單寧、深邃顏色和黑色水果香氣，賦予葡萄酒強大的陳年潛力，是波爾多左岸調配的靈魂。'
      },
      {
        question: 'Merlot 在波爾多調配中的主要角色是什麼？',
        options: [
          '提供結構與單寧',
          '增加酸度與清新感',
          '帶來圓潤口感和豐富果味',
          '提升酒精度'
        ],
        correct: 2,
        explanation: 'Merlot 是「柔順之源」，為調配帶來圓潤的口感和豐富的果味，能軟化 Cabernet Sauvignon 的剛性，使酒體更加平衡和易飲。'
      }
    ]
  },

  // ========== 第二章：左岸與右岸的調配哲學 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '左岸與右岸的調配哲學',
    subtitle: '兩種截然不同的美學追求',
    icon: '⚖️',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '左岸 vs 右岸調配風格',
    content: [
      {
        subtitle: '左岸：Cabernet Sauvignon 主導的力量美學 🏛️',
        text: '左岸的梅多克（Médoc）和格拉夫（Graves）地區以砂礫土壤為主，非常適合 Cabernet Sauvignon 的種植。左岸的調配哲學追求結構、力量和超長的陳年潛力。Cabernet Sauvignon 通常佔 50-80%，為酒體提供堅實的骨架，Merlot（20-40%）增添柔順感，Cabernet Franc（5-10%）帶來優雅與香氣。',
        highlight: '🎯 典型調配：CS 70% + Merlot 25% + PV 5% | 🏆 代表酒莊：Lafite, Latour, Margaux'
      },
      {
        subtitle: '右岸：Merlot 主導的柔美哲學 🌊',
        text: '右岸的波美侯（Pomerol）和聖愛美濃（Saint-Émilion）以黏土和石灰岩為主，最適合 Merlot 的表達。右岸調配追求柔順、優雅和早期適飲性。Merlot 通常佔 60-95%，提供豐富的果味和圓潤口感，Cabernet Franc（10-40%）增加複雜度與香氣，Cabernet Sauvignon 比例較少或完全不用。',
        highlight: '🎯 典型調配：Merlot 85% + CF 15% | 💎 代表酒莊：Petrus, Cheval Blanc, Ausone'
      },
      {
        subtitle: '兩種哲學的對話 ⚖️',
        text: '左岸追求的是「建築式」的結構美學，需要時間來柔化單寧，展現複雜性；右岸則是「雕塑式」的圓潤美學，強調品種的純粹表達和早期魅力。兩者沒有高下之分，只是不同的美學追求。有趣的是，近年來左岸增加了 Merlot 比例以提升早期適飲性，而右岸一些酒莊也開始嘗試增加結構感。',
        highlight: '🔄 現代趨勢：兩岸調配哲學正在相互借鑒，邊界逐漸模糊'
      }
    ],
    visualAid: {
      type: 'comparison-table',
      items: [
        {
          category: '主導品種',
          leftBank: '👑 Cabernet Sauvignon (50-80%)',
          rightBank: '🍇 Merlot (60-95%)'
        },
        {
          category: '風格特點',
          leftBank: '💪 結構、力量、陳年潛力',
          rightBank: '✨ 柔順、優雅、早適飲'
        },
        {
          category: '土壤類型',
          leftBank: '🏔️ 砂礫土（排水佳）',
          rightBank: '🌊 黏土、石灰岩（保水性好）'
        },
        {
          category: '陳年時間',
          leftBank: '⏰ 需 10-20 年達到適飲期',
          rightBank: '⏱️ 5-10 年即可享受'
        },
        {
          category: '代表酒莊',
          leftBank: '🏆 Lafite, Latour, Margaux, Haut-Brion',
          rightBank: '💎 Petrus, Cheval Blanc, Ausone, Le Pin'
        },
        {
          category: '調配哲學',
          leftBank: '🏗️ 以結構為框架填充',
          rightBank: '🎵 以柔順為基調增複雜度'
        }
      ]
    }
  },

  {
    type: 'content',
    title: '品種角色分工詳解',
    content: [
      {
        subtitle: 'Cabernet Sauvignon - 架構師',
        text: '如同建築的鋼筋框架，Cabernet Sauvignon為葡萄酒提供堅實的結構基礎。其高單寧含量和深邃的顏色，賦予酒款強大的陳年潛力和複雜的陳年香氣發展能力。',
        highlight: '核心貢獻：結構、單寧、陳年潛力、黑醋栗風味'
      },
      {
        subtitle: 'Merlot - 調和者',
        text: 'Merlot就像溫柔的調和劑，其圓潤的質地和豐富的果味能夠柔化Cabernet Sauvignon的堅硬邊角，同時填補口感中的空隙，創造出更加平衡和諧的整體。',
        highlight: '核心貢獻：圓潤口感、果味、早期適飲性、李子/櫻桃風味'
      },
      {
        subtitle: 'Cabernet Franc - 藝術家',
        text: 'Cabernet Franc像是調色盤上的精細畫筆，為混釀增添優雅的花香、草本氣息和清新的酸度。它能提升整體的芳香複雜度，賦予酒款更多的層次感。',
        highlight: '核心貢獻：花香、草本氣息、酸度、優雅感'
      }
    ]
  },

  // 知識檢測：左岸與右岸調配
  {
    type: 'interactive-quiz',
    title: '知識檢測：左岸與右岸調配',
    questions: [
      {
        question: '波爾多左岸調配中，Cabernet Sauvignon 通常佔多少比例？',
        options: [
          '20-40%',
          '40-60%',
          '50-80%',
          '80-95%'
        ],
        correct: 2,
        explanation: '左岸以砂礫土壤為主，非常適合 Cabernet Sauvignon 的種植。左岸調配通常 CS 佔 50-80%，提供結構、力量和超長的陳年潛力。'
      },
      {
        question: '右岸產區（如 Pomerol、Saint-Émilion）的主導品種是什麼？',
        options: [
          'Cabernet Sauvignon',
          'Merlot',
          'Cabernet Franc',
          'Petit Verdot'
        ],
        correct: 1,
        explanation: '右岸以黏土和石灰岩為主，最適合 Merlot 的表達。Merlot 通常佔 60-95%，提供豐富的果味和圓潤口感，追求柔順、優雅和早期適飲性。'
      }
    ]
  },

  // ========== 第三章：經典調配比例分析 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '經典調配比例分析',
    subtitle: '頂級酒莊的配方密碼',
    icon: '📊',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  {
    type: 'content',
    title: '五大一級莊調配比例解密',
    content: [
      {
        subtitle: 'Château Lafite Rothschild - 優雅派 👑',
        text: '**Pauillac | 葡萄園面積 112 公頃**\n\n調配比例：Cabernet Sauvignon 70% + Merlot 25% + Cabernet Franc 3% + Petit Verdot 2%\n\nLafite 的調配哲學追求「優雅與力量的完美平衡」。相較於同村的 Latour，Lafite 使用更高比例的 Merlot 來柔化 CS 的剛性。這種配方創造出標誌性的絲滑單寧和礦物質特徵，以及驚人的陳年潛力（30-50年）。',
        highlight: '🎨 風格簽名：絲滑單寧 + 雪松木香 + 鉛筆芯礦物質'
      },
      {
        subtitle: 'Château Latour - 力量派 💪',
        text: '**Pauillac | 葡萄園面積 78 公頃**\n\n調配比例：Cabernet Sauvignon 80% + Merlot 18% + Petit Verdot 2%\n\nLatour 追求「最純粹的力量表達」，使用波爾多最高比例的 CS（80%）。這種配方賦予 Latour 傳奇般的結構感和陳年潛力（50-100年）。年輕時需要耐心等待，成熟後展現深邃的層次和複雜度。',
        highlight: '🎨 風格簽名：鋼鐵結構 + 黑色水果 + 深邃層次'
      },
      {
        subtitle: 'Château Margaux - 精緻派 🌸',
        text: '**Margaux | 葡萄園面積 87 公頃**\n\n調配比例：Cabernet Sauvignon 75% + Merlot 20% + Cabernet Franc 3% + Petit Verdot 2%\n\nMargaux 被譽為「波爾多最女性化的酒」，調配哲學追求「精緻與優雅」。4 個品種的和諧配比創造出標誌性的花香（紫羅蘭）和絲滑質地。這是力量與優雅的教科書式平衡。',
        highlight: '🎨 風格簽名：紫羅蘭花香 + 絲綢質地 + 優雅精緻'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '📊',
          title: 'Château Haut-Brion',
          description: 'CS 45% + Merlot 40% + CF 15%',
          detail: 'Graves | 煙燻與礦物質'
        },
        {
          icon: '💎',
          title: 'Château Mouton Rothschild',
          description: 'CS 83% + Merlot 15% + CF 2%',
          detail: 'Pauillac | 華麗濃郁'
        },
        {
          icon: '🍇',
          title: 'Château Petrus (右岸)',
          description: 'Merlot 95% + CF 5%',
          detail: 'Pomerol | Merlot 極致表達'
        },
        {
          icon: '🏆',
          title: 'Château Cheval Blanc',
          description: 'Merlot 52% + CF 43% + CS 5%',
          detail: 'Saint-Émilion | CF 高比例'
        }
      ]
    }
  },

  {
    type: 'content',
    title: '調配比例的演變',
    content: [
      {
        subtitle: '歷史趨勢分析',
        text: '過去50年間，波爾多的調配比例發生了顯著變化。氣候變化使得Cabernet Sauvignon更容易成熟，同時市場對早期適飲性的需求推動了Merlot比例的增加。',
        highlight: '1970年代 vs 2020年代：Merlot比例普遍上升5-15%'
      },
      {
        subtitle: '技術進步的影響',
        text: '現代釀酒技術如光學分選、微氧化等，讓釀酒師能夠更精確地控制每個品種的表現，從而在調配中發揮更大的創造空間。',
        highlight: '精準釀造：現代技術讓調配變得更加科學化'
      },
      {
        subtitle: '市場導向的調整',
        text: '年輕世代消費者偏好果味更豐富、單寧更柔順的酒款，這促使許多酒莊增加Merlot的種植比例，或採用更溫和的萃取方式。',
        highlight: '消費趨勢：從需要陳年轉向早期適飲'
      }
    ]
  },

  // 知識檢測：經典調配比例
  {
    type: 'interactive-quiz',
    title: '知識檢測：經典調配比例',
    questions: [
      {
        question: '五大一級莊中，哪個酒莊使用最高比例的 Cabernet Sauvignon（約80%）？',
        options: [
          'Château Lafite Rothschild',
          'Château Latour',
          'Château Margaux',
          'Château Haut-Brion'
        ],
        correct: 1,
        explanation: 'Château Latour 追求「最純粹的力量表達」，使用波爾多最高比例的 CS（80%），賦予酒款傳奇般的結構感和陳年潛力（50-100年）。'
      },
      {
        question: 'Château Margaux 被譽為「波爾多最女性化的酒」，其調配哲學追求什麼風格？',
        options: [
          '力量與結構',
          '精緻與優雅',
          '濃郁與飽滿',
          '早熟與果味'
        ],
        correct: 1,
        explanation: 'Margaux 的調配哲學追求「精緻與優雅」，4個品種的和諧配比創造出標誌性的花香（紫羅蘭）和絲滑質地，是力量與優雅的教科書式平衡。'
      }
    ]
  },

  // ========== 第四章：釀酒師的決策過程 ==========
  {
    type: 'chapter-divider',
    chapter: '4',
    title: '釀酒師的決策過程',
    subtitle: '從品鑑到調配的藝術',
    icon: '🎯',
    background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },

  {
    type: 'content',
    title: '調配決策的完整時間線',
    content: [
      {
        subtitle: '第一階段：初步評估（採收後 1 個月）⏱️',
        text: '**階段任務：完成酒精發酵，進行初步品鑑**\n\n在這個階段，釀酒師需要：\n• 評估每個品種的品質潛力與成熟度\n• 分析每個地塊的獨特特色與表現\n• 確定基本的調配方向與策略框架\n\n此時的品鑑還很初步，但經驗豐富的釀酒師已經能判斷出大致的調配方向。這個階段最重要的是保持開放心態，不要過早下結論。',
        highlight: '🎯 關鍵決策：確定主導品種和大致比例框架（如 CS 65-75%）'
      },
      {
        subtitle: '第二階段：精確調配（採收後 3-6 個月）🔬',
        text: '**階段任務：完成蘋果酸乳酸發酵，進行正式調配**\n\n這是調配最關鍵的時期：\n• 逐一品鑑每個橡木桶中的酒（可能 50-100 個桶）\n• 進行多組小比例試調（通常 5-10 個組合）\n• 評估不同組合的平衡性、複雜度、陳年潛力\n\n釀酒師會邀請技術團隊共同品鑑，討論各種可能性。最終的調配比例往往是經過數十次試驗才確定的。',
        highlight: '🎯 關鍵決策：確定最終調配比例（精確到 1%）'
      },
      {
        subtitle: '第三階段：微調完善（採收後 12-18 個月）✨',
        text: '**階段任務：裝瓶前的最後調整**\n\n在裝瓶前，還有最後的檢驗機會：\n• 評估調配後的陳年發展與整合度\n• 根據市場反饋和年份特點進行微調\n• 確保正牌酒與副牌酒的品質一致性\n\n這個階段的調整通常很細微（1-3%），但可能對最終風格產生重要影響。一些頂級酒莊甚至會在裝瓶前一刻做出調整。',
        highlight: '🎯 關鍵決策：最終確認並裝瓶，決定正副牌分選'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '📅',
          title: '決策週期',
          description: '12-18 個月',
          detail: '從採收到裝瓶的完整過程'
        },
        {
          icon: '🍷',
          title: '品鑑次數',
          description: '50-100 次',
          detail: '逐桶品鑑與試調'
        },
        {
          icon: '🧪',
          title: '試驗組合',
          description: '5-10 組',
          detail: '不同比例的測試'
        },
        {
          icon: '👥',
          title: '參與人員',
          description: '3-8 人',
          detail: '釀酒師團隊與顧問'
        }
      ]
    }
  },

  {
    type: 'content',
    title: '大師訪談：Michel Rolland 談調配的藝術',
    content: [
      {
        subtitle: '國際釀酒顧問的調配哲學 🎓',
        text: 'Michel Rolland 是波爾多最具影響力的釀酒顧問之一，為全球超過 100 家酒莊提供諮詢服務。他對調配的深刻理解來自數十年的實戰經驗，涵蓋了各種風土條件和年份變化。以下是他對調配藝術的精闢見解。',
        highlight: '💡 諮詢酒莊：包括 Pétrus、Le Pin、Angelus 等頂級名莊'
      },
      {
        subtitle: 'Q1：調配最重要的原則是什麼？',
        text: '**Michel Rolland 回答：**\n\n「平衡是一切的核心。但我說的不是數學式的平衡，而是味覺上的和諧。每個年份、每個地塊都有其個性，我的工作是讓它們在一起時能夠唱出最美的和聲。\n\n一款偉大的調配酒，你不應該能分辨出哪個是 Cabernet、哪個是 Merlot，你感受到的應該是完美融合的整體。這需要時間、經驗，還有對葡萄酒的深刻理解。」',
        highlight: '🎵 關鍵：追求味覺和諧，而非數學比例'
      },
      {
        subtitle: 'Q2：年份差異如何影響調配決策？',
        text: '**Michel Rolland 回答：**\n\n「這是調配最迷人的地方。在溫暖年份（如 2003、2009），我會增加 Cabernet Franc 的比例來保持清新感和酸度；在涼爽年份（如 2013、2014），則可能增加 Merlot 來補充圓潤度和果味。\n\n關鍵是理解每個年份的特點，然後用調配來優化表現。沒有固定的公式，每個年份都是新的挑戰和機會。」',
        highlight: '🌡️ 彈性策略：根據年份特點調整比例'
      },
      {
        subtitle: 'Q3：給年輕釀酒師的建議？',
        text: '**Michel Rolland 回答：**\n\n「首先要學會品鑑，培養敏銳的味覺。每天品嚐不同的酒，訓練自己辨識細微差異的能力。\n\n其次要理解每個品種的特性 — 不只是理論上的，而是在不同土壤、不同年份下的實際表現。\n\n最重要的是要有耐心。調配是一門需要時間和經驗累積的藝術。不要急於下結論，讓葡萄酒告訴你它需要什麼。」',
        highlight: '📚 三大要素：味覺訓練 + 品種理解 + 耐心經驗'
      }
    ]
  },

  // 知識檢測：釀酒師決策
  {
    type: 'interactive-quiz',
    title: '知識檢測：釀酒師決策',
    questions: [
      {
        question: '釀酒師在品鑑各槽酒樣時，主要評估的三個關鍵要素是什麼？',
        options: [
          '顏色、香氣、價格',
          '品質、潛力、和諧性',
          '酒精度、酸度、甜度',
          '產量、成本、市場需求'
        ],
        correct: 1,
        explanation: '釀酒師通過逐桶品鑑（Barrel Tasting）評估每個組分的品質、陳年潛力和協調性，這三個要素決定了最終的調配決策。'
      },
      {
        question: '調配決策通常在什麼時候做出？',
        options: [
          '採收後立即決定',
          '發酵過程中',
          '橡木桶陳年6-8個月後',
          '裝瓶前一週'
        ],
        correct: 2,
        explanation: '調配決策通常在橡木桶陳年6-8個月後進行，此時各組分已初步發展，釀酒師可以更準確地評估品質和協調性。'
      }
    ]
  },

  // ========== 第五章：調配實務技巧 ==========
  {
    type: 'chapter-divider',
    chapter: '5',
    title: '調配實務技巧',
    subtitle: '專業品鑑與調配方法',
    icon: '🔬',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'practical',
    title: '專業調配流程',
    steps: [
      {
        step: 1,
        title: '準備階段',
        description: '建立標準化的品鑑環境',
        details: [
          '確保適宜的溫度（16-18°C）',
          '準備足夠數量的標準品鑑杯',
          '準備吐酒桶和清水',
          '確保良好的光線條件'
        ],
        tip: '環境的一致性對準確判斷至關重要'
      },
      {
        step: 2,
        title: '單品評估',
        description: '逐一品鑑每個組成部分',
        details: [
          '按品種分別品鑑',
          '記錄每個樣品的特點',
          '評估酸度、單寧、酒體、香氣',
          '判斷每個組成的潛力'
        ],
        tip: '詳細記錄有助於後續的調配決策'
      },
      {
        step: 3,
        title: '試調階段',
        description: '進行小比例的調配實驗',
        details: [
          '從50ml小樣開始試調',
          '逐步調整各品種比例',
          '每次只改變一個變數',
          '記錄每次調配的結果'
        ],
        tip: '小樣試調可以節約成本並快速找到最佳比例'
      },
      {
        step: 4,
        title: '優化調整',
        description: '根據品鑑結果精確調配',
        details: [
          '選出最佳的幾個組合',
          '進行更大比例的試調（200-500ml）',
          '邀請其他專業人士品鑑',
          '考慮陳年後的發展潛力'
        ],
        tip: '團隊品鑑能夠減少個人偏好的影響'
      }
    ]
  },

  {
    type: 'interactive',
    title: '虛擬調配實驗室',
    interactiveType: 'blending-lab',
    content: {
      description: '在虛擬環境中體驗調配過程',
      scenario: '您是一位釀酒師，需要為2020年份調配一款Pauillac紅酒',
      availableWines: [
        {
          variety: 'Cabernet Sauvignon',
          characteristics: {
            color: '深紫紅色',
            aroma: '黑醋栗、雪松、石墨',
            palate: '飽滿酒體，高單寧，結構強勁',
            finish: '持久，礦物感明顯'
          },
          maxPercentage: 80
        },
        {
          variety: 'Merlot',
          characteristics: {
            color: '深紅色',
            aroma: '李子、黑櫻桃、香草',
            palate: '中等酒體，柔順單寧，果味豐富',
            finish: '中等長度，圓潤'
          },
          maxPercentage: 40
        },
        {
          variety: 'Cabernet Franc',
          characteristics: {
            color: '中等深度紅色',
            aroma: '紫羅蘭、薄荷、香料',
            palate: '中等酒體，優雅單寧，酸度清新',
            finish: '中等長度，花香'
          },
          maxPercentage: 25
        }
      ],
      targetProfile: {
        style: '經典Pauillac風格',
        requirements: [
          '結構強勁但不粗糙',
          '果味豐富但有層次',
          '適合陳年10-15年',
          '體現產區典型性'
        ]
      }
    }
  },

  // ========== 知識檢測：調配實務技巧 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配實務技巧',
    questions: [
      {
        question: '在逐桶品鑑（Barrel Tasting）階段，釀酒師主要評估什麼？',
        options: [
          '葡萄酒的最終售價',
          '每個橡木桶葡萄酒的品質潛力和特性',
          '葡萄園的土壤成分',
          '市場的需求趨勢'
        ],
        correct: 1,
        explanation: '逐桶品鑑是調配的第一步，釀酒師會逐一品鑑每個橡木桶中的酒液，評估其品質、成熟度、風味特徵和潛力，為後續的試驗性調配做準備。'
      },
      {
        question: '試驗性調配（Trial Blending）的主要目的是什麼？',
        options: [
          '直接決定最終調配比例',
          '測試不同比例組合，找出最佳平衡',
          '確定葡萄酒的陳年時間',
          '計算生產成本'
        ],
        correct: 1,
        explanation: '試驗性調配是用小樣本（通常100-200ml）測試10-20種不同比例組合，通過反覆品鑑比較，找出最佳的平衡點，然後才會進行大規模調配。'
      }
    ]
  },

  // ========== 第六章：年份差異與調配策略 ==========
  {
    type: 'chapter-divider',
    chapter: '6',
    title: '年份差異與調配策略',
    subtitle: '適應自然，創造一致',
    icon: '📅',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '年份特徵對調配的影響',
    content: [
      {
        subtitle: '溫暖年份的調配策略',
        text: '在溫暖年份，葡萄成熟度高，糖分充足，但可能缺乏酸度。釀酒師通常會增加Cabernet Franc的比例來提升清新感，或選擇較涼爽地塊的葡萄來平衡整體風格。',
        highlight: '2003、2005、2009、2010：經典溫暖年份的調配挑戰'
      },
      {
        subtitle: '涼爽年份的調配智慧',
        text: '涼爽年份的葡萄酸度高，但成熟度可能不足。釀酒師會增加Merlot的比例來補充果味和圓潤感，同時選擇最溫暖地塊的葡萄作為調配基礎。',
        highlight: '2007、2008、2013、2014：考驗調配技巧的涼爽年份'
      },
      {
        subtitle: '理想年份的平衡藝術',
        text: '在氣候條件理想的年份，所有品種都能達到完美成熟度。此時釀酒師的任務是不要過度干預，讓每個品種發揮其最佳特質，創造出和諧的整體。',
        highlight: '2000、2016、2019、2020：近乎完美的平衡年份'
      }
    ]
  },

  {
    type: 'content',
    title: '案例研究：2010 vs 2013 年份調配策略',
    content: [
      {
        subtitle: '2010 年份：炎熱乾燥的完美年 ☀️',
        text: '**氣候特徵：** 炎熱乾燥，陽光充沛，被譽為21世紀最偉大的年份之一\n\n**面臨挑戰：**\n• 極高的成熟度與潛在的過度濃縮\n• 酸度偏低的風險\n• 酒精度可能過高（14-15%）\n• 單寧過於強勁\n\n**調配解決方案：**\n• 增加 Cabernet Franc 比例（+5-10%）來提升清新感\n• 選用較涼爽地塊或朝北坡面的葡萄\n• 縮短浸皮時間以避免過度萃取\n• 精準控制發酵溫度保留果香',
        highlight: '🏆 結果：創造出濃郁、強勁但平衡優雅的傳奇年份'
      },
      {
        subtitle: '案例：Château Pichon Baron 的 2010 調配',
        text: '**常規調配：** Cabernet Sauvignon 70% + Merlot 25% + Cabernet Franc 5%\n\n**2010 年份調配：** Cabernet Sauvignon 65% + Merlot 23% + Cabernet Franc 12%\n\n**策略理由：**\nPichon Baron 將 CF 比例從 5% 提升至 12%，是正常年份的 2.4 倍。這個大膽的調整成功地為這個炎熱年份注入了清新感和優雅度，同時保持了 CS 的結構感。結果獲得 RP 98 分的驚人評價。',
        highlight: '💡 關鍵：CF 從 5% → 12%，提升清新感與香氣複雜度'
      },
      {
        subtitle: '2013 年份：涼爽多雨的挑戰年 🌧️',
        text: '**氣候特徵：** 涼爽多雨，成熟期延長，是近年最具挑戰性的年份之一\n\n**面臨挑戰：**\n• 成熟度不足，尤其是 Cabernet Sauvignon\n• 酸度過高，口感尖銳\n• 果味不夠集中和飽滿\n• 單寧偏生澀，缺乏圓潤感\n\n**調配解決方案：**\n• 大幅增加 Merlot 比例（+10-15%）來補充果味\n• 嚴格選果，只選最成熟的串\n• 延長浸皮時間以增加萃取\n• 使用較高比例新橡木桶增添結構',
        highlight: '🎯 結果：在困難年份中仍創造出優雅平衡、值得陳年的酒款'
      },
      {
        subtitle: '案例：Château Lynch-Bages 的 2013 調配',
        text: '**常規調配：** Cabernet Sauvignon 73% + Merlot 15% + Cabernet Franc 10% + Petit Verdot 2%\n\n**2013 年份調配：** Cabernet Sauvignon 60% + Merlot 30% + Cabernet Franc 8% + Petit Verdot 2%\n\n**策略理由：**\nLynch-Bages 做出了戲劇性的調整，將 Merlot 比例從 15% 翻倍至 30%，同時將 CS 比例降低 13%。這個策略成功地為涼爽年份補充了圓潤度和果味，避免了過於尖銳的口感。最終獲得 RP 90 分，證明了調配技巧的重要性。',
        highlight: '💡 關鍵：Merlot 從 15% → 30%，補充圓潤度與早適飲性'
      }
    ],
    visualAid: {
      type: 'comparison-table',
      items: [
        {
          category: '氣候條件',
          year2010: '☀️ 炎熱乾燥（完美年）',
          year2013: '🌧️ 涼爽多雨（挑戰年）'
        },
        {
          category: '主要挑戰',
          year2010: '過度成熟、酸度不足',
          year2013: '成熟不足、酸度過高'
        },
        {
          category: '調配策略',
          year2010: '↑ CF (+5-10%) 增加清新',
          year2013: '↑ Merlot (+10-15%) 增圓潤'
        },
        {
          category: '最終風格',
          year2010: '濃郁強勁、超長陳年潛力',
          year2013: '優雅平衡、早期適飲'
        }
      ]
    }
  },

  // ========== 第七章：現代技術與調配創新 ==========
  {
    type: 'chapter-divider',
    chapter: '7',
    title: '現代技術與調配創新',
    subtitle: '科技賦能傳統藝術',
    icon: '🔬',
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },

  {
    type: 'content',
    title: '現代調配技術革新',
    content: [
      {
        subtitle: '精密分析技術的應用 🔬',
        text: '現代實驗室可以精確分析每個組成部分的化學成分，包括酚類化合物（單寧、花青素）、色素、香氣分子（如 Rotundone、TDN）等數百種化合物。這些數據為釀酒師提供了科學依據，使調配決策從「憑感覺」進化為「數據支持的直覺」。\n\n例如，釀酒師可以通過分析知道哪個桶的單寧成熟度最佳，哪個批次的香氣化合物最豐富，從而做出更精準的調配選擇。',
        highlight: '💡 化學分析 + 感官評估 = 更精準的調配決策（準確度提升 30%）'
      },
      {
        subtitle: '微氧化技術的革命 💨',
        text: '通過精確控制氧氣的接觸量（0.5-2 mg/L/月）和時間，釀酒師可以在調配階段就開始塑造酒款的質地和香氣發展方向。微氧化能軟化單寧、穩定色素、促進香氣分子的聚合，使不同組分更快地融合為和諧整體。\n\n這項技術讓調配後的酒款不需要長時間陳年就能達到較好的平衡感，大大縮短了從調配到裝瓶的時間週期。',
        highlight: '⚗️ 微氧化讓調配組分提前 6-12 個月達到和諧融合'
      },
      {
        subtitle: '數位化調配管理系統 💻',
        text: '先進的酒莊使用專業軟體系統記錄每次調配的詳細資料：每個桶的來源、品種、地塊、發酵參數、感官評分、最終使用比例等。經過多年累積，這些數據庫能夠分析歷史調配決策的效果，識別成功模式，為未來決策提供科學參考。\n\n例如，系統可以告訴釀酒師：「在過去 10 個年份中，當 CF 比例超過 15% 時，酒款在年輕時期的表現更優雅。」',
        highlight: '📊 大數據分析：10 年調配歷史形成決策支持系統'
      }
    ]
  },

  {
    type: 'content',
    title: '頂級酒莊採用的創新調配工具',
    content: [
      {
        subtitle: '光譜分析儀 - 化學成分的即時解碼 🔍',
        text: '**功能：** 使用近紅外光譜（NIR）或質譜技術，在幾分鐘內快速分析酒液的化學成分\n\n**核心優勢：**\n• 即時檢測總酚類、單寧、花青素含量\n• 預測葡萄酒的陳年潛力和發展軌跡\n• 確保批次間的品質一致性\n• 減少對傳統化學分析的依賴\n\n**採用現況：** 80% 的頂級酒莊（如五大一級莊）已經配備這項設備，投資成本 €50K-150K。',
        highlight: '⚡ 分析速度：從 2-3 天縮短至 5 分鐘'
      },
      {
        subtitle: '調配軟體系統 - AI 輔助的智慧決策 🖥️',
        text: '**功能：** 電腦輔助調配比例計算與模擬，整合歷史數據與預測模型\n\n**核心優勢：**\n• 快速試算數十種不同組合的理論效果\n• 預測調配後的成本效益與市場定位\n• 記錄完整調配歷史供未來參考\n• 整合實驗室數據自動生成建議\n\n**採用現況：** 65% 的中大型酒莊使用專業調配軟體，訂閱費用 €2K-10K/年。部分軟體開始整合機器學習模型。',
        highlight: '🤖 AI 建議：基於 1000+ 個調配案例的智慧推薦'
      },
      {
        subtitle: '標準化感官分析室 - 專業品鑑環境 👃',
        text: '**功能：** 按照國際標準（ISO 8589）設計的專業品鑑空間\n\n**核心優勢：**\n• 消除光線、溫度、氣味等環境干擾\n• 提供獨立品鑑隔間避免相互影響\n• 配備標準品鑑杯、吐酒設施、記錄系統\n• 支援團隊品鑑與盲品測試\n\n**採用現況：** 90% 的頂級酒莊擁有專業感官分析室，建設成本 €30K-100K。這是確保調配品質的基礎設施。',
        highlight: '🏛️ 標準環境：溫度 20±2°C、濕度 60-70%、中性光源'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '📈',
          title: '技術普及率',
          description: '80-90% 頂級酒莊',
          detail: '現代技術已成標配'
        },
        {
          icon: '💰',
          title: '投資回報',
          description: '品質提升 15-25%',
          detail: '精準度大幅提高'
        },
        {
          icon: '⏱️',
          title: '效率提升',
          description: '決策時間減少 40%',
          detail: '從數週縮短至數天'
        },
        {
          icon: '🎯',
          title: '一致性',
          description: '批次差異 < 5%',
          detail: '品質穩定性提升'
        }
      ]
    }
  },

  // ========== 知識檢測：現代技術與調配創新 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：現代技術與調配創新',
    questions: [
      {
        question: '光譜分析儀的主要優勢是什麼？',
        options: [
          '完全取代人工品鑑',
          '在幾分鐘內快速分析化學成分',
          '降低葡萄酒生產成本',
          '自動完成調配比例決策'
        ],
        correct: 1,
        explanation: '光譜分析儀使用近紅外光譜技術，能在5分鐘內快速檢測總酚類、單寧、花青素等成分，將傳統化學分析時間從2-3天縮短至幾分鐘。'
      },
      {
        question: '調配軟體系統如何輔助釀酒師決策？',
        options: [
          '自動替代釀酒師做出所有決策',
          '只負責記錄調配歷史數據',
          '快速試算多種組合並整合歷史數據提供建議',
          '僅用於計算成本效益'
        ],
        correct: 2,
        explanation: '調配軟體能快速試算數十種不同組合的理論效果，整合歷史數據與預測模型，提供智慧建議。部分軟體已開始整合機器學習，基於1000+個調配案例提供推薦。'
      }
    ]
  },

  // ========== 第八章：新世界與舊世界的調配理念 ==========
  {
    type: 'chapter-divider',
    chapter: '8',
    title: '新世界與舊世界調配理念',
    subtitle: '傳統與創新的對話',
    icon: '🌍',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },

  {
    type: 'content',
    title: '全球調配理念的三大流派',
    content: [
      {
        subtitle: '波爾多（舊世界）- 傳統與風土的守護者 🏛️',
        text: '**核心哲學：** 傳統與風土純粹表達\n\n**調配特徵：**\n• 嚴格遵循傳統品種組合（CS + Merlot + CF）\n• 強調風土的純粹表達，不過度人為干預\n• 追求優雅與平衡，而非極致的力量\n• 重視超長陳年潛力（20-50年）\n• 尊重 AOC 法規與傳統釀造方式\n\n**典型調配：** CS 50-80% + Merlot 15-40% + CF 5-15% + PV 0-5%\n\n**創新方式：** 在傳統框架內的微調創新（如調整比例、優化採收時機），但不會突破品種限制。',
        highlight: '🎯 關鍵詞：風土表達、優雅平衡、陳年潛力、傳統尊重'
      },
      {
        subtitle: '納帕谷（新世界）- 果味與現代風格的先鋒 🌟',
        text: '**核心哲學：** 果味表現與早期適飲\n\n**調配特徵：**\n• 更多創新品種組合嘗試（加入 Syrah、Zinfandel 等）\n• 強調濃郁果味與即時享受\n• 追求力量、濃郁度與視覺衝擊\n• 早期適飲性優先（3-10年適飲期）\n• 市場導向的風格設計\n\n**典型調配：** CS 70-90% + Merlot 5-15% + 創新小品種（Petite Sirah、Malbec）0-10%\n\n**創新方式：** 大膽嘗試新品種組合，不受傳統限制。例如 Opus One 採用 CS 80% + CF 7% + Merlot 6% + Malbec 4% + PV 3% 的創新配方。',
        highlight: '🎯 關鍵詞：濃郁果味、早期適飲、創新組合、市場導向'
      },
      {
        subtitle: '澳洲（新世界）- 技術驅動的實用主義 🔬',
        text: '**核心哲學：** 科技輔助與成本效益\n\n**調配特徵：**\n• 科技輔助決策（光譜分析、預測模型）\n• 市場導向的靈活調配\n• 追求穩定品質與批次一致性\n• 成本效益與規模化生產考量\n• 大膽跨區域調配（South Australia + Barossa）\n\n**典型調配：** 靈活多變，從 CS + Shiraz 到 Grenache + Shiraz + Mourvèdre（GSM）\n\n**創新方式：** 技術創新引領調配，例如 Penfolds 的多區域調配理念（跨越數百公里選取最佳葡萄），這在波爾多是不可想像的。',
        highlight: '🎯 關鍵詞：科技驅動、靈活調配、穩定品質、跨區域混釀'
      }
    ],
    visualAid: {
      type: 'comparison-table',
      items: [
        {
          category: '核心價值',
          oldWorld: '🏛️ 風土表達與傳統',
          newWorld: '🌟 果味表現與創新'
        },
        {
          category: '品種限制',
          oldWorld: '✓ 嚴格遵循 AOC 規範',
          newWorld: '✗ 自由嘗試新組合'
        },
        {
          category: '陳年目標',
          oldWorld: '⏰ 20-50年超長陳年',
          newWorld: '⏱️ 3-10年早期適飲'
        },
        {
          category: '風格追求',
          oldWorld: '⚖️ 優雅、平衡、精緻',
          newWorld: '💪 力量、濃郁、果味'
        },
        {
          category: '技術應用',
          oldWorld: '🎨 傳統為主，技術為輔',
          newWorld: '🔬 技術引領，數據支持'
        },
        {
          category: '調配靈活度',
          oldWorld: '📏 框架內微調（±5%）',
          newWorld: '🎲 大膽實驗（±20%）'
        }
      ]
    }
  },

  {
    type: 'content',
    title: '調配理念的演進趨勢',
    content: [
      {
        subtitle: '舊世界的現代化',
        text: '傳統產區如波爾多正在吸收新世界的技術創新，同時保持自身的風土特色。現代化設備的引入並沒有改變基本的調配哲學，而是讓傳統理念得到更精確的執行。',
        highlight: '技術現代化 + 傳統理念 = 進化的經典風格'
      },
      {
        subtitle: '新世界的精緻化',
        text: '新世界產區越來越重視風土表達和調配的精緻度，從早期的果味主導風格逐漸發展出更具複雜性和陳年潛力的調配理念。',
        highlight: '從簡單果味到復雜優雅的風格轉變'
      },
      {
        subtitle: '全球化的影響',
        text: '國際市場的需求和酒評家的偏好正在影響全球的調配趨勢，促進了不同產區間的相互學習和融合。',
        highlight: '全球化推動調配理念的交流與融合'
      }
    ]
  },

  // ========== 知識檢測：新世界與舊世界的調配理念 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：新世界與舊世界的調配理念',
    questions: [
      {
        question: '舊世界（波爾多）與新世界在調配理念上最核心的差異是什麼？',
        options: [
          '使用的葡萄品種完全不同',
          '舊世界追求風土表達，新世界追求風格一致性',
          '舊世界不使用科技，新世界完全依賴技術',
          '新世界的葡萄酒品質更高'
        ],
        correct: 1,
        explanation: '舊世界波爾多強調「風土表達」，調配是為了反映年份和地塊特性；新世界則追求「風格一致性」，調配是為了每年達到設定的目標風格。這是兩者最核心的哲學差異。'
      },
      {
        question: '在陳年潛力方面，波爾多傳統調配與新世界有何不同？',
        options: [
          '波爾多追求3-10年早期適飲',
          '新世界追求20-50年超長陳年',
          '波爾多追求20-50年超長陳年',
          '兩者陳年潛力完全相同'
        ],
        correct: 2,
        explanation: '波爾多傳統調配追求20-50年超長陳年潛力，透過高比例Cabernet Sauvignon和優雅平衡的風格；新世界則多追求3-10年的早期適飲性，強調果味濃郁和即時享受。'
      }
    ]
  },

  // ========== 第九章：調配品鑑實務 ==========
  {
    type: 'chapter-divider',
    chapter: '9',
    title: '調配品鑑實務',
    subtitle: '培養專業的調配感知力',
    icon: '👅',
    background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
  },

  {
    type: 'content',
    title: '專業調配品鑑技巧',
    content: [
      {
        subtitle: '第一步：視覺評估 - 色澤的語言 👁️',
        text: '**目標：** 觀察調配後的色澤變化與和諧度\n\n**關鍵技巧：**\n• 比較各組分的顏色深度（CS 深紫色 vs Merlot 寶石紅）\n• 觀察調配後的色調變化（是否更和諧？）\n• 評估透明度和光澤（淡淡的水緣表示陳年潛力）\n• 預測陳年後的色澤發展（紫紅 → 石榴紅 → 磚紅）\n\n**專業要點：**\n在白色背景下傾斜酒杯 45°，觀察酒的邊緣。顏色的和諧度往往反映調配的成功程度 — 優秀的調配會展現統一而深邃的色澤。',
        highlight: '💡 評估時間：30-60 秒 | 關鍵：色調和諧、深度一致'
      },
      {
        subtitle: '第二步：香氣分析 - 複雜度的證明 👃',
        text: '**目標：** 識別調配帶來的香氣複雜度與層次\n\n**分層聞香法：**\n1. **第一印象（前調）：** 輕聞一下，捕捉最明顯的香氣\n   - CS：黑醋栗、青椒\n   - Merlot：李子、櫻桃\n   - CF：紫羅蘭、鉛筆芯\n\n2. **深度香氣（中調）：** 搖杯後再聞，感受複雜度\n   - 橡木桶香氣（香草、煙燻）\n   - 三級香氣（皮革、菌菇）\n\n3. **餘韻（後調）：** 聞空杯，評估持久度\n\n**關鍵評估：**\n優秀的調配會產生單一品種無法達到的香氣複雜度。你應該能辨識出不同品種的貢獻，但它們應該和諧融合而非各自為政。',
        highlight: '💡 評估時間：2-3 分鐘 | 關鍵：層次與和諧度'
      },
      {
        subtitle: '第三步：口感評估 - 結構的平衡 👅',
        text: '**目標：** 感受調配對整體結構的影響\n\n**系統性品鑑步驟：**\n\n1. **入口第一印象（Attack）：**\n   • 果味的爆發感（Merlot 貢獻）\n   • 酸度的活力（CF 貢獻）\n   • 單寧的存在感（CS 貢獻）\n\n2. **中段平衡性（Mid-Palate）：**\n   • 果味、酸度、單寧、酒精的平衡\n   • 酒體的寬度與深度\n   • 質地的細膩度\n\n3. **尾韻長度（Finish）：**\n   • 餘味持續時間（優秀調配 > 60 秒）\n   • 香氣的變化與發展\n   • 收結的乾淨度\n\n**專業要點：**\n完美的調配應該讓各組分渾然一體，不見接縫。你不應該感覺到「這是 CS，那是 Merlot」，而是「這是一款和諧的整體」。',
        highlight: '💡 評估時間：1-2 分鐘 | 關鍵：平衡、融合、餘韻'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '👁️',
          title: '視覺評估',
          description: '30-60 秒',
          detail: '顏色和諧、深度一致'
        },
        {
          icon: '👃',
          title: '香氣分析',
          description: '2-3 分鐘',
          detail: '分層聞香、複雜度評估'
        },
        {
          icon: '👅',
          title: '口感評估',
          description: '1-2 分鐘',
          detail: '結構平衡、融合度'
        },
        {
          icon: '⏱️',
          title: '總評估時間',
          description: '4-6 分鐘/樣',
          detail: '專業品鑑流程'
        }
      ]
    }
  },

  {
    type: 'content',
    title: '調配品鑑的三大練習方法',
    content: [
      {
        subtitle: '初級練習：品種識別能力 🎓',
        text: '**目標：** 在混釀中識別各個品種的特徵\n\n**練習方法：**\n先分別品嚐單一品種，熟悉各自特徵：\n\n• **Cabernet Sauvignon 單獨品鑑：**\n  - 香氣：黑醇粟、青椒、雪松木\n  - 口感：高單寧、堅實結構、酸度中等\n\n• **Merlot 單獨品鑑：**\n  - 香氣：李子、櫻桃、巧克力\n  - 口感：柔順單寧、圓潤酒體、酸度較低\n\n• **Cabernet Franc 單獨品鑑：**\n  - 香氣：紫羅蘭、鉛筆芯、草莓\n  - 口感：中等單寧、高酸度、優雅質地\n\n**進階練習：**\n嘗試品鑑簡單混釀：\n- CS 70% + Merlot 30%：識別 CS 的結構感\n- Merlot 60% + CF 40%：識別 CF 的花香特質',
        highlight: '🎯 成功標準：80% 以上的正確識別率'
      },
      {
        subtitle: '中級練習：比例判斷能力 📊',
        text: '**目標：** 估算混釀中各品種的大致比例\n\n**練習方法：**\n\n1. **三種基礎混釀熟悉：**\n   - CS 主導（> 65%）：結構感明顯、單寧高\n   - Merlot 主導（> 60%）：果味豐富、柔順圓潤\n   - 平衡型（CS 50-60%）：結構與果味並重\n\n2. **盲品挑戰：**\n   品鑑神秘樣品，嘗試判斷：\n   - 主導品種是什麼？\n   - 大致比例範圍（±10%）\n   - 是否有小比例的第三品種？\n\n**實例練習：**\n神秘樣品 A：\n- 實際配方：CS 65% + M 25% + CF 10%\n- 練習目標：僅通過品鑑判斷比例（誤差 < 15%）',
        highlight: '🎯 成功標準：比例判斷誤差 < 15%'
      },
      {
        subtitle: '高級練習：調配改善建議 💡',
        text: '**目標：** 為給定的調配提出專業改善建議\n\n**情境模擬：**\n\n**案例 1：單寧過強的混釀**\n- 現有配方：CS 80% + Merlot 15% + CF 5%\n- 問題：單寧過於強勁，口感生澀\n- 你的建議？\n\n**參考解法：**\n• 增加 Merlot 至 25-30% 來軟化單寧\n• 或增加 CF 至 10-15% 來提升優雅度\n• 考慮減少新橡木桶比例\n\n**案例 2：果味不足的混釀**\n- 現有配方：CS 75% + CF 20% + Merlot 5%\n- 問題：結構感好但果味單薄\n- 你的建議？\n\n**參考解法：**\n• 大幅提升 Merlot 至 20-30%\n• 選用果味更豐富的地塊\n• 考慮縮短浸皮時間保留新鮮果香',
        highlight: '🎯 成功標準：能提出 3 個以上可行解法並說明理由'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '🎓',
          title: '初級：品種識別',
          description: '正確率 > 80%',
          detail: '熟悉單一品種特徵'
        },
        {
          icon: '📊',
          title: '中級：比例判斷',
          description: '誤差 < 15%',
          detail: '估算調配比侏'
        },
        {
          icon: '💡',
          title: '高級：改善建議',
          description: '3+ 解法',
          detail: '提出專業優化方案'
        },
        {
          icon: '⏱️',
          title: '練習週期',
          description: '6-12 個月',
          detail: '從初級到高級'
        }
      ]
    }
  },

  // ========== 第十章：課程總結與進階學習 ==========
  {
    type: 'chapter-divider',
    chapter: '10',
    title: '課程總結與進階學習',
    subtitle: '調配藝術的持續探索',
    icon: '🎓',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    type: 'content',
    title: '調配藝術的核心要點總結',
    content: [
      {
        subtitle: '基礎原理：調配的本質 🎯',
        text: '通過本課程的學習，我們理解了調配的三大基本原理：\n\n• **複雜度與平衡的創造：** 調配不是簡單的混合，而是為了創造出任何單一品種都無法達到的複雜度與平衡感。就像交響樂中不同樂器的和諧，1+1+1 > 3。\n\n• **品種角色的精準分工：** Cabernet Sauvignon 提供骨架與結構，Merlot 賦予肉感與果味，Cabernet Franc 增添優雅與香氣。每個品種都有其不可取代的角色。\n\n• **釀酒師風格的表達：** 調配比例不僅是技術決策，更反映了釀酒師的美學理念、哲學思考與個人風格。每 1% 的調整都能改變風格。',
        highlight: '💡 核心理念：調配 = 藝術 + 科學 + 哲學'
      },
      {
        subtitle: '實務技巧：從理論到實踐 🔬',
        text: '我們掌握了專業調配的三大實務技巧：\n\n• **系統性的品鑑流程：** 從視覺評估到香氣分析，再到口感判斷，每個步驟都至關重要。完整的品鑑需要 4-6 分鐘，不能急於下結論。\n\n• **小樣試調的智慧：** 在正式調配前，先進行小比例試驗（100-200ml），可以節約成本並快速驗證想法。一次性混合 5-10 個不同比例來比較。\n\n• **團隊品鑑的價值：** 多人品鑑有助於減少個人偏好的影響，獲得更客觀的評估。頂級酒莊通常有 5-10 人的品鑑團隊。',
        highlight: '💡 實踐經驗：品鑑 + 試驗 + 協作 = 成功調配'
      },
      {
        subtitle: '決策因素：影響調配的變數 🌡️',
        text: '我們分析了影響調配決策的三大關鍵因素：\n\n• **年份特徵的應對：** 溫暖年份增加 CF 提升清新，涼爽年份增加 Merlot 補充果味。靈活調整比例（±10-15%）是應對氣候變化的關鍵。\n\n• **市場需求的引導：** 消費者偏好從「需要陳年」轉向「早期適飲」，促使酒莊增加 Merlot 比例。同時注重果味表現與柔順口感。\n\n• **現代技術的賦能：** 光譜分析、微氧化、AI 輔助等技術為傳統調配提供了新工具，使決策更精準、品質更穩定。',
        highlight: '💡 靈活策略：氣候 + 市場 + 技術 = 動態調配'
      },
      {
        subtitle: '發展趨勢：調配藝術的未來 🚀',
        text: '我們探討了調配領域的三大發展趨勢：\n\n• **新舊世界的融合：** 舊世界吸收新世界的技術創新，新世界學習舊世界的風土表達。邊界正在模糊，形成新的全球風格。\n\n• **永續發展的追求：** 有機農法、生物動力法、氣候變化應對等理念，影響著品種選擇與調配策略。未來可能看到更多抗病品種的應用。\n\n• **個性化的凸強：** 市場從追求「標準化」轉向「個性化」和「差異化」。釀酒師有更多空間表達獨特風格，創造獨一無二的作品。',
        highlight: '💡 未來方向：融合 + 永續 + 個性 = 新時代調配'
      }
    ]
  },

  {
    type: 'content',
    title: '進階學習路徑與建議',
    content: [
      {
        subtitle: '實務進階：參與實際調配 🏭',
        text: '**目標：** 從理論學習進入實際操作\n\n**學習方法：**\n• **參觀酒莊調配過程：** 在 3-6 月期間訪問波爾多酒莊，觀察釀酒師如何逐桶品鑑與調配\n• **參加專業工作坊：** 報名 WSET、Court of Master Sommeliers 的調配專門課程\n• **小規模調配實驗：** 購買單一品種酒款，自己嘗試不同比例的調配實驗\n• **建立品鑑筆記：** 系統性記錄每次品鑑的感受與發現，累積個人資料庫\n\n**學習資源：**\n- 專業調配課程（WSET Level 4、DipWSET）\n- 波爾多酒莊實習機會\n- 調配設備供應商（如品鑑杯、小樣瓶）',
        highlight: '🎯 學習週期：6-12 個月 | 投入：€2K-10K'
      },
      {
        subtitle: '理論深化：深入研究調配科學 📚',
        text: '**目標：** 從感性認識提升到科學理解\n\n**研究方向：**\n• **葡萄酒化學知識：** 學習酚類化合物、花青素、香氣分子的化學機制，理解調配如何影響化學平衡\n• **產區調配傳統：** 比較波爾多、勃根第、納帕谷、托斯卡納等不同產區的調配哲學\n• **最新技術發展：** 關注光譜分析、AI 輔助、微氧化等新技術的應用\n• **案例研究：** 深入分析 Opus One、Sassicaia、Tignanello 等成功調配案例\n\n**學習資源：**\n- 專業期刊（Journal of Wine Economics、Wine & Viticulture Journal）\n- 產業研討會（Vinexpo、ProWein）\n- 學術研究機構（UC Davis、Bordeaux Sciences Agro）',
        highlight: '🎯 學習週期：1-2 年 | 目標：Master of Wine 等級'
      },
      {
        subtitle: '商業應用：調配的商業化運用 💼',
        text: '**目標：** 將調配知識轉化為商業價值\n\n**應用領域：**\n• **市場偏好研究：** 了解亞洲市場偏好柔順風格，歐美市場偏好結構感，調整調配策略\n• **成本控制與品質平衡：** 學習如何在保持品質的前提下優化成本（如正副牌分選）\n• **行銷策略與故事：** 掌握如何說好調配故事，將技術轉化為消費者能理解的價值\n• **消費者行為研究：** 分析年輕世代對早期適飲的需求，調整產品定位\n\n**學習資源：**\n- 市場調研報告（IWSR、Wine Intelligence）\n- 商業案例研究（Harvard Business School）\n- 行業專家訪談（釀酒師、采購經理、行銷總監）',
        highlight: '🎯 應用場景：酒莊、貿易、評分、教育'
      }
    ],
    visualAid: {
      type: 'info-grid',
      items: [
        {
          icon: '🏭',
          title: '實務進階',
          description: '6-12 個月',
          detail: '工作坊 + 實習 + 實驗'
        },
        {
          icon: '📚',
          title: '理論深化',
          description: '1-2 年',
          detail: 'MW/DipWSET 等級'
        },
        {
          icon: '💼',
          title: '商業應用',
          description: '持續學習',
          detail: '市場 + 成本 + 行銷'
        },
        {
          icon: '🎓',
          title: '終身學習',
          description: '無限期',
          detail: '調配藝術的探索'
        }
      ]
    }
  },

  // ========== 知識檢測：調配品鑑實務 ==========
  {
    type: 'interactive-quiz',
    title: '知識檢測：調配品鑑實務',
    questions: [
      {
        question: '在專業調配品鑑中，識別各個品種特徵的成功標準是什麼？',
        options: [
          '正確率達到60%以上',
          '正確率達到80%以上',
          '正確率達到90%以上',
          '正確率達到100%'
        ],
        correct: 1,
        explanation: '初級練習的目標是在混釀中識別各品種特徵，成功標準為80%以上的正確識別率。這需要先熟悉CS、Merlot、CF各自的香氣和口感特徵。'
      },
      {
        question: '當混釀出現「單寧過於強勁，口感生澀」的問題時，最有效的調配改善方法是？',
        options: [
          '增加 Cabernet Sauvignon 比例',
          '增加 Merlot 比例來軟化單寧',
          '減少所有葡萄品種的比例',
          '延長浸皮時間'
        ],
        correct: 1,
        explanation: '當單寧過強時（如CS 80%配方），應增加Merlot至25-30%來軟化單寧，或增加CF至10-15%提升優雅度，也可考慮減少新橡木桶比例。'
      }
    ]
  },

  {
    type: 'quiz-comprehensive',
    title: '綜合能力測驗',
    description: '測試您對調配藝術的整體理解',
    timeLimit: 25,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        question: '在波爾多左岸的經典調配中，Cabernet Sauvignon通常扮演什麼角色？',
        options: [
          '提供果味和柔順度',
          '增加花香和酸度',
          '構建結構和陳年潛力',
          '降低酒精度'
        ],
        correct: 2,
        explanation: 'Cabernet Sauvignon在左岸調配中主要負責提供堅實的結構、深邃的顏色和優異的陳年潛力，是酒款的骨架。'
      },
      {
        id: 2,
        type: 'scenario',
        question: '2018年是一個溫暖乾燥的年份，如果您是Pauillac酒莊的釀酒師，您會如何調整正常的調配比例？',
        scenario: '正常年份調配：CS 70% + M 25% + CF 5%',
        options: [
          '增加Merlot比例到35%',
          '增加Cabernet Franc比例到12%',
          '減少所有品種，只用Cabernet Sauvignon',
          '保持比例不變'
        ],
        correct: 1,
        explanation: '在溫暖年份，增加Cabernet Franc的比例可以為酒款帶來更多的清新感、優雅度和酸度平衡，避免過度厚重。'
      },
      {
        id: 3,
        type: 'analysis',
        question: '分析以下調配比例的風格特點：Merlot 85% + Cabernet Franc 15%',
        options: [
          '結構強勁，需要長期陳年',
          '柔順圓潤，早期適飲性佳',
          '酸度突出，風格清新',
          '單寧厚重，適合搭配重口味料理'
        ],
        correct: 1,
        explanation: '高比例的Merlot會創造出柔順圓潤的口感，配合少量Cabernet Franc增加複雜度，整體風格偏向易飲和優雅。'
      }
    ]
  },

  {
    type: 'certificate',
    title: '課程完成證書',
    achievement: 'L3-6 調配藝術與釀酒師哲學',
    description: '恭喜您完成了調配藝術的深度學習！您已經掌握了波爾多調配的核心原理、實務技巧和專業判斷能力。',
    skills: [
      '理解波爾多經典調配比例與原理',
      '掌握不同葡萄品種在調配中的角色',
      '了解釀酒師的調配決策過程',
      '具備基礎的調配品鑑能力',
      '認識年份差異對調配策略的影響'
    ],
  nextSteps: '建議繼續學習L3-5：釀造工藝與技術創新（含傳統工藝章節），從釀造角度深化對風格與調配決策的理解。',
    certificate: '您已獲得本課程學習證明',
    shareMessage: '我剛完成了Level 3的「調配藝術與釀酒師哲學」課程！深入了解了波爾多混釀的奧秘，從基礎原理到實務技巧。 #波爾多葡萄酒 #調配藝術 #葡萄酒學習'
  }
];

export default l36Content;
