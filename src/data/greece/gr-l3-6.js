/**
 * GR-L3-6 Diploma 品飲與論述：盲品框架與答題結構
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Diploma 品飲與論述",
    subtitle: "盲品框架與答題結構",
    icon: "👃",
    background: 'linear-gradient(135deg, #B8902A 0%, #5b1fa0 100%)'
  },
  {
    title: "D3 考試的形式",
    highlights: [
      { id: 1, icon: "📝", title: "第一天：理論", content: "兩份開放式作答卷：2 小時與 80 分鐘，合計 3 小時 20 分" },
      { id: 2, icon: "🍷", title: "第二天：品飲", content: "盲品 12 款酒，分成兩份各 1.5 小時的試卷，合計 3 小時" },
      { id: 3, icon: "⚠️", title: "以官方最新規格為準", content: "以上依 Napa Valley Wine Academy 說明整理；考試形式可能調整，請以 WSET 官方資料為準" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">希臘通常出現在「世界其他產區」的理論題與品飲題中，需要同時準備事實與比較。</p></div>"
  },
  {
    title: "希臘酒盲品線索表",
    highlights: [
      { id: 1, icon: "🍋", title: "Assyrtiko（Santorini）", content: "高酸、強礦物與鹹感、酒體中等至飽滿；Nykteri 帶橡木" },
      { id: 2, icon: "🌹", title: "Moschofilero", content: "淡檸檬粉紅、玫瑰與茉莉、低酒精、酸度鮮明" },
      { id: 3, icon: "🍑", title: "Malagousia", content: "桃、芒果、柑橘，口感比 Moschofilero 豐腴" },
      { id: 4, icon: "🏔️", title: "Xinomavro", content: "色淡易呈磚色、高酸高單寧、可陳年" },
      { id: 5, icon: "🍒", title: "Agiorgitiko", content: "柔和、多果味，風格因海拔與釀法差異大" },
      { id: 6, icon: "🌲", title: "Retsina", content: "明顯松脂香，常以 Savatiano 為基酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">把線索寫成「觀察 → 推論」：例如「高酸＋鹹感＋礦物 → 火山土壤的 Assyrtiko」。</p></div>"
  },
  {
    title: "論述題結構與常見題型",
    highlights: [
      { id: 1, icon: "🧱", title: "結構", content: "開頭定義 → 2–3 個論點（各附希臘實例與數字）→ 對照／限制 → 結論" },
      { id: 2, icon: "🎯", title: "題型一：產區特色", content: "例：Santorini 的風土如何塑造 Assyrtiko" },
      { id: 3, icon: "⚖️", title: "題型二：法規與市場", content: "例：PDO／PGI 占比偏低對希臘酒的影響" },
      { id: 4, icon: "🌡️", title: "題型三：氣候與永續", content: "例：Santorini 的乾旱與適應策略" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">練習：每種題型各用 5 分鐘寫出骨架（只寫論點與例子），再挑一題寫成完整答案。</p></div>"
  },
  {
    title: "時間分配與自我檢查",
    highlights: [
      { id: 1, icon: "⏱️", title: "先骨架，再展開", content: "每題先花少量時間列論點，避免寫到一半離題" },
      { id: 2, icon: "✅", title: "檢查清單", content: "是否有例子？有數字與年份？有對照？拼寫一致？" },
      { id: 3, icon: "🔁", title: "回頭檢討", content: "用本課題型自己出題，比對官方資料修正答案" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">最後一課會用模擬題把這些整合起來。</p></div>"
  },
  {
    title: "簡答題示範：題目與評分要點",
    highlights: [
      { id: 1, icon: "❓", title: "題目一", content: "「說明 Santorini 的環境如何塑造 Assyrtiko 的栽培方式與風格。」（建議 250 字內）" },
      { id: 2, icon: "✅", title: "題目一的評分要點", content: "① 強風 → kouloura 籃式低矮整枝；② 少雨 → 旱作、晨霧補水；③ 火山砂質、缺鉀土壤 → 低產、pH 低至 2.7–2.8、高酸與鹹礦感；④ 根瘤蚜無法存活 → 自根老藤；⑤ 風格：乾白、Nykteri、Vinsanto；⑥ 限制：2023–2025 乾旱使產量由約 2,500 噸跌至約 500 噸" },
      { id: 3, icon: "❓", title: "題目二", content: "「PDO 與 PGI 在希臘產量中占比偏低，對希臘葡萄酒產業有何影響？請評估。」（建議 350 字內）" },
      { id: 4, icon: "✅", title: "題目二的評分要點", content: "① 事實：PDO＋PGI 約三成，其他歐盟產國多在八成以上；散裝約占國內市場一半；② 影響：國際辨識度低、價格帶偏低、品牌溝通困難；③ 反面：PGI 給精品酒莊品種與調配自由（如 Epanomi、Aegean Sea），未必是劣勢；④ 出口 86.6% 在歐盟；⑤ 結論：問題不在制度本身，而在散裝比重與品牌化不足" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Santorini 題的骨架就是 gr-l3-1 的因果鏈：風 → 整枝；乾旱與沙地 → 低產濃縮；無根瘤蚜 → 老藤。</p></div>"
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
            question: "依來源，D3 品飲日要盲品幾款酒？",
            options: ["A. 6 款","B. 12 款","C. 20 款","D. 3 款"],
            correct: 1,
            explanation: "分為兩份各 1.5 小時的試卷。"
          },
          {
            type: 'single',
            question: "「高酸＋鹹感＋礦物」最符合哪種酒？",
            options: ["A. Santorini Assyrtiko","B. Mavrodaphne of Patras","C. Retsina","D. Agiorgitiko 新酒"],
            correct: 0,
            explanation: "這是火山土壤上 Assyrtiko 的典型線索組合。"
          },
          {
            type: 'single',
            question: "論述中引用數字時，最重要的是？",
            options: ["A. 標註年份與來源","B. 愈多愈好","C. 完全不用數字","D. 只用最大的數字"],
            correct: 0,
            explanation: "數字隨年代變動，標註年份能避免過時。"
          }
        ]
      }
    }
  }
]
