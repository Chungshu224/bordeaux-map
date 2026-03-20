<template>
  <div class="steps">
    <h4 v-if="title" class="steps-title">{{ title }}</h4>
    <div class="step" v-for="(s, i) in steps" :key="i">
      <strong v-if="s.title">{{ s.title }}：</strong>
      <span v-html="s.text"></span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  steps: { type: Array, default: () => [] },
  title: { type: String, default: '' }
})
</script>
<style scoped>
.steps-title { margin: 0 0 6px; font-weight: 600; }
.step { margin: 4px 0; }
</style>
