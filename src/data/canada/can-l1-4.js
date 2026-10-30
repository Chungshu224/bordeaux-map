/**
 * CAN-L1-4 VQA 與標示制度
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "VQA 與標示制度",
    subtitle: "省級 VQA、百分比規定、冰酒規範與 Cellared in Canada",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "VQA 是什麼",
    highlights: [
      { id: 1, icon: "🏛️", title: "省級管理", content: "VQA 是「Vintners Quality Alliance」；Ontario 與 BC 的規定比國家層級更嚴格，包括要求 100% 本地葡萄。酒必須通過實驗室與評審團檢驗，才能使用 VQA 標誌（The Canadian Encyclopedia）" },
      { id: 2, icon: "🍁", title: "Ontario", content: "VQA Ontario 於 1998 年登記成立，現稱 Ontario Wine Appellation Authority；法源為 2000 年 6 月 29 日公布的 Vintners Quality Alliance Act, 1999（Wine With Seth）" },
      { id: 3, icon: "🌲", title: "British Columbia", content: "BC 的 Wines of Marked Quality Regulation（B.C. Reg. 168/2018）於 2005 年 8 月生效，建立 BC VQA；由 BC Wine Authority 管理（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">加拿大沒有單一的全國 VQA 法規，是各省自己管。</p></div>"
  },
  {
    title: "百分比規定",
    highlights: [
      { id: 1, icon: "📐", title: "Ontario 三個層級", content: "VQA Ontario：100% Ontario 葡萄；區域產區（如 Niagara Peninsula）：超過 85% 來自該區，其餘最多 15% 可來自 Ontario 其他地方；次產區：100% 來自該次產區。產區須標在正標上（VQA Ontario）" },
      { id: 2, icon: "📅", title: "年份與品種", content: "Ontario：有 85% 以上來自單一年份才可標年份；冰酒、貴腐酒、晚摘酒等類別必須標年份。「宣告須有至少 85% 的含量支持」是通則（VQA Ontario）" },
      { id: 3, icon: "🌲", title: "BC 的百分比", content: "BC VQA 要求 100% BC 葡萄；所標產區至少 95% 來自該區、年份至少 85%、品種至少 85%。單一品種名稱需有至少 85% 的該品種（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Ontario 與 BC 都以 85% 作為年份與品種的門檻，但產區門檻不同。</p></div>"
  },
  {
    title: "冰酒與 Cellared in Canada",
    highlights: [
      { id: 1, icon: "🧊", title: "Ontario 冰酒", content: "葡萄須在樹上自然結冰，在低於 -8°C 時採收，果汁至少 35°Brix；Late Harvest 至少 22、Select Late Harvest 至少 26、Special Select Late Harvest 至少 30°Brix。冰酒須 100% 為冰酒，產區標在正標（VQA Ontario）" },
      { id: 2, icon: "🌲", title: "BC 冰酒", content: "品種限 Vitis vinifera 或 Vidal Blanc；在 -8°C 以下於樹上自然結冰，並在結冰狀態下榨汁；每次榨汁後的果汁至少 32°Brix，發酵槽中平均至少 35°Brix；裝瓶時殘糖至少 100 g/L。冰酒與 Meritage 一詞僅限 BC VQA 計畫使用（Wine With Seth）" },
      { id: 3, icon: "🏭", title: "Cellared in Canada", content: "以進口散裝酒與加拿大酒混調的類別。BC 允許 100% 外國成分；Ontario 外國成分不得超過 60%，且不得加水稀釋；2014 年 4 月 1 日起，1993 年以前就存在的 Ontario 酒廠可做外國成分最多 75% 的「International - Canadian」混調。VQA 酒則是 100% 加拿大葡萄（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">看到 VQA 才是 100% 加拿大葡萄；Cellared in Canada 不是。</p></div>"
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
            question: "Ontario 的 Cellared in Canada 酒，外國成分不得超過多少（一般情況）？",
            options: ["A. 10%","B. 30%","C. 60%","D. 100%"],
            correct: 2,
            explanation: "60%；BC 則允許 100% 外國成分。"
          }
        ]
      }
    }
  }
]
