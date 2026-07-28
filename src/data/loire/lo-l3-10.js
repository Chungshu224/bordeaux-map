/**
 * LO-L3-10 中央產區明珠——Sancerre 的六個平價替代品
 * AOCs: Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          在羅亞爾河的最東段，遠離大西洋影響，接近大陸性氣候的中央丘陵（Centre）地帶，藏著六個鮮為人知的 AOC——它們與 Sancerre 和 Pouilly-Fumé 共享相似的土壤（Kimmeridgian 石灰岩、燧石）和品種（Sauvignon Blanc、Pinot Noir），卻以 1/3 到 1/2 的價格提供同等的精彩。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>💎 掌握中央產區 6 個隱藏寶石 AOC</h4>
            <p>從 Menetou-Salon 到 Saint-Pourçain，理解每個 AOC 的地理位置、主要品種和風格定位</p>
          </div>
          <div class="point-item">
            <h4>💰 建立「Sancerre 替代品」的選酒知識</h4>
            <p>掌握哪些 AOC 在性價比上能最好地替代 Sancerre 和 Pouilly-Fumé</p>
          </div>
          <div class="point-item">
            <h4>🌿 理解 Tressallier 和 Châteaumeillant Gamay 的稀有性</h4>
            <p>Saint-Pourçain 的 Tressallier 和 Châteaumeillant 的極淡粉紅（gris de gris）是法國葡萄酒中最罕見的個性之一</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Menetou-Salon — 中央最精緻的 Sancerre 替代品',
    highlights: [
      { id: 1, icon: '🪨', title: 'Kimmeridgian 石灰岩', content: 'Menetou-Salon 的土壤與 Sancerre 相似，都含有 Kimmeridgian 石灰岩（侏羅紀白堊紀海洋沉積），賦予 Sauvignon Blanc 同樣的礦物深度' },
      { id: 2, icon: '🏡', title: '靠近布爾日（Bourges）', content: 'Menetou-Salon 圍繞布爾日（Cher 省省會）種植，面積約 600 公頃，比 Sancerre 小得多，但品質非常接近' },
      { id: 3, icon: '💰', title: '性價比之王', content: '均價 €12–20（Sancerre 均價 €25–40），品質接近而價格明顯更低，是侍酒師和葡萄酒愛好者的「秘密武器」' }
    ],
    content: `
      <div class="menetou-section">
        <p><strong>Menetou-Salon</strong>（AOC 認定 1959 年）是中央產區中與 Sancerre 最接近的 AOC，提供白酒（Sauvignon Blanc）、紅酒和粉紅酒（Pinot Noir）三種顏色。</p>
        <div class="menetou-comparison">
          <h4>與 Sancerre 的比較</h4>
          <table>
            <thead><tr><th>特色</th><th>Menetou-Salon</th><th>Sancerre</th></tr></thead>
            <tbody>
              <tr><td>土壤</td><td>Kimmeridgian 石灰岩</td><td>Kimmeridgian + 白堊 + 燧石（更多樣）</td></tr>
              <tr><td>白酒品種</td><td>100% Sauvignon Blanc</td><td>100% Sauvignon Blanc</td></tr>
              <tr><td>紅酒品種</td><td>100% Pinot Noir</td><td>100% Pinot Noir</td></tr>
              <tr><td>均價（白酒）</td><td>€12–20</td><td>€25–40</td></tr>
              <tr><td>複雜度</td><td>清爽、礦物、直接</td><td>更多樣、村莊差異明顯</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>代表酒莊：</strong>Domaine Henry Pellé（Menetou-Salon 最知名精品莊）、Henri Bourgeois（也在 Sancerre 有地）</p>
      </div>
    `
  },
  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 衛星 AOC 地圖',
    componentProps: {
      slide: {
        title: 'Centre-Loire 衛星 AOC 地圖',
        description: 'Sancerre/Pouilly-Fumé 核心雙雄，與六個衛星 AOC（Menetou-Salon、Quincy、Reuilly、Coteaux-du-Giennois、Châteaumeillant、Saint-Pourçain）的完整地理分布',
        mapGroup: 'Centre',
        highlightFiles: ['Menetou-Salon.geojson', 'Quincy.geojson', 'Reuilly.geojson', 'Sancerre.geojson', 'Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson', 'Châteaumeillant.geojson', 'Coteaux-du-Giennois.geojson'],
      }
    }
  },

  {
    title: 'Quincy & Reuilly — 燧石之地的 Sauvignon',
    content: `
      <div class="quincy-reuilly-section">
        <div class="aoc-pair">
          <div class="aoc-card">
            <h4>🔥 Quincy AOC</h4>
            <p><strong>地理：</strong>Cher 河沿岸，Bourges 西方，面積約 250 公頃</p>
            <p><strong>品種：</strong><strong>唯一允許 Sauvignon Blanc</strong>——Quincy 是羅亞爾中央產區中最「純粹主義」的 AOC，不允許任何其他品種，只做白酒（無紅酒、無粉紅）</p>
            <p><strong>土壤：</strong>砂質礫石 + 燧石（silex），比 Sancerre 更沙質，酒體更輕盈，香氣偏燧石礦物和白葡萄柚</p>
            <p><strong>風格：</strong>清爽、白葡萄柚、燧石礦物、草本，酒精偏低（11–12.5%），非常易飲</p>
            <p><strong>均價：</strong>€10–18，是入門中央產區的最佳選擇</p>
          </div>
          <div class="aoc-card">
            <h4>🌸 Reuilly AOC</h4>
            <p><strong>地理：</strong>Indre 省，Cher 河和 Arnon 河之間，面積約 200 公頃</p>
            <p><strong>特色：</strong>Reuilly 提供三種顏色——白酒（Sauvignon Blanc）、紅酒（Pinot Noir）、粉紅酒（<strong>Pinot Gris</strong>！）</p>
            <p><strong>Pinot Gris 粉紅：</strong>這是 Reuilly 最獨特之處——用 Pinot Gris 釀造粉紅酒（顏色極淡，接近橙色），有獨特的煙燻和薑黃香氣，在整個羅亞爾中央產區找不到第二個地方這樣做</p>
            <p><strong>白酒風格：</strong>類似 Quincy 但更圓潤，礦物感強，偶爾有熱帶水果感</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '三個更邊緣的中央 AOC',
    content: `
      <div class="peripheral-aocs">
        <div class="aoc-mini-card">
          <h4>🌊 Coteaux-du-Giennois AOC</h4>
          <p><strong>地理：</strong>Gien 城市附近（羅亞爾河最靠近 Sancerre 的北端）</p>
          <p><strong>品種：</strong>白酒（Sauvignon Blanc）+ 紅/粉紅（Pinot Noir + Gamay）</p>
          <p><strong>風格：</strong>簡單、清爽，果香主導，是羅亞爾中央產區風格最「親民」的 AOC，不如 Menetou-Salon 複雜但更輕鬆好喝</p>
          <p><strong>特別說明：</strong>面積僅約 210 公頃，產量極少，在出口市場幾乎找不到，主要在當地消費</p>
        </div>
        <div class="aoc-mini-card">
          <h4>🌸 Châteaumeillant AOC</h4>
          <p><strong>地理：</strong>Cher 省南部，接近法國地理中心</p>
          <p><strong>特色：</strong>以 Gamay（主）+ Pinot Gris 釀造幾乎無色的「gris de gris」粉紅酒——極淡的洋蔥皮色或橙粉色，酒體超輕，是法國色調最淡的粉紅酒之一</p>
          <p><strong>為何這樣做：</strong>當地傳統認為最淡最清爽的粉紅酒最適合搭配夏天的烤肉和沙拉，「gris de gris」（灰中之灰）是這種極淡風格的法語名稱</p>
          <p><strong>歷史：</strong>2010 年才獲得 AOC 認定（之前是 VDQS），是羅亞爾中央產區最年輕的 AOC</p>
        </div>
        <div class="aoc-mini-card">
          <h4>🏛️ Saint-Pourçain AOC</h4>
          <p><strong>地理：</strong>Allier 省（Auvergne），嚴格上不在羅亞爾流域，但傳統上被歸入羅亞爾中央產區體系</p>
          <p><strong>白酒品種：</strong><strong>Tressallier（=Sacy）</strong>——幾乎只在 Saint-Pourçain 存在的古老白葡萄品種，釀成的白酒有強烈的草本和礦物感，類似緊閉的 Aligoté 但更個性</p>
          <p><strong>紅酒品種：</strong>Pinot Noir + Gamay（混調），輕盈的布根地風格</p>
          <p><strong>歷史：</strong>中世紀時曾是法國王室御用餐酒（路易 IX 的宮廷），後來因戰爭和黑死病而衰落，今日正在緩慢復興</p>
          <p><strong>均價：</strong>€10–16，是羅亞爾中央最被忽略的佳品之一</p>
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
        question: 'Quincy AOC 最獨特的法規限制是什麼？',
        options: [
          '只允許生產紅酒，禁止白酒',
          '只允許種植 Sauvignon Blanc，不允許任何其他品種，也只做白酒',
          '法規要求最低 15 個月的橡木桶陳年',
          '釀酒時必須混合來自三個不同地塊的葡萄'
        ],
        correctIndex: 1,
        explanation: 'Quincy AOC 是中央產區中最「純粹主義」的——只允許種植和釀造 Sauvignon Blanc，不允許任何其他品種，且只生產白酒（不生產紅酒或粉紅酒）。這種純粹性讓 Quincy 成為研究 Sauvignon Blanc 品種個性的理想教學酒款。'
      },
      {
        id: 'q2',
        question: 'Reuilly AOC 最獨特的釀造特色是什麼？',
        options: [
          '它是羅亞爾唯一允許 Grenache 的 AOC',
          '用 Pinot Gris 釀造粉紅酒，顏色極淡，有獨特的煙燻和薑黃香氣',
          '它只生產甜型白酒，不做干型',
          '它是法國最昂貴的 Sauvignon Blanc 產區，超越 Sancerre'
        ],
        correctIndex: 1,
        explanation: 'Reuilly AOC 除了白酒（Sauvignon Blanc）和紅酒（Pinot Noir）之外，還用 Pinot Gris 釀造顏色極淡的粉紅酒——這種近乎透明的洋蔥皮色粉紅酒在整個中央產區是獨一無二的，帶有煙燻和薑黃特色。'
      },
      {
        id: 'q3',
        question: 'Saint-Pourçain 白酒中的 Tressallier 品種最大的特殊性是什麼？',
        options: [
          '它是 Chardonnay 的克隆品系',
          '幾乎只在 Saint-Pourçain 種植，是法國最稀有的本地白葡萄品種之一，帶來強烈草本和礦物感',
          '它是從西班牙引進的外來品種，16 世紀才開始種植',
          '它必須與 Gamay 混調才能達到 AOC 標準'
        ],
        correctIndex: 1,
        explanation: 'Tressallier（又稱 Sacy）幾乎只在 Saint-Pourçain 的葡萄園中存活，是法國最稀有的古老白葡萄品種之一，歷史可追溯至中世紀，當時是法國王室御用。它帶來強烈的草本辛香和礦物感，是整個羅亞爾河谷中最個性鮮明的白葡萄品種之一。'
      }
    ]
  }
]
