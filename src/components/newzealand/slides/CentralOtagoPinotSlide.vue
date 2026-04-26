<template>
  <div class="co-slide">
    <div class="slide-header">
      <span class="slide-icon">{{ slide.icon || '🍒' }}</span>
      <h2>{{ slide.title || 'Central Otago Pinot Noir 子產區風格地圖' }}</h2>
    </div>
    <p v-if="slide.subtitle" class="co-subtitle">{{ slide.subtitle }}</p>

    <div class="co-tabs">
      <button
        v-for="key in keys"
        :key="key"
        class="co-tab"
        :class="{ active: currentKey === key }"
        :style="currentKey === key ? { '--accent': data[key].color } : {}"
        @click="currentKey = key"
      >
        <span class="co-tab-icon">{{ data[key].icon }}</span>
        <div class="co-tab-text">
          <span class="co-tab-label">{{ data[key].label }}</span>
          <span class="co-tab-tag">{{ data[key].shortTag }}</span>
        </div>
      </button>
    </div>

    <div class="co-panel" :style="{ '--accent': current.color }">
      <div class="co-panel-head">
        <h3>{{ current.label }}</h3>
        <span class="co-tagline">{{ current.tagline }}</span>
      </div>

      <div class="co-grid">
        <section class="co-card">
          <h4>🏔️ 地形與氣候</h4>
          <ul><li v-for="(item, i) in current.terroir" :key="'t'+i">{{ item }}</li></ul>
        </section>
        <section class="co-card">
          <h4>🍇 Pinot 風格</h4>
          <ul><li v-for="(item, i) in current.style" :key="'s'+i">{{ item }}</li></ul>
        </section>
        <section class="co-card">
          <h4>🏆 代表酒莊</h4>
          <ul><li v-for="(item, i) in current.wineries" :key="'w'+i">{{ item }}</li></ul>
        </section>
        <section class="co-card co-tasting">
          <h4>👃 風味描述詞</h4>
          <div class="co-tags">
            <span v-for="(tag, i) in current.descriptors" :key="'d'+i" class="co-tag">{{ tag }}</span>
          </div>
        </section>
      </div>
    </div>

    <div class="co-summary">
      <strong>地塊性差異速記：</strong>
      Bannockburn 最濃郁集中、Bendigo 最強勁結構、Gibbston 最優雅輕盈、Cromwell/Lowburn 最果香易飲、Wanaka 最高海拔最清新——同一品種、五種完全不同的表情。
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const data = {
  bannockburn: {
    label: 'Bannockburn',
    shortTag: '集中濃郁',
    icon: '🌞',
    color: '#c05621',
    tagline: '「Central Otago 沙漠之心」，最溫暖乾燥的子產區',
    terroir: [
      '極乾燥，年降雨僅約 350mm',
      '砂礫與黃土，排水極佳',
      '日照充足、生長季最長'
    ],
    style: [
      '果香集中、酒體飽滿',
      '深色果與香料層次明顯',
      '單寧結構強、陳年潛力突出'
    ],
    wineries: ['Felton Road', 'Mt Difficulty', 'Carrick', 'Akarua'],
    descriptors: ['黑櫻桃', '李子', '甘草', '黑香料', '可可粉']
  },
  bendigo: {
    label: 'Bendigo',
    shortTag: '結構強勁',
    icon: '🪨',
    color: '#742a2a',
    tagline: '岩盤陡坡與片岩土壤，孕育最具力量感的 Pinot',
    terroir: [
      '陡峭北向坡地、片岩與礫石',
      '日照最強、白天溫度最高',
      '夜間山風帶來大溫差'
    ],
    style: [
      '單寧緻密、力量感強',
      '酒精偏高但平衡',
      '深紅果、煙燻與礦物複合層次'
    ],
    wineries: ['Quartz Reef', 'Prophet\'s Rock', 'Misha\'s Vineyard'],
    descriptors: ['黑莓', '燧石', '焦糖', '紫羅蘭', '黑松露']
  },
  gibbston: {
    label: 'Gibbston',
    shortTag: '優雅冷涼',
    icon: '❄️',
    color: '#3182ce',
    tagline: '海拔最高、最涼爽，被稱為「藤之谷」',
    terroir: [
      '海拔約 320–420m，全區最高',
      '生長季短、霜害風險高',
      '土壤輕、片岩風化為主'
    ],
    style: [
      '酒體輕盈、酸度高',
      '紅果為主、單寧細緻',
      '香氣張揚帶花香與草本氣息'
    ],
    wineries: ['Gibbston Valley', 'Peregrine', 'Chard Farm'],
    descriptors: ['紅櫻桃', '覆盆子', '紫羅蘭', '紅茶', '香料葉']
  },
  cromwell: {
    label: 'Cromwell / Lowburn / Pisa',
    shortTag: '果香易飲',
    icon: '🍒',
    color: '#dd6b20',
    tagline: '產量最大、最易親近的核心子產區',
    terroir: [
      '湖盆地形，受 Lake Dunstan 調節',
      '砂礫與沖積土，灌溉條件好',
      '溫度與日照介於 Bannockburn 與 Gibbston 之間'
    ],
    style: [
      '果香飽滿、口感絲滑',
      '中等酒體、單寧柔順',
      '年輕即可飲，性價比高'
    ],
    wineries: ['Mt Difficulty (Lowburn)', 'Wooing Tree', 'Aurum'],
    descriptors: ['紅櫻桃', '草莓', '李子皮', '甘草', '玫瑰']
  },
  wanaka: {
    label: 'Wanaka',
    shortTag: '最北最清新',
    icon: '🏔️',
    color: '#2c7a7b',
    tagline: '湖光山色環繞，最高緯度與最高海拔的精品小區',
    terroir: [
      '靠近 Lake Wanaka，受湖泊調節',
      '海拔高、生長季最涼',
      '葡萄園多為小規模有機/生物動力'
    ],
    style: [
      '酸度活潑、酒體輕至中',
      '純淨紅果與細膩花香',
      '常呈現獨特的清涼草本與礦物感'
    ],
    wineries: ['Rippon', 'Maude', 'Aitken\'s Folly'],
    descriptors: ['野草莓', '紅醋栗', '玫瑰花瓣', '碎石', '薄荷']
  }
}

