<template>
  <div class="ms-slide">
    <div class="slide-header">
      <span class="slide-icon">{{ slide.icon || '🍋' }}</span>
      <h2>{{ slide.title || 'Marlborough Sauvignon Blanc 子產區風格' }}</h2>
    </div>
    <p v-if="slide.subtitle" class="ms-subtitle">{{ slide.subtitle }}</p>

    <div class="ms-tabs">
      <button
        v-for="key in keys"
        :key="key"
        class="ms-tab"
        :class="{ active: currentKey === key }"
        :style="currentKey === key ? { '--accent': data[key].color } : {}"
        @click="currentKey = key"
      >
        <span class="ms-tab-icon">{{ data[key].icon }}</span>
        <span class="ms-tab-label">{{ data[key].label }}</span>
      </button>
    </div>

    <div class="ms-panel" :style="{ '--accent': current.color }">
      <div class="ms-panel-head">
        <h3>{{ current.label }}</h3>
        <span class="ms-tagline">{{ current.tagline }}</span>
      </div>

      <div class="ms-grid">
        <section class="ms-card">
          <h4>🌍 風土條件</h4>
          <ul>
            <li v-for="(item, i) in current.terroir" :key="'t'+i">{{ item }}</li>
          </ul>
        </section>
        <section class="ms-card">
          <h4>🍷 風格特徵</h4>
          <ul>
            <li v-for="(item, i) in current.style" :key="'s'+i">{{ item }}</li>
          </ul>
        </section>
        <section class="ms-card">
          <h4>🏆 代表酒莊</h4>
          <ul>
            <li v-for="(item, i) in current.wineries" :key="'w'+i">{{ item }}</li>
          </ul>
        </section>
        <section class="ms-card ms-tasting">
          <h4>👃 品飲關鍵字</h4>
          <div class="ms-tags">
            <span v-for="(tag, i) in current.descriptors" :key="'d'+i" class="ms-tag">{{ tag }}</span>
          </div>
        </section>
      </div>
    </div>

    <div class="ms-summary">
      <strong>對比練習：</strong> Wairau 偏熱帶果與草本、Awatere 偏柑橘與礦物、Southern Valleys 兼具圓潤與結構，是辨識 Marlborough 風土差異的最佳組合。
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const data = {
  wairau: {
    label: 'Wairau Valley',
    icon: '🌿',
    color: '#48bb78',
    tagline: '最大、最溫暖、果香最張揚的核心子產區',
    terroir: [
      '產區面積最大，沖積砂礫土壤排水極佳',
      '日照長、夜溫涼爽，日夜溫差大',
      '受 Richmond Range 屏障，乾燥少雨'
    ],
    style: [
      '濃郁百香果、番石榴、芒果等熱帶水果',
      '青草、青椒、蘆筍等草本香氣鮮明',
      '高酸但果味豐厚，口感較圓潤'
    ],
    wineries: ['Cloudy Bay', 'Villa Maria', 'Brancott Estate', 'Saint Clair'],
    descriptors: ['百香果', '番石榴', '青草', '檸檬皮', '青椒']
  },
  southern: {
    label: 'Southern Valleys',
    icon: '🪨',
    color: '#805ad5',
    tagline: '黏土比例高，結構與紅酒潛力並存',
    terroir: [
      '位於 Wairau 南方支谷，含較多黏土與壤土',
      '保水性較佳，葡萄成熟更慢',
      '地勢起伏，提供多種坡向'
    ],
    style: [
      '果香較收斂、結構感更明顯',
      '帶有紅醋栗葉、香料與礦物層次',
      '同時是 Marlborough Pinot Noir 主要產地'
    ],
    wineries: ['Dog Point', 'Fromm', 'Clos Henri', 'TerraVin'],
    descriptors: ['紅醋栗葉', '葡萄柚', '燧石', '白桃', '香料']
  },
  awatere: {
    label: 'Awatere Valley',
    icon: '❄️',
    color: '#3182ce',
    tagline: '最涼爽、礦物感最強的「南方版」Marlborough',
    terroir: [
      '位於最南端，海拔較高、風較強',
      '土壤多為碎岩、黃土與石灰質夾層',
      '生長季比 Wairau 晚 7–14 天'
    ],
    style: [
      '酸度最尖銳、果香線條更清晰',
      '草本與礦物（碎石、海風）感最明顯',
      '熱帶水果較少，主打青柑橘與細緻香氣'
    ],
    wineries: ['Yealands', 'Astrolabe', 'Greywacke', 'Vavasour'],
    descriptors: ['萊姆', '葡萄柚', '海風', '碎石', '檸檬草']
  }
}

const keys = ['wairau', 'southern', 'awatere']
const currentKey = ref('wairau')
const current = computed(() => data[currentKey.value])
</script>

<style scoped>
.ms-slide {
  padding: 2rem;
  background: linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%);
  border-radius: 16px;
  min-height: 100%;
}
.slide-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.slide-header h2 { margin: 0; font-size: 1.6rem; color: #2d3748; }
.slide-icon { font-size: 2rem; }
.ms-subtitle { color: #4a5568; margin: 0 0 1.25rem; }

.ms-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.ms-tab {
  flex: 1 1 180px;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #4a5568;
  transition: all 0.2s;
}
.ms-tab:hover { border-color: #cbd5e0; transform: translateY(-1px); }
.ms-tab.active {
  border-color: var(--accent);
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.ms-tab-icon { font-size: 1.25rem; }

.ms-panel {
  background: #fff;
  border-radius: 14px;
  padding: 1.5rem;
  border-top: 5px solid var(--accent);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.ms-panel-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px dashed #edf2f7;
}
.ms-panel-head h3 { margin: 0; color: var(--accent); font-size: 1.4rem; }
.ms-tagline { color: #718096; font-size: 0.95rem; }

.ms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.ms-card {
  background: #f7fafc;
  border-radius: 10px;
  padding: 1rem;
  border-left: 3px solid var(--accent);
}
.ms-card h4 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #2d3748;
}
.ms-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #4a5568;
  font-size: 0.92rem;
  line-height: 1.6;
}
.ms-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ms-tag {
  background: var(--accent);
  color: #fff;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
}

.ms-summary {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: rgba(72, 187, 120, 0.12);
  border-left: 4px solid #48bb78;
  border-radius: 8px;
  color: #22543d;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
