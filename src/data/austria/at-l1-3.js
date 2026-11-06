/**
 * AT-L1-3 白葡萄品種
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "白葡萄品種",
    subtitle: "Grüner Veltliner、Riesling 與其他",
    icon: "🍇",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "Grüner Veltliner：旗艦品種",
    highlights: [
      { id: 1, icon: "👑", title: "最重要的白葡萄", content: "約占葡萄園面積的三分之一（2025 年 32.3%）" },
      { id: 2, icon: "📍", title: "Weinviertel 是大本營", content: "Weinviertel 擁有全國約一半的 Grüner Veltliner（Wikipedia）" },
      { id: 3, icon: "🌶️", title: "風格特徵", content: "以白胡椒、柑橘與青蘋果為特徵，酸度中高；可從輕盈清爽到濃郁陳年型（如 Wachau Smaragd）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比例要標年份；重點是「約三分之一」。</p></div>"
  },
  {
    title: "Riesling 與 Welschriesling",
    highlights: [
      { id: 1, icon: "💎", title: "Riesling", content: "以 Wachau、Kamptal、Kremstal 的陡峭坡地與原生岩土壤表現最佳，風格緊緻、礦物感強、酸度高" },
      { id: 2, icon: "🎭", title: "Welschriesling 不是 Riesling", content: "兩者沒有親緣關係；Welschriesling 風味中性、酸度高（2025 年約占面積 6.3%）" },
      { id: 3, icon: "🍯", title: "Welschriesling 的用途", content: "常用於 Burgenland 的貴腐甜酒，也用於 Sekt 與輕盈乾型酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">名字相似但是兩個不同的品種，是常見的陷阱題。</p></div>"
  },
  {
    title: "其他重要白品種",
    highlights: [
      { id: 1, icon: "⚪", title: "Weißburgunder 與 Chardonnay", content: "Weißburgunder 即 Pinot Blanc；Steiermark 的 Chardonnay 常稱為 Morillon" },
      { id: 2, icon: "🌿", title: "Sauvignon Blanc 與 Gelber Muskateller", content: "在 Steiermark 特別有名，香氣鮮明、酸度高" },
      { id: 3, icon: "🏛️", title: "Rotgipfler 與 Zierfandler", content: "Thermenregion 的在地特色品種，常一起調配，風格豐厚" },
      { id: 4, icon: "📋", title: "其他", content: "Müller-Thurgau、Neuburger、Frühroter Veltliner、Muscat Ottonel、Traminer 等也有種植" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">名單很長，先熟悉最常考的幾個。</p></div>"
  },
  {
    title: "風格速查",
    highlights: [
      { id: 1, icon: "🌶️", title: "Grüner Veltliner", content: "白胡椒、柑橘、青蘋果；中高酸；從輕巧到濃郁" },
      { id: 2, icon: "💎", title: "Riesling", content: "桃、柑橘、礦物；高酸；乾型為主" },
      { id: 3, icon: "🍏", title: "Welschriesling", content: "風味中性、酸度高；適合基酒與甜酒" },
      { id: 4, icon: "🍋", title: "Sauvignon Blanc（Steiermark）", content: "青草、黑醋栗葉與熱帶水果；高酸" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">盲品時，「白胡椒 + 柑橘」先想 Grüner Veltliner。</p></div>"
  },
  {
    title: "Diploma 深度：Grüner Veltliner 的身世與栽培",
    highlights: [
      { id: 1, icon: "🧬", title: "親本：Traminer × St. Georgener-Rebe", content: "1990 年代末的 DNA 分析先確認一個親本是 Traminer（Savagnin）；另一個親本直到 2000 年才在 Burgenland 的 St. Georgen 找到一株倖存老藤，命名為 St. Georgener-Rebe（確認年份各來源寫 2007 或 2009，不進測驗）。它與其他「Veltliner」品種沒有已知親緣" },
      { id: 2, icon: "🌱", title: "樹勢強、產量高：品質取決於控產", content: "Grüner 樹勢旺盛、天然產量高，任其生長會得到稀薄、中性的酒；Smaragd 或 Ried 等級的濃度來自低產與較晚採收。Diploma 論述的因果鏈：產量 → 濃縮度 → 風格等級 → 價格" },
      { id: 3, icon: "🏞️", title: "偏好深厚黃土、怕乾旱", content: "黃土（loess）保水、根系可深入，是 Grüner 的經典土壤（Wagram、Weinviertel、Wachau 下段）；在淺薄的原生岩上容易缺水。氣候變遷下的乾旱年份，水分壓力是 Grüner 最大的栽培風險之一" },
      { id: 4, icon: "🌶️", title: "白胡椒從哪裡來", content: "Grüner 的白胡椒香常被連結到倍半萜 rotundone（也是 Syrah 黑胡椒香的來源）；涼爽年份與較涼的地塊通常胡椒感更明顯。這是研究上的連結，強度因年份、地塊而異，屬趨勢而非定律" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述時把品種特性接到風格：樹勢 → 控產；黃土 → 保水；涼爽 → 胡椒感。</p></div>"
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
            question: "Grüner Veltliner 約占奧地利葡萄園面積的多少？",
            options: ["A. 約 5%","B. 約 15%","C. 約三分之一","D. 超過一半"],
            correct: 2,
            explanation: "2025 年約 32.3%，是最重要的白品種。"
          },
          {
            type: 'single',
            question: "Welschriesling 與 Riesling 的關係是？",
            options: ["A. 同一品種的別名","B. 沒有親緣關係，是不同品種","C. Welschriesling 是 Riesling 的子代","D. Welschriesling 是紅葡萄"],
            correct: 1,
            explanation: "名稱相似但無親緣關係。"
          },
          {
            type: 'single',
            question: "在 Steiermark 被稱為 Morillon 的品種是？",
            options: ["A. Sauvignon Blanc","B. Pinot Gris","C. Chardonnay","D. Muscat"],
            correct: 2,
            explanation: "Morillon 是 Steiermark 對 Chardonnay 的稱呼。"
          }
        ]
      }
    }
  }
]
