<template>
  <div class="sp-modal-backdrop" @click.self="emit('close')">
    <div class="sp-modal-panel">

      <!-- Header -->
      <div class="sp-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="sp-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="sp-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="sp-type-pill"
          :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }} {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="sp-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="sp-modal-body">

        <!-- ① 酒款類型 -->
        <section class="sp-form-section">
          <h3 class="sp-section-title">🇪🇸 酒款類型</h3>
          <div class="sp-type-grid">
            <button
              v-for="t in WINE_TYPES" :key="t.id"
              :class="['sp-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="sp-type-emoji">{{ t.emoji }}</span>
              <span class="sp-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="sp-form-section">
          <h3 class="sp-section-title">📍 基本資訊</h3>
          <div class="sp-form-row">
            <label class="sp-form-label">生產者 Bodega / Productor</label>
            <input v-model="form.producer"
              placeholder="e.g. Vega Sicilia, Alvaro Palacios, La Rioja Alta…"
              class="sp-text-input" />
          </div>
          <div class="sp-form-row">
            <label class="sp-form-label">主要品種 Variedad</label>
            <input v-model="form.grape_variety"
              :list="`sp-grape-list-${form.wine_type || 'otro'}`"
              placeholder="e.g. Tempranillo, Albariño, Garnacha…"
              class="sp-text-input" />
            <datalist :id="`sp-grape-list-${form.wine_type || 'otro'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="sp-two-col">
            <div class="sp-form-row">
              <label class="sp-form-label">DO / DOCa / VP</label>
              <input v-model="form.doc_id"
                placeholder="e.g. Rioja DOCa, Priorat DOCa…"
                class="sp-text-input" />
            </div>
            <div class="sp-form-row">
              <label class="sp-form-label">自治區 / 產區</label>
              <select v-model="form.sp_region" class="sp-select">
                <option value="">-- 請選擇 --</option>
                <option v-for="r in SPAIN_REGIONS" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="sp-form-section">
          <h3 class="sp-section-title">🍷 品飲記錄</h3>
          <div class="sp-triple-row">
            <div class="sp-form-cell">
              <label class="sp-cell-label">狀態</label>
              <div class="sp-status-toggle">
                <button :class="['sp-stbtn', form.status === 'tried' && 'tried-active']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['sp-stbtn', form.status === 'wishlist' && 'wish-active']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="sp-form-cell">
              <label class="sp-cell-label">年份 Añada</label>
              <input type="number" v-model.number="form.vintage"
                min="1950" max="2030" placeholder="e.g. 2019"
                class="sp-vintage-input" />
            </div>
            <div class="sp-form-cell">
              <label class="sp-cell-label">評分</label>
              <div class="sp-star-row">
                <span v-for="i in 5" :key="i"
                  :class="['sp-star', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="sp-form-section">
          <h3 class="sp-section-title">🎨 外觀顏色</h3>
          <div class="sp-color-palette">
            <button v-for="c in currentColors" :key="c.id"
              :title="c.label"
              :class="['sp-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="sp-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="sp-color-hint">
            {{ currentColors.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="sp-form-section">
          <h3 class="sp-section-title">👃 香氣 Aromas</h3>
          <div class="sp-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['sp-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="sp-form-section">
          <h3 class="sp-section-title">👅 口感 Paladar</h3>
          <div class="sp-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['sp-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="sp-form-section">
          <h3 class="sp-section-title">📐 結構感 Estructura</h3>
          <div class="sp-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="sp-structure-row">
              <span class="sp-structure-label">{{ item.label }}</span>
              <div class="sp-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['sp-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="sp-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="sp-form-section">
          <h3 class="sp-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes"
            class="sp-notes-textarea"
            placeholder="記錄品飲心得、餐酒搭配、適飲期評估、購買資訊…"
            rows="4" />
        </section>

      </div><!-- sp-modal-body -->

      <!-- Footer -->
      <div class="sp-modal-footer">
        <button v-if="props.note?.id" class="sp-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button class="sp-btn-save"
          :disabled="saving || !form.producer.trim()"
          :style="{ background: currentTypeColor }"
          @click="save">
          {{ saving ? '儲存中…' : '💾 儲存筆記' }}
        </button>
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
  defaultDocId:    { type: String, default: '' },
  defaultRegion:   { type: String, default: '' },
})
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type:     'tinto',
  producer:      '',
  grape_variety: '',
  doc_id:        '',
  sp_region:     '',
  status:        'tried',
  vintage:       null,
  rating:        null,
  color_desc:    null,
  aroma_tags:    [],
  taste_tags:    [],
  tannin:        null,
  acidity:       null,
  body:          null,
  finish:        null,
  notes:         '',
})
const saving   = ref(false)
const deleting = ref(false)

