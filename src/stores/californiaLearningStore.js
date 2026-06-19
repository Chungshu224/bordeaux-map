// 加州葡萄酒學習系統狀態管理
import { reactive, computed } from 'vue'

// 加州學習進度狀態
export const californiaLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 4 },
    level2: { completed: 0, total: 4 },
    level3: { completed: 0, total: 4 }
  },
  achievements: []
})

// 加州學習等級配置
export const californiaLearningLevels = {
  level1: {
    title: 'Level 1 — 加州入門：陽光與多樣性',
    description: '建立對加州葡萄酒的基礎認知，掌握核心品種、五大地理區域與 AVA 系統，以及基本釀造工藝與餐酒搭配。',
    color: '#8B1A1A',
    modules: [
      { id: 'CA1M1', title: '1.1 認識加州葡萄酒：歷史與全球地位', lessonIds: ['ca-l1-1'] },
      { id: 'CA1M2', title: '1.2 加州產區地理與氣候', lessonIds: ['ca-l1-2'] },
      { id: 'CA1M3', title: '1.3 Napa Valley 深度探索', lessonIds: ['ca-l1-3'] },
      { id: 'CA1M4', title: '1.4 Sonoma County 深度探索', lessonIds: ['ca-l1-4'] }
    ],
    lessons: [
      {
        id: 'ca-l1-1',
        title: '認識加州葡萄酒：歷史、地位與巴黎評判',
        description: '從 1769 年傳教士種下第一株葡萄，到 1976 年震驚世界的巴黎評判——加州如何成為全球第四大葡萄酒產地，以及 AVA 制度介紹',
        duration: 18
      },
      {
        id: 'ca-l1-2',
        title: '加州葡萄酒產區地理與氣候',
        description: '太平洋寒流、海岸山脈、晝夜溫差——六大產區群（North Coast、Central Coast、Sierra Foothills、Inland Valleys、Southern CA、Far North CA）的地理特徵與氣候個性',
        duration: 18
      },
      {
        id: 'ca-l1-3',
        title: 'Napa Valley：16 個子 AVA 的 Cabernet 帝國',
        description: '從 Carneros 到 Calistoga 的南北風土差異，16 個子 AVA 的個性解析，以及 Opus One、Screaming Eagle 等傳奇酒莊',
        duration: 20
      },
      {
        id: 'ca-l1-4',
        title: 'Sonoma County：19 個 AVA 的多元王國',
        description: 'Russian River Valley 的 Pinot Noir、Dry Creek Valley 的 Zinfandel、Alexander Valley 的 Cabernet，以及 99% 可持續農業認證的環保故事',
        duration: 20
      }
    ]
  },

  level2: {
    title: 'Level 2 — 風土深度遊：霧氣、海洋與山脈',
    description: '深入探討太平洋氣候、多元土壤如何塑造不同 AVA 特色，精細剖析納帕、索諾瑪、聖巴巴拉與帕索等核心產區。',
    color: '#1a4a7a',
    modules: [
      { id: 'CA2M1', title: '2.1 土壤與氣候：海洋的影響', lessonIds: ['ca-l2-1'] },
      { id: 'CA2M2', title: '2.2 北海岸：Napa & Sonoma 深度剖析', lessonIds: ['ca-l2-2'] },
      { id: 'CA2M3', title: '2.3 中海岸：Santa Barbara & Paso Robles', lessonIds: ['ca-l2-3'] },
      { id: 'CA2M4', title: '2.4 釀造工藝與品種融合', lessonIds: ['ca-l2-4'] }
    ],
    lessons: [
      {
        id: 'ca-l2-1',
        title: '土壤與氣候：太平洋迷霧的力量',
        description: '太平洋迷霧（The Fog）如何調節氣溫讓 Napa 與 Sonoma 降溫，沖積平原 vs 火山岩土壤對葡萄風味的塑造',
        duration: 18,
        locked: true
      },
      {
        id: 'ca-l2-2',
        title: 'Napa Valley 16 個次產區 & Sonoma 多樣性',
        description: '從 Rutherford Dust 到 Stags Leap District，Napa 16 個子 AVA 全解析；Sonoma 19 個 AVA 的品種版圖：Russian River Pinot、Dry Creek Zinfandel',
        duration: 22,
        locked: true
      },
      {
        id: 'ca-l2-3',
        title: 'Santa Barbara 橫向山谷 & Paso Robles 石灰岩',
        description: '聖巴巴拉獨特的橫向山谷讓涼爽海風直入，Santa Rita Hills 的 Pinot 傳奇；帕索羅布爾斯石灰岩地質與 Rhône 品種的完美結合',
        duration: 20,
        locked: true
      },
      {
        id: 'ca-l2-4',
        title: '橡木桶藝術、氣泡酒工藝與隆河品種',
        description: '法國桶 vs 美國桶的風味差異，加州傳統法氣泡酒（Méthode Champenoise）工藝，以及 Syrah、Grenache、Sangiovese 在加州的詮釋',
        duration: 20,
        locked: true
      }
    ]
  },

  level3: {
    title: 'Level 3 — 專業實務：永續、技術與未來',
    description: '具備專業選酒能力與宏觀產業視野：微氣候大師課、永續認證、巴黎審判傳奇到 Cult Wine，以及加州高級料理配餐實務。',
    color: '#3d6b35',
    modules: [
      { id: 'CA3M1', title: '3.1 地圖繪製與微氣候大師課', lessonIds: ['ca-l3-1'] },
      { id: 'CA3M2', title: '3.2 高階釀造與永續發展', lessonIds: ['ca-l3-2'] },
      { id: 'CA3M3', title: '3.3 商業實務與市場策略', lessonIds: ['ca-l3-3'] },
      { id: 'CA3M4', title: '3.4 地酒配地菜：加州高級料理實務', lessonIds: ['ca-l3-4'] }
    ],
    lessons: [
      {
        id: 'ca-l3-1',
        title: '微氣候大師課：山坡、谷地與 AVA 精細分析',
        description: '研究 Hillside vs Valley Floor 的風味落差；互動地圖分析 Howell Mountain、Russian River Valley 等特定 AVA 的風土特徵',
        duration: 22,
        locked: true
      },
      {
        id: 'ca-l3-2',
        title: '高階釀造技術與加州永續認證',
        description: '加州可持續葡萄種植聯盟（CCSW）規範詳解；自然酒運動在加州的興起、有機與生物動力法（Biodynamic）實踐案例',
        duration: 20,
        locked: true
      },
      {
        id: 'ca-l3-3',
        title: '巴黎審判傳奇、Cult Wine 與年份評估',
        description: '1976 年巴黎審判如何改寫葡萄酒歷史；Screaming Eagle、Harlan Estate 等膜拜酒市場解析；乾旱、山火與氣候變遷對年份品質的影響',
        duration: 22,
        locked: true
      },
      {
        id: 'ca-l3-4',
        title: '跨產區加州配餐實務與對比品飲',
        description: '設計一份跨越 Napa、Sonoma、Santa Barbara、Paso Robles 的加州配餐清單（Pairing Menu），包含不同風格的對比品飲設計',
        duration: 25,
        locked: true
      }
    ]
  }
}

