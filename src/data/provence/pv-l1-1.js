/**
 * PV-L1-1 認識普羅旺斯與科西嘉
 * 事實來源：INAO 產品規格（Côtes de Provence 2023 修訂、Patrimonio 2021、Bellet 2011、IGP Méditerranée）、CIVP「Les chiffres clés 2025」、CIV Corse、Wine With Seth winewiki（Provence、Corsica、Bandol、Les Baux、Tibouren、Sciaccarello、Nielluccio、Vin de Corse）、Wikipedia（Provence wine、Corsican wine、Provence、Tibouren）、wein.plus（Île de Beauté）。數字一律標註來源；來源有出入者（日照時數、科西嘉葡萄園面積、Phocaeans 抵達科西嘉的年份、Ajaccio 的 Sciaccarellu 最低比例、Côtes de Provence 主要品種占比、IGP 占科西嘉產量等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識普羅旺斯與科西嘉",
    subtitle: "從古希臘人建立馬賽到法國統治，兩個地中海產區的歷史",
    icon: "🌿",
    background: 'linear-gradient(135deg, #6F5AA8 0%, #3E3166 100%)'
  },
  {
    title: "普羅旺斯：從希臘人到 AOC",
    highlights: [
      { id: 1, icon: "🏛️", title: "希臘人與羅馬人", content: "希臘人約在公元前 600 年建立馬賽，這裡至少有 2,600 年的釀酒歷史；羅馬人約在公元前 125 年抵達，把這一帶變成阿爾卑斯山以外的第一個羅馬行省，「Provence」一名即源自「Provincia」（Wikipedia）" },
      { id: 2, icon: "🐛", title: "根瘤蚜與鐵路", content: "19 世紀末根瘤蚜重創葡萄園，有些種植者改種高產的 Carignan；鐵路開通後，巴黎等新市場也打開了（Wikipedia）" },
      { id: 3, icon: "📜", title: "1955 年的 Crus Classés", content: "1955 年 7 月 20 日，Côtes de Provence 評選出 23 家 Crus Classés，比 AOC 早 22 年；目前仍有 18 家保有（Wine With Seth、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">普羅旺斯的葡萄酒歷史，比法國這個國家還要古老。</p></div>"
  },
  {
    title: "普羅旺斯的法定產區年表",
    highlights: [
      { id: 1, icon: "1️⃣", title: "1936 與 1941", content: "Cassis 於 1936 年成為最早的六個 AOC 之一（Wine With Seth）；Bandol 與 Bellet 於 1941 年 11 月 11 日獲得 AOC（Wine With Seth、INAO）" },
      { id: 2, icon: "2️⃣", title: "1977 年 Côtes de Provence", content: "Côtes de Provence 於 1951 年是 VDQS，1977 年 10 月 24 日以政令升為 AOC（INAO、Wine With Seth）" },
      { id: 3, icon: "3️⃣", title: "後來的 AOC", content: "Coteaux d'Aix-en-Provence 於 1985 年（VDQS 為 1956 年）、Coteaux Varois 於 1993 年、Les Baux-de-Provence 於 1995 年 4 月 20 日獲得 AOC（Wine With Seth、Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">最古老的產區反而最晚成為大型 AOC。</p></div>"
  },
  {
    title: "科西嘉：腓尼基人、熱那亞與法國",
    highlights: [
      { id: 1, icon: "⛵", title: "古希臘人的殖民地", content: "Phocaea 的希臘人在公元前 6 世紀於今日的 Aléria 建立殖民地，帶來葡萄枝條；各來源寫的年份不同（約公元前 565 至 570 年），課內不列入測驗（Wine With Seth、Wikipedia）" },
      { id: 2, icon: "⚓", title: "比薩與熱那亞", content: "比薩、接著熱那亞統治這座島；熱那亞約 500 年間規定採收與釀造，並禁止酒運往熱那亞以外的港口（Wikipedia）" },
      { id: 3, icon: "🇫🇷", title: "1769 年之後", content: "法國在 1769 年取得科西嘉；同年拿破崙在 Ajaccio 一個釀酒家庭出生（Wikipedia）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">熱那亞的五百年留下了今天科西嘉的許多品種與地名。</p></div>"
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
            question: "希臘人約在何時建立馬賽？",
            options: ["A. 公元前 600 年","B. 公元前 125 年","C. 公元 100 年","D. 公元 1000 年"],
            correct: 0,
            explanation: "約公元前 600 年；羅馬人約在公元前 125 年才抵達。"
          },
          {
            type: 'single',
            question: "「Provence」一名源自什麼？",
            options: ["A. Provincia","B. Massalia","C. Mistral","D. Phocaea"],
            correct: 0,
            explanation: "羅馬人稱此地為 Provincia Romana，後來縮短演變成 Provence。"
          },
          {
            type: 'single',
            question: "Côtes de Provence 在哪一年成為 AOC？",
            options: ["A. 1936","B. 1951","C. 1977","D. 1995"],
            correct: 2,
            explanation: "1977 年 10 月 24 日；1951 年是 VDQS。"
          },
          {
            type: 'single',
            question: "1955 年評選的 Côtes de Provence Crus Classés 最初有幾家？",
            options: ["A. 12","B. 18","C. 23","D. 40"],
            correct: 2,
            explanation: "23 家，現存 18 家。"
          },
          {
            type: 'single',
            question: "法國哪一年取得科西嘉？",
            options: ["A. 1566","B. 1769","C. 1815","D. 1968"],
            correct: 1,
            explanation: "1769 年。"
          },
          {
            type: 'single',
            question: "科西嘉第一個 AOC 是哪一個、哪一年？",
            options: ["A. Patrimonio，1968 年","B. Ajaccio，1984 年","C. Vin de Corse，1976 年","D. Muscat du Cap Corse，1993 年"],
            correct: 0,
            explanation: "Patrimonio 於 1968 年成為科西嘉第一個 AOC（INAO：1968 年 3 月 13 日政令）。"
          }
        ]
      }
    }
  }
]
