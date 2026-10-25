/**
 * CH-L1-6 Level 1 綜合評量
 * 事實來源：Comité Champagne（champagne.fr、champagne.education Key Figures 2023／2024／2025）、Difford's Guide、WineWithSeth、Wine Spectator（Voltis）。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "歷史、風土、品種、傳統法與標籤",
    icon: "✅",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📜", title: "歷史", content: "羅馬 → 中世紀靜態酒 → 1662 Merret → Dom Pérignon 迷思 → 1911 暴動 → 1927／1936 劃界與 AOC → 2015 UNESCO" },
      { id: 2, icon: "⛰️", title: "風土", content: "北方邊緣氣候、白堊（水庫、溫度調節、窖）、5 個 département（Marne 最大）、四大產區" },
      { id: 3, icon: "🍇", title: "品種與釀造", content: "三大品種各約三成；傳統法：基酒 → 裝瓶 → 瓶中二次發酵 → 酒渣陳年 → 轉瓶 → 除渣 → dosage → 封瓶" },
      { id: 4, icon: "🏷️", title: "風格與標籤", content: "NV／Vintage／Blanc de Blancs／Blanc de Noirs／Rosé；甜度順序；NM／RM／CM／RC／SR／ND／MA" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">有出入的數字（品種比例、生產者家數、各 département 比例、新品種日期）不在評量範圍；完成後可進入 Level 2。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 1 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "關於 Dom Pérignon 與香檳的起源，下列何者正確？",
            options: ["A. 他在 1662 年發明二次發酵","B. 氣泡早在他之前就被觀察與記錄，他的貢獻在壓榨與調配","C. 他創立了 UNESCO 登錄的酒窖","D. 他制定了 1936 年 AOC"],
            correct: 1,
            explanation: "Merret 1662 年的論文早於他到任；「香檳不是任何人發明的」。"
          },
          {
            type: 'single',
            question: "香檳的邊緣氣候最直接帶來什麼基酒特徵？",
            options: ["A. 低酸、高酒精","B. 深色、單寧重","C. 高酸、較低糖度","D. 濃郁甜味"],
            correct: 2,
            explanation: "成熟困難讓酸度保留、糖度偏低，適合做氣泡基酒。"
          },
          {
            type: 'single',
            question: "白堊對香檳最重要的兩項功能是？",
            options: ["A. 水庫與溫度調節，並提供涼爽恆溫的酒窖","B. 提高糖度、增加色素","C. 防止黴病、取代修剪","D. 增加單寧"],
            correct: 0,
            explanation: "白堊儲水、調溫，也留下可作酒窖的坑道。"
          },
          {
            type: 'single',
            question: "下列哪一組產區與主品種配對正確？",
            options: ["A. 巴爾丘 — Chardonnay","B. 馬恩河谷 — Chardonnay","C. 漢斯山 — Meunier","D. 白丘 — Chardonnay"],
            correct: 3,
            explanation: "白丘 Chardonnay；馬恩河谷 Meunier；漢斯山與巴爾丘 Pinot Noir。"
          },
          {
            type: 'single',
            question: "Blanc de Noirs 使用的葡萄是？",
            options: ["A. 只有 Chardonnay","B. 只有 Pinot Noir 和／或 Meunier","C. Arbane 與 Petit Meslier","D. 必須含三大品種全部"],
            correct: 1,
            explanation: "Blanc de Noirs 只用黑葡萄；Blanc de Blancs 只用白葡萄。"
          },
          {
            type: 'single',
            question: "下列哪一步驟決定最終甜度？",
            options: ["A. 壓榨","B. 轉瓶 remuage","C. 除渣後的 dosage（liqueur d'expédition）","D. 裝瓶時的 liqueur de tirage"],
            correct: 2,
            explanation: "tirage 的糖是為了產生氣泡；甜度由除渣後補回的 dosage 決定。"
          },
          {
            type: 'single',
            question: "NV 與 Vintage 香檳的最低陳年（自裝瓶起）分別是？",
            options: ["A. 15 個月與 36 個月","B. 12 個月與 24 個月","C. 9 個月與 18 個月","D. 36 個月與 60 個月"],
            correct: 0,
            explanation: "NV 至少 15 個月，Vintage 至少 36 個月。"
          },
          {
            type: 'single',
            question: "標籤上看到 NM 與 RM，意思分別是？",
            options: ["A. 合作社與買家品牌","B. 年份與非年份","C. 種植者酒莊與酒廠","D. 酒廠（négociant）與種植者酒莊（récoltant）"],
            correct: 3,
            explanation: "NM = Négociant-Manipulant（酒廠），RM = Récoltant-Manipulant（種植者酒莊）。"
          }
        ]
      }
    }
  }
]
