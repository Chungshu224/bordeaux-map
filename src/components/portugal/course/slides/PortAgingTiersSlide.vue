<template>
  <div class="port-aging-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Port 陳年分級——Tawny / LBV / Vintage 完整對照' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || 'Port 分為兩大陳年路徑：「橡木桶氧化陳年」（Tawny / Colheita）與「瓶中還原陳年」（Ruby / LBV / Vintage）。風格與飲用方式截然不同。' }}
      </p>
    </div>

    <!-- 兩大路徑視覺對照 -->
    <div class="paths-compare">
      <div class="path-card wood">
        <div class="path-icon">🛢️</div>
        <h3>橡木桶氧化派（Wood-aged）</h3>
        <p>使用 550 升小型木桶（pipe），酒液與空氣緩慢接觸而氧化，色澤從紅寶石轉為琥珀。</p>
        <ul>
          <li>Tawny → Aged Tawny → Colheita</li>
          <li>裝瓶後即飲、無瓶陳潛力</li>
          <li>飲用溫度 12-16°C（微涼）</li>
          <li>開瓶後可保存 1-3 個月</li>
        </ul>
      </div>
      <div class="path-vs">VS</div>
      <div class="path-card bottle">
        <div class="path-icon">🍾</div>
        <h3>瓶中還原派（Bottle-aged）</h3>
        <p>木桶陳年較短後裝瓶，主要陳年在瓶中發生。色澤緩慢從深寶石轉為磚紅。</p>
        <ul>
          <li>Ruby → LBV → Vintage</li>
          <li>頂級可瓶陳 30-50+ 年</li>
          <li>飲用溫度 16-18°C（醒酒）</li>
          <li>頂級需直立保存後過濾沉澱</li>
        </ul>
      </div>
    </div>

    <!-- Tawny 陳年金字塔 -->
    <div class="tier-section">
      <h3 class="section-title">🌟 Tawny 陳年分級（平均年齡指標）</h3>
      <p class="section-note">「年齡」是 IVDP 認證的「平均混合年齡」，非最低年齡</p>
      <div class="tawny-tiers">
        <div
          v-for="t in tawnyTiers"
          :key="t.key"
          class="tawny-tier"
          :class="{ active: activeTawny === t.key }"
          :style="{ backgroundColor: t.color, borderColor: t.borderColor }"
          @click="activeTawny = t.key"
        >
          <span class="tier-age">{{ t.age }}</span>
          <span class="tier-label">{{ t.label }}</span>
          <span class="tier-price">{{ t.priceRange }}</span>
        </div>
      </div>
      <div class="tawny-detail" v-if="activeTawnyData">
        <div class="td-grid">
          <div>
            <h4>👃 香氣演化</h4>
            <div class="aroma-chips">
              <span v-for="a in activeTawnyData.aromas" :key="a" class="chip">{{ a }}</span>
            </div>
          </div>
          <div>
            <h4>🍽️ 餐酒搭配</h4>
            <p>{{ activeTawnyData.pairing }}</p>
          </div>
          <div>
            <h4>🌟 經典酒款</h4>
            <p>{{ activeTawnyData.example }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vintage / LBV / Ruby 陳年時間軸 -->
    <div class="tier-section">
      <h3 class="section-title">🍷 Ruby 系列陳年時間軸</h3>
      <div class="timeline-container">
        <div
          v-for="ruby in rubyTiers"
          :key="ruby.key"
          class="timeline-row"
        >
          <div class="row-label" :style="{ borderLeftColor: ruby.color }">
            <strong>{{ ruby.name }}</strong>
            <span>{{ ruby.tagline }}</span>
          </div>
          <div class="row-bar">
            <div
              class="bar-segment wood"
              :style="{ flex: ruby.woodMonths }"
            >🛢️ {{ ruby.woodMonths }} 月木桶</div>
            <div
              v-if="ruby.bottleMonths > 0"
              class="bar-segment bottle"
              :style="{ flex: ruby.bottleMonths / 12 * 6 }"
            >🍾 瓶陳 {{ Math.round(ruby.bottleMonths / 12) }}+ 年</div>
          </div>
          <div class="row-meta">
            <span class="meta-pill" :style="{ backgroundColor: ruby.color }">{{ ruby.priceRange }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 重點對照表 -->
    <div class="comparison-table">
      <h3 class="section-title">📊 三大代表類型快速對照</h3>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th class="th-tawny">Tawny 20 年</th>
            <th class="th-lbv">LBV</th>
            <th class="th-vintage">Vintage</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>陳年方式</strong></td><td>木桶 20+ 年</td><td>木桶 4-6 年</td><td>木桶 2 年 + 瓶陳數十年</td></tr>
          <tr><td><strong>單一年份</strong></td><td>否（多年份混合）</td><td>是</td><td>是（declared 年份）</td></tr>
          <tr><td><strong>色澤</strong></td><td>琥珀色</td><td>深紫紅</td><td>深寶石紅 → 磚紅</td></tr>
          <tr><td><strong>主要香氣</strong></td><td>焦糖、堅果、橙皮</td><td>黑莓、可可、香料</td><td>黑莓乾、皮革、菸草</td></tr>
          <tr><td><strong>飲用溫度</strong></td><td>12-14°C</td><td>16-18°C</td><td>16-18°C（醒酒 2-4 小時）</td></tr>
          <tr><td><strong>需過濾沉澱</strong></td><td>否</td><td>未過濾版本是</td><td>是（頂級必須）</td></tr>
          <tr><td><strong>價格</strong></td><td>€40-70</td><td>€20-40</td><td>€60-1,000+</td></tr>
          <tr><td><strong>開瓶後保存</strong></td><td>2-3 個月</td><td>2-4 週</td><td>2-3 天</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const tawnyTiers = [
  {
    key: '10', age: '10 年', label: '10 Years Old',
    color: '#D4A574', borderColor: '#A87A48',
    priceRange: '€20-30',
    aromas: ['焦糖', '杏仁', '橙皮', '香草', '無花果'],
    pairing: '焦糖布丁、堅果塔、輕度乳酪',
    example: 'Taylor\'s 10-Year-Old Tawny；Niepoort 10 Anos'
  },
  {
    key: '20', age: '20 年', label: '20 Years Old（黃金平衡）',
    color: '#B8860B', borderColor: '#7B5C00',
    priceRange: '€40-70',
    aromas: ['焦糖', '榛果', '橙皮', '無花果乾', '咖啡', '楓糖'],
    pairing: '陳年硬乳酪、黑巧克力、堅果甜點',
    example: 'Taylor\'s 20-Year-Old Tawny（標竿）；Ferreira Duque de Bragança 20 Anos'
  },
  {
    key: '30', age: '30 年', label: '30 Years Old',
    color: '#A0522D', borderColor: '#6B3410',
    priceRange: '€100-180',
    aromas: ['深焦糖', '咖啡', '可可', '無花果乾', '香料', '蜂蜜', '皮革'],
    pairing: '陳年藍紋乳酪、黑巧克力、雪茄',
    example: 'Graham\'s 30-Year-Old；Niepoort 30 Anos'
  },
  {
    key: '40', age: '40 年', label: '40 Years Old',
    color: '#5C2334', borderColor: '#3A0E1F',
    priceRange: '€180-400+',
    aromas: ['楓糖', '咖啡', '可可', '橙皮', '甘草', '香料', '皮革', '無花果乾'],
    pairing: '飯後獨飲、雪茄、頂級黑巧克力',
    example: 'Graham\'s 40-Year-Old；Taylor\'s 40 Years Old'
  }
]

const rubyTiers = [
  {
    key: 'ruby', name: 'Ruby', tagline: '入門款，多年份混合', color: '#C0392B',
    woodMonths: 30, bottleMonths: 0, priceRange: '€8-15'
  },
  {
    key: 'reserve', name: 'Ruby Reserve', tagline: '較優質的 Ruby', color: '#A8324A',
    woodMonths: 48, bottleMonths: 0, priceRange: '€15-25'
  },
  {
    key: 'lbv-filtered', name: 'LBV（過濾）', tagline: '單一年份，即飲', color: '#8B0000',
    woodMonths: 60, bottleMonths: 0, priceRange: '€20-30'
  },
  {
    key: 'lbv-unfiltered', name: 'LBV（未過濾）', tagline: '單一年份，可瓶陳', color: '#7B1F2A',
    woodMonths: 60, bottleMonths: 120, priceRange: '€25-40'
  },
  {
    key: 'single-quinta', name: 'Single Quinta Vintage', tagline: '單一葡萄園、單一年份', color: '#5C2334',
    woodMonths: 24, bottleMonths: 180, priceRange: '€40-150'
  },
  {
    key: 'vintage', name: 'Vintage Port', tagline: 'Declared 年份，頂級', color: '#4A0E1F',
    woodMonths: 24, bottleMonths: 360, priceRange: '€60-1,000+'
  }
]

const activeTawny = ref('20')
const activeTawnyData = computed(() => tawnyTiers.find((t) => t.key === activeTawny.value))
</script>

<style scoped>
.port-aging-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #f9f3ec 0%, #f1dcc4 100%);
  color: #3a2415;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #7B1F2A;
  font-weight: 700;
}

.slide-desc {
  color: #6b4226;
  font-size: 0.95rem;
  margin: 0 0 1.2rem 0;
}

.paths-compare {
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  gap: 0.8rem;
  align-items: stretch;
  margin-bottom: 1.5rem;
}

.path-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  border-top: 4px solid;
  box-shadow: 0 3px 10px rgba(123, 31, 42, 0.1);
}

