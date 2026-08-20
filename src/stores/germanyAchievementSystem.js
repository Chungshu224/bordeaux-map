// 德國成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function germanyAchievementsStorageKey(userId) {
  return `germany-wine-academy-achievements:${userId}`
}

// ── 成就定義 ──────────────────────────────────────────────────
export const germanyAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'germany-first-lesson': {
    id: 'germany-first-lesson', title: '德式初遇',
    description: '完成第一個德國課程', icon: '🇩🇪',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'germany-level-1': {
    id: 'germany-level-1', title: '德國入門者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'germany-level-2': {
    id: 'germany-level-2', title: '德國愛好者',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'germany-level-3': {
    id: 'germany-level-3', title: '德國專家',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'germany-half-way': {
    id: 'germany-half-way', title: '半程衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'germany-pradikat-scholar': {
    id: 'germany-pradikat-scholar', title: 'Prädikat 學者',
    description: '完成所有 Prädikat 分級相關課程（Level 1 全部）', icon: '🏷️',
    category: 'progress', rarity: 'uncommon', points: 40,
    condition: s => s.level1Completed
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'germany-explore-first': {
    id: 'germany-explore-first', title: '初探德國',
    description: '探索第一個德國產區', icon: '🏰',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'germany-explore-rhine': {
    id: 'germany-explore-rhine', title: '萊茵巡禮',
    description: '探索 Mosel・Rheingau・Rheinhessen・Nahe', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const rhine = ['mosel', 'rheingau', 'rheinhessen', 'nahe']
      return rhine.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'germany-explore-south': {
    id: 'germany-explore-south', title: '南德漫遊',
    description: '探索 Pfalz・Baden・Württemberg・Franken', icon: '🌞',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const south = ['pfalz', 'baden', 'wuerttemberg', 'franken']
      return south.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'germany-explore-north-east': {
    id: 'germany-explore-north-east', title: '北東新探',
    description: '探索 Ahr・Mittelrhein・Hessische Bergstrasse・Sachsen', icon: '🏔️',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const ne = ['ahr', 'mittelrhein', 'hessische', 'sachsen']
      return ne.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'germany-explore-all': {
    id: 'germany-explore-all', title: '德國全覽',
    description: '探索所有 13 個 Anbaugebiete（12 個以上）', icon: '🗺️',
    category: 'exploration', rarity: 'rare', points: 80,
    condition: s => s.exploredRegions >= 12
  },
  'germany-mosel-master': {
    id: 'germany-mosel-master', title: 'Mosel 達人',
    description: '深入探索 Mosel 產區', icon: '🍷',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('mosel')
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'germany-perfect-score': {
    id: 'germany-perfect-score', title: '德式完美',
    description: '任意測驗獲得滿分（100分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'germany-quiz-streak': {
    id: 'germany-quiz-streak', title: '連戰連勝',
    description: '同一測驗連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'germany-quiz-master': {
    id: 'germany-quiz-master', title: '德國達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },
  'germany-pradikat-quiz': {
    id: 'germany-pradikat-quiz', title: 'Prädikat 測驗高手',
    description: '累計完成 5 次以上測驗', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'germany-night-owl': {
    id: 'germany-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'germany-early-bird': {
    id: 'germany-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'germany-streak-7': {
    id: 'germany-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'germany-streak-30': {
    id: 'germany-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'germany-collector': {
    id: 'germany-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'germany-riesling': {
    id: 'germany-riesling', title: 'Riesling 愛好者',
    description: '完成所有 Riesling 相關課程（Level 1 Level 2）', icon: '🍇',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.level1Completed && s.level2Completed
  },
  'germany-vdp': {
    id: 'germany-vdp', title: 'VDP 鑑賞家',
    description: '完成 Level 3 VDP 相關課程', icon: '🦅',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.level3Completed
  },
  'germany-ambassador': {
    id: 'germany-ambassador', title: '德國大使',
    description: '完成所有課程並達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level3Completed && s.averageCourseScore >= 90
  },
  'germany-eiswein': {
    id: 'germany-eiswein', title: 'Eiswein 收藏家',
    description: '完成 Level 2 全部課程', icon: '❄️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => s.level2Completed
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const germanyAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    totalProgress:       0,
    averageCourseScore:  0,
    exploredRegions:     0,
    exploredRegionsList: [],
    perfectScores:       0,
    bestStreak:          0,
    currentStreak:       0,
    lastGameScores:      [],
    totalQuizzes:        0,
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    rieslingCompleted:   false,
    unlockedCount:       0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_GERMANY_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: germanyAchievementState.unlockedAchievements,
  totalPoints: germanyAchievementState.totalPoints,
  newUnlocks: germanyAchievementState.newUnlocks,
  userStats: germanyAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const germanyAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '萊茵新芽',     icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '板岩初探',     icon: '🏘️' },
    { level: 3, min: 150,  max: 299,  title: 'Riesling 學徒', icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: 'Prädikat 愛好者', icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '德國行家',     icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: 'Anbaugebiete 達人', icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: 'VDP 探索者',   icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '德國葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const germanyAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(germanyAchievementDefinitions).length
    return total ? Math.round((germanyAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(germanyAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (germanyAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class GermanyAchievementManager {
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
    germanyAchievementState.unlockedAchievements = [...DEFAULT_GERMANY_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    germanyAchievementState.totalPoints = DEFAULT_GERMANY_ACHIEVEMENT_SNAPSHOT.totalPoints
    germanyAchievementState.userStats = { ...DEFAULT_GERMANY_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(germanyAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      germanyAchievementState.unlockedAchievements = data.unlocked || []
      germanyAchievementState.totalPoints          = data.totalPoints || 0
      germanyAchievementState.userStats = { ...germanyAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[germany-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(germanyAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    germanyAchievementState.unlockedAchievements,
        totalPoints: germanyAchievementState.totalPoints,
        userStats:   germanyAchievementState.userStats
      }))
    } catch (e) { console.warn('[germany-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(germanyAchievementState.userStats, updates)
    germanyAchievementState.userStats.unlockedCount = germanyAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = germanyAchievementState.userStats
    Object.values(germanyAchievementDefinitions).forEach(def => {
      if (germanyAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          germanyAchievementState.unlockedAchievements.push(def.id)
          germanyAchievementState.totalPoints += def.points
          germanyAchievementState.userStats.unlockedCount = germanyAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      germanyAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ levelId, totalProgress = 0, averageScore = 0 } = {}) {
    const s = germanyAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    s.averageCourseScore = averageScore
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    if (levelId === 3) s.level3Completed = true
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy  = (s.nightTimeStudy  || 0) + 1
    if (h >= 5  && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }
    return this.updateStats(s)
  }

  recordQuizResult({ score, correctCount, totalQ } = {}) {
    const s = germanyAchievementState.userStats
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
    const s = germanyAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    germanyAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = germanyAchievementState.totalPoints
    const thresholds = germanyAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return germanyAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(germanyAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:    germanyAchievementState.totalPoints,
      unlockedCount:  germanyAchievementState.unlockedAchievements.length,
      totalCount:     Object.keys(germanyAchievementDefinitions).length,
      completionPct:  germanyAchievementComputed.completionPercentage.value,
      level:          this.getUserLevel()
    }
  }
}

export const globalGermanyAchievementManager = new GermanyAchievementManager()
