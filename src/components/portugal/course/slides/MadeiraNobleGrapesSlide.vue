<template>
  <div class="madeira-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '🏝️ Madeira 四大貴族品種 × Estufagem vs Canteiro 工藝' }}</h2>
      <p class="slide-desc">{{ slide?.description || 'Madeira 是世界最長壽的葡萄酒。從 Sercial（極干）到 Malvasia（極甜）的甜度光譜 × Estufagem（工業）vs Canteiro（自然）兩大加熱工藝 × 5 級陳年分級的完整互動深度。' }}</p>
    </div>

    <!-- 4 大貴族品種 tabs -->
    <div class="grape-tabs">
      <button
        v-for="(g, i) in grapes"
        :key="i"
        class="grape-tab"
        :class="{ active: activeIdx === i }"
        :style="{ borderColor: activeIdx === i ? g.color : 'transparent', background: activeIdx === i ? `linear-gradient(135deg, #fff, ${g.bgTint})` : '#fff' }"
        @click="activeIdx = i"
      >
        <span class="tab-icon">{{ g.icon }}</span>
        <span class="tab-name">{{ g.name }}</span>
        <span class="tab-tag">{{ g.sweetnessTag }}</span>
      </button>
    </div>

    <!-- 甜度光譜 bar -->
    <div class="sweetness-spectrum">
      <div class="spec-track">
        <div v-for="(g, i) in grapes" :key="i" class="spec-marker" :class="{ active: activeIdx === i }" :style="{ background: g.color }">
          <span class="marker-label">{{ g.name }}</span>
          <span class="marker-rs">{{ g.rs }}</span>
        </div>
      </div>
      <div class="spec-axis">
        <span>← 極干 (Dry)</span>
        <span>極甜 (Sweet) →</span>
      </div>
    </div>

    <!-- Active grape detail -->
    <div class="grape-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <h3>{{ active.icon }} {{ active.name }} <span class="detail-tag">{{ active.sweetnessTag }}</span></h3>
        <span class="detail-tagline">{{ active.tagline }}</span>
      </div>
      <div class="detail-body">
        <div class="metrics-grid">
          <div class="metric"><div class="m-label">殘糖 (g/L)</div><div class="m-value">{{ active.rs }}</div></div>
          <div class="metric"><div class="m-label">酒精</div><div class="m-value">{{ active.abv }}</div></div>
          <div class="metric"><div class="m-label">採收成熟度</div><div class="m-value">{{ active.ripeness }}</div></div>
          <div class="metric"><div class="m-label">主要種植海拔</div><div class="m-value">{{ active.altitude }}</div></div>
          <div class="metric"><div class="m-label">島內位置</div><div class="m-value">{{ active.location }}</div></div>
          <div class="metric"><div class="m-label">採收期</div><div class="m-value">{{ active.harvest }}</div></div>
        </div>
        <div class="info-row aroma-row"><strong>👃 香氣風味：</strong>{{ active.aroma }}</div>
        <div class="info-row pairing-row"><strong>🍽️ 配餐：</strong>{{ active.pairing }}</div>
        <div class="info-row producer-row"><strong>🏛️ 代表酒款：</strong>{{ active.producers }}</div>
      </div>
    </div>

    <!-- Estufagem vs Canteiro 工藝對比 -->
    <div class="method-section">
      <h3>🔥 兩大馬德拉化（Maderization）工藝</h3>
      <div class="method-cards">
        <div class="method-card estufagem">
          <div class="method-header">
            <span>⚙️ Estufagem（工業加熱）</span>
            <span class="method-grade">入門級 / 大量生產</span>
          </div>
          <div class="method-temp">🌡️ 45–50°C × 3 個月以上</div>
          <ol>
            <li><strong>不鏽鋼加熱槽</strong>：將酒置入大型不鏽鋼槽（estufa）</li>
            <li><strong>蒸氣盤管</strong>：底部蒸氣盤管加熱至 45–50°C</li>
            <li><strong>恆溫維持</strong>：維持高溫至少 3 個月（法定）</li>
            <li><strong>緩慢冷卻</strong>：90 天後緩慢降溫，再儲存最少 90 天</li>
            <li><strong>適用酒款</strong>：3 年、5 年級的入門 Madeira</li>
          </ol>
          <div class="method-pros">
            <strong>優點：</strong>速度快、成本低、產量大
          </div>
          <div class="method-cons">
            <strong>缺點：</strong>風味較粗糙，缺乏自然陳年的細膩層次
          </div>
        </div>

        <div class="method-card canteiro">
          <div class="method-header">
            <span>☀️ Canteiro（自然頂樓陳年）⭐</span>
            <span class="method-grade">頂級 / 慢工細活</span>
          </div>
          <div class="method-temp">🌡️ 30–40°C 季節性 × 數十年</div>
          <ol>
            <li><strong>橡木桶</strong>：將酒置入 600L 橡木桶（pipas）</li>
            <li><strong>頂樓存放</strong>：放置於酒莊閣樓 / 頂樓 (canteiros 木架)</li>
            <li><strong>陽光自然加熱</strong>：大西洋陽光與通風自然溫和加熱</li>
            <li><strong>長期氧化</strong>：透過木桶緩慢氧化、蒸發濃縮（數十年）</li>
            <li><strong>適用酒款</strong>：10 年、20 年、30 年、40 年、Frasqueira（單一年份）、Colheita</li>
          </ol>
          <div class="method-pros">
            <strong>優點：</strong>細膩複雜、層次豐富、極致陳年潛力（100+ 年）
          </div>
          <div class="method-cons">
            <strong>缺點：</strong>耗時、產量小、價格昂貴
          </div>
        </div>
      </div>
    </div>

    <!-- 5 級陳年分級 -->
    <div class="aging-section">
      <h3>📅 Madeira 陳年分級（最低瓶陳）</h3>
      <div class="aging-tiers">
        <div v-for="(t, i) in agingTiers" :key="i" class="aging-tier" :style="{ borderLeftColor: t.color }">
          <div class="tier-name">{{ t.name }}</div>
          <div class="tier-method">{{ t.method }}</div>
          <div class="tier-desc">{{ t.desc }}</div>
          <div class="tier-price">{{ t.price }}</div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 為什麼 Madeira 不會壞？</h4>
      <p>Madeira 經過 <strong>加熱 + 氧化 + 高酒精 (17–22%) + 高酸度</strong> 四重保護，已經「全程氧化」與「全程加熱」過。開瓶後甚至可保存 <strong>數年至數十年</strong>，是世界唯一「無懼開瓶」的葡萄酒——這也是 18 世紀美國獨立宣言慶祝酒款（Thomas Jefferson 最愛 Bual & Sercial）能保存至今的原因。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const grapes = [
  {
    name: 'Sercial',
    icon: '🍋',
    color: '#c9b45c',
    colorEnd: '#d4c172',
    bgTint: '#faf6e8',
    sweetnessTag: '極干 Extra Dry',
    rs: '< 49',
    abv: '17–18%',
    ripeness: '低（早採）',
    altitude: '600–800 m（最高）',
    location: '北岸涼爽高地',
    harvest: '9 月底（最早）',
    tagline: '北岸高山的鋒利酸度',
    aroma: '檸檬皮、青蘋果、海鹽、杏仁、燧石、煙燻、堅果（核桃 / 杏仁）。最具刺激性的礦物張力與緊縮酸度。',
    pairing: '餐前酒、清湯、生蠔、Tapas、刺身（搭高酸極佳）',
    producers: 'Blandy\'s Sercial 10y / Henriques & Henriques Sercial / D\'Oliveiras Sercial 1969'
  },
  {
    name: 'Verdelho',
    icon: '🌿',
    color: '#7a8c3a',
    colorEnd: '#9aa852',
    bgTint: '#f0f4e0',
    sweetnessTag: '中干 Off-Dry',
    rs: '49–78',
    abv: '17–18%',
    ripeness: '中等',
    altitude: '300–600 m',
    location: '北岸 / 中海拔',
    harvest: '9 月中',
    tagline: '煙燻香草的中庸之道',
    aroma: '柑橘皮、烤鳳梨、煙燻香草、咖啡、燒烤堅果、奶油焦糖。酸度仍清晰但已有圓潤蜜餞感。',
    pairing: '海鮮濃湯、煙燻鮭魚、白肉、亞洲香料菜、甜不辣',
    producers: 'Blandy\'s Verdelho 10y / Cossart Gordon Verdelho 15y / Barbeito Verdelho'
  },
  {
    name: 'Bual (Boal)',
    icon: '🟤',
    color: '#8B4513',
    colorEnd: '#A0522D',
    bgTint: '#f5e8dc',
    sweetnessTag: '中甜 Medium-Sweet',
    rs: '78–96',
    abv: '17–19%',
    ripeness: '高',
    altitude: '200–400 m',
    location: '南岸暖地（Câmara de Lobos）',
    harvest: '9 月底–10 月初',
    tagline: '太妃糖與無花果的甜美平衡',
    aroma: '太妃糖、無花果乾、棗子、咖啡、巧克力、焦糖、烤吐司、蜜餞橘皮。酸度仍存但被甜度包裹。',
    pairing: '藍紋起司、巧克力慕斯、堅果塔、焦糖布丁、餐後甜點',
    producers: 'Blandy\'s Bual 10y / Henriques & Henriques Bual 15y / Barbeito Bual 1995'
  },
  {
    name: 'Malvasia (Malmsey)',
    icon: '🍯',
    color: '#B8860B',
    colorEnd: '#D4A017',
    bgTint: '#faf3e0',
    sweetnessTag: '極甜 Sweet',
    rs: '> 96（最高 150+）',
    abv: '17–22%',
    ripeness: '極高（晚採）',
    altitude: '0–300 m（最低）',
    location: '南岸海岸帶（最熱）',
    harvest: '10 月（最晚）',
    tagline: '蜂蜜杏桃的極致甜美',
    aroma: '蜂蜜、杏桃乾、糖漬橘皮、楓糖、焦糖布丁、咖啡焦糖、麥芽糖、絲滑黏稠如糖漿，但被高酸完美平衡。',
    pairing: '巧克力蛋糕、提拉米蘇、黑巧克力、慕斯、起司蛋糕、Foie Gras',
    producers: 'Blandy\'s Malmsey 10y/15y/Frasqueira / D\'Oliveiras Malmsey 1908（傳奇）/ Justino\'s'
  }
]

