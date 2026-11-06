/**
 * SM-L3-3 啤酒
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "啤酒",
    subtitle: "麥芽、啤酒花、酵母與水：四種原料，無數風格",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "原料與發酵",
    highlights: [
      { id: 1, icon: "🌾", title: "麥芽", content: "發芽後烘乾的大麥（或小麥）提供可發酵的糖；烘焙程度決定顏色與風味，從淡色的餅乾香到深色的咖啡、巧克力香" },
      { id: 2, icon: "🌿", title: "啤酒花", content: "帶來苦味、香氣（柑橘、松木、花香、熱帶水果）並有防腐作用；苦度常以 IBU 表示" },
      { id: 3, icon: "🧫", title: "Ale 與 Lager", content: "Ale 用上層發酵酵母、較溫暖發酵，果香與酯類較多；Lager 用下層發酵酵母、低溫發酵並低溫儲存，風格乾淨清爽。歷史上 1516 年巴伐利亞純釀法規定只用水、大麥與啤酒花" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先分 Ale 或 Lager，再看麥芽烘焙與啤酒花：這就是啤酒的風格地圖。</p></div>"
  },
  {
    title: "主要風格與侍飲",
    highlights: [
      { id: 1, icon: "🍺", title: "Lager 家族", content: "Pilsner 源自 1842 年捷克 Plzeň，淡金色、啤酒花香明顯、清爽；德國、捷克還有 Helles、Bock 等不同強度與顏色的拉格" },
      { id: 2, icon: "🍻", title: "Ale 家族", content: "IPA 啤酒花香與苦味強；Stout 與 Porter 以烘焙大麥或深色麥芽帶來咖啡、巧克力香；德國小麥啤酒（Hefeweizen）以酵母帶來香蕉與丁香香；比利時 Trappist 由修道院釀造" },
      { id: 3, icon: "🍒", title: "自然發酵與侍飲", content: "比利時 Lambic 以空氣中的野生酵母與細菌自然發酵，酸而複雜；Gueuze 混合新舊 Lambic，Kriek 加入櫻桃。侍飲上 Lager 較冰（約 3–7°C），風味強的 Ale 稍高（約 7–13°C）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">酒單上的啤酒也需要描述與搭配：風格、苦度、酒精與溫度。</p></div>"
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
            question: "Ale 與 Lager 最主要的差別是？",
            options: ["A. 酵母類型與發酵溫度","B. 是否使用麥芽","C. 顏色","D. 產地"],
            correct: 0,
            explanation: "Ale 上層發酵較溫暖，Lager 下層發酵較低溫。"
          },
          {
            type: 'single',
            question: "Pilsner 的發源地是？",
            options: ["A. 英國 London","B. 捷克 Plzeň","C. 德國 Munich","D. 比利時 Brussels"],
            correct: 1,
            explanation: "1842 年。"
          },
          {
            type: 'single',
            question: "Hefeweizen 的香蕉與丁香香來自？",
            options: ["A. 加入水果","B. 橡木桶","C. 酵母","D. 啤酒花"],
            correct: 2,
            explanation: "是小麥啤酒的酵母特徵。"
          },
          {
            type: 'single',
            question: "Lambic 的特色是？",
            options: ["A. 下層發酵、低溫儲存","B. 只用小麥麥芽","C. 一定加入咖啡","D. 以野生酵母與細菌自然發酵"],
            correct: 3,
            explanation: "Gueuze 混合新舊 Lambic。"
          }
        ]
      }
    }
  }
]
