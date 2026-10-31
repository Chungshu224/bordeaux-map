/**
 * CAN-L2-1 Ontario 總覽
 * 事實來源：VQA Ontario（Niagara Peninsula、Niagara Escarpment、West Niagara 頁面）、Wine With Seth winewiki（Ontario wine region、Canada）、Wikipedia（Ontario wine）、Grape Growers of Ontario。數字一律標註來源；來源有出入者（Niagara 斷崖高度、West Niagara 次產區的列法、面積與酒廠數、首款冰酒的年份等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Ontario 總覽",
    subtitle: "Niagara Peninsula、Lake Erie North Shore、Prince Edward County 與 VQA 的層級",
    icon: "🍁",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "三個葡萄栽培區",
    highlights: [
      { id: 1, icon: "🗺️", title: "VQA 的三大產區", content: "VQA 正式認定三個產區：Niagara Peninsula、Lake Erie North Shore 與 Prince Edward County；產區之內再分次產區，共 11 個（Niagara 10 個加上 Lake Erie North Shore 的 South Islands）（Wikipedia、Wine With Seth）" },
      { id: 2, icon: "📈", title: "Ontario 的規模", content: "Ontario 約有 17,000 英畝（約 6,900 公頃）葡萄園，占全加拿大面積的三分之二左右；Wikipedia 稱 Ontario 生產約 90% 的加拿大冰酒。各來源的面積與酒廠數不同，只作背景（Wine With Seth、Wikipedia）" },
      { id: 3, icon: "🌱", title: "新興產區", content: "VQA 之外還有四個新興地區：Norfolk 與 Haldimand Counties、Central Ontario 與 Georgian Bay、Near the Shore of Lake Huron、Eastern Ontario（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Ontario 的核心是三個認定產區，加上幾個新興地區。</p></div>"
  },
  {
    title: "Niagara Peninsula",
    highlights: [
      { id: 1, icon: "🏆", title: "加拿大最大的栽培區", content: "Niagara Peninsula 是加拿大種植面積最大的葡萄栽培區，約 13,600 英畝（約 5,500 公頃）、種植超過 46 個品種，擁有約 55% 的 Ontario VQA 酒廠（VQA Ontario、Wikipedia）" },
      { id: 2, icon: "🧱", title: "三個地形區", content: "Niagara 由三個地形區構成：Lake Iroquois Plain、Niagara Escarpment 與 Haldimand Clay Plain；湖與斷崖之間是厚的黏土層混合粉砂與砂（VQA Ontario）" },
      { id: 3, icon: "🌬️", title: "離湖越遠，影響越弱", content: "湖泊效應隨著離岸距離而減弱，使湖岸與內陸次產區的風味出現差異；另有大幅的日夜溫差與生長季的充足日照（VQA Ontario）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Niagara 是 Ontario 的中心，也是加拿大最大的栽培區。</p></div>"
  },
  {
    title: "Lake Erie North Shore 與 Prince Edward County",
    highlights: [
      { id: 1, icon: "☀️", title: "Lake Erie North Shore", content: "約北緯 42°，是 Ontario 最南、積溫最高的產區；Lake Erie 是五大湖中最淺也最暖的一個。唯一的次產區 South Islands 以 Pelee Island 為中心（Wine With Seth、Wikipedia）；高度約 172 至 196 公尺" },
      { id: 2, icon: "🪨", title: "Prince Edward County", content: "2007 年成為認定產區，是 Ontario 最北、也是唯一沒有次產區的產區；位於 Lake Ontario 東端，建在多孔的奧陶紀石灰岩上，土壤是薄的黏質壤土，生長季最短也最涼（Wikipedia、Wine With Seth）" },
      { id: 3, icon: "⛏️", title: "埋藤", content: "Prince Edward County 的冬季溫度可低於 -24°C，種植者在採收後把藤蔓培土埋起來，保護芽眼免於致命的凍害（Wine With Seth）；主力是 Chardonnay 與 Pinot Noir" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">一個最暖、一個最冷，Ontario 的兩端。</p></div>"
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
            question: "VQA 正式認定的 Ontario 產區有幾個？",
            options: ["A. 2","B. 3","C. 5","D. 11"],
            correct: 1,
            explanation: "三個：Niagara Peninsula、Lake Erie North Shore、Prince Edward County。"
          },
          {
            type: 'single',
            question: "Ontario 最北、也是唯一沒有次產區的產區是？",
            options: ["A. Niagara Peninsula","B. Prince Edward County","C. Lake Erie North Shore","D. West Niagara"],
            correct: 1,
            explanation: "Prince Edward County（2007 年認定）。"
          },
          {
            type: 'single',
            question: "Lake Erie North Shore 唯一的次產區是？",
            options: ["A. Short Hills Bench","B. Creek Shores","C. Four Mile Creek","D. South Islands"],
            correct: 3,
            explanation: "South Islands，以 Pelee Island 為中心。"
          },
          {
            type: 'single',
            question: "Prince Edward County 的基岩主要是？",
            options: ["A. 奧陶紀石灰岩","B. 火山岩","C. 花崗岩","D. 頁岩與板岩"],
            correct: 0,
            explanation: "奧陶紀石灰岩。"
          },
          {
            type: 'single',
            question: "Prince Edward County 的種植者為何要在採收後培土埋藤？",
            options: ["A. 保護芽眼免於致命的凍害","B. 防止鳥害","C. 增加糖度","D. 防止野火"],
            correct: 0,
            explanation: "冬季可低於 -24°C，需保護芽眼。"
          },
          {
            type: 'single',
            question: "Niagara Peninsula 的三個地形區不包括下列哪一個？",
            options: ["A. Lake Iroquois Plain","B. Niagara Escarpment","C. Haldimand Clay Plain","D. Okanagan Bench"],
            correct: 3,
            explanation: "Okanagan Bench 在 BC。"
          }
        ]
      }
    }
  }
]
