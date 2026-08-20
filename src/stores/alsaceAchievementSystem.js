// 阿爾薩斯成就系統
import { reactive, computed, watch } from 'vue'
import { courseLevels } from '../components/alsace/data/courseLevels.js'
import { authState } from './authStore.js'

// ── localStorage 讀取工具（依帳號 id 區分，須與 courseLevels.js 的 key 格式一致）──
const ALSACE_PROGRESS_PREFIX = 'alsace_course_progress_'

function getCompletedLessons(levelKey) {
  const userId = authState.user?.id
  if (!userId) return []
  try {
    const raw = localStorage.getItem(`${ALSACE_PROGRESS_PREFIX}${levelKey}:${userId}`)
    return raw ? (JSON.parse(raw).completedLessons || []) : []
  } catch { return [] }
}

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function alsaceAchievementsStorageKey(userId) {
  return `alsace-wine-academy-achievements:${userId}`
}

function getTotalRealLessons() {
  return Object.values(courseLevels).reduce((total, level) => {
    const all = level.modules.flatMap(m => m.lessons.map(l => l.id))
    return total + all.filter(id => !id.includes('FinalExam')).length
  }, 0)
}

// ── 成就定義 ──────────────────────────────────────────────────
export const alsaceAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'alsace-first-lesson': {
    id: 'alsace-first-lesson', title: '初探阿爾薩斯',
    description: '完成第一堂阿爾薩斯課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'alsace-level-1': {
    id: 'alsace-level-1', title: '阿爾薩斯入門者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'alsace-level-2': {
    id: 'alsace-level-2', title: 'Grand Cru 探索家',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'alsace-level-3': {
    id: 'alsace-level-3', title: '阿爾薩斯釀酒師',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'alsace-level-4': {
    id: 'alsace-level-4', title: '阿爾薩斯大師',
    description: '完成 Level 4 全部課程', icon: '👑',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.level4Completed
  },
  'alsace-half-way': {
    id: 'alsace-half-way', title: '半程衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'alsace-perfect-score': {
    id: 'alsace-perfect-score', title: '完美風土',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'alsace-quiz-streak': {
    id: 'alsace-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'alsace-quiz-master': {
    id: 'alsace-quiz-master', title: '阿爾薩斯達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'alsace-night-owl': {
    id: 'alsace-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'alsace-early-bird': {
    id: 'alsace-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'alsace-streak-7': {
    id: 'alsace-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'alsace-streak-30': {
    id: 'alsace-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'alsace-collector': {
    id: 'alsace-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'alsace-grand-cru-geologist': {
    id: 'alsace-grand-cru-geologist', title: 'Grand Cru 地質學家',
    description: '完成 Level 2 全部 Grand Cru 地質分類課程', icon: '🪨',
    category: 'special', rarity: 'uncommon', points: 45,
    condition: s => s.grandCruGeologyCompleted
  },
  'alsace-sweet-wine-connoisseur': {
    id: 'alsace-sweet-wine-connoisseur', title: 'VT／SGN 品鑑家',
    description: '完成 Level 3 貴腐甜酒章節全部課程', icon: '🍯',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.sweetWineCompleted
  },
  'alsace-ambassador': {
    id: 'alsace-ambassador', title: '阿爾薩斯大使',
    description: '完成所有課程並在測驗中達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level4Completed && s.averageCourseScore >= 90
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const alsaceAchievementState = reactive({
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
    perfectScores:       0,
    bestStreak:          0,
    lastGameScores:      [],
    totalQuizzes:        0,
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    grandCruGeologyCompleted: false,
    sweetWineCompleted:  false,
    unlockedCount:       0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_ALSACE_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: alsaceAchievementState.unlockedAchievements,
  totalPoints: alsaceAchievementState.totalPoints,
  newUnlocks: alsaceAchievementState.newUnlocks,
  userStats: alsaceAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const alsaceAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '阿爾薩斯新芽',   icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '風土學徒',       icon: '⛰️' },
    { level: 3, min: 150,  max: 299,  title: '品種行家',       icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: 'Grand Cru 愛好者', icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '阿爾薩斯行家',   icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: '產區達人',       icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '特級探索者',     icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '阿爾薩斯大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const alsaceAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(alsaceAchievementDefinitions).length
    return total ? Math.round((alsaceAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(alsaceAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (alsaceAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class AlsaceAchievementManager {
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
    alsaceAchievementState.unlockedAchievements = [...DEFAULT_ALSACE_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    alsaceAchievementState.totalPoints = DEFAULT_ALSACE_ACHIEVEMENT_SNAPSHOT.totalPoints
    alsaceAchievementState.userStats = { ...DEFAULT_ALSACE_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(alsaceAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      alsaceAchievementState.unlockedAchievements = data.unlocked || []
      alsaceAchievementState.totalPoints          = data.totalPoints || 0
      alsaceAchievementState.userStats = { ...alsaceAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[alsace-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(alsaceAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    alsaceAchievementState.unlockedAchievements,
        totalPoints: alsaceAchievementState.totalPoints,
        userStats:   alsaceAchievementState.userStats
      }))
    } catch (e) { console.warn('[alsace-ach] save error', e) }
  }

  // 同步課程進度（從 localStorage 課程資料計算）
  _syncWithCourseProgress() {
    const l1 = getCompletedLessons('level1')
    const l2 = getCompletedLessons('level2')
    const l3 = getCompletedLessons('level3')
    const l4 = getCompletedLessons('level4')

    const s = alsaceAchievementState.userStats

    // 已完成課程數（含評量）
    s.completedLessons = l1.length + l2.length + l3.length + l4.length

    // Level 完成狀態（以綜合評量為準）
    s.level1Completed = l1.includes('AL1FinalExam')
    s.level2Completed = l2.includes('AL2FinalExam')
    s.level3Completed = l3.includes('AL3FinalExam')
    s.level4Completed = l4.includes('AL4FinalExam')

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
    const s = alsaceAchievementState.userStats
    if (!l2) l2 = getCompletedLessons('level2')
    if (!l3) l3 = getCompletedLessons('level3')

    // Grand Cru 地質學家：L2 全部地質分類章節（M2-M5）
    const geology = [
      'AL2M2L1', 'AL2M2L2', 'AL2M3L1', 'AL2M3L2',
      'AL2M4L1', 'AL2M4L2', 'AL2M5L1', 'AL2M5L2', 'AL2M5L3', 'AL2M5L4'
    ]
    s.grandCruGeologyCompleted = geology.every(id => l2.includes(id))

    // VT/SGN 品鑑家：L3 貴腐甜酒章節全部
    const sweetWine = ['AL3M3L1', 'AL3M3L2']
    s.sweetWineCompleted = sweetWine.every(id => l3.includes(id))
  }

  updateStats(updates) {
    Object.assign(alsaceAchievementState.userStats, updates)
    alsaceAchievementState.userStats.unlockedCount = alsaceAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = alsaceAchievementState.userStats
    Object.values(alsaceAchievementDefinitions).forEach(def => {
      if (alsaceAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          alsaceAchievementState.unlockedAchievements.push(def.id)
          alsaceAchievementState.totalPoints += def.points
          alsaceAchievementState.userStats.unlockedCount = alsaceAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      alsaceAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ lessonId = '', levelId = 0, totalProgress = 0 } = {}) {
    const l2 = getCompletedLessons('level2')
    const l3 = getCompletedLessons('level3')

    const s = alsaceAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress    = Math.max(s.totalProgress || 0, totalProgress)

    // Level 完成（以評量課為準）
    if (lessonId === 'AL1FinalExam') s.level1Completed = true
    if (lessonId === 'AL2FinalExam') s.level2Completed = true
    if (lessonId === 'AL3FinalExam') s.level3Completed = true
    if (lessonId === 'AL4FinalExam') s.level4Completed = true

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
    const s = alsaceAchievementState.userStats
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

  clearNewUnlocks() {
    alsaceAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = alsaceAchievementState.totalPoints
    const thresholds = alsaceAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return alsaceAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(alsaceAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   alsaceAchievementState.totalPoints,
      unlockedCount: alsaceAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(alsaceAchievementDefinitions).length,
      completionPct: alsaceAchievementComputed.completionPercentage.value,
      level:         this.getUserLevel()
    }
  }
}

export const globalAlsaceAchievementManager = new AlsaceAchievementManager()