.path-card.wood {
  border-top-color: #B8860B;
}

.path-card.bottle {
  border-top-color: #7B1F2A;
}

.path-icon {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.path-card h3 {
  margin: 0 0 0.4rem 0;
  font-size: 1.05rem;
  color: #3a2415;
}

.path-card p {
  margin: 0 0 0.5rem 0;
  font-size: 0.85rem;
  color: #4a3826;
  line-height: 1.5;
}

.path-card ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.82rem;
  color: #4a3826;
  line-height: 1.6;
}

.path-vs {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #B8860B;
  font-size: 1.1rem;
}

.tier-section {
  background: #fff;
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 10px rgba(123, 31, 42, 0.1);
}

.section-title {
  margin: 0 0 0.4rem 0;
  font-size: 1.1rem;
  color: #7B1F2A;
}

.section-note {
  margin: 0 0 1rem 0;
  font-size: 0.82rem;
  color: #6b4226;
  font-style: italic;
}

.tawny-tiers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.tawny-tier {
  border: 3px solid;
  border-radius: 10px;
  padding: 0.8rem 0.6rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: #fff;
  transition: all 0.25s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.tawny-tier:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.tawny-tier.active {
  transform: scale(1.04);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.4);
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.tier-age {
  font-size: 1.5rem;
  font-weight: 800;
}

.tier-label {
  font-size: 0.78rem;
  font-weight: 600;
}

.tier-price {
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.18);
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  margin-top: 0.2rem;
}

