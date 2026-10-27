/**
 * US-L2-4 Washington I：Columbia Valley
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Washington I：Columbia Valley",
    subtitle: "Columbia Valley、Yakima Valley 與 Red Mountain",
    icon: "🏜️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Columbia Valley：廣域 AVA",
    highlights: [
      { id: 1, icon: "🗺️", title: "規模", content: "1984 年 12 月 13 日核准，面積超過 1,100 萬英畝（不同來源在 1,100 萬至 1,152 萬之間）" },
      { id: 2, icon: "🍇", title: "占比", content: "包含全州約 99% 的葡萄園（超過 59,000 英畝）" },
      { id: 3, icon: "🌬️", title: "土壤", content: "風積砂與粉砂（黃土）覆蓋在礫石與滯水沉積物之上、玄武岩基盤；排水好、養分低" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Columbia Valley 是廣域 AVA，大部分 Washington 葡萄酒都能標示它。</p></div>"
  },
  {
    title: "Yakima Valley：第一個 AVA",
    highlights: [
      { id: 1, icon: "📅", title: "1983 年 4 月 4 日", content: "Washington 的第一個 AVA，也是全國第 28 個；約 699,520 英畝" },
      { id: 2, icon: "🌱", title: "歷史", content: "1869 年 Charles Schanno 種下第一批葡萄藤；1914 年 William Bridgeman 的葡萄園插條成為許多後來葡萄園的來源；1961 年華盛頓大學團隊在 Sunnyside 種下 Pinot Noir 等 vinifera" },
      { id: 3, icon: "🧩", title: "子 AVA", content: "內含 Red Mountain（2001）、Snipes Mountain（2009）、Candy Mountain（2020）、Goose Gap（2021）等" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Yakima 是 Washington 最早的產區之一，並包含多個較小的子 AVA。</p></div>"
  },
  {
    title: "Red Mountain：小而熱的紅酒產區",
    highlights: [
      { id: 1, icon: "📅", title: "2001 年 4 月 10 日", content: "約 4,040 英畝，2025 年約 2,382 英畝已種植；Washington 第五個 AVA" },
      { id: 2, icon: "🔥", title: "沙漠氣候", content: "生長季 187 天、約 3,370 度日；生長季白天平均約 90°F，夜間降到 50°F 以下" },
      { id: 3, icon: "🍷", title: "品種與土壤", content: "以紅葡萄為主：Cabernet Sauvignon、Merlot、Sangiovese、Cabernet Franc、Syrah；土壤礫石多、偏鹼性並含碳酸鈣" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Red Mountain 小、熱、乾，專注於結構強勁的紅酒。</p></div>"
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
            question: "Washington 的第一個 AVA 是？",
            options: ["A. Yakima Valley","B. Columbia Valley","C. Red Mountain","D. Puget Sound"],
            correct: 0,
            explanation: "Yakima Valley，1983 年。"
          },
          {
            type: 'single',
            question: "Red Mountain AVA 核准於哪一年？",
            options: ["A. 1983","B. 1995","C. 2001","D. 2012"],
            correct: 2,
            explanation: "2001 年 4 月 10 日。"
          },
          {
            type: 'single',
            question: "Columbia Valley 約含 Washington 多少葡萄園面積？",
            options: ["A. 50%","B. 75%","C. 90%","D. 99%"],
            correct: 3,
            explanation: "約 99%。"
          },
          {
            type: 'single',
            question: "Red Mountain 的主要特色是？",
            options: ["A. 小面積、炎熱乾燥、以紅酒為主","B. 大面積、冷涼、以白酒為主","C. 跨州海洋性氣候","D. 島嶼冷涼氣候"],
            correct: 0,
            explanation: "約 4,040 英畝，沙漠氣候。"
          }
        ]
      }
    }
  }
]
