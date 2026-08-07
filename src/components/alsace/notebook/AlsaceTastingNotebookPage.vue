<template>
  <div class="al-nb-page">

    <!-- Header -->
    <div class="al-nb-header">
      <button class="al-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="al-nb-title">📔 阿爾薩斯品飲筆記</h1>
      <button class="al-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="al-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用阿爾薩斯品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="al-nb-stats">
      <div class="al-stat">
        <span class="al-stat-num">{{ stats.tried }}</span>
        <span class="al-stat-lbl">已品飲</span>
      </div>
      <div class="al-stat-div" />
      <div class="al-stat">
        <span class="al-stat-num">{{ stats.wishlist }}</span>
        <span class="al-stat-lbl">想喝清單</span>
      </div>
      <div class="al-stat-div" />
      <div class="al-stat">
        <span class="al-stat-num">{{ stats.aocs }}</span>
        <span class="al-stat-lbl">產區涵蓋</span>
      </div>
      <div class="al-stat-div" />
      <div class="al-stat">
        <span class="al-stat-num">{{ stats.grapes }}</span>
        <span class="al-stat-lbl">品種記錄</span>
      </div>
    </div>

    <!-- 主選項卡 -->
    <div class="al-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['al-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">
        {{ mt.label }}
      </button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <div class="al-nb-filters">
        <div class="al-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key"
            :class="['al-filter-btn', filterStatus === tab.key && 'active']"
            @click="filterStatus = tab.key">
            {{ tab.label }}
          </button>
        </div>
        <div class="al-filter-row type-row">
          <button
            :class="['al-type-filter', filterType === 'all' && 'all-active']"
            @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['al-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="al-search-wrap">
          <input v-model="searchQuery" class="al-search"
            placeholder="搜尋酒莊、品種、AOC / Grand Cru…" />
        </div>
      </div>

      <div v-if="loading" class="al-nb-empty">
        <div class="al-loading-spin" />
        <p>載入中…</p>
      </div>

      <div v-else-if="filteredNotes.length === 0" class="al-nb-empty">
        <p class="al-empty-icon">📭</p>
        <p class="al-empty-msg">
          {{ !authUser ? '請登入以查看筆記' :
             searchQuery ? '找不到符合的筆記' :
             filterStatus === 'tried' ? '尚無品飲記錄，點擊右上角＋新增' :
             filterStatus === 'wishlist' ? '想喝清單為空' :
             filterType !== 'all' ? `尚無${WINE_TYPES.find(t=>t.id===filterType)?.short}記錄` :
             '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <div v-else class="al-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id"
          class="al-nb-card"
          @click="openNote(note)">
          <div class="al-card-top">
            <span :class="['al-status-badge', note.status]">
              {{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}
            </span>
            <span v-if="note.wine_type" class="al-wine-type-badge"
              :style="{ background: wineTypeColor(note.wine_type) }">
              {{ wineTypeEmoji(note.wine_type) }}
            </span>
            <span v-if="note.vintage" class="al-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="al-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="al-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="al-card-aoc">{{ fmtAoc(note) }}</p>
          <div v-if="note.rating" class="al-card-stars">
            <span v-for="i in 5" :key="i" :class="['al-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="al-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="al-tag"
              :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="al-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="al-card-notes">
            {{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}
          </p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="al-nb-scroll">
      <div class="al-profile-panel">
        <template v-if="notes.length === 0">
          <p class="al-profile-hint">📊 新增品飲記錄後即可生成阿爾薩斯酒款品味輪廓</p>
        </template>
        <template v-else>
          <div class="al-profile-section">
            <h4>🍇 酒款類型分佈</h4>
            <div class="al-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="al-type-bar-row">
                <span class="al-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="al-type-bar-track">
                  <div class="al-type-bar-fill"
                    :style="{ width: typePct(t.id) + '%', background: t.color }"></div>
                </div>
                <span class="al-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>

          <div class="al-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="al-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag"
                class="al-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>

          <div class="al-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="al-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="al-grape-row">
                <span class="al-grape-name">{{ grape }}</span>
                <div class="al-grape-bar-wrap">
                  <div class="al-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div>
                </div>
                <span class="al-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <div class="al-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="al-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="al-vrow">
                <span class="al-vrow-yr">{{ vintage }}</span>
                <div class="al-vrow-bar-wrap">
                  <div class="al-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div>
                </div>
                <span class="al-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>

          <div class="al-profile-section">
            <h4>⭐ 評分分佈</h4>
            <div class="al-rating-dist">
              <div v-for="i in 5" :key="i" class="al-rrow">
                <span class="al-rrow-star">{{ '★'.repeat(i) }}</span>
                <div class="al-rrow-bar-wrap">
                  <div class="al-rrow-bar" :style="{ width: ratingPct(i) + '%' }"></div>
                </div>
                <span class="al-rrow-cnt">{{ ratingCount(i) }}</span>
              </div>
            </div>
          </div>

          <div class="al-profile-section">
            <h4>🗺 常見 AOC / Grand Cru</h4>
            <div class="al-grape-list">
              <div v-for="[aoc, cnt] in topAocs" :key="aoc" class="al-grape-row">
                <span class="al-grape-name">{{ aoc }}</span>
                <div class="al-grape-bar-wrap">
                  <div class="al-grape-bar" :style="{ width: `${(cnt / maxAocCount) * 100}%`, background: '#c9a227' }"></div>
                </div>
                <span class="al-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Tasting Note Modal -->
    <AlsaceTastingNoteModal
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
import AlsaceTastingNoteModal from './AlsaceTastingNoteModal.vue'

const emit = defineEmits(['back'])
const router = useRouter()

const authUser = computed(() => authState.user)

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
  { id: 'blanc',    emoji: '🥂', short: '白酒',   color: '#2d6a4f' },
  { id: 'cremant',  emoji: '✨', short: 'Crémant', color: '#c9a227' },
  { id: 'vt',       emoji: '🍯', short: 'VT',      color: '#d35400' },
  { id: 'sgn',      emoji: '👑', short: 'SGN',     color: '#8e44ad' },
  { id: 'rouge',    emoji: '🍷', short: '紅酒',   color: '#8B1A1A' },
  { id: 'eaudevie', emoji: '🥃', short: '蒸餾酒', color: '#7c4a2d' },
  { id: 'autre',    emoji: '🍾', short: '其他',   color: '#6B7280' },
]

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
  aocs:     new Set(notes.value.map(n => n.aoc_id).filter(Boolean)).size,
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
    if (n.grape_variety?.trim()) {
      const key = n.grape_variety.trim()
      map[key] = (map[key] || 0) + 1
    }
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10)
})
const maxGrapeCount = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))

