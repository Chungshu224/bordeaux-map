/**
 * GR-L3-3 風土比較與品種剖析：與世界經典對照
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風土比較與品種剖析",
    subtitle: "與世界經典對照",
    icon: "🔬",
    background: 'linear-gradient(135deg, #B8902A 0%, #1C7C9C 100%)'
  },
  {
    title: "比較框架：先分類，再下結論",
    highlights: [
      { id: 1, icon: "1️⃣", title: "外觀", content: "色澤深淺與色調（Xinomavro 色淡、易呈磚色；Moschofilero 淡檸檬粉紅）" },
      { id: 2, icon: "2️⃣", title: "香氣", content: "芳香類型：花香、柑橘、核果、礦物、樹脂" },
      { id: 3, icon: "3️⃣", title: "口感", content: "酸度、單寧、酒精、酒體、風乾或強化的甜感" },
      { id: 4, icon: "4️⃣", title: "結論", content: "品種、產區、品質與陳年潛力，附上線索作為理由" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 盲品與論述都要求「用證據支撐結論」。本課把希臘主要品種整理成可比較的線索。</p></div>"
  },
  {
    title: "白酒：Assyrtiko 的對照",
    highlights: [
      { id: 1, icon: "🌋", title: "Santorini 的 Assyrtiko", content: "強烈礦物感與鹹感，酸度極高，結構密度高" },
      { id: 2, icon: "🏞️", title: "Santorini 以外的 Assyrtiko", content: "果香較多、結構較不濃密、礦物感較輕" },
      { id: 3, icon: "🌹", title: "Moschofilero", content: "低酒精、玫瑰與茉莉花香、酸度鮮明；常以不鏽鋼釀造" },
      { id: 4, icon: "🍑", title: "Malagousia", content: "桃、芒果與柑橘，酒體比 Moschofilero 更豐腴" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">區分線索：礦物與鹹感 → Santorini Assyrtiko；玫瑰花香＋低酒精 → Moschofilero；桃與芒果＋豐腴 → Malagousia。</p></div>"
  },
  {
    title: "紅酒：Xinomavro 對 Nebbiolo、Agiorgitiko 的範圍",
    highlights: [
      { id: 1, icon: "🔗", title: "Xinomavro 與 Nebbiolo 的相似", content: "色淡、高酸、高單寧、可陳年十年以上、陳年後轉磚紅" },
      { id: 2, icon: "↔️", title: "差異", content: "Xinomavro 的氣候更暖（地中海影響）、品種香氣與土壤背景不同；比較時應以「結構相似、風土不同」下論點" },
      { id: 3, icon: "🍒", title: "Agiorgitiko 的海拔梯度", content: "低處更熟、飽滿；中段（約 450–650 公尺）最均衡；高處香氣與張力最強" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">避免「Xinomavro 就是希臘的 Nebbiolo」這種簡化句；Diploma 閱卷偏好能指出相似點與差異的答案。</p></div>"
  },
  {
    title: "甜酒的對照",
    highlights: [
      { id: 1, icon: "🍯", title: "Vinsanto 對 Mavrodaphne", content: "白（風乾、氧化）對紅（強化、桶陳）" },
      { id: 2, icon: "🌼", title: "Muscat of Samos 對 Muscat of Lemnos", content: "Samos 用 Muscat Blanc à Petits Grains，Lemnos 用 Muscat of Alexandria" },
      { id: 3, icon: "🎯", title: "可用的辨識線索", content: "顏色、氧化跡象、強化酒精感、香氣家族（Muscat 的花香／葡萄）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">甜酒盲品先判斷：甜度來源（風乾、強化、芳香品種）再細分。</p></div>"
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
            question: "相較於 Santorini，其他地區的 Assyrtiko 通常？",
            options: ["A. 果香較多、結構較不濃密","B. 更鹹更濃密","C. 一定是甜酒","D. 一定橡木味重"],
            correct: 0,
            explanation: "Santorini 的礦物感與鹹感較為突出。"
          },
          {
            type: 'single',
            question: "以下哪組線索最符合 Moschofilero？",
            options: ["A. 玫瑰與茉莉花香、低酒精、酸度鮮明","B. 高單寧、磚紅色","C. 強烈樹脂味","D. 氧化型甜味"],
            correct: 0,
            explanation: "Moschofilero 是低酒精的芳香型白酒。"
          },
          {
            type: 'single',
            question: "比較 Xinomavro 與 Nebbiolo 的最佳論述方式是？",
            options: ["A. 指出相似的結構，也說明風土差異","B. 只說兩者一模一樣","C. 只談價格","D. 不比較"],
            correct: 0,
            explanation: "Diploma 偏好兼顧相似與差異。"
          }
        ]
      }
    }
  }
]
