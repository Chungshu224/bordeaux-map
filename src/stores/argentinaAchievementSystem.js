// 阿根廷葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function argentinaAchievementsStorageKey(userId) {
  return `argentina-wine-academy-achievements:${userId}`
}

// 課程規模（與 argentinaLearningStore 一致：L1 5 堂、L2 5 堂、L3 4 堂）
const LEVEL_LESSONS = { 1: 5, 2: 5, 3: 4 }
const TOTAL_LESSONS = 14

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（AR-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const MENDOZA_IDS = ['LUJAN', 'AGRELO', 'COMPUERTAS', 'MAIPU', 'TUPUNGATO', 'GUALTALLARY', 'TUNUYAN', 'SANCARLOS', 'ALTAMIRA'].map(x => `AR-PT-${x}`)
export const SANJUAN_IDS = ['TULUM', 'PEDERNAL', 'CALINGASTA', 'SANRAFAEL'].map(x => `AR-PT-${x}`)
export const NORTH_IDS = ['CAFAYATE', 'CACHI', 'MOLINOS', 'AMAICHA', 'FIAMBALA', 'HUMAHUACA', 'LARIOJA'].map(x => `AR-PT-${x}`)
export const PATAGONIA_IDS = ['RIONEGRO', 'NEUQUEN', 'CHUBUT'].map(x => `AR-PT-${x}`)
export const ALL_POINT_IDS = [...MENDOZA_IDS, ...SANJUAN_IDS, ...NORTH_IDS, ...PATAGONIA_IDS]
const GUALTALLARY_ID = 'AR-PT-GUALTALLARY'
const CAFAYATE_ID = 'AR-PT-CAFAYATE'
const LUJAN_ID = 'AR-PT-LUJAN'
const RIONEGRO_ID = 'AR-PT-RIONEGRO'

