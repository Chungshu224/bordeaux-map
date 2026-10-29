/**
 * PV-L2-4 Cassis、Palette、Bellet 與 Pierrevert
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Cassis、Palette、Bellet 與 Pierrevert",
    subtitle: "四個風格各異的小產區",
    icon: "⛵",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "Cassis 與 Palette",
    highlights: [
      { id: 1, icon: "🌊", title: "Cassis", content: "馬賽以東的港口小鎮，AOC 於 1936 年成立（法國最早的 AOC 之一），以白酒為重，沿 Cap Canaille 懸崖" },
      { id: 2, icon: "🌳", title: "Palette", content: "Aix 附近的極小產區，AOC 1948 年；Château Simone 為代表，品種多達二十餘種，以 Mourvèdre、Grenache、Cinsault 為主" },
      { id: 3, icon: "🪨", title: "共同點", content: "都是規模很小、被都市包圍的傳統產區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">小產區，個性強。</p></div>"
  },
  {
    title: "Bellet",
    highlights: [
      { id: 1, icon: "🏙️", title: "尼斯後山", content: "位於尼斯後方的丘陵，AOC 1941 年，面積極小" },
      { id: 2, icon: "🍇", title: "在地品種", content: "白酒以 Rolle（Vermentino）為主；紅酒用 Braquet 與 Folle Noire（Fuella）" },
      { id: 3, icon: "🇮🇹", title: "義大利淵源", content: "鄰近義大利，品種與 Liguria 與 Piedmont 有淵源" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">尼斯城後的在地品種小產區。</p></div>"
  },
  {
    title: "Pierrevert",
    highlights: [
      { id: 1, icon: "🏔️", title: "高地北緣", content: "位於 Alpes-de-Haute-Provence 的 Durance 河谷，海拔較高、夜間涼爽" },
      { id: 2, icon: "🍷", title: "風格", content: "較輕柔新鮮的紅、白與玫瑰紅，介於普羅旺斯與 Rhône 之間" },
      { id: 3, icon: "🧭", title: "定位", content: "不屬海岸，是內陸高地的補充" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">高地、清涼，是普羅旺斯的北緣。</p></div>"
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
            question: "Cassis 以哪種顏色為主？",
            options: ["A. 白","B. 紅","C. 橘","D. 甜白"],
            correct: 0,
            explanation: "白酒為重。"
          },
          {
            type: 'single',
            question: "Bellet 白酒主要品種？",
            options: ["A. Rolle","B. Marsanne","C. Viognier","D. Chardonnay"],
            correct: 0,
            explanation: "Rolle（Vermentino）。"
          },
          {
            type: 'single',
            question: "Bellet 紅酒的在地品種？",
            options: ["A. Braquet","B. Pinot Noir","C. Malbec","D. Nebbiolo"],
            correct: 0,
            explanation: "Braquet（與 Folle Noire）。"
          },
          {
            type: 'single',
            question: "Château Simone 屬於哪個產區？",
            options: ["A. Palette","B. Bandol","C. Cassis","D. Pierrevert"],
            correct: 0,
            explanation: "Palette。"
          },
          {
            type: 'single',
            question: "Pierrevert 位於哪條河谷？",
            options: ["A. Durance","B. Loire","C. Rhône","D. Garonne"],
            correct: 0,
            explanation: "Durance 河谷。"
          },
          {
            type: 'single',
            question: "Cassis 的 AOC 年份？",
            options: ["A. 1936","B. 1948","C. 1985","D. 2005"],
            correct: 0,
            explanation: "1936 年。"
          }
        ]
      }
    }
  }
]
