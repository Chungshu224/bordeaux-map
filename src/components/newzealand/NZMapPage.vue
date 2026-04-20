<template>
  <div class="nz-map-page" :class="{ 'is-embedded': embedded }">

    <!-- 全螢幕地圖 -->
    <NZMapSection
      :activeAOC="activeAOC"
      :regionInfo="regionInfo"
      :styleColors="styleColors"
      :drawerOpen="drawerOpen"
      @resetMap="resetMap"
      @back-to-course="$emit('back-to-course')"
      @openDrawer="drawerOpen = !drawerOpen"
    />

    <!-- 產區抽屜 (Bordeaux/Portugal style) -->
    <transition name="sheet-fade">
      <div v-if="drawerOpen" class="aoc-backdrop" @click.self="drawerOpen = false">
        <div class="aoc-drawer">
          <div class="aoc-handle"></div>
          <div class="drawer-header">
            <span>紐西蘭產區列表</span>
            <button class="drawer-close" @click="drawerOpen = false">✕</button>
          </div>
          <NZAOCList
            v-model:search="search"
            :aocGroups="filteredAocGroups"
            :expandedIslands="expandedIslands"
            :expandedRegions="expandedRegions"
            :toggleIsland="toggleIsland"
            :toggleRegion="toggleRegion"
            :activeAOC="activeAOC"
            :aocColor="aocColor"
            @selectAOC="handleSelectAOC"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import NZAOCList from './NZAOCList.vue'
import NZMapSection from './NZMapSection.vue'

const props = defineProps({
  focusRegion: { type: String, default: '' },
  embedded: { type: Boolean, default: false }
})

defineEmits(['back-to-course'])

const search = ref('')
const activeAOC = ref({ group: '', aoc: '' })
const regionInfo = ref(null)
const regionsData = ref([])
const drawerOpen = ref(false)

const expandedIslands = ref({ 'North Island': true, 'South Island': true })
const expandedRegions = ref({})

const toggleIsland = (islandName) => {
  expandedIslands.value[islandName] = !expandedIslands.value[islandName]
}

const toggleRegion = (regionName) => {
  expandedRegions.value[regionName] = !expandedRegions.value[regionName]
}

function aocColor() { return '#006400' }

const styleColors = {
  '紅酒': '#8B0000', '白酒': '#F0E68C', '甜酒': '#FFD700', '氣泡酒': '#87CEEB', '粉紅酒': '#FFB6C1'
}

const aocFiles = [
  'Auckland.geojson', 'Bannockburn.geojson', 'Central_Hawkes_Bay.geojson',
  'Central_Otago.geojson', 'Gisborne.geojson', 'Gladstone.geojson',
  'Hawkes_Bay.geojson', 'Kumeu.geojson', 'Marlborough.geojson',
  'Martinborough.geojson', 'Matakana.geojson', 'Nelson.geojson',
  'North_Canterbury.geojson', 'Northland.geojson', 'Waiheke_Island.geojson',
  'Waipara_Valley.geojson', 'Waitaki_Valley_North_Otago.geojson'
]

const geojsonToRegionMap = {
  'Auckland.geojson': 'Auckland',
  'Waiheke_Island.geojson': 'Auckland',
  'Kumeu.geojson': 'Auckland',
  'Matakana.geojson': 'Auckland',
  'Bannockburn.geojson': 'CentralOtago',
  'Central_Otago.geojson': 'CentralOtago',
  'Central_Hawkes_Bay.geojson': 'HawkesBay',
  'Hawkes_Bay.geojson': 'HawkesBay',
  'Gisborne.geojson': 'Gisborne',
  'Gladstone.geojson': 'Wairarapa',
  'Martinborough.geojson': 'Wairarapa',
  'Marlborough.geojson': 'Marlborough',
  'Nelson.geojson': 'Nelson',
  'North_Canterbury.geojson': 'NorthCanterbury',
  'Waipara_Valley.geojson': 'NorthCanterbury',
  'Northland.geojson': 'Northland',
  'Waitaki_Valley_North_Otago.geojson': 'WaitakiValley'
}

