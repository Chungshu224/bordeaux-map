<template>
  <div class="hu-modal-backdrop" @click.self="emit('close')">
    <div class="hu-modal-panel">

      <!-- Header -->
      <div class="hu-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="hu-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="hu-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="hu-type-pill"
          :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="hu-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="hu-modal-body">

        <!-- ① 酒款類型 -->
        <section class="hu-form-section">
          <h3 class="hu-section-title">🇭🇺 酒款類型</h3>
          <div class="hu-type-grid">
            <button
              v-for="t in WINE_TYPES" :key="t.id"
              :class="['hu-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="hu-type-emoji">{{ t.emoji }}</span>
              <span class="hu-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- ② 基本資訊 -->
        <section class="hu-form-section">
          <h3 class="hu-section-title">📍 基本資訊</h3>
          <div class="hu-form-row">
            <label class="hu-form-label">生產者 Pince / Borász</label>
            <input v-model="form.producer"
              placeholder="e.g. Royal Tokaji, Oremus, Gál Tibor, Vylyan…"
              class="hu-text-input" />
          </div>
          <div class="hu-form-row">
            <label class="hu-form-label">主要品種 Szőlőfajta</label>
            <input v-model="form.grape_variety"
              :list="`hu-grape-list-${form.wine_type || 'feher'}`"
              placeholder="e.g. Furmint, Hárslevelű, Kékfrankos…"
              class="hu-text-input" />
            <datalist :id="`hu-grape-list-${form.wine_type || 'feher'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="hu-two-col">
            <div class="hu-form-row">
              <label class="hu-form-label">法定產區 Borvidék</label>
              <select v-model="form.hu_region" class="hu-select">
                <option value="">-- 請選擇 --</option>
                <option v-for="r in HUNGARY_REGIONS" :key="r" :value="r">{{ r }}</option>
              </select>
            </div>
            <div class="hu-form-row">
              <label class="hu-form-label">托卡伊等級（如適用）</label>
              <select v-model="form.tokaj_level" class="hu-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="Tokaji 甜酒">
                  <option value="Tokaji Aszú 3 Puttonyos">Aszú 3 Puttonyos</option>
                  <option value="Tokaji Aszú 4 Puttonyos">Aszú 4 Puttonyos</option>
                  <option value="Tokaji Aszú 5 Puttonyos">Aszú 5 Puttonyos</option>
                  <option value="Tokaji Aszú 6 Puttonyos">Aszú 6 Puttonyos</option>
                  <option value="Tokaji Eszencia">Tokaji Eszencia</option>
                  <option value="Tokaji Szamorodni Édes">Szamorodni Édes（甜）</option>
                  <option value="Tokaji Szamorodni Száraz">Szamorodni Száraz（干）</option>
                  <option value="Tokaji Fordítás">Fordítás</option>
                  <option value="Tokaji Máslás">Máslás</option>
                </optgroup>
                <optgroup label="Tokaji 干白">
                  <option value="Tokaji Furmint Dry">Furmint Dry 干型</option>
                  <option value="Tokaji Hárslevelű Dry">Hárslevelű Dry 干型</option>
                  <option value="Late Harvest">Late Harvest 晚摘</option>
                </optgroup>
              </select>
            </div>
          </div>
        </section>

        <!-- ③ 品飲記錄 -->
        <section class="hu-form-section">
          <h3 class="hu-section-title">🍷 品飲記錄</h3>
          <div class="hu-triple-row">
            <div class="hu-form-cell">
              <label class="hu-cell-label">狀態</label>
              <div class="hu-status-toggle">
                <button :class="['hu-stbtn', form.status === 'tried' && 'tried-active']"
                  @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['hu-stbtn', form.status === 'wishlist' && 'wish-active']"
                  @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="hu-form-cell">
              <label class="hu-cell-label">年份 Évjárat</label>
              <input type="number" v-model.number="form.vintage"
                min="1950" max="2030" placeholder="e.g. 2017"
                class="hu-vintage-input" />
            </div>
            <div class="hu-form-cell">
              <label class="hu-cell-label">評分</label>
              <div class="hu-star-row">
                <span v-for="i in 5" :key="i"
                  :class="['hu-star', form.rating >= i && 'filled']"
                  @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ④ 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="hu-form-section">
          <h3 class="hu-section-title">🎨 外觀顏色</h3>
          <div class="hu-color-palette">
            <button v-for="c in currentColors" :key="c.id"
              :title="c.label"
              :class="['hu-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }"
              @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="hu-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="hu-color-hint">
            {{ currentColors.find(c => c.id === form.color_desc)?.label }}
          </p>
        </section>

        <!-- ⑤ 香氣 -->
        <section v-if="form.status === 'tried'" class="hu-form-section">
          <h3 class="hu-section-title">👃 香氣 Aromák</h3>
          <div class="hu-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['hu-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑥ 口感標籤 -->
        <section v-if="form.status === 'tried'" class="hu-form-section">
          <h3 class="hu-section-title">👅 口感 Ízek</h3>
          <div class="hu-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['hu-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- ⑦ 結構感 -->
        <section v-if="form.status === 'tried'" class="hu-form-section">
          <h3 class="hu-section-title">📐 結構感 Szerkezet</h3>
          <div class="hu-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="hu-structure-row">
              <span class="hu-structure-label">{{ item.label }}</span>
              <div class="hu-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['hu-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="hu-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- ⑧ 心得筆記 -->
        <section class="hu-form-section">
          <h3 class="hu-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes"
            class="hu-notes-textarea"
            placeholder="記錄品飲心得、Puttonyos 甜度印象、貴腐特色、適飲期評估…"
            rows="4" />
        </section>

      </div><!-- hu-modal-body -->

      <!-- Footer -->
      <div class="hu-modal-footer">
        <button v-if="props.note?.id" class="hu-btn-delete" :disabled="deleting" @click="confirmDelete">
          {{ deleting ? '刪除中…' : '🗑 刪除' }}
        </button>
        <button class="hu-btn-save"
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
  wine_type:     'aszu',
  producer:      '',
  grape_variety: '',
  doc_id:        '',
  hu_region:     '',
  tokaj_level:   '',
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
  { id: 'aszu',      emoji: '🍯', short: 'Aszú 貴腐甜',    color: '#C07F00' },
  { id: 'furmint',   emoji: '🥂', short: 'Furmint 干白',   color: '#B8860B' },
  { id: 'feher',     emoji: '🫧', short: '白酒 Fehér',     color: '#C8A217' },
  { id: 'voros',     emoji: '🍷', short: '紅酒 Vörös',     color: '#8B1A1A' },
  { id: 'bikaver',   emoji: '🐂', short: 'Bikavér 公牛血', color: '#7B1A1A' },
  { id: 'rozsa',     emoji: '🌸', short: '粉紅 Rozé',      color: '#D45E8C' },
  { id: 'egyeb',     emoji: '🍾', short: '其他 Egyéb',     color: '#6B7280' },
]

