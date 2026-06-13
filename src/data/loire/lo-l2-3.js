/**
 * LO-L2-3 安茹粉紅光譜與上普瓦圖
 * AOCs: Cabernet-d'Anjou、Rosé-d'Anjou、Rosé-de-Loire、Haut-Poitou
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          安茹不只是白詩南的王國，它也是法國粉紅酒最豐富的光譜之一。從甜美的 Cabernet-d'Anjou，到中性易飲的 Rosé-d'Anjou，再到干型精緻的 Rosé-de-Loire，以及南邊高原的 Haut-Poitou——這堂課帶你穿越安茹粉紅世界的全部面向。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌹 辨識安茹三大粉紅 AOC 的甜度差異</h4>
            <p>掌握 Cabernet-d'Anjou、Rosé-d'Anjou、Rosé-de-Loire 的品種、風格與殘糖規定</p>
          </div>
          <div class="point-item">
            <h4>🍇 認識 Grolleau 這個本地品種</h4>
            <p>了解幾乎只在安茹種植的 Grolleau（Groslot）如何造就大量易飲粉紅酒</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 探索 Haut-Poitou 的高原個性</h4>
            <p>了解南邊高原產區如何在 2011 年獨立成 AOC，以及它的白酒與紅酒特色</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '安茹粉紅酒的甜度光譜',
    highlights: [
      { id: 1, icon: '🌸', title: "Cabernet-d'Anjou（微甜）", content: 'Cabernet Franc + Cabernet Sauvignon，法定殘糖 10–40 g/L，花香優雅，是法國最暢銷的甜型粉紅 AOC 之一' },
      { id: 2, icon: '🍓', title: 'Rosé-d\'Anjou（微甜）', content: '以 Grolleau 為主，允許 Cabernet、Gamay，殘糖略高，更甜美易飲，年輕飲用' },
      { id: 3, icon: '🌹', title: 'Rosé-de-Loire（干型）', content: '干型粉紅，Cabernet Franc 主導（最少 30%），残糖 ≤ 3 g/L，是三者中最嚴肅精緻的粉紅酒' }
    ],
    content: `
      <div class="rose-spectrum">
        <p>安茹粉紅酒的三個 AOC 代表三種截然不同的風格取向，關鍵差異在於葡萄品種和殘糖量：</p>
        <div class="comparison-table">
          <table>
            <thead><tr><th>AOC</th><th>主要品種</th><th>殘糖</th><th>風格</th></tr></thead>
            <tbody>
              <tr><td><strong>Cabernet-d'Anjou</strong></td><td>Cab. Franc + Cab. Sauv.</td><td>10–40 g/L（微甜）</td><td>花香、覆盆子、紫羅蘭，優雅收尾</td></tr>
              <tr><td><strong>Rosé-d'Anjou</strong></td><td>Grolleau 主導</td><td>7–30 g/L（微甜）</td><td>草莓、蜜桃，甜美易飲，日常餐酒</td></tr>
              <tr><td><strong>Rosé-de-Loire</strong></td><td>Cab. Franc ≥30%</td><td>≤ 3 g/L（干型）</td><td>清爽、礦物感、紅果，餐食百搭</td></tr>
            </tbody>
          </table>
        </div>
        <p>配餐建議：Cabernet-d'Anjou 配輕食甜點；Rosé-de-Loire 配夏日烤海鮮或鮭魚料理。</p>
      </div>
    `
  },
  {
    title: 'Grolleau — 安茹獨有的本地英雄',
    content: `
      <div class="grolleau-section">
        <p><strong>Grolleau</strong>（又拼作 Groslot）是一個幾乎只在安茹種植的古老品種，在法國其他地區幾乎找不到。它不是一個「偉大品種」，但它是安茹粉紅酒文化的骨幹。</p>
        <div class="variety-characteristics">
          <div class="char-item">
            <h4>🌱 農業特性</h4>
            <p>高產量、早熟、容易種植。在安茹片岩和黏土土壤上生長良好。</p>
          </div>
          <div class="char-item">
            <h4>🍷 釀酒表現</h4>
            <p>顏色淺、酸度中等、單寧低、天然較甜（高糖度）。非常適合做淡色甜型粉紅。</p>
          </div>
          <div class="char-item">
            <h4>🗺️ 種植範圍</h4>
            <p>主要集中在 Anjou 和 Rosé-d'Anjou AOC 範圍內，在 Cabernet-d'Anjou 和 Rosé-de-Loire 中允許比例較低。</p>
          </div>
        </div>
        <p>Grolleau 代表了一種「日常消費文化」——不追求複雜度，只求新鮮愉悅。法國本地人在夏天喝的那種清涼粉紅，往往就是 Rosé-d'Anjou 的甜美身影。</p>
      </div>
    `
  },
  {
    title: 'Haut-Poitou — 高原上的獨立新秀',
    content: `
      <div class="haut-poitou-section">
        <p><strong>Haut-Poitou</strong> 位於安茹南邊，在 Poitiers 以北的高原台地。2011 年從 VDQS 升格為正式 AOC，算是羅亞爾河流域最南邊的重要產區之一。</p>
        <div class="region-highlights">
          <div class="highlight-item">
            <h4>🏔️ 地理與氣候</h4>
            <p>石灰岩高原，海拔比安茹平原高，氣候更大陸性，夏熱冬冷，日夜溫差大有助保留酸度。</p>
          </div>
          <div class="highlight-item">
            <h4>🍇 主要品種</h4>
            <p>白酒：Sauvignon Blanc（主），Chardonnay（次）。紅酒：Cabernet Franc，少量 Gamay。</p>
          </div>
          <div class="highlight-item">
            <h4>🍷 風格特色</h4>
            <p>Sauvignon Blanc 風格比 Touraine 更清爽緊緻，高酸度，草本和白花香氣，偶爾帶火燧石礦物感，是性價比極高的羅亞爾白酒。</p>
          </div>
        </div>
        <p>Haut-Poitou 是羅亞爾河南翼的小驚喜——不廣為人知，但 Sauvignon Blanc 的表現常讓人聯想到 Pouilly-Fumé 的清脆礦物風格，卻以 1/3 的價格入手。</p>
      </div>
    `
  },
  {
    type: 'quiz',
    title: '小測驗',
    questions: [
      {
        id: 'q1',
        question: "Cabernet-d'Anjou 和 Rosé-de-Loire 的最大差別是什麼？",
        options: [
          '使用完全不同的葡萄品種',
          "Cabernet-d'Anjou 是微甜（10-40 g/L 殘糖），Rosé-de-Loire 是干型（≤3 g/L）",
          '兩者都是干型，差別只在顏色深淺',
          "Rosé-de-Loire 只在 Anjou 以外生產"
        ],
        correctIndex: 1,
        explanation: "兩者最關鍵的差異是殘糖量：Cabernet-d'Anjou 法定殘糖 10–40 g/L（微甜），Rosé-de-Loire 則是法定干型（殘糖 ≤ 3 g/L）。兩者都以 Cabernet Franc 為重要品種，但比例要求不同。"
      },
      {
        id: 'q2',
        question: 'Grolleau 這個品種最主要的農業特性是？',
        options: [
          '低產量、晚熟、高酸度，適合做甜酒',
          '高產量、早熟、天然糖度高，非常適合釀淡色甜型粉紅',
          '只能在氣候涼爽的北部生長',
          '是 Cabernet Franc 的基因突變變種'
        ],
        correctIndex: 1,
        explanation: 'Grolleau 的高產量和天然高糖度使它成為安茹大量生產甜型粉紅（Rosé-d\'Anjou）的首選品種，幾乎只在安茹種植，是當地獨特的農業文化遺產。'
      }
    ]
  }
]
