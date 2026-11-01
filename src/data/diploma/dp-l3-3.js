/**
 * DP-L3-3 英格蘭與新世界的氣泡酒
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "英格蘭與新世界的氣泡酒",
    subtitle: "暖化讓氣泡酒的地圖往北、往南、往高處移",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "英格蘭",
    highlights: [
      { id: 1, icon: "🇬🇧", title: "風土", content: "東南部（Sussex、Kent、Hampshire）有與香檳區同屬一條地質帶的白堊，也有綠砂岩等土壤；涼爽的海洋性邊緣氣候讓基酒高酸，正適合氣泡酒" },
      { id: 2, icon: "⚠️", title: "風險", content: "春霜、開花期的冷雨與成熟不足使產量年年波動；暖化讓成熟更穩定，是英格蘭氣泡酒在近二十年崛起的背景之一" },
      { id: 3, icon: "📜", title: "Sussex PDO 與香檳的投資", content: "Sussex 在 2022 年取得 PDO，是英國第一個次產區 PDO；香檳酒廠也來投資，例如 Taittinger 在 Kent 開設 Domaine Evremond，顯示對英格蘭風土的信心" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">英格蘭的故事：邊緣氣候 + 白堊 + 暖化 + 資本 = 新的頂級氣泡酒產區。</p></div>"
  },
  {
    title: "新世界的傳統法",
    highlights: [
      { id: 1, icon: "🇦🇺", title: "Tasmania", content: "澳洲最涼爽的產區，被視為澳洲頂級傳統法氣泡酒的核心；過去本土酒廠常向這裡採購基酒" },
      { id: 2, icon: "🇺🇸", title: "加州", content: "香檳酒廠 1970–80 年代起在加州設廠，例如 Moët 的 Domaine Chandon（Napa）與 Roederer Estate（Anderson Valley）；涼爽的 Carneros 與 Anderson Valley 是主要基酒來源" },
      { id: 3, icon: "🌍", title: "其他產區", content: "紐西蘭 Marlborough 也生產傳統法氣泡酒；南非的 Cap Classique 須至少 12 個月酒渣陳年（2023 年份起），整串壓榨；阿根廷的高海拔與 Chandon（1959 年設立）也是重要案例" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">香檳酒廠的海外投資，本身就是 D4 論述的好例子：品牌、技術與風土的輸出。</p></div>"
  },
  {
    title: "論述角度：新產區如何競爭",
    highlights: [
      { id: 1, icon: "💷", title: "成本與價格", content: "新產區葡萄園與設備投資高、產量波動大，加上長時間酒渣陳年綁住資金，價格往往接近香檳 NV，必須靠品質與故事說服消費者" },
      { id: 2, icon: "🏷️", title: "產區名稱與辨識度", content: "英格蘭、Tasmania 都在建立產區名稱（如 Sussex PDO）；名稱越清楚，越能擺脫「香檳替代品」的定位" },
      { id: 3, icon: "🌡️", title: "氣候變遷的雙面", content: "暖化讓英格蘭等邊緣產區受益，卻讓溫暖產區更難保酸；論述時兩面都要寫" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">新產區題的骨架：條件（氣候、土壤）→ 投資（資本、技術）→ 市場（名稱、價格）→ 風險。</p></div>"
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
            question: "Sussex 取得 PDO 的年份是？",
            options: ["A. 2009 年","B. 2015 年","C. 2022 年","D. 1995 年"],
            correct: 2,
            explanation: "英國第一個次產區 PDO。"
          },
          {
            type: 'single',
            question: "英格蘭東南部氣泡酒最常被拿來與香檳比較的土壤是？",
            options: ["A. 火山灰","B. 片岩","C. 紅土","D. 白堊"],
            correct: 3,
            explanation: "兩地白堊同屬一條地質帶。"
          },
          {
            type: 'single',
            question: "Roederer Estate 位於加州哪個產區？",
            options: ["A. Anderson Valley","B. Paso Robles","C. Lodi","D. Temecula"],
            correct: 0,
            explanation: "涼爽的 Mendocino 內陸谷地。"
          },
          {
            type: 'single',
            question: "南非 Cap Classique（2023 年份起）的最短酒渣陳年是？",
            options: ["A. 60 個月","B. 12 個月","C. 3 個月","D. 36 個月"],
            correct: 1,
            explanation: "先前為 9 個月。"
          }
        ]
      }
    }
  }
]
