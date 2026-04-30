<template>
  <div class="hu-nb-page">

    <!-- Header -->
    <div class="hu-nb-header">
      <button class="hu-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="hu-nb-title">📔 匈牙利品飲筆記</h1>
      <button class="hu-nb-add" @click="openNewNote" :disabled="!authUser">
        <span>+</span> 新增
      </button>
    </div>

    <!-- 未登入提示 -->
    <div v-if="!authUser" class="hu-nb-login-hint">
      <span>🔑</span>
      <p>請先<a @click="router.push('/login')">登入</a>以使用匈牙利品飲筆記功能</p>
    </div>

    <!-- Stats bar -->
    <div class="hu-nb-stats">
      <div class="hu-stat"><span class="hu-stat-num">{{ stats.tried }}</span><span class="hu-stat-lbl">已品飲</span></div>
      <div class="hu-stat-div" />
      <div class="hu-stat"><span class="hu-stat-num">{{ stats.wishlist }}</span><span class="hu-stat-lbl">想喝清單</span></div>
      <div class="hu-stat-div" />
      <div class="hu-stat"><span class="hu-stat-num">{{ stats.regions }}</span><span class="hu-stat-lbl">產區涵蓋</span></div>
      <div class="hu-stat-div" />
      <div class="hu-stat"><span class="hu-stat-num">{{ stats.grapes }}</span><span class="hu-stat-lbl">品種記錄</span></div>
    </div>

    <!-- 主選項卡 -->
    <div class="hu-nb-main-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key"
        :class="['hu-nb-tab', mainTab === mt.key && 'active']"
        @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <!-- ① 筆記列表 -->
    <template v-if="mainTab === 'notes'">
      <div class="hu-nb-filters">
        <div class="hu-filter-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key"
            :class="['hu-filter-btn', filterStatus === tab.key && 'active']"
            @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="hu-filter-row type-row">
          <button :class="['hu-type-filter', filterType === 'all' && 'all-active']" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id"
            :class="['hu-type-filter', filterType === t.id && 'type-active']"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">
            {{ t.emoji }} {{ t.short }}
          </button>
        </div>
        <div class="hu-search-wrap">
          <input v-model="searchQuery" class="hu-search" placeholder="搜尋生產者、品種、產區…" />
        </div>
      </div>

      <div v-if="loading" class="hu-nb-empty">
        <div class="hu-loading-spin" /><p>載入中…</p>
      </div>
      <div v-else-if="filteredNotes.length === 0" class="hu-nb-empty">
        <p class="hu-empty-icon">📭</p>
        <p class="hu-empty-msg">
          {{ !authUser ? '請登入以查看筆記' : searchQuery ? '找不到符合的筆記' :
             filterStatus === 'tried' ? '尚無品飲記錄' : filterStatus === 'wishlist' ? '想喝清單為空' :
             filterType !== 'all' ? `尚無${WINE_TYPES.find(t=>t.id===filterType)?.short}記錄` :
             '尚無任何筆記，點擊右上角＋新增' }}
        </p>
      </div>

      <div v-else class="hu-nb-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="hu-nb-card" @click="openNote(note)">
          <div class="hu-card-top">
            <span :class="['hu-status-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="hu-wine-type-badge" :style="{ background: wineTypeColor(note.wine_type) }">{{ wineTypeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="hu-vintage-tag">{{ note.vintage }}</span>
          </div>
          <h3 class="hu-card-producer">{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="hu-card-grape">🍇 {{ note.grape_variety }}</p>
          <p class="hu-card-doc">{{ fmtDoc(note) }}</p>
          <div v-if="note.rating" class="hu-card-stars">
            <span v-for="i in 5" :key="i" :class="['hu-star', i <= note.rating && 'filled']">★</span>
          </div>
          <div v-if="note.aroma_tags?.length" class="hu-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag" class="hu-tag" :style="{ borderColor: wineTypeColor(note.wine_type) }">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3" class="hu-tag-more">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="hu-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <!-- ② 品味分析 -->
    <div v-else-if="mainTab === 'profile'" class="hu-nb-scroll">
      <div class="hu-profile-panel">
        <template v-if="notes.length === 0">
          <p class="hu-profile-hint">📊 新增品飲記錄後即可生成匈牙利酒款品味輪廓</p>
        </template>
        <template v-else>
          <div class="hu-profile-section">
            <h4>🍷 酒款類型分佈</h4>
            <div class="hu-type-bars">
              <div v-for="t in WINE_TYPES" :key="t.id" class="hu-type-bar-row">
                <span class="hu-type-bar-label">{{ t.emoji }} {{ t.short }}</span>
                <div class="hu-type-bar-track"><div class="hu-type-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
                <span class="hu-type-bar-cnt">{{ typeCount(t.id) }}</span>
              </div>
            </div>
          </div>
          <div class="hu-profile-section">
            <h4>👃 常見香氣</h4>
            <div class="hu-tag-cloud">
              <span v-for="[tag, count] in topAromas" :key="tag" class="hu-cloud-tag"
                :style="{ fontSize: `${0.72 + count * 0.1}rem`, opacity: 0.6 + count * 0.07 }">
                {{ tag }} <small>×{{ count }}</small>
              </span>
            </div>
          </div>
          <div class="hu-profile-section">
            <h4>🍇 常用品種</h4>
            <div class="hu-grape-list">
              <div v-for="[grape, cnt] in topGrapes" :key="grape" class="hu-grape-row">
                <span class="hu-grape-name">{{ grape }}</span>
                <div class="hu-grape-bar-wrap"><div class="hu-grape-bar" :style="{ width: `${(cnt / maxGrapeCount) * 100}%` }"></div></div>
                <span class="hu-grape-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
          <div class="hu-profile-section">
            <h4>📅 年份分佈</h4>
            <div class="hu-vintage-list">
              <div v-for="[vintage, cnt] in vintageDist" :key="vintage" class="hu-vrow">
                <span class="hu-vrow-yr">{{ vintage }}</span>
                <div class="hu-vrow-bar-wrap"><div class="hu-vrow-bar" :style="{ width: `${(cnt / maxVintageCount) * 100}%` }"></div></div>
                <span class="hu-vrow-cnt">{{ cnt }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <HungaryTastingNoteModal
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
import HungaryTastingNoteModal from './HungaryTastingNoteModal.vue'

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
  { id: 'aszu',      emoji: '🍯', short: 'Aszú 甜',  color: '#C07F00' },
  { id: 'furmint',   emoji: '🥂', short: 'Furmint',  color: '#B8860B' },
  { id: 'feher',     emoji: '🫧', short: '白酒',     color: '#C8A217' },
  { id: 'voros',     emoji: '🍷', short: '紅酒',     color: '#8B1A1A' },
  { id: 'bikaver',   emoji: '🐂', short: 'Bikavér',  color: '#7B1A1A' },
  { id: 'rozsa',     emoji: '🌸', short: '粉紅',     color: '#D45E8C' },
  { id: 'egyeb',     emoji: '🍾', short: '其他',     color: '#6B7280' },
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
      n.hu_region?.toLowerCase().includes(q)
    )
  }
  return result
})

