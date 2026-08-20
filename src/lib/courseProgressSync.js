// 所有 localStorage 課程的跨裝置進度同步工具
// 複用現有 learning_progress 資料表（course_id 欄位），無需額外 migration
import { supabase } from './supabaseClient.js'

// ─── 通用 helpers ────────────────────────────────────────────────

async function upsertLesson(userId, courseId, lessonId, unitId = 'main') {
  if (!supabase || !userId || !lessonId) return
  const now = new Date().toISOString()
  const { error } = await supabase.from('learning_progress').upsert(
    { user_id: userId, course_id: courseId, module_id: lessonId,
      unit_id: unitId, completed: true, completed_at: now, updated_at: now },
    { onConflict: 'user_id,course_id,module_id,unit_id' }
  )
  if (error) console.error(`[${courseId}Sync] save:`, error.message)
}

async function fetchRows(userId, courseId) {
  if (!supabase || !userId) return []
  const { data, error } = await supabase
    .from('learning_progress')
    .select('module_id, unit_id')
    .eq('user_id', userId)
    .eq('course_id', courseId)
    .eq('completed', true)
  if (error) { console.error(`[${courseId}Sync] load:`, error.message); return [] }
  return data || []
}

// 合併 remoteIds 到儲存 { completedLessons: [] } 格式的 localStorage key
function mergeArrayKey(storageKey, remoteIds) {
  if (!remoteIds.length) return false
  const raw = localStorage.getItem(storageKey)
  const local = raw ? JSON.parse(raw) : { completedLessons: [] }
  const prev = local.completedLessons || []
  const merged = Array.from(new Set([...prev, ...remoteIds]))
  if (merged.length === prev.length) return false
  localStorage.setItem(storageKey, JSON.stringify({ ...local, completedLessons: merged }))
  return true
}

// 依 lessonId 前綴分組至各 levelKey
function groupByPrefix(ids, map) {
  const result = {}
  for (const id of ids) {
    for (const { prefix, levelKey } of map) {
      if (id.startsWith(prefix)) {
        if (!result[levelKey]) result[levelKey] = []
        result[levelKey].push(id)
        break
      }
    }
  }
  return result
}

// ─── Germany ─────────────────────────────────────────────────────
export const saveGermanyLesson = (userId, lessonId) => upsertLesson(userId, 'germany', lessonId)

export async function loadAndMergeGermanyProgress(userId) {
  const rows = await fetchRows(userId, 'germany')
  if (!rows.length) return false
  const byLevel = groupByPrefix(rows.map(r => r.module_id), [
    { prefix: 'G1', levelKey: 'level1' },
    { prefix: 'G2', levelKey: 'level2' },
    { prefix: 'G3', levelKey: 'level3' },
  ])
  let didUpdate = false
  for (const [lk, ids] of Object.entries(byLevel))
    if (mergeArrayKey(`germany-${lk}-progress:${userId}`, ids)) didUpdate = true
  if (didUpdate) console.log('[germanySync] ✅ synced')
  return didUpdate
}

// ─── Spain ───────────────────────────────────────────────────────
export const saveSpainLesson = (userId, lessonId) => upsertLesson(userId, 'spain', lessonId)

export async function loadAndMergeSpainProgress(userId) {
  const rows = await fetchRows(userId, 'spain')
  if (!rows.length) return false
  const byLevel = groupByPrefix(rows.map(r => r.module_id), [
    { prefix: 'S1', levelKey: 'level1' },
    { prefix: 'S2', levelKey: 'level2' },
    { prefix: 'S3', levelKey: 'level3' },
    { prefix: 'S4', levelKey: 'level4' },
  ])
  let didUpdate = false
  for (const [lk, ids] of Object.entries(byLevel))
    if (mergeArrayKey(`spain_course_progress_${lk}:${userId}`, ids)) didUpdate = true
  if (didUpdate) console.log('[spainSync] ✅ synced')
  return didUpdate
}

