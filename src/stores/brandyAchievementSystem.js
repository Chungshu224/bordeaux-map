// 白蘭地成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function brandyAchievementsStorageKey(userId) {
  return `brandy-wine-academy-achievements:${userId}`
}

// 課程規模（與 brandyLearningStore 一致：L1 5 堂、L2 6 堂、L3 5 堂）
const LEVEL_LESSONS = { 1: 5, 2: 6, 3: 5 }
const TOTAL_LESSONS = 16

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（BD-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const COGNAC_IDS = ['COGNAC', 'GRANDECHAMPAGNE', 'PETITECHAMPAGNE', 'BORDERIES', 'FINSBOIS', 'BONSBOIS', 'BOISORD'].map(x => `BD-PT-${x}`)
export const ARMAGNAC_IDS = ['BASARMAGNAC', 'TENAREZE', 'HAUTARMAGNAC'].map(x => `BD-PT-${x}`)
export const EUROPE_IDS = ['JEREZ', 'PENEDES', 'SAMOS', 'BAROLO', 'FRIULI'].map(x => `BD-PT-${x}`)
export const WORLD_IDS = ['ICA', 'PISCOELQUI', 'PAARL', 'KLEINKAROO', 'YEREVAN'].map(x => `BD-PT-${x}`)
export const ALL_POINT_IDS = [...COGNAC_IDS, ...ARMAGNAC_IDS, ...EUROPE_IDS, ...WORLD_IDS]
const GRANDE_ID = 'BD-PT-GRANDECHAMPAGNE'
const BAS_ID = 'BD-PT-BASARMAGNAC'
const BOISORD_ID = 'BD-PT-BOISORD'

