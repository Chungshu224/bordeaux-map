/**
 * ZA-L3-2 釀造風格深度
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造風格深度",
    subtitle: "Chenin、Pinotage、Cap Classique",
    icon: "🧪",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Chenin Blanc 的風格光譜",
    highlights: [
      { id: 1, icon: "🍏", title: "清爽乾型到橡木桶發酵", content: "同一品種可從不經橡木的清爽版，到老藤旱作、發酵與熟成於橡木桶的濃厚版；Swartland 與 Olifants River 的老藤（如 Sadie 的 Skurfberg）是代表" },
      { id: 2, icon: "🌾", title: "風乾甜酒", content: "Mullineux 與 De Trafford 以 Chenin Blanc 釀造風乾（straw wine）甜酒" },
      { id: 3, icon: "🫧", title: "氣泡與蒸餾", content: "1971 年 Simonsig 的 Frans Malan 以 Chenin Blanc 釀出 Kaapse Vonkel，是南非傳統法氣泡酒的起點（1973 年商業上市）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">描述 Chenin 風格時，要同時講「葡萄園（樹齡、旱作）」與「釀造（橡木、殘糖）」。</p></div>"
  },
  {
    title: "Pinotage",
    highlights: [
      { id: 1, icon: "🧬", title: "起源", content: "Pinot Noir × Cinsaut，由 Abraham Perold 於 1920 年代雜交；第一桶酒 1941 年，首次標示於酒標 1961 年" },
      { id: 2, icon: "📍", title: "主要產地", content: "2025 年約占面積 7.6%（6,619 公頃）；Stellenbosch 的 Pinotage 約占當地裝瓶量 11%（2022 年）" },
      { id: 3, icon: "🧩", title: "Cape Blend", content: "以 Pinotage 配 Cabernet、Merlot、Syrah 等的南非風格混釀；最低比例定義不一，課程不出比例題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pinotage 風格從輕盈果香到橡木濃厚都有；描述時從葡萄園位置、樹齡與萃取程度切入。</p></div>"
  },
  {
    title: "Cap Classique 規格",
    highlights: [
      { id: 1, icon: "📏", title: "現行最低要求", content: "酒渣陳年至少 12 個月（自 2023 年份起，原為 9 個月）、基酒須整串壓榨（僅限 cuvée）、瓶內壓力至少 3 bar（成品多約 6 bar）" },
      { id: 2, icon: "🍇", title: "品種自由", content: "法規上任何品種皆可；CCPA 鼓勵 Chardonnay、Pinot Noir、Pinot Meunier、Chenin Blanc" },
      { id: 3, icon: "📈", title: "產業現況", content: "CCPA 與 Cap Classique 名稱皆為 1992 年；2022 年秋季 CCPA 有 104 位會員，約占傳統法氣泡酒產量的 95%；約 80% 在國內消費" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">甜度（dosage 多約 6–8 g/L）是常見範圍而非法定上限；陳年門檻有舊／新規之分，引用時要註明年份。</p></div>"
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
            question: "南非第一款傳統法氣泡酒 Kaapse Vonkel 由誰於何時以何品種釀成？",
            options: ["A. Perold，1925，Pinotage","B. Frans Malan，1971，Chenin Blanc","C. Tim Hamilton Russell，1975，Pinot Noir","D. Duggie Jooste，1980，Muscat"],
            correct: 1,
            explanation: "Simonsig 的 Frans Malan，1971 年，Chenin Blanc。"
          },
          {
            type: 'single',
            question: "Cap Classique 的基酒壓榨方式要求為？",
            options: ["A. 連皮浸漬","B. 整串壓榨（僅限 cuvée）","C. 碳酸浸漬","D. 無規定"],
            correct: 1,
            explanation: "自 2023 年起須整串壓榨。"
          },
          {
            type: 'single',
            question: "Cap Classique 的瓶內壓力最低要求？",
            options: ["A. 1 bar","B. 3 bar","C. 6 bar","D. 10 bar"],
            correct: 1,
            explanation: "最低 3 bar；成品多約 6 bar。"
          },
          {
            type: 'single',
            question: "Pinotage 第一次出現在酒標上是哪一年？",
            options: ["A. 1941","B. 1961","C. 1991","D. 2010"],
            correct: 1,
            explanation: "1961 年；1941 年是第一桶酒。"
          }
        ]
      }
    }
  }
]