.tawny-detail {
  background: #fdf6ec;
  border-radius: 8px;
  padding: 0.8rem 1rem;
  border-left: 3px solid #B8860B;
}

.td-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.td-grid h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.88rem;
  color: #7B1F2A;
}

.td-grid p {
  margin: 0;
  font-size: 0.83rem;
  color: #4a3826;
  line-height: 1.5;
}

.aroma-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.chip {
  background: #fff;
  border: 1px solid #B8860B;
  padding: 0.2rem 0.6rem;
  border-radius: 14px;
  font-size: 0.76rem;
  color: #4a3826;
}

.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.timeline-row {
  display: grid;
  grid-template-columns: 180px 1fr 100px;
  gap: 0.6rem;
  align-items: center;
}

.row-label {
  border-left: 4px solid;
  padding: 0.3rem 0.6rem;
  background: #fdf6ec;
  border-radius: 4px;
}

.row-label strong {
  display: block;
  font-size: 0.9rem;
  color: #3a2415;
}

.row-label span {
  display: block;
  font-size: 0.74rem;
  color: #6b4226;
}

.row-bar {
  display: flex;
  height: 36px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3e9d8;
}

.bar-segment {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.74rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 60px;
}

.bar-segment.wood {
  background: linear-gradient(135deg, #8B4513 0%, #6B3410 100%);
}

.bar-segment.bottle {
  background: linear-gradient(135deg, #5C2334 0%, #3A0E1F 100%);
}

.row-meta {
  text-align: right;
}

.meta-pill {
  color: #fff;
  padding: 0.25rem 0.6rem;
  border-radius: 10px;
  font-size: 0.74rem;
  font-weight: 600;
}

.comparison-table {
  background: #fff;
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 3px 10px rgba(123, 31, 42, 0.1);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

th, td {
  padding: 0.5rem 0.6rem;
  text-align: left;
  border-bottom: 1px solid #f1dcc4;
}

th {
  background: #fdf6ec;
  color: #7B1F2A;
  font-weight: 600;
  font-size: 0.82rem;
}

th.th-tawny { background: #B8860B; color: #fff; }
th.th-lbv { background: #8B0000; color: #fff; }
th.th-vintage { background: #4A0E1F; color: #fff; }

td {
  color: #4a3826;
  vertical-align: top;
}

td strong {
  color: #7B1F2A;
}

@media (max-width: 900px) {
  .paths-compare {
    grid-template-columns: 1fr;
  }
  .path-vs {
    padding: 0.3rem;
  }
  .tawny-tiers {
    grid-template-columns: repeat(2, 1fr);
  }
  .td-grid {
    grid-template-columns: 1fr;
  }
  .timeline-row {
    grid-template-columns: 1fr;
  }
  .row-meta {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .port-aging-slide {
    padding: 1rem;
  }
}
</style>
