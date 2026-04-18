<template>
  <div class="germany-course-layout">
    <!-- 頂部導航欄 -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">←</button>
        <div class="logo">🇩🇪</div>
      </div>

      <div class="header-center">
        <div class="level-tabs">
          <button
            v-for="lv in levelKeys"
            :key="lv"
            class="level-tab"
            :class="{ active: props.currentLevelKey === lv }"
            @click="emit('changeLevel', lv)"
          >
            L{{ lv.replace('level', '') }}
          </button>
        </div>
      </div>

      <div class="header-right">
        <div class="progress-display">
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
        </div>
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ 章節</button>
      </div>
    </header>

    <!-- 主體佈局 -->
    <div class="layout-body">
      <!-- 左側章節導航 -->
      <aside class="chapter-sidebar">
        <div class="sidebar-title">章節總覽</div>
        <nav>
          <button
            v-for="module in modules"
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
            <div class="level-badge">{{ levelBadge }}</div>
            <h2 class="level-title">{{ props.currentLevelDef?.title }}</h2>
          </div>
          <p class="level-desc">{{ props.currentLevelDef?.subtitle }}</p>
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
            v-for="module in modules"
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
                <span class="module-count-chip">{{ moduleDoneCount(module) }}/{{ module.lessons.length }} 完成</span>
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
                <div class="lesson-title">{{ lesson.title }}</div>
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

    <!-- 手機抽屜 -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="slide-up">
        <div v-if="drawerOpen" class="chapter-drawer">
          <div class="drawer-header">
            <span>章節導航</span>
            <button class="drawer-close" @click="drawerOpen = false">×</button>
          </div>
          <div class="drawer-body">
            <button
              v-for="module in modules"
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
  currentLevelKey: { type: String, required: true },
  currentLevelDef: { type: Object, required: true },
  completedLessons: { type: Array, default: () => [] }
})
const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])

const drawerOpen = ref(false)
const levelKeys = ['level1', 'level2', 'level3']
const modules = computed(() => props.currentLevelDef?.modules || [])

const levelBadge = computed(() => `Level ${props.currentLevelKey?.replace('level', '') || '1'}`)
const completedCount = computed(() =>
  modules.value.flatMap(m => m.lessons).filter(l => props.completedLessons.includes(l.id)).length
)
const totalCount = computed(() => modules.value.reduce((s, m) => s + m.lessons.length, 0))
const overallProgress = computed(() =>
  totalCount.value > 0 ? Math.round(completedCount.value / totalCount.value * 100) : 0
)