const stats = computed(() => ({
  tried:    notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  regions:  new Set(notes.value.map(n => n.hu_region || n.aoc_id).filter(Boolean)).size,
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
const typePct   = (id) => { const t = notes.value.length; return t > 0 ? Math.round(typeCount(id) / t * 100) : 0 }
const wineTypeColor = (id) => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const wineTypeEmoji = (id) => WINE_TYPES.find(t => t.id === id)?.emoji || '🍾'
const fmtDoc = (note) => {
  const parts = []
  if (note.tokaj_level) parts.push(note.tokaj_level)
  else if (note.aoc_id && note.aoc_id !== 'Magyarország') parts.push(note.aoc_id)
  if (note.hu_region) parts.push(note.hu_region)
  return parts.join(' · ') || note.aoc_id || ''
}

const loadNotes = async () => {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase
    .from('tasting_notes').select('*')
    .eq('user_id', authUser.value.id).eq('source', 'hungary')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入匈牙利筆記失敗:', error.message)
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
.hu-nb-page { min-height: 100vh; background: linear-gradient(160deg, #fdf8f0 0%, #fff9f0 40%, #fdf5e8 100%); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif; }
.hu-nb-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; background: linear-gradient(135deg, #7B1A1A 0%, #C07F00 100%); color: white; }
.hu-nb-title { font-size: 1.1rem; font-weight: 800; margin: 0; }
.hu-nb-back, .hu-nb-add { background: rgba(255,255,255,0.18); border: none; color: white; padding: 7px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: background 0.15s; }
.hu-nb-back:hover, .hu-nb-add:hover { background: rgba(255,255,255,0.28); }
.hu-nb-add:disabled { opacity: 0.45; cursor: not-allowed; }
.hu-nb-login-hint { display: flex; align-items: center; gap: 10px; background: #fff3cd; border: 1px solid #ffc107; padding: 12px 20px; margin: 12px; border-radius: 10px; font-size: 0.88rem; }
.hu-nb-login-hint a { color: #7B1A1A; cursor: pointer; font-weight: 600; text-decoration: underline; }
.hu-nb-stats { display: flex; align-items: center; justify-content: space-around; padding: 14px 20px; background: white; border-bottom: 1px solid #e8e8e8; }
.hu-stat { text-align: center; }
.hu-stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: #7B1A1A; }
.hu-stat-lbl { font-size: 0.72rem; color: #888; }
.hu-stat-div { width: 1px; height: 30px; background: #e0e0e0; }
.hu-nb-main-tabs { display: flex; background: white; border-bottom: 2px solid #e8e8e8; }
.hu-nb-tab { flex: 1; padding: 12px 8px; background: none; border: none; font-size: 0.88rem; font-weight: 600; color: #888; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; transition: all 0.15s; }
.hu-nb-tab.active { color: #7B1A1A; border-bottom-color: #C07F00; }
.hu-nb-filters { background: white; padding: 10px 16px 8px; border-bottom: 1px solid #eee; }
.hu-filter-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.hu-filter-btn { padding: 5px 14px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.hu-filter-btn.active { background: #7B1A1A; border-color: #7B1A1A; color: white; }
.hu-type-filter { padding: 4px 10px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #555; transition: all 0.15s; }
.hu-type-filter.all-active { background: #374151; border-color: #374151; color: white; }
.hu-type-filter.type-active { color: white; }
.hu-search-wrap { margin-top: 4px; }
.hu-search { width: 100%; padding: 7px 14px; border: 1.5px solid #ddd; border-radius: 20px; font-size: 0.85rem; outline: none; box-sizing: border-box; }
.hu-search:focus { border-color: #C07F00; }
.hu-nb-empty { display: flex; flex-direction: column; align-items: center; padding: 48px 20px; gap: 12px; color: #999; }
.hu-empty-icon { font-size: 2.5rem; margin: 0; }
.hu-empty-msg { font-size: 0.9rem; text-align: center; }
.hu-loading-spin { width: 32px; height: 32px; border-radius: 50%; border: 3px solid #e0e0e0; border-top-color: #C07F00; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.hu-nb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; padding: 16px; }
.hu-nb-card { background: white; border-radius: 14px; padding: 14px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.08); transition: all 0.15s; border: 1.5px solid transparent; }
.hu-nb-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.12); border-color: #C07F0030; }
.hu-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
.hu-status-badge { font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 10px; }
.hu-status-badge.tried    { background: #DCFCE7; color: #166534; }
.hu-status-badge.wishlist { background: #FCE7F3; color: #9D174D; }
.hu-wine-type-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
.hu-vintage-tag { margin-left: auto; font-size: 0.78rem; font-weight: 700; color: #7B1A1A; background: #fdf0e0; padding: 1px 8px; border-radius: 8px; }
.hu-card-producer { margin: 0 0 3px; font-size: 0.95rem; font-weight: 700; color: #1a1a1a; }
.hu-card-grape { margin: 0 0 3px; font-size: 0.8rem; color: #666; }
.hu-card-doc { margin: 0 0 6px; font-size: 0.78rem; color: #888; }
.hu-card-stars { display: flex; gap: 2px; margin-bottom: 6px; }
.hu-star { font-size: 0.85rem; color: #ddd; }
.hu-star.filled { color: #F59E0B; }
.hu-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 6px; }
.hu-tag { font-size: 0.7rem; padding: 2px 8px; border-radius: 10px; border: 1.5px solid #e0e0e0; color: #555; background: #fafafa; }
.hu-tag-more { font-size: 0.7rem; color: #aaa; padding: 2px 4px; }
.hu-card-notes { margin: 0; font-size: 0.78rem; color: #777; line-height: 1.4; }
.hu-nb-scroll { overflow-y: auto; flex: 1; padding: 16px; }
.hu-profile-panel { max-width: 600px; margin: 0 auto; }
.hu-profile-hint { text-align: center; color: #888; padding: 48px 20px; font-size: 0.9rem; }
.hu-profile-section { background: white; border-radius: 14px; padding: 16px; margin-bottom: 16px; }
.hu-profile-section h4 { margin: 0 0 12px; font-size: 0.9rem; font-weight: 700; color: #333; }
.hu-type-bars { display: flex; flex-direction: column; gap: 8px; }
.hu-type-bar-row { display: flex; align-items: center; gap: 10px; }
.hu-type-bar-label { font-size: 0.78rem; width: 90px; flex-shrink: 0; color: #555; }
.hu-type-bar-track { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.hu-type-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }
.hu-type-bar-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.hu-tag-cloud { display: flex; flex-wrap: wrap; gap: 8px; }
.hu-cloud-tag { background: #f0f0f0; padding: 3px 10px; border-radius: 20px; color: #444; }
.hu-cloud-tag small { font-size: 0.65em; color: #888; }
.hu-grape-list, .hu-vintage-list { display: flex; flex-direction: column; gap: 6px; }
.hu-grape-row, .hu-vrow { display: flex; align-items: center; gap: 10px; }
.hu-grape-name { font-size: 0.78rem; width: 160px; flex-shrink: 0; color: #555; }
.hu-grape-bar-wrap, .hu-vrow-bar-wrap { flex: 1; height: 8px; background: #f0f0f0; border-radius: 4px; overflow: hidden; }
.hu-grape-bar { height: 100%; background: #7B1A1A; border-radius: 4px; transition: width 0.4s; }
.hu-vrow-bar { height: 100%; background: #C07F00; border-radius: 4px; transition: width 0.4s; }
.hu-grape-cnt, .hu-vrow-cnt { font-size: 0.75rem; color: #888; width: 20px; text-align: right; }
.hu-vrow-yr { font-size: 0.78rem; font-weight: 700; width: 45px; color: #333; }
</style>
