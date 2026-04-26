/**
 * LO-L3-3 萊揚河貴腐甜酒金字塔
 * AOCs: Coteaux du Layon、Bonnezeaux、Quarts de Chaume Grand Cru、Coteaux de l'Aubance
 * 主題：Botrytis 貴腐、Layon 河谷晨霧、安茹甜酒層級
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          安茹（Anjou）的東南方有一條從南向北流入羅亞爾河的支流——<strong>萊揚河（Layon）</strong>。它在秋季帶來規律的晨霧，造就了法國西部最偉大的貴腐甜酒搖籃。從入門級的 Coteaux du Layon，到頂級的 <strong>Quarts de Chaume Grand Cru</strong>，整個甜酒金字塔都建立在 Chenin Blanc + Botrytis cinerea + Tuffeau 與片岩混合風土之上。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍄 Botrytis cinerea 貴腐機制</h4>
            <p>理解貴腐菌如何穿透葡萄皮、濃縮糖分與酸度、生成甘油與獨特風味化合物</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 萊揚甜酒金字塔</h4>
            <p>從 Coteaux du Layon → Coteaux du Layon Villages → Bonnezeaux → Quarts de Chaume GC 的層級邏輯</p>
          </div>
          <div class="point-item">
            <h4>🌫️ 微氣候條件</h4>
            <p>掌握萊揚河谷晨霧 + 午後乾燥的「貴腐黃金條件」</p>
          </div>
          <div class="point-item">
            <h4>🏆 Quarts de Chaume Grand Cru</h4>
            <p>認識 Loire 唯一的 Grand Cru AOC（2011 年認定）及其嚴格規範</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '萊揚河谷——法國西部的貴腐天堂',
    highlights: [
      { id: 1, icon: '🌫️', title: '晨霧誘發貴腐', content: 'Layon 河谷狹窄、東西走向，秋季清晨產生濃霧（高濕度）' },
      { id: 2, icon: '☀️', title: '午後乾燥', content: '霧散後南向坡面充分日照，抑制有害灰黴、促進貴腐健康發展' },
      { id: 3, icon: '🪨', title: '片岩風土', content: 'Anjou Noir 黑色片岩 + 凝灰岩，賦予甜酒礦物張力，避免一味甜膩' }
    ],
    content: `
      <div class="layon-overview">
        <p class="lead-text">萊揚河（Layon）是羅亞爾河左岸支流，從 Vihiers 一路向北流至 Chalonnes-sur-Loire，全長約 90 公里。葡萄園主要分佈於河谷北岸的南向坡面，這個獨特的地形讓清晨霧氣得以累積，午後又能徹底散去——這正是貴腐黃金條件。</p>
        <div class="layon-microclimate">
          <h4>🌫️ 貴腐黃金條件三要素</h4>
          <ol>
            <li><strong>清晨高濕：</strong>萊揚河面水氣於日出前蒸發、聚集於坡腳，產生濃霧。霧氣濕度 90%+ 提供 Botrytis cinerea 孢子萌發的水分</li>
            <li><strong>午後高溫乾燥：</strong>10–11 時霧散，南向坡迅速升溫至 20°C+。乾燥條件抑制 Botrytis 從「貴腐」轉為「灰腐」（grey rot）</li>
            <li><strong>多次採摘（Tries Successives）：</strong>葡萄不會同時感染貴腐，採收工人需多次回到同一葡萄園，僅挑選達到「pourriture noble」狀態的葡萄串或葡萄粒</li>
          </ol>
        </div>
        <div class="layon-soils">
          <h4>🪨 萊揚的土壤</h4>
          <p>不同於 Vouvray 純粹的 Tuffeau，萊揚位於 Anjou Noir（黑色安茹）地帶：</p>
          <ul>
            <li><strong>Schist（片岩）：</strong>主要母岩，黑灰色、易碎、富含有機質</li>
            <li><strong>Tuffeau 凝灰岩：</strong>邊緣地帶，類似 Vouvray</li>
            <li><strong>砂質土：</strong>河階沖積，排水極佳</li>
          </ul>
          <p>片岩的關鍵作用：保留高酸度、賦予燧石/石墨礦物質感，平衡 Botrytis 帶來的甜膩。</p>
        </div>
      </div>
    `,
    quiz: {
      question: '萊揚河谷貴腐發展的關鍵微氣候是？',
      options: [
        '全年高濕度',
        '清晨高濕、午後乾燥的日內溫差',
        '夏季高溫',
        '冬季嚴寒'
      ],
      correct: 1,
      explanation: '貴腐 Botrytis cinerea 需要「濕→乾→濕→乾」的循環。萊揚河谷狹窄、東西走向的地形使秋季每日清晨產生濃霧（高濕誘發孢子）、午後霧散乾燥（抑制有害灰腐並濃縮葡萄）。這個日內節奏比單純的高濕度更關鍵——若整天潮濕，葡萄會直接腐爛。'
    }
  },

  {
    component: 'LoireSweetWineMethodSlide',
    title: '貴腐 vs 風乾 vs 晚收',
    componentProps: {
      slide: {
        title: '萊揚甜酒的三種糖分濃縮工藝',
        description: '雖然 Layon 以貴腐為主流，少數頂級酒款也使用 Passerillage（樹上風乾）作為替代'
      }
    }
  },

  {
    title: '萊揚甜酒金字塔',
    highlights: [
      { id: 1, icon: '🥇', title: 'Quarts de Chaume Grand Cru', content: 'Loire 唯一 Grand Cru，2011 年認定，34 公頃' },
      { id: 2, icon: '🥈', title: 'Bonnezeaux', content: '單一 Cru AOC，77 公頃，與 QdC 平起平坐的歷史名園' },
      { id: 3, icon: '🥉', title: 'Coteaux du Layon (Villages)', content: '7 個指定村莊：Beaulieu、Faye、Rablay、Rochefort、Saint-Aubin、Saint-Lambert、Chaume' }
    ],
    content: `
      <div class="layon-pyramid">
        <p class="lead-text">萊揚的甜酒體系是法國最複雜的甜酒分級之一，從入門到頂級可分為 4 大層級，每一層的殘糖最低標準、產量上限與葡萄成熟度要求都逐級提高。</p>
        <div class="pyramid-grid">
          <div class="pyramid-level grand-cru">
            <h4>🥇 Quarts de Chaume Grand Cru（Loire 唯一 GC）</h4>
            <ul>
              <li><strong>面積：</strong>約 34 公頃，位於 Rochefort-sur-Loire 村</li>
              <li><strong>產量上限：</strong>20 hL/ha（最嚴格）</li>
              <li><strong>最低殘糖：</strong>110 g/L（Botrytis 必須高度感染）</li>
              <li><strong>採收：</strong>強制多次手工 tries（最少 3 次）</li>
              <li><strong>名家：</strong>Château Bellerive（Florent Baumard）、Château Pierre-Bise、Domaine des Baumard</li>
              <li><strong>歷史：</strong>名稱源於 15 世紀「最好四分之一」的封建租稅故事</li>
            </ul>
          </div>
          <div class="pyramid-level cru">
            <h4>🥈 Bonnezeaux（單一 Cru AOC）</h4>
            <ul>
              <li><strong>面積：</strong>約 77 公頃，位於 Thouarcé 村</li>
              <li><strong>產量上限：</strong>25 hL/ha</li>
              <li><strong>最低殘糖：</strong>51 g/L（Moelleux 等級以上）</li>
              <li><strong>三大坡：</strong>La Montagne、Beauregard、Les Melleresses</li>
              <li><strong>名家：</strong>Château de Fesles、Domaine Petit Val、Domaine des Petits Quarts</li>
            </ul>
          </div>
          <div class="pyramid-level villages">
            <h4>🥉 Coteaux du Layon Villages（7 村莊指定）</h4>
            <ul>
              <li><strong>面積：</strong>約 200 公頃</li>
              <li><strong>產量上限：</strong>30 hL/ha</li>
              <li><strong>最低殘糖：</strong>34 g/L</li>
              <li><strong>7 個村莊：</strong>Beaulieu-sur-Layon、Faye-d'Anjou、Rablay-sur-Layon、Rochefort-sur-Loire、Saint-Aubin-de-Luigné、Saint-Lambert-du-Lattay、<strong>Chaume Premier Cru</strong>（最頂級村，2011 年升格）</li>
            </ul>
          </div>
          <div class="pyramid-level base">
            <h4>📦 Coteaux du Layon（基礎 AOC）</h4>
            <ul>
              <li><strong>面積：</strong>約 1,400 公頃，跨 27 個村莊</li>
              <li><strong>產量上限：</strong>35 hL/ha</li>
              <li><strong>最低殘糖：</strong>34 g/L（Demi-sec 以上）</li>
              <li><strong>定位：</strong>入門貴腐酒，提供性價比選擇</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Quarts de Chaume Grand Cru 在 Loire 的特殊地位是？',
      options: [
        'Loire 第一個 AOC',
        'Loire 唯一的 Grand Cru AOC（2011 年認定）',
        'Loire 最大的甜酒 AOC',
        'Loire 第一個有機 AOC'
      ],
      correct: 1,
      explanation: 'Quarts de Chaume 在 2011 年從原本的 AOC 升格為 Loire 河谷唯一的「Grand Cru」AOC，是繼 Alsace Grand Cru 與 Bourgogne Grand Cru 之後，法國第三個正式 Grand Cru 體系。這個 34 公頃的小區坐落於萊揚河支流的天然保護地形中，秋季貴腐條件極為穩定。'
    }
  },

  {
    title: 'Botrytis cinerea——貴腐菌的化學魔法',
    highlights: [
      { id: 1, icon: '🦠', title: '菌絲穿透果皮', content: '不破壞果皮的情況下穿透氣孔，產生「微孔效應」' },
      { id: 2, icon: '💧', title: '水分蒸發', content: '果皮微孔讓葡萄水分緩慢蒸發，糖、酸、香氣前驅物濃縮 2–3 倍' },
      { id: 3, icon: '🍯', title: '甘油 + 風味化合物', content: '生成大量甘油（圓潤口感）與 sotolon（蜂蜜、咖哩、堅果）' }
    ],
    content: `
      <div class="botrytis-chemistry">
        <p class="lead-text">Botrytis cinerea 是一種絲狀真菌，在「壞」的條件下會直接腐爛葡萄（灰腐 grey rot），造成極大損失；但在「好」的條件下（晨霧+午後乾燥），它會以「貴腐」（pourriture noble / noble rot）的型態緩慢進化葡萄，創造甜酒的傳奇。</p>
        <div class="botrytis-process">
          <h4>🔬 貴腐五階段</h4>
          <ol>
            <li><strong>孢子附著：</strong>晨霧帶來水氣，孢子在葡萄表皮萌發</li>
            <li><strong>菌絲穿透：</strong>菌絲從葡萄氣孔（lenticels）穿入，不破壞果皮完整性</li>
            <li><strong>微孔形成：</strong>菌絲分泌酶部分溶解果皮，形成微孔通道</li>
            <li><strong>水分蒸發：</strong>午後乾燥條件下，葡萄水分透過微孔緩慢蒸發，糖度從 22°Brix 濃縮至 35–45°Brix</li>
            <li><strong>葡萄萎縮：</strong>外觀變成粉紫色、皺縮如葡萄乾，俗稱「pourri plein」（完美貴腐）</li>
          </ol>
        </div>
        <div class="botrytis-compounds">
          <h4>🧪 貴腐特徵化合物</h4>
          <ul>
            <li><strong>甘油（Glycerol）：</strong>5–25 g/L（一般葡萄酒僅 5–8 g/L），帶來油潤、絲滑口感</li>
            <li><strong>葡萄糖酸（Gluconic acid）：</strong>貴腐標誌性副產物，分析時可確認貴腐感染</li>
            <li><strong>Sotolon：</strong>關鍵風味化合物——蜂蜜、咖哩、葫蘆巴、堅果、楓糖香氣</li>
            <li><strong>Phenylacetaldehyde：</strong>玫瑰、紫羅蘭花香</li>
            <li><strong>糖度：</strong>200–300+ g/L，發酵後保留高殘糖</li>
          </ul>
        </div>
      </div>
    `,
    quiz: {
      question: 'Botrytis cinerea 在貴腐過程中**不會**做以下哪件事？',
      options: [
        '從葡萄氣孔穿透果皮',
        '產生甘油與葡萄糖酸',
        '完全破壞果皮使葡萄液流出',
        '濃縮糖分與酸度'
      ],
      correct: 2,
      explanation: '貴腐 Botrytis 不會破壞果皮整體結構——它只是分泌酶形成微孔，讓水分緩慢蒸發。一旦果皮被完全破壞（例如下雨、黏連），就會變成有害的「灰腐」（grey rot），整批葡萄需要丟棄。這就是為何萊揚的午後乾燥條件如此關鍵：它確保 Botrytis 停留在「貴腐」階段。'
    }
  },

  {
    type: 'quiz',
    title: 'Level 3-3 知識檢測',
    questions: [
      {
        id: 'q1',
        question: 'Quarts de Chaume Grand Cru 的最低殘糖規定是？',
        options: ['34 g/L', '51 g/L', '85 g/L', '110 g/L'],
        correctIndex: 3,
        explanation: 'Quarts de Chaume Grand Cru 的最低殘糖標準為 110 g/L，是 Loire 全境最嚴格的甜酒規範，遠高於 Bonnezeaux（51 g/L）與 Coteaux du Layon Villages（34 g/L）。產量上限也最嚴格（20 hL/ha），確保葡萄達到極致貴腐濃縮。'
      },
      {
        id: 'q2',
        question: '萊揚甜酒的核心品種是？',
        options: ['Sauvignon Blanc', 'Chenin Blanc', 'Sémillon', 'Riesling'],
        correctIndex: 1,
        explanation: '萊揚所有貴腐甜酒 AOC（Coteaux du Layon、Bonnezeaux、Quarts de Chaume Grand Cru）都規定 100% Chenin Blanc。Chenin 的高天然酸度（pH 3.0–3.2）即使在重度貴腐後仍能保持均衡，避免甜酒過於甜膩——這是它與 Sémillon（Sauternes）並列為兩大貴腐品種的關鍵。'
      },
      {
        id: 'q3',
        question: '為何萊揚的甜酒比 Sauternes 通常顯得更輕盈？',
        options: [
          '殘糖較低',
          'Chenin Blanc 的天然酸度高於 Sémillon，平衡甜膩感',
          '酒精度較低',
          '不使用橡木桶'
        ],
        correctIndex: 1,
        explanation: '萊揚（Chenin）與 Sauternes（Sémillon + Sauvignon）的本質差異在於品種酸度。Chenin Blanc 的 pH 通常 3.0–3.2（極高酸度），即使殘糖達 100+ g/L 仍呈現張力與清新感。Sémillon 的 pH 通常 3.3–3.6，加上 Sauternes 較高的酒精（13–14% vs 萊揚的 10–12%），整體口感更濃稠飽滿。'
      },
      {
        id: 'q4',
        question: 'Tries Successives（多次採收）的目的是？',
        options: [
          '節省人工成本',
          '在不同時間僅挑選達到完美貴腐狀態的葡萄串或葡萄粒',
          '避開壞天氣',
          '加速採收'
        ],
        correctIndex: 1,
        explanation: 'Botrytis 並不會讓整個葡萄園同時感染——同一個葡萄串中，可能某些葡萄已達完美貴腐，其他仍未感染或剛開始感染。Tries Successives 要求採收工人多次回到葡萄園（頂級 QdC GC 至少 3 次，部分酒莊甚至 6–8 次），每次只挑選達到「pourri plein」狀態的葡萄。這個方式人力成本極高，但是頂級貴腐酒品質的保證。'
      }
    ]
  }
]
