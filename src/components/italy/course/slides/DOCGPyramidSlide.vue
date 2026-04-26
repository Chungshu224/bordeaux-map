<template>
  <div class="docg-pyramid-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '義大利葡萄酒分級金字塔' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="content-wrapper">
      <div class="pyramid-visual">
        <div
          v-for="tier in tiers"
          :key="tier.key"
          class="tier"
          :class="['tier-' + tier.key, { active: activeKey === tier.key }]"
          :style="{
            width: tier.width + '%',
            backgroundColor: tier.color,
            borderColor: tier.borderColor
          }"
          @click="activeKey = tier.key"
        >
          <div class="tier-label">
            <span class="tier-abbr">{{ tier.abbr }}</span>
            <span class="tier-name">{{ tier.name }}</span>
            <span class="tier-count">{{ tier.count }}</span>
          </div>
        </div>
      </div>

      <div class="detail-card" :style="{ borderColor: activeTier.color }">
        <div class="detail-header">
          <h3>
            <span class="badge" :style="{ backgroundColor: activeTier.color }">{{ activeTier.abbr }}</span>
            {{ activeTier.name }}
          </h3>
          <span class="detail-meta">{{ activeTier.fullName }}</span>
        </div>

        <p class="detail-summary">{{ activeTier.summary }}</p>

        <div class="detail-grid">
          <div class="detail-block">
            <h4>📐 規範要點</h4>
            <ul>
              <li v-for="(rule, i) in activeTier.rules" :key="i">{{ rule }}</li>
            </ul>
          </div>
          <div class="detail-block">
            <h4>🍷 經典酒款代表</h4>
            <ul>
              <li v-for="(ex, i) in activeTier.examples" :key="i">{{ ex }}</li>
            </ul>
          </div>
          <div class="detail-block">
            <h4>💰 價格 / 定位</h4>
            <p class="price-range">{{ activeTier.priceRange }}</p>
            <p class="market-note">{{ activeTier.marketNote }}</p>
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

