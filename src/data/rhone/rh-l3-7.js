/**
 * RH L3-7 Level 3 綜合評量
 * 事實來源：同 rh-l3-1 至 rh-l3-6（INAO 產品規格、Inter Rhône《Chiffres clés 2025》與詞彙表、Cotes du Rhône 公會 VIFA 頁面等）。
 * 綜合評量只考已定案、來源一致的項目；氣候研究數字、價格參考、通路占比、草案單產與酒精度等有出入或單一來源的內容刻意不考。詳見 RHONE_COURSE_FRAMEWORK.md「Level 3 內容說明與查證註記」。
 */

export const lessonContent = [
  {
    "type": "cover",
    "title": "Level 3 綜合評量",
    "subtitle": "Diploma／MW 模擬題",
    "icon": "🏆",
    "background": "linear-gradient(135deg, #D08C2F 0%, #8a5410 100%)"
  },
  {
    "title": "Level 3 重點回顧",
    "highlights": [
      {
        "id": 1,
        "icon": "🌡️",
        "title": "栽培與氣候",
        "content": "Côte-Rôtie 手工採收、每公頃 ≥6,000 株；南部 Grenache 老藤、Mistral、霜與冰雹；氣候變遷方向：提早、酒精升、酸度降；VIFA：面積 ≤5%、調配 ≤10%、觀察期 10 年"
      },
      {
        "id": 2,
        "icon": "🏭",
        "title": "釀造與風格",
        "content": "Viognier 與 Syrah 共發酵（≤20% 的樹）；Grenache 易氧化、與 Syrah／Mourvèdre 互補；VDN 加烈 5–10%；vin de paille 乾燥 ≥45 天；ancestrale 單次瓶內發酵"
      },
      {
        "id": 3,
        "icon": "⚖️",
        "title": "比較與法規",
        "content": "隆河 cru＝獨立 AOC，勃艮地在村內分等；比例以酒莊整體種植計算；Vin de France 無地理標示但可標品種與年份；cru 標籤不寫 Villages"
      },
      {
        "id": 4,
        "icon": "📈",
        "title": "產業與論述",
        "content": "Inter Rhône 是 interprofession；2024/25 散裝約 64%；出口量前三：比利時、英國、美國（2025）；Laudun 為 2024 年第 18 個 cru；論述＝立場＋證據＋反方＋結論"
      }
    ],
    "content": "<div class=\"content-overview\"><p class=\"lead-text\">完成評量即完成 Level 3；請以官方最新規格確認考試形式。</p></div>"
  },
  {
    "component": "QuizSlide",
    "componentProps": {
      "slide": {
        "title": "📋 Level 3 綜合評量",
        "isFinalExam": true,
        "passScore": 60,
        "questions": [
          {
            "type": "single",
            "question": "Côte-Rôtie 的採收與種植密度規定是？",
            "options": [
              "A. 手工採收，每公頃至少 6,000 株",
              "B. 機械採收，每公頃 3,000 株",
              "C. 任意採收方式，無密度規定",
              "D. 只能夜間機械採收"
            ],
            "correct": 0,
            "explanation": "手工採收，每公頃至少 6,000 株。"
          },
          {
            "type": "single",
            "question": "Côtes du Rhône 的 VIFA 試驗，酒莊的面積與調配上限是？",
            "options": [
              "A. 面積 5%、調配 10%",
              "B. 面積 10%、調配 5%",
              "C. 面積 25%、調配 50%",
              "D. 無上限"
            ],
            "correct": 0,
            "explanation": "面積 ≤5%、調配 ≤10%，觀察期 10 年。"
          },
          {
            "type": "single",
            "question": "VIFA 試驗品種中唯一的紅品種是？",
            "options": [
              "A. Floréal",
              "B. Rolle",
              "C. Vidoc",
              "D. Carignan blanc"
            ],
            "correct": 2,
            "explanation": "Vidoc 是紅品種，其餘三個是白品種。"
          },
          {
            "type": "single",
            "question": "氣候變遷對南隆河 Grenache 的主要影響方向是？",
            "options": [
              "A. 採收提早、潛在酒精上升、酸度下降",
              "B. 採收延後、酒精下降",
              "C. 酸度上升、果粒變大",
              "D. 沒有變化"
            ],
            "correct": 0,
            "explanation": "方向是提早、糖高、酸低（具體數字僅供參考）。"
          },
          {
            "type": "single",
            "question": "Côte-Rôtie 中 Viognier 與 Syrah 的規定是？",
            "options": [
              "A. Viognier 可混植至 Syrah 地塊樹的 20%，兩者混合後一起釀造",
              "B. Viognier 至少 50%",
              "C. Viognier 完全禁止",
              "D. Viognier 須單獨發酵後加入"
            ],
            "correct": 0,
            "explanation": "Syrah ≥80%、Viognier 至多 20% 的樹，且一起釀造。"
          },
          {
            "type": "single",
            "question": "VDN（如 Muscat de Beaumes-de-Venise）加烈的中性酒精用量是葡萄汁體積的？",
            "options": [
              "A. 1–2%",
              "B. 5–10%",
              "C. 20–25%",
              "D. 35–40%"
            ],
            "correct": 1,
            "explanation": "5–10%，終止發酵並保留天然糖。"
          },
          {
            "type": "single",
            "question": "Grenache 常與 Syrah、Mourvèdre 混釀的主要原因是？",
            "options": [
              "A. Grenache 色素與單寧偏低、易氧化，需補色澤與結構",
              "B. Grenache 酸度太高",
              "C. 法規禁止單一品種",
              "D. Grenache 無法成熟"
            ],
            "correct": 0,
            "explanation": "這是 Grenache 混釀的經典理由（一般說法）。"
          },
          {
            "type": "single",
            "question": "隆河 cru 與勃艮地分級邏輯的關鍵差異是？",
            "options": [
              "A. 勃艮地在村內再依地塊分 Premier／Grand Cru，隆河 cru 是獨立 AOC、不再細分",
              "B. 兩者完全相同",
              "C. 隆河以地塊分級",
              "D. 勃艮地沒有分級"
            ],
            "correct": 0,
            "explanation": "一個隆河 cru＝一個 AOC；勃艮地則以地塊（climat）分等。"
          },
          {
            "type": "single",
            "question": "標籤寫『Gigondas』（而非 Côtes du Rhône Villages Gigondas）代表？",
            "options": [
              "A. IGP 酒款",
              "B. Villages 加註地名",
              "C. Vin de France",
              "D. 獨立 cru（獨立 AOC）"
            ],
            "correct": 3,
            "explanation": "cru 是獨立 AOC，標籤使用自己的名稱。"
          },
          {
            "type": "single",
            "question": "Vin de France 的標籤可以？",
            "options": [
              "A. 沒有地理標示，但可標品種與年份",
              "B. 標示 AOC 名稱",
              "C. 標示 Grand Cru",
              "D. 不能標示年份"
            ],
            "correct": 0,
            "explanation": "歐盟規則下可標品種與年份，但不能標地理名稱。"
          },
          {
            "type": "single",
            "question": "依 Inter Rhône 2025 年資料，隆河酒出口量前三大市場依序是？",
            "options": [
              "A. 比利時、英國、美國",
              "B. 美國、英國、德國",
              "C. 中國、日本、美國",
              "D. 德國、荷蘭、加拿大"
            ],
            "correct": 0,
            "explanation": "依量為比利時 18%、英國 17%、美國 13%。"
          },
          {
            "type": "single",
            "question": "2024 年 9 月 INAO 全國委員會通過、成為第 18 個 cru 的是？",
            "options": [
              "A. Cairanne",
              "B. Rasteau",
              "C. Laudun",
              "D. Ventoux"
            ],
            "correct": 2,
            "explanation": "Laudun（Gard 省），2024 年 9 月 11 日通過。"
          }
        ]
      }
    }
  }
]
