<template>
  <div class="nz-modal-backdrop" @click.self="emit('close')">
    <div class="nz-modal-panel">
      <div class="nz-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="nz-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="nz-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="nz-type-pill" :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="nz-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="nz-modal-body">
        <!-- 酒款類型 -->
        <section class="nz-form-section">
          <h3 class="nz-section-title">🥝 酒款類型</h3>
          <div class="nz-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id"
              :class="['nz-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="nz-type-emoji">{{ t.emoji }}</span>
              <span class="nz-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- 基本資訊 -->
        <section class="nz-form-section">
          <h3 class="nz-section-title">📍 基本資訊</h3>
          <div class="nz-form-row">
            <label class="nz-form-label">酒莊 / 生產者 Winery</label>
            <input v-model="form.producer"
              placeholder="e.g. Cloudy Bay, Villa Maria, Felton Road, Craggy Range…"
              class="nz-text-input" />
          </div>
          <div class="nz-form-row">
            <label class="nz-form-label">主要品種 Grape Variety</label>
            <input v-model="form.grape_variety"
              :list="`nz-grape-list-${form.wine_type || 'sauvignon_blanc'}`"
              placeholder="e.g. Sauvignon Blanc, Pinot Noir, Chardonnay…"
              class="nz-text-input" />
            <datalist :id="`nz-grape-list-${form.wine_type || 'sauvignon_blanc'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="nz-two-col">
            <div class="nz-form-row">
              <label class="nz-form-label">產區 Wine Region</label>
              <select v-model="form.nz_region" class="nz-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="South Island 南島">
                  <option value="Marlborough">Marlborough（馬爾堡）</option>
                  <option value="Central Otago">Central Otago（中奧塔哥）</option>
                  <option value="Nelson">Nelson（尼爾森）</option>
                  <option value="Canterbury/Waipara">Canterbury / Waipara</option>
                </optgroup>
                <optgroup label="North Island 北島">
                  <option value="Hawke's Bay">Hawke's Bay（霍克斯灣）</option>
                  <option value="Martinborough/Wairarapa">Martinborough / Wairarapa</option>
                  <option value="Gisborne">Gisborne（吉斯伯恩）</option>
                  <option value="Auckland">Auckland（奧克蘭）</option>
                  <option value="Northland">Northland</option>
                  <option value="Kumeu">Kumeu</option>
                </optgroup>
              </select>
            </div>
            <div class="nz-form-row">
              <label class="nz-form-label">酒款名稱</label>
              <input v-model="form.doc_id" placeholder="e.g. Cloudy Bay SB, Felton Road Pinot…" class="nz-text-input" />
            </div>
          </div>
        </section>

        <!-- 品飲記錄 -->
        <section class="nz-form-section">
          <h3 class="nz-section-title">🍷 品飲記錄</h3>
          <div class="nz-triple-row">
            <div class="nz-form-cell">
              <label class="nz-cell-label">狀態</label>
              <div class="nz-status-toggle">
                <button :class="['nz-stbtn', form.status === 'tried' && 'tried-active']" @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['nz-stbtn', form.status === 'wishlist' && 'wish-active']" @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="nz-form-cell">
              <label class="nz-cell-label">年份 Vintage</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2030" placeholder="e.g. 2021" class="nz-vintage-input" />
            </div>
            <div class="nz-form-cell">
              <label class="nz-cell-label">評分</label>
              <div class="nz-star-row">
                <span v-for="i in 5" :key="i" :class="['nz-star', form.rating >= i && 'filled']" @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="nz-form-section">
          <h3 class="nz-section-title">🎨 外觀顏色</h3>
          <div class="nz-color-palette">
            <button v-for="c in currentColors" :key="c.id" :title="c.label"
              :class="['nz-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }" @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="nz-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="nz-color-hint">{{ currentColors.find(c => c.id === form.color_desc)?.label }}</p>
        </section>

        <!-- 香氣 -->
        <section v-if="form.status === 'tried'" class="nz-form-section">
          <h3 class="nz-section-title">👃 香氣 Aromas</h3>
          <div class="nz-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['nz-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 口感標籤 -->
        <section v-if="form.status === 'tried'" class="nz-form-section">
          <h3 class="nz-section-title">👅 口感 Palate</h3>
          <div class="nz-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['nz-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 結構感 -->
        <section v-if="form.status === 'tried'" class="nz-form-section">
          <h3 class="nz-section-title">📐 結構感</h3>
          <div class="nz-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="nz-structure-row">
              <span class="nz-structure-label">{{ item.label }}</span>
              <div class="nz-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['nz-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="nz-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- 心得筆記 -->
        <section class="nz-form-section">
          <h3 class="nz-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="nz-notes-textarea"
            placeholder="記錄品飲心得、Marlborough SB 的熱帶果香、Central Otago Pinot 的絲滑單寧、年份特色…" rows="4" />
        </section>
      </div>

      <div class="nz-modal-footer">
        <button v-if="props.note?.id" class="nz-btn-delete" :disabled="deleting" @click="confirmDelete">{{ deleting ? '刪除中…' : '🗑 刪除' }}</button>
        <button class="nz-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: currentTypeColor }" @click="save">{{ saving ? '儲存中…' : '💾 儲存筆記' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const props = defineProps({
  note: { type: Object, default: null },
})
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type: 'sauvignon_blanc', producer: '', grape_variety: '', doc_id: '', nz_region: '',
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: '',
})
const saving = ref(false)
const deleting = ref(false)

