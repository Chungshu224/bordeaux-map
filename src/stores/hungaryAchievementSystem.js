// 匈牙利葡萄酒成就系統
import { reactive, computed } from 'vue'

// ── 成就定義 ──────────────────────────────────────────────────
export const hungaryAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'hungary-first-lesson': {
    id: 'hungary-first-lesson', title: '多瑙河初遇',
    description: '完成第一個匈牙利葡萄酒課程', icon: '🇭🇺',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'hungary-level-1': {
    id: 'hungary-level-1', title: '匈牙利入門者',
    description: '完成 Level 1 全部 8 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'hungary-level-2': {
    id: 'hungary-level-2', title: '托卡伊行家',
    description: '完成 Level 2 全部 6 堂進階課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level2Completed
  },
  'hungary-half-way': {
    id: 'hungary-half-way', title: '中途健行者',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'hungary-tokaj-scholar': {
    id: 'hungary-tokaj-scholar', title: '托卡伊學者',
    description: '完成托卡伊相關所有課程（Level 1 第 6 課 + Level 2 前兩課）', icon: '🍯',
    category: 'progress', rarity: 'rare', points: 80,
    condition: s => s.completedLessons >= 8
  },
  'hungary-all-complete': {
    id: 'hungary-all-complete', title: '喀爾巴阡全覽者',
    description: '完成匈牙利葡萄酒全部 14 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 14
  },
  'hungary-furmint-master': {
    id: 'hungary-furmint-master', title: 'Furmint 大師',
    description: '完成所有品種課程（hu-l1-3、hu-l1-4 所在 Level 1）', icon: '🍇',
    category: 'progress', rarity: 'uncommon', points: 35,
    condition: s => s.level1Completed
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'hungary-explore-first': {
    id: 'hungary-explore-first', title: '初探盆地',
    description: '探索第一個匈牙利產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'hungary-explore-tokaj': {
    id: 'hungary-explore-tokaj', title: '托卡伊朝聖',
    description: '探索托卡伊（Tokaj）產區', icon: '🍯',
    category: 'exploration', rarity: 'uncommon', points: 25,
    condition: s => s.exploredRegionsList.includes('tokaj')
  },
  'hungary-explore-eger': {
    id: 'hungary-explore-eger', title: '公牛血探索',
    description: '探索埃格爾（Eger）產區', icon: '🐂',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('eger')
  },
  'hungary-explore-villany': {
    id: 'hungary-explore-villany', title: '維拉尼漫遊',
    description: '探索維拉尼（Villány）產區', icon: '🏯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('villany')
  },
  'hungary-explore-balaton': {
    id: 'hungary-explore-balaton', title: '巴拉頓湖畔',
    description: '探索巴拉頓（Balaton）產區群', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('balaton')
  },
  'hungary-explore-5groups': {
    id: 'hungary-explore-5groups', title: '五大產區群踏查',
    description: '探索匈牙利五大產區群中的至少 5 個產區', icon: '🌍',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => s.exploredRegions >= 5
  },
  'hungary-explore-all-22': {
    id: 'hungary-explore-all-22', title: '22 產區全覽',
    description: '探索 10 個以上法定產區', icon: '🗺️',
    category: 'exploration', rarity: 'epic', points: 120,
    condition: s => s.exploredRegions >= 10
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'hungary-perfect-score': {
    id: 'hungary-perfect-score', title: '托卡伊完美',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'hungary-quiz-streak': {
    id: 'hungary-quiz-streak', title: '連戰連勝',
    description: '同一測驗連續 3 次獲得 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'hungary-quiz-master': {
    id: 'hungary-quiz-master', title: '匈牙利達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 10
  },
  'hungary-quiz-starter': {
    id: 'hungary-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'hungary-aszu-ace': {
    id: 'hungary-aszu-ace', title: 'Aszú 鑑定師',
    description: 'Level 1 綜合評量達 80 分以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level1Completed
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'hungary-night-owl': {
    id: 'hungary-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'hungary-early-bird': {
    id: 'hungary-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'hungary-streak-7': {
    id: 'hungary-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'hungary-streak-30': {
    id: 'hungary-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'hungary-collector': {
    id: 'hungary-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'hungary-sweet-connoisseur': {
    id: 'hungary-sweet-connoisseur', title: '貴腐甜酒達人',
    description: '解鎖 Aszú 相關成就（完成 Level 1）並解鎖托卡伊探索成就', icon: '🍷',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level1Completed && s.exploredRegionsList.includes('tokaj')
  },
  'hungary-tasting-notes': {
    id: 'hungary-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'hungary-diversity': {
    id: 'hungary-diversity', title: '產區多元探索',
    description: '探索 3 個以上不同產區', icon: '🌏',
    category: 'special', rarity: 'uncommon', points: 25,
    condition: s => s.exploredRegions >= 3
  },
  'hungary-grand-master': {
    id: 'hungary-grand-master', title: '匈牙利大師',
    description: '解鎖 20 個以上成就', icon: '👑',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ──────────────────────────────────────────────────────
export const hungaryAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    totalProgress:       0,
    averageCourseScore:  0,
    bestQuizScore:       0,
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
    tastingNotesCount:   0,
    unlockedCount:       0
  }
})

// ── 配置 ──────────────────────────────────────────────────────
export const hungaryAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '多瑙河新芽',         icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Furmint 初探者',     icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Tokaji 愛好者',      icon: '🍯' },
    { level: 4, min: 300,  max: 499,  title: 'Puttonyos 鑑賞者',   icon: '🥂' },
    { level: 5, min: 500,  max: 799,  title: 'Aszú 行家',          icon: '🏯' },
    { level: 6, min: 800,  max: 1199, title: '公牛血鬥士',         icon: '🐂' },
    { level: 7, min: 1200, max: 1999, title: '喀爾巴阡專家',       icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '匈牙利葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const hungaryAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(hungaryAchievementDefinitions).length
    return total ? Math.round((hungaryAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(hungaryAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (hungaryAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class HungaryAchievementManager {
  constructor() { this._initialized = false }

  init() {
    if (this._initialized) return
    this._initialized = true
    this._load()
    this._syncWithCourseProgress()
  }

  _syncWithCourseProgress() {
    try {
      const raw = localStorage.getItem('hungary-wine-academy-progress')
      if (!raw) return
      const data = JSON.parse(raw)
      const completedLessons = data.completedLessons || []
      if (!completedLessons.length) return

      const s = hungaryAchievementState.userStats
      // 解析 Level 1 / Level 2 完成情況
      const l1 = completedLessons.filter(id => id.startsWith('hu-l1-'))
      const l2 = completedLessons.filter(id => id.startsWith('hu-l2-'))
      const level1Lessons = 8
      const level2Lessons = 6

      s.completedLessons = Math.max(s.completedLessons || 0, completedLessons.length)
      s.level1Completed  = s.level1Completed  || (l1.length >= level1Lessons)
      s.level2Completed  = s.level2Completed  || (l2.length >= level2Lessons)
      const totalLessons = level1Lessons + level2Lessons
      s.totalProgress = Math.max(s.totalProgress || 0,
        Math.round(completedLessons.length / totalLessons * 100)
      )

      this._save()
      this._checkAll()
    } catch (e) { console.warn('[hungary-ach] syncProgress error', e) }
  }

  _load() {
    try {
      const raw = localStorage.getItem('hungary-wine-academy-achievements')
      if (!raw) return
      const data = JSON.parse(raw)
      hungaryAchievementState.unlockedAchievements = data.unlocked || []
      hungaryAchievementState.totalPoints          = data.totalPoints || 0
      hungaryAchievementState.userStats = { ...hungaryAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[hungary-ach] load error', e) }
  }

  _save() {
    try {
      localStorage.setItem('hungary-wine-academy-achievements', JSON.stringify({
        unlocked:    hungaryAchievementState.unlockedAchievements,
        totalPoints: hungaryAchievementState.totalPoints,
        userStats:   hungaryAchievementState.userStats
      }))
    } catch (e) { console.warn('[hungary-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(hungaryAchievementState.userStats, updates)
    hungaryAchievementState.userStats.unlockedCount = hungaryAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = hungaryAchievementState.userStats
    Object.values(hungaryAchievementDefinitions).forEach(def => {
      if (hungaryAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          hungaryAchievementState.unlockedAchievements.push(def.id)
          hungaryAchievementState.totalPoints += def.points
          hungaryAchievementState.userStats.unlockedCount = hungaryAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      hungaryAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  recordLessonCompleted({ levelId, totalProgress = 0, averageScore = 0 } = {}) {
    const s = hungaryAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    s.averageCourseScore = averageScore
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy    = (s.nightTimeStudy    || 0) + 1
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
    const s = hungaryAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0
    s.totalQuizzes = (s.totalQuizzes || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, accuracy)
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
    const s = hungaryAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  recordTastingNote() {
    const s = hungaryAchievementState.userStats
    s.tastingNotesCount = (s.tastingNotesCount || 0) + 1
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    hungaryAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = hungaryAchievementState.totalPoints
    const thresholds = hungaryAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return hungaryAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(hungaryAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   hungaryAchievementState.totalPoints,
      unlockedCount: hungaryAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(hungaryAchievementDefinitions).length,
      completionPct: hungaryAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalHungaryAchievementManager = new HungaryAchievementManager()
