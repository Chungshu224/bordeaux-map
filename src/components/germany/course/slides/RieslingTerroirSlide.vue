<template>
  <div class="riesling-terroir-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Riesling 風土地圖——板岩、紅板岩與石灰岩的差異' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || 'Riesling 是地球上對風土最敏感的葡萄品種之一。同一品種，在 Mosel 的藍灰板岩、Rheingau 的板岩與石英、Pfalz 的多元土壤、Nahe 的火山岩與板岩混合中，能展現完全不同的礦物個性。' }}
      </p>
    </div>

    <div class="region-tabs">
      <button
        v-for="region in regions"
        :key="region.key"
        class="region-tab"
        :class="{ active: activeKey === region.key }"
        :style="{ borderColor: activeKey === region.key ? region.color : 'transparent', color: activeKey === region.key ? region.color : '#3a4a5a' }"
        @click="activeKey = region.key"
      >
        <span class="tab-emoji">{{ region.emoji }}</span>
        <span>
          <strong>{{ region.name }}</strong>
          <small>{{ region.subtitle }}</small>
        </span>
      </button>
    </div>

    <div class="terroir-content" v-if="activeRegion">
      <div class="terroir-card" :style="{ borderColor: activeRegion.color }">
        <div class="card-header" :style="{ backgroundColor: activeRegion.color }">
          <div>
            <h3>{{ activeRegion.emoji }} {{ activeRegion.name }}</h3>
            <span class="card-tagline">{{ activeRegion.tagline }}</span>
          </div>
          <img :src="`/images/germany/riesling-${activeRegion.key}.svg`" class="riesling-region-img" />
          <div class="header-meta">
            <span><strong>產區規模</strong> {{ activeRegion.size }}</span>
            <span><strong>Riesling 比例</strong> {{ activeRegion.rieslingShare }}</span>
            <span><strong>主要風格</strong> {{ activeRegion.mainStyle }}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="terroir-grid">
            <div class="info-block soil-block">
              <h4>🪨 主要土壤類型</h4>
              <div class="soil-list">
                <div v-for="soil in activeRegion.soils" :key="soil.name" class="soil-item">
                  <div class="soil-color" :style="{ backgroundColor: soil.color }"></div>
                  <div class="soil-info">
                    <strong>{{ soil.name }}</strong>
                    <span>{{ soil.character }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-block">
              <h4>🌡️ 氣候與微風土</h4>
              <p>{{ activeRegion.climate }}</p>
            </div>

            <div class="info-block">
              <h4>🍷 Riesling 風格特徵</h4>
              <p>{{ activeRegion.rieslingStyle }}</p>
              <div class="aroma-chips">
                <span
                  v-for="a in activeRegion.aromas"
                  :key="a"
                  class="chip"
                  :style="{ borderColor: activeRegion.color, backgroundColor: activeRegion.color + '22' }"
                >{{ a }}</span>
              </div>
            </div>

            <div class="info-block">
              <h4>📍 著名葡萄園 (Einzellage)</h4>
              <ul>
                <li v-for="(v, i) in activeRegion.famousVineyards" :key="i">
                  <strong>{{ v.name }}</strong> — {{ v.note }}
                </li>
              </ul>
            </div>

            <div class="info-block full-width">
              <h4>🌟 代表酒莊</h4>
              <div class="producer-grid">
                <div v-for="p in activeRegion.producers" :key="p.name" class="prod-card">
                  <strong>{{ p.name }}</strong>
                  <span>{{ p.note }}</span>
                </div>
              </div>
            </div>

            <div class="info-block full-width" v-if="activeRegion.keyFact">
              <h4>💡 重點知識</h4>
              <p class="key-fact">{{ activeRegion.keyFact }}</p>
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

const defaultRegions = [
  {
    key: 'mosel',
    name: 'Mosel',
    subtitle: '藍灰板岩——輕盈酸礦',
    emoji: '🏞️',
    color: '#37474F',
    tagline: '世界最壯觀葡萄園——65° 陡坡與藍灰板岩之鄉',
    size: '8,800 公頃',
    rieslingShare: '60% 種植 Riesling',
    mainStyle: '輕盈、低酒精、高酸、礦物突出',
    soils: [
      { name: '藍灰板岩 (Blauschiefer)', character: '低 pH、高保溫性、賦予 Riesling 鋼質酸度與汽油礦物香', color: '#455A64' },
      { name: '紅板岩 (Roter Schiefer)', character: '較稀有，主要在 Erden / Ürzig；賦予較圓潤香料感', color: '#8B4513' },
      { name: '灰板岩 (Grauschiefer)', character: '某些地段，特性介於藍灰與紅板岩之間', color: '#78909C' }
    ],
    climate: 'Mosel 河谷形成天然「綠色隧道」，緩衝極端氣候。最佳葡萄園朝南、坡度 50-65°（世界最陡），Mosel 河水反射陽光、板岩釋放夜間熱能延長成熟期。年雨量約 700mm。',
    rieslingStyle: '低酒精（7-9%）、極高酸度（8-10 g/L）、明顯藍灰板岩礦物味、汽油香（陳年後）。是世界最輕盈優雅的 Riesling。',
    aromas: ['青蘋果', '檸檬', '萊姆', '濕板岩', '汽油', '白桃', '蜂蜜（甜版）'],
    famousVineyards: [
      { name: 'Wehlener Sonnenuhr', note: '「Wehlen 太陽鐘」——J.J. Prüm 旗艦葡萄園' },
      { name: 'Bernkasteler Doctor', note: '「醫生園」——傳說治癒主教，每瓶 €1,000+' },
      { name: 'Erdener Prälat', note: 'Erden「主教園」——紅板岩最頂級' },
      { name: 'Scharzhofberg (Saar)', note: 'Egon Müller 獨佔——世界最貴 Riesling' },
      { name: 'Brauneberger Juffer Sonnenuhr', note: 'Mosel 河南岸完美朝向' }
    ],
    producers: [
      { name: 'Egon Müller (Scharzhof, Saar)', note: '世界 Riesling 之王' },
      { name: 'J.J. Prüm', note: 'Wehlen 神級酒莊' },
      { name: 'Dr. Loosen', note: '國際知名度最高' },
      { name: 'Selbach-Oster', note: '優雅平衡派' },
      { name: 'Willi Schaefer', note: 'Graach 小規模精品' }
    ],
    keyFact: 'Mosel 葡萄園總長 545 公里、平均坡度 30-65°，是世界最陡的葡萄園產區。65° 陡坡的 Calmont 葡萄園被譽為「歐洲最陡葡萄園」。一公頃陡坡葡萄園的人工成本是平地的 5-10 倍——這也是頂級 Mosel Riesling 價格高昂的主因之一。'
  },
  {
    key: 'rheingau',
    name: 'Rheingau',
    subtitle: '萊茵高地——飽滿乾型先驅',
    emoji: '🏰',
    color: '#1565c0',
    tagline: 'Riesling 歷史中心——Schloss Johannisberg 與 GG 運動發源地',
    size: '3,200 公頃',
    rieslingShare: '78%（德國 Riesling 比例最高的產區）',
    mainStyle: '飽滿、結構良好、Riesling 乾型 (trocken) 標竿',
    soils: [
      { name: '板岩 (Schiefer)', character: '主要在 Rüdesheim、Assmannshausen 等陡坡', color: '#37474F' },
      { name: '石英岩 (Quarzit)', character: '提供礦物與酸度', color: '#90A4AE' },
      { name: '黃土 / 砂質土壤 (Löss)', character: '中段平緩坡地，提供圓潤酒體', color: '#D2B48C' },
      { name: '泥灰岩 (Mergel)', character: '某些頂級地段，提供結構', color: '#A1887F' }
    ],
    climate: '萊茵河在此突然由南北流向轉為東西流向約 25 公里，南向坡地接收最大日照。Taunus 山脈擋下北風，Rhine 河面寬廣反射陽光。比 Mosel 溫暖、葡萄成熟度更高。',
    rieslingStyle: '較高酒精（12-13.5%）、較飽滿酒體、礦物與果香並重。是「Riesling Trocken」（乾型 Riesling）的歷史發源地。',
    aromas: ['黃蘋果', '梨子', '杏桃', '蜂蜜', '香料', '汽油', '橙皮'],
    famousVineyards: [
      { name: 'Schloss Johannisberg', note: '世界第一個完全種植 Riesling 的葡萄園（1720）' },
      { name: 'Rüdesheimer Berg Schlossberg', note: 'Rüdesheim 陡坡板岩頂級' },
      { name: 'Erbacher Marcobrunn', note: '泥灰岩飽滿派經典' },
      { name: 'Hochheimer Domdechaney', note: '英文「Hock」一詞源自此' }
    ],
    producers: [
      { name: 'Schloss Johannisberg', note: '歷史性酒莊' },
      { name: 'Robert Weil', note: '現代 Rheingau 標竿' },
      { name: 'Georg Breuer', note: '乾型 GG 派' },
      { name: 'Künstler', note: 'Hochheim 精品' },
      { name: 'Peter Jakob Kühn', note: '生物動力派' }
    ],
    keyFact: '英文「Hock」（指德國白酒）一詞源自 Rheingau 的 Hochheim 鎮——維多利亞女王曾稱讚此地酒款，從此 Hochheimer 縮寫為 Hock，成為英國市場對德國 Riesling 的通稱。1720 年 Schloss Johannisberg 是世界第一個完全種植 Riesling 的葡萄園。1971 年 VDP 也是在 Rheingau 啟動其分級改革。'
  },
  {
    key: 'pfalz',
    name: 'Pfalz',
    subtitle: '法爾茲——溫暖飽滿果香',
    emoji: '☀️',
    color: '#FF8F00',
    tagline: '德國最溫暖產區之一——果香奔放的飽滿 Riesling',
    size: '23,500 公頃',
    rieslingShare: '24%（種植面積最大的 Riesling 產區）',
    mainStyle: '飽滿、果香奔放、Trocken 為主、酒體較圓潤',
    soils: [
      { name: '泥灰岩 (Mergel)', character: 'Mittelhaardt 中央地帶，提供結構與礦物', color: '#A1887F' },
      { name: '砂岩 (Buntsandstein)', character: 'Haardt 山脈邊，賦予溫暖香料感', color: '#D84315' },
      { name: '玄武岩 (Basalt)', character: 'Forster Pechstein 等頂級葡萄園', color: '#212121' },
      { name: '石灰岩 (Kalkstein)', character: '某些 Mittelhaardt 地段', color: '#E0E0E0' }
    ],
    climate: '位於 Haardt 山脈東側雨蔭區，年雨量僅 500-600mm（德國最少）、日照充足、溫暖。被稱為「德國的 Toscana」。',
    rieslingStyle: '比 Mosel/Rheingau 更飽滿、酒精較高（13-14%）、果香奔放、酸度仍鮮明。Trocken 風格主導，乾型陳年 Riesling 標竿。',
    aromas: ['熟黃桃', '杏桃', '熱帶水果', '蜂蜜', '香料', '柑橘', '白胡椒'],
    famousVineyards: [
      { name: 'Forster Pechstein', note: 'Forst 黑色玄武岩——熱量集中' },
      { name: 'Forster Kirchenstück', note: '「教堂園」——歷史頂級 GG' },
      { name: 'Forster Jesuitengarten', note: '「耶穌會園」——三大 Forster GG 之一' },
      { name: 'Deidesheimer Hohenmorgen', note: 'Deidesheim 經典' },
      { name: 'Ruppertsberger Reiterpfad', note: '砂岩派代表' }
    ],
    producers: [
      { name: 'Dr. Bürklin-Wolf', note: '生物動力 GG 派' },
      { name: 'Reichsrat von Buhl', note: '歷史名門' },
      { name: 'Müller-Catoir', note: '小規模超精品' },
      { name: 'A. Christmann', note: 'VDP 主席酒莊' },
      { name: 'Bassermann-Jordan', note: '經典 Mittelhaardt' }
    ],
    keyFact: 'Pfalz 是德國第二大葡萄酒產區（僅次於 Rheinhessen）。Mittelhaardt 中央地帶（含 Forst、Deidesheim、Wachenheim、Ruppertsberg、Bad Dürkheim 等村莊）集中了德國最頂級的 Trocken Riesling GG。Forster Pechstein 葡萄園的黑色玄武岩會自然儲熱、夜間釋放，加速葡萄成熟。'
  },
  {
    key: 'nahe',
    name: 'Nahe',
    subtitle: '納赫——德國土壤博物館',
    emoji: '🌋',
    color: '#7B1FA2',
    tagline: '土壤多樣性冠軍——超過 180 種土壤類型的小產區',
    size: '4,200 公頃',
    rieslingShare: '28%',
    mainStyle: '介於 Mosel 優雅與 Rheingau 飽滿之間，礦物複雜度極高',
    soils: [
      { name: '火山岩 / 斑岩 (Porphyr)', character: 'Schlossböckelheim 頂級——Dönnhoff 名園', color: '#D32F2F' },
      { name: '板岩 (Schiefer)', character: '某些坡地與 Mosel 類似', color: '#37474F' },
      { name: '石英岩 (Quarzit)', character: '某些地段提供礦物張力', color: '#90A4AE' },
      { name: '砂岩 / 玫瑰石英 (Rotliegendes)', character: '紅色砂岩，提供溫潤感', color: '#BF360C' },
      { name: '紅褐土 (Letten)', character: '某些頂級葡萄園', color: '#8D6E63' }
    ],
    climate: 'Nahe 河谷氣候溫和、雨量適中（500-600mm）。受 Soonwald 森林與 Hunsrück 山脈保護。葡萄園朝向多元（不限南向）。',
    rieslingStyle: '優雅與力量兼備——比 Mosel 飽滿、比 Rheingau 細緻。礦物複雜度極高，是頂級 Riesling 收藏家的隱藏珍寶。',
    aromas: ['白桃', '柑橘', '香料', '礦物', '火山岩煙燻', '蜂蜜', '熱帶水果'],
    famousVineyards: [
      { name: 'Niederhäuser Hermannshöhle', note: 'Dönnhoff 旗艦——板岩與斑岩混合' },
      { name: 'Schlossböckelheimer Felsenberg', note: '火山岩斑岩——熱量集中' },
      { name: 'Schlossböckelheimer Kupfergrube', note: '「銅礦園」——前銅礦改種葡萄' },
      { name: 'Oberhäuser Brücke', note: 'Dönnhoff 獨佔小葡萄園——TBA 神品' }
    ],
    producers: [
      { name: 'Dönnhoff', note: 'Nahe 神級酒莊（與 Egon Müller 並列）' },
      { name: 'Emrich-Schönleber', note: 'Monzingen 巨匠' },
      { name: 'Schäfer-Fröhlich', note: '現代精品派' },
      { name: 'Diel', note: '國際派頂級' }
    ],
    keyFact: 'Nahe 被稱為「德國土壤博物館」——4,200 公頃內涵蓋超過 180 種土壤類型，是德國土壤多樣性最高的產區。Helmut Dönnhoff 被譽為「Riesling 大師」，其酒款常被視為與 Egon Müller 同等的頂級珍品，但價格更為親民。'
  },
  {
    key: 'rheinhessen',
    name: 'Rheinhessen',
    subtitle: '萊茵黑森——大眾酒到頂級雙面',
    emoji: '🌾',
    color: '#388E3C',
    tagline: '德國最大產區——既是「Liebfraumilch 故鄉」也是新世代 Riesling 革命中心',
    size: '27,000 公頃（德國最大）',
    rieslingShare: '17%（總量最大但比例不高）',
    mainStyle: '從廉價甜白到頂級 GG 兩極——新世代酒農正改寫聲譽',
    soils: [
      { name: '紅色板岩 / 紅色泥岩 (Rotliegend)', character: 'Roter Hang 「紅色斜坡」——Nierstein 紅色斜坡頂級', color: '#C62828' },
      { name: '石灰岩 (Kalkstein)', character: 'Wonnegau 子區頂級', color: '#E0E0E0' },
      { name: '泥灰岩 (Mergel)', character: '主要葡萄園土壤', color: '#A1887F' },
      { name: '黃土 (Löss)', character: '較平緩地段', color: '#D2B48C' }
    ],
    climate: '萊茵河谷東向，雨量適中、日照充足。中部與西部相對溫暖、東部 Roter Hang 受萊茵河調節。',
    rieslingStyle: '頂級 GG 展現驚人複雜度——尤其 Roter Hang 紅色板岩賦予獨特紅色香料與熱帶水果香。新世代酒農（Battenfeld-Spanier、Wittmann 等）已將 Rheinhessen 推上世界舞台。',
    aromas: ['黃桃', '熱帶水果', '紅色香料', '柑橘', '蜂蜜', '礦物'],
    famousVineyards: [
      { name: 'Niersteiner Pettenthal', note: 'Roter Hang 紅色斜坡頂級' },
      { name: 'Niersteiner Hipping', note: 'Keller / Kühling-Gillot 等酒莊' },
      { name: 'Westhofener Morstein', note: 'Wittmann 旗艦——石灰岩 GG' },
      { name: 'Westhofener Brunnenhäuschen', note: 'Wittmann 頂級' },
      { name: 'Dalsheimer Hubacker', note: 'Keller 旗艦——「全球最貴 Riesling」之一' }
    ],
    producers: [
      { name: 'Klaus Peter Keller', note: '「G-Max」一瓶 €500+，世界級' },
      { name: 'Wittmann', note: '生物動力 GG 標竿' },
      { name: 'Battenfeld-Spanier', note: '石灰岩派' },
      { name: 'Kühling-Gillot', note: 'Roter Hang 紅斜坡專家' }
    ],
    keyFact: 'Rheinhessen 早期以「Liebfraumilch」（聖母之乳，廉價半甜白酒）聞名國際，曾使德國酒整體形象受損。但 1990 年代後 Klaus Peter Keller、Wittmann 等新世代酒莊在 Wonnegau 與 Roter Hang 的崛起，使 Rheinhessen 成為今日德國 Trocken Riesling 革命的中心。Keller G-Max（一瓶 €500-€800）是世界最貴的 Riesling 之一。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeKey = ref(props.slide.defaultKey || 'mosel')
const activeRegion = computed(() => regions.value.find((r) => r.key === activeKey.value) || regions.value[0])
</script>

<style scoped>
.riesling-terroir-slide {
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
  margin: 0 0 1rem 0;
}

.region-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.region-tab {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fff;
  border: 2px solid transparent;
  padding: 0.55rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.region-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(26, 77, 110, 0.15);
}

.region-tab.active {
  box-shadow: 0 4px 14px rgba(26, 77, 110, 0.25);
}

.tab-emoji {
  font-size: 1.4rem;
}

.region-tab strong {
  display: block;
  font-size: 0.92rem;
}

.region-tab small {
  display: block;
  font-size: 0.74rem;
  opacity: 0.75;
}

.terroir-card {
  background: #fff;
  border-radius: 12px;
  border: 2px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(26, 77, 110, 0.12);
}

.card-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.riesling-region-img {
  width: 100px;
  height: 55px;
  object-fit: cover;
  border-radius: 8px;
  opacity: 0.9;
  flex-shrink: 0;
  align-self: center;
}

.card-header h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.4rem;
}

.card-tagline {
  font-size: 0.88rem;
  opacity: 0.95;
  font-style: italic;
}

.header-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.78rem;
  text-align: right;
}

.header-meta strong {
  opacity: 0.85;
  margin-right: 0.3rem;
}

.card-body {
  padding: 1.2rem 1.4rem;
}

.terroir-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-block.full-width {
  grid-column: 1 / -1;
}

.info-block h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  color: #1a4d6e;
}

