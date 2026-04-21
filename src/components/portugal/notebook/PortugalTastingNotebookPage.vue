<template>
  <div class="pt-nb-page">
    <div class="pt-nb-header">
      <button class="pt-nb-back" @click="emit('back')">← 返回</button>
      <h1 class="pt-nb-title">📔 葡萄牙品飲筆記</h1>
      <button class="pt-nb-add" @click="openNewNote" :disabled="!authUser">+ 新增</button>
    </div>

    <div v-if="!authUser" class="pt-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用葡萄牙品飲筆記功能</p>
    </div>

    <div class="pt-nb-stats">
      <div class="pt-stat"><span class="pt-stat-num">{{ stats.tried }}</span><span class="pt-stat-lbl">已品飲</span></div>
      <div class="pt-stat-div" />
      <div class="pt-stat"><span class="pt-stat-num">{{ stats.wishlist }}</span><span class="pt-stat-lbl">想喝清單</span></div>
      <div class="pt-stat-div" />
      <div class="pt-stat"><span class="pt-stat-num">{{ stats.portCount }}</span><span class="pt-stat-lbl">波特酒款</span></div>
      <div class="pt-stat-div" />
      <div class="pt-stat"><span class="pt-stat-num">{{ stats.regions }}</span><span class="pt-stat-lbl">產區涵蓋</span></div>
    </div>

    <div class="pt-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="['pt-nb-tab', mainTab === mt.key && 'active']" @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="pt-nb-filters">
        <div class="pt-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="['pt-filter-btn', filterStatus === tab.key && 'active']" @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="pt-filter-row type-row">
          <button :class="['pt-type-filter', filterType === 'all' && 'all-active']" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['pt-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="pt-search-wrap">
          <input v-model="searchQuery" class="pt-search" placeholder="搜尋生產者、品種、產區…" />
        </div>
      </div>

      <div v-if="loading" class="pt-nb-empty"><div class="pt-loading-spin" /><p>載入中…</p></div>
      <div v-else-if="filteredNotes.length === 0" class="pt-nb-empty">
        <p class="pt-empty-icon">📭</p>
        <p class="pt-empty-msg">{{ !authUser ? '請登入以查看筆記' : '尚無符合的筆記，點擊右上角＋新增' }}</p>
      </div>

      <div v-else class="pt-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="pt-nb-card" @click="openNote(note)">
          <div class="pt-card-top">
            <span :class="['pt-status-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="pt-wine-type-badge" :style="{ background: wineTypeColor(note.wine_type) }">{{ wineTypeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="pt-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="pt-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="pt-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="pt-card-region">{{ fmtRegion(note) }}</p>
          <div v-if="note.rating" class="pt-card-stars">
            <span v-for="i in 5" :key="i" :class="['pt-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="pt-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="pt-tag" :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="pt-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="pt-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else-if="mainTab === 'profile'" class="pt-nb-scroll">
      <div class="pt-profile-panel">
        <template v-if="notes.length === 0">
          <p class="pt-profile-hint">📊 新增品飲記錄後即可生成葡萄牙葡萄酒品味輪廓</p>
        </template>
        <template v-else>
          <div class="pt-profile-section">
            <h4>🇵🇹 酒款類型分佈</h4>
            <div class="pt-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="pt-type-bar-row">
                <span class="pt-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="pt-type-bar-track"><div class="pt-type-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
                <span class="pt-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>
          <div class="pt-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="pt-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag" class="pt-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <div class="pt-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="pt-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="pt-grape-row">
                <span class="pt-grape-name">{{ grape }}</span>
                <div class="pt-grape-bar-wrap"><div class="pt-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div></div>
                <span class="pt-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="pt-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="pt-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="pt-vrow">
                <span class="pt-vrow-yr">{{ vintage }}</span>
                <div class="pt-vrow-bar-wrap"><div class="pt-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div></div>
                <span class="pt-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <PortugalTastingNoteModal v-if="showModal" :note="selectedNote" @save="onModalSave" @delete="onModalDelete" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import PortugalTastingNoteModal from './PortugalTastingNoteModal.vue'

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
  { id: 'port_vintage', emoji: '🏆', short: 'Vintage',    color: '#5B0F1E' },
  { id: 'port_lbv',     emoji: '📅', short: 'LBV',        color: '#7B1A2A' },
  { id: 'port_tawny',   emoji: '🥃', short: 'Tawny',      color: '#9B5A00' },
  { id: 'port_ruby',    emoji: '💎', short: 'Ruby',        color: '#8B1A1A' },
  { id: 'port_white',   emoji: '🌟', short: 'White Port',  color: '#C4A217' },
  { id: 'vinho_verde',  emoji: '🌿', short: 'V. Verde',    color: '#3A7A3A' },
  { id: 'douro_red',    emoji: '🍷', short: 'Douro Red',   color: '#6B1A1A' },
  { id: 'douro_white',  emoji: '🥂', short: 'Douro White', color: '#B8981A' },
  { id: 'alentejo',     emoji: '☀️', short: 'Alentejo',   color: '#C07A1A' },
  { id: 'dao',          emoji: '🌲', short: 'Dão',         color: '#4A6A2A' },
  { id: 'madeira',      emoji: '🏝️', short: 'Madeira',    color: '#8B6914' },
  { id: 'other',        emoji: '🇵🇹', short: '其他',        color: '#6B7280' },
]

