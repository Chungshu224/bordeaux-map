<template>
  <div class="pairing-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🍽️ Riesling 甜度 × 料理配對矩陣' }}</h2>
      <p class="slide-desc">{{ slide.description || '點選任一料理了解最適合的 Riesling 甜度等級' }}</p>
    </div>

    <div class="matrix-legend">
      <span v-for="s in sweetnessLevels" :key="s.key" class="legend-item">
        <span class="legend-dot" :style="{ background: s.color }"></span>
        {{ s.label }}
      </span>
    </div>

    <div class="pairing-grid">
      <div
        v-for="food in foodItems"
        :key="food.key"
        class="food-card"
        :class="{ expanded: expandedKey === food.key }"
        @click="expandedKey = expandedKey === food.key ? null : food.key"
      >
        <div class="food-card-top">
          <span class="food-emoji">{{ food.emoji }}</span>
          <span class="food-name">{{ food.name }}</span>
          <div class="rating-row">
            <span
              v-for="s in sweetnessLevels"
              :key="s.key"
              class="rating-badge"
              :style="{ background: ratingColor(food.ratings[s.key]), color: 'white' }"
              :title="s.label + ': ' + ratingText(food.ratings[s.key])"
            >{{ ratingIcon(food.ratings[s.key]) }}</span>
          </div>
        </div>
        <div v-if="expandedKey === food.key" class="food-detail">
          <div v-for="s in sweetnessLevels" :key="s.key" class="detail-row">
            <span class="detail-sweetness" :style="{ color: s.color }">{{ s.label }}</span>
            <span class="detail-rating" :style="{ color: ratingColor(food.ratings[s.key]) }">
              {{ ratingIcon(food.ratings[s.key]) }} {{ ratingText(food.ratings[s.key]) }}
            </span>
            <span class="detail-tip">{{ food.tips[s.key] }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pairing-rule">
      <div class="rule-card" v-for="rule in rules" :key="rule.text">
        <span class="rule-icon">{{ rule.icon }}</span>
        <span class="rule-text">{{ rule.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const expandedKey = ref(null)

const sweetnessLevels = [
  { key: 'trocken',   label: 'Kabinett / Trocken', color: '#2E86AB' },
  { key: 'spaetlese', label: 'Spätlese',            color: '#5C9A3E' },
  { key: 'auslese',   label: 'Auslese',             color: '#D4820A' },
  { key: 'tba',       label: 'BA / TBA',            color: '#8B2252' }
]

// rating: 3=極佳 2=良好 1=可以 0=避免
const foodItems = [
  {
    key: 'seafood', emoji: '🦐', name: '海鮮料理',
    ratings:  { trocken: 3, spaetlese: 2, auslese: 1, tba: 0 },
    tips: {
      trocken:   '礦物高酸完美襯托海鮮鮮甜',
      spaetlese: '輕甜版本亦可，但稍搶鮮味',
      auslese:   '甜度偏高，蓋過海鮮細緻感',
      tba:       '過甜，不建議'
    }
  },
  {
    key: 'asparagus', emoji: '🌿', name: '白蘆筍（Spargel）',
    ratings:  { trocken: 3, spaetlese: 2, auslese: 1, tba: 0 },
    tips: {
      trocken:   '德國傳統配對，清爽礦物與蘆筍苦甘完美共鳴',
      spaetlese: '半甜版亦可，稍微掩蓋苦甘特色',
      auslese:   '甜度過高，使蘆筍失去特色',
      tba:       '完全不適合'
    }
  },
  {
    key: 'pork', emoji: '🥩', name: '德式豬肉料理',
    ratings:  { trocken: 2, spaetlese: 3, auslese: 2, tba: 0 },
    tips: {
      trocken:   '清爽版本可清潔油脂，但稍嫌清淡',
      spaetlese: '最佳配對——微甜酸度完美切穿豬肉油脂',
      auslese:   '豬腳醬汁料理可搭，但偏甜',
      tba:       '過甜，不建議'
    }
  },
  {
    key: 'spicy', emoji: '🌶️', name: '辛辣料理（泰式/川菜）',
    ratings:  { trocken: 1, spaetlese: 2, auslese: 3, tba: 2 },
    tips: {
      trocken:   '高酸無甜，辣感更突出',
      spaetlese: '甜度初現，能稍微中和辣度',
      auslese:   '最佳配對——甜度充分中和辣感，高酸清洗味蕾',
      tba:       'BA 可行，TBA 過甜，使料理失去層次'
    }
  },
  {
    key: 'cheese', emoji: '🧀', name: '乳酪',
    ratings:  { trocken: 2, spaetlese: 2, auslese: 3, tba: 3 },
    tips: {
      trocken:   '搭配新鮮軟質乳酪（Quark、山羊乳酪）',
      spaetlese: '搭配半硬質乳酪（Gouda、Comté 年輕款）',
      auslese:   '搭配陳年 Gouda、Manchego，甜酸切脂',
      tba:       '搭配藍紋乳酪（Roquefort）——甜甜搭鹹鹹的德式完美'
    }
  },
  {
    key: 'sushi', emoji: '🍱', name: '日式料理',
    ratings:  { trocken: 3, spaetlese: 2, auslese: 1, tba: 0 },
    tips: {
      trocken:   '礦石感與鮮魚天作之合，侍酒師首選',
      spaetlese: '輕甜款適合醬汁較重的卷壽司',
      auslese:   '偏甜蓋過日式細膩鮮味',
      tba:       '完全不適合'
    }
  },
  {
    key: 'dessert', emoji: '🍰', name: '甜點',
    ratings:  { trocken: 0, spaetlese: 1, auslese: 2, tba: 3 },
    tips: {
      trocken:   '不甜版甜點顯得酒更酸，不建議',
      spaetlese: '搭配水果甜點（蘋果蛋糕）尚可',
      auslese:   '搭配中甜點心（德式杏仁餅、起司蛋糕）',
      tba:       '最佳配對——甜配甜，液態金黃配蜂蜜糕點'
    }
  },
  {
    key: 'asian-duck', emoji: '🦆', name: '烤鴨 / 紅燒肉',
    ratings:  { trocken: 1, spaetlese: 3, auslese: 2, tba: 0 },
    tips: {
      trocken:   '酸度切油但甜度不足，稍嫌單薄',
      spaetlese: '最佳配對——微甜果香與油亮醬汁完美共鳴',
      auslese:   '五香重口味料理可配，但偏甜',
      tba:       '過甜，蓋過肉香'
    }
  }
]

function ratingColor(r) {
  return ['#D1D5DB', '#F59E0B', '#3B82F6', '#16A34A'][r]
}
function ratingIcon(r) {
  return ['✗', '△', '○', '★'][r]
}
function ratingText(r) {
  return ['避免', '可以', '良好', '極佳'][r]
}

const rules = [
  { icon: '🌶️', text: '辣度越高 → 選甜度越高的 Riesling（Auslese 中和辣感）' },
  { icon: '🐟', text: '海鮮、日式 → 選 Kabinett / Trocken（礦物高酸配鮮味）' },
  { icon: '🧀', text: '藍紋乳酪 → BA/TBA（甜鹹搭配是德式傳統）' },
  { icon: '🍰', text: '甜點 → 酒的甜度要≥食物甜度，否則酒顯苦澀' }
]
</script>

<style scoped>
.pairing-slide {
  padding: 1.5rem 1.5rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.slide-header {
  text-align: center;
  margin-bottom: 1rem;
}
.slide-header h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 0.4rem;
}
.slide-desc {
  font-size: 0.87rem;
  color: #6b7280;
  margin: 0;
}

.matrix-legend {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #4b5563;
  font-weight: 600;
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.pairing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
  margin-bottom: 1.4rem;
}

.food-card {
  background: white;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  transition: all 0.18s;
}
.food-card:hover { border-color: #6B4C9A; box-shadow: 0 2px 8px rgba(107,76,154,0.15); }
.food-card.expanded { border-color: #6B4C9A; background: #faf8ff; }

.food-card-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.food-emoji { font-size: 1.3rem; }
.food-name { font-size: 0.88rem; font-weight: 700; color: #1f2937; flex: 1; }

.rating-row {
  display: flex;
  gap: 4px;
}
.rating-badge {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  font-size: 0.72rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.food-detail {
  margin-top: 10px;
  border-top: 1px solid #e5e7eb;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.detail-row {
  display: grid;
  grid-template-columns: 120px 60px 1fr;
  align-items: baseline;
  gap: 6px;
}
.detail-sweetness { font-size: 0.78rem; font-weight: 700; }
.detail-rating { font-size: 0.78rem; font-weight: 600; }
.detail-tip { font-size: 0.75rem; color: #6b7280; line-height: 1.4; }

.pairing-rule {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.rule-card {
  background: #f9fafb;
  border-radius: 10px;
  padding: 10px 14px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.rule-icon { font-size: 1.1rem; flex-shrink: 0; }
.rule-text { font-size: 0.8rem; color: #374151; line-height: 1.4; }

@media (max-width: 768px) {
  .pairing-slide { padding: 1rem; }
  .pairing-grid { grid-template-columns: 1fr; }
  .pairing-rule { grid-template-columns: 1fr; }
  .detail-row { grid-template-columns: 100px 52px 1fr; }
  .matrix-legend { gap: 10px; }
}
</style>
