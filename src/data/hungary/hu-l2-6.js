/**
 * HU L2-6 Level 2 綜合評量：托卡伊、維拉尼、埃格爾與進階品飲
 */

export const lessonContent = [
  {
    type: 'cover',
    title: 'Level 2 綜合評量',
    subtitle: '測驗進階匈牙利葡萄酒知識，取得 Level 2 認證',
    icon: '🎓',
    background: 'linear-gradient(135deg, #c8102e 0%, #477050 100%)'
  },

  {
    title: 'Level 2 知識總複習',
    highlights: [
      { id: 1, icon: '🏰', title: '托卡伊名莊重點', content: 'Royal Tokaji（英匈，1990）、Oremus（Vega Sicilia，1993）、Disznókő（AXA Millésimes，1993）、Dobogó（生物動力農法）' },
      { id: 2, icon: '📅', title: '年份關鍵知識', content: '托卡伊年份品質由「秋季晨霧 + 午後暖乾」決定；傳奇年份：1999、2009、2017；顏色、香氣、酸度判讀陳年階段' },
      { id: 3, icon: '🍷', title: '維拉尼 vs. 埃格爾', content: '維拉尼 = 地中海氣候 + 石灰岩 + Cab Franc 主導；埃格爾 = 火山土 + Kékfrankos + Bikavér Superior 混釀制度' },
      { id: 4, icon: '🔍', title: '進階品飲線索', content: 'Furmint = 極高酸 + 火山礦石 + 白花；Kékfrankos = 高酸 + 黑胡椒 + 黑醋栗；Aszú = 蜂蜜 + 番紅花 + 橙皮醬' }
    ],
    content: `<div class="level2-review">
      <p class="lead-text">Level 2 帶你從匈牙利葡萄酒的「觀光客」升級為「鑑賞者」——你現在能辨識頂級酒莊、解讀年份特性、區分兩大紅酒產區，以及盲品匈牙利品種。</p>
      <div class="review-grid">
        <div class="review-section">
          <h4>🏅 本階段核心知識</h4>
          <ul>
            <li>✅ 四大托卡伊名莊的歷史、風格與旗艦酒</li>
            <li>✅ 近 30 年傳奇年份（1999、2009、2017）的氣候條件</li>
            <li>✅ Aszú 陳年：顏色＋香氣＋酸度的演化規律</li>
            <li>✅ 維拉尼：五大品種、三大酒莊、Villányi Franc 法規</li>
            <li>✅ 埃格爾：Bikavér Superior 的混釀標準與 Kékfrankos 特色</li>
            <li>✅ 盲品框架：Furmint vs. Riesling；Kékfrankos 的黑胡椒線索</li>
          </ul>
        </div>
      </div>
    </div>`
  },

  {
    title: 'Level 2 綜合測驗（第一組）',
    highlights: [
      { id: 1, icon: '❓', title: '問題 1', content: '托卡伊的 Disznókő 酒莊隸屬哪個集團？' },
      { id: 2, icon: '❓', title: '問題 2', content: 'Bikavér Superior 規定 Kékfrankos 的混釀比例範圍是？' },
      { id: 3, icon: '❓', title: '問題 3', content: '維拉尼最具代表性的紅葡萄品種是？' },
      { id: 4, icon: '❓', title: '問題 4', content: '盲品中發現「番紅花 + 橙皮醬 + 蜂蜜」的複雜甜酒，最可能來自哪個產區？' }
    ],
    quiz: {
      question: 'Bikavér Superior 規定的最短橡木桶陳年時間是多少個月？',
      options: ['6 個月', '12 個月', '18 個月', '24 個月'],
      answer: 2,
      explanation: 'Bikavér Superior（2008 年法規）要求：總陳年 30 個月，其中橡木桶陳年至少 18 個月。普通 Bikavér 只需 12 個月的橡木桶陳年。這項嚴格規定是 Superior 品質認證的核心。'
    }
  },

  {
    title: 'Level 2 綜合測驗（第二組）',
    highlights: [
      { id: 1, icon: '🏰', title: '名莊辨識', content: '考驗你能否區分四大托卡伊名莊（Royal Tokaji / Oremus / Disznókő / Dobogó）的母公司與風格特色' },
      { id: 2, icon: '📅', title: '年份分析', content: '考驗你能否判斷哪些年份適合現在飲用，哪些需要繼續等待，以及背後的氣候原因' },
      { id: 3, icon: '🗺️', title: '產區定位', content: '考驗你能否從土壤、氣候、法規三個維度區分維拉尼與埃格爾兩大紅酒產區' },
      { id: 4, icon: '🍷', title: '品飲診斷', content: '給定香氣與結構描述，考驗你能否正確識別品種（Furmint / Kékfrankos / Kadarka / Hárslevelű）' }
    ],
    quiz: {
      question: '下列哪個年份被認為是托卡伊近年（2000 年後）品質最佳的年份？',
      options: ['2006', '2009', '2013', '2015'],
      answer: 1,
      explanation: '2009 年是近年公認最佳的托卡伊年份，貴腐比例超過 40%，結合完美的晨霧與午後暖乾條件。頂級酒莊的 2009 Aszú 現已展現絕美的蜂蜜＋柑橘醬＋番紅花風味，但仍可繼續陳年至 2040 年。2017 年也被認為是傑出年份，但目前仍需繼續陳年。'
    }
  }
]
