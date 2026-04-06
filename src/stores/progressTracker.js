// 學習進度追蹤系統 - 細粒度進度管理
import { reactive, computed, watch } from 'vue'
import { authState } from './authStore.js'
import { saveProgressToSupabase, loadProgressFromSupabase } from '../lib/progressSync.js'

// 動態導入成就系統以避免循環依賴
let achievementManager = null
const loadAchievementSystem = async () => {
  if (!achievementManager) {
    const module = await import('./achievementSystem.js')
    achievementManager = module.globalAchievementManager  // 修正：之前錯用 module.achievementManager
  }
  return achievementManager
}

// ===== 進度追蹤狀態 =====
export const progressState = reactive({
  // 課程內投影片進度 { lessonId: { slideIndex: number, totalSlides: number, completedSlides: Set, lastVisited: timestamp } }
  lessonProgress: {},
  
  // 學習時間記錄 { lessonId: totalSeconds }
  studyTime: {},
  
  // 測驗記錄 { lessonId: [{ slideIndex, correct, timestamp }] }
  quizHistory: {},
  
  // 學習會話記錄
  sessions: [],
  
  // 當前學習會話
  currentSession: null,
  
  // 每日學習統計
  dailyStats: {},
  
  // 學習里程碑
  milestones: [],
  
  // 學習偏好分析
  learningPatterns: {
    preferredTime: null, // 偏好學習時段
    averageSessionLength: 0, // 平均學習時長
    completionRate: 0, // 完成率
    quizAccuracy: 0 // 測驗正確率
  }
})

// ===== 學習會話管理 =====
export class LearningSession {
  constructor(lessonId, lessonTitle) {
    this.id = `session-${Date.now()}`
    this.lessonId = lessonId
    this.lessonTitle = lessonTitle
    this.startTime = Date.now()
    this.endTime = null
    this.duration = 0
    this.slidesViewed = new Set()
    this.quizzesAttempted = 0
    this.quizzesCorrect = 0
    this.pausedTime = 0
    this.pauseStartTime = null
    this.isActive = true
  }

  pause() {
    if (this.isActive && !this.pauseStartTime) {
      this.pauseStartTime = Date.now()
    }
  }

  resume() {
    if (this.pauseStartTime) {
      this.pausedTime += Date.now() - this.pauseStartTime
      this.pauseStartTime = null
    }
  }

  viewSlide(slideIndex) {
    this.slidesViewed.add(slideIndex)
  }

  recordQuiz(correct) {
    this.quizzesAttempted++
    if (correct) this.quizzesCorrect++
  }

  end() {
    this.isActive = false
    this.endTime = Date.now()
    this.duration = Math.floor((this.endTime - this.startTime - this.pausedTime) / 1000)
    return this.getSummary()
  }

  getSummary() {
    return {
      id: this.id,
      lessonId: this.lessonId,
      lessonTitle: this.lessonTitle,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      slidesViewed: this.slidesViewed.size,
      quizzesAttempted: this.quizzesAttempted,
      quizzesCorrect: this.quizzesCorrect,
      quizAccuracy: this.quizzesAttempted > 0 ? (this.quizzesCorrect / this.quizzesAttempted * 100).toFixed(1) : 0
    }
  }
}

