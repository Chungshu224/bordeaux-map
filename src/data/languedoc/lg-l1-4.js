/**
 * LG-L1-4 法規與酒標
 * 事實來源：Wine With Seth（Languedoc-Roussillon、Languedoc AOC、Carignan 頁，2026 年查閱）、Wikipedia（Languedoc-Roussillon wine）。數字一律標註來源；來源有出入者（葡萄園面積 700,000 英畝與 230,000 公頃不一致、「第一個法定產區」是 Fitou 或 Blanquette de Limoux、Montpeyroux 層級）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "法規與酒標",
    subtitle: "AOC、IGP、Vin de France 與 Languedoc AOC 規則",
    icon: "🏷️",
    background: 'linear-gradient(135deg, #9C4A1A 0%, #5C2A0E 100%)'
  },
  {
    title: "三層分級",
    highlights: [
      { id: 1, icon: "🥇", title: "AOP／AOC", content: "最嚴格：限定產區、品種、產量與釀法" },
      { id: 2, icon: "🥈", title: "IGP（Pays d'Oc 等）", content: "舊稱 Vin de Pays，規範較寬鬆（Wikipedia）；Pays d'Oc 以量計占該區逾一半（Wine With Seth）" },
      { id: 3, icon: "🥉", title: "Vin de France", content: "取代舊的 Vin de Table，最基本等級；一般可標品種與年份（歐盟 2009 年改革後）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Languedoc 同時擁有最嚴格與最自由的兩端。</p></div>"
  },
  {
    title: "Languedoc AOC 規則（2023 年規格）",
    highlights: [
      { id: 1, icon: "🔴", title: "紅酒", content: "必須調配：主要品種（Grenache、Lledoner Pelut、Mourvèdre、Syrah）至少占 50%；Mourvèdre 加 Syrah 至少 20%；Carignan 與 Cinsaut 各上限 40%；至少種兩個品種" },
      { id: 2, icon: "⚪", title: "白酒", content: "主要品種含 Bourboulenc、Clairette、Grenache Blanc、Marsanne、Piquepoul Blanc、Roussanne、Tourbat、Vermentino；Piquepoul Blanc 上限 50%、Viognier 上限 10%" },
      { id: 3, icon: "🌹", title: "產量與密度", content: "基礎產量：紅 50、粉紅 54、白 60 hL/ha；最低種植密度 4,000 株/公頃" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些是考試中常見的「規則型」題目。</p></div>"
  },
  {
    title: "金字塔與命名",
    highlights: [
      { id: 1, icon: "🔺", title: "現行金字塔", content: "底層是 AOP Languedoc 與 DGC，中間是副區域 AOP，頂端是村莊級 AOP（Languedoc AOC 頁）" },
      { id: 2, icon: "🏘️", title: "五個村莊級 AOP", content: "Boutenac、Faugères、La Clape、La Livinière、Montpeyroux；其中 Montpeyroux 的獨立地位仍在確認中，來源記述不一，不進測驗" },
      { id: 3, icon: "🔢", title: "11 個 DGC", content: "例如 Pézenas、Sommières、Grès de Montpellier、Saint-Saturnin（DGC＝Dénomination Géographique Complémentaire，標示在 Languedoc 之後）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">層級名稱複雜，抓住「Languedoc 是底、村莊級在頂」即可。</p></div>"
  },
  {
    title: "特例與日期",
    highlights: [
      { id: 1, icon: "⚪", title: "Picpoul de Pinet", content: "純白酒 AOC，100% Piquepoul Blanc；2013 年 9 月 23 日有獨立規格法令" },
      { id: 2, icon: "🫧", title: "Limoux 氣泡酒", content: "Blanquette de Limoux 最早見於 1531 年 Saint-Hilaire 修道院，Mauzac 至少 90%、傳統法；Crémant de Limoux 於 1990 年成為 AOC" },
      { id: 3, icon: "🍯", title: "VDN", content: "Vin Doux Naturel：發酵途中加入 5–10% 烈酒（至少 95% abv）中止發酵；Roussillon 約占法國 VDN 的八成" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「第一個法定產區」是 Fitou 還是 Blanquette de Limoux，資料說法不一，所以不考。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Languedoc AOC 紅酒中 Carignan 的上限是？",
            options: ["A. 10%","B. 20%","C. 40%","D. 70%"],
            correct: 2,
            explanation: "Carignan 與 Cinsaut 各上限 40%。"
          },
          {
            type: 'single',
            question: "Mourvèdre 加 Syrah 在 Languedoc AOC 紅酒中至少需占？",
            options: ["A. 5%","B. 20%","C. 50%","D. 75%"],
            correct: 1,
            explanation: "至少 20%。"
          },
          {
            type: 'single',
            question: "Languedoc AOC 紅酒的基礎產量是？",
            options: ["A. 30 hL/ha","B. 50 hL/ha","C. 80 hL/ha","D. 120 hL/ha"],
            correct: 1,
            explanation: "紅 50、粉紅 54、白 60 hL/ha。"
          },
          {
            type: 'single',
            question: "Picpoul de Pinet 的規定是？",
            options: ["A. 純白酒、100% Piquepoul Blanc","B. 只有粉紅酒","C. 紅白皆可、Syrah 為主","D. 甜酒"],
            correct: 0,
            explanation: "白酒 AOC，100% Piquepoul Blanc。"
          },
          {
            type: 'single',
            question: "Blanquette de Limoux 至少需要多少 Mauzac？",
            options: ["A. 30%","B. 51%","C. 75%","D. 90%"],
            correct: 3,
            explanation: "至少 90%。"
          },
          {
            type: 'single',
            question: "VDN 加入的烈酒比例約為？",
            options: ["A. 1–2%","B. 5–10%","C. 20–25%","D. 40%"],
            correct: 1,
            explanation: "5–10%，至少 95% abv。"
          }
        ]
      }
    }
  }
]