const aocGroups = computed(() => {
  const groups = { 'North Island': {}, 'South Island': {} }
  if (!regionsData.value.length) return groups
  const regionMap = new Map(regionsData.value.map(r => [r.id, r]))
  for (const file of aocFiles) {
    const regionId = geojsonToRegionMap[file]
    if (regionId) {
      const region = regionMap.get(regionId)
      if (region) {
        const island = region.island
        if (island && groups[island]) {
          if (!groups[island][region.name]) groups[island][region.name] = []
          groups[island][region.name].push(file)
        }
      }
    }
  }
  return groups
})

const filteredAocGroups = computed(() => {
  if (!search.value) return aocGroups.value
  const lowerSearch = search.value.toLowerCase()
  const result = { 'North Island': {}, 'South Island': {} }
  for (const island in aocGroups.value) {
    for (const region in aocGroups.value[island]) {
      const aocs = aocGroups.value[island][region]
      const filtered = aocs.filter(aoc => aoc.toLowerCase().replace('.geojson','').includes(lowerSearch))
      if (filtered.length > 0) {
        if (!result[island]) result[island] = {}
        result[island][region] = filtered
      }
    }
  }
  return result
})

const showAOCGeojson = async (groupName, aocFile) => {
  activeAOC.value = { group: groupName, aoc: aocFile }
  const aocId = aocFile.replace('.geojson', '').replace(/_/g, ' ')
  let foundRegion = null
  for (const region of regionsData.value) {
    if (region.id?.toLowerCase() === aocId.toLowerCase() || region.name?.toLowerCase() === aocId.toLowerCase()) {
      foundRegion = region
      break
    }
    if (region.subregions?.some(sub => sub.toLowerCase() === aocId.toLowerCase())) {
      foundRegion = region
      break
    }
  }
  regionInfo.value = foundRegion
}

const handleSelectAOC = async (groupName, aocFile) => {
  await showAOCGeojson(groupName, aocFile)
  drawerOpen.value = false
}

const resetMap = () => {
  activeAOC.value = { group: '', aoc: '' }
  regionInfo.value = null
}

const loadRegionsData = async () => {
  try {
    const res = await fetch('/newzealand/new-zealand-regions.json')
    if (res.ok) {
      regionsData.value = await res.json()
      regionsData.value.forEach(r => { expandedRegions.value[r.name] = false })
    }
  } catch (err) {
    console.error('載入產區資料失敗:', err)
    regionsData.value = []
  }
}

onMounted(async () => {
  await loadRegionsData()
})

watch(() => props.focusRegion, async (newRegion) => {
  if (!newRegion) return
  if (!regionsData.value.length) await loadRegionsData()
  let targetFile = null
  for (const [file, regionId] of Object.entries(geojsonToRegionMap)) {
    if (regionId.toLowerCase() === newRegion.toLowerCase()) {
      targetFile = file
      break
    }
  }
  if (!targetFile) return
  const regionObj = regionsData.value.find(r => r.id?.toLowerCase() === newRegion.toLowerCase())
  const groupName = regionObj ? regionObj.island : ''
  await showAOCGeojson(groupName, targetFile)
})
</script>

<style scoped>
.nz-map-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.nz-map-page.is-embedded {
  height: 600px;
}

/* ── 產區抽屜 ── */
.aoc-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}
.aoc-drawer {
  width: 100%;
  max-height: 75vh;
  background: #f7f3ee;
  border-radius: 18px 18px 0 0;
  overflow-y: auto;
  padding: 0 0 16px;
  display: flex;
  flex-direction: column;
}
.aoc-handle {
  width: 40px;
  height: 4px;
  background: #ccc;
  border-radius: 2px;
  margin: 10px auto 6px;
  flex-shrink: 0;
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px 10px;
  border-bottom: 1px solid #e0d8cf;
  flex-shrink: 0;
}
.drawer-header span {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a2e;
}
.drawer-close {
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #666;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 6px;
}
.drawer-close:hover { background: rgba(0,0,0,0.08); }

/* 抽屜動畫 */
.sheet-fade-enter-active,
.sheet-fade-leave-active { transition: opacity 0.22s ease; }
.sheet-fade-enter-active .aoc-drawer,
.sheet-fade-leave-active .aoc-drawer { transition: transform 0.28s cubic-bezier(.32,.72,0,1); }
.sheet-fade-enter-from,
.sheet-fade-leave-to { opacity: 0; }
.sheet-fade-enter-from .aoc-drawer,
.sheet-fade-leave-to .aoc-drawer { transform: translateY(100%); }

@media (max-width: 768px) {
  .nz-map-page.is-embedded { height: 500px; }
}
</style>
