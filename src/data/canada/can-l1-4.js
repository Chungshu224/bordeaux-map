/**
 * CAN-L1-4 VQA 與標示制度
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "VQA 與標示制度",
    subtitle: "省級 VQA、百分比規定、冰酒規範與混調酒的標示",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "VQA 是什麼",
    highlights: [
      { id: 1, icon: "🏛️", title: "省級管理", content: "VQA 是「Vintners Quality Alliance」；Ontario 與 BC 的規定比國家層級更嚴格，包括要求 100% 本地葡萄。酒必須通過實驗室與評審團檢驗，才能使用 VQA 標誌（The Canadian Encyclopedia）" },
      { id: 2, icon: "🍁", title: "Ontario", content: "VQA Ontario 於 1998 年登記成立，現稱 Ontario Wine Appellation Authority；法源為 2000 年 6 月 29 日公布的 Vintners Quality Alliance Act, 1999（Wine With Seth）" },
      { id: 3, icon: "🌲", title: "British Columbia", content: "BC 省政府於 2005 年 8 月以 Wines of Marked Quality Regulation（B.C. Reg. 79/2005）接手管理，建立 BC VQA 原產地名稱，執行交由 BC Wine Authority；該法規於 2018 年 7 月 27 日由 B.C. Reg. 168/2018 取代（BC VQA 官網、BC Laws）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">加拿大沒有單一的全國 VQA 法規，是各省自己管。</p></div>"
  },
  {
    title: "百分比規定",
    highlights: [
      { id: 1, icon: "📐", title: "Ontario 三個層級", content: "VQA Ontario：100% Ontario 葡萄；區域產區（如 Niagara Peninsula）：超過 85% 來自該區，其餘最多 15% 可來自 Ontario 其他地方；次產區：100% 來自該次產區。產區須標在正標上（VQA Ontario）" },
      { id: 2, icon: "📅", title: "年份與品種", content: "Ontario：有 85% 以上來自單一年份才可標年份；冰酒、貴腐酒、晚摘酒等類別必須標年份。「宣告須有至少 85% 的含量支持」是通則（VQA Ontario）" },
      { id: 3, icon: "🌲", title: "BC 的百分比", content: "BC VQA 要求 100% BC 葡萄；現行法規（B.C. Reg. 168/2018）規定標示 BC 以外的 GI 時，至少 85% 的葡萄來自該 GI 範圍（其餘來自 BC 其他地方）；年份至少 85%、單一品種名稱至少 85%（BC Laws）。較早的資料（Wine With Seth）曾寫 95%，以現行法規為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩省的年份與品種門檻都是 85%；產區方面，Ontario 的次產區要 100%，BC 的 GI 是 85%。</p></div>"
  },
  {
    title: "冰酒與混調酒的標示",
    highlights: [
      { id: 1, icon: "🧊", title: "Ontario 冰酒", content: "葡萄須在樹上自然結冰，在低於 -8°C 時採收，果汁至少 35°Brix；Late Harvest 至少 22、Select Late Harvest 至少 26、Special Select Late Harvest 至少 30°Brix。冰酒須 100% 為冰酒，產區標在正標（VQA Ontario）" },
      { id: 2, icon: "🌲", title: "BC 冰酒", content: "品種限 Vitis vinifera 或 Vidal Blanc；在 -8°C 以下於樹上自然結冰，並在結冰狀態下榨汁；每次榨汁後的果汁至少 32°Brix，發酵槽中平均至少 35°Brix；裝瓶時殘糖至少 100 g/L。冰酒與 Meritage 一詞僅限 BC VQA 計畫使用（Wine With Seth）" },
      { id: 3, icon: "🏭", title: "「Cellared in Canada」的終結", content: "「Cellared in Canada」曾是以進口散裝酒與加拿大酒混調的類別（過去 BC 允許 100% 外國成分，Ontario 不得超過 60%，見 Wikipedia）；加拿大食品檢驗局（CFIA）自 2018 年 3 月 12 日起取消這個用語，改為「International blend from imported and domestic wines」（以進口酒為主）或「International blend from domestic and imported wines」（以本國酒為主），標籤上也不得再出現「Canada」一詞（地址或「加拿大公司」等說法除外）。VQA 酒則是 100% 本省葡萄（USDA FAS、BIV、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">VQA 代表 100% 本省葡萄；混調酒現在必須標示為「International blend」。</p></div>"
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
            question: "VQA Ontario 的「VQA Niagara Peninsula」需要多少比例來自 Niagara？",
            options: ["A. 超過 85%","B. 50%","C. 60%","D. 100%"],
            correct: 0,
            explanation: "超過 85%，其餘最多 15% 可來自 Ontario 其他地方。"
          },
          {
            type: 'single',
            question: "Ontario 的次產區（sub-appellation）要求多少比例來自該次產區？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 3,
            explanation: "100%。"
          },
          {
            type: 'single',
            question: "Ontario 冰酒採收時的溫度條件是？",
            options: ["A. 低於 -8°C","B. 低於 0°C","C. 低於 -20°C","D. 沒有溫度限制"],
            correct: 0,
            explanation: "低於 -8°C，且自然結冰。"
          },
          {
            type: 'single',
            question: "Ontario 冰酒的果汁至少要有多少 °Brix？",
            options: ["A. 22","B. 26","C. 30","D. 35"],
            correct: 3,
            explanation: "至少 35°Brix。"
          },
          {
            type: 'single',
            question: "BC 冰酒允許使用哪些品種？",
            options: ["A. Vitis vinifera 或 Vidal Blanc","B. 只有 Riesling","C. 只有 Vidal","D. 任何品種含 Labrusca"],
            correct: 0,
            explanation: "Vitis vinifera 或 Vidal Blanc。"
          },
          {
            type: 'single',
            question: "BC VQA 的單一品種名稱，至少要有多少該品種？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85%。"
          },
          {
            type: 'single',
            question: "加拿大食品檢驗局（CFIA）自 2018 年 3 月 12 日起，對混調酒的標示做了什麼改變？",
            options: ["A. 取消「Cellared in Canada」，改為「International blend」用語","B. 要求所有酒標示 VQA","C. 禁止加拿大酒出口","D. 取消冰酒的標示規定"],
            correct: 0,
            explanation: "以進口酒為主標「International blend from imported and domestic wines」，以本國酒為主標「International blend from domestic and imported wines」。"
          }
        ]
      }
    }
  }
]
