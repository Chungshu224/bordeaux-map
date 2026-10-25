/**
 * RH L3-1 葡萄栽培深度與氣候變遷
 * 事實來源：Inter Rhône《Chiffres clés 2025》與詞彙表（VIFA）、Côtes du Rhône 公會 VIFA 說明頁、INAO 產品規格（Côte-Rôtie、Côtes du Rhône）、WineWithSeth（Côte-Rôtie、Côtes du Rhône）、BKWine Magazine 2022（Institut rhodanien 對 Grenache 成熟度的研究）、wein.plus 報導。
 * 坡度單位、氣候研究數字等來源有出入或僅單一來源者已在內文標明，不進測驗。詳見 RHONE_COURSE_FRAMEWORK.md「Level 3 內容說明與查證註記」。
 */

export const lessonContent = [
  {
    "type": "cover",
    "title": "葡萄栽培深度與氣候變遷",
    "subtitle": "北南栽培挑戰與適應",
    "icon": "🌡️",
    "background": "linear-gradient(135deg, #D08C2F 0%, #8a5410 100%)"
  },
  {
    "title": "北隆河：陡坡、手工與坡地經濟",
    "highlights": [
      {
        "id": 1,
        "icon": "⛰️",
        "title": "極陡坡面",
        "content": "Côte-Rôtie 最陡處：生產者協會（ODG）規格寫坡度約 60%，Inter Rhône 寫「局部超過 60°」——兩者單位不同，課內只記『極陡』，不考數字"
      },
      {
        "id": 2,
        "icon": "🧱",
        "title": "梯田與乾砌石牆",
        "content": "Côte Blonde 的易碎砂質黏土（arzel）需以乾砌石牆（cheys）支撐才能耕作；Côte Brune 則有窄梯田（chaillées）（WineWithSeth）"
      },
      {
        "id": 3,
        "icon": "🙌",
        "title": "法定手工採收與高密度",
        "content": "Côte-Rôtie 須手工採收；每公頃至少 6,000 株、行距不超過 2 公尺；整枝可用 gobelet、cordon de Royat 或單邊 Guyot，每株至多 10 芽"
      },
      {
        "id": 4,
        "icon": "🪵",
        "title": "支柱栽培（échalas）",
        "content": "傳統上每株綁一根支柱以抗風、固定陡坡上的藤蔓，現今也常改用鐵絲牽引；屬一般說法，細節因產區與酒莊而異"
      },
      {
        "id": 5,
        "icon": "💶",
        "title": "坡地經濟",
        "content": "人工多、機械難以進入、單產低（Côte-Rôtie 規格 40 hl/ha）→ 必須靠高單價與稀少性維持；價格撐不住時，梯田會被放棄"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">論述骨架：坡度 → 手工且難機械化 → 高成本與低產量 → 靠高價與稀少性維持；失敗的樣子就是梯田荒廢。</p></div>"
  },
  {
    "title": "南隆河：Grenache 老藤、缺水與 Mistral",
    "highlights": [
      {
        "id": 1,
        "icon": "🌳",
        "title": "灌叢式（gobelet）老藤",
        "content": "低矮自立、以旱作為主的 Grenache 老藤，樹冠遮蔭果串、根系深，是南部對抗熱與風的傳統答案；老藤產量低、濃縮度高（一般說法）"
      },
      {
        "id": 2,
        "icon": "🌬️",
        "title": "Mistral",
        "content": "WineWithSeth 稱 Mistral 一年約吹 120 天、日照逾 2,500 小時（單一來源，不考）。風使葡萄乾燥、減少黴病，但也會折枝、影響授粉並加劇缺水"
      },
      {
        "id": 3,
        "icon": "☔",
        "title": "降雨型態",
        "content": "夏季乾熱，雨水集中在秋季與晚冬（WineWithSeth）；暴雨可能引發侵蝕與洪水，缺水與暴雨並存是南部的特徵"
      },
      {
        "id": 4,
        "icon": "🧊",
        "title": "霜、冰雹與年度波動",
        "content": "春霜傷芽、冰雹毀果，使產量年年波動：2025 年河谷平均單產約 33 hl/ha（Inter Rhône），2021 年 Côtes du Rhône 平均 41 hl/ha，規格上限為 51 hl/ha（wein.plus；INAO 草案）"
      },
      {
        "id": 5,
        "icon": "🪨",
        "title": "石礫土與保水",
        "content": "教皇新堡的卵石（galets roulés）白天蓄熱、夜間釋放，並減少地表蒸發（一般說法）；砂土、黏土與石灰質土壤的保水能力差異，決定哪些地塊在乾旱年表現較好"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">論述骨架：風 → gobelet 低矮整枝；乾旱 → 老藤、旱作、低產量；霜與冰雹 → 年度波動，需要分散品種與地塊。</p></div>"
  },
  {
    "title": "氣候變遷：數據怎麼說",
    "highlights": [
      {
        "id": 1,
        "icon": "📅",
        "title": "物候提前",
        "content": "Institut rhodanien 追蹤 Grenache 自 1969 年的成熟（BKWine Magazine，2022）：萌芽與開花提早 10–15 天，採收常提早約 20 天"
      },
      {
        "id": 2,
        "icon": "🍷",
        "title": "潛在酒精度上升",
        "content": "1990 年前採收時約 12.5%（9 月 1 日約 10%）；現在採收時常超過 14%（9 月初約 12.5%）；2019、2020 年 9 月中旬就超過 15%"
      },
      {
        "id": 3,
        "icon": "🍋",
        "title": "酸度下降、果粒變小",
        "content": "總酸下降約 1.95 g/L；200 顆果粒重量由 2000 年的 380–400 g 降到 2019 年的 280 g，意味著產量更低"
      },
      {
        "id": 4,
        "icon": "🧪",
        "title": "成因與但書",
        "content": "研究者將變化連結到花期至轉色期的高溫，以及相對濕度高於 60% 的天數減少；同時也承認部分提早來自栽培知識進步，並非全是氣候"
      },
      {
        "id": 5,
        "icon": "⚖️",
        "title": "風格後果",
        "content": "Côtes du Rhône 紅酒的酒精度常見 13–14.5%（WineWithSeth）。更高酒精、較低酸度、糖分成熟與酚類成熟脫鉤，使採收時機、全串或去梗等決定更關鍵"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">這些數字來自單一研究（二手報導），課內標明來源、不進測驗；考試要掌握『方向』：提早、糖高、酸低、果粒小、產量降。</p></div>"
  },
  {
    "title": "適應策略：品種、栽培與永續",
    "highlights": [
      {
        "id": 1,
        "icon": "🧬",
        "title": "VIFA 適應性品種",
        "content": "Côtes du Rhône 與 Villages 試驗中的 VIFA：白 Carignan blanc、Floréal、Rolle（Vermentino），紅 Vidoc（Inter Rhône 詞彙表，2025 年 4 月）"
      },
      {
        "id": 2,
        "icon": "📏",
        "title": "兩個不同的上限",
        "content": "每個酒莊至多占葡萄園面積 5%、最終調配至多 10%；觀察期 10 年，期滿再決定是否正式納入。有來源只寫 10% 或只寫 5%，其實是兩個不同的限制"
      },
      {
        "id": 3,
        "icon": "🛡️",
        "title": "抗病品種",
        "content": "Floréal、Vidoc（以及 Costières de Nîmes 試驗的 Souvignier gris）是為了抗露菌病與白粉病，可減少噴藥；Costières de Nîmes 另有自己的 VIFA 名單"
      },
      {
        "id": 4,
        "icon": "🌱",
        "title": "有機與 HVE",
        "content": "2025 年採收：有機約占面積 26%、產量約 24%（封面圖表寫 25%）；HVE3 約占面積 34%、產量 37%（Inter Rhône《Chiffres clés 2025》）。概略值，不考"
      },
      {
        "id": 5,
        "icon": "🧭",
        "title": "其他手段",
        "content": "更高海拔與北向園、覆蓋作物與樹冠管理、延後修剪；wein.plus 報導也提到耐熱耐旱的白品種（如 Picpoul、Bourboulenc）被視為適合（部分手段為一般說法）"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">論述骨架：先講風險（熱、旱、酒精上升），再講對策（品種、栽培、永續），最後談取捨：傳統風格與 AOC 品種規定 vs 適應性。</p></div>"
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
            "question": "Côte-Rôtie 對栽培與採收的規定是？",
            "options": [
              "A. 可機械採收，每公頃約 2,500 株",
              "B. 須手工採收，每公頃至少 6,000 株",
              "C. 須機械採收以降低成本",
              "D. 無任何栽培規定"
            ],
            "correct": 1,
            "explanation": "Côte-Rôtie 須手工採收，並要求高種植密度（每公頃至少 6,000 株）。"
          },
          {
            "type": "single",
            "question": "Côtes du Rhône 的 VIFA 試驗，對每個酒莊的上限是？",
            "options": [
              "A. 面積 1%、調配 2%",
              "B. 面積 20%、調配 50%",
              "C. 面積 5%、調配 10%",
              "D. 沒有上限"
            ],
            "correct": 2,
            "explanation": "面積至多 5%、調配至多 10%，觀察期 10 年。"
          },
          {
            "type": "single",
            "question": "下列何者是近數十年南隆河 Grenache 成熟度變化的『方向』？",
            "options": [
              "A. 採收提早、潛在酒精上升、酸度下降",
              "B. 採收延後、酒精下降、酸度上升",
              "C. 採收提早、酒精下降、酸度上升",
              "D. 各項目都沒有變化"
            ],
            "correct": 0,
            "explanation": "Institut rhodanien 的研究顯示物候提前、糖分更高、總酸下降（具體數字僅供參考）。"
          },
          {
            "type": "single",
            "question": "Côtes du Rhône 的 VIFA 試驗品種中，唯一的紅品種是？",
            "options": [
              "A. Rolle",
              "B. Floréal",
              "C. Carignan blanc",
              "D. Vidoc"
            ],
            "correct": 3,
            "explanation": "Vidoc 是紅品種；Rolle、Floréal、Carignan blanc 是白品種。"
          }
        ]
      }
    }
  }
]
