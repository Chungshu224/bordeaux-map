/**
 * MA-L2-5 總複習與綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "總複習與綜合評量",
    subtitle: "能比較、能解釋、也能標出不確定之處",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "最常混淆的比較",
    highlights: [
      { id: 1, icon: "⚖️", title: "AOG 與 AOC", content: "AOG 自然酒精至少 12 度、禁止增糖、原則不灌溉、產量每年訂；AOC 位於 AOG 內，規定各自成冊，可限期灌溉" },
      { id: 2, icon: "🛣️", title: "Guerrouane 與 Beni-M'Tir", content: "Meknès–El Hajeb 公路的西與東；AOC Coteaux de l'Atlas 在東側" },
      { id: 3, icon: "🌄", title: "Coteaux de l'Atlas 與 Côtes de Rommani", content: "產量上限都是 60 hl/ha；Rommani 酒精門檻高半度，還要手採與棚架" },
      { id: 4, icon: "🌍", title: "法規與現實", content: "法規偏好國際品種，全國種植仍以 Cinsault 等傳統品種為主；Essaouira 等 AOG 外產區也能出好酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">把每組比較說得出來，就算掌握了本課程。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 總評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "摩洛哥 AOG 依 ONSSA 共有幾個？",
            options: ["A. 21 個","B. 14 個","C. 5 個","D. 3 個"],
            correct: 1,
            explanation: "5 是教學分區，3 是 ONSSA 頁面列的 AOC。"
          },
          {
            type: 'single',
            question: "AOC Les Coteaux de l'Atlas 位於哪個 AOG？",
            options: ["A. Zaër","B. Saïs","C. Beni-M'Tir","D. Guerrouane"],
            correct: 2,
            explanation: "部令第 1957-98 號第 1 條。"
          },
          {
            type: 'single',
            question: "Les Coteaux de l'Atlas 的產量上限是？",
            options: ["A. 40 hl/ha","B. 80 hl/ha","C. 100 hl/ha","D. 60 hl/ha"],
            correct: 3,
            explanation: "每年可依收成調整。"
          },
          {
            type: 'single',
            question: "Coteaux de l'Atlas 紅酒要求至少 2/3 的是哪一組？",
            options: ["A. Cabernet Sauvignon、Merlot、Syrah、Tempranillo","B. Carignan、Cinsault、Grenache","C. Chardonnay、Sauvignon Blanc、Vermentino","D. Ugni Blanc、Clairette"],
            correct: 0,
            explanation: "部令第 1957-98 號第 2 條。"
          },
          {
            type: 'single',
            question: "AOC 的共同規定中，禁止使用的設備是？",
            options: ["A. 有孔的採收箱","B. 連續式壓榨機與螺旋輸送機","C. 不鏽鋼槽","D. 冷卻設備"],
            correct: 1,
            explanation: "部令第 1955-98 號第 3 條，不鏽鋼與冷卻反而是要求。"
          },
          {
            type: 'single',
            question: "全國委員會未分級的 AOC 酒可以標「1er cru」嗎？",
            options: ["A. 可以，只要手採","B. 可以，只要陳年 5 年","C. 不行","D. 可以，AOC 都能標"],
            correct: 2,
            explanation: "須為特定風土的 AOC、品質有傳統認可並經委員會分級。"
          },
          {
            type: 'single',
            question: "摩洛哥酒標上可以寫「Vin de pays」嗎？",
            options: ["A. 可以，所有酒都能用","B. 只有 AOG 能用","C. 只有出口酒能用","D. 不行，法規明文禁止"],
            correct: 3,
            explanation: "部令第 869-75 號第 6 條。"
          },
          {
            type: 'short',
            question: "簡答：比較摩洛哥 AOG 與 AOC 的主要差異。",
            points: [
              "AOC 必須位於 AOG 區域內",
              "AOG 自然酒精至少 12 度且禁止增糖；AOC 在極差年份可獲准增糖",
              "AOG 產量每年訂定；AOC 如 Coteaux de l'Atlas 訂有 60 hl/ha 上限",
              "AOG 原則不灌溉；AOC 可灌溉到規定日期"
            ],
            model: "AOC 位於 AOG 之內，並有各自的品種、糖度、產量與種植規定。AOG 要求自然酒精至少 12 度並禁止增糖，原則不灌溉，產量每年訂定；AOC 則訂有明確上限，可限期灌溉，極差年份可獲准增糖。",
            minPoints: 2
          },
          {
            type: 'short',
            question: "簡答：為什麼摩洛哥在 1950 年代產量很高，1990 年代初卻陷入低點？",
            points: [
              "法國時期為出口而大規模種植",
              "1967 年歐洲經濟共同體配額使出口市場縮小",
              "國有化與固定收購價使品質缺乏誘因",
              "葡萄園老化或染病"
            ],
            model: "法國時期的葡萄園主要為出口而種。獨立後，1967 年的配額使市場縮小，後來國有化與固定收購價又讓品質缺乏誘因，葡萄園因此老化，到 1990 年代初跌到低點。",
            minPoints: 2
          }
        ]
      }
    }
  }
]
