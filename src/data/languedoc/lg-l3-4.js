/**
 * LG-L3-4 法規演變與 Diploma 論述
 * 事實來源：Decanter（"Nightmare wildfire in southern France hits vineyards"，2025-08-14；"Languedoc under the lens: 2022 and 2023 vintages"；"Going green in Languedoc-Roussillon"，2018）、Pleinchamp（葡萄酒危機報導，2024-11-08）、Wine With Seth（IGP / Vin de Pays、Languedoc AOC、Carignan 頁，2026 年查閱）、SevenFifty Daily（Languedoc 有機，贊助內容）、BKWine（法國有機葡萄園，2024-08-07）。數字一律標註來源與年份；來源有出入者（2025 野火「數十年／逾 70 年來最大」、Mont Tauch 的面積與產量占比、Vin de Pays 立法年份、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規演變與 Diploma 論述",
    subtitle: "從 Coteaux du Languedoc 到金字塔，以及論述架構",
    icon: "📝",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "法規演變時間軸",
    highlights: [
      { id: 1, icon: "📅", title: "2007 之前", content: "1985 年 12 月 24 日法令認定 Coteaux du Languedoc；1988 年全區可產白酒；2004 年 Terrasses du Larzac 等成為地理名稱" },
      { id: 2, icon: "🔄", title: "2007 與 2023", content: "2007 年 4 月 30 日更名 Languedoc 並納入 Corbières 等區；現行規格於 2023 年 11 月 30 日核准（Languedoc AOC 頁）" },
      { id: 3, icon: "⬆️", title: "獨立 AOC", content: "Terrasses du Larzac 2014、La Clape 2015、Pic Saint-Loup 2017；2024 年 La Livinière 與 Boutenac 以 AOP 名稱登錄歐盟公報" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">每一次升格都是「從區域酒走向村莊酒」的一步。</p></div>"
  },
  {
    title: "金字塔與 DGC",
    highlights: [
      { id: 1, icon: "🔺", title: "現行金字塔", content: "AOP Languedoc 與 DGC 為底、副區域 AOP 居中、村莊級 AOP 在頂（Languedoc AOC 頁）；2010 年 CIVL 的三層模型是否仍有效，來源未說明" },
      { id: 2, icon: "🔢", title: "11 個 DGC、5 個村莊級", content: "DGC 包括 Cabrières、Grès de Montpellier、La Méjanelle、Montpeyroux、Pézenas、Quatourze、Saint-Christol、Saint-Drézéry、Saint-Georges-d'Orques、Saint-Saturnin、Sommières；村莊級含 Boutenac、Faugères、La Clape、La Livinière、Montpeyroux" },
      { id: 3, icon: "⏳", title: "Montpeyroux 仍在變動", content: "Languedoc AOC 頁載：INAO 於 2026 年 2 月確認其獨立 AOP 地位，截至 2026 年 3 月法令與歐盟核可仍待完成；該頁同時把它列為 DGC 與村莊級，故不進測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「過渡中的地位」要寫成過渡，而不是定論。</p></div>"
  },
  {
    title: "規則怎麼變嚴",
    highlights: [
      { id: 1, icon: "⬆️", title: "比例拉高", content: "Maury 的 Grenache Noir 下限由成立時的 50% 提高到現行 75%（Wikipedia，變更年份未載明）" },
      { id: 2, icon: "🆕", title: "新增類型", content: "Maury Sec 自 2011 年份起允許以同樣品種做不甜靜態酒；Saint-Chinian 於 2004 年引進白酒；Picpoul de Pinet 有 2013 年 9 月 23 日的獨立規格" },
      { id: 3, icon: "🧭", title: "區域更名與合併", content: "2016 年 Languedoc-Roussillon 併入 Occitanie；Rivesaltes 於 1972 年整合數個較小名稱（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">規則變嚴常伴隨「更細的名稱」，是 Languedoc 的共同路線。</p></div>"
  },
  {
    title: "論述架構",
    highlights: [
      { id: 1, icon: "❓", title: "題型 1：品質轉型", content: "「評估 Languedoc 從大宗酒轉向品質產區的成效」→ 背景（酒湖、拔樹）→ 手段（新 AOC、DGC、IGP）→ 成果與限度（面積下降、危機）→ 結論" },
      { id: 2, icon: "❓", title: "題型 2：氣候適應", content: "「討論氣候變遷對 Languedoc-Roussillon 的威脅與機會」→ 威脅（乾旱、熱浪、野火）→ 機會（涼爽高地、有機、抗病品種）→ 規則的彈性（AOC 品種與灌溉）→ 結論" },
      { id: 3, icon: "❓", title: "題型 3：制度設計", content: "「AOC 與 IGP 並存對 Languedoc 是優勢還是負擔？」→ AOC 的辨識度、IGP 的彈性（58 個品種）、消費者混淆、出口表現" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">每個論點都要有一個帶年份或數字的具體例子。</p></div>"
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
            question: "Languedoc 現行 AOC 規格核准於？",
            options: ["A. 2007 年 4 月 30 日","B. 2009 年 8 月 1 日","C. 2023 年 11 月 30 日","D. 2016 年 1 月 1 日"],
            correct: 2,
            explanation: "2023 年 11 月 30 日（4 月 30 日是 2007 年更名的日期）。"
          },
          {
            type: 'single',
            question: "Languedoc 規格中有幾個 DGC？",
            options: ["A. 3","B. 7","C. 11","D. 27"],
            correct: 2,
            explanation: "11 個（2023 年規格）。"
          },
          {
            type: 'single',
            question: "下列哪個不是村莊級 AOP？",
            options: ["A. Fitou","B. Faugères","C. La Clape","D. Boutenac"],
            correct: 0,
            explanation: "Fitou 屬於獨立的 AOC，不在 Languedoc 五個村莊級之列。"
          },
          {
            type: 'single',
            question: "Maury 的 Grenache Noir 下限從成立時到現在如何變化？",
            options: ["A. 50% 提高到 75%","B. 75% 降到 50%","C. 一直是 100%","D. 沒有規定"],
            correct: 0,
            explanation: "50% → 75%。"
          },
          {
            type: 'single',
            question: "Picpoul de Pinet 獨立規格的法令日期？",
            options: ["A. 1985 年 12 月 24 日","B. 2013 年 9 月 23 日","C. 2017 年 1 月","D. 2024 年 3 月 26 日"],
            correct: 1,
            explanation: "2013 年 9 月 23 日。"
          },
          {
            type: 'single',
            question: "Diploma 論述中，對「過渡中的法規地位」較佳寫法是？",
            options: ["A. 寫成過渡中，並標明日期與待完成事項","B. 直接當成定論","C. 完全省略","D. 只寫舊制度"],
            correct: 0,
            explanation: "標明日期與待完成事項。"
          }
        ]
      }
    }
  }
]