const defaultTiers = [
  {
    key: 'vdt',
    abbr: 'VdT',
    name: 'Vino da Tavola（餐酒）',
    fullName: 'Vino / Vino da Tavola',
    width: 100,
    color: '#9CAF88',
    borderColor: '#7A9070',
    count: '無數量限制',
    summary: '最基礎等級，無產區限制、無品種規範。可使用全義大利的葡萄。1980 年代「Super Tuscan」革命時期，許多現代頂級酒款（如 Sassicaia、Tignanello）曾以此等級銷售。',
    rules: [
      '無地理產區規範',
      '無葡萄品種限制',
      '無年份要求',
      '酒標僅標示「Vino」、白/紅/粉紅、酒精度'
    ],
    examples: [
      '一般日常餐酒',
      '早期 Super Tuscan（1970-1990s）',
      '部分創新混釀酒款'
    ],
    priceRange: '€3 – €15',
    marketNote: '入門市場主力；現代精品酒款已多升級至 IGT。'
  },
  {
    key: 'igt',
    abbr: 'IGT',
    name: 'IGT（典型地理標示）',
    fullName: 'Indicazione Geografica Tipica',
    width: 75,
    color: '#C7B299',
    borderColor: '#A38E78',
    count: '118 個 IGT',
    summary: '1992 年 Goria 法案建立的中間等級，相當於法國 IGP。允許更大的釀造彈性（國際品種、創新混釀），現代 Super Tuscan 多以此等級發行（如 Sassicaia 後期升 DOC）。',
    rules: [
      '須來自指定地理範圍（區域或大區）',
      '至少 85% 葡萄須來自該產區',
      '可使用國際品種（Cabernet、Merlot 等）',
      '允許酒標標示葡萄品種與年份'
    ],
    examples: [
      'Toscana IGT（Super Tuscan 主舞台）',
      'Veneto IGT、Sicilia IGT、Puglia IGT',
      'Tignanello（Antinori）',
      'Ornellaia、Masseto'
    ],
    priceRange: '€8 – €500+',
    marketNote: '現代義大利精品酒最大舞台；頂級 Super Tuscan 比許多 DOCG 更貴。'
  },
  {
    key: 'doc',
    abbr: 'DOC',
    name: 'DOC（管制原產地命名）',
    fullName: 'Denominazione di Origine Controllata',
    width: 50,
    color: '#D4A574',
    borderColor: '#A87A48',
    count: '332 個 DOC',
    summary: '1963 年建立，相當於法國 AOC。對產區、品種、產量、釀造法、最低酒精度有嚴格規定。是義大利中堅級別，許多經典酒款（Soave、Valpolicella、Chianti 部分）屬此等級。',
    rules: [
      '葡萄須 100% 來自指定 DOC 產區',
      '規定允許品種與比例',
      '產量上限（通常 70-100 hL/ha）',
      '需通過官方品評委員會審核',
      '部分 DOC 可標示 Riserva（額外陳年要求）'
    ],
    examples: [
      'Soave DOC（Veneto 白酒）',
      'Valpolicella DOC',
      'Bardolino DOC',
      'Marsala DOC（Sicilia 加烈酒）',
      'Frascati DOC（Lazio）'
    ],
    priceRange: '€10 – €60',
    marketNote: '日常品質保證；性價比優異；部分 DOC 已升級至 DOCG。'
  },
  {
    key: 'docg',
    abbr: 'DOCG',
    name: 'DOCG（保證管制原產地命名）',
    fullName: 'Denominazione di Origine Controllata e Garantita',
    width: 28,
    color: '#B8860B',
    borderColor: '#7B5C00',
    count: '76 個 DOCG（持續增加中）',
    summary: '義大利最高等級，1980 年首批建立。每瓶酒頸需貼政府認證封條（粉紅色紅酒、淺綠色白酒）。每批次需經兩次官方品評。包括 Barolo、Brunello di Montalcino、Amarone、Chianti Classico 等所有義大利最知名酒款。',
    rules: [
      '所有 DOC 規範 + 更嚴格產量限制',
      '必須通過化學分析 + 官方盲品審核',
      '每瓶須貼政府編號封條（fascetta）',
      '通常規定更長的法定陳年',
      'Riserva / Gran Selezione 為更高子等級'
    ],
    examples: [
      'Barolo DOCG / Barbaresco DOCG（Piemonte）',
      'Brunello di Montalcino DOCG（Toscana）',
      'Amarone della Valpolicella DOCG（Veneto）',
      'Chianti Classico DOCG（Toscana）',
      'Taurasi DOCG（Campania）',
      'Vino Nobile di Montepulciano DOCG'
    ],
    priceRange: '€20 – €1,000+（單一園 Barolo / Brunello Riserva）',
    marketNote: '義大利國家級招牌；收藏與投資首選；佔義大利總產量約 7%。'
  }
]

const tiers = computed(() => props.slide.tiers || defaultTiers)
const activeKey = ref(tiers.value[tiers.value.length - 1]?.key || 'docg')
const activeTier = computed(
  () => tiers.value.find((t) => t.key === activeKey.value) || tiers.value[0]
)
</script>

<style scoped>
.docg-pyramid-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
  overflow-y: auto;
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

.content-wrapper {
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
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(123, 31, 42, 0.15);
}

.tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(123, 31, 42, 0.25);
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
  flex-wrap: wrap;
  justify-content: center;
}

.tier-abbr {
  font-size: 1.1rem;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.15rem 0.6rem;
  border-radius: 6px;
}

.tier-name {
  font-size: 0.95rem;
}

.tier-count {
  font-size: 0.78rem;
  background: rgba(0, 0, 0, 0.18);
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(123, 31, 42, 0.12);
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
  gap: 0.6rem;
  color: #2d1a0f;
  font-size: 1.25rem;
}

.badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
}

.detail-meta {
  color: #7a6048;
  font-size: 0.85rem;
  font-style: italic;
}

.detail-summary {
  color: #4a3826;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0.8rem;
  background: #faf3e8;
  border-radius: 6px;
  border-left: 3px solid #B8860B;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.9rem;
  color: #7B1F2A;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
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
  font-weight: 700;
  color: #B8860B !important;
  margin-bottom: 0.4rem !important;
}

.market-note {
  font-size: 0.82rem !important;
  color: #7a6048 !important;
}

@media (max-width: 768px) {
  .docg-pyramid-slide {
    padding: 1rem;
  }
  .tier-name {
    font-size: 0.78rem;
  }
  .tier-count {
    font-size: 0.7rem;
  }
}
</style>
