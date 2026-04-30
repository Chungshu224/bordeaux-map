<template>
  <div class="amarone-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🌬️ Amarone 與 Appassimento 工藝深度' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
      <p v-else class="slide-desc">同樣的 Corvina 葡萄，因為「風乾」與「殘糖」的組合排列，在 Valpolicella 衍生出 4 種完全不同的酒款風格。</p>
    </div>

    <!-- Valpolicella 四階梯 Tab -->
    <div class="tier-section">
      <h3>🏔️ Valpolicella 四大酒款階梯</h3>
      <div class="tier-tabs">
        <button
          v-for="(t, i) in tiers"
          :key="i"
          class="tier-tab"
          :class="{ active: activeIdx === i }"
          :style="{ background: activeIdx === i ? `linear-gradient(135deg, ${t.color}, ${t.colorEnd})` : '#fff', color: activeIdx === i ? '#fff' : '#2c3e50' }"
          @click="activeIdx = i"
        >
          <span class="tier-rank">{{ t.rank }}</span>
          <span class="tier-name">{{ t.name }}</span>
        </button>
      </div>

      <div class="tier-detail" :style="{ borderTopColor: activeTier.color }">
        <div class="tier-header" :style="{ background: `linear-gradient(135deg, ${activeTier.color}, ${activeTier.colorEnd})` }">
          <div class="tier-header-text">
            <h4>{{ activeTier.name }}</h4>
            <span class="tier-tagline">{{ activeTier.tagline }}</span>
          </div>
          <img :src="`/images/italy/amarone-${tierKeys[activeIdx]}.svg`" class="amarone-tier-img" :alt="activeTier.name" />
        </div>
        <div class="tier-body">
          <div class="metric-grid">
            <div class="metric-box">
              <div class="metric-icon">🍇</div>
              <div class="metric-label">葡萄狀態</div>
              <div class="metric-value">{{ activeTier.grapeState }}</div>
            </div>
            <div class="metric-box">
              <div class="metric-icon">🍷</div>
              <div class="metric-label">酒精度</div>
              <div class="metric-value">{{ activeTier.abv }}</div>
            </div>
            <div class="metric-box">
              <div class="metric-icon">🍯</div>
              <div class="metric-label">殘糖</div>
              <div class="metric-value">{{ activeTier.sweetness }}</div>
            </div>
            <div class="metric-box">
              <div class="metric-icon">⏳</div>
              <div class="metric-label">法定陳年</div>
              <div class="metric-value">{{ activeTier.aging }}</div>
            </div>
            <div class="metric-box">
              <div class="metric-icon">💰</div>
              <div class="metric-label">價格</div>
              <div class="metric-value">{{ activeTier.price }}</div>
            </div>
            <div class="metric-box">
              <div class="metric-icon">📅</div>
              <div class="metric-label">陳年潛力</div>
              <div class="metric-value">{{ activeTier.cellar }}</div>
            </div>
          </div>
          <div class="tier-process">
            <strong>🔬 釀造關鍵：</strong>{{ activeTier.process }}
          </div>
          <div class="tier-pairing">
            <strong>🍽️ 配餐：</strong>{{ activeTier.pairing }}
          </div>
        </div>
      </div>
    </div>

    <!-- Appassimento 風乾流程 -->
    <div class="process-section">
      <h3>🌬️ Appassimento 風乾流程（3-4 個月）</h3>
      <div class="process-flow">
        <div v-for="(p, i) in process" :key="i" class="process-step">
          <div class="step-month">{{ p.month }}</div>
          <div class="step-bar-wrap">
            <div class="step-bar" :style="{ width: p.weightLoss + '%', background: `linear-gradient(90deg, ${p.color}, ${p.colorEnd})` }">
              <span class="bar-text">失水 {{ p.weightLoss }}%</span>
            </div>
          </div>
          <div class="step-info">
            <strong>{{ p.title }}</strong>
            <span>{{ p.detail }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 釀造哲學光譜 -->
    <div class="philosophy-section">
      <h3>⚖️ 傳統派 vs 現代派釀造哲學</h3>
      <div class="philosophy-compare">
        <div class="phil-card traditional">
          <div class="phil-header">🔥 傳統派（極致濃郁）</div>
          <ul>
            <li><strong>風乾期</strong>：4-5 個月（失水 40%+）</li>
            <li><strong>橡木桶</strong>：大型 Botte（5,000L+），陳年 4-8 年</li>
            <li><strong>風格</strong>：極致濃縮、乾果、甘草、巧克力、酒精 16-17%</li>
            <li><strong>代表</strong>：Quintarelli、Dal Forno Romano、Bertani</li>
            <li><strong>價格</strong>：€100–€600+</li>
          </ul>
        </div>
        <div class="phil-card modern">
          <div class="phil-header">✨ 現代派（優雅平衡）</div>
          <ul>
            <li><strong>風乾期</strong>：3-3.5 個月（失水 30-35%）</li>
            <li><strong>橡木桶</strong>：法國 Barrique（225L），陳年 2-4 年</li>
            <li><strong>風格</strong>：果香新鮮、優雅平衡、酒精 15-16%</li>
            <li><strong>代表</strong>：Allegrini、Masi、Tedeschi、Zenato</li>
            <li><strong>價格</strong>：€30–€150</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 關鍵洞察</h4>
      <p>Recioto 才是<strong>始祖</strong>（中世紀甜紅酒），Amarone 是 1950 年代「<em>發酵失控不停</em>」的意外產物——殘糖完全轉化為高酒精乾型酒。Ripasso 則是 1980 年代 Masi 發明的「<strong>環保型 Baby Amarone</strong>」：將普通 Valpolicella 倒入剛榨完的 Amarone 酒渣上二次發酵，零浪費地獲得濃縮度。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(2) // 預設 Amarone

const defaultTiers = [
  {
    rank: '①',
    name: 'Valpolicella Classico DOC',
    tagline: '輕盈日常款',
    grapeState: '新鮮葡萄直接釀造',
    abv: '11–12.5%',
    sweetness: '乾型（< 4 g/L）',
    aging: '無強制要求',
    price: '€8–€18',
    cellar: '2–5 年',
    process: '採收後立即破皮、發酵、短期不鏽鋼槽陳年。保留 Corvina 的櫻桃酸度與紫羅蘭花香。',
    pairing: '披薩、義大利麵、輕燉肉、Pecorino 起司',
    color: '#3498db',
    colorEnd: '#5dade2'
  },
  {
    rank: '②',
    name: 'Valpolicella Ripasso DOC',
    tagline: 'Baby Amarone',
    grapeState: '新鮮葡萄 + 倒入剛榨完的 Amarone 酒渣',
    abv: '13–14%',
    sweetness: '乾型（< 8 g/L）',
    aging: '至少 1 年（其中 Superiore 等級需 2 年）',
    price: '€15–€35',
    cellar: '5–10 年',
    process: '完成發酵的 Valpolicella 酒倒入 Amarone 剛壓榨完的酒渣上，啟動二次發酵 2-3 週。萃取殘留糖分、單寧、風味。',
    pairing: '燉肉醬義大利麵、烤豬肉、Parmigiano（30-36 個月）',
    color: '#e67e22',
    colorEnd: '#f39c12'
  },
  {
    rank: '③',
    name: 'Amarone della Valpolicella DOCG',
    tagline: '風乾乾型旗艦',
    grapeState: '葡萄風乾 3-4 個月（失水 30-40%）',
    abv: '15–17%',
    sweetness: '乾型（< 12 g/L，但圓潤感強）',
    aging: '至少 2 年（Riserva 4 年）',
    price: '€35–€600+',
    cellar: '10–30 年',
    process: '採收後挑選最健康果串置於 Fruttai 風乾室，自然失水 3-4 個月。緩慢低溫發酵 30-50 天，糖分完全轉化為高酒精乾型酒。',
    pairing: '燉牛肉（Pastissada）、野味、陳年 Parmigiano（60+ 個月）、黑松露',
    color: '#8e44ad',
    colorEnd: '#9b59b6'
  },
  {
    rank: '④',
    name: 'Recioto della Valpolicella DOCG',
    tagline: '甜紅酒始祖',
    grapeState: '葡萄風乾 3-4 個月（與 Amarone 相同）',
    abv: '12–14%',
    sweetness: '甜型（80–150 g/L 殘糖）',
    aging: '至少 1 年',
    price: '€30–€150',
    cellar: '15–30 年',
    process: '與 Amarone 同樣風乾，但發酵在糖分轉化完成「之前」中止（低溫降溫或加 SO₂），保留大量殘糖。中世紀貴族宴會酒款。',
    pairing: '黑巧克力甜點、藍紋起司（Gorgonzola Piccante）、堅果塔、聖誕 Panettone',
    color: '#c0392b',
    colorEnd: '#e74c3c'
  }
]

const tiers = computed(() => {
  if (Array.isArray(props.slide?.tiers) && props.slide.tiers.length) return props.slide.tiers
  return defaultTiers
})

const activeTier = computed(() => tiers.value[activeIdx.value] || tiers.value[0])

const tierKeys = ['valpolicella', 'ripasso', 'amarone', 'recioto']

const process = [
  { month: '第 1 個月', weightLoss: 18, title: '初期蒸散', detail: '果皮起皺、表面水分蒸發、糖度開始上升', color: '#16a085', colorEnd: '#1abc9c' },
  { month: '第 2 個月', weightLoss: 25, title: '緩慢濃縮', detail: '糖分 / 多酚 / 甘油濃縮，定期巡視防止灰黴病', color: '#f39c12', colorEnd: '#f5b041' },
  { month: '第 3 個月', weightLoss: 33, title: '化學變化', detail: '產生新風味化合物（乾果、香料、可可），酸度保持', color: '#e67e22', colorEnd: '#eb984e' },
  { month: '第 4 個月', weightLoss: 38, title: '達到目標', detail: '失水 35-40%，糖度可達 28°Brix，準備破皮發酵', color: '#c0392b', colorEnd: '#e74c3c' }
]
</script>

<style scoped>
.amarone-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #6B1A1A;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 24px;
  line-height: 1.7;
}

