<template>
  <div class="it-modal-backdrop" @click.self="emit('close')">
    <div class="it-modal-panel">

      <!-- Header -->
      <div class="it-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="it-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="it-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="it-type-pill"
          :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }} {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="it-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="it-modal-body">

        <!-- ① 酒款類型 -->
        <section class="it-form-section">
          <h3 class="it-section-title">🇮🇹 酒款類型</h3>
          <div class="it-type-grid">
            <button
              v-for="t in WINE_TYPES" :key="t.id"
              :class="['it-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="it-type-emoji">{{ t.emoji }}</span>
              <span class="it-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 酒款基本資訊 -->
        <section class="it-form-section">
          <h3 class="it-section-title">📍 基本資訊</h3>
          <div class="it-form-row">
            <label class="it-form-label">生產者 Cantina / Azienda</label>
            <input v-model="form.producer"
              placeholder="e.g. Antinori, Gaja, Sassicaia, La Spinetta…"
              class="it-text-input" />
          </div>
          <div class="it-form-row">
            <label class="it-form-label">主要品種 Vitigno</label>
            <input v-model="form.grape_variety"
              :list="`grape-list-${form.wine_type || 'altro'}`"
              placeholder="e.g. Nebbiolo, Sangiovese, Pinot Grigio…"
              class="it-text-input" />
            <datalist :id="`grape-list-${form.wine_type || 'altro'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="it-two-col">
            <div class="it-form-row">
              <label class="it-form-label">DOC / DOCG / IGT</label>
              <input v-model="form.doc_id"
                placeholder="e.g. Barolo DOCG…"
                class="it-text-input" />
            </div>
            <div class="it-form-row">
              <label class="it-form-label">大產區 Regione</label>
              <select v-model="form.it_region" class="it-select">
                <option value="">-- 請選擇 --</option>
                <option v-for="r in ITALY_REGIONS" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="it-form-section">
          <h3 class="it-section-title">🍷 品飲記錄</h3>
          <div class="it-triple-row">
            <div class="it-form-cell">
              <label class="it-cell-label">狀態</label>
              <div class="it-status-toggle">
                <button :class="['it-stbtn', form.status === 'tried' && 'tried-active']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['it-stbtn', form.status === 'wishlist' && 'wish-active']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="it-form-cell">
              <label class="it-cell-label">年份 Annata</label>
              <input type="number" v-model.number="form.vintage"
                min="1950" max="2030" placeholder="e.g. 2019"
                class="it-vintage-input" />
            </div>
            <div class="it-form-cell">
              <label class="it-cell-label">評分</label>
              <div class="it-star-row">
                <span
                  v-for="i in 5" :key="i"
                  :class="['it-star', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色（已品飲） -->
        <section v-if="form.status === 'tried' && currentColors.length" class="it-form-section">
          <h3 class="it-section-title">🎨 外觀顏色</h3>
          <div class="it-color-palette">
            <button
              v-for="c in currentColors" :key="c.id"
              :title="c.label"
              :class="['it-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="it-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="it-color-hint">
            {{ currentColors.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- ⑤ 香氣（已品飲） -->
        <section v-if="form.status === 'tried'" class="it-form-section">
          <h3 class="it-section-title">👃 香氣 Profumo</h3>
          <div class="it-tag-grid">
            <button
              v-for="tag in currentAromas" :key="tag"
              :class="['it-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤（已品飲） -->
        <section v-if="form.status === 'tried'" class="it-form-section">
          <h3 class="it-section-title">👅 口感 Sapore</h3>
          <div class="it-tag-grid">
            <button
              v-for="tag in currentTasteTags" :key="tag"
              :class="['it-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感（已品飲，依酒款類型調整標籤） -->
        <section v-if="form.status === 'tried'" class="it-form-section">
          <h3 class="it-section-title">📐 結構感 Struttura</h3>
          <div class="it-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="it-structure-row">
              <span class="it-structure-label">{{ item.label }}</span>
              <div class="it-dot-scale">
                <button
                  v-for="i in 5" :key="i"
                  :class="['it-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="it-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="it-form-section">
          <h3 class="it-section-title">📝 心得筆記</h3>
          <textarea
            v-model="form.notes"
            class="it-notes-textarea"
            placeholder="記錄品飲心得、餐酒搭配、適飲期評估、購買資訊…"
            rows="4" />
        </section>

      </div><!-- it-modal-body -->

      <!-- Footer -->
      <div class="it-modal-footer">
        <button v-if="props.note?.id" class="it-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button
          class="it-btn-save"
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

// ── 表單狀態 ─────────────────────────────────────────────────────
const form = ref({
  wine_type:     'rosso',
  producer:      '',
  grape_variety: '',
  doc_id:        '',
  it_region:     '',
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
  { id: 'rosso',    emoji: '🍷', short: '紅酒 Rosso',       color: '#8B1A1A' },
  { id: 'bianco',   emoji: '🥂', short: '白酒 Bianco',      color: '#B8860B' },
  { id: 'rosato',   emoji: '🌸', short: '粉紅 Rosato',      color: '#D45E8C' },
  { id: 'spumante', emoji: '✨', short: '氣泡 Spumante',    color: '#5E8A6E' },
  { id: 'dolce',    emoji: '🍯', short: '甜酒 Dolce',        color: '#C07F00' },
  { id: 'passito',  emoji: '🍇', short: '帕薩托 Passito',   color: '#7D4E57' },
  { id: 'altro',    emoji: '🍾', short: '其他 Altro',        color: '#6B7280' },
]

const ITALY_REGIONS = [
  '皮埃蒙特 Piemonte', '托斯卡納 Toscana', '威尼托 Veneto',
  '西西里 Sicilia', '倫巴第 Lombardia', '普利亞 Puglia',
  '坎帕尼亞 Campania', '薩丁尼亞 Sardegna', '翁布里亞 Umbria',
  '艾米利亞-羅馬涅 Emilia-Romagna', '弗里烏利 Friuli-V.G.',
  '特倫蒂諾 Trentino-A.A.', '阿布魯佐 Abruzzo', '馬爾凱 Marche',
  '拉吉奥 Lazio', '卡拉布里亞 Calabria', '巴西利卡塔 Basilicata',
  '利古里亞 Liguria', '瓦萊達奧斯塔 Valle d\'Aosta', '莫里塞 Molise',
]

const GRAPE_SUGGESTIONS = {
  rosso:    ['Sangiovese', 'Nebbiolo', 'Barbera', 'Montepulciano', 'Corvina', 'Nerello Mascalese',
             'Nero d\'Avola', 'Primitivo', 'Aglianico', 'Dolcetto', 'Lagrein', 'Cannonau',
             'Sagrantino', 'Teroldego', 'Schiava', 'Refosco', 'Gaglioppo'],
  bianco:   ['Pinot Grigio', 'Trebbiano', 'Garganega', 'Vermentino', 'Verdicchio', 'Fiano',
             'Greco di Tufo', 'Falanghina', 'Pecorino', 'Ribolla Gialla', 'Arneis', 'Catarratto',
             'Pinot Bianco', 'Vernaccia', 'Grechetto', 'Lugana (Turbiana)', 'Nosiola'],
  rosato:   ['Cerasuolo (Montepulciano)', 'Chiaretto (Bardolino)', 'Lagrein Rosato',
             'Negroamaro Rosato', 'Primitivo Rosato'],
  spumante: ['Glera (Prosecco)', 'Chardonnay', 'Pinot Nero', 'Brachetto', 'Moscato (Asti)',
             'Lambrusco', 'Pinot Grigio', 'Ribolla Gialla', 'Timorasso'],
  dolce:    ['Moscato', 'Brachetto', 'Malvasia', 'Recioto (Garganega)', 'Vernaccia di Oristano',
             'Albana', 'Passito blend'],
  passito:  ['Zibibbo / Muscat Alexandria (Pantelleria)', 'Malvasia delle Lipari',
             'Greco (Bianco d\'Alcamo)', 'Sangiovese (Vin Santo)', 'Trebbiano (Vin Santo)'],
  altro:    [],
}

const COLORS_BY_TYPE = {
  rosso: [
    { id: 'young-purple', label: '年輕紫紅',   color: '#4B1B5B' },
    { id: 'ruby-red',     label: '紅寶石紅',   color: '#9B1221' },
    { id: 'garnet',       label: '石榴紅',     color: '#A5174E' },
    { id: 'deep-red',     label: '深寶石紅',   color: '#8B0020' },
    { id: 'brick',        label: '磚紅色',     color: '#CB4154' },
    { id: 'tawny',        label: '棕橙色',     color: '#C55A11' },
  ],
  bianco: [
    { id: 'pale-straw',   label: '淡草黃',     color: '#F5EFB2' },
    { id: 'straw',        label: '草黃',       color: '#E8D86A' },
    { id: 'pale-gold',    label: '淡金色',     color: '#E8C84A' },
    { id: 'gold',         label: '金黃色',     color: '#FFB700' },
    { id: 'amber',        label: '琥珀色',     color: '#FFBF50' },
    { id: 'green-tint',   label: '青綠色調',   color: '#B5C651' },
  ],
  rosato: [
    { id: 'pale-rose',    label: '淡玫瑰粉',   color: '#FAC4CC' },
    { id: 'salmon',       label: '鮭魚粉',     color: '#FA8072' },
    { id: 'coral',        label: '珊瑚粉',     color: '#F06080' },
    { id: 'deep-rose',    label: '深玫瑰粉',   color: '#E75480' },
  ],
  spumante: [
    { id: 'pale-straw',   label: '淡草黃',     color: '#F5EFB2' },
    { id: 'straw',        label: '草黃',       color: '#E8D86A' },
    { id: 'pale-gold',    label: '淡金色',     color: '#E8C84A' },
    { id: 'gold',         label: '金黃色',     color: '#FFB700' },
  ],
  dolce: [
    { id: 'gold',         label: '金黃',       color: '#FFB700' },
    { id: 'amber',        label: '琥珀',       color: '#FFBF50' },
    { id: 'deep-amber',   label: '深琥珀',     color: '#C8860D' },
    { id: 'orange',       label: '橙色',       color: '#E07000' },
  ],
  passito: [
    { id: 'amber',        label: '琥珀',       color: '#FFBF50' },
    { id: 'deep-amber',   label: '深琥珀',     color: '#C8860D' },
    { id: 'bronze',       label: '古銅色',     color: '#CD7F32' },
    { id: 'mahogany',     label: '桃花心木',   color: '#C04000' },
  ],
  altro: [
    { id: 'pale-gold',    label: '淡金色',     color: '#E8C84A' },
    { id: 'ruby-red',     label: '紅寶石紅',   color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  rosso: [
    '紫羅蘭', '玫瑰', '鳶尾花',
    '紅醋栗', '覆盆子', '車厘子', '石榴', '紅棗',
    '藍莓', '黑醋栗', '黑莓', '黑李', '梅乾', '無花果乾',
    '雪松', '皮革', '菸草', '焦油', '大地氣息', '松露',
    '肉桂', '丁香', '黑胡椒', '茴香', '甘草',
    '香草', '咖啡', '可可', '烤土司', '礦物鐵質',
  ],
  bianco: [
    '水梨', '青蘋果', '白桃', '杏桃', '蜜瓜', '白葡萄',
    '檸檬', '萊姆', '葡萄柚', '橙皮',
    '金銀花', '洋槐花', '橙花', '白花', '茉莉',
    '青草', '鼠尾草', '百里香', '茴香葉',
    '礦物', '燧石', '鹽漬', '苦杏仁',
    '蜂蜜', '蜂蠟', '烤土司', '榛果',
  ],
  rosato: [
    '草莓', '覆盆子', '桃子', '西瓜', '石榴',
    '玫瑰花瓣', '薔薇', '牡丹',
    '柑橘', '橙皮', '檸檬', '葡萄柚',
  ],
  spumante: [
    '青蘋果', '水梨', '白桃', '柑橘', '檸檬',
    '橙花', '金銀花', '茉莉',
    '麵包酵母', '奶油', '烤杏仁', '烤土司',
    '蜂蜜', '礦物', '粉筆灰',
  ],
  dolce: [
    '蜂蜜', '金桂花', '橙花',
    '杏桃乾', '橘皮蜜餞', '糖漬水果', '棗子', '葡萄乾',
    '肉桂', '薑', '丁香', '八角',
    '香草', '焦糖', '太妃糖',
    '杏仁', '榛果', '核桃', '玫瑰花瓣',
  ],
  passito: [
    '無花果乾', '葡萄乾', '棗子乾', '橘皮蜜餞', '杏桃乾',
    '蜂蜜', '太妃糖', '焦糖', '咖啡', '可可',
    '肉桂', '丁香', '苦杏仁',
    '榛果', '核桃', '烤杏仁',
  ],
  altro: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜'],
}

const TASTE_TAGS_BY_TYPE = {
  rosso:    ['飽滿渾厚', '細緻絲滑', '礦物鐵質', '辛香料感', '甜美果香', '活潑酸度', '均衡優雅', '悠長尾韻', '單寧緊緻', '單寧細膩', '焦油韻味', '大地氣息'],
  bianco:   ['清爽脆口', '礦物質感', '鹽鮮感', '苦香回甘', '圓潤油脂', '花香馥郁', '活潑酸度', '清淡優雅', '蜂蜜豐厚', '海風鹹鮮'],
  rosato:   ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻', '鮮美多汁'],
  spumante: ['細膩氣泡', '天然乾型', '清爽活潑', '豐沛果香', '酵母奶香', '礦物清新', '複雜層次'],
  dolce:    ['甜而不膩', '高酸平衡', '蜂蜜甜潤', '果乾濃郁', '香料豐富', '餘韻悠長'],
  passito:  ['濃郁甜潤', '果乾風味', '蜂蜜香氣', '堅果感', '氧化複雜', '多層次'],
  altro:    ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  rosso: [
    { key: 'tannin',  label: '單寧',             hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',             hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  bianco: [
    { key: 'tannin',  label: '苦感 Amaro',       hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',             hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rosato: [
    { key: 'tannin',  label: '單寧',             hints: ['幾乎沒有', '極輕', '輕柔', '稍緊', '紮實'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',             hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  spumante: [
    { key: 'tannin',  label: '氣泡細緻度',       hints: ['粗泡', '一般', '細密', '精緻', '絲絨'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '甜感 Dosage',      hints: ['天然乾型', '特乾型', '乾型', '半乾型', '甜型'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  dolce: [
    { key: 'tannin',  label: '甜度 Dolcezza',   hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '清新'] },
    { key: 'body',    label: '酒體',             hints: ['輕盈', '輕-中', '飽滿', '濃郁', '黏稠'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  passito: [
    { key: 'tannin',  label: '甜度 Dolcezza',   hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '平衡', '活潑'] },
    { key: 'body',    label: '酒體',             hints: ['中等', '濃郁', '厚重', '甜潤', '極濃'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '中等', '悠長', '極長', '永恆'] },
  ],
  altro: [
    { key: 'tannin',  label: '結構一',           hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度',             hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',             hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',             hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

// ── 計算屬性（依酒款類型切換） ────────────────────────────────────
const currentTypeColor = computed(() =>
  WINE_TYPES.find(t => t.id === (form.value.wine_type || 'altro'))?.color || '#6B7280'
)
const currentGrapeSuggestions = computed(() =>
  GRAPE_SUGGESTIONS[form.value.wine_type || 'altro'] || []
)
const currentColors = computed(() =>
  COLORS_BY_TYPE[form.value.wine_type || 'altro'] || []
)
const currentAromas = computed(() =>
  AROMAS_BY_TYPE[form.value.wine_type || 'altro'] || []
)
const currentTasteTags = computed(() =>
  TASTE_TAGS_BY_TYPE[form.value.wine_type || 'altro'] || []
)
const currentStructure = computed(() =>
  STRUCTURE_BY_TYPE[form.value.wine_type || 'altro'] || STRUCTURE_BY_TYPE.altro
)

// ── 方法 ─────────────────────────────────────────────────────────
const selectWineType = (id) => {
  // 切換類型時清除顏色/香氣/口感/結構（類型不同的資料不互通）
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

// ── 初始化 ────────────────────────────────────────────────────────
onMounted(() => {
  if (props.note) {
    form.value = {
      ...form.value,
      ...props.note,
      producer:      props.note.chateau_name || '',
      doc_id:        props.note.aoc_id || '',
      it_region:     props.note.it_region || '',
      wine_type:     props.note.wine_type || 'rosso',
      grape_variety: props.note.grape_variety || '',
      aroma_tags:    [...(props.note.aroma_tags || [])],
      taste_tags:    [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer    = props.defaultProducer || ''
    form.value.doc_id      = props.defaultDocId    || ''
    form.value.it_region   = props.defaultRegion   || ''
  }
})

// ── Supabase 操作 ─────────────────────────────────────────────────
const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true

  const payload = {
    user_id:       authState.user.id,
    source:        'italy',
    aoc_id:        form.value.doc_id?.trim() || form.value.it_region || 'Italia',
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
    it_region:     form.value.it_region || null,
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
.it-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
@media (min-width: 640px) {
  .it-modal-backdrop { align-items: center; }
}

.it-modal-panel {
  background: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 580px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@media (min-width: 640px) {
  .it-modal-panel { border-radius: 20px; }
}

/* Header */
.it-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.1rem 1.3rem 0.8rem;
  border-bottom: 2px solid #e8e8e8;
  flex-shrink: 0;
  gap: 10px;
  transition: border-color 0.2s;
}
.it-modal-title-block { flex: 1; }
.it-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.it-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.it-type-pill {
  font-size: 0.72rem; font-weight: 700;
  padding: 3px 10px; border-radius: 20px;
  color: #fff; flex-shrink: 0; align-self: center;
  white-space: nowrap;
}
.it-modal-close {
  background: #f3f4f6; border: none;
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; cursor: pointer; flex-shrink: 0;
  color: #555;
}
.it-modal-close:hover { background: #e5e7eb; }

/* Body */
.it-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }

/* Section */
.it-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.it-form-section:first-child { border-top: none; }
.it-section-title {
  font-size: 0.8rem; font-weight: 700; color: #666;
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 0 0 0.8rem;
}

/* Wine type grid */
.it-type-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
}
@media (max-width: 480px) {
  .it-type-grid { grid-template-columns: repeat(3, 1fr); }
}
.it-type-btn {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 4px;
  border: 1.5px solid #e5e7eb; border-radius: 10px;
  background: #fafafa; cursor: pointer;
  font-size: 0.72rem; color: #444; font-weight: 500;
  transition: all 0.15s;
}
.it-type-btn:hover { border-color: #aaa; background: #f3f4f6; }
.it-type-btn.selected { font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
.it-type-emoji { font-size: 1.4rem; }
.it-type-name { font-size: 0.65rem; text-align: center; line-height: 1.2; }

/* Form rows */
.it-form-row { margin-bottom: 0.7rem; }
.it-form-label { display: block; font-size: 0.75rem; color: #666; margin-bottom: 4px; font-weight: 600; }
.it-text-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.it-text-input:focus { outline: none; border-color: #6B7280; }

.it-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .it-two-col { grid-template-columns: 1fr; } }

.it-select {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
  background: #fff;
}
.it-select:focus { outline: none; border-color: #6B7280; }

/* Triple row */
.it-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .it-triple-row { grid-template-columns: 1fr 1fr; } }
.it-form-cell { display: flex; flex-direction: column; gap: 5px; }
.it-cell-label { font-size: 0.72rem; color: #888; font-weight: 600; }

.it-status-toggle { display: flex; flex-direction: column; gap: 4px; }
.it-stbtn {
  padding: 5px 8px; font-size: 0.78rem;
  border: 1.5px solid #e5e7eb; border-radius: 6px;
  background: white; cursor: pointer; color: #555;
  transition: all 0.15s;
}
.it-stbtn.tried-active { background: #dcfce7; border-color: #16a34a; color: #15803d; font-weight: 700; }
.it-stbtn.wish-active  { background: #fee2e2; border-color: #dc2626; color: #dc2626;  font-weight: 700; }

.it-vintage-input {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  padding: 8px 10px; font-size: 0.88rem; color: #333;
}
.it-vintage-input:focus { outline: none; border-color: #6B7280; }

.it-star-row { display: flex; gap: 4px; }
.it-star { font-size: 1.5rem; color: #ddd; cursor: pointer; line-height: 1; transition: color 0.1s; }
.it-star.filled { color: #F59E0B; }

/* Color palette */
.it-color-palette { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 6px; }
.it-color-dot {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid transparent; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.1s;
}
.it-color-dot.selected { border-color: #1a1a1a; transform: scale(1.15); }
.it-color-check { font-size: 0.7rem; color: #fff; font-weight: 700; text-shadow: 0 0 3px rgba(0,0,0,0.8); }
.it-color-hint { font-size: 0.75rem; color: #666; margin: 0; }

/* Tag grid */
.it-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.it-tag-btn {
  padding: 4px 12px; border: 1.5px solid #e5e7eb;
  border-radius: 20px; background: white;
  font-size: 0.78rem; color: #555; cursor: pointer;
  transition: all 0.15s;
}
.it-tag-btn:hover { border-color: #aaa; }
.it-tag-btn.tag-active { color: #fff; font-weight: 600; }

/* Structure */
.it-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.it-structure-row { display: flex; align-items: center; gap: 10px; }
.it-structure-label { font-size: 0.78rem; color: #555; font-weight: 600; min-width: 90px; flex-shrink: 0; }
.it-dot-scale { display: flex; gap: 4px; }
.it-dot-btn {
  font-size: 1.1rem; color: #ddd;
  background: none; border: none; cursor: pointer;
  line-height: 1; padding: 2px; transition: color 0.1s;
}
.it-dot-btn.dot-filled { color: #8B1A1A; }
.it-hint { font-size: 0.7rem; color: #aaa; min-width: 44px; }

/* Notes */
.it-notes-textarea {
  width: 100%; box-sizing: border-box;
  border: 1.5px solid #e5e7eb; border-radius: 10px;
  padding: 10px 12px; font-size: 0.88rem; font-family: inherit;
  resize: vertical; color: #333; line-height: 1.5;
}
.it-notes-textarea:focus { outline: none; border-color: #6B7280; }

/* Footer */
.it-modal-footer {
  display: flex; justify-content: flex-end; gap: 10px;
  padding: 0.9rem 1.3rem;
  border-top: 1px solid #f0f0f0; flex-shrink: 0;
}
.it-btn-delete {
  padding: 9px 18px; border: 1.5px solid #fca5a5;
  border-radius: 10px; background: #fff; color: #dc2626;
  font-size: 0.88rem; cursor: pointer; font-weight: 600;
}
.it-btn-delete:hover { background: #fee2e2; }
.it-btn-save {
  padding: 9px 24px; border: none;
  border-radius: 10px; color: #fff;
  font-size: 0.88rem; cursor: pointer; font-weight: 700;
  background: #8B1A1A;
  transition: opacity 0.15s;
}
.it-btn-save:disabled { opacity: 0.4; cursor: not-allowed; }
.it-btn-save:hover:not(:disabled) { opacity: 0.88; }
</style>
