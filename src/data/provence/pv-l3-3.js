/**
 * PV-L3-3 產業與市場
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與市場",
    subtitle: "CIVP 與 CIV Corse 的數字、合作社與品牌",
    icon: "📊",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "CIVP 2025 數字",
    highlights: [
      { id: 1, icon: "🌹", title: "Côtes de Provence", content: "產量 902,027 hl，玫瑰紅 814,611 hl（約九成）" },
      { id: 2, icon: "🏞️", title: "Coteaux d'Aix", content: "產量 216,459 hl，玫瑰紅 182,412 hl（約 84%）" },
      { id: 3, icon: "⚖️", title: "解讀", content: "普羅旺斯的商業重心是玫瑰紅；其他顏色與小產區規模遠小得多" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字說明這是玫瑰紅產區。</p></div>"
  },
  {
    title: "組織與合作社",
    highlights: [
      { id: 1, icon: "🏛️", title: "CIVP 與 CIV Corse", content: "CIVP 是普羅旺斯葡萄酒行業協會，CIV Corse 是科西嘉的對應組織，負責推廣與統計" },
      { id: 2, icon: "🤝", title: "合作社", content: "合作社在兩地都扮演重要角色，提供規模與穩定的品質" },
      { id: 3, icon: "🏷️", title: "品牌", content: "許多知名品牌強調淺色、現代設計與瓶型，帶動全球玫瑰紅風潮" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">行業協會與品牌共同塑造形象。</p></div>"
  },
  {
    title: "科西嘉的市場",
    highlights: [
      { id: 1, icon: "🏝️", title: "規模", content: "科西嘉葡萄園面積有 5,798 與 6,123 ha 兩種數字，課內不列入測驗" },
      { id: 2, icon: "🏷️", title: "IGP Île de Beauté", content: "IGP 占島產量一大部分，占比各來源不一，不列入測驗" },
      { id: 3, icon: "🍇", title: "在地化", content: "以在地品種 Nielluccio、Sciaccarellu、Vermentino 作為差異化賣點" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">科西嘉靠在地品種與稀少性出圈。</p></div>"
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
            question: "Côtes de Provence 2025 年玫瑰紅約占產量？",
            options: ["A. 約 10%","B. 約 50%","C. 約 90%","D. 100%"],
            correct: 2,
            explanation: "約九成（814,611／902,027 hl）。"
          },
          {
            type: 'single',
            question: "CIVP 是什麼？",
            options: ["A. 普羅旺斯葡萄酒行業協會","B. 法國國家酒類管理局","C. 合作社品牌","D. 酒商"],
            correct: 0,
            explanation: "普羅旺斯行業協會。"
          },
          {
            type: 'single',
            question: "Coteaux d'Aix 2025 年產量約？",
            options: ["A. 21,646 hl","B. 216,459 hl","C. 2,164,590 hl","D. 902,027 hl"],
            correct: 1,
            explanation: "216,459 hl。"
          },
          {
            type: 'single',
            question: "CIV Corse 是？",
            options: ["A. 科西嘉的行業組織","B. 普羅旺斯的合作社","C. 法國政府部門","D. 品牌名"],
            correct: 0,
            explanation: "科西嘉的行業組織。"
          },
          {
            type: 'single',
            question: "科西嘉差異化的重點？",
            options: ["A. 在地品種","B. 國際品種","C. 低價","D. 大量產"],
            correct: 0,
            explanation: "在地品種。"
          },
          {
            type: 'single',
            question: "普羅旺斯商業重心是？",
            options: ["A. 玫瑰紅","B. 甜酒","C. 氣泡酒","D. 強化酒"],
            correct: 0,
            explanation: "玫瑰紅。"
          }
        ]
      }
    }
  }
]
