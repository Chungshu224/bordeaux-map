/**
 * LO-L2-4 希農——品麗珠的靈魂故鄉
 * AOCs: Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          如果說波爾多是 Cabernet Sauvignon 的舞台，那麼羅亞爾河谷的都漢（Touraine）就是 Cabernet Franc 真正的靈魂故鄉。Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil 三個 AOC 呈三角形分布在羅亞爾河與維埃納（Vienne）河的交匯地帶，各自有不同的土壤，釀造出截然不同個性的優雅紅酒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🪨 掌握三個 AOC 的土壤差異</h4>
            <p>礫石（graviers）、凝灰岩（tuffeau）、黏土石灰岩（argilo-calcaire）三種土壤如何造就不同個性的 Cabernet Franc</p>
          </div>
          <div class="point-item">
            <h4>🍷 理解 Cabernet Franc 的香氣指紋</h4>
            <p>紫羅蘭、鉛筆屑（石墨）、紅色漿果、辣椒等典型香氣的成因與辨識</p>
          </div>
          <div class="point-item">
            <h4>🏰 認識代表性生產者</h4>
            <p>了解 Charles Joguet 和 Clos Rougeard 等羅亞爾傳奇名莊的風格與哲學</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Chinon — 三種土壤，三種面貌',
    highlights: [
      { id: 1, icon: '🟡', title: '礫石平地（Graviers）', content: '沙質礫石，排水快，出產輕盈易飲款，草莓花香清新，年輕時最討喜，陳年潛力中等' },
      { id: 2, icon: '⬜', title: '凝灰岩坡地（Coteau）', content: '南向坡地的凝灰岩，日照充足，出產最複雜濃郁的 Chinon，可陳年 10–20 年' },
      { id: 3, icon: '🟤', title: '高台黏土石灰岩（Plateau）', content: '高台地帶的重黏土，土壤冷涼，出產結構感最強的版本，單寧緊實，需要時間展現' }
    ],
    content: `
      <div class="chinon-soils">
        <p>Chinon AOC 的偉大之處，在於同一個品種（Cabernet Franc）在三種不同土壤下展現出截然不同的個性。懂得 Chinon 的土壤，就懂得羅亞爾風土的精髓。</p>
        <div class="soil-diagram">
          <p><strong>礫石平地</strong>（Loire 和 Vienne 河岸沖積土）：快速達到成熟，釀造輕盈果香款，適合早飲。典型地塊：Les Closeaux、Clos de la Dioterie。</p>
          <p><strong>凝灰岩坡地</strong>（南向斜坡）：Chinon 最精華的地帶，日照充足，礦物感強烈，複雜度最高。典型地塊：Clos de l'Écho、Clos du Chêne Vert（Charles Joguet 的傳奇葡萄園）。</p>
          <p><strong>高台黏土石灰岩</strong>（plateau argilo-calcaire）：土壤厚重冷涼，葡萄晚熟，單寧最為緊實，需 5–10 年才展現複雜度。</p>
        </div>
        <p>代表酒莊 <strong>Charles Joguet</strong>（1957 年起）率先以單一地塊裝瓶（cru），讓世界看到 Chinon 土壤差異的可能性。他的做法影響了整個都漢產區的精品化方向。</p>
      </div>
    `
  },
  {
    title: 'Bourgueil 與 Saint-Nicolas-de-Bourgueil',
    highlights: [
      { id: 1, icon: '🔴', title: 'Bourgueil AOC', content: '位於 Loire 河北岸，凝灰岩和礫石土壤混合，紅黑果香兼具，結構比 Chinon 稍微厚重，部分酒款可陳年 15–20 年' },
      { id: 2, icon: '🌸', title: 'Saint-Nicolas-de-Bourgueil AOC', content: '位於 Bourgueil 內部的獨立 AOC，砂質礫石為主，土壤最輕，酒風最輕盈，紅果花香，是三者中最適合年輕飲用的' }
    ],
    content: `
      <div class="bourgueil-section">
        <p>Bourgueil 和 Saint-Nicolas-de-Bourgueil 都在 Loire 河北岸，在地理上幾乎相鄰，卻因土壤差異而有明顯的風格分別。</p>
        <p><strong>Bourgueil</strong> 的凝灰岩坡地（tuffeau）賦予酒款更多礦物感和陳年骨架，而其礫石低地則出產清新果味款。頂級酒莊：Domaine de la Chevalerie（傳統大桶陳年，複雜度高），Domaine Yannick Amirault。</p>
        <p><strong>Saint-Nicolas-de-Bourgueil</strong> 以砂質礫石（sables et graviers）為主，排水極佳，氣溫相對更快升高，讓 Cabernet Franc 提早成熟，香氣更多新鮮紅果（草莓、覆盆子）和花香（紫羅蘭），單寧柔順——是餐廳開瓶即飲的完美紅酒。</p>
        <div class="tasting-note">
          <h4>品飲筆記比較</h4>
          <p>🔴 <strong>Bourgueil（凝灰岩）</strong>：黑李子、雪松、菸草、礦物感，結構有力，需 3–5 年才開始展現</p>
          <p>🌸 <strong>Saint-Nicolas-de-Bourgueil</strong>：草莓、紫羅蘭、輕微青椒，飄逸輕盈，開瓶即飲</p>
        </div>
      </div>
    `
  },
  {
    title: 'Cabernet Franc 的香氣指紋',
    content: `
      <div class="cab-franc-aromatics">
        <p>Cabernet Franc 在羅亞爾的香氣與波爾多版本截然不同——這裡沒有橡木桶新酒的香草氣息，而是展現品種最純粹的個性：</p>
        <div class="aroma-grid">
          <div class="aroma-item primary">
            <h4>🌸 一級香氣（品種與發酵）</h4>
            <ul>
              <li>紫羅蘭、玫瑰——Cabernet Franc 的標誌性花香</li>
              <li>草莓、覆盆子、紅醋栗——新鮮紅色漿果</li>
              <li>✏️ 鉛筆屑（石墨）——Chinon 的礦物「指紋」</li>
              <li>🌿 輕微青椒（pyrazine）——未完全成熟年份的標誌，少量時增添複雜度</li>
            </ul>
          </div>
          <div class="aroma-item secondary">
            <h4>🔄 二級香氣（陳年演化）</h4>
            <ul>
              <li>皮革、菸草——陳年 5–10 年後的礦物演化</li>
              <li>乾玫瑰、乾香料——氧化陳年帶來的複雜度</li>
              <li>蘑菇、森林底層——老酒的地質香氣</li>
            </ul>
          </div>
        </div>
        <p>學習辨識「鉛筆屑 + 紫羅蘭 + 紅色漿果」的三角組合，這是 Chinon 和 Bourgueil 的最可靠身份識別碼。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Chinon 三種土壤中，哪一種出產最複雜、最具陳年潛力的酒款？',
        options: [
          '礫石平地（graviers）——排水佳，果香清新',
          '凝灰岩坡地（coteau）——南向日照充足，礦物感最強',
          '高台黏土石灰岩（plateau）——土壤最厚重，單寧最緊實',
          '三種土壤品質完全相同'
        ],
        correctIndex: 1,
        explanation: '凝灰岩坡地（tuffeau coteau）因南向日照充足和礦物豐富的土壤，造就 Chinon 最複雜和最具陳年潛力的酒款，如 Charles Joguet 的 Clos du Chêne Vert 和 Clos de l\'Écho。'
      },
      {
        id: 'q2',
        question: 'Saint-Nicolas-de-Bourgueil 和 Bourgueil 最主要的風格差異是什麼？',
        options: [
          '不同品種——Saint-Nicolas 用 Gamay，Bourgueil 用 Cabernet Franc',
          'Saint-Nicolas 土壤砂質礫石更多，酒風更輕盈花香；Bourgueil 凝灰岩更多，結構更厚重',
          '地理位置完全不同，沒有可比性',
          'Saint-Nicolas 是甜型，Bourgueil 是干型'
        ],
        correctIndex: 1,
        explanation: 'Saint-Nicolas-de-Bourgueil 以砂質礫石（sables et graviers）為主，出產更輕盈花香的款式；Bourgueil 則有更多凝灰岩坡地，造就結構更厚重、可陳年的款式。兩者都以 Cabernet Franc 為主導品種。'
      }
    ]
  },
  {
    component: 'LoireRegionMapSlide',
    title: 'Touraine 品麗珠三角產區地圖',
    componentProps: {
      slide: {
        title: 'Touraine：Chinon、Bourgueil、Saint-Nicolas-de-Bourgueil',
        description: '都漢的品麗珠鐵三角——礫石與凝灰岩孕育的優雅紅酒',
        mapGroup: 'Touraine',
        highlightFiles: ['Chinon.geojson', 'Bourgueil.geojson', 'Saint-Nicolas-de-Bourgueil.geojson'],
      }
    }
  }
]
