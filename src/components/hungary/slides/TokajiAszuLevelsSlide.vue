<template>
  <div class="tokaji-aszu-slide">
    <header class="tas-header">
      <h2 class="tas-title">{{ slide.title || 'Tokaji 貴腐甜酒分級互動詳解' }}</h2>
      <p v-if="slide.description" class="tas-desc">{{ slide.description }}</p>
    </header>

    <!-- 階梯按鈕 -->
    <nav class="tas-ladder">
      <button
        v-for="lv in LEVELS"
        :key="lv.key"
        class="tas-step"
        :class="{ active: currentKey === lv.key }"
        :style="{ '--accent': lv.color, '--height': lv.height }"
        @click="currentKey = lv.key"
      >
        <span class="tas-step-name">{{ lv.name }}</span>
        <span class="tas-step-sugar">{{ lv.sugar }}</span>
      </button>
    </nav>

    <article v-if="current" class="tas-card" :style="{ '--accent': current.color }">
      <div class="tas-card-head">
        <img :src="`/images/hungary/aszu-${current.key}.svg`" class="tas-card-img" :alt="current.name" />
        <div class="tas-card-head-text">
          <h3 class="tas-card-title">
            <span class="tas-emoji">{{ current.emoji }}</span>
            {{ current.name }}
            <span class="tas-card-aliases">{{ current.aliases }}</span>
          </h3>
          <p class="tas-card-tag">{{ current.tagline }}</p>
        </div>
      </div>

      <div class="tas-grid">
        <section class="tas-section">
          <h4>🍯 殘糖規範</h4>
          <ul class="tas-spec">
            <li><span class="key">最低殘糖</span><span class="val">{{ current.sugar }}</span></li>
            <li><span class="key">最低酒精</span><span class="val">{{ current.alcohol }}</span></li>
            <li><span class="key">陳年年限</span><span class="val">{{ current.aging }}</span></li>
          </ul>
        </section>

        <section class="tas-section">
          <h4>🍇 釀造重點</h4>
          <ul>
            <li v-for="(p, i) in current.process" :key="i">{{ p }}</li>
          </ul>
        </section>

        <section class="tas-section tas-aroma">
          <h4>👃 典型風味</h4>
          <div class="tas-chips">
            <span v-for="a in current.aromas" :key="a" class="tas-chip">{{ a }}</span>
          </div>
        </section>

        <section class="tas-section">
          <h4>🍽️ 經典餐搭</h4>
          <ul>
            <li v-for="(p, i) in current.pairings" :key="i">{{ p }}</li>
          </ul>
        </section>

        <section class="tas-section tas-extra">
          <h4>💎 代表酒莊與價格</h4>
          <p class="tas-wineries"><strong>酒莊：</strong>{{ current.wineries }}</p>
          <p class="tas-price"><strong>市價：</strong>{{ current.price }}</p>
        </section>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

