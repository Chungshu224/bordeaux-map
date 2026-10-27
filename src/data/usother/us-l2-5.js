/**
 * US-L2-5 Washington II：其他 AVA
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Washington II：其他 AVA",
    subtitle: "Horse Heaven Hills、Wahluke Slope、Ancient Lakes、Puget Sound",
    icon: "🗻",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Horse Heaven Hills 與 Wahluke Slope",
    highlights: [
      { id: 1, icon: "💨", title: "Horse Heaven Hills", content: "2005 年 7 月 1 日核准，約 570,000 英畝；風很強（風程比 Walla Walla 與 Yakima 多約 30%）；年降雨約 6.2 英寸" },
      { id: 2, icon: "☀️", title: "Wahluke Slope", content: "約 81,000 英畝，約 8,932 英畝種植，占全州釀酒葡萄面積近 15%；年降雨約 5.9 英寸，約 3,013 度日；深層風積砂與黃土（2005 年底或 2006 年核准，來源不一）" },
      { id: 3, icon: "🍷", title: "品種", content: "Horse Heaven Hills 有 Cabernet Sauvignon、Syrah、Grenache、Riesling 等 16 個品種；Wahluke Slope 以 Merlot 與 Cabernet Sauvignon 聞名" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩者都是 Columbia Valley 內的乾燥溫暖產區：一個多風、一個極熱。</p></div>"
  },
  {
    title: "Ancient Lakes 與其他 AVA",
    highlights: [
      { id: 1, icon: "🍋", title: "Ancient Lakes", content: "2012 年 10 月 18 日核准（HistoryLink 寫 2013）；約 162,762 英畝，1,604 英畝種植；海拔約 1,200 至 1,500 英尺，以 Riesling 與 Chardonnay 等白葡萄為主" },
      { id: 2, icon: "🌫️", title: "Puget Sound", content: "1995 年 10 月 4 日核准；年降雨 17 至 60 英寸；適合 Madeleine Angevine、Siegerrebe、Müller-Thurgau 等涼爽品種；多數酒廠使用東 Washington 的葡萄" },
      { id: 3, icon: "➕", title: "較新的 AVA", content: "Lake Chelan（2009）、Snipes Mountain（2009）、Naches Heights（2011）、Lewis-Clark Valley（2016，大部分在 Idaho）、Candy Mountain（2020）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Washington 的 AVA 以乾燥東部為主，Puget Sound 是唯一濕潤涼爽的例外。</p></div>"
  },
  {
    title: "Walla Walla 的酒莊故事",
    highlights: [
      { id: 1, icon: "🍇", title: "品種比例（2007 年）", content: "Cabernet Sauvignon 約 41%、Merlot 約 26%、Syrah 約 16%（此為 2007 年資料，現況已不同）" },
      { id: 2, icon: "🌡️", title: "氣候", content: "生長季 190 至 220 天、約 3,024 度日；日夜溫差大，Blue Mountains 的冷空氣造成劇烈變化；冬季低溫可達 −20°F" },
      { id: 3, icon: "🌱", title: "土壤", content: "以風積黃土為主，排水良好" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Walla Walla 的酒莊先驅在 L1 已提過；氣候上冬季低溫是主要風險。</p></div>"
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
            question: "Horse Heaven Hills 的突出特徵是？",
            options: ["A. 強風","B. 海霧","C. 高降雨","D. 島嶼氣候"],
            correct: 0,
            explanation: "風程比 Walla Walla 與 Yakima 多約 30%。"
          },
          {
            type: 'single',
            question: "Puget Sound AVA 核准於哪一年？",
            options: ["A. 1983","B. 1995","C. 2005","D. 2016"],
            correct: 1,
            explanation: "1995 年 10 月 4 日。"
          },
          {
            type: 'single',
            question: "Ancient Lakes 以哪類葡萄為主？",
            options: ["A. 白葡萄（Riesling、Chardonnay）","B. Cabernet Sauvignon","C. Zinfandel","D. Concord"],
            correct: 0,
            explanation: "白葡萄為主。"
          },
          {
            type: 'single',
            question: "Horse Heaven Hills AVA 核准於哪一年？",
            options: ["A. 1995","B. 2001","C. 2005","D. 2012"],
            correct: 2,
            explanation: "2005 年 7 月 1 日。"
          }
        ]
      }
    }
  }
]
