<template>
  <div class="de-modal-backdrop" @click.self="emit('close')">
    <div class="de-modal-panel">

      <!-- Header -->
      <div class="de-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="de-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="de-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="de-type-pill"
          :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="de-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="de-modal-body">

        <!-- ① 酒款類型 -->
        <section class="de-form-section">
          <h3 class="de-section-title">🇩🇪 酒款類型</h3>
          <div class="de-type-grid">
            <button
              v-for="t in WINE_TYPES" :key="t.id"
              :class="['de-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="de-type-emoji">{{ t.emoji }}</span>
              <span class="de-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="de-form-section">
          <h3 class="de-section-title">📍 基本資訊</h3>
          <div class="de-form-row">
            <label class="de-form-label">生產者 Weingut / Erzeuger</label>
            <input v-model="form.producer"
              placeholder="e.g. Egon Müller, Dönnhoff, JJ Prüm, Gunderloch…"
              class="de-text-input" />
          </div>
          <div class="de-form-row">
            <label class="de-form-label">主要品種 Rebsorte</label>
            <input v-model="form.grape_variety"
              :list="`de-grape-list-${form.wine_type || 'weisswein'}`"
              placeholder="e.g. Riesling, Spätburgunder, Grauburgunder…"
              class="de-text-input" />
            <datalist :id="`de-grape-list-${form.wine_type || 'weisswein'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="de-two-col">
            <div class="de-form-row">
              <label class="de-form-label">品質等級 Qualitätsstufe</label>
              <select v-model="form.pradikat" class="de-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="Prädikatswein">
                  <option value="Kabinett">Kabinett</option>
                  <option value="Spätlese">Spätlese</option>
                  <option value="Auslese">Auslese</option>
                  <option value="Beerenauslese (BA)">Beerenauslese (BA)</option>
                  <option value="Trockenbeerenauslese (TBA)">Trockenbeerenauslese (TBA)</option>
                  <option value="Eiswein">Eiswein</option>
                </optgroup>
                <optgroup label="其他">
                  <option value="Qualitätswein (QbA)">Qualitätswein (QbA)</option>
                  <option value="Ortswein (Erste Lage)">Ortswein (Erste Lage)</option>
                  <option value="Lagenwein (Großes Gewächs)">Lagenwein (Großes Gewächs / GG)</option>
                  <option value="Sekt">Sekt (氣泡)</option>
                </optgroup>
              </select>
            </div>
            <div class="de-form-row">
              <label class="de-form-label">產酒區 Anbaugebiet</label>
              <select v-model="form.de_region" class="de-select">
                <option value="">-- 請選擇 --</option>
                <option v-for="r in GERMANY_REGIONS" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
          </div>
          <div class="de-form-row">
            <label class="de-form-label">風味偏向 Geschmack</label>
            <div class="de-sweetness-row">
              <button v-for="s in SWEETNESS_LEVELS" :key="s.id"
                :class="['de-sw-btn', form.sweetness === s.id && 'sw-active']"
                :style="form.sweetness === s.id ? { background: s.color, borderColor: s.color, color: '#fff' } : {}"
                @click="form.sweetness = form.sweetness === s.id ? null : s.id">
                {{ s.label }}
              </button>
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="de-form-section">
          <h3 class="de-section-title">🍷 品飲記錄</h3>
          <div class="de-triple-row">
            <div class="de-form-cell">
              <label class="de-cell-label">狀態</label>
              <div class="de-status-toggle">
                <button :class="['de-stbtn', form.status === 'tried' && 'tried-active']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['de-stbtn', form.status === 'wishlist' && 'wish-active']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="de-form-cell">
              <label class="de-cell-label">年份 Jahrgang</label>
              <input type="number" v-model.number="form.vintage"
                min="1950" max="2030" placeholder="e.g. 2021"
                class="de-vintage-input" />
            </div>
            <div class="de-form-cell">
              <label class="de-cell-label">評分</label>
              <div class="de-star-row">
                <span v-for="i in 5" :key="i"
                  :class="['de-star', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="de-form-section">
          <h3 class="de-section-title">🎨 外觀顏色</h3>
          <div class="de-color-palette">
            <button v-for="c in currentColors" :key="c.id"
              :title="c.label"
              :class="['de-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="de-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="de-color-hint">
            {{ currentColors.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="de-form-section">
          <h3 class="de-section-title">👃 香氣 Aromen</h3>
          <div class="de-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['de-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="de-form-section">
          <h3 class="de-section-title">👅 口感 Geschmack</h3>
          <div class="de-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['de-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="de-form-section">
          <h3 class="de-section-title">📐 結構感 Struktur</h3>
          <div class="de-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="de-structure-row">
              <span class="de-structure-label">{{ item.label }}</span>
              <div class="de-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['de-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="de-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="de-form-section">
          <h3 class="de-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes"
            class="de-notes-textarea"
            placeholder="記錄品飲心得、Prädikat 等級印象、年份特色、適飲期評估…"
            rows="4" />
        </section>

      </div><!-- de-modal-body -->

      <!-- Footer -->
      <div class="de-modal-footer">
        <button v-if="props.note?.id" class="de-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button class="de-btn-save"
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
  wine_type:     'weisswein',
  producer:      '',
  grape_variety: '',
  doc_id:        '',
  pradikat:      '',
  de_region:     '',
  sweetness:     null,
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
  { id: 'weisswein',  emoji: '🥂', short: '白酒 Weißwein',   color: '#C8A217' },
  { id: 'rotwein',    emoji: '🍷', short: '紅酒 Rotwein',    color: '#8B1A1A' },
  { id: 'rosewein',   emoji: '🌸', short: '粉紅 Roséwein',   color: '#D45E8C' },
  { id: 'sekt',       emoji: '✨', short: 'Sekt 氣泡',       color: '#5E8A6E' },
  { id: 'eiswein',    emoji: '❄️', short: 'Eiswein 冰酒',    color: '#2980B9' },
  { id: 'tba',        emoji: '🍯', short: 'TBA 貴腐甜',      color: '#C07F00' },
  { id: 'andere',     emoji: '🍾', short: '其他 Andere',     color: '#6B7280' },
]

const GERMANY_REGIONS = [
  'Mosel', 'Rheingau', 'Rheinhessen', 'Pfalz', 'Baden',
  'Württemberg', 'Ahr', 'Nahe', 'Mittelrhein', 'Franken',
  'Saale-Unstrut', 'Sachsen', 'Hessische Bergstraße',
]

const SWEETNESS_LEVELS = [
  { id: 'trocken',       label: 'Trocken 乾型',       color: '#2E7D32' },
  { id: 'halbtrocken',   label: 'Halbtrocken 半乾',    color: '#1565C0' },
  { id: 'feinherb',      label: 'Feinherb 微甜',       color: '#6A1B9A' },
  { id: 'lieblich',      label: 'Lieblich 甜潤',       color: '#D84315' },
  { id: 'suss',          label: 'Süß 甜型',            color: '#F57F17' },
]

const GRAPE_SUGGESTIONS = {
  weisswein:  ['Riesling', 'Grauburgunder (Pinot Gris)', 'Weißburgunder (Pinot Blanc)',
               'Müller-Thurgau', 'Silvaner', 'Gewürztraminer', 'Scheurebe',
               'Kerner', 'Rieslaner', 'Bacchus', 'Chardonnay'],
  rotwein:    ['Spätburgunder (Pinot Noir)', 'Dornfelder', 'Lemberger (Blaufränkisch)',
               'Schwarzriesling (Müllerrebe)', 'Trollinger', 'Regent', 'St. Laurent',
               'Portugieser', 'Cabernet Sauvignon'],
  rosewein:   ['Spätburgunder Rosé', 'Weißherbst (Spätburgunder)', 'Rotling',
               'Dornfelder Rosé', 'Schwarzriesling Weißherbst'],
  sekt:       ['Riesling', 'Chardonnay', 'Pinot Noir (Spätburgunder)', 'Pinot Blanc', 'Pinot Gris'],
  eiswein:    ['Riesling', 'Grauburgunder', 'Silvaner', 'Kerner', 'Weißburgunder'],
  tba:        ['Riesling', 'Rieslaner', 'Scheurebe', 'Silvaner'],
  andere:     [],
}

const COLORS_BY_TYPE = {
  weisswein: [
    { id: 'pale-green',  label: '淡青綠',   color: '#D4EAC8' },
    { id: 'pale-straw',  label: '淡草黃',   color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',     color: '#E8D86A' },
    { id: 'pale-gold',   label: '淡金色',   color: '#E8C84A' },
    { id: 'gold',        label: '金黃色',   color: '#FFB700' },
    { id: 'amber',       label: '琥珀色',   color: '#FFBF50' },
  ],
  rotwein: [
    { id: 'light-ruby',  label: '淡寶石紅', color: '#C0485A' },
    { id: 'ruby-red',    label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',      label: '石榴紅',   color: '#A5174E' },
    { id: 'deep-red',    label: '深寶石紅', color: '#8B0020' },
    { id: 'brick',       label: '磚紅色',   color: '#CB4154' },
  ],
  rosewein: [
    { id: 'pale-rose',  label: '淡玫瑰粉', color: '#FAC4CC' },
    { id: 'salmon',     label: '鮭魚粉',   color: '#FA8072' },
    { id: 'coral',      label: '珊瑚粉',   color: '#F06080' },
  ],
  sekt: [
    { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',      label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',  label: '淡金色', color: '#E8C84A' },
  ],
  eiswein: [
    { id: 'pale-gold',  label: '淡金色', color: '#E8C84A' },
    { id: 'gold',       label: '金黃色', color: '#FFB700' },
    { id: 'amber',      label: '琥珀色', color: '#FFBF50' },
  ],
  tba: [
    { id: 'amber',      label: '琥珀',     color: '#FFBF50' },
    { id: 'deep-amber', label: '深琥珀',   color: '#C8860D' },
    { id: 'bronze',     label: '古銅色',   color: '#CD7F32' },
    { id: 'mahogany',   label: '桃花心木', color: '#C04000' },
  ],
  andere: [
    { id: 'pale-gold',  label: '淡金色', color: '#E8C84A' },
    { id: 'ruby-red',   label: '紅寶石', color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  weisswein: [
    '青蘋果', '水梨', '白桃', '杏桃', '葡萄柚', '萊姆', '檸檬皮',
    '橙花', '金銀花', '茉莉', '薔薇',
    '礦物', '燧石', '板岩', '濕石頭', '鹽漬',
    '石油 (Petrol)', '蜂蠟', '蜂蜜', '柑橘皮蜜餞',
    '百里香', '鼠尾草', '茴香',
    '奶油', '香草', '榛果',
  ],
  rotwein: [
    '覆盆子', '草莓', '紅醋栗', '黑醋栗', '藍莓', '車厘子',
    '玫瑰', '紫羅蘭',
    '皮革', '大地氣息', '蘑菇', '腐葉',
    '肉桂', '丁香', '甘草',
    '香草', '咖啡', '可可', '烤土司',
    '礦物', '鐵質', '血腥感',
  ],
  rosewein: [
    '草莓', '覆盆子', '桃子', '石榴',
    '玫瑰花瓣', '薔薇',
    '柑橘', '西瓜', '紅醋栗',
  ],
  sekt: [
    '青蘋果', '水梨', '柑橘', '檸檬', '白桃',
    '橙花', '金銀花',
    '麵包酵母', '奶油', '烤杏仁',
    '礦物', '粉筆灰',
  ],
  eiswein: [
    '冰凍桃子', '杏桃乾', '蜂蜜', '橘皮蜜餞',
    '薑', '丁香',
    '礦物', '燧石', '板岩',
    '焦糖', '香草',
  ],
  tba: [
    '無花果乾', '葡萄乾', '橘皮蜜餞', '杏桃乾', '棗子',
    '蜂蜜', '太妃糖', '焦糖', '黑糖蜜',
    '肉桂', '丁香', '薑', '八角',
    '橡木', '煙燻',
    '貴腐霉味', '蘑菇',
  ],
  andere: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜'],
}

const TASTE_TAGS_BY_TYPE = {
  weisswein:  ['礦物鮮明', '板岩質感', '石油複雜', '花香馥郁', '活潑酸度', '緊緻清脆', '蜂蜜豐厚', '油脂圓潤', '悠長尾韻', '精準純粹', '細緻優雅', '草本清新'],
  rotwein:    ['飽滿渾厚', '細緻絲滑', '礦物感', '辛香料感', '甜美果香', '活潑酸度', '單寧細膩', '單寧緊緻', '優雅輕盈', '煙燻大地'],
  rosewein:   ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻', '鮮美多汁'],
  sekt:       ['細膩氣泡', '天然乾型', '清爽活潑', '豐沛果香', '酵母奶香', '礦物清新'],
  eiswein:    ['冰甜清新', '高酸平衡', '蜂蜜甜潤', '礦物純淨', '精緻優雅', '冰晶質感'],
  tba:        ['極甜濃郁', '高酸平衡', '貴腐複雜', '果乾豐厚', '香料豐富', '餘韻悠長', '永恆典藏'],
  andere:     ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  weisswein: [
    { key: 'tannin',  label: '苦感',       hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rotwein: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rosewein: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '極輕', '輕柔', '稍緊', '紮實'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  sekt: [
    { key: 'tannin',  label: '氣泡細緻度', hints: ['粗泡', '一般', '細密', '精緻', '絲絨'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '甜度 Dosage',hints: ['天然乾', '特乾', '乾型', '半乾', '甜型'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  eiswein: [
    { key: 'tannin',  label: '甜度',       hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '清新'] },
    { key: 'body',    label: '濃郁度',     hints: ['輕盈', '中等', '飽滿', '濃郁', '黏稠'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  tba: [
    { key: 'tannin',  label: '甜度',       hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '平衡', '清新'] },
    { key: 'body',    label: '濃郁度',     hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '中等', '悠長', '極長', '永恆'] },
  ],
  andere: [
    { key: 'tannin',  label: '結構',       hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

// ── 計算屬性 ─────────────────────────────────────────────────────
const currentTypeColor = computed(() =>
  WINE_TYPES.find(t => t.id === (form.value.wine_type || 'andere'))?.color || '#6B7280'
)
const currentGrapeSuggestions = computed(() =>
  GRAPE_SUGGESTIONS[form.value.wine_type || 'andere'] || []
)
const currentColors = computed(() =>
  COLORS_BY_TYPE[form.value.wine_type || 'andere'] || []
)
const currentAromas = computed(() =>
  AROMAS_BY_TYPE[form.value.wine_type || 'andere'] || []
)
const currentTasteTags = computed(() =>
  TASTE_TAGS_BY_TYPE[form.value.wine_type || 'andere'] || []
)
const currentStructure = computed(() =>
  STRUCTURE_BY_TYPE[form.value.wine_type || 'andere'] || STRUCTURE_BY_TYPE.andere
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

// ── 初始化 ────────────────────────────────────────────────────────
onMounted(() => {
  if (props.note) {
    form.value = {
      ...form.value,
      ...props.note,
      producer:      props.note.chateau_name || '',
      doc_id:        props.note.aoc_id || '',
      de_region:     props.note.de_region || '',
      pradikat:      props.note.pradikat || '',
      sweetness:     props.note.sweetness || null,
      wine_type:     props.note.wine_type || 'weisswein',
      grape_variety: props.note.grape_variety || '',
      aroma_tags:    [...(props.note.aroma_tags || [])],
      taste_tags:    [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer  = props.defaultProducer || ''
    form.value.doc_id    = props.defaultDocId    || ''
    form.value.de_region = props.defaultRegion   || ''
  }
})

// ── Supabase 操作 ─────────────────────────────────────────────────
const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true

  const payload = {
    user_id:       authState.user.id,
    source:        'germany',
    aoc_id:        form.value.pradikat || form.value.doc_id?.trim() || form.value.de_region || 'Deutschland',
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
    de_region:     form.value.de_region || null,
    pradikat:      form.value.pradikat || null,
    sweetness:     form.value.sweetness || null,
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
.de-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 2100;
  display: flex; align-items: flex-end; justify-content: center;
}
@media (min-width: 640px) { .de-modal-backdrop { align-items: center; } }

.de-modal-panel {
  background: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%; max-width: 580px;
  max-height: 92vh;
  display: flex; flex-direction: column; overflow: hidden;
}
@media (min-width: 640px) { .de-modal-panel { border-radius: 20px; } }

.de-modal-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 1.1rem 1.3rem 0.8rem;
  border-bottom: 2px solid #e8e8e8;
  flex-shrink: 0; gap: 10px;
  transition: border-color 0.2s;
}
.de-modal-title-block { flex: 1; }
.de-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.de-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.de-type-pill {
  font-size: 0.72rem; font-weight: 700;
  padding: 3px 10px; border-radius: 20px;
  color: #fff; flex-shrink: 0; align-self: center;
  white-space: nowrap;
}
.de-modal-close {
  background: #f3f4f6; border: none;
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; cursor: pointer; flex-shrink: 0; color: #555;
}
.de-modal-close:hover { background: #e5e7eb; }

.de-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }

.de-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.de-form-section:first-child { border-top: none; }
.de-section-title {
  font-size: 0.8rem; font-weight: 700; color: #666;
  text-transform: uppercase; letter-spacing: 0.04em;
  margin: 0 0 0.8rem;
}

.de-type-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px;
}
@media (max-width: 480px) { .de-type-grid { grid-template-columns: repeat(3, 1fr); } }

.de-type-btn {
  display: flex; flex-direction: column; align-items: center;
  padding: 9px 4px; border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  background: #fafafa; cursor: pointer;
  transition: all 0.15s; gap: 3px;
}
.de-type-btn:hover { border-color: #bbb; background: #f3f4f6; }
.de-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.de-type-emoji { font-size: 1.2rem; }
.de-type-name { font-size: 0.63rem; font-weight: 600; color: inherit; text-align: center; }

.de-form-row { margin-bottom: 0.8rem; }
.de-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.de-text-input, .de-select {
  width: 100%; padding: 9px 12px;
  border: 1.5px solid #ddd; border-radius: 10px;
  font-size: 0.88rem; outline: none;
  transition: border-color 0.15s; box-sizing: border-box;
  background: white;
}
.de-text-input:focus, .de-select:focus { border-color: #C8A217; }

.de-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .de-two-col { grid-template-columns: 1fr; } }

.de-sweetness-row { display: flex; flex-wrap: wrap; gap: 6px; }
.de-sw-btn {
  padding: 5px 12px; border-radius: 20px;
  border: 1.5px solid #ddd; background: #f9f9f9;
  font-size: 0.78rem; font-weight: 600; cursor: pointer;
  transition: all 0.15s;
}
.de-sw-btn:hover { border-color: #bbb; }
.de-sw-btn.sw-active { transform: translateY(-1px); box-shadow: 0 2px 6px rgba(0,0,0,0.15); }

.de-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .de-triple-row { grid-template-columns: 1fr 1fr; } }

.de-form-cell { }
.de-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.de-status-toggle { display: flex; gap: 6px; }
.de-stbtn {
  flex: 1; padding: 7px 8px;
  border: 1.5px solid #ddd; border-radius: 10px;
  background: #f9f9f9; font-size: 0.8rem; font-weight: 600;
  cursor: pointer; transition: all 0.15s; text-align: center;
}
.de-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.de-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.de-vintage-input {
  width: 100%; padding: 8px 10px;
  border: 1.5px solid #ddd; border-radius: 10px;
  font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box;
}
.de-vintage-input:focus { border-color: #C8A217; }
.de-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.de-star { color: #ddd; transition: color 0.1s; }
.de-star.filled { color: #F59E0B; }

.de-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.de-color-dot {
  width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.de-color-dot.selected { border-color: #333; transform: scale(1.15); }
.de-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.de-color-hint { font-size: 0.78rem; color: #666; margin: 0; }

.de-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.de-tag-btn {
  padding: 5px 12px; border-radius: 20px;
  border: 1.5px solid #e0e0e0; background: #f9f9f9;
  font-size: 0.78rem; font-weight: 600; cursor: pointer;
  transition: all 0.15s;
}
.de-tag-btn:hover { border-color: #bbb; }
.de-tag-btn.tag-active { color: #fff; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.15); }

.de-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.de-structure-row { display: flex; align-items: center; gap: 10px; }
.de-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 60px; flex-shrink: 0; }
.de-dot-scale { display: flex; gap: 6px; }
.de-dot-btn {
  background: none; border: none; font-size: 1rem; color: #ddd;
  cursor: pointer; transition: color 0.1s; padding: 0; line-height: 1;
}
.de-dot-btn.dot-filled { color: #999; }
.de-hint { font-size: 0.7rem; color: #888; min-width: 50px; }

.de-notes-textarea {
  width: 100%; padding: 10px 12px;
  border: 1.5px solid #ddd; border-radius: 10px;
  font-size: 0.88rem; font-family: inherit;
  resize: vertical; outline: none; box-sizing: border-box;
}
.de-notes-textarea:focus { border-color: #C8A217; }

.de-modal-footer {
  display: flex; justify-content: flex-end; gap: 10px;
  padding: 0.8rem 1.3rem 1rem;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
}
.de-btn-delete {
  background: #fff; border: 1.5px solid #e5e7eb;
  color: #DC2626; padding: 10px 18px; border-radius: 12px;
  font-size: 0.88rem; font-weight: 600; cursor: pointer;
  transition: all 0.15s;
}
.de-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.de-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.de-btn-save {
  color: #fff; border: none;
  padding: 10px 22px; border-radius: 12px;
  font-size: 0.9rem; font-weight: 700; cursor: pointer;
  transition: all 0.15s; min-width: 100px;
}
.de-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.de-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
