// 朗格多克—魯西永葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function languedocAchievementsStorageKey(userId) {
  return `languedoc-wine-academy-achievements:${userId}`
}

// 課程規模（與 languedocLearningStore 一致：L1 5 堂、L2 6 堂、L3 5 堂）
const LEVEL_LESSONS = { 1: 5, 2: 6, 3: 5 }
const TOTAL_LESSONS = 16

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以示意點 id（LG-PT-*）記錄，與地圖 pointRef.js 一致；沒有官方邊界資料，全部為示意點。
export const WEST_IDS = ['CORBIERES', 'BOUTENAC', 'FITOU', 'MINERVOIS', 'LIVINIERE', 'LIMOUX', 'CABARDES'].map(x => `LG-PT-${x}`)
export const EAST_IDS = ['LACLAPE', 'STCHINIAN', 'FAUGERES', 'PEZENAS', 'LARZAC', 'PICSTLOUP', 'PICPOUL', 'FRONTIGNAN'].map(x => `LG-PT-${x}`)
export const ROUSSILLON_IDS = ['COTESROUSS', 'VILLAGES', 'ASPRES', 'COLLIOURE'].map(x => `LG-PT-${x}`)
export const VDN_IDS = ['BANYULS', 'MAURY', 'RIVESALTES'].map(x => `LG-PT-${x}`)
export const ALL_POINT_IDS = [...WEST_IDS, ...EAST_IDS, ...ROUSSILLON_IDS, ...VDN_IDS]
const LIMOUX_ID = 'LG-PT-LIMOUX'
const BANYULS_ID = 'LG-PT-BANYULS'
const FAUGERES_ID = 'LG-PT-FAUGERES'
const LACLAPE_ID = 'LG-PT-LACLAPE'

