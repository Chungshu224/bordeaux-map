/**
 * CL-L1-1 認識智利葡萄酒
 * 事實來源：Wine With Seth（Chile、Chilean DO system）、Wikipedia（Carménère）、SAG（Catastro Vitícola Nacional 2023 Informe ejecutivo）、Wine With Seth 引用的 Decreto 464（1995）。數字一律標註年份；來源有出入者（Costa／Entre Cordilleras／Andes 的年份、葡萄根瘤蚜年份、Carmenère 面積、DO 層級名稱）課內標明、不進測驗，並須對照 SAG 法規原文。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識智利葡萄酒",
    subtitle: "殖民傳入、法國品種與 Carmenère 的重新發現",
    icon: "🇨🇱",
    background: 'linear-gradient(135deg, #A4343A 0%, #5E1B20 100%)'
  },
  {
    title: "從 País 到法國品種",
    highlights: [
      { id: 1, icon: "⛪", title: "最早的葡萄", content: "Wine With Seth 記載 Francisco de Aguirre 於 1551 年在 La Serena 附近種下 Mission 葡萄（País）；其他來源的年份與人物略有不同" },
      { id: 2, icon: "🇫🇷", title: "Ochagavía 與 1850 年代", content: "1851 年 Silvestre Ochagavía 在 Talagante 率先引入歐洲品種；智利生產者在 1850 年代自 Bordeaux 進口插條" },
      { id: 3, icon: "🏛️", title: "老牌酒莊", content: "Carmen（1850）、Cousiño-Macul（1856）、Errázuriz（1870）、Santa Rita（1880）、Concha y Toro（1883）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利先有殖民時期的 País，再在 19 世紀中葉引入 Bordeaux 品種並成立老牌酒莊。</p></div>"
  },
  {
    title: "Carmenère 的故事",
    highlights: [
      { id: 1, icon: "🌿", title: "Bordeaux 的消失品種", content: "Carmenère 原本在 Médoc 與 Graves 種植；根瘤蚜與易落花（coulure）使它在法國幾乎消失（Wikipedia 記根瘤蚜為 1867 年，Wine With Seth 記為 1863 年）" },
      { id: 2, icon: "🔄", title: "被當成 Merlot", content: "20 世紀大部分時間，智利人把它當成 Merlot（稱為「Merlot selection」或「Merlot Peumal」），常與 Merlot 一起採收釀造" },
      { id: 3, icon: "🔬", title: "1994 年的確認", content: "1994 年 11 月，法國葡萄品種學家 Jean-Michel Boursiquot 在 Carmen 酒莊確認它是獨立品種；智利農業部於 1998 年正式承認" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Carmenère 是智利最重要的故事：法國失去的品種，在智利被誤認 100 多年後重新被發現。</p></div>"
  },
  {
    title: "今天的智利",
    highlights: [
      { id: 1, icon: "📊", title: "規模", content: "2023 年 SAG 統計：釀酒葡萄（viníferas）124,436 公頃；含皮斯可用葡萄的總面積 133,668 公頃" },
      { id: 2, icon: "🍷", title: "紅多於白", content: "2023 年紅葡萄占 72.8%（90,609 公頃），白葡萄占 27.2%（33,827 公頃）" },
      { id: 3, icon: "📉", title: "面積在變動", content: "近年因乾旱與葡萄價格偏低，種植面積有所減少，數字每年更新" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">智利是以紅酒為主、面積穩定但近年略減的產業。</p></div>"
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
            question: "誰在 1994 年確認智利的「Merlot」其實是 Carmenère？",
            options: ["A. Jean-Michel Boursiquot","B. Silvestre Ochagavía","C. Francisco de Aguirre","D. Nicolás Catena"],
            correct: 0,
            explanation: "法國葡萄品種學家 Boursiquot。"
          },
          {
            type: 'single',
            question: "智利農業部正式承認 Carmenère 是在哪一年？",
            options: ["A. 1851","B. 1994","C. 1998","D. 2011"],
            correct: 2,
            explanation: "1998 年（1994 年是確認的年份）。"
          },
          {
            type: 'single',
            question: "2023 年智利紅葡萄約占釀酒葡萄面積的？",
            options: ["A. 27.2%","B. 50%","C. 72.8%","D. 95%"],
            correct: 2,
            explanation: "72.8%（SAG）。"
          },
          {
            type: 'single',
            question: "Carmenère 在智利一度被誤認為哪個品種？",
            options: ["A. Merlot","B. Malbec","C. Syrah","D. Pinot Noir"],
            correct: 0,
            explanation: "Merlot。"
          }
        ]
      }
    }
  }
]
