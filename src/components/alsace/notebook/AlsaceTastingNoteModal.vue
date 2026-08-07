<template>
  <div class="al-modal-backdrop" @click.self="emit('close')">
    <div class="al-modal-panel">

      <!-- Header -->
      <div class="al-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="al-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.aoc_id" class="al-modal-doc">{{ form.aoc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="al-type-pill"
          :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }} {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="al-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="al-modal-body">

        <!-- ① 酒款類型 -->
        <section class="al-form-section">
          <h3 class="al-section-title">🍇 酒款類型</h3>
          <div class="al-type-grid">
            <button
              v-for="t in WINE_TYPES" :key="t.id"
              :class="['al-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="al-type-emoji">{{ t.emoji }}</span>
              <span class="al-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="al-form-section">
          <h3 class="al-section-title">📍 基本資訊</h3>
          <div class="al-form-row">
            <label class="al-form-label">酒莊 Domaine</label>
            <input v-model="form.producer"
              placeholder="e.g. Trimbach, Hugel, Zind-Humbrecht, Weinbach…"
              class="al-text-input" />
          </div>
          <div class="al-form-row">
            <label class="al-form-label">主要品種 Cépage</label>
            <input v-model="form.grape_variety"
              :list="`al-grape-list-${form.wine_type || 'autre'}`"
              placeholder="e.g. Riesling, Gewurztraminer, Pinot Gris…"
              class="al-text-input" />
            <datalist :id="`al-grape-list-${form.wine_type || 'autre'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="al-two-col">
            <div class="al-form-row">
              <label class="al-form-label">AOC / Grand Cru</label>
              <input v-model="form.aoc_id"
                list="al-aoc-list"
                placeholder="e.g. AOC Alsace, Grand Cru Schlossberg…"
                class="al-text-input" />
              <datalist id="al-aoc-list">
                <option v-for="a in AOC_SUGGESTIONS" :key="a" :value="a" />
              </datalist>
            </div>
            <div class="al-form-row">
              <label class="al-form-label">行政區 Département</label>
              <select v-model="form.al_region" class="al-select">
                <option value="">-- 請選擇 --</option>
                <option v-for="r in ALSACE_DEPARTMENTS" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="al-form-section">
          <h3 class="al-section-title">🍷 品飲記錄</h3>
          <div class="al-triple-row">
            <div class="al-form-cell">
              <label class="al-cell-label">狀態</label>
              <div class="al-status-toggle">
                <button :class="['al-stbtn', form.status === 'tried' && 'tried-active']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['al-stbtn', form.status === 'wishlist' && 'wish-active']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="al-form-cell">
              <label class="al-cell-label">年份 Millésime</label>
              <input type="number" v-model.number="form.vintage"
                min="1950" max="2030" placeholder="e.g. 2019"
                class="al-vintage-input" />
            </div>
            <div class="al-form-cell">
              <label class="al-cell-label">評分</label>
              <div class="al-star-row">
                <span v-for="i in 5" :key="i"
                  :class="['al-star', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="al-form-section">
          <h3 class="al-section-title">🎨 外觀顏色</h3>
          <div class="al-color-palette">
            <button v-for="c in currentColors" :key="c.id"
              :title="c.label"
              :class="['al-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="al-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="al-color-hint">
            {{ currentColors.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="al-form-section">
          <h3 class="al-section-title">👃 香氣 Arômes</h3>
          <div class="al-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['al-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="al-form-section">
          <h3 class="al-section-title">👅 口感 Bouche</h3>
          <div class="al-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['al-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="al-form-section">
          <h3 class="al-section-title">📐 結構感 Structure</h3>
          <div class="al-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="al-structure-row">
              <span class="al-structure-label">{{ item.label }}</span>
              <div class="al-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['al-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="al-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="al-form-section">
          <h3 class="al-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes"
            class="al-notes-textarea"
            placeholder="記錄品飲心得、餐酒搭配、適飲期評估、購買資訊…"
            rows="4" />
        </section>

      </div><!-- al-modal-body -->

      <!-- Footer -->
      <div class="al-modal-footer">
        <button v-if="props.note?.id" class="al-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button class="al-btn-save"
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
  defaultAocId:    { type: String, default: '' },
  defaultRegion:   { type: String, default: '' },
})
const emit = defineEmits(['save', 'delete', 'close'])

const form = ref({
  wine_type:     'blanc',
  producer:      '',
  grape_variety: '',
  aoc_id:        '',
  al_region:     '',
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
  { id: 'blanc',    emoji: '🥂', short: '白酒 Blanc',        color: '#2d6a4f' },
  { id: 'cremant',  emoji: '✨', short: 'Crémant',           color: '#c9a227' },
  { id: 'vt',       emoji: '🍯', short: 'VT',                color: '#d35400' },
  { id: 'sgn',      emoji: '👑', short: 'SGN',               color: '#8e44ad' },
  { id: 'rouge',    emoji: '🍷', short: '紅酒 Pinot Noir',   color: '#8B1A1A' },
  { id: 'eaudevie', emoji: '🥃', short: '蒸餾酒',            color: '#7c4a2d' },
  { id: 'autre',    emoji: '🍾', short: '其他',              color: '#6B7280' },
]

const ALSACE_DEPARTMENTS = ['Bas-Rhin（北段）', 'Haut-Rhin（南段）']

const AOC_SUGGESTIONS = [
  'AOC Alsace', 'AOC Alsace Klevener de Heiligenstein', "Crémant d'Alsace",
  'Grand Cru Altenberg de Bergbieten', 'Grand Cru Altenberg de Bergheim', 'Grand Cru Altenberg de Wolxheim',
  'Grand Cru Brand', 'Grand Cru Bruderthal', 'Grand Cru Eichberg', 'Grand Cru Engelberg', 'Grand Cru Florimont',
  'Grand Cru Frankstein', 'Grand Cru Froehn', 'Grand Cru Furstentum', 'Grand Cru Geisberg', 'Grand Cru Gloeckelberg',
  'Grand Cru Goldert', 'Grand Cru Hatschbourg', 'Grand Cru Hengst', 'Grand Cru Kaefferkopf', 'Grand Cru Kanzlerberg',
  'Grand Cru Kastelberg', 'Grand Cru Kessler', 'Grand Cru Kirchberg de Barr', 'Grand Cru Kirchberg de Ribeauvillé',
  'Grand Cru Kitterlé', 'Grand Cru Mambourg', 'Grand Cru Mandelberg', 'Grand Cru Marckrain', 'Grand Cru Moenchberg',
  'Grand Cru Muenchberg', 'Grand Cru Ollwiller', 'Grand Cru Osterberg', 'Grand Cru Pfersigberg', 'Grand Cru Pfingstberg',
  'Grand Cru Praelatenberg', 'Grand Cru Rangen', 'Grand Cru Rosacker', 'Grand Cru Saering', 'Grand Cru Schlossberg',
  'Grand Cru Schoenenbourg', 'Grand Cru Sommerberg', 'Grand Cru Sonnenglanz', 'Grand Cru Spiegel', 'Grand Cru Sporen',
  'Grand Cru Steinert', 'Grand Cru Steingrubler', 'Grand Cru Steinklotz', 'Grand Cru Vorbourg', 'Grand Cru Wiebelsberg',
  'Grand Cru Wineck-Schlossberg', 'Grand Cru Winzenberg', 'Grand Cru Zinnkoepflé', 'Grand Cru Zotzenberg',
]

const GRAPE_SUGGESTIONS = {
  blanc:    ['Riesling', 'Gewurztraminer', 'Pinot Gris', 'Muscat', 'Pinot Blanc', 'Sylvaner', 'Auxerrois', 'Klevener', 'Chasselas', 'Edelzwicker（調配）', 'Gentil（調配）'],
  cremant:  ['Pinot Blanc', 'Riesling', 'Pinot Gris', 'Chardonnay', 'Pinot Noir'],
  vt:       ['Riesling', 'Gewurztraminer', 'Pinot Gris', 'Muscat'],
  sgn:      ['Riesling', 'Gewurztraminer', 'Pinot Gris', 'Muscat'],
  rouge:    ['Pinot Noir'],
  eaudevie: ['Marc d\'Alsace Gewurztraminer', 'Mirabelle de Lorraine'],
  autre:    [],
}

const COLORS_BY_TYPE = {
  blanc: [
    { id: 'pale-green',  label: '淺檸檬綠',   color: '#E4EEC0' },
    { id: 'lemon',       label: '檸檬黃',     color: '#F0E68C' },
    { id: 'gold',        label: '金黃色',     color: '#FFD700' },
    { id: 'deep-gold',   label: '深金黃',     color: '#DAA520' },
    { id: 'amber',       label: '琥珀色',     color: '#C08A2E' },
  ],
  cremant: [
    { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',      label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',  label: '淡金色', color: '#E8C84A' },
  ],
  vt: [
    { id: 'gold',       label: '金黃色', color: '#FFD700' },
    { id: 'deep-gold',  label: '深金黃', color: '#DAA520' },
    { id: 'amber',      label: '琥珀色', color: '#C08A2E' },
  ],
  sgn: [
    { id: 'deep-gold',  label: '深金黃', color: '#DAA520' },
    { id: 'amber',      label: '琥珀色', color: '#C08A2E' },
    { id: 'mahogany',   label: '深琥珀／桃花心木', color: '#8B4513' },
  ],
  rouge: [
    { id: 'pale-ruby',  label: '淺寶石紅', color: '#C2185B' },
    { id: 'ruby',       label: '寶石紅',   color: '#9B1221' },
    { id: 'garnet',     label: '石榴紅',   color: '#7B1029' },
  ],
  eaudevie: [
    { id: 'clear',      label: '透明無色', color: '#F5F5F0' },
    { id: 'pale-gold',  label: '淡金色（陳年）', color: '#E8C84A' },
  ],
  autre: [
    { id: 'pale-gold', label: '淡金色', color: '#E8C84A' },
    { id: 'ruby',      label: '寶石紅', color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  blanc: [
    '萊姆', '青蘋果', '白桃', '水梨', '柑橘',
    '荔枝', '玫瑰', '薑', '辛香料',
    '新鮮葡萄', '麝香', '橙花',
    '蜂蜜', '烤堅果', '煙燻', '汽油調性',
    '板岩礦物', '燧石', '白花',
  ],
  cremant: ['青蘋果', '柑橘', '白桃', '麵包酵母', '烤杏仁', '蜂蜜', '礦物', '白花'],
  vt: ['蜂蜜', '杏桃乾', '荔枝', '玫瑰', '烤堅果', '蜜漬水果', '辛香料'],
  sgn: ['蜂蜜', '蜜漬水果', '杏桃乾', '焦糖', '堅果', '花蜜', '貴腐氣息'],
  rouge: ['紅櫻桃', '草莓', '覆盆子', '紫羅蘭', '大地氣息', '香料'],
  eaudevie: ['新鮮葡萄', '蜜李', '核仁', '花香', '酒精溫暖感'],
  autre: ['果香', '花香', '礦物', '香料', '蜂蜜'],
}

const TASTE_TAGS_BY_TYPE = {
  blanc:    ['清爽脆口', '礦物質感', '油脂圓潤', '辛香料感', '花香馥郁', '活潑酸度', '均衡優雅', '悠長尾韻', '乾型俐落', '微甜柔和'],
  cremant:  ['細膩氣泡', '清爽活潑', '酵母奶香', '礦物清新', '複雜層次'],
  vt:       ['甜潤圓熟', '蜜感濃郁', '酸甜平衡', '層次豐富', '餘韻悠長'],
  sgn:      ['濃郁蜜甜', '黏稠飽滿', '貴腐複雜', '極致悠長', '酸度支撐'],
  rouge:    ['清爽多汁', '單寧細緻', '優雅均衡', '果香奔放'],
  eaudevie: ['濃烈奔放', '果香純淨', '酒精溫暖', '餘韻悠長'],
  autre:    ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  blanc: [
    { key: 'tannin',  label: '甜度',   hints: ['乾型', '半乾', '微甜', '甜', '很甜'] },
    { key: 'acidity', label: '酸度',   hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',   hints: ['輕盈', '輕中', '中等', '中飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  cremant: [
    { key: 'tannin',  label: '氣泡細緻度', hints: ['粗泡', '一般', '細密', '精緻', '絲絨'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '甜感',       hints: ['天然乾', '特乾', '乾型', '半乾', '甜型'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  vt: [
    { key: 'tannin',  label: '甜度',   hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',   hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',   hints: ['中等', '中飽', '飽滿', '濃郁', '黏稠'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  sgn: [
    { key: 'tannin',  label: '甜度',   hints: ['甜', '很甜', '極甜', '濃縮', '極致濃縮'] },
    { key: 'acidity', label: '酸度',   hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',   hints: ['飽滿', '濃郁', '黏稠', '極濃', '油潤'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rouge: [
    { key: 'tannin',  label: '單寧',   hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',   hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',   hints: ['輕盈', '輕中', '中等', '中飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  eaudevie: [
    { key: 'tannin',  label: '酒精感', hints: ['溫和', '中等', '明顯', '強勁', '灼熱'] },
    { key: 'acidity', label: '純淨度', hints: ['一般', '尚可', '純淨', '極純淨', '完美'] },
    { key: 'body',    label: '酒體',   hints: ['輕盈', '中等', '飽滿', '濃郁', '厚重'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  autre: [
    { key: 'tannin',  label: '結構',   hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度',   hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',   hints: ['輕盈', '輕中', '中等', '中飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',   hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

// ── 計算屬性 ─────────────────────────────────────────────────────
const currentTypeColor = computed(() =>
  WINE_TYPES.find(t => t.id === (form.value.wine_type || 'autre'))?.color || '#6B7280'
)
const currentGrapeSuggestions = computed(() =>
  GRAPE_SUGGESTIONS[form.value.wine_type || 'autre'] || []
)
const currentColors = computed(() =>
  COLORS_BY_TYPE[form.value.wine_type || 'autre'] || []
)
const currentAromas = computed(() =>
  AROMAS_BY_TYPE[form.value.wine_type || 'autre'] || []
)
const currentTasteTags = computed(() =>
  TASTE_TAGS_BY_TYPE[form.value.wine_type || 'autre'] || []
)
const currentStructure = computed(() =>
  STRUCTURE_BY_TYPE[form.value.wine_type || 'autre'] || STRUCTURE_BY_TYPE.autre
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
      aoc_id:        props.note.aoc_id || '',
      al_region:     props.note.it_region || '',
      wine_type:     props.note.wine_type || 'blanc',
      grape_variety: props.note.grape_variety || '',
      aroma_tags:    [...(props.note.aroma_tags || [])],
      taste_tags:    [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer  = props.defaultProducer || ''
    form.value.aoc_id    = props.defaultAocId    || ''
    form.value.al_region = props.defaultRegion   || ''
  }
})

// ── Supabase ─────────────────────────────────────────────────────
const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true

  const payload = {
    user_id:       authState.user.id,
    source:        'alsace',
    aoc_id:        form.value.aoc_id?.trim() || 'AOC Alsace',
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
    it_region:     form.value.al_region || null,
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
.al-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55); z-index: 2100;
  display: flex; align-items: flex-end; justify-content: center;
}
@media (min-width: 640px) { .al-modal-backdrop { align-items: center; } }

.al-modal-panel {
  background: #fff; border-radius: 20px 20px 0 0;
  width: 100%; max-width: 580px; max-height: 92vh;
  display: flex; flex-direction: column; overflow: hidden;
}
@media (min-width: 640px) { .al-modal-panel { border-radius: 20px; } }

.al-modal-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 1.1rem 1.3rem 0.8rem;
  border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px;
}
.al-modal-title-block { flex: 1; }
.al-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.al-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.al-type-pill {
  font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px;
  color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap;
}
.al-modal-close {
  background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; cursor: pointer; flex-shrink: 0; color: #555;
}
.al-modal-close:hover { background: #e5e7eb; }

.al-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }

.al-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.al-form-section:first-child { border-top: none; }
.al-section-title {
  font-size: 0.8rem; font-weight: 700; color: #666;
  text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem;
}

.al-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
@media (max-width: 480px) { .al-type-grid { grid-template-columns: repeat(3, 1fr); } }

.al-type-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 4px; border: 1.5px solid #e5e7eb; border-radius: 10px;
  background: #fafafa; cursor: pointer;
  font-size: 0.72rem; color: #444; font-weight: 500; transition: all 0.15s;
}
.al-type-btn:hover { border-color: #aaa; background: #f3f4f6; }
.al-type-btn.selected { font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
.al-type-emoji { font-size: 1.4rem; }
.al-type-name { font-size: 0.65rem; text-align: center; line-height: 1.2; }

.al-form-row { margin-bottom: 0.7rem; }
.al-form-label { display: block; font-size: 0.75rem; color: #666; margin-bottom: 4px; font-weight: 600; }
.al-text-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.al-text-input:focus { outline: none; border-color: #2d6a4f; }

.al-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .al-two-col { grid-template-columns: 1fr; } }

.al-select {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333; background: #fff;
}
.al-select:focus { outline: none; border-color: #2d6a4f; }

.al-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .al-triple-row { grid-template-columns: 1fr 1fr; } }
.al-form-cell { display: flex; flex-direction: column; gap: 5px; }
.al-cell-label { font-size: 0.72rem; color: #888; font-weight: 600; }

.al-status-toggle { display: flex; flex-direction: column; gap: 4px; }
.al-stbtn {
  padding: 5px 8px; font-size: 0.78rem;
  border: 1.5px solid #e5e7eb; border-radius: 6px;
  background: white; cursor: pointer; color: #555; transition: all 0.15s;
}
.al-stbtn.tried-active { background: #dcfce7; border-color: #16a34a; color: #15803d; font-weight: 700; }
.al-stbtn.wish-active  { background: #fee2e2; border-color: #dc2626; color: #dc2626; font-weight: 700; }

.al-vintage-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.al-vintage-input:focus { outline: none; border-color: #2d6a4f; }

.al-star-row { display: flex; gap: 4px; }
.al-star { font-size: 1.5rem; color: #ddd; cursor: pointer; line-height: 1; transition: color 0.1s; }
.al-star.filled { color: #F59E0B; }

.al-color-palette { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
.al-color-dot {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center; transition: transform 0.1s;
}
.al-color-dot.selected { border-color: #1a1a1a; transform: scale(1.15); }
.al-color-check { font-size: 0.7rem; color: #fff; font-weight: 700; text-shadow: 0 0 3px rgba(0,0,0,0.8); }
.al-color-hint { font-size: 0.75rem; color: #666; margin: 0; }

.al-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.al-tag-btn {
  padding: 4px 12px; border: 1.5px solid #e5e7eb;
  border-radius: 20px; background: white;
  font-size: 0.78rem; color: #555; cursor: pointer; transition: all 0.15s;
}
.al-tag-btn:hover { border-color: #aaa; }
.al-tag-btn.tag-active { color: #fff; font-weight: 600; }

.al-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.al-structure-row { display: flex; align-items: center; gap: 10px; }
.al-structure-label { font-size: 0.78rem; color: #555; font-weight: 600; min-width: 90px; flex-shrink: 0; }
.al-dot-scale { display: flex; gap: 4px; }
.al-dot-btn {
  font-size: 1.1rem; color: #ddd;
  background: none; border: none; cursor: pointer; line-height: 1; padding: 2px;
}
.al-dot-btn.dot-filled { color: #2d6a4f; }
.al-hint { font-size: 0.7rem; color: #aaa; min-width: 44px; }

.al-notes-textarea {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 10px;
  padding: 10px 12px; font-size: 0.88rem; font-family: inherit;
  resize: vertical; color: #333; line-height: 1.5;
}
.al-notes-textarea:focus { outline: none; border-color: #2d6a4f; }

.al-modal-footer {
  display: flex; justify-content: flex-end; gap: 10px;
  padding: 0.9rem 1.3rem; border-top: 1px solid #f0f0f0; flex-shrink: 0;
}
.al-btn-delete {
  padding: 9px 18px; border: 1.5px solid #fca5a5;
  border-radius: 10px; background: #fff; color: #dc2626;
  font-size: 0.88rem; cursor: pointer; font-weight: 600;
}
.al-btn-delete:hover { background: #fee2e2; }
.al-btn-save {
  padding: 9px 24px; border: none; border-radius: 10px; color: #fff;
  font-size: 0.88rem; cursor: pointer; font-weight: 700;
  background: #2d6a4f; transition: opacity 0.15s;
}
.al-btn-save:disabled { opacity: 0.4; cursor: not-allowed; }
.al-btn-save:hover:not(:disabled) { opacity: 0.88; }
</style>
