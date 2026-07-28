<template>
  <div class="burg-course-layout">
    <!-- 頂部導航欄 -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">←</button>
        <div class="logo">🍷</div>
      </div>

      <div class="header-center">
        <div class="level-tabs">
          <button
            v-for="n in [1, 2, 3, 4]"
            :key="n"
            class="level-tab"
            :class="{ active: props.currentLevel.id === n }"
            @click="emit('changeLevel', n)"
          >
            L{{ n }}
          </button>
        </div>
      </div>

      <div class="header-right">
        <button class="progress-btn" :title="$t('bourgogne.layout.progressTitle')">
          <svg class="progress-ring" width="34" height="34" viewBox="0 0 34 34">
            <circle cx="17" cy="17" r="14" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
            <circle
              cx="17" cy="17" r="14" fill="none" stroke="white" stroke-width="3"
              :stroke-dasharray="`${overallProgress * 0.88} 88`"
              transform="rotate(-90 17 17)"
              stroke-linecap="round"
            />
          </svg>
          <span class="progress-pct">{{ overallProgress }}%</span>
        </button>
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">{{ $t('bourgogne.layout.chapterToggle') }}</button>
        <div class="hdr-avatar" :title="avatarInitial">
          <img v-if="avatarUrl" :src="avatarUrl" class="hdr-avatar-img" />
          <span v-else class="hdr-avatar-initial">{{ avatarInitial }}</span>
        </div>
      </div>
    </header>

    <!-- 主體佈局 -->
    <div class="layout-body">
      <!-- 左側章節導航（桌面） -->
      <aside class="chapter-sidebar">
        <div class="sidebar-title">{{ $t('bourgogne.layout.chapterOverview') }}</div>
        <nav>
          <template v-if="loadingModules">
            <div v-for="n in 6" :key="n" class="sidebar-skeleton"></div>
          </template>
          <button
            v-for="module in modules"
            v-else
            :key="module.id"
            class="sidebar-item"
            :class="{ done: module.completed }"
            @click="scrollToModule(module.id)"
          >
            <span class="sidebar-icon">{{ module.completed ? '✓' : '○' }}</span>
            <div class="sidebar-info">
                <div class="sidebar-name">{{ getModuleTitle(module) }}</div>
              <div class="sidebar-dots">
                <span
                  v-for="lesson in (moduleDataCache[module.id]?.lessons || [])"
                  :key="lesson.id"
                  class="dot"
                  :class="{ filled: isLessonCompleted(module.id, lesson.id) }"
                ></span>
                <span
                  v-if="!moduleDataCache[module.id]"
                  v-for="n in module.lessons"
                  :key="`ph-${n}`"
                  class="dot"
                ></span>
              </div>
            </div>
          </button>
        </nav>
      </aside>

      <!-- 主要內容 -->
      <div class="main-area">
        <!-- Level 標題卡 -->
        <div class="level-header-card">
          <div class="level-header-top">
            <div class="level-badge">Level {{ props.currentLevel.id }}</div>
            <h2 class="level-title">{{ $t(`bourgogne.levels.${props.currentLevel.id}.title`) }}</h2>
          </div>
          <p class="level-desc">{{ $t(`bourgogne.levels.${props.currentLevel.id}.description`) }}</p>
          <div class="progress-bar-wrapper">
            <div class="progress-bar-fill" :style="{ width: overallProgress + '%' }"></div>
          </div>
          <p class="progress-label">{{ $t('bourgogne.layout.completedLabel', { done: completedLessonsCount, total: totalLessonsCount }) }}</p>
          <div v-if="overallProgress > 0 && overallProgress < 100" class="motivation-text">
            {{ $t('bourgogne.layout.motivation', { n: totalLessonsCount - completedLessonsCount }) }}
          </div>
        </div>

        <!-- 載入中骨架屏 -->
        <template v-if="loadingModules">
          <div v-for="n in 4" :key="n" class="module-section skeleton-section">
            <div class="skeleton-header"></div>
            <div class="skeleton-lesson" v-for="m in 3" :key="m"></div>
          </div>
        </template>

        <!-- 章節課程列表 -->
        <div v-else class="course-sections">
          <div
            v-for="module in modules"
            :key="module.id"
            :id="`burgmodule-${module.id}`"
            class="module-section"
          >
            <div class="module-section-header">
              <div class="module-icon-badge" :class="{ completed: module.completed }">
                {{ module.completed ? '✓' : (module.icon || '📖') }}
              </div>
              <div class="module-section-info">
                <h3 class="module-section-title">{{ getModuleTitle(module) }}</h3>
                <span class="module-meta-chip">
                  {{ getModuleDuration(module) }} ·
                  {{ moduleDoneCount(module) }}/{{ moduleDataCache[module.id]?.lessons?.length ?? module.lessons }} {{ $t('bourgogne.layout.moduleDone') }}
                </span>
              </div>
            </div>

            <!-- 課程列表（未載入時顯示骨架） -->
            <div class="lessons-grid">
              <template v-if="!moduleDataCache[module.id]">
                <div v-for="n in module.lessons" :key="n" class="lesson-skeleton"></div>
              </template>
              <div
                v-else
                v-for="(lesson, idx) in moduleDataCache[module.id].lessons"
                :key="lesson.id"
                class="lesson-card"
                :class="{ completed: isLessonCompleted(module.id, lesson.id) }"
                @click="emit('startLesson', { module, lessonIndex: idx, moduleData: moduleDataCache[module.id] })"
              >
                <div class="lesson-num">
                  <span v-if="isLessonCompleted(module.id, lesson.id)">✓</span>
                  <span v-else>{{ idx + 1 }}</span>
                </div>
                <div class="lesson-meta">
                  <div class="lesson-title">{{ lesson.title }}</div>
                  <div v-if="lesson.duration" class="lesson-duration">{{ lesson.duration }}</div>
                </div>
                <div class="lesson-action">
                  <span v-if="isLessonCompleted(module.id, lesson.id)" class="tag-done">{{ $t('bourgogne.layout.tagDone') }}</span>
                  <span v-else class="tag-start">{{ $t('bourgogne.layout.tagStart') }}</span>
                </div>
              </div>
            </div>

            <!-- 全部課程完成後，顯示開始測驗按鈕 -->
            <div v-if="isModuleFullyDone(module)" class="module-quiz-cta">
              <button
                class="module-quiz-btn"
                @click="emit('startQuiz', { module, moduleData: moduleDataCache[module.id] })"
              >
                📝 開始測驗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部抽屜（手機，Teleport to body） -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="burg-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="burg-slide-up">
        <div v-if="drawerOpen" class="burg-chapter-drawer">
          <div class="drawer-header">
            <span>{{ $t('bourgogne.layout.chapterDrawer') }}</span>
            <button class="drawer-close" @click="drawerOpen = false">×</button>
          </div>
          <div class="drawer-body">
            <button
              v-for="module in modules"
              :key="module.id"
              class="drawer-item"
              :class="{ done: module.completed }"
              @click="scrollToModuleAndClose(module.id)"
            >
              <span class="drawer-status">{{ module.completed ? '✓' : '○' }}</span>
              <div class="drawer-item-info">
                <div class="drawer-chapter-name">{{ getModuleTitle(module) }}</div>
                <div class="drawer-progress">
                  {{ moduleDoneCount(module) }}/{{ moduleDataCache[module.id]?.lessons?.length ?? module.lessons }}
                </div>
              </div>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProgress } from '../composables/useProgress.js'
