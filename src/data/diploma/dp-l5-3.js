/**
 * DP-L5-3 CMS 演繹式盲品格式
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "CMS 演繹式盲品格式",
    subtitle: "在有限時間內，從證據走到品種、產區與年份",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "演繹流程",
    highlights: [
      { id: 1, icon: "👁️", title: "外觀與香氣", content: "外觀看清澈度、亮度、顏色與邊緣變化；香氣依序判斷果香類型與狀態（新鮮、熟、果醬、乾）、非果香（花、草本、香料）、土壤或礦物感，以及橡木的有無與種類" },
      { id: 2, icon: "👅", title: "口感", content: "確認香氣，再判斷甜度、酸度、單寧、酒精、酒體、餘韻；結構數據是縮小範圍最可靠的依據" },
      { id: 3, icon: "🎯", title: "初步與最終結論", content: "初步結論：舊世界或新世界、氣候涼或暖、可能品種、年齡範圍；最終結論：品種、國家、產區、法定產區與年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">演繹的關鍵是「排除」：每個觀察都要讓候選名單變短。</p></div>"
  },
  {
    title: "關鍵判斷點與考試形式",
    highlights: [
      { id: 1, icon: "🌍", title: "舊世界與新世界", content: "常見傾向：舊世界較多土壤、礦物與非果香，果味較克制、酸度較高；新世界果味較成熟、酒精較高、橡木常更明顯。這是傾向而非定律，暖化讓界線越來越模糊" },
      { id: 2, icon: "🛢️", title: "橡木的判斷", content: "有無橡木、新舊與種類：美國橡木偏椰子、蒔蘿、香草，法國橡木偏烘烤、香料與細緻單寧；橡木使用往往直接指向產區與價格帶" },
      { id: 3, icon: "🎓", title: "各級考試形式", content: "以美洲分會為例：Certified 為 4 款（2 紅 2 白）、書面、45 分鐘；Advanced 與 Master 常見說法為 6 款、約 25 分鐘、口述。各分會規定不同，報考前以官方資料為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 口述盲品重視速度與節奏：固定的描述順序，比華麗的形容詞更重要。</p></div>"
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
            question: "CMS 演繹式盲品的最終結論通常要說出？",
            options: ["A. 品種、國家、產區、法定產區與年份","B. 只說顏色","C. 價格與酒莊","D. 只說好不好喝"],
            correct: 0,
            explanation: "初步結論先判斷新舊世界、氣候與年齡範圍。"
          },
          {
            type: 'single',
            question: "椰子、蒔蘿香最常指向哪種橡木？",
            options: ["A. 水泥槽","B. 美國橡木","C. 法國橡木","D. 不鏽鋼"],
            correct: 1,
            explanation: "法國橡木偏烘烤與香料。"
          },
          {
            type: 'short',
            question: "簡答：說明「舊世界 vs 新世界」判斷的常見線索，以及這種判斷的限制。",
            points: [
              "舊世界：較多土壤、礦物、非果香",
              "舊世界：果味克制、酸度較高",
              "新世界：果味成熟、酒精較高、橡木較明顯",
              "限制：這是傾向而非定律",
              "限制：暖化與釀造風格轉向讓界線模糊"
            ],
            model: "舊世界的酒常見較多土壤、礦物與非果香，果味克制、酸度較高；新世界常見果味成熟、酒精較高、橡木較明顯。但這只是傾向：暖化讓歐洲酒更熟，新世界許多生產者改走提早採收、少橡木的路線，所以應把它當作縮小範圍的起點，再用結構證據確認。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
