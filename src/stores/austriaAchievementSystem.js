// 奧地利葡萄酒成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function austriaAchievementsStorageKey(userId) {
  return `austria-wine-academy-achievements:${userId}`
}

// 課程規模（與 austriaLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以歐盟 PDO id（如 PDO-AT-A0205＝Wachau）記錄，與地圖 geojson 的 id 一致；
// Rosalia 與 Ruster Ausbruch 在歐盟資料集（2021 年前）尚無邊界，以示意點 id（AT-PT-*）計入。
// Vulkanland Steiermark 在資料集中的前身為 Süd-Oststeiermark（PDO-AT-A0226）。
export const DANUBE_IDS = ['PDO-AT-A0205', 'PDO-AT-A0208', 'PDO-AT-A0209', 'PDO-AT-A0210', 'PDO-AT-A0233']
export const BURGENLAND_IDS = ['PDO-AT-A0219', 'PDO-AT-A0216', 'PDO-AT-A0214', 'PDO-AT-A0215', 'AT-PT-ROSALIA', 'AT-PT-RUSTER-AUSBRUCH']
export const STEIERMARK_IDS = ['PDO-AT-A0228', 'PDO-AT-A0226', 'PDO-AT-A0234']
export const ALL_DAC_IDS = [
  ...DANUBE_IDS, 'PDO-AT-A0206', 'PDO-AT-A0217', 'PDO-AT-A0229', 'PDO-AT-A0235',
  ...BURGENLAND_IDS, ...STEIERMARK_IDS
]
const WACHAU_ID = 'PDO-AT-A0205'
const AUSBRUCH_ID = 'AT-PT-RUSTER-AUSBRUCH'

