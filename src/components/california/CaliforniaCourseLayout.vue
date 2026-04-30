<template>
  <div class="california-course-layout">
    <!-- 頂部導航欄 -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">← {{ $t('common.actions.back') }}</button>
        <div class="logo">🌟</div>
      </div>
      <div class="header-center">
        <div class="level-tabs">
          <button
            v-for="n in [1, 2, 3]"
            :key="n"
            class="level-tab"
            :class="{ active: props.currentLevel === n, locked: !props.unlockedLevels.includes(n) }"
            :disabled="!props.unlockedLevels.includes(n)"
            :title="!props.unlockedLevels.includes(n) ? $t('california.layout.levelLockedTooltip', { n: n - 1 }) : $t('california.layout.levelTooltip', { n })"
            @click="props.unlockedLevels.includes(n) && emit('changeLevel', n)"
          >
            <span v-if="!props.unlockedLevels.includes(n)" class="tab-lock">🔒</span>L{{ n }}
          </button>
        </div>
      </div>
      <div class="header-right">
        <button class="progress-btn" :title="$t('california.layout.progressTitle')">
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
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">{{ $t('california.layout.chapterToggle') }}</button>
      </div>
    </header>

    <!-- 主體佈局 -->
    <div class="layout-body">
      <!-- 左側章節導航（桌面） -->
      <aside class="chapter-sidebar">
        <div class="sidebar-title">{{ $t('california.layout.chapterOverview') }}</div>
        <nav>
          <button
            v-for="module in resolvedModules"
            :key="module.id"
            class="sidebar-item"
            :class="{ done: isModuleCompleted(module) }"
            @click="scrollToModule(module.id)"
          >
            <span class="sidebar-icon">{{ isModuleCompleted(module) ? '✓' : '○' }}</span>
            <div class="sidebar-info">
              <div class="sidebar-name">{{ module.title }}</div>
              <div class="sidebar-dots">
                <span
                  v-for="lesson in module.lessons"
                  :key="lesson.id"
                  class="dot"
                  :class="{ filled: completedLessons.includes(lesson.id) }"
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
            <div class="level-badge">Level {{ props.currentLevel }}</div>
            <h2 class="level-title">{{ props.currentLevelData?.title }}</h2>
          </div>
          <p class="level-desc">{{ props.currentLevelData?.description }}</p>
          <div class="progress-bar-wrapper">
            <div class="progress-bar-fill" :style="{ width: overallProgress + '%' }"></div>
          </div>
          <p class="progress-label">{{ $t('california.layout.completedLabel', { done: completedCount, total: totalCount }) }}</p>
          <div v-if="overallProgress > 0 && overallProgress < 100" class="motivation-text">
            {{ $t('california.layout.motivation', { n: totalCount - completedCount }) }}
          </div>
        </div>

        <!-- 章節課程列表 -->
        <div class="course-sections">
          <div
            v-for="module in resolvedModules"
            :key="module.id"
            :id="`module-${module.id}`"
            class="module-section"
          >
            <div class="module-section-header">
              <div class="module-icon-badge" :class="{ completed: isModuleCompleted(module) }">
                {{ isModuleCompleted(module) ? '✓' : '📖' }}
              </div>
              <div class="module-section-info">
                <h3 class="module-section-title">{{ module.title }}</h3>
                <span class="module-count-chip">{{ $t('california.layout.moduleCount', { done: moduleDoneCount(module), total: module.lessons.length }) }}</span>
              </div>
            </div>
            <div class="lessons-grid">
              <div
                v-for="(lesson, idx) in module.lessons"
                :key="lesson.id"
                class="lesson-card"
                :class="{ completed: completedLessons.includes(lesson.id) }"
                @click="emit('startLesson', lesson)"
              >
                <div class="lesson-num">
                  <span v-if="completedLessons.includes(lesson.id)">✓</span>
                  <span v-else>{{ idx + 1 }}</span>
                </div>
                <div class="lesson-meta">
                  <div class="lesson-title">{{ lesson.title }}</div>
                  <div v-if="lesson.duration" class="lesson-duration">{{ $t('california.layout.minutes', { n: lesson.duration }) }}</div>
                </div>
                <div class="lesson-action">
                  <span v-if="completedLessons.includes(lesson.id)" class="tag-done">{{ $t('california.layout.tagDone') }}</span>
                  <span v-else class="tag-start">{{ $t('california.layout.tagStart') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部抽屜（手機） -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="ca-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="ca-slide-up">
        <div v-if="drawerOpen" class="ca-chapter-drawer">
          <div class="drawer-header">
            <span>{{ $t('california.layout.chapterDrawer') }}</span>
            <button class="drawer-close" @click="drawerOpen = false">×</button>
          </div>
          <div class="drawer-body">
            <button
              v-for="module in resolvedModules"
              :key="module.id"
              class="drawer-item"
              :class="{ done: isModuleCompleted(module) }"
              @click="scrollToModuleAndClose(module.id)"
            >
              <span class="drawer-status">{{ isModuleCompleted(module) ? '✓' : '○' }}</span>
              <div class="drawer-item-info">
                <div class="drawer-chapter-name">{{ module.title }}</div>
                <div class="drawer-progress">{{ moduleDoneCount(module) }}/{{ module.lessons.length }}</div>
              </div>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  currentLevel: { type: Number, required: true },
  currentLevelData: { type: Object, required: true },
  completedLessons: { type: Array, default: () => [] },
  unlockedLevels: { type: Array, default: () => [1] }
})

