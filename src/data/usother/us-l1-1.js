/**
 * US-L1-1 認識美國西北與東岸葡萄酒
 * 事實來源：TTB（Wine Labeling: Appellation of Origin）、Wikipedia（American Viticultural Area、History of Oregon wine、New York wine、Columbia Valley AVA、Konstantin Frank）、Wine Spectator（Oregon labeling）、Oregon Wine Board（2024 Oregon Vineyard and Winery Census）、Washington State Wine Commission（2024 grape production report）、Wine With Seth（Washington State）、HistoryLink（AVAs of Washington）、Finger Lakes Wine Alliance。數字一律標註年份；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識美國西北與東岸葡萄酒",
    subtitle: "三州的歷史脈絡與現代發展",
    icon: "🇺🇸",
    background: 'linear-gradient(135deg, #1F4E79 0%, #12304D 100%)'
  },
  {
    title: "Oregon：從先驅到 Pinot Noir 名產區",
    highlights: [
      { id: 1, icon: "🌱", title: "1960 年代的先驅", content: "Richard Sommer 於 1961 年在 Roseburg 附近開設 HillCrest，首批酒於 1964 年上市；David Lett 在 1960 年代中期於 Dundee 一帶種下 Eyrie 葡萄園（不同來源寫 1965 或 1966 年）" },
      { id: 2, icon: "🏆", title: "1979 年的國際肯定", content: "Eyrie 的 1975 年 South Block Pinot Noir 在 1979 年 Gault-Millau 法國葡萄酒奧林匹亞中名列前十，並被評為最佳 Pinot Noir；其後 Drouhin 安排的複賽中，Joseph Drouhin 的 1959 Chambolle-Musigny 以些微差距勝出" },
      { id: 3, icon: "📈", title: "快速成長", content: "1970 年只有 5 家酒廠與 35 英畝產酒葡萄園；1990 年 70 家酒廠、5,682 英畝；2024 年普查有 1,076 家酒廠與 47,343 英畝種植面積" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Oregon 的故事是少數先驅在 1960 年代押注 Pinot Noir，1979 年獲得國際肯定，之後快速成長。</p></div>"
  },
  {
    title: "Washington：從 Columbia Valley 到 Walla Walla",
    highlights: [
      { id: 1, icon: "🏛️", title: "Ste. Michelle 的前身", content: "American Wine Growers 於 1934 年成立，後來發展為 Chateau Ste. Michelle，1967 年更名" },
      { id: 2, icon: "🍷", title: "Walla Walla 的先驅", content: "Leonetti（1977）、Quilceda Creek（1979）、Woodward Canyon（1981）、L'Ecole No. 41（1983）" },
      { id: 3, icon: "🗺️", title: "AVA 的出現", content: "Yakima Valley 於 1983 年成為 Washington 第一個 AVA；Walla Walla Valley 與 Columbia Valley 都在 1984 年核准" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Washington 從大型生產者起步，1980 年代 AVA 出現，Walla Walla 的小型酒莊帶動精品形象。</p></div>"
  },
  {
    title: "New York：東岸最古老的產業",
    highlights: [
      { id: 1, icon: "🍇", title: "Finger Lakes 的起點", content: "1829 年在 Hammondsport 種下第一批葡萄；1900 年前已有超過 50 家酒廠" },
      { id: 2, icon: "🔬", title: "Konstantin Frank", content: "1951 年移民美國、1953 年到 Cornell 的 Geneva 試驗站，1958 年在 Keuka Lake 西岸買地，1962 年推出第一個年份（Johannisberg Riesling 的 Trockenbeerenauslese），證明 Vitis vinifera 能在寒冷氣候生存" },
      { id: 3, icon: "📜", title: "1976 年農場酒廠法", content: "1976 年全州只有 19 家酒廠，集中在 Finger Lakes 與 Long Island；到 1985 年這兩區增至 63 家" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">New York 的現代轉折是 Frank 證明 vinifera 可行，以及 1976 年法律降低小型酒廠的門檻。</p></div>"
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
            question: "Washington 第一個 AVA 是哪一個？",
            options: ["A. Walla Walla Valley","B. Yakima Valley","C. Red Mountain","D. Columbia Gorge"],
            correct: 1,
            explanation: "Yakima Valley 於 1983 年核准。"
          },
          {
            type: 'single',
            question: "Richard Sommer 的 HillCrest 開設於哪一年？",
            options: ["A. 1961","B. 1979","C. 1984","D. 1987"],
            correct: 0,
            explanation: "1961 年，首批酒於 1964 年上市。"
          },
          {
            type: 'single',
            question: "New York 農場酒廠法通過於哪一年？",
            options: ["A. 1951","B. 1962","C. 1976","D. 1984"],
            correct: 2,
            explanation: "1976 年；當時全州只有 19 家酒廠。"
          },
          {
            type: 'single',
            question: "Konstantin Frank 的第一個年份推出於哪一年？",
            options: ["A. 1951","B. 1958","C. 1962","D. 1976"],
            correct: 2,
            explanation: "1962 年；1951 年是他移民美國的年份。"
          }
        ]
      }
    }
  }
]
