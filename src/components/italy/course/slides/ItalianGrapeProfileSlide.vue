<template>
  <div class="italian-grape-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '義大利原生葡萄品種檔案' }}</h2>
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
          <img :src="`/images/italy/grape-${activeGrape.key}.svg`" class="igp-cluster-img" :alt="activeGrape.name" />
          <div class="quick-stats">
            <span class="stat"><strong>主產區</strong> {{ activeGrape.mainRegion }}</span>
            <span class="stat"><strong>顏色</strong> {{ activeGrape.color_type }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="profile-grid">
            <div class="profile-block">
              <h4>📍 在義大利的角色</h4>
              <p>{{ activeGrape.italyRole }}</p>
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
              <h4>🌟 代表 DOCG / 酒莊</h4>
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

const metricLabel = (key) => {
  const map = {
    acidity: '酸度',
    tannin: '單寧',
    body: '酒體',
    fruit: '果香強度',
    ageing: '陳年潛力'
  }
  return map[key] || key
}

const defaultGrapes = [
  {
    key: 'sangiovese',
    name: 'Sangiovese',
    emoji: '🍒',
    color: '#A8324A',
    color_type: '紅葡萄',
    mainRegion: 'Toscana',
    tagline: '托斯卡尼之心——義大利種植最廣的紅葡萄',
    italyRole: '義大利栽植面積最大的紅葡萄（約 71,000 ha），幾乎是托斯卡尼紅酒的代名詞。從入門 Chianti 到頂級 Brunello di Montalcino 全是 Sangiovese（或其無性繁殖系）。',
    mainAreas: [
      { name: 'Chianti Classico', note: '托斯卡尼經典產區，70%+ Sangiovese' },
      { name: 'Brunello di Montalcino', note: '100% Sangiovese Grosso（BBS-11 無性系），最高表達' },
      { name: 'Vino Nobile di Montepulciano', note: '70%+ Sangiovese（當地稱 Prugnolo Gentile）' },
      { name: 'Romagna', note: 'Sangiovese di Romagna，較輕盈日常風格' }
    ],
    cluster: '中等大小、緊密',
    ripening: '晚熟（10 月中旬）',
    soils: 'Galestro（片岩泥灰）、Alberese（石灰岩）',
    climate: '溫暖乾燥、需充足日照',
    metrics: { acidity: 5, tannin: 4, body: 3, fruit: 4, ageing: 4 },
    aromas: ['酸櫻桃', '李子', '番茄葉', '皮革', '雪茄盒', '紫羅蘭', '香料', '泥土'],
    style: '高酸度、中至高單寧、酒體中等、酸櫻桃為核心。年輕時鮮果與草本，陳年後發展皮革、雪茄、皮革、無花果。是「餐桌之酒」的典範——其酸度完美襯托番茄基底料理。',
    ageing: 'Chianti 3–8 年；Chianti Classico Riserva 8–15 年；Brunello 15–30 年；Brunello Riserva 25–50 年',
    pairings: [
      '佛羅倫斯 T 骨牛排（Bistecca alla Fiorentina）',
      '番茄基底義大利麵（Bolognese、Puttanesca）',
      'Pecorino Toscano 乳酪',
      '野豬燉肉（Cinghiale）',
      'Crostini con Fegatini（雞肝塔）'
    ],
    examples: [
      { name: 'Biondi-Santi', note: 'Brunello 創始者' },
      { name: 'Soldera Case Basse', note: 'Brunello 神級' },
      { name: 'Antinori（Tignanello）', note: 'Super Tuscan 開創者' },
      { name: 'Castello di Ama / Fontodi', note: 'Chianti Classico 標竿' }
    ]
  },
  {
    key: 'nebbiolo',
    name: 'Nebbiolo',
    emoji: '🌫️',
    color: '#7B1F2A',
    color_type: '紅葡萄',
    mainRegion: 'Piemonte',
    tagline: '霧之葡萄——義大利的紅酒之王',
    italyRole: '皮蒙特最尊貴的品種（名稱源自 nebbia 義大利文「霧」）。雖只占皮蒙特栽植面積 6%，卻釀造出義大利兩大頂級紅酒：Barolo 與 Barbaresco。世界上最難駕馭的紅葡萄之一。',
    mainAreas: [
      { name: 'Barolo DOCG', note: 'Langhe 11 個村莊，最強壯結構' },
      { name: 'Barbaresco DOCG', note: '較 Barolo 優雅、陳年要求較短' },
      { name: 'Roero / Ghemme / Gattinara', note: 'Piemonte 北部，較少見的 Nebbiolo' },
      { name: 'Valtellina（Lombardia）', note: '北部山區、稱 Chiavennasca' }
    ],
    cluster: '中等、緊實',
    ripening: '極晚熟（10 月底至 11 月初）',
    soils: 'Tortonian 藍灰泥灰岩（La Morra/Barolo）vs Helvetian 紅褐砂質（Serralunga/Monforte）',
    climate: '需長秋季、霧氣與冷涼夜晚',
    metrics: { acidity: 5, tannin: 5, body: 4, fruit: 3, ageing: 5 },
    aromas: ['紅櫻桃', '玫瑰', '焦油', '皮革', '松露', '甘草', '香料', '無花果乾'],
    style: '極高酸度 + 極高單寧 + 中等酒體 + 淺色（橘紅）= 結構之王。年輕時封閉、單寧粗糲；陳年後展現玫瑰、焦油（rose & tar）、松露、香料的複雜深度。「淺色卻有力」是 Nebbiolo 的獨特標記。',
    ageing: 'Barolo 15–40 年；Barolo Riserva 25–60+ 年；Barbaresco 10–30 年',
    pairings: [
      'Brasato al Barolo（Barolo 燉牛肉）',
      'Tajarin（Piemonte 蛋黃手工麵）',
      '白松露料理（Alba 白松露）',
      'Castelmagno、Bra 等 Piemonte 老乳酪',
      '燉野味（鹿、雉雞）'
    ],
    examples: [
      { name: 'Giacomo Conterno（Monfortino）', note: '世界 Barolo 最高表達' },
      { name: 'Bartolo Mascarello', note: '傳統派標竿' },
      { name: 'Bruno Giacosa', note: 'Barbaresco 之神' },
      { name: 'Gaja', note: '現代化先驅' }
    ]
  },
  {
    key: 'barbera',
    name: 'Barbera',
    emoji: '🍷',
    color: '#5C2334',
    color_type: '紅葡萄',
    mainRegion: 'Piemonte',
    tagline: '皮蒙特的日常英雄——高酸無單寧的萬能餐酒',
    italyRole: '皮蒙特栽植面積最大的紅葡萄（45,000 ha），是當地人日常餐桌的主力。比 Nebbiolo 更易栽培、產量更穩定。Barbera d\'Asti 與 Barbera d\'Alba 為兩大 DOCG/DOC 主舞台。',
    mainAreas: [
      { name: 'Barbera d\'Asti DOCG', note: '酒體較豐潤、果香奔放' },
      { name: 'Barbera d\'Alba DOC', note: '較緊實、可陳年' },
      { name: 'Nizza DOCG', note: '2014 升級的頂級 Barbera 子產區' },
      { name: 'Oltrepò Pavese（Lombardia）', note: '北部多用於日常紅酒' }
    ],
    cluster: '中等、產量高',
    ripening: '中等（9 月底至 10 月初）',
    soils: '黏土石灰、砂質土皆可',
    climate: '適應力強、忌過熱',
    metrics: { acidity: 5, tannin: 2, body: 3, fruit: 5, ageing: 3 },
    aromas: ['黑櫻桃', '黑莓', '李子', '紫羅蘭', '香料', '可可（陳年）'],
    style: '極高酸度（甚至高過 Nebbiolo）+ 極低單寧 + 飽滿果香，是「酸度撐起的紅酒」。年輕時鮮果奔放、易飲性極高；頂級單一園版本（Nizza、橡木桶陳年）可發展香料、巧克力深度。',
    ageing: '基礎款 2–4 年；Riserva / Nizza 5–15 年；頂級可達 20 年',
    pairings: [
      '番茄醬料理（彌補酸度）',
      '皮蒙特 Bagna Càuda（蒜油熱沾醬）',
      '披薩、義大利麵',
      'Salumi（風乾肉腸）',
      '中等熟成乳酪'
    ],
    examples: [
      { name: 'Vietti（Scarrone）', note: '單一園 Barbera 標竿' },
      { name: 'Braida（Bricco dell\'Uccellone）', note: '現代風格代表（Giacomo Bologna 創）' },
      { name: 'Coppo（Pomorosso）', note: 'Barbera d\'Asti 經典' },
      { name: 'Michele Chiarlo（La Court）', note: 'Nizza DOCG 領導者' }
    ]
  },
  {
    key: 'aglianico',
    name: 'Aglianico',
    emoji: '🌋',
    color: '#3E1A2E',
    color_type: '紅葡萄',
    mainRegion: 'Campania / Basilicata',
    tagline: '南義之巴羅洛——火山土壤上的鋼鐵單寧',
    italyRole: '義大利南方最高貴的紅葡萄品種，常被稱為「Sud Italia 的 Barolo」。種植於 Campania（Taurasi DOCG）與 Basilicata（Aglianico del Vulture DOCG）的火山土壤。極高單寧 + 極高酸度，需長期陳年。',
    mainAreas: [
      { name: 'Taurasi DOCG（Campania）', note: '火山岩、海拔 400-700m，最知名' },
      { name: 'Aglianico del Vulture DOCG（Basilicata）', note: '死火山 Monte Vulture 山坡' },
      { name: 'Cilento DOC', note: 'Campania 海岸版本，較柔軟' },
      { name: 'Irpinia DOC', note: 'Campania 內陸日常款' }
    ],
    cluster: '緊實、厚皮',
    ripening: '極晚熟（10 月底至 11 月）',
    soils: '火山岩、火山灰、凝灰岩',
    climate: '溫暖但海拔帶來夜間降溫',
    metrics: { acidity: 5, tannin: 5, body: 4, fruit: 4, ageing: 5 },
    aromas: ['黑櫻桃', '黑李', '皮革', '煙燻', '甘草', '黑胡椒', '雪茄', '可可'],
    style: '深色集中、極厚單寧、極高酸度、酒體飽滿。年輕時粗獷封閉、單寧緊咬；需 8-10 年才開始展現皮革、煙燻、甘草、雪茄複雜度。是世界少數可與 Barolo、Brunello 並列的「南義鋼鐵紅酒」。',
    ageing: 'Taurasi DOCG 10–25 年；Riserva 20–40 年；頂級酒款 30+ 年',
    pairings: [
      '燉羊肉（Agnello al Forno）',
      '南義紅醬料理（La Genovese）',
      'Caciocavallo Podolico 老乳酪',
      '燒烤野味、慢燉牛肉',
      '濃郁番茄燉肉醬'
    ],
    examples: [
      { name: 'Mastroberardino（Radici）', note: 'Taurasi 復興者，1878 立業' },
      { name: 'Feudi di San Gregorio', note: '現代 Campania 標竿' },
      { name: 'Paternoster（Don Anselmo）', note: 'Aglianico del Vulture 經典' },
      { name: 'Elena Fucci（Titolo）', note: 'Vulture 新世代女釀酒師' }
    ]
  },
  {
    key: 'montepulciano',
    name: 'Montepulciano',
    emoji: '🍇',
    color: '#6B2E3D',
    color_type: '紅葡萄',
    mainRegion: 'Abruzzo',
    tagline: '中義之力——別跟 Vino Nobile 混淆！',
    italyRole: '義大利第二大栽植紅葡萄（35,000+ ha），主要種植於 Abruzzo（Montepulciano d\'Abruzzo DOC，產量極大）。注意：「Montepulciano d\'Abruzzo」是品種，而托斯卡尼的「Vino Nobile di Montepulciano」是地名（用 Sangiovese 釀造）！',
    mainAreas: [
      { name: 'Montepulciano d\'Abruzzo DOC', note: '主舞台，日常紅酒主力' },
      { name: 'Colline Teramane DOCG', note: 'Abruzzo 北部高品質產區' },
      { name: 'Conero DOCG（Marche）', note: 'Marche 海岸頂級表達' },
      { name: 'Offida Rosso DOCG', note: 'Marche 內陸混釀' }
    ],
    cluster: '中等大小、產量高',
    ripening: '晚熟（10 月）',
    soils: '黏土、石灰、火山灰',
    climate: '溫暖、Abruzzo 山區夜涼',
    metrics: { acidity: 4, tannin: 3, body: 4, fruit: 5, ageing: 3 },
    aromas: ['黑莓', '李子', '黑櫻桃', '甘草', '黑胡椒', '皮革'],
    style: '深色、果香奔放、單寧中等、酸度中高、酒體飽滿。基礎款適合日常飲用（Cerasuolo d\'Abruzzo 為其粉紅版本）；頂級 Conero / Colline Teramane 可陳年 10-20 年並發展皮革、香料深度。',
    ageing: '基礎款 2–5 年；Riserva 8–15 年；Conero DOCG 10–20 年',
    pairings: [
      '羔羊燒烤（Arrosticini，Abruzzo 招牌）',
      '番茄燉肉醬料理',
      'Spaghetti alla Chitarra（Abruzzo 手工麵）',
      'Pecorino di Farindola',
      '中等熟成義式臘腸'
    ],
    examples: [
      { name: 'Emidio Pepe', note: '自然酒先驅、可陳年 50+ 年' },
      { name: 'Valentini', note: 'Abruzzo 神級酒莊' },
      { name: 'Masciarelli', note: '現代化主力' },
      { name: 'Umani Ronchi（Cùmaro Conero）', note: 'Marche Conero 標竿' }
    ]
  }
]

const grapes = computed(() => props.slide.grapes || defaultGrapes)
const activeKey = ref(props.slide.defaultKey || grapes.value[0]?.key || 'sangiovese')
const activeGrape = computed(
  () => grapes.value.find((g) => g.key === activeKey.value) || grapes.value[0]
)
</script>

<style scoped>
.italian-grape-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
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
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.15);
}

.grape-tab.active {
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
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
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.12);
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

.igp-cluster-img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.4);
  object-fit: cover;
  flex-shrink: 0;
  align-self: center;
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
  color: #7B1F2A;
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
  background: #faf3e8;
  border-left: 3px solid #B8860B;
  padding: 0.6rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.example-card strong {
  color: #7B1F2A;
  font-size: 0.9rem;
}

.example-card span {
  color: #7a6048;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

@media (max-width: 768px) {
  .italian-grape-slide {
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
