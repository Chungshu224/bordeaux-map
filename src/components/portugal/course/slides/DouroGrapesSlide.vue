<template>
  <div class="douro-grapes-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Douro 五大葡萄品種' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || 'Douro 河谷雖種植超過 100 種葡萄，但 5 個品種主導頂級 Port 與 Douro DOC 紅酒：Touriga Nacional、Touriga Franca、Tinta Roriz、Tinta Barroca、Tinto Cão。' }}
      </p>
    </div>

    <div class="grape-tabs">
      <button
        v-for="(grape, i) in grapes"
        :key="grape.key"
        class="grape-tab"
        :class="{ active: activeKey === grape.key }"
        :style="{
          borderColor: activeKey === grape.key ? grape.color : 'transparent',
          color: activeKey === grape.key ? grape.color : '#6b4226'
        }"
        @click="activeKey = grape.key"
      >
        <span class="tab-num">{{ i + 1 }}</span>
        <span class="tab-name">{{ grape.name }}</span>
        <span class="tab-status" v-if="grape.status">{{ grape.status }}</span>
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
            <span class="stat"><strong>佔比</strong> {{ activeGrape.share }}</span>
            <span class="stat"><strong>角色</strong> {{ activeGrape.role }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="profile-grid">
            <div class="profile-block">
              <h4>🌿 品種特性</h4>
              <ul>
                <li><strong>果串：</strong>{{ activeGrape.cluster }}</li>
                <li><strong>成熟期：</strong>{{ activeGrape.ripening }}</li>
                <li><strong>抗病性：</strong>{{ activeGrape.disease }}</li>
                <li><strong>產量：</strong>{{ activeGrape.yield }}</li>
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
                >{{ aroma }}</span>
              </div>
            </div>

            <div class="profile-block">
              <h4>🍷 在 Port / Douro 中的角色</h4>
              <p>{{ activeGrape.usage }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>📍 風土偏好</h4>
              <p>{{ activeGrape.terroir }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>🌟 代表酒款 / 酒莊</h4>
              <div class="examples-grid">
                <div v-for="ex in activeGrape.examples" :key="ex.name" class="example-card">
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
            </div>

            <div class="profile-block full-width" v-if="activeGrape.keyFact">
              <h4>💡 重點知識</h4>
              <p class="key-fact">{{ activeGrape.keyFact }}</p>
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
    key: 'touriga-nacional',
    name: 'Touriga Nacional',
    emoji: '👑',
    color: '#5C2334',
    status: '葡萄牙之王',
    share: '5-10% 種植量但常佔混釀 30-40%',
    role: '靈魂品種',
    tagline: 'Douro 之王——葡萄牙最頂級紅葡萄',
    cluster: '小而緊密、果粒小、皮厚',
    ripening: '中至晚熟',
    disease: '抗病性中等',
    yield: '極低（10-20 hL/ha），易落果',
    metrics: { acidity: 4, tannin: 5, body: 5, fruit: 5, ageing: 5 },
    aromas: ['黑莓', '紫羅蘭', '黑加侖', '甘草', '香料', '岩石', '玫瑰花瓣', '森林莓果'],
    usage: '頂級 Vintage Port 與 Douro DOC 紅酒的核心品種。提供結構、深度、單寧與長久陳年潛力。在頂級酒款中常佔混釀的 30-40%（雖然種植面積只佔 5-10%）。',
    terroir: 'Douro 板岩坡地（schist），尤其是 Cima Corgo 與 Douro Superior 的高海拔（300-600m）梯田。喜愛貧瘠片岩、極端日夜溫差。',
    examples: [
      { name: 'Niepoort Batuta', note: 'Touriga Nacional 為主的頂級 Douro 紅' },
      { name: 'Quinta do Vale Meão', note: '單一葡萄園頂級' },
      { name: 'Vintage Port（所有頂級酒莊）', note: 'Touriga Nacional 為核心' }
    ],
    keyFact: '20 世紀中期 Touriga Nacional 種植面積一度極低（產量低、易落果），1980 年代 João Nicolau de Almeida（Ramos Pinto）研究後復興，現已是葡萄牙最被推崇的紅葡萄品種。也是葡萄牙南部 Dão DOC 的招牌品種。'
  },
  {
    key: 'touriga-franca',
    name: 'Touriga Franca',
    emoji: '🌹',
    color: '#7B1F2A',
    status: '混釀主力',
    share: 'Douro 種植量第一（~20%）',
    role: '骨架與香氣',
    tagline: 'Douro 種植量第一——花香與單寧的平衡品種',
    cluster: '中等大小、緊密',
    ripening: '晚熟',
    disease: '抗病性高（比 Touriga Nacional 強）',
    yield: '中等（30-40 hL/ha）',
    metrics: { acidity: 3, tannin: 4, body: 4, fruit: 5, ageing: 4 },
    aromas: ['玫瑰花瓣', '紫羅蘭', '黑莓', '紅櫻桃', '香料', '岩石', '雪松'],
    usage: '是 Port 混釀中佔比最高的品種，提供豐富花香、紅黑莓果香與優雅單寧結構。比 Touriga Nacional 更易栽培，產量穩定，是 Douro 河谷的「中流砥柱」。',
    terroir: 'Douro 各子區皆有種植；尤其在 Cima Corgo 與 Douro Superior 表現佳。適應板岩、片岩。',
    examples: [
      { name: 'Quinta do Crasto Reserva', note: '老藤混釀典範' },
      { name: 'Symington Vintage Ports', note: '混釀主力品種' },
      { name: 'Quinta do Noval Vintage', note: '經典混釀' }
    ],
    keyFact: 'Touriga Franca 曾被誤認為 Touriga Nacional 的近親，但 DNA 分析證實兩者並無直接親緣關係。現為葡萄牙種植面積第二大紅葡萄品種，僅次於 Tinta Roriz。'
  },
  {
    key: 'tinta-roriz',
    name: 'Tinta Roriz（= Tempranillo）',
    emoji: '🍇',
    color: '#A8324A',
    status: '與西班牙共享',
    share: 'Douro 種植量第二（~15-20%）',
    role: '果香與柔順度',
    tagline: '葡萄牙的 Tempranillo——西班牙來的客人',
    cluster: '中等緊密、皮厚',
    ripening: '早熟（temprano = 早）',
    disease: '抗病性中等',
    yield: '中等',
    metrics: { acidity: 3, tannin: 4, body: 4, fruit: 4, ageing: 4 },
    aromas: ['紅櫻桃', '黑李', '皮革', '雪茄盒', '香料', '紅椒粉'],
    usage: '與西班牙 Tempranillo 為同一品種。提供果香、柔順單寧與較早成熟的特性，平衡 Touriga Nacional 與 Touriga Franca 的厚重感。在 Douro DOC 紅酒中常佔 20-30%。',
    terroir: '適應 Douro 各子區；在較涼爽的 Baixo Corgo 表現果香最佳；在 Douro Superior 則發展更厚的酒體。',
    examples: [
      { name: 'Quinta do Vallado', note: '經典 Douro DOC' },
      { name: 'Wine & Soul Pintas', note: '老藤混釀' },
      { name: 'Reserve Ports', note: '混釀比例可達 20-30%' }
    ],
    keyFact: '葡萄牙南部 Alentejo DOC 稱此品種為「Aragonez」（取自西班牙 Aragón 之名）。這同一品種在西班牙 Rioja 是 Tempranillo、在 Ribera del Duero 是 Tinto Fino、在葡萄牙 Douro 是 Tinta Roriz、在 Alentejo 是 Aragonez。'
  },
  {
    key: 'tinta-barroca',
    name: 'Tinta Barroca',
    emoji: '🌞',
    color: '#8B0000',
    status: '糖度與酒體',
    share: 'Douro ~10-15%',
    role: '糖度與飽滿酒體',
    tagline: '高糖度品種——提供 Port 必需的甜度',
    cluster: '大、緊密',
    ripening: '中等',
    disease: '抗病性中等；對熱力敏感',
    yield: '高',
    metrics: { acidity: 2, tannin: 3, body: 5, fruit: 4, ageing: 3 },
    aromas: ['黑加侖', '紅醋栗', '咖啡', '巧克力', '李子', '焦糖'],
    usage: '糖度極高，是 Port 釀造中提供必需糖度的關鍵品種（Port 為加烈甜酒）。但低酸度限制了它在頂級 Vintage 的比例。在 Tawny 與基礎 Ruby 中佔比較高。',
    terroir: '偏愛較涼爽的高海拔（北坡），可避免低酸度問題。在 Baixo Corgo 與 Cima Corgo 較常見。',
    examples: [
      { name: 'Tawny / Ruby Port 基礎款', note: '提供糖度' },
      { name: 'Quinta do Crasto Touriga Nacional', note: '混釀夥伴' }
    ],
    keyFact: '由於低酸度與對熱力敏感，全球暖化使 Tinta Barroca 在 Douro 較炎熱年份品質下降。部分酒莊正將其遷往較涼爽的高海拔葡萄園重新種植。'
  },
  {
    key: 'tinto-cao',
    name: 'Tinto Cão',
    emoji: '🐶',
    color: '#4A0E1F',
    status: '稀有古老',
    share: 'Douro <2%（最稀有）',
    role: '酸度與優雅複雜度',
    tagline: '紅狗——產量極低但極優雅',
    cluster: '極小、稀疏',
    ripening: '晚熟',
    disease: '抗病性高',
    yield: '極低（5-15 hL/ha）',
    metrics: { acidity: 5, tannin: 4, body: 3, fruit: 3, ageing: 5 },
    aromas: ['紅櫻桃', '玫瑰花瓣', '紫羅蘭', '香料', '雪松', '礦物'],
    usage: '5 大品種中最稀有，因產量極低而長期被酒農拋棄。但其高酸度、優雅單寧與長久陳年潛力使頂級酒莊重新重視。在頂級 Vintage Port 與 Douro 紅酒中常佔少量但關鍵的 5-15%。',
    terroir: '極度晚熟，只能在 Douro Superior 與 Cima Corgo 較炎熱地區成熟。需要老藤才能展現潛力。',
    examples: [
      { name: 'Niepoort 老藤混釀', note: '常含 Tinto Cão' },
      { name: 'Quinta do Noval Nacional', note: '頂級老藤混釀' },
      { name: 'Top Vintage Ports', note: '5-15% 比例提供酸度結構' }
    ],
    keyFact: 'Tinto Cão 名稱意為「紅狗」，源於其堅韌耐病的特性（如狗一般忠實）。1990 年代後因頂級酒莊的重視，種植面積緩慢回升。被視為 Douro 的「Petit Verdot」——少量但關鍵。'
  }
]

const grapes = computed(() => props.slide.grapes || defaultGrapes)
const activeKey = ref(props.slide.defaultKey || 'touriga-nacional')
const activeGrape = computed(() => grapes.value.find((g) => g.key === activeKey.value) || grapes.value[0])
</script>

<style scoped>
.douro-grapes-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #f9f3ec 0%, #f1dcc4 100%);
  color: #3a2415;
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

.grape-tabs {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.grape-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 26px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.9rem;
  color: #6b4226;
}

.grape-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.15);
}

.grape-tab.active {
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
}

.tab-num {
  background: #B8860B;
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
}

.tab-status {
  font-size: 0.72rem;
  background: #fdf6ec;
  color: #B8860B;
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-weight: 500;
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
  color: #6b4226;
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

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.example-card {
  background: #fdf6ec;
  border-left: 3px solid #B8860B;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.example-card strong {
  color: #7B1F2A;
  font-size: 0.88rem;
}

.example-card span {
  color: #6b4226;
  font-size: 0.78rem;
  margin-top: 0.2rem;
}

.key-fact {
  background: linear-gradient(135deg, #fdf6ec 0%, #f1dcc4 100%);
  padding: 0.7rem 0.9rem;
  border-left: 3px solid #B8860B;
  border-radius: 4px;
  font-size: 0.85rem !important;
}

@media (max-width: 768px) {
  .douro-grapes-slide {
    padding: 1rem;
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .quick-stats {
    text-align: left;
  }
}
</style>
