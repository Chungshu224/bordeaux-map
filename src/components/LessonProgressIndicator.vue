<template>
  <div class="lesson-progress-indicator">
    <!-- 簡潔進度條 -->
    <div class="progress-bar-container">
      <div class="progress-info">
        <span class="progress-text">
          {{ currentSlide + 1 }} / {{ totalSlides }}
        </span>
        <span class="progress-percent">{{ progressPercent }}%</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <!-- 學習時間 -->
    <div v-if="showTimer" class="study-timer">
      <span class="timer-icon">⏱️</span>
      <span class="timer-text">{{ formattedTime }}</span>
    </div>

    <!-- 測驗統計（如果有） -->
    <div v-if="quizStats.total > 0" class="quiz-stats">
      <span class="quiz-icon">🎯</span>
      <span class="quiz-text">
        {{ quizStats.correct }} / {{ quizStats.total }} 
        ({{ quizStats.accuracy }}%)
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { progressActions } from '../stores/progressTracker'

const props = defineProps({
  lessonId: {
    type: String,
    required: true
  },
  currentSlide: {
    type: Number,
    default: 0
  },
  totalSlides: {
    type: Number,
    required: true
  },
  showTimer: {
    type: Boolean,
    default: true
  }
})

// 計時器
const elapsedSeconds = ref(0)
let timerInterval = null

// 進度百分比
const progressPercent = computed(() => {
  return Math.round(((props.currentSlide + 1) / props.totalSlides) * 100)
})

// 格式化時間
const formattedTime = computed(() => {
  const minutes = Math.floor(elapsedSeconds.value / 60)
  const seconds = elapsedSeconds.value % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
})

// 測驗統計
const quizStats = computed(() => {
  return progressActions.getQuizStats(props.lessonId)
})

// 啟動計時器
onMounted(() => {
  if (props.showTimer) {
    timerInterval = setInterval(() => {
      elapsedSeconds.value++
    }, 1000)
  }
})

// 清理計時器
onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>

<style scoped>
.lesson-progress-indicator {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.progress-bar-container {
  flex: 1;
  min-width: 200px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
  color: #666;
}

.progress-text {
  font-weight: 500;
}

.progress-percent {
  color: #667eea;
  font-weight: 600;
}

.progress-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.study-timer,
.quiz-stats {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
}

.timer-icon,
.quiz-icon {
  font-size: 16px;
}

.timer-text,
.quiz-text {
  font-weight: 500;
  color: #333;
}

@media (max-width: 768px) {
  .lesson-progress-indicator {
    flex-direction: column;
    gap: 12px;
  }

  .progress-bar-container {
    width: 100%;
  }

  .study-timer,
  .quiz-stats {
    width: 100%;
    justify-content: center;
  }
}
</style>
