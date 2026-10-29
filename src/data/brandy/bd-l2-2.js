/**
 * BD-L2-2 Cognac 的蒸餾與熟成
 * 事實來源：cognac.com（Cognac crus）、Wikipedia（Cognac、Armagnac、Metaxa、Brandy de Jerez）、Difford's Guide（Cognac、Peruvian Pisco、Grappa）、armagnac.fr、Wine With Seth（Brandy de Jerez、South African Brandy）、SA Brandy Foundation、GuildSomm（Pisco）、DFAT/EU GI 技術檔案（Deutscher Weinbrand）、Cigar Aficionado（California brandy）
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Cognac 的蒸餾與熟成",
    subtitle: "從 eau-de-vie 到調配：酒廠如何做出一致的風格",
    icon: "🏭",
    background: 'linear-gradient(135deg, #8A4B14 0%, #4A2408 100%)'
  },
  {
    title: "蒸餾回顧與取酒心",
    highlights: [
      { id: 1, icon: "🔁", title: "兩次蒸餾", content: "第一次得到 brouillis（約 28 至 32%），第二次 bonne chauffe 只留酒心，捨去酒頭與酒尾，成為 eau-de-vie" },
      { id: 2, icon: "🧪", title: "Charentais 銅壺", content: "設計與尺寸受法規管制；銅能去除硫化物等不良氣味（Wikipedia、Wine With Seth）" },
      { id: 3, icon: "🧓", title: "新蒸餾酒的特性", content: "剛蒸餾出的 eau-de-vie 無色、偏花果香，顏色與複雜度幾乎全部來自之後的橡木桶" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cognac 的風格是「基酒細緻＋橡木塑形」。</p></div>"
  },
  {
    title: "橡木桶與桶陳過程",
    highlights: [
      { id: 1, icon: "🌳", title: "Limousin 與 Tronçais", content: "Limousin 木質疏鬆、單寧萃取快；Tronçais 紋理細密、較緩慢細緻（Wine With Seth）" },
      { id: 2, icon: "💧", title: "加水降度", content: "入桶時約 65%，並在熟成過程中陸續以蒸餾水或 petites eaux 緩慢降度，避免衝擊（Difford's Guide）" },
      { id: 3, icon: "🔄", title: "換桶", content: "先在新桶吸收單寧，再轉入舊桶避免過度橡木味；最老的原酒另行存放（概念說明）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">桶容量與換桶時間各來源不同，僅取概念。</p></div>"
  },
  {
    title: "調配與酒廠",
    highlights: [
      { id: 1, icon: "🎼", title: "調配的目的", content: "混合不同年份與 cru 的 eau-de-vie，維持年復一年一致的酒廠風格；年份標示取決於調配中最年輕的酒" },
      { id: 2, icon: "🏢", title: "四大酒廠", content: "Courvoisier（Campari）、Hennessy（LVMH）、Martell（Pernod Ricard）、Rémy Martin（Rémy Cointreau）；2008 年的一項估計指四家供應美國逾 90% 的 Cognac（Wikipedia）" },
      { id: 3, icon: "🧑‍🌾", title: "種植者與蒸餾者", content: "許多小型種植者自己蒸餾後把 eau-de-vie 賣給酒廠，也有人自行熟成裝瓶（概念說明）" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Cognac 市場高度集中，與 Armagnac 的小農格局形成對比。</p></div>"
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
            question: "第二次蒸餾（bonne chauffe）保留什麼？",
            options: ["A. 只有酒心","B. 酒頭與酒尾","C. 全部","D. 只有酒尾"],
            correct: 0,
            explanation: "只留酒心。"
          },
          {
            type: 'single',
            question: "Cognac 的年份標示以調配中哪一支酒為準？",
            options: ["A. 最年輕的","B. 最老的","C. 平均年齡","D. 用量最多的"],
            correct: 0,
            explanation: "以最年輕的為準。"
          },
          {
            type: 'single',
            question: "下列何者不屬於 Cognac 四大酒廠？",
            options: ["A. Courvoisier","B. Hennessy","C. Asbach","D. Rémy Martin"],
            correct: 2,
            explanation: "Asbach 是德國 Weinbrand 品牌；四大為 Courvoisier、Hennessy、Martell、Rémy Martin。"
          },
          {
            type: 'single',
            question: "Hennessy 屬於哪個集團？",
            options: ["A. LVMH","B. Pernod Ricard","C. Campari Group","D. Rémy Cointreau"],
            correct: 0,
            explanation: "LVMH。"
          },
          {
            type: 'single',
            question: "Martell 屬於哪個集團？",
            options: ["A. LVMH","B. Pernod Ricard","C. Campari Group","D. Diageo"],
            correct: 1,
            explanation: "Pernod Ricard。"
          },
          {
            type: 'single',
            question: "降度為何要在熟成過程中分次進行？",
            options: ["A. 避免對酒液造成衝擊","B. 為了增加顏色","C. 為了增加糖分","D. 為了縮短法定年限"],
            correct: 0,
            explanation: "Difford's Guide。"
          }
        ]
      }
    }
  }
]
