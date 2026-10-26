/**
 * ZA-L2-6 Breede River Valley 與內陸
 * 事實來源：Wine With Seth（WO Wine of Origin、Stellenbosch、Paarl、Franschhoek Valley、Constantia、Durbanville、Swartland、Swartland Revolution、Tulbagh、Walker Bay、Elgin、Elim、Cape South Coast、Robertson、Klein Karoo、Olifants River）、Fairview（Old Vine Project）。數字一律標註；來源有出入者課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: 'cover',
    title: "Breede River Valley 與內陸",
    subtitle: "Robertson、Worcester、Breedekloof、Klein Karoo、Olifants River",
    icon: "🏜️",
    background: 'linear-gradient(135deg, #C2571A 0%, #7F3510 100%)'
  },
  {
    title: "Breede River Valley",
    highlights: [
      { id: 1, icon: "📊", title: "2025 年面積", content: "Robertson 約 13,067 公頃、Breedekloof 約 12,679 公頃、Worcester 約 6,404 公頃（Worcester 被視為最重要的白蘭地產區）" },
      { id: 2, icon: "🧂", title: "Robertson 的石灰質土", content: "以富含石灰（碳酸鈣）的土壤聞名，Bonnievale 與 Klaasvoogds 石灰含量高；Chardonnay 是主要品種" },
      { id: 3, icon: "💧", title: "灌溉依賴", content: "年降雨約 250 至 400 mm，Breede 河貫穿 District 提供灌溉水；日夜溫差 15 至 20°C 保留酸度" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Breede River Valley 是產量大的內陸河谷，靠河水灌溉，石灰質土讓 Robertson 的 Chardonnay 很有名。</p></div>"
  },
  {
    title: "Klein Karoo",
    highlights: [
      { id: 1, icon: "🧱", title: "結構", content: "Region 內有兩個 District（Calitzdorp、Langeberg-Garcia）與五個獨立 Ward（Montagu、Outeniqua、Tradouw、Tradouw Highlands、Upper Langkloof）" },
      { id: 2, icon: "🍷", title: "Cape Port 風格", content: "Calitzdorp 是 Cape Port 風格酒的中心，主要品種為 Touriga Nacional 等葡萄牙品種；2012 年起歐盟與南非規定須使用 Cape Vintage、Cape Tawny 等「Cape」前綴，不得稱 Port" },
      { id: 3, icon: "🌵", title: "乾旱", content: "Calitzdorp 年降雨約 200 mm，葡萄園幾乎都需灌溉" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Klein Karoo 乾熱，Cape Port 風格是其特色。</p></div>"
  },
  {
    title: "Olifants River",
    highlights: [
      { id: 1, icon: "🧭", title: "位置與構成", content: "Western Cape 五個 Region 中最北；District 有 Citrusdal Mountain、Citrusdal Valley、Lutzville Valley；Spruitdrift、Vredendal、Bamboes Bay 為獨立 Ward" },
      { id: 2, icon: "🏭", title: "合作社", content: "Vredendal、Namaqua（Spruitdrift）、Klawer、Lutzville 四大合作酒廠處理大部分產量，供應散裝酒；2025 年面積約 8,238 公頃" },
      { id: 3, icon: "🏔️", title: "高海拔 Cederberg", content: "Cederberg Ward 約 1,030 公尺，被視為南非最高的商業葡萄園區" }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">Orange River 等北開普產區不在本課查證範圍，之後若要補入須先查證官方資料。</p></div>"
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
            question: "Western Cape 五個 Region 中最北的是？",
            options: ["A. Olifants River","B. Klein Karoo","C. Cape South Coast","D. Coastal Region"],
            correct: 0,
            explanation: "Olifants River。"
          },
          {
            type: 'single',
            question: "Robertson 的土壤以什麼特色聞名？",
            options: ["A. 黑色火山土","B. 富含石灰","C. 純砂","D. 板岩"],
            correct: 1,
            explanation: "富含石灰（碳酸鈣）的土壤。"
          },
          {
            type: 'single',
            question: "2012 年起，Klein Karoo 的 Port 風格酒必須如何稱呼？",
            options: ["A. Port","B. Cape + 風格名（如 Cape Tawny）","C. Oporto","D. Madeira"],
            correct: 1,
            explanation: "須用 Cape 前綴，不得稱 Port。"
          },
          {
            type: 'single',
            question: "Worcester 被視為哪種產品最重要的產區？",
            options: ["A. 白蘭地","B. Pinot Noir","C. Cap Classique","D. 冰酒"],
            correct: 0,
            explanation: "白蘭地。"
          }
        ]
      }
    }
  }
]
