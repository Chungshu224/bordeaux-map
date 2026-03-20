// L3: 波爾多地理、風土與氣候綜合課程
// 本課程整合了 L3-1, L3-2, L3-3 的核心內容，提供一個關於波爾多地理、土壤和氣候的完整視圖。

export const l3gtcContent = [
  // 封面頁
  {
    type: 'cover',
    title: '波爾多：地理、風土與氣候的交響曲',
    subtitle: 'Level 3 - 綜合課程',
    background: 'linear-gradient(135deg, #2B32B2 0%, #1488CC 100%)',
    icon: '🗺️'
  },

  // 課程簡介
  {
    type: 'intro',
    title: '課程導讀',
    content: '本綜合課程將帶您深入探索構成波爾多偉大風土的三大基石：地理位置、土壤構成與氣候挑戰。我們將從宏觀的地理格局入手，深入微觀的土壤科學，並分析氣候變遷帶來的長期趨勢與極端年份的短期風險，全面理解波爾多葡萄酒風格的來源與演變。',
    duration: '預計學習時間：90分鐘',
    level: '高級專業',
    objectives: [
      '掌握波爾多的核心地理概念，包括左右岸的劃分及主要產區分佈。',
      '深入理解波爾多五大土壤類型（礫石、黏土、石灰岩等）的特性及其對葡萄酒風格的影響。',
      '分析氣候變遷對波爾多葡萄酒產業的長期影響與酒莊的應對策略。',
      '學習歷史上關鍵極端年份的教訓，並掌握現代氣候風險管理框架。',
      '建立一個從地理、土壤到氣候的系統性思維框架來評估波爾多葡萄酒。'
    ]
  },

  // ========== 第一章：波爾多地理概覽 ==========
  {
    type: 'chapter-divider',
    chapter: '1',
    title: '波爾多地理概覽',
    subtitle: '宏觀視角下的產區格局',
    icon: '🌍',
    background: 'linear-gradient(135deg, #6DD5FA 0%, #2980B9 100%)'
  },
  {
    type: 'content',
    title: '波爾多的地理位置',
    content: [
      {
        subtitle: '法國西南的大西洋門戶',
        text: '波爾多位於法國西南部，靠近大西洋海岸。吉倫特河口（Gironde Estuary）及其兩大支流——加龍河（Garonne）和多爾多涅河（Dordogne）——貫穿整個產區，不僅調節了氣候，也塑造了其獨特的地理格局。',
        highlight: '海洋性氣候：溫和的冬季、溫暖的夏季、充足但不過量的降雨，為葡萄生長提供了理想環境。'
      },
      {
        subtitle: '左右岸的劃分',
        text: '吉倫特河口和加龍河以西的地區被稱為「左岸」（Left Bank），而吉倫特河口和多爾多涅河以東的地區則被稱為「右岸」（Right Bank）。這不僅是地理劃分，更代表了不同的土壤構成、葡萄品種和葡萄酒風格。',
        highlight: '左岸以礫石土壤和卡本內蘇維濃為主，右岸以黏土和梅洛為主。'
      },
      {
        subtitle: '兩海之間：Entre-Deux-Mers',
        text: '位於加龍河與多爾多涅河之間的廣大區域被稱為「兩海之間」（Entre-Deux-Mers）。這裡地勢起伏，土壤多樣，傳統上以生產優質的干白葡萄酒而聞名。',
        highlight: '氣候變暖正讓此區域的紅葡萄酒潛力日益凸顯。'
      }
    ]
  },

  // ========== 第二章：風土深度解析：土壤科學 ==========
  {
    type: 'chapter-divider',
    chapter: '2',
    title: '風土深度解析：土壤科學',
    subtitle: '揭開Terroir的神秘面紗',
    icon: '🔬',
    background: 'linear-gradient(135deg, #8E54E9 0%, #4776E6 100%)'
  },
  {
    type: 'content',
    title: '土壤的三大核心特性',
    content: [
      {
        subtitle: '1. 物理特性 (Physical Properties)',
        text: '土壤的物理結構決定了水分和空氣的流動，是葡萄根系生長的基礎環境。',
        keyFactors: [
          '質地 (Texture)：沙、粉砂、黏土的比例，影響排水性和保水性',
          '結構 (Structure)：土壤顆粒的聚合方式，影響根系穿透和透氣性',
          '深度 (Depth)：影響根系能延伸的範圍和水分獲取能力',
          '排水性 (Drainage)：過快或過慢都會影響葡萄品質',
          '熱容量 (Thermal Mass)：土壤儲存和釋放熱量的能力'
        ],
        importance: '物理特性是土壤最直觀的特徵，直接影響葡萄藤的生長環境'
      },
      {
        subtitle: '2. 化學特性 (Chemical Properties)',
        text: '土壤的化學組成決定了葡萄能獲取哪些營養元素，以及如何獲取。',
        keyFactors: [
          'pH值：影響營養元素的可利用性（波爾多理想範圍6.5-7.5）',
          '礦物質組成：鈣、鎂、鉀、鐵等對葡萄品質的影響',
          '有機質含量：影響土壤肥力和微生物活性',
          'CEC（陽離子交換能力）：土壤保持養分的能力',
          '氮、磷、鉀平衡：影響葡萄藤的生長與果實品質'
        ],
        importance: '化學特性決定了葡萄的營養狀況和整體健康'
      },
      {
        subtitle: '3. 生物特性 (Biological Properties)',
        text: '土壤是活的生態系統，微生物活動對葡萄健康至關重要。',
        keyFactors: [
          '微生物多樣性：細菌、真菌、放線菌等的種類和數量',
          '菌根 (Mycorrhizae)：與根系共生，幫助吸收水分和養分',
          '土壤呼吸：微生物活動的指標',
          '有機質分解：養分循環的關鍵過程',
          '病蟲害抑制：健康土壤的自我防禦能力'
        ],
        importance: '生物特性是土壤健康和長期可持續性的基礎'
      }
    ]
  },
  {
    type: 'soil-types-detailed',
    title: '波爾多五大土壤類型深度解析',
    soilTypes: [
      {
        name: '礫石土壤 (Gravel / Graves)',
        frenchName: 'Graves',
        icon: '🪨',
        distribution: '左岸Médoc、Graves產區',
        geologicalOrigin: '第四紀冰期河流沉積，主要來自庇里牛斯山',
        bestFor: {
          varieties: 'Cabernet Sauvignon（晚熟，需要充分熱量）',
        },
        wineCharacteristics: [
          '結構感強：單寧豐富且緊實',
          '陳年潛力長：15-30年甚至更久',
          '礦物感：石墨、鉛筆芯特徵',
          '黑色水果主導：黑醋栗、黑櫻桃',
        ],
      },
      {
        name: '黏土 (Clay / Argile)',
        frenchName: 'Argile',
        icon: '🧱',
        distribution: '右岸Pomerol、Saint-Émilion平原',
        bestFor: {
          varieties: 'Merlot（早熟，適應保水環境）',
        },
        wineCharacteristics: [
          '酒體飽滿：豐滿圓潤的質地',
          '單寧柔和：天鵝絨般的口感',
          '果味深邃：李子、黑莓、櫻桃',
          '礦物複雜度：泥土、松露、鐵礦',
        ],
        specialType: {
          name: 'Crasse de fer（鐵磐層）',
          description: 'Pomerol獨特的鐵質硬化層，富含氧化鐵，賦予葡萄酒礦物感和獨特香氣',
        },
      },
      {
        name: '石灰岩 (Limestone / Calcaire)',
        frenchName: 'Calcaire',
        icon: '⛰️',
        distribution: 'Saint-Émilion高原、Côtes產區',
        bestFor: {
          varieties: 'Cabernet Franc, Merlot',
        },
        wineCharacteristics: [
          '優雅精緻：輕盈而不失深度',
          '礦物感強：白堊、濕石頭、鹹鮮感',
          '酸度活潑：清新明亮',
          '單寧細膩：絲滑柔順',
        ],
      },
      {
        name: '砂土 (Sand / Sable)',
        frenchName: 'Sable',
        icon: '🏖️',
        distribution: 'Médoc靠海地區、Entre-Deux-Mers部分區域',
        bestFor: {
          varieties: '早熟品種（Merlot）、根瘤蚜災後重建',
        },
        wineCharacteristics: [
          '輕盈柔和：酒體較輕',
          '果味主導：紅色水果為主',
          '單寧柔順：缺乏結構感',
          '提早適飲：3-8年',
        ],
      },
      {
        name: '黏土-石灰岩混合 (Clay-Limestone)',
        frenchName: 'Argilo-calcaire',
        icon: '🌋',
        distribution: 'Saint-Émilion Côtes、Fronsac',
        bestFor: {
          varieties: 'Merlot, Cabernet Franc 混釀',
        },
        wineCharacteristics: [
          '平衡性佳：融合黏土的飽滿和石灰岩的優雅',
          '複雜度高：多層次風味',
          '陳年潛力：10-20年',
        ],
        advantage: '被認為是"最完美的平衡"，兼具兩種土壤優點',
      }
    ]
  },
  {
    type: 'soil-grape-wine-matrix',
    title: '土壤-品種-風格關聯矩陣',
    description: '從土壤特性預測葡萄酒風格',
    correlations: [
      {
        soil: '礫石（Gravel）',
        drainageLevel: '極高',
        waterStress: '高',
        bestVariety: 'Cabernet Sauvignon',
        wineBody: '飽滿強勁',
        tanninProfile: '高、結構緊實',
        acidity: '中至高',
        fruitCharacter: '黑醋栗、黑櫻桃、藍莓',
        agingPotential: '長（15-30+年）',
        典型描述: '強勁、優雅、礦物感、黑醋栗、雪松、石墨'
      },
      {
        soil: '黏土（Clay）',
        drainageLevel: '低至中',
        waterStress: '低',
        bestVariety: 'Merlot',
        wineBody: '飽滿豐富',
        tanninProfile: '中至高、柔順',
        acidity: '中',
        fruitCharacter: '李子、黑櫻桃、無花果',
        agingPotential: '中至長（10-20年）',
        典型描述: '豐滿、天鵝絨般、李子、黑櫻桃、松露、泥土'
      },
      {
        soil: '石灰岩（Limestone）',
        drainageLevel: '高',
        waterStress: '中',
        bestVariety: 'Cabernet Franc, Merlot',
        wineBody: '中等優雅',
        tanninProfile: '中、細膩',
        acidity: '中至高',
        fruitCharacter: '覆盆子、紅櫻桃、紫羅蘭',
        agingPotential: '中至長（12-25年）',
        典型描述: '優雅、礦物感、紫羅蘭、覆盆子、白堊、清爽'
      },
      {
        soil: '砂土（Sand）',
        drainageLevel: '極高',
        waterStress: '高',
        bestVariety: 'Merlot（早熟）',
        wineBody: '中等輕盈',
        tanninProfile: '低至中、柔和',
        acidity: '中',
        fruitCharacter: '紅莓果、草莓、櫻桃',
        agingPotential: '短至中（5-10年）',
        典型描述: '柔順、易飲、果香豐富、適合早飲、細緻輕盈'
      },
      {
        soil: '黏土-石灰岩（Clay-Limestone）',
        drainageLevel: '中',
        waterStress: '中',
        bestVariety: 'Merlot + Cabernet Franc',
        wineBody: '飽滿均衡',
        tanninProfile: '中至高、絲滑',
        acidity: '中至高',
        fruitCharacter: '紅色和黑色果香混合',
        agingPotential: '中至長（10-25年）',
        典型描述: '平衡優雅、結構完整、複雜多層次、兼具力量與細膩'
      }
    ],
    注意: '實際葡萄酒風格還受品種、釀造、年份等多重因素影響，土壤是基礎但非唯一決定因素'
  },

  // ========== 第三章：氣候的挑戰與應對 ==========
  {
    type: 'chapter-divider',
    chapter: '3',
    title: '氣候的挑戰與應對',
    subtitle: '從宏觀趨勢到極端年份的管理',
    icon: '🌡️',
    background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)'
  },
  {
    type: 'content',
    title: '波爾多氣候變遷的科學證據',
    content: [
      {
        subtitle: '年均溫度上升趨勢',
        text: '根據波爾多氣象站的長期監測數據，自1970年至2020年，該地區年平均氣溫上升了約1.7°C。特別是1990年代以後，升溫速度明顯加快。',
        highlight: '關鍵數據：1970年基準溫度12.8°C → 2020年達到14.5°C'
      },
      {
        subtitle: '生長季節的顯著變化',
        text: '溫暖的氣候使葡萄生長季（4月-10月）平均延長了15-20天。採收期普遍提前了10-15天，這在以精確把握採收時機而聞名的波爾多是革命性的變化。',
        highlight: '1980年代平均採收日期：9月28日 → 2010年代：9月15日'
      },
      {
        subtitle: '極端天氣事件頻率增加',
        text: '不僅平均溫度上升，極端高溫事件（超過35°C）的頻率也顯著增加。同時，降雨變得更加不穩定和極端化。',
        highlight: '熱浪天數：1970年代年均5天 → 2010年代年均15天'
      }
    ]
  },
  {
    type: 'impact-matrix',
    title: '氣候變化對葡萄生理的影響',
    description: '糖、酸、酚類成熟的平衡挑戰',
    impacts: [
      {
        factor: '糖分累積',
        change: '加速',
        result: '潛在酒精度普遍從12.5%升至13.5-14.5%',
        challenge: '可能掩蓋細膩風味，影響平衡感與優雅度'
      },
      {
        factor: '酸度水平',
        change: '下降',
        result: '高溫加速蘋果酸的呼吸降解',
        challenge: '威脅葡萄酒的新鮮感和陳年潛力'
      },
      {
        factor: '酚類成熟',
        change: '複雜化',
        result: '理想成熟窗口從7-10天縮短至3-5天',
        challenge: '糖分成熟與酚類成熟不同步，易出現過熟風味'
      },
      {
        factor: '水分脅迫',
        change: '增加',
        result: '降雨減少加上高溫蒸發',
        challenge: '過度脅迫會中止葡萄成熟，需要精準灌溉'
      }
    ]
  },
  {
    type: 'content',
    title: '六大氣候風險類型',
    content: [
      { subtitle: '1. 春霜 (Spring Frost)', text: '暖冬提早萌芽，但春季寒流風險仍在，導致脆弱期與霜凍期重疊，風險增加。', severity: '極高' },
      { subtitle: '2. 冰雹 (Hail)', text: '局部毀滅性，路徑難預測，幾分鐘內可摧毀整年收成。', severity: '極高' },
      { subtitle: '3. 乾旱與熱浪 (Drought & Heat)', text: '頻率和強度快速增加，考驗土壤保水能力和根系深度。', severity: '高至極高' },
      { subtitle: '4. 過度降雨 (Excessive Rainfall)', text: '稀釋果汁、誘發病害，尤其在開花期和採收期是災難。', severity: '高' },
      { subtitle: '5. 病害爆發 (Disease Outbreaks)', text: '溫暖潮濕環境是霜霉病、白粉病和灰霉病的溫床。', severity: '高' },
      { subtitle: '6. 颶風與強風 (Storms)', text: '直接物理損傷，折斷枝條、吹落果實。', severity: '中' }
    ]
  },
  {
    type: 'case-study',
    title: '案例分析：從極端年份學習',
    estate: '波爾多全產區',
    challenge: '氣候事件如何重塑產業',
    strategies: [
      {
        category: '1956年：世紀大霜凍',
        icon: '❄️',
        measures: ['事件：-20°C低溫導致80-90%葡萄藤凍死。', '影響：重新種植時大幅增加Merlot比例，Malbec幾乎消失，從根本上改變了波爾多品種結構。'],
        results: '促使開發霜凍預警系統和保護技術。'
      },
      {
        category: '2003年：極端熱浪',
        icon: '☀️',
        measures: ['事件：8月多次超過40°C，酒精度飆升至14-15.5%。', '影響：促使產業重新定義"成熟度"，從單純看糖分轉向關注酚類和酸度平衡。'],
        results: '成為氣候變化的警鐘，推動葉幕管理和採收策略的革新。'
      },
      {
        category: '2017年：春霜災難',
        icon: '🧊',
        measures: ['事件：暖春後突發霜凍，50-70%萌芽被毀。', '影響：證明"氣候變暖=霜凍減少"是錯誤的，早萌芽反而增加春霜脆弱性。'],
        results: '對風險管理的認知提升到新高度。'
      }
    ]
  },
  {
    type: 'content',
    title: '綜合風險管理策略',
    content: [
      {
        subtitle: '葡萄園層面',
        text: '地塊選擇（避開霜穴）、品種與砧木選擇（晚熟、抗旱）、提高樹冠、草生栽培（保持土壤濕度）、精準灌溉。'
      },
      {
        subtitle: '技術層面',
        text: '投資霜凍保護系統（風扇、噴灑）、防雹網、建立自有氣象站、使用衛星遙感數據進行精細管理。'
      },
      {
        subtitle: '釀造層面',
        text: '更精密的溫控發酵、調整浸漬時間、降低新桶比例以保持清新感、採用逆滲透等技術調整酒精度。'
      },
      {
        subtitle: '戰略層面',
        text: '購買農業保險、地理多元化投資、試驗新品種（如Touriga Nacional）、向有機和生物動力法轉型以增強生態系統韌性。'
      }
    ]
  },

  // ========== 課程總結 ==========
  {
    type: 'chapter-divider',
    chapter: '總結',
    title: '課程總結與展望',
    subtitle: '建立系統性思維框架',
    icon: '🎓',
    background: 'linear-gradient(135deg, #3C8CE7 0%, #00EAFF 100%)'
  },
  {
    type: 'key-takeaways',
    title: '核心要點總結',
    icon: '💡',
    takeaways: [
      {
        point: '地理格局是基礎',
        detail: '左右岸的劃分源於河流，決定了宏觀的產區風格。左岸礫石適合卡本內，右岸黏土適合梅洛。'
      },
      {
        point: '土壤是風格的密碼',
        detail: '五大土壤類型（礫石、黏土、石灰岩、砂土、混合土）通過物理、化學、生物特性，精確塑造了葡萄酒的結構、風味和陳年潛力。'
      },
      {
        point: '氣候是動態的變量',
        detail: '氣候變遷正在重塑波爾多，帶來更高酒精度、更低酸度和更頻繁的極端天氣，對傳統風格構成挑戰。'
      },
      {
        point: '風險管理是核心競爭力',
        detail: '從歷史極端年份中學習，建立預防、監測、應對、適應、對沖的五維風險管理框架，是現代酒莊成功的關鍵。'
      },
      {
        point: 'Terroir = 地理 + 土壤 + 氣候 + 人',
        detail: '偉大的波爾多葡萄酒是在特定地理和土壤基礎上，釀酒師應對動態氣候的智慧結晶。人的因素（Human Factor）在氣候挑戰下愈發重要。'
      }
    ]
  },
  {
    type: 'reflection-questions',
    title: '思考與討論',
    icon: '🤔',
    questions: [
      {
        question: '如果讓你設計一款"完美"的波爾多混釀，你會如何利用不同土壤的特性？',
        prompts: [
          '如何平衡礫石土壤的結構、黏土的飽滿度和石灰岩的清爽感？',
          '你會為你的混釀設定怎樣的品種比例？'
        ]
      },
      {
        question: '面對氣候變化，你認為波爾多應該堅守傳統，還是大膽擁抱變革（如引入新品種）？',
        prompts: [
          'AOC法規應該如何演變以適應新現實？',
          '作為消費者，你是否願意接受一個風格已然不同的"新波爾多"？'
        ]
      }
    ]
  },
  {
    type: 'course-complete',
    title: '🎉 綜合課程完成！',
    subtitle: '波爾多：地理、風土與氣候的交響曲',
    achievement: '您已掌握評估波爾多葡萄酒的系統性框架',
    summary: '恭喜您完成了這個關於波爾多風土的深度綜合課程。您現在不僅了解了構成波爾多葡萄酒偉大品質的靜態因素（地理與土壤），也掌握了動態變量（氣候與風險）的分析方法。這將使您能更深刻、更全面地品鑑和評估每一瓶來自波爾多的葡萄酒。',
    nextSteps: [
      {
        action: '實踐應用',
        items: [
          '選擇左岸和右岸同年份的酒進行對比品鑑，感受土壤差異。',
          '對比品鑑同一酒莊的"好年份"與"困難年份"，分析氣候影響。',
          '研究您喜愛酒莊的土壤構成和氣候應對策略。'
        ]
      },
      {
        action: '繼續學習',
        items: [
          '深入研究波爾多各個子產區的微氣候與土壤特徵。',
          '探索其他世界級產區（如勃艮第、納帕谷）的風土構成。',
          '關注波爾多正在試驗的新品種及其表現。'
        ]
      }
    ]
  }
];

export default l3gtcContent;
