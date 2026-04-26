<template>
  <div class="sherry-solera-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '索雷拉系統 × 六大 Sherry 風格' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="content-wrapper">
      <!-- 索雷拉視覺化金字塔 -->
      <div class="solera-pyramid">
        <h3 class="sec-title">🏛️ 索雷拉動態熟成系統</h3>
        <div class="pyramid">
          <div class="row r3">
            <div class="cask">3<sup>ª</sup> Criadera<br/><small>最年輕酒</small></div>
            <div class="cask">3<sup>ª</sup> Criadera</div>
            <div class="cask">3<sup>ª</sup> Criadera</div>
          </div>
          <div class="arrow">⬇</div>
          <div class="row r2">
            <div class="cask">2<sup>ª</sup> Criadera</div>
            <div class="cask">2<sup>ª</sup> Criadera</div>
          </div>
          <div class="arrow">⬇</div>
          <div class="row r1">
            <div class="cask">1<sup>ª</sup> Criadera</div>
          </div>
          <div class="arrow">⬇</div>
          <div class="row solera">
            <div class="cask solera-cask">Solera<br/><small>最老層 · 裝瓶</small></div>
          </div>
        </div>
        <p class="pyramid-note">每次裝瓶從 <strong>Solera</strong> 取出 ≤ 1/3，再以上一層補充——新舊酒永恆混合。</p>
      </div>

      <!-- 六大風格 tab 選擇 -->
      <div class="style-tabs">
        <button
          v-for="s in styles"
          :key="s.key"
          class="style-tab"
          :class="{ active: currentKey === s.key }"
          :style="{ '--accent': s.color }"
          @click="currentKey = s.key"
        >
          <span class="tab-icon">{{ s.icon }}</span>
          <span class="tab-name">{{ s.name }}</span>
          <span class="tab-tag">{{ s.tag }}</span>
        </button>
      </div>

      <!-- 詳情卡 -->
      <div class="detail-card" :style="{ borderColor: current.color }">
        <div class="detail-header" :style="{ background: current.color }">
          <div>
            <h3>{{ current.icon }} {{ current.name }}</h3>
            <span class="tagline">{{ current.tagline }}</span>
          </div>
          <div class="alc-block">
            <span class="alc">{{ current.abv }}</span>
            <span class="alc-label">酒精</span>
          </div>
        </div>

        <div class="detail-body">
          <div class="info-grid">
            <div class="info">
              <h4>🦠 Flor 狀態</h4>
              <p>{{ current.flor }}</p>
            </div>
            <div class="info">
              <h4>🛢️ 熟成方式</h4>
              <p>{{ current.aging }}</p>
            </div>
            <div class="info">
              <h4>🍬 殘糖 / 甜度</h4>
              <p>{{ current.sugar }}</p>
            </div>
            <div class="info">
              <h4>🌡️ 飲用溫度</h4>
              <p>{{ current.serveTemp }}</p>
            </div>

            <div class="info full">
              <h4>👃 香氣特徵</h4>
              <div class="aroma-chips">
                <span
                  v-for="a in current.aromas"
                  :key="a"
                  class="chip"
                  :style="{ borderColor: current.color, backgroundColor: current.color + '22' }"
                >{{ a }}</span>
              </div>
            </div>

            <div class="info full">
              <h4>🏛️ 代表酒莊</h4>
              <div class="bodega-list">
                <span v-for="b in current.bodegas" :key="b" class="bodega">{{ b }}</span>
              </div>
            </div>

            <div class="info full">
              <h4>🍽️ 經典餐搭</h4>
              <p class="pairing">{{ current.pairing }}</p>
            </div>
          </div>

          <div v-if="current.note" class="note-tip">
            <span class="tip-icon">💡</span>
            <p>{{ current.note }}</p>
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

