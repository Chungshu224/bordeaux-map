/**
 * ZA-L1-4 紅葡萄品種與 Cape Blend
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "紅葡萄品種與 Cape Blend",
    subtitle: "Pinotage、Cinsault、Syrah、Cabernet",
    icon: "🍷",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "主要紅品種",
    highlights: [
      { id: 1, icon: "🍇", title: "Cabernet Sauvignon", content: "2025 年約 9.9%（8,601 公頃），紅品種中最多" },
      { id: 2, icon: "🌶️", title: "Syrah", content: "約 9.4%（8,103 公頃），在 Swartland 等較暖產區表現突出" },
      { id: 3, icon: "🇿🇦", title: "Pinotage", content: "約 7.6%（6,619 公頃），南非特有的雜交品種" },
      { id: 4, icon: "🍷", title: "Merlot", content: "約 5.7%（4,907 公頃）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">2025 年紅品種前四名：Cabernet Sauvignon、Syrah、Pinotage、Merlot。</p></div>"
  },
  {
    title: "Pinotage 的故事",
    highlights: [
      { id: 1, icon: "🧬", title: "親本", content: "Pinot Noir × Cinsaut（當時在南非稱 Hermitage），由 Abraham Perold 教授雜交" },
      { id: 2, icon: "📅", title: "年份", content: "雜交紀錄為 1920 年代中期（Perold 的紀錄載明 1924 年 11 月；一般說法為 1925 年）；第一桶酒 1941 年；1961 年首次出現在酒標上" },
      { id: 3, icon: "🏆", title: "國際認可", content: "1991 年 Kanonkop Pinotage 在倫敦 IWSC 獲得 Robert Mondavi Trophy（最佳紅酒）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">不同資料對雜交年份有 1924／1925 之別，因此不出年份題；親本 Pinot Noir × Cinsaut 則是定論。</p></div>"
  },
  {
    title: "Cape Blend 與其他紅品種",
    highlights: [
      { id: 1, icon: "🧩", title: "Cape Blend", content: "通常指含有 Pinotage 的混釀紅酒，是南非自成一格的風格；各生產者與組織對最低比例的定義不一，課程不出比例題" },
      { id: 2, icon: "🌸", title: "Cinsault 復興", content: "老藤 Cinsault 近年重新受到重視，風格清爽多汁" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南非紅酒從大型 Bordeaux 風格到輕盈 Cinsault，風格分布很廣。</p></div>"
  },
  {
    title: "Diploma 深度：Pinotage 的風格爭議",
    highlights: [
      { id: 1, icon: "⚖️", title: "評價兩極的品種", content: "Pinotage 長期被批評帶有焦橡膠、過熟香蕉等香氣；感官研究也記錄到 banana、burnt rubber、smoky 等描述詞（SAJEV）。支持者則認為問題多出在栽培與釀造，而非品種本身" },
      { id: 2, icon: "☕", title: "「咖啡 Pinotage」", content: "Wellington 的 Diemersfontein 由釀酒師 Bertus Fourie 以 2001 年份做出帶咖啡、巧克力香的 Pinotage，成為商業上成功的子類型。研究指出咖啡感是多種化合物的協同效果，不是單一成分；標示「咖啡風格」的酒也不一定有明顯咖啡香" },
      { id: 3, icon: "🍇", title: "現代的做法（趨勢）", content: "許多生產者改為較早採收、較溫和萃取、減少新橡木，或用老藤灌木藤，釀出以紅色水果與新鮮度為主的 Pinotage；風格光譜從輕盈多汁到濃厚陳年型都有" },
      { id: 4, icon: "🧭", title: "論述角度：國家品種的兩面", content: "Pinotage 是南非獨有的身分象徵，有助差異化；但評價分歧，也讓它難以撐起整個國家的高端形象。答題時可用「辨識度 vs 市場接受度」來平衡論點" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pinotage 的問題多半是「怎麼種、怎麼釀」，論述時要把品種與做法分開談。</p></div>"
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
            question: "Pinotage 是由哪兩個品種雜交而成？",
            options: ["A. Pinot Noir × Cinsaut","B. Pinot Noir × Syrah","C. Cabernet × Merlot","D. Grenache × Cinsaut"],
            correct: 0,
            explanation: "Abraham Perold 的雜交，Cinsaut 當時稱 Hermitage，故名 Pinotage。"
          },
          {
            type: 'single',
            question: "2025 年南非種植最多的紅品種是？",
            options: ["A. Pinotage","B. Syrah","C. Cabernet Sauvignon","D. Merlot"],
            correct: 2,
            explanation: "Cabernet Sauvignon 約 9.9%。"
          },
          {
            type: 'single',
            question: "Kanonkop Pinotage 在 1991 年於倫敦獲得什麼獎項？",
            options: ["A. Decanter 年度最佳白酒","B. Robert Mondavi Trophy（最佳紅酒）","C. Bordeaux 盲品冠軍","D. 金牌但無杯獎"],
            correct: 1,
            explanation: "IWSC 的 Robert Mondavi Trophy。"
          }
        ]
      }
    }
  }
]
