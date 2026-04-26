<template>
  <div class="vdp-classification-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'VDP 分級系統——德國的 Burgundy 化葡萄園分級' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || 'VDP（Verband Deutscher Prädikats- und Qualitätsweingüter）是德國精英酒莊聯盟，自 2002 年起建立 4 階葡萄園分級制度——以 Burgundy 為藍本、根據「葡萄園品質」而非「葡萄成熟度」分級。約 200 家頂級酒莊加入。' }}
      </p>
    </div>

    <!-- VDP 分級金字塔 -->
    <div class="pyramid-container">
      <div
        v-for="(tier, i) in vdpTiers"
        :key="tier.key"
        class="pyramid-tier"
        :class="{ active: activeKey === tier.key }"
        :style="{ '--c': tier.color, width: (60 + i * 12) + '%' }"
        @click="activeKey = tier.key"
      >
        <div class="tier-content" :style="{ backgroundColor: tier.color }">
          <span class="tier-name">{{ tier.name }}</span>
          <span class="tier-en">{{ tier.en }}</span>
          <span class="tier-symbol">{{ tier.symbol }}</span>
        </div>
        <div class="tier-meta">
          <span class="meta-tagline">{{ tier.tagline }}</span>
        </div>
      </div>
    </div>

    <!-- 詳情 -->
    <div class="detail-card" v-if="activeTier" :style="{ borderColor: activeTier.color }">
      <div class="detail-header" :style="{ backgroundColor: activeTier.color }">
        <div>
          <h3>{{ activeTier.symbol }} {{ activeTier.name }} ({{ activeTier.en }})</h3>
          <span class="detail-tagline">{{ activeTier.tagline }}</span>
        </div>
        <div class="detail-quick">
          <span><strong>類比 Burgundy</strong> {{ activeTier.burgundyEquiv }}</span>
          <span><strong>佔 VDP 產量</strong> {{ activeTier.share }}</span>
        </div>
      </div>

      <div class="detail-body">
        <div class="detail-grid">
          <div class="info-block">
            <h4>📐 規範與要求</h4>
            <ul>
              <li v-for="(rule, i) in activeTier.rules" :key="i">{{ rule }}</li>
            </ul>
          </div>
          <div class="info-block">
            <h4>🍇 葡萄園與產量</h4>
            <p>{{ activeTier.vineyard }}</p>
          </div>
          <div class="info-block">
            <h4>🍷 風格特徵</h4>
            <p>{{ activeTier.style }}</p>
          </div>
          <div class="info-block">
            <h4>💰 價格範圍</h4>
            <p class="price">{{ activeTier.priceRange }}</p>
            <p class="advice">{{ activeTier.advice }}</p>
          </div>
          <div class="info-block full-width">
            <h4>🌟 著名葡萄園 / 酒款代表</h4>
            <div class="example-grid">
              <div v-for="ex in activeTier.examples" :key="ex.name" class="ex-card">
                <strong>{{ ex.name }}</strong>
                <span>{{ ex.note }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GG 重點對照 -->
    <div class="gg-spotlight">
      <h3 class="spotlight-title">🌟 重點：Grosses Gewächs (GG) 是什麼？</h3>
      <div class="gg-grid">
        <div class="gg-card">
          <h4>📐 定義</h4>
          <p>「Grosses Gewächs」字面意為「偉大的生長」——是 Grosse Lage（VDP 最頂級葡萄園）所釀的<strong>「乾型」</strong>頂級酒。酒標標示縮寫 <strong>「GG」</strong>。</p>
        </div>
        <div class="gg-card">
          <h4>🍷 特色</h4>
          <p>必須是 Trocken（殘糖 ≤ 9 g/L）、單一葡萄園、低產量、晚於 9 月 1 日（紅酒）/ 8 月 15 日（白酒）後上市。是德國最頂級乾型酒款的標誌。</p>
        </div>
        <div class="gg-card">
          <h4>🍯 例外</h4>
          <p>Grosse Lage 葡萄園的「甜型」酒款不稱 GG，而以傳統 Prädikat（Spätlese / Auslese / BA / TBA / Eiswein）標示——例如 <strong>「Wehlener Sonnenuhr Auslese GL」</strong>。</p>
        </div>
        <div class="gg-card">
          <h4>📖 歷史</h4>
          <p>VDP 成立於 1910 年，現代分級系統 2002 年確立、2012 年完成 4 階架構。GG 概念啟發自 Burgundy 的 Grand Cru，旨在強調「<strong>地塊更勝品種</strong>」的風土哲學。</p>
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

const defaultTiers = [
  {
    key: 'gutswein',
    name: 'Gutswein',
    en: 'VDP.GUTSWEIN',
    symbol: '🌱',
    color: '#7CB342',
    tagline: '酒莊基礎酒——「酒莊風格」入口',
    burgundyEquiv: 'Régionale (Bourgogne)',
    share: '~50% VDP 產量',
    rules: [
      'VDP 分級最低層',
      '葡萄來自酒莊任何葡萄園',
      '可標示產區（如 Mosel、Rheingau）',
      '最大產量：75 hL/ha'
    ],
    vineyard: '酒莊各葡萄園的混合，常為較年輕葡萄藤或基礎地塊。',
    style: '反映酒莊整體風格與產區特色，是入門認識酒莊的最佳起點。',
    priceRange: '€10-€25',
    advice: '日常餐酒首選；適合即飲。',
    examples: [
      { name: 'Dr. Loosen Dr. L Riesling', note: 'Mosel 入門經典' },
      { name: 'Dönnhoff Estate Riesling', note: 'Nahe 神級酒莊入門' },
      { name: 'Wittmann Riesling Trocken', note: 'Rheinhessen 乾型基礎' }
    ]
  },
  {
    key: 'ortswein',
    name: 'Ortswein',
    en: 'VDP.ORTSWEIN',
    symbol: '🏘️',
    color: '#FFB300',
    tagline: '村莊酒——展現特定村莊風土',
    burgundyEquiv: 'Village (Bourgogne)',
    share: '~30% VDP 產量',
    rules: [
      '葡萄來自單一村莊（Ort）',
      '酒標可標示村莊名（如 Wehlener、Forster）',
      '最大產量：75 hL/ha',
      '須使用該村莊的「典型」品種'
    ],
    vineyard: '單一村莊內多個葡萄園的混合，反映該村莊的整體風土特性。',
    style: '展現特定村莊的風土性格——例如 Forster 的飽滿圓潤、Wehlener 的優雅板岩、Niersteiner 的紅色斜坡香料。',
    priceRange: '€18-€40',
    advice: '日常進階款；展現「村莊感」的最佳價格點。',
    examples: [
      { name: 'J.J. Prüm Wehlener Riesling', note: 'Wehlen 村莊酒' },
      { name: 'Dr. Loosen Erdener Riesling', note: 'Erden 紅板岩村莊' },
      { name: 'Wittmann Westhofener Riesling', note: 'Westhofen 石灰岩村莊' }
    ]
  },
  {
    key: 'erste-lage',
    name: 'Erste Lage',
    en: 'VDP.ERSTE LAGE',
    symbol: '⭐',
    color: '#FF6F00',
    tagline: '一級葡萄園——優秀單一地塊',
    burgundyEquiv: 'Premier Cru',
    share: '~15% VDP 產量',
    rules: [
      '單一葡萄園（Einzellage）',
      '葡萄園須通過 VDP 嚴格品質審核',
      '最大產量：60 hL/ha',
      '酒標標示葡萄園名 + 「VDP.ERSTE LAGE」徽章',
      '可釀為乾型、半乾或甜型（含 Prädikat 等級）'
    ],
    vineyard: '經 VDP 認可的優秀單一葡萄園，等級僅次於 Grosse Lage。',
    style: '展現單一葡萄園特性，比村莊酒更集中、複雜度更高。',
    priceRange: '€25-€60',
    advice: '探索單一葡萄園風土的入門價位；性價比優。',
    examples: [
      { name: 'Selbach-Oster Zeltinger Schlossberg ⭐', note: 'Mosel Erste Lage' },
      { name: 'Künstler Hochheimer Stein ⭐', note: 'Rheingau Erste Lage' },
      { name: 'Christmann Königsbacher Idig ⭐', note: 'Pfalz Erste Lage' }
    ]
  },
  {
    key: 'grosse-lage',
    name: 'Grosse Lage',
    en: 'VDP.GROSSE LAGE',
    symbol: '👑',
    color: '#8B1A1A',
    tagline: '特級葡萄園——德國的 Grand Cru',
    burgundyEquiv: 'Grand Cru',
    share: '~5% VDP 產量',
    rules: [
      '德國頂級單一葡萄園——VDP 最高分級',
      '最大產量：50 hL/ha（紅）/ 60 hL/ha（白）',
      '酒標標示葡萄園名 + 「VDP.GROSSE LAGE」徽章',
      '乾型酒稱「Grosses Gewächs」（GG）——殘糖 ≤ 9 g/L',
      '甜型酒以傳統 Prädikat 等級標示（Spätlese / Auslese / BA / TBA / Eiswein）',
      '釋出時間延遲：白 GG 隔年 9 月 1 日、紅 GG 隔年 9 月 1 日（採收後第二年）'
    ],
    vineyard: '德國最頂級的歷史葡萄園——例如 Wehlener Sonnenuhr、Bernkasteler Doctor、Erdener Prälat、Schloss Johannisberg、Forster Kirchenstück、Niersteiner Pettenthal、Westhofener Morstein 等。',
    style: '反映葡萄園獨特的風土、低產量、長陳年潛力（20-50+ 年）。GG 乾型表現礦物複雜度的極致；甜型版本（Auslese GL / TBA GL）為世界級甜酒。',
    priceRange: 'GG €40-€200；BA/TBA €200-€20,000',
    advice: '德國最頂級酒款收藏。GG 通常需陳年 5-10 年才達巔峰。',
    examples: [
      { name: 'Egon Müller Scharzhofberger ⛪', note: 'Saar 神級葡萄園' },
      { name: 'J.J. Prüm Wehlener Sonnenuhr ⛪', note: 'Mosel 經典' },
      { name: 'Dönnhoff Hermannshöhle ⛪', note: 'Nahe 巨匠' },
      { name: 'Robert Weil Kiedrich Gräfenberg GG ⛪', note: 'Rheingau GG 標竿' },
      { name: 'Keller G-Max ⛪', note: 'Rheinhessen 神話酒款' },
      { name: 'Wittmann Morstein GG ⛪', note: 'Wonnegau 石灰岩 GG' }
    ]
  }
]

const vdpTiers = computed(() => props.slide.tiers || defaultTiers)
const activeKey = ref(props.slide.defaultKey || 'grosse-lage')
const activeTier = computed(() => vdpTiers.value.find((t) => t.key === activeKey.value) || vdpTiers.value[0])
</script>

<style scoped>
.vdp-classification-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8eef4 100%);
  color: #1f3346;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #1a4d6e;
  font-weight: 700;
}

