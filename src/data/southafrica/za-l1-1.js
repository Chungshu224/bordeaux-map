/**
 * ZA-L1-1 認識南非葡萄酒
 * 事實來源：Wikipedia（History of South African wine）、Wine With Seth（South Africa、Coastal Region、WO Label Declarations）、Pinotage Association、Wineland（Cap Classique）、The Drinks Business／WOSA（2024 出口）。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識南非葡萄酒",
    subtitle: "歷史與現代復興",
    icon: "🌅",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "開普殖民與第一瓶酒",
    highlights: [
      { id: 1, icon: "⚓", title: "1652 年", content: "Jan van Riebeeck 受命在開普建立堡壘與農業社區，作為船隻補給站" },
      { id: 2, icon: "🌱", title: "1655 年與 1659 年", content: "1655 年栽種第一座開普葡萄園；1659 年 2 月 2 日以開普葡萄釀出第一批葡萄酒（由法國 Muscadel 葡萄釀成）" },
      { id: 3, icon: "🏡", title: "Constantia", content: "總督 Simon van der Stel 於 1685 年取得約 750 公頃的 Constantia 莊園；不同來源對取得年份與總督任期的年份略有出入" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先記住主線：荷蘭東印度公司補給站 → 第一批葡萄酒 → Constantia 成為名園。</p></div>"
  },
  {
    title: "移民、名聲與災難",
    highlights: [
      { id: 1, icon: "🇫🇷", title: "Huguenot 移民", content: "1688 年起法國 Huguenot 難民抵達開普，帶來栽培與釀造經驗，其後代仍影響著產業" },
      { id: 2, icon: "👑", title: "Constantia 的名聲", content: "1816 年 André Jullien 將 Constantia 的酒列入世界分級的最高等級；拿破崙流放聖赫勒拿島期間也曾索取其酒" },
      { id: 3, icon: "🐛", title: "根瘤芽蟲", content: "根瘤芽蟲於 1866 年抵達開普，造成重創，復原耗時超過 20 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Constantia 的甜酒曾是世界級名酒，但 19 世紀的災難與市場變化讓產業一度衰退。</p></div>"
  },
  {
    title: "KWV 體制與現代復興",
    highlights: [
      { id: 1, icon: "🏛️", title: "1918 年 KWV", content: "政府支持成立 KWV，後來制定全產業的政策與價格、限制產量並課以蒸餾配額；1924 年約 95% 的葡萄園主為成員" },
      { id: 2, icon: "🌍", title: "抵制與開放", content: "20 世紀的抵制行動壓抑出口；種族隔離在 1980 年代末至 1990 年代結束後，產業重返國際市場" },
      { id: 3, icon: "📈", title: "轉向消費者葡萄酒", content: "1990 年只有不到 30% 的收成成為消費用葡萄酒；2003 年已超過 70%" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">現代南非的關鍵轉折是 1990 年代的開放，以及從蒸餾原料轉向品質葡萄酒。</p></div>"
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
            question: "以開普葡萄釀出第一批葡萄酒是哪一年？",
            options: ["A. 1652","B. 1659","C. 1688","D. 1918"],
            correct: 1,
            explanation: "1659 年 2 月 2 日；1652 年是殖民地建立。"
          },
          {
            type: 'single',
            question: "KWV 成立於哪一年？",
            options: ["A. 1866","B. 1918","C. 1973","D. 1994"],
            correct: 1,
            explanation: "政府於 1918 年資助成立 KWV。"
          },
          {
            type: 'single',
            question: "1688 年起抵達開普並帶來釀酒經驗的是哪一群人？",
            options: ["A. 英國移民","B. Huguenot 難民","C. 葡萄牙水手","D. 德國傳教士"],
            correct: 1,
            explanation: "法國 Huguenot 難民。"
          },
          {
            type: 'single',
            question: "根瘤芽蟲抵達開普是在哪一年？",
            options: ["A. 1685","B. 1816","C. 1866","D. 1990"],
            correct: 2,
            explanation: "1866 年，復原耗時超過 20 年。"
          }
        ]
      }
    }
  }
]
