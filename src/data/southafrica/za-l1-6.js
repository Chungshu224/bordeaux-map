/**
 * ZA-L1-6 Level 1 綜合評量
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "歷史、氣候、品種與標籤",
    icon: "✅",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📜", title: "歷史", content: "1652 殖民、1659 第一瓶酒、1688 Huguenot、1866 根瘤芽蟲、1918 KWV" },
      { id: 2, icon: "🌊", title: "氣候", content: "地中海氣候、冬雨、Benguela 寒流與 Cape Doctor（9 至 3 月東南風）" },
      { id: 3, icon: "🍇", title: "品種", content: "Chenin Blanc 最多；Pinotage＝Pinot Noir × Cinsaut" },
      { id: 4, icon: "🏷️", title: "標籤", content: "產地 100、品種 85、年份 85；Cap Classique 至少 9 個月" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">品種面積與出口數字每年更新，因此測驗只考規則與觀念，不考當年數字。</p></div>"
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
            question: "以開普葡萄釀出第一批葡萄酒是哪一年？",
            options: ["A. 1652","B. 1659","C. 1866","D. 1918"],
            correct: 1,
            explanation: "1659 年。"
          },
          {
            type: 'single',
            question: "帶來葡萄栽培與釀酒經驗的 1688 年移民是？",
            options: ["A. Huguenot","B. 英國人","C. 義大利人","D. 德國人"],
            correct: 0,
            explanation: "法國 Huguenot 難民。"
          },
          {
            type: 'single',
            question: "降低氣溫、減少病害的強勁夏季東南風叫什麼？",
            options: ["A. Mistral","B. Cape Doctor","C. Zonda","D. Föhn"],
            correct: 1,
            explanation: "Cape Doctor。"
          },
          {
            type: 'single',
            question: "南非種植最多的品種是？",
            options: ["A. Chenin Blanc","B. Pinotage","C. Syrah","D. Chardonnay"],
            correct: 0,
            explanation: "Chenin Blanc。"
          },
          {
            type: 'single',
            question: "Pinotage 的親本是？",
            options: ["A. Pinot Noir × Cinsaut","B. Pinot Noir × Gamay","C. Syrah × Grenache","D. Merlot × Cabernet Franc"],
            correct: 0,
            explanation: "Pinot Noir × Cinsaut。"
          },
          {
            type: 'single',
            question: "標示年份，至少須有多少葡萄來自該年？",
            options: ["A. 75%","B. 85%","C. 95%","D. 100%"],
            correct: 1,
            explanation: "年份 85%。"
          },
          {
            type: 'single',
            question: "Single Vineyard 的面積上限是？",
            options: ["A. 6 公頃","B. 12 公頃","C. 25 公頃","D. 沒有上限"],
            correct: 0,
            explanation: "須來自單一註冊地塊，不超過 6 公頃。"
          },
          {
            type: 'single',
            question: "「Reserve」在南非 WO 規章中的意義是？",
            options: ["A. 至少陳年 2 年","B. 只能用單一品種","C. 沒有法定意義","D. 必須用橡木桶"],
            correct: 2,
            explanation: "Reserve 未受規範。"
          },
          {
            type: 'single',
            question: "Cap Classique 的酒渣陳年至少多久？",
            options: ["A. 3 個月","B. 9 個月","C. 24 個月","D. 36 個月"],
            correct: 1,
            explanation: "至少 9 個月。"
          }
        ]
      }
    }
  }
]
