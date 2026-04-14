<template>
  <div class="bordeaux-course-layout">
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

    <!-- 底部抽屜 Overlay & Drawer（手機，透過 Teleport 掛載到 body） -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="bx-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="bx-slide-up">
        <div v-if="drawerOpen" class="bx-chapter-drawer">
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
  currentLevel: { type: Number, required: true },       // 1 | 2 | 3 | 4
  currentLevelData: { type: Object, required: true },   // from learningLevels[`level${n}`]
  completedLessons: { type: Array, default: () => [] },
  unlockedLevels: { type: Array, default: () => [1] }   // e.g. [1, 2]
})

const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])

const drawerOpen = ref(false)

// 將 lessonIds 解析為完整 lesson 物件
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
   CSS Variables (Bordeaux Deep Red)
   =========================== */
.bordeaux-course-layout {
  --primary: #8B0000;
  --primary-dark: #5c0000;
  --primary-gradient: linear-gradient(135deg, #8B0000 0%, #5c0000 100%);
  --primary-light: #f8e8e8;
  --text-primary: #1a1a2e;
  --text-secondary: #6c757d;
  --bg-page: #f5f0f0;
  --shadow-sm: 0 2px 8px rgba(139, 0, 0, 0.08);
  --shadow-md: 0 6px 24px rgba(139, 0, 0, 0.14);
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
  box-shadow: 0 4px 16px rgba(139, 0, 0, 0.35);
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
.sidebar-item:hover { background: #fff0f0; }
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
  background: #fff0f0;
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
.module-section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  background: linear-gradient(135deg, #fefefe 0%, #fdf5f5 100%);
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
.module-count-chip { font-size: 0.75rem; color: var(--text-secondary); }

.lessons-grid { padding: 6px; display: flex; flex-direction: column; gap: 2px; }
.lesson-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s, transform 0.15s;
}
.lesson-card:hover { background: #fff0f0; transform: translateX(4px); }
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

/* Drawer transition */
.bx-slide-up-enter-active,
.bx-slide-up-leave-active { transition: transform 0.3s ease; }
.bx-slide-up-enter-from,
.bx-slide-up-leave-to { transform: translateY(100%); }

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
.bx-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 500;
}
.bx-chapter-drawer {
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
.bx-chapter-drawer .drawer-header {
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
.bx-chapter-drawer .drawer-close {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #6c757d;
  padding: 4px 8px;
}
.bx-chapter-drawer .drawer-body { padding: 8px 0; }
.bx-chapter-drawer .drawer-item {
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
.bx-chapter-drawer .drawer-item:hover { background: #fff0f0; }
.bx-chapter-drawer .drawer-status {
  font-size: 0.88rem;
  font-weight: 700;
  color: #8B0000;
  width: 22px;
  flex-shrink: 0;
}
.bx-chapter-drawer .drawer-item.done .drawer-status { color: #27ae60; }
.bx-chapter-drawer .drawer-item-info { flex: 1; }
.bx-chapter-drawer .drawer-chapter-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a2e;
}
.bx-chapter-drawer .drawer-progress {
  font-size: 0.75rem;
  color: #6c757d;
  margin-top: 2px;
}
</style>
