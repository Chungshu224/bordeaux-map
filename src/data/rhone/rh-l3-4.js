/**
 * RH L3-4 法規深度與標籤判讀
 * 事實來源：INAO 產品規格（Côtes du Rhône 2018 年 9 月版與 2026 年修訂草案、Villages 草案，詳見 rh-l2-1）、Inter Rhône 詞彙表（IGP 條目）、歐盟葡萄酒標示通則（Vin de France 可標示品種與年份）。
 * 草案數字（單產、最低酒精度）僅供參考、不進測驗；IGP 名單取自 Inter Rhône 詞彙表，各 IGP 的品種與單產規定未核對。詳見 RHONE_COURSE_FRAMEWORK.md「Level 3 內容說明與查證註記」。
 */

export const lessonContent = [
  {
    "type": "cover",
    "title": "法規深度與標籤判讀",
    "subtitle": "Côtes du Rhône 家族與 IGP",
    "icon": "🏷️",
    "background": "linear-gradient(135deg, #D08C2F 0%, #8a5410 100%)"
  },
  {
    "title": "命名階層與標籤寫法",
    "highlights": [
      {
        "id": 1,
        "icon": "🔺",
        "title": "金字塔對照標籤",
        "content": "『Côtes du Rhône』→『Côtes du Rhône Villages』→『Côtes du Rhône Villages + 地名』→ cru 單獨以名稱出現（如 Gigondas）。標籤上的字串就是分級的直接證據"
      },
      {
        "id": 2,
        "icon": "📍",
        "title": "Villages＋地名仍是 Villages",
        "content": "21 個可加註的名稱（如 Plan de Dieu、Sablet）仍屬 Côtes du Rhône Villages 這個 AOC；cru 才是獨立 AOC，標籤上不再寫 Côtes du Rhône Villages"
      },
      {
        "id": 3,
        "icon": "⏳",
        "title": "升格造成的標籤變化",
        "content": "Cairanne 在 2016 年前可標為 Côtes du Rhône Villages Cairanne，之後是 cru；Laudun 在 2024 年份成為首個 cru 年份。判讀年份時要同時看標籤字串"
      },
      {
        "id": 4,
        "icon": "🧮",
        "title": "不能只看一個字",
        "content": "『Rhône』『Côtes du Rhône』『Côtes du Rhône Villages』只差一兩個字，但比例、範圍與單產規定都不同；考試中常以此設陷阱"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">判讀順序：先找名稱（cru 或 Côtes du Rhône 家族），再看『Villages』與地名，最後看年份與裝瓶者。</p></div>"
  },
  {
    "title": "比例規定與『計算單位』陷阱",
    "highlights": [
      {
        "id": 1,
        "icon": "🧮",
        "title": "Côtes du Rhône",
        "content": "Grenache ≥30%（Montélimar 緯線以北例外）、Syrah＋Mourvèdre ≥20%（投產樹自 2022 年採收起）、主要品種（Grenache、Syrah、Mourvèdre）合計 ≥70%（INAO 2018 年 9 月版）"
      },
      {
        "id": 2,
        "icon": "📈",
        "title": "Villages",
        "content": "Grenache ≥40%、Syrah＋Mourvèdre ≥25%、主要品種 ≥80%——比 Côtes du Rhône 更嚴，範圍僅限南部"
      },
      {
        "id": 3,
        "icon": "🏡",
        "title": "以酒莊整體種植計算",
        "content": "比例以酒莊整體種植（encépagement）為計算單位，而非每一瓶酒的實際調配。答題時要寫『酒莊整體種植』，不要寫成『每瓶酒的調配比例』"
      },
      {
        "id": 4,
        "icon": "⚠️",
        "title": "不進測驗的草案數字",
        "content": "Côtes du Rhône 單產 51 hl/ha（上限 60）、最低酒精度 11%（北部 10.5%）；Villages 單產 44 hl/ha（加註地名 41）、酒精度 12%（部分紅酒 12.5%）——多出自修訂草案或單一來源，課內標明、不考"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">比例題的作答公式：寫出數字＋寫出『酒莊整體種植』＋寫出適用年份（2022 年採收起）。</p></div>"
  },
  {
    "title": "IGP 與 Vin de France",
    "highlights": [
      {
        "id": 1,
        "icon": "🧭",
        "title": "IGP 的位置",
        "content": "IGP（Indication Géographique Protégée，英文 PGI）是歐盟的中間層，前身是 Vin de Pays。規則比 AOP 寬鬆，讓生產者在 AOC 規格之外選擇品種與風格"
      },
      {
        "id": 2,
        "icon": "🗺️",
        "title": "隆河相關 IGP",
        "content": "Inter Rhône 詞彙表列出的前 Vin de Pays 包括：Gard、Vaucluse、Méditerranée、Ardèche、Drôme、Coteaux de l'Ardèche、Comté de Grignan、Principauté d'Orange、Aigues、Coteaux de Montélimar、Collines rhodaniennes、Coteaux des Baronnies 等（Méditerranée 範圍跨多個省份）"
      },
      {
        "id": 3,
        "icon": "🍷",
        "title": "為什麼用 IGP",
        "content": "常見動機：種植 AOC 規格之外的品種或地塊、更高的單產彈性、或想以品種名稱銷售；代價是少了 AOC 的產區聲譽（一般說法；各 IGP 的品種與單產規定未逐一核對，不考）"
      },
      {
        "id": 4,
        "icon": "🏷️",
        "title": "Vin de France",
        "content": "沒有地理標示的法國葡萄酒類別，但可在標籤上寫品種與年份（歐盟規則）。可由跨區原料調配，是品牌化平價酒與實驗性酒款常用的類別"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">回答層級題時，把 AOP／IGP／Vin de France 當三個不同的法規工具：保護範圍、自由度與市場定位都不同。</p></div>"
  },
  {
    "title": "標籤判讀練習",
    "highlights": [
      {
        "id": 1,
        "icon": "1️⃣",
        "title": "『Côtes du Rhône Villages Plan de Dieu』",
        "content": "Villages 加註地名（21 個之一）；不是 cru。推論：Grenache ≥40%、Syrah＋Mourvèdre ≥25% 的酒莊規定，南隆河，中價位"
      },
      {
        "id": 2,
        "icon": "2️⃣",
        "title": "『Cairanne』",
        "content": "獨立 cru（2016 年起）；標籤上不再寫 Côtes du Rhône Villages。若看到 2015 年以前的『Côtes du Rhône Villages Cairanne』，屬升格前的標示"
      },
      {
        "id": 3,
        "icon": "3️⃣",
        "title": "『IGP Collines Rhodaniennes Syrah』",
        "content": "IGP 層級，標示品種；產區位於隆河谷北部一帶的 IGP，不能寫成 AOC 名稱（Syrah 品種資訊在 IGP 可標示，各 IGP 規定未逐一核對）"
      },
      {
        "id": 4,
        "icon": "4️⃣",
        "title": "『Vin de France Grenache 2022』",
        "content": "沒有地理標示，但可標品種與年份；不能推論為某個隆河 AOC。判讀時看價格、酒精度與裝瓶者再判斷風格"
      },
      {
        "id": 5,
        "icon": "5️⃣",
        "title": "裝瓶資訊與『老藤』",
        "content": "『Mis en bouteille au domaine／au château』表示酒莊自行裝瓶，『négociant』則表示買果或買酒調配；『Vieilles vignes』在多數 AOC 沒有統一的法定年限，以各 AOC 規格為準（一般說法）"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">練習方法：遮住價格，只用標籤字串回答『層級、可能的比例規定、風格與價位』。</p></div>"
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
            "question": "標籤寫 Côtes du Rhône Villages Plan de Dieu，代表？",
            "options": [
              "A. 獨立 cru",
              "B. Villages 加註地名，仍是 Côtes du Rhône Villages AOC",
              "C. IGP 酒款",
              "D. Vin de France"
            ],
            "correct": 1,
            "explanation": "Plan de Dieu 是 21 個可加註地名的村莊之一；cru 才是獨立 AOC。"
          },
          {
            "type": "single",
            "question": "Côtes du Rhône 的 Grenache、Syrah＋Mourvèdre 最低比例是以什麼為計算單位？",
            "options": [
              "A. 每瓶酒的實際調配",
              "B. 酒莊整體種植（encépagement）",
              "C. 全產區平均",
              "D. 只算採收當年的葡萄"
            ],
            "correct": 1,
            "explanation": "INAO 規格以酒莊整體種植計算；因此單一酒款的調配可與整體比例不同。"
          },
          {
            "type": "single",
            "question": "Vin de France 的標籤可以做到什麼？",
            "options": [
              "A. 標示 AOC 名稱",
              "B. 標示村莊名與 Premier Cru",
              "C. 不可標示品種與年份",
              "D. 沒有地理標示，但可標示品種與年份"
            ],
            "correct": 3,
            "explanation": "歐盟規則下，Vin de France 無地理標示，但可標品種與年份。"
          },
          {
            "type": "single",
            "question": "下列何者是正確的 cru 標籤寫法？",
            "options": [
              "A. Côtes du Rhône Villages Gigondas",
              "B. Gigondas（單獨作為 AOC 名稱）",
              "C. IGP Gigondas",
              "D. Vin de France Gigondas"
            ],
            "correct": 1,
            "explanation": "cru 是獨立 AOC，標籤使用自己的名稱，不再寫 Côtes du Rhône Villages。"
          }
        ]
      }
    }
  }
]
