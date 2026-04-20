/**
 * HU L1-5 主要產區群介紹：從托卡伊到巴拉頓
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利五大產區群',
    subtitle: '從托卡伊的甜酒到維拉尼的紅酒',
    icon: '🗾',
    background: 'linear-gradient(135deg, #2c3e50 0%, #4a1942 100%)'
  },
  {
    title: '托卡伊地區（Tokaj Region）— 世界甜酒之王',
    highlights: [
      { id: 1, icon: '🏆', title: 'UNESCO 世界遺產', content: '托卡伊葡萄酒文化景觀於 2002 年列入 UNESCO 世界文化遺產，是匈牙利的葡萄酒皇冠' },
      { id: 2, icon: '📏', title: '規模', content: '約 5,723 公頃，橫跨 27 個村莊，特級葡萄園（First Class Vineyards）分布在火山丘陵南坡' },
      { id: 3, icon: '🍯', title: '甜酒傳奇', content: 'Tokaji Aszú 是世界上第一個有文字記載的貴腐甜酒，比法國蘇玳（Sauternes）早了約 100 年' },
      { id: 4, icon: '🔄', title: '現代干型革命', content: '21 世紀以來，頂級干型 Furmint 成為托卡伊新名片，與甜酒平分秋色' }
    ],
    content: `<div class="region-detail">
      <p class="lead-text">托卡伊位於匈牙利東北角，是兩條河流（Bodrog 和 Tisza）的交匯處，這個地理條件造就了秋季晨霧，也造就了貴腐菌生長的完美環境。</p>
      <div class="region-geography">
        <div class="geo-facts">
          <h4>📍 地理概況</h4>
          <ul>
            <li>位置：匈牙利東北角，Zemplén 山脈腳下</li>
            <li>海拔：130-400 公尺</li>
            <li>土壤：流紋岩凝灰土 + 黃土 + 黏土</li>
            <li>河流：Bodrog + Tisza（秋霧來源）</li>
          </ul>
        </div>
        <div class="wine-styles">
          <h4>🍷 主要酒款</h4>
          <ul>
            <li><strong>Tokaji Aszú</strong>：3-6 Puttonyos 貴腐甜酒</li>
            <li><strong>Eszencia</strong>：極稀少的純貴腐果漿，糖度 450-800 g/L</li>
            <li><strong>Szamorodni</strong>：半干或半甜，Sherry 風格</li>
            <li><strong>干型 Furmint</strong>：現代的乾型白酒革命</li>
          </ul>
        </div>
      </div>
      <div class="famous-estates">
        <h4>🏰 知名酒莊</h4>
        <div class="estate-list">
          <span>Royal Tokaji（英國資本）</span>
          <span>Béres Szőlőbirtok</span>
          <span>Oremus（Vega Sicilia 旗下）</span>
          <span>Disznókő（AXA Millésimes）</span>
          <span>Tokaj Erzsébet Pince</span>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Tokaji Aszú 被稱為世界上「第一個」有文字記載的貴腐甜酒，這比法國波爾多的 Sauternes 早了多少年？',
      options: ['A. 約 10 年', 'B. 約 50 年', 'C. 約 100 年', 'D. 約 200 年'],
      correct: 2,
      explanation: '有文字記載的 Tokaji Aszú 貴腐甜酒釀造技術可追溯至 1630 年代（傳說中的 Máté Szepsy Laczkó），而法國蘇玳（Sauternes）的 Château d\'Yquem 在 1847 年才首次有文字記載採用貴腐採收技術。托卡伊的貴腐釀造傳統比法國早了約 100-200 年，路易十四因此稱 Tokaji Aszú 為「酒中之王，王者之酒（Wine of Kings, King of Wines）」。'
    }
  },
  {
    title: '北匈牙利（Upper Hungary）— Eger、Mátra、Bükk',
    highlights: [
      { id: 1, icon: '🐂', title: '公牛血的故鄉', content: '埃格爾（Eger）是 Egri Bikavér（埃格爾公牛血）的出生地，也是匈牙利北部葡萄酒的心臟' },
      { id: 2, icon: '🌋', title: '火山丘陵地形', content: '流紋岩凝灰土（Rhyolite Tuff）丘陵，東北部山脈阻擋冷風，微氣候溫暖而多日照' },
      { id: 3, icon: '🍇', title: '多元品種', content: '紅酒以 Kékfrankos、Kadarka、Merlot 為主；白酒以 Olaszrizling、Chardonnay 為主' },
      { id: 4, icon: '🌿', title: 'Mátra：最大產區', content: 'Mátraalja 是匈牙利面積最大的單一葡萄酒產區，以量大實惠的白酒聞名' }
    ],
    content: `<div class="region-detail">
      <p>北匈牙利由三個相鄰產區組成：<strong>Eger（埃格爾）</strong>、<strong>Mátra（馬特拉）</strong> 和 <strong>Bükk（比科）</strong>，其中 Eger 是最有名的，以其戲劇性的公牛血（Bikavér）傳說和優質的紅酒聞名。</p>
      <div class="sub-regions">
        <div class="sub-region">
          <h4>🐂 埃格爾（Eger）</h4>
          <p>匈牙利紅酒的重要品質產區，以 Egri Bikavér 著稱。公牛血是多品種混釀（至少 3 種，Kékfrankos 為主），設有嚴格的 Egri Bikavér Superior 認證標準。白酒同樣優秀，尤其是礦物感十足的 Egri Leányka。</p>
        </div>
        <div class="sub-region">
          <h4>🌾 馬特拉（Mátra）</h4>
          <p>匈牙利面積最大的葡萄酒產區，以量大親民的白酒和 Muscat 品種為主，是匈牙利日常白酒的重要供應地。近年也有精品釀酒師開始在此實驗有機農法。</p>
        </div>
        <div class="sub-region">
          <h4>🏔️ 比科（Bükk）</h4>
          <p>最小也最涼爽的北部產區，海拔較高，以清爽高酸的白酒見長，近年以原生品種保護著稱。</p>
        </div>
      </div>
    </div>`,
    quiz: {
      question: 'Egri Bikavér（埃格爾公牛血）的釀造規定是什麼？',
      options: [
        'A. 必須 100% 使用 Kadarka 品種',
        'B. 必須使用至少 3 種葡萄品種，以 Kékfrankos 為主要品種',
        'C. 只能使用從托卡伊引進的葡萄',
        'D. 必須在橡木桶中陳年至少 5 年'
      ],
      correct: 1,
      explanation: 'Egri Bikavér 的法定規定要求：①至少混合 3 種葡萄品種（不能只用 2 種）；②Kékfrankos 必須是主要品種（佔比最高）；③其他允許品種包括 Kadarka、Merlot、Cabernet Franc、Zweigelt 等。更高級的「Egri Bikavér Superior」還有更嚴格的品質標準，包括更長的橡木桶陳年要求。'
    }
  },
  {
    title: '潘農地區（Pannon Region）— 匈牙利紅酒首都',
    highlights: [
      { id: 1, icon: '☀️', title: '最溫暖的產區群', content: '維拉尼年均氣溫 11.6°C，是匈牙利最溫暖的葡萄酒產區，波爾多品種在此充分成熟' },
      { id: 2, icon: '🍷', title: '頂級紅酒的搖籃', content: 'Villány 和 Szekszárd 是匈牙利公認的頂級紅酒產區，國際評分媲美南法' },
      { id: 3, icon: '🌹', title: '維拉尼（Villány）', content: '以 Cabernet Franc 最著名，建立了「Villányi Franc」品牌認證，是匈牙利最高級紅酒' },
      { id: 4, icon: '🐂', title: '塞克薩德（Szekszárd）', content: '另一個 Bikavér 產地，以 Kadarka 保存最佳著稱，也是濃郁 Kékfrankos 的名產地' }
    ],
    content: `<div class="region-detail">
      <p>潘農地區（Pannon）是匈牙利紅酒的心臟地帶，位於南部最溫暖的區域，地中海氣候影響明顯，使波爾多品種（Cabernet Franc、Merlot）能達到世界級成熟度。</p>
      <div class="pannon-regions">
        <div class="pannon-region villany">
          <h4>🏆 維拉尼（Villány）</h4>
          <ul>
            <li>年均氣溫：11.6°C（最高）</li>
            <li>土壤：石灰岩 + 紅色黏土</li>
            <li>代表品種：Cabernet Franc, Merlot, Cabernet Sauvignon</li>
            <li>頂級酒款：Villányi Franc（官方認證）</li>
            <li>代表酒莊：Bock, Gere, Malatinszky, Vylyan</li>
          </ul>
        </div>
        <div class="pannon-region szekszard">
          <h4>🍷 塞克薩德（Szekszárd）</h4>
          <ul>
            <li>丘陵黃土地形，保溫性好</li>
            <li>代表品種：Kékfrankos, Kadarka, Cabernet Franc</li>
            <li>頂級酒款：Szekszárdi Bikavér, 濃郁 Kékfrankos</li>
            <li>代表酒莊：Dúzsi, Heimann, Sebestyén</li>
          </ul>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '為什麼維拉尼（Villány）是匈牙利波爾多品種紅酒的最佳產區？',
      options: [
        'A. 因為它靠近波爾多，受到直接的大西洋氣候影響',
        'B. 因為有大量法國釀酒師在此工作',
        'C. 因為它是匈牙利最溫暖的產區，年均氣溫高，地中海氣候影響使 Cabernet Franc 等品種能充分成熟',
        'D. 因為土壤中含有與波爾多完全相同的礫石成分'
      ],
      correct: 2,
      explanation: '維拉尼位於匈牙利最南端，年均氣溫 11.6°C 是全國最高，南方的地中海氣候影響顯著（夏季溫暖乾燥），石灰岩和紅色黏土的土壤組合也非常適合波爾多品種。這些條件使 Cabernet Franc 和 Merlot 能達到充分的果實成熟度，單寧柔熟，沒有北部涼爽產區常見的青澀感。'
    }
  },
  {
    title: '巴拉頓與多瑙河地區',
    highlights: [
      { id: 1, icon: '🌊', title: '巴拉頓湖（Balaton）', content: '中歐最大淡水湖，水體調節氣溫，Badacsony 的玄武岩火山土是獨特白酒的搖籃' },
      { id: 2, icon: '🌋', title: 'Badacsony 火山', content: '巴拉頓湖北岸的玄武岩火山丘，Olaszrizling 和 Szürkebarát 的礦物感表現舉世無雙' },
      { id: 3, icon: '🌾', title: '多瑙河平原（Duna）', content: 'Kunság、Hajós-Baja、Csongrád 以廣大的沙質平原為主，以量產親民餐酒著稱' },
      { id: 4, icon: '🧂', title: '沙地的歷史意義', content: '多瑙河平原的沙質土壤在 19 世紀根瘤蚜蟲（Phylloxera）侵害時保護了大部分葡萄樹' }
    ],
    content: `<div class="region-detail">
      <div class="balaton-section">
        <h4>🌊 巴拉頓地區（5 個產區）</h4>
        <div class="balaton-regions">
          <div>
            <strong>Badacsony</strong>：玄武岩火山土，礦物感強，Olaszrizling/Szürkebarát 最佳
          </div>
          <div>
            <strong>Balatonfüred-Csopak</strong>：石灰岩，清爽高酸，精緻白酒
          </div>
          <div>
            <strong>Balatonboglár</strong>：湖南岸，較溫暖，可種植波爾多品種
          </div>
          <div>
            <strong>Balatonfelvidék</strong>：火山土，高海拔，涼爽清新風格
          </div>
          <div>
            <strong>Somló</strong>（技術上獨立）：孤立火山，Juhfark 稀少名品
          </div>
        </div>
      </div>
      <div class="duna-section">
        <h4>🌾 多瑙河平原（3 個產區）</h4>
        <p>Kunság、Hajós-Baja 和 Csongrád 組成了匈牙利最大的葡萄種植區（按面積），以廣大的沙質平原為主要地貌，出產匈牙利最大量的日常餐酒。雖然風格不如其他產區精緻，但歷史上對保存葡萄酒業起了重要作用。</p>
      </div>
      <div class="summary-map">
        <h4>📊 五大產區群一覽</h4>
        <table class="region-summary">
          <tr><th>產區群</th><th>代表產區</th><th>主要酒款</th></tr>
          <tr><td>🍯 托卡伊</td><td>Tokaj</td><td>Aszú 甜酒、干型 Furmint</td></tr>
          <tr><td>🐂 北匈牙利</td><td>Eger, Mátra</td><td>Egri Bikavér 公牛血</td></tr>
          <tr><td>☀️ 潘農</td><td>Villány, Szekszárd</td><td>Villányi Franc, Bikavér</td></tr>
          <tr><td>🌊 巴拉頓</td><td>Badacsony</td><td>礦物感 Olaszrizling</td></tr>
          <tr><td>🌾 多瑙河</td><td>Kunság</td><td>親民日常餐酒</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '為什麼 Badacsony 的 Olaszrizling 比匈牙利其他地區的同品種更具礦物感和複雜度？',
      options: [
        'A. 因為 Badacsony 緯度最高，氣候最冷',
        'B. 因為 Badacsony 使用特別的有機農法',
        'C. 因為 Badacsony 的玄武岩火山土壤保熱性強，葡萄從中吸取大量火山礦物質',
        'D. 因為 Badacsony 的降雨量最充足，讓葡萄皮更厚'
      ],
      correct: 2,
      explanation: 'Badacsony 是巴拉頓湖北岸的玄武岩火山山丘，其特殊的玄武岩土壤有兩大優勢：①強大的保熱性（白天吸熱，夜晚釋放），使葡萄緩慢而完整地成熟；②火山岩中的礦物質（鐵、錳、鎂等）滲入土壤，葡萄根系吸收後轉化為葡萄酒中獨特的礦物感。這是平原地區的 Olaszrizling 無法比擬的風土優勢。'
    }
  }
]
