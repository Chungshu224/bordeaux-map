/**
 * BD-L1-1 認識白蘭地
 * 事實來源：Wine With Seth（Cognac production and aging）、Wikipedia（Cognac）、Difford's Guide（Cognac production、classifications）、Martell、alcademics、WSET Level 2 學習指南摘要（open-exam-prep）、Regulation (EU) 2019/787 附件 I（legislation.gov.uk）、etymonline、vinetur。數字一律標註來源；來源有出入者（Ugni Blanc 占比、基酒酒精度、發酵天數、蒸餾後酒精度、桶容量、天使的分享比例、Fins Bois 面積、Armagnac XO 最低年數等）於課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "認識白蘭地",
    subtitle: "定義、名稱由來，以及從荷蘭商人到法國產區的歷史",
    icon: "🥃",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "名稱與定義",
    highlights: [
      { id: 1, icon: "📖", title: "名稱由來", content: "Brandy 來自荷蘭語 brandewijn，字面是「燒過的酒」；英文在 1620 年代出現 brandy-wine，1650 年代縮短為 brandy；德文 Branntwein 同源（etymonline）" },
      { id: 2, icon: "⚗️", title: "基本概念", content: "把發酵完成的葡萄酒拿去蒸餾、再經橡木桶熟成，就是葡萄白蘭地；蒸餾使酒精與香氣濃縮，熟成帶來色澤與複雜度" },
      { id: 3, icon: "🍎", title: "本課範圍", content: "本課程聚焦「葡萄」白蘭地（Cognac、Armagnac、Brandy de Jerez、Metaxa、Pisco、Grappa 等）；蘋果酒蒸餾的 Calvados 與水果白蘭地不在範圍內" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">「brandy」一詞本身就說明了做法：把酒加熱。</p></div>"
  },
  {
    title: "歐盟的法定定義",
    highlights: [
      { id: 1, icon: "🇪🇺", title: "Brandy／Weinbrand 的門檻", content: "Regulation (EU) 2019/787 附件 I：裝瓶至少 36% vol；至少在 1,000 公升以上橡木容器熟成 1 年，或在小於 1,000 公升的橡木桶熟成 6 個月" },
      { id: 2, icon: "🧪", title: "成分限制", content: "揮發性物質至少 125 g/hl 純酒精、甲醇最多 200 g/hl 純酒精、添加糖（以轉化糖計）最多 35 g/L；只可用焦糖調色，不得添加酒精" },
      { id: 3, icon: "🍇", title: "相關類別", content: "同一附件另有 Wine spirit（至少 37.5%、蒸餾低於 86% vol）、Grape marc spirit（至少 37.5%）與 Raisin spirit（至少 37.5%，用 Corinth Black 或 Moscatel of Alexandria 乾葡萄）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">各產區（Cognac、Armagnac 等）另有更嚴格的自家規格。</p></div>"
  },
  {
    title: "簡史",
    highlights: [
      { id: 1, icon: "🚢", title: "荷蘭商人的故事", content: "流傳的說法是：荷蘭商人到 Cognac 一帶買鹽、木材與酒，酒不易長途保存，於是蒸餾成 eau-de-vie，再經第二次蒸餾而更細緻（intowine，屬轉述的流行說法）" },
      { id: 2, icon: "📜", title: "Armagnac 的古老紀錄", content: "alcademics：Armagnac 最早的生產文獻可追溯到 1310 年，比 Cognac 早約 150 年；AOC 於 1936 年建立，同業局 BNIA 在 1941 年成立" },
      { id: 3, icon: "🐛", title: "根瘤蚜的衝擊", content: "Armagnac 在 1879 年受根瘤蚜侵襲而毀掉約一半葡萄園；Cognac 的 Folle Blanche 也因此被 Ugni Blanc 取代（alcademics、Martell）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">歷史細節各來源敘述不一，課內只列有明確出處的部分。</p></div>"
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
            question: "Brandy 一詞源自荷蘭語的哪個字？",
            options: ["A. brandewijn","B. brandeverre","C. branduyt","D. brandvuur"],
            correct: 0,
            explanation: "brandewijn，意為「燒過的酒」（etymonline）。"
          },
          {
            type: 'single',
            question: "依歐盟規則 2019/787，Brandy 裝瓶至少多少 % vol？",
            options: ["A. 30%","B. 36%","C. 40%","D. 43%"],
            correct: 1,
            explanation: "36% vol；Wine spirit 與 Grape marc spirit 為 37.5%。"
          },
          {
            type: 'single',
            question: "歐盟 Brandy 在 1,000 公升以上橡木容器需熟成多久？",
            options: ["A. 6 個月","B. 1 年","C. 2 年","D. 3 年"],
            correct: 1,
            explanation: "至少 1 年；小於 1,000 公升的橡木桶則為 6 個月。"
          },
          {
            type: 'single',
            question: "歐盟 Brandy 的添加糖（以轉化糖計）上限？",
            options: ["A. 5 g/L","B. 20 g/L","C. 35 g/L","D. 100 g/L"],
            correct: 2,
            explanation: "35 g/L；Wine spirit 為 20 g/L。"
          },
          {
            type: 'single',
            question: "Armagnac 最早的生產文獻約是哪一年？",
            options: ["A. 1310","B. 1479","C. 1688","D. 1936"],
            correct: 0,
            explanation: "1310 年（alcademics）。"
          },
          {
            type: 'single',
            question: "Armagnac 的 AOC 是哪一年建立？",
            options: ["A. 1909","B. 1936","C. 1941","D. 2005"],
            correct: 1,
            explanation: "1936 年；BNIA 於 1941 年成立。"
          }
        ]
      }
    }
  }
]
