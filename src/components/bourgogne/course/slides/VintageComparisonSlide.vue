<template>
  <div class="vintage-comparison-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '布根地年份對比' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="vintage-grid" :style="{ gridTemplateColumns: `repeat(${vintages.length}, minmax(200px, 1fr))` }">
      <div
        v-for="v in vintages"
        :key="v.year"
        class="vintage-card"
        :class="{ active: activeYear === v.year, ['rating-' + v.rating]: true }"
        @click="activeYear = v.year"
      >
        <div class="vintage-year">{{ v.year }}</div>
        <div class="vintage-rating">
          <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= ratingScore(v.rating) }">★</span>
        </div>
        <div class="vintage-summary">{{ v.summary }}</div>
        <div class="vintage-meta">
          <span class="meta-tag" :style="{ backgroundColor: weatherColor(v.weather) }">{{ v.weather }}</span>
          <span class="meta-tag yield">{{ v.yieldNote }}</span>
        </div>
      </div>
    </div>

    <div class="vintage-detail" v-if="activeVintage" :style="{ borderTopColor: weatherColor(activeVintage.weather) }">
      <div class="detail-row">
        <h3>{{ activeVintage.year }} 年 — {{ activeVintage.summary }}</h3>
      </div>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>☀️ 氣候條件</h4>
          <p>{{ activeVintage.climateDescription }}</p>
          <ul>
            <li v-for="(c, i) in activeVintage.climateEvents" :key="i">{{ c }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🍇 紅酒（Pinot Noir）</h4>
          <p>{{ activeVintage.redStyle }}</p>
          <p style="margin-top: 0.4rem;"><strong>陳年潛力：</strong>{{ activeVintage.redAgeing }}</p>
        </div>
        <div class="detail-block">
          <h4>🌼 白酒（Chardonnay）</h4>
          <p>{{ activeVintage.whiteStyle }}</p>
          <p style="margin-top: 0.4rem;"><strong>陳年潛力：</strong>{{ activeVintage.whiteAgeing }}</p>
        </div>
        <div class="detail-block">
          <h4>💡 投資/飲用建議</h4>
          <p>{{ activeVintage.advice }}</p>
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

const defaultVintages = [
  {
    year: 2015,
    rating: 'legendary',
    summary: '世紀之年——紅酒尤其偉大',
    weather: '溫暖乾燥',
    yieldNote: '產量正常',
    climateDescription: '春季穩定、夏季持續溫暖乾燥、9 月適度降雨——理想的 Pinot Noir 年份。',
    climateEvents: ['春季正常開花', '7 月乾熱但有夜間降溫', '9 月初理想雨量解渴', '採收條件完美'],
    redStyle: '結構紮實、單寧成熟、深沉紅果與香料、極高陳年潛力。',
    redAgeing: '20–40 年（Grand Cru 50+ 年）',
    whiteStyle: '飽滿成熟、酸度足、酒精微高（13–13.5%）、果香豐富但具陳年深度。',
    whiteAgeing: '10–20 年',
    advice: '紅酒收藏首選；白酒可現飲或短期陳年。Grand Cru 級別投資價值高。'
  },
  {
    year: 2018,
    rating: 'excellent',
    summary: '豐收溫暖年——飽滿但風格較現代',
    weather: '溫熱',
    yieldNote: '產量高',
    climateDescription: '冬季溫和、春季溫暖、夏季炎熱乾燥、9 月適度降雨。連續高溫週帶來高糖度。',
    climateEvents: ['1 月連續降雨累積水分', '4–6 月理想開花期', '7–8 月熱浪', '8 月底開始採收（早採）'],
    redStyle: '飽滿圓潤、果香濃郁、單寧柔軟、酒精偏高（13.5–14%），即飲性佳但部分酒款酸度不足。',
    redAgeing: '8–20 年（精選酒莊 25+ 年）',
    whiteStyle: '果香奔放、桃子杏桃、酸度中等、口感肥碩。較傳統 Burgundian 風格甜美。',
    whiteAgeing: '5–10 年',
    advice: '即飲性高、入門友善；非首選收藏年份，但早飲價值高。注意挑選控制酒精的生產者。'
  },
  {
    year: 2019,
    rating: 'excellent',
    summary: '集中度極高——熱浪小產量年',
    weather: '炎熱',
    yieldNote: '產量低（−20%）',
    climateDescription: '春霜減產 + 夏季多次熱浪。低產量帶來高度集中的葡萄。',
    climateEvents: ['4 月春霜重創 Chablis 與部分 Côte de Beaune', '6–7 月兩次熱浪', '夜間溫差仍佳保留酸度', '9 月正常採收'],
    redStyle: '深色集中、單寧緊密、結構紮實、酒精中等（13%）。將是 2010 年代後期最佳紅酒年份之一。',
    redAgeing: '15–30 年',
    whiteStyle: '酸度與成熟度平衡、礦物張力強、Chablis 受春霜影響嚴重但品質極高。',
    whiteAgeing: '8–15 年',
    advice: '收藏級紅酒年份；數量稀少價格已上漲。Chablis 因產量銳減極具收藏價值。'
  },
  {
    year: 2020,
    rating: 'excellent',
    summary: '極早採收——白酒尤其經典',
    weather: '炎熱乾燥',
    yieldNote: '產量低',
    climateDescription: '法國紀錄上最早採收年之一（部分酒莊 8 月中即開始）。早春溫暖、夏季乾旱。',
    climateEvents: ['3 月起連續溫暖', '6–8 月嚴重乾旱', '8 月中提早採收', '葡萄成熟度高、糖酸平衡微妙'],
    redStyle: '優雅明亮、果香純淨、酸度比 2018 高、單寧細緻。風格介於古典與現代之間。',
    redAgeing: '10–25 年',
    whiteStyle: '極為優雅——尤其 Chablis 與 Côte de Beaune，礦物與酸度平衡完美，被視為近年最佳白酒年份之一。',
    whiteAgeing: '10–25 年',
    advice: '白酒投資首選；紅酒整體優雅。建議優先買白酒（尤其 Meursault、Chassagne、Chablis）。'
  }
]

const vintages = computed(() => props.slide.vintages || defaultVintages)
const activeYear = ref(vintages.value[0]?.year)
const activeVintage = computed(
  () => vintages.value.find((v) => v.year === activeYear.value) || vintages.value[0]
)

const ratingScore = (rating) => {
  switch (rating) {
    case 'legendary': return 5
    case 'excellent': return 4
    case 'good': return 3
    case 'average': return 2
    default: return 1
  }
}

const weatherColor = (weather) => {
  if (!weather) return '#999'
  if (weather.includes('炎熱')) return '#D85040'
  if (weather.includes('溫熱') || weather.includes('溫暖')) return '#E8A040'
  if (weather.includes('涼')) return '#5090C0'
  if (weather.includes('冷')) return '#3070A0'
  return '#909090'
}
</script>

<style scoped>
.vintage-comparison-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fefaf3 0%, #f5ede0 100%);
  color: #2d1a0f;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #5a3a1a;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.vintage-grid {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.vintage-card {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(90, 58, 26, 0.1);
}

