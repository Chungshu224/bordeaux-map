<template>
  <div class="au-course-manager">
    <!-- 等級選擇首頁 -->
    <AustraliaLevelSelector
      v-if="view === 'levelSelector'"
      @openMap="$emit('openMap')"
      @startLevel="handleSelectLevel"
      @openAchievements="showAchievementsModal = true"
      @openNotebook="view = 'notebook'"
    />

    <!-- 品飲筆記 -->
    <AustraliaTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'levelSelector'"
    />

    <!-- 章節列表 -->
    <AustraliaCourseLayout
      v-else-if="view === 'courseContent' && !activeLesson"
      :currentLevelKey="selectedLevelKey"
      :currentLevelDef="currentLevelDef"
      :completedLessons="completedLessonsArray"
      @backToLevelSelector="backToLevelSelector"
      @changeLevel="handleSelectLevel"
      @startLesson="startLesson"
    />

    <!-- 投影片檢視器 -->
    <AustraliaSlideViewer
      v-else-if="view === 'courseContent' && activeLesson"
      :lesson="activeLesson"
      :isFinalExam="activeLesson?.isFinalExam || false"
      @close="closeLesson"
      @complete="handleComplete"
    />

    <!-- 成就通知 Toast -->
    <div v-if="achievementNotification" class="au-achievement-toast">
      <div class="au-toast-content">
        <span class="au-toast-emoji">🏆</span>
        <div class="au-toast-info">
          <strong>成就解鎖！{{ achievementNotification.title }}</strong>
          <span>+{{ achievementNotification.points }} 點</span>
        </div>
        <button class="au-toast-close" @click="achievementNotification = null">×</button>
      </div>
    </div>

    <!-- 成就 Modal -->
    <Teleport to="body">
      <div v-if="showAchievementsModal" class="au-modal-overlay" @click.self="showAchievementsModal = false">
        <div class="au-modal">
          <div class="au-modal-header">
            <h3>🏆 澳洲葡萄酒成就系統</h3>
            <button class="au-modal-close" @click="showAchievementsModal = false">×</button>
          </div>
          <div class="au-modal-body">
            <AchievementsDashboard course-key="australia" @back="showAchievementsModal = false" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AustraliaLevelSelector  from './AustraliaLevelSelector.vue'
import AustraliaCourseLayout   from './AustraliaCourseLayout.vue'
import AustraliaSlideViewer    from './AustraliaSlideViewer.vue'
import AchievementsDashboard   from '../../AchievementsDashboard.vue'
import AustraliaTastingNotebookPage from '../notebook/AustraliaTastingNotebookPage.vue'
import { courseLevels, getUserProgress, saveProgress, getLevelProgressPercent } from '../data/courseLevels.js'
import {
  globalAustraliaAchievementManager,
  australiaAchievementState
} from '../../../stores/australiaAchievementSystem.js'

defineEmits(['openMap'])

globalAustraliaAchievementManager.init()

const view = ref('levelSelector')  // 'levelSelector' | 'courseContent' | 'notebook'
const selectedLevelKey      = ref(null)
const activeLesson          = ref(null)
const completedMap          = ref({})
const showAchievementsModal = ref(false)
const achievementNotification = ref(null)

const currentLevelDef = computed(() =>
  selectedLevelKey.value ? courseLevels.find(l => l.key === selectedLevelKey.value) : null
)
const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

function loadCompleted(levelKey) {
  completedMap.value = {}
  const prog = getUserProgress(levelKey)
  Object.keys(prog).filter(k => prog[k]).forEach(id => { completedMap.value[id] = true })
}

function handleSelectLevel(levelKey) {
  selectedLevelKey.value = levelKey
  view.value = 'courseContent'
  activeLesson.value = null
  loadCompleted(levelKey)
}

function backToLevelSelector() {
  view.value = 'levelSelector'
  selectedLevelKey.value = null
  activeLesson.value = null
}

function startLesson(lesson) {
  activeLesson.value = lesson
}

function closeLesson() {
  activeLesson.value = null
}

function handleComplete(lessonId) {
  if (selectedLevelKey.value) {
    saveProgress(selectedLevelKey.value, lessonId)
    completedMap.value[lessonId] = true

    // 計算進度並觸發成就
    const levelKey = selectedLevelKey.value
    const levelDef = courseLevels.find(l => l.key === levelKey)
    const allLessonsInLevel = levelDef?.modules?.flatMap(m => m.lessons) || []
    const doneCount = allLessonsInLevel.filter(l =>
      completedMap.value[l.id] || l.id === lessonId
    ).length
    const levelCompleted = doneCount >= allLessonsInLevel.length

    // 全局進度（3 個等級共 48 課）
    const totalDone = ['level1', 'level2', 'level3'].reduce((sum, lk) => {
      const prog = getUserProgress(lk)
      return sum + Object.values(prog).filter(Boolean).length
    }, 0)
    const totalProgress = Math.round(totalDone / 48 * 100)

    const newUnlocks = globalAustraliaAchievementManager.recordLessonCompleted({
      lessonId,
      levelKey,
      totalProgress,
      levelCompleted
    })

    if (newUnlocks.length > 0) {
      achievementNotification.value = newUnlocks[0]
      setTimeout(() => { achievementNotification.value = null }, 4000)
    }
  }
  activeLesson.value = null
}
</script>

<style scoped>
.au-course-manager {
  width: 100%;
  min-height: 100vh;
}

/* 成就通知 Toast */
.au-achievement-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  animation: auSlideIn 0.4s ease;
}
@keyframes auSlideIn {
  from { transform: translateX(120%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
.au-toast-content {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #00274e 0%, #1a4a8a 100%);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 39, 78, 0.45);
  min-width: 260px;
}
.au-toast-emoji { font-size: 1.5rem; }
.au-toast-info  { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.au-toast-info strong { font-size: 0.88rem; }
.au-toast-info span   { font-size: 0.75rem; opacity: 0.8; }
.au-toast-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.7;
  padding: 0 4px;
}
.au-toast-close:hover { opacity: 1; }

/* 成就 Modal */
.au-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 8888;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.au-modal {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 780px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.au-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #00274e 0%, #1a4a8a 100%);
  color: white;
}
.au-modal-header h3 { margin: 0; font-size: 1.1rem; }
.au-modal-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
}
.au-modal-close:hover { opacity: 0.8; }
.au-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}
</style>