const WINE_TYPES = [
  { id: 'sauvignon_blanc', emoji: '🌿', short: 'Sauv. Blanc',  color: '#2A7A2A' },
  { id: 'pinot_noir',      emoji: '🍓', short: 'Pinot Noir',   color: '#8B1A2A' },
  { id: 'chardonnay',      emoji: '🥂', short: 'Chardonnay',   color: '#C4A217' },
  { id: 'pinot_gris',      emoji: '🌸', short: 'Pinot Gris',   color: '#C07A5A' },
  { id: 'riesling',        emoji: '🪨', short: 'Riesling',     color: '#4A7A3A' },
  { id: 'rose',            emoji: '🌹', short: 'Rosé',         color: '#E8598A' },
  { id: 'sparkling',       emoji: '🍾', short: '氣泡',          color: '#B09020' },
  { id: 'other',           emoji: '🥝', short: '其他',          color: '#6B7280' },
]

const GRAPE_SUGGESTIONS = {
  sauvignon_blanc: ['Sauvignon Blanc', 'Sauvignon Blanc/Sémillon'],
  pinot_noir:      ['Pinot Noir'],
  chardonnay:      ['Chardonnay'],
  pinot_gris:      ['Pinot Gris', 'Pinot Grigio'],
  riesling:        ['Riesling'],
  rose:            ['Pinot Noir', 'Syrah', 'Merlot'],
  sparkling:       ['Chardonnay', 'Pinot Noir', 'Sauvignon Blanc'],
  other:           ['Syrah/Shiraz', 'Merlot', 'Cabernet Sauvignon', 'Gewürztraminer', 'Albariño'],
}

const COLORS_BY_TYPE = {
  sauvignon_blanc: [{ id: 'pale-green', label: '淡青綠', color: '#D4EAC8' }, { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }],
  pinot_noir:      [{ id: 'pale-ruby', label: '淡紅寶石', color: '#C0485A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }],
  chardonnay:      [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'gold', label: '金黃', color: '#FFB700' }],
  pinot_gris:      [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'copper', label: '銅色調', color: '#B87A6A' }],
  riesling:        [{ id: 'pale-green', label: '淡青綠', color: '#D4EAC8' }, { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }],
  rose:            [{ id: 'pale-salmon', label: '淡鮭魚粉', color: '#FFB09A' }, { id: 'salmon', label: '鮭魚粉', color: '#FF8070' }, { id: 'deep-rose', label: '深玫瑰', color: '#E84878' }],
  sparkling:       [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }],
  other:           [{ id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }],
}

