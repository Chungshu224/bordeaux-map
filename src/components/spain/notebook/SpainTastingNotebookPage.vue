<template>
  <div class="sp-nb-page">

    <!-- Header -->
    <div class="sp-nb-header">
      <button class="sp-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="sp-nb-title">📔 西班牙品飲筆記</h1>
      <button class="sp-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="sp-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用西班牙品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="sp-nb-stats">
      <div class="sp-stat">
        <span class="sp-stat-num">{{ stats.tried }}</span>
        <span class="sp-stat-lbl">已品飲</span>
      </div>
      <div class="sp-stat-div" />
      <div class="sp-stat">
        <span class="sp-stat-num">{{ stats.wishlist }}</span>
        <span class="sp-stat-lbl">想喝清單</span>
      </div>
      <div class="sp-stat-div" />
      <div class="sp-stat">
        <span class="sp-stat-num">{{ stats.regions }}</span>
        <span class="sp-stat-lbl">產區涵蓋</span>
      </div>
      <div class="sp-stat-div" />
      <div class="sp-stat">
        <span class="sp-stat-num">{{ stats.grapes }}</span>
        <span class="sp-stat-lbl">品種記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="sp-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['sp-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <!-- 篩選列 -->
      <div class="sp-nb-filters">
        <!-- 狀態篩選 -->
        <div class="sp-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key"
            :class="['sp-filter-btn', filterStatus === tab.key && 'active']"
            @click="filterStatus = tab.key">
            {{ tab.label }}
          </button>
        </div>
        <!-- 酒款類型篩選 -->
        <div class="sp-filter-row type-row">
          <button
            :class="['sp-type-filter', filterType === 'all' && 'all-active']"
            @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['sp-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <!-- 搜尋 -->
        <div class="sp-search-wrap">
          <input v-model="searchQuery" class="sp-search"
            placeholder="搜尋生產者、品種、DO 產區…" />
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="sp-nb-empty">
        <div class="sp-loading-spin" />
        <p>載入中…</p>
      </div>

      <!-- Empty -->
      <div v-else-if="filteredNotes.length === 0" class="sp-nb-empty">
        <p class="sp-empty-icon">📭</p>
        <p class="sp-empty-msg">
          {{ !authUser ? '請登入以查看筆記' :
             searchQuery ? '找不到符合的筆記' :
             filterStatus === 'tried' ? '尚無品飲記錄，點擊右上角＋新增' :
             filterStatus === 'wishlist' ? '想喝清單為空' :
             filterType !== 'all' ? `尚無${WINE_TYPES.find(t=>t.id===filterType)?.short}記錄` :
             '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <!-- Notes grid -->
      <div v-else class="sp-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="sp-nb-card"
          @click="openNote(note)">
          <!-- 卡片頂部 -->
          <div class="sp-card-top">
            <span :class="['sp-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.wine_type" class="sp-wine-type-badge"
              :style="{ background: wineTypeColor(note.wine_type) }">
              {{ wineTypeEmoji(note.wine_type) }}
            </span>
            <span v-if="note.vintage" class="sp-vintage-tag">{{ note.vintage }}</span>
          </div>
          <!-- 主要資訊 -->
          <h3 class="sp-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="sp-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="sp-card-doc">{{ fmtDoc(note) }}</p>
          <!-- 評分 -->
          <div v-if="note.rating" class="sp-card-stars">
            <span v-for="i in 5" :key="i" :class="['sp-star', i <= note.rating && 'filled']">★</span>
          </div>
          <!-- 香氣標籤 -->
          <div v-if="note.aroma_tags?.length" class="sp-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="sp-tag"
              :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="sp-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <!-- 筆記預覽 -->
          <p v-if="note.notes" class="sp-card-notes">
            {{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}
          </p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="sp-nb-scroll">
      <div class="sp-profile-panel">
        <template v-if="notes.length === 0">
          <p class="sp-profile-hint">📊 新增品飲記錄後即可生成西班牙酒款品味輪廓</p>
        </template>
        <template v-else>
          <!-- 酒款類型分佈 -->
          <div class="sp-profile-section">
            <h4>🍷 酒款類型分佈</h4>
            <div class="sp-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="sp-type-bar-row">
                <span class="sp-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="sp-type-bar-track">
                  <div class="sp-type-bar-fill"
                    :style="{ width: typePct(t.id) + '%', background: t.color }"></div>
                </div>
                <span class="sp-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>

          <!-- 常見香氣 -->
          <div class="sp-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="sp-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag"
                class="sp-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>

          <!-- 常用品種 -->
          <div class="sp-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="sp-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="sp-grape-row">
                <span class="sp-grape-name">{{ grape }}</span>
                <div class="sp-grape-bar-wrap">
                  <div class="sp-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div>
                </div>
                <span class="sp-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 年份分佈 -->
          <div class="sp-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="sp-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="sp-vrow">
                <span class="sp-vrow-yr">{{ vintage }}</span>
                <div class="sp-vrow-bar-wrap">
                  <div class="sp-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div>
                </div>
                <span class="sp-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 評分分佈 -->
          <div class="sp-profile-section">
            <h4>⭐ 評分分佈</h4>
            <div class="sp-rating-dist">
              <div v-for="i in 5" :key="i" class="sp-rrow">
                <span class="sp-rrow-star">{{ '★'.repeat(i) }}</span>
                <div class="sp-rrow-bar-wrap">
                  <div class="sp-rrow-bar" :style="{ width: ratingPct(i) + '%' }"></div>
                </div>
                <span class="sp-rrow-cnt">{{ ratingCount(i) }}</span>
              </div>
            </div>
          </div>

          <!-- 常見產區 -->
          <div class="sp-profile-section">
            <h4>🗺 常見 DO / 產區</h4>
            <div class="sp-grape-list">
              <div v-for="[doc, cnt] in topDocs" :key="doc" class="sp-grape-row">
                <span class="sp-grape-name">{{ doc }}</span>
                <div class="sp-grape-bar-wrap">
                  <div class="sp-grape-bar" :style="{ width: `${(cnt / maxDocCount) * 100}%`, background: '#c0392b' }"></div>
                </div>
                <span class="sp-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Tasting Note Modal -->
    <SpainTastingNoteModal
      v-if="showModal"
      :note="selectedNote"
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
import SpainTastingNoteModal from './SpainTastingNoteModal.vue'

const emit = defineEmits(['back'])
const router = useRouter()

const authUser = computed(() => authState.user)

// ── State ──────────────────────────────────────────────────────────
const notes        = ref([])
const loading      = ref(false)
const mainTab      = ref('notes')
const filterStatus = ref('all')
const filterType   = ref('all')
const searchQuery  = ref('')
const showModal    = ref(false)
const selectedNote = ref(null)

const MAIN_TABS = [
  { key: 'notes',   label: '📝 筆記' },
  { key: 'profile', label: '📊 品味' },
]
const STATUS_TABS = [
  { key: 'all',      label: '全部' },
  { key: 'tried',    label: '已品飲' },
  { key: 'wishlist', label: '想喝清單' },
]
const WINE_TYPES = [
  { id: 'tinto',         emoji: '🍷', short: '紅酒',    color: '#8B1A1A' },
  { id: 'blanco',        emoji: '🥂', short: '白酒',    color: '#B8860B' },
  { id: 'rosado',        emoji: '🌸', short: '粉紅',    color: '#D45E8C' },
  { id: 'cava',          emoji: '✨', short: 'Cava',    color: '#5E8A6E' },
  { id: 'vino_generoso', emoji: '🏺', short: '雪莉',    color: '#7B5C1E' },
  { id: 'dulce',         emoji: '🍯', short: '甜酒',    color: '#C07F00' },
  { id: 'otro',          emoji: '🍾', short: '其他',    color: '#6B7280' },
]

// ── Computed ──────────────────────────────────────────────────────
const filteredNotes = computed(() => {
  let result = notes.value
  if (filterStatus.value !== 'all') {
    result = result.filter(n => n.status === filterStatus.value)
  }
  if (filterType.value !== 'all') {
    result = result.filter(n => n.wine_type === filterType.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n =>
      n.chateau_name?.toLowerCase().includes(q) ||
      n.aoc_id?.toLowerCase().includes(q) ||
      n.grape_variety?.toLowerCase().includes(q) ||
      n.it_region?.toLowerCase().includes(q)
    )
  }
  return result
})

const stats = computed(() => ({
  tried:    notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  regions:  new Set(notes.value.map(n => n.it_region || n.aoc_id).filter(Boolean)).size,
  grapes:   new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size,
}))

const topAromas = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 })
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18)
})

