<template>
  <div class="ca-modal-backdrop" @click.self="emit('close')">
    <div class="ca-modal-panel">

      <!-- Header -->
      <div class="ca-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="ca-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="ca-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="ca-type-pill" :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="ca-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="ca-modal-body">

        <!-- ① 酒款類型 -->
        <section class="ca-form-section">
          <h3 class="ca-section-title">🌟 酒款類型</h3>
          <div class="ca-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id"
              :class="['ca-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="ca-type-emoji">{{ t.emoji }}</span>
              <span class="ca-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="ca-form-section">
          <h3 class="ca-section-title">📍 基本資訊</h3>
          <div class="ca-form-row">
            <label class="ca-form-label">酒莊 / 生產者 Winery</label>
            <input v-model="form.producer"
              placeholder="e.g. Opus One, Screaming Eagle, Ridge, Kosta Browne…"
              class="ca-text-input" />
          </div>
          <div class="ca-form-row">
            <label class="ca-form-label">主要品種 Grape Variety</label>
            <input v-model="form.grape_variety"
              :list="`ca-grape-list-${form.wine_type || 'cab'}`"
              placeholder="e.g. Cabernet Sauvignon, Pinot Noir, Chardonnay…"
              class="ca-text-input" />
            <datalist :id="`ca-grape-list-${form.wine_type || 'cab'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="ca-two-col">
            <div class="ca-form-row">
              <label class="ca-form-label">AVA 產區</label>
              <select v-model="form.ca_region" class="ca-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="Napa Valley">
                  <option value="Napa Valley">Napa Valley</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Rutherford">Rutherford</option>
                  <option value="Stags Leap District">Stags Leap District</option>
                  <option value="Mount Veeder">Mount Veeder</option>
                  <option value="Spring Mountain">Spring Mountain</option>
                  <option value="Howell Mountain">Howell Mountain</option>
                  <option value="Carneros (Napa)">Carneros (Napa)</option>
                </optgroup>
                <optgroup label="Sonoma County">
                  <option value="Sonoma County">Sonoma County</option>
                  <option value="Russian River Valley">Russian River Valley</option>
                  <option value="Sonoma Coast">Sonoma Coast</option>
                  <option value="Alexander Valley">Alexander Valley</option>
                  <option value="Dry Creek Valley">Dry Creek Valley</option>
                  <option value="Sonoma Valley">Sonoma Valley</option>
                  <option value="Carneros (Sonoma)">Carneros (Sonoma)</option>
                </optgroup>
                <optgroup label="Central Coast">
                  <option value="Santa Barbara County">Santa Barbara County</option>
                  <option value="Sta. Rita Hills">Sta. Rita Hills</option>
                  <option value="Santa Ynez Valley">Santa Ynez Valley</option>
                  <option value="Paso Robles">Paso Robles</option>
                  <option value="Santa Cruz Mountains">Santa Cruz Mountains</option>
                  <option value="Monterey">Monterey</option>
                  <option value="Santa Lucia Highlands">Santa Lucia Highlands</option>
                  <option value="Arroyo Seco">Arroyo Seco</option>
                </optgroup>
                <optgroup label="其他">
                  <option value="Mendocino">Mendocino</option>
                  <option value="Anderson Valley">Anderson Valley</option>
                  <option value="Sierra Foothills">Sierra Foothills</option>
                  <option value="Lodi">Lodi</option>
                  <option value="Carneros">Carneros</option>
                  <option value="California">California (State)</option>
                </optgroup>
              </select>
            </div>
            <div class="ca-form-row">
              <label class="ca-form-label">酒款名稱（自訂）</label>
              <input v-model="form.doc_id" placeholder="e.g. Reserve, To Kalon, SLH…" class="ca-text-input" />
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="ca-form-section">
          <h3 class="ca-section-title">🍷 品飲記錄</h3>
          <div class="ca-triple-row">
            <div class="ca-form-cell">
              <label class="ca-cell-label">狀態</label>
              <div class="ca-status-toggle">
                <button :class="['ca-stbtn', form.status === 'tried' && 'tried-active']" @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['ca-stbtn', form.status === 'wishlist' && 'wish-active']" @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="ca-form-cell">
              <label class="ca-cell-label">年份 Vintage</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2030" placeholder="e.g. 2019" class="ca-vintage-input" />
            </div>
            <div class="ca-form-cell">
              <label class="ca-cell-label">評分</label>
              <div class="ca-star-row">
                <span v-for="i in 5" :key="i" :class="['ca-star', form.rating >= i && 'filled']" @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="ca-form-section">
          <h3 class="ca-section-title">🎨 外觀顏色</h3>
          <div class="ca-color-palette">
            <button v-for="c in currentColors" :key="c.id" :title="c.label"
              :class="['ca-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }" @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="ca-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="ca-color-hint">{{ currentColors.find(c => c.id === form.color_desc)?.label }}</p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="ca-form-section">
          <h3 class="ca-section-title">👃 香氣 Aromas</h3>
          <div class="ca-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['ca-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="ca-form-section">
          <h3 class="ca-section-title">👅 口感 Palate</h3>
          <div class="ca-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['ca-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="ca-form-section">
          <h3 class="ca-section-title">📐 結構感 Structure</h3>
          <div class="ca-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="ca-structure-row">
              <span class="ca-structure-label">{{ item.label }}</span>
              <div class="ca-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['ca-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="ca-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="ca-form-section">
          <h3 class="ca-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="ca-notes-textarea"
            placeholder="記錄品飲心得、巴黎評判印象、年份特色、食物搭配…" rows="4" />
        </section>

      </div>

      <!-- Footer -->
      <div class="ca-modal-footer">
        <button v-if="props.note?.id" class="ca-btn-delete" :disabled="deleting" @click="confirmDelete">{{ deleting ? '刪除中…' : '🗑 刪除' }}</button>
        <button class="ca-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: currentTypeColor }" @click="save">{{ saving ? '儲存中…' : '💾 儲存筆記' }}</button>
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
  wine_type: 'cabernet', producer: '', grape_variety: '', doc_id: '', ca_region: '',
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: '',
})
const saving = ref(false)
const deleting = ref(false)

