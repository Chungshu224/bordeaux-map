/**
 * CA-L1-6 其他產區探索
 * Mendocino、Lake County、Sierra Foothills、Central Valley（Lodi／Madera）、Southern CA、Far North CA
 * 資料來源：discovercaliforniawines.com、Lodi Winegrape Commission（lodiwine.com）、
 * Sierra Foothills / Amador Vintners 相關產區介紹、TTB Federal Register AVA 公告、
 * Wikipedia AVA 條目（交叉核對 TTB 生效年份）、Anderson Valley Winegrowers（avwines.com）、
 * Ramona Valley Vineyard Association、Malibu Coast AVA 官方公告
 */

export const lessonContent = [
  {
    type: 'intro',
    title: '課程導讀',
    content: `
      <div class="intro-content">
        <p class="intro-lead">
          加州葡萄酒的疆界遠超過 Napa 和 Sonoma。從北部 Mendocino 的有機酒莊，到 Sierra Foothills 的金礦淘金時代老藤 Zinfandel，從 Central Valley（Lodi）的龐大農業腹地，到 Southern California 的地中海型海岸葡萄園——加州的多元性令人嘆為觀止。
        </p>
        <h3 class="section-title">本課程學習目標</h3>
        <div class="learning-points">
          <div class="point-item">
            <h4>🌱 認識 Mendocino 的有機農業先鋒</h4>
            <p>了解 Anderson Valley 的世界級 Pinot 與氣泡酒，以及 Mendocino 的有機酒莊傳統</p>
          </div>
          <div class="point-item">
            <h4>⛏️ 探索 Sierra Foothills 的金礦老藤文化</h4>
            <p>理解加州淘金時代留下的百年老藤 Zinfandel 和義大利品種遺產</p>
          </div>
          <div class="point-item">
            <h4>🌊 了解 Lodi 的「量與質」轉型故事</h4>
            <p>認識加州最大的葡萄種植地帶如何走向精品化路線，以及 7 個子 AVA 的劃分邏輯</p>
          </div>
          <div class="point-item">
            <h4>🌴 認識 Southern California 與遠北加州的新興產區</h4>
            <p>了解 Temecula Valley、Malibu Coast 等南加州 AVA，以及遠北加州的開拓現況</p>
          </div>
        </div>
      </div>
    `
  },

  {
    component: 'CaliforniaRegionMapSlide',
    title: 'Mendocino、Lake County & Sierra Foothills 地圖',
    componentProps: {
      slide: {
        title: 'Mendocino、Lake County & Sierra Foothills 地圖',
        description: '北加州有機農業先驅 Mendocino、火山湖岸 Lake County，與金礦時代老藤遺產 Sierra Foothills',
        mapGroup: 'Mendocino & Lake County',
      }
    }
  },

  {
    title: 'Mendocino County — 有機農業的先鋒',
    highlights: [
      { id: 1, icon: '🌿', title: '加州有機農業重鎮', content: 'Mendocino 是加州有機及生物動力農法葡萄園比例最高的郡之一' },
      { id: 2, icon: '🥂', title: '香檳世家插旗', content: 'Louis Roederer 家族 1982 年在 Anderson Valley 購地，1988 年推出美國本土第一款自產氣泡酒' }
    ],
    content: `<div class="mendocino-detail">
      <h3>🌿 Mendocino County — 加州最環保的葡萄酒郡</h3>
      <p>位於 Sonoma 以北的 Mendocino 是加州有機農業的發源地之一，有機和生物動力法認證的葡萄種植面積比例在全加州名列前茅。多元地形和氣候（海岸涼爽到內陸溫熱），帶來豐富的品種多樣性，郡內共有 Anderson Valley、Potter Valley、Cole Ranch、Mendocino Ridge、Yorkville Highlands、McDowell Valley、Covelo、Comptche 等多個 AVA。</p>

      <div class="anderson-valley">
        <h4>🌸 Anderson Valley（1983 年設立）— 世界級 Pinot Noir、氣泡酒與 Alsatian 品種</h4>
        <p>Mendocino 最著名的子 AVA，是一個涼爽的海岸山谷，以世界級 Pinot Noir、Chardonnay、氣泡酒和 Alsatian 品種（Gewürztraminer、Pinot Gris、Riesling）著稱。海霧每日經 Navarro River 河谷湧入，帶來涼爽的早晨和明亮的下午，生長季在加州數一數二漫長。</p>
        <div class="av-highlights">
          <div class="av-item"><strong>氣候：</strong>涼爽，海霧頻繁，生長季長且緩慢</div>
          <div class="av-item"><strong>土壤：</strong>沖積壤土和砂岩</div>
          <div class="av-item"><strong>特色：</strong>加州最精緻的 Pinot Noir 之一，也是加州氣泡酒最重要的產區之一</div>
        </div>
        <div class="av-producers">
          代表酒莊：<strong>Roederer Estate</strong>（法國香檳名廠 Louis Roederer 於 1982 年購入 580 英畝土地插旗，1984 年種下第一批葡萄，1988 年推出美國本土第一款自產氣泡酒）、<strong>Handley Cellars</strong>（1982 年由 Milla Handley 創立，她是加州大學戴維斯分校最早的女性釀酒學畢業生之一）、<strong>Navarro Vineyards</strong>（家族經營，Alsatian 白酒與氣泡酒的代表）、<strong>Goldeneye</strong>（Napa 的 Duckhorn 家族 1996 年創立的 Pinot Noir 專門酒莊）
        </div>
      </div>

      <div class="mendocino-other">
        <h4>其他子 AVA</h4>
        <ul>
          <li>🌲 <strong>Mendocino Ridge（1997 年設立）：</strong>海拔 1,200 英尺以上的「島嶼型」山地 AVA——法規規定產區僅涵蓋霧線之上的山頭，是全美唯一以海拔高度（而非連續地塊）劃定邊界的 AVA，出產最涼爽的 Zinfandel</li>
          <li>🌾 <strong>Potter Valley（1983 年設立）：</strong>Mendocino 內陸溫暖谷地，Sauvignon Blanc 和 Riesling 表現佳</li>
          <li>🍇 <strong>Cole Ranch（1983 年設立）：</strong>全美面積最小的 AVA 之一，僅約 60 英畝葡萄園</li>
          <li>🌿 <strong>Yorkville Highlands（1998 年設立）：</strong>Anderson Valley 東南側過渡地帶，Bordeaux 品種與 Rhône 品種皆有種植</li>
          <li>🌿 <strong>McDowell Valley：</strong>以 Syrah 著稱，McDowell Valley Vineyards 是代表</li>
        </ul>
      </div>
    </div>`
  },

  {
    title: 'Lake County — 火山與高海拔的奇蹟',
    highlights: [
      { id: 1, icon: '🔴', title: '低根瘤蚜風險的紅土壤', content: '火山紅土排水極佳、礦物質豐富，讓部分葡萄藤能以原生根系種植' },
      { id: 2, icon: '⛰️', title: '加州最高海拔產區群之一', content: '多數子 AVA 平均海拔逾 1,400 英尺，晝夜溫差極大' }
    ],
    content: `<div class="lake-county-detail">
      <h3>🌋 Lake County — Clear Lake 火山旁的葡萄酒秘境</h3>
      <p>Lake County 以全美最大的天然湖泊之一 Clear Lake 和附近休眠火山科納克提山（Mt. Konocti）為中心，郡內共設有多個 AVA，1870 年代就有葡萄種植記錄，是加州歷史悠久卻長期被低估的產區。</p>

      <div class="lake-features">
        <div class="feature-box">
          <h4>🔴 標誌性的紅土壤</h4>
          <p>Clear Lake 周圍的火山岩與紅色礫石土壤是 Lake County 的招牌，富含礦物質、排水極佳。這種土壤環境對根瘤蚜（Phylloxera）較不友善，部分葡萄藤仍以原生根系種植，無需嫁接抗蚜根砧木。</p>
        </div>
        <div class="feature-box">
          <h4>⛰️ 高海拔優勢</h4>
          <p>Lake County 多數子 AVA 平均海拔超過 1,400 英尺，是加州海拔最高的葡萄酒產區群之一，帶來長的生長季和極大的晝夜溫差，葡萄的天然酸度和芳香物質保存完整。</p>
        </div>
      </div>

      <div class="lake-avas">
        <h4>主要子 AVA（依核准年份）</h4>
        <div class="avas-list">
          <div class="a-item"><strong>Guenoc Valley（1981 年設立）：</strong>Lake County 最早的 AVA，溫暖山谷，Petite Sirah 和 Cabernet 表現佳</div>
          <div class="a-item"><strong>Red Hills Lake County（2004 年設立）：</strong>火山紅土，Cabernet Sauvignon 最佳表現地</div>
          <div class="a-item"><strong>High Valley（2005 年設立）：</strong>高海拔，涼爽，Sauvignon Blanc 和 Syrah 見長</div>
          <div class="a-item"><strong>Big Valley District（2013 年設立）：</strong>湖畔沖積平原，湖泊調節氣候，多元品種</div>
          <div class="a-item"><strong>Kelsey Bench（2013 年設立）：</strong>湖岸台地，排水良好的沙質壤土</div>
        </div>
      </div>

      <p class="lake-producers">代表酒莊：Brassfield Estate Winery（High Valley 高海拔有機農法先驅）、Shannon Ridge（可持續農法倡導者）、Six Sigma Ranch（生物動力法）</p>
    </div>`
  },

  {
    title: 'Sierra Foothills — 金礦時代的老藤傳奇',
    highlights: [
      { id: 1, icon: '⛏️', title: '1849 淘金熱遺產', content: 'Sierra Foothills AVA 於 1987 年正式設立，涵蓋 6 個子產區，見證加州最早的葡萄酒商業化浪潮之一' },
      { id: 2, icon: '🇮🇹', title: '義大利移民品種基因庫', content: 'Amador County 是美國 Barbera 種植最重要的產地之一' }
    ],
    content: `<div class="sierra-detail">
      <h3>⛏️ Sierra Foothills — 加州淘金熱的葡萄酒遺產</h3>
      <p>內華達山脈西側山麓，海拔多在 1,000-3,000 英尺之間。這裡是 1849 年加州淘金熱（Gold Rush）的核心地帶，淘金客帶來了對葡萄酒的需求，許多葡萄園隨之建立。Sierra Foothills AVA 於 1987 年正式設立，內含 California Shenandoah Valley（1982 年設立）、El Dorado（1983 年設立）、Fiddletown（1983 年設立）、Fair Play（2001 年設立，加州平均海拔最高的 AVA 之一）、North Yuba 等 6 個子產區。如今，部分老藤已有超過百年歷史。</p>

      <div class="sierra-highlights">
        <div class="s-box">
          <h4>🍇 老藤 Zinfandel 的寶庫</h4>
          <p>Sierra Foothills 擁有加州密度最高的 Zinfandel 老藤產區之一，包括樹齡逾百年的歷史老藤。這些老藤自然低產，釀造出濃縮的黑果、香料和乾燥花香，風格粗獷豪放，是 Napa 精緻感的反面。</p>
        </div>
        <div class="s-box">
          <h4>🇮🇹 義大利移民的品種遺產</h4>
          <p>19 世紀末大量義大利移民定居此地，帶來了 Barbera、Sangiovese、Nebbiolo 等義大利品種，今日的 Amador County 是美國 Barbera 種植最重要的產地之一。</p>
        </div>
      </div>

      <div class="sierra-avas">
        <h4>主要子產區</h4>
        <div class="avas-list">
          <div class="a-item"><strong>El Dorado AVA（1983 年設立）：</strong>高海拔（約 1,200-3,000 英尺），多元品種，涼爽氣候，也涵蓋更小的 Fair Play（2001 年）子 AVA</div>
          <div class="a-item"><strong>California Shenandoah Valley（1982 年設立）：</strong>Amador County 內最知名子區，溫暖，老藤 Zinfandel 和義大利品種的故鄉</div>
          <div class="a-item"><strong>Fiddletown（1983 年設立）：</strong>Amador 東側高地，以濃縮風格 Zinfandel 聞名</div>
          <div class="a-item"><strong>Calaveras County：</strong>以 Barbera、Tempranillo 著稱，屬 Sierra Foothills 大產區內較新興的次區域</div>
        </div>
      </div>

      <p class="sierra-producers">代表酒莊：Amador Foothill Winery、Sobon Estate（原 Shenandoah Vineyards，1856 年建立的歷史酒窖建築）、Terre Rouge / Easton（Rhône 品種專家）、Jeff Runquist Wines（老藤 Zinfandel 與多品種專家）</p>
    </div>`
  },

  {
    title: 'Lodi 與 Central Valley',
    highlights: [
      { id: 1, icon: '🌾', title: '加州最大單一 AVA 之一', content: 'Lodi AVA 內含 7 個子 AVA（2006 年核准），是加州最重要的老藤 Zinfandel 產地' },
      { id: 2, icon: '🌍', title: 'LODI RULES', content: '由 Lodi Winegrape Commission（1991 年成立）推動，是全美第一個第三方稽核的永續葡萄種植認證計畫' }
    ],
    content: `<div class="lodi-section">
      <h3>🌾 Lodi — 加州的「Zinfandel 之都」</h3>
      <p>位於 Sacramento 三角洲南緣，Lodi 是加州最大的單一葡萄酒 AVA 之一，擁有加州最多的老藤 Zinfandel。曾長期以散裝葡萄酒供應商的形象存在，但近年積極轉型精品化，以「ZinFest」（全美規模數一數二的 Zinfandel 慶典）吸引全球關注。</p>

      <div class="lodi-avas">
        <h4>📍 7 個子 AVA（2006 年核准）</h4>
        <p>2006 年，TTB 核准了 Lodi 內部 7 個子 AVA：<strong>Mokelumne River</strong>（核心區，最集中的老藤 Zinfandel 產地，沙質壤土）、<strong>Clements Hills</strong>（東側，火山土壤與礫石）、<strong>Alta Mesa</strong>（南側，高地黏土）、<strong>Borden Ranch</strong>（東北側，紅土礫石，適合 Cabernet 等波爾多品種）、<strong>Cosumnes River</strong>（北側，沖積沙壤）、<strong>Jahant</strong>（西北側，粉紅色壤土）、<strong>Sloughhouse</strong>（東北側，沙質沖積扇）——依土壤、地形與微氣候差異細分，反映 Lodi 內部風土的多樣性遠超外界印象。</p>
      </div>

      <div class="lodi-fact">
        <div class="lf-item">🌿 <strong>LODI RULES：</strong>由 1991 年成立的 Lodi Winegrape Commission 推動，是全美第一個經第三方稽核的永續葡萄種植認證計畫，為之後加州及全美多個永續認證體系立下典範</div>
        <div class="lf-item">🍇 <strong>老藤 Zinfandel：</strong>部分老藤已逾百年歷史，多數種植在排水良好的沙質土壤上，天然較能抵禦根瘤蚜</div>
        <div class="lf-item">🏆 <strong>品種多元：</strong>除 Zinfandel 外，Cabernet Sauvignon、Chardonnay 是種植面積最大的品種，Tempranillo、Albariño 等地中海品種近年也快速成長</div>
      </div>
      <p class="lodi-producers">代表酒莊：Michael David Winery（Phillips 家族經營，招牌「7 Deadly Zins」年產量近百萬箱，是 Lodi 知名度最高的品牌之一）、Turley Wine Cellars（1993 年由前急診醫師 Larry Turley 創立，以保存全加州逾 50 座老藤園著稱）、Bokisch Vineyards（西班牙品種 Tempranillo 專家）、Klinker Brick Winery（老藤 Zinfandel 代表）</p>
    </div>

    <div class="central-valley-section">
      <h3>🌻 San Joaquin Valley — 加州葡萄酒的產量心臟</h3>
      <p>Lodi 以南延伸至 Fresno、Madera 一帶的 San Joaquin Valley（中央谷地南段），是加州葡萄酒產量最龐大的地帶，氣候炎熱平坦、灌溉便利，適合大規模機械化種植，供應全美絕大多數的日常餐酒與散裝葡萄酒原料。<strong>Madera AVA</strong>（1984 年設立，涵蓋 Madera 與部分 Fresno 郡）以甜型 Muscat、Chenin Blanc 等高產量品種聞名，也是加州歷史最悠久的釀酒重鎮之一。加州兩大龍頭酒業集團 E. & J. Gallo Winery 和 The Wine Group 均以中央谷地作為主要生產基地。</p>
    </div>`
  },

  {
    title: 'Southern California & Far North California',
    highlights: [
      { id: 1, icon: '🌴', title: 'Temecula Valley（1984 年設立）', content: '南加州最重要的葡萄酒旅遊目的地，Rainbow Gap 缺口帶來夜間涼風' },
      { id: 2, icon: '🎬', title: 'Malibu Coast AVA（2014 年設立）', content: '洛杉磯近郊新興產區，整合了 1996 年設立的 Malibu-Newton Canyon 和 2006 年設立的 Saddle Rock-Malibu 兩個子 AVA' }
    ],
    content: `<div class="other-regions">
      <div class="southern-ca">
        <h3>🌴 Southern California（南加州）— 葡萄酒的南方邊境</h3>
        <p>加州葡萄酒的最南端，涵蓋 Riverside、San Diego 到 Los Angeles 周邊。這片區域屬於更大的 South Coast AVA（1985 年設立）之下，各郡發展出風格迥異的產區。</p>
        <div class="socal-avas">
          <div class="a-item"><strong>Temecula Valley（1984 年設立）：</strong>位於 Riverside County 南端，San Diego 以北約 60 英里，是南加州最重要的葡萄酒旅遊目的地。太平洋涼風經 Rainbow Gap 與 Santa Margarita Gap 兩處山口灌入谷地，帶來夜間降溫，種植品種多元，從 Rhône 品種到 Sangiovese、Sauvignon Blanc 都有代表作</div>
          <div class="a-item"><strong>San Diego County：</strong>境內設有 Ramona Valley（2005 年設立）、San Pasqual Valley（1981 年設立）等 AVA，地中海型氣候，近年精品小酒莊蓬勃發展</div>
          <div class="a-item"><strong>Malibu Coast（2014 年設立）：</strong>洛杉磯近郊聖塔莫尼卡山脈沿岸新興產區，整合了轄內兩個更早成立的子 AVA——Malibu-Newton Canyon（1996 年設立，加州第 76 個、洛杉磯郡第一個 AVA）和 Saddle Rock-Malibu（2006 年設立），面積雖小但受太平洋直接調節，氣候涼爽宜人</div>
        </div>
        <p class="sc-producers">代表酒莊：Ponte Family Estate（Temecula）、Callaway Vineyard & Winery（Temecula，南加州歷史最悠久的酒莊之一）、Malibu 周邊多家精品酒莊近年積極發展葡萄酒旅遊</p>
      </div>

      <div class="far-north">
        <h3>🌲 Far North California — 加州葡萄酒的神秘北疆</h3>
        <p>從 Trinity County 到 Shasta County，遠北加州地廣人稀，尚未有廣泛設立的 AVA 涵蓋整個區域，葡萄酒業仍處於開拓階段。Trinity County 的高海拔葡萄園以耐候的 Petite Sirah 和 Grenache 等品種為主，Shasta County 則有小型有機農場實驗種植涼爽氣候品種。這片區域代表加州葡萄酒版圖仍在持續擴張的前沿地帶。</p>
      </div>
    </div>`
  },

  {
    title: 'White Zinfandel 與 Lodi 的品種新實驗',
    highlights: [
      { id: 1, icon: '🍷', title: '一場意外誕生的美國國民酒', content: 'White Zinfandel 起源於 1975 年 Sutter Home 酒莊一次意外的「發酵中斷」事故' },
      { id: 2, icon: '🇪🇸', title: '地中海品種新浪潮', content: 'Lodi 近年積極試種 Tempranillo、Albariño 等西班牙／葡萄牙品種，回應氣候變遷下的省水種植需求' }
    ],
    content: `<div class="white-zin-lodi">
      <h3>🍷 White Zinfandel：一場意外造就的美國國民酒</h3>
      <p>1972 年，Sutter Home 酒莊（位於 Napa 的 St. Helena）的釀酒師 Bob Trinchero 開始對來自 Amador County（Sierra Foothills）Deaver Vineyard 老藤 Zinfandel 進行放血法（saignée）——放出部分粉紅色葡萄汁，藉此提高留下的紅酒單寧與色澤濃度，副產品的粉紅葡萄汁最初只是小規模釀成不甜的粉紅酒。1975 年，一批放血取出的葡萄汁在發酵過程中意外「發酵中斷」（stuck fermentation），沒有完全轉化為酒精，保留了大量殘糖——這款帶甜味的粉紅酒意外大受歡迎，White Zinfandel 就此誕生，並在 1980 年代成為全美銷量最大的葡萄酒類型之一，也意外地讓許多老藤 Zinfandel 葡萄園在精品化浪潮來臨前，靠著這股需求得以存活下來。</p>

      <div class="lodi-innovation">
        <h4>🇪🇸 Lodi 的地中海品種新實驗</h4>
        <p>近年氣候變遷帶來的乾旱壓力，促使 Lodi 種植者積極尋找更耐旱、更適應溫暖氣候的替代品種。Bokisch Vineyards 是這股浪潮的先驅，專注於西班牙品種 Tempranillo；同時 Albariño、Vermentino、Grenache Blanc 等地中海白酒品種也在 Lodi 逐漸站穩腳步，反映出加州次級產區正從單一依賴 Cabernet／Chardonnay 的種植思維，轉向更多元、更具氣候韌性的品種組合。</p>
      </div>
    </div>`
  },

  {
    title: 'Central Valley 產業結構與永續轉型',
    content: `<div class="cv-industry">
      <h3>🏭 從「散裝供應鏈」到「永續品牌故事」</h3>
      <p>San Joaquin Valley（中央谷地南段）長期扮演加州葡萄酒產業的「產量引擎」角色：氣候炎熱平坦、灌溉便利，適合大規模機械化種植與採收，供應全美絕大多數日常餐酒與散裝葡萄酒原料。加州兩大龍頭酒業集團 <strong>E. & J. Gallo Winery</strong>（總部位於 Modesto）與 <strong>The Wine Group</strong> 均以中央谷地作為核心生產基地，透過龐大的規模經濟，讓加州葡萄酒得以在全球中低價位市場保持競爭力。</p>
      <div class="cv-transition">
        <h4>🌱 精品化與永續轉型的兩條路徑</h4>
        <ul>
          <li><strong>Lodi 路徑：</strong>透過 LODI RULES 永續認證與 7 個子 AVA 的風土細分，主動向精品市場靠攏，成為「量」與「質」兼具的成功範例</li>
          <li><strong>Madera 路徑：</strong>Madera AVA（1984 年設立）仍以高產量的 Muscat、Chenin Blanc 等品種為主力，是加州歷史最悠久的釀酒重鎮之一，近年也開始出現精品酒莊的零星嘗試</li>
        </ul>
        <p>整體而言，中央谷地的故事提醒我們：加州葡萄酒產業的全球影響力，同時建立在 Napa 式的頂級精品敘事，以及中央谷地式的規模化供應鏈之上——兩者相輔相成，缺一不可。</p>
      </div>
    </div>`
  },

  {
    title: '其他產區速查表',
    content: `<div class="other-regions-summary">
      <h3>📊 本課涵蓋產區一覽</h3>
      <table class="compare-table">
        <thead>
          <tr><th>產區</th><th>代表 AVA（核准年份）</th><th>招牌品種</th><th>關鍵字</th></tr>
        </thead>
        <tbody>
          <tr><td>Mendocino</td><td>Anderson Valley（1983）、Mendocino Ridge（1997）</td><td>Pinot Noir、氣泡酒、Gewürztraminer</td><td>有機農業先鋒</td></tr>
          <tr><td>Lake County</td><td>Red Hills（2004）、High Valley（2005）</td><td>Cabernet Sauvignon、Sauvignon Blanc</td><td>火山紅土、高海拔</td></tr>
          <tr><td>Sierra Foothills</td><td>Sierra Foothills AVA（1987，內含 6 子產區）</td><td>Zinfandel 老藤、Barbera</td><td>1849 淘金熱、義大利移民</td></tr>
          <tr><td>Lodi</td><td>Lodi AVA（1986）＋ 7 個子 AVA（2006）</td><td>Zinfandel、Tempranillo、Albariño</td><td>LODI RULES 永續認證</td></tr>
          <tr><td>Southern California</td><td>Temecula Valley（1984）、Malibu Coast（2014）</td><td>多元品種</td><td>山口缺口涼風、葡萄酒旅遊</td></tr>
          <tr><td>Far North California</td><td>尚無廣泛設立的 AVA</td><td>Petite Sirah、Grenache</td><td>開拓前沿、地廣人稀</td></tr>
        </tbody>
      </table>
    </div>`
  },

  {
    title: '其他產區歷史時間軸',
    content: `<div class="or-timeline">
      <h3>🕐 北方與南方新興產區重要年份</h3>
      <div class="timeline-container">
        <div class="timeline-item">
          <div class="timeline-badge ancient">1849</div>
          <div class="timeline-content"><strong>⛏️ 加州淘金熱</strong><p>Sierra Foothills 因淘金客對葡萄酒的需求而開啟商業種植，義大利移民隨後帶來 Barbera、Sangiovese 等品種。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1972-1975</div>
          <div class="timeline-content"><strong>🍷 White Zinfandel 意外誕生</strong><p>Sutter Home 酒莊在製作 Amador County 老藤 Zinfandel 時，一次發酵中斷意外造就了風靡全美的甜型粉紅酒。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1981-1984</div>
          <div class="timeline-content"><strong>📍 多個 AVA 密集設立</strong><p>Guenoc Valley（Lake County）、Anderson Valley（Mendocino）與 Temecula Valley（南加州）皆於此期間獲得 AVA 認定。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1982</div>
          <div class="timeline-content"><strong>🥂 Roederer Estate 插旗 Anderson Valley</strong><p>法國香檳名廠 Louis Roederer 購地插旗，1988 年推出美國本土第一款自產氣泡酒。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1987</div>
          <div class="timeline-content"><strong>⛏️ Sierra Foothills AVA 正式設立</strong><p>整合 California Shenandoah Valley、El Dorado、Fiddletown 等 6 個子產區。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">1991</div>
          <div class="timeline-content"><strong>🌱 Lodi Winegrape Commission 成立</strong><p>後續推動 LODI RULES，成為全美第一個第三方稽核的永續葡萄種植認證計畫。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge">2006</div>
          <div class="timeline-content"><strong>📍 Lodi 核准 7 個子 AVA</strong><p>依土壤與地形細分為 Mokelumne River、Clements Hills 等 7 區。</p></div>
        </div>
        <div class="timeline-item">
          <div class="timeline-badge modern">2014</div>
          <div class="timeline-content"><strong>🎬 Malibu Coast AVA 設立</strong><p>整合轄內 Malibu-Newton Canyon（1996）與 Saddle Rock-Malibu（2006）兩個更早成立的子 AVA。</p></div>
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
            question: 'Anderson Valley（Mendocino）以哪兩個特色聞名？',
            options: ['A. 老藤 Zinfandel 和 Petite Sirah', 'B. 世界級 Pinot Noir、氣泡酒與 Alsatian 品種（Gewürztraminer、Riesling）', 'C. 火山岩土壤和 Cabernet Sauvignon', 'D. Rhône 品種和石灰岩土壤'],
            correct: 1,
            explanation: 'Anderson Valley 以世界級 Pinot Noir、氣泡酒（Roederer Estate）和 Alsatian 品種（尤其是 Gewürztraminer、Riesling、Pinot Gris）著稱，涼爽的海霧氣候是關鍵。'
          },
          {
            type: 'single',
            question: '法國香檳名廠 Louis Roederer 於哪一年在 Anderson Valley 購地插旗，成立 Roederer Estate？',
            options: ['A. 1976 年', 'B. 1982 年', 'C. 1996 年', 'D. 2001 年'],
            correct: 1,
            explanation: 'Louis Roederer 家族於 1982 年在 Anderson Valley 購入 580 英畝土地，1984 年種下第一批葡萄，1988 年推出美國本土第一款自產氣泡酒。'
          },
          {
            type: 'single',
            question: 'Sierra Foothills 的葡萄酒文化與加州哪段歷史息息相關？',
            options: ['A. 西班牙傳教士文化（1769年）', 'B. 1849 年加州淘金熱（Gold Rush）', 'C. 1976 年巴黎評判', 'D. 蘇聯軍事基地'],
            correct: 1,
            explanation: 'Sierra Foothills 是 1849 年加州淘金熱（Gold Rush）的核心地帶，淘金客對葡萄酒的需求促使大量葡萄園建立，義大利移民帶來了他們的品種（Barbera、Sangiovese 等），留下了今日仍在使用的百年老藤。'
          },
          {
            type: 'single',
            question: 'Lodi 最著名的是哪項農業可持續認證計劃？',
            options: ['A. Sonoma Wine County Winegrowers', 'B. LODI RULES（全美第一個第三方稽核的永續葡萄種植認證計畫）', 'C. California Certified Organic（CCOF）', 'D. Napa Green'],
            correct: 1,
            explanation: 'LODI RULES 由 1991 年成立的 Lodi Winegrape Commission 推動，是全美第一個經第三方稽核的永續葡萄種植認證計畫，在有機農業和可持續農業領域具有開創性意義。'
          },
          {
            type: 'single',
            question: 'Lake County 的 Red Hills 子 AVA 最著名的特色是什麼？',
            options: ['A. 白色石灰岩土壤', 'B. 火山岩紅色礫石土壤，根瘤蚜風險較低，以 Cabernet Sauvignon 著稱', 'C. Goldridge 細沙壤土', 'D. 深厚的粘土層'],
            correct: 1,
            explanation: 'Red Hills Lake County（2004 年設立）以火山岩紅色礫石土壤著稱，富含礦物質、排水極佳。此土壤環境對根瘤蚜（Phylloxera）較不友善，以 Cabernet Sauvignon 著稱。'
          },
          {
            type: 'single',
            question: 'Lodi AVA 內部於 2006 年核准了幾個子 AVA？',
            options: ['A. 4 個', 'B. 5 個', 'C. 7 個', 'D. 11 個'],
            correct: 2,
            explanation: '2006 年，TTB 核准了 Lodi 內部 7 個子 AVA：Mokelumne River、Clements Hills、Alta Mesa、Borden Ranch、Cosumnes River、Jahant、Sloughhouse，反映其內部土壤與微氣候的多樣性。'
          },
          {
            type: 'single',
            question: 'Temecula Valley 的葡萄園夜間降溫主要透過哪個地形通道？',
            options: ['A. Petaluma Gap', 'B. Rainbow Gap（與 Santa Margarita Gap）', 'C. Chalk Hill Gap', 'D. Templeton Gap'],
            correct: 1,
            explanation: 'Temecula Valley 位於南加州內陸，太平洋涼風經 Rainbow Gap 與 Santa Margarita Gap 兩處山口缺口灌入谷地，帶來夜間降溫，是南加州難得的涼爽微氣候來源。'
          },
          {
            type: 'single',
            question: 'White Zinfandel 是如何在 1975 年於 Sutter Home 酒莊意外誕生的？',
            options: ['A. 刻意研發的全新粉紅酒配方', 'B. 放血法（saignée）取出的葡萄汁發生「發酵中斷」，意外保留了大量殘糖', 'C. 混入了大量 Chardonnay 調配而成', 'D. 由 UC Davis 實驗室培育的新品種'],
            correct: 1,
            explanation: 'Bob Trinchero 原本以放血法取出粉紅色葡萄汁來提升紅酒 Zinfandel 的濃度，1975 年這批粉紅葡萄汁意外發生「發酵中斷」（stuck fermentation），未完全轉化為酒精而保留大量殘糖，意外大受歡迎，White Zinfandel 就此誕生並成為美國銷量最大的葡萄酒類型之一。'
          }
        ]
      }
    }
  }
]
