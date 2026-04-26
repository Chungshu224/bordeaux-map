<template>
  <div class="loire-sweetness-slide">
    <header class="lss-header">
      <h2 class="lss-title">{{ slide.title || '羅亞爾甜度光譜' }}</h2>
      <p v-if="slide.description" class="lss-desc">{{ slide.description }}</p>
    </header>

    <!-- 光譜帶 -->
    <div class="spectrum-bar">
      <div class="spectrum-track"></div>
      <div
        v-for="(s, i) in stages"
        :key="s.key"
        class="spectrum-stop"
        :class="{ active: activeKey === s.key }"
        :style="{ left: positionFor(i) + '%' }"
        @click="activeKey = s.key"
      >
        <span class="stop-dot" :style="{ background: s.color }"></span>
        <span class="stop-label">{{ s.label }}</span>
        <span class="stop-rs">{{ s.rs }}</span>
      </div>
    </div>

    <!-- 甜度刻度 -->
    <div class="rs-axis">
      <span>0 g/L 完全干</span>
      <span>殘糖（RS）→</span>
      <span>200+ g/L 極甜</span>
    </div>

    <!-- 階段卡片 -->
    <div class="stage-grid">
      <article
        v-for="s in stages"
        :key="s.key"
        class="stage-card"
        :class="{ active: activeKey === s.key }"
        :style="{ '--accent': s.color }"
        @click="activeKey = s.key"
      >
        <header class="sc-head">
          <span class="sc-label">{{ s.label }}</span>
          <span class="sc-rs">{{ s.rs }}</span>
        </header>
        <p class="sc-fr"><em>{{ s.frenchTerm }}</em></p>
        <ul class="sc-meta">
          <li><strong>典型酒款</strong>{{ s.typical }}</li>
          <li><strong>釀造手法</strong>{{ s.method }}</li>
          <li><strong>口感印象</strong>{{ s.impression }}</li>
        </ul>
        <p class="sc-pair">🍽️ {{ s.pairing }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const DEFAULT_STAGES = [
  {
    key: 'sec',
    label: 'Sec',
    frenchTerm: '完全干型',
    rs: '0–4 g/L',
    rsValue: 0,
    color: '#7baf6c',
    typical: 'Vouvray Sec、Savennières、Sancerre',
    method: '完全發酵至糖分耗盡',
    impression: '高酸、礦石、骨感緊實',
    pairing: '生蠔、海鮮、山羊起司'
  },
  {
    key: 'demi-sec',
    label: 'Demi-Sec',
    frenchTerm: '半干型',
    rs: '12–45 g/L',
    rsValue: 30,
    color: '#d6a14a',
    typical: 'Vouvray Demi-Sec、Montlouis Demi-Sec',
    method: '提早終止發酵保留少量殘糖',
    impression: '酸甜平衡、蜜香初現',
    pairing: '泰式辣料理、亞洲烤鴨、藍紋起司'
  },
  {
    key: 'moelleux',
    label: 'Moelleux',
    frenchTerm: '甜型',
    rs: '45–110 g/L',
    rsValue: 80,
    color: '#e08e3c',
    typical: 'Vouvray Moelleux、Coteaux du Layon',
    method: '晚收 + 部分 Botrytis 貴腐',
    impression: '蜂蜜、杏桃、酸度撐起甜度',
    pairing: 'Foie gras、藍紋起司、水果塔'
  },
  {
    key: 'liquoreux',
    label: 'Liquoreux',
    frenchTerm: '極甜貴腐',
    rs: '110–250 g/L',
    rsValue: 200,
    color: '#a25b1f',
    typical: 'Quarts-de-Chaume、Bonnezeaux、頂級 Vouvray',
    method: '完全 Botrytis 貴腐 + 多次分批採收',
    impression: '濃稠如蜜、橘皮、糖漬無花果',
    pairing: 'Foie gras 鵝肝、Roquefort、單獨品飲'
  }
]

const stages = computed(() => {
  if (Array.isArray(props.slide?.stages) && props.slide.stages.length) return props.slide.stages
  return DEFAULT_STAGES
})

const activeKey = ref(props.slide?.defaultKey || stages.value[0]?.key || '')

function positionFor(i) {
  if (stages.value.length <= 1) return 50
  return (i / (stages.value.length - 1)) * 100
}
</script>

<style scoped>
.loire-sweetness-slide {
  display: flex; flex-direction: column; gap: 16px;
  padding: 8px 4px;
}
.lss-header { text-align: center; }
.lss-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.lss-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.spectrum-bar {
  position: relative;
  height: 70px;
  margin: 8px 30px 0;
}
.spectrum-track {
  position: absolute; left: 0; right: 0; top: 14px;
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(90deg, #7baf6c 0%, #d6a14a 35%, #e08e3c 70%, #a25b1f 100%);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.spectrum-stop {
  position: absolute;
  top: 8px;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.stop-dot {
  width: 24px; height: 24px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  transition: transform .2s;
}
.spectrum-stop:hover .stop-dot,
.spectrum-stop.active .stop-dot { transform: scale(1.2); }
.stop-label {
  font-size: 0.85rem; font-weight: 600; color: #2c3e50;
  margin-top: 2px;
}
.stop-rs { font-size: 0.72rem; color: #777; }

.rs-axis {
  display: flex; justify-content: space-between;
  margin: 0 30px;
  font-size: 0.78rem; color: #888;
}

.stage-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.stage-card {
  border: 2px solid #e0e3e8;
  border-radius: 12px;
  padding: 12px 12px 10px;
  background: #fff;
  cursor: pointer;
  transition: all .2s;
}
.stage-card:hover, .stage-card.active {
  border-color: var(--accent);
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 8%, #fff) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 30%, transparent);
}
.sc-head {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 4px;
}
.sc-label { font-weight: 700; color: var(--accent); font-size: 1.02rem; }
.sc-rs { font-size: 0.78rem; color: #888; font-weight: 500; }
.sc-fr { margin: 0 0 8px; font-size: 0.78rem; color: #889; }
.sc-meta { list-style: none; padding: 0; margin: 0 0 8px; display: grid; gap: 5px; font-size: 0.82rem; }
.sc-meta li { line-height: 1.4; color: #2c3e50; }
.sc-meta strong {
  display: block; color: #555; font-weight: 600;
  font-size: 0.74rem; margin-bottom: 1px;
}
.sc-pair {
  margin: 0; padding: 6px 8px;
  background: color-mix(in srgb, var(--accent) 12%, #fff);
  border-radius: 6px;
  font-size: 0.78rem;
  color: #2c3e50;
}

@media (max-width: 1024px) {
  .stage-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .stage-grid { grid-template-columns: 1fr; }
  .spectrum-bar { margin: 8px 12px 0; }
}
</style>
