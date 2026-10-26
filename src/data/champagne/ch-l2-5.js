/**
 * CH-L2-5 釀造 I：壓榨、一次發酵與調配
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "釀造 I：壓榨、一次發酵與調配",
    subtitle: "從整串葡萄到調配好的基酒",
    icon: "🧺",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "壓榨：cuvée 與 taille",
    highlights: [
      { id: 1, icon: "🧺", title: "整串、輕柔、分餾", content: "葡萄整串入壓榨機，緩慢漸進壓榨，並把果汁分成 cuvée 與 taille 分開釀造；壓榨中心須通過 INAO 認可（agrément simple 或 qualitatif）" },
      { id: 2, icon: "⚖️", title: "一壓 4,000 公斤", content: "1 marc ＝ 4,000 公斤葡萄，最多 2,550 公升：cuvée 2,050 公升 + taille 500 公升（Comité Champagne）；規格換算為每 160 公斤最多 102 公升" },
      { id: 3, icon: "🍋", title: "兩種汁的個性", content: "規格說明：cuvée 酸度高、帶來清新鮮明的香氣；taille 較有果味、單寧也較豐富" },
      { id: 4, icon: "🏭", title: "壓榨機", content: "傳統垂直籃式壓榨機（如 Coquard 型）仍常見；規格容許 2,000–12,000 公斤的各型壓榨機，並限制每日壓榨次數" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">超出 2,550 公升的尾段汁不屬於 AOC 酒款，視同 rebêche 須送去蒸餾。</p></div>"
  },
  {
    title: "澄清與一次發酵",
    highlights: [
      { id: 1, icon: "💧", title: "débourbage", content: "果汁離開壓榨中心前必須先靜置澄清，沉澱的泥渣（bourbes）取出約 1–4%" },
      { id: 2, icon: "🛢️", title: "容器與木頭", content: "一次發酵以不鏽鋼槽為主，也有橡木桶；規格禁止使用木片（morceaux de bois）" },
      { id: 3, icon: "🧪", title: "乳酸發酵 MLF", content: "MLF 是選擇性的（Comité Champagne）：做了酒體較圓潤，不做則保留蘋果酸、較尖銳，是風格決定之一" },
      { id: 4, icon: "🗃️", title: "分開釀造的調色盤", content: "酒廠把品種、村莊、地塊、壓榨分餾分開釀造，形成可供調配的許多基酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">基酒通常高酸、低酒精、不太好喝——魔法在調配與瓶中的時間。</p></div>"
  },
  {
    title: "調配 Assemblage",
    highlights: [
      { id: 1, icon: "🎨", title: "風格的核心", content: "調配多品種、多村莊、多年份；規格提到 Jules Guyot 在 1866 年就指出調配不同品種與地塊的重要性" },
      { id: 2, icon: "🏠", title: "NV 的目標", content: "NV 追求年年一致的「房子風格」：當年酒帶來新鮮活潑，儲備酒帶來成熟複雜與穩定（Comité Champagne）" },
      { id: 3, icon: "📆", title: "Vintage 的限制", content: "Vintage 只能用當年葡萄（不含儲備酒），且每位業者的年份酒不得超過該年度所得酒量的 80%" },
      { id: 4, icon: "🌸", title: "Rosé 的三種做法", content: "直接壓榨、浸皮或放血（saignée），或在裝瓶前把白酒與紅酒調配；紅酒比例常見 5–20%（Comité Champagne）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">D5 常考：調配為何能同時兼顧一致性、複雜度與成本。</p></div>"
  },
  {
    title: "儲備酒 Réserve",
    highlights: [
      { id: 1, icon: "🏺", title: "儲備酒的角色", content: "保留前幾個年份的基酒，用來補足較差年份、維持 NV 風格穩定；規格稱儲備酒為調配帶來更成熟、演化更多的風味" },
      { id: 2, icon: "📐", title: "規格框架", content: "每位業者上限 10,000 公斤葡萄/公頃；多收的產量只能用於充實儲備，須個別申請；儲備酒須接受品質追蹤，釋出時才可使用 AOC 並視同裝瓶申報" },
      { id: 3, icon: "⚠️", title: "舊文章的數字", content: "較舊的文章曾寫儲備上限 8,000 公斤/公頃；現行 INAO 規格為 10,000，課內以規格為準，並不進測驗" },
      { id: 4, icon: "♾️", title: "永續儲備", content: "永續儲備（perpetual reserve，類似 solera）是每年補入新酒、取出部分，使儲備酒成為多年份混合；屬酒廠自行採用的做法，規格沒有特別規範" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">儲備酒的實際比例因酒廠而異，課內不給數字。</p></div>"
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
            question: "關於 cuvée 與 taille，下列何者正確？",
            options: ["A. taille 酸度最高、最清新","B. cuvée 酸度較高、清新；taille 較有果味、單寧較多","C. 兩者完全相同","D. taille 只能用來蒸餾"],
            correct: 1,
            explanation: "規格說明 cuvée 富含酸度、鮮明；taille 較有果味且單寧豐富。"
          },
          {
            type: 'single',
            question: "Vintage 香檳可以含有儲備酒嗎？",
            options: ["A. 可以，最多 50%","B. 可以，但不得超過 10%","C. 不可，必須全部來自當年","D. 只有 Rosé 可以"],
            correct: 2,
            explanation: "Vintage 只能使用當年葡萄，不含儲備酒，且上限為業者當年酒量的 80%。"
          },
          {
            type: 'single',
            question: "INAO 規格對每位業者儲備量的上限是？",
            options: ["A. 2,550 公升","B. 12,400 公斤葡萄/公頃","C. 沒有上限","D. 每位業者有儲備量上限（以公斤葡萄/公頃計）"],
            correct: 3,
            explanation: "12,400 是基準產量，2,550 公升是一壓的果汁量；儲備量另有每位業者的公斤/公頃上限（數值來源有出入，不進測驗）。"
          }
        ]
      }
    }
  }
]