const topAocs = computed(() => {
  const map = {}
  notes.value.forEach(n => {
    const key = n.aoc_id?.trim()
    if (key && key !== 'AOC Alsace') map[key] = (map[key] || 0) + 1
  })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10)
})
const maxAocCount = computed(() => Math.max(1, ...topAocs.value.map(e => e[1])))

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

const wineTypeColor = (typeId) => WINE_TYPES.find(t => t.id === typeId)?.color || '#6B7280'
const wineTypeEmoji = (typeId) => WINE_TYPES.find(t => t.id === typeId)?.emoji || '🍾'
const fmtAoc = (note) => {
  const parts = []
  if (note.aoc_id && note.aoc_id !== 'AOC Alsace') parts.push(note.aoc_id)
  if (note.it_region) parts.push(note.it_region.split('（')[0])
  return parts.join(' · ') || note.aoc_id || ''
}

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes')
    .select('*')
    .eq('user_id', authUser.value.id)
    .eq('source', 'alsace')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入阿爾薩斯筆記失敗:', error.message)
  notes.value = data || []
  loading.value = false
}

const openNote    = (note) => { selectedNote.value = note; showModal.value = true }
const openNewNote = ()     => { selectedNote.value = null; showModal.value = true }
const onModalSave   = async () => { showModal.value = false; await loadNotes() }
const onModalDelete = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
.al-nb-page {
  min-height: 100vh;
  background: linear-gradient(160deg, #f3f9f4 0%, #fbfaf3 40%, #f3f9f4 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

.al-nb-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%);
  color: white;
}
.al-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.al-nb-back, .al-nb-add {
  background: rgba(255,255,255,0.18);
  border: none; color: white;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.85rem; font-weight: 600; cursor: pointer;
  transition: background 0.15s;
}
.al-nb-back:hover, .al-nb-add:hover { background: rgba(255,255,255,0.28); }
.al-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }

