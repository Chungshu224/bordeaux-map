<template>
  <div class="pt-modal-backdrop" @click.self="emit('close')">
    <div class="pt-modal-panel">
      <div class="pt-modal-header" :style="{ borderBottomColor: currentTypeColor }">
        <div class="pt-modal-title-block">
          <h2>{{ form.producer || '新增品飲筆記' }}</h2>
          <p v-if="form.doc_id" class="pt-modal-doc">{{ form.doc_id }}</p>
        </div>
        <span v-if="form.wine_type" class="pt-type-pill" :style="{ background: currentTypeColor }">
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.emoji }}
          {{ WINE_TYPES.find(t => t.id === form.wine_type)?.short }}
        </span>
        <button class="pt-modal-close" @click="emit('close')">✕</button>
      </div>

      <div class="pt-modal-body">
        <!-- 酒款類型 -->
        <section class="pt-form-section">
          <h3 class="pt-section-title">🇵🇹 酒款類型</h3>
          <div class="pt-type-grid">
            <button v-for="t in WINE_TYPES" :key="t.id"
              :class="['pt-type-btn', form.wine_type === t.id && 'selected']"
              :style="form.wine_type === t.id ? { background: t.color, borderColor: t.color, color: '#fff' } : {}"
              @click="selectWineType(t.id)">
              <span class="pt-type-emoji">{{ t.emoji }}</span>
              <span class="pt-type-name">{{ t.short }}</span>
            </button>
          </div>
        </section>

        <!-- Port 等級選擇 (僅 Port 類型) -->
        <section v-if="isPortType" class="pt-form-section">
          <h3 class="pt-section-title">🏷️ Port 類型 / 等級</h3>
          <div class="pt-port-grid">
            <button v-for="cls in PORT_CLASSIFICATIONS" :key="cls.id"
              :class="['pt-port-btn', form.pt_classification === cls.id && 'selected']"
              :style="form.pt_classification === cls.id ? { background: currentTypeColor, borderColor: currentTypeColor, color: '#fff' } : {}"
              @click="form.pt_classification = form.pt_classification === cls.id ? null : cls.id">
              <span class="pt-port-name">{{ cls.name }}</span>
              <span class="pt-port-desc">{{ cls.desc }}</span>
            </button>
          </div>
        </section>

        <!-- 基本資訊 -->
        <section class="pt-form-section">
          <h3 class="pt-section-title">📍 基本資訊</h3>
          <div class="pt-form-row">
            <label class="pt-form-label">酒莊 / 生產者 Quinta</label>
            <input v-model="form.producer"
              placeholder="e.g. Quinta do Noval, Taylor's, Niepoort, Ramos Pinto…"
              class="pt-text-input" />
          </div>
          <div class="pt-form-row">
            <label class="pt-form-label">主要品種 Grape Variety</label>
            <input v-model="form.grape_variety"
              :list="`pt-grape-list-${form.wine_type || 'douro_red'}`"
              placeholder="e.g. Touriga Nacional, Tinta Roriz, Alvarinho…"
              class="pt-text-input" />
            <datalist :id="`pt-grape-list-${form.wine_type || 'douro_red'}`">
              <option v-for="g in currentGrapeSuggestions" :key="g" :value="g" />
            </datalist>
          </div>
          <div class="pt-two-col">
            <div class="pt-form-row">
              <label class="pt-form-label">產區 Wine Region</label>
              <select v-model="form.pt_region" class="pt-select">
                <option value="">-- 請選擇 --</option>
                <optgroup label="North Portugal 北葡">
                  <option value="Douro">Douro (Port & Table Wine)</option>
                  <option value="Minho (Vinho Verde)">Minho (Vinho Verde)</option>
                  <option value="Trás-os-Montes">Trás-os-Montes</option>
                </optgroup>
                <optgroup label="Central Portugal 中部">
                  <option value="Dão">Dão</option>
                  <option value="Bairrada">Bairrada</option>
                  <option value="Beira Interior">Beira Interior</option>
                  <option value="Tejo">Tejo</option>
                </optgroup>
                <optgroup label="South Portugal 南部">
                  <option value="Alentejo">Alentejo</option>
                  <option value="Algarve">Algarve</option>
                  <option value="Lisboa">Lisboa</option>
                  <option value="Setúbal (Moscatel)">Setúbal (Moscatel)</option>
                </optgroup>
                <optgroup label="Islands 離島">
                  <option value="Madeira">Madeira</option>
                  <option value="Açores">Açores</option>
                </optgroup>
              </select>
            </div>
            <div class="pt-form-row">
              <label class="pt-form-label">酒款名稱</label>
              <input v-model="form.doc_id" placeholder="e.g. Vintage Port 2016, Nacional…" class="pt-text-input" />
            </div>
          </div>
        </section>

        <!-- 品飲記錄 -->
        <section class="pt-form-section">
          <h3 class="pt-section-title">🍷 品飲記錄</h3>
          <div class="pt-triple-row">
            <div class="pt-form-cell">
              <label class="pt-cell-label">狀態</label>
              <div class="pt-status-toggle">
                <button :class="['pt-stbtn', form.status === 'tried' && 'tried-active']" @click="form.status = 'tried'">✓ 已品飲</button>
                <button :class="['pt-stbtn', form.status === 'wishlist' && 'wish-active']" @click="form.status = 'wishlist'">♡ 想喝</button>
              </div>
            </div>
            <div class="pt-form-cell">
              <label class="pt-cell-label">年份 Vintage</label>
              <input type="number" v-model.number="form.vintage" min="1800" max="2030" placeholder="e.g. 2011" class="pt-vintage-input" />
            </div>
            <div class="pt-form-cell">
              <label class="pt-cell-label">評分</label>
              <div class="pt-star-row">
                <span v-for="i in 5" :key="i" :class="['pt-star', form.rating >= i && 'filled']" @click="form.rating = form.rating === i ? null : i">★</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 外觀顏色 -->
        <section v-if="form.status === 'tried' && currentColors.length" class="pt-form-section">
          <h3 class="pt-section-title">🎨 外觀顏色</h3>
          <div class="pt-color-palette">
            <button v-for="c in currentColors" :key="c.id" :title="c.label"
              :class="['pt-color-dot', form.color_desc === c.id && 'selected']"
              :style="{ background: c.color }" @click="form.color_desc = form.color_desc === c.id ? null : c.id">
              <span v-if="form.color_desc === c.id" class="pt-color-check">✓</span>
            </button>
          </div>
          <p v-if="form.color_desc" class="pt-color-hint">{{ currentColors.find(c => c.id === form.color_desc)?.label }}</p>
        </section>

        <!-- 香氣 -->
        <section v-if="form.status === 'tried'" class="pt-form-section">
          <h3 class="pt-section-title">👃 香氣 Aromas</h3>
          <div class="pt-tag-grid">
            <button v-for="tag in currentAromas" :key="tag"
              :class="['pt-tag-btn', form.aroma_tags.includes(tag) && 'tag-active']"
              :style="form.aroma_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.aroma_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 口感標籤 -->
        <section v-if="form.status === 'tried'" class="pt-form-section">
          <h3 class="pt-section-title">👅 口感 Palate</h3>
          <div class="pt-tag-grid">
            <button v-for="tag in currentTasteTags" :key="tag"
              :class="['pt-tag-btn', form.taste_tags.includes(tag) && 'tag-active']"
              :style="form.taste_tags.includes(tag) ? { background: currentTypeColor, borderColor: currentTypeColor } : {}"
              @click="toggleTag(form.taste_tags, tag)">{{ tag }}</button>
          </div>
        </section>

        <!-- 結構感 -->
        <section v-if="form.status === 'tried'" class="pt-form-section">
          <h3 class="pt-section-title">📐 結構感</h3>
          <div class="pt-structure-grid">
            <div v-for="item in currentStructure" :key="item.key" class="pt-structure-row">
              <span class="pt-structure-label">{{ item.label }}</span>
              <div class="pt-dot-scale">
                <button v-for="i in 5" :key="i"
                  :class="['pt-dot-btn', form[item.key] >= i && 'dot-filled']"
                  :style="form[item.key] >= i ? { color: currentTypeColor } : {}"
                  @click="form[item.key] = form[item.key] === i ? null : i">●</button>
              </div>
              <span class="pt-hint">{{ item.hints[(form[item.key] || 0) - 1] || '' }}</span>
            </div>
          </div>
        </section>

        <!-- 心得筆記 -->
        <section class="pt-form-section">
          <h3 class="pt-section-title">📝 心得筆記</h3>
          <textarea v-model="form.notes" class="pt-notes-textarea"
            placeholder="記錄品飲心得、Vintage Port 陳年潛力、Douro 餐酒特色、Vinho Verde 清新感…" rows="4" />
        </section>
      </div>

      <div class="pt-modal-footer">
        <button v-if="props.note?.id" class="pt-btn-delete" :disabled="deleting" @click="confirmDelete">{{ deleting ? '刪除中…' : '🗑 刪除' }}</button>
        <button class="pt-btn-save" :disabled="saving || !form.producer.trim()" :style="{ background: currentTypeColor }" @click="save">{{ saving ? '儲存中…' : '💾 儲存筆記' }}</button>
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
  wine_type: 'port_vintage', producer: '', grape_variety: '', doc_id: '', pt_region: '', pt_classification: null,
  status: 'tried', vintage: null, rating: null, color_desc: null,
  aroma_tags: [], taste_tags: [], tannin: null, acidity: null, body: null, finish: null, notes: '',
})
const saving = ref(false)
const deleting = ref(false)