export const austriaAchievementDefinitions = {
  'austria-first-lesson': {
    id: 'austria-first-lesson', title: '奧地利初遇',
    description: '完成第一個奧地利葡萄酒課程', icon: '🍇',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'austria-level-1': {
    id: 'austria-level-1', title: '奧地利入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'austria-level-2': {
    id: 'austria-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂逐區課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'austria-level-3': {
    id: 'austria-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'austria-half-way': {
    id: 'austria-half-way', title: '多瑙中途',
    description: '完成 50% 以上的課程進度', icon: '⛵',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'austria-all-complete': {
    id: 'austria-all-complete', title: '奧地利全覽者',
    description: '完成奧地利葡萄酒全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'austria-explore-first': {
    id: 'austria-explore-first', title: '初探奧地利',
    description: '探索第一個奧地利 DAC', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'austria-explore-5': {
    id: 'austria-explore-5', title: '五區踏查',
    description: '探索 5 個以上奧地利 DAC', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 5
  },
  'austria-explore-wachau': {
    id: 'austria-explore-wachau', title: 'Wachau 朝聖',
    description: '探索 Wachau 產區', icon: '🏞️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(WACHAU_ID)
  },
  'austria-explore-ausbruch': {
    id: 'austria-explore-ausbruch', title: '甜酒朝聖',
    description: '探索 Ruster Ausbruch 示意點', icon: '🍯',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => s.exploredRegionsList.includes(AUSBRUCH_ID)
  },
  'austria-four-states': {
    id: 'austria-four-states', title: '四邦行腳',
    description: 'Niederösterreich、Burgenland、Wien、Steiermark 四個葡萄酒邦各探索至少一個 DAC', icon: '🔺',
    category: 'exploration', rarity: 'rare', points: 40,
    condition: s => ['noe', 'bgld', 'wien', 'stmk'].every(z => (s.exploredGroupsList || []).includes(z))
  },
  'austria-danube-pilgrim': {
    id: 'austria-danube-pilgrim', title: '多瑙河朝聖',
    description: '探索 Wachau、Kremstal、Kamptal、Traisental、Wagram 五個多瑙河區 DAC', icon: '🌊',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => DANUBE_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'austria-burgenland-pilgrim': {
    id: 'austria-burgenland-pilgrim', title: 'Burgenland 行腳',
    description: '探索 Burgenland 全部 6 個 DAC', icon: '🍷',
    category: 'exploration', rarity: 'epic', points: 120,
    condition: s => BURGENLAND_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'austria-styria-pilgrim': {
    id: 'austria-styria-pilgrim', title: 'Steiermark 行腳',
    description: '探索 Steiermark 全部 3 個 DAC', icon: '🌿',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => STEIERMARK_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'austria-explore-all-18': {
    id: 'austria-explore-all-18', title: '18 個 DAC 集滿',
    description: '探索全部 18 個 DAC', icon: '👑',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => ALL_DAC_IDS.every(id => s.exploredRegionsList.includes(id))
  },
  'austria-perfect-score': {
    id: 'austria-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'austria-quiz-streak': {
    id: 'austria-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'austria-quiz-starter': {
    id: 'austria-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'austria-quiz-master': {
    id: 'austria-quiz-master', title: '奧地利達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'austria-all-games': {
    id: 'austria-all-games', title: '全能挑戰者',
    description: '四款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 4
  },
  'austria-diploma-ace': {
    id: 'austria-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'austria-night-owl': {
    id: 'austria-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'austria-early-bird': {
    id: 'austria-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'austria-streak-7': {
    id: 'austria-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'austria-streak-30': {
    id: 'austria-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'austria-first-note': {
    id: 'austria-first-note', title: '第一則筆記',
    description: '記錄第一則奧地利品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'austria-tasting-notes': {
    id: 'austria-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'austria-compare-notes': {
    id: 'austria-compare-notes', title: '雙雄對飲',
    description: '各記錄至少一則 Grüner Veltliner 與 Riesling 的品飲筆記', icon: '⚖️',
    category: 'special', rarity: 'rare', points: 50,
    condition: s => (s.tastingTypesList || []).includes('at_gv') && (s.tastingTypesList || []).includes('at_riesling')
  },
  'austria-law-master': {
    id: 'austria-law-master', title: '法規掌握者',
    description: '完成 Level 2 並探索至少 6 個 DAC', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && s.exploredRegions >= 6
  },
  'austria-collector': {
    id: 'austria-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'austria-grand-master': {
    id: 'austria-grand-master', title: '奧地利大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const austriaAchievementState = reactive({
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
    exploredGroupsList:  [],   // 葡萄酒邦（noe／bgld／wien／stmk）
    exploredTiersList:   [],   // 保留欄位（奧地利地圖不分層）
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
  unlockedAchievements: austriaAchievementState.unlockedAchievements,
  totalPoints: austriaAchievementState.totalPoints,
  newUnlocks: austriaAchievementState.newUnlocks,
  userStats: austriaAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const austriaAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '奧地利新芽',          icon: '🌱' },
    { level: 2, min: 50,   max: 149,  title: 'Syrah 初探者',      icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Grenache 愛好者',   icon: '🍷' },
    { level: 4, min: 300,  max: 499,  title: '南北對照鑑賞者',    icon: '⛰️' },
    { level: 5, min: 500,  max: 799,  title: 'Cru 行家',          icon: '🏰' },
    { level: 6, min: 800,  max: 1199, title: '奧地利產區專家',      icon: '🏛️' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者', icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '奧地利葡萄酒大師', icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const austriaAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(austriaAchievementDefinitions).length
    return total ? Math.round((austriaAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(austriaAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (austriaAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class AustriaAchievementManager {
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
      const raw = localStorage.getItem(`austria-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = austriaAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`at-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[austria-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    austriaAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    austriaAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    austriaAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(austriaAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      austriaAchievementState.unlockedAchievements = data.unlocked || []
      austriaAchievementState.totalPoints = data.totalPoints || 0
      austriaAchievementState.userStats = { ...austriaAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[austria-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(austriaAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    austriaAchievementState.unlockedAchievements,
        totalPoints: austriaAchievementState.totalPoints,
        userStats:   austriaAchievementState.userStats
      }))
    } catch (e) { console.warn('[austria-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(austriaAchievementState.userStats, updates)
    austriaAchievementState.userStats.unlockedCount = austriaAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = austriaAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(austriaAchievementDefinitions).forEach(def => {
        if (austriaAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            austriaAchievementState.unlockedAchievements.push(def.id)
            austriaAchievementState.totalPoints += def.points
            stats.unlockedCount = austriaAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      austriaAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = austriaAchievementState.userStats
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
    const s = austriaAchievementState.userStats
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

  // id：geojson 的 PDO id（如 PDO-AT-A0205）或示意點 id；zone：noe／bgld／wien／stmk；tier：固定 dac
  recordRegionExplored(id, zone, tier) {
    if (!id) return []
    const s = austriaAchievementState.userStats
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
    const s = austriaAchievementState.userStats
    const have = s.tastingTypesList || []
    const merged = [...new Set([...have, ...types])]
    if ((s.tastingNotesCount || 0) >= count && merged.length === have.length) return []
    return this.updateStats({ tastingNotesCount: Math.max(s.tastingNotesCount || 0, count), tastingTypesList: merged })
  }

  clearNewUnlocks() {
    austriaAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = austriaAchievementState.totalPoints
    const thresholds = austriaAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return austriaAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(austriaAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   austriaAchievementState.totalPoints,
      unlockedCount: austriaAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(austriaAchievementDefinitions).length,
      completionPct: austriaAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalAustriaAchievementManager = new AustriaAchievementManager()
