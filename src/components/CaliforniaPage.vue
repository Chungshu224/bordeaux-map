<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CaliforniaRegionSelector from './california/CaliforniaRegionSelector.vue'
import CaliforniaMapSection from './california/CaliforniaMapSection.vue'

const router = useRouter()
// 'cover' | 'selector' | 'map'
const currentMode = ref('cover')
const selectedGroup = ref(null)

function onGroupSelected(group) {
  selectedGroup.value = group
  currentMode.value = 'map'
}
</script>

<template>
  <div class="california-page">
    <!-- 地圖首頁封面 -->
    <div v-if="currentMode === 'cover'" class="ca-cover">
      <div class="ca-cover-bg"></div>
      <div class="ca-cover-content">
        <div class="ca-flag">🍷</div>
        <h1 class="ca-title">加州葡萄酒產區</h1>
        <p class="ca-subtitle">California Wine Regions</p>
        <p class="ca-desc">探索加州 154 個 AVA（美國葡萄酒法定產區）<br>從納帕谷到中央海岸，發現美國最偉大的葡萄酒地區</p>
        <div class="ca-stats">
          <div class="stat-item">
            <span class="stat-num">154</span>
            <span class="stat-label">個 AVA 產區</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">10</span>
            <span class="stat-label">大產區群組</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">1981</span>
            <span class="stat-label">年首批 AVA 認定</span>
          </div>
        </div>
        <div class="ca-cover-btns">
          <button class="btn-explore" @click="currentMode = 'selector'">
            🗺 探索產區地圖
          </button>
          <button class="btn-home" @click="router.push('/')">
            🏠 返回首頁
          </button>
        </div>
        <div class="ca-groups-preview">
          <div class="group-chip" style="background:#7B1A1A">Napa Valley</div>
          <div class="group-chip" style="background:#C0392B">Sonoma County</div>
          <div class="group-chip" style="background:#2980B9">Central Coast</div>
          <div class="group-chip" style="background:#27AE60">Mendocino & Lake</div>
          <div class="group-chip" style="background:#E67E22">Central Valley</div>
          <div class="group-chip" style="background:#D35400">Sierra Foothills</div>
          <div class="group-chip" style="background:#8E44AD">South Coast</div>
          <div class="group-chip" style="background:#16A085">Northern CA</div>
        </div>
      </div>
    </div>

    <!-- 選擇產區群組 -->
    <CaliforniaRegionSelector
      v-else-if="currentMode === 'selector'"
      @groupSelected="onGroupSelected"
      @back="currentMode = 'cover'"
    />

    <!-- 互動地圖 -->
    <CaliforniaMapSection
      v-else-if="currentMode === 'map' && selectedGroup"
      :selectedGroup="selectedGroup"
      @back="currentMode = 'selector'"
    />
  </div>
</template>

<style scoped>
.california-page {
  width: 100%;
  min-height: 100vh;
  background: #0a0a1e;
}

/* ── Cover ── */
.ca-cover {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.ca-cover-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 40%, rgba(123,26,26,0.5) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 60%, rgba(41,128,185,0.4) 0%, transparent 55%),
    linear-gradient(160deg, #0a0a1e 0%, #1a0a0a 50%, #0a101e 100%);
}
.ca-cover-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px;
  max-width: 680px;
  width: 100%;
}
.ca-flag { font-size: 4rem; margin-bottom: 12px; }
.ca-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
  text-shadow: 0 2px 12px rgba(0,0,0,0.5);
}
.ca-subtitle {
  font-size: 1.1rem;
  color: #e74c3c;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 16px;
}
.ca-desc {
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0 0 28px;
}
.ca-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: #e74c3c;
}
.stat-label {
  font-size: 0.72rem;
  color: #888;
  margin-top: 2px;
}
.ca-cover-btns {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 28px;
}
.btn-explore {
  padding: 12px 28px;
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 20px rgba(231,76,60,0.4);
}
.btn-explore:hover { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(231,76,60,0.55); }
.btn-home {
  padding: 12px 22px;
  background: rgba(255,255,255,0.08);
  color: #ccc;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.15s;
  backdrop-filter: blur(4px);
}
.btn-home:hover { background: rgba(255,255,255,0.14); color: #fff; }
.ca-groups-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.group-chip {
  padding: 4px 12px;
  border-radius: 16px;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.85;
}
@media (max-width: 500px) {
  .ca-title { font-size: 1.8rem; }
  .ca-stats { gap: 18px; }
  .ca-cover-btns { flex-direction: column; align-items: center; }
}
</style>
