/**
 * LO-L1-6 產區深度探索
 * Pays Nantais、Anjou-Saumur、Touraine、Centre-Loire、Vallée du Loir、Haut-Poitou 全面解析
 * 資料來源補充：Vins de Loire 官方網站（vinsdeloire.fr）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          現在我們將從地圖走進每個產區，認識它們各自的主角品種、代表酒款和風土個性。這堂課將帶您完成一次從大西洋到法國中央高地的完整葡萄酒旅程，涵蓋羅亞爾河谷官方認定的六大產區群。
        </p>
        <p class="intro-note" style="font-size:0.9em;color:#888;margin-top:8px;">資料依據：<em>Vins de Loire</em> 官方網站（vinsdeloire.fr），共計 <strong>54 個 AOP/DGC 及 IGP</strong>，分屬 5 個主要葡萄酒次產區。</p>
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
            <p>Vouvray 的干甜多變 + Chinon/Bourgueil 的 Cabernet Franc 精華，及各村莊 AOP 特色</p>
          </div>
          <div class="point-item">
            <h4>⛰️ 探索 Centre-Loire 的礦石殿堂</h4>
            <p>Sancerre 和 Pouilly-Fumé 的 Sauvignon Blanc 巔峰</p>
          </div>
          <div class="point-item">
            <h4>🌿 認識 Vallée du Loir 的辛香個性</h4>
            <p>Jasnières、Coteaux du Loir、Coteaux du Vendômois——Pineau d'Aunis 的故鄉</p>
          </div>
          <div class="point-item">
            <h4>🏛️ 探索 Haut-Poitou 的特殊地位</h4>
            <p>隸屬 Nouvelle-Aquitaine 卻歸入羅亞爾河谷的特殊 AOP</p>
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
    component: 'LoireRegionMapSlide',
    title: 'Pays Nantais 產區地圖',
    componentProps: {
      slide: {
        title: 'Pays Nantais 產區地圖',
        description: '大西洋出海口的 Muscadet 王國——Sèvre-et-Maine、Côtes de Grandlieu、Coteaux de la Loire 三個子產區與 Gros Plant 分布',
        mapGroup: 'PayNantes',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson', 'Muscadet-Côtes-de-Grandlieu.geojson', 'Muscadet-Coteaux-de-la-Loire.geojson', 'Gros-Plant-du-Pays-Nantais.geojson'],
      }
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
    component: 'LoireRegionMapSlide',
    title: 'Anjou-Saumur 產區地圖',
    componentProps: {
      slide: {
        title: 'Anjou-Saumur 產區地圖',
        description: '甜酒天堂（Layon 甜酒帶）與紅酒寶地（Saumur-Champigny）的雙重面貌，及 Savennières 火山岩坡地的位置',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Anjou.geojson', 'Saumur.geojson', 'Saumur-Champigny.geojson', 'Savennières.geojson', 'Quarts-de-Chaume.geojson', 'Bonnezeaux.geojson', 'Coteaux-du-Layon.geojson'],
      }
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
            <h5>Touraine-Amboise</h5>
            <p><strong>特色：</strong>全球唯一規定以 100% Côt（Malbec）釀製紅酒的 AOP；白酒以 Chenin Blanc 為主</p>
          </div>
          <div class="aop-card">
            <h5>Touraine-Chenonceaux</h5>
            <p><strong>品種：</strong>Côt + Cabernet Franc（紅酒）；Sauvignon Blanc（白酒）<br><strong>特色：</strong>以雪儂梭城堡（Château de Chenonceau）命名，橫跨 Cher 河的著名城堡旁邊的優美葡萄園</p>
          </div>
          <div class="aop-card">
            <h5>Touraine-Mesland</h5>
            <p><strong>品種：</strong>Gamay + Côt + Cabernet Franc（紅酒），Chenin Blanc（白酒）<br><strong>特色：</strong>以砂礫土壤為主，紅酒清新活潑，白酒帶花香</p>
          </div>
          <div class="aop-card">
            <h5>Touraine Azay-le-Rideau ✦ 特色 AOP</h5>
            <p><strong>品種：</strong>白酒：Chenin Blanc（可干型或半甜型）；粉紅酒：Gamay + Grolleau<br><strong>特色：</strong>以 Azay-le-Rideau 城堡命名；白酒以半甜型（Demi-sec）最具代表性，帶有蜂蜜和礦石感</p>
          </div>
          <div class="aop-card">
            <h5>Touraine Noble-Joué ✦ 稀有 AOP</h5>
            <p><strong>品種：</strong>100% Meunier + Pinot Gris + Pinot Noir（三種 Pinot 混釀）<br><strong>特色：</strong>全法國獨一無二的粉紅酒 AOP，以「灰粉紅」（gris de gris）風格著稱；顏色淡鮭魚粉，香氣細膩，帶花香和蜂蜜感</p>
          </div>
          <div class="aop-card">
            <h5>Touraine Oisly</h5>
            <p><strong>品種：</strong>Sauvignon Blanc（白酒，最低 85%）<br><strong>特色：</strong>位於 Touraine 東南端的砂質高台（plateau de Oisly），Sauvignon Blanc 個性清新，帶白花和柑橘香，是 Touraine Sauvignon 品質最高的地塊之一</p>
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
    component: 'LoireRegionMapSlide',
    title: 'Touraine 產區地圖',
    componentProps: {
      slide: {
        title: 'Touraine 產區地圖',
        description: '城堡之鄉的葡萄酒版圖——Vouvray（北岸）、Montlouis（南岸）對望，Chinon（Vienne 河谷）、Bourgueil（Loire 北岸）的地理分布',
        mapGroup: 'Touraine',
        highlightFiles: ['Vouvray.geojson', 'Montlouis-sur-Loire.geojson', 'Chinon.geojson', 'Bourgueil.geojson', 'Saint-Nicolas-de-Bourgueil.geojson', 'Touraine.geojson'],
      }
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
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 產區地圖',
    componentProps: {
      slide: {
        title: 'Centre-Loire 產區地圖',
        description: 'Sancerre 與 Pouilly-Fumé 隔河相望，Menetou-Salon、Quincy、Reuilly 等衛星 AOC 的地理位置',
        mapGroup: 'Centre',
        highlightFiles: ['Sancerre.geojson', 'Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson', 'Menetou-Salon.geojson', 'Quincy.geojson', 'Reuilly.geojson'],
      }
    }
  },

  {
    title: 'Vallée du Loir：北方的辛香世界',
    highlights: [
      { id: 1, icon: '🌿', title: 'Pineau d\'Aunis 的故鄉', content: '羅亞爾河北方支流 Loir 河谷（注意：Loir 不是 Loire），是辛辣香料感紅酒品種 Pineau d\'Aunis 最重要的堡壘' },
      { id: 2, icon: '❄️', title: '最涼爽的羅亞爾子產區', content: '北方位置造就羅亞爾最涼爽的微氣候，Chenin Blanc 白酒酸度極高，個性鮮明，是收藏家的低調珍品' }
    ],
    content: `<div class="vallee-du-loir">
      <p class="lead-text">Vallée du Loir 沿著羅亞爾河北方的支流「Loir 河」延伸（注意：是「Loir」不帶「e」，非羅亞爾主河「Loire」），從 Villiers-sur-Loir 到 Château-du-Loir 一帶。涼爽的氣候和以凝灰石（tuffeau）為主的土壤，孕育出個性鮮明的辛香紅酒和礦石白酒。</p>
      <div class="loir-stats">
        <div class="stat-box">
          <strong>官方描述</strong>：「Cap au nord, fraîcheur garantie！」（向北去，清爽有保障！）<br>
          <strong>AOP 數量</strong>：4 個 AOP/DGC（不含 IGP Val de Loire）<br>
          <strong>主要土壤</strong>：凝灰石（tuffeau）+ 黏土（argiles）<br>
          <strong>特色</strong>：法國最北端的 Chenin Blanc 和 Pineau d'Aunis 產地之一
        </div>
      </div>
      <div class="loir-aops">
        <h4>🏅 Vallée du Loir 的 AOP</h4>
        <div class="aop-cards">
          <div class="aop-card">
            <h5>🌟 Jasnières（賈斯尼耶爾）</h5>
            <p><strong>品種：</strong>100% Chenin Blanc（白酒）</p>
            <p><strong>面積：</strong>僅約 60 公頃，極為稀少</p>
            <p><strong>土壤：</strong>凝灰石坡地，面朝南方</p>
            <p><strong>風格：</strong>高酸、清瘦、礦石感強烈；優秀年份帶有蜂蜜、蜂蠟和礦石的細膩複雜度；陳年潛力強，可達 10-20 年以上</p>
            <p><strong>評價：</strong>常被葡萄酒收藏家視為「最低調的羅亞爾頂級白酒」</p>
          </div>
          <div class="aop-card">
            <h5>Coteaux du Loir（羅亞爾丘）</h5>
            <p><strong>品種：</strong>白酒：Chenin Blanc；紅酒/粉紅：Pineau d'Aunis、Gamay、Grolleau、Côt、Cabernet Franc</p>
            <p><strong>面積：</strong>約 200 公頃</p>
            <p><strong>土壤：</strong>凝灰石、黏土</p>
            <p><strong>風格：</strong>
              <ul>
                <li>白酒：Chenin 的高酸礦石感，年輕時封閉，陳年後展現蜂蜜野花香</li>
                <li>紅酒：以 Pineau d'Aunis 為主，白胡椒辛香、紅果清新，酒體輕盈</li>
                <li>粉紅：淡鮭魚色，胡椒香和野草莓風味</li>
              </ul>
            </p>
          </div>
          <div class="aop-card">
            <h5>Coteaux du Vendômois（旺多姆丘）</h5>
            <p><strong>品種：</strong>白酒：Chenin Blanc（+ Chardonnay）；紅酒：Gamay + Pineau d'Aunis（可混釀）；粉紅：Pineau d'Aunis（最著名）</p>
            <p><strong>特色：</strong>Pineau d'Aunis 的核心堡壘，尤其以「gris de Pineau d'Aunis」（Pineau d'Aunis 粉紅酒）最受推崇；顏色淡、香氣迷人，帶白胡椒和野花香</p>
            <p><strong>位置：</strong>Vendôme 城市周邊，羅亞爾北部支流沿岸</p>
          </div>
        </div>
      </div>
      <div class="loir-character">
        <h4>🌶️ Pineau d'Aunis：Vallée du Loir 的靈魂品種</h4>
        <p>Pineau d'Aunis 是幾乎只在羅亞爾河谷種植的原生紅葡萄品種，在 Vallée du Loir 找到了它最後的重要堡壘。以其鮮明的<strong>白胡椒辛香</strong>、紅醋栗和野草莓香氣著稱，酒體輕盈，酸度活潑，是自然酒界最受追捧的稀有品種之一。</p>
      </div>
      <div class="loir-food">
        <h4>🍽️ 餐酒搭配</h4>
        <ul>
          <li><strong>Jasnières 干白：</strong>河魚料理、淡菜、山羊乳酪</li>
          <li><strong>Coteaux du Loir 紅酒（Pineau d'Aunis）：</strong>豬肉熟食冷盤（charcuterie）、白肉料理、輕微香料風味食物</li>
          <li><strong>Coteaux du Vendômois 粉紅：</strong>夏季輕食、沙拉、蔬食料理</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: 'Vallée du Loir 的 Jasnières AOP 以哪個葡萄品種釀製，風格有何特徵？',
      options: [
        'Sauvignon Blanc——草本清新，適合早飲',
        'Chenin Blanc——高酸礦石感，陳年潛力強，是羅亞爾最低調的頂級白酒之一',
        'Muscadet——清淡鹹鮮，搭配海鮮',
        'Pineau d\'Aunis——辛香紅酒，白胡椒個性'
      ],
      correct: 1,
      explanation: 'Jasnières 是 100% Chenin Blanc 的白酒 AOP，面積僅約 60 公頃，是羅亞爾最北端也最為稀少的頂級白酒產地之一。凝灰石南向坡地帶來獨特的礦石感和高酸度，年輕時常顯封閉嚴肅，但隨著陳年逐漸展現蜂蜜、蜂蠟和礦石的細膩複雜度，被許多收藏家視為「被低估的羅亞爾頂級白酒」。'
    }
  },

  {
    title: 'Haut-Poitou：跨越疆界的特殊 AOP',
    highlights: [
      { id: 1, icon: '🗺️', title: '地理上的特殊存在', content: 'Haut-Poitou 行政上隸屬 Nouvelle-Aquitaine 大區（非 Pays de la Loire），但因 Vienne 河的影響，酒款被歸入羅亞爾河谷體系' },
      { id: 2, icon: '🌬️', title: '海洋與大陸氣候的交匯', content: '大西洋的溫和與大陸型的溫差在此交會，賦予白酒特別的清新芬芳，紅酒輕盈爽口' }
    ],
    content: `<div class="haut-poitou">
      <p class="lead-text">Haut-Poitou（上普瓦圖）位於 Poitiers 城市的西北方，行政隸屬 Vienne 省（Nouvelle-Aquitaine 大區）。儘管在行政上不屬於羅亞爾大區，但 Vienne 河的影響讓這裡的葡萄酒被納入羅亞爾河谷體系，官方網站 vinsdeloire.fr 將其列為羅亞爾的第五個葡萄酒次產區。</p>
      <div class="haut-poitou-stats">
        <div class="stat-box">
          <strong>位置</strong>：Poitiers 西北方，Vienne 省<br>
          <strong>行政隸屬</strong>：Nouvelle-Aquitaine 大區（非 Pays de la Loire）<br>
          <strong>AOP 數量</strong>：1 個（Haut-Poitou AOP）+ IGP Val de Loire<br>
          <strong>特色</strong>：海洋與大陸氣候交匯帶，芳香白酒與清新紅酒
        </div>
      </div>
      <div class="haut-poitou-aop">
        <h4>🏅 Haut-Poitou AOP</h4>
        <div class="aop-card" style="max-width:100%;">
          <p><strong>葡萄品種：</strong></p>
          <ul>
            <li><strong>白酒（主要）：</strong>Sauvignon Blanc、Sauvignon Gris——活潑清新，柑橘與白花香氣突出</li>
            <li><strong>紅酒：</strong>Gamay、Cabernet Franc、Pinot Noir、Merlot——風格輕盈爽口，以 Gamay 和 Cabernet Franc 最具代表性</li>
            <li><strong>粉紅酒：</strong>以上紅酒品種均可</li>
          </ul>
          <p><strong>風格特徵：</strong></p>
          <ul>
            <li>白酒：香氣特別生動，Sauvignon Blanc 展現濃郁的草本、柑橘和白花香，兼具海洋清新感</li>
            <li>紅酒：輕盈果香型，適合輕涼服侍</li>
            <li>整體：清爽、芳香，是性價比優良的日常飲用佳選</li>
          </ul>
        </div>
      </div>
      <div class="haut-poitou-context">
        <h4>📌 與羅亞爾其他產區的比較</h4>
        <table class="comparison-table">
          <tr>
            <th>特徵</th>
            <th>Haut-Poitou</th>
            <th>Sancerre / Pouilly-Fumé</th>
          </tr>
          <tr>
            <td>主要白酒品種</td>
            <td>Sauvignon Blanc</td>
            <td>Sauvignon Blanc</td>
          </tr>
          <tr>
            <td>氣候</td>
            <td>海洋 + 大陸交匯型</td>
            <td>半大陸型</td>
          </tr>
          <tr>
            <td>土壤</td>
            <td>石灰岩、黏土</td>
            <td>泥灰岩、燧石、石灰岩</td>
          </tr>
          <tr>
            <td>風格</td>
            <td>清新芳香，果味生動</td>
            <td>礦石感更強，複雜度更高</td>
          </tr>
          <tr>
            <td>定位</td>
            <td>日常飲用，性價比高</td>
            <td>頂級精品，珍藏級</td>
          </tr>
        </table>
      </div>
      <div class="haut-poitou-food">
        <h4>🍽️ 餐酒搭配</h4>
        <ul>
          <li><strong>Haut-Poitou 白酒：</strong>山羊乳酪、蘆筍、清炒海鮮、越南春捲</li>
          <li><strong>Haut-Poitou 紅酒：</strong>烤雞腿、豬里脊、輕盈燉菜、軟質乾酪</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: 'Haut-Poitou AOP 在行政與地理上有何特殊之處？',
      options: [
        '它位於巴黎盆地，是羅亞爾最北端的產區',
        '它行政上隸屬 Nouvelle-Aquitaine（非羅亞爾大區），但因 Vienne 河影響而被歸入羅亞爾葡萄酒體系',
        '它是羅亞爾唯一生產紅酒的產區',
        '它是法國面積最大的 AOP'
      ],
      correct: 1,
      explanation: 'Haut-Poitou 的獨特之處在於其跨越行政疆界的歸屬——它位於 Vienne 省（Nouvelle-Aquitaine 大區），行政上並不屬於 Pays de la Loire 大區，但由於受到流經此地的 Vienne 河（羅亞爾的重要支流）影響，葡萄酒風格與羅亞爾體系相近，因此被 InterLoire 官方納入羅亞爾葡萄酒家族。這種「行政在大區外，酒款在體系內」的特殊身份，使 Haut-Poitou 成為羅亞爾葡萄酒版圖中最具趣味的邊界案例。'
    }
  }
]
