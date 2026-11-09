/**
 * UY-L2-2 VCP 與酒標
 * 內容取材：見 URUGUAY_COURSE_FRAMEWORK.md 的查證表；二手資料在課文中標示，未查實的項目不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "VCP 與酒標",
    subtitle: "1993 年第 283/993 號命令",
    icon: "☀️",
    background: "linear-gradient(135deg, #1F5FA8 0%, #13294B 100%)"
  },
  {
    title: "兩個類別",
    highlights: [
      { id: 1, icon: "🏅", title: "VCP", content: "1993 年 6 月 16 日第 283/993 號命令：Vino de Calidad Preferente 必須用公認品質良好、經 INAVI（當時稱 INV）接受的 Vitis vinifera 品種釀造，品種清單由 INAVI 訂定" },
      { id: 2, icon: "🍶", title: "Vino Común", content: "不符合這些要求、也不屬於 VCP 的葡萄酒要標示「Vino Común」，字高與 VCP 字樣相同" },
      { id: 3, icon: "🍾", title: "只能裝玻璃瓶", content: "VCP 只能以玻璃瓶上市，容量最大 750 毫升；INAVI 可訂定較小的容量" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">VCP 是烏拉圭酒標上最常見的品質用語。</p></div>"
  },
  {
    title: "VCP 的分析標準",
    highlights: [
      { id: 1, icon: "🍷", title: "酒精", content: "最低 10.5%（體積比）" },
      { id: 2, icon: "🧪", title: "揮發酸", content: "最高 0.80 g/L（以硫酸計）；酒精超過 12% 時，每多 1 度可多 0.04 g/L" },
      { id: 3, icon: "🧴", title: "二氧化硫", content: "糖分低於 4 g/L 的酒最高 200 mg/L；高於 4 g/L 的酒最高 300 mg/L。另須通過穩定性測試，不得有感官缺陷" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">第 4 條列出四項要求，第 5 條允許經釀酒諮詢委員會（Comisión Enológica Asesora）建議後例外放行。</p></div>"
  },
  {
    title: "酒標上的規則",
    highlights: [
      { id: 1, icon: "🔤", title: "必要標示", content: "原產國、釀造或裝瓶者、INAVI 登記號碼、酒的類型、酒精度，以及「Vino de Calidad Preferente (VCP)」字樣，750 毫升瓶上至少 6 毫米高" },
      { id: 2, icon: "🍇", title: "品種 85%", content: "標示品種時該品種至少 85%；可標兩個品種，但兩者合計須為 100%。這條的文字由 1997 年第 325/997 號命令修訂" },
      { id: 3, icon: "📅", title: "年份 85%", content: "標示年份時，全部或至少 85% 的酒須來自該年。酒標須先送 INAVI 核准登記，誤導的地名不予核准" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">品種、年份與地理標示是選擇性標示，但一旦標示就要符合規則。</p></div>"
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
            question: "VCP 的最低酒精度是？",
            options: ["A. 9%","B. 10.5%","C. 11.5%","D. 12%"],
            correct: 1,
            explanation: "第 283/993 號命令第 4 條。"
          },
          {
            type: 'single',
            question: "酒標標示兩個品種時，規定是？",
            options: ["A. 兩者合計須為 100%","B. 各至少 50%","C. 第一個品種至少 85%","D. 不得標示兩個品種"],
            correct: 0,
            explanation: "單一品種則是至少 85%。"
          },
          {
            type: 'single',
            question: "VCP 的最大容量是？",
            options: ["A. 1 公升","B. 1.5 公升","C. 5 公升","D. 750 毫升"],
            correct: 3,
            explanation: "而且只能用玻璃瓶。"
          }
        ]
      }
    }
  }
]
