/**
 * CH-L1-5 酒款風格、甜度與標籤
 * 事實來源：Comité Champagne（champagne.fr、champagne.education Key Figures 2023／2024／2025）、Difford's Guide、WineWithSeth、Wine Spectator（Voltis）。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "酒款風格、甜度與標籤",
    subtitle: "NV、Vintage、Blanc de Blancs 與標籤判讀",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "主要酒款風格",
    highlights: [
      { id: 1, icon: "🔁", title: "Non-Vintage（NV）", content: "混合多年份，是各家的風格代表；占絕大多數產量（常見估計約七至八成，來源不一，不進測驗）" },
      { id: 2, icon: "📅", title: "Vintage（Millésimé）", content: "只用單一年份葡萄，通常在品質出色的年份才宣告；陳年期更長（自裝瓶起至少 36 個月）" },
      { id: 3, icon: "⚪⚫", title: "Blanc de Blancs／Blanc de Noirs", content: "前者只用白葡萄（Chardonnay），後者只用黑葡萄（Pinot Noir、Meunier），兩者皆為白酒" },
      { id: 4, icon: "🌹", title: "Rosé 與 Prestige Cuvée", content: "香檳允許在調配中加入少量紅酒釀粉紅（常見約 5–20%），也可浸皮；Prestige Cuvée 是各家的旗艦酒，並非法定類別" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rosé 的兩種做法與 Prestige 的實例，Level 2 會進一步說明。</p></div>"
  },
  {
    title: "甜度等級（dosage）",
    highlights: [
      { id: 1, icon: "0️⃣", title: "Brut Nature／Extra Brut", content: "Brut Nature（Pas Dosé）0–3 g/L 且不添加糖；Extra Brut 0–6 g/L" },
      { id: 2, icon: "1️⃣", title: "Brut（最常見）", content: "低於 12 g/L；Extra Dry 12–17 g/L（比 Brut 甜，名字容易誤導）" },
      { id: 3, icon: "2️⃣", title: "Sec／Demi-Sec／Doux", content: "Sec 17–32、Demi-Sec 32–50、Doux 超過 50 g/L" },
      { id: 4, icon: "±", title: "±3 g/L 的容許誤差", content: "法規容許每級有 ±3 g/L 的誤差，因此相鄰級別的數值會重疊。本課考「由乾到甜的順序」，不考邊界數值" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">由乾到甜：Brut Nature → Extra Brut → Brut → Extra Dry → Sec → Demi-Sec → Doux。</p></div>"
  },
  {
    title: "標籤上的生產者代碼",
    highlights: [
      { id: 1, icon: "🏢", title: "NM：Négociant-Manipulant", content: "酒廠（Grandes Marques 多屬此類），可買葡萄或基酒，以自家品牌出售" },
      { id: 2, icon: "🌾", title: "RM：Récoltant-Manipulant", content: "種植者酒莊，用自有葡萄園的葡萄釀造並自行出售（Grower Champagne）" },
      { id: 3, icon: "🤝", title: "CM／RC／SR", content: "CM：合作社品牌；RC：社員自行販售合作社釀造的酒；SR：種植者聯合組織" },
      { id: 4, icon: "🛒", title: "ND／MA", content: "ND：經銷商品牌；MA：買家自有品牌（如超市、餐廳）。代碼由字母加登記號碼組成（如 RM-xxx-xxx），印在標籤底部的小字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">代碼只告訴你「誰釀造並出售」，不等同品質；完整標籤規則在 Level 3。</p></div>"
  },
  {
    title: "怎樣讀一張標籤",
    highlights: [
      { id: 1, icon: "📝", title: "必要資訊", content: "「Champagne」名稱、甜度用語、酒精度、容量、生產者代碼與名稱、產地國等；Brut 是最常看到的甜度字樣" },
      { id: 2, icon: "🕰️", title: "最低陳年", content: "NV 自裝瓶起至少 15 個月（其中至少 12 個月在酒渣上），Vintage 至少 36 個月；羅亞爾 Crémant 的規定較短，可與羅亞爾課程對照" },
      { id: 3, icon: "📆", title: "除渣日期（選擇性）", content: "許多酒莊自願標示除渣日期；除渣後的時間影響風味發展，Level 2 會詳述" },
      { id: 4, icon: "🔍", title: "判讀順序", content: "先看生產者代碼（誰做的），再看甜度（風格），再看年份或 NV（陳年），最後看 Blanc de Blancs／Rosé 等風格字樣" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Level 3 的「法規深度與標籤判讀」會把這張表擴充成完整的判讀流程。</p></div>"
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
            question: "下列甜度排序，由最乾到最甜，何者正確？",
            options: ["A. Brut → Extra Brut → Doux → Sec","B. Demi-Sec → Sec → Brut → Brut Nature","C. Extra Brut → Brut → Sec → Demi-Sec","D. Sec → Brut → Extra Brut → Doux"],
            correct: 2,
            explanation: "正確順序：Brut Nature → Extra Brut → Brut → Extra Dry → Sec → Demi-Sec → Doux。"
          },
          {
            type: 'single',
            question: "標籤代碼 RM 代表？",
            options: ["A. 種植者酒莊，用自有葡萄釀造並自行出售","B. 買家自有品牌","C. 合作社品牌","D. 經銷商"],
            correct: 0,
            explanation: "RM = Récoltant-Manipulant；酒廠是 NM，合作社是 CM，買家品牌是 MA。"
          },
          {
            type: 'single',
            question: "Vintage 香檳的最低陳年規定是？",
            options: ["A. 自裝瓶起至少 12 個月","B. 自裝瓶起至少 15 個月","C. 沒有最低規定","D. 自裝瓶起至少 36 個月"],
            correct: 3,
            explanation: "NV 至少 15 個月，Vintage 至少 36 個月（3 年）。"
          }
        ]
      }
    }
  }
]