const WINE_TYPES = [
  { id: 'port_vintage', emoji: '🏆', short: 'Vintage Port', color: '#5B0F1E' },
  { id: 'port_lbv',     emoji: '📅', short: 'LBV Port',     color: '#7B1A2A' },
  { id: 'port_tawny',   emoji: '🥃', short: 'Tawny Port',   color: '#9B5A00' },
  { id: 'port_ruby',    emoji: '💎', short: 'Ruby Port',     color: '#8B1A1A' },
  { id: 'port_white',   emoji: '🌟', short: 'White Port',    color: '#C4A217' },
  { id: 'vinho_verde',  emoji: '🌿', short: 'Vinho Verde',   color: '#3A7A3A' },
  { id: 'douro_red',    emoji: '🍷', short: 'Douro Red',     color: '#6B1A1A' },
  { id: 'douro_white',  emoji: '🥂', short: 'Douro White',   color: '#B8981A' },
  { id: 'alentejo',     emoji: '☀️',  short: 'Alentejo',     color: '#C07A1A' },
  { id: 'dao',          emoji: '🌲', short: 'Dão',           color: '#4A6A2A' },
  { id: 'madeira',      emoji: '🏝️',  short: 'Madeira',      color: '#8B6914' },
  { id: 'other',        emoji: '🇵🇹', short: '其他',          color: '#6B7280' },
]

