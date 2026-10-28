/**
 * US-L1-4 紅葡萄品種
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "紅葡萄品種",
    subtitle: "Pinot Noir、Cabernet Sauvignon、Merlot、Syrah 與 Cabernet Franc",
    icon: "🍷",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Oregon：Pinot Noir 王國",
    highlights: [
      { id: 1, icon: "🍒", title: "六成面積", content: "2024 年 Pinot Noir 占全州種植面積的 60%，其餘品種都遠少於它" },
      { id: 2, icon: "🌍", title: "與 Burgundy 的關係", content: "1987 年 Drouhin 家族在 North Willamette Valley 買下 100 英畝，成立 Domaine Drouhin Oregon" },
      { id: 3, icon: "🏷️", title: "標示門檻", content: "Oregon 州法規定品種標示須含至少 90% 該品種（部分品種例外，見 L1-5）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Oregon = Pinot Noir：六成面積、Burgundy 家族的投資、嚴格的 90% 標示規則。</p></div>"
  },
  {
    title: "Washington：Cabernet Sauvignon 領軍",
    highlights: [
      { id: 1, icon: "📈", title: "壓榨量第一", content: "2024 年 Cabernet Sauvignon 壓榨 40,589 噸，占全州約 27%；全州總壓榨量約 150,000 噸" },
      { id: 2, icon: "🔴", title: "紅多於白", content: "2024 年紅葡萄占 55%、白葡萄占 45%；前七大品種合計占 86%" },
      { id: 3, icon: "🌋", title: "Syrah 與 Merlot", content: "Syrah 被視為成長最快的紅品種；Cabernet Sauvignon 已超越過去領先的 Merlot" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Washington 是紅白並重的大陸型產區，Cabernet Sauvignon 約占壓榨量四分之一強。</p></div>"
  },
  {
    title: "New York：Cabernet Franc 與 Merlot",
    highlights: [
      { id: 1, icon: "🌿", title: "Cabernet Franc", content: "與 Riesling 並列為 New York 代表性的 vinifera；較早熟，適合涼爽的東岸" },
      { id: 2, icon: "🍷", title: "Merlot", content: "Long Island 常見的紅品種之一；Long Island 的第一座商業葡萄園與酒廠成立於 1973 年" },
      { id: 3, icon: "⚖️", title: "風格取向", content: "東岸紅酒多強調涼爽氣候的酸度與細緻，而非濃縮度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">東岸紅酒的主軸是 Cabernet Franc 與 Merlot，風格偏涼爽細緻。</p></div>"
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
            question: "2024 年 Pinot Noir 約占 Oregon 種植面積多少？",
            options: ["A. 20%","B. 40%","C. 60%","D. 90%"],
            correct: 2,
            explanation: "約 60%。"
          },
          {
            type: 'single',
            question: "2024 年 Washington 壓榨量最大的品種是？",
            options: ["A. Merlot","B. Cabernet Sauvignon","C. Syrah","D. Pinot Noir"],
            correct: 1,
            explanation: "40,589 噸，約 27%。"
          },
          {
            type: 'single',
            question: "2024 年 Washington 紅、白葡萄壓榨量的比例是？",
            options: ["A. 紅 55%、白 45%","B. 紅 80%、白 20%","C. 紅 30%、白 70%","D. 各 50%"],
            correct: 0,
            explanation: "紅 55%、白 45%。"
          },
          {
            type: 'single',
            question: "Domaine Drouhin Oregon 的土地購買是哪一年？",
            options: ["A. 1961","B. 1979","C. 1987","D. 2001"],
            correct: 2,
            explanation: "1987 年，買下 100 英畝。"
          }
        ]
      }
    }
  }
]
