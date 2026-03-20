<template>
  <transition name="slide-down">
    <div v-if="visible" class="achievement-notification" :class="[`rarity-${notification.rarity}`, animationClass]">
      <div class="notification-glow"></div>
      <div class="notification-content">
        <div class="achievement-icon">{{ notification.icon }}</div>
        <div class="achievement-info">
          <div class="achievement-tag">成就解鎖</div>
          <div class="achievement-title">{{ notification.title }}</div>
          <div class="achievement-description">{{ notification.description }}</div>
          <div class="achievement-points">+{{ notification.points }} 點</div>
        </div>
      </div>
      <button @click="close" class="close-btn" aria-label="關閉">×</button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  notification: {
    type: Object,
    required: true
  },
  duration: {
    type: Number,
    default: 5000
  }
})

const emit = defineEmits(['close'])

const visible = ref(false)
const animationClass = ref('')
let hideTimeout = null

onMounted(() => {
  // 延遲顯示以觸發動畫
  requestAnimationFrame(() => {
    visible.value = true
    animationClass.value = 'show'
  })

  // 播放音效（如果支持）
  playNotificationSound(props.notification.rarity)

  // 自動隱藏
  hideTimeout = setTimeout(() => {
    close()
  }, props.duration)
})

onUnmounted(() => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
  }
})

const close = () => {
  animationClass.value = 'hide'
  setTimeout(() => {
    visible.value = false
    emit('close')
  }, 300)
}

const playNotificationSound = (rarity) => {
  // 使用 Web Audio API 生成簡單的提示音
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // 根據稀有度設置不同的音調
    const frequencies = {
      common: 440,
      uncommon: 523,
      rare: 659,
      epic: 784,
      legendary: 880
    }

    oscillator.frequency.value = frequencies[rarity] || 440
    oscillator.type = 'sine'

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  } catch (error) {
    // 音效播放失敗時靜默處理
  }
}
</script>

<style scoped>
.achievement-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 350px;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 10000;
  transform-origin: top right;
}

.notification-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 稀有度邊框顏色 */
.rarity-common .notification-glow {
  background: linear-gradient(90deg, #9e9e9e, #757575);
}

.rarity-uncommon .notification-glow {
  background: linear-gradient(90deg, #4caf50, #388e3c);
}

.rarity-rare .notification-glow {
  background: linear-gradient(90deg, #2196f3, #1976d2);
}

.rarity-epic .notification-glow {
  background: linear-gradient(90deg, #9c27b0, #7b1fa2);
}

.rarity-legendary .notification-glow {
  background: linear-gradient(90deg, #ff9800, #f57c00);
  height: 6px;
  box-shadow: 0 0 20px rgba(255, 152, 0, 0.6);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  padding-top: 24px;
}

.achievement-icon {
  font-size: 48px;
  flex-shrink: 0;
  animation: bounce 0.6s ease-out;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.achievement-info {
  flex: 1;
  min-width: 0;
}

.achievement-tag {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #667eea;
  margin-bottom: 4px;
}

.achievement-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.achievement-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 8px;
}

.achievement-points {
  font-size: 13px;
  font-weight: 600;
  color: #4caf50;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.achievement-points::before {
  content: '⭐';
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: #999;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #333;
  transform: rotate(90deg);
}

/* 動畫 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateX(100px) scale(0.9);
}

.achievement-notification.show {
  animation: slideInBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.achievement-notification.hide {
  animation: slideOutRight 0.3s ease-in;
}

@keyframes slideInBounce {
  0% {
    opacity: 0;
    transform: translateY(-30px) translateX(50px) scale(0.8);
  }
  60% {
    transform: translateY(10px) translateX(-5px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
}

@keyframes slideOutRight {
  to {
    opacity: 0;
    transform: translateX(120px) scale(0.9);
  }
}

/* 多個通知堆疊 */
.achievement-notification:nth-child(2) {
  top: 140px;
}

.achievement-notification:nth-child(3) {
  top: 260px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .achievement-notification {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    min-width: 90%;
    max-width: 90%;
  }

  .slide-down-enter-from {
    transform: translateY(-20px) translateX(-50%) scale(0.95);
  }

  .slide-down-leave-to {
    transform: translateY(-20px) translateX(-50%) scale(0.9);
  }
}

/* 傳說級成就特殊效果 */
.rarity-legendary {
  animation: legendaryPulse 2s ease-in-out infinite;
}

@keyframes legendaryPulse {
  0%, 100% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 152, 0, 0.3);
  }
  50% {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 50px rgba(255, 152, 0, 0.5);
  }
}

.rarity-legendary .achievement-icon {
  animation: bounce 0.6s ease-out, rotate 3s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
