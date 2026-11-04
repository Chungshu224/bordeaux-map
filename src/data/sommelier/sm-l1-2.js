/**
 * SM-L1-2 適飲溫度、醒酒與杯具
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "適飲溫度、醒酒與杯具",
    subtitle: "同一瓶酒，溫度與時間能讓它判若兩酒",
    icon: "🍷",
    background: "linear-gradient(135deg, #6B2D3C 0%, #3E1520 100%)"
  },
  {
    title: "適飲溫度",
    highlights: [
      { id: 1, icon: "❄️", title: "冰涼（約 6–10°C）", content: "氣泡酒與甜白酒：低溫保持氣泡細緻、甜酒不膩口" },
      { id: 2, icon: "🧊", title: "冷藏（約 7–13°C）", content: "輕盈白酒與粉紅酒較冷（約 7–10°C），飽滿或經橡木的白酒稍高（約 10–13°C），太冷會掩蓋香氣與質地" },
      { id: 3, icon: "🍷", title: "紅酒（約 13–18°C）", content: "輕盈紅酒可稍微冰涼（約 13°C），中等到飽滿的紅酒約 15–18°C；「室溫」在溫暖的餐廳裡常常太高，會使酒精感突出" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">溫度太低掩蓋香氣，太高突顯酒精：適飲溫度是在兩者間找平衡。</p></div>"
  },
  {
    title: "醒酒與杯具",
    highlights: [
      { id: 1, icon: "🕯️", title: "醒酒目的一：去除沉澱", content: "老年份紅酒與 Vintage Port 常有沉澱；酒瓶先直立靜置，倒酒時在光源前觀察瓶頸，看到沉澱接近瓶口就停止" },
      { id: 2, icon: "💨", title: "醒酒目的二：接觸空氣", content: "年輕、結構強的紅酒（以及部分白酒）透過接觸空氣讓香氣打開、還原味散去；非常老的酒則要小心，過度醒酒可能使脆弱的香氣消失" },
      { id: 3, icon: "🥂", title: "杯具與儲存", content: "杯身足夠大、杯口略收的杯子讓香氣集中；杯子要乾淨、無清潔劑味。酒窖理想條件：恆溫約 12–14°C、適度濕度、避光、無震動，瓶子平放讓軟木塞保持濕潤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先判斷「為什麼要醒酒」，再決定要不要醒、醒多久。</p></div>"
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
            question: "中等到飽滿紅酒的適飲溫度大約是？",
            options: ["A. 6–8°C","B. 22–25°C","C. 0–2°C","D. 15–18°C"],
            correct: 3,
            explanation: "溫暖餐廳的室溫常常太高。"
          },
          {
            type: 'single',
            question: "為老年份紅酒醒酒的主要目的是？",
            options: ["A. 去除沉澱","B. 降低酒精","C. 增加甜度","D. 冰鎮"],
            correct: 0,
            explanation: "老酒過度接觸空氣反而可能失去香氣。"
          },
          {
            type: 'single',
            question: "為什麼年輕、結構強的紅酒適合醒酒？",
            options: ["A. 法規要求","B. 接觸空氣讓香氣打開、還原味散去","C. 為了去除沉澱","D. 為了加熱"],
            correct: 1,
            explanation: "年輕酒通常沒有沉澱問題。"
          },
          {
            type: 'single',
            question: "理想的酒窖溫度大約是？",
            options: ["A. 0°C 以下","B. 溫度不重要","C. 12–14°C 且恆定","D. 20–25°C"],
            correct: 2,
            explanation: "恆定比絕對數字更重要。"
          }
        ]
      }
    }
  }
]
