/**
 * CA-L1-5 Central Coast 深度探索
 * Livermore Valley、Paso Robles、Santa Barbara、Santa Cruz Mountains、Monterey
 * 資料來源：discovercaliforniawines.com、Paso Robles Wine Country Alliance（pasowine.com）、
 * Santa Barbara Vintners（sbcountywines.com）、Tablas Creek Vineyard 官方部落格、
 * Ridge Vineyards 官方網站、Lodi/TTB Federal Register AVA 公告、Wikipedia AVA 條目（交叉核對 TTB 生效年份）、
 * Livermore Valley Winegrowers Association（lvwine.org）、Concannon Vineyard 官方歷史頁
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Central Coast（中央海岸）是加州葡萄酒最令人興奮的前沿地帶。從舊金山灣區東緣的 Livermore Valley，一路延伸至 Santa Barbara 南端，綿延超過 400 公里的太平洋海岸線，帶來涼爽、優雅的氣候特性，孕育出加州最精緻的 Pinot Noir、最富創意的 Rhône 混釀，以及因電影《Sideways》而聲名大噪的 Santa Barbara 葡萄酒。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解 Central Coast 的氣候驅動力</h4>
            <p>掌握太平洋海霧與地形走向如何塑造各子 AVA 的風格差異</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識 Paso Robles 的 Rhône 葡萄酒世界</h4>
            <p>了解 11 個官方子 AVA 的東西分野，以及為何 Paso Robles 是美國 Syrah 和 Grenache 的最重要產地</p>
          </div>
          <div class="point-item">
            <h4>🎬 探索 Santa Barbara 的 Pinot Noir 傳奇</h4>
            <p>理解電影《Sideways》對 Pinot Noir 的影響，以及 Santa Rita Hills、Ballard Canyon 等子 AVA 的風土魔力</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 認識 Santa Cruz Mountains 與 Monterey 的高海拔／強風風土</h4>
            <p>理解 Ridge Monte Bello 的石灰岩傳奇，以及 Santa Lucia Highlands 強風造就的濃縮果香</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Central Coast 產區地圖',
    componentProps: {
      slide: {
        title: 'Central Coast 產區地圖',
        description: 'Livermore Valley、Paso Robles、Santa Barbara County、Santa Cruz Mountains、Monterey——延伸 400 公里的精品海岸帶',
        mapGroup: 'Central Coast',
      }
    }
  },

  {
    title: 'Livermore Valley — 加州 Chardonnay 的搖籃',
    highlights: [
      { id: 1, icon: '🧬', title: '加州 Chardonnay 基因中心', content: 'Wente 家族 1880 年代自布根地引進的克隆株，是全加州約 80% Chardonnay 的基因來源' },
      { id: 2, icon: '🏆', title: '品種標示先驅', content: 'Wente 1936 年首度在酒標印上「Chardonnay」品種名；Concannon 1961 年推出全美第一款單一品種標示的 Petite Sirah' }
    ],
    content: `<div class="livermore-detail">
      <h3>🔬 Livermore Valley — 歷史、基因與品質</h3>
      <p>位於舊金山灣區東緣，Livermore Valley 是加州葡萄酒歷史最悠久的產區之一。1840 年代首次種植葡萄，Wente 和 Concannon 兩大家族皆於 1883 年創立酒莊，奠定了今日的傳統——兩家至今仍由創辦家族經營，Wente Vineyards 更被視為全美歷史最悠久、持續由同一家族經營的酒莊。</p>

      <div class="livermore-highlights">
        <div class="highlight-box">
          <h4>🧬 加州 Chardonnay 的基因中心</h4>
          <p>加州約 80% 的 Chardonnay 基因可追溯至 Livermore Valley！C.H. Wente 從布根地引進的 Chardonnay 種苗，經加州大學戴維斯分校葡萄種苗基金會（FPS）除毒篩選後編號為「Clone 4」（俗稱 Wente Clone），後來成為整個加州 Chardonnay 種植的主要基因來源，也是美國種植最廣泛的 Chardonnay 克隆之一。1936 年，Wente 以該年份葡萄裝瓶並在酒標印上「Chardonnay」品種名，是美國最早的品種標示先例之一。</p>
        </div>
        <div class="highlight-box">
          <h4>🏆 多個品種認定先鋒</h4>
          <p>Concannon Vineyard 於 1961 年推出全美第一款以「Petite Sirah」品種標示上市的葡萄酒，在此之前 Petite Sirah 幾乎只被當作混釀用的無名配角，Concannon 也因此被視為「Petite Sirah 之父」。Livermore Valley 同時也是加州最早在酒標標注 Sauvignon Blanc 和 Cabernet Sauvignon 品種名稱的產區之一，開創了加州品種標示文化。</p>
        </div>
      </div>

      <div class="livermore-style">
        <h4>Wine Style</h4>
        <p>礫石土壤（源自古代河床沖積扇）和灣區東側的溫和氣候，帶來均衡的白酒和紅酒：Chardonnay（豐厚但保有酸度）、Sauvignon Blanc、Cabernet Sauvignon（Bordeaux 風格）、Petite Sirah（濃縮耐久）。</p>
        <div class="key-producers">代表酒莊：Wente Family Vineyards（1883 年創立）、Concannon Vineyard（1883 年創立，Petite Sirah 之父）、Steven Kent Winery（現代精品酒莊代表）、Murrieta's Well（歷史悠久的混釀專家）</div>
      </div>
    </div>`
  },

  {
    title: 'Paso Robles — Rhône 品種的新世界聖地',
    highlights: [
      { id: 1, icon: '🗺️', title: '11 個官方子 AVA', content: '2014 年 TTB 正式核准，是加州單一產區一次新增子 AVA 數量最多的紀錄之一' },
      { id: 2, icon: '🍷', title: 'Rhône Rangers 重鎮', content: 'Tablas Creek 由法國 Châteauneuf-du-Pape 名莊 Beaucastel 家族合資創立，將正統隆河克隆引進美國' }
    ],
    content: `<div class="paso-detail">
      <h3>☀️ Paso Robles — 加州最熱鬧的 Rhône 葡萄酒產地</h3>
      <p>Paso Robles 近年是加州成長最快的精品葡萄酒產區，以 Syrah、Grenache、Mourvèdre 等 Rhône 品種著稱，但 Cabernet Sauvignon 和 Zinfandel 也表現卓越。整個 Paso Robles AVA 面積廣達約 26.6 萬英畝，是加州面積最大的 AVA 之一。</p>

      <div class="paso-geography">
        <h4>🗺️ 東西分野：兩個完全不同的 Paso Robles</h4>
        <div class="east-west-split">
          <div class="east-side">
            <h5>東部 Paso Robles（Estrella District、San Miguel District 等）</h5>
            <p>遠離海岸，溫暖炎熱，晝夜溫差可達 25-28°C（約 45-50°F）。土壤以石灰岩和礫石為主，地勢平緩。生產豐厚飽滿的 Cabernet、Zinfandel 和 Merlot。</p>
          </div>
          <div class="west-side">
            <h5>西部 Paso Robles（Adelaida District、Willow Creek District 等）</h5>
            <p>海拔較高、地形起伏大，受太平洋海霧影響更多，夜間涼爽。石灰岩質土壤（Calcareous soils）帶來天然酸度。是 Rhône 品種（Syrah、Grenache）的最佳生長地。</p>
          </div>
        </div>
      </div>

      <div class="paso-avas">
        <h4>📍 2014 年核准的 11 個官方子 AVA</h4>
        <p>2014 年 11 月，美國菸酒稅務貿易局（TTB）一次核准 Paso Robles 內部 11 個子 AVA，是加州近代規模最大的產區細分之一，反映出其地形、土壤與微氣候的高度多樣性。</p>
        <div class="avas-grid">
          <div class="ava-card">
            <h5>Adelaida District</h5>
            <p>西側最高海拔區之一，石灰岩土壤，是 Tablas Creek 所在地，Rhône 品種與 Cabernet 皆優</p>
          </div>
          <div class="ava-card">
            <h5>Willow Creek District</h5>
            <p>西側涼爽地帶，DAOU Family Estates 所在山丘，海拔可達 610 公尺</p>
          </div>
          <div class="ava-card">
            <h5>Templeton Gap District</h5>
            <p>太平洋涼風經 Templeton Gap 缺口直接灌入，晝夜溫差顯著</p>
          </div>
          <div class="ava-card">
            <h5>El Pomar District</h5>
            <p>介於東西之間的過渡帶，土壤多元，Bordeaux 與 Rhône 品種皆有佳作</p>
          </div>
          <div class="ava-card">
            <h5>Paso Robles Estrella District</h5>
            <p>東部最大子 AVA 之一，溫暖乾燥，適合豐厚型 Cabernet 與 Zinfandel</p>
          </div>
          <div class="ava-card">
            <h5>Paso Robles Geneseo District</h5>
            <p>東側中部，沖積土壤與礫石混合，多元品種種植</p>
          </div>
          <div class="ava-card">
            <h5>Creston District / San Juan Creek</h5>
            <p>東南側，地勢較高，溫暖但仍有晝夜溫差調節</p>
          </div>
          <div class="ava-card">
            <h5>San Miguel District</h5>
            <p>最北端子 AVA，沙質沖積土，Salinas 河谷延伸帶來的涼爽影響</p>
          </div>
          <div class="ava-card">
            <h5>Paso Robles Highlands District</h5>
            <p>東北側高地，海拔起伏大，日夜溫差極端</p>
          </div>
          <div class="ava-card">
            <h5>Santa Margarita Ranch</h5>
            <p>最南端子 AVA，鄰近 Santa Lucia 山脈，受海洋影響較明顯</p>
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
          <div class="p-item"><strong>Tablas Creek Vineyard（1989 年創立）</strong> — 由美國葡萄酒進口商 Robert Haas 與法國 Châteauneuf-du-Pape 名莊 Château de Beaucastel 的 Perrin 家族合資，1989 年購地，1994 年起自法國引進正統隆河克隆（含 Grenache Blanc、Counoise、Picpoul Blanc 等加州從未種過的品種），是美國 Rhône 品種種植的先驅苗圃，已售出逾 500 萬株克隆苗木給其他酒莊</div>
          <div class="p-item"><strong>Justin Vineyards & Winery（1981 年創立）</strong> — Justin Baldwin 以波爾多左岸為靈感創立，招牌 ISOSCELES（Bordeaux 混釀）曾獲國際評選為「世界最佳混釀紅酒」</div>
          <div class="p-item"><strong>Eberle Winery（1979 年創立）</strong> — Gary Eberle 是推動 Paso Robles 產區發展的關鍵人物之一，酒莊地下酒窖系統於 1996 年啟用，成為當地知名景點</div>
          <div class="p-item"><strong>DAOU Family Estates（2007 年創立）</strong> — Daou 兄弟在 Adelaida District 海拔約 730 公尺的山丘創立，現代 Paso 標竿，Soul of a Lion、Patrimony 系列知名</div>
          <div class="p-item"><strong>Hope Family Wines（Austin Hope）</strong> — Rhône 與 Cabernet 品種並重的家族酒莊，Troublemaker 系列是入門經典</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Santa Barbara County — 電影《Sideways》的葡萄酒王國',
    highlights: [
      { id: 1, icon: '🎬', title: '《Sideways》效應', content: '2004 年電影上映後，全美 Pinot Noir 銷量顯著攀升，Santa Barbara 一夕成為國際葡萄酒旅遊目的地' },
      { id: 2, icon: '🧭', title: '橫向山谷奇蹟', content: 'Santa Ynez Valley 和 Santa Maria Valley 是加州罕見的東西走向山谷，讓海霧直灌內陸' }
    ],
    content: `<div class="santa-barbara-detail">
      <h3>🎬 Santa Barbara County — Pinot Noir 的加州新聖地</h3>

      <div class="sideways-moment">
        <div class="movie-box">
          <h4>🎥 電影《Sideways》（2004）的影響</h4>
          <p>Alexander Payne 執導的電影《Sideways》在 Santa Barbara 的葡萄酒鄉拍攝，主角對 Pinot Noir 的激情讚美（以及對 Merlot 的嫌惡）在全球掀起「Pinot 熱潮」，媒體稱之為「Sideways 效應」——電影上映後，全美 Pinot Noir 銷量顯著攀升，Merlot 銷量短暫下滑，Santa Barbara 也一夕間成為國際知名的葡萄酒旅遊目的地。2021 年，Wine Enthusiast 更將 Santa Barbara County 評選為年度「產區之最」（Wine Region of the Year）之一。</p>
        </div>
      </div>

      <div class="sb-geography">
        <h4>🗺️ 橫向山谷的奇蹟</h4>
        <p>Santa Barbara 的獨特之處在於其橫向（東西走向）山谷——Santa Ynez Valley（1983 年設立 AVA）和 Santa Maria Valley（1981 年設立 AVA，郡內最早的 AVA）。大多數加州山谷是南北走向，但這裡的橫向山谷讓太平洋海霧和涼風直接從海岸吹入內陸長達數十公里，帶來加州最涼爽的葡萄酒生長環境之一。</p>
      </div>

      <div class="sb-avas">
        <h4>主要子 AVA（依核准年份）</h4>
        <div class="avas-detail">
          <div class="ava-block">
            <h5>🌺 Sta. Rita Hills（SRH，2001 年設立）— Pinot Noir 的頂峰</h5>
            <p>Santa Ynez Valley 的子 AVA，直接面向太平洋，是全加州最涼爽的 Pinot Noir 產地之一。薄岩石土壤、強勁海風，Pinot Noir 呈現高酸度、細膩紅果和礦石感。Chardonnay 同樣卓越。</p>
            <div class="ava-producers">代表：Sanford Winery（1981 年創立，SRH 拓荒者之一）、Melville Winery（1996 年創立）、Brewer-Clifton</div>
          </div>
          <div class="ava-block">
            <h5>🌾 Happy Canyon of Santa Barbara（2009 年設立）</h5>
            <p>溫暖乾燥的 Santa Ynez 東側，郡內最溫暖的子 AVA，適合 Bordeaux 品種（Cabernet Sauvignon、Cabernet Franc、Sauvignon Blanc）。</p>
          </div>
          <div class="ava-block">
            <h5>🌿 Ballard Canyon（2013 年設立）</h5>
            <p>以 Syrah 著稱的子 AVA，涼爽夜晚帶來典雅的北隆河谷（Northern Rhône）風格，是加州 Syrah 密度最高的產區之一。</p>
          </div>
          <div class="ava-block">
            <h5>🌊 Los Olivos District（2016 年設立）</h5>
            <p>Sta. Rita Hills 東側，多元品種，Bordeaux 和 Rhône 品種均有佳作。Los Olivos 小鎮是《Sideways》的重要拍攝地之一。</p>
          </div>
          <div class="ava-block">
            <h5>🌤️ Santa Maria Valley（1981 年設立，郡內最早 AVA）</h5>
            <p>更靠海岸、更寬闊的橫向山谷，涼爽悠長的生長季孕育出加州最早成名的優質 Pinot Noir 和 Chardonnay 產地之一。</p>
          </div>
        </div>
      </div>

      <div class="sb-producers">
        <h4>代表酒莊</h4>
        <ul>
          <li>🏆 <strong>Au Bon Climat（1982 年由 Jim Clendenen 和 Adam Tolmach 創立）</strong> — 從一間改建乳牛棚起家，被譽為加州 Pinot 教父的傳奇作品</li>
          <li>🌊 <strong>Qupé（1982 年由 Bob Lindquist 創立）</strong> — 與 Au Bon Climat 同年誕生，是加州 Rhône 品種（尤其 Syrah）的先驅酒莊</li>
          <li>🌟 <strong>Foxen Vineyards</strong> — 多品種標竿，Pinot 和 Chardonnay 均卓越</li>
          <li>🌺 <strong>Sanford Winery（1981 年創立）</strong> — Richard Sanford 是最早在 Sta. Rita Hills 一帶種植 Pinot Noir 的先驅之一</li>
          <li>🌺 <strong>Melville Winery（1996 年創立）</strong> — Sta. Rita Hills 精品 Pinot 和 Syrah</li>
          <li>🎸 <strong>The Ojai Vineyards</strong> — 自然農法先鋒，優雅 Syrah 和 Pinot</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Santa Cruz Mountains — 石灰岩上的陳年傳奇',
    highlights: [
      { id: 1, icon: '⛰️', title: '1981 年設立的山地 AVA', content: '橫跨 Santa Clara、Santa Cruz、San Mateo 三郡，以山脊地形而非行政邊界劃定產區' },
      { id: 2, icon: '🏆', title: 'Ridge Monte Bello 傳奇', content: '1971 年份在 2006 年「巴黎評判 30 週年重賽」中奪冠，證明加州 Cabernet 的陳年實力' }
    ],
    content: `<div class="scm-section">
      <h3>🏔️ Santa Cruz Mountains — 石灰岩上的陳年傳奇</h3>
      <p>舊金山南方的 Santa Cruz Mountains AVA 於 1981 年設立，是加州最特殊的高海拔山地 AVA 之一，範圍橫跨 Santa Clara、Santa Cruz 與 San Mateo 三郡，以海拔等高線（而非行政邊界或河谷）作為劃定依據，在美國 AVA 中相當少見。罕見的石灰岩（Limestone）與綠岩土壤帶來天然高酸度，加上涼爽海洋性氣候，生產加州陳年潛力最強的 Cabernet Sauvignon 之一。</p>

      <div class="scm-highlights">
        <div class="h-item">
          <strong>Ridge Vineyards（Monte Bello）：</strong>Monte Bello 山脊的種植史可追溯至 1885 年，義大利裔醫師 Osea Perrone 在此建立了 Monte Bello Winery。1959 年一群史丹佛工程師重新在此山脊耕作，1962 年 Ridge Vineyards 釀出現代第一個年份的 Monte Bello。葡萄園海拔介於約 400-820 公尺之間，土壤由綠岩（greenstone）與黏土層疊在破碎石灰岩之上組成。2006 年，Ridge 1971 年份 Monte Bello 在倫敦重演的「巴黎評判 30 週年重賽」中被評為第一名，力壓當年參賽的波爾多一級名莊，印證了加州 Cabernet 卓越的長期陳年實力。
        </div>
        <div class="h-item">
          <strong>Mount Eden Vineyards：</strong>源自傳奇釀酒師 Martin Ray 於 1942-1943 年購入 Saratoga 山頂莊園，1945 年以 Paul Masson 的芽木種下第一批 Pinot Noir 和 Chardonnay，海拔約 600 公尺。1972 年 Martin Ray 因投資糾紛離開後，莊園更名為 Mount Eden Vineyards；Jeffrey Patterson 於 1981 年加入擔任副釀酒師，1983 年升任總釀酒師與莊園總經理，至今仍持續生產兼具歐洲風格與加州個性的雄渾 Chardonnay 和 Cabernet。
        </div>
      </div>
      <div class="scm-style">Wine Style：礦石感強、高酸度、緊實單寧，需要 10-20 年以上陳年才能達到顛峰，常被拿來與布根地和波爾多的頂級陳年酒款比較。</div>
    </div>`
  },

  {
    title: 'Monterey County — 強風下的優雅涼氣候',
    highlights: [
      { id: 1, icon: '🌬️', title: '全加州最強午後海風', content: 'Salinas 谷地形成天然風洞效應，葡萄藤在風中低矮彎曲生長，天然低產量、高濃縮度' },
      { id: 2, icon: '⛰️', title: 'Santa Lucia Highlands 高地 Pinot', content: '1991 年設立 AVA，是加州最著名的高海拔 Pinot Noir 產地之一' }
    ],
    content: `<div class="monterey-section">
      <h3>🌬️ Monterey County — 強風下的優雅涼氣候</h3>
      <p>蒙特雷灣（Monterey Bay）的獨特地形使 Salinas Valley 成為天然的風洞——冷空氣被灣區吸入內陸，帶來加州最強的午後海風。葡萄藤在強風中彎曲生長，蒸散作用旺盛，天然低產量。這種艱難環境造就了濃縮、精緻的果香，Chardonnay、Pinot Noir 和 Riesling 都有卓越表現。Monterey County 整體葡萄種植面積在加州名列前茅，同時也是重要的加工用葡萄產地。</p>
      <div class="monterey-highlights">
        <div class="h-item"><strong>重要子 AVA：</strong>Arroyo Seco（1983 年設立，涼爽、以 Riesling 和 Chardonnay 著稱）、Carmel Valley（1983 年設立，較溫暖，適合 Cabernet 和 Bordeaux 品種）、Chalone（1982 年設立，海拔約 600 公尺以上、石灰岩土壤的高地孤島型 AVA）、Santa Lucia Highlands（1991 年設立，高海拔、強風、加州頂尖 Pinot Noir 產地）</div>
        <div class="h-item"><strong>Santa Lucia Highlands：</strong>沿 Santa Lucia 山脈東側坡地，海拔沖積台地地形加上強烈的午後海風，是加州高海拔涼氣候 Pinot Noir 的代表產區之一，風格介於布根地的細緻與加州的濃郁果香之間，Syrah 和 Chardonnay 同樣出色。</div>
        <div class="h-item"><strong>代表酒莊：</strong>Pisoni Vineyards（Santa Lucia Highlands 傳奇老藤 Pinot 種植家族，供應葡萄給區內多家頂尖酒莊）、Wrath Wines、Chalone Vineyard（Chalone AVA 開拓者）、Bernardus Winery（Carmel Valley）</div>
      </div>
    </div>`
  },

  {
    title: 'Central Coast 的氣候引擎：湧升流與地形風洞',
    highlights: [
      { id: 1, icon: '🌊', title: '涌昇流（Upwelling）', content: '深層冷水被風力帶到海面，讓太平洋沿岸水溫常年偏低，是加州海岸涼爽氣候的根本成因' },
      { id: 2, icon: '🏔️', title: '地形決定海霧滲透深度', content: '山谷缺口、走向與寬度共同決定涼風能吹進內陸多遠、多強' }
    ],
    content: `<div class="climate-engine">
      <h3>🌊 Central Coast 為什麼這麼「涼」？</h3>
      <p>理解 Central Coast 各子產區風格差異的關鍵，在於太平洋沿岸的「湧升流」（Upwelling）現象：盛行的西北風將表層溫暖海水推離海岸，深層冷水隨之上湧補充，使加州沿岸海水溫度常年偏低（即便在盛夏也僅約 10-14°C）。冷海水與內陸熱空氣接觸後凝結成霧，每日清晨沿河谷與山口滲透進入內陸，午後隨氣溫上升而消散——這個「晨霧、午晴、晚涼」的日循環，正是 Central Coast 各產區共通的氣候骨架。</p>
      <div class="climate-factors">
        <div class="factor">
          <h5>🌫️ Monterey Bay 風洞效應</h5>
          <p>Salinas Valley 呈漏斗狀朝海灣開口，把冷涼海風強力吸入內陸長達數十公里，是全加州午後風力最強的產區之一，也解釋了為何 Santa Lucia Highlands 的葡萄藤普遍低矮、彎曲生長。</p>
        </div>
        <div class="factor">
          <h5>🚪 Templeton Gap 與 Rainbow Gap</h5>
          <p>Paso Robles 的 Templeton Gap、南加州 Temecula 的 Rainbow Gap，都是海岸山脈上的天然缺口，讓原本會被山脈完全阻擋的太平洋涼風得以貫穿而入，是解釋「同一產區、東西風格卻天差地遠」的關鍵地形密碼。</p>
        </div>
        <div class="factor">
          <h5>↔️ 橫向 vs 縱向山谷</h5>
          <p>Santa Barbara 的 Santa Ynez／Santa Maria Valley 是加州少見的東西橫向山谷，讓海霧幾乎暢行無阻地直灌內陸；相較之下多數加州山谷（如 Napa）呈南北走向，海霧僅能沿谷口逐漸滲透，效果較侷限。</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Central Coast 五大子產區風格速查表',
    content: `<div class="cc-compare">
      <h3>📊 五大子產區一覽比較</h3>
      <table class="compare-table">
        <thead>
          <tr><th>子產區</th><th>核心地形／土壤</th><th>氣候強度</th><th>招牌品種</th></tr>
        </thead>
        <tbody>
          <tr><td>Livermore Valley</td><td>古河床礫石沖積扇</td><td>溫和，灣區調節</td><td>Chardonnay、Cabernet Sauvignon</td></tr>
          <tr><td>Paso Robles（西側）</td><td>石灰岩、高海拔起伏地形</td><td>涼爽夜晚、日夜溫差 25°C+</td><td>Syrah、Grenache、Rhône 白酒</td></tr>
          <tr><td>Paso Robles（東側）</td><td>礫石、沖積平原</td><td>溫暖乾燥</td><td>Cabernet Sauvignon、Zinfandel</td></tr>
          <tr><td>Santa Barbara（Sta. Rita Hills）</td><td>薄岩石、海洋沉積層</td><td>全州最涼爽等級之一</td><td>Pinot Noir、Chardonnay</td></tr>
          <tr><td>Santa Cruz Mountains</td><td>石灰岩、綠岩，高海拔</td><td>涼爽海洋性，霧線以上日照足</td><td>Cabernet Sauvignon、Chardonnay</td></tr>
          <tr><td>Monterey（Santa Lucia Highlands）</td><td>沖積台地，強風</td><td>全州午後風力最強</td><td>Pinot Noir、Syrah、Chardonnay</td></tr>
        </tbody>
      </table>
      <p class="cc-note">💡 記憶法：越靠近開闊海岸線、地形缺口越大，氣候越涼爽；越往內陸、被山脈完整阻擋，氣候越溫暖。Central Coast 的迷人之處正在於同一產區群內，短短數十公里就能橫跨兩種截然不同的風土表現。</p>
    </div>`
  },

  {
    title: '延伸認識：更多值得記住的名莊與角落',
    content: `<div class="extra-producers">
      <h3>🍇 Central Coast 還有這些值得認識的角落</h3>
      <div class="extra-grid">
        <div class="extra-card">
          <h4>Santa Cruz Mountains 的其他名莊</h4>
          <p>除了 Ridge 和 Mount Eden，<strong>David Bruce Winery</strong>（1964 年創立，早期加州 Pinot Noir 拓荒者之一）與 <strong>Rhys Vineyards</strong>（以布根地式單一園精神著稱的現代精品酒莊）也是理解此產區風格光譜不可忽略的名字。</p>
        </div>
        <div class="extra-card">
          <h4>Monterey 的其他子 AVA</h4>
          <p>除了 Arroyo Seco、Carmel Valley、Chalone、Santa Lucia Highlands，Monterey County 內還有 <strong>Hames Valley</strong>、<strong>San Antonio Valley</strong>、<strong>San Bernabe</strong>、<strong>San Lucas</strong> 等較少為人知的子 AVA，多數位於 Salinas Valley 更南端、氣候相對溫暖，以大規模優質種植支援加州整體葡萄酒供應鏈。</p>
        </div>
        <div class="extra-card">
          <h4>Livermore Valley 的現代面貌</h4>
          <p>除了 Wente 和 Concannon 兩大歷史家族，<strong>Steven Kent Winery</strong> 和 <strong>Murrieta's Well</strong> 代表了 Livermore Valley 近年精品化的一面——聚焦於波爾多式混釀與有限產量的單一園酒款，逐漸擺脫外界對此產區「量產」的刻板印象。</p>
        </div>
        <div class="extra-card">
          <h4>Santa Barbara 的多元品種實驗</h4>
          <p>除了 Pinot Noir 與 Syrah，Happy Canyon of Santa Barbara 近年也以 Sauvignon Blanc 和 Cabernet Franc 建立起口碑，證明 Santa Barbara 並非只有涼爽產區的單一敘事，東側乾燥地帶同樣能釀出結構扎實的波爾多風格白酒與紅酒。</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Central Coast 歷史時間軸',
    content: `<div class="cc-timeline">
      <h3>🕐 Central Coast 產區發展重要年份</h3>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-badge ancient">1883</div>
          <div class="timeline-content"><strong>🍇 Livermore Valley 雙雄創立</strong><p>Wente 與 Concannon 兩大家族同年創立酒莊，開啟加州最早的品種標示與精品化傳統。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1979-1981</div>
          <div class="timeline-content"><strong>🌱 Paso Robles 與 Santa Barbara 拓荒期</strong><p>Eberle Winery（1979）、Justin Vineyards（1981）於 Paso Robles 創立；Sanford Winery（1981）於 Sta. Rita Hills 一帶插旗種植 Pinot Noir。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1981</div>
          <div class="timeline-content"><strong>⛰️ Santa Cruz Mountains AVA 設立</strong><p>以海拔等高線劃界，橫跨三郡，是加州最特殊的山地型 AVA 之一。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1982</div>
          <div class="timeline-content"><strong>🍷 Santa Barbara 雙雄同年創立</strong><p>Au Bon Climat 與 Qupé 同於 1982 年創立，分別成為加州 Pinot Noir 教父與 Rhône 品種先驅。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1989-1994</div>
          <div class="timeline-content"><strong>🇫🇷 Tablas Creek 引進正統 Rhône 克隆</strong><p>1989 年 Robert Haas 與法國 Beaucastel 家族合資創立，1994 年起自法國引進美國此前未曾種植的 Rhône 品種克隆。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">2004</div>
          <div class="timeline-content"><strong>🎬 電影《Sideways》上映</strong><p>掀起全美 Pinot Noir 熱潮，Santa Barbara 一夕成為國際葡萄酒旅遊目的地。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">2006</div>
          <div class="timeline-content"><strong>🏆 巴黎評判 30 週年重賽</strong><p>Santa Cruz Mountains 的 Ridge Monte Bello 1971 年份奪冠，證明加州 Cabernet 的長期陳年實力。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge modern">2014</div>
          <div class="timeline-content"><strong>📍 Paso Robles 一次核准 11 個子 AVA</strong><p>反映其地形、土壤與微氣候的高度多樣性，是加州近代規模最大的產區細分之一。</p></div>
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
            question: '哪部電影讓 Santa Barbara 的 Pinot Noir 聲名大噪，並使全美 Pinot Noir 銷量顯著攀升？',
            options: ['A. Bottle Shock（2008）', 'B. Sideways（2004）', 'C. Wine Country（2019）', 'D. Somm（2013）'],
            correct: 1,
            explanation: '2004 年的電影《Sideways》在 Santa Barbara 葡萄酒鄉拍攝，主角對 Pinot Noir 的激情讚美使全美 Pinot Noir 銷量顯著攀升，Santa Barbara 也一夕成為國際葡萄酒旅遊目的地。'
          },
          {
            type: 'single',
            question: 'Tablas Creek Vineyard 是由哪個法國 Rhône 名莊共同投資、引進 Rhône 品種到 Paso Robles 的？',
            options: ['A. Châteauneuf-du-Pape（名稱產區）', 'B. Château Beaucastel', 'C. Château Rayas', 'D. Domaine du Vieux Télégraphe'],
            correct: 1,
            explanation: 'Tablas Creek Vineyard 由葡萄酒進口商 Robert Haas 和法國 Châteauneuf-du-Pape 名莊 Château de Beaucastel 的 Perrin 家族於 1989 年合資創立，1994 年起自法國引進正統 Rhône 品種克隆，成為美國 Rhône 品種種植的先驅。'
          },
          {
            type: 'single',
            question: 'Santa Cruz Mountains 的 Ridge Monte Bello 以哪種罕見土壤著稱，賦予葡萄酒極強的陳年潛力？',
            options: ['A. 礫石沖積扇', 'B. Goldridge 細沙壤土', 'C. 石灰岩與綠岩（Limestone / Greenstone）', 'D. 火山岩'],
            correct: 2,
            explanation: 'Ridge Monte Bello 位於海拔約 400-820 公尺，擁有加州罕見的石灰岩與綠岩混合土壤，帶來天然高酸度和礦石感，使其 Cabernet Sauvignon 陳年潛力達 20-40 年，1971 年份在 2006 年「巴黎評判 30 週年重賽」中奪冠。'
          },
          {
            type: 'single',
            question: 'Paso Robles 西部（如 Adelaida District）與東部最大的差別是什麼？',
            options: ['A. 西部更熱，東部更涼爽', 'B. 西部海拔更高、受海霧影響多，更適合 Rhône 品種；東部更熱，適合 Cabernet', 'C. 西部種 Chardonnay，東部種 Pinot Noir', 'D. 兩者氣候完全相同'],
            correct: 1,
            explanation: 'Paso Robles 東西分野明顯：西部（Adelaida District 等）海拔較高、受太平洋海霧和涼風影響，石灰岩土壤，更適合 Rhône 品種；東部更溫暖乾燥，礫石土壤，Cabernet Sauvignon 和 Zinfandel 更佳。'
          },
          {
            type: 'single',
            question: 'Paso Robles 於哪一年一次核准了現行的 11 個官方子 AVA？',
            options: ['A. 2001 年', 'B. 2009 年', 'C. 2014 年', 'D. 2020 年'],
            correct: 2,
            explanation: '美國菸酒稅務貿易局（TTB）於 2014 年一次核准了 Paso Robles 內部 11 個子 AVA（包括 Adelaida District、Willow Creek District、Templeton Gap District 等），是加州近代規模最大的產區細分之一。'
          },
          {
            type: 'single',
            question: 'Livermore Valley 的 Concannon Vineyard 在 1961 年開創了什麼先例？',
            options: ['A. 全美第一款單一品種標示的 Petite Sirah', 'B. 全美第一款氣泡酒', 'C. 加州第一個 AVA', 'D. 第一款有機認證葡萄酒'],
            correct: 0,
            explanation: 'Concannon Vineyard 於 1961 年推出全美第一款以「Petite Sirah」品種標示上市的葡萄酒，在此之前 Petite Sirah 幾乎只被當作混釀配角，Concannon 因此被稱為「Petite Sirah 之父」。'
          },
          {
            type: 'single',
            question: '為什麼 Monterey County 的 Salinas Valley 會有全加州最強的午後海風？',
            options: ['A. 因為山谷完全封閉不通風', 'B. 蒙特雷灣的地形使谷地產生天然風洞效應，把冷空氣吸入內陸', 'C. 因為海拔特別高', 'D. 與海風無關，是人工灌溉造成的'],
            correct: 1,
            explanation: 'Monterey Bay 的獨特海岸地形，加上內陸的 Salinas Valley 呈漏斗狀開口朝向海灣，形成天然風洞效應，把冷涼海風強力吸入內陸，是全加州午後風力最強的產區之一，葡萄藤因此低矮彎曲生長、天然低產。'
          }
        ]
      }
    }
  }
]
