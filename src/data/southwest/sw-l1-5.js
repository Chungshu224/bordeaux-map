/**
 * SW-L1-5 Level 1 綜合評量
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "📋",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "🕰️", title: "歷史", content: "Cahors AOC 1971、Madiran 1948、Gaillac 白 1938、1956 年霜害、Bordeaux police des vins、1453 年併入法國" },
      { id: 2, icon: "🌊", title: "氣候與土壤", content: "大西洋性氣候向東轉乾；Autan 為溫暖東風；Jurançon 年雨量約 1,200 公釐；Cahors 階地與 Causses" },
      { id: 3, icon: "🍇", title: "品種與制度", content: "Malbec ≥70%、Tannat 名稱由來、Gros Manseng 為 Petit Manseng 後代、IGP ≥85% 標品種、2009 年 8 月 1 日改稱 IGP" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">面積與 AOC 數量的說法不一，不列入測驗。</p></div>"
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
            question: "Cahors 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 1998"],
            correct: 2,
            explanation: "1971 年。"
          },
          {
            type: 'single',
            question: "Madiran 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 1998"],
            correct: 1,
            explanation: "1948 年。"
          },
          {
            type: 'single',
            question: "Cahors 規定 Malbec 至少占多少？",
            options: ["A. 50%","B. 60%","C. 70%","D. 85%"],
            correct: 2,
            explanation: "70%。"
          },
          {
            type: 'single',
            question: "Madiran 規定 Tannat 至少占每個酒莊葡萄園的多少？",
            options: ["A. 30%","B. 45%","C. 60%","D. 90%"],
            correct: 2,
            explanation: "60%（Wikipedia、Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Autan 是什麼風？",
            options: ["A. 溫暖的東風","B. 寒冷的北風","C. 潮濕的西風","D. 夏季海風"],
            correct: 0,
            explanation: "Gaillac 的特色風。"
          },
          {
            type: 'single',
            question: "Jurançon 的年雨量約多少？",
            options: ["A. 400 mm","B. 800 mm","C. 1,200 mm","D. 2,500 mm"],
            correct: 2,
            explanation: "約 1,200 公釐。"
          },
          {
            type: 'single',
            question: "Tannat 的名稱源自什麼意思？",
            options: ["A. tan（鞣製）","B. 一位巴斯克人","C. 一條河","D. 黑色"],
            correct: 0,
            explanation: "Langue d'Oc 的 tan。"
          },
          {
            type: 'single',
            question: "Gros Manseng 與 Petit Manseng 的關係？",
            options: ["A. Gros 是 Petit 的自然後代","B. 毫無關係","C. Petit 是 Gros 的後代","D. 兩者是同一品種"],
            correct: 0,
            explanation: "DNA 分析證實。"
          },
          {
            type: 'single',
            question: "Vin de Pays 全面改稱 IGP 的日期是？",
            options: ["A. 2009 年 8 月 1 日","B. 1987 年 1 月 1 日","C. 1936 年 5 月 4 日","D. 2016 年 1 月 1 日"],
            correct: 0,
            explanation: "依歐盟 607/2009 號規則。"
          },
          {
            type: 'single',
            question: "IGP 酒標標示品種，該品種至少須占多少？",
            options: ["A. 51%","B. 75%","C. 85%","D. 100%"],
            correct: 2,
            explanation: "至少 85%。"
          },
          {
            type: 'single',
            question: "Jurançon Sec 的殘糖上限是？",
            options: ["A. 4 g/L","B. 12 g/L","C. 40 g/L","D. 55 g/L"],
            correct: 0,
            explanation: "最多 4 g/L。"
          },
          {
            type: 'single',
            question: "Gaillac Primeur 使用什麼品種？",
            options: ["A. 純 Gamay","B. 純 Syrah","C. Malbec","D. Tannat"],
            correct: 0,
            explanation: "11 月第三個星期四上市。"
          }
        ]
      }
    }
  }
]
