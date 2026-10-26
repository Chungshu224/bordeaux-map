/**
 * ZA-L3-7 Level 3 綜合評量
 * 事實來源：Wine With Seth（Cap Classique、Constantia、Swartland、Walker Bay、Olifants River、Paarl、WO Label Declarations）、Wine Anorak（Cap Classique 2023）、Cheers／WineMag（甜酒）、Wine Wisdom（IPW／BWI）、The Drinks Business（2018 乾旱、2024 出口）、Farmers Weekly（2007 轉型憲章）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Level 3 綜合評量",
    subtitle: "12 題，及格 60 分",
    icon: "🏆",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Level 3 重點回顧",
    highlights: [
      { id: 1, icon: "💧", title: "水與永續", content: "IPW 1998、BWI 2004、永續封條 2010 年份起；2018 年乾旱為預測值" },
      { id: 2, icon: "🫧", title: "釀造", content: "Cap Classique：12 個月（2023 年份起）、整串壓榨、至少 3 bar；Chenin 風格光譜；Pinotage＝Pinot Noir × Cinsaut" },
      { id: 3, icon: "🍯", title: "甜酒與加烈", content: "Natural Sweet、Noble Late Harvest、Straw wine；Muscadel（發酵中止）與 Jerepigo（未發酵）；Cape Port 2012 年起須加 Cape" },
      { id: 4, icon: "🏛️", title: "產業", content: "KWV 1918、配額廢除 1992、KWV 私有化 1997；2024 年散裝占容量、瓶裝占價值" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">本評量為 12 題、及格 60 分。</p></div>"
  },
  {
    component: 'QuizSlide',
    componentProps: {
      slide: {
        title: "📋 Level 3 綜合評量",
        isFinalExam: true,
        passScore: 60,
        questions: [
          {
            type: 'single',
            question: "IPW 於哪一年導入？",
            options: ["A. 1998","B. 2004","C. 2010","D. 2018"],
            correct: 0,
            explanation: "1998 年。"
          },
          {
            type: 'single',
            question: "永續封條自哪個年份起可用？",
            options: ["A. 1998","B. 2004","C. 2010","D. 2018"],
            correct: 2,
            explanation: "2010 年份起。"
          },
          {
            type: 'single',
            question: "Cap Classique 現行的酒渣陳年最低要求（2023 年份起）？",
            options: ["A. 6 個月","B. 9 個月","C. 12 個月","D. 24 個月"],
            correct: 2,
            explanation: "12 個月；舊規定為 9 個月。"
          },
          {
            type: 'single',
            question: "Cap Classique 的瓶內壓力最低要求？",
            options: ["A. 1 bar","B. 3 bar","C. 6 bar","D. 9 bar"],
            correct: 1,
            explanation: "最低 3 bar。"
          },
          {
            type: 'single',
            question: "Pinotage 的親本？",
            options: ["A. Pinot Noir × Cinsaut","B. Pinot Noir × Syrah","C. Cabernet × Merlot","D. Chenin × Colombard"],
            correct: 0,
            explanation: "Pinot Noir × Cinsaut。"
          },
          {
            type: 'single',
            question: "Vin de Constance 屬於？",
            options: ["A. Natural Sweet","B. Noble Late Harvest","C. Jerepigo","D. Cape Tawny"],
            correct: 0,
            explanation: "Natural Sweet。"
          },
          {
            type: 'single',
            question: "完全不經發酵、葡萄汁加烈酒的是？",
            options: ["A. Muscadel","B. Jerepigo","C. Straw wine","D. Cap Classique"],
            correct: 1,
            explanation: "Jerepigo。"
          },
          {
            type: 'single',
            question: "2012 年起，Calitzdorp 的 Port 風格酒須如何稱呼？",
            options: ["A. Port","B. Cape + 風格名","C. Oporto","D. Madeira"],
            correct: 1,
            explanation: "須加 Cape 前綴。"
          },
          {
            type: 'single',
            question: "KWV 成為私人公司是？",
            options: ["A. 1918 年","B. 1992 年","C. 1997 年 12 月 1 日","D. 2023 年 8 月 1 日"],
            correct: 2,
            explanation: "1997 年 12 月 1 日。"
          },
          {
            type: 'single',
            question: "2024 年南非出口中，散裝酒的特徵？",
            options: ["A. 容量多、價值較低","B. 價值多、容量少","C. 已停止","D. 只賣英國"],
            correct: 0,
            explanation: "約占容量 60%、價值 23%。"
          },
          {
            type: 'single',
            question: "Hemel-en-Aarde 三個 Ward 中最高最內陸的是？",
            options: ["A. Valley","B. Upper Valley","C. Ridge","D. Bot River"],
            correct: 2,
            explanation: "Ridge。"
          },
          {
            type: 'single',
            question: "2018 年乾旱的減產數字在論述中應如何處理？",
            options: ["A. 當作最終結果","B. 標明是預測","C. 不可提及乾旱","D. 改成 2005 年的數字"],
            correct: 1,
            explanation: "標明是預測。"
          }
        ]
      }
    }
  }
]
