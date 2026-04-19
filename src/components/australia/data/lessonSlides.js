/**
 * lessonSlides.js  ─  澳洲葡萄酒課程投影片內容
 * Level 1 完整（18 課 + 期末），Level 2+ 框架預留
 */

// ── Slide Map ─────────────────────────────────────────────────────────────
const SLIDE_MAP = {

  // ════════════════════════════════════════════════════════════
  //  LEVEL 1  ──  入門
  // ════════════════════════════════════════════════════════════

  // M1L1 — 為什麼學澳洲葡萄酒？
  A1M1L1: [
    {
      type: 'cover',
      title: '為什麼學澳洲葡萄酒？',
      subtitle: 'Level 1 · Module 1 · Lesson 1',
      bg: 'linear-gradient(135deg, #00274e 0%, #c8a951 100%)',
      emoji: '🦘',
    },
    {
      type: 'content',
      title: '澳洲葡萄酒的世界地位',
      points: [
        '全球第 5 大葡萄酒出口國（2023 年出口值 $18 億澳幣）',
        '種植面積約 14.5 萬公頃，遍布 6 個州 + 領地',
        '超過 100 個 GI（Geographical Indication）產區',
        '年產量約 13 億瓶，其中 70% 外銷',
        '最大出口市場：英國、美國、中國、加拿大',
      ],
      note: '澳洲雖然是新世界葡萄酒國家，但釀酒歷史可追溯至 1788 年英國殖民時期',
    },
    {
      type: 'content',
      title: '澳洲葡萄酒的六大特色',
      points: [
        '🌡️ 氣候多元：涼爽海洋性（Tasmania）到炎熱大陸型（Barossa），跨度極大',
        '🍇 品種豐富：Shiraz、Cabernet、Chardonnay 到義大利、葡萄牙等品種',
        '🔩 技術創新：螺旋蓋（Stelvin）推廣先驅，科技釀酒全球領先',
        '🌱 永續農業：有機、生物動力農法快速增長，Bush vine 老藤保護',
        '🏆 性價比高：從超市日常到世界級珍藏，價格帶寬廣',
        '🌏 文化融合：歐洲移民帶來多元釀酒傳統，義大利、德國、法國影響並存',
      ],
    },
    {
      type: 'quiz',
      question: '澳洲是全球第幾大葡萄酒出口國？',
      options: ['第 2 大', '第 5 大', '第 8 大', '第 10 大'],
      answer: 1,
      explanation: '澳洲是全球第 5 大葡萄酒出口國，主要市場為英國、美國與中國。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '澳洲是全球重要葡萄酒出口國，年出口 $18 億澳幣',
        '跨越多個氣候帶，品種與風格極為多元',
        '以技術創新（螺旋蓋）和性價比著稱',
      ],
      nextLesson: '下一課：六州葡萄酒地理分布',
    },
  ],

  // M1L2 — 六州地理分布
  A1M1L2: [
    {
      type: 'cover',
      title: '六州葡萄酒地理分布',
      subtitle: 'Level 1 · Module 1 · Lesson 2',
      bg: 'linear-gradient(135deg, #00274e 0%, #2980b9 100%)',
      emoji: '🗺',
    },
    {
      type: 'content',
      title: '六大產酒州一覽',
      points: [
        '🟠 南澳大利亞（SA）：最重要産州，Barossa Valley、McLaren Vale、Coonawarra',
        '🟣 維多利亞（VIC）：產區最密集，Yarra Valley、Heathcote、Rutherglen',
        '🔵 新南威爾斯（NSW）：最古老，Hunter Valley、Orange、Riverina',
        '🟡 西澳大利亞（WA）：精品主義，Margaret River、Great Southern',
        '🔴 昆士蘭（QLD）：最北，Granite Belt 高海拔',
        '🟢 塔斯馬尼亞（TAS）：最南最冷，頂級氣泡酒',
      ],
    },
    {
      type: 'compare',
      title: '南半球 vs 北半球：季節相反',
      left: {
        label: '澳洲（南半球）',
        points: [
          '葡萄生長：9 月～3 月',
          '採收期：2 月～4 月（夏末秋初）',
          '最涼爽產區：塔斯馬尼亞（最南端）',
          '氣候帶由南（涼）→ 北（熱）',
        ],
      },
      right: {
        label: '歐洲（北半球）',
        points: [
          '葡萄生長：4 月～10 月',
          '採收期：9 月～11 月（夏末秋初）',
          '最涼爽產區：德國、英格蘭（最北）',
          '氣候帶由北（涼）→ 南（熱）',
        ],
      },
    },
    {
      type: 'content',
      title: '南澳：澳洲葡萄酒首都',
      points: [
        '生產澳洲約 50% 的葡萄酒（含大量灌溉產區）',
        '最著名：Barossa Valley（Shiraz 老藤）、Clare Valley（Riesling）',
        'Coonawarra：terra rossa 紅棕壤，Cabernet Sauvignon 聖地',
        'McLaren Vale：地中海氣候，GSM 混釀',
        'Adelaide 是澳洲葡萄酒教育與貿易的首府',
      ],
    },
    {
      type: 'quiz',
      question: '澳洲採收期通常在哪些月份？',
      options: ['3 月～5 月（秋季）', '2 月～4 月（夏末秋初）', '9 月～11 月（春末夏初）', '12 月～1 月（夏季）'],
      answer: 1,
      explanation: '澳洲位於南半球，採收期與北半球相反，通常在 2 月至 4 月（夏末秋初）進行。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '六大州：SA（最重要）、VIC（最密集）、NSW（最古老）、WA（精品）、QLD、TAS（最冷）',
        '南半球採收期為 2–4 月，與北半球相反',
        '南澳生產澳洲約一半的葡萄酒，是行業核心',
      ],
      nextLesson: '下一課：三大氣候帶與地形影響',
    },
  ],

  // M1L3 — 氣候帶
  A1M1L3: [
    {
      type: 'cover',
      title: '三大氣候帶與地形影響',
      subtitle: 'Level 1 · Module 1 · Lesson 3',
      bg: 'linear-gradient(135deg, #00274e 0%, #27ae60 100%)',
      emoji: '☁️',
    },
    {
      type: 'content',
      title: '澳洲三大氣候帶',
      points: [
        '☀️ 地中海氣候（Mediterranean）：夏乾熱、冬溫多雨 → SA 大部分、WA 西南',
        '🌊 海洋性涼爽氣候（Maritime Cool）：受海洋調節，年溫差小 → TAS、Mornington、Geelong',
        '🌡️ 大陸型氣候（Continental）：日夜溫差大，夏熱冬寒 → Canberra、Orange、高海拔產區',
      ],
      note: '許多澳洲產區同時受多種氣候影響，海拔與海洋距離是關鍵調節因子',
    },
    {
      type: 'compare',
      title: '涼爽 vs 溫暖：風格差異',
      left: {
        label: '涼爽氣候產區（TAS / Yarra / Mornington）',
        points: [
          '高天然酸度',
          '清爽果香（草莓、覆盆子、柑橘）',
          '較低酒精（12–13%）',
          '適合 Pinot Noir、Chardonnay',
          '氣泡酒基底絕佳',
        ],
      },
      right: {
        label: '溫暖/炎熱產區（Barossa / McLaren Vale）',
        points: [
          '較低天然酸度',
          '濃郁果香（黑莓、李子、巧克力）',
          '較高酒精（14–15%+）',
          '適合 Shiraz、Grenache、Cabernet',
          '口感豐腴飽滿',
        ],
      },
    },
    {
      type: 'content',
      title: '海拔的降溫效果',
      points: [
        '每升高 100m，氣溫約降低 0.6°C',
        'Orange（NSW）海拔 600–1200m → 比低地涼爽 4–7°C',
        'Adelaide Hills 海拔 400–700m → 比 Adelaide 市區涼 5°C',
        'Granite Belt（QLD）海拔 800–1000m → 昆士蘭唯一精品產區',
        '高海拔賦予酸度、保留果香，延長生長季',
      ],
    },
    {
      type: 'quiz',
      question: '以下哪個產區屬於「海洋性涼爽氣候」？',
      options: ['Barossa Valley', 'Riverina', 'Mornington Peninsula', 'Riverland'],
      answer: 2,
      explanation: 'Mornington Peninsula 三面環海，屬於典型海洋性涼爽氣候，以 Pinot Noir 著名。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '三大氣候：地中海（夏乾熱）、海洋性（涼爽）、大陸型（溫差大）',
        '涼爽氣候 → 高酸輕盈；溫暖氣候 → 濃郁飽滿',
        '海拔是澳洲重要降溫手段，每 100m 降 0.6°C',
      ],
      nextLesson: '下一課：GI 分級制度',
    },
  ],

  // M1L4 — GI 分級制度
  A1M1L4: [
    {
      type: 'cover',
      title: 'GI 分級制度：Zone / Region / Sub-Region',
      subtitle: 'Level 1 · Module 1 · Lesson 4',
      bg: 'linear-gradient(135deg, #00274e 0%, #8e44ad 100%)',
      emoji: '📋',
    },
    {
      type: 'content',
      title: '澳洲 GI 系統概覽',
      points: [
        '澳洲採用 GI（Geographical Indication，地理標誌）系統，非 AOC/DOC',
        '由 Wine Australia（前 AWBC）負責管理和認證',
        '三個層級：Zone（大區）→ Region（次區）→ Sub-Region（子區）',
        '目前共有 65+ 個 Region 和 14 個 Sub-Region',
        '標示規定：若標示產地，85% 葡萄必須來自該產區',
      ],
    },
    {
      type: 'compare',
      title: 'GI 三層級比較（以 Barossa 為例）',
      left: {
        label: 'Zone — 大區',
        points: [
          '例：Barossa Zone',
          '包含多個 Region',
          '在酒標上通常不常見',
          '相當於法國的 Région',
        ],
      },
      right: {
        label: 'Region — 次區（最常見）',
        points: [
          '例：Barossa Valley（巴羅薩谷）',
          '例：Eden Valley（伊甸谷）',
          '酒標最常見的標示層級',
          '相當於法國的 Appellation',
        ],
      },
    },
    {
      type: 'content',
      title: '重要 Sub-Region 案例',
      points: [
        '🍋 Lenswood / Piccadilly Valley ← Adelaide Hills（SA）',
        '🌿 Pokolbin / Broke Fordwich ← Hunter Valley（NSW）',
        '🍇 High Eden ← Eden Valley（SA）',
        '🌸 Great Western ← Grampians（VIC）',
        '⚡ Nagambie Lakes ← Goulburn Valley（VIC）',
        '這些子產區通常比母產區有更具體的風土特色',
      ],
    },
    {
      type: 'quiz',
      question: '若澳洲酒標上標示「Barossa Valley」，這屬於 GI 的哪個層級？',
      options: ['State（州）', 'Zone（大區）', 'Region（次區）', 'Sub-Region（子區）'],
      answer: 2,
      explanation: 'Barossa Valley 是一個 GI Region（次區），其上層的 Zone 是 Barossa Zone，不同於 Barossa Valley。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '澳洲使用 GI 系統（非 AOC/DOC），三層：Zone → Region → Sub-Region',
        '酒標最常見的層級是 Region（如 Barossa Valley、Margaret River）',
        '標示產地須 85% 葡萄來自該產區',
      ],
      nextLesson: '下一課：5 大紅葡萄品種',
    },
  ],

  // M2L1 — 5 大紅品種
  A1M2L1: [
    {
      type: 'cover',
      title: '5 大紅葡萄品種',
      subtitle: 'Level 1 · Module 2 · Lesson 1',
      bg: 'linear-gradient(135deg, #7b1818 0%, #c0392b 100%)',
      emoji: '🍇',
    },
    {
      type: 'content',
      title: 'Shiraz（西拉）── 澳洲紅酒之王',
      points: [
        '澳洲種植面積最廣的紅品種，約佔全部葡萄園 25%',
        '起源於法國 Rhône Valley（法文 Syrah）',
        '溫暖產區：Barossa Valley → 豐腴黑莓、甘草、巧克力、低酸',
        '涼爽產區：Heathcote、Grampians → 黑胡椒、辛料、優雅',
        '澳洲傳奇：Penfolds Grange（全球最著名的 Shiraz）',
      ],
      note: '澳洲人率先在世界上建立了「Shiraz」品牌，讓其成為澳洲的代名詞',
    },
    {
      type: 'content',
      title: 'Cabernet Sauvignon、Grenache、Mourvèdre、Merlot',
      points: [
        '🟥 Cabernet Sauvignon：Coonawarra（terra rossa）最佳，黑醋栗+薄荷，緊緻單寧',
        '🟧 Grenache：Barossa/McLaren Vale 老藤，覆盆子、甜香料、低單寧',
        '🟫 Mourvèdre（Mataro）：GSM 混釀的鐵三角，增加深度與礦石感',
        '🔴 Merlot：柔滑、李子風味，常作混釀，Margaret River 最佳',
        '🍷 GSM 混釀（Grenache-Shiraz-Mourvèdre）：南澳的招牌風格',
      ],
    },
    {
      type: 'quiz',
      question: '「GSM」混釀指的是哪三個品種？',
      options: [
        'Garnacha, Sauvignon Blanc, Merlot',
        'Grenache, Shiraz, Mourvèdre',
        'Grenache, Semillon, Malbec',
        'Gamay, Shiraz, Muscat',
      ],
      answer: 1,
      explanation: 'GSM = Grenache + Shiraz + Mourvèdre，是南澳（尤其 Barossa 和 McLaren Vale）的標誌性混釀組合。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Shiraz：澳洲最重要紅品種，涼爽產區胡椒辛料，溫暖產區黑莓巧克力',
        'Cabernet Sauvignon：Coonawarra 最著名，黑醋栗薄荷',
        'GSM 混釀：Grenache + Shiraz + Mourvèdre，南澳招牌',
      ],
      nextLesson: '下一課：5 大白葡萄品種',
    },
  ],

  // M2L2 — 5 大白品種
  A1M2L2: [
    {
      type: 'cover',
      title: '5 大白葡萄品種',
      subtitle: 'Level 1 · Module 2 · Lesson 2',
      bg: 'linear-gradient(135deg, #d4ac0d 0%, #f7dc6f 100%)',
      emoji: '🍾',
    },
    {
      type: 'content',
      title: 'Chardonnay ── 最廣泛種植的白品種',
      points: [
        '澳洲種植面積最大的白品種，幾乎每個產區都有',
        '過去：重橡木、奶油、熱帶水果（1990s「oaked Chardonnay」時代）',
        '現在：轉向清爽不過桶風格，礦石感、柑橘、白桃',
        '頂尖產區：Yarra Valley（精緻）、Adelaide Hills（緊緻）、Margaret River（豐腴）',
        '頂尖酒款：Giaconda（Beechworth）、Leeuwin Estate Art Series',
      ],
    },
    {
      type: 'content',
      title: 'Riesling、Semillon、Sauvignon Blanc、Pinot Gris',
      points: [
        '🍋 Riesling：Clare Valley & Eden Valley，萊姆礦石，陳年汽油香，高酸',
        '🥂 Semillon：Hunter Valley 最偉大，低酒精裝瓶，陳年 10–20 年後蜂蜜吐司奇蹟',
        '🌿 Sauvignon Blanc：Adelaide Hills 清爽草本，Margaret River 豐腴熱帶',
        '🍑 Pinot Gris/Grigio：King Valley、Adelaide Hills，桃子梨子，中等酒體',
      ],
    },
    {
      type: 'quiz',
      question: '澳洲 Semillon 的招牌產區是哪裡？',
      options: ['Clare Valley', 'Eden Valley', 'Hunter Valley', 'Yarra Valley'],
      answer: 2,
      explanation: 'Hunter Valley Semillon 是全球獨一無二的風格——低酒精（9–11%）裝瓶，陳年後展現蜂蜜、烤麵包的驚人複雜度。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Chardonnay：風格由重橡木轉向清爽，Yarra Valley、Margaret River 頂尖',
        'Riesling：Clare Valley & Eden Valley，萊姆礦石陳年佳',
        'Semillon：Hunter Valley 低酒精，陳年奇蹟',
      ],
      nextLesson: '下一課：品種 × 產區對應',
    },
  ],

  // M2L3 — 品種 × 產區
  A1M2L3: [
    {
      type: 'cover',
      title: '品種 × 產區對應表',
      subtitle: 'Level 1 · Module 2 · Lesson 3',
      bg: 'linear-gradient(135deg, #1a6b9b 0%, #2980b9 100%)',
      emoji: '🔗',
    },
    {
      type: 'content',
      title: '頂尖品種 × 最佳產區',
      points: [
        '🍷 Shiraz → Barossa Valley（豐腴）· Heathcote（礦石）· McLaren Vale（甜美）',
        '🟥 Cabernet Sauvignon → Coonawarra（最著名）· Margaret River（精緻）',
        '🟧 Grenache → Barossa（老藤）· McLaren Vale（花香）',
        '🍋 Riesling → Clare Valley（純淨）· Eden Valley（細膩）· Great Southern（涼爽）',
        '🥂 Semillon → Hunter Valley（陳年）· Barossa（豐腴）',
        '🫐 Chardonnay → Yarra Valley · Adelaide Hills · Margaret River · Beechworth',
        '🎻 Pinot Noir → Mornington Peninsula · Yarra Valley · Tasmania',
      ],
    },
    {
      type: 'compare',
      title: '澳洲 vs 法國：相同品種，不同風格',
      left: {
        label: '澳洲（新世界）',
        points: [
          'Shiraz（Barossa）：黑莓、巧克力、甘草',
          'Chardonnay（Margaret River）：熱帶水果、奶油',
          '氣候更熱，風格更豐腴',
          '標示品種名稱',
        ],
      },
      right: {
        label: '法國（舊世界）',
        points: [
          'Syrah（Hermitage）：黑胡椒、礦石、皮革',
          'Chardonnay（Burgundy）：礦石、蘋果、細膩',
          '氣候較涼，風格更精緻',
          '標示產區名稱（不標品種）',
        ],
      },
    },
    {
      type: 'quiz',
      question: '哪個產區以「terra rossa 紅棕壤 + Cabernet Sauvignon」最著名？',
      options: ['Barossa Valley', 'Coonawarra', 'Hunter Valley', 'Margaret River'],
      answer: 1,
      explanation: 'Coonawarra 以標誌性的 terra rossa 紅棕壤（覆蓋在白色石灰岩上）出產澳洲最著名的 Cabernet Sauvignon，被稱為「澳洲波爾多」。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '每個品種都有最適合的澳洲產區',
        'Shiraz 在澳洲各地都有，但風格因產區氣候大不同',
        '新世界 vs 舊世界：相同品種，因氣候產生截然不同的風格',
      ],
      nextLesson: '下一課：Barossa Valley 老藤 Shiraz 聖地',
    },
  ],

  // M3L1 — Barossa Valley
  A1M3L1: [
    {
      type: 'cover',
      title: 'Barossa Valley：老藤 Shiraz 聖地',
      subtitle: 'Level 1 · Module 3 · Lesson 1',
      bg: 'linear-gradient(135deg, #7b1818 0%, #e67e22 100%)',
      emoji: '🌡️',
    },
    {
      type: 'content',
      title: 'Barossa Valley 基本資料',
      points: [
        '位置：South Australia，Adelaide 北方 60km',
        '面積：約 14,000 公頃葡萄園',
        '氣候：大陸型地中海氣候，夏季均溫 32°C，乾燥少雨',
        '土壤：古老紅棕壤（terra rossa）+ 石英砂質壤土',
        '德裔移民：1842 年西里西亞（Silesia）移民開始種植，帶來 old vine 傳統',
      ],
    },
    {
      type: 'content',
      title: 'Barossa Valley vs Eden Valley',
      points: [
        '🟥 Barossa Valley（Barossa Zone 內）：低海拔，炎熱，豐腴風格',
        '🍋 Eden Valley（Barossa Zone 內）：高海拔 380–550m，涼爽，精緻風格',
        '兩者同屬 Barossa Zone，但風格截然不同',
        'Eden Valley 的 Riesling 是澳洲最頂尖之一',
        'High Eden 是 Eden Valley 的 Sub-Region，海拔更高',
      ],
      note: '很多消費者誤以為「Barossa Valley」= 整個 Barossa Zone，但兩者是不同的 GI Region',
    },
    {
      type: 'content',
      title: '老藤（Old Vines）文化',
      points: [
        '澳洲保存了全球最多的「百年老藤」葡萄園',
        '原因：19 世紀末根瘤蚜蟲（Phylloxera）未影響 SA 大部分產區',
        'Barossa Old Vine Charter（老藤憲章）四個等級：',
        '  • Old Vine：樹齡 35 年以上',
        '  • Survivor Vine：樹齡 70 年以上',
        '  • Centenarian Vine：樹齡 100 年以上',
        '  • Ancestor Vine：樹齡 125 年以上',
      ],
    },
    {
      type: 'quiz',
      question: '為什麼澳洲 Barossa Valley 能保存百年老藤？',
      options: [
        '澳洲氣候炎熱，老藤生長緩慢',
        '19 世紀根瘤蚜蟲未大規模影響 SA 產區',
        '澳洲法律禁止拔除老藤',
        '當地土壤不適合根瘤蚜蟲生存',
      ],
      answer: 1,
      explanation: '19 世紀末影響歐洲葡萄園的根瘤蚜蟲（Phylloxera）並未大規模侵入 South Australia，因此許多葡萄藤得以留存至今，成為百年老藤。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Barossa Valley：SA 核心，炎熱，豐腴 Shiraz，老藤傳統',
        'Eden Valley：Barossa Zone 高海拔，涼爽，Riesling 精緻',
        '老藤 4 等級：35/70/100/125 年以上',
      ],
      nextLesson: '下一課：McLaren Vale 與 Adelaide Hills',
    },
  ],

  // M3L2 — McLaren Vale & Adelaide Hills
  A1M3L2: [
    {
      type: 'cover',
      title: 'McLaren Vale 與 Adelaide Hills',
      subtitle: 'Level 1 · Module 3 · Lesson 2',
      bg: 'linear-gradient(135deg, #006400 0%, #e67e22 100%)',
      emoji: '🌊',
    },
    {
      type: 'compare',
      title: 'McLaren Vale vs Adelaide Hills',
      left: {
        label: 'McLaren Vale（溫暖）',
        points: [
          '位置：Adelaide 南方 40km，Fleurieu Zone',
          '氣候：地中海，海風調節',
          '土壤：40+ 種類，多樣化',
          '品種：Shiraz、GSM、Grenache',
          '風格：豐腴黑橄欖、巧克力、礦石',
          '近年：Fiano、Vermentino 義大利品種',
        ],
      },
      right: {
        label: 'Adelaide Hills（涼爽）',
        points: [
          '位置：Adelaide 東方山脊，400–700m',
          '氣候：涼爽，比市區低 5°C',
          '土壤：泥岩、片岩多樣化',
          '品種：Sauvignon Blanc、Chardonnay、Pinot Noir',
          '風格：清爽草本、礦石',
          '子產區：Lenswood、Piccadilly Valley',
        ],
      },
    },
    {
      type: 'content',
      title: 'McLaren Vale：多土壤的鑲嵌地塊',
      points: [
        '一個只有 8,000 公頃的產區，卻有超過 40 種不同土壤類型',
        '結果：同一品種在不同地塊展現截然不同的風格',
        "d'Arenberg(\u5927\u885b d'Arenberg)\u7684\u300cThe Cube\u300d\u4ee5\u6b64\u70ba\u6838\u5fc3\u54f2\u5b78",
        'McLaren Vale Shiraz：黑橄欖、黑巧克力、薰衣草，比 Barossa 更優雅細緻',
        "\u8fd1\u5e74\u7fa9\u5927\u5229\u54c1\u7a2e\u9769\u547d\uff1aFiano\uff08\u767d\uff09\u3001Vermentino\uff08\u767d\uff09\u3001Nero d'Avola\uff08\u7d05\uff09",
      ],
    },
    {
      type: 'quiz',
      question: 'Adelaide Hills 最著名的白品種是？',
      options: ['Riesling', 'Semillon', 'Sauvignon Blanc', 'Viognier'],
      answer: 2,
      explanation: 'Adelaide Hills 涼爽的高海拔氣候最適合 Sauvignon Blanc，展現清爽草本、百香果、礦石風格。代表酒莊：Shaw + Smith。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'McLaren Vale：40+ 土壤類型，豐腴黑果 Shiraz，GSM 混釀，新義大利品種',
        'Adelaide Hills：高海拔涼爽，Sauvignon Blanc 清爽，氣泡酒佳',
        '兩個產區相距 40km 但風格截然不同',
      ],
      nextLesson: '下一課：Clare Valley & Eden Valley Riesling 雙雄',
    },
  ],

  // M3L3 — Clare & Eden Riesling
  A1M3L3: [
    {
      type: 'cover',
      title: 'Clare Valley & Eden Valley：Riesling 雙雄',
      subtitle: 'Level 1 · Module 3 · Lesson 3',
      bg: 'linear-gradient(135deg, #d4ac0d 0%, #1a6b9b 100%)',
      emoji: '🍋',
    },
    {
      type: 'compare',
      title: 'Clare Valley vs Eden Valley：Riesling 比較',
      left: {
        label: 'Clare Valley',
        points: [
          'Mount Lofty Ranges Zone，海拔 400–500m',
          '石灰岩、板岩、石英岩土壤',
          '風格：萊姆、青蘋果、礦石、乾淨純粹',
          '酸度：高，緊緻',
          '代表：Grosset Polish Hill（全澳最頂）',
          '螺旋蓋先驅：2000 年開始推廣',
        ],
      },
      right: {
        label: 'Eden Valley',
        points: [
          'Barossa Zone，海拔 380–550m',
          '古老片岩與花崗岩',
          '風格：花香、萊姆花、礦石、細膩',
          '酸度：高，但更圓潤',
          '代表：Henschke Hill of Grace（同區）',
          'Pewsey Vale 是 Eden Valley 著名 Riesling 園',
        ],
      },
    },
    {
      type: 'content',
      title: 'Riesling 陳年奇蹟',
      points: [
        '年輕時：萊姆、青蘋果、礦石、花香，高酸清爽',
        '5–10 年後：蜂蜜、烤麵包、薑餅，酸度融合',
        '10–20 年以上：汽油（petrol / kerosene）香，礦石蠟質，令人驚嘆',
        '「汽油香」是 Riesling 陳年的標誌性香氣，由 TDN 化合物形成',
        '螺旋蓋保護了陳年過程，避免木塞汙染',
      ],
      note: 'Clare Valley 是全球最早大規模採用螺旋蓋的葡萄酒社群，由 Grosset 帶頭，2000 年組成「Clare Valley Riesling 螺旋蓋聯盟」',
    },
    {
      type: 'quiz',
      question: 'Riesling 陳年 10-20 年後出現的標誌性香氣是？',
      options: ['草莓果醬', '汽油/煤油香（petrol）', '木桶香草', '奶油太妃糖'],
      answer: 1,
      explanation: 'Riesling 陳年後產生的「汽油香」（petrol / kerosene）是其標誌性特色，由 TDN（三甲基-1,8-萘二醇）化合物在瓶內緩慢形成，是愛好者珍視的複雜度。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Clare Valley：純粹萊姆礦石，螺旋蓋先驅',
        'Eden Valley：花香細膩，Barossa Zone 高地',
        'Riesling 陳年：10–20 年出現汽油香，是品質標誌',
      ],
      nextLesson: '下一課：Coonawarra 澳洲最著名 Cabernet',
    },
  ],

  // M3L4 — Coonawarra
  A1M3L4: [
    {
      type: 'cover',
      title: 'Coonawarra：澳洲最著名 Cabernet',
      subtitle: 'Level 1 · Module 3 · Lesson 4',
      bg: 'linear-gradient(135deg, #7b1818 0%, #1a6b9b 100%)',
      emoji: '🪨',
    },
    {
      type: 'content',
      title: 'Coonawarra 的 Terra Rossa 傳奇',
      points: [
        '位置：South Australia 東南端，Limestone Coast Zone',
        '面積：約 5,500 公頃，呈狹長地帶（約 15km x 1.5km）',
        '土壤：標誌性「terra rossa」（義大利文「紅土」）覆蓋在白色石灰岩台地上',
        '排水：石灰岩台地提供完美排水，葡萄根系深入岩縫',
        '氣候：受南方海洋影響，澳洲南部涼爽地中海氣候',
      ],
      note: 'Terra rossa 的紅色來自岩石中的氧化鐵，礦物質豐富的土壤賦予 Cabernet 特殊的礦石感',
    },
    {
      type: 'content',
      title: 'Coonawarra Cabernet 的風格',
      points: [
        '黑醋栗（cassis）、藍莓、歐洲香料',
        '明顯的薄荷（mint）與尤加利（eucalyptus）香氣 ← 澳洲獨特',
        '雪松（cedar）與礦石感',
        '緊緻精細的單寧，高酸度，極佳陳年潛力',
        '通常需要 5–15 年才能達到最佳飲用窗',
        '代表酒莊：Wynns Coonawarra Estate、Majella、Balnaves、Penley Estate',
      ],
    },
    {
      type: 'quiz',
      question: 'Coonawarra 最著名的品種和土壤類型分別是？',
      options: [
        'Shiraz + 砂質紅棕壤',
        'Cabernet Sauvignon + terra rossa（紅棕壤覆蓋石灰岩）',
        'Riesling + 花崗岩',
        'Chardonnay + 黏土壤土',
      ],
      answer: 1,
      explanation: 'Coonawarra 以「Cabernet Sauvignon + terra rossa（紅棕壤覆蓋石灰岩）」的組合著稱，是澳洲最具標誌性的風土搭配。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Coonawarra：SA 東南端，狹長地帶，terra rossa 紅棕壤 + 石灰岩',
        'Cabernet Sauvignon：黑醋栗 + 薄荷/尤加利 + 礦石，緊緻陳年型',
        '代表酒莊：Wynns Coonawarra Estate',
      ],
      nextLesson: '下一課：Yarra Valley & Mornington Peninsula',
    },
  ],

  // M4L1 — Yarra & Mornington
  A1M4L1: [
    {
      type: 'cover',
      title: 'Yarra Valley & Mornington Peninsula',
      subtitle: 'Level 1 · Module 4 · Lesson 1',
      bg: 'linear-gradient(135deg, #8e44ad 0%, #2980b9 100%)',
      emoji: '🎻',
    },
    {
      type: 'compare',
      title: 'Yarra Valley vs Mornington Peninsula',
      left: {
        label: 'Yarra Valley',
        points: [
          '墨爾本東北 50km，Port Phillip Zone',
          '海拔 50–400m，涼爽，河谷地形',
          '土壤：深紅火山土（下亞拉）+ 淺灰壤土（上亞拉）',
          '品種：Pinot Noir、Chardonnay、Shiraz、Pinot Gris',
          '代表酒莊：Coldstream Hills、Yering Station',
          '下亞拉豐腴 / 上亞拉精緻',
        ],
      },
      right: {
        label: 'Mornington Peninsula',
        points: [
          '墨爾本南方，三面環海，Port Phillip Zone',
          '海洋性涼爽，夏涼冬溫',
          '土壤：深紅火山土、灰色砂質壤土',
          '品種：Pinot Noir、Chardonnay、Pinot Gris',
          '代表酒莊：Stonier、Kooyong、Moorooduc',
          '絲滑 Pinot，「維多利亞勃艮第」',
        ],
      },
    },
    {
      type: 'content',
      title: 'Yarra Valley：澳洲涼爽氣候先驅',
      points: [
        '1838 年開始種植，是維多利亞最古老產區之一',
        '1970s 復興：James Halliday 在 Coldstream Hills 引領精品酒運動',
        '下亞拉（Lower Yarra）：紅色火山土，飽滿，更豐腴',
        '上亞拉（Upper Yarra）：海拔更高，涼爽，更精緻細膩',
        '氣泡酒：Yarra Valley 也生產優質的傳統法氣泡酒（如 Domaine Chandon）',
      ],
    },
    {
      type: 'quiz',
      question: 'Mornington Peninsula 被稱為「維多利亞勃艮第」的原因是？',
      options: [
        '產區形狀像勃艮第',
        '以精緻絲滑的 Pinot Noir 著稱，氣候涼爽如勃艮第',
        '使用法國勃艮第橡木桶',
        '由法國移民建立',
      ],
      answer: 1,
      explanation: 'Mornington Peninsula 三面環海，涼爽的海洋性氣候賦予 Pinot Noir 精緻絲滑、草莓玫瑰花瓣的勃艮第式風格，因此得名。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Yarra Valley：下亞拉（豐腴）vs 上亞拉（精緻），Pinot 先驅',
        'Mornington Peninsula：三面環海，絲滑 Pinot Noir，「VIC 勃艮第」',
        '兩產區都屬 Port Phillip Zone，是墨爾本精品葡萄酒的核心',
      ],
      nextLesson: '下一課：Heathcote & Rutherglen 獨特風土',
    },
  ],

  // M4L2 — Heathcote & Rutherglen
  A1M4L2: [
    {
      type: 'cover',
      title: 'Heathcote & Rutherglen：獨特風土',
      subtitle: 'Level 1 · Module 4 · Lesson 2',
      bg: 'linear-gradient(135deg, #5d2e0c 0%, #8e44ad 100%)',
      emoji: '🟤',
    },
    {
      type: 'content',
      title: 'Heathcote：5.4 億年的土壤',
      points: [
        '位置：Central Victoria Zone，墨爾本北方 120km',
        '土壤：5.4 億年寒武紀紫色礫岩（Cambrian greenstone）— 全球獨特',
        '氣候：大陸型，夏熱（但海拔調節），日夜溫差大',
        'Shiraz：深色果實、礦石、黑胡椒、濃郁但有結構',
        "代表酒莊：Jasper Hill（Emily's Paddock）、Greenstone Vineyard",
        '土壤是 Heathcote Shiraz 最重要的風土標誌',
      ],
    },
    {
      type: 'content',
      title: 'Rutherglen：Muscat 的王國',
      points: [
        '位置：North East Victoria Zone，維多利亞最熱的產區之一',
        '氣候：炎熱大陸型，夏天乾熱，晚摘葡萄糖分超高',
        '招牌：Rutherglen Muscat（Muscat Blanc à Petits Grains）',
        '釀造：氧化熟成的加強甜酒，棕色黏稠，複雜度無窮',
        '四個品質等級：Rutherglen → Classic → Grand → Rare',
        '代表酒莊：Chambers Rosewood、Morris Wines、Campbells',
      ],
      note: '「Rare」等級的 Rutherglen Muscat 可能包含超過 100 年的老年份混調，是全球最獨特的甜酒之一',
    },
    {
      type: 'quiz',
      question: 'Rutherglen Muscat 最高等級是？',
      options: ['Rutherglen', 'Classic', 'Grand', 'Rare'],
      answer: 3,
      explanation: 'Rutherglen Muscat 四個等級由低到高：Rutherglen → Classic → Grand → Rare，Rare 等級混調了數十年甚至逾百年的老年份，是最稀有的頂級甜酒。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Heathcote：5.4 億年寒武紀土壤，礦石感強烈的 Shiraz 之王',
        'Rutherglen：炎熱北維多利亞，Muscat 四級加強甜酒，全球獨特',
        '兩個產區風格截然不同，展示維多利亞的多樣性',
      ],
      nextLesson: '下一課：Hunter Valley Semillon 的奇蹟',
    },
  ],

  // M4L3 — Hunter Valley Semillon
  A1M4L3: [
    {
      type: 'cover',
      title: 'Hunter Valley：Semillon 的奇蹟',
      subtitle: 'Level 1 · Module 4 · Lesson 3',
      bg: 'linear-gradient(135deg, #1a6b9b 0%, #d4ac0d 100%)',
      emoji: '⏳',
    },
    {
      type: 'content',
      title: 'Hunter Valley 基本資料',
      points: [
        '位置：NSW，雪梨北方 160km',
        '氣候：炎熱潮濕，夏季多雨（在反常的低緯度種植）',
        '土壤：白色石灰岩、紅色多孔粉砂岩、黑色礫石',
        '最古老的澳洲葡萄酒產區之一（1820s 開始）',
        '品種：Semillon（最著名）、Shiraz（Hunter 風格 Shiraz）、Chardonnay',
      ],
    },
    {
      type: 'content',
      title: 'Hunter Valley Semillon：世界獨一無二',
      points: [
        '年輕時採收：低糖分、低酒精（9–11% alc）',
        '年輕時風格：清爽、草本、檸檬香草，非常輕盈',
        '裝瓶後：幾乎不使用橡木桶',
        '5–10 年後：蜂蜜、萊姆汁、烤麵包開始出現',
        '10–20 年後：奶油、焦糖、複雜的蠟質，如同兩款不同的酒',
        "代表酒莊：Tyrrell's（Vat 1）、McWilliam's Mount Pleasant",
      ],
      note: '這是全世界獨一無二的「陳年白酒奇蹟」——以極低酒精裝瓶，卻能在瓶內自我蛻變',
    },
    {
      type: 'quiz',
      question: 'Hunter Valley Semillon 的特色是？',
      options: [
        '高酒精（15%）、橡木桶發酵、豐腴奶油風格',
        '低酒精（9–11%）、無橡木桶、陳年後蛻變為蜂蜜烤麵包',
        '甜型、帶氣泡、早飲型',
        '類似波爾多混釀，加入 Sauvignon Blanc',
      ],
      answer: 1,
      explanation: 'Hunter Valley Semillon 以極低酒精（9–11%）、不使用橡木桶、無甜型裝瓶，年輕時清瘦草本，陳年 10–20 年後蛻變為蜂蜜吐司的奇蹟，是全球獨一無二的風格。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Hunter Valley：NSW 最古老，炎熱潮濕',
        'Semillon：低酒精（9-11%）無橡木，陳年 10–20 年後蜂蜜吐司奇蹟',
        "代表酒莊：Tyrrell\'s Vat 1",
      ],
      nextLesson: '下一課：Margaret River 澳洲波爾多',
    },
  ],

  // M5L1 — Margaret River
  A1M5L1: [
    {
      type: 'cover',
      title: 'Margaret River：澳洲波爾多',
      subtitle: 'Level 1 · Module 5 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a6b9b 0%, #f39c12 100%)',
      emoji: '🏄',
    },
    {
      type: 'content',
      title: 'Margaret River 基本資料',
      points: [
        '位置：Western Australia 西南端，Perth 南方 280km',
        '地形：海岬（cape）三面被印度洋與南冰洋包圍',
        '氣候：完美地中海氣候，夏乾涼爽，降水集中冬季',
        '土壤：深紅礫質壤土（karri loam）、古老砂岩，排水良好',
        '面積：約 7,000 公頃，約佔 WA 葡萄酒產量 20% 但佔旗艦品質 80%',
      ],
    },
    {
      type: 'content',
      title: 'Margaret River 的招牌品種',
      points: [
        '🟥 Cabernet Sauvignon / Merlot 混釀：最著名，波爾多風格，黑醋栗、黑橄欖',
        '🥂 Chardonnay：豐腴而精緻，Leeuwin Estate Art Series 是澳洲最頂級之一',
        '🌿 Semillon / Sauvignon Blanc 混釀：清爽熱帶果香，是當地特色混釀',
        '代表酒莊：Cullen（生物動力）、Leeuwin Estate（Art Series）、Moss Wood、Vasse Felix',
        '1970s 才開始商業種植，但迅速建立世界級聲譽',
      ],
    },
    {
      type: 'quiz',
      question: 'Margaret River 最著名的紅酒風格是？',
      options: [
        'Shiraz 老藤，豐腴黑莓',
        'Cabernet Sauvignon / Merlot 波爾多混釀風格',
        'Pinot Noir 涼爽精緻風格',
        'Grenache 甜美草莓香',
      ],
      answer: 1,
      explanation: 'Margaret River 最著名的是波爾多風格的 Cabernet Sauvignon / Merlot 混釀，三面環海的地中海氣候使其展現黑醋栗、黑橄欖、雪松的優雅風格，被稱為「澳洲波爾多」。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Margaret River：WA 精品重鎮，三面環海，完美地中海氣候',
        'Cabernet/Merlot 混釀：波爾多風格，黑醋栗黑橄欖',
        'Chardonnay：Leeuwin Estate Art Series 世界級',
      ],
      nextLesson: '下一課：Great Southern & Tasmania',
    },
  ],

  // M5L2 — Great Southern & Tasmania
  A1M5L2: [
    {
      type: 'cover',
      title: 'Great Southern & Tasmania',
      subtitle: 'Level 1 · Module 5 · Lesson 2',
      bg: 'linear-gradient(135deg, #006400 0%, #f39c12 100%)',
      emoji: '🧊',
    },
    {
      type: 'compare',
      title: 'Great Southern vs Tasmania',
      left: {
        label: 'Great Southern（WA）',
        points: [
          'WA 最大 Zone，5 個 Region',
          '涼爽地中海 + 南冰洋調節',
          'Albany / Denmark / Frankland River / Mount Barker / Porongurup',
          'Riesling 精緻礦石，Shiraz 胡椒辛料',
          'Howard Park、Plantagenet、Frankland Estate',
        ],
      },
      right: {
        label: 'Tasmania（TAS）',
        points: [
          '澳洲最南端島州，全澳最冷',
          '海洋性涼爽，全年多霧多雨',
          '北部（Pipers River）/ 南部（Derwent Valley）',
          '氣泡酒（House of Arras 世界級）',
          'Pinot Noir、Chardonnay、Riesling 高酸精緻',
        ],
      },
    },
    {
      type: 'content',
      title: 'Tasmania 的崛起',
      points: [
        '塔斯馬尼亞近 20 年來是澳洲最受矚目的新興優質產區',
        '由於全球暖化，此前被視為「太冷」的氣候如今正好理想',
        '氣泡酒：Jansz、House of Arras 等品牌在國際獲高度評價',
        'Pinot Noir：純粹、高酸、草莓紅果，勃艮第式優雅',
        'Riesling 和 Chardonnay 同樣世界水準',
        "代表酒莊：Moorilla（Muse 系列）、Devil's Corner、Josef Chromy",
      ],
    },
    {
      type: 'quiz',
      question: 'Tasmania 最著名的酒款類型是？',
      options: ['老藤 Shiraz', '頂級氣泡酒與 Pinot Noir', 'Muscat 加強甜酒', 'Riesling 陳年型'],
      answer: 1,
      explanation: 'Tasmania 以全澳最涼爽的氣候著稱，頂級氣泡酒（House of Arras）和精緻 Pinot Noir 是其最重要的招牌，近年來國際聲譽迅速提升。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Great Southern：WA 最大Zone，5 Region，Riesling & Shiraz 精緻',
        'Tasmania：全澳最冷，氣泡酒 + Pinot Noir 世界級，近年快速崛起',
        '兩個產區都是涼爽氣候、精品風格的代表',
      ],
      nextLesson: '最後：入門綜合測驗！',
    },
  ],

  // FINAL EXAM
  A1FinalExam: [
    {
      type: 'cover',
      title: '入門綜合測驗',
      subtitle: 'Level 1 期末考核',
      bg: 'linear-gradient(135deg, #00274e 0%, #c8a951 100%)',
      emoji: '🎓',
    },
    {
      type: 'quiz',
      question: '澳洲 GI 分級制度的三個層級（由大到小）是？',
      options: [
        'State → Region → Sub-Region',
        'Zone → Region → Sub-Region',
        'GI → AOC → DOC',
        'Grand Cru → Premier Cru → Village',
      ],
      answer: 1,
      explanation: '澳洲 GI 系統三個層級由大到小：Zone（大區）→ Region（次區）→ Sub-Region（子區）。',
    },
    {
      type: 'quiz',
      question: 'Barossa Valley 保存百年老藤的主要原因是？',
      options: [
        '法律保護',
        '氣候太熱，老藤生長慢',
        '根瘤蚜蟲未大規模侵入 South Australia',
        '德裔移民的傳統',
      ],
      answer: 2,
      explanation: '19 世紀末的根瘤蚜蟲（Phylloxera）未大規模侵入 SA，使得 Barossa 的葡萄藤得以生長至今成為百年老藤。',
    },
    {
      type: 'quiz',
      question: 'Hunter Valley Semillon 最特別的特色是？',
      options: [
        '高酒精（15%），橡木桶熟成',
        '低酒精（9–11%），陳年後蛻變為蜂蜜烤麵包風格',
        '帶微氣泡，早飲年輕型',
        '類似波爾多，混入 Sauvignon Blanc',
      ],
      answer: 1,
      explanation: 'Hunter Valley Semillon 以低酒精（9-11%）無橡木裝瓶，陳年 10-20 年後展現蜂蜜、烤麵包的驚人複雜度，是全球獨一無二的風格。',
    },
    {
      type: 'quiz',
      question: '「GSM」代表哪三個品種？',
      options: [
        'Grenache + Shiraz + Mourvèdre',
        'Grenache + Semillon + Merlot',
        'Garnacha + Shiraz + Malbec',
        'Gamay + Sangiovese + Mourvèdre',
      ],
      answer: 0,
      explanation: 'GSM = Grenache + Shiraz + Mourvèdre，是南澳（Barossa、McLaren Vale）的標誌性混釀組合。',
    },
    {
      type: 'quiz',
      question: 'Coonawarra 最著名的是什麼組合？',
      options: [
        'Shiraz + 砂岩土壤',
        'Riesling + 石灰岩',
        'Cabernet Sauvignon + terra rossa（紅棕壤 + 石灰岩）',
        'Chardonnay + 玄武岩',
      ],
      answer: 2,
      explanation: 'Coonawarra 以「Cabernet Sauvignon + terra rossa（紅棕壤覆蓋石灰岩）」的風土搭配著稱，被稱為「澳洲波爾多」。',
    },
    {
      type: 'quiz',
      question: 'Clare Valley 在澳洲葡萄酒史上有何重要貢獻？',
      options: [
        '最早引進 Chardonnay',
        '全球最早大規模採用螺旋蓋（Stelvin）的產區',
        '發明 Sparkling Shiraz',
        '第一個獲 GI 認證的產區',
      ],
      answer: 1,
      explanation: 'Clare Valley 在 2000 年組成「Clare Valley Riesling 螺旋蓋聯盟」，由 Grosset 帶頭，成為全球最早大規模採用螺旋蓋的葡萄酒社群，改變了全球對瓶蓋的觀念。',
    },
    {
      type: 'quiz',
      question: 'Tasmania 近年快速崛起的原因是？',
      options: [
        '找到了新的百年老藤',
        '全球暖化使其氣候從「太冷」變為「恰好理想」',
        '引進了法國釀酒師',
        '建立了新的 GI 分級',
      ],
      answer: 1,
      explanation: '全球暖化使 Tasmania 此前被視為「太冷」的氣候變得理想，讓 Pinot Noir、Chardonnay 和氣泡酒達到世界頂級水準，近 20 年聲譽迅速提升。',
    },
    {
      type: 'summary',
      title: '🎉 恭喜完成 Level 1！',
      points: [
        '✅ 澳洲六州地理分布與氣候特色',
        '✅ GI 分級制度：Zone / Region / Sub-Region',
        '✅ 核心品種：Shiraz、Cabernet、Riesling、Semillon、Chardonnay',
        '✅ 南澳精華：Barossa、McLaren Vale、Clare、Coonawarra',
        '✅ 維多利亞：Yarra、Heathcote、Rutherglen',
        '✅ 西澳：Margaret River、Great Southern',
        '✅ Tasmania：最冷，氣泡酒 Pinot 崛起',
      ],
      nextLesson: '準備好進入 Level 2 深度探索了嗎？',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2 節選（其餘為佔位）
  // ════════════════════════════════════════════════════════════

  A2M1L1: [
    {
      type: 'cover',
      title: 'Barossa 老藤分級系統',
      subtitle: 'Level 2 · Module 1 · Lesson 1',
      bg: 'linear-gradient(135deg, #7b1818 0%, #e67e22 100%)',
      emoji: '🌳',
    },
    {
      type: 'content',
      title: 'Barossa Old Vine Charter（老藤憲章）',
      points: [
        '由 Barossa Grape & Wine Association 設立，全球首創',
        '等級一：Old Vine — 樹齡 35 年以上',
        '等級二：Survivor Vine — 樹齡 70 年以上',
        '等級三：Centenarian Vine — 樹齡 100 年以上',
        '等級四：Ancestor Vine — 樹齡 125 年以上',
        '老藤的價值：低產量、濃縮風味、複雜的礦物質感、天然平衡的酸度',
      ],
    },
    {
      type: 'content',
      title: '為什麼老藤 Shiraz 如此獨特？',
      points: [
        '根系深入地下 10–15m，汲取更豐富的礦物質',
        '自然低產量（每公頃 1–2 噸 vs 普通 5–10 噸）',
        '葡萄天然糖酸平衡，無需過度人工干預',
        '果香更濃縮，單寧更絲滑，餘韻更長',
        '著名老藤園：Henschke（Hill of Grace，樹齡 140+ 年）、Langmeil（1843 年老藤）',
        'Penfolds Grange 也選用 SA 老藤 Shiraz 為基礎',
      ],
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Barossa Old Vine Charter：4 等級（35/70/100/125 年）',
        '老藤優勢：深根、低產、濃縮、礦物質豐富',
        'Hill of Grace（Henschke）：140+ 年老藤，澳洲最著名老藤園之一',
      ],
    },
  ],

  A2M5L1: [
    {
      type: 'cover',
      title: 'Tasmania 涼爽氣候優勢',
      subtitle: 'Level 2 · Module 5 · Lesson 1',
      bg: 'linear-gradient(135deg, #27ae60 0%, #1a6b9b 100%)',
      emoji: '❄️',
    },
    {
      type: 'content',
      title: 'Tasmania 為什麼是澳洲最冷的產酒州？',
      points: [
        '緯度：41–43°S，相當於勃艮第的緯度（南半球相反）',
        '海洋性氣候：四面環海，西風帶影響，全年涼爽多雨',
        '日照時數：夏季日照長（17-18 小時），彌補低溫影響',
        '年均氣溫：12–14°C，比 Yarra Valley 低 2–3°C',
        '結果：保留極高天然酸度，是氣泡酒的絕佳基底',
      ],
    },
    {
      type: 'content',
      title: 'Tasmania 代表性酒款',
      points: [
        '🥂 House of Arras：澳洲最著名的傳統法氣泡酒品牌',
        '🥂 Jansz：Tasmania 最大氣泡酒品牌，廣受歡迎',
        '🎻 Moorilla Muse：精品 Pinot Noir，高酸清爽',
        '🍋 Pipers Brook Riesling：北部 Pipers River 產區',
        '近年投資：Louis Roederer、Moët & Chandon 等法國大廠已購入 TAS 葡萄',
      ],
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Tasmania：41-43°S，全澳最冷，四面環海',
        '優勢：高酸度 + 長日照 = 氣泡酒與精品靜態酒',
        'House of Arras：澳洲最頂級氣泡酒品牌',
      ],
    },
  ],
}

// ── 佔位投影片（未建立的課程）────────────────────────────────────────────
function placeholderSlides(lessonId) {
  return [
    {
      type: 'cover',
      title: '課程內容製作中',
      subtitle: lessonId,
      bg: 'linear-gradient(135deg, #333 0%, #555 100%)',
      emoji: '🔧',
    },
    {
      type: 'content',
      title: '即將推出',
      points: [
        '此課程的詳細投影片內容正在製作中',
        '敬請期待！',
      ],
    },
  ]
}

// ── Export ────────────────────────────────────────────────────────────────
export function getAustraliaLessonSlides(lessonId) {
  return SLIDE_MAP[lessonId] || placeholderSlides(lessonId)
}
