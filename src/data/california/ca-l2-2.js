/**
 * CA-L2-2 北海岸深度剖析：Napa Valley 16 個子 AVA & Sonoma County 19 個 AVA
 * 資料來源：discovercaliforniawines.com、napavintners.com、sonomawine.com
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          North Coast 是加州葡萄酒的聖地——納帕谷的 Cabernet Sauvignon 以不到波爾多 1/15 的面積創造世界最高價格，索諾瑪郡以 99% 可持續認證成為全球環保葡萄酒典範。本課深入剖析兩大產區的每一個子 AVA，讓您能夠從酒標讀出風土故事。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>📍 精通 Napa Valley 16 個子 AVA</h4>
            <p>從南到北理解 Carneros → Napa → Oakville → Rutherford → St. Helena → Calistoga 的風土漸變</p>
          </div>
          <div class="point-item">
            <h4>🍷 解碼 Rutherford Bench 與 Stags Leap District 的差異</h4>
            <p>了解同在 Napa 的兩個相鄰子 AVA 如何產出完全不同風格的 Cabernet</p>
          </div>
          <div class="point-item">
            <h4>🌿 掌握 Sonoma 的多元版圖</h4>
            <p>理解 Russian River Valley 的 Pinot、Dry Creek 的 Zinfandel、Alexander Valley 的 Cabernet 各自的風土理由</p>
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
              <p>「Rutherford Bench」——礫石沖積台地，是 Napa Cabernet 的靈魂地帶。產出帶有「Rutherford Dust」特質（傳說中的月桂葉/香草礦石感）的濃郁 Cabernet。代表：Inglenook、Honig、Frog's Leap。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
            <div class="ava-item">
              <strong>St. Helena</strong>
              <p>Napa 歷史中心，多山環繞遮擋涼風。谷地最窄處，白天非常溫暖。充沛的陽光讓 Cabernet 達到完美成熟度，帶來豐厚的黑色果實風格。</p>
              <span class="ava-grapes">Cabernet Sauvignon · Merlot</span>
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
              <strong>Mount Veeder</strong>
              <p>Napa 西側火山高地，美西最複雜的葡萄酒風土之一。低產量老藤，帶有明顯泥土感和礦石骨架的強勁 Cabernet。</p>
              <span class="ava-grapes">Cabernet Sauvignon</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa 的傳奇酒莊',
    content: `<div class="napa-estates">
      <h3>🏛️ Napa Valley 的傳奇酒莊</h3>
      <div class="estates-grid">
        <div class="estate-card">
          <h4>Opus One</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">1979 年由 Robert Mondavi 和波爾多五大酒莊之一的 Mouton-Rothschild 共同創立，是加州最著名的「聯姻酒莊」。波爾多風格調配（以 Cabernet Sauvignon 為主），每年僅生產約 25,000 箱。</p>
          <p class="estate-style">風格：結構細緻、優雅，紅醋栗、雪松木、石墨</p>
        </div>
        <div class="estate-card">
          <h4>Stag's Leap Wine Cellars</h4>
          <p class="estate-location">Stags Leap District</p>
          <p class="estate-story">1973 Cabernet Sauvignon 在 1976 年巴黎評判中奪冠，奠定了 Napa 在全球葡萄酒版圖的地位。</p>
          <p class="estate-style">風格：天鵝絨般柔滑的單寧，黑莓、石墨、香料</p>
        </div>
        <div class="estate-card cult-wine">
          <h4>Screaming Eagle 🔥</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">年產僅約 500 箱（6,000 瓶），是加州最難買到的膜拜酒（Cult Wine）。Robert Parker 曾多次給予 100 分。2000 年一瓶在拍賣會上以 50 萬美元成交。</p>
          <p class="estate-style">風格：極度集中的黑色漿果，難以言喻的深度與複雜度</p>
        </div>
        <div class="estate-card cult-wine">
          <h4>Harlan Estate 🔥</h4>
          <p class="estate-location">Oakville hills</p>
          <p class="estate-story">Bill Harlan 創立的精品酒莊，以「傳家之寶」精神釀造。年產量極少，是加州 Cult Wine 的代表之一。</p>
          <p class="estate-style">風格：極高濃縮度，帶有可可、菸草、烤肉香氣</p>
        </div>
        <div class="estate-card">
          <h4>Robert Mondavi Winery</h4>
          <p class="estate-location">Oakville</p>
          <p class="estate-story">1966 年建立，是現代 Napa 葡萄酒產業的奠基者。Robert Mondavi 推廣了加州葡萄酒在全球的形象，並率先採用法國橡木桶和低溫發酵技術。</p>
          <p class="estate-style">風格：以 Cabernet 和 Fumé Blanc（Sauvignon Blanc）聞名</p>
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
          <p>Sonoma 最知名的 AVA，是世界頂級 Pinot Noir 和 Chardonnay 的主場。Petaluma Gap 讓太平洋冷風和晨霧每天深入谷地，使生長季極度涼爽且漫長。</p>
          <div class="sa-details">
            <span>氣候：涼爽，多霧</span>
            <span>代表酒莊：Williams Selyem、Rochioli、Gary Farrell</span>
            <span>特色：優雅 Pinot，草莓、玫瑰、香料風味</span>
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
          <p>Sonoma 最溫暖、最大的 AVA。河邊礫石土壤，溫暖氣候，出產加州最柔美、果味豐沛的 Cabernet Sauvignon（被稱為「Sonoma Cab」的代表）。</p>
          <div class="sa-details">
            <span>氣候：溫暖</span>
            <span>代表酒莊：Silver Oak（Alexander Valley）、Jordan Winery</span>
            <span>特色：柔滑 Cabernet，黑莓、李子、甜香草</span>
          </div>
        </div>
        <div class="sa-item">
          <h4>🌊 Sonoma Coast（索諾瑪海岸）</h4>
          <p>廣大的 AVA，包括緊鄰太平洋的極涼爽產地（「True Sonoma Coast」）。是加州最具布根地風格的 Pinot Noir 產地——酸度明亮，結構優雅。</p>
          <div class="sa-details">
            <span>氣候：涼爽至極涼爽（依距海遠近）</span>
            <span>代表酒莊：Flowers Vineyard、Hirsch Vineyards</span>
            <span>特色：礦物感 Pinot，帶有海鹽和玫瑰花瓣</span>
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
            options: ['A. Alexander Valley', 'B. Dry Creek Valley', 'C. Russian River Valley', 'D. Bennett Valley'],
            correct: 2,
            explanation: 'Russian River Valley 通過 Petaluma Gap 每天接收太平洋涼爽的霧氣和海風，生長季漫長而涼爽，是加州頂級 Pinot Noir 和 Chardonnay 的主要產地。'
          },
          {
            type: 'single',
            question: 'Napa Valley 佔加州總葡萄酒產量的比例大約是？',
            options: ['A. 約 4%', 'B. 約 15%', 'C. 約 30%', 'D. 約 50%'],
            correct: 0,
            explanation: 'Napa Valley 只有 45,342 英畝葡萄園，僅佔加州總葡萄酒產量的約 4%，但卻產出加州最昂貴、最知名的葡萄酒，是全球單位面積產值最高的葡萄酒產區之一。'
          }
        ]
      }
    }
  }
]
