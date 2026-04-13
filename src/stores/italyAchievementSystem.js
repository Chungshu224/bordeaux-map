// 義大利成就系統
import { reactive, computed } from 'vue'

// ── 成就定義 ──────────────────────────────────────────────────
export const italyAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'italy-first-lesson': {
    id: 'italy-first-lesson', title: '義式初遇',
    description: '完成第一個義大利課程', icon: '🇮🇹',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'italy-level-1': {
    id: 'italy-level-1', title: '義大利入門者',
    description: '完成 Level 1 全部課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'italy-level-2': {
    id: 'italy-level-2', title: '義大利愛好者',
    description: '完成 Level 2 全部課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'italy-level-3': {
    id: 'italy-level-3', title: '義大利專家',
    description: '完成 Level 3 全部課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'italy-half-way': {
    id: 'italy-half-way', title: '半程衝刺',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'italy-explore-first': {
    id: 'italy-explore-first', title: '初探義大利',
    description: '探索第一個義大利產區', icon: '🏛️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'italy-explore-north': {
    id: 'italy-explore-north', title: '北義漫遊',
    description: '探索皮埃蒙特・威尼托・倫巴第・弗留利・特倫蒂諾', icon: '🏔️',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const north = ['piedmont', 'veneto', 'lombardy', 'friuli', 'trentino']
      return north.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'italy-explore-central': {
    id: 'italy-explore-central', title: '中義深探',
    description: '探索托斯卡納・馬爾凱・翁布里亞・拉齊奧・阿布魯佐', icon: '🌻',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const central = ['tuscany', 'marche', 'umbria', 'lazio', 'abruzzo']
      return central.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'italy-explore-south': {
    id: 'italy-explore-south', title: '南義巡禮',
    description: '探索坎帕尼亞・普利亞・西西里・薩丁尼亞', icon: '☀️',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => {
      const south = ['campania', 'puglia', 'sicily', 'sardinia']
      return south.every(r => s.exploredRegionsList.includes(r))
    }
  },
  'italy-explore-all': {
    id: 'italy-explore-all', title: '義大利全覽',
    description: '探索所有義大利主要產區（15個以上）', icon: '🗺️',
    category: 'exploration', rarity: 'rare', points: 80,
    condition: s => s.exploredRegions >= 15
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'italy-perfect-score': {
    id: 'italy-perfect-score', title: '義式完美',
    description: '任意測驗獲得滿分（100分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'italy-quiz-streak': {
    id: 'italy-quiz-streak', title: '連戰連勝',
    description: '同一測驗連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'italy-quiz-master': {
    id: 'italy-quiz-master', title: '義大利達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'italy-night-owl': {
    id: 'italy-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'italy-early-bird': {
    id: 'italy-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'italy-streak-7': {
    id: 'italy-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'italy-streak-30': {
    id: 'italy-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'italy-collector': {
    id: 'italy-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'italy-nebbiolo': {
    id: 'italy-nebbiolo', title: 'Nebbiolo 愛好者',
    description: '完成所有 Nebbiolo 相關課程', icon: '🍇',
    category: 'special', rarity: 'uncommon', points: 40,
    condition: s => s.nebbioloCompleted
  },
  'italy-ambassador': {
    id: 'italy-ambassador', title: '義大利大使',
    description: '完成所有課程並達到平均 90% 正確率', icon: '🏅',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.level3Completed && s.averageCourseScore >= 90
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const italyAchievementState = reactive({
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
    nebbioloCompleted:   false,
    unlockedCount:       0
  }
})

// ── 配置 ──────────────────────────────────────────────────────
export const italyAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '義式新芽',   icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: '義村初探',   icon: '🏘️' },
    { level: 3, min: 150,  max: 299,  title: '風土學徒',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '義式愛好者', icon: '📚' },
    { level: 5, min: 500,  max: 799,  title: '義大利行家', icon: '🥂' },
    { level: 6, min: 800,  max: 1199, title: '半島達人',   icon: '🌟' },
    { level: 7, min: 1200, max: 1999, title: '特級探索者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '義大利大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const italyAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(italyAchievementDefinitions).length
    return total ? Math.round((italyAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(italyAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (italyAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class ItalyAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
  }

  _load() {
    try {
      const raw = localStorage.getItem('italy-wine-academy-achievements')
      if (!raw) return
      const data = JSON.parse(raw)
      italyAchievementState.unlockedAchievements = data.unlocked || []
      italyAchievementState.totalPoints          = data.totalPoints || 0
      italyAchievementState.userStats = { ...italyAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[italy-ach] load error', e) }
  }

  _save() {
    try {
      localStorage.setItem('italy-wine-academy-achievements', JSON.stringify({
        unlocked:    italyAchievementState.unlockedAchievements,
        totalPoints: italyAchievementState.totalPoints,
        userStats:   italyAchievementState.userStats
      }))
    } catch (e) { console.warn('[italy-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(italyAchievementState.userStats, updates)
    italyAchievementState.userStats.unlockedCount = italyAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = italyAchievementState.userStats
    Object.values(italyAchievementDefinitions).forEach(def => {
      if (italyAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          italyAchievementState.unlockedAchievements.push(def.id)
          italyAchievementState.totalPoints += def.points
          italyAchievementState.userStats.unlockedCount = italyAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      italyAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ levelId, totalProgress = 0, averageScore = 0 } = {}) {
    const s = italyAchievementState.userStats
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
    const s = italyAchievementState.userStats
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
    const s = italyAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    italyAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = italyAchievementState.totalPoints
    const thresholds = italyAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return italyAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(italyAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:    italyAchievementState.totalPoints,
      unlockedCount:  italyAchievementState.unlockedAchievements.length,
      totalCount:     Object.keys(italyAchievementDefinitions).length,
      completionPct:  italyAchievementComputed.completionPercentage.value,
      level:          this.getUserLevel()
    }
  }
}

export const globalItalyAchievementManager = new ItalyAchievementManager()
