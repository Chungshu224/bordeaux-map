/**
 * CL-L1-2 地理與氣候
 * 事實來源：Wine With Seth（Chile、Chilean DO system）、Wikipedia（Carménère）、SAG（Catastro Vitícola Nacional 2023 Informe ejecutivo）、Wine With Seth 引用的 Decreto 464（1995）。數字一律標註年份；來源有出入者（Costa／Entre Cordilleras／Andes 的年份、葡萄根瘤蚜年份、Carmenère 面積、DO 層級名稱）課內標明、不進測驗，並須對照 SAG 法規原文。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "地理與氣候",
    subtitle: "縱向地形、安地斯與海岸山脈、Humboldt 寒流與灌溉",
    icon: "🌊",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "南北縱向的國家",
    highlights: [
      { id: 1, icon: "🏜️", title: "從沙漠開始", content: "北部的 Atacama 沙漠年降雨不到 10 公釐，葡萄園仰賴灌溉" },
      { id: 2, icon: "🗺️", title: "14 個主要 DO 河谷", content: "Wine With Seth 以約 14 個主要 DO 河谷描述全國（其列表實際有 16 個名稱，數字僅供參考）；從北到南跨越很大的緯度" },
      { id: 3, icon: "📐", title: "緯度差與風土", content: "同一個國家，北部乾熱、南部涼濕；之後的 Level 2 會逐區說明" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利是一條細長的葡萄酒國度，緯度本身就帶來多樣的風土。</p></div>"
  },
  {
    title: "寒流、海岸山脈與安地斯",
    highlights: [
      { id: 1, icon: "🌊", title: "Humboldt 寒流", content: "寒流沿岸北上，在沿海地帶帶來晨霧與午後海風" },
      { id: 2, icon: "⛰️", title: "海岸山脈", content: "海拔約 700 至 2,500 公尺（Wine With Seth），部分阻擋海洋影響進入內陸" },
      { id: 3, icon: "🏔️", title: "安地斯", content: "Aconcagua 峰高 6,961 公尺；融雪是主要水源" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">西邊的寒流與海岸山脈、東邊的安地斯，把智利切成由西向東的幾條帶狀風土。</p></div>"
  },
  {
    title: "灌溉與根瘤蚜",
    highlights: [
      { id: 1, icon: "💧", title: "融雪灌溉", content: "葡萄園用安地斯融雪，經由水渠與現代滴灌輸送" },
      { id: 2, icon: "🌱", title: "根瘤蚜未曾立足", content: "Wine With Seth 指出根瘤蚜從未在智利立足，因此保有大量未嫁接的 vinifera（對比歐洲）" },
      { id: 3, icon: "🧭", title: "進一步的課題", content: "自根苗現況會在 Level 3 深入並以官方資料查證" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利是靠融雪灌溉、少了根瘤蚜壓力的葡萄酒國度。</p></div>"
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
            question: "Atacama 沙漠一帶年降雨約低於多少？",
            options: ["A. 10 mm","B. 100 mm","C. 500 mm","D. 900 mm"],
            correct: 0,
            explanation: "不到 10 公釐。"
          },
          {
            type: 'single',
            question: "Humboldt 寒流為沿海地帶帶來什麼？",
            options: ["A. 晨霧與午後海風","B. 夏季暴雨","C. 持續高溫","D. 冰雹"],
            correct: 0,
            explanation: "寒流帶來晨霧與海風。"
          },
          {
            type: 'single',
            question: "智利葡萄園主要的水源是？",
            options: ["A. 安地斯融雪","B. 夏季降雨","C. 海水淡化","D. 冰河湖"],
            correct: 0,
            explanation: "融雪經水渠與滴灌輸送。"
          },
          {
            type: 'single',
            question: "Aconcagua 峰約高多少公尺？",
            options: ["A. 2,961 m","B. 4,961 m","C. 6,961 m","D. 8,961 m"],
            correct: 2,
            explanation: "6,961 公尺。"
          }
        ]
      }
    }
  }
]
