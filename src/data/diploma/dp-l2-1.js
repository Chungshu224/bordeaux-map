/**
 * DP-L2-1 成本結構與定價
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "成本結構與定價",
    subtitle: "貨架上的價格，只有一部分是酒本身",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "一瓶酒的成本",
    highlights: [
      { id: 1, icon: "🌱", title: "葡萄園成本", content: "土地與種植的資本支出、人工、農藥與設備；陡坡與手工作業（Mosel、Douro、Wachau）每公頃成本遠高於可機械化的平地，低產又讓每瓶分攤更多" },
      { id: 2, icon: "🏭", title: "酒廠與熟成成本", content: "設備、能源、橡木桶（新桶很貴）、陳年期間的資金與倉儲；陳年越久，資金被綁住越久，這是 Vintage Port、Barolo、香檳 Prestige 價格高的原因之一" },
      { id: 3, icon: "📦", title: "包裝、運輸與稅", content: "瓶、塞、標籤、紙箱與運費在便宜酒中占比最高；許多市場（如英國）的酒稅是按瓶或按酒精計的固定金額，所以低價酒裡「酒」的價值比例非常低" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">固定成本（稅、包裝）讓價格越低的酒越「不划算」，也讓溢價酒的酒本身價值比例越高。</p></div>"
  },
  {
    title: "價格鏈上的加成",
    highlights: [
      { id: 1, icon: "🔗", title: "從酒莊到消費者", content: "出廠價 → 進口商或批發商加成 → 零售或餐廳加成 → 稅；每一層都要賺錢，所以出廠價與貨架價常差好幾倍" },
      { id: 2, icon: "🍽️", title: "餐飲通路的加成", content: "餐廳要負擔服務、杯具、庫存與場地，通常比零售加成更高；高價酒常用較低的倍數，以免價格嚇跑客人" },
      { id: 3, icon: "📉", title: "散裝與瓶裝", content: "散裝酒以公升計價、利潤薄，在目的地市場裝瓶可省運費與玻璃重量；瓶裝酒能建立品牌與溢價。南非、智利出口「量靠散裝、值靠瓶裝」就是這個邏輯" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述價格時，先問「這筆錢在價格鏈的哪一層被拿走」。</p></div>"
  },
  {
    title: "定價策略",
    highlights: [
      { id: 1, icon: "🧮", title: "成本加成定價", content: "成本加上固定利潤，簡單但忽略市場願付價格；常見於大宗與自有品牌酒" },
      { id: 2, icon: "💎", title: "價值與聲望定價", content: "依消費者感知的價值定價：評分、稀少性、品牌歷史與分級（如 Bordeaux 列級酒莊、Grand Cru）讓價格遠高於成本；過低反而損害形象" },
      { id: 3, icon: "🎯", title: "價格帶與定位", content: "零售常以心理價位分層（如英國的 £5、£10、£20）；品牌必須選定價格帶並長期維持，頻繁促銷會讓消費者只在打折時購買" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 商業題的核心：價格是「成本、競爭與感知價值」三者的妥協。</p></div>"
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
            question: "為什麼在按瓶課稅的市場，低價酒裡「酒本身」的價值比例很低？",
            options: ["A. 便宜酒的葡萄比較貴","B. 稅與包裝是固定成本，占比很高","C. 便宜酒的酒精較高","D. 便宜酒不用運費"],
            correct: 1,
            explanation: "固定成本在低價酒中被攤得最重。"
          },
          {
            type: 'single',
            question: "長期陳年為何推高價格？",
            options: ["A. 陳年會增加酒量","B. 陳年酒不需要包裝","C. 資金與倉儲被綁住更久","D. 陳年酒不用課稅"],
            correct: 2,
            explanation: "資金成本與倉儲成本都要反映在售價。"
          },
          {
            type: 'single',
            question: "在目的地市場裝瓶的散裝酒，主要優勢是？",
            options: ["A. 能賣出最高溢價","B. 免除所有稅","C. 必須是單一園","D. 節省運費與玻璃重量"],
            correct: 3,
            explanation: "散裝利潤薄，靠物流效率取勝。"
          },
          {
            type: 'single',
            question: "頂級列級酒莊的價格主要依據哪種策略？",
            options: ["A. 價值與聲望定價","B. 成本加成定價","C. 散裝報價","D. 固定促銷價"],
            correct: 0,
            explanation: "稀少性、評分與歷史讓價格遠高於成本。"
          }
        ]
      }
    }
  }
]
