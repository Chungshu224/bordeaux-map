<script setup>
import { useRouter } from 'vue-router'
import CaliforniaMapSection from './CaliforniaMapSection.vue'

const router = useRouter()
</script>

<template>
  <div class="california-page">
    <CaliforniaMapSection
      :selectedGroup="null"
      @back="router.push({ name: 'CaliforniaCourse' })"
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
