<template>
  <section class="spq">
    <h3 class="fq-title">小測驗（{{ questions.length }} 題）</h3>
    <div v-for="(item, qi) in questions" :key="qi" class="fq-q">
      <p class="fq-text">{{ qi + 1 }}. {{ item.q }}</p>
      <button v-for="(opt, oi) in item.options" :key="oi" type="button" class="fq-opt"
        :class="optClass(qi, oi, item)" :disabled="picked[qi] !== undefined" @click="pick(qi, oi)">
        {{ opt }}
      </button>
      <p v-if="picked[qi] !== undefined" class="fq-explain">
        <b>{{ picked[qi] === item.answer ? '答對了。' : '再想想。' }}</b>{{ item.explain }}
      </p>
    </div>
    <div v-if="finished" class="fq-result" :class="{ pass: passed }">
      得分 {{ score }} 分（{{ correct }}/{{ questions.length }}）
      <span v-if="passScore">・{{ passed ? '通過' : `未達 ${passScore} 分` }}</span>
      <button type="button" class="fq-retry" @click="reset">重做</button>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'

const props = defineProps({
  questions: { type: Array, required: true },
  passScore: { type: Number, default: 0 }
})
const emit = defineEmits(['result'])

const picked = reactive({})
const correct = computed(() => props.questions.filter((q, i) => picked[i] === q.answer).length)
const finished = computed(() => props.questions.every((_, i) => picked[i] !== undefined))
const score = computed(() => Math.round((correct.value / props.questions.length) * 100))
const passed = computed(() => !props.passScore || score.value >= props.passScore)

function pick(qi, oi) {
  if (picked[qi] === undefined) picked[qi] = oi
}
function optClass(qi, oi, item) {
  if (picked[qi] === undefined) return ''
  if (oi === item.answer) return 'right'
  if (oi === picked[qi]) return 'wrong'
  return 'dim'
}
function reset() {
  Object.keys(picked).forEach(k => delete picked[k])
}

watch(finished, (v) => emit('result', v ? { score: score.value, passed: passed.value } : null), { immediate: true })
</script>

<style scoped>
.spq { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 14px 16px; margin: 16px 0; }
.fq-title { margin: 0 0 10px; font-size: .95rem; color: #5C2E12; }
.fq-q { margin-bottom: 14px; }
.fq-text { margin: 0 0 8px; font-weight: 600; line-height: 1.6; overflow-wrap: anywhere; }
.fq-opt { display: block; width: 100%; text-align: left; margin-bottom: 6px; padding: 9px 12px; border: 1px solid rgba(0,0,0,.14); border-radius: 10px; background: #fbf5ee; color: inherit; font-size: .9rem; line-height: 1.5; cursor: pointer; overflow-wrap: anywhere; }
.fq-opt:disabled { cursor: default; }
.fq-opt.right { background: #e6f6ec; border-color: #7fd69a; }
.fq-opt.wrong { background: #fdeaea; border-color: #f0a0a0; }
.fq-opt.dim { opacity: .55; }
.fq-explain { margin: 4px 0 0; font-size: .85rem; line-height: 1.6; color: #5a4a35; }
.fq-result { padding: 10px 12px; border-radius: 10px; background: #fdeaea; font-weight: 700; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.fq-result.pass { background: #e6f6ec; }
.fq-retry { margin-left: auto; border: 1px solid rgba(0,0,0,.18); background: #fff; border-radius: 8px; padding: 4px 12px; cursor: pointer; }
</style>
