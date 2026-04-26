<template>
  <div class="hungary-grape-slide">
    <header class="hgp-header">
      <h2 class="hgp-title">{{ slide.title || '匈牙利原生葡萄品種' }}</h2>
      <p v-if="slide.description" class="hgp-desc">{{ slide.description }}</p>
    </header>

    <nav class="hgp-tabs">
      <button
        v-for="g in GRAPES"
        :key="g.key"
        class="hgp-tab"
        :class="{ active: currentKey === g.key }"
        :style="{ '--accent': g.color }"
        @click="currentKey = g.key"
      >
        <span class="hgp-tab-emoji">{{ g.emoji }}</span>
        <span class="hgp-tab-name">{{ g.name }}</span>
        <span class="hgp-tab-type">{{ g.colorType }}</span>
      </button>
    </nav>

    <article v-if="current" class="hgp-card" :style="{ '--accent': current.color }">
      <div class="hgp-card-head">
        <h3 class="hgp-card-title">
          {{ current.name }}
          <span class="hgp-card-aliases">{{ current.aliases }}</span>
        </h3>
        <p class="hgp-card-tag">{{ current.tagline }}</p>
      </div>

      <div class="hgp-grid">
        <section class="hgp-section">
          <h4>🌍 主要產區</h4>
          <ul>
            <li v-for="(r, i) in current.regions" :key="i">
              <strong>{{ r.name }}</strong> — {{ r.note }}
            </li>
          </ul>
        </section>

        <section class="hgp-section">
          <h4>🎨 風格光譜</h4>
          <ul class="hgp-spec">
            <li><span class="key">酸度</span><span class="val">{{ current.acidity }}</span></li>
            <li><span class="key">酒體</span><span class="val">{{ current.body }}</span></li>
            <li><span class="key">陳年潛力</span><span class="val">{{ current.aging }}</span></li>
          </ul>
        </section>

        <section class="hgp-section hgp-aroma">
          <h4>👃 典型香氣</h4>
          <div class="hgp-chips">
            <span v-for="a in current.aromas" :key="a" class="hgp-chip">{{ a }}</span>
          </div>
        </section>

        <section class="hgp-section">
          <h4>🍽️ 經典餐搭</h4>
          <ul>
            <li v-for="(p, i) in current.pairings" :key="i">{{ p }}</li>
          </ul>
        </section>

        <section class="hgp-section hgp-trivia">
          <h4>💡 知識小檔案</h4>
          <p>{{ current.trivia }}</p>
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

const GRAPES = [
  {
    key: 'furmint',
    name: 'Furmint',
    aliases: 'Tokaji 之魂',
    emoji: '🌟',
    color: '#d4a017',
    colorType: '白',
    tagline: '匈牙利國寶白葡萄 — 從 dry Furmint 到頂級貴腐 Aszú 全光譜',
    regions: [
      { name: 'Tokaj', note: '占全產區 60% 種植面積；火山與黃土土壤，dry & sweet 雙風格' },
      { name: 'Somló', note: '玄武岩火山錐土壤，極礦物剛硬風格' },
      { name: 'Mád / Tállya / Mezőzombor', note: 'Tokaj 內最頂級村莊，dry Furmint 起步價 NT$1,500+' }
    ],
    acidity: '⭐⭐⭐⭐⭐ 極高（如鋼絲般）',
    body: '中等至豐厚',
    aging: 'Dry 5–15 年；Aszú 50–100+ 年',
    aromas: ['黃蘋果', '榲桲', '蜂蠟', '柑橘皮', '燧石', '煙燻', '杏桃', '濕石頭'],
    pairings: ['烤雞', '熟成羊乳起司', '北非燉羊', '日式天婦羅', '貴腐配鵝肝'],
    trivia: 'Furmint 對貴腐菌（Botrytis）特別敏感，是全球最適合釀貴腐甜酒的品種之一。其超高酸度也讓 dry Furmint 能與布根地頂級 Chardonnay、德國頂級 Riesling 並駕齊驅。'
  },
  {
    key: 'harslevelu',
    name: 'Hárslevelű',
    aliases: '「椴樹葉」之意',
    emoji: '🌸',
    color: '#a8b85c',
    colorType: '白',
    tagline: 'Tokaji 第二支柱 — 比 Furmint 更花香、更柔順',
    regions: [
      { name: 'Tokaj', note: '占產區 30%，常與 Furmint 混釀構成 Aszú' },
      { name: 'Somló', note: '單一品種 dry 白酒，酒體較柔' },
      { name: 'Eger', note: '少量種植，作為 Egri Csillag 白酒混調基底' }
    ],
    acidity: '⭐⭐⭐⭐ 高',
    body: '中等',
    aging: '5–15 年',
    aromas: ['椴樹花', '橙花蜜', '橘子', '梨子', '百香果', '麝香', '輕度礦物'],
    pairings: ['亞洲香料菜', '泰式咖哩', '熟成軟質起司', '杏桃塔'],
    trivia: 'Hárslevelű 在 Tokaji Aszú 混釀中通常占 20–40%，提供花香與柔順度，補足 Furmint 的銳利酸度。其名「椴樹葉」源自葉形形狀。'
  },
  {
    key: 'kekfrankos',
    name: 'Kékfrankos',
    aliases: 'Blaufränkisch（奧地利同名）',
    emoji: '🍷',
    color: '#7c1e3d',
    colorType: '紅',
    tagline: '匈牙利種植最廣的紅葡萄 — 從日常餐酒到頂級 Bull\'s Blood',
    regions: [
      { name: 'Eger', note: 'Egri Bikavér（公牛之血）的核心品種，火山土壤' },
      { name: 'Sopron', note: '緊鄰奧地利邊境，最高品質單一品種' },
      { name: 'Szekszárd', note: '黃土風土，圓潤豐腴風格' },
      { name: 'Villány', note: '南部最熱產區，濃郁飽滿' }
    ],
    acidity: '⭐⭐⭐⭐ 高',
    body: '中等至飽滿',
    aging: '5–15 年（頂級可至 25 年）',
    aromas: ['紅櫻桃', '黑莓', '紫羅蘭', '黑胡椒', '甘草', '可可', '皮革（陳年）'],
    pairings: ['匈牙利燉牛肉（Goulash）', '烤鴨', '羊排', '蘑菇燉飯', '熟成硬質起司'],
    trivia: 'Kékfrankos 在奧地利 Burgenland 也是旗艦品種（當地稱 Blaufränkisch）。Egri Bikavér 傳奇起源 1552 年，匈牙利兵據傳因飲此紅酒而戰勝鄂圖曼軍隊，被誤認為「飲了公牛之血」。'
  },
  {
    key: 'kadarka',
    name: 'Kadarka',
    aliases: 'Skadarska（巴爾幹同名）',
    emoji: '🍒',
    color: '#a83242',
    colorType: '紅',
    tagline: '幾近失傳的歷史品種 — 復興中的辛香精緻紅酒',
    regions: [
      { name: 'Szekszárd', note: '主要產區，黃土風土，傳統 Bikavér 配方核心' },
      { name: 'Eger', note: '次要產區，傳統 Bikavér 也含此品種' },
      { name: 'Hajós-Baja', note: '南部沙土產區，較輕盈風格' }
    ],
    acidity: '⭐⭐⭐⭐ 高',
    body: '輕至中',
    aging: '3–10 年',
    aromas: ['紅櫻桃', '草莓', '紫羅蘭', '白胡椒', '丁香', '玫瑰', '辛香料'],
    pairings: ['烤雞', '匈牙利紅椒燉肉', '烤豬肋排', '亞洲烤肉', '蘑菇料理'],
    trivia: 'Kadarka 在 19 世紀曾是匈牙利種植最廣的紅葡萄，但因產量低、易感染白粉病，共產時期幾近滅絕。1990 年代後復興，目前面積回升至約 500 公頃，被視為匈牙利「最具陳年潛力的本土紅葡萄」。'
  }
]

