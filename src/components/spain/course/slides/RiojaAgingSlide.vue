<template>
  <div class="rioja-aging-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Rioja 陳年分級——Joven 至 Gran Reserva' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="content-wrapper">
      <!-- 等級選擇條 -->
      <div class="level-selector">
        <button
          v-for="(lv, i) in levels"
          :key="lv.key"
          class="level-btn"
          :class="{ active: activeKey === lv.key }"
          :style="{ '--lv-color': lv.color }"
          @click="activeKey = lv.key"
        >
          <span class="level-num">{{ i + 1 }}</span>
          <span class="level-name">{{ lv.name }}</span>
          <span class="level-min">{{ lv.minTotal }}</span>
        </button>
      </div>

      <!-- 詳情卡 -->
      <div class="detail-card" :style="{ borderColor: activeLevel.color }">
        <div class="detail-header" :style="{ backgroundColor: activeLevel.color }">
          <div>
            <h3>{{ activeLevel.icon }} {{ activeLevel.name }}</h3>
            <span class="detail-tagline">{{ activeLevel.tagline }}</span>
          </div>
          <div class="aging-summary">
            <span class="aging-num">{{ activeLevel.minTotal }}</span>
            <span class="aging-text">總陳年</span>
          </div>
        </div>

        <div class="detail-body">
          <!-- 陳年時間軸 -->
          <div class="timeline-section">
            <h4>⏳ 陳年時間軸</h4>
            <div class="timeline-bar">
              <div
                class="timeline-segment oak"
                :style="{ flex: activeLevel.oakMonths }"
                v-if="activeLevel.oakMonths"
              >
                <span class="seg-label">🛢️ 橡木桶 {{ activeLevel.oakMonths }} 個月</span>
              </div>
              <div
                class="timeline-segment bottle"
                :style="{ flex: activeLevel.bottleMonths }"
                v-if="activeLevel.bottleMonths"
              >
                <span class="seg-label">🍾 瓶陳 {{ activeLevel.bottleMonths }} 個月</span>
              </div>
            </div>
            <p class="timeline-note" v-if="activeLevel.whiteNote">
              <strong>白酒 / 粉紅酒：</strong>{{ activeLevel.whiteNote }}
            </p>
          </div>

          <div class="info-grid">
            <div class="info-block">
              <h4>📐 法定要求</h4>
              <ul>
                <li v-for="(rule, i) in activeLevel.rules" :key="i">{{ rule }}</li>
              </ul>
            </div>
            <div class="info-block">
              <h4>🍷 風格特徵</h4>
              <p>{{ activeLevel.style }}</p>
            </div>
            <div class="info-block">
              <h4>👃 香氣演化</h4>
              <div class="aroma-chips">
                <span
                  v-for="a in activeLevel.aromas"
                  :key="a"
                  class="chip"
                  :style="{ borderColor: activeLevel.color, backgroundColor: activeLevel.color + '22' }"
                >{{ a }}</span>
              </div>
            </div>
            <div class="info-block">
              <h4>💰 價格區間 / 飲用建議</h4>
              <p class="price">{{ activeLevel.priceRange }}</p>
              <p class="advice">{{ activeLevel.advice }}</p>
            </div>
            <div class="info-block full-width">
              <h4>🌟 經典酒款代表</h4>
              <div class="example-grid">
                <div v-for="ex in activeLevel.examples" :key="ex.name" class="ex-card">
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 酒標識別線索 -->
          <div class="label-tip" v-if="activeLevel.labelTip">
            <span class="tip-icon">🔍</span>
            <div>
              <strong>酒標識別線索：</strong>
              <p>{{ activeLevel.labelTip }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const defaultLevels = [
  {
    key: 'joven',
    name: 'Joven / Cosecha',
    icon: '🌱',
    color: '#7A9070',
    tagline: '年輕新鮮——當年採收即釋出',
    minTotal: '< 12 個月',
    oakMonths: 0,
    bottleMonths: 0,
    whiteNote: '無特殊陳年要求',
    rules: [
      '無強制陳年要求',
      '採收當年或次年即可上市',
      '無橡木桶接觸要求',
      '酒標可標示「Cosecha」或「Joven」'
    ],
    style: '果香奔放、酒體輕至中等、單寧柔軟、新鮮易飲。展現 Tempranillo 最純粹的紅櫻桃與紫羅蘭果香，無橡木桶影響。',
    aromas: ['紅櫻桃', '草莓', '紫羅蘭', '青草', '紅醋栗'],
    priceRange: '€5 – €12',
    advice: '即飲、不適合陳年；最佳搭配 Tapas 與輕度紅肉料理。',
    examples: [
      { name: 'Bodegas Faustino I Joven', note: '商業日常款' },
      { name: 'Marqués de Cáceres Joven', note: '入門經典' },
      { name: 'Olivier Rivière「Rayos Uva」', note: '新派低介入款' }
    ],
    labelTip: '酒標只標示年份（cosecha）、無「Crianza/Reserva/Gran Reserva」字樣。背標通常是淺色。'
  },
  {
    key: 'crianza',
    name: 'Crianza',
    icon: '🛢️',
    color: '#C7B299',
    tagline: '入門陳年——24 個月以上的橡木桶與瓶陳',
    minTotal: '24 個月（紅）/ 18 個月（白&粉紅）',
    oakMonths: 12,
    bottleMonths: 12,
    whiteNote: '白酒/粉紅酒：18 個月總陳年（其中至少 6 個月在橡木桶）',
    rules: [
      '紅酒：總陳年至少 24 個月',
      '其中至少 12 個月在橡木桶（225 升 barrica）',
      '其餘 12 個月在瓶中陳年',
      '採收後第 3 年起方可上市'
    ],
    style: '果香與橡木桶平衡良好、單寧柔軟、酸度活潑。Tempranillo 開始發展香草、椰子（美國橡木）或丁香（法國橡木）香氣。整體易飲性高、性價比優秀。',
    aromas: ['紅櫻桃', '李子', '香草', '椰子', '雪松', '紅椒粉'],
    priceRange: '€8 – €25',
    advice: '上市後 3-7 年內飲用最佳；性價比最高的 Rioja 等級。',
    examples: [
      { name: 'CVNE Cune Crianza', note: '最暢銷 Rioja 之一' },
      { name: 'La Rioja Alta Viña Alberdi', note: '古典派' },
      { name: 'Bodegas Roda「Sela」', note: '現代派代表' },
      { name: 'Muga Reserva（前身為 Crianza）', note: '中庸派標竿' }
    ],
    labelTip: '酒標 / 背標金色印有「CRIANZA」字樣 + Consejo Regulador 印章。木桶圖案常出現於背標。'
  },
  {
    key: 'reserva',
    name: 'Reserva',
    icon: '🏛️',
    color: '#D4A574',
    tagline: '陳年精品——Tempranillo 的成熟表達',
    minTotal: '36 個月（紅）/ 24 個月（白&粉紅）',
    oakMonths: 12,
    bottleMonths: 24,
    whiteNote: '白酒/粉紅酒：24 個月總陳年（其中至少 6 個月在橡木桶）',
    rules: [
      '紅酒：總陳年至少 36 個月',
      '其中至少 12 個月在橡木桶',
      '其餘至少 24 個月在瓶中陳年',
      '通常使用較佳年份的葡萄'
    ],
    style: '單寧成熟柔軟、果香與第二、三類香氣（皮革、雪茄、香料）平衡。酒體中至飽滿、酸度仍活潑。是 Rioja 最具「西班牙風格」的等級——介於年輕果香與老酒複雜度之間。',
    aromas: ['李子乾', '皮革', '雪茄盒', '雪松', '香料', '紅椒粉', '可可'],
    priceRange: '€15 – €60',
    advice: '上市後 5-15 年飲用最佳；可短期收藏。最適合烤羊肉、Manchego 陳年版。',
    examples: [
      { name: 'Marqués de Murrieta Reserva', note: '古典派標竿' },
      { name: 'Faustino I Gran Reserva（其實標 Reserva 但常見）', note: '經典' },
      { name: 'CVNE Imperial Reserva', note: 'Wine Spectator 年度第一（2013）' },
      { name: 'Roda Reserva', note: '現代派代表' }
    ],
    labelTip: '酒標 / 背標金色印有「RESERVA」+ Consejo Regulador 印章。背標通常較精緻、含產區子分區資訊。'
  },
  {
    key: 'gran-reserva',
    name: 'Gran Reserva',
    icon: '👑',
    color: '#B8860B',
    tagline: '頂級陳年——5 年以上的耐心',
    minTotal: '60 個月（紅）/ 48 個月（白&粉紅）',
    oakMonths: 24,
    bottleMonths: 36,
    whiteNote: '白酒/粉紅酒：48 個月總陳年（其中至少 6 個月在橡木桶）',
    rules: [
      '紅酒：總陳年至少 60 個月（5 年）',
      '其中至少 24 個月在橡木桶',
      '其餘至少 36 個月在瓶中陳年',
      '僅在優異年份釋出（部分酒莊）',
      '採收後第 6 年起方可上市'
    ],
    style: '極致優雅、單寧完全融合、酸度仍存。果香轉為乾燥水果（無花果、李子乾）與第三類香氣（皮革、菸草、松露、森林地表）。淺色酒體（橘紅邊緣）卻能呈現驚人複雜度。',
    aromas: ['無花果乾', '皮革', '菸草', '松露', '森林地表', '雪茄盒', '甘草', '椰子奶油'],
    priceRange: '€25 – €500+',
    advice: '上市後 10-30 年飲用最佳；López de Heredia Tondonia 等可達 50 年。最頂級年份具收藏投資價值。',
    examples: [
      { name: 'López de Heredia Viña Tondonia Gran Reserva', note: '古典派神級' },
      { name: 'Marqués de Murrieta Castillo Ygay', note: '最古老連續釀造款' },
      { name: 'La Rioja Alta 904 Gran Reserva', note: '經典款（10 年陳年）' },
      { name: 'CVNE Imperial Gran Reserva', note: 'Wine Spectator 年度第一' },
      { name: 'Vega Sicilia Único', note: '雖屬 Ribera del Duero，常被類比' }
    ],
    labelTip: '酒標 / 背標金色印有「GRAN RESERVA」+ Consejo Regulador 印章。背標常標明採收年份、桶陳/瓶陳具體月數。歲老款酒色明顯橘紅化。'
  }
]

const levels = computed(() => props.slide.levels || defaultLevels)
const activeKey = ref(props.slide.defaultKey || 'reserva')
const activeLevel = computed(() => levels.value.find((l) => l.key === activeKey.value) || levels.value[0])
</script>

<style scoped>
.rioja-aging-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fdf6ec 0%, #f5e3c8 100%);
  color: #2d1a0f;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #C0392B;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.level-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
}

