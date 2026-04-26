<template>
  <div class="bourgogne-subregion-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '布根地六大子產區總覽' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="region-cards">
      <div
        v-for="region in regions"
        :key="region.key"
        class="region-card"
        :class="{ active: activeKey === region.key }"
        :style="{ borderTopColor: region.color, '--region-color': region.color }"
        @click="activeKey = region.key"
      >
        <div class="card-emoji">{{ region.emoji }}</div>
        <h3>{{ region.name }}</h3>
        <p class="card-tagline">{{ region.tagline }}</p>
        <div class="card-tags">
          <span class="tag">{{ region.area }}</span>
          <span class="tag tag-grape">{{ region.signature }}</span>
        </div>
      </div>
    </div>

    <div class="region-detail" :style="{ borderColor: activeRegion.color }">
      <div class="detail-header">
        <h3>{{ activeRegion.emoji }} {{ activeRegion.name }}</h3>
        <span class="climate-badge" :style="{ backgroundColor: activeRegion.color }">
          {{ activeRegion.climate }}
        </span>
      </div>

      <p class="detail-intro">{{ activeRegion.summary }}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>📐 規模與地理</h4>
          <ul>
            <li><strong>面積：</strong>{{ activeRegion.area }}</li>
            <li><strong>位置：</strong>{{ activeRegion.location }}</li>
            <li><strong>主要村莊：</strong>{{ activeRegion.villages }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🪨 風土特色</h4>
          <ul>
            <li><strong>土壤：</strong>{{ activeRegion.soils }}</li>
            <li><strong>氣候：</strong>{{ activeRegion.climateDetail }}</li>
            <li><strong>海拔：</strong>{{ activeRegion.elevation }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🍇 葡萄品種</h4>
          <ul>
            <li><strong>主品種：</strong>{{ activeRegion.signature }}</li>
            <li><strong>其他：</strong>{{ activeRegion.otherGrapes }}</li>
          </ul>
        </div>
        <div class="detail-block">
          <h4>🏆 代表 AOC / Cru</h4>
          <ul>
            <li v-for="(aoc, i) in activeRegion.appellations" :key="i">{{ aoc }}</li>
          </ul>
        </div>
        <div class="detail-block full-width">
          <h4>🍷 風格與重點</h4>
          <p>{{ activeRegion.style }}</p>
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

const defaultRegions = [
  {
    key: 'chablis',
    name: 'Chablis',
    emoji: '🥂',
    color: '#5BA89F',
    tagline: '北方的礦物精靈——純粹 Chardonnay 的最高典範',
    area: '5,800 ha',
    location: '布根地最北端，巴黎南方 180 km',
    villages: 'Chablis、Chichée、Fyé、Préhy、Beines',
    climate: '涼爽大陸',
    climateDetail: '霜害風險高（4 月春霜可毀全年產量），日夜溫差大',
    elevation: '120–250 m',
    soils: 'Kimmeridgian 泥灰岩（侏羅紀晚期）+ Portlandian 石灰岩',
    signature: 'Chardonnay（100%）',
    otherGrapes: '無——Chablis AOC 規定 100% Chardonnay',
    appellations: [
      'Petit Chablis（基礎）',
      'Chablis（村莊）',
      'Chablis Premier Cru（40 個 climats）',
      'Chablis Grand Cru（7 個：Les Clos、Vaudésir、Valmur 等）'
    ],
    style: '骨感乾型、極高酸度、白堊礦物、青蘋果與檸檬皮、燧石煙燻調。Grand Cru 經桶可發展奶油、烤榛果、蜂蠟，陳年 20+ 年。Chablis 是 Chardonnay 風格光譜中最「礦物純粹」的版本，與 Côte de Beaune 飽滿風格形成強烈對比。',
    summary: 'Chablis 是布根地最北的飛地，地理上更接近香檳區。它不過桶（或極微量舊桶）、強調 Kimmeridgian 泥灰岩的礦物張力，被視為 Chardonnay 純粹度的標竿。'
  },
  {
    key: 'cote-de-nuits',
    name: 'Côte de Nuits',
    emoji: '🍒',
    color: '#7B1F2A',
    tagline: '紅酒之王國——Pinot Noir 最深沉表達',
    area: '3,800 ha',
    location: '第戎（Dijon）南方，Côte d\'Or 北段',
    villages: 'Gevrey-Chambertin、Vosne-Romanée、Nuits-Saint-Georges、Chambolle-Musigny、Morey-Saint-Denis、Vougeot',
    climate: '溫和大陸',
    climateDetail: '春季易霜害，夏季溫暖、葡萄成熟期長',
    elevation: '220–350 m',
    soils: 'Bajocian/Bathonian 階石灰岩、泥灰岩、礫石坡積',
    signature: 'Pinot Noir（紅酒主導）',
    otherGrapes: '少量 Chardonnay（如 Musigny Blanc、Vougeot Blanc）',
    appellations: [
      '24 個 Grand Cru（占布根地 24/33）：Chambertin、Romanée-Conti、La Tâche、Richebourg、Musigny、Clos de Vougeot 等',
      '146 個 Premier Cru',
      'Village AOC 8 個'
    ],
    style: '結構紮實、單寧深沉、紅黑色水果、香料、礦物與森林地表。陳年 20–50 年。世界最頂級 Pinot Noir 集中於此（DRC、Leroy、Rousseau 等）。每個 climat 因坡度、坡向、土壤組成微妙差異而展現截然不同個性。',
    summary: 'Côte de Nuits 是 Pinot Noir 的世界中心。從 Marsannay 到 Corgoloin 約 22 km 長，所有頂級 Grand Cru 都集中於此。這裡的 Pinot 結構最緊密、陳年潛力最強。'
  },
  {
    key: 'cote-de-beaune',
    name: 'Côte de Beaune',
    emoji: '🌼',
    color: '#D4A574',
    tagline: '白酒帝國——Montrachet 之鄉',
    area: '5,700 ha',
    location: 'Côte d\'Or 南段，Beaune 城周邊',
    villages: 'Meursault、Puligny-Montrachet、Chassagne-Montrachet、Pommard、Volnay、Beaune、Aloxe-Corton',
    climate: '溫和大陸',
    climateDetail: '比 Nuits 略暖、地勢較開闊',
    elevation: '200–380 m',
    soils: '石灰岩、泥灰岩，Meursault 為 Bathonian 石灰、Montrachet 為 Bajocian 礫質',
    signature: 'Chardonnay + Pinot Noir（白紅並重）',
    otherGrapes: 'Aligoté（少量）',
    appellations: [
      '8 個 Grand Cru：Le Montrachet、Chevalier-Montrachet、Bâtard-Montrachet、Bienvenues-Bâtard、Criots-Bâtard、Corton、Corton-Charlemagne、Charlemagne',
      '300+ Premier Cru',
      'Village AOC 22 個'
    ],
    style: '白酒：飽滿圓潤、橡木桶協調、烤堅果、白花、奶油與礦物。Meursault 較豐潤、Puligny 較銳利、Chassagne 兼具兩者。紅酒：較柔軟、果香顯、Pommard 紮實、Volnay 優雅。Montrachet 被視為世界最頂級 Chardonnay 葡萄園。',
    summary: 'Côte de Beaune 比北邊的 Nuits 更多元——Pinot Noir 在 Pommard、Volnay、Aloxe-Corton 表現精彩，Chardonnay 在 Meursault、Puligny、Chassagne 達到世界顛峰。'
  },
  {
    key: 'cote-chalonnaise',
    name: 'Côte Chalonnaise',
    emoji: '🪙',
    color: '#9C7D5A',
    tagline: '性價比之星——Côte d\'Or 平易近人版',
    area: '4,400 ha',
    location: 'Beaune 南方、Chalon-sur-Saône 西側',
    villages: 'Mercurey、Givry、Rully、Montagny、Bouzeron',
    climate: '溫和大陸',
    climateDetail: '與 Côte d\'Or 接近，但海拔稍低、風格更易飲',
    elevation: '230–320 m',
    soils: '石灰岩、泥灰岩混合，部分黏土含量高',
    signature: 'Pinot Noir + Chardonnay 並重',
    otherGrapes: 'Aligoté（Bouzeron 為唯一單一品種 Village AOC）',
    appellations: [
      '無 Grand Cru',
      'Premier Cru：Mercurey、Givry、Rully、Montagny',
      'Bouzeron（100% Aligoté Village AOC）'
    ],
    style: '紅酒：果香奔放、單寧柔軟、5–10 年內飲用最佳。Mercurey 結構最佳、Givry 較鄉土、Rully 兼產白酒與氣泡。白酒：清新、酸度活潑、Montagny 表現尤佳。整體價格僅為 Côte d\'Or 一半，是日常飲用的優質選擇。',
    summary: 'Côte Chalonnaise 是 Côte d\'Or 的「弟弟」——氣候土壤相近、規範相同，但無 Grand Cru、知名度較低，因此價格平易近人。是進入布根地世界的理想入門產區。'
  },
  {
    key: 'maconnais',
    name: 'Mâconnais',
    emoji: '☀️',
    color: '#E8A040',
    tagline: '南方的溫暖白酒——Pouilly-Fuissé 為核心',
    area: '6,500 ha',
    location: 'Côte Chalonnaise 南方、Lyon 北方',
    villages: 'Pouilly、Fuissé、Vinzelles、Saint-Véran、Viré、Clessé、Mâcon',
    climate: '溫暖大陸偏地中海過渡',
    climateDetail: '布根地最溫暖區、葡萄成熟早',
    elevation: '200–500 m（Solutré 與 Vergisson 兩座岩石高地海拔最高）',
    soils: '石灰岩為主、部分黏土與燧石',
    signature: 'Chardonnay（白酒主導 80%+）',
    otherGrapes: 'Gamay（南部少量，多為 Mâcon Rouge）',
    appellations: [
      '無 Grand Cru',
      'Pouilly-Fuissé（2020 升級首批 22 個 Premier Cru）',
      'Saint-Véran、Pouilly-Loché、Pouilly-Vinzelles、Viré-Clessé、Mâcon-Villages'
    ],
    style: '白酒風格較溫暖飽滿、酒精偏高（13–13.5%）、果香奔放（杏桃、白桃、蜂蜜）、礦物較內斂。Pouilly-Fuissé 頂級酒款（如 Domaine Saumaize-Michelin、Olivier Merlin）可比 Côte de Beaune 中階白酒。',
    summary: 'Mâconnais 是布根地的「南方白酒帶」——氣候溫暖、Chardonnay 表現飽滿溫潤。Pouilly-Fuissé 在 2020 年正式建立 Premier Cru 體系，被視為下一個值得收藏的布根地產區。'
  },
  {
    key: 'beaujolais',
    name: 'Beaujolais',
    emoji: '🍇',
    color: '#8B3A4D',
    tagline: 'Gamay 的故鄉——花崗岩上的紅寶石',
    area: '15,000 ha',
    location: 'Mâconnais 南方、Lyon 北方',
    villages: 'Morgon、Fleurie、Moulin-à-Vent、Brouilly、Côte-de-Brouilly、Chénas、Chiroubles、Juliénas、Saint-Amour、Régnié',
    climate: '溫和大陸偏地中海',
    climateDetail: '比 Mâconnais 更溫暖、花崗岩土壤排水極佳',
    elevation: '200–500 m',
    soils: '北部 Crus 區為花崗岩、片麻岩；南部為石灰岩、黏土',
    signature: 'Gamay（98%）',
    otherGrapes: 'Chardonnay（白）、極少量 Pinot Noir',
    appellations: [
      '10 個 Cru：Morgon、Fleurie、Moulin-à-Vent、Brouilly、Côte-de-Brouilly、Chénas、Chiroubles、Juliénas、Saint-Amour、Régnié',
      'Beaujolais-Villages（38 個村莊）',
      'Beaujolais 基礎 AOC',
      'Beaujolais Nouveau（新酒）'
    ],
    style: 'Beaujolais Nouveau：carbonic maceration 鮮果風格、6 個月內飲用。10 Crus：結構紮實、花崗岩礦物、可陳年（尤其 Morgon、Moulin-à-Vent）5–20 年，部分老酒款風格近似 Côte de Nuits Pinot Noir。',
    summary: 'Beaujolais 在行政上常被視為布根地南部、地理上獨立。Gamay 在花崗岩風土上找到完美舞台，10 個 Cru 各具特色。從 1980 年代 Marcel Lapierre 開創自然酒運動後，Morgon 與 Fleurie 重新獲得世界尊敬。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'chablis')
const activeRegion = computed(
  () => regions.value.find((r) => r.key === activeKey.value) || regions.value[0]
)
</script>

<style scoped>
.bourgogne-subregion-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fefaf3 0%, #f5ede0 100%);
  color: #2d1a0f;
  overflow-y: auto;
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

.region-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.region-card {
  background: #fff;
  border: 2px solid transparent;
  border-top: 5px solid;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0 2px 6px rgba(90, 58, 26, 0.1);
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(90, 58, 26, 0.2);
}

.region-card.active {
  border-color: var(--region-color);
  box-shadow: 0 6px 16px rgba(90, 58, 26, 0.25);
  transform: translateY(-2px);
}

.card-emoji {
  font-size: 1.6rem;
}

.region-card h3 {
  margin: 0;
  color: #5a3a1a;
  font-size: 1.05rem;
}

.card-tagline {
  margin: 0;
  color: #7a6048;
  font-size: 0.82rem;
  line-height: 1.4;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tag {
  background: #f3e9d8;
  color: #5a3a1a;
  font-size: 0.72rem;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
}

.tag-grape {
  background: var(--region-color);
  color: #fff;
}

.region-detail {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(90, 58, 26, 0.12);
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
  color: #2d1a0f;
  font-size: 1.3rem;
}

.climate-badge {
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 14px;
  font-size: 0.85rem;
  font-weight: 500;
}

.detail-intro {
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.detail-block.full-width {
  grid-column: 1 / -1;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.95rem;
  color: #5a3a1a;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
}

.detail-block p {
  margin: 0;
  color: #4a3826;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .bourgogne-subregion-slide {
    padding: 1rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
