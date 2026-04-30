<template>
  <div class="italy-regions-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '義大利 20 大產區總覽' }}</h2>
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
        <div class="region-stats">
          <span class="stat-tag">{{ region.docgCount }} DOCG</span>
        </div>
      </div>
    </div>

    <div class="region-detail" v-if="activeRegion" :style="{ borderColor: zoneColor(activeRegion.zone) }">
      <img :src="`/images/italy/zone-${activeRegion.zone}.svg`" class="zone-banner" :alt="zoneLabel(activeRegion.zone)" />
      <div class="detail-header">
        <h3>{{ activeRegion.emoji }} {{ activeRegion.name }} <span class="zh">{{ activeRegion.zhName }}</span></h3>
        <span class="zone-badge" :style="{ backgroundColor: zoneColor(activeRegion.zone) }">
          {{ zoneLabel(activeRegion.zone) }}
        </span>
      </div>

      <p class="detail-tagline">{{ activeRegion.tagline }}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>🍇 招牌品種</h4>
          <p>{{ activeRegion.signature }}</p>
        </div>
        <div class="detail-block">
          <h4>🏆 代表 DOCG</h4>
          <ul>
            <li v-for="(d, i) in activeRegion.topDOCG" :key="i">{{ d }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🪨 風土特色</h4>
          <p>{{ activeRegion.terroir }}</p>
        </div>
        <div class="detail-block">
          <h4>🍷 風格特徵</h4>
          <p>{{ activeRegion.style }}</p>
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
  { key: 'north', label: '🏔️ 北義（North）', color: '#3070A0' },
  { key: 'center', label: '🌄 中義（Center）', color: '#B8860B' },
  { key: 'south', label: '🌋 南義 / 島嶼（South）', color: '#A8324A' }
]

const zoneColor = (zone) => zones.find((z) => z.key === zone)?.color || '#999'
const zoneLabel = (zone) => zones.find((z) => z.key === zone)?.label || zone

