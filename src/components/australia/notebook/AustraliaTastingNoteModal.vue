<template>
  <div class="au-modal-backdrop" @click.self="emit('close')">
    <div class="au-modal-panel">
      <div class="au-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="au-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="au-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="au-type-pill" :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="au-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="au-modal-body">
        <!-- 酒款類型 -->
        <section class="au-form-section">
          <h3 class="au-section-title">🦘 酒款類型</h3>
          <div class="au-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id"
              :class="['au-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="au-type-emoji">{{ t.emoji }}</span>
              <span class="au-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- 基本資訊 -->
        <section class="au-form-section">
          <h3 class="au-section-title">📍 基本資訊</h3>
          <div class="au-form-row">
            <label class="au-form-label">酒莊 / 生產者 Winery</label>
            <input v-model="form.producer"
              placeholder="e.g. Penfolds, Henschke, Leeuwin Estate, Yalumba…"
              class="au-text-input" />
          </div>
          <div class="au-form-row">
            <label class="au-form-label">主要品種 Grape Variety</label>
            <input v-model="form.grape_variety"
              :list="`au-grape-list-${form.wine_type || 'shiraz'}`"
              placeholder="e.g. Shiraz, Cabernet Sauvignon, Chardonnay…"
              class="au-text-input" />
            <datalist :id="`au-grape-list-${form.wine_type || 'shiraz'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="au-two-col">
            <div class="au-form-row">
              <label class="au-form-label">產區 Wine Region</label>
              <select v-model="form.au_region" class="au-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="South Australia 南澳">
                  <option value="Barossa Valley">Barossa Valley</option>
                  <option value="Eden Valley">Eden Valley</option>
                  <option value="Clare Valley">Clare Valley</option>
                  <option value="McLaren Vale">McLaren Vale</option>
                  <option value="Coonawarra">Coonawarra</option>
                  <option value="Adelaide Hills">Adelaide Hills</option>
                  <option value="Langhorne Creek">Langhorne Creek</option>
                  <option value="Padthaway">Padthaway</option>
                </optgroup>
                <optgroup label="Victoria 維多利亞">
                  <option value="Yarra Valley">Yarra Valley</option>
                  <option value="Mornington Peninsula">Mornington Peninsula</option>
                  <option value="Heathcote">Heathcote</option>
                  <option value="Grampians">Grampians</option>
                  <option value="King Valley">King Valley</option>
                  <option value="Rutherglen">Rutherglen</option>
                </optgroup>
                <optgroup label="Western Australia 西澳">
                  <option value="Margaret River">Margaret River</option>
                  <option value="Great Southern">Great Southern</option>
                  <option value="Swan District">Swan District</option>
                </optgroup>
                <optgroup label="New South Wales 新南威爾斯">
                  <option value="Hunter Valley">Hunter Valley</option>
                  <option value="Orange">Orange</option>
                  <option value="Mudgee">Mudgee</option>
                  <option value="Hilltops">Hilltops</option>
                </optgroup>
                <optgroup label="Tasmania & Others">
                  <option value="Tasmania">Tasmania</option>
                  <option value="Canberra District">Canberra District</option>
                  <option value="Queensland">Queensland</option>
                </optgroup>
              </select>
            </div>
            <div class="au-form-row">
              <label class="au-form-label">酒款名稱</label>
              <input v-model="form.doc_id" placeholder="e.g. Grange, Hill of Grace, Bin 707…" class="au-text-input" />
            </div>
          </div>
        </section>

        <!-- 品飲記錄 -->
        <section class="au-form-section">
          <h3 class="au-section-title">🍷 品飲記錄</h3>
          <div class="au-triple-row">
            <div class="au-form-cell">
              <label class="au-cell-label">狀態</label>
              <div class="au-status-toggle">
                <button :class="['au-stbtn', form.status === 'tried' && 'tried-active']" @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['au-stbtn', form.status === 'wishlist' && 'wish-active']" @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="au-form-cell">
              <label class="au-cell-label">年份 Vintage</label>
              <input type="number" v-model.number="form.vintage" min="1950" max="2030" placeholder="e.g. 2018" class="au-vintage-input" />
            </div>
            <div class="au-form-cell">
              <label class="au-cell-label">評分</label>
              <div class="au-star-row">
                <span v-for="i in 5" :key="i" :class="['au-star', form.rating >= i && 'filled']" @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="au-form-section">
          <h3 class="au-section-title">🎨 外觀顏色</h3>
          <div class="au-color-palette">
            <button v-for="c in currentColors" :key="c.id" :title="c.label"
              :class="['au-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }" @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="au-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="au-color-hint">{{ currentColors.find(c => c.id === form.color_desc)?.label }}</p>
        </section>

        <!-- 香氣 -->
        <section v-if="form.status === 'tried'" class="au-form-section">
          <h3 class="au-section-title">👃 香氣 Aromas</h3>
          <div class="au-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['au-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 口感標籤 -->
        <section v-if="form.status === 'tried'" class="au-form-section">
          <h3 class="au-section-title">👅 口感 Palate</h3>
          <div class="au-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['au-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 結構感 -->
        <section v-if="form.status === 'tried'" class="au-form-section">
          <h3 class="au-section-title">📐 結構感</h3>
          <div class="au-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="au-structure-row">
              <span class="au-structure-label">{{ item.label }}</span>
              <div class="au-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['au-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="au-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- 心得筆記 -->
        <section class="au-form-section">
          <h3 class="au-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="au-notes-textarea"
            placeholder="記錄品飲心得、Barossa 老藤 Shiraz 印象、Penfolds 系列、年份特色…" rows="4" />
        </section>
      </div>

      <div class="au-modal-footer">
        <button v-if="props.note?.id" class="au-btn-delete" :disabled="deleting" @click="confirmDelete">{{ deleting ? '刪除中…' : '🗑 刪除' }}</button>
        <button class="au-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: currentTypeColor }" @click="save">{{ saving ? '儲存中…' : '💾 儲存筆記' }}</button>
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
  defaultProducer: { type: String, default: '' },
  defaultRegion: { type: String, default: '' },
})
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type: 'shiraz', producer: '', grape_variety: '', doc_id: '', au_region: '',
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: '',
})
const saving = ref(false)
const deleting = ref(false)

