<template>
  <div class="achievement-notifications-container">
    <transition-group name="notification-list">
      <AchievementNotification
        v-for="notification in notifications"
        :key="notification.id + '-' + notification.timestamp"
        :notification="notification"
        :duration="duration"
        @close="removeNotification(notification.id)"
        :style="{ '--index': notifications.indexOf(notification) }"
      />
    </transition-group>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AchievementNotification from './AchievementNotification.vue'

const props = defineProps({
  maxNotifications: {
    type: Number,
    default: 3
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const notifications = ref([])

const handleAchievementNotification = (event) => {
  const notification = event.detail
  
  // 添加到列表
  notifications.value.push(notification)
  
  // 如果超過最大數量，移除最舊的
  if (notifications.value.length > props.maxNotifications) {
    notifications.value.shift()
  }
}

const handleRemoveNotification = (event) => {
  removeNotification(event.detail.id)
}

const removeNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.value.splice(index, 1)
  }
}

onMounted(() => {
  window.addEventListener('achievementNotification', handleAchievementNotification)
  window.addEventListener('removeAchievementNotification', handleRemoveNotification)
})

onUnmounted(() => {
  window.removeEventListener('achievementNotification', handleAchievementNotification)
  window.removeEventListener('removeAchievementNotification', handleRemoveNotification)
})
</script>

<style scoped>
.achievement-notifications-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  pointer-events: none;
}

.achievement-notifications-container > * {
  pointer-events: auto;
}

/* 通知列表動畫 */
.notification-list-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.notification-list-leave-active {
  transition: all 0.3s ease-in;
}

.notification-list-enter-from {
  opacity: 0;
  transform: translateY(-30px) translateX(50px) scale(0.8);
}

.notification-list-leave-to {
  opacity: 0;
  transform: translateX(120px) scale(0.9);
}

.notification-list-move {
  transition: transform 0.3s ease;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .achievement-notifications-container {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: 90%;
  }
}
</style>
