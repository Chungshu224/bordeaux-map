/**
 * SW-L3-2 釀造與風土深度
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與風土深度",
    subtitle: "Tannat 的馴服、貴腐、風乾與蒸餾",
    icon: "⚗️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "馴服 Tannat",
    highlights: [
      { id: 1, icon: "🧪", title: "微氧化 MOX", content: "1991 年 Patrick Ducournau 在 Madiran 發明，1996 年獲歐盟批准（Wine With Seth）；通常在酒精發酵與乳酸發酵之間進行（wein.plus）" },
      { id: 2, icon: "📐", title: "劑量與條件", content: "乳酸發酵前每月最多 20–60 mg/L、持續 2 至 6 週；發酵後每月 0.5–2 mg/L；建議 15–20°C（Wine With Seth）" },
      { id: 3, icon: "⚠️", title: "風險", content: "過度氧化會使單寧乾澀、增加揮發酸與 Brettanomyces；酚類少的酒不適合（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MOX 是為了讓年輕的 Tannat 更早可飲，但並非強制。</p></div>"
  },
  {
    title: "Madiran 的選擇",
    highlights: [
      { id: 1, icon: "🌿", title: "強制去梗", content: "規定必須去梗（Wine With Seth）" },
      { id: 2, icon: "🛢️", title: "橡木培養", content: "橡木桶培養常見但非法定；優質生產者常培養 12–24 個月；頂級酒款用新法國橡木桶約 14–16 個月（Wine With Seth）" },
      { id: 3, icon: "🛑", title: "不使用 MOX 的路線", content: "Alain Brumont 等生產者不用 MOX，靠仔細萃取與成熟的果實（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個 AOC 內有「馴服」與「不馴服」兩種哲學。</p></div>"
  },
  {
    title: "甜酒的兩條路",
    highlights: [
      { id: 1, icon: "🍂", title: "貴腐：Monbazillac", content: "所有果實都須受貴腐影響，分批 tries 手採；經典款至少 45 g/L、SGN 至少 85 g/L（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "風乾：Jurançon", content: "Petit Manseng 留在藤上到 11 月甚至 12 月，由 foehn 風乾；平均產量約 15 hL/ha，頂級甜酒酒款可低至 9 hL/ha（Wine With Seth）" },
      { id: 3, icon: "🌬️", title: "不同機制", content: "Jurançon 厚皮使貴腐黴難以穿透，因此濃縮來自脫水而非貴腐（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同為甜酒，Monbazillac 是黴、Jurançon 是風。</p></div>"
  },
  {
    title: "氣泡與蒸餾",
    highlights: [
      { id: 1, icon: "🫧", title: "Gaillac 祖傳法", content: "Méthode Gaillacoise 只用 Mauzac，單次發酵在瓶中完成、不加糖（Wine With Seth）；Mauzac 晚熟，傳統上晚採使殘糖保留到春季的自然二次發酵（Wikipedia）" },
      { id: 2, icon: "🥃", title: "Armagnac", content: "單次連續蒸餾，出蒸餾器時 52–63%；用 400–420 公升橡木桶培養；裝瓶前降至 40%；發酵約 10–17 天，酒液 8–9.5%（wein.plus）" },
      { id: 3, icon: "🧭", title: "風土影響", content: "Bas-Armagnac 的貧瘠酸性黏壤土產出輕盈果香的蒸餾酒，Ténarèze 的重黏土石灰岩產出較豐厚、需長期培養的酒（armagnac.fr）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一區同時有氣泡、甜酒與烈酒，可說是技術的集散地。</p></div>"
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
            question: "微氧化（MOX）是哪一年在 Madiran 發明的？",
            options: ["A. 1948","B. 1971","C. 1991","D. 2009"],
            correct: 2,
            explanation: "1991 年；1996 年獲歐盟批准（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "MOX 通常在哪個階段進行？",
            options: ["A. 酒精發酵與乳酸發酵之間","B. 裝瓶之後","C. 採收前","D. 蒸餾時"],
            correct: 0,
            explanation: "wein.plus。"
          },
          {
            type: 'single',
            question: "Madiran 的去梗規定？",
            options: ["A. 必須去梗","B. 禁止去梗","C. 只有白酒需要","D. 沒有規定"],
            correct: 0,
            explanation: "Wine With Seth。"
          },
          {
            type: 'single',
            question: "Jurançon 的甜酒如何濃縮？",
            options: ["A. 在藤上風乾","B. 貴腐黴","C. 加烈","D. 冷凍"],
            correct: 0,
            explanation: "厚皮使貴腐黴難以穿透。"
          },
          {
            type: 'single',
            question: "Armagnac 出蒸餾器時的酒精度約？",
            options: ["A. 20–30%","B. 52–63%","C. 80–90%","D. 95%"],
            correct: 1,
            explanation: "52–63%（wein.plus）；Cognac 約 70%。"
          },
          {
            type: 'single',
            question: "Armagnac 裝瓶時降到幾度？",
            options: ["A. 20%","B. 30%","C. 40%","D. 60%"],
            correct: 2,
            explanation: "40%（wein.plus）。"
          }
        ]
      }
    }
  }
]
