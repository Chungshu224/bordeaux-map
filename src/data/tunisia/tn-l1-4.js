/**
 * TN-L1-4 產業結構與市場
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "產業結構與市場",
    subtitle: "數字差很多，先看結構",
    icon: "🏛️",
    background: "linear-gradient(135deg, #B5121B 0%, #4E0A10 100%)"
  },
  {
    title: "規模：為什麼數字對不上",
    highlights: [
      { id: 1, icon: "📏", title: "面積", content: "有資料寫 2008 年全國葡萄園約 3.1 萬公頃、略多於一半用於釀酒；也有資料寫 1.4 到 1.8 萬公頃，或只計釀酒葡萄的數千公頃" },
      { id: 2, icon: "🔍", title: "差異的原因", content: "是否包含鮮食葡萄、統計年份不同，加上近年面積持續減少。本課程沒有找到官方的最新統計" },
      { id: 3, icon: "🍷", title: "產量", content: "2000 年代的報導多寫每年 30 到 40 萬百升，2007 年曾達 60 萬百升的高峰。這些都是媒體數字" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">記住規模的量級即可：遠小於保護國時期的高峰。</p></div>"
  },
  {
    title: "誰在釀酒",
    highlights: [
      { id: 1, icon: "🤝", title: "合作社聯盟", content: "UCCV（葡萄酒合作社中央聯盟），品牌名為「Les Vignerons de Carthage」。2008 到 2010 年的報導說它約占全國產量的三分之二" },
      { id: 2, icon: "🌐", title: "合資酒廠", content: "1990 年代末起，法國、德國、義大利與奧地利資本以合資方式進入，帶來新設備與國際品種" },
      { id: 3, icon: "🏷️", title: "歷史當品牌", content: "Magon 這個酒款就以迦太基農學家 Mago 命名，顯示歷史是行銷的重要素材" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">一個大型合作社加上幾家合資酒廠，是突尼西亞產業的基本結構。</p></div>"
  },
  {
    title: "賣到哪裡",
    highlights: [
      { id: 1, icon: "✈️", title: "出口", content: "2009 年前後的報導：出口約占產量四成，主要市場是德國與法國，其次是瑞士、比利時、美國、加拿大與俄羅斯" },
      { id: 2, icon: "🏠", title: "內銷", content: "同時期的報導估計國內人均年消費約 2.2 公升。突尼西亞是穆斯林為主的國家，但酒類合法販售" },
      { id: 3, icon: "📊", title: "AOC 的比例", content: "常見說法是約七成以 AOC 銷售，其中兩成標「premier cru」。本課程找不到「premier cru」的法律依據，這個數字不出題" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出口靠德國與法國，內銷規模不大，這是突尼西亞市場的兩個特點。</p></div>"
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
            question: "「Les Vignerons de Carthage」是什麼？",
            options: ["A. 政府的檢驗機構","B. 葡萄酒合作社中央聯盟（UCCV）的品牌","C. 一個 AOC 的名稱","D. 法國的酒商"],
            correct: 1,
            explanation: "報導估計它約占全國產量的三分之二。"
          },
          {
            type: 'single',
            question: "報導中最主要的兩個出口市場是？",
            options: ["A. 美國與加拿大","B. 義大利與西班牙","C. 德國與法國","D. 中國與日本"],
            correct: 2,
            explanation: "其次是瑞士、比利時、美國、加拿大與俄羅斯。"
          },
          {
            type: 'single',
            question: "各資料的葡萄園面積差異很大，主要原因是？",
            options: ["A. 各省使用不同的面積單位","B. 法律禁止公布數字","C. 只計算 AOC 葡萄園","D. 是否包含鮮食葡萄，以及統計年份不同"],
            correct: 3,
            explanation: "加上近年面積持續減少，本課程沒有找到最新官方統計。"
          }
        ]
      }
    }
  }
]
