<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <div class="modal-panel">
      <!-- Header -->
      <div class="modal-header">
        <div class="modal-title-block">
          <h2>{{ form.chateau_name || '新增品飲筆記' }}</h2>
          <p v-if="form.aoc_id" class="modal-aoc">{{ aocLabel }}</p>
        </div>
        <button class="modal-close-btn" @click="emit('close')">✕</button>
      </div>

      <div class="modal-body">

        <!-- 若為新增，顯示酒莊/AOC 輸入 -->
        <section v-if="!props.note && !props.defaultChateauName" class="form-section">
          <h3 class="section-title">📍 基本資訊</h3>
          <div class="form-row">
            <label>酒莊名稱</label>
            <input v-model="form.chateau_name" placeholder="e.g. Château Margaux" class="text-input" />
          </div>
          <div class="form-row">
            <label>產區 (AOC ID)</label>
            <input v-model="form.aoc_id" placeholder="e.g. Margaux_AOC" class="text-input" />
          </div>
        </section>

        <!-- 狀態、年份、評分 -->
        <section class="form-section">
          <h3 class="section-title">🍷 品飲記錄</h3>
          <div class="triple-row">
            <!-- 狀態 -->
            <div class="form-cell">
              <label class="cell-label">狀態</label>
              <div class="status-toggle">
                <button :class="['stbtn', form.status === 'tried' && 'active-tried']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['stbtn', form.status === 'wishlist' && 'active-wish']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <!-- 年份 -->
            <div class="form-cell">
              <label class="cell-label">年份</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2025"
                placeholder="e.g. 2015" class="vintage-input" />
            </div>
            <!-- 評分 -->
            <div class="form-cell">
              <label class="cell-label">評分</label>
              <div class="star-row">
                <span v-for="i in 5" :key="i"
                  :class="['star-btn', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 氣候參考卡（有年份時顯示） -->
        <section v-if="climateInfo" class="climate-card" :class="climateInfo.heatClass">
          <div class="climate-card-inner">
            <span class="climate-icon">🌡</span>
            <div class="climate-text">
              <div class="climate-year">{{ form.vintage }} 年份氣候</div>
              <div class="climate-temp">
                夏均 <strong>{{ climateInfo.temp }}°C</strong>
                <span class="climate-diff">（{{ climateInfo.diff > 0 ? '+' : '' }}{{ climateInfo.diff }}°C）</span>
              </div>
            </div>
            <div v-if="climateInfo.isGolden" class="golden-badge">✨ 黃金年份</div>
          </div>
        </section>

        <!-- 外觀顏色（狀態為 tried 時才顯示） -->
        <section v-if="form.status === 'tried'" class="form-section">
          <h3 class="section-title">🎨 外觀顏色</h3>
          <div class="color-palette">
            <button v-for="c in WINE_COLORS" :key="c.id"
              :title="c.label"
              :class="['color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="color-label-hint">
            {{ WINE_COLORS.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- 香氣 -->
        <section v-if="form.status === 'tried'" class="form-section">
          <h3 class="section-title">👃 香氣</h3>
          <div class="tag-grid">
            <button v-for="tag in AROMA_TAGS" :key="tag"
              :class="['tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 口感 -->
        <section v-if="form.status === 'tried'" class="form-section">
          <h3 class="section-title">👅 口感</h3>
          <div class="tag-grid">
            <button v-for="tag in TASTE_TAGS" :key="tag"
              :class="['tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 結構感 -->
        <section v-if="form.status === 'tried'" class="form-section">
          <h3 class="section-title">📐 結構感</h3>
          <div class="structure-grid">
            <div v-for="item in STRUCTURE_ITEMS" :key="item.key" class="structure-row">
              <span class="structure-label">{{ item.label }}</span>
              <div class="dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['dot-btn', form[item.key] >= i && 'dot-filled']"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="structure-hint">{{ item.hints[form[item.key] - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- 心得筆記 -->
        <section class="form-section">
          <h3 class="section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="notes-textarea"
            placeholder="記錄你的品飲心得、搭配建議、適飲期評估…" rows="4" />
        </section>

      </div><!-- modal-body -->

      <!-- Actions -->
      <div class="modal-footer">
        <button v-if="props.note?.id" class="btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button class="btn-save" :disabled="saving || !form.chateau_name" @click="save">
          {{ saving ? '儲存中…' : '💾 儲存筆記' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const props = defineProps({
  note: { type: Object, default: null },           // 現有筆記（null = 新增）
  defaultAocId: { type: String, default: '' },
  defaultChateauName: { type: String, default: '' },
})
const emit = defineEmits(['save', 'delete', 'close'])

// ── 表單狀態 ─────────────────────────────────────────────────────
const form = ref({
  aoc_id: '',
  chateau_name: '',
  vintage: null,
  status: 'tried',
  rating: null,
  color_desc: null,
  aroma_tags: [],
  taste_tags: [],
  tannin: null,
  acidity: null,
  body: null,
  finish: null,
  notes: '',
})
const saving  = ref(false)
const deleting = ref(false)

// ── 常數 ─────────────────────────────────────────────────────────
const WINE_COLORS = [
  { id: 'young-purple', label: '年輕紫紅', color: '#4B1B5B' },
  { id: 'deep-red',    label: '深寶石紅', color: '#8B0020' },
  { id: 'garnet',      label: '石榴紅',   color: '#A5174E' },
  { id: 'ruby',        label: '紅寶石',   color: '#9B111E' },
  { id: 'brick',       label: '磚紅色',   color: '#CB4154' },
  { id: 'orange-red',  label: '橙紅色',   color: '#C55A11' },
  { id: 'pale-gold',   label: '淡金色',   color: '#E8C84A' },
  { id: 'gold',        label: '金黃色',   color: '#FFB700' },
  { id: 'amber',       label: '琥珀色',   color: '#FFBF50' },
]

const AROMA_TAGS = [
  '黑醋栗', '藍莓', '黑莓', '李子',
  '雪松', '鉛筆芯', '香草', '橡木',
  '皮革', '菸草', '松露', '蘑菇',
  '礦物質', '石墨', '紫羅蘭', '薄荷',
]

const TASTE_TAGS = [
  '渾厚飽滿', '細緻絲滑', '礦物感', '辛香料',
  '甜美果香', '活潑酸度', '均衡優雅', '悠長尾韻',
]

const STRUCTURE_ITEMS = [
  { key: 'tannin',  label: '單寧', hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
  { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
  { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
  { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
]

// ── 氣候資料 ──────────────────────────────────────────────────────
const climateData = ref(null)
const loadClimate = async () => {
  if (climateData.value) return
  try {
    const res = await fetch('/data/bordeaux-climate.json')
    climateData.value = await res.json()
  } catch { /* offline ok */ }
}

const climateInfo = computed(() => {
  if (!climateData.value || !form.value.vintage) return null
  const years = climateData.value.meta.years
  const idx   = years.indexOf(Number(form.value.vintage))
  if (idx === -1) return null

  const aocData  = climateData.value.aocs?.[form.value.aoc_id]
  const temp     = aocData ? aocData.temps[idx] : climateData.value.meta.yearAvg[idx]
  const baseline = aocData ? aocData.baseline   : climateData.value.global.mean
  const diff     = +(temp - baseline).toFixed(2)
  const isGolden = climateData.value.meta.goldenVintages.includes(Number(form.value.vintage))
  const heatClass = diff >= 2 ? 'heat-hot' : diff >= 1 ? 'heat-warm' : diff <= -1 ? 'heat-cool' : 'heat-normal'

  return { temp: temp.toFixed(1), diff: diff > 0 ? `+${diff}` : `${diff}`, isGolden, heatClass }
})

const aocLabel = computed(() =>
  form.value.aoc_id.replace(/_AOC$/i, '').replace(/_/g, ' ')
)

// ── 初始化 ────────────────────────────────────────────────────────
onMounted(async () => {
  await loadClimate()
  if (props.note) {
    form.value = {
      ...form.value,
      ...props.note,
      aroma_tags: [...(props.note.aroma_tags || [])],
      taste_tags: [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.aoc_id       = props.defaultAocId || ''
    form.value.chateau_name = props.defaultChateauName || ''
  }
})

// ── 輔助函數 ──────────────────────────────────────────────────────
const toggleTag = (arr, tag) => {
  const idx = arr.indexOf(tag)
  if (idx === -1) arr.push(tag)
  else arr.splice(idx, 1)
}

// ── Supabase 操作 ─────────────────────────────────────────────────
const save = async () => {
  if (!form.value.chateau_name.trim()) return
  saving.value = true
  const payload = {
    user_id:     authState.user.id,
    aoc_id:      form.value.aoc_id,
    chateau_name: form.value.chateau_name.trim(),
    vintage:     form.value.vintage || null,
    status:      form.value.status,
    rating:      form.value.rating,
    color_desc:  form.value.color_desc,
    aroma_tags:  form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags:  form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin:      form.value.tannin,
    acidity:     form.value.acidity,
    body:        form.value.body,
    finish:      form.value.finish,
    notes:       form.value.notes || null,
  }
  let error
  if (props.note?.id) {
    ;({ error } = await supabase.from('tasting_notes').update(payload).eq('id', props.note.id))
  } else {
    ;({ error } = await supabase.from('tasting_notes').insert(payload))
  }
  saving.value = false
  if (error) { alert('儲存失敗：' + error.message); return }
  emit('save')
}

const confirmDelete = async () => {
  if (!confirm(`確定刪除「${form.value.chateau_name}」的筆記？`)) return
  deleting.value = true
  await supabase.from('tasting_notes').delete().eq('id', props.note.id)
  deleting.value = false
  emit('delete')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

@media (min-width: 640px) {
  .modal-backdrop { align-items: center; }
}

.modal-panel {
  background: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 540px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media (min-width: 640px) {
  .modal-panel { border-radius: 20px; }
}

/* Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.2rem 1.4rem 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
}
.modal-header h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #8B0000;
}
.modal-aoc {
  margin: 2px 0 0;
  font-size: 0.8rem;
  color: #888;
}
.modal-close-btn {
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #555;
  flex-shrink: 0;
}

/* Body */
.modal-body {
  overflow-y: auto;
  flex: 1;
  padding: 0.8rem 1.4rem 1rem;
}

.form-section {
  margin-bottom: 1.4rem;
}
.section-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.7rem;
}

/* 3-column row */
.triple-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.8rem;
}
.form-cell { display: flex; flex-direction: column; gap: 0.4rem; }
.cell-label { font-size: 0.75rem; color: #888; }

/* Status toggle */
.status-toggle { display: flex; flex-direction: column; gap: 4px; }
.stbtn {
  padding: 5px 8px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  color: #666;
  cursor: pointer;
  transition: all 0.15s;
}
.stbtn.active-tried { background: #16a34a; border-color: #16a34a; color: #fff; }
.stbtn.active-wish  { background: #dc2626; border-color: #dc2626; color: #fff; }

/* Vintage input */
.vintage-input {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 0.88rem;
  width: 100%;
  box-sizing: border-box;
}
.text-input {
  border: 1.5px solid #ddd;
  border-radius: 8px;
  padding: 7px 10px;
  font-size: 0.88rem;
  width: 100%;
  box-sizing: border-box;
}
.form-row { display: flex; flex-direction: column; gap: 4px; margin-bottom: 0.7rem; }
.form-row label { font-size: 0.78rem; color: #888; }

/* Star rating */
.star-row { display: flex; gap: 4px; margin-top: 2px; }
.star-btn {
  font-size: 1.3rem;
  color: #ddd;
  cursor: pointer;
  line-height: 1;
  user-select: none;
  transition: color 0.1s;
}
.star-btn.filled { color: #F59E0B; }

/* Climate card */
.climate-card {
  border-radius: 12px;
  margin-bottom: 1.2rem;
  padding: 0.9rem 1rem;
}
.heat-hot    { background: linear-gradient(135deg, #FEE2E2, #FECACA); border: 1px solid #FCA5A5; }
.heat-warm   { background: linear-gradient(135deg, #FEF3C7, #FDE68A); border: 1px solid #FCD34D; }
.heat-normal { background: linear-gradient(135deg, #DCFCE7, #BBF7D0); border: 1px solid #86EFAC; }
.heat-cool   { background: linear-gradient(135deg, #DBEAFE, #BFDBFE); border: 1px solid #93C5FD; }

.climate-card-inner {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.climate-icon { font-size: 1.6rem; }
.climate-text .climate-year { font-size: 0.75rem; color: #666; }
.climate-text .climate-temp { font-size: 0.95rem; font-weight: 600; color: #333; }
.climate-diff { font-size: 0.82rem; color: #555; font-weight: normal; }
.golden-badge {
  margin-left: auto;
  background: #8B0000;
  color: #FFD700;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
}

/* Color palette */
.color-palette { display: flex; gap: 10px; flex-wrap: wrap; }
.color-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 3px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.color-dot.selected { border-color: #333; transform: scale(1.15); }
.color-check { color: white; font-size: 0.9rem; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.6); }
.color-label-hint { font-size: 0.78rem; color: #666; margin-top: 5px; }

/* Tag grid */
.tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.tag-btn {
  padding: 4px 12px;
  font-size: 0.8rem;
  border: 1.5px solid #ddd;
  border-radius: 20px;
  background: #f9f9f9;
  color: #555;
  cursor: pointer;
  transition: all 0.15s;
}
.tag-btn.tag-active {
  background: #8B0000;
  border-color: #8B0000;
  color: #fff;
}

/* Structure */
.structure-grid { display: flex; flex-direction: column; gap: 10px; }
.structure-row { display: flex; align-items: center; gap: 10px; }
.structure-label { font-size: 0.82rem; color: #555; width: 36px; flex-shrink: 0; }
.dot-scale { display: flex; gap: 5px; }
.dot-btn {
  font-size: 1.1rem;
  color: #ddd;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  padding: 2px;
  transition: color 0.1s;
}
.dot-btn.dot-filled { color: #8B0000; }
.structure-hint { font-size: 0.72rem; color: #aaa; min-width: 36px; }

/* Notes textarea */
.notes-textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  color: #333;
  line-height: 1.5;
}
.notes-textarea:focus { outline: none; border-color: #8B0000; }

/* Footer */
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0.9rem 1.4rem 1.1rem;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
}
.btn-delete {
  padding: 9px 18px;
  background: #fff;
  border: 1.5px solid #dc2626;
  color: #dc2626;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-delete:hover:not(:disabled) { background: #dc2626; color: #fff; }
.btn-save {
  padding: 9px 22px;
  background: #8B0000;
  border: none;
  color: #fff;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-save:hover:not(:disabled) { background: #a00000; }
.btn-save:disabled, .btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