// ===== 進度追蹤操作 =====
export const progressActions = {
  // 開始學習會話
  startSession(lessonId, lessonTitle) {
    // 結束之前的會話
    if (progressState.currentSession) {
      this.endSession()
    }

    progressState.currentSession = new LearningSession(lessonId, lessonTitle)
    console.log(`📚 開始學習會話: ${lessonTitle}`)
  },

  // 結束學習會話
  endSession() {
    if (progressState.currentSession) {
      const summary = progressState.currentSession.end()
      progressState.sessions.push(summary)
      
      // 更新學習時間
      const lessonId = summary.lessonId
      if (!progressState.studyTime[lessonId]) {
        progressState.studyTime[lessonId] = 0
      }
      progressState.studyTime[lessonId] += summary.duration
      
      // 更新每日統計
      this.updateDailyStats(summary)
      
      // 分析學習模式
      this.analyzeLearningPatterns()
      
      // 觸發成就檢查
      this.checkAchievements()
      
      console.log(`✅ 學習會話結束`, summary)
      progressState.currentSession = null
      
      return summary
    }
  },

  // 暫停學習
  pauseSession() {
    if (progressState.currentSession) {
      progressState.currentSession.pause()
      console.log('⏸️ 學習會話已暫停')
    }
  },

  // 繼續學習
  resumeSession() {
    if (progressState.currentSession) {
      progressState.currentSession.resume()
      console.log('▶️ 學習會話已繼續')
    }
  },

  // 記錄投影片瀏覽
  recordSlideView(lessonId, slideIndex, totalSlides) {
    // 更新課程進度
    if (!progressState.lessonProgress[lessonId]) {
      progressState.lessonProgress[lessonId] = {
        slideIndex: 0,
        totalSlides: totalSlides,
        completedSlides: new Set(),
        lastVisited: Date.now(),
        firstVisited: Date.now()
      }
    }
    
    const progress = progressState.lessonProgress[lessonId]
    progress.slideIndex = slideIndex
    progress.totalSlides = totalSlides
    
    // 確保 completedSlides 是 Set
    if (!(progress.completedSlides instanceof Set)) {
      progress.completedSlides = new Set(Array.isArray(progress.completedSlides) ? progress.completedSlides : [])
    }
    progress.completedSlides.add(slideIndex)
    
    progress.lastVisited = Date.now()

    // 記錄到當前會話
    if (progressState.currentSession && progressState.currentSession.lessonId === lessonId) {
      progressState.currentSession.viewSlide(slideIndex)
    }
  },

  // 記錄測驗答案
  recordQuizAnswer(lessonId, slideIndex, correct) {
    if (!progressState.quizHistory[lessonId]) {
      progressState.quizHistory[lessonId] = []
    }

    progressState.quizHistory[lessonId].push({
      slideIndex,
      correct,
      timestamp: Date.now()
    })

    // 記錄到當前會話
    if (progressState.currentSession && progressState.currentSession.lessonId === lessonId) {
      progressState.currentSession.recordQuiz(correct)
    }
  },

  // 獲取課程進度百分比
  getLessonProgress(lessonId) {
    const progress = progressState.lessonProgress[lessonId]
    if (!progress) return 0
    
    return Math.round((progress.completedSlides.size / progress.totalSlides) * 100)
  },

  // 獲取課程學習時間（格式化）
  getStudyTime(lessonId) {
    const seconds = progressState.studyTime[lessonId] || 0
    return this.formatDuration(seconds)
  },

  // 格式化時長
  formatDuration(seconds) {
    if (seconds < 60) {
      return `${seconds}秒`
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60)
      return `${minutes}分鐘`
    } else {
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      return `${hours}小時${minutes}分鐘`
    }
  },

  // 獲取測驗統計
  getQuizStats(lessonId) {
    const history = progressState.quizHistory[lessonId] || []
    if (history.length === 0) {
      return { total: 0, correct: 0, accuracy: 0 }
    }

    const correct = history.filter(q => q.correct).length
    return {
      total: history.length,
      correct,
      accuracy: Math.round((correct / history.length) * 100)
    }
  },

  // 更新每日統計
  updateDailyStats(session) {
    const today = new Date().toISOString().split('T')[0]
    
    if (!progressState.dailyStats[today]) {
      progressState.dailyStats[today] = {
        date: today,
        totalStudyTime: 0,
        sessionsCount: 0,
        lessonsStudied: new Set(),
        slidesViewed: 0,
        quizzesAttempted: 0,
        quizzesCorrect: 0
      }
    }

    const stats = progressState.dailyStats[today]
    stats.totalStudyTime += session.duration
    stats.sessionsCount++
    
    // 確保 lessonsStudied 是 Set
    if (!(stats.lessonsStudied instanceof Set)) {
      stats.lessonsStudied = new Set(Array.isArray(stats.lessonsStudied) ? stats.lessonsStudied : [])
    }
    stats.lessonsStudied.add(session.lessonId)
    
    stats.slidesViewed += session.slidesViewed
    stats.quizzesAttempted += session.quizzesAttempted
    stats.quizzesCorrect += session.quizzesCorrect
  },

  // 分析學習模式
  analyzeLearningPatterns() {
    if (progressState.sessions.length === 0) return

    // 計算平均學習時長
    const totalDuration = progressState.sessions.reduce((sum, s) => sum + s.duration, 0)
    progressState.learningPatterns.averageSessionLength = Math.round(totalDuration / progressState.sessions.length)

    // 計算測驗正確率
    const allQuizzes = Object.values(progressState.quizHistory).flat()
    if (allQuizzes.length > 0) {
      const correct = allQuizzes.filter(q => q.correct).length
      progressState.learningPatterns.quizAccuracy = Math.round((correct / allQuizzes.length) * 100)
    }

    // 分析偏好時段（簡化版：根據最近5次學習的時段）
    const recentSessions = progressState.sessions.slice(-5)
    const hours = recentSessions.map(s => new Date(s.startTime).getHours())
    const avgHour = Math.round(hours.reduce((sum, h) => sum + h, 0) / hours.length)
    
    if (avgHour >= 6 && avgHour < 12) {
      progressState.learningPatterns.preferredTime = '早晨'
    } else if (avgHour >= 12 && avgHour < 18) {
      progressState.learningPatterns.preferredTime = '下午'
    } else if (avgHour >= 18 && avgHour < 22) {
      progressState.learningPatterns.preferredTime = '晚上'
    } else {
      progressState.learningPatterns.preferredTime = '深夜'
    }
  },

  // 獲取學習建議
  getLearningRecommendations() {
    const recommendations = []

    // 基於學習時間的建議
    const avgSession = progressState.learningPatterns.averageSessionLength
    if (avgSession > 0 && avgSession < 600) { // 少於10分鐘
      recommendations.push({
        type: 'duration',
        icon: '⏱️',
        title: '建議延長學習時間',
        description: '您的平均學習時間較短，建議每次至少學習15-20分鐘以獲得更好效果。'
      })
    }

    // 基於測驗正確率的建議
    const accuracy = progressState.learningPatterns.quizAccuracy
    if (accuracy > 0 && accuracy < 60) {
      recommendations.push({
        type: 'quiz',
        icon: '📝',
        title: '加強複習',
        description: '測驗正確率較低，建議重新複習相關內容並多做練習。'
      })
    } else if (accuracy >= 90) {
      recommendations.push({
        type: 'quiz',
        icon: '🌟',
        title: '表現優異',
        description: '您的測驗表現非常出色！可以嘗試更高難度的課程。'
      })
    }

    // 基於學習規律的建議
    const recentDays = this.getRecentStudyDays(7)
    if (recentDays.length < 3) {
      recommendations.push({
        type: 'consistency',
        icon: '📅',
        title: '保持學習習慣',
        description: '建議每週至少學習3-4次，保持學習的連續性。'
      })
    }

    return recommendations
  },

  // 獲取最近N天的學習記錄
  getRecentStudyDays(days) {
    const dates = Object.keys(progressState.dailyStats).sort().reverse()
    return dates.slice(0, days)
  },

  // 獲取學習連續天數
  getStudyStreak() {
    const dates = Object.keys(progressState.dailyStats).sort().reverse()
    if (dates.length === 0) return 0

    let streak = 0
    const today = new Date().toISOString().split('T')[0]
    let currentDate = new Date(today)

    for (const date of dates) {
      const checkDate = currentDate.toISOString().split('T')[0]
      if (date === checkDate) {
        streak++
        currentDate.setDate(currentDate.getDate() - 1)
      } else {
        break
      }
    }

    return streak
  },

  // 獲取總學習時間
  getTotalStudyTime() {
    const total = Object.values(progressState.studyTime).reduce((sum, time) => sum + time, 0)
    return this.formatDuration(total)
  },

  // 重置進度（用於測試）
  resetProgress() {
    progressState.lessonProgress = {}
    progressState.studyTime = {}
    progressState.quizHistory = {}
    progressState.sessions = []
    progressState.currentSession = null
    progressState.dailyStats = {}
    progressState.milestones = []
    console.log('🔄 學習進度已重置')
  },

  // 匯出進度數據
  exportProgress() {
    return {
      lessonProgress: progressState.lessonProgress,
      studyTime: progressState.studyTime,
      quizHistory: progressState.quizHistory,
      sessions: progressState.sessions,
      dailyStats: progressState.dailyStats,
      learningPatterns: progressState.learningPatterns,
      exportDate: new Date().toISOString()
    }
  },

  // 匯入進度數據
  importProgress(data) {
    if (data.lessonProgress) {
      // 恢復 Set 對象
      progressState.lessonProgress = {}
      for (const [lessonId, progress] of Object.entries(data.lessonProgress)) {
        progressState.lessonProgress[lessonId] = {
          ...progress,
          completedSlides: new Set(Array.isArray(progress.completedSlides) ? progress.completedSlides : [])
        }
      }
    }
    if (data.studyTime) progressState.studyTime = data.studyTime
    if (data.quizHistory) progressState.quizHistory = data.quizHistory
    if (data.sessions) progressState.sessions = data.sessions
    if (data.dailyStats) {
      // 恢復 Set 對象
      progressState.dailyStats = {}
      for (const [date, stats] of Object.entries(data.dailyStats)) {
        progressState.dailyStats[date] = {
          ...stats,
          lessonsStudied: new Set(Array.isArray(stats.lessonsStudied) ? stats.lessonsStudied : [])
        }
      }
    }
    if (data.learningPatterns) progressState.learningPatterns = data.learningPatterns
    
    console.log('✅ 學習進度已匯入')
  },

  // 檢查並觸發成就
  async checkAchievements() {
    try {
      const manager = await loadAchievementSystem()
      if (!manager) return

      const lp = progressState.lessonProgress

      // 課程是否完成：completedSlides 全溢 totalSlides
      const isLessonComplete = (entry) => {
        if (!entry || entry.totalSlides <= 0) return false
        const done = entry.completedSlides instanceof Set
          ? entry.completedSlides.size
          : (entry.completedSlides?.length ?? 0)
        return done >= entry.totalSlides
      }

      const completedLessons = Object.values(lp).filter(isLessonComplete).length

      // 各等級課程 ID（與 learningStore 保持一致）
      const LEVEL_LESSONS = {
        1: ['l1-1','l1-2','l1-3','l1-4','l1-5','l1-6','l1-7','l1-8'],
        2: ['l2-1','l2-2','l2-3','l2-4','l2-5','l2-6','l2-7','l2-8','l2-9'],
        3: ['l3-1','l3-2','l3-3','l3-4','l3-5','l3-6','l3-7','l3-8','l3-9','l3-10','l3-11','l3-12','l3-13','l3-14','l3-15'],
        4: ['l4-1','l4-2','l4-3','l4-4','l4-5','l4-6','l4-7','l4-8','l4-9','l4-10','l4-11','l4-12']
      }
      const isLevelDone = (lvl) => LEVEL_LESSONS[lvl].every(id => isLessonComplete(lp[id]))

      const level1Completed = isLevelDone(1)
      const level2Completed = isLevelDone(2)
      const level3Completed = isLevelDone(3)
      const level4Completed = isLevelDone(4)

      // 測驗統計
      const allQuizzes = Object.values(progressState.quizHistory).flat()
      const totalQuizzes = allQuizzes.length

      // 完美分數：某課程所有測驗全對
      const perfectScores = Object.values(progressState.quizHistory)
        .filter(history => history.length > 0 && history.every(q => q.correct)).length

      // 最長學習會話（秒）
      const longestSession = progressState.sessions.length > 0
        ? Math.max(...progressState.sessions.map(s => s.duration || 0))
        : 0

      // 夜間／清晨學習次數
      const nightTimeStudy = progressState.sessions.filter(s => {
        const h = new Date(s.startTime).getHours()
        return h >= 22 || h < 4
      }).length
      const earlyMorningStudy = progressState.sessions.filter(s => {
        const h = new Date(s.startTime).getHours()
        return h >= 5 && h < 8
      }).length

      // 呼叫 updateStats() 以更新 achievementState.userStats 並觸發檢查
      manager.updateStats({
        completedLessons,
        level1Completed,
        level2Completed,
        level3Completed,
        level4Completed,
        allCoursesCompleted: level1Completed && level2Completed && level3Completed && level4Completed,
        totalQuizzes,
        perfectScores,
        consecutiveDays: this.getStudyStreak(),
        longestSession,
        nightTimeStudy,
        earlyMorningStudy
      })
    } catch (error) {
      console.warn('成就檢查失敗:', error)
    }
  },

  // 計算整體測驗正確率
  calculateOverallQuizAccuracy() {
    const allQuizzes = Object.values(progressState.quizHistory).flat()
    if (allQuizzes.length === 0) return 0
    const correct = allQuizzes.filter(q => q.correct).length
    return Math.round((correct / allQuizzes.length) * 100)
  }
}

