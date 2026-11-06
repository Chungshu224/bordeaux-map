/**
 * CL-L3-3 產業、市場與 Diploma 論述
 * 事實來源：Wine With Seth（Chile 自根苗頁、Carménère 頁，2026 年查閱）、Decanter（Tim Atkin MW, "Pedro Parra: breaking new ground"，2015；2010 年地震報導）、The Drinks Business（智利水資源報導，2023-08）、Slow Food（智利野火，2023-03-16）、Vinetur（智利 2024 年出口，2025-06-13）、Portal Fruticola（2012 年瓶裝酒出口，2012-09-19）。數字一律標註來源與年份；來源有出入者（葡萄根瘤蚜年份、2023 野火面積）課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業、市場與 Diploma 論述",
    subtitle: "用數字與結構回答「智利葡萄酒為什麼是這個樣子」",
    icon: "📈",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "2024 年的數字",
    highlights: [
      { id: 1, icon: "🍇", title: "產量下滑", content: "Vinetur（2025-06-13）：2024 年產量下降 15.6%，略高於 9.3 億公升" },
      { id: 2, icon: "🚢", title: "出口回升", content: "出口 7.8 億公升（+14.4%），金額約 17.3 億美元（+6.1%）；瓶裝占出口量 54%、出口值 75%" },
      { id: 3, icon: "🌎", title: "市場變動", content: "巴西是最大的瓶裝酒市場（約 +30%）；中國瓶裝酒出口量下降 11.5%；內需市場約 38 億美元" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">產量降、出口升：表示去庫存與出口導向，並非需求暴增。</p></div>"
  },
  {
    title: "產業結構：集中與出口導向",
    highlights: [
      { id: 1, icon: "🏢", title: "十大酒廠", content: "Portal Fruticola（2012-09）：2012 年 1 至 7 月，十大酒廠占瓶裝酒出口值（7.863 億美元）的 53%，約 4.166 億美元" },
      { id: 2, icon: "🥇", title: "領頭者", content: "當時依序為 Concha y Toro（1.516 億美元）、Cono Sur（同集團，5,330 萬）、San Pedro（CCU，4,870 萬）、Santa Rita（2,910 萬）" },
      { id: 3, icon: "⏳", title: "註明年代", content: "這是 2012 年的資料，與 2024 年數字不可直接比較；論述時應說明年份，並以最新統計補充" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">少數大集團支撐出口，意味品牌與價格帶高度集中。</p></div>"
  },
  {
    title: "盲品線索",
    highlights: [
      { id: 1, icon: "🫑", title: "紅酒", content: "成熟黑色水果加墨西哥辣椒、甜椒、黑胡椒：想到 Carmenère；Cabernet 需分辨 Maipo 的結構與其他谷地的熟度" },
      { id: 2, icon: "🌊", title: "白酒", content: "涼爽海岸（Casablanca、Leyda、Limarí）的高酸度與鹹礦物感，與溫暖內陸的圓潤果味形成對比" },
      { id: 3, icon: "🍷", title: "古老風格", content: "País、Cinsault、Carignan 的老藤酒款：輕盈、紅色水果、細緻單寧，可聯想 Itata 或 Maule" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先判斷氣候與成熟度，再收斂到品種與產區，最後才談品質與價格。</p></div>"
  },
  {
    title: "論述範本",
    highlights: [
      { id: 1, icon: "1️⃣", title: "主張", content: "一句話直接回答題目，例如「智利的優勢是穩定的氣候與自根苗，但水資源是最大的結構風險」" },
      { id: 2, icon: "2️⃣", title: "證據", content: "每個論點配一個有來源、有年份的數字或事件，例如 280 公釐降雨、2010 年地震、2024 年出口" },
      { id: 3, icon: "3️⃣", title: "但書與結論", content: "標明來源分歧或舊資料，再回扣主張，並提出對產區、品牌或消費者的含義" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">MW 風格重視：有觀點、有證據、承認不確定。</p></div>"
  },
  {
    title: "Diploma 深度：自由貿易協定與價格定位",
    highlights: [
      { id: 1, icon: "🇯🇵", title: "日本：EPA 與 2015 年的超越", content: "日智 EPA 於 2007 年生效、逐步降低葡萄酒關稅；依日本財務省統計，智利在 2015 年以約 5,160 萬公升首次超越法國，成為日本進口葡萄酒量第一（法國已領先約 30 年）" },
      { id: 2, icon: "💲", title: "「物超所值」的雙面刃", content: "關稅優勢與低成本讓智利在量販價位極具競爭力，但「便宜好喝」的國家形象也讓高價酒款難以說服消費者，形成定價天花板" },
      { id: 3, icon: "🤝", title: "打破天花板的方法", content: "合資旗艦（Almaviva、Seña）借用國際名聲；柏林盲品等事件製造話題；單一園、老藤與 Costa／Andes 標示則用風土建立差異。三種策略可在論述中互相比較" },
      { id: 4, icon: "⚠️", title: "風險：市場集中", content: "出口依賴少數大市場與少數大集團，任何市場的需求變化（例如 2024 年中國瓶裝酒量下滑）都會直接衝擊；分散市場與提高瓶裝比例是常見的因應方向" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利的市場題，核心是「價值形象」與「溢價野心」之間的張力。</p></div>"
  },
  {
    title: "簡答題示範：題目與評分要點",
    highlights: [
      { id: 1, icon: "❓", title: "題目一", content: "「說明 Humboldt 寒流與安地斯山如何影響智利葡萄酒的風格，並各舉一個產區為例。」（建議 250 字內）" },
      { id: 2, icon: "✅", title: "題目一的評分要點", content: "① 寒流 → 晨霧與午後海風 → 沿海涼爽 → Casablanca／Leyda 的 Sauvignon Blanc、Chardonnay、Pinot Noir；② 安地斯 → 融雪灌溉與高度 → 日夜溫差 → Alto Maipo 的 Cabernet 酚類成熟與結構；③ 中間谷地最熱；④ 由此帶出 Costa／Entre Cordilleras／Andes 標示" },
      { id: 3, icon: "❓", title: "題目二", content: "「智利能否擺脫『物超所值』的形象？請評估。」（建議 350 字內）" },
      { id: 4, icon: "✅", title: "題目二的評分要點", content: "① 現況：出口集中、大集團主導、FTA 帶來價格優勢；② 有利條件：合資旗艦、柏林盲品、風土標示、老藤與南部復興、風格轉向；③ 不利條件：形象慣性、乾旱成本上升、市場集中；④ 結論給出條件式判斷，例如「在高端小眾可以，整體形象短期難變」" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">評估題不要只說「可以」或「不行」：給條件、給時間軸。</p></div>"
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
            question: "Vinetur 指出 2024 年智利葡萄酒產量變化是？",
            options: ["A. 下降 15.6%","B. 上升 15.6%","C. 持平","D. 下降 60%"],
            correct: 0,
            explanation: "略高於 9.3 億公升。"
          },
          {
            type: 'single',
            question: "2024 年瓶裝酒占出口值約多少？",
            options: ["A. 75%","B. 25%","C. 10%","D. 100%"],
            correct: 0,
            explanation: "瓶裝占出口量 54%。"
          },
          {
            type: 'single',
            question: "2024 年哪個國家是最大的瓶裝酒市場？",
            options: ["A. Brazil","B. China","C. Japan","D. Iceland"],
            correct: 0,
            explanation: "約成長 30%；中國瓶裝量下降 11.5%。"
          },
          {
            type: 'single',
            question: "2012 年 1 至 7 月，十大酒廠占瓶裝酒出口值多少？",
            options: ["A. 53%","B. 5%","C. 90%","D. 15%"],
            correct: 0,
            explanation: "Portal Fruticola，2012-09。"
          },
          {
            type: 'single',
            question: "Cono Sur 與哪家酒廠屬於同一集團？",
            options: ["A. Concha y Toro","B. Santa Rita","C. San Pedro","D. Montes"],
            correct: 0,
            explanation: "San Pedro 屬於 CCU。"
          },
          {
            type: 'single',
            question: "論述範本中，引用舊資料時應該？",
            options: ["A. 標明年份並以最新統計補充","B. 直接當作現況","C. 省略來源","D. 避免任何數字"],
            correct: 0,
            explanation: "承認不確定也是 MW 風格。"
          }
        ]
      }
    }
  }
]
