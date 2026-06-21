/**
 * CA-L1-7 加州主要葡萄品種
 * Cabernet Sauvignon、Chardonnay、Pinot Noir、Zinfandel、Merlot、Rhône 品種等
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州的品種多樣性是其葡萄酒最大的魅力。Cabernet Sauvignon 的帝王風範，Chardonnay 的百變面孔，Pinot Noir 的精緻優雅，Zinfandel 的美國靈魂，以及近年蓬勃發展的 Rhône 和義大利品種——全都在加州找到了各自的天堂。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 掌握 8 個主要品種的特性</h4>
            <p>理解每個品種在加州最佳產區、典型風格和代表酒莊</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 理解品種與氣候的對應關係</h4>
            <p>掌握「涼爽氣候 = Pinot/Chard，溫暖氣候 = Cab/Zin」的基本原則</p>
          </div>
          <div class="point-item">
            <h4>🔄 了解風格演變趨勢</h4>
            <p>從「重橡木、高酒精」到「優雅、均衡」的加州葡萄酒風格轉變</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: '品種 × 核心產區地圖',
    componentProps: {
      slide: {
        title: '品種 × 核心產區地圖',
        description: 'Cabernet（Napa）、Pinot Noir（Sonoma/Santa Barbara）、Zinfandel（Lodi/Sierra Foothills）、Chardonnay（Central Coast）',
        mapGroup: 'overview',
      }
    }
  },

  {
    title: 'Cabernet Sauvignon — 加州紅酒之王',
    content: `<div class="variety-detail cabernet">
      <h3>👑 Cabernet Sauvignon</h3>
      <div class="variety-header">
        <div class="variety-stats">
          <div class="vs-item"><strong>種植面積：</strong>加州種植最廣泛的紅葡萄品種</div>
          <div class="vs-item"><strong>最佳產區：</strong>Napa Valley（Oakville、Rutherford、Stags Leap）、Paso Robles、Alexander Valley</div>
          <div class="vs-item"><strong>氣候偏好：</strong>溫暖大陸性氣候，足夠熱量使單寧充分成熟</div>
        </div>
      </div>

      <div class="variety-profile">
        <h4>風味輪廓</h4>
        <div class="flavor-row">
          <div class="flavor-young"><strong>年輕時：</strong>黑醋栗、黑莓、雪松、橡木香草、可可</div>
          <div class="flavor-aged"><strong>陳年後：</strong>皮革、菸草、乾燥草本、焦油、鐵礦</div>
        </div>
        <h4>加州風格特點</h4>
        <ul>
          <li>🍒 果味豐富，比波爾多更有即飲性</li>
          <li>🪵 多使用新法國橡木桶（18-24 個月），帶來明顯香草和烤橡木</li>
          <li>💪 酒精通常達 13.5-15%</li>
          <li>🔄 現代趨勢：更輕盈、更少橡木，更注重平衡</li>
        </ul>
      </div>

      <div class="variety-styles">
        <div class="style-box napa-cab">
          <h5>Napa Cab（標竿風格）</h5>
          <p>豐厚飽滿，黑果濃縮，圓潤單寧，新橡木明顯。代表：Opus One、Harlan、Caymus</p>
        </div>
        <div class="style-box mountain-cab">
          <h5>山地 Cab（Howell Mountain、Spring Mountain）</h5>
          <p>緊實單寧，礦石感，需長期陳年。代表：Dunn Vineyards、Philip Togni</p>
        </div>
        <div class="style-box elegant-cab">
          <h5>優雅風格（新世代）</h5>
          <p>低酒精、少橡木、重香氣。代表：Corison、Darioush（Persian-style）</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Chardonnay — 加州白酒之后',
    content: `<div class="variety-detail chardonnay">
      <h3>👸 Chardonnay</h3>
      <div class="variety-stats">
        <div class="vs-item"><strong>種植面積：</strong>加州種植最廣泛的白葡萄品種</div>
        <div class="vs-item"><strong>最佳產區：</strong>Russian River Valley（Sonoma）、Carneros、Santa Barbara（Sta. Rita Hills）、Santa Cruz Mountains、Livermore Valley</div>
        <div class="vs-item"><strong>氣候偏好：</strong>涼爽到溫和，高酸度款需涼爽沿海氣候</div>
      </div>

      <div class="chard-styles">
        <h4>加州 Chardonnay 的兩大風格</h4>
        <div class="style-split">
          <div class="classic-style">
            <h5>🪵 傳統豐厚風格（1980-2000s 主流）</h5>
            <ul>
              <li>全新橡木桶發酵熟成</li>
              <li>100% 乳酸發酵（奶油感強）</li>
              <li>帶奶油、香草、烤蘋果、奶油爆米花</li>
              <li>酒精 14-15%，低酸度</li>
              <li>代表：Rombauer Vineyards、Sonoma-Cutrer</li>
            </ul>
          </div>
          <div class="modern-style">
            <h5>🌊 現代精緻風格（當代潮流）</h5>
            <ul>
              <li>少用或不用新橡木桶</li>
              <li>部分或不做乳酸發酵</li>
              <li>帶清爽柑橘、白桃、礦石感</li>
              <li>酒精 12.5-13.5%，高酸度</li>
              <li>代表：Kistler（Russian River）、Ramey（Burgundy 風格）、Peter Michael</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="chard-fact">
        <p>📊 加州 80% 的 Chardonnay 基因可追溯至 Livermore Valley 的 Wente 家族 1880 年代從勃根地引進的克隆株（「Wente Clone」），是全球種植最廣的 Chardonnay 克隆。</p>
      </div>
    </div>`
  },

  {
    title: 'Pinot Noir & Zinfandel',
    content: `<div class="pinot-zin">
      <div class="variety-section">
        <h3>🍓 Pinot Noir — 最難駕馭的貴族</h3>
        <div class="variety-stats">
          <div class="vs-item"><strong>最佳產區：</strong>Russian River Valley、Sonoma Coast、Santa Rita Hills、Anderson Valley、Carneros、Santa Lucia Highlands</div>
          <div class="vs-item"><strong>氣候偏好：</strong>涼爽，海霧頻繁，生長季長</div>
        </div>
        <div class="pinot-style">
          <h4>加州 Pinot Noir 風格</h4>
          <ul>
            <li>🍓 草莓、覆盆子、紅醋栗（涼爽年份）；黑櫻桃、李子（溫暖年份）</li>
            <li>🌺 玫瑰花瓣、薰衣草（優雅款）</li>
            <li>🍄 蘑菇、腐葉（陳年後）</li>
            <li>💎 細膩絲滑的單寧，天然高酸度</li>
            <li>🏔️ 山地款（Santa Cruz Mountains）：更緊實、礦石感，類似勃根地</li>
          </ul>
        </div>
        <p class="pinot-producers">頂級代表：Williams Selyem、J. Rochioli、Merry Edwards（Russian River）、Littorai、Hirsch Vineyard（Sonoma Coast）、Sanford（Sta. Rita Hills）</p>
      </div>

      <div class="variety-section zinfandel">
        <h3>⚡ Zinfandel — 加州的靈魂品種</h3>
        <div class="variety-stats">
          <div class="vs-item"><strong>最佳產區：</strong>Dry Creek Valley、Lodi（老藤）、Amador County（Sierra Foothills）、Paso Robles、Sonoma Valley</div>
          <div class="vs-item"><strong>特殊性：</strong>DNA 追溯至克羅地亞的 Crljenak Kaštelanski，是美國國家認定的「加州葡萄品種」</div>
        </div>
        <div class="zin-style">
          <h4>加州 Zinfandel 風格</h4>
          <ul>
            <li>🫐 黑莓、桑葚、黑李子（成熟款）；草莓、紅李子（輕盈款）</li>
            <li>🌶️ 胡椒、香料、肉桂、丁香</li>
            <li>🍫 黑巧克力、摩卡（橡木陳年）</li>
            <li>⚠️ 酒精偏高（14-17%），過熟易有果醬感</li>
            <li>🏆 老藤（50+ 年）自然低產，帶來最集中的風味</li>
          </ul>
        </div>
        <p class="zin-producers">代表：Ridge（Geyserville、Lytton Springs）、Turley Wine Cellars（多個老藤單一園）、Michael David（7 Deadly Zins）</p>
      </div>
    </div>`
  },

  {
    title: '其他重要品種',
    content: `<div class="other-varieties">
      <div class="variety-grid-full">

        <div class="ov-card">
          <h4>🌹 Merlot</h4>
          <p>曾是加州最流行的紅酒（1990s），在電影《Sideways》的戲謔後一度失寵，但優質 Merlot 如今重回舞台。Duckhorn Vineyards（Napa Valley）的 Merlot 一直是業界標竿。</p>
          <div class="ov-style">李子、黑莓、摩卡；柔和單寧，早熟易飲</div>
          <div class="ov-area">最佳：Napa Valley（Stags Leap District）、Alexander Valley</div>
        </div>

        <div class="ov-card">
          <h4>🔥 Syrah / Petite Sirah</h4>
          <p>加州 Syrah（南隆河風格：香料、橄欖）在 Paso Robles 和 Santa Barbara 達到顛峰。Petite Sirah（源自 Durif 克隆）是加州特有的濃縮單寧品種，曾大量用於混釀，現已成為精品。</p>
          <div class="ov-style">Syrah：黑橄欖、紫羅蘭、胡椒、煙燻；飽滿但有優雅感<br>Petite Sirah：超深色、單寧緊實、陳年潛力強</div>
          <div class="ov-area">Syrah 最佳：Paso Robles、Santa Barbara、Sonoma Coast</div>
        </div>

        <div class="ov-card">
          <h4>🌸 Sauvignon Blanc</h4>
          <p>Robert Mondavi 將加州 Sauvignon Blanc 以「Fumé Blanc」之名推廣，創造了帶橡木陳年、較豐厚風格的加州白酒。現代版本則有清爽草本和熱帶果香兩種風格。</p>
          <div class="ov-style">清爽款：百香果、萊姆、草本；豐厚款（Fumé Blanc）：奶油、芒果、橡木</div>
          <div class="ov-area">最佳：Napa Valley、Lake County、Livermore Valley</div>
        </div>

        <div class="ov-card">
          <h4>🌿 Rhône 白酒品種</h4>
          <p>以 Tablas Creek 為先驅，Paso Robles 和 Santa Barbara 現在生產世界品質的 Viognier（花香甜美）、Roussanne（蠟感草本）、Grenache Blanc（豐滑圓潤）。</p>
          <div class="ov-style">Viognier：桃子、橙花、薑；Roussanne：蜂蜜、茶葉、蠟感</div>
        </div>

        <div class="ov-card">
          <h4>🇮🇹 義大利品種</h4>
          <p>Sangiovese（Amador County、Napa）、Barbera（Sierra Foothills）、Nebbiolo（少量高端生產）——義大利移民遺產，在加州找到新的表達方式。</p>
          <div class="ov-style">更豐厚圓潤，果味更強，酸度較義大利本家低</div>
        </div>

        <div class="ov-card">
          <h4>🌟 Cabernet Franc</h4>
          <p>不再只是混釀素材，Napa Valley 和 Santa Barbara 現在生產單一品種 Cabernet Franc，以青椒、紅色花果和輕盈感吸引現代消費者。</p>
          <div class="ov-style">紅色花果、青椒、草本香料；比 Cab Sauv 更輕盈</div>
        </div>

      </div>
    </div>`
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '「Wente Clone」是指什麼？',
            options: ['A. 加州最著名的 Cabernet Sauvignon 克隆株', 'B. 加州 80% Chardonnay 的基因來源，由 Wente 家族 1880 年代從勃根地引進', 'C. 加州最老的 Zinfandel 老藤克隆', 'D. Robert Mondavi 研發的 Pinot Noir 克隆'],
            correct: 1,
            explanation: '「Wente Clone」指 C.H. Wente 1880 年代從勃根地引進的 Chardonnay 克隆株，成為整個加州 Chardonnay 種植的主要基因來源，加州約 80% 的 Chardonnay 可追溯至此，是全球種植最廣的 Chardonnay 克隆之一。'
          },
          {
            type: 'single',
            question: 'Zinfandel 的 DNA 最終追溯至哪個原生品種和哪個國家？',
            options: ['A. 法國 Grenache', 'B. 義大利 Primitivo', 'C. 克羅地亞的 Crljenak Kaštelanski', 'D. 西班牙 Tempranillo'],
            correct: 2,
            explanation: 'DNA 研究證實，Zinfandel 與義大利 Primitivo 是同一品種，兩者都與克羅地亞的 Crljenak Kaštelanski（也稱 Tribidrag）完全相同，最終基因根源在克羅地亞的 Dalmatia 海岸。'
          },
          {
            type: 'single',
            question: '加州「豐厚 Chardonnay」（奶油爆米花感）的製作方式是？',
            options: ['A. 完全在不鏽鋼桶發酵，不做乳酸發酵', 'B. 使用100%新法國橡木桶發酵，完全乳酸發酵', 'C. 全部在石灰岩洞穴低溫陳年', 'D. 加入甜蘋果汁調配'],
            correct: 1,
            explanation: '傳統豐厚型加州 Chardonnay 使用 100% 新橡木桶發酵（帶來香草、烤橡木香）和完全乳酸發酵（malic acid 轉為 lactic acid，帶來奶油、乳製品口感），是 1980-2000 年代的主流風格。'
          },
          {
            type: 'single',
            question: 'Robert Mondavi 為了市場推廣，將 Sauvignon Blanc 改名為什麼品牌名稱？',
            options: ['A. California Blanc', 'B. Fumé Blanc', 'C. Golden Gate White', 'D. Pacific Sauvignon'],
            correct: 1,
            explanation: 'Robert Mondavi 在 1960 年代將其帶橡木陳年、更豐厚的 Sauvignon Blanc 命名為「Fumé Blanc」（借用盧瓦爾河 Pouilly-Fumé 的名稱），成功改變了消費者對 Sauvignon Blanc 的認知。'
          },
          {
            type: 'single',
            question: '加州 Pinot Noir 和 Zinfandel 各自對應的「最佳氣候類型」是？',
            options: ['A. 兩者都需要溫暖乾燥氣候', 'B. Pinot Noir 需要涼爽海洋性氣候；Zinfandel 偏好溫暖大陸性氣候（但不太熱）', 'C. Zinfandel 需要高海拔涼爽；Pinot Noir 偏好谷底溫暖', 'D. 兩者氣候需求相同'],
            correct: 1,
            explanation: 'Pinot Noir 是非常「涼爽氣候」的品種，需要海霧和長生長季（Russian River Valley、Sonoma Coast、Sta. Rita Hills）；Zinfandel 偏好溫暖大陸性氣候（Dry Creek Valley、Lodi、Amador County），但過熱容易造成過熟、酒精過高。'
          }
        ]
      }
    }
  }
]
