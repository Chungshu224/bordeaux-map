<template>
  <div class="burg-nb-page">
    <!-- Header -->
    <div class="burg-nb-header">
      <button class="burg-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="burg-nb-title">📔 品飲筆記本</h1>
      <button class="burg-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="burg-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="burg-nb-stats">
      <div class="burg-stat">
        <span class="burg-stat-num">{{ stats.tried }}</span>
        <span class="burg-stat-lbl">已品飲</span>
      </div>
      <div class="burg-stat-div" />
      <div class="burg-stat">
        <span class="burg-stat-num">{{ stats.wishlist }}</span>
        <span class="burg-stat-lbl">想喝清單</span>
      </div>
      <div class="burg-stat-div" />
      <div class="burg-stat">
        <span class="burg-stat-num">{{ stats.aocs }}</span>
        <span class="burg-stat-lbl">產區涵蓋</span>
      </div>
      <div class="burg-stat-div" />
      <div class="burg-stat">
        <span class="burg-stat-num">{{ stats.vintages }}</span>
        <span class="burg-stat-lbl">年份記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="burg-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['burg-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <!-- 篩選列 -->
      <div class="burg-nb-filters">
        <button v-for="tab in NOTE_TABS" :key="tab.key"
          :class="['burg-filter-btn', filterTab === tab.key && 'active']"
          @click="filterTab = tab.key">
          {{ tab.label }}
        </button>
        <div class="burg-search-wrap">
          <input v-model="searchQuery" class="burg-search" placeholder="搜尋酒莊或產區…" />
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="burg-nb-empty">
        <div class="burg-loading-spin" />
        <p>載入中…</p>
      </div>

      <!-- Empty -->
      <div v-else-if="filteredNotes.length === 0" class="burg-nb-empty">
        <p class="burg-empty-icon">📭</p>
        <p class="burg-empty-msg">
          {{ !authUser ? '請登入以查看筆記' :
             searchQuery ? '找不到符合的筆記' :
             filterTab === 'tried' ? '尚無品飲記錄' :
             filterTab === 'wishlist' ? '想喝清單為空' : '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <!-- Notes grid -->
      <div v-else class="burg-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="burg-nb-card"
          @click="openNote(note)">
          <div class="burg-card-top">
            <span :class="['burg-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.vintage" class="burg-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="burg-card-name">{{ note.chateau_name }}</h3>
          <p class="burg-card-aoc">{{ fmtAoc(note.aoc_id) }}</p>
          <div v-if="note.rating" class="burg-card-stars">
            <span v-for="i in 5" :key="i" :class="['burg-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="burg-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="burg-tag">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="burg-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="burg-card-notes">{{ note.notes.slice(0, 60) }}{{ note.notes.length > 60 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="burg-nb-scroll">
      <div class="burg-profile-panel">
        <h3 class="burg-profile-title">📊 品味輪廓</h3>
        <p v-if="notes.length === 0" class="burg-profile-hint">新增品飲記錄後即可生成個人品味輪廓</p>
        <template v-else>
          <!-- 香氣標籤雲 -->
          <div class="burg-profile-section">
            <h4>常見香氣</h4>
            <div class="burg-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag"
                class="burg-cloud-tag"
                :style="{ fontSize: `${0.75 + count * 0.12}rem`, opacity: 0.6 + count * 0.08 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <!-- 年份分佈 -->
          <div class="burg-profile-section">
            <h4>年份分佈</h4>
            <div class="burg-vintage-list">
              <div v-for="[vintage, count] in vintageDist" :key="vintage" class="burg-vrow">
                <span class="burg-vrow-yr">{{ vintage }}</span>
                <div class="burg-vrow-bar-wrap">
                  <div class="burg-vrow-bar" :style="{ width: `${(count / maxVintageCount) * 100}%` }"></div>
                </div>
                <span class="burg-vrow-cnt">{{ count }}</span>
              </div>
            </div>
          </div>
          <!-- 評分分佈 -->
          <div class="burg-profile-section">
            <h4>評分分佈</h4>
            <div class="burg-rating-dist">
              <div v-for="i in 5" :key="i" class="burg-rrow">
                <span class="burg-rrow-star">{{ '★'.repeat(i) }}</span>
                <div class="burg-rrow-bar-wrap">
                  <div class="burg-rrow-bar" :style="{ width: `${ratingPct(i)}%` }"></div>
                </div>
                <span class="burg-rrow-cnt">{{ ratingCount(i) }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Tasting Note Modal (reuse Bordeaux's modal with bourgogne source) -->
    <TastingNoteModal
      v-if="showModal"
      :note="selectedNote"
      :default-aoc-id="selectedNote?.aoc_id || ''"
      :default-chateau-name="selectedNote?.chateau_name || ''"
      source="bourgogne"
      @save="onModalSave"
      @delete="onModalDelete"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import TastingNoteModal from '../TastingNoteModal.vue'

const emit = defineEmits(['back'])
const router = useRouter()

const authUser = computed(() => authState.user)

// ── State ──────────────────────────────────────────────────────────
const notes        = ref([])
const loading      = ref(false)
const mainTab      = ref('notes')
const filterTab    = ref('all')
const searchQuery  = ref('')
const showModal    = ref(false)
const selectedNote = ref(null)

const MAIN_TABS = [
  { key: 'notes',   label: '📝 筆記' },
  { key: 'profile', label: '📊 品味' },
]
const NOTE_TABS = [
  { key: 'all',      label: '全部' },
  { key: 'tried',    label: '已品飲' },
  { key: 'wishlist', label: '想喝清單' },
]

// ── Computed ───────────────────────────────────────────────────────
const filteredNotes = computed(() => {
  let result = notes.value
  if (filterTab.value !== 'all') {
    result = result.filter(n => n.status === filterTab.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n =>
      n.chateau_name?.toLowerCase().includes(q) ||
      n.aoc_id?.toLowerCase().includes(q)
    )
  }
  return result
})

const stats = computed(() => ({
  tried:    notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  aocs:     new Set(notes.value.map(n => n.aoc_id)).size,
  vintages: new Set(notes.value.map(n => n.vintage).filter(Boolean)).size,
}))

const topAromas = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 })
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 16)
})

