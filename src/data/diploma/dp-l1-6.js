/**
 * DP-L1-6 Level 1 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "把每個決策接到一個風格結果",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🌱", title: "葡萄藤與氣候", content: "約 10°C 發芽；開花期天氣決定產量；暖氣候蘋果酸下降快；海拔約每 100 公尺降 0.6°C；寒流使沿海降溫" },
      { id: 2, icon: "🌿", title: "栽培與病害", content: "灌木式耐旱、籬架便於機械；根瘤蚜靠嫁接；白粉病用硫磺、露菌病用銅；捲葉病毒由粉介殼蟲傳播" },
      { id: 3, icon: "🍷", title: "釀造", content: "MLF 降酸並可能帶奶油香；粉紅酒四種做法；二氧化碳浸皮果香柔和；冷穩定防酒石；TCA 與天然軟木塞相關" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">答題時用「條件 → 機制 → 結果」三段寫法，最容易拿分。</p></div>"
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
            question: "開花期天氣不佳最直接影響的是？",
            options: ["A. 封瓶","B. 產量","C. 酒精度","D. 橡木味"],
            correct: 1,
            explanation: "落花與大小果會降低產量。"
          },
          {
            type: 'single',
            question: "下列哪一項會使沿海產區降溫？",
            options: ["A. 雨影","B. 朝向赤道的坡面","C. Humboldt 寒流","D. Gulf Stream"],
            correct: 2,
            explanation: "寒流與海霧使沿海降溫。"
          },
          {
            type: 'single',
            question: "貧瘠土壤對葡萄藤最主要的影響是？",
            options: ["A. 提高產量","B. 增加病害","C. 延後發芽","D. 控制樹勢、提高濃縮度"],
            correct: 3,
            explanation: "肥沃土壤易使樹勢過旺。"
          },
          {
            type: 'single',
            question: "白粉病通常以什麼防治？",
            options: ["A. 硫磺","B. 銅劑","C. 灌溉","D. 嫁接"],
            correct: 0,
            explanation: "露菌病才用銅劑。"
          },
          {
            type: 'single',
            question: "有機栽培允許使用下列哪一項？",
            options: ["A. 合成化肥","B. 銅與硫","C. 合成殺蟲劑","D. 化學除草劑"],
            correct: 1,
            explanation: "有機禁用合成農藥與化肥。"
          },
          {
            type: 'single',
            question: "想讓 Chardonnay 更圓潤、帶奶油香，可以怎麼做？",
            options: ["A. 二氧化碳浸皮","B. 提早採收","C. 做 MLF 並攪拌酒渣","D. 低溫不鏽鋼並阻止 MLF"],
            correct: 2,
            explanation: "MLF 與 bâtonnage 增加圓潤與奶油感。"
          },
          {
            type: 'single',
            question: "放血法（saignée）的特色是？",
            options: ["A. 紅白調配","B. 完全不接觸果皮","C. 只能用於香檳","D. 粉紅酒是紅酒的副產品，同時濃縮紅酒"],
            correct: 3,
            explanation: "放汁後剩下的紅酒果皮比例更高。"
          },
          {
            type: 'single',
            question: "螺旋蓋最常被提到的風險是？",
            options: ["A. 還原味","B. TCA 污染","C. 過度氧化","D. 酒石結晶"],
            correct: 0,
            explanation: "密封性高，少量硫化物較難散去。"
          }
        ]
      }
    }
  }
]
