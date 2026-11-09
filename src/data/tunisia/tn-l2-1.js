/**
 * TN-L2-1 法規架構
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規架構",
    subtitle: "新法上路，舊規定卻還在",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "第一套制度（1957–1975）",
    highlights: [
      { id: 1, icon: "📜", title: "1957 年命令", content: "1957 年 1 月 10 日的命令，規範葡萄酒、利口酒（vins de liqueur）與蒸餾酒的原產地名稱" },
      { id: 2, icon: "⚙️", title: "第 58-223 號命令", content: "1958 年 9 月 18 日，訂定 AOC 規範的一般條件。同一天也劃定了兩個蜜思嘉產區" },
      { id: 3, icon: "🏛️", title: "1975 年的兩份文件", content: "1975 年 2 月 19 日第 75-10 號法規範葡萄酒業的組織，種植許可也以它為依據；1975 年 9 月 23 日的部令則劃分「葡萄酒區」（zones viticoles）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這套制度仿照法國的 AOC，由命令定框架，再由部令劃定各產區。</p></div>"
  },
  {
    title: "1999 年第 99-57 號法",
    highlights: [
      { id: 1, icon: "🌾", title: "適用所有農產品", content: "1999 年 6 月 28 日公布，規範農產品的 AOC 與產地標示（indication de provenance），不只葡萄酒，橄欖油與無花果也適用" },
      { id: 2, icon: "🗺️", title: "由部長劃定", content: "第 5 條：產區範圍由農業部長以部令劃定，部令同時規定生產方法、產品性質與特徵" },
      { id: 3, icon: "📋", title: "規格書與登記", content: "第 10 條要求生產者遵守規格書（cahier des charges）。申請通過審查後在官方公報公告，6 個月內無人異議，才登入官方登記簿" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">新法把葡萄酒放進所有農產品共用的制度裡。</p></div>"
  },
  {
    title: "舊規定為什麼還有效",
    highlights: [
      { id: 1, icon: "✂️", title: "第 37 條", content: "第 99-57 號法廢止了 1957 年的命令，但依該命令訂定的施行文件繼續有效，直到被新法的規定取代為止" },
      { id: 2, icon: "📎", title: "2001 年部令的引用", content: "2001 年 2 月 27 日的部令仍引用第 58-223 號命令與 1958 到 1989 年的各 AOC 部令，可見葡萄酒的產區規定仍是舊制度的部令" },
      { id: 3, icon: "🔎", title: "本課程的限制", content: "各 AOC 部令的全文沒有公開在網路上，所以本課程不教各產區的品種、產量與酒精度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">讀突尼西亞法規，要同時看新法與仍然有效的舊部令。</p></div>"
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
            question: "第 99-57 號法的適用範圍是？",
            options: ["A. 只有葡萄酒","B. 只有蒸餾酒","C. 只有出口產品","D. 所有農產品的 AOC 與產地標示"],
            correct: 3,
            explanation: "橄欖油與無花果的 AOC 也依這部法登記。"
          },
          {
            type: 'single',
            question: "依第 99-57 號法，產區範圍由誰劃定？",
            options: ["A. 農業部長以部令劃定","B. 生產者自行公告","C. 國會逐一立法","D. 國際組織"],
            correct: 0,
            explanation: "第 5 條。"
          },
          {
            type: 'single',
            question: "第 99-57 號法第 37 條對舊制度的處理是？",
            options: ["A. 只保留蜜思嘉的規定","B. 廢止 1957 年命令，但施行文件在被取代前仍有效","C. 全部立即失效","D. 舊制度永久有效"],
            correct: 1,
            explanation: "所以 2001 年的部令仍引用 1958 年的命令。"
          },
          {
            type: 'single',
            question: "AOC 申請在官方公報公告後，異議期是多久？",
            options: ["A. 2 年","B. 沒有異議期","C. 6 個月","D. 1 個月"],
            correct: 2,
            explanation: "第 14 條：無人異議才登入官方登記簿。"
          }
        ]
      }
    }
  }
]
