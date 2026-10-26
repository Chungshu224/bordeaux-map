// 香檳成就系統
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'

// localStorage 依帳號 id 區分，避免同一瀏覽器不同帳號互相看到彼此的成就紀錄
function champagneAchievementsStorageKey(userId) {
  return `champagne-wine-academy-achievements:${userId}`
}

// 課程規模（與 champagneLearningStore 一致）
const LEVEL_LESSONS = { 1: 6, 2: 8, 3: 7 }
const TOTAL_LESSONS = 21

// ── 成就定義 ─────────────────────────────────────────────────
// 探索類以村莊的 INSEE 代碼記錄（與地圖 geojson 的 id 一致）；Grand／Premier Cru 另以「規格村名 slug」記錄，
// 因為 Aÿ-Champagne、Val de Livre、Blancs-Coteaux 等合併新鎮在同一塊多邊形內含有多個分級村莊。
export const GRAND_CRU_SLUGS = [
  'ambonnay', 'beaumont-sur-vesle', 'bouzy', 'louvois', 'mailly-champagne', 'puisieulx', 'sillery', 'verzenay', 'verzy',
  'ay', 'tours-sur-marne',
  'avize', 'chouilly', 'cramant', 'le-mesnil-sur-oger', 'oger', 'oiry'
]
const GC_BY_SUB = { montagne: 9, vallee: 2, blancs: 6 }
const hasGc = (s, slug) => (s.exploredGrandCruList || []).includes(slug)
export const champagneAchievementDefinitions = {
  'champagne-first-lesson': {
    id: 'champagne-first-lesson', title: '第一杯氣泡',
    description: '完成第一個香檳課程', icon: '🥂',
    category: 'progress', rarity: 'common', points: 10,
    condition: s => s.completedLessons >= 1
  },
  'champagne-level-1': {
    id: 'champagne-level-1', title: '香檳入門者',
    description: '完成 Level 1 全部 6 堂基礎課程', icon: '🥉',
    category: 'progress', rarity: 'uncommon', points: 50,
    condition: s => s.level1Completed
  },
  'champagne-level-2': {
    id: 'champagne-level-2', title: '產區行家',
    description: '完成 Level 2 全部 8 堂產區與釀造課程', icon: '🥈',
    category: 'progress', rarity: 'rare', points: 100,
    condition: s => s.level2Completed
  },
  'champagne-level-3': {
    id: 'champagne-level-3', title: 'Diploma／MW 精修者',
    description: '完成 Level 3 全部 7 堂精修課程', icon: '🥇',
    category: 'progress', rarity: 'epic', points: 200,
    condition: s => s.level3Completed
  },
  'champagne-half-way': {
    id: 'champagne-half-way', title: '酒渣陳年中',
    description: '完成 50% 以上的課程進度', icon: '⏳',
    category: 'progress', rarity: 'uncommon', points: 30,
    condition: s => s.totalProgress >= 50
  },
  'champagne-all-complete': {
    id: 'champagne-all-complete', title: '香檳全覽者',
    description: '完成香檳全部 21 堂課程', icon: '🏆',
    category: 'progress', rarity: 'legendary', points: 400,
    condition: s => s.completedLessons >= 21
  },
  'champagne-explore-first': {
    id: 'champagne-explore-first', title: '初探村莊',
    description: '探索第一個香檳村莊', icon: '🗺️',
    category: 'exploration', rarity: 'common', points: 5,
    condition: s => s.exploredRegions >= 1
  },
  'champagne-explore-10': {
    id: 'champagne-explore-10', title: '十村踏查',
    description: '探索 10 個以上村莊', icon: '🧭',
    category: 'exploration', rarity: 'uncommon', points: 30,
    condition: s => s.exploredRegions >= 10
  },
  'champagne-explore-50': {
    id: 'champagne-explore-50', title: '五十村全覽',
    description: '探索 50 個以上村莊', icon: '🗺️',
    category: 'exploration', rarity: 'epic', points: 100,
    condition: s => s.exploredRegions >= 50
  },
  'champagne-explore-ay': {
    id: 'champagne-explore-ay', title: '香檳之心',
    description: '探索 Aÿ（馬恩河谷的 Grand Cru）', icon: '🍇',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => hasGc(s, 'ay')
  },
  'champagne-explore-cramant': {
    id: 'champagne-explore-cramant', title: '白丘朝聖',
    description: '探索 Cramant（白丘的 Grand Cru）', icon: '⚪',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => hasGc(s, 'cramant')
  },
  'champagne-explore-verzenay': {
    id: 'champagne-explore-verzenay', title: '漢斯山觀景',
    description: '探索 Verzenay（漢斯山的 Grand Cru）', icon: '🌬️',
    category: 'exploration', rarity: 'uncommon', points: 20,
    condition: s => hasGc(s, 'verzenay')
  },
  'champagne-explore-premier': {
    id: 'champagne-explore-premier', title: 'Premier Cru 探訪者',
    description: '探索 10 個以上 Premier Cru 村莊', icon: '🥈',
    category: 'exploration', rarity: 'rare', points: 50,
    condition: s => (s.exploredPremierCruList || []).length >= 10
  },
  'champagne-explore-4regions': {
    id: 'champagne-explore-4regions', title: '四大產區踏查',
    description: '探索漢斯山、馬恩河谷、白丘、巴爾丘各至少一個村莊', icon: '🌍',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => ['montagne', 'vallee', 'blancs', 'bar'].every(k => (s.exploredGroupsList || []).includes(k))
  },
  'champagne-trio-terroirs': {
    id: 'champagne-trio-terroirs', title: '三大風土 Grand Cru',
    description: '在漢斯山、馬恩河谷、白丘各探索至少一個 Grand Cru', icon: '🔱',
    category: 'exploration', rarity: 'rare', points: 60,
    condition: s => ['verzenay', 'ambonnay', 'bouzy', 'beaumont-sur-vesle', 'louvois', 'mailly-champagne', 'puisieulx', 'sillery', 'verzy'].some(k => hasGc(s, k))
      && ['ay', 'tours-sur-marne'].some(k => hasGc(s, k))
      && ['avize', 'chouilly', 'cramant', 'le-mesnil-sur-oger', 'oger', 'oiry'].some(k => hasGc(s, k))
  },
  'champagne-seventeen-temples': {
    id: 'champagne-seventeen-temples', title: '十七座聖殿',
    description: '探索全部 17 個 Grand Cru 村莊（漢斯山 9、馬恩河谷 2、白丘 6）', icon: '🏛️',
    category: 'exploration', rarity: 'legendary', points: 300,
    condition: s => GRAND_CRU_SLUGS.every(k => hasGc(s, k))
  },
  'champagne-perfect-score': {
    id: 'champagne-perfect-score', title: '完美一擊',
    description: '任意測驗或遊戲獲得滿分', icon: '💯',
    category: 'quiz', rarity: 'rare', points: 25,
    condition: s => s.perfectScores >= 1
  },
  'champagne-quiz-streak': {
    id: 'champagne-quiz-streak', title: '連戰連勝',
    description: '連續 3 次測驗或遊戲正確率 90% 以上', icon: '🔥',
    category: 'quiz', rarity: 'epic', points: 80,
    condition: s => s.bestStreak >= 3
  },
  'champagne-quiz-starter': {
    id: 'champagne-quiz-starter', title: '初試啼聲',
    description: '累計完成 5 次以上測驗或遊戲', icon: '🏅',
    category: 'quiz', rarity: 'common', points: 20,
    condition: s => s.totalQuizzes >= 5
  },
  'champagne-quiz-master': {
    id: 'champagne-quiz-master', title: '香檳達人',
    description: '累計完成 15 次以上測驗或遊戲', icon: '🧠',
    category: 'quiz', rarity: 'uncommon', points: 40,
    condition: s => s.totalQuizzes >= 15
  },
  'champagne-all-games': {
    id: 'champagne-all-games', title: '全能挑戰者',
    description: '五款互動遊戲各玩過至少一次', icon: '🎮',
    category: 'quiz', rarity: 'rare', points: 50,
    condition: s => s.gameTypesPlayed.length >= 5
  },
  'champagne-diploma-ace': {
    id: 'champagne-diploma-ace', title: 'Diploma 王牌',
    description: '完成 Level 3 且最佳正確率達 80% 以上', icon: '🎯',
    category: 'quiz', rarity: 'rare', points: 60,
    condition: s => s.bestQuizScore >= 80 && s.level3Completed
  },
  'champagne-night-owl': {
    id: 'champagne-night-owl', title: '深夜研究員',
    description: '深夜 23:00–05:00 學習 5 次', icon: '🦉',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.nightTimeStudy >= 5
  },
  'champagne-early-bird': {
    id: 'champagne-early-bird', title: '晨間品酒師',
    description: '清晨 05:00–08:00 學習 5 次', icon: '🐦',
    category: 'time', rarity: 'uncommon', points: 15,
    condition: s => s.earlyMorningStudy >= 5
  },
  'champagne-streak-7': {
    id: 'champagne-streak-7', title: '一週不停',
    description: '連續 7 天學習', icon: '📅',
    category: 'time', rarity: 'rare', points: 50,
    condition: s => s.consecutiveDays >= 7
  },
  'champagne-streak-30': {
    id: 'champagne-streak-30', title: '月度達人',
    description: '連續 30 天學習', icon: '🗓️',
    category: 'time', rarity: 'epic', points: 150,
    condition: s => s.consecutiveDays >= 30
  },
  'champagne-first-note': {
    id: 'champagne-first-note', title: '第一則筆記',
    description: '記錄第一則香檳品飲筆記', icon: '📝',
    category: 'special', rarity: 'common', points: 10,
    condition: s => s.tastingNotesCount >= 1
  },
  'champagne-tasting-notes': {
    id: 'champagne-tasting-notes', title: '品飲筆記達人',
    description: '記錄 5 則以上品飲筆記', icon: '📔',
    category: 'special', rarity: 'uncommon', points: 30,
    condition: s => s.tastingNotesCount >= 5
  },
  'champagne-terroir-and-method': {
    id: 'champagne-terroir-and-method', title: '風土與釀造並重',
    description: '完成 Level 2 並探索全部 4 個產區', icon: '⚖️',
    category: 'special', rarity: 'epic', points: 100,
    condition: s => s.level2Completed && ['montagne', 'vallee', 'blancs', 'bar'].every(k => (s.exploredGroupsList || []).includes(k))
  },
  'champagne-collector': {
    id: 'champagne-collector', title: '成就收藏家',
    description: '解鎖 10 個以上成就', icon: '💎',
    category: 'special', rarity: 'rare', points: 60,
    condition: s => s.unlockedCount >= 10
  },
  'champagne-grand-master': {
    id: 'champagne-grand-master', title: '香檳大師',
    description: '解鎖 20 個以上成就', icon: '🔱',
    category: 'special', rarity: 'legendary', points: 300,
    condition: s => s.unlockedCount >= 20
  }
}

