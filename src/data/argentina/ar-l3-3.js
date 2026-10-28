/**
 * AR-L3-3 產業、市場與 Diploma 論述
 * 事實來源：Geography and Sustainability 期刊摘要（Viticulture in Argentina under extreme weather scenarios）、Open Exam Prep（WSET Level 3：Argentina）、The Drinks Business（Chandon：altitude makes all the difference in Argentine sparkling wine，2019）、Meininger（Argentine wine exports decline again，2025 年出口，引 I numeri del vino／UN Comtrade）、Decanter（Malbec Mendoza sub-zones，2019）、Wine With Seth。數字一律標註來源與年份；來源有出入者（每百公尺降溫 0.6 與 0.8°C）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業、市場與 Diploma 論述",
    subtitle: "生產者結構、出口與價格帶，以及盲品線索與 MW 論述範例",
    icon: "📈",
    background: 'linear-gradient(135deg, #6A2C5E 0%, #3F1738 100%)'
  },
  {
    title: "出口與市場",
    highlights: [
      { id: 1, icon: "📉", title: "出口下滑", content: "2025 年出口 5.55 億歐元（-12%），容量 180 萬公石（-9%），不到 2020 年 380 萬公石的一半；2022 年為 7.73 億歐元（Meininger，引 I numeri del vino／UN Comtrade）" },
      { id: 2, icon: "🍾", title: "瓶裝為主", content: "瓶裝酒約占出口金額的 90%；散裝只有約 3,300 萬歐元" },
      { id: 3, icon: "🌎", title: "主要市場（容量）", content: "英國第一、美國第二、巴西第三、加拿大第四（2025）；Malbec 在 2023 年占出口品種酒容量的 69.3%（INV）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷出口依賴 Malbec 與少數市場，近年量與值都在收縮。</p></div>"
  },
  {
    title: "價格帶與定位",
    highlights: [
      { id: 1, icon: "🛒", title: "中價位的品牌 Malbec", content: "Malbec 以穩定的成熟果味與親民價格，建立了全球中價位品牌（WSET 備考資料）" },
      { id: 2, icon: "💎", title: "高海拔的標誌酒", content: "高海拔標誌酒瞄準高分與更高價位" },
      { id: 3, icon: "🏢", title: "生產者結構", content: "大型集團與家族、精品酒莊並存；詳細市占需以官方報告查證，課內不引用" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">阿根廷同時有大量的中價位 Malbec 與少量的高海拔標誌酒，兩端的邏輯不同。</p></div>"
  },
  {
    title: "盲品線索與論述範例",
    highlights: [
      { id: 1, icon: "👃", title: "盲品線索", content: "Malbec：紫羅蘭、黑藍水果、柔滑單寧；Uco：清新、粉質礦物、酸度鮮明；Luján：結構緊實；Torrontés：玫瑰、天竺葵、桃子；Patagonia Pinot：涼爽、清新" },
      { id: 2, icon: "✍️", title: "論述架構：海拔", content: "① 論點：海拔是阿根廷最重要的風土變數；② 機制：降溫、日夜溫差、紫外線、酸度；③ 例子：Luján vs Uco vs Cafayate；④ 風險與限制：霜、熱浪、水；⑤ 結論" },
      { id: 3, icon: "🧭", title: "考試提醒", content: "論述要同時談機制與限制；Patagonia 的涼爽來自緯度而非海拔，是很好的反例" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 式論述要有論點、機制、例子、限制與結論。</p></div>"
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
            question: "2025 年阿根廷出口約有多少比例的金額來自瓶裝酒？",
            options: ["A. 10%","B. 40%","C. 70%","D. 90%"],
            correct: 3,
            explanation: "約 90%。"
          },
          {
            type: 'single',
            question: "2025 年阿根廷出口容量第二大的市場是？",
            options: ["A. United States","B. United Kingdom","C. Brazil","D. Canada"],
            correct: 0,
            explanation: "美國；英國第一、巴西第三。"
          },
          {
            type: 'single',
            question: "Patagonia 作為論述「海拔」的反例，原因是？",
            options: ["A. 涼爽來自緯度與風，而非海拔","B. 沒有灌溉","C. 海拔最高","D. 不產酒"],
            correct: 0,
            explanation: "海拔僅 250–700 公尺。"
          },
          {
            type: 'single',
            question: "「粉質礦物、酸度鮮明、清新」的 Malbec 線索最符合？",
            options: ["A. Uco Valley","B. San Rafael","C. Maipú","D. Tulum"],
            correct: 0,
            explanation: "Uco Valley 的石灰質風土。"
          }
        ]
      }
    }
  }
]