// 2013 年新法之後，匈牙利簡化為「Tokaji Aszú」單一等級（殘糖至少 120 g/L），
// 但傳統 3-6 puttonyos 概念仍是品酒指南與舊年份酒款的主要分級語言。
const LEVELS = [
  {
    key: '3putt',
    name: '3 Puttonyos',
    aliases: '舊制最低甜度（已廢止單獨標示）',
    emoji: '🟡',
    color: '#d8b86b',
    height: '50%',
    tagline: '入門級 Aszú — 清新平衡，介於餐酒與甜酒之間',
    sugar: '60 g/L 殘糖',
    alcohol: '11%+',
    aging: '法定 18 月桶陳 + 18 月瓶陳（≥3 年）',
    process: [
      'Aszú 葡萄量比約 3 puttony（每 puttony=25 kg）對 1 Gönc 桶（136L）基酒',
      '較少貴腐果實，酒體輕，以基酒（dry Furmint）支撐結構',
      '2013 法規後，3 puttonyos 已併入 Késői Szüret（晚摘）類別'
    ],
    aromas: ['黃蘋果', '柑橘皮', '蜂蜜', '杏桃', '焦糖'],
    pairings: ['法式肉醬', '溫和起司', '鵝肝（搭配輕款）', '亞洲甜辣料理'],
    wineries: 'Disznókő, Royal Tokaji（基本款）',
    price: 'NT$ 800–1,200 / 500ml'
  },
  {
    key: '5putt',
    name: '5 Puttonyos',
    aliases: '經典頂級 Aszú',
    emoji: '🟠',
    color: '#c47834',
    height: '70%',
    tagline: '黃金平衡 — 全球公認最具代表性的 Aszú 等級',
    sugar: '120 g/L 殘糖',
    alcohol: '11%+',
    aging: '法定 24 月桶陳 + 12 月瓶陳（≥3 年；多數酒莊陳 5–7 年）',
    process: [
      'Aszú 葡萄量約 5 puttony 對 1 Gönc 桶基酒',
      '貴腐風味顯著，酒體飽滿，酸甜平衡精準',
      '2013 法規後成為 Tokaji Aszú 法定最低標準',
      '陳年期間的「氧化氛圍」（Tokaji 傳統地窖低濕、有 Cladosporium cellare 黴）形成獨特乾果香'
    ],
    aromas: ['杏桃乾', '蜂蜜', '橘皮蜜餞', '榲桲', '烤焦糖', '番紅花', '燧石'],
    pairings: ['鵝肝（首選）', '藍紋起司（Roquefort）', '焦糖核桃塔', '熟成羊乳起司'],
    wineries: 'Royal Tokaji, Oremus, Disznókő, Szepsy, Patricius',
    price: 'NT$ 2,000–4,500 / 500ml'
  },
  {
    key: '6putt',
    name: '6 Puttonyos',
    aliases: '極致濃縮版',
    emoji: '🟤',
    color: '#8b4513',
    height: '85%',
    tagline: 'Aszú 的最高表現 — 濃郁蜜糖風味、超長陳年潛力',
    sugar: '150 g/L 殘糖',
    alcohol: '11%+',
    aging: '法定 24 月桶陳 + 12 月瓶陳（多數陳 7–10 年才上市）',
    process: [
      'Aszú 葡萄量達 6 puttony 對 1 桶（或更高比例）',
      '極度濃縮的貴腐糖份與酸度，需極長陳年才能整合',
      '2013 法規後為頂級酒莊保留標示，主流酒莊已不細分',
      '陳年潛力可達 50–100 年'
    ],
    aromas: ['濃縮杏桃乾', '蜂蜜糖漿', '果醬', '無花果', '焦糖', '咖啡', '皮革', '可可'],
    pairings: ['頂級鵝肝凍', '巧克力慕斯', '蘭姆葡萄乾蛋糕', '熟成 24 月以上 Comté'],
    wineries: 'Royal Tokaji, Oremus, Szepsy（Mád 風土）',
    price: 'NT$ 4,500–8,000 / 500ml'
  },
  {
    key: 'eszencia',
    name: 'Eszencia / Esszencia',
    aliases: '世界最稀有甜酒之一',
    emoji: '👑',
    color: '#5d2e0d',
    height: '100%',
    tagline: '貴腐葡萄自身重力流出的「生命之露」— 殘糖 450g/L+',
    sugar: '450–900 g/L 殘糖',
    alcohol: '僅 1.2–6%（極低）',
    aging: '可發酵超過 10 年；裝瓶後可陳 200+ 年',
    process: [
      '完全不施壓 — 由貴腐葡萄堆積在容器中，靠自身重量滲出的果汁釀製',
      '糖度極高，酵母難以發酵，常需 4–10 年才能達到 1.2% 酒精',
      '一公頃葡萄園每年僅能產出極少量 Eszencia',
      '歷史上專供匈牙利皇室與教會使用，被認為具有療效',
      '2013 法規允許瓶裝最低酒精 1.2%（一般葡萄酒最低 8.5%）'
    ],
    aromas: ['濃縮杏桃糖漿', '蜂蜜結晶', '焦糖', '無花果乾', '蜜餞', '番紅花', '熱帶水果'],
    pairings: ['單獨品飲（用湯匙！）', '極熟成藍紋起司', '頂級巧克力松露'],
    wineries: 'Royal Tokaji, Oremus, Disznókő（限量年份才發布）',
    price: 'NT$ 30,000–200,000 / 375ml（依年份）'
  }
]

const currentKey = ref(props.slide?.defaultKey || '5putt')
const current = computed(() => LEVELS.find(l => l.key === currentKey.value))
</script>

<style scoped>
.tokaji-aszu-slide {
  display: flex; flex-direction: column; gap: 16px;
  padding: 8px 4px;
}
.tas-header { text-align: center; }
.tas-title {
  margin: 0 0 4px;
  font-size: 1.55rem;
  color: #5d2e0d;
}
.tas-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.tas-ladder {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  min-height: 140px;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, #fffaf0 0%, #fff 100%);
  border-radius: 12px;
}
.tas-step {
  flex: 1 1 0;
  max-width: 180px;
  border: 2px solid var(--accent);
  background: #fff;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  padding: 8px 10px;
  height: var(--height);
  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all .2s ease;
}
.tas-step:hover {
  background: color-mix(in srgb, var(--accent) 12%, #fff);
  transform: translateY(-2px);
}
.tas-step.active {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--accent) 45%, transparent);
}
.tas-step-name { font-weight: 700; font-size: 0.95rem; }
.tas-step-sugar { font-size: 0.78rem; opacity: 0.85; }

.tas-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 6%, #fff) 100%);
}
.tas-card-head { margin-bottom: 14px; display: flex; align-items: center; gap: 14px; }
.tas-card-head-text { flex: 1; min-width: 0; }
.tas-card-img {
  width: 105px;
  height: 75px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}
.tas-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.tas-emoji { font-size: 1.6rem; }
.tas-card-aliases { font-size: 0.85rem; color: #889; font-style: italic; font-weight: 400; }
.tas-card-tag { margin: 6px 0 0; font-size: 0.95rem; color: #555; font-weight: 500; }

.tas-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.tas-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.tas-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.tas-section ul li { margin: 0 0 3px; }

.tas-spec { list-style: none; padding: 0; }
.tas-spec li {
  display: grid; grid-template-columns: 90px 1fr; gap: 6px;
  padding: 3px 0;
  border-bottom: 1px dashed #e2e4ea;
  font-size: 0.88rem;
}
.tas-spec .key { color: #666; }
.tas-spec .val { color: var(--accent); font-weight: 600; }

.tas-aroma, .tas-extra { grid-column: span 2; }
.tas-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.tas-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}
.tas-extra p { margin: 4px 0; font-size: 0.88rem; color: #2c3e50; }
.tas-wineries strong, .tas-price strong { color: var(--accent); }

@media (max-width: 768px) {
  .tas-grid { grid-template-columns: 1fr; }
  .tas-aroma, .tas-extra { grid-column: auto; }
  .tas-step-sugar { font-size: 0.7rem; }
}
</style>
