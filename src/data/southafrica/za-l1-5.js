/**
 * ZA-L1-5 酒款風格、WO 標籤與 Cap Classique
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒款風格、WO 標籤與 Cap Classique",
    subtitle: "85／85／100 與傳統法氣泡酒",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "WO 標籤的三個數字",
    highlights: [
      { id: 1, icon: "📍", title: "產地 100%", content: "標示的產區（從 Geographical Unit 到單一葡萄園）必須 100% 來自該地；跨 Ward 的混釀需標到 District，跨 District 標到 Region，依此類推" },
      { id: 2, icon: "🍇", title: "品種 85%", content: "標示單一品種須至少 85% 來自該品種；若無單一品種達 85%，須依比例由高到低列出全部品種，合計 100%" },
      { id: 3, icon: "📅", title: "年份 85%", content: "標示年份須至少 85% 的葡萄來自該年；非年份酒（如非年份 Cap Classique、加烈酒）不可標示年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">口訣：產地 100、品種 85、年份 85。</p></div>"
  },
  {
    title: "封條與標籤規則",
    highlights: [
      { id: 1, icon: "🎫", title: "WO 封條（bus ticket）", content: "通過化學分析與感官審查後核發，附有獨一編號，貼在瓶頸；可於 SAWIS 網站查詢產地、品種、年份與生產者；2023 年 8 月 1 日起發證機關為 Wine Certification Authority" },
      { id: 2, icon: "🏡", title: "Estate Wine 與單一葡萄園", content: "Estate Wine 的葡萄來自相鄰、作為單一單位耕作的農場，並在莊園內的酒窖釀造與裝瓶；Single Vineyard 須來自單一註冊地塊，面積不得超過 6 公頃" },
      { id: 3, icon: "⚠️", title: "Reserve 沒有法定意義", content: "Reserve、Grand Reserve、Limited Edition 並未規範，沒有標準化的品質意義" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">與歐洲不同，南非的 WO 不限制品種與釀法，重點是產地、品種、年份的真實性。</p></div>"
  },
  {
    title: "Cap Classique",
    highlights: [
      { id: 1, icon: "🫧", title: "定義", content: "南非的瓶內二次發酵（傳統法）氣泡酒；只有符合規定的酒才可標示 Cap Classique" },
      { id: 2, icon: "⏳", title: "最短陳年", content: "現行規定自 2023 年份起至少 12 個月（先前為 9 個月）；基酒須整串壓榨、瓶內壓力至少 3 bar" },
      { id: 3, icon: "📈", title: "成長", content: "2024 年出口中，Cap Classique 的出口值成長 19%，氣泡酒整體成長 34%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cap Classique 的陳年門檻（現行 12 個月）與香檳不同，且規定曾調整（舊為 9 個月），讀舊資料時要留意年份；更細的類別仍在業界討論。</p></div>"
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
            question: "標示單一品種，至少須有多少比例來自該品種？",
            options: ["A. 75%","B. 85%","C. 90%","D. 100%"],
            correct: 1,
            explanation: "品種 85%。"
          },
          {
            type: 'single',
            question: "標示年份，至少須有多少葡萄來自該年？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 1,
            explanation: "年份 85%。"
          },
          {
            type: 'single',
            question: "標示產區（如 Ward），葡萄須有多少比例來自該地？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 3,
            explanation: "各層級都須 100% 來自標示的產地。"
          },
          {
            type: 'single',
            question: "Cap Classique 現行規定（自 2023 年份起）的酒渣陳年至少多久？",
            options: ["A. 3 個月","B. 9 個月","C. 12 個月","D. 36 個月"],
            correct: 2,
            explanation: "自 2023 年份起至少 12 個月；舊規定為 9 個月。"
          }
        ]
      }
    }
  }
]
