/**
 * HU L1-7 葡萄酒類型與風格：Aszú、Bikavér、干型白酒
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利葡萄酒類型與風格',
    subtitle: '從 Tokaji Aszú 甜酒到 Egri Bikavér 公牛血',
    icon: '🍾',
    background: 'linear-gradient(135deg, #6b3a7d 0%, #2c1d6b 100%)'
  },
  {
    title: '甜型白酒：Tokaji Aszú 與 Szamorodni',
    highlights: [
      { id: 1, icon: '🍯', title: 'Tokaji Aszú', content: '最著名的匈牙利酒款，以貴腐果漿釀製，殘糖 120 g/L 以上，蜂蜜、杏桃、橙皮蜜餞的層次感' },
      { id: 2, icon: '🎭', title: 'Szamorodni', content: '「Szamorodni」意為「按原樣採收」，整串葡萄採收（含貴腐和普通果粒），可為干型（Száraz）或甜型（Édes）' },
      { id: 3, icon: '💎', title: 'Eszencia', content: '純 Aszú 漿果自身重量壓出的果汁，糖度 450-800 g/L，是世界上最珍稀甜酒，一般只在最佳年份出產' },
      { id: 4, icon: '🏠', title: '橡木桶陳年', content: '傳統 Tokaji 在匈牙利橡木（Zemplén）或 Aszú 桶中陳年，帶有氧化性的棕色香料（榛子、蜂蠟、薑）複雜度' }
    ],
    content: `<div class="sweet-wine-guide">
      <p class="lead-text">匈牙利最著名的葡萄酒類型無疑是托卡伊（Tokaj）的甜型白酒，其中 Tokaji Aszú 是皇冠上的明珠。了解不同甜型托卡伊的風格差異，是品味匈牙利葡萄酒的重要一步。</p>
      <div class="tokaj-types">
        <div class="wine-type">
          <h4>🍯 Tokaji Aszú</h4>
          <div class="type-detail">
            <p><strong>製作：</strong>貴腐 Aszú 漿果 + 新釀基酒，整桶浸泡 12-60 小時後壓榨</p>
            <p><strong>標準：</strong>殘糖 ≥ 120 g/L（2013 年後新法規）</p>
            <p><strong>陳年：</strong>至少 18 個月橡木桶 + 12 個月瓶中熟成（共 30 個月）</p>
            <p><strong>風味：</strong>蜂蜜、杏桃醬、橙皮蜜餞、薑、肉桂、燧石礦物</p>
          </div>
        </div>
        <div class="wine-type">
          <h4>🎭 Szamorodni（按原樣採收）</h4>
          <div class="type-detail">
            <p><strong>製作：</strong>整串葡萄採收，不分揀 Aszú 漿果，自然發酵</p>
            <p><strong>Száraz（干型）：</strong>氧化陳年，類似 Fino Sherry，榛子、蜂蠟、杏仁</p>
            <p><strong>Édes（甜型）：</strong>保留較高殘糖，帶蜂蜜感但不如 Aszú 濃郁</p>
          </div>
        </div>
        <div class="wine-type">
          <h4>💎 Eszencia（精華）</h4>
          <div class="type-detail">
            <p><strong>製作：</strong>純 Aszú 漿果自然滴落的果汁，無機械壓榨</p>
            <p><strong>糖度：</strong>450-800 g/L（比蜂蜜更甜）</p>
            <p><strong>酒精：</strong>通常只有 2-5%（高糖分限制發酵）</p>
            <p><strong>稀少度：</strong>最佳年份才出產，每公頃只能收集幾公升</p>
          </div>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Tokaji Aszú 的地理核心',
    componentProps: {
      mapRegion: 'Tokaj',
      description: '貴腐甜酒的誕生地——秋季晨霧（Bodrog 河）與午後暖陽創造 Botrytis Cinerea 生長的完美條件，造就貴腐糖珠（Aszú berries）',
    },
  },,

  {
    title: '干型白酒：Furmint 和 Olaszrizling',
    highlights: [
      { id: 1, icon: '🍋', title: '干型 Furmint', content: '21 世紀匈牙利出口的主力，以高酸、礦物感和超長陳年潛力著稱，頂級款可陳年 20-30 年' },
      { id: 2, icon: '🌊', title: 'Olaszrizling（Balatoni）', content: '巴拉頓湖北岸玄武岩土壤的 Olaszrizling 是匈牙利日常白酒中最具個性的代表' },
      { id: 3, icon: '🦁', title: 'Juhfark 白酒', content: '只在 Somló 火山產區種植，高酸強礦物感，傳統「婚禮之夜」的珍稀酒款' },
      { id: 4, icon: '🐦', title: 'Szürkebarát（Pinot Gris）', content: 'Badacsony 玄武岩土壤上的 Szürkebarát 是匈牙利最豐郁的白酒之一，帶煙燻礦物感' }
    ],
    content: `<div class="dry-whites">
      <p>匈牙利干型白酒種類繁多，不同產區和品種展現截然不同的風格。以下是最值得了解的幾種：</p>
      <div class="white-wine-map">
        <div class="region-wine">
          <h4>🍯 托卡伊 干型 Furmint</h4>
          <p>最受國際關注的匈牙利白酒，特別是 Tokaj 的干型 Furmint。高酸度（可達 8-9 g/L 總酸）和豐富的礦物感是其標誌，頂級款在 Zemplén 山脈的火山土壤上展現出類似優質白布根地的複雜度。</p>
          <div class="food-pairing">最佳搭配：生蠔、清蒸魚、威化薄餅佐魚子醬</div>
        </div>
        <div class="region-wine">
          <h4>🌊 巴拉頓 Olaszrizling</h4>
          <p>Badacsony 的玄武岩火山土讓 Olaszrizling 展現礦物感和清新活力，Balatonfüred-Csopak 的石灰岩土壤則帶來更精緻的酸度和花香。兩種風格都比平原地區的 Olaszrizling 複雜得多。</p>
          <div class="food-pairing">最佳搭配：焗烤魚、輕淡雞肉料理、鮮蘑菇</div>
        </div>
        <div class="region-wine">
          <h4>🌋 Somló Juhfark</h4>
          <p>Somló 是一個孤立的火山山丘，Juhfark 幾乎只在這裡種植。高酸、高礦物感、低酒精（通常 11-12.5%），年輕時非常閉鎖，需要 5-10 年才能開放，是匈牙利最獨特也最難得的白酒之一。</p>
          <div class="food-pairing">最佳搭配：匈牙利傳統魚湯、清燉豬肉</div>
        </div>
      </div>
    </div>`
  },
  {
    title: 'Egri Bikavér：公牛血的傳奇',
    highlights: [
      { id: 1, icon: '🐂', title: '公牛血的定義', content: 'Egri Bikavér 是埃格爾（Eger）產區的官方混釀紅酒，至少使用 3 種葡萄（以 Kékfrankos 為主），強調地方風土' },
      { id: 2, icon: '🏷️', title: 'Superior 認證', content: '「Bikavér Superior」是最高等級，需要通過嚴格的盲品評審，由埃格爾酒莊協會認定' },
      { id: 3, icon: '🍷', title: '塞克薩德公牛血', content: 'Szekszárdi Bikavér 是另一個官方公牛血，來自更南部的塞克薩德，以 Kadarka 比例更高著稱' },
      { id: 4, icon: '🌿', title: '風味特徵', content: '紅色漿果（草莓、酸櫻桃）、辛香料（丁香、胡椒）、菸草感，中等酒體，適合搭配匈牙利傳統紅燉肉' }
    ],
    content: `<div class="bikaver-guide">
      <p>Egri Bikavér（埃格爾公牛血）是匈牙利最著名的紅酒之一，也是全球葡萄酒愛好者識別匈牙利紅酒的第一個名字。它的傳奇故事（見 L1-4 課程）和嚴格的品質認證體系，使其成為匈牙利葡萄酒業的旗幟性品牌。</p>
      <div class="bikaver-specs">
        <h4>📋 Egri Bikavér 法定規格</h4>
        <div class="spec-grid">
          <div class="spec">
            <strong>最低品種數</strong>
            <span>至少 3 種葡萄品種</span>
          </div>
          <div class="spec">
            <strong>主要品種</strong>
            <span>Kékfrankos（比例最高）</span>
          </div>
          <div class="spec">
            <strong>最低 Kékfrankos 比例</strong>
            <span>至少 30%（一般超過 50%）</span>
          </div>
          <div class="spec">
            <strong>其他允許品種</strong>
            <span>Kadarka, Merlot, Cabernet Franc, Zweigelt, Pinot Noir</span>
          </div>
          <div class="spec">
            <strong>最低陳年（基本款）</strong>
            <span>18 個月（橡木桶 + 瓶中）</span>
          </div>
          <div class="spec">
            <strong>Superior 陳年</strong>
            <span>24 個月（橡木桶 12+ 個月）</span>
          </div>
        </div>
      </div>
      <div class="compare-bikaver">
        <h4>🆚 Egri vs. Szekszárdi Bikavér</h4>
        <div class="compare-cols">
          <div>
            <strong>Egri Bikavér（埃格爾）：</strong>
            <p>較涼爽的北部氣候，酸度更高，風格更緊實，有更明顯的礦物感和香料感，北部火山岩土壤</p>
          </div>
          <div>
            <strong>Szekszárdi Bikavér（塞克薩德）：</strong>
            <p>較溫暖的南部氣候，Kadarka 比例更高，帶有更多玫瑰和東方香料的芬芳，風格更圓潤</p>
          </div>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Egri Bikavér 的風土地圖',
    componentProps: {
      mapRegion: 'Eger',
      description: 'Eger（北部高地）與 Szekszárd（帕農尼亞）並列匈牙利兩大公牛血法定產區——Eger 以較涼爽的大陸性氣候和 Kékfrankos 為核心',
    },
  },,

  {
    title: '其他重要酒款類型',
    highlights: [
      { id: 1, icon: '🍷', title: 'Villányi Franc', content: '維拉尼的 Cabernet Franc 單一品種款，設有嚴格的官方認證，是匈牙利最受國際尊重的頂級紅酒之一' },
      { id: 2, icon: '❄️', title: '冰酒（Jégbor）', content: '在匈牙利較涼爽的北部產區（Tokaj、Eger），寒冷年份可生產冰酒，風格類似德國/加拿大冰酒' },
      { id: 3, icon: '🌹', title: '粉紅酒（Rosé）', content: '匈牙利粉紅酒以 Kékfrankos 和 Kadarka 為主，清爽紅果風格，是夏季餐廳的熱門選擇' },
      { id: 4, icon: '🍾', title: '氣泡酒（Pezsgő）', content: '匈牙利傳統上也生產氣泡酒（Pezsgő），以 Chardonnay、Pinot Noir 為主，近年品質提升顯著' }
    ],
    content: `<div class="other-wines">
      <div class="wine-overview">
        <h4>📊 匈牙利葡萄酒類型全覽</h4>
        <table class="wine-types-table">
          <tr><th>酒款類型</th><th>代表產區</th><th>代表品種</th><th>風格特點</th></tr>
          <tr><td>Tokaji Aszú</td><td>Tokaj</td><td>Furmint + Hárslevelű</td><td>貴腐甜酒，蜂蜜、杏桃、橙皮</td></tr>
          <tr><td>干型 Furmint</td><td>Tokaj, Somló</td><td>Furmint</td><td>高酸礦物，白布根地風格</td></tr>
          <tr><td>Olaszrizling</td><td>Balaton</td><td>Olaszrizling</td><td>清爽礦物，日常白酒</td></tr>
          <tr><td>Egri Bikavér</td><td>Eger</td><td>Kékfrankos + 混釀</td><td>辛香料紅酒，公牛血傳奇</td></tr>
          <tr><td>Villányi Franc</td><td>Villány</td><td>Cabernet Franc</td><td>豐郁紅酒，國際頂級品質</td></tr>
          <tr><td>Szekszárdi Bikavér</td><td>Szekszárd</td><td>Kékfrankos + Kadarka</td><td>花香辛料紅酒</td></tr>
        </table>
      </div>
      <div class="takeaway-box">
        <h4>🎯 學習重點摘要</h4>
        <p>記住這個「匈牙利葡萄酒身份卡」：</p>
        <ul>
          <li>🍯 <strong>甜酒代表</strong>：Tokaji Aszú（貴腐，Furmint）</li>
          <li>🍋 <strong>白酒代表</strong>：干型 Furmint（礦物，高酸）</li>
          <li>🐂 <strong>紅酒傳奇</strong>：Egri Bikavér（公牛血，多品種混釀）</li>
          <li>🏆 <strong>頂級紅酒</strong>：Villányi Franc（Cabernet Franc，南部溫暖）</li>
        </ul>
      </div>
    </div>`
  }
,
  {
    component: 'TokajiAszuLevelsSlide',
    title: '👑 Tokaji 貴腐甜酒分級互動詳解',
    description: '點選 3 / 5 / 6 Puttonyos 與 Eszencia，查看殘糖規範、釀造、風味、餐搭與代表酒莊'
  }
,
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
          text: '「Szamorodni Száraz」（乾型薩瑪羅尼）的風格最類似哪種其他世界名酒？',
          options: ['A. 法國 Sauternes', 'B. 德國 Trockenbeerenauslese（TBA）', 'C. 西班牙 Fino Sherry', 'D. 義大利 Moscato d\'Asti'],
          correct: 2,
          explanation: '干型 Szamorodni（Száraz Szamorodni）在橡木桶中進行氧化性陳年，接觸空氣，發展出榛子、蜂蠟、杏仁、橙皮等複雜的氧化香氣，風格上非常接近西班牙的 Fino Sherry（也是在空氣接觸下陳年的干型強化酒）。這種氧化風格與甜型托卡伊截然不同，也與其他甜酒（Sauternes、TBA）完全不同。'
        },
        {
          type: 'single',
          text: '下列哪種匈牙利白酒在年輕時非常「閉鎖」，需要多年陳年才能展現完整個性？',
          options: ['A. Olaszrizling（來自多瑙河平原）', 'B. Irsai Olivér', 'C. Somló 的 Juhfark', 'D. Cserszegi Fűszeres'],
          correct: 2,
          explanation: 'Somló 的 Juhfark 以高酸度、強烈礦物感和極強的陳年潛力著稱。年輕時（1-3年），這款酒通常非常緊繃「閉鎖」，酸度突出，礦物感強烈，果味隱退，需要耐心等待 5-10 年以上才能開放，展現蜂蜜、煙燻礦物和豐富的質地。其他幾個選項（Olaszrizling 平原款、Irsai Olivér、Cserszegi Fűszeres）都是早飲型芳香白酒，不具備明顯的陳年潛力。'
        },
        {
          type: 'single',
          text: 'Egri Bikavér 必須符合哪項最基本的法定條件？',
          options: ['A. 必須在埃格爾釀造，至少使用 3 種葡萄，Kékfrankos 是主要品種', 'B. 必須 100% 使用 Kadarka，在橡木桶中陳年 5 年以上', 'C. 必須使用 Furmint 和 Kékfrankos 各 50%', 'D. 必須添加指定比例的匈牙利橡木桶萃取液'],
          correct: 0,
          explanation: 'Egri Bikavér 的核心法定條件是：①必須來自埃格爾（Eger）法定產區；②至少使用 3 種不同葡萄品種（單一或雙品種不符合規定）；③Kékfrankos 必須是比例最高的品種。這個「多品種混釀以 Kékfrankos 為核心」的結構，是公牛血區別於其他單一品種或雙品種紅酒的根本特徵。'
        },
        {
          type: 'single',
          text: '匈牙利哪種酒款獲得了自己專屬的官方認證品牌，是匈牙利最受國際認可的單一品種紅酒？',
          options: ['A. Egri Bikavér（埃格爾公牛血）', 'B. Tokaji Furmint（托卡伊弗爾明特）', 'C. Villányi Franc（維拉尼弗朗克）', 'D. Szekszárdi Bikavér（塞克薩德公牛血）'],
          correct: 2,
          explanation: 'Villányi Franc 是匈牙利唯一擁有自己專屬品牌認證的單一品種紅酒。維拉尼酒農協會建立了嚴格的「Villányi Franc」認證制度，只有通過盲品評審、符合特定品質標準的 Cabernet Franc 單一品種款才能使用此認證。這個品牌在國際上受到了越來越多的認可，英國酒評家 Michael Broadbent 曾表示維拉尼是 Cabernet Franc 的「天然家園」。'
        }
        ]
      }
    }
  }
]
