/**
 * CL-L2-3 Central Valley II：Colchagua、Curicó 與 Maule
 * 事實來源：Wine With Seth（Chilean wine regions、Maipo、Cachapoal、Colchagua、Curicó、Casablanca、Itata、VIGNO 各河谷頁）、Decanter（Chile close-up: Aconcagua, Maipo and Rapel valleys；Concha y Toro joins old vine Carignan club in Chile，2015）、Wikipedia（Aconcagua、Maule Valley、Elqui Valley）、Concha y Toro（Limarí）、Wine Anorak（VIGNO，2022）。數字一律標註來源；來源有出入者（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Central Valley II：Colchagua、Curicó 與 Maule",
    subtitle: "Apalta 的名酒、Curicó 的河谷，與 Maule 的老藤 Carignan",
    icon: "🌄",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Colchagua Valley",
    highlights: [
      { id: 1, icon: "📍", title: "位置與次產區", content: "Rapel DO 的南半，位於 Santiago 以南約 130 公里；次產區與市鎮有 Apalta、Marchigüe、Lolol 等（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "品種", content: "Wine With Seth 的地區頁指出，Colchagua 擁有智利最大的 Carmenère 種植，也以濃郁的 Cabernet Sauvignon 與 Syrah 聞名" },
      { id: 3, icon: "📏", title: "橫向分區（數字各頁不一）", content: "Wine With Seth 的 Colchagua 頁：Costa 100–300 公尺、Entre Cordilleras 200–500 公尺、Andes 400–800 公尺（以 Apalta 圓形劇場為中心）；同頁的整體海拔又寫 100–500 公尺，故不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Colchagua 是 Rapel 的南半，以 Carmenère 與濃郁紅酒聞名。</p></div>"
  },
  {
    title: "Apalta 與新興次產區",
    highlights: [
      { id: 1, icon: "🏔️", title: "Apalta", content: "Decanter：氣候乾燥、日夜溫差大，適合 Bordeaux 品種；Montes 的山坡 Carmenère 長在岩質黏土上。Wine With Seth：花崗岩分解土、朝北山坡" },
      { id: 2, icon: "🍷", title: "Clos Apalta", content: "Lapostolle 創立於 1994 年，Clos Apalta 首個年份是 1997；2005 年份被 Wine Spectator 選為 2008 年度酒（Wine With Seth）" },
      { id: 3, icon: "🌿", title: "Marchigüe 與 Lolol", content: "Decanter：Marchigüe 為黏土土壤，Montes 稱它為「智利的 Pomerol」並種 Merlot；Lolol 在貧瘠近海土壤上顯示 Carmenère 的潛力" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Apalta 是 Colchagua 的明星，Marchigüe 與 Lolol 是新興次產區。</p></div>"
  },
  {
    title: "Curicó Valley",
    highlights: [
      { id: 1, icon: "🌊", title: "河流與位置", content: "位於 Colchagua 與 Maule 之間；Teno 河與 Lontué 河在 Curicó 附近匯成 Mataquito 河（Wine With Seth）" },
      { id: 2, icon: "🗺️", title: "亞區與品種", content: "Teno（西，以 Curicó 市為中心）與 Lontué（東，Molina 一帶）；約 19,000 公頃、年降雨 600 至 700 公釐，以 Cabernet Sauvignon 與 Sauvignon Blanc 為主（Wine With Seth）" },
      { id: 3, icon: "🏛️", title: "歷史", content: "Miguel Torres Chile 於 1979 年設立；San Pedro 1865 年、Valdivieso 1879 年（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Curicó 以 Teno 與 Lontué 兩河命名亞區，是 Torres 進入智利的據點。</p></div>"
  },
  {
    title: "Maule Valley 與 VIGNO",
    highlights: [
      { id: 1, icon: "📍", title: "位置與氣候", content: "Santiago 以南約 250 公里，中央谷地南端；地中海型氣候，年降雨約 735 公釐，是智利較涼的產區之一，由東向西流的 Maule 河緩和氣候（Wikipedia）" },
      { id: 2, icon: "🍇", title: "品種面積（約 2013 年）", content: "Wikipedia 表列：Cabernet Sauvignon 14,475 公頃、Chardonnay 4,631、Mission（País）3,364、Sauvignon Blanc 2,838、Merlot 2,137、Carmenère 2,045、Syrah 1,182、Carignan 377；同頁總面積寫 785 公頃，與表不合，故不出題" },
      { id: 3, icon: "🌱", title: "VIGNO", content: "Vignadores de Carignan 於 2010 至 2011 年成形（Wine Anorak 記 2010 年集體成立，Decanter 記 2011 年創立）；Maule 乾耕老藤 Carignan：樹齡至少 30 年、上市前陳年兩年。Carignan 最低比例各來源不同（65%、70%、85%），故不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Maule 以較涼的氣候、乾耕老藤與 VIGNO 聞名。</p></div>"
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
            question: "Colchagua 是 Rapel Valley DO 的哪一半？",
            options: ["A. 南半","B. 北半","C. 東半","D. 它不屬於 Rapel"],
            correct: 0,
            explanation: "Cachapoal 是北半。"
          },
          {
            type: 'single',
            question: "Wine With Seth 指出 Colchagua 擁有智利最大的哪個品種種植？",
            options: ["A. Carmenère","B. País","C. Sauvignon Blanc","D. Pinot Noir"],
            correct: 0,
            explanation: "地區頁的描述。"
          },
          {
            type: 'single',
            question: "Clos Apalta 是哪家酒莊的酒？",
            options: ["A. Lapostolle","B. Concha y Toro","C. Cousiño-Macul","D. Santa Rita"],
            correct: 0,
            explanation: "Lapostolle 創立於 1994 年，首個年份 1997。"
          },
          {
            type: 'single',
            question: "Curicó 的兩個亞區是？",
            options: ["A. Teno 與 Lontué","B. Apalta 與 Lolol","C. Pirque 與 Buin","D. Leyda 與 Casablanca"],
            correct: 0,
            explanation: "以兩條河命名。"
          },
          {
            type: 'single',
            question: "Miguel Torres Chile 設立於哪一年？",
            options: ["A. 1979","B. 1851","C. 1996","D. 2011"],
            correct: 0,
            explanation: "1979 年（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "VIGNO 對 Carignan 老藤的樹齡要求是？",
            options: ["A. 至少 30 年","B. 至少 5 年","C. 至少 10 年","D. 沒有要求"],
            correct: 0,
            explanation: "同時須乾耕，上市前陳年兩年。"
          }
        ]
      }
    }
  }
]
