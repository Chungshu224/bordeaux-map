import { supabase } from './supabaseClient.js'

export const CATEGORY_LABELS = {
  general:      '💬 一般討論',
  level1:       '📗 Level 1',
  level2:       '📘 Level 2',
  level3:       '📙 Level 3',
  level4:       '📕 Level 4',
  gamehub:      '🎮 互動練習區',
  tasting:      '🍷 品飲心得',
  'wine-pairing': '🍽️ 餐酒搭配'
}

// ─── Posts ───────────────────────────────────────────────────────────────────

export async function fetchPosts({ category = null, page = 1, pageSize = 20 } = {}) {
  let query = supabase
    .from('forum_posts')
    .select('*', { count: 'exact' })
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1)

  if (category) query = query.eq('category', category)

  const { data, error, count } = await query
  if (error) throw error
  return { data, count }
}

export async function fetchPost(id) {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function createPost({ userId, displayName, title, content, category }) {
  const { data, error } = await supabase
    .from('forum_posts')
    .insert({ user_id: userId, display_name: displayName, title, content, category })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const { error } = await supabase.from('forum_posts').delete().eq('id', id)
  if (error) throw error
}

// ─── Replies ─────────────────────────────────────────────────────────────────

export async function fetchReplies(postId) {
  const { data, error } = await supabase
    .from('forum_replies')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true })
  if (error) throw error
  return data
}

export async function createReply({ postId, userId, displayName, content }) {
  const { data, error } = await supabase
    .from('forum_replies')
    .insert({ post_id: postId, user_id: userId, display_name: displayName, content })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteReply(id) {
  const { error } = await supabase.from('forum_replies').delete().eq('id', id)
  if (error) throw error
}

// ─── 首頁預覽 ─────────────────────────────────────────────────────────────────
export async function fetchRecentPosts(limit = 5) {
  const { data, error } = await supabase.rpc('get_recent_forum_posts', { p_limit: limit })
  if (error) throw error
  return data
}

// ─── 時間格式化 ───────────────────────────────────────────────────────────────
export function formatTime(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const now = new Date()
  const diff = Math.floor((now - d) / 1000)
  if (diff < 60) return '剛剛'
  if (diff < 3600) return `${Math.floor(diff / 60)} 分鐘前`
  if (diff < 86400) return `${Math.floor(diff / 3600)} 小時前`
  if (diff < 86400 * 7) return `${Math.floor(diff / 86400)} 天前`
  return d.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' })
}
