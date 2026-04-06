// 學習系統狀態管理
import { reactive, computed } from 'vue'

// 學習進度狀態 - 測試模式：所有功能已解鎖
export const learningState = reactive({
  currentLevel: 1, // 等級 1-4
  currentLesson: null, // 當前課程對象
  completedLessons: [
    // Level 1 所有課程已完成
    'l1-1', 'l1-2', 'l1-3', 'l1-4', 'l1-5', 'l1-6', 'l1-7', 'l1-8',
    // Level 2 所有課程已完成
    'l2-1', 'l2-2', 'l2-3', 'l2-4', 'l2-5', 'l2-6', 'l2-7', 'l2-8', 'l2-9'
    // Level 3 課程進度由用戶實際學習決定
  ],
  learningMode: true, // 是否為學習模式
  testMode: false, // 測試模式（預設關閉，可手動開啟）
  userProgress: {
    level1: { completed: 8, total: 8 },
    level2: { completed: 9, total: 9 },
    level3: { completed: 1, total: 15 },
    level4: { completed: 0, total: 12 }
  },
  currentQuiz: null,
  quizScores: {
    // 所有測驗都已通過
    'l1-quiz': { score: 85, maxScore: 100, percentage: 85, timestamp: new Date().toISOString() },
    'l2-quiz': { score: 90, maxScore: 100, percentage: 90, timestamp: new Date().toISOString() },
    'l3-quiz': { score: 88, maxScore: 100, percentage: 88, timestamp: new Date().toISOString() }
  },
  achievements: [
    'first-lesson', 'level-master', 'climate-expert', 'geography-master', 
    'wine-scholar', 'interactive-explorer', 'quiz-champion', 'bordeaux-expert'
  ]
})

