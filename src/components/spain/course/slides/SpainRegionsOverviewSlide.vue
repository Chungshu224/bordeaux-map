<template>
  <div class="spain-regions-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '西班牙重要 DO 產區總覽' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="zone-filter">
      <button
        v-for="zone in zones"
        :key="zone.key"
        class="zone-btn"
        :class="{ active: activeZone === zone.key }"
        :style="{ borderColor: activeZone === zone.key ? zone.color : 'transparent', color: activeZone === zone.key ? zone.color : '#7a6048' }"
        @click="activeZone = zone.key"
      >
        {{ zone.label }}
      </button>
    </div>

    <div class="regions-grid">
      <div
        v-for="region in filteredRegions"
        :key="region.key"
        class="region-card"
        :class="{ active: activeKey === region.key }"
        :style="{ borderTopColor: zoneColor(region.zone), '--zone-color': zoneColor(region.zone) }"
        @click="activeKey = region.key"
      >
        <div class="region-flag">{{ region.emoji }}</div>
        <h3>{{ region.name }}</h3>
        <span class="region-zh">{{ region.zhName }}</span>
        <div class="region-tags">
          <span class="tier-tag" :class="region.tier">{{ tierLabel(region.tier) }}</span>
        </div>
      </div>
    </div>

    <div class="region-detail" v-if="activeRegion" :style="{ borderColor: zoneColor(activeRegion.zone) }">
      <div class="detail-header">
        <h3>{{ activeRegion.emoji }} {{ activeRegion.name }} <span class="zh">{{ activeRegion.zhName }}</span></h3>
        <div class="detail-badges">
          <span class="zone-badge" :style="{ backgroundColor: zoneColor(activeRegion.zone) }">
            {{ zoneLabel(activeRegion.zone) }}
          </span>
          <span class="tier-badge" :class="activeRegion.tier">{{ tierLabel(activeRegion.tier) }}</span>
        </div>
      </div>

      <p class="detail-tagline">{{ activeRegion.tagline }}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>🍇 招牌品種</h4>
          <p>{{ activeRegion.signature }}</p>
        </div>
        <div class="detail-block">
          <h4>🪨 風土特色</h4>
          <p>{{ activeRegion.terroir }}</p>
        </div>
        <div class="detail-block">
          <h4>🍷 風格特徵</h4>
          <p>{{ activeRegion.style }}</p>
        </div>
        <div class="detail-block">
          <h4>🌟 代表酒莊</h4>
          <ul>
            <li v-for="(p, i) in activeRegion.producers" :key="i">{{ p }}</li>
          </ul>
        </div>
        <div class="detail-block full-width">
          <h4>💡 重點知識</h4>
          <p>{{ activeRegion.keyFact }}</p>
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

const zones = [
  { key: 'all', label: '全部', color: '#C0392B' },
  { key: 'north', label: '🏔️ 北部', color: '#3070A0' },
  { key: 'center', label: '🌾 中部', color: '#B8860B' },
  { key: 'south', label: '☀️ 南部', color: '#E8A040' },
  { key: 'islands', label: '🏝️ 島嶼', color: '#5BA89F' }
]

const zoneColor = (zone) => zones.find((z) => z.key === zone)?.color || '#999'
const zoneLabel = (zone) => zones.find((z) => z.key === zone)?.label || zone

const tierLabel = (tier) => ({
  doca: 'DOCa/DOQ',
  do: 'DO',
  pago: 'Vino de Pago'
}[tier] || 'DO')

