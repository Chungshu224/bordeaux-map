/**
 * UY-L2-3 地理標示
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理標示：酒標上的地名",
    subtitle: "第 283/993 號命令與第 17.011 號法",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "第 283/993 號命令第四章",
    highlights: [
      { id: 1, icon: "📄", title: "需要證明", content: "第 15 條：酒標提到地理標示、產區或原產地名稱時，必須有主管機關的證明，確認有權使用" },
      { id: 2, icon: "🗂️", title: "INAVI 的登記冊", content: "第 16 條：INAVI 設有原產地地理標示登記冊，符合條件的葡萄農與酒廠在此登記；進口酒的外國名稱由代理商登記" },
      { id: 3, icon: "🍇", title: "葡萄必須來自當地", content: "第 17 條：只有葡萄產自該區，才能使用地理標示；INAVI 可參考 OIV 的規範訂定補充措施" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">地名不是隨便寫的：要有登記、要有證明，葡萄也要來自當地。</p></div>"
  },
  {
    title: "1998 年第 17.011 號法",
    highlights: [
      { id: 1, icon: "🏷️", title: "三種名稱", content: "地理標示：品質或聲譽主要來自產地；來源標示：只說明產地，不需登記即受保護；原產地名稱：特性完全或主要來自地理環境，包括自然與人為因素" },
      { id: 2, icon: "🏛️", title: "兩個登記冊", content: "第 76 條：工業財產局設地理標示與原產地名稱登記冊，同時保留 INAVI 對國產葡萄酒生產者的登記冊。第 77 條：國產葡萄酒的主管機關是 INAVI" },
      { id: 3, icon: "⏳", title: "十年條款", content: "第 79 條：在 1994 年 4 月 15 日前已連續使用十年以上的葡萄酒或烈酒地理名稱，不受一般禁止規定限制。第 73–79 條在 2018 年由第 19.670 號法修訂" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">第 17.011 號法是商標法，但它把國產葡萄酒的地名交給 INAVI 管。</p></div>"
  },
  {
    title: "沒有歐洲式的分級",
    highlights: [
      { id: 1, icon: "🗺️", title: "區域是介紹用", content: "INAVI 網站把全國分成數個葡萄酒區域來介紹，但本課沒有找到為這些區域劃定界線、規定品種或產量的法規" },
      { id: 2, icon: "🔍", title: "靠登記與證明", content: "在酒標上寫地名，靠的是 INAVI 的登記與證明，而不是 AOC 或 DOC 那樣的分級制度" },
      { id: 3, icon: "⚠️", title: "未查實", content: "哪些地名已經登記、何時登記，本課沒有讀到官方清單，因此不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住順序：證明、登記、葡萄來源。</p></div>"
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
            question: "依第 283/993 號命令，使用地理標示的條件是？",
            options: ["A. 酒廠設在該區即可","B. 酒款曾經得獎","C. 葡萄必須產自該區","D. 標示 VCP 即可"],
            correct: 2,
            explanation: "第 17 條。"
          },
          {
            type: 'single',
            question: "依第 17.011 號法，哪一種名稱不需登記就受保護？",
            options: ["A. 原產地名稱","B. 來源標示（indicación de procedencia）","C. 地理標示","D. 商標"],
            correct: 1,
            explanation: "第 74 條。"
          },
          {
            type: 'single',
            question: "國產葡萄酒的地理標示，主管機關是？",
            options: ["A. INAVI","B. 工業財產局","C. OIV","D. 南方共同市場"],
            correct: 0,
            explanation: "第 17.011 號法第 77 條。"
          }
        ]
      }
    }
  }
]
