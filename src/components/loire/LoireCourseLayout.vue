<template>
  <div class="loire-course-layout">
    <!-- 頂部導航欄 -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">← 返回</button>
        <div class="logo">🌊</div>
      </div>

      <div class="header-center">
        <div class="level-tabs">
          <button
            v-for="n in [1, 2]"
            :key="n"
            class="level-tab"
            :class="{ active: props.currentLevel === n, locked: !props.unlockedLevels.includes(n) }"
            :disabled="!props.unlockedLevels.includes(n)"
            :title="!props.unlockedLevels.includes(n) ? `需完成 Level ${n - 1} 綜合評量才能解鎖` : `Level ${n}`"
            @click="props.unlockedLevels.includes(n) && emit('changeLevel', n)"
          >
            <span v-if="!props.unlockedLevels.includes(n)" class="tab-lock">🔒</span>L{{ n }}
          </button>
        </div>
      </div>

      <div class="header-right">
        <button class="progress-btn" title="整體進度">
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
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ 章節</button>
      </div>
    </header>

    <!-- 主體佈局 -->
    <div class="layout-body">
      <!-- 左側章節導航（桌面） -->
      <aside class="chapter-sidebar">
        <div class="sidebar-title">章節總覽</div>
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
          <p class="progress-label">{{ completedCount }}/{{ totalCount }} 課程完成</p>
          <div v-if="overallProgress > 0 && overallProgress < 100" class="motivation-text">
            🎯 再完成 {{ totalCount - completedCount }} 課即可完成此階段！
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
                <span class="module-count-chip">
                  {{ moduleDoneCount(module) }}/{{ module.lessons.length }} 完成
                </span>
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
                  <div v-if="lesson.duration" class="lesson-duration">{{ lesson.duration }} 分鐘</div>
                </div>
                <div class="lesson-action">
                  <span v-if="completedLessons.includes(lesson.id)" class="tag-done">完成</span>
                  <span v-else class="tag-start">開始 ▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部抽屜（手機） -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="lo-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="lo-slide-up">
        <div v-if="drawerOpen" class="lo-chapter-drawer">
          <div class="drawer-header">
            <span>章節導航</span>
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
  if (!props.currentLevelData?.modules) return []
  const lessonsMap = Object.fromEntries(
    (props.currentLevelData.lessons || []).map(l => [l.id, l])
  )
  return props.currentLevelData.modules.map(module => ({
    ...module,
    lessons: (module.lessonIds || []).map(id => lessonsMap[id]).filter(Boolean)
  }))
})

const completedCount = computed(() =>
  resolvedModules.value.flatMap(m => m.lessons).filter(l => props.completedLessons.includes(l.id)).length
)
const totalCount = computed(() =>
  resolvedModules.value.reduce((s, m) => s + m.lessons.length, 0)
)
const overallProgress = computed(() =>
  totalCount.value > 0 ? Math.round(completedCount.value / totalCount.value * 100) : 0
)

