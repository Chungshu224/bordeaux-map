/**
 * LO-L1-4 其他主要白葡萄品種
 * Melon de Bourgogne (Muscadet)、Sauvignon Blanc (Sancerre/Pouilly-Fumé) 與其他白品種
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          羅亞爾河谷的白葡萄品種不只有 Chenin Blanc。從大西洋邊的 Melon de Bourgogne 釀製清新的 Muscadet，到東部高地的 Sauvignon Blanc 在 Sancerre 和 Pouilly-Fumé 達到世界巔峰——每個品種都在自己的風土舞台上發出獨特的光芒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🦪 認識 Melon de Bourgogne 與 Muscadet</h4>
            <p>了解「sur lie」陳酒工藝如何讓簡單的品種脫胎換骨，成為海鮮餐桌的最佳良伴</p>
          </div>
          <div class="point-item">
            <h4>🌿 掌握 Sauvignon Blanc 的羅亞爾風格</h4>
            <p>理解 Sancerre 和 Pouilly-Fumé 如何將 Sauvignon Blanc 的芳香潛力推向世界頂端</p>
          </div>
          <div class="point-item">
            <h4>🍾 了解其他白葡萄品種</h4>
            <p>Folle Blanche（Gros Plant）、Chardonnay 等品種的角色與特色</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Melon de Bourgogne：Muscadet 的靈魂',
    highlights: [
      { id: 1, icon: '🌊', title: '大西洋的孩子', content: 'Melon de Bourgogne 原產自勃艮第，但在南特地區找到了真正的家，與大西洋海洋氣候完美契合' },
      { id: 2, icon: '🦪', title: '牡蠣的天生伴侶', content: 'Muscadet 與法國布列塔尼和羅亞爾地區的生蠔是天作之合，高酸度配上礦石鹹鮮感，令人難忘' }
    ],
    content: `<div class="melon-overview">
      <p class="lead-text">Melon de Bourgogne 是 Pays Nantais（南特地區）的當家品種，也是 Muscadet 這個世界知名白酒的唯一主角。這個品種在勃艮第幾乎消失後，在羅亞爾河口找到了它的命定風土。</p>
      <div class="variety-profile">
        <h4>🍇 品種特性</h4>
        <div class="profile-grid">
          <div class="profile-item">
            <h5>風格</h5>
            <p>天然低酸度（但清新活潑），果香清淡，礦石感明顯</p>
          </div>
          <div class="profile-item">
            <h5>香氣</h5>
            <p>青蘋果、梨、柑橘皮、礦石、海鹽（陳年款增添酵母麵包感）</p>
          </div>
          <div class="profile-item">
            <h5>酒體</h5>
            <p>輕盈至中等，sur lie 版本略為豐厚</p>
          </div>
          <div class="profile-item">
            <h5>特殊工藝</h5>
            <p>Sur lie（在酒泥上陳放）是提升 Muscadet 複雜度的關鍵技術</p>
          </div>
        </div>
      </div>
      <div class="muscadet-aop">
        <h4>🏅 Muscadet 的 AOP 分級</h4>
        <ul>
          <li><strong>Muscadet Sèvre-et-Maine（最重要）：</strong>最廣泛的 Muscadet 產區，品質最高，土壤以花崗岩和片岩為主；著名地塊包括「Crus Communaux」（如 Clisson、Gorges、Goulaine 等）</li>
          <li><strong>Muscadet Côtes de Grandlieu：</strong>鄰近大西洋的特殊地形，帶有更濃郁的海洋氣息</li>
          <li><strong>Muscadet Coteaux de la Loire：</strong>更內陸，礦石感更強</li>
          <li><strong>Muscadet（基礎）：</strong>最廣泛的地理範圍</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '下列哪個 Muscadet 產區擁有最高聲望，並設有「Crus Communaux」地塊分級？',
      options: ['Muscadet（基礎 AOP）', 'Muscadet Côtes de Grandlieu', 'Muscadet Sèvre-et-Maine', 'Muscadet Coteaux de la Loire'],
      correct: 2,
      explanation: 'Muscadet Sèvre-et-Maine 是品質最高、最廣為人知的 Muscadet AOP，約佔所有 Muscadet 產量的 85%。其中「Crus Communaux」是近年建立的地塊分級制度，包含 Clisson、Gorges、Goulaine 等 10 個特殊地塊，代表 Muscadet 最高品質層級。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Pays Nantais 地圖',
    componentProps: {
      slide: {
        title: 'Pays Nantais 地圖',
        description: 'Melon de Bourgogne 的家鄉——Muscadet Sèvre-et-Maine、Côtes de Grandlieu、Coteaux de la Loire 三大子產區位置',
        mapGroup: 'PayNantes',
        highlightFiles: ['Muscadet.geojson', 'Muscadet-Sèvre-et-Maine.geojson', 'Muscadet-Côtes-de-Grandlieu.geojson', 'Muscadet-Coteaux-de-la-Loire.geojson'],
      }
    }
  },

  {
    title: 'Sur Lie：讓簡單變複雜的藝術',
    highlights: [
      { id: 1, icon: '🍺', title: 'Sur Lie（在酒泥上陳放）', content: '發酵後不過濾，讓葡萄酒與死酵母菌（酒渣）接觸數月，增添麵包感、奶油質感和複雜度' },
      { id: 2, icon: '⏳', title: '時間決定複雜度', content: '基礎 Muscadet 須在酒泥上陳放至少 4 個月；「Crus Communaux」則需要陳放 18-24 個月甚至更久' }
    ],
    content: `<div class="sur-lie">
      <p class="lead-text">Sur lie 工藝是 Muscadet 的靈魂技術。沒有它，Muscadet 只是平凡的清淡白酒；有了它，Muscadet 展現出令人驚喜的質感和複雜度，可以與比它貴十倍的白酒一較高下。</p>
      <div class="sur-lie-process">
        <h4>🔬 Sur Lie 的運作原理</h4>
        <div class="process-steps">
          <div class="step">
            <h5>第 1 步：自然發酵</h5>
            <p>葡萄在大型不鏽鋼或舊木桶中完成酒精發酵，形成葡萄酒和死酵母菌（酒渣/lies）</p>
          </div>
          <div class="step">
            <h5>第 2 步：不過濾，不換桶</h5>
            <p>不像一般釀法會在發酵後立即換桶過濾，sur lie 讓葡萄酒繼續與酒渣接觸</p>
          </div>
          <div class="step">
            <h5>第 3 步：酵母自解（Autolysis）</h5>
            <p>死酵母菌緩慢自我分解，釋放出胺基酸和多糖，賦予葡萄酒特殊的麵包感、奶油質感</p>
          </div>
          <div class="step">
            <h5>第 4 步：帶 CO₂ 裝瓶</h5>
            <p>Sur lie 裝瓶時保留少量 CO₂，賦予酒款清新的輕微氣泡感（perlant）</p>
          </div>
        </div>
      </div>
      <div class="sur-lie-result">
        <h4>🍾 Sur Lie 帶來的風味變化</h4>
        <ul>
          <li><strong>質感：</strong>從清淡到略帶圓潤的奶油感</li>
          <li><strong>香氣：</strong>增加烤麵包、酵母、餅乾香</li>
          <li><strong>氣泡：</strong>細緻的輕微氣泡感（perlant）</li>
          <li><strong>新鮮感：</strong>天然的 CO₂ 保護讓酒款保持活潑清新</li>
          <li><strong>陳年：</strong>長時間 sur lie（如 Crus Communaux）可陳放 10-15 年</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: 'Sur lie 工藝主要為 Muscadet 帶來哪些風味上的提升？',
      options: ['讓酒款變甜，增加殘糖', '增加烤麵包/酵母香氣、質感更圓潤，並帶有輕微 CO₂ 氣泡感', '讓酒款顏色更深', '增加橡木的香草和烘烤感'],
      correct: 1,
      explanation: 'Sur lie（在酒渣上陳放）讓死酵母菌自解，釋放出多糖和胺基酸，賦予 Muscadet 特有的烤麵包、酵母、奶油質感，同時保留輕微的 CO₂ 帶來清新的氣泡感。這完全不同於橡木桶帶來的香草焦糖感，也不會讓酒款變甜。'
    }
  },

  {
    title: 'Sauvignon Blanc：Sancerre 與 Pouilly-Fumé',
    highlights: [
      { id: 1, icon: '🌿', title: 'Sancerre：Sauvignon Blanc 的最高殿堂', content: '基默里奇（Kimmeridgian）泥灰岩土壤賦予 Sancerre 獨特的礦石煙燻感，是全球最受推崇的 Sauvignon Blanc' },
      { id: 2, icon: '🔥', title: 'Pouilly-Fumé：煙燻燧石的名聲', content: '「Fumé」之名來自燧石土壤帶來的火藥煙燻香氣，Robert Mondavi 以此為靈感命名了著名的 Fumé Blanc' }
    ],
    content: `<div class="sauvignon-loire">
      <p class="lead-text">羅亞爾河谷東部的 Sancerre 和 Pouilly-Fumé 是 Sauvignon Blanc 在全球最負盛名的產區，也是新世界釀酒師爭相學習的標竿。與紐西蘭的熱帶果香風格截然不同，羅亞爾的 Sauvignon Blanc 以礦石感、複雜度和陳年潛力見長。</p>
      <div class="centre-loire-comparison">
        <div class="aop-detail">
          <h4>⭐ Sancerre（桑塞爾）</h4>
          <p><strong>位置：</strong>羅亞爾河右岸，Cher 省</p>
          <p><strong>面積：</strong>約 2,800 公頃</p>
          <p><strong>土壤：</strong>
            <ul>
              <li>「Terres blanches」（白色土地）：基默里奇泥灰岩——最精緻複雜的風格</li>
              <li>「Caillotes」：石灰岩碎石——清新活潑的果香風格</li>
              <li>「Silex」（燧石）：細緻礦石感，煙燻火藥香氣</li>
            </ul>
          </p>
          <p><strong>風格：</strong>高酸、礦石、草本（白色花香、醋栗葉）；陳年後展現礦石煙燻的深度</p>
          <p><strong>也生產：</strong>少量 Pinot Noir 紅酒和粉紅酒（同樣備受推崇）</p>
          <p><strong>著名生產者：</strong>Henri Bourgeois、Domaine Vacheron、Alphonse Mellot</p>
        </div>
        <div class="aop-detail">
          <h4>🔥 Pouilly-Fumé（普利福美）</h4>
          <p><strong>位置：</strong>羅亞爾河左岸，Nièvre 省</p>
          <p><strong>面積：</strong>約 1,300 公頃</p>
          <p><strong>土壤：</strong>燧石（silex）、基默里奇泥灰岩、石灰岩</p>
          <p><strong>「Fumé」的由來：</strong>燧石土壤賦予特有的「煙燻燧石」（pierre à fusil）香氣，當葡萄在晨間被霧氣覆蓋時宛如冒煙</p>
          <p><strong>風格：</strong>比 Sancerre 略帶更多煙燻礦石感，結構感更強；熱年帶有更多熱帶水果香氣</p>
          <p><strong>著名生產者：</strong>Didier Dagueneau（自然派傳奇）、De Ladoucette、Patrick Coulbois</p>
        </div>
      </div>
      <div class="sancerre-vs-pouilly">
        <h4>比較：Sancerre vs Pouilly-Fumé</h4>
        <table class="comparison-table">
          <tr><th>特點</th><th>Sancerre</th><th>Pouilly-Fumé</th></tr>
          <tr><td>位置</td><td>羅亞爾河右岸</td><td>羅亞爾河左岸</td></tr>
          <tr><td>面積</td><td>2,800 公頃（較大）</td><td>1,300 公頃（較小）</td></tr>
          <tr><td>風格</td><td>清新花香、礦石</td><td>煙燻燧石感更強</td></tr>
          <tr><td>特色品種</td><td>也產 Pinot Noir 紅白</td><td>只產白酒</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: 'Pouilly-Fumé 的「Fumé」名稱的由來是什麼？',
      options: ['因為葡萄園附近有工廠排放煙霧', '燧石土壤賦予葡萄酒特有的「煙燻燧石」香氣', '釀造過程中使用煙燻橡木桶', '生產者的姓氏中含有「Fumé」'],
      correct: 1,
      explanation: '「Fumé」在法文中意為「煙燻」。Pouilly-Fumé 的這個特別名稱來自其燧石（silex）土壤所賦予葡萄酒的獨特「煙燻燧石」（pierre à fusil，意為打火石）香氣，彷彿擊打燧石時散發的火藥煙燻氣息。加州傳奇釀酒師 Robert Mondavi 甚至以此為靈感，將他的 Sauvignon Blanc 命名為「Fumé Blanc」。'
    }
  },

  {
    component: 'LoireRegionMapSlide',
    title: 'Centre-Loire 地圖',
    componentProps: {
      slide: {
        title: 'Centre-Loire 地圖',
        description: 'Sancerre（右岸）與 Pouilly-Fumé（左岸）隔 Loire 河對望——Sauvignon Blanc 的世界頂端，燧石土壤的煙燻礦石故鄉',
        mapGroup: 'Centre',
        highlightFiles: ['Sancerre.geojson', 'Pouilly-Fumé-ou-Blanc-Fumé-de-Pouilly.geojson', 'Pouilly-sur-Loire.geojson'],
      }
    }
  },

  {
    title: '其他白葡萄品種速查',
    highlights: [
      { id: 1, icon: '🌱', title: 'Folle Blanche（Gros Plant）', content: '南特地區的傳統白葡萄，酸度極高，釀製清爽的 Gros Plant du Pays Nantais，是Muscadet 之外的海鮮良伴' },
      { id: 2, icon: '🫧', title: 'Chardonnay', content: '雖非羅亞爾代表品種，但在 Crémant de Loire 氣泡酒中扮演重要角色，帶來輕盈的花香和清新酸度' }
    ],
    content: `<div class="other-white-grapes">
      <p class="lead-text">除了 Chenin Blanc、Melon de Bourgogne 和 Sauvignon Blanc 這三大主角之外，羅亞爾河谷還種植了幾個具有特色的白葡萄品種，各自在特定的產區或酒款類型中發揮重要作用。</p>
      <div class="varieties-list">
        <div class="variety-card">
          <h4>🌱 Folle Blanche（= Gros Plant）</h4>
          <p><strong>又名：</strong>Gros Plant（在羅亞爾）</p>
          <p><strong>主要產區：</strong>Gros Plant du Pays Nantais AOP</p>
          <p><strong>特性：</strong>高到令人乍舌的酸度，酒精度低；清淡、乾脆、礦石感強烈</p>
          <p><strong>用途：</strong>干型白酒，是生蠔和海鮮的極佳搭配；歷史上也是干邑白蘭地的原料品種</p>
          <p><strong>風格：</strong>幾乎沒有果香，純粹的礦石酸度——愛者極愛，不愛者難以接受</p>
        </div>
        <div class="variety-card">
          <h4>🫧 Chardonnay</h4>
          <p><strong>主要用途：</strong>Crémant de Loire 氣泡酒（與 Chenin Blanc 混釀）</p>
          <p><strong>特性：</strong>在羅亞爾較為清淡爽脆，與勃艮第的豐腴版本不同</p>
          <p><strong>產區：</strong>少量種植於 Touraine 和 Anjou，部分 AOP 允許加入 Chardonnay</p>
        </div>
        <div class="variety-card">
          <h4>🌸 Pinot Gris（= Malvoisie）</h4>
          <p><strong>主要產區：</strong>Anjou Coteaux de la Loire、Coteaux d'Ancenis（稱 Malvoisie）</p>
          <p><strong>特性：</strong>在羅亞爾常做成甜型或半甜型；花香、桃子、香料感</p>
          <p><strong>特色：</strong>在羅亞爾常稱為「Malvoisie」，是當地傳統品種，與阿爾薩斯的 Pinot Gris 風格截然不同</p>
        </div>
        <div class="variety-card">
          <h4>🌿 Sauvignon Gris</h4>
          <p><strong>特性：</strong>Sauvignon Blanc 的變種，皮色較深（灰粉色）</p>
          <p><strong>風格：</strong>比 Sauvignon Blanc 更圓潤，酸度稍低，果香更成熟</p>
          <p><strong>用途：</strong>與 Sauvignon Blanc 混釀，賦予更多質感</p>
        </div>
      </div>
      <div class="summary-table">
        <h4>📊 白葡萄品種快速對照表</h4>
        <table class="varieties-table">
          <tr><th>品種</th><th>代表產區</th><th>核心風格</th></tr>
          <tr><td>Chenin Blanc</td><td>Anjou、Vouvray、Saumur</td><td>多變：干型到甜型，高酸陳年潛力強</td></tr>
          <tr><td>Melon de Bourgogne</td><td>Muscadet（Pays Nantais）</td><td>清新礦石，sur lie 增加複雜度</td></tr>
          <tr><td>Sauvignon Blanc</td><td>Sancerre、Pouilly-Fumé、Touraine</td><td>芳香草本，礦石感，煙燻燧石</td></tr>
          <tr><td>Folle Blanche</td><td>Gros Plant du Pays Nantais</td><td>極高酸，海鮮良伴</td></tr>
          <tr><td>Chardonnay</td><td>Crémant de Loire</td><td>清淡花香，氣泡酒支柱</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '哪個白葡萄品種的別名是「Gros Plant」，以其極高酸度和礦石感著稱，是南特地區生蠔的傳統搭配酒款？',
      options: ['Chenin Blanc', 'Sauvignon Blanc', 'Folle Blanche', 'Chardonnay'],
      correct: 2,
      explanation: 'Folle Blanche（法文意為「瘋狂的白」）在南特地區通稱「Gros Plant」，是 Gros Plant du Pays Nantais AOP 的主要品種。它的酸度極高、果香清淡，口感乾脆，與當地的生蠔、貝類和新鮮海鮮是傳統的完美搭配。這個品種歷史上也是干邑和雅馬邑的主要蒸餾品種。'
    }
  }
]
