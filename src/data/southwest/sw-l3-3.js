/**
 * SW-L3-3 產業與市場
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "合作社、大宗 IGP、出口與烈酒市場",
    icon: "📦",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "合作社的力量",
    highlights: [
      { id: 1, icon: "🤝", title: "Plaimont", content: "Decanter：約 800 位成員、5,300 公頃；生產 Saint-Mont AOP 的 98%、Madiran 與 Pacherenc du Vic-Bilh 的過半，以及 Côtes de Gascogne IGP 的近半（資料較舊）" },
      { id: 2, icon: "🥂", title: "日常款的規模", content: "同篇報導：入門白酒 Colombelle L'Original 年產約 500 萬瓶" },
      { id: 3, icon: "📉", title: "背景", content: "André Dubosc 於 1973 年加入時，因 Armagnac 用白基酒需求崩跌，區內酒產量正在下滑（Decanter）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">合作社在偏遠地區保住了品種與產量。</p></div>"
  },
  {
    title: "Côtes de Gascogne：大宗出口",
    highlights: [
      { id: 1, icon: "🌐", title: "出口導向", content: "Wikipedia：生產潛力逾 1 億瓶、75% 出口；Wine Folly 亦記載約 75% 的白、紅與粉紅酒外銷" },
      { id: 2, icon: "📏", title: "規模與擴大", content: "Gers 近 12,000 公頃，約占該區三分之二；2005 年擴大後總面積達 15,000 公頃（Wikipedia）" },
      { id: 3, icon: "⚪", title: "白酒比例說法不同", content: "Wikipedia 記載 Gers 產量為 91% 白、8% 紅、1% 粉紅；Wine With Seth 則稱約 85% 為白酒，故比例不考" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是「品種酒」與大宗出口的模式。</p></div>"
  },
  {
    title: "Armagnac 與出口",
    highlights: [
      { id: 1, icon: "🌏", title: "主要市場", content: "Drinks International（2021 年）：美國是 Armagnac 第二大出口市場，僅次於中國；以量計中國居首" },
      { id: 2, icon: "💶", title: "關稅衝擊", content: "美國對部分歐洲烈酒加徵 25% 關稅，€100 的酒窖價到美國變成 €125；BNIA 數據：2020 年對美出口量下降 11%、對中國下降近 31%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些是 2020–2021 年的情況，不代表現況。</p></div>"
  },
  {
    title: "其他市場面向",
    highlights: [
      { id: 1, icon: "🛒", title: "Cahors 的出口", content: "約 25% 外銷，2004 至 2013 年出口量翻倍（Wine With Seth）；與阿根廷 Malbec 的合作從 2007 年開始" },
      { id: 2, icon: "💰", title: "價格帶", content: "Madiran 從約 €10 的合作社酒到逾 €100 的頂級單一園酒款（Wine With Seth）" },
      { id: 3, icon: "🧭", title: "地理不便", content: "Decanter 的 Jefford 指出 Plaimont 一帶距 Bordeaux 或 Toulouse 至少兩小時車程，這項劣勢被轉化為特色" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">西南產區的定位是「價值」與「獨特」，而非規模。</p></div>"
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
            question: "Côtes de Gascogne 的生產大約多少比例出口？",
            options: ["A. 10%","B. 25%","C. 50%","D. 75%"],
            correct: 3,
            explanation: "約 75%（Wikipedia、Wine Folly）。"
          },
          {
            type: 'single',
            question: "Côtes de Gascogne 於 2005 年擴大後的總面積約？",
            options: ["A. 3,000 ha","B. 8,000 ha","C. 15,000 ha","D. 60,000 ha"],
            correct: 2,
            explanation: "約 15,000 公頃（Wikipedia）。"
          },
          {
            type: 'single',
            question: "Plaimont 生產的 Saint-Mont AOP 比例（Decanter）？",
            options: ["A. 10%","B. 25%","C. 50%","D. 98%"],
            correct: 3,
            explanation: "98%。"
          },
          {
            type: 'single',
            question: "Armagnac 第二大出口市場是？（2021 年報導）",
            options: ["A. 美國","B. 中國","C. 日本","D. 英國"],
            correct: 0,
            explanation: "中國居首（Drinks International）。"
          },
          {
            type: 'single',
            question: "美國對部分歐洲烈酒加徵的關稅是？",
            options: ["A. 5%","B. 10%","C. 25%","D. 100%"],
            correct: 2,
            explanation: "25%。"
          },
          {
            type: 'single',
            question: "Cahors 約有多少比例外銷（Wine With Seth）？",
            options: ["A. 5%","B. 25%","C. 60%","D. 90%"],
            correct: 1,
            explanation: "約 25%。"
          }
        ]
      }
    }
  }
]
