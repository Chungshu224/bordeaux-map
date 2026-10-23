/**
 * GR-L2-4 聖托里尼與愛琴海島嶼：火山、風與老藤
 * 事實來源：Wines of Greece、WineWithSeth、Court of Master Sommeliers（2018）、官方 PDO 地圖。
 * 來源間有出入的數字（如 Santorini Assyrtiko 最低比例、Reserve 月數細項）已在內文標明，請於引用前對照官方文件。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "聖托里尼與愛琴海島嶼",
    subtitle: "火山、風與老藤",
    icon: "🌋",
    background: 'linear-gradient(135deg, #b5651d 0%, #1C7C9C 100%)'
  },
  {
    title: "Santorini PDO",
    highlights: [
      { id: 1, icon: "⚪", title: "乾白以 Assyrtiko 為主", content: "可搭配 Athiri、Aidani。最低 Assyrtiko 比例各資料記載不同（約 75% 至 85%），請以官方產品規格為準" },
      { id: 2, icon: "🌙", title: "Nykteri", content: "乾型風格；酒精至少 13.5%，並至少 3 個月橡木桶陳年" },
      { id: 3, icon: "☀️", title: "Vinsanto", content: "日曬風乾葡萄（約 8–14 天）、至少 51% Assyrtiko、至少 24 個月氧化型橡木陳年，可標示年數（如 4、8、12、20 年）" },
      { id: 4, icon: "🌱", title: "老藤與自根苗", content: "許多藤株為自根苗，有些根系估計超過 300 年" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">出題重點：Santorini 的風格光譜——乾白、Nykteri、Vinsanto——全都建立在 Assyrtiko 上。</p></div>"
  },
  {
    title: "Paros 與 Lemnos",
    highlights: [
      { id: 1, icon: "🏝️", title: "Paros", content: "涵蓋整座島；乾白為 100% Monemvasia；乾紅為至少 35% Mandilaria 混 Monemvasia；老藤多為自根，另有 Malvasia Paros PDO" },
      { id: 2, icon: "🔥", title: "Lemnos", content: "白為 100% Muscat of Alexandria（乾型至半甜）；乾紅用 Limnio；另有日曬葡萄的甜紅" },
      { id: 3, icon: "🍯", title: "Muscat of Lemnos", content: "另一個獨立的 Muscat 甜酒 PDO" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Lemnos 的 Limnio 在 Level 1 已出現，亞里斯多德的文獻就提到過。</p></div>"
  },
  {
    title: "Samos 與 Rhodes",
    highlights: [
      { id: 1, icon: "🌼", title: "Samos", content: "Muscat Blanc à Petits Grains（當地稱 Moschato Aspro）占種植的 98%；風格包括 Vin Doux、Vin Doux Naturel、Grand Cru、Anthemis、Nectar；石砌梯田，海拔從海平面到約 900 公尺" },
      { id: 2, icon: "🌞", title: "Rhodes", content: "紅酒 100% Mandilaria、白酒 100% Athiri；另有 Muscat of Rhodes PDO" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">島嶼 PDO 的共同點：單一或少數品種、日照強、甜酒傳統（Muscat）。</p></div>"
  },
  {
    title: "島嶼風土的共同邏輯",
    highlights: [
      { id: 1, icon: "🌬️", title: "風", content: "強風降低病害、迫使低矮整枝（如 kouloura）" },
      { id: 2, icon: "💧", title: "乾旱", content: "降雨少，多為旱作與低產量" },
      { id: 3, icon: "🪨", title: "貧瘠土壤", content: "火山灰、浮石、石灰岩等貧瘠土壤限制生長，提高濃縮度" },
      { id: 4, icon: "🏖️", title: "旅遊壓力", content: "如 Paros，觀光建設與勞動力變化限制了葡萄栽培" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">這四點可以直接搬進 Diploma 論述：風、乾旱、貧瘠土壤、旅遊。</p></div>"
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
            question: "Santorini 的 Vinsanto 使用什麼葡萄處理？",
            options: ["A. 日曬風乾","B. 冷凍榨汁","C. 完全不處理","D. 二氧化碳浸皮"],
            correct: 0,
            explanation: "Vinsanto 以日曬風乾葡萄釀造，經長期氧化型橡木陳年。"
          },
          {
            type: 'single',
            question: "Samos PDO 以哪個品種為基礎？",
            options: ["A. Muscat Blanc à Petits Grains","B. Assyrtiko","C. Limnio","D. Mandilaria"],
            correct: 0,
            explanation: "Samos 是 Muscat 甜酒產區。"
          },
          {
            type: 'single',
            question: "PDO Rhodes 的紅酒使用哪個品種？",
            options: ["A. Mandilaria","B. Xinomavro","C. Agiorgitiko","D. Mavrodaphne"],
            correct: 0,
            explanation: "Rhodes 紅酒為 100% Mandilaria，白酒為 100% Athiri。"
          }
        ]
      }
    }
  }
]
