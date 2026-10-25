/**
 * RH L2-6 Gigondas、Vacqueyras 與其他南隆河 crus
 * 事實來源：INAO 產品規格（Gigondas 2024 年修訂草案、Vacqueyras 規格、Vinsobres／Cairanne／Beaumes-de-Venise 2026 年修訂草案、Rasteau 2023 年版、Laudun 2024 年草案、Lirac 2023 年版、Tavel 2016 年全國委員會文件）、INAO 2024-09-11 全國委員會新聞稿、Decanter／iDealwine（Cairanne、Gigondas 白酒）、Inter Rhône《Chiffres clés 2025》、使用者 Drive 筆記（CMS Southern Rhone 等）。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。草案文字中比例有刪改者（如 Cairanne）已標明，不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Gigondas、Vacqueyras 與其他南隆河 crus",
    subtitle: "南隆河各 cru 的規定與風格",
    icon: "🌞",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Gigondas 與 Vacqueyras",
    highlights: [
      {
        id: 1,
        icon: "⛰️",
        title: "Gigondas：1971 年",
        content: "1971 年 1 月 6 日法令；位於 Vaucluse 省 Gigondas 村、Dentelles de Montmirail 山腳。紅、粉紅與（2023 年份起）白酒。2025 年約 1,184 公頃"
      },
      {
        id: 2,
        icon: "🍇",
        title: "Gigondas 的品種",
        content: "紅、粉紅：Grenache 至少 50%；Cinsault、Mourvèdre、Syrah 合計至少 15%。Drive 舊筆記寫「Syrah＋Mourvèdre 至少 15%」少了 Cinsault，以 INAO 為準。白酒（INAO 2022 年 9 月核准）主品種為 Clairette，至少 70%"
      },
      {
        id: 3,
        icon: "🌞",
        title: "Vacqueyras：1990 年",
        content: "1990 年（INAO 兩處寫 8 月 9 日與 15 日，年份一致）認定；Sarrians 與 Vacqueyras 兩個村莊；紅、粉紅、白。2025 年約 1,421 公頃（白酒約 7%）"
      },
      {
        id: 4,
        icon: "🍷",
        title: "Vacqueyras 的品種與規定",
        content: "紅酒：Grenache 至少 50%、Syrah＋Mourvèdre 至少 20%；兩者單產均 36 hl/ha（上限 40）；紅酒最低天然酒精度 12.5%"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩者都以 Grenache 至少 50% 為核心，單產 36 hl/ha。</p></div>"
  },
  {
    title: "Vinsobres、Beaumes-de-Venise 與 Cairanne",
    highlights: [
      {
        id: 1,
        icon: "🌲",
        title: "Vinsobres：2006 年",
        content: "2006 年 2 月法令（INAO 兩處寫 15 日與 17 日）；南隆河唯一位於 Drôme 省的 cru。紅酒 Grenache 至少 50%、Syrah＋Mourvèdre 至少 25%；單產 38 hl/ha；2025 年約 559 公頃。白酒已納入現行草案"
      },
      {
        id: 2,
        icon: "🍒",
        title: "Beaumes-de-Venise：2005 年",
        content: "乾紅酒 2005 年（10 月 25 日法令）升格為 cru；4 個村莊：Beaumes-de-Venise、Lafare、La Roque-Alric、Suzette。Grenache 至少 50%、Syrah 至少 20%（Syrah＋Mourvèdre 至少 25%）；單產 38 hl/ha；2025 年約 738 公頃。Muscat VDN 是另一個 AOC（見第 7 課）"
      },
      {
        id: 3,
        icon: "🏘️",
        title: "Cairanne：2016 年",
        content: "2008 年申請、歷經八年協商，2016 年 2 月報導核准、追溯適用至 2015 年採收（iDealwine）；紅與白。2025 年約 886 公頃。早在 1953 年即可在 Côtes du Rhône 後加註村名，1967 年可加註 Villages"
      },
      {
        id: 4,
        icon: "⚠️",
        title: "Cairanne 的比例：不考",
        content: "2026 年草案把 Grenache 下限從 50% 刪改為 40%、白品種上限從 5% 改為 15%（紅酒 Syrah＋Mourvèdre 至少 20%）。草案尚在程序中，課內不給定論、不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這三個 cru 的升格年份依序為 2005、2006、2016。</p></div>"
  },
  {
    title: "Rasteau 與 Laudun",
    highlights: [
      {
        id: 1,
        icon: "🍯",
        title: "Rasteau：VDN 與乾紅",
        content: "先以 1944 年 1 月 5 日法令認定為天然甜酒（VDN）AOC；乾紅酒於 2010 年升格為 cru，須採自 Rasteau 村。乾紅 Grenache 至少 50%，單產 38 hl/ha，最低天然酒精度 12.5%"
      },
      {
        id: 2,
        icon: "🔥",
        title: "Rasteau VDN",
        content: "類型：blanc、ambré、grenat、rosé、tuilé，ambré 與 tuilé 可加 rancio；grenat 與 tuilé 的 Grenache 至少 75%。以 96% vol. 以上的中性酒精加烈，用量為葡萄汁體積的 5–10%；葡萄汁天然糖至少 252 g/L；單產 30 hl 汁／公頃"
      },
      {
        id: 3,
        icon: "🧪",
        title: "Drive 舊筆記的殘糖數字",
        content: "Drive 筆記寫 Rasteau VDN 殘糖至少 45 g/L、Muscat de Beaumes-de-Venise 100 g/L；本次讀到的 INAO 文字只載葡萄汁天然糖 252 g/L，未能確認殘糖下限，因此不進測驗"
      },
      {
        id: 4,
        icon: "🆕",
        title: "Laudun：2024 年",
        content: "2024 年 9 月 11 日 INAO 全國委員會通過 Côtes du Rhône Villages Laudun 升格為 AOP「Laudun」；Gard 省三個村莊：Laudun-l'Ardoise、Saint-Victor-la-Coste、Tresques。紅：Grenache 至少 50%、Syrah 至少 25%；規格草案寫紅與白。面積各來源不同（約 580 公頃草案／512 公頃 2025），不考"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Rasteau 是「同名兩種酒」：乾紅是 cru，VDN 是更早的 AOC。</p></div>"
  },
  {
    title: "Lirac 與 Tavel：右岸的兩個 cru",
    highlights: [
      {
        id: 1,
        icon: "🌹",
        title: "Lirac",
        content: "1947 年 10 月 14 日法令；Gard 省 4 個村莊：Lirac、Roquemaure、Saint-Geniès-de-Comolas、Saint-Laurent-des-Arbres。紅、粉紅、白；紅與粉紅 Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%；單產 41 hl/ha（上限 43）。2025 年約 848 公頃"
      },
      {
        id: 2,
        icon: "🌸",
        title: "Tavel：只產粉紅",
        content: "1936 年 5 月 15 日法令；規格只允許靜態粉紅酒；範圍為 Tavel 村與 Roquemaure 的少數地塊。單產 46 hl/ha（上限 50）；最低天然酒精度 11.5%；2025 年約 781 公頃"
      },
      {
        id: 3,
        icon: "🍇",
        title: "Tavel 的品種規則",
        content: "Grenache（黑、白、灰合計）須大於 30%、小於 60%，且每一款調配都必須含 Grenache noir；白品種如 Clairette、Bourboulenc 也列為主要品種，每個主要品種至多 60%"
      },
      {
        id: 4,
        icon: "↔️",
        title: "兩者的共同點",
        content: "都在 Rhône 右岸、Gard 省，隔河與 Châteauneuf-du-Pape 相望；Tavel 專攻粉紅，Lirac 則有紅、粉紅、白（紅酒占 2025 年約 83%）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">右岸的 Lirac 與 Tavel 在 1936–1947 年就被認定，比多數南隆河 cru 早得多。</p></div>"
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
            question: "Gigondas 的 AOC 法令是哪一年？",
            options: [
              "A. 1936",
              "B. 1971",
              "C. 1990",
              "D. 2016"
            ],
            correct: 1,
            explanation: "1971 年 1 月 6 日（INAO 規格與 Drive 筆記一致）。1990 年是 Vacqueyras。"
          },
          {
            type: "single",
            question: "下列哪一個是最晚升格的 cru？",
            options: [
              "A. Vinsobres (2006)",
              "B. Rasteau (2010)",
              "C. Cairanne (2016)",
              "D. Laudun (2024)"
            ],
            correct: 3,
            explanation: "Laudun 於 2024 年 9 月 11 日經 INAO 全國委員會通過，是第 18 個 cru。"
          },
          {
            type: "single",
            question: "Rasteau VDN 加烈時，中性酒精的用量是葡萄汁體積的多少？",
            options: [
              "A. 1–2%",
              "B. 5–10%",
              "C. 20–25%",
              "D. 40–50%"
            ],
            correct: 1,
            explanation: "5% 至 10%（96% vol. 以上的中性酒精），葡萄汁天然糖至少 252 g/L。"
          },
          {
            type: "single",
            question: "關於 Tavel，下列何者正確？",
            options: [
              "A. 只產粉紅酒，Grenache noir 須出現在每款調配中",
              "B. 紅、粉紅、白皆可",
              "C. 位於 Rhône 左岸",
              "D. 只能使用 Cinsault"
            ],
            correct: 0,
            explanation: "Tavel 只產靜態粉紅酒，位於右岸 Gard 省，且 Grenache noir 必須出現在每款調配中。"
          }
        ]
      }
    }
  }
]
