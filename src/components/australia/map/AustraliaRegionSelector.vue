<template>
  <div class="au-region-selector">
    <!-- 背景裝飾 -->
    <div class="bg-map-overlay"></div>

    <div class="main-container">
      <!-- Header -->
      <header class="selector-header">
        <div class="header-left">
          <button class="back-btn" @click="$emit('backToCourse')">← 返回課程</button>
          <div class="brand-logo">
            <span class="flag-icon">🇦🇺</span>
            <div>
              <div class="brand-title">澳洲葡萄酒探索地圖</div>
              <div class="brand-sub">Australian Wine Regions — GI Classification</div>
            </div>
          </div>
        </div>
        <div class="header-right">
          <button class="hdr-btn ghost" @click="router.push('/')">🏠 首頁</button>
          <button class="hdr-btn primary" @click="$emit('openAll')">🗺️ 全覽地圖</button>
        </div>
      </header>

      <!-- Wine Australia 分類說明 -->
      <section class="intro-section">
        <div class="intro-content">
          <h2>Wine Australia 產區分類</h2>
          <p>
            依據 Wine Australia 官方 Regional Program 的 11 個群組，將澳洲
            65+ 個 GI 產區整合為 8 個教學分區。選擇分區即可進入互動式地圖深入探索。
          </p>
          <div class="wa-clusters">
            <div v-for="c in waClusterBadges" :key="c" class="wa-badge">{{ c }}</div>
          </div>
        </div>
      </section>

      <!-- 產區卡片格 -->
      <section class="regions-section">
        <div class="regions-grid">
          <div
            v-for="cluster in clusters"
            :key="cluster.id"
            class="region-card"
            :class="{ active: hoveredId === cluster.id }"
            :style="{ '--accent': cluster.color }"
            @mouseenter="hoveredId = cluster.id"
            @mouseleave="hoveredId = null"
            @click="selectCluster(cluster)"
          >
            <!-- 色彩頂條 -->
            <div class="card-top-bar" :style="{ background: cluster.gradient }">
              <div class="card-icon">{{ cluster.icon }}</div>
              <div class="card-meta">
                <div class="card-name">{{ cluster.name }}</div>
                <div class="card-name-en">{{ cluster.nameEn }}</div>
              </div>
              <div class="card-state-badge">{{ cluster.state }}</div>
            </div>

            <!-- 卡片內容 -->
            <div class="card-body">
              <p class="card-desc">{{ cluster.desc }}</p>

              <!-- 重點產區 tags -->
              <div class="key-regions">
                <span
                  v-for="r in cluster.keyRegions"
                  :key="r"
                  class="key-region-tag"
                  :style="{ background: cluster.color + '20', color: cluster.color, borderColor: cluster.color + '50' }"
                >{{ r }}</span>
              </div>

              <!-- 統計數字 -->
              <div class="card-stats">
                <div class="stat-item">
                  <span class="stat-num">{{ cluster.regionCount }}</span>
                  <span class="stat-label">Region</span>
                </div>
                <div v-if="cluster.subRegionCount > 0" class="stat-item">
                  <span class="stat-num">{{ cluster.subRegionCount }}</span>
                  <span class="stat-label">Sub-Region</span>
                </div>
                <div class="stat-item">
                  <span class="stat-num cluster-name-sm">{{ cluster.waCluster }}</span>
                </div>
              </div>

              <!-- 進入按鈕 -->
              <button class="card-enter-btn" :style="{ background: cluster.color }">
                探索此產區 →
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 底部說明 -->
      <footer class="selector-footer">
        <p>資料來源：<a href="https://www.wineaustralia.com" target="_blank" rel="noopener">Wine Australia</a>・GI 分級制度（Zone / Region / Sub-Region）</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['backToCourse', 'openAll', 'clusterSelected'])
const router = useRouter()
const hoveredId = ref(null)

const waClusterBadges = [
  'SA North', 'SA Central', 'Limestone Coast',
  'Greater Victoria', 'Greater NSW & ACT',
  'Western Australia', 'Queensland', 'Tasmania',
  'Riverland', 'Riverina', 'Murray Valley',
]

