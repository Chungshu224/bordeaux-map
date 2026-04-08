<template>
  <div class="main-layout">
    <MapSection
      :activeAOC="activeAOC"
      :regionInfo="regionInfo"
      :styleColors="styleColors"
      :mobileAocDrawerOpen="mobileAocDrawerOpen"
      :userTier="getUserTier()"
      @resetMap="resetMap"
      @openAOCList="setMobileAocDrawerOpen"
    />

    <transition name="mobile-sheet-fade">
      <div
        v-if="mobileAocDrawerOpen"
        class="mobile-aoc-backdrop"
        @click.self="closeMobileAocDrawer"
      >
        <div class="mobile-aoc-drawer">
          <div class="mobile-aoc-handle"></div>
          <div class="mobile-aoc-toolbar">
            <h2>Select Region</h2>
          </div>
          <AOCList
            v-model:search="search"
            :filteredGroups="filteredGroups"
            :expandedGroups="expandedGroups"
            :toggleGroup="toggleGroup"
            :activeAOC="activeAOC"
            :aocColor="aocColor"
            @selectAOC="handleMobileAOCSelect"
          />
          <!-- free 用戶：顯示鎖定群組的升級提示 -->
          <div v-if="!canAccess('basic')" class="aoc-upgrade-hint">
            🔒 升級至「初階付費」即可解鎖全部 7 大產區群組
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import AOCList from './AOCList.vue'
import MapSection from './MapSection.vue'
import { authState, authActions } from '../stores/authStore.js'
import { TIER_WEIGHT } from '../router/index.js'

// ── 訂閱等級工具 ──
const getUserTier = () => {
  const isAdmin = authActions.isAdmin?.() || false
  return isAdmin ? 'premium' : (authState.user?.user_metadata?.subscription_tier || 'free')
}
const canAccess = (minimumTier) => TIER_WEIGHT[getUserTier()] >= TIER_WEIGHT[minimumTier]

// free 可用的 AOC 群組（Regional + LeftBank-Medoc）
const FREE_AOC_GROUPS = ['Regional', 'LeftBank-Medoc']

// 狀態管理
const search = ref('')
const activeAOC = ref({ group: 'Regional', aoc: 'Bordeaux_AOC.geojson' })
const regionInfo = ref(null)
const regionsData = ref([])
const mobileAocDrawerOpen = ref(false)

// 展開/收合狀態
const expandedGroups = ref({
  'Regional': true,
  'LeftBank-Medoc': false,
  'LeftBank-Graves': false,
  'RightBank-Libournais': false,
  'RightBank-Blaye': false,
  'Entre-Deux-Mers': false,
  'Sauternais': false
})

const toggleGroup = (groupName) => {
  expandedGroups.value[groupName] = !expandedGroups.value[groupName]
}

// 色彩對應
function aocColor(groupName) {
  if (groupName.includes('LeftBank')) return '#8B0000'
  if (groupName.includes('RightBank')) return '#4169E1'
  if (groupName === 'Sauternais') return '#FFD700'
  if (groupName === 'Regional') return '#8B5C2A'
  if (groupName === 'Entre-Deux-Mers') return '#2E8B57'
  return '#aaa'
}

// 搜尋過濾
const aocGroups = ref({
  'Regional': [
    'Bordeaux_AOC.geojson',
    'Bordeaux-Superior_AOC.geojson',
    'Cotes-de-Bordeaux_AOC.geojson',
    'Cremant-de-Bordeaux_AOC.geojson'
  ],
  'LeftBank-Medoc': [
    'Medoc_AOC.geojson',
    'Haut-Medoc_AOC.geojson',
    'Margaux_AOC.geojson',
    'Pauillac_AOC.geojson',
    'St-Julien_AOC.geojson',
    'St-Estephe_AOC.geojson',
    'Listrac-Medoc_AOC.geojson',
    'Moulis-en-Medoc_AOC.geojson'
  ],
  'LeftBank-Graves': [
    'Graves_AOC.geojson',
    'Pessac-Leognan_AOC.geojson',
    'Graves-Superieures_AOC.geojson'
  ],
  'RightBank-Libournais': [
    'Pomerol_AOC.geojson',
    'St-Emilion_AOC.geojson',
    'St-Emilion-Grand-Cru_AOC.geojson',
    'Fronsac_AOC.geojson',
    'Canon-Fronsac_AOC.geojson',
    'Lalande-de-Pomerol_AOC.geojson',
    'Lussac-St-Emilion_AOC.geojson',
    'Montagne-St-Emilion_AOC.geojson',
    'Puisseguin-St-Emilion_AOC.geojson',
    'St-Georges-St-Emilion_AOC.geojson',
    'Castillon-Cotes-de-Bordeaux_AOC.geojson'
  ],
  'RightBank-Blaye': [
    'Blaye_AOC.geojson',
    'Cotes-de-Bourg_AOC.geojson',
    'Côtes de Blaye_AOC.geojson',
    'Côtes-de-Bordeaux-Blaye_AOC.geojson',
    'Côtes-de-Bordeaux_AOC.geojson'
  ],
  'Entre-Deux-Mers': [
    'Entre-Deux-Mers_AOC.geojson',
    'Cadillac_AOC.geojson',
    'Loupiac_AOC.geojson',
    'Sainte-Croix-du-Mont_AOC.geojson',
    'Entre-deux-Mers-Haut-Benauge_AOC.geojson',
    'Graves-of-Vayres_AOC.geojson',
    'St-Foy-Bordeaux_AOC.geojson',
    'Bordeaux Haut-Benauge_AOC.geojson',
    'Côtes-de-Bordeaux-Cadillac_AOC.geojson',
    'Côtes-de-Bordeaux-Francs_AOC.geojson',
    '1er-Côtes-de-Bordeaux_AOC.geojson',
    'Cotes-de-Bordeaux-St-Macaire_AOC.geojson'
  ],
  'Sauternais': [
    'Sauternes_AOC.geojson',
    'Barsac_AOC.geojson',
    'Cerons_AOC.geojson'
  ]
})

