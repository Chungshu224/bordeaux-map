// Italy 課程進度 ↔ Supabase 同步
// 使用現有 learning_progress 資料表（course_id = 'italy'）
// 不需額外 migration；僅在使用者已登入時有效
import { supabase } from './supabaseClient.js'

/**
 * 將單一課程完成記錄上傳至 Supabase
 * @param {string} userId
 * @param {string} lessonId — e.g. 'L1M2L3'
 */
export async function saveItalyLessonToSupabase(userId, lessonId) {
  if (!supabase || !userId || !lessonId) return
  const now = new Date().toISOString()
  const { error } = await supabase.from('learning_progress').upsert(
    {
      user_id: userId,
      course_id: 'italy',
      module_id: lessonId,
      unit_id: 'main',
      completed: true,
      completed_at: now,
      updated_at: now
    },
    { onConflict: 'user_id,course_id,module_id,unit_id' }
  )
  if (error) console.error('[ItalySync] 儲存失敗:', error.message)
}

/**
 * 從 Supabase 讀取所有已完成課程，合併（union）至 localStorage
 * @param {string} userId
 * @returns {boolean} 是否有新資料寫入 localStorage
 */
export async function loadAndMergeItalyProgress(userId) {
  if (!supabase || !userId) return false

  const { data, error } = await supabase
    .from('learning_progress')
    .select('module_id')
    .eq('user_id', userId)
    .eq('course_id', 'italy')
    .eq('completed', true)

  if (error) {
    console.error('[ItalySync] 載入失敗:', error.message)
    return false
  }
  if (!data || data.length === 0) return false

  // 依 lessonId 前綴分組至各 level
  const byLevel = { level1: [], level2: [], level3: [] }
  for (const { module_id } of data) {
    if (module_id.startsWith('L1')) byLevel.level1.push(module_id)
    else if (module_id.startsWith('L2')) byLevel.level2.push(module_id)
    else if (module_id.startsWith('L3')) byLevel.level3.push(module_id)
  }

  let didUpdate = false
  for (const [levelKey, remote] of Object.entries(byLevel)) {
    if (remote.length === 0) continue
    const key = `italy-${levelKey}-progress:${userId}`
    const saved = localStorage.getItem(key)
    const local = saved ? JSON.parse(saved) : { completedLessons: [] }
    const merged = Array.from(new Set([...(local.completedLessons || []), ...remote]))
    if (merged.length !== (local.completedLessons || []).length) {
      localStorage.setItem(
        key,
        JSON.stringify({ ...local, completedLessons: merged })
      )
      didUpdate = true
    }
  }

  if (didUpdate) console.log('[ItalySync] ✅ 進度已從雲端同步至本機')
  return didUpdate
}
