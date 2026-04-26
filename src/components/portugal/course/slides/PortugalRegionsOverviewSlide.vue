<template>
  <div class="portugal-regions-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '葡萄牙重要產區總覽' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || '從北部清新的 Vinho Verde、世界遺產 Douro，到大西洋火山島 Madeira，葡萄牙以其多元風土與獨特原生品種聞名。' }}
      </p>
    </div>

    <div class="zone-filter">
      <button
        v-for="zone in zones"
        :key="zone.key"
        class="zone-btn"
        :class="{ active: activeZone === zone.key }"
        :style="{ borderColor: activeZone === zone.key ? zone.color : 'transparent', color: activeZone === zone.key ? zone.color : '#6b4226' }"
        @click="activeZone = zone.key"
      >{{ zone.label }}</button>
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
          <span class="specialty-tag">{{ region.specialty }}</span>
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
          <span class="specialty-badge">{{ activeRegion.specialty }}</span>
          <span v-if="activeRegion.unesco" class="unesco-badge">🏛️ UNESCO 世界遺產</span>
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
  { key: 'all', label: '全部', color: '#7B1F2A' },
  { key: 'north', label: '🏔️ 北部', color: '#046A38' },
  { key: 'center', label: '🌾 中部', color: '#B8860B' },
  { key: 'south', label: '☀️ 南部', color: '#DA291C' },
  { key: 'islands', label: '🏝️ 大西洋群島', color: '#3070A0' }
]

const zoneColor = (zone) => zones.find((z) => z.key === zone)?.color || '#999'
const zoneLabel = (zone) => zones.find((z) => z.key === zone)?.label || zone

