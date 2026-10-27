<template>
  <div class="us-modal-backdrop" @click.self="emit('close')">
    <div class="us-modal-panel">
      <div class="us-modal-header" :style="{ borderBottomColor: typeColor }">
        <div class="us-modal-title-block">
          <h2>{{ form.producer || gt('新增品飲筆記') }}</h2>
          <p v-if="form.appellation" class="us-modal-sub">{{ form.appellation }}</p>
        </div>
        <button class="us-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="us-modal-body">
        <section class="us-sec">
          <h3>{{ gt('🇺🇸 酒款類型') }}</h3>
          <div class="us-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id" class="us-type-btn"
              :class="{ selected: form.wine_type === t.id }"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span>{{ t.emoji }}</span><span>{{ gt(t.short) }}</span>
            </button>
          </div>
        </section>

        <section class="us-sec">
          <h3>{{ gt('📍 基本資訊') }}</h3>
          <label class="us-label">{{ gt('生產者') }}</label>
          <input v-model="form.producer" class="us-input" placeholder="e.g. Kanonkop, Sadie Family …" />
          <label class="us-label">{{ gt('主要品種') }}</label>
          <input v-model="form.grape_variety" class="us-input" list="us-grape-list" placeholder="e.g. Chenin Blanc, Pinotage…" />
          <datalist id="us-grape-list">
            <option v-for="g in GRAPES_BY_TYPE[form.wine_type] || []" :key="g" :value="g" />
          </datalist>
          <label class="us-label">{{ gt('產區（AVA）') }}</label>
          <input v-model="form.appellation" class="us-input" list="us-app-list" placeholder="e.g. Stellenbosch、Swartland、Walker Bay…" />
          <datalist id="us-app-list">
            <option v-for="a in APPELLATIONS" :key="a" :value="a" />
          </datalist>
        </section>

        <section class="us-sec">
          <h3>{{ gt('🍷 品飲記錄') }}</h3>
          <div class="us-triple">
            <div>
              <label class="us-label">{{ gt('狀態') }}</label>
              <div class="us-status">
                <button :class="{ on: form.status === 'tried' }" @click="form.status = 'tried'">{{ gt('✓ 已品飲') }}</button>
                <button :class="{ on: form.status === 'wishlist' }" @click="form.status = 'wishlist'">{{ gt('♡ 想喝') }}</button>
              </div>
            </div>
            <div>
              <label class="us-label">{{ gt('年份') }}</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2035" placeholder="e.g. 2022" class="us-input" />
            </div>
            <div>
              <label class="us-label">{{ gt('評分') }}</label>
              <div class="us-stars">
                <span v-for="i in 5" :key="i" :class="{ filled: form.rating >= i }"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <template v-if="form.status === 'tried'">
          <section v-if="colors.length" class="us-sec">
            <h3>{{ gt('🎨 外觀顏色') }}</h3>
            <div class="us-colors">
              <button v-for="c in colors" :key="c.id" :title="c.label" class="us-color-dot"
                :class="{ selected: form.color_desc === c.id }" :style="{ background: c.color }"
                @click="form.color_desc = form.color_desc === c.id ? null : c.id">
                <span v-if="form.color_desc === c.id">✓</span>
              </button>
            </div>
            <p v-if="form.color_desc" class="us-color-hint">{{ gt(colors.find(c => c.id === form.color_desc)?.label) }}</p>
          </section>

          <section class="us-sec">
            <h3>{{ gt('👃 香氣') }}</h3>
            <div class="us-tags">
              <button v-for="tag in aromas" :key="tag" class="us-tag" :class="{ active: form.aroma_tags.includes(tag) }"
                :style="form.aroma_tags.includes(tag) ? { background: typeColor, borderColor: typeColor } : {}"
                @click="toggleTag(form.aroma_tags, tag)">{{ gt(tag) }}</button>
            </div>
          </section>

          <section class="us-sec">
            <h3>{{ gt('👅 口感') }}</h3>
            <div class="us-tags">
              <button v-for="tag in tasteTags" :key="tag" class="us-tag" :class="{ active: form.taste_tags.includes(tag) }"
                :style="form.taste_tags.includes(tag) ? { background: typeColor, borderColor: typeColor } : {}"
                @click="toggleTag(form.taste_tags, tag)">{{ gt(tag) }}</button>
            </div>
          </section>

          <section class="us-sec">
            <h3>{{ gt('📐 結構感') }}</h3>
            <div v-for="item in structure" :key="item.key" class="us-struct-row">
              <span class="us-struct-label">{{ gt(item.label) }}</span>
              <div class="us-dots">
                <button v-for="i in 5" :key="i" :class="{ filled: form[item.key] >= i }"
                  :style="form[item.key] >= i ? { color: typeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="us-struct-hint">{{ gt(item.hints[(form[item.key] || 0) - 1] || '') }}</span>
            </div>
          </section>
        </template>

        <section class="us-sec">
          <h3>{{ gt('📝 心得筆記') }}</h3>
          <textarea v-model="form.notes" class="us-textarea" rows="4"
            :placeholder="gt('記錄品飲心得、風土與風格連結、與其他產區的比較、適飲期評估…')"></textarea>
        </section>
      </div>

      <div class="us-modal-footer">
        <button v-if="props.note?.id" class="us-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? gt('刪除中…') : gt('🗑 刪除') }}
        </button>
        <button class="us-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: typeColor }" @click="save">
          {{ saving ? gt('儲存中…') : gt('💾 儲存筆記') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gt } from '../../../locales/usotherUi/index.js'
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'
import {
  WINE_TYPES, APPELLATIONS, GRAPES_BY_TYPE, COLORS_BY_TYPE,
  AROMAS_BY_TYPE, TASTE_TAGS_BY_TYPE, STRUCTURE_BY_TYPE
} from '@/data/usother/tastingData.js'

const props = defineProps({ note: { type: Object, default: null } })
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type: 'us_chenin', producer: '', grape_variety: '', appellation: '',
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: ''
})
const saving = ref(false)
const deleting = ref(false)

