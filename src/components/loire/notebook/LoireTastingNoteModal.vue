<template>
  <div class="lr-modal-backdrop" @click.self="emit('close')">
    <div class="lr-modal-panel">

      <!-- Header -->
      <div class="lr-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="lr-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="lr-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="lr-type-pill" :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="lr-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="lr-modal-body">

        <!-- ① 酒款類型 -->
        <section class="lr-form-section">
          <h3 class="lr-section-title">🌊 酒款類型</h3>
          <div class="lr-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id"
              :class="['lr-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="lr-type-emoji">{{ t.emoji }}</span>
              <span class="lr-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="lr-form-section">
          <h3 class="lr-section-title">📍 基本資訊</h3>
          <div class="lr-form-row">
            <label class="lr-form-label">生產者 Producteur</label>
            <input v-model="form.producer"
              placeholder="e.g. Henri Bourgeois, Didier Dagueneau, Château de Villeneuve…"
              class="lr-text-input" />
          </div>
          <div class="lr-form-row">
            <label class="lr-form-label">主要品種 Cépage</label>
            <input v-model="form.grape_variety"
              :list="`lr-grape-list-${form.wine_type || 'sauv'}`"
              placeholder="e.g. Sauvignon Blanc, Chenin Blanc, Cabernet Franc…"
              class="lr-text-input" />
            <datalist :id="`lr-grape-list-${form.wine_type || 'sauv'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="lr-two-col">
            <div class="lr-form-row">
              <label class="lr-form-label">次產區 Sous-Région</label>
              <select v-model="form.lr_region" class="lr-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="Pays Nantais 南特區">
                  <option value="Muscadet Sèvre et Maine">Muscadet Sèvre et Maine</option>
                  <option value="Muscadet Côtes de Grandlieu">Muscadet Côtes de Grandlieu</option>
                  <option value="Muscadet">Muscadet</option>
                  <option value="Gros Plant du Pays Nantais">Gros Plant du Pays Nantais</option>
                </optgroup>
                <optgroup label="Anjou-Saumur 安茹-索米爾">
                  <option value="Anjou">Anjou</option>
                  <option value="Savennières">Savennières</option>
                  <option value="Coteaux du Layon">Coteaux du Layon</option>
                  <option value="Quarts de Chaume">Quarts de Chaume Grand Cru</option>
                  <option value="Bonnezeaux">Bonnezeaux</option>
                  <option value="Saumur">Saumur</option>
                  <option value="Saumur-Champigny">Saumur-Champigny</option>
                  <option value="Crémant de Loire">Crémant de Loire</option>
                </optgroup>
                <optgroup label="Touraine 都漢區">
                  <option value="Touraine">Touraine</option>
                  <option value="Vouvray">Vouvray</option>
                  <option value="Montlouis-sur-Loire">Montlouis-sur-Loire</option>
                  <option value="Chinon">Chinon</option>
                  <option value="Bourgueil">Bourgueil</option>
                  <option value="Saint-Nicolas-de-Bourgueil">Saint-Nicolas-de-Bourgueil</option>
                </optgroup>
                <optgroup label="Centre-Loire 中央羅亞爾">
                  <option value="Sancerre">Sancerre</option>
                  <option value="Pouilly-Fumé">Pouilly-Fumé</option>
                  <option value="Menetou-Salon">Ménétou-Salon</option>
                  <option value="Quincy">Quincy</option>
                  <option value="Reuilly">Reuilly</option>
                </optgroup>
              </select>
            </div>
            <div class="lr-form-row">
              <label class="lr-form-label">酒款名稱（自訂）</label>
              <input v-model="form.doc_id" placeholder="e.g. Les Caillottes, Silex…" class="lr-text-input" />
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="lr-form-section">
          <h3 class="lr-section-title">🍷 品飲記錄</h3>
          <div class="lr-triple-row">
            <div class="lr-form-cell">
              <label class="lr-cell-label">狀態</label>
              <div class="lr-status-toggle">
                <button :class="['lr-stbtn', form.status === 'tried' && 'tried-active']" @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['lr-stbtn', form.status === 'wishlist' && 'wish-active']" @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="lr-form-cell">
              <label class="lr-cell-label">年份 Millésime</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2030" placeholder="e.g. 2021" class="lr-vintage-input" />
            </div>
            <div class="lr-form-cell">
              <label class="lr-cell-label">評分</label>
              <div class="lr-star-row">
                <span v-for="i in 5" :key="i" :class="['lr-star', form.rating >= i && 'filled']" @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="lr-form-section">
          <h3 class="lr-section-title">🎨 外觀顏色</h3>
          <div class="lr-color-palette">
            <button v-for="c in currentColors" :key="c.id" :title="c.label"
              :class="['lr-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }" @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="lr-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="lr-color-hint">{{ currentColors.find(c => c.id === form.color_desc)?.label }}</p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="lr-form-section">
          <h3 class="lr-section-title">👃 香氣 Arômes</h3>
          <div class="lr-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['lr-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="lr-form-section">
          <h3 class="lr-section-title">👅 口感 Bouche</h3>
          <div class="lr-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['lr-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="lr-form-section">
          <h3 class="lr-section-title">📐 結構感</h3>
          <div class="lr-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="lr-structure-row">
              <span class="lr-structure-label">{{ item.label }}</span>
              <div class="lr-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['lr-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="lr-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="lr-form-section">
          <h3 class="lr-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="lr-notes-textarea"
            placeholder="記錄品飲心得、燧石礦感、蜂蜜蠟質、Loire 的靈動感受…" rows="4" />
        </section>
      </div>

      <!-- Footer -->
      <div class="lr-modal-footer">
        <button v-if="props.note?.id" class="lr-btn-delete" :disabled="deleting" @click="confirmDelete">{{ deleting ? '刪除中…' : '🗑 刪除' }}</button>
        <button class="lr-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: currentTypeColor }" @click="save">{{ saving ? '儲存中…' : '💾 儲存筆記' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import { authState } from '@/stores/authStore.js'

const props = defineProps({
  note:            { type: Object, default: null },
  defaultProducer: { type: String, default: '' },
  defaultRegion:   { type: String, default: '' },
})
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type: 'sauv_blanc', producer: '', grape_variety: '', doc_id: '', lr_region: '',
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: '',
})
const saving = ref(false)
const deleting = ref(false)

