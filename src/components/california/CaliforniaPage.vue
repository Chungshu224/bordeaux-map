<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CaliforniaRegionSelector from './CaliforniaRegionSelector.vue'
import CaliforniaMapSection from './CaliforniaMapSection.vue'

const router = useRouter()
// 'selector' | 'map'
const currentMode = ref('selector')
const selectedGroup = ref(null)

function onGroupSelected(group) {
  selectedGroup.value = group
  currentMode.value = 'map'
}
</script>

<template>
  <div class="california-page">
    <!-- 選擇產區群組 -->
    <CaliforniaRegionSelector
      v-if="currentMode === 'selector'"
      @groupSelected="onGroupSelected"
      @back="router.push('/california/course')"
    />

    <!-- 互動地圖 -->
    <CaliforniaMapSection
      v-else-if="currentMode === 'map' && selectedGroup"
      :selectedGroup="selectedGroup"
      @back="currentMode = 'selector'"
    />
  </div>
</template>

<style scoped>
.california-page {
  width: 100%;
  min-height: 100vh;
  background: #0a0a1e;
}
</style>
