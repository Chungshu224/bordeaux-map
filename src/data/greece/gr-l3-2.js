/**
 * GR-L3-2 釀造與風格：從不鏽鋼到橡木與甜酒製程
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與風格",
    subtitle: "從不鏽鋼到橡木與甜酒製程",
    icon: "🏭",
    background: 'linear-gradient(135deg, #B8902A 0%, #7a1f3d 100%)'
  },
  {
    title: "Assyrtiko 的風格光譜",
    highlights: [
      { id: 1, icon: "🥂", title: "乾白", content: "Assyrtiko 至少 85%，許多為 100%；酒渣陳年與橡木是選項而非要求" },
      { id: 2, icon: "🌙", title: "Nykteri", content: "乾型，酒精至少 13.5%，至少 3 個月橡木桶陳年" },
      { id: 3, icon: "☀️", title: "Vinsanto", content: "日曬風乾的過熟葡萄（糖度至少 370 g/L）、至少 51% Assyrtiko、至少 24 個月氧化型陳年" },
      { id: 4, icon: "🧪", title: "酸度與 pH", content: "即使完全成熟仍保有高酸；在缺鉀的火山土壤上 pH 可低至 2.7–2.8" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Santorini 以外的 Assyrtiko：果香較明顯、結構較不濃密、礦物感較輕（WineWithSeth）。</p></div>"
  },
  {
    title: "Xinomavro：傳統與現代萃取",
    highlights: [
      { id: 1, icon: "⏳", title: "傳統路線", content: "長時間浸皮、為長期窖藏而設計" },
      { id: 2, icon: "🧊", title: "現代路線", content: "冷浸漬與較溫和的萃取，強調果味" },
      { id: 3, icon: "🛢️", title: "Naoussa 的陳年分級", content: "標準級至少 1 年橡木；Reserve 紅酒累計至少 3 年、其中橡木至少 6 個月；Grand Reserve 累計至少 48 個月（橡木 24 個月＋瓶陳 24 個月）" },
      { id: 4, icon: "🚫", title: "降級規則", content: "Naoussa 必須 100% Xinomavro；混入其他品種就要降為 Imathia PGI 或 Macedonia PGI" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 比較題：說明同一品種為何有「傳統／現代」兩種釀造哲學，以及法規如何介入。</p></div>"
  },
  {
    title: "芳香白酒與紅酒的釀造重點",
    highlights: [
      { id: 1, icon: "🌹", title: "Moschofilero", content: "乾型、酸度鮮明，酒精通常 11–12.5%；玫瑰水、茉莉、忍冬、葡萄柚與核果香" },
      { id: 2, icon: "🍑", title: "Malagousia", content: "比 Moschofilero 更豐腴，仍具良好酸度；桃、芒果、柑橘與茉莉香" },
      { id: 3, icon: "🍒", title: "Agiorgitiko", content: "可釀成粉紅、輕盈新酒、橡木陳年的 Reserve，甚至甜型" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">把釀造選擇寫成因果句：選擇（浸皮、橡木、酒渣）→ 風格結果（結構、香氣、陳年潛力）。</p></div>"
  },
  {
    title: "Retsina、甜酒與強化酒的製程",
    highlights: [
      { id: 1, icon: "🌲", title: "Retsina", content: "發酵中加入阿勒頗松樹脂，結束後移除；上限約 1%（10 g/L），須在發酵約三分之二前加入；PGI Retsina 的 Savatiano 最低比例為 85%（WineWithSeth）" },
      { id: 2, icon: "🍇", title: "Mavrodaphne of Patras", content: "至少 51% Mavrodaphne（其餘 Black Corinthian）；至少 1 年橡木；Reserve 為 2 年橡木加 1 年瓶陳；Grand Reserve 累計 7 年" },
      { id: 3, icon: "🌼", title: "Samos", content: "Muscat Blanc à Petits Grains；Vin Doux、Vin Doux Naturel、Grand Cru、Anthemis 與 Nectar（日曬葡萄）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">甜酒製程三問：甜度怎麼來？有沒有強化？陳年是氧化還是還原？</p></div>"
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
            question: "Santorini 乾白 PDO 對 Assyrtiko 的最低比例是？",
            options: ["A. 50%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "依 Wines of Greece 官方 PDO 頁面為至少 85%，其餘 Athiri、Aidani 合計最多 15%。"
          },
          {
            type: 'single',
            question: "Naoussa 若混入 Xinomavro 以外的品種會怎樣？",
            options: ["A. 降級為 Imathia PGI 或 Macedonia PGI","B. 升級為 Grand Reserve","C. 毫無影響","D. 必須強化"],
            correct: 0,
            explanation: "Naoussa 為 100% Xinomavro 的單一品種 PDO。"
          },
          {
            type: 'single',
            question: "Nykteri 的法規要求是？",
            options: ["A. 酒精至少 13.5% 且至少 3 個月橡木桶陳年","B. 必須是紅酒","C. 必須加樹脂","D. 必須是氣泡酒"],
            correct: 0,
            explanation: "Nykteri 是 Santorini 的乾型風格。"
          }
        ]
      }
    }
  }
]
