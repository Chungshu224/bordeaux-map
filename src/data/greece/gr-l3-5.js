/**
 * GR-L3-5 產業、市場與貿易：結構、出口與近年變化
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業、市場與貿易",
    subtitle: "結構、出口與近年變化",
    icon: "📈",
    background: 'linear-gradient(135deg, #B8902A 0%, #2c6e49 100%)'
  },
  {
    title: "產業規模與結構",
    highlights: [
      { id: 1, icon: "📐", title: "葡萄園與產量", content: "2022 年 7 月釀酒葡萄園約 64,020 公頃；2022 年產量約 210 萬百升，居世界第 19 位" },
      { id: 2, icon: "📉", title: "產量下滑", content: "2022–23 年度產量下降約 14%，為多年來低點；當年約 296 公頃葡萄園遭廢棄" },
      { id: 3, icon: "🥤", title: "散裝酒占國內市場一半", content: "約 50% 的希臘市場為散裝或非標準酒款" },
      { id: 4, icon: "🏷️", title: "受保護酒款占比偏低", content: "PDO＋PGI 約占產量三成，遠低於其他歐盟生產國" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">數字多取自農業部經 KEOSOE（2023）與 OIV；引用時請標年份與來源。</p></div>"
  },
  {
    title: "出口與主要市場",
    highlights: [
      { id: 1, icon: "💶", title: "2023 年出口值", content: "約 9,970 萬歐元（2022 年約 9,900 萬歐元）；出口量 28,853 公噸，略低於 2022 年的約 29,900 公噸" },
      { id: 2, icon: "🇪🇺", title: "歐盟占 86.6%", content: "出口值的 86.6% 流向歐盟；前五大市場為德國、塞浦路斯、法國、荷蘭與比利時" },
      { id: 3, icon: "📈", title: "價值成長快於數量", content: "2022 年出口值成長約 16.8%，數量約 6.6%，被視為市占與價格上升的跡象" },
      { id: 4, icon: "🎪", title: "展會能見度", content: "2023 年 ProWein 的希臘館有創紀錄的 64 家參展商" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出口市場集中在歐盟，是機會（近、熟悉）也是風險（依賴度高）。</p></div>"
  },
  {
    title: "品質轉型與價格定位",
    highlights: [
      { id: 1, icon: "🏝️", title: "島嶼稀少性", content: "Santorini 的葡萄價格約為北希臘的十倍以上，反映稀少與產量崩跌" },
      { id: 2, icon: "🌱", title: "新一代生產者", content: "精品酒莊使用本土品種與更好的基酒（如現代 Retsina）" },
      { id: 3, icon: "🏖️", title: "旅遊的雙面性", content: "旅遊帶來品牌與銷量，也造成土地與勞力壓力（如 Paros）" },
      { id: 4, icon: "🔭", title: "主要挑戰", content: "氣候變遷、品牌辨識度、PDO／PGI 占比偏低與散裝酒比重" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述模板：結構（散裝比重高）→ 轉型（精品、本土品種）→ 市場（歐盟依賴）→ 風險（氣候、產量）。</p></div>"
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
            question: "2023 年希臘葡萄酒出口值約占多少比例流向歐盟？",
            options: ["A. 約 86.6%","B. 約 30%","C. 約 50%","D. 約 5%"],
            correct: 0,
            explanation: "出口高度集中在歐盟，前五大市場為德國、塞浦路斯、法國、荷蘭與比利時。"
          },
          {
            type: 'single',
            question: "希臘國內市場中，散裝或非標準酒款約占多少？",
            options: ["A. 約一半","B. 約 5%","C. 約 95%","D. 沒有"],
            correct: 0,
            explanation: "約 50%（2023 年報導引用的 KEOSOE 資料）。"
          },
          {
            type: 'single',
            question: "下列何者最能代表希臘酒產業的結構性挑戰？",
            options: ["A. PDO／PGI 占產量比例偏低且散裝酒比重高","B. 品種太少","C. 完全沒有出口","D. 沒有葡萄園"],
            correct: 0,
            explanation: "這是論述中常引用的結構性問題。"
          }
        ]
      }
    }
  }
]
