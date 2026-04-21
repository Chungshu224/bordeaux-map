<template>
  <div class="au-nb-page">
    <div class="au-nb-header">
      <button class="au-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="au-nb-title">📔 澳洲品飲筆記</h1>
      <button class="au-nb-add" @click="openNewNote" :disabled="!authUser">+ 新增</button>
    </div>

    <div v-if="!authUser" class="au-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用澳洲品飲筆記功能</p>
    </div>

    <div class="au-nb-stats">
      <div class="au-stat"><span class="au-stat-num">{{ stats.tried }}</span><span class="au-stat-lbl">已品飲</span></div>
      <div class="au-stat-div" />
      <div class="au-stat"><span class="au-stat-num">{{ stats.wishlist }}</span><span class="au-stat-lbl">想喝清單</span></div>
      <div class="au-stat-div" />
      <div class="au-stat"><span class="au-stat-num">{{ stats.regions }}</span><span class="au-stat-lbl">產區涵蓋</span></div>
      <div class="au-stat-div" />
      <div class="au-stat"><span class="au-stat-num">{{ stats.grapes }}</span><span class="au-stat-lbl">品種記錄</span></div>
    </div>

    <div class="au-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="['au-nb-tab', mainTab === mt.key && 'active']" @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="au-nb-filters">
        <div class="au-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="['au-filter-btn', filterStatus === tab.key && 'active']" @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="au-filter-row type-row">
          <button :class="['au-type-filter', filterType === 'all' && 'all-active']" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['au-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="au-search-wrap">
          <input v-model="searchQuery" class="au-search" placeholder="搜尋酒莊、品種、產區…" />
        </div>
      </div>

      <div v-if="loading" class="au-nb-empty"><div class="au-loading-spin" /><p>載入中…</p></div>
      <div v-else-if="filteredNotes.length === 0" class="au-nb-empty">
        <p class="au-empty-icon">📭</p>
        <p class="au-empty-msg">{{ !authUser ? '請登入以查看筆記' : '尚無符合的筆記，點擊右上角＋新增' }}</p>
      </div>

      <div v-else class="au-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="au-nb-card" @click="openNote(note)">
          <div class="au-card-top">
            <span :class="['au-status-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="au-wine-type-badge" :style="{ background: wineTypeColor(note.wine_type) }">{{ wineTypeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="au-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="au-card-winery">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="au-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="au-card-region">{{ fmtRegion(note) }}</p>
          <div v-if="note.rating" class="au-card-stars">
            <span v-for="i in 5" :key="i" :class="['au-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="au-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="au-tag" :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="au-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="au-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else-if="mainTab === 'profile'" class="au-nb-scroll">
      <div class="au-profile-panel">
        <template v-if="notes.length === 0">
          <p class="au-profile-hint">📊 新增品飲記錄後即可生成澳洲葡萄酒品味輪廓</p>
        </template>
        <template v-else>
          <div class="au-profile-section">
            <h4>🦘 酒款類型分佈</h4>
            <div class="au-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="au-type-bar-row">
                <span class="au-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="au-type-bar-track"><div class="au-type-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
                <span class="au-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>
          <div class="au-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="au-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag" class="au-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <div class="au-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="au-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="au-grape-row">
                <span class="au-grape-name">{{ grape }}</span>
                <div class="au-grape-bar-wrap"><div class="au-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div></div>
                <span class="au-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="au-profile-section">
            <h4>📍 常去產區</h4>
            <div class="au-grape-list">
              <div v-for="[region, cnt] in topRegions" :key="region" class="au-grape-row">
                <span class="au-grape-name">{{ region }}</span>
                <div class="au-grape-bar-wrap"><div class="au-grape-bar" :style="{ width: `${(cnt / maxRegionCount) * 100}%`, background: '#8B1A1A' }"></div></div>
                <span class="au-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="au-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="au-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="au-vrow">
                <span class="au-vrow-yr">{{ vintage }}</span>
                <div class="au-vrow-bar-wrap"><div class="au-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div></div>
                <span class="au-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <AustraliaTastingNoteModal v-if="showModal" :note="selectedNote" @save="onModalSave" @delete="onModalDelete" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import AustraliaTastingNoteModal from './AustraliaTastingNoteModal.vue'

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
  { id: 'shiraz',     emoji: '🦘', short: 'Shiraz',      color: '#8B1A1A' },
  { id: 'cabernet',   emoji: '🍷', short: 'Cabernet S.', color: '#7B0020' },
  { id: 'chardonnay', emoji: '🥂', short: 'Chardonnay',  color: '#C4A217' },
  { id: 'riesling',   emoji: '🌿', short: 'Riesling',    color: '#5A8A3A' },
  { id: 'pinot_noir', emoji: '🍓', short: 'Pinot Noir',  color: '#9B1B30' },
  { id: 'grenache',   emoji: '🔥', short: 'Grenache',    color: '#C04A00' },
  { id: 'sparkling',  emoji: '🍾', short: '氣泡',         color: '#C09B20' },
  { id: 'fortified',  emoji: '🥃', short: '加烈酒',       color: '#8B6914' },
  { id: 'other',      emoji: '🌏', short: '其他',         color: '#6B7280' },
]

