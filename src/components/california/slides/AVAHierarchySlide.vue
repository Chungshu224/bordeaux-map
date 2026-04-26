<template>
  <div class="ava-hierarchy-slide">
    <header class="avh-header">
      <h2 class="avh-title">{{ slide.title || '美國 AVA 階層系統互動詳解' }}</h2>
      <p v-if="slide.description" class="avh-desc">{{ slide.description }}</p>
    </header>

    <!-- 階層金字塔 -->
    <div class="avh-pyramid">
      <button
        v-for="(lv, idx) in LEVELS"
        :key="lv.key"
        class="avh-band"
        :class="{ active: currentKey === lv.key }"
        :style="{
          '--accent': lv.color,
          '--width': `${50 + idx * 12}%`
        }"
        @click="currentKey = lv.key"
      >
        <span class="avh-band-name">{{ lv.name }}</span>
        <span class="avh-band-eng">{{ lv.eng }}</span>
      </button>
    </div>

    <article v-if="current" class="avh-card" :style="{ '--accent': current.color }">
      <div class="avh-card-head">
        <h3 class="avh-card-title">
          {{ current.name }}
          <span class="avh-card-eng">{{ current.eng }}</span>
        </h3>
        <p class="avh-card-tag">{{ current.tagline }}</p>
      </div>

      <div class="avh-grid">
        <section class="avh-section">
          <h4>📋 法定要求</h4>
          <ul>
            <li v-for="(r, i) in current.rules" :key="i">{{ r }}</li>
          </ul>
        </section>

        <section class="avh-section">
          <h4>🍷 標籤葡萄含量</h4>
          <p class="avh-bigfact" :style="{ color: current.color }">{{ current.minPct }}</p>
          <p class="avh-note">{{ current.minPctNote }}</p>
        </section>

        <section class="avh-section avh-examples">
          <h4>🗺️ 代表案例</h4>
          <div class="avh-chips">
            <span v-for="ex in current.examples" :key="ex" class="avh-chip">{{ ex }}</span>
          </div>
        </section>

        <section class="avh-section avh-trivia">
          <h4>💡 知識重點</h4>
          <p>{{ current.trivia }}</p>
        </section>
      </div>
    </article>

    <!-- 對照表 -->
    <div class="avh-compare">
      <h4 class="avh-compare-title">⚖️ 與其他國家對照</h4>
      <div class="avh-compare-grid">
        <div class="avh-cmp-card">
          <strong>🇺🇸 美國 AVA</strong>
          <p>純<strong>地理邊界</strong>定義，不規範品種、產量、釀造法</p>
        </div>
        <div class="avh-cmp-card">
          <strong>🇫🇷 法國 AOC</strong>
          <p>地理 + <strong>品種 + 產量 + 釀造</strong>全面規範</p>
        </div>
        <div class="avh-cmp-card">
          <strong>🇮🇹 義大利 DOC/DOCG</strong>
          <p>地理 + 品種 + 釀造 + <strong>政府品質審查</strong></p>
        </div>
        <div class="avh-cmp-card">
          <strong>🇩🇪 德國 VDP</strong>
          <p>民間自律組織 + 葡萄園分級（Grosses Gewächs）</p>
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

