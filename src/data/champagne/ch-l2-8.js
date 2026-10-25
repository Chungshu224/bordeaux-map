/**
 * CH-L2-8 Level 2 綜合評量
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令核定版）、Comité Champagne（champagne.fr、champagne.education）、WineWithSeth、Taittinger 等。來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "法規、四大產區、釀造與生產者",
    icon: "✅",
    background: 'linear-gradient(135deg, #A8801C 0%, #6B500F 100%)'
  },
  {
    title: "Level 2 重點回顧：法規與分級",
    highlights: [
      { id: 1, icon: "📜", title: "AOC 骨架", content: "白或粉紅氣泡酒、玻璃瓶內二次發酵；7 種主要品種＋試驗品種 Voltis；整串採收、禁灌溉" },
      { id: 2, icon: "📈", title: "產量與壓榨", content: "基準 12,400／上限 15,500／儲備 10,000 公斤每公頃；一壓 4,000 公斤 ≤ 2,550 公升（cuvée 2,050 + taille 500）；商業產量由 Comité Champagne 每年決定" },
      { id: 3, icon: "🏘️", title: "Échelle des Crus", content: "以村莊分級：Grand Cru 100%、Premier Cru 90–99%、其餘 80–89%；INAO 現行名單 17 個 Grand Cru＋42 個僅 Premier Cru，全在 Marne；價格量表退場的年份（2004／2010）與 42／44 屬來源出入" },
      { id: 4, icon: "⏳", title: "陳年規定", content: "自裝瓶起：NV 15 個月、Vintage 36 個月；除渣不得早於裝瓶後 12 個月；Vintage ≤ 當年酒量 80%、不含儲備酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">來源有出入的數字不在評量範圍：Premier Cru 42／44、價格量表終止年份、Aube 面積與品種比例、生產者家數、各年商業產量。</p></div>"
  },
  {
    title: "Level 2 重點回顧：四大產區",
    highlights: [
      { id: 1, icon: "⛰️", title: "漢斯山", content: "Pinot Noir 為主；9 個 Grand Cru（Ambonnay、Beaumont-sur-Vesle、Bouzy、Louvois、Mailly-Champagne、Puisieulx、Sillery、Verzenay、Verzy）；Villers-Marmery、Trépail 偏 Chardonnay；Coteaux Champenois 紅酒" },
      { id: 2, icon: "🌊", title: "馬恩河谷", content: "越往西 Meunier 越多；2 個 Grand Cru（Aÿ、Tours-sur-Marne）；Vallée de la Marne 修剪僅限 Meunier" },
      { id: 3, icon: "🥂", title: "白丘", content: "Chardonnay 與白堊；6 個 Grand Cru（Avize、Chouilly、Cramant、Le Mesnil-sur-Oger、Oger、Oiry）；Grand Cru 的品種限制不是現行法規" },
      { id: 4, icon: "🌄", title: "巴爾丘與外圍", content: "Aube，Pinot Noir 為主、Kimmeridgian 泥灰岩、無 Grand／Premier Cru；Les Riceys 的 Rosé des Riceys（僅 Pinot Noir）；Côte de Sézanne、Montgueux 偏 Chardonnay" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">17 ＝ 9 ＋ 2 ＋ 6；Aube ＝ 0。</p></div>"
  },
  {
    title: "Level 2 重點回顧：釀造與產業",
    highlights: [
      { id: 1, icon: "🧺", title: "釀造 I", content: "整串壓榨 → cuvée／taille 分餾 → débourbage → 一次發酵（可選 MLF，禁木片）→ 調配（含儲備酒）" },
      { id: 2, icon: "🍾", title: "釀造 II", content: "tirage（1 月 1 日起）→ 瓶中二次發酵（5–6 bar）→ 酒渣陳年與自溶 → remuage → dégorgement → dosage（Brut Nature <3 到 Doux >50 g/L）" },
      { id: 3, icon: "🏷️", title: "酒款與生產者", content: "NV、Vintage、Blanc de Blancs、Blanc de Noirs、Rosé；NM／RM／CM 的分工；Prestige 為市場用語" },
      { id: 4, icon: "🏛️", title: "產業治理", content: "Comité Champagne 由 SGV 與 UMC 組成，每年夏季決定商業產量；靜態酒有 Coteaux Champenois 與 Rosé des Riceys 兩個 AOC" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成後可進入 Level 3：栽培深度、風格論述、法規與市場。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 2 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "依 INAO 規格，NV 與 Vintage 自裝瓶起的最短陳年分別是？",
            options: ["A. 12 個月／24 個月","B. 15 個月／36 個月","C. 24 個月／48 個月","D. 9 個月／18 個月"],
            correct: 1,
            explanation: "NV 15 個月、Vintage 36 個月，皆自裝瓶日起算。"
          },
          {
            type: 'single',
            question: "17 個 Grand Cru 在漢斯山、馬恩河谷、白丘的分布依序為？",
            options: ["A. 9／2／6","B. 6／2／9","C. 8／3／6","D. 9／6／2"],
            correct: 0,
            explanation: "漢斯山 9、馬恩河谷 2、白丘 6，合計 17。"
          },
          {
            type: 'single',
            question: "一次壓榨（1 marc）4,000 公斤葡萄，cuvée 與 taille 的容量為？",
            options: ["A. 1,000 公升／1,550 公升","B. 2,550 公升／500 公升","C. 2,000 公升／1,000 公升","D. 2,050 公升／500 公升"],
            correct: 3,
            explanation: "cuvée 2,050 + taille 500 ＝ 2,550 公升（Comité Champagne）。"
          },
          {
            type: 'single',
            question: "關於 Vintage 香檳，下列何者正確？",
            options: ["A. 可含最多 20% 儲備酒","B. 陳年只需 15 個月","C. 全部來自當年，且不超過該業者當年酒量的 80%","D. 必須是 Blanc de Blancs"],
            correct: 2,
            explanation: "Vintage 不含儲備酒、陳年至少 36 個月、上限 80%。"
          },
          {
            type: 'single',
            question: "每年可上市的「商業產量」由誰決定？",
            options: ["A. 各村村長","B. Comité Champagne","C. 歐盟執委會","D. 各酒廠自行決定"],
            correct: 1,
            explanation: "Comité Champagne 每年夏季決定，規格僅設基準與上限。"
          },
          {
            type: 'single',
            question: "價格量表中，Grand Cru 與 Premier Cru 的百分比分別是？",
            options: ["A. 90%；80–89%","B. 80%；70–79%","C. 110%；100%","D. 100%；90–99%"],
            correct: 3,
            explanation: "Grand Cru 100%，Premier Cru 90–99%，其餘村莊 80–89%。"
          },
          {
            type: 'single',
            question: "關於 Côte des Bar（Aube），下列何者正確？",
            options: ["A. 以 Chardonnay 為主，有 3 個 Grand Cru","B. 以 Meunier 為主","C. 以 Pinot Noir 為主，沒有 Grand／Premier Cru 村莊","D. 完全不屬於香檳 AOC"],
            correct: 2,
            explanation: "巴爾丘 Pinot Noir 為主，17 + 42 個村莊全在 Marne 省。"
          },
          {
            type: 'single',
            question: "馬恩河谷的 Vallée de la Marne 修剪法，規格限定用於哪個品種？",
            options: ["A. Chardonnay","B. Pinot Noir","C. Meunier","D. Pinot Blanc"],
            correct: 2,
            explanation: "規格：此修剪技術只限 Meunier。"
          },
          {
            type: 'single',
            question: "依規格，除渣最早可在裝瓶後多久進行？",
            options: ["A. 12 個月","B. 3 個月","C. 24 個月","D. 36 個月"],
            correct: 0,
            explanation: "除渣不得早於裝瓶後 12 個月。"
          },
          {
            type: 'single',
            question: "Rosé des Riceys 使用哪個品種？",
            options: ["A. Chardonnay 與 Meunier","B. Meunier","C. 只用 Pinot Noir","D. Pinot Blanc"],
            correct: 2,
            explanation: "INAO 規格：僅 Pinot Noir，靜態粉紅酒。"
          },
          {
            type: 'single',
            question: "標籤代碼 NM、RM、CM 分別代表？",
            options: ["A. 合作社、酒廠、種植者","B. 種植者、合作社、酒廠","C. 酒廠、合作社、種植者","D. 酒廠、種植者自釀、合作社"],
            correct: 3,
            explanation: "NM ＝ 酒廠（négociant-manipulant）、RM ＝ 種植者自釀（récoltant-manipulant）、CM ＝ 合作社。"
          }
        ]
      }
    }
  }
]
