<template>
  <div class="notebook-page">
    <!-- Header bar -->
    <div class="nb-header">
      <button class="nb-back-btn" @click="emit('back')">
        <span>←</span> 返回
      </button>
      <h1 class="nb-title">📔 品飲筆記本</h1>
      <button class="nb-add-btn" @click="openNewNote">
        <span>+</span> 新增
      </button>
    </div>

    <!-- Stats bar -->
    <div class="nb-stats-bar">
      <div class="nb-stat">
        <span class="nb-stat-num">{{ stats.tried }}</span>
        <span class="nb-stat-label">已品飲</span>
      </div>
      <div class="nb-stat-divider" />
      <div class="nb-stat">
        <span class="nb-stat-num">{{ stats.wishlist }}</span>
        <span class="nb-stat-label">想喝清單</span>
      </div>
      <div class="nb-stat-divider" />
      <div class="nb-stat">
        <span class="nb-stat-num">{{ stats.aocs }}</span>
        <span class="nb-stat-label">產區涵蓋</span>
      </div>
      <div class="nb-stat-divider" />
      <div class="nb-stat">
        <span class="nb-stat-num">{{ stats.vintages }}</span>
        <span class="nb-stat-label">年份記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['nb-main-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 (notes tab) -->
    <template v-if="mainTab === 'notes'">
      <!-- 課程推薦 (C-3) -->
      <CourseRecommendation
        :notes="notes"
        :completed-lessons="completedLessons"
        @go-to-course="onGoToCourse"
      />

      <!-- 筆記篩選 -->
      <div class="nb-filters">
        <button v-for="tab in NOTE_TABS" :key="tab.key"
          :class="['nb-tab', filterTab === tab.key && 'active']"
          @click="filterTab = tab.key">
          {{ tab.label }}
        </button>
        <div class="nb-search-wrap">
          <input v-model="searchQuery" class="nb-search" placeholder="搜尋酒莊或產區…" />
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="nb-empty">
        <div class="nb-loading-spinner" />
        <p>載入中…</p>
      </div>

      <!-- Empty state -->
      <div v-else-if="filteredNotes.length === 0" class="nb-empty">
        <p class="nb-empty-icon">📭</p>
        <p class="nb-empty-msg">
          {{ searchQuery ? '找不到符合的筆記' :
             filterTab === 'tried' ? '尚無品飲記錄' :
             filterTab === 'wishlist' ? '想喝清單為空' : '尚無任何筆記' }}
        </p>
        <p class="nb-empty-hint">前往「探索地圖」，點選酒莊標記後快速記錄</p>
      </div>

      <!-- Notes grid -->
      <div v-else class="nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="nb-card"
          @click="openNote(note)">
          <div class="nb-card-top">
            <span :class="['nb-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.vintage" class="nb-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="nb-card-name">{{ note.chateau_name }}</h3>
          <p class="nb-card-aoc">{{ fmtAoc(note.aoc_id) }}</p>
          <div v-if="note.rating" class="nb-card-stars">
            <span v-for="i in 5" :key="i" :class="['nb-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="nb-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="nb-tag">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="nb-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="nb-card-notes">{{ note.notes.slice(0, 60) }}{{ note.notes.length > 60 ? '…' : '' }}</p>
          <!-- 分享按鈕 -->
          <button class="nb-share-btn" :disabled="sharingNoteId === note.id"
            @click.stop="shareNote(note)">
            {{ sharingNoteId === note.id ? '⏳' : '📤 分享' }}
          </button>
        </div>
      </div>

      <!-- 筆記分享用卡片 (隱藏到畫面外，供截圖用) -->
      <div ref="noteShareEl" class="nb-share-card">
        <div class="nsc-header">
          <div class="nsc-logo">🍷 侍酒師的筆記本</div>
          <div :class="['nsc-status', sharingNote?.status]">
            {{ sharingNote?.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
          </div>
        </div>
        <div class="nsc-name">{{ sharingNote?.chateau_name }}</div>
        <div class="nsc-meta">
          <span class="nsc-aoc">{{ fmtAoc(sharingNote?.aoc_id) }}</span>
          <span v-if="sharingNote?.vintage" class="nsc-vintage">{{ sharingNote?.vintage }}</span>
        </div>
        <div v-if="sharingNote?.rating" class="nsc-stars">
          <span v-for="i in 5" :key="i" :class="['nsc-star', i <= (sharingNote?.rating || 0) && 'filled']">★</span>
        </div>
        <div v-if="sharingNote?.aroma_tags?.length" class="nsc-aromas">
          <span v-for="tag in (sharingNote?.aroma_tags || []).slice(0,6)" :key="tag" class="nsc-atag">{{ tag }}</span>
        </div>
        <div v-if="sharingNote?.notes" class="nsc-text">"{{ (sharingNote?.notes || '').slice(0, 80) }}"</div>
        <div v-if="sharingNote?.tannin" class="nsc-structure">
          <div class="nsc-str-row"><span>單寧</span><div class="nsc-sbar-w"><div class="nsc-sbar" :style="{width: (sharingNote.tannin/5*100)+'%'}" /></div></div>
          <div class="nsc-str-row"><span>酸度</span><div class="nsc-sbar-w"><div class="nsc-sbar" :style="{width: (sharingNote.acidity/5*100)+'%'}" /></div></div>
          <div class="nsc-str-row"><span>酒體</span><div class="nsc-sbar-w"><div class="nsc-sbar" :style="{width: (sharingNote.body/5*100)+'%'}" /></div></div>
        </div>
        <div class="nsc-footer">bordeaux-wine.academy · {{ new Date().toLocaleDateString('zh-TW') }}</div>
      </div>
    </template>

    <!-- ② 集章挑戰 (C-1) -->
    <div v-else-if="mainTab === 'collection'" class="nb-scroll-area">
      <CollectionPanel :notes="notes" />
    </div>

    <!-- ③ 品味分析 (C-2) -->
    <div v-else-if="mainTab === 'profile'" class="nb-scroll-area">
      <TasteProfilePanel :notes="notes" />
    </div>

    <!-- Tasting Note Modal -->
    <TastingNoteModal
      v-if="showModal"
      :note="selectedNote"
      :default-aoc-id="selectedNote?.aoc_id || ''"
      :default-chateau-name="selectedNote?.chateau_name || ''"
      source="bordeaux"
      @save="onModalSave"
      @delete="onModalDelete"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import { globalAchievementManager } from '@/stores/achievementSystem.js'
import TastingNoteModal from '../TastingNoteModal.vue'
import CollectionPanel from '../CollectionPanel.vue'
import TasteProfilePanel from '../TasteProfilePanel.vue'
import CourseRecommendation from '../CourseRecommendation.vue'

defineProps({ deviceInfo: Object })
const emit = defineEmits(['back', 'go-to-course'])

// ── State ─────────────────────────────────────────────────────────
const notes        = ref([])
const loading      = ref(true)
const mainTab      = ref('notes')
const filterTab    = ref('all')
const searchQuery  = ref('')
const showModal    = ref(false)
const selectedNote = ref(null)

// ── Note Share ─────────────────────────────────────────────────────
const noteShareEl   = ref(null)
const sharingNoteId = ref(null)
const sharingNote   = ref(null)

const shareNote = async (note) => {
  sharingNote.value = note
  sharingNoteId.value = note.id
  await nextTick()
  try {
    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(noteShareEl.value, {
      scale: 2, useCORS: true, backgroundColor: '#FFF8F5',
      logging: false, scrollX: 0, scrollY: 0,
    })
    const blob = await new Promise(r => canvas.toBlob(r, 'image/png'))
    const file = new File([blob], `${note.chateau_name}-tasting.png`, { type: 'image/png' })
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: note.chateau_name, text: `我的品飲筆記：${note.chateau_name}`, files: [file] })
    } else {
      const url = URL.createObjectURL(blob)
      const a = Object.assign(document.createElement('a'), { href: url, download: `${note.chateau_name}.png` })
      document.body.appendChild(a); a.click(); document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 3000)
    }
  } catch(e) { if (e?.name !== 'AbortError') console.error(e) }
  finally { sharingNoteId.value = null }
}

