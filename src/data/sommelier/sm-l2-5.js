/**
 * SM-L2-5 Level 2 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "原料、蒸餾、熟成、法規：烈酒的四個問題",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "⚗️", title: "原理", content: "壺式保留風味、連續式較純淨；只取酒心；橡木帶來萃取、去除、氧化與蒸發；年數為最年輕成分；熱帶熟成較快" },
      { id: 2, icon: "🥃", title: "威士忌", content: "Scotch 3 年、40%、五個產區、Islay 泥煤；Irish 3 年、Single Pot Still；Bourbon 51% 玉米、全新炭化桶；Tennessee 楓木炭過濾；日本 2021 年標準" },
      { id: 3, icon: "🌵", title: "其他烈酒", content: "Rhum agricole 用甘蔗汁（Martinique AOC 1996）；Tequila 用 Blue Weber、mixto 至少 51%、Reposado／Añejo／Extra Añejo；Mezcal 地坑烘烤；London Dry 是製法；利口酒一般至少 100 g/L 糖" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 口試常問「某烈酒的原料與主要法規」：先答原料，再答蒸餾與熟成。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "連續式蒸餾最典型的風格是？",
            options: ["A. 厚重油潤","B. 煙燻","C. 甜","D. 輕盈純淨"],
            correct: 3,
            explanation: "伏特加與穀物威士忌多用連續式。"
          },
          {
            type: 'single',
            question: "下列哪一個不是 Scotch 受保護的產區？",
            options: ["A. Kentucky","B. Speyside","C. Islay","D. Campbeltown"],
            correct: 0,
            explanation: "五個：Highland、Lowland、Speyside、Campbeltown、Islay。"
          },
          {
            type: 'single',
            question: "Straight Bourbon 至少熟成多久？",
            options: ["A. 10 年","B. 2 年","C. 3 年","D. 6 個月"],
            correct: 1,
            explanation: "Scotch 與 Irish 則是 3 年。"
          },
          {
            type: 'single',
            question: "Single Pot Still 是哪個國家的獨特風格？",
            options: ["A. 美國","B. 日本","C. 愛爾蘭","D. 蘇格蘭"],
            correct: 2,
            explanation: "混合發芽與未發芽大麥。"
          },
          {
            type: 'single',
            question: "Tequila mixto 至少要有多少龍舌蘭糖？",
            options: ["A. 100%","B. 10%","C. 85%","D. 51%"],
            correct: 3,
            explanation: "100% agave 則全用龍舌蘭糖。"
          },
          {
            type: 'single',
            question: "Tequila Reposado 的熟成期是？",
            options: ["A. 2 個月以上、未滿 1 年","B. 3 年以上","C. 不熟成","D. 至少 5 年"],
            correct: 0,
            explanation: "Añejo 為 1 年以上。"
          },
          {
            type: 'single',
            question: "London Dry Gin 蒸餾後可以加入什麼？",
            options: ["A. 大量糖","B. 水與極少量糖（≤0.1 g/L）","C. 色素","D. 人工香料"],
            correct: 1,
            explanation: "調味只能來自再蒸餾的天然植物。"
          },
          {
            type: 'single',
            question: "「Crème de」利口酒的最低含糖量是？",
            options: ["A. 每公升 400 公克","B. 每公升 10 公克","C. 每公升 250 公克","D. 每公升 100 公克"],
            correct: 2,
            explanation: "Crème de cassis 則至少 400 公克。"
          }
        ]
      }
    }
  }
]
