/**
 * LG-L3-5 Level 3 綜合評量
 * 事實來源：Decanter（"Nightmare wildfire in southern France hits vineyards"，2025-08-14；"Languedoc under the lens: 2022 and 2023 vintages"；"Going green in Languedoc-Roussillon"，2018）、Pleinchamp（葡萄酒危機報導，2024-11-08）、Wine With Seth（IGP / Vin de Pays、Languedoc AOC、Carignan 頁，2026 年查閱）、SevenFifty Daily（Languedoc 有機，贊助內容）、BKWine（法國有機葡萄園，2024-08-07）。數字一律標註來源與年份；來源有出入者（2025 野火「數十年／逾 70 年來最大」、Mont Tauch 的面積與產量占比、Vin de Pays 立法年份、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "以綜合測驗檢視 Level 3 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🔥", title: "氣候與災害", content: "PO 乾旱 30 個月；2023 熱浪四天 >40°C；2025 年 8 月 Corbières 野火燒毀逾 17,000 公頃" },
      { id: 2, icon: "⚗️", title: "釀造", content: "Languedoc AOC Carignan／Cinsaut 各 ≤40%；碳浸柔化單寧；Rivesaltes Hors d'âge 5 年" },
      { id: 3, icon: "📈", title: "市場與法規", content: "IGP 2009-08-01 更名、75 個 IGP、標品種 85%；拔樹每公頃最高 €4,000；規格 2023-11-30" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字以來源標註的年份為準，來源有出入者不考。</p></div>"
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
            question: "2023 年 8 月底熱浪有幾天超過 40°C？",
            options: ["A. 1","B. 2","C. 4","D. 10"],
            correct: 2,
            explanation: "四天。"
          },
          {
            type: 'single',
            question: "2025 年 8 月野火的起點附近是？",
            options: ["A. Montlaur","B. Banyuls","C. Frontignan","D. Limoux"],
            correct: 0,
            explanation: "Aude 的 Montlaur 附近。"
          },
          {
            type: 'single',
            question: "Languedoc AOC 紅酒中 Carignan 的上限？",
            options: ["A. 10%","B. 20%","C. 40%","D. 75%"],
            correct: 2,
            explanation: "40%。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac 的產量上限？",
            options: ["A. 30 hL/ha","B. 45 hL/ha","C. 60 hL/ha","D. 80 hL/ha"],
            correct: 1,
            explanation: "45 hL/ha。"
          },
          {
            type: 'single',
            question: "二氧化碳浸皮的主要效果？",
            options: ["A. 柔化單寧","B. 增加橡木味","C. 提高殘糖","D. 降低酒精"],
            correct: 0,
            explanation: "柔化單寧。"
          },
          {
            type: 'single',
            question: "Vin de Pays 全面改稱 IGP 的日期？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 2016 年 1 月 1 日","D. 2023 年 11 月 30 日"],
            correct: 0,
            explanation: "2009 年 8 月 1 日。"
          },
          {
            type: 'single',
            question: "IGP 標示品種需至少含多少？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "85%。"
          },
          {
            type: 'single',
            question: "75 個 IGP 中，省級 IGP 有幾個？",
            options: ["A. 6","B. 28","C. 41","D. 75"],
            correct: 1,
            explanation: "28 個（6 + 28 + 41）。"
          },
          {
            type: 'single',
            question: "2024 年 11 月永久拔樹方案每公頃補助上限？",
            options: ["A. €400","B. €1,000","C. €4,000","D. €40,000"],
            correct: 2,
            explanation: "€4,000。"
          },
          {
            type: 'single',
            question: "Languedoc 現行 AOC 規格核准於？",
            options: ["A. 2007 年 4 月 30 日","B. 2009 年 8 月 1 日","C. 2023 年 11 月 30 日","D. 2016 年 1 月 1 日"],
            correct: 2,
            explanation: "2023 年 11 月 30 日。"
          },
          {
            type: 'single',
            question: "Maury 的 Grenache Noir 下限變化？",
            options: ["A. 50% 提高到 75%","B. 75% 降到 50%","C. 一直是 100%","D. 沒有規定"],
            correct: 0,
            explanation: "50% 提高到 75%。"
          },
          {
            type: 'single',
            question: "HVE 與有機的關係？",
            options: ["A. HVE 不算有機","B. HVE 等於生機","C. HVE 比有機更嚴","D. HVE 禁止所有噴藥"],
            correct: 0,
            explanation: "HVE 不計入有機。"
          }
        ]
      }
    }
  }
]
