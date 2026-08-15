/**
 * CA-L1-7 加州主要葡萄品種全解
 * Cabernet Sauvignon、Chardonnay、Pinot Noir、Zinfandel、Merlot、Syrah/Petite Sirah、
 * Sauvignon Blanc、Rhône 白酒品種、義大利品種、Cabernet Franc、Grenache
 * 資料來源：discovercaliforniawines.com、Wine Enthusiast「Clones Matter」系列報導、
 * Foundation Plant Services（UC Davis）克隆資料、Wente Vineyards 官方部落格、
 * SevenFifty Daily / Grape Collective「Wente Clone」報導、Wine Spectator（Durif / Petite Sirah 溯源）、
 * Duckhorn Vineyards 官方歷史頁、Tablas Creek Vineyard 部落格（Rhône 克隆引進史）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州的品種多樣性是其葡萄酒最大的魅力。Cabernet Sauvignon 的帝王風範，Chardonnay 的百變面孔，Pinot Noir 的精緻優雅，Zinfandel 的美國靈魂，以及近年蓬勃發展的 Rhône 和義大利品種——全都在加州找到了各自的天堂。認識品種背後的克隆（clone）故事，更能理解同一品種為何能在不同產區呈現截然不同的風貌。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🍇 掌握 10+ 個主要品種的特性</h4>
            <p>理解每個品種在加州最佳產區、典型風格和代表酒莊</p>
          </div>
          <div class="point-item">
            <h4>🧬 認識關鍵克隆株的故事</h4>
            <p>了解 Wente Clone、Dijon 克隆、Heritage Zinfandel 選種等如何形塑加州葡萄酒的基因版圖</p>
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
    highlights: [
      { id: 1, icon: '👑', title: '加州種植最廣的紅葡萄', content: 'Napa Valley、Paso Robles、Alexander Valley 皆有卓越表現' },
      { id: 2, icon: '🧬', title: '四大主流克隆', content: 'Clone 4（Mendoza 克隆）、Clone 6（19 世紀波爾多引種）、Clone 169、Clone 337 各自帶來不同結構與果味' }
    ],
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

      <div class="clone-section">
        <h4>🧬 常見克隆株</h4>
        <div class="clone-grid">
          <div class="clone-card"><strong>Clone 4（Mendoza 克隆）</strong><p>經阿根廷 Mendoza 引入加州，單寧結構紮實，是不少高端酒款的骨幹克隆</p></div>
          <div class="clone-card"><strong>Clone 6</strong><p>源自 19 世紀從波爾多引入加州的老藤選種（俗稱 Jackson 克隆），從一座荒棄老葡萄園中搶救而來</p></div>
          <div class="clone-card"><strong>Clone 169</strong><p>果串小而緊密、果皮厚，釀出色深濃郁、單寧堅實的酒款</p></div>
          <div class="clone-card"><strong>Clone 337</strong><p>與法國 Dijon 克隆系統接近，產量穩定、果粒小而濃縮，果味奔放</p></div>
        </div>
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
    highlights: [
      { id: 1, icon: '👸', title: '加州種植最廣的白葡萄', content: 'Russian River Valley、Carneros、Sta. Rita Hills 各有精彩表現' },
      { id: 2, icon: '📊', title: 'Wente Clone 的統治力', content: '全美約 90,000 英畝 Chardonnay 種植面積中，Wente 血統仍是最大宗來源之一' }
    ],
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
              <li>大量或完全乳酸發酵（奶油感強）</li>
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

      <div class="clone-section">
        <h4>🧬 常見克隆株</h4>
        <div class="clone-grid">
          <div class="clone-card"><strong>Clone 4（Old Wente）</strong><p>1880 年代 C.H. Wente 從布根地引進 Livermore Valley 的種苗，經 UC Davis 葡萄種苗基金會（FPS）除毒篩選編號為 Clone 4，晚熟、果串大、產量穩定，是加州 Chardonnay 種植面積最大的克隆之一</p></div>
          <div class="clone-card"><strong>Clone 76 / 95</strong><p>常見於追求飽滿、濃郁風味的現代種植方案，果實風味濃縮度高</p></div>
          <div class="clone-card"><strong>Clone 96</strong><p>與 Dijon 系統克隆並列使用，風味明亮，常用於強調果香的現代風格</p></div>
        </div>
      </div>

      <div class="chard-fact">
        <p>📊 1936 年，Wente 家族以自家莊園葡萄裝瓶，並在酒標上直接印上「Chardonnay」品種名——是美國最早的品種標示先例之一。這批引種後來成為全加州種植最廣的 Chardonnay 基因來源，業界俗稱「Wente Clone」。</p>
      </div>
    </div>`
  },

  {
    title: 'Pinot Noir & Zinfandel',
    highlights: [
      { id: 1, icon: '🍓', title: 'Dijon 克隆進駐加州', content: 'Clone 667、777、115 是當代加州 Pinot Noir 種植的主力克隆組合' },
      { id: 2, icon: '🧬', title: 'Zinfandel 的克羅地亞身世', content: 'DNA 研究證實 Zinfandel 與 Crljenak Kaštelanski（Tribidrag）是同一品種，也與義大利 Primitivo 同源' }
    ],
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
            <li>🏔️ 山地款（Santa Cruz Mountains）：更緊實、礦石感，類似布根地</li>
          </ul>
        </div>
        <div class="clone-section">
          <h4>🧬 常見克隆株</h4>
          <div class="clone-grid">
            <div class="clone-card"><strong>Dijon 667</strong><p>來自法國布根地 Dijon 選種系統，帶來明顯的花香與細膩單寧質地</p></div>
            <div class="clone-card"><strong>Dijon 777</strong><p>兼具細膩與力量，果味結構感強，是加州近年最受歡迎的克隆之一</p></div>
            <div class="clone-card"><strong>Dijon 115</strong><p>顏色深、香氣奔放，常與 667、777 混合種植以增加複雜度</p></div>
            <div class="clone-card"><strong>Pommard（UCD 4）</strong><p>加州葡萄種苗學者 Harold Olmo 於 1951 年自布根地 Pommard 村引進的老牌克隆，果味濃郁厚實</p></div>
            <div class="clone-card"><strong>Swan 選種</strong><p>與 Martin Ray／Mount Eden 系譜相關的加州「傳承克隆」（heritage selection），以 Joseph Swan 之名流傳，風格獨樹一格</p></div>
          </div>
        </div>
        <p class="pinot-producers">頂級代表：Williams Selyem、J. Rochioli、Merry Edwards（Russian River）、Littorai、Hirsch Vineyard（Sonoma Coast）、Sanford（Sta. Rita Hills）</p>
      </div>

      <div class="variety-section zinfandel">
        <h3>⚡ Zinfandel — 加州的靈魂品種</h3>
        <div class="variety-stats">
          <div class="vs-item"><strong>最佳產區：</strong>Dry Creek Valley、Lodi（老藤）、Amador County（Sierra Foothills）、Paso Robles、Sonoma Valley</div>
          <div class="vs-item"><strong>特殊性：</strong>DNA 追溯至克羅地亞的 Crljenak Kaštelanski（又名 Tribidrag），與義大利 Primitivo 為同一品種，是美國最具代表性的「加州葡萄品種」</div>
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
        <div class="clone-section">
          <h4>🧬 傳承選種（Heritage Selections）</h4>
          <p>不同於 Cabernet 或 Chardonnay 有明確編號克隆系統，Zinfandel 更常以「歷史老園選種」流傳，例如 Ridge Vineyards 的 Heritage Vineyard Project 保存了 Lytton、Moore、Teldeschi、George Zeni 等命名選種；Sonoma 的 St. Peter's Church 老園選種（19 世紀愛爾蘭移民於 Alexander Valley 所植）則成為 Rockpile AVA 多數 Zinfandel 種植的源頭。</p>
        </div>
        <p class="zin-producers">代表：Ridge（Geyserville 老園可追溯至 1882 年、Lytton Springs 自 1972 年起持續耕作）、Turley Wine Cellars（保存全加州逾 50 座老藤園）、Michael David（7 Deadly Zins）</p>
      </div>
    </div>`
  },

  {
    title: 'Merlot & Syrah / Petite Sirah',
    highlights: [
      { id: 1, icon: '🌹', title: '「Mr. Merlot」Dan Duckhorn', content: '1976 年創立 Duckhorn Vineyards，是推廣加州 Merlot 最重要的推手之一' },
      { id: 2, icon: '🔥', title: 'Petite Sirah 其實不是「小」Syrah', content: '本名 Durif，1880 年代法國植物學家 François Durif 以 Syrah × Peloursin 育成，與 Syrah 是不同品種' }
    ],
    content: `<div class="merlot-syrah">
      <div class="variety-section">
        <h3>🌹 Merlot</h3>
        <p>曾是加州 1990 年代最流行的紅酒，在電影《Sideways》的戲謔後一度失寵，但優質 Merlot 如今重回舞台。Duckhorn Vineyards 由 Dan 與 Margaret Duckhorn 於 1976 年創立，1978 年首個年份僅生產 800 箱 Merlot 與 800 箱 Cabernet Sauvignon，Dan Duckhorn 因畢生致力推廣 Merlot 而被業界稱為「Mr. Merlot」，其 Merlot 至今仍是業界標竿之一。</p>
        <div class="ov-style">李子、黑莓、摩卡；柔和單寧，早熟易飲</div>
        <div class="ov-area">最佳：Napa Valley（Stags Leap District）、Alexander Valley</div>
      </div>

      <div class="variety-section">
        <h3>🔥 Syrah / Petite Sirah</h3>
        <p>加州 Syrah（南隆河風格：香料、橄欖）在 Paso Robles 和 Santa Barbara 達到顛峰。Petite Sirah 則常被誤以為是 Syrah 的「小型版」，實際上本名為 <strong>Durif</strong>——1880 年代法國植物學家 François Durif 在自家苗圃發現 Syrah 與另一品種 Peloursin 的天然雜交後代，1880 年代由 Charles McIver 引入美國並改稱「Petite Sirah」。它在原生地法國幾乎絕跡，卻在加州發揚光大，果皮極厚、單寧緊實，曾大量用於混釀，現已成為精品，尤以 Lodi 老藤最為知名。</p>
        <div class="ov-style">Syrah：黑橄欖、紫羅蘭、胡椒、煙燻；飽滿但有優雅感<br>Petite Sirah：色深近墨、單寧緊實、陳年潛力強</div>
        <div class="ov-area">Syrah 最佳：Paso Robles、Santa Barbara、Sonoma Coast；Petite Sirah 最佳：Lodi、Paso Robles</div>
      </div>
    </div>`
  },

  {
    title: '白酒與義大利品種：Sauvignon Blanc、Rhône 白酒、Cabernet Franc',
    highlights: [
      { id: 1, icon: '🌸', title: 'Fumé Blanc 的行銷傳奇', content: 'Robert Mondavi 1960 年代將 Sauvignon Blanc 重新命名行銷，扭轉市場對此品種的印象' },
      { id: 2, icon: '🌿', title: 'Rhône Rangers 運動', content: '1980-90 年代興起，Grenache Blanc、Counoise、Picpoul Blanc 等品種經 Tablas Creek 引進美國' }
    ],
    content: `<div class="other-varieties">
      <div class="variety-grid-full">

        <div class="ov-card">
          <h4>🌸 Sauvignon Blanc</h4>
          <p>Robert Mondavi 於 1960 年代將加州 Sauvignon Blanc 以「Fumé Blanc」之名重新包裝行銷（借用羅亞爾河 Pouilly-Fumé 的名稱），創造了帶橡木陳年、較豐厚風格的加州白酒，成功扭轉當時消費者對此品種的印象。現代版本則有清爽草本和熱帶果香兩種風格並存。</p>
          <div class="ov-style">清爽款：百香果、萊姆、草本；豐厚款（Fumé Blanc）：奶油、芒果、橡木</div>
          <div class="ov-area">最佳：Napa Valley、Lake County、Livermore Valley</div>
        </div>

        <div class="ov-card">
          <h4>🌿 Rhône 白酒品種</h4>
          <p>以 Tablas Creek 為先驅——1989 年由 Robert Haas 與法國 Châteauneuf-du-Pape 名莊 Beaucastel 家族合資成立，1994 年起自法國引進 Grenache Blanc、Picpoul Blanc、Counoise 等美國此前從未種植的品種克隆，並釋出苗木供其他酒莊使用，帶動所謂「Rhône Rangers」運動。Paso Robles 和 Santa Barbara 現已生產世界水準的 Viognier（花香甜美）、Roussanne（蠟感草本）、Grenache Blanc（豐滑圓潤）。</p>
          <div class="ov-style">Viognier：桃子、橙花、薑；Roussanne：蜂蜜、茶葉、蠟感</div>
        </div>

        <div class="ov-card">
          <h4>🍇 Grenache</h4>
          <p>Rhône Rangers 運動的核心紅品種之一，加州常用 ENTAV-INRA 認證克隆（如 70、136、362、513、515 號），在 Paso Robles 西側與 Santa Barbara 的 Ballard Canyon 表現尤佳，也是隆河式混釀（GSM：Grenache-Syrah-Mourvèdre）的骨幹。</p>
          <div class="ov-style">草莓、覆盆子、白胡椒、乾燥花草；酒體中等偏飽滿，單寧柔和</div>
        </div>

        <div class="ov-card">
          <h4>🇮🇹 義大利品種</h4>
          <p>Sangiovese（Amador County、Napa）、Barbera（Sierra Foothills，尤以 Amador County 為美國重鎮）、Nebbiolo（少量高端生產）——19 世紀末義大利移民帶到 Sierra Foothills 的品種遺產，在加州找到新的表達方式。</p>
          <div class="ov-style">更豐厚圓潤，果味更強，酸度較義大利本家低</div>
        </div>

        <div class="ov-card">
          <h4>🌟 Cabernet Franc</h4>
          <p>不再只是混釀素材，Napa Valley 和 Santa Barbara 現在生產單一品種 Cabernet Franc，以青椒、紅色花果和輕盈感吸引現代消費者，常被視為加州紅酒風格「輕量化」趨勢的代表品種之一。</p>
          <div class="ov-style">紅色花果、青椒、草本香料；比 Cab Sauv 更輕盈</div>
        </div>

      </div>
    </div>`
  },

  {
    title: '品種 × 氣候對照總表',
    content: `<div class="variety-climate-summary">
      <h3>🌡️ 加州主要品種氣候與產區速查表</h3>
      <table class="compare-table">
        <thead>
          <tr><th>品種</th><th>氣候偏好</th><th>核心產區</th><th>典型酒精度</th></tr>
        </thead>
        <tbody>
          <tr><td>Cabernet Sauvignon</td><td>溫暖大陸性</td><td>Napa Valley、Paso Robles</td><td>13.5-15%</td></tr>
          <tr><td>Chardonnay</td><td>涼爽至溫和</td><td>Russian River Valley、Carneros</td><td>12.5-15%</td></tr>
          <tr><td>Pinot Noir</td><td>涼爽、海霧頻繁</td><td>Sta. Rita Hills、Russian River Valley</td><td>12.5-14.5%</td></tr>
          <tr><td>Zinfandel</td><td>溫暖大陸性（不過熱）</td><td>Dry Creek Valley、Lodi、Amador</td><td>14-17%</td></tr>
          <tr><td>Merlot</td><td>溫和至溫暖</td><td>Napa Valley、Alexander Valley</td><td>13.5-14.5%</td></tr>
          <tr><td>Syrah</td><td>涼爽至溫和</td><td>Paso Robles、Santa Barbara</td><td>13.5-15%</td></tr>
          <tr><td>Petite Sirah</td><td>溫暖</td><td>Lodi、Paso Robles</td><td>14-15.5%</td></tr>
          <tr><td>Grenache</td><td>溫暖，需晝夜溫差</td><td>Paso Robles、Ballard Canyon</td><td>14-15.5%</td></tr>
          <tr><td>Sauvignon Blanc</td><td>涼爽至溫和</td><td>Napa Valley、Lake County</td><td>12.5-14%</td></tr>
        </tbody>
      </table>
    </div>`
  },

  {
    title: '風格演變：從「濃厚豐腴」到「均衡優雅」',
    highlights: [
      { id: 1, icon: '🔄', title: 'In Pursuit of Balance（2011-2016）', content: 'Rajat Parr 與 Jasmine Hirsch 發起的運動，推動加州 Pinot Noir 與 Chardonnay 走向更清新、更低酒精的風格' },
      { id: 2, icon: '🍇', title: 'White Zinfandel 的意外貢獻', content: '1975 年 Sutter Home 一次發酵意外造就的甜型粉紅酒，意外拯救了大量老藤 Zinfandel 葡萄園免於被剷除' }
    ],
    content: `<div class="style-evolution">
      <h3>🔄 加州葡萄酒風格的世代辯論</h3>
      <p>加州葡萄酒的品種風格並非一成不變。1980-2000 年代，市場普遍追求「濃縮、高酒精、重橡木」的風格（尤其是 Chardonnay 與 Cabernet Sauvignon），部分酒評體系的高分標準也助長了這股趨勢。但進入 2010 年代後，一股反思浪潮逐漸成形。</p>
      <div class="movement-box">
        <h4>🌿 In Pursuit of Balance（IPOB，2011-2016）</h4>
        <p>由 Sandhi Wines／Domaine de la Côte 的 Rajat Parr 與 Sonoma Coast Hirsch Vineyards 的 Jasmine Hirsch 於 2011 年共同發起，號召一群志同道合的加州釀酒師、侍酒師與媒體人，倡導「清新、明亮、果味鮮活」的 Pinot Noir 與 Chardonnay 風格，試圖打破外界對加州葡萄酒「過熟、濃重橡木」的刻板印象。雖然該組織已於 2016 年底功成身退，但其倡議的「均衡」美學已深植於當代加州精品酒莊的釀造哲學中，成為前述「現代精緻風格」Chardonnay 與涼爽氣候 Pinot Noir 崛起的重要推手之一。</p>
      </div>
      <div class="wz-box">
        <h4>🍷 意外的老藤守護者：White Zinfandel</h4>
        <p>1975 年，Napa 的 Sutter Home 酒莊在製作 Amador County 老藤 Zinfandel 時，一批放血法取出的粉紅葡萄汁意外「發酵中斷」，保留大量殘糖，意外造就了風靡全美的甜型粉紅酒 White Zinfandel。這股需求在 1980 年代對加州老藤 Zinfandel 種植面積的保存有意想不到的貢獻——許多原本可能被剷除、改種更「時髦」品種的老藤園，因為 White Zinfandel 的市場需求而得以存活，意外成為今日精品老藤 Zinfandel 復興運動的基礎。</p>
      </div>
    </div>`
  },

  {
    title: '克隆株小辭典：為什麼「同品種」味道差這麼多？',
    content: `<div class="clone-glossary">
      <h3>🧬 克隆（Clone）到底是什麼？</h3>
      <p>「克隆」是指同一葡萄品種內，經過長期無性繁殖（扦插）後產生細微基因變異、並被獨立命名編號的品系。即便同樣標示「Pinot Noir」或「Cabernet Sauvignon」，不同克隆株在果串大小、產量、風味濃縮度與成熟時間上都可能有明顯差異——這正是加州同一品種能在不同酒莊間呈現風格光譜的重要原因之一。</p>
      <table class="compare-table">
        <thead>
          <tr><th>品種</th><th>代表克隆／選種</th><th>來源與特色</th></tr>
        </thead>
        <tbody>
          <tr><td>Cabernet Sauvignon</td><td>Clone 4、6、169、337</td><td>Clone 4 源自阿根廷 Mendoza；Clone 6 源自 19 世紀波爾多老藤選種</td></tr>
          <tr><td>Chardonnay</td><td>Clone 4（Wente／Old Wente）、76、95、96</td><td>Clone 4 源自 1880 年代 Livermore Valley 引種，晚熟高產</td></tr>
          <tr><td>Pinot Noir</td><td>Dijon 667／777／115、Pommard（UCD 4）、Swan</td><td>Dijon 系統源自法國布根地；Pommard 由 Harold Olmo 於 1951 年引進</td></tr>
          <tr><td>Zinfandel</td><td>Lytton、Moore、Teldeschi、St. Peter's Church</td><td>以歷史老園「命名選種」流傳，而非編號克隆系統</td></tr>
          <tr><td>Grenache</td><td>ENTAV-INRA 70、136、362、513、515</td><td>法國官方認證克隆系統，經 Tablas Creek 等酒莊引入加州</td></tr>
        </tbody>
      </table>
      <p class="clone-note">💡 小知識：克隆選育的核心目的之一是「除病毒」——UC Davis 的葡萄種苗基金會（Foundation Plant Services）會對候選母株進行病毒篩檢與熱處理除毒，確保釋出的克隆苗木健康無病害，這也是加州葡萄種苗品質長期領先全球的關鍵基礎建設之一。</p>
    </div>`
  },

  {
    title: '混釀哲學：GSM、Meritage 與波爾多式混釀',
    highlights: [
      { id: 1, icon: '🏷️', title: 'Meritage 商標的誕生', content: '1988 年由 Napa／Sonoma 酒莊聯合發起的商標名稱競賽，解決「75% 單一品種」標示規定的困擾' },
      { id: 2, icon: '🍷', title: 'GSM：隆河式混釀鐵三角', content: 'Grenache-Syrah-Mourvèdre 組合是 Paso Robles 與 Santa Barbara 最具代表性的混釀公式' }
    ],
    content: `<div class="blending-philosophy">
      <h3>🍷 加州混釀酒款的兩大傳統</h3>
      <p>加州法規要求「品種標示酒」（varietal-labeled wine）須至少含 75% 該品種葡萄，這個規定意外促成了混釀酒款的獨特商標文化——當酒莊想釀造更均衡、不受限於單一品種比例的混釀酒時，需要一個不屬於任何特定品種名稱的行銷用語。</p>

      <div class="meritage-box">
        <h4>🏷️ Meritage（Bordeaux 式混釀）</h4>
        <p>1988 年，一群 Napa 與 Sonoma 酒莊聯合發起徵名活動，收到超過 6,000 件投稿，最終選中「Meritage」（merit + heritage 的組合詞）作為專屬商標名稱，並成立 Meritage Alliance 管理授權。規定：紅色 Meritage 須混合至少兩種波爾多紅葡萄品種（Cabernet Sauvignon、Merlot、Cabernet Franc、Malbec、Petit Verdot 等），且單一品種比例不得超過 90%。Opus One、Justin ISOSCELES 等加州知名混釀酒款，都屬於廣義的 Meritage 精神傳承（部分酒莊選擇不加入官方商標授權，但採用相同的混釀邏輯）。</p>
      </div>

      <div class="gsm-box">
        <h4>🍇 GSM：隆河式混釀鐵三角</h4>
        <p>Grenache（果香與酒體）、Syrah（結構與色澤）、Mourvèdre（皮革與肉感深度）三個品種的混釀組合，簡稱 GSM，是 Rhône Rangers 運動最具代表性的混釀公式，在 Paso Robles 西側與 Santa Barbara 的 Ballard Canyon 尤其常見。三個品種截然不同的特性互補，讓 GSM 混釀通常比單一品種裝瓶更具層次感與飲用彈性。</p>
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
            options: ['A. 加州最著名的 Cabernet Sauvignon 克隆株', 'B. 加州種植面積最大 Chardonnay 克隆之一，由 Wente 家族 1880 年代從布根地引進', 'C. 加州最老的 Zinfandel 老藤克隆', 'D. Robert Mondavi 研發的 Pinot Noir 克隆'],
            correct: 1,
            explanation: '「Wente Clone」指 C.H. Wente 1880 年代從布根地引進的 Chardonnay 種苗，經 UC Davis 除毒篩選後編號為 Clone 4，是加州種植面積最大的 Chardonnay 克隆之一，1936 年 Wente 更率先在酒標上標示「Chardonnay」品種名。'
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
            question: '加州 Pinot Noir 常用的三個布根地 Dijon 克隆組合是？',
            options: ['A. Clone 4、6、337', 'B. Dijon 667、777、115', 'C. Clone 76、95、96', 'D. UCD 4、Swan、Old Wente'],
            correct: 1,
            explanation: 'Dijon 667（花香細膩）、777（兼具力量與細膩）、115（顏色深、香氣奔放）是當代加州 Pinot Noir 種植最常見的三個布根地引進克隆，常混合種植以增加複雜度。'
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
            question: 'Petite Sirah（在美國的名稱）本名 Durif，是由什麼品種雜交育成的？',
            options: ['A. Cabernet Sauvignon × Merlot', 'B. Syrah × Peloursin', 'C. Grenache × Mourvèdre', 'D. Zinfandel × Primitivo'],
            correct: 1,
            explanation: 'Durif（美國稱 Petite Sirah）是 1880 年代法國植物學家 François Durif 發現的 Syrah 與 Peloursin 天然雜交後代，1880 年代引入美國後改稱 Petite Sirah，在法國本土幾乎絕跡卻在加州發揚光大。'
          },
          {
            type: 'single',
            question: '誰被業界稱為「Mr. Merlot」，並於 1976 年創立 Duckhorn Vineyards？',
            options: ['A. Robert Mondavi', 'B. Dan Duckhorn', 'C. Gary Eberle', 'D. Warren Winiarski'],
            correct: 1,
            explanation: 'Dan Duckhorn 與妻子 Margaret 於 1976 年在 Napa 創立 Duckhorn Vineyards，1978 年首個年份僅生產 800 箱 Merlot 與 800 箱 Cabernet Sauvignon。Dan Duckhorn 畢生致力推廣 Merlot，因此在業界被稱為「Mr. Merlot」。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard 於哪一年開始自法國引進 Grenache Blanc、Picpoul Blanc、Counoise 等當時美國從未種植過的品種克隆？',
            options: ['A. 1976 年', 'B. 1989 年', 'C. 1994 年', 'D. 2001 年'],
            correct: 2,
            explanation: 'Tablas Creek Vineyard 於 1989 年由 Robert Haas 與法國 Beaucastel 家族合資成立，1994 年起自法國引進正統 Rhône 品種克隆，是美國「Rhône Rangers」運動的重要推手。'
          },
          {
            type: 'single',
            question: '加州 Pinot Noir 和 Zinfandel 各自對應的「最佳氣候類型」是？',
            options: ['A. 兩者都需要溫暖乾燥氣候', 'B. Pinot Noir 需要涼爽海洋性氣候；Zinfandel 偏好溫暖大陸性氣候（但不太熱）', 'C. Zinfandel 需要高海拔涼爽；Pinot Noir 偏好谷底溫暖', 'D. 兩者氣候需求相同'],
            correct: 1,
            explanation: 'Pinot Noir 是非常「涼爽氣候」的品種，需要海霧和長生長季（Russian River Valley、Sonoma Coast、Sta. Rita Hills）；Zinfandel 偏好溫暖大陸性氣候（Dry Creek Valley、Lodi、Amador County），但過熱容易造成過熟、酒精過高。'
          },
          {
            type: 'single',
            question: '「In Pursuit of Balance」（IPOB，2011-2016）運動主要倡導什麼理念？',
            options: ['A. 提高加州葡萄酒的酒精度以增加濃縮感', 'B. 推廣更清新、明亮、低酒精、少橡木的均衡風格 Pinot Noir 與 Chardonnay', 'C. 全面改種 Rhône 品種取代布根地品種', 'D. 反對任何形式的永續認證'],
            correct: 1,
            explanation: '「In Pursuit of Balance」由 Rajat Parr 與 Jasmine Hirsch 於 2011 年發起，倡導清新、明亮、果味鮮活的均衡風格 Pinot Noir 與 Chardonnay，試圖打破外界對加州葡萄酒「過熟、濃重橡木」的刻板印象，雖然組織已於 2016 年結束運作，但其美學理念持續影響當代加州精品酒莊。'
          }
        ]
      }
    }
  }
]
