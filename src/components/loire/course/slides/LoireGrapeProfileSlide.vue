<template>
  <div class="loire-grape-slide">
    <header class="lgp-header">
      <h2 class="lgp-title">{{ slide.title || '羅亞爾河谷代表葡萄品種' }}</h2>
      <p v-if="slide.description" class="lgp-desc">{{ slide.description }}</p>
    </header>

    <!-- 品種頁籤 -->
    <nav class="lgp-tabs">
      <button
        v-for="g in grapes"
        :key="g.key"
        class="lgp-tab"
        :class="{ active: currentKey === g.key }"
        :style="{ '--accent': g.color }"
        @click="currentKey = g.key"
      >
        <span class="lgp-tab-emoji">{{ g.emoji }}</span>
        <span class="lgp-tab-name">{{ g.name }}</span>
      </button>
    </nav>

    <!-- 主要剖面 -->
    <article v-if="current" class="lgp-card" :style="{ '--accent': current.color }">
      <div class="lgp-card-head">
        <div class="lgp-card-head-content">
          <h3 class="lgp-card-title">
            {{ current.name }}
            <span class="lgp-card-aliases">{{ current.aliases }}</span>
          </h3>
          <p class="lgp-card-tag">{{ current.tagline }}</p>
        </div>
        <div class="lgp-card-images">
          <img :src="`/images/loire/grape-${current.key}.svg`" class="lgp-img-box" :alt="`${current.name} 葡萄`" />
          <img :src="`/images/loire/bottle-${current.key}.svg`" class="lgp-img-box" :alt="`${current.name} 酒瓶`" />
        </div>
      </div>

      <div class="lgp-grid">
        <!-- 風土 -->
        <section class="lgp-section">
          <h4>🌍 主要產區</h4>
          <ul>
            <li v-for="(r, i) in current.regions" :key="i">
              <strong>{{ r.name }}</strong> — {{ r.note }}
            </li>
          </ul>
        </section>

        <!-- 風格光譜 -->
        <section class="lgp-section">
          <h4>🎨 風格光譜</h4>
          <ul class="lgp-spec">
            <li><span class="key">酸度</span><span class="val">{{ current.acidity }}</span></li>
            <li><span class="key">酒體</span><span class="val">{{ current.body }}</span></li>
            <li><span class="key">陳年潛力</span><span class="val">{{ current.aging }}</span></li>
          </ul>
        </section>

        <!-- 香氣 -->
        <section class="lgp-section lgp-aroma">
          <h4>👃 典型香氣</h4>
          <div class="lgp-chips">
            <span v-for="a in current.aromas" :key="a" class="lgp-chip">{{ a }}</span>
          </div>
        </section>

        <!-- 餐搭 -->
        <section class="lgp-section">
          <h4>🍽️ 經典餐搭</h4>
          <ul>
            <li v-for="(p, i) in current.pairings" :key="i">{{ p }}</li>
          </ul>
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

