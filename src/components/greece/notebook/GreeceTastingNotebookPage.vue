<template>
  <div class="gr-nb-page">
    <div class="gr-nb-header">
      <button class="gr-nb-back" @click="emit('back')">← {{ $t('common.actions.back') }}</button>
      <h1 class="gr-nb-title">📔 希臘品飲筆記</h1>
      <button class="gr-nb-add" @click="openNew" :disabled="!authUser">+ 新增</button>
    </div>

    <div v-if="!authUser" class="gr-nb-login">
      🔑 請先<a @click="router.push('/login')">登入</a>以使用希臘品飲筆記功能
    </div>

    <div class="gr-nb-stats">
      <div class="gr-stat"><b>{{ stats.tried }}</b><span>已品飲</span></div>
      <div class="gr-stat"><b>{{ stats.wishlist }}</b><span>想喝清單</span></div>
      <div class="gr-stat"><b>{{ stats.appellations }}</b><span>產區涵蓋</span></div>
      <div class="gr-stat"><b>{{ stats.grapes }}</b><span>品種記錄</span></div>
    </div>

    <div class="gr-nb-tabs">
      <button v-for="mt in MAIN_TABS" :key="mt.key" :class="{ active: mainTab === mt.key }" @click="mainTab = mt.key">{{ mt.label }}</button>
    </div>

    <template v-if="mainTab === 'notes'">
      <div class="gr-filters">
        <div class="gr-row">
          <button v-for="tab in STATUS_TABS" :key="tab.key" :class="{ active: filterStatus === tab.key }" @click="filterStatus = tab.key">{{ tab.label }}</button>
        </div>
        <div class="gr-row">
          <button :class="{ active: filterType === 'all' }" @click="filterType = 'all'">全部</button>
          <button v-for="t in WINE_TYPES" :key="t.id" :class="{ active: filterType === t.id }"
            :style="filterType === t.id ? { background: t.color, borderColor: t.color } : {}"
            @click="filterType = filterType === t.id ? 'all' : t.id">{{ t.emoji }} {{ t.short }}</button>
        </div>
        <input v-model="searchQuery" class="gr-search" placeholder="搜尋生產者、品種、產區…" />
      </div>

      <div v-if="loading" class="gr-empty">載入中…</div>
      <div v-else-if="filteredNotes.length === 0" class="gr-empty">
        {{ !authUser ? '請登入以查看筆記' : searchQuery ? '找不到符合的筆記' : '尚無任何筆記，點擊右上角「+ 新增」' }}
      </div>
      <div v-else class="gr-grid">
        <div v-for="note in filteredNotes" :key="note.id" class="gr-card" @click="openNote(note)">
          <div class="gr-card-top">
            <span :class="['gr-badge', note.status]">{{ note.status === 'tried' ? '✓ 已品飲' : '♡ 想喝' }}</span>
            <span v-if="note.wine_type" class="gr-type-badge" :style="{ background: typeColor(note.wine_type) }">{{ typeEmoji(note.wine_type) }}</span>
            <span v-if="note.vintage" class="gr-vintage">{{ note.vintage }}</span>
          </div>
          <h3>{{ note.chateau_name }}</h3>
          <p v-if="note.grape_variety" class="gr-grape">🍇 {{ note.grape_variety }}</p>
          <p class="gr-app">{{ note.aoc_id }}</p>
          <div v-if="note.rating" class="gr-card-stars"><span v-for="i in 5" :key="i" :class="{ filled: i <= note.rating }">★</span></div>
          <div v-if="note.aroma_tags?.length" class="gr-card-tags">
            <span v-for="tag in note.aroma_tags.slice(0, 3)" :key="tag">{{ tag }}</span>
            <span v-if="note.aroma_tags.length > 3">+{{ note.aroma_tags.length - 3 }}</span>
          </div>
          <p v-if="note.notes" class="gr-card-notes">{{ note.notes.slice(0, 55) }}{{ note.notes.length > 55 ? '…' : '' }}</p>
        </div>
      </div>
    </template>

    <div v-else class="gr-profile">
      <p v-if="notes.length === 0" class="gr-empty">📊 新增品飲記錄後即可生成希臘酒款品味輪廓</p>
      <template v-else>
        <section>
          <h4>🍷 酒款類型分佈</h4>
          <div v-for="t in WINE_TYPES" :key="t.id" class="gr-bar-row">
            <span class="gr-bar-label">{{ t.emoji }} {{ t.short }}</span>
            <div class="gr-bar-track"><div class="gr-bar-fill" :style="{ width: typePct(t.id) + '%', background: t.color }"></div></div>
            <span class="gr-bar-cnt">{{ typeCount(t.id) }}</span>
          </div>
        </section>
        <section>
          <h4>👃 常見香氣</h4>
          <div class="gr-cloud">
            <span v-for="[tag, count] in topAromas" :key="tag" :style="{ fontSize: `${0.75 + count * 0.1}rem` }">{{ tag }} <small>×{{ count }}</small></span>
          </div>
        </section>
        <section>
          <h4>🍇 常用品種</h4>
          <div v-for="[grape, cnt] in topGrapes" :key="grape" class="gr-bar-row">
            <span class="gr-bar-label">{{ grape }}</span>
            <div class="gr-bar-track"><div class="gr-bar-fill" :style="{ width: `${(cnt / maxGrape) * 100}%`, background: '#e0b64a' }"></div></div>
            <span class="gr-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
        <section>
          <h4>📅 年份分佈</h4>
          <div v-for="[v, cnt] in vintageDist" :key="v" class="gr-bar-row">
            <span class="gr-bar-label">{{ v }}</span>
            <div class="gr-bar-track"><div class="gr-bar-fill" :style="{ width: `${(cnt / maxVintage) * 100}%`, background: '#3b8bd6' }"></div></div>
            <span class="gr-bar-cnt">{{ cnt }}</span>
          </div>
        </section>
      </template>
    </div>

    <GreeceTastingNoteModal v-if="showModal" :note="selectedNote" @save="onChanged" @delete="onChanged" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import GreeceTastingNoteModal from './GreeceTastingNoteModal.vue'