// ── 靜態資料 ─────────────────────────────────────────────────────
const WINE_TYPES = [
  { id: 'tinto',         emoji: '🍷', short: '紅酒 Tinto',       color: '#8B1A1A' },
  { id: 'blanco',        emoji: '🥂', short: '白酒 Blanco',      color: '#B8860B' },
  { id: 'rosado',        emoji: '🌸', short: '粉紅 Rosado',      color: '#D45E8C' },
  { id: 'cava',          emoji: '✨', short: 'Cava 氣泡',        color: '#5E8A6E' },
  { id: 'vino_generoso', emoji: '🏺', short: '雪莉 Sherry',      color: '#7B5C1E' },
  { id: 'dulce',         emoji: '🍯', short: '甜酒 Dulce',       color: '#C07F00' },
  { id: 'otro',          emoji: '🍾', short: '其他 Otro',        color: '#6B7280' },
]

const SPAIN_REGIONS = [
  'Rioja', 'Ribera del Duero', 'Priorat', 'Rías Baixas', 'Penedès',
  'Jerez / Sherry', 'Navarra', 'Galicia', 'Castilla y León',
  'Castilla-La Mancha', 'Aragón', 'Cataluña', 'País Vasco',
  'Extremadura', 'Andalucía', 'Murcia', 'Valencia', 'Canarias',
]

const GRAPE_SUGGESTIONS = {
  tinto:         ['Tempranillo', 'Garnacha', 'Monastrell', 'Mencía', 'Bobal', 'Graciano', 'Mazuelo',
                  'Cariñena', 'Tinta de Toro', 'Juan García', 'Prieto Picudo', 'Rufete', 'Merlot',
                  'Cabernet Sauvignon', 'Syrah'],
  blanco:        ['Albariño', 'Verdejo', 'Viura/Macabeo', 'Airén', 'Godello', 'Palomino',
                  'Pedro Ximénez', 'Garnacha Blanca', 'Xarel·lo', 'Parellada', 'Albillo',
                  'Malvasía Castellana', 'Txakolitzan Zuria', 'Treixadura'],
  rosado:        ['Garnacha Rosado', 'Tempranillo Rosado', 'Monastrell Rosado', 'Bobal Rosado'],
  cava:          ['Xarel·lo', 'Macabeo (Viura)', 'Parellada', 'Chardonnay', 'Pinot Noir'],
  vino_generoso: ['Palomino Fino', 'Pedro Ximénez', 'Moscatel de Alejandría'],
  dulce:         ['Pedro Ximénez', 'Moscatel', 'Garnacha', 'Malvasía'],
  otro:          [],
}