const WINE_TYPES = [
  { id: 'sauv_blanc',  emoji: '🌿', short: 'Sauvignon B.',   color: '#3D7A3D' },
  { id: 'chenin_dry',  emoji: '🥂', short: 'Chenin Sec',     color: '#C8A000' },
  { id: 'chenin_sweet',emoji: '🍯', short: 'Chenin Doux',    color: '#C07F00' },
  { id: 'cab_franc',   emoji: '🍷', short: 'Cabernet Franc', color: '#8B1A1A' },
  { id: 'muscadet',    emoji: '🦪', short: 'Muscadet',       color: '#5A7A2A' },
  { id: 'rose',        emoji: '🌸', short: 'Rosé',           color: '#D45E8C' },
  { id: 'cremant',     emoji: '🍾', short: 'Crémant',        color: '#C09B20' },
  { id: 'other',       emoji: '🌊', short: '其他',           color: '#4A7A8A' },
]

const GRAPE_SUGGESTIONS = {
  sauv_blanc:   ['Sauvignon Blanc'],
  chenin_dry:   ['Chenin Blanc'],
  chenin_sweet: ['Chenin Blanc'],
  cab_franc:    ['Cabernet Franc', 'Cabernet Sauvignon'],
  muscadet:     ['Melon de Bourgogne (Muscadet)'],
  rose:         ['Cabernet Franc Rosé', 'Pinot Noir Rosé', 'Grolleau'],
  cremant:      ['Chenin Blanc', 'Cabernet Franc', 'Chardonnay', 'Grolleau'],
  other:        ['Pinot Noir', 'Gamay', 'Grolleau', 'Côt (Malbec)', 'Pineau d\'Aunis'],
}

