/**
 * CAN-L2-5 Nova Scotia
 * 事實來源：Wine Growers Nova Scotia（Tidal Bay 頁面）、Wikipedia（Nova Scotia wine、Quebec wine、L'Acadie blanc）、Wine With Seth winewiki（Nova Scotia）、Vins du Québec（2023 Wine Production and Sales Report）、Luxe Magazine Ottawa「The quiet revolution of Quebec wine」、Wine With Seth（Canada）。數字一律標註來源；來源有出入者（Nova Scotia 與 Quebec 的面積、酒廠數、Tidal Bay 的品種規定細節、Quebec 的產區數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Nova Scotia",
    subtitle: "Annapolis Valley 與 Tidal Bay：海洋氣候下的 L'Acadie Blanc",
    icon: "🌊",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "歷史與產區",
    highlights: [
      { id: 1, icon: "📜", title: "從 1600 年代到 1979", content: "1634 年 Acadia 總督 Isaac de Razilly 寫道在 La Hève 種的 Bordeaux 葡萄藤「長得很好」；Kentville Research Station 在 1913 年開始品種試驗；商業生產自 1979 年 Grand Pré Winery 開業算起；Wine Association of Nova Scotia（WANS）成立於 2003 年（Wikipedia）" },
      { id: 2, icon: "🗺️", title: "四個主要地區", content: "Annapolis Valley、Gaspereau Valley、South Shore 與 Malagash Peninsula；Cape Breton Island 等地也有種植（Wikipedia）" },
      { id: 3, icon: "📏", title: "規模很小", content: "面積的說法各異：約 1,000 英畝（404 公頃，Wine With Seth）、2015 年 632 英畝（256 公頃，Wikipedia）、約 400 公頃（Vins du Québec 引用的 Nova Scotia，占全加拿大 3%）、530 公頃（Wine With Seth 的 Canada 頁面），因此不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Nova Scotia 的葡萄酒歷史很長，產業卻很年輕。</p></div>"
  },
  {
    title: "氣候與品種",
    highlights: [
      { id: 1, icon: "🌊", title: "海洋調節", content: "大西洋調節溫度極端並拉長採收期，長長的秋天讓葡萄慢慢成熟；生長季僅約 5.5 個月，良好微氣候的最低溫很少低於 -23°C（Wine With Seth、Wikipedia）；Bay of Fundy 也有調節冬季氣溫的作用（Wine With Seth 的 Canada 頁面）" },
      { id: 2, icon: "⚪", title: "L'Acadie Blanc", content: "最重要的白品種，是適應短而涼爽生長季的雜交種，最初在 Ontario 的 Vineland 育成（Vineland 53261），用於靜態酒與氣泡酒；其他白品種有 Seyval Blanc、Vidal Blanc、Ortega、Geisenheim 318，最暖的微氣候也種 Riesling 與 Chardonnay（Wine With Seth、Wikipedia）" },
      { id: 3, icon: "🔴", title: "紅品種與雜交種", content: "紅品種有 Baco Noir、Maréchal Foch、Leon Millot、Luci Kuhlmann，以及 Pinot Noir 與 Gamay；雜交品種因耐寒抗病而長期占主導，近年也有人試種 vinifera，成效中等（Wine With Seth、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">海洋性氣候，加上耐寒的雜交種。</p></div>"
  },
  {
    title: "Tidal Bay 與氣泡酒",
    highlights: [
      { id: 1, icon: "🏷️", title: "Tidal Bay 的規定", content: "2012 年 6 月正式推出，是 Nova Scotia 第一個也是唯一的官方產區名稱；必須 100% 使用 Nova Scotia 葡萄，酒精濃度不得超過 11%，每年須通過獨立盲飲小組審核；風格為清涼、爽脆、活潑、芳香，帶有鮮綠水果、明快酸度與礦物感（Wine Growers Nova Scotia）" },
      { id: 2, icon: "📋", title: "品種規定的細節", content: "Wikipedia 寫著：L'Acadie Blanc、Seyval Blanc、Vidal 與 Geisenheim 318 須占至少 51%，另可用 16 個其他品種；官方頁面的品種清單只以圖片呈現，無法核對，因此品種細節不列入測驗" },
      { id: 3, icon: "🥂", title: "傳統法氣泡酒", content: "Nova Scotia 以氣泡酒聞名：Benjamin Bridge、L'Acadie Vineyards 與 Blomidon Estate Winery 採傳統法，部分外銷；L'Acadie Vineyards 的 Prestige Brut Estate 完全由 L'Acadie Blanc 製成（Wikipedia、Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Tidal Bay 是風格規範，不是品種規範。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Nova Scotia 第一個、也是唯一的官方產區名稱是？",
            options: ["A. Annapolis Valley VQA","B. Tidal Bay","C. Gaspereau Cru","D. Fundy Classic"],
            correct: 1,
            explanation: "Tidal Bay，2012 年 6 月推出。"
          },
          {
            type: 'single',
            question: "Tidal Bay 的酒精濃度上限是？",
            options: ["A. 9%","B. 11%","C. 13%","D. 15%"],
            correct: 1,
            explanation: "不得超過 11%。"
          },
          {
            type: 'single',
            question: "Tidal Bay 對葡萄產地的要求是？",
            options: ["A. 100% Nova Scotia 葡萄","B. 至少 51% Nova Scotia 葡萄","C. 不限產地","D. 須含 Ontario 葡萄"],
            correct: 0,
            explanation: "100% Nova Scotia 葡萄，並每年通過盲飲小組審核。"
          },
          {
            type: 'single',
            question: "Nova Scotia 最重要的白品種是？",
            options: ["A. Chardonnay","B. Sauvignon Blanc","C. L'Acadie Blanc","D. Gewürztraminer"],
            correct: 2,
            explanation: "L'Acadie Blanc，一種雜交種。"
          },
          {
            type: 'single',
            question: "L'Acadie Blanc 最初在哪裡育成？",
            options: ["A. Ontario 的 Vineland","B. Nova Scotia 的 Wolfville","C. BC 的 Kelowna","D. Quebec 的 Dunham"],
            correct: 0,
            explanation: "Vineland，代號 Vineland 53261。"
          },
          {
            type: 'single',
            question: "商業生產自 Grand Pré Winery 於哪一年開業算起？",
            options: ["A. 1913","B. 1964","C. 1979","D. 2012"],
            correct: 2,
            explanation: "1979 年（Wikipedia）。"
          }
        ]
      }
    }
  }
]
