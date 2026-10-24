// 法國隆河（Vallée du Rhône）學習系統狀態管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// 隆河學習進度狀態
export const rhoneLearningState = reactive({
  currentLevel: 1,
  currentLesson: null,
  completedLessons: [],
  testMode: false,
  userProgress: {
    level1: { completed: 0, total: 6 },
    level2: { completed: 0, total: 8 },
    level3: { completed: 0, total: 7 }
  },
  achievements: []
})

// 隆河學習等級配置（框架版：課程內容待補；大綱以 RHONE_COURSE_FRAMEWORK.md 第 2 節為準）
export const rhoneLearningLevels = {
  "level1": {
    "title": "Level 1 - 隆河谷入門",
    "description": "建立隆河谷整體地圖：地理歷史、氣候土壤、主要品種與分級金字塔",
    "color": "#7A2E5C",
    "modules": [
      { "id": "RH1M1", "title": "地理、歷史與風土", "lessonIds": ["rh-l1-1", "rh-l1-2"] },
      { "id": "RH1M2", "title": "葡萄品種", "lessonIds": ["rh-l1-3", "rh-l1-4"] },
      { "id": "RH1M3", "title": "產區總覽與評量", "lessonIds": ["rh-l1-5", "rh-l1-6"] }
    ],
    "lessons": [
      { "id": "rh-l1-1", "title": "認識隆河谷", "description": "地理、歷史與南北二分：從羅馬時代的 Vienne 到教皇新堡的由來", "duration": 15 },
      { "id": "rh-l1-2", "title": "氣候、土壤與栽培", "description": "北隆河的半大陸性陡坡與南隆河的地中海氣候、Mistral 與卵石", "duration": 16 },
      { "id": "rh-l1-3", "title": "主要紅葡萄品種", "description": "Syrah、Grenache、Mourvèdre 與 GSM 混釀概念", "duration": 18 },
      { "id": "rh-l1-4", "title": "主要白葡萄品種", "description": "Viognier、Marsanne、Roussanne 與南隆河白品種", "duration": 16 },
      { "id": "rh-l1-5", "title": "隆河產區總覽與分級金字塔", "description": "Côtes du Rhône → Villages → 獨立 Crus 的分級結構與北／南 cru 名單", "duration": 18 },
      { "id": "rh-l1-6", "title": "Level 1 綜合評量", "description": "整合地理、品種與分級金字塔，通過 Level 1 測驗", "duration": 25 }
    ]
  },
  "level2": {
    "title": "Level 2 - 隆河產區與法規",
    "description": "逐區掌握北隆河各 cru、教皇新堡、南隆河各 cru 與其他名稱",
    "color": "#B5502E",
    "modules": [
      { "id": "RH2M1", "title": "分級與區域名稱", "lessonIds": ["rh-l2-1"] },
      { "id": "RH2M2", "title": "北隆河", "lessonIds": ["rh-l2-2", "rh-l2-3", "rh-l2-4"] },
      { "id": "RH2M3", "title": "南隆河", "lessonIds": ["rh-l2-5", "rh-l2-6"] },
      { "id": "RH2M4", "title": "其餘名稱與評量", "lessonIds": ["rh-l2-7", "rh-l2-8"] }
    ],
    "lessons": [
      { "id": "rh-l2-1", "title": "Côtes du Rhône 與 Villages 法規", "description": "品種比例、酒款類型、Villages 與可加註地名的村莊", "duration": 20 },
      { "id": "rh-l2-2", "title": "Côte-Rôtie、Condrieu 與 Château-Grillet", "description": "北隆河最北端：Syrah 與 Viognier 共發酵、單一莊園 AOC", "duration": 22 },
      { "id": "rh-l2-3", "title": "Hermitage、Crozes-Hermitage 與 Saint-Joseph", "description": "北隆河的核心 cru：丘陵分塊、規模與風格差異", "duration": 22 },
      { "id": "rh-l2-4", "title": "Cornas、Saint-Péray 與北隆河邊緣", "description": "Cornas 的 Syrah、Saint-Péray 的白酒與氣泡，以及 Brézème、Seyssuel 等外圍", "duration": 18 },
      { "id": "rh-l2-5", "title": "Châteauneuf-du-Pape", "description": "13 個品種、卵石風土與教皇新堡的法規", "duration": 22 },
      { "id": "rh-l2-6", "title": "Gigondas、Vacqueyras 與其他南隆河 crus", "description": "南隆河各 cru 的品種規定與風格差異", "duration": 22 },
      { "id": "rh-l2-7", "title": "粉紅、甜酒、氣泡與外圍產區", "description": "Tavel、Lirac、VDN、Die 與 Ventoux、Luberon 等外圍名稱", "duration": 18 },
      { "id": "rh-l2-8", "title": "Level 2 綜合評量", "description": "整合北／南 cru、品種與法規，通過 Level 2 測驗", "duration": 30 }
    ]
  },
  "level3": {
    "title": "Level 3 - 隆河 Diploma／MW 精修",
    "description": "以 WSET Diploma 並延伸至 MW 為目標：栽培釀造深度、風土比較、法規判讀、產業市場與論述",
    "color": "#D08C2F",
    "modules": [
      { "id": "RH3M1", "title": "栽培與釀造", "lessonIds": ["rh-l3-1", "rh-l3-2"] },
      { "id": "RH3M2", "title": "風土、品種與法規", "lessonIds": ["rh-l3-3", "rh-l3-4"] },
      { "id": "RH3M3", "title": "產業、應考與評量", "lessonIds": ["rh-l3-5", "rh-l3-6", "rh-l3-7"] }
    ],
    "lessons": [
      { "id": "rh-l3-1", "title": "葡萄栽培深度與氣候變遷", "description": "北隆河陡坡、南隆河老藤與缺水，以及氣候變遷下的適應", "duration": 22 },
      { "id": "rh-l3-2", "title": "釀造與風格", "description": "Syrah、Grenache 與白酒的釀造選擇如何決定風格", "duration": 22 },
      { "id": "rh-l3-3", "title": "風土比較與品種剖析", "description": "建立可用於盲品與論述題的北／南隆河比較框架", "duration": 24 },
      { "id": "rh-l3-4", "title": "法規深度與標籤判讀", "description": "Côtes du Rhône 家族的標籤寫法、IGP 與常見混淆點", "duration": 22 },
      { "id": "rh-l3-5", "title": "產業、市場與貿易", "description": "Inter Rhône、négociant、合作社與獨立酒莊的產業結構", "duration": 20 },
      { "id": "rh-l3-6", "title": "Diploma 品飲與論述", "description": "把隆河知識轉成可應考的盲品與 MW 風格論述技巧", "duration": 25 },
      { "id": "rh-l3-7", "title": "Level 3 綜合評量", "description": "以模擬題整合全部內容，完成 Level 3", "duration": 35 }
    ]
  }
}