const AROMAS_BY_TYPE = {
  sauvignon_blanc: ['百香果', '葡萄柚', '萊姆', '醋栗/鵝莓', '甜椒 / 青草', '接骨木花', '燧石 / 礦物', '熱帶水果', '桃子', '花香', '番茄葉', '清新海鹽'],
  pinot_noir:      ['草莓', '覆盆子', '車厘子', '黑醋栗', '玫瑰', '紫羅蘭', '大地 / 腐葉', '蘑菇', '可可', '辛香料', '百里香', '絲滑奶香'],
  chardonnay:      ['桃子', '杏桃', '蘋果', '柑橘', '熱帶水果', '奶油', '香草', '烤麵包', '榛果', '礦物', '蜂蜜', '奶油爆米花'],
  pinot_gris:      ['梨子', '蘋果', '桃子', '玫瑰花水', '辛香料', '蜂蜜', '礦物'],
  riesling:        ['萊姆', '青蘋果', '葡萄柚', '花香', '礦物', '石板', '石油（成熟）'],
  rose:            ['草莓', '覆盆子', '白桃', '花香', '清爽礦物', '西瓜'],
  sparkling:       ['青蘋果', '柑橘', '酵母', '烤麵包', '花香'],
  other:           ['黑果', '藍莓', '辛香料', '草本', '礦物', '橡木', '果香'],
}

const TASTE_TAGS_BY_TYPE = {
  sauvignon_blanc: ['清爽活潑', '酸度鮮明', '果香奔放', '礦物純淨', '草本清新', '熱帶豐沛', '有良好架構', '清爽易飲'],
  pinot_noir:      ['優雅細膩', '透明感', '絲滑單寧', '紅果鮮活', '大地複雜', '清爽酸度', '清澈晶瑩', 'Central Otago 飽滿版', 'Marlborough 清雅版'],
  chardonnay:      ['清爽礦物', '奶油圓潤', '熱帶豐沛', '烤桶明顯', '平衡優雅', '悠長尾韻'],
  pinot_gris:      ['圓潤飽滿', '果香豐沛', '辛香料感', '甜美可口', '平衡清新'],
  riesling:        ['清爽脆口', '礦物純淨', '萊姆鮮活', '長期陳年潛力', '低酸高精'],
  rose:            ['清爽粉嫩', '果香活潑', '夏日首選', '清甜易飲'],
  sparkling:       ['氣泡細緻', '清爽活潑', '果香豐沛'],
  other:           ['平衡', '優雅', '清爽', '果香', '飽滿', '複雜'],
}

