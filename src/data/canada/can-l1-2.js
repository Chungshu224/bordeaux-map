/**
 * CAN-L1-2 地理、氣候與土壤
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理、氣候與土壤",
    subtitle: "湖泊效應、冬季寒害、Okanagan 的雨影與乾燥氣候",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "緯度與冷涼氣候",
    highlights: [
      { id: 1, icon: "🧭", title: "各產區的緯度", content: "Niagara 的 Vineland 氣象站約在北緯 43°11'；Lake Erie North Shore 約在北緯 42°，是 Ontario 熱量最高的葡萄栽培區；Prince Edward County 約在北緯 44°，是 Ontario 最北的產區；BC 的葡萄園約在北緯 49–50°（AWRI、Wine With Seth）" },
      { id: 2, icon: "🌡️", title: "冷涼氣候國家", content: "The Canadian Encyclopedia 把加拿大視為冷涼氣候產酒國，可與紐西蘭、法國北部、義大利與德國相比" },
      { id: 3, icon: "❄️", title: "寒害是主要限制", content: "AWRI 指出，嚴重的寒害與春霜是限制 Ontario 這一帶葡萄栽培的主要因素；2024 年初的極端寒流更讓 BC 許多葡萄園當年無法收成（AWRI、Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">緯度不算高，但大陸性的冬季才是真正的挑戰。</p></div>"
  },
  {
    title: "Ontario：湖泊與斷崖",
    highlights: [
      { id: 1, icon: "🌊", title: "湖泊效應", content: "Ontario 湖與 Erie 湖調節冬季低溫，夏季帶來涼爽的陸風；兩者之中 Ontario 湖的影響較強。湖風也會延後芽期，避開春霜（AWRI、Wine With Seth）" },
      { id: 2, icon: "⛰️", title: "Niagara Escarpment", content: "斷崖促使湖風上岸，吹散霧氣並降低霜害風險。高度說法不一：AWRI 稱為 60 至 100 公尺的山脊，位於湖岸以南 5 至 20 公里；Wine With Seth 稱最高約 177 公尺，因此課內不列入測驗" },
      { id: 3, icon: "🪨", title: "土壤與排水", content: "Niagara 的土壤混合了黏土、黏質壤土、壤土與砂，是斷崖還是古湖岸時沉積而成；降雨多（生長季約 498 mm、全年約 860 mm）且黏土排水差，因此多數葡萄園每一或兩行就裝設排水管（AWRI，屬較早期的資料）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Ontario 的葡萄酒，靠湖泊讓冬天沒那麼冷。</p></div>"
  },
  {
    title: "British Columbia：雨影下的乾燥",
    highlights: [
      { id: 1, icon: "🏜️", title: "Okanagan 的雨影", content: "Okanagan 位在 Coast Mountains 與 Cascades 的雨影之中；沿岸地區年雨量達 60 英寸以上，Okanagan 只有約 10–12 英寸。降雨從北部（Vernon 附近）約 400 mm 降到 Osoyoos 的約 250–300 mm（Wine With Seth）；南段呈半沙漠，需要灌溉（The Canadian Encyclopedia）" },
      { id: 2, icon: "📏", title: "南北長達 175 公里", content: "Okanagan 谷從 Vernon 到美加邊境的 Osoyoos，南北約 175 公里；Okanagan Lake 本身約 135 公里長，之後依序是 Skaha、Vaseux 與 Osoyoos 湖。北部偏冷涼大陸性，南部半乾燥（Wine With Seth）" },
      { id: 3, icon: "☀️", title: "日夜溫差", content: "南部夏季午後的高溫可達 30–35°C，日夜溫差 15–20°C；谷底海拔約 280–340 公尺，梯田與台地葡萄園約在 300–600 公尺（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">BC 靠的是乾燥與日夜溫差，不是湖泊的調節。</p></div>"
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
            question: "下列何者是 Ontario 最北的葡萄酒產區？",
            options: ["A. Lake Erie North Shore","B. Niagara Peninsula","C. Prince Edward County","D. Pelee Island"],
            correct: 2,
            explanation: "Prince Edward County，約北緯 44°。"
          },
          {
            type: 'single',
            question: "Ontario 熱量（heat units）最高的葡萄栽培區是？",
            options: ["A. Prince Edward County","B. Niagara Peninsula","C. Lake Erie North Shore","D. Niagara Escarpment"],
            correct: 2,
            explanation: "Lake Erie North Shore，約北緯 42°（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "AWRI 指出限制 Ontario 葡萄栽培的主要因素是？",
            options: ["A. 嚴重寒害與春霜","B. 乾旱","C. 夏季過熱","D. 土壤過鹼"],
            correct: 0,
            explanation: "嚴重寒害與春霜。"
          },
          {
            type: 'single',
            question: "Niagara 受哪一個湖的影響較強？",
            options: ["A. Lake Erie","B. Lake Ontario","C. Lake Huron","D. Okanagan Lake"],
            correct: 1,
            explanation: "Ontario 湖的影響較強。"
          },
          {
            type: 'single',
            question: "為什麼 Niagara 的多數葡萄園要裝設排水管？",
            options: ["A. 降雨多且黏土排水差","B. 為了灌溉","C. 為了加熱土壤","D. 為了防霧"],
            correct: 0,
            explanation: "降雨多、黏土排水差。"
          },
          {
            type: 'single',
            question: "Okanagan 為什麼比沿岸乾燥得多？",
            options: ["A. 位於 Coast Mountains 與 Cascades 的雨影中","B. 離海太近","C. 有大片冰川","D. 位於赤道附近"],
            correct: 0,
            explanation: "雨影效應。"
          }
        ]
      }
    }
  }
]
