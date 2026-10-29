/**
 * PV-L3-5 Level 3 綜合評量
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "栽培、釀造、市場與法規演變",
    icon: "🏆",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🌬️", title: "栽培", content: "Mistral、乾旱、灌溉、有機與氣候變遷" },
      { id: 2, icon: "🌸", title: "釀造與市場", content: "直接壓榨、色度、CIVP 數字與品牌" },
      { id: 3, icon: "📝", title: "法規與論述", content: "升格階梯、地名制度與論述框架" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">整合所有章節。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Mistral 對葡萄園的主要好處？",
            options: ["A. 降低病害壓力","B. 增加濕度","C. 增加雨量","D. 防霜"],
            correct: 0,
            explanation: "降低病害壓力。"
          },
          {
            type: 'single',
            question: "灌溉地塊的負載？",
            options: ["A. 較低","B. 較高","C. 相同","D. 不限"],
            correct: 0,
            explanation: "較低。"
          },
          {
            type: 'single',
            question: "普羅旺斯玫瑰紅代表手法？",
            options: ["A. 直接壓榨","B. 長時間浸皮","C. 混調","D. 碳酸浸皮"],
            correct: 0,
            explanation: "直接壓榨。"
          },
          {
            type: 'single',
            question: "玫瑰紅通常避免？",
            options: ["A. 乳酸發酵","B. 早採","C. 低溫發酵","D. 冷卻壓榨"],
            correct: 0,
            explanation: "乳酸發酵。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 2025 玫瑰紅約占？",
            options: ["A. 約 10%","B. 約 50%","C. 約 90%","D. 100%"],
            correct: 2,
            explanation: "約九成。"
          },
          {
            type: 'single',
            question: "Coteaux d'Aix 2025 玫瑰紅約占？",
            options: ["A. 約 40%","B. 約 60%","C. 約 84%","D. 100%"],
            correct: 2,
            explanation: "約 84%。"
          },
          {
            type: 'single',
            question: "Coteaux Varois 的 AOC 年？",
            options: ["A. 1974","B. 1984","C. 1993","D. 2005"],
            correct: 2,
            explanation: "1993 年。"
          },
          {
            type: 'single',
            question: "Notre-Dame des Anges 成立年？",
            options: ["A. 2005","B. 2008","C. 2013","D. 2019"],
            correct: 3,
            explanation: "2019 年。"
          },
          {
            type: 'single',
            question: "Trévallon 離開 AOC 的原因？",
            options: ["A. Cabernet 20% 上限","B. 價格","C. 氣候","D. 產量過低"],
            correct: 0,
            explanation: "Cabernet 20% 上限。"
          },
          {
            type: 'single',
            question: "來源不一致時應如何處理？",
            options: ["A. 說明差異","B. 選一個","C. 省略","D. 平均"],
            correct: 0,
            explanation: "說明差異。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒桶陳至少？",
            options: ["A. 6 個月","B. 12 個月","C. 18 個月","D. 36 個月"],
            correct: 2,
            explanation: "18 個月。"
          },
          {
            type: 'single',
            question: "科西嘉差異化重點？",
            options: ["A. 在地品種","B. 國際品種","C. 低價","D. 大量"],
            correct: 0,
            explanation: "在地品種。"
          }
        ]
      }
    }
  }
]
