/**
 * HU L1-7 葡萄酒類型與風格：一本匈牙利酒標速查手冊
 * （橫向掃描全國酒款類型與官方認證規則；個別產區地理見 L1-2/L1-5，托卡伊制度細節見 L1-6）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '匈牙利葡萄酒類型與風格',
    subtitle: '一本從 Tokaji Aszú 到 Egri Bikavér 的酒標速查手冊',
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
      <p class="lead-text">匈牙利最著名的葡萄酒類型無疑是托卡伊（Tokaj）的甜型白酒，其中 Tokaji Aszú 是皇冠上的明珠。了解不同甜型托卡伊的風格差異，是品味匈牙利葡萄酒的重要一步（貴腐機制與分級制度的完整說明見 L1-6）。</p>
      <div class="tokaj-types">
        <div class="wine-type">
          <h4>🍯 Tokaji Aszú</h4>
          <div class="type-detail">
            <p><strong>製作：</strong>貴腐 Aszú 漿果 + 新釀基酒，整桶浸泡 12-60 小時後壓榨</p>
            <p><strong>標準：</strong>殘糖 ≥ 120 g/L（2013 年後新法規）</p>
            <p><strong>陳年：</strong>至少 18 個月橡木桶 + 12 個月瓶中熟成（共 30 個月以上）</p>
            <p><strong>風味：</strong>蜂蜜、杏桃醬、橙皮蜜餞、薑、肉桂、燧石礦物</p>
          </div>
        </div>
        <div class="wine-type">
          <h4>🎭 Szamorodni（按原樣採收）</h4>
          <div class="type-detail">
            <p><strong>製作：</strong>整串葡萄採收，不分揀 Aszú 漿果，自然發酵</p>
            <p><strong>Száraz（干型）：</strong>刻意氧化陳年，類似 Fino Sherry，榛子、蜂蠟、杏仁</p>
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
      description: '貴腐甜酒的誕生地——秋季晨霧（Bodrog 河）與午後暖陽創造 Botrytis Cinerea 生長的完美條件，造就貴腐糖珠（Aszú berries）'
    }
  },
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
          <p>最受國際關注的匈牙利白酒，特別是 Tokaj 的干型 Furmint。高酸度和豐富的礦物感是其標誌，頂級款在 Zemplén 山脈的火山土壤上展現出類似優質白布根地的複雜度。</p>
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
    title: 'Egri Bikavér：公牛血的三個等級',
    highlights: [
      { id: 1, icon: '🐂', title: '公牛血的定義', content: 'Egri Bikavér 是埃格爾（Eger）產區的官方混釀紅酒，官方核准品種清單共 13 種，以 Kékfrankos 為法定核心品種' },
      { id: 2, icon: '🥉', title: 'Classicus（入門級）', content: '至少混合 4 種品種，Kékfrankos 佔比須在 30-65% 之間，風格活潑易飲' },
      { id: 3, icon: '🥇', title: 'Superior／Grand Superior（高階）', content: '至少混合 5 種品種，Kékfrankos 佔比須在 30-50% 之間，須通過更嚴格的盲品評審與較長陳年' },
      { id: 4, icon: '🍷', title: '塞克薩德公牛血', content: 'Szekszárdi Bikavér 是另一個官方公牛血，來自更南部的塞克薩德，以 Kadarka 比例更高著稱' }
    ],
    content: `<div class="bikaver-guide">
      <p>Egri Bikavér（埃格爾公牛血）是匈牙利最著名的紅酒之一，也是全球葡萄酒愛好者識別匈牙利紅酒的第一個名字（傳說故事見 L1-4 課程）。它的品質認證體系分為明確的等級，是理解匈牙利「官方混釀規則」最好的案例。</p>
      <div class="bikaver-specs">
        <h4>📋 Egri Bikavér 法定規格</h4>
        <div class="spec-grid">
          <div class="spec"><strong>核准品種清單</strong><span>共 13 種，含 Kékfrankos、Kadarka、Bíbor Kadarka、Cabernet Franc、Cabernet Sauvignon、Merlot、Zweigelt、Kékoportó、Pinot Noir、Syrah、Turán 等</span></div>
          <div class="spec"><strong>Classicus 品種數</strong><span>至少 4 種，Kékfrankos 佔 30-65%</span></div>
          <div class="spec"><strong>Superior／Grand Superior 品種數</strong><span>至少 5 種，Kékfrankos 佔 30-50%</span></div>
          <div class="spec"><strong>其他品種上限</strong><span>單一品種不得超過 30%（Turán 特別限制在 5% 以下），每個品種至少佔 5%</span></div>
          <div class="spec"><strong>認證方式</strong><span>由埃格爾酒莊協會組織盲品評審，通過者才能使用 Superior／Grand Superior 標示</span></div>
        </div>
      </div>
      <div class="compare-bikaver">
        <h4>🆚 Egri vs. Szekszárdi Bikavér</h4>
        <div class="compare-cols">
          <div><strong>Egri Bikavér（埃格爾）：</strong><p>較涼爽的北部氣候，酸度更高，風格更緊實，有更明顯的礦物感和香料感，北部火山岩土壤</p></div>
          <div><strong>Szekszárdi Bikavér（塞克薩德）：</strong><p>較溫暖的南部氣候，Kadarka 比例更高，帶有更多玫瑰和東方香料的芬芳，風格更圓潤</p></div>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: 'Egri Bikavér 的風土地圖',
    componentProps: {
      mapRegion: 'Eger',
      description: 'Eger（北部高地）與 Szekszárd（帕農尼亞）並列匈牙利兩大公牛血法定產區——Eger 以較涼爽的大陸性氣候和 Kékfrankos 為核心'
    }
  },
  {
    title: 'Villányi Franc：匈牙利唯一的單一品種認證品牌',
    highlights: [
      { id: 1, icon: '🏷️', title: '2014 年創立的認證', content: 'Villányi Franc 是匈牙利唯一擁有專屬品牌認證的單一品種紅酒，2014 年由維拉尼酒農協會正式建立規範' },
      { id: 2, icon: '💯', title: '100% Cabernet Franc', content: '規定必須是 100% Cabernet Franc 單一品種，不得混入其他品種' },
      { id: 3, icon: '📏', title: '嚴格產量限制', content: '最高產量限制在每公頃 35 百公升（35 hl/ha），遠低於一般餐酒等級的產量上限' },
      { id: 4, icon: '🍷', title: '陳年與盲品雙重把關', content: '至少須在橡木桶陳年 1 年、瓶中陳年 1 年，並須通過區域盲品小組（Sensory Panel）評審才能貼上「Villányi Franc」標籤' }
    ],
    content: `<div class="villanyi-franc-guide">
      <p>如果 Egri Bikavér 代表「官方混釀規則」的典範，那麼 Villányi Franc 就是「官方單一品種認證」的典範——匈牙利眾多產區中，唯有維拉尼為單一品種建立了如此嚴謹的品牌保護制度。</p>
      <div class="franc-specs">
        <h4>📋 Villányi Franc 認證規格</h4>
        <table class="wine-types-table">
          <tr><th>條件</th><th>規定</th></tr>
          <tr><td>品種</td><td>100% Cabernet Franc</td></tr>
          <tr><td>最高產量</td><td>35 hl/ha</td></tr>
          <tr><td>陳年要求</td><td>橡木桶至少 1 年 + 瓶中至少 1 年</td></tr>
          <tr><td>品質把關</td><td>須通過區域感官盲品小組評審</td></tr>
          <tr><td>建立年份</td><td>2014 年（維拉尼酒農協會）</td></tr>
        </table>
      </div>
      <div class="note-box">
        <p>🇬🇧 英國酒評家 Michael Broadbent 在 2000 年一場桶邊試飲後，留下了一句在匈牙利酒業廣為流傳的評語：「Cabernet Franc 在維拉尼找到了它的天然家園（has found its natural home）」——這句話至今仍是維拉尼行銷 Villányi Franc 品牌最重要的一句話。</p>
      </div>
      <div class="compare-bikaver">
        <h4>🆚 Villányi Franc vs. 羅亞爾河 Cabernet Franc</h4>
        <div class="compare-cols">
          <div><strong>維拉尼：</strong><p>溫暖產區，成熟度高，黑醋栗、黑李、紫羅蘭，單寧絲滑，陳年潛力接近波爾多右岸</p></div>
          <div><strong>羅亞爾河（Chinon、Bourgueil 等）：</strong><p>涼爽產區，紅色水果、草本／青椒感明顯，清爽高酸，風格更輕盈</p></div>
        </div>
      </div>
    </div>`
  },
  {
    title: '其他重要酒款類型',
    highlights: [
      { id: 1, icon: '❄️', title: '冰酒（Jégbor）', content: '在匈牙利較涼爽的北部產區（Tokaj、Eger），寒冷年份可生產冰酒，風格類似德國/加拿大冰酒，產量極少' },
      { id: 2, icon: '🌹', title: '粉紅酒（Rosé）', content: '匈牙利粉紅酒以 Kékfrankos 和 Kadarka 為主，清爽紅果風格，是夏季餐廳的熱門選擇' },
      { id: 3, icon: '🍾', title: '氣泡酒（Pezsgő）', content: '匈牙利氣泡酒傳統可追溯至 1882 年 József Törley 在 Budafok（Etyek-Buda 產區）創立的酒廠，一戰前產量一度僅次於法國，如今以 Chardonnay、Pinot Noir 為主流品種' },
      { id: 4, icon: '🎭', title: 'Szamorodni Száraz', content: '刻意氧化陳年的干型托卡伊，風格接近西班牙 Fino Sherry，是最容易被忽略卻極具個性的一款酒' }
    ],
    content: `<div class="other-wines">
      <div class="wine-overview">
        <h4>📊 匈牙利葡萄酒類型全覽</h4>
        <table class="wine-types-table">
          <tr><th>酒款類型</th><th>代表產區</th><th>代表品種</th><th>風格特點</th></tr>
          <tr><td>Tokaji Aszú</td><td>Tokaj</td><td>Furmint + Hárslevelű</td><td>貴腐甜酒，蜂蜜、杏桃、橙皮</td></tr>
          <tr><td>Szamorodni Száraz</td><td>Tokaj</td><td>Furmint</td><td>氧化陳年，類似 Fino Sherry</td></tr>
          <tr><td>干型 Furmint</td><td>Tokaj, Somló</td><td>Furmint</td><td>高酸礦物，白布根地風格</td></tr>
          <tr><td>Olaszrizling</td><td>Balaton</td><td>Olaszrizling</td><td>清爽礦物，日常白酒</td></tr>
          <tr><td>Egri Bikavér</td><td>Eger</td><td>Kékfrankos + 至少 3 品種</td><td>辛香料紅酒，公牛血傳奇</td></tr>
          <tr><td>Villányi Franc</td><td>Villány</td><td>100% Cabernet Franc</td><td>豐郁紅酒，官方認證頂級品質</td></tr>
          <tr><td>Szekszárdi Bikavér</td><td>Szekszárd</td><td>Kékfrankos + Kadarka</td><td>花香辛料紅酒</td></tr>
          <tr><td>Pezsgő</td><td>Etyek-Buda</td><td>Chardonnay, Pinot Noir</td><td>傳統法／夏馬法氣泡酒</td></tr>
        </table>
      </div>
      <div class="takeaway-box">
        <h4>🎯 學習重點摘要</h4>
        <p>記住這個「匈牙利葡萄酒身份卡」：</p>
        <ul>
          <li>🍯 <strong>甜酒代表</strong>：Tokaji Aszú（貴腐，殘糖 ≥120 g/L）</li>
          <li>🍋 <strong>白酒代表</strong>：干型 Furmint（礦物，高酸）</li>
          <li>🐂 <strong>混釀紅酒傳奇</strong>：Egri Bikavér（官方核准 13 品種，Classicus／Superior 分級）</li>
          <li>🏆 <strong>單一品種頂級紅酒</strong>：Villányi Franc（100% Cabernet Franc，官方認證）</li>
          <li>🍾 <strong>氣泡酒</strong>：Pezsgő（Etyek-Buda，1882 年 Törley 開創的傳統）</li>
        </ul>
      </div>
    </div>`
  },
  {
    component: 'TokajiAszuLevelsSlide',
    title: '👑 Tokaji 貴腐甜酒分級互動詳解',
    description: '點選 3 / 5 / 6 Puttonyos 與 Eszencia，查看殘糖規範、釀造、風味、餐搭與代表酒莊'
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
            question: '「Szamorodni Száraz」（乾型薩瑪羅尼）的風格最類似哪種其他世界名酒？',
            options: ['A. 法國 Sauternes', 'B. 德國 Trockenbeerenauslese（TBA）', 'C. 西班牙 Fino Sherry', 'D. 義大利 Moscato d\'Asti'],
            correct: 2,
            explanation: '干型 Szamorodni（Száraz Szamorodni）在橡木桶中進行氧化性陳年，接觸空氣，發展出榛子、蜂蠟、杏仁、橙皮等複雜的氧化香氣，風格上非常接近西班牙的 Fino Sherry（也是在空氣接觸下陳年的干型強化酒）。這種氧化風格與甜型托卡伊截然不同，也與其他甜酒（Sauternes、TBA）完全不同。'
          },
          {
            type: 'single',
            question: 'Egri Bikavér 的「Superior」等級與「Classicus」等級相比，最主要的規定差異是什麼？',
            options: ['A. Superior 只能使用 Kadarka 單一品種', 'B. Superior 需要至少 5 種品種混釀（Classicus 為 4 種），且須通過更嚴格的盲品評審', 'C. Superior 完全禁止使用 Kékfrankos', 'D. Superior 只能在 Szekszárd 產區生產'],
            correct: 1,
            explanation: 'Egri Bikavér 的官方核准品種清單共 13 種，Kékfrankos 始終是法定核心品種。Classicus 等級要求至少混合 4 種品種（Kékfrankos 佔 30-65%），而 Superior／Grand Superior 等級要求至少混合 5 種品種（Kékfrankos 佔 30-50%），且必須通過埃格爾酒莊協會組織的盲品評審才能獲得標示資格，品質門檻明顯更高。'
          },
          {
            type: 'single',
            question: '匈牙利哪種酒款是唯一擁有專屬「單一品種官方認證品牌」的紅酒？',
            options: ['A. Egri Bikavér（埃格爾公牛血）', 'B. Tokaji Furmint（托卡伊弗爾明特）', 'C. Villányi Franc（維拉尼弗朗克）', 'D. Szekszárdi Bikavér（塞克薩德公牛血）'],
            correct: 2,
            explanation: 'Villányi Franc 是匈牙利唯一擁有專屬品牌認證的單一品種紅酒，2014 年由維拉尼酒農協會正式建立規範：規定必須為 100% Cabernet Franc、最高產量 35 hl/ha、橡木桶與瓶中各陳年至少 1 年，並須通過區域感官盲品小組評審。Egri Bikavér 與 Szekszárdi Bikavér 則都是「多品種混釀」規則，並非單一品種認證。'
          },
          {
            type: 'single',
            question: '匈牙利的氣泡酒（Pezsgő）傳統與哪個歷史事件最直接相關？',
            options: ['A. 1882 年 József Törley 在 Budafok 開設酒廠，引入香檳式釀造技術', 'B. 1737 年查理六世頒布的葡萄園分級法令', 'C. 2013 年的 Aszú 殘糖新法規', 'D. 2002 年托卡伊列入 UNESCO 世界文化遺產'],
            correct: 0,
            explanation: '1882 年，曾在法國香檳區工作過的 József Törley 在布達佩斯南郊的 Budafok（今 Etyek-Buda 產區範圍內）開設酒廠，將香檳式釀造技術引入匈牙利，開啟了本地氣泡酒工業。一戰前，匈牙利氣泡酒產量一度僅次於法國，是歐洲重要的氣泡酒出口國之一，這段歷史奠定了 Etyek-Buda 至今作為「匈牙利氣泡酒心臟地帶」的地位。'
          }
        ]
      }
    }
  }
]
