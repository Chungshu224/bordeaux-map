/**
 * CAN-L3-2 冰酒與釀造工藝
 * 事實來源：The Narwhal（BC wine climate crisis）、Wine Anorak（2024-02-10）、Brock University CCOVI／Wines in Niagara（2015 年葡萄芽存活）、UBC Okanagan（Testing for smoke taint in Okanagan wines，Molecules）、Wine Country Ontario Icewine 手冊、Brock University Inniskillin 展覽、Fine Vintage「Canadian Wine Scholar Study Guide」（2019）、B.C. Reg. 168/2018（BC Laws）、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（冰酒出汁率、酒精濃度範圍、年度產量、氣候推估等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "冰酒與釀造工藝",
    subtitle: "冰酒的採收、壓榨與發酵，以及氣泡酒與其他風格的研究",
    icon: "🧊",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "冰酒的採收",
    highlights: [
      { id: 1, icon: "🥅", title: "套網與等待", content: "葡萄在秋天套網防鳥，留在樹上直到氣溫持續達 -8°C 或更低，通常在 12 月到 2 月。最佳採收窗口約在 12 月中到 1 月上旬，暖冬可延到 2、3 月。Inniskillin 在 1983 年首次嘗試時，葡萄被鳥吃光，隔年改用保護網才成功採收 Vidal（Wine Country Ontario、Brock University）" },
      { id: 2, icon: "🌙", title: "夜間採收", content: "理想的採收溫度是 -10 至 -13°C（Brock）或 -10 至 -12°C（Wine Country Ontario），果汁約 35–39°Brix。採收與榨汁至少需要 6 小時，通常在夜間進行，多數人工採收，也有機器採收（Wine Country Ontario）。Fine Vintage 的指南寫的是結冰到 -8°C 並至少維持 8 小時，屬補充來源" },
      { id: 3, icon: "🌱", title: "冷凍萃取不算", content: "「Icewine」與「Eiswein」是受保護的用語，不能用在人工冷凍的葡萄；Quebec 在積雪深時，有時得把葡萄摘下後在樹外冷凍（吊床或網袋），這樣的酒不符合 VQA 的冰酒規定。沒有 VQA 認證的酒，不得在標籤上使用「Icewine」（Fine Vintage、Wine Country Ontario）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">冰酒的條件是「自然結冰在樹上」，不是冷凍庫。</p></div>"
  },
  {
    title: "壓榨與發酵",
    highlights: [
      { id: 1, icon: "⚙️", title: "在結冰狀態下榨汁", content: "在小型液壓榨汁機中榨汁，水分大多留在冰晶裡，只擠出少量濃縮的果汁；若葡萄在榨汁時回溫，果汁就被稀釋、品質下降（Wine Country Ontario、Brock）。每 1 ml 冰酒約需 10 顆葡萄，一般餐酒只需約 1.5 顆（Wine Country Ontario）" },
      { id: 2, icon: "📉", title: "出汁率的說法", content: "出汁率各來源不同：約為一般收成的 15%（Wine Country Ontario、Fine Vintage），或 5–10%（Brock University），因此課內不列入測驗" },
      { id: 3, icon: "🧫", title: "難發酵", content: "冰酒汁極甜，高糖會讓酵母受壓力，發酵常提早停止，留下較低酒精與高殘糖；發酵持續數個月（Wine Country Ontario、Brock）。酒精濃度約 9–12%（Fine Vintage 寫 9–11%，Brock 寫 10–12%）。BC 規定不得加糖、裝瓶時殘糖至少 100 g/L、揮發酸不超過 2.1 g/L（B.C. Reg. 168/2018 第 41 條）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">冰酒是用每顆葡萄換一點點果汁。</p></div>"
  },
  {
    title: "品種、規模與其他風格",
    highlights: [
      { id: 1, icon: "🍇", title: "品種與規模", content: "最常見是 Vidal Blanc、Riesling 與 Cabernet Franc，少量有 Gewürztraminer、Chardonnay 與 Cabernet Sauvignon；每家冰酒都在 Canada 各產區出現，Ontario 生產 90% 以上。Wine Country Ontario 寫 Ontario 年平均約 85 萬公升，而 2025–26 年度為 468,752 公升（Wine With Seth），可見年度差異大；2023 年 Ontario 為冰酒收了 3,320 公噸葡萄（Grape Growers of Ontario）" },
      { id: 2, icon: "🥂", title: "傳統法氣泡酒", content: "Ontario 的傳統法氣泡酒以 Chardonnay 與 Pinot Noir 為主，Nova Scotia 則用 L'Acadie Blanc（如 L'Acadie Vineyards 的 Prestige Brut Estate 全由 L'Acadie Blanc 製成）；Quebec 也有傳統法與 pét-nat。VQA 氣泡酒要求二次發酵壓力不低於 300 kPa 且為天然碳酸（VQA Ontario、Wine With Seth、Luxe Magazine）" },
      { id: 3, icon: "🍂", title: "風乾與浸皮", content: "VQA Ontario 另設 Vin de Cure 或 Appassimento（至少 85% 風乾葡萄才可稱 Appassimento）與 Skin Fermented White（浸皮至少 10 天）等類別，顯示產區正在擴展風格；Ontario 允許超過 100 個品種（Fine Vintage 2019），2025–26 年度實際使用了 74 個（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">冰酒是招牌，但產區的風格正在變寬。</p></div>"
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
            question: "VQA 冰酒的葡萄必須？",
            options: ["A. 在樹上自然結冰","B. 採收後以冷凍庫冷凍","C. 先曬乾再冷凍","D. 經過人工加糖"],
            correct: 0,
            explanation: "自然結冰在樹上；人工冷凍不得稱 Icewine。"
          },
          {
            type: 'single',
            question: "冰酒為什麼常在夜間採收？",
            options: ["A. 夜間溫度最低，葡萄保持結冰","B. 為了避開鳥","C. 夜間糖度最高","D. 法規規定"],
            correct: 0,
            explanation: "溫度最低時採收與榨汁，避免果汁被稀釋。"
          },
          {
            type: 'single',
            question: "冰酒榨汁時若葡萄回溫，會怎樣？",
            options: ["A. 果汁被稀釋，品質下降","B. 糖度更高","C. 香氣更濃","D. 沒有影響"],
            correct: 0,
            explanation: "果汁被融化的水稀釋。"
          },
          {
            type: 'single',
            question: "BC 冰酒的揮發酸上限是？",
            options: ["A. 0.5 g/L","B. 1.2 g/L","C. 2.1 g/L","D. 4.0 g/L"],
            correct: 2,
            explanation: "不超過 2.1 g/L（B.C. Reg. 168/2018 第 41 條）。"
          },
          {
            type: 'single',
            question: "1983 年 Inniskillin 第一次嘗試冰酒時，發生了什麼事？",
            options: ["A. 葡萄被鳥吃光","B. 葡萄被霜凍壞","C. 成功採收並裝瓶","D. 被政府禁止"],
            correct: 0,
            explanation: "隔年改用保護網才成功（Brock University）。"
          },
          {
            type: 'single',
            question: "Quebec 的種植者在積雪深時有時把葡萄摘下來在樹外冷凍，這樣的酒？",
            options: ["A. 不符合 VQA 冰酒規定","B. 可稱 VQA Icewine","C. 可稱 Appassimento","D. 可稱 Late Harvest"],
            correct: 0,
            explanation: "因為不是在樹上結冰（Fine Vintage）。"
          }
        ]
      }
    }
  }
]
