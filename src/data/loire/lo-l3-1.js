/**
 * LO-L3-1 白詩南工藝入門——安茹干白與索米爾白酒
 * AOCs: Anjou Blanc、Saumur Blanc
 * 主題：Chenin Blanc 干白、橡木桶/不鏽鋼選擇、Anjou vs Saumur 風土差異
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          當人們提到 Chenin Blanc，多數會立刻想到甜美的萊揚或多甜度的伏弗雷。但 Chenin 真正展現「驚人陳年潛力」的舞台，反而是<strong>骨感乾型</strong>的 Anjou Blanc 與 Saumur Blanc。這兩個 AOC 是 Chenin Blanc 干白的入門經典，也是品評白詩南最佳的起點。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 Chenin Blanc 品種特性</h4>
            <p>掌握 Chenin 的酸度、酚化合物、香氣譜系與成熟度差異</p>
          </div>
          <div class="point-item">
            <h4>🪨 Anjou Noir vs Saumur Blanc</h4>
            <p>區分黑色片岩與白色凝灰岩兩種完全不同的風土邏輯</p>
          </div>
          <div class="point-item">
            <h4>🛢️ 釀造工藝選擇</h4>
            <p>不鏽鋼槽 vs 大型舊橡木桶 vs 阿姆福拉甕的影響</p>
          </div>
          <div class="point-item">
            <h4>🌟 名家典範</h4>
            <p>認識 Domaine des Roches Neuves、Domaine du Closel、Nicolas Joly 等代表生產者</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireGrapeProfileSlide',
    title: 'Chenin Blanc——白詩南完整檔案',
    componentProps: {
      slide: {
        title: 'Chenin Blanc——白詩南完整檔案',
        description: '世界上最具表現力的白葡萄品種之一——能釀干、半甜、貴腐甜、氣泡、新世界乾型，全在 Loire 找到原點',
        defaultKey: 'chenin'
      }
    }
  },

  {
    title: 'Anjou Blanc 與 Saumur Blanc——兩種風土哲學',
    highlights: [
      { id: 1, icon: '🌑', title: 'Anjou Noir', content: '黑色安茹——以 Brioverian 片岩為主，深色土壤、礦物張力強' },
      { id: 2, icon: '⚪', title: 'Saumur Blanc 風土', content: 'Tuffeau 凝灰岩主導，與 Vouvray 同質——白堊礦物、優雅平衡' },
      { id: 3, icon: '🍇', title: '相同品種、不同性格', content: 'Anjou Blanc 較奔放、Saumur Blanc 較內斂優雅' }
    ],
    content: `
      <div class="anjou-saumur-compare">
        <p class="lead-text">雖然 Anjou Blanc 與 Saumur Blanc 兩個 AOC 地理上相鄰、品種同為 Chenin Blanc，但土壤的劇烈差異——黑色片岩 vs 白色凝灰岩——讓它們呈現完全不同的個性，這也是為何 Loire 中游被稱為「Chenin 風土博物館」。</p>
        <div class="compare-grid">
          <div class="compare-block anjou">
            <h4>🌑 Anjou Blanc（安茹白）</h4>
            <ul>
              <li><strong>地理：</strong>Anjou Noir 黑色安茹，Maine-et-Loire 省西南</li>
              <li><strong>土壤：</strong>Brioverian 片岩（前寒武紀晚期，藍黑色）+ 部分火山岩</li>
              <li><strong>面積：</strong>約 1,000 公頃</li>
              <li><strong>規範：</strong>≥ 80% Chenin Blanc，可混 ≤ 20% Sauvignon Blanc/Chardonnay</li>
              <li><strong>糖度：</strong>多為干型（Sec），少數 Demi-Sec</li>
              <li><strong>風格：</strong>奔放、礦物深沉、燧石+石墨香、酒體紮實</li>
              <li><strong>陳年：</strong>頂級酒款 5–10 年</li>
            </ul>
          </div>
          <div class="compare-block saumur">
            <h4>⚪ Saumur Blanc（索米爾白）</h4>
            <ul>
              <li><strong>地理：</strong>Saumur 城周邊，Loire 與 Thouet 河匯流處</li>
              <li><strong>土壤：</strong>Tuffeau 凝灰岩（白堊紀晚期）為主，部分 Limestone</li>
              <li><strong>面積：</strong>約 800 公頃</li>
              <li><strong>規範：</strong>≥ 80% Chenin Blanc，可混 ≤ 20% Sauvignon Blanc/Chardonnay</li>
              <li><strong>糖度：</strong>Sec 為主</li>
              <li><strong>風格：</strong>白堊礦物、白花、青蘋果、檸檬皮、優雅平衡</li>
              <li><strong>陳年：</strong>頂級酒款 5–8 年</li>
            </ul>
          </div>
        </div>
        <div class="key-difference">
          <h4>🔍 一句話判別：</h4>
          <p><strong>Anjou Blanc 像 Chenin 的「越野跑者」</strong>——力量強、礦物深、有點野性。<br><strong>Saumur Blanc 像 Chenin 的「芭蕾舞者」</strong>——優雅、輕盈、白堊礦物精細。</p>
        </div>
      </div>
    `,
    quiz: {
      question: 'Anjou Blanc 與 Saumur Blanc 最關鍵的風土差異是？',
      options: [
        '葡萄品種不同',
        '土壤——Anjou 以片岩為主，Saumur 以 Tuffeau 凝灰岩為主',
        '氣候差異極大',
        '釀造規範完全不同'
      ],
      correct: 1,
      explanation: '兩個 AOC 都規定 ≥ 80% Chenin Blanc，氣候與規範相近。最關鍵差異在土壤：Anjou Noir 的 Brioverian 片岩（前寒武紀，藍黑色）vs Saumur 的 Tuffeau 凝灰岩（白堊紀，雪白多孔）。這個地質分界線讓兩岸的 Chenin Blanc 呈現截然不同的礦物質地：片岩的「石墨/燧石」 vs 凝灰岩的「白堊/濕石」。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Anjou Blanc & Saumur Blanc 地圖',
    componentProps: {
      slide: {
        title: 'Anjou Blanc & Saumur Blanc 地圖',
        description: '黑色片岩（Anjou Noir）vs 白色凝灰岩（Saumur Tuffeau）——同是 Chenin Blanc，兩種截然不同的地質分界在地圖上清楚可見',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Anjou.geojson', 'Saumur.geojson'],
      }
    }
  },

  {
    title: 'Savennières——Anjou 干白的金字塔頂',
    highlights: [
      { id: 1, icon: '🏆', title: '頂級子產區', content: '位於 Anjou 內，僅產干型 Chenin Blanc 白酒' },
      { id: 2, icon: '🌋', title: '火山岩風土', content: 'Anjou 罕見——火山岩與片岩混合，賦予獨特熱帶礦物張力' },
      { id: 3, icon: '👑', title: '兩個獨立 Cru', content: 'Coulée de Serrant（7 公頃，獨家擁有）與 La Roche-aux-Moines' }
    ],
    content: `
      <div class="savennieres-intro">
        <p class="lead-text">Savennières 是 Anjou Blanc 內的頂級子 AOC，獨立於主 AOC 體系，被視為 Chenin Blanc 干白的世界標竿。它的特殊地質條件——火山岩 + 片岩 + 砂質——讓 Chenin 展現極為集中的礦物深度與陳年潛力（頂級酒款可放 30+ 年）。</p>
        <div class="savennieres-features">
          <h4>📐 Savennières 規範</h4>
          <ul>
            <li><strong>面積：</strong>約 145 公頃</li>
            <li><strong>品種：</strong>100% Chenin Blanc</li>
            <li><strong>糖度：</strong>僅 Sec（&lt; 8 g/L）——這是 Loire 唯一禁止甜酒的高級 Chenin AOC</li>
            <li><strong>產量上限：</strong>50 hL/ha（嚴於一般 Anjou Blanc 的 60 hL/ha）</li>
            <li><strong>採收：</strong>必須手工，多次採摘允許</li>
          </ul>
        </div>
        <div class="savennieres-crus">
          <h4>🌟 兩個獨立 Cru AOC</h4>
          <ul>
            <li><strong>Coulée de Serrant：</strong>7 公頃，由 Nicolas Joly 家族（Domaine de la Coulée de Serrant）獨家擁有自 1130 年。Joly 是生物動力法（Biodynamie）的全球先驅，酒款被視為「自然酒」運動的精神原點之一</li>
            <li><strong>La Roche-aux-Moines：</strong>33 公頃，多家酒莊共享。代表生產者：Domaine aux Moines、Château de Chamboureau</li>
          </ul>
        </div>
        <div class="savennieres-style">
          <h4>🍷 風格特徵</h4>
          <p>年輕時：青蘋果、桲果、洋甘菊、白花、燧石礦物 → 帶著緊澀的酸度與 phénolique 質感（Chenin 特有的微苦/澀感，類似柚皮）。</p>
          <p>陳年後：蜂蠟、烤榛果、馬德拉風格氧化香、咖哩、乾草——10–30 年陳年潛力是 Loire 干白之最。</p>
        </div>
      </div>
    `
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Savennières 三層級地圖',
    componentProps: {
      slide: {
        title: 'Savennières 三層級地圖',
        description: 'Anjou 干白金字塔頂——主 AOC Savennières（145 ha）內嵌套 La Roche-aux-Moines（33 ha）與 Coulée de Serrant（7 ha）的精確位置',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Savennières.geojson', 'Savennières-Roche-aux-Moines.geojson', 'Coulée-de-Serrant.geojson'],
      }
    }
  },

  {
    title: '釀造工藝對 Chenin 干白的影響',
    highlights: [
      { id: 1, icon: '🥶', title: '不鏽鋼槽', content: '保留純淨果香、礦物張力、入門級酒款主流' },
      { id: 2, icon: '🛢️', title: '舊橡木桶', content: '頂級酒莊愛用——不會帶來明顯橡木味，但增加質地深度' },
      { id: 3, icon: '🏺', title: '阿姆福拉/混凝土蛋', content: '新趨勢——保留礦物純淨度的同時增加複雜度' }
    ],
    content: `
      <div class="chenin-vinification">
        <p class="lead-text">Chenin Blanc 對橡木桶的反應與 Chardonnay 大不相同——它不喜歡「香草+奶油」的新桶調性，反而與「中性容器」更契合。這是為何 Loire Chenin 干白多使用大型舊橡木桶（500–600 L Demi-Muid）而非標準 225 L Barrique。</p>
        <div class="vinification-grid">
          <div class="vini-block">
            <h4>🥶 不鏽鋼槽（Cuve Inox）</h4>
            <ul>
              <li><strong>特性：</strong>溫控精準、無氧化、無風味添加</li>
              <li><strong>保留：</strong>新鮮果香、礦物質感、酸度純淨</li>
              <li><strong>適用：</strong>入門級 Anjou Blanc、Saumur Blanc、Vouvray Sec</li>
              <li><strong>缺點：</strong>缺乏質地深度，陳年潛力有限</li>
            </ul>
          </div>
          <div class="vini-block">
            <h4>🛢️ 大型舊橡木桶（Demi-Muid 500–600 L）</h4>
            <ul>
              <li><strong>特性：</strong>桶容量大、橡木味釋放慢、微氧化</li>
              <li><strong>影響：</strong>不增加明顯橡木味，但讓酒質更圓潤、結構更紮實</li>
              <li><strong>適用：</strong>頂級 Savennières、Saumur Premier Cru、頂級 Vouvray Sec</li>
              <li><strong>名家：</strong>Domaine du Closel、Château d'Epiré、Roches Neuves</li>
            </ul>
          </div>
          <div class="vini-block">
            <h4>🏺 阿姆福拉/混凝土蛋（Amphora / Tinaja / Concrete Egg）</h4>
            <ul>
              <li><strong>特性：</strong>無風味添加、容許微量氧氣、自然對流</li>
              <li><strong>影響：</strong>純淨礦物 + 質地圓潤兼具</li>
              <li><strong>適用：</strong>新世代自然酒釀造</li>
              <li><strong>名家：</strong>Vincent Carême、Domaine de la Sénéchalière</li>
            </ul>
          </div>
        </div>
        <div class="lees-stirring">
          <h4>🌀 酒泥陳釀（Sur lie / Bâtonnage）</h4>
          <p>許多頂級 Chenin 干白會在容器中與酒泥（lees）長期接觸 6–18 個月，並定期攪拌（bâtonnage）。這個工藝賦予 Chenin 額外的圓潤質地、堅果香氣與更穩定的氧化抗性，是 Saumur Blanc 與 Savennières 的常見作法。</p>
        </div>
      </div>
    `,
    quiz: {
      question: '為何 Chenin Blanc 干白較少使用全新 225L 橡木桶？',
      options: [
        'Chenin 不適合任何橡木接觸',
        'Chenin 的香氣纖細，新桶的香草/奶油調容易蓋過品種特性，Loire 釀酒師偏好大型舊桶或中性容器',
        '法規禁止',
        '橡木桶太貴'
      ],
      correct: 1,
      explanation: 'Chenin Blanc 的香氣譜系（青蘋果、桲果、白花、礦物）非常纖細，新桶帶來的香草、奶油、烤麵包調很容易掩蓋品種與風土特性。這就是為何 Loire 的頂級 Chenin（Savennières、Saumur Blanc、Vouvray Sec）多使用 500–600L 的 Demi-Muid 大桶或中性的不鏽鋼/混凝土蛋。對比之下，Chardonnay（如勃艮第）能與新桶香氣較好融合。'
    }
  },

  {
    type: 'quiz',
    title: 'Level 3-1 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Anjou Blanc AOC 的最低 Chenin Blanc 比例是？',
        options: ['100%', '80%', '60%', '50%'],
        correctIndex: 1,
        explanation: 'Anjou Blanc 規定 ≥ 80% Chenin Blanc，可混入 ≤ 20% Sauvignon Blanc 與/或 Chardonnay。這個彈性讓酒莊能調整風格——多數頂級酒款仍選擇 100% Chenin，少數混入 Sauvignon 增加芳香度。Saumur Blanc 規範相同。'
      },
      {
        id: 'q2',
        question: 'Savennières AOC 規定可生產的甜度級別是？',
        options: [
          'Sec / Demi-Sec / Moelleux 全部',
          '僅 Sec（干型）',
          '僅 Demi-Sec（半干）',
          '僅 Moelleux（甜型）'
        ],
        correctIndex: 1,
        explanation: 'Savennières 是 Loire 唯一規定僅能生產 Sec（干型，殘糖 &lt; 8 g/L）的高級 Chenin Blanc AOC。這個嚴格規範強迫酒莊聚焦於 Chenin 干白的極致表現，不讓殘糖掩蓋風土差異。Coulée de Serrant 與 La Roche-aux-Moines 兩個獨立 Cru AOC 也遵循此規定。'
      },
      {
        id: 'q3',
        question: 'Coulée de Serrant 由哪位生物動力法先驅獨家擁有？',
        options: ['Vincent Carême', 'Nicolas Joly', 'Didier Dagueneau', 'Jacky Blot'],
        correctIndex: 1,
        explanation: 'Coulée de Serrant 是 Savennières 內的獨立 Cru AOC，僅 7 公頃，自 1130 年起即為單一葡萄園。Nicolas Joly 從 1980 年代起將其轉為生物動力法（Biodynamie）耕作，成為全球生物動力法葡萄酒運動的精神領袖。他的著作《Wine from Sky to Earth》是該領域經典。'
      },
      {
        id: 'q4',
        question: 'Loire Chenin 干白偏好使用大型 Demi-Muid（500–600 L）橡木桶的原因是？',
        options: [
          '法規規定',
          '大桶橡木味釋放慢，能增加質地深度卻不掩蓋 Chenin 的纖細品種特性',
          '節省成本',
          '便於搬運'
        ],
        correctIndex: 1,
        explanation: 'Demi-Muid（500L）與 Foudre（大型木槽）的木材表面積與酒液體積比率，比標準 Barrique（225L）小很多，因此橡木風味釋放較慢、較溫和。這對 Chenin Blanc 這種香氣纖細的品種特別重要——能獲得質地圓潤與微氧化的好處，而不會被新桶香草/奶油味掩蓋。'
      }
    ]
  }
]