const WINE_TYPES = [
  { id: 'cabernet',    emoji: '🍷', short: 'Cabernet S.',   color: '#7B1A1A' },
  { id: 'pinot_noir',  emoji: '🍓', short: 'Pinot Noir',    color: '#9B1B30' },
  { id: 'zinfandel',   emoji: '🔥', short: 'Zinfandel',     color: '#8B2500' },
  { id: 'chardonnay',  emoji: '🥂', short: 'Chardonnay',    color: '#C4A217' },
  { id: 'other_white', emoji: '🫧', short: '其他白酒',       color: '#A0890A' },
  { id: 'rose',        emoji: '🌸', short: '粉紅酒 Rosé',   color: '#D45E8C' },
  { id: 'sparkling',   emoji: '🍾', short: '氣泡 Sparkling',color: '#C09B20' },
  { id: 'other',       emoji: '🌟', short: '其他 Other',    color: '#6B7280' },
]

const GRAPE_SUGGESTIONS = {
  cabernet:    ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot', 'Malbec', 'Meritage Blend'],
  pinot_noir:  ['Pinot Noir'],
  zinfandel:   ['Zinfandel', 'Primitivo', 'Zinfandel Blend'],
  chardonnay:  ['Chardonnay'],
  other_white: ['Sauvignon Blanc', 'Viognier', 'Pinot Gris', 'Riesling', 'Grenache Blanc', 'Roussanne', 'Marsanne'],
  rose:        ['Pinot Noir Rosé', 'Grenache Rosé', 'Zinfandel Rosé', 'Cabernet Sauvignon Rosé'],
  sparkling:   ['Chardonnay', 'Pinot Noir', 'Pinot Meunier', 'Blanc de Blancs', 'Blanc de Noirs'],
  other:       [],
}

