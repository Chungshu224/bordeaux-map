/**
 * CL-L2-2 Central Valley I：Maipo 與 Cachapoal
 * 事實來源：Wine With Seth（Chilean wine regions、Maipo、Cachapoal、Colchagua、Curicó、Casablanca、Itata、VIGNO 各河谷頁）、Decanter（Chile close-up: Aconcagua, Maipo and Rapel valleys；Concha y Toro joins old vine Carignan club in Chile，2015）、Wikipedia（Aconcagua、Maule Valley、Elqui Valley）、Concha y Toro（Limarí）、Wine Anorak（VIGNO，2022）。數字一律標註來源；來源有出入者（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Central Valley I：Maipo 與 Cachapoal",
    subtitle: "智利 Cabernet 的核心，與 Rapel 的北半",
    icon: "🍷",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Maipo Valley 概況",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "緊鄰 Santiago 南方，約南緯 33 至 34 度，Maipo 河橫貫，從安地斯延伸到海岸山脈（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "Cabernet 之鄉", content: "Wine With Seth：被視為智利 Cabernet Sauvignon 的核心，Cabernet 占種植 60% 以上、約 11,000 公頃；另有 Carmenère、Merlot、Syrah、Cabernet Franc" },
      { id: 3, icon: "🗺️", title: "次級 DO", content: "Puente Alto、Pirque、Buin、Isla de Maipo、Talagante、María Pinto（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maipo 是離首都最近、也最具代表性的 Cabernet 產區。</p></div>"
  },
  {
    title: "Maipo 的風土",
    highlights: [
      { id: 1, icon: "🌡️", title: "氣候", content: "地中海型氣候，夏熱乾燥、冬涼濕潤；年降雨 300 至 400 公釐，集中在 5 至 8 月，仰賴安地斯融雪灌溉（Wine With Seth）" },
      { id: 2, icon: "🪨", title: "土壤", content: "Alto Maipo 山麓是圓礫河石、砂與少量黏土，排水好、有機質少；中部黏壤土保水較多（Wine With Seth）；Decanter 形容 Puente Alto 一帶土壤多石" },
      { id: 3, icon: "🌗", title: "日夜溫差", content: "成熟期日夜溫差約 15 至 18°C（Wine With Seth）；Decanter 認為大溫差有助酚類成熟" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maipo 是「山麓礫石加日夜溫差」的 Cabernet 風土。</p></div>"
  },
  {
    title: "Maipo 的歷史與標誌酒",
    highlights: [
      { id: 1, icon: "🏛️", title: "老牌酒莊", content: "Cousiño-Macul（1856）、Santa Rita（1880，Buin）、Concha y Toro（1883，Pirque）（Wine With Seth）" },
      { id: 2, icon: "🍷", title: "標誌酒", content: "Don Melchor 首個年份是 1987（1990 年上市）；Almaviva 於 1996 年由 Concha y Toro 與 Baron Philippe de Rothschild 各半合資；Viñedo Chadwick 首個年份是 1999（Wine With Seth）" },
      { id: 3, icon: "🌐", title: "柏林盲品（單一來源）", content: "Wine With Seth 記載 2004 年 1 月的柏林盲品：Chadwick 2000 第一，在 Lafite 2000 與 Margaux 2001 之前；Seña 2001 第二" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maipo 的老牌酒莊與標誌酒，讓智利 Cabernet 站上世界舞台。</p></div>"
  },
  {
    title: "Cachapoal：Rapel 的北半",
    highlights: [
      { id: 1, icon: "🧭", title: "位置", content: "Rapel Valley DO 的北半，位於 Maipo 與 Colchagua 之間，約南緯 34 度；Rancagua 在中央窪地（Wine With Seth）" },
      { id: 2, icon: "📏", title: "範圍與品種", content: "Wine With Seth：約 10,800 公頃，Cabernet Sauvignon 超過 40%；橫向分區為 Andes（500–900 公尺）、Entre Cordilleras（350–500 公尺）與 Costa（Peumo、Las Cabras 一帶），數字各來源不同" },
      { id: 3, icon: "🍷", title: "代表", content: "Peumo 以 Carmenère 聞名（Concha y Toro 的 Carmín de Peumo，首個年份 1996）；Altaïr（2001）、Vik（2004）也在此（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cachapoal 是 Rapel 的北半，Peumo 的 Carmenère 是它的名片。</p></div>"
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
            question: "下列哪一個不是 Maipo 的次級 DO？",
            options: ["A. Apalta","B. Pirque","C. Buin","D. Isla de Maipo"],
            correct: 0,
            explanation: "Apalta 在 Colchagua 一帶。"
          },
          {
            type: 'single',
            question: "Maipo 最重要的紅葡萄是？",
            options: ["A. Cabernet Sauvignon","B. País","C. Pinot Noir","D. Carignan"],
            correct: 0,
            explanation: "Cabernet 占種植 60% 以上（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Don Melchor 的首個年份是？",
            options: ["A. 1987","B. 1851","C. 1999","D. 2011"],
            correct: 0,
            explanation: "1987 年份，1990 年上市。"
          },
          {
            type: 'single',
            question: "Almaviva 是哪兩者的合資？",
            options: ["A. Concha y Toro 與 Baron Philippe de Rothschild","B. Errázuriz 與 Mondavi","C. Santa Rita 與 Carmen","D. Torres 與 Valdivieso"],
            correct: 0,
            explanation: "1996 年成立，各占一半。"
          },
          {
            type: 'single',
            question: "Rapel Valley DO 由哪兩個河谷組成？",
            options: ["A. Cachapoal 與 Colchagua","B. Maipo 與 Casablanca","C. Curicó 與 Maule","D. Elqui 與 Limarí"],
            correct: 0,
            explanation: "Cachapoal 是北半，Colchagua 是南半。"
          },
          {
            type: 'single',
            question: "Cachapoal 的 Peumo 以什麼品種聞名？",
            options: ["A. Carmenère","B. Riesling","C. Chenin Blanc","D. Torrontés"],
            correct: 0,
            explanation: "例如 Concha y Toro 的 Carmín de Peumo。"
          }
        ]
      }
    }
  }
]
