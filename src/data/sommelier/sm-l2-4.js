/**
 * SM-L2-4 琴酒、伏特加與利口酒
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "琴酒、伏特加與利口酒",
    subtitle: "中性烈酒是畫布：植物、水果與糖決定最後的風格",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "琴酒與伏特加",
    highlights: [
      { id: 1, icon: "🌿", title: "琴酒", content: "以農業來源的中性烈酒加入植物調味，杜松子必須是主要風味；歐盟規定裝瓶至少 37.5%" },
      { id: 2, icon: "🇬🇧", title: "London Dry Gin", content: "不是產地名稱而是製法：只能以天然植物再蒸餾調味，蒸餾後不得再加調味料或色素，含糖量極低（每公升不超過 0.1 公克）" },
      { id: 3, icon: "🥶", title: "伏特加", content: "以農業來源原料蒸餾出高度純淨的中性烈酒，可經活性碳過濾；原料（穀物、馬鈴薯、葡萄等）會影響質地與細微風味，歐盟規定至少 37.5%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「London Dry」說的是怎麼做，不是在哪裡做。</p></div>"
  },
  {
    title: "利口酒",
    highlights: [
      { id: 1, icon: "🍬", title: "定義", content: "烈酒加入糖與風味（水果、草本、香料、堅果、咖啡等）；歐盟規定一般至少每公升 100 公克糖、酒精至少 15%，以「Crème de」命名的至少 250 公克，Crème de cassis 至少 400 公克" },
      { id: 2, icon: "🧪", title: "調味方法", content: "浸泡（maceration）、滲濾（percolation）或與植物一起再蒸餾；草本利口酒（如修道院傳統配方）常結合多種方法" },
      { id: 3, icon: "🍸", title: "在酒單上的角色", content: "利口酒常用於餐後與雞尾酒；侍酒師要能說出基酒、主要風味與甜度，並建議純飲、加冰或調酒的方式" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">利口酒的三個描述點：基酒、風味、甜度。</p></div>"
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
            question: "琴酒的主要風味必須是？",
            options: ["A. 杜松子","B. 柑橘","C. 黃瓜","D. 香草"],
            correct: 0,
            explanation: "歐盟裝瓶至少 37.5%。"
          },
          {
            type: 'single',
            question: "London Dry Gin 指的是？",
            options: ["A. 必須經木桶熟成","B. 一種製法","C. 必須在倫敦生產","D. 甜味很高"],
            correct: 1,
            explanation: "蒸餾後不得加調味料或色素。"
          },
          {
            type: 'single',
            question: "歐盟對一般利口酒的最低含糖量是？",
            options: ["A. 每公升 400 公克","B. 沒有規定","C. 每公升 100 公克","D. 每公升 10 公克"],
            correct: 2,
            explanation: "Crème de cassis 至少 400 公克。"
          },
          {
            type: 'single',
            question: "伏特加的原料會影響什麼？",
            options: ["A. 顏色","B. 杜松子香","C. 甜度標示","D. 質地與細微風味"],
            correct: 3,
            explanation: "穀物、馬鈴薯、葡萄等各有差異。"
          }
        ]
      }
    }
  }
]
