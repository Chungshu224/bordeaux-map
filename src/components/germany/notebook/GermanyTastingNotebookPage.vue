<template>
  <div class="de-nb-page">

    <!-- Header -->
    <div class="de-nb-header">
      <button class="de-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="de-nb-title">📔 德國品飲筆記</h1>
      <button class="de-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="de-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用德國品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="de-nb-stats">
      <div class="de-stat">
        <span class="de-stat-num">{{ stats.tried }}</span>
        <span class="de-stat-lbl">已品飲</span>
      </div>
      <div class="de-stat-div" />
      <div class="de-stat">
        <span class="de-stat-num">{{ stats.wishlist }}</span>
        <span class="de-stat-lbl">想喝清單</span>
      </div>
      <div class="de-stat-div" />
      <div class="de-stat">
        <span class="de-stat-num">{{ stats.regions }}</span>
        <span class="de-stat-lbl">產區涵蓋</span>
      </div>
      <div class="de-stat-div" />
      <div class="de-stat">
        <span class="de-stat-num">{{ stats.grapes }}</span>
        <span class="de-stat-lbl">品種記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="de-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['de-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <!-- 篩選列 -->
      <div class="de-nb-filters">
        <!-- 狀態篩選 -->
        <div class="de-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key"
            :class="['de-filter-btn', filterStatus === tab.key && 'active']"
            @click="filterStatus = tab.key">
            {{ tab.label }}
          </button>
        </div>
        <!-- 酒款類型篩選 -->
        <div class="de-filter-row type-row">
          <button
            :class="['de-type-filter', filterType === 'all' && 'all-active']"
            @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['de-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <!-- 搜尋 -->
        <div class="de-search-wrap">
          <input v-model="searchQuery" class="de-search"
            placeholder="搜尋生產者、品種、產區…" />
        </div>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="de-nb-empty">
        <div class="de-loading-spin" />
        <p>載入中…</p>
      </div>

      <!-- Empty -->
      <div v-else-if="filteredNotes.length === 0" class="de-nb-empty">
        <p class="de-empty-icon">📭</p>
        <p class="de-empty-msg">
          {{ !authUser ? '請登入以查看筆記' :
             searchQuery ? '找不到符合的筆記' :
             filterStatus === 'tried' ? '尚無品飲記錄，點擊右上角＋新增' :
             filterStatus === 'wishlist' ? '想喝清單為空' :
             filterType !== 'all' ? `尚無${WINE_TYPES.find(t=>t.id===filterType)?.short}記錄` :
             '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <!-- Notes grid -->
      <div v-else class="de-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="de-nb-card"
          @click="openNote(note)">
          <div class="de-card-top">
            <span :class="['de-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.wine_type" class="de-wine-type-badge"
              :style="{ background: wineTypeColor(note.wine_type) }">
              {{ wineTypeEmoji(note.wine_type) }}
            </span>
            <span v-if="note.vintage" class="de-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="de-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="de-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="de-card-doc">{{ fmtDoc(note) }}</p>
          <div v-if="note.rating" class="de-card-stars">
            <span v-for="i in 5" :key="i" :class="['de-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="de-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="de-tag"
              :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="de-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="de-card-notes">
            {{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}
          </p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="de-nb-scroll">
      <div class="de-profile-panel">
        <template v-if="notes.length === 0">
          <p class="de-profile-hint">📊 新增品飲記錄後即可生成德國酒款品味輪廓</p>
        </template>
        <template v-else>
          <!-- 酒款類型分佈 -->
          <div class="de-profile-section">
            <h4>🍷 酒款類型分佈</h4>
            <div class="de-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="de-type-bar-row">
                <span class="de-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="de-type-bar-track">
                  <div class="de-type-bar-fill"
                    :style="{ width: typePct(t.id) + '%', background: t.color }"></div>
                </div>
                <span class="de-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>

          <!-- 常見香氣 -->
          <div class="de-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="de-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag"
                class="de-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>

          <!-- 常用品種 -->
          <div class="de-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="de-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="de-grape-row">
                <span class="de-grape-name">{{ grape }}</span>
                <div class="de-grape-bar-wrap">
                  <div class="de-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div>
                </div>
                <span class="de-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 年份分佈 -->
          <div class="de-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="de-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="de-vrow">
                <span class="de-vrow-yr">{{ vintage }}</span>
                <div class="de-vrow-bar-wrap">
                  <div class="de-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div>
                </div>
                <span class="de-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <!-- 評分分佈 -->
          <div class="de-profile-section">
            <h4>⭐ 評分分佈</h4>
            <div class="de-rating-dist">
              <div v-for="i in 5" :key="i" class="de-rrow">
                <span class="de-rrow-star">{{ '★'.repeat(i) }}</span>
                <div class="de-rrow-bar-wrap">
                  <div class="de-rrow-bar" :style="{ width: ratingPct(i) + '%' }"></div>
                </div>
                <span class="de-rrow-cnt">{{ ratingCount(i) }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Tasting Note Modal -->
    <GermanyTastingNoteModal
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
import GermanyTastingNoteModal from './GermanyTastingNoteModal.vue'

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
  { id: 'weisswein',  emoji: '🥂', short: '白酒',  color: '#C8A217' },
  { id: 'rotwein',    emoji: '🍷', short: '紅酒',  color: '#8B1A1A' },
  { id: 'rosewein',   emoji: '🌸', short: '粉紅',  color: '#D45E8C' },
  { id: 'sekt',       emoji: '✨', short: 'Sekt',  color: '#5E8A6E' },
  { id: 'eiswein',    emoji: '❄️', short: 'Eiswein', color: '#2980B9' },
  { id: 'tba',        emoji: '🍯', short: 'TBA',   color: '#C07F00' },
  { id: 'andere',     emoji: '🍾', short: '其他',  color: '#6B7280' },
]

// ── Computed ──────────────────────────────────────────────────────
const filteredNotes = computed(() => {
  let result = notes.value
  if (filterStatus.value !== 'all') result = result.filter(n => n.status === filterStatus.value)
  if (filterType.value !== 'all')   result = result.filter(n => n.wine_type === filterType.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n =>
      n.chateau_name?.toLowerCase().includes(q) ||
      n.aoc_id?.toLowerCase().includes(q) ||
      n.grape_variety?.toLowerCase().includes(q) ||
      n.de_region?.toLowerCase().includes(q)
    )
  }
  return result
})

const stats = computed(() => ({
  tried:    notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  regions:  new Set(notes.value.map(n => n.de_region || n.aoc_id).filter(Boolean)).size,
  grapes:   new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size,
}))

const topAromas = computed(() => {
  const map = {}
  notes.value.forEach(n => { n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 }) })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18)
})
const topGrapes = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    if (n.grape_variety?.trim()) map[n.grape_variety.trim()] = (map[n.grape_variety.trim()] || 0) + 1
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
const wineTypeColor = (typeId) => WINE_TYPES.find(t => t.id === typeId)?.color || '#6B7280'
const wineTypeEmoji = (typeId) => WINE_TYPES.find(t => t.id === typeId)?.emoji || '🍾'
const fmtDoc = (note) => {
  const parts = []
  if (note.pradikat) parts.push(note.pradikat)
  if (note.de_region) parts.push(note.de_region)
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
    .eq('source', 'germany')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入德國筆記失敗:', error.message)
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
.de-nb-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #eef2f7 0%, #f5f8fc 40%, #edf1f6 100%);
  display: flex; flex-direction: column;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}