// ===== Computed 屬性 =====
export const progressComputed = {
  // 總體學習統計
  overallStats: computed(() => {
    const totalLessons = Object.keys(progressState.lessonProgress).length
    const totalStudyTimeSeconds = Object.values(progressState.studyTime).reduce((sum, time) => sum + time, 0)
    const totalQuizzes = Object.values(progressState.quizHistory).flat().length
    const correctQuizzes = Object.values(progressState.quizHistory).flat().filter(q => q.correct).length
    
    return {
      totalLessons,
      totalStudyTime: progressActions.formatDuration(totalStudyTimeSeconds),
      totalStudyTimeSeconds,
      totalQuizzes,
      correctQuizzes,
      quizAccuracy: totalQuizzes > 0 ? Math.round((correctQuizzes / totalQuizzes) * 100) : 0,
      studyStreak: progressActions.getStudyStreak(),
      totalSessions: progressState.sessions.length
    }
  }),

  // 最近7天學習趨勢
  weeklyTrend: computed(() => {
    const last7Days = []
    const today = new Date()
    
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      
      const stats = progressState.dailyStats[dateStr]
      last7Days.push({
        date: dateStr,
        dayName: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()],
        studyTime: stats ? stats.totalStudyTime : 0,
        sessions: stats ? stats.sessionsCount : 0,
        quizzes: stats ? stats.quizzesAttempted : 0
      })
    }
    
    return last7Days
  })
}

