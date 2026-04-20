<script setup>
import { ref } from 'vue'
import AustraliaCourseManager   from './australia/course/AustraliaCourseManager.vue'
import AustraliaRegionSelector  from './australia/map/AustraliaRegionSelector.vue'
import AustraliaMapSection      from './australia/map/AustraliaMapSection.vue'

const currentMode     = ref('course')
const selectedCluster = ref(null)

function openMap()           { currentMode.value = 'regionSelector' }
function backToCourse()      { currentMode.value = 'course'; selectedCluster.value = null }
function backToSelector()    { currentMode.value = 'regionSelector' }
function openAll()           { selectedCluster.value = null; currentMode.value = 'map' }
function selectCluster(c)    { selectedCluster.value = c; currentMode.value = 'map' }
</script>

<template>
  <div class="australia-page">
    <AustraliaCourseManager
      v-if="currentMode === 'course'"
      @openMap="openMap"
    />
    <AustraliaRegionSelector
      v-else-if="currentMode === 'regionSelector'"
      @backToCourse="backToCourse"
      @openAll="openAll"
      @clusterSelected="selectCluster"
    />
    <AustraliaMapSection
      v-else-if="currentMode === 'map'"
      :initialCluster="selectedCluster"
      @back="selectedCluster ? backToSelector() : backToCourse()"
    />
  </div>
</template>

<style scoped>
.australia-page {
  width: 100%;
  min-height: 100vh;
}
</style>