import { supabase } from '../../../lib/supabaseClient.js'
import { authState } from '../../../stores/authStore.js'
import { applyItalyTranslations } from '../../../data/lessonI18nUtils.js'

const BOURGOGNE_TRANSLATIONS = import.meta.glob('../../../locales/*/lessons/bourgogne/*.json')

const { locale, t } = useI18n()
const avatarUrl = ref('')
const avatarInitial = ref('我')

onMounted(async () => {
  const user = authState.user
  if (!user) return
  const fallback = user.user_metadata?.full_name || user.email?.split('@')[0] || '我'
  avatarInitial.value = [...fallback][0] || '我'
  if (supabase) {
    const { data } = await supabase.from('profiles').select('display_name,avatar_url').eq('id', user.id).single()
    if (data) {
      avatarUrl.value = data.avatar_url || ''
      if (data.display_name) avatarInitial.value = [...data.display_name][0] || avatarInitial.value
    }
  }
})

const props = defineProps({
  currentLevel: { type: Object, required: true }  // { id: 1, name: '基礎入門', description: '...' }
})
const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson', 'startQuiz'])

const progressStore = useProgress()
const drawerOpen = ref(false)
const loadingModules = ref(false)
const modules = ref([])               // basic module list from modules.json
const moduleDataCache = ref({})       // detailed lesson data per module

