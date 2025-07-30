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
    <div class="map" ref="mapContainer"></div>
    <button class="btn-3d-float" @click="toggle3D" :title="is3D ? '切換2D' : '切換3D'">
      <svg v-if="!is3D" width="22" height="22" viewBox="0 0 24 24"><path fill="#4169E1" d="M3 7.5V17l9 5 9-5V7.5l-9-5zm2 .94l7 3.89v7.73l-7-3.89zm14 7.73-7 3.89v-7.73l7-3.89zm1-1.18-7-3.89V4.11l7 3.89zm-16 0V8l7-3.89v7.73z"/></svg>
      <svg v-else width="22" height="22" viewBox="0 0 24 24"><path fill="#FFD700" d="M12 2 2 7v13h20V7zm0 2.18 7 3.87v2.11l-7 3.87-7-3.87V8.05zm-7 7.72 7 3.87 7-3.87V18H5z"/></svg>
    </button>
  </section>
</template>

<script setup>
import { defineProps, ref, defineExpose } from 'vue'
const props = defineProps([
  'activeAOC', 'regionInfo', 'aocColor', 'resetMap', 'toggle3D', 'is3D'
])
const mapContainer = ref(null)
defineExpose({ mapContainer })
</script>

<style scoped>
/* ...可複製原本 .map-section 相關 CSS... */
</style>
