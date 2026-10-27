/**
 * US-L3-2 酒款風格與標示規則
 * 事實來源：Wikipedia（Snake River Valley AVA、Monticello AVA、Texas High Plains AVA、Washington wine、Oregon wine、New York wine、Virginia wine、Texas wine）、Washington State Wine Commission（Sustainable WA × Salmon-Safe, 2024）、Oregon State University（2020 wildfire smoke）、AWRI（smoke taint）、Cornell LII（Granholm v. Heald, 2005）。數字一律標註年份；來源有出入者（如 Washington 的全美排名）不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒款風格與標示規則",
    subtitle: "Pinot Noir、Bordeaux 型混調、Riesling、冰酒與氣泡",
    icon: "🍷",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Oregon：Pinot Noir 與標示規則",
    highlights: [
      { id: 1, icon: "📊", title: "2022 年種植面積", content: "總計 44,487 英畝；Pinot Noir 24,729、Pinot Gris 5,546、Chardonnay 2,518、Syrah 1,679、Cabernet Sauvignon 1,557" },
      { id: 2, icon: "🏷️", title: "90% 與 75%", content: "Oregon 對多數品種標示要求至少 90%；Bordeaux、Rhône 品種、Sangiovese、Tempranillo、Zinfandel、Tannat 等則採聯邦 75% 標準" },
      { id: 3, icon: "📍", title: "地名限制", content: "標籤上的地名必須是官方產區名稱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Oregon 比聯邦要求更嚴：Pinot Noir 必須達 90%。</p></div>"
  },
  {
    title: "Washington：紅酒型與白酒",
    highlights: [
      { id: 1, icon: "🍇", title: "主要品種", content: "Cabernet Sauvignon、Riesling、Chardonnay、Merlot、Syrah" },
      { id: 2, icon: "🏭", title: "龍頭酒廠", content: "Chateau Ste. Michelle 是州內最大生產者，擁有全州超過三分之一的葡萄園土地；1988 年被評為 Best American Winery" },
      { id: 3, icon: "🧊", title: "規模", content: "2017 年超過 940 家酒廠、超過 55,000 英畝葡萄園" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Washington 同時有大規模工業化生產者與精品酒莊。</p></div>"
  },
  {
    title: "New York：Riesling、冰酒與氣泡",
    highlights: [
      { id: 1, icon: "🍏", title: "Riesling", content: "Finger Lakes 的代表品種，從乾型到甜型皆有；酸度由冷涼氣候保留" },
      { id: 2, icon: "❄️", title: "冰酒（ice wine）", content: "葡萄在樹上自然結凍後壓榨，只有少量高糖濃縮汁；需要夠冷的冬季" },
      { id: 3, icon: "🫧", title: "氣泡酒", content: "冷涼氣候帶來高酸，適合氣泡酒基酒；Oregon 與 New York 都有傳統法氣泡酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">冷涼＝高酸＝Riesling、冰酒與氣泡酒的天然優勢。</p></div>"
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
            question: "Oregon 多數品種標示的最低品種比例是？",
            options: ["A. 75%","B. 85%","C. 90%","D. 100%"],
            correct: 2,
            explanation: "90%；部分品種採聯邦 75%。"
          },
          {
            type: 'single',
            question: "下列哪個品種採聯邦 75% 標準？",
            options: ["A. Tempranillo","B. Pinot Noir","C. Pinot Gris","D. Chardonnay"],
            correct: 0,
            explanation: "Tempranillo 在 75% 名單中。"
          },
          {
            type: 'single',
            question: "Oregon 2022 年種植面積最大的品種是？",
            options: ["A. Pinot Noir","B. Pinot Gris","C. Chardonnay","D. Syrah"],
            correct: 0,
            explanation: "Pinot Noir 24,729 英畝。"
          },
          {
            type: 'single',
            question: "冰酒的基本做法是？",
            options: ["A. 葡萄在樹上自然結凍後壓榨","B. 採收後放進冷凍庫","C. 加入酒精終止發酵","D. 使用貴腐黴"],
            correct: 0,
            explanation: "自然結凍、冷凍壓榨。"
          }
        ]
      }
    }
  }
]