const defaultRegions = [
  // North
  { key: 'rioja', name: 'Rioja', zhName: '里奧哈', zone: 'north', tier: 'doca', emoji: '🍷',
    tagline: '西班牙紅酒之心——首批 DOCa（1991）',
    signature: 'Tempranillo（主）+ Garnacha + Mazuelo + Graciano',
    terroir: '三個子分區：Rioja Alta（黏土石灰）、Rioja Alavesa（鈣質）、Rioja Oriental（沖積平原）。Ebro 河谷地，Cantabria 山脈擋大西洋濕氣',
    style: '經典派：美國橡木桶長期陳年（Tondonia 10+ 年），柔和優雅；現代派：法國橡木桶較短陳年（Roda、Artadi），果香更明亮',
    producers: ['López de Heredia（Tondonia）', 'Marqués de Murrieta（Castillo Ygay）', 'La Rioja Alta', 'CVNE / Cune', 'Roda', 'Artadi', 'Remírez de Ganuza'],
    keyFact: 'Rioja 是西班牙首個獲得 DOCa 等級的產區（1991），所有酒款須在產區內裝瓶。2017 年起新增「Viñedo Singular」單一葡萄園分級，向 Burgundy/Italy 風土導向看齊。'
  },
  { key: 'ribera', name: 'Ribera del Duero', zhName: '杜羅河岸', zone: 'north', tier: 'do', emoji: '🌅',
    tagline: 'Tinto Fino 高海拔產區——Vega Sicilia 之地',
    signature: 'Tempranillo（當地稱 Tinto Fino / Tinta del País，須佔 75%+）',
    terroir: '高海拔（700-900m）大陸氣候，極大日夜溫差。土壤多元：石灰岩、白堊質、礫石。1982 年成立 DO',
    style: '比 Rioja 更厚實、單寧更紮實、深色集中。法國橡木桶為主流，現代派風格濃郁。',
    producers: ['Vega Sicilia（Único）', 'Pingus', 'Pesquera', 'Aalto', 'Dominio de Pingus', 'Bodegas Mauro', 'Convento San Francisco'],
    keyFact: 'Vega Sicilia Único 自 1864 年釀造至今，是西班牙最具收藏價值的酒款。它每瓶最少陳年 10 年（部分批次達 15 年），是世界少數陳年要求超過 Bordeaux 一級酒莊的酒款。'
  },
  { key: 'priorat', name: 'Priorat', zhName: '普里奧拉', zone: 'north', tier: 'doca', emoji: '🪨',
    tagline: '加泰隆尼亞驕傲——llicorella 板岩與老藤 Garnacha',
    signature: 'Garnacha + Cariñena（Mazuelo），常添加 Cabernet Sauvignon、Syrah',
    terroir: '陡峭山坡（最陡達 60%），llicorella 黑灰板岩 + 雲母，極乾燥地中海氣候，老藤產量極低（10-15 hL/ha）',
    style: '深色濃郁、酒精偏高（14.5-16%）、礦物張力強、單寧厚實。是西班牙最昂貴的紅酒之一。',
    producers: ['Clos Mogador', 'Alvaro Palacios（L\'Ermita、Finca Dofí）', 'Vall Llach', 'Clos i Terrasses（Clos Erasmus）', 'Mas Doix'],
    keyFact: 'Priorat 於 1980 年代由 René Barbier、Alvaro Palacios、Daphne Glorian 等「五騎士」復興，2009 年成為西班牙第二個 DOCa（加泰隆尼亞語為 DOQ）。新分級「Vi de Vila / Vi de Paratge / Vi de Finca / Gran Vinya Classificada / Vinya Classificada」直接對標 Burgundy。'
  },
  { key: 'rias-baixas', name: 'Rías Baixas', zhName: '下海灣', zone: 'north', tier: 'do', emoji: '🌊',
    tagline: '大西洋白酒——Albariño 的故鄉',
    signature: 'Albariño（須佔 100% 才能標 Rías Baixas Albariño）',
    terroir: 'Galicia 西北角，大西洋海岸，年雨量 1500-2000mm。花崗岩、片岩。葡萄藤多用「parral」高架棚架法防潮',
    style: '極高酸度、桃杏果香、海風鹹味與礦物張力。新鮮易飲，近年部分頂級酒莊嘗試橡木桶陳年版本。',
    producers: ['Pazo de Señoráns', 'Do Ferreiro', 'Forjas del Salnés', 'Bodegas Zárate', 'Lagar de Cervera', 'Martín Códax'],
    keyFact: 'Rías Baixas DO 1988 年成立，分 5 個子區：Val do Salnés、O Rosal、Condado do Tea、Soutomaior、Ribeira do Ulla。Val do Salnés 為最古老核心區，葡萄園可俯瞰大西洋。'
  },
  { key: 'rueda', name: 'Rueda', zhName: '魯艾達', zone: 'north', tier: 'do', emoji: '🌿',
    tagline: 'Verdejo 王國——西班牙最受歡迎白酒 DO',
    signature: 'Verdejo（須佔 50%+ 才能標 Rueda；85%+ 才能標 Rueda Verdejo）',
    terroir: 'Castilla y León 高海拔（700-800m）大陸氣候，砂質、礫石土壤，極大日夜溫差',
    style: '中等酒體、柑橘草本香、苦杏仁尾韻、酸度活潑。多數不過桶，少數頂級款橡木桶陳年。',
    producers: ['José Pariente', 'Bodegas Naia', 'Marqués de Riscal', 'Belondrade y Lurton', 'Bodegas Shaya'],
    keyFact: 'Rueda 1980 年成為西班牙首個白酒專屬 DO，2008 年起 Rueda Verdejo 須含至少 85% Verdejo。Marqués de Riscal 在 1972 年率先在此種植 Sauvignon Blanc 並引入夜採技術。'
  },
  // Center / South
  { key: 'la-mancha', name: 'La Mancha', zhName: '拉曼恰', zone: 'center', tier: 'do', emoji: '🌾',
    tagline: '世界最大 DO——堂吉訶德之地',
    signature: 'Airén（白）、Cencibel（=Tempranillo）、Garnacha、Macabeo',
    terroir: '伊比利半島中部高原（500-700m），極端大陸氣候，極乾旱，多元土壤',
    style: '從日常餐酒到頂級 Pago 都有；Airén 為世界栽植面積最大白葡萄；Cencibel 紅酒性價比極高',
    producers: ['Marqués de Griñón（Pago de Valdepusa）', 'Finca Élez', 'Bodegas Volver', 'Pago Calzadilla'],
    keyFact: 'La Mancha 是世界最大 DO（193,000 ha 葡萄園），同時也是西班牙最多 Vino de Pago 集中區（11 個 Pago 中有 8 個位於 La Mancha 周邊）。'
  },
  { key: 'toro', name: 'Toro', zhName: '托羅', zone: 'north', tier: 'do', emoji: '🐂',
    tagline: 'Tinta de Toro——厚重黑色力量',
    signature: 'Tinta de Toro（=Tempranillo 在地版本，須佔 75%+）',
    terroir: 'Castilla y León 高海拔（620-800m）、貧瘠砂質與石灰岩，極端日夜溫差',
    style: '極深色、酒精偏高（14-15%）、單寧粗獷、果香集中。比 Ribera del Duero 更狂野、原始',
    producers: ['Numanthia', 'Pintia（Vega Sicilia 集團）', 'Maurodos', 'Telmo Rodríguez（Pago La Jara）'],
    keyFact: 'Toro 是西班牙少數老藤未嫁接（pre-phylloxera）區域之一——根瘤蚜病在 19 世紀末未到此地，部分 Numanthia 老藤仍是 100+ 年原始砧木。'
  },
  { key: 'jerez', name: 'Jerez-Xérès-Sherry', zhName: '雪莉', zone: 'south', tier: 'do', emoji: '🍯',
    tagline: '世界最古老的雪莉酒區——Solera 系統發源地',
    signature: 'Palomino（97% Sherry 主品種）、Pedro Ximénez（甜雪莉）、Moscatel',
    terroir: 'Andalucía 大西洋岸 Cádiz 省，albariza 白堊土，海洋與內陸交替氣候',
    style: '加烈酒，分 Fino / Manzanilla（生物陳年）/ Amontillado / Oloroso（氧化陳年）/ PX（甜）/ Cream 等多種風格',
    producers: ['González Byass（Tio Pepe）', 'Lustau', 'Equipo Navazos', 'Valdespino', 'Hidalgo La Gitana', 'Barbadillo'],
    keyFact: 'Sherry 使用獨特的 Solera 系統——多年份分階段混合的金字塔陳年法。一瓶 Tio Pepe Fino 可能含有 4-7 年混和酒液，而頂級 VOS（30 年）/ VORS（50 年）含有數百年混合的微量古酒。'
  },
  { key: 'penedes', name: 'Penedès / Cava', zhName: '佩內德斯', zone: 'north', tier: 'do', emoji: '🥂',
    tagline: 'Cava 之鄉——西班牙傳統法氣泡酒',
    signature: 'Macabeo + Xarel·lo + Parellada（傳統三品種）；Penedès 紅酒以國際品種為主',
    terroir: 'Catalunya 海岸地中海氣候，石灰岩、黏土',
    style: 'Cava 為瓶內二次發酵氣泡酒（同 Champagne 法），分 Brut / Reserva（15+ 月）/ Gran Reserva（30+ 月）/ Cava de Paraje Calificado（最高等級）',
    producers: ['Codorníu', 'Freixenet', 'Recaredo', 'Gramona', 'Raventós i Blanc（已退出 DO Cava，改用「Conca del Riu Anoia」）'],
    keyFact: 'Cava 1872 年由 Codorníu 創始者 Josep Raventós 引入瓶內二次發酵法。但 Cava DO 涵蓋整個西班牙的傳統法氣泡酒（不限 Penedès），近年部分頂級酒莊（Raventós i Blanc、Gramona）退出 DO 抗議規範過於寬鬆。'
  },
  { key: 'jumilla', name: 'Jumilla', zhName: '胡米亞', zone: 'south', tier: 'do', emoji: '🌞',
    tagline: 'Monastrell 王國——東南乾熱的厚重紅酒',
    signature: 'Monastrell（須佔 50%+；Crianza 以上須 80%+）',
    terroir: 'Murcia 內陸高原（400-800m），地中海氣候極炎熱乾燥，貧瘠石灰岩與砂',
    style: '深色集中、單寧厚重、酒精偏高（14-15%）、果香奔放。老藤未嫁接酒款近年備受國際關注',
    producers: ['Casa Castillo', 'Juan Gil', 'Bodegas Olivares', 'Bodega Cerrón'],
    keyFact: 'Jumilla 是西班牙第二個老藤未嫁接（pre-phylloxera）區域。根瘤蚜病雖在 1980 年代終於到達，但部分高海拔貧瘠葡萄園仍保留 80-100 年老藤砧木。'
  },
  { key: 'navarra', name: 'Navarra', zhName: '納瓦拉', zone: 'north', tier: 'do', emoji: '🌹',
    tagline: 'Garnacha Rosado 之鄉——Rioja 的鄰居',
    signature: 'Garnacha（粉紅）、Tempranillo、Cabernet Sauvignon、Merlot',
    terroir: 'Pyrenees 山腳到 Ebro 河谷，氣候從大陸到地中海漸變',
    style: 'Garnacha Rosado（粉紅酒）為傳統招牌；紅酒受 Bordeaux 影響，常混 Cabernet/Merlot',
    producers: ['Pago de Arínzano（Vino de Pago）', 'Pago de Otazu', 'Bodegas Ochoa', 'Castillo Monjardín'],
    keyFact: 'Navarra 擁有兩個 Vino de Pago（Pago de Arínzano、Pago de Otazu），是擁有最多 Pago 的北部 DO 區之一。歷史上 Navarra 的 Garnacha 粉紅酒比 Provence 的還要早被歐洲宮廷飲用。'
  },
  // Islands
  { key: 'canarias', name: 'Tenerife / Canarias', zhName: '加那利群島', zone: 'islands', tier: 'do', emoji: '🌋',
    tagline: '大西洋火山島——未受根瘤蚜影響的古藤天堂',
    signature: 'Listán Negro、Negramoll（紅）、Listán Blanco、Malvasía Volcánica（白）',
    terroir: '火山黑沙、海拔最高至 1700m（世界最高商業葡萄園），永不受根瘤蚜病影響',
    style: '極特殊風土——火山礦物、海洋鹽味、Listán Negro 輕盈但複雜',
    producers: ['Envínate', 'Bodegas Suertes del Marqués', 'Bodegas Monje', 'Viñátigo'],
    keyFact: 'Canarias 從未受根瘤蚜病影響——所有葡萄藤都是原始未嫁接（franco de pie）。Tenerife 的某些葡萄園海拔 1700m，是世界海拔最高的商業葡萄酒產區之一。Envínate 等新派酒莊讓 Canarias 葡萄酒登上世界舞台。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeZone = ref('all')
const filteredRegions = computed(() =>
  activeZone.value === 'all' ? regions.value : regions.value.filter((r) => r.zone === activeZone.value)
)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'rioja')
const activeRegion = computed(() => regions.value.find((r) => r.key === activeKey.value) || regions.value[0])
</script>

<style scoped>
.spain-regions-slide {
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

.zone-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.zone-btn {
  background: #fff;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 22px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  color: #7a6048;
  font-weight: 500;
}

.zone-btn:hover {
  transform: translateY(-2px);
}

.zone-btn.active {
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(192, 57, 43, 0.2);
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.region-card {
  background: #fff;
  border: 2px solid transparent;
  border-top: 4px solid;
  border-radius: 8px;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 2px 6px rgba(192, 57, 43, 0.08);
  text-align: center;
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(192, 57, 43, 0.18);
}

.region-card.active {
  border-color: var(--zone-color);
  box-shadow: 0 6px 16px rgba(192, 57, 43, 0.25);
  transform: translateY(-2px);
}

.region-flag {
  font-size: 1.5rem;
}

.region-card h3 {
  margin: 0;
  font-size: 0.95rem;
  color: #2d1a0f;
}

.region-zh {
  font-size: 0.78rem;
  color: #7a6048;
}

.region-tags {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}

.tier-tag, .tier-badge {
  font-size: 0.7rem;
  padding: 0.1rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  background: #B8860B;
  color: #fff;
}

.tier-tag.doca, .tier-badge.doca {
  background: #B8860B;
}

.tier-tag.do, .tier-badge.do {
  background: #D4A574;
}

.tier-tag.pago, .tier-badge.pago {
  background: #7B1F2A;
}

.region-detail {
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
  margin-bottom: 0.5rem;
}

.detail-header h3 {
  margin: 0;
  color: #2d1a0f;
  font-size: 1.3rem;
}

.detail-header .zh {
  color: #7a6048;
  font-size: 0.95rem;
  font-weight: 400;
  margin-left: 0.4rem;
}

.detail-badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.zone-badge {
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 14px;
  font-size: 0.78rem;
  font-weight: 500;
}

.tier-badge {
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 0.78rem;
}

.detail-tagline {
  color: #4a3826;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0.7rem 0.9rem;
  background: #fdf6ec;
  border-radius: 6px;
  border-left: 3px solid #B8860B;
  font-style: italic;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.detail-block.full-width {
  grid-column: 1 / -1;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.95rem;
  color: #C0392B;
}

.detail-block p {
  margin: 0;
  color: #4a3826;
  font-size: 0.88rem;
  line-height: 1.6;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .spain-regions-slide {
    padding: 1rem;
  }
  .regions-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
