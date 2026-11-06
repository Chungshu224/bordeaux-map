/**
 * DP-L4-5 Level 4 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 4 綜合評量",
    subtitle: "加烈時機 × 熟成方式 = 風格",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Level 4 重點回顧",
    highlights: [
      { id: 1, icon: "⚗️", title: "原理", content: "發酵中途加烈 → 甜；發酵後加烈 → 乾；還原式保果香、氧化式出堅果、flor 帶杏仁；solera 不標年份；estufagem 約 45–50°C 至少三個月" },
      { id: 2, icon: "🇪🇸", title: "Sherry", content: "Albariza、Palomino、PX；Fino 15–15.5%、Oloroso 17% 以上；Manzanilla 只在 Sanlúcar；Amontillado 先 flor 後氧化；VOS 20、VORS 30" },
      { id: 3, icon: "🇵🇹", title: "Port、Madeira 與其他", content: "約 77% aguardente；LBV 4–6 年、Vintage 約 2 年裝瓶、Colheita 至少 7 年；Madeira Sercial→Verdelho→Boal→Malvasia、Frasqueira 20 年；Rutherglen 四級；Marsala Vergine 5 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">D5 答題公式：加烈時機（甜度）→ 熟成方式（風格）→ 時間與分級（價格）。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 4 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "發酵完成後才加烈，通常得到什麼風格？",
            options: ["A. 極甜","B. 氣泡","C. 粉紅","D. 乾型基礎"],
            correct: 3,
            explanation: "多數 Sherry 是這樣做。"
          },
          {
            type: 'single',
            question: "Albariza 土壤的主要作用是？",
            options: ["A. 冬季吸水、夏季結殼保水","B. 提供大量鉀","C. 使葡萄提早發芽","D. 防止 flor 形成"],
            correct: 0,
            explanation: "讓葡萄藤撐過乾熱夏季。"
          },
          {
            type: 'single',
            question: "Palo Cortado 的特徵是？",
            options: ["A. 未加烈","B. Amontillado 般的香氣與 Oloroso 般的酒體","C. 極甜的 PX","D. 只在 flor 下熟成"],
            correct: 1,
            explanation: "介於兩者之間的稀有風格。"
          },
          {
            type: 'single',
            question: "Port 為何需要強力、快速的萃取？",
            options: ["A. 法規要求","B. 為了降低酒精","C. 發酵只進行兩三天就加烈","D. 品種果皮太薄"],
            correct: 2,
            explanation: "時間短，必須靠踩皮或自動淋汁取得顏色與單寧。"
          },
          {
            type: 'single',
            question: "Douro 三個次產區中最熱最乾的是？",
            options: ["A. Baixo Corgo","B. Cima Corgo","C. 三者相同","D. Douro Superior"],
            correct: 3,
            explanation: "Baixo Corgo 最涼濕。"
          },
          {
            type: 'single',
            question: "Madeira Frasqueira 至少在木桶熟成多久？",
            options: ["A. 20 年","B. 5 年","C. 3 個月","D. 2 年"],
            correct: 0,
            explanation: "Colheita 至少 5 年。"
          },
          {
            type: 'single',
            question: "Rutherglen Muscat 熟成的倉庫環境特色是？",
            options: ["A. 地下潮濕洞穴","B. 炎熱，加速氧化與濃縮","C. 冷藏","D. 完全無氧"],
            correct: 1,
            explanation: "原理與 Madeira 相近。"
          },
          {
            type: 'single',
            question: "Marsala 中允許加入 mosto cotto 的顏色類型是？",
            options: ["A. Rubino","B. Vergine","C. Ambra","D. Oro"],
            correct: 2,
            explanation: "Vergine 不得加入。"
          }
        ]
      }
    }
  }
]
