/**
 * US-L1-5 AVA 制度與標籤
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "AVA 制度與標籤",
    subtitle: "定義、比例與 Oregon 的州法",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "AVA 是什麼",
    highlights: [
      { id: 1, icon: "🗺️", title: "第一個 AVA", content: "Augusta（Missouri）於 1980 年 6 月 20 日成為第一個由聯邦確立的葡萄栽培區" },
      { id: 2, icon: "🏛️", title: "主管機關", content: "1980 年起由 ATF 劃定；2003 年 1 月依國土安全法改由 TTB 負責" },
      { id: 3, icon: "🪆", title: "可以巢狀", content: "AVA 可包含在更大的 AVA 之內，酒廠通常標示適用的最具體 AVA" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">AVA 只界定地理範圍，不規定品種或釀法——這是它與歐洲 AOC 最大的差別。</p></div>"
  },
  {
    title: "聯邦標示比例",
    highlights: [
      { id: 1, icon: "🧮", title: "產地比例", content: "AVA 至少 85% 的葡萄來自該 AVA；州或郡至少 75%；酒須在該州完成釀造" },
      { id: 2, icon: "🍇", title: "品種與年份", content: "標示品種須有產地標示；美國品種標示最低 75%。年份：有 AVA 時 85%，只標州、郡或國時 75%" },
      { id: 3, icon: "🏡", title: "Estate Bottled", content: "須 100% 來自酒廠擁有或控制的土地，且酒廠與葡萄園在 AVA 內，並在酒廠內完成壓榨、發酵、陳年與裝瓶" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住三個數字：AVA 85、州／郡 75、品種 75。</p></div>"
  },
  {
    title: "Oregon 的州法",
    highlights: [
      { id: 1, icon: "🔟", title: "90% 品種標示", content: "Oregon 品種標示須含至少 90%（如 Pinot Noir、Chardonnay、Pinot Gris）" },
      { id: 2, icon: "🚪", title: "例外", content: "約 18 個品種例外，適用聯邦 75%，包括 Cabernet Sauvignon、Sauvignon Blanc、Syrah" },
      { id: 3, icon: "📍", title: "Oregon 產地", content: "標示 Oregon、郡或 Oregon 的 AVA 時，100% 的葡萄須來自 Oregon，且 95% 來自所標示的產區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Oregon 比聯邦更嚴：產地 95%、品種 90%（有例外）。</p></div>"
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
            question: "聯邦規定 AVA 標示至少需多少比例來自該 AVA？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 1,
            explanation: "85%。"
          },
          {
            type: 'single',
            question: "聯邦規定標示州或郡產地至少需多少比例？",
            options: ["A. 51%","B. 75%","C. 85%","D. 95%"],
            correct: 1,
            explanation: "75%。"
          },
          {
            type: 'single',
            question: "Oregon 品種標示的一般最低比例是？",
            options: ["A. 75%","B. 85%","C. 90%","D. 100%"],
            correct: 2,
            explanation: "90%，約 18 個品種例外。"
          },
          {
            type: 'single',
            question: "標示 Oregon 的 AVA 時，需有多少比例來自該產區？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 2,
            explanation: "95%（且 100% 來自 Oregon）。"
          },
          {
            type: 'single',
            question: "第一個聯邦 AVA 是哪一個？",
            options: ["A. Napa Valley","B. Augusta","C. Willamette Valley","D. Finger Lakes"],
            correct: 1,
            explanation: "Augusta（Missouri），1980 年。"
          }
        ]
      }
    }
  }
]
