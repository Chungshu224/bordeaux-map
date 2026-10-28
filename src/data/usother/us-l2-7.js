/**
 * US-L2-7 New York II：Long Island、Hudson River 與其他
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "New York II：Long Island、Hudson River 與其他",
    subtitle: "海洋、河谷與湖岸 AVA",
    icon: "🌊",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Long Island 的三層 AVA",
    highlights: [
      { id: 1, icon: "🧱", title: "結構", content: "Hamptons（1985 年 5 月 16 日）與 North Fork（1986 年 10 月 10 日）先核准；母 AVA「Long Island」晚至 2001 年 5 月 14 日才核准，涵蓋 Nassau 與 Suffolk 兩郡及離岸島嶼" },
      { id: 2, icon: "🌊", title: "氣候", content: "大西洋、Long Island Sound 與 Peconic Bay 緩和氣溫，使生長季比紐約內陸長達一個月" },
      { id: 3, icon: "🌱", title: "1973 年", content: "Louisa 與 Alex Hargrave 在 Cutchogue 的前馬鈴薯田種下 Long Island 第一座商業 vinifera 葡萄園" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Long Island 的 AVA 順序反直覺：子 AVA 先於母 AVA。</p></div>"
  },
  {
    title: "North Fork 與 Hamptons 的差異",
    highlights: [
      { id: 1, icon: "🍷", title: "North Fork", content: "約 3,000 英畝、27 座葡萄園、超過 40 家酒廠；生長季 195 至 201 天、年降雨約 44 英寸；主要土壤 Haven-Riverhead sandy loam" },
      { id: 2, icon: "🌫️", title: "Hamptons", content: "面對大西洋，較涼、多霧；生長季約 182 天（North Fork 約 195 天，1978–1983 年資料）；土壤含較多粉砂與壤土，保水較好" },
      { id: 3, icon: "🍇", title: "品種", content: "Merlot 與 Chardonnay 占優，Cabernet Franc 與 Riesling 也重要；Long Island 對許可品種沒有限制" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">North Fork 較暖、較砂；Hamptons 較涼、較濕潤。</p></div>"
  },
  {
    title: "Hudson River、Lake Erie 與 Niagara Escarpment",
    highlights: [
      { id: 1, icon: "🏞️", title: "Hudson River Region", content: "1982 年 6 月 4 日核准，是紐約第一個 AVA；Brotherhood Winery 創立於 1839 年，被稱為北美持續營運最久的酒廠；法國雜交種（Baco Noir、Seyval Blanc）與冷涼型 vinifera 都重要" },
      { id: 2, icon: "🍇", title: "Lake Erie", content: "1983 年 10 月 21 日核准，跨 New York、Pennsylvania 與 Ohio；超過 42,000 英畝，以 Concord 為主" },
      { id: 3, icon: "🪨", title: "Niagara Escarpment", content: "2005 年 9 月 7 日核准；約 18,000 英畝、約 400 英畝種植；位於排水良好的石灰岩山脊" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">紐約至今有 11 個 AVA；東岸的 AVA 常涵蓋雜交種與美洲種，而不只是 vinifera。</p></div>"
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
            question: "母 AVA「Long Island」核准於哪一年？",
            options: ["A. 1985","B. 1986","C. 2001","D. 2016"],
            correct: 2,
            explanation: "2001 年 5 月 14 日，晚於兩個子 AVA。"
          },
          {
            type: 'single',
            question: "North Fork AVA 核准於哪一年？",
            options: ["A. 1982","B. 1985","C. 1986","D. 2001"],
            correct: 2,
            explanation: "1986 年 10 月 10 日。"
          },
          {
            type: 'single',
            question: "紐約第一個 AVA 是？",
            options: ["A. Hudson River Region","B. Finger Lakes","C. Lake Erie","D. Niagara Escarpment"],
            correct: 0,
            explanation: "Hudson River Region，1982 年 6 月 4 日。"
          },
          {
            type: 'single',
            question: "Long Island 第一座商業 vinifera 葡萄園種於哪一年？",
            options: ["A. 1839","B. 1962","C. 1973","D. 1985"],
            correct: 2,
            explanation: "1973 年（Hargrave，Cutchogue）。"
          }
        ]
      }
    }
  }
]
