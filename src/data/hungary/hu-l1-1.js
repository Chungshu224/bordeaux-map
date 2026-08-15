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
          <li>匈牙利葡萄酒從羅馬時期到現代的完整歷史脈絡</li>
          <li>托卡伊被列為世界遺產的歷史意義</li>
          <li>共產時期對葡萄酒業的影響與現代復興</li>
          <li>匈牙利在全球葡萄酒版圖的獨特地位與文化</li>
        </ul>
      </div>
    </div>`
  },
  {
    title: '起源與黃金時代：從羅馬到路易十四',
    highlights: [
      { id: 1, icon: '🏛️', title: '羅馬潘諾尼亞（約西元 100 年）', content: '羅馬人征服潘諾尼亞（Pannonia）後引入系統化葡萄栽培技術，巴拉頓湖周邊成為重要產酒中心' },
      { id: 2, icon: '⚔️', title: '鄂圖曼占領（1541–1686）', content: '雖然伊斯蘭教義禁酒，但托卡伊當時多屬半自治的特蘭西凡尼亞公國管轄，葡萄酒生產與貿易得以持續發展' },
      { id: 3, icon: '🍯', title: '貴腐甜酒的最早紀錄（1630 年）', content: '喀爾文教派牧師 Szepsi Laczkó Máté 於 1631 年為特蘭西凡尼亞公爵夫人釀出第一批有明確文獻記載的 Aszú，奠定至今沿用的釀造工序' },
      { id: 4, icon: '👑', title: '拉科奇與路易十四（1703–1711）', content: '匈牙利公爵拉科奇二世（Rákóczi II）將托卡伊阿蘇作為外交禮品送給法國宮廷，路易十四留下「王者之酒，葡萄酒之王」的名言' }
    ],
    content: `<div class="history-section">
      <p class="history-intro">匈牙利的釀酒史可追溯至羅馬帝國的潘諾尼亞行省，而托卡伊在 17 至 18 世紀迎來了它最輝煌的黃金時代——<span class="intro-highlight">從教會修士的葡萄園到歐洲宮廷的外交珍品，托卡伊阿蘇成為全球最早建立官方分級制度的葡萄酒</span></p>
    </div>
    <div class="timeline-container">
      <div class="timeline-item">
        <div class="timeline-badge ancient">約 100 AD</div>
        <div class="timeline-content"><strong>🏛️ 羅馬潘諾尼亞</strong><p>羅馬人在潘諾尼亞行省建立系統化葡萄園，巴拉頓湖周邊發展為釀酒重鎮，奠定匈牙利釀酒傳統的最早基礎</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1541–1686</div>
        <div class="timeline-content"><strong>⚔️ 鄂圖曼占領時期</strong><p>雖然主要國土受鄂圖曼統治，托卡伊所在的上匈牙利地區多屬特蘭西凡尼亞公國管轄，葡萄園得以延續發展</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge ancient">1630s</div>
        <div class="timeline-content"><strong>🍯 史上最早的貴腐甜酒紀錄</strong><p>牧師 Szepsi Laczkó Máté 於 1631 年釀出文獻可考的第一批 Aszú，比德國和法國的貴腐甜酒紀錄早了數十年</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge medieval">1703–1711</div>
        <div class="timeline-content"><strong>👑 拉科奇外交獻禮</strong><p>拉科奇二世將托卡伊阿蘇作為外交禮物送往法國宮廷，路易十四品飲後讚譽有加，托卡伊自此聲名遠播歐洲貴族圈</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge modern">1737</div>
        <div class="timeline-content"><strong>📜 全球最早葡萄園分級制度</strong><p>哈布斯堡皇帝查理六世頒布法令，將托卡伊葡萄園依品質正式分級，比波爾多 1855 年分級早了 118 年</p></div>
      </div>
      <div class="timeline-item">
        <div class="timeline-badge austria">1870s</div>
        <div class="timeline-content"><strong>🐛 根瘤蚜蟲危機</strong><p>葡萄根瘤蚜蟲（Phylloxera）自 1870 年代起從南部蔓延全國，包含托卡伊在內的丘陵葡萄園幾乎全數被毀，1881 年起以嫁接抗蚜蟲砧木展開重建，多瑙河沙質平原因蟲害無法在沙地存活而倖免，意外催生了日後的多瑙河產區群</p></div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-box"><div class="stat-number">2000 年+</div><div class="stat-label">釀酒歷史</div></div>
      <div class="stat-box"><div class="stat-number">1631 年</div><div class="stat-label">最早文獻記載的 Aszú</div></div>
      <div class="stat-box"><div class="stat-number">1737 年</div><div class="stat-label">全球最早葡萄園分級</div></div>
      <div class="stat-box"><div class="stat-number">1870s</div><div class="stat-label">根瘤蚜蟲危機爆發</div></div>
    </div>`
  },
  {
    component: 'HungaryRegionMapSlide',
    title: '匈牙利葡萄酒產區總覽',
    componentProps: {
      mapRegion: 'all',
      description: '匈牙利 22 個法定葡萄酒產區（Borvidék）分布於喀爾巴阡盆地，形成 6 大區域群：托卡伊、北匈牙利、北特蘭斯多瑙比亞、巴拉頓湖、潘農、多瑙河',
    },
  },
  {
    title: '匈牙利葡萄酒文化：公牛血傳說與酒窖村',
    highlights: [
      { id: 1, icon: '🐂', title: '公牛血的傳說（1552 年）', content: '相傳 1552 年埃格爾城被鄂圖曼軍圍攻時，守軍飲下紅酒後鬍鬚染紅，鄂圖曼士兵誤以為他們喝了「公牛的血」而心生畏懼——這也是 Egri Bikavér 名稱的由來傳說' },
      { id: 2, icon: '📚', title: '傳說 vs. 史實', content: '史學界普遍認為此傳說由 19 世紀小說家 Gárdonyi Géza 所推廣，當時匈牙利仍以白酒為主；「Bikavér」一詞最早的文字紀錄出現於 19 世紀初' },
      { id: 3, icon: '🏘️', title: '酒窖村文化（Pincesor）', content: '埃格爾「美人谷」（Szépasszony-völgy）自 18 世紀中葉起在火山岩壁上開鑿酒窖，如今仍有約 200 座酒窖沿谷分布，是匈牙利葡萄酒社交文化的縮影' },
      { id: 4, icon: '🍇', title: '原生品種的驕傲', content: 'Furmint、Hárslevelű、Kékfrankos、Kadarka 等原生品種是匈牙利葡萄酒文化認同的核心，許多家族酒莊世代傳承種植技藝' }
    ],
    content: `<div class="culture-content">
      <p>除了歷史悠久的釀酒傳統，匈牙利葡萄酒文化中也流傳著許多膾炙人口的故事，其中最著名的莫過於埃格爾「公牛血」（Bikavér）的傳說。</p>
      <div class="key-estates">
        <h4>🐂 公牛血傳說的故事</h4>
        <div class="estates-list">
          <div class="estate-item">
            <strong>1552 年埃格爾圍城戰</strong> — 相傳城堡守將 Dobó István 命人將酒窖中的紅酒送上城牆為士兵打氣，士兵飲酒後鬍鬚染紅，繼續奮戰
          </div>
          <div class="estate-item">
            <strong>鄂圖曼軍的誤解</strong> — 圍城的鄂圖曼士兵見狀，以為守軍飲下「公牛之血」獲得神力，因而軍心動搖、退兵
          </div>
          <div class="estate-item">
            <strong>19 世紀的文學推廣</strong> — 這段故事經小說家 Gárdonyi Géza 的著作《Egri csillagok》廣為流傳，但歷史學者指出當時匈牙利以白酒為主，紅酒尚未普及，傳說的真實性存疑
          </div>
          <div class="estate-item">
            <strong>美人谷酒窖村</strong> — 埃格爾城郊的 Szépasszony-völgy 自 1774 年起開放居民鑿建酒窖，1781 年已有 32 座酒窖，如今發展為約 200 座酒窖群聚的品飲勝地
          </div>
        </div>
      </div>
    </div>`
  },
  {
    title: '共產時期的破壞與現代復興',
    highlights: [
      { id: 1, icon: '🏭', title: '集體農場時期', content: '1948 年後，私人酒莊被收歸國有，採量產模式種植在低地平原、便於機械採收，喪失風土特性與精品文化' },
      { id: 2, icon: '🔓', title: '1989 年民主化', content: '匈牙利成為東歐最早實現和平轉型的國家之一，葡萄酒業隨即開放外資與私有化' },
      { id: 3, icon: '🌍', title: '外資帶入現代化', content: '法國 AXA（收購 Disznókő）、西班牙 Vega Sicilia（Oremus 參股）引入現代釀酒技術，帶動精品酒莊風潮興起' },
      { id: 4, icon: '🌱', title: '本土品種的回歸', content: '共產垮台初期許多紅酒莊一度轉種波爾多品種，近年釀酒師重新聚焦 Kékfrankos 等本土品種，帶動本土品種的復興浪潮' }
    ],
    content: `<div class="revival-content">
      <p>匈牙利的葡萄酒復興是中東歐葡萄酒史上最令人矚目的故事之一。共產時期（1948–1989）國有化的集體農場以量產為目標，將優質山坡地葡萄園改種於適合機械採收的低窪平原，托卡伊等名酒淪為批量外銷蘇聯的廉價商品，品質大幅下滑，直到 1990 年代初，外國投資者敏銳地看出匈牙利豐富土地資源和歷史底蘊的潛力，才展開重建。</p>
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
      <div class="note-box">
        <p>值得注意的是，1989 年後許多紅酒產區的釀酒師一度追隨國際潮流，大量改種 Cabernet Sauvignon、Merlot 等波爾多品種；直到近十幾年，Kékfrankos 才重新找回自己的champion 釀酒師，成為匈牙利紅酒身分認同的核心品種。</p>
      </div>
    </div>`
  },
  {
    title: '匈牙利葡萄酒的全球地位',
    highlights: [
      { id: 1, icon: '📜', title: '最早的葡萄園分級制度', content: '1737 年，匈牙利首創葡萄園官方分級，比波爾多 1855 年早了 118 年' },
      { id: 2, icon: '🌿', title: '獨特的原生品種', content: 'Furmint、Kékfrankos 等在世界其他地方幾乎無法找到，提供獨一無二的風味體驗' },
      { id: 3, icon: '🏆', title: '國際競賽表現亮眼', content: '匈牙利葡萄酒近年在 Decanter World Wine Awards 等國際賽事屢創佳績，2023 年更創下該賽事匈牙利獲獎數的歷史新高' },
      { id: 4, icon: '💰', title: '性價比極高', content: '相比法國、義大利，匈牙利頂級葡萄酒往往以一半不到的價格提供同等甚至更高的享受' }
    ],
    content: `<div class="global-position">
      <p>匈牙利葡萄酒在現代酒評界的評價持續提升。《Wine Spectator》、《Decanter》、Jancis Robinson 等主流酒評媒體越來越關注匈牙利，尤其是乾型 Furmint 白酒近十年的崛起備受矚目，而托卡伊 Aszú 更是所有葡萄酒學習者必嘗的經典。</p>
      <div class="fun-facts">
        <h4>🎯 你知道嗎？</h4>
        <div class="fact-grid">
          <div class="fact-item">
            <span class="fact-icon">🍷</span>
            <p>匈牙利擁有數十種本土原生葡萄品種，是歐洲原生品種多樣性最豐富的國家之一</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🌋</span>
            <p>巴拉頓湖區的<strong>玄武岩火山土壤</strong>賦予白酒獨特礦物感，在全球葡萄酒地質中屬罕見</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">🏆</span>
            <p>2023 年 Decanter World Wine Awards：匈牙利酒款共獲得 146 面獎牌，創下該國參賽以來的歷史新高</p>
          </div>
          <div class="fact-item">
            <span class="fact-icon">📚</span>
            <p>全球最昂貴甜酒之一的 Tokaji Eszencia（精華），是唯一用純貴腐果汁緩慢發酵成的傳奇酒款</p>
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
          question: '托卡伊（Tokaj）產區是哪一年被列為 UNESCO 世界文化遺產？',
          options: ['A. 1995 年', 'B. 2002 年', 'C. 2010 年', 'D. 1989 年'],
          correct: 1,
          explanation: '托卡伊葡萄酒歷史文化景觀（Tokaj Wine Region Historic Cultural Landscape）於 2002 年被列入 UNESCO 世界文化遺產，這是匈牙利唯一以葡萄酒文化為主題的世遺，也是全球最古老的法定葡萄酒產區之一。'
        },
        {
          type: 'single',
          question: '路易十四所說的「王者之酒，葡萄酒之王（Wine of Kings, King of Wines）」指的是哪種酒？',
          options: ['A. 法國香檳', 'B. 托卡伊阿蘇（Tokaji Aszú）', 'C. 波爾多紅酒', 'D. 布根地白酒'],
          correct: 1,
          explanation: '17 世紀時，匈牙利公爵拉科奇二世將 Tokaji Aszú 作為外交禮品送給法國宮廷，法王路易十四品後留下這句名言。托卡伊阿蘇至今仍是匈牙利最具代表性也最昂貴的葡萄酒。'
        },
        {
          type: 'single',
          question: '下列哪個外國公司投資了匈牙利 Disznókő 酒莊，將現代精品釀酒理念引入托卡伊？',
          options: ['A. 法國 LVMH', 'B. 西班牙 Torres', 'C. 法國 AXA Millésimes', 'D. 義大利 Antinori'],
          correct: 2,
          explanation: 'AXA Millésimes 是法國 AXA 保險集團的葡萄酒投資部門，同時擁有波爾多的碧尚女爵（Pichon Baron）等名莊。1992 年他們收購了托卡伊的 Disznókő，帶入現代精品釀酒技術和管理理念，是匈牙利現代葡萄酒復興的重要推手。'
        },
        {
          type: 'single',
          question: '匈牙利首次建立官方葡萄園分級制度是在哪一年，比波爾多 1855 年分級早多少年？',
          options: ['A. 1700 年，早 155 年', 'B. 1737 年，早 118 年', 'C. 1800 年，早 55 年', 'D. 1920 年，晚 65 年'],
          correct: 1,
          explanation: '1737 年，哈布斯堡王朝皇帝查理六世（Charles VI）頒布法令，將托卡伊的葡萄園正式分為三個等級，這是世界上最早的官方葡萄園分級制度之一，比波爾多著名的 1855 年梅多克分級早了整整 118 年。'
        },
        {
          type: 'single',
          question: '關於「Egri Bikavér（埃格爾公牛血）」名稱由來的傳說，以下敘述何者正確？',
          options: ['A. 傳說源自 1552 年埃格爾圍城戰，士兵飲紅酒後鬍鬚染紅，鄂圖曼軍誤以為喝了公牛之血', 'B. Bikavér 一詞最早出現於羅馬時期的拉丁文獻中', 'C. 這個傳說已被考古證據完全證實為史實', 'D. 公牛血是指釀造時真的加入了牛血作為澄清劑'],
          correct: 0,
          explanation: '相傳 1552 年埃格爾城遭鄂圖曼軍圍攻，守軍飲下紅酒後鬍鬚染紅、士氣大振，圍城軍誤以為他們喝了公牛之血而心生畏懼。不過歷史學者指出，這段故事主要是 19 世紀小說家 Gárdonyi Géza 透過小說《Egri csillagok》推廣，而「Bikavér」一詞的文字紀錄最早僅能追溯至 19 世紀初，傳說的真實性尚有爭議。'
        },
        {
          type: 'single',
          question: '共產時期（1948–1989）匈牙利葡萄酒業受到什麼樣的影響？',
          options: ['A. 品質大幅提升，出口至西歐高價市場', 'B. 私人酒莊被國有化為集體農場，以量產取代品質，優質山坡園多改種平地便於機械採收', 'C. 完全禁止葡萄酒生產，改種穀物', 'D. 只有托卡伊產區不受影響，其餘產區停產'],
          correct: 1,
          explanation: '1948 年後，共產政權將私人酒莊收歸國有，成立集體農場並以量產為導向，許多原本種植於優質山坡地的葡萄園被改種於適合機械化採收的低窪平原，產出的葡萄酒大量批發外銷至蘇聯市場，品質嚴重下滑，直到 1989 年民主化與 1990 年代私有化後才逐步恢復。'
        }
        ]
      }
    }
  }
]
