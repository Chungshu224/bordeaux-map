/**
 * HU L1-1 認識匈牙利葡萄酒：歷史、文化與全球地位
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '認識匈牙利葡萄酒',
    subtitle: '歷史、文化與全球地位',
    icon: '🇭🇺',
    background: 'linear-gradient(135deg, #c8102e 0%, #477050 50%, #006400 100%)'
  },
  {
    title: '為什麼要學匈牙利葡萄酒？',
    highlights: [
      { id: 1, icon: '🏆', title: '世界遺產產區', content: '托卡伊（Tokaj）是全球最古老的法定葡萄酒產區之一，2002 年列入 UNESCO 世界文化遺產' },
      { id: 2, icon: '🗺️', title: '22 個法定產區', content: '匈牙利以其 9.3 萬公頃的葡萄園劃分 22 個法定產區，密度為歐洲最高之一' },
      { id: 3, icon: '🍾', title: '復興中的葡萄酒王國', content: '1990 年代以後私有化改革，匈牙利葡萄酒重回世界舞台，品質突飛猛進' },
      { id: 4, icon: '🌏', title: '獨特原生品種', content: 'Furmint、Kékfrankos、Kadarka 等原生品種，提供全球獨一無二的風味體驗' }
    ],
    content: `<div class="content-overview">
      <p class="lead-text">匈牙利葡萄酒有著超過 2,000 年的歷史，托卡伊阿蘇（Tokaji Aszú）更被稱為「葡萄酒之王、王者之酒」（Wine of Kings, King of Wines）。然而，20 世紀共產主義時期的集體農場政策嚴重破壞了品質傳統，直到 1990 年代私有化後，一批有抱負的釀酒師才帶領匈牙利葡萄酒重返世界舞台。</p>
      <div class="highlight-box">
        <h4>📖 學習本課程你將了解：</h4>
        <ul>
          <li>匈牙利葡萄酒的 2,000 年歷史脈絡</li>
          <li>托卡伊被列為世界遺產的歷史意義</li>
          <li>共產時期對葡萄酒業的影響與現代復興</li>
          <li>匈牙利在全球葡萄酒版圖的獨特地位</li>
        </ul>
      </div>
    </div>`
  },
  {
    title: '2,000 年的葡萄酒歷史',
    highlights: [
      { id: 1, icon: '🏛️', title: '羅馬時期（100 BC–400 AD）', content: '羅馬人在潘諾尼亞（Pannonia）建立系統化葡萄園，奠定匈牙利釀酒傳統' },
      { id: 2, icon: '⚔️', title: '鄂圖曼占領（1541–1686）', content: '雖然伊斯蘭教禁酒，但貿易葡萄酒生產未完全停止，托卡伊地區持續發展' },
      { id: 3, icon: '👑', title: '17–18 世紀黃金時期', content: '路易十四稱托卡伊為「王者之酒」，歐洲貴族趨之若鶩，法國、英國皇室均為愛好者' },
      { id: 4, icon: '🔴', title: '共產時期衰落（1948–1989）', content: '集體農場以量代質，托卡伊名酒淪為批量生產的廉價商品，品質大幅下滑' }
    ],
    content: `<div class="history-content">
      <p>匈牙利葡萄酒最輝煌的時代是 17 至 18 世紀。1703 年，匈牙利王公拉科奇二世（Francis II Rákóczi）將 Tokaji Aszú 作為外交禮品送給法國宮廷，路易十四品飲後宣稱這是「王者之酒，葡萄酒之王」（Wine of Kings, King of Wines），此句名言沿用至今。</p>
      <div class="timeline-grid">
        <div class="timeline-item">
          <div class="timeline-year">1630s</div>
          <div class="timeline-text">史上最早記錄的貴腐甜酒釀造，比德國和法國早了數十年</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1700s</div>
          <div class="timeline-text">匈牙利首次建立葡萄園分級制度（1737 年），比波爾多 1855 年分級早 118 年</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1948</div>
          <div class="timeline-text">共產黨推行集體農場，個人酒莊被沒收，以量代質政策破壞品質傳統</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1990s</div>
          <div class="timeline-text">私有化後外國資本湧入（如法國 AXA、西班牙 Vega Sicilia），現代化釀酒復興開始</div>
        </div>
      </div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '匈牙利葡萄酒產區總覽',
    componentProps: {
      mapRegion: 'all',
      description: '匈牙利 22 個法定葡萄酒產區（Borvidék）分布於喀爾巴阡盆地，形成 6 大區域群：托卡伊、北部高地、北特蘭斯多瑙比亞、巴拉頓湖、帕農尼亞、多瑙河',
    },
  },,

  {
    title: '共產時期的破壞與現代復興',
    highlights: [
      { id: 1, icon: '🏭', title: '集體農場時期', content: '1948 年後，私人酒莊被收歸國有，採量產模式，喪失風土特性與精品文化' },
      { id: 2, icon: '🔓', title: '1989 年民主化', content: '匈牙利成為東歐最早實現和平轉型的國家，葡萄酒業隨即開放外資' },
      { id: 3, icon: '🌍', title: '外資帶入現代化', content: '法國 AXA（收購 Disznókő）、西班牙 Vega Sicilia（Royal Tokaji 參股）引入現代釀酒技術' },
      { id: 4, icon: '🌱', title: '本土釀酒師崛起', content: '第二代本土釀酒師如 István Szepsy、Attila Homonna 等以精品路線重振匈牙利聲譽' }
    ],
    content: `<div class="revival-content">
      <p>匈牙利的葡萄酒復興是中東歐葡萄酒史上最令人矚目的故事之一。1990 年代初，外國投資者敏銳地看出匈牙利豐富土地資源和歷史底蘊的潛力。</p>
      <div class="key-estates">
        <h4>🏰 改革先行者酒莊</h4>
        <div class="estates-list">
          <div class="estate-item">
            <strong>Royal Tokaji</strong> — 1990 年由英國酒評家 Hugh Johnson 聯合創辦，是匈牙利現代復興的標誌性酒莊
          </div>
          <div class="estate-item">
            <strong>Disznókő</strong> — 法國 AXA Millésimes（同擁有 Pichon-Baron）1992 年收購，帶入法國精品釀酒理念
          </div>
          <div class="estate-item">
            <strong>Oremus</strong> — 西班牙 Vega Sicilia 參股，將頂尖精品酒莊管理方式引入托卡伊
          </div>
          <div class="estate-item">
            <strong>Szepsy</strong> — 匈牙利本土最受崇敬的釀酒師 István Szepsy，以乾型 Furmint 引領白酒復興
          </div>
        </div>
      </div>
    </div>`
  },
  {
    title: '匈牙利葡萄酒的全球地位',
    highlights: [
      { id: 1, icon: '📜', title: '最早的葡萄園分級制度', content: '1737 年，匈牙利首創葡萄園官方分級，比波爾多 1855 年早了 118 年' },
      { id: 2, icon: '🌿', title: '獨特的原生品種', content: 'Furmint、Kékfrankos 等在世界其他地方幾乎無法找到，提供獨一無二的風味體驗' },
      { id: 3, icon: '🏆', title: '國際競賽常勝軍', content: '近年在 Berliner Wine Trophy、Decanter 等國際賽事獲得大量獎牌' },
      { id: 4, icon: '💰', title: '性價比極高', content: '相比法國、義大利，匈牙利頂級葡萄酒往往以一半不到的價格提供同等甚至更高的享受' }
    ],
    content: `<div class="global-position">
      <p>匈牙利葡萄酒在現代酒評界的評價持續提升。《Wine Spectator》、《Decanter》等主流媒體越來越關注匈牙利，而托卡伊 Aszú 更是所有葡萄酒學習者必嘗的經典。</p>
      <div class="fun-facts">
        <h4>🎯 你知道嗎？</h4>
        <div class="fact-grid">
          <div class="fact-item">
            <span class="fact-icon">🍷</span>
            <p>匈牙利擁有全球<strong>第 5 多</strong>的本土原生葡萄品種（超過 60 種）</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🌋</span>
            <p>巴拉頓湖區的<strong>玄武岩火山土壤</strong>賦予白酒獨特礦物感，在全球葡萄酒地質中屬罕見</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🏆</span>
            <p>2026 年柏林葡萄酒獎：匈牙利以 178 枚獎牌位居全球<strong>第 3</strong>（僅次義大利、西班牙）</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">📚</span>
            <p>全球最昂貴甜酒之一的 Tokaji Eszencia（精華），是唯一用純貴腐果汁緩慢發酵成的傳奇酒款</p>
          </div>
        </div>
      </div>
    </div>`
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
          text: '托卡伊（Tokaj）產區是哪一年被列為 UNESCO 世界文化遺產？',
          options: ['A. 1995 年', 'B. 2002 年', 'C. 2010 年', 'D. 1989 年'],
          correct: 1,
          explanation: '托卡伊葡萄酒歷史文化景觀（Tokaj Wine Region Historic Cultural Landscape）於 2002 年被列入 UNESCO 世界文化遺產，這是匈牙利唯一以葡萄酒文化為主題的世遺，也是全球最古老的法定葡萄酒產區之一。'
        },
        {
          type: 'single',
          text: '路易十四所說的「王者之酒，葡萄酒之王（Wine of Kings, King of Wines）」指的是哪種酒？',
          options: ['A. 法國香檳', 'B. 托卡伊阿蘇（Tokaji Aszú）', 'C. 波爾多紅酒', 'D. 布根地白酒'],
          correct: 1,
          explanation: '17 世紀時，匈牙利王公拉科奇二世將 Tokaji Aszú 作為外交禮品送給法國宮廷，法王路易十四品後留下這句名言。托卡伊阿蘇至今仍是匈牙利最具代表性也最昂貴的葡萄酒。'
        },
        {
          type: 'single',
          text: '下列哪個外國公司投資了匈牙利 Disznókő 酒莊，將現代精品釀酒理念引入托卡伊？',
          options: ['A. 法國 LVMH', 'B. 西班牙 Torres', 'C. 法國 AXA Millésimes', 'D. 義大利 Antinori'],
          correct: 2,
          explanation: 'AXA Millésimes 是法國 AXA 保險集團的葡萄酒投資部門，同時擁有波爾多的碧尚女爵（Pichon Baron）等名莊。1992 年他們收購了托卡伊的 Disznókő，帶入現代精品釀酒技術和管理理念，是匈牙利現代葡萄酒復興的重要推手。'
        },
        {
          type: 'single',
          text: '匈牙利首次建立官方葡萄園分級制度是在哪一年，比波爾多 1855 年分級早多少年？',
          options: ['A. 1700 年，早 155 年', 'B. 1737 年，早 118 年', 'C. 1800 年，早 55 年', 'D. 1920 年，晚 65 年'],
          correct: 1,
          explanation: '1737 年，哈布斯堡王朝皇帝查理六世（Charles VI）頒布法令，將托卡伊的葡萄園正式分為三個等級，這是世界上最早的官方葡萄園分級制度之一，比波爾多著名的 1855 年梅多克分級早了整整 118 年。'
        }
        ]
      }
    }
  }
]
