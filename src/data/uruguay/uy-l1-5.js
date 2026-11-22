/**
 * UY-L1-5 Level 1 綜合複習
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合複習",
    subtitle: "風土、歷史、品種與產業",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "四個關鍵數字",
    highlights: [
      { id: 1, icon: "📏", title: "5,797.80 公頃", content: "2025 年全國登記面積，其中 Canelones 占 66.77%" },
      { id: 2, icon: "🍇", title: "26.5%", content: "Tannat 的面積占比，排第一；漢堡蜜思嘉約 17.2% 排第二" },
      { id: 3, icon: "🌧️", title: "約 751 毫米", content: "9 月到 3 月的生長季平均雨量，北多南少" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字之外，記得濕潤的生長季與大西洋的調節。</p></div>"
  },
  {
    title: "四個年份",
    highlights: [
      { id: 1, icon: "🍇", title: "1874", content: "Harriague 從 Concordia 引進「Lorda」（文化遺產日手冊）" },
      { id: 2, icon: "⚖️", title: "1903", content: "第 2.856 號法，葡萄酒業的母法" },
      { id: 3, icon: "🏛️", title: "1987 與 2014", content: "第 15.903 號法設立 INAVI；第 171/014 號命令宣布葡萄酒為國家飲料" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">準備好就開始評量。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "依 2024 年文化遺產日手冊，Harriague 在哪一年從 Concordia 引進「Lorda」？",
            options: ["A. 1874 年","B. 1838 年","C. 1903 年","D. 1987 年"],
            correct: 0,
            explanation: "1838 年是他到 Montevideo 的年份。"
          },
          {
            type: 'single',
            question: "Harriague 的葡萄園在哪個地區？",
            options: ["A. Colón","B. Colonia","C. Maldonado","D. 北部的 Salto"],
            correct: 3,
            explanation: "Vidiella 則在南部的 Colón。"
          },
          {
            type: 'single',
            question: "INAVI 把哪一部法律稱為葡萄酒業的母法？",
            options: ["A. 1987 年第 15.903 號法","B. 1998 年第 17.011 號法","C. 1903 年第 2.856 號法","D. 2009 年第 18.462 號法"],
            correct: 2,
            explanation: "它讓國家掌握葡萄酒業的管理與稽查。"
          },
          {
            type: 'single',
            question: "哪一份文件宣布葡萄酒為國家飲料？",
            options: ["A. 1903 年第 2.856 號法","B. 2014 年第 171/014 號命令","C. 1993 年第 283/993 號命令","D. 1998 年第 17.011 號法"],
            correct: 1,
            explanation: "國產酒標必須提到這一點。"
          },
          {
            type: 'single',
            question: "Tannat 約占全國葡萄園面積多少？",
            options: ["A. 約四分之一（26.5%）","B. 約一成","C. 約一半","D. 超過七成"],
            correct: 0,
            explanation: "2025 年約 1,536 公頃。"
          },
          {
            type: 'single',
            question: "葡萄園面積排名第三的省是？",
            options: ["A. Colonia","B. San José","C. Salto","D. Maldonado"],
            correct: 3,
            explanation: "7.39%，在 Canelones 與 Montevideo 之後。"
          },
          {
            type: 'single',
            question: "為什麼烏拉圭的年份差異大？",
            options: ["A. 因為葡萄園海拔很高","B. 因為沒有海洋影響","C. 生長季也下雨，而且受聖嬰與反聖嬰影響","D. 因為全年乾燥"],
            correct: 2,
            explanation: "例如 2023 年乾熱、2024 年多雨。"
          },
          {
            type: 'single',
            question: "INAVI 的法定所在地在哪裡？",
            options: ["A. Montevideo 市中心","B. Canelones 省的 Las Piedras","C. Salto","D. Colonia del Sacramento"],
            correct: 1,
            explanation: "INAVI 的歷史頁面如此記載。"
          }
        ]
      }
    }
  }
]
