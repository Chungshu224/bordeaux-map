/**
 * US-L2-8 Level 2 綜合評量
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "重點回顧與綜合測驗",
    icon: "📋",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🌲", title: "Oregon", content: "Willamette 有 11 個子 AVA（2022）；Jory／Willakenzie／Laurelwood 三種土壤；Southern Oregon 以 Tempranillo 為代表；Columbia Gorge 2004 年核准" },
      { id: 2, icon: "🏜️", title: "Washington", content: "Yakima Valley 1983、Walla Walla 與 Columbia Valley 1984、Red Mountain 2001、Horse Heaven Hills 2005、Puget Sound 1995" },
      { id: 3, icon: "🗽", title: "New York", content: "Hudson River 1982（第一個）；Hamptons 1985、North Fork 1986、Long Island 母 AVA 2001；Cayuga Lake 1988、Seneca Lake 2003" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先掌握「誰先誰後」與「跨州」兩條主線，再記年份。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Willamette Valley 的子 AVA 到 2022 年共幾個？",
            options: ["A. 6","B. 9","C. 11","D. 14"],
            correct: 2,
            explanation: "11 個。"
          },
          {
            type: 'single',
            question: "Dundee Hills 的主要土壤是？",
            options: ["A. Jory","B. Willakenzie","C. Laurelwood","D. Dunkirk"],
            correct: 0,
            explanation: "Jory（玄武岩風化的紅色黏土）。"
          },
          {
            type: 'single',
            question: "Columbia Gorge AVA 跨哪兩個州？",
            options: ["A. Oregon 與 Washington","B. Washington 與 Idaho","C. Oregon 與 California","D. New York 與 Pennsylvania"],
            correct: 0,
            explanation: "Oregon 與 Washington。"
          },
          {
            type: 'single',
            question: "Walla Walla Valley AVA 核准於哪一年？",
            options: ["A. 1983","B. 1984","C. 2001","D. 2015"],
            correct: 1,
            explanation: "1984 年 2 月 6 日。"
          },
          {
            type: 'single',
            question: "The Rocks District of Milton-Freewater 核准於哪一年？",
            options: ["A. 1984","B. 2001","C. 2015","D. 2020"],
            correct: 2,
            explanation: "2015 年 2 月。"
          },
          {
            type: 'single',
            question: "Red Mountain AVA 核准於哪一年？",
            options: ["A. 1995","B. 2001","C. 2005","D. 2012"],
            correct: 1,
            explanation: "2001 年 4 月 10 日。"
          },
          {
            type: 'single',
            question: "Finger Lakes 的兩個子 AVA 是？",
            options: ["A. Cayuga Lake 與 Seneca Lake","B. Keuka 與 Canandaigua","C. Erie 與 Ontario","D. North Fork 與 Hamptons"],
            correct: 0,
            explanation: "Cayuga Lake 與 Seneca Lake。"
          },
          {
            type: 'single',
            question: "母 AVA「Long Island」核准於哪一年？",
            options: ["A. 1985","B. 1986","C. 2001","D. 2005"],
            correct: 2,
            explanation: "2001 年。"
          },
          {
            type: 'single',
            question: "紐約第一個 AVA 是？",
            options: ["A. Finger Lakes","B. Hudson River Region","C. North Fork","D. Lake Erie"],
            correct: 1,
            explanation: "Hudson River Region，1982 年 6 月 4 日。"
          },
          {
            type: 'single',
            question: "Lake Erie AVA 涵蓋哪三個州？",
            options: ["A. New York、Pennsylvania、Ohio","B. New York、New Jersey、Ohio","C. Michigan、Ohio、Indiana","D. New York、Vermont、Ohio"],
            correct: 0,
            explanation: "New York、Pennsylvania 與 Ohio。"
          },
          {
            type: 'single',
            question: "Brotherhood Winery 創立於哪一年？",
            options: ["A. 1839","B. 1962","C. 1973","D. 1982"],
            correct: 0,
            explanation: "1839 年。"
          },
          {
            type: 'single',
            question: "Puget Sound AVA 的特徵是？",
            options: ["A. 濕潤涼爽，多數酒廠使用東 Washington 的葡萄","B. 炎熱乾燥的沙漠","C. 跨州的高海拔平原","D. 以 Concord 為主"],
            correct: 0,
            explanation: "年降雨 17 至 60 英寸。"
          }
        ]
      }
    }
  }
]
