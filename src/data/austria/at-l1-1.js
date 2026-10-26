/**
 * AT-L1-1 認識奧地利葡萄酒
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識奧地利葡萄酒",
    subtitle: "歷史、1985 年醜聞與復興",
    icon: "🏔️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "悠久的歷史",
    highlights: [
      { id: 1, icon: "🏺", title: "凱爾特與羅馬時代", content: "考古發現顯示公元前 5 世紀的凱爾特文化已有葡萄酒器皿；羅馬時代葡萄栽培興盛" },
      { id: 2, icon: "⛪", title: "修道院的角色", content: "中世修道院（如 Klosterneuburg）推動栽培與釀造，查理曼時期（788 年起）也曾大規模重建葡萄園" },
      { id: 3, icon: "📜", title: "1784 年的皇帝詔令", content: "約瑟夫二世於 1784 年 8 月 17 日的詔令，催生了奧地利獨特的 Heuriger（酒館）傳統" },
      { id: 4, icon: "🐛", title: "根瘤芽蟲病", content: "根瘤芽蟲於 1872 年傳入，摧毀中歐大部分葡萄園，之後需重新以嫁接苗種植" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記住主線：古老的葡萄酒文化 → 根瘤芽蟲後重建 → 20 世紀走向大量生產。</p></div>"
  },
  {
    title: "20 世紀：從大量走向危機",
    highlights: [
      { id: 1, icon: "🏭", title: "大量生產的年代", content: "20 世紀奧地利葡萄酒成為高產量、工業化的產業，大量以散裝酒銷往德國" },
      { id: 2, icon: "🍯", title: "偏甜的風格", content: "當時市場偏好偏甜、豐滿的葡萄酒，生產者追求高糖度的 Prädikat 等級" },
      { id: 3, icon: "⚠️", title: "品質壓力", content: "1982 年份成熟度不佳，部分生產者無法履行超市長期合約所要求的 Prädikat 品質——這是 1985 年事件的背景" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">壓力來自「合約要求的甜度」與「實際的成熟度」之間的落差。</p></div>"
  },
  {
    title: "1985 年乙二醇事件",
    highlights: [
      { id: 1, icon: "🔬", title: "如何被發現", content: "西德實驗室在例行品質檢驗中發現：1985 年 6 月 27 日分析了一瓶 1983 Ruster Auslese，7 月 9 日德國衛生部發出警告" },
      { id: 2, icon: "🧪", title: "添加了什麼", content: "生產者添加工業用的乙二醇（diethylene glycol），讓酒嚐起來更甜、更飽滿，模仿晚收甜酒" },
      { id: 3, icon: "📉", title: "對出口的衝擊", content: "出口量從事件前每年約 4,500 萬公升，跌至 1986 年約 440 萬公升；直到 2001 年才回到事件前水準（數字來自 Wikipedia 彙整）" },
      { id: 4, icon: "⚖️", title: "立法回應", content: "奧地利國會於 1985 年 8 月 29 日通過更嚴格的酒法，趕在當年採收前生效" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">細節數字有出入時以年份標示為準；重點是「事件 → 嚴格法規 → 轉向品質」。</p></div>"
  },
  {
    title: "復興與今日",
    highlights: [
      { id: 1, icon: "🥂", title: "轉向乾型與高品質", content: "事件後奧地利轉向乾型白酒與較高價位的市場，法規大幅收緊，品質導向成為共識" },
      { id: 2, icon: "🏷️", title: "DAC 制度的開始", content: "第一個 DAC 是 Weinviertel（2002 年份）；今日共有 18 個 DAC（見 Level 2）" },
      { id: 3, icon: "📊", title: "今日的規模", content: "葡萄園約 4.4 萬公頃（2024／2025 年資料），約 25% 為有機（2025 年）；出口 6,060 萬公升、約 2.19 億歐元（2025 年）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">年份很重要：這些數字每年更新，課內只作為規模概念，不作為測驗答案。</p></div>"
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
            question: "1985 年事件中，生產者添加乙二醇的主要目的是？",
            options: ["A. 防止氧化","B. 讓酒嚐起來更甜、更飽滿","C. 提高酒精度","D. 增加顏色"],
            correct: 1,
            explanation: "乙二醇用來模仿晚收甜酒的甜度與酒體。"
          },
          {
            type: 'single',
            question: "第一個 DAC 是哪個產區？",
            options: ["A. Wachau","B. Weinviertel","C. Kamptal","D. Neusiedlersee"],
            correct: 1,
            explanation: "Weinviertel 自 2002 年份起成為第一個 DAC。"
          },
          {
            type: 'single',
            question: "1784 年約瑟夫二世詔令催生了哪項奧地利傳統？",
            options: ["A. Prädikat 分級","B. Heuriger（酒館）","C. Sekt 三級制","D. Ried 單一園"],
            correct: 1,
            explanation: "詔令允許生產者直接銷售自家酒，形成 Heuriger 傳統。"
          }
        ]
      }
    }
  }
]