const topGrapes = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    if (n.grape_variety?.trim()) {
      const key = n.grape_variety.trim()
      map[key] = (map[key] || 0) + 1
    }
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10)
})
const maxGrapeCount = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))

const topDocs = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    const key = n.aoc_id?.trim()
    if (key && key !== 'España') map[key] = (map[key] || 0) + 1
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10)
})
const maxDocCount = computed(() => Math.max(1, ...topDocs.value.map(e => e[1])))

const vintageDist = computed(() => {
  const map = {}
  notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 })
  return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 12)
})
const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))

const typeCount = (typeId) => notes.value.filter(n => n.wine_type === typeId).length
const typePct   = (typeId) => {
  const total = notes.value.length
  return total > 0 ? Math.round(typeCount(typeId) / total * 100) : 0
}

const ratingCount = (star) => notes.value.filter(n => n.rating === star).length
const ratingPct   = (star) => {
  const total = notes.value.filter(n => n.rating).length
  return total > 0 ? Math.round(ratingCount(star) / total * 100) : 0
}

// ── Helpers ────────────────────────────────────────────────────────
const wineTypeColor = (typeId) =>
  WINE_TYPES.find(t => t.id === typeId)?.color || '#6B7280'
const wineTypeEmoji = (typeId) =>
  WINE_TYPES.find(t => t.id === typeId)?.emoji || '🍾'
