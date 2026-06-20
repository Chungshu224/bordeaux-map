<template>
  <div class="italy-course-manager">
    <!-- Level Selector -->
    <ItalyLevelSelector
      v-if="view === 'levelSelector'"
      :key="progressVersion"
      @startLevel="handleSelectLevel"
      @openMap="$emit('openMap')"
      @openNotebook="view = 'notebook'"
      @openGames="view = 'games'"
      @openAchievements="showAchievementsModal = true"
    />

    <!-- Tasting Notebook -->
    <ItalyTastingNotebookPage
      v-else-if="view === 'notebook'"
      @back="view = 'levelSelector'"
    />

    <!-- Game Hub -->
    <ItalyGameHubPage
      v-else-if="view === 'games'"
      @back="view = 'levelSelector'"
    />

    <!-- Course Content -->
    <template v-else-if="view === 'courseContent'">
      <!-- Italy Course Layout（章節導航）-->
      <ItalyCourseLayout
        v-if="!activeLesson"
        :currentLevelKey="selectedLevelKey"
        :currentLevelDef="currentLevelDef"
        :completedLessons="completedLessonsArray"
        :unlockedLevels="unlockedLevels"
        @backToLevelSelector="backToLevelSelector"
        @changeLevel="handleSelectLevel"
        @startLesson="startLesson"
      />

      <!-- Slide Viewer -->
      <ItalySlideViewer
        v-else
        :lesson="activeLesson"
        :isFinalExam="activeLessonMeta?.isFinalExam || false"
        @close="closeLesson"
        @complete="handleComplete"
        @openMap="$emit('openMap')"
      />
    </template>

    <!-- 成就通知 Toast -->
    <div v-if="achievementNotification" class="it-achievement-toast">
      <div class="it-toast-content">
        <span class="it-toast-emoji">🏆</span>
        <div class="it-toast-info">
          <strong>{{ $t('italy.manager.toastTitle') }}{{ achievementNotification.title }}</strong>
          <span>{{ $t('italy.manager.points', { n: achievementNotification.points }) }}</span>
        </div>
        <button class="it-toast-close" @click="achievementNotification = null">×</button>
      </div>
    </div>

    <!-- 成就 Modal -->
    <Teleport to="body">
      <div v-if="showAchievementsModal" class="it-modal-overlay" @click.self="showAchievementsModal = false">
        <div class="it-modal">
          <div class="it-modal-header">
            <h3>{{ $t('italy.manager.modalTitle') }}</h3>
            <button class="it-modal-close" @click="showAchievementsModal = false">×</button>
          </div>
          <div class="it-modal-body">
            <AchievementsDashboard course-key="italy" @back="showAchievementsModal = false" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ItalyLevelSelector from './ItalyLevelSelector.vue'
import ItalySlideViewer from './ItalySlideViewer.vue'
import ItalyCourseLayout from './ItalyCourseLayout.vue'
import ItalyTastingNotebookPage from '../notebook/ItalyTastingNotebookPage.vue'
import ItalyGameHubPage from '../games/ItalyGameHubPage.vue'
import AchievementsDashboard from '../../AchievementsDashboard.vue'
import { courseLevels, getUserProgress, saveProgress, isItalyLevelUnlocked } from '../data/courseLevels.js'
import {
  globalItalyAchievementManager
} from '../../../stores/italyAchievementSystem.js'
import { applyItalyTranslations } from '../../../data/lessonI18nUtils.js'
import { authActions, authState, authInitPromise } from '../../../stores/authStore.js'
import { saveItalyLessonToSupabase, loadAndMergeItalyProgress } from '../../../lib/italyProgressSync.js'

const ITALY_TRANSLATIONS = import.meta.glob('../../../locales/*/lessons/italy/*.json')

const { t, locale } = useI18n()
const emit = defineEmits(['openMap'])

globalItalyAchievementManager.init()

const view = ref('levelSelector')
const selectedLevelKey = ref(null)
const activeLesson = ref(null)
const activeLessonMeta = ref(null)
const showAchievementsModal = ref(false)
const achievementNotification = ref(null)

// 已完成課程清單（從 localStorage）
const completedMap = ref({})

// 每次 Supabase 同步後遞增，強制重新讀取 localStorage
const progressVersion = ref(0)

const completedLessonsArray = computed(() =>
  Object.keys(completedMap.value).filter(k => completedMap.value[k])
)

const unlockedLevels = computed(() => {
  progressVersion.value // reactive dependency — sync 後觸發重算
  const isAdmin = authActions.isAdmin && authActions.isAdmin()
  return {
    level1: true,
    level2: isAdmin || isItalyLevelUnlocked('level2'),
    level3: isAdmin || isItalyLevelUnlocked('level3')
  }
})

onMounted(async () => {
  await authInitPromise
  const userId = authState.user?.id
  if (userId) {
    const didUpdate = await loadAndMergeItalyProgress(userId)
    if (didUpdate) progressVersion.value++
  }
})

function loadCompleted (levelKey) {
  const progress = getUserProgress(levelKey)
  progress.completedLessons.forEach(id => { completedMap.value[id] = true })
}

function isCompleted (lessonId) {
  return !!completedMap.value[lessonId]
}

const currentLevelDef = computed(() => {
  return selectedLevelKey.value ? courseLevels[selectedLevelKey.value] : null
})

