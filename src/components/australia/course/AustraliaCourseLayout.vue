<template>
  <div class="au-course-layout">
    <!-- Header -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">← {{ $t('common.actions.back') }}</button>
        <div class="logo">🦘</div>
      </div>
      <div class="header-center">
        <div class="level-tabs">
          <button
            v-for="lv in levelKeys"
            :key="lv"
            class="level-tab"
            :class="{ active: props.currentLevelKey === lv }"
            @click="emit('changeLevel', lv)"
          >L{{ lv.replace('level', '') }}</button>
        </div>
      </div>
      <div class="header-right">
        <div class="progress-chip">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
            <circle cx="16" cy="16" r="13" fill="none" stroke="#c8a951" stroke-width="3"
              :stroke-dasharray="`${overallProgress * 0.817} 82`"
              transform="rotate(-90 16 16)" stroke-linecap="round"/>
          </svg>
          <span class="progress-pct">{{ overallProgress }}%</span>
        </div>
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ 章節</button>
      </div>
    </header>

    <!-- Body -->
    <div class="layout-body">
      <!-- 側欄 -->
      <aside class="chapter-sidebar">
        <div class="sidebar-title">章節總覽</div>
        <nav>
          <button
            v-for="module in modules" :key="module.id"
            class="sidebar-item"
            :class="{ done: isModuleCompleted(module) }"
            @click="scrollToModule(module.id)"
          >
            <span class="sidebar-icon">{{ isModuleCompleted(module) ? '✓' : '○' }}</span>
            <div class="sidebar-info">
              <div class="sidebar-name">{{ module.title }}</div>
              <div class="sidebar-dots">
                <span v-for="l in module.lessons" :key="l.id" class="dot"
                  :class="{ filled: completedLessons.includes(l.id) }"></span>
              </div>
            </div>
          </button>
        </nav>
      </aside>

      <!-- 主區 -->
      <div class="main-area">
        <!-- Level header card -->
        <div class="level-header-card" :style="{ background: levelDef?.gradient || 'linear-gradient(135deg,#00274e,#c8a951)' }">
          <div class="lhc-top">
            <div class="level-badge">Level {{ currentLevelKey?.replace('level', '') }}</div>
            <span class="difficulty-chip">{{ levelDef?.difficulty || '' }}</span>
          </div>
          <h2 class="lhc-title">{{ levelDef?.title }}</h2>
          <p class="lhc-sub">{{ levelDef?.subtitle }}</p>
          <div class="lhc-progress-bar">
            <div class="lhc-progress-fill" :style="{ width: overallProgress + '%' }"></div>
          </div>
          <p class="lhc-progress-label">{{ completedCount }}/{{ totalCount }} 課程完成</p>
        </div>

        <!-- 章節列表 -->
        <div class="course-sections">
          <div v-for="module in modules" :key="module.id" :id="`module-${module.id}`" class="module-section">
            <div class="module-header">
              <div class="module-badge" :class="{ completed: isModuleCompleted(module) }">
                {{ isModuleCompleted(module) ? '✓' : '📖' }}
              </div>
              <div class="module-info">
                <h3 class="module-title">{{ module.title }}</h3>
                <span class="module-count">{{ moduleDoneCount(module) }}/{{ module.lessons.length }} 完成</span>
              </div>
            </div>
            <div class="lessons-grid">
              <button
                v-for="(lesson, idx) in module.lessons" :key="lesson.id"
                class="lesson-card"
                :class="{ completed: completedLessons.includes(lesson.id), exam: lesson.isFinalExam }"
                @click="emit('startLesson', lesson)"
              >
                <div class="lesson-num">
                  <span v-if="completedLessons.includes(lesson.id)">✓</span>
                  <span v-else-if="lesson.isFinalExam">📝</span>
                  <span v-else>{{ idx + 1 }}</span>
                </div>
                <div class="lesson-title">{{ lesson.title }}</div>
                <div class="lesson-status">
                  <span v-if="completedLessons.includes(lesson.id)" class="tag-done">完成 ✓</span>
                  <span v-else-if="lesson.isFinalExam" class="tag-exam">評量</span>
                  <span v-else class="tag-start">開始 ▶</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 手機抽屜 -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="au-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="slide-up">
        <div v-if="drawerOpen" class="au-chapter-drawer">
          <div class="drawer-header">
            <span>章節導航</span>
            <button class="drawer-close" @click="drawerOpen = false">×</button>
          </div>
          <div class="drawer-body">
            <button
              v-for="module in modules" :key="module.id"
              class="drawer-item" :class="{ done: isModuleCompleted(module) }"
              @click="scrollToModuleAndClose(module.id)"
            >
              <span class="drawer-status">{{ isModuleCompleted(module) ? '✓' : '○' }}</span>
              <div>
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
  completedLessons: { type: Array, default: () => [] },
})
const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])

const drawerOpen = ref(false)
const levelKeys = ['level1', 'level2', 'level3', 'level4']
const levelDef = computed(() => props.currentLevelDef)
const modules  = computed(() => levelDef.value?.modules || [])

const completedCount = computed(() =>
  modules.value.flatMap(m => m.lessons).filter(l => props.completedLessons.includes(l.id)).length
)
const totalCount = computed(() =>
  modules.value.reduce((s, m) => s + m.lessons.length, 0)
)
const overallProgress = computed(() =>
  totalCount.value > 0 ? Math.round(completedCount.value / totalCount.value * 100) : 0
)