// ── localStorage 進度持久化 ────────────────────────────────────────
const CA_STORAGE_KEY = 'california-progress'

function saveToStorage() {
  try {
    localStorage.setItem(CA_STORAGE_KEY, JSON.stringify(californiaLearningState.completedLessons))
  } catch (e) { console.warn('[california] save error', e) }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(CA_STORAGE_KEY)
    if (!raw) return
    const lessons = JSON.parse(raw)
    if (!Array.isArray(lessons)) return
    for (const lessonId of lessons) {
      if (californiaLearningState.completedLessons.includes(lessonId)) continue
      californiaLearningState.completedLessons.push(lessonId)
      const match = lessonId.match(/^ca-l(\d+)-/)
      if (match) {
        const lk = `level${match[1]}`
        if (californiaLearningState.userProgress[lk]) {
          californiaLearningState.userProgress[lk].completed = Math.min(
            californiaLearningState.userProgress[lk].completed + 1,
            californiaLearningState.userProgress[lk].total
          )
        }
      }
    }
  } catch (e) { console.warn('[california] load error', e) }
}

loadFromStorage()

// 供 CaliforniaLearningSystem 在 Supabase 同步後呼叫
export function californiaReloadFromStorage() {
  californiaLearningState.completedLessons = []
  Object.keys(californiaLearningState.userProgress).forEach(k => {
    californiaLearningState.userProgress[k].completed = 0
  })
  loadFromStorage()
}

// 加州學習操作
export const californiaLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = californiaLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    californiaLearningState.currentLevel = level
    californiaLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = californiaLearningLevels[`level${californiaLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      californiaLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    californiaLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!californiaLearningState.completedLessons.includes(lessonId)) {
      californiaLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 ca-l1-3 → level1, ca-l3-1 → level3）
      const match = lessonId.match(/^ca-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : californiaLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (californiaLearningState.userProgress[levelKey]) {
        californiaLearningState.userProgress[levelKey].completed = Math.min(
          californiaLearningState.userProgress[levelKey].completed + 1,
          californiaLearningState.userProgress[levelKey].total
        )
      }
      saveToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    californiaLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    californiaLearningState.testMode = false
    californiaLearningState.completedLessons = []
    Object.keys(californiaLearningState.userProgress).forEach(key => {
      californiaLearningState.userProgress[key].completed = 0
    })
  }
}

// 計算屬性：整體進度
export const californiaLearningProgress = computed(() => {
  const total = Object.values(californiaLearningState.userProgress).reduce((s, v) => s + v.total, 0)
  const done = Object.values(californiaLearningState.userProgress).reduce((s, v) => s + v.completed, 0)
  return total > 0 ? Math.round(done / total * 100) : 0
})

// ── i18n: 將 levels 結構套上翻譯後回傳 ──────────────────────
// 用法：
//   import { useI18n } from 'vue-i18n'
//   const { t, te } = useI18n()
//   const levels = computed(() => getLocalizedCaliforniaLevels(t, te))
// 缺翻譯時會 fallback 到原始 zh-TW 字串，保證不會空白。
export function getLocalizedCaliforniaLevels(t, te) {
  const tr = (key, fallback) => {
    if (!t) return fallback
    if (te && !te(key)) return fallback
    const v = t(key)
    return (!v || v === key) ? fallback : v
  }
  const out = {}
  for (const lvKey of Object.keys(californiaLearningLevels)) {
    const lv = californiaLearningLevels[lvKey]
    const n = lvKey.replace('level', '')
    out[lvKey] = {
      ...lv,
      title: tr(`california.levels.${n}.title`, lv.title),
      description: tr(`california.levels.${n}.description`, lv.description),
      modules: (lv.modules || []).map(m => ({
        ...m,
        title: tr(`california.modules.${m.id}`, m.title),
      })),
      lessons: (lv.lessons || []).map(ls => ({
        ...ls,
        title: tr(`california.lessons.${ls.id}.title`, ls.title),
        description: tr(`california.lessons.${ls.id}.description`, ls.description),
      })),
    }
  }
  return out
}
