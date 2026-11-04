/**
 * DP-L4-1 加烈的原理與熟成方式
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "加烈的原理與熟成方式",
    subtitle: "什麼時候加烈酒，決定了它會是甜還是乾",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "加烈的時機",
    highlights: [
      { id: 1, icon: "⏸️", title: "發酵中途加烈", content: "在發酵途中加入葡萄烈酒，酵母因高酒精停止工作，未發酵的糖留下來 → 甜型（Port、VDN、Rutherglen Muscat）" },
      { id: 2, icon: "✅", title: "發酵完成後加烈", content: "先發酵到乾，再加烈酒調整酒精 → 乾型基礎（多數 Sherry）；甜型 Sherry 是之後再調入甜酒" },
      { id: 3, icon: "🍇", title: "未發酵就加烈", content: "葡萄汁直接加烈酒、幾乎不發酵，例如南非的 Jerepigo；保留最多葡萄原味與甜度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">加烈時機 = 甜度開關，這是 D5 一切風格分類的起點。</p></div>"
  },
  {
    title: "還原式與氧化式熟成",
    highlights: [
      { id: 1, icon: "🍒", title: "還原式", content: "在大型容器或瓶中、少接觸氧氣，保留新鮮果香與顏色（Ruby Port、Vintage Port、年輕的 VDN Grenat）" },
      { id: 2, icon: "🌰", title: "氧化式", content: "在小木桶中長時間與氧氣接觸，顏色轉為琥珀、出現堅果、焦糖與乾果香（Tawny Port、Oloroso、Madeira、Rivesaltes Tuilé）" },
      { id: 3, icon: "🧫", title: "生物式（酒花下）", content: "Fino 與 Manzanilla 在一層酵母膜（flor）下熟成，酵母隔絕氧氣並消耗甘油與酒精、產生乙醛，帶來杏仁與麵團香；flor 只能在酒精約 15% 左右存活" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">盲品先看顏色與香氣：紅色鮮果 → 還原；琥珀堅果 → 氧化；鹹香杏仁 → flor。</p></div>"
  },
  {
    title: "Solera 與加熱熟成",
    highlights: [
      { id: 1, icon: "🛢️", title: "Solera 系統", content: "木桶分層排列：從最老的一層（solera）取酒裝瓶，再由較年輕的一層（criadera）補滿，依序往上；結果是風格一致、多年份混合的酒，不能標年份" },
      { id: 2, icon: "🔥", title: "加熱熟成", content: "Madeira 以加熱加速氧化：estufagem 把酒加熱到約 45–50°C 至少三個月；canteiro 則放在溫暖的閣樓木桶中多年自然熟成，品質較高。Rutherglen 的倉庫高溫也有類似效果" },
      { id: 3, icon: "💨", title: "蒸發與濃縮", content: "長期木桶熟成會蒸發水分與酒精，使酸、糖與風味濃縮；所以老 Tawny、老 Madeira 與 VORS Sherry 往往酸度鮮明、風味強烈" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">熟成方式是加烈酒價格的主要來源：時間、木桶與蒸發都是成本。</p></div>"
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
            question: "Port 為何是甜的？",
            options: ["A. 發酵後加糖","B. 使用貴腐葡萄","C. 加熱熟成產生糖","D. 發酵中途加烈，酵母停止、留下糖"],
            correct: 3,
            explanation: "加烈時機決定甜度。"
          },
          {
            type: 'single',
            question: "Fino 的熟成屬於哪一種？",
            options: ["A. 生物式（flor 下）","B. 加熱熟成","C. 純還原式瓶陳","D. 二氧化碳浸皮"],
            correct: 0,
            explanation: "flor 隔絕氧氣並產生乙醛。"
          },
          {
            type: 'single',
            question: "Solera 系統的酒為何不能標年份？",
            options: ["A. 酒太年輕","B. 是多年份混合","C. 法律禁止加烈酒標年份","D. 木桶沒有編號"],
            correct: 1,
            explanation: "每次取酒都由較年輕的層補滿。"
          },
          {
            type: 'single',
            question: "estufagem 的加熱溫度大約是？",
            options: ["A. 90–100°C","B. 0°C 以下","C. 45–50°C","D. 10–15°C"],
            correct: 2,
            explanation: "至少三個月。"
          }
        ]
      }
    }
  }
]
