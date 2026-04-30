<template>
  <div class="qmp-sweetness-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '德國 QmP 甜度分級階梯' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || 'Prädikatswein 6 級分級依「採收時葡萄的成熟度（Oechsle 比重）」而非「殘糖」決定，但實務上等級越高 → 通常殘糖越高。每一級代表更晚採收、更濃縮的葡萄。' }}
      </p>
    </div>

    <div class="ladder-container">
      <div
        v-for="(tier, i) in tiers"
        :key="tier.key"
        class="tier-row"
        :class="{ active: activeKey === tier.key }"
        :style="{ '--c': tier.color, '--w': (40 + i * 10) + '%' }"
        @click="activeKey = tier.key"
      >
        <div class="tier-step" :style="{ width: (40 + i * 10) + '%', backgroundColor: tier.color }">
          <div class="step-content">
            <span class="tier-num">Lv.{{ i + 1 }}</span>
            <strong class="tier-name">{{ tier.name }}</strong>
            <span class="tier-oechsle">{{ tier.oechsleRange }}° Oe</span>
          </div>
        </div>
        <div class="tier-meta">
          <span class="tier-tagline">{{ tier.tagline }}</span>
          <span class="tier-style-pill" :style="{ borderColor: tier.color, color: tier.color }">{{ tier.styleHint }}</span>
        </div>
      </div>
    </div>

    <div class="detail-card" v-if="activeTier" :style="{ borderColor: activeTier.color }">
      <div class="detail-header" :style="{ backgroundColor: activeTier.color }">
        <div>
          <h3>{{ activeTier.emoji }} {{ activeTier.name }}</h3>
          <span class="detail-tagline">{{ activeTier.tagline }}</span>
        </div>
        <img :src="`/images/germany/qmp-${activeTier.key}.svg`" class="qmp-harvest-img" />
        <div class="quick-stats">
          <span><strong>Oechsle</strong> {{ activeTier.oechsleRange }}°</span>
          <span><strong>潛在酒精</strong> {{ activeTier.potentialAlc }}</span>
          <span><strong>典型殘糖</strong> {{ activeTier.rs }}</span>
        </div>
      </div>

      <div class="detail-body">
        <div class="detail-grid">
          <div class="info-block">
            <h4>📐 法規規定</h4>
            <ul>
              <li v-for="(rule, i) in activeTier.rules" :key="i">{{ rule }}</li>
            </ul>
          </div>
          <div class="info-block">
            <h4>🍇 採收與釀造</h4>
            <p>{{ activeTier.harvest }}</p>
          </div>
          <div class="info-block">
            <h4>👃 風味特徵</h4>
            <div class="aroma-chips">
              <span
                v-for="a in activeTier.aromas"
                :key="a"
                class="chip"
                :style="{ borderColor: activeTier.color, backgroundColor: activeTier.color + '22' }"
              >{{ a }}</span>
            </div>
          </div>
          <div class="info-block">
            <h4>🍽️ 餐酒搭配</h4>
            <p>{{ activeTier.pairings }}</p>
          </div>
          <div class="info-block full-width">
            <h4>🌟 經典酒莊代表</h4>
            <div class="example-grid">
              <div v-for="ex in activeTier.examples" :key="ex.name" class="ex-card">
                <strong>{{ ex.name }}</strong>
                <span>{{ ex.note }}</span>
              </div>
            </div>
          </div>
          <div class="info-block full-width" v-if="activeTier.keyFact">
            <h4>💡 重點知識</h4>
            <p class="key-fact">{{ activeTier.keyFact }}</p>
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

