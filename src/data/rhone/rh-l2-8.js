/**
 * RH L2-8 Level 2 綜合評量
 * 事實來源：同 rh-l2-1 至 rh-l2-7（INAO 產品規格、Inter Rhône《Chiffres clés 2025》、Drive 筆記等）。
 * 綜合評量只考已定案、來源一致的項目；來源有出入的數字（如 Cairanne 比例、le râpé 比例、各 AOC 面積）刻意不考。詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "Level 2 綜合評量",
    subtitle: "整合北／南 cru、品種與法規",
    icon: "🏆",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      {
        id: 1,
        icon: "🧮",
        title: "分級與比例",
        content: "Côtes du Rhône：Grenache ≥30%、Syrah＋Mourvèdre ≥20%（2022 年採收起）；Villages：Grenache ≥40%、Syrah＋Mourvèdre ≥25%；21 個可加註地名的村莊；比例以酒莊整體種植計算"
      },
      {
        id: 2,
        icon: "⛰️",
        title: "北隆河",
        content: "Côte-Rôtie（1940，Syrah ≥80%、Viognier ≤20%）；Condrieu（Viognier 100%）；Château-Grillet（單一莊園，約 4 公頃）；Hermitage（vin de paille 乾燥 ≥45 天）；Crozes-Hermitage（最大）；Saint-Joseph（1956，右岸）；Cornas（Syrah 100%，1938）；Saint-Péray（Marsanne／Roussanne，靜態與氣泡）"
      },
      {
        id: 3,
        icon: "👑",
        title: "南隆河",
        content: "Châteauneuf-du-Pape（1936；13 品種／18 條目；手工採收與分選；左岸）；Gigondas 1971、Vacqueyras 1990、Beaumes-de-Venise 2005、Vinsobres 2006、Rasteau 乾紅 2010、Cairanne 2016、Laudun 2024；Lirac 1947、Tavel 1936（右岸）"
      },
      {
        id: 4,
        icon: "🥂",
        title: "其餘名稱",
        content: "VDN：加烈酒精為葡萄汁的 5–10%（Muscat de Beaumes-de-Venise、Rasteau VDN）；Clairette de Die 的 ancestrale 以 Muscat 為主、單次發酵於瓶中完成；Ventoux、Luberon、Grignan-les-Adhémar 等不屬於 18 個 cru"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成評量後可進入 Level 3：Diploma／MW 精修。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "Côtes du Rhône 紅酒的 Grenache 與 Syrah＋Mourvèdre 最低比例（已投產葡萄樹自 2022 年採收起）分別是？",
            options: [
              "A. 15% 與 10%",
              "B. 30% 與 20%",
              "C. 40% 與 25%",
              "D. 50% 與 30%"
            ],
            correct: 1,
            explanation: "Côtes du Rhône：Grenache ≥30%、Syrah＋Mourvèdre ≥20%；40%／25% 是 Villages。"
          },
          {
            type: "single",
            question: "可在 Côtes du Rhône Villages 之後加註地名的村莊有幾個？",
            options: [
              "A. 8",
              "B. 18",
              "C. 21",
              "D. 95"
            ],
            correct: 2,
            explanation: "21 個；18 是 cru 的數量。"
          },
          {
            type: "single",
            question: "Côte-Rôtie 的 Syrah 最低比例與 Viognier 的上限是？",
            options: [
              "A. Syrah ≥50%、Viognier ≤50%",
              "B. Syrah ≥70%、Viognier ≤30%",
              "C. Syrah ≥80%、Viognier ≤20%",
              "D. Syrah 100%、不得用 Viognier"
            ],
            correct: 2,
            explanation: "Syrah ≥80%；Viognier 至多占 Syrah 地塊葡萄樹的 20%，常與 Syrah 共發酵。"
          },
          {
            type: "single",
            question: "下列哪個名稱只用 Syrah 釀造紅酒？",
            options: [
              "A. Côte-Rôtie",
              "B. Hermitage",
              "C. Cornas",
              "D. Saint-Joseph"
            ],
            correct: 2,
            explanation: "Cornas 只用 Syrah；Côte-Rôtie 可混植 Viognier，Hermitage 與 Saint-Joseph 可含少量 Marsanne／Roussanne。"
          },
          {
            type: "single",
            question: "Hermitage 的 vin de paille，葡萄至少須乾燥多久？",
            options: [
              "A. 7 天",
              "B. 45 天",
              "C. 120 天",
              "D. 1 年"
            ],
            correct: 1,
            explanation: "至少 45 天，壓榨時含糖超過 350 g/L。"
          },
          {
            type: "single",
            question: "Saint-Péray 的酒款與品種是？",
            options: [
              "A. 白酒（靜態與氣泡）；Marsanne、Roussanne",
              "B. 紅酒；Syrah",
              "C. 粉紅酒；Grenache",
              "D. 甜酒；Muscat"
            ],
            correct: 0,
            explanation: "Saint-Péray 只產白酒，品種為 Marsanne 與 Roussanne。"
          },
          {
            type: "single",
            question: "下列何者不在 Châteauneuf-du-Pape 的許可品種內？",
            options: [
              "A. Counoise",
              "B. Muscardin",
              "C. Marsanne",
              "D. Cinsault"
            ],
            correct: 2,
            explanation: "Marsanne 不在清單內；Counoise、Muscardin、Cinsault 皆為許可品種。"
          },
          {
            type: "single",
            question: "Gigondas 的 AOC 法令是哪一年？",
            options: [
              "A. 1936",
              "B. 1971",
              "C. 1990",
              "D. 2005"
            ],
            correct: 1,
            explanation: "1971 年。Vacqueyras 為 1990、Beaumes-de-Venise 為 2005。"
          },
          {
            type: "single",
            question: "2024 年 9 月 INAO 全國委員會通過、成為第 18 個 cru 的是？",
            options: [
              "A. Cairanne",
              "B. Laudun",
              "C. Rasteau",
              "D. Vinsobres"
            ],
            correct: 1,
            explanation: "Laudun（Gard 省），2024 年 9 月 11 日通過。"
          },
          {
            type: "single",
            question: "VDN（如 Muscat de Beaumes-de-Venise）加烈時，中性酒精用量是葡萄汁體積的？",
            options: [
              "A. 1–2%",
              "B. 5–10%",
              "C. 20–25%",
              "D. 35–40%"
            ],
            correct: 1,
            explanation: "5% 至 10%（96% vol. 以上），終止發酵並保留天然糖。"
          }
        ]
      }
    }
  }
]
