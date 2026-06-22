<template>
  <div class="slide-viewer">
    <div class="slide-container" v-if="currentSlide">
      <!-- Cover Slide -->
      <div v-if="currentSlide.type === 'cover'" class="slide slide-cover" :style="{ background: currentSlide.background }">
        <div class="slide-cover-content">
          <div class="slide-icon">{{ currentSlide.icon }}</div>
          <h1 class="slide-title">{{ currentSlide.title }}</h1>
          <p class="slide-subtitle">{{ currentSlide.subtitle }}</p>
          <div v-if="coverPoints.length" class="cover-objectives">
            <div v-for="pt in coverPoints" :key="pt.text" class="cover-obj">
              <span class="obj-icon">{{ pt.icon }}</span>
              <span class="obj-text">{{ pt.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Slide -->
      <div v-else-if="currentSlide.type === 'content'" class="slide slide-content">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="slide-body">
          <div v-for="(item, index) in currentSlide.content" :key="index">
            <p v-if="item.type === 'text'" class="text-content">{{ item.text }}</p>
            <div v-if="item.type === 'map'" class="map-container" :style="{ height: item.height || '500px' }">
              <NZMapPage :embedded="true" />
            </div>
            <div v-if="item.type === 'stats'" class="stats-grid">
              <div v-for="(stat, idx) in item.items" :key="idx" class="stat-card">
                <div class="stat-icon">{{ stat.icon }}</div>
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-value">{{ stat.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
        <div v-if="currentSlide.reviewQuiz" class="review-wrapper">
          <NZReviewQuiz :config="currentSlide.reviewQuiz" @go-to-level="$emit('go-to-level', $event)" />
        </div>
      </div>

      <!-- Content with Map Slide -->
      <div v-else-if="currentSlide.type === 'content-with-map'" class="slide slide-content-with-map">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="content-map-layout">
          <div class="content-text">
            <p>{{ currentSlide.text }}</p>
          </div>
          <div class="content-map" ref="embeddedMapContainer"></div>
        </div>
      </div>

      <!-- Timeline Slide -->
      <div v-else-if="currentSlide.type === 'timeline'" class="slide slide-timeline">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
          <p v-if="currentSlide.subtitle" class="timeline-subtitle">{{ currentSlide.subtitle }}</p>
        </div>
        <div class="timeline">
          <div v-for="(item, index) in currentSlide.items" :key="index" class="timeline-item">
            <div class="timeline-badge">{{ item.year }}</div>
            <div class="timeline-content">
              <div class="timeline-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
        <div v-if="currentSlide.reviewQuiz" class="review-wrapper">
          <NZReviewQuiz :config="currentSlide.reviewQuiz" @go-to-level="$emit('go-to-level', $event)" />
        </div>
      </div>

      <!-- Feature Slide -->
      <div v-else-if="currentSlide.type === 'feature'" class="slide slide-feature">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="features-grid">
          <div v-for="(feature, index) in currentSlide.features" :key="index" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
        <div v-if="currentSlide.reviewQuiz" class="review-wrapper">
          <NZReviewQuiz :config="currentSlide.reviewQuiz" @go-to-level="$emit('go-to-level', $event)" />
        </div>
      </div>

      <!-- Summary Slide -->
      <div v-else-if="currentSlide.type === 'summary'" class="slide slide-summary">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="summary-content">
          <ul class="summary-list">
            <li v-for="(point, index) in (currentSlide.keyPoints || currentSlide.points)" :key="index">{{ point }}</li>
          </ul>
        </div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
        <div v-if="currentSlide.reviewQuiz" class="review-wrapper">
          <NZReviewQuiz :config="currentSlide.reviewQuiz" @go-to-level="$emit('go-to-level', $event)" />
        </div>
      </div>

      <!-- Chart Slide -->
      <div v-else-if="currentSlide.type === 'chart'" class="slide slide-chart">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="cycle-chart">
          <div v-for="(item, index) in currentSlide.data" :key="index" class="cycle-item" :style="{ borderColor: item.color }">
            <div class="cycle-season" :style="{ background: item.color }">{{ item.season }}</div>
            <div class="cycle-months">{{ item.months }}</div>
            <div class="cycle-phase">{{ item.phase }}</div>
            <ul class="cycle-tasks">
              <li v-for="(task, idx) in item.tasks" :key="idx">{{ task }}</li>
            </ul>
            <div class="cycle-risk"><span class="risk-label">主要風險：</span>{{ item.risk }}</div>
          </div>
        </div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
      </div>

      <!-- Comparison Slide -->
      <div v-else-if="currentSlide.type === 'comparison'" class="slide slide-comparison">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <h3 v-if="currentSlide.comparisonData.title" class="comparison-title">{{ currentSlide.comparisonData.title }}</h3>
        <div class="comparison-grid">
          <div class="comparison-column" :style="{ borderColor: currentSlide.comparisonData.left.color }">
            <div class="comparison-header" :style="{ background: currentSlide.comparisonData.left.color }">
              <span v-if="currentSlide.comparisonData.left.icon" class="comparison-icon">{{ currentSlide.comparisonData.left.icon }}</span>
              {{ currentSlide.comparisonData.left.label }}
            </div>
            <ul class="comparison-list">
              <li v-for="(item, idx) in currentSlide.comparisonData.left.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
          <div class="comparison-column" :style="{ borderColor: currentSlide.comparisonData.right.color }">
            <div class="comparison-header" :style="{ background: currentSlide.comparisonData.right.color }">
              <span v-if="currentSlide.comparisonData.right.icon" class="comparison-icon">{{ currentSlide.comparisonData.right.icon }}</span>
              {{ currentSlide.comparisonData.right.label }}
            </div>
            <ul class="comparison-list">
              <li v-for="(item, idx) in currentSlide.comparisonData.right.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </div>
        <p v-if="currentSlide.summary" class="comparison-summary">{{ currentSlide.summary }}</p>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
      </div>

      <!-- Table Slide -->
      <div v-else-if="currentSlide.type === 'table'" class="slide slide-table">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th v-for="(header, idx) in currentSlide.tableData.headers" :key="idx">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in currentSlide.tableData.rows" :key="idx">
                <td>{{ row.disease }}</td>
                <td>{{ row.condition }}</td>
                <td>{{ row.symptom }}</td>
                <td>{{ row.prevention }}</td>
                <td><span :class="['risk-badge', getRiskClass(row.risk)]">{{ row.risk }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="currentSlide.note" class="table-note">💡 {{ currentSlide.note }}</p>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
      </div>

      <!-- Map Slide -->
      <div v-else-if="currentSlide.type === 'map'" class="slide slide-map">
        <NZMapSlide :slide="currentSlide" />
      </div>

      <!-- Marlborough Sauvignon Sub-regions Slide -->
      <div v-else-if="currentSlide.type === 'marlborough-sub-regions'" class="slide slide-specialized">
        <MarlboroughSauvignonSlide :slide="currentSlide" />
      </div>

      <!-- Central Otago Pinot Sub-regions Slide -->
      <div v-else-if="currentSlide.type === 'central-otago-sub-regions'" class="slide slide-specialized">
        <CentralOtagoPinotSlide :slide="currentSlide" />
      </div>

      <!-- Infographic Slide -->
      <div v-else-if="currentSlide.type === 'infographic'" class="slide slide-infographic">
        <div class="slide-header">
          <span class="slide-icon">{{ currentSlide.icon }}</span>
          <h2>{{ currentSlide.title }}</h2>
        </div>
        <p class="infographic-context">{{ currentSlide.infographicData.context }}</p>
        <div class="infographic-challenge">
          <h3>{{ currentSlide.infographicData.challenge.title }}</h3>
          <ul>
            <li v-for="(item, idx) in currentSlide.infographicData.challenge.items" :key="idx">{{ item }}</li>
          </ul>
        </div>
        <div class="infographic-solutions">
          <h3>防護措施對比</h3>
          <div class="solution-cards">
            <div v-for="(solution, idx) in currentSlide.infographicData.solutions" :key="idx" class="solution-card">
              <div class="solution-method">{{ solution.method }}</div>
              <div class="solution-stats">
                <div class="solution-stat"><span class="stat-label">成本</span><span class="stat-value">{{ solution.cost }}</span></div>
                <div class="solution-stat"><span class="stat-label">有效性</span><span class="stat-value">{{ solution.effectiveness }}</span></div>
                <div class="solution-stat"><span class="stat-label">覆蓋範圍</span><span class="stat-value">{{ solution.coverage }}</span></div>
              </div>
              <div class="solution-detail">{{ solution.detail }}</div>
            </div>
          </div>
        </div>
        <div class="infographic-result">✓ {{ currentSlide.infographicData.result }}</div>
        <div v-if="currentSlide.quiz" class="quiz-wrapper">
          <NZQuizViewer :quiz="currentSlide.quiz" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, onUnmounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import NZQuizViewer from './NZQuizViewer.vue'
import NZReviewQuiz from './NZReviewQuiz.vue'
import NZMapPage from './NZMapPage.vue'
import NZMapSlide from './NZMapSlide.vue'
import MarlboroughSauvignonSlide from './slides/MarlboroughSauvignonSlide.vue'
import CentralOtagoPinotSlide from './slides/CentralOtagoPinotSlide.vue'

const props = defineProps({
  slides: { type: Array, default: () => [] },
  currentIndex: { type: Number, default: 0 }
})

defineEmits(['go-to-level'])

const currentSlide = computed(() => props.slides[props.currentIndex] || null)

// 封面學習目標：優先用資料中的 points，否則從內容 slides 自動生成
const coverPoints = computed(() => {
  if (currentSlide.value?.type !== 'cover') return []
  if (currentSlide.value?.points?.length) return currentSlide.value.points
  return props.slides
    .filter(s => s.type !== 'cover' && s.type !== 'summary' && s.title)
    .slice(0, 4)
    .map(s => ({ icon: s.icon || '✦', text: s.title }))
})

const embeddedMapContainer = ref(null)
let embeddedMap = null

const getRiskClass = (risk) => {
  if (risk.includes('極高')) return 'risk-critical'
  if (risk.includes('高')) return 'risk-high'
  if (risk.includes('中')) return 'risk-medium'
  return 'risk-low'
}

const initEmbeddedMap = async () => {
  if (!embeddedMapContainer.value) return
  if (embeddedMap) { embeddedMap.remove(); embeddedMap = null }
  await nextTick()
  try {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
    embeddedMap = new mapboxgl.Map({
      container: embeddedMapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [172.5, -41.5],
      zoom: 4.8,
      pitch: 0,
      bearing: 0
    })
    embeddedMap.on('load', async () => {
      embeddedMap.addControl(new mapboxgl.NavigationControl(), 'top-right')
      const regionsToLoad = [
        'Auckland', 'Bannockburn', 'Central_Hawkes_Bay', 'Central_Otago',
        'Gisborne', 'Gladstone', 'Hawkes_Bay', 'Kumeu', 'Marlborough',
        'Martinborough', 'Matakana', 'Nelson', 'North_Canterbury',
        'Northland', 'Waiheke_Island', 'Waipara_Valley', 'Waitaki_Valley_North_Otago'
      ]
      for (const region of regionsToLoad) {
        try {
          const response = await fetch(`/newzealand/geojson/NewZealand/${region}.geojson`)
          const geojson = await response.json()
          embeddedMap.addSource(`region-${region}`, { type: 'geojson', data: geojson })
          embeddedMap.addLayer({ id: `fill-${region}`, type: 'fill', source: `region-${region}`, paint: { 'fill-color': '#006400', 'fill-opacity': 0.4 } })
          embeddedMap.addLayer({ id: `outline-${region}`, type: 'line', source: `region-${region}`, paint: { 'line-color': '#004d00', 'line-width': 2 } })
        } catch (error) {
          console.warn(`無法載入 ${region}:`, error)
        }
      }
    })
  } catch (error) {
    console.error('地圖初始化失敗:', error)
  }
}

watch(() => currentSlide.value?.type, (newType) => {
  if (newType === 'content-with-map') {
    nextTick(() => initEmbeddedMap())
  } else if (embeddedMap) {
    embeddedMap.remove()
    embeddedMap = null
  }
}, { immediate: true })

onUnmounted(() => {
  if (embeddedMap) { embeddedMap.remove(); embeddedMap = null }
})
</script>

<style scoped>
.slide-viewer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.slide-container { flex: 1; display: flex; align-items: center; justify-content: center; padding: 0; overflow-y: auto; }
.slide { width: 100%; max-width: 100%; background: white; border-radius: 0; padding: 60px 100px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); animation: slideIn 0.4s ease-out; }
@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
.slide-cover { text-align: center; color: white; min-height: 500px; display: flex; align-items: center; justify-content: center; }
.slide-cover-content { width: 100%; }
.cover-objectives { display: flex; flex-direction: column; gap: 10px; margin-top: 32px; text-align: left; max-width: 480px; margin-left: auto; margin-right: auto; }
.cover-obj { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.15); border-radius: 10px; padding: 10px 16px; backdrop-filter: blur(4px); }
.obj-icon { font-size: 1.3rem; flex-shrink: 0; }
.obj-text { font-size: 0.95rem; color: rgba(255,255,255,0.95); font-weight: 500; line-height: 1.4; }
.slide-cover .slide-icon { font-size: 80px; margin-bottom: 30px; display: block; }
.slide-cover .slide-title { font-size: 48px; font-weight: 700; margin: 0 0 20px 0; text-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.slide-cover .slide-subtitle { font-size: 24px; font-weight: 400; opacity: 0.95; margin: 0; }
.slide-content-with-map { height: 100%; display: flex; flex-direction: column; }
.content-map-layout { display: flex; gap: 40px; align-items: stretch; flex: 1; }
.content-text { flex: 1; display: flex; align-items: center; font-size: 20px; line-height: 1.8; color: #4a5568; }
.content-text p { margin: 0; }
.content-map { flex: 1; min-height: 600px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15); background: #f8f9fa; }
.slide-header { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 3px solid #006400; }
.slide-header .slide-icon { font-size: 48px; }
.slide-header h2 { margin: 0; font-size: 36px; color: #2d3748; font-weight: 700; }
.timeline-subtitle { margin: 8px 0 0 0; font-size: 16px; color: #718096; font-weight: 400; }
.slide-body { font-size: 20px; line-height: 1.8; color: #4a5568; }
.text-content { margin: 0 0 24px 0; }
.map-container { width: 100%; margin: 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background: #f8f9fa; }
.stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 30px; }
.stat-card { background: #f7fafc; padding: 28px; border-radius: 16px; border: 2px solid #e2e8f0; transition: all 0.3s; }
.stat-card:hover { border-color: #006400; transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,100,0,0.2); }
.stat-icon { font-size: 40px; margin-bottom: 12px; }
.stat-label { font-size: 16px; color: #718096; font-weight: 600; margin-bottom: 8px; }
.stat-value { font-size: 18px; color: #2d3748; font-weight: 600; line-height: 1.5; }
.timeline { display: flex; flex-direction: column; gap: 0; padding-left: 16px; border-left: 3px solid #d1e7d1; margin: 10px 0; }
.timeline-item { display: flex; gap: 12px; padding: 10px 0; position: relative; }
.timeline-item::before { content: ''; position: absolute; left: -22px; top: 16px; width: 10px; height: 10px; border-radius: 50%; background: #2d6a2d; border: 2px solid white; box-shadow: 0 0 0 2px #2d6a2d; }
.timeline-badge { flex-shrink: 0; font-size: 0.75rem; font-weight: 700; background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 20px; height: fit-content; margin-top: 2px; white-space: nowrap; }
.timeline-content { flex: 1; min-width: 0; }
.timeline-text { font-size: 0.92rem; color: #374151; line-height: 1.6; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
.feature-card { background: #f7fafc; padding: 32px; border-radius: 16px; border: 2px solid #e2e8f0; transition: all 0.3s; }
.feature-card:hover { border-color: #006400; transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,100,0,0.2); }
.feature-icon { font-size: 48px; margin-bottom: 16px; }
.feature-card h3 { font-size: 22px; color: #2d3748; margin: 0 0 12px 0; font-weight: 700; }
.feature-card p { font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0; }
.summary-content { font-size: 20px; }
.summary-list { list-style: none; padding: 0; margin: 0; }
.summary-list li { position: relative; padding: 20px 20px 20px 60px; margin-bottom: 16px; background: #f7fafc; border-radius: 12px; border-left: 4px solid #006400; line-height: 1.6; color: #2d3748; }
.cycle-chart { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
.cycle-item { background: #f7fafc; border-radius: 16px; border: 2px solid; padding: 24px; }
.cycle-season { color: white; font-weight: 700; font-size: 18px; padding: 8px 16px; border-radius: 8px; margin-bottom: 12px; text-align: center; }
.cycle-months { font-size: 14px; color: #718096; margin-bottom: 8px; }
.cycle-phase { font-size: 16px; font-weight: 600; color: #2d3748; margin-bottom: 12px; }
.cycle-tasks { list-style: none; padding: 0; margin: 0 0 12px 0; }
.cycle-tasks li { font-size: 14px; color: #4a5568; padding: 4px 0; padding-left: 16px; position: relative; }
.cycle-tasks li::before { content: '•'; position: absolute; left: 0; color: #006400; }
.cycle-risk { font-size: 13px; color: #718096; padding-top: 8px; border-top: 1px solid #e2e8f0; }
.risk-label { font-weight: 600; }
.comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.comparison-column { border-radius: 16px; border: 2px solid; overflow: hidden; }
.comparison-header { color: white; font-weight: 700; font-size: 20px; padding: 16px 24px; display: flex; align-items: center; gap: 12px; }
.comparison-icon { font-size: 24px; }
.comparison-list { list-style: none; padding: 24px; margin: 0; }
.comparison-list li { padding: 8px 0; border-bottom: 1px solid rgba(0,0,0,0.05); font-size: 16px; color: #4a5568; }
.comparison-list li:last-child { border-bottom: none; }
.comparison-title { font-size: 24px; color: #2d3748; margin: 0 0 24px 0; text-align: center; }
.comparison-summary { margin-top: 24px; font-size: 16px; color: #718096; background: #f7fafc; padding: 16px 24px; border-radius: 12px; line-height: 1.6; }
.table-container { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; font-size: 16px; }
.data-table th { background: #2d3748; color: white; padding: 12px 16px; text-align: left; font-weight: 600; }
.data-table td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; color: #4a5568; }
.data-table tr:hover { background: #f7fafc; }
.risk-badge { padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: 600; }
.risk-critical { background: #fed7d7; color: #9b2c2c; }
.risk-high { background: #feebc8; color: #c05621; }
.risk-medium { background: #fef9c3; color: #975a16; }
.risk-low { background: #c6f6d5; color: #276749; }
.table-note { margin-top: 16px; font-size: 15px; color: #718096; font-style: italic; }
.infographic-context { font-size: 18px; color: #4a5568; line-height: 1.7; margin-bottom: 24px; padding: 16px 24px; background: #f7fafc; border-radius: 12px; border-left: 4px solid #006400; }
.infographic-challenge, .infographic-solutions { margin-bottom: 32px; }
.infographic-challenge h3, .infographic-solutions h3 { font-size: 24px; color: #2d3748; margin: 0 0 16px 0; }
.infographic-challenge ul { list-style: none; padding: 0; }
.infographic-challenge ul li { padding: 10px 16px; margin-bottom: 8px; background: #fff5f5; border-radius: 8px; border-left: 3px solid #fc8181; font-size: 16px; color: #4a5568; }
.solution-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
.solution-card { background: #f7fafc; border: 2px solid #e2e8f0; border-radius: 16px; padding: 24px; }
.solution-method { font-size: 18px; font-weight: 700; color: #006400; margin-bottom: 16px; text-align: center; }
.solution-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 16px; }
.solution-stat { background: white; padding: 10px; border-radius: 8px; text-align: center; border: 1px solid #e2e8f0; }
.solution-stat .stat-label { font-size: 12px; color: #718096; display: block; margin-bottom: 4px; }
.solution-stat .stat-value { font-size: 14px; font-weight: 600; color: #2d3748; }
.solution-detail { font-size: 14px; color: #4a5568; line-height: 1.5; padding-top: 12px; border-top: 1px solid #cbd5e0; }
.infographic-result { background: linear-gradient(135deg, #c6f6d5 0%, #9ae6b4 100%); padding: 20px; border-radius: 12px; font-size: 18px; font-weight: 600; color: #22543d; text-align: center; border: 2px solid #48bb78; }
.quiz-wrapper, .review-wrapper { margin-top: 32px; }
@media (max-width: 1024px) {
  .slide { padding: 50px 60px; }
  .content-map-layout { gap: 30px; }
  .content-text { font-size: 18px; }
  .content-map { min-height: 500px; }
}
@media (max-width: 768px) {
  .slide { padding: 32px 24px; }
  .slide-cover .slide-icon { font-size: 60px; }
  .slide-cover .slide-title { font-size: 32px; }
  .slide-cover .slide-subtitle { font-size: 18px; }
  .slide-header h2 { font-size: 24px; }
  .slide-header { gap: 12px; margin-bottom: 24px; }
  .content-map-layout { flex-direction: column; gap: 24px; }
  .content-text { font-size: 17px; line-height: 1.7; padding: 0 8px; }
  .content-map { min-height: 450px; max-height: 60vh; order: -1; margin: 0 -24px; border-radius: 0; }
  .stats-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .cycle-chart { grid-template-columns: 1fr; }
  .comparison-grid { grid-template-columns: 1fr; }
  .solution-cards { grid-template-columns: 1fr; }
  .solution-stats { grid-template-columns: 1fr; }
  .timeline-item { padding-left: 30px; }
}
@media (max-width: 480px) {
  .slide { padding: 24px 16px; }
  .slide-cover .slide-icon { font-size: 48px; }
  .slide-cover .slide-title { font-size: 24px; }
  .slide-header h2 { font-size: 20px; }
  .content-map { min-height: 350px; max-height: 50vh; margin: 0 -16px; }
}
.slide-map {
  padding: 0 !important;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
