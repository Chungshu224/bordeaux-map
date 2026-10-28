<template>
  <div class="ar-nb-page">
    <div class="ar-nb-header">
      <button class="ar-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="ar-nb-title">{{ gt('📔 阿根廷品飲筆記') }}</h1>
      <button class="ar-nb-add" @click="openNew" :disabled="!authUser">{{ gt('+ 新增') }}</button>
    </div>

    <div v-if="!authUser" class="ar-nb-login">
      {{ gt('🔑 請先') }}<a @click="router.push('/login')">{{ gt('登入') }}</a>{{ gt('以使用阿根廷品飲筆記功能') }}
    </div>

    <div class="ar-nb-stats">
      <div class="ar-stat"><b>{{ stats.tried }}</b><span>{{ gt('已品飲') }}</span></div>
      <div class="ar-stat"><b>{{ stats.wishlist }}</b><span>{{ gt('想喝清單') }}</span></div>
      <div class="ar-stat"><b>{{ stats.appellations }}</b><span>{{ gt('產區涵蓋') }}</span></div>
      <div class="ar-stat"><b>{{ stats.grapes }}</b><span>{{ gt('品種記錄') }}</span></div>
    </div>

    <div class="ar-nb-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="{ active: mainTab === mt.key }" @click="mainTab = mt.key">{{ gt(mt.label) }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="ar-filters">
        <div class="ar-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="{ active: filterStatus === tab.key }" @click="filterStatus = tab.key">{{ gt(tab.label) }}</button>
        </div>
        <div class="ar-row">
          <button :class="{ active: filterType === 'all' }" @click="filterType = 'all'">{{ gt('全部') }}</button>
          <button v-for="t in WINE_TYPES" :key="t.id" :class="{ active: filterType === t.id }"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">{{ t.emoji }} {{ gt(t.short) }}</button>
        </div>
        <input v-model="searchQuery" class="ar-search" :placeholder="gt('搜尋生產者、品種、產區…')" />
      </div>

      <div v-if="loading" class="ar-empty">{{ gt('載入中…') }}</div>
      <div v-else-if="filteredNotes.length === 0" class="ar-empty">
        {{ !authUser ? gt('請登入以查看筆記') : searchQuery ? gt('找不到符合的筆記') : gt('尚無任何筆記，點擊右上角「+ 新增」') }}
      </div>
      <div v-else class="ar-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="ar-card" @click="openNote(note)">
          <div class="ar-card-top">
            <span :class="['ar-badge', note.status]">{{ note.status === 'tried' ? gt('✓ 已品飲') : gt('♡ 想喝') }}</span>
            <span v-if="note.wine_type" class="ar-type-badge" :style="{ background: typeColor(note.wine_type) }">{{ typeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="ar-vintage">{{ note.vintage }}</span>
          </div>
          <h3>{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="ar-grape">🍇 {{ note.grape_variety }}</p>
          <p class="ar-app">{{ note.aoc_id }}</p>
          <div v-if="note.rating" class="ar-card-stars"><span v-for="i in 5" :key="i" :class="{ filled: i <= note.rating }">★</span></div>
          <div v-if="note.aroma_tags?.length" class="ar-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag">{{ gt(tag) }}</span>
            <span v-if="note.aroma_tags.length > 3">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="ar-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else class="ar-profile">
      <p v-if="notes.length === 0" class="ar-empty">{{ gt('📊 新增品飲記錄後即可生成阿根廷酒款品味輪廓') }}</p>
      <template v-else>
        <section>
          <h4>{{ gt('🍷 酒款類型分佈') }}</h4>
          <div v-for="t in WINE_TYPES" :key="t.id" class="ar-bar-row">
            <span class="ar-bar-label">{{ t.emoji }} {{ gt(t.short) }}</span>
            <div class="ar-bar-track"><div class="ar-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
            <span class="ar-bar-cnt">{{ typeCount(t.id) }}</span>
          </div>
        </section>
        <section>
          <h4>{{ gt('👃 常見香氣') }}</h4>
          <div class="ar-cloud">
            <span v-for="[tag, count] in topAromas" :key="tag" :style="{ fontSize: `${0.75 + count * 0.1}rem` }">{{ gt(tag) }} <small>×{{ count }}</small></span>
          </div>
        </section>
        <section>
          <h4>{{ gt('🍇 常用品種') }}</h4>
          <div v-for="[grape, cnt] in topGrapes" :key="grape" class="ar-bar-row">
            <span class="ar-bar-label">{{ grape }}</span>
            <div class="ar-bar-track"><div class="ar-bar-fill" :style="{ width: `${(cnt / maxGrape) * 100}%`, background: '#E3C4DC' }"></div></div>
            <span class="ar-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
        <section>
          <h4>{{ gt('📅 年份分佈') }}</h4>
          <div v-for="[v, cnt] in vintageDist" :key="v" class="ar-bar-row">
            <span class="ar-bar-label">{{ v }}</span>
            <div class="ar-bar-track"><div class="ar-bar-fill" :style="{ width: `${(cnt / maxVintage) * 100}%`, background: '#B25AA0' }"></div></div>
            <span class="ar-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
      </template>
    </div>

    <ArgentinaTastingNoteModal v-if="showModal" :note="selectedNote" @save="onChanged" @delete="onChanged" @close="showModal = false" />
  </div>
</template>

<script setup>
import { gt } from '../../../locales/argentinaUi/index.js'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import ArgentinaTastingNoteModal from './ArgentinaTastingNoteModal.vue'
import { WINE_TYPES } from '@/data/argentina/tastingData.js'
import { globalArgentinaAchievementManager } from '@/stores/argentinaAchievementSystem.js'

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
  appellations: new Set(notes.value.map(n => n.aoc_id).filter(a => a && a !== 'Argentina')).size,
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
    .eq('user_id', authUser.value.id).eq('source', 'argentina')
    .order('updated_at', { ascending: false })
  if (error) console.warn(gt('載入阿根廷筆記失敗:'), error.message)
  notes.value = data || []
  loading.value = false
  globalArgentinaAchievementManager.init()
  const counted = notes.value.filter(n => n.status === 'tried' || n.status === 'wishlist')
  globalArgentinaAchievementManager.syncTastingNotes(counted.length, [...new Set(counted.map(n => n.wine_type).filter(Boolean))])
}

const openNote = note => { selectedNote.value = note; showModal.value = true }
const openNew = () => { selectedNote.value = null; showModal.value = true }
const onChanged = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
.ar-nb-page { min-height: 100vh; height: 100vh; overflow-y: auto; background: linear-gradient(135deg, #2a0f26 0%, #4a1c40 100%); color: #f3e8ef; padding: 16px 16px 60px; box-sizing: border-box; }
.ar-nb-header { display: flex; align-items: center; gap: 12px; max-width: 900px; margin: 0 auto 14px; }
.ar-nb-title { flex: 1; margin: 0; font-size: 1.3rem; text-align: center; }
.ar-nb-back { background: transparent; border: 1.5px solid rgba(255,255,255,0.18); color: #d9aab0; padding: 8px 14px; border-radius: 10px; cursor: pointer; }
.ar-nb-add { background: linear-gradient(135deg, #8E3F7E, #4F1D45); border: none; color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 10px; cursor: pointer; }
.ar-nb-add:disabled { opacity: 0.4; cursor: not-allowed; }
.ar-nb-login { max-width: 900px; margin: 0 auto 12px; padding: 10px 14px; background: rgba(224,182,74,0.12); border-radius: 10px; font-size: 0.9rem; }
.ar-nb-login a { color: #E3C4DC; cursor: pointer; text-decoration: underline; }
.ar-nb-stats { display: flex; max-width: 900px; margin: 0 auto 14px; background: rgba(255,255,255,0.06); border-radius: 14px; padding: 12px 0; }
.ar-stat { flex: 1; text-align: center; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.1); }
.ar-stat:last-child { border-right: none; }
.ar-stat b { font-size: 1.4rem; color: #E3C4DC; }
.ar-stat span { font-size: 0.75rem; color: #d9aab0; }
.ar-nb-tabs { display: flex; gap: 8px; max-width: 900px; margin: 0 auto 14px; }
.ar-nb-tabs button { flex: 1; padding: 9px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.16); background: transparent; color: #d9aab0; cursor: pointer; font-weight: 600; }
.ar-nb-tabs button.active { background: rgba(255,255,255,0.12); color: #fff; }
.ar-filters, .ar-grid, .ar-profile, .ar-empty { max-width: 900px; margin-left: auto; margin-right: auto; }
.ar-filters { margin-bottom: 14px; display: flex; flex-direction: column; gap: 8px; }
.ar-row { display: flex; flex-wrap: wrap; gap: 6px; }
.ar-row button { padding: 5px 12px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.18); background: transparent; color: #d9aab0; cursor: pointer; font-size: 0.82rem; }
.ar-row button.active { background: rgba(255,255,255,0.14); color: #fff; }
.ar-search { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; color: #fff; padding: 9px 12px; }
.ar-empty { text-align: center; color: #7f98b3; padding: 30px 0; }
.ar-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
.ar-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 14px; cursor: pointer; transition: transform 0.15s; }
.ar-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
.ar-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.ar-badge { font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; background: rgba(74,222,128,0.2); color: #4ade80; }
.ar-badge.wishlist { background: rgba(244,114,182,0.2); color: #f472b6; }
.ar-type-badge { font-size: 0.8rem; padding: 1px 7px; border-radius: 10px; }
.ar-vintage { margin-left: auto; font-size: 0.78rem; color: #d9aab0; }
.ar-card h3 { margin: 4px 0; font-size: 1rem; }
.ar-grape, .ar-app { margin: 2px 0; font-size: 0.82rem; color: #b6c9dc; }
.ar-card-stars { color: rgba(255,255,255,0.2); margin: 4px 0; }
.ar-card-stars .filled { color: #E3C4DC; }
.ar-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0; }
.ar-card-tags span { font-size: 0.72rem; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: #cfe0f0; }
.ar-card-notes { margin: 6px 0 0; font-size: 0.8rem; color: #8aa3bd; }
.ar-profile section { background: rgba(255,255,255,0.05); border-radius: 14px; padding: 14px; margin-bottom: 12px; }
.ar-profile h4 { margin: 0 0 10px; color: #E3C4DC; }
.ar-bar-row { display: grid; grid-template-columns: 110px 1fr 32px; gap: 8px; align-items: center; margin-bottom: 6px; font-size: 0.82rem; }
.ar-bar-track { height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
.ar-bar-fill { height: 100%; border-radius: 4px; }
.ar-bar-cnt { text-align: right; color: #d9aab0; }
.ar-cloud { display: flex; flex-wrap: wrap; gap: 8px 12px; }
.ar-cloud small { color: #7f98b3; }
</style>
