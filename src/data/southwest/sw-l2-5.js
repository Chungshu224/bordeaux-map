/**
 * SW-L2-5 比利牛斯山麓：Jurançon、Béarn 與 Irouléguy
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "比利牛斯山麓：Jurançon、Béarn 與 Irouléguy",
    subtitle: "山地、風與甜白酒",
    icon: "⛰️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "Jurançon 的規格",
    highlights: [
      { id: 1, icon: "📜", title: "AOC", content: "甜酒 1936 年取得 AOC，乾型 Jurançon Sec 於 1975 年（Wine With Seth）；Vendanges Tardives 於 1995 年（Wine With Seth Petit Manseng 頁）" },
      { id: 2, icon: "🍇", title: "品種", content: "Gros 與 Petit Manseng 合計至少 50%；Vendanges Tardives 只能用 Petit 與 Gros Manseng；輔助品種有 Courbu Blanc、Petit Courbu、Camaralet de Lasseube、Lauzet（Wine With Seth）" },
      { id: 3, icon: "📏", title: "規模與比例", content: "約 1,000 公頃、25 個村鎮；乾酒約 75%、甜酒約 25%（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">提到 Jurançon 常只想到甜酒，但乾酒其實占四分之三。</p></div>"
  },
  {
    title: "風乾與甜度",
    highlights: [
      { id: 1, icon: "🌬️", title: "Passerillage", content: "甜酒靠葡萄在藤上風乾（而非貴腐）濃縮；Petit Manseng 可留到 11 月甚至 12 月，由 foehn 乾風助力（Wine With Seth）" },
      { id: 2, icon: "🍬", title: "殘糖門檻", content: "Jurançon Sec 最多 4 g/L；甜酒至少 40 g/L；Vendanges Tardives 至少 55 g/L（Wine With Seth）" },
      { id: 3, icon: "🪜", title: "高架整枝", content: "藤蔓訓練到約 2 公尺高以降低地面霜害風險；Jurançon 約每公頃 3,000 株，而波爾多與勃艮第約 10,000 株（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這是以乾風造就濃縮、而非靠黴菌的甜酒。</p></div>"
  },
  {
    title: "Béarn",
    highlights: [
      { id: 1, icon: "📜", title: "歷史與規格", content: "1951 年為 VDQS，1975 年成為 AOC；Béarn-Bellocq 於 1991 年成立；約 259 公頃（Wikipedia）" },
      { id: 2, icon: "🍷", title: "品種", content: "六種紅葡萄：Cabernet Franc、Cabernet Sauvignon、Tannat、Fer、Manseng Noir、Courbu Noir；白酒有七種保存品種（Wikipedia）" },
      { id: 3, icon: "🌧️", title: "降雨", content: "年雨量從 Salies-de-Béarn 約 1,300 公釐到 Madiran 約 1,000 公釐；比利牛斯山擋住雨雲並生成焚風（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Béarn 的紅粉紅酒占了大多數產量。</p></div>"
  },
  {
    title: "Irouléguy",
    highlights: [
      { id: 1, icon: "⛪", title: "歷史", content: "11 世紀 Roncesvalles 修道院的修士為聖雅各之路的朝聖者種下大片葡萄園；1659 年 Pyrenees 條約後修士停止釀酒，由村民接手（Wikipedia）" },
      { id: 2, icon: "🪜", title: "梯田", content: "葡萄園在海拔 100–400 公尺的梯田，部分坡度達 60°；土壤呈深紅色（Wikipedia）" },
      { id: 3, icon: "🧮", title: "規模", content: "AOC 為 1970 年 10 月；17 世紀約 500 公頃，1980 年代只剩約 70 公頃，現約 210 公頃；酒款約 70% 紅、20% 粉紅、10% 白（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Irouléguy 是 Wine Folly 所述巴斯克地區唯一的 AOP。</p></div>"
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
            question: "Jurançon Sec 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1975","D. 2011"],
            correct: 2,
            explanation: "1975 年；甜酒為 1936 年。"
          },
          {
            type: 'single',
            question: "Jurançon 的甜酒如何濃縮？",
            options: ["A. 在藤上風乾（passerillage）","B. 貴腐黴","C. 冷凍採收","D. 加烈"],
            correct: 0,
            explanation: "而非貴腐（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Jurançon 甜酒的殘糖至少多少？",
            options: ["A. 4 g/L","B. 12 g/L","C. 40 g/L","D. 120 g/L"],
            correct: 2,
            explanation: "至少 40 g/L；Vendanges Tardives 為 55 g/L。"
          },
          {
            type: 'single',
            question: "Béarn 成為 AOC 是哪一年？",
            options: ["A. 1951","B. 1975","C. 1991","D. 2011"],
            correct: 1,
            explanation: "1975 年；1951 年為 VDQS。"
          },
          {
            type: 'single',
            question: "Irouléguy 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1970","C. 1990","D. 2011"],
            correct: 1,
            explanation: "1970 年 10 月（Wikipedia）。"
          },
          {
            type: 'single',
            question: "Irouléguy 的葡萄園主要位於？",
            options: ["A. 海拔 100–400 公尺的梯田","B. 沿海沙丘","C. Garonne 河口三角洲","D. 海拔 1,500 公尺以上"],
            correct: 0,
            explanation: "部分坡度達 60°。"
          }
        ]
      }
    }
  }
]
