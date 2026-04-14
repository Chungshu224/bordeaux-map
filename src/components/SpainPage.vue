<script setup>
import { ref } from 'vue'
import SpainRegionSelector from './spain/map/SpainRegionSelector.vue'
import SpainMapSection from './spain/map/SpainMapSection.vue'

// 'selector' | 'map'
const currentMode = ref('selector')
const selectedRegion = ref(null)

function onRegionSelected(region) {
  selectedRegion.value = region
  currentMode.value = 'map'
}

function goBack() {
  currentMode.value = 'selector'
  selectedRegion.value = null
}
</script>

<template>
  <div class="spain-page">
    <div v-if="currentMode === 'selector'">
      <SpainRegionSelector
        @regionSelected="onRegionSelected"
      />
    </div>

    <div v-else-if="currentMode === 'map' && selectedRegion">
      <SpainMapSection
        :region="selectedRegion"
        @back="goBack"
      />
    </div>
  </div>
</template>

<style scoped>
.spain-page {
  min-height: 100vh;
}
</style>
