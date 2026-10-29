/**
 * LG-L3-1 栽培與氣候：乾旱、野火與有機
 * 事實來源：Decanter（"Nightmare wildfire in southern France hits vineyards"，2025-08-14；"Languedoc under the lens: 2022 and 2023 vintages"；"Going green in Languedoc-Roussillon"，2018）、Pleinchamp（葡萄酒危機報導，2024-11-08）、Wine With Seth（IGP / Vin de Pays、Languedoc AOC、Carignan 頁，2026 年查閱）、SevenFifty Daily（Languedoc 有機，贊助內容）、BKWine（法國有機葡萄園，2024-08-07）。數字一律標註來源與年份；來源有出入者（2025 野火「數十年／逾 70 年來最大」、Mont Tauch 的面積與產量占比、Vin de Pays 立法年份、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候：乾旱、野火與有機",
    subtitle: "Languedoc-Roussillon 的氣候壓力，是 Diploma 論述的常見題材",
    icon: "🔥",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "乾旱與產量",
    highlights: [
      { id: 1, icon: "🏜️", title: "Pyrénées-Orientales", content: "Pleinchamp（2024-11-08）：已連續乾旱 30 個月，部分地塊每公頃只收到不超過 500 公斤葡萄、約 3–4 hL 酒；有些採收連機械採收成本都付不起" },
      { id: 2, icon: "🌡️", title: "2022 與 2023", content: "Decanter：2022 年炎熱乾燥，Faugères 產量偏低、Domaine de Cébène 減 30%，6 月底局部冰雹打擊 Pic St-Loup；2023 年 8 月底熱浪有四天超過 40°C，果粒乾縮、產量崩落，Minervois 的 Coupe-Roses 生長季只下了 250 公釐雨" },
      { id: 3, icon: "💧", title: "灌溉", content: "Wikipedia（資料較舊）：AOC 與歐盟規定原則上禁止灌溉，法國政府於 2006 年 12 月放寬部分規則；現行細節請查官方文件" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">乾旱是慢性問題，熱浪與冰雹是突發衝擊。</p></div>"
  },
  {
    title: "2025 年 Corbières 野火",
    highlights: [
      { id: 1, icon: "🔥", title: "規模", content: "Decanter（2025-08-14）：火災起於 Aude 的 Montlaur 附近，燒毀逾 17,000 公頃土地，1 人死亡、20 多人受傷；煙塵飄到 Narbonne" },
      { id: 2, icon: "🍇", title: "葡萄園影響", content: "起初估計火場範圍內有 800–900 公頃葡萄樹、另有 400–500 公頃可能受煙害（Vignerons Indépendants 會長 Jean-Marie Fabre，最終數字可能更低）；Clos de l'Anhel 約九成葡萄園毀損、Cellier des Demoiselles 合作社八成受影響，其中有 60–70 年以上的老樹" },
      { id: 3, icon: "⚠️", title: "讀數字的方法", content: "800–900 公頃是火場範圍而非確定損失；該文副標寫「數十年來最大」、內文寫「逾 70 年來最大」，兩者不一致，課內不比較" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">老樹損失無法用「補種」彌補，這是野火對老樹產區的真正代價。</p></div>"
  },
  {
    title: "有機與永續",
    highlights: [
      { id: 1, icon: "🌿", title: "有機比例", content: "BKWine（2024-08-07）：Occitanie 占法國有機葡萄園的 34%；Decanter（2018）：Occitanie 的 28,642 公頃約占全國三分之一。兩者基準不同（占全國有機園的比例）" },
      { id: 2, icon: "🏘️", title: "產區例子", content: "Decanter（2018）：Terrasses du Larzac 85% 獨立種植者為有機或轉型中、涵蓋 80% 面積；Faugères 58% 酒莊、涵蓋 40% 面積；Gérard Bertrand 15 個莊園共 920 公頃，約八成為生機或轉型中" },
      { id: 3, icon: "🧬", title: "抗病品種", content: "SevenFifty（贊助內容）：抗病品種於 2021 年正式被認可用於釀酒；Institut Agro Montpellier 研究 275 個品種、雜交種與砧木。HVE 不等於有機" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比例的分母不同，引用時要寫清楚是哪一種。</p></div>"
  },
  {
    title: "老樹與適應",
    highlights: [
      { id: 1, icon: "🌳", title: "老樹定義", content: "Wine With Seth 以 50 年以上為「老樹」；智利 VIGNO 要求 30 年——兩者是不同標準" },
      { id: 2, icon: "✂️", title: "管理", content: "Carignan 放任可達 200 hL/ha，必須靠短剪與疏果控制（Wine With Seth）；老樹產量自然低，是 Fitou 平均約 40 hL/ha（Languedoc 各 AOC 中最低）的原因之一" },
      { id: 3, icon: "🧭", title: "適應方向", content: "可討論的方向：耐旱品種與砧木、較涼的海拔與坡向、新植抗病品種、有機以降低投入——各自的成本與限制都值得在論述中寫出" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 論述的加分，是把「機會」與「代價」並列寫。</p></div>"
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
            question: "2025 年 8 月的野火發生在哪個 Languedoc 地區？",
            options: ["A. Aude 的 Corbières（Montlaur 附近）","B. Hérault 的 Pic Saint-Loup","C. Roussillon 的 Banyuls","D. Limoux 高地"],
            correct: 0,
            explanation: "Aude 的 Corbières，起於 Montlaur 附近（Decanter）。"
          },
          {
            type: 'single',
            question: "2023 年 8 月底熱浪有幾天超過 40°C？",
            options: ["A. 1","B. 2","C. 4","D. 10"],
            correct: 2,
            explanation: "四天（Decanter）。"
          },
          {
            type: 'single',
            question: "Pyrénées-Orientales 到 2024 年 11 月已連續乾旱多久？",
            options: ["A. 6 個月","B. 12 個月","C. 30 個月","D. 60 個月"],
            correct: 2,
            explanation: "30 個月（Pleinchamp）。"
          },
          {
            type: 'single',
            question: "Fitou 的平均產量約為多少？",
            options: ["A. 40 hL/ha","B. 70 hL/ha","C. 100 hL/ha","D. 200 hL/ha"],
            correct: 0,
            explanation: "約 40 hL/ha，被稱為 Languedoc 各 AOC 中最低（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "HVE 認證與有機的關係是？",
            options: ["A. HVE 不算有機，可能仍用部分合成化學品","B. HVE 等於生機","C. HVE 比有機更嚴格","D. HVE 禁止所有噴藥"],
            correct: 0,
            explanation: "HVE 不計入有機（Decanter）。"
          },
          {
            type: 'single',
            question: "Terrasses du Larzac（Decanter，2018）：獨立種植者中有機或轉型中的比例約為？",
            options: ["A. 15%","B. 40%","C. 58%","D. 85%"],
            correct: 3,
            explanation: "85%（涵蓋 80% 面積）。"
          }
        ]
      }
    }
  }
]
