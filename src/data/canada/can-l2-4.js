/**
 * CAN-L2-4 BC 的其他產區
 * 事實來源：Wine With Seth winewiki（British Columbia、Okanagan Valley、Similkameen Valley）、GuildSomm「Exploring British Columbia's Geographical Indications」、BC 政府新聞稿（2022-06-28）、Wine Industry Advisor（2020-07-10 Cowichan Valley）、MyWinePal（Okanagan 次 GI）。數字一律標註來源；來源有出入者（Okanagan 的酒廠數與面積、Similkameen 的面積與主要品種、Golden Mile Slopes 的指定年份、各 GI 的品種比例等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "BC 的其他產區",
    subtitle: "Similkameen、Fraser Valley、Vancouver Island、Gulf Islands 與 Thompson-Shuswap",
    icon: "🌲",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "Similkameen Valley",
    highlights: [
      { id: 1, icon: "🏜️", title: "乾燥的山谷", content: "沿 Similkameen River 的東西向狹長山谷，在 Hedley 與 Cawston 之間約 27 公里；半乾燥，年降雨約 330 mm，夏季午後 30–35°C，日夜溫差有時超過 20°C（Wine With Seth）" },
      { id: 2, icon: "🌱", title: "有機之都", content: "Similkameen 的 BC 認證有機葡萄園比例偏高，被稱為加拿大的有機之都；目前沒有次 GI（Wine With Seth）。面積與酒廠數各來源略有不同（約 700 或 768 英畝；20 餘家或 22 家），不列入測驗" },
      { id: 3, icon: "🍷", title: "品種", content: "Syrah 是暖地紅酒的代表，Bordeaux 品種（Cabernet Sauvignon、Merlot、Cabernet Franc、Petit Verdot）撐起紅酒調配，較涼的高坡種 Pinot Noir；白酒有 Pinot Gris、Chardonnay、Riesling、Gewürztraminer。Cabernet Sauvignon 與 Syrah 誰是主角，不同頁面說法不一（Wine With Seth、GuildSomm）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Similkameen 乾燥、風大、有機比例高。</p></div>"
  },
  {
    title: "沿岸與島嶼：涼爽海洋氣候",
    highlights: [
      { id: 1, icon: "🌧️", title: "Fraser Valley", content: "涼爽濕潤的海洋性氣候，適合芳香白酒與 Pinot Noir 等冷涼氣候紅酒；約 43 家酒廠、194 英畝（GuildSomm，單一來源）" },
      { id: 2, icon: "🏝️", title: "Vancouver Island 與 Cowichan Valley", content: "涼爽的沿岸海洋氣候，Pinot Noir、Pinot Gris 與 Ortega 是重點；約 22 家酒廠、321 英畝（GuildSomm）。Cowichan Valley 於 2020 年 7 月 10 日被認定為次 GI，是 Okanagan 以外的第一個次 GI；常見品種有 Ortega、Bacchus、Gewürztraminer、Pinot Gris、Maréchal Foch 與 Pinot Noir（Wine Industry Advisor）" },
      { id: 3, icon: "🌊", title: "Gulf Islands", content: "海洋性微氣候、冬季溫和；Pinot Noir 與 Pinot Gris 占葡萄藤的 53%；約 12 家酒廠、110 英畝（GuildSomm）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">沿岸與島嶼的葡萄酒，受冷涼的海洋氣候影響。</p></div>"
  },
  {
    title: "內陸的小產區",
    highlights: [
      { id: 1, icon: "☀️", title: "Thompson Valley 與 Lillooet", content: "Thompson Valley 為大陸性氣候，夏熱冬寒，有 Riesling、Chardonnay、Pinot Noir、Marquette 與 Maréchal Foch，約 3 家酒廠、93 英畝；Lillooet 白天熱、夜晚涼，適合 Syrah、Merlot 與 Sauvignon Blanc，約 2 家酒廠、50 英畝，是最小的 GI（GuildSomm）" },
      { id: 2, icon: "🌤️", title: "Shuswap", content: "受湖泊影響，夏溫暖、冬涼濕；Siegerrebe 與 Ortega 合計占葡萄藤的 24%，Maréchal Foch 是種植最多的紅品種（21%）；約 9 家酒廠、107 英畝（GuildSomm，單一來源）" },
      { id: 3, icon: "⛰️", title: "Kootenays", content: "高海拔（450–750 公尺）的冷涼大陸性氣候；Pinot Noir 占 27%、Gewürztraminer 占 9%；約 6 家酒廠、116 英畝（GuildSomm，單一來源）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">內陸小產區的規模都很小，各自以不同品種為特色。</p></div>"
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
            question: "被稱為加拿大「有機之都」的 BC 產區是？",
            options: ["A. Similkameen Valley","B. Fraser Valley","C. Shuswap","D. Gulf Islands"],
            correct: 0,
            explanation: "Similkameen Valley。"
          },
          {
            type: 'single',
            question: "Cowichan Valley 於哪一年被認定為次 GI？",
            options: ["A. 2005","B. 2015","C. 2020","D. 2022"],
            correct: 2,
            explanation: "2020 年 7 月 10 日，是 Okanagan 以外的第一個次 GI。"
          },
          {
            type: 'single',
            question: "Cowichan Valley 屬於哪個 GI？",
            options: ["A. Gulf Islands","B. Fraser Valley","C. Okanagan Valley","D. Vancouver Island"],
            correct: 3,
            explanation: "Vancouver Island。"
          },
          {
            type: 'single',
            question: "Similkameen Valley 目前有次 GI 嗎？",
            options: ["A. 沒有","B. 有一個","C. 有五個","D. 有十一個"],
            correct: 0,
            explanation: "目前不再細分次 GI（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "BC 面積最小的 GI 是？",
            options: ["A. Lillooet","B. Okanagan Valley","C. Vancouver Island","D. Fraser Valley"],
            correct: 0,
            explanation: "Lillooet，約 2 家酒廠、50 英畝。"
          },
          {
            type: 'single',
            question: "哪個 BC 的 GI 位於高海拔（450–750 公尺）的冷涼大陸性氣候？",
            options: ["A. Gulf Islands","B. Kootenays","C. Similkameen Valley","D. Lillooet"],
            correct: 1,
            explanation: "Kootenays。"
          }
        ]
      }
    }
  }
]
