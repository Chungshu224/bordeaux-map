/**
 * CAN-L2-2 Niagara Peninsula 次產區
 * 事實來源：VQA Ontario（Niagara Peninsula、Niagara Escarpment、West Niagara 頁面）、Wine With Seth winewiki（Ontario wine region、Canada）、Wikipedia（Ontario wine）、Grape Growers of Ontario。數字一律標註來源；來源有出入者（Niagara 斷崖高度、West Niagara 次產區的列法、面積與酒廠數、首款冰酒的年份等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Niagara Peninsula 次產區",
    subtitle: "Niagara Escarpment 與 Niagara-on-the-Lake 的次產區、土壤與風格",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Niagara 的三個區域產區",
    highlights: [
      { id: 1, icon: "🏔️", title: "Niagara Escarpment", content: "沿斷崖的台地，從 St. Catharines 以西到 Grimsby，含三個次產區：Short Hills Bench、Twenty Mile Bench、Beamsville Bench（VQA Ontario、Wine With Seth）" },
      { id: 2, icon: "🏞️", title: "Niagara-on-the-Lake", content: "含四個次產區：Niagara Lakeshore、Four Mile Creek、St. David's Bench、Niagara River（Wine With Seth）" },
      { id: 3, icon: "🌾", title: "West Niagara", content: "其餘的三個次產區是 Lincoln Lakeshore、Creek Shores、Vinemount Ridge。VQA 的 West Niagara 頁面把 Escarpment 的三個也列進去、共寫六個，與 10 個次產區的總數不一致，因此課內只採「3＋4＋3」的分法，不出題（VQA Ontario、Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">10 個次產區可以記成 3＋4＋3。</p></div>"
  },
  {
    title: "Escarpment 的三個台地",
    highlights: [
      { id: 1, icon: "🔭", title: "從東到西", content: "Short Hills Bench 最東，位於 Twelve Mile Creek 與 Fifteen Mile Creek 之間；Twenty Mile Bench 居中，從 Fifteen Mile Creek 到 Cherry Avenue 以西，有雙層台地；Beamsville Bench 最西，從斷崖向北延伸到 Regional Road 81，位於 Lake Iroquois Shore Bluff 的山腳（VQA Ontario）" },
      { id: 2, icon: "🪨", title: "土壤與礦物感", content: "土壤變化大，包括水成層的黏土與粉砂、鈣質的黏質壤土；多為深而排水中等的土壤，保水力佳。底下含化石的沉積白雲岩，被認為與許多台地葡萄酒的礦物感有關（VQA Ontario）" },
      { id: 3, icon: "🍇", title: "常見品種", content: "Chardonnay、Riesling、Pinot Noir、Cabernet Franc 與 Gamay Noir（VQA Ontario）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">台地的重點是坡度、土壤與斷崖的庇護。</p></div>"
  },
  {
    title: "斷崖如何調節氣候",
    highlights: [
      { id: 1, icon: "🛡️", title: "擋風與反射", content: "斷崖保護葡萄藤免於強烈的西南風，並反射湖風（VQA Ontario）" },
      { id: 2, icon: "🌸", title: "春季延後發芽", content: "春季升溫緩慢，延後萌芽並降低霜害風險；秋季坡面會困住溫暖的湖上空氣，延長生長季（VQA Ontario）" },
      { id: 3, icon: "🌙", title: "高處的涼夜", content: "海拔較高處夜晚較涼，有助於成熟與維持均衡的酸度（VQA Ontario）；斷崖高度各來源說法不一（60–100 公尺的山脊，或最高約 177 公尺），不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">斷崖讓春天晚一點來、秋天晚一點走。</p></div>"
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
            question: "Niagara Peninsula 共有幾個次產區？",
            options: ["A. 3","B. 4","C. 10","D. 46"],
            correct: 2,
            explanation: "10 個（VQA Ontario）。"
          },
          {
            type: 'single',
            question: "下列何者是 Niagara Escarpment 的次產區？",
            options: ["A. Four Mile Creek","B. Niagara River","C. Beamsville Bench","D. Creek Shores"],
            correct: 2,
            explanation: "Beamsville Bench。"
          },
          {
            type: 'single',
            question: "下列何者屬於 Niagara-on-the-Lake？",
            options: ["A. Twenty Mile Bench","B. St. David's Bench","C. Vinemount Ridge","D. Short Hills Bench"],
            correct: 1,
            explanation: "St. David's Bench。"
          },
          {
            type: 'single',
            question: "三個台地中最東邊的是？",
            options: ["A. Beamsville Bench","B. Twenty Mile Bench","C. Short Hills Bench","D. Lincoln Lakeshore"],
            correct: 2,
            explanation: "Short Hills Bench。"
          },
          {
            type: 'single',
            question: "哪一個台地有「雙層台地」的地形？",
            options: ["A. Twenty Mile Bench","B. Beamsville Bench","C. Short Hills Bench","D. Niagara Lakeshore"],
            correct: 0,
            explanation: "Twenty Mile Bench。"
          },
          {
            type: 'single',
            question: "斷崖為何能降低春霜風險？",
            options: ["A. 春季升溫緩慢，延後萌芽","B. 因為土壤很熱","C. 因為沒有風","D. 因為葡萄不怕霜"],
            correct: 0,
            explanation: "延後萌芽，避開晚霜。"
          }
        ]
      }
    }
  }
]
