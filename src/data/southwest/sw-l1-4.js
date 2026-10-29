/**
 * SW-L1-4 法規與標籤
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與標籤",
    subtitle: "AOC、IGP 與 Vin de France 的多層結構",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "三個層級",
    highlights: [
      { id: 1, icon: "🥇", title: "AOP／AOC", content: "最嚴格的一層，規定品種、產量與酒型；西南產區各 AOC 在不同年代各自取得" },
      { id: 2, icon: "🥈", title: "IGP", content: "Wine With Seth：IGP 是介於 AOP 與 Vin de France 之間的第二層；2009 年 8 月 1 日起依歐盟 607/2009 號規則，所有 Vin de Pays 改稱 IGP" },
      { id: 3, icon: "🥉", title: "Vin de France", content: "最下層，不標示產區；Wine With Seth 記載全法國共有 75 個 IGP（大區 6、省級 28、小地區 41）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個酒莊可能同時做 AOC 與 IGP 的酒。</p></div>"
  },
  {
    title: "AOC 規格的例子",
    highlights: [
      { id: 1, icon: "🔴", title: "Cahors 與 Madiran", content: "Cahors：Malbec 至少 70%，只產紅酒；Madiran：Tannat 至少占每個酒莊葡萄園的 60%，只產紅酒（Wine With Seth、Wikipedia）" },
      { id: 2, icon: "🍯", title: "Jurançon 糖度門檻", content: "Jurançon Sec 殘糖最多 4 g/L；甜酒至少 40 g/L；Vendanges Tardives 至少 55 g/L（Wine With Seth）" },
      { id: 3, icon: "🥂", title: "Gaillac 的酒型", content: "Gaillac Doux 殘糖至少 70 g/L；Primeur 為純 Gamay，11 月第三個星期四上市；Méthode Gaillacoise 僅用 Mauzac（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">單一 AOC 內就可能包含乾、甜、氣泡等多種酒型。</p></div>"
  },
  {
    title: "IGP 與地方大宗",
    highlights: [
      { id: 1, icon: "🌾", title: "Côtes de Gascogne", content: "Wine With Seth：約 12,000 公頃，以 Gers 為中心，約八成五為白酒（Colombard、Ugni Blanc、Gros Manseng、Sauvignon Blanc）" },
      { id: 2, icon: "📑", title: "規格細節", content: "INAO 規格書草案：1982 年 1 月 25 日政令認定 vin de pays；產量上限 120 hL/ha；未加糖最低酒精 9.0%" },
      { id: 3, icon: "🗺️", title: "Comté Tolosan", content: "Wine With Seth：涵蓋西南產區中 Gascony 以外的範圍；對照 Pays d'Oc 約 120,000 公頃、允許 58 個品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">IGP 讓酒莊在 AOC 以外有更大的品種與風格自由。</p></div>"
  },
  {
    title: "標籤與相關產品",
    highlights: [
      { id: 1, icon: "📛", title: "品種標示", content: "IGP 酒標標示品種時，該品種至少須占 85%（Wine With Seth）" },
      { id: 2, icon: "🏷️", title: "產區名優先", content: "Wikipedia：酒很少以「Vins du Sud-Ouest」販售，多以小產區或個別 AOC 名稱標示" },
      { id: 3, icon: "🥃", title: "Armagnac 與 Floc", content: "Armagnac 是產自 Gascony 的白蘭地；部分葡萄汁與 Armagnac 混合成 mistelle，稱 Floc de Gascogne（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 2 會逐區看各產區的實際規格。</p></div>"
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
            question: "Vin de Pays 全面改稱 IGP 的日期是？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 1936 年 5 月 4 日","D. 2016 年 1 月 1 日"],
            correct: 0,
            explanation: "依歐盟 607/2009 號規則（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "IGP 酒標標示品種，該品種至少須占多少？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85%。"
          },
          {
            type: 'single',
            question: "Jurançon Sec 的殘糖上限是？",
            options: ["A. 4 g/L","B. 12 g/L","C. 40 g/L","D. 55 g/L"],
            correct: 0,
            explanation: "最多 4 g/L（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Jurançon Vendanges Tardives 的殘糖下限是？",
            options: ["A. 4 g/L","B. 12 g/L","C. 40 g/L","D. 55 g/L"],
            correct: 3,
            explanation: "至少 55 g/L；一般甜 Jurançon 至少 40 g/L。"
          },
          {
            type: 'single',
            question: "Gaillac Primeur 使用什麼品種、何時上市？",
            options: ["A. 純 Gamay，11 月第三個星期四","B. 純 Syrah，9 月初","C. Malbec，12 月","D. Tannat，4 月"],
            correct: 0,
            explanation: "Wine With Seth。"
          },
          {
            type: 'single',
            question: "Floc de Gascogne 是什麼？",
            options: ["A. 葡萄汁與 Armagnac 混合的 mistelle","B. 一種氣泡酒","C. 一個 AOC 紅酒","D. 一種啤酒"],
            correct: 0,
            explanation: "Wikipedia。"
          }
        ]
      }
    }
  }
]
