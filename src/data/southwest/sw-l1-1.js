/**
 * SW-L1-1 歷史：從羅馬到波爾多的陰影
 * 事實來源：Wine With Seth（Cahors、Gaillac、Jurançon、Tannat、Négrette、Manseng、IGP 等頁，2026 年查閱）、Wikipedia（South West France、Madiran wine、Fronton AOC、Mauzac、Fer）、Wine Folly、wein.plus、VinePair、INAO 規格書草案。數字一律標註來源；來源有出入者（葡萄園面積 16,000 公頃／約 12 萬英畝／約 160,000 公頃不一致、AOC 數量說法不一、Fronton 的 Négrette 比例、Vin de Pays 立法年 1973／1979）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "歷史：從羅馬到波爾多的陰影",
    subtitle: "一個被鄰居壓制、卻保住本土品種的產區",
    icon: "🏛️",
    background: 'linear-gradient(135deg, #4B2E55 0%, #2B1533 100%)'
  },
  {
    title: "古代與中世紀",
    highlights: [
      { id: 1, icon: "🏛️", title: "羅馬人", content: "Wine Folly 記載羅馬人約在西元 1 世紀帶來葡萄栽培；Wikipedia 指出此地的酒貿易早於波爾多開始種植。Wine With Seth 記載 Cahors 約在西元前 50 年已有葡萄" },
      { id: 2, icon: "🏰", title: "亞奎丹與英國統治", content: "wein.plus 記載該地自 12 世紀中葉起受英國統治，1453 年併入法國；Cahors 的酒曾出現在 1152 年 Eleanor of Aquitaine 與 Henry II 的婚禮（Wine With Seth）" },
      { id: 3, icon: "⛪", title: "修道院", content: "wein.plus：中世的天主教修會，尤其是 Cistercians 栽種葡萄；Gaillac 的 Saint-Michel 修道院創立於 972 年（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">早在波爾多成名之前，這裡就已經在釀酒了。</p></div>"
  },
  {
    title: "波爾多的陰影",
    highlights: [
      { id: 1, icon: "⚓", title: "河運出海", content: "Dordogne、Garonne、Tarn 等河川把酒桶運往波爾多，再出口到英國、荷蘭、德國與俄羅斯（Wine Folly）" },
      { id: 2, icon: "🔒", title: "police des vins", content: "Wikipedia：13 至 14 世紀，規定波爾多的酒賣完前，內陸「高地」的酒不得從波爾多出口，酒桶常在倉庫滯留數週或數月，價格也較低" },
      { id: 3, icon: "🧱", title: "保護主義的延續", content: "Wine Folly 記載波爾多的稅收與規則偏袒自家酒，這種保護主義持續到法國大革命" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這解釋了為什麼這片產區長期默默無名。</p></div>"
  },
  {
    title: "荷蘭人與宮廷",
    highlights: [
      { id: 1, icon: "🇳🇱", title: "荷蘭需求", content: "wein.plus：17 世紀起荷蘭人對白蘭地與甜酒的需求，塑造了區內的風格" },
      { id: 2, icon: "👑", title: "Gaillac 與王室", content: "1253 年 Henry III 買下 20 桶 Gaillac；1520 年 François I 在金帛盛會贈 Henry VIII 50 桶（Wine With Seth）" },
      { id: 3, icon: "👶", title: "Jurançon 與 Henri IV", content: "Wine With Seth 記載 1553 年 Henri IV 受洗時使用了 Jurançon 酒" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">區內的酒早就與宮廷與海外貿易有關。</p></div>"
  },
  {
    title: "近代：蟲害、霜害與 AOC",
    highlights: [
      { id: 1, icon: "🐛", title: "根瘤蚜", content: "19 世紀中葉重創葡萄園（Wine Folly）；Cahors 在 1883 年受災（Wine With Seth）" },
      { id: 2, icon: "❄️", title: "1956 年霜害", content: "1956 年 2 月的霜害幾乎毀掉 Cahors 全部葡萄園，大規模重植後 Malbec 更為主導（Wine With Seth）" },
      { id: 3, icon: "📜", title: "AOC 認定", content: "Jurançon 甜酒 1936、Gaillac 白酒 1938（紅酒 1970）、Madiran 1948、Cahors 1971（Wine With Seth）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各產區在不同年代各自取得 AOC，沒有統一的「西南 AOC」。</p></div>"
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
            question: "Cahors 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 1998"],
            correct: 2,
            explanation: "1971 年（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Madiran 取得 AOC 是哪一年？",
            options: ["A. 1936","B. 1948","C. 1971","D. 1998"],
            correct: 1,
            explanation: "1948 年（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "Gaillac 白酒取得 AOC 是哪一年？",
            options: ["A. 1938","B. 1948","C. 1970","D. 1971"],
            correct: 0,
            explanation: "1938 年 3 月 21 日；紅酒要到 1970 年（Wine With Seth）。"
          },
          {
            type: 'single',
            question: "1956 年 2 月霜害之後，Cahors 的重植有何結果？",
            options: ["A. Malbec 更為主導","B. 全面改種 Merlot","C. 葡萄園全數廢耕","D. 改種白葡萄"],
            correct: 0,
            explanation: "大規模重植後 Malbec 更為主導。"
          },
          {
            type: 'single',
            question: "13 至 14 世紀的 police des vins 規定什麼？",
            options: ["A. 波爾多的酒賣完前，內陸酒不得出口","B. 內陸酒必須先運往英國","C. 禁止出口白酒","D. 酒稅全免"],
            correct: 0,
            explanation: "這使高地的酒滯留並賣得便宜（Wikipedia）。"
          },
          {
            type: 'single',
            question: "wein.plus 記載該地併入法國是哪一年？",
            options: ["A. 1152","B. 1453","C. 1685","D. 1789"],
            correct: 1,
            explanation: "1453 年。"
          }
        ]
      }
    }
  }
]
