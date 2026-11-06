/**
 * SM-L2-1 蒸餾與熟成原理
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "蒸餾與熟成原理",
    subtitle: "原料、蒸餾與木桶，決定一款烈酒的個性",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "蒸餾",
    highlights: [
      { id: 1, icon: "⚗️", title: "原理", content: "酒精的沸點低於水，加熱發酵液時先蒸發的蒸氣酒精濃度較高，冷凝後就得到烈酒；蒸餾只能濃縮，原料的風味必須先在發酵液裡" },
      { id: 2, icon: "🏺", title: "壺式蒸餾", content: "批次蒸餾、通常兩次（或三次）；保留較多風味成分（congeners），酒體較厚重，例如 Scotch Single Malt、Cognac" },
      { id: 3, icon: "🏭", title: "連續式蒸餾", content: "可連續作業、效率高，能蒸餾出很高的酒精度、風格較輕盈純淨，例如伏特加、穀物威士忌、多數輕型蘭姆" },
      { id: 4, icon: "✂️", title: "酒頭、酒心、酒尾", content: "最先流出的酒頭含刺激性的揮發物，最後的酒尾含油脂與重質成分；蒸餾師只取酒心，切取點是風格決定" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">壺式保留風味、連續式追求純淨：這是所有烈酒風格的第一個分岔。</p></div>"
  },
  {
    title: "熟成與標示",
    highlights: [
      { id: 1, icon: "🛢️", title: "橡木的作用", content: "木桶帶來顏色與香草、香料等風味（萃取），炭化層吸附刺激成分（去除），微量氧氣使酒變柔（氧化），水與酒精蒸發（天使的分享）" },
      { id: 2, icon: "🌡️", title: "氣候的影響", content: "炎熱地區熟成快得多（如加勒比海的蘭姆、Kentucky 的倉庫），涼爽潮濕的 Scotland 較慢；所以不同產地的「年數」不能直接比較" },
      { id: 3, icon: "🔢", title: "年數標示", content: "威士忌等烈酒標示的年數，是調配中最年輕成分的年齡；顏色可能經焦糖調整，不能單獨用來判斷年數" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同樣「12 年」，在 Scotland 與熱帶產地代表完全不同的熟成程度。</p></div>"
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
            question: "壺式蒸餾的典型特色是？",
            options: ["A. 連續作業、極度純淨","B. 不需要加熱","C. 只用於伏特加","D. 批次作業、保留較多風味"],
            correct: 3,
            explanation: "Scotch Single Malt 與 Cognac 都用壺式。"
          },
          {
            type: 'single',
            question: "威士忌的年數標示指的是？",
            options: ["A. 調配中最年輕成分的年齡","B. 平均年齡","C. 最老成分的年齡","D. 裝瓶後的年數"],
            correct: 0,
            explanation: "顏色可能經焦糖調整。"
          },
          {
            type: 'single',
            question: "為什麼熱帶產地的烈酒熟成較快？",
            options: ["A. 不用木桶","B. 高溫加速木桶的萃取與氧化","C. 木桶比較小","D. 法規要求"],
            correct: 1,
            explanation: "因此年數不能直接跨產地比較。"
          },
          {
            type: 'single',
            question: "蒸餾時被捨棄、含刺激性揮發物的是？",
            options: ["A. 原料","B. 木桶","C. 酒頭","D. 酒心"],
            correct: 2,
            explanation: "酒尾則含油脂與重質成分。"
          }
        ]
      }
    }
  }
]
