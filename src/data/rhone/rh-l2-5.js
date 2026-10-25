/**
 * RH L2-5 Châteauneuf-du-Pape
 * 事實來源：INAO 產品規格頁與規格文件（Châteauneuf-du-Pape：inao.gouv.fr 產品頁、chateauneuf.com 的 CDC 全文）、協會 2021 年「mesures de campagne」文件、使用者 Drive 筆記（28 Southern Rhone Chateauneuf Du Pape、CMS Southern Rhone）、Inter Rhône《Chiffres clés 2025》（不含 Châteauneuf-du-Pape 的產量統計）。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。le râpé 的比例、瓶身浮雕與面積隨來源不同，已標明並不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Châteauneuf-du-Pape",
    subtitle: "13 個品種與卵石風土",
    icon: "👑",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Châteauneuf-du-Pape：基本資料",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與年份",
        content: "1936 年（Drive 筆記：5 月 15 日）成為 AOC，是法國最早的 AOC 之一；INAO 產品頁說生產者在 1923 年組成第一個葡萄種植公會"
      },
      {
        id: 2,
        icon: "🗺️",
        title: "範圍",
        content: "Vaucluse 省 5 個村莊：Châteauneuf-du-Pape、Bédarrides、Courthézon、Orange、Sorgues，位於 Rhône 左岸、Avignon 以北約 15 公里"
      },
      {
        id: 3,
        icon: "📏",
        title: "面積（來源不同）",
        content: "INAO 規格頁：約 3,200 公頃（2010 年）；Drive 筆記：逾 3,000 公頃。Inter Rhône 2025 的統計表不含本 AOC，因此課內只說「約 3,000 公頃級」，不進測驗"
      },
      {
        id: 4,
        icon: "🍷",
        title: "酒款與酒精度",
        content: "乾型紅酒與白酒；單產 35 hl/ha；最低天然酒精度 12.5%"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">教皇新堡的 AOC 與 Rhône 左岸、Vaucluse 的五個村莊綁在一起。</p></div>"
  },
  {
    title: "13 個品種（18 個條目）",
    highlights: [
      {
        id: 1,
        icon: "🔢",
        title: "13 還是 18？",
        content: "INAO 產品頁寫「18 個品種、Grenache 為主」；一般說的「13 個品種」是把同一品種的顏色變種合併計算（例如 Grenache 的黑、白、灰），兩種數法並不矛盾"
      },
      {
        id: 2,
        icon: "📋",
        title: "13 個品種清單（Drive）",
        content: "Grenache（黑／白／灰）、Mourvèdre、Syrah、Cinsault、Counoise、Bourboulenc、Roussanne、Brun Argenté（Vaccarèse）、Clairette（含 Clairette Rosé）、Muscardin、Picardan、Piquepoul（黑／白／灰）、Terret Noir"
      },
      {
        id: 3,
        icon: "🚫",
        title: "不在清單內的品種",
        content: "Marsanne 與 Viognier 不在許可清單內（CMS 教材明寫 Marsanne 不得使用）；規格頁也未見最低 Grenache 比例，僅描述 Grenache 為主導品種"
      },
      {
        id: 4,
        icon: "⚪",
        title: "白酒",
        content: "INAO 產品頁列出的白品種包括 Grenache blanc、Clairette、Roussanne；Drive 筆記提到 Beaucastel 白酒以 Roussanne 為主、Rayas 白酒以 Grenache blanc 為主（酒莊風格，不進測驗）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">所有許可品種都可用於紅酒；白、紅葡萄汁可先調配再發酵（Drive 筆記）。</p></div>"
  },
  {
    title: "生產規定與 le râpé",
    highlights: [
      {
        id: 1,
        icon: "✋",
        title: "手工採收與分選",
        content: "規格要求手工採收，禁止採收機；品質分選（在葡萄園或選果台）為強制。協會文件寫明單一採收箱上限 3,000 公斤"
      },
      {
        id: 2,
        icon: "🚜",
        title: "其他釀造限制（協會 2021 年文件，表格擷取不完整，僅供參考）",
        content: "禁止加糖（chaptalisation）、禁用色素改變添加物、禁止 40°C 以上的熱處理、禁用團聚軟木塞"
      },
      {
        id: 3,
        icon: "🗑️",
        title: "le râpé：比例有出入",
        content: "le râpé 是剔除或降級部分採收量、以防未熟葡萄的機制。Drive 筆記寫 2%；協會 2021 年文件的單產表只顯示「36 hl/ha 起失去 AOC、若產出 râpé 則 42 起」。本次無法在 INAO 文字確認百分比，課內標明並不進測驗"
      },
      {
        id: 4,
        icon: "👑",
        title: "教皇徽章瓶（未核對）",
        content: "多數酒莊使用頸部浮雕教皇徽章的專用瓶；INAO 規格頁未見此規定，屬產區協會的象徵，未逐條核對，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">可以放進測驗的是手工採收、分選、35 hl/ha 與 12.5%；le râpé 的百分比不進。</p></div>"
  },
  {
    title: "風土與歷史",
    highlights: [
      {
        id: 1,
        icon: "🪨",
        title: "卵石與其他土壤",
        content: "著名的 galets roulés 覆蓋河階地，但產區土壤遠不止卵石，還有礫石、鈣質黏土與沙質沖積土（Drive 筆記）"
      },
      {
        id: 2,
        icon: "🌬️",
        title: "Mistral",
        content: "Mistral 帶來乾燥與日照，使果實健康；卵石白天蓄熱、夜間釋放（一般說法）"
      },
      {
        id: 3,
        icon: "⛪",
        title: "教廷與 Avignon",
        content: "教廷在 Avignon 的時期為 14 世紀（1309–1377，Drive 筆記），是「新堡」與教皇之名的由來"
      },
      {
        id: 4,
        icon: "🏺",
        title: "最早的酒莊裝瓶（單一來源）",
        content: "Drive 筆記寫 Château La Nerthe 於 1785 年發售首批酒莊裝瓶的教皇新堡；僅單一來源，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">土壤、Mistral 與歷史是描述教皇新堡風格的基本語彙。</p></div>"
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
            question: "下列何者不在 Châteauneuf-du-Pape 的許可品種清單內？",
            options: [
              "A. Roussanne",
              "B. Bourboulenc",
              "C. Marsanne",
              "D. Picardan"
            ],
            correct: 2,
            explanation: "Marsanne 不在清單內；Roussanne、Bourboulenc、Picardan 都是許可品種。"
          },
          {
            type: "single",
            question: "下列何者是 Châteauneuf-du-Pape 規格的要求？",
            options: [
              "A. 手工採收，禁用採收機",
              "B. 必須使用 Syrah 至少 50%",
              "C. 只能產紅酒",
              "D. 必須在新橡木桶陳釀"
            ],
            correct: 0,
            explanation: "規格要求手工採收並禁止採收機；規格頁也未見最低品種比例，且紅酒與白酒都可生產。"
          },
          {
            type: "single",
            question: "Châteauneuf-du-Pape 位於 Rhône 的哪一岸？",
            options: [
              "A. 左岸（東側）",
              "B. 右岸（西側）",
              "C. 兩岸各半",
              "D. 在河中島"
            ],
            correct: 0,
            explanation: "在左岸、Vaucluse 省；右岸的名稱是 Lirac 與 Tavel。"
          },
          {
            type: "single",
            question: "Châteauneuf-du-Pape 的 AOC 成立於哪一年？",
            options: [
              "A. 1923",
              "B. 1936",
              "C. 1971",
              "D. 2016"
            ],
            correct: 1,
            explanation: "1936 年。1923 年是生產者組成公會的年份，不是 AOC 成立年。"
          }
        ]
      }
    }
  }
]
