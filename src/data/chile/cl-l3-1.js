/**
 * CL-L3-1 栽培與氣候：自根苗、水與災害
 * 事實來源：Wine With Seth（Chile 自根苗頁、Carménère 頁，2026 年查閱）、Decanter（Tim Atkin MW, "Pedro Parra: breaking new ground"，2015；2010 年地震報導）、The Drinks Business（智利水資源報導，2023-08）、Slow Food（智利野火，2023-03-16）、Vinetur（智利 2024 年出口，2025-06-13）、Portal Fruticola（2012 年瓶裝酒出口，2012-09-19）。數字一律標註來源與年份；來源有出入者（葡萄根瘤蚜年份、2023 野火面積）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "栽培與氣候：自根苗、水與災害",
    subtitle: "智利的優勢與脆弱，是 Diploma 論述的常見題材",
    icon: "🌱",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "沒有根瘤蚜的葡萄園",
    highlights: [
      { id: 1, icon: "🛡️", title: "天然隔離", content: "Wine With Seth 指出，北有 Atacama 沙漠、西臨太平洋、東靠安地斯山、南接寒冷地帶，形成「天然檢疫」；進口植材管制則是額外的保護" },
      { id: 2, icon: "🌿", title: "多數為自根苗", content: "多數智利葡萄樹以自身根系生長、不必嫁接；省下嫁接成本是優勢。「根系更深、更有複雜度」是生產者的說法，並非定論" },
      { id: 3, icon: "⚠️", title: "例外與但書", content: "Casablanca 需嫁接在抗線蟲砧木上；沒有根瘤蚜不等於沒有病害，露菌病、白粉病與 verticillium 萎凋病仍存在。根瘤蚜疫情年份各處寫法不一（1870 或 1870 年代），課內不比較" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Diploma 論述要同時講優勢與但書：自根苗是歷史與地理的禮物，不是萬無一失。</p></div>"
  },
  {
    title: "乾旱與水",
    highlights: [
      { id: 1, icon: "🏔️", title: "灌溉靠融雪", content: "The Drinks Business（2023）：智利葡萄園的灌溉仰賴安地斯山融雪" },
      { id: 2, icon: "🌧️", title: "降雨減少", content: "Errázuriz 的 Baettig 表示 Santiago 年降雨由 400 公釐降到 280 公釐；2021 年 1 至 7 月約比平均少一半。Concha y Toro 的 Papa 則認為主要問題是水而非溫度" },
      { id: 3, icon: "🔀", title: "產區與調配的移動", content: "報導指出部分 Casablanca 生產者因缺水離開，Limarí 的水資源限制新種植；Concha y Toro 約二十年來把採購重心往 Maule 移，Casillero del Diablo 的 Cabernet 中 Maipo 比例由 33% 降到 10%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">乾旱不只是氣候議題，也直接改變產區地圖與品牌的原料來源。</p></div>"
  },
  {
    title: "地震",
    highlights: [
      { id: 1, icon: "🌐", title: "2010 年 2 月 27 日", content: "Decanter 報導：規模 8.8，為約 50 年來最強；Maule 與 Bío-Bío 靠近震央，Curicó 與 Colchagua 受創，Aconcagua 較輕" },
      { id: 2, icon: "🛢️", title: "酒窖損失", content: "Torres 約 300 個橡木桶摔毀，一個 10 萬公升大桶破裂；Concha y Toro 停產至少一週" },
      { id: 3, icon: "📝", title: "論述角度", content: "地震風險屬於地理位置的固定成本：酒窖設計、保險與分散產區，都是可討論的因應" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Pacific 火環帶讓智利的地質風險與葡萄園並存。</p></div>"
  },
  {
    title: "野火與永續",
    highlights: [
      { id: 1, icon: "🔥", title: "Itata 野火", content: "Slow Food（2023-03-16）：Ñuble 與 Bío-Bío 發生野火，Itata 最嚴重，估計約 25% 的 Itata 葡萄園受損；部分 País 老藤達 200 至 250 年。2017 年也曾發生大火" },
      { id: 2, icon: "🌲", title: "說法不一", content: "Slow Food 提到松樹與桉樹人工林是原因之一；The Drinks Business 的火災面積數字與之不同，課內不比較" },
      { id: 3, icon: "♻️", title: "永續認證", content: "Vinetur（2025）：2024 年瓶裝出口中約 80% 來自通過永續認證的酒廠" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">老藤是野火最大的受害者，也是 Itata 風土論述的核心資產。</p></div>"
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
            question: "Wine With Seth 如何解釋智利沒有根瘤蚜？",
            options: ["A. 沙漠、海洋、山脈與寒冷南部構成的天然檢疫","B. 所有葡萄樹都已嫁接抗性砧木","C. 氣候太濕所以蟲不生","D. 殺蟲劑每年全面施用"],
            correct: 0,
            explanation: "再加上進口植材的管制。"
          },
          {
            type: 'single',
            question: "哪個產區必須嫁接在抗線蟲砧木上？",
            options: ["A. Casablanca","B. Maule","C. Itata","D. Elqui"],
            correct: 0,
            explanation: "Wine With Seth 指出的例外。"
          },
          {
            type: 'single',
            question: "「自根苗讓根系更深、更有複雜度」在課內屬於？",
            options: ["A. 生產者的說法，並非定論","B. 已證實的科學結論","C. 法規要求","D. DO 的定義"],
            correct: 0,
            explanation: "論述時要標明這是宣稱。"
          },
          {
            type: 'single',
            question: "Concha y Toro 的 Papa 認為氣候變遷在智利的主要問題是？",
            options: ["A. 水，而非溫度","B. 霜害","C. 冰雹","D. 海風過強"],
            correct: 0,
            explanation: "降雨減少與融雪依賴是核心。"
          },
          {
            type: 'single',
            question: "2010 年 2 月 27 日智利地震的規模是？",
            options: ["A. 8.8","B. 6.2","C. 7.0","D. 9.5"],
            correct: 0,
            explanation: "Decanter：約 50 年來最強。"
          },
          {
            type: 'single',
            question: "Slow Food 估計 2023 年大火後 Itata 葡萄園損失約多少？",
            options: ["A. 約 25%","B. 約 2%","C. 約 60%","D. 約 90%"],
            correct: 0,
            explanation: "部分老藤 País 達 200 至 250 年。"
          }
        ]
      }
    }
  }
]
