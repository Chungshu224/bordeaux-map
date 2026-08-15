/**
 * CA-L1-2 加州葡萄酒產區地理與氣候
 * 六大產區群的地理分佈、氣候特徵與風土
 * 資料來源：discovercaliforniawines.com（California Wine Institute）、Sonoma County Tourism、
 * Wente Vineyards／Concannon Vineyard 官網、Chalone Vineyard 官網、Tablas Creek Vineyard 官網、
 * Temecula Valley Winegrowers Association、Forbes（Livermore Valley 報導）、Wikipedia AVA 條目
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州南北長達逾 1,200 公里，東西橫跨山脈與海岸，地理多樣性造就了截然不同的葡萄酒風格。本課深入探索影響加州葡萄酒風土的關鍵地理因素——太平洋洋流、山谷地形、土壤類型——以及六大產區群各自的氣候個性與代表產區。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🗺️ 理解加州地理格局</h4>
            <p>掌握太平洋海岸山脈、中央谷地（Central Valley）、海岸山脈對氣候的影響</p>
          </div>
          <div class="point-item">
            <h4>🌡️ 氣候差異的核心驅動力</h4>
            <p>理解為何相距不遠的產區，氣候與風格卻可能天差地遠——海霧、山谷走向與海拔是三大關鍵</p>
          </div>
          <div class="point-item">
            <h4>🏔️ 各產區群的特色</h4>
            <p>能描述六大產區群的地理特徵、代表 AVA、重要酒莊與主要葡萄品種</p>
          </div>
        </div>
        <p class="intro-conclusion">Napa Valley 與 Sonoma County 的詳細子產區將於第 3、4 課深入探討，本課聚焦於六大產區群的整體地理架構與 North Coast 中較少被談及的 Mendocino、Lake County，以及 Central Coast、Sierra Foothills、Inland Valleys、Southern California 與 Far North California。</p>
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
          <p>加州沿岸流動的<strong>加利福尼亞寒流（California Current）</strong>是天然空調系統。冷水湧升（upwelling）帶來低溫濃霧，每天清晨從金門海峽和蒙特雷灣湧入內陸，降低葡萄園溫度。這股濃霧學名為「海洋層」（marine layer）：夜間與清晨籠罩谷地，通常在上午 9-11 點隨日照增溫而消散，午後才露出陽光。</p>
          <div class="effect-list">
            <div class="effect">⬇️ 降低夏季最高溫</div>
            <div class="effect">🌫️ 帶來清晨海霧（延遲葡萄成熟）</div>
            <div class="effect">🍇 保留天然酸度，適合 Pinot Noir、Chardonnay</div>
          </div>
          <p class="example">例：Carneros（位於 Napa 和 Sonoma 南端）就因鄰近 San Pablo Bay，是全加州最涼爽的產區之一。</p>
        </div>

        <div class="geo-factor mountains">
          <h4>② 海岸山脈（Coast Ranges）</h4>
          <p>南北走向的<strong>海岸山脈</strong>是阻擋海霧的屏障。山脈的開口（如金門海峽、Petaluma Gap、Rainbow Gap）決定了海霧與涼風能滲透多深的內陸，也形成所謂的「雨影效應」（rain shadow）——山脈背風側降雨量顯著較少。</p>
          <div class="valley-examples">
            <div class="valley">
              <strong>Napa Valley（東西向山谷）：</strong>
              <p>南端開口對著 San Pablo Bay，海霧可深入整個谷地；北端 Calistoga 最受保護，是全谷最溫暖的點。</p>
            </div>
            <div class="valley">
              <strong>Santa Ynez Valley（橫向山谷，東西走向）：</strong>
              <p>山谷直接面向太平洋，成為全加州最涼爽的 Pinot Noir 產區之一（Santa Rita Hills 子 AVA）。這種東西走向的山谷在加州南北向海岸線中相當罕見，是 Santa Barbara 產區的地理特權。</p>
            </div>
            <div class="valley">
              <strong>Petaluma Gap（Sonoma／Marin 之間的缺口）：</strong>
              <p>強勁而持續的午後涼風從此處灌入，讓周邊產區白天氣溫也不易飆高，2017 年獲認證為獨立 AVA。</p>
            </div>
          </div>
        </div>

        <div class="geo-factor elevation">
          <h4>③ 海拔高度</h4>
          <p>高海拔降低溫度、增加晝夜溫差，也讓葡萄園高於「霧線」（fog line），白天日照更充足，賦予葡萄酒更高的酸度和複雜度。</p>
          <div class="elevation-examples">
            <div class="elev-item"><strong>Ridge Monte Bello（Santa Cruz Mountains）：</strong>海拔約 800 公尺，是加州海拔最高、最具陳年潛力的 Cabernet 產地之一</div>
            <div class="elev-item"><strong>Spring Mountain / Diamond Mountain（Napa）：</strong>600-800 公尺山地 AVA，帶來更緊緻、濃縮的單寧結構</div>
            <div class="elev-item"><strong>Sierra Foothills：</strong>300-1000 公尺丘陵，帶來自然的葡萄濃縮度</div>
            <div class="elev-item"><strong>Santa Lucia Highlands（Monterey）：</strong>坡地葡萄園位於霧線之上，白天充分日照、夜晚受蒙特雷灣強風降溫，形成獨特的「風」風土（wind-driven terroir）</div>
          </div>
        </div>
      </div>
    </div>`
  },

  {
    title: 'North Coast（北海岸）產區群',
    content: `<div class="region-detail north-coast">
      <h3>🌉 North Coast — 全球最知名的葡萄酒地帶</h3>
      <p class="region-intro">North Coast 涵蓋 Napa、Sonoma、Mendocino 和 Lake County，擁有超過一半加州酒莊，是全球最重要的精品葡萄酒產地之一。Napa 與 Sonoma 的子產區詳情將於第 3、4 課深入介紹，本課聚焦於較少被談及、卻同樣精彩的 Mendocino 與 Lake County。</p>

      <div class="sub-regions">
        <div class="sub-region napa">
          <h4>🏆 Napa Valley（詳見第 3 課）</h4>
          <ul>
            <li><strong>地理：</strong>南北走向山谷，南接 San Pablo Bay，北至 Calistoga</li>
            <li><strong>氣候：</strong>地中海型，南涼北暖，年降雨集中在冬季</li>
            <li><strong>主角品種：</strong>Cabernet Sauvignon（占最大種植面積）</li>
            <li><strong>特色：</strong>1839 年首批葡萄；1981 年成為加州第一個 AVA；全美首個農業保護區（1968 年）</li>
          </ul>
        </div>

        <div class="sub-region sonoma">
          <h4>🍷 Sonoma County（詳見第 4 課）</h4>
          <ul>
            <li><strong>地理：</strong>Napa 以西，多個山谷與海岸地帶，19 個 AVA</li>
            <li><strong>氣候：</strong>多元——從海岸涼爽（Sonoma Coast）到內陸溫暖（Alexander Valley）</li>
            <li><strong>主角品種：</strong>Pinot Noir（加州全州種植面積最多的郡）、Chardonnay、Zinfandel</li>
            <li><strong>特色：</strong>1857 年 Agoston Haraszthy 創立 Buena Vista Winery；99% 葡萄種植面積取得可持續認證</li>
          </ul>
        </div>

        <div class="sub-region mendocino">
          <h4>🌿 Mendocino County</h4>
          <p>Sonoma 以北的清幽產區，是加州有機與生物動力農法的先鋒——超過四分之一的葡萄園採用有機或生物動力種植，比例居加州各郡之冠。</p>
          <ul>
            <li><strong>Anderson Valley：</strong>核心子 AVA，狹長的橫向山谷直接面向太平洋，涼爽多霧，是加州最優雅的 Pinot Noir 與 Alsace 品種（Gewürztraminer、Riesling）產地之一，也是傳統法製作起泡酒的重鎮。代表酒莊：<strong>Navarro Vineyards</strong>（1974 年創立，家族經營的有機先驅）、<strong>Roederer Estate</strong>（1982 年由香檳名廠 Louis Roederer 創立，是該廠首個海外據點）。</li>
            <li><strong>Mendocino Ridge：</strong>非常特殊的 AVA——只涵蓋海拔 366 公尺以上的山頭，如同「懸在空中的島嶼」（islands in the sky），是美國極少數以海拔而非連續地界劃定的 AVA，以老藤 Zinfandel 聞名。</li>
            <li><strong>Redwood Valley、Potter Valley：</strong>內陸較溫暖產區，以 Zinfandel、Sauvignon Blanc 見長。</li>
          </ul>
        </div>

        <div class="sub-region lake">
          <h4>🏞️ Lake County</h4>
          <p>以加州最大天然淡水湖 Clear Lake 為中心，是 North Coast 中地價相對親民、近年快速崛起的產區。</p>
          <ul>
            <li><strong>地理與土壤：</strong>湖泊調節周邊小氣候；Mt. Konocti 一帶留下的火山岩土壤賦予礦石感</li>
            <li><strong>Guenoc Valley：</strong>整個 AVA 幾乎由單一酒莊擁有的特殊案例（Langtry Estate）</li>
            <li><strong>特色：</strong>葡萄種植始於 1870 年代；高海拔（部分葡萄園逾 600 公尺）帶來清爽酸度</li>
            <li><strong>主角品種：</strong>Cabernet Sauvignon、Sauvignon Blanc（高品質且相對平價，近年頗受侍酒師與精品餐廳青睞）</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'North Coast 產區地圖',
    componentProps: {
      slide: {
        title: 'North Coast — Napa、Sonoma、Mendocino 產區地圖',
        description: 'North Coast 是全球最知名的精品葡萄酒地帶，涵蓋 Napa Valley 和 Sonoma County 等頂尖產區',
        mapGroup: 'North Coast',
      }
    }
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Mendocino & Lake 產區地圖',
    componentProps: {
      slide: {
        title: 'Mendocino & Lake County 產區地圖',
        description: 'North Coast 最北端的兩個產區——有機農法先鋒 Mendocino，與湖畔新興產區 Lake County',
        mapGroup: 'Mendocino & Lake',
      }
    }
  },

  {
    title: 'Central Coast（中央海岸）產區群',
    content: `<div class="region-detail central-coast">
      <h3>🌊 Central Coast — 從 Livermore 到 Santa Barbara 的海岸精品帶</h3>
      <p class="region-intro">Central Coast 沿太平洋海岸延伸超過 400 公里，涵蓋多個個性鮮明的子產區，是加州最多樣化的葡萄酒區域之一。太平洋海霧是這裡的靈魂。</p>

      <div class="sub-regions">
        <div class="sub-region livermore">
          <h4>🔬 Livermore Valley — 加州 Chardonnay 與 Cabernet 的基因庫</h4>
          <p>舊金山灣區東緣，1883 年 Carl H. Wente 和 James Concannon 兩位移民幾乎同時創立 <strong>Wente Vineyards</strong> 與 <strong>Concannon Vineyard</strong>，是美國歷史最悠久的家族酒莊之一。1912 年 Wente 家族從法國引進 Chardonnay 插枝，篩選培育出「Wente 克隆」（Wente clone），今日超過 75% 的加州 Chardonnay 血統可追溯至此；1893 年 Concannon 從波爾多 Château Margaux 引進 Cabernet Sauvignon 插枝，至今約 80% 的加州 Cabernet Sauvignon 可追溯至這批「Concannon clone」。礫石與石灰質土壤帶來類波爾多的風土條件。</p>
        </div>

        <div class="sub-region monterey">
          <h4>🌬️ Monterey County</h4>
          <p>蒙特雷灣的強烈海風（俗稱「蒙特雷噴嘴」Monterey Funnel）帶來極涼爽氣候，是加州風量最大的產區。葡萄藤必須逆風生長，造就天然低產量和濃縮風味。</p>
          <ul>
            <li><strong>Santa Lucia Highlands：</strong>坡地葡萄園位於霧線之上，Pinot Noir 與 Syrah 表現卓越，是近 20 年崛起最快的加州 Pinot 產區之一。</li>
            <li><strong>Chalone AVA：</strong>1982 年成為 Monterey 郡第一個 AVA，海拔近 600 公尺，石灰岩與火山岩混合土壤全加州罕見。<strong>Chalone Vineyard</strong> 葡萄園早在 1919 年即已種植，是郡內最古老的葡萄園之一，以 Chardonnay 和 Pinot Noir 聞名。</li>
            <li><strong>Arroyo Seco：</strong>以 Riesling 與 Chardonnay 見長，卵石覆蓋的沖積扇土壤幫助夜間快速散熱。</li>
          </ul>
        </div>

        <div class="sub-region pasoro">
          <h4>☀️ Paso Robles</h4>
          <p>中央海岸最熱、面積最大的次產區，西區（較涼，石灰質土壤）和東區（較熱，沖積土）風格迥異，2014 年官方細分為 11 個次分區。以 Rhône 風格葡萄酒聞名（Syrah、Grenache、Mourvèdre），但 Cabernet Sauvignon 和 Zinfandel 也表現卓越。</p>
          <div class="key-avas">
            <span class="ava-tag">Tablas Creek（1989 年由 Rhône 名莊 Château de Beaucastel 家族與 Vineyard Brands 的 Haas 家族合資創立，引進 16 個 Rhône 品種插枝，帶動加州「Rhône Ranger」運動）</span>
            <span class="ava-tag">DAOU、Justin Vineyards（Bordeaux 風格代表酒莊）</span>
          </div>
        </div>

        <div class="sub-region scm">
          <h4>🏔️ Santa Cruz Mountains</h4>
          <p>舊金山南方山地 AVA，以罕見石灰岩土壤著稱，1981 年即獲認證，是加州最早依據氣候（而非郡界）劃定邊界的 AVA 之一——邊界劃在霧線高度，凡是位於海霧之上、能獲得充分日照的坡地才劃入產區。<strong>Ridge Vineyards</strong> 的 Monte Bello 莊園自 1885 年即開始種植，1959 年由 4 位史丹佛研究院科學家重新整理復耕，生產加州最具陳年潛力的 Cabernet Sauvignon 之一，2006 年「巴黎評判 30 周年重賽」中奪冠。</p>
        </div>

        <div class="sub-region santabarbara">
          <h4>🎬 Santa Barbara County</h4>
          <p>因電影《Sideways》（2004）而聲名大噪的 Pinot Noir 聖地。橫向山谷（Santa Ynez Valley）直接面向太平洋，帶來加州最優雅的 Pinot Noir 和 Chardonnay。開拓者 <strong>Richard Sanford</strong> 於 1971 年在 Santa Rita Hills 種下 Sanford & Benedict Vineyard，1981 年創立 Sanford Winery；1982 年 Jim Clendenen 與 Adam Tolmach 創立 <strong>Au Bon Climat</strong>，以布根地風格 Chardonnay、Pinot Noir 聞名，兩者都是產區奠基者。</p>
          <div class="key-avas">
            <span class="ava-tag">Sta. Rita Hills（涼爽 Pinot，海洋沉積土壤）</span>
            <span class="ava-tag">Happy Canyon of Santa Barbara（Bordeaux 品種，全產區最溫暖）</span>
            <span class="ava-tag">Ballard Canyon（Syrah 專精產區）</span>
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
        <p>内華達山脈西麓，海拔 300-1000 公尺的丘陵地帶。1850 年代加州淘金熱帶來大量移民，也帶來了種植葡萄的傳統——義大利、克羅埃西亞移民尤其偏好在此落地生根。Amador County（Shenandoah Valley）的 Zinfandel 老藤，部分樹齡逾百年，被稱為「老藤女王」（Old Vine Queen）；花崗岩風化砂質土壤（decomposed granite）排水極佳，有助葡萄根系深扎。代表酒莊：<strong>Renwood Winery</strong>（老藤 Zinfandel 專精）、<strong>Terre Rouge / Easton</strong>（Rhône 品種先驅）。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Shenandoah Valley（Amador）、Fair Play（El Dorado）、Fiddletown</span>
          <span>🍇 Zinfandel 老藤、Barbera、Syrah、義式品種（Sangiovese、Barbera）</span>
        </div>
      </div>

      <h3>🌾 Inland Valleys（內陸谷地）</h3>
      <div class="region-block">
        <p>包含中央谷地（Central Valley）從 Sacramento 到 Fresno 的廣大平原，是加州葡萄酒量產的引擎，供應全美絕大多數的日常餐酒與桶裝酒。但 <strong>Lodi AVA</strong> 是例外——這裡沙質土壤天然抵禦根瘤蚜蟲，讓部分 Zinfandel 老藤得以逃過根瘤蚜蟲浩劫，樹齡最老者已超過 100 年，其中 Mokelumne River 子 AVA 是老藤最集中的區域。<strong>Bogle Vineyards</strong>（1979 年創立於 Clarksburg）和 <strong>Michael David Winery</strong>（1984 年由 Phillips 家族第五代創立，代表作「7 Deadly Zins」）是產區代表酒莊，正共同推動 Lodi 從量產走向精品化。Delta 涼風（Sacramento-San Joaquin Delta Breeze）帶來意外的天然酸度。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Lodi（含 Mokelumne River 等 7 個子 AVA）、Clarksburg、Madera</span>
          <span>🍇 Zinfandel、Chardonnay、Merlot、Petite Sirah</span>
        </div>
      </div>

      <h3>☀️ Southern California（南加州）</h3>
      <div class="region-block">
        <p><strong>Temecula Valley</strong>（特梅庫拉谷）是南加州最重要的葡萄酒旅遊目的地，距洛杉磯約 90 分鐘車程。高爾夫球具創辦人 Ely Callaway 於 1969 年創立 <strong>Callaway Vineyard</strong>，是產區第一座商業酒莊、也是第一個開設品飲室的酒莊，證明南加州同樣能種出優質葡萄酒。「Rainbow Gap」（彩虹缺口）讓太平洋涼風得以吹入原本應該炎熱的內陸谷地，帶來夜間降溫。San Diego County 的 Ramona Valley（2006 年設立 AVA）也有日益增長的葡萄酒旅遊社群。</p>
        <div class="key-facts-small">
          <span>📍 核心 AVA：Temecula Valley、Ramona Valley</span>
          <span>🍇 Cabernet Franc、Chardonnay、Sauvignon Blanc</span>
        </div>
      </div>

      <h3>🌲 Far North California（遠北加州）</h3>
      <div class="region-block">
        <p>涵蓋 Humboldt、Trinity、Shasta 等縣，是加州葡萄酒的最後邊疆，商業化程度全州最低。涼爽濕潤的氣候適合 Pinot Noir 和 Riesling，少數先驅酒莊正在探索這片原始土地的潛力，也因遠離主要葡萄酒觀光路線而維持著近乎原生態的種植環境。</p>
        <div class="key-facts-small">
          <span>🍇 Pinot Noir、Riesling、涼氣候品種</span>
          <span>特色：商業酒莊數量全州最少，是加州葡萄酒的下一個前沿</span>
        </div>
      </div>
    </div>`
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Central Coast 產區地圖',
    componentProps: {
      slide: {
        title: 'Central Coast — 從 Livermore 到 Santa Barbara 的海岸精品帶',
        description: 'Central Coast 延伸逾 400 公里，多樣地形造就截然不同的葡萄酒風格',
        mapGroup: 'Central Coast',
      }
    }
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Sierra Foothills 產區地圖',
    componentProps: {
      slide: {
        title: 'Sierra Foothills — 淘金熱留下的老藤 Zinfandel 產區',
        description: '内華達山脈西麓丘陵地帶，花崗岩風化土壤孕育出加州最古老的 Zinfandel 老藤之一',
        mapGroup: 'Sierra Foothills',
      }
    }
  },

  {
    title: '灌溉與旱作：加州葡萄園的水資源課題',
    content: `<div class="ca-irrigation">
      <h3>💧 地中海型氣候的夏季乾旱，讓灌溉成為必要課題</h3>
      <div class="irrigation-content">
        <p>加州地中海型氣候的降雨幾乎全集中在冬季，從春季發芽到秋季採收的整個生長季幾乎滴雨不下。經驗法則是：年降雨量低於約 500 公釐（20 英吋）的產區，葡萄藤在生長季就需要額外補水，否則難以維持正常生理機能與果實發育。</p>
        <div class="irrigation-grid">
          <div class="irrigation-item">
            <h4>💦 滴灌系統（Drip Irrigation）</h4>
            <p>加州絕大多數商業葡萄園採用低流量、低壓力的滴灌系統，將水分精準輸送至根系周圍，比噴灌或漫灌更節水、更能避免地表蒸發浪費。許多酒莊搭配氣象站、土壤水分探針與葉片水分壓力計等工具，精算葡萄藤的實際需水量。</p>
          </div>
          <div class="irrigation-item">
            <h4>🌵 旱作農法（Dry Farming）</h4>
            <p>部分歷史悠久的老藤葡萄園（尤其 Sonoma、Mendocino 的百年 Zinfandel 老藤）完全不灌溉，僅依賴葡萄根系深扎地下尋找水源。旱作葡萄藤產量天然較低，但普遍被認為能濃縮風味、增加葡萄與土地的連結感，是精品酒莊愈來愈重視的種植哲學。</p>
          </div>
        </div>
        <p class="irrigation-note">⚠️ 加州農業用水約占全州已開發水資源的 80%，葡萄種植只是其中一環；近年反覆出現的乾旱年份，讓水資源管理與節水種植技術（精準灌溉、覆蓋作物、土壤保水）成為加州葡萄酒產業永續發展的核心議題之一。</p>
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
            <td>Napa Valley、Russian River Valley、Anderson Valley</td>
            <td>Cab Sauv、Pinot Noir</td>
            <td>全球頂級精品</td>
          </tr>
          <tr>
            <td>🌊 Central Coast</td>
            <td>海洋型，海霧影響大</td>
            <td>Paso Robles、Sta. Rita Hills、Santa Lucia Highlands</td>
            <td>Pinot Noir、Chardonnay、Syrah</td>
            <td>優雅酸度、Rhône 品種</td>
          </tr>
          <tr>
            <td>⛏️ Sierra Foothills</td>
            <td>山地，晝夜溫差大</td>
            <td>Shenandoah Valley（Amador）、Fair Play</td>
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
            <td>地中海型，溫暖，Rainbow Gap 降溫</td>
            <td>Temecula Valley、Ramona Valley</td>
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
      <div class="comparison-notes">
        <h4>💡 三個容易混淆的觀念</h4>
        <ul>
          <li><strong>「產區群」≠「AVA」：</strong>North Coast、Central Coast 等名稱是行銷與地理慣用分類，不是 TTB 認定的法定 AVA，不能單獨作為酒標產區標示（須標示實際 AVA 名稱，如 Napa Valley）</li>
          <li><strong>海霧不是「均勻」分布的：</strong>同一產區群內，海霧滲透深度、強度差異極大，直接決定子產區風格（例：Monterey 的強風 vs. Napa 的晨霧）</li>
          <li><strong>「涼爽」不等於「多雨」：</strong>加州涼爽產區（如 Sta. Rita Hills）依然是地中海型氣候，降雨集中在冬季，夏季生長季幾乎不下雨，涼爽感主要來自海霧與海風而非降雨</li>
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
            question: '哪個地理因素是造成 Napa Valley 南端（Carneros）比北端（Calistoga）涼爽的主因？',
            options: ['A. 海拔高度', 'B. San Pablo Bay 帶來的太平洋海霧', 'C. 降雨量較多', 'D. 土壤含水量高'],
            correct: 1,
            explanation: 'Napa Valley 南端緊鄰 San Pablo Bay，太平洋冷海霧每天湧入，使南端（包含 Carneros）比北端 Calistoga 涼爽許多，適合種植 Pinot Noir 和 Chardonnay。'
          },
          {
            type: 'single',
            question: '「Judgment of Paris 30 周年重賽」中名列前茅的 Santa Cruz Mountains 知名 Cabernet 酒莊是？',
            options: ['A. Opus One', 'B. Ridge Vineyards（Monte Bello）', 'C. Chateau Montelena', 'D. Stag\'s Leap'],
            correct: 1,
            explanation: 'Ridge Vineyards 的 Monte Bello 以罕見石灰岩土壤著稱，在 2006 年「巴黎評判 30 周年重賽」中，Monte Bello 名列前茅，印證加州 Cabernet 的陳年潛力。'
          },
          {
            type: 'single',
            question: 'Sonoma County 以哪個品種的種植面積居加州全州之冠？',
            options: ['A. Cabernet Sauvignon', 'B. Chardonnay', 'C. Pinot Noir', 'D. Zinfandel'],
            correct: 2,
            explanation: 'Sonoma County 種植的 Pinot Noir 比加州任何其他郡都多，Russian River Valley 是最重要的子 AVA，以優雅、具布根地風格的 Pinot Noir 聞名。'
          },
          {
            type: 'single',
            question: 'Sierra Foothills 的 Amador County 以什麼特色著稱？',
            options: ['A. Cabernet Sauvignon 頂級酒款', 'B. Zinfandel 老藤，部分樹齡逾百年', 'C. 冷氣候 Pinot Noir', 'D. Chardonnay 的發源地'],
            correct: 1,
            explanation: 'Sierra Foothills 的 Amador County（Shenandoah Valley）以 Zinfandel 老藤著稱，部分葡萄藤樹齡超過百年，花崗岩風化砂質土壤是加州葡萄酒中的珍貴遺產。'
          },
          {
            type: 'single',
            question: '加州約 75% 的 Chardonnay 血統可追溯至哪個酒莊培育的克隆品系？',
            options: ['A. Robert Mondavi Winery', 'B. Wente Vineyards（Livermore Valley）', 'C. Chateau Montelena', 'D. Ridge Vineyards'],
            correct: 1,
            explanation: 'Wente 家族 1912 年從法國引進 Chardonnay 插枝並篩選培育出「Wente clone」，今日超過 75% 的加州 Chardonnay 血統可追溯至此，Livermore Valley 因此被稱為加州 Chardonnay 的基因庫。'
          },
          {
            type: 'single',
            question: 'Mendocino County 的 Mendocino Ridge AVA 有什麼特殊之處？',
            options: ['A. 是加州唯一禁止機械採收的 AVA', 'B. 只涵蓋海拔 366 公尺以上的山頭，如同懸在空中的島嶼', 'C. 是加州面積最小的 AVA', 'D. 只能種植白葡萄品種'],
            correct: 1,
            explanation: 'Mendocino Ridge 是美國極少數以海拔而非連續地界劃定的 AVA，只涵蓋海拔 366 公尺以上、位於霧線之上的山頭，因此被稱為「懸在空中的島嶼」（islands in the sky），以老藤 Zinfandel 聞名。'
          },
          {
            type: 'single',
            question: 'Paso Robles 的 Tablas Creek Vineyard 由哪個法國家族與美國夥伴於 1989 年合資創立？',
            options: ['A. Château Mouton-Rothschild', 'B. Château de Beaucastel（Perrin 家族）', 'C. Domaine Leflaive', 'D. Louis Roederer'],
            correct: 1,
            explanation: 'Tablas Creek Vineyard 由 Rhône 名莊 Château de Beaucastel 的 Perrin 家族與 Vineyard Brands 的 Haas 家族於 1989 年合資創立，引進 16 個 Rhône 品種插枝，帶動加州「Rhône Ranger」運動。'
          },
          {
            type: 'single',
            question: '「產區群」（如 North Coast、Central Coast）與正式 AVA 之間的關係，以下敘述何者正確？',
            options: ['A. 產區群就是 AVA，可直接標示於酒標上', 'B. 產區群是行銷與地理慣用分類，並非 TTB 認定的法定 AVA', 'C. 產區群比 AVA 的法律位階更高', 'D. 每個產區群下只能有一個 AVA'],
            correct: 1,
            explanation: 'North Coast、Central Coast 等「產區群」名稱是產業與行銷上慣用的地理分類，並不是正式 TTB 認定的 AVA，不能單獨作為酒標產區標示；真正具法律效力的地理標示是 AVA 本身，如 Napa Valley、Paso Robles 等。'
          }
        ]
      }
    }
  }
]
