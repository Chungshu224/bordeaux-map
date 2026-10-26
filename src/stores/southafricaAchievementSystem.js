// 南非葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function southafricaAchievementsStorageKey(userId) {
  return `southafrica-wine-academy-achievements:${userId}`
}

// 課程規模（與 southafricaLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（ZA-PT-*）記錄，與地圖 pointRef.js 一致；沒有 Ward 範圍資料，全部為示意點。
export const COASTAL_IDS = ['STELLENBOSCH', 'PAARL', 'FRANSCHHOEK', 'SWARTLAND', 'TULBAGH', 'WELLINGTON', 'DARLING', 'CONSTANTIA', 'DURBANVILLE'].map(x => `ZA-PT-${x}`)
export const SOUTHCOAST_IDS = ['WALKER-BAY', 'HEMEL', 'ELGIN', 'CAPE-AGULHAS', 'ELIM', 'OVERBERG'].map(x => `ZA-PT-${x}`)
export const BREEDE_IDS = ['ROBERTSON', 'WORCESTER', 'BREEDEKLOOF'].map(x => `ZA-PT-${x}`)
export const KLEINKAROO_IDS = ['CALITZDORP', 'MONTAGU'].map(x => `ZA-PT-${x}`)
export const OLIFANTS_IDS = ['CITRUSDAL', 'VREDENDAL', 'LUTZVILLE'].map(x => `ZA-PT-${x}`)
export const ALL_POINT_IDS = [...COASTAL_IDS, ...SOUTHCOAST_IDS, ...BREEDE_IDS, ...KLEINKAROO_IDS, ...OLIFANTS_IDS]
const CONSTANTIA_ID = 'ZA-PT-CONSTANTIA'
const SWARTLAND_ID = 'ZA-PT-SWARTLAND'
const HEMEL_ID = 'ZA-PT-HEMEL'

