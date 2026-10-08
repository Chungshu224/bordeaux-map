<template>
  <div class="italian-grape-slide">
    <div class="slide-header">
      <h2>{{ slide.title || ui.defaultTitle }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="grape-tabs">
      <button
        v-for="grape in grapes"
        :key="grape.key"
        class="grape-tab"
        :class="{ active: activeKey === grape.key }"
        :style="{
          borderColor: activeKey === grape.key ? grape.color : 'transparent',
          color: activeKey === grape.key ? grape.color : '#7a6048'
        }"
        @click="activeKey = grape.key"
      >
        <span class="tab-emoji">{{ grape.emoji }}</span>
        <span class="tab-name">{{ grape.name }}</span>
      </button>
    </div>

    <div class="profile-content">
      <div class="profile-card" :style="{ borderColor: activeGrape.color }">
        <div class="card-header" :style="{ backgroundColor: activeGrape.color }">
          <div>
            <h3>{{ activeGrape.emoji }} {{ activeGrape.name }}</h3>
            <span class="card-tagline">{{ activeGrape.tagline }}</span>
          </div>
          <img :src="`/images/italy/grape-${activeGrape.key}.svg`" class="igp-cluster-img" :alt="activeGrape.name" />
          <div class="quick-stats">
            <span class="stat"><strong>{{ ui.mainRegion }}</strong> {{ activeGrape.mainRegion }}</span>
            <span class="stat"><strong>{{ ui.colour }}</strong> {{ activeGrape.color_type }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="profile-grid">
            <div class="profile-block">
              <h4>{{ ui.italyRole }}</h4>
              <p>{{ activeGrape.italyRole }}</p>
              <ul>
                <li v-for="(area, i) in activeGrape.mainAreas" :key="i">
                  <strong>{{ area.name }}{{ ui.sep }}</strong>{{ area.note }}
                </li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>{{ ui.traits }}</h4>
              <ul>
                <li><strong>{{ ui.cluster }}{{ ui.sep }}</strong>{{ activeGrape.cluster }}</li>
                <li><strong>{{ ui.ripening }}{{ ui.sep }}</strong>{{ activeGrape.ripening }}</li>
                <li><strong>{{ ui.soils }}{{ ui.sep }}</strong>{{ activeGrape.soils }}</li>
                <li><strong>{{ ui.climate }}{{ ui.sep }}</strong>{{ activeGrape.climate }}</li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>{{ ui.metricsTitle }}</h4>
              <div class="metric-list">
                <div class="metric" v-for="(m, key) in activeGrape.metrics" :key="key">
                  <span class="metric-label">{{ metricLabel(key) }}</span>
                  <div class="metric-bar">
                    <div class="metric-fill" :style="{ width: (m * 20) + '%', backgroundColor: activeGrape.color }"></div>
                  </div>
                  <span class="metric-value">{{ m }}/5</span>
                </div>
              </div>
            </div>

            <div class="profile-block">
              <h4>{{ ui.aromas }}</h4>
              <div class="aromas">
                <span
                  v-for="aroma in activeGrape.aromas"
                  :key="aroma"
                  class="aroma-chip"
                  :style="{ backgroundColor: activeGrape.color + '22', borderColor: activeGrape.color }"
                >
                  {{ aroma }}
                </span>
              </div>
            </div>

            <div class="profile-block full-width">
              <h4>{{ ui.styleTitle }}</h4>
              <p>{{ activeGrape.style }}</p>
              <p style="margin-top: 0.4rem;"><strong>{{ ui.ageing }}{{ ui.sep }}</strong>{{ activeGrape.ageing }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>{{ ui.pairings }}</h4>
              <ul class="pairing-list">
                <li v-for="(pair, i) in activeGrape.pairings" :key="i">{{ pair }}</li>
              </ul>
            </div>

            <div class="profile-block full-width">
              <h4>{{ ui.examples }}</h4>
              <div class="examples-grid">
                <div
                  v-for="ex in activeGrape.examples"
                  :key="ex.name"
                  class="example-card"
                >
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { GRAPE_PROFILE_CONTENT } from './data/italianGrapeProfiles.js'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const { locale } = useI18n()
const content = computed(() => GRAPE_PROFILE_CONTENT[locale.value] || GRAPE_PROFILE_CONTENT['zh-TW'])
const ui = computed(() => content.value.ui)
const metricLabel = (key) => ui.value.metricLabels[key] || key

const grapes = computed(() => props.slide.grapes || content.value.grapes)
const activeKey = ref(props.slide.defaultKey || grapes.value[0]?.key || 'sangiovese')
const activeGrape = computed(
  () => grapes.value.find((g) => g.key === activeKey.value) || grapes.value[0]
)
</script>

<style scoped>
.italian-grape-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #7B1F2A;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.grape-tabs {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.grape-tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 26px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.9rem;
  color: #7a6048;
}

.grape-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.15);
}

.grape-tab.active {
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
}

.tab-emoji {
  font-size: 1.1rem;
}

.profile-content {
  flex: 1;
  overflow-y: auto;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.12);
}

.card-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.igp-cluster-img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.4);
  object-fit: cover;
  flex-shrink: 0;
  align-self: center;
}

.card-header h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.card-tagline {
  font-size: 0.88rem;
  opacity: 0.95;
  font-style: italic;
}

.quick-stats {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.82rem;
  text-align: right;
}

.stat strong {
  opacity: 0.85;
  margin-right: 0.4rem;
}

.card-body {
  padding: 1.2rem 1.4rem;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.profile-block.full-width {
  grid-column: 1 / -1;
}

.profile-block h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #7B1F2A;
}

.profile-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

.profile-block li {
  margin-bottom: 0.3rem;
}

.profile-block p {
  margin: 0;
  color: #4a3826;
  line-height: 1.6;
  font-size: 0.9rem;
}

.metric-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.metric {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 0.5rem;
}

.metric-label {
  font-size: 0.82rem;
  color: #4a3826;
}

.metric-bar {
  height: 8px;
  background: #f3e9d8;
  border-radius: 4px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.metric-value {
  font-size: 0.78rem;
  color: #7a6048;
  text-align: right;
}

.aromas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.aroma-chip {
  padding: 0.3rem 0.8rem;
  border: 1px solid;
  border-radius: 16px;
  font-size: 0.82rem;
  color: #4a3826;
}

.pairing-list {
  columns: 2;
  column-gap: 1.5rem;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.example-card {
  background: #faf3e8;
  border-left: 3px solid #B8860B;
  padding: 0.6rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.example-card strong {
  color: #7B1F2A;
  font-size: 0.9rem;
}

.example-card span {
  color: #7a6048;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

@media (max-width: 768px) {
  .italian-grape-slide {
    padding: 1rem;
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .pairing-list {
    columns: 1;
  }
  .quick-stats {
    text-align: left;
  }
}
</style>
