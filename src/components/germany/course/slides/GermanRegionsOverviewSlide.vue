<template>
  <div class="germany-regions-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '德國 13 大葡萄酒產區（Anbaugebiete）' }}</h2>
      <p v-if="slide.description" class="slide-desc">
        {{ slide.description || '德國 13 個官方葡萄酒產區（Anbaugebiete），涵蓋從世界最北的 Saale-Unstrut/Sachsen 到溫暖的 Baden。70% 種植白葡萄（Riesling 領先），紅葡萄以 Spätburgunder（Pinot Noir）為主。' }}
      </p>
    </div>

    <div class="zone-filter">
      <button
        v-for="zone in zones"
        :key="zone.key"
        class="zone-btn"
        :class="{ active: activeZone === zone.key }"
        :style="{ borderColor: activeZone === zone.key ? zone.color : 'transparent', color: activeZone === zone.key ? zone.color : '#3a4a5a' }"
        @click="activeZone = zone.key"
      >{{ zone.label }}</button>
    </div>

    <div class="regions-grid">
      <div
        v-for="region in filteredRegions"
        :key="region.key"
        class="region-card"
        :class="{ active: activeKey === region.key }"
        :style="{ borderTopColor: zoneColor(region.zone), '--zone-color': zoneColor(region.zone) }"
        @click="activeKey = region.key"
      >
        <div class="region-flag">{{ region.emoji }}</div>
        <h3>{{ region.name }}</h3>
        <span class="region-zh">{{ region.zhName }}</span>
        <div class="region-tags">
          <span class="size-tag">{{ region.size }}</span>
        </div>
      </div>
    </div>

    <div class="region-detail" v-if="activeRegion" :style="{ borderColor: zoneColor(activeRegion.zone) }">
      <div class="detail-header">
        <h3>{{ activeRegion.emoji }} {{ activeRegion.name }} <span class="zh">{{ activeRegion.zhName }}</span></h3>
        <div class="detail-badges">
          <span class="zone-badge" :style="{ backgroundColor: zoneColor(activeRegion.zone) }">
            {{ zoneLabel(activeRegion.zone) }}
          </span>
          <span class="size-badge">📏 {{ activeRegion.size }}</span>
          <span class="grape-badge">🍇 {{ activeRegion.signature }}</span>
        </div>
      </div>

      <p class="detail-tagline">{{ activeRegion.tagline }}</p>

      <div class="detail-grid">
        <div class="detail-block">
          <h4>🌡️ 氣候特性</h4>
          <p>{{ activeRegion.climate }}</p>
        </div>
        <div class="detail-block">
          <h4>🪨 主要土壤</h4>
          <p>{{ activeRegion.soils }}</p>
        </div>
        <div class="detail-block">
          <h4>🍷 招牌品種與風格</h4>
          <p>{{ activeRegion.style }}</p>
        </div>
        <div class="detail-block">
          <h4>🌟 代表酒莊</h4>
          <ul>
            <li v-for="(p, i) in activeRegion.producers" :key="i">{{ p }}</li>
          </ul>
        </div>
        <div class="detail-block full-width">
          <h4>💡 重點知識</h4>
          <p>{{ activeRegion.keyFact }}</p>
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

const zones = [
  { key: 'all', label: '全部 13 區', color: '#1a4d6e' },
  { key: 'classic', label: '🍷 經典 Riesling 核心', color: '#8B1A1A' },
  { key: 'south', label: '☀️ 南部溫暖', color: '#FF8F00' },
  { key: 'east', label: '❄️ 北 / 東部寒涼', color: '#37474F' }
]

const zoneColor = (zone) => zones.find((z) => z.key === zone)?.color || '#999'
const zoneLabel = (zone) => zones.find((z) => z.key === zone)?.label || zone