function moduleDoneCount(m) { return m.lessons.filter(l => props.completedLessons.includes(l.id)).length }
function isModuleCompleted(m) { return m.lessons.length > 0 && m.lessons.every(l => props.completedLessons.includes(l.id)) }
function scrollToModule(id) { document.getElementById(`module-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
function scrollToModuleAndClose(id) { scrollToModule(id); drawerOpen.value = false }
</script>

<style scoped>
.germany-course-layout {
  --primary: #1565c0;
  --primary-dark: #0d47a1;
  --primary-gradient: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
  --primary-light: #e3f2fd;
  --bg-page: #f5f7fa;

  min-height: 100vh;
  background: var(--bg-page);
  font-family: 'Segoe UI', Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.course-header {
  background: var(--primary-gradient);
  padding: 12px 24px;
  display: flex; align-items: center; justify-content: space-between;
  color: white;
  box-shadow: 0 4px 16px rgba(21, 101, 192, 0.28);
  position: sticky; top: 0; z-index: 100; flex-shrink: 0;
}
.header-left { display: flex; align-items: center; gap: 12px; }
.back-btn {
  background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25);
  border-radius: 8px; color: white; font-size: 1.2rem;
  padding: 6px 12px; cursor: pointer; transition: background 0.2s;
}
.back-btn:hover { background: rgba(255,255,255,0.25); }
.logo { font-size: 1.5rem; }
.header-center { flex: 1; display: flex; justify-content: center; }
.level-tabs { display: flex; gap: 8px; background: rgba(0,0,0,0.15); border-radius: 20px; padding: 4px; }
.level-tab {
  background: transparent; border: none; color: rgba(255,255,255,0.7);
  padding: 4px 16px; border-radius: 16px; cursor: pointer; font-weight: 600;
  transition: all 0.2s;
}
.level-tab.active { background: white; color: var(--primary); }
.header-right { display: flex; align-items: center; gap: 12px; }
.progress-display { display: flex; align-items: center; gap: 6px; }
.progress-ring { display: block; }
.progress-pct { font-size: 0.85rem; font-weight: bold; color: white; }
.drawer-toggle {
  background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25);
  border-radius: 8px; color: white; padding: 6px 14px; cursor: pointer;
  display: none;
}

.layout-body { display: flex; flex: 1; overflow: hidden; }

.chapter-sidebar {
  width: 220px; flex-shrink: 0;
  background: white; border-right: 1px solid #e0e0e0;
  overflow-y: auto; padding: 1rem 0;
}
.sidebar-title { font-size: 0.75rem; font-weight: 700; color: #999; text-transform: uppercase; padding: 0 1rem 0.75rem; }
.sidebar-item {
  width: 100%; background: none; border: none; padding: 0.6rem 1rem;
  display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer;
  text-align: left; transition: background 0.15s;
}
.sidebar-item:hover { background: var(--primary-light); }
.sidebar-item.done .sidebar-icon { color: #4CAF50; }
.sidebar-icon { font-size: 0.8rem; color: #999; margin-top: 2px; flex-shrink: 0; }
.sidebar-name { font-size: 0.82rem; font-weight: 600; color: #2c3e50; }
.sidebar-dots { display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #ddd; transition: background 0.2s; }
.dot.filled { background: var(--primary); }

.main-area { flex: 1; overflow-y: auto; padding: 1.5rem; }

.level-header-card {
  background: white; border-radius: 16px; padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 1.5rem;
}
.level-header-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
.level-badge {
  background: var(--primary-gradient); color: white;
  padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 700;
}
.level-title { font-size: 1.3rem; font-weight: 700; color: #2c3e50; margin: 0; }
.level-desc { color: #666; margin: 0 0 1rem; }
.progress-bar-wrapper { background: #eee; border-radius: 4px; height: 8px; margin-bottom: 0.4rem; }
.progress-bar-fill { height: 100%; border-radius: 4px; background: var(--primary-gradient); transition: width 0.5s ease; }
.progress-label { font-size: 0.85rem; color: #666; margin: 0; }
.motivation-text { margin-top: 0.5rem; font-size: 0.85rem; color: var(--primary); font-weight: 600; }

.module-section { margin-bottom: 2rem; }
.module-section-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
.module-icon-badge {
  width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center;
  justify-content: center; font-size: 1.2rem;
  background: #f0f4ff; color: var(--primary);
}
.module-icon-badge.completed { background: #e8f5e9; color: #4CAF50; }
.module-section-title { font-size: 1.1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.module-count-chip {
  font-size: 0.75rem; background: var(--primary-light); color: var(--primary);
  padding: 2px 8px; border-radius: 10px; font-weight: 600;
}

.lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.75rem; }
.lesson-card {
  background: white; border-radius: 12px; padding: 1rem;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  display: flex; flex-direction: column; gap: 0.5rem;
  border: 2px solid transparent;
}
.lesson-card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(21,101,192,0.12); }
.lesson-card.completed { background: #f0f9f0; border-color: #4CAF50; }
.lesson-num {
  width: 28px; height: 28px; border-radius: 50%; background: var(--primary-light);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8rem; font-weight: 700; color: var(--primary); flex-shrink: 0;
}
.lesson-card.completed .lesson-num { background: #e8f5e9; color: #4CAF50; }
.lesson-title { font-size: 0.9rem; font-weight: 600; color: #2c3e50; flex: 1; }
.lesson-action { align-self: flex-end; }
.tag-done { font-size: 0.75rem; background: #e8f5e9; color: #2e7d32; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
.tag-start { font-size: 0.75rem; background: var(--primary-light); color: var(--primary); padding: 2px 8px; border-radius: 10px; font-weight: 600; }

/* Drawer */
.drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 200; }
.chapter-drawer {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: white; border-radius: 20px 20px 0 0;
  max-height: 70vh; overflow-y: auto; z-index: 201;
}
.drawer-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid #eee; font-weight: 700; }
.drawer-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #666; }
.drawer-body { padding: 0.5rem 0; }
.drawer-item { width: 100%; background: none; border: none; padding: 0.75rem 1.5rem; display: flex; align-items: center; gap: 0.75rem; cursor: pointer; text-align: left; }
.drawer-item:hover { background: #f5f5f5; }
.drawer-item.done .drawer-status { color: #4CAF50; }
.drawer-status { font-size: 1rem; color: #999; width: 20px; text-align: center; }
.drawer-chapter-name { font-size: 0.9rem; font-weight: 600; color: #2c3e50; }
.drawer-progress { font-size: 0.75rem; color: #999; }

.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }

@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: block; }
  .main-area { padding: 1rem; }
}
</style>
