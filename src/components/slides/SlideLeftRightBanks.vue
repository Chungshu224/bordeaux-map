<template>
  <div class="slide-banks">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <PresentationMap
        key="left-right-banks-map"
        :focus-type="'bordeaux-regions'"
        :show-bordeaux="true"
        :geojson-paths="geojsonPaths"
        :on-map-ready="onMapReady"
      />
    </div>
  </div>
</template>

<script setup>
import PresentationMap from '@/components/PresentationMap.vue'

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' }
})

// 左岸與右岸主要產區的 GeoJSON 路徑
const geojsonPaths = [
  // 左岸產區（深紅色 - Cabernet Sauvignon）
  '/geojson/LeftBank/Medoc/Medoc_AOC.geojson',              // 梅多克
  '/geojson/LeftBank/Medoc/Haut-Medoc_AOC.geojson',         // 上梅多克
  '/geojson/LeftBank/Graves/Graves_AOC.geojson',            // 格拉夫
  
  // 右岸產區（深紫色 - Merlot）
  '/geojson/RightBank/Libournais/St-Emilion_AOC.geojson',   // 聖愛美濃
  '/geojson/RightBank/Libournais/Pomerol_AOC.geojson',      // 波美侯
  '/geojson/RightBank/Libournais/Fronsac_AOC.geojson'       // 弗朗丘
]

const onMapReady = async (map) => {
  // 幻燈片三：顯示左岸右岸主要產區 + 波爾多外框
  // GeoJSON 由 PresentationMap 的 geojson-paths 自動載入並著色
}
</script>

<style scoped>
.slide-banks { display: grid; grid-template-columns: 1fr 1.1fr; gap: 24px; align-items: stretch; min-height: 560px; }
.col.left { overflow: auto; }
.col.right { min-height: 560px; }
.title { margin: 0 0 12px; }
.content :deep(p) { margin: 0 0 8px; }
@media (max-width: 1024px) { .slide-banks { grid-template-columns: 1fr; } .col.right { min-height: 420px; } }
</style>
