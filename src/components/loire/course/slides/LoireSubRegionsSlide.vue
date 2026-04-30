<template>
  <div class="loire-subregions-slide">
    <header class="lss-header">
      <h2 class="lss-title">{{ slide.title || '羅亞爾河谷四大產區群' }}</h2>
      <p v-if="slide.description" class="lss-desc">{{ slide.description }}</p>
    </header>

    <!-- 4 大產區卡片網格（西 → 東依氣候漸變） -->
    <div class="lss-grid">
      <article
        v-for="r in regions"
        :key="r.key"
        class="lss-card"
        :class="{ active: activeKey === r.key }"
        :style="{ '--accent': r.color }"
        @mouseenter="activeKey = r.key"
        @click="activeKey = r.key"
      >
        <div class="lss-card-image-wrapper">
          <img :src="`/images/loire/region-${r.key}.svg`" class="lss-img" :alt="r.title" />
        </div>
        <div class="lss-card-head">
          <span class="lss-emoji">{{ r.emoji }}</span>
          <div class="lss-titles">
            <h3>{{ r.title }}</h3>
            <p class="lss-fr">{{ r.titleFr }}</p>
          </div>
        </div>
        <ul class="lss-meta">
          <li><strong>氣候</strong><span>{{ r.climate }}</span></li>
          <li><strong>主土壤</strong><span>{{ r.soil }}</span></li>
          <li><strong>核心品種</strong><span>{{ r.grapes }}</span></li>
          <li><strong>代表 AOC</strong><span>{{ r.signature }}</span></li>
        </ul>
        <p class="lss-tag">{{ r.tag }}</p>
      </article>
    </div>

    <!-- 氣候漸變軸 -->
    <div class="lss-gradient-bar">
      <div class="bar-track">
        <div class="bar-fill"></div>
        <div
          v-for="(r, i) in regions"
          :key="r.key"
          class="bar-marker"
          :class="{ active: activeKey === r.key }"
          :style="{ left: ((i / (regions.length - 1)) * 100) + '%', '--marker-color': r.color }"
          @click="activeKey = r.key"
          :title="r.title"
        >
          <span class="dot"></span>
          <span class="label">{{ r.shortLabel }}</span>
        </div>
      </div>
      <div class="bar-axis">
        <span>🌊 海洋型氣候</span>
        <span>⛰️ 半大陸型氣候</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const DEFAULT_REGIONS = [
  {
    key: 'nantais',
    emoji: '🌊',
    title: 'Pays Nantais',
    titleFr: 'Le Vignoble Nantais',
    shortLabel: '南特',
    climate: '強烈海洋型，溫和多雨',
    soil: '花崗岩 · 片岩 · 輝長岩',
    grapes: 'Melon de Bourgogne · Folle Blanche',
    signature: 'Muscadet · Muscadet-Sèvre-et-Maine',
    tag: '碘鹹海風 · sur lie 礦物張力 · 生蠔黃金搭檔',
    color: '#1a6b8a'
  },
  {
    key: 'anjou',
    emoji: '🏰',
    title: 'Anjou-Saumur',
    titleFr: 'Tuffeau Country',
    shortLabel: '安茹',
    climate: '海洋型，秋季晨霧助貴腐',
    soil: 'Tuffeau 凝灰岩 · 片岩',
    grapes: 'Chenin Blanc · Cabernet Franc',
    signature: 'Quarts-de-Chaume · Saumur-Champigny',
    tag: '頂級貴腐甜白 · 紅酒清新 · 粉紅光譜豐富',
    color: '#7a3b8a'
  },
  {
    key: 'touraine',
    emoji: '🏯',
    title: 'Touraine',
    titleFr: 'Jardin de la France',
    shortLabel: '都漢',
    climate: '海洋過渡至大陸型',
    soil: 'Tuffeau · 礫石 · 黏土',
    grapes: 'Chenin Blanc · Cabernet Franc · Côt',
    signature: 'Vouvray · Chinon · Bourgueil',
    tag: 'Vouvray sec→liquoreux 全光譜 · Chinon 紅酒之家',
    color: '#8a5b1b'
  },
  {
    key: 'centre',
    emoji: '⛰️',
    title: 'Centre-Loire',
    titleFr: 'Sancerrois',
    shortLabel: '中央',
    climate: '半大陸型，溫差大',
    soil: 'Kimmeridgian 泥灰岩 · 燧石 · 黏土石灰',
    grapes: 'Sauvignon Blanc · Pinot Noir',
    signature: 'Sancerre · Pouilly-Fumé',
    tag: 'Sauvignon Blanc 全球標竿 · 燧石煙燻香',
    color: '#1b7a4a'
  }
]

const regions = computed(() => {
  if (Array.isArray(props.slide?.regions) && props.slide.regions.length) return props.slide.regions
  return DEFAULT_REGIONS
})

const activeKey = ref(regions.value[0]?.key || '')
</script>

<style scoped>
.loire-subregions-slide {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 8px 4px;
}
.lss-header { text-align: center; }
.lss-title { margin: 0 0 4px; font-size: 1.6rem; color: #2c3e50; }
.lss-desc { margin: 0; color: #5b6b7a; font-size: 0.95rem; }

.lss-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.lss-card {
  border: 2px solid var(--accent);
  border-radius: 12px;
  padding: 14px 14px 12px;
  background: linear-gradient(180deg, #ffffff 0%, color-mix(in srgb, var(--accent) 6%, #ffffff) 100%);
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease;
  display: flex; flex-direction: column; gap: 8px;
}
.lss-card:hover, .lss-card.active {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px color-mix(in srgb, var(--accent) 35%, transparent);
}
.lss-card-image-wrapper {
  width: 100%;
  margin-bottom: 8px;
}
.lss-img {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
  display: block;
}
.lss-card-head { display: flex; align-items: center; gap: 10px; }
.lss-emoji { font-size: 1.8rem; line-height: 1; }
.lss-titles h3 { margin: 0; font-size: 1.05rem; color: var(--accent); }
.lss-fr { margin: 2px 0 0; font-size: 0.78rem; color: #889; font-style: italic; }

.lss-meta { list-style: none; padding: 0; margin: 4px 0 0; display: grid; gap: 4px; }
.lss-meta li {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 6px;
  font-size: 0.83rem;
  line-height: 1.35;
}
.lss-meta strong { color: #444; font-weight: 600; }
.lss-meta span { color: #2c3e50; }

.lss-tag {
  margin: 6px 0 0;
  font-size: 0.78rem;
  color: #fff;
  background: var(--accent);
  padding: 5px 8px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
}

.lss-gradient-bar {
  margin-top: 6px;
  background: #f8f9fb;
  border: 1px solid #e6e8ec;
  border-radius: 10px;
  padding: 18px 24px 12px;
}
.bar-track {
  position: relative;
  height: 8px;
}
.bar-fill {
  position: absolute; inset: 0;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #1a6b8a 0%, #7a3b8a 33%, #8a5b1b 66%, #1b7a4a 100%);
  opacity: 0.85;
}
.bar-marker {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.bar-marker .dot {
  width: 16px; height: 16px;
  border-radius: 50%;
  background: var(--marker-color);
  border: 3px solid #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform .2s;
}
.bar-marker.active .dot,
.bar-marker:hover .dot { transform: scale(1.35); }
.bar-marker .label {
  position: absolute;
  top: 18px;
  font-size: 0.72rem;
  color: #555;
  white-space: nowrap;
}
.bar-axis {
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  font-size: 0.78rem;
  color: #777;
}

@media (max-width: 1024px) {
  .lss-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .lss-grid { grid-template-columns: 1fr; }
}
</style>
