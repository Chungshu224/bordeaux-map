<template>
  <div class="ca-nb-page">
    <!-- Header -->
    <div class="ca-nb-header">
      <button class="ca-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="ca-nb-title">📔 加州品飲筆記</h1>
      <button class="ca-nb-add" @click="openNewNote" :disabled="!authUser">+ 新增</button>
    </div>

    <div v-if="!authUser" class="ca-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用加州品飲筆記功能</p>
    </div>

    <!-- Stats -->
    <div class="ca-nb-stats">
      <div class="ca-stat"><span class="ca-stat-num">{{ stats.tried }}</span><span class="ca-stat-lbl">已品飲</span></div>
      <div class="ca-stat-div" />
      <div class="ca-stat"><span class="ca-stat-num">{{ stats.wishlist }}</span><span class="ca-stat-lbl">想喝清單</span></div>
      <div class="ca-stat-div" />
      <div class="ca-stat"><span class="ca-stat-num">{{ stats.avas }}</span><span class="ca-stat-lbl">AVA 涵蓋</span></div>
      <div class="ca-stat-div" />
      <div class="ca-stat"><span class="ca-stat-num">{{ stats.grapes }}</span><span class="ca-stat-lbl">品種記錄</span></div>
    </div>

    <!-- Tabs -->
    <div class="ca-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="['ca-nb-tab', mainTab === mt.key && 'active']" @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <!-- Notes list -->
    <template v-if="mainTab === 'notes'">
      <div class="ca-nb-filters">
        <div class="ca-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="['ca-filter-btn', filterStatus === tab.key && 'active']" @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="ca-filter-row type-row">
          <button :class="['ca-type-filter', filterType === 'all' && 'all-active']" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['ca-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="ca-search-wrap">
          <input v-model="searchQuery" class="ca-search" placeholder="搜尋酒莊、品種、AVA 產區…" />
        </div>
      </div>

      <div v-if="loading" class="ca-nb-empty"><div class="ca-loading-spin" /><p>載入中…</p></div>
      <div v-else-if="filteredNotes.length === 0" class="ca-nb-empty">
        <p class="ca-empty-icon">📭</p>
        <p class="ca-empty-msg">{{ !authUser ? '請登入以查看筆記' : '尚無符合的筆記，點擊右上角＋新增' }}</p>
      </div>

      <div v-else class="ca-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="ca-nb-card" @click="openNote(note)">
          <div class="ca-card-top">
            <span :class="['ca-status-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="ca-wine-type-badge" :style="{ background: wineTypeColor(note.wine_type) }">{{ wineTypeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="ca-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="ca-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="ca-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="ca-card-doc">{{ fmtDoc(note) }}</p>
          <div v-if="note.rating" class="ca-card-stars">
            <span v-for="i in 5" :key="i" :class="['ca-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="ca-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="ca-tag" :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="ca-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="ca-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <!-- Profile -->
    <div v-else-if="mainTab === 'profile'" class="ca-nb-scroll">
      <div class="ca-profile-panel">
        <template v-if="notes.length === 0">
          <p class="ca-profile-hint">📊 新增品飲記錄後即可生成加州酒款品味輪廓</p>
        </template>
        <template v-else>
          <div class="ca-profile-section">
            <h4>🍷 酒款類型分佈</h4>
            <div class="ca-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="ca-type-bar-row">
                <span class="ca-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="ca-type-bar-track"><div class="ca-type-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
                <span class="ca-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>
          <div class="ca-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="ca-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag" class="ca-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <div class="ca-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="ca-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="ca-grape-row">
                <span class="ca-grape-name">{{ grape }}</span>
                <div class="ca-grape-bar-wrap"><div class="ca-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div></div>
                <span class="ca-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="ca-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="ca-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="ca-vrow">
                <span class="ca-vrow-yr">{{ vintage }}</span>
                <div class="ca-vrow-bar-wrap"><div class="ca-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div></div>
                <span class="ca-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <CaliforniaTastingNoteModal
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
import CaliforniaTastingNoteModal from './CaliforniaTastingNoteModal.vue'

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

const MAIN_TABS = [{ key: 'notes', label: '📝 筆記' }, { key: 'profile', label: '📊 品味' }]
const STATUS_TABS = [{ key: 'all', label: '全部' }, { key: 'tried', label: '已品飲' }, { key: 'wishlist', label: '想喝清單' }]
const WINE_TYPES = [
  { id: 'cabernet',    emoji: '🍷', short: 'Cab. S.',    color: '#7B1A1A' },
  { id: 'pinot_noir',  emoji: '🍓', short: 'Pinot Noir', color: '#9B1B30' },
  { id: 'zinfandel',   emoji: '🔥', short: 'Zinfandel',  color: '#8B2500' },
  { id: 'chardonnay',  emoji: '🥂', short: 'Chardonnay', color: '#C4A217' },
  { id: 'other_white', emoji: '🫧', short: '白酒',        color: '#A0890A' },
  { id: 'rose',        emoji: '🌸', short: 'Rosé',       color: '#D45E8C' },
  { id: 'sparkling',   emoji: '🍾', short: '氣泡',        color: '#C09B20' },
  { id: 'other',       emoji: '🌟', short: '其他',        color: '#6B7280' },
]

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
      n.ca_region?.toLowerCase().includes(q)
    )
  }
  return result
})

const stats = computed(() => ({
  tried:    notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  avas:     new Set(notes.value.map(n => n.ca_region || n.aoc_id).filter(Boolean)).size,
  grapes:   new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size,
}))

