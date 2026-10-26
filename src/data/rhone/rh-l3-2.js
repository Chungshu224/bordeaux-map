/**
 * RH L3-2 釀造與風格
 * 事實來源：INAO 產品規格（Côte-Rôtie、Condrieu、Hermitage、Châteauneuf-du-Pape、VDN、Clairette de Die，詳見 rh-l2-*）、WineWithSeth（Côte-Rôtie）。
 * 概念層的風格說明（全串效果、Grenache 的氧化傾向、GSM 分工、白酒作法）屬「一般說法」，已在內文標示；具體比例與年限以酒莊與現行規格為準，不進測驗。
 */

export const lessonContent = [
  {
    "type": "cover",
    "title": "釀造與風格",
    "subtitle": "釀造選擇如何決定風格",
    "icon": "🏭",
    "background": "linear-gradient(135deg, #D08C2F 0%, #8a5410 100%)"
  },
  {
    "title": "北隆河紅酒：Syrah 的釀造選擇",
    "highlights": [
      {
        "id": 1,
        "icon": "🍇",
        "title": "全串 vs 去梗",
        "content": "Côte-Rôtie 可全串或去梗發酵（WineWithSeth）。一般說法：全串帶來莖梗單寧、香料感與較緊的質地，去梗則較圓潤、果味更直接；這是風格選擇，不是法規"
      },
      {
        "id": 2,
        "icon": "🌸",
        "title": "Viognier 共發酵",
        "content": "Viognier 可混植於 Syrah 地塊至多 20% 的樹；兩品種須以混合後的葡萄一起釀造（INAO／WineWithSeth）。超過 10% 罕見，混植較常見於 Côte Blonde。一般說法：增添花香並有助色澤穩定"
      },
      {
        "id": 3,
        "icon": "🛢️",
        "title": "容器與熟成",
        "content": "可用不鏽鋼、水泥、陶罐或大木桶發酵；多數生產者以小橡木桶（barrique）熟成 12–48 個月；禁止使用橡木片（WineWithSeth）"
      },
      {
        "id": 4,
        "icon": "⚖️",
        "title": "風格光譜",
        "content": "傳統取向（全串、舊大桶、較長浸皮）與現代取向（去梗、較多新橡木）並存；一般說法：Côte-Rôtie 偏香氣與絲滑，Hermitage、Cornas 偏結構與陳年潛力"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">寫品飲筆記時，從『全串／去梗＋橡木』的痕跡推論釀造，再連結風格，不要只靠品牌印象。</p></div>"
  },
  {
    "title": "南隆河紅酒：Grenache 與 GSM 混釀",
    "highlights": [
      {
        "id": 1,
        "icon": "🍒",
        "title": "Grenache 的氧化傾向",
        "content": "一般說法：Grenache 皮薄、色素與單寧偏低，酒色偏淡且容易氧化（較早出現磚紅色與熟成風味），所以常搭配 Syrah、Mourvèdre 補足色澤與結構，並需謹慎控制氧氣"
      },
      {
        "id": 2,
        "icon": "🏺",
        "title": "水泥槽、大木桶與新橡木桶",
        "content": "一般說法：水泥槽與大木桶（foudre、demi-muid）較能保留 Grenache 的果味與質地，新小橡木桶容易蓋過品種個性；實際作法因酒莊而異"
      },
      {
        "id": 3,
        "icon": "🎭",
        "title": "GSM 的角色分工",
        "content": "Grenache：酒體、酒精、紅色漿果與甜香料；Syrah：色澤、深色水果、胡椒與骨架；Mourvèdre：單寧、肉質與結構，晚熟、需要溫暖長生長季（一般說法）"
      },
      {
        "id": 4,
        "icon": "👑",
        "title": "教皇新堡的規格",
        "content": "手工採收與分選為法規強制；18 個條目（13 個品種）；單產 35 hl/ha；最低天然酒精度 12.5%（INAO）。酒精度偏高是常態，也是考試常問的風格特徵"
      },
      {
        "id": 5,
        "icon": "🧩",
        "title": "混釀的邏輯",
        "content": "不同成熟期與抗性的品種互補、分散年度風險；南部 cru 多以 Grenache 為基礎並設下下限（例如 Gigondas、Vacqueyras 至少 50%）"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">論述骨架：Grenache 的優點（成熟度、果味、耐旱）與缺點（淡色、氧化、高酒精）→ 混釀與容器選擇如何補強。</p></div>"
  },
  {
    "title": "白酒與粉紅酒",
    "highlights": [
      {
        "id": 1,
        "icon": "🍑",
        "title": "Condrieu：Viognier 100%",
        "content": "最低天然酒精度 11.5%（INAO）。Viognier 低酸、高酒精，成熟度與清新感的平衡是核心；橡木與酒渣攪拌依酒莊而異（一般說法）"
      },
      {
        "id": 2,
        "icon": "🥛",
        "title": "Marsanne／Roussanne 白酒",
        "content": "用於 Hermitage、Saint-Joseph、Crozes-Hermitage、Saint-Péray。一般說法：Marsanne 圓潤、酸度偏低；Roussanne 酸度與香氣較緊；常以橡木桶發酵與熟成並接觸酒渣，是否做 MLF 依風格而定"
      },
      {
        "id": 3,
        "icon": "🧊",
        "title": "Côtes du Rhône 白酒",
        "content": "以 Grenache blanc、Clairette、Bourboulenc、Roussanne、Viognier 等為主；一般說法：為保留清新度多採低溫發酵與不鏽鋼，常抑制 MLF"
      },
      {
        "id": 4,
        "icon": "🌹",
        "title": "Tavel 與 Lirac 粉紅",
        "content": "Tavel 只產粉紅（Grenache noir 必在調配中），色澤較深、酒體較厚；粉紅通常以短時間浸皮或直接壓榨取得色澤（一般說法）"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">白酒題常考：品種（Viognier／Marsanne／Roussanne／Grenache blanc）× 橡木 × MLF × 酸度，連到風格與價格。</p></div>"
  },
  {
    "title": "加烈、甜酒與氣泡",
    "highlights": [
      {
        "id": 1,
        "icon": "🍯",
        "title": "VDN：mutage 加烈",
        "content": "以 96% vol. 以上的中性酒精，加入葡萄汁體積的 5–10% 終止發酵並保留天然糖；Muscat de Beaumes-de-Venise 用 Muscat à petits grains，Rasteau VDN 以 Grenache 為主，葡萄汁天然糖 ≥252 g/L"
      },
      {
        "id": 2,
        "icon": "🕰️",
        "title": "還原式 vs 氧化式熟成",
        "content": "一般說法：Rasteau 的 grenat 類型保留新鮮紅色水果，tuilé／ambré 類型經氧化熟成呈現乾果、堅果與焦糖；殘糖與最短陳年年限來源有出入，不考"
      },
      {
        "id": 3,
        "icon": "🍇",
        "title": "Hermitage vin de paille",
        "content": "葡萄須乾燥至少 45 天，壓榨時含糖超過 350 g/L；極小量、極甜的特殊酒款（INAO）"
      },
      {
        "id": 4,
        "icon": "🫧",
        "title": "Clairette de Die",
        "content": "ancestrale（Muscat ≥75%）是單次發酵於瓶中完成、瓶陳至少 4 個月；二次瓶內發酵版本僅用 Clairette、至少 9 個月（INAO）。Crémant de Die 為 1993 年的氣泡 AOC"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">小產量特殊酒款是 Diploma 常見的『辨識題』：先判斷加烈、乾燥或單次發酵，再回推甜度與風格。</p></div>"
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
            "question": "Côte-Rôtie 中 Viognier 與 Syrah 的處理規定是？",
            "options": [
              "A. Viognier 須在發酵後才加入 Syrah",
              "B. Viognier 至多占 Syrah 地塊 20% 的樹，須混合後一起釀造",
              "C. Viognier 至少須占 50%",
              "D. 完全不得使用 Viognier"
            ],
            "correct": 1,
            "explanation": "Viognier 至多 20%（Syrah 至少 80%），且與 Syrah 一起釀造；實務上超過 10% 罕見。"
          },
          {
            "type": "single",
            "question": "VDN（如 Muscat de Beaumes-de-Venise）的中性酒精用量約為葡萄汁體積的？",
            "options": [
              "A. 1–2%",
              "B. 5–10%",
              "C. 20–25%",
              "D. 35–40%"
            ],
            "correct": 1,
            "explanation": "5–10%（96% vol. 以上），終止發酵並保留天然糖。"
          },
          {
            "type": "single",
            "question": "為什麼 Grenache 常與 Syrah、Mourvèdre 混釀？",
            "options": [
              "A. Grenache 色素與單寧偏低、易氧化，需補色澤與結構",
              "B. Grenache 酸度過高需要降酸",
              "C. 法規禁止單一品種",
              "D. Grenache 成熟太晚無法採收"
            ],
            "correct": 0,
            "explanation": "Grenache 皮薄、色淡、易氧化且酒精度高，混入 Syrah 與 Mourvèdre 可補色澤、單寧與結構（一般說法）。"
          },
          {
            "type": "single",
            "question": "Clairette de Die 的 ancestrale 製法特徵是？",
            "options": [
              "A. 二次發酵於大型不鏽鋼槽",
              "B. 單次發酵於瓶中完成，以 Muscat 為主",
              "C. 加烈後裝瓶",
              "D. 葡萄乾燥 45 天"
            ],
            "correct": 1,
            "explanation": "ancestrale：Muscat ≥75%、單次發酵在瓶內完成、瓶陳至少 4 個月。"
          }
        ]
      }
    }
  }
]