// ===== 自動保存到 localStorage =====
if (typeof window !== 'undefined') {
  // 從 localStorage 載入進度
  const savedProgress = localStorage.getItem('bordeaux-progress')
  if (savedProgress) {
    try {
      const data = JSON.parse(savedProgress)
      progressActions.importProgress(data)
      console.log('✅ 已載入保存的學習進度')
    } catch (e) {
      console.error('❌ 載入進度失敗:', e)
    }
  }

  // 監聽進度變化並自動保存
  watch(
    () => ({
      lessonProgress: { ...progressState.lessonProgress },
      studyTime: { ...progressState.studyTime },
      quizHistory: { ...progressState.quizHistory },
      sessions: [...progressState.sessions],
      dailyStats: { ...progressState.dailyStats }
    }),
    (state) => {
      // 將 Set 轉換為數組以便序列化
      const serializedState = {
        ...state,
        lessonProgress: Object.fromEntries(
          Object.entries(state.lessonProgress).map(([lessonId, progress]) => [
            lessonId,
            {
              ...progress,
              completedSlides: progress.completedSlides instanceof Set 
                ? Array.from(progress.completedSlides) 
                : progress.completedSlides
            }
          ])
        ),
        dailyStats: Object.fromEntries(
          Object.entries(state.dailyStats).map(([date, stats]) => [
            date,
            {
              ...stats,
              lessonsStudied: stats.lessonsStudied instanceof Set 
                ? Array.from(stats.lessonsStudied) 
                : stats.lessonsStudied
            }
          ])
        )
      }
      localStorage.setItem('bordeaux-progress', JSON.stringify({
        ...serializedState,
        savedAt: new Date().toISOString()
      }))

      // ── 雲端同步（已登入時，防抖 5 秒） ──
      if (authState.user) {
        clearTimeout(cloudSaveTimer)
        cloudSaveTimer = setTimeout(() => {
          saveProgressToSupabase(
            authState.user.id,
            progressActions.exportProgress()
          )
        }, 5000)
      }
    },
    { deep: true }
  )
}

