/**
 * DP-L3-2 歐洲的傳統法氣泡酒
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "歐洲的傳統法氣泡酒",
    subtitle: "同一種製法，四種風土與四套規則",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "Cava",
    highlights: [
      { id: 1, icon: "🇪🇸", title: "品種與產區", content: "傳統品種為 Macabeo、Xarel·lo、Parellada，也允許 Chardonnay、Pinot Noir；大部分產量集中在加泰隆尼亞的 Penedès 一帶" },
      { id: 2, icon: "⏳", title: "陳年分級", content: "酒渣陳年至少 9 個月；Reserva 18 個月、Gran Reserva 30 個月、Cava de Paraje Calificado（單一地塊）36 個月" },
      { id: 3, icon: "🚪", title: "品質之爭與出走", content: "Cava 長期以低價大量出口聞名；不滿形象的生產者相繼出走：Raventós i Blanc 2012 年離開，改標 Conca del Riu Anoia；Corpinnat 的九家成員 2019 年離開 DO。兩者都不是官方 DO" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cava 是「規模 vs 品質形象」的教科書案例。</p></div>"
  },
  {
    title: "Crémant 與 Franciacorta",
    highlights: [
      { id: 1, icon: "🇫🇷", title: "法國的 Crémant", content: "法國有八個 Crémant AOC：Alsace、Bourgogne、Loire、Bordeaux、Die、Jura、Limoux、Savoie；皆為傳統法、酒渣陳年至少 9 個月，使用各地品種，價格低於香檳" },
      { id: 2, icon: "🇮🇹", title: "Franciacorta", content: "Lombardia 的 DOCG（1995 年），以 Chardonnay、Pinot Nero、Pinot Bianco 為主，另可用本土的 Erbamat（最多 10%）；NV 酒渣陳年至少 18 個月、Millesimato 30 個月、Riserva 60 個月" },
      { id: 3, icon: "🫧", title: "Satèn", content: "Franciacorta 的特殊類型：只用白葡萄、壓力低於 5 bar、只能是 Brut，口感柔滑如絲" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Franciacorta 的陳年要求比香檳 NV 的 15 個月更長，是它定位高價的論據之一。</p></div>"
  },
  {
    title: "Trentodoc 與比較",
    highlights: [
      { id: 1, icon: "⛰️", title: "Trento DOC", content: "Trentino 的山地傳統法氣泡酒（DOC 1993），以 Chardonnay 為主；高海拔帶來高酸與清新感；NV 至少 15 個月、Millesimato 24 個月、Riserva 36 個月" },
      { id: 2, icon: "📊", title: "比較的軸線", content: "比較傳統法氣泡酒時，用五個軸：氣候與保酸方式、品種、最短酒渣陳年、產量與價格、產業結構（大廠或小農）" },
      { id: 3, icon: "🏷️", title: "「méthode champenoise」的使用", content: "歐盟規定只有香檳能用 méthode champenoise；其他產區須用 méthode traditionnelle、metodo classico 等名稱" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">比較題不要逐區各寫一段：每個比較軸同時寫兩三個產區。</p></div>"
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
            question: "Cava 的三個傳統品種是？",
            options: ["A. Glera、Verdiso、Perera","B. Chenin、Chardonnay、Pinot","C. Albariño、Godello、Verdejo","D. Macabeo、Xarel·lo、Parellada"],
            correct: 3,
            explanation: "Chardonnay 與 Pinot Noir 也被允許。"
          },
          {
            type: 'single',
            question: "Cava Gran Reserva 的最短酒渣陳年是？",
            options: ["A. 30 個月","B. 9 個月","C. 18 個月","D. 60 個月"],
            correct: 0,
            explanation: "Reserva 18、Paraje Calificado 36。"
          },
          {
            type: 'single',
            question: "Franciacorta NV 的最短酒渣陳年是？",
            options: ["A. 36 個月","B. 18 個月","C. 9 個月","D. 12 個月"],
            correct: 1,
            explanation: "Millesimato 30、Riserva 60。"
          },
          {
            type: 'single',
            question: "下列哪一個不是法國的 Crémant AOC？",
            options: ["A. Crémant de Limoux","B. Crémant du Jura","C. Crémant de Provence","D. Crémant de Loire"],
            correct: 2,
            explanation: "八個：Alsace、Bourgogne、Loire、Bordeaux、Die、Jura、Limoux、Savoie。"
          }
        ]
      }
    }
  }
]
