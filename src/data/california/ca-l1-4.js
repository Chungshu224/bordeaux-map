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
    component: 'CaliforniaRegionMapSlide',
    title: 'Sonoma County 產區地圖',
    componentProps: {
      slide: {
        title: 'Sonoma County AVA 地圖',
        description: 'Napa 以西，多達 19 個子 AVA，從涼爽海岸到溫暖內陸，是加州最多樣化的產區',
        mapGroup: 'Sonoma County',
        highlightAVAs: ['Russian River Valley', 'Dry Creek Valley', 'Alexander Valley', 'Sonoma Coast'],
      }
    }
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
            <li>💎 天然高酸度（與布根地 Pinot 相比）</li>
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
          <p>Sonoma 城周圍的歷史性 AVA，也是加州葡萄酒旅遊的起源地。溫和氣候，多元品種，是最早釀造優質葡萄酒的 Sonoma 地帶。代表：Hanzell Vineyards（1950年代起即模仿布根地風格）。</p>
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
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 知識檢測',
        isFinalExam: false,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: 'Russian River Valley 的標誌性土壤類型是什麼？',
            options: ['A. Rutherford 礫石', 'B. Goldridge Sandy Loam（金嶺細沙壤土）', 'C. 火山岩', 'D. 石灰岩'],
            correct: 1,
            explanation: 'Goldridge Sandy Loam（金嶺細沙壤土）是 Russian River Valley 的標誌性土壤，以排水良好、低肥力著稱，被認為是加州最適合 Pinot Noir 的土壤類型之一。'
          },
          {
            type: 'single',
            question: 'Sonoma County 的 Dry Creek Valley 最以哪個品種著稱？',
            options: ['A. Pinot Noir', 'B. Cabernet Sauvignon', 'C. Zinfandel（包含老藤）', 'D. Chardonnay'],
            correct: 2,
            explanation: 'Dry Creek Valley 是加州 Zinfandel 的聖地，礫石土壤和溫暖氣候讓 Zinfandel 達到最佳表現，許多老藤（100+ 年）釀造的濃郁香料感 Zinfandel 是加州最具代表性的紅酒之一。'
          },
          {
            type: 'single',
            question: 'Sonoma County 的永續農業有多大的認證比例？',
            options: ['A. 約 50%', 'B. 約 75%', 'C. 約 90%', 'D. 99% 以上'],
            correct: 3,
            explanation: 'Sonoma County 有超過 99% 的葡萄種植面積取得可持續農業認證，是全球第一個達到此目標的葡萄酒產區，是全球農業可持續發展的典範。'
          },
          {
            type: 'single',
            question: '以下哪個 Sonoma 子 AVA 以溫暖氣候和 Cabernet Sauvignon 著稱，與 Napa 風格最相似？',
            options: ['A. Russian River Valley', 'B. Sonoma Coast', 'C. Alexander Valley', 'D. Carneros'],
            correct: 2,
            explanation: 'Alexander Valley 是 Sonoma 最溫暖的 AVA，受太平洋海霧影響最少，以 Cabernet Sauvignon 著稱，風格與 Napa 相近但通常更柔和，Silver Oak 是最知名的代表酒莊。'
          }
        ]
      }
    }
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '📋 Level 1 綜合評量',
        isFinalExam: true,
        passScore: 70,
        questions: [
          {
            type: 'single',
            question: '「巴黎評判（Judgment of Paris）」在哪一年舉行，震驚了世界葡萄酒界？',
            options: ['A. 1966年', 'B. 1971年', 'C. 1976年', 'D. 1981年'],
            correct: 2,
            explanation: '1976 年 5 月 24 日，Steven Spurrier 在巴黎舉辦的盲品賽中，加州 Stag\'s Leap Wine Cellars（紅酒）和 Chateau Montelena（白酒）分別奪冠，證明加州可以媲美法國最頂尖的葡萄酒。'
          },
          {
            type: 'single',
            question: '加州大約生產美國多少比例的葡萄酒？',
            options: ['A. 約 50%', 'B. 約 65%', 'C. 約 75%', 'D. 約 85%'],
            correct: 3,
            explanation: '加州生產美國約 85% 的葡萄酒，是美國葡萄酒產業的核心，年產量超過 8 億瓶。'
          },
          {
            type: 'single',
            question: 'AVA（美國法定葡萄種植區）與法國 AOC 最大的差異是什麼？',
            options: ['A. AVA 只能在加州使用', 'B. AVA 管制更嚴格，指定品種和產量', 'C. AVA 主要劃定地理邊界，不強制規定品種和釀造方法', 'D. AVA 要求 100% 原料來自產區'],
            correct: 2,
            explanation: 'AVA 主要劃定地理邊界，不像法國 AOC 那樣強制規定釀造品種、方法和產量。AVA 標示的葡萄酒只需 75% 原料來自該產區即可。'
          },
          {
            type: 'single',
            question: '哪個地理因素使 Napa Valley 南端（Carneros）比北端（Calistoga）更涼爽？',
            options: ['A. 海拔較高', 'B. San Pablo Bay 帶來的太平洋冷海霧', 'C. 降雨量較多', 'D. 土壤含水量高'],
            correct: 1,
            explanation: 'Napa Valley 南端緊鄰 San Pablo Bay，太平洋冷海霧每天湧入，使 Carneros 比北端的 Calistoga 涼爽許多，適合種植 Pinot Noir 和 Chardonnay。'
          },
          {
            type: 'single',
            question: 'Sonoma County 哪個品種的種植面積居加州全州之冠？',
            options: ['A. Cabernet Sauvignon', 'B. Chardonnay', 'C. Pinot Noir', 'D. Zinfandel'],
            correct: 2,
            explanation: 'Sonoma County 種植的 Pinot Noir 比加州任何其他郡都多，Russian River Valley 是最重要的子 AVA，以優雅的布根地風格 Pinot Noir 聞名。'
          },
          {
            type: 'single',
            question: '1976 年巴黎評判紅酒組冠軍來自 Napa Valley 的哪個子 AVA？',
            options: ['A. Oakville', 'B. Rutherford', 'C. Stags Leap District', 'D. Howell Mountain'],
            correct: 2,
            explanation: 'Stag\'s Leap Wine Cellars 1973 Cabernet Sauvignon 來自 Stags Leap District，在巴黎評判中奪冠，以絲滑單寧著稱，奠定了 Napa Valley 的世界地位。'
          },
          {
            type: 'single',
            question: 'Opus One 是哪兩個名莊合作創立的？',
            options: ['A. Chateau Margaux 和 Robert Mondavi', 'B. Mouton-Rothschild 和 Robert Mondavi', 'C. Petrus 和 Screaming Eagle', 'D. Lafite 和 Harlan Estate'],
            correct: 1,
            explanation: 'Opus One 由美國 Robert Mondavi 和法國 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 聯合創立於 1979 年，是新舊世界合作的歷史性象徵。'
          },
          {
            type: 'single',
            question: 'Russian River Valley 的標誌性土壤類型是什麼？',
            options: ['A. 礫石', 'B. Goldridge Sandy Loam（金嶺細沙壤土）', 'C. 火山岩', 'D. 石灰岩'],
            correct: 1,
            explanation: 'Goldridge Sandy Loam 是 Russian River Valley 的標誌性土壤，排水良好、低肥力，被認為是加州最適合 Pinot Noir 的土壤類型之一。'
          },
          {
            type: 'single',
            question: 'Sonoma County 的永續農業認證比例大約是多少？',
            options: ['A. 約 50%', 'B. 約 75%', 'C. 約 90%', 'D. 99% 以上'],
            correct: 3,
            explanation: 'Sonoma County 超過 99% 的葡萄種植面積取得可持續農業認證，是全球第一個達到此目標的葡萄酒產區。'
          },
          {
            type: 'single',
            question: '加州最北的葡萄酒產區群組（包含 Napa、Sonoma）稱為？',
            options: ['A. Central Coast', 'B. Sierra Foothills', 'C. North Coast', 'D. South Coast'],
            correct: 2,
            explanation: 'North Coast（北海岸）包含 Napa、Sonoma、Mendocino 和 Lake County，是加州最重要的葡萄酒產區群，擁有全加州逾半數的葡萄酒酒莊。'
          }
        ]
      }
    }
  }
]
