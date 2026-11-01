/**
 * AT-L3-5 產業與市場
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "出口結構與價格帶",
    icon: "📦",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "出口結構（2024）",
    highlights: [
      { id: 1, icon: "📦", title: "總量與總值", content: "2024 年出口 6,420 萬公升（−1.7%）、2.333 億歐元（−6.0%）（Statistik Austria 暫定數）" },
      { id: 2, icon: "🇩🇪", title: "德國", content: "佔出口量 60.2%、金額 42.3%——量大但單價相對低" },
      { id: 3, icon: "🇺🇸", title: "美國", content: "2024 年佔出口金額 8.5%，升為第二大市場；瑞士銷量大幅下滑" },
      { id: 4, icon: "🛢️", title: "桶裝酒", content: "2024 年桶裝酒出口量增加 16.1%，但價值減少 1.4%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">年份重要：2025 年資料為 6,060 萬公升、約 2.19 億歐元（見 Level 1），趨勢是「量穩、值降」。</p></div>"
  },
  {
    title: "結構性風險與機會",
    highlights: [
      { id: 1, icon: "⚖️", title: "過度依賴德國", content: "出口集中於單一市場，價格與需求波動直接影響產業" },
      { id: 2, icon: "🌱", title: "永續作為差異化", content: "約 27% 葡萄園已通過 Sustainable Austria（見 L3-1），有機約 25%（2024 年 11 月初步數）" },
      { id: 3, icon: "🍷", title: "白酒與 DAC 的品牌化", content: "以 Grüner Veltliner 與產區 DAC 名稱建立辨識度，是出口敘事核心（描述性判斷）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">生產者類型與價格帶本課不給數字：未取得可靠的官方統計，避免誤導。</p></div>"
  },
  {
    title: "Diploma 深度：生產者結構與通路",
    highlights: [
      { id: 1, icon: "🏡", title: "小酒莊與直接銷售", content: "奧地利以家族小酒莊為主，Heuriger（Wien、Niederösterreich）與 Buschenschank（Steiermark）讓酒莊可在自家直接賣酒與餐點，利潤高、也綁住在地客群。傳統上門口掛松枝（Buschen）表示營業" },
      { id: 2, icon: "🤝", title: "合作社與大型業者", content: "合作社在部分產區份量重，例如 Wachau 的 Domäne Wachau、Kremstal 的 Winzer Krems；Lenz Moser 等大型業者與 Schlumberger 等 Sekt 廠則負責量販與出口通路（代表性例子，非完整名單）" },
      { id: 3, icon: "📉", title: "「量穩、值降」的解讀", content: "2024 年出口德國量占六成、值只占約四成，加上桶裝酒量增值減，表示低價散裝比重上升。對策方向：提高瓶裝與 DAC、Ried 酒款比例，擴大美國等高單價市場（本課為判斷，非官方結論）" },
      { id: 4, icon: "🧭", title: "論述時的定位語言", content: "奧地利的出口敘事集中在「乾型白酒（Grüner）＋產區風格（DAC）＋永續」三點；弱點是產量小、成本高、對單一市場依賴。寫論述時先承認規模限制，再談溢價策略" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">小規模、高成本的產區，只能走「品質與辨識度」的路。</p></div>"
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
            question: "2024 年德國佔奧地利葡萄酒出口量約多少？",
            options: ["A. 約 20%","B. 約 40%","C. 約 60%","D. 約 85%"],
            correct: 2,
            explanation: "德國佔出口量 60.2%、金額 42.3%。"
          },
          {
            type: 'single',
            question: "2024 年哪個市場升為第二大出口市場（以金額）？",
            options: ["A. 瑞士","B. 美國","C. 日本","D. 中國"],
            correct: 1,
            explanation: "美國佔 8.5% 並升至第二。"
          },
          {
            type: 'single',
            question: "德國的出口特徵是？",
            options: ["A. 量小價高","B. 量大但單價相對低","C. 只有紅酒","D. 只有甜酒"],
            correct: 1,
            explanation: "量佔 60.2%、值佔 42.3%，代表單價相對較低。"
          }
        ]
      }
    }
  }
]
