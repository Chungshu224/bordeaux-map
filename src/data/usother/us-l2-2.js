/**
 * US-L2-2 Oregon II：Willamette 的土壤與風格
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Oregon II：Willamette 的土壤與風格",
    subtitle: "Jory、Willakenzie、Laurelwood",
    icon: "🪨",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Jory：火山土",
    highlights: [
      { id: 1, icon: "🌋", title: "來源", content: "由約 1,500 萬至 1,000 萬年前抵達山谷的 Columbia River Basalt 風化而成，是紅色富鐵黏土" },
      { id: 2, icon: "📍", title: "分布", content: "以 Dundee Hills 為代表，也見於 Eola-Amity Hills、Chehalem Mountains、McMinnville 的一部分" },
      { id: 3, icon: "🍒", title: "一般認為的風格", content: "紅色果實更豐、中段絲滑、酒體稍豐" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Jory = 玄武岩黏土 = Dundee Hills；風格描述屬一般說法，非法定規範。</p></div>"
  },
  {
    title: "Willakenzie：海洋沉積岩",
    highlights: [
      { id: 1, icon: "🌊", title: "來源", content: "約 6,000 萬至 4,000 萬年前海底沉積的粉砂岩、砂岩與泥岩，之後被抬升；嚴格說來不是火山土" },
      { id: 2, icon: "📍", title: "分布", content: "Yamhill-Carlton 與 Ribbon Ridge，也見於 McMinnville、Chehalem Mountains、Eola-Amity Hills 的一部分" },
      { id: 3, icon: "🍇", title: "一般認為的風格", content: "果味偏深、單寧較緊實、花香與泥土感較明顯" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Willakenzie = 海洋沉積岩 = Yamhill-Carlton／Ribbon Ridge。</p></div>"
  },
  {
    title: "Laurelwood：風積黃土",
    highlights: [
      { id: 1, icon: "🌬️", title: "來源", content: "粉砂質風積黃土，約 1.5 萬至 1.3 萬年前（Missoula Flood 時期）的沉積，覆蓋在 Columbia River Basalt 之上 1 至 3 公尺" },
      { id: 2, icon: "📍", title: "分布", content: "Tualatin Mountains 與 Chehalem Mountains 北部；Laurelwood District 與 Tualatin Hills 兩個 AVA（2020）" },
      { id: 3, icon: "🌹", title: "一般認為的風格", content: "優雅的紅櫻桃與李子、細緻單寧、玫瑰與紫羅蘭的花香" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">三種土壤可對應三組子 AVA，是 Willamette 風土論述的骨架。</p></div>"
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
            question: "Jory 土壤的來源是？",
            options: ["A. 風化的玄武岩","B. 海洋沉積岩","C. 風積黃土","D. 花崗岩"],
            correct: 0,
            explanation: "Columbia River Basalt 風化的紅色黏土。"
          },
          {
            type: 'single',
            question: "Willakenzie 主要見於哪兩個子 AVA？",
            options: ["A. Dundee Hills 與 Eola-Amity Hills","B. Yamhill-Carlton 與 Ribbon Ridge","C. Tualatin Hills 與 Laurelwood","D. Van Duzer 與 Lower Long Tom"],
            correct: 1,
            explanation: "Yamhill-Carlton 與 Ribbon Ridge。"
          },
          {
            type: 'single',
            question: "Laurelwood 土壤的性質是？",
            options: ["A. 火山灰","B. 石灰岩","C. 風積黃土","D. 冰河礫石"],
            correct: 2,
            explanation: "覆蓋在玄武岩上的風積黃土。"
          },
          {
            type: 'single',
            question: "Willakenzie 屬於哪一類岩石？",
            options: ["A. 火成岩","B. 變質岩","C. 海洋沉積岩","D. 石灰岩"],
            correct: 2,
            explanation: "海底沉積後被抬升。"
          }
        ]
      }
    }
  }
]