export const brandyAchievementDefinitions = {
  'brandy-first-lesson': {
    id: 'brandy-first-lesson', title: '白蘭地初遇',
    description: '完成第一個白蘭地課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'brandy-level-1': {
    id: 'brandy-level-1', title: '白蘭地入門者',
    description: '完成 Level 1 全部 5 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'brandy-level-2': {
    id: 'brandy-level-2', title: '產區行家',
    description: '完成 Level 2 全部 6 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'brandy-level-3': {
    id: 'brandy-level-3', title: 'Diploma／CMS 精修者',
    description: '完成 Level 3 全部 5 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'brandy-half-way': {
    id: 'brandy-half-way', title: '蒸餾中途',
    description: '完成 50% 以上的課程進度', icon: '🛶',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'brandy-all-complete': {
    id: 'brandy-all-complete', title: '白蘭地全覽者',
    description: '完成白蘭地全部 16 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 16
  },
  'brandy-explore-first': {
    id: 'brandy-explore-first', title: '初探白蘭地地圖',
    description: '探索第一個白蘭地示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'brandy-explore-5': {
    id: 'brandy-explore-5', title: '五處踏查',
    description: '探索 5 個以上白蘭地示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'brandy-explore-grande': {
    id: 'brandy-explore-grande', title: 'Grande Champagne 朝聖',
    description: '探索 Grande Champagne', icon: '⚫',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(GRANDE_ID)
  },
  'brandy-explore-bas': {
    id: 'brandy-explore-bas', title: 'Bas-Armagnac 朝聖',
    description: '探索 Bas-Armagnac', icon: '🍯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(BAS_ID)
  },
  'brandy-chalk-vs-sand': {
    id: 'brandy-chalk-vs-sand', title: '白堊與砂土',
    description: '探索 Grande Champagne 與 Bois Ordinaires，從白堊走到海岸砂土', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(GRANDE_ID) && s.exploredRegionsList.includes(BOISORD_ID)
  },
  'brandy-four-zones': {
    id: 'brandy-four-zones', title: '四大產區群行腳',
    description: 'Cognac、Armagnac、歐洲其他產區、新世界四個產區群各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['cognac', 'armagnac', 'europe', 'world'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'brandy-six-crus': {
    id: 'brandy-six-crus', title: 'Cognac 六大 Crus',
    description: '探索 Cognac 的城鎮與六個 Crus，共 7 個示意點', icon: '🥃',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => COGNAC_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'brandy-armagnac-europe': {
    id: 'brandy-armagnac-europe', title: 'Armagnac 與歐洲行腳',
    description: '探索 Armagnac 三區與歐洲其他產區，共 8 個示意點', icon: '🛶',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => [...ARMAGNAC_IDS, ...EUROPE_IDS].every(id => s.exploredRegionsList.includes(id))
  },
  'brandy-explore-all': {
    id: 'brandy-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 20 個白蘭地示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'brandy-perfect-score': {
    id: 'brandy-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'brandy-quiz-streak': {
    id: 'brandy-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'brandy-quiz-starter': {
    id: 'brandy-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'brandy-quiz-master': {
    id: 'brandy-quiz-master', title: '白蘭地達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'brandy-all-games': {
    id: 'brandy-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'brandy-diploma-ace': {
    id: 'brandy-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'brandy-night-owl': {
    id: 'brandy-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'brandy-early-bird': {
    id: 'brandy-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'brandy-streak-7': {
    id: 'brandy-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'brandy-streak-30': {
    id: 'brandy-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'brandy-first-note': {
    id: 'brandy-first-note', title: '第一則筆記',
    description: '記錄第一則白蘭地品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'brandy-tasting-notes': {
    id: 'brandy-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'brandy-compare-notes': {
    id: 'brandy-compare-notes', title: 'Cognac 與 Armagnac 對飲',
    description: '各記錄至少一則 Cognac 與 Armagnac 的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('bd_cognac') && (s.tastingTypesList || []).includes('bd_armagnac')
  },
  'brandy-law-master': {
    id: 'brandy-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'brandy-collector': {
    id: 'brandy-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'brandy-grand-master': {
    id: 'brandy-grand-master', title: '白蘭地大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const brandyAchievementState = reactive({
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
    exploredGroupsList:  [],   // 產區群（west／east／roussillon／vdn）
    exploredTiersList:   [],   // 保留欄位（白蘭地地圖不分層）
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
  unlockedAchievements: brandyAchievementState.unlockedAchievements,
  totalPoints: brandyAchievementState.totalPoints,
  newUnlocks: brandyAchievementState.newUnlocks,
  userStats: brandyAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const brandyAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '白蘭地新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Cabernet 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Carmenère 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '高低海拔鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '白蘭地專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '白蘭地大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const brandyAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(brandyAchievementDefinitions).length
    return total ? Math.round((brandyAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(brandyAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (brandyAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class BrandyAchievementManager {
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
      const raw = localStorage.getItem(`brandy-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = brandyAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`bd-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[brandy-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    brandyAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    brandyAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    brandyAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(brandyAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      brandyAchievementState.unlockedAchievements = data.unlocked || []
      brandyAchievementState.totalPoints = data.totalPoints || 0
      brandyAchievementState.userStats = { ...brandyAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[brandy-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(brandyAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    brandyAchievementState.unlockedAchievements,
        totalPoints: brandyAchievementState.totalPoints,
        userStats:   brandyAchievementState.userStats
      }))
    } catch (e) { console.warn('[brandy-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(brandyAchievementState.userStats, updates)
    brandyAchievementState.userStats.unlockedCount = brandyAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = brandyAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(brandyAchievementDefinitions).forEach(def => {
        if (brandyAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            brandyAchievementState.unlockedAchievements.push(def.id)
            brandyAchievementState.totalPoints += def.points
            stats.unlockedCount = brandyAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      brandyAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = brandyAchievementState.userStats
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
    const s = brandyAchievementState.userStats
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

  // id：示意點 id（BD-PT-*）；zone：west／east／roussillon／vdn；tier：aoc／sub
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = brandyAchievementState.userStats
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
    const s = brandyAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    brandyAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = brandyAchievementState.totalPoints
    const thresholds = brandyAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return brandyAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(brandyAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   brandyAchievementState.totalPoints,
      unlockedCount: brandyAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(brandyAchievementDefinitions).length,
      completionPct: brandyAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalBrandyAchievementManager = new BrandyAchievementManager()
