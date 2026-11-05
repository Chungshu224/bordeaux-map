<template>
  <div class="ftl">
    <header class="ftl-head">
      <button class="ftl-btn" @click="emit('back')">← 返回課程首頁</button>
      <div class="ftl-tabs">
        <button v-for="n in [1, 2, 3]" :key="n" :class="['ftl-tab', { active: level === n }]" @click="fortifiedLearningActions.setLevel(n)">L{{ n }}</button>
      </div>
      <span class="ftl-pct">{{ fortifiedLearningProgress }}%</span>
    </header>

    <main v-if="!lesson" class="ftl-main">
      <h1 class="ftl-title">{{ levelData.title }}</h1>
      <p class="ftl-desc">{{ levelData.description }}</p>

      <section v-for="m in levelData.modules" :key="m.id" class="ftl-module">
        <h2>{{ m.title }}</h2>
        <button v-for="id in m.lessonIds" :key="id" class="ftl-lesson"
          :class="{ done: done.includes(id) }" @click="fortifiedLearningActions.startLesson(id)">
          <span class="ftl-mark">{{ done.includes(id) ? '✓' : '○' }}</span>
          <span class="ftl-info">
            <span class="ftl-name">{{ lessonById(id).title }}</span>
            <span class="ftl-sub">{{ lessonById(id).description }}</span>
          </span>
          <span class="ftl-min">{{ lessonById(id).duration }} 分</span>
        </button>
      </section>
    </main>

    <main v-else class="ftl-main">
      <button class="ftl-link" @click="fortifiedLearningActions.exitLesson()">← 返回課程列表</button>
      <p v-if="!content" class="ftl-badge">施工中・內容待填入</p>
      <h1 class="ftl-title">{{ lesson.title }}</h1>
      <p class="ftl-desc">{{ lesson.description }}（約 {{ lesson.duration }} 分鐘）</p>

      <section class="ftl-box">
        <h3>本課考點</h3>
        <ul><li v-for="k in lesson.keyPoints" :key="k">{{ k }}</li></ul>
      </section>

      <template v-if="content">
        <SlideBlocks :blocks="content.blocks" />
        <section v-if="content.terms && content.terms.length" class="ftl-box">
          <h3>本課詞彙</h3>
          <dl class="ftl-terms">
            <template v-for="t in content.terms" :key="t.term">
              <dt>{{ t.term }}</dt>
              <dd>{{ t.def }}</dd>
            </template>
          </dl>
        </section>
        <section v-if="content.practice" class="ftl-box">
          <h3>練習題（簡答）</h3>
          <p class="ftl-practice">{{ content.practice.prompt }}</p>
          <details class="ftl-points">
            <summary>看評分重點</summary>
            <ul><li v-for="pt in content.practice.points" :key="pt">{{ pt }}</li></ul>
          </details>
        </section>
        <FortifiedQuiz v-if="content.quiz" :key="lesson.id" :questions="content.quiz" :pass-score="content.passScore || 0" @result="quizResult = $event" />
      </template>
      <p v-else class="ftl-note">課程內容將在階段 B–D 依框架文件（FORTIFIED_COURSE_FRAMEWORK.md）填入；各項規定與數字須先查證才會寫入。</p>

      <div class="ftl-actions">
        <button v-if="!done.includes(lesson.id)" class="ftl-primary" :disabled="!canComplete" @click="complete">{{ canComplete ? '標記為已完成' : `需達 ${content.passScore} 分才能完成` }}</button>
        <button v-else class="ftl-btn" @click="fortifiedLearningActions.uncompleteLesson(lesson.id)">取消完成標記</button>
        <button class="ftl-btn" @click="fortifiedLearningActions.exitLesson()">返回列表</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SlideBlocks from '../SlideBlocks.vue'
import FortifiedQuiz from './FortifiedQuiz.vue'
import { FORTIFIED_CONTENT } from '../../data/fortified/content.js'
import { fortifiedLearningState, fortifiedLevels, fortifiedLearningActions, fortifiedLearningProgress } from '../../stores/fortifiedLearningStore.js'

const emit = defineEmits(['back'])
const level = computed(() => fortifiedLearningState.currentLevel)
const levelData = computed(() => fortifiedLevels[`level${level.value}`])
const done = computed(() => fortifiedLearningState.completedLessons)
const lessonById = (id) => levelData.value.lessons.find(l => l.id === id)
const lesson = computed(() => fortifiedLearningState.currentLessonId ? lessonById(fortifiedLearningState.currentLessonId) || null : null)