const defaultRegions = [
  // === Classic Riesling 5 ===
  {
    key: 'mosel', name: 'Mosel', zhName: '摩澤爾', zone: 'classic', emoji: '🏞️',
    size: '8,800 公頃', signature: 'Riesling',
    tagline: '世界最壯觀葡萄園——65° 陡坡與藍灰板岩之鄉',
    climate: '冷涼大陸性 + Mosel 河谷微氣候。最佳葡萄園朝南、坡度 50-65°（世界最陡），河水反射陽光、板岩夜間放熱',
    soils: '藍灰板岩 (Blauschiefer) 為主、Erden/Ürzig 有獨特紅板岩、Saar 子區部分灰板岩',
    style: 'Riesling 60%——低酒精（7-9%）、極高酸度、明顯板岩礦物味、汽油香（陳年）。是世界最輕盈優雅的 Riesling',
    producers: ['Egon Müller (Saar)', 'J.J. Prüm', 'Dr. Loosen', 'Selbach-Oster', 'Willi Schaefer'],
    keyFact: 'Mosel 葡萄園總長 545 公里、平均坡度 30-65°，世界最陡。包含 3 個子區：Mosel（主軸）、Saar、Ruwer。Mosel 河蜿蜒形成的天然「綠色隧道」是其優雅 Riesling 的關鍵。'
  },
  {
    key: 'rheingau', name: 'Rheingau', zhName: '萊茵高', zone: 'classic', emoji: '🏰',
    size: '3,200 公頃', signature: 'Riesling 78% + Spätburgunder',
    tagline: 'Riesling 歷史中心——Schloss Johannisberg 與 GG 運動發源地',
    climate: '萊茵河在此東西流向，南向坡地接收最大日照。Taunus 山脈擋風。比 Mosel 溫暖',
    soils: '板岩、石英岩、黃土、泥灰岩多元混合',
    style: '飽滿 Trocken Riesling 標竿；Assmannshausen 有德國最古老的 Spätburgunder 種植',
    producers: ['Schloss Johannisberg', 'Robert Weil', 'Georg Breuer', 'Künstler', 'Peter Jakob Kühn'],
    keyFact: '英文「Hock」（指德國白酒）一詞源自 Rheingau 的 Hochheim 鎮——維多利亞女王曾稱讚此地酒款。1720 年 Schloss Johannisberg 是世界第一個完全種植 Riesling 的葡萄園。'
  },
  {
    key: 'pfalz', name: 'Pfalz', zhName: '法爾茲', zone: 'classic', emoji: '☀️',
    size: '23,500 公頃', signature: 'Riesling 24% + 多元品種',
    tagline: '德國最溫暖產區之一——果香奔放的飽滿 Riesling',
    climate: 'Haardt 山脈東側雨蔭區，雨量僅 500-600mm（德國最少）、日照充足。被稱為「德國的 Toscana」',
    soils: '泥灰岩、砂岩 (Buntsandstein)、玄武岩 (Forst Pechstein)、石灰岩混合',
    style: '比 Mosel/Rheingau 更飽滿、酒精較高（13-14%）、果香奔放。Trocken GG 標竿產區之一',
    producers: ['Dr. Bürklin-Wolf', 'Reichsrat von Buhl', 'Müller-Catoir', 'A. Christmann', 'Bassermann-Jordan'],
    keyFact: '德國第二大產區。Mittelhaardt 中央地帶（Forst、Deidesheim 等）集中頂級 Trocken Riesling GG。Forster Pechstein 葡萄園的黑色玄武岩會自然儲熱、夜間釋放，加速葡萄成熟。'
  },
  {
    key: 'nahe', name: 'Nahe', zhName: '納赫', zone: 'classic', emoji: '🌋',
    size: '4,200 公頃', signature: 'Riesling 28%',
    tagline: '土壤多樣性冠軍——超過 180 種土壤類型的小產區',
    climate: 'Nahe 河谷溫和、雨量適中（500-600mm）。受 Soonwald 森林與 Hunsrück 山脈保護',
    soils: '火山岩 / 斑岩 (Porphyr)、板岩、石英岩、紅色砂岩、紅褐土多元',
    style: '優雅與力量兼備——比 Mosel 飽滿、比 Rheingau 細緻。礦物複雜度極高',
    producers: ['Dönnhoff', 'Emrich-Schönleber', 'Schäfer-Fröhlich', 'Diel'],
    keyFact: 'Nahe 被稱為「德國土壤博物館」——4,200 公頃內超過 180 種土壤類型。Helmut Dönnhoff 被譽為「Riesling 大師」，常被視為與 Egon Müller 同等的頂級珍品。'
  },
  {
    key: 'rheinhessen', name: 'Rheinhessen', zhName: '萊茵黑森', zone: 'classic', emoji: '🌾',
    size: '27,000 公頃（德國最大）', signature: 'Riesling 17% + Müller-Thurgau + Silvaner',
    tagline: '德國最大產區——既是「Liebfraumilch 故鄉」也是新世代 Riesling 革命中心',
    climate: '萊茵河谷東向，雨量適中、日照充足。Roter Hang 紅色斜坡受河水調節',
    soils: 'Roter Hang 「紅色斜坡」紅色板岩 (Rotliegend)、Wonnegau 子區石灰岩',
    style: '兩極：廉價半甜白 Liebfraumilch 與頂級 GG（Keller G-Max、Wittmann Morstein）並存',
    producers: ['Klaus Peter Keller', 'Wittmann', 'Battenfeld-Spanier', 'Kühling-Gillot'],
    keyFact: 'Rheinhessen 早期以 Liebfraumilch（聖母之乳，廉價半甜白酒）聞名，曾使德國酒形象受損。1990 年代後 Keller、Wittmann 等新世代酒莊在 Wonnegau 與 Roter Hang 的崛起，使 Rheinhessen 成為今日德國 Trocken Riesling 革命的中心。Keller G-Max 是世界最貴 Riesling 之一（€500-€800）。'
  },
  // === South ===
  {
    key: 'baden', name: 'Baden', zhName: '巴登', zone: 'south', emoji: '☀️',
    size: '15,800 公頃', signature: 'Spätburgunder（Pinot Noir）+ Pinot Gris',
    tagline: '德國最南產區——Pinot 三胞胎 (Burgunder) 之鄉',
    climate: 'EU 葡萄酒分區唯一被列為 Zone B 的德國產區（其他都是 Zone A）。最溫暖、最日照、最南',
    soils: 'Kaiserstuhl 火山岩、黃土、泥灰岩、石灰岩多元',
    style: 'Spätburgunder（Pinot Noir）30%——德國最重要 Pinot 產區。亦盛產 Grauburgunder、Weissburgunder、Auxerrois',
    producers: ['Bernhard Huber', 'Salwey', 'Dr. Heger', 'Bercher'],
    keyFact: 'Baden 是德國最南、最溫暖、最大的 Pinot Noir 產區。Bernhard Huber 被視為「德國 DRC」——其 Pinot Noir 可媲美 Burgundy 頂級。Kaiserstuhl 火山岩特殊風土賦予 Baden 紅酒獨特礦物深度。'
  },
  {
    key: 'wurttemberg', name: 'Württemberg', zhName: '符騰堡', zone: 'south', emoji: '🍇',
    size: '11,500 公頃', signature: 'Trollinger + Lemberger（Blaufränkisch）',
    tagline: '德國紅酒比例最高的產區（約 70% 紅）',
    climate: '南部溫暖、Neckar 河谷微氣候',
    soils: '泥灰岩、貝殼石灰岩 (Muschelkalk)、紅砂岩',
    style: 'Trollinger（=義大利 Vernatsch）為當地最大宗，輕盈紅酒。Lemberger（=Blaufränkisch）為精品紅酒主力',
    producers: ['Aldinger', 'Dautel', 'Wöhrwag', 'Rainer Schnaitmann'],
    keyFact: 'Württemberg 是德國少數紅葡萄佔多數的產區（70% 紅）。當地人對 Trollinger 的愛好極深——傳統 Schorle（紅酒兌氣泡水）至今仍是日常飲品。Lemberger 近年在頂級酒農手中正展現國際水準。'
  },
  {
    key: 'franken', name: 'Franken', zhName: '法蘭根', zone: 'south', emoji: '🌰',
    size: '6,300 公頃', signature: 'Silvaner（招牌）+ Müller-Thurgau + Riesling',
    tagline: 'Silvaner 故鄉——獨特扁圓「Bocksbeutel」酒瓶',
    climate: '大陸性氣候，溫差大、雨量少。受 Main 河谷影響',
    soils: '貝殼石灰岩 (Muschelkalk)、紅色砂岩 (Buntsandstein)、Keuper 泥灰岩',
    style: 'Silvaner 主導——乾型、礦物、葡萄柚與青蘋果香、酒體中等。是世界最重要的 Silvaner 產區',
    producers: ['Hans Wirsching', 'Horst Sauer', 'Rudolf Fürst', 'Bürgerspital'],
    keyFact: 'Franken 是世界唯一允許使用扁圓「Bocksbeutel」酒瓶的德國產區（葡萄牙 Mateus Rosé 也使用類似瓶型，但形狀有差異）。Würzburg 的 Bürgerspital 是世界最古老仍營運的酒莊之一（1316 年）。'
  },
  {
    key: 'hessische-bergstrasse', name: 'Hessische Bergstraße', zhName: '黑森山路', zone: 'south', emoji: '🌸',
    size: '460 公頃（德國第二小）', signature: 'Riesling',
    tagline: '德國「春天最早的產區」——杏花盛開的小產區',
    climate: '溫和、日照充足。被稱為「德國的 Riviera」——春天最早抵達',
    soils: '黃土、片岩、玄武岩',
    style: '產量極小、幾乎都在當地消費。風格輕盈優雅、與 Rheingau 類似但更小巧',
    producers: ['Bergsträsser Winzer eG（合作社）', 'Staatsweingut Bergstraße'],
    keyFact: '德國第二小產區（僅大於 Sachsen）。年產量極少、外銷比例低，是德國最不為人知的官方產區之一。'
  },
  // === East / North ===
  {
    key: 'ahr', name: 'Ahr', zhName: '阿爾', zone: 'east', emoji: '🌋',
    size: '560 公頃（小但精）', signature: 'Spätburgunder（85%）',
    tagline: '德國北方的 Pinot Noir 奇蹟——板岩陡坡上的紅酒之鄉',
    climate: '受 Ahr 河谷與板岩陡坡（坡度 60°+）保溫，雖位於北方但溫度足以成熟 Pinot Noir',
    soils: '藍灰板岩 (Schiefer) 為主，類似 Mosel 但更陡',
    style: '85% Spätburgunder——德國紅酒比例最高的產區。果香集中、礦物深度、結構良好的 Pinot Noir',
    producers: ['Meyer-Näkel', 'Jean Stodden', 'Kreuzberg', 'Adeneuer'],
    keyFact: 'Ahr 是德國最小的紅酒產區，但 Spätburgunder 比例高達 85%（全德國最高）。雖位於 50.5° N（接近世界 Pinot Noir 種植北限），陡坡板岩的保溫效應讓 Pinot 能完全成熟。Meyer-Näkel 是 Ahr 國際代表。'
  },
  {
    key: 'mittelrhein', name: 'Mittelrhein', zhName: '中萊茵', zone: 'east', emoji: '🏰',
    size: '470 公頃', signature: 'Riesling',
    tagline: '萊茵河遊船風光區——世界遺產中的微小 Riesling 產區',
    climate: '萊茵河河谷涼爽、陡坡板岩',
    soils: '板岩、灰岩、火山岩',
    style: '優雅 Riesling，類似 Mosel 但稍微飽滿。產量極小',
    producers: ['Toni Jost', 'Florian Weingart', 'August Perll'],
    keyFact: 'Mittelrhein 包含 Loreley 岩石與羅曼蒂克萊茵河谷（UNESCO 世界遺產）的葡萄園。產量極小、多以家庭酒莊經營。'
  },
  {
    key: 'saale-unstrut', name: 'Saale-Unstrut', zhName: '薩勒-溫斯特魯特', zone: 'east', emoji: '❄️',
    size: '770 公頃', signature: 'Müller-Thurgau + Silvaner + Weissburgunder',
    tagline: '世界最北產區之一——Saxony-Anhalt 的 51° N 葡萄園',
    climate: '寒涼大陸性氣候，受 Saale 與 Unstrut 河谷保護',
    soils: '殼灰岩 (Muschelkalk)、砂岩',
    style: '幾乎全為乾型酒、酸度高、酒體輕。Weissburgunder（Pinot Blanc）表現特佳',
    producers: ['Pawis', 'Kloster Pforta', 'Lützkendorf'],
    keyFact: 'Saale-Unstrut 與 Sachsen 一同被視為「世界最北的葡萄酒產區」（51° N 附近）。冷戰時期屬東德、產量受限。1990 年統一後產區重新發展。'
  },
  {
    key: 'sachsen', name: 'Sachsen', zhName: '薩克森', zone: 'east', emoji: '⛪',
    size: '500 公頃（德國最小）', signature: 'Müller-Thurgau + Riesling + Weissburgunder',
    tagline: '德國最小最東產區——Elbe 河畔 Dresden 周邊',
    climate: '寒涼大陸性、日照短。極端微氣候',
    soils: '花崗岩、片麻岩 (Gneiss)、黃土',
    style: '輕盈乾型酒、酸度高、礦物突出。產量幾乎全在當地消費',
    producers: ['Schloss Proschwitz', 'Schloss Wackerbarth', 'Klaus Zimmerling'],
    keyFact: 'Sachsen 是德國最小的官方葡萄酒產區（500 公頃）、最東產區、世界最北產區之一。Schloss Wackerbarth 結合葡萄酒與氣泡酒（Sekt）製造，是 Saxony 觀光重點。'
  }
]