.de-nb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
  color: white;
}
.de-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.de-nb-back, .de-nb-add {
  background: rgba(255,255,255,0.18); border: none; color: white;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s;
}
.de-nb-back:hover, .de-nb-add:hover { background: rgba(255,255,255,0.28); }
.de-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }

.de-nb-login-hint {
  display: flex; align-items: center; gap: 10px;
  background: #fff3cd; border: 1px solid #ffc107;
  padding: 12px 20px; margin: 12px;
  border-radius: 10px; font-size: 0.88rem;
}
.de-nb-login-hint a { color: #1a237e; cursor: pointer; font-weight: 600; text-decoration: underline; }

.de-nb-stats {
  display: flex; align-items: center; justify-content: space-around;
  padding: 14px 20px;
  background: white;
  border-bottom: 1px solid #e8e8e8;
}
.de-stat { text-align: center; }
.de-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #1a237e; }
.de-stat-lbl { font-size: 0.72rem; color: #888; }
.de-stat-div { width: 1px; height: 30px; background: #e0e0e0; }

.de-nb-main-tabs {
  display: flex; background: white;
  border-bottom: 2px solid #e8e8e8;
}
.de-nb-tab {
  flex: 1; padding: 12px 8px;
  background: none; border: none;
  font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -2px;
  transition: all 0.15s;
}
.de-nb-tab.active { color: #1a237e; border-bottom-color: #1a237e; }

.de-nb-filters {
  background: white; padding: 10px 16px 8px;
  border-bottom: 1px solid #eee;
}
.de-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.de-filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1.5px solid #e0e0e0; background: #f9f9f9;
  font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s;
}
.de-filter-btn.active { background: #1a237e; border-color: #1a237e; color: white; }
.de-type-filter {
  padding: 4px 10px; border-radius: 20px;
  border: 1.5px solid #e0e0e0; background: #f9f9f9;
  font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555;
  transition: all 0.15s;
}
.de-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.de-type-filter.type-active { color: white; }
.de-search-wrap { margin-top: 4px; }
.de-search {
  width: 100%; padding: 7px 14px;
  border: 1.5px solid #ddd; border-radius: 20px;
  font-size: 0.85rem; outline: none; box-sizing: border-box;
}
.de-search:focus { border-color: #1a237e; }

.de-nb-empty {
  display: flex; flex-direction: column; align-items: center;
  padding: 48px 20px; gap: 12px; color: #999;
}
.de-empty-icon { font-size: 2.5rem; margin: 0; }
.de-empty-msg { font-size: 0.9rem; text-align: center; }
.de-loading-spin {
  width: 32px; height: 32px; border-radius: 50%;
  border: 3px solid #e0e0e0; border-top-color: #1a237e;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.de-nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px; padding: 16px;
}
.de-nb-card {
  background: white; border-radius: 14px;
  padding: 14px; cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: all 0.15s; border: 1.5px solid transparent;
}
.de-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #1a237e30; }

.de-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.de-status-badge {
  font-size: 0.7rem; font-weight: 700; padding: 2px 8px;
  border-radius: 10px;
}
.de-status-badge.tried    { background: #DCFCE7; color: #166534; }
.de-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.de-wine-type-badge {
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem;
}
.de-vintage-tag {
  margin-left: auto; font-size: 0.78rem; font-weight: 700;
  color: #1a237e; background: #e8eaf6;
  padding: 1px 8px; border-radius: 8px;
}
.de-card-producer { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.de-card-grape { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.de-card-doc { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.de-card-stars { display: flex; gap: 2px; margin-bottom: 6px; }
.de-star { font-size: 0.85rem; color: #ddd; }
.de-star.filled { color: #F59E0B; }
.de-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.de-tag {
  font-size: 0.7rem; padding: 2px 8px;
  border-radius: 10px; border: 1.5px solid #e0e0e0;
  color: #555; background: #fafafa;
}
.de-tag-more { font-size: 0.7rem; color: #aaa; padding: 2px 4px; }
.de-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }

/* Profile */
.de-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.de-profile-panel { max-width: 600px; margin: 0 auto; }
.de-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.de-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.de-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }

.de-type-bars { display: flex; flex-direction: column; gap: 8px; }
.de-type-bar-row { display: flex; align-items: center; gap: 10px; }
.de-type-bar-label { font-size: 0.78rem; width: 80px; flex-shrink: 0; color: #555; }
.de-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.de-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.de-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }

.de-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.de-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.de-cloud-tag small { font-size: 0.65em; color: #888; }

.de-grape-list, .de-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.de-grape-row, .de-vrow { display: flex; align-items: center; gap: 10px; }
.de-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.de-grape-bar-wrap, .de-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.de-grape-bar { height: 100%; background: #1a237e; border-radius: 4px; transition: width 0.4s; }
.de-vrow-bar { height: 100%; background: #C8A217; border-radius: 4px; transition: width 0.4s; }
.de-grape-cnt, .de-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.de-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }

.de-rating-dist { display: flex; flex-direction: column; gap: 6px; }
.de-rrow { display: flex; align-items: center; gap: 10px; }
.de-rrow-star { font-size: 0.78rem; color: #F59E0B; width: 65px; flex-shrink: 0; }
.de-rrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.de-rrow-bar { height: 100%; background: #F59E0B; border-radius: 4px; transition: width 0.4s; }
.de-rrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
</style>
