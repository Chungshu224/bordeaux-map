/**
 * MA-L2-1 AOG 制度
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "AOG 制度",
    subtitle: "Appellation d'Origine Garantie：比想像中嚴格",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "法規架構",
    highlights: [
      { id: 1, icon: "📜", title: "兩份基礎法規", content: "1977 年 8 月 12 日的第 2-75-321 號法令規範釀造、持有、流通與買賣；同年 8 月 15 日的第 869-75 號部令規範原產地制度" },
      { id: 2, icon: "🏷️", title: "AOG 與 AOC", content: "AOG 是原產地保證，範圍較大；AOC 是原產地控制，必須位於 AOG 內，條件也更細" },
      { id: 3, icon: "🏛️", title: "誰來管", content: "摩洛哥食品安全局（ONSSA）受理標章申請，全國葡萄酒委員會（commission nationale viti-vinicole）提供專業意見" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">摩洛哥的制度明顯受法國影響，但細節不能直接套用法國規則。</p></div>"
  },
  {
    title: "AOG 的條件",
    highlights: [
      { id: 1, icon: "📍", title: "同一區域", content: "酒和葡萄都必須來自同一個劃定的區域" },
      { id: 2, icon: "🌡️", title: "自然酒精 12 度", content: "自然酒精度至少 12 度，而且禁止任何增糖或濃縮等提高酒精的做法（enrichissement）" },
      { id: 3, icon: "💧", title: "原則不灌溉", content: "葡萄園原則上不得灌溉，生態條件特殊時才可依部令給予例外" },
      { id: 4, icon: "📊", title: "每年訂產量", content: "AOG 的產量上限不是固定數字，而是每年依各 AOG 以部令訂定" },
      { id: 5, icon: "🧪", title: "獨立釀造與標章", content: "必須和其他酒分開釀造，符合分析標準，並取得原產地標章" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">最容易被問的是 12 度和禁止增糖：在炎熱的摩洛哥，葡萄靠自己就要達標。</p></div>"
  },
  {
    title: "一年三次的標章申請",
    highlights: [
      { id: 1, icon: "🍃", title: "Primeur 場次", content: "10 到 11 月" },
      { id: 2, icon: "✨", title: "Exceptionnel 場次", content: "12 到 1 月，只有產業界提出有理由的請求才會開辦" },
      { id: 3, icon: "🗓️", title: "Pleine saison 場次", content: "3 到 4 月，酒廠提交其餘認為符合資格的酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">標章是一批一批申請的，不是登記產區就自動取得。</p></div>"
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
            question: "AOG 葡萄酒的自然酒精度下限是？",
            options: ["A. 沒有規定","B. 12 度，且禁止增糖","C. 10 度，可以增糖","D. 14 度，可以增糖"],
            correct: 1,
            explanation: "部令第 869-75 號第 2 條 c 款。"
          },
          {
            type: 'single',
            question: "AOG 的產量上限如何決定？",
            options: ["A. 沒有上限","B. 由各酒廠自訂","C. 每年依各 AOG 以部令訂定","D. 全國固定 60 hl/ha"],
            correct: 2,
            explanation: "60 hl/ha 是 Coteaux de l'Atlas 和 Les Côtes de Rommani 這類 AOC 的規定。"
          },
          {
            type: 'single',
            question: "摩洛哥 AOC 與 AOG 的關係是？",
            options: ["A. AOC 一定大於 AOG","B. 兩者完全無關","C. AOG 位於 AOC 之內","D. AOC 位於 AOG 區域之內"],
            correct: 3,
            explanation: "部令第 869-75 號第 3 條明定。"
          }
        ]
      }
    }
  }
]
