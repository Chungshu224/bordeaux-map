/**
 * AT-L2-2 Wachau
 * 事實來源：Wikipedia（Districtus Austriae Controllatus、Austrian wine）、WineWithSeth（DAC 與 Wachau DAC）、wein.plus（ÖTW 報導）、Winewisdom。年份與門檻以來源為準；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Wachau",
    subtitle: "梯田與 Vinea Wachau 三級",
    icon: "🏞️",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "產區輪廓",
    highlights: [
      { id: 1, icon: "📐", title: "規模", content: "約 1,324 公頃（2022 年資料），沿多瑙河的狹窄河谷與陡峭梯田" },
      { id: 2, icon: "🪨", title: "土壤", content: "上段梯田以 Gföhl 片麻岩、角閃岩、石英岩為主；下段為黃土、沙與礫石。Riesling 多在片麻岩，Grüner Veltliner 多在黃土" },
      { id: 3, icon: "🔢", title: "DAC 時間點", content: "Wachau DAC 自 2020 年份起強制實施，2021 年 8 月核准，是第 15 個 DAC" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Wachau 面積不大，但名氣與單價在奧地利名列前茅。</p></div>"
  },
  {
    title: "Vinea Wachau 三級",
    highlights: [
      { id: 1, icon: "🌿", title: "Steinfeder", content: "最輕盈，酒精度最高 11.5%" },
      { id: 2, icon: "🪶", title: "Federspiel", content: "中等酒體，11.5–12.5% abv，殘糖不超過 4 g/L" },
      { id: 3, icon: "💎", title: "Smaragd", content: "最濃縮，至少 12.5% abv、18.5 °KMW，且最早於採收次年 5 月 1 日上市" },
      { id: 4, icon: "📜", title: "Vinea Wachau 協會", content: "1983 年成立，這三級是其商標（自 1984 年起），會員 200 餘家、掌握約 85% 的產區面積" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">三級以酒精度與成熟度劃分。</p></div>"
  },
  {
    title: "Wachau DAC 的產地層級",
    highlights: [
      { id: 1, icon: "🗺️", title: "Gebietswein", content: "產區層級，可使用 17 個品種" },
      { id: 2, icon: "🏘️", title: "Ortswein", content: "村莊層級，限 9 個白葡萄品種" },
      { id: 3, icon: "⛰️", title: "Riedenwein", content: "單一園層級，僅限 Grüner Veltliner 與 Riesling，來自 157 個 Ried" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Vinea Wachau 三級仍可並行使用；DAC 增加了產地層級的法定框架。</p></div>"
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
            question: "哪一級是 Wachau 最濃縮、最早於次年 5 月 1 日上市？",
            options: ["A. Steinfeder","B. Federspiel","C. Smaragd","D. Klassik"],
            correct: 2,
            explanation: "Smaragd 最低 12.5% abv，且不早於次年 5 月 1 日上市。"
          },
          {
            type: 'single',
            question: "Federspiel 的殘糖上限為？",
            options: ["A. 4 g/L","B. 9 g/L","C. 18 g/L","D. 45 g/L"],
            correct: 0,
            explanation: "Federspiel 為 11.5–12.5% abv，殘糖不超過 4 g/L。"
          },
          {
            type: 'single',
            question: "Wachau DAC 的 Riedenwein 僅限哪兩個品種？",
            options: ["A. Zweigelt 與 Blaufränkisch","B. Grüner Veltliner 與 Riesling","C. Welschriesling 與 Muskateller","D. Chardonnay 與 Sauvignon Blanc"],
            correct: 1,
            explanation: "Riedenwein 僅限 Grüner Veltliner 與 Riesling。"
          }
        ]
      }
    }
  }
]
