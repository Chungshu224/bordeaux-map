<template>
  <div class="portugal-course-layout">
    <!-- Header -->
    <header class="course-header">
      <div class="header-left">
        <button class="back-btn" @click="emit('backToLevelSelector')">← 返回</button>
        <div class="logo">🇵🇹</div>
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
        <div class="progress-chip">
          <svg class="progress-ring" width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
            <circle
              cx="16" cy="16" r="13" fill="none" stroke="white" stroke-width="3"
              :stroke-dasharray="`${overallProgress * 0.817} 82`"
              transform="rotate(-90 16 16)"
              stroke-linecap="round"
            />
          </svg>
          <span class="progress-pct">{{ overallProgress }}%</span>
        </div>
        <button class="drawer-toggle" @click="drawerOpen = !drawerOpen">≡ 章節</button>
        <div class="hdr-avatar" :title="avatarInitial">
          <img v-if="avatarUrl" :src="avatarUrl" class="hdr-avatar-img" />
          <span v-else class="hdr-avatar-initial">{{ avatarInitial }}</span>
        </div>
      </div>
    </header>

    <!-- 主體 -->
    <div class="layout-body">
      <!-- 左側章節導航（桌面） -->
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

      <!-- 主要內容區 -->
      <div class="main-area">
        <!-- Level 標題卡 -->
        <div class="level-header-card" :style="{ background: levelDef?.gradient || 'linear-gradient(135deg,#006600,#CC0000)' }">
          <div class="lhc-top">
            <div class="level-badge">{{ levelBadge }}</div>
            <span class="difficulty-chip">{{ levelDef?.difficulty || '' }}</span>
          </div>
          <h2 class="lhc-title">{{ levelDef?.title }}</h2>
          <p class="lhc-sub">{{ levelDef?.subtitle }}</p>
          <div class="lhc-progress-bar">
            <div class="lhc-progress-fill" :style="{ width: overallProgress + '%' }"></div>
          </div>
          <p class="lhc-progress-label">{{ completedCount }}/{{ totalCount }} 課程完成</p>
        </div>

        <!-- 章節課程列表 -->
        <div class="course-sections">
          <div
            v-for="module in modules"
            :key="module.id"
            :id="`module-${module.id}`"
            class="module-section"
          >
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
                v-for="(lesson, idx) in module.lessons"
                :key="lesson.id"
                class="lesson-card"
                :class="{
                  completed: completedLessons.includes(lesson.id),
                  exam: lesson.isFinalExam
                }"
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

    <!-- 手機章節抽屜 -->
    <Teleport to="body">
      <div v-if="drawerOpen" class="pt-drawer-overlay" @click="drawerOpen = false"></div>
      <Transition name="slide-up">
        <div v-if="drawerOpen" class="pt-chapter-drawer">
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
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../../../lib/supabaseClient.js'
import { authState } from '../../../stores/authStore.js'

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
  currentLevelKey: { type: String, required: true },
  currentLevelDef: { type: Object, required: true },
  completedLessons: { type: Array, default: () => [] },
})
const emit = defineEmits(['backToLevelSelector', 'changeLevel', 'startLesson'])

const drawerOpen = ref(false)
const levelKeys = ['level1', 'level2', 'level3', 'level4']

const levelDef = computed(() => props.currentLevelDef)
const modules = computed(() => levelDef.value?.modules || [])
const levelBadge = computed(() => `Level ${props.currentLevelKey?.replace('level', '') || '1'}`)

const completedCount = computed(() =>
  modules.value.flatMap(m => m.lessons).filter(l => props.completedLessons.includes(l.id)).length
)
const totalCount = computed(() =>
  modules.value.reduce((s, m) => s + m.lessons.length, 0)
)
const overallProgress = computed(() =>
  totalCount.value > 0 ? Math.round(completedCount.value / totalCount.value * 100) : 0
)

