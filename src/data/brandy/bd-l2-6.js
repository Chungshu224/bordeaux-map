/**
 * BD-L2-6 Level 2 綜合評量
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "檢視各產區的差異與規則",
    icon: "🏆",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "🗺️", title: "Cognac", content: "六個 crus 由白堊到砂土；Fine Champagne ≥50% Grande Champagne；Borderies 最小；年份取最年輕者；四大酒廠" },
      { id: 2, icon: "🌾", title: "Armagnac 與歐洲", content: "Bas 62%／Ténarèze 37%／Haut 1%；1909 劃界、1936 AOC；Jerez 6 個月／1 年／3 年；Weinbrand 12 個月、38%；Grappa 為果渣" },
      { id: 3, icon: "🌎", title: "新世界", content: "秘魯 Pisco 不加水、不用橡木；南非 pot-still 100%、340 公升、3 年；Germain-Robin 1982" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字衝突的項目（各 cru 公頃數、XO 年數等）不列入測驗。</p></div>"
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
            question: "哪個 cru 最小？",
            options: ["A. Borderies","B. Grande Champagne","C. Fins Bois","D. Bons Bois"],
            correct: 0,
            explanation: "Borderies。"
          },
          {
            type: 'single',
            question: "Fine Champagne 中 Grande Champagne 至少占多少？",
            options: ["A. 10%","B. 30%","C. 50%","D. 90%"],
            correct: 2,
            explanation: "50%。"
          },
          {
            type: 'single',
            question: "Cognac 的年份標示以什麼為準？",
            options: ["A. 調配中最年輕的酒","B. 最老的酒","C. 平均年齡","D. 裝瓶年份"],
            correct: 0,
            explanation: "最年輕者。"
          },
          {
            type: 'single',
            question: "Haut-Armagnac 約占產量多少？",
            options: ["A. 1%","B. 10%","C. 37%","D. 62%"],
            correct: 0,
            explanation: "約 1%。"
          },
          {
            type: 'single',
            question: "Armagnac 三個產區是哪一年劃定？",
            options: ["A. 1310","B. 1818","C. 1909","D. 1936"],
            correct: 2,
            explanation: "1909 年。"
          },
          {
            type: 'single',
            question: "Brandy de Jerez 的 Solera Reserva 平均至少多久？",
            options: ["A. 6 個月","B. 1 年","C. 3 年","D. 6 年"],
            correct: 1,
            explanation: "1 年。"
          },
          {
            type: 'single',
            question: "Deutscher Weinbrand 的最低酒精度？",
            options: ["A. 36%","B. 37.5%","C. 38%","D. 40%"],
            correct: 2,
            explanation: "38%。"
          },
          {
            type: 'single',
            question: "Grappa 的原料是？",
            options: ["A. 果渣","B. 葡萄酒","C. 蘋果酒","D. 葡萄汁濃縮液"],
            correct: 0,
            explanation: "果渣。"
          },
          {
            type: 'single',
            question: "Metaxa 創立於？",
            options: ["A. 1715","B. 1888","C. 1918","D. 1982"],
            correct: 1,
            explanation: "1888 年。"
          },
          {
            type: 'single',
            question: "秘魯 Pisco 的橡木熟成？",
            options: ["A. 不允許，須在惰性容器靜置","B. 必須 2 年","C. 必須用新法國橡木","D. 任選"],
            correct: 0,
            explanation: "至少 3 個月惰性容器。"
          },
          {
            type: 'single',
            question: "南非 pot-still brandy 最短熟成？",
            options: ["A. 6 個月","B. 1 年","C. 3 年","D. 8 年"],
            correct: 2,
            explanation: "3 年。"
          },
          {
            type: 'single',
            question: "亞美尼亞 1999 年標準要求什麼？",
            options: ["A. 在亞美尼亞用當地葡萄生產","B. 二次壺式蒸餾","C. 至少 10 年熟成","D. 只用 Ugni Blanc"],
            correct: 0,
            explanation: "Wikipedia（Yerevan Brandy Company）。"
          }
        ]
      }
    }
  }
]
