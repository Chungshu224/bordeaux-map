<template>
  <div class="info-card">
    <strong v-if="title">{{ title }}：</strong>
    <slot>
      <span v-html="content"></span>
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  title: { type: String, default: '重點' },
  content: { type: String, default: '' }
})
</script>
