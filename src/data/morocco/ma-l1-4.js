/**
 * MA-L1-4 產業結構與市場
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業結構與市場",
    subtitle: "少數大廠主導，酒大多在國內喝掉",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "規模：先分清兩種葡萄",
    highlights: [
      { id: 1, icon: "🍇", title: "數字的陷阱", content: "二手報導引用 OIV，2022 年葡萄園約 4.2 萬公頃，但這很可能包含鮮食葡萄。2002 年的品種資料顯示，釀酒葡萄只有約 1 萬公頃，鮮食葡萄約 3.9 萬公頃" },
      { id: 2, icon: "🍾", title: "產量", content: "近年約每年 3,500 到 4,000 萬瓶；1995 到 2022 年平均約 35 萬百升。這些都來自媒體引用，不是官方統計" },
      { id: 3, icon: "🧠", title: "怎麼用", content: "記住量級：在非洲排在南非之後，規模遠小於 1950 年代。考題若問精確數字，要先確認來源年份" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">摩洛哥的數字特別需要問一句：這是釀酒葡萄，還是全部葡萄？</p></div>"
  },
  {
    title: "值得認識的酒廠",
    highlights: [
      { id: 1, icon: "🏰", title: "Les Celliers de Meknès", content: "Zniber 家族的企業，一般認為是全國最大的生產者，旗艦是 Coteaux de l'Atlas 的 Château Roslane" },
      { id: 2, icon: "🇫🇷", title: "Castel 與 Thalvin", content: "Castel 的 Boulaouane 灰酒品牌在法國知名度高。Thalvin 經營 Domaine des Ouled Thaleb，常被稱為現存最古老的酒廠之一" },
      { id: 3, icon: "🌊", title: "Val d'Argan", content: "位於大西洋岸的 Essaouira 附近，而 Essaouira 不在 14 個 AOG 的範圍內。這提醒我們：好酒不一定掛 AOG" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">酒廠名單會變動，記住類型就好：本土大廠、法國資本、獨立小莊。</p></div>"
  },
  {
    title: "在伊斯蘭國家賣酒",
    highlights: [
      { id: 1, icon: "🛒", title: "內銷為主", content: "多數資料都指出大部分的酒留在國內，出口比例很小，具體比例說法不一" },
      { id: 2, icon: "⚖️", title: "1967 年的規定", content: "1967 年 7 月 17 日的法令第 28 條禁止持牌業者把酒類賣給摩洛哥穆斯林。媒體指出它仍未廢止，但執行並不一致" },
      { id: 3, icon: "🏷️", title: "酒標上的痕跡", content: "法規也禁止酒標出現與宗教相關的用語、地點或建築，下一階段會再談" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">合法生產、受限販售、保持低調，是理解這個市場的三個關鍵詞。</p></div>"
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
            question: "看到「摩洛哥葡萄園約 4.2 萬公頃」時，最該注意什麼？",
            options: ["A. 可能只算白葡萄","B. 可能包含阿爾及利亞","C. 可能只算 AOC","D. 可能包含鮮食葡萄"],
            correct: 3,
            explanation: "2002 年的資料中，釀酒葡萄只有約 1 萬公頃。"
          },
          {
            type: 'single',
            question: "Château Roslane 屬於哪一家企業？",
            options: ["A. Les Celliers de Meknès","B. Thalvin","C. Castel","D. Val d'Argan"],
            correct: 0,
            explanation: "Zniber 家族的 Les Celliers de Meknès，位於 Coteaux de l'Atlas。"
          },
          {
            type: 'single',
            question: "Val d'Argan 的例子說明了什麼？",
            options: ["A. AOG 禁止在海邊種葡萄","B. Essaouira 在 14 個 AOG 之外，好酒不一定掛 AOG","C. 所有海岸產區都是 AOC","D. Essaouira 是摩洛哥第一個 AOC"],
            correct: 1,
            explanation: "部令第 869-75 號的 14 個 AOG 裡沒有 Essaouira。"
          }
        ]
      }
    }
  }
]
