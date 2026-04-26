<template>
  <div class="au-gi-slide">
    <header class="agi-header">
      <h2 class="agi-title">{{ slide.title || '澳洲 GI 階層系統互動詳解' }}</h2>
      <p v-if="slide.subtitle" class="agi-desc">{{ slide.subtitle }}</p>
    </header>

    <!-- 階層按鈕 -->
    <nav class="agi-tabs">
      <button
        v-for="lv in LEVELS"
        :key="lv.key"
        class="agi-tab"
        :class="{ active: currentKey === lv.key }"
        :style="{ '--accent': lv.color }"
        @click="currentKey = lv.key"
      >
        <span class="agi-tab-emoji">{{ lv.emoji }}</span>
        <span class="agi-tab-name">{{ lv.name }}</span>
      </button>
    </nav>

    <article v-if="current" class="agi-card" :style="{ '--accent': current.color }">
      <div class="agi-card-head">
        <h3 class="agi-card-title">
          {{ current.name }}
          <span class="agi-card-eng">{{ current.eng }}</span>
        </h3>
        <p class="agi-card-tag">{{ current.tagline }}</p>
      </div>

      <div class="agi-grid">
        <section class="agi-section">
          <h4>📋 法定要件</h4>
          <ul>
            <li v-for="(r, i) in current.rules" :key="i">{{ r }}</li>
          </ul>
        </section>

        <section class="agi-section">
          <h4>🍷 標籤含量規定</h4>
          <p class="agi-bigfact">{{ current.minPct }}</p>
          <p class="agi-note">{{ current.minPctNote }}</p>
        </section>

        <section class="agi-section agi-examples">
          <h4>🗺️ 代表案例</h4>
          <div class="agi-chips">
            <span v-for="ex in current.examples" :key="ex" class="agi-chip">{{ ex }}</span>
          </div>
        </section>

        <section class="agi-section agi-trivia">
          <h4>💡 知識重點</h4>
          <p>{{ current.trivia }}</p>
        </section>
      </div>
    </article>

    <div class="agi-bottom">
      <h4 class="agi-bottom-title">⚖️ 與其他國家的根本差異</h4>
      <ul>
        <li><strong>🇫🇷 法國 AOC：</strong>嚴格規範品種、產量、種植與釀造方法</li>
        <li><strong>🇺🇸 美國 AVA：</strong>純地理邊界，不規範品種或釀造</li>
        <li><strong>🇦🇺 澳洲 GI：</strong>純地理邊界（同 AVA 哲學），但有 85% 葡萄含量規定 — 強調風土辨識而非配方管制</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const LEVELS = [
  {
    key: 'sub-region',
    name: 'Sub-Region',
    eng: '子產區',
    emoji: '🎯',
    color: '#7b1818',
    tagline: '最精細的單位 — 風土最一致、最具特色',
    rules: [
      '由 Wine Australia 認證，須證明風土與母 Region 顯著不同',
      '通常具獨特土壤、海拔或氣候特徵',
      '酒標可同時標示 Sub-Region 與母 Region',
      '目前澳洲僅有 14 個正式 Sub-Region'
    ],
    minPct: '85%',
    minPctNote: '至少 85% 葡萄須來自該 Sub-Region',
    examples: [
      'High Eden（Eden Valley 內）',
      'Lenswood（Adelaide Hills 內）',
      'Piccadilly Valley（Adelaide Hills 內）',
      'Pokolbin（Hunter Valley 內）',
      'Great Western（Grampians 內）'
    ],
    trivia: '澳洲 Sub-Region 數量遠少於美國（Napa 一個 AVA 就有 16 個子 AVA），因認證程序嚴格、需業界共識。例如 Eden Valley 內的 High Eden 海拔 500–600m，氣候比母 Region 更涼，Riesling 風格更精緻緊實。'
  },
  {
    key: 'region',
    name: 'Region',
    eng: '次產區（最常見）',
    emoji: '📍',
    color: '#c8a951',
    tagline: '澳洲酒標最常見的 GI 層級 — 風土辨識核心',
    rules: [
      '由 Wine Australia 認證的法定產區',
      '須有明確地理邊界與風土特徵',
      '酒標可單獨標示（市場辨識度最高）',
      '目前澳洲共有 65+ 個 Region'
    ],
    minPct: '85%',
    minPctNote: '至少 85% 葡萄須來自該 Region',
    examples: [
      'Barossa Valley',
      'McLaren Vale',
      'Margaret River',
      'Yarra Valley',
      'Coonawarra',
      'Hunter Valley',
      'Tasmania（同時為 Zone 與 Region）'
    ],
    trivia: 'Region 是消費者與酒商最熟悉的層級。當你看到「Margaret River Cabernet Sauvignon」或「Barossa Valley Shiraz」時，這就是 Region 標示。Region 之間的風土差異很大 — Margaret River（海洋性涼爽）與 Barossa（地中海炎熱）距離 3,000 公里。'
  },
  {
    key: 'zone',
    name: 'Zone',
    eng: '大區',
    emoji: '🌐',
    color: '#2980b9',
    tagline: '較大的地理範圍 — 涵蓋多個 Region',
    rules: [
      '通常基於行政區劃或大型地理區塊',
      '一個 Zone 可包含多個 Region',
      '酒標較少單獨標示（市場辨識度低於 Region）',
      '酒商有時用於混調多 Region 葡萄的酒款'
    ],
    minPct: '85%',
    minPctNote: '至少 85% 葡萄須來自該 Zone',
    examples: [
      'Barossa Zone（含 Barossa Valley + Eden Valley）',
      'Adelaide Super Zone',
      'Limestone Coast Zone（含 Coonawarra、Padthaway）',
      'Lower Murray Zone（含 Riverland）'
    ],
    trivia: '注意：Barossa Zone 與 Barossa Valley 不同！Barossa Zone 包含 Barossa Valley（炎熱地中海）和 Eden Valley（高海拔涼爽），兩者風格差異很大。「Barossa」單獨標示通常指 Zone（混調），而 「Barossa Valley」則是更精確的 Region 標示。'
  },
  {
    key: 'state',
    name: 'State',
    eng: '州',
    emoji: '🏛️',
    color: '#27ae60',
    tagline: '州級行政邊界 — 最寬鬆的地理層級',
    rules: [
      '基於澳洲六州行政邊界',
      '可涵蓋多個 Zone 與 Region',
      '酒標常見於量產混調酒款（如 "South Australia"）',
      '允許跨多個產區混調但維持高品質定位'
    ],
    minPct: '85%',
    minPctNote: '至少 85% 葡萄須來自該州',
    examples: [
      'South Australia（佔全國 50% 產量）',
      'Victoria',
      'New South Wales',
      'Western Australia',
      'Tasmania（同時為州、Zone、Region）'
    ],
    trivia: '「South Australia」標示常出現於中價位酒款，代表混調自 SA 內多個 Region（如 Barossa Valley + McLaren Vale + Adelaide Hills）。雖然不如單一 Region 精確，但能展現 SA 整體風格特色。'
  },
  {
    key: 'country',
    name: 'Country',
    eng: 'South Eastern Australia',
    emoji: '🇦🇺',
    color: '#7f8c8d',
    tagline: '最寬鬆的 GI — 跨多州混調的量產酒',
    rules: [
      '「South Eastern Australia」是澳洲最大的官方 GI',
      '涵蓋 SA、VIC、NSW、QLD（南部）、TAS — 即全澳 95% 葡萄園',
      '專為量產商業混調設計（如 Yellow Tail、Jacob\'s Creek 入門款）',
      '允許跨州混調但維持基本品質保證'
    ],
    minPct: '85%',
    minPctNote: '至少 85% 葡萄須來自上述五州（不含 WA、NT 北部）',
    examples: [
      'Yellow Tail（多數系列）',
      'Jacob\'s Creek（入門系列）',
      'Lindeman\'s Bin 系列',
      '大型酒商超市量產款'
    ],
    trivia: '「South Eastern Australia」幾乎涵蓋整個澳洲（除 WA 與 NT 外），看似廣泛但仍保證澳洲產地與基本品質。這個層級的酒通常價格在 NT$ 300-600，是國際市場最常見的入門澳洲酒。'
  }
]

