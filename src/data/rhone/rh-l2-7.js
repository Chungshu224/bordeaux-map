/**
 * RH L2-7 粉紅、甜酒、氣泡與外圍產區
 * 事實來源：INAO 產品規格（Muscat de Beaumes-de-Venise 2026 年草案、Rasteau 2023 年版、Clairette de Die 全國委員會文件 2016、Ventoux 2026 年草案、Luberon 2024 年草案、Tavel／Lirac 規格）、Inter Rhône《Chiffres clés 2025》（2025 年採收）、使用者 Drive 筆記（CMS Southern Rhone、Rasteau & Muscat 筆記）。
 * 詳見 RHONE_COURSE_FRAMEWORK.md「Level 2 內容說明與查證註記」。「Rhône 範圍」的界定與面積隨年份變動，已標明並不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "粉紅、甜酒、氣泡與外圍產區",
    subtitle: "Tavel、VDN、Die 與外圍名稱",
    icon: "🌹",
    background: "linear-gradient(135deg, #B5502E 0%, #7a2f18 100%)"
  },
  {
    title: "粉紅酒的版圖",
    highlights: [
      {
        id: 1,
        icon: "🌹",
        title: "Tavel：專攻粉紅",
        content: "隆河唯一只產粉紅酒的 cru（1936 年）；Grenache 與多種主要品種混調，Grenache noir 必須在調配中；2025 年約 781 公頃"
      },
      {
        id: 2,
        icon: "🌸",
        title: "Lirac 與 Côtes du Rhône",
        content: "Lirac 的粉紅酒與紅酒共用 Grenache 至少 40%、Syrah＋Mourvèdre 至少 25%（2025 年僅占約 2%）；Côtes du Rhône 2025 年約 8% 為粉紅、整個河谷約 14%"
      },
      {
        id: 3,
        icon: "☀️",
        title: "外圍的粉紅大戶",
        content: "2025 年粉紅酒占比：Luberon 約 51%、Costières de Nîmes 約 48%、Ventoux 約 35%、Côtes du Vivarais 約 33%（Inter Rhône）"
      },
      {
        id: 4,
        icon: "🔬",
        title: "Laudun 與 Cairanne 的粉紅？",
        content: "Inter Rhône 2025 的表格仍有 Laudun 約 31%、Cairanne 約 7% 的粉紅，但兩者的 AOC 規格只寫紅與白（升格過渡期或統計口徑所致，未能確認）。因此不把兩者的酒款類型放進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">粉紅酒在隆河谷有兩種來源：Tavel 這種專攻，以及外圍大產區的大宗商品化生產。</p></div>"
  },
  {
    title: "天然甜酒 VDN",
    highlights: [
      {
        id: 1,
        icon: "🍯",
        title: "Muscat de Beaumes-de-Venise",
        content: "1945 年 6 月 1 日法令；Muscat à petits grains（白與紅），範圍為 Aubignan 與 Beaumes-de-Venise；單產 30 hl 汁／公頃（上限 40）；葡萄汁天然糖至少 252 g/L"
      },
      {
        id: 2,
        icon: "⚗️",
        title: "加烈（mutage）",
        content: "在發酵中加入 96% vol. 以上的中性酒精，用量為葡萄汁體積的 5–10%，終止發酵並保留天然糖；與 Rasteau VDN 規則相同"
      },
      {
        id: 3,
        icon: "🎨",
        title: "色與比例",
        content: "Muscat VDN 可為白、粉紅、紅；Inter Rhône 2025 年白酒約占 82%，約 227 公頃。INAO 2009 年文字寫白酒約 95%——年份不同，不考"
      },
      {
        id: 4,
        icon: "🌰",
        title: "Rasteau VDN 與陳年用語",
        content: "Rasteau VDN 僅約 18 公頃（2025）。Drive 筆記：ambré／tuilé 需陳年至少 3 年、hors d'âge 至少 5 年、blanc／grenat 較清新（隔年 5 月 1 日後上市）——年限未對照 INAO，不進測驗"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩個 VDN 都是「加烈而保留糖分」的甜酒；Hermitage vin de paille 則是另一種甜酒路線。</p></div>"
  },
  {
    title: "Diois 的氣泡酒",
    highlights: [
      {
        id: 1,
        icon: "🥂",
        title: "Clairette de Die",
        content: "1910 年先認定為產地名稱，1942 年 12 月 30 日成為 AOC，1971 年 5 月 25 日法令區分兩種釀法。2025 年約 1,355 公頃"
      },
      {
        id: 2,
        icon: "🍇",
        title: "Méthode dioise ancestrale",
        content: "Muscat à petits grains 至少 75%（白酒版）；單次發酵在瓶中完成，不加 tirage 與 expedition 糖液；瓶中酒渣陳放至少 4 個月；占 Diois 產量約 88%"
      },
      {
        id: 3,
        icon: "🍾",
        title: "第二次瓶內發酵",
        content: "完成發酵的酒加入 tirage 糖液後裝瓶，酒渣陳放至少 9 個月，僅用 Clairette；占約 7%。Crémant de Die 由 1993 年 3 月 26 日法令界定，2025 年約 64 公頃"
      },
      {
        id: 4,
        icon: "🧩",
        title: "其他",
        content: "Châtillon-en-Diois 使用 Gamay、Aligoté、Chardonnay（INAO 文件未列比例）；Saint-Péray 的氣泡酒見第 4 課"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Die 的「ancestrale」不是傳統法：它是在瓶中完成同一次發酵。</p></div>"
  },
  {
    title: "外圍產區與「Rhône 範圍」",
    highlights: [
      {
        id: 1,
        icon: "🏔️",
        title: "Ventoux",
        content: "1973 年 7 月 27 日以 Côtes du Ventoux 認定，2009 年 10 月 17 日法令改名為 Ventoux；Vaucluse 省 53 個村莊；紅、粉紅、白；2025 年約 4,987 公頃（紅 54%、粉紅 35%、白 11%）"
      },
      {
        id: 2,
        icon: "🌿",
        title: "Luberon",
        content: "1988 年 2 月 26 日以 Côtes du Luberon 認定，2009 年 9 月 18 日改名為 Luberon；INAO 文字寫 Vaucluse 省 36 個村莊；2025 年約 2,781 公頃（粉紅約 51%）"
      },
      {
        id: 3,
        icon: "⚛️",
        title: "Grignan-les-Adhémar 與其他",
        content: "Grignan-les-Adhémar 前身是 Coteaux du Tricastin，Drive 筆記寫 2010 年前使用舊名（因核電廠的形象問題改名）；2025 年約 971 公頃。Côtes du Vivarais 約 120 公頃、Costières de Nîmes 約 2,145 公頃"
      },
      {
        id: 4,
        icon: "📐",
        title: "「Rhône 範圍」的三種畫法",
        content: "（1）18 個 cru＋Villages＋Côtes du Rhône 的核心；（2）Inter Rhône 統計範圍，另含 Ventoux、Luberon、Grignan-les-Adhémar、Costières de Nîmes、Vivarais、Diois；（3）地理上的河谷。Costières de Nîmes 在 Gard、鄰近 Languedoc，但行政上歸 Rhône 委員會（2004 年起）。這些外圍名稱都不是 18 個 cru 之一"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">遇到邊界案例時，先講明採用哪一種「Rhône」的界定。</p></div>"
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
            question: "Muscat de Beaumes-de-Venise 使用的品種是？",
            options: [
              "A. Muscat à petits grains",
              "B. Muscat of Alexandria",
              "C. Viognier",
              "D. Clairette"
            ],
            correct: 0,
            explanation: "規格只允許 Muscat à petits grains（白與紅）。"
          },
          {
            type: "single",
            question: "Clairette de Die「méthode dioise ancestrale」的特徵是？",
            options: [
              "A. 以 Muscat à petits grains 為主，單次發酵在瓶中完成",
              "B. 100% Chardonnay，二次發酵加糖",
              "C. 以加烈酒精終止發酵",
              "D. 在橡木桶中氧化陳釀"
            ],
            correct: 0,
            explanation: "Muscat à petits grains 至少 75%（白酒版），單次發酵在瓶中完成，不加 tirage 與 expedition 糖液。"
          },
          {
            type: "single",
            question: "Ventoux 在 2009 年之前的名稱是？",
            options: [
              "A. Coteaux du Tricastin",
              "B. Côtes du Ventoux",
              "C. Côtes du Vivarais",
              "D. Côtes du Luberon"
            ],
            correct: 1,
            explanation: "1973 年以 Côtes du Ventoux 認定，2009 年改名為 Ventoux。Coteaux du Tricastin 是 Grignan-les-Adhémar 的舊名。"
          },
          {
            type: "single",
            question: "下列何者「不是」18 個 Côtes du Rhône cru 之一？",
            options: [
              "A. Tavel",
              "B. Lirac",
              "C. Ventoux",
              "D. Laudun"
            ],
            correct: 2,
            explanation: "Ventoux 是外圍的獨立 AOC，不屬於 18 個 cru；Tavel、Lirac、Laudun 都是 cru。"
          }
        ]
      }
    }
  }
]