// 學習等級配置
export const learningLevels = {
  level1: {
    title: 'Level 1 - 入門基礎',
    description: '建立波爾多葡萄酒的基礎認知',
    color: '#4CAF50',
    visibleLayers: ['Regional'],
    features: ['geography', 'basic-grapes', 'climate'],
    lessons: [
      {
        id: 'l1-1',
        title: '認識波爾多地理位置',
        description: '了解波爾多的地理環境與氣候特色',
        mapFocus: { group: 'Regional', aoc: 'Bordeaux_AOC.geojson' },
        objectives: [
          '識別波爾多在法國的位置',
          '了解三條主要河流的分布',
          '認識左岸、右岸、兩海間的基本概念'
        ],
        interactiveElements: ['river-identification', 'region-coloring'],
        duration: 15
      },
      {
        id: 'l1-2',
        title: '波爾多氣候與環境基礎',
        description: '探索影響波爾多葡萄酒品質的自然因素',
        mapFocus: { group: 'Regional', aoc: 'Bordeaux_AOC.geojson' },
        objectives: [
          '了解溫帶海洋性氣候特徵',
          '認識Gironde河口與大西洋的調節作用',
          '學習降雨、溫度對葡萄生長週期的影響',
          '了解森林與水體對微氣候的影響',
          '認識基本的地理環境要素'
        ],
        interactiveElements: ['climate-overlay', 'seasonal-changes', 'temperature-chart', 'rainfall-data'],
        duration: 18,
        content: {
          sections: [
            {
              title: '地理位置與氣候類型',
              content: '波爾多位於法國西南部，距離大西洋約60公里，享有溫帶海洋性氣候的優勢。'
            },
            {
              title: 'Gironde河口的調節作用',
              content: 'Gironde河口寬闊的水面起到重要的溫度調節作用，冬暖夏涼，減少極端天氣。'
            },
            {
              title: '年度氣候循環',
              content: '春季溫和利於發芽，夏季溫暖促進成熟，秋季乾燥適合收穫。'
            }
          ]
        }
      },
      {
        id: 'l1-3',
        title: '主要葡萄品種介紹',
        description: '認識波爾多的經典葡萄品種',
        mapFocus: null,
        objectives: [
          '識別紅葡萄品種：Cabernet Sauvignon、Merlot、Cabernet Franc',
          '了解白葡萄品種：Sauvignon Blanc、Sémillon',
          '學習品種特色與風味描述'
        ],
        interactiveElements: ['grape-matching', 'flavor-wheel'],
        duration: 18
      },
      {
        id: 'l1-4',
        title: '左岸與右岸初探',
        description: '了解波爾多兩岸的基本差異',
        mapFocus: { comparison: ['LeftBank-Medoc', 'RightBank-Libournais'] },
        objectives: [
          '識別左岸與右岸的地理位置',
          '了解兩岸主要葡萄品種差異',
          '認識土壤類型的基本概念'
        ],
        interactiveElements: ['bank-comparison', 'soil-basics'],
        duration: 20
      },
      {
        id: 'l1-5',
        title: '波爾多酒款類型概覽',
        description: '認識不同類型的波爾多葡萄酒',
        mapFocus: { group: 'all-overview' },
        objectives: [
          '區分紅酒、白酒、甜酒',
          '了解基本釀造流程',
          '認識酒標基本資訊'
        ],
        interactiveElements: ['wine-type-sorting', 'label-reading'],
        duration: 16
      },
      {
        id: 'l1-6',
        title: 'AOC系統入門',
        description: '理解法國葡萄酒法規基礎',
        mapFocus: { group: 'Regional' },
        objectives: [
          '了解AOC的基本概念',
          '認識波爾多AOC階層',
          '學習酒標上的法規資訊'
        ],
        interactiveElements: ['aoc-pyramid', 'regulation-quiz'],
        duration: 14
      },
      {
        id: 'l1-7',
        title: '品嚐技巧基礎',
        description: '學習基本的葡萄酒品評方法',
        mapFocus: null,
        objectives: [
          '掌握「望、聞、品」三步驟',
          '識別基本風味特徵',
          '學習品酒詞彙'
        ],
        interactiveElements: ['tasting-simulator', 'flavor-identification'],
        duration: 22
      },

      {
        id: 'l1-8',
        title: 'Level 1 綜合評量',
        description: '檢驗Level 1學習成果',
        mapFocus: { group: 'comprehensive-review' },
        objectives: [
          '綜合運用所學知識',
          '完成Level 1認證測驗',
          '為Level 2做準備'
        ],
        interactiveElements: ['final-assessment', 'progress-review'],
        duration: 30
      }
    ]
  },
  
  level2: {
    title: 'Level 2 - 中級進階',
    description: '深入了解波爾多各產區特色與風格差異，掌握專業品鑑與分析技能',
    color: '#2196F3',
    visibleLayers: ['Regional', 'LeftBank-Medoc', 'LeftBank-Graves', 'RightBank-Libournais', 'RightBank-Blaye'],
    features: ['appellations', 'soil-types', 'grape-blends', 'vintage-variation'],
    lessons: [
      {
        id: 'l2-1',
        title: 'Médoc產區深度探索',
        description: '左岸四大村莊的風土差異與釀酒哲學深度分析',
        mapFocus: { group: 'LeftBank-Medoc' },
        objectives: [
          '深入了解Médoc半島的地理與土壤構成',
          '掌握1855分級制度的歷史背景與現代意義',
          '學習Médoc產區的釀酒工藝與技術演進',
          '理解不同子產區的風土特色與酒款風格'
        ],
        interactiveElements: ['medoc-map-explorer', 'estate-virtual-tour', 'soil-climate-analyzer', 'tasting-comparison-tool'],
        duration: 35
      },
      {
        id: 'l2-2',
        title: 'Margaux - 優雅的香水之鄉',
        description: '最優雅產區的獨特魅力與代表酒莊深度解析',
        mapFocus: { group: 'LeftBank-Medoc', aoc: 'Margaux_AOC.geojson' },
        objectives: [
          '探索Margaux產區的獨特砂質土壤特性',
          '深入了解Château Margaux等頂級酒莊',
          '掌握Margaux酒款的優雅風格特徵',
          '學習品鑑Margaux酒款的專業技巧'
        ],
        interactiveElements: ['margaux-terrain-explorer', 'chateau-virtual-tour', 'style-comparison-tool', 'pairing-recommendation-engine'],
        duration: 30
      },
      {
        id: 'l2-3',
        title: 'Pauillac - 王者風範的產區',
        description: '三大一級酒莊的故鄉與其釀酒傳奇探索',
        mapFocus: { group: 'LeftBank-Medoc', aoc: 'Pauillac_AOC.geojson' },
        objectives: [
          '深入了解Pauillac產區的地理與氣候特色',
          '學習Lafite、Latour、Mouton三大酒莊歷史',
          '掌握Pauillac酒款的強勁風格特徵',
          '理解頂級波爾多酒款的投資與收藏價值'
        ],
        interactiveElements: ['premier-cru-comparison', 'terroir-analysis-tool', 'aging-potential-calculator', 'tasting-notes-builder'],
        duration: 35
      },
      {
        id: 'l2-4',
        title: 'Saint-Julien - 平衡的典範',
        description: '最均衡產區的風格特色與名莊解析',
        mapFocus: { group: 'LeftBank-Medoc', aoc: 'St-Julien_AOC.geojson' },
        objectives: [
          '探索Saint-Julien產區的獨特位置優勢',
          '深入了解Léoville家族酒莊的傳承',
          '掌握Saint-Julien酒款的平衡風格',
          '學習評估酒款平衡性的專業標準'
        ],
        interactiveElements: ['balance-analyzer', 'estate-comparison-tool', 'value-calculator', 'style-profiler'],
        duration: 32
      },
      {
        id: 'l2-5',
        title: 'Saint-Estèphe - 北地之珠',
        description: '風格最獨特產區的現代化轉型研究',
        mapFocus: { group: 'LeftBank-Medoc', aoc: 'St-Estephe_AOC.geojson' },
        objectives: [
          '了解Saint-Estèphe產區的北部地理特色',
          '學習黏土土壤對酒款風格的影響',
          '探索傳統與現代釀酒技術的結合',
          '掌握Saint-Estèphe酒款的深邃風格特徵'
        ],
        interactiveElements: ['clay-soil-analyzer', 'modernization-timeline', 'style-evolution-tracker'],
        duration: 34
      },
      {
        id: 'l2-6',
        title: 'Pomerol - 稀世珍寶',
        description: '波爾多最小最精品的頂級產區探索',
        mapFocus: { group: 'RightBank-Libournais', aoc: 'Pomerol_AOC.geojson' },
        objectives: [
          '探索Pomerol產區的獨特地理環境',
          '深入了解Petrus等傳奇酒莊',
          '掌握Merlot在Pomerol的卓越表現',
          '學習頂級Pomerol酒款的品鑑與收藏'
        ],
        interactiveElements: ['pomerol-terroir-map', 'merlot-expression-analysis', 'luxury-wine-evaluation'],
        duration: 32
      },
      {
        id: 'l2-7',
        title: '聖愛美濃深度探索',
        description: '右岸明珠的風土傳奇與現代榮光',
        mapFocus: { group: 'RightBank-Libournais', aoc: 'St-Emilion-Grand-Cru_AOC.geojson' },
        objectives: [
          '深入了解Saint-Émilion的地理與歷史背景',
          '掌握Saint-Émilion分級制度與其演變',
          '學習石灰岩高原與沙質平原的土壤差異',
          '探索Saint-Émilion在現代市場的品牌價值與收藏投資潛力'
        ],
        interactiveElements: ['classification-evolution', 'terroir-comparison', 'investment-analysis'],
        duration: 38
      },
      {
        id: 'l2-8',
        title: 'Libournais衛星產區',
        description: '性價比優秀的右岸周邊產區探索',
        mapFocus: { group: 'RightBank-Libournais-Satellites' },
        objectives: [
          '探索Libournais地區的地理位置與衛星產區分布',
          '深入了解Saint-Émilion和Pomerol的衛星產區特色',
          '掌握衛星產區的性價比優勢與投資價值',
          '學習識別優質衛星產區酒款的選購技巧'
        ],
        interactiveElements: ['satellite-region-map', 'value-analysis-tool', 'quality-comparison', 'investment-calculator'],
        duration: 35
      },
      {
        id: 'l2-9',
        title: 'Level 2 綜合評量',
        description: '波爾多產區進階知識掌握度評估，作為進階Level 3的能力檢驗',
        mapFocus: { group: 'comprehensive-review' },
        objectives: [
          '系統回顧左右岸主要產區特色',
          '掌握產區間的風土差異與風格對比',
          '理解各產區代表性酒莊的特點',
          '通過綜合評量，驗證進階L3的準備度'
        ],
        interactiveElements: ['comprehensive-assessment', 'knowledge-matrix', 'progress-evaluation'],
        duration: 30
      }
    ]
  },
  
  level3: {
    title: 'Level 3 - 高級專業',
    description: '掌握複雜的風土條件與品質評估',
    color: '#FF9800',
    visibleLayers: 'all',
    features: ['terroir-details', 'vintage-analysis', 'market-positioning', 'food-pairing'],
    lessons: [
      {
        id: 'l3-1',
        title: '氣候變遷對波爾多的影響與應對',
        description: '分析全球氣候變遷如何重塑波爾多葡萄酒業，從科學數據到酒莊應對策略',
        mapFocus: { group: 'all-regions', overlay: 'climate-trends' },
        objectives: [
          '掌握過去50年波爾多氣候變化的科學數據與趨勢',
          '分析溫度、降雨對葡萄生長週期的具體影響',
          '了解頂級酒莊的適應策略與創新實踐',
          '評估氣候變遷對產區格局的重塑效應',
          '理解可持續發展在應對氣候挑戰中的核心作用'
        ],
        interactiveElements: ['climate-simulator', 'temperature-tracker', 'adaptation-strategies'],
        duration: 35
      },
      {
        id: 'l3-2',
        title: '土壤科學與風土表達',
        description: '從地質學到感官體驗，深度解析土壤如何影響葡萄酒的風土表達',
        mapFocus: { group: 'left-bank', overlay: 'soil-types' },
        objectives: [
          '掌握波爾多主要土壤類型的物理化學特性',
          '理解土壤對葡萄根系發展與水分管理的影響',
          '分析土壤礦物質與pH值對葡萄酒風格的作用',
          '探索土壤微生物群落對風味表達的貢獻',
          '建立完整的風土認知體系'
        ],
        interactiveElements: ['soil-analyzer', 'terroir-mapper', 'taste-correlation'],
        duration: 45
      },
      {
        id: 'l3-3',
        title: '極端年份與氣候風險管理',
        description: '從歷史災難中學習，掌握應對霜凍、乾旱、暴雨等極端氣候的專業策略',
        mapFocus: { group: 'all-regions', overlay: 'risk-zones' },
        objectives: [
          '分析歷史極端年份（如1956、1991、2017）的影響與教訓',
          '理解各類氣候風險（霜凍、冰雹、乾旱、暴雨）的特徵',
          '掌握現代風險管理策略（防霜塔、冰雹網、保險）',
          '學習極端年份的葡萄園與釀造應對措施',
          '預測未來氣候挑戰與應對方案'
        ],
        interactiveElements: ['risk-simulator', 'historical-timeline', 'strategy-planner'],
        duration: 50
      },
      {
        id: 'l3-4',
        title: '葡萄園管理與有機農法',
        description: '探索現代葡萄園管理技術、有機認證體系與生物動力法實踐',
        mapFocus: { group: 'all-regions' },
        objectives: [
          '學習有機與生物動力法的原理與實踐',
          '了解葡萄園管理的季節性工作流程',
          '掌握病蟲害防治的生態友善方法',
          '探討HVE、有機、生物動力等認證體系',
          '分析可持續農業的市場價值與趨勢'
        ],
        interactiveElements: ['vineyard-calendar', 'organic-practices-comparison', 'certification-guide'],
        duration: 40
      },
      {
        id: 'l3-5',
        title: '釀造工藝與技術創新',
        description: '（整合版）紅白酒工藝、甜酒貴腐、橡木桶科學與現代設備一次掌握',
        mapFocus: null,
        objectives: [
          '掌握紅酒、白酒、甜酒的釀造流程細節',
          '學習橡木桶陳釀與風味釋放機制',
          '了解現代釀酒設備與數據化控制',
          '探討微生物與高糖發酵挑戰',
          '評估創新技術對風格與品質的影響'
        ],
        interactiveElements: ['winemaking-simulator', 'barrel-selection-tool', 'fermentation-control'],
        duration: 60
      },
      {
        id: 'l3-6',
        title: '調配藝術與釀酒師哲學',
        description: '理解波爾多混釀的藝術與科學，探索頂級釀酒師的調配哲學',
        mapFocus: null,
        objectives: [
          '學習經典波爾多調配比例與原理',
          '了解不同品種在調配中的互補角色',
          '探索頂級釀酒師的調配哲學與決策邏輯',
          '掌握品鑑與調配的專業技巧',
          '分析年份差異對調配決策的影響'
        ],
        interactiveElements: ['blending-lab', 'winemaker-interviews', 'tasting-comparison'],
        duration: 38
      },
      {
        id: 'l3-9',
        title: '商業分析與市場策略',
        description: '探索波爾多葡萄酒的商業模式、市場分析與國際化策略',
        mapFocus: null,
        objectives: [
          '分析波爾多葡萄酒產業的商業生態系統與價值鏈',
          '掌握市場細分、定位策略和品牌建立方法',
          '理解國際市場拓展策略和跨文化商業實踐',
          '學習數位化時代的商業創新與電商模式',
          '評估投資價值與收藏策略'
        ],
        interactiveElements: ['value-chain-analyzer', 'segmentation-tool', 'market-expansion-planner', 'digital-transformation-roadmap'],
        duration: 40
      },
      {
        id: 'l3-10',
        title: '波爾多葡萄酒的配餐藝術',
        description: '（新增）掌握專業配餐原則，探索波爾多酒款與各國料理的完美搭配',
        mapFocus: null,
        objectives: [
          '理解配餐的科學原理（單寧、酸度、甜度、酒體的作用）',
          '掌握波爾多紅酒與牛排、羊肉、野味的經典搭配',
          '學習白酒與甜酒的配餐策略',
          '探索波爾多酒款與亞洲料理的創新搭配',
          '設計專業的餐酒搭配菜單'
        ],
        interactiveElements: ['food-pairing-lab', 'flavor-bridge-analyzer', 'menu-designer'],
        duration: 35
      },
      {
        id: 'l3-11',
        title: '波爾多葡萄酒產業史與文化',
        description: '探索波爾多葡萄酒的歷史發展、分級制度演變與文化傳承',
        mapFocus: { group: 'Regional' },
        objectives: [
          '了解波爾多葡萄酒業從羅馬時期至今的發展脈絡',
          '掌握1855年分級制度的歷史背景、意義與爭議',
          '理解右岸、格拉夫、甜酒產區的分級體系',
          '探索波爾多葡萄酒的文化內涵與象徵意義',
          '分析產業制度對品質與創新的影響'
        ],
        interactiveElements: ['historical-timeline', 'trade-route-explorer', 'classification-explorer', 'culture-explorer'],
        duration: 65,
        parts: ['l3-11']
      },
      {
        id: 'l3-12',
        title: '年份分析與陳年潛力評估',
        description: '（新增）學習如何評估波爾多葡萄酒的年份差異、陳年潛力與最佳適飲期',
        mapFocus: { group: 'all-regions' },
        objectives: [
          '掌握年份評估的關鍵氣候指標與時間點',
          '理解不同產區與品種的陳年特性',
          '學習如何預測葡萄酒的發展曲線',
          '評估窖藏條件對葡萄酒的影響',
          '制定個人化的陳年策略與適飲規劃'
        ],
        interactiveElements: ['vintage-chart-analyzer', 'aging-curve-simulator', 'cellar-planner'],
        duration: 42
      },
      {
        id: 'l3-13',
        title: '創新技術與未來趨勢',
        description: '探索精準農業、AI釀造、區塊鏈溯源等創新技術在波爾多的應用與未來',
        mapFocus: null,
        objectives: [
          '掌握精準農業技術（無人機、衛星遙感、土壤感測器）的應用',
          '理解數據分析與人工智能在釀造決策中的運用',
          '探索區塊鏈溯源、NFT與數位化創新',
          '分析消費者趨勢與低酒精、有機酒的市場機會',
          '展望波爾多葡萄酒業2030-2050的發展路徑'
        ],
        interactiveElements: ['tech-showcase', 'future-scenarios', 'innovation-case-studies', 'ai-simulator'],
        duration: 70,
        parts: ['l3-13-part1', 'l3-13-part2']
      },
      {
        id: 'l3-14',
        title: 'Level 3 綜合評量',
        description: '檢驗Level 3高級專業階段的學習成果，評估綜合應用能力',
        mapFocus: { group: 'comprehensive-review' },
        objectives: [
          '綜合運用Level 3所學的專業知識',
          '通過實戰場景測試應用能力',
          '完成Level 3認證評估',
          '規劃Level 4或職業發展路徑'
        ],
        interactiveElements: ['comprehensive-assessment', 'scenario-tests', 'professional-evaluation'],
        duration: 45
      }
    ]
  },
  
  level4: {
    title: 'Level 4 - 專家認證',
    description: '專業分析與綜合評估能力培養',
    color: '#E91E63',
    visibleLayers: 'all',
    features: ['expert-analysis', 'investment-grading', 'market-trends', 'production-analysis'],
    lessons: [
      {
        id: 'l4-1',
        title: '高階風土與微地塊分析',
        description: '微地形、土壤剖面、根砧與水分壓力建模，建立地塊分離釀造決策框架',
        mapFocus: { group: 'all-regions', overlay: 'soil-types' },
        objectives: [
          '解讀微地形與水文對葡萄樹生理的影響',
          '建立土壤剖面與根系策略的評估方法',
          '運用水分壓力與成熟動態建立採收視窗',
          '制定微地塊的分離釀造與後續調配策略'
        ],
        interactiveElements: ['micro-terroir-map', 'soil-profile-planner', 'harvest-window-analyzer'],
        duration: 60
      },
      {
        id: 'l4-2',
        title: '進階釀造科學與品質工程',
        description: '酵母代謝、氧管理、還原/氧化風險、穩定化與無/低酒精技術',
        mapFocus: null,
        objectives: [
          '掌握關鍵發酵變數與副產物管理',
          '設計氧管理策略避免還原/氧化問題',
          '評估穩定化與低酒精技術對風格的影響'
        ],
        interactiveElements: ['fermentation-modeler', 'oxygen-planner'],
        duration: 60
      },
      {
        id: 'l4-3',
        title: '橡木與容器科學 2.0',
        description: '木材化學、烘烤熱解產物、混凝土/陶甕/蛋形容器之比較',
        mapFocus: null,
        objectives: [
          '解讀烘烤產物對香氣結構的貢獻',
          '比較不同容器之微氧化與熱慣性',
          '制定容器組合與陳年策略'
        ],
        interactiveElements: ['barrel-toasting-inspector', 'container-comparator'],
        duration: 55
      },
      {
        id: 'l4-4',
        title: '成本結構、資本開支與投報',
        description: 'CAPEX/OPEX、盈虧平衡、敏感度分析與品質最適化',
        mapFocus: null,
        objectives: [
          '建立產品單位成本與盈虧平衡模型',
          '進行價格/產量/成本的敏感度分析',
          '評估品質投資的邊際效益'
        ],
        interactiveElements: ['cost-simulator', 'roi-sensitivity'],
        duration: 65
      },
      {
        id: 'l4-5',
        title: '品牌策略與國際市場',
        description: '定位、價格架構、分銷與直客策略；老世界 vs 新世界比較',
        mapFocus: null,
        objectives: [
          '設計品牌架構與價格階梯',
          '規劃國際分銷與直客併行策略',
          '評估主要市場的文化差異'
        ],
        interactiveElements: ['market-positioning-grid', 'channel-planner'],
        duration: 55
      },
      {
        id: 'l4-6',
        title: '法規與原產地保護',
        description: '歐盟標示、INAO 框架、永續/有機/生物動力認證比較',
        mapFocus: { group: 'Regional' },
        objectives: [
          '理解AOC與歐盟標示規範',
          '比較不同永續體系的要求與邊界',
          '評估法規對創新技術的限制'
        ],
        interactiveElements: ['regulation-explorer', 'label-checker'],
        duration: 50
      },
      {
        id: 'l4-7',
        title: '風險管理與保險',
        description: '氣候、供應鏈、金融與法務風險；保險與對沖工具',
        mapFocus: null,
        objectives: [
          '建立風險矩陣與發生機率/衝擊評分',
          '選擇適切保險與金融對沖工具',
          '制定營運持續計畫(BCP)'
        ],
        interactiveElements: ['risk-matrix-builder', 'hedging-playground'],
        duration: 55
      },
      {
        id: 'l4-8',
        title: '永續與碳盤查',
        description: 'GHG、LCA、包材與物流影響、減碳路線圖與經濟性',
        mapFocus: null,
        objectives: [
          '計算範疇1/2/3的碳排',
          '比較包材與運輸對碳足跡的影響',
          '制定減碳措施與投資回收期'
        ],
        interactiveElements: ['lca-calculator', 'decarbon-roadmap'],
        duration: 60
      },
      {
        id: 'l4-9',
        title: '感官科學與盲品框架（專家級）',
        description: '校準流程、缺陷庫、典型性矩陣、結構化筆記與一致性',
        mapFocus: null,
        objectives: [
          '建立盲品評分與校準流程',
          '擴充感官缺陷庫與矯正方案',
          '運用典型性矩陣進行產區判讀'
        ],
        interactiveElements: ['tasting-calibration', 'fault-library'],
        duration: 70
      },
      {
        id: 'l4-10',
        title: '資料科學與 AI 在酒業',
        description: '需求預測、異常偵測、發酵建模、分群與動態定價',
        mapFocus: null,
        objectives: [
          '理解資料科學流程與資料治理',
          '應用 ML 於需求預測與異常偵測',
          '評估 AI 對營運與品質的影響'
        ],
        interactiveElements: ['forecast-lab', 'anomaly-detector'],
        duration: 65
      },
      {
        id: 'l4-11',
        title: 'En Primeur 與葡萄酒投資',
        description: '歷史、定價模型、波動與相關性、二級市場分析與風險管理',
        mapFocus: null,
        objectives: [
          '理解期酒機制與歷史演變',
          '建立定價與風險評估模型',
          '分析二級市場與投資組合'
        ],
        interactiveElements: ['pricing-simulator', 'portfolio-analyzer'],
        duration: 60
      },
      {
        id: 'l4-12',
        title: '綜合專題與口頭答辯',
        description: '企業案例/產區策略報告、ROI 模擬、口頭答辯',
        mapFocus: null,
        objectives: [
          '整合風土/釀造/市場/財務的決策能力',
          '撰寫結構化研究報告與圖表',
          '完成口頭簡報與答辯'
        ],
        interactiveElements: ['capstone-workflow', 'presentation-coach'],
        duration: 90
      }
    ]
  }
}