const clusters = [
  {
    id: 'sa-north',
    name: '南澳 · 北部',
    nameEn: 'SA North',
    icon: '🌡️',
    color: '#e67e22',
    gradient: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
    state: 'SA',
    center: [138.8, -33.8],
    zoom: 7,
    keyRegions: ['Barossa Valley', 'Eden Valley', 'Clare Valley'],
    desc: 'Barossa 老藤 Shiraz・Clare Valley Riesling・Eden Valley 高原風土。全球最珍貴的百年老藤產地，根瘤蚜從未侵入南澳。',
    regionCount: 3,
    subRegionCount: 1,
    waCluster: 'SA North',
    filterConfig: {
      regionNames: ['Barossa Valley', 'Eden Valley', 'High Eden', 'Clare Valley'],
      filterZones: ['Barossa'],
    },
  },
  {
    id: 'sa-central',
    name: '南澳 · 中部',
    nameEn: 'SA Central',
    icon: '🌊',
    color: '#c0692b',
    gradient: 'linear-gradient(135deg, #c0692b 0%, #a04020 100%)',
    state: 'SA',
    center: [138.7, -35.3],
    zoom: 7.5,
    keyRegions: ['Adelaide Hills', 'McLaren Vale', 'Langhorne Creek', 'Kangaroo Island'],
    desc: 'Adelaide Hills 涼爽白酒・McLaren Vale 地中海型 GSM・Langhorne Creek 湖岸風土。',
    regionCount: 4,
    subRegionCount: 2,
    waCluster: 'SA Central',
    filterConfig: {
      regionNames: ['Adelaide Hills', 'Lenswood', 'Piccadilly Valley', 'Mclaren Vale', 'Langhorne Creek', 'Kangaroo Island'],
      filterZones: ['Fleurieu'],
    },
  },
  {
    id: 'limestone-coast',
    name: '南澳 · 石灰岸',
    nameEn: 'Limestone Coast',
    icon: '🪨',
    color: '#922b21',
    gradient: 'linear-gradient(135deg, #922b21 0%, #6e1c15 100%)',
    state: 'SA',
    center: [140.3, -37.1],
    zoom: 7,
    keyRegions: ['Coonawarra', 'Wrattonbully', 'Padthaway'],
    desc: 'Terra Rossa 紅棕壤上的 Cabernet Sauvignon 聖地。Coonawarra 是澳洲最著名的精品紅酒產區。',
    regionCount: 6,
    subRegionCount: 0,
    waCluster: 'Limestone Coast',
    filterConfig: {
      regionNames: ['Coonawarra', 'Wrattonbully'],
      filterZones: ['Limestone Coast'],
    },
  },
  {
    id: 'victoria',
    name: '維多利亞',
    nameEn: 'Victoria',
    icon: '🎻',
    color: '#8e44ad',
    gradient: 'linear-gradient(135deg, #8e44ad 0%, #6c3483 100%)',
    state: 'VIC',
    center: [145.5, -37.2],
    zoom: 5.8,
    keyRegions: ['Yarra Valley', 'Mornington Peninsula', 'Heathcote', 'Rutherglen'],
    desc: 'Yarra Pinot Noir・Mornington 涼爽海洋・Heathcote 礦石 Shiraz・Rutherglen 加強型 Muscat 傳奇。',
    regionCount: 12,
    subRegionCount: 0,
    waCluster: 'Greater Victoria',
  },
  {
    id: 'nsw',
    name: '新南威爾斯',
    nameEn: 'New South Wales',
    icon: '🏙️',
    color: '#2980b9',
    gradient: 'linear-gradient(135deg, #2980b9 0%, #1a5276 100%)',
    state: 'NSW',
    center: [147.5, -33.5],
    zoom: 5.5,
    keyRegions: ['Hunter Valley', 'Orange', 'Mudgee', 'Canberra District'],
    desc: 'Hunter Semillon 陳年奇蹟・Orange 高海拔 800m・Canberra Shiraz Viognier・澳洲最古老產酒州。',
    regionCount: 5,
    subRegionCount: 0,
    waCluster: 'Greater NSW and ACT',
  },
  {
    id: 'western-australia',
    name: '西澳大利亞',
    nameEn: 'Western Australia',
    icon: '🏄',
    color: '#27ae60',
    gradient: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
    state: 'WA',
    center: [117.5, -34],
    zoom: 6,
    keyRegions: ['Margaret River', 'Great Southern', 'Swan District'],
    desc: 'Margaret River 澳洲波爾多・Great Southern 五個 Region・印度洋海洋氣候影響下的精品主義。',
    regionCount: 6,
    subRegionCount: 1,
    waCluster: 'Western Australia',
  },
  {
    id: 'queensland',
    name: '昆士蘭',
    nameEn: 'Queensland',
    icon: '☀️',
    color: '#c0392b',
    gradient: 'linear-gradient(135deg, #c0392b 0%, #922b21 100%)',
    state: 'QLD',
    center: [151.8, -28.7],
    zoom: 8,
    keyRegions: ['Granite Belt', 'South Burnett'],
    desc: 'Granite Belt 海拔 800–1000m・澳洲最北精品產區・70+ 替代品種試驗・Stanthorpe 蘋果區。',
    regionCount: 1,
    subRegionCount: 0,
    waCluster: 'Queensland',
  },
  {
    id: 'tasmania',
    name: '塔斯馬尼亞',
    nameEn: 'Tasmania',
    icon: '🧊',
    color: '#1abc9c',
    gradient: 'linear-gradient(135deg, #1abc9c 0%, #148f77 100%)',
    state: 'TAS',
    center: [146.5, -42],
    zoom: 6.5,
    keyRegions: ['Tamar Valley', 'Derwent Valley', 'Coal River Valley'],
    desc: '澳洲最南最冷・頂級氣泡酒基底・精緻 Pinot Noir 與 Chardonnay・近十年快速崛起的新星。',
    regionCount: 1,
    subRegionCount: 0,
    waCluster: 'Tasmania',
  },
]

