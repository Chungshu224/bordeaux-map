// 智利葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function chileAchievementsStorageKey(userId) {
  return `chile-wine-academy-achievements:${userId}`
}

// 課程規模（與 chileLearningStore 一致：L1 5 堂、L2 5 堂、L3 4 堂）
const LEVEL_LESSONS = { 1: 5, 2: 5, 3: 4 }
const TOTAL_LESSONS = 14

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（CL-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const NORTH_IDS = ['ELQUI', 'LIMARI', 'CHOAPA'].map(x => `CL-PT-${x}`)
export const ACONCAGUA_IDS = ['ACONCAGUA', 'CASABLANCA', 'SANANTONIO', 'LEYDA'].map(x => `CL-PT-${x}`)
export const CENTRAL_IDS = ['MAIPO', 'ALTOMAIPO', 'BUIN', 'CACHAPOAL', 'PEUMO', 'COLCHAGUA', 'APALTA', 'MARCHIGUE', 'LOLOL', 'CURICO', 'MAULE'].map(x => `CL-PT-${x}`)
export const SOUTH_IDS = ['ITATA', 'BIOBIO', 'MALLECO'].map(x => `CL-PT-${x}`)
export const ALL_POINT_IDS = [...NORTH_IDS, ...ACONCAGUA_IDS, ...CENTRAL_IDS, ...SOUTH_IDS]
const APALTA_ID = 'CL-PT-APALTA'
const CASABLANCA_ID = 'CL-PT-CASABLANCA'
const ALTOMAIPO_ID = 'CL-PT-ALTOMAIPO'

export const chileAchievementDefinitions = {
  'chile-first-lesson': {
    id: 'chile-first-lesson', title: '智利初遇',
    description: '完成第一個智利葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'chile-level-1': {
    id: 'chile-level-1', title: '智利入門者',
    description: '完成 Level 1 全部 5 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'chile-level-2': {
    id: 'chile-level-2', title: '產區行家',
    description: '完成 Level 2 全部 5 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'chile-level-3': {
    id: 'chile-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 4 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'chile-half-way': {
    id: 'chile-half-way', title: '安地斯中途',
    description: '完成 50% 以上的課程進度', icon: '🏔️',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'chile-all-complete': {
    id: 'chile-all-complete', title: '智利全覽者',
    description: '完成智利葡萄酒全部 14 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 14
  },
  'chile-explore-first': {
    id: 'chile-explore-first', title: '初探智利',
    description: '探索第一個智利產區示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'chile-explore-5': {
    id: 'chile-explore-5', title: '五處踏查',
    description: '探索 5 個以上智利產區示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'chile-explore-apalta': {
    id: 'chile-explore-apalta', title: 'Apalta 朝聖',
    description: '探索 Apalta', icon: '⛰️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(APALTA_ID)
  },
  'chile-explore-casablanca': {
    id: 'chile-explore-casablanca', title: 'Casablanca 朝聖',
    description: '探索 Casablanca Valley', icon: '🌫️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(CASABLANCA_ID)
  },
  'chile-coast-vs-andes': {
    id: 'chile-coast-vs-andes', title: '海岸與山麓',
    description: '探索 Casablanca Valley 與 Alto Maipo，走過靠海風與靠安地斯取得涼爽的兩端', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(CASABLANCA_ID) && s.exploredRegionsList.includes(ALTOMAIPO_ID)
  },
  'chile-four-zones': {
    id: 'chile-four-zones', title: '四大產區群行腳',
    description: '北部、Aconcagua 區、中央谷地、南部各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['north', 'aconcagua', 'central', 'south'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'chile-central-pilgrim': {
    id: 'chile-central-pilgrim', title: '中央谷地行腳',
    description: '探索中央谷地的全部 11 個示意點', icon: '🍷',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => CENTRAL_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'chile-frontier-pilgrim': {
    id: 'chile-frontier-pilgrim', title: '南北邊疆行腳',
    description: '探索北部（Coquimbo）與南部（Sur）的全部 6 個示意點', icon: '🌵',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => [...NORTH_IDS, ...SOUTH_IDS].every(id => s.exploredRegionsList.includes(id))
  },
  'chile-explore-all': {
    id: 'chile-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 21 個智利示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'chile-perfect-score': {
    id: 'chile-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'chile-quiz-streak': {
    id: 'chile-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'chile-quiz-starter': {
    id: 'chile-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'chile-quiz-master': {
    id: 'chile-quiz-master', title: '智利達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'chile-all-games': {
    id: 'chile-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'chile-diploma-ace': {
    id: 'chile-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'chile-night-owl': {
    id: 'chile-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'chile-early-bird': {
    id: 'chile-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'chile-streak-7': {
    id: 'chile-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'chile-streak-30': {
    id: 'chile-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'chile-first-note': {
    id: 'chile-first-note', title: '第一則筆記',
    description: '記錄第一則智利品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'chile-tasting-notes': {
    id: 'chile-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'chile-compare-notes': {
    id: 'chile-compare-notes', title: 'Cabernet 與 Carmenère 對飲',
    description: '各記錄至少一則 Cabernet Sauvignon 與 Carmenère 的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('cl_cab_maipo') && (s.tastingTypesList || []).includes('cl_carmenere')
  },
  'chile-law-master': {
    id: 'chile-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'chile-collector': {
    id: 'chile-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'chile-grand-master': {
    id: 'chile-grand-master', title: '智利大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const chileAchievementState = reactive({
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
    exploredGroupsList:  [],   // 產區群（north／aconcagua／central／south）
    exploredTiersList:   [],   // 保留欄位（智利地圖不分層）
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
  unlockedAchievements: chileAchievementState.unlockedAchievements,
  totalPoints: chileAchievementState.totalPoints,
  newUnlocks: chileAchievementState.newUnlocks,
  userStats: chileAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const chileAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '智利新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Cabernet 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Carmenère 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '高低海拔鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '智利產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '智利葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const chileAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(chileAchievementDefinitions).length
    return total ? Math.round((chileAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(chileAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (chileAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class ChileAchievementManager {
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
      const raw = localStorage.getItem(`chile-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = chileAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`cl-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[chile-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    chileAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    chileAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    chileAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(chileAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      chileAchievementState.unlockedAchievements = data.unlocked || []
      chileAchievementState.totalPoints = data.totalPoints || 0
      chileAchievementState.userStats = { ...chileAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[chile-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(chileAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    chileAchievementState.unlockedAchievements,
        totalPoints: chileAchievementState.totalPoints,
        userStats:   chileAchievementState.userStats
      }))
    } catch (e) { console.warn('[chile-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(chileAchievementState.userStats, updates)
    chileAchievementState.userStats.unlockedCount = chileAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = chileAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(chileAchievementDefinitions).forEach(def => {
        if (chileAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            chileAchievementState.unlockedAchievements.push(def.id)
            chileAchievementState.totalPoints += def.points
            stats.unlockedCount = chileAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      chileAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = chileAchievementState.userStats
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
    const s = chileAchievementState.userStats
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

  // id：示意點 id（CL-PT-*）；zone：north／aconcagua／central／south；tier：valley／subarea
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = chileAchievementState.userStats
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
    const s = chileAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    chileAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = chileAchievementState.totalPoints
    const thresholds = chileAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return chileAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(chileAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   chileAchievementState.totalPoints,
      unlockedCount: chileAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(chileAchievementDefinitions).length,
      completionPct: chileAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalChileAchievementManager = new ChileAchievementManager()
