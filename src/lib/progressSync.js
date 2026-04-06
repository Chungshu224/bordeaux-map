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
 * 儲存進度到 Supabase profiles.progress
 * @param {string} userId - auth.uid()
 * @param {object} progressExport - progressActions.exportProgress() 的回傳值
 */
export async function saveProgressToSupabase(userId, progressExport) {
  if (!supabase || !userId) return

  const data = serializeForStorage(progressExport)

  const { error } = await supabase
    .from('profiles')
    .update({ [PROGRESS_COLUMN]: data, updated_at: new Date().toISOString() })
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
