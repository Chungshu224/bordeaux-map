/**
 * CA-L2-2 北海岸深度剖析：Napa Valley 16 個子 AVA & Sonoma County 19 個 AVA
 * 深化重點：Rutherford vs Oakville 比較風土分析、酒莊案例研究、Sonoma 完整 AVA 版圖
 * 資料來源（2026 年查證）：
 *  - napavintners.com「Napa Valley Soils and Geology」；napawineproject.com（各子 AVA 沿革）
 *  - Big Hammer Wines「Napa Valley Cabernet Sauvignon: Oakville vs. Rutherford」
 *  - Forbes「Exploring The Cabernet Sauvignon Of Napa Valley, Part Two: Rutherford And St. Helena」
 *  - Sonoma County Winegrowers；Jancis Robinson「Exploring cooler Sonoma – Russian River Valley」
 *  - Wine-Searcher「Chalk Hill - Californian Wine Region」
 *  - 各酒莊官方沿革（Opus One、Inglenook、Screaming Eagle、Shafer、Dominus Estate 等）
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          North Coast 是加州葡萄酒的聖地——納帕谷的 Cabernet Sauvignon 以不到波爾多 1/15 的面積創造世界最高價格，索諾瑪郡以 99% 可持續認證成為全球環保葡萄酒典範。Level 1 已經帶您認識過兩郡的子 AVA 名單；本課將更進一步——直接比較「為什麼」Rutherford 跟 Oakville 只隔幾公里，Cabernet 卻喝起來不一樣，並透過具體酒莊案例，讓風土理論落地成品飲判斷力。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>⚖️ 比較分析 Rutherford vs Oakville</h4>
            <p>從沖積扇位置、土壤顆粒、單寧質地三個面向拆解兩個相鄰子 AVA 的風格差異</p>
          </div>
          <div class="point-item">
            <h4>🏛️ 透過酒莊案例學習風土落地</h4>
            <p>以 Inglenook、Dominus Estate、Shafer 等酒莊的具體選址與釀造邏輯，理解「風土如何變成酒標上的風格」</p>
          </div>
          <div class="point-item">
            <h4>🌿 掌握 Sonoma 完整版圖與氣候機制</h4>
            <p>從 Petaluma Gap 到 Chalk Hill，理解 Sonoma 19 個 AVA 為何呈現全加州最大的風格光譜</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Napa Valley：世界最小卻最貴的葡萄酒谷',
    content: `<div class="napa-overview">
      <h3>🏔️ Napa Valley — 小而精的奇蹟</h3>
      <div class="napa-key-facts">
        <div class="nkf-item"><span class="nkf-num">45,342</span><span class="nkf-label">英畝葡萄園（約波爾多的 1/15）</span></div>
        <div class="nkf-item"><span class="nkf-num">4%</span><span class="nkf-label">加州總葡萄酒產量</span></div>
        <div class="nkf-item"><span class="nkf-num">1981</span><span class="nkf-label">獲得加州第一個 AVA 認定</span></div>
        <div class="nkf-item"><span class="nkf-num">16</span><span class="nkf-label">個子 AVA</span></div>
        <div class="nkf-item"><span class="nkf-num">1839</span><span class="nkf-label">George Yount 種下第一批葡萄</span></div>
        <div class="nkf-item"><span class="nkf-num">地中海</span><span class="nkf-label">氣候類型</span></div>
      </div>
      <div class="napa-geography">
        <h4>地理特徵</h4>
        <ul>
          <li><strong>山谷走向：</strong>南北走向，南端鄰 San Pablo Bay（涼爽），北端 Calistoga 受山脈保護（最溫暖）</li>
          <li><strong>海霧入口：</strong>從 San Pablo Bay 湧入，影響南部 Carneros 和 Napa 城市區最深</li>
          <li><strong>土壤多樣：</strong>從西側山坡的岩石性黏土，到谷地中央的礫石沖積土，到東側 Howell Mountain 的火山岩</li>
          <li><strong>第一個農業保護區：</strong>1968 年成為美國第一個農業用地永久保護區，禁止非農業開發</li>
        </ul>
      </div>
    </div>`
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Napa Valley 16 子 AVA 地圖',
    componentProps: {
      slide: {
        title: 'Napa Valley 16 個子 AVA 地圖',
        description: '從南端涼爽的 Carneros 到北端溫暖的 Calistoga，探索 Napa Valley 的南北風土漸變',
        mapGroup: 'Napa Valley',
        highlightAVAs: ['Carneros', 'Oakville', 'Rutherford', 'St. Helena', 'Calistoga', 'Stags Leap District'],
      }
    }
  },

  {
    title: 'Napa Valley：從南到北的 16 個子 AVA',
    content: `<div class="napa-sub-avas">
      <h3>📍 Napa 16 個子 AVA — 由南至北風土漸變</h3>
      <div class="ava-progression">
        <div class="ava-zone zone-cool">
          <h4>🌊 南部涼爽帶（最受海霧影響）</h4>
          <div class="ava-list">
            <div class="ava-item">
              <strong>Carneros</strong>（跨 Napa 和 Sonoma）
              <p>緊鄰 San Pablo Bay，全 Napa 最涼爽。薄皮葡萄的天堂：Pinot Noir 和 Chardonnay。也是加州最重要的氣泡酒基酒來源。</p>
              <span class="ava-grapes">Pinot Noir · Chardonnay · 氣泡酒</span>
            </div>
            <div class="ava-item">
              <strong>Coombsville</strong>
              <p>2011 年才獲認定的新興 AVA，位於 Napa 城東南側的古老火山口地形，火山岩加上海灣涼風雙重調節，近年被視為涼爽風格 Cabernet 的新興焦點。</p>
              <span class="ava-grapes">Cabernet Sauvignon（涼爽風格）</span>
            </div>
            <div class="ava-item">
              <strong>Oak Knoll District</strong>
              <p>Napa 城市北方，涼爽多風，是橋接涼爽和溫暖風格的過渡帶。Merlot 和 Chardonnay 表現突出。</p>
              <span class="ava-grapes">Merlot · Chardonnay</span>
            </div>
          </div>
        </div>
        <div class="ava-zone zone-mid">
          <h4>🌟 中部精華帶（Cabernet 黃金地帶）</h4>
          <div class="ava-list">
            <div class="ava-item">
              <strong>Yountville</strong>
              <p>Napa 美食之鄉（Thomas Keller 的 The French Laundry 所在地）。礫石土壤孕育出優雅、細緻的 Cabernet，比 Rutherford 更具精緻感。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Merlot</span>
            </div>
            <div class="ava-item">
              <strong>Stags Leap District</strong>
              <p>1976 年巴黎評判冠軍 Stag's Leap Wine Cellars 的故鄉。東側玄武岩峭壁反射熱能，賦予 Cabernet 獨特的「鐵鏽手套中的天鵝絨」質地——柔滑單寧中帶有礦石感。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>Oakville</strong>
              <p>Napa 礫石層最深的地帶，完美排水加上午後海霧。Opus One 和 Robert Mondavi Winery 所在地。以集中、層次豐富的 Cabernet 著稱。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>Rutherford</strong>
              <p>「Rutherford Bench」——礫石沖積台地，是 Napa Cabernet 的靈魂地帶。產出帶有「Rutherford Dust」特質的濃郁 Cabernet。代表：Inglenook、Beaulieu Vineyard、Frog's Leap。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>St. Helena</strong>
              <p>Napa 歷史中心，多山環繞遮擋涼風。谷地最窄處，白天非常溫暖。充沛的陽光讓 Cabernet 達到完美成熟度，帶來豐厚的黑色果實風格。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Merlot</span>
            </div>
            <div class="ava-item">
              <strong>Chiles Valley</strong>
              <p>Napa 東側一條獨立的小山谷，海拔較高、晝夜溫差大，法蘭西斯科雜岩系土壤帶來礦石感，是相對低調但潛力十足的次產區。</p>
              <span class="ava-grapes">Zinfandel · Cabernet Sauvignon</span>
            </div>
          </div>
        </div>
        <div class="ava-zone zone-warm">
          <h4>☀️ 北部溫暖帶（最受保護，最濃郁）</h4>
          <div class="ava-list">
            <div class="ava-item">
              <strong>Calistoga</strong>
              <p>Napa 最北端，火山岩土壤（近 Geyser 地熱區），是全谷最溫暖的地方。地熱礦泥浴著名旅遊地。出產加州最濃烈、酒精度最高的 Cabernet。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Zinfandel</span>
            </div>
          </div>
        </div>
        <div class="ava-zone zone-mountain">
          <h4>🏔️ 山坡精英帶（高海拔，高陳年潛力）</h4>
          <div class="ava-list">
            <div class="ava-item">
              <strong>Howell Mountain</strong>
              <p>海拔 420m 以上，在晨霧雲層之上。火山岩壤土，葡萄產量極低，風格濃縮。是 Napa 最適合陳年的 Cabernet 之一（代表：Dunn Vineyards）。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>Spring Mountain District</strong>
              <p>Napa 西側山坡，涼爽的山地微氣候。複雜的地質（火山岩+頁岩）帶來礦物感和優雅。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Chardonnay</span>
            </div>
            <div class="ava-item">
              <strong>Diamond Mountain District</strong>
              <p>Calistoga 西北側山地，著名的白色石英岩碎石混合火山土，排水極佳，出產結構緊實、需長期陳年的山地 Cabernet。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>Atlas Peak</strong>
              <p>Napa 東側高原，海拔 600–900 公尺，土壤富含石灰岩（在 Napa 相當罕見），賦予天然酸度。1980 年代 Antinori 家族在此開拓 Sangiovese 種植的先例。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Sangiovese</span>
            </div>
            <div class="ava-item">
              <strong>Mount Veeder</strong>
              <p>Napa 西側火山高地，美西最複雜的葡萄酒風土之一。低產量老藤，帶有明顯泥土感和礦石骨架的強勁 Cabernet。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>Wild Horse Valley</strong>
              <p>Napa 東南端海拔最高的 AVA 之一，火山岩地質，氣候受灣區涼風調節，種植面積極小，多用於涼爽氣候 Pinot Noir 試驗。</p>
              <span class="ava-grapes">Pinot Noir</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '比較分析：Rutherford vs Oakville，為什麼相鄰卻不同',
    content: `<div class="rutherford-oakville-compare">
      <h3>⚖️ 一線之隔的兩種 Cabernet 哲學</h3>
      <p>Rutherford 與 Oakville 同屬 Rutherford Bench 沖積扇系統，中心點相距不到 5 公里，卻是 Napa Cabernet 世界裡最常被拿來比較的一對「風格對照組」。差異不在於「有沒有海霧」（兩者受海霧影響程度相近），而在於<strong>沖積扇沉積物的顆粒組成與堆積歷史</strong>。</p>
      <div class="ro-compare-table">
        <table class="compare-table">
          <thead><tr><th>比較面向</th><th>Rutherford</th><th>Oakville</th></tr></thead>
          <tbody>
            <tr><td>沖積扇位置</td><td>扇緣偏下游，沉積歷史更久，礫石與細質土混合更均勻</td><td>扇心偏上游，靠近山腳，礫石顆粒更粗、更深厚</td></tr>
            <tr><td>代表土壤</td><td>Bale 系列壤土：礫石、砂、火山碎屑混合，俗稱「Rutherford Dust」</td><td>東側山麓為紅色火山土（源自古老死火山風化），西側為深厚礫石沖積層</td></tr>
            <tr><td>單寧質地</td><td>細緻、帶塵土感的「絲絨」單寧，口感圓融</td><td>更緊緻、結構分明，年輕時單寧存在感較強</td></tr>
            <tr><td>果味印象</td><td>黑櫻桃、黑李、可可、泥土深度感</td><td>黑醋栗、黑莓、層次分明，飽滿豐腴</td></tr>
            <tr><td>陳年風格</td><td>中期陳年後展現皮革、雪松、菸草的複雜三級香氣</td><td>陳年後展現更集中的黑色果乾與雪松，架構感持久</td></tr>
            <tr><td>代表酒莊</td><td>Inglenook、Beaulieu Vineyard（BV #1）、Caymus、Frog's Leap</td><td>Opus One、Robert Mondavi Winery、Screaming Eagle、Harlan Estate</td></tr>
          </tbody>
        </table>
      </div>
      <p class="ro-note">💡 品飲練習：盲飲時，若嚐到「集中黑醋栗＋清晰單寧邊界」多半是 Oakville；若嚐到「塵土感單寧＋黑櫻桃與可可的圓融感」則傾向 Rutherford。這種細微差異正是「子 AVA」劃分存在的意義——同一品種、同一大產區，仍能因沖積地質微觀差異而風格可辨。</p>
    </div>`
  },

  {
    title: 'Napa 的傳奇酒莊：案例研究',
    content: `<div class="napa-estates">
      <h3>🏛️ Napa Valley 的傳奇酒莊——風土如何變成酒標風格</h3>
      <div class="estates-grid">
        <div class="estate-card">
          <h4>Opus One</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">1979 年由 Robert Mondavi 和波爾多五大酒莊之一的 Mouton-Rothschild 共同創立，是加州最著名的「聯姻酒莊」。選址於 Oakville 礫石層最深厚處，波爾多風格調配（以 Cabernet Sauvignon 為主），每年僅生產約 25,000 箱。</p>
          <p class="estate-style">風格：結構細緻、優雅，紅醋栗、雪松木、石墨</p>
        </div>
        <div class="estate-card">
          <h4>Inglenook</h4>
          <p class="estate-location">Rutherford</p>
          <p class="estate-story">1879 年由芬蘭船長 Gustave Niebaum 創立，是 Napa 最古老的酒莊之一，早年即以波爾多式莊園分級思維打造酒莊。1975 年被電影導演 Francis Ford Coppola 買下部分土地，2011 年正式恢復 Inglenook 之名，致力復興歷史榮光，代表作 Rubicon 是 Rutherford 混調風格的標竿。</p>
          <p class="estate-style">風格：Rutherford 典型的塵土感單寧，黑李、雪松、皮革</p>
        </div>
        <div class="estate-card">
          <h4>Dominus Estate</h4>
          <p class="estate-location">Yountville</p>
          <p class="estate-story">1982 年由波爾多 Pétrus 莊主 Christian Moueix 創立，選址於 Yountville 一塊被稱為「Napanook」的老葡萄園，土壤含大量礫石與火山岩碎屑。Moueix 家族將波爾多右岸的極簡採收與低介入釀造哲學帶入加州，強調風土而非橡木桶主導的風格。</p>
          <p class="estate-style">風格：內斂、礦石感強，單寧緊緻而非豐腴</p>
        </div>
        <div class="estate-card">
          <h4>Shafer Vineyards</h4>
          <p class="estate-location">Stags Leap District</p>
          <p class="estate-story">1978 年由 John Shafer 創立於 Stags Leap District 的火山岩山坡地，旗艦酒款 Hillside Select 選用陡坡火山土老藤葡萄，1994 年份曾獲 Wine Spectator「年度最佳酒款」，是山坡地 Cabernet 的指標酒莊。</p>
          <p class="estate-style">風格：絲滑單寧中帶礦石感，黑莓、香料、可可</p>
        </div>
        <div class="estate-card cult-wine">
          <h4>Screaming Eagle 🔥</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">年產僅約 500 箱（6,000 瓶），是加州最難買到的膜拜酒（Cult Wine）。Robert Parker 曾多次給予 100 分。2000 年一瓶在拍賣會上以 50 萬美元成交（6L 裝）。</p>
          <p class="estate-style">風格：極度集中的黑色漿果，難以言喻的深度與複雜度</p>
        </div>
        <div class="estate-card cult-wine">
          <h4>Harlan Estate 🔥</h4>
          <p class="estate-location">Oakville hills</p>
          <p class="estate-story">Bill Harlan 創立的精品酒莊，選址於 Oakville 西側山坡，以「傳家之寶」精神釀造。年產量極少，Wine Advocate 多次給予 100 分，是加州 Cult Wine 的代表之一。</p>
          <p class="estate-style">風格：極高濃縮度，帶有可可、菸草、烤肉香氣</p>
        </div>
        <div class="estate-card">
          <h4>Robert Mondavi Winery</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">1966 年建立，是現代 Napa 葡萄酒產業的奠基者。Robert Mondavi 推廣了加州葡萄酒在全球的形象，率先在標籤標注葡萄品種，並推廣 Fumé Blanc（Sauvignon Blanc）。</p>
          <p class="estate-style">風格：以 Cabernet 和 Fumé Blanc 聞名</p>
        </div>
        <div class="estate-card">
          <h4>Chateau Montelena</h4>
          <p class="estate-location">Calistoga</p>
          <p class="estate-story">1976 年巴黎評判白酒組冠軍（Chardonnay），是加州最具歷史意義的酒莊之一。電影《Bottle Shock》以此為背景。</p>
          <p class="estate-style">風格：Chardonnay — 清爽礦物感，不過度橡木桶</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Sonoma County：多元王國',
    content: `<div class="sonoma-deep">
      <h3>🍇 Sonoma County — 加州最多元化的葡萄酒郡</h3>
      <div class="sonoma-key-facts">
        <div class="skf-item"><span class="skf-num">19</span><span class="skf-label">個 AVA</span></div>
        <div class="skf-item"><span class="skf-num">1812</span><span class="skf-label">首次葡萄種植記錄</span></div>
        <div class="skf-item"><span class="skf-num">99%</span><span class="skf-label">葡萄種植面積取得可持續認證</span></div>
        <div class="skf-item"><span class="skf-num">加州第一</span><span class="skf-label">Pinot Noir 種植面積最大的郡</span></div>
      </div>
      <div class="sonoma-avas">
        <div class="sa-item">
          <h4>🌊 Russian River Valley（俄羅斯河谷）</h4>
          <p>Sonoma 最知名的 AVA，是世界頂級 Pinot Noir 和 Chardonnay 的主場。海霧透過 Petaluma Gap 與 Russian River 河谷缺口每天湧入，晚間常使氣溫驟降約 35–40°F（19–22°C），隔日隨日照消散退回海岸，形成「潮汐式」的日夜溫度循環。</p>
          <div class="sa-details">
            <span>氣候：涼爽，多霧</span>
            <span>代表酒莊：Williams Selyem、Rochioli、Gary Farrell、Kosta Browne</span>
            <span>特色：優雅 Pinot，草莓、玫瑰、香料風味</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌬️ Petaluma Gap（新興風動產區）</h4>
          <p>2017 年獲 TTB 認定，是美國史上第一個以「持續風速達每小時 8 英里以上」界定範圍的 AVA。介於 Tomales Bay 與 Bodega Bay 之間，海拔多在 600 英尺以下的低矮丘陵讓太平洋海風幾乎無阻礙地灌入，午後風力尤其強勁，果實需發展較厚果皮以抵禦風壓，帶來風格獨特、酸度明亮的 Pinot Noir 與 Syrah。</p>
          <div class="sa-details">
            <span>氣候：終年強風，涼爽</span>
            <span>代表酒莊：Sangiacomo、Cline Cellars、Argot</span>
            <span>特色：厚皮 Pinot，帶明亮酸度與野莓氣息</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌿 Dry Creek Valley（乾溪谷）</h4>
          <p>Zinfandel 的家園。溫暖、乾燥的山谷氣候（距海峽較遠，海霧影響較少），黏土和礫石土壤，出產加州最具個性的老藤 Zinfandel 和 Sauvignon Blanc。</p>
          <div class="sa-details">
            <span>氣候：溫暖乾燥</span>
            <span>代表酒莊：Ridge Vineyards（Lytton Springs）、Quivira</span>
            <span>特色：濃郁 Zinfandel，黑莓、香料、甘草</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>☀️ Alexander Valley（亞歷山大谷）</h4>
          <p>Sonoma 最溫暖、最大的 AVA 之一。河邊礫石土壤，溫暖氣候，出產加州最柔美、果味豐沛的 Cabernet Sauvignon（被稱為「Sonoma Cab」的代表）。</p>
          <div class="sa-details">
            <span>氣候：溫暖</span>
            <span>代表酒莊：Silver Oak（Alexander Valley）、Jordan Winery</span>
            <span>特色：柔滑 Cabernet，黑莓、李子、甜香草</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌡️ Chalk Hill（地形逃霧的溫暖孤島）</h4>
          <p>雖與 Russian River Valley 相鄰，但地勢明顯較高，逃過大部分低窪河谷的霧氣覆蓋，氣候因此較周邊溫暖，種植 Cabernet Sauvignon、Merlot 等 Bordeaux 品種，也產優質 Chardonnay 與 Sauvignon Blanc，是海霧地形效應「反例」的最佳教材。</p>
          <div class="sa-details">
            <span>氣候：較周邊溫暖（地勢較高）</span>
            <span>代表酒莊：Chalk Hill Estate</span>
            <span>特色：飽滿 Cabernet 與豐富 Chardonnay</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🏛️ Sonoma Valley（索諾瑪谷）</h4>
          <p>加州最古老的葡萄酒產區之一，1857 年匈牙利移民 Agoston Haraszthy 在此創立 Buena Vista Winery，被視為加州商業釀酒的發源地之一。氣候從南端涼爽到北端溫暖跨度大，品種多元。</p>
          <div class="sa-details">
            <span>氣候：南涼北暖，跨度大</span>
            <span>代表酒莊：Buena Vista Winery、Hanzell Vineyards</span>
            <span>特色：多元風格，歷史意義重大</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌊 Sonoma Coast（索諾瑪海岸）</h4>
          <p>廣大的 AVA，包括緊鄰太平洋的極涼爽產地（俗稱「True Sonoma Coast」）。是加州最具布根地風格的 Pinot Noir 產地——酸度明亮，結構優雅。</p>
          <div class="sa-details">
            <span>氣候：涼爽至極涼爽（依距海遠近）</span>
            <span>代表酒莊：Flowers Vineyard、Hirsch Vineyards、Marcassin</span>
            <span>特色：礦物感 Pinot，帶有海鹽和玫瑰花瓣</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌲 Knights Valley（奈茨谷）</h4>
          <p>Sonoma 東北端，緊鄰 Napa 邊界的溫暖山谷，火山岩土壤，因地形阻隔海霧影響最小，出產飽滿厚實的 Cabernet Sauvignon，風格更接近 Napa 而非典型 Sonoma。</p>
          <div class="sa-details">
            <span>氣候：溫暖，海霧影響最小</span>
            <span>代表酒莊：Peter Michael Winery</span>
            <span>特色：飽滿 Cabernet，近似 Napa 風格</span>
          </div>
        </div>
      </div>
      <div class="sonoma-sustainability">
        <h4>🌱 Sonoma 的永續農業故事</h4>
        <p>Sonoma County 是全球葡萄酒可持續農業的標竿：</p>
        <ul>
          <li>99% 葡萄種植面積取得加州可持續葡萄栽培聯盟（CCSW）認證</li>
          <li>多個酒莊取得有機（Organic）和生物動力法（Biodynamic）認證</li>
          <li>2019 年 Sonoma County 宣佈成為全球第一個「100% 可持續」葡萄酒產區的目標</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Napa vs Sonoma：氣候機制與風格光譜比較',
    content: `<div class="napa-sonoma-mechanism">
      <h3>🔬 兩郡風格差異的地形根源</h3>
      <div class="ns-compare-table">
        <table class="compare-table">
          <thead><tr><th>比較面向</th><th>Napa Valley</th><th>Sonoma County</th></tr></thead>
          <tbody>
            <tr><td>海霧入口</td><td>單一入口：San Pablo Bay（南端）</td><td>多重入口：太平洋直接海岸線 + Petaluma Gap + Russian River 河谷缺口</td></tr>
            <tr><td>山谷走向</td><td>單一南北向谷地，氣候梯度呈線性（南涼北暖）</td><td>地形破碎，多個獨立山谷走向各異，氣候呈拼貼式分布而非單一梯度</td></tr>
            <tr><td>面積</td><td>約 18,000 公頃</td><td>約 60,000 公頃（Napa 的 3 倍以上）</td></tr>
            <tr><td>子 AVA 數</td><td>16 個，多數圍繞單一 Cabernet 敘事分級</td><td>19 個，橫跨從極涼（Sonoma Coast）到溫暖（Alexander Valley）的完整光譜</td></tr>
            <tr><td>主力品種邏輯</td><td>幾乎所有子 AVA 都圍繞 Cabernet Sauvignon 的細部風格差異</td><td>因地形破碎，同一郡內可同時是頂級 Pinot 產區（RRV）與頂級 Zinfandel 產區（Dry Creek）</td></tr>
          </tbody>
        </table>
      </div>
      <p class="ns-insight">💡 核心洞察：Napa 的「一個入口、一條谷地」造就了氣候的可預測梯度，適合建立單一敘事（極致 Cabernet）；Sonoma 的「多重入口、破碎地形」則造就了風格光譜的多樣性，難以用單一品種代表整個郡——這正是兩郡行銷敘事截然不同的地理根源。</p>
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
            question: '「Stags Leap District」最著名的是哪款 1976 年巴黎評判冠軍酒？',
            options: ['A. Opus One', 'B. Chateau Montelena', "C. Stag's Leap Wine Cellars Cabernet Sauvignon", 'D. Screaming Eagle'],
            correct: 2,
            explanation: "Stag's Leap Wine Cellars 的 1973 年份 Cabernet Sauvignon 在 1976 年巴黎評判的紅酒組盲品中奪冠，讓 Stags Leap District 成為全球最知名的 Cabernet 產地之一。"
          },
          {
            type: 'single',
            question: 'Sonoma County 哪個 AVA 以世界頂級 Pinot Noir 最著名，且每天受太平洋冷霧影響？',
            options: ['A. Alexander Valley', 'B. Dry Creek Valley', 'C. Russian River Valley', 'D. Knights Valley'],
            correct: 2,
            explanation: 'Russian River Valley 透過 Petaluma Gap 與河谷缺口每天接收太平洋涼爽的霧氣，晚間常降溫 35–40°F，生長季漫長而涼爽，是加州頂級 Pinot Noir 和 Chardonnay 的主要產地。'
          },
          {
            type: 'single',
            question: 'Rutherford 與 Oakville 風格差異的地質根源主要是什麼？',
            options: ['A. Rutherford 完全不受海霧影響', 'B. 兩者在同一沖積扇系統中的位置不同，沉積顆粒組成與堆積歷史不同', 'C. Oakville 海拔比 Rutherford 高出許多', 'D. 兩地種植完全不同的品種'],
            correct: 1,
            explanation: 'Rutherford 與 Oakville 同屬 Rutherford Bench 沖積扇系統，差異主要來自兩地在扇形地形中位置不同：Oakville 靠近扇心，礫石顆粒較粗；Rutherford 偏扇緣，沉積歷史更久、土質混合更均勻，因而造就「Rutherford Dust」塵土感單寧與 Oakville 更緊緻結構的風格差異。'
          },
          {
            type: 'single',
            question: 'Dominus Estate 是由哪位波爾多釀酒人創立於 Napa Yountville？',
            options: ['A. Baron Philippe de Rothschild', 'B. Christian Moueix（Pétrus 莊主）', 'C. Robert Mondavi', 'D. Piero Antinori'],
            correct: 1,
            explanation: 'Dominus Estate 由波爾多右岸名莊 Pétrus 的莊主 Christian Moueix 於 1982 年創立，選址於 Yountville 的老葡萄園「Napanook」，將波爾多右岸的低介入釀造哲學帶入加州。'
          },
          {
            type: 'single',
            question: 'Petaluma Gap AVA 為何在 2017 年獲認定時被視為美國 AVA 史上的特例？',
            options: ['A. 是加州面積最大的 AVA', 'B. 邊界以持續風速門檻（約每小時 8 英里以上）劃定，而非山脊或河流', 'C. 是唯一橫跨兩個州的 AVA', 'D. 是加州最早成立的 AVA'],
            correct: 1,
            explanation: 'Petaluma Gap 是美國史上第一個以氣象數據（太平洋風持續維持每小時 8 英里以上）而非地形地物劃定邊界的 AVA，反映出風力對當地葡萄酒風格的決定性影響。'
          },
          {
            type: 'single',
            question: 'Chalk Hill AVA 為何氣候比相鄰的 Russian River Valley 溫暖？',
            options: ['A. Chalk Hill 距太平洋更近', 'B. Chalk Hill 地勢較高，逃過低窪河谷的霧氣覆蓋', 'C. Chalk Hill 完全沒有海洋影響', 'D. Chalk Hill 位於南加州'],
            correct: 1,
            explanation: 'Chalk Hill 雖與 Russian River Valley 相鄰，但地勢明顯較高，逃過了大部分沿低窪河谷堆積的濃密霧氣，因此氣候較周邊溫暖，適合種植 Cabernet Sauvignon 等 Bordeaux 品種。'
          },
          {
            type: 'single',
            question: 'Sonoma Valley AVA 的歷史意義主要來自於？',
            options: ['A. 是加州最新成立的 AVA', 'B. 1857 年 Agoston Haraszthy 創立 Buena Vista Winery，被視為加州商業釀酒發源地之一', 'C. 是唯一種植 Riesling 的 AVA', 'D. 完全不受太平洋影響'],
            correct: 1,
            explanation: '1857 年，匈牙利移民 Agoston Haraszthy 在 Sonoma Valley 創立 Buena Vista Winery，是加州商業釀酒史上最重要的早期里程碑之一，讓 Sonoma Valley 成為加州最古老的葡萄酒產區之一。'
          },
          {
            type: 'single',
            question: '為什麼 Sonoma County 難以用單一品種代表整個郡，而 Napa 卻可以幾乎完全聚焦 Cabernet Sauvignon？',
            options: ['A. Sonoma 面積比 Napa 小很多', 'B. Sonoma 地形破碎、多重海霧入口，氣候呈拼貼式分布而非單一線性梯度', 'C. Napa 完全不受氣候影響', 'D. Sonoma 完全沒有海霧'],
            correct: 1,
            explanation: 'Napa 是單一南北向谷地、單一海霧入口（San Pablo Bay），氣候呈可預測的線性梯度；Sonoma 地形破碎，擁有太平洋直接海岸線、Petaluma Gap、Russian River 河谷等多重海霧入口，造就從極涼到溫暖的拼貼式氣候光譜，因此能同時是頂級 Pinot 與頂級 Zinfandel 產區。'
          }
        ]
      }
    }
  }
]
