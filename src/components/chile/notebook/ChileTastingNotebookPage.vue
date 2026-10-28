<template>
  <div class="cl-nb-page">
    <div class="cl-nb-header">
      <button class="cl-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="cl-nb-title">{{ gt('📔 智利品飲筆記') }}</h1>
      <button class="cl-nb-add" @click="openNew" :disabled="!authUser">{{ gt('+ 新增') }}</button>
    </div>

    <div v-if="!authUser" class="cl-nb-login">
      {{ gt('🔑 請先') }}<a @click="router.push('/login')">{{ gt('登入') }}</a>{{ gt('以使用智利品飲筆記功能') }}
    </div>

    <div class="cl-nb-stats">
      <div class="cl-stat"><b>{{ stats.tried }}</b><span>{{ gt('已品飲') }}</span></div>
      <div class="cl-stat"><b>{{ stats.wishlist }}</b><span>{{ gt('想喝清單') }}</span></div>
      <div class="cl-stat"><b>{{ stats.appellations }}</b><span>{{ gt('產區涵蓋') }}</span></div>
      <div class="cl-stat"><b>{{ stats.grapes }}</b><span>{{ gt('品種記錄') }}</span></div>
    </div>

    <div class="cl-nb-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="{ active: mainTab === mt.key }" @click="mainTab = mt.key">{{ gt(mt.label) }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="cl-filters">
        <div class="cl-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="{ active: filterStatus === tab.key }" @click="filterStatus = tab.key">{{ gt(tab.label) }}</button>
        </div>
        <div class="cl-row">
          <button :class="{ active: filterType === 'all' }" @click="filterType = 'all'">{{ gt('全部') }}</button>
          <button v-for="t in WINE_TYPES" :key="t.id" :class="{ active: filterType === t.id }"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">{{ t.emoji }} {{ gt(t.short) }}</button>
        </div>
        <input v-model="searchQuery" class="cl-search" :placeholder="gt('搜尋生產者、品種、產區…')" />
      </div>

      <div v-if="loading" class="cl-empty">{{ gt('載入中…') }}</div>
      <div v-else-if="filteredNotes.length === 0" class="cl-empty">
        {{ !authUser ? gt('請登入以查看筆記') : searchQuery ? gt('找不到符合的筆記') : gt('尚無任何筆記，點擊右上角「+ 新增」') }}
      </div>
      <div v-else class="cl-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="cl-card" @click="openNote(note)">
          <div class="cl-card-top">
            <span :class="['cl-badge', note.status]">{{ note.status === 'tried' ? gt('✓ 已品飲') : gt('♡ 想喝') }}</span>
            <span v-if="note.wine_type" class="cl-type-badge" :style="{ background: typeColor(note.wine_type) }">{{ typeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="cl-vintage">{{ note.vintage }}</span>
          </div>
          <h3>{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="cl-grape">🍇 {{ note.grape_variety }}</p>
          <p class="cl-app">{{ note.aoc_id }}</p>
          <div v-if="note.rating" class="cl-card-stars"><span v-for="i in 5" :key="i" :class="{ filled: i <= note.rating }">★</span></div>
          <div v-if="note.aroma_tags?.length" class="cl-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag">{{ gt(tag) }}</span>
            <span v-if="note.aroma_tags.length > 3">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="cl-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else class="cl-profile">
      <p v-if="notes.length === 0" class="cl-empty">{{ gt('📊 新增品飲記錄後即可生成智利酒款品味輪廓') }}</p>
      <template v-else>
        <section>
          <h4>{{ gt('🍷 酒款類型分佈') }}</h4>
          <div v-for="t in WINE_TYPES" :key="t.id" class="cl-bar-row">
            <span class="cl-bar-label">{{ t.emoji }} {{ gt(t.short) }}</span>
            <div class="cl-bar-track"><div class="cl-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
            <span class="cl-bar-cnt">{{ typeCount(t.id) }}</span>
          </div>
        </section>
        <section>
          <h4>{{ gt('👃 常見香氣') }}</h4>
          <div class="cl-cloud">
            <span v-for="[tag, count] in topAromas" :key="tag" :style="{ fontSize: `${0.75 + count * 0.1}rem` }">{{ gt(tag) }} <small>×{{ count }}</small></span>
          </div>
        </section>
        <section>
          <h4>{{ gt('🍇 常用品種') }}</h4>
          <div v-for="[grape, cnt] in topGrapes" :key="grape" class="cl-bar-row">
            <span class="cl-bar-label">{{ grape }}</span>
            <div class="cl-bar-track"><div class="cl-bar-fill" :style="{ width: `${(cnt / maxGrape) * 100}%`, background: '#F0CFD1' }"></div></div>
            <span class="cl-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
        <section>
          <h4>{{ gt('📅 年份分佈') }}</h4>
          <div v-for="[v, cnt] in vintageDist" :key="v" class="cl-bar-row">
            <span class="cl-bar-label">{{ v }}</span>
            <div class="cl-bar-track"><div class="cl-bar-fill" :style="{ width: `${(cnt / maxVintage) * 100}%`, background: '#C4585E' }"></div></div>
            <span class="cl-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
      </template>
    </div>

    <ChileTastingNoteModal v-if="showModal" :note="selectedNote" @save="onChanged" @delete="onChanged" @close="showModal = false" />
  </div>
</template>

<script setup>
import { gt } from '../../../locales/chileUi/index.js'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import ChileTastingNoteModal from './ChileTastingNoteModal.vue'
import { WINE_TYPES } from '@/data/chile/tastingData.js'
import { globalChileAchievementManager } from '@/stores/chileAchievementSystem.js'

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

const MAIN_TABS = [{ key: 'notes', label: gt('📝 筆記') }, { key: 'profile', label: gt('📊 品味') }]
const STATUS_TABS = [{ key: 'all', label: gt('全部') }, { key: 'tried', label: gt('已品飲') }, { key: 'wishlist', label: gt('想喝清單') }]

const filteredNotes = computed(() => {
  let r = notes.value
  if (filterStatus.value !== 'all') r = r.filter(n => n.status === filterStatus.value)
  if (filterType.value !== 'all') r = r.filter(n => n.wine_type === filterType.value)
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    r = r.filter(n => [n.chateau_name, n.aoc_id, n.grape_variety].some(s => s?.toLowerCase().includes(q)))
  }
  return r
})

const stats = computed(() => ({
  tried: notes.value.filter(n => n.status === 'tried').length,
  wishlist: notes.value.filter(n => n.status === 'wishlist').length,
  appellations: new Set(notes.value.map(n => n.aoc_id).filter(a => a && a !== 'Chile')).size,
  grapes: new Set(notes.value.map(n => n.grape_variety).filter(Boolean)).size
}))

function tally(items) {
  const m = {}
  items.forEach(x => { if (x) m[x] = (m[x] || 0) + 1 })
  return Object.entries(m).sort((a, b) => b[1] - a[1])
}
const topAromas = computed(() => tally(notes.value.flatMap(n => n.aroma_tags || [])).slice(0, 18))
const topGrapes = computed(() => tally(notes.value.map(n => n.grape_variety?.trim())).slice(0, 10))
const maxGrape = computed(() => Math.max(1, ...topGrapes.value.map(e => e[1])))
const vintageDist = computed(() =>
  tally(notes.value.map(n => n.vintage)).sort((a, b) => b[0] - a[0]).slice(0, 12))
const maxVintage = computed(() => Math.max(1, ...vintageDist.value.map(e => e[1])))

const typeCount = id => notes.value.filter(n => n.wine_type === id).length
const typePct = id => (notes.value.length ? Math.round(typeCount(id) / notes.value.length * 100) : 0)
const typeColor = id => WINE_TYPES.find(t => t.id === id)?.color || '#6B7280'
const typeEmoji = id => WINE_TYPES.find(t => t.id === id)?.emoji || '🍾'

async function loadNotes() {
  if (!authUser.value) return
  loading.value = true
  const { data, error } = await supabase.from('tasting_notes').select('*')
    .eq('user_id', authUser.value.id).eq('source', 'chile')
    .order('updated_at', { ascending: false })
  if (error) console.warn(gt('載入智利筆記失敗:'), error.message)
  notes.value = data || []
  loading.value = false
  globalChileAchievementManager.init()
  const counted = notes.value.filter(n => n.status === 'tried' || n.status === 'wishlist')
  globalChileAchievementManager.syncTastingNotes(counted.length, [...new Set(counted.map(n => n.wine_type).filter(Boolean))])
}

const openNote = note => { selectedNote.value = note; showModal.value = true }
const openNew = () => { selectedNote.value = null; showModal.value = true }
const onChanged = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
.cl-nb-page { min-height: 100vh; height: 100vh; overflow-y: auto; background: linear-gradient(135deg, #2a0f10 0%, #4a1c1e 100%); color: #f3e8ef; padding: 16px 16px 60px; box-sizing: border-box; }
.cl-nb-header { display: flex; align-items: center; gap: 12px; max-width: 900px; margin: 0 auto 14px; }
.cl-nb-title { flex: 1; margin: 0; font-size: 1.3rem; text-align: center; }
.cl-nb-back { background: transparent; border: 1.5px solid rgba(255,255,255,0.18); color: #d9aab0; padding: 8px 14px; border-radius: 10px; cursor: pointer; }
.cl-nb-add { background: linear-gradient(135deg, #A4343A, #5E1B20); border: none; color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 10px; cursor: pointer; }
.cl-nb-add:disabled { opacity: 0.4; cursor: not-allowed; }
.cl-nb-login { max-width: 900px; margin: 0 auto 12px; padding: 10px 14px; background: rgba(224,182,74,0.12); border-radius: 10px; font-size: 0.9rem; }
.cl-nb-login a { color: #F0CFD1; cursor: pointer; text-decoration: underline; }
.cl-nb-stats { display: flex; max-width: 900px; margin: 0 auto 14px; background: rgba(255,255,255,0.06); border-radius: 14px; padding: 12px 0; }
.cl-stat { flex: 1; text-align: center; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.1); }
.cl-stat:last-child { border-right: none; }
.cl-stat b { font-size: 1.4rem; color: #F0CFD1; }
.cl-stat span { font-size: 0.75rem; color: #d9aab0; }
.cl-nb-tabs { display: flex; gap: 8px; max-width: 900px; margin: 0 auto 14px; }
.cl-nb-tabs button { flex: 1; padding: 9px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.16); background: transparent; color: #d9aab0; cursor: pointer; font-weight: 600; }
.cl-nb-tabs button.active { background: rgba(255,255,255,0.12); color: #fff; }
.cl-filters, .cl-grid, .cl-profile, .cl-empty { max-width: 900px; margin-left: auto; margin-right: auto; }
.cl-filters { margin-bottom: 14px; display: flex; flex-direction: column; gap: 8px; }
.cl-row { display: flex; flex-wrap: wrap; gap: 6px; }
.cl-row button { padding: 5px 12px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.18); background: transparent; color: #d9aab0; cursor: pointer; font-size: 0.82rem; }
.cl-row button.active { background: rgba(255,255,255,0.14); color: #fff; }
.cl-search { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; color: #fff; padding: 9px 12px; }
.cl-empty { text-align: center; color: #7f98b3; padding: 30px 0; }
.cl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
.cl-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 14px; cursor: pointer; transition: transform 0.15s; }
.cl-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
.cl-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.cl-badge { font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; background: rgba(74,222,128,0.2); color: #4ade80; }
.cl-badge.wishlist { background: rgba(244,114,182,0.2); color: #f472b6; }
.cl-type-badge { font-size: 0.8rem; padding: 1px 7px; border-radius: 10px; }
.cl-vintage { margin-left: auto; font-size: 0.78rem; color: #d9aab0; }
.cl-card h3 { margin: 4px 0; font-size: 1rem; }
.cl-grape, .cl-app { margin: 2px 0; font-size: 0.82rem; color: #b6c9dc; }
.cl-card-stars { color: rgba(255,255,255,0.2); margin: 4px 0; }
.cl-card-stars .filled { color: #F0CFD1; }
.cl-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0; }
.cl-card-tags span { font-size: 0.72rem; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: #cfe0f0; }
.cl-card-notes { margin: 6px 0 0; font-size: 0.8rem; color: #8aa3bd; }
.cl-profile section { background: rgba(255,255,255,0.05); border-radius: 14px; padding: 14px; margin-bottom: 12px; }
.cl-profile h4 { margin: 0 0 10px; color: #F0CFD1; }
.cl-bar-row { display: grid; grid-template-columns: 110px 1fr 32px; gap: 8px; align-items: center; margin-bottom: 6px; font-size: 0.82rem; }
.cl-bar-track { height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
.cl-bar-fill { height: 100%; border-radius: 4px; }
.cl-bar-cnt { text-align: right; color: #d9aab0; }
.cl-cloud { display: flex; flex-wrap: wrap; gap: 8px 12px; }
.cl-cloud small { color: #7f98b3; }
</style>
