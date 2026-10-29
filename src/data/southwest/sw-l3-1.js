/**
 * SW-L3-1 栽培與氣候
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候",
    subtitle: "霜、雹、雨水與風帶來的栽培挑戰",
    icon: "🌦️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "春霜與冰雹",
    highlights: [
      { id: 1, icon: "❄️", title: "Cahors 的霜害", content: "wein.plus 報導：5 月 5 至 6 日夜間氣溫降到 −4 至 −6°C，約 3,500 公頃受災，4 月冰雹毀掉 300 公頃，預期收成損失約 60 至 70%（文章未標年份）" },
      { id: 2, icon: "🕰️", title: "反覆的歉收", content: "同篇報導指地方推廣負責人稱這是六年內的第三次歉收；前一年晚霜曾毀掉約 80% 的葡萄" },
      { id: 3, icon: "🌱", title: "Jurançon 的早發芽", content: "Petit Manseng 發芽早，三月霜害是風險；高架整枝約 2 公尺以降低地面霜害（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">春霜是西南產區最直接的產量風險。</p></div>"
  },
  {
    title: "雨水、濕度與風",
    highlights: [
      { id: 1, icon: "🌧️", title: "Madiran 的雨量", content: "年均溫 12.5°C，年雨量約 1,000 公釐，多落在冬末與春季；需要長而乾的秋天與偶爾的 foehn 才能達到完整酚類成熟（Wine With Seth）" },
      { id: 2, icon: "🌫️", title: "Monbazillac 的晨霧", content: "Cellar Tours：貴腐黴靠 Gardonette 支流的晨霧助長；Wine With Seth：海洋性氣候、清晨寒濕、午後溫暖晴朗" },
      { id: 3, icon: "💨", title: "風的作用", content: "Gaillac 的 Autan 為溫暖東風；Jurançon 的 foehn 讓秋季乾燥、晚收得以風乾" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">同樣是潮濕，在 Monbazillac 是助力、在 Madiran 則需要乾燥的秋天。</p></div>"
  },
  {
    title: "密度、品種與抗旱",
    highlights: [
      { id: 1, icon: "🌳", title: "種植密度", content: "Cahors 至少每公頃 4,000 株（Wikipedia）；Madiran 歷史上約 2,000 株，現行至少 4,000，頂尖者 5,000–8,000 株（wein.plus）" },
      { id: 2, icon: "🪴", title: "Tannat 的根系", content: "深根使 Tannat 較不依賴乾旱壓力或肥料；新植用小果粒無性系（wein.plus）" },
      { id: 3, icon: "🧮", title: "園藝管理", content: "老園限產、疏花、綠採收、依季節調整樹冠、手工採收並在園中預選（wein.plus）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">提高密度與小果粒，是為了更濃縮的成熟。</p></div>"
  },
  {
    title: "老藤與保存",
    highlights: [
      { id: 1, icon: "🏛️", title: "Plaimont 的老園", content: "Decanter：Sarragachies 的 Pédebernade 園約自 1830 年，被列為法國首座「植物」歷史古蹟；Vignes Prephylloxériques 為 1871 年種植、半公頃幾乎全為 Tannat" },
      { id: 2, icon: "🌿", title: "野生葡萄", content: "樹籬中曾發現野生葡萄（Vitis sylvestris）；有人認為 Petit Manseng 是與其遺傳上最接近的栽培品種（Decanter）" },
      { id: 3, icon: "🔬", title: "保存與研究", content: "Wine With Seth：Plaimont 在 Sarragachies（Gers）設有老 Tannat 的品種保存園；Decanter 描述其從老園採集植株材料並每年舉辦兩天的 Rencontres Ampélographiques" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">老藤與少見品種是西南產區的活資產。</p></div>"
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
            question: "Madiran 的年雨量約多少？",
            options: ["A. 300 mm","B. 600 mm","C. 1,000 mm","D. 2,000 mm"],
            correct: 2,
            explanation: "約 1,000 公釐（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Cahors 的規定，每公頃至少種多少株？",
            options: ["A. 1,000","B. 2,500","C. 4,000","D. 10,000"],
            correct: 2,
            explanation: "至少 4,000 株（Wikipedia）。"
          },
          {
            type: 'single',
            question: "Jurançon 藤蔓為何高架整枝到約 2 公尺？",
            options: ["A. 降低地面霜害風險","B. 增加貴腐","C. 便於機械採收","D. 降低酸度"],
            correct: 0,
            explanation: "Wine With Seth。"
          },
          {
            type: 'single',
            question: "Monbazillac 的貴腐黴得到哪條支流晨霧的助長？",
            options: ["A. Gardonette","B. Tarn","C. Adour","D. Lot"],
            correct: 0,
            explanation: "Cellar Tours。"
          },
          {
            type: 'single',
            question: "Madiran 完整酚類成熟需要什麼條件？",
            options: ["A. 長而乾的秋天與偶爾的 foehn","B. 炎熱的夏季乾旱","C. 冬季嚴寒","D. 頻繁的秋雨"],
            correct: 0,
            explanation: "Wine With Seth。"
          },
          {
            type: 'single',
            question: "Plaimont 的 Vignes Prephylloxériques 是哪一年種植？",
            options: ["A. 1830","B. 1871","C. 1948","D. 1990"],
            correct: 1,
            explanation: "1871 年（Decanter）。"
          }
        ]
      }
    }
  }
]
