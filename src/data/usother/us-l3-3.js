/**
 * US-L3-3 風土比較
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風土比較",
    subtitle: "海洋、沙漠、湖泊與大西洋",
    icon: "⚖️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Willamette vs Columbia Valley",
    highlights: [
      { id: 1, icon: "🌧️", title: "水", content: "Willamette 年降雨約 40 英寸、多為雨養；Columbia Valley 的 Horse Heaven Hills 年降雨約 6.2 英寸，須灌溉" },
      { id: 2, icon: "🪨", title: "土壤", content: "Willamette：玄武岩黏土、海洋沉積岩、黃土；Columbia Valley：風積砂與黃土覆蓋礫石與玄武岩" },
      { id: 3, icon: "🍷", title: "結果", content: "Willamette：涼爽、年份差異大的 Pinot Noir；Columbia Valley：成熟穩定的 Cabernet、Merlot、Syrah" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同在太平洋西北，一邊是雨養的海洋性，一邊是灌溉的沙漠。</p></div>"
  },
  {
    title: "Finger Lakes vs Long Island",
    highlights: [
      { id: 1, icon: "💧", title: "緩衝來源", content: "Finger Lakes：深水湖；Long Island：大西洋、Long Island Sound 與 Peconic Bay" },
      { id: 2, icon: "⏳", title: "生長季", content: "Finger Lakes 約 190–205 天；North Fork 約 195–201 天" },
      { id: 3, icon: "🍇", title: "代表品種", content: "Finger Lakes：Riesling；Long Island：Merlot、Chardonnay、Cabernet Franc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">內陸湖泊對上海洋：前者偏冷涼白酒，後者偏溫和紅白並行。</p></div>"
  },
  {
    title: "Red Mountain vs Walla Walla",
    highlights: [
      { id: 1, icon: "🔥", title: "熱度", content: "Red Mountain 約 3,370 度日；Walla Walla 約 3,024 度日（兩者資料來自不同來源，僅作相對比較）" },
      { id: 2, icon: "📏", title: "規模", content: "Red Mountain 約 4,040 英畝；Walla Walla 約 182,060 英畝，且跨州" },
      { id: 3, icon: "⚠️", title: "風險", content: "Walla Walla 冬季低溫可達 −20°F；Red Mountain 的挑戰在炎熱與乾燥" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較風土要同時談「熱度、水、冬季風險與土壤」四個面向。</p></div>"
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
            question: "哪個產區主要靠雨養、哪個須灌溉？",
            options: ["A. Willamette 雨養、Columbia Valley 灌溉","B. 兩者皆雨養","C. Willamette 灌溉、Columbia Valley 雨養","D. 兩者皆灌溉"],
            correct: 0,
            explanation: "Willamette 約 40 英寸雨；Horse Heaven Hills 約 6.2 英寸。"
          },
          {
            type: 'single',
            question: "Finger Lakes 的代表品種是？",
            options: ["A. Riesling","B. Tempranillo","C. Syrah","D. Zinfandel"],
            correct: 0,
            explanation: "Riesling。"
          },
          {
            type: 'single',
            question: "Walla Walla 的主要風險是？",
            options: ["A. 冬季極低溫","B. 海霧","C. 颶風","D. 鹽害"],
            correct: 0,
            explanation: "冬季低溫可達 −20°F。"
          },
          {
            type: 'single',
            question: "Long Island 的氣候緩衝來自？",
            options: ["A. 大西洋、Long Island Sound 與 Peconic Bay","B. Great Lakes","C. Cascade 山脈","D. Snake River"],
            correct: 0,
            explanation: "海洋與海灣。"
          }
        ]
      }
    }
  }
]