// ── 狀態 ───────────────────────────────────────────────────
export const champagneAchievementState = reactive({
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
    exploredGrandCruList: [],
    exploredPremierCruList: [],
    exploredGradedList:  [],
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
  unlockedAchievements: champagneAchievementState.unlockedAchievements,
  totalPoints: champagneAchievementState.totalPoints,
  newUnlocks: champagneAchievementState.newUnlocks,
  userStats: champagneAchievementState.userStats
}))

// ── 配置 ───────────────────────────────────────────────────
export const champagneAchievementConfig = {
  rarityColors: {
    common: '#9E9E9E', uncommon: '#4CAF50', rare: '#2196F3', epic: '#9C27B0', legendary: '#FF9800'
  },
  rarityNames: {
    common: '普通', uncommon: '優良', rare: '稀有', epic: '史詩', legendary: '傳說'
  },
  levelThresholds: [
    { level: 1, min: 0,    max: 49,   title: '氣泡新芽',            icon: '🫧' },
    { level: 2, min: 50,   max: 149,  title: 'Pinot Noir 初探者',   icon: '🍇' },
    { level: 3, min: 150,  max: 299,  title: 'Chardonnay 愛好者',   icon: '🥂' },
    { level: 4, min: 300,  max: 499,  title: '白堊風土鑑賞者',      icon: '🪨' },
    { level: 5, min: 500,  max: 799,  title: 'Cru 行家',            icon: '🏘️' },
    { level: 6, min: 800,  max: 1199, title: '香檳產區專家',        icon: '🍾' },
    { level: 7, min: 1200, max: 1999, title: 'Diploma／MW 衝刺者',  icon: '🏆' },
    { level: 8, min: 2000, max: Infinity, title: '香檳大師',        icon: '👑' }
  ]
}