const DEFAULT_GRAPES = [
  {
    key: 'chenin',
    name: 'Chenin Blanc',
    aliases: '法文別名 Pineau de la Loire',
    emoji: '🌼',
    color: '#d6a14a',
    tagline: '羅亞爾的「萬能女王」——干、甜、氣泡無所不能',
    regions: [
      { name: 'Vouvray / Montlouis', note: 'Tuffeau 上的 sec→liquoreux 全光譜' },
      { name: 'Savennières', note: 'Anjou 片岩，極干、礦物剛硬' },
      { name: 'Quarts-de-Chaume / Bonnezeaux', note: '頂級 Botrytis 貴腐甜白' }
    ],
    acidity: '⭐⭐⭐⭐⭐ 極高',
    body: '中等至豐厚（依甜度）',
    aging: '20–50 年（頂級甜白可達百年）',
    aromas: ['黃蘋果', '蜂蜜', '榲桲', '洋甘菊', '濕羊毛', '燧石', '杏桃乾'],
    pairings: ['烤豬肉佐蘋果', 'Comté/Roquefort 起司', '亞洲甜辣料理', '貴腐甜白配藍紋起司']
  },
  {
    key: 'sauvignon',
    name: 'Sauvignon Blanc',
    aliases: '中央羅亞爾的全球標竿',
    emoji: '🌿',
    color: '#7ba344',
    tagline: 'Sancerre 與 Pouilly-Fumé——Sauvignon Blanc 的世界原點',
    regions: [
      { name: 'Sancerre', note: '燧石、Kimmeridgian 泥灰岩、白堊石灰岩三種土壤' },
      { name: 'Pouilly-Fumé', note: 'Silex 燧石占主導，煙燻 pierre à fusil 香氣' },
      { name: 'Menetou-Salon / Quincy / Reuilly', note: '性價比衛星 AOC' }
    ],
    acidity: '⭐⭐⭐⭐⭐ 極高',
    body: '輕至中',
    aging: '3–8 年（少數頂級可至 15 年）',
    aromas: ['黑醋栗芽', '青草', '葡萄柚', '百香果', '燧石', '煙燻', '碎石礦物'],
    pairings: ['Crottin de Chavignol 山羊起司', '生蠔', '蘆筍', '海鮮沙拉', '泰式檸檬料理']
  },
  {
    key: 'cabfranc',
    name: 'Cabernet Franc',
    aliases: '都漢稱為 Breton',
    emoji: '🍒',
    color: '#9c2a2a',
    tagline: '羅亞爾紅酒的靈魂——清新、菜蔬、不甘屈居波爾多副角',
    regions: [
      { name: 'Chinon', note: 'Tuffeau 河階紅酒，最具陳年潛力' },
      { name: 'Bourgueil / Saint-Nicolas-de-Bourgueil', note: '結構紮實的中堅紅酒' },
      { name: 'Saumur-Champigny', note: '清新易飲、紫羅蘭花香突出' }
    ],
    acidity: '⭐⭐⭐⭐ 高',
    body: '中等',
    aging: '5–20 年（頂級 Chinon 可至 30+ 年）',
    aromas: ['覆盆子', '紫羅蘭', '青椒', '鉛筆芯', '柏樹', '濕泥土', '黑胡椒'],
    pairings: ['烤雞', '羊排', '燉牛肉', 'Rillettes 都漢肉醬', '中式紅燒肉']
  },
  {
    key: 'melon',
    name: 'Melon de Bourgogne',
    aliases: '南特 Muscadet 唯一指定',
    emoji: '🌊',
    color: '#3a7a90',
    tagline: '海風礦物白——sur lie 工藝賦予生命的「海鮮神酒」',
    regions: [
      { name: 'Muscadet-Sèvre-et-Maine', note: '產區內最大、品質最佳的子產區' },
      { name: 'Muscadet-Côtes-de-Grandlieu', note: '湖泊微氣候，圓潤風格' },
      { name: 'Clisson / Gorges / Le Pallet', note: '地塊分級 Crus Communaux，可長陳' }
    ],
    acidity: '⭐⭐⭐⭐ 高',
    body: '輕盈',
    aging: '1–5 年（Cru Communaux 可至 15 年）',
    aromas: ['青蘋果', '檸檬', '酵母麵包', '海鹽', '碘香', '貝殼', '燧石'],
    pairings: ['生蠔（首選！）', '貽貝白酒', '烤魚', '海鮮拼盤', '日式生魚片']
  }
]

const grapes = computed(() => {
  if (Array.isArray(props.slide?.grapes) && props.slide.grapes.length) return props.slide.grapes
  return DEFAULT_GRAPES
})

const currentKey = ref(props.slide?.defaultKey || grapes.value[0]?.key || '')
const current = computed(() => grapes.value.find(g => g.key === currentKey.value))
</script>

<style scoped>
.loire-grape-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 8px 4px;
}
.lgp-header { text-align: center; }
.lgp-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.lgp-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.lgp-tabs {
  display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
}
.lgp-tab {
  border: 2px solid #d8dde4;
  background: #fff;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex; align-items: center; gap: 8px;
  font-size: 0.92rem;
  color: #444;
  transition: all .18s ease;
}
.lgp-tab:hover { border-color: var(--accent); color: var(--accent); }
.lgp-tab.active {
  background: var(--accent); color: #fff; border-color: var(--accent);
  box-shadow: 0 3px 10px color-mix(in srgb, var(--accent) 40%, transparent);
}
.lgp-tab-emoji { font-size: 1.2rem; }

.lgp-card {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 18px 20px;
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 5%, #fff) 100%);
}
.lgp-card-head {
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.lgp-card-head-content {
  flex: 1;
}
.lgp-card-images {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}
.lgp-img-box {
  width: 90px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}
.lgp-card-title {
  margin: 0; font-size: 1.4rem; color: var(--accent);
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px;
}
.lgp-card-aliases { font-size: 0.85rem; color: #889; font-style: italic; font-weight: 400; }
.lgp-card-tag {
  margin: 4px 0 0; font-size: 0.95rem; color: #555;
  font-weight: 500;
}

.lgp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
}
.lgp-section h4 { margin: 0 0 6px; font-size: 0.95rem; color: #2c3e50; }
.lgp-section ul { margin: 0; padding-left: 18px; font-size: 0.88rem; color: #2c3e50; line-height: 1.55; }
.lgp-section ul li { margin: 0 0 3px; }

.lgp-spec { list-style: none; padding: 0; }
.lgp-spec li {
  display: grid; grid-template-columns: 80px 1fr; gap: 6px;
  padding: 3px 0;
  border-bottom: 1px dashed #e2e4ea;
  font-size: 0.88rem;
}
.lgp-spec .key { color: #666; }
.lgp-spec .val { color: #2c3e50; font-weight: 500; }

.lgp-aroma { grid-column: span 2; }
.lgp-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.lgp-chip {
  background: color-mix(in srgb, var(--accent) 15%, #fff);
  color: var(--accent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .lgp-grid { grid-template-columns: 1fr; }
  .lgp-aroma { grid-column: auto; }
}
</style>
