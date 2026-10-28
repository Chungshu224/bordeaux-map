/**
 * CL-L2-4 北部與南部：Coquimbo 與 Sur 區
 * 事實來源：Wine With Seth（Chilean wine regions、Maipo、Cachapoal、Colchagua、Curicó、Casablanca、Itata、VIGNO 各河谷頁）、Decanter（Chile close-up: Aconcagua, Maipo and Rapel valleys；Concha y Toro joins old vine Carignan club in Chile，2015）、Wikipedia（Aconcagua、Maule Valley、Elqui Valley）、Concha y Toro（Limarí）、Wine Anorak（VIGNO，2022）。數字一律標註來源；來源有出入者（亞區劃分、橫向分區海拔、VIGNO 的 Carignan 最低比例、Casablanca 開發年份、Limarí 距離）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "北部與南部：Coquimbo 與 Sur 區",
    subtitle: "Elqui、Limarí、Choapa，以及 Itata、Bío-Bío、Malleco",
    icon: "🧭",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "Elqui：沙漠邊緣的葡萄園",
    highlights: [
      { id: 1, icon: "📍", title: "位置", content: "位於 Coquimbo 區，Santiago 以北約 400 公里，在 Atacama 沙漠的南端；葡萄園由太平洋沿岸一路延伸到安地斯（Wikipedia）" },
      { id: 2, icon: "🌵", title: "氣候與海拔", content: "Wikipedia：晴朗的沙漠型氣候，年降雨不到 70 公釐；葡萄園最高到約 2,000 公尺；太平洋與安地斯的強風使丘陵降溫" },
      { id: 3, icon: "🍇", title: "品種與皮斯可", content: "Wikipedia（約 2013 年資料）：約 286 公頃，Syrah 87 公頃居首；Syrah 在此氣候表現優異；當地以食用葡萄與皮斯可聞名，釀酒葡萄在 1990 年代才往北拓展" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Elqui 是智利最北的主要葡萄酒谷地之一，沙漠氣候靠灌溉與高度調節。</p></div>"
  },
  {
    title: "Limarí 與 Choapa",
    highlights: [
      { id: 1, icon: "🌫️", title: "Limarí 的霧", content: "半乾燥氣候，受當地稱為 Camanchaca 的晨霧調節（Wine With Seth）；Concha y Toro 描述為半乾燥的沿海氣候、穩定的海風" },
      { id: 2, icon: "🪨", title: "石灰質與礦物感", content: "Concha y Toro：土壤中有多層碳酸鈣，與酒的強烈礦物感連結；Chardonnay、Sauvignon Blanc 與 Pinot Noir 表現突出" },
      { id: 3, icon: "❓", title: "距離與 Choapa", content: "Limarí 距 Santiago 的距離各來源不同（約 300 或約 470 公里），故不出題；Choapa 在本課資料中只有名稱，沒有可引用的數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Limarí 以霧與石灰質土壤，釀出礦物感強烈的白酒。</p></div>"
  },
  {
    title: "Itata：老藤 País 與 Cinsault",
    highlights: [
      { id: 1, icon: "📍", title: "位置與氣候", content: "位於 Ñuble 區，北接 Maule、南接 Bío-Bío；溫帶偏濕，年降雨 800 至 1,200 公釐，海拔約 100 至 400 公尺（Wine With Seth）" },
      { id: 2, icon: "🍇", title: "老藤傳統", content: "País 是主要紅葡萄，樹齡 80 至 150 年以上；Cinsault 在 19 世紀引入；白葡萄 Moscatel de Alejandría 用於餐酒與皮斯可；老藤多為乾耕灌木式（Wine With Seth）" },
      { id: 3, icon: "🔄", title: "復興", content: "約 8,000 公頃（Wine With Seth）；20 世紀因中部高端酒崛起而式微，2010 年代開始復興，例如 De Martino 的 Marcelo Retamal 於 2010 至 2012 年起採購 Itata 的 País 與 Cinsault" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Itata 是智利的老藤與乾耕傳統復興地。</p></div>"
  },
  {
    title: "Bío-Bío 與 Malleco：往南的邊疆",
    highlights: [
      { id: 1, icon: "🧭", title: "Bío-Bío", content: "Wine With Seth 說它與 Itata 有相同的品種與土壤（花崗岩與火山質），同樣以乾耕老藤為特色" },
      { id: 2, icon: "🌱", title: "Sur 區的定位", content: "Wine With Seth 稱南部是老藤 País、Carignan、Moscatel 與冷涼氣候品種的「快速成長邊疆」；降雨足以乾耕" },
      { id: 3, icon: "⚠️", title: "資料限制", content: "Malleco 在本課資料中只出現在名單裡，沒有可引用的面積或氣候數字；因此只考「它屬於南部邊疆」這個定位" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越往南越濕涼，老藤與冷涼品種並存。</p></div>"
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
            question: "Elqui 位於哪一個沙漠的南端？",
            options: ["A. Atacama","B. Patagonia","C. Sahara","D. Mojave"],
            correct: 0,
            explanation: "位於 Coquimbo 區。"
          },
          {
            type: 'single',
            question: "Elqui 一帶除了葡萄酒，還以哪種烈酒聞名？",
            options: ["A. Pisco","B. Tequila","C. Calvados","D. Grappa"],
            correct: 0,
            explanation: "當地以食用葡萄與皮斯可聞名。"
          },
          {
            type: 'single',
            question: "Limarí 的晨霧在當地叫什麼？",
            options: ["A. Camanchaca","B. Zonda","C. Mistral","D. Cierzo"],
            correct: 0,
            explanation: "Wine With Seth 的說法。"
          },
          {
            type: 'single',
            question: "Limarí 酒款礦物感強烈，常與什麼連結？",
            options: ["A. 土壤中的碳酸鈣","B. 火山灰","C. 海底沉積泥炭","D. 人工添加"],
            correct: 0,
            explanation: "Concha y Toro 的描述。"
          },
          {
            type: 'single',
            question: "Itata 的主要紅葡萄是？",
            options: ["A. País","B. Cabernet Sauvignon","C. Syrah","D. Merlot"],
            correct: 0,
            explanation: "樹齡可達 80 至 150 年以上。"
          },
          {
            type: 'single',
            question: "Itata 與 Bío-Bío 在位置上的關係是？",
            options: ["A. Itata 在北，Bío-Bío 在南","B. Itata 在南，Bío-Bío 在北","C. 兩者在 Atacama 沙漠中","D. 兩者是同一個谷地"],
            correct: 0,
            explanation: "Itata 北接 Maule、南接 Bío-Bío。"
          }
        ]
      }
    }
  }
]
