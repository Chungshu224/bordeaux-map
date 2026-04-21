/**
 * CA-L1-5 Central Coast 深度探索
 * Paso Robles、Santa Barbara、Monterey、Santa Cruz Mountains
 * 資料來源：discovercaliforniawines.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Central Coast（中央海岸）是加州葡萄酒最令人興奮的前沿地帶。從舊金山南方的 Livermore Valley 延伸至 Santa Barbara，太平洋帶來涼爽、優雅的氣候特性，孕育出加州最精緻的 Pinot Noir、最富創意的 Rhône 混釀，以及因電影《Sideways》而聲名大噪的 Santa Barbara 葡萄酒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解 Central Coast 的氣候驅動力</h4>
            <p>掌握太平洋海霧如何塑造各子 AVA 的風格差異</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識 Paso Robles 的 Rhône 葡萄酒世界</h4>
            <p>了解為何 Paso Robles 是美國 Syrah 和 Grenache 的最重要產地</p>
          </div>
          <div class="point-item">
            <h4>🎬 探索 Santa Barbara 的 Pinot Noir 傳奇</h4>
            <p>理解電影《Sideways》對 Pinot Noir 的影響，以及 Santa Rita Hills 的風土魔力</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Livermore Valley — 加州 Chardonnay 的搖籃',
    content: `<div class="livermore-detail">
      <h3>🔬 Livermore Valley — 歷史、基因與品質</h3>
      <p>位於舊金山灣區東緣，Livermore Valley 是加州葡萄酒歷史最悠久的產區之一。1840 年代首次種植葡萄，Wente 和 Concannon 兩大家族在 1880 年代奠定了今日的傳統。</p>

      <div class="livermore-highlights">
        <div class="highlight-box">
          <h4>🧬 加州 Chardonnay 的基因中心</h4>
          <p>加州 80% 的 Chardonnay 基因可追溯至 Livermore Valley！C.H. Wente 從勃根地引進的 Chardonnay 克隆株，後來成為整個加州 Chardonnay 種植的主要基因來源。</p>
        </div>
        <div class="highlight-box">
          <h4>🏆 多個品種認定先鋒</h4>
          <p>加州第一個在酒標標注 Chardonnay、Petite Sirah 和 Sauvignon Blanc 品種名稱的就是 Livermore Valley，開創了加州品種標示文化。</p>
        </div>
      </div>

      <div class="livermore-style">
        <h4>Wine Style</h4>
        <p>礫石土壤和灣區東側的溫和氣候，帶來均衡的白酒和紅酒：Chardonnay（豐厚但有酸度）、Sauvignon Blanc、Cabernet Sauvignon（Bordeaux 風格）。</p>
        <div class="key-producers">代表酒莊：Wente Family Vineyards（1883年）、Concannon Vineyard（1883年）、Steven Kent Winery</div>
      </div>
    </div>`
  },

  {
    title: 'Paso Robles — Rhône 品種的新世界聖地',
    content: `<div class="paso-detail">
      <h3>☀️ Paso Robles — 加州最熱鬧的 Rhône 葡萄酒產地</h3>
      <p>Paso Robles 近年是加州成長最快的精品葡萄酒產區，以 Syrah、Grenache、Mourvèdre 等 Rhône 品種著稱，但 Cabernet Sauvignon 和 Zinfandel 也表現卓越。</p>

      <div class="paso-geography">
        <h4>🗺️ 東西分野：兩個完全不同的 Paso Robles</h4>
        <div class="east-west-split">
          <div class="east-side">
            <h5>東部 Paso Robles（Estrella District 等）</h5>
            <p>遠離海岸，溫暖炎熱，晝夜溫差達 50°F（28°C）。土壤以石灰岩和礫石為主。生產豐厚飽滿的 Cabernet、Zinfandel 和 Merlot。</p>
          </div>
          <div class="west-side">
            <h5>西部 Paso Robles（Adelaida District 等）</h5>
            <p>海拔較高，受太平洋海霧影響更多，夜間涼爽。石灰岩土壤（Calcareous soils）帶來天然酸度。是 Rhône 品種（Syrah、Grenache）的最佳生長地。</p>
          </div>
        </div>
      </div>

      <div class="paso-varieties">
        <h4>主要品種與風格</h4>
        <div class="variety-grid">
          <div class="v-card"><strong>Syrah</strong><p>香料、黑橄欖、煙燻感；西部 Paso 尤佳</p></div>
          <div class="v-card"><strong>Grenache</strong><p>草莓、覆盆子、草藥；優雅易飲</p></div>
          <div class="v-card"><strong>Mourvèdre</strong><p>皮革、肉感、濃厚；通常混釀使用</p></div>
          <div class="v-card"><strong>Cabernet Sauvignon</strong><p>豐厚黑果、圓潤單寧；東部 Paso 強項</p></div>
          <div class="v-card"><strong>Zinfandel</strong><p>黑莓、香料、高酒精；粗獷風格</p></div>
          <div class="v-card"><strong>Rhône 白酒（Viognier、Roussanne）</strong><p>花香四溢，圓潤飽滿</p></div>
        </div>
      </div>

      <div class="paso-producers">
        <h4>代表酒莊</h4>
        <div class="prod-grid">
          <div class="p-item"><strong>DAOU Family Estates</strong> — 現代 Paso 標竿，Sequoia 系列知名</div>
          <div class="p-item"><strong>Justin Vineyards & Winery</strong> — ISOSCELES（Bordeaux 混釀）是加州膜拜酒之一</div>
          <div class="p-item"><strong>Tablas Creek Vineyard</strong> — 由 Rhône 一級名莊 Château Beaucastel 合資，從法國引進 Rhône 品種的先驅</div>
          <div class="p-item"><strong>Eberle Winery</strong> — Paso Robles Zinfandel 老酒莊</div>
          <div class="p-item"><strong>Austin Hope</strong> — Hope Family Wines，Rhône 品種典範</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Santa Barbara County — 電影《Sideways》的葡萄酒王國',
    content: `<div class="santa-barbara-detail">
      <h3>🎬 Santa Barbara County — Pinot Noir 的加州新聖地</h3>

      <div class="sideways-moment">
        <div class="movie-box">
          <h4>🎥 電影《Sideways》（2004）的影響</h4>
          <p>Alexander Payne 執導的電影《Sideways》在 Santa Barbara 的葡萄酒鄉拍攝，主角對 Pinot Noir 的激情讚美（以及對 Merlot 的嫌惡）在全球掀起「Pinot 熱潮」。電影上映後，全美 Pinot Noir 銷量暴增 50%，Santa Barbara 也一夕間成為國際知名的葡萄酒旅遊目的地。</p>
        </div>
      </div>

      <div class="sb-geography">
        <h4>🗺️ 橫向山谷的奇蹟</h4>
        <p>Santa Barbara 的獨特之處在於其橫向（東西走向）山谷——Santa Ynez Valley 和 Santa Maria Valley。大多數加州山谷是南北走向，但這裡的橫向山谷讓太平洋海霧和涼風直接從海岸吹入，帶來加州最涼爽的葡萄酒生長環境之一。</p>
      </div>

      <div class="sb-avas">
        <h4>主要子 AVA</h4>
        <div class="avas-detail">
          <div class="ava-block">
            <h5>🌺 Santa Rita Hills（SRH）— Pinot Noir 的頂峰</h5>
            <p>Santa Ynez Valley 的子 AVA，直接面向太平洋，是全加州最涼爽的 Pinot Noir 產地之一。薄岩石土壤、強勁海風，Pinot Noir 呈現高酸度、細膩紅果和礦石感。Chardonnay 同樣卓越。</p>
            <div class="ava-producers">代表：Melville Winery、Sanford Winery、Flying Goat Cellars</div>
          </div>
          <div class="ava-block">
            <h5>🌾 Happy Canyon of Santa Barbara</h5>
            <p>溫暖乾燥的 Santa Ynez 東側，適合 Bordeaux 品種（Cabernet Sauvignon、Cabernet Franc、Sauvignon Blanc）。</p>
          </div>
          <div class="ava-block">
            <h5>🌿 Ballard Canyon</h5>
            <p>以 Syrah 著稱的子 AVA，涼爽夜晚帶來典雅的北隆河谷（Northern Rhône）風格。</p>
          </div>
          <div class="ava-block">
            <h5>🌊 Sta. Rita Hills 鄰近的 Los Olivos District</h5>
            <p>多元品種，Bordeaux 和 Rhône 品種均有佳作。Los Olivos 小鎮是《Sideways》的拍攝地。</p>
          </div>
        </div>
      </div>

      <div class="sb-producers">
        <h4>代表酒莊</h4>
        <ul>
          <li>🏆 <strong>Au Bon Climat</strong> — Jim Clendenen 的傳奇，加州 Pinot 教父的作品</li>
          <li>🌟 <strong>Foxen Vineyards</strong> — 多品種標竿，Pinot 和 Chardonnay 均卓越</li>
          <li>🌺 <strong>Melville Winery</strong> — Santa Rita Hills 精品 Pinot 和 Chardonnay</li>
          <li>🎸 <strong>The Ojai Vineyards</strong> — 自然農法先鋒，優雅 Syrah 和 Pinot</li>
          <li>🌊 <strong>Qupé</strong> — Bob Lindquist 的 Syrah 傑作</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Santa Cruz Mountains & Monterey County',
    content: `<div class="scm-monterey">
      <div class="scm-section">
        <h3>🏔️ Santa Cruz Mountains — 石灰岩上的陳年傳奇</h3>
        <p>舊金山南方的 Santa Cruz Mountains 是加州最特殊的高海拔 AVA 之一。罕見的石灰岩（Limestone）土壤帶來天然高酸度，加上涼爽海洋性氣候，生產加州陳年潛力最強的 Cabernet Sauvignon 之一。</p>
        <div class="scm-highlights">
          <div class="h-item"><strong>Ridge Monte Bello：</strong>海拔約 800 公尺，石灰岩土壤，被許多酒評家評為加州陳年潛力最強的 Cabernet。2006 年「巴黎評判 30 周年重賽」中名列前茅，印證 30 年後反而超越同場法國名莊。</div>
          <div class="h-item"><strong>Mount Eden Vineyards：</strong>海拔 600 公尺的歷史酒莊，以雄渾的 Chardonnay 和 Cabernet 著稱，兼具歐洲風格和加州個性。</div>
        </div>
        <div class="scm-style">Wine Style：礦石感強、高酸度、緊實單寧，需要 10-20 年以上陳年才能達到顛峰。</div>
      </div>

      <div class="monterey-section">
        <h3>🌬️ Monterey County — 強風下的優雅涼氣候</h3>
        <p>蒙特雷灣帶來加州最強的午後海風，葡萄藤在風中彎曲生長，天然低產量。這種艱難環境造就了濃縮、精緻的果香，Chardonnay、Pinot Noir 和 Riesling 都有卓越表現。</p>
        <div class="monterey-highlights">
          <div class="h-item"><strong>重要子 AVA：</strong>Arroyo Seco（涼爽，Riesling 著名）、Carmel Valley（溫暖，Cabernet）、Santa Lucia Highlands（高海拔，Pinot Noir）</div>
          <div class="h-item"><strong>Santa Lucia Highlands：</strong>海拔 1,200-2,400 公尺，是加州高海拔最著名的 Pinot Noir 產地，風格介於 Burgundy 和加州之間</div>
          <div class="h-item"><strong>代表酒莊：</strong>Pisoni Vineyards（傳奇老藤 Pinot）、Wrath Wines、Estancia（Monterey Pinot）</div>
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
            question: '哪部電影讓 Santa Barbara 的 Pinot Noir 聲名大噪，並使全美 Pinot Noir 銷量暴增？',
            options: ['A. Bottle Shock（2008）', 'B. Sideways（2004）', 'C. Wine Country（2019）', 'D. Somm（2013）'],
            correct: 1,
            explanation: '2004 年的電影《Sideways》在 Santa Barbara 葡萄酒鄉拍攝，主角對 Pinot Noir 的激情讚美使全美 Pinot Noir 銷量暴增約 50%，Santa Barbara 也一夕成為國際葡萄酒旅遊目的地。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard 是由哪個法國 Rhône 名莊共同投資、引進 Rhône 品種到 Paso Robles 的？',
            options: ['A. Châteauneuf-du-Pape（名稱產區）', 'B. Château Beaucastel', 'C. Château Rayas', 'D. Domaine du Vieux Télégraphe'],
            correct: 1,
            explanation: 'Tablas Creek Vineyard 由 Haas 家族和法國 Rhône 名莊 Château Beaucastel 合資創立，從法國引進 Rhône 品種（Syrah、Grenache、Mourvèdre、Roussanne 等），成為美國 Rhône 品種種植的先驅。'
          },
          {
            type: 'single',
            question: 'Santa Cruz Mountains 的 Ridge Monte Bello 以哪種罕見土壤著稱，賦予葡萄酒極強的陳年潛力？',
            options: ['A. 礫石沖積扇', 'B. Goldridge 細沙壤土', 'C. 石灰岩（Limestone）', 'D. 火山岩'],
            correct: 2,
            explanation: 'Ridge Monte Bello 位於海拔約 800 公尺，擁有加州罕見的石灰岩土壤，帶來天然高酸度和礦石感，使其 Cabernet Sauvignon 陳年潛力達 20-40 年，在 2006 年「巴黎評判 30 周年重賽」中名列前茅。'
          },
          {
            type: 'single',
            question: 'Paso Robles 西部（如 Adelaida District）與東部最大的差別是什麼？',
            options: ['A. 西部更熱，東部更涼爽', 'B. 西部海拔更高、受海霧影響多，更適合 Rhône 品種；東部更熱，適合 Cabernet', 'C. 西部種 Chardonnay，東部種 Pinot Noir', 'D. 兩者氣候完全相同'],
            correct: 1,
            explanation: 'Paso Robles 東西分野明顯：西部（Adelaida District 等）海拔較高、受太平洋海霧和涼風影響，石灰岩土壤，更適合 Rhône 品種；東部更溫暖乾燥，礫石土壤，Cabernet Sauvignon 和 Zinfandel 更佳。'
          }
        ]
      }
    }
  }
]
