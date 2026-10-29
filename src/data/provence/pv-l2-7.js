/**
 * PV-L2-7 風格與品飲
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "風格與品飲",
    subtitle: "玫瑰紅、白、紅的品飲重點",
    icon: "🥂",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "玫瑰紅",
    highlights: [
      { id: 1, icon: "🎨", title: "外觀", content: "淡橙粉至鮭魚色，色澤極淺是普羅旺斯的特色" },
      { id: 2, icon: "👃", title: "香氣", content: "紅色小果、柑橘、白桃、草本與地中海香草" },
      { id: 3, icon: "👅", title: "口感", content: "乾、清脆、中等酒體、細緻酸度；品質好的結構較豐" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">淺色而乾，是風格核心。</p></div>"
  },
  {
    title: "白酒與紅酒",
    highlights: [
      { id: 1, icon: "🍋", title: "白酒", content: "Vermentino、Clairette 與 Ugni Blanc：柑橘、草本、礦物感" },
      { id: 2, icon: "🍷", title: "紅酒", content: "Grenache、Syrah、Mourvèdre 與 Cinsault：從柔和到結構強勁" },
      { id: 3, icon: "🌬️", title: "風與日照", content: "Mistral 與日照使葡萄濃縮、乾淨，病害少" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">風與陽光塑造乾淨的風味。</p></div>"
  },
  {
    title: "食物搭配",
    highlights: [
      { id: 1, icon: "🐟", title: "海鮮", content: "Bouillabaisse、烤魚與生蠔配白酒或淺色玫瑰紅" },
      { id: 2, icon: "🫒", title: "普羅旺斯料理", content: "Ratatouille、tapenade 與 aïoli 適合玫瑰紅" },
      { id: 3, icon: "🐑", title: "肉類", content: "燉羊肉與香草烤肉適合 Bandol 與 Sartène 紅酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">地中海食材與酒是一體。</p></div>"
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
            question: "普羅旺斯玫瑰紅的外觀特色？",
            options: ["A. 極淺色","B. 深紅","C. 紫黑","D. 琥珀"],
            correct: 0,
            explanation: "極淺色。"
          },
          {
            type: 'single',
            question: "Mistral 的影響？",
            options: ["A. 降低病害","B. 增加濕度","C. 帶來霜害","D. 降低日照"],
            correct: 0,
            explanation: "降低病害。"
          },
          {
            type: 'single',
            question: "哪種搭配最適合 Bouillabaisse？",
            options: ["A. 白酒或淺色玫瑰紅","B. 厚重紅酒","C. 甜酒","D. 烈酒"],
            correct: 0,
            explanation: "白酒或淺色玫瑰紅。"
          },
          {
            type: 'single',
            question: "Bandol 紅酒適合？",
            options: ["A. 燉羊肉","B. 生魚片","C. 甜點","D. 沙拉"],
            correct: 0,
            explanation: "燉羊肉。"
          },
          {
            type: 'single',
            question: "Ratatouille 適合？",
            options: ["A. 玫瑰紅","B. 貴腐甜酒","C. 波特","D. 氣泡甜酒"],
            correct: 0,
            explanation: "玫瑰紅。"
          },
          {
            type: 'single',
            question: "Vermentino 白酒常見風味？",
            options: ["A. 柑橘與草本","B. 焦糖","C. 煙燻培根","D. 奶油爆米花"],
            correct: 0,
            explanation: "柑橘與草本。"
          }
        ]
      }
    }
  }
]
