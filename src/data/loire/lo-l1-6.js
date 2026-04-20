/**
 * LO-L1-6 四大產區深度探索
 * Pays Nantais、Anjou-Saumur、Touraine、Centre-Loire 的深度解析
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          現在我們將從地圖走進每個產區，認識它們各自的主角品種、代表酒款和風土個性。這堂課將帶您完成一次從大西洋到中央高地的800公里葡萄酒旅程。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 認識 Pays Nantais 的海洋性格</h4>
            <p>Muscadet 的多樣分級與 sur lie 的精髓</p>
          </div>
          <div class="point-item">
            <h4>🏰 掌握 Anjou-Saumur 的雙重性格</h4>
            <p>Chenin Blanc 甜酒的偉大 + Saumur-Champigny 的清新紅酒</p>
          </div>
          <div class="point-item">
            <h4>🏯 了解 Touraine 的多樣風格</h4>
            <p>Vouvray 的干甜多變 + Chinon/Bourgueil 的 Cabernet Franc 精華</p>
          </div>
          <div class="point-item">
            <h4>⛰️ 探索 Centre-Loire 的礦石殿堂</h4>
            <p>Sancerre 和 Pouilly-Fumé 的 Sauvignon Blanc 巔峰</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Pays Nantais：海洋前沿',
    highlights: [
      { id: 1, icon: '🦪', title: 'Muscadet：生蠔的完美伴侶', content: 'Pays Nantais 的海洋型氣候和花崗岩/片岩土壤造就了世界上最純粹的「海鮮白酒」' },
      { id: 2, icon: '🏅', title: 'Crus Communaux：新世代分級', content: '10 個特殊地塊被賦予「Crus Communaux」地位，最低陳放 18 個月，可以與一般 Muscadet 相差十年的陳年能力' }
    ],
    content: `<div class="pays-nantais">
      <p class="lead-text">Pays Nantais 是羅亞爾河谷最西端的產區，緊鄰大西洋，以南特（Nantes）城市為中心。這裡是 Muscadet 的天下，也是法國最具海洋個性的葡萄酒產區。</p>
      <div class="muscadet-breakdown">
        <h4>🍾 Muscadet AOP 體系</h4>
        <div class="aop-hierarchy">
          <div class="aop-level top">
            <h5>👑 Crus Communaux（特別地塊）</h5>
            <p>10 個特殊地塊：Clisson（花崗岩）、Gorges（輝長岩）、Goulaine（片岩）等<br>
            最少 sur lie 陳放 18-24 個月，許多生產者陳放 3-5 年<br>
            可以達到 10-15 年的陳年潛力——改變了人們對 Muscadet 的認知</p>
          </div>
          <div class="aop-level second">
            <h5>⭐ Muscadet Sèvre-et-Maine sur lie</h5>
            <p>最廣泛的優質 Muscadet，sur lie 至少 4 個月<br>
            土壤多樣（花崗岩、片岩、輝長岩），風格因地而異</p>
          </div>
          <div class="aop-level third">
            <h5>Muscadet Côtes de Grandlieu sur lie</h5>
            <p>Grandlieu 湖周圍，受湖泊微氣候影響<br>
            略帶更多海洋鹹感</p>
          </div>
          <div class="aop-level base">
            <h5>Muscadet Coteaux de la Loire sur lie</h5>
            <p>最北端，更接近羅亞爾河，礦石感更突出<br>
            產量少，但個性鮮明</p>
          </div>
        </div>
      </div>
      <div class="pays-nantais-other">
        <h4>其他 Pays Nantais 產品</h4>
        <p><strong>Gros Plant du Pays Nantais：</strong>Folle Blanche 釀製，酸度極高，清爽乾脆；是 Muscadet 的「更刺激」版本</p>
        <p><strong>Coteaux d'Ancenis：</strong>少量 Gamay 紅酒和 Malvoisie（Pinot Gris）甜白</p>
      </div>
    </div>`,
    quiz: {
      question: 'Muscadet「Crus Communaux」與一般 Muscadet sur lie 最主要的差別是什麼？',
      options: ['Crus Communaux 使用不同的葡萄品種', 'Crus Communaux 需要更長時間的 sur lie 陳放（最少18-24個月），有更強的陳年能力', 'Crus Communaux 產區面積更大', 'Crus Communaux 不得使用 Melon de Bourgogne'],
      correct: 1,
      explanation: 'Crus Communaux 是 Muscadet 最高等級的地塊分級，最低要求 sur lie 陳放 18 個月（許多生產者會陳放 3-5 年），遠超一般 Muscadet sur lie 的 4 個月要求。這樣的長時間酒泥接觸讓酒款發展出更複雜的質感和香氣，使其能陳放 10-15 年，完全顛覆了「Muscadet 是便宜早飲型白酒」的舊觀念。'
    }
  },

  {
    title: 'Anjou-Saumur：甜酒天堂與紅酒寶地',
    highlights: [
      { id: 1, icon: '🍯', title: 'Anjou：全球最偉大甜酒之一的產地', content: 'Coteaux du Layon、Quarts de Chaume Grand Cru、Bonnezeaux——三個世界頂級甜白酒 AOP 在此集中' },
      { id: 2, icon: '🏰', title: 'Saumur：凝灰石洞窟中的葡萄酒文化', content: 'Saumur 城堡下方有綿延的凝灰石洞窟，是保存葡萄酒的天然酒窖，也是著名的 Crémant de Loire 氣泡酒產地' }
    ],
    content: `<div class="anjou-saumur">
      <p class="lead-text">Anjou-Saumur 是羅亞爾河谷最複雜多元的產區——既有世界頂級的甜白酒，也有清新優雅的紅酒，更是法國最重要的氣泡酒產區之一。</p>
      <div class="anjou-section">
        <h4>🏰 Anjou（安茹）的白酒版圖</h4>
        <ul>
          <li><strong>Savennières：</strong>干型 Chenin Blanc 的世界頂峰；片岩土壤、低產量；包含 Coulée de Serrant 和 Roche aux Moines 兩個獨立地塊 AOC</li>
          <li><strong>Anjou Blanc：</strong>廣泛的 Chenin Blanc 干白（也允許少量 Chardonnay/Sauvignon Blanc）</li>
          <li><strong>Anjou Coteaux de la Loire：</strong>小眾的半甜至甜型 Chenin</li>
          <li><strong>Coteaux de l'Aubance：</strong>片岩土壤甜酒，花香礦石，細緻優雅</li>
          <li><strong>Coteaux du Layon（含 Villages）：</strong>面積最廣的甜酒 AOP，六個特殊村莊可在標籤標示</li>
          <li><strong>Quarts de Chaume Grand Cru：</strong>40公頃，羅亞爾唯一 Grand Cru 甜酒 AOP</li>
          <li><strong>Bonnezeaux：</strong>90公頃，三座山丘，片岩土壤的濃郁甜酒</li>
        </ul>
      </div>
      <div class="saumur-section">
        <h4>🏯 Saumur（索米爾）的多面魅力</h4>
        <ul>
          <li><strong>Saumur Blanc：</strong>Chenin Blanc 干白，凝灰石土壤，礦石優雅感</li>
          <li><strong>Saumur Mousseux / Crémant de Loire：</strong>法國最優質的傳統法氣泡酒之一，Chenin Blanc 為主，混入 Chardonnay 和 Cabernet Franc；葡萄皮在凝灰石洞窟中二次發酵</li>
          <li><strong>Saumur Rouge：</strong>Cabernet Franc 紅酒，清新易飲</li>
          <li><strong>Saumur-Champigny：</strong>★ Anjou-Saumur 最著名的紅酒 AOP，100% Cabernet Franc，凝灰石土壤；絲滑覆盆子和草莓，是羅亞爾最受歡迎的紅酒之一</li>
          <li><strong>Saumur Puy-Notre-Dame：</strong>新建立的 AOP（2011年），更結構、更陳年潛力的 Cabernet Franc</li>
        </ul>
      </div>
      <div class="anjou-rose">
        <h4>🌸 Anjou 的粉紅酒</h4>
        <p><strong>Rosé d'Anjou：</strong>以 Grolleau 為主，半甜型，大量消費市場款</p>
        <p><strong>Cabernet d'Anjou：</strong>Cabernet Franc 為主，也是半甜型；比 Rosé d'Anjou 更精緻，香氣更複雜</p>
        <p><strong>Rosé de Loire：</strong>必須是干型，以 Cabernet Franc 為主，更精緻的粉紅酒</p>
      </div>
    </div>`,
    quiz: {
      question: 'Saumur-Champigny 是以哪個葡萄品種為主釀製的紅酒 AOP？',
      options: ['Gamay', 'Merlot', 'Pinot Noir', 'Cabernet Franc'],
      correct: 3,
      explanation: 'Saumur-Champigny 是 100% Cabernet Franc 的法定產區，位於 Saumur 南部的凝灰石地帶。其絲滑的質感、覆盆子和草莓的紅果香氣，以及礦石感的尾韻，使其成為羅亞爾最受市場歡迎的紅酒 AOP，常被視為「羅亞爾紅酒的大使」。'
    }
  },

  {
    title: 'Touraine：城堡之鄉的葡萄酒萬象',
    highlights: [
      { id: 1, icon: '🏯', title: 'Tours 城市周邊的葡萄酒核心', content: 'Touraine 是整個羅亞爾河谷的地理中心，Vouvray、Chinon、Bourgueil 等頂級 AOP 在此匯聚' },
      { id: 2, icon: '🎭', title: '最多樣化的單一子產區', content: '白酒（干到甜）、紅酒、粉紅酒、氣泡酒——Touraine 能釀製所有類型，且每種都有代表性的頂級 AOP' }
    ],
    content: `<div class="touraine">
      <p class="lead-text">Touraine 是羅亞爾河谷品種最多、風格最複雜的子產區。以 Tours 城市為中心，東到西、南到北，每個小山谷都隱藏著不同的土壤和微氣候，孕育出形形色色的卓越酒款。</p>
      <div class="touraine-whites">
        <h4>🍾 Touraine 白酒精華</h4>
        <div class="aop-cards">
          <div class="aop-card">
            <h5>Vouvray（武弗雷）★★★</h5>
            <p><strong>土壤：</strong>凝灰石<br><strong>品種：</strong>100% Chenin Blanc<br><strong>風格：</strong>依年份決定 Sec（干）、Demi-Sec（半干）、Moelleux（甜）、Pétillant/Mousseux（氣泡）<br><strong>特色：</strong>每個年份都需要釀酒師重新判斷最適合的甜度；頂級陳年款可達 30 年以上</p>
          </div>
          <div class="aop-card">
            <h5>Montlouis-sur-Loire（蒙路易）</h5>
            <p><strong>位置：</strong>羅亞爾河南岸，Vouvray 對面<br><strong>風格：</strong>與 Vouvray 類似但稍輕盈；同樣可做干型、半干、甜型和氣泡酒<br><strong>特色：</strong>近年自然派釀酒師聚集，風格更前衛</p>
          </div>
          <div class="aop-card">
            <h5>Touraine Sauvignon</h5>
            <p>簡單易飲的 Sauvignon Blanc 干白，清新果香，日常飲用佳選</p>
          </div>
        </div>
      </div>
      <div class="touraine-reds">
        <h4>🍷 Touraine 紅酒精華</h4>
        <div class="aop-cards">
          <div class="aop-card">
            <h5>Chinon（希農）★★★</h5>
            <p><strong>土壤：</strong>凝灰石高台 + 礫石平原<br><strong>品種：</strong>Cabernet Franc（白酒允許 Chenin Blanc）<br><strong>風格：</strong>最豐富的風格範圍——從清新果香的礫石款，到需要 10 年以上陳年的凝灰石老藤款<br><strong>著名生產者：</strong>Olga Raffault、Bernard Baudry、Philippe Alliet、Charles Joguet</p>
          </div>
          <div class="aop-card">
            <h5>Bourgueil（布爾蓋伊）★★★</h5>
            <p><strong>土壤：</strong>凝灰石丘陵 + 礫石河岸<br><strong>品種：</strong>Cabernet Franc<br><strong>風格：</strong>比 Chinon 更多礦石和結構，老藤凝灰石款極具陳年潛力（10-20年）<br><strong>著名生產者：</strong>Yannick Amirault、Catherine et Pierre Breton</p>
          </div>
          <div class="aop-card">
            <h5>Saint-Nicolas-de-Bourgueil</h5>
            <p>三者中最輕盈；砂礫土壤，果香清新，適合微涼服侍；是隨意享用的紅酒佳選</p>
          </div>
          <div class="aop-card">
            <h5>Touraine-Amboise、Touraine-Chenonceaux、Touraine-Mesland</h5>
            <p>各有特色的 Touraine 村莊級 AOP，使用 Gamay、Cabernet Franc 和 Côt 的各種組合</p>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Vouvray 的一個獨特特徵是什麼？',
      options: ['只允許用 Sauvignon Blanc 釀製', '同一個 AOP 依年份可以生產干型、半干、甜型或氣泡酒', '只產紅酒，不生產白酒', '以橡木桶陳年聞名'],
      correct: 1,
      explanation: 'Vouvray 最獨特的地方是它的「多型性」——由於 Chenin Blanc 在不同年份有不同的成熟度，生產者會根據每年的氣候條件決定釀製干型（Sec）、半干型（Demi-Sec）、甜型（Moelleux），甚至氣泡酒（Pétillant/Mousseux）。好年份做甜酒，涼年份做干型。這種「與天氣共舞」的釀造哲學，使 Vouvray 成為世界上最有趣的白酒 AOP 之一。'
    }
  },

  {
    title: 'Centre-Loire：礦石的最終章',
    highlights: [
      { id: 1, icon: '⛰️', title: 'Sancerre：Sauvignon Blanc 的聖地', content: '三種土壤（泥灰岩、燧石、石灰岩碎石）賦予 Sancerre 三種截然不同的風格，是 Sauvignon Blanc 教科書' },
      { id: 2, icon: '🔥', title: '煙燻燧石：Pouilly-Fumé 的標誌', content: 'Pouilly-Fumé 的燧石土壤帶來「火藥煙燻」的礦石香氣，是羅亞爾最具辨識度的產區個性之一' }
    ],
    content: `<div class="centre-loire">
      <p class="lead-text">Centre-Loire 是羅亞爾河谷最東端的產區群，氣候已轉為半大陸型，土壤多為石灰岩和燧石。這裡是 Sauvignon Blanc 的全球頂端，也是羅亞爾規模最小但聲譽最高的產區集中地。</p>
      <div class="centre-loire-aops">
        <div class="flagship-aop">
          <h4>⭐ Sancerre（桑塞爾）</h4>
          <p><strong>位置：</strong>Cher 省，羅亞爾河右岸高地</p>
          <p><strong>面積：</strong>約 2,800 公頃</p>
          <p><strong>三種土壤 × 三種風格：</strong></p>
          <ul>
            <li><strong>「Terres blanches」泥灰岩：</strong>最精緻複雜，陳年潛力最強，代表村莊：Bué、Crézancy</li>
            <li><strong>「Caillotes」石灰岩碎石：</strong>清新活潑，果香明亮，早飲型，代表村莊：Verdigny</li>
            <li><strong>「Silex」燧石：</strong>礦石感強烈，煙燻鐵礦香，代表村莊：Ménétréol</li>
          </ul>
          <p><strong>也生產：</strong>少量 Pinot Noir 紅酒（Sancerre Rouge）和粉紅酒，品質極高，常被誤認為輕盈的勃艮第</p>
          <p><strong>著名生產者：</strong>Henri Bourgeois、Domaine Vacheron、Alphonse Mellot、Henri Pellé</p>
        </div>
        <div class="flagship-aop">
          <h4>⭐ Pouilly-Fumé（普利福美）</h4>
          <p><strong>位置：</strong>羅亞爾河左岸，Nièvre 省</p>
          <p><strong>面積：</strong>約 1,300 公頃</p>
          <p><strong>土壤：</strong>燧石（silex）、基默里奇泥灰岩、石灰岩</p>
          <p><strong>「Fumé」特色：</strong>燧石土壤帶來典型的「pierre à fusil」（打火石）煙燻礦石香氣</p>
          <p><strong>著名生產者：</strong>Didier Dagueneau（自然酒傳奇）、De Ladoucette、Masson-Blondelet</p>
        </div>
        <div class="secondary-aops">
          <h4>🌟 其他 Centre-Loire AOP</h4>
          <ul>
            <li><strong>Menetou-Salon（梅內圖薩隆）：</strong>緊鄰 Sancerre，風格相似但更平易近人，性價比高；以 Sauvignon Blanc 白酒和 Pinot Noir 紅酒著稱</li>
            <li><strong>Quincy（坎西）：</strong>全部使用 Sauvignon Blanc，礫石土壤，清新乾脆，價格實惠</li>
            <li><strong>Reuilly（勒依）：</strong>多品種——Sauvignon Blanc 白酒 + Pinot Noir 紅酒 + Pinot Gris 粉紅酒；小眾但精彩</li>
            <li><strong>Châteaumeillant：</strong>最新的 AOP，主要 Gamay 紅酒，輕盈易飲</li>
          </ul>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Centre-Loire 的 Sancerre 有哪三種主要土壤類型，各有什麼風格特點？',
      options: [
        '花崗岩（礦石）、黏土（圓潤）、砂礫（輕盈）',
        '泥灰岩（複雜精緻）、燧石（煙燻礦石）、石灰岩碎石（清新果香）',
        '凝灰石（優雅）、片岩（礦石）、砂礫（輕盈）',
        '黏土（飽滿）、石灰岩（高酸）、砂岩（果香）'
      ],
      correct: 1,
      explanation: 'Sancerre 最著名的三種土壤類型是：1）「Terres blanches」泥灰岩——最精緻複雜，陳年潛力最強；2）「Silex」燧石——煙燻礦石感，帶有「打火石」特有香氣；3）「Caillotes」石灰岩碎石——清新活潑，果香明亮，適合早飲。了解這三種土壤，就能理解為何同為 Sancerre 的不同酒莊，風格可以差異如此之大。'
    }
  }
]