const defaultTiers = [
  {
    key: 'kabinett',
    name: 'Kabinett',
    emoji: '🌱',
    color: '#7CB342',
    oechsleRange: '70-85',
    potentialAlc: '7-9% abv',
    rs: '乾型 9-18 g/L；半乾 18-45 g/L',
    tagline: '入門精品——清爽輕盈的早採 Riesling',
    styleHint: '輕盈精緻',
    rules: [
      'QmP 最低等級',
      'Mosel Riesling Oechsle 至少 70°（其他產區 73-78°）',
      '禁止 chaptalisation（加糖補酒精）',
      '可釀為 trocken（乾）/ feinherb / halbtrocken / lieblich / süss 各甜度'
    ],
    harvest: '常規採收期或稍晚採收。葡萄健康無貴腐。發酵可完整或保留少量殘糖。',
    aromas: ['青蘋果', '檸檬', '萊姆', '白花', '礦物', '微微汽油（陳年後）'],
    pairings: '海鮮 Tapas、亞洲料理、壽司、生蠔、清蒸魚、清爽沙拉',
    examples: [
      { name: 'Selbach-Oster Zeltinger Sonnenuhr Kabinett', note: 'Mosel 經典' },
      { name: 'J.J. Prüm Wehlener Sonnenuhr Kabinett', note: 'Mosel 神級酒莊入門款' },
      { name: 'Dr. Loosen Bernkasteler Lay Kabinett', note: '優雅花香派' }
    ],
    keyFact: '「Kabinett」原意為「珍藏櫃」——傳說 18 世紀 Eberbach 修道院將最好的酒收藏在 Kabinettkeller。Kabinett Riesling 是德國最被低估的酒款，輕盈酒精（7-8.5%）配上活潑酸度與優雅果香，是日常餐酒的完美選擇。'
  },
  {
    key: 'spatlese',
    name: 'Spätlese',
    emoji: '🍂',
    color: '#FFB300',
    oechsleRange: '76-95',
    potentialAlc: '8-11% abv',
    rs: '乾型 9-18 g/L；半乾 18-45 g/L；甜型 45-90+ g/L',
    tagline: '晚採——濃縮的成熟果香',
    styleHint: '中等甜度 / 飽滿',
    rules: [
      '「spät」=晚、「Lese」=採收',
      'Mosel Riesling Oechsle 至少 76°（其他產區 80-90°）',
      '葡萄須完全成熟、可含部分貴腐葡萄',
      '禁止加糖'
    ],
    harvest: '在 Kabinett 採收後 1-3 週進行——此時葡萄更成熟、糖度更高、酸度仍保有。可能含少量貴腐葡萄。',
    aromas: ['白桃', '杏桃', '蜂蜜', '熱帶水果', '橙花', '香料', '柑橘皮'],
    pairings: '辣味亞洲料理（泰式 / 印度）、烤豬肉、鵝肝、藍紋乳酪、蘋果塔',
    examples: [
      { name: 'J.J. Prüm Graacher Himmelreich Spätlese', note: '經典 Mosel Spätlese' },
      { name: 'Egon Müller Scharzhofberger Spätlese', note: '世界頂級 Saar' },
      { name: 'Dönnhoff Niederhäuser Hermannshöhle Spätlese', note: 'Nahe 巨匠' }
    ],
    keyFact: '德國 Spätlese 既可釀為「乾型 trocken」（高酒精 13-14%、無甜感）也可釀為「傳統甜型」（酒精 8-9%、明顯甜感）。同一葡萄因發酵停止點不同，可產生兩種完全不同風格——這是德國 Riesling 的獨特魅力之一。'
  },
  {
    key: 'auslese',
    name: 'Auslese',
    emoji: '🍯',
    color: '#FF8F00',
    oechsleRange: '83-110',
    potentialAlc: '9-12.5% abv',
    rs: '殘糖通常 60-150+ g/L（也有 trocken 版本）',
    tagline: '精選——逐串挑選的成熟與貴腐',
    styleHint: '甜美飽滿',
    rules: [
      '「Aus」=出 / 挑出、「Lese」=採收',
      'Mosel Riesling Oechsle 至少 83°（其他產區 88-100°）',
      '須以「逐串挑選」的方式採收——只取完全成熟、含貴腐的葡萄串',
      '禁止加糖'
    ],
    harvest: '極晚採收，葡萄串大多含貴腐霉（Botrytis cinerea）。手工逐串挑選——須剔除未熟或腐敗（非貴腐）的葡萄。',
    aromas: ['蜂蜜', '杏桃乾', '無花果', '芒果', '番紅花', '生薑', '橙皮蜜餞', '貴腐特有的薑黃 / 臘肉香'],
    pairings: '鵝肝、藍紋乳酪、果香水果塔、純飲飯後甜品；可陳年 30-50 年',
    examples: [
      { name: 'J.J. Prüm Wehlener Sonnenuhr Auslese', note: 'Mosel Auslese 標竿' },
      { name: 'Dr. Loosen Erdener Prälat Auslese', note: '紅板岩 Auslese' },
      { name: 'Egon Müller Scharzhofberger Auslese', note: '收藏家終極' }
    ],
    keyFact: 'Auslese 介於「精緻晚收」與「貴腐甜酒」之間。Goldkapsel（金帽封）標示更高品質、Lange Goldkapsel（長金帽）為最高 Auslese——通常含更多貴腐葡萄、更接近 BA 的濃郁度。Auslese 老酒（30+ 年）是世界上最複雜的甜白酒之一。'
  },
  {
    key: 'beerenauslese',
    name: 'Beerenauslese (BA)',
    emoji: '🍇',
    color: '#E65100',
    oechsleRange: '110-128',
    potentialAlc: '10-15% abv',
    rs: '殘糖 150-250+ g/L',
    tagline: '逐粒挑選——必含貴腐的甜美奇蹟',
    styleHint: '極甜稀有',
    rules: [
      '「Beeren」=葡萄粒、「Auslese」=精選',
      'Oechsle 至少 110°（所有產區一致）',
      '須「逐粒」挑選——只取被貴腐霉感染、果汁濃縮的葡萄粒',
      '產量極低：每公頃 5-15 hL（一般酒款的 1/5）',
      '禁止加糖'
    ],
    harvest: '11 月以後採收。每位採收工人一天只能採 5-10 公斤葡萄。葡萄粒已乾縮為「葡萄乾狀」，糖分極度濃縮。',
    aromas: ['蜂蜜', '杏桃乾', '無花果乾', '番紅花', '橙皮蜜餞', '太妃糖', '貴腐獨特薑黃香'],
    pairings: '鵝肝、頂級藍紋乳酪、純飲飯後品味；陳年潛力 50+ 年',
    examples: [
      { name: 'Egon Müller Scharzhofberger BA', note: '世界最稀有的 Riesling 之一' },
      { name: 'Dönnhoff Oberhäuser Brücke BA', note: 'Nahe 神品' },
      { name: 'J.J. Prüm BA', note: 'Mosel 經典' }
    ],
    keyFact: 'BA 並非每年都能釀造——僅在貴腐霉適度發生的年份可能。一棵葡萄樹一年可能只能釀出半瓶 BA。價格通常為 Auslese 的 5-10 倍。常以 375mL 半瓶裝銷售。'
  },
  {
    key: 'eiswein',
    name: 'Eiswein',
    emoji: '❄️',
    color: '#0288D1',
    oechsleRange: '110-128',
    potentialAlc: '7-12% abv',
    rs: '殘糖 150-300 g/L、酸度極高 10-14 g/L',
    tagline: '冰酒——零下 7°C 採收的冰凍奇蹟',
    styleHint: '極甜極酸',
    rules: [
      'Oechsle 須達 BA 等級（至少 110°）',
      '葡萄須在自然狀態下凍結——氣溫須降至 -7°C 或更低',
      '葡萄不可被貴腐霉感染（與 BA/TBA 的關鍵差異）',
      '冰凍葡萄須在凍結狀態下立即壓榨——僅榨出極少量超濃縮汁液',
      '禁止人工冷凍（與某些國家不同）'
    ],
    harvest: '12 月至 1 月（甚至 2 月）的清晨 4-7 點採收，氣溫須穩定低於 -7°C。冰凍葡萄壓榨時，水分以冰晶留在壓榨機，僅濃縮汁液流出。',
    aromas: ['新鮮杏桃', '熱帶水果（百香果、芒果）', '柑橘皮', '蜂蜜', '生薑'],
    pairings: '果香甜點（不要過甜）、藍紋乳酪、純飲；極長陳年潛力',
    examples: [
      { name: 'Dr. Loosen Eiswein', note: '經典 Mosel Eiswein' },
      { name: 'Dönnhoff Eiswein', note: 'Nahe 頂級' },
      { name: 'Selbach-Oster Eiswein', note: '酸度極致派' }
    ],
    keyFact: 'Eiswein 與 BA/TBA 不同——它保留新鮮純淨的果香（無貴腐特有的薑黃 / 臘肉香）。德國加拿大同為冰酒主要產地，但德國 Eiswein 必須「自然冷凍」，加拿大則允許某些技術變化。近年因氣候暖化，能釀製 Eiswein 的年份越來越少——2019 年德國全國僅 7 家酒莊成功釀造 Eiswein。'
  },
  {
    key: 'tba',
    name: 'Trockenbeerenauslese (TBA)',
    emoji: '👑',
    color: '#5D4037',
    oechsleRange: '150-200+',
    potentialAlc: '5.5-8% abv',
    rs: '殘糖 250-400+ g/L',
    tagline: '乾葡萄逐粒——德國甜酒的絕對巔峰',
    styleHint: '極致濃縮',
    rules: [
      '「Trocken」=乾、「Beeren」=葡萄粒、「Auslese」=精選',
      'Oechsle 至少 150°（所有產區一致）',
      '葡萄須極端貴腐感染——形如「葡萄乾」般徹底乾縮',
      '極稀有——可能多年才能釀造一次',
      '產量極低：每公頃 1-5 hL（一棵葡萄樹可能釀不到一杯）'
    ],
    harvest: '11 月底至 12 月。每串葡萄可能僅 5-10 粒可用。極度濃縮——一公斤葡萄可能僅榨出 100-200 毫升汁液。發酵極慢、酒精低（5-8%）、糖分極高。',
    aromas: ['無花果乾', '杏桃乾', '橙皮蜜餞', '番紅花', '焦糖', '蜂蜜', '太妃糖', '濃郁貴腐香'],
    pairings: '頂級鵝肝、純飲品味；可陳年 100+ 年',
    examples: [
      { name: 'Egon Müller Scharzhofberger TBA', note: '世界最昂貴白酒之一（單瓶可達 €15,000+）' },
      { name: 'Dönnhoff TBA', note: 'Nahe 終極' },
      { name: 'Dr. Loosen Erdener Prälat TBA', note: '紅板岩 TBA' }
    ],
    keyFact: 'TBA 是世界上最昂貴的白酒類型之一。Egon Müller Scharzhofberger TBA 通常每瓶 €5,000-€20,000，1976 年份在拍賣會曾達 €25,000+。每年全德國總產量可能僅幾百瓶。即使在大酒莊，也可能 5-10 年才能釀造一次。'
  }
]