// ─── Portugal ────────────────────────────────────────────────────
export const savePortugalLesson = (userId, lessonId) => upsertLesson(userId, 'portugal', lessonId)

export async function loadAndMergePortugalProgress(userId) {
  const rows = await fetchRows(userId, 'portugal')
  if (!rows.length) return false
  const byLevel = groupByPrefix(rows.map(r => r.module_id), [
    { prefix: 'P1', levelKey: 'level1' },
    { prefix: 'P2', levelKey: 'level2' },
    { prefix: 'P3', levelKey: 'level3' },
    { prefix: 'P4', levelKey: 'level4' },
  ])
  let didUpdate = false
  for (const [lk, ids] of Object.entries(byLevel))
    if (mergeArrayKey(`portugal_course_progress_${lk}:${userId}`, ids)) didUpdate = true
  if (didUpdate) console.log('[portugalSync] ✅ synced')
  return didUpdate
}

// ─── Australia ───────────────────────────────────────────────────
// Australia 使用 dict 格式：{ [lessonId]: true }
export const saveAustraliaLesson = (userId, lessonId) => upsertLesson(userId, 'australia', lessonId)

export async function loadAndMergeAustraliaProgress(userId) {
  const rows = await fetchRows(userId, 'australia')
  if (!rows.length) return false
  const byLevel = groupByPrefix(rows.map(r => r.module_id), [
    { prefix: 'A1', levelKey: 'level1' },
    { prefix: 'A2', levelKey: 'level2' },
    { prefix: 'A3', levelKey: 'level3' },
  ])
  let didUpdate = false
  for (const [lk, ids] of Object.entries(byLevel)) {
    const key = `australia_course_progress_${lk}:${userId}`
    const raw = localStorage.getItem(key)
    const local = raw ? JSON.parse(raw) : {}
    let updated = false
    for (const id of ids) if (!local[id]) { local[id] = true; updated = true }
    if (updated) { localStorage.setItem(key, JSON.stringify(local)); didUpdate = true }
  }
  if (didUpdate) console.log('[australiaSync] ✅ synced')
  return didUpdate
}

// ─── New Zealand ─────────────────────────────────────────────────
// NZ 使用單一全域 key，flat array
export const saveNZLesson = (userId, lessonId) => upsertLesson(userId, 'nz', lessonId)

export async function loadAndMergeNZProgress(userId) {
  const rows = await fetchRows(userId, 'nz')
  if (!rows.length) return null
  const remote = rows.map(r => r.module_id)
  const key = `nz-wine-progress:${userId}`
  const raw = localStorage.getItem(key)
  const local = raw ? JSON.parse(raw) : []
  const merged = Array.from(new Set([...local, ...remote]))
  if (merged.length === local.length) return null
  localStorage.setItem(key, JSON.stringify(merged))
  console.log('[nzSync] ✅ synced')
  return merged  // 回傳合併後陣列，供呼叫端更新 ref
}

// ─── Bourgogne ───────────────────────────────────────────────────
// 使用 per-moduleId key：'completed-lessons-{moduleId}' = [lessonId…]
// Supabase: module_id=lessonId, unit_id=moduleId
export const saveBourgogneLesson = (userId, lessonId, moduleId) =>
  upsertLesson(userId, 'bourgogne', lessonId, moduleId)

export async function loadAndMergeBourgogneProgress(userId) {
  const rows = await fetchRows(userId, 'bourgogne')
  if (!rows.length) return false
  const byModule = {}
  for (const { module_id: lessonId, unit_id: moduleId } of rows) {
    if (!byModule[moduleId]) byModule[moduleId] = []
    byModule[moduleId].push(lessonId)
  }
  let didUpdate = false
  for (const [moduleId, remoteLessons] of Object.entries(byModule)) {
    const key = `completed-lessons-${moduleId}:${userId}`
    const raw = localStorage.getItem(key)
    const local = raw ? JSON.parse(raw) : []
    const merged = Array.from(new Set([...local, ...remoteLessons]))
    if (merged.length > local.length) {
      localStorage.setItem(key, JSON.stringify(merged))
      didUpdate = true
    }
  }
  if (didUpdate) console.log('[bourgogneSync] ✅ synced')
  return didUpdate
}

