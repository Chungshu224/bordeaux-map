/**
 * LG-L3-3 產業與市場
 * 事實來源：Decanter（"Nightmare wildfire in southern France hits vineyards"，2025-08-14；"Languedoc under the lens: 2022 and 2023 vintages"；"Going green in Languedoc-Roussillon"，2018）、Pleinchamp（葡萄酒危機報導，2024-11-08）、Wine With Seth（IGP / Vin de Pays、Languedoc AOC、Carignan 頁，2026 年查閱）、SevenFifty Daily（Languedoc 有機，贊助內容）、BKWine（法國有機葡萄園，2024-08-07）。數字一律標註來源與年份；來源有出入者（2025 野火「數十年／逾 70 年來最大」、Mont Tauch 的面積與產量占比、Vin de Pays 立法年份、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "Pays d'Oc IGP、合作社、大宗酒與危機",
    icon: "📈",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Pays d'Oc IGP",
    highlights: [
      { id: 1, icon: "📜", title: "歷史", content: "1987 年成立 Vin de Pays d'Oc，2009 年 8 月 1 日改為 IGP Pays d'Oc（Wine With Seth）" },
      { id: 2, icon: "📏", title: "規模", content: "約 120,000 公頃，涵蓋 Hérault、Aude、Gard、Pyrénées-Orientales；2021 年產 680 萬 hL；准許 58 個品種（Wine With Seth）" },
      { id: 3, icon: "🏷️", title: "品種標示", content: "IGP 標示品種需至少 85% 該品種；所有 IGP 都可標年份（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pays d'Oc 是法國最成功的「品種標示」IGP，也是 Languedoc 出口的主力。</p></div>"
  },
  {
    title: "IGP 制度",
    highlights: [
      { id: 1, icon: "🔁", title: "Vin de Pays 改名", content: "所有 Vin de Pays 於 2009 年 8 月 1 日依歐盟 607/2009 號規則改稱 IGP；150 多個名稱整併為 75 個 IGP 區（Wine With Seth）。Vin de Pays 的立法年份（1973 或 1979）來源寫法不一" },
      { id: 2, icon: "🧱", title: "三層", content: "75 個 IGP = 6 個大區 + 28 個省級 + 41 個小區（Wine With Seth）；Pays d'Oc 屬大區 IGP" },
      { id: 3, icon: "🥉", title: "Vin de France", content: "位於 IGP 之下的最基本等級；可跨產區調配，一般也可標品種與年份（2009 年歐盟改革後）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">IGP 的「自由」是商業彈性，也是品質辨識的挑戰。</p></div>"
  },
  {
    title: "合作社與規模",
    highlights: [
      { id: 1, icon: "🏭", title: "Sieur d'Arques", content: "Limoux 的合作社，1960 至 1985 年間由 35 萬瓶成長到 650 萬瓶（Wine With Seth）" },
      { id: 2, icon: "🏘️", title: "小規模與合作社並存", content: "Terrasses du Larzac 有 3 個合作社、約 90 個獨立酒莊與 3 個酒商（Wine With Seth）" },
      { id: 3, icon: "🧑‍🌾", title: "老化的種植者", content: "Pleinchamp（2024）：Pyrénées-Orientales 每三位農民就有一位年過 60 歲" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">合作社的規模是穩定供應來源，也是價格壓力的傳導通道。</p></div>"
  },
  {
    title: "危機與拔樹",
    highlights: [
      { id: 1, icon: "✂️", title: "永久拔樹方案", content: "Pleinchamp（2024-11-08）：每公頃最高 4,000 歐元、預算上限 1.2 億歐元；Languedoc-Roussillon 約占全國葡萄園四分之一，卻占初步申請的一半以上" },
      { id: 2, icon: "📉", title: "需求面", content: "業界預期法國國內消費未來十年減少 20%；法國蒸餾了 2023 年收成的 10%；Bordeaux 也在拔除約 8,000 公頃" },
      { id: 3, icon: "🌐", title: "出口", content: "Le Journal des Entreprises 標題稱 Languedoc 葡萄酒 2024 年出口下降 6%（本課未取得全文，僅作標題引用，不進測驗）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">危機同時來自氣候（供給）與消費（需求），拔樹只處理其中一端。</p></div>"
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
            question: "Vin de Pays 全面改稱 IGP 的日期？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 2016 年 1 月 1 日","D. 2023 年 11 月 30 日"],
            correct: 0,
            explanation: "2009 年 8 月 1 日（歐盟 607/2009）。"
          },
          {
            type: 'single',
            question: "IGP 標示品種需至少含多少該品種？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85%。"
          },
          {
            type: 'single',
            question: "Pays d'Oc 准許多少個品種？",
            options: ["A. 12","B. 28","C. 58","D. 150"],
            correct: 2,
            explanation: "58 個。"
          },
          {
            type: 'single',
            question: "75 個 IGP 的結構是？",
            options: ["A. 6 大區 + 28 省級 + 41 小區","B. 10 + 10 + 55","C. 75 個全是省級","D. 1 + 74"],
            correct: 0,
            explanation: "6 + 28 + 41 = 75。"
          },
          {
            type: 'single',
            question: "2024 年 11 月永久拔樹方案每公頃補助上限？",
            options: ["A. €400","B. €1,000","C. €4,000","D. €40,000"],
            correct: 2,
            explanation: "最高 4,000 歐元，預算上限 1.2 億歐元。"
          },
          {
            type: 'single',
            question: "Sieur d'Arques 合作社位於哪個產區？",
            options: ["A. Limoux","B. Fitou","C. Maury","D. La Clape"],
            correct: 0,
            explanation: "Limoux。"
          }
        ]
      }
    }
  }
]
