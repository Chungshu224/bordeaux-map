/**
 * PV-L1-5 Level 1 綜合評量
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 1 綜合評量",
    subtitle: "以綜合測驗檢視 Level 1 的學習成果",
    icon: "🏆",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Level 1 重點回顧",
    highlights: [
      { id: 1, icon: "📖", title: "歷史與地理", content: "馬賽約公元前 600 年建立；Côtes de Provence AOC 1977 年；Crus Classés 1955 年（23→18）；法國 1769 年取得科西嘉；Patrimonio 1968 年；密斯特拉風與石灰岩、梯田 restanques；科西嘉西部花崗岩、Cap Corse 片岩、AOC 禁灌溉" },
      { id: 2, icon: "🍇", title: "品種", content: "Côtes de Provence 主要品種：Cinsault、Grenache、Mourvèdre、Syrah、Tibouren；Bandol 紅酒 Mourvèdre 50–95%；Bellet：Braquet 與 Fuella nera；Patrimonio 紅酒 Nielluccio ≥90%；Sciaccarellu＝Mammolo；Vermentino＝Rolle＝malvoisie de Corse" },
      { id: 3, icon: "📋", title: "制度", content: "普羅旺斯九個 AOC；Côtes de Provence 五個地名；科西嘉九個 AOP＋IGP Île de Beauté；IGP Méditerranée 前身為 1999 年 Vin de Pays；Patrimonio 白酒只用 Vermentino" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源不一致的數字不列入測驗。</p></div>"
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
            question: "Côtes de Provence 在哪一年成為 AOC？",
            options: ["A. 1936","B. 1951","C. 1977","D. 1995"],
            correct: 2,
            explanation: "1977 年 10 月 24 日。"
          },
          {
            type: 'single',
            question: "法國哪一年取得科西嘉？",
            options: ["A. 1566","B. 1769","C. 1815","D. 1968"],
            correct: 1,
            explanation: "1769 年。"
          },
          {
            type: 'single',
            question: "科西嘉第一個 AOC 是？",
            options: ["A. Patrimonio","B. Ajaccio","C. Vin de Corse Calvi","D. Muscat du Cap Corse"],
            correct: 0,
            explanation: "Patrimonio，1968 年。"
          },
          {
            type: 'single',
            question: "Crus Classés 現存幾家？",
            options: ["A. 10","B. 18","C. 23","D. 40"],
            correct: 1,
            explanation: "18 家（原 23 家）。"
          },
          {
            type: 'single',
            question: "密斯特拉風是什麼風？",
            options: ["A. 冷而乾的北風","B. 潮濕的南風","C. 帶沙的熱風","D. 海風"],
            correct: 0,
            explanation: "冷而乾的北風。"
          },
          {
            type: 'single',
            question: "Bandol 的梯田稱為？",
            options: ["A. restanques","B. garrigues","C. galets","D. bories"],
            correct: 0,
            explanation: "restanques。"
          },
          {
            type: 'single',
            question: "科西嘉的 AOC 對灌溉的規定是？",
            options: ["A. 禁止","B. 允許","C. 僅冬季允許","D. 僅白酒允許"],
            correct: 0,
            explanation: "禁止。"
          },
          {
            type: 'single',
            question: "下列何者不是 Côtes de Provence 的主要品種？",
            options: ["A. Tibouren","B. Syrah","C. Cabernet Sauvignon","D. Grenache"],
            correct: 2,
            explanation: "Cabernet Sauvignon 是輔助品種。"
          },
          {
            type: 'single',
            question: "Patrimonio 紅酒的 Nielluccio 至少需占多少（INAO）？",
            options: ["A. 50%","B. 75%","C. 90%","D. 100%"],
            correct: 2,
            explanation: "90%。"
          },
          {
            type: 'single',
            question: "Bellet 紅酒的主要品種是？",
            options: ["A. Braquet 與 Fuella nera","B. Grenache 與 Syrah","C. Tibouren 與 Cinsault","D. Merlot 與 Cabernet"],
            correct: 0,
            explanation: "Braquet 與 Fuella nera。"
          },
          {
            type: 'single',
            question: "科西嘉共有幾個 AOP？",
            options: ["A. 5","B. 7","C. 9","D. 14"],
            correct: 2,
            explanation: "九個。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 有幾個補充地理名稱？",
            options: ["A. 2","B. 5","C. 9","D. 18"],
            correct: 1,
            explanation: "五個。"
          }
        ]
      }
    }
  }
]