const styles = [
  {
    key: 'fino',
    icon: '🥂',
    name: 'Fino',
    tag: '生物熟成',
    color: '#f1c40f',
    tagline: '輕盈乾鹹的索雷拉之花',
    abv: '15%',
    flor: '全程 Flor 保護，避免氧化',
    aging: '生物熟成 · 至少 2 年索雷拉',
    sugar: '< 5 g/L · Seco（極干）',
    serveTemp: '6–8°C 冰鎮',
    aromas: ['鹹杏仁', '青蘋果', '麵包酵母', '乾草', '海風礦感'],
    bodegas: ['Tío Pepe（González Byass）', 'La Ina（Lustau）', 'Inocente（Valdespino）'],
    pairing: '伊比利火腿、西班牙橄欖、炸鯷魚（Boquerones）、生蠔、Tapas 小食',
    note: '開瓶後 5 天內飲完最佳——Flor 死亡後新鮮度迅速消失。',
  },
  {
    key: 'manzanilla',
    icon: '🌊',
    name: 'Manzanilla',
    tag: '生物熟成',
    color: '#3498db',
    tagline: 'Sanlúcar 海岸限定的鹹鮮之水',
    abv: '15%',
    flor: '海岸涼濕氣候 · Flor 全年活躍',
    aging: '僅在 Sanlúcar de Barrameda 索雷拉',
    sugar: '< 5 g/L · Seco',
    serveTemp: '6–8°C 冰鎮',
    aromas: ['海鹽', '青橄欖', '杏仁', '檸檬皮', '碘鹽礦感'],
    bodegas: ['La Gitana（Hidalgo）', 'Solear（Barbadillo）', 'La Guita'],
    pairing: '海邊小酒館的炸花枝、淡菜、白蝦、醋漬鯷魚——西班牙夏日午後的標準配置',
    note: 'Manzanilla en Rama（未過濾）能更直接呈現 Flor 風味，類似法式 Sur Lie 風格。',
  },
  {
    key: 'amontillado',
    icon: '🍯',
    name: 'Amontillado',
    tag: '雙重熟成',
    color: '#e67e22',
    tagline: 'Flor 死亡後的氧化轉生',
    abv: '16–22%',
    flor: '前期受 Flor 保護，後期 Flor 死亡轉氧化熟成',
    aging: '雙重熟成 · 至少 8 年索雷拉常見',
    sugar: '通常 Seco（< 5 g/L）',
    serveTemp: '13–15°C 微涼',
    aromas: ['榛子', '太妃糖', '香料', '蜂蠟', '熏木', '杏桃乾'],
    bodegas: ['Lustau Los Arcos', 'Valdespino Tío Diego', 'González Byass Del Duque VORS'],
    pairing: '中度熟成 Manchego、栗子蘑菇湯、烤雉雞、伊比利豬肋——香氣精緻又有結構深度',
    note: 'VORS（Very Old Rare Sherry）標示者陳年 ≥ 30 年，是 Sherry 收藏家的聖杯之一。',
  },
  {
    key: 'oloroso',
    icon: '🪵',
    name: 'Oloroso',
    tag: '純氧化熟成',
    color: '#784212',
    tagline: '深沉壯闊的氧化威儀',
    abv: '17–22%',
    flor: '無 Flor · 加強至 17%+ 阻止 Flor 生成',
    aging: '純氧化熟成 · 隨時間蒸發濃縮',
    sugar: 'Seco 至 Semi（依酒莊調配）',
    serveTemp: '16–18°C 接近室溫',
    aromas: ['核桃', '皮革', '無花果乾', '焦糖', '黑巧克力', '辛香料'],
    bodegas: ['Lustau Don Nuño', 'Williams & Humbert Dos Cortados', 'Valdespino Don Gonzalo'],
    pairing: '燉牛尾（Rabo de Toro）、藍乳酪（Cabrales）、烤鴨、松露料理——能對應重口味料理',
    note: '酒體最豐滿，部分超老 Oloroso（30+ 年）天然濃縮殘糖反而升高，呈半甜風格。',
  },
  {
    key: 'palo-cortado',
    icon: '🎭',
    name: 'Palo Cortado',
    tag: '稀世意外',
    color: '#8e44ad',
    tagline: 'Flor 突然消逝的奇蹟',
    abv: '17–22%',
    flor: '原走 Fino 路線，Flor 不明原因死亡 → 改氧化',
    aging: '雙路線意外混合 · 通常 ≥ 10 年',
    sugar: 'Seco（< 5 g/L）',
    serveTemp: '14–16°C',
    aromas: ['Amontillado 的優雅鼻香', 'Oloroso 的豐滿酒體', '焦糖', '無花果', '可可', '海鹽'],
    bodegas: ['Lustau Península', 'Valdespino Cardenal VORS', 'Tradición'],
    pairing: '半熟野味、伊比利肋眼、熟成藍乳酪、黑巧克力慕斯——高密度料理的最佳對手',
    note: '最稀有的 Sherry 風格——無法計劃生產，全憑酒桶「意外」。VORS 級價格可達 €200+。',
  },
  {
    key: 'px',
    icon: '🫐',
    name: 'Pedro Ximénez (PX)',
    tag: '極甜日曬',
    color: '#1a1a1a',
    tagline: '黑如墨、甜如蜜的液體甜點',
    abv: '15–17%',
    flor: '無 Flor · 高糖環境酵母無法生存',
    aging: '日曬 2–3 週 → 部分發酵 → 加強 → 索雷拉氧化',
    sugar: '> 200 g/L · 極甜（部分超過 400 g/L）',
    serveTemp: '14–16°C 微涼',
    aromas: ['椰棗', '無花果蜜', '黑巧克力醬', '焦糖', '咖啡', '甘草'],
    bodegas: ['Don PX Convento Selección（Toro Albalá）', 'Noé VORS（González Byass）', 'San Emilio（Lustau）'],
    pairing: '香草冰淇淋（直接淋上！）、黑巧克力慕斯、藍乳酪（Roquefort/Cabrales）、椰棗蛋糕',
    note: '最簡單的奢華吃法：一勺香草冰淇淋淋上一匙陳年 PX——3 秒就成為米其林級甜點。',
  },
]

