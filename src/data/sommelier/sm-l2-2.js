/**
 * SM-L2-2 威士忌
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "威士忌",
    subtitle: "同樣叫威士忌，四個國家四套規則",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "蘇格蘭與愛爾蘭",
    highlights: [
      { id: 1, icon: "🏴", title: "Scotch 的基本規定", content: "在 Scotland 蒸餾，並在 Scotland 的橡木桶中熟成至少 3 年，裝瓶至少 40%；Single Malt 是單一酒廠、100% 發芽大麥、壺式蒸餾" },
      { id: 2, icon: "🗺️", title: "Scotch 的產區", content: "受保護的五個產區：Highland、Lowland、Speyside、Campbeltown、Islay；Islay 以泥煤煙燻風格聞名（泥煤用於烘乾麥芽），Speyside 酒廠最密集" },
      { id: 3, icon: "☘️", title: "愛爾蘭威士忌", content: "在愛爾蘭島上的木桶熟成至少 3 年；Single Pot Still 以發芽與未發芽大麥混合、壺式蒸餾，帶油潤的質地與辛香，是愛爾蘭的獨特風格" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Scotch 的關鍵字：3 年、40%、Single Malt、五個產區、泥煤。</p></div>"
  },
  {
    title: "美國與日本",
    highlights: [
      { id: 1, icon: "🇺🇸", title: "Bourbon", content: "穀物中至少 51% 玉米，必須在全新炭化橡木容器中熟成，蒸餾不超過 80%、入桶不超過 62.5%、裝瓶至少 40%；Straight Bourbon 至少 2 年。全新炭化桶帶來濃郁的香草與焦糖香" },
      { id: 2, icon: "🔥", title: "Tennessee", content: "與 Bourbon 相近，但入桶前以楓木炭過濾（Lincoln County Process），口感更柔順" },
      { id: 3, icon: "🇯🇵", title: "日本威士忌", content: "日本洋酒酒造組合 2021 年訂定標準：須使用麥芽、在日本發酵、蒸餾，在日本熟成至少 3 年並在日本裝瓶，才可稱日本威士忌（設有過渡期）；此前市面上有不少使用進口原酒的產品" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Bourbon 的風格來自「全新炭化桶」，日本威士忌的話題則來自「產地真實性」。</p></div>"
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
            question: "Scotch 至少要在橡木桶中熟成多久？",
            options: ["A. 5 年","B. 不需要熟成","C. 3 年","D. 1 年"],
            correct: 2,
            explanation: "裝瓶至少 40%。"
          },
          {
            type: 'single',
            question: "以泥煤煙燻風格聞名的 Scotch 產區是？",
            options: ["A. Speyside","B. Lowland","C. Campbeltown","D. Islay"],
            correct: 3,
            explanation: "泥煤用於烘乾麥芽。"
          },
          {
            type: 'single',
            question: "Bourbon 的穀物中玉米至少占多少？",
            options: ["A. 51%","B. 20%","C. 80%","D. 100%"],
            correct: 0,
            explanation: "並須用全新炭化橡木容器。"
          },
          {
            type: 'single',
            question: "Tennessee whiskey 與 Bourbon 最大的不同是？",
            options: ["A. 只用舊桶","B. 入桶前以楓木炭過濾","C. 不用玉米","D. 不需熟成"],
            correct: 1,
            explanation: "即 Lincoln County Process。"
          }
        ]
      }
    }
  }
]