function selectCluster(cluster) {
  emit('clusterSelected', cluster)
}
</script>

<style scoped>
.au-region-selector {
  min-height: 100vh;
  background: linear-gradient(160deg, #0a1628 0%, #0d2137 40%, #0f2a1a 100%);
  color: #fff;
  position: relative;
  overflow-x: hidden;
  font-family: 'Noto Sans TC', 'Segoe UI', sans-serif;
}

.bg-map-overlay {
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 20%, rgba(200,169,81,0.07) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(39,174,96,0.06) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.main-container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

/* ── Header ─────────────────────────────────────────────────────── */
.selector-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  gap: 16px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.back-btn {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 8px;
  color: #fff;
  padding: 7px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}
.back-btn:hover { background: rgba(255,255,255,0.2); }

.brand-logo { display: flex; align-items: center; gap: 10px; }
.flag-icon { font-size: 2rem; }
.brand-title { font-size: 1.2rem; font-weight: 800; color: #c8a951; }
.brand-sub { font-size: 0.72rem; color: rgba(255,255,255,0.5); }

.header-right { display: flex; gap: 8px; }
.hdr-btn {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
}
.hdr-btn.ghost {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.85);
}
.hdr-btn.ghost:hover { background: rgba(255,255,255,0.1); }
.hdr-btn.primary {
  background: rgba(200,169,81,0.85);
  border: none;
  color: #0a1628;
  font-weight: 800;
}
.hdr-btn.primary:hover { background: rgba(200,169,81,1); }

/* ── Intro ──────────────────────────────────────────────────────── */
.intro-section {
  padding: 28px 0 20px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 28px;
}
.intro-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #c8a951;
  margin: 0 0 8px;
}
.intro-content p {
  font-size: 0.92rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
  margin: 0 0 14px;
  max-width: 680px;
}
.wa-clusters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.wa-badge {
  padding: 3px 10px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  font-size: 0.72rem;
  color: rgba(255,255,255,0.65);
  white-space: nowrap;
}

/* ── Region Grid ────────────────────────────────────────────────── */
.regions-section { margin-bottom: 40px; }

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 18px;
}

.region-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
}
.region-card:hover,
.region-card.active {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.4), 0 0 0 2px var(--accent);
  border-color: var(--accent);
}

/* 頂部彩色條 */
.card-top-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  position: relative;
}
.card-icon { font-size: 2rem; flex-shrink: 0; }
.card-meta { flex: 1; min-width: 0; }
.card-name { font-size: 1.05rem; font-weight: 800; color: #fff; }
.card-name-en { font-size: 0.72rem; color: rgba(255,255,255,0.7); font-style: italic; margin-top: 2px; }
.card-state-badge {
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

/* 卡片內容 */
.card-body {
  padding: 14px 16px 16px;
}
.card-desc {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.55;
  margin: 0 0 10px;
}

/* 重點產區 tags */
.key-regions {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 12px;
}
.key-region-tag {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid;
  font-weight: 600;
  white-space: nowrap;
}

/* 統計數字 */
.card-stats {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}
.stat-num {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--accent);
}
.stat-label {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.45);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.cluster-name-sm {
  font-size: 0.68rem !important;
  font-weight: 600 !important;
  color: rgba(255,255,255,0.4) !important;
  padding: 2px 7px;
  background: rgba(255,255,255,0.06);
  border-radius: 6px;
}

/* 進入按鈕 */
.card-enter-btn {
  width: 100%;
  padding: 9px 0;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s;
}
.card-enter-btn:hover { opacity: 0.88; transform: translateY(-1px); }

/* ── Footer ─────────────────────────────────────────────────────── */
.selector-footer {
  text-align: center;
  padding: 16px 0;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.3);
}
.selector-footer a { color: rgba(200,169,81,0.7); text-decoration: none; }
.selector-footer a:hover { color: #c8a951; }

/* ── RWD ─────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .selector-header { flex-wrap: wrap; }
  .regions-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .intro-content p { font-size: 0.85rem; }
  .brand-title { font-size: 1rem; }
}
@media (max-width: 480px) {
  .regions-grid { grid-template-columns: 1fr; }
  .header-right .hdr-btn.primary span { display: none; }
}
</style>
