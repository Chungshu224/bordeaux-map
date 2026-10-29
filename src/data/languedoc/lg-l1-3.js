/**
 * LG-L1-3 葡萄品種
 * 事實來源：Wine With Seth（Languedoc-Roussillon、Languedoc AOC、Carignan 頁，2026 年查閱）、Wikipedia（Languedoc-Roussillon wine）。數字一律標註來源；來源有出入者（葡萄園面積 700,000 英畝與 230,000 公頃不一致、「第一個法定產區」是 Fitou 或 Blanquette de Limoux、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄品種",
    subtitle: "GSM + Carignan、Cinsault 與白葡萄",
    icon: "🍇",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "紅葡萄主力",
    highlights: [
      { id: 1, icon: "🔴", title: "GSM 與 C", content: "Grenache、Syrah、Mourvèdre、Carignan、Cinsault 是主要紅品種，常見 GSM 或 GSMC 調配（Wine With Seth）" },
      { id: 2, icon: "🧩", title: "角色分工", content: "一般說法：Grenache 帶果味與酒體、Syrah 帶色澤與香料、Mourvèdre 帶結構、Carignan 帶酸度與單寧、Cinsault 帶輕盈果香（風格概括，非法規）" },
      { id: 3, icon: "📊", title: "沒有統一百分比", content: "資料未提供各品種的可靠面積百分比，課內不引用" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這裡的紅酒多半是調配，而非單一品種。</p></div>"
  },
  {
    title: "Carignan 的故事",
    highlights: [
      { id: 1, icon: "🇪🇸", title: "源自阿拉貢", content: "Wine With Seth：幾乎可以確定源自西班牙東北部 Aragón，名稱來自 Zaragoza 省的 Cariñena；別名有 Mazuelo（Rioja）、Samsó（Priorat）、Carignano（薩丁尼亞）" },
      { id: 2, icon: "⏳", title: "晚熟高酸", content: "發芽晚、成熟非常晚，天然酸度與單寧高；放任不管產量可達 200 hL/ha，必須靠修剪與疏果控制（Wine With Seth）" },
      { id: 3, icon: "🫧", title: "二氧化碳浸皮", content: "Languedoc 常用整串二氧化碳浸皮，讓單寧更柔、酒更易飲；Priorat 與 Roussillon 較常去梗與長時間浸皮（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同一個品種，因產量與釀法而判若兩樣。</p></div>"
  },
  {
    title: "其他紅品種",
    highlights: [
      { id: 1, icon: "🌹", title: "Cinsault", content: "常用於粉紅酒與輕盈紅酒；Languedoc AOC 規定 Cinsaut 在紅酒中上限 40%（見第 4 課）" },
      { id: 2, icon: "🍇", title: "Grenache", content: "Languedoc AOC 的主要品種之一，另有 Lledoner Pelut（Grenache 的親緣品種）" },
      { id: 3, icon: "🔥", title: "Syrah 與 Mourvèdre", content: "Languedoc AOC 紅酒要求兩者合計至少 20%（見第 4 課）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">品種搭配其實被法規寫進產區規則裡。</p></div>"
  },
  {
    title: "白葡萄與其他",
    highlights: [
      { id: 1, icon: "⚪", title: "白品種", content: "Piquepoul Blanc、Grenache Blanc、Roussanne、Marsanne、Vermentino、Clairette、Muscat、Bourboulenc、Viognier（Wine With Seth）" },
      { id: 2, icon: "🫧", title: "Limoux 的特例", content: "Limoux 使用 Chardonnay、Chenin Blanc 與 Mauzac（Wine With Seth）" },
      { id: 3, icon: "🌍", title: "Pays d'Oc 的自由度", content: "Pays d'Oc IGP 允許 58 個品種（Wine With Seth），所以國際品種也大量出現" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">AOC 偏重傳統品種，IGP 則給予更多自由。</p></div>"
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
            question: "Carignan 的名稱來自哪個地方？",
            options: ["A. Cariñena","B. Carcassonne","C. Carignan (Ardennes)","D. Cantabria"],
            correct: 0,
            explanation: "西班牙 Zaragoza 省的 Cariñena。"
          },
          {
            type: 'single',
            question: "Carignan 在 Priorat 的別名是？",
            options: ["A. Samsó","B. Mazuelo","C. Carignano","D. Mataro"],
            correct: 0,
            explanation: "Samsó；Mazuelo 是 Rioja，Carignano 是薩丁尼亞。"
          },
          {
            type: 'single',
            question: "放任不管的 Carignan 產量可達？",
            options: ["A. 50 hL/ha","B. 100 hL/ha","C. 200 hL/ha","D. 400 hL/ha"],
            correct: 2,
            explanation: "可達 200 hL/ha。"
          },
          {
            type: 'single',
            question: "Languedoc 常用哪種釀法柔化 Carignan 單寧？",
            options: ["A. 二氧化碳浸皮","B. 冷凍萃取","C. 逆滲透","D. 只用新橡木桶"],
            correct: 0,
            explanation: "整串二氧化碳浸皮。"
          },
          {
            type: 'single',
            question: "Limoux 使用以下哪一組品種？",
            options: ["A. Chardonnay、Chenin Blanc、Mauzac","B. Riesling、Gewürztraminer、Pinot Gris","C. Nebbiolo、Barbera、Dolcetto","D. Albariño、Godello、Treixadura"],
            correct: 0,
            explanation: "Chardonnay、Chenin Blanc 與 Mauzac。"
          },
          {
            type: 'single',
            question: "Pays d'Oc IGP 允許多少個葡萄品種？",
            options: ["A. 12","B. 28","C. 58","D. 108"],
            correct: 2,
            explanation: "58 個（Wine With Seth）。"
          }
        ]
      }
    }
  }
]
