<template>
  <div class="do-pyramid-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '西班牙葡萄酒分級金字塔' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="content-wrapper">
      <div class="pyramid-visual">
        <div
          v-for="tier in tiers"
          :key="tier.key"
          class="tier"
          :class="{ active: activeKey === tier.key }"
          :style="{ width: tier.width + '%', backgroundColor: tier.color, borderColor: tier.borderColor }"
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
    key: 'vdm',
    abbr: 'VdM',
    name: 'Vino de Mesa（餐酒）',
    fullName: 'Vino de Mesa / Vino',
    width: 100,
    color: '#9CAF88',
    borderColor: '#7A9070',
    count: '無數量限制',
    summary: '最基礎等級，無產區或品種規範。可使用全西班牙葡萄調配。對應歐盟新法 2009 後簡稱「Vino」。',
    rules: ['無地理產區規範', '無葡萄品種限制', '無年份規定', '酒標僅標示「Vino」、酒色、酒精度'],
    examples: ['一般日常餐酒', '部分創新混釀（不願受 DO 規範的酒款）'],
    priceRange: '€2 – €8',
    marketNote: '入門市場主力；超市自有品牌常用此等級。'
  },
  {
    key: 'igp',
    abbr: 'IGP / VT',
    name: 'IGP / Vino de la Tierra（地區餐酒）',
    fullName: 'Indicación Geográfica Protegida / Vino de la Tierra',
    width: 80,
    color: '#C7B299',
    borderColor: '#A38E78',
    count: '46 個 IGP',
    summary: '相當於法國 IGP、義大利 IGT。允許大區地理標示與較有彈性的釀造規範。Vino de la Tierra de Castilla 是西班牙產量最大的 IGP（覆蓋整個 Castilla-La Mancha）。',
    rules: ['須來自指定地理區域', '至少 85% 葡萄須來自該區域', '可標示葡萄品種與年份', '允許國際品種混釀'],
    examples: [
      'Vino de la Tierra de Castilla',
      'IGP Mallorca、IGP Cádiz',
      '部分高品質 Bodega 跨 DO 邊界的酒款'
    ],
    priceRange: '€5 – €25',
    marketNote: '介於日常與精品之間；釀造彈性大。'
  },
  {
    key: 'do',
    abbr: 'DO',
    name: 'DO（原產地命名）',
    fullName: 'Denominación de Origen',
    width: 60,
    color: '#D4A574',
    borderColor: '#A87A48',
    count: '70 個 DO',
    summary: '1932 年建立，相當於法國 AOC。對產區、品種、產量、釀造法、最低酒精度有嚴格規定。涵蓋西班牙最知名產區：Ribera del Duero、Rías Baixas、Jerez、Cava 等。',
    rules: [
      '葡萄須 100% 來自指定 DO 產區',
      '規定允許品種與比例',
      '產量上限（依 DO 而異）',
      '需通過 Consejo Regulador 監管',
      '陳年分級：Joven / Crianza / Reserva / Gran Reserva'
    ],
    examples: [
      'Ribera del Duero DO（Tempranillo 紅酒）',
      'Rías Baixas DO（Albariño 白酒）',
      'Jerez-Xérès-Sherry DO（雪莉酒）',
      'Cava DO（瓶內二次發酵氣泡酒）',
      'Rueda DO（Verdejo 白酒）'
    ],
    priceRange: '€8 – €80',
    marketNote: '西班牙葡萄酒主力，性價比優異；佔西班牙總產量約 40%。'
  },
  {
    key: 'doca',
    abbr: 'DOCa / DOQ',
    name: 'DOCa（保證原產地命名）',
    fullName: 'Denominación de Origen Calificada / Denominació d\'Origen Qualificada',
    width: 38,
    color: '#B8860B',
    borderColor: '#7B5C00',
    count: '僅 2 個：Rioja + Priorat',
    summary: '西班牙最高傳統等級，1991 年首批授予 Rioja，2009 年加入 Priorat（加泰隆尼亞語為 DOQ）。比 DO 更嚴格——須建立 DO 至少 10 年、有獨立品評委員會、所有酒款須瓶裝於產區內。',
    rules: [
      '須先為 DO 等級至少 10 年',
      '更嚴格的產量限制',
      '所有酒須在 DOCa 產區內裝瓶',
      '須有獨立品評委員會',
      '更嚴的化學分析與盲品審核'
    ],
    examples: [
      'Rioja DOCa（1991 年首批）',
      'Priorat DOQ（2009 年加入）',
      'Rioja Gran Reserva（5 年陳年）',
      'Priorat Vi de Vila（村莊級）'
    ],
    priceRange: '€15 – €1,500+',
    marketNote: '西班牙頂級代表；Priorat 因低產量價格快速攀升。'
  },
  {
    key: 'vp',
    abbr: 'VP / VPC',
    name: 'Vino de Pago（單一葡萄園）',
    fullName: 'Vino de Pago（DOP 等級）',
    width: 22,
    color: '#7B1F2A',
    borderColor: '#4A0E1F',
    count: '23 個 Pago（持續增加中）',
    summary: '2003 年建立的最新最高等級，授予具有獨特風土的單一酒莊葡萄園。規範比 DOCa 更嚴——所有葡萄須來自同一葡萄園、同一酒莊釀造、同一酒莊裝瓶。許多 Pago 位於 La Mancha 而非傳統名區。',
    rules: [
      '葡萄 100% 來自單一葡萄園（pago）',
      '同一酒莊種植、釀造、裝瓶',
      '須具備已被證實的獨特風土',
      '產量上限極嚴',
      '可獨立於上層 DO 之外（如 Pago de Otazu 在 Navarra DO 內）'
    ],
    examples: [
      'Dominio de Valdepusa（Marqués de Griñón，第一個 Pago）',
      'Pago de Arínzano（Navarra）',
      'Finca Élez（La Mancha）',
      'Pago Aylés（Aragón）',
      'Pago de Otazu（Navarra）'
    ],
    priceRange: '€25 – €300+',
    marketNote: '精品收藏市場；西班牙的「Grand Cru」概念。'
  }
]

const tiers = computed(() => props.slide.tiers || defaultTiers)
const activeKey = ref('doca')
const activeTier = computed(() => tiers.value.find((t) => t.key === activeKey.value) || tiers.value[0])
</script>

<style scoped>
.do-pyramid-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fdf6ec 0%, #f5e3c8 100%);
  color: #2d1a0f;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #C0392B;
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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(192, 57, 43, 0.15);
}

.tier:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(192, 57, 43, 0.25);
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
  gap: 0.8rem;
  color: #fff;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  justify-content: center;
}

.tier-abbr {
  font-size: 1rem;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
}

.tier-name {
  font-size: 0.92rem;
}

.tier-count {
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.18);
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.12);
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
  background: #fdf6ec;
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
  color: #C0392B;
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
  .do-pyramid-slide {
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