.info-block p {
  margin: 0;
  color: #2c3e50;
  font-size: 0.88rem;
  line-height: 1.6;
}

.info-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #2c3e50;
  font-size: 0.86rem;
  line-height: 1.6;
}

.soil-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.soil-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  background: #f5f7fa;
  padding: 0.5rem 0.7rem;
  border-radius: 6px;
}

.soil-color {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  margin-top: 2px;
}

.soil-info {
  display: flex;
  flex-direction: column;
}

.soil-info strong {
  font-size: 0.85rem;
  color: #1a4d6e;
}

.soil-info span {
  font-size: 0.78rem;
  color: #3a4a5a;
}

.aroma-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.chip {
  border: 1px solid;
  padding: 0.25rem 0.7rem;
  border-radius: 14px;
  font-size: 0.8rem;
  color: #2c3e50;
}

.producer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.prod-card {
  background: #f5f7fa;
  border-left: 3px solid #d4a017;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.prod-card strong {
  color: #1a4d6e;
  font-size: 0.88rem;
}

.prod-card span {
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
}

@media (max-width: 768px) {
  .riesling-terroir-slide {
    padding: 1rem;
  }
  .terroir-grid {
    grid-template-columns: 1fr;
  }
  .header-meta {
    text-align: left;
  }
}
</style>
