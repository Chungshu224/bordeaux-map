/**
 * CA-L1-2 加州葡萄酒產區地理與氣候
 * 六大產區群的地理分佈、氣候特徵與風土
 * 資料來源：discovercaliforniawines.com（California Wine Institute）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州南北長達 1,300 公里，東西橫跨山脈與海岸，地理多樣性造就了截然不同的葡萄酒風格。本課深入探索影響加州葡萄酒風土的關鍵地理因素——太平洋洋流、山谷地形、土壤類型——以及六大產區群各自的氣候個性。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 理解加州地理格局</h4>
            <p>掌握太平洋海岸山脈、中央谷地（Central Valley）、海岸山脈對氣候的影響</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 氣候差異的核心驅動力</h4>
            <p>理解為何納帕南端（Carneros）和北端（Calistoga）風格迥異，儘管只距離 50 公里</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 各產區群的特色</h4>
            <p>能描述六大產區群的地理特徵、代表 AVA 和主要葡萄品種</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: '加州地理的三大驅動力',
    content: `<div class="ca-geography">
      <h3>🌍 塑造加州葡萄酒風土的三個關鍵地理因素</h3>
      <div class="geo-factors">
        <div class="geo-factor pacific">
          <h4>① 太平洋與加利福尼亞洋流</h4>
          <p>加州沿岸流動的<strong>加利福尼亞寒流（California Current）</strong>是天然空調系統。冷水上升帶來低溫濃霧，每天清晨從金門海峽和蒙特雷灣湧入內陸，降低葡萄園溫度。</p>
          <div class="effect-list">
            <div class="effect">⬇️ 降低夏季最高溫</div>
            <div class="effect">🌫️ 帶來清晨海霧（延遲葡萄成熟）</div>
            <div class="effect">🍇 保留天然酸度，適合 Pinot Noir、Chardonnay</div>
          </div>
          <p class="example">例：Carneros（位於 Napa 和 Sonoma 南端）就因鄰近 San Pablo Bay，是全加州最涼爽的產區之一。</p>
        </div>

        <div class="geo-factor mountains">
          <h4>② 海岸山脈（Coast Ranges）</h4>
          <p>南北走向的<strong>海岸山脈</strong>是阻擋海霧的屏障。山脈的開口（如金門海峽）決定了海霧能滲透多深的內陸。</p>
          <div class="valley-examples">
            <div class="valley">
              <strong>Napa Valley（東西向山谷）：</strong>
              <p>南端開口對著 San Pablo Bay，海霧可深入整個谷地；北端 Calistoga 最受保護，是全谷最溫暖的點。</p>
            </div>
            <div class="valley">
              <strong>Santa Ynez Valley（橫向山谷，東西走向）：</strong>
              <p>山谷直接面向太平洋，成為全加州最涼爽的 Pinot Noir 產區之一（Santa Rita Hills 子 AVA）。</p>
            </div>
          </div>
        </div>

        <div class="geo-factor elevation">
          <h4>③ 海拔高度</h4>
          <p>高海拔降低溫度、增加晝夜溫差，賦予葡萄酒更高的酸度和複雜度。</p>
          <div class="elevation-examples">
            <div class="elev-item"><strong>Ridge Monte Bello（Santa Cruz Mountains）：</strong>海拔約 800 公尺，是加州海拔最高、最具陳年潛力的 Cabernet 產地之一</div>
            <div class="elev-item"><strong>Spring Mountain / Diamond Mountain（Napa）：</strong>600-800 公尺山地 AVA，帶來更緊緻、濃縮的單寧結構</div>
            <div class="elev-item"><strong>Sierra Foothills：</strong>300-1000 公尺丘陵，帶來自然的葡萄濃縮度</div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'North Coast（北海岸）產區群',
    content: `<div class="region-detail north-coast">
      <h3>🌉 North Coast — 全球最知名的葡萄酒地帶</h3>
      <p class="region-intro">North Coast 涵蓋 Napa、Sonoma、Mendocino 和 Lake County，擁有超過一半加州酒莊，是全球最重要的精品葡萄酒產地之一。</p>

      <div class="sub-regions">
        <div class="sub-region napa">
          <h4>🏆 Napa Valley</h4>
          <ul>
            <li><strong>地理：</strong>南北走向山谷，南接 San Pablo Bay，北至 Calistoga</li>
            <li><strong>面積：</strong>約 45,342 英畝葡萄園（比波爾多小 15 倍）</li>
            <li><strong>氣候：</strong>地中海型，南涼北暖，年降雨集中在冬季</li>
            <li><strong>主角品種：</strong>Cabernet Sauvignon（占 60%+）</li>
            <li><strong>子 AVA：</strong>16 個，包含 Oakville、Rutherford、Stags Leap District 等</li>
            <li><strong>特色：</strong>1839 年首批葡萄；1981 年首個 AVA；地中海氣候；全美首個農業保護區</li>
          </ul>
        </div>

        <div class="sub-region sonoma">
          <h4>🍷 Sonoma County</h4>
          <ul>
            <li><strong>地理：</strong>Napa 以西，多個山谷與海岸地帶</li>
            <li><strong>AVA 數量：</strong>19 個（加州最多之一）</li>
            <li><strong>氣候：</strong>多元——從海岸涼爽（Sonoma Coast）到內陸溫暖（Alexander Valley）</li>
            <li><strong>主角品種：</strong>Pinot Noir（加州全州最多）、Chardonnay、Zinfandel</li>
            <li><strong>特色：</strong>1812 年首批葡萄園；99% 葡萄種植面積取得可持續認證</li>
            <li><strong>重要子 AVA：</strong>Russian River Valley（Pinot）、Dry Creek Valley（Zinfandel）、Alexander Valley（Cab）</li>
          </ul>
        </div>

        <div class="sub-region mendocino">
          <h4>🌿 Mendocino County</h4>
          <ul>
            <li><strong>地理：</strong>Sonoma 以北，Anderson Valley 是核心子 AVA</li>
            <li><strong>特色：</strong>有機和生物動力農法的先鋒；Anderson Valley 以優雅 Pinot Noir 和 Alsace 品種著稱</li>
            <li><strong>主角品種：</strong>Pinot Noir、Chardonnay、Zinfandel、Gewürztraminer</li>
          </ul>
        </div>

        <div class="sub-region lake">
          <h4>🏞️ Lake County</h4>
          <ul>
            <li><strong>地理：</strong>以加州最大天然淡水湖 Clear Lake 為中心</li>
            <li><strong>特色：</strong>8 個 AVA；葡萄種植始於 1870 年代；火山岩（Mt. Konocti）土壤</li>
            <li><strong>主角品種：</strong>Cabernet Sauvignon、Sauvignon Blanc（高品質且平價）</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Central Coast（中央海岸）產區群',
    content: `<div class="region-detail central-coast">
      <h3>🌊 Central Coast — 從 Livermore 到 Santa Barbara 的海岸精品帶</h3>
      <p class="region-intro">Central Coast 沿太平洋海岸延伸，涵蓋多個個性鮮明的子產區，是加州最多樣化的葡萄酒區域之一。太平洋海霧是這裡的靈魂。</p>

      <div class="sub-regions">
        <div class="sub-region livermore">
          <h4>🔬 Livermore Valley</h4>
          <p>舊金山灣區東緣，1840 年代首次種植葡萄。加州 80% 的 Chardonnay 基因可追溯至此；C.H. Wente 和 James Concannon 兩大家族開創傳統，至今傳承。</p>
        </div>

        <div class="sub-region monterey">
          <h4>🌬️ Monterey County</h4>
          <p>蒙特雷灣的強烈海風帶來極涼爽氣候，是加州風量最大的產區。葡萄藤必須逆風生長，造就天然低產量和濃縮風味。以 Chardonnay、Pinot Noir 和 Riesling 著稱。</p>
        </div>

        <div class="sub-region pasoro">
          <h4>☀️ Paso Robles</h4>
          <p>中央海岸最熱區域，西區（較涼）和東區（較熱）風格迥異。以 Rhône 風格葡萄酒聞名（Syrah、Grenache、Mourvèdre），但 Cabernet Sauvignon 和 Zinfandel 也表現卓越。DAOU、Justin 是代表酒莊。</p>
        </div>

        <div class="sub-region scm">
          <h4>🏔️ Santa Cruz Mountains</h4>
          <p>舊金山南方山地 AVA，以罕見石灰岩土壤著稱。Ridge Vineyards（Monte Bello）生產加州最具陳年潛力的 Cabernet Sauvignon 之一，2006 年「巴黎評判 30 周年重賽」中名列前茅。</p>
        </div>

        <div class="sub-region santabarbara">
          <h4>🎬 Santa Barbara County</h4>
          <p>因電影《Sideways》（2004）而聲名大噪的 Pinot Noir 聖地。橫向山谷直接面向太平洋，帶來加州最優雅的 Pinot Noir（Santa Rita Hills）和 Chardonnay。Santa Ynez Valley 也是 Sauvignon Blanc 和 Syrah 的優質產地。</p>
          <div class="key-avas">
            <span class="ava-tag">Santa Rita Hills（涼爽 Pinot）</span>
            <span class="ava-tag">Happy Canyon（Bordeaux 品種）</span>
            <span class="ava-tag">Ballard Canyon（Syrah）</span>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '其他產區群詳解',
    content: `<div class="other-regions">
      <h3>⛏️ Sierra Foothills — 淘金熱的葡萄酒遺產</h3>
      <div class="region-block">
        <p>内華達山脈西麓，海拔 300-1000 公尺的丘陵地帶。1850 年代加州淘金熱帶來大量移民，也帶來了種植葡萄的傳統。Amador County（Shenandoah Valley）的 Zinfandel 老藤，有些樹齡超過 130 年，被稱為「老藤女王」（Old Vine Queen）。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Shenandoah Valley（Amador）、Fair Play（El Dorado）</span>
          <span>🍇 Zinfandel 老藤、Barbera、Syrah、義式品種</span>
        </div>
      </div>

      <h3>🌾 Inland Valleys（內陸谷地）</h3>
      <div class="region-block">
        <p>包含中央谷地（Central Valley）從 Sacramento 到 Fresno 的廣大平原，是加州葡萄酒量產的引擎。但 Lodi AVA 是例外——這裡的精品 Old Vine Zinfandel（包括部分百年老藤）正在創立自己的頂級聲譽。Delta 涼風帶來意外的天然酸度。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Lodi、Clarksburg、Madera</span>
          <span>🍇 Zinfandel、Chardonnay、Merlot、Petite Sirah</span>
        </div>
      </div>

      <h3>☀️ Southern California（南加州）</h3>
      <div class="region-block">
        <p>Temecula Valley（特梅庫拉谷）是南加州最重要的葡萄酒旅遊目的地，距洛杉磯約 90 分鐘車程。Vail Gap 帶來天然海霧降溫。San Diego County 也有日益增長的葡萄酒旅遊社群。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Temecula Valley、Ramona Valley</span>
          <span>🍇 Cabernet Franc、Chardonnay、Sauvignon Blanc</span>
        </div>
      </div>

      <h3>🌲 Far North California（遠北加州）</h3>
      <div class="region-block">
        <p>涵蓋 Humboldt、Trinity、Shasta 等縣，是加州葡萄酒的最後邊疆。涼爽濕潤的氣候適合 Pinot Noir 和 Riesling，少數先驅酒莊正在探索這片原始土地的潛力。</p>
        <div class="key-facts-small">
          <span>🍇 Pinot Noir、Riesling、涼氣候品種</span>
          <span>特色：幾乎零商業開發，是加州葡萄酒的下一個前沿</span>
        </div>
      </div>
    </div>`
  },

  {
    title: '產區比較一覽',
    content: `<div class="region-comparison">
      <h3>📊 加州六大產區群一覽比較</h3>
      <table class="compare-table">
        <thead>
          <tr>
            <th>產區群</th>
            <th>氣候特徵</th>
            <th>代表 AVA</th>
            <th>主角品種</th>
            <th>特色標籤</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🌉 North Coast</td>
            <td>地中海型，局部涼爽</td>
            <td>Napa Valley、Russian River Valley</td>
            <td>Cab Sauv、Pinot Noir</td>
            <td>全球頂級精品</td>
          </tr>
          <tr>
            <td>🌊 Central Coast</td>
            <td>海洋型，海霧影響大</td>
            <td>Paso Robles、Santa Rita Hills</td>
            <td>Pinot Noir、Chardonnay、Syrah</td>
            <td>優雅酸度、Rhône 品種</td>
          </tr>
          <tr>
            <td>⛏️ Sierra Foothills</td>
            <td>山地，晝夜溫差大</td>
            <td>Shenandoah Valley（Amador）</td>
            <td>Zinfandel 老藤</td>
            <td>老藤傳奇、淘金遺產</td>
          </tr>
          <tr>
            <td>🌾 Inland Valleys</td>
            <td>大陸型，炎熱</td>
            <td>Lodi、Clarksburg</td>
            <td>Zinfandel、Chardonnay</td>
            <td>量產中心、Lodi 老藤</td>
          </tr>
          <tr>
            <td>☀️ Southern CA</td>
            <td>地中海型，溫暖</td>
            <td>Temecula Valley</td>
            <td>Cab Franc、Chardonnay</td>
            <td>葡萄酒旅遊、溫暖陽光</td>
          </tr>
          <tr>
            <td>🌲 Far North</td>
            <td>涼爽濕潤</td>
            <td>尚在開發中</td>
            <td>Pinot Noir、Riesling</td>
            <td>葡萄酒新邊疆</td>
          </tr>
        </tbody>
      </table>
    </div>`
  },

  {
    type: 'quiz',
    title: '課程測驗',
    questions: [
      {
        id: 'ca2-q1',
        question: '哪個地理因素是造成 Napa Valley 南端（Carneros）比北端（Calistoga）涼爽的主因？',
        options: ['海拔高度', 'San Pablo Bay 帶來的太平洋海霧', '降雨量較多', '土壤含水量高'],
        answer: 1,
        explanation: 'Napa Valley 南端緊鄰 San Pablo Bay，太平洋冷海霧每天湧入，使南端（包含 Carneros）比北端 Calistoga 涼爽許多，適合種植 Pinot Noir 和 Chardonnay。'
      },
      {
        id: 'ca2-q2',
        question: '「Judgment of Paris 30 周年重賽」中名列前茅的 Santa Cruz Mountains 知名 Cabernet 酒莊是？',
        options: ['Opus One', 'Ridge Vineyards（Monte Bello）', 'Chateau Montelena', 'Stag\'s Leap'],
        answer: 1,
        explanation: 'Ridge Vineyards 的 Monte Bello 以罕見石灰岩土壤著稱，在 2006 年「巴黎評判 30 周年重賽」中，Monte Bello 名列前茅，印證加州 Cabernet 的陳年潛力。'
      },
      {
        id: 'ca2-q3',
        question: 'Sonoma County 以哪個品種的種植面積居加州全州之冠？',
        options: ['Cabernet Sauvignon', 'Chardonnay', 'Pinot Noir', 'Zinfandel'],
        answer: 2,
        explanation: 'Sonoma County 種植的 Pinot Noir 比加州任何其他郡都多，Russian River Valley 是最重要的子 AVA，以優雅、具勃根地風格的 Pinot Noir 聞名。'
      },
      {
        id: 'ca2-q4',
        question: 'Sierra Foothills 的 Amador County 以什麼特色著稱？',
        options: ['Cabernet Sauvignon 頂級酒款', 'Zinfandel 老藤，有些樹齡超過 130 年', '冷氣候 Pinot Noir', 'Chardonnay 的發源地'],
        answer: 1,
        explanation: 'Sierra Foothills 的 Amador County（Shenandoah Valley）以 Zinfandel 老藤著稱，部分葡萄藤樹齡超過 130 年，是加州葡萄酒中的珍貴遺產。'
      }
    ]
  }
]
