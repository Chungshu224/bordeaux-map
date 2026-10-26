/**
 * RH L2-3 Hermitage、Crozes-Hermitage 與 Saint-Joseph
 * 事實來源：INAO 產品規格（Hermitage 2024 年修訂草案、Crozes-Hermitage 2024 年修訂草案、Saint-Joseph 2023 年版）、Inter Rhône《Chiffres clés 2025》（2025 年採收）、使用者 Drive《Bourgogne Aujourd'hui》第 189 期整理（rhone_nord_saintjoseph_saintperay.pdf）與 CMS 教材。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。面積與白酒比例隨年份變動，已標年份且不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Hermitage、Crozes-Hermitage 與 Saint-Joseph",
    subtitle: "北隆河的核心 cru",
    icon: "⛰️",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Hermitage：北隆河的名丘",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1936 年 Valence 法院判決認定，1937 年 3 月 4 日法令確認為 AOC；範圍在 Drôme 省的 Tain-l'Hermitage、Crozes-Hermitage 與 Larnage。2025 年約 137 公頃（紅 69%、白 31%）"
      },
      {
        id: 2,
        icon: "🍇",
        title: "紅與白的品種",
        content: "紅：Syrah 至少占酒莊種植的 85%，可在 Syrah 地塊中混植至多 15% 的 Marsanne、Roussanne；白：Marsanne 與 Roussanne"
      },
      {
        id: 3,
        icon: "🌾",
        title: "稻草酒 vin de paille",
        content: "可在 AOC 名稱後標示的甜白酒：葡萄須乾燥至少 45 天，壓榨時含糖超過 350 g/L；須標年份；單產 15 hl/ha"
      },
      {
        id: 4,
        icon: "🗺️",
        title: "分塊（lieux-dits）",
        content: "CMS 教材列出：L'Hermite、Le Méal、Les Bessards、Greffieux、Beaume、Péléat、La Croix、Maison Blanche、L'Homme。規格僅規定：標籤上的地塊名須出現在採收申報書中"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Hermitage 面積很小但分量極重：紅酒單產 40 hl/ha、白酒 45 hl/ha（2024 年修訂草案）。</p></div>"
  },
  {
    title: "Crozes-Hermitage：最大的北隆河 cru",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1937 年 3 月 4 日法令認定；範圍橫跨 Drôme 省 11 個村莊；只產靜態紅、白酒"
      },
      {
        id: 2,
        icon: "🍇",
        title: "品種",
        content: "紅：Syrah 至少占酒莊種植的 85%，可混植 Marsanne、Roussanne 至多 15%；白：Marsanne 與 Roussanne（規格未訂比例）"
      },
      {
        id: 3,
        icon: "⚙️",
        title: "產量",
        content: "單產 45 hl/ha（上限 50）；行距 2.50–2.75 公尺的地塊上限 40；最低天然酒精度 10.5%"
      },
      {
        id: 4,
        icon: "📏",
        title: "規模（各年份不同）",
        content: "Inter Rhône 2025 年約 2,139 公頃（紅 89%）；INAO 文件記 2019 年耕作面積 1,700 公頃——年份與口徑不同，只當規模印象，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Crozes-Hermitage 的規模大約是 Hermitage 的 15 倍以上，風格從易飲到有結構都有。</p></div>"
  },
  {
    title: "Saint-Joseph：右岸的長條形 cru",
    highlights: [
      {
        id: 1,
        icon: "📜",
        title: "AOC 與範圍",
        content: "1956 年 6 月 15 日法令認定；範圍涵蓋 26 個村莊（Ardèche 23 個、Loire 3 個），沿 Rhône 右岸南北延伸近 60 公里；只產靜態紅、白酒"
      },
      {
        id: 2,
        icon: "🍇",
        title: "品種",
        content: "紅：Syrah 至少占酒莊種植的 90%（Drive 整理：可加至多 10% 的 Roussanne／Marsanne）；白：Marsanne 與 Roussanne，比例不限"
      },
      {
        id: 3,
        icon: "📉",
        title: "擴界與回縮",
        content: "1969 年範圍大幅擴張（可種植面積約 6,800 公頃）；1994 年起重新劃界，砍半至約 3,400 公頃，聚焦於核心坡地"
      },
      {
        id: 4,
        icon: "📊",
        title: "規模與白酒",
        content: "約 1,415–1,504 公頃（Drive 整理與 Inter Rhône 2024／2025，年份不同）；紅約 86%、白約 14%（2005 年白酒僅 9%）；2022 年平均單產約 38 hl/ha；規格單產 40（上限 46）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">2026 年是 Saint-Joseph 成立 70 週年；它從大擴張走向回縮，再回到坡地的重新開墾。</p></div>"
  },
  {
    title: "三者比較與易混淆點",
    highlights: [
      {
        id: 1,
        icon: "🧭",
        title: "位置",
        content: "Hermitage 與 Crozes-Hermitage 在 Drôme 省、Rhône 左岸，圍繞 Tain-l'Hermitage；Saint-Joseph 在右岸（Ardèche 與 Loire），與 Cornas 同在右岸"
      },
      {
        id: 2,
        icon: "🔢",
        title: "Syrah 下限的階梯",
        content: "酒莊種植中的 Syrah 下限：Crozes-Hermitage 與 Hermitage 85%、Saint-Joseph 90%、Cornas 與 Côte-Rôtie 的 100%／80% 另見前後課"
      },
      {
        id: 3,
        icon: "⚪",
        title: "白酒",
        content: "三者的白酒都以 Marsanne 與 Roussanne 為品種；白酒占比：Hermitage 約三成、Crozes-Hermitage 約一成、Saint-Joseph 約一成多（2025）"
      },
      {
        id: 4,
        icon: "⚠️",
        title: "面積數字的使用方式",
        content: "各來源的面積因年份與口徑而異，考試時以「Hermitage 最小、Crozes-Hermitage 最大」的相對關係為主"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">小、中、大：Hermitage（約 137 公頃）、Saint-Joseph（約 1,400–1,500 公頃）、Crozes-Hermitage（約 2,100 公頃）。</p></div>"
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
            question: "Hermitage vin de paille 的葡萄至少須乾燥幾天？",
            options: [
              "A. 15 天",
              "B. 30 天",
              "C. 45 天",
              "D. 90 天"
            ],
            correct: 2,
            explanation: "至少 45 天，壓榨時含糖須超過 350 g/L。"
          },
          {
            type: "single",
            question: "下列哪個北隆河 cru 面積最大？",
            options: [
              "A. Hermitage",
              "B. Crozes-Hermitage",
              "C. Cornas",
              "D. Château-Grillet"
            ],
            correct: 1,
            explanation: "Crozes-Hermitage 是北隆河最大的 cru；Hermitage 與 Cornas 很小，Château-Grillet 僅約 4 公頃。"
          },
          {
            type: "single",
            question: "Saint-Joseph 位於 Rhône 的哪一岸，主要在哪個省？",
            options: [
              "A. 左岸、Drôme",
              "B. 左岸、Vaucluse",
              "C. 右岸、Ardèche",
              "D. 右岸、Gard"
            ],
            correct: 2,
            explanation: "Saint-Joseph 在右岸，26 個村莊中 23 個在 Ardèche、3 個在 Loire。"
          },
          {
            type: "single",
            question: "Saint-Joseph 的 AOC 認定年份是？",
            options: [
              "A. 1936",
              "B. 1940",
              "C. 1956",
              "D. 1971"
            ],
            correct: 2,
            explanation: "1956 年 6 月 15 日法令；2026 年為 70 週年。"
          }
        ]
      }
    }
  }
]