const vintageDist = computed(() => {
  const map = {}
  notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 })
  return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 10)
})

const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))

const ratingCount = (star) => notes.value.filter(n => n.rating === star).length
const ratingPct   = (star) => {
  const total = notes.value.filter(n => n.rating).length
  return total ? Math.round(ratingCount(star) / total * 100) : 0
}

// ── Helpers ────────────────────────────────────────────────────────
const fmtAoc = (aocId) => aocId?.replace(/_AOC$/i, '').replace(/_/g, ' ') || ''

// ── Data ───────────────────────────────────────────────────────────
const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes')
    .select('*')
    .eq('user_id', authUser.value.id)
    .eq('source', 'bourgogne')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入筆記失敗:', error.message)
  notes.value = data || []
  loading.value = false
}

// ── Modal ──────────────────────────────────────────────────────────
const openNote = (note) => { selectedNote.value = note; showModal.value = true }
const openNewNote = () => { selectedNote.value = null; showModal.value = true }
const onModalSave = async () => { showModal.value = false; await loadNotes() }
const onModalDelete = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
/* ── 整體背景 ──────────────────────────────────────────────── */
.burg-nb-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #f9f0ff 0%, #fff4f8 50%, #faf5ff 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── Header ────────────────────────────────────────────────── */
.burg-nb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #4a1e5e, #6b2d8b);
  color: white;
}
.burg-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.burg-nb-back, .burg-nb-add {
  background: rgba(255,255,255,0.18);
  border: none; color: white;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s;
}
.burg-nb-back:hover, .burg-nb-add:hover { background: rgba(255,255,255,0.28); }
.burg-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── 未登入提示 ────────────────────────────────────────────── */
.burg-nb-login-hint {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 0.9rem 1.5rem;
  background: #fff8e7; border-bottom: 1px solid #fcd34d;
  font-size: 0.9rem; color: #92400e;
}
.burg-nb-login-hint a { color: #6d28d9; font-weight: 700; cursor: pointer; text-decoration: underline; }

/* ── Stats bar ─────────────────────────────────────────────── */
.burg-nb-stats {
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; background: white; border-bottom: 1px solid #ede9fe;
}
.burg-stat {
  display: flex; flex-direction: column; align-items: center;
  padding: 0 1.5rem;
}
.burg-stat-num { font-size: 1.6rem; font-weight: 800; color: #4a1e5e; line-height: 1; }
.burg-stat-lbl { font-size: 0.72rem; color: #9ca3af; margin-top: 3px; }
.burg-stat-div { width: 1px; height: 36px; background: #ede9fe; }

/* ── 主選項卡 ──────────────────────────────────────────────── */
.burg-nb-main-tabs {
  display: flex; border-bottom: 2px solid #ede9fe;
  background: white;
}
.burg-nb-tab {
  flex: 1; padding: 0.85rem 1rem;
  border: none; background: none;
  font-size: 0.9rem; font-weight: 600; color: #9ca3af; cursor: pointer;
  transition: color 0.2s;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
}
.burg-nb-tab.active { color: #4a1e5e; border-bottom-color: #4a1e5e; }

/* ── 篩選列 ────────────────────────────────────────────────── */
.burg-nb-filters {
  display: flex; align-items: center; gap: 8px;
  padding: 0.75rem 1.2rem;
  background: white; border-bottom: 1px solid #ede9fe;
  flex-wrap: wrap;
}
.burg-filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1.5px solid #ede9fe; background: white;
  font-size: 0.82rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s;
}
.burg-filter-btn.active { background: #4a1e5e; color: white; border-color: #4a1e5e; }
.burg-search-wrap { flex: 1; min-width: 160px; }
.burg-search {
  width: 100%; padding: 6px 12px; border: 1.5px solid #ede9fe;
  border-radius: 20px; font-size: 0.85rem; outline: none;
  transition: border-color 0.2s;
}
.burg-search:focus { border-color: #6d28d9; }

/* ── Empty / Loading ───────────────────────────────────────── */
.burg-nb-empty {
  display: flex; flex-direction: column; align-items: center;
  padding: 4rem 2rem; text-align: center; color: #9ca3af;
}
.burg-empty-icon { font-size: 3rem; margin-bottom: 0.75rem; }
.burg-empty-msg { font-size: 0.95rem; }
.burg-loading-spin {
  width: 36px; height: 36px;
  border: 3px solid #ede9fe;
  border-top-color: #6d28d9;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin-bottom: 1rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Notes grid ────────────────────────────────────────────── */
.burg-nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem; padding: 1.2rem;
}
.burg-nb-card {
  background: white;
  border: 1px solid #ede9fe;
  border-radius: 16px;
  padding: 1.1rem 1.2rem 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(74,30,94,0.06);
}
.burg-nb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(74,30,94,0.14);
  border-color: #c084fc;
}
.burg-card-top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 0.5rem;
}
.burg-status-badge {
  font-size: 0.75rem; font-weight: 700;
  padding: 2px 10px; border-radius: 20px;
}
.burg-status-badge.tried    { background: #ede9fe; color: #4a1e5e; }
.burg-status-badge.wishlist { background: #fce7f3; color: #9d174d; }
.burg-vintage-tag {
  font-size: 0.78rem; color: #6b7280;
  background: #f3f4f6; padding: 2px 8px; border-radius: 8px;
}
.burg-card-name { font-size: 1rem; font-weight: 700; color: #1f2937; margin: 0 0 3px; }
.burg-card-aoc  { font-size: 0.8rem; color: #6b7280; margin: 0 0 6px; }
.burg-card-stars { display: flex; gap: 1px; margin-bottom: 6px; }
.burg-star      { font-size: 1rem; color: #d1d5db; }
.burg-star.filled { color: #eab308; }
.burg-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.burg-tag       { font-size: 0.72rem; background: #f3e8ff; color: #6d28d9; padding: 2px 8px; border-radius: 10px; }
.burg-tag-more  { font-size: 0.72rem; color: #9ca3af; }
.burg-card-notes { font-size: 0.8rem; color: #6b7280; margin: 0; line-height: 1.5; }

/* ── 品味分析 ──────────────────────────────────────────────── */
.burg-nb-scroll { padding: 1.2rem; }
.burg-profile-panel {
  background: white; border-radius: 16px; padding: 1.5rem;
  border: 1px solid #ede9fe;
  box-shadow: 0 2px 12px rgba(74,30,94,0.06);
}
.burg-profile-title { font-size: 1.1rem; font-weight: 700; color: #1f2937; margin: 0 0 1.2rem; }
.burg-profile-hint { color: #9ca3af; text-align: center; padding: 2rem 0; }
.burg-profile-section { margin-bottom: 1.5rem; }
.burg-profile-section h4 { font-size: 0.9rem; font-weight: 700; color: #4a1e5e; margin: 0 0 0.75rem; }
.burg-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.burg-cloud-tag {
  background: #f3e8ff; color: #6d28d9;
  padding: 4px 12px; border-radius: 20px; cursor: default;
  transition: opacity 0.2s;
}
.burg-cloud-tag small { color: #a78bfa; font-size: 0.7em; }
.burg-vintage-list, .burg-rating-dist { display: flex; flex-direction: column; gap: 8px; }
.burg-vrow, .burg-rrow {
  display: flex; align-items: center; gap: 10px;
}
.burg-vrow-yr { min-width: 44px; font-size: 0.82rem; font-weight: 600; color: #374151; }
.burg-rrow-star { min-width: 60px; font-size: 0.85rem; color: #eab308; }
.burg-vrow-bar-wrap, .burg-rrow-bar-wrap {
  flex: 1; height: 8px; background: #ede9fe; border-radius: 999px; overflow: hidden;
}
.burg-vrow-bar { height: 100%; background: linear-gradient(90deg, #8b5cf6, #6d28d9); border-radius: 999px; }
.burg-rrow-bar { height: 100%; background: linear-gradient(90deg, #eab308, #d97706); border-radius: 999px; }
.burg-vrow-cnt, .burg-rrow-cnt {
  min-width: 24px; text-align: right;
  font-size: 0.8rem; font-weight: 600; color: #6b7280;
}

/* ── RWD ───────────────────────────────────────────────────── */
@media (max-width: 600px) {
  .burg-nb-grid { grid-template-columns: 1fr; padding: 0.75rem; }
  .burg-stat { padding: 0 0.8rem; }
}
</style>
