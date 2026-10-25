// 隆河葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function rhoneAchievementsStorageKey(userId) {
  return `rhone-wine-academy-achievements:${userId}`
}

// 課程規模（與 rhoneLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以 PDO id（如 PDO-FR-A0199＝Côte-Rôtie）記錄，與地圖 geojson 的 id 一致；
// Laudun 沒有獨立邊界，以示意點 id（RH-PT-LAUDUN）計入南隆河 cru。
export const NORTH_CRU_IDS = [
  'PDO-FR-A0199', 'PDO-FR-A0685', 'PDO-FR-A0587', 'PDO-FR-A0200',
  'PDO-FR-A1002', 'PDO-FR-A0389', 'PDO-FR-A0697', 'PDO-FR-A0398'
]
export const SOUTH_CRU_IDS = [
  'PDO-FR-A0144', 'PDO-FR-A0143', 'PDO-FR-A0151', 'PDO-FR-A0690', 'PDO-FR-A0724',
  'PDO-FR-A0720', 'PDO-FR-02175', 'PDO-FR-A0331', 'PDO-FR-A0328', 'RH-PT-LAUDUN'
]
const CDP_ID = 'PDO-FR-A0144'
const HERMITAGE_ID = 'PDO-FR-A1002'

export const rhoneAchievementDefinitions = {
  'rhone-first-lesson': {
    id: 'rhone-first-lesson', title: '隆河初遇',
    description: '完成第一個隆河葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'rhone-level-1': {
    id: 'rhone-level-1', title: '隆河入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'rhone-level-2': {
    id: 'rhone-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'rhone-level-3': {
    id: 'rhone-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'rhone-half-way': {
    id: 'rhone-half-way', title: '河谷中途',
    description: '完成 50% 以上的課程進度', icon: '⛵',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'rhone-all-complete': {
    id: 'rhone-all-complete', title: '隆河全覽者',
    description: '完成隆河葡萄酒全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'rhone-explore-first': {
    id: 'rhone-explore-first', title: '初探河谷',
    description: '探索第一個隆河產區', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'rhone-explore-5': {
    id: 'rhone-explore-5', title: '五區踏查',
    description: '探索 5 個以上隆河產區', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'rhone-explore-cdp': {
    id: 'rhone-explore-cdp', title: '教皇新堡朝聖',
    description: '探索 Châteauneuf-du-Pape 產區', icon: '🏰',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(CDP_ID)
  },
  'rhone-explore-hermitage': {
    id: 'rhone-explore-hermitage', title: '名丘朝聖',
    description: '探索 Hermitage 產區', icon: '⛰️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(HERMITAGE_ID)
  },
  'rhone-pyramid': {
    id: 'rhone-pyramid', title: '金字塔三層',
    description: '分級金字塔的三層（Côtes du Rhône、Villages、Cru）各探索至少一個', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => (s.exploredTiersList || []).includes('cdr') &&
      (s.exploredTiersList || []).includes('villages') && (s.exploredTiersList || []).includes('cru')
  },
  'rhone-north-pilgrim': {
    id: 'rhone-north-pilgrim', title: '北隆朝聖',
    description: '探索北隆河全部 8 個 cru', icon: '🟣',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => NORTH_CRU_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'rhone-south-pilgrim': {
    id: 'rhone-south-pilgrim', title: '南隆行腳',
    description: '探索南隆河全部 10 個 cru', icon: '🟠',
    category: 'exploration', rarity: 'epic', points: 120,
    condition: s => SOUTH_CRU_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'rhone-north-south': {
    id: 'rhone-north-south', title: '南北貫通',
    description: '北隆河與南隆河各探索至少 3 個 cru', icon: '🧭',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => NORTH_CRU_IDS.filter(id => s.exploredRegionsList.includes(id)).length >= 3 &&
      SOUTH_CRU_IDS.filter(id => s.exploredRegionsList.includes(id)).length >= 3
  },
  'rhone-explore-all-18': {
    id: 'rhone-explore-all-18', title: '18 Crus 集滿',
    description: '探索北 8 與南 10 共 18 個 cru', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => [...NORTH_CRU_IDS, ...SOUTH_CRU_IDS].every(id => s.exploredRegionsList.includes(id))
  },
  'rhone-perfect-score': {
    id: 'rhone-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'rhone-quiz-streak': {
    id: 'rhone-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'rhone-quiz-starter': {
    id: 'rhone-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'rhone-quiz-master': {
    id: 'rhone-quiz-master', title: '隆河達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'rhone-all-games': {
    id: 'rhone-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'rhone-diploma-ace': {
    id: 'rhone-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'rhone-night-owl': {
    id: 'rhone-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'rhone-early-bird': {
    id: 'rhone-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'rhone-streak-7': {
    id: 'rhone-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'rhone-streak-30': {
    id: 'rhone-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'rhone-first-note': {
    id: 'rhone-first-note', title: '第一則筆記',
    description: '記錄第一則隆河品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'rhone-tasting-notes': {
    id: 'rhone-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'rhone-compare-notes': {
    id: 'rhone-compare-notes', title: '南北對飲',
    description: '各記錄至少一則北隆河紅酒與南隆河紅酒的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('rh_north_red') && (s.tastingTypesList || []).includes('rh_south_red')
  },
  'rhone-pyramid-master': {
    id: 'rhone-pyramid-master', title: '金字塔掌握者',
    description: '完成 Level 2 並探索北隆河與南隆河各至少 3 個 cru', icon: '🔺',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed &&
      NORTH_CRU_IDS.filter(id => s.exploredRegionsList.includes(id)).length >= 3 &&
      SOUTH_CRU_IDS.filter(id => s.exploredRegionsList.includes(id)).length >= 3
  },
  'rhone-collector': {
    id: 'rhone-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'rhone-grand-master': {
    id: 'rhone-grand-master', title: '隆河大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const rhoneAchievementState = reactive({
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
    exploredGroupsList:  [],   // 北／南／其他（zone）
    exploredTiersList:   [],   // 分級層：cdr／villages／cru／other
    tastingTypesList:    [],
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
  unlockedAchievements: rhoneAchievementState.unlockedAchievements,
  totalPoints: rhoneAchievementState.totalPoints,
  newUnlocks: rhoneAchievementState.newUnlocks,
  userStats: rhoneAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const rhoneAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '隆河新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Syrah 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Grenache 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '南北對照鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: 'Cru 行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '隆河產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '隆河葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const rhoneAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(rhoneAchievementDefinitions).length
    return total ? Math.round((rhoneAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(rhoneAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (rhoneAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class RhoneAchievementManager {
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
      const raw = localStorage.getItem(`rhone-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = rhoneAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`rh-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[rhone-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    rhoneAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    rhoneAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    rhoneAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(rhoneAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      rhoneAchievementState.unlockedAchievements = data.unlocked || []
      rhoneAchievementState.totalPoints = data.totalPoints || 0
      rhoneAchievementState.userStats = { ...rhoneAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[rhone-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(rhoneAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    rhoneAchievementState.unlockedAchievements,
        totalPoints: rhoneAchievementState.totalPoints,
        userStats:   rhoneAchievementState.userStats
      }))
    } catch (e) { console.warn('[rhone-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(rhoneAchievementState.userStats, updates)
    rhoneAchievementState.userStats.unlockedCount = rhoneAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = rhoneAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(rhoneAchievementDefinitions).forEach(def => {
        if (rhoneAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            rhoneAchievementState.unlockedAchievements.push(def.id)
            rhoneAchievementState.totalPoints += def.points
            stats.unlockedCount = rhoneAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      rhoneAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = rhoneAchievementState.userStats
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
    const s = rhoneAchievementState.userStats
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

  // id：geojson 的 PDO id（如 PDO-FR-A0199）或示意點 id；zone：north／south／both／outer；tier：cdr／villages／cru／other
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = rhoneAchievementState.userStats
    const list = s.exploredRegionsList || []
    const zones = s.exploredGroupsList || []
    const tiers = s.exploredTiersList || []
    const hasZone = !zone || zones.includes(zone)
    const hasTier = !tier || tiers.includes(tier)
    if (list.includes(id) && hasZone && hasTier) return []
    if (!list.includes(id)) s.exploredRegionsList = [...list, id]
    if (zone && !hasZone) s.exploredGroupsList = [...zones, zone]
    if (tier && !hasTier) s.exploredTiersList = [...tiers, tier]
    s.exploredRegions = s.exploredRegionsList.length
    return this.updateStats(s)
  }

  // 以目前筆記總數與出現過的酒款類型為準（可重複呼叫，不會重複累計）
  syncTastingNotes(count, types = []) {
    const s = rhoneAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    rhoneAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = rhoneAchievementState.totalPoints
    const thresholds = rhoneAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return rhoneAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(rhoneAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   rhoneAchievementState.totalPoints,
      unlockedCount: rhoneAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(rhoneAchievementDefinitions).length,
      completionPct: rhoneAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalRhoneAchievementManager = new RhoneAchievementManager()
