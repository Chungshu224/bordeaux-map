/**
 * LG-L1-2 地理與氣候
 * 事實來源：Wine With Seth（Languedoc-Roussillon、Languedoc AOC、Carignan 頁，2026 年查閱）、Wikipedia（Languedoc-Roussillon wine）。數字一律標註來源；來源有出入者（葡萄園面積 700,000 英畝與 230,000 公頃不一致、「第一個法定產區」是 Fitou 或 Blanquette de Limoux、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理與氣候",
    subtitle: "地中海氣候、風、土壤與兩個副產區",
    icon: "🌬️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "範圍與規模",
    highlights: [
      { id: 1, icon: "📏", title: "世界最大的酒區之一", content: "Wine With Seth 稱其為具地理認同的世界最大產酒區，產量逾法國總量三分之一；面積數字來源互相不一致（700,000 英畝對 230,000 公頃），課內不採用" },
      { id: 2, icon: "🧭", title: "兩個部分", content: "Languedoc 約占兩區合計產量九成、Roussillon 約一成（Wine With Seth）" },
      { id: 3, icon: "🏷️", title: "名稱陷阱", content: "「Languedoc」既指歷史地區，也指今日大區北部；Roussillon 在 Pyrénées-Orientales，Aude 與 Hérault 屬 Languedoc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先分清地理，之後讀產區名稱才不會混亂。</p></div>"
  },
  {
    title: "地中海氣候",
    highlights: [
      { id: 1, icon: "☀️", title: "日照", content: "每年逾 2,500 小時（Wine With Seth）" },
      { id: 2, icon: "🌧️", title: "夏乾冬雨", content: "5 至 8 月生長旺季非常乾燥，雨多落在冬季；乾旱是最常見的威脅（Wikipedia）" },
      { id: 3, icon: "⛈️", title: "極端天氣", content: "Wikipedia 舉例：1999 年 Corbières 與 Minervois 在 36 小時內下了一整年的雨；5 月冰雹襲擊 Roussillon" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">光熱充足但水很稀少，這是理解產區的起點。</p></div>"
  },
  {
    title: "風與海拔",
    highlights: [
      { id: 1, icon: "💨", title: "Tramontane", content: "自西北吹來的乾燥強風，在 Pyrénées 與 Massif Central 之間被導引，抑制病害、有利有機栽培（Wine With Seth）" },
      { id: 2, icon: "🌫️", title: "Marin", content: "自東南吹來、帶濕氣的暖海風，多見於春秋（Wine With Seth）" },
      { id: 3, icon: "⛰️", title: "地勢", content: "Languedoc 多在沿海平原與河谷；Roussillon 位於 Pyrénées 周邊的狹窄河谷與梯田，海拔較高；北界是 Massif Central 與 Cévennes" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風是最重要的天然「植保」，山與海則提供多樣的小氣候。</p></div>"
  },
  {
    title: "土壤多樣性",
    highlights: [
      { id: 1, icon: "🪨", title: "石灰與沖積", content: "內陸多白堊、石灰岩與礫石，近海處偏沖積土（Wikipedia）；La Clape 主要為石灰岩" },
      { id: 2, icon: "⚫", title: "片岩與花崗岩", content: "Faugères 與部分 Saint-Chinian 位於片岩；產區也有花崗岩與黏土" },
      { id: 3, icon: "🪙", title: "古河床卵石", content: "部分高評價葡萄園位於類似 Châteauneuf-du-Pape 的古河床卵石上（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">土壤多樣是下一階段逐一認識各產區的線索。</p></div>"
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
            question: "Tramontane 風的方向與特性是？",
            options: ["A. 西北來的乾燥強風","B. 東南來的潮濕暖風","C. 北方的冰雹風","D. 只在冬天吹的風"],
            correct: 0,
            explanation: "乾燥西北風，抑制病害。"
          },
          {
            type: 'single',
            question: "Marin 風通常帶來什麼？",
            options: ["A. 春秋的濕氣","B. 極乾熱氣","C. 降雪","D. 沙塵"],
            correct: 0,
            explanation: "溫暖的海風，帶濕氣。"
          },
          {
            type: 'single',
            question: "Wine With Seth 記載每年日照約逾幾小時？",
            options: ["A. 1,200","B. 1,800","C. 2,500","D. 3,500"],
            correct: 2,
            explanation: "逾 2,500 小時。"
          },
          {
            type: 'single',
            question: "Languedoc 與 Roussillon 的產量比例大約是？",
            options: ["A. 50 : 50","B. 90 : 10","C. 10 : 90","D. 70 : 30"],
            correct: 1,
            explanation: "Languedoc 約九成、Roussillon 約一成。"
          },
          {
            type: 'single',
            question: "哪個產區主要位於片岩上？",
            options: ["A. Faugères","B. Picpoul de Pinet","C. Limoux","D. Fitou"],
            correct: 0,
            explanation: "Faugères 以片岩著稱。"
          },
          {
            type: 'single',
            question: "Roussillon 葡萄園的地形特徵是？",
            options: ["A. Pyrénées 周邊狹窄河谷與梯田","B. 廣闊海岸沙丘","C. 平坦高原","D. 火山島"],
            correct: 0,
            explanation: "狹窄河谷與梯田，海拔較高。"
          }
        ]
      }
    }
  }
]