const regions = computed(() => props.slide.regions || defaultRegions)
const activeZone = ref('all')
const filteredRegions = computed(() =>
  activeZone.value === 'all' ? regions.value : regions.value.filter((r) => r.zone === activeZone.value)
)
const activeKey = ref(props.slide.defaultKey || regions.value[0]?.key || 'mosel')
const activeRegion = computed(() => regions.value.find((r) => r.key === activeKey.value) || regions.value[0])
</script>

<style scoped>
.germany-regions-slide {
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

.zone-filter {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.zone-btn {
  background: #fff;
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 22px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  color: #3a4a5a;
  font-weight: 500;
}

.zone-btn:hover {
  transform: translateY(-2px);
}

.zone-btn.active {
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(26, 77, 110, 0.2);
}

.regions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.region-card {
  background: #fff;
  border: 2px solid transparent;
  border-top: 4px solid;
  border-radius: 8px;
  padding: 0.7rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-shadow: 0 2px 6px rgba(26, 77, 110, 0.08);
  text-align: center;
}

.region-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(26, 77, 110, 0.18);
}

.region-card.active {
  border-color: var(--zone-color);
  box-shadow: 0 6px 16px rgba(26, 77, 110, 0.25);
  transform: translateY(-2px);
}

.region-flag {
  font-size: 1.4rem;
}

.region-card h3 {
  margin: 0;
  font-size: 0.92rem;
  color: #1f3346;
}

.region-zh {
  font-size: 0.76rem;
  color: #3a4a5a;
}

.region-tags {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}

.size-tag {
  font-size: 0.68rem;
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-weight: 500;
  background: #d4a017;
  color: #fff;
}

.region-detail {
  background: #fff;
  border-radius: 12px;
  border-left: 6px solid;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(26, 77, 110, 0.12);
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.detail-header h3 {
  margin: 0;
  color: #1f3346;
  font-size: 1.3rem;
}

.detail-header .zh {
  color: #3a4a5a;
  font-size: 0.95rem;
  font-weight: 400;
  margin-left: 0.4rem;
}

.detail-badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.zone-badge {
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 14px;
  font-size: 0.78rem;
  font-weight: 500;
}

.size-badge, .grape-badge {
  background: #f5f7fa;
  color: #1a4d6e;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 500;
}

.grape-badge {
  background: #d4a017;
  color: #fff;
}

.detail-tagline {
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  padding: 0.7rem 0.9rem;
  background: #f5f7fa;
  border-radius: 6px;
  border-left: 3px solid #d4a017;
  font-style: italic;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.detail-block.full-width {
  grid-column: 1 / -1;
}

.detail-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.95rem;
  color: #1a4d6e;
}

.detail-block p {
  margin: 0;
  color: #2c3e50;
  font-size: 0.88rem;
  line-height: 1.6;
}

.detail-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #2c3e50;
  font-size: 0.86rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .germany-regions-slide {
    padding: 1rem;
  }
  .regions-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