.vintage-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(90, 58, 26, 0.2);
}

.vintage-card.active {
  border-color: #B8860B;
  box-shadow: 0 6px 16px rgba(184, 134, 11, 0.35);
  transform: translateY(-2px);
}

.vintage-year {
  font-size: 1.6rem;
  font-weight: 700;
  color: #5a3a1a;
}

.vintage-rating {
  font-size: 0.95rem;
}

.star {
  color: #ddd;
}

.star.filled {
  color: #D4A574;
}

.vintage-summary {
  color: #4a3826;
  font-size: 0.88rem;
  line-height: 1.4;
  flex: 1;
}

.vintage-meta {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.meta-tag {
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #fff;
  font-weight: 500;
}

.meta-tag.yield {
  background: #7A9070;
}

.vintage-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(90, 58, 26, 0.12);
}

.detail-row h3 {
  margin: 0 0 0.8rem 0;
  color: #5a3a1a;
  font-size: 1.2rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.95rem;
  color: #5a3a1a;
}

.detail-block p {
  margin: 0;
  color: #4a3826;
  font-size: 0.88rem;
  line-height: 1.6;
}

.detail-block ul {
  margin: 0.4rem 0 0 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .vintage-comparison-slide {
    padding: 1rem;
  }
  .vintage-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
