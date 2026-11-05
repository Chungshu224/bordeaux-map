<template>
  <div class="fon">
    <header class="fon-head">
      <button class="fon-back" @click="adding ? (adding = false) : emit('back')">← {{ adding ? '返回筆記列表' : '返回課程首頁' }}</button>
      <span class="fon-title">📝 強化酒品飲筆記</span>
    </header>

    <main v-if="!adding" class="fon-main">
      <p class="fon-intro">依 SAT 架構記錄（外觀、香氣、口感、結論）。筆記只存在這台裝置、這個帳號。</p>
      <button class="fon-primary" @click="openForm">＋ 新增筆記</button>
      <p v-if="!notes.length" class="fon-empty">還沒有筆記。</p>
      <article v-for="n in notes" :key="n.id" class="fon-note">
        <div class="fon-note-top">
          <b>{{ n.wine || '（未命名）' }}</b>
          <span class="fon-tag">{{ methodLabel(n.type) }}</span>
        </div>
        <p class="fon-sub">{{ n.region || '' }} {{ n.date }}</p>
        <p class="fon-line" v-if="n.color"><b>外觀：</b>{{ n.color }}</p>
        <p class="fon-line" v-if="n.sweetness || n.acidity"><b>口感：</b>{{ [n.sweetness, n.acidity && `酸度${n.acidity}`, n.body && `酒體${n.body}`, n.alcohol && `酒精${n.alcohol}`, n.finish && `餘韻${n.finish}`].filter(Boolean).join('、') }}</p>
        <p class="fon-line" v-if="n.aroma"><b>香氣：</b>{{ n.aroma }}</p>
        <p class="fon-line" v-if="n.quality"><b>結論：</b>{{ n.quality }}{{ n.readiness ? `・${n.readiness}` : '' }}</p>
        <p class="fon-line" v-if="n.memo">{{ n.memo }}</p>
        <button class="fon-del" @click="remove(n.id)">刪除</button>
      </article>
    </main>

    <main v-else class="fon-main">
      <label>酒款名稱<input v-model="f.wine" type="text" placeholder="例如：某某 20 Year Old Tawny" /></label>
      <label>產區／生產者<input v-model="f.region" type="text" /></label>
      <label>日期<input v-model="f.date" type="date" /></label>
      <label>類型
        <select v-model="f.type"><option v-for="m in METHOD_OPTIONS" :key="m.id" :value="m.id">{{ m.label }}</option></select>
      </label>
      <fieldset><legend>外觀</legend>
        <label>顏色<input v-model="f.color" type="text" placeholder="淡檸檬、琥珀、深褐、紅磚…" /></label>
      </fieldset>
      <fieldset><legend>香氣</legend>
        <label>關鍵字<input v-model="f.aroma" type="text" placeholder="杏仁、酵母、胡桃、焦糖、乾果…" /></label>
      </fieldset>
      <fieldset><legend>口感</legend>
        <label>甜度<select v-model="f.sweetness"><option value="">—</option><option v-for="s in SWEET" :key="s">{{ s }}</option></select></label>
        <label>酸度<select v-model="f.acidity"><option value="">—</option><option v-for="s in LEVELS" :key="s">{{ s }}</option></select></label>
        <label>酒精感<select v-model="f.alcohol"><option value="">—</option><option>整合</option><option>略突出</option><option>灼熱</option></select></label>
        <label>酒體<select v-model="f.body"><option value="">—</option><option v-for="s in BODY" :key="s">{{ s }}</option></select></label>
        <label>餘韻<select v-model="f.finish"><option value="">—</option><option>短</option><option>中等</option><option>長</option></select></label>
      </fieldset>
      <fieldset><legend>結論</legend>
        <label>品質<select v-model="f.quality"><option value="">—</option><option v-for="s in QUALITY" :key="s">{{ s }}</option></select></label>
        <label>可飲用與陳年<select v-model="f.readiness"><option value="">—</option><option>可現在飲用，不需陳年</option><option>可現在飲用，也有陳年潛力</option><option>尚未成熟，適合再陳年</option><option>已過巔峰</option></select></label>
      </fieldset>
      <label>備註<textarea v-model="f.memo" rows="3"></textarea></label>
      <button class="fon-primary" :disabled="!f.wine.trim()" @click="save">儲存筆記</button>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { fortifiedExtras, fortifiedExtrasActions } from '../../stores/fortifiedExtrasStore.js'