function moduleDoneCount(m) {
  return m.lessons.filter(l => props.completedLessons.includes(l.id)).length
}
function isModuleCompleted(m) {
  return m.lessons.length > 0 && m.lessons.every(l => props.completedLessons.includes(l.id))
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
.au-course-layout {
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  font-family: 'Noto Sans TC', 'Segoe UI', sans-serif;
}

.course-header {
  background: linear-gradient(135deg, #00274e 0%, #1a4a8a 100%);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  flex-shrink: 0;
  gap: 12px;
  position: sticky; top: 0; z-index: 100;
}
.header-left { display: flex; align-items: center; gap: 10px; }
.back-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: #fff;
  padding: 5px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
}
.back-btn:hover { background: rgba(255,255,255,0.28); }
.logo { font-size: 1.5rem; }
.header-center { flex: 1; display: flex; justify-content: center; }
.level-tabs { display: flex; gap: 4px; }
.level-tab {
  padding: 4px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.35);
  background: transparent;
  color: rgba(255,255,255,0.75);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.level-tab.active { background: #c8a951; border-color: #c8a951; color: #00274e; }
.header-right { display: flex; align-items: center; gap: 10px; }
.progress-chip { display: flex; align-items: center; gap: 4px; }
.progress-pct { font-size: 0.78rem; font-weight: 700; color: #c8a951; }
.drawer-toggle {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: #fff;
  padding: 5px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  display: none;
}

.layout-body {
  flex: 1;
  overflow: hidden;
  display: flex;
}

/* Sidebar */
.chapter-sidebar {
  width: 200px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid #e8e8e8;
  overflow-y: auto;
  padding: 12px 0;
}
.sidebar-title {
  font-size: 0.7rem;
  font-weight: 700;
  color: #999;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 0 14px 8px;
}
.sidebar-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}
.sidebar-item:hover { background: #f0f7f0; }
.sidebar-item.done .sidebar-icon { color: #27ae60; }
.sidebar-icon { font-size: 0.7rem; color: #aaa; margin-top: 2px; }
.sidebar-name { font-size: 0.72rem; color: #333; font-weight: 600; margin-bottom: 4px; }
.sidebar-dots { display: flex; gap: 3px; flex-wrap: wrap; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #ddd; }
.dot.filled { background: #c8a951; }

/* Main */
.main-area { flex: 1; overflow-y: auto; padding: 16px; }

.level-header-card {
  border-radius: 16px;
  padding: 24px;
  color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.lhc-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
.level-badge {
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 10px;
  padding: 2px 12px;
  font-size: 0.78rem;
  font-weight: 700;
}
.difficulty-chip {
  background: rgba(200,169,81,0.3);
  border-radius: 10px;
  padding: 2px 10px;
  font-size: 0.72rem;
  color: #c8a951;
  font-weight: 600;
}
.lhc-title { font-size: 1.3rem; font-weight: 900; margin: 0 0 4px; }
.lhc-sub { font-size: 0.82rem; opacity: 0.8; margin: 0 0 12px; }
.lhc-progress-bar { height: 6px; background: rgba(255,255,255,0.25); border-radius: 3px; margin-bottom: 4px; }
.lhc-progress-fill { height: 100%; background: #c8a951; border-radius: 3px; transition: width 0.4s; }
.lhc-progress-label { font-size: 0.72rem; opacity: 0.8; margin: 0; }

.course-sections { display: flex; flex-direction: column; gap: 16px; }
.module-section {
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.module-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.module-badge {
  width: 34px; height: 34px;
  background: #e8f4fd;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.module-badge.completed { background: #d5f5e3; }
.module-title { font-size: 0.9rem; font-weight: 800; color: #00274e; margin: 0 0 2px; }
.module-count { font-size: 0.72rem; color: #999; }

.lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; }
.lesson-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  background: #fafafa;
  border-radius: 10px;
  border: 1.5px solid #e8e8e8;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  gap: 6px;
}
.lesson-card:hover { border-color: #c8a951; background: #fffde7; transform: translateY(-1px); }
.lesson-card.completed { border-color: #27ae60; background: #f0fff4; }
.lesson-card.exam { border-color: #00274e; background: #e8f0ff; }
.lesson-num { font-size: 0.72rem; color: #999; font-weight: 700; }
.lesson-card.completed .lesson-num { color: #27ae60; }
.lesson-title { font-size: 0.82rem; font-weight: 600; color: #333; line-height: 1.4; }
.tag-done { background: #27ae60; color: #fff; padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; }
.tag-exam { background: #00274e; color: #c8a951; padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; }
.tag-start { background: #c8a951; color: #00274e; padding: 2px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; }

/* Drawer */
.au-drawer-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.4);
  z-index: 9998;
}
.au-chapter-drawer {
  position: fixed; bottom: 0; left: 0; right: 0;
  background: #fff;
  border-radius: 20px 20px 0 0;
  z-index: 9999;
  max-height: 60vh;
  display: flex; flex-direction: column;
}
.drawer-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px 10px;
  font-weight: 700; font-size: 0.9rem; color: #00274e;
  border-bottom: 1px solid #eee;
}
.drawer-close {
  background: none; border: none; font-size: 1.2rem;
  cursor: pointer; color: #aaa; padding: 0 4px;
}
.drawer-body { overflow-y: auto; padding: 8px 0; }
.drawer-item {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left; padding: 10px 20px;
  background: none; border: none; cursor: pointer;
  transition: background 0.15s;
}
.drawer-item:hover { background: #f5f5f5; }
.drawer-item.done .drawer-status { color: #27ae60; }
.drawer-status { font-size: 0.78rem; color: #bbb; min-width: 12px; }
.drawer-chapter-name { font-size: 0.82rem; font-weight: 600; color: #333; }
.drawer-progress { font-size: 0.7rem; color: #aaa; }

.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }

@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: block; }
  .lessons-grid { grid-template-columns: 1fr 1fr; }
}
</style>
