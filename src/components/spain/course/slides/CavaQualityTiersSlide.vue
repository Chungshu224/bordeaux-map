<template>
  <div class="cava-tiers-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Cava 四大等級 × 酒泥陳年' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="content-wrapper">
      <!-- 等級 tab -->
      <div class="tier-tabs">
        <button
          v-for="(t, i) in tiers"
          :key="t.key"
          class="tier-tab"
          :class="{ active: currentKey === t.key }"
          :style="{ '--accent': t.color }"
          @click="currentKey = t.key"
        >
          <span class="tier-num">{{ i + 1 }}</span>
          <span class="tier-name">{{ t.name }}</span>
          <span class="tier-min">≥ {{ t.minMonths }} 個月</span>
        </button>
      </div>

      <!-- 陳年時間軸視覺 -->
      <div class="aging-timeline">
        <h3 class="sec-title">⏳ 酒泥陳年（Tirage）長度比較</h3>
        <div class="timeline-rows">
          <div
            v-for="t in tiers"
            :key="t.key + '-bar'"
            class="timeline-row"
            :class="{ active: currentKey === t.key }"
          >
            <span class="row-name">{{ t.name }}</span>
            <div class="bar-track">
              <div
                class="bar-fill"
                :style="{ width: (t.minMonths / 36 * 100) + '%', background: t.color }"
              >
                <span class="bar-label">{{ t.minMonths }} 個月</span>
              </div>
            </div>
          </div>
        </div>
        <p class="timeline-note">
          酒泥陳年（lees aging）愈長 → 自溶風味愈深（烤土司、堅果、奶油酥皮、礦感）。
        </p>
      </div>

      <!-- 詳情卡 -->
      <div class="detail-card" :style="{ borderColor: current.color }">
        <div class="detail-header" :style="{ background: current.color }">
          <div>
            <h3>{{ current.icon }} {{ current.name }}</h3>
            <span class="tagline">{{ current.tagline }}</span>
          </div>
          <div class="months-block">
            <span class="months-num">{{ current.minMonths }}</span>
            <span class="months-label">個月酒泥</span>
          </div>
        </div>

        <div class="detail-body">
          <div class="info-grid">
            <div class="info">
              <h4>📐 法定要求</h4>
              <ul>
                <li v-for="r in current.rules" :key="r">{{ r }}</li>
              </ul>
            </div>
            <div class="info">
              <h4>🍬 Dosage（補糖）</h4>
              <p>{{ current.dosage }}</p>
            </div>
            <div class="info">
              <h4>🍇 葡萄品種</h4>
              <p>{{ current.grapes }}</p>
            </div>
            <div class="info">
              <h4>💰 價格區間</h4>
              <p class="price">{{ current.priceRange }}</p>
            </div>

            <div class="info full">
              <h4>👃 風味特徵</h4>
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
              <h4>🏛️ 代表酒款</h4>
              <div class="example-grid">
                <div v-for="ex in current.examples" :key="ex.name" class="ex-card">
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="current.tip" class="label-tip">
            <span class="tip-icon">🔍</span>
            <div>
              <strong>酒標識別線索：</strong>
              <p>{{ current.tip }}</p>
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

