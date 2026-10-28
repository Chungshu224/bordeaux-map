/**
 * CL-L1-5 Level 1 綜合評量
 * 事實來源：Wine With Seth（Chile、Chilean DO system）、Wikipedia（Carménère）、SAG（Catastro Vitícola Nacional 2023 Informe ejecutivo）、Wine With Seth 引用的 Decreto 464（1995）。數字一律標註年份；來源有出入者（Costa／Entre Cordilleras／Andes 的年份、葡萄根瘤蚜年份、Carmenère 面積、DO 層級名稱）課內標明、不進測驗，並須對照 SAG 法規原文。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🕰️", title: "歷史", content: "1551 年 País、1851 年 Ochagavía、1994 年確認 Carmenère（1998 年官方承認）" },
      { id: 2, icon: "🌊", title: "地理與品種", content: "Atacama 年降雨不到 10 公釐；Humboldt 寒流、海岸山脈、安地斯融雪；2023 年紅葡萄 72.8%；Cabernet Sauvignon 最大宗" },
      { id: 3, icon: "🏷️", title: "制度", content: "Decreto 464（1995）、SAG 管理、75% 規則；Costa／Entre Cordilleras／Andes 為橫向分區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨年度更新，因此測驗只考規則與觀念，以及已標註年份的數字。</p></div>"
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
            question: "誰在 1994 年確認 Carmenère？",
            options: ["A. Jean-Michel Boursiquot","B. Silvestre Ochagavía","C. Francisco de Aguirre","D. Miguel Torres"],
            correct: 0,
            explanation: "Boursiquot。"
          },
          {
            type: 'single',
            question: "智利農業部正式承認 Carmenère 的年份是？",
            options: ["A. 1851","B. 1994","C. 1998","D. 2011"],
            correct: 2,
            explanation: "1998 年。"
          },
          {
            type: 'single',
            question: "Carmenère 在智利曾被誤認為？",
            options: ["A. Merlot","B. Malbec","C. Syrah","D. Grenache"],
            correct: 0,
            explanation: "Merlot。"
          },
          {
            type: 'single',
            question: "Atacama 沙漠年降雨約低於？",
            options: ["A. 10 mm","B. 100 mm","C. 500 mm","D. 1,000 mm"],
            correct: 0,
            explanation: "10 公釐。"
          },
          {
            type: 'single',
            question: "沿海地帶晨霧與海風的主因是？",
            options: ["A. Humboldt 寒流","B. Zonda 風","C. 安地斯積雪","D. 火山"],
            correct: 0,
            explanation: "Humboldt 寒流。"
          },
          {
            type: 'single',
            question: "智利葡萄園主要水源是？",
            options: ["A. 安地斯融雪","B. 夏季雨","C. 海水","D. 冰河湖"],
            correct: 0,
            explanation: "融雪。"
          },
          {
            type: 'single',
            question: "2023 年紅葡萄約占智利釀酒葡萄面積的？",
            options: ["A. 27.2%","B. 50%","C. 72.8%","D. 95%"],
            correct: 2,
            explanation: "72.8%。"
          },
          {
            type: 'single',
            question: "智利面積最大的紅葡萄是？",
            options: ["A. Cabernet Sauvignon","B. Merlot","C. Syrah","D. Carmenère"],
            correct: 0,
            explanation: "Cabernet Sauvignon。"
          },
          {
            type: 'single',
            question: "智利最大宗的白葡萄是？",
            options: ["A. Sauvignon Blanc","B. Chardonnay","C. Torrontés","D. Riesling"],
            correct: 0,
            explanation: "Sauvignon Blanc。"
          },
          {
            type: 'single',
            question: "Decreto 464 公布於哪一年？",
            options: ["A. 1851","B. 1995","C. 2011","D. 2023"],
            correct: 1,
            explanation: "1995 年。"
          },
          {
            type: 'single',
            question: "智利標示品種、年份或產地的一般最低比例是？",
            options: ["A. 50%","B. 75%","C. 90%","D. 100%"],
            correct: 1,
            explanation: "75%（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "「Costa」指的是？",
            options: ["A. 受太平洋影響的沿海地點","B. 中央谷地","C. 安地斯山麓","D. 北部沙漠"],
            correct: 0,
            explanation: "沿海地點。"
          }
        ]
      }
    }
  }
]