const typeId = computed(() => form.value.wine_type || 'us_other')
const typeColor = computed(() => WINE_TYPES.find(t => t.id === typeId.value)?.color || '#6B7280')
const colors = computed(() => COLORS_BY_TYPE[typeId.value] || [])
const aromas = computed(() => AROMAS_BY_TYPE[typeId.value] || [])
const tasteTags = computed(() => TASTE_TAGS_BY_TYPE[typeId.value] || [])
const structure = computed(() => STRUCTURE_BY_TYPE[typeId.value] || STRUCTURE_BY_TYPE.us_other)

function selectWineType(id) {
  const prev = form.value.wine_type
  form.value.wine_type = id
  if (prev !== id) {
    Object.assign(form.value, { color_desc: null, aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null })
  }
}
function toggleTag(arr, tag) {
  const i = arr.indexOf(tag)
  if (i === -1) arr.push(tag)
  else arr.splice(i, 1)
}

onMounted(() => {
  if (!props.note) return
  form.value = {
    ...form.value,
    ...props.note,
    producer: props.note.chateau_name || '',
    appellation: props.note.aoc_id || '',
    wine_type: props.note.wine_type || 'us_chenin',
    grape_variety: props.note.grape_variety || '',
    aroma_tags: [...(props.note.aroma_tags || [])],
    taste_tags: [...(props.note.taste_tags || [])],
    notes: props.note.notes || ''
  }
})

async function save() {
  const producer = form.value.producer.trim()
  if (!producer || !authState.user) return
  saving.value = true
  const payload = {
    user_id: authState.user.id,
    source: 'usother',
    aoc_id: form.value.appellation?.trim() || 'UsOther',
    chateau_name: producer,
    vintage: form.value.vintage || null,
    status: form.value.status,
    rating: form.value.rating,
    color_desc: form.value.color_desc,
    aroma_tags: form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags: form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin: form.value.tannin,
    acidity: form.value.acidity,
    body: form.value.body,
    finish: form.value.finish,
    notes: form.value.notes || null,
    wine_type: form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null
  }
  let error
  if (props.note?.id) {
    ;({ error } = await supabase.from('tasting_notes').update(payload).eq('id', props.note.id))
  } else {
    ;({ error } = await supabase.from('tasting_notes').insert(payload))
  }
  saving.value = false
  if (error) { alert(gt('儲存失敗：') + error.message); return }
  emit('save')
}

