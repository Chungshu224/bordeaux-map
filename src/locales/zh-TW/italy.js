/**
 * 義大利課程相關翻譯（繁體中文）
 * - selector: ItalyLevelSelector 首頁文字
 * - layout:   ItalyCourseLayout 課程列表頁文字
 * - levels:   Level 1/2/3 標題與描述
 * - modules:  各 Level 的模組標題
 * - lessons:  每課的 title
 * - games:    ItalyGameHubPage 遊戲清單
 * - manager:  成就通知 Toast / Modal
 */
export default {
  selector: {
    breadcrumbCountry: '歐洲・西南歐',
    tagline: '義大利葡萄酒・20 個行政區・地中海風土',
    title: '義大利葡萄酒',
    subtitle: 'Italian Wine · DOCG · Nebbiolo · Sangiovese · Sicilia',
    description: '從 DOCG 分級制度到南北 20 個行政區、Barolo 與 Brunello 的偉大、Etna 火山與 Sicilia 的新浪潮——系統化掌握義大利葡萄酒。',
    levelTrackTitle: '選擇課程階段',
    levelTrackSubtitle: '從入門到專家認證，循序掌握 20 個產區與義大利葡萄酒的多樣性。',
    heroStats: {
      regions: '行政區',
      docg: 'DOCG 產區',
      varieties: '原生品種',
    },
    progress: {
      start: '開始你的義大利葡萄酒之旅',
      complete: '🎉 已完成全部課程，恭喜成為義大利葡萄酒達人！',
      progressText: '已完成 {done} / {total} 課',
      continueLevel2: '繼續 Level 2',
      continueLevel1: '繼續 Level 1',
      startBtn: '開始學習',
      currentStageL1: '當前階段：Level 1 · 義大利入門',
      currentStageL2: '當前階段：Level 2 · 進階探索',
      currentStageL3: '當前階段：Level 3 · 專家認證',
    },
    quickNav: {
      progressDesc: '{pct}% 完成・{done} 課',
    },
    unlockHint: {
      level2: '完成 Level 1 後解鎖',
      level3: '完成 Level 2 後解鎖',
    },
  },

  layout: {
    chapterOverview: '章節總覽',
    chapterDrawer: '章節導航',
    chapterToggle: '≡ 章節',
    completedLabel: '{done}/{total} 課程完成',
    motivation: '🎯 再完成 {n} 課即可完成此階段！',
    moduleCount: '{done}/{total} 完成',
    tagDone: '完成',
    tagStart: '開始 ▶',
  },

  levels: {
    1: {
      title: 'Level 1 - 義大利葡萄酒入門',
      subtitle: '建立基礎知識，探索經典產區',
      shortTitle: '義大利入門',
      shortSubtitle: '基礎認識',
      description: '建立義大利葡萄酒基礎：DOCG/DOC/IGT 分級、20 個行政區、五大核心品種與餐酒搭配。',
      tags: ['DOCG/DOC/IGT', '20 行政區', '5 大品種', 'Sangiovese', 'Italy 101'],
      unlockHint: '完成 Level 1 後解鎖',
    },
    2: {
      title: 'Level 2 - 義大利葡萄酒進階',
      subtitle: '深入探索全國產區，掌握餐酒搭配',
      shortTitle: '進階探索',
      shortSubtitle: '深度產區',
      description: '深入北中南差異、Barolo / Brunello / Etna、Nebbiolo 與 Aglianico 等進階品種。',
      tags: ['北義 Barolo', 'Toscana Brunello', '南義島嶼', 'Nebbiolo', 'Etna'],
      unlockHint: '完成 Level 1 後解鎖',
    },
    3: {
      title: 'Level 3 - 義大利葡萄酒專家',
      subtitle: '大師級知識、盲品技巧、產業深度',
      shortTitle: '專家認證',
      shortSubtitle: '盲品與侍酒',
      description: '系統盲品方法、稀有品種、侍酒師實務、永續與自然酒運動。',
      tags: ['盲品系統', '稀有品種', '侍酒實務', '自然酒', '永續'],
      unlockHint: '完成 Level 2 後解鎖',
    },
  },

  modules: {
    // Level 1
    L1M1: '第一章：義大利葡萄酒基礎',
    L1M2: '第二章：五大必學產區',
    L1M3: '第三章：基礎品種認識',
    L1M4: '第四章：基礎餐酒搭配',
    L1M5: '第五章：Level 1 綜合評量',
    // Level 2
    L2M1: '第一章：北義產區全覽',
    L2M2: '第二章：中義產區深度',
    L2M3: '第三章：南義與島嶼',
    L2M4: '第四章：進階品種研究',
    L2M5: '第五章：投資與收藏',
    L2M6: '第六章：Level 2 綜合評量',
    // Level 3
    L3M1: '第一章：稀有品種與小產區',
    L3M2: '第二章：酒標解讀專家課',
    L3M3: '第三章：年份與陳年',
    L3M4: '第四章：盲品訓練',
    L3M5: '第五章：產業與市場',
    L3M6: '第六章：侍酒師實務',
    L3M7: '第七章：餐酒搭配實務',
    L3M8: '第八章：Level 3 綜合評量',
  },

  lessons: {
    // Level 1 - Module 1
    L1M1L1: '義大利葡萄酒簡介',
    L1M1L2: '義大利分級制度 (DOCG/DOC/IGT)',
    L1M1L3: '義大利地理與氣候',
    // Level 1 - Module 2
    L1M2L1: 'Piemonte 皮埃蒙特 - 義大利之王',
    L1M2L2: 'Tuscany 托斯卡納 - 經典之美',
    L1M2L3: 'Veneto 威尼托 - 水都風情',
    L1M2L4: 'Sicily 西西里 - 火山之島',
    L1M2L5: 'Lombardy 倫巴第 - 氣泡之鄉',
    // Level 1 - Module 3
    L1M3L1: '五大紅葡萄品種',
    L1M3L2: '五大白葡萄品種',
    // Level 1 - Module 4 / 5
    L1M4L1: '義式料理與葡萄酒入門',
    L1M4L2: 'Level 1 綜合評量',
    // Level 2 - Module 1
    L2M1L1: 'Trentino-Alto Adige 特倫蒂諾',
    L2M1L2: 'Friuli Venezia Giulia 弗留利',
    L2M1L3: 'Liguria 利古里亞',
    L2M1L4: 'Emilia-Romagna 艾米利亞',
    // Level 2 - Module 2
    L2M2L1: 'Marche 馬爾凱',
    L2M2L2: 'Umbria 翁布里亞',
    L2M2L3: 'Lazio 拉齊奧',
    L2M2L4: 'Abruzzo 阿布魯佐',
    L2M2L5: 'Molise 莫利塞',
    // Level 2 - Module 3
    L2M3L1: 'Campania 坎帕尼亞',
    L2M3L2: 'Puglia 普利亞',
    L2M3L3: 'Basilicata 巴西利卡塔',
    L2M3L4: 'Calabria 卡拉布里亞',
    L2M3L5: 'Sardinia 薩丁尼亞',
    // Level 2 - Module 4
    L2M4L1: 'Nebbiolo 深度解析',
    L2M4L2: 'Sangiovese 深度解析',
    L2M4L3: '南義本土品種',
    L2M4L4: '白葡萄品種進階',
    // Level 2 - Module 5
    L2M5L1: '義大利精品酒莊投資指南',
    L2M5L2: '年份評鑑與收藏策略',
    L2M5L3: '國際市場與拍賣',
    L2FinalExam: 'Level 2 綜合評量',
    // Level 3 - Module 1
    L3M1L1: "Valle d'Aosta 瓦萊達奧斯塔",
    L3M1L2: '北義稀有品種',
    L3M1L3: '南義稀有品種與本土品種',
    L3M1L4: 'Friuli 白酒革命',
    // Level 3 - Module 2
    L3M2L1: 'DOCG 酒標深度解析',
    L3M2L2: '年份與生產者資訊',
    L3M2L3: '偽標識別技巧',
    L3M2L4: 'IGT 超級托斯卡納指南',
    // Level 3 - Module 3
    L3M3L1: '義大利年份指南',
    L3M3L2: '陳年條件與地窖管理',
    L3M3L3: '適飲期判斷',
    L3M3L4: '投資級年份分析',
    // Level 3 - Module 4
    L3M4L1: '系統化盲品方法論',
    L3M4L2: '品種辨識技巧',
    L3M4L3: '產區風土識別',
    L3M4L4: '年份識別方法',
    L3M4L5: '實戰盲品演練',
    // Level 3 - Module 5
    L3M5L1: '義大利葡萄酒產業結構',
    L3M5L2: '出口市場分析',
    L3M5L3: '永續農業與自然酒',
    L3M5L4: '未來趨勢與氣候變遷',
    // Level 3 - Module 6
    L3M6L1: '進階餐酒搭配理論',
    L3M6L2: '老酒的侍酒與醒酒藝術',
    L3M6L3: '酒單設計與庫存管理',
    // Level 3 - Module 7
    L3M7L1: '地域搭配哲學：南北差異全攻略',
    L3M7L2: '特殊酒款搭配：氣泡、甜酒與加烈酒',
    L3M7L3: '侍酒師實務：溫度、開瓶、醒酒與服務',
    L3M7L4: '餐酒搭配實戰：設計完整套餐酒單',
    L3FinalExam: 'Level 3 綜合評量',
  },

  games: {
    hub: {
      title: '義大利互動練習',
      subtitle: '義大利葡萄酒挑戰賽 · 測試你的知識',
      stats: {
        played: '已挑戰遊戲',
        total: '全部遊戲',
        best: '累計最高分',
      },
    },
    region: {
      name: '產區歸屬賽',
      desc: '看到 DOCG / DOC 名稱，快速選出所屬的義大利大區',
      tags: ['地理', '簡單 / 困難', '10–15 題'],
    },
    classification: {
      name: '分級辨識快答',
      desc: '義大利法定產區是 DOCG、DOC 還是 IGT？考驗你的記憶',
      tags: ['分級制度', '快答', '10–20 題'],
    },
    grape: {
      name: '品種 × 產區配對',
      desc: '給出義大利葡萄品種，快速選出最著名的產區或 DOCG',
      tags: ['品種', '配對', '簡單 / 困難'],
    },
    vintage: {
      name: '年份品質排序',
      desc: '將義大利重要年份依品質由最佳排到最差，Toscana 或 Piemonte',
      tags: ['年份', '排序', '5 輪'],
    },
    desc: {
      name: '香氣描述競猜',
      desc: '閱讀葡萄酒風格描述，猜出對應的義大利知名酒款',
      tags: ['品飲', '描述', '10–15 題'],
    },
  },

  manager: {
    toastTitle: '成就解鎖！',
    modalTitle: '🏆 義大利葡萄酒成就系統',
    points: '+{n} 點',
  },
}
