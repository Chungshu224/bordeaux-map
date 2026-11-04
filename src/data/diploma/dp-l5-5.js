/**
 * DP-L5-5 紅酒盲品論述練習
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "紅酒盲品論述練習",
    subtitle: "單寧與酸度的組合，往往比香氣更能說出品種",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "紅酒推理的四個開關",
    highlights: [
      { id: 1, icon: "🎨", title: "顏色深淺", content: "淡色：Pinot Noir、Nebbiolo、Grenache；深色：Syrah、Cabernet Sauvignon、Malbec。淡色配高單寧是 Nebbiolo 的關鍵矛盾" },
      { id: 2, icon: "🧱", title: "單寧與酸度", content: "高單寧 + 高酸：Nebbiolo、Sangiovese；高單寧 + 中等+酸：Cabernet Sauvignon；低單寧 + 高酸：Pinot Noir、Gamay" },
      { id: 3, icon: "🌿", title: "品種標記", content: "黑醋栗與雪松：Cabernet；黑胡椒與紫羅蘭：Syrah；焦油與玫瑰：Nebbiolo；酸櫻桃與乾燥香草：Sangiovese；紅櫻桃與森林地表：Pinot Noir" },
      { id: 4, icon: "🌡️", title: "果熟度與酒精", content: "新鮮紅果、中等酒精 → 涼爽或舊世界；果醬、甜熟黑果、高酒精 → 溫暖或新世界；用來區分 Barossa Shiraz 與北 Rhône Syrah 等組合" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先用顏色與結構縮小到兩三個品種，再用香氣與果熟度決勝。</p></div>"
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
            type: 'short',
            question: "練習一：淡石榴紅、邊緣帶橘；中等+香氣：紅櫻桃、乾玫瑰、焦油、甘草、皮革；乾、高酸、高單寧、中等+酒精、長餘韻。推論品種、產區與大致年齡。",
            points: [
              "淡色但高單寧、高酸 → Nebbiolo 的關鍵矛盾",
              "焦油與玫瑰 → Nebbiolo 的品種標記",
              "產區結論：Piemonte 的 Barolo 或 Barbaresco",
              "橘色邊緣、皮革等三級香氣 → 已有數年以上瓶陳",
              "品質與陳年：結構足以繼續陳年"
            ],
            model: "淡色卻有高單寧與高酸，是 Nebbiolo 最關鍵的矛盾；焦油與玫瑰是它的品種標記。這種結構與香氣最符合 Piemonte 的 Barolo 或 Barbaresco。橘色邊緣與皮革、甘草等三級香氣，顯示已有數年以上的瓶陳。單寧與酸度仍足，具備繼續陳年的潛力。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "練習二：深紫紅；中等+香氣：黑醋栗、黑莓、雪松、鉛筆屑、香草、烘烤；乾、中等+酸、高單寧（細緻）、中等+酒精、中等+酒體、長餘韻。推論品種與產區，並說明如何與 Napa 版本區分。",
            points: [
              "深色、黑醋栗、高單寧 → Cabernet Sauvignon 為主",
              "雪松、鉛筆屑、香草、烘烤 → 法國橡木桶陳",
              "中等+酸、中等+酒精、果味不過熟 → 溫和的海洋性氣候",
              "產區結論：Bordeaux 左岸（如 Pauillac）",
              "與 Napa 區分：Napa 通常果味更熟甜、酒精更高、酸度較低"
            ],
            model: "深色、黑醋栗與黑莓加上高而細緻的單寧，指向以 Cabernet Sauvignon 為主的酒；雪松、鉛筆屑、香草與烘烤顯示法國橡木桶陳。中等+的酸與酒精、果味成熟但不過熟，符合溫和的海洋性氣候，最可能是 Bordeaux 左岸，例如 Pauillac。Napa 的 Cabernet 通常果味更熟甜、酒精更高、酸度較低。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "練習三：深紫紅；中等+香氣：黑莓、黑胡椒、紫羅蘭、煙燻肉、橄欖；乾、中等+酸、中等+單寧、中等酒精、中等+酒體。推論品種與產區，並說明如何與 Barossa Shiraz 區分。",
            points: [
              "黑胡椒（rotundone）、紫羅蘭 → Syrah",
              "煙燻肉、橄欖 → 涼爽一點的舊世界 Syrah",
              "中等酒精、中等+酸 → 溫和氣候",
              "產區結論：北 Rhône（如 Côte-Rôtie、Hermitage、Crozes-Hermitage）",
              "與 Barossa 區分：Barossa 果味更熟甜、巧克力與甜橡木、酒精更高、酸度較低"
            ],
            model: "黑胡椒（rotundone）與紫羅蘭是 Syrah 的標記；煙燻肉與橄欖等鹹香、中等酒精與中等+酸，指向較溫和的舊世界產區，最符合北 Rhône，例如 Côte-Rôtie、Hermitage 或 Crozes-Hermitage。Barossa 的 Shiraz 通常果味更熟甜、帶巧克力與甜橡木香，酒精更高、酸度較低。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
