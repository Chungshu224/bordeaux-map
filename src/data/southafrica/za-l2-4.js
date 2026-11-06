/**
 * ZA-L2-4 Swartland 與 Tulbagh
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Swartland 與 Tulbagh",
    subtitle: "新浪潮與老藤",
    icon: "🌾",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Swartland 的風土與老藤",
    highlights: [
      { id: 1, icon: "☀️", title: "氣候", content: "炎熱乾燥的地中海氣候，年降雨約 200 至 500 mm，集中於 5 至 10 月；夜間受大西洋空氣降溫" },
      { id: 2, icon: "🪨", title: "土壤", content: "內陸以 Malmesbury 頁岩為主，Paardeberg 與 Kasteelberg 為風化花崗岩，較高處有砂岩或石英岩" },
      { id: 3, icon: "🌳", title: "旱作灌木藤", content: "不灌溉的灌木式老藤（40 至 100 年以上）天然低產，釀成乾型礦物感的 Chenin Blanc；主要品種含 Syrah、Mourvèdre、Chenin Blanc、Grenache、Cinsault、Carignan" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Swartland 的核心是「旱作老藤＋頁岩與花崗岩」。</p></div>"
  },
  {
    title: "新浪潮：Swartland Revolution 與 SIP",
    highlights: [
      { id: 1, icon: "📜", title: "背景", content: "1948 年 Swartland 合作社成立於 Malmesbury，老藤多賣作散裝酒；1997 年 Spice Route、1999 年 Sadie Family 帶動精品酒轉變" },
      { id: 2, icon: "🎪", title: "Swartland Revolution", content: "2010 年 11 月起在 Riebeek-Kasteel 舉辦，至 2015 年共六屆；創辦者為 Sadie、Badenhorst、Mullineux 與 Porseleinberg" },
      { id: 3, icon: "🧪", title: "SIP 規章", content: "100% Swartland WO；僅用原生酵母；不酸化調整、不逆滲透、不加單寧或澄清劑、不加水；新歐洲橡木不超過 25%；不使用 Cabernet Sauvignon、Merlot、Chardonnay、Sauvignon Blanc" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">SIP 的規則細節在不同來源略有出入（例如酵母營養、酵素），課程只考上述核心項目。</p></div>"
  },
  {
    title: "Tulbagh",
    highlights: [
      { id: 1, icon: "⛰️", title: "山間盆地", content: "開普敦東北約 120 公里的 District（1971 年劃定）；葡萄園約 200 至 600 公尺，周圍山峰超過 1,500 公尺；日夜溫差 15 至 20°C 以上" },
      { id: 2, icon: "🌍", title: "1969 年地震", content: "1969 年 9 月 29 日規模 6.3 的地震重創城鎮歷史建築" },
      { id: 3, icon: "🍇", title: "品種", content: "Chenin Blanc 為主要白品種，Chardonnay 與 Pinot Noir 供應 Cap Classique 基酒，Shiraz 為主要紅品種" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Tulbagh 是被群山包圍的熱日涼夜產地，常與 Swartland 並列為 Coastal Region 的內陸代表。</p></div>"
  },
  {
    title: "Diploma 深度：灌木老藤的經濟學",
    highlights: [
      { id: 1, icon: "🌳", title: "因果鏈：旱作灌木藤 → 濃縮度", content: "不灌溉 → 根系深入、樹勢受控 → 天然低產、小果粒 → 濃縮與鮮明的酸；灌木式（bush vine）讓葉幕為果實遮蔭，適合炎熱乾燥的 Swartland" },
      { id: 2, icon: "💸", title: "為什麼老藤曾被拔除", content: "灌木老藤產量低、難以機械化；過去葡萄多以散裝價格出售，低產就等於低收入，許多老藤被拔掉改種高產品種或其他作物。VinPro 指出 2007 年以來每年拔除面積都多於新植" },
      { id: 3, icon: "🔁", title: "新浪潮如何改變價格", content: "Sadie、Mullineux 等生產者以單一園、老藤 Chenin 與 Rhône 品種建立高價品牌，讓同一批老藤從散裝原料變成高價酒款；Old Vine Project 再用認證封條把「老藤」轉成消費者看得見的價值" },
      { id: 4, icon: "📝", title: "論述用語", content: "「老藤的保存取決於酒價能否覆蓋低產的成本」：品質潛力本身不足以保護葡萄園，必須有市場溢價。這句話也適用於智利 Itata、阿根廷的老藤" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Swartland 的故事是一條經濟因果鏈：低產 → 散裝不划算 → 拔除；精品化 → 溢價 → 保存。</p></div>"
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
            question: "Swartland Revolution 於哪一年開始舉辦？",
            options: ["A. 1997","B. 2010","C. 2016","D. 2023"],
            correct: 1,
            explanation: "2010 年 11 月，共六屆至 2015 年。"
          },
          {
            type: 'single',
            question: "SIP 規章排除下列哪個品種？",
            options: ["A. Syrah","B. Chenin Blanc","C. Chardonnay","D. Cinsault"],
            correct: 2,
            explanation: "Cabernet Sauvignon、Merlot、Chardonnay、Sauvignon Blanc 被排除。"
          },
          {
            type: 'single',
            question: "Swartland 內陸的代表土壤是？",
            options: ["A. Malmesbury 頁岩","B. 石灰岩","C. 黑色火山土","D. 白堊"],
            correct: 0,
            explanation: "Malmesbury 頁岩，Paardeberg 為花崗岩。"
          },
          {
            type: 'single',
            question: "Tulbagh 在 1969 年發生了什麼？",
            options: ["A. 根瘤芽蟲爆發","B. 規模 6.3 的地震","C. KWV 成立","D. Day Zero 乾旱"],
            correct: 1,
            explanation: "1969 年 9 月 29 日的地震。"
          }
        ]
      }
    }
  }
]
