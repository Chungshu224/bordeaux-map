<template>
  <div class="post-detail">
    <!-- Topbar -->
    <div class="detail-topbar">
      <div class="detail-topbar-inner">
        <div class="topbar-left">
          <button class="tb-btn" @click="router.push('/forum')">← 返回討論區</button>
        </div>
        <div class="topbar-right">
          <button class="tb-btn ghost" @click="router.push('/')">🏠 首頁</button>
        </div>
      </div>
    </div>

    <div class="detail-body">
      <!-- 讀取中 -->
      <div v-if="loading" class="loading">載入中…</div>

      <!-- 文章詳情 -->
      <template v-else-if="post">
        <div class="post-box">
          <div class="post-header">
            <span class="post-cat">{{ CATEGORY_LABELS[post.category] }}</span>
            <span v-if="post.is_pinned" class="pin-tag">📌 置頂</span>
          </div>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <div class="author-block">
              <img v-if="post.avatar_url" :src="post.avatar_url" class="author-avatar" :alt="post.display_name" />
              <div v-else class="author-avatar author-avatar-ph">{{ (post.display_name || '?')[0] }}</div>
              <div>
                <div class="author-name">{{ post.display_name }}</div>
                <div v-if="post.top_achievement" class="author-achievement">{{ post.top_achievement }}</div>
              </div>
            </div>
            <span class="time">{{ formatTime(post.created_at) }}</span>
            <button
              v-if="authUser && authUser.id === post.user_id"
              class="del-btn"
              @click="handleDeletePost"
            >刪除文章</button>
          </div>
          <div class="post-content">{{ post.content }}</div>
        </div>

        <!-- 回覆列表 -->
        <div class="replies-section">
          <h2 class="replies-title">💬 回覆 ({{ replies.length }})</h2>

          <div v-if="replies.length === 0" class="no-replies">目前還沒有回覆，搶先留言！</div>

          <div v-for="reply in replies" :key="reply.id" class="reply-card">
            <div class="reply-meta">
              <div class="author-block">
                <img v-if="reply.avatar_url" :src="reply.avatar_url" class="reply-avatar" :alt="reply.display_name" />
                <div v-else class="reply-avatar reply-avatar-ph">{{ (reply.display_name || '?')[0] }}</div>
                <div>
                  <div class="reply-author-name">{{ reply.display_name }}</div>
                  <div v-if="reply.top_achievement" class="author-achievement small">{{ reply.top_achievement }}</div>
                </div>
              </div>
              <span class="time">{{ formatTime(reply.created_at) }}</span>
              <button
                v-if="authUser && authUser.id === reply.user_id"
                class="del-btn"
                @click="handleDeleteReply(reply.id)"
              >刪除</button>
            </div>
            <div class="reply-content">{{ reply.content }}</div>
          </div>
        </div>

        <!-- 回覆輸入框 -->
        <div class="reply-form-section">
          <template v-if="authUser">
            <h3>留下回覆</h3>
            <textarea
              v-model="newReply"
              placeholder="分享你的想法…"
              rows="4"
            ></textarea>
            <div v-if="replyError" class="form-error">{{ replyError }}</div>
            <button class="tb-btn primary" :disabled="submitting" @click="submitReply">
              {{ submitting ? '送出中…' : '送出回覆' }}
            </button>
          </template>
          <p v-else class="login-hint">
            <button class="tb-btn primary" @click="router.push('/login')">登入</button>
            後即可留下回覆
          </p>
        </div>
      </template>

      <!-- 文章不存在 -->
      <div v-else class="not-found">
        <p>找不到該討論串</p>
        <button class="tb-btn" @click="router.push('/forum')">返回討論區</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { authState, authActions } from '../stores/authStore.js'
import {
  fetchPost, deletePost,
  fetchReplies, createReply, deleteReply,
  CATEGORY_LABELS, formatTime, loadMyForumProfile
} from '../lib/forumService.js'
import { achievementActions } from '../stores/achievementSystem.js'

const route    = useRoute()
const router   = useRouter()
const authUser = computed(() => authState.user)

const loading    = ref(true)
const post       = ref(null)
const replies    = ref([])
const newReply   = ref('')
const replyError = ref('')
const submitting = ref(false)
const myAvatarUrl = ref(null)

