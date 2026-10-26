/**
 * AT-L3-6 Diploma 品飲與論述
 * 事實來源：§ 11 Weingesetz（jusline.at，Prädikatswein）、Starwinelist 與 WineAlign（Sekt Austria）、Winetitles（Sustainable Austria，2025 年 1 月報導）、ÖWM 出口新聞（2024 年，Statistik Austria 暫定數）、Wikipedia。年份標明；來源不一者不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Diploma 品飲與論述",
    subtitle: "Grüner Veltliner 與 Riesling 盲品線索",
    icon: "📝",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "盲品線索（一般性指引）",
    highlights: [
      { id: 1, icon: "🌶️", title: "Grüner Veltliner", content: "常見白胡椒、萊姆、綠色蔬果與草本調；中等至高酸度；Smaragd 級較豐滿" },
      { id: 2, icon: "🍋", title: "Riesling", content: "常見柑橘、桃與礦物感；酸度高；Wachau 片麻岩的酒偏緊緻" },
      { id: 3, icon: "⚠️", title: "提醒", content: "以上是常見傾向而非鐵則；盲品結論要綜合酸度、酒精、香氣與結構，不能只靠單一線索" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這一頁是品飲方法的一般指引，並非法規事實，不進測驗。</p></div>"
  },
  {
    title: "MW 風格論述範本",
    highlights: [
      { id: 1, icon: "1️⃣", title: "定義題目", content: "第一段回應題目關鍵詞，說明範圍與立場" },
      { id: 2, icon: "2️⃣", title: "三條論點", content: "每條論點：主張 → 事實（含年份與數字）→ 因果 → 對產業的意義" },
      { id: 3, icon: "3️⃣", title: "反面與限制", content: "承認限制，例如數據年份或來源差異" },
      { id: 4, icon: "4️⃣", title: "結論", content: "回扣題目，給出有依據的判斷" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">範例題目：「討論 DAC 制度對奧地利品質與品牌的影響。」</p></div>"
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
            question: "MW 論述中每條論點建議的結構是？",
            options: ["A. 只列事實","B. 主張 → 事實 → 因果 → 產業意義","C. 先結論後無說明","D. 只寫個人喜好"],
            correct: 1,
            explanation: "論述需有主張、證據、因果與意義。"
          },
          {
            type: 'single',
            question: "為何不能只靠單一線索盲品下結論？",
            options: ["A. 線索只是常見傾向，需綜合酸度、酒精、香氣與結構","B. 因為規定如此","C. 因為只有一款酒","D. 因為不用寫理由"],
            correct: 0,
            explanation: "單一線索可能誤導。"
          },
          {
            type: 'single',
            question: "論述中承認「數據年份或來源差異」屬於哪一步？",
            options: ["A. 定義題目","B. 三條論點","C. 反面與限制","D. 參考書目"],
            correct: 2,
            explanation: "這屬於反面與限制。"
          }
        ]
      }
    }
  }
]