const LEVELS = [
  {
    key: 'sub-ava',
    name: '子 AVA / 巢狀 AVA',
    eng: 'Sub-AVA / Nested AVA',
    color: '#7c3030',
    tagline: '最精細的地理單位 — 風土最一致、酒款最具表現',
    rules: [
      '位於更大 AVA 之內（如 Oakville 在 Napa Valley 內）',
      '需證明該區風土與母 AVA 顯著不同',
      '由 TTB（菸酒稅貿易局）審核地理、地質、氣候、歷史依據',
      '酒標可同時標示子 AVA 與母 AVA'
    ],
    minPct: '85%',
    minPctNote: '酒標標示子 AVA 時，至少 85% 葡萄須來自該子 AVA',
    examples: [
      'Oakville (Napa)',
      'Rutherford (Napa)',
      'Stags Leap District (Napa)',
      'Russian River Valley (Sonoma)',
      'Bennett Valley (Sonoma)',
      'Santa Rita Hills (Santa Barbara)'
    ],
    trivia: '加州 Napa Valley 內有 16 個子 AVA，Sonoma County 有 19 個 AVA，是全美 AVA 細分最詳盡的兩個產區。子 AVA 通常代表更高品質與更明確風土特徵。'
  },
  {
    key: 'ava',
    name: 'AVA（葡萄酒法定產區）',
    eng: 'American Viticultural Area',
    color: '#a85c2c',
    tagline: '美國葡萄酒地理識別系統的核心 — 純地理定義',
    rules: [
      '由 TTB 1980 年起設立並管理（首個 AVA：Augusta, Missouri）',
      '需提供地理、地質、氣候、歷史等證明',
      '不規範葡萄品種、產量、釀造方法（與歐洲根本差異）',
      '邊界由聯邦法規明確定義'
    ],
    minPct: '85%',
    minPctNote: '酒標標示 AVA 時，至少 85% 葡萄須來自該 AVA',
    examples: [
      'Napa Valley',
      'Sonoma Coast',
      'Paso Robles',
      'Willamette Valley (Oregon)',
      'Walla Walla Valley (WA/OR)',
      'Finger Lakes (New York)'
    ],
    trivia: '截至 2025 年，美國共有 270+ 個 AVA。AVA 的邊界完全基於地理特徵（土壤、氣候、地形），這是與歐洲 AOC/DOC 系統的根本區別 — 美國酒農可在 AVA 內種植任何品種。'
  },
  {
    key: 'county',
    name: '郡 (County)',
    eng: 'County',
    color: '#c4881e',
    tagline: '行政單位定義 — 較寬鬆、覆蓋面積大',
    rules: [
      '基於行政區劃（不需 TTB 額外審核）',
      '通常涵蓋多個 AVA',
      '酒標可單獨標示郡名（如 Sonoma County）',
      '常用於混調多 AVA 來源的酒款'
    ],
    minPct: '75%',
    minPctNote: '酒標標示郡名時，至少 75% 葡萄須來自該郡',
    examples: [
      'Napa County',
      'Sonoma County',
      'Mendocino County',
      'Monterey County',
      'San Luis Obispo County'
    ],
    trivia: '一個郡可包含多個 AVA — 例如 Sonoma County 涵蓋 Russian River Valley、Sonoma Coast、Dry Creek Valley 等 19 個 AVA。'
  },
  {
    key: 'state',
    name: '州 (State)',
    eng: 'State',
    color: '#7e9c4a',
    tagline: '最寬鬆地理層級 — 適用大量混調與量產酒',
    rules: [
      '基於州行政邊界',
      '無 TTB 額外審查',
      '常見於量產商業酒款（如 "California" 標示）'
    ],
    minPct: '100%',
    minPctNote: '加州法律規定，標 "California" 須 100% 來自該州（高於聯邦標準）',
    examples: [
      'California',
      'Oregon',
      'Washington State',
      'New York'
    ],
    trivia: '加州法規比聯邦更嚴格 — 標 "California" 需 100% 來自加州（聯邦標準為 75%）。這是加州業界自律提升品質形象的重要措施。'
  },
  {
    key: 'usa',
    name: '美國 (American)',
    eng: 'American',
    color: '#6c8aa6',
    tagline: '最低層級標示 — 多州混調或進口葡萄汁',
    rules: [
      '可使用任何州的葡萄混調',
      '可包含進口葡萄汁（需符合聯邦規範）',
      '不可標示年份（除非全部葡萄為同一年份）'
    ],
    minPct: '不適用',
    minPctNote: '無地理產地要求，僅須在美國境內裝瓶',
    examples: [
      'American Wine（多州混調）',
      '部分進口分裝商業品牌'
    ],
    trivia: '商業大廠常用的最低層級。標示 "American Wine" 通常代表多州混調或包含進口葡萄汁的低價量產酒，與精品酒市場無關。'
  }
]

const currentKey = ref(props.slide?.defaultKey || 'sub-ava')
const current = computed(() => LEVELS.find(l => l.key === currentKey.value))
</script>

<style scoped>
.ava-hierarchy-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 8px 4px;
}
.avh-header { text-align: center; }
.avh-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.avh-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.avh-pyramid {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  background: linear-gradient(180deg, #fff 0%, #f9faf7 100%);
  border-radius: 12px; padding: 14px 8px;
}
.avh-band {
  width: var(--width);
  border: 2px solid var(--accent);
  background: #fff;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .18s ease;
}
.avh-band:hover {
  background: color-mix(in srgb, var(--accent) 12%, #fff);
  transform: scale(1.02);
}
.avh-band.active {
  background: var(--accent); color: #fff;
  box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 40%, transparent);
}
.avh-band-name { font-weight: 700; font-size: 0.95rem; }
.avh-band-eng { font-size: 0.78rem; opacity: 0.85; }

.avh-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 5%, #fff) 100%);
}
.avh-card-head { margin-bottom: 14px; }
.avh-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.avh-card-eng { font-size: 0.85rem; color: #889; font-style: italic; font-weight: 400; }
.avh-card-tag { margin: 4px 0 0; font-size: 0.95rem; color: #555; font-weight: 500; }

.avh-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.avh-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.avh-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.avh-section ul li { margin: 0 0 3px; }
.avh-section p { margin: 4px 0; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }

.avh-bigfact { font-size: 2.2rem; font-weight: 800; margin: 0 !important; line-height: 1; }
.avh-note { font-size: 0.82rem !important; color: #666 !important; }

.avh-examples, .avh-trivia { grid-column: span 2; }
.avh-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.avh-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}
.avh-trivia {
  background: color-mix(in srgb, var(--accent) 7%, #fff);
  border-radius: 8px;
  padding: 10px 12px;
}

.avh-compare {
  background: #fff;
  border: 1px solid #e2e4ea;
  border-radius: 12px;
  padding: 14px;
}
.avh-compare-title { margin: 0 0 10px; font-size: 1rem; color: #2c3e50; }
.avh-compare-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.avh-cmp-card {
  background: #f5f6f8;
  border-radius: 8px;
  padding: 10px;
}
.avh-cmp-card strong { display: block; margin-bottom: 4px; font-size: 0.9rem; color: #2c3e50; }
.avh-cmp-card p { margin: 0; font-size: 0.8rem; color: #555; line-height: 1.5; }

@media (max-width: 768px) {
  .avh-grid { grid-template-columns: 1fr; }
  .avh-examples, .avh-trivia { grid-column: auto; }
  .avh-compare-grid { grid-template-columns: 1fr 1fr; }
  .avh-band { width: 95% !important; }
}
</style>
