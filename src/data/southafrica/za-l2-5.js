/**
 * ZA-L2-5 Cape South Coast
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Cape South Coast",
    subtitle: "Hemel-en-Aarde、Elgin、Elim",
    icon: "🌬️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Region 與氣候",
    highlights: [
      { id: 1, icon: "🌐", title: "兩股洋流", content: "西側是冷的 Benguela 寒流，南與東側受較暖的 Agulhas 洋流影響；持續的海風降低午後氣溫、保留酸度" },
      { id: 2, icon: "📋", title: "District", content: "文字列出七個：Walker Bay、Elgin、Cape Agulhas、Overberg、Plettenberg Bay、Swellendam、Lower Duivenhoks（資料中的資訊框只列六個）" },
      { id: 3, icon: "🍇", title: "代表品種", content: "Pinot Noir、Chardonnay、Sauvignon Blanc、冷涼氣候 Syrah，以及 Cap Classique" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cape South Coast 的關鍵字：涼、海風、Pinot Noir 與 Chardonnay。</p></div>"
  },
  {
    title: "Walker Bay 與 Hemel-en-Aarde",
    highlights: [
      { id: 1, icon: "🗓️", title: "地位演變", content: "1981 年為 Overberg 的 Ward，2004 年 5 月升為 District" },
      { id: 2, icon: "🏞️", title: "三個 Hemel-en-Aarde Ward", content: "Hemel-en-Aarde Valley（2006 年 8 月，80–200 m，Bokkeveld 頁岩）、Upper Hemel-en-Aarde Valley（2006 年 8 月，200–350 m）、Hemel-en-Aarde Ridge（2009 年 6 月，240–400 m，最高最內陸）" },
      { id: 3, icon: "🏁", title: "先驅", content: "Tim Hamilton Russell 於 1975 年勘查山谷、1976 年種植、1981 年釀出第一支酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">越往內陸、海拔越高，Hemel-en-Aarde 的三個 Ward 風格差異越明顯。</p></div>"
  },
  {
    title: "Elgin 與 Elim",
    highlights: [
      { id: 1, icon: "🍎", title: "Elgin", content: "海拔約 200 至 400 公尺的涼爽高地，年降雨約 1,000 mm；20 世紀長期是最大的蘋果與梨產區，釀酒葡萄 1980 年代中期才開始；1990 年成為 Overberg 的 Ward，2011 年升為獨立 District；Chardonnay 是代表" },
      { id: 2, icon: "🌊", title: "Elim", content: "Cape Agulhas District 內的 Ward，距海約 15 至 17 公里，被稱為非洲最南端的產區；第一支 WO Elim 酒是 1999 年 Land's End Sauvignon Blanc" },
      { id: 3, icon: "💨", title: "風與鐵質土", content: "持續海風使樹冠受風修剪、產量低；ferricrete（koffieklip）、石英岩與富鐵黏土，常被連結到鹹味礦物感" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Elgin 靠「高地與涼」，Elim 靠「海風與鐵質土」，皆屬 Cape South Coast 的冷涼代表。</p></div>"
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
            question: "Walker Bay 在哪一年升格為 District？",
            options: ["A. 1981","B. 2004","C. 2011","D. 2017"],
            correct: 1,
            explanation: "2004 年 5 月；1981 年是 Overberg 的 Ward。"
          },
          {
            type: 'single',
            question: "Hemel-en-Aarde 三個 Ward 中，海拔最高、最內陸的是？",
            options: ["A. Hemel-en-Aarde Valley","B. Upper Hemel-en-Aarde Valley","C. Hemel-en-Aarde Ridge","D. Bot River"],
            correct: 2,
            explanation: "Ridge（約 240 至 400 公尺）。"
          },
          {
            type: 'single',
            question: "Elgin 在 20 世紀長期以什麼農產聞名？",
            options: ["A. 柑橘","B. 蘋果與梨","C. 小麥","D. 茶"],
            correct: 1,
            explanation: "蘋果與梨，釀酒葡萄 1980 年代中期才開始。"
          },
          {
            type: 'single',
            question: "Elim 屬於哪個 District？",
            options: ["A. Walker Bay","B. Cape Agulhas","C. Elgin","D. Swellendam"],
            correct: 1,
            explanation: "Cape Agulhas District。"
          }
        ]
      }
    }
  }
]
