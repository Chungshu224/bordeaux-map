<template>
  <div class="climat-hierarchy-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '布根地分級金字塔——Régionale 至 Grand Cru' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="slide-body">
      <div class="hierarchy-container">
        <!-- 金字塔視覺 -->
        <div class="pyramid-visual">
          <div
            v-for="(level, idx) in levels"
            :key="level.key"
            class="tier"
            :class="['tier-' + level.key, { active: activeKey === level.key }]"
            :style="{
              width: level.width + '%',
              backgroundColor: level.color,
              borderColor: level.borderColor
            }"
            @click="activeKey = level.key"
          >
            <div class="tier-label">
              <span class="tier-name">{{ level.name }}</span>
              <span class="tier-pct">{{ level.percentage }}</span>
            </div>
          </div>
        </div>

        <!-- 細節卡片 -->
        <div class="detail-card" :style="{ borderColor: activeLevel.color }">
          <div class="detail-header">
            <h3>
              <span class="badge" :style="{ backgroundColor: activeLevel.color }"></span>
              {{ activeLevel.name }}
            </h3>
            <span class="detail-pct">{{ activeLevel.percentage }} · 約 {{ activeLevel.area }}</span>
          </div>
          <p class="detail-summary">{{ activeLevel.summary }}</p>

          <div class="detail-grid">
            <div class="detail-block">
              <h4>📐 規範要點</h4>
              <ul>
                <li v-for="(rule, i) in activeLevel.rules" :key="i">{{ rule }}</li>
              </ul>
            </div>
            <div class="detail-block">
              <h4>🍇 典型酒款</h4>
              <ul>
                <li v-for="(ex, i) in activeLevel.examples" :key="i">{{ ex }}</li>
              </ul>
            </div>
            <div class="detail-block">
              <h4>💰 價格區間</h4>
              <p class="price-range">{{ activeLevel.priceRange }}</p>
              <h4 style="margin-top: 0.6rem;">⏳ 陳年潛力</h4>
              <p>{{ activeLevel.ageingPotential }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const defaultLevels = [
  {
    key: 'regionale',
    name: 'Bourgogne Régionale',
    percentage: '53%',
    area: '14,000 ha',
    width: 100,
    color: '#9CAF88',
    borderColor: '#7A9070',
    summary: '入門等級，可使用整個布根地內合規葡萄園的葡萄調配，是大量級的日常飲用酒。',
    rules: [
      '產量上限：白 75 hL/ha、紅 69 hL/ha',
      '可跨村莊調配（Bourgogne Blanc、Rouge）',
      '亦含子區域 Régionale：Côte d\'Or、Hautes-Côtes 等',
      '最低酒精：白 10.5%、紅 10%'
    ],
    examples: [
      'Bourgogne Blanc / Rouge',
      'Bourgogne Aligoté',
      'Bourgogne Passe-Tout-Grains',
      'Crémant de Bourgogne'
    ],
    priceRange: '€12 – €30',
    ageingPotential: '2–5 年'
  },
  {
    key: 'village',
    name: 'Village（村莊級）',
    percentage: '36%',
    area: '9,500 ha',
    width: 75,
    color: '#C7B299',
    borderColor: '#A38E78',
    summary: '冠以單一村莊名（如 Meursault、Gevrey-Chambertin），葡萄需 100% 來自該村莊指定範圍，風土特色開始凸顯。',
    rules: [
      '產量上限：白 57 hL/ha、紅 50 hL/ha',
      '葡萄須 100% 來自村莊邊界內',
      '可標示單一葡萄園（lieu-dit）名稱',
      '共 44 個 Village AOC',
      '該層級白酒 68%／紅酒 32%（白酒為主）'
    ],
    examples: [
      'Meursault',
      'Gevrey-Chambertin',
      'Pommard',
      'Chassagne-Montrachet'
    ],
    priceRange: '€30 – €100',
    ageingPotential: '5–15 年'
  },
  {
    key: 'premier-cru',
    name: 'Premier Cru（一級葡萄園）',
    percentage: '10%',
    area: '2,800 ha',
    width: 50,
    color: '#D4A574',
    borderColor: '#A87A48',
    summary: '村莊內表現傑出的特定葡萄園（climat），酒標格式：村莊名 + 1er Cru + 葡萄園名（如 Meursault 1er Cru Les Perrières）。',
    rules: [
      '產量上限：白 56 hL/ha、紅 48 hL/ha',
      '須來自指定 climat（單一葡萄園）',
      '全布根地共 684 個 Premier Cru climats（約占總產量 11%）',
      '該層級白酒 51%／紅酒 49%（白紅相近）',
      '酒標標示：village + "1er Cru" + climat 名'
    ],
    examples: [
      'Meursault 1er Cru Les Perrières',
      'Chassagne-Montrachet 1er Cru Les Caillerets',
      'Gevrey-Chambertin 1er Cru Clos Saint-Jacques',
      'Volnay 1er Cru Les Caillerets'
    ],
    priceRange: '€80 – €400',
    ageingPotential: '10–25 年'
  },
  {
    key: 'grand-cru',
    name: 'Grand Cru（特級葡萄園）',
    percentage: '1%',
    area: '370 ha',
    width: 25,
    color: '#B8860B',
    borderColor: '#7B5C00',
    summary: '布根地最高等級，僅 33 個 Grand Cru，每個 Grand Cru 為獨立 AOC，酒標僅標示 Grand Cru 名稱（如 Chambertin、Montrachet）。',
    rules: [
      '產量上限：白 48 hL/ha、紅 35 hL/ha（最嚴）',
      '每個 Grand Cru 為獨立 AOC',
      '全布根地僅 33 個 Grand Cru，約占總產量 ±1.5%',
      '該層級白酒 42%／紅酒 58%（以紅酒地塊為主）',
      '酒標僅標示 climat 名稱（不含村莊）'
    ],
    examples: [
      'Chambertin / Chambertin-Clos de Bèze',
      'Montrachet / Chevalier-Montrachet',
      'Romanée-Conti / La Tâche',
      'Corton / Corton-Charlemagne'
    ],
    priceRange: '€300 – €30,000+',
    ageingPotential: '15–50+ 年'
  }
]

const levels = computed(() => props.slide.levels || defaultLevels)
const activeKey = ref(levels.value[0]?.key || 'regionale')
const activeLevel = computed(
  () => levels.value.find((l) => l.key === activeKey.value) || levels.value[0]
)
</script>

<style scoped>
.climat-hierarchy-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fefaf3 0%, #f5ede0 100%);
  color: #2d1a0f;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #5a3a1a;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.slide-body {
  flex: 1;
  overflow-y: auto;
}