const defaultRegions = [
  // North
  {
    key: 'vinho-verde', name: 'Vinho Verde', zhName: '綠酒', zone: 'north', emoji: '🌿',
    specialty: '清新微氣泡白酒',
    tagline: '葡萄牙最大 DOC——大西洋影響的「綠色」清新白酒',
    signature: 'Alvarinho（=西班牙 Albariño）、Loureiro、Trajadura、Avesso、Arinto',
    terroir: '葡萄牙最西北角 Minho 河谷，年雨量 1200-1500mm 大西洋氣候。花崗岩土壤，葡萄藤多用「pérgola」高架棚架法防潮',
    style: '酸度極高、輕微氣泡（自然或人工）、低酒精（9-11.5%）、青蘋果與柑橘香、海洋鹽味。「Verde」（綠）非指顏色而指「年輕」之意（須在採收次年上市）',
    producers: ['Soalheiro（Monção 子區頂級 Alvarinho）', 'Anselmo Mendes（單一葡萄園版本）', 'Quinta de Soalheiro', 'Aphros Vinho Verde', 'Quinta da Aveleda'],
    keyFact: 'Vinho Verde DOC 涵蓋 9 個子區，其中 Monção e Melgaço 子區是 Alvarinho 的故鄉（與西班牙 Rías Baixas 隔河相望，同一葡萄品種）。傳統 Vinho Verde 是農夫日常餐酒、酒精僅 9%；現代頂級 Alvarinho 可達 13-14%、可陳年 5-10 年。',
    unesco: false
  },
  {
    key: 'douro', name: 'Douro', zhName: '杜羅', zone: 'north', emoji: '🍷',
    specialty: 'Port + 頂級 Douro DOC 紅',
    tagline: '世界最古老的劃定產區（1756）——Port 與頂級不加烈紅酒之鄉',
    signature: 'Touriga Nacional、Touriga Franca、Tinta Roriz、Tinta Barroca、Tinto Cão（5 大品種）',
    terroir: '極陡峭片岩（schist）梯田，Douro 河谷三個子區：Baixo Corgo（涼爽）、Cima Corgo（核心）、Douro Superior（最炎熱）。海拔 200-600m，極端日夜溫差',
    style: 'Port 加烈甜酒（Ruby/Tawny/LBV/Vintage 等多風格）+ 頂級 Douro DOC 不加烈紅酒（單寧厚實、酒精偏高、礦物深度）。20 世紀末 Douro 紅酒崛起，現可與 Port 並駕齊驅',
    producers: ['Niepoort（Port + Douro 紅雙料王）', 'Quinta do Vale Meão', 'Quinta do Crasto', 'Symington Family Estates（Graham\'s/Dow\'s/Warre\'s）', 'Taylor Fladgate', 'Quinta do Noval', 'Wine & Soul'],
    keyFact: 'Douro 是世界最古老的劃定葡萄酒產區——1756 年由 Pombal 侯爵成立，比 Bordeaux 的 1855 分級早 100 年、比法國 AOC 系統（1935）早 180 年。2001 年被聯合國教科文組織列為世界遺產。',
    unesco: true
  },
  {
    key: 'dao', name: 'Dão', zhName: '達奧', zone: 'center', emoji: '🌲',
    specialty: 'Touriga Nacional 內陸版本',
    tagline: '葡萄牙的「Burgundy」——花崗岩高原上的優雅紅酒',
    signature: 'Touriga Nacional（招牌）、Tinta Roriz、Jaen、Alfrocheiro',
    terroir: '葡萄牙中部高原（400-700m），花崗岩土壤，松樹林環繞。受山脈保護免於大西洋濕氣與內陸極熱',
    style: '比 Douro 紅酒更優雅、酸度更高、單寧細緻。是 Touriga Nacional 最能展現「花香優雅面」的產區。陳年潛力 10-30 年',
    producers: ['Álvaro Castro（Quinta da Pellada）', 'Quinta dos Roques', 'Casa de Mouraz', 'Quinta de Cabriz'],
    keyFact: '20 世紀中葉因合作社主導低品質酒，Dão 名聲一度黯淡。1990 年代以來酒農獨立、回歸花崗岩風土，Dão 已被視為葡萄牙最被低估的高品質產區之一，常被類比為「葡萄牙的 Burgundy」。',
    unesco: false
  },
  {
    key: 'bairrada', name: 'Bairrada', zhName: '貝拉達', zone: 'center', emoji: '🌬️',
    specialty: 'Baga 紅酒 + 傳統氣泡',
    tagline: '海岸黏土——Baga 葡萄與傳統法氣泡酒之鄉',
    signature: 'Baga（紅）、Maria Gomes、Bical、Arinto（白 / 氣泡酒）',
    terroir: '大西洋海岸黏土土壤，受海洋影響。年雨量 1000-1200mm',
    style: '紅酒：Baga 為主，極高酸度與單寧、需長期陳年。傳統法氣泡酒（Espumante）：與 Cava/Champagne 同法釀造',
    producers: ['Luis Pato（Baga 之父）', 'Filipa Pato（其女）', 'Niepoort Lagar de Baixo', 'Caves Aliança'],
    keyFact: 'Bairrada 是葡萄牙最重要的傳統法氣泡酒產區，自 1890 年代就生產 Espumante。Baga 葡萄因高單寧曾被認為「難以馴服」，但 Luis Pato 等酒農證明其可達到世界級紅酒品質——常被類比為葡萄牙的 Nebbiolo。',
    unesco: false
  },
  // South
  {
    key: 'alentejo', name: 'Alentejo', zhName: '阿連特茹', zone: 'south', emoji: '☀️',
    specialty: '飽滿紅酒 + 軟木塞之鄉',
    tagline: '南部豔陽下的飽滿紅酒——葡萄牙商業酒主力',
    signature: 'Aragonez（=Tempranillo）、Trincadeira、Alicante Bouschet、Touriga Nacional',
    terroir: '葡萄牙南部廣闊平原，極炎熱地中海氣候，多元土壤（花崗岩、片岩、石灰、黏土）',
    style: '飽滿、果香奔放、單寧柔軟、酒精偏高。比北部酒款更易飲、即飲性高、性價比優',
    producers: ['Esporão', 'Mouchão（傳統派）', 'Cortes de Cima', 'João Portugal Ramos', 'Herdade do Mouchão'],
    keyFact: 'Alentejo 不僅是葡萄牙最大葡萄酒產區之一，也是世界最大「軟木塞橡木」（cork oak）產地——全球 50% 的葡萄酒軟木塞來自此區。Alentejo 的 talha（陶罐釀酒）傳統可追溯至羅馬時代，近年被高端酒莊復興。',
    unesco: false
  },
  {
    key: 'setubal', name: 'Setúbal / Península de Setúbal', zhName: '塞圖巴爾', zone: 'south', emoji: '🍇',
    specialty: 'Moscatel 甜酒',
    tagline: 'Moscatel de Setúbal——葡萄牙頂級甜酒',
    signature: 'Moscatel de Alexandria、Moscatel Roxo（紫色 Moscatel）',
    terroir: '里斯本南方半島，大西洋影響，石灰岩 + 砂質土壤',
    style: 'Moscatel 加烈甜酒——多年木桶氧化陳年，色澤從金黃轉為深琥珀，蜂蜜、橙皮、香料、葡萄乾的層次複雜度。可陳年 50-100 年',
    producers: ['José Maria da Fonseca（Alambre 系列）', 'Bacalhôa Vinhos'],
    keyFact: 'Moscatel de Setúbal 自 17 世紀就是歐洲皇室喜愛的甜酒。Moscatel Roxo（紫色 Moscatel）為極稀有變種，僅在 Setúbal 種植。José Maria da Fonseca 仍保有 1900 年以前的 Moscatel 老酒收藏。',
    unesco: false
  },
  {
    key: 'lisboa', name: 'Lisboa', zhName: '里斯本', zone: 'south', emoji: '🏛️',
    specialty: '歷史 DOC + 創新',
    tagline: '里斯本周邊歷史 DOC——Colares、Bucelas、Carcavelos',
    signature: 'Ramisco（Colares）、Arinto（Bucelas）、多元品種',
    terroir: '里斯本周邊多元微產區，大西洋海岸氣候',
    style: '包含葡萄牙最歷史悠久的數個 DOC：Colares（沙地老藤未嫁接 Ramisco）、Bucelas（高酸 Arinto 白酒）、Carcavelos（甜加烈酒，瀕臨絕跡）',
    producers: ['Adega Regional de Colares', 'Quinta da Murta（Bucelas）', 'Quinta de São José'],
    keyFact: 'Colares DOC 是世界少數葡萄藤未嫁接（pre-phylloxera）的產區——根瘤蚜病無法穿透 1-9 公尺深的純沙地。但 Colares 葡萄園因都市開發已縮減至僅 20 公頃，是世界最瀕危的葡萄酒產區之一。',
    unesco: false
  },
  // Islands
  {
    key: 'madeira', name: 'Madeira', zhName: '馬德拉', zone: 'islands', emoji: '🌋',
    specialty: '加熱氧化加烈酒',
    tagline: '世界最長壽葡萄酒——大西洋火山島的加熱奇蹟',
    signature: 'Sercial（極乾）、Verdelho（半乾）、Bual（半甜）、Malvasia/Malmsey（甜）+ Tinta Negra Mole（90% 種植量）',
    terroir: '大西洋火山島（葡萄牙領土，距非洲海岸 600 km），亞熱帶火山土壤，極陡峭梯田',
    style: '獨特「estufagem」加熱氧化工藝（傳統 canteiro 自然加熱、商業 estufa 人工加熱）。產生獨特高酸 + 焦糖化 + 氧化複雜度。風格從極乾到極甜 4 個等級',
    producers: ['Blandy\'s', 'Henriques & Henriques', 'Barbeito', 'D\'Oliveiras'],
    keyFact: 'Madeira 是世界最長壽葡萄酒——頂級 Vintage Madeira 可陳年 100-200 年。1815 年的 Bual Madeira 至今仍可飲用。傳奇起源是 17 世紀運往印度的酒桶在熱帶航行中意外升溫，回程後發現酒質更佳，從此確立加熱工藝。也是美國《獨立宣言》簽署時敬酒所用之酒。',
    unesco: false
  },
  {
    key: 'azores', name: 'Açores（Azores）', zhName: '亞速爾群島', zone: 'islands', emoji: '🌊',
    specialty: '火山島礦物白酒',
    tagline: '大西洋火山群島——獨特石牆葡萄園「currais」',
    signature: 'Verdelho、Arinto dos Açores、Terrantez do Pico',
    terroir: '葡萄牙領土火山群島，玄武岩石牆（currais）保護葡萄藤免於海風。Pico 島的葡萄園 2004 年被列為世界遺產',
    style: '極高酸度、明顯火山礦物與海洋鹽味、酒體輕至中等。近年新派酒莊崛起讓亞速爾葡萄酒登上國際舞台',
    producers: ['Azores Wine Company', 'Czar', 'Adega de Pico'],
    keyFact: 'Pico 島的葡萄園地景（Pico Vineyard Landscape）2004 年被聯合國教科文組織列為世界遺產——數千個玄武岩石牆形成的「currais」格子保護葡萄藤免於 Atlantic 強風。19 世紀亞速爾的 Verdelho 曾是俄國沙皇喜愛的酒款（故有「Czar」品牌之名）。',
    unesco: true
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeZone = ref('all')
const filteredRegions = computed(() =>
  activeZone.value === 'all' ? regions.value : regions.value.filter((r) => r.zone === activeZone.value)
)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'douro')
const activeRegion = computed(() => regions.value.find((r) => r.key === activeKey.value) || regions.value[0])
</script>

<style scoped>
.portugal-regions-slide {
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
  color: #6b4226;
  font-weight: 500;
}

.zone-btn:hover {
  transform: translateY(-2px);
}

.zone-btn.active {
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(123, 31, 42, 0.2);
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
  box-shadow: 0 2px 6px rgba(123, 31, 42, 0.08);
  text-align: center;
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(123, 31, 42, 0.18);
}

.region-card.active {
  border-color: var(--zone-color);
  box-shadow: 0 6px 16px rgba(123, 31, 42, 0.25);
  transform: translateY(-2px);
}

.region-flag {
  font-size: 1.5rem;
}

.region-card h3 {
  margin: 0;
  font-size: 0.95rem;
  color: #3a2415;
}

.region-zh {
  font-size: 0.78rem;
  color: #6b4226;
}

.region-tags {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}

.specialty-tag, .specialty-badge {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  background: #B8860B;
  color: #fff;
}

.region-detail {
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
  margin-bottom: 0.5rem;
}

.detail-header h3 {
  margin: 0;
  color: #3a2415;
  font-size: 1.3rem;
}

.detail-header .zh {
  color: #6b4226;
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

.specialty-badge {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.78rem;
}

.unesco-badge {
  background: #DA291C;
  color: #fff;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
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
  color: #7B1F2A;
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
  .portugal-regions-slide {
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