// Load modules list from API
const loadModules = async () => {
  loadingModules.value = true
  moduleDataCache.value = {}
  modules.value = []
  try {
    const res = await fetch(`/bourgogne/data/courses/level${props.currentLevel.id}/modules.json`)
    const data = await res.json()
    modules.value = data.modules || []
    // Apply progress flags
    modules.value.forEach(m => { m.locked = false }) // unlock all (test mode parity)
    // Load all module lesson data in parallel
    await Promise.all(modules.value.map(m => loadModuleData(m.id)))
  } catch (e) {
    console.error('載入布根地模組失敗:', e)
  } finally {
    loadingModules.value = false
  }
}

const loadModuleData = async (moduleId) => {
  try {
    const res = await fetch(`/bourgogne/data/courses/level${props.currentLevel.id}/${moduleId}.json`)
    if (!res.ok) return
    let data = await res.json()

    // 多語言翻譯覆蓋
    const currentLocale = locale.value
    if (currentLocale && currentLocale !== 'zh-TW') {
      const overlayKey = Object.keys(BOURGOGNE_TRANSLATIONS).find(k =>
        k.includes(`/${currentLocale}/`) && k.endsWith(`/${moduleId}.json`)
      )
      if (overlayKey) {
        try {
          const mod = await BOURGOGNE_TRANSLATIONS[overlayKey]()
          const flat = mod?.default || mod
          if (flat && typeof flat === 'object') {
            data = applyItalyTranslations(data, flat)
          }
        } catch (e) {
          console.warn('[Bourgogne i18n] overlay 載入失敗:', e.message)
        }
      }
    }

    moduleDataCache.value = { ...moduleDataCache.value, [moduleId]: data }
  } catch (e) {
    console.warn(`無法載入 ${moduleId}:`, e)
  }
}

onMounted(loadModules)
watch(() => props.currentLevel?.id, loadModules)
watch(locale, loadModules)

// Progress
const isLessonCompleted = (moduleId, lessonId) => {
  return progressStore.getCompletedLessons(moduleId).includes(lessonId)
}

const moduleDoneCount = (module) => {
  const lessons = moduleDataCache.value[module.id]?.lessons || []
  return lessons.filter(l => isLessonCompleted(module.id, l.id)).length
}

const isModuleFullyDone = (module) => {
  const total = moduleDataCache.value[module.id]?.lessons?.length ?? module.lessons ?? 0
  return total > 0 && moduleDoneCount(module) >= total
}

const completedLessonsCount = computed(() => {
  return modules.value.reduce((sum, m) => sum + moduleDoneCount(m), 0)
})

const totalLessonsCount = computed(() => {
  return modules.value.reduce((sum, m) => {
    return sum + (moduleDataCache.value[m.id]?.lessons?.length ?? m.lessons ?? 0)
  }, 0)
})

const overallProgress = computed(() => {
  if (!totalLessonsCount.value) return 0
  return Math.round(completedLessonsCount.value / totalLessonsCount.value * 100)
})

