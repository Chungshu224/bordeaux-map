/**
 * LO-L1-3 Chenin Blanc — 羅亞爾河的靈魂
 * 羅亞爾河谷最重要的白葡萄品種，從干型到甜型的無限可能
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Chenin Blanc，羅亞爾河谷最偉大的白葡萄品種，也是全球葡萄酒世界最被低估（同時也是最令人驚艷）的品種之一。同一個品種，在同一個地區，竟能釀出世界上最精彩的干白酒、半甜白酒、甜白酒和氣泡酒——這就是 Chenin Blanc 的魔力。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 掌握 Chenin Blanc 的品種特性</h4>
            <p>了解高酸度、陳年潛力強、風格多變是 Chenin 的核心特質</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 認識干型 Chenin 的代表產區</h4>
            <p>Savennières、Vouvray sec、Jasnières——各有不同風格的干型頂峰</p>
          </div>
          <div class="point-item">
            <h4>🍯 了解甜型 Chenin 的偉大程度</h4>
            <p>Quarts de Chaume Grand Cru、Bonnezeaux——世界頂級甜白酒的羅亞爾代表</p>
          </div>
          <div class="point-item">
            <h4>⏳ 理解 Chenin Blanc 的陳年潛力</h4>
            <p>為何優質 Chenin 可以陳放 20-50 年甚至更久，從蜂蜜到煤油的驚人演化</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'LoireRegionMapSlide',
    title: '羅亞爾河谷：Pays Nantais 產區地圖',
    componentProps: {
      slide: {
        title: '羅亞爾河谷：Pays Nantais 產區地圖',
        description: '法國最長葡萄酒產區的最西端，大西洋風格的 Muscadet 王國',
        mapGroup: 'PayNantes',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson'],
      }
    }
  },

  {
    title: 'Chenin Blanc：品種之王',
    highlights: [
      { id: 1, icon: '⚡', title: '超高天然酸度', content: '即使完全成熟，Chenin 仍保有驚人的天然酸度，這是它能釀製各種甜度酒款而不失平衡的秘密' },
      { id: 2, icon: '🎭', title: '最多變的白葡萄品種', content: '同一品種可以釀出礦石型干白、花香半甜、蜂蜜甜酒，乃至精緻氣泡酒' }
    ],
    content: `<div class="chenin-overview">
      <p class="lead-text">Chenin Blanc 在羅亞爾河谷的種植歷史可追溯至 9 世紀，它與這片土地的關係如此深遠，以至於在當地有個別名：「Pineau de la Loire」（羅亞爾的 Pineau）。</p>
      <div class="variety-profile">
        <h4>🍇 品種基本特性</h4>
        <div class="profile-grid">
          <div class="profile-item">
            <h5>顏色</h5>
            <p>黃綠至金黃，成熟甜酒呈深金黃至琥珀</p>
          </div>
          <div class="profile-item">
            <h5>酸度</h5>
            <p>極高——這是 Chenin Blanc 的靈魂，也是它長壽的秘密</p>
          </div>
          <div class="profile-item">
            <h5>香氣</h5>
            <p>年輕時：蘋果、梨、蜂蜜、金雀花、薑<br>陳年後：蜂蜡、杏桃、薑餅、煤油、核桃</p>
          </div>
          <div class="profile-item">
            <h5>酒體</h5>
            <p>中等至飽滿，甜型酒款濃郁厚重</p>
          </div>
          <div class="profile-item">
            <h5>陳年潛力</h5>
            <p>干型：10-30 年；頂級甜型：50 年以上</p>
          </div>
          <div class="profile-item">
            <h5>風格範圍</h5>
            <p>Sec（干）→ Demi-sec（半干）→ Moelleux（甜）→ Liquoreux（極甜）</p>
          </div>
        </div>
      </div>
      <div class="chenin-note">
        <h4>🌍 全球分布</h4>
        <p>除羅亞爾河谷外，南非（稱為 Steen）也是重要的 Chenin Blanc 產地，但無論哪裡，羅亞爾都是公認的 Chenin Blanc 最高殿堂。</p>
      </div>
    </div>`,
    quiz: {
      question: 'Chenin Blanc 能釀製如此多種甜度風格的最關鍵品種特性是什麼？',
      options: ['低酸度，容易平衡糖分', '超高天然酸度，即使殘糖高仍能保持平衡', '厚皮，不易腐爛', '早熟，易於每年穩定採收'],
      correct: 1,
      explanation: 'Chenin Blanc 超高的天然酸度是它能橫跨干型到極甜型的核心原因。高酸度與殘糖取得平衡，酒款不會顯得膩口，反而展現出清新活潑的甜蜜感。這正是 Coteaux du Layon 或 Quarts de Chaume 即使甜度極高仍令人垂涎的奧秘。'
    }
  },

  {
    title: '干型 Chenin — 礦石的殿堂',
    highlights: [
      { id: 1, icon: '🏔️', title: 'Savennières：最偉大的干型 Chenin', content: '位於 Anjou 的 Savennières 被視為干型 Chenin Blanc 的最高峰，著名地塊 Coulée de Serrant 是 AOC 中的 AOC' },
      { id: 2, icon: '🏯', title: 'Vouvray：多面手明星', content: 'Touraine 的 Vouvray 可以是干型、半干、甜型，也可以是氣泡酒——每種風格都優秀' }
    ],
    content: `<div class="chenin-dry">
      <p class="lead-text">干型 Chenin Blanc 是羅亞爾河谷最令人驚艷的白酒風格之一。表面上看似簡單，實則隱藏著深邃的礦石感、驚人的複雜度，以及可達數十年的陳年潛力。</p>
      <div class="dry-regions">
        <div class="region-detail">
          <h4>🏔️ Savennières（薩維尼耶爾）</h4>
          <p><strong>位置：</strong>Anjou，緊鄰羅亞爾河南岸</p>
          <p><strong>土壤：</strong>片岩（schistes）</p>
          <p><strong>風格：</strong>緊緻、礦石感極強、初期常顯嚴肅，需 5-10 年才展現巔峰；複雜度可媲美頂級白勃艮第</p>
          <p><strong>著名地塊：</strong>
            <ul>
              <li><strong>Coulée de Serrant（庫萊德塞朗）</strong>：7 公頃，擁有自己的 AOC，代表性生產者 Nicolas Joly（自然動力法先驅）</li>
              <li><strong>Roche aux Moines</strong>：擁有獨立的 AOC 地位</li>
            </ul>
          </p>
        </div>
        <div class="region-detail">
          <h4>🏯 Vouvray（武弗雷）</h4>
          <p><strong>位置：</strong>Touraine，Tours 東北，羅亞爾河北岸</p>
          <p><strong>土壤：</strong>凝灰石（tuffeau）</p>
          <p><strong>風格：</strong>視年份決定干型（sec）或甜型（moelleux），熱年做甜酒，涼年做干型；干型 Vouvray 充滿蜂蜜、蘋果和礦石香氣</p>
          <p><strong>著名生產者：</strong>Domaine Huet、Domaine du Clos Naudin、Foreau</p>
        </div>
        <div class="region-detail">
          <h4>🌿 Jasnières & Coteaux du Loir</h4>
          <p><strong>位置：</strong>羅亞爾河北部支流 Loir 河谷</p>
          <p><strong>風格：</strong>小眾但精彩，最北端的 Chenin 酸度最高，帶有野花蜂蜜香氣和礦石感</p>
          <p><strong>特點：</strong>收藏家珍愛的低調寶藏</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Savennières 最著名的地塊 Coulée de Serrant 的特別之處是什麼？',
      options: ['它是面積最大的葡萄園', '它擁有自己獨立的 AOC 地位，且以自然動力法聞名', '它只生產氣泡酒', '它的土壤是花崗岩'],
      correct: 1,
      explanation: 'Coulée de Serrant 不僅只有 7 公頃，而且擁有屬於自己的 AOC 地位（類似勃艮第的 Grand Cru 獨立 AOC 概念），由 Nicolas Joly 的 Château de la Roche aux Moines 酒莊生產。Nicolas Joly 也是法國自然動力農法（Biodynamie）的先驅倡導者。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: '干型 Chenin 頂級產區地圖',
    componentProps: {
      slide: {
        title: '干型 Chenin 頂級產區地圖',
        description: 'Savennières（Loire 北岸南向坡）與 Coulée de Serrant（7 公頃獨家 Cru）的位置——全球最偉大干型 Chenin Blanc 的發源地',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Savennières.geojson', 'Coulée-de-Serrant.geojson', 'Savennières-Roche-aux-Moines.geojson'],
      }
    }
  },

  {
    title: '甜型 Chenin — 液態黃金',
    highlights: [
      { id: 1, icon: '🍯', title: '貴腐的奇蹟', content: '秋季晨霧帶來的貴腐菌（Botrytis cinerea）讓 Chenin Blanc 的糖分濃縮，創造出蜂蜜、杏桃和薑的迷人甜酒' },
      { id: 2, icon: '👑', title: 'Quarts de Chaume Grand Cru', content: '僅40公頃的頂級甜酒產地，是羅亞爾河谷唯一獲得「Grand Cru」獨立 AOP 地位的甜酒產區' }
    ],
    content: `<div class="chenin-sweet">
      <p class="lead-text">羅亞爾河谷的甜型 Chenin Blanc 是法國乃至全球最偉大的甜白酒之一，與 Sauternes 和德國 Trockenbeerenauslese 並列甜酒殿堂。貴腐菌的作用讓葡萄水分蒸發、糖分濃縮，香氣在濃縮中爆發出難以言喻的複雜度。</p>
      <div class="sweet-pyramid">
        <h4>🏆 甜型 Chenin 的品質金字塔</h4>
        <div class="pyramid-levels">
          <div class="pyramid-level grand-cru">
            <h5>👑 Grand Cru 等級</h5>
            <p><strong>Quarts de Chaume Grand Cru</strong>：羅亞爾唯一Grand Cru甜酒AOP，40公頃，只在特定年份生產，10年以上陳放展現巔峰，蜂蜜/玫瑰/番紅花複雜度無與倫比</p>
          </div>
          <div class="pyramid-level premier">
            <h5>⭐ 頂級甜酒 AOP</h5>
            <p><strong>Bonnezeaux（博恩索）</strong>：90公頃，三個獨立山丘，片岩土壤，濃郁而帶辛香感；陳年後展現蜂蜡、薑、番紅花</p>
          </div>
          <div class="pyramid-level classic">
            <h5>🌟 經典甜酒 AOP</h5>
            <p><strong>Coteaux du Layon</strong>：最廣泛的甜酒 AOP（1400公頃），Layon 河谷；甜度和複雜度因地塊而異；包含 Coteaux du Layon Villages（六個村莊可標示）</p>
            <p><strong>Coteaux de l'Aubance</strong>：片岩土壤，細緻優雅，甜度較輕</p>
          </div>
          <div class="pyramid-level vouvray">
            <h5>🍾 Vouvray 甜酒</h5>
            <p>視年份決定甜度——Demi-sec（半干）、Moelleux（甜）、以及罕見的 Pétillant 甜型氣泡酒</p>
          </div>
        </div>
      </div>
      <div class="botrytis-note">
        <h4>🍄 貴腐菌的形成條件</h4>
        <p>秋季清晨，Layon 河谷的霧氣讓貴腐菌（Botrytis cinerea）在葡萄皮上形成；午後陽光驅散霧氣，防止灰腐病。這種「先霧後晴」的特殊天氣節奏，是 Anjou 甜酒得天獨厚的自然條件。</p>
      </div>
    </div>`,
    quiz: {
      question: 'Quarts de Chaume 在羅亞爾河谷甜酒中的獨特地位是什麼？',
      options: ['它是面積最大的甜酒產區', '它是唯一獲得 Grand Cru 獨立 AOP 地位的羅亞爾甜酒產區', '它只在偶數年份生產', '它的 Chenin Blanc 從不用貴腐葡萄'],
      correct: 1,
      explanation: 'Quarts de Chaume 在 2011 年獲得了羅亞爾河谷首個（也是迄今唯一的）Grand Cru 獨立 AOP 地位，使其成為媲美勃艮第 Grand Cru 的法定頂級地塊。僅 40 公頃的面積，加上嚴格的低產量規定，使其成為收藏家競相追逐的稀世甜酒。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: '甜型 Chenin 產區地圖',
    componentProps: {
      slide: {
        title: '甜型 Chenin 產區地圖',
        description: 'Layon 河谷甜酒帶——Coteaux-du-Layon、Bonnezeaux 與 Quarts-de-Chaume Grand Cru 的地理嵌套關係',
        mapGroup: 'AnjouSaumur',
        highlightFiles: ['Coteaux-du-Layon.geojson', 'Bonnezeaux.geojson', 'Quarts-de-Chaume.geojson'],
      }
    }
  },

  {
    title: 'Chenin Blanc 的陳年奇蹟',
    highlights: [
      { id: 1, icon: '⏳', title: '時間是 Chenin 的盟友', content: '頂級 Chenin Blanc 甜酒可陳放 50 年以上，從花香蜂蜜演變為複雜的蜂蜡、杏桃、薑、礦石層次' },
      { id: 2, icon: '🌟', title: '干型 Chenin 的驚人演化', content: 'Savennières 或頂級 Vouvray sec 在 15-20 年後展現出令人屏息的複雜度，堪比 Grand Cru 白勃艮第' }
    ],
    content: `<div class="chenin-aging">
      <p class="lead-text">Chenin Blanc 的陳年能力是白葡萄酒世界中最令人驚嘆的現象之一。許多葡萄酒愛好者在品嚐到一款陳年 Savennières 或 Bonnezeaux 後，會完全改變對羅亞爾河谷葡萄酒的認知。</p>
      <div class="aging-evolution">
        <h4>📅 Chenin Blanc 的時間演化</h4>
        <div class="age-stages">
          <div class="age-stage">
            <h5>🌱 年輕期（1-5年）</h5>
            <p>干型：青蘋果、梨、金雀花、白色花香、礦石<br>甜型：蜂蜜、杏桃、熱帶水果、薑、金雀花</p>
          </div>
          <div class="age-stage">
            <h5>🌿 發展期（5-15年）</h5>
            <p>干型：蜂蜡、榅桲（quince）、蘑菇、礦石、堅果<br>甜型：糖漬橙皮、薑餅、焦糖、礦石</p>
          </div>
          <div class="age-stage">
            <h5>🏆 巔峰期（15-40年以上）</h5>
            <p>干型：煤油、羊毛脂、蘑菇、礦石深度——令人思考的複雜度<br>甜型：陳年琥珀色、番紅花、薑、核桃、無花果乾</p>
          </div>
        </div>
      </div>
      <div class="service-tips">
        <h4>🍾 品飲建議</h4>
        <ul>
          <li><strong>干型年輕款：</strong>10-12°C，讓礦石感在杯中慢慢展開</li>
          <li><strong>干型陳年款：</strong>12-14°C，提前醒酒 30 分鐘</li>
          <li><strong>甜型年輕款：</strong>8-10°C，欣賞花香水果的純粹</li>
          <li><strong>甜型陳年款：</strong>10-12°C，讓複雜的蜂蜡礦石感充分表達</li>
        </ul>
      </div>
      <div class="food-pairing">
        <h4>🍽️ 餐酒搭配</h4>
        <ul>
          <li><strong>干型 Savennières：</strong>龍蝦奶油醬汁、鵝肝、陳年山羊乾酪</li>
          <li><strong>Vouvray demi-sec：</strong>鴨胸肉、豬肋排、亞洲料理</li>
          <li><strong>Coteaux du Layon：</strong>新鮮鵝肝、藍紋乾酪、水果塔</li>
          <li><strong>Quarts de Chaume：</strong>單獨品飲，或搭配特殊場合甜品</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '一款頂級 Savennières（干型 Chenin Blanc）在陳放 20 年以上後，最可能發展出哪種典型香氣？',
      options: ['新鮮青草和接骨木花', '煤油（石油感）、蜂蜡和礦石的複雜層次', '新鮮草莓和覆盆子', '濃郁的熱帶水果和香草'],
      correct: 1,
      explanation: '陳年優質 Chenin Blanc 干型（尤其是 Savennières）以發展出獨特的煤油（petroleum）香氣著稱，這與陳年雷司令類似，是白葡萄酒氧化性陳年的典型特徵。此外，蜂蜡、榅桲、礦石和薑餅等複雜香氣交織在一起，形成無與倫比的多層次表達。'
    }
  }
]
