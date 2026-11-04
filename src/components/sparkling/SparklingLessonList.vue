<template>
  <div class="spl">
    <header class="spl-head">
      <button class="spl-btn" @click="emit('back')">← 返回課程首頁</button>
      <div class="spl-tabs">
        <button v-for="n in [1, 2, 3]" :key="n" :class="['spl-tab', { active: level === n }]" @click="sparklingLearningActions.setLevel(n)">L{{ n }}</button>
      </div>
      <span class="spl-pct">{{ sparklingLearningProgress }}%</span>
    </header>

    <main v-if="!lesson" class="spl-main">
      <h1 class="spl-title">{{ levelData.title }}</h1>
      <p class="spl-desc">{{ levelData.description }}</p>

      <section v-for="m in levelData.modules" :key="m.id" class="spl-module">
        <h2>{{ m.title }}</h2>
        <button v-for="id in m.lessonIds" :key="id" class="spl-lesson"
          :class="{ done: done.includes(id) }" @click="sparklingLearningActions.startLesson(id)">
          <span class="spl-mark">{{ done.includes(id) ? '✓' : '○' }}</span>
          <span class="spl-info">
            <span class="spl-name">{{ lessonById(id).title }}</span>
            <span class="spl-sub">{{ lessonById(id).description }}</span>
          </span>
          <span class="spl-min">{{ lessonById(id).duration }} 分</span>
        </button>
      </section>
    </main>

    <main v-else class="spl-main">
      <button class="spl-link" @click="sparklingLearningActions.exitLesson()">← 返回課程列表</button>
      <p v-if="!content" class="spl-badge">施工中・內容待填入</p>
      <h1 class="spl-title">{{ lesson.title }}</h1>
      <p class="spl-desc">{{ lesson.description }}（約 {{ lesson.duration }} 分鐘）</p>

      <section class="spl-box">
        <h3>本課考點</h3>
        <ul><li v-for="k in lesson.keyPoints" :key="k">{{ k }}</li></ul>
      </section>

      <template v-if="content">
        <SlideBlocks :blocks="content.blocks" />
        <section v-if="content.terms && content.terms.length" class="spl-box">
          <h3>本課詞彙</h3>
          <dl class="spl-terms">
            <template v-for="t in content.terms" :key="t.term">
              <dt>{{ t.term }}</dt>
              <dd>{{ t.def }}</dd>
            </template>
          </dl>
        </section>
        <SparklingQuiz v-if="content.quiz" :key="lesson.id" :questions="content.quiz" :pass-score="content.passScore || 0" @result="quizResult = $event" />
      </template>
      <p v-else class="spl-note">課程內容將在階段 D 依框架文件（SPARKLING_COURSE_FRAMEWORK.md）填入；各項規定與數字須先查證才會寫入。</p>

      <div class="spl-actions">
        <button v-if="!done.includes(lesson.id)" class="spl-primary" :disabled="!canComplete" @click="complete">{{ canComplete ? '標記為已完成' : `需達 ${content.passScore} 分才能完成` }}</button>
        <button v-else class="spl-btn" @click="sparklingLearningActions.uncompleteLesson(lesson.id)">取消完成標記</button>
        <button class="spl-btn" @click="sparklingLearningActions.exitLesson()">返回列表</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SlideBlocks from '../SlideBlocks.vue'
import SparklingQuiz from './SparklingQuiz.vue'
import { SPARKLING_CONTENT } from '../../data/sparkling/content.js'
import { sparklingLearningState, sparklingLevels, sparklingLearningActions, sparklingLearningProgress } from '../../stores/sparklingLearningStore.js'

const emit = defineEmits(['back'])
const level = computed(() => sparklingLearningState.currentLevel)
const levelData = computed(() => sparklingLevels[`level${level.value}`])
const done = computed(() => sparklingLearningState.completedLessons)
const lessonById = (id) => levelData.value.lessons.find(l => l.id === id)
const lesson = computed(() => sparklingLearningState.currentLessonId ? lessonById(sparklingLearningState.currentLessonId) || null : null)