const HUNGARY_REGIONS = [
  'Tokaj', 'Eger', 'Villány', 'Szekszárd', 'Sopron', 'Badacsony',
  'Balatonfüred-Csopak', 'Balatonboglár', 'Mátra', 'Kunság',
  'Pannon', 'Pécs', 'Etyek-Buda', 'Neszmély', 'Mór',
  'Ászár-Neszmély', 'Hajós-Baja', 'Tolna', 'Zala',
  'Pannonhalma', 'Bükk', 'Heves',
]

const GRAPE_SUGGESTIONS = {
  aszu:     ['Furmint', 'Hárslevelű', 'Sárga Muskotály (Muscat Blanc)', 'Zéta', 'Kövérszőlő'],
  furmint:  ['Furmint', 'Hárslevelű'],
  feher:    ['Furmint', 'Hárslevelű', 'Irsai Olivér', 'Olaszrizling (Welschriesling)', 'Juhfark',
             'Szürkebarát (Pinot Gris)', 'Rajnai Rizling (Riesling)', 'Chardonnay', 'Sauvignon Blanc',
             'Tramini (Gewürztraminer)', 'Ezerjó', 'Leányka'],
  voros:    ['Kékfrankos (Blaufränkisch)', 'Kadarka', 'Zweigelt', 'Merlot', 'Cabernet Franc',
             'Cabernet Sauvignon', 'Syrah', 'Pinot Noir', 'Oporto'],
  bikaver:  ['Kékfrankos (Blaufränkisch)', 'Kadarka', 'Zweigelt', 'Cabernet Franc', 'Merlot',
             'Menoire', 'Blauburger'],
  rozsa:    ['Kékfrankos Rosé', 'Kadarka Rosé', 'Cabernet Franc Rosé'],
  egyeb:    [],
}