export const argentinaAchievementDefinitions = {
  'argentina-first-lesson': {
    id: 'argentina-first-lesson', title: '阿根廷初遇',
    description: '完成第一個阿根廷葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'argentina-level-1': {
    id: 'argentina-level-1', title: '阿根廷入門者',
    description: '完成 Level 1 全部 5 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'argentina-level-2': {
    id: 'argentina-level-2', title: '產區行家',
    description: '完成 Level 2 全部 5 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'argentina-level-3': {
    id: 'argentina-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 4 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'argentina-half-way': {
    id: 'argentina-half-way', title: '安地斯中途',
    description: '完成 50% 以上的課程進度', icon: '🏔️',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'argentina-all-complete': {
    id: 'argentina-all-complete', title: '阿根廷全覽者',
    description: '完成阿根廷葡萄酒全部 14 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 14
  },
  'argentina-explore-first': {
    id: 'argentina-explore-first', title: '初探阿根廷',
    description: '探索第一個阿根廷產區示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'argentina-explore-5': {
    id: 'argentina-explore-5', title: '五處踏查',
    description: '探索 5 個以上阿根廷產區示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'argentina-explore-gualtallary': {
    id: 'argentina-explore-gualtallary', title: 'Gualtallary 朝聖',
    description: '探索 Gualtallary', icon: '⛰️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(GUALTALLARY_ID)
  },
  'argentina-explore-cafayate': {
    id: 'argentina-explore-cafayate', title: 'Cafayate 朝聖',
    description: '探索 Cafayate', icon: '🌹',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(CAFAYATE_ID)
  },
  'argentina-altitude-vs-latitude': {
    id: 'argentina-altitude-vs-latitude', title: '海拔與緯度',
    description: '探索 Luján de Cuyo 與 Río Negro，走過靠海拔與靠緯度取得涼爽的兩端', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(LUJAN_ID) && s.exploredRegionsList.includes(RIONEGRO_ID)
  },
  'argentina-four-zones': {
    id: 'argentina-four-zones', title: '四大產區群行腳',
    description: 'Mendoza、San Juan 與 San Rafael、北部、Patagonia 各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['mendoza', 'sanjuan', 'north', 'patagonia'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'argentina-mendoza-pilgrim': {
    id: 'argentina-mendoza-pilgrim', title: 'Mendoza 行腳',
    description: '探索 Mendoza 的全部 9 個示意點', icon: '🍷',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => MENDOZA_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'argentina-north-pilgrim': {
    id: 'argentina-north-pilgrim', title: '北部高地行腳',
    description: '探索北部（Salta 等）的全部 7 個示意點', icon: '🌵',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => NORTH_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'argentina-explore-all': {
    id: 'argentina-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 23 個阿根廷示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'argentina-perfect-score': {
    id: 'argentina-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'argentina-quiz-streak': {
    id: 'argentina-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'argentina-quiz-starter': {
    id: 'argentina-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'argentina-quiz-master': {
    id: 'argentina-quiz-master', title: '阿根廷達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'argentina-all-games': {
    id: 'argentina-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'argentina-diploma-ace': {
    id: 'argentina-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'argentina-night-owl': {
    id: 'argentina-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'argentina-early-bird': {
    id: 'argentina-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'argentina-streak-7': {
    id: 'argentina-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'argentina-streak-30': {
    id: 'argentina-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'argentina-first-note': {
    id: 'argentina-first-note', title: '第一則筆記',
    description: '記錄第一則阿根廷品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'argentina-tasting-notes': {
    id: 'argentina-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'argentina-compare-notes': {
    id: 'argentina-compare-notes', title: '海拔對飲',
    description: '各記錄至少一則中海拔 Malbec（Luján de Cuyo／Maipú）與高海拔 Malbec（Uco Valley）的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('ar_malbec_mid') && (s.tastingTypesList || []).includes('ar_malbec_high')
  },
  'argentina-law-master': {
    id: 'argentina-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'argentina-collector': {
    id: 'argentina-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'argentina-grand-master': {
    id: 'argentina-grand-master', title: '阿根廷大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const argentinaAchievementState = reactive({
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
    exploredGroupsList:  [],   // 產區群（mendoza／sanjuan／north／patagonia）
    exploredTiersList:   [],   // 保留欄位（阿根廷地圖不分層）
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
  unlockedAchievements: argentinaAchievementState.unlockedAchievements,
  totalPoints: argentinaAchievementState.totalPoints,
  newUnlocks: argentinaAchievementState.newUnlocks,
  userStats: argentinaAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const argentinaAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '阿根廷新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Malbec 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Torrontés 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '高低海拔鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '阿根廷產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '阿根廷葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const argentinaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(argentinaAchievementDefinitions).length
    return total ? Math.round((argentinaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(argentinaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (argentinaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class ArgentinaAchievementManager {
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
      const raw = localStorage.getItem(`argentina-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = argentinaAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`ar-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[argentina-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    argentinaAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    argentinaAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    argentinaAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(argentinaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      argentinaAchievementState.unlockedAchievements = data.unlocked || []
      argentinaAchievementState.totalPoints = data.totalPoints || 0
      argentinaAchievementState.userStats = { ...argentinaAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[argentina-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(argentinaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    argentinaAchievementState.unlockedAchievements,
        totalPoints: argentinaAchievementState.totalPoints,
        userStats:   argentinaAchievementState.userStats
      }))
    } catch (e) { console.warn('[argentina-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(argentinaAchievementState.userStats, updates)
    argentinaAchievementState.userStats.unlockedCount = argentinaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = argentinaAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(argentinaAchievementDefinitions).forEach(def => {
        if (argentinaAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            argentinaAchievementState.unlockedAchievements.push(def.id)
            argentinaAchievementState.totalPoints += def.points
            stats.unlockedCount = argentinaAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      argentinaAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = argentinaAchievementState.userStats
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
    const s = argentinaAchievementState.userStats
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

  // id：示意點 id（AR-PT-*）；zone：mendoza／sanjuan／north／patagonia；tier：province／department／district
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = argentinaAchievementState.userStats
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
    const s = argentinaAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    argentinaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = argentinaAchievementState.totalPoints
    const thresholds = argentinaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return argentinaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(argentinaAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   argentinaAchievementState.totalPoints,
      unlockedCount: argentinaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(argentinaAchievementDefinitions).length,
      completionPct: argentinaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalArgentinaAchievementManager = new ArgentinaAchievementManager()
