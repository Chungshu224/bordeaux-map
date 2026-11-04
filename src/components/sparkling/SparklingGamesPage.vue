<template>
  <div class="spg">
    <header class="spg-head">
      <button class="spg-back" @click="game ? leave() : emit('back')">← {{ game ? '返回遊戲列表' : '返回課程首頁' }}</button>
      <span class="spg-title">🎮 氣泡酒遊戲</span>
    </header>

    <main v-if="!game" class="spg-main">
      <p class="spg-intro">每場 10 題，答完會記錄最高分。題目取自已查證的課程內容。</p>
      <button v-for="g in GAMES" :key="g.id" class="spg-card" @click="start(g.id)">
        <span class="spg-icon">{{ g.icon }}</span>
        <span class="spg-info"><span class="spg-name">{{ g.title }}</span><span class="spg-desc">{{ g.desc }}</span></span>
        <span class="spg-best">{{ best[g.id] != null ? `最高 ${best[g.id]}` : '未挑戰' }}</span>
      </button>
    </main>

    <main v-else-if="!finished" class="spg-main">
      <p class="spg-meta">{{ gameMeta.icon }} {{ gameMeta.title }}・第 {{ idx + 1 }} / {{ questions.length }} 題</p>
      <h2 class="spg-q">{{ current.q }}</h2>
      <button v-for="(o, i) in current.options" :key="i" class="spg-opt" :class="optClass(i)" :disabled="picked !== null" @click="pick(i)">{{ o }}</button>
      <p v-if="picked !== null" class="spg-explain"><b>{{ picked === current.answer ? '答對了。' : '再想想。' }}</b>{{ current.explain }}</p>
      <button v-if="picked !== null" class="spg-next" @click="next">{{ idx + 1 < questions.length ? '下一題' : '看結果' }}</button>
    </main>

    <main v-else class="spg-main spg-result">
      <h2>{{ gameMeta.icon }} {{ gameMeta.title }}</h2>
      <p class="spg-score">{{ score }} 分（{{ correct }}/{{ questions.length }}）</p>
      <p v-if="score >= 100">🎯 滿分！</p>
      <button class="spg-next" @click="start(game)">再玩一次</button>
      <button class="spg-back2" @click="leave">返回遊戲列表</button>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { GAMES, makeQuestions } from '../../data/sparkling/gameData.js'
import { sparklingExtras, sparklingExtrasActions } from '../../stores/sparklingExtrasStore.js'

const emit = defineEmits(['back'])
const game = ref(null)
const questions = ref([])
const idx = ref(0)
const picked = ref(null)
const correct = ref(0)
const finished = ref(false)

const best = computed(() => sparklingExtras.gameBest)
const gameMeta = computed(() => GAMES.find(g => g.id === game.value) || {})
const current = computed(() => questions.value[idx.value])
const score = computed(() => Math.round((correct.value / (questions.value.length || 1)) * 100))

function start(id) {
  game.value = id; questions.value = makeQuestions(id, 10)
  idx.value = 0; picked.value = null; correct.value = 0; finished.value = false
}
function leave() { game.value = null; finished.value = false }
function pick(i) {
  if (picked.value !== null) return
  picked.value = i
  if (i === current.value.answer) correct.value++
}
function optClass(i) {
  if (picked.value === null) return ''
  if (i === current.value.answer) return 'right'
  if (i === picked.value) return 'wrong'
  return 'dim'
}
function next() {
  if (idx.value + 1 < questions.value.length) { idx.value++; picked.value = null }
  else { finished.value = true; sparklingExtrasActions.recordGame(game.value, score.value) }
}
</script>

<style scoped>
.spg { min-height: 100vh; background: #fdf9ee; color: #2a2118; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.spg-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #B8860B, #6B3A1E); color: #fff; }
.spg-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.spg-title { font-weight: 700; }
.spg-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.spg-intro { color: #6a5a45; font-size: .9rem; line-height: 1.6; }
.spg-card { display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; border: 1px solid rgba(0,0,0,.08); background: #fff; border-radius: 14px; padding: 12px 14px; margin-bottom: 8px; cursor: pointer; color: inherit; }
.spg-icon { font-size: 1.6rem; }
.spg-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; }
.spg-name { font-weight: 700; }
.spg-desc { font-size: .8rem; color: #7a6a55; overflow-wrap: anywhere; }
.spg-best { font-size: .78rem; color: #B8860B; white-space: nowrap; }
.spg-meta { color: #B8860B; font-size: .85rem; margin: 0 0 6px; }
.spg-q { font-size: 1.1rem; line-height: 1.6; margin: 0 0 14px; overflow-wrap: anywhere; }
.spg-opt { display: block; width: 100%; text-align: left; margin-bottom: 8px; padding: 11px 14px; border: 1px solid rgba(0,0,0,.14); border-radius: 12px; background: #fff; color: inherit; font-size: .95rem; line-height: 1.5; cursor: pointer; overflow-wrap: anywhere; }
.spg-opt:disabled { cursor: default; }
.spg-opt.right { background: #e6f6ec; border-color: #7fd69a; }
.spg-opt.wrong { background: #fdeaea; border-color: #f0a0a0; }
.spg-opt.dim { opacity: .55; }
.spg-explain { font-size: .86rem; line-height: 1.6; color: #5a4a35; }
.spg-next { border: 0; background: #B8860B; color: #fff; border-radius: 10px; padding: 10px 20px; font-weight: 700; cursor: pointer; margin-top: 6px; }
.spg-back2 { border: 1px solid rgba(0,0,0,.18); background: #fff; border-radius: 10px; padding: 10px 20px; cursor: pointer; margin: 6px 0 0 8px; }
.spg-result { text-align: center; }
.spg-score { font-size: 1.6rem; font-weight: 800; color: #6B3A1E; }
</style>