const STRUCTURE = [
  { key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] },
  { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
  { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
  { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
]

const currentTypeColor = computed(() => WINE_TYPES.find(t => t.id === (form.value.wine_type || 'other'))?.color || '#6B7280')
const currentGrapeSuggestions = computed(() => GRAPE_SUGGESTIONS[form.value.wine_type || 'other'] || [])
const currentColors = computed(() => COLORS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentAromas = computed(() => AROMAS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentTasteTags = computed(() => TASTE_TAGS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentStructure = computed(() => STRUCTURE)

const selectWineType = (id) => {
  const prev = form.value.wine_type; form.value.wine_type = id
  if (prev !== id) { form.value.color_desc = null; form.value.aroma_tags = []; form.value.taste_tags = []; form.value.tannin = null; form.value.acidity = null; form.value.body = null; form.value.finish = null }
}
const toggleTag = (arr, tag) => { const idx = arr.indexOf(tag); if (idx === -1) arr.push(tag); else arr.splice(idx, 1) }

onMounted(() => {
  if (props.note) {
    form.value = { ...form.value, ...props.note, producer: props.note.chateau_name || '', doc_id: props.note.aoc_id || '', nz_region: props.note.nz_region || '', wine_type: props.note.wine_type || 'sauvignon_blanc', grape_variety: props.note.grape_variety || '', aroma_tags: [...(props.note.aroma_tags || [])], taste_tags: [...(props.note.taste_tags || [])] }
  }
})

const save = async () => {
  const producer = form.value.producer.trim(); if (!producer) return
  saving.value = true
  const payload = {
    user_id: authState.user.id, source: 'newzealand',
    aoc_id: form.value.nz_region || form.value.doc_id?.trim() || 'New Zealand',
    chateau_name: producer, vintage: form.value.vintage || null, status: form.value.status,
    rating: form.value.rating, color_desc: form.value.color_desc,
    aroma_tags: form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags: form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin: form.value.tannin, acidity: form.value.acidity, body: form.value.body, finish: form.value.finish,
    notes: form.value.notes || null, wine_type: form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null, nz_region: form.value.nz_region || null,
  }
  let error
  if (props.note?.id) { ;({ error } = await supabase.from('tasting_notes').update(payload).eq('id', props.note.id)) }
  else { ;({ error } = await supabase.from('tasting_notes').insert(payload)) }
  saving.value = false
  if (error) { alert('儲存失敗：' + error.message); return }
  emit('save')
}
const confirmDelete = async () => {
  if (!confirm(`確定刪除「${form.value.producer}」的筆記？`)) return
  deleting.value = true
  await supabase.from('tasting_notes').delete().eq('id', props.note.id)
  deleting.value = false; emit('delete')
}
</script>

<style scoped>
.nz-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 2100; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 640px) { .nz-modal-backdrop { align-items: center; } }
.nz-modal-panel { background: #fff; border-radius: 20px 20px 0 0; width: 100%; max-width: 580px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; }
@media (min-width: 640px) { .nz-modal-panel { border-radius: 20px; } }
.nz-modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.1rem 1.3rem 0.8rem; border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px; }
.nz-modal-title-block { flex: 1; }
.nz-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.nz-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.nz-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.nz-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; color: #555; }
.nz-modal-close:hover { background: #e5e7eb; }
.nz-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.nz-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.nz-form-section:first-child { border-top: none; }
.nz-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.nz-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
.nz-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.nz-type-btn:hover { border-color: #bbb; }
.nz-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.nz-type-emoji { font-size: 1.2rem; }
.nz-type-name { font-size: 0.63rem; font-weight: 600; text-align: center; }
.nz-form-row { margin-bottom: 0.8rem; }
.nz-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.nz-text-input, .nz-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.nz-text-input:focus, .nz-select:focus { border-color: #2A7A2A; }
.nz-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .nz-two-col { grid-template-columns: 1fr; } }
.nz-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .nz-triple-row { grid-template-columns: 1fr 1fr; } }
.nz-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.nz-status-toggle { display: flex; gap: 6px; }
.nz-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.nz-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.nz-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.nz-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.nz-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.nz-star { color: #ddd; transition: color 0.1s; }
.nz-star.filled { color: #F59E0B; }
.nz-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.nz-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.nz-color-dot.selected { border-color: #333; transform: scale(1.15); }
.nz-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.nz-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.nz-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.nz-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.nz-tag-btn.tag-active { color: #fff; transform: translateY(-1px); }
.nz-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.nz-structure-row { display: flex; align-items: center; gap: 10px; }
.nz-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 50px; flex-shrink: 0; }
.nz-dot-scale { display: flex; gap: 6px; }
.nz-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; padding: 0; line-height: 1; }
.nz-dot-btn.dot-filled { color: #999; }
.nz-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.nz-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.nz-notes-textarea:focus { border-color: #2A7A2A; }
.nz-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.nz-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; }
.nz-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.nz-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.nz-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; min-width: 100px; }
.nz-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.nz-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