const isPortType = computed(() => ['port_vintage', 'port_lbv', 'port_tawny', 'port_ruby', 'port_white'].includes(form.value.wine_type))

const PORT_CLASSIFICATIONS = [
  { id: 'vintage', name: 'Vintage Port', desc: '單一年份，需醒酒' },
  { id: 'lbv', name: 'Late Bottled Vintage', desc: '4-6年木桶後裝瓶' },
  { id: 'colheita', name: 'Colheita', desc: '單一年份 Tawny' },
  { id: 'tawny_10', name: 'Tawny 10 Anos', desc: '10年平均陳年' },
  { id: 'tawny_20', name: 'Tawny 20 Anos', desc: '20年平均陳年' },
  { id: 'tawny_30', name: 'Tawny 30 Anos', desc: '30年平均陳年' },
  { id: 'tawny_40', name: 'Tawny 40 Anos', desc: '40年以上陳年' },
  { id: 'ruby_reserva', name: 'Ruby Reserva', desc: 'Special Reserve' },
  { id: 'white_dry', name: 'White Port Dry', desc: '不甜白波特' },
  { id: 'white_sweet', name: 'White Port Sweet', desc: '甜白波特' },
  { id: 'crusted', name: 'Crusted Port', desc: '多年份混調' },
]

const GRAPE_SUGGESTIONS = {
  port_vintage:['Touriga Nacional', 'Tinta Roriz (Tempranillo)', 'Touriga Franca', 'Tinta Cão', 'Tinta Barroca'],
  port_lbv:    ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinta Barroca'],
  port_tawny:  ['Touriga Nacional', 'Tinta Roriz', 'Touriga Franca', 'Tinta Cão', 'Tinta Barroca'],
  port_ruby:   ['Touriga Nacional', 'Tinta Roriz', 'Touriga Franca'],
  port_white:  ['Malvasia Fina', 'Rabigato', 'Viosinho', 'Arinto', 'Moscatel Galego Branco'],
  vinho_verde: ['Alvarinho', 'Loureiro', 'Arinto', 'Trajadura', 'Azal'],
  douro_red:   ['Touriga Nacional', 'Touriga Franca', 'Tinta Roriz', 'Tinta Barroca', 'Tinta Cão'],
  douro_white: ['Rabigato', 'Viosinho', 'Malvasia Fina', 'Arinto', 'Moscatel Galego Branco'],
  alentejo:    ['Aragonez', 'Trincadeira', 'Alicante Bouschet', 'Antão Vaz', 'Arinto'],
  dao:         ['Touriga Nacional', 'Tinta Roriz', 'Alfrocheiro', 'Encruzado'],
  madeira:     ['Sercial', 'Verdelho', 'Bual', 'Malmsey (Malvasia)', 'Terrantez'],
  other:       ['Baga', 'Castelão', 'Fernão Pires', 'Avesso'],
}