.tier-section { margin-bottom: 24px; }
.tier-section h3,
.process-section h3,
.philosophy-section h3 {
  color: #6B1A1A;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.tier-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.tier-tab {
  border: none;
  border-radius: 8px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-weight: 700;
}
.tier-tab:hover { transform: translateY(-2px); }
.tier-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.15); }
.tier-rank { font-size: 1.3rem; }
.tier-name { font-size: 0.85rem; line-height: 1.3; }
.tier-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.tier-header {
  padding: 16px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.tier-header-text { flex: 1; min-width: 0; }
.tier-header h4 { margin: 0; font-size: 1.4rem; }
.tier-tagline { font-size: 0.9rem; opacity: 0.9; }
.amarone-tier-img {
  width: 120px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
}
.tier-body { padding: 16px 20px; }
.metric-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}
.metric-box {
  background: #fafafa;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}
.metric-icon { font-size: 1.3rem; }
.metric-label {
  font-size: 0.75rem;
  color: #888;
  margin: 4px 0;
  font-weight: 700;
}
.metric-value {
  font-size: 0.88rem;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.4;
}
.tier-process,
.tier-pairing {
  padding: 12px;
  background: #fff8e6;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 10px;
  border-left: 3px solid #d4af37;
}
.tier-pairing {
  background: #f0f9ff;
  border-left-color: #3498db;
}

/* Process flow */
.process-section {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 24px;
}
.process-flow {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.process-step {
  display: grid;
  grid-template-columns: 90px 1fr 220px;
  gap: 12px;
  align-items: center;
}
.step-month {
  font-weight: 700;
  color: #6B1A1A;
  font-size: 0.92rem;
}
.step-bar-wrap {
  background: #f0f0f0;
  border-radius: 20px;
  height: 32px;
  overflow: hidden;
  position: relative;
}
.step-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  border-radius: 20px;
  transition: width 0.5s ease;
}
.bar-text {
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
.step-info {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  line-height: 1.5;
}
.step-info strong {
  color: #2c3e50;
  margin-bottom: 2px;
}
.step-info span {
  color: #666;
  font-size: 0.82rem;
}

/* Philosophy */
.philosophy-section { margin-bottom: 20px; }
.philosophy-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.phil-card {
  border-radius: 12px;
  padding: 18px;
  color: #fff;
}
.phil-card.traditional {
  background: linear-gradient(135deg, #c0392b, #7B1F2A);
}
.phil-card.modern {
  background: linear-gradient(135deg, #3498db, #2874a6);
}
.phil-header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 6px;
}
.phil-card ul {
  margin: 0;
  padding-left: 20px;
}
.phil-card li {
  margin-bottom: 6px;
  font-size: 0.9rem;
  line-height: 1.6;
}

.key-insight {
  background: linear-gradient(135deg, #6B1A1A, #8e44ad);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .tier-tabs { grid-template-columns: repeat(2, 1fr); }
  .metric-grid { grid-template-columns: repeat(2, 1fr); }
  .process-step { grid-template-columns: 70px 1fr; }
  .step-info { grid-column: 1 / -1; padding-left: 8px; }
  .philosophy-compare { grid-template-columns: 1fr; }
}
</style>
