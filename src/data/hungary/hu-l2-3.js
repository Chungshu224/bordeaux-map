/**
 * HU L2-3 維拉尼頂級酒莊：匈牙利最佳紅酒產區的名莊深解
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '維拉尼頂級紅酒',
    subtitle: '匈牙利的「南方波爾多」：Cabernet Franc 王國與名莊群像',
    icon: '🍷',
    background: 'linear-gradient(135deg, #7b1c2e 0%, #3a1a2e 100%)'
  },

  {
    title: '維拉尼產區：匈牙利的「南方波爾多」',
    highlights: [
      { id: 1, icon: '🌡️', title: '匈牙利最溫暖的葡萄酒產區', content: '位於巴蘭尼亞縣（Baranya）最南端，緊鄰克羅埃西亞邊境，維拉尼丘陵擋住了北方寒流，形成匈牙利年均溫最高、無霜期最長的微氣候' },
      { id: 2, icon: '🪨', title: '石灰岩與紅土（Terra Rossa）', content: '土壤以石灰岩、紅色黏土和黃土為主，排水極佳，為 Cabernet Franc、Cabernet Sauvignon 與 Merlot 提供類似波爾多右岸的礦石感與結構' },
      { id: 3, icon: '🏷️', title: '2006 年起的原產地標章', content: '維拉尼於 2006 年建立以番紅花（crocus）為標誌的產區認證標章，是匈牙利最早導入嚴謹原產地保護制度的產區之一' },
      { id: 4, icon: '📜', title: '只釀紅酒與粉紅酒的 AOC', content: '「Villányi」法定產區規定只能生產紅酒和粉紅酒（Siller），這在匈牙利 22 個法定產區中相當獨特，凸顯其對紅酒品質的極致專注' }
    ],
    content: `<div class="villany-intro">
      <p class="lead-text">若托卡伊是匈牙利白酒的靈魂，維拉尼就是匈牙利紅酒的心臟。這個緊鄰克羅埃西亞的小產區，常被國際酒評家稱為「匈牙利的波爾多」——地中海式的溫暖氣候、石灰岩土壤，以及以 Cabernet Franc、Cabernet Sauvignon、Merlot 為核心的波爾多品種組合，讓維拉尼在 1990 年代私有化浪潮後迅速崛起為匈牙利最頂尖的紅酒產區。</p>
      <div class="region-stats">
        <div class="stat-item"><span class="stat-num">45.8°N</span><span class="stat-label">緯度（與波爾多相近）</span></div>
        <div class="stat-item"><span class="stat-num">11.5°C+</span><span class="stat-label">年均溫（匈牙利最高）</span></div>
        <div class="stat-item"><span class="stat-num">1990s</span><span class="stat-label">私有化後名莊崛起時代</span></div>
      </div>
      <div class="timeline-box">
        <h4>🗓️ 維拉尼原產地保護與品牌化歷程</h4>
        <div class="timeline-items">
          <div class="tl-item"><span class="tl-year">1991</span><span>Gere Attila Winery 創立，私有化後第一波名莊誕生</span></div>
          <div class="tl-item"><span class="tl-year">2006</span><span>導入以番紅花為標誌的維拉尼原產地認證標章</span></div>
          <div class="tl-item"><span class="tl-year">2013–2014</span><span>「Villányi Franc」品牌正式立法，2014 年 8 月 1 日生效</span></div>
          <div class="tl-item"><span class="tl-year">近年</span><span>Super Premium 等級確立，維拉尼 Cabernet Franc 躋身國際精品酒行列</span></div>
        </div>
      </div>
    </div>`
  },

  {
    component: 'HungaryRegionMapSlide',
    title: '維拉尼的地理位置與風土',
    componentProps: {
      mapRegion: 'Villany',
      description: '維拉尼位於匈牙利最南端、緊鄰克羅埃西亞邊境的帕農尼亞（Pannon）大產區——喀爾巴阡山系的屏障效應加上地中海氣候的滲入，造就了全國最溫暖的葡萄酒風土',
    },
  },

  {
    title: '維拉尼開創世代：三大先驅酒莊',
    highlights: [
      { id: 1, icon: '🥇', title: 'Gere Attila Winery（1991 年創立）', content: 'Attila Gere 與妻子 Katalin 在政權轉型後創立，1994 年獲選年度最佳釀酒師；1997 年推出的 Kopar 至今是維拉尼最具象徵性的酒款' },
      { id: 2, icon: '🥈', title: 'Bock Winery（家族九代傳承）', content: 'Bock 家族自 1850 年起在維拉尼種植葡萄，現任莊主 József Bock 於父親 1981 年過世後接手；如今經營約 145 公頃葡萄園，出產 36 款酒' },
      { id: 3, icon: '🏅', title: 'Malatinszky Estate（1997 年創立）', content: '前侍酒師 Csaba Malatinszky 創立，2001 年開始大量種植 Cabernet Franc；2009 年轉為有機農法，2015 年推出旗艦酒 Maghari' },
      { id: 4, icon: '🍇', title: '共同信念：波爾多品種在此找到新家', content: '三家酒莊都在 1990 年代的私有化浪潮中崛起，共同確立了 Cabernet Franc／Cabernet Sauvignon／Merlot 作為維拉尼的核心品種組合' }
    ],
    content: `<div class="villany-estates">
      <div class="estate-card">
        <h4>🏅 Gere Attila Winery — Kopar 的誕生地</h4>
        <table class="estate-table">
          <tr><td>創立</td><td>1991 年，Attila Gere 與 Katalin Gere</td></tr>
          <tr><td>旗艦酒</td><td>Kopar（首釀 1997 年）</td></tr>
          <tr><td>葡萄園</td><td>Kopár、Konkoly、Csillagvölgy、Ördögárok 四大單一葡萄園精選</td></tr>
          <tr><td>原始配方</td><td>Cabernet Sauvignon 40%／Merlot 40%／Cabernet Franc 20%，18 個月全新法國橡木桶陳釀</td></tr>
          <tr><td>地位</td><td>被公認為匈牙利最具代表性的紅酒之一，是維拉尼現代復興的象徵</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🍷 Bock Winery — 九代家族的傳承</h4>
        <table class="estate-table">
          <tr><td>家族歷史</td><td>自 1850 年起於維拉尼種植葡萄，傳承九代</td></tr>
          <tr><td>現任莊主</td><td>József Bock（1981 年父親過世後接手釀酒）</td></tr>
          <tr><td>規模</td><td>約 145 公頃葡萄園，年產 36 款酒</td></tr>
          <tr><td>旗艦混釀</td><td>波爾多式混釀：Cabernet Sauvignon 60%／Cabernet Franc 30%／Merlot 10%（Capella 系列為代表）</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🌿 Malatinszky Estate — 有機精品先驅</h4>
        <table class="estate-table">
          <tr><td>創立</td><td>1997 年，前侍酒師 Csaba Malatinszky</td></tr>
          <tr><td>品種轉向</td><td>2001 年起大量種植維拉尼的旗艦品種 Cabernet Franc</td></tr>
          <tr><td>有機認證</td><td>自 2009 年起全面採行有機農法，旗下 Kúria 系列均為有機認證</td></tr>
          <tr><td>旗艦酒</td><td>Maghari（2015 年首釀，密閉式新橡木桶發酵陳釀，2018 年獲上海／巴黎 SIAL 創新藍帶獎）</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '下列哪家酒莊由 Attila Gere 於 1991 年創立，並在 1997 年推出象徵維拉尼復興的旗艦酒「Kopar」？',
      options: ['Gere Attila Winery', 'Bock Winery', 'Malatinszky Estate', 'Tiffán Winery'],
      correct: 0,
      explanation: 'Gere Attila Winery 由 Attila Gere 與妻子 Katalin 於 1989 年政權轉型後不久的 1991 年創立。1997 年，取自 Kopár、Konkoly、Csillagvölgy、Ördögárok 四大葡萄園精選果實的 Kopar 首次問世，隨即成為維拉尼、乃至匈牙利最具代表性的紅酒之一。'
    }
  },

  {
    title: '新生代與精品名莊：從家族到國際投資',
    highlights: [
      { id: 1, icon: '🏛️', title: 'Tiffán Winery（1990 年創立，家族史達 1746 年）', content: 'Ede Tiffán 家族早在 1746 年就從德國移居維拉尼種植葡萄；1990 年私有化後以 0.5 公頃起家，1991 年獲選年度最佳釀酒師，旗艦酒 Grande Selection 於 1995 年份贏得維拉尼紅酒評比冠軍' },
      { id: 2, icon: '🌟', title: 'Vylyan Vineyards（1992 年創立）', content: 'Pál Debreczeni 創立，酒莊名取自維拉尼古地名「Vylian」；現由 Mónika Debreczeni 經營約 120 公頃園區，2008 年獲選年度酒莊，旗艦酒 Mandolás 與 Villányi Franc 廣受國際好評' },
      { id: 3, icon: '🇺🇸', title: 'Sauska（2006–2008 年間創立）', content: '旅美匈牙利企業家 Krisztián Sauska 繼托卡伊酒莊後在維拉尼設立第二座酒莊，專注 Cabernet Franc、Merlot、Kékfrankos 與原生品種 Kadarka，波爾多式混釀廣受精品市場推崇' },
      { id: 4, icon: '🏚️', title: 'Jackfall Bormanufaktúra（2001 年創立）', content: '在斯瓦比亞式老宅基礎上改建，2005 年建成可容納約 400 桶橡木桶的磚造長型酒窖；由釀酒師 András Köszeli（曾於托斯卡尼、納帕、普羅旺斯歷練）主導風格，年產約 7–8.5 萬瓶' },
      { id: 5, icon: '🏠', title: 'Wunderlich Winery', content: '維拉尼歷史悠久的家族酒莊之一，代表酒款 Bársony Cuvée（Cabernet Sauvignon＋Merlot 混釀）以絲絨般（bársony＝絲絨）的圓潤單寧著稱，是產區風格多樣性的縮影' }
    ],
    content: `<div class="villany-estates-2">
      <p class="lead-text">維拉尼的名莊版圖不只有 1990 年代的開創者——從堅守傳統大木桶的老家族，到帶著矽谷式資本與國際視野回鄉的新一代莊主，這片小產區匯聚了風格迥異卻同樣追求極致的釀酒哲學。</p>
      <table class="estate-table wide-table">
        <thead><tr><th>酒莊</th><th>創立</th><th>核心特色</th><th>代表酒款</th></tr></thead>
        <tbody>
          <tr><td>Tiffán Winery</td><td>1990（家族史 1746 起）</td><td>11 代家族傳承，小地塊風土表達</td><td>Grande Selection</td></tr>
          <tr><td>Vylyan Vineyards</td><td>1992</td><td>早期先驅之一，120 公頃規模化經營</td><td>Mandolás、Villányi Franc</td></tr>
          <tr><td>Sauska</td><td>2006–2008</td><td>旅美資本＋現代釀酒技術，波爾多式精品定位</td><td>Cuvée 系列、Cabernet Franc</td></tr>
          <tr><td>Jackfall Bormanufaktúra</td><td>2001</td><td>藝術化改建酒窖，國際歷練釀酒師</td><td>單一園 Cabernet Franc 系列</td></tr>
          <tr><td>Wunderlich Winery</td><td>歷史家族酒莊</td><td>絲絨般圓潤單寧風格</td><td>Bársony Cuvée</td></tr>
        </tbody>
      </table>
      <div class="grape-varieties">
        <h4>🍇 維拉尼的核心品種光譜</h4>
        <table class="variety-table">
          <thead><tr><th>品種</th><th>風格</th><th>代表酒莊</th></tr></thead>
          <tbody>
            <tr><td>Cabernet Franc</td><td>紫羅蘭＋草本＋黑醋栗，緊緻單寧，是維拉尼的旗艦品種</td><td>Gere, Malatinszky, Sauska</td></tr>
            <tr><td>Cabernet Sauvignon</td><td>黑莓＋雪松，結構感強，常為混釀骨幹</td><td>Gere, Bock, Wunderlich</td></tr>
            <tr><td>Merlot</td><td>梅子＋巧克力，圓潤柔順，平衡單寧</td><td>Bock, Wunderlich</td></tr>
            <tr><td>Kékfrankos</td><td>黑櫻桃＋辛香料，酸度鮮明</td><td>Sauska, Vylyan</td></tr>
            <tr><td>Portugieser</td><td>輕盈新鮮，適合早飲</td><td>多數酒莊均有生產</td></tr>
          </tbody>
        </table>
      </div>
    </div>`
  },

  {
    title: 'Villányi Franc——匈牙利唯一的品種專屬品牌',
    highlights: [
      { id: 1, icon: '🏷️', title: '2013–2014 年立法確立', content: '「Villányi Franc」是維拉尼獨創、2014 年 8 月 1 日正式生效的品種專屬品牌，需經釀酒師評審小組的感官品評認證才能掛牌，是匈牙利唯一擁有此類制度的品種品牌' },
      { id: 2, icon: '🥉', title: 'Classicus（入門級）', content: '果實需採自維拉尼法定產區，橡木桶陳釀至少 6 個月，風格清新易飲，是認識產區風格的入門款' },
      { id: 3, icon: '🥈', title: 'Premium Villányi Franc', content: '最大產量限制為每公頃 60 百公升（60 hl/ha），橡木桶陳釀至少 1 年並輔以瓶陳；允許混入最多 15% 其他品種以增添複雜度' },
      { id: 4, icon: '🥇', title: 'Super Premium Villányi Franc', content: '必須 100% Cabernet Franc；最大產量限制在每公頃 50 公擔（約更嚴格的低產）；最低酒精濃度 12.83%；總陳年至少 2 年，其中至少 1 年須於橡木桶中進行' }
    ],
    content: `<div class="franc-system">
      <p class="lead-text">Villányi Franc 不只是一個行銷名稱，而是匈牙利葡萄酒法規中少見的「品種專屬分級品牌」——透過三個嚴謹的品質等級，將 Cabernet Franc 從單純的波爾多配角，重新定義為維拉尼的招牌主角。</p>
      <div class="comparison-box">
        <h4>🆚 Villányi Franc 三級制度比較</h4>
        <table class="compare-table">
          <thead><tr><th>項目</th><th>Classicus</th><th>Premium</th><th>Super Premium</th></tr></thead>
          <tbody>
            <tr><td>品種純度</td><td>Cabernet Franc 為主</td><td>可混入最多 15% 其他品種</td><td>須 100% Cabernet Franc</td></tr>
            <tr><td>橡木桶陳釀</td><td>至少 6 個月</td><td>至少 1 年＋瓶陳</td><td>總陳年 2 年，含至少 1 年木桶</td></tr>
            <tr><td>產量限制</td><td>無特別規定</td><td>≤ 60 hl/ha</td><td>更嚴格的低產標準</td></tr>
            <tr><td>最低酒精度</td><td>無特別規定</td><td>無特別規定</td><td>12.83%</td></tr>
            <tr><td>認證方式</td><td>符合法定產區規範</td><td>感官評審小組認證</td><td>感官評審小組認證，標準最嚴</td></tr>
          </tbody>
        </table>
      </div>
      <div class="villany-tips">
        <h4>🥩 侍酒與配餐建議</h4>
        <p>建議侍酒溫度 16–18°C，略低於一般波爾多紅酒，以突顯 Cabernet Franc 的紫羅蘭花香與草本清新感。經典配餐包括匈牙利燉牛肉（Gulyás）、烤羊排與熟成硬質乳酪；頂級 Super Premium 款（如 Gere Kopar）陳年潛力可達 15–20 年。</p>
      </div>
    </div>`,
    quiz: {
      question: '根據 Villányi Franc 的三級制度，下列關於「Super Premium Villányi Franc」的敘述何者正確？',
      options: [
        '可混入最多 15% 其他品種以增添複雜度',
        '橡木桶陳釀至少 6 個月即可',
        '必須 100% 使用 Cabernet Franc，且總陳年至少 2 年（含至少 1 年橡木桶）',
        '沒有最低酒精濃度的規定'
      ],
      correct: 2,
      explanation: 'Super Premium Villányi Franc 是三級制度中規格最嚴謹的等級：必須 100% Cabernet Franc（不可混入其他品種）、最低酒精濃度 12.83%、產量限制最為嚴格，且總陳年須達 2 年、其中至少 1 年於橡木桶中進行。允許混入 15% 其他品種的是 Premium 等級，橡木桶最低 6 個月的則是入門的 Classicus 等級。'
    }
  },

  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: '🧠 維拉尼頂級酒莊總複習',
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: '維拉尼於哪一年建立以番紅花（crocus）為標誌的產區原產地認證標章？',
            options: ['1991 年', '2006 年', '2014 年', '2018 年'],
            correct: 1,
            explanation: '維拉尼於 2006 年導入以番紅花為標誌的原產地認證標章，是匈牙利最早建立嚴謹產區保護制度的產區之一，早於 2013–2014 年才立法的「Villányi Franc」品種專屬品牌。'
          },
          {
            type: 'single',
            question: 'Bock Winery 的家族在維拉尼種植葡萄的歷史可追溯至哪個年代，傳承了幾個世代？',
            options: ['1850 年起，傳承九代', '1920 年起，傳承三代', '1991 年起，傳承一代', '1746 年起，傳承十一代'],
            correct: 0,
            explanation: 'Bock 家族自 1850 年起便在維拉尼種植葡萄，傳承九代，現任莊主 József Bock 於父親 1981 年過世後接手釀酒，如今經營約 145 公頃葡萄園。1746 年起、傳承十一代的家族則是 Tiffán 家族。'
          },
          {
            type: 'single',
            question: '下列哪一項不是「Villányi」法定產區（AOC）的規定？',
            options: [
              '只允許生產紅酒與粉紅酒（Siller）',
              '這是匈牙利 22 個法定產區中相當獨特的規定',
              '也允許生產貴腐甜白酒（Aszú）',
              '凸顯了維拉尼對紅酒品質的極致專注'
            ],
            correct: 2,
            explanation: '「Villányi」法定產區規定只能生產紅酒和粉紅酒（Siller），不包含任何白酒或甜酒；貴腐甜白酒 Aszú 是托卡伊（Tokaj）產區的招牌，與維拉尼無關。'
          },
          {
            type: 'single',
            question: 'Malatinszky Estate 從哪一年起全面採行有機農法？',
            options: ['1997 年', '2001 年', '2009 年', '2015 年'],
            correct: 2,
            explanation: 'Malatinszky Estate 由前侍酒師 Csaba Malatinszky 於 1997 年創立，2001 年起大量種植 Cabernet Franc，並自 2009 年起全面轉為有機農法；2015 年則是旗艦酒 Maghari 首釀的年份。'
          }
        ]
      }
    }
  }
]