const COLORS_BY_TYPE = {
  port_vintage:  [{ id: 'deep-ruby', label: '深紅', color: '#7B0020' }, { id: 'inky', label: '墨黑紅', color: '#3D0010' }, { id: 'garnet', label: '石榴紅（成熟）', color: '#A5174E' }],
  port_lbv:      [{ id: 'deep-ruby', label: '深紅', color: '#7B0020' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }],
  port_tawny:    [{ id: 'light-tawny', label: '淺棕橙', color: '#E4A84A' }, { id: 'tawny', label: '棕橙', color: '#C86C20' }, { id: 'dark-tawny', label: '深棕褐', color: '#8B3A00' }, { id: 'amber', label: '琥珀', color: '#FFBF50' }],
  port_ruby:     [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'deep-ruby', label: '深紅', color: '#7B0020' }, { id: 'purple', label: '紫紅', color: '#6B0B5B' }],
  port_white:    [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'gold', label: '金黃', color: '#FFB700' }],
  vinho_verde:   [{ id: 'pale-green', label: '淡青綠', color: '#D4EAC8' }, { id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }],
  douro_red:     [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'deep-ruby', label: '深紅', color: '#7B0020' }],
  douro_white:   [{ id: 'pale-straw', label: '淡草黃', color: '#F5EFB2' }, { id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'gold', label: '金黃', color: '#FFB700' }],
  alentejo:      [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'inky', label: '深黑紅', color: '#3D0010' }],
  dao:           [{ id: 'ruby', label: '紅寶石', color: '#9B1221' }, { id: 'garnet', label: '石榴紅', color: '#A5174E' }, { id: 'pale-ruby', label: '淡紅寶石', color: '#C0485A' }],
  madeira:       [{ id: 'amber', label: '琥珀', color: '#FFBF50' }, { id: 'tawny', label: '棕橙', color: '#C86C20' }, { id: 'dark-amber', label: '深琥珀', color: '#A87600' }],
  other:         [{ id: 'straw', label: '草黃', color: '#E8D86A' }, { id: 'ruby', label: '紅寶石', color: '#9B1221' }],
}

const AROMAS_BY_TYPE = {
  port_vintage:  ['黑醋栗', '黑莓', '藍莓', '黑李', '紫羅蘭', '皮革', '甘草', '松露', '巧克力', '香草', '雪松', '太妃糖（成熟後）', '無花果（成熟後）', '堅果（成熟後）'],
  port_lbv:      ['黑莓', '黑醋栗', '李子', '巧克力', '香草', '皮革', '辛香料', '太妃糖'],
  port_tawny:    ['杏仁', '榛果', '核桃', '焦糖', '太妃糖', '乾燥無花果', '橙皮蜜餞', '杏桃乾', '咖啡', '香草', '蜂蠟', '蘭姆酒'],
  port_ruby:     ['黑莓', '覆盆子', '紅莓', '黑李', '巧克力', '香草', '辛香料'],
  port_white:    ['白桃', '杏桃', '花香', '蜂蜜', '橙花', '堅果（乾型）', '香草（甜型）'],
  vinho_verde:   ['萊姆', '青蘋果', '柑橘', '桃子', '白花', '礦物', '微泡清涼'],
  douro_red:     ['黑莓', '藍莓', '黑李', '紫羅蘭', '辛香料', '皮革', '礦物', '橡木', '巧克力'],
  douro_white:   ['桃子', '杏桃', '柑橘', '花香', '礦物', '蜂蜜'],
  alentejo:      ['黑莓', '黑李', '覆盆子', '辛香料', '皮革', '橡木', '太陽曬熱果香', '大地氣息'],
  dao:           ['草莓', '覆盆子', '黑莓', '礦物', '花香', '草本', '雪松', '皮革'],
  madeira:       ['橙皮蜜餞', '杏桃乾', '核桃', '焦糖', '太妃糖', '煙燻', '蜂蜜', '鹹味礦物', '苦橙'],
  other:         ['果香', '花香', '礦物', '草本', '香料', '橡木'],
}

