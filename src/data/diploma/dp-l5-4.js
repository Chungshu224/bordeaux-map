/**
 * DP-L5-4 白酒盲品論述練習
 * 內容取材：一般教科書知識與課內已查證的事實；有出入或易變動的數字不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "白酒盲品論述練習",
    subtitle: "先判斷氣候與釀造，再收斂到品種",
    icon: "🎓",
    background: "linear-gradient(135deg, #2F4858 0%, #1B2B36 100%)"
  },
  {
    title: "白酒推理的四個開關",
    highlights: [
      { id: 1, icon: "🍋", title: "酸度與酒精", content: "高酸、低到中等酒精 → 涼爽氣候；中低酸、高酒精 → 溫暖氣候。兩者組合是判斷氣候最快的線索" },
      { id: 2, icon: "🌸", title: "芳香與否", content: "強烈花香、荔枝 → Gewurztraminer、Muscat；萊姆、石油、花 → Riesling；中性 → Chardonnay、Melon、Pinot Grigio 等，需靠釀造線索判斷" },
      { id: 3, icon: "🛢️", title: "釀造痕跡", content: "奶油（MLF）、烘烤與香草（橡木）、麵包與酵母（酒渣）通常指向 Chardonnay 或以酒渣陳年的酒款" },
      { id: 4, icon: "🍬", title: "甜度", content: "可察覺的殘糖加上高酸、低酒精 → 中止發酵的涼爽產區（例：Mosel Riesling Kabinett）；高糖高酒精 → 貴腐或風乾" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">寫理由時用「觀察 → 推論」：例如「低酒精 + 高酸 + 殘糖 → 涼爽產區中止發酵」。</p></div>"
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
            question: "練習一：淡檸檬色；中等+香氣：青蘋果、萊姆、白花、濕石頭；中等甜度、高酸、低酒精（約 8%）、輕盈酒體、中等+餘韻、無橡木。推論品種與產區並說明理由。",
            points: [
              "低酒精 + 殘糖 + 高酸 → 中止發酵、涼爽產區",
              "萊姆、白花、無橡木 → 芳香型、還原式釀造",
              "品種結論：Riesling",
              "產區結論：德國 Mosel（Kabinett 風格），濕石頭可連到板岩",
              "品質與陳年：糖酸平衡、具陳年潛力"
            ],
            model: "低酒精、可察覺殘糖與高酸的組合，指向在涼爽產區中止發酵的酒；萊姆、白花與無橡木代表芳香型、還原式釀造，最符合 Riesling。輕盈酒體、約 8% 酒精與這種糖酸結構，是德國 Mosel Kabinett 的典型；濕石頭的礦物感可連到板岩土壤。糖酸平衡良好，具陳年潛力。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "練習二：中等檸檬色；中等+香氣：黃蘋果、檸檬、奶油、烤麵包、香草、榛果；乾、高酸、中等+酒體、中等+酒精、長餘韻。推論品種、產區與釀造方式。",
            points: [
              "奶油 → MLF；烤麵包、香草 → 橡木；榛果、質地 → 酒渣陳年",
              "中性果香承載釀造風味 → Chardonnay",
              "高酸 + 中等果熟度 → 涼爽到溫和氣候",
              "產區結論：如 Burgundy 的 Côte de Beaune（例：Meursault），並說明與溫暖新世界的差異",
              "品質：BLIC 良好、可陳年"
            ],
            model: "奶油來自 MLF，烤麵包與香草來自橡木，榛果與圓潤質地來自酒渣陳年；這些釀造痕跡建立在中性果香上，最符合 Chardonnay。高酸與黃蘋果、檸檬的中等成熟度指向涼爽到溫和氣候，例如 Côte de Beaune 的 Meursault；溫暖的新世界版本通常酸度較低、果香更偏熱帶。強度、長度與複雜度俱佳，具陳年潛力。",
            minPoints: 3
          },
          {
            type: 'short',
            question: "練習三：淡檸檬帶綠；高強度香氣：百香果、醋栗、葡萄柚、青草、番茄葉；乾、高酸、中等酒體、中等酒精、無橡木。推論品種與產區，並說明如何與 Sancerre 區分。",
            points: [
              "青草、番茄葉 → 甲氧基吡嗪 → Sauvignon Blanc",
              "高強度熱帶果香（百香果）→ 紐西蘭 Marlborough",
              "高酸、無橡木 → 涼爽、日照強、還原式釀造",
              "與 Sancerre 區分：Sancerre 香氣較克制、偏燧石與柑橘，少熱帶果香",
              "適飲性：宜年輕飲用"
            ],
            model: "青草與番茄葉來自甲氧基吡嗪，是 Sauvignon Blanc 的標誌；高強度的百香果、醋栗等熱帶果香，加上高酸與無橡木，最符合紐西蘭 Marlborough：涼爽但日照強，果香奔放。Sancerre 的香氣通常較克制，偏燧石、柑橘與礦物，熱帶果香少。這種風格宜年輕飲用。",
            minPoints: 3
          }
        ]
      }
    }
  }
]
