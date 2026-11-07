<template>
  <div class="d2n">
    <header class="d2n-head">
      <button class="d2n-back" @click="adding ? (adding = false) : emit('back')">← {{ adding ? '返回筆記列表' : '返回課程首頁' }}</button>
      <span class="d2n-title">📔 答題要點與企業決策筆記</span>
    </header>

    <main v-if="!adding" class="d2n-main">
      <h2 class="d2n-h2">答題要點卡</h2>
      <p class="d2n-intro">D2 是 60 分鐘的開放式作答。看到指令動詞，就用對應骨架；商業題一律回到「事實 → 機制 → 判斷」。</p>
      <article v-for="c in CARDS" :key="c.verb" class="d2n-card">
        <b>{{ c.verb }}</b>
        <p>{{ c.what }}</p>
        <p class="d2n-frame">骨架：{{ c.frame }}</p>
      </article>

      <h2 class="d2n-h2">我的企業決策筆記</h2>
      <p class="d2n-intro">把一個情境串成「目標 → 選項 → 利弊 → 風險 → 結論」。筆記只存在這台裝置、這個帳號。</p>
      <button class="d2n-primary" @click="openForm">＋ 新增筆記</button>
      <p v-if="!notes.length" class="d2n-empty">還沒有筆記。</p>
      <article v-for="n in notes" :key="n.id" class="d2n-note">
        <div class="d2n-note-top"><b>{{ n.topic || '（未命名）' }}</b><span class="d2n-date">{{ n.date }}</span></div>
        <p v-for="row in rows(n)" :key="row.label" class="d2n-line"><b>{{ row.label }}：</b>{{ row.value }}</p>
        <button class="d2n-del" @click="remove(n.id)">刪除</button>
      </article>
    </main>

    <main v-else class="d2n-main">
      <label>情境或主題<input v-model="f.topic" type="text" placeholder="例如：小型酒莊是否採用 DTC" /></label>
      <label>日期<input v-model="f.date" type="date" /></label>
      <label>目標與限制<textarea v-model="f.goal" rows="2" placeholder="想達成什麼、資金與規模限制…"></textarea></label>
      <label>可行選項<textarea v-model="f.options" rows="2" placeholder="企業類型、通路、行銷做法…"></textarea></label>
      <label>優點與利基<textarea v-model="f.pros" rows="2"></textarea></label>
      <label>缺點與風險<textarea v-model="f.cons" rows="2" placeholder="成本、供需、匯率、法規…"></textarea></label>
      <label>結論（含適用條件）<textarea v-model="f.verdict" rows="2"></textarea></label>
      <button class="d2n-primary" :disabled="!f.topic.trim()" @click="save">儲存筆記</button>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { d2Extras, d2ExtrasActions } from '../../stores/d2ExtrasStore.js'

const emit = defineEmits(['back'])
const CARDS = [
  { verb: 'Identify／State', what: '指出：一個詞或一句話。', frame: '直接給答案，不展開。' },
  { verb: 'Describe', what: '描述是什麼、怎麼運作。', frame: '特徵 → 運作方式，不必解釋原因。' },
  { verb: 'Explain', what: '說明為什麼。', frame: '事實 → 機制 → 結果（要有因為／所以）。' },
  { verb: 'Compare', what: '比較異同。', frame: '同一維度，成對寫共同點與差異點。' },
  { verb: 'Evaluate', what: '評估利弊並下結論。', frame: '優點 → 缺點 → 條件 → 結論（結論務必留時間寫）。' },
  { verb: '價格題', what: '先分供給、需求或成本。', frame: '事件 → 機制 → 對價格的方向。' },
  { verb: '企業與通路題', what: '用掌控度與風險評估。', frame: '它掌控什麼、承擔什麼 → 適用條件。' },
  { verb: '行銷題', what: '照流程，不要一開始就寫廣告。', frame: '產品與定位 → 市場與消費者 → 目標、策略、組合 → 監控。' }
]
const LABELS = [['goal', '目標與限制'], ['options', '可行選項'], ['pros', '優點與利基'], ['cons', '缺點與風險'], ['verdict', '結論']]
const rows = (n) => LABELS.filter(([k]) => n[k]).map(([k, label]) => ({ label, value: n[k] }))

const notes = computed(() => d2Extras.notes)
const adding = ref(false)
const blank = () => ({ topic: '', date: new Date().toISOString().slice(0, 10), goal: '', options: '', pros: '', cons: '', verdict: '' })
const f = reactive(blank())
function openForm() { Object.assign(f, blank()); adding.value = true }
function save() { d2ExtrasActions.addNote({ ...f, topic: f.topic.trim() }); adding.value = false }
function remove(id) { d2ExtrasActions.deleteNote(id) }
</script>

<style scoped>
.d2n { min-height: 100vh; background: #f4f8fc; color: #14212e; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.d2n-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #2F5D8A, #1B3A57); color: #fff; }
.d2n-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.d2n-title { font-weight: 700; font-size: .9rem; }
.d2n-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.d2n-h2 { font-size: 1rem; color: #1B3A57; margin: 18px 0 6px; }
.d2n-intro { color: #4a5f73; font-size: .88rem; line-height: 1.6; margin: 0 0 8px; }
.d2n-card, .d2n-note { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 10px 14px; margin-bottom: 8px; }
.d2n-card p { margin: 2px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.d2n-frame { color: #2F5D8A; }
.d2n-primary { border: 0; background: #2F5D8A; color: #fff; border-radius: 10px; padding: 10px 20px; font-weight: 700; cursor: pointer; margin: 4px 0 12px; }
.d2n-primary:disabled { opacity: .5; cursor: not-allowed; }
.d2n-empty { color: #5d7186; }
.d2n-note-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
.d2n-date { font-size: .75rem; color: #5d7186; }
.d2n-line { margin: 4px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.d2n-del { border: 0; background: none; color: #b04040; cursor: pointer; font-size: .8rem; padding: 4px 0; }
label { display: block; font-size: .85rem; margin-bottom: 10px; color: #2c4157; }
input, textarea { display: block; width: 100%; box-sizing: border-box; margin-top: 4px; padding: 9px 10px; border: 1px solid rgba(0,0,0,.18); border-radius: 10px; background: #fff; font-size: .95rem; font-family: inherit; }
</style>
