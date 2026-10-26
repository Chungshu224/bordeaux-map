/**
 * CH-L3-2 釀造風格深度：氧化 vs 還原、陳年與 dosage
 * 事實來源：INAO《Champagne》AOC 產品規格（2024 年 1 月 25 日令）、Comité Champagne（釀造說明與 FAQ）、DGCCRF 標籤指南。具體酒莊做法未逐項查證，本課只寫概念與規格。
 * 來源有出入的數字已在課內標明、不進測驗。
 */

export const lessonContent = [
  {
    type: "cover",
    title: "釀造風格深度：氧化 vs 還原、陳年與 dosage",
    subtitle: "同一產區，風格差異來自釀造決策",
    icon: "🍾",
    background: "linear-gradient(135deg, #A8801C 0%, #6B500F 100%)"
  },
  {
    title: "還原式與氧化式：一條光譜",
    highlights: [
      {
        id: 1,
        icon: "🧪",
        title: "還原式（reductive）思路",
        content: "以不鏽鋼槽、低氧環境與適度二氧化硫保護一級果香與酸度，風格偏向乾淨、明亮、柑橘與青蘋果，較早適飲；代價是較少質地層次"
      },
      {
        id: 2,
        icon: "🪵",
        title: "氧化式（oxidative）思路",
        content: "橡木桶（多為舊桶）發酵或陳放、與酒渣接觸、較少二氧化硫，讓酒在基酒階段就帶堅果、烤蘋果與蜂蜜香，質地更寬厚，也更耐陳。規格容許橡木桶，但禁止使用木片（Level 2）"
      },
      {
        id: 3,
        icon: "🎚️",
        title: "不是二選一",
        content: "多數酒廠把兩種思路混用：部分基酒在桶、部分在槽，再於調配時決定比例。「氧化式」是風格傾向，不是品質高低，也不是法定分類"
      },
      {
        id: 4,
        icon: "👃",
        title: "品飲時的線索",
        content: "還原式：檸檬、青蘋果、白花、鮮明的酸；氧化式：堅果、烤蘋果、蜂蜜、奶油、較深的色澤與較寬的口感。但陳年同樣會帶來堅果與焦糖，要區分「釀造氧化」與「年份陳年」需看整體果味是否仍新鮮"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">先分清楚「風格選擇」與「品質」是兩件事，論述時才不會把偏好寫成事實。</p></div>"
  },
  {
    title: "MLF、容器與儲備酒",
    highlights: [
      {
        id: 1,
        icon: "🍏",
        title: "MLF：保留或放棄蘋果酸",
        content: "Comité Champagne 說明 MLF 是選擇性的：做了酒體較圓潤、酸感較柔和，不做則保留蘋果酸、酸味較尖銳。在氣候變暖、酸度下降的年份，不做 MLF 常是保酸的工具；部分酒廠則把「不做 MLF」當作風格簽名"
      },
      {
        id: 2,
        icon: "🛢️",
        title: "容器選擇",
        content: "不鏽鋼槽（純淨、可控）、舊橡木桶（質地、微氧化）、其他容器如水泥蛋或陶罐並非規格禁止項目，但是否使用屬酒廠選擇；本課不列個別酒莊做法（未逐項查證）"
      },
      {
        id: 3,
        icon: "🏺",
        title: "儲備酒：NV 風格的穩定器",
        content: "NV 追求年年一致的「房子風格」：當年酒帶來新鮮，儲備酒帶來成熟與複雜（Comité Champagne）。每位業者儲備上限 10,000 公斤/公頃，儲備酒不可標年份（Level 2）。儲備酒比例多少，由酒廠決定，各家不同，本課不寫具體比例"
      },
      {
        id: 4,
        icon: "♾️",
        title: "永續儲備與氣候變遷",
        content: "永續儲備（perpetual reserve）每年補入新酒、取出部分，使儲備酒成為多年份混合，屬酒廠自行採用的做法（Level 2）。氣候變遷下，儲備酒的角色變重：較酸的舊年份基酒能補足暖年份缺少的酸，但也讓 NV 風格更依賴庫存與酒窖管理"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">儲備酒制度的重點是「跨年度一致」：它既是風格工具，也是財務與供給的緩衝（ch-l3-5 會再談）。</p></div>"
  },
  {
    title: "酒渣陳年、除渣與上市後陳年",
    highlights: [
      {
        id: 1,
        icon: "⏳",
        title: "最短陳年只是起點",
        content: "規格：自裝瓶起 NV ≥ 15 個月、Vintage ≥ 36 個月，且除渣不得早於裝瓶後 12 個月（Level 2）。Comité Champagne 指出多數生產者的陳年超過最低期限；陳年愈長，自溶風味愈明顯（趨勢，非硬數字）"
      },
      {
        id: 2,
        icon: "🥐",
        title: "自溶：風味的轉換",
        content: "死酵母分解釋出的成分帶來 brioche、烤麵包、杏仁等風味，並使氣泡更細緻、質地更滑順（Level 2）。品飲時，自溶香氣（麵包、餅乾、奶油）是判斷酒渣陳年長短的第一線索"
      },
      {
        id: 3,
        icon: "📆",
        title: "除渣日期與上市後陳年",
        content: "INAO 標示條款未見強制標示除渣日期的規定，部分酒莊自願標示。除渣日期讓人區分「酒渣陳年」（在瓶中、有酒渣保護）與「除渣後陳年」（少了酒渣，演化路徑不同，且受軟木塞與 dosage 影響）；兩者不是同一回事"
      },
      {
        id: 4,
        icon: "🕰️",
        title: "陳年潛力與三級香氣",
        content: "Vintage 與 Prestige 酒款通常陳年更久，三級香氣包括乾果、蜂蜜、菇類、焦糖；若同時保有酸度與張力，才算「陳而不老」。Prestige 是市場用語，沒有法定定義（Level 2）"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">考試的語言：先講酒渣陳年（自溶），再講除渣後陳年，最後才講整體平衡。</p></div>"
  },
  {
    title: "Dosage：甜度、平衡與零 dosage 趨勢",
    highlights: [
      {
        id: 1,
        icon: "🍬",
        title: "Dosage 不只是「加糖」",
        content: "dosage 是除渣後補入的 liqueur d’expédition（酒加糖），目的是平衡酸度、塑造質地與口感，並影響陳年路徑；甜度級別為 Brut Nature <3、Extra Brut 0–6、Brut <12、Extra Dry 12–17、Sec 17–32、Demi-Sec 32–50、Doux >50 g/L，容許 ±3 g/L（Level 2）"
      },
      {
        id: 2,
        icon: "0️⃣",
        title: "Brut Nature 的意義",
        content: "Brut Nature 為殘糖低於 3 g/L 且不另加糖（DGCCRF 標籤指南）。它要求果實夠成熟、酸夠圓潤、陳年夠久，否則酒會顯得尖銳；同一款酒在不同年份未必都適合零 dosage"
      },
      {
        id: 3,
        icon: "🌡️",
        title: "氣候變遷下 dosage 該降嗎？",
        content: "贊成降：果實更熟、糖更高、質地已足夠，不必再靠糖補圓；反對全面降：酸度也在下降，部分年份需要 dosage 平衡殘留酸，且過低 dosage 會凸顯苦澀與乾瘦。這是 MW 論述題的核心，ch-l3-6 提供答題框架"
      },
      {
        id: 4,
        icon: "🗺️",
        title: "單一地塊與單一年份的新風潮",
        content: "近年有酒莊強調 lieu-dit、clos 或單一村莊、單一年份的 cuvée，用「風土透明度」對抗調配的傳統。這是市場與風格趨勢，不是 AOC 內另設的分級；此類酒款的優劣仍取決於地塊與酒莊，不能一概而論"
      }
    ],
    content: "<div class=\"content-overview\"><p class=\"lead-text\">論述時別只寫「甜或不甜」：dosage 同時影響酸、質地、陳年與消費者定位。</p></div>"
  },
  {
    component: "QuizSlide",
    componentProps: {
      slide: {
        title: "🧠 知識檢測",
        isFinalExam: false,
        passScore: 60,
        questions: [
          {
            type: "single",
            question: "INAO 規格對基酒發酵使用橡木的規定是？",
            options: [
              "A. 橡木桶與木片皆可",
              "B. 可用橡木桶，但禁止使用木片",
              "C. 完全禁止任何橡木",
              "D. 必須使用橡木桶"
            ],
            correct: 1,
            explanation: "規格容許橡木桶但禁止使用木片（morceaux de bois）。"
          },
          {
            type: "single",
            question: "Brut Nature 的意義是？",
            options: [
              "A. 殘糖 12–17 g/L",
              "B. 殘糖高於 50 g/L",
              "C. 殘糖低於 3 g/L，且不另加糖",
              "D. 完全沒有酒精"
            ],
            correct: 2,
            explanation: "Brut Nature <3 g/L 且無添加糖；Extra Dry 12–17、Doux >50 g/L。"
          },
          {
            type: "single",
            question: "在酸度下降的暖年份，不做 MLF 的主要目的是？",
            options: [
              "A. 提高酒精度",
              "B. 縮短酒渣陳年",
              "C. 讓酒變得更甜",
              "D. 保留蘋果酸、維持酸度與張力"
            ],
            correct: 3,
            explanation: "MLF 會把尖銳的蘋果酸轉為柔和的乳酸；不做就保留酸度（Comité Champagne）。"
          }
        ]
      }
    }
  }
]
