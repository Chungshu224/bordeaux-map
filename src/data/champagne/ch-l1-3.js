/**
 * CH-L1-3 葡萄品種
 * 事實來源：Comité Champagne（champagne.fr、champagne.education Key Figures 2023／2024／2025）、Difford's Guide、WineWithSeth、Wine Spectator（Voltis）。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄品種",
    subtitle: "三大品種、古老品種與 Chardonnay Rosé",
    icon: "🍇",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "三大品種與種植比例",
    highlights: [
      { id: 1, icon: "⚫", title: "Pinot Noir", content: "黑葡萄，約 38% 的葡萄園，帶來結構、酒體與紅色水果" },
      { id: 2, icon: "⚪", title: "Chardonnay", content: "白葡萄，約 31–32% 的葡萄園，帶來細緻、柑橘與花香、高酸與陳年潛力" },
      { id: 3, icon: "⚫", title: "Meunier", content: "黑葡萄，約 30–31% 的葡萄園，帶來圓潤的果味與柔和口感，常讓 NV 更早適飲" },
      { id: 4, icon: "📅", title: "比例要標年份", content: "Comité Champagne 2025 年版為 38／32／30；較早資料為 38／31／31。差異來自年度更新與四捨五入，所以本課標註年份，比例不進測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住的是「三大品種各約三成，Pinot Noir 略多」，不是小數點。</p></div>"
  },
  {
    title: "各品種在酒中的角色",
    highlights: [
      { id: 1, icon: "🏋️", title: "Pinot Noir：骨架", content: "紅色水果（櫻桃、草莓）、飽滿酒體與陳年架構；在漢斯山與巴爾丘最為重要" },
      { id: 2, icon: "💎", title: "Chardonnay：細緻與酸度", content: "柑橘、白花與礦物感；年輕時內斂，隨陳年開展出奶油、吐司；白丘是核心" },
      { id: 3, icon: "🍑", title: "Meunier：圓潤與親和", content: "成熟較早、較耐春霜（發芽較晚），果味豐厚、酸度較低；馬恩河谷最具代表" },
      { id: 4, icon: "⚖️", title: "調配的邏輯", content: "三者互補：Chardonnay 的酸與細緻、Pinot Noir 的結構、Meunier 的果味與柔和——這是調配（assemblage）的基礎" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">黑葡萄的果汁是無色的，色素在果皮：所以用 Pinot Noir 與 Meunier 也能釀出白色基酒（Blanc de Noirs）。</p></div>"
  },
  {
    title: "古老品種與 2025 年新增的 Chardonnay Rosé",
    highlights: [
      { id: 1, icon: "🌿", title: "四個「被遺忘」的品種", content: "Arbane、Petit Meslier、Pinot Blanc、Pinot Gris 都是法定允許品種，但合計不到葡萄園的 0.4%（較早資料寫約 0.3%，來源有出入，不進測驗）" },
      { id: 2, icon: "🌸", title: "Chardonnay Rosé", content: "Chardonnay 的粉紅果皮變異，在香檳區自約 1900 年即有紀錄，曾因行政疏失從規格中消失；2025 年重新獲准，使許可品種達到 8 種" },
      { id: 3, icon: "📆", title: "日期說法不一", content: "有來源寫 2025 年 7 月在產區層級核准，也有來源寫歐盟於 2026 年 6 月確認；日期不進測驗，只需知道「2025 年前後新增，目標是白色基酒而非粉紅香檳」" },
      { id: 4, icon: "🧬", title: "抗病品種 Voltis", content: "Voltis 是 INRAE 與德國 JKI 培育的抗黴病品種，2022 年底獲准試種（葡萄園面積上限 5%、單一調配上限 10%）；屬於「新品種」而非傳統八品種，Level 3 會再談" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些少數品種象徵「氣候變遷下的選項」，但在酒標與市場上仍極少見。</p></div>"
  },
  {
    title: "品種與風格、產區的對應",
    highlights: [
      { id: 1, icon: "⚪", title: "Blanc de Blancs", content: "100% 白葡萄（實務上幾乎都是 Chardonnay），風格細緻、酸度鮮明，白丘最具代表" },
      { id: 2, icon: "⚫", title: "Blanc de Noirs", content: "只用黑葡萄（Pinot Noir 和／或 Meunier）釀成白酒，風格較豐滿、紅色水果" },
      { id: 3, icon: "🧭", title: "產區的主品種", content: "漢斯山與巴爾丘：Pinot Noir；馬恩河谷：Meunier；白丘：Chardonnay。這是風格預測的第一步" },
      { id: 4, icon: "🔗", title: "延伸閱讀", content: "勃艮地的 Pinot Noir／Chardonnay 與 Chablis 的白堊對照，見勃艮地課程；Crémant 與 Cava 的品種差異，見 Level 3 的比較課" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">產區 × 品種 × 釀法，是香檳風格預測的三個旋鈕。</p></div>"
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
            question: "Blanc de Noirs 的意思是？",
            options: ["A. 只用白葡萄釀成","B. 甜度最高的香檳","C. 浸皮釀成的粉紅酒","D. 用黑葡萄（Pinot Noir 和／或 Meunier）釀成的白酒"],
            correct: 3,
            explanation: "黑葡萄果汁無色，快速壓榨可得白色基酒。"
          },
          {
            type: 'single',
            question: "下列何者最能描述 Meunier 在調配中的角色？",
            options: ["A. 提供最高的酸度與礦物感","B. 圓潤的果味與柔和口感，常讓酒更早適飲","C. 僅用於粉紅香檳","D. 不是許可品種"],
            correct: 1,
            explanation: "Chardonnay 提供酸度與細緻，Pinot Noir 提供結構，Meunier 提供果味與柔和。"
          },
          {
            type: 'single',
            question: "下列哪一組全部是香檳的法定許可品種？",
            options: ["A. Pinot Noir、Chenin Blanc、Meunier","B. Chardonnay、Riesling、Pinot Gris","C. Arbane、Petit Meslier、Pinot Blanc","D. Meunier、Gamay、Chardonnay"],
            correct: 2,
            explanation: "其餘組合各含一個不被允許的品種（Chenin Blanc、Riesling、Gamay）。"
          }
        ]
      }
    }
  }
]