function scrollToModule (moduleId) {
  const el = document.getElementById(`burgmodule-${moduleId}`)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function scrollToModuleAndClose (moduleId) {
  scrollToModule(moduleId)
  drawerOpen.value = false
}

// Module title/duration i18n helpers (all levels)
const MODULE_LEVEL_MAP = {
  'beginner':    'L1',
  'intermediate':'L2',
  'advanced':    'L3',
  'master':      'L4',
}
function getModuleLevelKey(id) {
  const prefix = id.split('-m')[0]
  const lvl = MODULE_LEVEL_MAP[prefix] ?? 'L4'
  const num = id.replace(/^.*-m/, 'm')
  return { ns: `bourgogne.modules${lvl}`, num }
}
function getModuleTitle(module) {
  const { ns, num } = getModuleLevelKey(module.id)
  const i18nKey = `${ns}.${num}.title`
  const translated = t(i18nKey)
  return translated !== i18nKey ? translated : module.title
}
function getModuleDuration(module) {
  const { ns, num } = getModuleLevelKey(module.id)
  const i18nKey = `${ns}.${num}.duration`
  const translated = t(i18nKey)
  return translated !== i18nKey ? translated : module.duration
}
</script>

<style scoped>
/* ===========================
   CSS Variables (Bourgogne Deep Green)
   =========================== */
.burg-course-layout {
  --primary: #1a6b3a;
  --primary-dark: #0f4525;
  --primary-gradient: linear-gradient(135deg, #1a6b3a 0%, #0f4525 100%);
  --primary-light: #e8f5ee;
  --text-primary: #1a1a2e;
  --text-secondary: #6c757d;
  --bg-page: #f3f7f4;
  --shadow-sm: 0 2px 8px rgba(26, 107, 58, 0.08);
  --shadow-md: 0 6px 24px rgba(26, 107, 58, 0.14);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  min-height: 100vh;
  background: var(--bg-page);
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ===========================
   Header
   =========================== */
.course-header {
  background: var(--primary-gradient);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 4px 16px rgba(26, 107, 58, 0.35);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-shrink: 0;
}

.header-left { display: flex; align-items: center; gap: 12px; }
.back-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-sm);
  color: white;
  padding: 8px 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.back-btn:hover { background: rgba(255, 255, 255, 0.28); }
.logo { font-size: 26px; }
.header-center { flex: 1; display: flex; justify-content: center; }
.level-tabs {
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.12);
  padding: 4px;
  border-radius: var(--radius-md);
}
.level-tab {
  padding: 7px 18px;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: rgba(255, 255, 255, 0.72);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.2s;
  min-width: 44px;
}
.level-tab:hover { color: white; background: rgba(255, 255, 255, 0.14); }
.level-tab.active { background: white; color: var(--primary); }
.header-right { display: flex; align-items: center; gap: 10px; }
.hdr-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.5);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; cursor: default; flex-shrink: 0;
}
.hdr-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; background: transparent; }
.hdr-avatar-initial { font-size: 0.9rem; font-weight: 700; color: white; line-height: 1; }
.progress-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
}
.progress-ring { display: block; }
.drawer-toggle {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--radius-sm);
  color: white;
  padding: 8px 12px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: none;
}

/* ===========================
   Layout Body
   =========================== */
.layout-body {
  display: flex;
  flex: 1;
  min-height: 0;
}

/* ===========================
   Left Sidebar (Desktop)
   =========================== */
.chapter-sidebar {
  width: 256px;
  flex-shrink: 0;
  background: white;
  border-right: 2px solid var(--primary-light);
  overflow-y: auto;
  position: sticky;
  top: 57px;
  height: calc(100vh - 57px);
}
.sidebar-title {
  padding: 18px 18px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--primary-light);
}
.sidebar-skeleton {
  height: 52px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  margin: 2px 12px;
  border-radius: 8px;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.sidebar-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 13px 18px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: 1px solid #f5f5f5;
  background: transparent;
  transition: background 0.15s;
  font-family: inherit;
}
.sidebar-item:hover { background: #f0faf4; }
.sidebar-icon {
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 700;
  margin-top: 2px;
  flex-shrink: 0;
  width: 18px;
}
.sidebar-item.done .sidebar-icon { color: #27ae60; }
.sidebar-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 5px;
}
.sidebar-dots { display: flex; gap: 3px; flex-wrap: wrap; }
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e9ecef;
  transition: background 0.2s;
}
.dot.filled { background: var(--primary); }

/* ===========================
   Main Area
   =========================== */
.main-area {
  flex: 1;
  min-width: 0;
  padding: 24px 28px;
  overflow-y: auto;
}

/* Level header card */
.level-header-card {
  background: white;
  border: 2px solid var(--primary-light);
  border-radius: var(--radius-lg);
  padding: 22px 26px;
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}
.level-header-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.level-badge {
  background: var(--primary-gradient);
  color: white;
  padding: 5px 14px;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
}
.level-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}
.level-desc {
  color: var(--text-secondary);
  margin: 0 0 14px;
  font-size: 0.9rem;
  line-height: 1.6;
}
.progress-bar-wrapper {
  width: 100%;
  height: 8px;
  background: #f0f0f0;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: 6px;
}
.progress-bar-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: var(--radius-full);
  transition: width 0.6s ease;
}
.progress-label { color: var(--text-secondary); font-size: 0.82rem; margin: 0; }
.motivation-text {
  margin-top: 12px;
  padding: 10px 14px;
  background: #f0faf4;
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-sm);
  font-size: 0.83rem;
  font-weight: 600;
  color: var(--primary);
}