const content = computed(() => (lesson.value ? FORTIFIED_CONTENT[lesson.value.id] || null : null))
const quizResult = ref(null)
watch(() => lesson.value?.id, () => { quizResult.value = null })
// 有及格門檻的評量課要通過才能標記完成
const canComplete = computed(() => !content.value?.passScore || !!quizResult.value?.passed)

function complete() {
  if (!canComplete.value) return
  fortifiedLearningActions.completeLesson(lesson.value.id)
  fortifiedLearningActions.exitLesson()
}
</script>

<style scoped>
.ftl { min-height: 100vh; background: #fbf5ee; color: #2a2118; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.ftl-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #8B4513, #5C2E12); color: #fff; }
.ftl-btn { border: 1px solid rgba(0,0,0,.18); background: #fff; color: #5a4520; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.ftl-head .ftl-btn { background: rgba(255,255,255,.18); color: #fff; border-color: rgba(255,255,255,.3); }
.ftl-tabs { display: flex; gap: 6px; }
.ftl-tab { border: 1px solid rgba(255,255,255,.35); background: transparent; color: #fff; border-radius: 8px; padding: 5px 12px; font-weight: 700; cursor: pointer; }
.ftl-tab.active { background: #fff; color: #5C2E12; }
.ftl-pct { font-weight: 700; font-size: .85rem; }
.ftl-main { max-width: 760px; margin: 0 auto; padding: 20px 16px 48px; box-sizing: border-box; }
.ftl-title { font-size: 1.4rem; margin: 0 0 6px; color: #5C2E12; }
.ftl-desc { margin: 0 0 20px; color: #6a5a45; font-size: .92rem; line-height: 1.6; }
.ftl-module { margin-bottom: 22px; }
.ftl-module h2 { font-size: 1rem; margin: 0 0 8px; color: #8B4513; }
.ftl-lesson { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; border: 1px solid rgba(0,0,0,.08); background: #fff; border-radius: 14px; padding: 12px 14px; margin-bottom: 8px; cursor: pointer; color: inherit; }
.ftl-lesson.done { border-color: #7fd69a; background: #f4fbf6; }
.ftl-mark { flex: 0 0 auto; width: 24px; text-align: center; color: #8B4513; font-weight: 700; }
.ftl-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.ftl-name { font-weight: 700; font-size: .95rem; overflow-wrap: anywhere; }
.ftl-sub { font-size: .8rem; color: #7a6a55; overflow-wrap: anywhere; }
.ftl-min { flex: 0 0 auto; font-size: .78rem; color: #7a6a55; }
.ftl-link { display: block; border: 0; background: none; color: #8B4513; cursor: pointer; padding: 0; margin-bottom: 10px; font-size: .88rem; }
.ftl-badge { display: inline-block; margin: 0 0 8px; padding: 2px 10px; border-radius: 999px; background: #EBD3B5; color: #5C2E12; font-size: .75rem; }
.ftl-box { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 14px 18px; margin-bottom: 14px; }
.ftl-box h3 { margin: 0 0 6px; font-size: .95rem; color: #5C2E12; }
.ftl-box ul { margin: 0; padding-left: 20px; line-height: 1.7; font-size: .9rem; }
.ftl-note { color: #8a7a6a; font-size: .82rem; line-height: 1.6; }
.ftl-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.ftl :deep(.compare-table) { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.ftl :deep(.compare-table table:has(th:nth-child(3))) { min-width: 540px; }
.ftl :deep(.compare-table td:first-child) { min-width: 7em; font-weight: 600; }
.ftl-practice { margin: 0 0 8px; line-height: 1.7; font-weight: 600; overflow-wrap: anywhere; }
.ftl-points summary { cursor: pointer; color: #8B4513; font-size: .88rem; }
.ftl-points ul { margin: 8px 0 0; padding-left: 20px; line-height: 1.7; font-size: .88rem; }
.ftl-terms { margin: 0; font-size: .88rem; line-height: 1.6; }
.ftl-terms dt { font-weight: 700; color: #5C2E12; margin-top: 8px; overflow-wrap: anywhere; }
.ftl-terms dd { margin: 0; color: #5a4a35; overflow-wrap: anywhere; }
.ftl-primary:disabled { opacity: .5; cursor: not-allowed; }
.ftl-primary { border: 0; background: #8B4513; color: #fff; border-radius: 10px; padding: 9px 18px; font-weight: 700; cursor: pointer; }
</style>
