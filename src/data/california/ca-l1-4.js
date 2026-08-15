/**
 * CA-L1-4 Sonoma County：19 個 AVA 的多元王國
 * 19 個 AVA、Pinot Noir 王國、老藤 Zinfandel 與可持續農業先鋒
 * 資料來源：Sonoma County Vintners（sonomawine.com）、Sonoma County Winegrowers（sonomawinegrape.org）、
 * Discover California Wines、TTB AVA 認定紀錄（ttb.gov）、Wikipedia 各 AVA 條目、
 * Williams Selyem／Iron Horse Vineyards／Hanzell Vineyards／Buena Vista Winery／Jordan Winery 官網、
 * Decanter、Sonoma County Tourism
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          Sonoma County——比 Napa 更大、更多元，卻又常被忽略的葡萄酒巨人。19 個 AVA，從海岸 Pinot 到內陸 Zinfandel，Sonoma 是加州最多樣化的葡萄酒郡。1812 年俄羅斯殖民者便在 Fort Ross 一帶留下葡萄種植記錄，1857 年「加州釀酒之父」Agoston Haraszthy 在此創立 Buena Vista Winery，近 99% 的種植面積已取得第三方可持續農業認證，是全球農業環保的典範。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 掌握 Sonoma 的地理多樣性</h4>
            <p>理解從海岸（Sonoma Coast）到內陸（Alexander Valley）的氣候差異，以及 19 個 AVA 的整體架構</p>
          </div>
          <div class="point-item">
            <h4>🍷 認識最重要的子 AVA</h4>
            <p>Russian River Valley、Dry Creek Valley、Alexander Valley、Carneros 各有何特色，以及較少被談及的 Chalk Hill、Moon Mountain、Fort Ross-Seaview 等產區</p>
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
    highlights: [
      { id: 1, icon: '🍇', title: '19 個 AVA', content: 'Sonoma 是加州擁有 AVA 數量最多的郡之一，橫跨海岸、山谷與內陸多種微氣候' },
      { id: 2, icon: '🌿', title: '近乎全面永續認證', content: '2019 年達成近 99% 種植面積第三方可持續認證，是全球第一個達成此目標的葡萄酒產區' }
    ],
    content: `<div class="sonoma-overview">
      <h3>🍷 Sonoma County — 加州最多樣化的葡萄酒郡</h3>
      <div class="overview-stats">
        <div class="stat-block"><div class="stat-number">19</div><div class="stat-desc">個 AVA（加州擁有 AVA 數量最多的郡之一）</div></div>
        <div class="stat-block"><div class="stat-number">1812</div><div class="stat-desc">年首批葡萄種植記錄（Fort Ross 俄羅斯殖民者）</div></div>
        <div class="stat-block"><div class="stat-number">99%</div><div class="stat-desc">葡萄種植面積取得第三方可持續認證</div></div>
        <div class="stat-block"><div class="stat-number">#1</div><div class="stat-desc">加州 Pinot Noir 種植面積最多的郡</div></div>
      </div>
      <div class="sonoma-desc">
        <p>Sonoma 以其農場文化著稱——農莊晚宴、葡萄園午餐、自然徒步與葡萄酒緊密結合。Healdsburg 是精品酒莊的聚集地；Petaluma 附近是有機農業的重心。</p>
        <p>與 Napa 不同，Sonoma 更大、更涼、品種更多元。Pinot Noir 和 Chardonnay 在涼爽的 Russian River Valley 達到顛峰；Zinfandel 在 Dry Creek Valley 的礫石土上最為輝煌；Cabernet 在溫暖的 Alexander Valley 也不遑多讓。19 個 AVA 中，有些橫跨多個微氣候帶（如涵蓋全郡海岸線的 Sonoma Coast），也有些是近十年才劃定的小型精品產區（如 2022 年才獨立的 West Sonoma Coast）。</p>
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
    title: 'Sonoma County 歷史脈絡',
    content: `<div class="sonoma-history">
      <h3>🕐 從俄羅斯堡壘到永續典範：Sonoma 歷史時間軸</h3>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-badge ancient">1812</div>
          <div class="timeline-content"><strong>🏰 Fort Ross 俄羅斯殖民地</strong><p>俄羅斯－美國公司在 Sonoma 海岸建立 Fort Ross 堡壘，殖民者於周邊種下葡萄，留下加州最早的葡萄種植記錄之一，比 Napa 的 George Yount 還早了近 30 年。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1857</div>
          <div class="timeline-content"><strong>🏛️ Buena Vista Winery 創立</strong><p>匈牙利裔的「加州釀酒之父」Agoston Haraszthy 在 Sonoma 創立 Buena Vista Winery，是加州第一座具規模的精品酒莊，他從歐洲引進逾 300 個葡萄品種。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge renaissance">1880s</div>
          <div class="timeline-content"><strong>根瘤蚜蟲危機</strong><p>與加州其他產區同樣遭受根瘤蚜蟲病重創，需嫁接抗蟲砧木才得以延續種植。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge austria">1919–1933</div>
          <div class="timeline-content"><strong>禁酒令衝擊</strong><p>如同 Napa，Sonoma 產業幾乎停擺，僅少數酒莊以宗教或家用釀酒名義倖存。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1953</div>
          <div class="timeline-content"><strong>🍇 Hanzell Vineyards 創立</strong><p>前美國駐義大利大使 James D. Zellerbach 創立 Hanzell，是全美第一家全面採用法國橡木桶陳年、並使用小型不鏽鋼溫控發酵槽的酒莊，深刻影響了加州 Chardonnay 與 Pinot Noir 的釀造技術演進。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1972</div>
          <div class="timeline-content"><strong>🍷 Alexander Valley 精品酒莊興起</strong><p>Jordan Vineyard & Winery 由 Tom 與 Sally Jordan 創立，率先在 Alexander Valley 種下波爾多式 Cabernet Sauvignon，帶動該產區走向精品化。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1976</div>
          <div class="timeline-content"><strong>🥂 Iron Horse Vineyards 創立</strong><p>Audrey 與 Barry Sterling 在 Green Valley of Russian River Valley 創立 Iron Horse，日後成為連續多任美國總統白宮御用氣泡酒（自 1985 年雷根－戈巴契夫高峰會起）。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1981–1990</div>
          <div class="timeline-content"><strong>📜 早期 AVA 陸續認定</strong><p>Sonoma Valley（1981）、Russian River Valley（1983）、Dry Creek Valley（1983）、Alexander Valley（1984）、Chalk Hill、Knights Valley（1983）等核心產區相繼獲 TTB 認定。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1981</div>
          <div class="timeline-content"><strong>👩‍🍳 Williams Selyem 崛起</strong><p>Burt Williams 與 Ed Selyem 從車庫自釀起家，1985 年推出來自 Rochioli Vineyard 的單一園 Pinot Noir，開創「vineyard-designate」單一園裝瓶風潮，奠定 Russian River Valley 世界級 Pinot Noir 產區的地位。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge modern">2011–2022</div>
          <div class="timeline-content"><strong>🧩 新一代 AVA 持續劃定</strong><p>Fort Ross-Seaview、Pine Mountain-Cloverdale Peak（2011）、Moon Mountain District Sonoma County（2013）、Petaluma Gap（2017）、West Sonoma Coast（2022，從 Sonoma Coast 分割獨立）陸續獲認證，反映產區對涼爽海岸微氣候的精細化認識。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge modern">2014–2019</div>
          <div class="timeline-content"><strong>🌿 永續農業運動</strong><p>Sonoma County Winegrowers 於 2014 年宣示要成為全球最永續的葡萄酒產區，經過五年努力，2019 年 9 月達成近 99% 種植面積通過第三方可持續認證。</p></div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Russian River Valley — Pinot 的聖地',
    content: `<div class="rrv-detail">
      <h3>🌊 Russian River Valley — 加州最優雅的 Pinot Noir</h3>
      <div class="rrv-content">
        <div class="rrv-description">
          <p>Russian River Valley（1983 年認定 AVA）是加州 Pinot Noir 的精華所在。清晨海霧（從 Petaluma Gap 湧入）和溫暖下午，造就完美的葡萄生長條件——長而緩慢的成熟期帶來天然酸度和複雜香氣。</p>
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
            <span>Williams Selyem（1981 年創立，1985 年首推 Rochioli 單一園 Pinot，開創 vineyard-designate 風潮）</span>
            <span>J. Rochioli Vineyards（老藤 Pinot 的關鍵葡萄園供應者）</span>
            <span>Gary Farrell Vineyards</span>
            <span>Merry Edwards（1997 年由釀酒師 Merry Edwards 創立，是 Sonoma 最早的女性主導精品酒莊之一）</span>
            <span>Kistler Vineyards（1978 年創立，布根地風格 Chardonnay 與 Pinot Noir 的代表）</span>
            <span>Iron Horse Vineyards（氣泡酒，1976 年創立於 Green Valley 子 AVA）</span>
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
        <p>Dry Creek Valley（1983 年認定 AVA）是個緊湊的葡萄酒谷地，Healdsburg 以西，以礫石和粘土混合土壤著稱。這裡的 Zinfandel 老藤（有些已超過 100 年）釀造出加州最具特色的 Zinfandel 風格：濃郁的黑果、香料、胡椒感，酒體飽滿。</p>
        <div class="ava-highlights">
          <div class="highlight"><strong>土壤：</strong>礫石（Dry Creek Valley Benchland）和 Bale Loam 黏土</div>
          <div class="highlight"><strong>氣候：</strong>溫暖，下午有從 Petaluma Gap 湧入的涼風</div>
          <div class="highlight"><strong>主角：</strong>Zinfandel（種植面積占比最高），也有 Cabernet Sauvignon、Petite Sirah</div>
        </div>
        <div class="key-producers">代表酒莊：Quivira（1987 年創立）、Ridge（Lytton Springs 老藤園）、Ferrari-Carano（1981 年由 Don 與 Rhonda Carano 創立，1985 年於 Dry Creek Valley 動工建莊）、Preston Farm</div>
      </div>

      <div class="sub-ava-section">
        <h3>🌾 Alexander Valley — 溫暖的 Cabernet 谷地</h3>
        <p>Alexander Valley（1984 年認定 AVA）是 Sonoma 最溫暖的 AVA 之一，位於 Healdsburg 以北的內陸谷地，以更接近 Napa 的 Cabernet Sauvignon 風格著稱，但通常更柔和、更早熟。Sauvignon Blanc 和 Chardonnay 也有不錯表現。</p>
        <div class="ava-highlights">
          <div class="highlight"><strong>氣候：</strong>溫暖乾燥，受海霧影響少</div>
          <div class="highlight"><strong>主角：</strong>Cabernet Sauvignon、Sauvignon Blanc、Merlot</div>
          <div class="highlight"><strong>風格：</strong>比 Napa 更柔和圓潤的 Cabernet，更早達到飲用巔峰</div>
        </div>
        <div class="key-producers">代表酒莊：Silver Oak（其標誌性 Alexander Valley Cabernet 的葡萄來源地）、Jordan Winery（1972 年由 Tom 與 Sally Jordan 創立，波爾多風格的先驅）、Hawkes Wine</div>
      </div>
    </div>`
  },

  {
    title: '更多重要子 AVA（一）：海岸與山地',
    content: `<div class="more-avas">
      <h3>📍 涼爽海岸與山地子 AVA</h3>
      <div class="avas-list">
        <div class="ava-item">
          <h4>Sonoma Coast（1987 年認定，Sonoma 面積最大的 AVA）</h4>
          <p>橫跨整個郡的海岸線，涵蓋多種微氣候，涵蓋範圍極廣、甚至包含部分內陸較溫暖地帶，因此常被業界戲稱「太大而失去意義」。最接近海岸的部分（「True Sonoma Coast」）是極涼爽的 Pinot Noir 和 Chardonnay 產地。代表：Flowers Vineyard（1991 年創立）。</p>
        </div>
        <div class="ava-item">
          <h4>West Sonoma Coast（2022 年認定，從 Sonoma Coast 分割獨立）</h4>
          <p>正是為了解決 Sonoma Coast 範圍過大、風格過於分歧的問題，一群沿岸酒莊於 2022 年成功申請獨立為 West Sonoma Coast AVA，專指真正緊鄰太平洋、受海霧與海風強烈影響的狹長地帶，是加州近年最受矚目的冷氣候 Pinot Noir 新興產區之一。</p>
        </div>
        <div class="ava-item">
          <h4>Fort Ross-Seaview（2011 年認定）</h4>
          <p>海拔 300-450 公尺的山脊型 AVA，位於雲霧之上，日照充足但氣候仍偏涼爽，是加州極少數「高海拔＋濱海」雙重條件並存的產區，以緊緻結構的 Pinot Noir 與 Syrah 聞名。</p>
        </div>
        <div class="ava-item">
          <h4>Petaluma Gap（2017 年認定，橫跨 Sonoma／Marin 兩郡）</h4>
          <p>因海岸山脈的缺口地形而得名，強勁而持續的午後海風（時速可達 30 公里以上）大幅降低白天氣溫，是加州少數官方明確以「風」作為核心風土敘事的 AVA，以酒體單寧結構緊緻的 Pinot Noir 聞名。</p>
        </div>
        <div class="ava-item">
          <h4>Sonoma Mountain（1985 年認定）</h4>
          <p>位於 Sonoma Valley 西側山地，海拔高於周邊雲霧線，日照充足、排水良好，是 Sonoma 少數的山地 AVA 之一，以結構扎實的 Cabernet Sauvignon 見長。</p>
        </div>
        <div class="ava-item">
          <h4>Moon Mountain District Sonoma County（2013 年認定）</h4>
          <p>Mayacamas 山脈南端的火山岩山地 AVA，與 Napa 的 Mount Veeder 隔山相望，土壤貧瘠、產量低，Cabernet Sauvignon 結構緊實，是近年逐漸受到關注的精品山地產區。</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '更多重要子 AVA（二）：河谷與內陸產區',
    content: `<div class="more-avas">
      <h3>📍 歷史河谷與內陸子 AVA</h3>
      <div class="avas-list">
        <div class="ava-item">
          <h4>Sonoma Valley（1981 年認定，Sonoma 最早的 AVA 之一）</h4>
          <p>Sonoma 城周圍的歷史性 AVA，也是加州葡萄酒旅遊的起源地——1857 年 Haraszthy 便在此創立 Buena Vista Winery。溫和氣候，多元品種，是最早釀造優質葡萄酒的 Sonoma 地帶。代表：Hanzell Vineyards（1953 年起即模仿布根地風格，是全美第一家全面採用法國橡木桶的酒莊）。</p>
        </div>
        <div class="ava-item">
          <h4>Carneros（Los Carneros，1983 年認定，橫跨 Napa／Sonoma）</h4>
          <p>橫跨 Napa 和 Sonoma 南端，最涼爽的 AVA。以 Pinot Noir、Chardonnay 和起泡酒著稱。Sonoma 側代表：Cline Cellars、Buena Vista（加州最古老酒莊之一，1857 年創立）。</p>
        </div>
        <div class="ava-item">
          <h4>Bennett Valley（2003 年認定）</h4>
          <p>Santa Rosa 以東的高海拔山谷，三面環山，涼風從 Petaluma Gap 灌入，以 Syrah 和 Merlot 著稱，Matanzas Creek（1977 年創立）是代表酒莊。</p>
        </div>
        <div class="ava-item">
          <h4>Chalk Hill（1983 年認定）</h4>
          <p>Russian River Valley 東北側的獨立子 AVA，因火山灰白色土壤而得名（實為浮石與火山灰沉積，並非真正白堊），排水極佳，以 Chardonnay 與 Sauvignon Blanc 見長。</p>
        </div>
        <div class="ava-item">
          <h4>Knights Valley（1983 年認定）</h4>
          <p>Sonoma 最東側、與 Napa 的 Calistoga 相鄰的溫暖谷地，火山岩土壤，以 Cabernet Sauvignon 著稱，長期是 Beringer（Napa 酒莊）等品牌的重要葡萄來源地。</p>
        </div>
        <div class="ava-item">
          <h4>Rockpile（2002 年認定）</h4>
          <p>Dry Creek Valley 西北方的山地 AVA，全區海拔至少 244 公尺以上（高於周邊雲霧線），是加州以「海拔門檻」劃定邊界的少數 AVA 之一，以高濃縮度的 Zinfandel 與 Cabernet 聞名。</p>
        </div>
        <div class="ava-item">
          <h4>Green Valley of Russian River Valley（1983 年認定）</h4>
          <p>Russian River Valley 的子 AVA，更涼爽，是加州最佳起泡酒和 Pinot Noir 基酒的產地。Iron Horse Vineyards 在此製作享譽盛名的氣泡酒（曾是歷任美國總統御用）。</p>
        </div>
        <div class="ava-item">
          <h4>Fountaingrove District（2015 年認定）、Pine Mountain-Cloverdale Peak（2011 年認定）、Northern Sonoma（1990 年認定，涵蓋多個子 AVA 的大範圍傘型 AVA）</h4>
          <p>三個較晚劃定或較少被談論的產區：Fountaingrove District 位於 Santa Rosa 東北的火山岩丘陵；Pine Mountain-Cloverdale Peak 是海拔最高的 Sonoma AVA 之一，橫跨 Sonoma／Mendocino 郡界；Northern Sonoma 則是一個涵蓋多個子 AVA（含 Alexander Valley、Dry Creek Valley 等）的傘型 AVA，較少單獨用於酒標標示。</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Sonoma County 19 個 AVA 速覽表',
    content: `<div class="sonoma-ava-table">
      <h3>📊 19 個 AVA 一覽（依認定年份排序）</h3>
      <table class="compare-table">
        <thead>
          <tr><th>AVA</th><th>認定年份</th><th>氣候特徵</th><th>主角品種</th></tr>
        </thead>
        <tbody>
          <tr><td>Sonoma Valley</td><td>1981</td><td>溫和，歷史核心</td><td>多元品種</td></tr>
          <tr><td>Los Carneros（跨 Napa）</td><td>1983</td><td>最涼爽，海灣海霧</td><td>Pinot Noir、Chardonnay</td></tr>
          <tr><td>Russian River Valley</td><td>1983</td><td>涼爽，晨霧頻繁</td><td>Pinot Noir、Chardonnay</td></tr>
          <tr><td>Dry Creek Valley</td><td>1983</td><td>溫暖，午後涼風</td><td>Zinfandel</td></tr>
          <tr><td>Chalk Hill</td><td>1983</td><td>溫和，排水佳</td><td>Chardonnay、Sauvignon Blanc</td></tr>
          <tr><td>Knights Valley</td><td>1983</td><td>溫暖，火山岩</td><td>Cabernet Sauvignon</td></tr>
          <tr><td>Green Valley of RRV</td><td>1983</td><td>Sonoma 最涼爽子區之一</td><td>Pinot Noir、氣泡酒基酒</td></tr>
          <tr><td>Alexander Valley</td><td>1984</td><td>溫暖乾燥</td><td>Cabernet Sauvignon</td></tr>
          <tr><td>Sonoma Mountain</td><td>1985</td><td>山地，高於霧線</td><td>Cabernet Sauvignon</td></tr>
          <tr><td>Sonoma Coast</td><td>1987</td><td>範圍廣，微氣候多元</td><td>Pinot Noir、Chardonnay</td></tr>
          <tr><td>Northern Sonoma</td><td>1990</td><td>傘型 AVA，涵蓋多子區</td><td>多元品種</td></tr>
          <tr><td>Rockpile</td><td>2002</td><td>高海拔山地</td><td>Zinfandel、Cabernet</td></tr>
          <tr><td>Bennett Valley</td><td>2003</td><td>高海拔谷地，涼風</td><td>Syrah、Merlot</td></tr>
          <tr><td>Fort Ross-Seaview</td><td>2011</td><td>高海拔濱海山脊</td><td>Pinot Noir、Syrah</td></tr>
          <tr><td>Pine Mountain-Cloverdale Peak</td><td>2011</td><td>最高海拔之一，跨郡</td><td>Cabernet Sauvignon</td></tr>
          <tr><td>Moon Mountain District</td><td>2013</td><td>火山岩山地</td><td>Cabernet Sauvignon</td></tr>
          <tr><td>Fountaingrove District</td><td>2015</td><td>火山岩丘陵</td><td>Cabernet Sauvignon、Chardonnay</td></tr>
          <tr><td>Petaluma Gap</td><td>2017</td><td>強風主導，涼爽</td><td>Pinot Noir</td></tr>
          <tr><td>West Sonoma Coast</td><td>2022</td><td>緊鄰太平洋，極涼爽</td><td>Pinot Noir、Chardonnay</td></tr>
        </tbody>
      </table>
      <p class="table-note">💡 認定年份反映的是產業對微氣候認識的演進過程：1980 年代率先劃定的多是歷史悠久、範圍較大的核心產區；2010 年代後新增的 AVA 則多半是從既有大範圍 AVA（如 Sonoma Coast）中，進一步切割出風土更精確、面積更小的次產區。</p>
    </div>`
  },

  {
    title: 'Sonoma 傳奇酒莊巡禮',
    content: `<div class="sonoma-producers">
      <h3>🏰 不可不知的 Sonoma County 名莊</h3>
      <div class="producers-grid">
        <div class="producer-card historic">
          <h4>Buena Vista Winery</h4>
          <p>1857 年由「加州釀酒之父」Agoston Haraszthy 創立，是加州第二古老的酒莊，也是加州第一座具規模的精品酒莊，將 300 多個歐洲葡萄品種引進加州。</p>
          <div class="p-label">📍 Sonoma Valley · 創立 1857 年</div>
        </div>
        <div class="producer-card historic">
          <h4>Hanzell Vineyards</h4>
          <p>1953 年由前美國駐義大利大使 James D. Zellerbach 創立，以妻子 Hana 命名。全美第一家全面採用法國橡木桶陳年、並率先使用小型不鏽鋼溫控發酵槽的酒莊，深刻影響加州 Chardonnay 與 Pinot Noir 的釀造技術演進。</p>
          <div class="p-label">📍 Sonoma Valley · 創立 1953 年</div>
        </div>
        <div class="producer-card iconic">
          <h4>Williams Selyem</h4>
          <p>1981 年由 Burt Williams 與 Ed Selyem 從車庫自釀起家，1985 年推出 Rochioli 單一園 Pinot Noir，開創「vineyard-designate」風潮，奠定 Russian River Valley 世界級 Pinot Noir 地位。</p>
          <div class="p-label">📍 Russian River Valley · 創立 1981 年</div>
        </div>
        <div class="producer-card iconic">
          <h4>Kistler Vineyards</h4>
          <p>1978 年由 Steve Kistler 創立，以布根地釀造工藝聞名，Chardonnay 與 Pinot Noir 皆為加州頂級指標，每年分批釋出的 Chardonnay 是收藏家關注焦點。</p>
          <div class="p-label">📍 Russian River Valley 一帶 · 創立 1978 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Merry Edwards Winery</h4>
          <p>1997 年由釀酒師 Merry Edwards 創立，是 Sonoma 最早由女性主導的精品酒莊之一，以單一園 Pinot Noir 與 Sauvignon Blanc 見長，80 英畝自有莊園已取得可持續認證。</p>
          <div class="p-label">📍 Russian River Valley · 創立 1997 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Iron Horse Vineyards</h4>
          <p>1976 年由 Audrey 與 Barry Sterling 創立，100% 自有莊園氣泡酒的代表酒莊，自 1985 年雷根－戈巴契夫高峰會起連續多任白宮宴會御用氣泡酒。</p>
          <div class="p-label">📍 Green Valley of Russian River Valley · 創立 1976 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Jordan Vineyard & Winery</h4>
          <p>1972 年由 Tom 與 Sally Jordan 創立，率先在 Alexander Valley 種下波爾多式 Cabernet Sauvignon，帶動該產區走向精品化，酒莊建築仿波爾多城堡風格興建。</p>
          <div class="p-label">📍 Alexander Valley · 創立 1972 年</div>
        </div>
        <div class="producer-card boutique">
          <h4>Ferrari-Carano Vineyards & Winery</h4>
          <p>1981 年由 Don 與 Rhonda Carano 創立，1985 年於 Dry Creek Valley 動工建莊，以 Chardonnay 起家，如今橫跨多個 Sonoma 子 AVA 種植多元品種。</p>
          <div class="p-label">📍 Dry Creek Valley · 創立 1981 年</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Sonoma Pinot Noir 與 Zinfandel 品飲指南',
    content: `<div class="sonoma-tasting">
      <h3>🍷 兩種風格光譜：優雅 Pinot Noir vs. 濃郁 Zinfandel</h3>
      <div class="tasting-compare">
        <div class="tasting-col pinot">
          <h4>🍓 Russian River Valley Pinot Noir</h4>
          <ul>
            <li><strong>果香：</strong>草莓、覆盆子、櫻桃等鮮豔紅果香</li>
            <li><strong>花香：</strong>紫羅蘭、玫瑰</li>
            <li><strong>香料／木質：</strong>肉桂、丁香（法國橡木桶陳年帶來）</li>
            <li><strong>結構：</strong>中等酒體、天然高酸度、單寧細膩絲滑</li>
            <li><strong>陳年潛力：</strong>頂級酒款 8-15 年</li>
          </ul>
        </div>
        <div class="tasting-col zin">
          <h4>🍇 Dry Creek Valley Zinfandel</h4>
          <ul>
            <li><strong>果香：</strong>黑莓果醬、蔓越莓、覆盆子果醬般的濃縮甜感</li>
            <li><strong>香料：</strong>黑胡椒、肉桂、丁香等鮮明香料調性</li>
            <li><strong>木質：</strong>美國橡木桶帶來的椰子、香草氣息</li>
            <li><strong>結構：</strong>酒體飽滿、酒精偏高（常達 14.5-16%）、單寧中等</li>
            <li><strong>陳年潛力：</strong>多數酒款適合年輕飲用，老藤精品酒款可陳放 5-10 年</li>
          </ul>
        </div>
      </div>
      <div class="pairing-guide">
        <h4>🍽️ 餐酒搭配建議</h4>
        <ul>
          <li>🍓 Pinot Noir：烤鴨、鮭魚、蘑菇燉飯、輕熟成起司</li>
          <li>🍇 Zinfandel：BBQ 烤肉、香料燉肉、披薩、重口味起司</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Sonoma 的永續農業革命',
    content: `<div class="sustainability-section">
      <h3>🌿 全球第一個近乎全面永續認證的葡萄酒產區</h3>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-number">2014</div><div class="stat-label">Sonoma County Winegrowers 宣示成為全球最永續產區的起始年</div></div>
        <div class="stat-box"><div class="stat-number">2019</div><div class="stat-label">達成近 99% 種植面積第三方可持續認證的年份</div></div>
        <div class="stat-box"><div class="stat-number">99%</div><div class="stat-label">目前種植面積持續維持的可持續認證比例</div></div>
      </div>
      <p>Sonoma County Winegrowers 是全球第一個實現近乎全面（99%）可持續認證種植面積的葡萄酒產區。他們的三大可持續承諾：</p>
      <ul>
        <li>♻️ <strong>農場永續：</strong>減少農藥使用、保育生物多樣性、保護水源</li>
        <li>☀️ <strong>能源：</strong>大量使用太陽能，多個酒莊達到碳中和</li>
        <li>🌱 <strong>社區：</strong>支持農業工人居住、教育和健康</li>
      </ul>
      <p class="sustain-note">近年 Sonoma County Winegrowers 更透過「Farm of the Future」計畫，與 John Deere、Wilbur-Ellis 等科技與農業公司合作，將 Sonoma 打造成再生農業（regenerative agriculture）與氣候智能農法的「活體實驗室」，持續在永續議題上保持全球領先地位。</p>
    </div>`
  },

  {
    title: 'Sonoma 葡萄酒觀光與 Healdsburg',
    content: `<div class="sonoma-tourism">
      <h3>🚗 以 Healdsburg 為核心的酒鄉小鎮生活</h3>
      <div class="tourism-content">
        <p>與 Napa 密集商業化的酒莊觀光路線不同，Sonoma 的旅遊體驗更強調「農場到餐桌」（farm-to-table）的生活感——葡萄園野餐、農夫市集、小鎮廣場咖啡館，是 Sonoma 吸引遊客的核心魅力。</p>
        <div class="town-grid">
          <div class="town-item">
            <h4>🏘️ Healdsburg</h4>
            <p>Russian River Valley、Dry Creek Valley、Alexander Valley 三大產區的交會點，小鎮廣場（Healdsburg Plaza）周邊聚集數十間品飲室與精品餐廳，是 Sonoma 精品酒莊觀光的核心基地。</p>
          </div>
          <div class="town-item">
            <h4>🏛️ Sonoma Plaza</h4>
            <p>加州最大的歷史廣場之一，鄰近 Sonoma Valley 與 Carneros，周邊保留大量西班牙傳教時期建築，是加州葡萄酒歷史的起點地標。</p>
          </div>
          <div class="town-item">
            <h4>🌊 Bodega Bay / Sonoma Coast</h4>
            <p>West Sonoma Coast 產區的門戶小鎮，結合海鮮餐廳與濱海酒莊，近年隨冷氣候 Pinot Noir 崛起而愈發受到侍酒師與饕客青睞。</p>
          </div>
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
            explanation: 'Sonoma County 有超過 99% 的葡萄種植面積取得可持續農業認證（2019 年達成），是全球第一個達到此目標的葡萄酒產區，是全球農業可持續發展的典範。'
          },
          {
            type: 'single',
            question: '以下哪個 Sonoma 子 AVA 以溫暖氣候和 Cabernet Sauvignon 著稱，與 Napa 風格最相似？',
            options: ['A. Russian River Valley', 'B. Sonoma Coast', 'C. Alexander Valley', 'D. Carneros'],
            correct: 2,
            explanation: 'Alexander Valley 是 Sonoma 最溫暖的 AVA 之一，受太平洋海霧影響最少，以 Cabernet Sauvignon 著稱，風格與 Napa 相近但通常更柔和，Jordan Winery 與 Silver Oak 是最知名的代表。'
          },
          {
            type: 'single',
            question: '2022 年從 Sonoma Coast 分割獨立、專指緊鄰太平洋涼爽狹長地帶的新 AVA 是？',
            options: ['A. Fort Ross-Seaview', 'B. West Sonoma Coast', 'C. Petaluma Gap', 'D. Moon Mountain District'],
            correct: 1,
            explanation: 'West Sonoma Coast AVA 於 2022 年獲認證，是為了解決 Sonoma Coast AVA 範圍過大、風格分歧的問題而分割獨立，專指真正緊鄰太平洋、受海霧與海風強烈影響的狹長地帶。'
          },
          {
            type: 'single',
            question: 'Petaluma Gap AVA 的核心風土特徵是什麼？',
            options: ['A. 罕見的石灰岩土壤', 'B. 強勁而持續的午後海風', 'C. 全區皆為高海拔火山岩', 'D. 全加州降雨量最高的產區'],
            correct: 1,
            explanation: 'Petaluma Gap 因海岸山脈的缺口地形而得名，強勁而持續的午後海風大幅降低白天氣溫，是加州少數以「風」作為核心風土敘事的 AVA。'
          },
          {
            type: 'single',
            question: 'Williams Selyem 酒莊在 1985 年推出哪座葡萄園的單一園 Pinot Noir，開創「vineyard-designate」風潮？',
            options: ['A. Sanford & Benedict Vineyard', 'B. Rochioli Vineyard', 'C. Monte Bello Vineyard', 'D. To Kalon Vineyard'],
            correct: 1,
            explanation: 'Williams Selyem 於 1985 年推出來自 Rochioli Vineyard 的單一園 Pinot Noir，是加州最早的「vineyard-designate」（單一園裝瓶）案例之一，深刻影響了 Russian River Valley 成為世界級 Pinot Noir 產區。'
          },
          {
            type: 'single',
            question: '1953 年創立、是全美第一家全面採用法國橡木桶陳年的酒莊是？',
            options: ['A. Buena Vista Winery', 'B. Hanzell Vineyards', 'C. Kistler Vineyards', 'D. Jordan Winery'],
            correct: 1,
            explanation: 'Hanzell Vineyards 由前美國駐義大利大使 James D. Zellerbach 於 1953 年創立，是全美第一家全面採用法國橡木桶陳年、並使用小型不鏽鋼溫控發酵槽的酒莊，深刻影響了加州 Chardonnay 與 Pinot Noir 的釀造技術演進。'
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
            explanation: '加州生產美國約 85% 的葡萄酒，是美國葡萄酒產業的核心。'
          },
          {
            type: 'single',
            question: 'AVA（美國法定葡萄種植區）與法國 AOC 最大的差異是什麼？',
            options: ['A. AVA 只能在加州使用', 'B. AVA 管制更嚴格，指定品種和產量', 'C. AVA 主要劃定地理邊界，不強制規定品種和釀造方法', 'D. AVA 要求 100% 原料來自產區'],
            correct: 2,
            explanation: 'AVA 主要劃定地理邊界，不像法國 AOC 那樣強制規定釀造品種、方法和產量。AVA 標示的葡萄酒須有 85% 原料來自該產區（標示縣則為 75%）。'
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
            explanation: 'Opus One 由美國 Robert Mondavi 和法國 Château Mouton-Rothschild 的 Baron Philippe de Rothschild 聯合創立於 1978-79 年，是新舊世界合作的歷史性象徵。'
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
          },
          {
            type: 'single',
            question: '1857 年在 Sonoma 創立 Buena Vista Winery、被尊稱為「加州釀酒之父」的人物是？',
            options: ['A. George Yount', 'B. Agoston Haraszthy', 'C. Robert Mondavi', 'D. Jacob Schram'],
            correct: 1,
            explanation: '匈牙利裔的 Agoston Haraszthy 於 1857 年在 Sonoma 創立 Buena Vista Winery，是加州第一座具規模的精品酒莊，並從歐洲引進逾 300 個葡萄品種，被尊稱為「加州釀酒之父」。'
          },
          {
            type: 'single',
            question: 'Napa Valley 於 2024 年新增的第 17 個子 AVA 是？',
            options: ['A. Coombsville', 'B. Crystal Springs', 'C. Wild Horse Valley', 'D. Atlas Peak'],
            correct: 1,
            explanation: 'Crystal Springs of Napa Valley 於 2024 年 11 月由 TTB 正式認定，是繼 2011 年 Coombsville 之後 Napa 睽違 13 年新增的子 AVA，位於 St. Helena、Calistoga 與 Howell Mountain 之間的山坡地。'
          }
        ]
      }
    }
  }
]