.slide-desc {
  color: #3a4a5a;
  font-size: 0.95rem;
  margin: 0 0 1.2rem 0;
}

.pyramid-container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.pyramid-tier {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0 auto;
}

.pyramid-tier:hover {
  transform: translateY(-2px);
}

.pyramid-tier.active .tier-content {
  box-shadow: 0 8px 20px rgba(26, 77, 110, 0.35);
  outline: 2px solid #fff;
  outline-offset: 2px;
  transform: scale(1.02);
}

.tier-content {
  flex: 1;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;
  gap: 1rem;
}

.tier-name {
  font-size: 1.1rem;
  font-weight: 700;
}

.tier-en {
  font-size: 0.78rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.tier-symbol {
  font-size: 1.6rem;
}

.tier-meta {
  flex-shrink: 0;
  width: 220px;
}

.meta-tagline {
  color: #3a4a5a;
  font-size: 0.85rem;
  font-style: italic;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border: 2px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(26, 77, 110, 0.12);
  margin-bottom: 1.5rem;
}

.detail-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.detail-header h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.3rem;
}

.detail-tagline {
  font-size: 0.85rem;
  opacity: 0.95;
  font-style: italic;
}

.detail-quick {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.78rem;
  text-align: right;
}

.detail-quick strong {
  opacity: 0.85;
  margin-right: 0.3rem;
}