const WINE_TYPES = [
  { id: 'shiraz',    emoji: '🦘', short: 'Shiraz',      color: '#8B1A1A' },
  { id: 'cabernet',  emoji: '🍷', short: 'Cabernet S.', color: '#7B0020' },
  { id: 'chardonnay',emoji: '🥂', short: 'Chardonnay',  color: '#C4A217' },
  { id: 'riesling',  emoji: '🌿', short: 'Riesling',    color: '#5A8A3A' },
  { id: 'pinot_noir',emoji: '🍓', short: 'Pinot Noir',  color: '#9B1B30' },
  { id: 'grenache',  emoji: '🔥', short: 'Grenache',    color: '#C04A00' },
  { id: 'sparkling', emoji: '🍾', short: '氣泡',         color: '#C09B20' },
  { id: 'fortified', emoji: '🥃', short: '加烈酒',       color: '#8B6914' },
  { id: 'other',     emoji: '🌏', short: '其他',         color: '#6B7280' },
]

const GRAPE_SUGGESTIONS = {
  shiraz:     ['Shiraz', 'Shiraz/Viognier', 'Syrah'],
  cabernet:   ['Cabernet Sauvignon', 'Cabernet Sauvignon/Shiraz', 'Cabernet Sauvignon/Merlot', 'Cabernet Franc'],
  chardonnay: ['Chardonnay'],
  riesling:   ['Riesling'],
  pinot_noir: ['Pinot Noir'],
  grenache:   ['Grenache', 'Grenache/Shiraz/Mourvèdre (GSM)', 'Grenache Blanc'],
  sparkling:  ['Chardonnay', 'Pinot Noir', 'Sparkling Shiraz'],
  fortified:  ['Muscat (Rutherglen)', 'Tokay/Muscadelle', 'Grenache (Tawny)', 'Shiraz (Vintage)'],
  other:      ['Semillon', 'Sauvignon Blanc', 'Viognier', 'Tempranillo', 'Barbera', 'Verdelho'],
}