// 已完成課程（從 learningStore 讀取，傳給 CourseRecommendation）
const completedLessons = computed(() => {
  try {
    const raw = localStorage.getItem('learningProgress')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    // learningStore 格式: { completedLessons: ['l1-1', ...] } or nested per user
    return parsed?.completedLessons || []
  } catch {
    return []
  }
})

const MAIN_TABS = [
  { key: 'notes',      label: '📝 筆記' },
  { key: 'collection', label: '🏆 集章' },
  { key: 'profile',    label: '📊 品味' },
]

const NOTE_TABS = [
  { key: 'all',      label: '全部' },
  { key: 'tried',    label: '已品飲' },
  { key: 'wishlist', label: '想喝清單' },
]

// ── Computed ──────────────────────────────────────────────────────
const filteredNotes = computed(() => {
  let result = notes.value
  if (filterTab.value !== 'all') {
    result = result.filter(n => n.status === filterTab.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n =>
      n.chateau_name.toLowerCase().includes(q) ||
      n.aoc_id.toLowerCase().includes(q)
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

// ── Helpers ───────────────────────────────────────────────────────
const fmtAoc = (aocId) => aocId?.replace(/_AOC$/i, '').replace(/_/g, ' ') || ''

// ── Data loading ──────────────────────────────────────────────────
const loadNotes = async () => {
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes')
    .select('*')
    .eq('user_id', authState.user.id)
    .or('source.eq.bordeaux,source.is.null')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入筆記失敗:', error.message)
  notes.value = data || []
  loading.value = false
}

// ── Achievement check ─────────────────────────────────────────────
const syncAchievements = () => {
  const tried    = notes.value.filter(n => n.status === 'tried')
  const wishlist = notes.value.filter(n => n.status === 'wishlist')
  globalAchievementManager.updateStats({
    tastingCount:    tried.length,
    wishlistCount:   wishlist.length,
    tastingVintages: new Set(tried.map(n => n.vintage).filter(Boolean)).size,
    tastingAOCs:     new Set(tried.map(n => n.aoc_id)).size,
  })
}

// ── Modal handlers ────────────────────────────────────────────────
const openNote = (note) => {
  selectedNote.value = note
  showModal.value = true
}

const openNewNote = () => {
  selectedNote.value = null
  showModal.value = true
}

const onModalSave = async () => {
  showModal.value = false
  await loadNotes()
  syncAchievements()
}

const onModalDelete = async () => {
  showModal.value = false
  await loadNotes()
  syncAchievements()
}

// ── C-3 課程跳轉 ──────────────────────────────────────────────────
const onGoToCourse = ({ level }) => {
  emit('go-to-course', level)
}

onMounted(loadNotes)
</script>

<style scoped>
.notebook-page {
  min-height: 100vh;
  background: #FAFAF8;
  display: flex;
  flex-direction: column;
}

/* Header */
.nb-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  background: #8B0000;
  color: white;
}
.nb-title {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  color: white;
}
.nb-back-btn, .nb-add-btn {
  background: rgba(255,255,255,0.18);
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.nb-back-btn:hover, .nb-add-btn:hover {
  background: rgba(255,255,255,0.28);
}

/* Stats */
.nb-stats-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: white;
  border-bottom: 1px solid #efefef;
  padding: 0.8rem 1rem;
}
.nb-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.2rem;
}
.nb-stat-num {
  font-size: 1.4rem;
  font-weight: 800;
  color: #8B0000;
  line-height: 1;
}
.nb-stat-label {
  font-size: 0.72rem;
  color: #888;
  margin-top: 2px;
}
.nb-stat-divider {
  width: 1px;
  height: 32px;
  background: #e5e7eb;
}

/* Filters */
.nb-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1.2rem;
  background: white;
  border-bottom: 1px solid #efefef;
  flex-wrap: wrap;
}
.nb-tab {
  padding: 5px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1.5px solid #ddd;
  border-radius: 20px;
  background: #f9f9f9;
  color: #666;
  cursor: pointer;
  transition: all 0.15s;
}
.nb-tab.active {
  background: #8B0000;
  border-color: #8B0000;
  color: white;
}
.nb-search-wrap { margin-left: auto; }
.nb-search {
  border: 1.5px solid #ddd;
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 0.82rem;
  width: 160px;
  outline: none;
}
.nb-search:focus { border-color: #8B0000; }

/* Empty / Loading */
.nb-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  color: #999;
  gap: 0.5rem;
}
.nb-empty-icon { font-size: 3rem; margin: 0; }
.nb-empty-msg { font-size: 1rem; font-weight: 600; margin: 0; }
.nb-empty-hint { font-size: 0.82rem; text-align: center; margin: 0; }
.nb-loading-spinner {
  width: 32px; height: 32px;
  border: 3px solid #f0f0f0;
  border-top-color: #8B0000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Cards grid */
.nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  padding: 1.2rem;
}

.nb-card {
  background: white;
  border-radius: 16px;
  padding: 1rem 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid transparent;
}
.nb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  border-color: #8B0000;
}

