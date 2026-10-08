<template>
  <div class="amarone-slide">
    <div class="slide-header">
      <h2>{{ slide.title || c.defaultTitle }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
      <p v-else class="slide-desc">{{ c.defaultDesc }}</p>
    </div>

    <!-- Valpolicella 四階梯 Tab -->
    <div class="tier-section">
      <h3>{{ c.tierHeading }}</h3>
      <div class="tier-tabs">
        <button
          v-for="(tier, i) in tiers"
          :key="i"
          class="tier-tab"
          :class="{ active: activeIdx === i }"
          :style="{ background: activeIdx === i ? `linear-gradient(135deg, ${tier.color}, ${tier.colorEnd})` : '#fff', color: activeIdx === i ? '#fff' : '#2c3e50' }"
          @click="activeIdx = i"
        >
          <span class="tier-rank">{{ tier.rank }}</span>
          <span class="tier-name">{{ tier.name }}</span>
        </button>
      </div>

      <div class="tier-detail" :style="{ borderTopColor: activeTier.color }">
        <div class="tier-header" :style="{ background: `linear-gradient(135deg, ${activeTier.color}, ${activeTier.colorEnd})` }">
          <div class="tier-header-text">
            <h4>{{ activeTier.name }}</h4>
            <span class="tier-tagline">{{ activeTier.tagline }}</span>
          </div>
          <img :src="`/images/italy/amarone-${tierKeys[activeIdx]}.svg`" class="amarone-tier-img" :alt="activeTier.name" />
        </div>
        <div class="tier-body">
          <div class="metric-grid">
            <div v-for="m in metrics" :key="m.key" class="metric-box">
              <div class="metric-icon">{{ m.icon }}</div>
              <div class="metric-label">{{ c.labels[m.key] }}</div>
              <div class="metric-value">{{ activeTier[m.key] }}</div>
            </div>
          </div>
          <div class="tier-process">
            <strong>{{ c.labels.process }}</strong>{{ activeTier.process }}
          </div>
          <div class="tier-pairing">
            <strong>{{ c.labels.pairing }}</strong>{{ activeTier.pairing }}
          </div>
        </div>
      </div>
    </div>

    <!-- Appassimento 風乾流程 -->
    <div class="process-section">
      <h3>{{ c.processHeading }}</h3>
      <div class="process-flow">
        <div v-for="(p, i) in c.process" :key="i" class="process-step">
          <div class="step-month">{{ p.month }}</div>
          <div class="step-bar-wrap">
            <div class="step-bar" :style="{ width: p.weightLoss + '%', background: `linear-gradient(90deg, ${p.color}, ${p.colorEnd})` }">
              <span class="bar-text">{{ c.weightLoss }} {{ p.weightLoss }}%</span>
            </div>
          </div>
          <div class="step-info">
            <strong>{{ p.title }}</strong>
            <span>{{ p.detail }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 釀造哲學光譜 -->
    <div class="philosophy-section">
      <h3>{{ c.philHeading }}</h3>
      <div class="philosophy-compare">
        <div v-for="side in ['traditional', 'modern']" :key="side" class="phil-card" :class="side">
          <div class="phil-header">{{ c[side].header }}</div>
          <ul>
            <li v-for="item in c[side].items" :key="item[0]"><strong>{{ item[0] }}</strong>{{ c.sep }}{{ item[1] }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>{{ c.insightHeading }}</h4>
      <p v-html="c.insight"></p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { AMARONE_CONTENT } from './data/amaroneAppassimento.js'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const { locale } = useI18n()
const c = computed(() => AMARONE_CONTENT[locale.value] || AMARONE_CONTENT['zh-TW'])

const activeIdx = ref(2) // 預設 Amarone

const metrics = [
  { key: 'grapeState', icon: '🍇' },
  { key: 'abv', icon: '🍷' },
  { key: 'sweetness', icon: '🍯' },
  { key: 'aging', icon: '⏳' },
  { key: 'cellar', icon: '📅' }
]

const tiers = computed(() => {
  if (Array.isArray(props.slide?.tiers) && props.slide.tiers.length) return props.slide.tiers
  return c.value.tiers
})

const activeTier = computed(() => tiers.value[activeIdx.value] || tiers.value[0])

const tierKeys = ['valpolicella', 'ripasso', 'amarone', 'recioto']
</script>

<style scoped>
.amarone-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #6B1A1A;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 24px;
  line-height: 1.7;
}

.tier-section { margin-bottom: 24px; }
.tier-section h3,
.process-section h3,
.philosophy-section h3 {
  color: #6B1A1A;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.tier-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.tier-tab {
  border: none;
  border-radius: 8px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-weight: 700;
}
.tier-tab:hover { transform: translateY(-2px); }
.tier-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.15); }
.tier-rank { font-size: 1.3rem; }
.tier-name { font-size: 0.85rem; line-height: 1.3; }
.tier-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.tier-header {
  padding: 16px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tier-header-text { flex: 1; min-width: 0; }
.tier-header h4 { margin: 0; font-size: 1.4rem; }
.tier-tagline { font-size: 0.9rem; opacity: 0.9; }
.amarone-tier-img {
  width: 120px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}
.tier-body { padding: 16px 20px; }
.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}
.metric-box {
  background: #fafafa;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}
.metric-icon { font-size: 1.3rem; }
.metric-label {
  font-size: 0.75rem;
  color: #888;
  margin: 4px 0;
  font-weight: 700;
}
.metric-value {
  font-size: 0.88rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.4;
}
.tier-process,
.tier-pairing {
  padding: 12px;
  background: #fff8e6;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 10px;
  border-left: 3px solid #d4af37;
}
.tier-pairing {
  background: #f0f9ff;
  border-left-color: #3498db;
}

/* Process flow */
.process-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 24px;
}
.process-flow {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.process-step {
  display: grid;
  grid-template-columns: 90px 1fr 220px;
  gap: 12px;
  align-items: center;
}
.step-month {
  font-weight: 700;
  color: #6B1A1A;
  font-size: 0.92rem;
}
.step-bar-wrap {
  background: #f0f0f0;
  border-radius: 20px;
  height: 32px;
  overflow: hidden;
  position: relative;
}
.step-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  border-radius: 20px;
  transition: width 0.5s ease;
}
.bar-text {
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
.step-info {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  line-height: 1.5;
}
.step-info strong {
  color: #2c3e50;
  margin-bottom: 2px;
}
.step-info span {
  color: #666;
  font-size: 0.82rem;
}

/* Philosophy */
.philosophy-section { margin-bottom: 20px; }
.philosophy-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.phil-card {
  border-radius: 12px;
  padding: 18px;
  color: #fff;
}
.phil-card.traditional {
  background: linear-gradient(135deg, #c0392b, #7B1F2A);
}
.phil-card.modern {
  background: linear-gradient(135deg, #3498db, #2874a6);
}
.phil-header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 6px;
}
.phil-card ul {
  margin: 0;
  padding-left: 20px;
}
.phil-card li {
  margin-bottom: 6px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.key-insight {
  background: linear-gradient(135deg, #6B1A1A, #8e44ad);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .tier-tabs { grid-template-columns: repeat(2, 1fr); }
  .metric-grid { grid-template-columns: repeat(2, 1fr); }
  .process-step { grid-template-columns: 70px 1fr; }
  .step-info { grid-column: 1 / -1; padding-left: 8px; }
  .philosophy-compare { grid-template-columns: 1fr; }
}
</style>