const filteredGroups = computed(() => {
  const isBasicPlus = canAccess('basic')
  
  // 先依搜尋詞過濾 AOC 項目
  const base = {}
  for (const [group, aocs] of Object.entries(aocGroups.value)) {
    // free 用戶只能看到開放的群組
    if (!isBasicPlus && !FREE_AOC_GROUPS.includes(group)) continue
    
    if (!search.value) {
      base[group] = aocs
    } else {
      const filtered = aocs.filter(aoc =>
        aoc.toLowerCase().includes(search.value.toLowerCase())
      )
      if (filtered.length) base[group] = filtered
    }
  }
  
  return base
})

watch(filteredGroups, (val) => {
  // 有搜尋結果時，自動展開該群組
  for (const key in expandedGroups.value) {
    expandedGroups.value[key] = !!val[key]
  }
})

// 葡萄酒風格顏色映射
const styleColors = {
  '紅酒': '#8B0000',    // 深紅色
  '白酒': '#F0E68C',    // 淡黃色
  '甜酒': '#FFD700',    // 金黃色
  '氣泡酒': '#87CEEB',  // 淡藍色
  '粉紅酒': '#FFB6C1'   // 粉紅色
}

// 顯示 AOC 地圖
const showAOCGeojson = async (groupName, aocFile) => {
  activeAOC.value = { group: groupName, aoc: aocFile }
  
  // 查找產區資訊
  const aocId = aocFile.replace('.geojson', '')
  regionInfo.value = Array.isArray(regionsData.value) ? 
    regionsData.value.find(r => r.id === aocId) || null : null
}

const setMobileAocDrawerOpen = (open) => {
  if (typeof open === 'boolean') {
    mobileAocDrawerOpen.value = open
    return
  }
  mobileAocDrawerOpen.value = !mobileAocDrawerOpen.value
}

const closeMobileAocDrawer = () => {
  mobileAocDrawerOpen.value = false
}

const handleMobileAOCSelect = async (groupName, aocFile) => {
  await showAOCGeojson(groupName, aocFile)
  closeMobileAocDrawer()
}

// 重置地圖
const resetMap = () => {
  showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
}

// 載入產區資訊
const loadRegionsData = async () => {
  try {
    const res = await fetch('/bordeaux-regions.json')
    if (res.ok) {
      regionsData.value = await res.json()
    } else {
      throw new Error(`HTTP ${res.status}`)
    }
  } catch (err) {
    console.error('載入產區資料失敗:', err)
    regionsData.value = []
  }
}

onMounted(async () => {
  // 載入產區資料
  await loadRegionsData()
  
  // 預設顯示波爾多整體
  await showAOCGeojson('Regional', 'Bordeaux_AOC.geojson')
})
</script>

<style>
/* 全局樣式 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
/* BordeauxMap.vue 內的樣式 */
.main-layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.mobile-aoc-backdrop {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15, 23, 42, 0.34);
  z-index: 1210;
  backdrop-filter: blur(4px);
}

.mobile-aoc-drawer {
  position: absolute;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
  width: min(90vw, 560px);
  display: flex;
  flex-direction: column;
  background: #f7f3ee;
  border-radius: 20px 20px 14px 14px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  padding-bottom: 10px;
}

.mobile-aoc-handle {
  display: block;
  width: 52px;
  height: 5px;
  border-radius: 999px;
  background: rgba(122, 90, 64, 0.28);
  margin: 10px auto 8px;
}

.mobile-aoc-toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  border-bottom: 1px solid rgba(122, 90, 64, 0.14);
}

.mobile-aoc-toolbar h2 {
  margin: 0;
  font-size: 1.05rem;
  color: #6b1f1f;
}

.mobile-aoc-drawer :deep(.aoc-list) {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-right: none;
  border-bottom: none;
  background: transparent;
  padding: 14px 16px 18px;
}

.mobile-aoc-drawer :deep(h2) {
  display: none;
}

.mobile-aoc-drawer :deep(.aoc-search) {
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 14px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  border: 1px solid rgba(107, 31, 31, 0.16);
  font-size: 1rem;
}

.mobile-aoc-drawer :deep(.group-name) {
  font-size: 1rem;
}

.mobile-aoc-drawer :deep(.aoc-item) {
  font-size: 1rem;
  padding: 10px 12px;
}

.mobile-sheet-fade-enter-active,
.mobile-sheet-fade-leave-active {
  transition: opacity 0.24s ease;
}

.mobile-sheet-fade-enter-from,
.mobile-sheet-fade-leave-to {
  opacity: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .mobile-aoc-drawer {
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    top: calc(env(safe-area-inset-top, 0px) + 2px);
    bottom: calc(env(safe-area-inset-bottom, 0px) + 96px);
    border-radius: 20px 20px 14px 14px;
  }
}
</style>


