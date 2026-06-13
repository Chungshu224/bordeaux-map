/**
 * LO-L2-8 Chinon × Rillettes + Level 2 綜合評量
 * AOCs: 全 Level 2 AOC 複習 + 食物配對
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          歡迎來到 Level 2 的最後一課！這是一堂味覺旅程的終站——從安茹的 Tuffeau 石頭，走到都漢的 Cabernet Franc，再到支流河谷的 Pineau d'Aunis，我們一路領略了羅亞爾河中游的多彩面貌。現在，讓一道經典的都漢料理「Rillettes de Tours」為這段旅程畫上最美的句號，再用綜合評量確認你已真正掌握 Level 2 的精髓。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍖 理解 Chinon × Rillettes 的配對邏輯</h4>
            <p>掌握為何 Cabernet Franc 的酸度和單寧能與豬肉法式抹醬完美共舞</p>
          </div>
          <div class="point-item">
            <h4>📚 鞏固 Level 2 全部知識點</h4>
            <p>複習 Tuffeau 地質、三大 Cabernet Franc AOC、都漢粉紅和紅酒全景</p>
          </div>
          <div class="point-item">
            <h4>🎓 通過 Level 2 綜合評量</h4>
            <p>完成測驗，確認已達到進入 Level 3 的知識水準</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Rillettes de Tours — 都漢靈魂料理',
    content: `
      <div class="rillettes-section">
        <p><strong>Rillettes de Tours</strong> 是法國最著名的豬肉抹醬之一，與巴黎的 Rillettes du Mans 並列法國兩大傳統 rillettes，都漢版本以更精細的質地和更豐富的豬油感著稱。</p>
        <div class="recipe-culture">
          <div class="culture-item">
            <h4>🍖 什麼是 Rillettes？</h4>
            <p>將豬肩、豬腩或鴨肉在自身脂肪中以極低溫（70–80°C）慢煮數小時，然後用叉子將肉撕成細絲，與融化的油脂混合，冷卻後形成密實的抹醬質地。傳統塗抹在烤麵包上食用。</p>
          </div>
          <div class="culture-item">
            <h4>🏆 Tours vs Mans</h4>
            <ul>
              <li><strong>Rillettes de Tours IGP：</strong>顏色較深，質地更密實，油脂更明顯，豬肉風味更濃郁</li>
              <li><strong>Rillettes du Mans：</strong>顏色較淺，質地鬆散，更多豬油，更順滑</li>
            </ul>
            <p>兩者都是法式香檳或 Chinon 的最佳搭配，但 Rillettes de Tours 的重油脂感更需要高酸度的葡萄酒來平衡。</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Chinon × Rillettes：完美配對的科學',
    highlights: [
      { id: 1, icon: '⚖️', title: '酸度切割油脂', content: 'Cabernet Franc 的高酸度（通常 pH 3.4–3.6）能有效切割 Rillettes 的豐厚油脂，每一口喝完都像重置了味覺' },
      { id: 2, icon: '🍷', title: '低單寧不衝突', content: '羅亞爾 Cabernet Franc 的柔順單寧（比波爾多版本更低）不會與豬肉蛋白質產生澀口感，反而形成互補' },
      { id: 3, icon: '🌸', title: '花果香提升料理', content: 'Chinon 的紫羅蘭和紅色漿果香氣與 Rillettes 的鹹肉香互補，形成「甜鹹對比」的風味層次' }
    ],
    content: `
      <div class="pairing-science">
        <p>食物配對不是隨意的——背後有嚴格的科學與感官邏輯。Chinon × Rillettes 是羅亞爾配對中最經典的例子：</p>
        <div class="pairing-breakdown">
          <h4>配對化學分析</h4>
          <p><strong>挑戰：</strong>Rillettes 的主要特性是高脂肪（豬油）和高鹽度，加上蛋白質豐富的豬肉纖維——這三者都需要葡萄酒給予的特定反應。</p>
          <p><strong>解決：</strong></p>
          <ul>
            <li>油脂 → 需要酸度切割（Cabernet Franc 的清爽高酸 ✓）</li>
            <li>鹽度 → 微甜的果香（Chinon 的覆盆子果感）提升鹹味層次 ✓</li>
            <li>蛋白質 → 需要適量單寧（但不能過高，否則澀口）✓</li>
          </ul>
          <p>這就是為何過度強調橡木和單寧的新世界 Cabernet 不適合配 Rillettes，而羅亞爾的輕盈版本恰到好處。</p>
        </div>
        <div class="extend-pairings">
          <h4>🍽️ 延伸配對——Level 2 AOC × 都漢料理</h4>
          <ul>
            <li>🍷 <strong>Saumur-Champigny</strong> + Rilettes de Tours — 最經典組合</li>
            <li>🥩 <strong>Chinon Coteau（老年份）</strong> + Gigot d'agneau（烤羊腿）</li>
            <li>🐔 <strong>Bourgueil</strong> + Poulet rôti（奶油烤雞）+ 百里香</li>
            <li>🌹 <strong>Rosé-de-Loire</strong> + Rillons de Touraine（炸豬腩肉）</li>
            <li>🐖 <strong>Touraine-Noble-Joué</strong> + Charcuterie platter（法式冷肉拼盤）</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: 'Level 2 知識地圖複習',
    content: `
      <div class="level2-review">
        <div class="review-grid">
          <div class="review-item">
            <h4>🪨 L2-1：Tuffeau 地質</h4>
            <ul>
              <li>多孔隙白色石灰岩，排水佳，可開鑿地下洞窟酒窖</li>
              <li>安茹西部：片岩（schist，保熱，礦物感強）</li>
              <li>索米爾東部：凝灰岩（tuffeau，清爽輕盈）</li>
              <li>從西部海洋性到東部半大陸性的氣候過渡</li>
            </ul>
          </div>
          <div class="review-item">
            <h4>🍷 L2-2：安茹-索米爾紅酒</h4>
            <ul>
              <li>Anjou Rouge → Anjou-Villages → Anjou-Brissac（三層級）</li>
              <li>Saumur-Champigny：凝灰岩台地的頂級 Cabernet Franc，Clos Rougeard 傳奇</li>
              <li>品種：Cabernet Franc 主導，少量 Cabernet Sauvignon</li>
            </ul>
          </div>
          <div class="review-item">
            <h4>🌹 L2-3：安茹粉紅光譜</h4>
            <ul>
              <li>Rosé-de-Loire（干型，Cab. Franc ≥30%）</li>
              <li>Cabernet-d'Anjou（微甜，10–40 g/L）</li>
              <li>Rosé-d'Anjou（微甜，Grolleau 主導）</li>
              <li>Haut-Poitou（2011 升格，Sauvignon Blanc 白酒）</li>
            </ul>
          </div>
          <div class="review-item">
            <h4>🏰 L2-4：品麗珠三角</h4>
            <ul>
              <li>Chinon：三種土壤（礫石、凝灰岩坡、黏土台地）</li>
              <li>Bourgueil：凝灰岩和礫石混合，結構厚重</li>
              <li>Saint-Nicolas-de-Bourgueil：砂質礫石，最輕盈花香</li>
            </ul>
          </div>
          <div class="review-item">
            <h4>🎭 L2-5：都漢紅酒全景</h4>
            <ul>
              <li>Touraine Rouge：Gamay + Cabernet Franc + Côt</li>
              <li>Touraine-Amboise：安博瓦茲城堡旁</li>
              <li>Touraine-Noble-Joué：必須混 3 種 Pinot 的獨特 AOC（法國最特殊之一）</li>
            </ul>
          </div>
          <div class="review-item">
            <h4>🌶️ L2-6：支流紅酒</h4>
            <ul>
              <li>Pineau d'Aunis：白胡椒辛香，幾乎只在羅亞爾</li>
              <li>Coteaux-du-Loir 和 Coteaux-du-Vendômois：Pineau d'Aunis 核心地帶</li>
              <li>Orléans/Orléans-Cléry：最北 AOC，自然酒重鎮</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
]