export const southafricaAchievementDefinitions = {
  'southafrica-first-lesson': {
    id: 'southafrica-first-lesson', title: '南非初遇',
    description: '完成第一個南非葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'southafrica-level-1': {
    id: 'southafrica-level-1', title: '南非入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'southafrica-level-2': {
    id: 'southafrica-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'southafrica-level-3': {
    id: 'southafrica-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'southafrica-half-way': {
    id: 'southafrica-half-way', title: '好望角中途',
    description: '完成 50% 以上的課程進度', icon: '⛵',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'southafrica-all-complete': {
    id: 'southafrica-all-complete', title: '南非全覽者',
    description: '完成南非葡萄酒全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'southafrica-explore-first': {
    id: 'southafrica-explore-first', title: '初探南非',
    description: '探索第一個南非產區示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'southafrica-explore-5': {
    id: 'southafrica-explore-5', title: '五處踏查',
    description: '探索 5 個以上南非產區示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'southafrica-explore-constantia': {
    id: 'southafrica-explore-constantia', title: 'Constantia 朝聖',
    description: '探索 Constantia', icon: '🍯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(CONSTANTIA_ID)
  },
  'southafrica-explore-hemel': {
    id: 'southafrica-explore-hemel', title: 'Hemel-en-Aarde 朝聖',
    description: '探索 Hemel-en-Aarde Valley', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(HEMEL_ID)
  },
  'southafrica-cape-journey': {
    id: 'southafrica-cape-journey', title: '從 Constantia 到 Swartland',
    description: '探索 Constantia 與 Swartland，走過開普的兩端風格', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(CONSTANTIA_ID) && s.exploredRegionsList.includes(SWARTLAND_ID)
  },
  'southafrica-five-regions': {
    id: 'southafrica-five-regions', title: '五大 Region 行腳',
    description: 'Coastal、Cape South Coast、Breede River Valley、Klein Karoo、Olifants River 各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['coastal', 'southcoast', 'breede', 'kleinkaroo', 'olifants'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'southafrica-coastal-pilgrim': {
    id: 'southafrica-coastal-pilgrim', title: 'Coastal 行腳',
    description: '探索 Coastal Region 的全部 9 個示意點', icon: '🏔️',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => COASTAL_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'southafrica-southcoast-pilgrim': {
    id: 'southafrica-southcoast-pilgrim', title: '涼爽海岸行腳',
    description: '探索 Cape South Coast 的全部 6 個示意點', icon: '🌬️',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => SOUTHCOAST_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'southafrica-explore-all': {
    id: 'southafrica-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 23 個南非示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'southafrica-perfect-score': {
    id: 'southafrica-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'southafrica-quiz-streak': {
    id: 'southafrica-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'southafrica-quiz-starter': {
    id: 'southafrica-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'southafrica-quiz-master': {
    id: 'southafrica-quiz-master', title: '南非達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'southafrica-all-games': {
    id: 'southafrica-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'southafrica-diploma-ace': {
    id: 'southafrica-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'southafrica-night-owl': {
    id: 'southafrica-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'southafrica-early-bird': {
    id: 'southafrica-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'southafrica-streak-7': {
    id: 'southafrica-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'southafrica-streak-30': {
    id: 'southafrica-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'southafrica-first-note': {
    id: 'southafrica-first-note', title: '第一則筆記',
    description: '記錄第一則南非品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'southafrica-tasting-notes': {
    id: 'southafrica-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'southafrica-compare-notes': {
    id: 'southafrica-compare-notes', title: '雙星對飲',
    description: '各記錄至少一則 Chenin Blanc 與 Pinotage 的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('za_chenin') && (s.tastingTypesList || []).includes('za_pinotage')
  },
  'southafrica-law-master': {
    id: 'southafrica-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'southafrica-collector': {
    id: 'southafrica-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'southafrica-grand-master': {
    id: 'southafrica-grand-master', title: '南非大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const southafricaAchievementState = reactive({
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
    exploredGroupsList:  [],   // WO Region（coastal／southcoast／breede／kleinkaroo／olifants）
    exploredTiersList:   [],   // 保留欄位（南非地圖不分層）
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
  unlockedAchievements: southafricaAchievementState.unlockedAchievements,
  totalPoints: southafricaAchievementState.totalPoints,
  newUnlocks: southafricaAchievementState.newUnlocks,
  userStats: southafricaAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const southafricaAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '南非新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Syrah 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Grenache 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '南北對照鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: 'Cru 行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '南非產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '南非葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const southafricaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(southafricaAchievementDefinitions).length
    return total ? Math.round((southafricaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(southafricaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (southafricaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class SouthAfricaAchievementManager {
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
      const raw = localStorage.getItem(`southafrica-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = southafricaAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`za-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[southafrica-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    southafricaAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    southafricaAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    southafricaAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(southafricaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      southafricaAchievementState.unlockedAchievements = data.unlocked || []
      southafricaAchievementState.totalPoints = data.totalPoints || 0
      southafricaAchievementState.userStats = { ...southafricaAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[southafrica-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(southafricaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    southafricaAchievementState.unlockedAchievements,
        totalPoints: southafricaAchievementState.totalPoints,
        userStats:   southafricaAchievementState.userStats
      }))
    } catch (e) { console.warn('[southafrica-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(southafricaAchievementState.userStats, updates)
    southafricaAchievementState.userStats.unlockedCount = southafricaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = southafricaAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(southafricaAchievementDefinitions).forEach(def => {
        if (southafricaAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            southafricaAchievementState.unlockedAchievements.push(def.id)
            southafricaAchievementState.totalPoints += def.points
            stats.unlockedCount = southafricaAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      southafricaAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = southafricaAchievementState.userStats
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
    const s = southafricaAchievementState.userStats
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

  // id：示意點 id（ZA-PT-*）；zone：coastal／southcoast／breede／kleinkaroo／olifants；tier：district 或 ward
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = southafricaAchievementState.userStats
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
    const s = southafricaAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    southafricaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = southafricaAchievementState.totalPoints
    const thresholds = southafricaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return southafricaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(southafricaAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   southafricaAchievementState.totalPoints,
      unlockedCount: southafricaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(southafricaAchievementDefinitions).length,
      completionPct: southafricaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalSouthAfricaAchievementManager = new SouthAfricaAchievementManager()
