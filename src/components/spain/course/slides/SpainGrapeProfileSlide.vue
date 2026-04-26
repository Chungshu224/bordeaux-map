<template>
  <div class="spain-grape-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '西班牙葡萄品種檔案' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="grape-tabs">
      <button
        v-for="grape in grapes"
        :key="grape.key"
        class="grape-tab"
        :class="{ active: activeKey === grape.key }"
        :style="{
          borderColor: activeKey === grape.key ? grape.color : 'transparent',
          color: activeKey === grape.key ? grape.color : '#7a6048'
        }"
        @click="activeKey = grape.key"
      >
        <span class="tab-emoji">{{ grape.emoji }}</span>
        <span class="tab-name">{{ grape.name }}</span>
      </button>
    </div>

    <div class="profile-content">
      <div class="profile-card" :style="{ borderColor: activeGrape.color }">
        <div class="card-header" :style="{ backgroundColor: activeGrape.color }">
          <div>
            <h3>{{ activeGrape.emoji }} {{ activeGrape.name }}</h3>
            <span class="card-tagline">{{ activeGrape.tagline }}</span>
          </div>
          <div class="quick-stats">
            <span class="stat"><strong>主產區</strong> {{ activeGrape.mainRegion }}</span>
            <span class="stat"><strong>顏色</strong> {{ activeGrape.colorType }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="profile-grid">
            <div class="profile-block">
              <h4>📍 在西班牙的角色</h4>
              <p>{{ activeGrape.spainRole }}</p>
              <ul>
                <li v-for="(area, i) in activeGrape.mainAreas" :key="i">
                  <strong>{{ area.name }}：</strong>{{ area.note }}
                </li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>🌿 品種特性</h4>
              <ul>
                <li><strong>果串：</strong>{{ activeGrape.cluster }}</li>
                <li><strong>成熟期：</strong>{{ activeGrape.ripening }}</li>
                <li><strong>適應土壤：</strong>{{ activeGrape.soils }}</li>
                <li><strong>氣候偏好：</strong>{{ activeGrape.climate }}</li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>📊 風格指標</h4>
              <div class="metric-list">
                <div class="metric" v-for="(m, key) in activeGrape.metrics" :key="key">
                  <span class="metric-label">{{ metricLabel(key) }}</span>
                  <div class="metric-bar">
                    <div class="metric-fill" :style="{ width: (m * 20) + '%', backgroundColor: activeGrape.color }"></div>
                  </div>
                  <span class="metric-value">{{ m }}/5</span>
                </div>
              </div>
            </div>

            <div class="profile-block">
              <h4>👃 香氣譜系</h4>
              <div class="aromas">
                <span
                  v-for="aroma in activeGrape.aromas"
                  :key="aroma"
                  class="aroma-chip"
                  :style="{ backgroundColor: activeGrape.color + '22', borderColor: activeGrape.color }"
                >
                  {{ aroma }}
                </span>
              </div>
            </div>

            <div class="profile-block full-width">
              <h4>🍷 風格特徵與陳年</h4>
              <p>{{ activeGrape.style }}</p>
              <p style="margin-top: 0.4rem;"><strong>陳年潛力：</strong>{{ activeGrape.ageing }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>🍽️ 經典餐酒搭配</h4>
              <ul class="pairing-list">
                <li v-for="(pair, i) in activeGrape.pairings" :key="i">{{ pair }}</li>
              </ul>
            </div>

            <div class="profile-block full-width">
              <h4>🌟 代表 DO / 酒莊</h4>
              <div class="examples-grid">
                <div
                  v-for="ex in activeGrape.examples"
                  :key="ex.name"
                  class="example-card"
                >
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
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

const metricLabel = (key) => ({
  acidity: '酸度',
  tannin: '單寧',
  body: '酒體',
  fruit: '果香強度',
  ageing: '陳年潛力'
}[key] || key)

const defaultGrapes = [
  {
    key: 'tempranillo',
    name: 'Tempranillo',
    emoji: '🍷',
    color: '#C0392B',
    colorType: '紅葡萄',
    mainRegion: 'Rioja / Ribera del Duero',
    tagline: '西班牙之王——從 Rioja 到 Ribera 的紅酒主角',
    spainRole: '西班牙栽植面積最大的紅葡萄品種（約 200,000 ha），是 Rioja DOCa 與 Ribera del Duero DO 的主導品種。在不同產區有不同名稱：Rioja 稱 Tempranillo、Ribera 稱 Tinto Fino 或 Tinta del País、Toro 稱 Tinta de Toro、Catalunya 稱 Ull de Llebre、La Mancha 稱 Cencibel。',
    mainAreas: [
      { name: 'Rioja DOCa', note: '經典派標竿；Tempranillo + Garnacha + Mazuelo + Graciano 混釀' },
      { name: 'Ribera del Duero DO', note: 'Tinto Fino 為高海拔強壯版本（Vega Sicilia 之地）' },
      { name: 'Toro DO', note: 'Tinta de Toro 在貧瘠砂質土產生極厚單寧' },
      { name: 'Penedès / Catalunya', note: 'Ull de Llebre 較柔和' }
    ],
    cluster: '中等大小、緊密',
    ripening: '早熟（名稱來自 temprano「早」）',
    soils: '黏土石灰岩、砂質、白堊質皆可',
    climate: '溫和大陸氣候、需日夜溫差',
    metrics: { acidity: 3, tannin: 4, body: 4, fruit: 4, ageing: 5 },
    aromas: ['紅櫻桃', '李子', '皮革', '雪茄盒', '香草（美國橡木）', '可可', '乾燥香草', '無花果乾'],
    style: '中至飽滿酒體、單寧成熟、酸度中等、深紅寶石色。經美國橡木桶陳年（Rioja 傳統）發展香草、椰子、奶油焦糖；經法國橡木桶（現代派/Ribera 主流）則更精緻、香料感重。Gran Reserva 級可發展皮革、雪茄、無花果乾的優雅複雜度。',
    ageing: 'Crianza 5–10 年；Reserva 10–20 年；Gran Reserva 20–50 年（Vega Sicilia Único 50+ 年）',
    pairings: [
      'Cordero Lechal（烤乳羊，Ribera 經典）',
      'Jamón Ibérico（伊比利火腿）',
      'Manchego 乳酪（陳年版）',
      'Paella de Carne（肉類燉飯）',
      '燉牛尾、烤紅椒夾肉'
    ],
    examples: [
      { name: 'Vega Sicilia Único', note: 'Ribera del Duero 神級' },
      { name: 'López de Heredia Tondonia', note: 'Rioja 古典派標竿' },
      { name: 'CVNE Imperial Gran Reserva', note: '經典 Rioja' },
      { name: 'Pingus（Ribera）', note: '車庫酒膜拜款' }
    ]
  },
  {
    key: 'garnacha',
    name: 'Garnacha',
    emoji: '🍇',
    color: '#A8324A',
    colorType: '紅葡萄',
    mainRegion: 'Aragón / Priorat',
    tagline: '世界 Grenache 的故鄉——從輕盈到火熱',
    spainRole: '原生於西班牙 Aragón（Garnacha 名稱來自當地）。世界栽植面積第二大的紅葡萄品種，西班牙仍是其最大產地（約 60,000 ha）。在 Priorat DOQ 老藤產出世界級厚重酒款；在 Rioja 為混釀重要成員；在 Calatayud、Campo de Borja 為性價比之王。',
    mainAreas: [
      { name: 'Priorat DOQ', note: '老藤 + llicorella 板岩，產出世界級濃郁酒款' },
      { name: 'Calatayud / Campo de Borja DO', note: 'Aragón，老藤 Garnacha 性價比典範' },
      { name: 'Rioja DOCa', note: '混釀重要成員，Rioja Baja 主要品種' },
      { name: 'Navarra DO', note: 'Rosado（粉紅酒）主力品種' }
    ],
    cluster: '中等大小、產量高、易高糖度',
    ripening: '晚熟、需溫暖長秋季',
    soils: '貧瘠砂質、板岩（Priorat llicorella）、石灰',
    climate: '溫暖、需高日照、抗旱性強',
    metrics: { acidity: 2, tannin: 3, body: 4, fruit: 5, ageing: 4 },
    aromas: ['紅莓', '草莓', '黑櫻桃', '白胡椒', '甘草', '香料', '皮革', '無花果乾'],
    style: '飽滿酒體、酒精偏高（14-15%+）、單寧細緻、低酸度、奔放紅莓果香。年輕時鮮果與香料；老藤 Priorat 版本展現驚人深度（焦油、礦物、皮革）。淺色酒體卻能呈現飽滿口感是 Garnacha 的標記。',
    ageing: '一般款 3–5 年；Priorat Crianza 8–15 年；老藤頂級可達 30 年',
    pairings: [
      'Paella Valenciana（傳統西班牙海鮮飯）',
      '烤羊肩、燉羊肉',
      '辣味料理（Garnacha 低單寧不衝突辣度）',
      'Tapas（橄欖、火腿、堅果）',
      'Romesco 醬料理'
    ],
    examples: [
      { name: 'Clos Mogador（Priorat）', note: 'René Barbier 開創 Priorat 復興' },
      { name: 'Alvaro Palacios L\'Ermita', note: '老藤 Garnacha 神級' },
      { name: 'Bodegas Borsao（Campo de Borja）', note: '老藤性價比之王' },
      { name: 'Comando G（Sierra de Gredos）', note: '高海拔花崗岩老藤新派' }
    ]
  },
  {
    key: 'monastrell',
    name: 'Monastrell',
    emoji: '🌞',
    color: '#5C2334',
    colorType: '紅葡萄',
    mainRegion: 'Murcia / Valencia / Alicante',
    tagline: '地中海之火——西班牙東南的厚重紅酒',
    spainRole: '西班牙東南部地中海沿岸的旗艦紅葡萄（國際名稱為 Mourvèdre / Mataro）。極度抗旱、適應炎熱乾燥氣候。Jumilla DO、Yecla DO、Bullas DO 為主舞台，產出酒精高、單寧厚重、果香集中的酒款。',
    mainAreas: [
      { name: 'Jumilla DO（Murcia）', note: '主產區，老藤未嫁接（根瘤蚜病未到此地）' },
      { name: 'Yecla DO', note: '較小但品質精緻' },
      { name: 'Bullas DO', note: '高海拔版本' },
      { name: 'Alicante DO', note: 'Fondillón 傳統甜紅酒原料' }
    ],
    cluster: '小而緊密、厚皮',
    ripening: '極晚熟、需炎熱長秋季',
    soils: '貧瘠石灰岩、紅黏土',
    climate: '極炎熱地中海氣候、抗旱',
    metrics: { acidity: 3, tannin: 5, body: 5, fruit: 4, ageing: 4 },
    aromas: ['黑莓', '黑李', '皮革', '甘草', '黑胡椒', '煙燻', '可可', '泥土'],
    style: '深色集中、極厚單寧、酒精偏高（14-15%）、酒體飽滿。年輕時粗獷、單寧緊咬；經橡木桶陳年發展皮革、香料、可可深度。Jumilla 老藤未嫁接酒款近年備受國際關注，性價比極高。',
    ageing: 'Crianza 5–10 年；Reserva 10–20 年',
    pairings: [
      '燒烤紅肉、烤野味',
      'BBQ 料理',
      'Fideuá（短麵海鮮飯）',
      '陳年 Manchego',
      '辛辣燉肉醬料理'
    ],
    examples: [
      { name: 'Casa Castillo（Jumilla）', note: '老藤標竿' },
      { name: 'Juan Gil', note: 'Jumilla 現代化代表' },
      { name: 'Bodegas Castaño（Yecla）', note: '經典酒款' },
      { name: 'Enrique Mendoza Estrecho', note: 'Alicante 頂級' }
    ]
  },
  {
    key: 'albarino',
    name: 'Albariño',
    emoji: '🐟',
    color: '#5BA89F',
    colorType: '白葡萄',
    mainRegion: 'Galicia / Rías Baixas',
    tagline: '大西洋的禮物——西班牙最頂級白葡萄',
    spainRole: '加利西亞（Galicia）西北角 Rías Baixas DO 的招牌白葡萄。受大西洋強烈影響，產出酸度極高、礦物張力強、果香明亮的清新白酒。被視為西班牙最頂級的白葡萄品種。在葡萄牙稱 Alvarinho（Vinho Verde 主要品種）。',
    mainAreas: [
      { name: 'Rías Baixas DO（Galicia）', note: '主舞台，分 5 個子區（Val do Salnés 最古老）' },
      { name: 'Ribeiro DO', note: '內陸版本，較花香' },
      { name: 'Monterrei DO', note: '南部山谷' }
    ],
    cluster: '小而緊密、厚皮（適應潮濕氣候）',
    ripening: '中等（9 月底至 10 月初）',
    soils: '花崗岩、片岩、海岸沙質',
    climate: '海洋性、雨量多（年雨量 1500-2000mm）、涼爽',
    metrics: { acidity: 5, tannin: 0, body: 3, fruit: 5, ageing: 3 },
    aromas: ['桃子', '杏桃', '青蘋果', '檸檬皮', '柚子', '白花', '海風礦物', '杏仁'],
    style: '極高酸度、清新明亮、桃杏果香、海風鹹味與礦物張力。年輕時奔放果香、適合即飲；近年部分頂級酒莊嘗試橡木桶陳年或皮渣浸漬，產出可陳年 5-10 年的複雜版本。完美搭配大西洋海鮮。',
    ageing: '一般款 1–3 年；橡木桶陳年款 5–15 年',
    pairings: [
      '加利西亞海鮮（章魚 Pulpo a la Gallega）',
      '生蠔、扇貝',
      'Tapas 海鮮類',
      '烤魚、海鮮飯',
      '輕度白肉料理'
    ],
    examples: [
      { name: 'Pazo de Señoráns', note: 'Rías Baixas 經典' },
      { name: 'Do Ferreiro Cepas Vellas', note: '老藤頂級' },
      { name: 'Forjas del Salnés', note: '新派橡木桶版本' },
      { name: 'Bodegas Zárate', note: 'Val do Salnés 標竿' }
    ]
  },
  {
    key: 'verdejo',
    name: 'Verdejo',
    emoji: '🌿',
    color: '#9CAF40',
    colorType: '白葡萄',
    mainRegion: 'Castilla y León / Rueda',
    tagline: '草本清新——Rueda 的標誌白葡萄',
    spainRole: '西班牙中北部 Rueda DO 的招牌品種，11 世紀已記載於當地。曾被廢棄改種 Sauvignon Blanc，1970 年代復興後成為西班牙最受歡迎的白酒品種之一。風格介於 Sauvignon Blanc 的草本與 Albariño 的果香之間。',
    mainAreas: [
      { name: 'Rueda DO（Valladolid）', note: '主舞台，2008 年起 Rueda Verdejo 須含 ≥85% Verdejo' },
      { name: 'Cigales DO', note: '較少見、混釀使用' }
    ],
    cluster: '中等大小',
    ripening: '中等（9 月）、夜採以保留香氣',
    soils: '砂質、礫石、石灰岩',
    climate: '大陸型、極大日夜溫差（白日 35°C、夜間 15°C）',
    metrics: { acidity: 4, tannin: 0, body: 3, fruit: 4, ageing: 2 },
    aromas: ['茴香', '草本', '青蘋果', '葡萄柚', '燧石', '青草', '苦杏仁尾韻'],
    style: '中等酒體、酸度偏高、明顯草本與柑橘香、苦杏仁尾韻是品種特徵。多數使用不鏽鋼槽釀造保留新鮮度。Rueda Superior 等級含 ≥85% Verdejo，而部分頂級酒莊（如 José Pariente）以橡木桶陳年產出可陳年版本。',
    ageing: '一般款 1–3 年；橡木桶陳年款 5–10 年',
    pairings: [
      '海鮮 Tapas',
      'Croquetas（西班牙炸丸子）',
      'Boquerones（醃鯷魚）',
      '清淡白肉料理',
      'Manchego 乳酪（年輕版）'
    ],
    examples: [
      { name: 'José Pariente', note: 'Rueda Verdejo 標竿' },
      { name: 'Bodegas Naia', note: '老藤頂級' },
      { name: 'Marqués de Riscal', note: '商業大廠經典' },
      { name: 'Belondrade y Lurton', note: '橡木桶陳年版本' }
    ]
  }
]

const grapes = computed(() => props.slide.grapes || defaultGrapes)
const activeKey = ref(props.slide.defaultKey || grapes.value[0]?.key || 'tempranillo')
const activeGrape = computed(() => grapes.value.find((g) => g.key === activeKey.value) || grapes.value[0])
</script>

<style scoped>
.spain-grape-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fdf6ec 0%, #f5e3c8 100%);
  color: #2d1a0f;
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

.grape-tabs {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.grape-tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 26px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.9rem;
  color: #7a6048;
}

.grape-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(192, 57, 43, 0.15);
}

.grape-tab.active {
  box-shadow: 0 4px 14px rgba(192, 57, 43, 0.25);
}

.tab-emoji {
  font-size: 1.1rem;
}

.profile-content {
  flex: 1;
  overflow-y: auto;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(192, 57, 43, 0.12);
}

.card-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-header h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.card-tagline {
  font-size: 0.88rem;
  opacity: 0.95;
  font-style: italic;
}

.quick-stats {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.82rem;
  text-align: right;
}

.stat strong {
  opacity: 0.85;
  margin-right: 0.4rem;
}

.card-body {
  padding: 1.2rem 1.4rem;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.profile-block.full-width {
  grid-column: 1 / -1;
}

.profile-block h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #C0392B;
}

.profile-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

.profile-block li {
  margin-bottom: 0.3rem;
}

.profile-block p {
  margin: 0;
  color: #4a3826;
  line-height: 1.6;
  font-size: 0.9rem;
}

.metric-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.metric {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 0.5rem;
}

.metric-label {
  font-size: 0.82rem;
  color: #4a3826;
}

.metric-bar {
  height: 8px;
  background: #f3e9d8;
  border-radius: 4px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.4s ease;
}

.metric-value {
  font-size: 0.78rem;
  color: #7a6048;
  text-align: right;
}

.aromas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.aroma-chip {
  padding: 0.3rem 0.8rem;
  border: 1px solid;
  border-radius: 16px;
  font-size: 0.82rem;
  color: #4a3826;
}

.pairing-list {
  columns: 2;
  column-gap: 1.5rem;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.example-card {
  background: #fdf6ec;
  border-left: 3px solid #B8860B;
  padding: 0.6rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.example-card strong {
  color: #C0392B;
  font-size: 0.9rem;
}

.example-card span {
  color: #7a6048;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

@media (max-width: 768px) {
  .spain-grape-slide {
    padding: 1rem;
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .pairing-list {
    columns: 1;
  }
  .quick-stats {
    text-align: left;
  }
}
</style>
