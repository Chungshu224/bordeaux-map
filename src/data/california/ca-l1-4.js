/**
 * CA-L1-4 Sonoma County 深度探索
 * 19 個 AVA、Pinot Noir 王國與可持續農業先鋒
 * 資料來源：discovercaliforniawines.com / sonomawine.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Sonoma County——比 Napa 更大、更多元，卻又常被忽略的葡萄酒巨人。19 個 AVA，從海岸 Pinot 到內陸 Zinfandel，Sonoma 是加州最多樣化的葡萄酒郡。1812 年便有葡萄種植記錄，99% 的種植面積已取得可持續農業認證，是全球農業環保的典範。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 掌握 Sonoma 的地理多樣性</h4>
            <p>理解從海岸（Sonoma Coast）到內陸（Alexander Valley）的氣候差異</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識最重要的子 AVA</h4>
            <p>Russian River Valley、Dry Creek Valley、Alexander Valley、Carneros 各有何特色</p>
          </div>
          <div class="point-item">
            <h4>🌿 了解 Sonoma 的可持續農業精神</h4>
            <p>理解為何 Sonoma 成為全球葡萄酒可持續農業的領導者</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Sonoma County 概覽',
    content: `<div class="sonoma-overview">
      <h3>🍷 Sonoma County — 加州最多樣化的葡萄酒郡</h3>
      <div class="overview-stats">
        <div class="stat-block"><div class="stat-number">19</div><div class="stat-desc">個 AVA（加州最多之一）</div></div>
        <div class="stat-block"><div class="stat-number">1812</div><div class="stat-desc">年首批葡萄種植（俄羅斯殖民者）</div></div>
        <div class="stat-block"><div class="stat-number">99%</div><div class="stat-desc">葡萄種植面積取得可持續認證</div></div>
        <div class="stat-block"><div class="stat-number">#1</div><div class="stat-desc">加州 Pinot Noir 種植面積最多的郡</div></div>
      </div>
      <div class="sonoma-desc">
        <p>Sonoma 以其農場文化著稱——農莊晚宴、葡萄園午餐、自然徒步與葡萄酒緊密結合。Healdsburg 是精品酒莊的聚集地；Petaluma 附近是有機農業的重心。</p>
        <p>與 Napa 不同，Sonoma 更大、更涼、品種更多元。Pinot Noir 和 Chardonnay 在涼爽的 Russian River Valley 達到顛峰；Zinfandel 在 Dry Creek Valley 的礫石土上最為輝煌；Cabernet 在溫暖的 Alexander Valley 也不遑多讓。</p>
      </div>
    </div>`
  },

  {
    title: 'Russian River Valley — Pinot 的聖地',
    content: `<div class="rrv-detail">
      <h3>🌊 Russian River Valley — 加州最優雅的 Pinot Noir</h3>
      <div class="rrv-content">
        <div class="rrv-description">
          <p>Russian River Valley 是加州 Pinot Noir 的精華所在。清晨海霧（從 Petaluma Gap 湧入）和溫暖下午，造就完美的葡萄生長條件——長而緩慢的成熟期帶來天然酸度和複雜香氣。</p>
          <div class="terroir-info">
            <div class="ti-item"><strong>氣候：</strong>涼爽，夏季海霧頻繁，生長季長達 6-7 個月</div>
            <div class="ti-item"><strong>土壤：</strong>Goldridge 細沙壤土（Goldridge Sandy Loam）——加州最著名的 Pinot Noir 土壤</div>
            <div class="ti-item"><strong>海拔：</strong>低海拔平原，海拔 20-150 公尺</div>
          </div>
        </div>
        <div class="rrv-style">
          <h4>Wine Style — Russian River Valley Pinot Noir</h4>
          <ul>
            <li>🍓 草莓、覆盆子、紅醋栗等鮮豔紅果香</li>
            <li>🌺 花香（紫羅蘭、玫瑰）</li>
            <li>🌿 新鮮香草（薄荷、肉桂）</li>
            <li>💎 天然高酸度（與勃根地 Pinot 相比）</li>
            <li>🥂 細膩絲滑的單寧</li>
          </ul>
        </div>
        <div class="rrv-producers">
          <h4>代表酒莊</h4>
          <div class="prod-list">
            <span>Williams Selyem（Pinot Noir 傳奇）</span>
            <span>J. Rochioli Winery（老藤 Pinot）</span>
            <span>Gary Farrell Vineyards</span>
            <span>Merry Edwards（單一葡萄園 Pinot）</span>
            <span>Iron Horse Vineyards（氣泡酒）</span>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Dry Creek Valley & Alexander Valley',
    content: `<div class="dcv-av-detail">
      <div class="sub-ava-section">
        <h3>⛏️ Dry Creek Valley — 加州 Zinfandel 的故鄉</h3>
        <p>Dry Creek Valley 是個緊湊的葡萄酒谷地，Healdsburg 以西，以礫石和粘土混合土壤著稱。這裡的 Zinfandel 老藤（有些已超過 100 年）釀造出加州最具特色的 Zinfandel 風格：濃郁的黑果、香料、胡椒感，酒體飽滿。</p>
        <div class="ava-highlights">
          <div class="highlight"><strong>土壤：</strong>礫石（Dry Creek Valley Benchland）和 Bale Loam 黏土</div>
          <div class="highlight"><strong>氣候：</strong>溫暖，下午有從 Petaluma Gap 湧入的涼風</div>
          <div class="highlight"><strong>主角：</strong>Zinfandel（75%+），也有 Cabernet Sauvignon、Petite Sirah</div>
        </div>
        <div class="key-producers">代表酒莊：Quivira、Ridge（Lytton Springs）、Ferrari-Carano、Preston Farm</div>
      </div>

      <div class="sub-ava-section">
        <h3>🌾 Alexander Valley — 溫暖的 Cabernet 谷地</h3>
        <p>Alexander Valley 是 Sonoma 最溫暖的 AVA，位於 Healdsburg 以北的內陸谷地，以更接近 Napa 的 Cabernet Sauvignon 風格著稱，但通常更柔和、更早熟。Sauvignon Blanc 和 Chardonnay 也有不錯表現。</p>
        <div class="ava-highlights">
          <div class="highlight"><strong>氣候：</strong>溫暖乾燥，受海霧影響少</div>
          <div class="highlight"><strong>主角：</strong>Cabernet Sauvignon、Sauvignon Blanc、Merlot</div>
          <div class="highlight"><strong>風格：</strong>比 Napa 更柔和圓潤的 Cabernet，更早達到飲用巔峰</div>
        </div>
        <div class="key-producers">代表酒莊：Silver Oak（Alexander Valley 標誌）、Jordan Winery、Hawkes Wine</div>
      </div>
    </div>`
  },

  {
    title: '更多重要子 AVA',
    content: `<div class="more-avas">
      <h3>📍 Sonoma 其他重要子 AVA</h3>
      <div class="avas-list">
        <div class="ava-item">
          <h4>Sonoma Coast</h4>
          <p>最大的 Sonoma AVA，沿太平洋海岸線延伸，涵蓋多種微氣候。最接近海岸的部分（「True Sonoma Coast」）是極涼爽的 Pinot Noir 和 Chardonnay 產地。代表：Flowers Vineyard。</p>
        </div>
        <div class="ava-item">
          <h4>Sonoma Valley</h4>
          <p>Sonoma 城周圍的歷史性 AVA，也是加州葡萄酒旅遊的起源地。溫和氣候，多元品種，是最早釀造優質葡萄酒的 Sonoma 地帶。代表：Hanzell Vineyards（1950年代起即模仿勃根地風格）。</p>
        </div>
        <div class="ava-item">
          <h4>Carneros（Los Carneros）</h4>
          <p>橫跨 Napa 和 Sonoma 南端，最涼爽的 AVA。以 Pinot Noir、Chardonnay 和起泡酒著稱。Sonoma 側代表：Cline Cellars、Buena Vista（加州最古老酒莊之一，1857年）。</p>
        </div>
        <div class="ava-item">
          <h4>Bennett Valley</h4>
          <p>Santa Rosa 以東的高海拔山谷，以 Syrah 和 Merlot 著稱，Matanzas Creek 是代表酒莊。</p>
        </div>
        <div class="ava-item">
          <h4>Green Valley of Russian River Valley</h4>
          <p>Russian River Valley 的子 AVA，更涼爽，是加州最佳起泡酒和 Pinot Noir 基酒的產地。Iron Horse Vineyards 在此製作享譽盛名的氣泡酒（曾是歷任美國總統御用）。</p>
        </div>
      </div>

      <div class="sustainability-section">
        <h3>🌿 Sonoma 的永續農業革命</h3>
        <p>Sonoma County Winegrowers 是全球第一個實現「99% 可持續認證」種植面積的葡萄酒產區。他們的三大可持續承諾：</p>
        <ul>
          <li>♻️ <strong>農場永續：</strong>減少農藥使用、保育生物多樣性、保護水源</li>
          <li>☀️ <strong>能源：</strong>大量使用太陽能，多個酒莊達到碳中和</li>
          <li>🌱 <strong>社區：</strong>支持農業工人居住、教育和健康</li>
        </ul>
      </div>
    </div>`
  },

  {
    type: 'quiz',
    title: '課程測驗',
    questions: [
      {
        id: 'ca4-q1',
        question: 'Russian River Valley 的標誌性土壤類型是什麼？',
        options: ['Rutherford 礫石', 'Goldridge Sandy Loam（金嶺細沙壤土）', '火山岩', '石灰岩'],
        answer: 1,
        explanation: 'Goldridge Sandy Loam（金嶺細沙壤土）是 Russian River Valley 的標誌性土壤，以排水良好、低肥力著稱，被認為是加州最適合 Pinot Noir 的土壤類型之一。'
      },
      {
        id: 'ca4-q2',
        question: 'Sonoma County 的 Dry Creek Valley 最以哪個品種著稱？',
        options: ['Pinot Noir', 'Cabernet Sauvignon', 'Zinfandel（包含老藤）', 'Chardonnay'],
        answer: 2,
        explanation: 'Dry Creek Valley 是加州 Zinfandel 的聖地，礫石土壤和溫暖氣候讓 Zinfandel 達到最佳表現，許多老藤（100+ 年）釀造的濃郁香料感 Zinfandel 是加州最具代表性的紅酒之一。'
      },
      {
        id: 'ca4-q3',
        question: 'Sonoma County 的永續農業有多大的認證比例？',
        options: ['約 50%', '約 75%', '約 90%', '99% 以上'],
        answer: 3,
        explanation: 'Sonoma County 有超過 99% 的葡萄種植面積取得可持續農業認證，是全球第一個達到此目標的葡萄酒產區，是全球農業可持續發展的典範。'
      },
      {
        id: 'ca4-q4',
        question: '以下哪個 Sonoma 子 AVA 以溫暖氣候和 Cabernet Sauvignon 著稱，與 Napa 風格最相似？',
        options: ['Russian River Valley', 'Sonoma Coast', 'Alexander Valley', 'Carneros'],
        answer: 2,
        explanation: 'Alexander Valley 是 Sonoma 最溫暖的 AVA，受太平洋海霧影響最少，以 Cabernet Sauvignon 著稱，風格與 Napa 相近但通常更柔和，Silver Oak 是最知名的代表酒莊。'
      }
    ]
  }
]
