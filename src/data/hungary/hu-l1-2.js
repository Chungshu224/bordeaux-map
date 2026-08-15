/**
 * HU L1-2 匈牙利地理環境與氣候：喀爾巴阡盆地與 22 個法定產區
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利地理環境與氣候',
    subtitle: '喀爾巴阡盆地與 22 個法定產區',
    icon: '🗺️',
    background: 'linear-gradient(135deg, #1e5f74 0%, #2c8c5e 100%)'
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '匈牙利 22 個法定葡萄酒產區全覽',
    componentProps: {
      mapRegion: 'all',
      description: '匈牙利全境 22 個法定葡萄酒產區（PDO），分布於喀爾巴阡盆地，從西北邊境的索普朗到東北角的托卡伊'
    }
  },
  {
    title: '喀爾巴阡盆地：孕育葡萄酒的天然溫室',
    highlights: [
      { id: 1, icon: '⛰️', title: '天然屏障', content: '喀爾巴阡山脈（Carpathian Mountains）環繞匈牙利北側和東側，擋住冷空氣，形成溫暖盆地' },
      { id: 2, icon: '🌡️', title: '大陸性氣候為主', content: '夏季炎熱（平均 26-28°C），冬季寒冷，全年日照充足（1,900–2,200 小時）' },
      { id: 3, icon: '🌊', title: '巴拉頓湖調節', content: '中歐最大淡水湖（593 km²）的水體效應調節湖岸氣溫，形成微氣候天堂' },
      { id: 4, icon: '🌫️', title: '兩河交匯的霧氣', content: 'Bodrog 河與 Tisza 河在托卡伊附近交匯，秋季晨霧是貴腐菌（Botrytis Cinerea）形成的關鍵自然條件' }
    ],
    content: `<div class="geography-content">
      <p class="lead-text">匈牙利地處歐洲中部的喀爾巴阡盆地（Pannonian Basin / Carpathian Basin），這個古老的內陸盆地由喀爾巴阡山脈、阿爾卑斯山東延和巴爾幹半島北緣圍合而成，形成一個天然的溫暖保護圈。</p>
      <div class="geo-stats">
        <div class="stat-box">
          <span class="stat-num">93,000</span>
          <span class="stat-label">公頃葡萄園面積</span>
        </div>
        <div class="stat-box">
          <span class="stat-num">22</span>
          <span class="stat-label">法定葡萄酒產區</span>
        </div>
        <div class="stat-box">
          <span class="stat-num">46–48°N</span>
          <span class="stat-label">緯度範圍</span>
        </div>
        <div class="stat-box">
          <span class="stat-num">2,000+</span>
          <span class="stat-label">年日照小時</span>
        </div>
      </div>
      <div class="note-box">
        <p>匈牙利的緯度（46-48°N）與波爾多（44-45°N）、布根地（47°N）相近，但更靠近歐洲大陸中心，受大陸性氣候影響更強，夏季更熱、冬季更冷，葡萄需要在短暫但充足的熱量中快速成熟。</p>
      </div>
      <div class="note-box">
        <p>托卡伊產區地處 Bodrog 河與 Tisza 河的交匯處，兩條河流帶來的濕氣是秋季晨霧的主要來源，也是托卡伊得以穩定產出貴腐甜酒的關鍵地理條件之一。</p>
      </div>
    </div>`
  },
  {
    title: '多樣化土壤：從火山岩到沙地',
    highlights: [
      { id: 1, icon: '🌋', title: '火山岩土壤', content: '巴拉頓湖北岸（Badacsony）和托卡伊的流紋岩（Rhyolite）、安山岩（Andesite）凝灰土，賦予葡萄酒強烈礦物感' },
      { id: 2, icon: '🏔️', title: '黃土（Loess）', content: '大平原的厚重黃土層，保水性好，適合大量種植，主要用於親民價位葡萄酒' },
      { id: 3, icon: '🪨', title: '石灰岩與泥灰土', content: '北匈牙利和巴拉頓湖南岸，類似布根地的地質，有助於保留葡萄酒的天然酸度' },
      { id: 4, icon: '🏖️', title: '沙地（Sand）', content: '多瑙河平原（Kunság）的沙質土壤，歷史上抵擋了根瘤蚜蟲（Phylloxera）侵害' }
    ],
    content: `<div class="soil-content">
      <p>匈牙利的土壤多樣性令人驚嘆，這也是為什麼即使面積不大，卻能孕育出如此風格迥異的葡萄酒。</p>
      <div class="soil-regions">
        <div class="region-soil">
          <h4>🌋 托卡伊（Tokaj）</h4>
          <p>流紋岩凝灰土（Rhyolite Tuff）+ 黏土 + 黃土混合，造就 Furmint 的高酸度和礦物感，是貴腐菌附著的理想環境</p>
        </div>
        <div class="region-soil">
          <h4>🏔️ 埃格爾（Eger）</h4>
          <p>流紋岩凝灰土（Rhyolite Tuff）+ 石灰岩，保留良好的天然酸度，是 Kékfrankos 和公牛血（Bikavér）的經典風土</p>
        </div>
        <div class="region-soil">
          <h4>🍇 維拉尼（Villány）</h4>
          <p>石灰岩 + 紅色黏土（Terres Rouges），溫暖的小氣候使 Cabernet Franc 達到最佳成熟度</p>
        </div>
        <div class="region-soil">
          <h4>🌊 巴達索尼（Badacsony）</h4>
          <p>玄武岩（Basalt）火山土，保熱性強，葡萄在晝夜溫差中緩慢成熟，產出複雜的礦物感白酒</p>
        </div>
      </div>
    </div>`
  },
  {
    title: '六大產區群：認識匈牙利 22 個法定產區',
    highlights: [
      { id: 1, icon: '🍯', title: '托卡伊產區群', content: '東北角，僅 1 個產區（Tokaj），是全國唯一「產區群等於單一產區」的特例，以 Furmint 與 Aszú 甜酒聞名全球' },
      { id: 2, icon: '🐂', title: '北匈牙利產區群', content: '埃格爾（Eger）、馬特拉（Mátra）、比科（Bükk）共 3 個產區，以 Egri Bikavér 公牛血調配酒與火山白酒為主' },
      { id: 3, icon: '🏔️', title: '北特蘭斯多瑙比亞產區群', content: '索普朗（Sopron）、潘諾哈爾馬（Pannonhalma）、埃泰克布達（Etyek-Buda）、摩爾（Mór）、內斯梅伊（Neszmély）共 5 個產區，鄰近奧地利與布達佩斯' },
      { id: 4, icon: '🌊', title: '巴拉頓湖產區群', content: '索姆羅（Somló）、巴達索尼（Badacsony）、巴拉頓菲赫瑞-措帕克、巴拉頓山地、巴拉頓博格拉爾、扎拉共 6 個產區，環湖分布，是產區數最多的一群' },
      { id: 5, icon: '☀️', title: '潘農產區群', content: '維拉尼（Villány）、塞克薩德（Szekszárd）、佩奇（Pécs）、托爾納（Tolna）共 4 個產區，全國最溫暖地帶，以頂級紅酒著稱' },
      { id: 6, icon: '🌾', title: '多瑙河產區群', content: '孔沙格（Kunság）、哈約什-巴亞（Hajós-Baja）、喬恩格拉德（Csongrád）共 3 個產區，地勢平坦沙質，是全國種植面積最大的產區群' }
    ],
    content: `<div class="regions-overview">
      <p>匈牙利的 22 個法定產區（Borvidék）依地理位置歸屬於 6 個產區群（Borrégió），這是官方葡萄酒分類架構中最重要的一層，也是搭配前一張地圖認識匈牙利地理邏輯的核心工具。</p>
      <div class="region-table">
        <div class="region-row header">
          <span>產區群</span><span>下轄產區（共 22 個）</span><span>代表酒款</span><span>主要品種</span>
        </div>
        <div class="region-row">
          <span>🍯 托卡伊<br><small>1 個產區</small></span><span>Tokaj</span><span>Tokaji Aszú, Eszencia</span><span>Furmint, Hárslevelű</span>
        </div>
        <div class="region-row">
          <span>🐂 北匈牙利<br><small>3 個產區</small></span><span>Eger, Mátra, Bükk</span><span>Egri Bikavér, Egri Csillag</span><span>Kékfrankos, Kadarka</span>
        </div>
        <div class="region-row">
          <span>🏔️ 北特蘭斯多瑙比亞<br><small>5 個產區</small></span><span>Sopron, Pannonhalma, Etyek-Buda, Mór, Neszmély</span><span>氣泡酒基酒, Ezerjó 白酒</span><span>Kékfrankos, Chardonnay, Ezerjó</span>
        </div>
        <div class="region-row">
          <span>🌊 巴拉頓湖<br><small>6 個產區</small></span><span>Somló, Badacsony, Balatonfüred-Csopak, Balaton-felvidék, Balatonboglár, Zala</span><span>Olaszrizling, Szürkebarát</span><span>Olaszrizling, Furmint, Rizlingszilváni</span>
        </div>
        <div class="region-row">
          <span>☀️ 潘農<br><small>4 個產區</small></span><span>Villány, Szekszárd, Pécs, Tolna</span><span>Villányi Franc, Szekszárdi Bikavér</span><span>Cabernet Franc, Kékfrankos, Kadarka</span>
        </div>
        <div class="region-row">
          <span>🌾 多瑙河<br><small>3 個產區</small></span><span>Kunság, Hajós-Baja, Csongrád</span><span>日常餐酒, 清爽白酒</span><span>Irsai Olivér, Cserszegi Fűszeres</span>
        </div>
      </div>
      <div class="note-box">
        <p>多瑙河產區群的孔沙格（Kunság）以 2 萬多公頃葡萄園面積，是匈牙利種植面積最大的單一產區——但因沙質土壤產量高、售價低，其產值遠不及面積小得多的托卡伊或維拉尼。這說明「面積」與「品質聲望」在匈牙利葡萄酒版圖上經常呈反比。</p>
      </div>
    </div>`
  },
  {
    title: '氣候特徵：溫帶大陸性氣候的優勢與挑戰',
    highlights: [
      { id: 1, icon: '☀️', title: '長夏多日照', content: '生長季（4-10 月）日照充足，熱量積累足以讓 Furmint 等晚熟品種完整成熟' },
      { id: 2, icon: '❄️', title: '冬季嚴寒', content: '冬季氣溫可降至 -10°C 至 -20°C，植物休眠期明顯，有助於土壤病菌控制' },
      { id: 3, icon: '🍂', title: '托卡伊的魔法秋季', content: 'Bodrog 河與 Tisza 河谷帶來的秋季晨霧 + 暖乾午後 = 貴腐菌的理想生長條件' },
      { id: 4, icon: '🌪️', title: '年份差異顯著', content: '春霜、夏季冰雹、秋季降雨都可能造成年份品質的重大差異' }
    ],
    content: `<div class="climate-content">
      <p>匈牙利的氣候結合了大陸性氣候的熱烈夏季和地中海氣候影響帶來的乾燥秋季，這種組合對釀酒葡萄極為理想——尤其是對托卡伊的貴腐酒釀造。</p>
      <div class="climate-comparison">
        <h4>🌡️ 主要城市年均氣溫比較</h4>
        <div class="temp-bars">
          <div class="temp-row">
            <span class="city">托卡伊（Tokaj）</span>
            <span class="temp-bar" style="width:65%">平均 10.5°C</span>
          </div>
          <div class="temp-row">
            <span class="city">埃格爾（Eger）</span>
            <span class="temp-bar" style="width:63%">平均 10.1°C</span>
          </div>
          <div class="temp-row">
            <span class="city">維拉尼（Villány）</span>
            <span class="temp-bar" style="width:72%">平均 11.6°C</span>
          </div>
          <div class="temp-row">
            <span class="city">波爾多（對比）</span>
            <span class="temp-bar" style="width:75%">平均 13.5°C</span>
          </div>
        </div>
      </div>
      <div class="note-box">
        <p>維拉尼是匈牙利最溫暖的產區，年均氣溫接近南法，這也是為什麼波爾多品種（Cabernet Franc、Merlot）在此能充分成熟，達到世界級品質。</p>
      </div>
      <div class="note-box">
        <p>巴拉頓湖是中歐最大的淡水湖，593 平方公里的巨大水體白天吸熱、夜間緩慢釋放，調節湖岸周邊的日夜溫差與濕度，讓環湖產區群（如 Badacsony、Balatonfüred-Csopak）形成獨立於大陸性氣候之外的溫和微氣候，特別有利於白葡萄品種保留香氣與酸度。</p>
      </div>
      <div class="fun-facts">
        <h4>🧭 南北氣候梯度</h4>
        <div class="fact-grid">
          <div class="fact-item">
            <span class="fact-icon">❄️</span>
            <p>西北邊境的<strong>索普朗（Sopron）</strong>緊鄰奧地利的新錫德爾湖（Neusiedlersee），受該湖與阿爾卑斯山影響，是全國氣候相對涼爽濕潤的產區，適合展現細膩酸度的 Kékfrankos</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🔥</span>
            <p>南部邊境的<strong>維拉尼（Villány）</strong>則因緯度最低、地勢平緩，是全國最溫暖的產區，波爾多晚熟紅葡萄品種能在此完整成熟</p>
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
        passScore: 60,
        questions: [
        {
          type: 'single',
          question: '為什麼喀爾巴阡盆地對匈牙利葡萄酒業如此重要？',
          options: ['A. 盆地中有豐富的火山土壤，適合所有品種', 'B. 喀爾巴阡山脈環繞形成天然屏障，擋住冷空氣，創造溫暖的葡萄生長環境', 'C. 盆地降雨量充足，葡萄不需要灌溉', 'D. 盆地靠近大西洋，受海洋氣候調節'],
          correct: 1,
          explanation: '喀爾巴阡盆地的特殊地理位置使其成為天然的暖房：喀爾巴阡山脈擋住了來自北方和東方的冷空氣，使盆地內部升溫更快，夏季熱量積累充足，非常有利於葡萄成熟。這是匈牙利能在相對北緯種植葡萄且取得優異成熟度的關鍵原因。'
        },
        {
          type: 'single',
          question: 'Badacsony 的玄武岩（Basalt）火山土對當地葡萄酒風格有何影響？',
          options: ['A. 玄武岩土壤保水性極差，造就清爽低酒精風格', 'B. 玄武岩保熱性強，晝夜溫差配合形成複雜礦物感，白酒風格獨特', 'C. 玄武岩阻止葡萄根系深入，品質較差', 'D. 玄武岩土壤只適合紅葡萄品種'],
          correct: 1,
          explanation: 'Badacsony 的玄武岩火山土壤有強大的保熱性，白天快速吸熱儲存，夜晚緩慢釋放，使葡萄在晝夜溫差中實現完整的酚類成熟；同時火山礦物質滲入葡萄，賦予當地 Olaszrizling 和 Szürkebarát 顯著的礦物感，是匈牙利最具識別性的白酒風格之一。'
        },
        {
          type: 'single',
          question: '下列哪個匈牙利產區群以頂級紅酒（Cabernet Franc、Kékfrankos）聞名？',
          options: ['A. 托卡伊產區群（Tokaj）', 'B. 巴拉頓湖產區群（Balaton）', 'C. 潘農產區群（Pannon）', 'D. 多瑙河產區群（Duna）'],
          correct: 2,
          explanation: '潘農產區群（Pannon）位於匈牙利南部，是全國最溫暖的葡萄酒產區群，下轄維拉尼（Villány）、塞克薩德（Szekszárd）、佩奇（Pécs）、托爾納（Tolna）4 個產區。維拉尼和塞克薩德以頂級 Cabernet Franc 和 Kékfrankos 紅酒著稱，被認為是匈牙利紅酒品質最高的產區。'
        },
        {
          type: 'single',
          question: '托卡伊（Tokaj）每年秋季的「晨霧 + 暖乾午後」氣候條件，對釀酒有什麼關鍵作用？',
          options: ['A. 讓葡萄保持低糖分，釀造清爽干型白酒', 'B. 促進貴腐菌（Botrytis Cinerea）在葡萄上選擇性附著，產生精華貴腐果漿', 'C. 防止葡萄過度成熟，保留更高的天然酸度', 'D. 讓葡萄皮更厚，有助於提取更多紅酒色素'],
          correct: 1,
          explanation: '托卡伊盆地的秋季「晨霧（來自 Bodrog 河與 Tisza 河交匯處的濕氣）+ 暖乾午後（晴天蒸發水分）」是貴腐菌（Botrytis Cinerea）附著的理想環境：晨霧提供濕度讓菌絲穿透葡萄皮，暖乾午後讓水分蒸發、糖分濃縮——這正是 Tokaji Aszú 舉世無雙的天然釀造條件。'
        },
        {
          type: 'single',
          question: '匈牙利 22 個法定產區分屬 6 個產區群，其中哪一個產區群下轄的產區數量最多？',
          options: ['A. 托卡伊產區群（1 個產區）', 'B. 潘農產區群（4 個產區）', 'C. 巴拉頓湖產區群（6 個產區）', 'D. 多瑙河產區群（3 個產區）'],
          correct: 2,
          explanation: '巴拉頓湖產區群下轄索姆羅、巴達索尼、巴拉頓菲赫瑞-措帕克、巴拉頓山地、巴拉頓博格拉爾、扎拉共 6 個產區，環繞中歐最大淡水湖巴拉頓湖分布，是 6 大產區群中下轄產區數量最多的一群；相對地，托卡伊產區群則是唯一「產區群等於單一產區」的特例。'
        },
        {
          type: 'single',
          question: '巴拉頓湖對周邊葡萄酒產區的氣候調節作用，主要透過什麼機制產生？',
          options: ['A. 湖水蒸發直接增加降雨量，讓葡萄吸收更多水分', 'B. 湖泊龐大的水體白天吸熱、夜間緩慢釋放，調節日夜溫差與濕度，形成溫和微氣候', 'C. 湖水鹽分滲入土壤，改變葡萄根系吸收礦物質的方式', 'D. 湖面反射陽光，讓葡萄園獲得雙倍日照'],
          correct: 1,
          explanation: '巴拉頓湖是中歐最大的淡水湖（593 平方公里），巨大的水體具有顯著的熱容效應：白天緩慢吸熱、夜間緩慢釋放，能有效調節周邊產區的日夜溫差與空氣濕度，形成獨立於大陸性氣候之外的溫和微氣候，特別有利於白葡萄品種保留清爽酸度與香氣。'
        }
        ]
      }
    }
  }
]
