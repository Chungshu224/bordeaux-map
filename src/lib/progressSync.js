// 學習進度 ↔ Supabase 同步工具
// 僅在使用者已登入時有效；未登入時 localStorage 仍作為主要儲存
import { supabase } from './supabaseClient.js'

const PROGRESS_COLUMN = 'progress'  // profiles 資料表中的 JSONB 欄位

/**
 * 將進度資料序列化為可存入 JSON 的純物件
 * (Set → Array)
 */
function serializeForStorage(progressExport) {
  return {
    lessonProgress: Object.fromEntries(
      Object.entries(progressExport.lessonProgress || {}).map(([id, p]) => [
        id,
        {
          ...p,
          completedSlides: p.completedSlides instanceof Set
            ? Array.from(p.completedSlides)
            : (p.completedSlides ?? [])
        }
      ])
    ),
    studyTime: progressExport.studyTime || {},
    quizHistory: progressExport.quizHistory || {},
    dailyStats: Object.fromEntries(
      Object.entries(progressExport.dailyStats || {}).map(([date, s]) => [
        date,
        {
          ...s,
          lessonsStudied: s.lessonsStudied instanceof Set
            ? Array.from(s.lessonsStudied)
            : (s.lessonsStudied ?? [])
        }
      ])
    ),
    savedAt: new Date().toISOString()
  }
}

/**
 * 從 progressExport 計算高優先分析指標
 */
function computeAnalytics(progressExport) {
  // 1. 累計學習秒數
  const total_study_seconds = Object.values(progressExport.studyTime || {})
    .reduce((sum, sec) => sum + (sec || 0), 0)

  // 2. 整體測驗正確率
  const allQuizzes = Object.values(progressExport.quizHistory || {}).flat()
  const quiz_accuracy_overall = allQuizzes.length > 0
    ? Math.round(allQuizzes.filter(q => q.correct).length / allQuizzes.length * 100)
    : 0

  // 3. 已完成的等級
  //    判斷條件：某等級下所有課程的 lessonProgress 都已有 completedSlides
  //    以課程 ID 前綴 (l1-, l2-, l3-, l4-) 分組判斷
  const lessonProgress = progressExport.lessonProgress || {}
  const levelMap = { 1: [], 2: [], 3: [], 4: [] }
  for (const lessonId of Object.keys(lessonProgress)) {
    const match = lessonId.match(/^l(\d)-/)
    if (match) {
      const lvl = parseInt(match[1])
      if (levelMap[lvl]) levelMap[lvl].push(lessonProgress[lessonId])
    }
  }

  // 各等級課程總數（與 learningStore 保持一致）
  const LEVEL_TOTALS = { 1: 8, 2: 9, 3: 15, 4: 12 }
  const completed_levels = Object.entries(levelMap)
    .filter(([lvl, lessons]) => {
      const total = LEVEL_TOTALS[parseInt(lvl)] ?? 1
      const done = lessons.filter(p => {
        const slides = Array.isArray(p.completedSlides) ? p.completedSlides : []
        return p.totalSlides > 0 && slides.length >= p.totalSlides
      }).length
      return done >= total
    })
    .map(([lvl]) => parseInt(lvl))

  return { total_study_seconds, quiz_accuracy_overall, completed_levels }
}

/**
 * 儲存進度到 Supabase profiles.progress（同時更新分析欄位）
 * @param {string} userId - auth.uid()
 * @param {object} progressExport - progressActions.exportProgress() 的回傳值
 */
export async function saveProgressToSupabase(userId, progressExport) {
  if (!supabase || !userId) return

  const data = serializeForStorage(progressExport)
  const analytics = computeAnalytics(progressExport)
  const now = new Date().toISOString()

  const { error } = await supabase
    .from('profiles')
    .update({
      [PROGRESS_COLUMN]: data,
      last_active_at: now,
      total_study_seconds: analytics.total_study_seconds,
      completed_levels: analytics.completed_levels,
      quiz_accuracy_overall: analytics.quiz_accuracy_overall,
      updated_at: now
    })
    .eq('id', userId)

  if (error) {
    console.error('[progressSync] 儲存進度失敗:', error.message)
  } else {
    console.log('[progressSync] ✅ 進度已同步至雲端')
  }
}

/**
 * 從 Supabase profiles.progress 讀取進度
 * @param {string} userId - auth.uid()
 * @returns {object|null} 進度資料（與 progressActions.importProgress 相容的格式）
 */
export async function loadProgressFromSupabase(userId) {
  if (!supabase || !userId) return null

  const { data, error } = await supabase
    .from('profiles')
    .select(PROGRESS_COLUMN)
    .eq('id', userId)
    .single()

  if (error) {
    console.error('[progressSync] 載入進度失敗:', error.message)
    return null
  }

  return data?.[PROGRESS_COLUMN] ?? null
}
