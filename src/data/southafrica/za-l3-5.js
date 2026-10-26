/**
 * ZA-L3-5 產業與社會
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業與社會",
    subtitle: "KWV、轉型、出口與散裝酒",
    icon: "🏛️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "KWV 到自由市場",
    highlights: [
      { id: 1, icon: "🏛️", title: "KWV 的角色", content: "1918 年成立；制定全產業政策與價格、限制產量並課蒸餾配額；1924 年約 95% 的葡萄園主是成員" },
      { id: 2, icon: "🔓", title: "解禁", content: "配額於 1992 年廢除；KWV 於 1997 年 12 月 1 日成為私人公司" },
      { id: 3, icon: "🍷", title: "走向消費者酒款", content: "1990 年不到 30% 的收成成為消費用葡萄酒，2003 年超過 70%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述產業轉型時，用「配額體制 → 解禁 → 品質與品牌化」的三段結構。</p></div>"
  },
  {
    title: "轉型與賦權",
    highlights: [
      { id: 1, icon: "📜", title: "2007 年轉型憲章", content: "2007 年 SAWIC 通過 Wine BEE Transformation Charter（約四年諮詢後）：年營業額超過 R35 百萬的大型企業需符合全部七項計分卡要素；R5–35 百萬的小型企業評四項；低於 R5 百萬者豁免（約占近 80% 的葡萄農場）" },
      { id: 2, icon: "🏡", title: "黑人參與的里程碑", content: "1997 年 Paarl 的 New Beginnings 是第一家有顯著黑人參與的酒廠；2001 年 Mont Rochelle 成為首家完全由黑人擁有的酒廠" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">2007 年的門檻是當時的制度，現況請查最新 WOSA／SAWIS 與產業轉型資料。</p></div>"
  },
  {
    title: "2024 年出口",
    highlights: [
      { id: 1, icon: "📦", title: "總量", content: "約 US$5.62 億（+4%）、3.062 億公升（大致持平）" },
      { id: 2, icon: "🚢", title: "瓶裝與散裝", content: "瓶裝 US$4.30 億、1.234 億公升（約占價值 77%、容量 40%）；散裝 US$1.32 億、1.828 億公升（約占價值 23%、容量 60%）" },
      { id: 3, icon: "🌍", title: "市場與品類", content: "英國是最大市場（容量 8,730 萬公升）；荷蘭、瑞典、阿聯酋成長；氣泡酒 +34%、Cap Classique +19%、散裝乾白 −17%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">南非出口的結構性特徵：容量大量走散裝、價值靠瓶裝；這個差異是談價格帶的起點。</p></div>"
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
            question: "KWV 成為私人公司是哪一天？",
            options: ["A. 1918 年","B. 1992 年","C. 1997 年 12 月 1 日","D. 2023 年 8 月 1 日"],
            correct: 2,
            explanation: "1997 年 12 月 1 日；1992 年是配額廢除。"
          },
          {
            type: 'single',
            question: "2024 年南非出口中，散裝酒的特徵是？",
            options: ["A. 占容量多數、價值較低","B. 占價值多數","C. 已停止出口","D. 只出口到亞洲"],
            correct: 0,
            explanation: "約占容量 60%、價值 23%。"
          },
          {
            type: 'single',
            question: "2024 年南非最大的出口市場是？",
            options: ["A. 美國","B. 英國","C. 日本","D. 中國"],
            correct: 1,
            explanation: "英國。"
          },
          {
            type: 'single',
            question: "2001 年成為首家完全由黑人擁有的酒廠是？",
            options: ["A. Mont Rochelle","B. Kanonkop","C. Groot Constantia","D. Spice Route"],
            correct: 0,
            explanation: "Mont Rochelle。"
          }
        ]
      }
    }
  }
]