// ─── Hungary ─────────────────────────────────────────────────────
// Hungary 已有 localStorage，只需加 Supabase 同步
export const saveHungaryLesson = (userId, lessonId) => upsertLesson(userId, 'hungary', lessonId)

export async function loadAndMergeHungaryProgress(userId) {
  const rows = await fetchRows(userId, 'hungary')
  if (!rows.length) return false
  const remote = rows.map(r => r.module_id)
  const STORAGE_KEY = `hungary-wine-academy-progress:${userId}`
  const raw = localStorage.getItem(STORAGE_KEY)
  const local = raw ? JSON.parse(raw) : { completedLessons: [], userProgress: {} }
  const merged = Array.from(new Set([...(local.completedLessons || []), ...remote]))
  if (merged.length === (local.completedLessons || []).length) return false
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...local, completedLessons: merged }))
  console.log('[hungarySync] ✅ synced')
  return true
}

// ─── Loire ───────────────────────────────────────────────────────
// Loire 使用 store state；localStorage 由 store 負責（已補上）
export const saveLoireLesson = (userId, lessonId) => upsertLesson(userId, 'loire', lessonId)

export async function loadAndMergeLoireProgress(userId) {
  const rows = await fetchRows(userId, 'loire')
  if (!rows.length) return null
  const remote = rows.map(r => r.module_id)
  const key = `loire-progress:${userId}`
  const raw = localStorage.getItem(key)
  const local = raw ? JSON.parse(raw) : []
  const merged = Array.from(new Set([...local, ...remote]))
  if (merged.length === local.length) return null
  localStorage.setItem(key, JSON.stringify(merged))
  console.log('[loireSync] ✅ synced')
  return merged  // 回傳合併後陣列，供 store reload 使用
}

// ─── California ──────────────────────────────────────────────────
// California 使用 store state；localStorage 由 store 負責（已補上）
export const saveCaliforniaLesson = (userId, lessonId) => upsertLesson(userId, 'california', lessonId)

export async function loadAndMergeCaliforniaProgress(userId) {
  const rows = await fetchRows(userId, 'california')
  if (!rows.length) return null
  const remote = rows.map(r => r.module_id)
  const key = `california-progress:${userId}`
  const raw = localStorage.getItem(key)
  const local = raw ? JSON.parse(raw) : []
  const merged = Array.from(new Set([...local, ...remote]))
  if (merged.length === local.length) return null
  localStorage.setItem(key, JSON.stringify(merged))
  console.log('[californiaSync] ✅ synced')
  return merged  // 回傳合併後陣列，供 store reload 使用
}

// ─── Alsace ──────────────────────────────────────────────────────
export const saveAlsaceLesson = (userId, lessonId) => upsertLesson(userId, 'alsace', lessonId)

export async function loadAndMergeAlsaceProgress(userId) {
  const rows = await fetchRows(userId, 'alsace')
  if (!rows.length) return false
  const byLevel = groupByPrefix(rows.map(r => r.module_id), [
    { prefix: 'AL1', levelKey: 'level1' },
    { prefix: 'AL2', levelKey: 'level2' },
    { prefix: 'AL3', levelKey: 'level3' },
    { prefix: 'AL4', levelKey: 'level4' },
  ])
  let didUpdate = false
  for (const [lk, ids] of Object.entries(byLevel))
    if (mergeArrayKey(`alsace_course_progress_${lk}:${userId}`, ids)) didUpdate = true
  if (didUpdate) console.log('[alsaceSync] ✅ synced')
  return didUpdate
}