const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])

const drawerOpen = ref(false)

const resolvedModules = computed(() => {
  const modules = props.currentLevelData?.modules || []
  const lessons = props.currentLevelData?.lessons || []
  return modules.map(m => ({
    ...m,
    lessons: m.lessonIds.map(id => lessons.find(l => l.id === id)).filter(Boolean)
  }))
})

const completedCount = computed(() => {
  const lessons = props.currentLevelData?.lessons || []
  return lessons.filter(l => props.completedLessons.includes(l.id)).length
})

const totalCount = computed(() => props.currentLevelData?.lessons?.length || 0)

const overallProgress = computed(() => {
  if (!totalCount.value) return 0
  return Math.round(completedCount.value / totalCount.value * 100)
})

function isModuleCompleted(module) {
  return module.lessons.every(l => props.completedLessons.includes(l.id))
}

function moduleDoneCount(module) {
  return module.lessons.filter(l => props.completedLessons.includes(l.id)).length
}

function scrollToModule(id) {
  document.getElementById(`module-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToModuleAndClose(id) {
  scrollToModule(id)
  drawerOpen.value = false
}
</script>

<style scoped>
.california-course-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a0800;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}

/* 頂部導航欄 */
.course-header {
  background: linear-gradient(135deg, #8B1A1A 0%, #5c0f0f 100%);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(201,168,76,0.3);
}
.header-left { display: flex; align-items: center; gap: 12px; }
.back-btn { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; padding: 6px 14px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: background 0.2s; }
.back-btn:hover { background: rgba(255,255,255,0.25); }
.logo { font-size: 1.5rem; }

.level-tabs { display: flex; gap: 6px; }
.level-tab { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 5px 14px; border-radius: 8px; cursor: pointer; font-size: 0.82rem; font-weight: 600; transition: all 0.2s; }
.level-tab.active { background: rgba(201,168,76,0.35); border-color: #c9a84c; }
.level-tab.locked { opacity: 0.5; cursor: not-allowed; }
.tab-lock { margin-right: 4px; }

.header-right { display: flex; align-items: center; gap: 10px; }
.progress-btn { background: none; border: none; color: white; cursor: pointer; display: flex; align-items: center; gap: 4px; padding: 4px; }
.progress-pct { font-size: 0.75rem; font-weight: 700; }
.drawer-toggle { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 5px 12px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; display: none; }

/* 主體佈局 */
.layout-body { flex: 1; display: flex; overflow: hidden; }

/* 側邊欄 */
.chapter-sidebar {
  width: 220px;
  background: rgba(255,255,255,0.04);
  border-right: 1px solid rgba(201,168,76,0.15);
  padding: 16px 0;
  overflow-y: auto;
  flex-shrink: 0;
}
.sidebar-title { padding: 0 16px 10px; font-size: 0.75rem; font-weight: 700; color: rgba(201,168,76,0.8); text-transform: uppercase; letter-spacing: 0.05em; }
.sidebar-item { width: 100%; display: flex; align-items: center; gap: 10px; padding: 10px 16px; background: none; border: none; cursor: pointer; text-align: left; transition: background 0.2s; }
.sidebar-item:hover { background: rgba(201,168,76,0.1); }
.sidebar-item.done .sidebar-icon { color: #c9a84c; }
.sidebar-icon { font-size: 0.85rem; color: rgba(255,255,255,0.4); flex-shrink: 0; }
.sidebar-name { font-size: 0.8rem; color: rgba(255,255,255,0.8); line-height: 1.3; margin-bottom: 4px; }
.sidebar-dots { display: flex; gap: 3px; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.2); }
.dot.filled { background: #c9a84c; }

/* 主內容 */
.main-area { flex: 1; overflow-y: auto; padding: 24px; }

.level-header-card {
  background: linear-gradient(135deg, rgba(139,26,26,0.4) 0%, rgba(92,15,15,0.3) 100%);
  border: 1px solid rgba(201,168,76,0.3);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
}
.level-header-top { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.level-badge { background: rgba(201,168,76,0.2); border: 1px solid rgba(201,168,76,0.5); color: #c9a84c; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; }
.level-title { color: #f9e9c4; font-size: 1.15rem; margin: 0; }
.level-desc { color: rgba(249,233,196,0.7); font-size: 0.85rem; margin: 0 0 14px; line-height: 1.6; }
.progress-bar-wrapper { height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, #8B1A1A, #c9a84c); border-radius: 4px; transition: width 0.5s; }
.progress-label { color: rgba(249,233,196,0.65); font-size: 0.8rem; margin: 0 0 6px; }
.motivation-text { color: #c9a84c; font-size: 0.82rem; font-weight: 600; }

/* 課程章節 */
.module-section { margin-bottom: 28px; }
.module-section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
.module-icon-badge { width: 36px; height: 36px; background: rgba(139,26,26,0.4); border: 2px solid rgba(201,168,76,0.4); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.module-icon-badge.completed { background: rgba(201,168,76,0.2); border-color: #c9a84c; }
.module-section-title { color: #f9e9c4; font-size: 1rem; margin: 0; }
.module-count-chip { background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3); color: #c9a84c; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; }

.lessons-grid { display: flex; flex-direction: column; gap: 8px; }
.lesson-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 14px 16px;
  display: flex; align-items: center; gap: 14px;
  cursor: pointer; transition: all 0.2s;
}
.lesson-card:hover { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.3); transform: translateX(4px); }
.lesson-card.completed { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.25); }
.lesson-num { width: 32px; height: 32px; background: rgba(139,26,26,0.4); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: #c9a84c; font-weight: 700; flex-shrink: 0; }
.lesson-card.completed .lesson-num { background: rgba(201,168,76,0.2); }
.lesson-meta { flex: 1; }
.lesson-title { color: rgba(249,233,196,0.9); font-size: 0.88rem; font-weight: 500; margin-bottom: 2px; }
.lesson-duration { color: rgba(249,233,196,0.5); font-size: 0.75rem; }
.tag-done { background: rgba(201,168,76,0.2); color: #c9a84c; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
.tag-start { background: rgba(139,26,26,0.4); color: rgba(249,233,196,0.85); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; border: 1px solid rgba(201,168,76,0.25); }

/* 底部抽屜 */
.ca-drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 200; }
.ca-chapter-drawer {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 201;
  background: #1a0800; border-top: 1px solid rgba(201,168,76,0.3);
  border-radius: 16px 16px 0 0; padding-bottom: env(safe-area-inset-bottom);
  max-height: 70vh; overflow-y: auto;
}
.drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; border-bottom: 1px solid rgba(201,168,76,0.15); color: #f9e9c4; font-weight: 600; }
.drawer-close { background: none; border: none; color: rgba(249,233,196,0.7); font-size: 1.2rem; cursor: pointer; }
.drawer-item { width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px 20px; background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; }
.drawer-item.done { background: rgba(201,168,76,0.05); }
.drawer-status { color: rgba(249,233,196,0.5); font-size: 0.9rem; flex-shrink: 0; }
.drawer-item.done .drawer-status { color: #c9a84c; }
.drawer-chapter-name { color: rgba(249,233,196,0.85); font-size: 0.85rem; }
.drawer-progress { color: rgba(249,233,196,0.5); font-size: 0.75rem; }

.ca-slide-up-enter-active, .ca-slide-up-leave-active { transition: transform 0.3s ease; }
.ca-slide-up-enter-from, .ca-slide-up-leave-to { transform: translateY(100%); }

@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: block; }
  .main-area { padding: 16px; }
}
</style>
