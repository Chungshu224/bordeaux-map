// 西南產區葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function southwestAchievementsStorageKey(userId) {
  return `southwest-wine-academy-achievements:${userId}`
}

// 課程規模（與 southwestLearningStore 一致：L1 5 堂、L2 6 堂、L3 5 堂）
const LEVEL_LESSONS = { 1: 5, 2: 6, 3: 5 }
const TOTAL_LESSONS = 16

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（SW-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const DORDOGNE_IDS = ['BERGERAC', 'PECHARMANT', 'MONBAZILLAC', 'SAUSSIGNAC', 'MONTRAVEL', 'ROSETTE', 'DURAS'].map(x => `SW-PT-${x}`)
export const VALLEY_IDS = ['CAHORS', 'MARCILLAC', 'BUZET', 'MARMANDAIS', 'GAILLAC', 'FRONTON'].map(x => `SW-PT-${x}`)
export const GASCONY_IDS = ['MADIRAN', 'PACHERENC', 'SAINTMONT', 'TURSAN', 'GASCOGNE', 'BASARMAGNAC', 'TENAREZE', 'HAUTARMAGNAC'].map(x => `SW-PT-${x}`)
export const PYRENEES_IDS = ['JURANCON', 'BEARN', 'IROULEGUY'].map(x => `SW-PT-${x}`)
export const ALL_POINT_IDS = [...DORDOGNE_IDS, ...VALLEY_IDS, ...GASCONY_IDS, ...PYRENEES_IDS]
const CAHORS_ID = 'SW-PT-CAHORS'
const JURANCON_ID = 'SW-PT-JURANCON'
const MADIRAN_ID = 'SW-PT-MADIRAN'
const MONBAZILLAC_ID = 'SW-PT-MONBAZILLAC'