const filteredNotes = computed(() => {
  let result = notes.value
  if (filterStatus.value !== 'all') result = result.filter(n => n.status === filterStatus.value)
  if (filterType.value !== 'all')   result = result.filter(n => n.wine_type === filterType.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n => n.chateau_name?.toLowerCase().includes(q) || n.aoc_id?.toLowerCase().includes(q) || n.grape_variety?.toLowerCase().includes(q) || n.au_region?.toLowerCase().includes(q))
  }
  return result
})
const stats = computed(() => ({
  tried: notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  regions: new Set(notes.value.map(n => n.au_region || n.aoc_id).filter(Boolean)).size,
  grapes: new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size,
}))
const topAromas  = computed(() => { const map = {}; notes.value.forEach(n => { n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 }) }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18) })
const topGrapes  = computed(() => { const map = {}; notes.value.forEach(n => { if (n.grape_variety?.trim()) map[n.grape_variety.trim()] = (map[n.grape_variety.trim()] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10) })
const topRegions = computed(() => { const map = {}; notes.value.forEach(n => { const r = n.au_region || n.aoc_id; if (r) map[r] = (map[r] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10) })
const maxGrapeCount  = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))
const maxRegionCount = computed(() => Math.max(1, ...topRegions.value.map(e => e[1])))
const vintageDist    = computed(() => { const map = {}; notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 12) })
const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))
const typeCount = (id) => notes.value.filter(n => n.wine_type === id).length
const typePct   = (id) => notes.value.length ? Math.round(typeCount(id) / notes.value.length * 100) : 0
const wineTypeColor = (id) => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const wineTypeEmoji = (id) => WINE_TYPES.find(t => t.id === id)?.emoji || '🌏'
const fmtRegion = (note) => note.au_region || note.aoc_id || ''

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase.from('tasting_notes').select('*').eq('user_id', authUser.value.id).eq('source', 'australia').order('updated_at', { ascending: false })
  if (error) console.warn('載入澳洲筆記失敗:', error.message)
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
.au-nb-page { min-height: 100vh; background: linear-gradient(160deg, #fdf6f0 0%, #fef8f3 40%, #faf0ea 100%); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif; }
.au-nb-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: linear-gradient(135deg, #7B1A1A 0%, #C04A00 100%); color: white; }
.au-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.au-nb-back, .au-nb-add { background: rgba(255,255,255,0.18); border: none; color: white; padding: 7px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
.au-nb-back:hover, .au-nb-add:hover { background: rgba(255,255,255,0.28); }
.au-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }
.au-nb-login-hint { display: flex; align-items: center; gap: 10px; background: #fff3cd; border: 1px solid #ffc107; padding: 12px 20px; margin: 12px; border-radius: 10px; font-size: 0.88rem; }
.au-nb-login-hint a { color: #7B1A1A; cursor: pointer; font-weight: 600; text-decoration: underline; }
.au-nb-stats { display: flex; align-items: center; justify-content: space-around; padding: 14px 20px; background: white; border-bottom: 1px solid #e8e8e8; }
.au-stat { text-align: center; }
.au-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #7B1A1A; }
.au-stat-lbl { font-size: 0.72rem; color: #888; }
.au-stat-div { width: 1px; height: 30px; background: #e0e0e0; }
.au-nb-main-tabs { display: flex; background: white; border-bottom: 2px solid #e8e8e8; }
.au-nb-tab { flex: 1; padding: 12px 8px; background: none; border: none; font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.15s; }
.au-nb-tab.active { color: #7B1A1A; border-bottom-color: #C04A00; }
.au-nb-filters { background: white; padding: 10px 16px 8px; border-bottom: 1px solid #eee; }
.au-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.au-filter-btn { padding: 5px 14px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.au-filter-btn.active { background: #7B1A1A; border-color: #7B1A1A; color: white; }
.au-type-filter { padding: 4px 10px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555; transition: all 0.15s; }
.au-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.au-type-filter.type-active { color: white; }
.au-search-wrap { margin-top: 4px; }
.au-search { width: 100%; padding: 7px 14px; border: 1.5px solid #ddd; border-radius: 20px; font-size: 0.85rem; outline: none; box-sizing: border-box; }
.au-search:focus { border-color: #7B1A1A; }
.au-nb-empty { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; gap: 12px; color: #999; }
.au-empty-icon { font-size: 2.5rem; margin: 0; }
.au-empty-msg { font-size: 0.9rem; text-align: center; }
.au-loading-spin { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #e0e0e0; border-top-color: #7B1A1A; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.au-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; padding: 16px; }
.au-nb-card { background: white; border-radius: 14px; padding: 14px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: all 0.15s; border: 1.5px solid transparent; }
.au-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #7B1A1A30; }
.au-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.au-status-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; }
.au-status-badge.tried    { background: #DCFCE7; color: #166534; }
.au-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.au-wine-type-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
.au-vintage-tag { margin-left: auto; font-size: 0.78rem; font-weight: 700; color: #7B1A1A; background: #fee8e0; padding: 1px 8px; border-radius: 8px; }
.au-card-winery { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.au-card-grape  { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.au-card-region { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.au-card-stars  { display: flex; gap: 2px; margin-bottom: 6px; }
.au-star { font-size: 0.85rem; color: #ddd; }
.au-star.filled { color: #F59E0B; }
.au-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.au-tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; border: 1.5px solid #e0e0e0; color: #555; background: #fafafa; }
.au-tag-more { font-size: 0.7rem; color: #aaa; }
.au-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }
.au-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.au-profile-panel { max-width: 600px; margin: 0 auto; }
.au-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.au-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.au-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }
.au-type-bars { display: flex; flex-direction: column; gap: 8px; }
.au-type-bar-row { display: flex; align-items: center; gap: 10px; }
.au-type-bar-label { font-size: 0.78rem; width: 90px; flex-shrink: 0; color: #555; }
.au-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.au-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.au-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.au-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.au-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.au-cloud-tag small { font-size: 0.65em; color: #888; }
.au-grape-list, .au-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.au-grape-row, .au-vrow { display: flex; align-items: center; gap: 10px; }
.au-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.au-grape-bar-wrap, .au-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.au-grape-bar { height: 100%; background: #7B1A1A; border-radius: 4px; transition: width 0.4s; }
.au-vrow-bar { height: 100%; background: #C04A00; border-radius: 4px; transition: width 0.4s; }
.au-grape-cnt, .au-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.au-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }
</style>
