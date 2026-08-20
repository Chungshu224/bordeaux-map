// 西班牙成就系統
import { reactive, computed, watch } from 'vue'
import { courseLevels } from '../components/spain/data/courseLevels.js'
import { authState } from './authStore.js'

// ── localStorage 讀取工具（依帳號 id 區分，須與 courseLevels.js 的 key 格式一致）──
const SPAIN_PROGRESS_PREFIX = 'spain_course_progress_'

function getCompletedLessons(levelKey) {
  const userId = authState.user?.id
  if (!userId) return []
  try {
    const raw = localStorage.getItem(`${SPAIN_PROGRESS_PREFIX}${levelKey}:${userId}`)
    return raw ? (JSON.parse(raw).completedLessons || []) : []
  } catch { return [] }
}

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function spainAchievementsStorageKey(userId) {
  return `spain-wine-academy-achievements:${userId}`
}

function getTotalRealLessons() {
  return Object.values(courseLevels).reduce((total, level) => {
    const all = level.modules.flatMap(m => m.lessons.map(l => l.id))
    return total + all.filter(id => !id.includes('FinalExam')).length
  }, 0)
}

// ── 成就定義 ──────────────────────────────────────────────────
export const spainAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'spain-first-lesson': {
    id: 'spain-first-lesson', title: '伊比利初遇',
    description: '完成第一個西班牙課程', icon: '🇪🇸',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'spain-level-1': {
    id: 'spain-level-1', title: '西班牙入門者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'spain-level-2': {
    id: 'spain-level-2', title: '西班牙愛好者',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'spain-level-3': {
    id: 'spain-level-3', title: '西班牙專家',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'spain-level-4': {
    id: 'spain-level-4', title: '西班牙大師',
    description: '完成 Level 4 全部課程', icon: '👑',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.level4Completed
  },
  'spain-half-way': {
    id: 'spain-half-way', title: '半程衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'spain-explore-first': {
    id: 'spain-explore-first', title: '初探伊比利',
    description: '探索第一個西班牙產區', icon: '🏰',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'spain-explore-north': {
    id: 'spain-explore-north', title: '北伊漫遊',
    description: '探索 Rioja・Ribera del Duero・Navarra・Rueda・Bierzo', icon: '🏔️',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const north = ['rioja', 'ribera-del-duero', 'navarra', 'rueda', 'bierzo']
      return north.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'spain-explore-coastal': {
    id: 'spain-explore-coastal', title: '海岸巡禮',
    description: '探索 Rías Baixas・Penedès・Txakoli・Empordà', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const coastal = ['rias-baixas', 'penedes', 'txakoli', 'emporda']
      return coastal.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'spain-explore-south': {
    id: 'spain-explore-south', title: '南伊烈日',
    description: '探索 Jerez・Jumilla・Málaga・Canarias', icon: '☀️',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const south = ['jerez', 'jumilla', 'malaga', 'canarias']
      return south.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'spain-explore-all': {
    id: 'spain-explore-all', title: '西班牙全覽',
    description: '探索所有西班牙主要產區（15 個以上）', icon: '🗺️',
    category: 'exploration', rarity: 'rare', points: 80,
    condition: s => s.exploredRegions >= 15
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'spain-perfect-score': {
    id: 'spain-perfect-score', title: '西班牙完美',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'spain-quiz-streak': {
    id: 'spain-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'spain-quiz-master': {
    id: 'spain-quiz-master', title: '西班牙達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'spain-night-owl': {
    id: 'spain-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'spain-early-bird': {
    id: 'spain-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'spain-streak-7': {
    id: 'spain-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'spain-streak-30': {
    id: 'spain-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'spain-collector': {
    id: 'spain-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'spain-sherry-master': {
    id: 'spain-sherry-master', title: 'Sherry 索雷拉達人',
    description: '完成 Level 2 Jerez 入門與 Level 3 所有 Sherry 課程', icon: '🍶',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.sherryCompleted
  },
  'spain-cava-expert': {
    id: 'spain-cava-expert', title: 'Cava 氣泡專家',
    description: '完成 Level 3 全部 Cava 章節課程', icon: '🍾',
    category: 'special', rarity: 'uncommon', points: 35,
    condition: s => s.cavaCompleted
  },
  'spain-ambassador': {
    id: 'spain-ambassador', title: '西班牙大使',
    description: '完成所有課程並在測驗中達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level4Completed && s.averageCourseScore >= 90
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const spainAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    level4Completed:     false,
    totalProgress:       0,
    averageCourseScore:  0,
    exploredRegions:     0,
    exploredRegionsList: [],
    perfectScores:       0,
    bestStreak:          0,
    lastGameScores:      [],
    totalQuizzes:        0,
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    sherryCompleted:     false,
    cavaCompleted:       false,
    unlockedCount:       0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_SPAIN_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: spainAchievementState.unlockedAchievements,
  totalPoints: spainAchievementState.totalPoints,
  newUnlocks: spainAchievementState.newUnlocks,
  userStats: spainAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const spainAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '伊比利新芽',   icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '卡斯提亞初探', icon: '🏰' },
    { level: 3, min: 150,  max: 299,  title: '風土學徒',     icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '西班牙愛好者', icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '伊比利行家',   icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: '半島達人',     icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '特級探索者',   icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '西班牙大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const spainAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(spainAchievementDefinitions).length
    return total ? Math.round((spainAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(spainAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (spainAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class SpainAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
    this._syncWithCourseProgress()
    // 切換帳號（同瀏覽器登出換登入）時重新載入該帳號自己的成就與課程進度
    watch(() => authState.user?.id, (userId, prevUserId) => {
      if (userId !== prevUserId) {
        this._load()
        this._syncWithCourseProgress()
      }
    })
  }

  _load() {
    const userId = authState.user?.id
    spainAchievementState.unlockedAchievements = [...DEFAULT_SPAIN_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    spainAchievementState.totalPoints = DEFAULT_SPAIN_ACHIEVEMENT_SNAPSHOT.totalPoints
    spainAchievementState.userStats = { ...DEFAULT_SPAIN_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(spainAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      spainAchievementState.unlockedAchievements = data.unlocked || []
      spainAchievementState.totalPoints          = data.totalPoints || 0
      spainAchievementState.userStats = { ...spainAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[spain-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(spainAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    spainAchievementState.unlockedAchievements,
        totalPoints: spainAchievementState.totalPoints,
        userStats:   spainAchievementState.userStats
      }))
    } catch (e) { console.warn('[spain-ach] save error', e) }
  }

  // 同步課程進度（從 localStorage 課程資料計算）
  _syncWithCourseProgress() {
    const l1 = getCompletedLessons('level1')
    const l2 = getCompletedLessons('level2')
    const l3 = getCompletedLessons('level3')
    const l4 = getCompletedLessons('level4')

    const s = spainAchievementState.userStats

    // 已完成課程數（含評量）
    s.completedLessons = l1.length + l2.length + l3.length + l4.length

    // Level 完成狀態（以綜合評量為準）
    s.level1Completed = l1.includes('S1FinalExam')
    s.level2Completed = l2.includes('S2FinalExam')
    s.level3Completed = l3.includes('S3FinalExam')
    s.level4Completed = l4.includes('S4FinalExam')

    // 總進度百分比（排除評量課）
    const totalReal = getTotalRealLessons()
    const doneReal  = [...l1, ...l2, ...l3, ...l4].filter(id => !id.includes('FinalExam')).length
    s.totalProgress = totalReal > 0 ? Math.round(doneReal / totalReal * 100) : 0

    // 特殊旗標
    this._updateSpecialFlags(l2, l3)

    this._save()
    this._checkAll()
  }

  _updateSpecialFlags(l2, l3) {
    const s = spainAchievementState.userStats
    if (!l2) l2 = getCompletedLessons('level2')
    if (!l3) l3 = getCompletedLessons('level3')

    // Sherry 掌握：L2 Jerez 入門 + L3 全部 Sherry 章節
    const sherryL2 = ['S2M4L1']
    const sherryL3 = ['S3M3L1', 'S3M3L2', 'S3M3L3', 'S3M3L4']
    s.sherryCompleted = sherryL2.every(id => l2.includes(id)) && sherryL3.every(id => l3.includes(id))

    // Cava 掌握：L3 Cava 章節全部
    const cavas = ['S3M2L1', 'S3M2L2', 'S3M2L3', 'S3M2L4']
    s.cavaCompleted = cavas.every(id => l3.includes(id))
  }

  updateStats(updates) {
    Object.assign(spainAchievementState.userStats, updates)
    spainAchievementState.userStats.unlockedCount = spainAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = spainAchievementState.userStats
    Object.values(spainAchievementDefinitions).forEach(def => {
      if (spainAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          spainAchievementState.unlockedAchievements.push(def.id)
          spainAchievementState.totalPoints += def.points
          spainAchievementState.userStats.unlockedCount = spainAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      spainAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ lessonId = '', levelId = 0, totalProgress = 0 } = {}) {
    const l2 = getCompletedLessons('level2')
    const l3 = getCompletedLessons('level3')

    const s = spainAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress    = Math.max(s.totalProgress || 0, totalProgress)

    // Level 完成（以評量課為準）
    if (lessonId === 'S1FinalExam') s.level1Completed = true
    if (lessonId === 'S2FinalExam') s.level2Completed = true
    if (lessonId === 'S3FinalExam') s.level3Completed = true
    if (lessonId === 'S4FinalExam') s.level4Completed = true

    // 更新特殊旗標
    this._updateSpecialFlags(l2, l3)

    // 時間紀錄
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy   = (s.nightTimeStudy   || 0) + 1
    if (h >= 5  && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1

    // 連續學習天數
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }

    return this.updateStats(s)
  }

  recordQuizResult({ correctCount = 0, totalQ = 1 } = {}) {
    const s = spainAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0
    s.totalQuizzes = (s.totalQuizzes || 0) + 1
    if (accuracy === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (accuracy >= 90) {
      s.lastGameScores = [...(s.lastGameScores || []).slice(-2), accuracy]
      if (s.lastGameScores.length >= 3 && s.lastGameScores.every(x => x >= 90)) {
        s.bestStreak = Math.max(s.bestStreak || 0, 3)
      }
    } else {
      s.lastGameScores = []
    }
    return this.updateStats(s)
  }

  recordRegionExplored(regionId) {
    const s = spainAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    spainAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = spainAchievementState.totalPoints
    const thresholds = spainAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return spainAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(spainAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   spainAchievementState.totalPoints,
      unlockedCount: spainAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(spainAchievementDefinitions).length,
      completionPct: spainAchievementComputed.completionPercentage.value,
      level:         this.getUserLevel()
    }
  }
}

export const globalSpainAchievementManager = new SpainAchievementManager()
