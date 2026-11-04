/**
 * MA-L1-2 從殖民葡萄園到外資復興
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "從殖民葡萄園到外資復興",
    subtitle: "摩洛哥葡萄酒的興衰，主要由市場與政策決定",
    icon: "🏜️",
    background: "linear-gradient(135deg, #C1272D 0%, #5A1014 100%)"
  },
  {
    title: "法國時期：為出口而種",
    highlights: [
      { id: 1, icon: "🏺", title: "古代的起點", content: "一般認為腓尼基人帶來葡萄栽培，羅馬時期已確立。這段缺乏細節，知道即可" },
      { id: 2, icon: "🇫🇷", title: "大規模種植", content: "真正的大面積葡萄園來自法國殖民者，與阿爾及利亞的情況相似" },
      { id: 3, icon: "📈", title: "1950 年代的高峰", content: "1956 年獨立時，葡萄園約 5.5 到 7 萬公頃，產量達每年 200 到 300 萬百升。各來源數字不同，請記住規模，不要背單一數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這些酒的主要出路是法國市場，所以獨立後問題很快浮現。</p></div>"
  },
  {
    title: "獨立之後：市場消失、葡萄園老化",
    highlights: [
      { id: 1, icon: "🚧", title: "1967 年的配額", content: "歐洲經濟共同體在 1967 年實施進口配額，出口市場大幅縮小" },
      { id: 2, icon: "🏛️", title: "國有化", content: "1970 年代起，國家接管多數葡萄園；國營農業公司 SODEA 也在這段時間成立。葡萄收購價固定，品質沒有誘因" },
      { id: 3, icon: "📉", title: "1990 年代初的低點", content: "《牛津葡萄酒指南》記載，當時釀酒葡萄約 1.3 萬公頃，其中一半以上老化或染病" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">從高峰到低點不到四十年，原因是失去市場和缺乏誘因，不是風土。</p></div>"
  },
  {
    title: "1990 年代：租地給外資",
    highlights: [
      { id: 1, icon: "🤝", title: "長期租賃", content: "哈桑二世時期開放外國酒商向 SODEA 長期租用國有葡萄園，法國資金大量進入，Castel 集團是代表" },
      { id: 2, icon: "🍇", title: "改種", content: "Cabernet Sauvignon、Merlot、Syrah 的比例開始快速增加，2005 年合計約 15%" },
      { id: 3, icon: "📜", title: "制度升級", content: "1977 年建立 AOG，1998 年又訂出 AOC 的一般規定與第一個 AOC：Les Coteaux de l'Atlas" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">今天的摩洛哥葡萄酒，是這波外資與改種之後的樣子。</p></div>"
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
            question: "摩洛哥葡萄園在法國時期大規模擴張，獨立是哪一年？",
            options: ["A. 1998 年","B. 1956 年","C. 1912 年","D. 1977 年"],
            correct: 1,
            explanation: "1912 是保護國開始，1977 與 1998 是 AOG 和 AOC 的法規年份。"
          },
          {
            type: 'single',
            question: "1967 年重創摩洛哥葡萄酒出口的是？",
            options: ["A. 全面禁酒令","B. 葡萄園國有化","C. 歐洲經濟共同體的進口配額","D. 根瘤蚜蟲害"],
            correct: 2,
            explanation: "市場消失是衰退的起點，國有化是之後的事。"
          },
          {
            type: 'single',
            question: "1990 年代復興的關鍵做法是？",
            options: ["A. 全部改種原生品種","B. 禁止內銷、全部出口","C. 由合作社收購全部葡萄園","D. 外國酒商向 SODEA 長期租用國有葡萄園"],
            correct: 3,
            explanation: "Castel 等法國資金因此進入，同時帶來改種。"
          }
        ]
      }
    }
  }
]