const COLORS_BY_TYPE = {
  shiraz:    [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'deep-ruby', label: '深紅', color: '#7B0020' }, { id: 'purple-red', label: '紫紅', color: '#6B0B5B' }, { id: 'inky', label: '墨黑紅', color: '#3D0010' }],
  cabernet:  [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'deep-ruby', label: '深紅', color: '#7B0020' }, { id: 'purple-red', label: '紫紅', color: '#6B0B5B' }],
  chardonnay:[{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'gold', label: '金黃', color: '#FFB700' }, { id: 'deep-gold', label: '深金', color: '#C89B00' }],
  riesling:  [{ id: 'pale-green', label: '淡青綠', color: '#D4EAC8' }, { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }],
  pinot_noir:[{ id: 'pale-ruby', label: '淡紅寶石', color: '#C0485A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }],
  grenache:  [{ id: 'light-ruby', label: '淡紅寶石', color: '#C0485A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }],
  sparkling: [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'ruby', label: '紅寶石（氣泡紅）', color: '#9B1221' }],
  fortified: [{ id: 'amber', label: '琥珀', color: '#FFBF50' }, { id: 'tawny', label: '棕橙', color: '#C86C20' }, { id: 'dark-mahogany', label: '深棕褐', color: '#8B3A00' }],
  other:     [{ id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }],
}

const AROMAS_BY_TYPE = {
  shiraz:    ['黑莓', '藍莓', '黑李', '覆盆子醬', '黑胡椒', '橄欖', '紫羅蘭', '甘草', '皮革', '大地氣息', '香草', '可可', '咖啡', '丁香', '辛香料', '煙燻', '菸草'],
  cabernet:  ['黑醋栗', '黑莓', '黑李', '雪松', '橡木', '香草', '薄荷', '尤加利', '皮革', '礦物', '辛香料', '咖啡', '可可', '甘草'],
  chardonnay:['桃子', '杏桃', '芒果', '鳳梨', '熱帶水果', '奶油', '香草', '烤土司', '榛果', '奶油爆米花', '礦物', '蘋果', '烤桶'],
  riesling:  ['萊姆', '葡萄柚', '青蘋果', '花香', '礦物', '石油（Petrol，成熟）', '蜂蜜（成熟）', '汽油香（特色）'],
  pinot_noir:['草莓', '覆盆子', '紅醋栗', '車厘子', '玫瑰', '紫羅蘭', '大地', '蘑菇', '可可', '辛香料'],
  grenache:  ['草莓醬', '覆盆子', '紅李', '丁香', '甘草', '皮革', '辛香料', '煙燻', '南法草本'],
  sparkling: ['青蘋果', '柑橘', '酵母', '烤麵包', '黑果（氣泡紅）', '辛香料（氣泡紅）'],
  fortified: ['葡萄乾', '無花果', '太妃糖', '焦糖', '橙皮蜜餞', '咖啡', '巧克力', '堅果', '蘭姆酒'],
  other:     ['果香', '花香', '礦物', '草本', '香料', '橡木'],
}

const TASTE_TAGS_BY_TYPE = {
  shiraz:    ['飽滿渾厚', '果醬濃郁', '黑胡椒爆香', '橡木明顯', '甜美順口', '辛香料複雜', '單寧柔滑', '悠長尾韻', '新舊世界融合'],
  cabernet:  ['飽滿緊實', '黑果濃郁', '薄荷清新', '橡木雪松', '礦物感', '單寧緊緻', '長期陳年', '悠長尾韻'],
  chardonnay:['奶油圓潤', '烤桶豐厚', '熱帶果香', '礦物純淨', '清爽活潑', '悠長尾韻'],
  riesling:  ['清爽脆口', '酸度活潑', '礦物純淨', '萊姆鮮活', '汽油複雜（成熟）', '長期陳年潛力'],
  pinot_noir:['優雅細膩', '透明感', '紅果鮮活', '大地氣息', '絲滑單寧', '清爽活潑'],
  grenache:  ['果香純樸', '辛香料感', '甜美柔順', '南法風格', '熱帶溫暖感'],
  sparkling: ['氣泡細緻', '清爽活潑', '果香豐沛', '甜美（氣泡紅）'],
  fortified: ['甜蜜濃郁', '複雜成熟', '氧化香', '悠長極長', '堅果焦糖'],
  other:     ['平衡', '優雅', '清爽', '果香', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  shiraz:    [{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  cabernet:  [{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  chardonnay:[{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  riesling:  [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  pinot_noir:[{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '輕-中', '中等', '緊實'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  grenache:  [{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  sparkling: [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
  fortified: [{ key: 'tannin', label: '甜度', hints: ['微甜', '中甜', '甜', '很甜', '極甜'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '濃郁度', hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] }, { key: 'finish', label: '尾韻', hints: ['短促', '中等', '悠長', '極長', '永恆'] }],
  other:     [{ key: 'tannin', label: '結構', hints: ['1', '2', '3', '4', '5'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
}

const currentTypeColor = computed(() => WINE_TYPES.find(t => t.id === (form.value.wine_type || 'other'))?.color || '#6B7280')
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
    form.value = { ...form.value, ...props.note, producer: props.note.chateau_name || '', doc_id: props.note.aoc_id || '', au_region: props.note.au_region || '', wine_type: props.note.wine_type || 'shiraz', grape_variety: props.note.grape_variety || '', aroma_tags: [...(props.note.aroma_tags || [])], taste_tags: [...(props.note.taste_tags || [])] }
  } else { form.value.producer = props.defaultProducer || ''; form.value.au_region = props.defaultRegion || '' }
})

const save = async () => {
  const producer = form.value.producer.trim(); if (!producer) return
  saving.value = true
  const payload = {
    user_id: authState.user.id, source: 'australia',
    aoc_id: form.value.au_region || form.value.doc_id?.trim() || 'Australia',
    chateau_name: producer, vintage: form.value.vintage || null, status: form.value.status,
    rating: form.value.rating, color_desc: form.value.color_desc,
    aroma_tags: form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags: form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin: form.value.tannin, acidity: form.value.acidity, body: form.value.body, finish: form.value.finish,
    notes: form.value.notes || null, wine_type: form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null, au_region: form.value.au_region || null,
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
.au-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 2100; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 640px) { .au-modal-backdrop { align-items: center; } }
.au-modal-panel { background: #fff; border-radius: 20px 20px 0 0; width: 100%; max-width: 580px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; }
@media (min-width: 640px) { .au-modal-panel { border-radius: 20px; } }
.au-modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.1rem 1.3rem 0.8rem; border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px; }
.au-modal-title-block { flex: 1; }
.au-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.au-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.au-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.au-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; color: #555; }
.au-modal-close:hover { background: #e5e7eb; }
.au-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.au-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.au-form-section:first-child { border-top: none; }
.au-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.au-type-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }
.au-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.au-type-btn:hover { border-color: #bbb; }
.au-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.au-type-emoji { font-size: 1.2rem; }
.au-type-name { font-size: 0.63rem; font-weight: 600; text-align: center; }
.au-form-row { margin-bottom: 0.8rem; }
.au-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.au-text-input, .au-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.au-text-input:focus, .au-select:focus { border-color: #8B1A1A; }
.au-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .au-two-col { grid-template-columns: 1fr; } }
.au-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .au-triple-row { grid-template-columns: 1fr 1fr; } }
.au-form-cell { }
.au-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.au-status-toggle { display: flex; gap: 6px; }
.au-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.au-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.au-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.au-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.au-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.au-star { color: #ddd; transition: color 0.1s; }
.au-star.filled { color: #F59E0B; }
.au-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.au-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.au-color-dot.selected { border-color: #333; transform: scale(1.15); }
.au-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.au-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.au-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.au-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; color: #1f1f1f; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.au-tag-btn.tag-active { color: #fff; transform: translateY(-1px); }
.au-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.au-structure-row { display: flex; align-items: center; gap: 10px; }
.au-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 50px; flex-shrink: 0; }
.au-dot-scale { display: flex; gap: 6px; }
.au-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; padding: 0; line-height: 1; }
.au-dot-btn.dot-filled { color: #999; }
.au-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.au-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.au-notes-textarea:focus { border-color: #8B1A1A; }
.au-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.au-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; }
.au-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.au-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.au-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; min-width: 100px; }
.au-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.au-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
