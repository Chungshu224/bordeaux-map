<script setup>
import { ref } from 'vue'
import SpainCourseManager from './course/SpainCourseManager.vue'
import SpainRegionSelector from './map/SpainRegionSelector.vue'
import SpainMapSection from './map/SpainMapSection.vue'

// 'course' | 'map-selector' | 'map-detail'
const currentMode = ref('course')
const selectedRegion = ref(null)
const mapOpenedFromCourse = ref(false)

const allSpain = {
  id: 'all',
  name: '全西班牙',
  nameEs: 'España',
  icon: '🇪🇸',
  color: '#c0392b',
  center: [-3.5, 40.0],
  zoom: 5.5,
  filterAutonomiaId: null,
}

// 從課程主頁 → 探索地圖（先到地區選擇器）
function openMap() {
  currentMode.value = 'map-selector'
}

// 從課程主頁 → 依自治區選擇器
function openSelector() {
  currentMode.value = 'map-selector'
}

// 地區選擇器選了一個地區 → 地圖
function onRegionSelected(region) {
  selectedRegion.value = region
  currentMode.value = 'map-detail'
}

// 地區選擇器選了「探索全西班牙」
function openFullMap() {
  selectedRegion.value = allSpain
  currentMode.value = 'map-detail'
}

// 地圖 → 回到選擇器（或課程，視開啟來源而定）
function backToSelector() {
  if (mapOpenedFromCourse.value) {
    mapOpenedFromCourse.value = false
    currentMode.value = 'course'
  } else {
    currentMode.value = 'map-selector'
  }
  selectedRegion.value = null
}

// 地區選擇器 → 回到課程主頁
function backToCourse() {
  currentMode.value = 'course'
}

// 從課程投影片地圖按鈕 → 直接開啟對應自治區地圖
const REGION_MAP = {
  'all':              { id: 'all', name: '全西班牙', nameEs: 'España', icon: '🇪🇸', color: '#c0392b', center: [-3.5, 40.0], zoom: 5.5, filterAutonomiaId: null },
  'rioja':            { id: 'rioja', name: '拉里奧哈', nameEs: 'La Rioja', icon: '🍷', color: '#c0392b', center: [-2.5, 42.3], zoom: 9, filterAutonomiaId: 'rioja' },
  'castilla-leon':    { id: 'castilla-leon', name: '卡斯提亞-萊昂', nameEs: 'Castilla y León', icon: '🏰', color: '#e67e22', center: [-4.2, 41.5], zoom: 7, filterAutonomiaId: 'castilla-leon' },
  'castilla-la-mancha': { id: 'castilla-la-mancha', name: '卡斯提亞-拉曼恰', nameEs: 'Castilla-La Mancha', icon: '🌾', color: '#c0392b', center: [-3.0, 39.5], zoom: 7, filterAutonomiaId: 'castilla-la-mancha' },
  'galicia':          { id: 'galicia', name: '加利西亞', nameEs: 'Galicia', icon: '🌊', color: '#27ae60', center: [-8.0, 42.5], zoom: 8, filterAutonomiaId: 'galicia' },
  'catalonia':        { id: 'catalonia', name: '加泰羅尼亞', nameEs: 'Cataluña', icon: '🌹', color: '#e74c3c', center: [1.5, 41.6], zoom: 7.5, filterAutonomiaId: 'catalonia' },
  'andalucia':        { id: 'andalucia', name: '安達盧西亞', nameEs: 'Andalucía', icon: '☀️', color: '#f39c12', center: [-4.8, 37.4], zoom: 7, filterAutonomiaId: 'andalucia' },
  'navarra':          { id: 'navarra', name: '納瓦拉', nameEs: 'Navarra', icon: '🏔️', color: '#8e44ad', center: [-1.7, 42.7], zoom: 9, filterAutonomiaId: 'navarra' },
  'aragon':           { id: 'aragon', name: '阿拉貢', nameEs: 'Aragón', icon: '⚔️', color: '#c0392b', center: [-0.8, 41.5], zoom: 7.5, filterAutonomiaId: 'aragon' },
  'murcia':           { id: 'murcia', name: '穆爾西亞', nameEs: 'Murcia', icon: '🌶️', color: '#e74c3c', center: [-1.5, 37.9], zoom: 9, filterAutonomiaId: 'murcia' },
  'canarias':         { id: 'canarias', name: '加那利群島', nameEs: 'Canarias', icon: '🌋', color: '#e67e22', center: [-15.5, 28.5], zoom: 6.5, filterAutonomiaId: 'canarias' },
  'pais-vasco':       { id: 'pais-vasco', name: '巴斯克', nameEs: 'País Vasco', icon: '🌿', color: '#27ae60', center: [-2.5, 43.0], zoom: 9, filterAutonomiaId: 'pais-vasco' },
  'valencia':         { id: 'valencia', name: '巴倫西亞', nameEs: 'Comunitat Valenciana', icon: '🍊', color: '#e67e22', center: [-0.5, 39.5], zoom: 8, filterAutonomiaId: 'valencia' },
  'madrid':           { id: 'madrid', name: '馬德里', nameEs: 'Madrid', icon: '👑', color: '#c0392b', center: [-3.7, 40.4], zoom: 9, filterAutonomiaId: 'madrid' },
  'extremadura':      { id: 'extremadura', name: '埃斯特雷馬杜拉', nameEs: 'Extremadura', icon: '🦅', color: '#27ae60', center: [-6.0, 39.0], zoom: 7.5, filterAutonomiaId: 'extremadura' },
  'baleares':         { id: 'baleares', name: '巴利亞利群島', nameEs: 'Illes Balears', icon: '🏝️', color: '#3498db', center: [2.9, 39.6], zoom: 8, filterAutonomiaId: 'baleares' },
  'asturias':         { id: 'asturias', name: '阿斯圖里亞斯', nameEs: 'Asturias', icon: '🐄', color: '#27ae60', center: [-6.0, 43.3], zoom: 9, filterAutonomiaId: 'asturias' },
}

function openRegionMap(regionKey) {
  const region = REGION_MAP[regionKey] || allSpain
  selectedRegion.value = region
  mapOpenedFromCourse.value = true
  currentMode.value = 'map-detail'
}
</script>

<template>
  <div class="spain-page">

    <!-- 課程主頁 -->
    <SpainCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
      @openSelector="openSelector"
      @openRegionMap="openRegionMap"
    />

    <!-- 自治區選擇器 -->
    <SpainRegionSelector
      v-else-if="currentMode === 'map-selector'"
      @regionSelected="onRegionSelected"
      @openFullMap="openFullMap"
      @back="backToCourse"
    />

    <!-- 地圖細節 -->
    <SpainMapSection
      v-else-if="currentMode === 'map-detail' && selectedRegion"
      :region="selectedRegion"
      :backLabel="mapOpenedFromCourse ? '返回課程' : '返回自治區'"
      @back="backToSelector"
    />

  </div>
</template>

<style scoped>
.spain-page {
  min-height: 100vh;
}
</style>