function handleSelectLevel (levelKey) {
  if (!unlockedLevels.value[levelKey]) {
    const hint = levelKey === 'level2'
      ? t('italy.selector.unlockHint.level2')
      : t('italy.selector.unlockHint.level3')
    window.alert(hint)
    return
  }
  selectedLevelKey.value = levelKey
  loadCompleted(levelKey)
  view.value = 'courseContent'
}

function backToLevelSelector () {
  view.value = 'levelSelector'
  selectedLevelKey.value = null
  activeLesson.value = null
}

async function startLesson (lessonMeta) {
  activeLessonMeta.value = lessonMeta
  try {
    const levelKey = selectedLevelKey.value
    const res = await fetch(`/italy/courses/${levelKey}/${lessonMeta.id}.json`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    let data = await res.json()
    if (lessonMeta.mapRegion) data.mapRegion = lessonMeta.mapRegion
    if (lessonMeta.objectives?.length) data.objectives = lessonMeta.objectives
    // 注入 levelKey 供綜合評量題庫載入使用
    data.levelKey = levelKey

    // 多語言翻譯覆蓋（locale !== zh-TW 時嘗試載入 overlay）
    const currentLocale = locale.value
    if (currentLocale !== 'zh-TW') {
      const overlayKey = Object.keys(ITALY_TRANSLATIONS).find(k =>
        k.includes(`/${currentLocale}/`) && k.endsWith(`/${lessonMeta.id}.json`)
      )
      if (overlayKey) {
        try {
          const mod = await ITALY_TRANSLATIONS[overlayKey]()
          const flat = mod?.default || mod
          if (flat && typeof flat === 'object') {
            data = applyItalyTranslations(data, flat)
          }
        } catch (e) {
          console.warn('[Italy i18n] overlay 載入失敗:', e.message)
        }
      }
    }

    activeLesson.value = data
    nextTick(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  } catch (e) {
    console.error('載入課程失敗:', e)
    activeLesson.value = {
      lessonId: lessonMeta.id,
      title: lessonMeta.title,
      mapRegion: lessonMeta.mapRegion || null,
      levelKey: selectedLevelKey.value,
      slides: [{ type: 'content', title: lessonMeta.title, content: '課程內容載入中，請稍後再試。' }]
    }
  }
}

function closeLesson () {
  activeLesson.value = null
  activeLessonMeta.value = null
}

function handleComplete (lessonId) {
  if (selectedLevelKey.value && lessonId) {
    saveProgress(selectedLevelKey.value, lessonId)
    completedMap.value[lessonId] = true

    // 同步至 Supabase（跨裝置同步）
    const userId = authState.user?.id
    if (userId) saveItalyLessonToSupabase(userId, lessonId)

    // 計算整體進度并觸發成就
    const levelKey = selectedLevelKey.value
    const levelNum = parseInt(levelKey?.replace('level', '') || '0')
    const levelDef = courseLevels[levelKey]
    const allLessons = levelDef?.modules?.flatMap(m => m.lessons) || []
    const levelCompleted = allLessons.length > 0 &&
      allLessons.every(l => completedMap.value[l.id] || l.id === lessonId)

    const totalDone = ['level1', 'level2', 'level3'].reduce((sum, lk) => {
      const prog = getUserProgress(lk)
      return sum + (prog.completedLessons?.length || 0)
    }, 0)
    const totalLessons = 61
    const totalProgress = Math.round(totalDone / totalLessons * 100)

    const newUnlocks = globalItalyAchievementManager.recordLessonCompleted({
      levelId: levelCompleted ? levelNum : 0,
      totalProgress
    })
    if (newUnlocks?.length) {
      achievementNotification.value = newUnlocks[0]
      setTimeout(() => { achievementNotification.value = null }, 4000)
    }
  }
  activeLesson.value = null
}
</script>

<style scoped>
.italy-course-manager {
  min-height: 100vh;
}

/* ── 成就 Toast ── */
.it-achievement-toast {
  position: fixed; bottom: 24px; right: 24px; z-index: 9999;
  animation: it-slide-in 0.3s ease;
}
.it-toast-content {
  display: flex; align-items: center; gap: 12px;
  background: #1a2535; color: #fff;
  border-left: 4px solid #f59e0b;
  border-radius: 12px; padding: 14px 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  min-width: 260px;
}
.it-toast-emoji { font-size: 1.8rem; flex-shrink: 0; }
.it-toast-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.it-toast-info strong { font-size: 0.92rem; }
.it-toast-info span { font-size: 0.8rem; color: #f59e0b; }
.it-toast-close {
  background: none; border: none; color: rgba(255,255,255,0.5);
  font-size: 1.2rem; cursor: pointer; padding: 0 4px;
}
@keyframes it-slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);   opacity: 1; }
}

/* ── 成就 Modal ── */
.it-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  z-index: 9000; display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.it-modal {
  background: #fff; border-radius: 16px;
  width: 100%; max-width: 860px; max-height: 88vh;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  overflow: hidden;
}
.it-modal-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px; border-bottom: 1px solid #f0f0f0;
  background: #1a2535; color: #fff;
}
.it-modal-header h3 { margin: 0; font-size: 1.1rem; }
.it-modal-close {
  background: rgba(255,255,255,0.15); border: none; color: #fff;
  width: 32px; height: 32px; border-radius: 8px;
  font-size: 1.2rem; cursor: pointer;
}
.it-modal-body { flex: 1; overflow-y: auto; }
</style>