// ===== 監聽登入狀態，登入後從雲端載入進度 =====
let cloudSaveTimer = null

watch(
  () => authState.user,
  async (user, prevUser) => {
    if (user && !prevUser) {
      // 剛登入：比較本地與雲端的 savedAt，取較新的
      const cloudProgress = await loadProgressFromSupabase(user.id)

      if (cloudProgress) {
        const cloudTime = cloudProgress.savedAt ? new Date(cloudProgress.savedAt).getTime() : 0
        const localRaw = localStorage.getItem('bordeaux-progress')
        const localTime = (() => {
          try {
            const d = JSON.parse(localRaw)
            return d?.savedAt ? new Date(d.savedAt).getTime() : 0
          } catch { return 0 }
        })()

        if (cloudTime >= localTime) {
          progressActions.importProgress(cloudProgress)
          console.log('☁️ 已從雲端載入學習進度（雲端較新）')
        } else {
          // 本地較新 → 上傳到雲端覆蓋
          console.log('☁️ 本地進度較新，將上傳至雲端')
          await saveProgressToSupabase(user.id, progressActions.exportProgress())
        }
      } else {
        // 雲端無資料（新帳號） → 把現有本地進度上傳
        const localRaw = localStorage.getItem('bordeaux-progress')
        if (localRaw) {
          console.log('☁️ 新帳號，上傳現有本地進度至雲端')
          await saveProgressToSupabase(user.id, progressActions.exportProgress())
        }
      }
    }
    if (!user && prevUser) {
      // 登出：清除雲端同步 timer（繼續使用 localStorage）
      clearTimeout(cloudSaveTimer)
      cloudSaveTimer = null
      console.log('🔒 已登出，改用本地進度')
    }
  }
)

export default {
  state: progressState,
  actions: progressActions,
  computed: progressComputed
}
