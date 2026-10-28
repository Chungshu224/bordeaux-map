/**
 * US-L3-7 Level 3 綜合評量
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "最終回顧與測驗",
    icon: "🏆",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Level 3 與整門課重點",
    highlights: [
      { id: 1, icon: "🌡️", title: "風險地圖", content: "內陸／東部＝冬季凍害；西岸＝秋雨與野火；東南＝濕熱與 Pierce's disease" },
      { id: 2, icon: "📅", title: "三個小州", content: "Snake River Valley 2007、Monticello 1984、Texas High Plains 1993" },
      { id: 3, icon: "⚖️", title: "制度", content: "Oregon 90%／75%、Granholm v. Heald 2005、Sustainable WA 2022" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成後，你應能獨立比較三州的風土、風格與制度。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Snake River Valley AVA 核准年份？",
            options: ["A. 1984","B. 1993","C. 2007","D. 2019"],
            correct: 2,
            explanation: "2007 年。"
          },
          {
            type: 'single',
            question: "Monticello AVA 於哪一年核准？",
            options: ["A. 1976","B. 1984","C. 2001","D. 2019"],
            correct: 1,
            explanation: "1984 年。"
          },
          {
            type: 'single',
            question: "Texas High Plains 的特徵是？",
            options: ["A. 高海拔、乾燥、病害少，全州近半葡萄產自此","B. 海洋性多霧","C. 湖效應","D. 火山土"],
            correct: 0,
            explanation: "海拔多在 3,000–4,000 英尺。"
          },
          {
            type: 'single',
            question: "Oregon 多數品種標示最低比例是？",
            options: ["A. 75%","B. 85%","C. 90%","D. 100%"],
            correct: 2,
            explanation: "90%。"
          },
          {
            type: 'single',
            question: "Granholm v. Heald 的結論是？",
            options: ["A. 州不得歧視外州酒廠直送","B. 禁止所有直送","C. 廢除三級制度","D. 強制跨州配送"],
            correct: 0,
            explanation: "三級制度本身仍合法。"
          },
          {
            type: 'single',
            question: "Sustainable WA 推出年份？",
            options: ["A. 2005","B. 2015","C. 2022","D. 2024"],
            correct: 2,
            explanation: "2022 年；2024 年為 Salmon-Safe 雙認證。"
          },
          {
            type: 'single',
            question: "1996 與 2003 年凍害損傷的品種？",
            options: ["A. Merlot","B. Riesling","C. Syrah","D. Pinot Noir"],
            correct: 0,
            explanation: "Merlot。"
          },
          {
            type: 'single',
            question: "Texas 東南重創葡萄園的病害是？",
            options: ["A. Pierce's disease","B. Botrytis","C. Esca","D. Flavescence dorée"],
            correct: 0,
            explanation: "Pierce's disease。"
          },
          {
            type: 'single',
            question: "Willamette 年降雨約多少？",
            options: ["A. 6 英寸","B. 約 40 英寸","C. 100 英寸","D. 2 英寸"],
            correct: 1,
            explanation: "約 40 英寸，集中在 10–5 月。"
          },
          {
            type: 'single',
            question: "Finger Lakes 的兩個子 AVA 是？",
            options: ["A. Cayuga Lake 與 Seneca Lake","B. Keuka 與 Erie","C. Hamptons 與 North Fork","D. Hudson 與 Niagara"],
            correct: 0,
            explanation: "Cayuga Lake 與 Seneca Lake。"
          },
          {
            type: 'single',
            question: "下列哪個 AVA 不跨州？",
            options: ["A. Red Mountain","B. Walla Walla Valley","C. Columbia Gorge","D. Snake River Valley"],
            correct: 0,
            explanation: "Red Mountain 完全位於 Washington。"
          },
          {
            type: 'single',
            question: "Lake Erie AVA 以哪個品種為主？",
            options: ["A. Concord","B. Pinot Noir","C. Tempranillo","D. Viognier"],
            correct: 0,
            explanation: "Concord。"
          }
        ]
      }
    }
  }
]