const emit = defineEmits(['back'])
// 類型：對應框架 §5.3
const METHOD_OPTIONS = [
  { id: 'sherry', label: 'Sherry' }, { id: 'port', label: 'Port' }, { id: 'madeira', label: 'Madeira' },
  { id: 'vdn', label: '天然甜酒 VDN' }, { id: 'rutherglen', label: 'Rutherglen' }, { id: 'marsala', label: 'Marsala' }, { id: 'other', label: '其他' }
]
// 甜度六級取自 WSET Level 3 SAT（Level 4 版本未取得，⚠）
const SWEET = ['dry', 'off-dry', 'medium-dry', 'medium-sweet', 'sweet', 'luscious']
const LEVELS = ['低', '中（−）', '中', '中（+）', '高']
const BODY = ['輕', '中（−）', '中', '中（+）', '飽滿']
const QUALITY = ['faulty', 'poor', 'acceptable', 'good', 'very good', 'outstanding']
const methodLabel = (id) => METHOD_OPTIONS.find(m => m.id === id)?.label || '其他'

const notes = computed(() => fortifiedExtras.notes)
const adding = ref(false)
const blank = () => ({ wine: '', region: '', date: new Date().toISOString().slice(0, 10), type: 'sherry', color: '', alcohol: '', aroma: '', sweetness: '', acidity: '', body: '', finish: '', quality: '', readiness: '', memo: '' })
const f = reactive(blank())
function openForm() { Object.assign(f, blank()); adding.value = true }
function save() { fortifiedExtrasActions.addNote({ ...f, wine: f.wine.trim() }); adding.value = false }
function remove(id) { fortifiedExtrasActions.deleteNote(id) }
</script>

<style scoped>
.fon { min-height: 100vh; background: #fbf5ee; color: #2a2118; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.fon-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #8B4513, #5C2E12); color: #fff; }
.fon-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.fon-title { font-weight: 700; }
.fon-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.fon-intro { color: #6a5a45; font-size: .88rem; line-height: 1.6; }
.fon-primary { border: 0; background: #8B4513; color: #fff; border-radius: 10px; padding: 10px 20px; font-weight: 700; cursor: pointer; margin: 4px 0 12px; }
.fon-primary:disabled { opacity: .5; cursor: not-allowed; }
.fon-empty { color: #8a7a6a; }
.fon-note { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 12px 14px; margin-bottom: 10px; }
.fon-note-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
.fon-tag { font-size: .75rem; background: #EBD3B5; color: #5C2E12; border-radius: 999px; padding: 2px 10px; white-space: nowrap; }
.fon-sub { margin: 2px 0 6px; font-size: .8rem; color: #7a6a55; }
.fon-line { margin: 4px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.fon-del { border: 0; background: none; color: #b04040; cursor: pointer; font-size: .8rem; padding: 4px 0; }
label { display: block; font-size: .85rem; margin-bottom: 10px; color: #5a4a35; }
input, select, textarea { display: block; width: 100%; box-sizing: border-box; margin-top: 4px; padding: 9px 10px; border: 1px solid rgba(0,0,0,.18); border-radius: 10px; background: #fff; font-size: .95rem; font-family: inherit; }
fieldset { border: 1px solid rgba(0,0,0,.1); border-radius: 12px; padding: 8px 12px 2px; margin: 0 0 12px; min-width: 0; }
legend { font-weight: 700; color: #5C2E12; font-size: .85rem; padding: 0 6px; }
</style>
