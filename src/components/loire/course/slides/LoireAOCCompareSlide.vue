<template>
  <div class="loire-aoc-compare-slide">
    <header class="lac-header">
      <h2 class="lac-title">{{ slide.title || 'AOC 兩兩對比' }}</h2>
      <p v-if="slide.description" class="lac-desc">{{ slide.description }}</p>
    </header>

    <div class="lac-compare-grid">
      <article
        v-for="(a, i) in pair"
        :key="a.name + i"
        class="lac-col"
        :style="{ '--accent': a.color }"
      >
        <header class="lac-col-head">
          <span class="lac-emoji">{{ a.emoji }}</span>
          <div>
            <h3 class="lac-name">{{ a.name }}</h3>
            <p v-if="a.subtitle" class="lac-subtitle">{{ a.subtitle }}</p>
          </div>
        </header>

        <ul class="lac-rows">
          <li v-for="(row, idx) in rows" :key="idx" class="lac-row">
            <span class="lac-row-key">{{ row.key }}</span>
            <span class="lac-row-val">{{ a[row.field] || '—' }}</span>
          </li>
        </ul>

        <footer v-if="a.signature" class="lac-signature">
          ⭐ <strong>典型酒款：</strong>{{ a.signature }}
        </footer>
      </article>
    </div>

    <!-- 差異總結 -->
    <section v-if="differences.length" class="lac-summary">
      <h4>🔑 關鍵差異</h4>
      <ul>
        <li v-for="(d, i) in differences" :key="i">
          <strong>{{ d.title }}：</strong>{{ d.detail }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const DEFAULT_PAIR = [
  {
    name: 'Sancerre',
    subtitle: '中央羅亞爾 · 全球 Sauvignon Blanc 標竿',
    emoji: '⛰️',
    color: '#1b7a4a',
    location: '羅亞爾河左岸高地，Bourges 南方',
    soil: 'Caillottes（白堊石灰）、Terres Blanches（Kimmeridgian）、Silex（燧石）三土壤分佈',
    grape: 'Sauvignon Blanc（白）、Pinot Noir（紅/粉紅）',
    style: '清新果香、酸度銳利、白堊礦石為主',
    aging: '一般 3–5 年；頂級可至 10–15 年',
    signature: 'Henri Bourgeois、Edmond Vatan、François Cotat'
  },
  {
    name: 'Pouilly-Fumé',
    subtitle: '中央羅亞爾 · 燧石煙燻香',
    emoji: '🔥',
    color: '#a25b1f',
    location: '羅亞爾河右岸，Sancerre 對岸',
    soil: 'Silex（燧石）占比最高，僅生產白酒',
    grape: 'Sauvignon Blanc 唯一指定（亦稱 Blanc Fumé）',
    style: '濃郁、結構紮實、煙燻 pierre à fusil 香氣明顯',
    aging: '5–8 年；頂級可達 15+ 年',
    signature: 'Didier Dagueneau、Domaine Henri Bourgeois、Jonathan Pabiot'
  }
]

const DEFAULT_ROWS = [
  { key: '🌍 地理位置', field: 'location' },
  { key: '🪨 主要土壤', field: 'soil' },
  { key: '🍇 葡萄品種', field: 'grape' },
  { key: '🎨 風格特徵', field: 'style' },
  { key: '⏳ 陳年潛力', field: 'aging' }
]

const pair = computed(() => {
  if (Array.isArray(props.slide?.pair) && props.slide.pair.length >= 2) return props.slide.pair
  return DEFAULT_PAIR
})
const rows = computed(() => {
  if (Array.isArray(props.slide?.rows) && props.slide.rows.length) return props.slide.rows
  return DEFAULT_ROWS
})
const differences = computed(() => Array.isArray(props.slide?.differences) ? props.slide.differences : [
  { title: '土壤主導', detail: 'Sancerre 三土壤並存形成多元風格；Pouilly-Fumé 以燧石為主，風格較統一' },
  { title: '香氣印象', detail: 'Sancerre 偏白堊清新果香；Pouilly-Fumé 強調煙燻燧石 (pierre à fusil)' },
  { title: '酒款多樣性', detail: 'Sancerre 有白/紅/粉紅三色；Pouilly-Fumé 僅產白酒' }
])
</script>

<style scoped>
.loire-aoc-compare-slide {
  display: flex; flex-direction: column; gap: 16px;
  padding: 8px 4px;
}
.lac-header { text-align: center; }
.lac-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.lac-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.lac-compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.lac-col {
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: 14px 16px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 6%, #fff) 100%);
}
.lac-col-head {
  display: flex; gap: 10px; align-items: center; margin-bottom: 12px;
  border-bottom: 2px solid color-mix(in srgb, var(--accent) 25%, transparent);
  padding-bottom: 10px;
}
.lac-emoji { font-size: 2rem; line-height: 1; }
.lac-name { margin: 0; color: var(--accent); font-size: 1.25rem; }
.lac-subtitle { margin: 2px 0 0; font-size: 0.82rem; color: #889; }

.lac-rows { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
.lac-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  font-size: 0.86rem;
  line-height: 1.45;
}
.lac-row-key { color: #555; font-weight: 600; }
.lac-row-val { color: #2c3e50; }

.lac-signature {
  margin-top: 10px;
  padding: 8px 10px;
  background: color-mix(in srgb, var(--accent) 12%, #fff);
  border-radius: 8px;
  font-size: 0.83rem;
  color: #2c3e50;
}

.lac-summary {
  border: 1px solid #e3e6ec;
  border-radius: 10px;
  padding: 12px 16px;
  background: #fafbfc;
}
.lac-summary h4 { margin: 0 0 8px; font-size: 0.98rem; color: #2c3e50; }
.lac-summary ul { margin: 0; padding-left: 20px; font-size: 0.86rem; color: #2c3e50; line-height: 1.55; }
.lac-summary li { margin-bottom: 4px; }

@media (max-width: 768px) {
  .lac-compare-grid { grid-template-columns: 1fr; }
  .lac-row { grid-template-columns: 90px 1fr; }
}
</style>