.nb-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.nb-status-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 20px;
}
.nb-status-badge.tried {
  background: #DCFCE7;
  color: #16a34a;
}
.nb-status-badge.wishlist {
  background: #FEE2E2;
  color: #dc2626;
}
.nb-vintage-tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: #8B0000;
  background: #FFF5F5;
  padding: 2px 8px;
  border-radius: 10px;
}

.nb-card-name {
  margin: 0 0 2px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}
.nb-card-aoc {
  margin: 0 0 6px;
  font-size: 0.75rem;
  color: #888;
}
.nb-card-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 5px;
}
.nb-star { font-size: 0.9rem; color: #ddd; }
.nb-star.filled { color: #F59E0B; }

.nb-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 5px;
}
.nb-tag {
  font-size: 0.7rem;
  background: #FFF5F5;
  color: #8B0000;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid #fee2e2;
}
.nb-tag-more {
  font-size: 0.7rem;
  color: #aaa;
  padding: 2px 6px;
}

.nb-card-notes {
  margin: 0;
  font-size: 0.75rem;
  color: #666;
  line-height: 1.4;
}

/* Mobile */
@media (max-width: 500px) {
  .nb-grid { grid-template-columns: 1fr; }
  .nb-stat { padding: 0 0.8rem; }
  .nb-search-wrap { width: 100%; }
  .nb-search { width: 100%; box-sizing: border-box; }
}

/* ── Note share button ─────────────────────────────────────── */
.nb-share-btn {
  display: block;
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.35rem 0;
  border: 1px solid #c8a96e;
  border-radius: 8px;
  background: transparent;
  color: #8b6914;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.15s;
}
.nb-share-btn:hover { background: #fdf3e0; }
.nb-share-btn:disabled { opacity: 0.5; cursor: default; }

/* ── Note share card (hidden off-screen for html2canvas) ───── */
.nb-share-card {
  position: fixed; left: -9999px; top: 0; z-index: -1;
  width: 320px;
  background: #FFF8F5;
  border-radius: 16px;
  padding: 1.25rem 1.25rem 1rem;
  font-family: 'Noto Serif TC', serif;
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
}
.nsc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.9rem; }
.nsc-logo { font-size: 0.7rem; color: #8b6914; font-weight: 600; }
.nsc-status { font-size: 0.65rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 600; }
.nsc-status.tried { background: #e8f5e9; color: #2e7d32; }
.nsc-status.wishlist { background: #fce4ec; color: #c62828; }
.nsc-name { font-size: 1.15rem; font-weight: 700; color: #2d1a0e; margin-bottom: 0.3rem; }
.nsc-meta { display: flex; gap: 0.6rem; margin-bottom: 0.5rem; }
.nsc-aoc { font-size: 0.72rem; color: #8b1a1a; background: #fff0f0; padding: 0.15rem 0.5rem; border-radius: 10px; }
.nsc-vintage { font-size: 0.72rem; color: #555; background: #f0f0f0; padding: 0.15rem 0.5rem; border-radius: 10px; }
.nsc-stars { margin-bottom: 0.5rem; }
.nsc-star { font-size: 1.2rem; color: #ddd; }
.nsc-star.filled { color: #f5a623; }
.nsc-aromas { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 0.6rem; }
.nsc-atag { font-size: 0.68rem; background: #f3e8d6; color: #7b4a1a; padding: 0.15rem 0.5rem; border-radius: 10px; }
.nsc-text { font-size: 0.78rem; color: #555; font-style: italic; line-height: 1.5; margin-bottom: 0.7rem; border-left: 3px solid #c8a96e; padding-left: 0.6rem; }
.nsc-structure { margin-bottom: 0.7rem; }
.nsc-str-row { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.3rem; font-size: 0.68rem; color: #666; }
.nsc-str-row span { width: 2em; }
.nsc-sbar-w { flex: 1; height: 6px; background: #eee; border-radius: 3px; overflow: hidden; }
.nsc-sbar { height: 100%; background: linear-gradient(90deg, #8b1a1a, #c8a96e); border-radius: 3px; }
.nsc-footer { text-align: center; font-size: 0.6rem; color: #aaa; margin-top: 0.3rem; }


.nb-main-tabs {
  display: flex;
  background: white;
  border-bottom: 2px solid #f0f0f0;
  padding: 0 1rem;
  gap: 0;
}
.nb-main-tab {
  flex: 1;
  padding: 10px 4px;
  font-size: 0.82rem;
  font-weight: 700;
  border: none;
  background: transparent;
  color: #999;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: all 0.15s;
}
.nb-main-tab.active {
  color: #8B0000;
  border-bottom-color: #8B0000;
}
.nb-main-tab:hover:not(.active) {
  color: #555;
  background: #FAFAFA;
}

/* 滾動容器 (集章/品味 tab) */
.nb-scroll-area {
  flex: 1;
  overflow-y: auto;
}
</style>
