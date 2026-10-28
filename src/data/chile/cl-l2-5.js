/**
 * CL-L2-5 Level 2 綜合評量
 * 事實來源：Wine With Seth（Chilean wine regions、Maipo、Cachapoal、Colchagua、Curicó、Casablanca、Itata、VIGNO 各河谷頁）、Decanter（Chile close-up: Aconcagua, Maipo and Rapel valleys；Concha y Toro joins old vine Carignan club in Chile，2015）、Wikipedia（Aconcagua、Maule Valley、Elqui Valley）、Concha y Toro（Limarí）、Wine Anorak（VIGNO，2022）。數字一律標註來源；來源有出入者（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "以綜合測驗檢視 Level 2 的產區學習成果",
    icon: "📝",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Level 2 回顧",
    highlights: [
      { id: 1, icon: "🌊", title: "由北到中", content: "Elqui（沙漠、Syrah、皮斯可）、Limarí（Camanchaca 霧、石灰質）、Aconcagua 區的 Valley／Casablanca／San Antonio" },
      { id: 2, icon: "🍷", title: "中央谷地", content: "Maipo（Cabernet、Don Melchor 1987、Almaviva 1996）、Cachapoal（Peumo Carmenère）、Colchagua（Apalta、Clos Apalta）、Curicó（Teno／Lontué）、Maule（VIGNO）" },
      { id: 3, icon: "🧭", title: "南部", content: "Itata（老藤 País 與 Cinsault）、Bío-Bío、Malleco 的南部邊疆" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字會隨來源更新，因此測驗只考觀念與已標註來源的資料。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "Casablanca 的晨霧來自？",
            options: ["A. Humboldt 寒流","B. 安地斯融雪","C. 沙漠熱風","D. Maule 河"],
            correct: 0,
            explanation: "寒流帶來晨霧。"
          },
          {
            type: 'single',
            question: "Aconcagua Valley 為什麼偏暖？",
            options: ["A. 山脈走廊擋住海洋影響","B. 位於南極圈","C. 有大型湖泊","D. 沒有灌溉"],
            correct: 0,
            explanation: "Decanter 的描述。"
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
            question: "Rapel Valley DO 由哪兩個河谷組成？",
            options: ["A. Cachapoal 與 Colchagua","B. Maipo 與 Casablanca","C. Curicó 與 Maule","D. Elqui 與 Limarí"],
            correct: 0,
            explanation: "Cachapoal 北、Colchagua 南。"
          },
          {
            type: 'single',
            question: "Peumo 以什麼品種聞名？",
            options: ["A. Carmenère","B. Riesling","C. Torrontés","D. Chenin Blanc"],
            correct: 0,
            explanation: "例如 Carmín de Peumo。"
          },
          {
            type: 'single',
            question: "Clos Apalta 屬於哪家酒莊？",
            options: ["A. Lapostolle","B. Concha y Toro","C. Cousiño-Macul","D. Carmen"],
            correct: 0,
            explanation: "Lapostolle，首個年份 1997。"
          },
          {
            type: 'single',
            question: "Curicó 的兩個亞區是？",
            options: ["A. Teno 與 Lontué","B. Apalta 與 Lolol","C. Pirque 與 Buin","D. Itata 與 Malleco"],
            correct: 0,
            explanation: "以兩條河命名。"
          },
          {
            type: 'single',
            question: "VIGNO 對 Carignan 樹齡的要求是？",
            options: ["A. 至少 30 年","B. 至少 5 年","C. 至少 10 年","D. 沒有要求"],
            correct: 0,
            explanation: "同時須乾耕、上市前陳年兩年。"
          },
          {
            type: 'single',
            question: "Elqui 的年降雨大約是？",
            options: ["A. 不到 70 公釐","B. 約 700 公釐","C. 約 1,500 公釐","D. 超過 3,000 公釐"],
            correct: 0,
            explanation: "Wikipedia：不到 70 公釐。"
          },
          {
            type: 'single',
            question: "Itata 的主要紅葡萄與傳統是？",
            options: ["A. 老藤、乾耕的 País","B. 灌溉的 Cabernet Sauvignon","C. 溫室 Pinot Noir","D. Torrontés"],
            correct: 0,
            explanation: "País 樹齡 80 至 150 年以上。"
          },
          {
            type: 'single',
            question: "Limarí 酒款的礦物感常與什麼連結？",
            options: ["A. 土壤中的碳酸鈣","B. 火山灰","C. 人工添加","D. 海底泥炭"],
            correct: 0,
            explanation: "Concha y Toro 的描述。"
          }
        ]
      }
    }
  }
]
