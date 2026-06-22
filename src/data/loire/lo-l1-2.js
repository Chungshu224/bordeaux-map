/**
 * LO-L1-2 地理環境與氣候
 * 羅亞爾河谷的地理多樣性、土壤類型與四大產區群概覽
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          理解羅亞爾河谷的地理，就是理解它為何能孕育出如此豐富的葡萄酒風格。從大西洋海岸到中央高地，地質從花崗岩到石灰岩，氣候從海洋型到半大陸型，這800公里的跨度創造了葡萄酒世界中最豐富的風土調色板。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 掌握羅亞爾河的地理走向</h4>
            <p>了解法國最長河流如何塑造整個產區的地形與微氣候</p>
          </div>
          <div class="point-item">
            <h4>🪨 認識主要土壤類型</h4>
            <p>從凝灰石（tuffeau）到片岩（schistes），土壤多樣性是羅亞爾的核心特色</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 理解氣候梯度</h4>
            <p>海洋型氣候向半大陸型氣候的轉變，是理解各產區風格的關鍵</p>
          </div>
          <div class="point-item">
            <h4>🍇 了解品種與風土的對應</h4>
            <p>不同的土壤和氣候決定了各地最適合種植的葡萄品種</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '羅亞爾河：法國最長的河流',
    highlights: [
      { id: 1, icon: '🌊', title: '1,013 公里長的法國母河', content: '羅亞爾河從中央高地（Massif Central）奔流至大西洋，是法國最長的河流' },
      { id: 2, icon: '🏔️', title: '眾多支流系統', content: 'Vienne、Cher、Indre、Layon、Thouet 等支流創造豐富的微地形' }
    ],
    content: `<div class="loire-river">
      <p class="lead-text">羅亞爾河不只是一條河，它是整個葡萄酒產區的生命線。河流的走向、河谷的形狀，以及周圍的支流網絡，共同塑造了這片廣闊而多樣的葡萄酒地景。</p>
      <div class="river-facts">
        <div class="fact-block">
          <h4>📐 基本數據</h4>
          <ul>
            <li><strong>全長：</strong>1,013 公里</li>
            <li><strong>流域面積：</strong>117,500 km²（法國最大流域）</li>
            <li><strong>葡萄園段：</strong>從 Ancenis（南特附近）到 Sancerre，約 800 公里</li>
            <li><strong>方向：</strong>由東南向西北流，最終注入大西洋</li>
          </ul>
        </div>
        <div class="fact-block">
          <h4>🌿 河流的葡萄酒貢獻</h4>
          <ul>
            <li><strong>溫度調節：</strong>寬闊的水面緩和夏季高溫和冬季嚴寒</li>
            <li><strong>晨霧效應：</strong>秋季晨霧促進貴腐菌（Botrytis）形成——甜酒的秘密武器</li>
            <li><strong>南向坡地：</strong>支流河谷形成理想的南向葡萄園坡地</li>
            <li><strong>土壤沉積：</strong>歷史上的洪積作用創造了多種土壤類型</li>
          </ul>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '羅亞爾河的水體對葡萄酒生產最重要的貢獻是什麼？',
      options: ['提供灌溉用水', '調節氣溫並促進秋季晨霧', '運輸葡萄酒', '降低土壤鹽分'],
      correct: 1,
      explanation: '羅亞爾河寬闊的水面能調節日夜和季節溫差，而秋季河面形成的晨霧更是促進貴腐菌（Botrytis cinerea）形成的關鍵，這是 Anjou 甜酒得以釀製的自然條件。'
    }
  },

  {
    title: '土壤萬花筒',
    highlights: [
      { id: 1, icon: '🪨', title: '凝灰石（Tuffeau）', content: '白色石灰岩質的凝灰石是 Anjou-Saumur 和 Touraine 的特色，保水又排水，風味優雅' },
      { id: 2, icon: '⛏️', title: '片岩（Schistes）', content: 'Anjou 南部的片岩土壤賦予葡萄酒礦石質感和獨特的「燧石」香氣' }
    ],
    content: `<div class="loire-soils">
      <p class="lead-text">羅亞爾河谷最令地質學家和葡萄酒愛好者著迷的，是其驚人多樣的土壤類型。從西到東，幾乎涵蓋法國所有主要葡萄酒土壤種類。</p>
      <div class="soil-types">
        <div class="soil-item">
          <h4>🏰 凝灰石（Tuffeau / Tuffe）</h4>
          <p><strong>分布：</strong>Saumur、Vouvray、Chinon 周邊</p>
          <p><strong>特性：</strong>多孔的白色石灰岩，保水性極佳，地下窖洞密布，葡萄可深根至地下水源</p>
          <p><strong>風格：</strong>優雅、礦石、高酸度，陳年潛力強</p>
        </div>
        <div class="soil-item">
          <h4>⛏️ 片岩（Schistes）</h4>
          <p><strong>分布：</strong>Anjou 南部（Quarts de Chaume、Coteaux du Layon）、Muscadet 部分區域</p>
          <p><strong>特性：</strong>暗色片岩吸熱快，可提高局部溫度，礦物質含量豐富</p>
          <p><strong>風格：</strong>礦物感強烈，帶有燧石或鐵礦香氣</p>
        </div>
        <div class="soil-item">
          <h4>🔥 花崗岩（Granit）</h4>
          <p><strong>分布：</strong>Muscadet 部分地塊、Coteaux d'Ancenis</p>
          <p><strong>特性：</strong>排水性佳，貧瘠，迫使葡萄根深入地層汲取礦物質</p>
          <p><strong>風格：</strong>清爽、高酸、礦石感純粹</p>
        </div>
        <div class="soil-item">
          <h4>🏖️ 礫石與沙地（Graviers / Sables）</h4>
          <p><strong>分布：</strong>Touraine 河岸平原、Bourgueil 部分</p>
          <p><strong>特性：</strong>排水極好，吸熱快，升溫迅速</p>
          <p><strong>風格：</strong>果香奔放，單寧細緻，適合早飲</p>
        </div>
        <div class="soil-item">
          <h4>🧱 黏土-石灰岩（Argile-Calcaire）</h4>
          <p><strong>分布：</strong>Sancerre、Menetou-Salon、部分 Chinon 高地</p>
          <p><strong>特性：</strong>保水性好，礦物質豐富，「基默里奇」泥灰岩在 Sancerre 最著名</p>
          <p><strong>風格：</strong>結構感強，複雜，長年陳放後展現礦石深度</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '凝灰石（Tuffeau）土壤主要分布在羅亞爾河谷的哪個區域？',
      options: ['Pays Nantais（南特地區）', 'Anjou-Saumur 和 Touraine', 'Centre-Loire（桑塞爾周邊）', '羅亞爾河河口'],
      correct: 1,
      explanation: '凝灰石（Tuffeau）是 Anjou-Saumur 和 Touraine 地區的標誌性土壤，由白色多孔的石灰質凝灰岩構成，賦予 Vouvray、Chinon 等酒款獨特的礦石優雅感。地下的凝灰石窖洞也是當地傳統釀酒文化的一部分。'
    }
  },

  {
    title: '四大產區群的地理分布',
    highlights: [
      { id: 1, icon: '🌊➡️⛰️', title: '海洋到大陸的氣候過渡', content: '西部 Pays Nantais 受大西洋影響強烈，東部 Centre-Loire 已是半大陸型氣候' },
      { id: 2, icon: '🗺️', title: '55+ 個法定 AOP', content: '每個子產區都有嚴格的法規規範品種、產量和釀造方式' }
    ],
    content: `<div class="loire-regions-geo">
      <p class="lead-text">了解四大產區群的地理位置是建立羅亞爾河谷葡萄酒知識框架的第一步。每個區域都有自己的代表品種、土壤類型和氣候特徵。</p>
      <div class="region-blocks">
        <div class="region-block">
          <h4>🌊 Pays Nantais（南特地區）</h4>
          <p><strong>位置：</strong>最西端，靠近大西洋的南特市周邊</p>
          <p><strong>土壤：</strong>花崗岩、片岩、輝長岩</p>
          <p><strong>氣候：</strong>強烈的海洋型氣候——溫和、多雨、少極端</p>
          <p><strong>主角：</strong>Melon de Bourgogne → Muscadet</p>
          <p><strong>特色：</strong>清新礦石、帶有鹹鮮海洋氣息的干白</p>
        </div>
        <div class="region-block">
          <h4>🏰 Anjou-Saumur（安茹-索米爾）</h4>
          <p><strong>位置：</strong>Pays Nantais 東側，Saumur 城堡一帶</p>
          <p><strong>土壤：</strong>凝灰石（tuffeau）+ 片岩</p>
          <p><strong>氣候：</strong>溫和海洋型，秋季晨霧助長貴腐菌</p>
          <p><strong>主角：</strong>Chenin Blanc + Cabernet Franc</p>
          <p><strong>特色：</strong>偉大甜酒（Quarts de Chaume、Bonnezeaux）+ Saumur-Champigny 紅酒</p>
        </div>
        <div class="region-block">
          <h4>🏯 Touraine（都蘭）</h4>
          <p><strong>位置：</strong>產區中心，Tours 城市周邊</p>
          <p><strong>土壤：</strong>凝灰石、礫石、黏土、沙地</p>
          <p><strong>氣候：</strong>溫和，介於海洋與大陸型之間</p>
          <p><strong>主角：</strong>Chenin Blanc + Cabernet Franc + Côt（Malbec）</p>
          <p><strong>特色：</strong>Vouvray 白酒（干至甜）+ Chinon、Bourgueil 紅酒</p>
        </div>
        <div class="region-block">
          <h4>⛰️ Centre-Loire（中央羅亞爾）</h4>
          <p><strong>位置：</strong>最東端，Bourges 南側，接近法國中心</p>
          <p><strong>土壤：</strong>基默里奇泥灰岩（Kimmeridgian）、燧石土、黏土</p>
          <p><strong>氣候：</strong>半大陸型，溫差較大，冬寒夏熱</p>
          <p><strong>主角：</strong>Sauvignon Blanc + Pinot Noir</p>
          <p><strong>特色：</strong>Sancerre、Pouilly-Fumé——全球 Sauvignon Blanc 的標竿</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '哪個子產區以 Chenin Blanc 釀製的偉大甜酒著稱，且擁有凝灰石土壤和促進貴腐菌的秋季晨霧？',
      options: ['Pays Nantais', 'Anjou-Saumur', 'Touraine', 'Centre-Loire'],
      correct: 1,
      explanation: 'Anjou-Saumur 地區是羅亞爾河谷最著名的甜酒產地。凝灰石和片岩土壤、加上羅亞爾河及其支流 Layon 河秋季形成的晨霧，創造了 Botrytis 菌（貴腐）發展的理想條件，孕育出 Quarts de Chaume、Bonnezeaux、Coteaux du Layon 等世界級甜白酒。'
    }
  },

  {
    title: '氣候：從海洋到大陸',
    highlights: [
      { id: 1, icon: '🌦️', title: '海洋型氣候的恩賜', content: '西部溫和多雨，葡萄能慢速成熟，保留天然酸度，特別適合 Chenin Blanc 和 Melon de Bourgogne' },
      { id: 2, icon: '☀️', title: '大陸型氣候的精準', content: '東部 Sancerre/Pouilly-Fumé 夏熱冬寒，Sauvignon Blanc 的芬芳在溫差中得到完美發展' }
    ],
    content: `<div class="loire-climate">
      <p class="lead-text">羅亞爾河谷是少數能在同一產區內體驗兩種截然不同氣候類型的葡萄酒產地。這種氣候多樣性正是羅亞爾能孕育出如此豐富酒款的根本原因。</p>
      <div class="climate-comparison">
        <div class="climate-col">
          <h4>🌊 西部（海洋型）</h4>
          <p><strong>代表地區：</strong>Muscadet、Anjou</p>
          <ul>
            <li>年均氣溫：12-13°C</li>
            <li>年降雨量：600-800 mm</li>
            <li>冬季溫和，少霜凍</li>
            <li>夏季涼爽，成熟期長</li>
            <li>秋季多霧（促進貴腐）</li>
          </ul>
        </div>
        <div class="climate-col">
          <h4>⛰️ 東部（半大陸型）</h4>
          <p><strong>代表地區：</strong>Sancerre、Pouilly-Fumé</p>
          <ul>
            <li>年均氣溫：11-12°C（但溫差大）</li>
            <li>年降雨量：500-650 mm</li>
            <li>冬季寒冷，春霜風險較高</li>
            <li>夏季較熱，秋季乾燥</li>
            <li>早熟品種（Sauvignon Blanc）更有優勢</li>
          </ul>
        </div>
      </div>
      <div class="climate-impact">
        <h4>🎯 氣候對酒款風格的影響</h4>
        <table class="climate-table">
          <tr>
            <th>氣候</th>
            <th>品種</th>
            <th>風格特徵</th>
          </tr>
          <tr>
            <td>海洋型</td>
            <td>Melon de Bourgogne</td>
            <td>高酸、礦石、鹹鮮感</td>
          </tr>
          <tr>
            <td>海洋型</td>
            <td>Chenin Blanc（Anjou）</td>
            <td>清新、花香、甜酒潛力強</td>
          </tr>
          <tr>
            <td>過渡型</td>
            <td>Chenin Blanc（Touraine）</td>
            <td>干型到甜型均優，複雜度高</td>
          </tr>
          <tr>
            <td>過渡型</td>
            <td>Cabernet Franc</td>
            <td>紅果清新，單寧細緻</td>
          </tr>
          <tr>
            <td>半大陸型</td>
            <td>Sauvignon Blanc</td>
            <td>芳香濃郁、礦石感強、熱帶水果香</td>
          </tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '為什麼 Sancerre 和 Pouilly-Fumé 的 Sauvignon Blanc 風格與更西邊的產區不同？',
      options: ['土壤完全相同，差異在於釀造技術', '東部的半大陸型氣候帶來更大的日夜溫差，有助於 Sauvignon Blanc 形成更集中的香氣', '東部的 Sauvignon Blanc 採用不同的種植密度', '東部的降雨量更多'],
      correct: 1,
      explanation: '中央羅亞爾（Centre-Loire）的半大陸型氣候帶來更大的溫差，加上基默里奇（Kimmeridgian）泥灰岩和燧石土，使這裡的 Sauvignon Blanc 香氣更集中，礦石感更強烈，能發展出典型的煙燻燧石（pierre à fusil）香氣，這是 Muscadet 或 Anjou 白酒所沒有的特色。'
    }
  },

]