.detail-body {
  padding: 1.2rem 1.4rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-block.full-width {
  grid-column: 1 / -1;
}

.info-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.92rem;
  color: #1a4d6e;
}

.info-block p, .info-block ul {
  margin: 0;
  color: #2c3e50;
  line-height: 1.6;
  font-size: 0.88rem;
}

.info-block ul {
  padding-left: 1.2rem;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.ex-card {
  background: #f5f7fa;
  border-left: 3px solid #d4a017;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.ex-card strong {
  color: #1a4d6e;
  font-size: 0.88rem;
}

.ex-card span {
  color: #3a4a5a;
  font-size: 0.78rem;
  margin-top: 0.2rem;
}

.price {
  font-weight: 700;
  color: #d4a017 !important;
  margin-bottom: 0.3rem !important;
}

.advice {
  font-size: 0.83rem !important;
  color: #3a4a5a !important;
}

.gg-spotlight {
  background: linear-gradient(135deg, #fff 0%, #f5f7fa 100%);
  border-radius: 12px;
  padding: 1.4rem;
  border: 2px solid #d4a017;
  box-shadow: 0 4px 12px rgba(212, 160, 23, 0.15);
}

.spotlight-title {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: #8B1A1A;
  text-align: center;
}

.gg-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.gg-card {
  background: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border-left: 3px solid #8B1A1A;
}

.gg-card h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.92rem;
  color: #8B1A1A;
}

.gg-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #2c3e50;
  line-height: 1.6;
}

.gg-card strong {
  color: #1a4d6e;
}

@media (max-width: 768px) {
  .vdp-classification-slide {
    padding: 1rem;
  }
  .pyramid-tier {
    flex-direction: column;
    width: 100% !important;
    align-items: stretch;
  }
  .tier-meta {
    width: 100%;
    text-align: center;
  }
  .detail-grid, .gg-grid {
    grid-template-columns: 1fr;
  }
  .detail-quick {
    text-align: left;
  }
}
</style>
