/**
 * MA-L2-3 AOC：三個法定細則
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "AOC：三個法定細則",
    subtitle: "摩洛哥法規裡最細的部分",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "所有 AOC 的共同規定（1998）",
    highlights: [
      { id: 1, icon: "🧺", title: "採收與酒窖", content: "葡萄要裝在有孔的箱子裡，酒窖要有冷卻設備與不鏽鋼或同等設備；禁止使用連續式壓榨機和螺旋輸送機" },
      { id: 2, icon: "🍬", title: "進酒窖的門檻", content: "每批葡萄至少 187 g/L 糖；不得使用濃縮。極差年份可例外，白酒門檻可降到 178 g/L" },
      { id: 3, icon: "⚠️", title: "增糖只在極差年份", content: "部長可批准用濃縮葡萄汁增加最多 1% vol，而且濃縮汁要來自同一 AOC。這和 AOG 一律禁止不同" },
      { id: 4, icon: "🏅", title: "Cru 的可能", content: "AOC 內可再劃定 cru，但要符合更嚴格的條件" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">常見陷阱：AOG 禁止增糖，AOC 在極差年份反而可以。</p></div>"
  },
  {
    title: "三個 AOC 比一比",
    highlights: [
      { id: 1, icon: "🏔️", title: "Les Coteaux de l'Atlas（1998）", content: "在 Beni-M'Tir 內。上限 60 hl/ha，每公頃至少 3,000 株。最低酒精：紅 12.5、粉紅與灰 12、白 11.5 度" },
      { id: 2, icon: "🥂", title: "Crémant de l'Atlas（2009）", content: "與 Coteaux de l'Atlas 同區，傳統法氣泡酒，生產條件依 2008 年的「Crémant」部令" },
      { id: 3, icon: "🌄", title: "Les Côtes de Rommani（2014）", content: "在 Zaër 內。必須手採、當天釀造、只能棚架。上限 60 hl/ha，每公頃至少 3,333 株。最低酒精：紅 13、粉紅與灰 12.5、白 12 度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記憶重點：Côtes de Rommani 比 Coteaux de l'Atlas 更嚴，酒精門檻高了半度，還要求手採。</p></div>"
  },
  {
    title: "品種比例",
    highlights: [
      { id: 1, icon: "🍇", title: "Coteaux de l'Atlas 紅、粉紅、灰", content: "Cabernet Sauvignon、Merlot、Syrah、Tempranillo 一組，至少 2/3；另一組是 Carignan、Cinsault、Grenache" },
      { id: 2, icon: "🥂", title: "Coteaux de l'Atlas 白", content: "Chardonnay、Sauvignon Blanc、Vermentino 至少 50%；Ugni Blanc、Clairette 至多 50%" },
      { id: 3, icon: "🍷", title: "Côtes de Rommani 紅、粉紅、灰", content: "Syrah、Cabernet Sauvignon、Tempranillo、Merlot、Marselan、Tannat、Malbec 至少 80%；Carignan、Cinsault、Grenache 至多 20%" },
      { id: 4, icon: "🥛", title: "Côtes de Rommani 白", content: "Chardonnay、Sauvignon Blanc、Viognier、Vermentino、Colombard、Gros Manseng" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">兩個 AOC 都偏向國際品種，傳統品種只是配角。這和全國種植結構正好相反。</p></div>"
  },
  {
    title: "AOC 數量：3 個還是 5 個？",
    highlights: [
      { id: 1, icon: "🏛️", title: "ONSSA 的頁面", content: "列 3 個 AOC：Les Coteaux de l'Atlas、Crémant de l'Atlas、Les Côtes de Rommani。本課程以這 3 個為準" },
      { id: 2, icon: "📖", title: "法文維基", content: "另列 2022 年的 Côtes de Sebaa Ayoun 與 Hauts Plateaux de Meknès，但本課程找不到部令原文，所以不列入測驗" },
      { id: 3, icon: "🔎", title: "正確的態度", content: "回答時要說明來源與時間點，例如「依 ONSSA 頁面為 3 個，另有資料指 2022 年新增 2 個」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">制度會更新，查不到原文的數字就要誠實標示。</p></div>"
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
            question: "Les Côtes de Rommani 紅酒的最低酒精度是？",
            options: ["A. 12.5 度","B. 12 度","C. 11.5 度","D. 13 度"],
            correct: 3,
            explanation: "Coteaux de l'Atlas 紅酒是 12.5 度。"
          },
          {
            type: 'single',
            question: "Crémant de l'Atlas 的產區範圍是？",
            options: ["A. 與 Les Coteaux de l'Atlas 相同","B. 與 Les Côtes de Rommani 相同","C. 全摩洛哥","D. 整個 Doukkala"],
            correct: 0,
            explanation: "部令第 352-09 號第 1 條。"
          },
          {
            type: 'single',
            question: "下列哪一項是 Les Côtes de Rommani 的要求？",
            options: ["A. 完全禁止灌溉","B. 手採並當天釀造","C. 只能 gobelet 整枝","D. 只能生產白酒"],
            correct: 1,
            explanation: "整枝只能棚架；灌溉可到 7 月 31 日。"
          },
          {
            type: 'single',
            question: "關於增糖，AOG 與 AOC 的差別是？",
            options: ["A. 兩者都可隨意增糖","B. 兩者都全面禁止","C. AOG 禁止；AOC 在極差年份可獲准，最多 1% vol","D. AOG 可以；AOC 全面禁止"],
            correct: 2,
            explanation: "部令第 869-75 號第 2 條；第 1955-98 號第 4 條。"
          }
        ]
      }
    }
  }
]
