/**
 * SM-L3-4 Level 3 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "清酒看精米與酒精，啤酒看酵母與麥芽",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "🍶", title: "清酒", content: "麴把澱粉轉成糖；並行複式發酵、約 15–16%；生酛與山廢靠天然乳酸菌；本釀造 70、吟釀 60、大吟釀 50；純米不加酒精；生酒不殺菌" },
      { id: 2, icon: "🌡️", title: "清酒侍飲", content: "吟釀冰涼保香，純米與山廢可溫熱；SMV 正值偏辛口；鮮味與低酸適合海鮮與壽司" },
      { id: 3, icon: "🍺", title: "啤酒", content: "Ale 上層、較溫暖；Lager 下層、低溫；Pilsner 1842 Plzeň；Stout 烘焙大麥；Hefeweizen 香蕉丁香；Lambic 自然發酵；Lager 約 3–7°C" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">CMS 口試會跨類別提問：用「原料 → 製程 → 風格 → 侍飲」的順序回答。</p></div>"
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
            question: "為什麼清酒必須使用麴？",
            options: ["A. 為了增加顏色","B. 為了殺菌","C. 為了增加氣泡","D. 米本身沒有糖，麴的酵素把澱粉轉成糖"],
            correct: 3,
            explanation: "之後由酵母把糖轉成酒精。"
          },
          {
            type: 'single',
            question: "生酛與山廢的酒母靠什麼保護？",
            options: ["A. 天然乳酸菌","B. 添加乳酸","C. 二氧化硫","D. 高溫"],
            correct: 0,
            explanation: "速釀法則直接添加乳酸。"
          },
          {
            type: 'single',
            question: "吟釀的精米步合門檻是？",
            options: ["A. 80% 以下","B. 60% 以下","C. 50% 以下","D. 70% 以下"],
            correct: 1,
            explanation: "大吟釀 50%、本釀造 70%。"
          },
          {
            type: 'single',
            question: "古酒（koshu）常見的香氣是？",
            options: ["A. 香蕉與丁香","B. 松木與柑橘","C. 焦糖與堅果","D. 青蘋果與花"],
            correct: 2,
            explanation: "長期熟成帶來氧化風味。"
          },
          {
            type: 'single',
            question: "啤酒花在啤酒中的作用不包括？",
            options: ["A. 帶來苦味","B. 帶來香氣","C. 防腐","D. 提供可發酵的糖"],
            correct: 3,
            explanation: "可發酵的糖來自麥芽。"
          },
          {
            type: 'single',
            question: "Stout 的咖啡與巧克力香主要來自？",
            options: ["A. 烘焙大麥或深色麥芽","B. 啤酒花","C. 加入咖啡豆","D. 野生酵母"],
            correct: 0,
            explanation: "麥芽的烘焙程度決定顏色與風味。"
          },
          {
            type: 'single',
            question: "1516 年巴伐利亞純釀法允許的原料是？",
            options: ["A. 水與水果","B. 水、大麥與啤酒花","C. 水、小麥與糖","D. 任何穀物"],
            correct: 1,
            explanation: "酵母的作用當時尚未被理解。"
          },
          {
            type: 'single',
            question: "Lager 的建議侍飲溫度大約是？",
            options: ["A. 20°C 以上","B. 0°C 以下","C. 3–7°C","D. 15–18°C"],
            correct: 2,
            explanation: "風味強的 Ale 約 7–13°C。"
          }
        ]
      }
    }
  }
]