const content = computed(() => (lesson.value ? SPARKLING_CONTENT[lesson.value.id] || null : null))
const quizResult = ref(null)
watch(() => lesson.value?.id, () => { quizResult.value = null })
// 有及格門檻的評量課要通過才能標記完成
const canComplete = computed(() => !content.value?.passScore || !!quizResult.value?.passed)

function complete() {
  if (!canComplete.value) return
  sparklingLearningActions.completeLesson(lesson.value.id)
  sparklingLearningActions.exitLesson()
}
</script>

<style scoped>
.spl { min-height: 100vh; background: #fdf9ee; color: #2a2118; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.spl-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #B8860B, #6B3A1E); color: #fff; }
.spl-btn { border: 1px solid rgba(0,0,0,.18); background: #fff; color: #5a4520; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.spl-head .spl-btn { background: rgba(255,255,255,.18); color: #fff; border-color: rgba(255,255,255,.3); }
.spl-tabs { display: flex; gap: 6px; }
.spl-tab { border: 1px solid rgba(255,255,255,.35); background: transparent; color: #fff; border-radius: 8px; padding: 5px 12px; font-weight: 700; cursor: pointer; }
.spl-tab.active { background: #fff; color: #6B3A1E; }
.spl-pct { font-weight: 700; font-size: .85rem; }
.spl-main { max-width: 760px; margin: 0 auto; padding: 20px 16px 48px; box-sizing: border-box; }
.spl-title { font-size: 1.4rem; margin: 0 0 6px; color: #6B3A1E; }
.spl-desc { margin: 0 0 20px; color: #6a5a45; font-size: .92rem; line-height: 1.6; }
.spl-module { margin-bottom: 22px; }
.spl-module h2 { font-size: 1rem; margin: 0 0 8px; color: #B8860B; }
.spl-lesson { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; border: 1px solid rgba(0,0,0,.08); background: #fff; border-radius: 14px; padding: 12px 14px; margin-bottom: 8px; cursor: pointer; color: inherit; }
.spl-lesson.done { border-color: #7fd69a; background: #f4fbf6; }
.spl-mark { flex: 0 0 auto; width: 24px; text-align: center; color: #B8860B; font-weight: 700; }
.spl-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.spl-name { font-weight: 700; font-size: .95rem; overflow-wrap: anywhere; }
.spl-sub { font-size: .8rem; color: #7a6a55; overflow-wrap: anywhere; }
.spl-min { flex: 0 0 auto; font-size: .78rem; color: #7a6a55; }
.spl-link { display: block; border: 0; background: none; color: #B8860B; cursor: pointer; padding: 0; margin-bottom: 10px; font-size: .88rem; }
.spl-badge { display: inline-block; margin: 0 0 8px; padding: 2px 10px; border-radius: 999px; background: #F3E3A5; color: #6B3A1E; font-size: .75rem; }
.spl-box { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 14px 18px; margin-bottom: 14px; }
.spl-box h3 { margin: 0 0 6px; font-size: .95rem; color: #6B3A1E; }
.spl-box ul { margin: 0; padding-left: 20px; line-height: 1.7; font-size: .9rem; }
.spl-note { color: #8a7a6a; font-size: .82rem; line-height: 1.6; }
.spl-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.spl :deep(.compare-table) { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.spl :deep(.compare-table table:has(th:nth-child(3))) { min-width: 540px; }
.spl :deep(.compare-table td:first-child) { min-width: 7em; font-weight: 600; }
.spl-terms { margin: 0; font-size: .88rem; line-height: 1.6; }
.spl-terms dt { font-weight: 700; color: #6B3A1E; margin-top: 8px; overflow-wrap: anywhere; }
.spl-terms dd { margin: 0; color: #5a4a35; overflow-wrap: anywhere; }
.spl-primary:disabled { opacity: .5; cursor: not-allowed; }
.spl-primary { border: 0; background: #B8860B; color: #fff; border-radius: 10px; padding: 9px 18px; font-weight: 700; cursor: pointer; }
</style>