async function confirmDelete() {
  if (!confirm(gt('確定刪除「{p}」的筆記？', { p: form.value.producer }))) return
  deleting.value = true
  await supabase.from('tasting_notes').delete().eq('id', props.note.id)
  deleting.value = false
  emit('delete')
}
</script>

<style scoped>
.us-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 12px; }
.us-modal-panel { background: #0c2340; color: #f3e8ef; width: 100%; max-width: 640px; max-height: 92vh; border-radius: 18px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); }
.us-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 3px solid; }
.us-modal-header h2 { margin: 0; font-size: 1.15rem; }
.us-modal-sub { margin: 2px 0 0; font-size: 0.82rem; color: #d9aab0; }
.us-modal-close { background: transparent; border: none; color: #d9aab0; font-size: 1.2rem; cursor: pointer; }
.us-modal-body { padding: 16px 20px; overflow-y: auto; flex: 1; }
.us-sec { margin-bottom: 20px; }
.us-sec h3 { margin: 0 0 10px; font-size: 0.95rem; color: #F2C7A3; }
.us-label { display: block; font-size: 0.78rem; color: #d9aab0; margin: 8px 0 4px; }
.us-input, .us-textarea { width: 100%; box-sizing: border-box; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; color: #fff; padding: 9px 12px; font-size: 0.9rem; font-family: inherit; }
.us-input:focus, .us-textarea:focus { outline: none; border-color: #F2C7A3; }
.us-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.us-type-btn { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 8px 4px; border-radius: 12px; border: 1.5px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.05); color: #cfe0f0; cursor: pointer; font-size: 0.8rem; }
.us-triple { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 10px; align-items: start; }
.us-status { display: flex; gap: 6px; }
.us-status button { flex: 1; padding: 8px 4px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.16); background: transparent; color: #d9aab0; cursor: pointer; font-size: 0.8rem; }
.us-status button.on { background: rgba(224,182,74,0.22); color: #fff; border-color: #F2C7A3; }
.us-stars { display: flex; gap: 2px; font-size: 1.4rem; color: rgba(255,255,255,0.2); cursor: pointer; padding-top: 4px; }
.us-stars .filled { color: #F2C7A3; }
.us-colors { display: flex; flex-wrap: wrap; gap: 10px; }
.us-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3); cursor: pointer; color: #000; font-weight: 700; }
.us-color-dot.selected { border-color: #fff; box-shadow: 0 0 0 2px #F2C7A3; }
.us-color-hint { margin: 6px 0 0; font-size: 0.8rem; color: #d9aab0; }
.us-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.us-tag { padding: 5px 11px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); color: #cfe0f0; cursor: pointer; font-size: 0.8rem; }
.us-tag.active { color: #fff; }
.us-struct-row { display: grid; grid-template-columns: 84px auto 1fr; gap: 8px; align-items: center; margin-bottom: 6px; }
.us-struct-label { font-size: 0.82rem; color: #d9aab0; }
.us-dots { display: flex; gap: 2px; }
.us-dots button { background: none; border: none; font-size: 1.15rem; color: rgba(255,255,255,0.2); cursor: pointer; padding: 2px; }
.us-struct-hint { font-size: 0.78rem; color: #8aa3bd; }
.us-textarea { resize: vertical; }
.us-modal-footer { display: flex; gap: 10px; justify-content: flex-end; padding: 12px 20px; border-top: 1px solid rgba(255,255,255,0.1); }
.us-btn-save { padding: 10px 22px; border: none; border-radius: 10px; color: #fff; font-weight: 700; cursor: pointer; }
.us-btn-save:disabled { opacity: 0.45; cursor: not-allowed; }
.us-btn-delete { padding: 10px 16px; background: transparent; border: 1px solid #ef4444; color: #ef4444; border-radius: 10px; cursor: pointer; margin-right: auto; }
@media (max-width: 520px) {
  .us-type-grid { grid-template-columns: repeat(2, 1fr); }
  .us-triple { grid-template-columns: 1fr; }
}
</style>
