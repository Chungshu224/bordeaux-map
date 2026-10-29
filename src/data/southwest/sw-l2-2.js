/**
 * SW-L2-2 Cahors 與 Lot、Garonne 河谷
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Cahors 與 Lot、Garonne 河谷",
    subtitle: "黑酒 Malbec 的故鄉與鄰近的 Fer 之地",
    icon: "🌉",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Cahors 的規格",
    highlights: [
      { id: 1, icon: "📜", title: "AOC 與品種", content: "1971 年取得 AOC；只產紅酒；Malbec 至少 70%，Merlot 與 Tannat 各可至 30%；每公頃至少 4,000 株（Wine With Seth、Wikipedia）" },
      { id: 2, icon: "📏", title: "規模", content: "約 4,200 公頃；約 25% 外銷，2004 至 2013 年出口量翻倍（Wine With Seth）" },
      { id: 3, icon: "🍷", title: "風格", content: "Wine Folly：李子、菸草與一絲青蘋果；Wine With Seth：台地與上層階地的酒可陳放十年以上" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白酒與粉紅酒在這片土地上只能標示為 IGP Lot。</p></div>"
  },
  {
    title: "黑酒的故事",
    highlights: [
      { id: 1, icon: "👑", title: "中世紀名聲", content: "1152 年的婚禮宴會用過 Cahors 酒；13 世紀 Cahors 商人把酒經波爾多運往英國，後來這種「黑酒」再轉運到俄羅斯（Wine Folly、Wikipedia）" },
      { id: 2, icon: "❄️", title: "1956 年霜害", content: "1956 年 2 月霜害使幾乎所有葡萄園需要重植，之後 Malbec 更為主導（Wine With Seth）" },
      { id: 3, icon: "🇦🇷", title: "阿根廷連結", content: "2007 年 UIVC 與阿根廷葡萄酒機構合作；4 月 17 日為 World Malbec Day（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Malbec 在 Cahors 是歷史悠久的本地品種，不是外來者。</p></div>"
  },
  {
    title: "Lot 河上游：Marcillac",
    highlights: [
      { id: 1, icon: "🔴", title: "Marcillac 的規模", content: "1965 年為 VDQS，1990 年升為 AOC；約 200 公頃、其中 161 公頃種植；位於 Rodez 西北約 20 公里的 Aveyron（Wikipedia）" },
      { id: 2, icon: "🧱", title: "紅色黏土", content: "土壤是富含氧化鐵的紅色黏土 rougiers；階梯形陡坡朝正南，日照約 2,200 小時（Wikipedia）" },
      { id: 3, icon: "🔩", title: "Mansois", content: "主要品種是 Mansois（Fer Servadou 的當地名稱），約占九成；風格輕盈、帶覆盆子香，多在兩年內飲用（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Fer 在這裡以不同於 Cahors 的輕盈面貌出現。</p></div>"
  },
  {
    title: "Garonne 河谷：Buzet 與 Marmandais",
    highlights: [
      { id: 1, icon: "🏭", title: "Buzet", content: "1953 年為 VDQS（Côtes de Buzet）、1973 年成為 AOC、1986 年改稱 Buzet；約 1,800 公頃、27 個村鎮，位於 Lot-et-Garonne（Wikipedia）" },
      { id: 2, icon: "🌾", title: "Buzet 品種", content: "紅酒用 Cabernet Franc、Cabernet Sauvignon、Côt 與 Merlot；白酒用 Muscadelle、Sauvignon 與 Sémillon（Wikipedia）" },
      { id: 3, icon: "🧅", title: "Côtes du Marmandais", content: "1990 年自 VDQS 升為 AOC；位於 Entre-Deux-Mers 東南、Garonne 沿岸；品種多達 12 種，含 Abouriou 與 Fer（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">它們都是波爾多的衛星，風格最接近波爾多。</p></div>"
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
            question: "Cahors 的 Malbec 最低比例是？",
            options: ["A. 50%","B. 60%","C. 70%","D. 85%"],
            correct: 2,
            explanation: "70%。"
          },
          {
            type: 'single',
            question: "Marcillac 成為 AOC 是哪一年？",
            options: ["A. 1965","B. 1971","C. 1990","D. 2011"],
            correct: 2,
            explanation: "1990 年；1965 年為 VDQS（Wikipedia）。"
          },
          {
            type: 'single',
            question: "Marcillac 的主要品種當地叫什麼？",
            options: ["A. Mansois","B. Pinenc","C. Braucol","D. Côt"],
            correct: 0,
            explanation: "Mansois 就是 Fer Servadou。"
          },
          {
            type: 'single',
            question: "Buzet 成為 AOC 是哪一年？",
            options: ["A. 1953","B. 1973","C. 1986","D. 1990"],
            correct: 1,
            explanation: "1973 年；1986 年改稱 Buzet。"
          },
          {
            type: 'single',
            question: "Côtes du Marmandais 成為 AOC 是哪一年？",
            options: ["A. 1953","B. 1973","C. 1990","D. 2011"],
            correct: 2,
            explanation: "1990 年。"
          },
          {
            type: 'single',
            question: "Cahors 的白酒與粉紅酒只能標示為？",
            options: ["A. IGP Lot","B. AOC Cahors","C. AOC Marcillac","D. 不可販售"],
            correct: 0,
            explanation: "AOC Cahors 只限紅酒。"
          }
        ]
      }
    }
  }
]
