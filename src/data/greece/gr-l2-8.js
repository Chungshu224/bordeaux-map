/**
 * GR-L2-8 Level 2 綜合評量：產區、法規與風格
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 2 綜合評量",
    subtitle: "產區、法規與風格",
    icon: "✅",
    background: 'linear-gradient(135deg, #1C7C9C 0%, #B8902A 100%)'
  },
  {
    title: "Level 2 重點回顧",
    highlights: [
      { id: 1, icon: "⚖️", title: "法規", content: "PDO 100%／PGI 至少 85%；OPAP＝乾（紅帶）／OPE＝甜與強化（藍帶）；Retsina 為傳統名稱；Reserve 僅限前 OPAP／OPE 的 PDO" },
      { id: 2, icon: "🏔️", title: "北部", content: "Naoussa／Amyndeo／Goumenissa（Xinomavro）、Slopes of Meliton、Rapsani／Messenikola／Anchialos、Zitsa（Debina）" },
      { id: 3, icon: "🏛️", title: "伯羅奔尼撒", content: "Nemea（100% Agiorgitiko）、Mantineia（Moschofilero ≥85%）、Patras 系列、Monemvasia-Malvasia" },
      { id: 4, icon: "🌋", title: "島嶼", content: "Santorini、Paros、Lemnos、Samos、Rhodes、克里特 7 個 PDO、Cephalonia" },
      { id: 5, icon: "🍯", title: "甜酒", content: "風乾、強化、芳香品種三條路徑" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">完成評量後可進入 Level 3：Diploma 精修。</p></div>"
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
            question: "PDO 與 PGI 的來源比例要求分別是？",
            options: ["A. 100% 與至少 85%","B. 85% 與 100%","C. 50% 與 50%","D. 沒有要求"],
            correct: 0,
            explanation: "PDO 100%，PGI 至少 85%。"
          },
          {
            type: 'single',
            question: "Naoussa PDO 的品種規定是？",
            options: ["A. 100% Xinomavro 紅酒","B. Assyrtiko 白酒","C. Agiorgitiko 紅酒","D. 任何品種"],
            correct: 0,
            explanation: "Naoussa 僅限 Xinomavro 紅酒。"
          },
          {
            type: 'single',
            question: "哪個 PDO 的紅酒是 Xinomavro 混 Negoska？",
            options: ["A. Goumenissa","B. Nemea","C. Santorini","D. Zitsa"],
            correct: 0,
            explanation: "Negoska 使 Goumenissa 更柔和。"
          },
          {
            type: 'single',
            question: "Mantineia 的主要品種與環境是？",
            options: ["A. Moschofilero，約 650–800 公尺高原","B. Agiorgitiko，海岸平原","C. Assyrtiko，火山島","D. Roditis，海平面"],
            correct: 0,
            explanation: "Mantineia 是涼爽高海拔的 Moschofilero 產區。"
          },
          {
            type: 'single',
            question: "Santorini 的 Nykteri 規定？",
            options: ["A. 酒精至少 13.5%、至少 3 個月橡木桶陳年","B. 必須強化","C. 只能是紅酒","D. 含樹脂"],
            correct: 0,
            explanation: "Nykteri 是乾型風格，酒精與橡木陳年皆有下限。"
          },
          {
            type: 'single',
            question: "克里特哪個 PDO 的紅酒至少 80% Liatiko？",
            options: ["A. Sitia","B. Peza","C. Zitsa","D. Samos"],
            correct: 0,
            explanation: "Sitia 紅酒至少 80% Liatiko。"
          },
          {
            type: 'single',
            question: "哪個地區完全沒有 PDO，且曾有 PDO 在 1992 年被取消？",
            options: ["A. Attica","B. Crete","C. Cephalonia","D. Samos"],
            correct: 0,
            explanation: "Attica 的 Kantza 於 1992 年被取消，現以 PGI Attica 銷售。"
          },
          {
            type: 'single',
            question: "Retsina 的樹脂加入時機？",
            options: ["A. 發酵進行中（約三分之二前），結束後移除","B. 裝瓶時","C. 採收前噴灑","D. 只在橡木桶內"],
            correct: 0,
            explanation: "樹脂在發酵中浸泡，發酵結束後移除，只留下松香氣。"
          },
          {
            type: 'single',
            question: "愛奧尼亞群島的特殊之處是？",
            options: ["A. 沒有大區級（Regional）PGI","B. 沒有 PDO","C. 只有白酒","D. 全部強化"],
            correct: 0,
            explanation: "但仍有 PDO 與 District、Area 級 PGI。"
          },
          {
            type: 'single',
            question: "哪一項是「風乾」而非「強化」的甜酒？",
            options: ["A. Santorini Vinsanto","B. Mavrodaphne of Patras","C. PDO Patras","D. Mantineia"],
            correct: 0,
            explanation: "Vinsanto 以日曬風乾葡萄釀造；Mavrodaphne of Patras 為強化。"
          }
        ]
      }
    }
  }
]