const tiers = [
  {
    key: 'guarda',
    icon: '🥂',
    name: 'Cava de Guarda',
    color: '#5dade2',
    minMonths: 9,
    tagline: '日常基礎 · 清新果香路線',
    rules: [
      '酒泥陳年 ≥ 9 個月',
      '佔 Cava 總產量約 75%',
      '允許機械採收與大量生產',
      '無單一年份限制',
    ],
    dosage: '可釀製從 Brut Nature（0 g/L）到 Doux（> 50 g/L）的全甜度範圍',
    grapes: 'Macabeo、Xarel·lo、Parellada（三大原生）+ Chardonnay、Pinot Noir 可加入',
    priceRange: '€6 – €12（西班牙），€10 – €18（國際）',
    aromas: ['青蘋果', '梨子', '檸檬皮', '白花', '輕微酵母麵包'],
    examples: [
      { name: 'Freixenet Cordón Negro', note: '全球最暢銷 Cava，Brut，蘋果柑橘清爽' },
      { name: 'Codorníu Clásico Brut', note: '創立 Cava 的酒莊，1872 年首批傳統法' },
      { name: 'Segura Viudas Brut Reserva', note: '性價比高，淡雅花果' },
    ],
    tip: '酒標標示「Cava de Guarda」即為基礎等級，2022 年新法規後取代「Joven」名稱。',
  },
  {
    key: 'reserva',
    icon: '⭐',
    name: 'Cava de Guarda Superior · Reserva',
    color: '#f39c12',
    minMonths: 18,
    tagline: '酵母自溶 × 果味平衡',
    rules: [
      '酒泥陳年 ≥ 18 個月（2021 後從 15 升至 18）',
      '葡萄須來自認證酒莊地塊',
      '只能 Brut Nature / Extra Brut / Brut',
      '需可追溯生產履歷',
    ],
    dosage: '最高 Brut（< 12 g/L）；常見 Brut Nature（0 g/L）展現純粹自溶香',
    grapes: '必須使用至少一個原生品種；Reserva 等級開始強調風土',
    priceRange: '€12 – €25',
    aromas: ['烤布里歐', '榛子', '熟蘋果', '白桃', '奶油酥皮', '蜂蠟'],
    examples: [
      { name: 'Juvé y Camps Reserva de la Familia', note: '經典 Reserva，30+ 個月酒泥' },
      { name: 'Recaredo Terrers Brut Nature', note: '生物動力法、Reserva' },
      { name: 'Llopart Brut Nature Reserva', note: '家族 7 代莊園' },
    ],
    tip: '「Cava de Guarda Superior」是 2022 新分類傘，下含 Reserva / Gran Reserva / Paraje。',
  },
  {
    key: 'gran-reserva',
    icon: '👑',
    name: 'Gran Reserva',
    color: '#c0392b',
    minMonths: 30,
    tagline: '陳年精品 · 必為極干',
    rules: [
      '酒泥陳年 ≥ 30 個月',
      '只能 Brut Nature / Extra Brut / Brut',
      '須年份標示（millésime）',
      '葡萄來自認證地塊與酒莊',
    ],
    dosage: '事實上絕大多數為 Brut Nature（0 g/L）——強調純粹陳年韻',
    grapes: '原生品種主導；老藤偏好；手工採收常見',
    priceRange: '€20 – €50',
    aromas: ['烤杏仁', '太妃糖', '蜂蜜', '無花果乾', '奶油烘焙', '燧石礦感'],
    examples: [
      { name: 'Gramona III Lustros Gran Reserva', note: '指標性 Gran Reserva（後改 Corpinnat）' },
      { name: 'Juvé y Camps Milesimé Gran Reserva', note: '單一年份 Chardonnay' },
      { name: 'Vilarnau Gran Reserva Brut Nature', note: '60 個月酒泥' },
    ],
    tip: '酒標「Gran Reserva」必標年份；30+ 個月酒泥讓 Cava 風味接近熟成 Champagne Reserve。',
  },
  {
    key: 'paraje',
    icon: '💎',
    name: 'Cava de Paraje Calificado',
    color: '#7d3c98',
    minMonths: 36,
    tagline: '單一莊園地塊 · 體系最高等級',
    rules: [
      '酒泥陳年 ≥ 36 個月',
      '單一認證 Paraje 地塊葡萄',
      '老藤 ≥ 10 年',
      '產量限制：≤ 8,000 kg/ha',
      '手工採收，年份標示',
      '只能 Brut Nature（0 g/L）',
    ],
    dosage: '強制 Brut Nature——絕不補糖，純粹風土表達',
    grapes: '原生品種為主；Chardonnay 可入但極少使用',
    priceRange: '€40 – €120+',
    aromas: ['白松露', '烤吐司', '深烤堅果', '黑橄欖', '奶油焦糖', '海鹽礦感', '陳年蜂蜜'],
    examples: [
      { name: 'Codorníu Finca La Pleta', note: '海拔 200m 黏土石灰岩老藤' },
      { name: 'Juvé y Camps La Capella', note: 'Xarel·lo 老藤單一園' },
      { name: 'Vins el Cep Claror Paraje', note: '生物動力法 Paraje' },
    ],
    tip: '2017 年新設 · 西班牙氣泡酒體系金字塔頂端，類比 Champagne 的 Grand Cru。',
  },
]

const currentKey = ref('paraje')
const current = computed(() => tiers.find(t => t.key === currentKey.value) || tiers[0])
</script>