.al-nb-login-hint {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 0.9rem 1.5rem;
  background: #fff8e7; border-bottom: 1px solid #fcd34d;
  font-size: 0.9rem; color: #92400e;
}
.al-nb-login-hint a { color: #2d6a4f; font-weight: 700; cursor: pointer; text-decoration: underline; }

.al-nb-stats {
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; background: white; border-bottom: 1px solid #e6f4ea;
}
.al-stat { display: flex; flex-direction: column; align-items: center; padding: 0 1.4rem; }
.al-stat-num { font-size: 1.6rem; font-weight: 800; color: #2d6a4f; line-height: 1; }
.al-stat-lbl { font-size: 0.72rem; color: #9ca3af; margin-top: 3px; }
.al-stat-div { width: 1px; height: 36px; background: #e6f4ea; }

.al-nb-main-tabs { display: flex; border-bottom: 2px solid #e6f4ea; background: white; }
.al-nb-tab {
  flex: 1; padding: 0.85rem 1rem;
  border: none; background: none;
  font-size: 0.9rem; font-weight: 600; color: #9ca3af; cursor: pointer;
  border-bottom: 3px solid transparent; margin-bottom: -2px;
  transition: color 0.2s;
}
.al-nb-tab.active { color: #2d6a4f; border-bottom-color: #2d6a4f; }

.al-nb-filters {
  display: flex; flex-direction: column; gap: 8px;
  padding: 0.75rem 1.2rem;
  background: white; border-bottom: 1px solid #e6f4ea;
}
.al-filter-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.al-filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1.5px solid #e6f4ea; background: white;
  font-size: 0.82rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s;
}
.al-filter-btn.active { background: #2d6a4f; color: white; border-color: #2d6a4f; }

.type-row { flex-wrap: wrap; }
.al-type-filter {
  padding: 4px 11px; border-radius: 20px;
  border: 1.5px solid #e6f4ea; background: white;
  font-size: 0.78rem; font-weight: 600; color: #6b7280; cursor: pointer;
  transition: all 0.15s; white-space: nowrap;
}
.al-type-filter.all-active { background: #374151; color: white; border-color: #374151; }
.al-type-filter.type-active { color: white; font-weight: 700; }

.al-search-wrap { flex: 1; }
.al-search {
  width: 100%; padding: 6px 12px;
  border: 1.5px solid #e6f4ea; border-radius: 20px;
  font-size: 0.85rem; outline: none; box-sizing: border-box;
}
.al-search:focus { border-color: #2d6a4f; }

.al-nb-empty {
  flex: 1; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 3rem 1.5rem; color: #9ca3af; text-align: center;
}
.al-empty-icon { font-size: 3rem; margin: 0 0 0.5rem; }
.al-empty-msg { font-size: 0.92rem; }
.al-loading-spin {
  width: 36px; height: 36px;
  border: 3px solid #e6f4ea; border-top-color: #2d6a4f;
  border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 0.8rem;
}
@keyframes spin { to { transform: rotate(360deg); } }

.al-nb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  padding: 1.2rem 1.2rem 2rem;
}

.al-nb-card {
  background: white; border-radius: 14px;
  padding: 14px; cursor: pointer;
  border: 1.5px solid transparent;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: all 0.2s;
}
.al-nb-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  border-color: #2d6a4f;
}

.al-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.al-status-badge { font-size: 0.7rem; font-weight: 700; border-radius: 20px; padding: 2px 8px; }
.al-status-badge.tried    { background: #dcfce7; color: #16a34a; }
.al-status-badge.wishlist { background: #fee2e2; color: #dc2626; }
.al-wine-type-badge {
  font-size: 0.85rem; width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.al-vintage-tag { font-size: 0.7rem; color: #9ca3af; margin-left: auto; }
.al-card-producer { margin: 0 0 4px; font-size: 0.92rem; font-weight: 700; color: #1a1a1a; }
.al-card-grape    { margin: 0 0 3px; font-size: 0.78rem; color: #555; }
.al-card-aoc      { margin: 0 0 8px; font-size: 0.78rem; color: #2d6a4f; font-weight: 600; }

.al-card-stars { display: flex; gap: 2px; margin-bottom: 8px; }
.al-star { font-size: 1rem; color: #e5e7eb; }
.al-star.filled { color: #F59E0B; }

.al-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
.al-tag {
  font-size: 0.7rem; padding: 2px 8px; border-radius: 20px;
  border: 1.5px solid #e5e7eb; color: #555; background: #fafafa;
}
.al-tag-more { font-size: 0.7rem; color: #9ca3af; padding: 2px 4px; }
.al-card-notes { margin: 0; font-size: 0.75rem; color: #9ca3af; line-height: 1.4; }

.al-nb-scroll { flex: 1; overflow-y: auto; }
.al-profile-panel { padding: 1.3rem; display: flex; flex-direction: column; gap: 1.5rem; }
.al-profile-hint { text-align: center; color: #9ca3af; padding: 3rem; font-size: 0.9rem; }
.al-profile-section h4 { margin: 0 0 0.8rem; font-size: 0.85rem; font-weight: 700; color: #555; }

.al-type-bars { display: flex; flex-direction: column; gap: 8px; }
.al-type-bar-row { display: flex; align-items: center; gap: 10px; }
.al-type-bar-label { min-width: 72px; font-size: 0.76rem; color: #555; }
.al-type-bar-track { flex: 1; height: 8px; background: #f4f4f5; border-radius: 4px; overflow: hidden; }
.al-type-bar-fill  { height: 100%; border-radius: 4px; transition: width 0.4s; }
.al-type-bar-cnt   { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.al-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.al-cloud-tag { color: #2d6a4f; font-weight: 600; cursor: default; }
.al-cloud-tag small { color: #9ca3af; font-size: 0.7em; }

.al-grape-list { display: flex; flex-direction: column; gap: 7px; }
.al-grape-row  { display: flex; align-items: center; gap: 8px; }
.al-grape-name { min-width: 110px; font-size: 0.8rem; color: #444; }
.al-grape-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.al-grape-bar  { height: 100%; background: #2d6a4f; border-radius: 3px; transition: width 0.4s; }
.al-grape-cnt  { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.al-vintage-list { display: flex; flex-direction: column; gap: 7px; }
.al-vrow { display: flex; align-items: center; gap: 8px; }
.al-vrow-yr { min-width: 40px; font-size: 0.8rem; color: #444; font-weight: 600; }
.al-vrow-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.al-vrow-bar { height: 100%; background: #c9a227; border-radius: 3px; transition: width 0.4s; }
.al-vrow-cnt { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }

.al-rating-dist { display: flex; flex-direction: column; gap: 7px; }
.al-rrow { display: flex; align-items: center; gap: 8px; }
.al-rrow-star { min-width: 62px; font-size: 0.76rem; color: #F59E0B; letter-spacing: 1px; }
.al-rrow-bar-wrap { flex: 1; height: 6px; background: #f4f4f5; border-radius: 3px; overflow: hidden; }
.al-rrow-bar { height: 100%; background: #F59E0B; border-radius: 3px; transition: width 0.4s; }
.al-rrow-cnt { font-size: 0.76rem; color: #9ca3af; min-width: 20px; text-align: right; }
</style>
