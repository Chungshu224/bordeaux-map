/**
 * CAN-L2-7 冰酒、氣泡酒與風格
 * 事實來源：VQA Ontario（Wine Categories and Labelling）、Wine With Seth winewiki（Canada、Ontario wine region）、Wikipedia（Ontario wine）、Winealign（Inniskillin）、Glass of Bubbly（Ontario sparkling）、Wine Growers Nova Scotia。數字一律標註來源；來源有出入者（首批冰酒的年份、冰酒殘糖範圍等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "冰酒、氣泡酒與風格",
    subtitle: "Icewine 的法規與風格、氣泡酒、品飲重點",
    icon: "🧊",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "冰酒的風格",
    highlights: [
      { id: 1, icon: "❄️", title: "怎麼做出冰酒", content: "葡萄須在樹上自然結冰，低於 -8°C 時採收，果汁至少 35°Brix；VQA 冰酒須 100% 為冰酒，產區標在正標（VQA Ontario）。BC 另規定須在結冰狀態下榨汁，裝瓶時殘糖至少 100 g/L（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "主要品種", content: "Vidal 是主力，也有 Riesling、Cabernet Franc 與 Cabernet Sauvignon 的冰酒（Wikipedia）；Ontario 冰酒中 Vidal 的比例約 83%（2025–26 年度，388,970／468,752 公升，Wine With Seth）" },
      { id: 3, icon: "🕰️", title: "首批冰酒的年份", content: "來源不一：Wikipedia 說 1983 年 Inniskillin 首度嘗試、Pelee Island Winery 同年率先成功；Winealign 說 Karl Kaiser 在 1984 年採收了 Inniskillin 的第一批 Vidal 冰酒。課內不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">冰酒是 VQA 規範最嚴的類別之一。</p></div>"
  },
  {
    title: "其他 VQA 甜酒與特殊類別",
    highlights: [
      { id: 1, icon: "🍯", title: "晚摘分級", content: "Late Harvest 至少 22°Brix，Select Late Harvest 至少 26，Special Select Late Harvest 至少 30，冰酒至少 35；Botrytized 與 Totally Botrytized 酒也是獨立類別。這些類別都必須標示年份（VQA Ontario）" },
      { id: 2, icon: "🍂", title: "Appassimento 與浸皮白酒", content: "Appassimento 一詞可用於至少 85% 為風乾葡萄的酒；風乾葡萄占 15–85% 的酒可標「Appassimento-method」但須宣告確切比例。Skin Fermented White 須浸皮至少 10 天，且須標在正標（VQA Ontario）" },
      { id: 3, icon: "📐", title: "殘糖範圍的說法", content: "Wikipedia 提到 Ontario 冰酒殘糖約 180–320 g/L；BC 的下限為 100 g/L（Wine With Seth）。兩者為不同法規的不同門檻，且前者為單一來源，不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">甜酒的分級，靠的是採收時的糖度。</p></div>"
  },
  {
    title: "氣泡酒與品飲重點",
    highlights: [
      { id: 1, icon: "🥂", title: "VQA 氣泡酒", content: "Sparkling 須由二次發酵產生不低於 300 kPa 的壓力，氣泡必須是天然產生；壓力不高於 300 kPa 的屬 Effervescent，適用一般餐酒的標示規則（VQA Ontario）。Ontario 的傳統法氣泡酒多用 Chardonnay 與 Pinot Noir，Niagara 與 Prince Edward County 的冷涼氣候與石灰質土壤常被拿來與 Champagne 比較（Wine With Seth、Glass of Bubbly）" },
      { id: 2, icon: "🔎", title: "產地風格的線索", content: "Niagara 台地的酒常被形容為有礦物感，與底下的白雲岩有關；Prince Edward County 的 Pinot Noir 與 Chardonnay 同樣以礦物感著稱（Wine With Seth、VQA Ontario）；Nova Scotia 的白酒有明亮、如鋼般的酸度、較低的酒精濃度與芳香的新鮮感（Wine With Seth）" },
      { id: 3, icon: "☀️", title: "Okanagan 的線索", content: "南段夏季午後 30–35°C 且日夜溫差 15–20°C（Wine With Seth），紅酒熟度較高，如 Syrah 與 Bordeaux 品種；中北段較涼，偏向芳香白酒與 Pinot Noir" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風格線索是：礦物感、酸度，以及南北的熟度。</p></div>"
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
            question: "VQA 氣泡酒（Sparkling）二次發酵產生的壓力至少為？",
            options: ["A. 100 kPa","B. 300 kPa","C. 500 kPa","D. 700 kPa"],
            correct: 1,
            explanation: "不低於 300 kPa，碳酸須為天然。"
          },
          {
            type: 'single',
            question: "Special Select Late Harvest 的最低採收糖度為？",
            options: ["A. 22°Brix","B. 26°Brix","C. 30°Brix","D. 35°Brix"],
            correct: 2,
            explanation: "至少 30°Brix。"
          },
          {
            type: 'single',
            question: "BC 冰酒裝瓶時的殘糖至少為？",
            options: ["A. 30 g/L","B. 60 g/L","C. 100 g/L","D. 250 g/L"],
            correct: 2,
            explanation: "至少 100 g/L。"
          },
          {
            type: 'single',
            question: "下列哪一類別必須標示年份？",
            options: ["A. 冰酒","B. 只標 VQA Ontario 的餐酒","C. 加烈酒","D. 氣泡酒"],
            correct: 0,
            explanation: "冰酒必須標年份；氣泡、加烈與只標 VQA Ontario 的餐酒則為選擇性。"
          },
          {
            type: 'single',
            question: "Skin Fermented White 至少須浸皮多久？",
            options: ["A. 2 天","B. 10 天","C. 30 天","D. 90 天"],
            correct: 1,
            explanation: "至少 10 天。"
          },
          {
            type: 'single',
            question: "Nova Scotia 白酒的風格重點是？",
            options: ["A. 明亮如鋼的酸度與較低酒精","B. 濃厚的橡木味","C. 高酒精與低酸","D. 極甜"],
            correct: 0,
            explanation: "明亮的酸、較低酒精、芳香的新鮮感。"
          }
        ]
      }
    }
  }
]
