<template>
  <div class="bourgogne-grape-profile">
    <div class="slide-header">
      <h2>{{ slide.title || '布根地葡萄品種檔案' }}</h2>
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
          <h3>{{ activeGrape.emoji }} {{ activeGrape.name }}</h3>
          <span class="card-tagline">{{ activeGrape.tagline }}</span>
        </div>

        <div class="card-body">
          <div class="profile-grid">
            <div class="profile-block">
              <h4>📍 在布根地的角色</h4>
              <p>{{ activeGrape.bourgogneRole }}</p>
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

            <div class="profile-block">
              <h4>🍷 風格特徵</h4>
              <p>{{ activeGrape.style }}</p>
              <p style="margin-top: 0.5rem;"><strong>陳年潛力：</strong>{{ activeGrape.ageing }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>🍽️ 餐酒搭配</h4>
              <ul class="pairing-list">
                <li v-for="(pair, i) in activeGrape.pairings" :key="i">{{ pair }}</li>
              </ul>
            </div>

            <div class="profile-block full-width">
              <h4>🌟 經典酒款代表</h4>
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

const defaultGrapes = [
  {
    key: 'pinot-noir',
    name: 'Pinot Noir',
    emoji: '🍒',
    color: '#7B1F2A',
    tagline: '世界最難駕馭的紅葡萄品種，布根地的紅寶石',
    bourgogneRole: '布根地紅葡萄酒的唯一主角（除 Beaujolais 外）。極度敏感於風土，每塊 climat 都展現獨特個性。',
    mainAreas: [
      { name: 'Côte de Nuits', note: '結構紮實、陳年潛力最強，Gevrey、Vosne-Romanée' },
      { name: 'Côte de Beaune', note: '較柔軟果香，Pommard、Volnay、Beaune' },
      { name: 'Côte Chalonnaise', note: 'Mercurey、Givry，性價比優秀' }
    ],
    cluster: '小而緊密、薄皮易感染霜霉與灰黴',
    ripening: '早熟（早 Cabernet 約 2 週）',
    soils: '石灰岩、泥灰岩混合土；Côte d\'Or 的 Bajocian/Bathonian 階',
    climate: '涼爽至溫和、需充足日照但忌過熱',
    aromas: ['黑櫻桃', '覆盆子', '紫羅蘭', '蘑菇', '森林地表', '皮革', '香料', '玫瑰'],
    style: '酒體中等、單寧細緻、酸度高、極為透明的風土表達。年輕時鮮明紅色水果，陳年後發展為松露、皮革、蘑菇的複雜香氣。',
    ageing: 'Village 5–15 年；Premier Cru 10–25 年；Grand Cru 15–50+ 年',
    pairings: [
      '布根地紅酒燉牛肉（Bœuf Bourguignon）',
      '烤鴨胸、油封鴨腿',
      '蘑菇料理（雞油菌、松露燉飯）',
      '陳年硬質乳酪（Comté、Époisses）',
      '烤雞、低溫嫩煎乳鴿'
    ],
    examples: [
      { name: 'Domaine de la Romanée-Conti', note: 'DRC，世界最頂尖' },
      { name: 'Domaine Leroy', note: '生物動力法先驅' },
      { name: 'Henri Jayer / Méo-Camuzet', note: 'Vosne-Romanée 大師' },
      { name: 'Armand Rousseau', note: 'Gevrey-Chambertin 之王' }
    ]
  },
  {
    key: 'chardonnay',
    name: 'Chardonnay',
    emoji: '🌼',
    color: '#D4A574',
    tagline: '世界白葡萄之后，從石灰岩中綻放',
    bourgogneRole: '布根地白酒的絕對主角，Chablis、Côte de Beaune、Mâconnais 都以它為核心。沒有強烈品種香氣，是「風土的透明畫布」。',
    mainAreas: [
      { name: 'Chablis', note: 'Kimmeridgian 泥灰岩，骨感礦物' },
      { name: 'Côte de Beaune', note: 'Meursault、Puligny、Chassagne，世界最頂級白酒' },
      { name: 'Mâconnais', note: 'Pouilly-Fuissé、Saint-Véran，溫暖飽滿' }
    ],
    cluster: '中等緊密、產量易過高需控制',
    ripening: '早熟、適應冷涼氣候',
    soils: '最愛石灰岩、泥灰岩；亦適應 Kimmeridgian、Bathonian',
    climate: '涼爽至溫和，過熱會失去酸度與礦物張力',
    aromas: ['青蘋果', '檸檬', '白花', '榛果', '奶油', '蜂蜜', '燧石', '烤麵包'],
    style: 'Chablis 風格清瘦銳利；Côte de Beaune 飽滿圓潤、橡木桶協調；Mâcon 風格成熟果香、輕度礦物。陳年後發展蜂蠟、烤堅果、煙燻。',
    ageing: 'Chablis 5–15 年；Côte de Beaune 10–30 年；頂級 Montrachet 30+ 年',
    pairings: [
      '生蠔、海膽（Chablis）',
      '奶油龍蝦、扇貝（Meursault）',
      '雞肉與奶油醬料理',
      '陳年 Comté、Beaufort 乳酪',
      '河鮮（鱸魚、鮭魚）'
    ],
    examples: [
      { name: 'Domaine Leflaive', note: 'Puligny-Montrachet 標竿' },
      { name: 'Coche-Dury / Comte Lafon', note: 'Meursault 雙雄' },
      { name: 'Raveneau / Dauvissat', note: 'Chablis 頂級' },
      { name: 'Domaine de la Romanée-Conti Montrachet', note: '頂峰中的頂峰' }
    ]
  },
  {
    key: 'aligote',
    name: 'Aligoté',
    emoji: '🍋',
    color: '#A8C77B',
    tagline: '布根地的「另一個白」——清新明亮的日常英雄',
    bourgogneRole: '次要白葡萄品種，主要用於 Bourgogne Aligoté AOC 與經典雞尾酒「Kir」（黑醋栗利口酒 + Aligoté）。近年備受新世代釀酒師重視。',
    mainAreas: [
      { name: 'Bouzeron', note: '唯一單一品種 Village AOC（100% Aligoté）' },
      { name: 'Côte Chalonnaise', note: '主要產地，Bourgogne Aligoté AOC' },
      { name: 'Hautes-Côtes', note: '高海拔地塊保留品種特色' }
    ],
    cluster: '較大、易高產（需嚴格控量保品質）',
    ripening: '早熟（與 Pinot Noir 相近）',
    soils: '石灰岩、黏土石灰皆可，但石灰岩最佳',
    climate: '涼爽，溫差大有助於保留高酸度',
    aromas: ['青檸', '青蘋果', '白花', '柑橘皮', '燧石', '檸檬草'],
    style: '極高酸度、纖瘦、純淨柑橘與白花香，幾乎不過桶。新世代頂級酒款（如 Coche-Dury、d\'Auvenay）展現驚人陳年潛力。',
    ageing: '基礎款 1–3 年；頂級單一園 5–15 年',
    pairings: [
      '生蠔、貝類（最經典）',
      '醃漬鯡魚、煙燻鮭魚',
      'Kir 雞尾酒基酒',
      '清淡白魚料理',
      '山羊乳酪（Crottin de Chavignol）'
    ],
    examples: [
      { name: 'Domaine de Villaine A & P', note: 'Bouzeron 標竿' },
      { name: 'Coche-Dury Bourgogne Aligoté', note: '罕見頂級表達' },
      { name: 'Domaine d\'Auvenay (Lalou Bize-Leroy)', note: '單一園 Aligoté 神級' },
      { name: 'Sylvain Pataille', note: 'Marsannay 新世代復興者' }
    ]
  },
  {
    key: 'gamay',
    name: 'Gamay',
    emoji: '🍇',
    color: '#8B3A4D',
    tagline: '被流放的紅葡萄——Beaujolais 的靈魂',
    bourgogneRole: '1395 年被 Philippe le Hardi 公爵下令逐出 Côte d\'Or（為保護 Pinot Noir）。退守 Beaujolais 後反而找到完美風土。布根地僅見於 Passe-Tout-Grains（與 Pinot Noir 混釀）。',
    mainAreas: [
      { name: 'Beaujolais', note: '主要舞台，10 個 Cru（Morgon、Fleurie、Moulin-à-Vent 等）' },
      { name: 'Mâconnais 邊緣', note: '少量栽植' },
      { name: 'Bourgogne Passe-Tout-Grains', note: '與 Pinot Noir 混釀（最少 30% Pinot）' }
    ],
    cluster: '中等大小、產量高、易栽培',
    ripening: '早熟',
    soils: '花崗岩（Beaujolais 北部 Cru）、片麻岩',
    climate: '溫和、半大陸型',
    aromas: ['草莓', '覆盆子', '紅醋栗', '香蕉（半 carbonic）', '紫羅蘭', '黑胡椒', '花崗岩礦物'],
    style: 'Beaujolais Nouveau 鮮果輕盈；10 Crus 結構紮實、可陳年。半 carbonic maceration（部分整串浸漬）保留鮮明果香。',
    ageing: 'Nouveau 6 個月；Village 2–4 年；Crus（尤其 Morgon、Moulin-à-Vent）5–20 年',
    pairings: [
      '熟食拼盤、火腿',
      '里昂式料理（Bouchon）',
      '烤雞、烤豬肉',
      'Brie、Camembert 軟質乳酪',
      '輕度溫和的鴨肉料理'
    ],
    examples: [
      { name: 'Marcel Lapierre', note: 'Morgon 自然酒先驅' },
      { name: 'Jean Foillard / Jean-Paul Thévenet', note: 'Morgon 四人幫' },
      { name: 'Château des Jacques', note: 'Moulin-à-Vent 標竿' },
      { name: 'Domaine de la Madone', note: 'Fleurie 經典' }
    ]
  }
]

const grapes = computed(() => props.slide.grapes || defaultGrapes)
const activeKey = ref(props.slide.defaultKey || grapes.value[0]?.key || 'pinot-noir')
const activeGrape = computed(
  () => grapes.value.find((g) => g.key === activeKey.value) || grapes.value[0]
)
</script>

<style scoped>
.bourgogne-grape-profile {
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

.grape-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.grape-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  font-size: 0.95rem;
  color: #7a6048;
}

.grape-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(90, 58, 26, 0.15);
}

.grape-tab.active {
  box-shadow: 0 4px 14px rgba(90, 58, 26, 0.25);
}

.tab-emoji {
  font-size: 1.2rem;
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
  box-shadow: 0 4px 14px rgba(90, 58, 26, 0.12);
}

.card-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card-header h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.card-tagline {
  font-size: 0.9rem;
  opacity: 0.95;
  font-style: italic;
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
  color: #5a3a1a;
}

.profile-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.88rem;
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

.aromas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.aroma-chip {
  padding: 0.3rem 0.8rem;
  border: 1px solid;
  border-radius: 16px;
  font-size: 0.85rem;
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
  color: #5a3a1a;
  font-size: 0.9rem;
}

.example-card span {
  color: #7a6048;
  font-size: 0.8rem;
  margin-top: 0.2rem;
}

@media (max-width: 768px) {
  .bourgogne-grape-profile {
    padding: 1rem;
  }
  .profile-grid {
    grid-template-columns: 1fr;
  }
  .pairing-list {
    columns: 1;
  }
}
</style>