const COLORS_BY_TYPE = {
  cabernet:   [
    { id: 'ruby',       label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',     label: '石榴紅',   color: '#A5174E' },
    { id: 'deep-ruby',  label: '深紅寶石', color: '#7B0020' },
    { id: 'purple-red', label: '紫紅色',   color: '#6B0B5B' },
  ],
  pinot_noir: [
    { id: 'pale-ruby',  label: '淡紅寶石', color: '#C0485A' },
    { id: 'ruby',       label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',     label: '石榴紅',   color: '#A5174E' },
  ],
  zinfandel:  [
    { id: 'ruby',       label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',     label: '石榴紅',   color: '#A5174E' },
    { id: 'deep-ruby',  label: '深紅寶石', color: '#7B0020' },
  ],
  chardonnay: [
    { id: 'pale-straw', label: '淡草黃',   color: '#F5EFB2' },
    { id: 'straw',      label: '草黃',     color: '#E8D86A' },
    { id: 'gold',       label: '金黃',     color: '#FFB700' },
    { id: 'deep-gold',  label: '深金黃',   color: '#C89B00' },
  ],
  other_white:[
    { id: 'pale-green', label: '淡青綠',   color: '#D4EAC8' },
    { id: 'straw',      label: '草黃',     color: '#E8D86A' },
    { id: 'gold',       label: '金黃',     color: '#FFB700' },
  ],
  rose: [
    { id: 'pale-rose',  label: '淡玫瑰粉', color: '#FAC4CC' },
    { id: 'salmon',     label: '鮭魚粉',   color: '#FA8072' },
    { id: 'coral',      label: '珊瑚粉',   color: '#F06080' },
  ],
  sparkling: [
    { id: 'pale-straw', label: '淡草黃',   color: '#F5EFB2' },
    { id: 'straw',      label: '草黃',     color: '#E8D86A' },
    { id: 'gold',       label: '金黃',     color: '#FFB700' },
  ],
  other: [
    { id: 'straw',      label: '草黃',     color: '#E8D86A' },
    { id: 'ruby',       label: '紅寶石',   color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  cabernet: ['黑醋栗', '黑莓', '黑李', '藍莓', '梅乾', '雪松', '橡木', '香草', '咖啡', '可可', '辛香料', '薄荷', '尤加利', '鼻菸草', '皮革', '石墨', '礦物'],
  pinot_noir: ['草莓', '覆盆子', '紅醋栗', '車厘子', '紅李', '玫瑰', '紫羅蘭', '大地氣息', '蘑菇', '腐葉', '香草', '可可', '辛香料', '煙燻'],
  zinfandel: ['覆盆子醬', '黑莓醬', '藍莓', '車厘子', '黑胡椒', '丁香', '甘草', '香草', '可可', '菸草', '焦糖', '咖啡', '辛香料'],
  chardonnay: ['青蘋果', '水梨', '桃子', '杏桃', '鳳梨', '芒果', '香草', '奶油', '烤土司', '榛果', '焦糖', '礦物', '奶油爆米花', '烤木桶'],
  other_white: ['百香果', '葡萄柚', '萊姆', '水蜜桃', '荔枝', '玫瑰花', '橙花', '礦物', '青草', '蜂蜜'],
  rose:      ['草莓', '覆盆子', '桃子', '西瓜', '石榴', '玫瑰花瓣', '柑橘', '橙皮'],
  sparkling: ['青蘋果', '柑橘', '萊姆', '奶油', '烤麵包', '酵母', '核桃', '榛果', '蜂蜜', '礦物'],
  other:     ['果香', '花香', '礦物', '香料', '橡木', '大地'],
}

const TASTE_TAGS_BY_TYPE = {
  cabernet:    ['飽滿渾厚', '單寧緊實', '黑果濃郁', '橡木明顯', '長期陳年', '雪松優雅', '礦物感', '辛香料感', '絲滑單寧'],
  pinot_noir:  ['優雅細膩', '透明感', '紅果鮮活', '絲滑單寧', '大地氣息', '礦物感', '俯仰烏蘇拉風格', '清爽活潑'],
  zinfandel:   ['飽滿果醬', '辛香料感', '甜美順口', '高酒精感', '胡椒強勁', '烤果甜香', '濃縮飽滿'],
  chardonnay:  ['奶油圓潤', '烤桶明顯', '礦物純淨', '清爽活潑', '熱帶果香', '蘋果清新', '悠長尾韻'],
  other_white: ['清爽脆口', '花香馥郁', '礦物感', '熱帶果香', '蜂蜜豐厚', '活潑酸度'],
  rose:        ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻'],
  sparkling:   ['細緻氣泡', '清爽活潑', '奶油圓潤', '礦物清純', '酵母複雜'],
  other:       ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  cabernet:   [
    { key: 'tannin',  label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  pinot_noir: [
    { key: 'tannin',  label: '單寧', hints: ['幾乎無', '輕柔', '輕-中', '中等', '緊實'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  zinfandel:  [
    { key: 'tannin',  label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  chardonnay: [
    { key: 'tannin',  label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  other_white:[
    { key: 'tannin',  label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rose:       [
    { key: 'tannin',  label: '單寧', hints: ['無', '極輕', '輕柔', '稍緊', '紮實'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  sparkling:  [
    { key: 'tannin',  label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  other: [
    { key: 'tannin',  label: '結構', hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

const currentTypeColor = computed(() => WINE_TYPES.find(t => t.id === (form.value.wine_type || 'other'))?.color || '#6B7280')
const currentGrapeSuggestions = computed(() => GRAPE_SUGGESTIONS[form.value.wine_type || 'other'] || [])
const currentColors = computed(() => COLORS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentAromas = computed(() => AROMAS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentTasteTags = computed(() => TASTE_TAGS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentStructure = computed(() => STRUCTURE_BY_TYPE[form.value.wine_type || 'other'] || STRUCTURE_BY_TYPE.other)

const selectWineType = (id) => {
  const prev = form.value.wine_type
  form.value.wine_type = id
  if (prev !== id) {
    form.value.color_desc = null; form.value.aroma_tags = []
    form.value.taste_tags = []; form.value.tannin = null
    form.value.acidity = null; form.value.body = null; form.value.finish = null
  }
}
const toggleTag = (arr, tag) => {
  const idx = arr.indexOf(tag); if (idx === -1) arr.push(tag); else arr.splice(idx, 1)
}

onMounted(() => {
  if (props.note) {
    form.value = {
      ...form.value, ...props.note,
      producer: props.note.chateau_name || '',
      doc_id: props.note.aoc_id || '',
      ca_region: props.note.ca_region || '',
      wine_type: props.note.wine_type || 'cabernet',
      grape_variety: props.note.grape_variety || '',
      aroma_tags: [...(props.note.aroma_tags || [])],
      taste_tags: [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer  = props.defaultProducer || ''
    form.value.ca_region = props.defaultRegion   || ''
  }
})

const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true
  const payload = {
    user_id: authState.user.id, source: 'california',
    aoc_id:        form.value.ca_region || form.value.doc_id?.trim() || 'California',
    chateau_name:  producer,
    vintage:       form.value.vintage || null,
    status:        form.value.status,
    rating:        form.value.rating,
    color_desc:    form.value.color_desc,
    aroma_tags:    form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags:    form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin:        form.value.tannin, acidity: form.value.acidity,
    body:          form.value.body,   finish:  form.value.finish,
    notes:         form.value.notes || null,
    wine_type:     form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null,
    ca_region:     form.value.ca_region || null,
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
  if (!confirm(`確定刪除「${form.value.producer}」的筆記？`)) return
  deleting.value = true
  await supabase.from('tasting_notes').delete().eq('id', props.note.id)
  deleting.value = false
  emit('delete')
}
</script>

<style scoped>
.ca-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 2100; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 640px) { .ca-modal-backdrop { align-items: center; } }
.ca-modal-panel { background: #fff; border-radius: 20px 20px 0 0; width: 100%; max-width: 580px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; }
@media (min-width: 640px) { .ca-modal-panel { border-radius: 20px; } }
.ca-modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.1rem 1.3rem 0.8rem; border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px; }
.ca-modal-title-block { flex: 1; }
.ca-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.ca-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.ca-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.ca-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; flex-shrink: 0; color: #555; }
.ca-modal-close:hover { background: #e5e7eb; }
.ca-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.ca-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.ca-form-section:first-child { border-top: none; }
.ca-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.ca-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
@media (max-width: 480px) { .ca-type-grid { grid-template-columns: repeat(3, 1fr); } }
.ca-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.ca-type-btn:hover { border-color: #bbb; }
.ca-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.ca-type-emoji { font-size: 1.2rem; }
.ca-type-name { font-size: 0.63rem; font-weight: 600; text-align: center; }
.ca-form-row { margin-bottom: 0.8rem; }
.ca-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.ca-text-input, .ca-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.ca-text-input:focus, .ca-select:focus { border-color: #7B1A1A; }
.ca-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .ca-two-col { grid-template-columns: 1fr; } }
.ca-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .ca-triple-row { grid-template-columns: 1fr 1fr; } }
.ca-form-cell { }
.ca-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.ca-status-toggle { display: flex; gap: 6px; }
.ca-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.ca-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.ca-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.ca-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.ca-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.ca-star { color: #ddd; transition: color 0.1s; }
.ca-star.filled { color: #F59E0B; }
.ca-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.ca-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.ca-color-dot.selected { border-color: #333; transform: scale(1.15); }
.ca-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.ca-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.ca-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.ca-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.ca-tag-btn:hover { border-color: #bbb; }
.ca-tag-btn.tag-active { color: #fff; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.15); }
.ca-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.ca-structure-row { display: flex; align-items: center; gap: 10px; }
.ca-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 50px; flex-shrink: 0; }
.ca-dot-scale { display: flex; gap: 6px; }
.ca-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; transition: color 0.1s; padding: 0; line-height: 1; }
.ca-dot-btn.dot-filled { color: #999; }
.ca-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.ca-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.ca-notes-textarea:focus { border-color: #7B1A1A; }
.ca-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.ca-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.ca-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.ca-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.ca-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: all 0.15s; min-width: 100px; }
.ca-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.ca-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
