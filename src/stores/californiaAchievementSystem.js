// 加州葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function californiaAchievementsStorageKey(userId) {
  return `california-wine-academy-achievements:${userId}`
}

// ── 成就定義 ──────────────────────────────────────────────────
export const californiaAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'ca-first-lesson': {
    id: 'ca-first-lesson', title: '陽光初學',
    description: '完成第一個加州葡萄酒課程', icon: '☀️',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'ca-level-1': {
    id: 'ca-level-1', title: 'Level 1 認證',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 60,
    condition: s => s.level1Completed
  },
  'ca-level-2': {
    id: 'ca-level-2', title: 'Level 2 認證',
    description: '完成 Level 2 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 180,
    condition: s => s.level2Completed
  },
  'ca-level-3': {
    id: 'ca-level-3', title: 'Level 3 認證',
    description: '完成 Level 3 全部課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 350,
    condition: s => s.level3Completed
  },
  'ca-half-way': {
    id: 'ca-half-way', title: '半途達人',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 40,
    condition: s => s.totalProgress >= 50
  },
  'ca-napa-scholar': {
    id: 'ca-napa-scholar', title: 'Napa 學者',
    description: '完成 Napa Valley 深度探索課程（Level 1 M3）', icon: '🏔️',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.napaModuleCompleted
  },
  'ca-sonoma-scholar': {
    id: 'ca-sonoma-scholar', title: 'Sonoma 達人',
    description: '完成 Sonoma County 深度探索課程（Level 1 M4）', icon: '🌊',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.sonomaModuleCompleted
  },
  'ca-paris-judgment': {
    id: 'ca-paris-judgment', title: '巴黎評判傳人',
    description: '完成 Level 1 全部課程，掌握 1976 年巴黎評判精髓', icon: '🇫🇷',
    category: 'progress', rarity: 'rare', points: 80,
    condition: s => s.level1Completed && s.completedLessons >= 4
  },
  'ca-cult-wine': {
    id: 'ca-cult-wine', title: '膜拜酒鑑賞家',
    description: '完成 Level 2 課程，深度了解 Cult Wine 文化', icon: '💎',
    category: 'progress', rarity: 'rare', points: 90,
    condition: s => s.level2Completed
  },
  'ca-all-complete': {
    id: 'ca-all-complete', title: '加州全制霸',
    description: '完成全部加州葡萄酒課程', icon: '🌟',
    category: 'progress', rarity: 'legendary', points: 500,
    condition: s => s.level1Completed && s.level2Completed && s.level3Completed
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'ca-explore-first': {
    id: 'ca-explore-first', title: '初探加州',
    description: '探索第一個加州產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'ca-explore-napa': {
    id: 'ca-explore-napa', title: 'Napa 朝聖',
    description: '探索 Napa Valley 產區', icon: '🍷',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('napa')
  },
  'ca-explore-sonoma': {
    id: 'ca-explore-sonoma', title: 'Sonoma 行者',
    description: '探索 Sonoma County 產區', icon: '🌲',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('sonoma')
  },
  'ca-explore-santa-barbara': {
    id: 'ca-explore-santa-barbara', title: 'Santa Barbara 探索',
    description: '探索 Santa Barbara 橫向山谷產區', icon: '🏄',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('santa_barbara')
  },
  'ca-explore-paso': {
    id: 'ca-explore-paso', title: 'Paso Robles 行者',
    description: '探索 Paso Robles 石灰岩產區', icon: '🪨',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('paso_robles')
  },
  'ca-explore-five': {
    id: 'ca-explore-five', title: '五大產區踏查',
    description: '探索 5 個以上加州產區', icon: '🗂️',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => s.exploredRegions >= 5
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'ca-quiz-first': {
    id: 'ca-quiz-first', title: '初試啼聲',
    description: '完成第一次測驗', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 15,
    condition: s => s.totalQuizzes >= 1
  },
  'ca-quiz-perfect': {
    id: 'ca-quiz-perfect', title: '完美品飲',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 30,
    condition: s => s.perfectScores >= 1
  },
  'ca-quiz-streak': {
    id: 'ca-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗均達 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'ca-quiz-master': {
    id: 'ca-quiz-master', title: '測驗達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 45,
    condition: s => s.totalQuizzes >= 10
  },
  'ca-final-exam-1': {
    id: 'ca-final-exam-1', title: 'Level 1 期末優秀',
    description: 'Level 1 期末測驗達 80 分以上', icon: '🎓',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level1Completed
  },
  'ca-final-exam-3': {
    id: 'ca-final-exam-3', title: '專業認定',
    description: 'Level 3 期末測驗達 80 分以上', icon: '🏆',
    category: 'quiz', rarity: 'epic', points: 100,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'ca-night-owl': {
    id: 'ca-night-owl', title: '深夜酒客',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'ca-early-bird': {
    id: 'ca-early-bird', title: '晨光品飲',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'ca-streak-7': {
    id: 'ca-streak-7', title: '週週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'ca-streak-30': {
    id: 'ca-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'ca-sustainable': {
    id: 'ca-sustainable', title: '永續先驅',
    description: '完成 Level 3 高階釀造課程並探索 Paso Robles', icon: '🌱',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.level3Completed && s.exploredRegionsList.includes('paso_robles')
  },
  'ca-tasting-notes': {
    id: 'ca-tasting-notes', title: '品飲筆記大師',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'ca-collector': {
    id: 'ca-collector', title: '成就收藏家',
    description: '解鎖 12 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 70,
    condition: s => s.unlockedCount >= 12
  },
  'ca-grand-master': {
    id: 'ca-grand-master', title: '加州葡萄酒宗師',
    description: '解鎖 22 個以上成就', icon: '👑',
    category: 'special', rarity: 'legendary', points: 350,
    condition: s => s.unlockedCount >= 22
  },
}

// ── 狀態 ──────────────────────────────────────────────────────
export const californiaAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:       0,
    level1Completed:        false,
    level2Completed:        false,
    level3Completed:        false,
    totalProgress:          0,
    napaModuleCompleted:    false,
    sonomaModuleCompleted:  false,
    averageCourseScore:     0,
    bestQuizScore:          0,
    exploredRegions:        0,
    exploredRegionsList:    [],
    perfectScores:          0,
    bestStreak:             0,
    currentStreak:          0,
    lastGameScores:         [],
    totalQuizzes:           0,
    nightTimeStudy:         0,
    earlyMorningStudy:      0,
    consecutiveDays:        0,
    lastStudyDate:          null,
    tastingNotesCount:      0,
    unlockedCount:          0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_CALIFORNIA_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: californiaAchievementState.unlockedAchievements,
  totalPoints: californiaAchievementState.totalPoints,
  newUnlocks: californiaAchievementState.newUnlocks,
  userStats: californiaAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const californiaAchievementConfig = {
  rarityColors: {
    common:    '#9E9E9E',
    uncommon:  '#4CAF50',
    rare:      '#2196F3',
    epic:      '#9C27B0',
    legendary: '#FF9800'
  },
  rarityNames: {
    common:    '普通',
    uncommon:  '優良',
    rare:      '稀有',
    epic:      '史詩',
    legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '黃金丘陵新芽',     icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Napa 初探者',      icon: '🍷' },
    { level: 3, min: 150,  max: 299,  title: 'Sonoma 行家',      icon: '🌲' },
    { level: 4, min: 300,  max: 499,  title: '巴黎評判傳人',     icon: '🥂' },
    { level: 5, min: 500,  max: 799,  title: 'Cult Wine 愛好者', icon: '💎' },
    { level: 6, min: 800,  max: 1199, title: 'AVA 鑑賞師',       icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '加州風土專家',     icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '加州葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const californiaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(californiaAchievementDefinitions).length
    return total ? Math.round((californiaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(californiaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (californiaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class CaliforniaAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
    // 切換帳號（同瀏覽器登出換登入）時重新載入該帳號自己的成就
    watch(() => authState.user?.id, (userId, prevUserId) => {
      if (userId !== prevUserId) this._load()
    })
  }

  _load() {
    const userId = authState.user?.id
    californiaAchievementState.unlockedAchievements = [...DEFAULT_CALIFORNIA_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    californiaAchievementState.totalPoints = DEFAULT_CALIFORNIA_ACHIEVEMENT_SNAPSHOT.totalPoints
    californiaAchievementState.userStats = { ...DEFAULT_CALIFORNIA_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(californiaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      californiaAchievementState.unlockedAchievements = data.unlocked    || []
      californiaAchievementState.totalPoints          = data.totalPoints || 0
      californiaAchievementState.userStats = {
        ...californiaAchievementState.userStats,
        ...(data.userStats || {})
      }
    } catch (e) { console.warn('[california-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(californiaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    californiaAchievementState.unlockedAchievements,
        totalPoints: californiaAchievementState.totalPoints,
        userStats:   californiaAchievementState.userStats
      }))
    } catch (e) { console.warn('[california-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(californiaAchievementState.userStats, updates)
    californiaAchievementState.userStats.unlockedCount = californiaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = californiaAchievementState.userStats
    Object.values(californiaAchievementDefinitions).forEach(def => {
      if (californiaAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          californiaAchievementState.unlockedAchievements.push(def.id)
          californiaAchievementState.totalPoints += def.points
          californiaAchievementState.userStats.unlockedCount = californiaAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      californiaAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  /**
   * 完成一節課時呼叫
   * @param {object} opts
   * @param {string} opts.lessonId       - 課程 ID (e.g. 'ca-l1-3')
   * @param {string} opts.levelKey       - 等級 key (e.g. 'level1')
   * @param {number} opts.totalProgress  - 整體完成百分比 0~100
   * @param {boolean} opts.levelCompleted - 是否剛完成整個等級
   */
  recordLessonCompleted({ lessonId = '', levelKey = '', totalProgress = 0, levelCompleted = false } = {}) {
    const s = californiaAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress    = Math.max(s.totalProgress || 0, totalProgress)

    if (levelKey === 'level1' && levelCompleted) s.level1Completed = true
    if (levelKey === 'level2' && levelCompleted) s.level2Completed = true
    if (levelKey === 'level3' && levelCompleted) s.level3Completed = true

    // Napa 模組完成偵測（Level 1 M3：ca-l1-3）
    if (lessonId === 'ca-l1-3') s.napaModuleCompleted = true
    // Sonoma 模組完成偵測（Level 1 M4：ca-l1-4）
    if (lessonId === 'ca-l1-4') s.sonomaModuleCompleted = true

    // 時段統計
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy    = (s.nightTimeStudy    || 0) + 1
    if (h >= 5  && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1

    // 連續天數
    const today     = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    if (s.lastStudyDate !== today) {
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate   = today
    }

    return this.updateStats(s)
  }

  recordQuizResult({ score, correctCount, totalQ } = {}) {
    const s   = californiaAchievementState.userStats
    const pct = totalQ ? Math.round((correctCount / totalQ) * 100) : (score || 0)
    s.totalQuizzes  = (s.totalQuizzes  || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, pct)
    if (pct === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (pct >= 90) {
      s.lastGameScores = [...(s.lastGameScores || []).slice(-2), pct]
      if (s.lastGameScores.length >= 3 && s.lastGameScores.every(x => x >= 90))
        s.bestStreak = Math.max(s.bestStreak || 0, 3)
    } else {
      s.lastGameScores = []
    }
    return this.updateStats(s)
  }

  recordRegionExplored(regionId) {
    const s = californiaAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions     = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  recordTastingNote() {
    const s = californiaAchievementState.userStats
    s.tastingNotesCount = (s.tastingNotesCount || 0) + 1
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    californiaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts        = californiaAchievementState.totalPoints
    const thresholds = californiaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return californiaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(californiaAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   californiaAchievementState.totalPoints,
      unlockedCount: californiaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(californiaAchievementDefinitions).length,
      completionPct: californiaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalCaliforniaAchievementManager = new CaliforniaAchievementManager()
