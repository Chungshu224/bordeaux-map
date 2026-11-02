/**
 * CAN-L1-3 品種
 * 事實來源：The Canadian Encyclopedia「Wine Industry」、Wine With Seth winewiki（Canada、British Columbia、Okanagan Valley）、VQA Ontario（Wine Categories and Labelling）、AWRI Niagara 產區簡介、Winealign「Inniskillin – A Winery Profile」、Wikipedia「Cellared in Canada」、Grape Growers of Ontario Fact Sheet 2024。數字一律標註來源；來源有出入者（Niagara Escarpment 的高度、BC 的 GI 與次 GI 數目、BC 最多種植的白品種、各年度面積與產量、Inniskillin 執照「自 1929 年以來第一張」的說法等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品種",
    subtitle: "Riesling、Chardonnay、Pinot Noir、Cabernet Franc、Vidal 與雜交品種",
    icon: "🍇",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Ontario 的品種版圖",
    highlights: [
      { id: 1, icon: "📊", title: "VQA 酒的品種比例", content: "以 VQA 酒的體積計（2025 年 4 月至 2026 年 3 月，Wine With Seth）：Chardonnay 13%、Riesling 12%、Cabernet Franc 12%、Merlot 11%、Pinot Gris 9%、Vidal Blanc 8%、Sauvignon Blanc 7%、Baco Noir 7%、Cabernet Sauvignon 6%、Pinot Noir 5%、Gamay Noir 3%、Syrah 2%、Gewürztraminer 2%" },
      { id: 2, icon: "⚖️", title: "紅白比例", content: "同一年度，紅酒占 VQA 酒的 47%，白酒占 53%；共使用 74 個品種。這是單一年度的統計，只用來看整體輪廓" },
      { id: 3, icon: "🌡️", title: "冷涼氣候的主角", content: "白酒以 Chardonnay、Riesling 為主，紅酒以 Cabernet Franc、Merlot 為主；Pinot Noir 與 Gamay Noir 也有種植，但比例較小" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Ontario 以國際品種為主，且紅白並重。</p></div>"
  },
  {
    title: "雜交品種與 Vidal",
    highlights: [
      { id: 1, icon: "🧬", title: "雜交品種的規定", content: "Ontario 允許許多 vinifera 品種與 8 個「同類最佳」的雜交品種；使用雜交品種須在標籤上宣告，含雜交品種的酒只能使用 Ontario 的產地描述，且不得標示 estate bottled、單一葡萄園或 Traditional Method；Vidal 冰酒是例外（VQA Ontario、Wine With Seth）" },
      { id: 2, icon: "🧊", title: "Vidal 與冰酒", content: "Vidal Blanc 是冰酒的主力：在 2025 年 4 月至 2026 年 3 月間，Ontario 468,752 公升冰酒中有 388,970 公升是 Vidal（Wine With Seth）。皮厚、耐寒、能在樹上撐到冰凍，是它適合的原因之一（一般說法）" },
      { id: 3, icon: "🟣", title: "Baco Noir 與美洲種", content: "Baco Noir 是法國雜交種，占 VQA 酒的 7%。2025 年全加拿大 13,290 公頃葡萄園中，289 公頃是 Labrusca，13,001 公頃是 vinifera 或法國雜交種（Wine With Seth）；Niagara 在 2001 年的資料中，Concord 的種植面積最大（約 10%，AWRI）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">雜交品種不是配角：冰酒的主力就是 Vidal。</p></div>"
  },
  {
    title: "British Columbia 的品種",
    highlights: [
      { id: 1, icon: "🔴", title: "紅酒", content: "Pinot Noir 是 BC 種植最多的紅品種；其他還有 Merlot、Cabernet Franc、Cabernet Sauvignon 與 Syrah（Wine With Seth）" },
      { id: 2, icon: "⚪", title: "白酒", content: "主要白品種有 Chardonnay、Pinot Gris、Riesling、Gewürztraminer、Sauvignon Blanc 與 Sémillon。種植最多的白品種，同一來源的 BC 頁面寫 Pinot Gris、Okanagan 頁面把 Chardonnay 列為重要品種，說法不一，課內不列入測驗" },
      { id: 3, icon: "🧭", title: "南暖北涼", content: "Okanagan 南段的台地多種 Bordeaux 品種（Cabernet Sauvignon、Merlot、Cabernet Franc）與 Syrah；較涼的中北段則多種 Pinot Noir、Chardonnay、Pinot Gris、Riesling 與 Gewürztraminer（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">BC 的品種版圖，隨著從南到北的氣候變化而改變。</p></div>"
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
            question: "Ontario 冰酒的主力品種是？",
            options: ["A. Riesling","B. Cabernet Franc","C. Vidal Blanc","D. Pinot Noir"],
            correct: 2,
            explanation: "Vidal Blanc，2025–26 年度占 468,752 公升中的 388,970 公升。"
          },
          {
            type: 'single',
            question: "Baco Noir 是哪一類品種？",
            options: ["A. 法國雜交種","B. 純 vinifera","C. Labrusca 美洲種","D. 野生種"],
            correct: 0,
            explanation: "法國雜交種。"
          },
          {
            type: 'single',
            question: "含雜交品種的 Ontario VQA 酒，下列哪一項不能標示？",
            options: ["A. Ontario 產地描述","B. Estate bottled","C. 酒款顏色","D. 年份（符合條件時）"],
            correct: 1,
            explanation: "含雜交品種的酒不得標示 estate bottled、單一葡萄園或 Traditional Method。"
          },
          {
            type: 'single',
            question: "Okanagan 南段台地多種哪類品種？",
            options: ["A. Bordeaux 品種與 Syrah","B. Riesling 與 Gewürztraminer","C. Vidal 與 Baco Noir","D. Gamay 與 Pinot Noir"],
            correct: 0,
            explanation: "南段較暖，種 Bordeaux 品種與 Syrah。"
          },
          {
            type: 'single',
            question: "BC 種植最多的紅品種是？",
            options: ["A. Merlot","B. Syrah","C. Pinot Noir","D. Cabernet Sauvignon"],
            correct: 2,
            explanation: "Pinot Noir（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "在 Ontario 的 VQA 酒（2025–26 年度）中，紅白酒的大致比例是？",
            options: ["A. 紅 47%、白 53%","B. 紅 80%、白 20%","C. 紅 20%、白 80%","D. 全部是白酒"],
            correct: 0,
            explanation: "紅 47%、白 53%。"
          }
        ]
      }
    }
  }
]