/* Module sections */
.course-sections { display: flex; flex-direction: column; gap: 20px; }
.module-section {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1.5px solid #f0f0f0;
  scroll-margin-top: 76px;
}

/* Skeleton for section loading */
.skeleton-section {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1.5px solid #f0f0f0;
  padding: 16px;
  margin-bottom: 4px;
}
.skeleton-header {
  height: 52px;
  background: linear-gradient(90deg, #f5f5f5 25%, #efefef 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 12px;
}
.skeleton-lesson {
  height: 44px;
  background: linear-gradient(90deg, #f8f8f8 25%, #f2f2f2 50%, #f8f8f8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;
  margin-bottom: 6px;
}

.module-section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  background: linear-gradient(135deg, #fefefe 0%, #f4faf6 100%);
  border-bottom: 2px solid var(--primary-light);
}
.module-icon-badge {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.module-icon-badge.completed { background: #d4edda; }
.module-section-info { flex: 1; }
.module-section-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 2px;
}
.module-meta-chip { font-size: 0.75rem; color: var(--text-secondary); }

/* Lesson cards */
.lessons-grid { padding: 6px; display: flex; flex-direction: column; gap: 2px; }
.lesson-skeleton {
  height: 44px;
  background: linear-gradient(90deg, #f9f9f9 25%, #f3f3f3 50%, #f9f9f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
  margin: 2px 6px;
}
.lesson-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.lesson-card:hover { background: #f0faf4; transform: translateX(4px); }
.lesson-card.completed { opacity: 0.65; }
.lesson-card.completed:hover { background: #f0fdf4; opacity: 1; }
.lesson-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--primary);
}
.lesson-card.completed .lesson-num { background: #d4edda; color: #27ae60; }
.lesson-meta { flex: 1; min-width: 0; }
.lesson-title {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lesson-duration { font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px; }
.tag-done, .tag-start {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: var(--radius-full);
  white-space: nowrap;
}
.tag-done { color: #27ae60; background: #d4edda; }
.tag-start { color: var(--primary); background: var(--primary-light); }

/* Module quiz CTA */
.module-quiz-cta {
  padding: 6px 14px 16px;
}
.module-quiz-btn {
  width: 100%;
  padding: 12px;
  background: var(--primary-gradient);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.module-quiz-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

/* Drawer transition */
.burg-slide-up-enter-active,
.burg-slide-up-leave-active { transition: transform 0.3s ease; }
.burg-slide-up-enter-from,
.burg-slide-up-leave-to { transform: translateY(100%); }

/* ===========================
   Responsive
   =========================== */
@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: flex; align-items: center; gap: 4px; }
  .main-area { padding: 14px; }
  .level-header-card { padding: 16px; }
  .module-section-header { padding: 13px 16px; }
  .course-header { padding: 10px 14px; }
  .level-tab { padding: 6px 12px; font-size: 0.8rem; }
}
@media (max-width: 480px) {
  .level-title { font-size: 1.05rem; }
  .logo { display: none; }
  .level-tabs { gap: 2px; }
  .level-tab { padding: 6px 9px; min-width: 36px; }
}
</style>

<!-- Global styles for Teleport'd drawer elements -->
<style>
.burg-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 500;
}
.burg-chapter-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);
  z-index: 501;
  max-height: 70vh;
  overflow-y: auto;
}
.burg-chapter-drawer .drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 1rem;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: white;
}
.burg-chapter-drawer .drawer-close {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #6c757d;
  padding: 4px 8px;
}
.burg-chapter-drawer .drawer-body { padding: 8px 0; }
.burg-chapter-drawer .drawer-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 20px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #f5f5f5;
  background: transparent;
  width: 100%;
  text-align: left;
  transition: background 0.15s;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}
.burg-chapter-drawer .drawer-item:hover { background: #f0faf4; }
.burg-chapter-drawer .drawer-status {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a6b3a;
  width: 22px;
  flex-shrink: 0;
}
.burg-chapter-drawer .drawer-item.done .drawer-status { color: #27ae60; }
.burg-chapter-drawer .drawer-item-info { flex: 1; }
.burg-chapter-drawer .drawer-chapter-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a2e;
}
.burg-chapter-drawer .drawer-progress {
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 2px;
}
</style>
