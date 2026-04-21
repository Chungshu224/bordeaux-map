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
      description: '匈牙利全境 22 個法定葡萄酒產區（PDO），分布於喀爾巴阡盆地，從西北邊境的蘇普朗到東北角的托卡伊'
    }
  },
  {
    title: '喀爾巴阡盆地：孕育葡萄酒的天然溫室',
    highlights: [
      { id: 1, icon: '⛰️', title: '天然屏障', content: '喀爾巴阡山脈（Carpathian Mountains）環繞匈牙利北側和東側，擋住冷空氣，形成溫暖盆地' },
      { id: 2, icon: '🌡️', title: '大陸性氣候為主', content: '夏季炎熱（平均 26-28°C），冬季寒冷，全年日照充足（1,900–2,200 小時）' },
      { id: 3, icon: '🌊', title: '巴拉頓湖調節', content: '中歐最大淡水湖（593 km²）的水體效應調節湖岸氣溫，形成微氣候天堂' },
      { id: 4, icon: '🌫️', title: '霧氣與晨露', content: '托卡伊盆地的秋季晨霧是貴腐菌（Botrytis Cinerea）形成的關鍵自然條件' }
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
    </div>`,
    quiz: {
      question: '為什麼喀爾巴阡盆地對匈牙利葡萄酒業如此重要？',
      options: [
        'A. 盆地中有豐富的火山土壤，適合所有品種',
        'B. 喀爾巴阡山脈環繞形成天然屏障，擋住冷空氣，創造溫暖的葡萄生長環境',
        'C. 盆地降雨量充足，葡萄不需要灌溉',
        'D. 盆地靠近大西洋，受海洋氣候調節'
      ],
      correct: 1,
      explanation: '喀爾巴阡盆地的特殊地理位置使其成為天然的暖房：喀爾巴阡山脈擋住了來自北方和東方的冷空氣，使盆地內部升溫更快，夏季熱量積累充足，非常有利於葡萄成熟。這是匈牙利能在相對北緯種植葡萄且取得優異成熟度的關鍵原因。'
    }
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
          <h4>🌊 巴拉頓（Badacsony）</h4>
          <p>玄武岩（Basalt）火山土，保熱性強，葡萄在晝夜溫差中緩慢成熟，產出複雜的礦物感白酒</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Badacsony 的玄武岩（Basalt）火山土對當地葡萄酒風格有何影響？',
      options: [
        'A. 玄武岩土壤保水性極差，造就清爽低酒精風格',
        'B. 玄武岩保熱性強，晝夜溫差配合形成複雜礦物感，白酒風格獨特',
        'C. 玄武岩阻止葡萄根系深入，品質較差',
        'D. 玄武岩土壤只適合紅葡萄品種'
      ],
      correct: 1,
      explanation: 'Badacsony 的玄武岩火山土壤有強大的保熱性，白天快速吸熱儲存，夜晚緩慢釋放，使葡萄在晝夜溫差中實現完整的酚類成熟；同時火山礦物質滲入葡萄，賦予當地 Olaszrizling 和 Szürkebarát 顯著的礦物感，是匈牙利最具識別性的白酒風格之一。'
    }
  },
  {
    title: '五大產區群：認識匈牙利葡萄酒版圖',
    highlights: [
      { id: 1, icon: '🍯', title: '托卡伊地區（Tokaj Region）', content: '東北角，1 個產區，以 Furmint 和 Aszú 甜酒聞名全球，UNESCO 世界遺產' },
      { id: 2, icon: '🐂', title: '北匈牙利（Upper Hungary）', content: '埃格爾（Eger）、馬特拉（Mátra）、比科（Bükk），以 Egri Bikavér 公牛血和白葡萄酒為主' },
      { id: 3, icon: '☀️', title: '潘農地區（Pannon Region）', content: '南部最溫暖地帶，維拉尼（Villány）、塞克薩德（Szekszárd）以頂級紅酒著稱' },
      { id: 4, icon: '🌊', title: '巴拉頓地區（Balaton）', content: '巴拉頓湖周邊 5 個產區，Badacsony 玄武岩白酒、Balatonfüred-Csopak 的清爽白酒' }
    ],
    content: `<div class="regions-overview">
      <p>匈牙利的 22 個法定產區可以分為五個大區，了解這個框架有助於快速掌握匈牙利葡萄酒的地理邏輯。</p>
      <div class="region-table">
        <div class="region-row header">
          <span>產區群</span><span>主要產區</span><span>代表酒款</span><span>主要品種</span>
        </div>
        <div class="region-row">
          <span>🍯 托卡伊</span><span>Tokaj</span><span>Tokaji Aszú</span><span>Furmint, Hárslevelű</span>
        </div>
        <div class="region-row">
          <span>🐂 北匈牙利</span><span>Eger, Mátra, Bükk</span><span>Egri Bikavér</span><span>Kékfrankos, Kadarka</span>
        </div>
        <div class="region-row">
          <span>☀️ 潘農</span><span>Villány, Szekszárd, Pécs</span><span>Villányi Franc</span><span>Cabernet Franc, Kékfrankos</span>
        </div>
        <div class="region-row">
          <span>🌊 巴拉頓</span><span>Badacsony, Balatonfüred</span><span>Olaszrizling, Szürkebarát</span><span>Olaszrizling, Szürkebarát</span>
        </div>
        <div class="region-row">
          <span>🌾 多瑙河</span><span>Kunság, Hajós-Baja</span><span>日常餐酒</span><span>多品種</span>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '下列哪個匈牙利產區群以頂級紅酒（Cabernet Franc、Kékfrankos）聞名？',
      options: ['A. 托卡伊地區（Tokaj Region）', 'B. 巴拉頓地區（Balaton Region）', 'C. 潘農地區（Pannon Region）', 'D. 多瑙河平原（Duna Region）'],
      correct: 2,
      explanation: '潘農地區（Pannon Region）位於匈牙利南部，是全國最溫暖的葡萄酒產區群。維拉尼（Villány）和塞克薩德（Szekszárd）以頂級 Cabernet Franc 和 Kékfrankos 紅酒著稱，被認為是匈牙利紅酒品質最高的產區。國際酒評家 Michael Broadbent 曾說「Cabernet Franc 在維拉尼找到了它的天然家園」。'
    }
  },
  {
    title: '氣候特徵：溫帶大陸性氣候的優勢與挑戰',
    highlights: [
      { id: 1, icon: '☀️', title: '長夏多日照', content: '生長季（4-10 月）日照充足，熱量積累足以讓 Furmint 等晚熟品種完整成熟' },
      { id: 2, icon: '❄️', title: '冬季嚴寒', content: '冬季氣溫可降至 -10°C 至 -20°C，植物休眠期明顯，有助於土壤病菌控制' },
      { id: 3, icon: '🍂', title: '托卡伊的魔法秋季', content: '9-10 月的晨霧（來自 Tisza 河谷）+ 暖乾午後 = 貴腐菌的理想生長條件' },
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
    </div>`,
    quiz: {
      question: '托卡伊（Tokaj）每年秋季的「晨霧 + 暖乾午後」氣候條件，對釀酒有什麼關鍵作用？',
      options: [
        'A. 讓葡萄保持低糖分，釀造清爽干型白酒',
        'B. 促進貴腐菌（Botrytis Cinerea）在葡萄上選擇性附著，產生精華貴腐果漿',
        'C. 防止葡萄過度成熟，保留更高的天然酸度',
        'D. 讓葡萄皮更厚，有助於提取更多紅酒色素'
      ],
      correct: 1,
      explanation: '托卡伊盆地的秋季「晨霧（來自 Tisza 和 Bodrog 河谷的濕氣）+ 暖乾午後（晴天蒸發水分）」是貴腐菌（Botrytis Cinerea）附著的理想環境：晨霧提供濕度讓菌絲穿透葡萄皮，暖乾午後讓水分蒸發、糖分濃縮——這正是 Tokaji Aszú 舉世無雙的天然釀造條件。'
    }
  }
]
