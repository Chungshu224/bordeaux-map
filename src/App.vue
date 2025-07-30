<template>
  <div class="app">
    <BordeauxMap />
  </div>
</template>

<script setup>
import BordeauxMap from './components/BordeauxMap.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