// 計算學習進度
export const learningProgress = computed(() => {
  const currentLevelData = learningState.userProgress[`level${learningState.currentLevel}`]
  return {
    percentage: Math.round((currentLevelData.completed / currentLevelData.total) * 100),
    completed: currentLevelData.completed,
    total: currentLevelData.total
  }
})

// 學習系統操作方法
export const learningActions = {
  // 切換學習等級
  setLevel(level) {
    learningState.currentLevel = level
    learningState.currentLesson = null // 設置為 null 以顯示簡介畫面
  },
  
  // 開始課程
  startLesson(lessonId) {
    const level = learningLevels[`level${learningState.currentLevel}`]
    const lesson = level.lessons.find(l => l.id === lessonId)
    if (lesson) {
      learningState.currentLesson = lesson
      learningState.learningMode = true
    }
  },
  
  // 退出課程，返回 Level 簡介頁
  exitLesson() {
    learningState.currentLesson = null
  },
  
  // 完成課程
  completeLesson(lessonId) {
    if (!learningState.completedLessons.includes(lessonId)) {
      learningState.completedLessons.push(lessonId)
      learningState.userProgress[`level${learningState.currentLevel}`].completed++
      
      // 檢查是否解鎖成就
      this.checkAchievements()
    }
  },
  
  // 檢查成就
  checkAchievements() {
    const achievements = [
      {
        id: 'first-lesson',
        title: '初次學習',
        description: '完成第一個課程',
        condition: () => learningState.completedLessons.length === 1
      },
      {
        id: 'level-master',
        title: '等級大師',
        description: '完成一個完整等級',
        condition: () => {
          const level = learningState.userProgress[`level${learningState.currentLevel}`]
          return level.completed === level.total
        }
      }
    ]
    
    achievements.forEach(achievement => {
      if (achievement.condition() && !learningState.achievements.includes(achievement.id)) {
        learningState.achievements.push(achievement.id)
        // 顯示成就通知
        this.showAchievement(achievement)
      }
    })
  },
  
  // 顯示成就通知
  showAchievement(achievement) {
    // 實現成就通知UI
    console.log('Achievement unlocked:', achievement.title)
  },
  
  // 開始測驗
  startQuiz(quizId) {
    learningState.currentQuiz = quizId
  },
  
  // 提交測驗結果
  submitQuizResult(quizId, score, maxScore) {
    learningState.quizScores[quizId] = {
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
      timestamp: new Date().toISOString()
    }
    learningState.currentQuiz = null
  },

  // 測試模式功能
  enableTestMode() {
    learningState.testMode = true
    // 解鎖所有課程
    this.unlockAllLessons()
    // 添加所有成就
    this.unlockAllAchievements()
    console.log('🧪 測試模式已啟用 - 所有功能已解鎖')
  },

  // 解鎖所有課程
  unlockAllLessons() {
    const allLessonIds = [
      // Level 1
      'l1-1', 'l1-2', 'l1-3', 'l1-4', 'l1-5', 'l1-6', 'l1-7', 'l1-8',
      // Level 2  
      'l2-1', 'l2-2', 'l2-3', 'l2-4', 'l2-5', 'l2-6', 'l2-7', 'l2-8', 'l2-9',
      // Level 3
      'l3-1', 'l3-2', 'l3-3'
    ]
    
    learningState.completedLessons = [...allLessonIds]
    
    // 更新進度
    learningState.userProgress = {
      level1: { completed: 8, total: 8 },
      level2: { completed: 9, total: 9 }, 
      level3: { completed: 3, total: 15 },
      level4: { completed: 0, total: 12 }
    }
  },

  // 解鎖所有成就
  unlockAllAchievements() {
    learningState.achievements = [
      'first-lesson', 'level-master', 'climate-expert', 'geography-master',
      'wine-scholar', 'interactive-explorer', 'quiz-champion', 'bordeaux-expert',
      'test-mode-enabled'
    ]
  },

  // 重置為正常模式
  disableTestMode() {
    learningState.testMode = false
    learningState.completedLessons = []
    learningState.userProgress = {
      level1: { completed: 0, total: 8 },
      level2: { completed: 0, total: 12 },
      level3: { completed: 0, total: 15 }, 
      level4: { completed: 0, total: 12 }
    }
    learningState.achievements = []
    learningState.quizScores = {}
    console.log('🔄 已重置為正常學習模式')
  },

  // 快速測試特定課程
  testLesson(lessonId) {
    if (learningState.testMode) {
      this.startLesson(lessonId)
      console.log(`🧪 測試模式：正在測試課程 ${lessonId}`)
      return true
    }
    return false
  },

  // 模擬完成課程（僅測試模式）
  simulateCompleteLesson(lessonId) {
    if (learningState.testMode) {
      if (!learningState.completedLessons.includes(lessonId)) {
        learningState.completedLessons.push(lessonId)
        console.log(`✅ 模擬完成課程：${lessonId}`)
      }
    }
  }
}