const defaultRegions = [
  // North
  { key: 'piemonte', name: 'Piemonte', zhName: '皮蒙特', zone: 'north', emoji: '🍷', docgCount: 18,
    tagline: '義大利之王——Barolo 與 Barbaresco 的故鄉',
    signature: 'Nebbiolo（Barolo/Barbaresco）、Barbera、Dolcetto、Moscato、Cortese',
    topDOCG: ['Barolo', 'Barbaresco', 'Barbera d\'Asti', 'Asti / Moscato d\'Asti', 'Roero'],
    terroir: 'Langhe 丘陵：Tortonian 藍灰泥灰岩 + Helvetian 紅褐砂質。霧氣多、秋季長',
    style: 'Nebbiolo 結構壯麗、單寧粗獷；Barbera 高酸易飲；Moscato d\'Asti 為微氣泡甜白',
    keyFact: '皮蒙特擁有義大利最多 DOCG（18 個），且是唯一被聯合國列入 UNESCO 葡萄園遺產的義大利產區（2014）。'
  },
  { key: 'veneto', name: 'Veneto', zhName: '維內托', zone: 'north', emoji: '🚣', docgCount: 14,
    tagline: '產量第一——Prosecco 與 Amarone 的雙王國',
    signature: 'Glera（Prosecco）、Corvina（Valpolicella）、Garganega（Soave）',
    topDOCG: ['Amarone della Valpolicella', 'Soave Superiore', 'Conegliano Valdobbiadene Prosecco', 'Bardolino Superiore'],
    terroir: 'Lake Garda 調節氣候；Valpolicella 石灰質黏土；Soave 火山岩',
    style: 'Amarone 風乾葡萄釀造、酒精 14-16%；Prosecco 鮮果氣泡；Soave 礦物白酒',
    keyFact: 'Veneto 是義大利產量最大的大區（年產約 11 億公升），Prosecco 為全球銷量最大的氣泡酒。'
  },
  { key: 'lombardia', name: 'Lombardia', zhName: '倫巴底', zone: 'north', emoji: '⛪', docgCount: 5,
    tagline: '氣泡之鄉——Franciacorta 為核心',
    signature: 'Chardonnay/Pinot Nero（Franciacorta）、Nebbiolo（Valtellina）',
    topDOCG: ['Franciacorta', 'Sforzato di Valtellina', 'Valtellina Superiore', 'Oltrepò Pavese Metodo Classico'],
    terroir: 'Franciacorta 冰川沉積；Valtellina 阿爾卑斯山陡坡梯田',
    style: 'Franciacorta 為義大利最頂級瓶內二次發酵氣泡酒，常被視為「義大利香檳」',
    keyFact: 'Franciacorta 雖知名度不及 Champagne，但平均品質與最低陳年要求（18 個月）超越多數香檳法定標準。'
  },
  { key: 'trentino', name: 'Trentino-Alto Adige', zhName: '特倫提諾', zone: 'north', emoji: '🏔️', docgCount: 0,
    tagline: '阿爾卑斯白酒帶——德義雙語區',
    signature: 'Pinot Grigio、Gewürztraminer、Lagrein、Pinot Bianco、Müller-Thurgau',
    topDOCG: ['Trento DOC（傳統氣泡）', 'Alto Adige DOC', 'Trentino DOC'],
    terroir: '阿爾卑斯山高海拔（200-1000m）、冰川沉積土、極大日夜溫差',
    style: '白酒占 60%、酸度極高、礦物張力強；Lagrein 為當地特色紅葡萄',
    keyFact: 'Alto Adige（南蒂羅爾）為德語區，多數酒莊使用德文酒標，是義大利唯一以德語為主的葡萄酒產區。'
  },
  { key: 'friuli', name: 'Friuli-Venezia Giulia', zhName: '弗留利', zone: 'north', emoji: '🍋', docgCount: 4,
    tagline: '白酒典範——Friulano 與 Ribolla Gialla',
    signature: 'Friulano（前 Tocai）、Ribolla Gialla、Pinot Grigio、Sauvignon Blanc',
    topDOCG: ['Colli Orientali del Friuli Picolit', 'Ramandolo', 'Rosazzo', 'Lison'],
    terroir: 'Ponca（鈣質片岩泥灰）、地中海與阿爾卑斯交會',
    style: '清新乾燥白酒典範；橘酒（orange wine）發源地之一',
    keyFact: '橘酒（皮浸白酒）的現代復興運動由 Friuli 釀酒師 Joško Gravner 於 1990 年代開創。'
  },
  { key: 'liguria', name: 'Liguria', zhName: '利古里亞', zone: 'north', emoji: '🌊', docgCount: 0,
    tagline: '海岸窄地——Cinque Terre 之美',
    signature: 'Vermentino、Pigato、Bosco、Albarola',
    topDOCG: ['Cinque Terre DOC', 'Rossese di Dolceacqua DOC', 'Colli di Luni DOC'],
    terroir: '陡峭海岸梯田、片岩、海風影響',
    style: '清新海洋白酒；Sciacchetrà 為當地風乾甜白傳統',
    keyFact: 'Cinque Terre 五漁村葡萄園是 UNESCO 世界遺產，部分梯田超過 1000 年歷史。'
  },
  { key: 'emilia', name: 'Emilia-Romagna', zhName: '艾米利亞-羅馬涅', zone: 'north', emoji: '🍝', docgCount: 2,
    tagline: '義大利美食之心——Lambrusco 與 Sangiovese',
    signature: 'Lambrusco（紅氣泡）、Sangiovese di Romagna、Albana',
    topDOCG: ['Albana di Romagna', 'Romagna Albana'],
    terroir: 'Po 河平原、亞平寧山麓',
    style: 'Lambrusco 為微氣泡紅酒（與當地油膩美食完美搭配）',
    keyFact: '艾米利亞-羅馬涅是義大利美食最豐富區域（Parma 火腿、帕馬森乳酪、Bologna 肉醬），Lambrusco 演化為與這些料理對抗油膩的「在地英雄」。'
  },
  // Center
  { key: 'toscana', name: 'Toscana', zhName: '托斯卡尼', zone: 'center', emoji: '🌅', docgCount: 11,
    tagline: '經典之美——Sangiovese 王國 + Super Tuscan 革命地',
    signature: 'Sangiovese、Cabernet Sauvignon、Merlot（Super Tuscan）、Vermentino',
    topDOCG: ['Brunello di Montalcino', 'Chianti Classico', 'Vino Nobile di Montepulciano', 'Carmignano'],
    terroir: 'Galestro 片岩泥灰、Alberese 石灰岩、海岸沖積',
    style: 'Sangiovese 紅酒典範；Bolgheri DOC 為 Super Tuscan 主舞台（Sassicaia、Ornellaia）',
    keyFact: '1968 年 Sassicaia 開創「Super Tuscan」概念——使用 Cabernet Sauvignon 而被歸為 Vino da Tavola 等級，反而成為世界最貴的義大利酒之一，最終於 1994 年獲得 Bolgheri Sassicaia DOC 專屬等級。'
  },
  { key: 'marche', name: 'Marche', zhName: '馬爾凱', zone: 'center', emoji: '🐟', docgCount: 5,
    tagline: '亞德里亞海岸——Verdicchio 與 Conero',
    signature: 'Verdicchio（白）、Montepulciano、Sangiovese',
    topDOCG: ['Conero', 'Verdicchio dei Castelli di Jesi Riserva', 'Verdicchio di Matelica Riserva', 'Vernaccia di Serrapetrona'],
    terroir: '海岸丘陵 vs 亞平寧山谷，土壤多元',
    style: 'Verdicchio 為義大利最重要白酒之一；Conero 為 Marche 最強紅酒',
    keyFact: 'Verdicchio dei Castelli di Jesi 經典酒款使用魚形瓶（Anfora），起源於 1953 年 Fazi-Battaglia 的設計，象徵亞德里亞海漁業傳統。'
  },
  { key: 'umbria', name: 'Umbria', zhName: '翁布里亞', zone: 'center', emoji: '🌳', docgCount: 2,
    tagline: '義大利綠心——Sagrantino 之鄉',
    signature: 'Sagrantino（極高單寧）、Sangiovese、Trebbiano、Grechetto',
    topDOCG: ['Sagrantino di Montefalco', 'Torgiano Rosso Riserva'],
    terroir: '黏土、石灰岩、火山遺留',
    style: 'Sagrantino 是世界單寧含量最高的紅葡萄之一，需 10+ 年陳年',
    keyFact: 'Sagrantino 葡萄的多酚含量是 Cabernet Sauvignon 的 2 倍以上，被科學證實為「最抗氧化」的紅酒之一。'
  },
  { key: 'lazio', name: 'Lazio', zhName: '拉齊奧', zone: 'center', emoji: '🏛️', docgCount: 3,
    tagline: '羅馬之鄉——Frascati 與 Cesanese',
    signature: 'Trebbiano、Malvasia（Frascati）、Cesanese',
    topDOCG: ['Cesanese del Piglio', 'Frascati Superiore', 'Cannellino di Frascati'],
    terroir: '火山土壤（Castelli Romani 火山口湖周邊）',
    style: 'Frascati 為羅馬日常白酒；Cesanese 為當地原生紅葡萄復興品種',
    keyFact: '古羅馬時期 Falernum 葡萄酒是當時世界最尊貴的酒——Pliny 稱其為「最高品級」，源自今日 Lazio 與 Campania 邊界。'
  },
  { key: 'abruzzo', name: 'Abruzzo', zhName: '阿布魯佐', zone: 'center', emoji: '🐺', docgCount: 1,
    tagline: '山與海之間——Montepulciano d\'Abruzzo 主舞台',
    signature: 'Montepulciano、Trebbiano、Pecorino、Passerina',
    topDOCG: ['Montepulciano d\'Abruzzo Colline Teramane'],
    terroir: '亞平寧山脈 + 亞德里亞海岸、黏土石灰',
    style: 'Montepulciano d\'Abruzzo 為義大利最大產量 DOC，Cerasuolo 為其粉紅版本',
    keyFact: 'Emidio Pepe 與 Valentini 為義大利最受推崇的「自然酒先驅」，前者酒款可陳年 50+ 年。'
  },
  { key: 'molise', name: 'Molise', zhName: '莫利塞', zone: 'center', emoji: '🌾', docgCount: 0,
    tagline: '義大利最小產區——尚待發掘',
    signature: 'Tintilia、Montepulciano、Trebbiano',
    topDOCG: ['（無 DOCG）Tintilia del Molise DOC'],
    terroir: '亞平寧丘陵',
    style: 'Tintilia 為當地原生紅葡萄、近年復興',
    keyFact: 'Molise 1963 年才從 Abruzzo 獨立，是義大利最年輕的大區之一，葡萄酒產業仍在建立認同。'
  },
  // South / Islands
  { key: 'campania', name: 'Campania', zhName: '坎帕尼亞', zone: 'south', emoji: '🌋', docgCount: 4,
    tagline: '南義之巴羅洛——Aglianico 之鄉',
    signature: 'Aglianico、Fiano、Greco di Tufo、Falanghina',
    topDOCG: ['Taurasi', 'Fiano di Avellino', 'Greco di Tufo', 'Aglianico del Taburno'],
    terroir: '維蘇威火山岩、凝灰岩、Apennine 山區',
    style: 'Taurasi 為「南義 Barolo」、極高單寧需 10+ 年；Fiano/Greco 為頂級白酒',
    keyFact: '古希臘人於西元前 8 世紀將葡萄酒釀造引入 Campania，當時稱此地為「Oenotria」（葡萄酒之地）——這是「義大利」最古老的稱呼。'
  },
  { key: 'puglia', name: 'Puglia', zhName: '普利亞', zone: 'south', emoji: '🫒', docgCount: 4,
    tagline: '義大利酒倉——Primitivo（Zinfandel）之鄉',
    signature: 'Primitivo、Negroamaro、Nero di Troia、Susumaniello',
    topDOCG: ['Castel del Monte Bombino Nero', 'Castel del Monte Nero di Troia Riserva', 'Castel del Monte Rosso Riserva', 'Primitivo di Manduria Dolce Naturale'],
    terroir: '紅黏土、石灰岩台地、地中海氣候',
    style: '飽滿果香、酒精偏高、Primitivo 為美國 Zinfandel 同源品種',
    keyFact: 'DNA 研究於 2001 年證實 Primitivo 與美國加州 Zinfandel、克羅埃西亞 Crljenak Kaštelanski 為同一品種。'
  },
  { key: 'basilicata', name: 'Basilicata', zhName: '巴西利卡塔', zone: 'south', emoji: '🪨', docgCount: 1,
    tagline: 'Vulture 火山——Aglianico 的另一個家',
    signature: 'Aglianico（Aglianico del Vulture）、Moscato',
    topDOCG: ['Aglianico del Vulture Superiore'],
    terroir: 'Monte Vulture 死火山火山灰、海拔 450-600m',
    style: 'Aglianico del Vulture 比 Taurasi 略柔軟、酸度更明亮',
    keyFact: 'Basilicata 是義大利最少葡萄園面積的大區之一，但 Aglianico del Vulture 的品質讓 Wine Spectator 將 Elena Fucci「Titolo」列為世界百大酒款。'
  },
  { key: 'calabria', name: 'Calabria', zhName: '卡拉布里亞', zone: 'south', emoji: '🌶️', docgCount: 0,
    tagline: '義大利「鞋尖」——Cirò 與 Gaglioppo',
    signature: 'Gaglioppo、Greco Bianco、Magliocco',
    topDOCG: ['（無 DOCG）Cirò DOC 為主'],
    terroir: '海岸丘陵、地中海氣候、Aspromonte 山區',
    style: 'Gaglioppo 紅酒色淺單寧高、易讓人聯想 Nebbiolo',
    keyFact: 'Cirò DOC（古希臘 Krimisa）是義大利最古老的葡萄酒產區之一，據傳古希臘奧運冠軍會以此酒慶祝。'
  },
  { key: 'sicilia', name: 'Sicilia', zhName: '西西里', zone: 'south', emoji: '🌋', docgCount: 1,
    tagline: '火山之島——Etna 與 Nero d\'Avola',
    signature: 'Nero d\'Avola、Nerello Mascalese（Etna）、Frappato、Grillo、Carricante',
    topDOCG: ['Cerasuolo di Vittoria'],
    terroir: 'Etna 火山玄武岩、地中海日照、海拔變化大',
    style: 'Etna 紅酒被譽為「地中海的布根地」、優雅高酸；Nero d\'Avola 飽滿易飲',
    keyFact: '1990 年代起 Etna 火山葡萄園被「重新發現」——海拔 600-1000m 的高山葡萄園產出讓國際酒評家驚艷的優雅紅酒，被視為義大利下一個 Burgundy。'
  },
  { key: 'sardegna', name: 'Sardegna', zhName: '薩丁尼亞', zone: 'south', emoji: '🏝️', docgCount: 1,
    tagline: '地中海之島——Cannonau 與 Vermentino',
    signature: 'Cannonau（=Garnacha）、Vermentino、Carignano',
    topDOCG: ['Vermentino di Gallura'],
    terroir: '花崗岩、片麻岩、地中海氣候',
    style: 'Cannonau 為當地 Garnacha；Vermentino 為清新海洋白酒典範',
    keyFact: 'Sardegna 是世界 5 大「藍色區域」（Blue Zone）之一——居民壽命特別長。研究指出 Cannonau 的多酚含量比一般 Garnacha 高 2-3 倍，可能與此有關。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeZone = ref('all')
const filteredRegions = computed(() =>
  activeZone.value === 'all'
    ? regions.value
    : regions.value.filter((r) => r.zone === activeZone.value)
)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'piemonte')
const activeRegion = computed(
  () => regions.value.find((r) => r.key === activeKey.value) || regions.value[0]
)
</script>

<style scoped>
.italy-regions-slide {
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
  box-shadow: 0 4px 12px rgba(123, 31, 42, 0.2);
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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
  font-size: 0.92rem;
  color: #2d1a0f;
}

.region-zh {
  font-size: 0.78rem;
  color: #7a6048;
}

.region-stats {
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.2rem;
}

.stat-tag {
  background: var(--zone-color);
  color: #fff;
  font-size: 0.7rem;
  padding: 0.1rem 0.5rem;
  border-radius: 8px;
  font-weight: 600;
}

.region-detail {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 0 1.4rem 1.2rem;
  box-shadow: 0 4px 12px rgba(123, 31, 42, 0.12);
  overflow: hidden;
}

.zone-banner {
  width: calc(100% + 2.8rem);
  height: 80px;
  object-fit: cover;
  display: block;
  margin: 0 -1.4rem 1rem;
  border-radius: 12px 6px 0 0;
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

.zone-badge {
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 14px;
  font-size: 0.78rem;
  font-weight: 500;
}

.detail-tagline {
  color: #4a3826;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0.7rem 0.9rem;
  background: #faf3e8;
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
  .italy-regions-slide {
    padding: 1rem;
  }
  .regions-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
