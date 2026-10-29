/**
 * PV-L2-8 Level 2 綜合評量
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "普羅旺斯與科西嘉產區",
    icon: "🏆",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🌹", title: "普羅旺斯", content: "Côtes de Provence 的五個地名、Coteaux d'Aix、Les Baux、Coteaux Varois、Bandol 與四個小產區" },
      { id: 2, icon: "🏝️", title: "科西嘉", content: "Patrimonio、Cap Corse、Calvi、Ajaccio、Sartène、Figari、Porto-Vecchio 與 Vin de Corse" },
      { id: 3, icon: "🥂", title: "風格", content: "淺色玫瑰紅、Vermentino 白酒與 Mourvèdre／Sciaccarellu 紅酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">以此為準備進入 Level 3。</p></div>"
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
            question: "Fréjus 玫瑰紅至少需要多少 Tibouren？",
            options: ["A. 5%","B. 10%","C. 20%","D. 50%"],
            correct: 2,
            explanation: "20%。"
          },
          {
            type: 'single',
            question: "哪個地名也做白酒？",
            options: ["A. La Londe","B. Fréjus","C. Pierrefeu","D. Sainte-Victoire"],
            correct: 0,
            explanation: "La Londe。"
          },
          {
            type: 'single',
            question: "Coteaux d'Aix 的 AOC 年？",
            options: ["A. 1956","B. 1985","C. 1993","D. 1995"],
            correct: 1,
            explanation: "1985。"
          },
          {
            type: 'single',
            question: "Les Baux 紅酒的 Cabernet 上限？",
            options: ["A. 5%","B. 20%","C. 50%","D. 90%"],
            correct: 1,
            explanation: "20%。"
          },
          {
            type: 'single',
            question: "Coteaux Varois 有幾個村？",
            options: ["A. 11","B. 28","C. 49","D. 84"],
            correct: 1,
            explanation: "28。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒主要品種？",
            options: ["A. Mourvèdre","B. Syrah","C. Cinsault","D. Tibouren"],
            correct: 0,
            explanation: "Mourvèdre。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒至少桶陳多久？",
            options: ["A. 6 個月","B. 12 個月","C. 18 個月","D. 36 個月"],
            correct: 2,
            explanation: "18 個月。"
          },
          {
            type: 'single',
            question: "Château Simone 屬於？",
            options: ["A. Palette","B. Bandol","C. Cassis","D. Pierrevert"],
            correct: 0,
            explanation: "Palette。"
          },
          {
            type: 'single',
            question: "Bellet 的白酒品種？",
            options: ["A. Rolle","B. Marsanne","C. Viognier","D. Chardonnay"],
            correct: 0,
            explanation: "Rolle。"
          },
          {
            type: 'single',
            question: "科西嘉第一個 AOC？",
            options: ["A. Patrimonio","B. Ajaccio","C. Calvi","D. Sartène"],
            correct: 0,
            explanation: "Patrimonio，1968。"
          },
          {
            type: 'single',
            question: "Ajaccio 的標誌品種？",
            options: ["A. Sciaccarellu","B. Nielluccio","C. Vermentino","D. Mourvèdre"],
            correct: 0,
            explanation: "Sciaccarellu。"
          },
          {
            type: 'single',
            question: "Muscat du Cap Corse 的類型？",
            options: ["A. VDN","B. 氣泡","C. 乾紅","D. 橘酒"],
            correct: 0,
            explanation: "VDN。"
          }
        ]
      }
    }
  }
]
