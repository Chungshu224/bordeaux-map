/**
 * DP-L3-1 全球氣泡酒導讀
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "全球氣泡酒導讀",
    subtitle: "先抓住兩個問題，再進入專論",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "問題一：為什麼要高酸的基酒？",
    highlights: [
      { id: 1, icon: "❄️", title: "涼爽氣候的邏輯", content: "氣泡酒需要高酸、低酒精、香氣中性的基酒：二次發酵還會再增加酒精，酸度則撐起氣泡的清爽感。所以優質產區多在涼爽或邊緣氣候" },
      { id: 2, icon: "🌴", title: "溫暖產區的做法", content: "溫暖地區靠提早採收、高海拔或涼爽的海岸地塊保酸，這正是暖化下各產區共同的課題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">氣泡酒的品質起點，是一款「單獨喝並不討喜」的高酸基酒。</p></div>"
  },
  {
    title: "問題二：二次發酵在哪裡發生？",
    highlights: [
      { id: 1, icon: "🍾", title: "傳統法", content: "在同一支瓶中二次發酵、酒渣陳年、轉瓶、除渣；成本最高，帶來細緻氣泡與自溶風味" },
      { id: 2, icon: "🔁", title: "轉移法", content: "在瓶中二次發酵與陳年，但倒入加壓槽過濾再裝瓶，省去轉瓶" },
      { id: 3, icon: "🛢️", title: "槽式法", content: "在密閉大槽中二次發酵後過濾裝瓶；快速、便宜，保留一級果香" },
      { id: 4, icon: "🌾", title: "祖傳法", content: "一次發酵未完成就裝瓶，在瓶中完成，只有一次發酵" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">製法不是優劣之分，而是風格目標與成本的選擇。</p></div>"
  },
  {
    title: "接下來怎麼讀",
    highlights: [
      { id: 1, icon: "🧪", title: "專論 Level 1：原理與釀法", content: "氣泡的科學、基酒、傳統法與其他釀法。想補製法細節，從這裡開始（課程內容為繁體中文）" },
      { id: 2, icon: "🌍", title: "專論 Level 2：全球產區", content: "香檳、Crémant、Cava、Prosecco、Franciacorta、德奧英與新世界，每區都用同一組問題比較" },
      { id: 3, icon: "🎯", title: "專論 Level 3：D4 精修與應考", content: "風格與釀造深度、法規與產業、D4 品飲與論述答題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\"><a href=\"/sparkling\" class=\"resource-link\">前往全球氣泡酒專論 →</a></p></div>"
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
            question: "為什麼優質氣泡酒產區多在涼爽氣候？",
            options: ["A. 需要高酸、低酒精的基酒","B. 涼爽產區稅比較低","C. 涼爽才能做 MLF","D. 涼爽產區不需要酵母"],
            correct: 0,
            explanation: "二次發酵還會再增加酒精。"
          },
          {
            type: 'single',
            question: "下列哪種製法成本最高、帶來自溶風味？",
            options: ["A. 加入二氧化碳","B. 傳統法","C. 槽式法","D. 祖傳法"],
            correct: 1,
            explanation: "酒渣陳年綁住時間與資金。"
          },
          {
            type: 'single',
            question: "槽式法最主要的風格優勢是？",
            options: ["A. 酒精度最高","B. 必須長期瓶陳","C. 保留新鮮的一級果香","D. 帶來最強的自溶風味"],
            correct: 2,
            explanation: "快速、便宜，也適合年輕飲用。"
          }
        ]
      }
    }
  }
]
