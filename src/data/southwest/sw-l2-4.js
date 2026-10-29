/**
 * SW-L2-4 Gascogne：Madiran、Saint-Mont 與 Armagnac
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Gascogne：Madiran、Saint-Mont 與 Armagnac",
    subtitle: "Tannat、白酒與白蘭地的家園",
    icon: "🥃",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Madiran",
    highlights: [
      { id: 1, icon: "⚫", title: "規格", content: "1948 年 7 月 10 日法令認定；37 個村鎮；只產紅酒；Tannat 至少占每個酒莊葡萄園的 60%；輔助品種 Cabernet Franc、Cabernet Sauvignon、Fer（Wine With Seth、Wikipedia）" },
      { id: 2, icon: "🧪", title: "微氧化", content: "Patrick Ducournau（Domaine Mouréou）發現控制通氣可軟化粗糙單寧，通常在酒精與乳酸發酵之間進行（Wine With Seth）" },
      { id: 3, icon: "📏", title: "規模", content: "Wikipedia 與 INAO 2025 規格皆記載約 1,300 公頃" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Madiran 是 Tannat 最具代表性的家園。</p></div>"
  },
  {
    title: "Pacherenc du Vic-Bilh",
    highlights: [
      { id: 1, icon: "⚪", title: "乾白", content: "Courbu 與 Petit Manseng 合計至少 60%、單一品種不超過 80%；Sauvignon 最多 10%；殘糖最多 3 g/L（Wikipedia）" },
      { id: 2, icon: "🍯", title: "甜白", content: "手工採收，潛在酒精至少 12%，殘糖至少 35 g/L（Wikipedia）" },
      { id: 3, icon: "🧭", title: "相鄰關係", content: "Wine With Seth 的 Gros Manseng 頁記載 Pacherenc du Vic-Bilh 的 AOC 為 1948 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一塊土地，紅的是 Madiran、白的是 Pacherenc。</p></div>"
  },
  {
    title: "Saint-Mont 與 Tursan",
    highlights: [
      { id: 1, icon: "⛪", title: "Saint-Mont", content: "2011 年升為 AOC；約 1,200 公頃，在 Gers；11 世紀本篤會修道院；Plaimont 合作社聯合約 1,000 位種植者；土壤為多色的黏土與卵石" },
      { id: 2, icon: "🌿", title: "Tursan", content: "VDQS 1958 年、AOC 2011 年；約 450 公頃；白酒 Baroque 占 30–90%；紅酒 Tannat 最多 40%（Wine With Seth、Wikipedia）" },
      { id: 3, icon: "🗺️", title: "位置", content: "Tursan 在 Landes 與 Gers，Adour 河為北界，東鄰 Madiran（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些 AOC 在 2011 年才完成升格，仍屬較年輕的名稱。</p></div>"
  },
  {
    title: "Côtes de Gascogne 與 Armagnac",
    highlights: [
      { id: 1, icon: "🥂", title: "Côtes de Gascogne IGP", content: "約 12,000 公頃，白酒約 85%；產量上限 120 hL/ha（Wine With Seth、INAO 規格書草案）" },
      { id: 2, icon: "🥃", title: "Armagnac 蒸餾", content: "單次連續蒸餾，出蒸餾器時酒精度 52–63%（Cognac 約 70%）；用 400–420 公升橡木桶培養；裝瓶時降至 40%（wein.plus）" },
      { id: 3, icon: "🧭", title: "三個地區", content: "Bas-Armagnac（西）、Ténarèze（中）、Haut-Armagnac（南與東）；主要蒸餾品種為 Ugni Blanc；Baco 是 Folle Blanche 與 Noah 的雜交種（armagnac.fr）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Armagnac 面積說法不一（約 12,000 或 20,000 公頃），不列入測驗。</p></div>"
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
            question: "Madiran 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 2011"],
            correct: 1,
            explanation: "1948 年 7 月 10 日。"
          },
          {
            type: 'single',
            question: "Madiran 規定 Tannat 至少占每個酒莊葡萄園的多少？",
            options: ["A. 30%","B. 45%","C. 60%","D. 90%"],
            correct: 2,
            explanation: "60%。"
          },
          {
            type: 'single',
            question: "Pacherenc du Vic-Bilh 乾白的殘糖上限是？",
            options: ["A. 3 g/L","B. 12 g/L","C. 35 g/L","D. 55 g/L"],
            correct: 0,
            explanation: "最多 3 g/L；甜白至少 35 g/L。"
          },
          {
            type: 'single',
            question: "Saint-Mont 與 Tursan 升為 AOC 是哪一年？",
            options: ["A. 1948","B. 1971","C. 2005","D. 2011"],
            correct: 3,
            explanation: "兩者都是 2011 年。"
          },
          {
            type: 'single',
            question: "Tursan 白酒中 Baroque 的比例範圍？",
            options: ["A. 5–10%","B. 30–90%","C. 60–70%","D. 100%"],
            correct: 1,
            explanation: "30% 至 90%。"
          },
          {
            type: 'single',
            question: "Armagnac 的蒸餾方式？",
            options: ["A. 單次連續蒸餾","B. 兩次壺式蒸餾","C. 真空蒸餾","D. 不經蒸餾"],
            correct: 0,
            explanation: "與 Cognac 的兩次蒸餾不同（wein.plus）。"
          }
        ]
      }
    }
  }
]