const currentKey = ref(props.slide?.defaultKey || 'region')
const current = computed(() => LEVELS.find(l => l.key === currentKey.value))
</script>

<style scoped>
.au-gi-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 12px;
  background: #fff;
  border-radius: 14px;
  width: 100%;
  max-width: 100%;
}
.agi-header { text-align: center; }
.agi-title { margin: 0 0 4px; font-size: 1.5rem; color: #2c3e50; }
.agi-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.agi-tabs { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.agi-tab {
  border: 2px solid var(--accent);
  background: #fff;
  border-radius: 999px;
  padding: 8px 14px;
  cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  font-size: 0.88rem; color: var(--accent);
  transition: all .18s ease;
}
.agi-tab:hover { background: color-mix(in srgb, var(--accent) 12%, #fff); }
.agi-tab.active {
  background: var(--accent); color: #fff;
  box-shadow: 0 3px 10px color-mix(in srgb, var(--accent) 40%, transparent);
}
.agi-tab-emoji { font-size: 1.05rem; }

.agi-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 5%, #fff) 100%);
}
.agi-card-head { margin-bottom: 14px; }
.agi-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.agi-card-eng { font-size: 0.85rem; color: #889; font-style: italic; font-weight: 400; }
.agi-card-tag { margin: 4px 0 0; font-size: 0.95rem; color: #555; font-weight: 500; }

.agi-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.agi-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.agi-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.agi-section ul li { margin: 0 0 3px; }
.agi-section p { margin: 4px 0; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }

.agi-bigfact {
  font-size: 2.2rem; font-weight: 800; color: var(--accent);
  margin: 0 !important; line-height: 1;
}
.agi-note { font-size: 0.82rem !important; color: #666 !important; }

.agi-examples, .agi-trivia { grid-column: span 2; }
.agi-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.agi-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}
.agi-trivia {
  background: color-mix(in srgb, var(--accent) 7%, #fff);
  border-radius: 8px;
  padding: 10px 12px;
}

.agi-bottom {
  background: #f5f6f8; border-radius: 10px; padding: 12px 16px;
}
.agi-bottom-title { margin: 0 0 8px; font-size: 0.95rem; color: #2c3e50; }
.agi-bottom ul { margin: 0; padding-left: 18px; font-size: 0.85rem; color: #2c3e50; line-height: 1.6; }

@media (max-width: 768px) {
  .agi-grid { grid-template-columns: 1fr; }
  .agi-examples, .agi-trivia { grid-column: auto; }
}
</style>
