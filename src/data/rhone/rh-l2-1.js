/**
 * RH L2-1 Côtes du Rhône 與 Villages 法規
 * 事實來源：INAO 產品規格（Côtes du Rhône：2018 年 9 月版與 2026 年修訂草案；Côtes du Rhône Villages：2026 年修訂草案）、Inter Rhône《Chiffres clés 2025》、使用者 Drive 筆記《29 Southern Rhone CDR And CDR Village》。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。來源有出入者已在課內標明並不放進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Côtes du Rhône 與 Villages 法規",
    subtitle: "品種比例與地名",
    icon: "📘",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Côtes du Rhône：品種比例",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與酒款",
        content: "INAO 規格記載 1937 年 11 月 19 日的認定與劃界法令；可產紅、粉紅、白酒。2025 年約 26,800 公頃（Inter Rhône）"
      },
      {
        id: 2,
        icon: "🍇",
        title: "紅／粉紅的主要品種",
        content: "主要品種為 Grenache、Syrah、Mourvèdre，合計至少 70%；其中 Grenache 至少 30%（蒙特利馬爾 Montélimar 緯線以北的酒莊例外）"
      },
      {
        id: 3,
        icon: "➕",
        title: "Syrah＋Mourvèdre",
        content: "Syrah 與 Mourvèdre 合計至少 20%；Caladoc、Couston、Marselan 合計至多 10%；紅酒中的白品種至多 5%"
      },
      {
        id: 4,
        icon: "🏡",
        title: "以「酒莊整體種植」計算",
        content: "比例看的是酒莊整體的品種種植（encépagement），不是單一酒款的配方；這是看標籤與考題時最容易誤解之處"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Côtes du Rhône 是整個河谷的基礎名稱；品種規定看的是酒莊整體種植，而非單一瓶酒。</p></div>"
  },
  {
    title: "查證結論：20% 還是 15%？",
    highlights: [
      {
        id: 1,
        icon: "📅",
        title: "分階段導入",
        content: "INAO 規格：2016 年起新植 10%；2019 年起新植 20%；已投產的葡萄樹自 2022 年採收起適用 20%。至 2023 年採收前，國家委員會可依個案調降"
      },
      {
        id: 2,
        icon: "🔍",
        title: "為何各來源數字不同",
        content: "使用者 2021 年的 Drive 筆記寫 15%，是過渡期的版本；WineWithSeth 的 20% 是最終版本。差異來自年份，並非互相矛盾"
      },
      {
        id: 3,
        icon: "⚖️",
        title: "其他規格數字（修訂草案版）",
        content: "INAO 2026 年修訂草案載明：單產 51 hl/ha（上限 60）；最低天然酒精度南部 11%、北部 10.5%。屬草案文字，僅供參考，不進測驗"
      },
      {
        id: 4,
        icon: "❓",
        title: "村莊數量：待定",
        content: "INAO 草案列出 176 個村莊、7 個省（正文又寫 6 個省）；WineWithSeth 為 172 個村莊、6 個省。來源互相不一致，課內只說「約 170 餘個村莊」，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先看年份、再看版本：Syrah＋Mourvèdre 的最低比例，現行（2022 年採收起）是 20%。</p></div>"
  },
  {
    title: "Côtes du Rhône Villages",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "INAO 規格記載 1966 年 11 月 2 日的法令，歷史段落則提到 1967 年；僅限南部四個省：Ardèche、Drôme、Gard、Vaucluse。可產紅、粉紅、白酒"
      },
      {
        id: 2,
        icon: "🍇",
        title: "品種比例更嚴",
        content: "紅、粉紅：主要品種（Grenache、Syrah、Mourvèdre）至少 80%；Grenache 至少 40%；Syrah＋Mourvèdre 至少 25%。Drive 筆記的 Grenache 40% 與此一致"
      },
      {
        id: 3,
        icon: "📉",
        title: "產量與酒精度（草案版）",
        content: "草案文字：Villages 單產 44 hl/ha（上限 50）、加註地名者 41 hl/ha（上限 45）；最低天然酒精度 12%，部分加註地名的紅酒為 12.5%。僅供參考，不進測驗"
      },
      {
        id: 4,
        icon: "📏",
        title: "規模",
        content: "2025 年約 8,019 公頃，其中加註地名者約 5,285 公頃；紅酒占約 96%（Inter Rhône 2025）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Villages 是介於 Côtes du Rhône 與 cru 之間的一層：比例更嚴、範圍限於南部。</p></div>"
  },
  {
    title: "21 個可加註地名的村莊",
    highlights: [
      {
        id: 1,
        icon: "🏘️",
        title: "21 個名稱（INAO）",
        content: "Chusclan、Gadagne、Massif d'Uchaux、Nyons、Plan de Dieu、Puyméras、Roaix、Rochegude、Rousset-les-Vignes、Sablet、Saint-Andéol、Saint-Gervais、Saint-Maurice、Saint-Pantaléon-les-Vignes、Sainte-Cécile、Séguret、Signargues、Suze-la-Rousse、Vaison-la-Romaine、Valréas、Visan"
      },
      {
        id: 2,
        icon: "🎨",
        title: "酒款類型的限制",
        content: "Chusclan 只能是紅或粉紅；Gadagne、Massif d'Uchaux、Nyons、Plan de Dieu、Puyméras、Saint-Andéol、Sainte-Cécile、Signargues、Suze-la-Rousse、Vaison-la-Romaine 只能是紅或白（不得為粉紅）；其餘 10 個紅、粉紅、白皆可"
      },
      {
        id: 3,
        icon: "⬆️",
        title: "升格為 cru 的路徑",
        content: "多個今日的 cru 原本以 Côtes du Rhône 或 Villages 的地名身分出道：Gigondas（1971）、Vacqueyras（1990）、Beaumes-de-Venise（2005）、Vinsobres（2006）、Cairanne（2016）、Laudun（2024）"
      },
      {
        id: 4,
        icon: "🧭",
        title: "怎麼看標籤",
        content: "「Côtes du Rhône Villages ＋ 村名」仍屬 Villages 這個 AOC；cru 則是獨立 AOC，標籤上不再寫 Côtes du Rhône Villages"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">21 個名稱的「顏色限制」是法規題的好素材，但不需死背，抓住 Chusclan 的特例即可。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "Côtes du Rhône 紅酒規定中，Grenache 的最低比例是？（以酒莊整體種植計）",
            options: [
              "A. 15%",
              "B. 30%",
              "C. 40%",
              "D. 50%"
            ],
            correct: 1,
            explanation: "至少 30%（蒙特利馬爾緯線以北的酒莊例外）。40% 是 Villages 的要求。"
          },
          {
            type: "single",
            question: "已投產的葡萄樹，自哪一年採收起必須符合 Syrah＋Mourvèdre 合計至少 20%？",
            options: [
              "A. 2016",
              "B. 2019",
              "C. 2022",
              "D. 2025"
            ],
            correct: 2,
            explanation: "2016 年起新植 10%、2019 年起新植 20%，已投產的樹自 2022 年採收起適用 20%。舊筆記的 15% 是過渡版本。"
          },
          {
            type: "single",
            question: "Côtes du Rhône Villages 的紅酒，Grenache 的最低比例是？",
            options: [
              "A. 20%",
              "B. 30%",
              "C. 40%",
              "D. 60%"
            ],
            correct: 2,
            explanation: "Villages 要求 Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%，比 Côtes du Rhône 更嚴。"
          },
          {
            type: "single",
            question: "可在 Côtes du Rhône Villages 之後加註地名的村莊共有幾個？",
            options: [
              "A. 8",
              "B. 18",
              "C. 21",
              "D. 95"
            ],
            correct: 2,
            explanation: "21 個（INAO 規格與 Inter Rhône 一致）。18 是 cru 數量，不要混淆。"
          }
        ]
      }
    }
  }
]