.hierarchy-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pyramid-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 1rem 0;
}

.tier {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(90, 58, 26, 0.15);
}

.tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(90, 58, 26, 0.25);
}

.tier.active {
  transform: scale(1.04);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.4);
  outline: 3px solid #B8860B;
  outline-offset: 2px;
}

.tier-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.tier-name {
  font-size: 1rem;
}

.tier-pct {
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.25);
  padding: 0.15rem 0.6rem;
  border-radius: 12px;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(90, 58, 26, 0.12);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.detail-header h3 {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d1a0f;
  font-size: 1.25rem;
}

.badge {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.detail-pct {
  color: #7a6048;
  font-size: 0.9rem;
  font-weight: 600;
}

.detail-summary {
  color: #4a3826;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.9rem;
  color: #5a3a1a;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.88rem;
  line-height: 1.5;
}

.detail-block li {
  margin-bottom: 0.3rem;
}

.detail-block p {
  margin: 0;
  color: #4a3826;
  font-size: 0.9rem;
}

.price-range {
  font-weight: 600;
  color: #B8860B !important;
}

@media (max-width: 768px) {
  .climat-hierarchy-slide {
    padding: 1rem;
  }
  .tier-name {
    font-size: 0.85rem;
  }
  .tier-pct {
    font-size: 0.75rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
