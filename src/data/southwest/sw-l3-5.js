/**
 * SW-L3-5 Level 3 綜合評量
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "以模擬題整合全部內容，完成 Level 3",
    icon: "🏆",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🌦️", title: "栽培與氣候", content: "Madiran 年雨量約 1,000 公釐；Cahors 最低 4,000 株／公頃；Jurançon 高架整枝約 2 公尺；Plaimont 1871 年老園" },
      { id: 2, icon: "⚗️", title: "釀造", content: "MOX 1991 年發明、1996 年批准；Madiran 必須去梗；Jurançon 風乾 vs Monbazillac 貴腐；Armagnac 單次連續蒸餾" },
      { id: 3, icon: "📦", title: "市場與法規", content: "Côtes de Gascogne 約 75% 出口；Plaimont 生產 Saint-Mont AOP 的 98%；2009 年 8 月 1 日改稱 IGP；Saint-Mont 與 Tursan 2011 年升 AOC" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積與部分來源不一致的數字，不列入測驗。</p></div>"
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
            question: "Madiran 的年雨量約多少？",
            options: ["A. 300 mm","B. 600 mm","C. 1,000 mm","D. 2,000 mm"],
            correct: 2,
            explanation: "約 1,000 公釐。"
          },
          {
            type: 'single',
            question: "微氧化（MOX）是哪一年在 Madiran 發明的？",
            options: ["A. 1948","B. 1971","C. 1991","D. 2009"],
            correct: 2,
            explanation: "1991 年。"
          },
          {
            type: 'single',
            question: "MOX 通常在哪個階段進行？",
            options: ["A. 酒精發酵與乳酸發酵之間","B. 裝瓶之後","C. 採收前","D. 蒸餾時"],
            correct: 0,
            explanation: "wein.plus。"
          },
          {
            type: 'single',
            question: "Jurançon 的甜酒如何濃縮？",
            options: ["A. 在藤上風乾","B. 貴腐黴","C. 加烈","D. 冷凍"],
            correct: 0,
            explanation: "而非貴腐。"
          },
          {
            type: 'single',
            question: "Armagnac 出蒸餾器時的酒精度約？",
            options: ["A. 20–30%","B. 52–63%","C. 80–90%","D. 95%"],
            correct: 1,
            explanation: "52–63%。"
          },
          {
            type: 'single',
            question: "Côtes de Gascogne 的生產大約多少比例出口？",
            options: ["A. 10%","B. 25%","C. 50%","D. 75%"],
            correct: 3,
            explanation: "約 75%。"
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
            question: "Vin de Pays 全面改稱 IGP 的日期是？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 1936 年 5 月 4 日","D. 2016 年 1 月 1 日"],
            correct: 0,
            explanation: "依歐盟 607/2009 號規則。"
          },
          {
            type: 'single',
            question: "Saint-Mont 與 Tursan 升為 AOC 是哪一年？",
            options: ["A. 1948","B. 1971","C. 2005","D. 2011"],
            correct: 3,
            explanation: "2011 年。"
          },
          {
            type: 'single',
            question: "Madiran 1948 年首份法令要求多久的橡木桶培養？",
            options: ["A. 6 個月","B. 12 個月","C. 20 個月","D. 48 個月"],
            correct: 2,
            explanation: "20 個月（wein.plus）。"
          },
          {
            type: 'single',
            question: "Gaillac Doux 取代了哪些舊稱？",
            options: ["A. Liquoreux 與 Moelleux","B. Primeur 與 Perlé","C. Sec 與 Brut","D. Rancio 與 Vin de Voile"],
            correct: 0,
            explanation: "這兩個舊稱已不再允許。"
          },
          {
            type: 'single',
            question: "Cahors 的規定，每公頃至少種多少株？",
            options: ["A. 1,000","B. 2,500","C. 4,000","D. 10,000"],
            correct: 2,
            explanation: "至少 4,000 株。"
          }
        ]
      }
    }
  }
]