// ── Computed ──────────────────────────────────────────────────
export const champagneAchievementComputed = {
  completionPercentage: computed(() => {
    const total = Object.keys(champagneAchievementDefinitions).length
    return total ? Math.round((champagneAchievementState.unlockedAchievements.length / total) * 100) : 0
  }),
  rarityStats: computed(() => {
    const stats = {}
    Object.values(champagneAchievementDefinitions).forEach(a => {
      if (!stats[a.rarity]) stats[a.rarity] = { total: 0, unlocked: 0 }
      stats[a.rarity].total++
      if (champagneAchievementState.unlockedAchievements.includes(a.id)) stats[a.rarity].unlocked++
    })
    return stats
  })
}

// ── Manager ──────────────────────────────────────────────────
export class ChampagneAchievementManager {
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
      const raw = localStorage.getItem(`champagne-wine-academy-progress:${userId}`)
      if (!raw) return
      const data = JSON.parse(raw)
      const completed = data.completedLessons || []
      if (!completed.length) return

      const s = champagneAchievementState.userStats
      const count = n => completed.filter(id => id.startsWith(`ch-l${n}-`)).length
      s.completedLessons = Math.max(s.completedLessons || 0, completed.length)
      s.level1Completed = s.level1Completed || count(1) >= LEVEL_LESSONS[1]
      s.level2Completed = s.level2Completed || count(2) >= LEVEL_LESSONS[2]
      s.level3Completed = s.level3Completed || count(3) >= LEVEL_LESSONS[3]
      s.totalProgress = Math.max(s.totalProgress || 0, Math.round(completed.length / TOTAL_LESSONS * 100))
      this._save()
      this._checkAll()
    } catch (e) { console.warn('[champagne-ach] syncProgress error', e) }
  }

  _load() {
    const userId = authState.user?.id
    champagneAchievementState.unlockedAchievements = [...DEFAULT_SNAPSHOT.unlockedAchievements]
    champagneAchievementState.totalPoints = DEFAULT_SNAPSHOT.totalPoints
    champagneAchievementState.userStats = JSON.parse(JSON.stringify(DEFAULT_SNAPSHOT.userStats))
    if (!userId) return
    try {
      const raw = localStorage.getItem(champagneAchievementsStorageKey(userId))
      if (!raw) return
      const data = JSON.parse(raw)
      champagneAchievementState.unlockedAchievements = data.unlocked || []
      champagneAchievementState.totalPoints = data.totalPoints || 0
      champagneAchievementState.userStats = { ...champagneAchievementState.userStats, ...(data.userStats || {}) }
    } catch (e) { console.warn('[champagne-ach] load error', e) }
  }

  _save() {
    const userId = authState.user?.id
    if (!userId) return
    try {
      localStorage.setItem(champagneAchievementsStorageKey(userId), JSON.stringify({
        unlocked:    champagneAchievementState.unlockedAchievements,
        totalPoints: champagneAchievementState.totalPoints,
        userStats:   champagneAchievementState.userStats
      }))
    } catch (e) { console.warn('[champagne-ach] save error', e) }
  }

  updateStats(updates) {
    Object.assign(champagneAchievementState.userStats, updates)
    champagneAchievementState.userStats.unlockedCount = champagneAchievementState.unlockedAchievements.length
    this._save()
    return this._checkAll()
  }

  _checkAll() {
    const newlyUnlocked = []
    const stats = champagneAchievementState.userStats
    // 解鎖會推高 unlockedCount，所以迴圈到沒有新解鎖為止
    let changed = true
    while (changed) {
      changed = false
      Object.values(champagneAchievementDefinitions).forEach(def => {
        if (champagneAchievementState.unlockedAchievements.includes(def.id)) return
        try {
          if (def.condition(stats)) {
            champagneAchievementState.unlockedAchievements.push(def.id)
            champagneAchievementState.totalPoints += def.points
            stats.unlockedCount = champagneAchievementState.unlockedAchievements.length
            newlyUnlocked.push(def)
            changed = true
          }
        } catch (_) { /* 條件讀取失敗時略過 */ }
      })
    }
    if (newlyUnlocked.length) {
      champagneAchievementState.newUnlocks.push(...newlyUnlocked)
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
    const s = champagneAchievementState.userStats
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
    const s = champagneAchievementState.userStats
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

  // 探索村莊：{ id: geojson 的 INSEE id, sub: 產區 key, grade: 'grand_cru'|'premier_cru'|'ungraded', members: [{ slug, grade }] }
  recordVillageExplored({ id, sub, members = [] } = {}) {
    if (!id) return []
    const s = champagneAchievementState.userStats
    const list = s.exploredRegionsList || []
    const groups = s.exploredGroupsList || []
    const gc = s.exploredGrandCruList || []
    const pc = s.exploredPremierCruList || []
    const graded = s.exploredGradedList || []
    const newGc = members.filter(m => m.grade === 'grand_cru' && !gc.includes(m.slug)).map(m => m.slug)
    const newPc = members.filter(m => m.grade === 'premier_cru' && !pc.includes(m.slug)).map(m => m.slug)
    if (list.includes(id) && (!sub || groups.includes(sub)) && !newGc.length && !newPc.length) return []
    if (!list.includes(id)) s.exploredRegionsList = [...list, id]
    if (sub && !groups.includes(sub)) s.exploredGroupsList = [...groups, sub]
    if (newGc.length) s.exploredGrandCruList = [...gc, ...newGc]
    if (newPc.length) s.exploredPremierCruList = [...pc, ...newPc]
    s.exploredGradedList = [...new Set([...graded, ...newGc, ...newPc])]
    s.exploredRegions = s.exploredRegionsList.length
    return this.updateStats(s)
  }

  // 以目前筆記總數為準（可重複呼叫，不會重複累計）
  syncTastingNotes(count) {
    const s = champagneAchievementState.userStats
    if ((s.tastingNotesCount || 0) >= count) return []
    return this.updateStats({ tastingNotesCount: count })
  }

  clearNewUnlocks() {
    champagneAchievementState.newUnlocks = []
  }

  getUserLevel() {
    const pts = champagneAchievementState.totalPoints
    const thresholds = champagneAchievementConfig.levelThresholds
    return thresholds.slice().reverse().find(t => pts >= t.min) || thresholds[0]
  }

  isUnlocked(id) {
    return champagneAchievementState.unlockedAchievements.includes(id)
  }

  getAllAchievements() {
    return Object.values(champagneAchievementDefinitions).map(a => ({ ...a, unlocked: this.isUnlocked(a.id) }))
  }

  getStats() {
    return {
      totalPoints:   champagneAchievementState.totalPoints,
      unlockedCount: champagneAchievementState.unlockedAchievements.length,
      totalCount:    Object.keys(champagneAchievementDefinitions).length,
      completionPct: champagneAchievementComputed.completionPercentage.value,
      userLevel:     this.getUserLevel()
    }
  }
}

export const globalChampagneAchievementManager = new ChampagneAchievementManager()
