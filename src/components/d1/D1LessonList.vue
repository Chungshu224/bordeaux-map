<template>
  <div class="dtl">
    <header class="dtl-head">
      <button class="dtl-btn" @click="emit('back')">← 返回課程首頁</button>
      <div class="dtl-tabs">
        <button v-for="n in [1, 2, 3]" :key="n" :class="['dtl-tab', { active: level === n }]" @click="d1LearningActions.setLevel(n)">L{{ n }}</button>
      </div>
      <span class="dtl-pct">{{ d1LearningProgress }}%</span>
    </header>

    <main v-if="!lesson" class="dtl-main">
      <h1 class="dtl-title">{{ levelData.title }}</h1>
      <p class="dtl-desc">{{ levelData.description }}</p>

      <section v-for="m in levelData.modules" :key="m.id" class="dtl-module">
        <h2>{{ m.title }}</h2>
        <button v-for="id in m.lessonIds" :key="id" class="dtl-lesson"
          :class="{ done: done.includes(id) }" @click="d1LearningActions.startLesson(id)">
          <span class="dtl-mark">{{ done.includes(id) ? '✓' : '○' }}</span>
          <span class="dtl-info">
            <span class="dtl-name">{{ lessonById(id).title }}</span>
            <span class="dtl-sub">{{ lessonById(id).description }}</span>
          </span>
          <span class="dtl-min">{{ lessonById(id).duration }} 分</span>
        </button>
      </section>
    </main>

    <main v-else class="dtl-main">
      <button class="dtl-link" @click="d1LearningActions.exitLesson()">← 返回課程列表</button>
      <p v-if="!content" class="dtl-badge">施工中・內容待填入</p>
      <h1 class="dtl-title">{{ lesson.title }}</h1>
      <p class="dtl-desc">{{ lesson.description }}（約 {{ lesson.duration }} 分鐘）</p>

      <section class="dtl-box">
        <h3>本課考點</h3>
        <ul><li v-for="k in lesson.keyPoints" :key="k">{{ k }}</li></ul>
      </section>

      <template v-if="content">
        <SlideBlocks :blocks="content.blocks" />
        <section v-if="content.terms && content.terms.length" class="dtl-box">
          <h3>本課詞彙</h3>
          <dl class="dtl-terms">
            <template v-for="t in content.terms" :key="t.term">
              <dt>{{ t.term }}</dt>
              <dd>{{ t.def }}</dd>
            </template>
          </dl>
        </section>
        <section v-if="content.practice" class="dtl-box">
          <h3>練習題（簡答）</h3>
          <p class="dtl-practice">{{ content.practice.prompt }}</p>
          <details class="dtl-points">
            <summary>看評分重點</summary>
            <ul><li v-for="pt in content.practice.points" :key="pt">{{ pt }}</li></ul>
          </details>
        </section>
        <D1Quiz v-if="content.quiz" :key="lesson.id" :questions="content.quiz" :pass-score="content.passScore || 0" @result="quizResult = $event" />
      </template>
      <p v-else class="dtl-note">課程內容將在階段 B–D 依框架文件（D1_COURSE_FRAMEWORK.md）填入；各項規定與數字須先查證才會寫入。</p>

      <div class="dtl-actions">
        <button v-if="!done.includes(lesson.id)" class="dtl-primary" :disabled="!canComplete" @click="complete">{{ canComplete ? '標記為已完成' : `需達 ${content.passScore} 分才能完成` }}</button>
        <button v-else class="dtl-btn" @click="d1LearningActions.uncompleteLesson(lesson.id)">取消完成標記</button>
        <button class="dtl-btn" @click="d1LearningActions.exitLesson()">返回列表</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SlideBlocks from '../SlideBlocks.vue'
import D1Quiz from './D1Quiz.vue'
import { D1_CONTENT } from '../../data/d1/content.js'
import { d1LearningState, d1Levels, d1LearningActions, d1LearningProgress } from '../../stores/d1LearningStore.js'

const emit = defineEmits(['back'])
const level = computed(() => d1LearningState.currentLevel)
const levelData = computed(() => d1Levels[`level${level.value}`])
const done = computed(() => d1LearningState.completedLessons)
const lessonById = (id) => levelData.value.lessons.find(l => l.id === id)
const lesson = computed(() => d1LearningState.currentLessonId ? lessonById(d1LearningState.currentLessonId) || null : null)

