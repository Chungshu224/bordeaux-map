/**
 * CL-L2-1 Aconcagua 區：Aconcagua Valley、Casablanca 與 San Antonio
 * 事實來源：Wine With Seth（Chilean wine regions、Maipo、Cachapoal、Colchagua、Curicó、Casablanca、Itata、VIGNO 各河谷頁）、Decanter（Chile close-up: Aconcagua, Maipo and Rapel valleys；Concha y Toro joins old vine Carignan club in Chile，2015）、Wikipedia（Aconcagua、Maule Valley、Elqui Valley）、Concha y Toro（Limarí）、Wine Anorak（VIGNO，2022）。數字一律標註來源；來源有出入者（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Aconcagua 區：Aconcagua Valley、Casablanca 與 San Antonio",
    subtitle: "從被山脈保護的暖區，到受寒流影響的涼爽海岸",
    icon: "🌊",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Aconcagua 區的三個亞區",
    highlights: [
      { id: 1, icon: "🗺️", title: "三個亞區", content: "Wine With Seth 將 Aconcagua 區分成 Aconcagua Valley、Casablanca Valley 與 San Antonio（含 Leyda）；Wikipedia 的版本另列 Aconcagua Costa，各來源的分法略有不同" },
      { id: 2, icon: "🌡️", title: "由暖到涼", content: "Aconcagua Valley 溫暖，以 Cabernet Sauvignon 與 Syrah 聞名；Casablanca 與 San Antonio 受太平洋影響，偏涼，白葡萄表現突出" },
      { id: 3, icon: "🧭", title: "位置", content: "Aconcagua Valley 約在 Santiago 以北 65 公里（Wikipedia）；Casablanca 約在 Santiago 以西 70 公里（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">由內陸往海邊，Aconcagua 區從溫暖的紅酒谷地一路走到涼爽的白酒產區。</p></div>"
  },
  {
    title: "Aconcagua Valley：被山脈保護的暖區",
    highlights: [
      { id: 1, icon: "🏔️", title: "山脈屏障", content: "Decanter 描述一道山脈走廊把海洋影響擋在外面，使它成為智利最溫暖的微氣候之一；日夜溫差大，對色澤形成影響明顯" },
      { id: 2, icon: "🌧️", title: "氣候與土壤", content: "Wikipedia：地中海型氣候，年降雨約 215 公釐；土壤東邊為黏土與砂，西邊為花崗岩與黏土" },
      { id: 3, icon: "🏆", title: "Seña 與柏林盲品", content: "Seña 是 Errázuriz 與 Mondavi 的合資品牌；2004 年柏林盲品中，Seña 名列 Château Lafite 與 Château Margaux 之前（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Aconcagua Valley 靠山脈屏障形成暖區，是智利紅酒的重要產地。</p></div>"
  },
  {
    title: "Casablanca Valley：智利冷涼氣候的先驅",
    highlights: [
      { id: 1, icon: "🌫️", title: "霧與海風", content: "來自 Humboldt 寒流的晨霧向內陸移動，午後有西邊吹來的海風；距太平洋約 25 公里，海拔 200 至 400 公尺（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "品種", content: "Sauvignon Blanc 是領導品種，Chardonnay 居次；Pinot Noir 與冷涼氣候的 Syrah 屬次要（Wine With Seth）" },
      { id: 3, icon: "❄️", title: "風險與起步", content: "主要風險是春霜（9 至 11 月）；開發年份各處記為 1980 年代初到中期，Wine With Seth 記 1982 年 Pablo Morandé 在 Tapihue 種下試驗性 Chardonnay" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Casablanca 是智利冷涼白酒的代表，霧與海風是它的關鍵詞。</p></div>"
  },
  {
    title: "San Antonio 與 Leyda",
    highlights: [
      { id: 1, icon: "🌊", title: "更靠海", content: "San Antonio 受太平洋影響，Wine With Seth 以 Sauvignon Blanc、Chardonnay 為代表，Pinot Noir 的比重逐漸增加" },
      { id: 2, icon: "🧭", title: "Leyda", content: "Leyda 是 San Antonio 內的一個 Zone；Decanter 的 Aconcagua 報導提到 Viña Leyda 這個生產者" },
      { id: 3, icon: "⚠️", title: "資料限制", content: "本課未取得 San Antonio 與 Leyda 的海拔、降雨與面積數字，這些不列入測驗" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越靠近太平洋越涼，白葡萄與 Pinot Noir 因此受到重視。</p></div>"
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
            question: "Wine With Seth 將 Aconcagua 區分成哪三個亞區？",
            options: ["A. Aconcagua Valley、Casablanca Valley、San Antonio（含 Leyda）","B. Maipo、Cachapoal、Colchagua","C. Elqui、Limarí、Choapa","D. Itata、Bío-Bío、Malleco"],
            correct: 0,
            explanation: "其中 Leyda 是 San Antonio 內的一個 Zone。"
          },
          {
            type: 'single',
            question: "Casablanca 的晨霧來自什麼？",
            options: ["A. Humboldt 寒流","B. 安地斯融雪","C. Maule 河","D. 沙漠熱風"],
            correct: 0,
            explanation: "寒流帶來晨霧，午後再有海風。"
          },
          {
            type: 'single',
            question: "Casablanca 的領導品種是？",
            options: ["A. Sauvignon Blanc","B. Carmenère","C. Carignan","D. País"],
            correct: 0,
            explanation: "Sauvignon Blanc 為首，Chardonnay 居次。"
          },
          {
            type: 'single',
            question: "Casablanca 的主要栽培風險是？",
            options: ["A. 春霜（9 至 11 月）","B. 終年乾旱","C. 根瘤蚜","D. 冬季洪水"],
            correct: 0,
            explanation: "Wine With Seth 指出春霜是主要風險。"
          },
          {
            type: 'single',
            question: "Aconcagua Valley 比海岸亞區更暖，主要原因是？",
            options: ["A. 山脈走廊擋住海洋影響","B. 緯度更高","C. 位於火山上","D. 沒有日夜溫差"],
            correct: 0,
            explanation: "Decanter 的描述。"
          },
          {
            type: 'single',
            question: "Seña 是哪兩者的合資品牌？",
            options: ["A. Errázuriz 與 Mondavi","B. Concha y Toro 與 Mouton Rothschild","C. Torres 與 Lapostolle","D. Carmen 與 Santa Rita"],
            correct: 0,
            explanation: "Decanter 與 Wikipedia 皆如此記載。"
          }
        ]
      }
    }
  }
]