const PORT_TYPES = new Set(['port_vintage', 'port_lbv', 'port_tawny', 'port_ruby', 'port_white'])

const filteredNotes = computed(() => {
  let result = notes.value
  if (filterStatus.value !== 'all') result = result.filter(n => n.status === filterStatus.value)
  if (filterType.value !== 'all')   result = result.filter(n => n.wine_type === filterType.value)
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(n => n.chateau_name?.toLowerCase().includes(q) || n.aoc_id?.toLowerCase().includes(q) || n.grape_variety?.toLowerCase().includes(q) || n.pt_region?.toLowerCase().includes(q))
  }
  return result
})
const stats = computed(() => ({
  tried: notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  portCount: notes.value.filter(n => PORT_TYPES.has(n.wine_type)).length,
  regions: new Set(notes.value.map(n => n.pt_region || n.aoc_id).filter(Boolean)).size,
}))
const topAromas = computed(() => { const map = {}; notes.value.forEach(n => { n.aroma_tags?.forEach(t => { map[t] = (map[t] || 0) + 1 }) }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 18) })
const topGrapes = computed(() => { const map = {}; notes.value.forEach(n => { if (n.grape_variety?.trim()) map[n.grape_variety.trim()] = (map[n.grape_variety.trim()] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10) })
const maxGrapeCount = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))
const vintageDist = computed(() => { const map = {}; notes.value.forEach(n => { if (n.vintage) map[n.vintage] = (map[n.vintage] || 0) + 1 }); return Object.entries(map).sort((a, b) => b[0] - a[0]).slice(0, 12) })
const maxVintageCount = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))
const typeCount = (id) => notes.value.filter(n => n.wine_type === id).length
const typePct   = (id) => notes.value.length ? Math.round(typeCount(id) / notes.value.length * 100) : 0
const wineTypeColor = (id) => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const wineTypeEmoji = (id) => WINE_TYPES.find(t => t.id === id)?.emoji || '🇵🇹'
const fmtRegion = (note) => note.pt_region || note.aoc_id || ''

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase.from('tasting_notes').select('*').eq('user_id', authUser.value.id).eq('source', 'portugal').order('updated_at', { ascending: false })
  if (error) console.warn('載入葡萄牙筆記失敗:', error.message)
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
.pt-nb-page { min-height: 100vh; background: linear-gradient(160deg, #fdf0f0 0%, #fef8f8 40%, #faf0ea 100%); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif; }
.pt-nb-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: linear-gradient(135deg, #5B0F1E 0%, #9B5A00 100%); color: white; }
.pt-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.pt-nb-back, .pt-nb-add { background: rgba(255,255,255,0.18); border: none; color: white; padding: 7px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
.pt-nb-back:hover, .pt-nb-add:hover { background: rgba(255,255,255,0.28); }
.pt-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }
.pt-nb-login-hint { display: flex; align-items: center; gap: 10px; background: #fff3cd; border: 1px solid #ffc107; padding: 12px 20px; margin: 12px; border-radius: 10px; font-size: 0.88rem; }
.pt-nb-login-hint a { color: #5B0F1E; cursor: pointer; font-weight: 600; text-decoration: underline; }
.pt-nb-stats { display: flex; align-items: center; justify-content: space-around; padding: 14px 20px; background: white; border-bottom: 1px solid #e8e8e8; }
.pt-stat { text-align: center; }
.pt-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #5B0F1E; }
.pt-stat-lbl { font-size: 0.72rem; color: #888; }
.pt-stat-div { width: 1px; height: 30px; background: #e0e0e0; }
.pt-nb-main-tabs { display: flex; background: white; border-bottom: 2px solid #e8e8e8; }
.pt-nb-tab { flex: 1; padding: 12px 8px; background: none; border: none; font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.15s; }
.pt-nb-tab.active { color: #5B0F1E; border-bottom-color: #9B5A00; }
.pt-nb-filters { background: white; padding: 10px 16px 8px; border-bottom: 1px solid #eee; }
.pt-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.pt-filter-btn { padding: 5px 14px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.pt-filter-btn.active { background: #5B0F1E; border-color: #5B0F1E; color: white; }
.pt-type-filter { padding: 4px 10px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555; transition: all 0.15s; }
.pt-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.pt-type-filter.type-active { color: white; }
.pt-search-wrap { margin-top: 4px; }
.pt-search { width: 100%; padding: 7px 14px; border: 1.5px solid #ddd; border-radius: 20px; font-size: 0.85rem; outline: none; box-sizing: border-box; }
.pt-search:focus { border-color: #5B0F1E; }
.pt-nb-empty { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; gap: 12px; color: #999; }
.pt-empty-icon { font-size: 2.5rem; margin: 0; }
.pt-empty-msg { font-size: 0.9rem; text-align: center; }
.pt-loading-spin { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #e0e0e0; border-top-color: #5B0F1E; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.pt-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; padding: 16px; }
.pt-nb-card { background: white; border-radius: 14px; padding: 14px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: all 0.15s; border: 1.5px solid transparent; }
.pt-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #5B0F1E30; }
.pt-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.pt-status-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; }
.pt-status-badge.tried    { background: #DCFCE7; color: #166534; }
.pt-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.pt-wine-type-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
.pt-vintage-tag { margin-left: auto; font-size: 0.78rem; font-weight: 700; color: #5B0F1E; background: #fdeaea; padding: 1px 8px; border-radius: 8px; }
.pt-card-producer { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.pt-card-grape   { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.pt-card-region  { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.pt-card-stars   { display: flex; gap: 2px; margin-bottom: 6px; }
.pt-star { font-size: 0.85rem; color: #ddd; }
.pt-star.filled { color: #F59E0B; }
.pt-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.pt-tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; border: 1.5px solid #e0e0e0; color: #555; background: #fafafa; }
.pt-tag-more { font-size: 0.7rem; color: #aaa; }
.pt-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }
.pt-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.pt-profile-panel { max-width: 600px; margin: 0 auto; }
.pt-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.pt-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.pt-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }
.pt-type-bars { display: flex; flex-direction: column; gap: 8px; }
.pt-type-bar-row { display: flex; align-items: center; gap: 10px; }
.pt-type-bar-label { font-size: 0.78rem; width: 90px; flex-shrink: 0; color: #555; }
.pt-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.pt-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.pt-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.pt-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.pt-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.pt-cloud-tag small { font-size: 0.65em; color: #888; }
.pt-grape-list, .pt-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.pt-grape-row, .pt-vrow { display: flex; align-items: center; gap: 10px; }
.pt-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.pt-grape-bar-wrap, .pt-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.pt-grape-bar { height: 100%; background: #5B0F1E; border-radius: 4px; transition: width 0.4s; }
.pt-vrow-bar { height: 100%; background: #9B5A00; border-radius: 4px; transition: width 0.4s; }
.pt-grape-cnt, .pt-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.pt-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }
</style>
