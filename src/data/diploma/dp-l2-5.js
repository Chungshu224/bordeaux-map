/**
 * DP-L2-5 Level 2 綜合評量
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "商業題的語言：成本、通路、品牌、趨勢",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "💰", title: "成本與價格", content: "陡坡、低產與長期陳年推高成本；固定稅與包裝讓低價酒裡的酒本身價值很低；價格是成本、競爭與感知價值的妥協" },
      { id: 2, icon: "🚚", title: "通路與政策", content: "零售、餐飲、專賣與三級制度；Granholm v. Heald（2005）；中國對澳洲酒關稅（2020–2024 年 3 月）；DTC 利潤最高；La Place 與期酒" },
      { id: 3, icon: "📈", title: "品牌與趨勢", content: "品牌與產區名稱是兩種信任；評分的副作用；2025 年消費為 1961 年以來最低；高端化；永續訴求需有認證" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">商業論述得分關鍵：每個數字都有年份，每個論點都有機制。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "陡坡手工葡萄園的成本為何較高？",
            options: ["A. 不需要修剪","B. 無法機械化、人工密集","C. 土地免費","D. 產量特別高"],
            correct: 1,
            explanation: "Mosel、Douro、Wachau 都是例子。"
          },
          {
            type: 'single',
            question: "哪一個通路通常利潤最高？",
            options: ["A. 超市促銷","B. 國營專賣招標","C. 直接面對消費者（DTC）","D. 散裝出口"],
            correct: 2,
            explanation: "省去中間層的加成。"
          },
          {
            type: 'single',
            question: "加拿大 Ontario 的酒類專賣機構是？",
            options: ["A. SAQ","B. Systembolaget","C. CIVC","D. LCBO"],
            correct: 3,
            explanation: "SAQ 屬於 Québec。"
          },
          {
            type: 'single',
            question: "香檳 NV 與澳洲大品牌維持風格一致的主要手段是？",
            options: ["A. 跨產區、跨年份調配與規模","B. 只用單一園","C. 每年改變風格","D. 不做任何調配"],
            correct: 0,
            explanation: "調配是品牌一致性的基礎。"
          },
          {
            type: 'single',
            question: "2012 年起南非的「Port」風格酒必須怎麼標示？",
            options: ["A. 必須標 Douro","B. 加上 Cape 前綴，如 Cape Vintage","C. 照樣標 Port","D. 只能標 Red Wine"],
            correct: 1,
            explanation: "保護原產地名稱就是保護品牌價值。"
          },
          {
            type: 'single',
            question: "包裝創新（盒中袋、鋁罐）在傳統市場最大的挑戰是？",
            options: ["A. 成本更高","B. 法規全面禁止","C. 可能被視為廉價","D. 碳排更高"],
            correct: 2,
            explanation: "接受度因市場而異。"
          },
          {
            type: 'single',
            question: "「量降值升」通常代表什麼？",
            options: ["A. 散裝比例上升","B. 需求暴增","C. 價格戰","D. 產品結構往高價移動"],
            correct: 3,
            explanation: "這正是高端化的特徵。"
          },
          {
            type: 'single',
            question: "沒有認證支撐的「永續」訴求，最大的風險是？",
            options: ["A. 被質疑為漂綠","B. 成本太低","C. 酒精度上升","D. 無法出口到歐盟"],
            correct: 0,
            explanation: "第三方認證是可信度的來源。"
          }
        ]
      }
    }
  }
]
