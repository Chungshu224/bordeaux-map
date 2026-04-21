<template>
  <div class="nz-nb-page">
    <div class="nz-nb-header">
      <button class="nz-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="nz-nb-title">📔 紐西蘭品飲筆記</h1>
      <button class="nz-nb-add" @click="openNewNote" :disabled="!authUser">+ 新增</button>
    </div>

    <div v-if="!authUser" class="nz-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用紐西蘭品飲筆記功能</p>
    </div>

    <div class="nz-nb-stats">
      <div class="nz-stat"><span class="nz-stat-num">{{ stats.tried }}</span><span class="nz-stat-lbl">已品飲</span></div>
      <div class="nz-stat-div" />
      <div class="nz-stat"><span class="nz-stat-num">{{ stats.wishlist }}</span><span class="nz-stat-lbl">想喝清單</span></div>
      <div class="nz-stat-div" />
      <div class="nz-stat"><span class="nz-stat-num">{{ stats.regions }}</span><span class="nz-stat-lbl">產區涵蓋</span></div>
      <div class="nz-stat-div" />
      <div class="nz-stat"><span class="nz-stat-num">{{ stats.grapes }}</span><span class="nz-stat-lbl">品種記錄</span></div>
    </div>

    <div class="nz-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="['nz-nb-tab', mainTab === mt.key && 'active']" @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="nz-nb-filters">
        <div class="nz-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="['nz-filter-btn', filterStatus === tab.key && 'active']" @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="nz-filter-row type-row">
          <button :class="['nz-type-filter', filterType === 'all' && 'all-active']" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['nz-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="nz-search-wrap">
          <input v-model="searchQuery" class="nz-search" placeholder="搜尋酒莊、品種、產區…" />
        </div>
      </div>

      <div v-if="loading" class="nz-nb-empty"><div class="nz-loading-spin" /><p>載入中…</p></div>
      <div v-else-if="filteredNotes.length === 0" class="nz-nb-empty">
        <p class="nz-empty-icon">📭</p>
        <p class="nz-empty-msg">{{ !authUser ? '請登入以查看筆記' : '尚無符合的筆記，點擊右上角＋新增' }}</p>
      </div>

      <div v-else class="nz-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="nz-nb-card" @click="openNote(note)">
          <div class="nz-card-top">
            <span :class="['nz-status-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="nz-wine-type-badge" :style="{ background: wineTypeColor(note.wine_type) }">{{ wineTypeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="nz-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="nz-card-winery">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="nz-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="nz-card-region">{{ fmtRegion(note) }}</p>
          <div v-if="note.rating" class="nz-card-stars">
            <span v-for="i in 5" :key="i" :class="['nz-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="nz-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="nz-tag" :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="nz-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="nz-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else-if="mainTab === 'profile'" class="nz-nb-scroll">
      <div class="nz-profile-panel">
        <template v-if="notes.length === 0">
          <p class="nz-profile-hint">📊 新增品飲記錄後即可生成紐西蘭葡萄酒品味輪廓</p>
        </template>
        <template v-else>
          <div class="nz-profile-section">
            <h4>🥝 酒款類型分佈</h4>
            <div class="nz-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="nz-type-bar-row">
                <span class="nz-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="nz-type-bar-track"><div class="nz-type-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
                <span class="nz-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>
          <div class="nz-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="nz-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag" class="nz-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <div class="nz-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="nz-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="nz-grape-row">
                <span class="nz-grape-name">{{ grape }}</span>
                <div class="nz-grape-bar-wrap"><div class="nz-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div></div>
                <span class="nz-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="nz-profile-section">
            <h4>📍 常去產區</h4>
            <div class="nz-grape-list">
              <div v-for="[region, cnt] in topRegions" :key="region" class="nz-grape-row">
                <span class="nz-grape-name">{{ region }}</span>
                <div class="nz-grape-bar-wrap"><div class="nz-grape-bar" :style="{ width: `${(cnt / maxRegionCount) * 100}%`, background: '#8B1A2A' }"></div></div>
                <span class="nz-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="nz-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="nz-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="nz-vrow">
                <span class="nz-vrow-yr">{{ vintage }}</span>
                <div class="nz-vrow-bar-wrap"><div class="nz-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div></div>
                <span class="nz-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <NZTastingNoteModal v-if="showModal" :note="selectedNote" @save="onModalSave" @delete="onModalDelete" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import NZTastingNoteModal from './NZTastingNoteModal.vue'

const emit = defineEmits(['back'])
const router = useRouter()
const authUser = computed(() => authState.user)
const notes = ref([])
const loading = ref(false)
const mainTab = ref('notes')
const filterStatus = ref('all')
const filterType = ref('all')
const searchQuery = ref('')
const showModal = ref(false)
const selectedNote = ref(null)

const MAIN_TABS = [{ key: 'notes', label: '📝 筆記' }, { key: 'profile', label: '📊 品味' }]
const STATUS_TABS = [{ key: 'all', label: '全部' }, { key: 'tried', label: '已品飲' }, { key: 'wishlist', label: '想喝清單' }]
const WINE_TYPES = [
  { id: 'sauvignon_blanc', emoji: '🌿', short: 'Sauv. B.', color: '#2A7A2A' },
  { id: 'pinot_noir',      emoji: '🍓', short: 'Pinot N.', color: '#8B1A2A' },
  { id: 'chardonnay',      emoji: '🥂', short: 'Chardonnay', color: '#C4A217' },
  { id: 'pinot_gris',      emoji: '🌸', short: 'Pinot Gris', color: '#C07A5A' },
  { id: 'riesling',        emoji: '🪨', short: 'Riesling',  color: '#4A7A3A' },
  { id: 'rose',            emoji: '🌹', short: 'Rosé',      color: '#E8598A' },
  { id: 'sparkling',       emoji: '🍾', short: '氣泡',       color: '#B09020' },
  { id: 'other',           emoji: '🥝', short: '其他',       color: '#6B7280' },
]

const filteredNotes = computed(() => {
  let result = notes.value
  if (filterStatus.value !== 'all') result = result.filter(n => n.status === filterStatus.value)
  if (filterType.value !== 'all')   result = result.filter(n => n.wine_type === filterType.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n => n.chateau_name?.toLowerCase().includes(q) || n.aoc_id?.toLowerCase().includes(q) || n.grape_variety?.toLowerCase().includes(q) || n.nz_region?.toLowerCase().includes(q))
  }
  return result
})
const stats = computed(() => ({
  tried: notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  regions: new Set(notes.value.map(n => n.nz_region || n.aoc_id).filter(Boolean)).size,
  grapes: new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size,
}))
const topAromas  = computed(() => { const map = {}; notes.value.forEach(n => { n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 }) }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18) })
const topGrapes  = computed(() => { const map = {}; notes.value.forEach(n => { if (n.grape_variety?.trim()) map[n.grape_variety.trim()] = (map[n.grape_variety.trim()] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10) })
const topRegions = computed(() => { const map = {}; notes.value.forEach(n => { const r = n.nz_region || n.aoc_id; if (r) map[r] = (map[r] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 8) })
const maxGrapeCount  = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))
const maxRegionCount = computed(() => Math.max(1, ...topRegions.value.map(e => e[1])))
const vintageDist    = computed(() => { const map = {}; notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 12) })
const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))
const typeCount = (id) => notes.value.filter(n => n.wine_type === id).length
const typePct   = (id) => notes.value.length ? Math.round(typeCount(id) / notes.value.length * 100) : 0
const wineTypeColor = (id) => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const wineTypeEmoji = (id) => WINE_TYPES.find(t => t.id === id)?.emoji || '🥝'
const fmtRegion = (note) => note.nz_region || note.aoc_id || ''

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase.from('tasting_notes').select('*').eq('user_id', authUser.value.id).eq('source', 'newzealand').order('updated_at', { ascending: false })
  if (error) console.warn('載入紐西蘭筆記失敗:', error.message)
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
.nz-nb-page { min-height: 100vh; background: linear-gradient(160deg, #f0f8f2 0%, #f5fdf7 40%, #eef7f2 100%); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif; }
.nz-nb-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: linear-gradient(135deg, #1B5E20 0%, #0D47A1 100%); color: white; }
.nz-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.nz-nb-back, .nz-nb-add { background: rgba(255,255,255,0.18); border: none; color: white; padding: 7px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
.nz-nb-back:hover, .nz-nb-add:hover { background: rgba(255,255,255,0.28); }
.nz-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }
.nz-nb-login-hint { display: flex; align-items: center; gap: 10px; background: #fff3cd; border: 1px solid #ffc107; padding: 12px 20px; margin: 12px; border-radius: 10px; font-size: 0.88rem; }
.nz-nb-login-hint a { color: #1B5E20; cursor: pointer; font-weight: 600; text-decoration: underline; }
.nz-nb-stats { display: flex; align-items: center; justify-content: space-around; padding: 14px 20px; background: white; border-bottom: 1px solid #e8e8e8; }
.nz-stat { text-align: center; }
.nz-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #1B5E20; }
.nz-stat-lbl { font-size: 0.72rem; color: #888; }
.nz-stat-div { width: 1px; height: 30px; background: #e0e0e0; }
.nz-nb-main-tabs { display: flex; background: white; border-bottom: 2px solid #e8e8e8; }
.nz-nb-tab { flex: 1; padding: 12px 8px; background: none; border: none; font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.15s; }
.nz-nb-tab.active { color: #1B5E20; border-bottom-color: #0D47A1; }
.nz-nb-filters { background: white; padding: 10px 16px 8px; border-bottom: 1px solid #eee; }
.nz-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.nz-filter-btn { padding: 5px 14px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.nz-filter-btn.active { background: #1B5E20; border-color: #1B5E20; color: white; }
.nz-type-filter { padding: 4px 10px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555; transition: all 0.15s; }
.nz-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.nz-type-filter.type-active { color: white; }
.nz-search-wrap { margin-top: 4px; }
.nz-search { width: 100%; padding: 7px 14px; border: 1.5px solid #ddd; border-radius: 20px; font-size: 0.85rem; outline: none; box-sizing: border-box; }
.nz-search:focus { border-color: #1B5E20; }
.nz-nb-empty { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; gap: 12px; color: #999; }
.nz-empty-icon { font-size: 2.5rem; margin: 0; }
.nz-empty-msg { font-size: 0.9rem; text-align: center; }
.nz-loading-spin { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #e0e0e0; border-top-color: #1B5E20; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.nz-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; padding: 16px; }
.nz-nb-card { background: white; border-radius: 14px; padding: 14px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: all 0.15s; border: 1.5px solid transparent; }
.nz-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #1B5E2030; }
.nz-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.nz-status-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; }
.nz-status-badge.tried    { background: #DCFCE7; color: #166534; }
.nz-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.nz-wine-type-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
.nz-vintage-tag { margin-left: auto; font-size: 0.78rem; font-weight: 700; color: #1B5E20; background: #e8f5e9; padding: 1px 8px; border-radius: 8px; }
.nz-card-winery { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.nz-card-grape  { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.nz-card-region { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.nz-card-stars  { display: flex; gap: 2px; margin-bottom: 6px; }
.nz-star { font-size: 0.85rem; color: #ddd; }
.nz-star.filled { color: #F59E0B; }
.nz-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.nz-tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; border: 1.5px solid #e0e0e0; color: #555; background: #fafafa; }
.nz-tag-more { font-size: 0.7rem; color: #aaa; }
.nz-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }
.nz-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.nz-profile-panel { max-width: 600px; margin: 0 auto; }
.nz-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.nz-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.nz-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }
.nz-type-bars { display: flex; flex-direction: column; gap: 8px; }
.nz-type-bar-row { display: flex; align-items: center; gap: 10px; }
.nz-type-bar-label { font-size: 0.78rem; width: 90px; flex-shrink: 0; color: #555; }
.nz-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.nz-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.nz-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.nz-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.nz-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.nz-cloud-tag small { font-size: 0.65em; color: #888; }
.nz-grape-list, .nz-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.nz-grape-row, .nz-vrow { display: flex; align-items: center; gap: 10px; }
.nz-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.nz-grape-bar-wrap, .nz-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.nz-grape-bar { height: 100%; background: #1B5E20; border-radius: 4px; transition: width 0.4s; }
.nz-vrow-bar { height: 100%; background: #0D47A1; border-radius: 4px; transition: width 0.4s; }
.nz-grape-cnt, .nz-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.nz-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }
</style>