import { WINE_TYPES } from '@/data/greece/tastingData.js'

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
  appellations: new Set(notes.value.map(n => n.aoc_id).filter(a => a && a !== 'Greece')).size,
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
    .eq('user_id', authUser.value.id).eq('source', 'greece')
    .order('updated_at', { ascending: false })
  if (error) console.warn('載入希臘筆記失敗:', error.message)
  notes.value = data || []
  loading.value = false
}

const openNote = note => { selectedNote.value = note; showModal.value = true }
const openNew = () => { selectedNote.value = null; showModal.value = true }
const onChanged = async () => { showModal.value = false; await loadNotes() }

onMounted(loadNotes)
</script>

<style scoped>
.gr-nb-page { min-height: 100vh; height: 100vh; overflow-y: auto; background: linear-gradient(135deg, #061a30 0%, #0a2c52 100%); color: #e8f0f8; padding: 16px 16px 60px; box-sizing: border-box; }
.gr-nb-header { display: flex; align-items: center; gap: 12px; max-width: 900px; margin: 0 auto 14px; }
.gr-nb-title { flex: 1; margin: 0; font-size: 1.3rem; text-align: center; }
.gr-nb-back { background: transparent; border: 1.5px solid rgba(255,255,255,0.18); color: #9db4cc; padding: 8px 14px; border-radius: 10px; cursor: pointer; }
.gr-nb-add { background: linear-gradient(135deg, #0D5EAF, #B8902A); border: none; color: #fff; font-weight: 700; padding: 8px 16px; border-radius: 10px; cursor: pointer; }
.gr-nb-add:disabled { opacity: 0.4; cursor: not-allowed; }
.gr-nb-login { max-width: 900px; margin: 0 auto 12px; padding: 10px 14px; background: rgba(224,182,74,0.12); border-radius: 10px; font-size: 0.9rem; }
.gr-nb-login a { color: #e0b64a; cursor: pointer; text-decoration: underline; }
.gr-nb-stats { display: flex; max-width: 900px; margin: 0 auto 14px; background: rgba(255,255,255,0.06); border-radius: 14px; padding: 12px 0; }
.gr-stat { flex: 1; text-align: center; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,0.1); }
.gr-stat:last-child { border-right: none; }
.gr-stat b { font-size: 1.4rem; color: #e0b64a; }
.gr-stat span { font-size: 0.75rem; color: #9db4cc; }
.gr-nb-tabs { display: flex; gap: 8px; max-width: 900px; margin: 0 auto 14px; }
.gr-nb-tabs button { flex: 1; padding: 9px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.16); background: transparent; color: #9db4cc; cursor: pointer; font-weight: 600; }
.gr-nb-tabs button.active { background: rgba(255,255,255,0.12); color: #fff; }
.gr-filters, .gr-grid, .gr-profile, .gr-empty { max-width: 900px; margin-left: auto; margin-right: auto; }
.gr-filters { margin-bottom: 14px; display: flex; flex-direction: column; gap: 8px; }
.gr-row { display: flex; flex-wrap: wrap; gap: 6px; }
.gr-row button { padding: 5px 12px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.18); background: transparent; color: #9db4cc; cursor: pointer; font-size: 0.82rem; }
.gr-row button.active { background: rgba(255,255,255,0.14); color: #fff; }
.gr-search { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; color: #fff; padding: 9px 12px; }
.gr-empty { text-align: center; color: #7f98b3; padding: 30px 0; }
.gr-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
.gr-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 14px; cursor: pointer; transition: transform 0.15s; }
.gr-card:hover { transform: translateY(-2px); background: rgba(255,255,255,0.1); }
.gr-card-top { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.gr-badge { font-size: 0.72rem; padding: 2px 8px; border-radius: 10px; background: rgba(74,222,128,0.2); color: #4ade80; }
.gr-badge.wishlist { background: rgba(244,114,182,0.2); color: #f472b6; }
.gr-type-badge { font-size: 0.8rem; padding: 1px 7px; border-radius: 10px; }
.gr-vintage { margin-left: auto; font-size: 0.78rem; color: #9db4cc; }
.gr-card h3 { margin: 4px 0; font-size: 1rem; }
.gr-grape, .gr-app { margin: 2px 0; font-size: 0.82rem; color: #b6c9dc; }
.gr-card-stars { color: rgba(255,255,255,0.2); margin: 4px 0; }
.gr-card-stars .filled { color: #e0b64a; }
.gr-card-tags { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0; }
.gr-card-tags span { font-size: 0.72rem; padding: 2px 8px; border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; color: #cfe0f0; }
.gr-card-notes { margin: 6px 0 0; font-size: 0.8rem; color: #8aa3bd; }
.gr-profile section { background: rgba(255,255,255,0.05); border-radius: 14px; padding: 14px; margin-bottom: 12px; }
.gr-profile h4 { margin: 0 0 10px; color: #e0b64a; }
.gr-bar-row { display: grid; grid-template-columns: 110px 1fr 32px; gap: 8px; align-items: center; margin-bottom: 6px; font-size: 0.82rem; }
.gr-bar-track { height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
.gr-bar-fill { height: 100%; border-radius: 4px; }
.gr-bar-cnt { text-align: right; color: #9db4cc; }
.gr-cloud { display: flex; flex-wrap: wrap; gap: 8px 12px; }
.gr-cloud small { color: #7f98b3; }
</style>