const content = computed(() => (lesson.value ? D1_CONTENT[lesson.value.id] || null : null))
const quizResult = ref(null)
watch(() => lesson.value?.id, () => { quizResult.value = null })
// 有及格門檻的評量課要通過才能標記完成
const canComplete = computed(() => !content.value?.passScore || !!quizResult.value?.passed)

function complete() {
  if (!canComplete.value) return
  d1LearningActions.completeLesson(lesson.value.id)
  d1LearningActions.exitLesson()
}
</script>

<style scoped>
.dtl { min-height: 100vh; background: #f6f9ee; color: #2a2118; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.dtl-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #4F6F1F, #34491A); color: #fff; }
.dtl-btn { border: 1px solid rgba(0,0,0,.18); background: #fff; color: #5a4520; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.dtl-head .dtl-btn { background: rgba(255,255,255,.18); color: #fff; border-color: rgba(255,255,255,.3); }
.dtl-tabs { display: flex; gap: 6px; }
.dtl-tab { border: 1px solid rgba(255,255,255,.35); background: transparent; color: #fff; border-radius: 8px; padding: 5px 12px; font-weight: 700; cursor: pointer; }
.dtl-tab.active { background: #fff; color: #34491A; }
.dtl-pct { font-weight: 700; font-size: .85rem; }
.dtl-main { max-width: 760px; margin: 0 auto; padding: 20px 16px 48px; box-sizing: border-box; }
.dtl-title { font-size: 1.4rem; margin: 0 0 6px; color: #34491A; }
.dtl-desc { margin: 0 0 20px; color: #6a5a45; font-size: .92rem; line-height: 1.6; }
.dtl-module { margin-bottom: 22px; }
.dtl-module h2 { font-size: 1rem; margin: 0 0 8px; color: #4F6F1F; }
.dtl-lesson { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; border: 1px solid rgba(0,0,0,.08); background: #fff; border-radius: 14px; padding: 12px 14px; margin-bottom: 8px; cursor: pointer; color: inherit; }
.dtl-lesson.done { border-color: #7fd69a; background: #f4fbf6; }
.dtl-mark { flex: 0 0 auto; width: 24px; text-align: center; color: #4F6F1F; font-weight: 700; }
.dtl-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.dtl-name { font-weight: 700; font-size: .95rem; overflow-wrap: anywhere; }
.dtl-sub { font-size: .8rem; color: #7a6a55; overflow-wrap: anywhere; }
.dtl-min { flex: 0 0 auto; font-size: .78rem; color: #7a6a55; }
.dtl-link { display: block; border: 0; background: none; color: #4F6F1F; cursor: pointer; padding: 0; margin-bottom: 10px; font-size: .88rem; }
.dtl-badge { display: inline-block; margin: 0 0 8px; padding: 2px 10px; border-radius: 999px; background: #DCE8C4; color: #34491A; font-size: .75rem; }
.dtl-box { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 14px 18px; margin-bottom: 14px; }
.dtl-box h3 { margin: 0 0 6px; font-size: .95rem; color: #34491A; }
.dtl-box ul { margin: 0; padding-left: 20px; line-height: 1.7; font-size: .9rem; }
.dtl-note { color: #8a7a6a; font-size: .82rem; line-height: 1.6; }
.dtl-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.dtl :deep(.compare-table) { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.dtl :deep(.compare-table table:has(th:nth-child(3))) { min-width: 540px; }
.dtl :deep(.compare-table td:first-child) { min-width: 7em; font-weight: 600; }
.dtl-practice { margin: 0 0 8px; line-height: 1.7; font-weight: 600; overflow-wrap: anywhere; }
.dtl-points summary { cursor: pointer; color: #4F6F1F; font-size: .88rem; }
.dtl-points ul { margin: 8px 0 0; padding-left: 20px; line-height: 1.7; font-size: .88rem; }
.dtl-terms { margin: 0; font-size: .88rem; line-height: 1.6; }
.dtl-terms dt { font-weight: 700; color: #34491A; margin-top: 8px; overflow-wrap: anywhere; }
.dtl-terms dd { margin: 0; color: #5a4a35; overflow-wrap: anywhere; }
.dtl-primary:disabled { opacity: .5; cursor: not-allowed; }
.dtl-primary { border: 0; background: #4F6F1F; color: #fff; border-radius: 10px; padding: 9px 18px; font-weight: 700; cursor: pointer; }
</style>