const currentKey = ref(props.slide?.defaultKey || 'furmint')
const current = computed(() => GRAPES.find(g => g.key === currentKey.value))
</script>

<style scoped>
.hungary-grape-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 8px 4px;
}
.hgp-header { text-align: center; }
.hgp-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.hgp-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.hgp-tabs {
  display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
}
.hgp-tab {
  border: 2px solid #d8dde4;
  background: #fff;
  border-radius: 999px;
  padding: 8px 14px;
  cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  font-size: 0.88rem;
  color: #444;
  transition: all .18s ease;
}
.hgp-tab:hover { border-color: var(--accent); color: var(--accent); }
.hgp-tab.active {
  background: var(--accent); color: #fff; border-color: var(--accent);
  box-shadow: 0 3px 10px color-mix(in srgb, var(--accent) 40%, transparent);
}
.hgp-tab-emoji { font-size: 1.1rem; }
.hgp-tab-type {
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 4px;
  background: rgba(255,255,255,0.25);
}
.hgp-tab.active .hgp-tab-type { background: rgba(255,255,255,0.35); }
.hgp-tab:not(.active) .hgp-tab-type { background: #f0f1f5; color: #888; }

.hgp-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 5%, #fff) 100%);
}
.hgp-card-head { margin-bottom: 14px; }
.hgp-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.hgp-card-aliases { font-size: 0.85rem; color: #889; font-style: italic; font-weight: 400; }
.hgp-card-tag { margin: 4px 0 0; font-size: 0.95rem; color: #555; font-weight: 500; }

.hgp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.hgp-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.hgp-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.hgp-section ul li { margin: 0 0 3px; }
.hgp-section p { margin: 0; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }

.hgp-spec { list-style: none; padding: 0; }
.hgp-spec li {
  display: grid; grid-template-columns: 80px 1fr; gap: 6px;
  padding: 3px 0;
  border-bottom: 1px dashed #e2e4ea;
  font-size: 0.88rem;
}
.hgp-spec .key { color: #666; }
.hgp-spec .val { color: #2c3e50; font-weight: 500; }

.hgp-aroma, .hgp-trivia { grid-column: span 2; }
.hgp-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.hgp-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}
.hgp-trivia {
  background: color-mix(in srgb, var(--accent) 7%, #fff);
  border-radius: 8px;
  padding: 10px 12px;
}

@media (max-width: 768px) {
  .hgp-grid { grid-template-columns: 1fr; }
  .hgp-aroma, .hgp-trivia { grid-column: auto; }
}
</style>