const TASTE_TAGS_BY_TYPE = {
  port_vintage:  ['飽滿濃郁', '緊緻單寧', '甜蜜悠長', '複雜多層', '需要醒酒', '陳年潛力驚人', '黑果奔放'],
  port_lbv:      ['平衡圓潤', '甜蜜可口', '比 Vintage 易開', '果香豐沛', '細膩單寧'],
  port_tawny:    ['氧化複雜', '堅果甜香', '不甜膩', '長尾韻', '冰鎮好喝', '餐前餐後皆宜'],
  port_ruby:     ['清甜果香', '平易近人', '年輕活潑', '適合入門'],
  port_white:    ['清爽脆口（乾型）', '甜蜜花香（甜型）', '適合餐前酒', '加冰塊或通寧水'],
  vinho_verde:   ['清爽活潑', '低酒精', '微氣泡感', '海鮮絕配', '夏日首選'],
  douro_red:     ['飽滿渾厚', '黑果濃郁', '礦物感強', '長期陳年潛力', '單寧緊實'],
  douro_white:   ['礦物純淨', '清爽活潑', '花香優雅', '酒體適中'],
  alentejo:      ['飽滿溫暖', '陽光果香', '黑果豐盛', '橡木融合', '平易近人'],
  dao:           ['優雅細膩', '礦物清新', '紅果活潑', '清爽的單寧', '涼爽山地風格'],
  madeira:       ['極致複雜', '鹹甜交錯', '氧化獨特', '悠長永恆', '烹飪聖品亦可品飲'],
  other:         ['平衡', '優雅', '清爽', '果香', '飽滿'],
}