// ── localStorage 進度持久化（依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的進度）──
const RHONE_PROGRESS_KEY = 'rhone-wine-academy-progress'

function progressStorageKey(userId) {
  return `${RHONE_PROGRESS_KEY}:${userId}`
}

function saveProgressToStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    localStorage.setItem(progressStorageKey(userId), JSON.stringify({
      completedLessons: rhoneLearningState.completedLessons,
      userProgress: rhoneLearningState.userProgress
    }))
  } catch (e) { console.warn('[rhone-learn] save error', e) }
}

function loadProgressFromStorage() {
  const userId = authState.user?.id
  if (!userId) return
  try {
    const raw = localStorage.getItem(progressStorageKey(userId))
    if (!raw) return
    const data = JSON.parse(raw)
    if (Array.isArray(data.completedLessons)) {
      rhoneLearningState.completedLessons = data.completedLessons
    }
    if (data.userProgress) {
      Object.keys(data.userProgress).forEach(key => {
        if (rhoneLearningState.userProgress[key]) {
          rhoneLearningState.userProgress[key].completed = data.userProgress[key].completed || 0
        }
      })
    }
  } catch (e) { console.warn('[rhone-learn] load error', e) }
}

// 供 RhoneLearningSystem 在 Supabase 同步後呼叫，重新載入 store 狀態
export function rhoneReloadFromStorage() {
  rhoneLearningState.completedLessons = []
  Object.keys(rhoneLearningState.userProgress).forEach(k => {
    rhoneLearningState.userProgress[k].completed = 0
  })
  loadProgressFromStorage()
}

// 登入／切換帳號時重新載入該帳號自己的進度，避免殘留前一位使用者的資料
watch(() => authState.user?.id, (userId, prevUserId) => {
  if (userId !== prevUserId) rhoneReloadFromStorage()
})

// 希臘學習操作
export const rhoneLearningActions = {
  // 取得指定 Level 最後一課 ID
  getFinalLessonId(level) {
    const levelData = rhoneLearningLevels[`level${level}`]
    if (!levelData?.lessons?.length) return null
    return levelData.lessons[levelData.lessons.length - 1].id
  },

  // 切換學習等級
  setLevel(level) {
    rhoneLearningState.currentLevel = level
    rhoneLearningState.currentLesson = null
  },

  // 開始課程
  startLesson(lessonId) {
    const level = rhoneLearningLevels[`level${rhoneLearningState.currentLevel}`]
    const lesson = level?.lessons.find(l => l.id === lessonId)
    if (lesson) {
      rhoneLearningState.currentLesson = lesson
    }
  },

  // 退出課程
  exitLesson() {
    rhoneLearningState.currentLesson = null
  },

  // 完成課程
  completeLesson(lessonId) {
    if (!rhoneLearningState.completedLessons.includes(lessonId)) {
      rhoneLearningState.completedLessons.push(lessonId)

      // 從 lessonId 解析所屬 level（如 rh-l1-3 → level1, rh-l2-1 → level2）
      const match = lessonId.match(/^rh-l(\d+)-/)
      const lessonLevel = match ? parseInt(match[1]) : rhoneLearningState.currentLevel
      const levelKey = `level${lessonLevel}`
      if (rhoneLearningState.userProgress[levelKey]) {
        rhoneLearningState.userProgress[levelKey].completed = Math.min(
          rhoneLearningState.userProgress[levelKey].completed + 1,
          rhoneLearningState.userProgress[levelKey].total
        )
      }
      saveProgressToStorage()
    }
  },

  // 啟用測試模式
  enableTestMode() {
    rhoneLearningState.testMode = true
  },

  // 停用測試模式
  disableTestMode() {
    rhoneLearningState.testMode = false
    rhoneLearningState.completedLessons = []
    Object.keys(rhoneLearningState.userProgress).forEach(key => {
      rhoneLearningState.userProgress[key].completed = 0
    })
    saveProgressToStorage()
  }
}

// 計算屬性：整體進度
export const rhoneLearningProgress = computed(() => {
  const levels = Object.values(rhoneLearningState.userProgress)
  const totalCompleted = levels.reduce((sum, l) => sum + l.completed, 0)
  const totalLessons = levels.reduce((sum, l) => sum + l.total, 0)
  return Math.round((totalCompleted / totalLessons) * 100)
})