function moduleDoneCount(module) {
  return module.lessons.filter(l => props.completedLessons.includes(l.id)).length
}
function isModuleCompleted(module) {
  return module.lessons.length > 0 && module.lessons.every(l => props.completedLessons.includes(l.id))
}
function scrollToModule(moduleId) {
  const el = document.getElementById(`module-${moduleId}`)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function scrollToModuleAndClose(moduleId) {
  scrollToModule(moduleId)
  drawerOpen.value = false
}
</script>

<style scoped>
.portugal-course-layout {
  min-height: 100vh;
  background: #f5f7f5;
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ── Header ─────────────────────────── */
.course-header {
  background: linear-gradient(135deg, #006600 0%, #CC0000 100%);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 4px 16px rgba(0,100,0,0.28);
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-left  { display: flex; align-items: center; gap: 10px; }
.header-right { display: flex; align-items: center; gap: 8px; }
.hdr-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.5);
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; cursor: default; flex-shrink: 0;
}
.hdr-avatar-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hdr-avatar-initial { font-size: 0.9rem; font-weight: 700; color: white; line-height: 1; }
.back-btn {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: white;
  padding: 7px 14px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s;
}
.back-btn:hover { background: rgba(255,255,255,0.28); }
.logo { font-size: 24px; }

.level-tabs {
  display: flex;
  gap: 3px;
  background: rgba(255,255,255,0.12);
  padding: 3px;
  border-radius: 10px;
}
.level-tab {
  padding: 6px 16px;
  background: transparent;
  border: none;
  border-radius: 7px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 700;
  transition: all 0.2s;
  min-width: 40px;
}
.level-tab:hover { color: white; background: rgba(255,255,255,0.14); }
.level-tab.active { background: white; color: #006600; }

.progress-chip {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: rgba(255,255,255,0.14);
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 700;
  color: white;
}
.drawer-toggle {
  display: none;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px;
  color: white;
  padding: 7px 12px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

/* ── Layout Body ─────────────────────── */
.layout-body { display: flex; flex: 1; min-height: 0; }

/* ── Sidebar ─────────────────────────── */
.chapter-sidebar {
  width: 250px;
  flex-shrink: 0;
  background: white;
  border-right: 2px solid #e6f2e6;
  overflow-y: auto;
  height: calc(100vh - 57px);
}
.sidebar-title {
  padding: 16px 16px 8px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #999;
  border-bottom: 1px solid #e6f2e6;
}
.sidebar-item {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 12px 16px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: 1px solid #f8f8f8;
  background: transparent;
  transition: background 0.15s;
  font-family: inherit;
}
.sidebar-item:hover { background: #f5fdf5; }
.sidebar-icon {
  color: #006600;
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 2px;
  flex-shrink: 0;
  width: 16px;
}
.sidebar-item.done .sidebar-icon { color: #27ae60; }
.sidebar-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
  margin-bottom: 4px;
}
.sidebar-dots { display: flex; gap: 3px; flex-wrap: wrap; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: #e9ecef; }
.dot.filled { background: #006600; }

/* ── Main Area ───────────────────────── */
.main-area {
  flex: 1;
  min-width: 0;
  padding: 24px 28px;
  overflow-y: auto;
}

/* Level header card */
.level-header-card {
  border-radius: 16px;
  padding: 24px 28px;
  color: white;
  margin-bottom: 28px;
  position: relative;
  overflow: hidden;
}
.lhc-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.level-badge {
  background: rgba(255,255,255,0.25);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
}
.difficulty-chip {
  background: rgba(255,255,255,0.2);
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}
.lhc-title { font-size: 1.5rem; font-weight: 800; margin: 0 0 4px; }
.lhc-sub { font-size: 0.9rem; opacity: 0.85; margin: 0 0 16px; }
.lhc-progress-bar {
  background: rgba(255,255,255,0.25);
  border-radius: 9999px;
  height: 8px;
  overflow: hidden;
  margin-bottom: 8px;
}
.lhc-progress-fill {
  height: 100%;
  background: white;
  border-radius: 9999px;
  transition: width 0.5s ease;
}
.lhc-progress-label { font-size: 0.8rem; opacity: 0.85; margin: 0; }

/* Module sections */
.course-sections { display: flex; flex-direction: column; gap: 24px; }
.module-section {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.module-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid #f5f5f5;
  background: #fafafa;
}
.module-badge {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #e6f2e6;
  color: #006600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  transition: all 0.2s;
}
.module-badge.completed { background: #e8f5e9; color: #27ae60; }
.module-info {}
.module-title { font-size: 0.95rem; font-weight: 700; color: #2c3e50; margin: 0 0 2px; }
.module-count { font-size: 0.75rem; color: #999; }

.lessons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
  padding: 16px 20px;
}
.lesson-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border: 1.5px solid #f0f0f0;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: all 0.15s;
  width: 100%;
}
.lesson-card:hover { border-color: #006600; background: #f5fdf5; transform: translateY(-1px); }
.lesson-card.completed { border-color: #27ae60; background: #f0fff4; }
.lesson-card.exam { border-color: #f39c12; background: #fffdf0; }
.lesson-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e6f2e6;
  color: #006600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
}
.lesson-card.completed .lesson-num { background: #27ae60; color: white; }
.lesson-card.exam .lesson-num { background: #f39c12; color: white; }
.lesson-title { flex: 1; font-size: 0.85rem; font-weight: 600; color: #2c3e50; line-height: 1.4; }
.lesson-status { flex-shrink: 0; }
.tag-done { background: #27ae60; color: white; padding: 3px 8px; border-radius: 9999px; font-size: 0.72rem; font-weight: 700; }
.tag-exam { background: #f39c12; color: white; padding: 3px 8px; border-radius: 9999px; font-size: 0.72rem; font-weight: 700; }
.tag-start { background: #006600; color: white; padding: 3px 8px; border-radius: 9999px; font-size: 0.72rem; font-weight: 700; }

/* ── Drawer ──────────────────────────── */
.pt-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 299;
}
.pt-chapter-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 18px 18px 0 0;
  z-index: 300;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.15);
}
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 700;
  font-size: 0.95rem;
}
.drawer-close {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #999;
  padding: 4px 8px;
}
.drawer-body { overflow-y: auto; padding: 12px 0; }
.drawer-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  border: none;
  background: transparent;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s;
}
.drawer-item:hover { background: #f5fdf5; }
.drawer-item.done .drawer-status { color: #27ae60; font-weight: 700; }
.drawer-status { color: #006600; font-weight: 700; flex-shrink: 0; width: 18px; }
.drawer-chapter-name { font-size: 0.88rem; font-weight: 600; color: #2c3e50; }
.drawer-progress { font-size: 0.75rem; color: #999; margin-top: 2px; }

/* ── Transitions ──────────────────────── */
.slide-up-enter-active,
.slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from,
.slide-up-leave-to { transform: translateY(100%); }

/* ── Mobile ──────────────────────────── */
@media (max-width: 768px) {
  .chapter-sidebar { display: none; }
  .drawer-toggle { display: flex; }
  .main-area { padding: 16px; }
  .lhc-title { font-size: 1.2rem; }
  .lessons-grid { grid-template-columns: 1fr; }
}
</style>
