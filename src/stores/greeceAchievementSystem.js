// 希臘葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function greeceAchievementsStorageKey(userId) {
  return `greece-wine-academy-achievements:${userId}`
}

// 課程規模（與 greeceLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以 PDO 的歐盟代碼（如 A1065＝Santorini）記錄，與地圖 geojson 的 id 一致
export const greeceAchievementDefinitions = {
  'greece-first-lesson': {
    id: 'greece-first-lesson', title: '愛琴海初遇',
    description: '完成第一個希臘葡萄酒課程', icon: '🏺',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'greece-level-1': {
    id: 'greece-level-1', title: '希臘入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'greece-level-2': {
    id: 'greece-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'greece-level-3': {
    id: 'greece-level-3', title: 'Diploma 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'greece-half-way': {
    id: 'greece-half-way', title: '中途航行者',
    description: '完成 50% 以上的課程進度', icon: '⛵',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'greece-all-complete': {
    id: 'greece-all-complete', title: '希臘全覽者',
    description: '完成希臘葡萄酒全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'greece-explore-first': {
    id: 'greece-explore-first', title: '初探島嶼',
    description: '探索第一個希臘 PDO 產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'greece-explore-santorini': {
    id: 'greece-explore-santorini', title: '火山島朝聖',
    description: '探索聖托里尼（Santorini）產區', icon: '🌋',
    category: 'exploration', rarity: 'uncommon', points: 25,
    condition: s => s.exploredRegionsList.includes('A1065')
  },
  'greece-explore-naoussa': {
    id: 'greece-explore-naoussa', title: '北方旗艦',
    description: '探索 Naoussa 產區', icon: '🏔️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('A1610')
  },
  'greece-explore-nemea': {
    id: 'greece-explore-nemea', title: 'Agiorgitiko 之鄉',
    description: '探索 Nemea 產區', icon: '🍒',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes('A1573')
  },
  'greece-explore-5': {
    id: 'greece-explore-5', title: '五區踏查',
    description: '探索 5 個以上 PDO 產區', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'greece-explore-6groups': {
    id: 'greece-explore-6groups', title: '六大地理區踏查',
    description: '探索六大地理區各至少一個產區', icon: '🌍',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => s.exploredGroupsList.length >= 6
  },
  'greece-explore-15': {
    id: 'greece-explore-15', title: '十五區全覽',
    description: '探索 15 個以上 PDO 產區', icon: '🗺️',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => s.exploredRegions >= 15
  },
  'greece-explore-all-33': {
    id: 'greece-explore-all-33', title: '33 產區集滿',
    description: '探索全部 33 個 PDO 產區', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => s.exploredRegions >= 33
  },
  'greece-perfect-score': {
    id: 'greece-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'greece-quiz-streak': {
    id: 'greece-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'greece-quiz-starter': {
    id: 'greece-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'greece-quiz-master': {
    id: 'greece-quiz-master', title: '希臘達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'greece-all-games': {
    id: 'greece-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'greece-diploma-ace': {
    id: 'greece-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'greece-night-owl': {
    id: 'greece-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'greece-early-bird': {
    id: 'greece-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'greece-streak-7': {
    id: 'greece-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'greece-streak-30': {
    id: 'greece-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'greece-first-note': {
    id: 'greece-first-note', title: '第一則筆記',
    description: '記錄第一則希臘品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'greece-tasting-notes': {
    id: 'greece-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'greece-sweet-and-dry': {
    id: 'greece-sweet-and-dry', title: '海陸雙修',
    description: '完成 Level 2 並探索聖托里尼與 Naoussa', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegionsList.includes('A1065') && s.exploredRegionsList.includes('A1610')
  },
  'greece-collector': {
    id: 'greece-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'greece-grand-master': {
    id: 'greece-grand-master', title: '希臘大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const greeceAchievementState = reactive({
  unlockedAchievements: [],
  totalPoints: 0,
  newUnlocks: [],
  userStats: {
    completedLessons:    0,
    level1Completed:     false,
    level2Completed:     false,
    level3Completed:     false,
    totalProgress:       0,
    bestQuizScore:       0,
    exploredRegions:     0,
    exploredRegionsList: [],
    exploredGroupsList:  [],
    perfectScores:       0,
    bestStreak:          0,
    currentStreak:       0,
    lastGameScores:      [],
    totalQuizzes:        0,
    gameTypesPlayed:     [],
    nightTimeStudy:      0,
    earlyMorningStudy:   0,
    consecutiveDays:     0,
    lastStudyDate:       null,
    tastingNotesCount:   0,
    unlockedCount:       0
  }
})

// 初始狀態快照，切換帳號時用來重置，避免殘留前一位使用者的資料
const DEFAULT_SNAPSHOT = JSON.parse(JSON.stringify({
  unlockedAchievements: greeceAchievementState.unlockedAchievements,
  totalPoints: greeceAchievementState.totalPoints,
  newUnlocks: greeceAchievementState.newUnlocks,
  userStats: greeceAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const greeceAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '愛琴海新芽',        icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Assyrtiko 初探者',  icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Xinomavro 愛好者',  icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '島嶼風土鑑賞者',    icon: '🏝️' },
    { level: 5, min: 500,  max: 799,  title: 'PDO 行家',          icon: '🏺' },
    { level: 6, min: 800,  max: 1199, title: '希臘產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma 衝刺者',    icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '希臘葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const greeceAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(greeceAchievementDefinitions).length
    return total ? Math.round((greeceAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(greeceAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (greeceAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class GreeceAchievementManager {
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

  _syncWithCourseProgress() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      const raw = localStorage.getItem(`greece-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = greeceAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`gr-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[greece-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    greeceAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    greeceAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    greeceAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(greeceAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      greeceAchievementState.unlockedAchievements = data.unlocked || []
      greeceAchievementState.totalPoints = data.totalPoints || 0
      greeceAchievementState.userStats = { ...greeceAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[greece-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(greeceAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    greeceAchievementState.unlockedAchievements,
        totalPoints: greeceAchievementState.totalPoints,
        userStats:   greeceAchievementState.userStats
      }))
    } catch (e) { console.warn('[greece-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(greeceAchievementState.userStats, updates)
    greeceAchievementState.userStats.unlockedCount = greeceAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = greeceAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(greeceAchievementDefinitions).forEach(def => {
        if (greeceAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            greeceAchievementState.unlockedAchievements.push(def.id)
            greeceAchievementState.totalPoints += def.points
            stats.unlockedCount = greeceAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      greeceAchievementState.newUnlocks.push(...newlyUnlocked)
      this._save()
      this._notify(newlyUnlocked)
    }
    return newlyUnlocked
  }

  // 沿用全站的成就彈窗（App.vue 的 AchievementNotificationsContainer 監聽此事件）
  _notify(list) {
    if (typeof window === 'undefined' || !authState.user?.id) return
    list.forEach((def, i) => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('achievementNotification', {
          detail: { ...def, timestamp: Date.now() }
        }))
      }, i * 250)
    })
  }

  recordLessonCompleted({ levelId, totalProgress = 0 } = {}) {
    const s = greeceAchievementState.userStats
    s.completedLessons = (s.completedLessons || 0) + 1
    s.totalProgress = Math.max(s.totalProgress || 0, totalProgress)
    if (levelId === 1) s.level1Completed = true
    if (levelId === 2) s.level2Completed = true
    if (levelId === 3) s.level3Completed = true
    const h = new Date().getHours()
    if (h >= 23 || h < 5) s.nightTimeStudy = (s.nightTimeStudy || 0) + 1
    if (h >= 5 && h < 8) s.earlyMorningStudy = (s.earlyMorningStudy || 0) + 1
    const today = new Date().toDateString()
    if (s.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString()
      s.consecutiveDays = (s.lastStudyDate === yesterday) ? (s.consecutiveDays || 0) + 1 : 1
      s.lastStudyDate = today
    }
    return this.updateStats(s)
  }

  // 測驗與遊戲共用：{ correctCount, totalQ, gameType? }
  recordQuizResult({ correctCount, totalQ, gameType } = {}) {
    const s = greeceAchievementState.userStats
    const accuracy = totalQ ? Math.round((correctCount / totalQ) * 100) : 0
    s.totalQuizzes = (s.totalQuizzes || 0) + 1
    s.bestQuizScore = Math.max(s.bestQuizScore || 0, accuracy)
    if (accuracy === 100) s.perfectScores = (s.perfectScores || 0) + 1
    if (accuracy >= 90) {
      s.currentStreak = (s.currentStreak || 0) + 1
      s.bestStreak = Math.max(s.bestStreak || 0, s.currentStreak)
    } else {
      s.currentStreak = 0
    }
    if (gameType && !(s.gameTypesPlayed || []).includes(gameType)) {
      s.gameTypesPlayed = [...(s.gameTypesPlayed || []), gameType]
    }
    return this.updateStats(s)
  }

  // pdoId：geojson 的 id（如 A1065）；groupKey：六大地理區 key
  recordRegionExplored(pdoId, groupKey) {
    if (!pdoId) return []
    const s = greeceAchievementState.userStats
    const list = s.exploredRegionsList || []
    const groups = s.exploredGroupsList || []
    if (list.includes(pdoId) && (!groupKey || groups.includes(groupKey))) return []
    if (!list.includes(pdoId)) s.exploredRegionsList = [...list, pdoId]
    if (groupKey && !groups.includes(groupKey)) s.exploredGroupsList = [...groups, groupKey]
    s.exploredRegions = s.exploredRegionsList.length
    return this.updateStats(s)
  }

  // 以目前筆記總數為準（可重複呼叫，不會重複累計）
  syncTastingNotes(count) {
    const s = greeceAchievementState.userStats
    if ((s.tastingNotesCount || 0) >= count) return []
    return this.updateStats({ tastingNotesCount: count })
  }

  clearNewUnlocks() {
    greeceAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = greeceAchievementState.totalPoints
    const thresholds = greeceAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return greeceAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(greeceAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   greeceAchievementState.totalPoints,
      unlockedCount: greeceAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(greeceAchievementDefinitions).length,
      completionPct: greeceAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalGreeceAchievementManager = new GreeceAchievementManager()
