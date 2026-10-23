/**
 * GR-L2-2 馬其頓與色薩利：Naoussa 與北部紅酒核心
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "馬其頓與色薩利",
    subtitle: "Naoussa 與北部紅酒核心",
    icon: "🏔️",
    background: 'linear-gradient(135deg, #2c6e49 0%, #1C7C9C 100%)'
  },
  {
    title: "Xinomavro 三兄弟：Naoussa、Amyndeo、Goumenissa",
    highlights: [
      { id: 1, icon: "🍷", title: "Naoussa", content: "只限紅酒、100% Xinomavro；石灰質黏土與泥灰岩土壤；規定橡木陳年；北部的旗艦 PDO" },
      { id: 2, icon: "❄️", title: "Amyndeo（Amyntaio）", content: "僅 Xinomavro；乾型、半乾與半甜紅酒及粉紅酒，並有天然氣泡粉紅；較涼的高海拔環境，土壤偏砂質與黏土" },
      { id: 3, icon: "🌿", title: "Goumenissa", content: "乾型紅酒，Xinomavro 混 Negoska（Negoska 至少 20%）；葡萄園須位於海拔 150 公尺以上；Negoska 使酒體比 Naoussa 更柔和" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">辨識口訣：Naoussa＝結構與陳年、Amyndeo＝清涼與氣泡粉紅、Goumenissa＝混 Negoska 的柔和。</p></div>"
  },
  {
    title: "Xinomavro 的海拔與風格",
    highlights: [
      { id: 1, icon: "🏞️", title: "中等海拔", content: "乾型紅酒：色澤與酸度良好、酒精偏高、單寧豐富，適合陳年" },
      { id: 2, icon: "⛰️", title: "高海拔", content: "可釀粉紅酒、氣泡酒，甚至白中白（blanc de noirs），帶紅莓與草莓香" },
      { id: 3, icon: "🔁", title: "同一品種，多種面貌", content: "海拔、土壤與釀法決定風格，這正是 Diploma 論述的好題材" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寫論述時，用「Naoussa（結構）對 Amyndeo（清涼）」做同一品種的對照最有效。</p></div>"
  },
  {
    title: "Slopes of Meliton：Halkidiki 的白與紅",
    highlights: [
      { id: 1, icon: "🏖️", title: "位置", content: "位於馬其頓東南部的 Halkidiki 半島一帶，靠海" },
      { id: 2, icon: "⚪", title: "白酒", content: "乾白由 Assyrtiko、Athiri、Roditis 組成" },
      { id: 3, icon: "🔴", title: "紅酒", content: "以 Limnio 為本，搭配 Cabernet Sauvignon、Cabernet Franc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是北部少數「紅白皆有、且允許國際品種」的 PDO，風格與 Xinomavro 產區不同。</p></div>"
  },
  {
    title: "色薩利：Rapsani、Messenikola、Anchialos",
    highlights: [
      { id: 1, icon: "🗻", title: "Rapsani", content: "乾型紅酒，由 Xinomavro、Stavroto、Krassato 混釀；片岩土壤" },
      { id: 2, icon: "🔴", title: "Messenikola", content: "乾型紅酒，至少 70% Mavro Messenikola，其餘 Carignan 與 Syrah" },
      { id: 3, icon: "⚪", title: "Anchialos", content: "乾白，至少 80% Roditis，其餘 Savatiano" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">色薩利三個 PDO 的記憶法：Rapsani＝混釀紅、Messenikola＝含法國品種的紅、Anchialos＝白。</p></div>"
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
            question: "Goumenissa 的混釀品種是？",
            options: ["A. Negoska","B. Roditis","C. Debina","D. Liatiko"],
            correct: 0,
            explanation: "Negoska 使 Goumenissa 比 Naoussa 更柔和。"
          },
          {
            type: 'single',
            question: "哪個 PDO 允許天然氣泡的粉紅酒？",
            options: ["A. Naoussa","B. Amyndeo","C. Goumenissa","D. Rapsani"],
            correct: 1,
            explanation: "Amyndeo 以涼爽高海拔與氣泡粉紅聞名。"
          },
          {
            type: 'single',
            question: "Anchialos 是哪一類酒？",
            options: ["A. 以 Roditis 為主的乾白","B. 甜紅強化酒","C. 氣泡粉紅","D. Muscat 甜酒"],
            correct: 0,
            explanation: "Anchialos 為至少 80% Roditis 的乾白，位於色薩利。"
          }
        ]
      }
    }
  }
]
