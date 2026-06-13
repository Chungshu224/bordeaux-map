/**
 * LO-L2-6 都漢支流紅酒
 * AOCs: Coteaux-du-Loir (紅)、Coteaux-du-Vendômois (紅/粉紅)、Orléans (紅)、Orléans-Cléry
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          離開羅亞爾河的主流視野，支流河谷裡藏著幾個最有個性的小 AOC。這裡有一個幾乎只在羅亞爾存在的神秘品種——<strong>Pineau d'Aunis</strong>，以及法國最北邊的有機葡萄酒重鎮——奧爾良（Orléans）。支流產區是羅亞爾河谷學習中最容易被忽略，卻最能展現這條河流文化深度的一頁。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌶️ 認識 Pineau d'Aunis 的辛香個性</h4>
            <p>這個幾乎只在羅亞爾種植的品種，以白胡椒辛香和輕盈優雅著稱</p>
          </div>
          <div class="point-item">
            <h4>🗺️ 掌握四個支流 AOC 的地理位置</h4>
            <p>了解 Loir 河谷（南支流）和 Orléans（東端）的產區定位與差異</p>
          </div>
          <div class="point-item">
            <h4>🌱 了解奧爾良產區的有機農業文化</h4>
            <p>為何奧爾良成為羅亞爾河谷自然酒和有機農業的重要據點</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Pineau d\'Aunis — 羅亞爾的辛香秘寶',
    highlights: [
      { id: 1, icon: '🌶️', title: '白胡椒辛香', content: '最標誌性的香氣：白胡椒、丁香、辛香料，加上紫羅蘭和紅色漿果，完全不同於其他羅亞爾品種' },
      { id: 2, icon: '🌸', title: '輕盈優雅', content: '顏色淺、單寧低、酸度高，是非常適合輕涼飲用的紅酒，也常用於做粉紅酒（vin gris 風格）' },
      { id: 3, icon: '🗺️', title: '幾乎只在羅亞爾', content: '是羅亞爾河谷最獨特的本地品種之一，種植幾乎完全限定在 Loir 河谷和 Vendômois，其他產區極罕見' }
    ],
    content: `
      <div class="pineau-daunis">
        <p><strong>Pineau d'Aunis</strong> 是羅亞爾河谷最具個性的本地品種——它不像 Cabernet Franc 那樣廣為人知，不像 Chenin Blanc 那樣被全球討論，但它擁有任何國際品種都無法複製的獨特辛香個性。</p>
        <div class="variety-profile">
          <h4>🔬 品種科學檔案</h4>
          <p><strong>別名：</strong>Chenin Noir（雖然與 Chenin Blanc 無基因關係），Gris Cot</p>
          <p><strong>DNA 親緣：</strong>基因研究顯示 Pineau d'Aunis 是羅亞爾河谷最古老的本土品種之一，與其他主流品種的親緣關係遠</p>
          <p><strong>農業特性：</strong>早熟，對春霜敏感，中等產量，有機農法下表現尤佳</p>
        </div>
        <div class="style-notes">
          <h4>🍷 風格特色</h4>
          <p>一杯好的 Pineau d'Aunis 是這樣的：淺寶石紅色（幾乎像深色粉紅），第一個香氣是白胡椒的辛香撲鼻，然後是紫羅蘭和覆盆子，入口清爽，單寧極低，酸度清脆，收尾的辛香料感綿延。配菜首選：輕炸豬排、火腿三明治、辣味料理。</p>
        </div>
      </div>
    `
  },
  {
    title: 'Coteaux-du-Loir 與 Coteaux-du-Vendômois',
    content: `
      <div class="loir-vendome">
        <p>這兩個 AOC 都位於 Loir 河谷（注意：這是南部支流 Loir，不是主幹 Loire），是 Pineau d'Aunis 的核心棲息地。</p>
        <div class="aoc-comparison">
          <div class="aoc-item">
            <h4>🌊 Coteaux-du-Loir</h4>
            <p><strong>位置：</strong>Loir 河（La Chartre-sur-le-Loir 附近，索米爾西北方）</p>
            <p><strong>土壤：</strong>凝灰岩和矽質砂岩，向陽坡地</p>
            <p><strong>品種：</strong>紅酒以 Pineau d'Aunis 和 Cabernet Franc 為主；也有白酒（Chenin Blanc）</p>
            <p><strong>風格：</strong>是整個羅亞爾河谷氣候最涼爽的 AOC 之一，Pineau d'Aunis 在這裡展現最純粹的辛香特色</p>
            <p><strong>代表酒莊：</strong>Domaine de Bellivière（Nicolas Joly 弟子 Éric Nicolas），是 Loir 河谷最重要的精品莊</p>
          </div>
          <div class="aoc-item">
            <h4>🌾 Coteaux-du-Vendômois</h4>
            <p><strong>位置：</strong>Vendôme 城附近，Loire 河北部</p>
            <p><strong>土壤：</strong>矽質黏土，南向坡地，氣候相對溫暖</p>
            <p><strong>品種：</strong>紅/粉紅以 Pineau d'Aunis 主導，允許少量 Cabernet 和 Gamay；也有白酒（Chenin）</p>
            <p><strong>特色：</strong>Vendômois 的 Pineau d'Aunis 粉紅酒（vin gris）呈現極淡的銅粉色，香氣清新，是法國最精緻的淡色粉紅酒之一</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Orléans 與 Orléans-Cléry — 最北的羅亞爾 AOC',
    content: `
      <div class="orleans-section">
        <p>奧爾良（Orléans）位於羅亞爾河谷最東端，也是整個法定產區的最北端，氣候接近巴黎盆地，是羅亞爾河谷中最強調有機農法和自然酒的產區之一。</p>
        <div class="orleans-aocs">
          <div class="aoc-card">
            <h4>🏛️ Orléans AOC（2006 年獲認）</h4>
            <p><strong>主要品種：</strong>紅酒以 Pinot Meunier 和 Cabernet Franc 為主；白酒以 Chardonnay 和 Pinot Gris 為主</p>
            <p><strong>Pinot Meunier 的稀有性：</strong>奧爾良是法國少數以 Pinot Meunier 作為主角（而非香檳配角）釀造紅酒的地方。這裡的 Pinot Meunier 呈現的是清新草莓和覆盆子香氣，比香檳版本更多果汁感。</p>
            <p><strong>有機農業：</strong>奧爾良一帶有大量有機認證農莊，自然酒生產者密度極高，是自然酒愛好者的朝聖地之一。</p>
          </div>
          <div class="aoc-card">
            <h4>🌿 Orléans-Cléry AOC（2006 年獲認）</h4>
            <p><strong>品種：</strong>100% Cabernet Franc（紅酒專用 AOC）</p>
            <p><strong>地理：</strong>沿 Loire 河岸狹長地帶，礫石沖積土，南向坡地</p>
            <p><strong>風格：</strong>輕盈優雅的 Cabernet Franc，比都漢版本酸度更高，紅果更清新，是整個 Loire 最「北派」的 Cabernet Franc 風格</p>
            <p><strong>配餐：</strong>配奧爾良特產——「vinaigre d'Orléans」（奧爾良醋）料理、燉雞、小牛肉</p>
          </div>
        </div>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: 'Pineau d\'Aunis 最標誌性的香氣特色是什麼？',
        options: [
          '橡木香草和黑莓果醬',
          '白胡椒辛香 + 紫羅蘭 + 輕盈紅果，顏色極淺',
          '蜂蜜和杏桃（類似 Chenin Blanc）',
          '燧石礦物和葡萄柚（類似 Sauvignon Blanc）'
        ],
        correctIndex: 1,
        explanation: 'Pineau d\'Aunis 最具辨識度的特徵是白胡椒辛香搭配紫羅蘭和紅色漿果，顏色極淺（幾乎像深粉紅），是羅亞爾最獨特的本地品種，幾乎只在 Loir 河谷和 Vendômois 種植。'
      },
      {
        id: 'q2',
        question: 'Orléans AOC 中，哪個品種在這裡作為主角釀造紅酒，在其他法國產區幾乎只作為配角？',
        options: ['Gamay', 'Pinot Meunier', 'Cabernet Franc', 'Côt（Malbec）'],
        correctIndex: 1,
        explanation: 'Pinot Meunier 在香檳（Champagne）通常只是混調配角，但在 Orléans AOC 卻是主要的紅酒品種，展現出清新草莓和覆盆子的果汁感，是非常獨特的風土詮釋。'
      }
    ]
  }
]
