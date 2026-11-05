<template>
  <div class="d1n">
    <header class="d1n-head">
      <button class="d1n-back" @click="adding ? (adding = false) : emit('back')">← {{ adding ? '返回筆記列表' : '返回課程首頁' }}</button>
      <span class="d1n-title">📔 答題要點與決策鏈筆記</span>
    </header>

    <main v-if="!adding" class="d1n-main">
      <h2 class="d1n-h2">答題要點卡</h2>
      <p class="d1n-intro">D1 是開放式作答。看到指令動詞，就用對應骨架。</p>
      <article v-for="c in CARDS" :key="c.verb" class="d1n-card">
        <b>{{ c.verb }}</b>
        <p>{{ c.what }}</p>
        <p class="d1n-frame">骨架：{{ c.frame }}</p>
      </article>

      <h2 class="d1n-h2">我的決策鏈筆記</h2>
      <p class="d1n-intro">把一個主題串成「環境 → 葡萄園 → 釀造 → 風格、品質、價格」。筆記只存在這台裝置、這個帳號。</p>
      <button class="d1n-primary" @click="openForm">＋ 新增筆記</button>
      <p v-if="!notes.length" class="d1n-empty">還沒有筆記。</p>
      <article v-for="n in notes" :key="n.id" class="d1n-note">
        <div class="d1n-note-top"><b>{{ n.topic || '（未命名）' }}</b><span class="d1n-date">{{ n.date }}</span></div>
        <p v-for="row in rows(n)" :key="row.label" class="d1n-line"><b>{{ row.label }}：</b>{{ row.value }}</p>
        <button class="d1n-del" @click="remove(n.id)">刪除</button>
      </article>
    </main>

    <main v-else class="d1n-main">
      <label>主題<input v-model="f.topic" type="text" placeholder="例如：高價紅酒用新橡木桶熟成" /></label>
      <label>日期<input v-model="f.date" type="date" /></label>
      <label>生長環境<textarea v-model="f.environment" rows="2" placeholder="氣候、土壤、地形…"></textarea></label>
      <label>葡萄園選項<textarea v-model="f.vineyard" rows="2" placeholder="品種、葉幕、產量、採收…"></textarea></label>
      <label>釀造選項<textarea v-model="f.winery" rows="2" placeholder="萃取、容器、MLF、酒渣…"></textarea></label>
      <label>對風格的影響<textarea v-model="f.style" rows="2"></textarea></label>
      <label>對品質的影響<textarea v-model="f.quality" rows="2"></textarea></label>
      <label>對價格與成本的影響<textarea v-model="f.price" rows="2"></textarea></label>
      <button class="d1n-primary" :disabled="!f.topic.trim()" @click="save">儲存筆記</button>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { d1Extras, d1ExtrasActions } from '../../stores/d1ExtrasStore.js'

const emit = defineEmits(['back'])
const CARDS = [
  { verb: 'Identify／State', what: '指出：一個詞或一句話。', frame: '直接給答案，不展開。' },
  { verb: 'Describe', what: '描述是什麼、怎麼做。', frame: '特徵 → 做法，不必解釋原因。' },
  { verb: 'Explain', what: '說明為什麼。', frame: '做法 → 機制 → 結果（要有因為／所以）。' },
  { verb: 'Compare', what: '比較異同。', frame: '同一維度，成對寫共同點與差異點。' },
  { verb: 'Evaluate', what: '評估利弊並下結論。', frame: '優點 → 缺點 → 條件 → 結論。' }
]
const LABELS = [['environment', '生長環境'], ['vineyard', '葡萄園選項'], ['winery', '釀造選項'], ['style', '風格'], ['quality', '品質'], ['price', '價格與成本']]
const rows = (n) => LABELS.filter(([k]) => n[k]).map(([k, label]) => ({ label, value: n[k] }))

const notes = computed(() => d1Extras.notes)
const adding = ref(false)
const blank = () => ({ topic: '', date: new Date().toISOString().slice(0, 10), environment: '', vineyard: '', winery: '', style: '', quality: '', price: '' })
const f = reactive(blank())
function openForm() { Object.assign(f, blank()); adding.value = true }
function save() { d1ExtrasActions.addNote({ ...f, topic: f.topic.trim() }); adding.value = false }
function remove(id) { d1ExtrasActions.deleteNote(id) }
</script>

<style scoped>
.d1n { min-height: 100vh; background: #f6f9ee; color: #1f2a14; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.d1n-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #4F6F1F, #34491A); color: #fff; }
.d1n-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.d1n-title { font-weight: 700; font-size: .9rem; }
.d1n-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.d1n-h2 { font-size: 1rem; color: #34491A; margin: 18px 0 6px; }
.d1n-intro { color: #55663d; font-size: .88rem; line-height: 1.6; margin: 0 0 8px; }
.d1n-card, .d1n-note { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 10px 14px; margin-bottom: 8px; }
.d1n-card p { margin: 2px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.d1n-frame { color: #4F6F1F; }
.d1n-primary { border: 0; background: #4F6F1F; color: #fff; border-radius: 10px; padding: 10px 20px; font-weight: 700; cursor: pointer; margin: 4px 0 12px; }
.d1n-primary:disabled { opacity: .5; cursor: not-allowed; }
.d1n-empty { color: #6a7a55; }
.d1n-note-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
.d1n-date { font-size: .75rem; color: #6a7a55; }
.d1n-line { margin: 4px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.d1n-del { border: 0; background: none; color: #b04040; cursor: pointer; font-size: .8rem; padding: 4px 0; }
label { display: block; font-size: .85rem; margin-bottom: 10px; color: #3f4f2a; }
input, textarea { display: block; width: 100%; box-sizing: border-box; margin-top: 4px; padding: 9px 10px; border: 1px solid rgba(0,0,0,.18); border-radius: 10px; background: #fff; font-size: .95rem; font-family: inherit; }
</style>
