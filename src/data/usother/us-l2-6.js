/**
 * US-L2-6 New York I：Finger Lakes
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "New York I：Finger Lakes",
    subtitle: "湖效應、土壤與子 AVA",
    icon: "💧",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "AVA 與湖",
    highlights: [
      { id: 1, icon: "🗺️", title: "範圍", content: "1982 年核准；約 540 萬英畝，含 11 個湖，位於上州，在 Lake Ontario 以南約 25 英里；涵蓋 14 個郡" },
      { id: 2, icon: "💧", title: "主要湖泊", content: "多數葡萄園圍繞 Canandaigua、Keuka、Seneca、Cayuga 四個湖" },
      { id: 3, icon: "🧩", title: "子 AVA", content: "Cayuga Lake（1988）與 Seneca Lake（2003）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Finger Lakes 有 11 個湖，但只有 Cayuga 與 Seneca 是子 AVA。</p></div>"
  },
  {
    title: "湖效應",
    highlights: [
      { id: 1, icon: "❄️", title: "冬季", content: "湖面帶來水氣形成深厚積雪，保護葡萄藤免於凍害；Seneca Lake 在過去百年只凍結過少數幾次" },
      { id: 2, icon: "🌸", title: "春季", content: "涼爽的湖風延後萌芽，避開霜害" },
      { id: 3, icon: "🍂", title: "秋季", content: "溫暖的湖風延後初霜、延長生長季" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">湖效應 = 冬季保護＋春季延後＋秋季延長。</p></div>"
  },
  {
    title: "氣候數字與土壤",
    highlights: [
      { id: 1, icon: "🌡️", title: "大陸性氣候", content: "生長季約 190 至 205 天；年降水量 30 至 40 英寸；USDA 耐寒區 5b 至 6b" },
      { id: 2, icon: "🪨", title: "土壤", content: "冰河侵蝕與堆積塑造出多變的土壤，多為深厚且排水良好；最常見的是 Dunkirk clay loam；部分區域（如 Seneca Lake 西岸）岩盤接近地表" },
      { id: 3, icon: "🍇", title: "品種", content: "種植超過 60 個品種，以 Riesling 為最具代表性；2024 年約 832 英畝" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Finger Lakes 是大陸性氣候加上湖泊緩衝，因此冬季風險被降低但未消除。</p></div>"
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
            question: "Finger Lakes 的兩個子 AVA 是？",
            options: ["A. Cayuga Lake 與 Seneca Lake","B. Keuka 與 Canandaigua","C. Erie 與 Ontario","D. Hudson 與 Champlain"],
            correct: 0,
            explanation: "Cayuga Lake（1988）與 Seneca Lake（2003）。"
          },
          {
            type: 'single',
            question: "Seneca Lake AVA 核准於哪一年？",
            options: ["A. 1982","B. 1988","C. 2003","D. 2016"],
            correct: 2,
            explanation: "2003 年。"
          },
          {
            type: 'single',
            question: "湖泊在春季對葡萄園的主要作用是？",
            options: ["A. 延後萌芽，避開霜害","B. 提高糖度","C. 增加降雨","D. 殺滅害蟲"],
            correct: 0,
            explanation: "涼爽湖風延後萌芽。"
          },
          {
            type: 'single',
            question: "Finger Lakes 最常見的土壤類型是？",
            options: ["A. Dunkirk clay loam","B. Jory 黏土","C. Willakenzie 砂岩","D. 石灰岩礫石"],
            correct: 0,
            explanation: "Dunkirk clay loam。"
          }
        ]
      }
    }
  }
]
