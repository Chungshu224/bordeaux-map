<template>
  <section class="map-section">
    <div class="map-header">
      <h1>波爾多葡萄酒產區地圖</h1>
      
    </div>
    <div class="map-info-bar" v-if="activeAOC.aoc">
      <span class="aoc-info-title">
        <span class="aoc-dot" :style="{background: aocColor(activeAOC.group)}"></span>
        {{ activeAOC.aoc.replace('_AOC.geojson','').replace(/-/g,' ').replace(/_/g,' ') }}
      </span>
      <button class="btn-reset" @click="resetMap">重置地圖</button>
      <div v-if="regionInfo">
        <div style="margin-top:6px;">
          <b>{{ regionInfo.name }}</b> <span style="color:#888;">({{ regionInfo.type }})</span><br>
          <span style="font-size:0.97em;">葡萄品種：{{ regionInfo.grapes }}</span><br>
          <span style="font-size:0.97em;">{{ regionInfo.description }}</span>
        </div>
      </div>
      <div v-else style="margin-top:8px;color:#888;font-size:0.98em;">無詳細產區資料</div>
    </div>
    <div ref="mapContainer" class="map"></div>
    <button class="btn-3d" @click="props.toggle3D">
      {{ props.is3D ? '2D' : '3D' }}
    </button>
  </section>
</template>

<script setup>
import { defineProps, ref, defineExpose, onMounted, nextTick } from 'vue'

const props = defineProps({
  activeAOC: {
    type: Object,
    required: true,
    default: () => ({
      group: 'Regional',
      aoc: 'Bordeaux_AOC.geojson'
    })
  },
  regionInfo: Object,
  aocColor: Function,
  resetMap: Function,
  toggle3D: Function,
  is3D: Boolean,
  isLoading: Boolean,
  error: String
})
const mapContainer = ref(null)
defineExpose({ mapContainer })

onMounted(async () => {
  await loadAOCList();
  // 多等一點時間確保 DOM ready
  await new Promise(resolve => setTimeout(resolve, 200));
  await initMap();
  await preloadGeojson();
  // ...載入 regionsData...
});

const initMap = async (retry = 0) => {
  await nextTick();
  const mapContainer = mapSectionRef.value?.mapContainer;
  if (!mapContainer || !mapContainer.value) {
    if (retry < 5) {
      setTimeout(() => initMap(retry + 1), 100);
    } else {
      console.error('mapContainer DOM element not found after retry');
    }
    return;
  }
  // ...地圖初始化...
};
</script>

<style scoped>
/* ...可複製原本 .map-section 相關 CSS... */
</style>