<style scoped>
.cava-tiers-slide {
  height: 100%;
  padding: 20px 28px;
  overflow-y: auto;
  background: linear-gradient(180deg, #eaf2f8 0%, #d6eaf8 100%);
}
.slide-header h2 {
  margin: 0 0 6px;
  color: #1a5276;
  font-size: 1.6rem;
}
.slide-desc {
  margin: 0 0 14px;
  color: #2874a6;
  font-size: 0.95rem;
}
.content-wrapper { display: flex; flex-direction: column; gap: 18px; }

.tier-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}
.tier-tab {
  --accent: #5dade2;
  background: #fff;
  border: 2px solid #aed6f1;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transition: all 0.2s;
}
.tier-tab:hover { border-color: var(--accent); transform: translateY(-2px); }
.tier-tab.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.tier-num {
  background: rgba(0,0,0,0.1);
  width: 24px; height: 24px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 700;
}
.tier-tab.active .tier-num { background: rgba(255,255,255,0.25); }
.tier-name { font-weight: 700; font-size: 0.92rem; text-align: center; }
.tier-min { font-size: 0.78rem; opacity: 0.85; }

/* Timeline */
.aging-timeline {
  background: #fff;
  border-radius: 14px;
  padding: 16px 18px;
  box-shadow: 0 2px 10px rgba(26, 82, 118, 0.08);
}
.sec-title { margin: 0 0 12px; color: #1a5276; font-size: 1.05rem; }
.timeline-rows { display: flex; flex-direction: column; gap: 10px; }
.timeline-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  gap: 10px;
  opacity: 0.55;
  transition: opacity 0.2s;
}
.timeline-row.active { opacity: 1; }
.row-name { font-size: 0.85rem; color: #1a5276; font-weight: 600; }
.bar-track {
  background: #ebf3fa;
  height: 26px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.bar-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  border-radius: 6px;
  transition: width 0.4s;
}
.bar-label { color: #fff; font-size: 0.78rem; font-weight: 600; white-space: nowrap; }
.timeline-note {
  margin: 12px 0 0;
  background: #ebf3fa;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #2874a6;
  text-align: center;
}

/* Detail */
.detail-card {
  background: #fff;
  border: 2px solid;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(26, 82, 118, 0.1);
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
.months-block {
  text-align: center;
  background: rgba(255,255,255,0.18);
  padding: 6px 12px;
  border-radius: 8px;
}
.months-num { display: block; font-size: 1.4rem; font-weight: 700; }
.months-label { font-size: 0.7rem; opacity: 0.9; }

.detail-body { padding: 16px 18px; }
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}
.info { background: #ebf5fb; border-radius: 8px; padding: 10px 12px; }
.info.full { grid-column: 1 / -1; }
.info h4 { margin: 0 0 6px; font-size: 0.85rem; color: #1a5276; }
.info p { margin: 0; font-size: 0.9rem; color: #21618c; line-height: 1.5; }
.info ul { margin: 4px 0 0; padding-left: 18px; font-size: 0.88rem; color: #21618c; line-height: 1.5; }
.info ul li { margin-bottom: 3px; }
.aroma-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  border: 1.5px solid;
  padding: 3px 10px;
  border-radius: 14px;
  font-size: 0.8rem;
  color: #1a5276;
}
.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}
.ex-card {
  background: #fff;
  border: 1px solid #aed6f1;
  border-radius: 6px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
}
.ex-card strong { color: #1a5276; font-size: 0.88rem; }
.ex-card span { color: #5d6d7e; font-size: 0.78rem; margin-top: 2px; }
.price { font-weight: 600; color: #1a5276; }
.label-tip {
  margin-top: 12px;
  background: #d4e6f1;
  border-left: 4px solid #2874a6;
  border-radius: 0 8px 8px 0;
  padding: 10px 12px;
  display: flex;
  gap: 8px;
}
.tip-icon { font-size: 1.1rem; }
.label-tip strong { color: #1a5276; font-size: 0.9rem; }
.label-tip p { margin: 4px 0 0; font-size: 0.85rem; color: #21618c; }

@media (max-width: 768px) {
  .cava-slide { padding: 16px; }
  .slide-header h2 { font-size: 1.4rem; }
  /* Tab 觸控目標大小 */
  .tier-tab { min-height: 64px; padding: 12px 8px; }
  .tier-tab:active { opacity: 0.75; }
  /* 時間軸固定網格改為單欄 */
  .timeline-row { grid-template-columns: 1fr; gap: 6px; }
  .timeline-year { min-width: unset; width: 100%; text-align: left; }
  /* 資訊區域 */
  .info-grid { grid-template-columns: 1fr; }
  .example-grid { grid-template-columns: repeat(2, 1fr); }
  .key-insight { padding: 14px 16px; }
  .key-insight p { font-size: 0.88rem; }
}
@media (max-width: 480px) {
  .tier-tabs { grid-template-columns: 1fr; }
  .example-grid { grid-template-columns: 1fr; }
}
</style>