function moduleDoneCount (module) {
  return module.lessons.filter(l => props.completedLessons.includes(l.id)).length
}
function isModuleCompleted (module) {
  return module.lessons.length > 0 && module.lessons.every(l => props.completedLessons.includes(l.id))
}
function scrollToModule (moduleId) {
  const el = document.getElementById(`module-${moduleId}`)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function scrollToModuleAndClose (moduleId) {
  scrollToModule(moduleId)
  drawerOpen.value = false
}
</script>

<style scoped>
/* ===========================
   CSS Variables (Loire Green + Gold)
   =========================== */
.loire-course-layout {
  --primary: #2e5c3e;
  --primary-dark: #1d3d28;
  --primary-gradient: linear-gradient(135deg, #2e5c3e 0%, #1d3d28 100%);
  --primary-light: #eaf4ef;
  --secondary: #c9a84c;
  --text-primary: #1a2e1f;
  --text-secondary: #6c757d;
  --bg-page: #f5faf6;
  --shadow-sm: 0 2px 8px rgba(46, 92, 62, 0.08);
  --shadow-md: 0 6px 24px rgba(46, 92, 62, 0.14);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  height: 100vh;
  overflow: hidden;
  background: var(--bg-page);
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Header */
.course-header {
  background: var(--primary-gradient);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 4px 16px rgba(46, 92, 62, 0.35);
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
  font-size: 0.9rem;
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
  padding: 7px 20px;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: rgba(255, 255, 255, 0.72);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.2s;
  min-width: 52px;
}
.level-tab:hover:not(.locked) { color: white; background: rgba(255, 255, 255, 0.14); }
.level-tab.active { background: white; color: var(--primary); }
.level-tab.locked { opacity: 0.4; cursor: not-allowed; }
.tab-lock { font-size: 0.65rem; margin-right: 2px; vertical-align: middle; }
.header-right { display: flex; align-items: center; gap: 10px; }
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
.progress-pct { font-weight: 700; }
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

/* Layout Body */
.layout-body {
  display: flex;
  flex: 1;
  min-height: 0;
}

/* Sidebar */
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
}
.sidebar-item:hover { background: var(--primary-light); }
.sidebar-item.done .sidebar-icon { color: var(--secondary); font-weight: 700; }
.sidebar-icon { font-size: 1rem; color: var(--text-secondary); margin-top: 2px; }
.sidebar-info { flex: 1; min-width: 0; }
.sidebar-name { font-size: 0.82rem; font-weight: 600; color: var(--text-primary); margin-bottom: 5px; }
.sidebar-dots { display: flex; gap: 4px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #ddd; transition: background 0.2s; }
.dot.filled { background: var(--primary); }

/* Main Area */
.main-area { flex: 1; overflow-y: auto; padding: 24px 28px; }

/* Level Header Card */
.level-header-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
  border-left: 5px solid var(--primary);
}
.level-header-top { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
.level-badge {
  background: var(--primary-gradient);
  color: white;
  padding: 4px 14px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.level-title { font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin: 0; }
.level-desc { color: var(--text-secondary); font-size: 0.9rem; margin: 0 0 14px; }
.progress-bar-wrapper {
  height: 8px;
  background: #eee;
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: 8px;
}
.progress-bar-fill {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}
.progress-label { font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 4px; }
.motivation-text { font-size: 0.83rem; color: var(--primary); font-weight: 600; }

/* Module Section */
.module-section {
  background: white;
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.module-section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-bottom: 1px solid #f0f0f0;
  background: linear-gradient(135deg, #fff 0%, var(--primary-light) 100%);
}
.module-icon-badge {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--primary-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.module-icon-badge.completed { background: linear-gradient(135deg, var(--secondary) 0%, #9b7c2e 100%); }
.module-section-info { flex: 1; }
.module-section-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0 0 4px; }
.module-count-chip {
  background: var(--primary-light);
  color: var(--primary);
  padding: 2px 10px;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 700;
}

/* Lessons Grid */
.lessons-grid { padding: 16px 20px; display: flex; flex-direction: column; gap: 10px; }
.lesson-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border: 1.5px solid #eee;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.2s;
  background: #fafafa;
}
.lesson-card:hover { border-color: var(--primary); background: var(--primary-light); transform: translateX(3px); }
.lesson-card.completed { background: #f5faf0; border-color: var(--secondary); }
.lesson-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 800;
  flex-shrink: 0;
}
.lesson-card.completed .lesson-num { background: linear-gradient(135deg, var(--secondary) 0%, #9b7c2e 100%); }
.lesson-meta { flex: 1; min-width: 0; }
.lesson-title { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); margin-bottom: 3px; }
.lesson-duration { font-size: 0.75rem; color: var(--text-secondary); }
.lesson-action { flex-shrink: 0; }
.tag-start {
  background: var(--primary-gradient);
  color: white;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}
.tag-done {
  background: linear-gradient(135deg, var(--secondary) 0%, #9b7c2e 100%);
  color: white;
  padding: 5px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
}

/* Drawer */
.lo-drawer-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 200;
}
.lo-chapter-drawer {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: white; border-radius: 16px 16px 0 0;
  z-index: 201; max-height: 70vh; display: flex; flex-direction: column;
  box-shadow: 0 -8px 32px rgba(0,0,0,0.2);
}
.drawer-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 20px; border-bottom: 1px solid #eee;
  font-weight: 700; font-size: 1rem;
}
.drawer-close {
  background: none; border: none; font-size: 1.4rem; cursor: pointer; color: #888;
}
.drawer-body { overflow-y: auto; padding: 8px 0; }
.drawer-item {
  display: flex; gap: 12px; align-items: center;
  padding: 14px 20px; width: 100%; text-align: left;
  border: none; background: transparent; cursor: pointer;
}
.drawer-item:hover { background: var(--primary-light); }
.drawer-status { font-size: 1rem; color: var(--text-secondary); width: 20px; text-align: center; }
.drawer-item.done .drawer-status { color: var(--secondary); font-weight: 700; }
.drawer-item-info { flex: 1; }
.drawer-chapter-name { font-size: 0.9rem; font-weight: 600; color: var(--text-primary); }
.drawer-progress { font-size: 0.75rem; color: var(--text-secondary); }

/* Transitions */
.lo-slide-up-enter-active, .lo-slide-up-leave-active { transition: transform 0.3s ease; }
.lo-slide-up-enter-from, .lo-slide-up-leave-to { transform: translateY(100%); }

/* Responsive */
@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: block; }
  .main-area { padding: 16px; }
  .level-tabs { display: none; }
  .course-header { padding: 10px 16px; }
}
</style>