export const southwestAchievementDefinitions = {
  'southwest-first-lesson': {
    id: 'southwest-first-lesson', title: '西南產區初遇',
    description: '完成第一個西南產區葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'southwest-level-1': {
    id: 'southwest-level-1', title: '西南產區入門者',
    description: '完成 Level 1 全部 5 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'southwest-level-2': {
    id: 'southwest-level-2', title: '產區行家',
    description: '完成 Level 2 全部 6 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'southwest-level-3': {
    id: 'southwest-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 5 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'southwest-half-way': {
    id: 'southwest-half-way', title: '河谷中途',
    description: '完成 50% 以上的課程進度', icon: '🛶',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'southwest-all-complete': {
    id: 'southwest-all-complete', title: '西南產區全覽者',
    description: '完成西南產區葡萄酒全部 16 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 16
  },
  'southwest-explore-first': {
    id: 'southwest-explore-first', title: '初探西南產區',
    description: '探索第一個西南產區示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'southwest-explore-5': {
    id: 'southwest-explore-5', title: '五處踏查',
    description: '探索 5 個以上西南產區示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'southwest-explore-limoux': {
    id: 'southwest-explore-limoux', title: 'Cahors 朝聖',
    description: '探索 Cahors', icon: '⚫',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(CAHORS_ID)
  },
  'southwest-explore-banyuls': {
    id: 'southwest-explore-banyuls', title: 'Jurançon 朝聖',
    description: '探索 Jurançon', icon: '🍯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(JURANCON_ID)
  },
  'southwest-schist-vs-limestone': {
    id: 'southwest-schist-vs-limestone', title: '黑酒與黃金酒',
    description: '探索 Madiran 與 Monbazillac，走過 Tannat 的剛猛與貴腐的甜美', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(MADIRAN_ID) && s.exploredRegionsList.includes(MONBAZILLAC_ID)
  },
  'southwest-four-zones': {
    id: 'southwest-four-zones', title: '四大產區群行腳',
    description: 'Dordogne、河谷、Gascogne、比利牛斯山麓四個產區群各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['dordogne', 'valleys', 'gascony', 'pyrenees'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'southwest-gascony-pilgrim': {
    id: 'southwest-gascony-pilgrim', title: 'Gascogne 行腳',
    description: '探索 Gascogne（Adour 流域）的全部 8 個示意點', icon: '🥃',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => GASCONY_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'southwest-river-pilgrim': {
    id: 'southwest-river-pilgrim', title: '河谷行腳',
    description: '探索 Dordogne 與 Lot・Garonne・Tarn 河谷的全部 13 個示意點', icon: '🛶',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => [...DORDOGNE_IDS, ...VALLEY_IDS].every(id => s.exploredRegionsList.includes(id))
  },
  'southwest-explore-all': {
    id: 'southwest-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 24 個西南產區示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'southwest-perfect-score': {
    id: 'southwest-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'southwest-quiz-streak': {
    id: 'southwest-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'southwest-quiz-starter': {
    id: 'southwest-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'southwest-quiz-master': {
    id: 'southwest-quiz-master', title: '西南產區達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'southwest-all-games': {
    id: 'southwest-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'southwest-diploma-ace': {
    id: 'southwest-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'southwest-night-owl': {
    id: 'southwest-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'southwest-early-bird': {
    id: 'southwest-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'southwest-streak-7': {
    id: 'southwest-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'southwest-streak-30': {
    id: 'southwest-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'southwest-first-note': {
    id: 'southwest-first-note', title: '第一則筆記',
    description: '記錄第一則西南產區品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'southwest-tasting-notes': {
    id: 'southwest-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'southwest-compare-notes': {
    id: 'southwest-compare-notes', title: '黑酒對飲',
    description: '各記錄至少一則 Cahors（Malbec）與 Tannat 紅酒的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('sw_cahors') && (s.tastingTypesList || []).includes('sw_tannat')
  },
  'southwest-law-master': {
    id: 'southwest-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'southwest-collector': {
    id: 'southwest-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'southwest-grand-master': {
    id: 'southwest-grand-master', title: '西南產區大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const southwestAchievementState = reactive({
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
    exploredTiersList:   [],   // 保留欄位（西南產區地圖不分層）
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
  unlockedAchievements: southwestAchievementState.unlockedAchievements,
  totalPoints: southwestAchievementState.totalPoints,
  newUnlocks: southwestAchievementState.newUnlocks,
  userStats: southwestAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const southwestAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '西南產區新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Cabernet 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Carmenère 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '高低海拔鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '西南產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '西南產區葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const southwestAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(southwestAchievementDefinitions).length
    return total ? Math.round((southwestAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(southwestAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (southwestAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class SouthwestAchievementManager {
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
      const raw = localStorage.getItem(`southwest-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = southwestAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`sw-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[southwest-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    southwestAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    southwestAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    southwestAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(southwestAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      southwestAchievementState.unlockedAchievements = data.unlocked || []
      southwestAchievementState.totalPoints = data.totalPoints || 0
      southwestAchievementState.userStats = { ...southwestAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[southwest-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(southwestAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    southwestAchievementState.unlockedAchievements,
        totalPoints: southwestAchievementState.totalPoints,
        userStats:   southwestAchievementState.userStats
      }))
    } catch (e) { console.warn('[southwest-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(southwestAchievementState.userStats, updates)
    southwestAchievementState.userStats.unlockedCount = southwestAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = southwestAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(southwestAchievementDefinitions).forEach(def => {
        if (southwestAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            southwestAchievementState.unlockedAchievements.push(def.id)
            southwestAchievementState.totalPoints += def.points
            stats.unlockedCount = southwestAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      southwestAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = southwestAchievementState.userStats
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
    const s = southwestAchievementState.userStats
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

  // id：示意點 id（SW-PT-*）；zone：west／east／roussillon／vdn；tier：aoc／sub
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = southwestAchievementState.userStats
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
    const s = southwestAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    southwestAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = southwestAchievementState.totalPoints
    const thresholds = southwestAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return southwestAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(southwestAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   southwestAchievementState.totalPoints,
      unlockedCount: southwestAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(southwestAchievementDefinitions).length,
      completionPct: southwestAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalSouthwestAchievementManager = new SouthwestAchievementManager()