const topAromas = computed(() => {
  const map = {}
  notes.value.forEach(n => { n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 }) })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18)
})
const topGrapes = computed(() => {
  const map = {}
  notes.value.forEach(n => { if (n.grape_variety?.trim()) map[n.grape_variety.trim()] = (map[n.grape_variety.trim()] || 0) + 1 })
  return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10)
})
const maxGrapeCount = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))
const vintageDist = computed(() => {
  const map = {}
  notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 })
  return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 12)
})
const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))
const typeCount = (id) => notes.value.filter(n => n.wine_type === id).length
const typePct   = (id) => notes.value.length ? Math.round(typeCount(id) / notes.value.length * 100) : 0
const wineTypeColor = (id) => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const wineTypeEmoji = (id) => WINE_TYPES.find(t => t.id === id)?.emoji || '🍾'
const fmtDoc = (note) => {
  const parts = []
  if (note.ca_region) parts.push(note.ca_region)
  else if (note.aoc_id && note.aoc_id !== 'California') parts.push(note.aoc_id)
  return parts.join(' · ') || note.aoc_id || ''
}

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes').select('*')
    .eq('user_id', authUser.value.id).eq('source', 'california')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入加州筆記失敗:', error.message)
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
.ca-nb-page { min-height: 100vh; background: linear-gradient(160deg, #fff8f0 0%, #fffaf5 40%, #fff5e8 100%); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif; }
.ca-nb-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: linear-gradient(135deg, #7B1A1A 0%, #C8860D 100%); color: white; }
.ca-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.ca-nb-back, .ca-nb-add { background: rgba(255,255,255,0.18); border: none; color: white; padding: 7px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
.ca-nb-back:hover, .ca-nb-add:hover { background: rgba(255,255,255,0.28); }
.ca-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }
.ca-nb-login-hint { display: flex; align-items: center; gap: 10px; background: #fff3cd; border: 1px solid #ffc107; padding: 12px 20px; margin: 12px; border-radius: 10px; font-size: 0.88rem; }
.ca-nb-login-hint a { color: #7B1A1A; cursor: pointer; font-weight: 600; text-decoration: underline; }
.ca-nb-stats { display: flex; align-items: center; justify-content: space-around; padding: 14px 20px; background: white; border-bottom: 1px solid #e8e8e8; }
.ca-stat { text-align: center; }
.ca-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #7B1A1A; }
.ca-stat-lbl { font-size: 0.72rem; color: #888; }
.ca-stat-div { width: 1px; height: 30px; background: #e0e0e0; }
.ca-nb-main-tabs { display: flex; background: white; border-bottom: 2px solid #e8e8e8; }
.ca-nb-tab { flex: 1; padding: 12px 8px; background: none; border: none; font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.15s; }
.ca-nb-tab.active { color: #7B1A1A; border-bottom-color: #C8860D; }
.ca-nb-filters { background: white; padding: 10px 16px 8px; border-bottom: 1px solid #eee; }
.ca-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.ca-filter-btn { padding: 5px 14px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.ca-filter-btn.active { background: #7B1A1A; border-color: #7B1A1A; color: white; }
.ca-type-filter { padding: 4px 10px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555; transition: all 0.15s; }
.ca-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.ca-type-filter.type-active { color: white; }
.ca-search-wrap { margin-top: 4px; }
.ca-search { width: 100%; padding: 7px 14px; border: 1.5px solid #ddd; border-radius: 20px; font-size: 0.85rem; outline: none; box-sizing: border-box; }
.ca-search:focus { border-color: #7B1A1A; }
.ca-nb-empty { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; gap: 12px; color: #999; }
.ca-empty-icon { font-size: 2.5rem; margin: 0; }
.ca-empty-msg { font-size: 0.9rem; text-align: center; }
.ca-loading-spin { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #e0e0e0; border-top-color: #7B1A1A; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.ca-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; padding: 16px; }
.ca-nb-card { background: white; border-radius: 14px; padding: 14px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: all 0.15s; border: 1.5px solid transparent; }
.ca-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #7B1A1A30; }
.ca-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.ca-status-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; }
.ca-status-badge.tried    { background: #DCFCE7; color: #166534; }
.ca-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.ca-wine-type-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
.ca-vintage-tag { margin-left: auto; font-size: 0.78rem; font-weight: 700; color: #7B1A1A; background: #fdf0e0; padding: 1px 8px; border-radius: 8px; }
.ca-card-producer { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.ca-card-grape { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.ca-card-doc { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.ca-card-stars { display: flex; gap: 2px; margin-bottom: 6px; }
.ca-star { font-size: 0.85rem; color: #ddd; }
.ca-star.filled { color: #F59E0B; }
.ca-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.ca-tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; border: 1.5px solid #e0e0e0; color: #555; background: #fafafa; }
.ca-tag-more { font-size: 0.7rem; color: #aaa; padding: 2px 4px; }
.ca-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }
.ca-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.ca-profile-panel { max-width: 600px; margin: 0 auto; }
.ca-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.ca-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.ca-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }
.ca-type-bars { display: flex; flex-direction: column; gap: 8px; }
.ca-type-bar-row { display: flex; align-items: center; gap: 10px; }
.ca-type-bar-label { font-size: 0.78rem; width: 90px; flex-shrink: 0; color: #555; }
.ca-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.ca-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.ca-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.ca-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.ca-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.ca-cloud-tag small { font-size: 0.65em; color: #888; }
.ca-grape-list, .ca-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.ca-grape-row, .ca-vrow { display: flex; align-items: center; gap: 10px; }
.ca-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.ca-grape-bar-wrap, .ca-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.ca-grape-bar { height: 100%; background: #7B1A1A; border-radius: 4px; transition: width 0.4s; }
.ca-vrow-bar { height: 100%; background: #C8860D; border-radius: 4px; transition: width 0.4s; }
.ca-grape-cnt, .ca-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.ca-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }
</style>