const COLORS_BY_TYPE = {
  tinto: [
    { id: 'young-purple', label: '年輕紫紅',   color: '#4B1B5B' },
    { id: 'ruby-red',     label: '紅寶石紅',   color: '#9B1221' },
    { id: 'garnet',       label: '石榴紅',     color: '#A5174E' },
    { id: 'deep-red',     label: '深寶石紅',   color: '#8B0020' },
    { id: 'brick',        label: '磚紅色',     color: '#CB4154' },
    { id: 'tawny',        label: '棕橙色',     color: '#C55A11' },
  ],
  blanco: [
    { id: 'pale-straw',   label: '淡草黃',     color: '#F5EFB2' },
    { id: 'straw',        label: '草黃',       color: '#E8D86A' },
    { id: 'pale-gold',    label: '淡金色',     color: '#E8C84A' },
    { id: 'gold',         label: '金黃色',     color: '#FFB700' },
    { id: 'amber',        label: '琥珀色',     color: '#FFBF50' },
    { id: 'green-tint',   label: '青綠色調',   color: '#B5C651' },
  ],
  rosado: [
    { id: 'pale-rose',  label: '淡玫瑰粉', color: '#FAC4CC' },
    { id: 'salmon',     label: '鮭魚粉',   color: '#FA8072' },
    { id: 'coral',      label: '珊瑚粉',   color: '#F06080' },
    { id: 'deep-rose',  label: '深玫瑰粉', color: '#E75480' },
  ],
  cava: [
    { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',      label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',  label: '淡金色', color: '#E8C84A' },
    { id: 'gold',       label: '金黃色', color: '#FFB700' },
  ],
  vino_generoso: [
    { id: 'pale-gold',  label: '淡金',   color: '#F5E078' },
    { id: 'gold',       label: '金黃',   color: '#FFB700' },
    { id: 'amber',      label: '琥珀',   color: '#FFBF50' },
    { id: 'deep-amber', label: '深琥珀', color: '#C8860D' },
    { id: 'mahogany',   label: '桃花心木', color: '#C04000' },
    { id: 'ebony',      label: '黑色（PX）', color: '#3B1207' },
  ],
  dulce: [
    { id: 'gold',       label: '金黃', color: '#FFB700' },
    { id: 'amber',      label: '琥珀', color: '#FFBF50' },
    { id: 'deep-amber', label: '深琥珀', color: '#C8860D' },
    { id: 'ruby-red',   label: '紅寶石（Pedro X）', color: '#9B1221' },
  ],
  otro: [
    { id: 'pale-gold', label: '淡金色', color: '#E8C84A' },
    { id: 'ruby-red',  label: '紅寶石', color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  tinto: [
    '紫羅蘭', '玫瑰', '乾燥香草',
    '紅醋栗', '覆盆子', '草莓', '紅棗', '石榴',
    '黑莓', '黑李', '黑醋栗', '梅乾', '無花果乾',
    '皮革', '菸草', '甘草', '肉桂', '黑胡椒', '丁香',
    '雪松', '大地氣息', '礦物', '太妃糖',
    '香草', '咖啡', '可可', '烤土司', '椰子',
  ],
  blanco: [
    '水梨', '青蘋果', '白桃', '杏桃', '蜜瓜', '哈密瓜',
    '檸檬', '葡萄柚', '青檸皮', '橙皮',
    '金銀花', '澳洲茶樹', '白花', '茉莉',
    '青草', '鼠尾草', '百里香', '茴香葉',
    '礦物', '燧石', '鹽漬',
    '蜂蜜', '蜂蠟', '烤土司', '榛果', '核桃',
  ],
  rosado: [
    '草莓', '覆盆子', '桃子', '西瓜', '石榴',
    '玫瑰花瓣', '薔薇',
    '柑橘', '橙皮', '檸檬',
    '薄荷', '草本氣息',
  ],
  cava: [
    '青蘋果', '水梨', '柑橘', '檸檬', '白桃',
    '橙花', '金銀花',
    '麵包酵母', '奶油', '烤杏仁', '烤土司',
    '蜂蜜', '礦物', '粉筆灰',
  ],
  vino_generoso: [
    '苦杏仁', '酵母', '麵包', '鹽漬橄欖', '炒堅果',
    '榛果', '核桃', '杏仁',
    '蜂蜜', '太妃糖', '焦糖', '糖蜜',
    '葡萄乾', '無花果乾', '橘皮蜜餞', '棗子乾',
    '皮革', '菸草', '橡木', '香料', '咖啡',
    '碘', '礦物', '海水', '氧化複雜',
  ],
  dulce: [
    '葡萄乾', '無花果乾', '棗子', '橘皮蜜餞',
    '蜂蜜', '太妃糖', '焦糖', '黑糖蜜',
    '肉桂', '薑', '丁香', '八角',
    '可可', '咖啡', '烤堅果',
    '玫瑰花瓣', '橙花',
  ],
  otro: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜'],
}

const TASTE_TAGS_BY_TYPE = {
  tinto:         ['飽滿渾厚', '細緻絲滑', '礦物鐵質', '辛香料感', '甜美果香', '活潑酸度', '均衡優雅', '悠長尾韻', '單寧緊緻', '單寧細膩', '煙燻感', '大地氣息', '橡木雪松', '椰子香草'],
  blanco:        ['清爽脆口', '礦物質感', '鹽鮮感', '花香馥郁', '活潑酸度', '清淡優雅', '蜂蜜豐厚', '油脂圓潤', '草本清新', '海風鹹鮮'],
  rosado:        ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻', '鮮美多汁', '幹型精準'],
  cava:          ['細膩氣泡', '天然乾型', '清爽活潑', '豐沛果香', '酵母奶香', '礦物清新', '複雜層次'],
  vino_generoso: ['鹹鮮乾型', '苦香回甘', '堅果複雜', '氧化甘醇', '濃郁甜潤', '入口豐厚', '悠長餘韻', '碘香海水'],
  dulce:         ['甜而不膩', '高酸平衡', '蜂蜜甜潤', '果乾濃郁', '香料豐富', '餘韻悠長'],
  otro:          ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  tinto: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕中', '中等', '中飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  blanco: [
    { key: 'tannin',  label: '苦感',       hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rosado: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '極輕', '輕柔', '稍緊', '紮實'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  cava: [
    { key: 'tannin',  label: '氣泡細緻度', hints: ['粗泡', '一般', '細密', '精緻', '絲絨'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '甜感 Dosage',hints: ['天然乾', '特乾', '乾型', '半乾', '甜型'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  vino_generoso: [
    { key: 'tannin',  label: '乾型程度',   hints: ['極甜/PX', '甜潤', '半乾', '乾型', '極乾/Fino'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '鮮明'] },
    { key: 'body',    label: '氧化程度',   hints: ['清新', '微氧化', '中度', '明顯', '深度'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  dulce: [
    { key: 'tannin',  label: '甜度',       hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '平衡', '清新'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '中等', '飽滿', '濃郁', '黏稠'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  otro: [
    { key: 'tannin',  label: '結構',       hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕中', '中等', '中飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

// ── 計算屬性 ─────────────────────────────────────────────────────
const currentTypeColor = computed(() =>
  WINE_TYPES.find(t => t.id === (form.value.wine_type || 'otro'))?.color || '#6B7280'
)
const currentGrapeSuggestions = computed(() =>
  GRAPE_SUGGESTIONS[form.value.wine_type || 'otro'] || []
)
const currentColors = computed(() =>
  COLORS_BY_TYPE[form.value.wine_type || 'otro'] || []
)
const currentAromas = computed(() =>
  AROMAS_BY_TYPE[form.value.wine_type || 'otro'] || []
)
const currentTasteTags = computed(() =>
  TASTE_TAGS_BY_TYPE[form.value.wine_type || 'otro'] || []
)
const currentStructure = computed(() =>
  STRUCTURE_BY_TYPE[form.value.wine_type || 'otro'] || STRUCTURE_BY_TYPE.otro
)

// ── 方法 ─────────────────────────────────────────────────────────
const selectWineType = (id) => {
  const prev = form.value.wine_type
  form.value.wine_type = id
  if (prev !== id) {
    form.value.color_desc = null
    form.value.aroma_tags = []
    form.value.taste_tags  = []
    form.value.tannin   = null
    form.value.acidity  = null
    form.value.body     = null
    form.value.finish   = null
  }
}

const toggleTag = (arr, tag) => {
  const idx = arr.indexOf(tag)
  if (idx === -1) arr.push(tag)
  else arr.splice(idx, 1)
}

onMounted(() => {
  if (props.note) {
    form.value = {
      ...form.value,
      ...props.note,
      producer:      props.note.chateau_name || '',
      doc_id:        props.note.aoc_id || '',
      sp_region:     props.note.it_region || '',
      wine_type:     props.note.wine_type || 'tinto',
      grape_variety: props.note.grape_variety || '',
      aroma_tags:    [...(props.note.aroma_tags || [])],
      taste_tags:    [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer  = props.defaultProducer || ''
    form.value.doc_id    = props.defaultDocId    || ''
    form.value.sp_region = props.defaultRegion   || ''
  }
})

// ── Supabase ─────────────────────────────────────────────────────
const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true

  const payload = {
    user_id:       authState.user.id,
    source:        'spain',
    aoc_id:        form.value.doc_id?.trim() || form.value.sp_region || 'España',
    chateau_name:  producer,
    vintage:       form.value.vintage || null,
    status:        form.value.status,
    rating:        form.value.rating,
    color_desc:    form.value.color_desc,
    aroma_tags:    form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags:    form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin:        form.value.tannin,
    acidity:       form.value.acidity,
    body:          form.value.body,
    finish:        form.value.finish,
    notes:         form.value.notes || null,
    wine_type:     form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null,
    it_region:     form.value.sp_region || null,
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
.sp-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55); z-index: 2100;
  display: flex; align-items: flex-end; justify-content: center;
}
@media (min-width: 640px) { .sp-modal-backdrop { align-items: center; } }

.sp-modal-panel {
  background: #fff; border-radius: 20px 20px 0 0;
  width: 100%; max-width: 580px; max-height: 92vh;
  display: flex; flex-direction: column; overflow: hidden;
}
@media (min-width: 640px) { .sp-modal-panel { border-radius: 20px; } }

.sp-modal-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 1.1rem 1.3rem 0.8rem;
  border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px;
}
.sp-modal-title-block { flex: 1; }
.sp-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.sp-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.sp-type-pill {
  font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px;
  color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap;
}
.sp-modal-close {
  background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; cursor: pointer; flex-shrink: 0; color: #555;
}
.sp-modal-close:hover { background: #e5e7eb; }

.sp-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }

.sp-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.sp-form-section:first-child { border-top: none; }
.sp-section-title {
  font-size: 0.8rem; font-weight: 700; color: #666;
  text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem;
}

.sp-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
@media (max-width: 480px) { .sp-type-grid { grid-template-columns: repeat(3, 1fr); } }

.sp-type-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 4px; border: 1.5px solid #e5e7eb; border-radius: 10px;
  background: #fafafa; cursor: pointer;
  font-size: 0.72rem; color: #444; font-weight: 500; transition: all 0.15s;
}
.sp-type-btn:hover { border-color: #aaa; background: #f3f4f6; }
.sp-type-btn.selected { font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
.sp-type-emoji { font-size: 1.4rem; }
.sp-type-name { font-size: 0.65rem; text-align: center; line-height: 1.2; }

.sp-form-row { margin-bottom: 0.7rem; }
.sp-form-label { display: block; font-size: 0.75rem; color: #666; margin-bottom: 4px; font-weight: 600; }
.sp-text-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.sp-text-input:focus { outline: none; border-color: #8B1A1A; }

.sp-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .sp-two-col { grid-template-columns: 1fr; } }

.sp-select {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333; background: #fff;
}
.sp-select:focus { outline: none; border-color: #8B1A1A; }

.sp-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .sp-triple-row { grid-template-columns: 1fr 1fr; } }
.sp-form-cell { display: flex; flex-direction: column; gap: 5px; }
.sp-cell-label { font-size: 0.72rem; color: #888; font-weight: 600; }

.sp-status-toggle { display: flex; flex-direction: column; gap: 4px; }
.sp-stbtn {
  padding: 5px 8px; font-size: 0.78rem;
  border: 1.5px solid #e5e7eb; border-radius: 6px;
  background: white; cursor: pointer; color: #555; transition: all 0.15s;
}
.sp-stbtn.tried-active { background: #dcfce7; border-color: #16a34a; color: #15803d; font-weight: 700; }
.sp-stbtn.wish-active  { background: #fee2e2; border-color: #dc2626; color: #dc2626; font-weight: 700; }

.sp-vintage-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.sp-vintage-input:focus { outline: none; border-color: #8B1A1A; }

.sp-star-row { display: flex; gap: 4px; }
.sp-star { font-size: 1.5rem; color: #ddd; cursor: pointer; line-height: 1; transition: color 0.1s; }
.sp-star.filled { color: #F59E0B; }

.sp-color-palette { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
.sp-color-dot {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: transform 0.1s;
}
.sp-color-dot.selected { border-color: #1a1a1a; transform: scale(1.15); }
.sp-color-check { font-size: 0.7rem; color: #fff; font-weight: 700; text-shadow: 0 0 3px rgba(0,0,0,0.8); }
.sp-color-hint { font-size: 0.75rem; color: #666; margin: 0; }

.sp-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.sp-tag-btn {
  padding: 4px 12px; border: 1.5px solid #e5e7eb;
  border-radius: 20px; background: white;
  font-size: 0.78rem; color: #555; cursor: pointer; transition: all 0.15s;
}
.sp-tag-btn:hover { border-color: #aaa; }
.sp-tag-btn.tag-active { color: #fff; font-weight: 600; }

.sp-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.sp-structure-row { display: flex; align-items: center; gap: 10px; }
.sp-structure-label { font-size: 0.78rem; color: #555; font-weight: 600; min-width: 90px; flex-shrink: 0; }
.sp-dot-scale { display: flex; gap: 4px; }
.sp-dot-btn {
  font-size: 1.1rem; color: #ddd;
  background: none; border: none; cursor: pointer; line-height: 1; padding: 2px;
}
.sp-dot-btn.dot-filled { color: #8B1A1A; }
.sp-hint { font-size: 0.7rem; color: #aaa; min-width: 44px; }

.sp-notes-textarea {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 10px;
  padding: 10px 12px; font-size: 0.88rem; font-family: inherit;
  resize: vertical; color: #333; line-height: 1.5;
}
.sp-notes-textarea:focus { outline: none; border-color: #8B1A1A; }

.sp-modal-footer {
  display: flex; justify-content: flex-end; gap: 10px;
  padding: 0.9rem 1.3rem; border-top: 1px solid #f0f0f0; flex-shrink: 0;
}
.sp-btn-delete {
  padding: 9px 18px; border: 1.5px solid #fca5a5;
  border-radius: 10px; background: #fff; color: #dc2626;
  font-size: 0.88rem; cursor: pointer; font-weight: 600;
}
.sp-btn-delete:hover { background: #fee2e2; }
.sp-btn-save {
  padding: 9px 24px; border: none; border-radius: 10px; color: #fff;
  font-size: 0.88rem; cursor: pointer; font-weight: 700;
  background: #8B1A1A; transition: opacity 0.15s;
}
.sp-btn-save:disabled { opacity: 0.4; cursor: not-allowed; }
.sp-btn-save:hover:not(:disabled) { opacity: 0.88; }
</style>
