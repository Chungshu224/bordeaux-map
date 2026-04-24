<template>
  <Teleport to="body">
    <div v-if="open" class="modal-backdrop" @click.self="$emit('close')">
      <div class="achievement-modal">
        <div class="achievement-modal-header">
          <h3>🏆 學習成就</h3>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>
        <div class="achievement-modal-body">
          <AchievementsDashboard :course-key="courseKey" @back="$emit('close')" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import AchievementsDashboard from '../../AchievementsDashboard.vue'

defineProps({
  open: { type: Boolean, default: false },
  courseKey: { type: String, required: true }
})
defineEmits(['close'])
</script>

<style scoped>
.modal-backdrop {
  position: fixed; inset: 0; background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px; backdrop-filter: blur(4px);
}
.achievement-modal {
  background: white; border-radius: 20px; width: 100%;
  max-width: 1100px; height: 90vh;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;
}
.achievement-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f3f4f6;
}
.achievement-modal-header h3 { margin: 0; font-size: 1.2rem; color: #111827; }
.modal-close {
  background: none; border: 0; font-size: 22px; color: #6b7280;
  cursor: pointer; width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.modal-close:hover { background: #f3f4f6; }
.achievement-modal-body { flex: 1; overflow-y: auto; padding: 16px 0; }
</style>
