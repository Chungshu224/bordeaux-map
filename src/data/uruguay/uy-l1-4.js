/**
 * UY-L1-4 產業結構與市場
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業結構與市場",
    subtitle: "不到 6,000 公頃，三分之二在一個省",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "小而集中的葡萄園",
    highlights: [
      { id: 1, icon: "📏", title: "規模", content: "INAVI 2025 年報：登記葡萄園 1,048 座，總面積 5,797.80 公頃，約 2,041 萬株葡萄樹，由 676 家業者經營" },
      { id: 2, icon: "📍", title: "Canelones 獨大", content: "Canelones 占面積 66.77%、產量 73.87%。其次是 Montevideo（11.98%）、Maldonado（7.39%）、Colonia（4.75%）與 San José（4.51%）" },
      { id: 3, icon: "🍇", title: "收成", content: "同一份年報記錄的葡萄產量約 8,701 萬公斤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">整個國家的葡萄園不到 6,000 公頃，而且三分之二在一個省。</p></div>"
  },
  {
    title: "國家在價格裡的角色",
    highlights: [
      { id: 1, icon: "💲", title: "葡萄最低價", content: "第 18.462 號法規定，行政部門每年訂定釀酒葡萄的最低價格，事前必須聽取 INAVI 對生產成本的意見" },
      { id: 2, icon: "📊", title: "INAVI 的權限", content: "同法授權 INAVI 訂定每個年份國產葡萄酒的上市日期、各品種每公頃的最高產量，以及上市的最低酒精度" },
      { id: 3, icon: "💰", title: "經費", content: "INAVI 靠第 15.903 號法第 149 條設立的葡萄酒推廣與管制費運作，第 18.462 號法要求每年 1 月與 7 月依消費者物價指數調整" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">烏拉圭的葡萄酒市場有很強的公共管理色彩。</p></div>"
  },
  {
    title: "出口與內銷",
    highlights: [
      { id: 1, icon: "🏠", title: "以內銷為主", content: "媒體轉引 INAVI 數據：2025 年葡萄酒產量約 6,216 萬公升；2024 年瓶裝出口約 464 萬公升，和產量相比只是小部分" },
      { id: 2, icon: "🇧🇷", title: "巴西第一", content: "同一報導：2024 年瓶裝出口量巴西占 54%，其次是美國約 14%" },
      { id: 3, icon: "⚠️", title: "數字的來源", content: "出口與釀酒量數字來自新聞報導轉引，年份與統計口徑各不相同。本課只問「最大市場是哪裡」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">鄰國巴西是烏拉圭葡萄酒最重要的出口市場。</p></div>"
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
            question: "哪一省占全國葡萄園面積約三分之二？",
            options: ["A. Maldonado","B. Colonia","C. Salto","D. Canelones"],
            correct: 3,
            explanation: "2025 年為 66.77%。"
          },
          {
            type: 'single',
            question: "依第 18.462 號法，釀酒葡萄的最低價由誰訂定？",
            options: ["A. 酒廠公會","B. 沒有最低價，完全由市場決定","C. 行政部門，事前聽取 INAVI 意見","D. 各省政府"],
            correct: 2,
            explanation: "每年訂定一次。"
          },
          {
            type: 'single',
            question: "依媒體轉引的 INAVI 資料，2024 年瓶裝酒最大的出口市場是？",
            options: ["A. 美國","B. 巴西","C. 英國","D. 中國"],
            correct: 1,
            explanation: "約占 54%。"
          }
        ]
      }
    }
  }
]
