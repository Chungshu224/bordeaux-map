<template>
  <div class="misconception-card">
    <strong>常見誤解：</strong>
    <slot>
      <span v-html="content"></span>
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  content: { type: String, default: '' }
})
</script>
