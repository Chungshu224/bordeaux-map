/**
 * CAN-L2-3 Okanagan Valley
 * 事實來源：Wine With Seth winewiki（British Columbia、Okanagan Valley、Similkameen Valley）、GuildSomm「Exploring British Columbia's Geographical Indications」、BC 政府新聞稿（2022-06-28）、Wine Industry Advisor（2020-07-10 Cowichan Valley）、MyWinePal（Okanagan 次 GI）。數字一律標註來源；來源有出入者（Okanagan 的酒廠數與面積、Similkameen 的面積與主要品種、Golden Mile Slopes 的指定年份、各 GI 的品種比例等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Okanagan Valley",
    subtitle: "Okanagan 的次產區、品種與從北到南的氣候變化",
    icon: "🏞️",
    background: 'linear-gradient(135deg, #C8102E 0%, #7A0A1C 100%)'
  },
  {
    title: "BC 的地理標示系統",
    highlights: [
      { id: 1, icon: "🗂️", title: "9 個 GI 與 12 個次 GI", content: "BC 目前有 9 個區域 GI（Okanagan Valley、Similkameen Valley、Fraser Valley、Vancouver Island、Gulf Islands、Thompson Valley、Shuswap、Kootenays、Lillooet）與 12 個次 GI（GuildSomm、BC 政府 2022 年新聞稿）；「British Columbia」本身是全省層級的名稱，若連它一起算，有些來源會寫成 10 個" },
      { id: 2, icon: "📅", title: "Okanagan 次 GI 的指定", content: "Wine With Seth 記載：Golden Mile Bench 於 2015 年成為 BC 第一個次 GI，Okanagan Falls 於 2018 年，Naramata Bench 與 Skaha Bench 於 2019 年；BC 政府 2022 年 6 月 28 日新聞稿宣布新增六個 Okanagan 次 GI：East Kelowna Slopes、Lake Country、South Kelowna Slopes、Summerland Bench、Summerland Lakefront、Summerland Valleys" },
      { id: 3, icon: "🔢", title: "Okanagan 的 11 個次 GI", content: "Golden Mile Bench、Golden Mile Slopes、Naramata Bench、Okanagan Falls、Skaha Bench、East Kelowna Slopes、Lake Country、South Kelowna Slopes、Summerland Bench、Summerland Lakefront、Summerland Valleys。Golden Mile Slopes 的指定年份各來源未說明，不列入測驗（GuildSomm）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">次 GI 的名單在 2022 年一口氣增加。</p></div>"
  },
  {
    title: "Okanagan 的規模與位置",
    highlights: [
      { id: 1, icon: "📍", title: "BC 的主角", content: "Okanagan Valley GI 於 1990 年指定（Wine With Seth）。它占 BC 種植面積約 86%（Wine With Seth）；酒廠數與面積各來源不同（GuildSomm：226 家、10,920 英畝；Wine With Seth：約 186 家、9,617 英畝），不列入測驗" },
      { id: 2, icon: "🌿", title: "Naramata Bench", content: "位於 Penticton 以北、Okanagan Lake 東岸；約 1,400 生長度日，受湖泊調節；土壤是冰河退去後留下的冰湖沉積物；海拔約 650–700 公尺、朝西的斜坡（MyWinePal，2019 年資料）" },
      { id: 3, icon: "🏔️", title: "Cowichan 以外都在 Okanagan", content: "12 個次 GI 中，11 個在 Okanagan Valley，另一個是 Vancouver Island 的 Cowichan Valley（GuildSomm）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Okanagan 占 BC 的絕大部分，次 GI 也幾乎全在這裡。</p></div>"
  },
  {
    title: "從南到北的風格",
    highlights: [
      { id: 1, icon: "🔥", title: "南段：紅酒", content: "較暖的南段適合 Cabernet Sauvignon 與 Syrah 等紅品種；台地上多種 Bordeaux 品種（MyWinePal、Wine With Seth）" },
      { id: 2, icon: "🍃", title: "中北段：白酒與 Pinot Noir", content: "Kelowna 一帶較適合 Riesling、Pinot Gris 等芳香白酒與 Pinot Noir 等較涼氣候的紅酒（MyWinePal）；Naramata Bench 的主要品種為 Merlot（23%）、Pinot Gris（17%）、Chardonnay（13%）（同一來源，單一來源的數字）" },
      { id: 3, icon: "🔬", title: "為什麼要分次 GI", content: "谷地南北長約 175 公里，海拔、湖泊影響與土壤差異大，次 GI 讓標籤能反映更具體的產地。依現行法規（B.C. Reg. 168/2018）第 57 條，標示 GI（含次 GI）時至少 85% 的葡萄須來自該範圍；2020 年的報導（Wine Industry Advisor）曾寫 95%，兩者不一致，以法規為準，次 GI 標籤另須同時標出其所屬的 GI（BC Laws）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南邊偏紅酒、北邊偏白酒，次 GI 把這個差異寫在標籤上。</p></div>"
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
            question: "BC 目前有幾個區域 GI（不含 British Columbia 本身）？",
            options: ["A. 5","B. 9","C. 12","D. 20"],
            correct: 1,
            explanation: "9 個（GuildSomm、BC 政府）。"
          },
          {
            type: 'single',
            question: "BC 目前共有幾個次 GI？",
            options: ["A. 2","B. 6","C. 12","D. 30"],
            correct: 2,
            explanation: "12 個：Okanagan 11 個加上 Cowichan Valley。"
          },
          {
            type: 'single',
            question: "BC 的第一個次 GI 是？",
            options: ["A. Naramata Bench","B. Golden Mile Bench","C. Skaha Bench","D. Lake Country"],
            correct: 1,
            explanation: "Golden Mile Bench，2015 年（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "2022 年 6 月新增的六個次 GI 屬於哪個 GI？",
            options: ["A. Similkameen Valley","B. Vancouver Island","C. Okanagan Valley","D. Fraser Valley"],
            correct: 2,
            explanation: "全部在 Okanagan Valley。"
          },
          {
            type: 'single',
            question: "依現行 BC 法規，次 GI 標籤（如 Naramata Bench）的酒，至少多少比例的葡萄須來自該範圍？",
            options: ["A. 51%","B. 75%","C. 85%","D. 95%"],
            correct: 2,
            explanation: "85%（B.C. Reg. 168/2018 第 57 條）。"
          },
          {
            type: 'single',
            question: "下列何者是 2022 年新增的 Okanagan 次 GI？",
            options: ["A. Summerland Bench","B. Naramata Bench","C. Okanagan Falls","D. Skaha Bench"],
            correct: 0,
            explanation: "Summerland Bench。其餘三個在 2022 年之前就已指定。"
          }
        ]
      }
    }
  }
]
