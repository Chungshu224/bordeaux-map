/**
 * SW-L1-3 葡萄品種
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "葡萄品種",
    subtitle: "一座「葡萄品種博物館」",
    icon: "🍇",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "兩個世界",
    highlights: [
      { id: 1, icon: "🍷", title: "波爾多式品種", content: "靠近波爾多處，Bergerac、Côte de Duras 等使用 Merlot、Cabernet Franc、Sauvignon、Sémillon 等（Wikipedia、VinePair）" },
      { id: 2, icon: "🏺", title: "本土品種", content: "wein.plus 稱之為「葡萄博物館」：Tannat、Négrette、Mauzac、Manseng Noir、Arrufiac、Baroque、Duras、Fer、Lauzet、Len de l'El 等" },
      { id: 3, icon: "🏷️", title: "一種多名", content: "Malbec 在 Cahors 叫 Côt、Auxerrois 或 Pressac；Fer Servadou 在 Gaillac 叫 Braucol、在 Marcillac 叫 Mansois、在 Madiran 叫 Pinenc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">愈往南、愈靠近比利牛斯山，本土品種愈多。</p></div>"
  },
  {
    title: "黑的 Malbec 與 Tannat",
    highlights: [
      { id: 1, icon: "🍇", title: "Malbec（Côt）", content: "Cahors 規定至少 70% Malbec，Merlot 與 Tannat 各可加到 30%（Wine With Seth）；風味有李子與菸草（Wine Folly）" },
      { id: 2, icon: "⚫", title: "Tannat", content: "名稱源自 Langue d'Oc 的 tan（鞣製）；厚皮、花青素豐富，酒色近黑且極為澀；酒體、酸度、單寧皆屬高（Wine With Seth）" },
      { id: 3, icon: "🌎", title: "烏拉圭", content: "巴斯克移民 Harriague 於 1870 年把 Tannat 帶到烏拉圭，2018 年種植 1,610 公頃，是最廣種的品種（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Malbec 偏果香與柔順，Tannat 則以力量與單寧見長。</p></div>"
  },
  {
    title: "其他本土紅葡萄",
    highlights: [
      { id: 1, icon: "🌸", title: "Négrette", content: "低酸、低單寧但色深；風味有紫羅蘭、覆盆子與甘草；最適合 boulbènes 土壤；曾在加州以 Pinot St-George 之名販售至 1997 年（Wine With Seth）" },
      { id: 2, icon: "🔩", title: "Fer Servadou", content: "名稱來自法文的「鐵」，因樹枝木質極硬；Marcillac 的酒可能單寧強而樸實，其他地方則帶紅醋栗與大黃的香氣（Wikipedia）" },
      { id: 3, icon: "🧪", title: "Gaillac 紅酒規定", content: "Duras、Braucol（Fer）、Prunelart、Syrah 四種中至少用兩種，合計至少 70%（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些品種在別處很少見，是西南產區的辨識度所在。</p></div>"
  },
  {
    title: "白葡萄",
    highlights: [
      { id: 1, icon: "🍯", title: "Manseng 家族", content: "Gros Manseng 是 Petit Manseng 的自然後代（DNA 證實）；Petit Manseng 是 Savagnin 的後代；法國約 2,800 公頃 Gros 與約 600 公頃 Petit（Wine With Seth）" },
      { id: 2, icon: "🍏", title: "Mauzac", content: "起源於西南部，主要在 Gaillac 與 Limoux；晚萌芽、晚成熟；2000 年法國約 3,200 公頃（Wikipedia）" },
      { id: 3, icon: "🌿", title: "輔助品種", content: "Jurançon 的輔助品種有 Courbu Blanc、Petit Courbu、Camaralet de Lasseube 與 Lauzet（Wine With Seth）；Gaillac 白酒用 Len de l'El、Mauzac、Muscadelle" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">白葡萄以高酸、香氣濃的 Manseng 與可做氣泡的 Mauzac 為代表。</p></div>"
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
            question: "Malbec 在 Cahors 的當地名稱不包括？",
            options: ["A. Côt","B. Auxerrois","C. Pressac","D. Braucol"],
            correct: 3,
            explanation: "Braucol 是 Fer Servadou 在 Gaillac 的名稱。"
          },
          {
            type: 'single',
            question: "Cahors 規定 Malbec 至少占多少？",
            options: ["A. 50%","B. 60%","C. 70%","D. 85%"],
            correct: 2,
            explanation: "70%（Wine With Seth）。"
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
            explanation: "DNA 分析證實（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Négrette 曾在加州以什麼名字販售至 1997 年？",
            options: ["A. Pinot St-George","B. Pinot Noir","C. Mavro","D. Gamay"],
            correct: 0,
            explanation: "Wine With Seth。"
          },
          {
            type: 'single',
            question: "Fer Servadou 的名字來自什麼？",
            options: ["A. 鐵（樹枝木質極硬）","B. 鐵質土壤","C. 鐵製酒桶","D. 一條河"],
            correct: 0,
            explanation: "Wikipedia。"
          }
        ]
      }
    }
  }
]
