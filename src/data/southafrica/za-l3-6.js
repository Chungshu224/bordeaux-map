/**
 * ZA-L3-6 Diploma 品飲與論述
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Diploma 品飲與論述",
    subtitle: "盲品線索與 MW 論述框架",
    icon: "📝",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "盲品線索（假設性的推理）",
    highlights: [
      { id: 1, icon: "🍏", title: "Chenin Blanc", content: "高酸、蜜蘋果與蠟質感；老藤旱作者濃縮、礦物感；有橡木則帶更多質地。與羅亞爾對照：南非通常果味更熟、酒精稍高" },
      { id: 2, icon: "🍇", title: "Pinotage 與 Cape Blend", content: "深色、紅黑色果實、常有煙燻與辛香；Cape Blend 因含 Pinotage，風格比純波爾多混釀更具個性" },
      { id: 3, icon: "🌿", title: "Sauvignon Blanc", content: "Durbanville 偏葡萄柚與醋栗（介於 Sancerre 與 Marlborough 之間）；Elim 偏燧石、煙燻與鹹味礦物感" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些是推理線索而非保證答案：先排除，再用氣候、品種與酒精度收斂。</p></div>"
  },
  {
    title: "MW 論述框架",
    highlights: [
      { id: 1, icon: "🧱", title: "五段結構", content: "題意拆解 → 氣候與地理 → 栽培與品種 → 釀造與風格 → 市場與結論；每段至少一個具體產區或制度作為證據" },
      { id: 2, icon: "❓", title: "範例題", content: "「討論 Benguela 寒流與海拔如何塑造開普的優質葡萄酒。」可用 Hemel-en-Aarde 三個 Ward、Elgin、Elim 與 Swartland 作對照" },
      { id: 3, icon: "⚖️", title: "避免的錯誤", content: "把預測當成結果（如 2018 年減產）、把業界慣用語當法定標準（Reserve），或引用沒有年份的面積數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">用數字時一定標註年份與來源；不確定的數字寧可用「約」與範圍。</p></div>"
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
            question: "下列何者是「不應該」在論述中做的事？",
            options: ["A. 標註數字的年份與來源","B. 把預測當成最終結果","C. 用具體產區作證據","D. 對照兩個產區"],
            correct: 1,
            explanation: "預測不是結果。"
          },
          {
            type: 'single',
            question: "盲品時，酸度高、蜜蘋果與蠟質感的白酒最可能是？",
            options: ["A. Chenin Blanc","B. Muscat","C. Pinotage","D. Colombard"],
            correct: 0,
            explanation: "Chenin Blanc；仍須用氣候與酒精度收斂。"
          },
          {
            type: 'single',
            question: "「Reserve」可以怎樣用於論述？",
            options: ["A. 視為法定品質標準","B. 視為未受規範的業界用語","C. 視為陳年年限","D. 視為單一葡萄園"],
            correct: 1,
            explanation: "Reserve 沒有法定意義。"
          }
        ]
      }
    }
  }
]
