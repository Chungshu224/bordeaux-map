/**
 * HU L2-1 托卡伊頂級酒莊解析：外資先驅、在地匠人與單一葡萄園傳奇
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '托卡伊頂級酒莊解析',
    subtitle: '現代復興的推手：外資先驅、匠人家族與單一葡萄園的傳奇',
    icon: '🏰',
    background: 'linear-gradient(135deg, #d4a017 0%, #6b4226 100%)'
  },

  {
    title: '托卡伊的現代復興背景',
    highlights: [
      { id: 1, icon: '📅', title: '共產主義時代的集體化（1945–1989）', content: '共產政權下葡萄園合併為國有集體農場，以量為先、忽視品質，Aszú 傳統幾近失傳' },
      { id: 2, icon: '🌅', title: '1989 年後的外資浪潮', content: '政治開放後外國資本大舉進入托卡伊——英國酒評人 Hugh Johnson、西班牙 Vega Sicilia、法國 AXA Millésimes 與 CFGVT 集團相繼買地，帶入現代釀酒技術' },
      { id: 3, icon: '🌾', title: '在地匠人的重生', content: 'István Szepsy 等本土釀酒世家在共產時代僅能保留幾公頃私地，1990 年後逐步贖回祖產，成為托卡伊品質革命的核心人物' },
      { id: 4, icon: '⚖️', title: '干型 Furmint 的新話語', content: '2000 年代起氣候暖化與市場需求並進，頂級酒莊紛紛推出干型 Furmint，打開 Fine Wine 高端市場' }
    ],
    content: `<div class="tokaj-revival">
      <p class="lead-text">托卡伊的現代史是一部從廢墟重建傳奇的史詩——1989 年後短短三十餘年，外資先驅與在地匠人攜手，將這片被忽視的地區重新推上世界頂級甜酒舞台。</p>
      <div class="timeline-box">
        <h4>🗓️ 關鍵時間軸</h4>
        <div class="timeline-items">
          <div class="tl-item"><span class="tl-year">1990</span><span>Royal Tokaji 由 Hugh Johnson 等人於 Mád 村創立，第一批現代 Aszú 誕生</span></div>
          <div class="tl-item"><span class="tl-year">1992</span><span>AXA Millésimes 收購 Disznókő；Château Pajzos 與 Château Megyer 登記成立</span></div>
          <div class="tl-item"><span class="tl-year">1993</span><span>Vega Sicilia 收購並更名 Oremus；Disznókő 首個現代年份問世</span></div>
          <div class="tl-item"><span class="tl-year">1998</span><span>Pascal Demko 獲贈一塊葡萄園作為生日禮物，日後成為 Holdvölgy 酒莊起點</span></div>
          <div class="tl-item"><span class="tl-year">2000</span><span>Kékessy 家族創立 Patricius 酒莊</span></div>
          <div class="tl-item"><span class="tl-year">2002</span><span>Béres 家族由製藥業跨足葡萄酒，成立 Béres 酒莊</span></div>
          <div class="tl-item"><span class="tl-year">2004</span><span>匈牙利加入歐盟，法規現代化</span></div>
          <div class="tl-item"><span class="tl-year">2005</span><span>István Szepsy 創立 Mádi Kör 產區自律規範，訂立更嚴苛的品質標準</span></div>
          <div class="tl-item"><span class="tl-year">2013</span><span>Aszú 新法規：改以殘糖量（≥120 g/L）定義，不再要求標示 Puttonyos 數字</span></div>
          <div class="tl-item"><span class="tl-year">2016</span><span>國營老字號 Tokaj Kereskedőház 更名為 Grand Tokaj</span></div>
        </div>
      </div>
    </div>`
  },

  {
    title: '三大外資先驅酒莊',
    highlights: [
      { id: 1, icon: '👑', title: 'Royal Tokaji（1990，英國資本）', content: 'Hugh Johnson、Ben Howkins 與丹麥裔釀酒師 Peter Vinding-Diers 於 Mád 村創立，首批現代托卡伊名莊，持有特級園 Mézes Mály 部分產權' },
      { id: 2, icon: '🇪🇸', title: 'Oremus（1993，西班牙資本）', content: 'Ribera del Duero 傳奇名莊 Vega Sicilia 的 Álvarez 家族收購並更名；干型 Furmint「Mandolás」是現代托卡伊干白代表作' },
      { id: 3, icon: '🇫🇷', title: 'Disznókő（1992，法國資本）', content: '波雅克名莊 Pichon Baron、索甸名莊 Suduiraut 同屬 AXA Millésimes 集團；葡萄園早於 1413 年即有文獻記載，1732 年列為一級園' },
      { id: 4, icon: '🌿', title: '外資帶來的關鍵改變', content: '現代釀酒設備、嚴格分選標準與國際行銷網絡，讓托卡伊甜酒重新進入倫敦、紐約等頂級酒單' }
    ],
    content: `<div class="estates-detail">
      <div class="estate-card">
        <h4>🏅 Royal Tokaji — 現代復興的第一槍</h4>
        <table class="estate-table">
          <tr><td>成立</td><td>1990 年，Mád 村（英國酒評人 Hugh Johnson 領軍創立）</td></tr>
          <tr><td>葡萄園</td><td>持有特級園 Mézes Mály（22 公頃中的 11 公頃）與一級園 Nyulászó</td></tr>
          <tr><td>旗艦酒</td><td>Nyulászó 一級園 Aszú、Mézes Mály 特級園 Aszú</td></tr>
          <tr><td>風格</td><td>豐潤甜美，金黃色澤，蜂蜜＋杏桃＋橙皮蜜餞</td></tr>
          <tr><td>歷史地位</td><td>共產垮台後第一家外資酒莊，開啟托卡伊現代復興序幕</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🍷 Oremus — 干型先驅</h4>
        <table class="estate-table">
          <tr><td>母公司</td><td>Vega Sicilia（西班牙 Ribera del Duero 頂級名莊，Álvarez 家族）</td></tr>
          <tr><td>淵源</td><td>Oremus 之名源自 1630 年代 Szepsi Laczkó Máté 最早記錄 Tokaji Aszú 釀法的傳說</td></tr>
          <tr><td>旗艦酒</td><td>Mandolás（單一葡萄園干型 Furmint，僅種 Furmint，首個年份 2001）</td></tr>
          <tr><td>特色</td><td>結合 Ribera del Duero 的精確釀造工藝與托卡伊風土的酸度骨架</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>💎 Disznókő — 礦石與緊緻酸度</h4>
        <table class="estate-table">
          <tr><td>母公司</td><td>AXA Millésimes（法國保險集團，1992 年收購）</td></tr>
          <tr><td>集團旗下</td><td>波雅克 Pichon Baron、索甸 Suduiraut、波特 Quinta do Noval</td></tr>
          <tr><td>葡萄園歷史</td><td>1413 年文獻已有記載，1732 年即列為一級園；2002 年隨產區列入 UNESCO 世界遺產</td></tr>
          <tr><td>風格</td><td>礦石感突出、酸度緊緻，Aszú Eszencia 為鎮莊珍釀</td></tr>
        </table>
      </div>
    </div>`,
    quiz: {
      question: '下列哪家酒莊隸屬法國 AXA Millésimes 集團旗下？',
      options: ['A. Royal Tokaji', 'B. Oremus', 'C. Disznókő', 'D. Château Pajzos'],
      correct: 2,
      explanation: 'Disznókő 由法國保險集團 AXA Millésimes 於 1992 年收購，同集團在波爾多擁有 Pichon Baron（波雅克二級莊）與 Suduiraut（索甸一級莊），並持有波特酒名莊 Quinta do Noval。'
    }
  },

  {
    title: '在地匠人與家族酒莊崛起',
    highlights: [
      { id: 1, icon: '🎓', title: 'István Szepsy — 托卡伊教父', content: '家族釀酒史可溯至 1631 年（祖先 Szepsi Laczkó Máté 最早記錄 Aszú 釀法）；共產時代僅能私下保留 4 公頃地，1990 年後逐步擴展至 52 公頃，六成為一級園' },
      { id: 2, icon: '🏛️', title: 'Patricius — Kékessy 家族', content: '2000 年成立，自 1997 年起逐步購回祖傳一級園，68.5 公頃莊園含 6 塊歷史一級園，也以傳統法 Furmint 氣泡酒聞名' },
      { id: 3, icon: '🌙', title: 'Holdvölgy（月之谷）', content: '創辦人 Pascal Demko 1998 年獲贈一塊葡萄園作為生日禮物而入行，2006 年推出首個年份，如今 27 公頃莊園涵蓋 Mád 村全部 7 塊歷史特級園' },
      { id: 4, icon: '💊', title: 'Béres — 製藥世家的葡萄酒夢', content: '2002 年由原本經營製藥事業的 Béres 家族創立於 Erdőbénye，專注 Furmint 與 Hárslevelű，Aszú 6 Puttonyos 屢獲高分評價' }
    ],
    content: `<div class="artisan-estates">
      <p class="lead-text">除了外資集團，托卡伊復興的另一半故事來自本土匠人與新一代家族酒莊——他們或是贖回祖產，或是白手起家，共同重建了托卡伊的品質信譽。</p>
      <table class="estate-table">
        <thead><tr><th>酒莊</th><th>成立</th><th>背景</th><th>特色</th></tr></thead>
        <tbody>
          <tr><td>Szepsy</td><td>1990 年代重建（家族史溯至 1631）</td><td>在地釀酒世家</td><td>Szent Tamás 干型 Furmint，被 Jancis Robinson 譽為「東方的蒙哈榭」</td></tr>
          <tr><td>Patricius</td><td>2000</td><td>Kékessy 家族</td><td>68.5 公頃，6 塊歷史一級園，傳統法 Furmint 氣泡酒</td></tr>
          <tr><td>Holdvölgy</td><td>1998 年起步／2006 年首年份</td><td>Pascal Demko 個人創業</td><td>Mád 村全部 7 塊歷史特級園</td></tr>
          <tr><td>Béres</td><td>2002</td><td>製藥業轉投葡萄酒</td><td>Erdőbénye 產區，Furmint 與 Hárslevelű 為核心</td></tr>
        </tbody>
      </table>
    </div>`,
    quiz: {
      question: '哪家酒莊的莊園涵蓋了 Mád 村全部 7 塊歷史特級園？',
      options: ['A. Szepsy', 'B. Patricius', 'C. Holdvölgy', 'D. Béres'],
      correct: 2,
      explanation: 'Holdvölgy（月之谷）創辦人 Pascal Demko 自 1998 年一塊生日禮物葡萄園起步，逐步擴展至 27 公頃，如今莊園涵蓋 Mád 村全部 7 塊歷史特級園，是罕見以特級園密度取勝的精品酒莊。'
    }
  },

  {
    title: '法國資本與國家老字號',
    highlights: [
      { id: 1, icon: '🇫🇷', title: 'Château Pajzos（1992，法國資本）', content: '由法國投資集團 CFGVT（Jean-Louis Laborde 領軍，同時擁有波美侯 Château Clinet）成立，Pajzos 葡萄園位於 Bodrogolaszi，約 70 公頃' },
      { id: 2, icon: '🏰', title: 'Château Megyer — 姊妹品牌', content: '同樣於 1992 年登記成立，Megyer 葡萄園早於 1772 年即由皇家詔書列為一級園，兩品牌共用位於 Sárospatak 的 Rákóczi 酒窖' },
      { id: 3, icon: '💎', title: '1993 Esszencia 傳奇', content: 'Château Pajzos 1993 年份 Aszú-Eszencia 被部分酒評譽為「世紀之酒」，是法資酒莊技術實力的最佳證明' },
      { id: 4, icon: '🏛️', title: 'Grand Tokaj — 國家隊的轉型', content: '前身為 1948 年建立的國營酒莊，1993–2016 年稱 Tokaj Kereskedőház，2016 年更名 Grand Tokaj；坐落 Tolcsva，逾 54 公頃自有葡萄園，產量占全產區三成以上' }
    ],
    content: `<div class="corporate-estates">
      <div class="estate-card">
        <h4>🍷 Château Pajzos ＆ Château Megyer</h4>
        <table class="estate-table">
          <tr><td>母公司</td><td>CFGVT（法國投資集團，Jean-Louis Laborde 主導）</td></tr>
          <tr><td>定位分工</td><td>Pajzos 為頂級系列，Megyer 為親民入門系列</td></tr>
          <tr><td>釀酒風格</td><td>追求較清新、較少氧化的現代風格，與部分傳統氧化派酒莊形成對比</td></tr>
          <tr><td>代表作</td><td>1993 年份 Château Pajzos Aszú-Eszencia</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🏛️ Grand Tokaj — 產區的規模擔當</h4>
        <table class="estate-table">
          <tr><td>前身</td><td>1948 年國營酒莊 → 1993 年更名 Tokaj Kereskedőház → 2016 年更名 Grand Tokaj</td></tr>
          <tr><td>規模</td><td>Tolcsva 為據點，54 公頃自有葡萄園，占全產區逾三成產量，是規模最大的托卡伊生產者</td></tr>
          <tr><td>轉型</td><td>2013 年起翻新設備並延攬 2012 年度最佳釀酒師 Áts Károly 主導釀造</td></tr>
          <tr><td>代表作</td><td>Grand Tokaj 6 Puttonyos Tokaji Aszú（2013 年份曾獲 Michelangelo 國際大賽雙金獎）</td></tr>
        </table>
      </div>
      <p class="lead-text">從精品小莊到規模化國家老字號，托卡伊產區的多元生態正是其能兼顧頂級稀有款與親民日常款的關鍵。</p>
    </div>`
  },

  {
    title: '單一葡萄園分級制度：從 1700 年到今日',
    highlights: [
      { id: 1, icon: '🗺️', title: '世界最早的葡萄園分級之一', content: '1641 年已有文獻記載葡萄園差異，1700 年進行系統性分級（分為一至三級），比 1855 年波爾多評級早 155 年，比 1756 年杜羅河產區劃界早 56 年' },
      { id: 2, icon: '📜', title: '1737 年皇家詔書', content: 'Dűlő（單一葡萄園）命名制度由皇家詔書正式確立，是歐洲最早的官方單一葡萄園規範之一' },
      { id: 3, icon: '⭐', title: '歷史頂級園代表', content: 'Tarcal 村的 Mézes Mály 與 Szent Tamás 自 18 世紀起即被視為「一級中的一級」；Mád 村則有 7 塊歷史特級園，包括 Nyulászó、Betsek 等' },
      { id: 4, icon: '🏷️', title: '現況：傳統而非現代法定分級', content: '現行分級並無統一的現代歐盟法定地位，而是產區公會與個別酒莊依循歷史傳統自主標示；酒標若標示葡萄園名稱，即代表 Single Vineyard（單一葡萄園）裝瓶' }
    ],
    content: `<div class="classification-history">
      <p class="lead-text">托卡伊很可能是世界上最早針對葡萄園進行系統分級的產區——早在波爾多、杜羅河建立分級制度之前，托卡伊的頂級地塊早已聲名遠播。</p>
      <div class="timeline-box">
        <h4>📜 分級制度演進</h4>
        <div class="timeline-items">
          <div class="tl-item"><span class="tl-year">1641</span><span>最早文獻記載葡萄園品質差異</span></div>
          <div class="tl-item"><span class="tl-year">1700</span><span>系統性分級：分為一級、二級、三級，早於波爾多評級 155 年</span></div>
          <div class="tl-item"><span class="tl-year">1730–1737</span><span>Dűlő（單一葡萄園）命名傳統成形，1737 年皇家詔書正式確立</span></div>
          <div class="tl-item"><span class="tl-year">1772</span><span>Château Megyer 所在的 Megyer 葡萄園由皇家詔書列為一級園</span></div>
          <div class="tl-item"><span class="tl-year">1995 至今</span><span>各酒莊與產區公會延續傳統，於酒標自主標示歷史分級葡萄園名</span></div>
        </div>
      </div>
    </div>`,
    quiz: {
      question: '關於托卡伊單一葡萄園分級制度，下列敘述何者正確？',
      options: [
        'A. 1700 年的系統性分級比 1855 年波爾多評級早了約 155 年',
        'B. 托卡伊分級制度誕生於 20 世紀歐盟成立之後',
        'C. Dűlő 命名制度是 1990 年代外資酒莊發明的行銷手法',
        'D. 托卡伊分級目前具有統一的現代歐盟法定地位'
      ],
      correct: 0,
      explanation: '托卡伊的葡萄園分級可追溯至 1641 年的文獻記載，1700 年即完成系統性分級，比 1855 年波爾多評級早約 155 年，是世界最早的葡萄園分級系統之一。1737 年更以皇家詔書正式確立 Dűlő 單一葡萄園命名制度，但這套傳統分級至今並無統一的現代歐盟法定地位，而是由產區公會與個別酒莊自主延續。'
    }
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
            question: 'Royal Tokaji 酒莊由誰於 1990 年在 Mád 村創立？',
            options: ['A. 西班牙 Álvarez 家族', 'B. 英國酒評人 Hugh Johnson 等人', 'C. 法國 AXA Millésimes 集團', 'D. 匈牙利國家政府'],
            correct: 1,
            explanation: 'Royal Tokaji 由英國酒評人 Hugh Johnson、Ben Howkins 與丹麥裔釀酒師 Peter Vinding-Diers 於 1990 年共同創立於 Mád 村，是共產垮台後第一家進入托卡伊的外資酒莊，開啟現代復興序幕。'
          },
          {
            type: 'single',
            question: 'István Szepsy 家族在共產時代如何延續釀酒傳統？',
            options: ['A. 全面移民海外', 'B. 私下保留約 4 公頃小地維持釀酒技藝', 'C. 轉行經營國營農場', 'D. 停止釀酒直到 1990 年'],
            correct: 1,
            explanation: 'Szepsy 家族在共產集體化時代仍設法私下保留約 4 公頃小葡萄園並持續賣葡萄給國營體系，1990 年後才逐步贖回祖產、擴大莊園至 52 公頃，成為托卡伊品質革命的核心人物之一。'
          },
          {
            type: 'single',
            question: '「Tokaj Kereskedőház」在 2016 年更名為下列何者？',
            options: ['A. Royal Tokaji', 'B. Grand Tokaj', 'C. Château Megyer', 'D. Patricius'],
            correct: 1,
            explanation: '前身為 1948 年國營酒莊、1993 年更名為 Tokaj Kereskedőház 的產區規模最大生產者，於 2016 年正式更名為 Grand Tokaj，是坐落 Tolcsva、擁有 54 公頃自有葡萄園、占全產區逾三成產量的老字號。'
          },
          {
            type: 'single',
            question: '托卡伊 Dűlő（單一葡萄園）命名制度是在哪一年由皇家詔書正式確立？',
            options: ['A. 1641 年', 'B. 1737 年', 'C. 1855 年', 'D. 2004 年'],
            correct: 1,
            explanation: 'Dűlő 單一葡萄園命名傳統自 1730 年前後逐漸成形，並於 1737 年由皇家詔書正式確立，是歐洲最早的官方單一葡萄園規範之一，遠早於 1855 年的波爾多評級。'
          }
        ]
      }
    }
  }
]
