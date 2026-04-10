<template>
  <div class="forum-page">
    <!-- 頂部導覽 -->
    <div class="forum-topbar">
      <div class="forum-topbar-inner">
        <div class="forum-topbar-left">
          <button class="tb-btn" @click="router.push('/bordeaux')">← 返回課程</button>
          <button class="tb-btn ghost" @click="router.push('/')">🏠 首頁</button>
        </div>
        <h1 class="forum-title">💬 學員討論區</h1>
        <div class="forum-topbar-right">
          <button v-if="authUser" class="tb-btn primary" @click="showNewPost = true">＋ 發起討論</button>
          <button v-else class="tb-btn primary" @click="router.push('/login')">登入後發文</button>
        </div>
      </div>
    </div>

    <div class="forum-body">
      <!-- 類別篩選 -->
      <div class="category-bar">
        <button
          v-for="(label, key) in allCategories"
          :key="key"
          :class="['cat-btn', activeCategory === key ? 'active' : '']"
          @click="setCategory(key)"
        >{{ label }}</button>
      </div>

      <!-- 文章列表 -->
      <div v-if="loading" class="forum-loading">載入中…</div>
      <div v-else-if="posts.length === 0" class="forum-empty">
        <div class="empty-icon">💬</div>
        <p>還沒有討論，來發第一篇吧！</p>
      </div>
      <div v-else class="post-list">
        <div
          v-for="post in posts"
          :key="post.id"
          class="post-card"
          @click="router.push(`/forum/${post.id}`)"
        >
          <div class="post-card-top">
            <span v-if="post.is_pinned" class="pin-tag">📌 置頂</span>
            <span class="post-cat">{{ CATEGORY_LABELS[post.category] }}</span>
          </div>
          <div class="post-card-title">{{ post.title }}</div>
          <div class="post-card-meta">
            <span class="post-author">{{ post.display_name }}</span>
            <span class="post-time">{{ formatTime(post.created_at) }}</span>
            <span class="post-replies">💬 {{ post.reply_count }}</span>
          </div>
        </div>
      </div>

      <!-- 分頁 -->
      <div v-if="totalPages > 1" class="pagination">
        <button :disabled="page <= 1" @click="page--">‹</button>
        <span>{{ page }} / {{ totalPages }}</span>
        <button :disabled="page >= totalPages" @click="page++">›</button>
      </div>
    </div>

    <!-- 發文 Modal -->
    <div v-if="showNewPost" class="modal-backdrop" @click.self="showNewPost = false">
      <div class="modal-box">
        <div class="modal-header">
          <h2>發起討論</h2>
          <button class="modal-close" @click="showNewPost = false">✕</button>
        </div>
        <div class="modal-body">
          <label>分類</label>
          <select v-model="newPost.category">
            <option v-for="(label, key) in CATEGORY_LABELS" :key="key" :value="key">{{ label }}</option>
          </select>
          <label>標題</label>
          <input v-model="newPost.title" placeholder="請輸入討論標題" maxlength="80" />
          <label>內容</label>
          <textarea v-model="newPost.content" placeholder="分享你的問題或心得…" rows="6"></textarea>
          <div v-if="postError" class="form-error">{{ postError }}</div>
        </div>
        <div class="modal-footer">
          <button class="tb-btn" @click="showNewPost = false">取消</button>
          <button class="tb-btn primary" :disabled="submitting" @click="submitPost">
            {{ submitting ? '發送中…' : '發布' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { authState, authActions } from '../stores/authStore.js'
import { fetchPosts, createPost, CATEGORY_LABELS, formatTime } from '../lib/forumService.js'

const router   = useRouter()
const authUser = computed(() => authState.user)

const allCategories = { all: '🗂️ 全部', ...CATEGORY_LABELS }

const posts          = ref([])
const loading        = ref(false)
const total          = ref(0)
const page           = ref(1)
const pageSize       = 20
const activeCategory = ref('all')
const totalPages     = computed(() => Math.ceil(total.value / pageSize))

const showNewPost = ref(false)
const submitting  = ref(false)
const postError   = ref('')
const newPost     = ref({ title: '', content: '', category: 'general' })

async function loadPosts() {
  loading.value = true
  try {
    const cat = activeCategory.value === 'all' ? null : activeCategory.value
    const res = await fetchPosts({ category: cat, page: page.value, pageSize })
    posts.value = res.data
    total.value = res.count
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

function setCategory(key) {
  activeCategory.value = key
  page.value = 1
}

async function submitPost() {
  postError.value = ''
  if (!newPost.value.title.trim()) { postError.value = '請填寫標題'; return }
  if (!newPost.value.content.trim()) { postError.value = '請填寫內容'; return }
  submitting.value = true
  try {
    await createPost({
      userId:      authUser.value.id,
      displayName: authActions.getDisplayName(),
      title:       newPost.value.title.trim(),
      content:     newPost.value.content.trim(),
      category:    newPost.value.category
    })
    showNewPost.value = false
    newPost.value = { title: '', content: '', category: 'general' }
    page.value = 1
    await loadPosts()
  } catch (e) {
    postError.value = '發文失敗，請稍後再試'
  } finally {
    submitting.value = false
  }
}

watch([activeCategory, page], loadPosts)
onMounted(loadPosts)
</script>

<style scoped>
.forum-page {
  min-height: 100vh;
  background: #f5f0e8;
  display: flex;
  flex-direction: column;
}

/* ── Topbar ─────────────────────────────────────────────── */
.forum-topbar {
  background: #1a0a0e;
  border-bottom: 1px solid rgba(212,175,55,0.2);
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.forum-topbar-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.forum-topbar-left,
.forum-topbar-right {
  display: flex;
  gap: 8px;
  min-width: 160px;
}
.forum-topbar-right { justify-content: flex-end; }
.forum-title {
  color: #d4af37;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
}

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
.forum-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 20px 60px;
  width: 100%;
}

/* ── Category Bar ────────────────────────────────────────── */
.category-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}
.cat-btn {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  border: 1.5px solid #d4c5a9;
  background: #fff;
  color: #6b5a45;
  transition: all .2s;
}
.cat-btn:hover { border-color: #722f37; color: #722f37; }
.cat-btn.active { background: #722f37; color: #fff; border-color: #722f37; }

/* ── Post List ───────────────────────────────────────────── */
.post-list { display: flex; flex-direction: column; gap: 10px; }
.post-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  border: 1.5px solid #e8e0d4;
  transition: border-color .2s, box-shadow .2s;
}
.post-card:hover { border-color: #722f37; box-shadow: 0 4px 16px rgba(114,47,55,0.1); }
.post-card-top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.pin-tag { font-size: 0.72rem; color: #b45309; font-weight: 700; }
.post-cat { font-size: 0.72rem; color: #7a6a5a; background: #f5f0e8; padding: 2px 8px; border-radius: 10px; }
.post-card-title { font-size: 1rem; font-weight: 600; color: #2c1810; margin-bottom: 8px; line-height: 1.4; }
.post-card-meta { display: flex; gap: 12px; font-size: 0.78rem; color: #9a8878; }
.post-author { font-weight: 600; color: #6b5a45; }
.post-replies { margin-left: auto; }

.forum-loading, .forum-empty { text-align: center; padding: 60px 20px; color: #9a8878; }
.empty-icon { font-size: 3rem; margin-bottom: 12px; }

/* ── Pagination ──────────────────────────────────────────── */
.pagination { display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 32px; }
.pagination button {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1.5px solid #d4c5a9; background: #fff;
  font-size: 1.1rem; cursor: pointer; color: #6b5a45;
  transition: all .2s;
}
.pagination button:hover:not(:disabled) { border-color: #722f37; color: #722f37; }
.pagination button:disabled { opacity: 0.3; cursor: not-allowed; }
.pagination span { font-size: 0.85rem; color: #7a6a5a; }

/* ── Modal ───────────────────────────────────────────────── */
.modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 500; padding: 20px;
}
.modal-box {
  background: #fff;
  border-radius: 16px;
  width: 100%; max-width: 560px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  display: flex; flex-direction: column;
}
.modal-header {
  padding: 20px 24px 0;
  display: flex; justify-content: space-between; align-items: center;
}
.modal-header h2 { margin: 0; font-size: 1.1rem; color: #2c1810; }
.modal-close { background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #9a8878; padding: 4px 8px; }
.modal-body {
  padding: 20px 24px;
  display: flex; flex-direction: column; gap: 10px;
}
.modal-body label { font-size: 0.82rem; font-weight: 600; color: #6b5a45; }
.modal-body select,
.modal-body input,
.modal-body textarea {
  width: 100%; padding: 10px 12px;
  border: 1.5px solid #d4c5a9; border-radius: 8px;
  font-size: 0.95rem; color: #2c1810;
  background: #fdfaf6; outline: none;
  font-family: inherit; resize: vertical;
  transition: border-color .2s;
}
.modal-body select:focus,
.modal-body input:focus,
.modal-body textarea:focus { border-color: #722f37; }
.form-error { color: #dc2626; font-size: 0.82rem; }
.modal-footer {
  padding: 16px 24px;
  display: flex; justify-content: flex-end; gap: 10px;
  border-top: 1px solid #f0e8dc;
}
</style>
