/**
 * UY-L1-3 品種與風格
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "品種與風格",
    subtitle: "Tannat 領頭，蜜思嘉與 Albariño 隨後",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "Tannat：國家的招牌",
    highlights: [
      { id: 1, icon: "🥇", title: "面積第一", content: "INAVI 2025 年登記：Tannat 約 1,536 公頃，占全國 26.5%，是種植最多的品種" },
      { id: 2, icon: "🇫🇷", title: "來自法國西南", content: "INAVI 說 Tannat 來自法國西南部，如今烏拉圭是 Tannat 的主要產國，產量已超過原產地" },
      { id: 3, icon: "🍷", title: "風格", content: "顏色深、單寧強是 Tannat 的本性。烏拉圭有年輕易飲的、橡木桶陳年的，也常和 Merlot 等品種混調" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">烏拉圭最重要的一個字就是 Tannat。</p></div>"
  },
  {
    title: "面積排名",
    highlights: [
      { id: 1, icon: "🌸", title: "第二名：漢堡蜜思嘉", content: "釀酒用的 Moscatel de Hamburgo（漢堡蜜思嘉）約占 17.2%，排名第二；登記上另有食用葡萄用途的同名項目" },
      { id: 2, icon: "⚪", title: "Ugni Blanc 與 Merlot", content: "兩者各約占一成面積，緊跟在後" },
      { id: 3, icon: "🍇", title: "其他紅葡萄", content: "Cabernet Sauvignon 約 5.6%、Marselan 約 3.8%、Cabernet Franc 約 3.5%，還有 Arinarnoa 等較少見的法國育種品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">前四名裡，Tannat 之外是蜜思嘉、Ugni Blanc 與 Merlot。</p></div>"
  },
  {
    title: "白葡萄與新方向",
    highlights: [
      { id: 1, icon: "🐚", title: "Albariño", content: "約占 2.4%。INAVI 說烏拉圭給它很好的條件，並逐漸受到肯定；Udelar 的研究也專門探討它在大西洋東岸的表現" },
      { id: 2, icon: "🍋", title: "Sauvignon Blanc 與 Chardonnay", content: "Sauvignon 約 2.5%、Chardonnay 約 2.0%。INAVI 指出都會區特別適合 Chardonnay、Sauvignon Blanc 與 Viognier" },
      { id: 3, icon: "🧬", title: "美洲種仍在", content: "登記上仍有 Isabella（當地稱 Frutilla）與 Concord 等美洲種葡萄，但面積都很小" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">紅酒是主角，但大西洋沿岸的白酒正在建立名聲。</p></div>"
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
            question: "2025 年 INAVI 登記中，面積最大的品種是？",
            options: ["A. Merlot","B. Albariño","C. Tannat","D. Cabernet Sauvignon"],
            correct: 2,
            explanation: "約 1,536 公頃，占 26.5%。"
          },
          {
            type: 'single',
            question: "面積排名第二的是？",
            options: ["A. Chardonnay","B. 漢堡蜜思嘉（釀酒用）","C. Pinot Noir","D. Syrah"],
            correct: 1,
            explanation: "約 17.2%。"
          },
          {
            type: 'single',
            question: "依 INAVI，Tannat 原產於？",
            options: ["A. 法國西南部","B. 西班牙加利西亞","C. 義大利北部","D. 阿根廷"],
            correct: 0,
            explanation: "Albariño 才是來自加利西亞。"
          }
        ]
      }
    }
  }
]
