/**
 * HU L2-1 托卡伊頂級酒莊解析：Royal Tokaji、Oremus、Disznókő 與現代名莊
 */

export const lessonContent = [
  {
    type: 'cover',
    title: '托卡伊頂級酒莊解析',
    subtitle: '現代復興的推手：五大名莊與單一葡萄園的傳奇',
    icon: '🏰',
    background: 'linear-gradient(135deg, #d4a017 0%, #6b4226 100%)'
  },

  {
    title: '托卡伊的現代復興背景',
    highlights: [
      { id: 1, icon: '📅', title: '共產主義時代的集體化（1945–1989）', content: '共產政權下葡萄園合併為國有集體農場，以量為先、忽視品質，Aszú 傳統幾近失傳' },
      { id: 2, icon: '🌅', title: '1989 年後的私有化浪潮', content: '政治開放後外國資本大舉進入托卡伊——法國 AXA 集團、西班牙 Vega Sicilia、英國投資者相繼買地，帶入現代釀酒技術' },
      { id: 3, icon: '🔬', title: '單一葡萄園（Single Vineyard）意識崛起', content: '1700 年代托卡伊就有分級葡萄園記錄，2004 年現代法規確立 Premier Cru（一級園）與 Grand Cru（特級園）體系' },
      { id: 4, icon: '⚖️', title: '干型 Furmint 的新話語', content: '2010 年代起氣候暖化 + 市場需求，頂級酒莊紛紛推出干型 Furmint，打開 Fine Wine 高端市場' }
    ],
    content: `<div class="tokaj-revival">
      <p class="lead-text">托卡伊的現代史是一部從廢墟重建傳奇的史詩——1989 年後短短三十年，五大名莊將這片被忽視的地區重新推上世界頂級甜酒舞台。</p>
      <div class="timeline-box">
        <h4>🗓️ 關鍵時間軸</h4>
        <div class="timeline-items">
          <div class="tl-item"><span class="tl-year">1990</span><span>Royal Tokaji 成立，第一批現代 Aszú 誕生</span></div>
          <div class="tl-item"><span class="tl-year">1993</span><span>Vega Sicilia 收購 Oremus，西班牙技術引入</span></div>
          <div class="tl-item"><span class="tl-year">1993</span><span>AXA Millésimes 入主 Disznókő</span></div>
          <div class="tl-item"><span class="tl-year">2004</span><span>匈牙利加入歐盟，法規現代化</span></div>
          <div class="tl-item"><span class="tl-year">2013</span><span>Aszú 新法規：以殘糖量定義，取消 Puttonyos 數字</span></div>
        </div>
      </div>
    </div>`
  },

  {
    title: '五大頂級酒莊深解',
    highlights: [
      { id: 1, icon: '👑', title: 'Royal Tokaji（1990 年英國-匈牙利合資）', content: '首批現代托卡伊名莊，以 6 Puttonyos 標竿作品「Mézes Mály」聞名，旗下有 6 個一級/特級葡萄園' },
      { id: 2, icon: '🇪🇸', title: 'Oremus（西班牙 Vega Sicilia 集團）', content: '干型 Furmint「Mandolás」是現代托卡伊干白的代表作；Aszú 線以「Tokaji Aszú」系列著稱，酸度鮮活' },
      { id: 3, icon: '🇫🇷', title: 'Disznókő（法國 AXA Millésimes）', content: '波雅克名莊 Pichon Baron 同一集團，以礦石感和緊緻酸度聞名，Aszú Esszencia 是鎮莊之寶' },
      { id: 4, icon: '🌿', title: 'Dobogó（生物動力農法）', content: '拋棄化學農藥，以生物動力農法（Biodynamic）種植，干型 Furmint 展現火山土壤最純粹的礦石張力' }
    ],
    content: `<div class="estates-detail">
      <div class="estate-card">
        <h4>🏅 Royal Tokaji — 現代托卡伊的象徵</h4>
        <table class="estate-table">
          <tr><td>成立</td><td>1990 年（英匈合資）</td></tr>
          <tr><td>旗艦酒</td><td>Nyulászó Premier Cru、Mézes Mály Grand Cru</td></tr>
          <tr><td>風格</td><td>豐潤甜美，金黃色澤，蜂蜜＋杏桃＋橙皮</td></tr>
          <tr><td>知名事蹟</td><td>第一家在西方超市商業販售的現代 Tokaji</td></tr>
        </table>
      </div>
      <div class="estate-card">
        <h4>🍷 Oremus — 干型先驅</h4>
        <table class="estate-table">
          <tr><td>母公司</td><td>Vega Sicilia（西班牙頂級名莊集團）</td></tr>
          <tr><td>干白代表</td><td>Mandolás Furmint（礦石感＋白花＋柑橘皮）</td></tr>
          <tr><td>特色</td><td>結合里貝拉德爾杜埃羅的精確技術與托卡伊的酸度</td></tr>
        </table>
      </div>
    </div>`
  },

  {
    title: '單一葡萄園分級制度',
    highlights: [
      { id: 1, icon: '🗺️', title: 'Classified Vineyard（分級葡萄園）起源', content: '1700 年代托卡伊已有官方分級記錄，比波爾多 1855 年早 150 年，是世界最早的葡萄園分級系統之一' },
      { id: 2, icon: '⭐', title: 'Premier Cru（一級園）', content: '土壤組成、朝向、排水均達優良標準，產量更嚴格；代表：Nyulászó、Betsek、Hétszőlő' },
      { id: 3, icon: '⭐⭐', title: 'Grand Cru（特級園）', content: '全托卡伊最頂級地塊，火山流紋岩與黃土的完美結合；代表：Mézes Mály（Royal Tokaji）、Disznókő（同名酒莊）' },
      { id: 4, icon: '🏷️', title: '標籤解讀', content: '酒標上出現葡萄園名稱 = Single Vineyard；出現「Cru」字樣 = 已通過認證的分級地塊' }
    ],
    quiz: {
      question: '下列哪家酒莊隸屬法國 AXA Millésimes 集團旗下？',
      options: ['Royal Tokaji', 'Oremus', 'Disznókő', 'Dobogó'],
      answer: 2,
      explanation: 'Disznókő 由法國保險集團 AXA Millésimes 於 1993 年收購，同集團在波爾多擁有 Pichon Baron（波雅克二級莊）與 Suduiraut（索甸一級莊）。'
    }
  }
]
