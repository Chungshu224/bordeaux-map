/**
 * 義大利課程資料
 * 從 Italy Wine Learning-map 專案移植並整合至 Bordeaux Wine Academy
 */
export const courseLevels = {
  level1: {
    id: 'level1',
    title: 'Level 1 - 義大利葡萄酒入門',
    subtitle: '建立基礎知識，探索經典產區',
    duration: '3-4 小時',
    difficulty: '入門',
    icon: '🌱',
    color: '#4CAF50',
    totalLessons: 12,
    modules: [
      {
        id: 'L1M1',
        title: '第一章：義大利葡萄酒基礎',
        lessons: [
          { id: 'L1M1L1', title: '義大利葡萄酒簡介' },
          { id: 'L1M1L2', title: '義大利分級制度 (DOCG/DOC/IGT)' },
          { id: 'L1M1L3', title: '義大利地理與氣候', mapRegion: 'all' }
        ]
      },
      {
        id: 'L1M2',
        title: '第二章：五大必學產區',
        lessons: [
          { id: 'L1M2L1', title: 'Piemonte 皮埃蒙特 - 義大利之王', mapRegion: 'piedmont' },
          { id: 'L1M2L2', title: 'Tuscany 托斯卡納 - 經典之美', mapRegion: 'tuscany' },
          { id: 'L1M2L3', title: 'Veneto 威尼托 - 水都風情', mapRegion: 'veneto' },
          { id: 'L1M2L4', title: 'Sicily 西西里 - 火山之島', mapRegion: 'sicily' },
          { id: 'L1M2L5', title: 'Lombardy 倫巴第 - 氣泡之鄉', mapRegion: 'lombardy' }
        ]
      },
      {
        id: 'L1M3',
        title: '第三章：基礎品種認識',
        lessons: [
          { id: 'L1M3L1', title: '五大紅葡萄品種' },
          { id: 'L1M3L2', title: '五大白葡萄品種' }
        ]
      },
      {
        id: 'L1M4',
        title: '第四章：基礎餐酒搭配',
        lessons: [
          { id: 'L1M4L1', title: '義式料理與葡萄酒入門' }
        ]
      },
      {
        id: 'L1M5',
        title: '第五章：Level 1 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L1M4L2', title: 'Level 1 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level2: {
    id: 'level2',
    title: 'Level 2 - 義大利葡萄酒進階',
    subtitle: '深入探索全國產區，掌握餐酒搭配',
    duration: '6-8 小時',
    difficulty: '進階',
    icon: '🍷',
    color: '#FF9800',
    totalLessons: 24,
    modules: [
      {
        id: 'L2M1',
        title: '第一章：北義產區全覽',
        lessons: [
          { id: 'L2M1L1', title: 'Trentino-Alto Adige 特倫蒂諾', mapRegion: 'trentino' },
          { id: 'L2M1L2', title: 'Friuli Venezia Giulia 弗留利', mapRegion: 'friuli' },
          { id: 'L2M1L3', title: 'Liguria 利古里亞', mapRegion: 'liguria' },
          { id: 'L2M1L4', title: 'Emilia-Romagna 艾米利亞', mapRegion: 'emilia' }
        ]
      },
      {
        id: 'L2M2',
        title: '第二章：中義產區深度',
        lessons: [
          { id: 'L2M2L1', title: 'Marche 馬爾凱', mapRegion: 'marche' },
          { id: 'L2M2L2', title: 'Umbria 翁布里亞', mapRegion: 'umbria' },
          { id: 'L2M2L3', title: 'Lazio 拉齊奧', mapRegion: 'lazio' },
          { id: 'L2M2L4', title: 'Abruzzo 阿布魯佐', mapRegion: 'abruzzo' },
          { id: 'L2M2L5', title: 'Molise 莫利塞', mapRegion: 'molise' }
        ]
      },
      {
        id: 'L2M3',
        title: '第三章：南義與島嶼',
        lessons: [
          { id: 'L2M3L1', title: 'Campania 坎帕尼亞', mapRegion: 'campania' },
          { id: 'L2M3L2', title: 'Puglia 普利亞', mapRegion: 'puglia' },
          { id: 'L2M3L3', title: 'Basilicata 巴西利卡塔', mapRegion: 'basilicata' },
          { id: 'L2M3L4', title: 'Calabria 卡拉布里亞', mapRegion: 'calabria' },
          { id: 'L2M3L5', title: 'Sardinia 薩丁尼亞', mapRegion: 'sardinia' }
        ]
      },
      {
        id: 'L2M4',
        title: '第四章：進階品種研究',
        lessons: [
          { id: 'L2M4L1', title: 'Nebbiolo 深度解析' },
          { id: 'L2M4L2', title: 'Sangiovese 深度解析' },
          { id: 'L2M4L3', title: '南義本土品種' },
          { id: 'L2M4L4', title: '白葡萄品種進階' }
        ]
      },
      {
        id: 'L2M5',
        title: '第五章：投資與收藏',
        lessons: [
          { id: 'L2M5L1', title: '義大利精品酒莊投資指南' },
          { id: 'L2M5L2', title: '年份評鑑與收藏策略' },
          { id: 'L2M5L3', title: '國際市場與拍賣' }
        ]
      },
      {
        id: 'L2M6',
        title: '第六章：Level 2 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L2FinalExam', title: 'Level 2 綜合評量', isFinalExam: true }
        ]
      }
    ]
  },

  level3: {
    id: 'level3',
    title: 'Level 3 - 義大利葡萄酒專家',
    subtitle: '大師級知識、盲品技巧、產業深度',
    duration: '10-12 小時',
    difficulty: '專家',
    icon: '🏆',
    color: '#9C27B0',
    totalLessons: 31,
    prerequisites: ['完成 Level 1', '完成 Level 2'],
    modules: [
      {
        id: 'L3M1',
        title: '第一章：稀有品種與小產區',
        lessons: [
          { id: 'L3M1L1', title: 'Valle d\'Aosta 瓦萊達奧斯塔' },
          { id: 'L3M1L2', title: '北義稀有品種' },
          { id: 'L3M1L3', title: '南義稀有品種與本土品種' },
          { id: 'L3M1L4', title: 'Friuli 白酒革命' }
        ]
      },
      { id: 'L3M2', title: '第二章：酒標解讀專家課', lessons: [
        { id: 'L3M2L1', title: 'DOCG 酒標深度解析' },
        { id: 'L3M2L2', title: '年份與生產者資訊' },
        { id: 'L3M2L3', title: '偽標識別技巧' },
        { id: 'L3M2L4', title: 'IGT 超級托斯卡納指南' }
      ]},
      { id: 'L3M3', title: '第三章：年份與陳年', lessons: [
        { id: 'L3M3L1', title: '義大利年份指南' },
        { id: 'L3M3L2', title: '陳年條件與地窖管理' },
        { id: 'L3M3L3', title: '適飲期判斷' },
        { id: 'L3M3L4', title: '投資級年份分析' }
      ]},
      { id: 'L3M4', title: '第四章：盲品訓練', lessons: [
        { id: 'L3M4L1', title: '系統化盲品方法論' },
        { id: 'L3M4L2', title: '品種辨識技巧' },
        { id: 'L3M4L3', title: '產區風土識別' },
        { id: 'L3M4L4', title: '年份識別方法' },
        { id: 'L3M4L5', title: '實戰盲品演練' }
      ]},
      { id: 'L3M5', title: '第五章：產業與市場', lessons: [
        { id: 'L3M5L1', title: '義大利葡萄酒產業結構' },
        { id: 'L3M5L2', title: '出口市場分析' },
        { id: 'L3M5L3', title: '永續農業與自然酒' },
        { id: 'L3M5L4', title: '未來趨勢與氣候變遷' }
      ]},
      { id: 'L3M6', title: '第六章：侍酒師實務', lessons: [
        { id: 'L3M6L1', title: '進階餐酒搭配理論' },
        { id: 'L3M6L2', title: '老酒的侍酒與醒酒藝術' },
        { id: 'L3M6L3', title: '酒單設計與庫存管理' }
      ]},
      { id: 'L3M7', title: '第七章：餐酒搭配實務', lessons: [
        { id: 'L3M7L1', title: '地域搭配哲學：南北差異全攻略' },
        { id: 'L3M7L2', title: '特殊酒款搭配：氣泡、甜酒與加烈酒' },
        { id: 'L3M7L3', title: '侍酒師實務：溫度、開瓶、醒酒與服務' },
        { id: 'L3M7L4', title: '餐酒搭配實戰：設計完整套餐酒單' }
      ]},
      {
        id: 'L3M8',
        title: '第八章：Level 3 綜合評量',
        isFinalExamModule: true,
        lessons: [
          { id: 'L3FinalExam', title: 'Level 3 綜合評量', isFinalExam: true }
        ]
      }
    ]
  }
}

