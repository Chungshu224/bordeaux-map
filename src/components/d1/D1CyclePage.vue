<template>
  <div class="d1c">
    <header class="d1c-head">
      <button class="d1c-back" @click="emit('back')">← 返回課程首頁</button>
      <span class="d1c-title">🔄 年度生長週期圖</span>
    </header>
    <main class="d1c-main">
      <p class="d1c-intro">點選每個階段，看它的風險、管理動作，以及對風格的影響。點開全部六個階段可解鎖成就。</p>
      <nav class="d1c-ring" aria-label="生長階段">
        <button v-for="(s, i) in CYCLE_STAGES" :key="s.id" class="d1c-stage"
          :class="{ active: s.id === currentId, seen: seen.includes(s.id) }" @click="select(s.id)">
          <span class="d1c-no">{{ i + 1 }}</span>
          <span class="d1c-ico">{{ s.icon }}</span>
          <span class="d1c-name">{{ s.name }}</span>
        </button>
      </nav>
      <article v-if="stage" class="d1c-card">
        <h2>{{ stage.icon }} {{ stage.name }}</h2>
        <p class="d1c-short">{{ stage.short }}</p>
        <h3>風險</h3>
        <ul><li v-for="r in stage.risks" :key="r">{{ r }}</li></ul>
        <h3>管理動作</h3>
        <ul><li v-for="a in stage.actions" :key="a">{{ a }}</li></ul>
        <h3>對風格與成本的影響</h3>
        <p>{{ stage.impact }}</p>
      </article>
      <p v-else class="d1c-empty">請先選一個階段。</p>
      <p class="d1c-count">已查看 {{ seen.length }} / {{ CYCLE_STAGES.length }} 個階段</p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CYCLE_STAGES } from '../../data/d1/cycleData.js'
import { d1Extras, d1ExtrasActions } from '../../stores/d1ExtrasStore.js'

const emit = defineEmits(['back'])
const currentId = ref(null)
const stage = computed(() => CYCLE_STAGES.find(s => s.id === currentId.value) || null)
const seen = computed(() => d1Extras.visitedStages)
function select(id) { currentId.value = id; d1ExtrasActions.visitStage(id) }
</script>

<style scoped>
.d1c { min-height: 100vh; background: #f6f9ee; color: #1f2a14; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.d1c-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #4F6F1F, #34491A); color: #fff; }
.d1c-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.d1c-title { font-weight: 700; }
.d1c-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.d1c-intro { color: #55663d; font-size: .88rem; line-height: 1.6; }
.d1c-ring { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 10px 0 16px; }
.d1c-stage { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 10px 6px; border: 1px solid rgba(0,0,0,.1); border-radius: 14px; background: #fff; cursor: pointer; color: inherit; min-width: 0; }
.d1c-stage.seen { border-color: #9bbb6a; }
.d1c-stage.active { background: #DCE8C4; border-color: #4F6F1F; }
.d1c-no { font-size: .7rem; color: #6a7a55; }
.d1c-ico { font-size: 1.4rem; }
.d1c-name { font-size: .85rem; font-weight: 700; overflow-wrap: anywhere; text-align: center; }
.d1c-card { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 14px 18px; }
.d1c-card h2 { margin: 0 0 4px; font-size: 1.15rem; color: #34491A; }
.d1c-card h3 { margin: 12px 0 4px; font-size: .9rem; color: #4F6F1F; }
.d1c-card ul { margin: 0; padding-left: 20px; line-height: 1.7; font-size: .9rem; }
.d1c-card p { margin: 0; line-height: 1.7; font-size: .9rem; overflow-wrap: anywhere; }
.d1c-short { color: #55663d; margin-bottom: 4px !important; }
.d1c-empty, .d1c-count { color: #6a7a55; font-size: .85rem; margin-top: 12px; }
</style>