const COLORS_BY_TYPE = {
  sauv_blanc: [
    { id: 'pale-green',  label: '淡青綠', color: '#D4EAC8' },
    { id: 'pale-straw',  label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',   label: '淡金色', color: '#E8C84A' },
  ],
  chenin_dry: [
    { id: 'pale-straw',  label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',   label: '淡金色', color: '#E8C84A' },
    { id: 'gold',        label: '金黃',   color: '#FFB700' },
  ],
  chenin_sweet: [
    { id: 'gold',        label: '金黃',   color: '#FFB700' },
    { id: 'deep-gold',   label: '深金',   color: '#C89B00' },
    { id: 'amber',       label: '琥珀色', color: '#FFBF50' },
  ],
  cab_franc: [
    { id: 'pale-ruby',   label: '淡紅寶石', color: '#C0485A' },
    { id: 'ruby',        label: '紅寶石',   color: '#9B1221' },
    { id: 'garnet',      label: '石榴紅',   color: '#A5174E' },
    { id: 'purple-red',  label: '紫紅',     color: '#6B1B5B' },
  ],
  muscadet: [
    { id: 'pale-green',  label: '淡青綠', color: '#D4EAC8' },
    { id: 'pale-straw',  label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
  ],
  rose: [
    { id: 'pale-rose',   label: '淡玫瑰粉', color: '#FAC4CC' },
    { id: 'salmon',      label: '鮭魚粉',   color: '#FA8072' },
  ],
  cremant: [
    { id: 'pale-straw',  label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
    { id: 'gold',        label: '金黃',   color: '#FFB700' },
  ],
  other: [
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
    { id: 'ruby',        label: '紅寶石', color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  sauv_blanc:   ['白醋栗', '醋栗芽', '葡萄柚', '萊姆皮', '青草', '草本', '燧石', '礦物', '白花', '桃子', '百香果', '蘆筍', '貓尿（典型）', '煙燻'],
  chenin_dry:   ['綠蘋果', '金桂花', '洋槐花', '蜂蜜', '蜂蠟', '杏桃', '白桃', '榛果', '礦物', '燧石', '薑', '丁香', '奶油', '香草'],
  chenin_sweet: ['蜂蜜', '杏桃蜜餞', '桃子乾', '橙花', '薑', '藏紅花', '礦物', '燧石', '貴腐霉（Botrytis）', '糖漬柑橘', '茶香', '太妃糖'],
  cab_franc:    ['覆盆子', '草莓', '紅李', '紫羅蘭', '玫瑰', '甜椒', '草本', '碎石板岩', '礦物', '皮革', '腐葉', '鉛筆屑', '丁香', '煙燻'],
  muscadet:     ['青蘋果', '萊姆', '葡萄柚', '海鹽', '礦物', '酵母（Muscadet sur Lie）', '麵包屑', '白花', '碘味'],
  rose:         ['草莓', '覆盆子', '桃子', '石榴', '玫瑰花瓣', '柑橘'],
  cremant:      ['青蘋果', '柑橘', '酵母', '烤麵包', '礦物', '蜂蜜', '榛果'],
  other:        ['果香', '花香', '礦物', '草本', '香料', '大地'],
}

const TASTE_TAGS_BY_TYPE = {
  sauv_blanc:   ['清爽脆口', '礦物純淨', '燧石感強', '草本活潑', '花香馥郁', '悠長尾韻', '精準優雅', '高酸活潑'],
  chenin_dry:   ['礦物純淨', '蠟質感', '酸度挺立', '蜂蜜圓潤', '複雜深邃', '長期陳年', '燧石感', '細緻優雅'],
  chenin_sweet: ['甜蜜豐潤', '貴腐複雜', '蜂蜜濃郁', '高酸平衡', '礦物底韻', '悠長尾韻', '層次豐富'],
  cab_franc:    ['輕盈優雅', '礦物感', '甜椒草本', '紫羅蘭鮮活', '清爽活潑', '絲滑單寧', '果味純粹', '碎石質感'],
  muscadet:     ['清爽脆口', '鹹鮮礦物', '酵母複雜（Sur Lie）', '清淡純粹', '海風口感', '適合生蠔'],
  rose:         ['清爽乾型', '豐沛果香', '活潑清脆'],
  cremant:      ['細緻氣泡', '清爽活潑', '酵母複雜', '礦物清純'],
  other:        ['平衡', '優雅', '清爽', '果香'],
}

const STRUCTURE_BY_TYPE = {
  sauv_blanc:   [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  chenin_dry:   [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  chenin_sweet: [{ key: 'tannin', label: '甜度', hints: ['微甜', '中甜', '甜', '很甜', '極甜'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '清新'] }, { key: 'body', label: '濃郁度', hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] }, { key: 'finish', label: '尾韻', hints: ['短促', '中等', '悠長', '極長', '永恆'] }],
  cab_franc:    [{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  muscadet:     [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  rose:         [{ key: 'tannin', label: '單寧', hints: ['無', '極輕', '輕柔', '稍緊', '紮實'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  cremant:      [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  other:        [{ key: 'tannin', label: '結構', hints: ['1', '2', '3', '4', '5'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
}

const currentTypeColor = computed(() => WINE_TYPES.find(t => t.id === (form.value.wine_type || 'other'))?.color || '#4A7A8A')
const currentGrapeSuggestions = computed(() => GRAPE_SUGGESTIONS[form.value.wine_type || 'other'] || [])
const currentColors = computed(() => COLORS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentAromas = computed(() => AROMAS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentTasteTags = computed(() => TASTE_TAGS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentStructure = computed(() => STRUCTURE_BY_TYPE[form.value.wine_type || 'other'] || STRUCTURE_BY_TYPE.other)

const selectWineType = (id) => {
  const prev = form.value.wine_type; form.value.wine_type = id
  if (prev !== id) { form.value.color_desc = null; form.value.aroma_tags = []; form.value.taste_tags = []; form.value.tannin = null; form.value.acidity = null; form.value.body = null; form.value.finish = null }
}
const toggleTag = (arr, tag) => { const idx = arr.indexOf(tag); if (idx === -1) arr.push(tag); else arr.splice(idx, 1) }

onMounted(() => {
  if (props.note) {
    form.value = { ...form.value, ...props.note, producer: props.note.chateau_name || '', doc_id: props.note.aoc_id || '', lr_region: props.note.lr_region || '', wine_type: props.note.wine_type || 'sauv_blanc', grape_variety: props.note.grape_variety || '', aroma_tags: [...(props.note.aroma_tags || [])], taste_tags: [...(props.note.taste_tags || [])] }
  } else { form.value.producer = props.defaultProducer || ''; form.value.lr_region = props.defaultRegion || '' }
})

const save = async () => {
  const producer = form.value.producer.trim(); if (!producer) return
  saving.value = true
  const payload = {
    user_id: authState.user.id, source: 'loire',
    aoc_id: form.value.lr_region || form.value.doc_id?.trim() || 'Loire Valley',
    chateau_name: producer, vintage: form.value.vintage || null, status: form.value.status,
    rating: form.value.rating, color_desc: form.value.color_desc,
    aroma_tags: form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags: form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin: form.value.tannin, acidity: form.value.acidity, body: form.value.body, finish: form.value.finish,
    notes: form.value.notes || null, wine_type: form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null, lr_region: form.value.lr_region || null,
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
.lr-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 2100; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 640px) { .lr-modal-backdrop { align-items: center; } }
.lr-modal-panel { background: #fff; border-radius: 20px 20px 0 0; width: 100%; max-width: 580px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; }
@media (min-width: 640px) { .lr-modal-panel { border-radius: 20px; } }
.lr-modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.1rem 1.3rem 0.8rem; border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px; }
.lr-modal-title-block { flex: 1; }
.lr-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.lr-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.lr-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.lr-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; color: #555; }
.lr-modal-close:hover { background: #e5e7eb; }
.lr-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.lr-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.lr-form-section:first-child { border-top: none; }
.lr-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.lr-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
@media (max-width: 480px) { .lr-type-grid { grid-template-columns: repeat(3, 1fr); } }
.lr-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.lr-type-btn:hover { border-color: #bbb; }
.lr-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.lr-type-emoji { font-size: 1.2rem; }
.lr-type-name { font-size: 0.63rem; font-weight: 600; text-align: center; }
.lr-form-row { margin-bottom: 0.8rem; }
.lr-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.lr-text-input, .lr-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.lr-text-input:focus, .lr-select:focus { border-color: #3D7A3D; }
.lr-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .lr-two-col { grid-template-columns: 1fr; } }
.lr-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .lr-triple-row { grid-template-columns: 1fr 1fr; } }
.lr-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.lr-status-toggle { display: flex; gap: 6px; }
.lr-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.lr-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.lr-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.lr-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.lr-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.lr-star { color: #ddd; transition: color 0.1s; }
.lr-star.filled { color: #F59E0B; }
.lr-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.lr-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.lr-color-dot.selected { border-color: #333; transform: scale(1.15); }
.lr-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.lr-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.lr-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.lr-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.lr-tag-btn:hover { border-color: #bbb; }
.lr-tag-btn.tag-active { color: #fff; transform: translateY(-1px); }
.lr-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.lr-structure-row { display: flex; align-items: center; gap: 10px; }
.lr-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 50px; flex-shrink: 0; }
.lr-dot-scale { display: flex; gap: 6px; }
.lr-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; padding: 0; line-height: 1; }
.lr-dot-btn.dot-filled { color: #999; }
.lr-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.lr-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.lr-notes-textarea:focus { border-color: #3D7A3D; }
.lr-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.lr-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; }
.lr-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.lr-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.lr-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; min-width: 100px; }
.lr-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.lr-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