export function getUserProgress (levelKey) {
  const saved = localStorage.getItem(`italy-${levelKey}-progress`)
  return saved ? JSON.parse(saved) : { completedLessons: [] }
}

export function saveProgress (levelKey, lessonId) {
  const progress = getUserProgress(levelKey)
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId)
    localStorage.setItem(`italy-${levelKey}-progress`, JSON.stringify(progress))
  }
}

export function getLevelProgressPct (levelKey) {
  const level = courseLevels[levelKey]
  if (!level) return 0
  const progress = getUserProgress(levelKey)
  const totalLessons = level.totalLessons
  const completed = progress.completedLessons.length
  return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
}

/**
 * 單一來源的解鎖規則，避免選階段頁與課程頁判斷不一致。
 * 兼容舊資料：若過去只寫入最終評量 lessonId，仍視為已解鎖下一級。
 */
export function isItalyLevelUnlocked (levelKey) {
  if (levelKey === 'level1') return true

  if (levelKey === 'level2') {
    const l1Progress = getUserProgress('level1')
    const l1Done = l1Progress.completedLessons || []
    return getLevelProgressPct('level1') >= 100 || l1Done.includes('L1M4L2')
  }

  if (levelKey === 'level3') {
    const l2Progress = getUserProgress('level2')
    const l2Done = l2Progress.completedLessons || []
    return getLevelProgressPct('level2') >= 100 || l2Done.includes('L2FinalExam')
  }

  return false
}
