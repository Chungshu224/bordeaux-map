<template>
  <div class="slide-france-bdx">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <div class="map-toolbar">
        <button class="btn" @click="flyToBordeaux" :disabled="!mapRef">飛到波爾多</button>
        <button class="btn" @click="flyToOverview" :disabled="!mapRef">回到法國</button>
      </div>
      <PresentationMap
        key="france-bordeaux-map"
        :focus-type="'france-overview'"
        :show-bordeaux="true"
        :on-map-ready="onMapReady"
        :access-token="mapboxToken"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PresentationMap from '@/components/PresentationMap.vue'
import mapboxgl from 'mapbox-gl'

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' }
})

const mapRef = ref(null)

// 以 script 暴露 token 至模板，避免在 template 直接使用 import.meta
const mapboxToken = (import.meta?.env?.VITE_MAPBOX_TOKEN)
  || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || (window.localStorage && window.localStorage.getItem('VITE_MAPBOX_TOKEN'))))
  || ''

const onMapReady = async (map) => {
  mapRef.value = map
  // 幻燈片一：只顯示波爾多地圖外框，不添加任何內部標註或圖層
}

const flyToBordeaux = () => {
  if (!mapRef.value) return
  mapRef.value.flyTo({ center: [-0.5792, 44.8378], zoom: 9, pitch: 0, bearing: 0, duration: 1600 })
}

const flyToOverview = () => {
  if (!mapRef.value) return
  mapRef.value.flyTo({ center: [2.2137, 46.2276], zoom: 5, pitch: 0, bearing: 0, duration: 1600 })
}
</script>

<style scoped>
.slide-france-bdx {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 24px;
  align-items: stretch;
  min-height: 560px;
}
.col.left {
  overflow: auto;
}
.col.right {
  min-height: 560px;
  position: relative;
}
.title { margin: 0 0 12px; }
.content :deep(p) { margin: 0 0 8px; }
@media (max-width: 1024px) {
  .slide-france-bdx { grid-template-columns: 1fr; }
  .col.right { min-height: 420px; }
}

.map-toolbar {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 5;
  display: flex;
  gap: 8px;
}
.btn {
  background: rgba(0,0,0,0.7);
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
}
.btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* 隱藏內建的 emoji 標記與文字，避免與本頁圓點重複 */
:deep(.bordeaux-marker),
:deep(.bordeaux-label) { display: none !important; }
</style>