const STRUCTURE_BY_TYPE = {
  port_vintage:  [{ key: 'tannin', label: '單寧', hints: ['輕柔', '中等', '緊實', '強勁', '極強'] }, { key: 'acidity', label: '酸度', hints: ['低', '中低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '甜度', hints: ['微甜', '中甜', '甜', '很甜', '極甜'] }, { key: 'finish', label: '尾韻', hints: ['中等', '悠長', '很長', '極長', '永恆'] }],
  port_tawny:    [{ key: 'tannin', label: '甜度', hints: ['微甜', '中甜', '甜', '很甜', '極甜'] }, { key: 'acidity', label: '酸度', hints: ['低', '中低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '濃郁度', hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] }, { key: 'finish', label: '尾韻', hints: ['短促', '中等', '悠長', '極長', '永恆'] }],
  vinho_verde:   [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['低', '中低', '清爽', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['極輕', '輕盈', '輕-中', '中等', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '清脆', '中等', '悠長', '極長'] }],
  madeira:       [{ key: 'tannin', label: '苦感', hints: ['無', '極微', '微苦', '明顯', '強烈'] }, { key: 'acidity', label: '酸度', hints: ['低', '中等', '活潑', '尖銳', '刺激'] }, { key: 'body', label: '濃郁度', hints: ['中等', '飽滿', '濃郁', '黏稠', '極濃'] }, { key: 'finish', label: '尾韻', hints: ['中等', '悠長', '很長', '極長', '永恆'] }],
  default:       [{ key: 'tannin', label: '單寧', hints: ['幾乎無', '輕柔', '中等', '緊實', '強勁'] }, { key: 'acidity', label: '酸度', hints: ['很低', '低', '中等', '活潑', '尖銳'] }, { key: 'body', label: '酒體', hints: ['輕盈', '輕-中', '中等', '中-飽', '飽滿'] }, { key: 'finish', label: '尾韻', hints: ['短促', '尚可', '中等', '悠長', '極長'] }],
}

const currentTypeColor = computed(() => WINE_TYPES.find(t => t.id === (form.value.wine_type || 'other'))?.color || '#6B7280')
const currentGrapeSuggestions = computed(() => GRAPE_SUGGESTIONS[form.value.wine_type || 'other'] || [])
const currentColors = computed(() => COLORS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentAromas = computed(() => AROMAS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentTasteTags = computed(() => TASTE_TAGS_BY_TYPE[form.value.wine_type || 'other'] || [])
const currentStructure = computed(() => STRUCTURE_BY_TYPE[form.value.wine_type] || STRUCTURE_BY_TYPE.default)

const selectWineType = (id) => {
  const prev = form.value.wine_type; form.value.wine_type = id
  if (prev !== id) { form.value.color_desc = null; form.value.aroma_tags = []; form.value.taste_tags = []; form.value.tannin = null; form.value.acidity = null; form.value.body = null; form.value.finish = null; form.value.pt_classification = null }
}
const toggleTag = (arr, tag) => { const idx = arr.indexOf(tag); if (idx === -1) arr.push(tag); else arr.splice(idx, 1) }

onMounted(() => {
  if (props.note) {
    form.value = { ...form.value, ...props.note, producer: props.note.chateau_name || '', doc_id: props.note.aoc_id || '', pt_region: props.note.pt_region || '', pt_classification: props.note.pt_classification || null, wine_type: props.note.wine_type || 'port_vintage', grape_variety: props.note.grape_variety || '', aroma_tags: [...(props.note.aroma_tags || [])], taste_tags: [...(props.note.taste_tags || [])] }
  }
})

const save = async () => {
  const producer = form.value.producer.trim(); if (!producer) return
  saving.value = true
  const payload = {
    user_id: authState.user.id, source: 'portugal',
    aoc_id: form.value.pt_region || form.value.doc_id?.trim() || 'Portugal',
    chateau_name: producer, vintage: form.value.vintage || null, status: form.value.status,
    rating: form.value.rating, color_desc: form.value.color_desc,
    aroma_tags: form.value.aroma_tags.length ? form.value.aroma_tags : null,
    taste_tags: form.value.taste_tags.length ? form.value.taste_tags : null,
    tannin: form.value.tannin, acidity: form.value.acidity, body: form.value.body, finish: form.value.finish,
    notes: form.value.notes || null, wine_type: form.value.wine_type || null,
    grape_variety: form.value.grape_variety?.trim() || null, pt_region: form.value.pt_region || null,
    pt_classification: form.value.pt_classification || null,
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
.pt-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 2100; display: flex; align-items: flex-end; justify-content: center; }
@media (min-width: 640px) { .pt-modal-backdrop { align-items: center; } }
.pt-modal-panel { background: #fff; border-radius: 20px 20px 0 0; width: 100%; max-width: 580px; max-height: 92vh; display: flex; flex-direction: column; overflow: hidden; }
@media (min-width: 640px) { .pt-modal-panel { border-radius: 20px; } }
.pt-modal-header { display: flex; justify-content: space-between; align-items: flex-start; padding: 1.1rem 1.3rem 0.8rem; border-bottom: 2px solid #e8e8e8; flex-shrink: 0; gap: 10px; }
.pt-modal-title-block { flex: 1; }
.pt-modal-header h2 { margin: 0; font-size: 1.05rem; font-weight: 700; color: #1a1a1a; }
.pt-modal-doc { margin: 2px 0 0; font-size: 0.78rem; color: #888; }
.pt-type-pill { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; color: #fff; flex-shrink: 0; align-self: center; white-space: nowrap; }
.pt-modal-close { background: #f3f4f6; border: none; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; color: #555; }
.pt-modal-close:hover { background: #e5e7eb; }
.pt-modal-body { overflow-y: auto; flex: 1; padding: 0 1.3rem 0.8rem; }
.pt-form-section { margin-bottom: 1.3rem; padding-top: 1rem; border-top: 1px solid #f0f0f0; }
.pt-form-section:first-child { border-top: none; }
.pt-section-title { font-size: 0.8rem; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 0.04em; margin: 0 0 0.8rem; }
.pt-type-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; }
.pt-type-btn { display: flex; flex-direction: column; align-items: center; padding: 9px 4px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; gap: 3px; }
.pt-type-btn:hover { border-color: #bbb; }
.pt-type-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.pt-type-emoji { font-size: 1.2rem; }
.pt-type-name { font-size: 0.63rem; font-weight: 600; text-align: center; }
.pt-port-grid { display: flex; flex-wrap: wrap; gap: 7px; }
.pt-port-btn { display: flex; flex-direction: column; align-items: flex-start; padding: 7px 12px; border-radius: 10px; border: 1.5px solid #e0e0e0; background: #fafafa; cursor: pointer; transition: all 0.15s; min-width: 120px; }
.pt-port-btn:hover { border-color: #bbb; }
.pt-port-btn.selected { transform: translateY(-1px); box-shadow: 0 3px 8px rgba(0,0,0,0.15); }
.pt-port-name { font-size: 0.78rem; font-weight: 700; }
.pt-port-desc { font-size: 0.65rem; color: inherit; opacity: 0.8; }
.pt-form-row { margin-bottom: 0.8rem; }
.pt-form-label { display: block; font-size: 0.78rem; color: #555; font-weight: 600; margin-bottom: 5px; }
.pt-text-input, .pt-select { width: 100%; padding: 9px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; outline: none; transition: border-color 0.15s; box-sizing: border-box; background: white; }
.pt-text-input:focus, .pt-select:focus { border-color: #5B0F1E; }
.pt-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .pt-two-col { grid-template-columns: 1fr; } }
.pt-triple-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
@media (max-width: 480px) { .pt-triple-row { grid-template-columns: 1fr 1fr; } }
.pt-form-cell { }
.pt-cell-label { display: block; font-size: 0.75rem; color: #888; font-weight: 600; margin-bottom: 6px; }
.pt-status-toggle { display: flex; gap: 6px; }
.pt-stbtn { flex: 1; padding: 7px 8px; border: 1.5px solid #ddd; border-radius: 10px; background: #f9f9f9; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.pt-stbtn.tried-active  { background: #2E7D32; border-color: #2E7D32; color: #fff; }
.pt-stbtn.wish-active   { background: #E91E63; border-color: #E91E63; color: #fff; }
.pt-vintage-input { width: 100%; padding: 8px 10px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; text-align: center; outline: none; box-sizing: border-box; }
.pt-star-row { display: flex; gap: 4px; font-size: 1.3rem; cursor: pointer; }
.pt-star { color: #ddd; transition: color 0.1s; }
.pt-star.filled { color: #F59E0B; }
.pt-color-palette { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
.pt-color-dot { width: 34px; height: 34px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.pt-color-dot.selected { border-color: #333; transform: scale(1.15); }
.pt-color-check { font-size: 0.8rem; color: #fff; font-weight: 900; text-shadow: 0 0 3px rgba(0,0,0,0.7); }
.pt-color-hint { font-size: 0.78rem; color: #666; margin: 0; }
.pt-tag-grid { display: flex; flex-wrap: wrap; gap: 6px; }
.pt-tag-btn { padding: 5px 12px; border-radius: 20px; border: 1.5px solid #e0e0e0; background: #f9f9f9; color: #1f1f1f; font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.pt-tag-btn.tag-active { color: #fff; transform: translateY(-1px); }
.pt-structure-grid { display: flex; flex-direction: column; gap: 10px; }
.pt-structure-row { display: flex; align-items: center; gap: 10px; }
.pt-structure-label { font-size: 0.78rem; font-weight: 600; color: #555; width: 50px; flex-shrink: 0; }
.pt-dot-scale { display: flex; gap: 6px; }
.pt-dot-btn { background: none; border: none; font-size: 1rem; color: #ddd; cursor: pointer; padding: 0; line-height: 1; }
.pt-dot-btn.dot-filled { color: #999; }
.pt-hint { font-size: 0.7rem; color: #888; min-width: 50px; }
.pt-notes-textarea { width: 100%; padding: 10px 12px; border: 1.5px solid #ddd; border-radius: 10px; font-size: 0.88rem; font-family: inherit; resize: vertical; outline: none; box-sizing: border-box; }
.pt-notes-textarea:focus { border-color: #5B0F1E; }
.pt-modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 0.8rem 1.3rem 1rem; border-top: 1px solid #f0f0f0; flex-shrink: 0; }
.pt-btn-delete { background: #fff; border: 1.5px solid #e5e7eb; color: #DC2626; padding: 10px 18px; border-radius: 12px; font-size: 0.88rem; font-weight: 600; cursor: pointer; }
.pt-btn-delete:hover:not(:disabled) { background: #FEF2F2; border-color: #DC2626; }
.pt-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }
.pt-btn-save { color: #fff; border: none; padding: 10px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; cursor: pointer; min-width: 100px; }
.pt-btn-save:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
.pt-btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