const COLORS_BY_TYPE = {
  aszu: [
    { id: 'pale-gold',   label: '淡金色',     color: '#E8C84A' },
    { id: 'gold',        label: '金黃色',     color: '#FFB700' },
    { id: 'amber',       label: '琥珀色',     color: '#FFBF50' },
    { id: 'deep-amber',  label: '深琥珀',     color: '#C8860D' },
    { id: 'bronze',      label: '古銅色',     color: '#CD7F32' },
    { id: 'mahogany',    label: '桃花心木',   color: '#C04000' },
  ],
  furmint: [
    { id: 'pale-green',  label: '淡青綠',     color: '#D4EAC8' },
    { id: 'pale-straw',  label: '淡草黃',     color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',       color: '#E8D86A' },
    { id: 'pale-gold',   label: '淡金色',     color: '#E8C84A' },
    { id: 'gold',        label: '金黃色',     color: '#FFB700' },
  ],
  feher: [
    { id: 'pale-straw',  label: '淡草黃', color: '#F5EFB2' },
    { id: 'straw',       label: '草黃',   color: '#E8D86A' },
    { id: 'pale-gold',   label: '淡金色', color: '#E8C84A' },
    { id: 'gold',        label: '金黃色', color: '#FFB700' },
  ],
  voros: [
    { id: 'light-ruby',  label: '淡寶石紅', color: '#C0485A' },
    { id: 'ruby-red',    label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',      label: '石榴紅',   color: '#A5174E' },
    { id: 'deep-red',    label: '深寶石紅', color: '#8B0020' },
    { id: 'brick',       label: '磚紅色',   color: '#CB4154' },
  ],
  bikaver: [
    { id: 'ruby-red',    label: '紅寶石紅', color: '#9B1221' },
    { id: 'garnet',      label: '石榴紅',   color: '#A5174E' },
    { id: 'deep-red',    label: '深寶石紅', color: '#8B0020' },
    { id: 'purple-red',  label: '紫紅色',   color: '#6B1B5B' },
  ],
  rozsa: [
    { id: 'pale-rose',   label: '淡玫瑰粉', color: '#FAC4CC' },
    { id: 'salmon',      label: '鮭魚粉',   color: '#FA8072' },
    { id: 'coral',       label: '珊瑚粉',   color: '#F06080' },
  ],
  egyeb: [
    { id: 'pale-gold',   label: '淡金色', color: '#E8C84A' },
    { id: 'ruby-red',    label: '紅寶石', color: '#9B1221' },
  ],
}

const AROMAS_BY_TYPE = {
  aszu: [
    '蜂蜜', '蜂蠟', '金桂花', '橙花',
    '杏桃乾', '桃子醬', '橘皮蜜餞', '糖漬柑橘', '葡萄乾', '無花果乾', '棗子乾',
    '太妃糖', '焦糖', '黑糖蜜',
    '肉桂', '丁香', '薑', '八角', '香草',
    '貴腐霉味（Botrytis）', '蘑菇', '蜜餞複雜',
    '咖啡', '可可', '烤堅果', '烤杏仁',
    '礦物', '燧石', '煙燻', '油脂',
  ],
  furmint: [
    '青蘋果', '水梨', '白桃', '葡萄柚', '萊姆', '青檸',
    '橙花', '金銀花', '白花',
    '礦物', '燧石', '板岩', '濕石頭', '鹽漬',
    '蜂蜜', '蜂蠟',
    '香草', '烤土司', '榛果',
  ],
  feher: [
    '青蘋果', '水梨', '白桃', '杏桃', '蜜瓜',
    '橙花', '金銀花', '洋槐花',
    '礦物', '青草', '百里香',
    '蜂蜜', '烤土司',
  ],
  voros: [
    '覆盆子', '草莓', '紅醋栗', '車厘子',
    '黑醋栗', '藍莓', '黑莓', '黑李', '梅乾',
    '玫瑰', '紫羅蘭',
    '皮革', '大地氣息', '腐葉', '蘑菇',
    '胡椒', '肉桂', '甘草', '丁香',
    '香草', '咖啡', '可可', '烤土司',
  ],
  bikaver: [
    '覆盆子', '黑醋栗', '黑李', '車厘子', '梅乾',
    '紫羅蘭', '玫瑰',
    '皮革', '大地氣息', '鐵礦感', '菸草',
    '胡椒', '辛香料', '甘草', '丁香',
    '香草', '可可', '烤土司', '咖啡',
  ],
  rozsa: [
    '草莓', '覆盆子', '桃子', '西瓜', '石榴',
    '玫瑰花瓣', '薔薇',
    '柑橘', '橙皮', '葡萄柚',
  ],
  egyeb: ['果香', '花香', '礦物', '香料', '橡木', '大地', '複雜'],
}

const TASTE_TAGS_BY_TYPE = {
  aszu:    ['極甜濃郁', '貴腐複雜', '高酸平衡', '蜂蜜甜潤', '果乾豐厚', '香料豐富', '礦物純淨', '油脂圓潤', '悠長尾韻', '永恆典藏'],
  furmint: ['礦物鮮明', '板岩質感', '活潑酸度', '清爽脆口', '花香馥郁', '悠長尾韻', '精準純粹', '細緻優雅'],
  feher:   ['清爽活潑', '花香馥郁', '礦物感', '油脂圓潤', '清淡優雅', '蜂蜜豐厚'],
  voros:   ['飽滿渾厚', '細緻絲滑', '礦物感', '辛香料感', '甜美果香', '活潑酸度', '單寧細膩', '單寧緊緻', '均衡優雅'],
  bikaver: ['飽滿複雜', '鐵礦感', '大地氣息', '辛香料感', '單寧緊緻', '悠長尾韻', '多品種協奏'],
  rozsa:   ['清爽乾型', '豐沛果香', '活潑清脆', '淡雅細緻', '鮮美多汁'],
  egyeb:   ['平衡', '優雅', '複雜', '清爽', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  aszu: [
    { key: 'tannin',  label: '甜度',       hints: ['微甜', '中甜', '甜', '很甜', '極甜'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '清新'] },
    { key: 'body',    label: '濃郁度',     hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '中等', '悠長', '極長', '永恆'] },
  ],
  furmint: [
    { key: 'tannin',  label: '苦感',       hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  feher: [
    { key: 'tannin',  label: '苦感',       hints: ['無', '極微', '微苦', '明顯', '強烈'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  voros: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  bikaver: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '輕柔', '中等', '緊實', '強勁'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  rozsa: [
    { key: 'tannin',  label: '單寧',       hints: ['幾乎沒有', '極輕', '輕柔', '稍緊', '紮實'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '圓潤', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
  egyeb: [
    { key: 'tannin',  label: '結構',       hints: ['1', '2', '3', '4', '5'] },
    { key: 'acidity', label: '酸度',       hints: ['很低', '低', '中等', '活潑', '尖銳'] },
    { key: 'body',    label: '酒體',       hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] },
    { key: 'finish',  label: '尾韻',       hints: ['短促', '尚可', '中等', '悠長', '極長'] },
  ],
}

// ── 計算屬性 ─────────────────────────────────────────────────────
const currentTypeColor = computed(() =>
  WINE_TYPES.find(t => t.id === (form.value.wine_type || 'egyeb'))?.color || '#6B7280'
)
const currentGrapeSuggestions = computed(() =>
  GRAPE_SUGGESTIONS[form.value.wine_type || 'egyeb'] || []
)
const currentColors = computed(() =>
  COLORS_BY_TYPE[form.value.wine_type || 'egyeb'] || []
)
const currentAromas = computed(() =>
  AROMAS_BY_TYPE[form.value.wine_type || 'egyeb'] || []
)
const currentTasteTags = computed(() =>
  TASTE_TAGS_BY_TYPE[form.value.wine_type || 'egyeb'] || []
)
const currentStructure = computed(() =>
  STRUCTURE_BY_TYPE[form.value.wine_type || 'egyeb'] || STRUCTURE_BY_TYPE.egyeb
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
      hu_region:     props.note.hu_region || '',
      tokaj_level:   props.note.tokaj_level || '',
      wine_type:     props.note.wine_type || 'aszu',
      grape_variety: props.note.grape_variety || '',
      aroma_tags:    [...(props.note.aroma_tags || [])],
      taste_tags:    [...(props.note.taste_tags || [])],
    }
  } else {
    form.value.producer  = props.defaultProducer || ''
    form.value.doc_id    = props.defaultDocId    || ''
    form.value.hu_region = props.defaultRegion   || ''
  }
})

// ── Supabase 操作 ─────────────────────────────────────────────────
const save = async () => {
  const producer = form.value.producer.trim()
  if (!producer) return
  saving.value = true

  const payload = {
    user_id:       authState.user.id,
    source:        'hungary',
    aoc_id:        form.value.tokaj_level || form.value.doc_id?.trim() || form.value.hu_region || 'Magyarország',
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
    hu_region:     form.value.hu_region || null,
    tokaj_level:   form.value.tokaj_level || null,
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
.hu-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.55); z-index: 2100;
  display: flex; align-items: flex-end; justify-content: center;
}
@media (min-width: 640px) { .hu-modal-backdrop { align-items: center; } }
.hu-modal-panel {
  background: #fff; border-radius: 20px 20px 0 0;
  width: 100%; max-width: 580px; max-height: 92vh;
  display: flex; flex-direction: column; overflow: hidden;
}
@media (min-width: 640px) { .hu-modal-panel { border-radius: 20px; } }
.hu-modal-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 1.1rem 1.3rem 0.8rem;
  border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px;
}
.hu-modal-title-block { flex: 1; }
.hu-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.hu-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.hu-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.hu-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; flex-shrink: 0; color: #555; }
.hu-modal-close:hover { background: #e5e7eb; }
.hu-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.hu-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.hu-form-section:first-child { border-top: none; }
.hu-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.hu-type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }
@media (max-width: 480px) { .hu-type-grid { grid-template-columns: repeat(3, 1fr); } }
.hu-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.hu-type-btn:hover { border-color: #bbb; background: #f3f4f6; }
.hu-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.hu-type-emoji { font-size: 1.2rem; }
.hu-type-name { font-size: 0.63rem; font-weight: 600; color: inherit; text-align: center; }
.hu-form-row { margin-bottom: 0.8rem; }
.hu-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.hu-text-input, .hu-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.hu-text-input:focus, .hu-select:focus { border-color: #C07F00; }
.hu-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .hu-two-col { grid-template-columns: 1fr; } }
.hu-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .hu-triple-row { grid-template-columns: 1fr 1fr; } }
.hu-form-cell { }
.hu-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.hu-status-toggle { display: flex; gap: 6px; }
.hu-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; text-align: center; }
.hu-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.hu-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.hu-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.hu-vintage-input:focus { border-color: #C07F00; }
.hu-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.hu-star { color: #ddd; transition: color 0.1s; }
.hu-star.filled { color: #F59E0B; }
.hu-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.hu-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.hu-color-dot.selected { border-color: #333; transform: scale(1.15); }
.hu-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.hu-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.hu-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.hu-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; color: #1f1f1f; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.hu-tag-btn:hover { border-color: #bbb; }
.hu-tag-btn.tag-active { color: #fff; transform: translateY(-1px); box-shadow: 0 2px 5px rgba(0,0,0,0.15); }
.hu-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.hu-structure-row { display: flex; align-items: center; gap: 10px; }
.hu-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 60px; flex-shrink: 0; }
.hu-dot-scale { display: flex; gap: 6px; }
.hu-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; transition: color 0.1s; padding: 0; line-height: 1; }
.hu-dot-btn.dot-filled { color: #999; }
.hu-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.hu-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.hu-notes-textarea:focus { border-color: #C07F00; }
.hu-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.hu-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.hu-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.hu-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.hu-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; transition: all 0.15s; min-width: 100px; }
.hu-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.hu-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