const fmtDoc = (note) => {
  const parts = []
  if (note.aoc_id && note.aoc_id !== 'España') parts.push(note.aoc_id)
  if (note.it_region) parts.push(note.it_region.split(' ')[0])
  return parts.join(' · ') || note.aoc_id || ''
}

// ── Data ───────────────────────────────────────────────────────────
const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes')
    .select('*')
    .eq('user_id', authUser.value.id)
    .eq('source', 'spain')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入西班牙筆記失敗:', error.message)
  notes.value = data || []
  loading.value = false
}

// ── Modal ──────────────────────────────────────────────────────────
const openNote    = (note) => { selectedNote.value = note; showModal.value = true }
const openNewNote = ()     => { selectedNote.value = null; showModal.value = true }
const onModalSave   = async () => { showModal.value = false; await loadNotes() }
const onModalDelete = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
/* ── 整體背景 ────────────────────────────────────────────── */
.sp-nb-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #fef9f0 0%, #fff8f5 40%, #fdf4eb 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── Header ────────────────────────────────────────────── */
.sp-nb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #c0392b 0%, #e67e22 100%);
  color: white;
}
.sp-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.sp-nb-back, .sp-nb-add {
  background: rgba(255,255,255,0.18);
  border: none; color: white;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s;
}
.sp-nb-back:hover, .sp-nb-add:hover { background: rgba(255,255,255,0.28); }
.sp-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── 未登入提示 ──────────────────────────────────────────── */
.sp-nb-login-hint {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 0.9rem 1.5rem;
  background: #fff8e7; border-bottom: 1px solid #fcd34d;
  font-size: 0.9rem; color: #92400e;
}
.sp-nb-login-hint a { color: #c0392b; font-weight: 700; cursor: pointer; text-decoration: underline; }

/* ── Stats bar ──────────────────────────────────────────── */
.sp-nb-stats {
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; background: white; border-bottom: 1px solid #fde8d8;
}
.sp-stat { display: flex; flex-direction: column; align-items: center; padding: 0 1.4rem; }
.sp-stat-num { font-size: 1.6rem; font-weight: 800; color: #c0392b; line-height: 1; }
.sp-stat-lbl { font-size: 0.72rem; color: #9ca3af; margin-top: 3px; }
.sp-stat-div { width: 1px; height: 36px; background: #fde8d8; }

/* ── 主選項卡 ────────────────────────────────────────────── */
.sp-nb-main-tabs {
  display: flex; border-bottom: 2px solid #fde8d8; background: white;
}
.sp-nb-tab {
  flex: 1; padding: 0.85rem 1rem;
  border: none; background: none;
  font-size: 0.9rem; font-weight: 600; color: #9ca3af; cursor: pointer;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
  transition: color 0.2s;
}
.sp-nb-tab.active { color: #c0392b; border-bottom-color: #c0392b; }

/* ── 篩選列 ─────────────────────────────────────────────── */
.sp-nb-filters {
  display: flex; flex-direction: column; gap: 8px;
  padding: 0.75rem 1.2rem;
  background: white; border-bottom: 1px solid #fde8d8;
}
.sp-filter-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.sp-filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1.5px solid #fde8d8; background: white;
  font-size: 0.82rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s;
}
.sp-filter-btn.active { background: #c0392b; color: white; border-color: #c0392b; }

.type-row { flex-wrap: wrap; }
.sp-type-filter {
  padding: 4px 11px; border-radius: 20px;
  border: 1.5px solid #fde8d8; background: white;
  font-size: 0.78rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s; white-space: nowrap;
}
.sp-type-filter.all-active { background: #374151; color: white; border-color: #374151; }
.sp-type-filter.type-active { color: white; font-weight: 700; }

.sp-search-wrap { flex: 1; }
.sp-search {
  width: 100%; padding: 6px 12px;
  border: 1.5px solid #fde8d8; border-radius: 20px;
  font-size: 0.85rem; outline: none; box-sizing: border-box;
}
.sp-search:focus { border-color: #c0392b; }

/* ── Empty / Loading ──────────────────────────────────────── */
.sp-nb-empty {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 3rem 1.5rem; color: #9ca3af; text-align: center;
}
.sp-empty-icon { font-size: 3rem; margin: 0 0 0.5rem; }
.sp-empty-msg { font-size: 0.92rem; }
.sp-loading-spin {
  width: 36px; height: 36px;
  border: 3px solid #fde8d8; border-top-color: #c0392b;
  border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 0.8rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Notes grid ───────────────────────────────────────────── */
.sp-nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  padding: 1.2rem 1.2rem 2rem;
}

.sp-nb-card {
  background: white; border-radius: 14px;
  padding: 14px; cursor: pointer;
  border: 1.5px solid transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.2s;
}
.sp-nb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-color: #c0392b;
}

.sp-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.sp-status-badge {
  font-size: 0.7rem; font-weight: 700; border-radius: 20px; padding: 2px 8px;
}
.sp-status-badge.tried    { background: #dcfce7; color: #16a34a; }
.sp-status-badge.wishlist { background: #fee2e2; color: #dc2626; }
.sp-wine-type-badge {
  font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.sp-vintage-tag { font-size: 0.7rem; color: #9ca3af; margin-left: auto; }
.sp-card-producer { margin: 0 0 4px; font-size: 0.92rem; font-weight: 700; color: #1a1a1a; }
.sp-card-grape    { margin: 0 0 3px; font-size: 0.78rem; color: #555; }
.sp-card-doc      { margin: 0 0 8px; font-size: 0.78rem; color: #c0392b; font-weight: 600; }

.sp-card-stars { display: flex; gap: 2px; margin-bottom: 8px; }
.sp-star { font-size: 1rem; color: #e5e7eb; }
.sp-star.filled { color: #F59E0B; }

.sp-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
.sp-tag {
  font-size: 0.7rem; padding: 2px 8px; border-radius: 20px;
  border: 1.5px solid #e5e7eb; color: #555; background: #fafafa;
}
.sp-tag-more { font-size: 0.7rem; color: #9ca3af; padding: 2px 4px; }
.sp-card-notes { margin: 0; font-size: 0.75rem; color: #9ca3af; line-height: 1.4; }

/* ── Profile panel ────────────────────────────────────────── */
.sp-nb-scroll { flex: 1; overflow-y: auto; }
.sp-profile-panel { padding: 1.3rem; display: flex; flex-direction: column; gap: 1.5rem; }
.sp-profile-hint { text-align: center; color: #9ca3af; padding: 3rem; font-size: 0.9rem; }
.sp-profile-section h4 { margin: 0 0 0.8rem; font-size: 0.85rem; font-weight: 700; color: #555; }

.sp-type-bars { display: flex; flex-direction: column; gap: 8px; }
.sp-type-bar-row { display: flex; align-items: center; gap: 10px; }
.sp-type-bar-label { min-width: 72px; font-size: 0.76rem; color: #555; }
.sp-type-bar-track { flex: 1; height: 8px; background: #f4f4f5; border-radius: 4px; overflow: hidden; }
.sp-type-bar-fill  { height: 100%; border-radius: 4px; transition: width 0.4s; }
.sp-type-bar-cnt   { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.sp-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.sp-cloud-tag { color: #c0392b; font-weight: 600; cursor: default; }
.sp-cloud-tag small { color: #9ca3af; font-size: 0.7em; }

.sp-grape-list { display: flex; flex-direction: column; gap: 7px; }
.sp-grape-row  { display: flex; align-items: center; gap: 8px; }
.sp-grape-name { min-width: 110px; font-size: 0.8rem; color: #444; }
.sp-grape-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.sp-grape-bar  { height: 100%; background: #c0392b; border-radius: 3px; transition: width 0.4s; }
.sp-grape-cnt  { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.sp-vintage-list { display: flex; flex-direction: column; gap: 7px; }
.sp-vrow { display: flex; align-items: center; gap: 8px; }
.sp-vrow-yr { min-width: 40px; font-size: 0.8rem; color: #444; font-weight: 600; }
.sp-vrow-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.sp-vrow-bar { height: 100%; background: #e67e22; border-radius: 3px; transition: width 0.4s; }
.sp-vrow-cnt { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.sp-rating-dist { display: flex; flex-direction: column; gap: 7px; }
.sp-rrow { display: flex; align-items: center; gap: 8px; }
.sp-rrow-star { min-width: 62px; font-size: 0.76rem; color: #F59E0B; letter-spacing: 1px; }
.sp-rrow-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.sp-rrow-bar { height: 100%; background: #F59E0B; border-radius: 3px; transition: width 0.4s; }
.sp-rrow-cnt { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }
</style>