const keys = ['bannockburn', 'bendigo', 'gibbston', 'cromwell', 'wanaka']
const currentKey = ref('bannockburn')
const current = computed(() => data[currentKey.value])
</script>

<style scoped>
.co-slide {
  padding: 2rem;
  background: linear-gradient(135deg, #fff5f5 0%, #fffaf0 100%);
  border-radius: 16px;
  min-height: 100%;
}
.slide-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
.slide-header h2 { margin: 0; font-size: 1.6rem; color: #2d3748; }
.slide-icon { font-size: 2rem; }
.co-subtitle { color: #4a5568; margin: 0 0 1.25rem; }

.co-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.co-tab {
  padding: 0.75rem 0.85rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-align: left;
  transition: all 0.2s;
}
.co-tab:hover { border-color: #cbd5e0; transform: translateY(-1px); }
.co-tab.active {
  border-color: var(--accent);
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
.co-tab-icon { font-size: 1.5rem; }
.co-tab-text { display: flex; flex-direction: column; line-height: 1.3; }
.co-tab-label { font-weight: 700; font-size: 0.95rem; }
.co-tab-tag { font-size: 0.75rem; opacity: 0.85; }

.co-panel {
  background: #fff;
  border-radius: 14px;
  padding: 1.5rem;
  border-top: 5px solid var(--accent);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.co-panel-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px dashed #edf2f7;
}
.co-panel-head h3 { margin: 0; color: var(--accent); font-size: 1.4rem; }
.co-tagline { color: #718096; font-size: 0.95rem; }

.co-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.co-card {
  background: #faf5f0;
  border-radius: 10px;
  padding: 1rem;
  border-left: 3px solid var(--accent);
}
.co-card h4 { margin: 0 0 0.5rem; font-size: 1rem; color: #2d3748; }
.co-card ul { margin: 0; padding-left: 1.1rem; color: #4a5568; font-size: 0.92rem; line-height: 1.6; }

.co-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.co-tag {
  background: var(--accent);
  color: #fff;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.85rem;
}

.co-summary {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: rgba(192, 86, 33, 0.12);
  border-left: 4px solid #c05621;
  border-radius: 8px;
  color: #7b341e;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