async function load() {
  loading.value = true
  try {
    const [p, r] = await Promise.all([
      fetchPost(route.params.id),
      fetchReplies(route.params.id)
    ])
    post.value    = p
    replies.value = r
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

async function handleDeletePost() {
  if (!confirm('確定要刪除這篇文章嗎？')) return
  await deletePost(post.value.id)
  router.push('/forum')
}

async function handleDeleteReply(id) {
  if (!confirm('確定要刪除這則回覆嗎？')) return
  await deleteReply(id)
  replies.value = replies.value.filter(r => r.id !== id)
}

async function submitReply() {
  replyError.value = ''
  if (!newReply.value.trim()) { replyError.value = '請填寫回覆內容'; return }
  submitting.value = true
  try {
    const created = await createReply({
      postId:         post.value.id,
      userId:         authUser.value.id,
      displayName:    authActions.getDisplayName(),
      content:        newReply.value.trim(),
      avatarUrl:      myAvatarUrl.value,
      topAchievement: achievementActions.getTopAchievement()
    })
    replies.value.push(created)
    post.value.reply_count = (post.value.reply_count || 0) + 1
    newReply.value = ''
  } catch (e) {
    replyError.value = '回覆失敗，請稍後再試'
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  await load()
  if (authUser.value) {
    const p = await loadMyForumProfile(authUser.value.id)
    myAvatarUrl.value = p.avatarUrl
  }
})
</script>

<style scoped>
.post-detail {
  min-height: 100vh;
  background: #f5f0e8;
  display: flex;
  flex-direction: column;
}

/* ── Topbar ─────────────────────────────────────────────── */
.detail-topbar {
  background: #1a0a0e;
  border-bottom: 1px solid rgba(212,175,55,0.2);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.detail-topbar-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar-left, .topbar-right { display: flex; gap: 8px; }

/* ── Buttons ─────────────────────────────────────────────── */
.tb-btn {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: 1.5px solid rgba(212,175,55,0.5);
  background: transparent;
  color: #c8b08a;
  transition: all .2s;
  white-space: nowrap;
}
.tb-btn:hover { background: rgba(212,175,55,0.1); color: #d4af37; }
.tb-btn.ghost { border-color: rgba(255,255,255,0.15); color: #9a8878; }
.tb-btn.ghost:hover { background: rgba(255,255,255,0.06); color: #c8b08a; }
.tb-btn.primary { background: #722f37; color: #fff; border-color: #722f37; }
.tb-btn.primary:hover { background: #9b3a45; border-color: #9b3a45; }
.tb-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* ── Body ────────────────────────────────────────────────── */
.detail-body {
  max-width: 860px;
  margin: 0 auto;
  padding: 28px 20px 80px;
  width: 100%;
}
.loading, .not-found { text-align: center; padding: 80px 20px; color: #9a8878; }

/* ── Post Box ────────────────────────────────────────────── */
.post-box {
  background: #fff;
  border-radius: 14px;
  padding: 28px;
  border: 1.5px solid #e8e0d4;
  margin-bottom: 24px;
}
.post-header { display: flex; gap: 10px; align-items: center; margin-bottom: 10px; }
.post-cat { font-size: 0.78rem; color: #7a6a5a; background: #f5f0e8; padding: 3px 10px; border-radius: 12px; }
.pin-tag { font-size: 0.74rem; color: #b45309; font-weight: 700; }
.post-title { font-size: 1.5rem; font-weight: 700; color: #2c1810; margin: 0 0 14px; line-height: 1.4; }
.post-meta { display: flex; align-items: center; gap: 12px; font-size: 0.82rem; color: #9a8878; margin-bottom: 20px; }
.author { font-weight: 700; color: #6b5a45; }
.del-btn {
  margin-left: auto; font-size: 0.78rem; cursor: pointer;
  border: none; background: none; color: #dc2626; padding: 2px 6px;
  border-radius: 6px; transition: background .2s;
}
.del-btn:hover { background: #fee2e2; }
.post-content { font-size: 0.97rem; color: #3c2a1a; line-height: 1.8; white-space: pre-wrap; }

/* ── Replies ─────────────────────────────────────────────── */
.replies-section { margin-bottom: 24px; }
.replies-title { font-size: 1rem; font-weight: 700; color: #2c1810; margin-bottom: 14px; }
.no-replies { text-align: center; padding: 30px; color: #9a8878; font-size: 0.9rem; }
.reply-card {
  background: #fff;
  border-radius: 10px;
  padding: 16px 20px;
  border: 1.5px solid #ece4d8;
  margin-bottom: 10px;
}
.reply-meta { display: flex; align-items: center; gap: 10px; font-size: 0.78rem; color: #9a8878; margin-bottom: 8px; }
.reply-content { font-size: 0.9rem; color: #3c2a1a; line-height: 1.7; white-space: pre-wrap; }
.author-block { display: flex; align-items: center; gap: 10px; }
.author-avatar { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(212,175,55,0.3); flex-shrink: 0; }
.author-avatar-ph { width: 36px; height: 36px; border-radius: 50%; background: #722f37; color: #fff; font-size: 0.9rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.author-name { font-weight: 700; color: #6b5a45; font-size: 0.9rem; }
.author-achievement { font-size: 0.7rem; color: #b89a30; background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.2); padding: 1px 6px; border-radius: 8px; display: inline-block; margin-top: 2px; }
.author-achievement.small { font-size: 0.65rem; }
.reply-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; border: 1.5px solid rgba(212,175,55,0.3); flex-shrink: 0; }
.reply-avatar-ph { width: 28px; height: 28px; border-radius: 50%; background: #722f37; color: #fff; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.reply-author-name { font-weight: 600; color: #6b5a45; font-size: 0.82rem; }

/* ── Reply Form ──────────────────────────────────────────── */
.reply-form-section {
  background: #fff;
  border-radius: 14px;
  padding: 24px;
  border: 1.5px solid #e8e0d4;
}
.reply-form-section h3 { margin: 0 0 12px; font-size: 0.95rem; color: #2c1810; }
.reply-form-section textarea {
  width: 100%; padding: 12px;
  border: 1.5px solid #d4c5a9; border-radius: 8px;
  font-size: 0.93rem; color: #2c1810; background: #fdfaf6;
  outline: none; font-family: inherit; resize: vertical; margin-bottom: 10px;
  transition: border-color .2s;
}
.reply-form-section textarea:focus { border-color: #722f37; }
.form-error { color: #dc2626; font-size: 0.82rem; margin-bottom: 8px; }
.login-hint { font-size: 0.9rem; color: #7a6a5a; display: flex; align-items: center; gap: 8px; }
</style>
