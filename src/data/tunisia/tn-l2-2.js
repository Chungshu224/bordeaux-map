/**
 * TN-L2-2 七個 AOC 與設立年代
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "七個 AOC 與設立年代",
    subtitle: "2001 年的部令列出了全部的設立部令",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "七個 AOC",
    highlights: [
      { id: 1, icon: "🍷", title: "名單", content: "Mornag、Grand Cru Mornag、Coteaux de Tébourba、Sidi Salem、Kélibia、Thibar、Coteaux d'Utique" },
      { id: 2, icon: "🌼", title: "蜜思嘉名稱", content: "Kélibia 另有「Muscat de Kélibia」「Vin Muscat de Kélibia」，Thibar 另有「Muscat de Thibar」。它們是同一產區的蜜思嘉名稱，一般不另算一個 AOC" },
      { id: 3, icon: "📄", title: "官方依據", content: "2001 年 2 月 27 日的部令開頭，依序列出各 AOC 的設立部令與修訂日期。「七個」是常見的算法，部令本身沒有寫總數" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先背七個名字，再依年代排序。</p></div>"
  },
  {
    title: "1958 到 1977 年",
    highlights: [
      { id: 1, icon: "1️⃣", title: "1958：蜜思嘉先行", content: "9 月 18 日的部令劃定 Muscat de Kélibia 與 Muscat de Thibar" },
      { id: 2, icon: "2️⃣", title: "1973：Tébourba、Sidi Salem 與 Mornag", content: "7 月 23 日設立 Coteaux de Tébourba 與 Sidi Salem。同年 5 月 19 日，Mornag 先以 VDQS（優良地區餐酒）設立" },
      { id: 3, icon: "3️⃣", title: "1976–1977", content: "1976 年 2 月 11 日設立 Kélibia 與 Thibar；1977 年 7 月 27 日設立 Grand Cru Mornag，並重新規範「Thibar」與「Muscat de Thibar」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Kélibia 與 Thibar 都是 1958 年先有蜜思嘉的部令，1976 年再各有一份 AOC 部令。兩份部令如何分工，本課程沒有讀到原文。</p></div>"
  },
  {
    title: "1980 到 1999 年",
    highlights: [
      { id: 1, icon: "4️⃣", title: "1980：Coteaux d'Utique", content: "1980 年 4 月 14 日設立，1986 年 3 月 14 日修訂。同一天也修訂了 Sidi Salem 與 Thibar" },
      { id: 2, icon: "5️⃣", title: "1989：Mornag 成為 AOC", content: "1989 年 3 月 16 日的部令規範 AOC Mornag，1999 年 10 月 2 日修訂。Mornag 從 VDQS 走到 AOC，是最晚的一個" },
      { id: 3, icon: "🏆", title: "Grand Cru Mornag", content: "1977 年就已設立，比 AOC Mornag 早十二年。名稱裡的「Grand Cru」是產區名稱的一部分" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">最早是蜜思嘉（1958），最晚是 Mornag（1989）。</p></div>"
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
            question: "最早設立的法定產區是哪一年？",
            options: ["A. 1973 年","B. 1999 年","C. 1958 年","D. 1947 年"],
            correct: 2,
            explanation: "Muscat de Kélibia 與 Muscat de Thibar，都是 9 月 18 日。"
          },
          {
            type: 'single',
            question: "Mornag 在 1973 年是以什麼身分設立？",
            options: ["A. AOC","B. Grand Cru","C. 產地標示","D. VDQS"],
            correct: 3,
            explanation: "1989 年才以部令成為 AOC。"
          },
          {
            type: 'single',
            question: "Coteaux d'Utique 設立於哪一年？",
            options: ["A. 1980 年","B. 1958 年","C. 1973 年","D. 1989 年"],
            correct: 0,
            explanation: "1980 年 4 月 14 日，1986 年修訂。"
          },
          {
            type: 'single',
            question: "Grand Cru Mornag 與 AOC Mornag 的先後是？",
            options: ["A. Grand Cru Mornag 尚未設立","B. Grand Cru Mornag 早了十二年","C. AOC Mornag 早了十二年","D. 同一年"],
            correct: 1,
            explanation: "Grand Cru Mornag 是 1977 年，AOC Mornag 是 1989 年。"
          }
        ]
      }
    }
  }
]