const active = computed(() => grapes[activeIdx.value])

const agingTiers = [
  { name: 'Finest / 3 Years', method: 'Estufagem', desc: '入門級，3 年瓶陳，混調品種', price: '€15–€25', color: '#888' },
  { name: '5 Years / Reserve', method: 'Estufagem 或混合', desc: '5 年瓶陳，可單一品種', price: '€25–€45', color: '#3498db' },
  { name: '10 Years / Special Reserve', method: 'Canteiro 開始', desc: '10 年瓶陳，必須單一品種', price: '€50–€90', color: '#16a085' },
  { name: '20 / 30 / 40 Years / Extra Reserve', method: 'Canteiro', desc: '長期自然陳年，複雜度大幅提升', price: '€100–€500', color: '#8e44ad' },
  { name: 'Colheita / Frasqueira', method: 'Canteiro 100%', desc: '單一年份，Frasqueira 必須陳 20 年以上', price: '€200–€5000+', color: '#7B1F2A' }
]
</script>

<style scoped>
.madeira-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #6c3483;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 22px;
  line-height: 1.7;
}

.grape-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 18px;
}
.grape-tab {
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 12px 8px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.grape-tab:hover { transform: translateY(-2px); }
.grape-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.tab-icon { font-size: 1.6rem; }
.tab-name { font-weight: 700; font-size: 0.95rem; }
.tab-tag { font-size: 0.74rem; color: #888; }

.sweetness-spectrum {
  background: #fff;
  padding: 14px 18px;
  border-radius: 10px;
  margin-bottom: 22px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.spec-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  position: relative;
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
}
.spec-marker {
  text-align: center;
  padding: 8px 4px;
  border-radius: 8px;
  color: #fff;
  opacity: 0.55;
  transition: all 0.3s;
}
.spec-marker.active {
  opacity: 1;
  transform: scale(1.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.18);
}
.marker-label { display: block; font-weight: 700; font-size: 0.85rem; }
.marker-rs { display: block; font-size: 0.72rem; opacity: 0.9; margin-top: 2px; }
.spec-axis {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: #888;
  margin-top: 6px;
  font-style: italic;
}

.grape-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  margin-bottom: 22px;
}
.detail-header {
  padding: 14px 20px;
  color: #fff;
}
.detail-header h3 { margin: 0 0 4px; font-size: 1.4rem; }
.detail-tag { font-size: 0.85rem; opacity: 0.9; font-weight: 400; margin-left: 8px; }
.detail-tagline { font-size: 0.88rem; opacity: 0.9; }
.detail-body { padding: 16px 20px; }
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}
.metric {
  background: #fafafa;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
.m-label { font-size: 0.74rem; color: #888; font-weight: 700; margin-bottom: 4px; }
.m-value { font-size: 0.85rem; font-weight: 700; color: #2c3e50; line-height: 1.4; }
.info-row {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 8px;
}
.aroma-row { background: #f4ecf7; border-left: 3px solid #8e44ad; }
.pairing-row { background: #fff8e6; border-left: 3px solid #d4af37; }
.producer-row { background: #f0f5ee; border-left: 3px solid #16a085; }

.method-section { margin-bottom: 22px; }
.method-section h3 {
  color: #6c3483;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.method-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.method-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.method-card.estufagem { border-top: 4px solid #c0392b; }
.method-card.canteiro { border-top: 4px solid #d4af37; }
.method-header {
  font-weight: 700;
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.method-grade {
  font-size: 0.75rem;
  background: #f0f0f0;
  padding: 3px 8px;
  border-radius: 8px;
  color: #555;
  font-weight: 400;
}
.method-temp {
  background: linear-gradient(135deg, #fff3e0, #ffe5b4);
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.88rem;
  color: #6B4500;
  margin-bottom: 10px;
  text-align: center;
}
.method-card ol { margin: 0 0 10px; padding-left: 22px; }
.method-card li {
  font-size: 0.86rem;
  line-height: 1.7;
  margin-bottom: 4px;
}
.method-pros, .method-cons {
  font-size: 0.82rem;
  padding: 6px 10px;
  border-radius: 6px;
  margin-top: 4px;
}
.method-pros { background: #d5f5e3; color: #1e6b3c; }
.method-cons { background: #fadbd8; color: #922b21; }

.aging-section { margin-bottom: 22px; }
.aging-section h3 {
  color: #6c3483;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.aging-tiers {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
}
.aging-tier {
  background: #fff;
  border-left: 5px solid #999;
  border-radius: 8px;
  padding: 10px 14px;
  display: grid;
  grid-template-columns: 2fr 1.2fr 2fr 0.8fr;
  gap: 10px;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.tier-name { font-weight: 700; color: #2c3e50; font-size: 0.92rem; }
.tier-method {
  font-size: 0.78rem;
  color: #555;
  background: #fafafa;
  padding: 4px 8px;
  border-radius: 6px;
  text-align: center;
}
.tier-desc { font-size: 0.85rem; color: #555; line-height: 1.5; }
.tier-price {
  font-weight: 700;
  color: #c0392b;
  font-size: 0.85rem;
  text-align: right;
}

.key-insight {
  background: linear-gradient(135deg, #6c3483, #8e44ad);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .grape-tabs { grid-template-columns: repeat(2, 1fr); }
  .spec-track { grid-template-columns: repeat(2, 1fr); }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  .method-cards { grid-template-columns: 1fr; }
  .aging-tier { grid-template-columns: 1fr; gap: 6px; }
  .tier-price { text-align: left; }
}
</style>
