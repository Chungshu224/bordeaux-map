<template>
  <div class="swn">
    <header class="swn-head">
      <button class="swn-back" @click="adding ? (adding = false) : emit('back')">← {{ adding ? '返回筆記列表' : '返回課程首頁' }}</button>
      <span class="swn-title">📔 論述要點與品飲筆記</span>
    </header>

    <main v-if="!adding" class="swn-main">
      <h2 class="swn-h2">論述要點卡</h2>
      <p class="swn-intro">瑞士是延伸課程，常見題型是「說明某個現象為什麼會這樣」。先抓住這幾個主軸。</p>
      <article v-for="c in CARDS" :key="c.title" class="swn-card">
        <b>{{ c.title }}</b>
        <p>{{ c.what }}</p>
        <p class="swn-frame">骨架：{{ c.frame }}</p>
      </article>

      <h2 class="swn-h2">我的品飲與論述筆記</h2>
      <p class="swn-intro">記下一支酒或一個主題，串成「產區 → 品種 → 制度 → 風格 → 市場」。筆記只存在這台裝置、這個帳號。</p>
      <button class="swn-primary" @click="openForm">＋ 新增筆記</button>
      <p v-if="!notes.length" class="swn-empty">還沒有筆記。</p>
      <article v-for="n in notes" :key="n.id" class="swn-note">
        <div class="swn-note-top"><b>{{ n.topic || '（未命名）' }}</b><span class="swn-date">{{ n.date }}</span></div>
        <p v-for="row in rows(n)" :key="row.label" class="swn-line"><b>{{ row.label }}：</b>{{ row.value }}</p>
        <button class="swn-del" @click="remove(n.id)">刪除</button>
      </article>
    </main>

    <main v-else class="swn-main">
      <label>主題或酒款<input v-model="f.topic" type="text" placeholder="例如：Dézaley Grand Cru 的 Chasselas" /></label>
      <label>日期<input v-model="f.date" type="date" /></label>
      <label>產區與地形<textarea v-model="f.region" rows="2" placeholder="州、產區、坡向、湖泊或河谷…"></textarea></label>
      <label>品種與別名<textarea v-model="f.variety" rows="2" placeholder="例如 Fendant＝Chasselas…"></textarea></label>
      <label>制度層級<textarea v-model="f.system" rows="2" placeholder="州級 AOC、Grand Cru、產區名稱…"></textarea></label>
      <label>風格與品飲<textarea v-model="f.style" rows="2"></textarea></label>
      <label>市場與價格<textarea v-model="f.market" rows="2" placeholder="內銷、成本、通路…"></textarea></label>
      <button class="swn-primary" :disabled="!f.topic.trim()" @click="save">儲存筆記</button>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { swiExtras, swiExtrasActions } from '../../stores/switzerlandExtrasStore.js'

const emit = defineEmits(['back'])
const CARDS = [
  { title: '州級制度', what: '瑞士的 AOC 與 Grand Cru 由各州自行制定，不是全國統一。', frame: '先說誰制定 → 再說層級 → 對照法國或德國的集中式制度。' },
  { title: '別名與品種', what: '同一品種在不同產區有不同名稱（如 Fendant、Heida、Ermitage）。', frame: '先寫通用名 → 再寫地方別名與所在產區。' },
  { title: '陡坡與成本', what: '梯田與人工作業推高成本，解釋價格偏高。', frame: '地形 → 作業方式 → 成本 → 價格。' },
  { title: '內銷型市場', what: '產量多半在國內消費，出口比例低。', frame: '產量規模 → 價格與關稅或配額背景 → 對出口的影響。' },
  { title: '風格推論', what: '由產區與品種推到杯中風格。', frame: '氣候與地形 → 品種表現 → 釀造選擇 → 風格。' }
]
const LABELS = [['region', '產區與地形'], ['variety', '品種與別名'], ['system', '制度層級'], ['style', '風格與品飲'], ['market', '市場與價格']]
const rows = (n) => LABELS.filter(([k]) => n[k]).map(([k, label]) => ({ label, value: n[k] }))

const notes = computed(() => swiExtras.notes)
const adding = ref(false)
const blank = () => ({ topic: '', date: new Date().toISOString().slice(0, 10), region: '', variety: '', system: '', style: '', market: '' })
const f = reactive(blank())
function openForm() { Object.assign(f, blank()); adding.value = true }
function save() { swiExtrasActions.addNote({ ...f, topic: f.topic.trim() }); adding.value = false }
function remove(id) { swiExtrasActions.deleteNote(id) }
</script>

<style scoped>
.swn { min-height: 100vh; background: #fdf5f5; color: #2a1416; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.swn-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #B3202E, #8a1a24); color: #fff; }
.swn-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.swn-title { font-weight: 700; font-size: .9rem; }
.swn-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.swn-h2 { font-size: 1rem; color: #8a1a24; margin: 18px 0 6px; }
.swn-intro { color: #6b4a4d; font-size: .88rem; line-height: 1.6; margin: 0 0 8px; }
.swn-card, .swn-note { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 10px 14px; margin-bottom: 8px; }
.swn-card p { margin: 2px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.swn-frame { color: #B3202E; }
.swn-primary { border: 0; background: #B3202E; color: #fff; border-radius: 10px; padding: 10px 20px; font-weight: 700; cursor: pointer; margin: 4px 0 12px; }
.swn-primary:disabled { opacity: .5; cursor: not-allowed; }
.swn-empty { color: #8a6a6d; }
.swn-note-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
.swn-date { font-size: .75rem; color: #8a6a6d; }
.swn-line { margin: 4px 0; font-size: .88rem; line-height: 1.6; overflow-wrap: anywhere; }
.swn-del { border: 0; background: none; color: #b04040; cursor: pointer; font-size: .8rem; padding: 4px 0; }
label { display: block; font-size: .85rem; margin-bottom: 10px; color: #4a2a2d; }
input, textarea { display: block; width: 100%; box-sizing: border-box; margin-top: 4px; padding: 9px 10px; border: 1px solid rgba(0,0,0,.18); border-radius: 10px; background: #fff; font-size: .95rem; font-family: inherit; }
</style>