export const languedocAchievementDefinitions = {
  'languedoc-first-lesson': {
    id: 'languedoc-first-lesson', title: '朗格多克—魯西永初遇',
    description: '完成第一個朗格多克—魯西永葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'languedoc-level-1': {
    id: 'languedoc-level-1', title: '朗格多克—魯西永入門者',
    description: '完成 Level 1 全部 5 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'languedoc-level-2': {
    id: 'languedoc-level-2', title: '產區行家',
    description: '完成 Level 2 全部 6 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'languedoc-level-3': {
    id: 'languedoc-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 5 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'languedoc-half-way': {
    id: 'languedoc-half-way', title: '地中海中途',
    description: '完成 50% 以上的課程進度', icon: '⛵',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'languedoc-all-complete': {
    id: 'languedoc-all-complete', title: '朗格多克—魯西永全覽者',
    description: '完成朗格多克—魯西永葡萄酒全部 16 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 16
  },
  'languedoc-explore-first': {
    id: 'languedoc-explore-first', title: '初探朗格多克—魯西永',
    description: '探索第一個朗格多克—魯西永產區示意點', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'languedoc-explore-5': {
    id: 'languedoc-explore-5', title: '五處踏查',
    description: '探索 5 個以上朗格多克—魯西永產區示意點', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'languedoc-explore-limoux': {
    id: 'languedoc-explore-limoux', title: 'Limoux 朝聖',
    description: '探索 Limoux', icon: '🫧',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(LIMOUX_ID)
  },
  'languedoc-explore-banyuls': {
    id: 'languedoc-explore-banyuls', title: 'Banyuls 朝聖',
    description: '探索 Banyuls', icon: '🌊',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(BANYULS_ID)
  },
  'languedoc-schist-vs-limestone': {
    id: 'languedoc-schist-vs-limestone', title: '片岩與石灰岩',
    description: '探索 Faugères 與 La Clape，走過片岩內陸與石灰岩海岸的兩端', icon: '🧳',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => s.exploredRegionsList.includes(FAUGERES_ID) && s.exploredRegionsList.includes(LACLAPE_ID)
  },
  'languedoc-four-zones': {
    id: 'languedoc-four-zones', title: '四大產區群行腳',
    description: '西部、中東部、魯西永乾型酒、魯西永 VDN 各探索至少一個示意點', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['west', 'east', 'roussillon', 'vdn'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'languedoc-east-pilgrim': {
    id: 'languedoc-east-pilgrim', title: '中東部行腳',
    description: '探索中東部（Hérault 與沿海）的全部 8 個示意點', icon: '🍷',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => EAST_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'languedoc-roussillon-pilgrim': {
    id: 'languedoc-roussillon-pilgrim', title: '魯西永行腳',
    description: '探索魯西永乾型酒與 VDN 的全部 7 個示意點', icon: '🌅',
    category: 'exploration', rarity: 'epic', points: 80,
    condition: s => [...ROUSSILLON_IDS, ...VDN_IDS].every(id => s.exploredRegionsList.includes(id))
  },
  'languedoc-explore-all': {
    id: 'languedoc-explore-all', title: '示意點集滿',
    description: '探索地圖上全部 22 個朗格多克—魯西永示意點', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_POINT_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'languedoc-perfect-score': {
    id: 'languedoc-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'languedoc-quiz-streak': {
    id: 'languedoc-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'languedoc-quiz-starter': {
    id: 'languedoc-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'languedoc-quiz-master': {
    id: 'languedoc-quiz-master', title: '朗格多克—魯西永達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'languedoc-all-games': {
    id: 'languedoc-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'languedoc-diploma-ace': {
    id: 'languedoc-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'languedoc-night-owl': {
    id: 'languedoc-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'languedoc-early-bird': {
    id: 'languedoc-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'languedoc-streak-7': {
    id: 'languedoc-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'languedoc-streak-30': {
    id: 'languedoc-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'languedoc-first-note': {
    id: 'languedoc-first-note', title: '第一則筆記',
    description: '記錄第一則朗格多克—魯西永品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'languedoc-tasting-notes': {
    id: 'languedoc-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'languedoc-compare-notes': {
    id: 'languedoc-compare-notes', title: 'Carignan 與 Syrah 對飲',
    description: '各記錄至少一則 Carignan 為主與 Syrah 主導的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('lg_carignan') && (s.tastingTypesList || []).includes('lg_syrah')
  },
  'languedoc-law-master': {
    id: 'languedoc-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個示意點', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'languedoc-collector': {
    id: 'languedoc-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'languedoc-grand-master': {
    id: 'languedoc-grand-master', title: '朗格多克—魯西永大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const languedocAchievementState = reactive({
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
    exploredTiersList:   [],   // 保留欄位（朗格多克—魯西永地圖不分層）
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
  unlockedAchievements: languedocAchievementState.unlockedAchievements,
  totalPoints: languedocAchievementState.totalPoints,
  newUnlocks: languedocAchievementState.newUnlocks,
  userStats: languedocAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const languedocAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '朗格多克—魯西永新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Cabernet 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Carmenère 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '高低海拔鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: '次產區行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '朗格多克—魯西永產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '朗格多克—魯西永葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const languedocAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(languedocAchievementDefinitions).length
    return total ? Math.round((languedocAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(languedocAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (languedocAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class LanguedocAchievementManager {
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
      const raw = localStorage.getItem(`languedoc-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = languedocAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`lg-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[languedoc-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    languedocAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    languedocAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    languedocAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(languedocAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      languedocAchievementState.unlockedAchievements = data.unlocked || []
      languedocAchievementState.totalPoints = data.totalPoints || 0
      languedocAchievementState.userStats = { ...languedocAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[languedoc-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(languedocAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    languedocAchievementState.unlockedAchievements,
        totalPoints: languedocAchievementState.totalPoints,
        userStats:   languedocAchievementState.userStats
      }))
    } catch (e) { console.warn('[languedoc-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(languedocAchievementState.userStats, updates)
    languedocAchievementState.userStats.unlockedCount = languedocAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = languedocAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(languedocAchievementDefinitions).forEach(def => {
        if (languedocAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            languedocAchievementState.unlockedAchievements.push(def.id)
            languedocAchievementState.totalPoints += def.points
            stats.unlockedCount = languedocAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      languedocAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = languedocAchievementState.userStats
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
    const s = languedocAchievementState.userStats
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

  // id：示意點 id（LG-PT-*）；zone：west／east／roussillon／vdn；tier：aoc／sub
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = languedocAchievementState.userStats
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
    const s = languedocAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    languedocAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = languedocAchievementState.totalPoints
    const thresholds = languedocAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return languedocAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(languedocAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   languedocAchievementState.totalPoints,
      unlockedCount: languedocAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(languedocAchievementDefinitions).length,
      completionPct: languedocAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalLanguedocAchievementManager = new LanguedocAchievementManager()
