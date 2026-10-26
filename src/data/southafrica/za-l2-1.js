/**
 * ZA-L2-1 Wine of Origin 體系
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Wine of Origin 體系",
    subtitle: "Unit、Region、District、Ward",
    icon: "🗺️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "階層與機關",
    highlights: [
      { id: 1, icon: "🪜", title: "由大到小", content: "Geographical Unit → Region → District → Ward；其下還有生產者層級的 Estate Wine 與 Single Vineyard" },
      { id: 2, icon: "📅", title: "制度沿革", content: "基礎規章 1972 年生效、1973 年正式實施（1957 年法案下）；Geographical Units 於 1993 年 4 月 2 日加入；1989 年的 Liquor Products Act 取代 1957 年法案" },
      { id: 3, icon: "🏛️", title: "主管機關", content: "Wine Certification Authority（WCA）監督制度，2023 年 8 月 1 日由 Wine and Spirit Board 更名；SAWIS 負責日常行政、查核、可追溯與封條核發" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">與歐洲 AOC 不同，WO 以「產地真實性」為核心，不限制品種與釀法。</p></div>"
  },
  {
    title: "Western Cape 的五個 Region",
    highlights: [
      { id: 1, icon: "🌊", title: "Coastal Region", content: "包含 Stellenbosch、Paarl、Swartland、Tulbagh、Wellington、Darling、Cape Town、Franschhoek Valley 八個 District" },
      { id: 2, icon: "🧭", title: "其他四個 Region", content: "Cape South Coast、Breede River Valley、Klein Karoo、Olifants River（最北）" },
      { id: 3, icon: "🔢", title: "數量要看年度", content: "District 約 32 個、Ward 約 102 個，且資料對範圍（全國或僅 Western Cape）說法不一，因此課程不考精確數字；Geographical Unit 的數量各來源也不同" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住五個 Region 的名稱與 Coastal 的八個 District；其餘數字查最新官方名單。</p></div>"
  },
  {
    title: "跨層級的標示規則",
    highlights: [
      { id: 1, icon: "🧩", title: "混釀往上標", content: "跨兩個 Ward 的混釀標到 District；跨 District 標到 Region；跨 Region 標到 Geographical Unit" },
      { id: 2, icon: "🏡", title: "Estate 與 Single Vineyard", content: "Estate Wine 須在莊園酒窖釀造與裝瓶；Single Vineyard 為單一註冊地塊，不得超過 6 公頃" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出題重點是「往上標」的邏輯，而不是各層級的數量。</p></div>"
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
            question: "WO 階層由大到小，正確順序是？",
            options: ["A. Ward → District → Region → Unit","B. Unit → Region → District → Ward","C. Region → Unit → Ward → District","D. District → Unit → Region → Ward"],
            correct: 1,
            explanation: "Unit → Region → District → Ward。"
          },
          {
            type: 'single',
            question: "下列何者不是 Western Cape 的 Region？",
            options: ["A. Coastal Region","B. Breede River Valley","C. Swartland","D. Olifants River"],
            correct: 2,
            explanation: "Swartland 是 Coastal Region 內的 District。"
          },
          {
            type: 'single',
            question: "跨兩個 Ward 的混釀酒應標示到哪一層？",
            options: ["A. Ward","B. District","C. Region","D. 不可標示"],
            correct: 1,
            explanation: "標到 District。"
          },
          {
            type: 'single',
            question: "2023 年 8 月 1 日起負責 WO 制度的機關是？",
            options: ["A. KWV","B. Wine Certification Authority（WCA）","C. WOSA","D. IPW"],
            correct: 1,
            explanation: "WCA 由 Wine and Spirit Board 更名而來。"
          }
        ]
      }
    }
  }
]
