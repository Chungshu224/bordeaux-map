/**
 * SM-L2-3 蘭姆、龍舌蘭與梅斯卡爾
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "蘭姆、龍舌蘭與梅斯卡爾",
    subtitle: "甘蔗與龍舌蘭：兩種熱帶原料，兩種風土",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "蘭姆",
    highlights: [
      { id: 1, icon: "🍬", title: "原料", content: "多數以糖蜜（製糖副產品）釀造；Rhum agricole 則用新鮮甘蔗汁，帶青草與植物香。Martinique 的 rhum agricole 自 1996 年起擁有 AOC" },
      { id: 2, icon: "🌍", title: "風格與殖民傳統", content: "常見以殖民傳統粗分：西班牙傳統偏輕盈（連續式），英國傳統偏濃郁（壺式，如 Jamaica 的高酯類風格），法國傳統則是甘蔗汁的 agricole" },
      { id: 3, icon: "📜", title: "法規的差異", content: "蘭姆沒有全球統一的法規，年數、添加糖與調色的規定因國家而異；侍酒師推薦時要說明產地與做法，而不是只看年數" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">蘭姆的第一個問題永遠是：糖蜜還是甘蔗汁？壺式還是連續式？</p></div>"
  },
  {
    title: "龍舌蘭與梅斯卡爾",
    highlights: [
      { id: 1, icon: "🌵", title: "Tequila 的原料與分類", content: "只能用藍色龍舌蘭（Blue Weber agave），產於 Jalisco 州及其他四州的部分地區；100% agave 全用龍舌蘭糖，mixto 只需至少 51%" },
      { id: 2, icon: "⏳", title: "熟成等級", content: "Blanco（未熟成或極短）、Reposado（木桶 2 個月以上、未滿 1 年）、Añejo（容量不超過 600 公升的木桶 1 年以上）、Extra Añejo（3 年以上）" },
      { id: 3, icon: "🔥", title: "梅斯卡爾", content: "可用多種龍舌蘭（Espadín 最常見），以 Oaxaca 為主要產地；傳統上把龍舌蘭心放在地坑中以木柴與石頭烘烤，帶來明顯的煙燻味" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Tequila 與 Mezcal 的差別：品種限制、產地，以及「地坑烘烤」帶來的煙燻。</p></div>"
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
            question: "Rhum agricole 的原料是？",
            options: ["A. 大麥","B. 新鮮甘蔗汁","C. 糖蜜","D. 龍舌蘭"],
            correct: 1,
            explanation: "Martinique 自 1996 年起有 AOC。"
          },
          {
            type: 'single',
            question: "Tequila 只能使用哪種龍舌蘭？",
            options: ["A. 任何龍舌蘭","B. 甘蔗","C. Blue Weber agave","D. Espadín"],
            correct: 2,
            explanation: "Espadín 是梅斯卡爾最常見的品種。"
          },
          {
            type: 'single',
            question: "Tequila Añejo 的熟成要求是？",
            options: ["A. 2 個月以上","B. 3 年以上","C. 不需熟成","D. 600 公升以下木桶 1 年以上"],
            correct: 3,
            explanation: "3 年以上為 Extra Añejo。"
          },
          {
            type: 'single',
            question: "梅斯卡爾明顯煙燻味的來源是？",
            options: ["A. 龍舌蘭心在地坑中烘烤","B. 泥煤烘乾麥芽","C. 新炭化橡木桶","D. 添加煙燻香料"],
            correct: 0,
            explanation: "泥煤是 Islay 威士忌的煙燻來源。"
          }
        ]
      }
    }
  }
]
