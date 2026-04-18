<script setup>
import { useRouter } from 'vue-router'
import PortugalMapSection from './portugal/map/PortugalMapSection.vue'

const router = useRouter()
</script>

<template>
  <div class="portugal-page">
    <PortugalMapSection @back="router.push('/')" />
  </div>
</template>

<style scoped>
.portugal-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
