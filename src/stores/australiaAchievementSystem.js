// 澳洲葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function australiaAchievementsStorageKey(userId) {
  return `australia-wine-academy-achievements:${userId}`
}

// ── 成就定義 ──────────────────────────────────────────────────
export const australiaAchievementDefinitions = {

  // ── 學習進度 (progress) ─────────────────────────────────────
  'au-first-lesson': {
    id: 'au-first-lesson', title: '袋鼠初遇',
    description: '完成第一個澳洲葡萄酒課程', icon: '🦘',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'au-level-1': {
    id: 'au-level-1', title: '入門學員',
    description: '完成 Level 1 全部 18 個單元（含期末測驗）', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 60,
    condition: s => s.level1Completed
  },
  'au-level-2': {
    id: 'au-level-2', title: '進階行家',
    description: '完成 Level 2 全部 20 個單元', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 180,
    condition: s => s.level2Completed
  },
  'au-level-3': {
    id: 'au-level-3', title: '澳洲葡萄酒專家',
    description: '完成 Level 3 全部 10 個單元（含期末測驗）', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 350,
    condition: s => s.level3Completed
  },
  'au-half-way': {
    id: 'au-half-way', title: '半途達人',
    description: '完成 50% 以上的課程進度', icon: '📖',
    category: 'progress', rarity: 'uncommon', points: 40,
    condition: s => s.totalProgress >= 50
  },
  'au-shiraz-scholar': {
    id: 'au-shiraz-scholar', title: 'Shiraz 學者',
    description: '完成南澳 SA 全部課程（Level 1 M3）', icon: '🌡️',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.saModuleCompleted
  },
  'au-barossa-devotee': {
    id: 'au-barossa-devotee', title: 'Barossa 虔信者',
    description: '完成 Level 1 M3 及 Level 2 M1 南澳深度探索', icon: '🌳',
    category: 'progress', rarity: 'rare', points: 80,
    condition: s => s.saModuleCompleted && s.saDeepModuleCompleted
  },
  'au-grange-student': {
    id: 'au-grange-student', title: 'Grange 學生',
    description: '完成 Penfolds 解析單元（Level 3 M1）', icon: '👑',
    category: 'progress', rarity: 'rare', points: 70,
    condition: s => s.penfoldModuleCompleted
  },
  'au-all-complete': {
    id: 'au-all-complete', title: '澳洲大陸全覽者',
    description: '完成全部 48 個課程單元', icon: '🌏',
    category: 'progress', rarity: 'legendary', points: 500,
    condition: s => s.completedLessons >= 48
  },

  // ── 地圖探索 (exploration) ─────────────────────────────────
  'au-explore-first': {
    id: 'au-explore-first', title: '初探大陸',
    description: '探索第一個澳洲產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'au-explore-barossa': {
    id: 'au-explore-barossa', title: 'Barossa 朝聖',
    description: '探索 Barossa Valley 產區', icon: '🌡️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('barossa')
  },
  'au-explore-margaret': {
    id: 'au-explore-margaret', title: 'Margaret River 行者',
    description: '探索 Margaret River 產區', icon: '🏄',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('margaret_river')
  },
  'au-explore-tasmania': {
    id: 'au-explore-tasmania', title: '冰島探索者',
    description: '探索 Tasmania 產區', icon: '🧊',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('tasmania')
  },
  'au-explore-hunter': {
    id: 'au-explore-hunter', title: 'Hunter 獵人',
    description: '探索 Hunter Valley 產區', icon: '⏳',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('hunter_valley')
  },
  'au-explore-yarra': {
    id: 'au-explore-yarra', title: 'Yarra 漫遊者',
    description: '探索 Yarra Valley 產區', icon: '🎻',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('yarra_valley')
  },
  'au-explore-five': {
    id: 'au-explore-five', title: '五大產區踏查',
    description: '探索 5 個以上澳洲產區', icon: '🗂️',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => s.exploredRegions >= 5
  },
  'au-explore-six-states': {
    id: 'au-explore-six-states', title: '六州全覽',
    description: '探索 10 個以上不同產區', icon: '🌍',
    category: 'exploration', rarity: 'epic', points: 120,
    condition: s => s.exploredRegions >= 10
  },

  // ── 測驗挑戰 (quiz) ────────────────────────────────────────
  'au-quiz-first': {
    id: 'au-quiz-first', title: '初試啼聲',
    description: '完成第一次測驗', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 15,
    condition: s => s.totalQuizzes >= 1
  },
  'au-quiz-perfect': {
    id: 'au-quiz-perfect', title: '完美品飲',
    description: '任意測驗獲得滿分（100 分）', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 30,
    condition: s => s.perfectScores >= 1
  },
  'au-quiz-streak': {
    id: 'au-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗均達 90 分以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'au-quiz-master': {
    id: 'au-quiz-master', title: '測驗達人',
    description: '累計完成 10 次以上測驗', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 45,
    condition: s => s.totalQuizzes >= 10
  },
  'au-final-exam-1': {
    id: 'au-final-exam-1', title: 'Level 1 期末優秀',
    description: 'Level 1 期末測驗達 80 分以上', icon: '🎓',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level1Completed
  },
  'au-final-exam-3': {
    id: 'au-final-exam-3', title: '專業認定',
    description: 'Level 3 期末測驗達 80 分以上', icon: '🏅',
    category: 'quiz', rarity: 'epic', points: 100,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },

  // ── 時間特殊 (time) ────────────────────────────────────────
  'au-night-owl': {
    id: 'au-night-owl', title: '深夜酒客',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'au-early-bird': {
    id: 'au-early-bird', title: '晨光品飲',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'au-streak-7': {
    id: 'au-streak-7', title: '週週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'au-streak-30': {
    id: 'au-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },

  // ── 特殊成就 (special) ─────────────────────────────────────
  'au-screw-cap-pioneer': {
    id: 'au-screw-cap-pioneer', title: '螺旋蓋先驅',
    description: '完成螺旋蓋革命課程（Level 2 M6L1）並探索 Clare Valley', icon: '🔩',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => s.completedLessons >= 20 && s.exploredRegionsList.includes('clare_valley')
  },
  'au-old-vine-lover': {
    id: 'au-old-vine-lover', title: '老藤愛好者',
    description: '完成 Barossa 老藤系統課程（Level 2 M1L1）並解鎖 Barossa 探索', icon: '🌳',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.saDeepModuleCompleted && s.exploredRegionsList.includes('barossa')
  },
  'au-six-states': {
    id: 'au-six-states', title: '六州冒險家',
    description: '探索來自不同州的 6 個以上產區', icon: '🗺️',
    category: 'special', rarity: 'epic', points: 120,
    condition: s => s.exploredRegions >= 6
  },
  'au-tasting-notes': {
    id: 'au-tasting-notes', title: '品飲筆記大師',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'au-collector': {
    id: 'au-collector', title: '成就收藏家',
    description: '解鎖 12 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 70,
    condition: s => s.unlockedCount >= 12
  },
  'au-grand-master': {
    id: 'au-grand-master', title: '澳洲葡萄酒宗師',
    description: '解鎖 22 個以上成就', icon: '👑',
    category: 'special', rarity: 'legendary', points: 350,
    condition: s => s.unlockedCount >= 22
  },
}

// ── 狀態 ──────────────────────────────────────────────────────
export const australiaAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:        0,
    level1Completed:         false,
    level2Completed:         false,
    level3Completed:         false,
    totalProgress:           0,
    averageCourseScore:      0,
    bestQuizScore:           0,
    saModuleCompleted:       false,
    saDeepModuleCompleted:   false,
    penfoldModuleCompleted:  false,
    exploredRegions:         0,
    exploredRegionsList:     [],
    perfectScores:           0,
    bestStreak:              0,
    currentStreak:           0,
    lastGameScores:          [],
    totalQuizzes:            0,
    nightTimeStudy:          0,
    earlyMorningStudy:       0,
    consecutiveDays:         0,
    lastStudyDate:           null,
    tastingNotesCount:       0,
    unlockedCount:           0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_AUSTRALIA_ACHIEVEMENT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: australiaAchievementState.unlockedAchievements,
  totalPoints: australiaAchievementState.totalPoints,
  newUnlocks: australiaAchievementState.newUnlocks,
  userStats: australiaAchievementState.userStats
}))

// ── 配置 ──────────────────────────────────────────────────────
export const australiaAchievementConfig = {
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
    { level: 1, min: 0,    max: 49,   title: '大堡礁新芽',       icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Shiraz 初探者',    icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Barossa 愛好者',   icon: '🌡️' },
    { level: 4, min: 300,  max: 499,  title: 'Grange 鑑賞者',    icon: '🥂' },
    { level: 5, min: 500,  max: 799,  title: '六州行家',         icon: '🌏' },
    { level: 6, min: 800,  max: 1199, title: '老藤守護者',       icon: '🌳' },
    { level: 7, min: 1200, max: 1999, title: '大洋洲專家',       icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '澳洲葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const australiaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(australiaAchievementDefinitions).length
    return total ? Math.round((australiaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(australiaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (australiaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ───────────────────────────────────────────────────
export class AustraliaAchievementManager {
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
    australiaAchievementState.unlockedAchievements = [...DEFAULT_AUSTRALIA_ACHIEVEMENT_SNAPSHOT.unlockedAchievements]
    australiaAchievementState.totalPoints = DEFAULT_AUSTRALIA_ACHIEVEMENT_SNAPSHOT.totalPoints
    australiaAchievementState.userStats = { ...DEFAULT_AUSTRALIA_ACHIEVEMENT_SNAPSHOT.userStats }
    if (!userId) return
    try {
      const raw = localStorage.getItem(australiaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      australiaAchievementState.unlockedAchievements = data.unlocked    || []
      australiaAchievementState.totalPoints          = data.totalPoints || 0
      australiaAchievementState.userStats = {
        ...australiaAchievementState.userStats,
        ...(data.userStats || {})
      }
    } catch (e) { console.warn('[australia-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(australiaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    australiaAchievementState.unlockedAchievements,
        totalPoints: australiaAchievementState.totalPoints,
        userStats:   australiaAchievementState.userStats
      }))
    } catch (e) { console.warn('[australia-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(australiaAchievementState.userStats, updates)
    australiaAchievementState.userStats.unlockedCount = australiaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = australiaAchievementState.userStats
    Object.values(australiaAchievementDefinitions).forEach(def => {
      if (australiaAchievementState.unlockedAchievements.includes(def.id)) return
      try {
        if (def.condition(stats)) {
          australiaAchievementState.unlockedAchievements.push(def.id)
          australiaAchievementState.totalPoints += def.points
          australiaAchievementState.userStats.unlockedCount = australiaAchievementState.unlockedAchievements.length
          newlyUnlocked.push(def)
        }
      } catch (_) {}
    })
    if (newlyUnlocked.length) {
      australiaAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
    }
    return newlyUnlocked
  }

  /**
   * 完成一節課時呼叫
   * @param {object} opts
   * @param {string} opts.lessonId   - 課程 ID (e.g. 'A1M3L1')
   * @param {string} opts.levelKey   - 等級 key (e.g. 'level1')
   * @param {number} opts.totalProgress - 整體完成百分比 0~100
   * @param {boolean} opts.levelCompleted - 是否剛完成整個等級
   */
  recordLessonCompleted({ lessonId = '', levelKey = '', totalProgress = 0, levelCompleted = false } = {}) {
    const s = australiaAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress    = Math.max(s.totalProgress || 0, totalProgress)

    if (levelKey === 'level1' && levelCompleted) s.level1Completed = true
    if (levelKey === 'level2' && levelCompleted) s.level2Completed = true
    if (levelKey === 'level3' && levelCompleted) s.level3Completed = true

    // 南澳模組完成偵測（Level 1 M3 最後一課：A1M3L4）
    if (lessonId === 'A1M3L4') s.saModuleCompleted = true
    // 南澳深度模組（Level 2 M1 最後一課：A2M1L4）
    if (lessonId === 'A2M1L4') s.saDeepModuleCompleted = true
    // Penfolds 模組（Level 3 M1 最後一課：A3M1L2）
    if (lessonId === 'A3M1L2') s.penfoldModuleCompleted = true

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
    const s    = australiaAchievementState.userStats
    const pct  = totalQ ? Math.round((correctCount / totalQ) * 100) : (score || 0)
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
    const s = australiaAchievementState.userStats
    if (!s.exploredRegionsList) s.exploredRegionsList = []
    if (!s.exploredRegionsList.includes(regionId)) {
      s.exploredRegionsList = [...s.exploredRegionsList, regionId.toLowerCase()]
      s.exploredRegions     = s.exploredRegionsList.length
    }
    return this.updateStats(s)
  }

  recordTastingNote() {
    const s = australiaAchievementState.userStats
    s.tastingNotesCount = (s.tastingNotesCount || 0) + 1
    return this.updateStats(s)
  }

  clearNewUnlocks() {
    australiaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts        = australiaAchievementState.totalPoints
    const thresholds = australiaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return australiaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(australiaAchievementDefinitions).map(a => ({
      ...a, unlocked: this.isUnlocked(a.id)
    }))
  }

  getStats() {
    return {
      totalPoints:   australiaAchievementState.totalPoints,
      unlockedCount: australiaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(australiaAchievementDefinitions).length,
      completionPct: australiaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalAustraliaAchievementManager = new AustraliaAchievementManager()
