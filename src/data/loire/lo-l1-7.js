/**
 * LO-L1-7 酒款類型與風格
 * 氣泡酒、干白、甜白酒金字塔、紅酒與粉紅酒的全面介紹
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          羅亞爾河谷是法國唯一一個能在同一個產區內提供所有葡萄酒類型（氣泡、干白、甜白、紅、粉紅）的頂級酒款的地方。這堂課我們將系統性地梳理所有主要酒款類型，建立完整的羅亞爾風格地圖。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🫧 認識 Crémant de Loire 氣泡酒</h4>
            <p>理解傳統法氣泡酒工藝與羅亞爾氣泡酒的獨特風格</p>
          </div>
          <div class="point-item">
            <h4>⬜ 掌握干型白酒的主要 AOP</h4>
            <p>從 Muscadet 到 Sancerre，了解各個干白的風格定位</p>
          </div>
          <div class="point-item">
            <h4>🍯 建立甜型白酒的系統理解</h4>
            <p>從 Demi-sec 到 Liquoreux，羅亞爾甜酒的風格光譜</p>
          </div>
          <div class="point-item">
            <h4>🍷🌸 了解紅酒與粉紅酒的選擇</h4>
            <p>Cabernet Franc 主導的紅酒世界，以及多樣的粉紅酒風格</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '氣泡酒：Crémant de Loire 與傳統法精華',
    highlights: [
      { id: 1, icon: '🫧', title: 'Crémant de Loire：法國最優秀的氣泡酒之一', content: '凝灰石洞窟的天然恆溫是完成傳統法二次發酵的絕佳環境；以 Chenin Blanc 為主，配以 Cabernet Franc 和 Chardonnay' },
      { id: 2, icon: '🏰', title: 'Saumur 的地下奇觀', content: 'Saumur 城堡下方延伸著數十公里的凝灰石窖洞，保存著數百萬瓶正在二次發酵的氣泡酒' }
    ],
    content: `<div class="loire-sparkling">
      <p class="lead-text">羅亞爾河谷是法國最重要的傳統法氣泡酒（Méthode Traditionnelle）產地之一，也是 Champagne 之外，法國歷史最悠久的氣泡酒產區。</p>
      <div class="sparkling-aops">
        <div class="sparkling-card">
          <h4>🫧 Crémant de Loire</h4>
          <p><strong>品種：</strong>Chenin Blanc（最主要）+ Chardonnay + Cabernet Franc（粉紅）</p>
          <p><strong>工藝：</strong>傳統法（二次瓶中發酵），最少 12 個月酒泥陳放</p>
          <p><strong>風格：</strong>比 Champagne 更多果香，少一點酵母麵包感；Chenin Blanc 帶來清新蘋果、梨和花香</p>
          <p><strong>產量：</strong>超過 3,000 萬瓶/年，是法國第二大 Crémant 產區</p>
          <p><strong>著名生產者：</strong>Langlois-Château（Saumur）、Bouvet-Ladubay、Gratien & Meyer</p>
        </div>
        <div class="sparkling-card">
          <h4>🍾 Vouvray Pétillant / Mousseux</h4>
          <p><strong>品種：</strong>100% Chenin Blanc</p>
          <p><strong>風格：</strong>Pétillant（微泡）—— 氣泡細緻輕柔；Mousseux（完全起泡）—— 更多結構和複雜度</p>
          <p><strong>特色：</strong>視年份決定甜度，涼年份的 Vouvray Mousseux 以其高酸度為基礎，可展現非凡的複雜度</p>
        </div>
        <div class="sparkling-card">
          <h4>🌸 Saumur Rosé（粉紅氣泡）</h4>
          <p><strong>品種：</strong>Cabernet Franc 為主</p>
          <p><strong>風格：</strong>清新草莓果香，干型，清爽宜人</p>
        </div>
      </div>
      <div class="loire-vs-champagne">
        <h4>Crémant de Loire vs Champagne</h4>
        <table class="comparison-table">
          <tr><th>特點</th><th>Crémant de Loire</th><th>Champagne</th></tr>
          <tr><td>主要品種</td><td>Chenin Blanc</td><td>Chardonnay、Pinot Noir、Pinot Meunier</td></tr>
          <tr><td>酒泥陳放</td><td>最少 12 個月</td><td>最少 15 個月（NV），3年（Vintage）</td></tr>
          <tr><td>風格</td><td>果香清新，花香為主</td><td>麵包酵母感更強，更豐富複雜</td></tr>
          <tr><td>價格</td><td>相對平易近人</td><td>一般更高</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: 'Crémant de Loire 氣泡酒最主要的葡萄品種是什麼？',
      options: ['Chardonnay', 'Pinot Noir', 'Chenin Blanc', 'Sauvignon Blanc'],
      correct: 2,
      explanation: 'Crémant de Loire 以 Chenin Blanc 為主要品種，這也是它與其他法國 Crémant（如 Alsace、Bourgogne）最大的差異。Chenin Blanc 賦予了 Loire Crémant 清新的蘋果、梨和花香，加上固有的高酸度，使其在未醒酒的情況下仍清爽宜人，是法國性價比最高的傳統法氣泡酒之一。'
    }
  },

  {
    title: '干型白酒：從海洋到高地',
    highlights: [
      { id: 1, icon: '⬜', title: '風格跨度最大的干白產地', content: '從清淡礦石的 Muscadet 到複雜結構的 Savennières，到芳香草本的 Sancerre——每個主要干白都是截然不同的風格' },
      { id: 2, icon: '🧭', title: '品種與產區對應是關鍵', content: '干型白酒的品種決定一切：Melon de Bourgogne → Muscadet；Chenin Blanc → Savennières/Vouvray sec；Sauvignon Blanc → Sancerre/Pouilly-Fumé' }
    ],
    content: `<div class="loire-dry-whites">
      <p class="lead-text">羅亞爾河谷的干型白酒是法國最多樣化的干白群體，三個主要品種在各自最適合的風土中，呈現出完全不同的風格個性。</p>
      <div class="dry-white-spectrum">
        <h4>🌈 干白風格光譜（從清淡到豐滿）</h4>
        <div class="spectrum-scale">
          <div class="spectrum-item light">
            <h5>最輕盈礦石型</h5>
            <p><strong>Muscadet Sèvre-et-Maine sur lie</strong><br>清淡、鹹鮮、礦石、低酒精（約 12%）<br>最佳搭配：生蠔、海鮮</p>
            <p><strong>Gros Plant du Pays Nantais</strong><br>極高酸、近乎無果香、純礦石感</p>
          </div>
          <div class="spectrum-item medium-light">
            <h5>清新芳香型</h5>
            <p><strong>Touraine Sauvignon</strong><br>草本、醋栗葉、柑橘；日常易飲</p>
            <p><strong>Menetou-Salon Blanc</strong><br>Sancerre 的平易版；性價比極高</p>
            <p><strong>Quincy</strong><br>礫石土壤，清新活潑的 Sauvignon</p>
          </div>
          <div class="spectrum-item medium">
            <h5>礦石芳香型（頂級）</h5>
            <p><strong>Sancerre Blanc</strong><br>「Terres blanches」複雜精緻；「Silex」煙燻礦石；三種土壤三種個性</p>
            <p><strong>Pouilly-Fumé</strong><br>煙燻燧石感強烈，結構感更突出</p>
          </div>
          <div class="spectrum-item rich">
            <h5>豐滿複雜型</h5>
            <p><strong>Vouvray Sec</strong><br>蜂蜜、蘋果、金雀花；凝灰石礦石感；陳年潛力 10-20 年</p>
            <p><strong>Savennières</strong><br>最豐富複雜的干型 Chenin；初期嚴肅，需 5-10 年開放；片岩礦石</p>
            <p><strong>Coulée de Serrant（最高峰）</strong><br>7 公頃，自己的 AOC，頂級複雜度</p>
          </div>
        </div>
      </div>
      <div class="service-guide">
        <h4>🌡️ 干白服侍溫度指南</h4>
        <ul>
          <li><strong>Muscadet / Gros Plant：</strong>8-10°C（冰涼，突出礦石鹹感）</li>
          <li><strong>Sauvignon Blanc 系（Sancerre/Pouilly-Fumé）：</strong>10-12°C（微涼，平衡芳香與酸度）</li>
          <li><strong>Vouvray sec / Savennières：</strong>12-14°C（略高，讓複雜香氣展開）</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '以下羅亞爾干白酒款，哪個通常需要最多陳年時間才能展現最佳複雜度？',
      options: ['Muscadet Sèvre-et-Maine（基礎款）', 'Touraine Sauvignon', 'Savennières（Coulée de Serrant）', 'Gros Plant du Pays Nantais'],
      correct: 2,
      explanation: 'Savennières（尤其是 Coulée de Serrant 這樣的頂級地塊）是羅亞爾干白中陳年潛力最強的。由於片岩土壤和低產量，加上 Chenin Blanc 固有的高酸度，這些酒在年輕時常顯嚴肅甚至封閉，通常需要 5-10 年才真正開放，巔峰期可達 20-30 年，甚至更長。這是完全不同於 Muscadet 或 Sauvignon Blanc 早飲型風格的截然不同概念。'
    }
  },

  {
    title: '甜型白酒金字塔',
    highlights: [
      { id: 1, icon: '🏆', title: '四個甜度等級，每個都有代表 AOP', content: '從 Demi-sec（半干）到 Liquoreux（極甜），羅亞爾的甜型 Chenin Blanc 每個等級都有世界頂尖的代表作' },
      { id: 2, icon: '🍯', title: '貴腐是甜酒的關鍵', content: 'Anjou 和 Touraine 的甜酒依靠「貴腐菌」（Botrytis cinerea）的作用濃縮風味，與德國 TBA 和法國 Sauternes 並列甜酒三巨頭' }
    ],
    content: `<div class="loire-sweet-pyramid">
      <p class="lead-text">羅亞爾河谷的甜型 Chenin Blanc 是法國葡萄酒中最令人著迷的存在之一。從輕盈的半干型到濃郁的極甜貴腐酒，每個等級都有自己的適飲場合和最佳搭配。</p>
      <div class="sweetness-levels">
        <h4>🍾 甜度等級與代表 AOP</h4>
        <div class="sweetness-pyramid">
          <div class="sweetness-level">
            <h5>🟡 Demi-sec（半干型）：12-45 g/L 殘糖</h5>
            <div class="level-content">
              <p><strong>代表 AOP：</strong>Vouvray demi-sec、Montlouis demi-sec</p>
              <p><strong>風格：</strong>甜度適中，酸糖完美平衡；蜂蜜、梨、薑的溫柔甜感</p>
              <p><strong>搭配：</strong>鴨肉料理、亞洲甜酸風格、豬肋排</p>
            </div>
          </div>
          <div class="sweetness-level">
            <h5>🟠 Moelleux（甜型）：45-120 g/L 殘糖</h5>
            <div class="level-content">
              <p><strong>代表 AOP：</strong>Vouvray moelleux、Coteaux de l'Aubance、Coteaux du Layon</p>
              <p><strong>風格：</strong>明顯甜美，蜂蜜花香，陳年後增加蜂蜡、杏桃、薑餅</p>
              <p><strong>搭配：</strong>鵝肝（mi-cuit）、藍紋乾酪、水果甜點</p>
            </div>
          </div>
          <div class="sweetness-level premium">
            <h5>🔴 Liquoreux / Grand Cru（極甜）：120+ g/L 殘糖</h5>
            <div class="level-content">
              <p><strong>代表 AOP：</strong>
                <ul>
                  <li><strong>Quarts de Chaume Grand Cru：</strong>40 公頃，羅亞爾唯一 Grand Cru 甜酒；片岩 + 凝灰石；蜂蜜、玫瑰、番紅花、礦石；可陳 50 年</li>
                  <li><strong>Bonnezeaux：</strong>90 公頃，三個獨立山丘，片岩土壤；濃郁辛香型甜酒</li>
                  <li><strong>Coteaux du Layon Villages：</strong>最廣泛的頂級甜酒產區，六個特殊村莊</li>
                </ul>
              </p>
              <p><strong>搭配：</strong>鮮鵝肝（poêlé）、特殊甜品（焦糖烤布蕾、榅桲甜品）、或單獨細品</p>
            </div>
          </div>
        </div>
      </div>
      <div class="botrytis-reminder">
        <h4>🍄 為何不是每年都有甜酒？</h4>
        <p>頂級甜酒（Moelleux 以上）依賴貴腐菌（Botrytis cinerea）的形成，而這需要特定的秋季天氣條件：早晨的薄霧（讓貴腐菌在葡萄皮上形成）+ 下午的陽光（阻止灰腐病蔓延）。並非每個年份都有這樣的條件，因此「沒有甜酒的年份」是正常的——這也正是貴腐甜酒珍稀性的來源。</p>
      </div>
    </div>`,
    quiz: {
      question: 'Quarts de Chaume 在羅亞爾甜酒中的特殊地位是什麼？為何它是最頂級的羅亞爾甜酒 AOP？',
      options: ['它是面積最大的甜酒產區，所以最頂級', '它是羅亞爾唯一獲得 Grand Cru 獨立 AOP 地位的甜酒產區，且只有 40 公頃，嚴格的低產量和多樣土壤創造出無與倫比的複雜度', '它的甜度最高，所以最好', '它是最老的甜酒 AOP，所以最頂級'],
      correct: 1,
      explanation: 'Quarts de Chaume 在 2011 年獲得羅亞爾唯一的「Grand Cru」獨立 AOP 地位，是對這塊土地無與倫比的認可。僅 40 公頃的面積（比許多勃艮第 Grand Cru 更小），嚴格限制產量，加上特殊的片岩和凝灰石混合土壤，以及在 Layon 河谷形成的理想貴腐條件，讓 Quarts de Chaume 的甜酒能發展出蜂蜜、玫瑰、番紅花和礦石的極致複雜香氣，並在瓶中演化 50 年以上。'
    }
  },

  {
    title: '紅酒、粉紅酒與全球定位',
    highlights: [
      { id: 1, icon: '🍷', title: '清新輕盈是羅亞爾紅酒的核心哲學', content: '不追求濃郁厚重，以清新紅果、礦石感和細緻單寧見長；在氣候變遷的當代，羅亞爾的清新紅酒風格越來越受到全球關注' },
      { id: 2, icon: '🌍', title: '「自然酒之鄉」的全球影響力', content: '羅亞爾河谷是法國自然派釀酒（vin naturel）運動的重要中心，許多具影響力的自然酒先驅都在此扎根' }
    ],
    content: `<div class="loire-reds-roses">
      <div class="reds-section">
        <h4>🍷 紅酒主要 AOP 速查</h4>
        <table class="aop-table">
          <tr>
            <th>AOP</th>
            <th>品種</th>
            <th>風格關鍵詞</th>
            <th>適飲年份</th>
          </tr>
          <tr>
            <td>Chinon</td>
            <td>Cabernet Franc</td>
            <td>礫石款：清新果香；凝灰石款：礦石複雜</td>
            <td>1-3年（輕款）/ 10-20年（老藤）</td>
          </tr>
          <tr>
            <td>Bourgueil</td>
            <td>Cabernet Franc</td>
            <td>礦石感強，結構略強於 Chinon</td>
            <td>3-5年 / 15-20年（老藤）</td>
          </tr>
          <tr>
            <td>Saumur-Champigny</td>
            <td>Cabernet Franc</td>
            <td>最絲滑圓潤，覆盆子，凝灰石礦石</td>
            <td>2-8年</td>
          </tr>
          <tr>
            <td>St-Nicolas-de-Bourgueil</td>
            <td>Cabernet Franc</td>
            <td>最輕盈清新，砂礫土壤</td>
            <td>1-5年</td>
          </tr>
          <tr>
            <td>Sancerre Rouge</td>
            <td>Pinot Noir</td>
            <td>優雅精緻，近似輕盈勃艮第</td>
            <td>3-8年</td>
          </tr>
          <tr>
            <td>Anjou-Villages / Brissac</td>
            <td>Cabernet Franc + Cab. Sauv.</td>
            <td>更結構，更深色，適合陳年</td>
            <td>5-12年</td>
          </tr>
        </table>
      </div>
      <div class="roses-section">
        <h4>🌸 粉紅酒快速指南</h4>
        <ul>
          <li><strong>Rosé de Loire：</strong>干型；Cabernet Franc 為主；清新果香，平衡；最適合夏日餐飲</li>
          <li><strong>Cabernet d'Anjou：</strong>半甜型；Cabernet Franc；成熟草莓果香，柔和甜感；夏日輕食搭配</li>
          <li><strong>Rosé d'Anjou：</strong>半甜型；Grolleau 為主；大眾市場款，清新甜美；日常易飲</li>
          <li><strong>Sancerre Rosé：</strong>干型；Pinot Noir；清淡精緻，石榴紅色調，礦石清新感</li>
        </ul>
      </div>
      <div class="global-positioning">
        <h4>🌍 羅亞爾葡萄酒在當今全球市場的定位</h4>
        <ul>
          <li><strong>自然酒聖地：</strong>Muscadet、Anjou、Touraine 聚集了大量自然酒生產者；Rene Mosse、Mark Angeli 等是全球自然酒界的傳奇</li>
          <li><strong>氣候變遷的受益者：</strong>隨著全球暖化，羅亞爾的涼爽氣候越來越被視為保持酸度和清新感的天然優勢</li>
          <li><strong>性價比之王：</strong>與 Burgundy 或 Bordeaux 相比，羅亞爾的頂級酒款（Quarts de Chaume、Savennières、老藤 Chinon）仍然相對平易近人</li>
          <li><strong>餐廳侍酒師的心愛：</strong>羅亞爾葡萄酒以其多功能的餐酒搭配能力和相對合理的價格，成為全球高端餐廳酒單的常客</li>
        </ul>
      </div>
    </div>`,
    quiz: {
      question: '在氣候變遷的背景下，為什麼羅亞爾河谷的涼爽氣候是一種優勢？',
      options: ['因為涼爽氣候讓葡萄完全不成熟', '涼爽氣候有助於保持葡萄的天然酸度和清新感，使酒款在暖化的世界中更具競爭力', '涼爽氣候使生產成本更低', '涼爽氣候讓貴腐菌更容易形成'],
      correct: 1,
      explanation: '隨著全球氣候暖化，許多傳統葡萄酒產區面臨過度成熟、酸度下降、酒精度飆升的挑戰。而羅亞爾河谷因其相對涼爽的氣候，能夠保持葡萄的天然高酸度和清新的果香特色，這正是現代飲酒文化日益追求的「輕盈、優雅、清新」風格的天然保證。這使羅亞爾在未來的全球葡萄酒市場中具有重要的戰略優勢。'
    }
  }
]
