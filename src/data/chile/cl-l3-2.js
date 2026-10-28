/**
 * CL-L3-2 釀造與風土深度：Carmenère、石頭與老藤
 * 事實來源：Wine With Seth（Chile 自根苗頁、Carménère 頁，2026 年查閱）、Decanter（Tim Atkin MW, "Pedro Parra: breaking new ground"，2015；2010 年地震報導）、The Drinks Business（智利水資源報導，2023-08）、Slow Food（智利野火，2023-03-16）、Vinetur（智利 2024 年出口，2025-06-13）、Portal Fruticola（2012 年瓶裝酒出口，2012-09-19）。數字一律標註來源與年份；來源有出入者（葡萄根瘤蚜年份、2023 野火面積）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造與風土深度：Carmenère、石頭與老藤",
    subtitle: "成熟度、土壤與採購地如何決定風格",
    icon: "🪨",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Carmenère：成熟度是風格開關",
    highlights: [
      { id: 1, icon: "🍂", title: "晚熟", content: "Wine With Seth：成熟期長而晚，需要延續到秋天的溫暖陽光；多數酒農認為理想採收在 4 月底至 5 月，範圍可從 3 月到 6 月。Concha y Toro 的 Carmín de Peumo 約 5 月底採收" },
      { id: 2, icon: "🫑", title: "甲氧基吡嗪", content: "早採帶來較多青椒般的吡嗪、較低酒精與較高酸度；晚採糖分與果味較高。疏葉讓果實曝光可降低吡嗪，但吡嗪「總會存在」" },
      { id: 3, icon: "📊", title: "面積", content: "SAG 2022 年葡萄園普查：Carmenère 10,219.62 公頃，占申報釀酒葡萄面積的 7.92%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">採收日是 Carmenère 最主要的風格槓桿。</p></div>"
  },
  {
    title: "Carmenère 的歷史與產地",
    highlights: [
      { id: 1, icon: "🔎", title: "1994 年 11 月", content: "Boursiquot 在 Maipo 的 Viña Carmen 辨認出「智利 Merlot」其實是 Carménère" },
      { id: 2, icon: "🏅", title: "Clos Apalta", content: "以 Carménère 為主的 Casa Lapostolle Clos Apalta 2005 年份，於 2008 年成為 Wine Spectator 年度第一名，智利首次獲此榮譽" },
      { id: 3, icon: "🗺️", title: "重要產地", content: "Colchagua 的 Apalta 與 Los Lingues、Cachapoal 的 Peumo、Maipo 與 Maule。石礫夾黏土、排水良好的貧瘠土壤有助抑制旺長" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">盲品線索：成熟的黑色水果加上墨西哥辣椒或甜椒、黑胡椒香，是智利 Carmenère 的典型印象。</p></div>"
  },
  {
    title: "Pedro Parra 與「石頭」風土",
    highlights: [
      { id: 1, icon: "🪨", title: "石頭比表土重要", content: "Tim Atkin MW 於 Decanter（2015）引述 Parra：「表土不重要，重要的是岩石與石頭」；他主張以土壤圖指導品種、採收與釀造" },
      { id: 2, icon: "🏞️", title: "沖積階地", content: "他認為智利的沖積階地「對 Carmenère 很好，對其他品種很糟」" },
      { id: 3, icon: "🧭", title: "新產區浮上檯面", content: "Parra 說 2004 年的 Elqui、Limarí 與 Cauquenes「幾乎不在地圖上」；他也研究 Alto Maipo、高海拔 Cachapoal，並在 Bío-Bío 與 Concepción 規劃 Pinot Noir 與 Riesling。文章當時稱他是智利唯一的風土顧問" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這篇是 2015 年的訪談，其中的人數與計畫屬當時情況，論述時要標註年代。</p></div>"
  },
  {
    title: "Carignan 與採購地的移動",
    highlights: [
      { id: 1, icon: "🌳", title: "VIGNO", content: "Maule 乾耕老藤 Carignan 的品質標章：Carignan 樹齡至少 30 年、乾耕、上市前陳年兩年；Carignan 最低比例各來源不同，課內不比較" },
      { id: 2, icon: "📉", title: "Maipo 與水", content: "Casillero del Diablo 的 Cabernet 中，Maipo 的占比由 33% 降到 10%（The Drinks Business，2023），原料往 Maule 等地轉移" },
      { id: 3, icon: "🧭", title: "Costa 與 Andes", content: "Level 1 的橫向分區（Costa、Entre Cordilleras、Andes）是理解風格的框架：靠海冷涼，安地斯側有高度與日夜溫差。各來源的海拔與界線不一，課內不引用數值" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 常問：氣候壓力下，原料來源和風格會如何改變？</p></div>"
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
            question: "多數酒農認為 Carmenère 理想的採收期是？",
            options: ["A. 4 月底至 5 月","B. 1 月","C. 8 月","D. 11 月"],
            correct: 0,
            explanation: "南半球的秋天，範圍可從 3 月到 6 月。"
          },
          {
            type: 'single',
            question: "Carmenère 早採通常會帶來？",
            options: ["A. 更多吡嗪、較低酒精、較高酸度","B. 更高酒精與更少青味","C. 更多甜味","D. 沒有差別"],
            correct: 0,
            explanation: "晚採則糖分與果味較高。"
          },
          {
            type: 'single',
            question: "1994 年 11 月，誰在哪裡辨認出智利 Merlot 是 Carménère？",
            options: ["A. Boursiquot，於 Maipo 的 Viña Carmen","B. Parra，於 Elqui","C. Atkin，於 Itata","D. Humboldt，於 Limarí"],
            correct: 0,
            explanation: "之後確認為 Carménère。"
          },
          {
            type: 'single',
            question: "SAG 2022 年普查中，Carmenère 約占申報釀酒葡萄面積多少？",
            options: ["A. 約 7.9%","B. 約 0.5%","C. 約 30%","D. 約 60%"],
            correct: 0,
            explanation: "10,219.62 公頃，7.92%。"
          },
          {
            type: 'single',
            question: "Parra 認為風土中真正重要的是？",
            options: ["A. 岩石與石頭","B. 表土厚度","C. 葡萄樹品牌","D. 酒標設計"],
            correct: 0,
            explanation: "Decanter，2015。"
          },
          {
            type: 'single',
            question: "VIGNO 對 Carignan 樹齡的要求是？",
            options: ["A. 至少 30 年","B. 至少 3 年","C. 至少 8 年","D. 沒有要求"],
            correct: 0,
            explanation: "同時須乾耕、上市前陳年兩年。"
          }
        ]
      }
    }
  }
]
