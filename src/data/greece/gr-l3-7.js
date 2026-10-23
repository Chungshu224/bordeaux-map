/**
 * GR-L3-7 Level 3 綜合評量：Diploma 模擬題
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "Diploma 模擬題",
    icon: "🏆",
    background: 'linear-gradient(135deg, #B8902A 0%, #6e5412 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🌱", title: "栽培", content: "Kouloura／koulouraki、自根無根瘤蚜、高海拔保酸、2023–2025 年 Santorini 乾旱與適應" },
      { id: 2, icon: "🏭", title: "釀造", content: "Assyrtiko ≥85%／Nykteri／Vinsanto；Xinomavro 傳統與現代；Retsina 與強化酒" },
      { id: 3, icon: "🔬", title: "比較", content: "Santorini 內外的 Assyrtiko、Xinomavro 對 Nebbiolo、芳香白酒、甜酒" },
      { id: 4, icon: "📜", title: "法規", content: "PDO 100%／PGI ≥85%、三級 PGI、陳年通則與例外、拼寫與查證" },
      { id: 5, icon: "📈", title: "產業", content: "散裝酒約五成、PDO／PGI 約三成、出口高度集中歐盟" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">以下為模擬題，建議限時作答，之後對照解析檢討。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Santorini 的 kouloura 與 koulouraki 的共同目的是？",
            options: ["A. 抵擋強勁北風並保護果實","B. 提高機械化程度","C. 延長發酵","D. 降低酒精"],
            correct: 0,
            explanation: "兩者都是低矮的整枝回應。"
          },
          {
            type: 'single',
            question: "Santorini 乾白 PDO 的 Assyrtiko 最低比例？",
            options: ["A. 85%","B. 51%","C. 100%","D. 30%"],
            correct: 0,
            explanation: "Vinsanto 則為至少 51%。"
          },
          {
            type: 'single',
            question: "Vinsanto 需要的最低氧化型陳年？",
            options: ["A. 24 個月","B. 3 個月","C. 7 年","D. 不需要"],
            correct: 0,
            explanation: "另需日曬過熟葡萄與至少 370 g/L 糖度。"
          },
          {
            type: 'single',
            question: "混入其他品種的 Naoussa 會被降為？",
            options: ["A. Imathia PGI 或 Macedonia PGI","B. Grand Reserve","C. Retsina","D. OPE"],
            correct: 0,
            explanation: "Naoussa 只准 100% Xinomavro。"
          },
          {
            type: 'single',
            question: "PGI 的來源比例與層級是？",
            options: ["A. 至少 85%；Regional、District、Area","B. 100%；僅一級","C. 50%；兩級","D. 無要求"],
            correct: 0,
            explanation: "Regional 8 個、District 37 個。"
          },
          {
            type: 'single',
            question: "Mantineia 的主要特徵？",
            options: ["A. 650–800 公尺高原的 Moschofilero","B. 火山島的 Assyrtiko","C. 海平面的 Mavrodaphne","D. 甜型 Muscat"],
            correct: 0,
            explanation: "希臘最冷涼的產區之一。"
          },
          {
            type: 'single',
            question: "關於 Xinomavro 與 Nebbiolo 的比較，最佳說法是？",
            options: ["A. 結構相似（色淡、高酸高單寧、可陳年），但風土與香氣不同","B. 完全相同","C. 毫無相似","D. Xinomavro 是白品種"],
            correct: 0,
            explanation: "Diploma 偏好同時談相似與差異。"
          },
          {
            type: 'single',
            question: "PDO 與 PGI 合計約占希臘產量多少？",
            options: ["A. 約三成","B. 約九成","C. 約一成以下","D. 完全相同於歐盟平均"],
            correct: 0,
            explanation: "遠低於其他歐盟生產國的八成以上。"
          },
          {
            type: 'single',
            question: "2023 年希臘葡萄酒出口的最大區塊？",
            options: ["A. 歐盟（約 86.6%）","B. 亞洲","C. 北美","D. 南美"],
            correct: 0,
            explanation: "前五大市場為德國、塞浦路斯、法國、荷蘭、比利時。"
          },
          {
            type: 'single',
            question: "Santorini 近年的 Assyrtiko 產量變化？",
            options: ["A. 由 2022 年約 2,500 公噸降到 2025 年約 500 公噸","B. 倍增","C. 完全不變","D. 降為零"],
            correct: 0,
            explanation: "原因是 2023–2025 年的高溫與乾旱。"
          },
          {
            type: 'single',
            question: "最安全的數字引用做法？",
            options: ["A. 採官方數字並標註年份與來源","B. 只用記憶","C. 都不標年份","D. 取最大值"],
            correct: 0,
            explanation: "例如 PDO 數量：2018 年教材 28，現行 33。"
          },
          {
            type: 'single',
            question: "依來源，D3 理論日的兩份試卷長度是？",
            options: ["A. 2 小時與 80 分鐘","B. 30 分鐘與 30 分鐘","C. 4 小時與 4 小時","D. 沒有理論卷"],
            correct: 0,
            explanation: "考試形式請以 WSET 官方最新資料為準。"
          }
        ]
      }
    }
  }
]
