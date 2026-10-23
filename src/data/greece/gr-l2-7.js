/**
 * GR-L2-7 甜酒與傳統酒款：Vinsanto、Muscat、Mavrodaphne
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "甜酒與傳統酒款",
    subtitle: "Vinsanto、Muscat、Mavrodaphne",
    icon: "🍯",
    background: 'linear-gradient(135deg, #a16207 0%, #1C7C9C 100%)'
  },
  {
    title: "希臘甜酒的三條製法",
    highlights: [
      { id: 1, icon: "☀️", title: "日曬風乾", content: "如 Santorini Vinsanto、Lemnos 的日曬甜紅、Samos 的 Nectar" },
      { id: 2, icon: "🥃", title: "酒精強化", content: "如 Mavrodaphne of Patras（甜型強化紅）、Samos 的 Vin Doux Naturel" },
      { id: 3, icon: "🌼", title: "芳香品種天然甜感", content: "Muscat 與 Malvasia 系列" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 比較時，先問「甜度如何來的？」——風乾、強化，或兩者兼有。</p></div>"
  },
  {
    title: "Mavrodaphne of Patras",
    highlights: [
      { id: 1, icon: "🍇", title: "品種", content: "至少 51% Mavrodaphne，其餘為 Black Corinthian" },
      { id: 2, icon: "🛢️", title: "陳年", content: "至少 1 年橡木桶（容量不超過 1,000 公升）；Reserve 為 2 年橡木加 1 年瓶陳；Grand Reserve 累計 7 年（其中桶陳至少 3 年）" },
      { id: 3, icon: "📍", title: "1971 年產區", content: "位於 Achaia 北部中央，含 Rio 等子區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是「甜型強化紅」的代表，常拿來與波特酒、Banyuls 做風格比較。</p></div>"
  },
  {
    title: "Muscat 與 Malvasia 家族",
    highlights: [
      { id: 1, icon: "🌼", title: "Muscat", content: "Samos、Patras、Rio Patras、Rhodes、Lemnos、Cephalonia 都有 Muscat PDO；Lemnos 與 Samos 使用不同的 Muscat（Alexandria 對 Blanc à Petits Grains）" },
      { id: 2, icon: "🍯", title: "Malvasia", content: "Monemvasia-Malvasia、Malvasia Candia、Malvasia Sitia、Malvasia Paros" },
      { id: 3, icon: "🧠", title: "記憶法", content: "Muscat＝島嶼與 Patras 的芳香甜酒；Malvasia＝歷史名稱與克里特、Paros、Monemvasia" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先背「地點—甜酒種類」，細節再靠 Level 3 的對照題。</p></div>"
  },
  {
    title: "甜酒比較表",
    highlights: [
      { id: 1, icon: "🅰️", title: "Vinsanto（Santorini）", content: "Assyrtiko 為主、風乾、氧化陳年" },
      { id: 2, icon: "🅱️", title: "Mavrodaphne of Patras", content: "紅、強化、桶陳" },
      { id: 3, icon: "🅲", title: "Muscat of Samos", content: "白、Muscat Blanc à Petits Grains、多種甜型風格（含 Nectar）" },
      { id: 4, icon: "🅳", title: "Lemnos 甜紅", content: "Limnio 為主，日曬葡萄，至少 24 個月橡木陳年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">用這張表做盲品對照：顏色、品種、甜度來源、是否強化。</p></div>"
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
            question: "Mavrodaphne of Patras 屬於哪一類酒？",
            options: ["A. 甜型強化紅酒","B. 乾白","C. 氣泡粉紅","D. 松脂酒"],
            correct: 0,
            explanation: "以 Mavrodaphne 為主的甜型強化紅。"
          },
          {
            type: 'single',
            question: "Santorini Vinsanto 的葡萄處理是？",
            options: ["A. 日曬風乾","B. 貴腐菌感染","C. 冰凍","D. 酒精強化"],
            correct: 0,
            explanation: "風乾後以氧化方式在橡木中陳年。"
          },
          {
            type: 'single',
            question: "Samos PDO 使用哪種 Muscat？",
            options: ["A. Muscat Blanc à Petits Grains","B. Muscat of Alexandria","C. Muscat Ottonel","D. Black Muscat"],
            correct: 0,
            explanation: "Lemnos 用 Muscat of Alexandria，Samos 用 Blanc à Petits Grains。"
          }
        ]
      }
    }
  }
]
