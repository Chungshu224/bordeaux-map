/**
 * US-L1-3 白葡萄品種
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "白葡萄品種",
    subtitle: "Chardonnay、Riesling、Pinot Gris 與其他",
    icon: "🥂",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Oregon 的白酒",
    highlights: [
      { id: 1, icon: "🍐", title: "Pinot Gris", content: "2024 年約 6,483 英畝，約占全州種植面積的 14%，是 Oregon 最重要的白品種" },
      { id: 2, icon: "🥂", title: "Chardonnay", content: "2024 年約 3,482 英畝，約占 7%；與 Pinot Noir 同為 Willamette Valley 的重要品種" },
      { id: 3, icon: "📊", title: "數字的來源", content: "以上取自 Oregon Wine Board 的 2024 年普查，百分比為由面積換算的概數" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Oregon 的白酒以 Pinot Gris 為主、Chardonnay 次之，都與冷涼的 Willamette Valley 相配。</p></div>"
  },
  {
    title: "Washington 的 Riesling",
    highlights: [
      { id: 1, icon: "🍋", title: "Riesling 的地位", content: "2024 年占全州壓榨量約 15%（22,168 噸），僅次於 Cabernet Sauvignon，是白葡萄第一" },
      { id: 2, icon: "🤝", title: "Eroica", content: "1999 年起 Chateau Ste. Michelle 與德國的 Dr. Loosen 合作 Eroica Riesling" },
      { id: 3, icon: "🌾", title: "白酒占比", content: "2024 年白葡萄占壓榨量 45%，紅葡萄占 55%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Washington 的白酒重心在 Riesling，約占壓榨量一成半。</p></div>"
  },
  {
    title: "New York 的 Riesling 與其他品種",
    highlights: [
      { id: 1, icon: "🏔️", title: "Finger Lakes Riesling", content: "Riesling 被視為 New York 品質最穩定的 vinifera；2024 年 Finger Lakes 約 832 英畝；一般生產者每年釀 2 至 3 種風格" },
      { id: 2, icon: "🍇", title: "Concord 與美洲種", content: "Concord 屬 Vitis labrusca，占 New York 葡萄面積的大宗；Catawba 是重要的美洲雜交種" },
      { id: 3, icon: "🔤", title: "品種分類", content: "vinifera（歐洲種）、labrusca（美洲種）、雜交種是理解東岸品種的三個家族" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">東岸的品種故事多了一層：vinifera 之外還有美洲種與雜交種。</p></div>"
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
            question: "Oregon 最重要的白品種是？",
            options: ["A. Pinot Gris","B. Riesling","C. Sauvignon Blanc","D. Viognier"],
            correct: 0,
            explanation: "2024 年約占全州種植面積的 14%。"
          },
          {
            type: 'single',
            question: "2024 年 Washington 壓榨量排名第二的品種是？",
            options: ["A. Merlot","B. Chardonnay","C. Riesling","D. Syrah"],
            correct: 2,
            explanation: "Riesling 約 15%（22,168 噸），僅次於 Cabernet Sauvignon。"
          },
          {
            type: 'single',
            question: "Concord 屬於哪一個種？",
            options: ["A. Vitis vinifera","B. Vitis labrusca","C. Vitis riparia 雜交的歐洲種","D. Vitis amurensis"],
            correct: 1,
            explanation: "Concord 屬 Vitis labrusca。"
          },
          {
            type: 'single',
            question: "Eroica Riesling 是哪兩者的合作？",
            options: ["A. Chateau Ste. Michelle 與 Dr. Loosen","B. Eyrie 與 Drouhin","C. Leonetti 與 Quilceda Creek","D. Gold Seal 與 Frank"],
            correct: 0,
            explanation: "1999 年起的合作。"
          }
        ]
      }
    }
  }
]
