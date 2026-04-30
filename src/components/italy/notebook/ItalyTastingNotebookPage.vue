<template>
  <div class="it-nb-page">

    <!-- Header -->
    <div class="it-nb-header">
      <button class="it-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="it-nb-title">📔 品飲筆記本</h1>
      <button class="it-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="it-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="it-nb-stats">
      <div class="it-stat">
        <span class="it-stat-num">{{ stats.tried }}</span>
        <span class="it-stat-lbl">已品飲</span>
      </div>
      <div class="it-stat-div" />
      <div class="it-stat">
        <span class="it-stat-num">{{ stats.wishlist }}</span>
        <span class="it-stat-lbl">想喝清單</span>
      </div>
      <div class="it-stat-div" />
      <div class="it-stat">
        <span class="it-stat-num">{{ stats.regions }}</span>
        <span class="it-stat-lbl">產區涵蓋</span>
      </div>
      <div class="it-stat-div" />
      <div class="it-stat">
        <span class="it-stat-num">{{ stats.grapes }}</span>
        <span class="it-stat-lbl">品種記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="it-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['it-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <!-- 篩選列 -->
      <div class="it-nb-filters">
        <!-- 狀態篩選 -->
        <div class="it-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key"
            :class="['it-filter-btn', filterStatus === tab.key && 'active']"
            @click="filterStatus = tab.key">
            {{ tab.label }}
          </button>
        </div>
        <!-- 酒款類型篩選 -->
        <div class="it-filter-row type-row">
          <button
            :class="['it-type-filter', filterType === 'all' && 'all-active']"
            @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['it-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <!-- 搜尋 -->
        <div class="it-search-wrap">
          <input v-model="searchQuery" class="it-search"
            placeholder="搜尋生產者、品種、產區…" />
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="it-nb-empty">
        <div class="it-loading-spin" />
        <p>載入中…</p>
      </div>

      <!-- Empty -->
      <div v-else-if="filteredNotes.length === 0" class="it-nb-empty">
        <p class="it-empty-icon">📭</p>
        <p class="it-empty-msg">
          {{ !authUser ? '請登入以查看筆記' :
             searchQuery ? '找不到符合的筆記' :
             filterStatus === 'tried' ? '尚無品飲記錄' :
             filterStatus === 'wishlist' ? '想喝清單為空' :
             filterType !== 'all' ? `尚無${WINE_TYPES.find(t=>t.id===filterType)?.short}記錄` :
             '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <!-- Notes grid -->
      <div v-else class="it-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="it-nb-card"
          @click="openNote(note)">
          <!-- 卡片頂部 -->
          <div class="it-card-top">
            <span :class="['it-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.wine_type" class="it-wine-type-badge"
              :style="{ background: wineTypeColor(note.wine_type) }">
              {{ wineTypeEmoji(note.wine_type) }}
            </span>
            <span v-if="note.vintage" class="it-vintage-tag">{{ note.vintage }}</span>
          </div>
          <!-- 主要資訊 -->
          <h3 class="it-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="it-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="it-card-doc">{{ fmtDoc(note) }}</p>
          <!-- 評分 -->
          <div v-if="note.rating" class="it-card-stars">
            <span v-for="i in 5" :key="i" :class="['it-star', i <= note.rating && 'filled']">★</span>
          </div>
          <!-- 香氣標籤 -->
          <div v-if="note.aroma_tags?.length" class="it-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="it-tag"
              :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="it-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <!-- 筆記預覽 -->
          <p v-if="note.notes" class="it-card-notes">
            {{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}
          </p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="it-nb-scroll">
      <div class="it-profile-panel">
        <template v-if="notes.length === 0">
          <p class="it-profile-hint">📊 新增品飲記錄後即可生成義大利酒款品味輪廓</p>
        </template>
        <template v-else>
          <!-- 酒款類型分佈 -->
          <div class="it-profile-section">
            <h4>🍷 酒款類型分佈</h4>
            <div class="it-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="it-type-bar-row">
                <span class="it-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="it-type-bar-track">
                  <div class="it-type-bar-fill"
                    :style="{ width: typePct(t.id) + '%', background: t.color }"></div>
                </div>
                <span class="it-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>

          <!-- 常見香氣 -->
          <div class="it-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="it-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag"
                class="it-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>

          <!-- 常用品種 -->
          <div class="it-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="it-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="it-grape-row">
                <span class="it-grape-name">{{ grape }}</span>
                <div class="it-grape-bar-wrap">
                  <div class="it-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div>
                </div>
                <span class="it-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 年份分佈 -->
          <div class="it-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="it-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="it-vrow">
                <span class="it-vrow-yr">{{ vintage }}</span>
                <div class="it-vrow-bar-wrap">
                  <div class="it-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div>
                </div>
                <span class="it-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 評分分佈 -->
          <div class="it-profile-section">
            <h4>⭐ 評分分佈</h4>
            <div class="it-rating-dist">
              <div v-for="i in 5" :key="i" class="it-rrow">
                <span class="it-rrow-star">{{ '★'.repeat(i) }}</span>
                <div class="it-rrow-bar-wrap">
                  <div class="it-rrow-bar" :style="{ width: ratingPct(i) + '%' }"></div>
                </div>
                <span class="it-rrow-cnt">{{ ratingCount(i) }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Tasting Note Modal -->
    <ItalyTastingNoteModal
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
import ItalyTastingNoteModal from './ItalyTastingNoteModal.vue'

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
  { id: 'rosso',    emoji: '🍷', short: '紅酒',   color: '#8B1A1A' },
  { id: 'bianco',   emoji: '🥂', short: '白酒',   color: '#B8860B' },
  { id: 'rosato',   emoji: '🌸', short: '粉紅',   color: '#D45E8C' },
  { id: 'spumante', emoji: '✨', short: '氣泡',   color: '#5E8A6E' },
  { id: 'dolce',    emoji: '🍯', short: '甜酒',   color: '#C07F00' },
  { id: 'passito',  emoji: '🍇', short: '帕薩托', color: '#7D4E57' },
  { id: 'altro',    emoji: '🍾', short: '其他',   color: '#6B7280' },
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
  if (note.aoc_id && note.aoc_id !== 'Italia') parts.push(note.aoc_id)
  if (note.it_region) parts.push(note.it_region.split(' ')[0]) // 取中文部分
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
    .eq('source', 'italy')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入義大利筆記失敗:', error.message)
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
.it-nb-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #fdf6ec 0%, #fff8f0 40%, #f9f4eb 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* ── Header ────────────────────────────────────────────── */
.it-nb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #8B1A1A 0%, #C05A2A 100%);
  color: white;
}
.it-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.it-nb-back, .it-nb-add {
  background: rgba(255,255,255,0.18);
  border: none; color: white;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s;
}
.it-nb-back:hover, .it-nb-add:hover { background: rgba(255,255,255,0.28); }
.it-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }

/* ── 未登入提示 ──────────────────────────────────────────── */
.it-nb-login-hint {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 0.9rem 1.5rem;
  background: #fff8e7; border-bottom: 1px solid #fcd34d;
  font-size: 0.9rem; color: #92400e;
}
.it-nb-login-hint a { color: #8B1A1A; font-weight: 700; cursor: pointer; text-decoration: underline; }

/* ── Stats bar ──────────────────────────────────────────── */
.it-nb-stats {
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; background: white; border-bottom: 1px solid #f0e8d8;
}
.it-stat { display: flex; flex-direction: column; align-items: center; padding: 0 1.4rem; }
.it-stat-num { font-size: 1.6rem; font-weight: 800; color: #8B1A1A; line-height: 1; }
.it-stat-lbl { font-size: 0.72rem; color: #9ca3af; margin-top: 3px; }
.it-stat-div { width: 1px; height: 36px; background: #f0e8d8; }

/* ── 主選項卡 ────────────────────────────────────────────── */
.it-nb-main-tabs {
  display: flex; border-bottom: 2px solid #f0e8d8; background: white;
}
.it-nb-tab {
  flex: 1; padding: 0.85rem 1rem;
  border: none; background: none;
  font-size: 0.9rem; font-weight: 600; color: #9ca3af; cursor: pointer;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
  transition: color 0.2s;
}
.it-nb-tab.active { color: #8B1A1A; border-bottom-color: #8B1A1A; }

/* ── 篩選列 ─────────────────────────────────────────────── */
.it-nb-filters {
  display: flex; flex-direction: column; gap: 8px;
  padding: 0.75rem 1.2rem;
  background: white; border-bottom: 1px solid #f0e8d8;
}
.it-filter-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.it-filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1.5px solid #f0e8d8; background: white;
  font-size: 0.82rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s;
}
.it-filter-btn.active { background: #8B1A1A; color: white; border-color: #8B1A1A; }

.type-row { flex-wrap: wrap; }
.it-type-filter {
  padding: 4px 11px; border-radius: 20px;
  border: 1.5px solid #f0e8d8; background: white;
  font-size: 0.78rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s; white-space: nowrap;
}
.it-type-filter.all-active { background: #374151; color: white; border-color: #374151; }
.it-type-filter.type-active { color: white; font-weight: 700; }

.it-search-wrap { flex: 1; }
.it-search {
  width: 100%; padding: 6px 12px;
  border: 1.5px solid #f0e8d8; border-radius: 20px;
  font-size: 0.85rem; outline: none; box-sizing: border-box;
}
.it-search:focus { border-color: #8B1A1A; }

/* ── Empty / Loading ──────────────────────────────────────── */
.it-nb-empty {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 3rem 1.5rem; color: #9ca3af; text-align: center;
}
.it-empty-icon { font-size: 3rem; margin: 0 0 0.5rem; }
.it-empty-msg { font-size: 0.92rem; }
.it-loading-spin {
  width: 36px; height: 36px;
  border: 3px solid #f0e8d8; border-top-color: #8B1A1A;
  border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 0.8rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Notes grid ───────────────────────────────────────────── */
.it-nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  padding: 1.2rem 1.2rem 2rem;
}

.it-nb-card {
  background: white; border-radius: 14px;
  padding: 14px; cursor: pointer;
  border: 1.5px solid transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.2s;
}
.it-nb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-color: #8B1A1A;
}

.it-card-top {
  display: flex; align-items: center; gap: 6px; margin-bottom: 8px; flex-wrap: wrap;
}
.it-status-badge {
  font-size: 0.7rem; font-weight: 700; padding: 2px 9px; border-radius: 20px;
}
.it-status-badge.tried    { background: #dcfce7; color: #16a34a; }
.it-status-badge.wishlist { background: #fee2e2; color: #dc2626; }
.it-wine-type-badge {
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem;
}
.it-vintage-tag { font-size: 0.78rem; font-weight: 700; color: #8B1A1A; background: #fff5f0; padding: 2px 7px; border-radius: 10px; margin-left: auto; }

.it-card-producer { margin: 0 0 2px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; line-height: 1.3; }
.it-card-grape { margin: 0 0 3px; font-size: 0.75rem; color: #5E8A6E; font-style: italic; }
.it-card-doc { margin: 0 0 6px; font-size: 0.73rem; color: #888; }

.it-card-stars { display: flex; gap: 2px; margin-bottom: 5px; }
.it-star { font-size: 0.88rem; color: #ddd; }
.it-star.filled { color: #F59E0B; }

.it-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 5px; }
.it-tag {
  font-size: 0.68rem; background: #fdf6ec; color: #8B1A1A;
  padding: 2px 7px; border-radius: 10px;
  border: 1px solid #f0e8d8;
}
.it-tag-more { font-size: 0.68rem; color: #aaa; }
.it-card-notes { margin: 0; font-size: 0.75rem; color: #777; line-height: 1.4; }

/* ── 品味分析 ────────────────────────────────────────────── */
.it-nb-scroll { flex: 1; overflow-y: auto; }
.it-profile-panel { padding: 1.5rem; max-width: 720px; margin: 0 auto; }
.it-profile-hint { text-align: center; color: #9ca3af; padding: 3rem 0; font-size: 1rem; }
.it-profile-section {
  background: white; border-radius: 12px; padding: 1.2rem 1.4rem;
  margin-bottom: 1.2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.it-profile-section h4 { margin: 0 0 1rem; font-size: 0.92rem; color: #444; font-weight: 700; }

/* 酒款類型橫條 */
.it-type-bars { display: flex; flex-direction: column; gap: 8px; }
.it-type-bar-row { display: flex; align-items: center; gap: 10px; }
.it-type-bar-label { font-size: 0.8rem; color: #555; min-width: 80px; flex-shrink: 0; }
.it-type-bar-track { flex: 1; height: 10px; background: #f0e8d8; border-radius: 5px; overflow: hidden; }
.it-type-bar-fill { height: 100%; border-radius: 5px; transition: width 0.5s ease; }
.it-type-bar-cnt { font-size: 0.8rem; color: #888; min-width: 24px; text-align: right; }

/* 香氣雲 */
.it-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; line-height: 2; }
.it-cloud-tag { color: #8B1A1A; font-weight: 500; }
.it-cloud-tag small { font-size: 0.65em; color: #aaa; }

/* 品種橫條 */
.it-grape-list { display: flex; flex-direction: column; gap: 8px; }
.it-grape-row { display: flex; align-items: center; gap: 10px; }
.it-grape-name { font-size: 0.8rem; color: #555; min-width: 140px; flex-shrink: 0; }
.it-grape-bar-wrap { flex: 1; height: 8px; background: #f0e8d8; border-radius: 4px; overflow: hidden; }
.it-grape-bar { height: 100%; background: linear-gradient(90deg, #5E8A6E, #3D7A4B); border-radius: 4px; transition: width 0.5s ease; }
.it-grape-cnt { font-size: 0.8rem; color: #888; min-width: 20px; text-align: right; }

/* 年份分佈 */
.it-vintage-list { display: flex; flex-direction: column; gap: 7px; }
.it-vrow { display: flex; align-items: center; gap: 10px; }
.it-vrow-yr { font-size: 0.8rem; font-weight: 700; color: #555; min-width: 42px; }
.it-vrow-bar-wrap { flex: 1; height: 8px; background: #f0e8d8; border-radius: 4px; overflow: hidden; }
.it-vrow-bar { height: 100%; background: linear-gradient(90deg, #8B1A1A, #C05A2A); border-radius: 4px; transition: width 0.5s ease; }
.it-vrow-cnt { font-size: 0.8rem; color: #888; min-width: 20px; text-align: right; }

/* 評分分佈 */
.it-rating-dist { display: flex; flex-direction: column; gap: 7px; }
.it-rrow { display: flex; align-items: center; gap: 10px; }
.it-rrow-star { font-size: 0.8rem; color: #F59E0B; min-width: 60px; }
.it-rrow-bar-wrap { flex: 1; height: 8px; background: #f0e8d8; border-radius: 4px; overflow: hidden; }
.it-rrow-bar { height: 100%; background: linear-gradient(90deg, #F59E0B, #D97706); border-radius: 4px; transition: width 0.5s ease; }
.it-rrow-cnt { font-size: 0.8rem; color: #888; min-width: 20px; text-align: right; }

/* ── 響應式 ──────────────────────────────────────────────── */
@media (max-width: 500px) {
  .it-nb-grid { grid-template-columns: 1fr 1fr; gap: 10px; padding: 1rem; }
  .it-stat { padding: 0 0.8rem; }
  .it-stat-num { font-size: 1.3rem; }
}
</style>
