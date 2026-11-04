/**
 * ZA-L3-1 栽培與氣候：水、乾旱與永續
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候：水、乾旱與永續",
    subtitle: "旱作、2018 乾旱、IPW 與 BWI",
    icon: "💧",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "水是最大的限制",
    highlights: [
      { id: 1, icon: "🌧️", title: "冬雨、夏乾", content: "降雨集中在冬季，因此多為旱作或輔助灌溉；內陸產區（Robertson 約 250–400 mm、Klein Karoo 的 Calitzdorp 約 200 mm、Olifants River 沿海平原約 150–200 mm）高度依賴灌溉" },
      { id: 2, icon: "🏞️", title: "水源", content: "Robertson 靠 Breede 河與 Brandvlei 等水壩，在乾旱期相對穩定；Olifants River 依賴 Clanwilliam 水壩" },
      { id: 3, icon: "🌡️", title: "採收提早", content: "自 1990 年代以來，採收日期大約提早兩週" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 論述常用的框架：氣候（水）→ 栽培（旱作、樹型）→ 品質與成本。</p></div>"
  },
  {
    title: "2018 年乾旱",
    highlights: [
      { id: 1, icon: "📉", title: "預測", content: "2018 年 1 月，Vinpro 與 SAWIS 預期當年葡萄收成是 2005 年以來最小；部分估計減產可達 50%（預測，非最終數字）" },
      { id: 2, icon: "🚰", title: "受災不均", content: "Olifants River 受創最重，農戶只拿到平常水配額的不到 17%（當時 Clanwilliam 水壩僅約 19.9% 滿）；Orange River 是唯一沒有缺水的產區" },
      { id: 3, icon: "🏙️", title: "Day Zero", content: "2018 年開普敦的供水危機（Day Zero）使水資源成為整個產業的議題，包括節水灌溉與耐旱品種的討論" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">乾旱影響「產量與成本」而非單純的品質；回答時要分開討論。</p></div>"
  },
  {
    title: "永續：IPW 與 BWI",
    highlights: [
      { id: 1, icon: "✅", title: "IPW", content: "Integrated Production of Wine，1998 年導入，涵蓋綜合病蟲害管理、減少投入與碳排、勞工健康安全、生物多樣性與廢水處理，每三年獨立稽核" },
      { id: 2, icon: "🔖", title: "永續封條", content: "自 2010 年份起，葡萄園、酒廠與裝瓶廠都通過 IPW 認證者可使用；與 WO 合併封條在 2024 年有 88% 的認證酒使用" },
      { id: 3, icon: "🌸", title: "BWI", content: "Biodiversity & Wine Initiative，自 2004 年起推動開普酒鄉的保育；文獻指出酒莊的保育地（約 113,000 公頃）多於葡萄園面積（約 101,000 公頃）；IPW 與 BWI 是不同的計畫" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">IPW 是業界全面性的方案；BWI 專注生物多樣性與保育，兩者可獨立參加。</p></div>"
  },
  {
    title: "Diploma 深度：捲葉病毒與葡萄園更新",
    highlights: [
      { id: 1, icon: "🦠", title: "南非最重要的葡萄病毒", content: "捲葉病（grapevine leafroll）被視為南非釀酒葡萄最重要的病毒病害；業界估計至少七成葡萄園有不同程度感染，但沒有正式統計（Wineland，估計值不進測驗）" },
      { id: 2, icon: "🍂", title: "對果實的影響", content: "感染植株成熟不均、糖度較低、紅品種上色差、可滴定酸偏高，產量也下降；因此葡萄園常在 20 至 25 年就提早更新，這也是南非老藤稀少的原因之一" },
      { id: 3, icon: "🐛", title: "傳播與防治", content: "主要由葡萄粉介殼蟲（Planococcus ficus）傳播。防治靠三件事：種植經病毒檢測的認證苗、控制粉介殼蟲、及早移除感染株；Vergelegen 的案例顯示持續執行可大幅壓制甚至根除" },
      { id: 4, icon: "🔗", title: "因果鏈：病毒 → 成本 → 風格", content: "病毒 → 成熟困難、產量下降 → 提早更新葡萄園（成本）→ 樹齡偏年輕 → 少有老藤風格。這讓「健康的老藤」更加稀有，也解釋了 Old Vine Project 的價值" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寫南非栽培題，除了水，第二個關鍵字就是捲葉病毒。</p></div>"
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
            question: "IPW 於哪一年導入？",
            options: ["A. 1973","B. 1998","C. 2004","D. 2018"],
            correct: 1,
            explanation: "1998 年；2004 年是 BWI。"
          },
          {
            type: 'single',
            question: "2018 年乾旱中，哪個產區受創最重？",
            options: ["A. Olifants River","B. Constantia","C. Elgin","D. Walker Bay"],
            correct: 0,
            explanation: "Olifants River，農戶水配額不到平常的 17%。"
          },
          {
            type: 'single',
            question: "永續封條自哪一個年份起可用？",
            options: ["A. 1998","B. 2004","C. 2010","D. 2018"],
            correct: 2,
            explanation: "自 2010 年份起。"
          },
          {
            type: 'single',
            question: "2018 年的收成減幅數字在課程中應如何看待？",
            options: ["A. 官方最終數字","B. 當時的預測，非最終數字","C. 與 2005 年相同","D. 不存在"],
            correct: 1,
            explanation: "1 月的預測，不能當作最終結果。"
          }
        ]
      }
    }
  }
]
