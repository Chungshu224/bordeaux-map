<template>
  <div class="sancerre-pouilly-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '⚔️ Sancerre × Pouilly-Fumé 雙雄對決' }}</h2>
      <p class="slide-desc">{{ slide?.description || '一河之隔（La Loire），同樣以 100% Sauvignon Blanc 釀造，卻因土壤、地形、傳統工法的差異，發展出兩種完全不同的礦物個性。' }}</p>
    </div>

    <!-- 上方雙產區概覽卡 -->
    <div class="duel-overview">
      <div class="duel-card sancerre" :class="{ active: activeRegion === 'sancerre' }" @click="activeRegion = 'sancerre'">
        <div class="card-flag">🌸</div>
        <h3>Sancerre</h3>
        <div class="card-meta">
          <span>📍 河西岸</span>
          <span>🏞️ 2,800 ha</span>
          <span>🍷 14 個村莊</span>
        </div>
        <div class="card-tag">花香 · 果香 · 多元土壤</div>
      </div>
      <div class="vs-divider">VS</div>
      <div class="duel-card pouilly" :class="{ active: activeRegion === 'pouilly' }" @click="activeRegion = 'pouilly'">
        <div class="card-flag">🔥</div>
        <h3>Pouilly-Fumé</h3>
        <div class="card-meta">
          <span>📍 河東岸</span>
          <span>🏞️ 1,300 ha</span>
          <span>🍷 7 個村莊</span>
        </div>
        <div class="card-tag">煙燻 · 燧石 · 礦物深度</div>
      </div>
    </div>

    <!-- 詳細對比表 -->
    <div class="comparison-grid">
      <div v-for="(row, i) in compareRows" :key="i" class="comp-row">
        <div class="comp-label">{{ row.label }}</div>
        <div class="comp-cell sancerre" :class="{ highlight: activeRegion === 'sancerre' }">{{ row.sancerre }}</div>
        <div class="comp-cell pouilly" :class="{ highlight: activeRegion === 'pouilly' }">{{ row.pouilly }}</div>
      </div>
    </div>

    <!-- 三大土壤類型 -->
    <div class="soils-section">
      <h3>🪨 三大土壤類型（兩產區共有，比例不同）</h3>
      <div class="soil-cards">
        <div v-for="(s, i) in soils" :key="i" class="soil-card" :style="{ borderTopColor: s.color }">
          <div class="soil-icon" :style="{ background: `linear-gradient(135deg, ${s.color}, ${s.colorEnd})` }">{{ s.icon }}</div>
          <h4>{{ s.name }}</h4>
          <p class="soil-fr">{{ s.french }}</p>
          <div class="soil-prop">
            <strong>Sancerre：</strong>{{ s.sancerrePct }}
          </div>
          <div class="soil-prop">
            <strong>Pouilly-Fumé：</strong>{{ s.pouillyPct }}
          </div>
          <p class="soil-desc">{{ s.desc }}</p>
          <div class="soil-style">🎯 {{ s.style }}</div>
        </div>
      </div>
    </div>

    <!-- 標誌酒莊 -->
    <div class="producers-section">
      <h3>👨‍🌾 兩岸標誌性釀酒師</h3>
      <div class="producers-grid">
        <div class="producer-col">
          <h4>🌸 Sancerre 名家</h4>
          <ul>
            <li v-for="(p, i) in producers.sancerre" :key="'s' + i">
              <strong>{{ p.name }}</strong> — {{ p.note }}
            </li>
          </ul>
        </div>
        <div class="producer-col pouilly-col">
          <h4>🔥 Pouilly-Fumé 名家</h4>
          <ul>
            <li v-for="(p, i) in producers.pouilly" :key="'p' + i">
              <strong>{{ p.name }}</strong> — {{ p.note }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 一句話判斷法</h4>
      <p>盲品時聞到<strong>「明亮柑橘 + 鮮草本 + 黑醋栗芽」</strong>偏向 Sancerre Caillottes；聞到<strong>「燧石煙燻 + 礦物 + 細緻菸草」</strong>八成是 Pouilly-Fumé Silex。記住「Fumé」就是法文的「煙燻」—— 這個 AOC 命名本身就告訴你答案。</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeRegion = ref('sancerre')

const compareRows = [
  { label: '法定品種', sancerre: 'Sauvignon Blanc 100% (白) / Pinot Noir (紅・粉紅)', pouilly: 'Sauvignon Blanc 100% (僅白)' },
  { label: '氣候', sancerre: '半大陸型，丘陵起伏明顯', pouilly: '半大陸型，地勢較平緩' },
  { label: '主導土壤', sancerre: 'Caillottes 40% + Terres Blanches 40% + Silex 20%', pouilly: 'Silex 60%（最高比例燧石） + Kimmeridgian + 黏土' },
  { label: '海拔', sancerre: '200–400 m 陡坡', pouilly: '180–280 m 緩坡' },
  { label: '法定產量上限', sancerre: '65 hL/ha', pouilly: '65 hL/ha' },
  { label: '典型風格', sancerre: '柑橘、白花、黑醋栗芽 (cassis)、活潑酸度', pouilly: '燧石煙燻 (gunflint)、菸草、礦物、結構緊密' },
  { label: '陳年潛力', sancerre: '入門 1-3 年；頂級 Silex/Terres Blanches 可 8-15 年', pouilly: '一般 3-8 年；Dagueneau 頂級可 15-25 年' },
  { label: '紅白比例', sancerre: '白 75% / 紅+粉紅 25%', pouilly: '白 100%（紅酒需 AOC Pouilly-sur-Loire 改用 Chasselas）' },
  { label: '價格區間', sancerre: '€12–€60（頂級 €100+）', pouilly: '€15–€80（Dagueneau Silex €250+）' }
]

const soils = [
  {
    name: 'Caillottes',
    french: '白堊石灰小石塊',
    icon: '🥌',
    color: '#3498db',
    colorEnd: '#5dade2',
    sancerrePct: '~ 40%（Bué / Crézancy / Sury）',
    pouillyPct: '~ 5%（極少）',
    desc: '侏羅紀中期 Oxfordian 期形成的白色細碎石灰岩塊，排水極佳、保水力低、加熱迅速。',
    style: '果香奔放、年輕易飲、檸檬與葡萄柚'
  },
  {
    name: 'Terres Blanches',
    french: 'Kimmeridgian 泥灰岩（白土）',
    icon: '🧱',
    color: '#d4af37',
    colorEnd: '#e8b952',
    sancerrePct: '~ 40%（Chavignol、Sancerre 鎮）',
    pouillyPct: '~ 30%（南部 Saint-Andelain）',
    desc: '與 Chablis 完全同源（1.55 億年前 Kimmeridgian 期），含化石牡蠣，賦予深刻的鹹礦物感。',
    style: '結構紮實、礦物張力、陳年潛力佳'
  },
  {
    name: 'Silex',
    french: '燧石（火石）',
    icon: '🔥',
    color: '#7B1F2A',
    colorEnd: '#A8324A',
    sancerrePct: '~ 20%（東部 Ménétréol、Sury-en-Vaux 高地）',
    pouillyPct: '~ 60%（Saint-Andelain 主導）',
    desc: '黑灰色硬質燧石礫，富含矽（SiO₂），晝夜釋放熱量穩定。「Fumé」之名即源自此土。',
    style: '煙燻火藥香、菸草、極致礦物、最強陳年'
  }
]

const producers = {
  sancerre: [
    { name: 'Domaine Vacheron', note: '生物動力法先驅，Belle Dame 老藤 Pinot Noir 享譽國際' },
    { name: 'François Cotat / Pascal Cotat', note: 'Chavignol 村兄弟酒莊，Monts Damnés 與 La Grande Côte 經典' },
    { name: 'Henri Bourgeois', note: '十代家族，La Côte des Monts Damnés 與紐西蘭 Marlborough 雙線經營' },
    { name: 'Edmond Vatan', note: 'Clos La Néore，極稀有 Caillottes 老藤，分配名單嚴格' },
    { name: 'Alphonse Mellot', note: 'Génération XIX、La Moussière 老藤，Domaine 風格代表' }
  ],
  pouilly: [
    { name: 'Didier Dagueneau (現由 Louis-Benjamin 接手)', note: '「Loire 教父」，Silex / Pur Sang / Astéroïde 為傳奇酒款' },
    { name: 'Domaine Serge Dagueneau et Filles', note: '同家族另一支系，Saint-Andelain 燧石風土代表' },
    { name: 'Château de Tracy', note: '16 世紀古堡，多元土壤混釀的優雅典範' },
    { name: 'Domaine Michel Redde et Fils', note: 'La Moynerie / Petit Fumé 入門到頂級齊備' },
    { name: 'Domaine Jonathan Pabiot', note: '生物動力法新生代，礦物張力強烈' }
  ]
}
</script>

<style scoped>
.sancerre-pouilly-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #2874a6;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 22px;
  line-height: 1.7;
}

