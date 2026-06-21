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
      type: 'map',
      title: '澳洲六大產酒州全圖',
      subtitle: '點擊各州積瀏詳細資訊',
      mapRegion: 'all',
      note: '各州顔色不同：SA 橙、VIC 紫、NSW 藍、WA 金、QLD 紅、TAS 綠，與之後探索地圖的展示一致',
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
      type: 'map',
      title: '澳洲氣候帶 × 產區分布',
      subtitle: '從 Tasmania 涼爽到 Barossa 炎熱，氣候決定風格',
      mapRegion: 'all',
    },,

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
      type: 'map',
      title: '澳洲 GI 產區體系總覽',
      subtitle: 'Zone → Region → Sub-Region 三層級地理示意',
      mapRegion: 'all',
    },,

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
      type: 'gi-system',
      title: '🗺️ 澳洲 GI 階層互動詳解',
      subtitle: '點選 Sub-Region / Region / Zone / State / Country 查看詳細規範',
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
      type: 'shiraz-styles',
      title: '🍷 澳洲 Shiraz 產區風格圖譜',
      subtitle: '從涼爽 Grampians 到熔熱 Barossa，五大產區風土、風味與名莊互動對比',
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
      type: 'map',
      title: '品種 × 產區分布地圖',
      subtitle: 'Shiraz（SA/VIC）、Cabernet（WA/SA）、Riesling（SA）、Pinot（VIC/TAS）',
      mapRegion: 'all',
    },,

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
      type: 'map',
      title: 'Barossa Valley 產區位置',
      subtitle: 'South Australia 北部， Adelaide 北方 60km',
      mapRegion: 'Barossa Valley',
      note: 'Barossa Zone 包含 Barossa Valley 與 Eden Valley 兩個區域，地圖題示的是 Barossa Valley（低海拔）',
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
      type: 'map',
      title: 'McLaren Vale & Adelaide Hills 產區位置',
      subtitle: '兩個產區同屬 South Australia，僅相距 40km 卻風格截然不同',
      mapRegion: 'McLaren Vale|Adelaide Hills',
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
      type: 'map',
      title: 'Clare Valley & Eden Valley 產區地圖',
      subtitle: '兩個產區都位於 South Australia，分屬不同 Zone',
      mapRegion: 'Clare Valley|Eden Valley',
      note: 'Clare Valley 屬 Mount Lofty Ranges Zone；Eden Valley 屬 Barossa Zone，地理上並不相鄰',
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
      type: 'map',
      title: 'Coonawarra 產區地圖',
      subtitle: 'South Australia 最南端，Limestone Coast Zone',
      mapRegion: 'Coonawarra',
      note: 'Coonawarra 燕尾形的 terra rossa 紅棕壤傀帶僅 15km 長，是全澳最經典的 Cabernet 小地塊',
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
      type: 'map',
      title: 'Yarra Valley & Mornington Peninsula 地圖',
      subtitle: '兩個產區均位於 Victoria，Port Phillip Zone',
      mapRegion: 'Yarra Valley|Mornington Peninsula',
      note: 'Yarra Valley 在墨爾本東北，Mornington Peninsula 在南邊半島，両者包圍 Port Phillip 灣',
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
      type: 'map',
      title: 'Heathcote & Rutherglen 地圖',
      subtitle: '兩區均位於 Victoria 內陸',
      mapRegion: 'Heathcote|Rutherglen',
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
      type: 'map',
      title: 'Hunter Valley 產區地圖',
      subtitle: 'New South Wales 最重要的歷史產區，Sydney 北方約 160km',
      mapRegion: 'Hunter Valley',
    },,

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
      type: 'map',
      title: 'Margaret River 產區地圖',
      subtitle: 'Western Australia 西南端，Perth 南方 280km',
      mapRegion: 'Margaret River',
      note: '三面環海的地中海氣候，雖僅佔 WA 產酒量 20%，卻产出 80% 的旗艦品質',
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
      type: 'map',
      title: 'Great Southern & Tasmania 地圖',
      subtitle: '西澳最大 Zone + 澳洲最南州分',
      mapRegion: 'Great Southern|TAS',
      note: 'Great Southern 在 WA 西南端（金色）；Tasmania 屬獨立州分（綠色），兩者都是澳洲最溺製產區',
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
      type: 'map',
      title: 'Barossa Valley 產區地圖',
      subtitle: 'South Australia，Barossa Zone，老藤 Shiraz 聖地',
      mapRegion: 'Barossa Valley',
    },,

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
      type: 'map',
      title: 'Tasmania 產區地圖',
      subtitle: '澳洲最南州分，Bass 海峽以南，涼爽海洋氣候出產精緻 Pinot・Chardonnay',
      mapRegion: 'TAS',
    },,

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

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 1 補完
  // ════════════════════════════════════════════════════════════

  // A2M1L2 — Eden Valley Riesling 陳年特性
  A2M1L2: [
    {
      type: 'cover',
      title: 'Eden Valley Riesling 陳年特性',
      subtitle: 'Level 2 · Module 1 · Lesson 2',
      bg: 'linear-gradient(135deg, #7b1818 0%, #f39c12 100%)',
      emoji: '⏳',
    },
    {
      type: 'map',
      title: 'Eden Valley 產區地圖',
      subtitle: 'Barossa Zone 高海拔精品產區，Barossa Valley 東側山坡',
      mapRegion: 'Eden Valley',
    },,

    {
      type: 'content',
      title: 'Eden Valley 產區概況',
      points: [
        '位於 Barossa Valley 東部，海拔 400–500m，氣候比 Barossa 涼爽 5–6°C',
        '土壤：古老石英砂岩、片岩（Schist）、富含礦物質',
        '主力品種：Riesling（白）、Shiraz（紅）',
        'Eden Valley 的 Riesling 以高酸、礦物感、花香聞名於世',
        '重要子產區：Springton、Mount McKenzie、High Eden（最高 550m）',
        '代表酒莊：Henschke（Hill of Grace 酒莊）、Pewsey Vale、Yalumba、Heggies',
      ],
    },
    {
      type: 'content',
      title: 'Eden Valley Riesling 的陳年魔法',
      points: [
        '年輕（1–3年）：淡檸檬色，青蘋果、青檸汁、白花香，銳利高酸',
        '中期（5–8年）：開始出現蜂蜜、蜂蠟、麵包吐司香，酸度仍高',
        '成熟（10–15年）：深金色，烤吐司、柑橘皮、汽油礦油感（petrol），複雜度大增',
        '頂峰（20年以上）：蜂蜜、煙燻、薑、白松露，回味悠長，驚人的平衡感',
        '汽油礦油味（petrol note）來自 TDN（三甲基二氫萘），是 Riesling 典型陳年特徵',
        '低酒精（10.5–11.5%）+ 高酸 = 天然的陳年保護力',
      ],
    },
    {
      type: 'compare',
      title: 'Eden Valley vs Clare Valley Riesling',
      left: {
        label: 'Eden Valley',
        points: [
          '海拔 400–500m，更多礦物感',
          '花香突出（茉莉、白花）',
          '酸度極高，結構緊實',
          '陳年後汽油礦油感更明顯',
          '代表：Pewsey Vale、Yalumba',
        ],
      },
      right: {
        label: 'Clare Valley',
        points: [
          '海拔 400–500m，石灰岩土壤',
          '果香更豐富（青檸、柑橘）',
          '酸度高但更圓潤易飲',
          '陳年後石板礦物感',
          '代表：Grosset、Skillogalee',
        ],
      },
    },
    {
      type: 'quiz',
      question: 'Eden Valley Riesling 陳年後出現的「汽油礦油味」，主要來自哪種化合物？',
      options: ['SO₂（亞硫酸鹽）', 'TDN（三甲基二氫萘）', '酒石酸（Tartaric Acid）', '乙酸乙酯（Ethyl Acetate）'],
      answer: 1,
      explanation: 'TDN（1,1,6-Trimethyl-1,2-dihydronaphthalene）是 Riesling 陳年後的典型芳香化合物，帶來礦油、汽油的複雜香氣，是品質的指標而非缺陷。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Eden Valley：海拔 400–500m，比 Barossa 涼爽，礦物感強',
        'Riesling 陳年 3 階段：清新 → 蜂蜜 → 汽油礦油複雜感',
        '低酒精 + 高酸 = 20+ 年陳年潛力',
        '代表酒莊：Pewsey Vale、Yalumba、Henschke',
      ],
      nextLesson: '下一課：Clare Valley Sub-Region 解析',
    },
  ],

  // A2M1L3 — Clare Valley Sub-Region 解析
  A2M1L3: [
    {
      type: 'cover',
      title: 'Clare Valley Sub-Region 解析',
      subtitle: 'Level 2 · Module 1 · Lesson 3',
      bg: 'linear-gradient(135deg, #7b1818 0%, #27ae60 100%)',
      emoji: '🔍',
    },
    {
      type: 'map',
      title: 'Clare Valley 產區地圖',
      subtitle: 'Mount Lofty Ranges Zone，螺旋蓋革命發源地',
      mapRegion: 'Clare Valley',
    },,

    {
      type: 'content',
      title: 'Clare Valley 的地理結構',
      points: [
        '位於 Adelaide 以北 130km，南北走向的山谷，長約 35km',
        '整體海拔 400–500m，大陸性氣候，晝夜溫差 20°C+',
        '土壤多元：石灰岩（Limestone）、石板（Slate）、頁岩（Shale）、砂質壤土',
        '兩個對比鮮明的核心子產區：Watervale（南部）、Polish Hill River（北部）',
        '其他重要區域：Auburn、Sevenhill、Penwortham、Spring Gully',
        '著名為螺旋蓋先驅：2000 年 14 家酒莊集體轉用螺旋蓋',
      ],
    },
    {
      type: 'compare',
      title: 'Watervale vs Polish Hill River',
      left: {
        label: 'Watervale（南部）',
        points: [
          '土壤：紅色石灰岩、紅土',
          '風格：果香豐富，更圓潤易飲',
          '青檸、柑橘、花香，輕礦物感',
          '陳年後：蜂蜜、吐司',
          '代表：Grosset Polish Hill、Taylor\'s',
        ],
      },
      right: {
        label: 'Polish Hill River（北部）',
        points: [
          '土壤：古老石板、頁岩（Devonian Shale）',
          '風格：清瘦緊實，高酸礦物感更強',
          '石板、白花、青檸皮，更加線性',
          '陳年後：石油礦油感更顯著',
          '代表：Grosset Watervale、Skillogalee',
        ],
      },
    },
    {
      type: 'content',
      title: '螺旋蓋革命的起源地',
      points: [
        '2000 年：Clare Valley 14 家酒莊共同宣布所有 Riesling 改用螺旋蓋（Stelvin）',
        '理由：軟木塞汙染（TCA/cork taint）影響高達 5–8% 的瓶裝酒',
        '核心目的：保護 Riesling 的純淨果香和陳年潛力',
        '當時業界嘩然，傳統派強烈反對，但效果顯著',
        '如今澳洲 95%+ 的葡萄酒使用螺旋蓋，全球跟進',
        '領頭人物：Jeffrey Grosset（Grosset Wines），被稱為螺旋蓋革命之父',
      ],
    },
    {
      type: 'quiz',
      question: '2000 年 Clare Valley 螺旋蓋革命的核心原因是什麼？',
      options: ['螺旋蓋比軟木塞便宜', '避免軟木塞汙染（TCA/cork taint）', '螺旋蓋讓酒陳年更快', '消費者偏好方便開瓶'],
      answer: 1,
      explanation: '軟木塞中的 TCA（三氯苯甲醚）汙染是主因，造成 5–8% 的酒出現黴味/濕紙板味。Clare Valley 14 家酒莊集體轉換螺旋蓋，開啟了全澳的螺旋蓋革命。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Watervale：石灰岩，果香豐富；Polish Hill：石板頁岩，高酸礦物緊實',
        '2000 年：14 家酒莊集體改螺旋蓋，開啟澳洲葡萄酒革命',
        'Jeffrey Grosset：螺旋蓋革命的精神領袖',
      ],
      nextLesson: '下一課：Limestone Coast Zone 全覽',
    },
  ],

  // A2M1L4 — Limestone Coast Zone 全覽
  A2M1L4: [
    {
      type: 'cover',
      title: 'Limestone Coast Zone 全覽',
      subtitle: 'Level 2 · Module 1 · Lesson 4',
      bg: 'linear-gradient(135deg, #7b1818 0%, #95a5a6 100%)',
      emoji: '🪨',
    },
    {
      type: 'map',
      title: 'Limestone Coast Zone 各產區',
      subtitle: 'SA 東南部石灰岩地帶：Coonawarra、Padthaway、Wrattonbully 等六大 Region',
      mapRegion: 'Coonawarra|Padthaway|Wrattonbully|Robe|Mount Benson|Mount Gambier',
    },,

    {
      type: 'content',
      title: 'Limestone Coast Zone 的地理',
      points: [
        '位於南澳東南角，靠近維多利亞州邊界',
        'Zone 包含 8 個 GI Region：Coonawarra、Padthaway、Wrattonbully、Bordertown、Robe、Mount Benson、Mount Gambier、Bordertown',
        '共同特色：石灰岩（Limestone）地質，部分有著名的「Terra Rossa」紅土表層',
        '氣候：凉爽至中等，海洋影響明顯（南極風從南澳海岸吹入）',
        '整體以 Cabernet Sauvignon 為旗艦品種著稱',
      ],
    },
    {
      type: 'content',
      title: '各 Region 特色',
      points: [
        '🍷 Coonawarra：最著名，Terra Rossa 紅土覆石灰岩，Cab Sav 王者（Wynns、Katnook、Penley）',
        '🌾 Padthaway：較平坦溫暖，Chardonnay 與 Shiraz，大型商業化（Hardy\'s Stonehaven）',
        '🪨 Wrattonbully：Coonawarra 北鄰，Terra Rossa 土壤，Cabernet & Merlot 品質新星崛起',
        '🌊 Robe & Mount Benson：臨海涼爽，Pinot Noir、Chardonnay、Riesling 表現出色',
        '❄️ Mount Gambier：最南最冷（41°S），全澳最涼爽產區之一，Pinot Noir 與 Chardonnay',
        '🟫 Bordertown：最新 GI，過渡型氣候，多元品種探索中',
      ],
    },
    {
      type: 'content',
      title: 'Terra Rossa：Coonawarra 的靈魂',
      points: [
        'Terra Rossa = 義大利語「紅土」，僅有約 15km 長、2km 寬的狹長帶狀',
        '結構：表層 30–45cm 紅棕色壤土（鐵質豐富）+ 下方多孔石灰岩',
        '石灰岩能保持水分，夏季乾旱時自然灌溉葡萄根系',
        '排水良好 + 礦物質豐富 = Cabernet Sauvignon 的理想風土',
        '典型風格：黑醋栗、薄荷草本、雪松、細緻單寧、悠長餘韻',
        '著名酒莊：Wynns Coonawarra Estate（創立 1891）、Katnook、Penley Estate、Hollick',
      ],
    },
    {
      type: 'quiz',
      question: 'Coonawarra 最著名的土壤類型「Terra Rossa」的結構特點是？',
      options: ['砂質壤土覆蓋花崗岩', '紅棕色壤土覆蓋多孔石灰岩', '黑色黏土覆蓋玄武岩', '石英砂覆蓋片岩'],
      answer: 1,
      explanation: 'Terra Rossa 的獨特結構為：上層 30-45cm 紅棕色（含鐵）壤土 + 下方多孔石灰岩。石灰岩的保水和排水功能使 Cabernet Sauvignon 在炎熱乾燥夏季仍能維持平衡。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Limestone Coast Zone：南澳東南，8 個 GI，石灰岩地質為共同特徵',
        'Coonawarra：Terra Rossa 紅土，澳洲最著名 Cabernet Sauvignon 產地',
        'Mount Gambier：最南最冷，Pinot Noir 崛起的新星',
      ],
      nextLesson: '下一課：Yarra Valley 上下亞拉差異',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 2：維多利亞深度
  // ════════════════════════════════════════════════════════════

  // A2M2L1 — Yarra Valley 上下亞拉差異
  A2M2L1: [
    {
      type: 'cover',
      title: 'Yarra Valley 上下亞拉差異',
      subtitle: 'Level 2 · Module 2 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a5c2a 0%, #27ae60 100%)',
      emoji: '⬆️',
    },
    {
      type: 'map',
      title: 'Yarra Valley 產區地圖',
      subtitle: 'Victoria Port Phillip Zone，墨爾本東北，澳洲最著名 Pinot Noir 產地',
      mapRegion: 'Yarra Valley',
    },,

    {
      type: 'content',
      title: 'Yarra Valley 概況',
      points: [
        '位於 Melbourne 東方約 60km，澳洲最知名的涼爽氣候產區之一',
        '河谷地形：由東往西走向，Upper（上亞拉）和 Lower（下亞拉）兩部分',
        '氣候：海洋性偏涼爽，受 Yarra Ranges（耶拉山脈）影響，降雨均勻',
        '土壤：下亞拉以灰色砂質壤土為主；上亞拉為淺紅色至灰色壤土、過濾性更好',
        '核心品種：Pinot Noir、Chardonnay（次要：Cabernet Sauvignon、Shiraz）',
        '第一批酒莊：Yering Station（1838），維多利亞最古老酒莊之一',
      ],
    },
    {
      type: 'compare',
      title: 'Upper Yarra vs Lower Yarra',
      left: {
        label: '上亞拉（Upper Yarra）',
        points: [
          '海拔 200–400m，更涼爽',
          '土壤：淺色壤土，排水佳',
          '風格：清瘦緊實，高酸，礦物感',
          'Pinot Noir：草莓、覆盆子、土壤感',
          'Chardonnay：更多線性礦物風格',
          '代表：Coldstream Hills、Seville Estate',
        ],
      },
      right: {
        label: '下亞拉（Lower Yarra）',
        points: [
          '海拔 50–150m，較溫暖',
          '土壤：較重的灰色壤土',
          '風格：酒體較豐滿，果香更濃郁',
          'Cab Sav 和 Shiraz 在此更成熟',
          'Chardonnay：更多奶油、桃子香',
          '代表：Yering Station、De Bortoli（Yarra）',
        ],
      },
    },
    {
      type: 'content',
      title: 'Yarra Valley 的標誌性酒莊',
      points: [
        '🍷 Coldstream Hills：James Halliday 創立，Pinot Noir 先驅，Reserve 等級受高度讚譽',
        '🍾 De Bortoli（Yarra Valley）：Noble One Botrytis Semillon 世界著名甜酒；Yarra Valley 系列品質卓越',
        '🌿 Yering Station：1838 年創立，Shiraz-Viognier 共釀先驅',
        '🏔️ Levantine Hill：新興精品酒莊，複雜型 Cabernet 混釀',
        '🎻 Oakridge：Pinot Noir 與 Chardonnay 精品，Local Vineyard Series 享譽業界',
        '🌱 Mac Forbes：低干預自然酒先驅，按子產區分 Pinot',
      ],
    },
    {
      type: 'quiz',
      question: 'Yarra Valley 的哪個部分（Upper/Lower）以更涼爽、清瘦緊實的 Pinot Noir 著稱？',
      options: ['Lower Yarra（下亞拉）', 'Upper Yarra（上亞拉）', '兩者風格相同', '取決於年份'],
      answer: 1,
      explanation: 'Upper Yarra（上亞拉）海拔 200-400m，比下亞拉涼爽，土壤排水更佳，造就清瘦緊實、高酸礦物感的 Pinot Noir 風格。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '上亞拉：高海拔涼爽，清瘦緊實礦物感；下亞拉：較溫暖豐滿',
        '主力品種：Pinot Noir、Chardonnay',
        '代表酒莊：Coldstream Hills（James Halliday）、De Bortoli、Oakridge',
      ],
      nextLesson: '下一課：King Valley 義大利品種革命',
    },
  ],

  // A2M2L2 — King Valley 義大利品種革命
  A2M2L2: [
    {
      type: 'cover',
      title: 'King Valley 義大利品種革命',
      subtitle: 'Level 2 · Module 2 · Lesson 2',
      bg: 'linear-gradient(135deg, #1a3a7a 0%, #c0392b 100%)',
      emoji: '🇮🇹',
    },
    {
      type: 'map',
      title: 'King Valley 產區地圖',
      subtitle: 'Victoria North East Zone，義大利移民帶來 Prosecco・Sangiovese・Nebbiolo',
      mapRegion: 'King Valley',
    },,

    {
      type: 'content',
      title: 'King Valley 概況',
      points: [
        '位於維多利亞東北部，靠近 Alpine Valleys，海拔 150–860m，多元海拔帶',
        '氣候：高海拔處涼爽（適合白葡萄和氣泡酒），低海拔較溫暖',
        '土壤：棕色壤土、砂質壤土，排水良好',
        '最著名特色：義大利葡萄品種的澳洲搖籃，有大量義大利裔移民後代釀酒人',
        'Brown Brothers 是此區開拓者，King Valley 早在 1850 年代就有義大利移民定居',
        '近年成為「替代品種運動」（Alternative Varieties）的全澳核心',
      ],
    },
    {
      type: 'content',
      title: 'King Valley 的義大利品種',
      points: [
        '🍾 Prosecco（普羅賽克）：Dal Zotto 家族從義大利 Valdobbiadene 移民，開創澳洲 Prosecco；2013 年獲 GI 保護',
        '🍷 Sangiovese：Pizzini Wines 旗艦，Rosso 與 Reserve 展現澳洲版 Chianti 風格',
        '🫐 Nebbiolo：Al-Dente（偏柔和）至豐滿版，Pizzini 出色',
        '🍋 Pinot Grigio：Dal Zotto 與 Brown Brothers 均有出色版本，現已廣植全澳',
        '🌸 Fiano：義大利南部白品種，King Valley 表現鹹鮮礦物感',
        '🍇 Barbera、Dolcetto、Vermentino 也有小批量生產',
      ],
    },
    {
      type: 'content',
      title: 'Prosecco Road — 澳洲版普羅賽克之路',
      points: [
        'King Valley Prosecco Road：類似義大利 Prosecco DOC 的旅遊路線概念',
        '主要酒莊：Dal Zotto（創始者）、Brown Brothers、Pizzini、Sam Miranda',
        '澳洲 Prosecco 風格：清爽、輕盈、蘋果/白桃泡泡感，酒精 11–11.5%',
        'Col Fondo（帶酵母渣、混濁風格）：Dal Zotto 的傳統義大利風格',
        '2010 年代：義大利 Prosecco Consortium 曾要求禁止澳洲使用「Prosecco」名稱，但 WTO 仲裁支持澳洲',
        '現今 King Valley Prosecco 是澳洲氣泡酒市場增長最快的類型之一',
      ],
    },
    {
      type: 'quiz',
      question: 'King Valley 的哪個家族/酒莊是澳洲 Prosecco 的開創者？',
      options: ['Pizzini Wines', 'Brown Brothers', 'Dal Zotto Wines', 'Sam Miranda of King Valley'],
      answer: 2,
      explanation: 'Dal Zotto 家族從義大利 Valdobbiadene 移民至澳洲，在 King Valley 種植 Glera（Prosecco 葡萄），開創澳洲 Prosecco 產業，也保留了義大利傳統的 Col Fondo（有渣）風格。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'King Valley：義大利移民後代，澳洲義大利品種的核心',
        '代表品種：Prosecco、Sangiovese、Nebbiolo、Pinot Grigio、Fiano',
        'Prosecco Road：澳洲版普羅賽克之路，Dal Zotto 是先驅',
      ],
      nextLesson: '下一課：Rutherglen Muscat 四個等級',
    },
  ],

  // A2M2L3 — Rutherglen Muscat 四個等級
  A2M2L3: [
    {
      type: 'cover',
      title: 'Rutherglen Muscat 四個等級',
      subtitle: 'Level 2 · Module 2 · Lesson 3',
      bg: 'linear-gradient(135deg, #5d1a1a 0%, #e67e22 100%)',
      emoji: '🍯',
    },
    {
      type: 'map',
      title: 'Rutherglen 產區地圖',
      subtitle: 'Victoria 東北內陸，全澳最著名的加烈甜酒 Muscat 與 Topaque 產地',
      mapRegion: 'Rutherglen',
    },,

    {
      type: 'content',
      title: 'Rutherglen 產區與 Muscat 傳統',
      points: [
        '位於維多利亞東北部，Murray River 附近，氣候炎熱乾燥（大陸性）',
        '澳洲最著名的加烈甜酒（Fortified Wine）產地，有百年以上的傳統',
        '主力加烈酒：Rutherglen Muscat（用 Muscat Blanc à Petits Grains 品種）',
        '另一款：Rutherglen Topaque（前稱 Tokay，用 Muscadelle 品種）',
        '釀造：過熟葡萄 → 加入中性葡萄烈酒 → Solera 混合陳年系統',
        'Solera 系統：新舊年份混合，確保一致性並增加複雜度',
      ],
    },
    {
      type: 'content',
      title: 'Rutherglen Muscat 四個官方等級（1997 年訂立）',
      points: [
        '🥉 Rutherglen Muscat（入門級）：年輕，橙色，新鮮葡萄乾、太妃糖香，甜蜜易飲',
        '🥈 Classic Rutherglen Muscat：更深琥珀色，更豐富，無花果、橙皮、烘焙感',
        '🥇 Grand Rutherglen Muscat：深紅棕色，極複雜，咖啡、黑巧克力、焦糖、無花果',
        '🏆 Rare Rutherglen Muscat（最高等級）：極少量，深不透光棕色，無比複雜，乾果、雪茄盒、太妃糖、回味永恆',
        '等級越高 = 陳年越久（Rare 可含超過 50 年的老酒）+ 越濃縮',
        '同樣四等級亦適用於 Topaque（Muscadelle 品種）',
      ],
    },
    {
      type: 'content',
      title: '代表酒莊與服侍方式',
      points: [
        '🏅 Chambers Rosewood：傳說等級，Rare Rutherglen Muscat 被 Jancis Robinson 評為「全球最偉大加烈酒之一」',
        '🍇 Campbells Wines：品質穩定，各等級均佳，是入門首選',
        '🌟 All Saints Estate：歷史悠久（1864 年），莊園建築宏偉，旅遊勝地',
        '🎩 Morris Wines：老牌名廠，Rare Muscat 有百年老酒混入',
        '服侍溫度：略涼（14–16°C），使用小型甜酒杯（Sherry 型）',
        '搭配：藍紋乳酪、核桃 tart、黑巧克力、香草冰淇淋',
      ],
    },
    {
      type: 'quiz',
      question: 'Rutherglen Muscat 四個等級中，哪個是最高等級，且可能含有超過 50 年的老酒混合？',
      options: ['Grand Rutherglen Muscat', 'Rare Rutherglen Muscat', 'Classic Rutherglen Muscat', 'Rutherglen Muscat'],
      answer: 1,
      explanation: 'Rare Rutherglen Muscat 是最高等級，透過 Solera 系統可能含有 50 年以上的老酒，顏色極深，風味無比複雜（焦糖、咖啡、黑巧克力、無花果乾），是澳洲最獨特的傳統加烈甜酒。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '四等級：Rutherglen → Classic → Grand → Rare（越老越濃縮複雜）',
        '品種：Muscat（Muscat Blanc à Petits Grains）；另有 Topaque（Muscadelle）',
        'Chambers Rosewood：Rare 等級被評為全球最偉大加烈酒之一',
      ],
      nextLesson: '下一課：Grampians Sparkling Shiraz',
    },
  ],

  // A2M2L4 — Grampians Sparkling Shiraz
  A2M2L4: [
    {
      type: 'cover',
      title: 'Grampians Sparkling Shiraz',
      subtitle: 'Level 2 · Module 2 · Lesson 4',
      bg: 'linear-gradient(135deg, #2c0a5e 0%, #c0392b 100%)',
      emoji: '✨',
    },
    {
      type: 'map',
      title: 'Grampians 產區地圖',
      subtitle: 'Victoria Western Victoria Zone，傳統氣泡紅酒 Sparkling Shiraz 發源地',
      mapRegion: 'Grampians',
    },,

    {
      type: 'content',
      title: 'Grampians 產區概況',
      points: [
        '位於維多利亞西部，Grampians National Park 山脈下，海拔 160–360m',
        '氣候：大陸性，涼爽至中等，年降雨量 400–600mm，乾燥',
        '土壤：砂質至壤土，砂岩基岩，特有礦物風格',
        '最著名子產區：Great Western（Great Western 隧道窖洞聞名於世）',
        '核心品種：Shiraz（紅）、Riesling（白）、Grüner Veltliner（近年引入）',
        '代表酒莊：Seppelt、Mount Langi Ghiran、Best\'s Wines（1866 年創立）',
      ],
    },
    {
      type: 'content',
      title: '澳洲氣泡紅酒的發源地',
      points: [
        'Great Western 的 Seppelt 酒莊：在 1870 年代就用傳統法釀造氣泡紅酒',
        '地下隧道窖洞（Underground Cellars）：由淘金礦工手挖，深入地下，絕佳陳年環境',
        '澳洲傳統：氣泡紅酒（Sparkling Shiraz/Sparkling Red）是澳洲獨有傳統，全球罕見',
        '風格：深紫紅色，黑莓、李子、黑巧克力、皮革，细腻氣泡，酸度支撐，餘韻帶甘甜',
        '甜度：通常偏甜至中甜（殘糖 15–40g/L），適合搭配烤肉',
        '頂級代表：Seppelt Show Sparkling Shiraz（年份陳年型）',
      ],
    },
    {
      type: 'content',
      title: 'Mount Langi Ghiran：Grampians 靜態 Shiraz 先驅',
      points: [
        '位於 Grampians 山腳下，海拔 260–360m，涼爽大陸性氣候',
        'Langi Shiraz：澳洲最著名的涼爽氣候 Shiraz 之一',
        '風格：胡椒（黑胡椒、白胡椒）、紫羅蘭花香、藍莓，比 Barossa 更清瘦緊實',
        '胡椒味來自 Rotundone（輪旋酮）這種化合物，涼爽氣候下保留更多',
        '也種植 Pinot Gris、Riesling，展現涼爽白葡萄潛力',
        'Billi Billi（次級品牌）：平易近人版本，入門 Grampians Shiraz',
      ],
    },
    {
      type: 'quiz',
      question: '澳洲氣泡紅酒（Sparkling Shiraz）的傳統發源地是哪個產區？',
      options: ['Barossa Valley', 'Grampians / Great Western', 'Yarra Valley', 'Hunter Valley'],
      answer: 1,
      explanation: 'Grampians 的 Great Western（Seppelt 酒莊）早在 1870 年代就開始用傳統法釀造氣泡紅酒，是澳洲獨特傳統氣泡紅酒的發源地。地下隧道窖洞由淘金礦工手挖而成。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Grampians：維多利亞西部，涼爽大陸性，胡椒感 Shiraz 著稱',
        '氣泡紅酒（Sparkling Shiraz）：澳洲獨有傳統，Seppelt/Great Western 是發源地',
        'Mount Langi Ghiran：胡椒、紫羅蘭，全澳最具個性涼爽 Shiraz 之一',
      ],
      nextLesson: '下一課：Hunter Semillon 年份縱向比較',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 3：NSW 深度
  // ════════════════════════════════════════════════════════════

  // A2M3L1 — Hunter Semillon 年份縱向比較
  A2M3L1: [
    {
      type: 'cover',
      title: 'Hunter Semillon 年份縱向比較',
      subtitle: 'Level 2 · Module 3 · Lesson 1',
      bg: 'linear-gradient(135deg, #4a3000 0%, #e67e22 100%)',
      emoji: '📅',
    },
    {
      type: 'map',
      title: 'Hunter Valley 產區地圖',
      subtitle: 'NSW 最老酒區，以低酒精 Semillon 年份縱向陳年著稱',
      mapRegion: 'Hunter Valley',
    },,

    {
      type: 'content',
      title: 'Hunter Valley Semillon 的傳奇地位',
      points: [
        '全球最獨特的 Semillon 風格，其他地區無法複製',
        '採收時間極早（一月底），酒精低（10–11.5%），完全不用橡木桶',
        '年輕時：幾乎中性，淡檸檬色，青草、萊姆皮、礦物，高酸低酒精',
        '陳年潛力：10–20 年甚至更長，是白葡萄酒中的奇蹟',
        'Hunter Valley：澳洲最古老的連續生產葡萄酒地區（1820 年代開始）',
        '兩個核心子區域：Lower Hunter（較溫暖、歷史核心）、Upper Hunter（更涼爽）',
      ],
    },
    {
      type: 'compare',
      title: 'Hunter Semillon：年份縱向風格演變',
      left: {
        label: '年輕（1–5年）',
        points: [
          '顏色：淡檸檬黃，幾乎透明',
          '香氣：青草、萊姆汁、礦石',
          '口感：清爽，近乎中性，高酸',
          '酒體：極輕盈',
          '狀態：不討好但潛力無限',
        ],
      },
      right: {
        label: '成熟（10–20年）',
        points: [
          '顏色：深金色、琥珀色',
          '香氣：烤吐司、蜂蜜、蜂蠟、薑黃',
          '口感：豐滿複雜，蜂蜜感明顯',
          '酒體：中等至豐滿',
          '狀態：全然不同，驚人轉化',
        ],
      },
    },
    {
      type: 'content',
      title: '代表酒莊與重要年份',
      points: [
        '🏆 Tyrrell\'s（泰利爾）：Vat 1 Semillon，澳洲最著名 Semillon，可陳年 30+ 年',
        '🌿 Brokenwood：ILR Reserve Semillon，品質卓越',
        '🍾 McWilliam\'s：Mount Pleasant Elizabeth Semillon，性價比極高',
        '📅 優秀年份：2007（絕佳年份）、2011（涼爽精緻）、2014（豐滿）、2017（平衡）、2021（新興）',
        '🌧️ Hunter Valley 氣候挑戰：夏季潮濕多雨，霉菌壓力大，是最考驗釀酒人的產區',
        '秘訣：早採收避開雨季，保留高酸和低酒精是關鍵',
      ],
    },
    {
      type: 'quiz',
      question: 'Hunter Valley Semillon 最顯著的特點是什麼？',
      options: ['高酒精（14%+）、重橡木桶', '低酒精（10–11%）、無橡木桶、超強陳年力', '甜型，殘糖高', '早喝，不需陳年'],
      answer: 1,
      explanation: 'Hunter Semillon 的核心特點是：早採收（低酒精 10-11%）+ 無橡木桶 + 不討好的年輕期 → 陳年 10-20 年後轉化為蜂蜜、吐司、複雜感，是白葡萄酒中最驚人的陳年轉化之一。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Hunter Semillon：低酒精（10-11%）、無橡木桶、高酸，年輕近中性',
        '陳年 10-20 年：蜂蜜、吐司、蜂蠟，驚人轉化',
        'Tyrrell\'s Vat 1：澳洲最著名 Semillon，可陳 30+ 年',
      ],
      nextLesson: '下一課：Canberra District 精品小產區',
    },
  ],

  // A2M3L2 — Canberra District 精品小產區
  A2M3L2: [
    {
      type: 'cover',
      title: 'Canberra District 精品小產區',
      subtitle: 'Level 2 · Module 3 · Lesson 2',
      bg: 'linear-gradient(135deg, #0a3d62 0%, #1abc9c 100%)',
      emoji: '🏔️',
    },
    {
      type: 'map',
      title: 'Canberra District 產區地圖',
      subtitle: 'Southern New South Wales Zone，海拔 500–800m，Shiraz・Riesling 精品小產區',
      mapRegion: 'Canberra District',
    },,

    {
      type: 'content',
      title: 'Canberra District 概況',
      points: [
        '位於澳洲首都特區（ACT）附近的新南威爾斯鄉村，海拔 500–900m',
        '氣候：冷涼大陸性，夏季暖熱但夜晚涼爽，冬季寒冷（有時結霜）',
        '土壤：花崗岩基底，石英砂質至壤土，礦物質豐富',
        '僅約 40+ 家小型精品酒莊，多為週末開放的「Cellar Door」',
        '核心品種：Shiraz、Riesling、Chardonnay（近年也有 Pinot Noir）',
        '在地哲學：多為小批量手工釀造，重視風土表達',
      ],
    },
    {
      type: 'content',
      title: 'Clonakilla：Canberra 的傳奇',
      points: [
        '創立：1971 年，John Kirk（科學家）於 Murrumbateman 創立',
        '現任：兒子 Tim Kirk 管理，被譽為澳洲最有影響力的釀酒人之一',
        '靈感來源：法國隆河 Côte-Rôtie（Syrah + Viognier 共釀）',
        'Clonakilla Shiraz-Viognier：澳洲最著名的共釀型態，加入 5–10% Viognier，增添花香優雅感',
        '評分：連續多年獲 James Halliday 99/100 分，James Suckling 等 97–99 分',
        '影響力：澳洲多家酒莊仿效 Shiraz-Viognier 共釀風格',
      ],
    },
    {
      type: 'content',
      title: '其他代表酒莊',
      points: [
        '🌿 Helm Wines：Ken Helm 是 Riesling 先驅，「Helm Riesling」是 Canberra 最知名白酒',
        '🌱 Lark Hill：海拔 860m，生物動力農法，Chardonnay 和 Pinot 出色',
        '🏔️ Eden Road：跨越 Canberra 和 Tumbarumba 的精品酒莊，高評分 Pinot Noir',
        '🎩 Capital Wines：Shiraz 和 Riesling 各具特色',
        '特色：Canberra District 產量小但品質整體高，是「精品愛好者」的秘密寶藏',
      ],
    },
    {
      type: 'quiz',
      question: 'Canberra District 的哪家酒莊以 Shiraz-Viognier 共釀著稱，並被視為澳洲最頂尖的酒莊之一？',
      options: ['Helm Wines', 'Lark Hill Winery', 'Clonakilla', 'Eden Road Wines'],
      answer: 2,
      explanation: 'Clonakilla 的 Shiraz-Viognier 是澳洲最著名的 Rhône 風格共釀，靈感來自法國 Côte-Rôtie，連年獲得 99-100 分高評，Tim Kirk 是澳洲最具影響力的釀酒人之一。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Canberra District：海拔 500-900m，冷涼大陸性，40+ 精品小酒莊',
        'Clonakilla：Shiraz-Viognier 共釀，澳洲最著名隆河風格',
        'Helm：Riesling 先驅；Lark Hill：生物動力農法精品',
      ],
      nextLesson: '下一課：Orange & Mudgee 高海拔比較',
    },
  ],

  // A2M3L3 — Orange & Mudgee 高海拔比較
  A2M3L3: [
    {
      type: 'cover',
      title: 'Orange & Mudgee 高海拔比較',
      subtitle: 'Level 2 · Module 3 · Lesson 3',
      bg: 'linear-gradient(135deg, #783200 0%, #f39c12 100%)',
      emoji: '🏔️',
    },
    {
      type: 'map',
      title: 'Orange & Mudgee 高海拔產區地圖',
      subtitle: 'NSW Central Ranges Zone，Orange（900m）vs Mudgee（500m）兩大高海拔對比',
      mapRegion: 'Orange|Mudgee',
    },,

    {
      type: 'content',
      title: 'Orange GI 概況',
      points: [
        '位於新南威爾斯中西部，Great Dividing Range 西坡，海拔 600–1,100m',
        '澳洲最高海拔的重要葡萄酒產區，以高海拔帶來的涼爽氣候聞名',
        '土壤：火山玄武岩（Basalt），富含鐵質和礦物質，部分有石英砂土',
        '氣候：涼爽大陸性，夏季溫和（最高不超過 30°C），冬季可降雪',
        '核心品種：Chardonnay、Sauvignon Blanc、Cabernet Sauvignon、Merlot、Pinot Noir（高海拔）',
        '代表酒莊：Brangayne、Bloodwood、Canobolas-Smith、Philip Shaw',
      ],
    },
    {
      type: 'compare',
      title: 'Orange vs Mudgee：高海拔對比',
      left: {
        label: 'Orange（橙市）',
        points: [
          '海拔：600–1,100m（澳洲最高）',
          '土壤：玄武岩，礦物豐富',
          '氣候：涼爽，夏日清爽',
          '風格：清爽酸度，礦物感，精緻',
          '強項：Chardonnay、Sauv Blanc、Pinot Noir',
          '獨特：可能降雪，全澳最涼爽產區之一',
        ],
      },
      right: {
        label: 'Mudgee（馬吉市）',
        points: [
          '海拔：450–550m（較低）',
          '土壤：砂質至壤土，古老紅土',
          '氣候：大陸性，比 Orange 更熱燥',
          '風格：飽滿豐厚，果香濃郁',
          '強項：Cabernet、Shiraz、Chardonnay',
          '歷史：釀酒史 1858 年，比 Orange 更悠久',
        ],
      },
    },
    {
      type: 'content',
      title: 'Mudgee：傳統與現代並存',
      points: [
        '位於 Orange 北方，中央桌地（Central Tablelands），海拔較 Orange 低',
        '釀酒歷史：1858 年德國移民 Friedrich Bucholz 種下第一批葡萄',
        '土壤：古老砂石、紅色壤土，排水佳',
        '傳統品種：Cabernet Sauvignon、Shiraz、Chardonnay 是主力',
        '風格：濃郁飽滿的果香，比涼爽產區更豐滿，橡木桶運用較多',
        '代表酒莊：Lowe Wines（有機）、Robert Stein、Huntington Estate（老藤 Cabernet）',
      ],
    },
    {
      type: 'quiz',
      question: 'Orange GI 的土壤主要是哪種類型，賦予葡萄酒豐富的礦物感？',
      options: ['石灰岩（Terra Rossa）', '火山玄武岩（Basalt）', '花崗岩砂土', '石板頁岩（Shale）'],
      answer: 1,
      explanation: 'Orange 的土壤以火山玄武岩（Basalt）為主，富含鐵質和礦物質，加上 600-1100m 的高海拔涼爽氣候，造就礦物感豐富、酸度清新的葡萄酒風格，尤其 Chardonnay 和 Sauvignon Blanc 表現出色。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Orange：600-1100m，玄武岩土，涼爽礦物感，Chardonnay/Pinot Noir 精品',
        'Mudgee：450-550m，較溫暖豐滿，Cabernet/Shiraz 傳統強項',
        '兩者都在 Great Dividing Range 西坡，但海拔差異造就截然不同風格',
      ],
      nextLesson: '下一課：Margaret River 子產區解析',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 4：西澳深度
  // ════════════════════════════════════════════════════════════

  // A2M4L1 — Margaret River 子產區解析
  A2M4L1: [
    {
      type: 'cover',
      title: 'Margaret River 子產區解析',
      subtitle: 'Level 2 · Module 4 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a3d5c 0%, #27ae60 100%)',
      emoji: '🗺',
    },
    {
      type: 'map',
      title: 'Margaret River 產區地圖',
      subtitle: 'WA 西南端，Perth 南方 280km，三面環海地中海氣候',
      mapRegion: 'Margaret River',
    },,

    {
      type: 'content',
      title: 'Margaret River 的地理獨特性',
      points: [
        '位於西澳西南角，印度洋和南大洋環抱的半島，形成獨特的海洋性氣候',
        '南北走向，長約 100km，從 Yallingup（北）到 Karridale（南）',
        '土壤：Karri 森林下的紅色壤土（Laterite）、鉀素豐富的礫石黏土（Ironstone gravel）',
        '氣候：地中海型，海洋影響顯著，夏季溫和乾燥，冬季多雨',
        '第一個大學研究推動的產區：1965 年西澳大學博士研究論文推薦 Margaret River',
        '第一批酒莊：Vasse Felix（1967）、Moss Wood（1969）',
      ],
    },
    {
      type: 'content',
      title: '南北子產區的差異',
      points: [
        '🔥 Yallingup（北部，最溫暖）：更豐滿大膽，適合 Cabernet Sauvignon、Shiraz',
        '🍷 Wilyabrup（中北部，「心臟地帶」）：最著名，海拔略高，Cabernet 最精緻，Cullen、Moss Wood 在此',
        '🌿 Carbunup（中部）：較清爽，Chardonnay 和白葡萄表現出色',
        '🌊 Wallcliffe（中南部）：Leeuwin Estate 在此，頂級 Chardonnay',
        '❄️ Karridale（最南部，最涼爽）：受南大洋影響，Chardonnay、Pinot Noir 潛力',
        '整體：從北往南，氣候越來越涼爽，白葡萄潛力越強',
      ],
    },
    {
      type: 'content',
      title: '代表性酒款風格',
      points: [
        '🍷 Cabernet Sauvignon：黑醋栗、雪松、煙草、薄荷，細緻單寧，陳年 15–25 年',
        '🍾 Chardonnay：葡萄柚、白桃、奶油、礦物，優雅而非濃重，Burgundy 可比擬',
        '🌿 Sémillon-Sauvignon Blanc（SBS）：清爽草本、柑橘、百香果，是澳洲 SBS 最佳產地',
        '代表酒莊：Cullen（Biodynamic，Diana Madeline Cabernet）、Moss Wood、Leeuwin Art Series、Vasse Felix、Cape Mentelle、Voyager Estate',
        '服侍：Cabernet 適合 16–18°C；Chardonnay 10–12°C',
      ],
    },
    {
      type: 'quiz',
      question: 'Margaret River 哪個子產區被稱為「心臟地帶」，以最精緻的 Cabernet Sauvignon 著稱？',
      options: ['Yallingup', 'Karridale', 'Wilyabrup', 'Wallcliffe'],
      answer: 2,
      explanation: 'Wilyabrup 是 Margaret River 的「心臟地帶」（Heartland），海拔略高，鐵石礫土排水佳，產出最精緻複雜的 Cabernet Sauvignon。Cullen Wines 和 Moss Wood 都位於此。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Margaret River：由北（Yallingup 溫暖）到南（Karridale 涼爽）',
        'Wilyabrup：心臟地帶，頂級 Cabernet；Wallcliffe：Leeuwin 頂級 Chardonnay',
        '強項：Cabernet Sauvignon、Chardonnay、SBS（Sémillon-Sauvignon Blanc）',
      ],
      nextLesson: '下一課：Great Southern 五個 Region',
    },
  ],

  // A2M4L2 — Great Southern 五個 Region
  A2M4L2: [
    {
      type: 'cover',
      title: 'Great Southern 五個 Region',
      subtitle: 'Level 2 · Module 4 · Lesson 2',
      bg: 'linear-gradient(135deg, #1a4d1a 0%, #1a6b9b 100%)',
      emoji: '5️⃣',
    },
    {
      type: 'map',
      title: 'Great Southern 五大 Region 地圖',
      subtitle: 'WA 最大 Zone：Albany・Denmark・Frankland River・Mount Barker・Porongurup',
      mapRegion: 'Albany|Denmark|Frankland River|Mount Barker|Porongurup',
    },,

    {
      type: 'content',
      title: 'Great Southern Zone 概況',
      points: [
        '位於西澳最南端，是澳洲面積最大的葡萄酒 Zone（約 100,000 平方公里）',
        '氣候：涼爽海洋性至大陸性，受南大洋強烈影響，是西澳最涼爽的葡萄酒區域',
        '五個獨立 GI Region：Albany、Denmark、Frankland River、Mount Barker、Porongurup',
        '共同特色：涼爽氣候、高酸葡萄酒、Riesling 和 Shiraz 是主力',
        '面積廣大但酒莊稀少，多為小型精品操作',
      ],
    },
    {
      type: 'content',
      title: '五個 Region 特色一覽',
      points: [
        '🌊 Albany：最南沿海，極涼爽，Pinot Noir、Chardonnay、Riesling，細緻精品風格',
        '🌿 Denmark：涼爽海洋性，Chardonnay 與 Pinot Noir 表現出色，酒莊多為小型家庭式',
        '🌾 Frankland River：內陸，大陸性氣候，Riesling（石板礦物感）和 Cabernet 代表作，Alkoomi 老藤',
        '🏔️ Mount Barker：最重要的 Region，氣候平衡，Riesling 和 Shiraz 並重，Plantagenet 是代表',
        '⛰️ Porongurup：范廷嶺（Stirling Range）保護，最小但最獨特，花崗岩土壤，精品 Riesling 和 Pinot Noir',
        '整體核心品種：Riesling（線性礦物）、Shiraz（胡椒感）、Cabernet、Chardonnay',
      ],
    },
    {
      type: 'content',
      title: '代表酒莊與旗艦酒款',
      points: [
        '🏔️ Plantagenet Wines（Mount Barker）：Great Southern 最古老的酒莊，Shiraz 和 Riesling 先驅',
        '🌿 Alkoomi（Frankland River）：有機葡萄種植，Riesling 和 Shiraz 老藤',
        '⛰️ Castle Rock Estate（Porongurup）：花崗岩山丘上，精品 Riesling 和 Pinot Noir',
        '🌊 Forest Hill（Mount Barker）：西澳最古老的商業葡萄樹之一，保留 1960 年代老藤',
        '🍋 Ferngrove（Frankland River）：Riesling 和 Chardonnay 性價比極高',
      ],
    },
    {
      type: 'quiz',
      question: 'Great Southern 的哪個 Region 以花崗岩土壤上的精品 Riesling 和 Pinot Noir 著稱，是五個中最小但最獨特的？',
      options: ['Albany', 'Frankland River', 'Mount Barker', 'Porongurup'],
      answer: 3,
      explanation: 'Porongurup 是 Great Southern 最小的 Region，位於 Stirling Range 山脈的花崗岩丘陵上，有天然防護，出產非常精緻獨特的 Riesling 和 Pinot Noir，是西澳的隱藏寶石。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '五個 Region：Albany、Denmark、Frankland River、Mount Barker、Porongurup',
        'Mount Barker：最大最重要；Porongurup：最小最獨特（花崗岩）',
        'Great Southern 核心：涼爽氣候、高酸 Riesling、胡椒感 Shiraz',
      ],
      nextLesson: '下一課：Frankland River Riesling 風格',
    },
  ],

  // A2M4L3 — Frankland River Riesling 風格
  A2M4L3: [
    {
      type: 'cover',
      title: 'Frankland River Riesling 風格',
      subtitle: 'Level 2 · Module 4 · Lesson 3',
      bg: 'linear-gradient(135deg, #1a3d5c 0%, #f39c12 100%)',
      emoji: '🍋',
    },
    {
      type: 'map',
      title: 'Frankland River 產區地圖',
      subtitle: 'Great Southern Zone 最內陸的 Region，大陸型氣候造就濃郁 Riesling',
      mapRegion: 'Frankland River',
    },,

    {
      type: 'content',
      title: 'Frankland River 的地理與氣候',
      points: [
        '位於 Great Southern Zone 的西北部，距海較遠，更具大陸性氣候特徵',
        '海拔：200–320m，地形平緩，與其他 Great Southern Region 相比夏季更熱',
        '土壤：古老片岩（Schist）、石板（Slate）和砂質壤土，礦物感豐富',
        '氣候特點：晝夜溫差大（可達 20°C+），保留天然酸度',
        '降雨：主要集中冬春，夏季相對乾燥，有利葡萄集中成熟',
        '葡萄種植歷史：1968 年 Alkoomi Wines 創始人 Merv Lange 在此種下第一批商業葡萄',
      ],
    },
    {
      type: 'content',
      title: 'Frankland River Riesling 的獨特風格',
      points: [
        '風格定位：比 Clare Valley 更熱帶果香，比 Eden Valley 更豐滿，但仍保持高酸線性感',
        '年輕（1–3年）：萊姆汁、百香果、茉莉花，清爽多酸',
        '中期（5–8年）：開始出現蜂蜜、薑，果香演變為柑橘皮',
        '成熟（10年以上）：礦油感、烤吐司、百花蜜，複雜度高',
        '酸度：高但略比 Clare Valley 柔和，更易年輕飲用',
        '土壤影響：石板頁岩帶來獨特礦物/石板感，是與 Clare、Eden 風格的差異所在',
      ],
    },
    {
      type: 'content',
      title: '代表酒莊',
      points: [
        '🌿 Alkoomi Wines：Frankland River 先驅（1968 年），Old Vine Riesling 從 35 年老藤採摘，是 Frankland River Riesling 的標竿',
        '🌾 Ferngrove Wines：最大酒莊，Riesling 與 Chardonnay 品質穩定，性價比高',
        '🏔️ Frankland Estate：精品小型酒莊，Isolation Ridge Riesling 評分極高，強調石板礦物感',
        '🍇 Westfield/Houghton：大型酒莊但有優質 Frankland River 葡萄來源',
        '品飲建議：Frankland River Riesling 是進入 WA Riesling 的絕佳入門選擇',
      ],
    },
    {
      type: 'quiz',
      question: 'Frankland River Riesling 相較於 Clare Valley 和 Eden Valley，最顯著的風格差異是？',
      options: ['完全沒有礦物感', '更多熱帶果香（百香果、萊姆），比 Clare/Eden 更豐滿易飲', '酒精更高（14%+）', '完全無陳年潛力'],
      answer: 1,
      explanation: 'Frankland River 的 Riesling 比 Clare Valley 和 Eden Valley 更多熱帶果香（百香果、萊姆汁），石板礦物感獨特，但整體更豐滿易飲，年輕時就非常討喜，同時仍具 10+ 年陳年潛力。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Frankland River：WA 內陸，石板土壤，大陸性氣候，晝夜溫差大',
        'Riesling 風格：更多熱帶果香，比 Clare/Eden 豐滿易飲，石板礦物感',
        'Alkoomi：1968 年先驅；Frankland Estate：精品石板礦物感標竿',
      ],
      nextLesson: '下一課：Tasmania 北 vs 南比較',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 5 補完
  // ════════════════════════════════════════════════════════════

  // A2M5L2 — Tasmania 北 vs 南比較
  A2M5L2: [
    {
      type: 'cover',
      title: 'Tasmania 北 vs 南比較',
      subtitle: 'Level 2 · Module 5 · Lesson 2',
      bg: 'linear-gradient(135deg, #27ae60 0%, #2980b9 100%)',
      emoji: '⬆️',
    },
    {
      type: 'map',
      title: 'Tasmania 北 vs 南分布地圖',
      subtitle: '北部（Tamar Valley）vs 南部（Coal River Valley・Huon Valley）微氣候差異',
      mapRegion: 'TAS',
    },,

    {
      type: 'compare',
      title: '塔斯馬尼亞北部 vs 南部',
      left: {
        label: '北部（Tamar Valley + Pipers River）',
        points: [
          '受山谷地形保護，比南部稍暖',
          '主要品種：Pinot Noir、Chardonnay、Riesling',
          'Pipers River：澳洲氣泡酒的搖籃',
          '代表：Pipers Brook、Jansz',
          '氣泡酒基底：高酸+高貴品種的完美搭配',
          '陸地性影響更多，夏季較明確',
        ],
      },
      right: {
        label: '南部（Derwent / Huon / Coal River）',
        points: [
          '更接近南極，更受海洋影響',
          '主要品種：Pinot Noir、Chardonnay',
          'Coal River Valley：陽光充足的河谷，偏暖',
          '代表：Moorilla、Tolpuddle、Pooley',
          '靜態葡萄酒精品更集中在此',
          '更多礦物感、更緊實的結構',
        ],
      },
    },
    {
      type: 'content',
      title: '塔斯馬尼亞的頂尖酒莊',
      points: [
        '🥂 House of Arras（北部 / East Coast）：澳洲最頂級氣泡酒，多次贏得全球最佳氣泡酒大獎',
        '🥂 Jansz（Pipers River）：規模最大的 TAS 氣泡酒，品質一致，物有所值',
        '🍷 Tolpuddle Vineyard（Coal River）：Shaw + Smith 旗下精品，Chardonnay 極細膩',
        '🌿 Moorilla（Derwent Valley）：MONA 美術館附屬酒莊，小批量精品，Muse 系列聲譽卓著',
        '🏔️ Pooley Wines（Coal River）：家族酒莊，Pinot Noir 和 Riesling 頂尖',
        '🌱 Stefano Lubiana（Derwent Valley）：生物動力農法，氣泡酒和靜態酒均出色',
      ],
    },
    {
      type: 'content',
      title: '國際資本進入塔斯馬尼亞',
      points: [
        '近年大型法國及國際酒廠開始投資 TAS，認可其頂級氣泡酒潛力',
        'Louis Roederer（Champagne）：已在 TAS 購入葡萄來源',
        'Moët & Chandon：在 TAS 評估氣泡酒基底葡萄',
        'Bay of Fires（Brown Family）：主打 TAS 涼爽風格',
        '原因：全球氣候暖化，香檳區面臨挑戰，TAS 的涼爽氣候成為優質替代',
        '預期：未來 10–20 年，TAS 的國際知名度將大幅提升',
      ],
    },
    {
      type: 'quiz',
      question: 'Tasmania 哪個氣泡酒品牌多次贏得全球最佳氣泡酒大獎，被視為澳洲頂級氣泡酒代表？',
      options: ['Jansz', 'House of Arras', 'Pipers Brook', 'Stefano Lubiana'],
      answer: 1,
      explanation: 'House of Arras 是澳洲公認最頂級的氣泡酒品牌，多次在全球氣泡酒競賽中獲得最高榮譽，代表了 Tasmania 涼爽氣候和長時間酒泥陳年所能達到的頂峰。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '北部（Tamar/Pipers）：稍暖，氣泡酒搖籃；南部（Derwent/Coal River）：更冷，靜態精品',
        'House of Arras：全澳最頂級氣泡酒；Tolpuddle：頂級 Chardonnay',
        '法國大廠（Roederer、LVMH）已注目 TAS，未來潛力無限',
      ],
      nextLesson: '下一課：Granite Belt 昆士蘭獨特性',
    },
  ],

  // A2M5L3 — Granite Belt 昆士蘭獨特性
  A2M5L3: [
    {
      type: 'cover',
      title: 'Granite Belt 昆士蘭獨特性',
      subtitle: 'Level 2 · Module 5 · Lesson 3',
      bg: 'linear-gradient(135deg, #5d1a5d 0%, #e67e22 100%)',
      emoji: '🪨',
    },
    {
      type: 'map',
      title: 'Granite Belt 產區地圖',
      subtitle: 'Queensland 唯一精品產區，海拔 800–1000m，「Strange Bird」替代品種實驗場',
      mapRegion: 'Granite Belt',
    },,

    {
      type: 'content',
      title: 'Granite Belt 概況',
      points: [
        '位於昆士蘭州最南端，靠近新南威爾斯邊境，Stanthorpe 鎮為中心',
        '海拔：800–1,100m，是全澳最高海拔的主要葡萄酒產區之一',
        '土壤：花崗岩（Granite）分解的砂質土，排水極佳，低肥力',
        '氣候：「大陸性 + 高海拔」，夏季暖熱但夜晚涼爽，冬季可能有霜凍，四季分明',
        'Queensland 的絕大多數葡萄園都位於此，昆州 90%+ 的葡萄酒來自 Granite Belt',
        '面積小但生態豐富：「石頭農場（stone patch farming）」是當地農業傳統',
      ],
    },
    {
      type: 'content',
      title: '「Strange Bird」概念與替代品種',
      points: [
        'Granite Belt 以擁抱「替代品種（Alternative Varieties）」著稱，是全澳領先',
        '🦅 「Strange Bird」是 Wine Queenslandmark 推出的品牌，專門推廣非主流品種',
        '品種多元：Viognier、Tempranillo、Fiano、Vermentino、Lagrein、Primitivo（Zinfandel）',
        '氣候相似度：花崗岩土壤 + 晝夜溫差 + 適中降雨，類似西班牙北部或義大利山區',
        '傳統品種：Cabernet Sauvignon、Shiraz 仍是主力，但「Strange Bird」賦予新識別度',
        '釀酒人態度：實驗精神強烈，多家小酒莊嘗試全球各地品種',
      ],
    },
    {
      type: 'content',
      title: '代表酒莊',
      points: [
        '🌹 Symphony Hill Wines：Granite Belt 精品代表，Viognier 和 Tempranillo 出色，國際評分高',
        '🏔️ Ballandean Estate（Sundown Valley）：Queensland 最古老家族酒莊（1932 年），傳統與創新並存',
        '🍷 Sirromet Wines：Queensland 最大酒莊，多產區跨越，親民易飲',
        '🌿 Boireann Winery：精品有機，Granite Belt 自然酒代表',
        '🍇 Robert Channon Wines：Verdelho（白）和 Pinot Gris 特色',
        '旅遊亮點：Stanthorpe 鎮葡萄酒旅遊，採果季（三月）最熱鬧',
      ],
    },
    {
      type: 'quiz',
      question: 'Granite Belt 的「Strange Bird」品牌主要是為了推廣什麼？',
      options: ['傳統 Shiraz 和 Cabernet', '非主流替代品種（Alternative Varieties）如 Viognier、Tempranillo', '昆士蘭傳統加烈酒', '有機葡萄種植認證'],
      answer: 1,
      explanation: 'Wine Queenslandmark 推出「Strange Bird」品牌，專門推廣 Granite Belt 種植的非主流替代品種，如 Viognier、Tempranillo、Fiano、Vermentino 等，強調此產區的實驗精神和多元風格。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Granite Belt：昆州最南，800-1100m，花崗岩砂土，高海拔大陸性',
        '「Strange Bird」：非主流替代品種運動的全澳領頭羊',
        'Symphony Hill：精品代表；Ballandean Estate：最古老家族酒莊',
      ],
      nextLesson: '下一課：螺旋蓋革命與保存技術',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 2  ──  Module 6：澳洲釀酒工藝
  // ════════════════════════════════════════════════════════════

  // A2M6L1 — 螺旋蓋革命與保存技術
  A2M6L1: [
    {
      type: 'cover',
      title: '螺旋蓋革命與保存技術',
      subtitle: 'Level 2 · Module 6 · Lesson 1',
      bg: 'linear-gradient(135deg, #2c3e50 0%, #1abc9c 100%)',
      emoji: '🔩',
    },
    {
      type: 'content',
      title: '軟木塞問題與螺旋蓋的出現',
      points: [
        '軟木塞汙染（Cork Taint）：由 TCA（2,4,6-三氯苯甲醚）引起',
        '症狀：潮濕紙板、黴菌、地下室的異味，掩蓋所有果香',
        '發生率：傳統軟木塞約有 5–8% 受 TCA 感染',
        '1990 年代：對品質要求極高的 Clare Valley Riesling 釀酒人深感苦惱',
        '2000 年：Clare Valley 的 14 家酒莊共同簽署協議，旗艦 Riesling 全面改用 Stelvin 螺旋蓋',
        '領袖：Jeffrey Grosset（Grosset Wines）是這場革命的精神領袖',
      ],
    },
    {
      type: 'content',
      title: '螺旋蓋的技術原理與種類',
      points: [
        '🔩 Stelvin 螺旋蓋（最常見）：鋁制外殼 + 錫箔內墊，分 Saranex（不透氧）和 Tin（少量透氧）',
        '💨 透氧量控制：不同種類的螺旋蓋有不同透氧率，可模擬不同品質軟木塞的透氧量',
        '✅ 零 TCA 汙染：徹底消除木塞汙染的風險',
        '❄️ 保鮮效果：防止外界氧化（Oxidation），最適合保護白葡萄酒的果香清新感',
        '🌏 澳洲現況：目前 95%+ 的澳洲葡萄酒使用螺旋蓋',
        '爭議：部分老派釀酒人仍偏愛軟木塞在陳年過程中的微量氧化作用',
      ],
    },
    {
      type: 'content',
      title: '全球影響與消費者認知改變',
      points: [
        '2000 年代：螺旋蓋在歐洲市場仍受到懷疑（認為是廉價酒標誌）',
        '2010 年代：紐西蘭、智利、南非等新世界國家跟進，螺旋蓋漸被接受',
        '2020 年代：精品酒也使用螺旋蓋，消費者認知已改變，不再與廉價掛鉤',
        '細節改變：有些高端螺旋蓋設計更精緻（更重、印花），提升高端感',
        '研究支持：多項盲品研究證實，螺旋蓋封存的 Riesling 比軟木塞版本保存更完整',
        '未來趨勢：玻璃瓶塞（Vino-Lok）、陶瓷塞也在高端市場出現',
      ],
    },
    {
      type: 'quiz',
      question: '軟木塞汙染（Cork Taint）的主要化學物質是？',
      options: ['TDN（三甲基二氫萘）', 'TCA（2,4,6-三氯苯甲醚）', 'VA（揮發酸）', 'SO₂（二氧化硫）'],
      answer: 1,
      explanation: 'TCA（2,4,6-Trichloroanisole）是軟木塞汙染的主要原因，帶來潮濕紙板、地下室黴菌的異味。Clare Valley 的螺旋蓋革命正是為了消除這個問題。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Cork Taint（TCA）：5-8% 的軟木塞受感染，是促成革命的主因',
        '2000 年：Clare Valley 14 家酒莊帶頭，Jeffrey Grosset 是領袖',
        '澳洲現在 95%+ 使用螺旋蓋，全球影響力持續擴散',
      ],
      nextLesson: '下一課：橡木桶陳年 vs 不鏽鋼',
    },
  ],

  // A2M6L2 — 橡木桶陳年 vs 不鏽鋼
  A2M6L2: [
    {
      type: 'cover',
      title: '橡木桶陳年 vs 不鏽鋼',
      subtitle: 'Level 2 · Module 6 · Lesson 2',
      bg: 'linear-gradient(135deg, #4a2000 0%, #95a5a6 100%)',
      emoji: '🛢️',
    },
    {
      type: 'content',
      title: '不鏽鋼槽的優勢',
      points: [
        '完全密封，無氧化：保留葡萄的一級果香（Primary Aromas）',
        '不增添任何木桶風味，純淨表達品種特性',
        '溫控精準：可在不同溫度發酵/儲存，操控靈活',
        '最適合：果香清新的白葡萄酒（Hunter Semillon、Clare Riesling、Sauvignon Blanc）',
        '成本低，清洗方便，適合大規模生產',
        '現代 stainless steel + screw cap = 最大程度的果香保護系統',
      ],
    },
    {
      type: 'compare',
      title: '法國橡木桶 vs 美國橡木桶',
      left: {
        label: '法國橡木桶（French Oak）',
        points: [
          '木紋緊密，透氧量小，陳年緩慢',
          '風味：香草、烘焙麵包、烤榛果、吐司',
          '單寧細膩，增添結構但不搶奪果香',
          '適合：Pinot Noir、精品 Chardonnay',
          '成本：昂貴（一桶 800–1,200 AUD）',
          '澳洲高端酒多用法國桶',
        ],
      },
      right: {
        label: '美國橡木桶（American Oak）',
        points: [
          '木紋較粗，透氧量較大，風味釋放快',
          '風味：椰子、奶油糖、香草、甜香料（丁香）',
          '風格大膽，是傳統 Barossa Shiraz 的標誌',
          '適合：Barossa Shiraz、Grenache',
          '成本：較便宜（一桶 300–500 AUD）',
          '澳洲傳統 Barossa 風格多用美國桶',
        ],
      },
    },
    {
      type: 'content',
      title: '現代替代發酵/陳年容器',
      points: [
        '🥚 混凝土蛋（Concrete Egg）：微量透氧，對流循環，不增木味，保留果香+增添質地',
        '🏺 陶甕/安福拉（Amphora/Clay）：古老技術復興，極低干預，讓風土說話',
        '🪵 大型舊橡木桶（Large Old Oak）：容量大（500–10,000L），幾乎無木味，微量氧化，傳統勃艮第做法',
        '🧊 開放式發酵槽（Open Top Fermenter）：紅酒傳統，讓酒帽天然漂浮，複雜感更強',
        '🌡️ 低溫慢速發酵：現代白酒和氣泡基底常用，保留更細膩香氣',
        '趨勢：澳洲精品酒莊越來越多採用混合容器（部分法桶 + 部分混凝土蛋）',
      ],
    },
    {
      type: 'quiz',
      question: '傳統 Barossa Valley Shiraz 常使用哪種橡木桶，帶來椰子、奶油糖、甜香料的特色風味？',
      options: ['法國橡木桶（French Oak）', '美國橡木桶（American Oak）', '不鏽鋼槽', '混凝土蛋（Concrete Egg）'],
      answer: 1,
      explanation: '美國橡木桶（American Oak）木紋較粗，透氧量較大，釋放出椰子、奶油糖、香草、丁香等大膽甜香料風味，是傳統 Barossa Valley Shiraz 的標誌性元素。現代 Barossa 精品酒莊則越來越傾向法國桶或舊木桶。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '不鏽鋼：保留純淨果香，最適合清爽白葡萄酒',
        '美國橡木桶：椰子、奶油糖，傳統 Barossa Shiraz 標誌',
        '法國橡木桶：細膩香草吐司，高端 Pinot/Chardonnay 首選',
        '新趨勢：混凝土蛋、陶甕，低干預風土表達',
      ],
      nextLesson: '下一課：澳洲有機與自然酒趨勢',
    },
  ],

  // A2M6L3 — 澳洲有機與自然酒趨勢
  A2M6L3: [
    {
      type: 'cover',
      title: '澳洲有機與自然酒趨勢',
      subtitle: 'Level 2 · Module 6 · Lesson 3',
      bg: 'linear-gradient(135deg, #145a1e 0%, #82e0aa 100%)',
      emoji: '🌿',
    },
    {
      type: 'content',
      title: '三種農法的定義',
      points: [
        '🌱 有機農法（Organic）：不使用合成農藥、化肥、除草劑，依賴天然方法保護葡萄',
        '認證：澳洲有機認證機構 ACO（Australian Certified Organic）、OFC、NASAA',
        '🌙 生物動力農法（Biodynamic）：有機的進階版，加入農業週期（月曆）和特殊製劑（如 BD500、BD501）',
        '認證：Demeter International（國際生物動力農業認證）',
        '🍃 自然酒（Natural Wine）：無明確法規，基本原則是：有機葡萄 + 野生酵母發酵 + 最少添加物（少量或不添加 SO₂）',
        '三種之間：有機 ⊂ 生物動力（生物動力必含有機）；自然酒通常基於有機但更極端低干預',
      ],
    },
    {
      type: 'content',
      title: '澳洲有機/生物動力農法先驅',
      points: [
        '🌿 Cullen Wines（Margaret River）：Diana Madeline 的全面生物動力轉型（Demeter 認證），旗艦 Cabernet 品質有目共睹',
        '🌱 Jasper Hill（Heathcote）：Ron Laughton 是澳洲生物動力農法的先驅，Emily\'s Paddock Shiraz 傳奇',
        '🌾 Lowe Wines（Mudgee）：完全有機，多個認證，透明農法實踐',
        '🏔️ Grosset Wines（Clare Valley）：有機認證，與精品酒質高度結合',
        '🌊 Seppeltsfield（Barossa）：大型酒莊轉型有機，示範大規模可行性',
        '數據：澳洲目前約有 400+ 有機認證酒莊，快速增長中',
      ],
    },
    {
      type: 'content',
      title: '自然酒運動在澳洲',
      points: [
        '🍃 Tom Shobbrook（Barossa）：澳洲自然酒運動最知名人物，低干預 Shiraz 和 Grenache 蜚聲國際',
        '🌿 Lucy Margaux（Adelaide Hills）：Anton van Klopper 的極端低干預，混濁未過濾，愛好者瘋狂追求',
        '🌱 Gentle Folk（Adelaide Hills）：Gareth Belton，小批量自然酒，每款皆搶手',
        '🎭 A.R.C. Wines（Heathcote）：自然酒與精品混合，礦物感 Shiraz',
        '自然酒特點：常見輕微混濁（unfined/unfiltered）、少量 CO₂（氣泡感）、更具活力但也更不穩定',
        '消費者：年輕世代（25–40 歲）是自然酒的核心愛好群體',
      ],
    },
    {
      type: 'quiz',
      question: '「生物動力農法（Biodynamic）」和「有機農法（Organic）」最主要的差異是什麼？',
      options: ['生物動力不允許使用任何水', '生物動力在有機基礎上，加入農業月曆和特殊天然製劑（如 BD500、BD501）', '有機農法品質一定更高', '生物動力只適用於白葡萄酒'],
      answer: 1,
      explanation: '生物動力農法是有機農法的進階版，在有機基礎上加入了根據星象農業月曆進行農事活動，以及施用特殊生物動力製劑（如 BD500 牛角糞肥、BD501 石英砂）。Demeter International 是最重要的認證機構。',
    },
    {
      type: 'summary',
      title: '🎉 Level 2 全部完成！',
      points: [
        '✅ 南澳深度：老藤分級、Eden/Clare 對比、Limestone Coast 全覽',
        '✅ 維多利亞：Yarra 上下亞拉、King Valley 義大利品種、Rutherglen Muscat、Grampians 氣泡紅',
        '✅ NSW：Hunter Semillon 陳年奇蹟、Canberra 精品、Orange/Mudgee 高海拔',
        '✅ 西澳：Margaret River 子產區、Great Southern 五個 Region、Frankland Riesling',
        '✅ Tasmania 北南比較、Granite Belt 替代品種',
        '✅ 釀酒工藝：螺旋蓋革命、橡木桶比較、有機/自然酒趨勢',
      ],
      nextLesson: '準備好進入 Level 3 品飲技巧與 Penfolds 解析了嗎？',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 3  ──  Module 1：Penfolds 解析
  // ════════════════════════════════════════════════════════════

  // A3M1L1 — Bin 系列完整解析
  A3M1L1: [
    {
      type: 'cover',
      title: 'Penfolds Bin 系列完整解析',
      subtitle: 'Level 3 · Module 1 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a0a00 0%, #c8a951 100%)',
      emoji: '📦',
    },
    {
      type: 'map',
      title: 'Penfolds 葡萄來源產區地圖',
      subtitle: 'Penfolds 跨州混調哲學：主要葡萄來自 SA（Barossa・Eden Valley・Coonawarra）與 VIC',
      mapRegion: 'SA|VIC',
    },,

    {
      type: 'content',
      title: 'Penfolds 的品牌哲學',
      points: [
        '創立：1844 年，Christopher Rawson Penfold 醫生在 Adelaide 創立，初衷是為病人提供強壯補身的紅酒',
        '核心哲學：「風格一致性凌駕年份差異」，不追求單一葡萄園表達，而是調配藝術',
        '集控型調配（Multi-Regional Blending）：跨越 SA 多產區選取最佳桶次，確保每年風格一致',
        '傳奇釀酒師：Max Schubert（創造 Grange）、John Duval、Andrew Baldwin',
        'Bin 系統：以儲存桶號碼（Bin Number）命名，是澳洲葡萄酒標籤的一大傳統特色',
        '現屬：Treasury Wine Estates（TWE）旗下，是澳洲最具國際聲譽的葡萄酒品牌',
      ],
    },
    {
      type: 'content',
      title: 'Bin 系列由入門到高端',
      points: [
        '🍷 Bin 2（Shiraz-Mourvèdre）：入門平易近人，每日飲用，性價比高',
        '🍷 Bin 28（Kalimna Shiraz）：來自 Barossa Kalimna 葡萄園，南澳跨區調配，豐滿易飲',
        '🍷 Bin 128（Coonawarra Shiraz）：涼爽氣候，草本薄荷感，比 Bin 28 更清雅',
        '🍷 Bin 138（Old Vine GSM）：Barossa 老藤 Grenache、Shiraz、Mourvèdre 混釀，豐沛有肉感',
        '🍷 Bin 407（Cabernet Sauvignon）：跨區 Cabernet，黑醋栗、雪松，優雅結構',
        '🍷 Bin 389（Cabernet-Shiraz）：「窮人的 Grange」，在 Grange 使用過的桶中陳年，複雜度極高',
      ],
    },
    {
      type: 'content',
      title: '超高端 Luxury 系列',
      points: [
        '💎 Bin 707（Cabernet Sauvignon）：Penfolds 最頂級 Cabernet，100% 全新法國桶陳年 18 個月，黑醋栗、石墨、雪松，陳年 20–30 年',
        '👑 St Henri Shiraz：非木桶陳年（大型老橡木槽 vat），更純淨的 Shiraz 表達，每年只用同一支 Vat No.7',
        '💫 Magill Estate Shiraz：Penfolds 創始地 Magill Estate 單一葡萄園，城市葡萄園奇蹟',
        '🌟 RWT Barossa Valley Shiraz：RWT = Red Winemaking Trial，全程法國橡木桶，現代精緻風格的 Barossa Shiraz',
        '🏆 Grange：旗艦，詳見下一課',
        '新系列：Penfolds California、Penfolds Champagne、Penfolds France（全球化擴展）',
      ],
    },
    {
      type: 'quiz',
      question: 'Penfolds Bin 389 有「窮人的 Grange」之稱，原因是什麼？',
      options: ['價格和 Grange 一樣高', '使用 Grange 陳年後的二次使用橡木桶（Grange used barrels）進行陳年', '只使用 Barossa 葡萄', '完全不使用橡木桶'],
      answer: 1,
      explanation: 'Bin 389（Cabernet-Shiraz）在 Grange 使用後的橡木桶中進行陳年，因此帶有 Grange 桶的殘留風味，複雜度遠超其價格應有的水準，被酒評家暱稱為「窮人的 Grange」。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'Penfolds 哲學：跨區調配、風格一致性、Bin 系統',
        '入門 → 旗艦：Bin 2 / 28 / 128 / 407 / 389 → 707 / St Henri / Grange',
        'Bin 389：在 Grange 桶中陳年，「窮人的 Grange」',
      ],
      nextLesson: '下一課：Grange — 澳洲最偉大紅酒',
    },
  ],

  // A3M1L2 — Grange：澳洲最偉大紅酒
  A3M1L2: [
    {
      type: 'cover',
      title: 'Grange：澳洲最偉大紅酒',
      subtitle: 'Level 3 · Module 1 · Lesson 2',
      bg: 'linear-gradient(135deg, #1a0000 0%, #8B0000 100%)',
      emoji: '👑',
    },
    {
      type: 'map',
      title: 'Grange 的葡萄核心來源',
      subtitle: 'Penfolds Grange 以 Barossa Valley 老藤 Shiraz 為主，混調多個南澳產區',
      mapRegion: 'Barossa Valley',
    },,

    {
      type: 'content',
      title: 'Grange 的誕生故事',
      points: [
        '創造者：Max Schubert，Penfolds 首席釀酒師，1950 年參觀法國波爾多後深受啟發',
        '野心：打造一款能夠陳年 20–25 年的澳洲紅酒（當時澳洲酒業無此概念）',
        '首個實驗年份：1951 年（非正式），1952 年首批真正的 Grange',
        '悲劇插曲：1957 年，Penfolds 董事會因銷售不佳命令停止生產 Grange',
        '秘密繼續：Max Schubert 私下繼續釀造，未告知董事會（1957–1959 年）',
        '平反：1960 年在悉尼酒展大獲全勝後，董事會收回成命，Grange 正式重啟',
      ],
    },
    {
      type: 'content',
      title: 'Grange 的釀造哲學',
      points: [
        '品種：主要是 Shiraz（通常 95–100%），偶爾加入少量 Cabernet Sauvignon',
        '風土：多產區調配（SA 各區），不強調單一葡萄園，以釀酒師的藝術凌駕風土',
        '橡木桶：100% 全新美國橡木桶，18 個月陳年，椰子、甜香料、黑莓的組合',
        '瓶陳：上市前在酒莊瓶中陳年至少 2–3 年',
        '風格：深黑色、豐滿飽滿、黑莓、黑巧克力、椰子、皮革、單寧有力但有支撐的酸',
        '陳年潛力：頂級年份可陳年 40–50 年以上',
      ],
    },
    {
      type: 'content',
      title: 'Grange 的歷史地位與評價',
      points: [
        '🏆 Hugh Johnson：「南半球唯一的 First Growth（一級酒莊）」',
        '🏆 Robert Parker：「已取代波爾多 Pétrus 成為全球最奇異濃縮的葡萄酒」',
        '🥇 1971 年份：1976 年在 Wine Olympics（巴黎）贏得 Shiraz/Syrah 類別金牌',
        '💯 1998 年份：Wine Spectator 給予 99 分，評為年度最佳紅酒之一',
        '🌏 南澳州遺產：Grange 在 2001 年被列為南澳州的文化財產（State Heritage Icon）',
        '💰 拍賣市場：Grange 是澳洲葡萄酒拍賣中最活躍的標的，頂級年份動輒數千澳元',
      ],
    },
    {
      type: 'quiz',
      question: 'Max Schubert 在 1957 年被命令停止釀造 Grange 後，他是怎麼做的？',
      options: ['立刻服從，停止所有生產', '辭職抗議', '秘密繼續釀造，未告知董事會，直到 1960 年酒展大勝後才平反', '改在其他酒莊繼續釀造'],
      answer: 2,
      explanation: '1957 年董事會因初期銷售不佳命令停產，但 Max Schubert 私下繼續釀造了 1957、1958、1959 三個年份。1960 年在悉尼酒展上大獲全勝後，董事會才收回成命，這段秘密歷史成為葡萄酒界的傳奇故事。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '創始：1951 年 Max Schubert，靈感來自波爾多，目標是可陳年 20+ 年的澳洲紅酒',
        '風格：多產區 Shiraz、100% 全新美國桶、飽滿黑果、椰子香、陳年 40+ 年',
        '地位：南半球唯一 First Growth（Hugh Johnson），南澳文化遺產',
      ],
      nextLesson: '下一課：澳洲重要年份（2010–2023）',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 3  ──  Module 2：年份指南
  // ════════════════════════════════════════════════════════════

  // A3M2L1 — 澳洲重要年份（2010–2023）
  A3M2L1: [
    {
      type: 'cover',
      title: '澳洲重要年份（2010–2023）',
      subtitle: 'Level 3 · Module 2 · Lesson 1',
      bg: 'linear-gradient(135deg, #0a1a40 0%, #1abc9c 100%)',
      emoji: '📅',
    },
    {
      type: 'map',
      title: '澳洲年份地理脈絡',
      subtitle: '澳洲各州氣候獨立——SA、VIC、NSW、WA 年份評分可能截然不同',
      mapRegion: 'all',
    },,

    {
      type: 'content',
      title: '如何解讀澳洲年份差異',
      points: [
        '澳洲年份差異因產區而異：Barossa 的好年份未必是 Yarra 的好年份',
        '主要影響因素：採收期降雨量、夏季高溫事件（heat spikes）、乾旱程度',
        '南半球採收：2 月底～4 月，「2022 年份」= 2021 年秋天種植、2022 年春夏生長、2022 年採收',
        '挑戰：近年 La Niña（反聖嬰）帶來多雨年份（2010-12、2020-22），La Niño（聖嬰）則帶來乾旱高溫',
        '一般規律：炎熱乾燥年份 → Barossa/McLaren Vale Shiraz 飽滿豐厚；涼爽多雨年份 → Yarra/Tasmania 精緻細膩',
      ],
    },
    {
      type: 'content',
      title: '2010 年代精華年份',
      points: [
        '⭐⭐⭐⭐⭐ 2010：La Niña 開始，整體涼爽，Yarra/Tasmania 精彩，涼爽產區最佳年份',
        '⭐⭐⭐⭐ 2012：SA 溫暖，Barossa/Clare/Coonawarra 平衡，結構好的年份',
        '⭐⭐⭐⭐⭐ 2014：SA 廣泛絕佳，Barossa Shiraz 豐滿結構佳，Coonawarra 也表現出色',
        '⭐⭐⭐⭐ 2016：McLaren Vale 和 Barossa 出色，WA 絕佳（Margaret River），涼爽年份',
        '⭐⭐⭐⭐⭐ 2017：廣泛優秀年份，Penfolds Grange 2017 獲極高評分，平衡感超群',
        '⭐⭐⭐⭐ 2018：SA 炎熱年份，豐滿濃縮，Barossa 老藤發揮，但不如 2014/2017 平衡',
      ],
    },
    {
      type: 'content',
      title: '2019–2023 近年分析',
      points: [
        '⭐⭐⭐ 2019–2020：黑夏山火（Black Summer）影響顯著，Adelaide Hills/Yarra 部分受煙霧汙染（smoke taint）',
        '⭐⭐⭐⭐ 2020：WA（Margaret River）未受山火影響，表現優秀',
        '⭐⭐⭐ 2021：La Niña，多雨潮濕，澳洲各地普遍困難，需挑選釀酒師',
        '⭐⭐⭐⭐ 2022：La Niña 繼續，SA 部分受澇，但 Barossa 高地和 WA 表現不錯',
        '⭐⭐⭐⭐⭐ 2023：La Niña 退去，回到溫暖乾燥，普遍好年份，尤其 SA 和 VIC',
        '重要：2019 黑夏山火是澳洲葡萄酒業最大的自然災害，影響了部分酒莊多個年份',
      ],
    },
    {
      type: 'quiz',
      question: '2019-2020 年的「黑夏山火（Black Summer）」對澳洲葡萄酒業最主要的影響是？',
      options: ['所有產區葡萄全部燒毀', '部分產區葡萄出現煙霧汙染（smoke taint），影響酒款品質', '提升了酒款的複雜度', '對葡萄酒業完全沒有影響'],
      answer: 1,
      explanation: '2019-2020 年黑夏山火造成大面積煙霧，靠近火災的葡萄園（尤其 Adelaide Hills、Yarra Valley）葡萄出現煙霧汙染（smoke taint），帶來不討好的焦煙、消毒水氣味。部分釀酒人不得不放棄當年採收的葡萄。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '好年份：2010、2014、2017（廣泛），2016/2020（WA）',
        '挑戰年份：2021（La Niña 多雨）、2019-20（山火煙霧汙染）',
        '原則：年份評分因產區而異，需對照具體 Region 查詢',
      ],
      nextLesson: '下一課：氣候變遷對澳洲的影響',
    },
  ],

  // A3M2L2 — 氣候變遷對澳洲的影響
  A3M2L2: [
    {
      type: 'cover',
      title: '氣候變遷對澳洲葡萄酒的影響',
      subtitle: 'Level 3 · Module 2 · Lesson 2',
      bg: 'linear-gradient(135deg, #4a0000 0%, #e67e22 100%)',
      emoji: '🌡️',
    },
    {
      type: 'content',
      title: '澳洲葡萄酒面臨的氣候挑戰',
      points: [
        '澳洲已是全球感受氣候暖化最快的農業國家之一（過去百年升溫約 1.4°C）',
        '採收期提前：近 30 年採收時間平均提早 2–4 週（Barossa 等炎熱產區最明顯）',
        '高溫事件（Heat Spike）：超過 40°C 的極端高溫日數增加，危害近成熟葡萄',
        '更強烈的山火季：黑夏（2019-20）只是開端，未來類似事件可能更頻繁',
        '降雨不穩定：La Niña 多雨 vs La Niño 嚴重乾旱的極端化加劇',
        '整體方向：傳統炎熱產區壓力增大；涼爽產區（Tasmania、高海拔）崛起機會',
      ],
    },
    {
      type: 'content',
      title: '產業因應策略',
      points: [
        '🏔️ 向高海拔移動：在 Barossa、McLaren Vale 等傳統產區尋找更高海拔地塊',
        '🌊 向涼爽地區移動：南澳酒莊在 Adelaide Hills、Wrattonbully 購地，WA 探索 Great Southern',
        '🌡️ 提前採收策略：故意在糖分高峰前採收，保留更高自然酸度，降低酒精',
        '🌿 農法調整：留更高的樹冠遮蔭葡萄（Canopy Management），延緩成熟',
        '🧪 品種替換：嘗試更耐熱的品種（Tempranillo、Grenache 耐熱；Nero d\'Avola、Fiano）',
        '💧 用水管理：滴灌技術精進，在乾旱年份節水保品質',
      ],
    },
    {
      type: 'content',
      title: 'Tasmania 的氣候紅利',
      points: [
        '氣候暖化下，Tasmania 成為澳洲最大的受益者',
        '過去：Tasmania 太冷，某些年份葡萄無法成熟',
        '現在：溫度提升讓採收更穩定，品質整體上升',
        '法國香檳區（Champagne）也在尋找替代基地：TAS 涼爽高酸是理想候選',
        '投資湧入：法國、英國、澳洲大型酒莊紛紛在 TAS 購地擴張',
        'Tasmania 的葡萄種植面積 2010–2023 年增加超過 80%',
      ],
    },
    {
      type: 'quiz',
      question: '面對氣候暖化，澳洲釀酒人採用的「提前採收策略」主要目的是？',
      options: ['讓葡萄更甜，酒精更高', '在糖分過高前採收，保留天然酸度和降低酒精，避免大塊頭風格', '縮短發酵時間', '節省採收人力成本'],
      answer: 1,
      explanation: '提前採收（Early Harvest）是澳洲應對暖化的重要策略：在葡萄達到糖分峰值前採收，可保留更高的天然酸度，控制酒精度（避免超過 14-15%），並維持清爽的果香，避免過於「燜熟」的果醬感。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '挑戰：升溫 1.4°C、採收提前 2-4 週、山火煙霧、極端降雨',
        '因應：高海拔移動、涼爽區擴張、提前採收、品種替換',
        'Tasmania 是暖化下最大受益者，種植面積增加 80%',
      ],
      nextLesson: '下一課：WSET 架構品飲澳洲酒',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 3  ──  Module 3：系統化品飲
  // ════════════════════════════════════════════════════════════

  // A3M3L1 — WSET 架構品飲澳洲酒
  A3M3L1: [
    {
      type: 'cover',
      title: 'WSET 架構品飲澳洲酒',
      subtitle: 'Level 3 · Module 3 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a1a4a 0%, #2980b9 100%)',
      emoji: '📝',
    },
    {
      type: 'content',
      title: 'WSET 系統化品飲法（SAT）概述',
      points: [
        'SAT = Systematic Approach to Tasting，WSET（英國葡萄酒與烈酒教育基金會）開發',
        '全球最廣泛使用的葡萄酒品飲框架，分：外觀 → 鼻腔 → 口腔 → 結論',
        '澳洲酒品飲：大多數澳洲酒風格大膽，但 SAT 可幫助辨別地區、品種和釀造工藝差異',
        '品飲溫度：紅酒 16–18°C；白酒 8–12°C；氣泡酒 6–8°C',
        '杯型：Burgundy 型（口寬）適合 Pinot Noir；Bordeaux 型（口窄）適合 Shiraz/Cabernet',
        '核心目的：透過結構化分析推斷品種、產地、釀造手法，並評估品質等級',
      ],
    },
    {
      type: 'content',
      title: '外觀與鼻腔分析',
      points: [
        '🔍 外觀（Appearance）：顏色深度（Lemon/Gold/Amber；Purple/Ruby/Garnet/Tawny）、清澈度、濃度',
        '澳洲白酒：Clare Riesling 極淡，Barossa Chardonnay 偏金色',
        '澳洲紅酒：年輕 Barossa Shiraz 深紫黑色；成熟後轉石榴紅/棕色邊',
        '👃 鼻腔（Nose）：條件（乾淨/汙染）→ 一級香（果香、花香）→ 二級香（發酵特性）→ 三級香（陳年複雜感）',
        '澳洲典型一級香：黑莓、藍莓（Shiraz）；黑醋栗、薄荷（SA Cabernet）；柑橘、蜂蜜（Riesling）',
        '典型三級香：焦油、皮革（老 Shiraz）；吐司、堅果（陳年 Chardonnay）；礦油（陳年 Riesling）',
      ],
    },
    {
      type: 'content',
      title: '口腔分析與結論',
      points: [
        '👄 口腔（Palate）：甜度 → 酸度 → 單寧（紅酒）→ 酒精 → 酒體 → 風味特性 → 餘韻',
        '澳洲 Barossa Shiraz：酸度中等、單寧柔滑成熟（美桶影響）、酒精高（14–15.5%）、酒體飽滿',
        'Clare Valley Riesling：酸度極高（清脆明亮）、零單寧、酒精低（10.5–11%）、酒體輕盈',
        '🎯 結論（Conclusions）：品質等級（Faulty/Poor/Acceptable/Good/Very Good/Outstanding）',
        '陳年潛力判斷：高酸 + 高單寧 + 高濃縮度 = 陳年潛力強',
        '盲品推斷流程：酒體/酸度/單寧 → 推測品種 → 結合風味特性 → 推測產區',
      ],
    },
    {
      type: 'quiz',
      question: 'WSET SAT 品飲架構的四個主要步驟順序是什麼？',
      options: ['口腔 → 鼻腔 → 外觀 → 結論', '外觀 → 鼻腔 → 口腔 → 結論', '鼻腔 → 外觀 → 口腔 → 結論', '結論 → 外觀 → 鼻腔 → 口腔'],
      answer: 1,
      explanation: 'WSET SAT（Systematic Approach to Tasting）的標準順序是：外觀（Appearance）→ 鼻腔（Nose）→ 口腔（Palate）→ 結論（Conclusions）。這個循序漸進的架構幫助品飲者系統地分析並描述葡萄酒。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        'SAT = 外觀 → 鼻腔 → 口腔 → 結論，全球通用品飲框架',
        '澳洲酒特色：深色外觀（Shiraz）、一級果香豐沛、酒體飽滿、酒精偏高',
        '高酸 + 高單寧 + 濃縮度 = 陳年潛力的三個核心指標',
      ],
      nextLesson: '下一課：Shiraz 風格光譜',
    },
  ],

  // A3M3L2 — Shiraz 風格光譜
  A3M3L2: [
    {
      type: 'cover',
      title: 'Shiraz 風格光譜',
      subtitle: 'Level 3 · Module 3 · Lesson 2',
      bg: 'linear-gradient(135deg, #3d0000 0%, #9b59b6 100%)',
      emoji: '🌈',
    },
    {
      type: 'content',
      title: 'Shiraz（=Syrah）：品種的兩個極端',
      points: [
        '澳洲叫「Shiraz」；法國隆河和大多數新世界叫「Syrah」——但是同一個品種',
        '品種特性：深色、黑果（黑莓、李子）、黑胡椒、紫羅蘭花香、皮革',
        '天然低酸但高色素，單寧可從柔滑（成熟）到緊實（涼爽）',
        '風格跨度極大，從澳洲炎熱 Barossa 的豐滿「炸彈」到法國 Hermitage 的細膩優雅',
        '關鍵因素：產區溫度（涼爽 vs 炎熱）、橡木桶（美桶 vs 法桶）、採收時間',
      ],
    },
    {
      type: 'compare',
      title: 'Shiraz 風格光譜：炎熱 vs 涼爽',
      left: {
        label: '炎熱氣候（Barossa Valley）',
        points: [
          '顏色：深紫黑色，不透光',
          '香氣：黑莓果醬、巧克力、椰子（美桶）、甘草',
          '口感：飽滿豐厚，單寧柔滑，酒精 14.5-16%',
          '酸度：偏低，厚重如絲絨',
          '代表：Penfolds RWT、Torbreck RunRig',
          '飲用窗口：10-25 年',
        ],
      },
      right: {
        label: '涼爽氣候（Heathcote / Grampians）',
        points: [
          '顏色：深石榴紅，有透明感',
          '香氣：黑胡椒（Rotundone）、紫羅蘭、藍莓、橄欖',
          '口感：中等酒體，單寧緊實，酒精 13-14%',
          '酸度：較高，更清新線性',
          '代表：Mt Langi Ghiran、Clonakilla',
          '飲用窗口：8-20 年',
        ],
      },
    },
    {
      type: 'content',
      title: '中間風格與 Shiraz-Viognier 共釀',
      points: [
        '🌿 Adelaide Hills Shiraz：涼爽 + 高海拔，藍莓、白胡椒、細膩感，近年備受矚目',
        '🌊 McLaren Vale Shiraz：海洋性涼爽，比 Barossa 更細膩，黑巧克力、橄欖醬、薰衣草',
        '🔴 Hunter Valley Shiraz：特殊泥土/馬鞍皮革風格，陳年後展現獨特動物性',
        '🌸 Shiraz-Viognier（SA / Canberra）：加入 5–10% Viognier，增添茉莉、杏桃花香，固色效果',
        '技術原因：Viognier 中的 Vitisin 化合物與 Shiraz 的花青素結合，讓顏色更穩定',
        '典型代表：Clonakilla（Canberra）、Yering Station（Yarra Valley）',
      ],
    },
    {
      type: 'quiz',
      question: '澳洲涼爽氣候 Shiraz（如 Grampians）的胡椒特性，主要來自哪種化合物？',
      options: ['花青素（Anthocyanins）', 'TDN（三甲基二氫萘）', 'Rotundone（輪旋酮）', '兒茶素（Catechin）'],
      answer: 2,
      explanation: 'Rotundone（輪旋酮）是黑、白胡椒香氣的主要化合物，在涼爽氣候（如 Grampians、Heathcote、Canberra）種植的 Shiraz/Syrah 中含量更高，而炎熱氣候中 Rotundone 會被降解，因此 Barossa Shiraz 胡椒味較弱。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '炎熱（Barossa）：黑果醬、椰子甜香料、豐滿柔滑；涼爽（Grampians/Heathcote）：胡椒、紫羅蘭、緊實線性',
        '中間地帶：McLaren Vale（海洋涼爽）、Adelaide Hills（高海拔）',
        'Shiraz-Viognier：加茉莉花香 + 固色，Clonakilla 是最著名代表',
      ],
      nextLesson: '下一課：Chardonnay 風格演變',
    },
  ],

  // A3M3L3 — Chardonnay 風格演變
  A3M3L3: [
    {
      type: 'cover',
      title: 'Chardonnay 風格演變',
      subtitle: 'Level 3 · Module 3 · Lesson 3',
      bg: 'linear-gradient(135deg, #2a4a00 0%, #f1c40f 100%)',
      emoji: '🍊',
    },
    {
      type: 'content',
      title: '澳洲 Chardonnay 的歷史演變',
      points: [
        '1980 年代：「Chardonnay 狂熱」，澳洲主導全球市場，以大橡木桶、高酒精、奶油/奶酪風格為特色',
        '代表：「ABC（Anything But Chardonnay）」反彈浪潮在 1990 年代興起，消費者對過於飽滿風格感到疲倦',
        '2000 年代轉型：新一代釀酒師留學勃艮第歸來，開始追求更精緻、礦物感的風格',
        '現代澳洲 Chardonnay（2010 年代至今）：清爽高酸、少量或中性橡木桶、不作完整乳酸發酵',
        '地域差異：涼爽產區（Yarra Valley、Margaret River、Tasmania）vs 溫暖產區（Barossa、Hunter）',
        '澳洲 Chardonnay 現在被視為全球最優秀的 Chardonnay 產地之一（可與勃艮第媲美）',
      ],
    },
    {
      type: 'compare',
      title: '傳統 vs 現代澳洲 Chardonnay',
      left: {
        label: '傳統風格（1980–2000）',
        points: [
          '100% 全新法國橡木桶，長時間陳年',
          '完整乳酸發酵（Malolactic Fermentation）',
          '奶油、焦糖、烤奶酪、鳳梨/芒果',
          '酒精：13.5–14.5%，酒體飽滿',
          '黃金色，油脂豐厚',
          '代表：早期 Lindemans、Rosemount',
        ],
      },
      right: {
        label: '現代精品風格（2010–至今）',
        points: [
          '中性橡木桶或少量新桶，酒泥攪拌（Battonage）',
          '部分或不做乳酸發酵，保留清新酸度',
          '葡萄柚、白桃、礦石、芬芳花香',
          '酒精：12.5–13.5%，更清雅',
          '淡金色，礦物質感強',
          '代表：Leeuwin Art Series、Tolpuddle、Giaconda',
        ],
      },
    },
    {
      type: 'content',
      title: '頂級澳洲 Chardonnay 酒莊',
      points: [
        '🏆 Giaconda（Beechworth, VIC）：澳洲最神秘的精品酒莊，Chardonnay 每年限量，被視為澳洲最偉大的白酒之一',
        '🌿 Leeuwin Estate Art Series（Margaret River）：國際頂級聲譽，Robert Mondavi 指導創立，礦物感 Chardonnay',
        '🌱 Tolpuddle Vineyard（Coal River, TAS）：Shaw + Smith 旗下，清爽細膩，Tasmania 氣候完美表達',
        '🍾 Shaw + Smith M3（Adelaide Hills）：礦物感清新，性價比高，現代風格代表',
        '🎻 Yabby Lake（Mornington Peninsula）：Single Vineyard 系列，極細緻的 Pinot Noir 和 Chardonnay',
        '🏔️ Curly Flat（Macedon Ranges）：高海拔涼爽，Chardonnay 緊實礦物線性',
      ],
    },
    {
      type: 'quiz',
      question: '現代澳洲精品 Chardonnay 的釀造趨勢，最主要的轉變是什麼？',
      options: ['使用更多全新美國橡木桶', '減少橡木桶影響（中性桶/舊桶）+ 部分或不做乳酸發酵，追求清爽礦物感', '提高酒精至 15%+', '加入 Viognier 共釀'],
      answer: 1,
      explanation: '現代澳洲精品 Chardonnay 的核心轉變是：減少新橡木桶的使用（改用中性桶或舊桶），並縮減甚至放棄乳酸發酵，以保留葡萄柚、白桃等清新果香和更高的天然酸度，呈現礦物感而非奶油感。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '歷史轉變：1980s 奶油濃郁 → 2010s 清爽礦物精緻',
        '現代趨勢：中性橡木桶、部分乳酸發酵、保留酸度',
        'Giaconda（Beechworth）：澳洲最偉大白酒之一；Leeuwin Art Series：Margaret River 頂級',
      ],
      nextLesson: '下一課：澳洲飲食文化與葡萄酒',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 3  ──  Module 4：餐酒搭配
  // ════════════════════════════════════════════════════════════

  // A3M4L1 — 澳洲飲食文化與葡萄酒
  A3M4L1: [
    {
      type: 'cover',
      title: '澳洲飲食文化與葡萄酒',
      subtitle: 'Level 3 · Module 4 · Lesson 1',
      bg: 'linear-gradient(135deg, #1a3a00 0%, #e67e22 100%)',
      emoji: '🦞',
    },
    {
      type: 'content',
      title: '澳洲飲食文化概覽',
      points: [
        '多元文化融合：英式傳統、義大利/希臘移民影響（1950-60 年代）、亞洲（尤其廣東/越南）影響（1970 年代後）',
        '「Modern Australian（ModOz）」料理：融合亞太食材與法式技巧，清爽鮮明的風味',
        'BBQ 文化：烤肉是澳洲的國民儀式，Sausage Sizzle、Lamb Chops、Barramundi（澳洲鱸魚）',
        '新鮮海鮮：澳洲的 Sydney Rock Oyster、Moreton Bay Bug、King Prawn、Barramundi 世界聞名',
        '農產品豐富：南澳牛肉、塔斯馬尼亞牡蠣/三文魚、維多利亞乳製品',
        '澳洲葡萄酒與食物文化一同成長，彼此深度融合',
      ],
    },
    {
      type: 'content',
      title: '海鮮 × 澳洲白酒搭配',
      points: [
        '🦪 Sydney Rock Oyster（雪梨岩牡蠣）+ Clare Valley Riesling：高酸清爽，金屬礦物感對應牡蠣碘味，經典組合',
        '🦐 King Prawn（帝王蝦）+ Margaret River Chardonnay：奶油質感 Chardonnay 搭甜蝦，相輔相成',
        '🐟 Barramundi 香煎 + Adelaide Hills Sauvignon Blanc：草本清新，帶出魚肉細膩甜味',
        '🦞 Moreton Bay Bug（摩頓灣海蟹）+ Leeuwin Estate Chardonnay：頂級搭配，富含油脂的海鮮對應複雜豐滿的 Chard',
        '🐙 章魚料理 + Tasmania Pinot Noir：輕盈紅酒搭配，不搶奪海鮮的細膩',
        '原則：海鮮多搭白酒/輕盈紅酒，注意醬汁的分量（重醬可搭更飽滿的白酒）',
      ],
    },
    {
      type: 'content',
      title: '現代澳洲料理 × 葡萄酒',
      points: [
        '🥑 酪梨吐司（Avo Toast）+ Sparkling：澳洲最網紅早午餐，搭 NV 氣泡酒清爽爽',
        '🍛 越南牛肉河粉（Pho）+ Yarra Valley Pinot Noir：輕盈紅酒搭亞洲清爽肉湯',
        '🍜 泰式椰奶咖哩 + Riesling Off-Dry：微甜 Riesling 化解辣度，清爽互補',
        '🍱 壽司刺身 + Tasmania Chardonnay：高酸清新，減少魚腥，強化鮮味',
        '🧀 澳洲精品乳酪 + Hunter Valley Semillon：氧化陳年香氣（吐司、蜂蜜）與熟成乳酪的完美對話',
        'ModOz 精神：勇於打破傳統配對，探索亞洲香料 × 澳洲本土酒款的新可能',
      ],
    },
    {
      type: 'quiz',
      question: '「Sydney Rock Oyster + Clare Valley Riesling」被視為澳洲的經典搭配，原因是什麼？',
      options: ['兩者都是甜的', 'Clare Valley Riesling 的高酸和礦物感，與牡蠣的碘鹽味形成互補和清爽的對應', '都是澳洲最貴的食材', '顏色搭配'],
      answer: 1,
      explanation: 'Clare Valley Riesling 的極高酸度（像是擠檸檬的效果）可以清潔口腔，而其礦物感和金屬感與牡蠣的海鹽碘味形成完美的「鏡像」呼應，是澳洲飲食界最著名的經典搭配之一。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '澳洲飲食：BBQ、海鮮、ModOz 多元文化融合',
        '海鮮 × 白酒：牡蠣/Riesling、蝦/Chardonnay、魚/Sauvignon Blanc',
        'ModOz 精神：亞洲香料 × 澳洲酒，打破傳統，勇於探索',
      ],
      nextLesson: '下一課：牛羊肉 × 澳洲紅酒',
    },
  ],

  // A3M4L2 — 牛羊肉 × 澳洲紅酒
  A3M4L2: [
    {
      type: 'cover',
      title: '牛羊肉 × 澳洲紅酒',
      subtitle: 'Level 3 · Module 4 · Lesson 2',
      bg: 'linear-gradient(135deg, #3d0000 0%, #e74c3c 100%)',
      emoji: '🥩',
    },
    {
      type: 'content',
      title: '澳洲牛羊肉的品質優勢',
      points: [
        '澳洲是全球最重要的牛羊肉出口國之一，品質以草飼（Grass-Fed）和穀飼（Grain-Fed）分類',
        '草飼牛肉：清淡、鐵質感、肌肉緊實，搭較優雅的紅酒（Yarra Pinot、Coonawarra Cab）',
        '穀飼牛肉（Wagyu 和 Angus）：更多油花（Marbling），奶油質感，搭飽滿紅酒（Barossa Shiraz）',
        '澳洲羊肉：全球評選最優質的羊肉之一，尤其 Merino 羊（羊毛兼羊肉兩用），風味純淨',
        'Wagyu 牛肉：澳洲已是全球最大 Wagyu 產國之一，Marble Score 4–9，品質驚人',
        '烹調方式：炭烤（BBQ/Grill）、慢燉（Braise）、生食（Tartare）各適合不同酒款',
      ],
    },
    {
      type: 'content',
      title: '紅肉 × 澳洲紅酒搭配法則',
      points: [
        '🥩 厚切肋眼牛排（炭烤） + Barossa Valley Shiraz：炭烤焦香 × 黑莓/巧克力/椰子，強強聯手',
        '🐑 慢燉羊膝（Braised Lamb Shank） + Coonawarra Cabernet：薄荷草本 Cab Sav 與羊肉的草本風味天作之合',
        '🥩 Wagyu 牛排 + McLaren Vale Shiraz：油花豐厚的牛肉需要有酸度支撐的飽滿紅酒',
        '🍖 澳洲式 BBQ 烤羊肉串 + Grenache（Barossa Old Vine）：輕盈石榴紅果 × 羊肉的甜香',
        '🥩 牛肉 Tartare + Pinot Noir（Yarra Valley）：生牛肉細膩，需清爽輕盈的 Pinot，不搶奪鮮甜',
        '🐂 牛尾燉湯 + Hunter Valley Shiraz（陳年）：皮革/馬鞍風格的成熟 Shiraz，與深色肉汁完美融合',
      ],
    },
    {
      type: 'content',
      title: '搭配的核心原則',
      points: [
        '🔴 單寧平衡蛋白質：高蛋白的紅肉讓單寧變柔滑（化學反應），因此高單寧紅酒搭紅肉',
        '🔥 烹調方式決定酒體：清蒸/生食 → 輕盈酒；炭烤/燉煮 → 豐滿酒',
        '🌿 醬料是關鍵：薄荷醬 + Cab Sav（同為草本）；胡椒醬 + Heathcote Shiraz（Rotundone 呼應）',
        '🧀 乳酪盤 + Rutherglen Muscat：甜型加烈酒搭藍紋/硬質乳酪，法國傳統的澳洲版',
        '🌶️ 辣味肉類（如叉燒、烤雞翅） + 微甜 Riesling 或 Shiraz Rosé：甜度中和辣度',
        '記憶法：「區域搭配（Regional Pairing）」——吃 Barossa 羊肉，喝 Barossa 酒，風土相符',
      ],
    },
    {
      type: 'quiz',
      question: '為什麼高單寧的紅酒適合搭配紅肉（如牛排）？',
      options: ['紅色和紅色視覺上搭配', '紅肉中的蛋白質與單寧（Tannin）發生化學反應，使單寧在口中變得柔滑，不再苦澀', '紅肉的油脂讓紅酒更甜', '單寧可以殺死細菌'],
      answer: 1,
      explanation: '紅肉富含蛋白質，蛋白質分子能與單寧（多酚類）結合，在口中使原本收斂澀口的單寧感覺更柔滑。同時，紅肉的油脂和風味強度也需要有分量的紅酒來匹配，避免被酒款的單寧壓制。',
    },
    {
      type: 'summary',
      title: '本課小結',
      points: [
        '烹調方式決定酒體選擇：炭烤 → 飽滿；清蒸 → 輕盈',
        '紅肉 × 單寧：蛋白質柔化單寧，是紅酒搭紅肉的科學依據',
        '區域搭配原則：Barossa 肉 × Barossa 酒，風土文化雙重呼應',
      ],
      nextLesson: '準備好迎接 Level 3 期末綜合測驗了嗎？',
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  LEVEL 3  ──  EXAM：期末測驗
  // ════════════════════════════════════════════════════════════

  A3FinalExam: [
    {
      type: 'cover',
      title: 'Level 3 專業綜合測驗',
      subtitle: '澳洲葡萄酒 · 品飲技巧 · 年份 · 餐酒搭配',
      bg: 'linear-gradient(135deg, #1a0a00 0%, #f39c12 100%)',
      emoji: '🎓',
    },
    {
      type: 'quiz',
      question: 'Penfolds Grange 的創始釀酒師是誰？他在哪一年首次釀造了 Grange？',
      options: ['John Duval，1960 年', 'Max Schubert，1951 年', 'Andrew Penfold，1844 年', 'Peter Gago，1990 年'],
      answer: 1,
      explanation: 'Max Schubert 在 1951 年首次釀造了實驗性的 Grange，靈感來自 1950 年他對法國波爾多的參訪。他的野心是打造一款可陳年 20–25 年的澳洲頂級紅酒。',
    },
    {
      type: 'quiz',
      question: 'Penfolds Bin 389 被稱為「窮人的 Grange」的原因是什麼？',
      options: ['它的價格非常便宜', '它使用 Grange 陳年後的二次橡木桶進行陳年', '它由廉價葡萄釀造', '它只在超市出售'],
      answer: 1,
      explanation: 'Bin 389 在 Grange 使用過的橡木桶中進行陳年，因此能吸收 Grange 桶中殘留的複雜風味成分，品質遠超其定價水準，被親暱地稱為「窮人的 Grange」。',
    },
    {
      type: 'quiz',
      question: '2019–2020 年的黑夏山火對澳洲葡萄酒業造成的最大問題是？',
      options: ['所有葡萄樹都被燒毀', '部分產區葡萄出現「煙霧汙染（Smoke Taint）」，帶來焦煙/消毒水異味', '讓當年份成為歷史最佳年份', '提高了整個產業的價格'],
      answer: 1,
      explanation: '山火煙霧中的揮發性酚類物質（如 Guaiacol）滲入葡萄皮，導致葡萄及釀成的酒款帶有焦煙、消毒水等不討好的煙霧汙染（Smoke Taint）氣味。Adelaide Hills、Yarra Valley 等靠近火區的產區受影響最大。',
    },
    {
      type: 'quiz',
      question: '澳洲涼爽氣候 Shiraz（如 Grampians）帶有胡椒香氣，主要由哪種化合物貢獻？',
      options: ['TCA（三氯苯甲醚）', 'TDN（三甲基二氫萘）', 'Rotundone（輪旋酮）', '乙酸乙酯'],
      answer: 2,
      explanation: 'Rotundone 是黑胡椒和白胡椒香氣的主要化合物，在涼爽氣候種植的 Shiraz/Syrah 中含量更高（炎熱氣候下會被降解）。這正是 Grampians、Heathcote、Canberra 等涼爽產區 Shiraz 帶有明顯胡椒感的原因。',
    },
    {
      type: 'quiz',
      question: '現代澳洲精品 Chardonnay（如 Giaconda、Tolpuddle）的釀造趨勢，最核心的轉變是？',
      options: ['使用更多全新美國橡木桶', '減少新橡木桶影響 + 保留天然酸度（部分或不做乳酸發酵），追求礦物清爽感', '提高酒精至 15%+', '加入香料浸漬'],
      answer: 1,
      explanation: '現代澳洲精品 Chardonnay 從 1980s 的「奶油轟炸」風格轉向更清爽的礦物導向：使用中性舊桶或無桶，縮減或不做乳酸發酵（Malolactic Fermentation），保留更高的天然酸度和果香，展現葡萄柚、白桃、礦石等更精緻的風味。',
    },
    {
      type: 'quiz',
      question: 'WSET SAT 品飲架構的四個步驟正確順序是？',
      options: ['鼻腔 → 外觀 → 口腔 → 結論', '外觀 → 鼻腔 → 口腔 → 結論', '口腔 → 鼻腔 → 外觀 → 結論', '結論 → 口腔 → 鼻腔 → 外觀'],
      answer: 1,
      explanation: 'WSET SAT 的標準四步驟是：外觀（Appearance）→ 鼻腔（Nose）→ 口腔（Palate）→ 結論（Conclusions）。這個循序漸進的架構確保品飲者系統地記錄所有品質指標。',
    },
    {
      type: 'quiz',
      question: '「Sydney Rock Oyster + Clare Valley Riesling」被視為澳洲最經典搭配，最主要原因是？',
      options: ['兩者都非常昂貴，適合隆重場合', 'Riesling 的極高酸度和礦物感，與牡蠣的海碘鹽味形成互補的清爽搭配', '兩者顏色相同', 'Clare Valley 離雪梨最近'],
      answer: 1,
      explanation: 'Clare Valley Riesling 的標誌性高酸（類似現擠青檸汁）可清潔口腔，而其石板礦物感與牡蠣的海洋鹹味產生「鏡像」呼應，是酸度對應碘鹽的完美化學反應，是澳洲飲食文化中最著名的地區搭配（Regional Pairing）。',
    },
    {
      type: 'quiz',
      question: '為什麼高單寧的 Barossa Shiraz 適合搭配炭烤牛排？',
      options: ['兩者都是紅色的', '牛排的蛋白質與單寧結合，使單寧在口中柔化，同時紅肉的風味分量可以匹配飽滿的紅酒', '炭烤牛排會讓紅酒更甜', '高單寧可以幫助消化牛排'],
      answer: 1,
      explanation: '紅肉中的蛋白質分子能與單寧（多酚）在口腔中結合，使原本澀口的單寧變得柔滑；炭烤的焦香風味也需要飽滿有力的 Barossa Shiraz 來匹配，兩者形成「區域搭配（Regional Pairing）」的完美範例。',
    },
    {
      type: 'summary',
      title: '🎉 恭喜完成澳洲葡萄酒 Level 3！',
      points: [
        '✅ Penfolds 系列完整：Bin 系統 + Grange 傳奇故事',
        '✅ 年份指南：2014/2017 廣泛佳年；2019-20 山火挑戰；氣候變遷因應策略',
        '✅ 系統化品飲：WSET SAT 架構 + Shiraz 風格光譜 + Chardonnay 風格演變',
        '✅ 餐酒搭配：澳洲飲食文化 + 海鮮/白酒 + 紅肉/紅酒 搭配哲學',
        '您已掌握澳洲葡萄酒的專業知識！',
      ],
      nextLesson: '繼續探索：返回產區地圖或挑戰互動練習',
    },
  ],
}
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
