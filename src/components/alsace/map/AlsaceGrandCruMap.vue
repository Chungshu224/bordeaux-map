<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOCList from './AlsaceAOCList.vue'
import MapSection from './AlsaceMapSection.vue'

const emit = defineEmits(['request-learning-mode', 'go-to-lesson'])

const search = ref('')
const activeAOC = ref({ group: '', aoc: '' })
const regionInfo = ref(null)
let metadataList = null

const REAL_MOBILE_MAX_WIDTH = 768
const isMobileView = ref(typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH)
const showMobileAOCList = ref(false)
function checkMobile() {
  isMobileView.value = typeof window !== 'undefined' && window.innerWidth <= REAL_MOBILE_MAX_WIDTH
  if (!isMobileView.value) showMobileAOCList.value = false
}

onMounted(() => window.addEventListener('resize', checkMobile))
onUnmounted(() => window.removeEventListener('resize', checkMobile))

async function loadMetadata() {
  if (metadataList) return metadataList
  const res = await fetch('/alsace/data/Grand-Cru.json')
  metadataList = res.ok ? await res.json() : []
  return metadataList
}

const showAOC = async (group, aocFile) => {
  activeAOC.value = { group, aoc: aocFile }
  if (isMobileView.value) showMobileAOCList.value = false

  const id = aocFile.replace('.geojson', '')
  const list = await loadMetadata()
  regionInfo.value = list.find(m => m.id === id) || null
}

const reselectAOC = (aoc) => showAOC(aoc.group, aoc.aoc)

const resetMap = () => {
  activeAOC.value = { group: '', aoc: '' }
  regionInfo.value = null
}

const setMobileAOCList = (visible) => {
  showMobileAOCList.value = typeof visible === 'boolean' ? visible : true
}
</script>

<template>
  <div class="main-layout">
    <AOCList
      v-show="!isMobileView || showMobileAOCList"
      v-model:search="search"
      :activeAOC="activeAOC"
      @selectAOC="showAOC"
      :class="{ 'mobile-overlay': isMobileView && showMobileAOCList }"
    />

    <MapSection
      :activeAOC="activeAOC"
      :regionInfo="regionInfo"
      :mobileAOCListOpen="showMobileAOCList"
      @resetMap="resetMap"
      @reselect-aoc="reselectAOC"
      @request-aoc-list="setMobileAOCList"
      @request-learning-mode="emit('request-learning-mode')"
      @go-to-lesson="(id) => emit('go-to-lesson', id)"
    />
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0; left: 0; right: 0;
}

@media (max-width: 4096px) {
  .main-layout { flex-direction: column; height: 100dvh; width: 100%; position: fixed; }

  :deep(.aoc-list.mobile-overlay) {
    position: fixed;
    top: 12px; left: 50%; right: auto; bottom: 96px;
    height: auto;
    width: min(100%, calc(100vw - 24px));
    max-width: min(560px, calc(100vw - 24px));
    transform: translateX(-50%);
    z-index: 1000;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    overflow-y: auto;
  }
}

@media (min-width: 1024px) {
  :deep(.aoc-list) { width: 320px; min-width: 320px; }
}

@media (max-width: 768px) {
  :deep(.aoc-list:not(.mobile-overlay)) { display: none; }
}
</style>
