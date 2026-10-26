/**
 * AT-L1-4 紅葡萄品種
 * 事實來源：Wikipedia（Austrian wine、1985 Austrian diethylene glycol wine scandal、Kabinett）、Advantage Austria（Wein 2025，農林部／ÖWM）、wein.plus Wine Guide、WineWithSeth。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "紅葡萄品種",
    subtitle: "Zweigelt、Blaufränkisch、St. Laurent",
    icon: "🍷",
    background: 'linear-gradient(135deg, #B3202E 0%, #7A1520 100%)'
  },
  {
    title: "紅酒的比重與最重要的品種",
    highlights: [
      { id: 1, icon: "📊", title: "紅葡萄約占三分之一", content: "2022 年約 32% 為紅葡萄（wein.plus）；另有資料以產量計約 30% 為紅酒，不同統計方式略有差異" },
      { id: 2, icon: "👑", title: "Zweigelt", content: "最廣泛種植的紅品種（2025 年約占面積 13.4%）" },
      { id: 3, icon: "🧬", title: "Zweigelt 的身世", content: "St. Laurent × Blaufränkisch 的雜交，1922 年由 Friedrich Zweigelt 在 Klosterneuburg 育成" },
      { id: 4, icon: "🍒", title: "風格", content: "多汁的櫻桃與黑櫻桃、香料；單寧柔和，可輕盈或帶橡木" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Zweigelt = 父母是 St. Laurent 與 Blaufränkisch，這是常考題。</p></div>"
  },
  {
    title: "Blaufränkisch 與 St. Laurent",
    highlights: [
      { id: 1, icon: "🌶️", title: "Blaufränkisch", content: "Burgenland 的旗艦紅品種（2025 年約 5.8%），深色漿果、胡椒與香料，酸度與單寧結構緊實" },
      { id: 2, icon: "📍", title: "主要產區", content: "Mittelburgenland、Leithaberg、Eisenberg 等 DAC 以 Blaufränkisch 為核心" },
      { id: 3, icon: "🎀", title: "St. Laurent", content: "細緻、芳香的在地紅品種，常被拿來和 Pinot Noir 比較；栽培較困難" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Blaufränkisch = 緊實、香料、礦物；Zweigelt = 柔和、多汁。</p></div>"
  },
  {
    title: "其他紅品種",
    highlights: [
      { id: 1, icon: "🔴", title: "Blauburger 與 Blauer Portugieser", content: "Blauburger 與 Zweigelt 合計占紅酒近一半（Wikipedia）；Portugieser 風格輕柔" },
      { id: 2, icon: "🔵", title: "Pinot Noir（Blauburgunder）", content: "在 Thermenregion、Burgenland 與 Wagram 等地有精緻的表現" },
      { id: 3, icon: "🌸", title: "Blauer Wildbacher", content: "Weststeiermark 玫瑰酒 Schilcher 的專用品種，酸度極高" },
      { id: 4, icon: "🌍", title: "國際品種", content: "Merlot、Cabernet Sauvignon、Syrah 等常用於 Burgenland 的混釀" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先掌握 Zweigelt、Blaufränkisch、St. Laurent 三個，再看其他。</p></div>"
  },
  {
    title: "紅酒風格與產區對應",
    highlights: [
      { id: 1, icon: "🏘️", title: "Neusiedlersee", content: "Zweigelt 以 Neusiedlersee DAC 與 Reserve 裝瓶，果味豐富" },
      { id: 2, icon: "🌾", title: "Carnuntum", content: "以 Zweigelt 聞名，也有 Blaufränkisch 與混釀" },
      { id: 3, icon: "⛰️", title: "Mittelburgenland", content: "「Blaufränkischland」，以 Blaufränkisch 為主" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">更多 DAC 細節會在 Level 2 展開。</p></div>"
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
            question: "Zweigelt 的父母品種是？",
            options: ["A. Pinot Noir × Gamay","B. Cabernet Sauvignon × Merlot","C. Syrah × Grenache","D. St. Laurent × Blaufränkisch"],
            correct: 3,
            explanation: "1922 年由 Friedrich Zweigelt 在 Klosterneuburg 育成。"
          },
          {
            type: 'single',
            question: "奧地利種植最廣的紅葡萄品種是？",
            options: ["A. Zweigelt","B. Blaufränkisch","C. St. Laurent","D. Pinot Noir"],
            correct: 0,
            explanation: "Zweigelt 為最廣泛種植的紅品種，其次是 Blaufränkisch。"
          },
          {
            type: 'single',
            question: "Weststeiermark 的玫瑰酒 Schilcher 使用哪個品種？",
            options: ["A. Blauer Wildbacher","B. Zweigelt","C. Blaufränkisch","D. Merlot"],
            correct: 0,
            explanation: "Schilcher 專用 Blauer Wildbacher，酸度極高。"
          }
        ]
      }
    }
  }
]