const currentKey = ref('fino')
const current = computed(() => styles.find(s => s.key === currentKey.value) || styles[0])
</script>

<style scoped>
.sherry-solera-slide {
  height: 100%;
  padding: 20px 28px;
  overflow-y: auto;
  background: linear-gradient(180deg, #fff8e7 0%, #fdf2d4 100%);
}
.slide-header h2 {
  margin: 0 0 6px;
  color: #6e2c00;
  font-size: 1.6rem;
}
.slide-desc {
  margin: 0 0 14px;
  color: #7d4f0f;
  font-size: 0.95rem;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* 金字塔視覺 */
.solera-pyramid {
  background: #fff;
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: 0 2px 10px rgba(110, 44, 0, 0.08);
}
.sec-title {
  margin: 0 0 12px;
  color: #6e2c00;
  font-size: 1.05rem;
}
.pyramid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.row {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.cask {
  background: linear-gradient(135deg, #d4ac0d, #b9770e);
  color: #fff;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.78rem;
  text-align: center;
  min-width: 100px;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.cask small {
  font-weight: 400;
  font-size: 0.7rem;
  opacity: 0.9;
}
.solera-cask {
  background: linear-gradient(135deg, #6e2c00, #4d1f00);
  min-width: 140px;
  padding: 10px 18px;
  font-size: 0.85rem;
}
.arrow {
  color: #b9770e;
  font-size: 1rem;
  line-height: 1;
}
.pyramid-note {
  margin: 10px 0 0;
  text-align: center;
  font-size: 0.85rem;
  color: #7d4f0f;
  background: #fef5e0;
  padding: 8px 12px;
  border-radius: 8px;
}

/* Tabs */
.style-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px;
}
.style-tab {
  --accent: #d4ac0d;
  background: #fff;
  border: 2px solid #e5d3a3;
  border-radius: 10px;
  padding: 10px 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
}
.style-tab:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.style-tab.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.tab-icon { font-size: 1.4rem; }
.tab-name { font-weight: 700; font-size: 0.9rem; }
.tab-tag { font-size: 0.72rem; opacity: 0.8; }

/* Detail card */
.detail-card {
  background: #fff;
  border: 2px solid;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(110, 44, 0, 0.1);
}
.detail-header {
  padding: 14px 18px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.detail-header h3 { margin: 0; font-size: 1.2rem; }
.tagline { font-size: 0.85rem; opacity: 0.95; }
.alc-block {
  text-align: center;
  background: rgba(255,255,255,0.18);
  padding: 6px 12px;
  border-radius: 8px;
}
.alc { display: block; font-size: 1.2rem; font-weight: 700; }
.alc-label { font-size: 0.7rem; opacity: 0.9; }

.detail-body { padding: 16px 18px; }
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.info { background: #fdf6e3; border-radius: 8px; padding: 10px 12px; }
.info.full { grid-column: 1 / -1; }
.info h4 {
  margin: 0 0 6px;
  font-size: 0.85rem;
  color: #6e2c00;
}
.info p { margin: 0; font-size: 0.9rem; color: #4d2d0a; line-height: 1.5; }
.aroma-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  border: 1.5px solid;
  padding: 3px 10px;
  border-radius: 14px;
  font-size: 0.8rem;
  color: #4d2d0a;
}
.bodega-list { display: flex; flex-wrap: wrap; gap: 8px; }
.bodega {
  background: #fff;
  border: 1px solid #e5d3a3;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #4d2d0a;
}
.pairing { font-style: italic; }
.note-tip {
  margin-top: 12px;
  background: #fef5e0;
  border-left: 4px solid #d4ac0d;
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  display: flex;
  gap: 8px;
}
.tip-icon { font-size: 1.1rem; }
.note-tip p { margin: 0; font-size: 0.85rem; color: #6e2c00; }

@media (max-width: 768px) {
  .sherry-slide { padding: 16px; }
  .slide-header h2 { font-size: 1.4rem; }
  /* Tab 觸控目標大小 */
  .style-tab { min-height: 64px; padding: 12px 8px; }
  .style-tab:active { opacity: 0.75; }
  /* Solera 桌盪最小寬度改為自動 */
  .solera-cask { min-width: unset; width: 100%; box-sizing: border-box; }
  .row { flex-wrap: wrap; justify-content: center; }
  /* 筆記區域自動整寬 */
  .info-grid { grid-template-columns: 1fr; }
  .key-insight { padding: 14px 16px; }
  .key-insight p { font-size: 0.88rem; }
}
@media (max-width: 480px) {
  .style-tabs { grid-template-columns: 1fr; }
  .solera-pyramid { padding: 14px 8px; }
}
</style>