const tiers = computed(() => props.slide.tiers || defaultTiers)
const activeKey = ref(props.slide.defaultKey || 'auslese')
const activeTier = computed(() => tiers.value.find((t) => t.key === activeKey.value) || tiers.value[0])
</script>

<style scoped>
.qmp-sweetness-slide {
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

.ladder-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
}

.tier-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tier-row:hover {
  transform: translateX(4px);
}

.tier-row.active .tier-step {
  box-shadow: 0 6px 16px rgba(26, 77, 110, 0.3);
  transform: scale(1.02);
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.tier-step {
  height: 56px;
  border-radius: 0 28px 28px 0;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.step-content {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
}

.tier-num {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
}

.tier-name {
  font-size: 1.05rem;
  flex: 1;
}

.tier-oechsle {
  background: rgba(255, 255, 255, 0.25);
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tier-meta {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.tier-tagline {
  color: #3a4a5a;
  font-size: 0.85rem;
  font-style: italic;
}

.tier-style-pill {
  display: inline-block;
  border: 1px solid;
  padding: 0.15rem 0.6rem;
  border-radius: 10px;
  font-size: 0.74rem;
  font-weight: 600;
  width: fit-content;
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border: 2px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(26, 77, 110, 0.12);
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

.qmp-harvest-img {
  width: 90px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.9;
  flex-shrink: 0;
  align-self: center;
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

.quick-stats {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.78rem;
  text-align: right;
}

.quick-stats strong {
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

.aroma-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  border: 1px solid;
  padding: 0.25rem 0.7rem;
  border-radius: 14px;
  font-size: 0.8rem;
  color: #2c3e50;
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

.key-fact {
  background: linear-gradient(135deg, #f5f7fa 0%, #e8eef4 100%);
  padding: 0.7rem 0.9rem;
  border-left: 3px solid #d4a017;
  border-radius: 4px;
  font-size: 0.85rem !important;
  color: #2c3e50 !important;
}

@media (max-width: 768px) {
  .qmp-sweetness-slide {
    padding: 1rem;
  }
  .tier-step {
    width: 100% !important;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .quick-stats {
    text-align: left;
  }
}
</style>
