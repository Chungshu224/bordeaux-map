/**
 * UY-L2-1 法規架構
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規架構",
    subtitle: "從 1903 年的母法到 2009 年的 INAVI 改組",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "三部法律",
    highlights: [
      { id: 1, icon: "📜", title: "1903 年第 2.856 號法", content: "母法，讓國家管理與稽查葡萄酒業。第 18.462 號法改寫它的第 11 條：國產與進口的葡萄酒產品都可由 INAVI 檢驗" },
      { id: 2, icon: "🏛️", title: "1987 年第 15.903 號法", content: "從第 141 條起設立 INAVI；第 149 條設立葡萄酒推廣與管制費，作為 INAVI 的財源" },
      { id: 3, icon: "🔁", title: "2009 年第 18.462 號法", content: "1 月 8 日公布，改寫第 15.903 號法中 INAVI 的條文，並在第 15 條列出 INAVI 的具體權限" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀烏拉圭法規，先分清母法、設立法與改組法。</p></div>"
  },
  {
    title: "INAVI 能決定什麼",
    highlights: [
      { id: 1, icon: "🗓️", title: "上市日期", content: "第 18.462 號法第 15 條：INAVI 可訂定每個年份國產葡萄酒開始銷售與流通的日期" },
      { id: 2, icon: "🌾", title: "產量上限", content: "INAVI 可訂定各品種每公頃的最高葡萄產量" },
      { id: 3, icon: "🧪", title: "酒精與釀酒產品", content: "也可訂定上市葡萄酒的最低酒精度，以及可用來修正的釀酒產品；同條還要求推廣與管制費每年 1 月與 7 月依消費者物價指數調整" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些權限讓 INAVI 同時是管理者與推廣者。</p></div>"
  },
  {
    title: "誰來治理",
    highlights: [
      { id: 1, icon: "🧑‍⚖️", title: "董事會", content: "2009 年起由 Directorio 領導。過渡條款要求部會指派政府代表，並請業界團體提名民間代表" },
      { id: 2, icon: "🗣️", title: "諮詢委員會", content: "榮譽性質。成員來自生產者與葡萄農團體、釀酒師協會、共和國大學、INIA、農場總局與烏拉圭釀酒學校，每年至少與董事會開會兩次" },
      { id: 3, icon: "🧬", title: "同位素資料庫", content: "第 18.462 號法第 12 條：同位素比值資料庫專屬 INAVI；檢驗結果有爭議時，當事人可付費重驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">政府與業界共同治理，是烏拉圭葡萄酒制度的特色。</p></div>"
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
            question: "第 18.462 號法授權 INAVI 訂定什麼？",
            options: ["A. 各品種每公頃的最高產量","B. 每家酒廠的售價","C. 可出口的國家","D. 酒標的顏色"],
            correct: 0,
            explanation: "第 15 條。"
          },
          {
            type: 'single',
            question: "葡萄酒推廣與管制費每年何時依物價調整？",
            options: ["A. 只有 12 月","B. 每季一次","C. 不調整","D. 1 月與 7 月"],
            correct: 3,
            explanation: "依消費者物價指數調整。"
          },
          {
            type: 'single',
            question: "諮詢委員會每年至少與董事會開會幾次？",
            options: ["A. 1 次","B. 4 次","C. 2 次","D. 12 次"],
            correct: 2,
            explanation: "第 18.462 號法第 8 條。"
          }
        ]
      }
    }
  }
]
