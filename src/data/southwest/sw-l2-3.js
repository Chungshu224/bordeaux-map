/**
 * SW-L2-3 Gaillac 與 Fronton
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Gaillac 與 Fronton",
    subtitle: "Tarn 河畔的多樣性與 Toulouse 北方的 Négrette",
    icon: "🏺",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Gaillac 的歷史",
    highlights: [
      { id: 1, icon: "🏺", title: "古老起源", content: "西元 1 世紀就有葡萄栽培，Montans 出土羅馬陶器；Saint-Michel 修道院創立於 972 年（Wine With Seth）" },
      { id: 2, icon: "🐓", title: "公雞標記", content: "1387 年圖盧茲伯爵賜予在酒桶上烙公雞標記的權利（Wine With Seth）" },
      { id: 3, icon: "📜", title: "AOC", content: "白酒 1938 年 3 月 21 日、紅酒 1970 年 10 月 23 日取得 AOC；1980 年代起出現品質復興（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Gaillac 是西南產區最古老的酒鄉之一。</p></div>"
  },
  {
    title: "Gaillac 的品種與規格",
    highlights: [
      { id: 1, icon: "⚪", title: "白酒", content: "Len de l'El、Mauzac、Mauzac Rosé、Muscadelle 至少用一種，合計至少 50%；Ondenc 亦是關鍵白品種（Wine With Seth）" },
      { id: 2, icon: "🔴", title: "紅酒", content: "Duras、Braucol（Fer）、Prunelart、Syrah 四種中至少用兩種，合計至少 70%（Wine With Seth）" },
      { id: 3, icon: "🗺️", title: "四種風土", content: "左岸 boulbènes、右岸 Premières Côtes 的黏土石灰岩、Cordes 石灰岩高原與 Cunac 酸性片岩（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個 AOC 內，白、紅、粉紅、氣泡與甜酒樣樣齊全。</p></div>"
  },
  {
    title: "Gaillac 的酒型",
    highlights: [
      { id: 1, icon: "🫧", title: "Méthode Gaillacoise", content: "僅用 Mauzac，單次發酵在瓶中完成、不加糖，也稱 Méthode Ancestrale（Wine With Seth）" },
      { id: 2, icon: "🍬", title: "Gaillac Doux", content: "殘糖至少 70 g/L，可用晚收、貴腐或風乾；舊稱 Liquoreux 與 Moelleux 已不再允許（Wine With Seth）" },
      { id: 3, icon: "🍓", title: "Primeur", content: "純 Gamay 紅酒，11 月第三個星期四上市；每年約 110,000–150,000 hL 紅酒（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Gaillac 的優勢在於「什麼都能做」。</p></div>"
  },
  {
    title: "Fronton 與 Négrette",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "Wikipedia：位於 Toulouse 以北約 35 公里，橫跨 Haute-Garonne 與 Tarn-et-Garonne；紅酒約占 85%、粉紅約 15%" },
      { id: 2, icon: "⚖️", title: "Négrette 比例有出入", content: "Wikipedia 記載 Négrette 至少 50%；Wine With Seth 品種頁記載 Fronton 為 50–70%，並寫任何酒最低 40%，來源不一，故不考" },
      { id: 3, icon: "🌸", title: "風格", content: "Négrette 酸度與單寧低但色深，帶紫羅蘭、覆盆子與甘草香；Wine Folly 另提到「動物性」氣息" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Fronton 的酒因 Négrette 而有別於其他南部紅酒。</p></div>"
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
            question: "Gaillac 白酒取得 AOC 是哪一年？",
            options: ["A. 1938","B. 1948","C. 1970","D. 1971"],
            correct: 0,
            explanation: "1938 年 3 月 21 日。"
          },
          {
            type: 'single',
            question: "Gaillac 紅酒取得 AOC 是哪一年？",
            options: ["A. 1938","B. 1948","C. 1970","D. 1971"],
            correct: 2,
            explanation: "1970 年 10 月 23 日。"
          },
          {
            type: 'single',
            question: "Méthode Gaillacoise 使用哪個品種？",
            options: ["A. Mauzac","B. Chardonnay","C. Syrah","D. Gamay"],
            correct: 0,
            explanation: "僅用 Mauzac。"
          },
          {
            type: 'single',
            question: "Gaillac Doux 的殘糖至少多少？",
            options: ["A. 12 g/L","B. 35 g/L","C. 70 g/L","D. 120 g/L"],
            correct: 2,
            explanation: "至少 70 g/L。"
          },
          {
            type: 'single',
            question: "Gaillac Primeur 使用什麼品種？",
            options: ["A. 純 Gamay","B. 純 Syrah","C. Malbec","D. Tannat"],
            correct: 0,
            explanation: "11 月第三個星期四上市。"
          },
          {
            type: 'single',
            question: "Fronton 以哪個品種聞名？",
            options: ["A. Négrette","B. Tannat","C. Mauzac","D. Malbec"],
            correct: 0,
            explanation: "Négrette。"
          }
        ]
      }
    }
  }
]
