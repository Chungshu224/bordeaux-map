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
    title: "Diploma 深度：淺色玫瑰紅的溢價經濟學",
    highlights: [
      { id: 1, icon: "💎", title: "奢侈品集團入主", content: "2019 年 LVMH 旗下 Moët Hennessy 取得 Château d’Esclans（Whispering Angel）55% 股權，2023 年再投資 Château Minuty。奢侈品集團的進場說明普羅旺斯玫瑰紅已從度假酒變成可經營的高價品牌" },
      { id: 2, icon: "🎨", title: "淺色如何變成品牌", content: "直接壓榨、低溫、惰性氣體保護 → 淺粉色、清新、低酒精；淺色在貨架上一眼可辨，被其他產地大量模仿，讓「Provence 風格」本身成為一個國際品類語言" },
      { id: 3, icon: "🇺🇸", title: "需求與定價", content: "Whispering Angel 等品牌在美國需求很高，帶動高單價玫瑰紅的市場；玫瑰紅不需長期陳年，酒廠可在採收隔年春季就上市回收現金，品牌溢價直接轉成利潤" },
      { id: 4, icon: "⚠️", title: "風險：風格與氣候", content: "品牌依賴「淺色、清新」的一致性，但暖化讓糖度上升快、酸度流失，維持這個風格越來越難（見 pv-l3-1）；同時其他產地低價模仿，使普羅旺斯必須用產地與品牌守住溢價" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">普羅旺斯玫瑰紅的論述公式：釀造技術 → 一致的淺色風格 → 品牌與溢價 → 氣候與模仿的威脅。</p></div>"
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
