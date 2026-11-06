/**
 * SM-L1-5 Level 1 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "服務的語言：確認、溫度、時間、理由",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🍾", title: "服務流程", content: "展示並確認酒標 → 割封、安靜開瓶 → 主人試酒 → 依序倒酒、主人最後；氣泡酒轉瓶身、45 度、拇指壓塞；有缺陷就有禮地更換" },
      { id: 2, icon: "🌡️", title: "溫度與醒酒", content: "氣泡與甜酒約 6–10°C、白酒約 7–13°C、紅酒約 13–18°C；醒酒為了去沉澱或接觸空氣；酒窖恆溫約 12–14°C" },
      { id: 3, icon: "🍽️", title: "酒單與搭配", content: "酒單配合菜單、資訊即時更新；高價酒倍數較低；杯賣注意氧化；甜、鮮、辣、苦讓酒變硬，鹹與酸讓酒變柔；酸切油膩、單寧配蛋白質" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">服務考試的關鍵：每個動作都有理由，每個推薦都說得出原則。</p></div>"
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
            question: "主人試酒的主要目的是？",
            options: ["A. 確認沒有缺陷","B. 決定要不要付錢","C. 測量溫度","D. 確認酒精度"],
            correct: 0,
            explanation: "例如軟木塞污染。"
          },
          {
            type: 'single',
            question: "氣泡酒應該冰鎮到大約幾度？",
            options: ["A. 0°C 以下","B. 6–10°C","C. 15–18°C","D. 20°C 以上"],
            correct: 1,
            explanation: "低溫讓氣泡更細緻。"
          },
          {
            type: 'single',
            question: "Vintage Port 開瓶前應該怎麼處理？",
            options: ["A. 冷凍","B. 加冰塊","C. 直立靜置，倒酒時醒酒去除沉澱","D. 用力搖晃"],
            correct: 2,
            explanation: "Vintage Port 在瓶中陳年，常有沉澱。"
          },
          {
            type: 'single',
            question: "鹹的食物會讓酒顯得？",
            options: ["A. 更苦澀","B. 更酸","C. 更甜","D. 更柔和、更有果味"],
            correct: 3,
            explanation: "鹹與酸讓酒變柔。"
          },
          {
            type: 'single',
            question: "鮮味（umami）重的料理對酒的影響是？",
            options: ["A. 使酒顯得更苦澀、更酸","B. 使酒更甜","C. 使酒精降低","D. 沒有影響"],
            correct: 0,
            explanation: "加一點鹽或酸可以緩和。"
          },
          {
            type: 'single',
            question: "杯賣定價常見的經驗法則是？",
            options: ["A. 與整瓶同價","B. 一杯的售價大致回收整瓶進價","C. 一杯賣成本價","D. 一杯免費"],
            correct: 1,
            explanation: "以抵銷開瓶後氧化的風險。"
          },
          {
            type: 'single',
            question: "Barolo 配牛肉合適的原因是？",
            options: ["A. Barolo 酒精很低","B. Barolo 有氣泡","C. 單寧與蛋白質、油脂結合","D. Barolo 很甜"],
            correct: 2,
            explanation: "單寧因此顯得更柔。"
          },
          {
            type: 'single',
            question: "推薦酒款前，侍酒師最應先了解什麼？",
            options: ["A. 客人的職業","B. 酒莊老闆的名字","C. 酒的重量","D. 預算、喜好與菜色"],
            correct: 3,
            explanation: "再提出兩三個不同價位的選項。"
          }
        ]
      }
    }
  }
]
