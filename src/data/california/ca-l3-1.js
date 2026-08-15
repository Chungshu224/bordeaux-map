/**
 * CA-L3-1 微氣候大師課：山坡谷地與 AVA 精細分析
 * 進階課程：Hillside vs Valley Floor 的風土對決、逆溫層物理學，以及加州頂尖名園的微氣候案例研究
 *
 * 內容查證來源（2026 年 8 月）：
 * - Ridge Vineyards 官網 Monte Bello 葡萄園頁面（海拔、Franciscan 綠岩與石灰岩地質）ridgewine.com
 * - Beckstoffer Vineyards 官網、Napa Valley Register、Wine Spectator、VinePair、Club Oenologique — To Kalon 葡萄園歷史與商標訴訟
 * - Winkler Index / Winkler Scale（UC Davis, A.J. Winkler & M.A. Amerine）— 加州五大氣候分區（Region I–V）heat summation 定義
 * - Napa Valley Vintners、GuildSomm — Napa 山地 AVA 沿革（Howell Mountain、Spring Mountain、Diamond Mountain、Mount Veeder）
 * - Decanter、The Wine Cellar Insider — Ridge Monte Bello 風格與陳年潛力描述
 * 註：涉及具體產量、價格、拍賣紀錄等數字若無法交叉驗證，以「約」或質性描述呈現，避免臆測精確數字。
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          當一般的葡萄酒愛好者說「Napa Cabernet」時，資深品飲者會追問：是谷地（Valley Floor）還是山坡（Hillside）？海拔幾公尺？坡向是東還是西？土壤下方是火山岩還是石灰岩？這些細節決定了一款酒是普通的優質酒，還是可以陳年 30 年的傳奇。本課帶您深入微氣候的世界——從逆溫層的物理原理，到 To Kalon、Monte Bello 這些傳奇名園的地質密碼。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>⛰️ 掌握山坡 vs 谷地風土的系統差異</h4>
            <p>從排水性、海拔、霜害風險、晝夜溫差等維度，全面理解兩種風土類型的葡萄酒個性</p>
          </div>
          <div class="point-item">
            <h4>🌫️ 理解逆溫層與霧線的物理機制</h4>
            <p>掌握「Thermal Belt（溫暖帶）」現象——為何海拔中段有時比谷底和山頂都更溫暖</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 深度解析高海拔 AVA 與傳奇名園</h4>
            <p>理解 Howell Mountain、To Kalon、Monte Bello 等地塊的地質與商業史</p>
          </div>
          <div class="point-item">
            <h4>📐 應用 Winkler Index 量化氣候分區</h4>
            <p>學會用「生長積溫（Growing Degree Days）」科學地比較不同 AVA 的熱量條件</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Napa Valley 山地 AVA 地圖',
    componentProps: {
      slide: {
        title: 'Napa Valley 山地 AVA 地圖',
        description: 'Spring Mountain・Howell Mountain・Mt. Veeder・Diamond Mountain・Atlas Peak——五大山地 AVA vs 谷地 AVA 對照',
        mapGroup: 'Napa Valley',
        highlightAVAs: ["Spring Mountain District","Howell Mountain","Mt. Veeder","Diamond Mountain District","Atlas Peak"],
      }
    }
  },

  {
    title: '山坡 vs 谷地：最根本的風土分野',
    content: `<div class="hillside-valley">
      <h3>⛰️ Hillside vs Valley Floor — 兩種加州風土哲學</h3>
      <p>在 Napa Valley，同樣的 Cabernet Sauvignon 種植在山坡和谷地，價格可以相差 5–10 倍，風格也截然不同。理解這個分野是進入精品加州葡萄酒世界的關鍵。</p>
      <div class="hv-comparison">
        <div class="hv-card hillside">
          <h4>⛰️ 山坡種植（Hillside Viticulture）</h4>
          <div class="hv-details">
            <div class="hv-factor">
              <strong>土壤貧瘠</strong>
              <p>岩石性、薄層土壤，養分少。葡萄樹被迫深根（根系可達 20 米），吸收深層礦物質，產量極低。</p>
              <p class="hv-result wine-quality">→ 葡萄顆粒小、果皮厚、糖分集中度高、礦物感豐富</p>
            </div>
            <div class="hv-factor">
              <strong>良好排水</strong>
              <p>雨水迅速流走，葡萄根系不會因過度灌溉而懶惰化，必須主動尋找水分。</p>
              <p class="hv-result wine-quality">→ 葡萄酒風格更集中、結構感更強</p>
            </div>
            <div class="hv-factor">
              <strong>海霧之上</strong>
              <p>許多 Napa 山地 AVA（Howell Mountain 420m+、Spring Mountain 400m+）高於晨霧雲層。白天陽光充足，夜晚溫度隨海拔下降。</p>
              <p class="hv-result wine-quality">→ 強烈陽光帶來更高花青素含量，涼夜保留酸度</p>
            </div>
            <div class="hv-factor">
              <strong>低產量</strong>
              <p>機械化困難、坡地作業費力，每英畝產量通常只有谷地的 1/3。</p>
              <p class="hv-result wine-quality">→ 精華集中，每顆葡萄的品質更高</p>
            </div>
          </div>
          <p class="hv-style">代表風格：濃縮、單寧強勁、礦物感顯著、陳年潛力極高</p>
          <p class="hv-examples">代表 AVA：Howell Mountain、Spring Mountain、Diamond Mountain、Mount Veeder</p>
        </div>
        <div class="hv-card valley">
          <h4>🌊 谷地種植（Valley Floor Viticulture）</h4>
          <div class="hv-details">
            <div class="hv-factor">
              <strong>肥沃沖積土</strong>
              <p>河流沉積的礫石和黏土，養分充足，葡萄生長旺盛。</p>
              <p class="hv-result wine-quality">→ 產量較高，果味更豐沛直接</p>
            </div>
            <div class="hv-factor">
              <strong>受海霧影響</strong>
              <p>低窪谷地是晨霧最先抵達、最後消散的地方。在 Carneros 和南 Napa，晨霧的降溫效果在谷地比山坡更顯著。</p>
              <p class="hv-result wine-quality">→ 涼爽感更強，更多花果香氣，酸度清晰</p>
            </div>
            <div class="hv-factor">
              <strong>霜害風險</strong>
              <p>冷空氣沿山坡下沉，在谷地積聚。春季霜害（Spring Frost）是谷地葡萄園的最大威脅之一。</p>
              <p class="hv-result wine-quality">→ 需要風車、灑水系統等霜害防護措施</p>
            </div>
            <div class="hv-factor">
              <strong>機械化作業</strong>
              <p>平坦地形適合機械收割，成本較低，適合大量生產。</p>
              <p class="hv-result wine-quality">→ 生產效率高，但精緻度不如山坡</p>
            </div>
          </div>
          <p class="hv-style">代表風格：果味豐沛、柔滑易飲、單寧較細緻、較早成熟可飲</p>
          <p class="hv-examples">代表 AVA：Oakville、Rutherford、St. Helena（谷地部分）</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '逆溫層與「溫暖帶」：山坡氣候的隱藏物理學',
    highlights: [
      { id: 'h1', icon: '🌫️', title: '逆溫層（Inversion Layer）', content: '正常情況下氣溫隨海拔升高而下降，但在晴朗無風的夜晚，冷空氣會沉積在谷底，形成「暖空氣在上、冷空氣在下」的逆溫現象。' },
      { id: 'h2', icon: '🎗️', title: 'Thermal Belt（溫暖帶）', content: '在逆溫層之上、山頂之下的中海拔帶狀區域，夜間溫度反而比谷底和山頂都更穩定溫暖，是加州許多頂級山坡葡萄園的黃金海拔。' },
      { id: 'h3', icon: '🌡️', title: '晝夜溫差（Diurnal Range）', content: '山坡地形因為冷空氣下沉快速排出，晝夜溫差往往比谷地更為劇烈，是保留酸度、發展香氣前驅物的關鍵機制。' }
    ],
    content: `<div class="inversion-physics">
      <h3>🌫️ 逆溫層與 Thermal Belt——加州山坡風土的核心物理機制</h3>
      <p>「為什麼半山腰的葡萄園比谷底和山頂都更受追捧？」答案在於一個反直覺的氣象現象：<strong>溫度逆增（Temperature Inversion）</strong>。</p>
      <div class="physics-steps">
        <div class="phys-step">
          <div class="phys-num">1</div>
          <div class="phys-content">
            <h4>正常晝間狀態：氣溫隨海拔遞減</h4>
            <p>白天陽光加熱地表，暖空氣上升，氣溫隨海拔升高而遞減（約每升高 100 米下降 0.6–1°C）。這是一般人熟悉的「山上比較冷」的常識。</p>
          </div>
        </div>
        <div class="phys-step">
          <div class="phys-num">2</div>
          <div class="phys-content">
            <h4>夜間反轉：冷空氣下沉、暖空氣上浮</h4>
            <p>入夜後地表快速輻射散熱，貼近地面的空氣先變冷。由於冷空氣密度較高，它會沿著山坡「流動」並在谷底積聚，形成一層冷空氣湖（Cold Air Pool）。與此同時，較暖的空氣被抬升到半山腰的高度，形成「谷底最冷、半山腰最暖、山頂又逐漸變冷」的三層結構。</p>
          </div>
        </div>
        <div class="phys-step">
          <div class="phys-num">3</div>
          <div class="phys-content">
            <h4>Thermal Belt：山坡種植的黃金海拔帶</h4>
            <p>這個位於逆溫層之上、比谷底溫暖、又還沒到達山頂涼爽帶的「溫暖帶」，正是許多加州頂級葡萄園刻意選址之處——霜害風險遠低於谷底（春季晚霜是谷地新芽的頭號殺手），冬季夜間又不會凍傷休眠芽。Howell Mountain（420–760m）、Diamond Mountain（120–520m）、Spring Mountain（90–760m）的核心地塊大多落在這個帶狀區域內。</p>
          </div>
        </div>
        <div class="phys-step">
          <div class="phys-num">4</div>
          <div class="phys-content">
            <h4>晝夜溫差如何形塑葡萄酒風格</h4>
            <p>山坡地形因排水快、冷空氣不積聚，晝夜溫差（Diurnal Temperature Range）往往可達 15–20°C，遠高於谷地的 10–14°C。白天的高溫促進糖分和酚類物質成熟，夜晚的低溫則減緩呼吸作用、保留蘋果酸，是加州能同時做到「濃郁」與「有酸度骨架」的關鍵機制。</p>
          </div>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat-box">
          <div class="stat-number">0.6–1°C</div>
          <div class="stat-label">正常晝間海拔每升 100m 溫度遞減幅度</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">15–20°C</div>
          <div class="stat-label">典型山坡葡萄園晝夜溫差</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">400m+</div>
          <div class="stat-label">Napa 多數逆溫層上緣（晨霧雲頂）海拔</div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Napa 山地 AVA 深度解析',
    content: `<div class="napa-mountain-avas">
      <h3>🏔️ Napa Valley 四大山地 AVA</h3>
      <div class="mountain-ava-grid">
        <div class="mava-card">
          <h4>Howell Mountain</h4>
          <div class="mava-specs">
            <span>海拔：420–760 m</span>
            <span>AVA 認定：1984 年</span>
            <span>面積：約 1,100 英畝葡萄園</span>
          </div>
          <p>位於 Napa 東側山脊，海拔在晨霧雲層之上。火山噴出的紅色黏土（volcanic tuff）和礫石土壤，礦物含量極高。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>加州最具陳年潛力的 Cabernet Sauvignon 產地之一——深色水果、石墨、黑巧克力，單寧結構強勁但精緻。需要至少 10 年才進入適飲期。</p>
          </div>
          <p class="mava-estates">代表酒莊：Dunn Vineyards（加州最具陳年潛力的 Cabernet 之一）、Robert Keenan、Lamborn Family Vineyards</p>
        </div>
        <div class="mava-card">
          <h4>Spring Mountain District</h4>
          <div class="mava-specs">
            <span>海拔：90–760 m（跨越極大）</span>
            <span>AVA 認定：1993 年</span>
            <span>面積：約 1,000 英畝葡萄園</span>
          </div>
          <p>位於 Napa 西側，地質複雜——火山岩、頁岩、砂岩，不同小坡面展現不同個性。涼爽的山地微氣候比谷地低 3–5°C。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>兼具優雅和力量的 Cabernet——比谷地更多礦物感，比 Howell Mountain 更精細。也出產加州最優質的 Pinot Noir（特別是高海拔的 Chardonnay）。</p>
          </div>
          <p class="mava-estates">代表酒莊：Pride Mountain Vineyards（跨越 Napa/Sonoma 縣界！）、Spring Mountain Vineyard</p>
        </div>
        <div class="mava-card">
          <h4>Diamond Mountain District</h4>
          <div class="mava-specs">
            <span>海拔：120–520 m</span>
            <span>AVA 認定：2001 年</span>
            <span>面積：約 430 英畝葡萄園</span>
          </div>
          <p>緊鄰 Calistoga 西北，溫度比谷地低（受益於春山涼風），黑色礫石土壤（volcanic breccia）是最大特色。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>深色果實（黑醋栗、黑莓）加上獨特的石墨和礦石質感，單寧緊緻但天鵝絨般柔滑。是性格最鮮明的 Napa 山地 AVA。</p>
          </div>
          <p class="mava-estates">代表酒莊：Diamond Creek（以三塊不同地質的單一葡萄園聞名）、von Strasser</p>
        </div>
        <div class="mava-card">
          <h4>Mount Veeder</h4>
          <div class="mava-specs">
            <span>海拔：120–790 m（Napa 最高峰）</span>
            <span>AVA 認定：1990 年</span>
            <span>面積：約 1,000 英畝葡萄園</span>
          </div>
          <p>位於 Napa 最西南方的玄武岩（Basalt）和砂岩高地。是 Napa 和 Sonoma 縣界的山脊，受到太平洋和 San Pablo Bay 的雙重影響。</p>
          <div class="mava-style">
            <h5>典型風格</h5>
            <p>加州最具大地感（Earthy）的 Cabernet——野生香料、泥土、蘑菇風味明顯，單寧顆粒感強，需要充分的時間才能完全開放。</p>
          </div>
          <p class="mava-estates">代表酒莊：Hess Collection、Chateau Potelle、Mount Veeder Winery</p>
        </div>
      </div>
    </div>`
  },

  {
    title: '傳奇名園案例研究：To Kalon 與 Monte Bello',
    content: `<div class="legendary-vineyards">
      <h3>🏛️ 兩座定義加州風土的傳奇名園</h3>
      <p>如果說山地 AVA 是「產區級」的風土單位，那麼 To Kalon 和 Monte Bello 就是「地塊級」的風土傳奇——它們的故事，本身就是加州葡萄酒史的縮影。</p>
      <div class="lv-grid">
        <div class="lv-card to-kalon">
          <h4>🌾 To Kalon Vineyard（Oakville，谷地沖積扇）</h4>
          <div class="lv-facts">
            <span>種植起始：1868 年（H.W. Crabb）</span>
            <span>命名：1886 年，希臘文「至高之美」</span>
            <span>地形：Oakville 沖積扇（Alluvial Fan）</span>
          </div>
          <p class="lv-history"><strong>歷史：</strong>拓荒者 H. W. Crabb 於 1868 年在 Oakville 建立 Hermosa Vineyard，1886 年更名為 To Kalon。1958 年起 Robert Mondavi 家族陸續購入超過 300 英畝，1966 年 Robert Mondavi 在此建立自己的酒莊，成為 Napa 現代精品化的起點。葡萄栽培專家 Andy Beckstoffer 也擁有原始 Crabb 地產的另一部分（Beckstoffer To Kalon）。</p>
          <p class="lv-legal"><strong>商標之爭：</strong>Robert Mondavi Winery 於 1988 年為「To Kalon」註冊商標，2002 年因 Schrader Cellars 使用 Beckstoffer To Kalon 名稱而興訟。2003 年雙方達成和解——Mondavi 授予 Beckstoffer 永久、免權利金的商標使用權，讓 Beckstoffer 種植戶得以在酒標上合法標示「To Kalon Vineyard」。這場訴訟凸顯了單一名園在加州已具備等同法國一級園（Grand Cru）的商業與法律價值。</p>
          <p class="lv-terroir"><strong>風土：</strong>位於 Oakville 沖積扇的頂部，深厚而排水良好的礫石壤土，是少數同時具備山麓排水性和谷地日照條件的地塊，被許多釀酒師視為 Napa Cabernet 的「原型」風格——黑醋栗、雪松、極細緻的單寧骨架。</p>
        </div>
        <div class="lv-card monte-bello">
          <h4>⛰️ Monte Bello（Santa Cruz Mountains，石灰岩高地）</h4>
          <div class="lv-facts">
            <span>海拔：約 400–825 m（1,300–2,700 英尺）</span>
            <span>酒莊：Ridge Vineyards（1959 年創立）</span>
            <span>距太平洋：僅約 24 公里（15 英里）</span>
          </div>
          <p class="lv-history"><strong>歷史：</strong>Ridge Vineyards 於 1959 年在 Santa Cruz Mountains 山脊上重新種植這片十九世紀已存在的老葡萄園。1971 年份的 Monte Bello 在 1976 年巴黎審判中位列第五，卻在 2006 年 30 週年重賽中奪冠，證明其驚人的陳年潛力（詳見 CA-L3-3）。</p>
          <p class="lv-terroir"><strong>風土：</strong>加州幾乎所有知名 Cabernet 產區中極少見的<strong>石灰岩基岩</strong>（約 1 億年前的海相沉積岩，疊加風化的 Franciscan 綠岩與黏土）。石灰岩具有中和酸性降雨、幫助葡萄保留天然酸度的效果——這在法國布根地和香檳被奉為圭臬的地質條件，在加州卻極為罕見。</p>
          <p class="lv-terroir"><strong>氣候：</strong>高海拔加上緊鄰太平洋，形成加州最涼爽的 Cabernet 產區之一，生長季比 Napa 谷地晚 2–3 週採收，造就緊緻的單寧骨架、清晰的酸度與極長的陳年曲線（頂級年份公認可陳放 30 年以上）。</p>
          <p class="lv-estates">是少數被稱為「加州一級園」（California First Growth）等級的非 Napa 產區地塊，也是理解「石灰岩 + 高海拔 + 濱海涼爽」組合的最佳教材。</p>
        </div>
      </div>
      <div class="lv-note">
        <h4>💡 名園分析的方法論</h4>
        <p>面對任何加州「Vineyard Designate（單一葡萄園）」酒款，專業品飲者會依序追問四個問題：<strong>①海拔與逆溫層位置 ②母岩與土壤結構 ③與水體（海洋/海灣/河流）的距離 ④歷史種植紀錄與砧木/克隆選擇</strong>。這四個維度的組合，遠比「哪個 AVA」更能解釋一款酒的真實風格根源。</p>
      </div>
    </div>`
  },

  {
    title: '坡向（Aspect）的微氣候效應',
    content: `<div class="aspect-effect">
      <h3>🧭 坡向如何決定葡萄園的微氣候</h3>
      <p>在加州的葡萄酒產區，「面向」（Aspect）是選擇葡萄園地塊時的關鍵考量。同一條山坡上，因坡向不同，兩個地塊的白天最高溫可以相差 5°C。</p>
      <div class="aspect-grid">
        <div class="aspect-card east">
          <h4>🌅 東向坡（East-Facing）</h4>
          <p><strong>特點：</strong>享受清晨陽光（最柔和、能量最低），下午進入陰影。</p>
          <p><strong>效果：</strong>氣溫較低，生長季更長，葡萄成熟更緩慢。</p>
          <p><strong>適合：</strong>在溫暖產區（如 Napa 中部）種植需要涼爽環境的品種，帶來清爽酸度。</p>
          <p class="aspect-example">例子：Napa 谷地東側山坡的部分 Stags Leap District 葡萄園</p>
        </div>
        <div class="aspect-card west">
          <h4>🌇 西向坡（West-Facing）</h4>
          <p><strong>特點：</strong>下午享受最強烈的陽光（氣溫最高時段），最大化日照。</p>
          <p><strong>效果：</strong>氣溫更高，果實成熟度更高，酒精潛力更大。</p>
          <p><strong>適合：</strong>涼爽地區（如聖巴巴拉）增加葡萄成熟度的最佳策略。</p>
          <p class="aspect-example">例子：Santa Rita Hills 的部分西向坡面 Pinot Noir 葡萄園——充足日照讓涼爽產區的葡萄充分成熟</p>
        </div>
        <div class="aspect-card south">
          <h4>☀️ 南向坡（South-Facing）</h4>
          <p><strong>特點：</strong>整天接受最大量陽光，在加州北緯 35–38 度，南坡日照最充足。</p>
          <p><strong>效果：</strong>氣溫最高，最有利於在涼爽 AVA 達到成熟度。但在已經溫暖的產區，可能導致過熱。</p>
          <p><strong>適合：</strong>在涼爽 AVA（Anderson Valley）種植需要額外熱量的品種</p>
        </div>
        <div class="aspect-card north">
          <h4>🌑 北向坡（North-Facing）</h4>
          <p><strong>特點：</strong>日照最少，氣溫最涼爽。在加州溫暖產區，北向坡是降低氣溫的天然工具。</p>
          <p><strong>效果：</strong>最低溫、最緩慢的成熟，最高酸度。</p>
          <p><strong>適合：</strong>溫暖區域需要種植涼爽品種（如 Pinot Noir）時的選擇，但需謹慎評估成熟度風險。</p>
        </div>
      </div>
      <div class="aspect-case-study">
        <h4>案例研究：Diamond Creek 的三個地塊</h4>
        <p>Diamond Creek Vineyard（Diamond Mountain District）擁有三個相鄰但風格迥異的地塊，每塊分開裝瓶，完美說明微氣候的影響：</p>
        <ul>
          <li><strong>Volcanic Hill</strong>：火山土壤，排水最好，風格最緊實</li>
          <li><strong>Gravelly Meadow</strong>：礫石土壤，風格最圓潤細緻</li>
          <li><strong>Red Rock Terrace</strong>：紅色火山礫石，強勁且礦物感十足</li>
        </ul>
        <p>三個地塊相距不超過 500 公尺，卻在盲品中明顯可辨，是研究加州微氣候最好的活教材。</p>
      </div>
    </div>`
  },

  {
    title: 'Winkler Index：用生長積溫量化加州的氣候版圖',
    highlights: [
      { id: 'w1', icon: '📐', title: 'Winkler Index 的定義', content: '由 UC Davis 的 A.J. Winkler 與 M.A. Amerine 於二十世紀中葉發展，計算 4 月 1 日至 10 月 31 日間，每日平均氣溫超過 10°C（50°F）部分的累加值，稱為「生長積溫」（Growing Degree Days, GDD）。' },
      { id: 'w2', icon: '🌡️', title: '為何以 10°C 為基準', content: '葡萄樹在低於 10°C 時光合作用效率極低，幾乎不產生有效生長，因此只計算超過此門檻的「有效熱量」。' },
      { id: 'w3', icon: '⚠️', title: '侷限性', content: 'Winkler Index 只反映平均溫度總量，無法呈現晝夜溫差、濕度、風力或霧況等同樣關鍵的微氣候變因，因此只能作為初步分區工具，不能取代實地風土評估。' }
    ],
    content: `<div class="winkler-index">
      <h3>📐 Winkler Index：加州葡萄酒學的氣候分區基石</h3>
      <p>在缺乏歐洲傳統分級制度的加州，UC Davis 發展出的 Winkler Index（Winkler Scale）成為葡萄酒學校和產區規劃最常引用的量化氣候工具，把加州劃分為五個「熱量分區」（Region I–V）。</p>
      <div class="winkler-table-wrap">
        <table class="compare-table winkler-table">
          <thead>
            <tr><th>分區</th><th>生長積溫（GDD，°F 基準）</th><th>氣候特徵</th><th>代表 AVA / 適合品種</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Region I</strong></td>
              <td>2,500 以下</td>
              <td>最涼爽，近似布根地、香檳</td>
              <td>Anderson Valley、Santa Rita Hills（部分區塊）— Pinot Noir、Chardonnay、氣泡酒基酒</td>
            </tr>
            <tr>
              <td><strong>Region II</strong></td>
              <td>2,501–3,000</td>
              <td>涼爽，近似波爾多、隆河北部</td>
              <td>Russian River Valley、Carneros、Santa Lucia Highlands — Pinot Noir、Chardonnay、Syrah</td>
            </tr>
            <tr>
              <td><strong>Region III</strong></td>
              <td>3,001–3,500</td>
              <td>中等溫暖，近似隆河南部</td>
              <td>Napa Valley 谷地核心（Oakville、Rutherford）— Cabernet Sauvignon、Merlot</td>
            </tr>
            <tr>
              <td><strong>Region IV</strong></td>
              <td>3,501–4,000</td>
              <td>溫暖，近似南隆河、普羅旺斯</td>
              <td>Paso Robles 東側、Lodi — Zinfandel、GSM、Rhône 品種</td>
            </tr>
            <tr>
              <td><strong>Region V</strong></td>
              <td>4,000 以上</td>
              <td>炎熱，近似北非、南義</td>
              <td>Central Valley — 大宗量產、加烈酒、蒸餾用途</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="winkler-note">
        <h4>💡 進階應用：為何同一 AVA 內可以橫跨多個 Winkler 分區</h4>
        <p>Napa Valley 本身就是最佳範例——南端 Carneros（受 San Pablo Bay 涼風影響）落在 Region I–II，而北端 Calistoga 谷地核心可達到 Region III–IV，直線距離不到 50 公里，分區卻可能相差兩級。這正說明「AVA 名稱」本身不足以判斷風格，海拔、坡向、逆溫層位置與距離水體遠近，才是決定實際熱量條件的關鍵——這也是本課所有微氣候案例研究反覆強調的核心原則。</p>
      </div>
    </div>`
  },

  {
    title: '州內對比：三座石灰岩/高海拔名園',
    content: `<div class="statewide-compare">
      <h3>🗺️ 走出 Napa：加州其他關鍵山地/高海拔 AVA</h3>
      <p>微氣候大師課的最後一步，是把視野擴展到 Napa 之外——理解加州頂尖山地風土其實是一個全州性的現象。</p>
      <div class="regions-grid">
        <div class="region-card">
          <h4>Santa Cruz Mountains AVA</h4>
          <p><strong>海拔：</strong>可達 800 米以上，加州法定海拔門檻最高的 AVA 之一（部分地塊須達到特定最低海拔才可納入）。</p>
          <p><strong>特色：</strong>橫跨聖塔克拉拉與聖馬刁郡，太平洋與 San Francisco Bay 雙重影響，霧況複雜多變。Monte Bello 的石灰岩地質在此區並非特例，而是山脊地質的縮影。</p>
          <p class="region-example">代表：Ridge Vineyards、Mount Eden Vineyards</p>
        </div>
        <div class="region-card">
          <h4>Santa Lucia Highlands AVA</h4>
          <p><strong>海拔：</strong>60–450 米的向陽台地（Benchland），俯瞰 Salinas Valley。</p>
          <p><strong>特色：</strong>加州罕見的「強風 + 高海拔」組合——來自 Monterey Bay 的強勁午後海風大幅降低果實溫度、縮小果粒，是 Pinot Noir 和 Syrah 的頂尖產地，也是研究「風」作為微氣候變因（而非僅是霧或海拔）的最佳案例。</p>
          <p class="region-example">代表：Pisoni Vineyard、Rosella's Vineyard</p>
        </div>
        <div class="region-card">
          <h4>Sonoma Mountain / Moon Mountain District AVA</h4>
          <p><strong>海拔：</strong>約 130–670 米，位於逆溫層之上。</p>
          <p><strong>特色：</strong>與 Napa 山地 AVA 同緯度但氣候更受太平洋直接影響，火山土壤（源自 Sonoma 火山活動）賦予強勁單寧結構，是 Sonoma County 內最接近「Napa 山地風格」的 Cabernet 產地。</p>
          <p class="region-example">代表：Laurel Glen、Kunde（Moon Mountain 地塊）</p>
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
            question: '與谷地（Valley Floor）葡萄園相比，山坡（Hillside）葡萄園最主要的優勢是什麼？',
            options: ['A. 機械化作業更方便', 'B. 產量更高，成本更低', 'C. 貧瘠土壤迫使根系深扎，葡萄果實更集中，礦物感更豐富', 'D. 霜害風險更低'],
            correct: 2,
            explanation: '山坡地形的岩石性貧瘠土壤迫使葡萄根系向深處生長（可達20米），從深層土壤中汲取礦物質。較低的產量和集中的果實特性，以及高海拔帶來的涼夜，共同創造出風格集中、礦物感豐富、陳年潛力高的精品葡萄酒。'
          },
          {
            type: 'single',
            question: '「Thermal Belt（溫暖帶）」現象指的是什麼？',
            options: ['A. 谷底因為聚集陽光而成為全區最溫暖的地方', 'B. 逆溫層之上、比谷底更溫暖穩定、又未到達山頂涼爽帶的中海拔帶狀區域', 'C. 只出現在夏季正午的短暫高溫現象', 'D. 專指 Howell Mountain 的行銷用語，無氣象學基礎'],
            correct: 1,
            explanation: '夜間地表輻射散熱時，密度較高的冷空氣會沉積在谷底形成冷空氣湖，暖空氣則被抬升到半山腰，形成「谷底最冷、半山腰最暖」的逆溫結構。這個溫暖穩定的中海拔帶狀區域即為 Thermal Belt，是許多加州頂級山坡葡萄園刻意選址之處，因為霜害風險遠低於谷底。'
          },
          {
            type: 'single',
            question: 'Howell Mountain AVA 最著名的特色是什麼？',
            options: ['A. 位於 San Pablo Bay 旁，出產最好的 Pinot Noir', 'B. 420m 以上的海拔在晨霧之上，出產具有極高陳年潛力的 Cabernet Sauvignon', 'C. 加州最古老的酒莊聚集地', 'D. 地中海氣候最典型的體現'],
            correct: 1,
            explanation: 'Howell Mountain 位於 Napa 東側，海拔 420–760 米，高於晨霧雲層。火山土壤加上強烈陽光和涼爽夜晚，造就了加州最具陳年潛力的 Cabernet Sauvignon（代表：Dunn Vineyards）。'
          },
          {
            type: 'single',
            question: '關於 To Kalon Vineyard 的商標訴訟，以下敘述何者正確？',
            options: ['A. 訴訟最終判定「To Kalon」不能出現在任何酒標上', 'B. Robert Mondavi Winery 於 1988 年註冊「To Kalon」商標，2003 年與 Beckstoffer 和解，授予其永久免權利金的使用權', 'C. To Kalon 是一個受 TTB 正式認定的獨立 AVA', 'D. 這場訴訟發生在 1976 年巴黎審判之前'],
            correct: 1,
            explanation: 'Robert Mondavi Winery 於 1988 年為「To Kalon」註冊商標，2002 年因 Schrader Cellars 使用 Beckstoffer To Kalon 名稱興訟，2003 年雙方和解，Mondavi 授予 Beckstoffer 永久、免權利金的商標使用權。這場訴訟凸顯單一名園在加州已具備等同法國一級園的商業法律價值。'
          },
          {
            type: 'single',
            question: 'Ridge Vineyards 的 Monte Bello 葡萄園在地質上最獨特之處是什麼？',
            options: ['A. 純沖積沙質土壤', 'B. 疊加在 Franciscan 綠岩之上、加州 Cabernet 產區罕見的石灰岩基岩', 'C. 火山噴發形成的黑色礫石', 'D. 與 Napa 谷地相同的沖積扇地形'],
            correct: 1,
            explanation: 'Monte Bello 的土壤是風化的 Franciscan 綠岩與黏土，疊加在約 1 億年前的海相沉積石灰岩之上——這在 Napa、Sonoma 的知名 Cabernet 產區中極為罕見，石灰岩有助於中和酸性降雨、幫助葡萄保留天然酸度。'
          },
          {
            type: 'single',
            question: '在涼爽的聖巴巴拉產區，葡萄園選擇西向坡（West-Facing）的主要理由是？',
            options: ['A. 避免下午的強烈陽光', 'B. 接受下午最強烈的陽光，最大化葡萄成熟度', 'C. 靠近海洋，保持涼爽', 'D. 減少霜害風險'],
            correct: 1,
            explanation: '西向坡在下午（一天中最溫暖的時段）接受最強烈的陽光，可以最大化日照時數和葡萄成熟度。在聖巴巴拉這樣的涼爽產區，選擇西向坡是確保 Pinot Noir 和 Chardonnay 充分成熟的重要策略。'
          },
          {
            type: 'single',
            question: 'Winkler Index（生長積溫）的計算基準溫度為何是 10°C（50°F）？',
            options: ['A. 這是加州法律規定的葡萄種植下限溫度', 'B. 葡萄樹在低於此溫度時光合作用效率極低，幾乎不產生有效生長', 'C. 這是霜害發生的臨界溫度', 'D. 這是發酵啟動所需的最低溫度'],
            correct: 1,
            explanation: 'Winkler Index 只計算 4 月 1 日至 10 月 31 日間每日平均氣溫超過 10°C 部分的累加值，因為葡萄樹在低於此溫度時光合作用效率極低，幾乎不產生對成熟有意義的有效生長，因此只計入「有效熱量」。'
          },
          {
            type: 'single',
            question: 'Santa Lucia Highlands AVA 最關鍵、且與 Napa 山地 AVA 最不同的微氣候變因是什麼？',
            options: ['A. 極端乾旱', 'B. 來自 Monterey Bay 的強勁午後海風', 'C. 完全沒有霧氣影響', 'D. 極低海拔的谷地地形'],
            correct: 1,
            explanation: 'Santa Lucia Highlands 位於俯瞰 Salinas Valley 的向陽台地，來自 Monterey Bay 的強勁午後海風大幅降低果實溫度、縮小果粒，是研究「風」作為獨立微氣候變因（而非僅是霧或海拔）的經典案例。'
          }
        ]
      }
    }
  }
]
