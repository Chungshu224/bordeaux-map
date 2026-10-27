/**
 * US-L1-6 Level 1 綜合評量
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🕰️", title: "歷史", content: "Oregon 1961／1960 年代中期先驅、1979 國際肯定；Washington 的 Yakima Valley 1983、Columbia Valley 1984；New York 1976 農場酒廠法" },
      { id: 2, icon: "🌦️", title: "氣候與品種", content: "Cascades 雨影；Oregon 以 Pinot Noir 為主（60%）；Washington 以 Cabernet Sauvignon 領軍（27%）；東岸以 Riesling 與 Cabernet Franc 為代表" },
      { id: 3, icon: "🏷️", title: "標籤", content: "AVA 85、州／郡 75、品種 75；Oregon：產地 95、品種 90（有例外）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨年度更新，因此測驗只考規則與觀念，以及已標註年份的數字。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 1 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Washington 第一個 AVA 是？",
            options: ["A. Yakima Valley","B. Red Mountain","C. Puget Sound","D. Horse Heaven Hills"],
            correct: 0,
            explanation: "Yakima Valley，1983 年。"
          },
          {
            type: 'single',
            question: "Columbia Valley AVA 核准於哪一年？",
            options: ["A. 1980","B. 1983","C. 1984","D. 2001"],
            correct: 2,
            explanation: "1984 年 12 月 13 日。"
          },
          {
            type: 'single',
            question: "2024 年 Oregon 種植面積中 Pinot Noir 約占？",
            options: ["A. 30%","B. 45%","C. 60%","D. 85%"],
            correct: 2,
            explanation: "約 60%。"
          },
          {
            type: 'single',
            question: "2024 年 Washington 壓榨量第一的品種？",
            options: ["A. Cabernet Sauvignon","B. Merlot","C. Chardonnay","D. Syrah"],
            correct: 0,
            explanation: "Cabernet Sauvignon 約 27%。"
          },
          {
            type: 'single',
            question: "塑造 Columbia Valley 土壤基礎的事件？",
            options: ["A. Missoula 洪水","B. 火山噴發","C. 冰河退縮後的湖","D. 海進"],
            correct: 0,
            explanation: "Missoula 洪水。"
          },
          {
            type: 'single',
            question: "第一個聯邦 AVA 是？",
            options: ["A. Napa Valley","B. Augusta（Missouri）","C. Finger Lakes","D. Yakima Valley"],
            correct: 1,
            explanation: "Augusta，1980 年 6 月 20 日。"
          },
          {
            type: 'single',
            question: "聯邦規定 AVA 標示的最低比例？",
            options: ["A. 75%","B. 85%","C. 90%","D. 100%"],
            correct: 1,
            explanation: "85%。"
          },
          {
            type: 'single',
            question: "Oregon 品種標示的一般最低比例？",
            options: ["A. 75%","B. 85%","C. 90%","D. 95%"],
            correct: 2,
            explanation: "90%。"
          },
          {
            type: 'single',
            question: "Oregon 標示 AVA 時，來自該產區的最低比例？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 2,
            explanation: "95%。"
          },
          {
            type: 'single',
            question: "New York 農場酒廠法通過於哪一年？",
            options: ["A. 1962","B. 1976","C. 1984","D. 2011"],
            correct: 1,
            explanation: "1976 年。"
          },
          {
            type: 'single',
            question: "Concord 屬於哪一個種？",
            options: ["A. Vitis labrusca","B. Vitis vinifera","C. Vitis riparia","D. Vitis rupestris"],
            correct: 0,
            explanation: "Vitis labrusca。"
          }
        ]
      }
    }
  }
]
