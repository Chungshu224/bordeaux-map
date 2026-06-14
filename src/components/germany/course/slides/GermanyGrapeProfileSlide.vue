<template>
  <div class="de-grape-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '德國白葡萄品種互動檔案' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="grape-tabs">
      <button
        v-for="grape in grapes"
        :key="grape.key"
        class="grape-tab"
        :class="{ active: activeKey === grape.key }"
        :style="{
          borderColor: activeKey === grape.key ? grape.color : 'transparent',
          color: activeKey === grape.key ? grape.color : '#5a4a3a'
        }"
        @click="activeKey = grape.key"
      >
        <span class="tab-emoji">{{ grape.emoji }}</span>
        <span class="tab-name">{{ grape.name }}</span>
      </button>
    </div>

    <div class="profile-content">
      <div class="profile-card" :style="{ borderColor: activeGrape.color }">
        <div class="card-header" :style="{ background: `linear-gradient(135deg, ${activeGrape.color}, ${activeGrape.color}cc)` }">
          <div class="header-main">
            <h3>{{ activeGrape.emoji }} {{ activeGrape.name }}</h3>
            <span class="card-tagline">{{ activeGrape.tagline }}</span>
          </div>
          <div class="quick-stats">
            <span class="stat"><strong>主產區</strong>{{ activeGrape.mainRegion }}</span>
            <span class="stat"><strong>風格</strong>{{ activeGrape.style_type }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="profile-grid">

            <div class="profile-block">
              <h4>📍 在德國的角色</h4>
              <p>{{ activeGrape.germanyRole }}</p>
              <ul>
                <li v-for="(area, i) in activeGrape.mainAreas" :key="i">
                  <strong>{{ area.name }}：</strong>{{ area.note }}
                </li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>🌿 品種特性</h4>
              <ul>
                <li><strong>果串：</strong>{{ activeGrape.cluster }}</li>
                <li><strong>成熟期：</strong>{{ activeGrape.ripening }}</li>
                <li><strong>適應土壤：</strong>{{ activeGrape.soils }}</li>
                <li><strong>氣候偏好：</strong>{{ activeGrape.climate }}</li>
              </ul>
            </div>

            <div class="profile-block">
              <h4>📊 風格指標</h4>
              <div class="metric-list">
                <div class="metric" v-for="(val, key) in activeGrape.metrics" :key="key">
                  <span class="metric-label">{{ metricLabel(key) }}</span>
                  <div class="metric-bar">
                    <div class="metric-fill" :style="{ width: (val * 20) + '%', backgroundColor: activeGrape.color }"></div>
                  </div>
                  <span class="metric-value">{{ val }}/5</span>
                </div>
              </div>
            </div>

            <div class="profile-block">
              <h4>👃 香氣譜系</h4>
              <div class="aromas">
                <span
                  v-for="aroma in activeGrape.aromas"
                  :key="aroma"
                  class="aroma-chip"
                  :style="{ backgroundColor: activeGrape.color + '22', borderColor: activeGrape.color }"
                >{{ aroma }}</span>
              </div>
            </div>

            <div class="profile-block full-width">
              <h4>🍷 風格特徵與陳年</h4>
              <p>{{ activeGrape.style }}</p>
              <p style="margin-top:0.4rem"><strong>陳年潛力：</strong>{{ activeGrape.ageing }}</p>
            </div>

            <div class="profile-block full-width">
              <h4>🍽️ 經典餐酒搭配</h4>
              <ul class="pairing-list">
                <li v-for="(pair, i) in activeGrape.pairings" :key="i">{{ pair }}</li>
              </ul>
            </div>

            <div class="profile-block full-width">
              <h4>🌟 代表酒莊 / 產品</h4>
              <div class="examples-grid">
                <div v-for="ex in activeGrape.examples" :key="ex.name" class="example-card">
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
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

const metricLabel = (key) => ({
  acidity: '酸度',
  mineral: '礦物感',
  body: '酒體',
  fruit: '果香強度',
  ageing: '陳年潛力',
  aromatic: '香氣濃度'
}[key] || key)

const defaultGrapes = [
  {
    key: 'muller-thurgau',
    name: 'Müller-Thurgau',
    emoji: '🌿',
    color: '#5C8A3C',
    style_type: '白葡萄 · 輕盈清爽',
    mainRegion: 'Rheinhessen / Mosel / Baden',
    tagline: '全德種植第二大白葡萄——清爽易飲的日常之選',
    germanyRole: 'Müller-Thurgau 是 Riesling × Madeleine Royale 的雜交品種（1882 年由 Hermann Müller 在 Thurgau 培育），曾是全德種植面積最大的白葡萄，現在仍是第二大。早熟、高產、適應力強，廣泛種植於 Rheinhessen、Mosel 平地及 Baden。以清爽日常風格為主，少數老藤精品版本展現驚人深度。',
    mainAreas: [
      { name: 'Rheinhessen（最大面積）', note: '平地多見，大量生產日常酒款' },
      { name: 'Mosel（平坦地區）', note: '陡坡 Riesling 的補充品種' },
      { name: 'Franken', note: '老藤版本展現礦物感，超出預期品質' }
    ],
    cluster: '大而鬆散、早熟（比 Riesling 早 2-3 週）',
    ripening: '早熟（8 月底至 9 月初）',
    soils: '適應力極強，各類土壤均可',
    climate: '涼爽氣候更佳，過熱時失去清爽特色',
    metrics: { acidity: 3, mineral: 2, body: 2, fruit: 4, ageing: 1 },
    aromas: ['青蘋果', '梨子', '白花', '麝香', '柑橘皮', '草本'],
    style: '輕盈酒體、中等酸度、淡雅果香為主。最佳版本有清新花香與輕柔麝香。不以陳年著稱，主要訴求新鮮即飲。老藤精品版本（Franken）偶爾展現意外的礦物深度。最適合作為夏日清涼飲用白酒。',
    ageing: '通常 1–3 年；精品老藤版本 3–7 年',
    pairings: [
      '清蒸魚、簡單海鮮料理',
      '蔬菜沙拉、輕食前菜',
      '新鮮山羊乳酪',
      '德式香腸（清爽搭配）',
      '壽司、日式輕食'
    ],
    examples: [
      { name: 'Weingut Hammel（Rheinhessen）', note: '精品 Müller-Thurgau 代表' },
      { name: 'Juliusspital（Franken 老藤）', note: '展現礦物深度的頂級版本' },
      { name: 'Moselland（日常）', note: '清爽易飲商業標竿' }
    ]
  },
  {
    key: 'silvaner',
    name: 'Silvaner',
    emoji: '🏛️',
    color: '#8B6914',
    style_type: '白葡萄 · 乾爽礦物',
    mainRegion: 'Franken / Rheinhessen',
    tagline: '大地礦物的低調王者——Franken 的靈魂品種',
    germanyRole: 'Silvaner 是德國歷史最悠久的品種之一（1659 年記載），在 Franken 產區達到最高表達。Bocksbeutel 扁圓形酒瓶是 Franken Silvaner 的獨特識別符號。雖然近年種植面積被 Müller-Thurgau 超越，但頂級 Silvaner（老藤 Muschelkalk）是德國最被低估的頂級白酒之一，可媲美優秀 Riesling。',
    mainAreas: [
      { name: 'Franken（Maindreieck）', note: 'Muschelkalk 貝殼石灰岩，礦物感最強，Bocksbeutel 標誌' },
      { name: 'Franken（Steigerwald）', note: '砂岩土壤，酒體更飽滿豐潤' },
      { name: 'Rheinhessen', note: '較輕盈清爽，日常風格為主' },
      { name: 'Pfalz', note: '少量種植，偶爾有優秀版本' }
    ],
    cluster: '中等大小、緊密',
    ripening: '中熟（比 Riesling 早 1 週）',
    soils: 'Muschelkalk（貝殼石灰岩）最佳，砂質紅砂岩次之',
    climate: '涼爽大陸型氣候，巴伐利亞特色',
    metrics: { acidity: 3, mineral: 4, body: 3, fruit: 3, ageing: 3 },
    aromas: ['白葡萄', '榅桲', '草本', '礦石', '大地', '生杏仁', '白色花朵'],
    style: '中等酸度、中等酒體、明顯礦物與大地氣息。最佳 Muschelkalk 老藤版本有如板岩水晶般的礦物純淨感，完全乾型（Trocken）為主流。與德國料理（白蘆筍、豬肉、乳酪）天作之合。不如 Riesling 芳香，但有自成一格的剋制優雅。',
    ageing: '基礎款 2–5 年；頂級老藤 Großes Gewächs 版本 8–15 年',
    pairings: [
      '白蘆筍（Weißer Spargel）——傳統配對之王',
      '德式白腸（Weißwurst）與芥末醬',
      'Quark 白乳酪與麵包',
      '清蒸河魚（鱸魚、鱒魚）',
      '蘑菇燉菜、根莖蔬菜'
    ],
    examples: [
      { name: 'Bürgerspital（Würzburger Stein）', note: 'Franken 最著名的 Silvaner 單一園' },
      { name: 'Juliusspital（Iphofen Julius-Echter-Berg）', note: '頂級老藤 GG 標竿' },
      { name: 'Horst Sauer（Escherndorfer Lump）', note: '精品 Silvaner 新生代旗手' },
      { name: 'Rudolf Fürst（Bürgstadt）', note: 'Franken Silvaner 精品莊' }
    ]
  },
  {
    key: 'grauburgunder',
    name: 'Grauburgunder',
    emoji: '🌸',
    color: '#C27B3A',
    style_type: '白葡萄 · 豐潤圓滑',
    mainRegion: 'Baden / Pfalz / Rheinhessen',
    tagline: '杏桃蜂蜜的豐潤品種——灰皮諾的德國表達',
    germanyRole: 'Grauburgunder 是 Pinot Gris（灰皮諾）的德語名稱，在最溫暖的德國產區（Baden、Pfalz）展現最佳表現。隨著氣候暖化，此品種在德國快速崛起，成為繼 Riesling 和 Silvaner 後最受矚目的精品白酒選擇。Baden 的 Kaiserstuhl 火山岩土壤賦予獨特礦物感，釀出可媲美阿爾薩斯 Pinot Gris Grand Cru 的複雜版本。',
    mainAreas: [
      { name: 'Baden（Kaiserstuhl）', note: '火山玄武岩，最複雜豐潤，可媲美阿爾薩斯' },
      { name: 'Baden（Markgräflerland）', note: '瑞士邊境，較輕盈優雅' },
      { name: 'Pfalz（Mittelhaardt）', note: '溫暖豐潤，偶有半甜款式' },
      { name: 'Rheinhessen', note: '平易日常，清爽版本' }
    ],
    cluster: '中至大，色澤灰藍偏粉（比 Pinot Noir 淺）',
    ripening: '中熟（比 Riesling 早 1-2 週）',
    soils: '火山玄武岩（Baden）、石灰岩黏土（Pfalz）',
    climate: '溫暖氣候，日照充足，德國南部最適宜',
    metrics: { acidity: 3, mineral: 3, body: 4, fruit: 4, ageing: 2 },
    aromas: ['杏桃', '水蜜桃', '蜂蜜', '奶油', '白花', '杏仁', '生薑（頂級版本）'],
    style: '酒體豐潤圓滑、酸度中等、果香飽滿。通常完全不甜（Trocken），但豐厚質感讓人感受到假甜。Baden 頂級版本有奶油核桃複雜度；Pfalz 版本更強調果香奔放。與阿爾薩斯 Pinot Gris 相比，德國版通常更清爽少糖。',
    ageing: '基礎款 2–4 年；Baden 頂級版本 5–10 年',
    pairings: [
      '烤豬里肌、白醬雞肉',
      '奶油蘑菇義大利麵',
      'Camembert、Brie 等軟質乳酪',
      '煙燻鮭魚前菜',
      '泰式椰漿咖哩（豐潤配豐潤）'
    ],
    examples: [
      { name: 'Salwey（Kaiserstuhl）', note: 'Baden 頂級 Grauburgunder 標竿' },
      { name: 'Dr. Heger（Ihringer Winklerberg）', note: 'Kaiserstuhl 最知名 GG 之一' },
      { name: 'Müller-Catoir（Pfalz）', note: '芳香豐潤版本代表' },
      { name: 'Bercher（Baden）', note: '家族老藤精品版本' }
    ]
  },
  {
    key: 'weissburgunder',
    name: 'Weißburgunder',
    emoji: '🥂',
    color: '#7BA7BC',
    style_type: '白葡萄 · 清爽優雅',
    mainRegion: 'Baden / Pfalz / Franken',
    tagline: '清爽優雅的全才白酒——也是 Sekt 的重要基酒',
    germanyRole: 'Weißburgunder（白皮諾 Pinot Blanc）是 Grauburgunder 的基因突變變種，在德國廣泛種植，以清爽優雅著稱。比 Grauburgunder 更輕盈、酸度更高，是釀造德國傳統法氣泡酒 Sekt 的重要基酒。同時也作為靜態白酒，在 Baden 和 Pfalz 展現出色品質。',
    mainAreas: [
      { name: 'Baden', note: '精品靜態白酒，有時橡木桶陳年增加複雜度' },
      { name: 'Pfalz', note: '清爽日常款，也用於 Winzersekt' },
      { name: 'Franken', note: 'Muschelkalk 版本有礦物深度' },
      { name: 'Sekt 產區（全德）', note: '傳統法 Sekt 的核心基酒之一' }
    ],
    cluster: '中等大小，果皮薄',
    ripening: '中熟，比 Grauburgunder 略早',
    soils: '各類土壤適應良好',
    climate: '涼爽至溫暖皆宜',
    metrics: { acidity: 3, mineral: 3, body: 3, fruit: 3, ageing: 2 },
    aromas: ['蘋果', '梨子', '杏仁花', '白色水果', '檸檬皮', '礦石'],
    style: '清爽輕盈、酸度中等，果香細緻不張揚。最佳版本有優雅的杏仁花香與礦石感。作為 Sekt 基酒時貢獻新鮮酸度與細膩氣泡。整體風格比 Grauburgunder 更纖細，是易飲不失格調的全才品種。',
    ageing: '靜態白酒 2–5 年；優質 Sekt 可陳 3–8 年',
    pairings: [
      '清蒸海鮮、生蠔（作 Sekt）',
      '白肉沙拉、清淡義大利麵',
      '新鮮山羊乳酪',
      '德式炸豬排（Schnitzel）',
      '日式握壽司（輕盈配輕盈）'
    ],
    examples: [
      { name: 'Heger（Baden）', note: '精品靜態 Weißburgunder 代表' },
      { name: 'Raumland（Sekt）', note: 'Weißburgunder 為主的頂級 Winzersekt' },
      { name: 'Friedrich Becker（Pfalz）', note: '以 Pinot 家族著稱，Weißburgunder 優秀' }
    ]
  },
  {
    key: 'scheurebe',
    name: 'Scheurebe',
    emoji: '🌾',
    color: '#9B7F2E',
    style_type: '白葡萄 · 芳香濃郁',
    mainRegion: 'Pfalz / Rheinhessen',
    tagline: '黑醋栗葡萄柚的芳香炸彈——Riesling 最好的孩子',
    germanyRole: 'Scheurebe 是 Georg Scheu 在 1916 年培育的 Riesling 交配品種（另一親本長期未確定，近年 DNA 研究確認是 Bukettraube）。保留了 Riesling 的高酸度，加上濃郁的黑醋栗葡萄柚香氣，常被形容為「更芳香的 Riesling」。在 Pfalz 達到最高表達，尤其是甜型 Spätlese 和 Auslese 版本，帶有獨特的貓鵝莓（葡萄柚）香氣。',
    mainAreas: [
      { name: 'Pfalz（Mittelhaardt）', note: '最佳表達，頂級甜型版本聞名' },
      { name: 'Rheinhessen', note: '清爽日常款較多' },
      { name: 'Franken', note: '少量種植，展現礦物感' }
    ],
    cluster: '中等大小，成熟時金黃',
    ripening: '中至晚熟',
    soils: '石灰岩、砂岩均可，石灰岩更能凸顯礦物感',
    climate: '溫暖氣候，充足日照使香氣更充分發展',
    metrics: { acidity: 4, mineral: 3, body: 3, fruit: 5, ageing: 3 },
    aromas: ['黑醋栗', '葡萄柚', '貓鵝莓', '西番蓮', '蜂蜜（甜型）', '礦石', '草本'],
    style: '以高酸度支撐濃郁芳香為特色。不甜（Trocken）版本清爽帶草本黑醋栗；甜型（Spätlese/Auslese）展現熱帶水果濃縮蜂蜜深度。貓鵝莓（Cassis/Stachelbeere）香氣是品種標誌，有別於 Riesling 的礦石風格。甜型版本陳年後發展成熟蜂蜜與橙皮複雜度。',
    ageing: '不甜款 2–5 年；甜型 Auslese 可達 10–20 年',
    pairings: [
      '泰式料理（香氣與香料共鳴）',
      '印度咖哩（甜型中和辛辣）',
      '煙燻火腿與哈密瓜（不甜款）',
      '水果甜點（甜型 Auslese）',
      '亞洲香料料理'
    ],
    examples: [
      { name: 'Müller-Catoir（Haardter Bürgergarten）', note: 'Pfalz 頂級 Scheurebe 代表' },
      { name: 'Dr. Bürklin-Wolf（Forst）', note: 'Mittelhaardt 的精品版本' },
      { name: 'Emrich-Schönleber（Nahe）', note: '跨產區的優秀版本' }
    ]
  }
]

const grapes = computed(() => props.slide.grapes || defaultGrapes)
const activeKey = ref(grapes.value[0]?.key)
const activeGrape = computed(() => grapes.value.find(g => g.key === activeKey.value) || grapes.value[0])
</script>

<style scoped>
.de-grape-slide {
  padding: 1.5rem 1.5rem 2rem;
  max-width: 960px;
  margin: 0 auto;
}

.slide-header {
  text-align: center;
  margin-bottom: 1.4rem;
}
.slide-header h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 0.4rem;
}
.slide-desc {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.grape-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.4rem;
}
.grape-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 2px solid transparent;
  border-radius: 24px;
  background: #f9fafb;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.18s;
}
.grape-tab:hover { background: #f3f4f6; }
.grape-tab.active { background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
.tab-emoji { font-size: 1.1rem; }
.tab-name { white-space: nowrap; }

.profile-card {
  border: 2px solid;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.card-header {
  padding: 1.2rem 1.5rem;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}
.header-main h3 {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 0.3rem;
  color: white;
}
.card-tagline {
  font-size: 0.88rem;
  opacity: 0.92;
}
.quick-stats {
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: right;
  flex-shrink: 0;
}
.stat {
  font-size: 0.8rem;
  opacity: 0.95;
}
.stat strong {
  display: block;
  font-size: 0.7rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.card-body { padding: 1.4rem 1.5rem; }

.profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}
.profile-block { }
.profile-block.full-width { grid-column: 1 / -1; }
.profile-block h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #374151;
  margin: 0 0 0.6rem;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 0.3rem;
}
.profile-block p, .profile-block li {
  font-size: 0.83rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0.2rem 0;
}
.profile-block ul { padding-left: 1rem; margin: 0; }

.metric-list { display: flex; flex-direction: column; gap: 6px; }
.metric { display: flex; align-items: center; gap: 8px; }
.metric-label { font-size: 0.78rem; color: #6b7280; width: 56px; flex-shrink: 0; }
.metric-bar { flex: 1; height: 7px; background: #f3f4f6; border-radius: 4px; overflow: hidden; }
.metric-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; }
.metric-value { font-size: 0.75rem; color: #9ca3af; width: 26px; text-align: right; flex-shrink: 0; }

.aromas { display: flex; flex-wrap: wrap; gap: 6px; }
.aroma-chip {
  font-size: 0.77rem;
  padding: 3px 10px;
  border-radius: 12px;
  border: 1px solid;
}

.pairing-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  padding-left: 1rem;
  margin: 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}
.example-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.example-card strong { font-size: 0.82rem; color: #1f2937; }
.example-card span { font-size: 0.76rem; color: #6b7280; }

@media (max-width: 768px) {
  .de-grape-slide { padding: 1rem; }
  .profile-grid { grid-template-columns: 1fr; }
  .card-header { flex-direction: column; }
  .quick-stats { text-align: left; flex-direction: row; flex-wrap: wrap; gap: 8px; }
  .pairing-list { grid-template-columns: 1fr; }
  .grape-tabs { gap: 6px; }
  .grape-tab { padding: 6px 12px; font-size: 0.82rem; }
}
</style>
