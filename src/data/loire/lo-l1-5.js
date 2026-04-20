/**
 * LO-L1-5 紅葡萄品種
 * Cabernet Franc、Gamay、Côt (Malbec)、Pineau d'Aunis 與其他紅品種
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          羅亞爾河谷以白酒著稱，但它的紅酒和粉紅酒同樣精彩——甚至令許多人感到驚喜。Cabernet Franc 在 Chinon 和 Bourgueil 達到世界頂峰，Gamay 提供清新果香，Côt（Malbec）帶來結構，Pineau d'Aunis 以其辛香個性征服自然酒愛好者。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 掌握 Cabernet Franc 在羅亞爾的特殊表現</h4>
            <p>了解為何涼爽的羅亞爾氣候讓 Cabernet Franc 展現出與波爾多完全不同的精緻風格</p>
          </div>
          <div class="point-item">
            <h4>🫐 認識 Gamay 與 Côt 的角色</h4>
            <p>這兩個品種在 Touraine 各有舞台，提供從清新到結構的多元選擇</p>
          </div>
          <div class="point-item">
            <h4>🌶️ 了解 Pineau d'Aunis 的獨特個性</h4>
            <p>這個幾乎只在羅亞爾河谷存在的原生品種，以辛辣個性成為自然酒界新寵</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Cabernet Franc：羅亞爾的紅葡萄之王',
    highlights: [
      { id: 1, icon: '🍒', title: '紅果清新的優雅精緻', content: '在涼爽的羅亞爾氣候下，Cabernet Franc 以紅果（覆盆子、紅醋栗）、花香（紫羅蘭）和礦石感為主，單寧細緻' },
      { id: 2, icon: '🌱', title: '蔬菜香的誤解', content: '輕微的青草/甜椒香氣是 Cabernet Franc 的品種特徵，過熟年份幾乎消失；過輕的葡萄才會顯得生硬' }
    ],
    content: `<div class="cabernet-franc-loire">
      <p class="lead-text">Cabernet Franc 在波爾多扮演配角（Merlot 的混釀搭檔），但在羅亞爾河谷，它是絕對的主角。涼爽的氣候、凝灰石和礫石土壤，讓 Cabernet Franc 展現出世界上最精緻、最芳香的面貌。</p>
      <div class="variety-profile">
        <h4>🍇 品種特性</h4>
        <div class="profile-grid">
          <div class="profile-item">
            <h5>顏色</h5>
            <p>中等紅寶石至石榴紅，少有深黑色調</p>
          </div>
          <div class="profile-item">
            <h5>香氣</h5>
            <p>覆盆子、紅醋栗、紫羅蘭、青草/甜椒（年輕時）、香料、腐葉（陳年後）</p>
          </div>
          <div class="profile-item">
            <h5>單寧</h5>
            <p>細緻、絲滑，比波爾多的 Cabernet Sauvignon 柔和得多</p>
          </div>
          <div class="profile-item">
            <h5>酸度</h5>
            <p>高，是陳年潛力的保證</p>
          </div>
          <div class="profile-item">
            <h5>風格差異</h5>
            <p>礫石地塊：果香清新，早飲型<br>凝灰石地塊：結構更強，可陳年 10-20 年</p>
          </div>
        </div>
      </div>
      <div class="key-appellations">
        <h4>🏅 核心 Cabernet Franc AOP</h4>
        <div class="aop-row">
          <div class="aop-card">
            <h5>Chinon（希農）</h5>
            <p><strong>位置：</strong>Vienne 河谷，Tours 西南<br><strong>土壤：</strong>凝灰石高地（複雜陳年款）+ 礫石平原（清新早飲款）<br><strong>風格：</strong>最廣泛的風格範圍，從輕盈果香到陳年複雜；著名生產者：Olga Raffault、Bernard Baudry、Philippe Alliet</p>
          </div>
          <div class="aop-card">
            <h5>Bourgueil（布爾蓋伊）</h5>
            <p><strong>位置：</strong>羅亞爾河右岸<br><strong>土壤：</strong>凝灰石丘陵 + 礫石沙地<br><strong>風格：</strong>比 Chinon 更多礦石感和結構，陳年款展現腐殖土和皮革香氣；著名生產者：Yannick Amirault、Catherine et Pierre Breton</p>
          </div>
          <div class="aop-card">
            <h5>Saint-Nicolas-de-Bourgueil（聖尼古拉德布爾蓋伊）</h5>
            <p><strong>位置：</strong>Bourgueil 西側<br><strong>土壤：</strong>以沙礫地為主，少量凝灰石<br><strong>風格：</strong>三者中最輕盈、最清新；覆盆子果香明亮，適合微涼服侍，早飲型</p>
          </div>
          <div class="aop-card">
            <h5>Saumur-Champigny（索米爾香皮尼）</h5>
            <p><strong>位置：</strong>Saumur 南部<br><strong>土壤：</strong>凝灰石<br><strong>風格：</strong>絲滑圓潤，紅果（覆盆子、草莓）主導，凝灰石賦予獨特礦石感；是羅亞爾最受歡迎的紅酒 AOP</p>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '羅亞爾河谷的 Cabernet Franc 與波爾多的 Cabernet Franc 最主要的風格差異是什麼？',
      options: ['羅亞爾的更濃郁、更多黑果和巧克力感', '羅亞爾的更清新、更精緻，以紅果和礦石為主，單寧細緻', '波爾多的酸度更高', '兩者幾乎沒有差異'],
      correct: 1,
      explanation: '在涼爽的羅亞爾氣候下，Cabernet Franc 保留更多天然酸度，果味以清新的紅果（覆盆子、紅醋栗）為主，單寧細緻優雅。相比之下，波爾多更溫暖，Cabernet Franc 在混釀中提供香氣和酸度，但與 Merlot 和 Cabernet Sauvignon 的組合風格更為厚重。羅亞爾的 Chinon 和 Bourgueil 是 Cabernet Franc 作為單一品種的最高殿堂。'
    }
  },

  {
    title: 'Gamay 與 Côt（Malbec）',
    highlights: [
      { id: 1, icon: '🍓', title: 'Gamay：清新果香的代言人', content: '在 Touraine 大量種植，釀製輕盈爽口的日常紅酒；也常與 Cabernet Franc 或 Côt 混釀' },
      { id: 2, icon: '🫐', title: 'Côt = Malbec：羅亞爾的深色結構', content: 'Touraine-Amboise 是唯一用 100% Côt 釀製紅酒的法定 AOP；帶來顏色深度、果實濃郁度和結構感' }
    ],
    content: `<div class="gamay-cot">
      <div class="variety-section">
        <h4>🍓 Gamay（加美）</h4>
        <div class="variety-profile-mini">
          <p><strong>主要產區：</strong>Touraine、Coteaux d'Ancenis、Anjou</p>
          <p><strong>在羅亞爾的特色：</strong>與薄酒萊（Beaujolais）的 Gamay 相似，但羅亞爾版本通常不採用碳酸浸漬法（macération carbonique），因此風格略為不同——更多土壤感，少一些果糖風格</p>
          <p><strong>香氣：</strong>紅醋栗、草莓、紫羅蘭、些微胡椒香</p>
          <p><strong>單寧：</strong>輕盈柔滑，低澀感</p>
          <p><strong>用途：</strong>
            <ul>
              <li>Touraine 基礎紅酒（單一品種）</li>
              <li>與 Côt 混釀：Touraine Gamay-Côt（增加顏色和結構）</li>
              <li>與 Cabernet Franc 混釀：賦予果香和新鮮感</li>
            </ul>
          </p>
          <p><strong>服溫：</strong>12-14°C（略微冰涼服侍，突出清新果香）</p>
        </div>
      </div>
      <div class="variety-section">
        <h4>🫐 Côt（= Malbec）</h4>
        <div class="variety-profile-mini">
          <p><strong>羅亞爾的稱呼：</strong>通常稱「Côt」（有時也叫 Malbec 或 Auxerrois）</p>
          <p><strong>主要產區：</strong>Touraine、Touraine-Amboise、Touraine-Chenonceaux</p>
          <p><strong>特殊地位：</strong><strong>Touraine-Amboise 是唯一以 100% Côt 生產紅酒的法定 AOP</strong>，這在世界上非常罕見（阿根廷 Malbec 幾乎都與其他品種混釀）</p>
          <p><strong>香氣：</strong>黑李、藍莓、可可、甘草、紫羅蘭</p>
          <p><strong>風格：</strong>顏色深、單寧較多、酒體中等偏豐滿；比阿根廷 Malbec 更有酸度和精緻感</p>
          <p><strong>混釀角色：</strong>在 Anjou 紅酒中常作為 Cabernet Franc 或 Cabernet Sauvignon 的配角，增加顏色和果實濃度</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '哪個羅亞爾河谷的 AOP 是世界上唯一規定以 100% Côt（Malbec）釀製紅酒的法定產區？',
      options: ['Chinon', 'Bourgueil', 'Touraine-Amboise', 'Anjou-Villages'],
      correct: 2,
      explanation: 'Touraine-Amboise 是羅亞爾河谷（乃至法國）唯一一個明確規定以 100% Côt（即 Malbec）釀製紅酒的法定 AOP。雖然 Côt 在羅亞爾其他地方也有種植，但通常作為混釀品種，只有 Touraine-Amboise 將其作為單一品種的主角。這與它在阿根廷的全球知名度相比，反而顯得低調而特殊。'
    }
  },

  {
    title: 'Pineau d\'Aunis：辛香個性的原住民',
    highlights: [
      { id: 1, icon: '🌶️', title: '胡椒與野花的奇異香氣', content: 'Pineau d\'Aunis 是羅亞爾幾乎獨有的品種，以其鮮明的白胡椒、紅果、野花香氣著稱，在自然酒界備受追捧' },
      { id: 2, icon: '🗺️', title: '幾乎瀕臨絕跡後的復興', content: '20 世紀中期幾乎被拔除殆盡，現在因自然派釀酒師的推廣而重獲關注，Vendômois 和 Coteaux du Loir 是主要堡壘' }
    ],
    content: `<div class="pineau-aunis">
      <p class="lead-text">Pineau d'Aunis 是羅亞爾河谷最獨特的原生紅葡萄品種，幾乎只在羅亞爾河谷種植（主要在 Loir 和 Vendôme 周圍）。它曾一度被視為過時而瀕臨消失，但在自然酒運動的推動下，現在成為最受矚目的「稀有品種」之一。</p>
      <div class="variety-detail">
        <h4>🍇 品種特性</h4>
        <ul>
          <li><strong>顏色：</strong>偏淺，紅寶石至石榴紅，透明感強</li>
          <li><strong>香氣：</strong>白胡椒（非常典型！）、紅醋栗、玫瑰花瓣、野草莓、石頭礦物感</li>
          <li><strong>酸度：</strong>高，口感活潑</li>
          <li><strong>單寧：</strong>輕至中等，質感輕盈</li>
          <li><strong>酒精：</strong>自然偏低，適合日常飲用</li>
        </ul>
      </div>
      <div class="key-regions">
        <h4>📍 主要產區</h4>
        <div class="region-mini-cards">
          <div class="mini-card">
            <h5>Coteaux du Vendômois</h5>
            <p>Pineau d'Aunis 最重要的堡壘，許多生產者以 100% Pineau d'Aunis 釀製紅酒和粉紅酒；當地稱「Pineau d'Aunis en rosé」幾乎是在地最受推崇的風格</p>
          </div>
          <div class="mini-card">
            <h5>Coteaux du Loir</h5>
            <p>Loir 河谷（注意：是「Loir」不是「Loire」，是其北部支流），氣候涼爽，Pineau d'Aunis 的香料感更為突出</p>
          </div>
          <div class="mini-card">
            <h5>Jasnières</h5>
            <p>雖以 Chenin Blanc 白酒著名，但也有少量 Pineau d'Aunis 紅酒；非常罕見，收藏家珍品</p>
          </div>
        </div>
      </div>
      <div class="revival-story">
        <h4>🌱 自然酒界的寵兒</h4>
        <p>Pineau d'Aunis 因其天然低酸、低酒精、鮮明香料個性，成為自然酒（vin naturel）生產者的最愛之一。它「不過度」的特性——不深、不甜、不重——反而在追求輕盈清新的當代飲酒文化中大受歡迎。</p>
      </div>
    </div>`,
    quiz: {
      question: 'Pineau d\'Aunis 最具標誌性的香氣特徵是什麼？',
      options: ['濃郁黑莓和巧克力', '白胡椒辛香與紅果花香', '橡木桶香草和煙燻', '熱帶水果和荔枝'],
      correct: 1,
      explanation: 'Pineau d\'Aunis 以其鮮明的白胡椒辛香氣息著稱，這在紅葡萄品種中非常罕見（胡椒感通常更多見於 Syrah 的黑胡椒，而非 Pineau d\'Aunis 的白胡椒）。伴隨著紅醋栗、玫瑰花瓣和野草莓的清新果香，形成了這個品種獨一無二的香氣輪廓。'
    }
  },

  {
    title: '紅葡萄品種速查與餐酒搭配',
    highlights: [
      { id: 1, icon: '🍖', title: '紅酒的輕盈哲學', content: '羅亞爾紅酒的整體風格偏向清新輕盈，而非濃縮厚重，因此適合多種食物搭配，並可以微涼服侍' },
      { id: 2, icon: '❄️', title: '稍微冰涼才好喝', content: '許多羅亞爾紅酒（尤其是 Saint-Nicolas-de-Bourgueil 和 Gamay）在 14-16°C 服侍，比一般紅酒稍涼，果香更突出' }
    ],
    content: `<div class="red-grapes-summary">
      <div class="summary-table-section">
        <h4>📊 羅亞爾河谷紅葡萄品種快速對照</h4>
        <table class="varieties-table">
          <tr>
            <th>品種</th>
            <th>代表 AOP</th>
            <th>核心風格</th>
            <th>最佳服溫</th>
          </tr>
          <tr>
            <td>Cabernet Franc</td>
            <td>Chinon、Bourgueil、Saumur-Champigny</td>
            <td>紅果、礦石、細緻單寧</td>
            <td>14-17°C</td>
          </tr>
          <tr>
            <td>Gamay</td>
            <td>Touraine、Coteaux d'Ancenis</td>
            <td>清新果香，輕盈易飲</td>
            <td>12-14°C</td>
          </tr>
          <tr>
            <td>Côt（Malbec）</td>
            <td>Touraine-Amboise、Touraine</td>
            <td>深色果實，較多結構</td>
            <td>15-17°C</td>
          </tr>
          <tr>
            <td>Pineau d'Aunis</td>
            <td>Vendômois、Coteaux du Loir</td>
            <td>胡椒辛香，輕盈透明</td>
            <td>12-14°C</td>
          </tr>
          <tr>
            <td>Pinot Noir</td>
            <td>Sancerre、Menetou-Salon</td>
            <td>精緻優雅，紅果花香</td>
            <td>14-16°C</td>
          </tr>
        </table>
      </div>
      <div class="food-pairing-grid">
        <h4>🍽️ 紅酒餐酒搭配指南</h4>
        <div class="pairing-items">
          <div class="pairing-item">
            <h5>Chinon / Bourgueil（老藤凝灰石款）</h5>
            <p>野豬肉燉菜、鴨肉料理、陳年山羊乾酪、香腸</p>
          </div>
          <div class="pairing-item">
            <h5>Saumur-Champigny</h5>
            <p>炙烤鮭魚、鴨胸、輕烤羊排、蘑菇料理</p>
          </div>
          <div class="pairing-item">
            <h5>Saint-Nicolas-de-Bourgueil</h5>
            <p>烤雞、油封鴨腿、蔬菜料理、淡味乳酪</p>
          </div>
          <div class="pairing-item">
            <h5>Gamay / Pineau d'Aunis</h5>
            <p>輕食冷盤、熟食肉品、鄉村派對、素食料理</p>
          </div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '為什麼許多羅亞爾紅酒（如 Saint-Nicolas-de-Bourgueil）建議以比一般紅酒稍低的溫度（12-14°C）服侍？',
      options: ['因為這些酒含有大量殘糖，低溫能凸顯甜度', '低溫服侍能讓清新的果香和酸度更加突出，正符合羅亞爾輕盈清新的風格', '這些酒不耐室溫，否則會氧化', '羅亞爾傳統就是冰鎮紅酒'],
      correct: 1,
      explanation: '羅亞爾輕盈型紅酒（如 Saint-Nicolas-de-Bourgueil、Gamay de Touraine）在稍低溫度下服侍，能讓清新的紅果果香（覆盆子、草莓）更加突出，同時保持天然高酸度帶來的活潑口感。若溫度過高（如 20°C），酒精感會上升，細緻的果香反而被掩蓋，失去這類酒最迷人的輕盈清新特質。'
    }
  }
]