.level-btn {
  background: #fff;
  border: 2px solid #f3e9d8;
  border-radius: 10px;
  padding: 0.8rem 0.6rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(192, 57, 43, 0.08);
}

.level-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(192, 57, 43, 0.18);
}

.level-btn.active {
  border-color: var(--lv-color);
  background: linear-gradient(135deg, #fff 0%, var(--lv-color, #B8860B) 200%);
  box-shadow: 0 6px 16px rgba(184, 134, 11, 0.3);
  transform: translateY(-2px);
}

.level-num {
  background: var(--lv-color);
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
}

.level-name {
  font-weight: 600;
  color: #2d1a0f;
  font-size: 0.9rem;
}

.level-min {
  font-size: 0.72rem;
  color: #7a6048;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border: 2px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(192, 57, 43, 0.12);
}

.detail-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.detail-header h3 {
  margin: 0 0 0.2rem 0;
  font-size: 1.3rem;
}

.detail-tagline {
  font-size: 0.88rem;
  opacity: 0.95;
  font-style: italic;
}

.aging-summary {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.aging-num {
  font-size: 1.4rem;
  font-weight: 700;
}

.aging-text {
  font-size: 0.78rem;
  opacity: 0.9;
}

.detail-body {
  padding: 1.2rem 1.4rem;
}

.timeline-section {
  margin-bottom: 1.2rem;
}

.timeline-section h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #C0392B;
}

.timeline-bar {
  display: flex;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3e9d8;
}

.timeline-segment {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  min-width: 100px;
}

.timeline-segment.oak {
  background: linear-gradient(135deg, #8B4513 0%, #6B3410 100%);
}

.timeline-segment.bottle {
  background: linear-gradient(135deg, #5A8A3A 0%, #3F6829 100%);
}

.timeline-note {
  margin: 0.5rem 0 0 0;
  color: #7a6048;
  font-size: 0.85rem;
  font-style: italic;
  background: #fdf6ec;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  border-left: 3px solid #B8860B;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-block.full-width {
  grid-column: 1 / -1;
}

.info-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.92rem;
  color: #C0392B;
}

.info-block p {
  margin: 0;
  color: #4a3826;
  line-height: 1.6;
  font-size: 0.88rem;
}

.info-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

.aroma-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  border: 1px solid;
  padding: 0.25rem 0.7rem;
  border-radius: 14px;
  font-size: 0.8rem;
  color: #4a3826;
}

.price {
  font-weight: 700;
  color: #B8860B !important;
  margin-bottom: 0.3rem !important;
}

.advice {
  font-size: 0.83rem !important;
  color: #7a6048 !important;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.ex-card {
  background: #fdf6ec;
  border-left: 3px solid #B8860B;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.ex-card strong {
  color: #C0392B;
  font-size: 0.88rem;
}

.ex-card span {
  color: #7a6048;
  font-size: 0.78rem;
  margin-top: 0.2rem;
}

.label-tip {
  display: flex;
  gap: 0.8rem;
  background: linear-gradient(135deg, #fdf6ec 0%, #f5e3c8 100%);
  border: 1px solid #B8860B;
  border-radius: 8px;
  padding: 0.8rem 1rem;
}

.tip-icon {
  font-size: 1.4rem;
}

.label-tip strong {
  color: #C0392B;
  font-size: 0.92rem;
}

.label-tip p {
  margin: 0.3rem 0 0 0;
  color: #4a3826;
  font-size: 0.85rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .rioja-aging-slide {
    padding: 1rem;
  }
  .level-selector {
    grid-template-columns: repeat(2, 1fr);
  }
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
