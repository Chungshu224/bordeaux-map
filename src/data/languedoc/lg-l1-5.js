/**
 * LG-L1-5 Level 1 綜合評量
 * 事實來源：Wine With Seth（Languedoc-Roussillon、Languedoc AOC、Carignan 頁，2026 年查閱）、Wikipedia（Languedoc-Roussillon wine）。數字一律標註來源；來源有出入者（葡萄園面積 700,000 英畝與 230,000 公頃不一致、「第一個法定產區」是 Fitou 或 Blanquette de Limoux、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🕰️", title: "歷史", content: "Greeks 西元前 5 世紀、Canal du Midi 1681、根瘤蚜 1860 年代、1962 年阿爾及利亞獨立、1990 年代拔樹、AOC Languedoc 2007" },
      { id: 2, icon: "🌬️", title: "氣候與風", content: "日照逾 2,500 小時；Tramontane 乾燥西北風、Marin 潮濕東南風；乾旱為主要威脅" },
      { id: 3, icon: "🏷️", title: "制度與品種", content: "Carignan 與 Cinsaut 上限 40%、Syrah+Mourvèdre 至少 20%；Picpoul 100%；Blanquette ≥90% Mauzac；VDN 加 5–10% 烈酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字以來源標註的年份與規格為準，面積與層級有爭議的項目不考。</p></div>"
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
            question: "Canal du Midi 通航於哪一年？",
            options: ["A. 1531","B. 1681","C. 1868","D. 1985"],
            correct: 1,
            explanation: "1681 年。"
          },
          {
            type: 'single',
            question: "1990 年代歐盟拔樹計畫的結果是？",
            options: ["A. 法國 Carignan 面積約減半","B. Carignan 面積翻倍","C. 所有紅葡萄遭禁","D. 無任何影響"],
            correct: 0,
            explanation: "約減半。"
          },
          {
            type: 'single',
            question: "Languedoc 更名自 Coteaux du Languedoc 的法令是哪一年？",
            options: ["A. 1948","B. 1985","C. 2007","D. 2016"],
            correct: 2,
            explanation: "2007 年 4 月 30 日。"
          },
          {
            type: 'single',
            question: "Tramontane 是什麼風？",
            options: ["A. 乾燥的西北風","B. 潮濕的東南風","C. 冬季暴風雪","D. 沙漠熱風"],
            correct: 0,
            explanation: "乾燥西北風。"
          },
          {
            type: 'single',
            question: "Languedoc 與 Roussillon 的產量比例大約是？",
            options: ["A. 50 : 50","B. 90 : 10","C. 10 : 90","D. 70 : 30"],
            correct: 1,
            explanation: "約 90 : 10。"
          },
          {
            type: 'single',
            question: "Carignan 名稱來自哪裡？",
            options: ["A. Cariñena","B. Carcassonne","C. Carignan (Ardennes)","D. Cantabria"],
            correct: 0,
            explanation: "Cariñena（Zaragoza）。"
          },
          {
            type: 'single',
            question: "放任不管的 Carignan 產量可達？",
            options: ["A. 50 hL/ha","B. 100 hL/ha","C. 200 hL/ha","D. 400 hL/ha"],
            correct: 2,
            explanation: "200 hL/ha。"
          },
          {
            type: 'single',
            question: "Pays d'Oc IGP 允許幾個品種？",
            options: ["A. 12","B. 28","C. 58","D. 108"],
            correct: 2,
            explanation: "58 個。"
          },
          {
            type: 'single',
            question: "Languedoc AOC 紅酒中 Cinsaut 的上限是？",
            options: ["A. 10%","B. 20%","C. 40%","D. 70%"],
            correct: 2,
            explanation: "40%。"
          },
          {
            type: 'single',
            question: "Picpoul de Pinet 使用？",
            options: ["A. 100% Piquepoul Blanc 白酒","B. Syrah 為主的紅酒","C. Mauzac 氣泡酒","D. Muscat 甜酒"],
            correct: 0,
            explanation: "純白酒、單一品種。"
          },
          {
            type: 'single',
            question: "Blanquette de Limoux 至少含多少 Mauzac？",
            options: ["A. 30%","B. 51%","C. 75%","D. 90%"],
            correct: 3,
            explanation: "90%。"
          },
          {
            type: 'single',
            question: "Roussillon 約占法國 VDN 的多少？",
            options: ["A. 10%","B. 30%","C. 50%","D. 80%"],
            correct: 3,
            explanation: "約八成。"
          }
        ]
      }
    }
  }
]