.duel-overview {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  gap: 12px;
  align-items: stretch;
  margin-bottom: 22px;
}
.duel-card {
  background: #fff;
  border: 3px solid transparent;
  border-radius: 14px;
  padding: 18px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.duel-card:hover { transform: translateY(-3px); }
.duel-card.sancerre.active { border-color: #2874a6; }
.duel-card.pouilly.active { border-color: #7B1F2A; }
.duel-card.sancerre { background: linear-gradient(135deg, #fff, #ebf5fb); }
.duel-card.pouilly { background: linear-gradient(135deg, #fff, #fadbd8); }
.card-flag { font-size: 2.5rem; margin-bottom: 4px; }
.duel-card h3 { margin: 0 0 8px; font-size: 1.5rem; }
.duel-card.sancerre h3 { color: #2874a6; }
.duel-card.pouilly h3 { color: #7B1F2A; }
.card-meta {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.82rem;
  color: #555;
  margin-bottom: 8px;
}
.card-tag {
  font-style: italic;
  color: #666;
  font-size: 0.92rem;
}
.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 900;
  color: #c0392b;
  letter-spacing: 2px;
}

.comparison-grid {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 22px;
}
.comp-row {
  display: grid;
  grid-template-columns: 130px 1fr 1fr;
  border-bottom: 1px solid #eee;
}
.comp-row:last-child { border-bottom: none; }
.comp-label {
  padding: 10px 14px;
  font-weight: 700;
  font-size: 0.85rem;
  color: #555;
  background: #fafafa;
  display: flex;
  align-items: center;
}
.comp-cell {
  padding: 10px 14px;
  font-size: 0.86rem;
  line-height: 1.6;
  border-left: 1px solid #eee;
  transition: background 0.25s;
}
.comp-cell.sancerre.highlight { background: #ebf5fb; }
.comp-cell.pouilly.highlight { background: #fadbd8; }

.soils-section { margin-bottom: 22px; }
.soils-section h3 {
  color: #2874a6;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.soil-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.soil-card {
  background: #fff;
  border-top: 4px solid #999;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.soil-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0 auto 10px;
}
.soil-card h4 { margin: 0; text-align: center; font-size: 1.05rem; }
.soil-fr { text-align: center; color: #888; font-size: 0.78rem; margin: 2px 0 10px; font-style: italic; }
.soil-prop { font-size: 0.82rem; line-height: 1.7; }
.soil-prop strong { color: #555; }
.soil-desc {
  font-size: 0.82rem;
  color: #555;
  line-height: 1.6;
  margin: 8px 0;
  padding: 8px;
  background: #fafafa;
  border-radius: 6px;
}
.soil-style {
  font-size: 0.85rem;
  font-weight: 700;
  color: #2874a6;
  background: #ebf5fb;
  padding: 6px 8px;
  border-radius: 6px;
  text-align: center;
}

.producers-section { margin-bottom: 22px; }
.producers-section h3 {
  color: #2874a6;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.producers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.producer-col {
  background: linear-gradient(135deg, #fff, #ebf5fb);
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.producer-col.pouilly-col {
  background: linear-gradient(135deg, #fff, #fadbd8);
}
.producer-col h4 {
  margin: 0 0 10px;
  color: #2874a6;
  font-size: 1.05rem;
}
.producer-col.pouilly-col h4 { color: #7B1F2A; }
.producer-col ul { margin: 0; padding-left: 18px; }
.producer-col li {
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 6px;
}
.producer-col li strong { color: #2c3e50; }

.key-insight {
  background: linear-gradient(135deg, #2874a6, #7B1F2A);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .duel-overview { grid-template-columns: 1fr; }
  .vs-divider { font-size: 1.3rem; padding: 8px; }
  .comp-row { grid-template-columns: 1fr; }
  .comp-cell { border-left: none; border-top: 1px solid #eee; }
  .soil-cards { grid-template-columns: 1fr; }
  .producers-grid { grid-template-columns: 1fr; }
}
</style>
