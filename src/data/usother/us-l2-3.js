/**
 * US-L2-3 Oregon III：南部、Columbia Gorge 與跨州 AVA
 * 事實來源：Wikipedia（Willamette Valley AVA、Walla Walla Valley AVA、Columbia Gorge AVA、Yakima Valley AVA、Red Mountain AVA、Horse Heaven Hills AVA、Wahluke Slope AVA、Ancient Lakes of Columbia Valley、Puget Sound AVA、Finger Lakes AVA、North Fork of Long Island AVA、The Hamptons, Long Island AVA、Hudson River Region AVA、Lake Erie AVA、Niagara Escarpment AVA）、Wine With Seth（Willamette Valley AVA、Willamette volcanic soils、Southern Oregon AVA、Long Island AVA）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Oregon III：南部、Columbia Gorge 與跨州 AVA",
    subtitle: "Southern Oregon、Gorge、Walla Walla 與 Columbia Valley",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Southern Oregon",
    highlights: [
      { id: 1, icon: "🧩", title: "母 AVA 與子 AVA", content: "Southern Oregon AVA 於 2004 年核准，內含 Umpqua Valley（1984）、Rogue Valley（1991）、Applegate Valley、Red Hill Douglas County（2005）與 Elkton Oregon（2013）" },
      { id: 2, icon: "☀️", title: "氣候", content: "地中海式影響而非海洋性：夏季炎熱乾燥，海拔高處夜間較涼" },
      { id: 3, icon: "🍇", title: "品種", content: "Tempranillo 是代表（Abacela 於 1995 年創立），Syrah、Cabernet Sauvignon、Viognier 也重要；Pinot Noir 主要在較高或較涼的西部" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Southern Oregon 更像加州內陸：品種多元、以 Tempranillo 與 Syrah 展現個性。</p></div>"
  },
  {
    title: "Columbia Gorge：跨州的雨量梯度",
    highlights: [
      { id: 1, icon: "📍", title: "範圍", content: "2004 年 5 月 10 日核准；跨 Oregon（Hood River、Wasco）與 Washington（Skamania、Klickitat）；約 179,200 英畝，約 1,300 英畝種植" },
      { id: 2, icon: "🌧️", title: "由西向東急遽變乾", content: "降雨約每英里減少 1 英寸：Hood River 附近約 36 英寸，Washington 的 Lyle 附近約 10 英寸" },
      { id: 3, icon: "🍷", title: "品種多樣", content: "Pinot Noir、Chardonnay、Zinfandel、Riesling、Syrah 等，被行銷為「40 英里內的葡萄酒世界」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Gorge 的特點是短距離內氣候急變，因此品種橫跨冷涼到溫暖。</p></div>"
  },
  {
    title: "Walla Walla 與 Columbia Valley：兩州都顯示",
    highlights: [
      { id: 1, icon: "🧱", title: "Walla Walla Valley", content: "1984 年 2 月 6 日核准；約 182,060 英畝；位於 Washington 東南與 Oregon 東北角" },
      { id: 2, icon: "🪨", title: "The Rocks District", content: "2015 年 2 月核准，位於 Oregon 的 Umatilla County（Milton-Freewater），是 Walla Walla 內的子 AVA；一般說法以玄武岩卵石土壤與 Syrah 聞名" },
      { id: 3, icon: "🌐", title: "Columbia Valley", content: "1984 年 12 月 13 日核准，範圍以 Washington 為主，並延伸到北 Oregon（Columbia River 以南）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">本課程的地圖與介紹中，跨州 AVA 在 Oregon 與 Washington 兩邊都會顯示並註明跨州。</p></div>"
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
            question: "Southern Oregon 的代表品種是？",
            options: ["A. Tempranillo","B. Riesling","C. Pinot Gris","D. Chenin Blanc"],
            correct: 0,
            explanation: "Tempranillo，Abacela 創立於 1995 年。"
          },
          {
            type: 'single',
            question: "Columbia Gorge AVA 核准於哪一年？",
            options: ["A. 1984","B. 1991","C. 2004","D. 2015"],
            correct: 2,
            explanation: "2004 年 5 月 10 日。"
          },
          {
            type: 'single',
            question: "The Rocks District of Milton-Freewater 位於哪個州？",
            options: ["A. Washington","B. Oregon","C. Idaho","D. California"],
            correct: 1,
            explanation: "Oregon 的 Umatilla County。"
          },
          {
            type: 'single',
            question: "下列哪個 AVA 同時涵蓋 Washington 與 Oregon？",
            options: ["A. Walla Walla Valley","B. Red Mountain","C. Yakima Valley","D. Puget Sound"],
            correct: 0,
            explanation: "Walla Walla Valley（Columbia Valley 與 Columbia Gorge 也是）。"
          }
        ]
      }
    }
  }
]
