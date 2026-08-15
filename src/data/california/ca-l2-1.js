/**
 * CA-L2-1 土壤與氣候：太平洋迷霧的力量
 * 加州葡萄酒風土深度解析——上升流機制、缺口地形、晝夜溫差生理學與土壤地質成因
 * 資料來源（2026 年查證）：
 *  - discovercaliforniawines.com（California Wine Institute）
 *  - UC Davis Coastal & Marine Sciences Institute「What is Coastal Upwelling」
 *  - USGS Pacific Coastal Fog Project；USGS Water-Supply Paper 1495（Napa/Sonoma 地質水文報告）
 *  - TTB Petaluma Gap AVA petition（downloads.regulations.gov TTB-2016-0009-0002）；petalumagap.com
 *  - Napa Valley Vintners「Napa Valley Soils and Geology」；napawineproject.com
 *  - Sonoma County Winegrowers「Growing in the Wind」；Jancis Robinson「Exploring cooler Sonoma」
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州為何能在同一個州內，同時生產與布根地並駕齊驅的 Pinot Noir，以及媲美波爾多的 Cabernet Sauvignon？答案不只是「靠海」這麼簡單——而是一套精密的物理系統：離岸風驅動的湧升流、地形缺口的風洞效應、夜間輻射冷卻，以及橫跨 1.5 億年的地質史所留下的土壤鑲嵌。本課將這套系統拆解到機制層級，讓您理解「為什麼」，而不只是「哪裡」。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌊 理解湧升流（Upwelling）的物理機制</h4>
            <p>掌握風力驅動的 Ekman 輸送如何把 50–100 公尺深的冷水帶到表層，造就終年偏低的海表溫度</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 缺口地形如何決定海霧滲透深度</h4>
            <p>以 Petaluma Gap、Chalk Hill、Russian River 缺口為案例，理解「熱力幫浦」如何把海霧吸入內陸</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 晝夜溫差的生理化學機制</h4>
            <p>理解輻射冷卻、下坡冷氣流如何影響蘋果酸代謝與酚類物質發展</p>
          </div>
          <div class="point-item">
            <h4>🪨 土壤形成地質學</h4>
            <p>區分沖積扇沉積、火山噴發、海洋沉積岩隆起三種截然不同的土壤成因與其風味意涵</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: '加州氣候帶 × 產區分布',
    componentProps: {
      slide: {
        title: '加州氣候帶 × 產區分布',
        description: '太平洋冷流影響下的氣候梯度：沿岸涼爽帶（Sonoma Coast、Santa Rita Hills）vs 內陸炎熱帶（Napa 谷地、Paso Robles）',
        mapGroup: 'overview',
      }
    }
  },

  {
    title: '湧升流的物理機制：海水為何比氣溫還冷',
    content: `<div class="upwelling-mechanism">
      <h3>🌊 Upwelling — 一個違反直覺的夏季現象</h3>
      <p>盛夏加州內陸氣溫可達 35°C 以上，但沿岸海水溫度卻只有 12–16°C——比許多冬季海域還冷。這不是偶然，而是一套精確的風力驅動機制，稱為<strong>沿岸湧升流（Coastal Upwelling）</strong>。</p>
      <div class="upwelling-steps">
        <div class="up-step">
          <div class="up-num">1</div>
          <h4>盛行的等赤道風（Equatorward Wind）</h4>
          <p>春夏季，太平洋高壓系統增強，沿北美西岸吹拂由北向南的持續強風，緊貼海岸線移動。</p>
        </div>
        <div class="up-step">
          <div class="up-num">2</div>
          <h4>科氏力造成的 Ekman 輸送</h4>
          <p>地球自轉的科氏力（Coriolis Force）讓表層海水的淨流向偏離風向約 90 度，在北半球是向右偏——也就是離岸方向。表層暖水被持續「吹離」海岸。</p>
        </div>
        <div class="up-step">
          <div class="up-num">3</div>
          <h4>深層冷水遞補上湧</h4>
          <p>表層水被輸送離岸後，海岸邊留下水位缺口，迫使下方 50–100 公尺深、營養豐富但溫度極低（約 8–10°C）的深層水上湧遞補，形成沿岸低溫帶。</p>
        </div>
        <div class="up-step">
          <div class="up-num">4</div>
          <h4>冷海面 + 暖濕空氣 = 平流霧</h4>
          <p>溫暖潮濕的太平洋氣團平流經過這片冷海面時，底層空氣被冷卻至露點以下，水氣凝結成霧——這稱為「平流霧」（Advection Fog），與內陸常見的輻射霧成因不同，是加州海岸霧「終年存在、範圍寬廣」的根本原因。</p>
        </div>
      </div>
      <div class="fog-examples">
        <h4>📍 海霧強度隨距海遠近遞減的案例</h4>
        <table class="fog-table">
          <thead><tr><th>地點</th><th>與海岸/海灣距離</th><th>海霧強度</th><th>最適品種</th></tr></thead>
          <tbody>
            <tr><td>Carneros（Napa/Sonoma南端）</td><td>直接鄰接 San Pablo Bay</td><td>非常強</td><td>Pinot Noir、Chardonnay</td></tr>
            <tr><td>Russian River Valley</td><td>~30 km（經 Petaluma Gap 與河谷）</td><td>強</td><td>Pinot Noir、Chardonnay</td></tr>
            <tr><td>Rutherford, Napa</td><td>~50 km</td><td>中等（午後海風為主）</td><td>Cabernet Sauvignon</td></tr>
            <tr><td>Calistoga, Napa北端</td><td>~60 km（山脈阻隔）</td><td>弱</td><td>Cabernet Sauvignon（最濃郁）</td></tr>
            <tr><td>Santa Rita Hills</td><td>~16 km，橫向山谷直通太平洋</td><td>極強</td><td>Pinot Noir、Chardonnay</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: '地形決定命運：缺口地形如何把海霧吸入內陸',
    content: `<div class="gap-topography">
      <h3>🏔️ 熱力幫浦：為什麼海霧只從特定缺口進入</h3>
      <p>加州海岸山脈絕大部分呈南北走向，像一道連續的牆阻擋太平洋涼氣。但這道牆並非完整無缺——沿線的幾個低窪「缺口」（Gap）成為海霧和海風進入內陸的天然通道。驅動這股氣流的，是內陸熱力低壓與沿海冷高壓之間的<strong>氣壓差幫浦效應</strong>：白天內陸山谷被曬熱，暖空氣上升形成低壓，把沿海濃密、冰冷的海洋氣層「吸」進缺口，速度隨午後增溫而加快。</p>
      <div class="gap-cards">
        <div class="gap-card">
          <h4>🌬️ Petaluma Gap — 全美第一個以風速界定的 AVA</h4>
          <p>介於 Tomales Bay 與 Bodega Bay 之間，一條寬約 15 英里、海拔多在 600 英尺以下的低矮丘陵走廊，讓太平洋海風幾乎無阻礙地灌入 Sonoma 南部再匯入 San Pablo Bay。2017 年獲 TTB 認定為 AVA 時，其邊界並非以山脊或河流劃定，而是以「持續風速達每小時 8 英里以上」的氣象數據為界——這在美國 AVA 史上是首例。午後風速隨內陸增溫而加大，也讓區內 Pinot Noir、Syrah 呈現厚實果皮、高酸的特徵。</p>
        </div>
        <div class="gap-card">
          <h4>🌫️ Russian River 河谷缺口</h4>
          <p>Russian River 切穿海岸山脈形成的天然河道，讓海霧像潮汐一樣，每天傍晚沿河谷湧入 Russian River Valley，夜間可讓氣溫驟降 35–40°F（約 19–22°C），隔日上午霧氣才隨日照消散退回海岸。這種「日夜潮汐式」的霧氣進出，是該 AVA 能同時保有充足日照成熟度與極佳天然酸度的關鍵。</p>
        </div>
        <div class="gap-card">
          <h4>☀️ Chalk Hill：缺口地形的「反例」</h4>
          <p>Chalk Hill AVA 雖與 Russian River Valley 相鄰，卻因地勢明顯較高，海拔優勢讓它逃離了大部分低窪河谷霧氣的覆蓋，氣候因而較周邊溫暖。這正好反向證明了缺口與海拔對霧氣分布的決定性：同一緯度、僅一線之隔，因地形微幅抬升即可從「涼爽 Pinot 產區」變成「溫暖 Bordeaux 品種產區」（Cabernet Sauvignon、Merlot 為主）。</p>
        </div>
        <div class="gap-card">
          <h4>🌉 San Pablo Bay / Carquinez 缺口</h4>
          <p>San Pablo Bay 是 San Francisco Bay 向北延伸的水域缺口，直接向 Napa 與 Sonoma 南端的 Carneros 輸送濃密海霧，是全北灣受海洋調節最深的區域，也解釋了為何同屬 Napa Valley 的 Carneros 與最北端的 Calistoga 氣候可以相差 10°C 以上。</p>
        </div>
      </div>
      <p class="gap-summary">💡 核心觀念：海霧從不「均勻」覆蓋加州海岸——它只從特定缺口進出，缺口的寬度、海拔與走向，共同決定了一個產區的氣候身分。</p>
    </div>`
  },

  {
    title: '晝夜溫差：從輻射冷卻到葡萄生理反應',
    content: `<div class="diurnal-variation">
      <h3>🌡️ Diurnal Temperature Range — 為什麼夜晚驟冷如此重要</h3>
      <p>加州許多優質葡萄酒產區擁有極大的<strong>晝夜溫差</strong>——白天可達 35°C，夜晚驟降至 10°C 左右，溫差超過 25°C。這個現象背後有兩個疊加的冷卻機制，加上明確的葡萄生理化學後果。</p>
      <div class="diurnal-mechanism">
        <div class="dm-card">
          <h4>1️⃣ 輻射冷卻（Radiative Cooling）</h4>
          <p>加州夏季內陸夜空幾乎無雲、濕度低，白天吸收的地表熱能得以在夜間迅速以長波輻射形式散逸至太空，沒有雲層或高濕度「蓋住」熱量，冷卻速度遠比潮濕氣候地區快。</p>
        </div>
        <div class="dm-card">
          <h4>2️⃣ 下坡冷氣流（Katabatic Drainage）</h4>
          <p>山坡上被輻射冷卻的空氣密度增加、變重，順著坡地向下滑入谷底，把最冷的空氣堆積在谷地低窪處——這也是為什麼許多酒莊偏好在半山腰而非谷底種植，以避開「冷空氣湖」與霜害風險。</p>
        </div>
      </div>
      <div class="diurnal-science">
        <div class="science-card">
          <h4>☀️ 白天（高溫）→ 糖分與酚類積累</h4>
          <ul>
            <li>強烈陽光驅動光合作用，葡萄糖分快速增加</li>
            <li>花青素（Anthocyanin）合成需要光照與適度高溫共同觸發，而非單靠熱量</li>
            <li>單寧分子聚合、軟化，趨向成熟圓潤</li>
          </ul>
        </div>
        <div class="science-card">
          <h4>🌙 夜晚（低溫）→ 酸度保留的生化機制</h4>
          <ul>
            <li>蘋果酸分解（呼吸作用）是溫度敏感反應：氣溫每下降約 10°C，代謝速率約減半，低溫因此大幅抑制蘋果酸被葡萄自身「呼吸」消耗掉</li>
            <li>葡萄因此保留更多天然酸度，而非依賴人工補酸</li>
            <li>萜類等揮發性芳香物質在低溫下較不易揮發散失，得以保存於果實中</li>
          </ul>
        </div>
      </div>
      <div class="diurnal-examples">
        <h4>📊 代表性產區晝夜溫差數據（夏季平均，供教學參考）</h4>
        <div class="dtr-list">
          <div class="dtr-item">
            <span class="dtr-region">Napa Valley（Rutherford）</span>
            <span class="dtr-data">白天約 35°C / 夜晚約 13°C → 溫差約 22°C</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Russian River Valley</span>
            <span class="dtr-data">白天約 28°C / 夜晚約 10°C → 溫差約 18°C</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Paso Robles（East Side）</span>
            <span class="dtr-data">白天約 38°C / 夜晚約 12°C → 溫差約 26°C，全加州數一數二</span>
          </div>
          <div class="dtr-item">
            <span class="dtr-region">Santa Barbara（Santa Rita Hills）</span>
            <span class="dtr-data">白天約 25°C / 夜晚約 9°C → 溫差約 16°C，全天氣溫最低</span>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: '霧線之上：山地葡萄園的逆溫層優勢',
    content: `<div class="inversion-layer">
      <h3>🏔️ 為什麼 Howell Mountain、Mount Veeder 的酒莊要種在山坡上</h3>
      <p>清晨籠罩谷地的海霧並非無限往上堆疊——它有明確的物理上限，稱為<strong>逆溫層（Temperature Inversion Layer）</strong>。理解這個現象，才能解釋為何加州最頂尖的一批酒莊，反而刻意放棄肥沃的谷底，選擇種在陡峭的山坡上。</p>
      <div class="inversion-mechanism">
        <div class="im-card">
          <h4>🌫️ 谷底：冷空氣的聚集地</h4>
          <p>夜間輻射冷卻與下坡冷氣流，讓最冷、最重的空氣持續堆積在谷地低窪處。清晨的海霧層通常厚度僅約 150–450 公尺，緊貼谷底堆積，直到日照增溫才逐漸消散。</p>
        </div>
        <div class="im-card">
          <h4>☀️ 山坡：霧線之上的陽光帶</h4>
          <p>海拔高於霧層上限的山坡葡萄園（如 Howell Mountain 421 公尺以上），在清晨谷底仍一片霧茫茫時，已經沐浴在充足陽光下，日照時數明顯多於谷底鄰居。</p>
        </div>
        <div class="im-card">
          <h4>🍇 對葡萄的雙重好處</h4>
          <p>山地葡萄園因此同時享有「更多日照時數」（有利成熟度與酚類發展）與「排水更佳的貧瘠土壤」（天然限制產量、提高風味濃縮度）——這正是 Dunn Vineyards（Howell Mountain）、Mount Veeder 老藤等山地酒款以緊實單寧與陳年潛力聞名的物理根源。</p>
        </div>
      </div>
      <p class="inversion-note">💡 這也解釋了為何同屬 Napa Valley、緯度相近的谷底與山坡子 AVA，即使 Winkler 分區數值接近，實際風格仍可能天差地遠——逆溫層帶來的日照時數差異，是 GDD 積算無法完整捕捉的變因。</p>
    </div>`
  },

  {
    title: '土壤形成地質學：三種截然不同的成因',
    content: `<div class="soil-geology-formation">
      <h3>🕰️ 一億五千萬年的地質史，如何造就今日的葡萄園</h3>
      <p>加州葡萄酒風土的複雜度，根植於一段長達 1.5 億年的板塊構造史：法拉隆板塊（Farallon Plate）隱沒於北美板塊之下，把深海沉積物刮起擠壓成混雜地質體；隨後火山活動、河流侵蝕沖刷、板塊持續擠壓抬升，才形成今日交錯的土壤鑲嵌。理解「怎麼形成」比死記「哪裡有哪種土」更能解釋風格差異。</p>
      <div class="formation-compare">
        <table class="compare-table">
          <thead><tr><th>成因類型</th><th>地質機制</th><th>代表地層 / 案例</th><th>風格意涵</th></tr></thead>
          <tbody>
            <tr>
              <td>海洋沉積岩隆起</td>
              <td>法拉隆板塊隱沒時刮起的深海沉積物、火山碎屑與海底岩塊混雜擠壓，形成「法蘭西斯科雜岩系」（Franciscan Complex），後隨板塊擠壓抬升出海面</td>
              <td>Rutherford、Chiles Valley、Spring Mountain 部分區塊；Santa Rita Hills 的矽藻土正是海底矽藻遺骸沉積後隆起的結果</td>
              <td>頁岩、砂岩混雜，排水佳但保水力不均，常帶來礦石感與細緻單寧</td>
            </tr>
            <tr>
              <td>火山噴發沉積</td>
              <td>約 250–500 萬年前，Sonoma 火山群（Sonoma Volcanics）多次噴發，火山灰、熔岩流層層堆積，風化後形成火山岩壤土</td>
              <td>Calistoga、Mount Veeder、Atlas Peak、Sonoma Coast 部分區塊</td>
              <td>排水極佳、礦物質豐富，逼迫根系深扎，帶來煙燻、礦石與濃縮果味</td>
            </tr>
            <tr>
              <td>沖積扇沉積</td>
              <td>更新世（Pleistocene）以來，山區溪流挾帶岩屑、礫石、砂土沖出山谷谷口，隨水流減速逐層沉積成扇形地形</td>
              <td>Rutherford Bench（約 6,000 英畝礫石沖積地）、Oakville、Alexander Valley 河岸地</td>
              <td>排水良好但顆粒分層明確，造就集中果味與著名的「Rutherford Dust」單寧質地</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="soil-grid">
        <div class="soil-card volcanic">
          <div class="soil-icon">🌋</div>
          <h4>火山岩（Volcanic）</h4>
          <p class="soil-location">分布：Calistoga（Napa）、Sonoma Coast、Mount Veeder</p>
          <p class="soil-effect">排水良好，礦物質豐富。葡萄根系深扎以尋找水分，帶來礦石感和煙燻風味。Cabernet 在此呈現出強烈的煙燻黑醋栗個性。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Zinfandel</p>
        </div>
        <div class="soil-card gravel">
          <div class="soil-icon">🔸</div>
          <h4>礫石/沖積土（Gravel/Alluvial）</h4>
          <p class="soil-location">分布：Oakville、Rutherford、Stags Leap District（Napa）</p>
          <p class="soil-effect">良好排水迫使根系向深處生長，帶來集中的果實風味。Rutherford 的礫石帶有「Rutherford Dust」的獨特塵土感單寧質地。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Merlot</p>
        </div>
        <div class="soil-card clay">
          <div class="soil-icon">🟤</div>
          <h4>黏土（Clay）</h4>
          <p class="soil-location">分布：Carneros、Anderson Valley（Mendocino）</p>
          <p class="soil-effect">保水性強，維持均勻的水分供給。在涼爽氣候中能緩和過多的酸度，支撐 Pinot Noir 的豐腴質地和 Chardonnay 的圓潤口感。</p>
          <p class="soil-grapes">最適品種：Pinot Noir、Chardonnay</p>
        </div>
        <div class="soil-card limestone">
          <div class="soil-icon">⬜</div>
          <h4>石灰岩 / 矽藻土（Limestone / Diatomaceous）</h4>
          <p class="soil-location">分布：Santa Cruz Mountains（Ridge Monte Bello）、Paso Robles 西側、Santa Rita Hills</p>
          <p class="soil-effect">稀有但品質卓越。石灰岩排水快、礦物含量高；矽藻土則是遠古矽藻遺骸沉積後隆起，質輕多孔、極端排水，兩者都賦予葡萄酒出眾骨架與陳年潛力。</p>
          <p class="soil-grapes">最適品種：Cabernet Sauvignon、Syrah、Pinot Noir</p>
        </div>
        <div class="soil-card sandy">
          <div class="soil-icon">🟡</div>
          <h4>沙土（Sandy）</h4>
          <p class="soil-location">分布：Lodi（Central Valley）</p>
          <p class="soil-effect">天然抗根瘤蚜蟲（根瘤蚜蟲無法在鬆散沙土中移動），因此 Lodi 保有許多未嫁接的老藤（Old Vine）葡萄，樹齡可達 100+ 年。</p>
          <p class="soil-grapes">最適品種：Zinfandel 老藤</p>
        </div>
        <div class="soil-card schist">
          <div class="soil-icon">🪨</div>
          <h4>片岩/頁岩（Schist/Shale）</h4>
          <p class="soil-location">分布：Sierra Foothills（Amador、El Dorado County）</p>
          <p class="soil-effect">礦物質豐富，提供金屬/石墨感的礦物特性。Sierra Foothills 的葡萄在此土壤中展現出獨特的野生香料和礦石風味。</p>
          <p class="soil-grapes">最適品種：Zinfandel、Barbera、Syrah</p>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Winkler 熱量積算制度',
    content: `<div class="winkler-scale">
      <h3>🔬 Winkler Scale（熱量積算制度）</h3>
      <p>1944 年加州大學戴維斯分校的 Albert Winkler 和 Maynard Amerine 教授開創了<strong>熱量積算（Growing Degree Days, GDD）</strong>系統，將加州產區依年均熱量分為五個區域（Region I–V），成為現代葡萄酒地理學的基礎工具。</p>
      <div class="winkler-method">
        <h4>計算方法</h4>
        <p>計算 4月1日到10月31日之間，每天超過 10°C（50°F）的「有效熱量度日」總和。</p>
        <code class="formula">GDD = Σ [(最高溫 + 最低溫) / 2 − 10°C]</code>
      </div>
      <div class="winkler-regions">
        <div class="wr-item region-i">
          <div class="wr-header">
            <span class="wr-num">Region I</span>
            <span class="wr-gdd">&lt; 2,500 GDD (°F 計)</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">最涼爽 — 類似布根地氣候</p>
            <p class="wr-grapes">Pinot Noir、Chardonnay、Riesling、Sparkling wine</p>
            <p class="wr-example">代表地區：Carneros、Santa Rita Hills、Anderson Valley</p>
          </div>
        </div>
        <div class="wr-item region-ii">
          <div class="wr-header">
            <span class="wr-num">Region II</span>
            <span class="wr-gdd">2,501–3,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">涼爽 — 類似波爾多氣候</p>
            <p class="wr-grapes">Cabernet Sauvignon、Merlot、Sauvignon Blanc</p>
            <p class="wr-example">代表地區：大部分 Napa Valley、Russian River Valley</p>
          </div>
        </div>
        <div class="wr-item region-iii">
          <div class="wr-header">
            <span class="wr-num">Region III</span>
            <span class="wr-gdd">3,001–3,500 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">溫和 — 類似隆河谷地氣候</p>
            <p class="wr-grapes">Zinfandel、Syrah、Grenache</p>
            <p class="wr-example">代表地區：Paso Robles East、Alexander Valley、Sierra Foothills</p>
          </div>
        </div>
        <div class="wr-item region-iv">
          <div class="wr-header">
            <span class="wr-num">Region IV</span>
            <span class="wr-gdd">3,501–4,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">溫暖 — 類似南義大利氣候</p>
            <p class="wr-grapes">Barbera、Sangiovese、量產品種</p>
            <p class="wr-example">代表地區：Lodi、Sacramento Valley</p>
          </div>
        </div>
        <div class="wr-item region-v">
          <div class="wr-header">
            <span class="wr-num">Region V</span>
            <span class="wr-gdd">&gt; 4,000 GDD</span>
          </div>
          <div class="wr-detail">
            <p class="wr-climate">最炎熱 — 類似北非氣候</p>
            <p class="wr-grapes">強化酒品種、高產量混調用葡萄</p>
            <p class="wr-example">代表地區：San Joaquin Valley 最南端</p>
          </div>
        </div>
      </div>
      <div class="winkler-limits">
        <h4>⚠️ Winkler 制度的現代局限</h4>
        <p>Winkler 分區只計算「平均溫度」的積算總量，並未反映晝夜溫差、濕度或海霧時數等變因。因此，兩個 GDD 數值相同的產區，可能因晝夜溫差截然不同而釀出風格迥異的酒款——這也是為什麼現代風土研究會搭配本課稍早介紹的缺口地形與湧升流分析，而非單獨依賴 Winkler 分區。</p>
      </div>
    </div>`
  },

  {
    title: '風土整合：氣候機制與土壤如何共同作用',
    content: `<div class="terroir-synthesis">
      <h3>🧩 把三堂課學到的機制拼在一起</h3>
      <p>單獨看湧升流、缺口地形、晝夜溫差或土壤地質，都只是拼圖的一角。真正決定一個產區風格的，是這些機制在同一塊土地上疊加的結果。以下用四個指標性產區做總結練習：</p>
      <div class="synthesis-table">
        <table class="compare-table">
          <thead><tr><th>產區</th><th>主導氣候機制</th><th>主導土壤成因</th><th>疊加結果</th></tr></thead>
          <tbody>
            <tr><td>Carneros</td><td>San Pablo Bay 直接海霧入口，終年涼爽</td><td>黏土為主，保水性強</td><td>薄皮品種天堂：Pinot Noir、Chardonnay、氣泡酒基酒</td></tr>
            <tr><td>Calistoga</td><td>山脈阻隔海霧，逆溫層之下但緯度已遠離海洋</td><td>火山岩，排水極佳、礦物質豐富</td><td>加州最濃烈的 Cabernet：高酒精度、深色果香、礦石感</td></tr>
            <tr><td>Howell Mountain</td><td>海拔高於霧線，日照時數多於谷底</td><td>火山岩壤土，貧瘠限制產量</td><td>結構緊實、濃縮度高、極具陳年潛力</td></tr>
            <tr><td>Russian River Valley</td><td>Petaluma Gap + 河谷缺口雙重輸送，潮汐式霧氣</td><td>沖積土與部分海洋沉積岩</td><td>優雅高酸 Pinot Noir，兼具日照成熟度與涼爽保酸</td></tr>
          </tbody>
        </table>
      </div>
      <p class="synthesis-note">💡 品飲與判讀的實用心法：拿到一支加州酒，先問「它離海霧入口多遠、有沒有地形屏障」，再問「它種在谷底還是山坡」，最後問「土壤是排水好的礫石/火山岩，還是保水的黏土」——三個問題疊加起來，往往就能推論出酒款大致的風格輪廓。</p>
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
            question: '加州沿岸湧升流（Upwelling）造成海水異常寒冷的直接機制是什麼？',
            options: ['A. 海底火山活動釋放冷水', 'B. 風力驅動的 Ekman 輸送把表層暖水推離海岸，深層冷水上湧遞補', 'C. 極地融冰直接注入加州海域', 'D. 海洋潮汐週期性變化'],
            correct: 1,
            explanation: '等赤道風配合科氏力造成的 Ekman 輸送，使表層海水淨流向偏離風向約 90 度而離岸，留下的空缺由 50–100 公尺深、溫度僅約 8–10°C 的深層水上湧遞補，這就是沿岸湧升流的核心機制。'
          },
          {
            type: 'single',
            question: '加州海岸的濃霧屬於「平流霧」而非單純輻射霧，其主要成因是？',
            options: ['A. 內陸沙塵與水氣混合', 'B. 溫暖潮濕的空氣平流經過湧升流造成的冷海面而凝結', 'C. 高山積雪融化蒸發', 'D. 森林蒸散作用'],
            correct: 1,
            explanation: '平流霧是暖濕氣團水平移動、經過遠比氣溫冷的海面時被冷卻至露點以下而凝結形成，這正是湧升流造成的低溫海面與太平洋暖濕氣團交會的結果，使加州海岸霧終年存在且範圍寬廣。'
          },
          {
            type: 'single',
            question: 'Petaluma Gap AVA 在美國 AVA 認定史上最特殊之處是？',
            options: ['A. 是加州面積最大的 AVA', 'B. 邊界以持續風速（約每小時 8 英里以上）而非山脊或河流劃定', 'C. 完全不受海霧影響', 'D. 是加州最早成立的 AVA'],
            correct: 1,
            explanation: 'Petaluma Gap 於 2017 年獲認定為 AVA，其邊界依「太平洋風持續維持每小時 8 英里以上」的氣象數據劃定，是美國史上第一個以風速門檻界定範圍的法定產區。'
          },
          {
            type: 'single',
            question: '為什麼相鄰的 Chalk Hill AVA 比低窪的 Russian River Valley 更溫暖？',
            options: ['A. Chalk Hill 距海更近', 'B. Chalk Hill 地勢較高，逃過大部分低窪河谷的海霧覆蓋', 'C. Chalk Hill 土壤顏色較深吸熱較多', 'D. Chalk Hill 沒有任何海洋影響'],
            correct: 1,
            explanation: 'Chalk Hill 地勢明顯高於周邊河谷，海拔優勢讓它逃離了大部分沿河谷堆積的低窪霧氣，因此氣候比同緯度、地勢較低的 Russian River Valley 溫暖，適合種植 Bordeaux 品種。'
          },
          {
            type: 'single',
            question: '晝夜溫差大的地區，夜間低溫如何幫助葡萄保留天然酸度？',
            options: ['A. 低溫直接把糖分轉換成酸', 'B. 低溫抑制蘋果酸被葡萄自身呼吸作用分解的速率', 'C. 低溫促使葡萄產生更多單寧', 'D. 低溫讓葡萄停止光合作用'],
            correct: 1,
            explanation: '蘋果酸的分解屬於溫度敏感的呼吸代謝反應，氣溫每下降約 10°C，代謝速率約減半。夜間驟降的低溫因此大幅抑制蘋果酸被消耗，讓葡萄保留更多天然酸度。'
          },
          {
            type: 'single',
            question: '「Rutherford Bench」的礫石沖積土壤主要是透過什麼地質作用形成的？',
            options: ['A. 火山熔岩直接冷卻', 'B. 山區溪流挾帶岩屑沖出谷口、隨水流減速逐層沉積形成沖積扇', 'C. 冰河直接堆積', 'D. 海底珊瑚礁隆起'],
            correct: 1,
            explanation: 'Rutherford Bench 是典型的沖積扇地形：更新世以來山區溪流挾帶礫石、砂土沖出山谷谷口，隨水流減速逐層沉積，形成排水良好但顆粒分層的沖積土，也造就了「Rutherford Dust」的塵土感單寧質地。'
          },
          {
            type: 'single',
            question: 'Santa Rita Hills 著名的矽藻土（Diatomaceous Earth）成因是？',
            options: ['A. 現代工業廢棄物堆積', 'B. 古代矽藻等海洋微生物遺骸沉積於海床後，隨板塊擠壓隆起出露', 'C. 火山灰快速冷卻結晶', 'D. 沙漠風沙長期堆積'],
            correct: 1,
            explanation: '矽藻土是遠古矽藻等含矽微生物遺骸長期沉積於海床、形成富含二氧化矽的沉積層，後因西部橫向山脈的板塊擠壓活動隆起出露地表，質輕多孔、排水力極強。'
          },
          {
            type: 'single',
            question: '關於 Winkler 熱量積算制度（GDD）的現代局限，下列敘述何者正確？',
            options: ['A. GDD 完全不適用於加州', 'B. GDD 只反映平均溫度積算，未計入晝夜溫差、濕度或霧氣時數等變因', 'C. GDD 只能用於歐洲產區', 'D. GDD 與品種選擇完全無關'],
            correct: 1,
            explanation: 'Winkler 制度以「有效熱量度日」總和分區，但兩個 GDD 相同的產區可能因晝夜溫差、濕度、霧氣覆蓋時數不同而風格迥異，因此現代風土分析常需搭配缺口地形與湧升流分析等因素綜合判讀。'
          }
        ]
      }
    }
  }
]
