/**
 * CAN-L3-5 Level 3 綜合評量
 * 事實來源：The Narwhal（BC wine climate crisis）、Wine Anorak（2024-02-10）、Brock University CCOVI／Wines in Niagara（2015 年葡萄芽存活）、UBC Okanagan（Testing for smoke taint in Okanagan wines，Molecules）、Wine Country Ontario Icewine 手冊、Brock University Inniskillin 展覽、Fine Vintage「Canadian Wine Scholar Study Guide」（2019）、B.C. Reg. 168/2018（BC Laws）、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（冰酒出汁率、酒精濃度範圍、年度產量、氣候推估等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "重點回顧與綜合測驗",
    icon: "🏆",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🌡️", title: "栽培與冰酒", content: "2024 年 1 月 BC 在 10–13°C 後驟降到 -25°C 以下；風機只在有逆溫的平靜夜晚有效；煙害標記是 guaiacol 與 4-methylguaiacol。冰酒須在樹上自然結冰（≤ -8°C），夜間採收、結冰榨汁、發酵數月，BC 規定殘糖 ≥ 100 g/L、揮發酸 ≤ 2.1 g/L" },
      { id: 2, icon: "📊", title: "產業與市場", content: "WGC 約代表 90% 產量；國內市占約 30%（51% 為目標）；出口以冰酒為主；省際運送 2018 年最高法院駁回完全自由化；Cellared in Canada 2018 年 3 月 12 日起禁用；經濟衝擊數字來源不一，須標明年份與來源" },
      { id: 3, icon: "⚖️", title: "法規沿革", content: "Ontario：1988 自願、1998 納入規則、2000 年 6 月 29 日 VQA Act 生效。BC：1990 成立、Reg 79/2005 與 BCWA、Reg 168/2018 取代之；2018 年 4 月新增四個 GI；GI 標示現行至少 85%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源不一致的數字不列入測驗。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "2024 年 1 月 BC 寒害的特徵是？",
            options: ["A. 暖和後驟降到 -25°C 以下","B. 長期乾旱","C. 夏季霜害","D. 冰雹"],
            correct: 0,
            explanation: "降溫太快。"
          },
          {
            type: 'single',
            question: "2023 年 Okanagan 哪個品種減產最嚴重？",
            options: ["A. Riesling","B. Chardonnay","C. Cabernet Franc","D. Syrah"],
            correct: 3,
            explanation: "Syrah 72%。"
          },
          {
            type: 'single',
            question: "風機在什麼條件下有效？",
            options: ["A. 平靜晴朗、有逆溫層的夜晚","B. 長時間強風寒流","C. 降雨時","D. 白天"],
            correct: 0,
            explanation: "需要逆溫層。"
          },
          {
            type: 'single',
            question: "煙害的公認標記化合物是？",
            options: ["A. Guaiacol 與 4-methylguaiacol","B. 酒石酸","C. 甘油","D. 二氧化硫"],
            correct: 0,
            explanation: "兩者為標記。"
          },
          {
            type: 'single',
            question: "VQA 冰酒葡萄必須如何結冰？",
            options: ["A. 在樹上自然結冰","B. 採後冷凍庫","C. 先風乾","D. 加糖後"],
            correct: 0,
            explanation: "自然結冰在樹上。"
          },
          {
            type: 'single',
            question: "BC 冰酒的殘糖下限是？",
            options: ["A. 20 g/L","B. 45 g/L","C. 100 g/L","D. 250 g/L"],
            correct: 2,
            explanation: "至少 100 g/L。"
          },
          {
            type: 'single',
            question: "Inniskillin 1983 年第一次嘗試冰酒的結果是？",
            options: ["A. 葡萄被鳥吃光","B. 大豐收","C. 被霜凍壞","D. 被政府禁止"],
            correct: 0,
            explanation: "隔年用網才成功。"
          },
          {
            type: 'single',
            question: "加拿大酒在國內銷售的占比約為？",
            options: ["A. 5%","B. 30%","C. 60%","D. 90%"],
            correct: 1,
            explanation: "約 30%。"
          },
          {
            type: 'single',
            question: "Cellared in Canada 自何時被禁？",
            options: ["A. 1988","B. 2000","C. 2018 年 3 月 12 日","D. 2025"],
            correct: 2,
            explanation: "2018 年 3 月 12 日。"
          },
          {
            type: 'single',
            question: "Ontario VQA Act 生效日期是？",
            options: ["A. 1988 年","B. 2000 年 6 月 29 日","C. 2007 年","D. 2018 年"],
            correct: 1,
            explanation: "2000 年 6 月 29 日。"
          },
          {
            type: 'single',
            question: "取代 BC Reg 79/2005 的規定是？",
            options: ["A. Reg 168/2018","B. Reg 12/1990","C. Reg 5/2012","D. Reg 77/2025"],
            correct: 0,
            explanation: "Reg 168/2018。"
          },
          {
            type: 'single',
            question: "BC 現行 GI 標示的最低比例？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85%。"
          }
        ]
      }
    }
  }
]
