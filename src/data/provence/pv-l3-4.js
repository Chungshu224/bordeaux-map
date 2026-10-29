/**
 * PV-L3-4 法規演變與 Diploma 論述
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規演變與 Diploma 論述",
    subtitle: "AOC 升格、地名制度、有機與論述範本",
    icon: "📝",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "AOC 的演進",
    highlights: [
      { id: 1, icon: "📈", title: "升格階梯", content: "許多產區循序從 vin de pays、VDQS 升到 AOC，如 Coteaux Varois：1974 vin de pays → 1984 VDQS → 1993 AOC" },
      { id: 2, icon: "🏷️", title: "地名制度", content: "Côtes de Provence 的地名自 2005 年起陸續成立（Sainte-Victoire、Fréjus、La Londe 等），2019 年再增加 Notre-Dame des Anges" },
      { id: 3, icon: "🪨", title: "Trévallon 事件", content: "1993 年 Domaine de Trévallon 因不願遵守 Cabernet 20% 上限離開 Les Baux AOC" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">升格與地名是品質分層的工具。</p></div>"
  },
  {
    title: "論述框架",
    highlights: [
      { id: 1, icon: "🧩", title: "先寫要點", content: "每題先給立場，再列自然因素、人為因素、結果" },
      { id: 2, icon: "📌", title: "用具體例", content: "以具體數字與名稱支撐，如 Bandol 的 Mourvèdre 至少 50% 與 18 個月桶陳" },
      { id: 3, icon: "⚠️", title: "承認不確定", content: "來源不一致時說明差異，而不是挑一個數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">清晰、具體、誠實。</p></div>"
  },
  {
    title: "範例題目",
    highlights: [
      { id: 1, icon: "❓", title: "題目一", content: "比較 Bandol 與 Côtes de Provence 的風格與法規" },
      { id: 2, icon: "❓", title: "題目二", content: "解釋氣候變遷對普羅旺斯玫瑰紅的影響" },
      { id: 3, icon: "❓", title: "題目三", content: "討論科西嘉在地品種的商業價值" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">用框架練習，而非背答案。</p></div>"
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
            question: "Coteaux Varois 的 AOC 年份？",
            options: ["A. 1974","B. 1984","C. 1993","D. 2005"],
            correct: 2,
            explanation: "1993 年。"
          },
          {
            type: 'single',
            question: "哪個地名在 2019 年成立？",
            options: ["A. Notre-Dame des Anges","B. Fréjus","C. La Londe","D. Pierrefeu"],
            correct: 0,
            explanation: "Notre-Dame des Anges。"
          },
          {
            type: 'single',
            question: "Trévallon 為何離開 AOC？",
            options: ["A. Cabernet 20% 上限","B. 產量過低","C. 價格","D. 氣候"],
            correct: 0,
            explanation: "Cabernet 20% 上限。"
          },
          {
            type: 'single',
            question: "來源不一致時應如何寫？",
            options: ["A. 說明差異","B. 選一個數字","C. 不提","D. 取平均"],
            correct: 0,
            explanation: "說明差異。"
          },
          {
            type: 'single',
            question: "Diploma 論述應先做什麼？",
            options: ["A. 給出立場與要點","B. 列出所有數字","C. 寫結論","D. 定義詞彙"],
            correct: 0,
            explanation: "先給立場與要點。"
          },
          {
            type: 'single',
            question: "地名 Sainte-Victoire 與 Fréjus 起於？",
            options: ["A. 1993","B. 2005","C. 2013","D. 2019"],
            correct: 1,
            explanation: "2005 年。"
          }
        ]
      }
    }
  }
]
