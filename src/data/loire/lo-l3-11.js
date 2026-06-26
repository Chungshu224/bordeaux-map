/**
 * LO-L3-11 羅亞爾食物配對 + Level 3 綜合評量
 * 主題: Vouvray Moelleux × Loire 起司 + Sancerre × Crottin de Chavignol + Level 3 大考
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          恭喜你即將完成羅亞爾河 Level 3！這是整個中級進階旅程的終章——在正式接受挑戰之前，讓我們用法國最經典的葡萄酒食物配對來感謝這片土地：Vouvray Moelleux 和羅亞爾山羊起司的神聖婚姻、Sancerre 和 Crottin de Chavignol 的千年情緣、Muscadet 和生蠔的大西洋交響。然後，以一份嚴格的綜合評量，確認你已真正掌握 Level 3 的精華。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🧀 掌握羅亞爾三大經典配對的化學原理</h4>
            <p>不只是「它們好搭」——理解酸度、礦物、脂肪、蛋白質、地域之間的科學互動</p>
          </div>
          <div class="point-item">
            <h4>🍽️ 建立完整的羅亞爾食物配對知識庫</h4>
            <p>從甜酒配起司到干白配海鮮，建立可以實際應用的配對框架</p>
          </div>
          <div class="point-item">
            <h4>🎓 通過 Level 3 綜合評量</h4>
            <p>測試全 Level 3 知識：Vouvray 甜度系統、Muscadet 地質、Cabernet Franc 三角、中央產區等</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Sancerre × Crottin de Chavignol — 法國最偉大的配對',
    highlights: [
      { id: 1, icon: '🧀', title: 'Crottin de Chavignol 起司', content: 'Crottin de Chavignol 是法國最著名的山羊起司之一（AOP），產自 Chavignol 村（就在 Sancerre 旁邊！），小巧圓形，熟成 3–6 週，外皮略硬，內部奶白細膩，帶明顯的山羊奶味和榛果感' },
      { id: 2, icon: '🔬', title: '配對化學', content: 'Sancerre 的高酸度（pH 3.2–3.4）切割山羊起司的奶油脂肪；燧石礦物感與起司表皮的陳年礦物感相互呼應；Sauvignon Blanc 的草本（牧草、薄荷）香氣呼應山羊的牧場個性' },
      { id: 3, icon: '🏡', title: '地域共鳴（Terroir Connection）', content: '最深層的原因是地域共鳴——Chavignol 村的山羊在 Sancerre 葡萄園旁邊的同一片草場吃草，吸收了相同的礦物質和植物，起司和葡萄酒因此共享了同樣的「place」個性' }
    ],
    content: `
      <div class="sancerre-crottin">
        <p>Sancerre × Crottin de Chavignol 是法國甚至世界葡萄酒文化中最完美的地域配對案例。兩者都來自同一個小村——Chavignol（人口不足 200 人），卻共同奠定了「地方酒配地方食材」（terroir pairing）的教科書案例。</p>
        <div class="pairing-details">
          <h4>🔬 配對科學詳解</h4>
          <table>
            <thead><tr><th>感官要素</th><th>Sancerre 的貢獻</th><th>Crottin 的需求</th></tr></thead>
            <tbody>
              <tr><td>酸度</td><td>高（pH 3.2–3.4，Kimmeridgian 礦物感）</td><td>奶油脂肪需要酸度切割，否則味覺疲勞</td></tr>
              <tr><td>礦物感</td><td>燧石（silex）帶來的煙燻礦物</td><td>起司表皮陳年帶來的礦物感，互相呼應</td></tr>
              <tr><td>草本香氣</td><td>Sauvignon Blanc 的草地、薄荷、蘆筍</td><td>山羊奶的牧場個性，強化「牧草」風味</td></tr>
              <tr><td>單寧/澀感</td><td>無（白酒無單寧）</td><td>起司蛋白質不需要單寧的收斂</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>理想搭配版本：</strong>Sancerre 白酒（3–5 年份）+ Crottin de Chavignol「affiné（成熟 4–6 週）」——不要用全新鮮款，輕微陳年的表皮帶來的複雜度才能與 Sancerre 匹配。</p>
      </div>
    `
  },
  {
    title: 'Vouvray Moelleux × 羅亞爾山羊起司',
    content: `
      <div class="vouvray-cheese-section">
        <p>甜酒配起司是法國美食中最具爭議的命題之一——一般人可能認為「甜 + 鹹」有違直覺，但實際上，Vouvray Moelleux（半甜到甜型）與羅亞爾山羊起司是絕妙的組合，背後有嚴謹的感官邏輯。</p>
        <div class="sweet-pairing-science">
          <h4>🔬 甜酒 × 起司的配對邏輯</h4>
          <div class="logic-grid">
            <div class="logic-item">
              <h5>甜酸平衡點</h5>
              <p>Vouvray Moelleux 的殘糖（30–50 g/L）讓嘴巴在接觸起司的鹹脂肪後「重置」，形成甜鹹對比；而 Chenin Blanc 保留的高酸度（即使甜型也有 pH 3.3–3.5）確保整體感覺清爽，不甜膩</p>
            </div>
            <div class="logic-item">
              <h5>蜂蜜 × 山羊風味</h5>
              <p>Vouvray Moelleux 的蜂蜜和金合歡香氣與山羊奶的動物個性形成「野性 + 甜蜜」的迷人對比，被美食評論家形容為「天鵝絨 × 山野」</p>
            </div>
          </div>
        </div>
        <div class="cheese-pairings">
          <h4>🧀 羅亞爾起司配對全景</h4>
          <table>
            <thead><tr><th>葡萄酒</th><th>起司</th><th>配對邏輯</th></tr></thead>
            <tbody>
              <tr><td>Vouvray Moelleux</td><td>Sainte-Maure-de-Touraine（都漢 AOP 山羊起司）</td><td>甜酸平衡，蜂蜜呼應山羊奶甜感</td></tr>
              <tr><td>Sancerre Blanc</td><td>Crottin de Chavignol（同村 AOP）</td><td>地域共鳴，燧石礦物 × 陳年起司礦物感</td></tr>
              <tr><td>Muscadet Sèvre et Maine</td><td>Camembert de Normandie</td><td>高酸度切割奶油脂肪，海洋礦物 × 奶油感</td></tr>
              <tr><td>Quarts-de-Chaume Grand Cru</td><td>Époisses（洗浸起司）</td><td>頂級甜酒的蜜糖和薑香可以征服 Époisses 的強烈氣味</td></tr>
              <tr><td>Chinon Rouge</td><td>Chèvre frais（新鮮山羊起司）</td><td>輕盈 Cabernet Franc 的酸度和紫羅蘭香呼應新鮮山羊奶的清涼感</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    title: 'Muscadet × 生蠔 — 大西洋的恩賜',
    content: `
      <div class="muscadet-oyster">
        <p>「Muscadet Sèvre et Maine sur Lie × 布列塔尼（Bretagne）生蠔」是法國大西洋沿岸最完美的自然配對，也是理解「地域配對（terroir pairing）」的另一個教科書案例。</p>
        <div class="pairing-science">
          <h4>科學解析</h4>
          <ul>
            <li><strong>酸度 × 生蠔：</strong>Muscadet 的高自然酸度（pH 3.1–3.3）與生蠔的鹹鮮「海水感」形成完美的「海之泡沫」效果，讓生蠔更清爽、更立體</li>
            <li><strong>酵母陳年（sur Lie）的貢獻：</strong>Muscadet sur Lie 在死酵母上陳年（最少 6 個月），酵母自溶賦予微弱的麵包感，與生蠔肉質的奶油感互補</li>
            <li><strong>地域共鳴：</strong>南特（Nantes）距布列塔尼海岸不到 2 小時，Muscadet 的農民幾乎每個週末都吃生蠔——這是數百年來「一起生長、一起消費」形成的自然和諧</li>
          </ul>
        </div>
        <p><strong>進階配對：</strong>Savennières（Nicolas Joly，100% Chenin Blanc，干型）× Sole meunière（法式黃油煎鰈魚）——都漢頂級白酒配同樣頂級淡水魚料理的宮廷配對。</p>
      </div>
    `
  },

  {
    title: 'Level 3 綜合評量（第一題）',
    highlights: [
      { id: 1, icon: '🧀', title: 'Crottin de Chavignol', content: 'Chavignol 村的 AOP 山羊起司，與 Sancerre 是法國最著名的地域共鳴配對' },
      { id: 2, icon: '🌍', title: '地域共鳴', content: '最佳配對往往來自同一片土地——食材和葡萄酒共享相同的礦物質和植物個性' }
    ],
    quiz: {
      question: 'Sancerre × Crottin de Chavignol 被稱為「地域共鳴（terroir pairing）」的最主要原因是？',
      options: [
        '兩者均在同一座酒窖中發酵和熟成',
        'Chavignol 的山羊在 Sancerre 葡萄園旁同一片草場吃草，共享相同礦物質和植物個性',
        '起司在製作過程中加入了 Sancerre 白酒浸泡',
        '兩者都使用來自同一口井的泉水'
      ],
      answer: 1,
      explanation: 'Crottin de Chavignol 的山羊在 Sancerre 葡萄園旁的同一片草場吃草，吸收了相同的 Kimmeridgian 石灰岩礦物質和草地植物，起司與葡萄酒因此共享同樣的「place」個性。Sancerre 的燧石礦物感與起司陳年表皮的礦物感互相呼應，是「地域共鳴」的教科書案例。'
    }
  },

  {
    title: 'Level 3 綜合評量（第二題）',
    highlights: [
      { id: 1, icon: '🍯', title: 'Vouvray Moelleux', content: 'Chenin Blanc 釀造的半甜到甜型白酒，殘糖 30–50 g/L，但天生保有高酸度' },
      { id: 2, icon: '⚖️', title: '甜酸平衡', content: '甜型酒配起司的關鍵在於酸度是否足以抵消甜度帶來的油膩感' }
    ],
    quiz: {
      question: '關於 Vouvray Moelleux 搭配羅亞爾山羊起司，以下何者正確？',
      options: [
        '甜酒不適合配起司，應選干型 Vouvray Sec',
        '即使殘糖達 30–50 g/L，Chenin Blanc 保有的高酸度（pH 3.3–3.5）仍讓整體感覺清爽',
        '殘糖越高，配對越困難，應選 Vouvray Pétillant 氣泡款',
        '只能配新鮮山羊起司，陳年款起司的礦物感會與甜味衝突'
      ],
      answer: 1,
      explanation: 'Vouvray Moelleux 的甜度（30–50 g/L 殘糖）讓嘴巴在接觸起司鹹脂肪後「重置」，而 Chenin Blanc 天生保有的高酸度（即使甜型也有 pH 3.3–3.5）確保整體感覺清爽不甜膩。這是 Vouvray 最迷人的地方：甜而不膩，酸而不澀，是起司配對的理想選擇。'
    }
  },

  {
    title: 'Level 3 綜合評量（第三題）',
    highlights: [
      { id: 1, icon: '🦪', title: 'Muscadet sur Lie', content: 'Melon de Bourgogne 釀造，在死酵母上陳年至少 6 個月，賦予麵包感和圓潤質感' },
      { id: 2, icon: '🌊', title: '海洋配對', content: 'Muscadet 是法國大西洋沿岸「吃什麼喝什麼」的最佳體現' }
    ],
    quiz: {
      question: 'Muscadet sur Lie 搭配生蠔時，「sur Lie（酒渣陳年）」帶來的哪個特質最有助於配對？',
      options: [
        '更高的殘糖讓生蠔的鹹鮮感更為明顯',
        '酵母自溶賦予微弱的麵包感和圓潤感，與生蠔肉質的奶油感互補',
        '更低的酸度讓生蠔的海水腥味得以舒緩',
        '更深的金黃色澤呼應生蠔烤熟後的焦糖色'
      ],
      answer: 1,
      explanation: 'Muscadet sur Lie 在死酵母上至少陳年 6 個月，酵母自溶（autolysis）賦予微弱的麵包感和奶油質感，與生蠔肉質的奶油感形成互補。同時，Muscadet 的高酸度（pH 3.1–3.3）與生蠔的鹹鮮「海水感」完美結合，形成「海之泡沫」效果，讓生蠔更清爽、更立體。'
    }
  },
]
