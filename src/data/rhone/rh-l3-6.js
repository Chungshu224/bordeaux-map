/**
 * RH L3-6 Diploma 品飲與論述
 * 內容性質：教學示範。品飲筆記為「虛構的示範酒款」，用 WSET 式 SAT（Systematic Approach to Tasting）段落示範寫法，並非真實酒款的評分；論述範本是 MW 風格題的思考骨架，引用的事實均來自 rh-l2-*、rh-l3-1…5 已查證內容。
 * 考試形式（題數、時間、評分標準、SAT 用語細節）以 WSET／IMW 官方最新規格為準，本課不引用具體題數與時間。
 */

export const lessonContent = [
  {
    "type": "cover",
    "title": "Diploma 品飲與論述",
    "subtitle": "盲品線索與 MW 風格論述",
    "icon": "✍️",
    "background": "linear-gradient(135deg, #D08C2F 0%, #8a5410 100%)"
  },
  {
    "title": "SAT 品飲筆記的結構",
    "highlights": [
      {
        "id": 1,
        "icon": "👁️",
        "title": "外觀",
        "content": "澄清度、顏色強度、顏色（含邊緣色）。隆河線索：Grenache 偏淡、邊緣早現橘紅；Syrah、Mourvèdre 偏深、紫調"
      },
      {
        "id": 2,
        "icon": "👃",
        "title": "香氣",
        "content": "狀態（是否健康）、強度、香氣特徵（果香、花香、香料、橡木、陳年）、發展程度。分類寫：一級果香／橡木與釀造／陳年香氣"
      },
      {
        "id": 3,
        "icon": "👅",
        "title": "口感",
        "content": "甜度、酸度、單寧、酒精度、酒體、風味強度、風味特徵、餘韻。隆河紅酒的關鍵是酸度＋單寧＋酒精三角"
      },
      {
        "id": 4,
        "icon": "🎯",
        "title": "結論",
        "content": "品質評價（需以平衡、長度、強度與複雜度為依據）、適飲期或陳年潛力；若題目要求，再推論產區、品種與風格"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">提醒：SAT 用語表與評分方式會調整，請以 WSET 官方最新規格與考生手冊為準；以下示範僅說明寫法。</p></div>"
  },
  {
    "title": "示範筆記 A：北隆河 Syrah（虛構酒款）",
    "highlights": [
      {
        "id": 1,
        "icon": "👁️",
        "title": "外觀",
        "content": "澄清；顏色深；紫紅色，邊緣仍帶紫色"
      },
      {
        "id": 2,
        "icon": "👃",
        "title": "香氣",
        "content": "乾淨；強度明顯；黑胡椒、黑莓、黑醋栗、紫羅蘭、煙燻與培根油脂；少量橡木帶來的雪松與香草；年輕"
      },
      {
        "id": 3,
        "icon": "👅",
        "title": "口感",
        "content": "乾；酸度中至高；單寧高、顆粒感但已有細緻度；酒精度中至高；酒體飽滿；風味強度明顯，黑果、胡椒、煙燻、橡木香料；餘韻長"
      },
      {
        "id": 4,
        "icon": "🎯",
        "title": "結論",
        "content": "品質：非常好——平衡、長餘韻、複雜度足夠；可立即飲用，但陳年潛力明顯（年輕且單寧結實）"
      },
      {
        "id": 5,
        "icon": "🧭",
        "title": "推論",
        "content": "胡椒＋紫羅蘭＋煙燻＋偏高酸度與單寧 → Syrah、涼爽至溫和的氣候 → 北隆河（例如 Crozes-Hermitage、Cornas 或 Saint-Joseph 等級的風格）；需說明排除南隆河的理由（酸度、胡椒、非甜熟的紅色水果）"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">推論要寫成『證據 → 判斷 → 排除理由』，而不是只丟出產區名稱。</p></div>"
  },
  {
    "title": "示範筆記 B：南隆河 Grenache 混釀（虛構酒款）",
    "highlights": [
      {
        "id": 1,
        "icon": "👁️",
        "title": "外觀",
        "content": "澄清；顏色中等；石榴紅，邊緣略帶橘調"
      },
      {
        "id": 2,
        "icon": "👃",
        "title": "香氣",
        "content": "乾淨；強度明顯；成熟紅櫻桃、草莓醬、乾燥香草（garrigue）、甘草與黑胡椒；少量皮革與乾燥水果等發展香氣；已進入發展期"
      },
      {
        "id": 3,
        "icon": "👅",
        "title": "口感",
        "content": "乾；酸度中；單寧中；酒精度高；酒體飽滿；風味強度明顯，紅色水果、香料、草本；餘韻中至長"
      },
      {
        "id": 4,
        "icon": "🎯",
        "title": "結論",
        "content": "品質：好——果味與香料表現良好、酒精度略突出使平衡稍打折；適合現在飲用，亦可再陳放數年"
      },
      {
        "id": 5,
        "icon": "🧭",
        "title": "推論",
        "content": "淡色＋橘調邊緣＋紅色水果＋garrigue＋高酒精 → Grenache 為主、溫暖地中海氣候 → 南隆河（例如 Côtes du Rhône Villages 或 Gigondas、Châteauneuf-du-Pape 等級的風格）；用酸度、單寧與酒精度的平衡區分層級"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">北隆河 vs 南隆河的快速對照：Syrah 的胡椒／煙燻／酸度，對 Grenache 的紅果／香草／酒精。</p></div>"
  },
  {
    "title": "MW 風格論述：三個示範題",
    "highlights": [
      {
        "id": 1,
        "icon": "🔥",
        "title": "題一：氣候變遷下 Grenache 的角色",
        "content": "骨架：定義問題 → 優勢（耐旱、老藤、南部基底）→ 風險（酒精上升、酸度下降、色淡易氧化）→ 對策（更高海拔、採收時機、混釀、VIFA 與非 VIFA 品種調整）→ 結論：Grenache 仍是核心，但角色會從『單一主角』轉向『被品種組合與栽培補強』。證據：Institut rhodanien 的物候與酒精數據（單一來源，需標明）"
      },
      {
        "id": 2,
        "icon": "🧩",
        "title": "題二：單一品種 vs 混釀",
        "content": "骨架：兩種模式的邏輯（Cornas 100% Syrah 呈現地塊；教皇新堡 13 品種分散風險、堆疊複雜度）→ 市場視角（品種標示易懂 vs 產區名稱溝通）→ 氣候視角（混釀提供彈性）→ 結論要有立場並承認反例（Côte-Rôtie 是單一品種核心但容許 Viognier）"
      },
      {
        "id": 3,
        "icon": "📈",
        "title": "題三：cru 數量擴張的利弊",
        "content": "骨架：事實基礎（cru 由 Gigondas 1971 起陸續升格，2024 年 Laudun 成為第 18 個）→ 利（價值提升、品質誘因、辨識度）→ 弊（稀釋 cru 名聲、消費者混淆、與 Villages 地名的邊界）→ 比較（勃艮地以地塊細分，隆河以名稱升格）→ 結論：需要明確的標準與持續的品質審查"
      },
      {
        "id": 4,
        "icon": "✍️",
        "title": "作答要訣",
        "content": "先答題目（立場）→ 證據（附年份與來源）→ 反方 → 結論；每段一個論點；有數字時標明年份，有出入的數字不要當作論證支柱"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">考試形式（題型、題數、時間與評分）每年可能調整，請以 WSET 與 IMW 官方最新規格為準；本課只示範思考骨架。</p></div>"
  },
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "🧠 知識檢測",
        "isFinalExam": false,
        "passScore": 60,
        "questions": [
          {
            "type": "single",
            "question": "SAT 品飲筆記的標準順序是？",
            "options": [
              "A. 口感 → 結論 → 外觀 → 香氣",
              "B. 外觀 → 香氣 → 口感 → 結論",
              "C. 香氣 → 外觀 → 結論 → 口感",
              "D. 結論 → 外觀 → 口感 → 香氣"
            ],
            "correct": 1,
            "explanation": "外觀 → 香氣 → 口感 → 結論；推論產區與品種建立在結論段。"
          },
          {
            "type": "single",
            "question": "黑胡椒、紫羅蘭、煙燻、酸度中至高與明顯單寧，最可能指向？",
            "options": [
              "A. 南隆河 Grenache 混釀",
              "B. 北隆河 Syrah",
              "C. Tavel 粉紅",
              "D. Muscat de Beaumes-de-Venise"
            ],
            "correct": 1,
            "explanation": "這是北隆河 Syrah 的典型線索組合；推論時仍要說明排除南隆河的理由。"
          },
          {
            "type": "single",
            "question": "2024 年成為第 18 個 cru 的是？",
            "options": [
              "A. Cairanne",
              "B. Rasteau",
              "C. Laudun",
              "D. Vinsobres"
            ],
            "correct": 2,
            "explanation": "Laudun，INAO 全國委員會於 2024 年 9 月 11 日通過。"
          },
          {
            "type": "single",
            "question": "MW 風格論述題的較佳作答方式是？",
            "options": [
              "A. 只列出事實清單，不表態",
              "B. 先答題目立場，再附年份與來源的證據、處理反方、再下結論",
              "C. 背誦教材整段文字",
              "D. 以有出入的數字作為論證支柱"
            ],
            "correct": 1,
            "explanation": "論述要有立場、證據、反方與結論；有出入的數字要標明而非當作支柱。"
          }
        ]
      }
    }
  }
]
