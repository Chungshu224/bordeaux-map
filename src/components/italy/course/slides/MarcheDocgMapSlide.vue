<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Marche DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 DOCG</span>
        <button
          v-for="z in DOCG_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 主力 DOC</span>
        <button
          v-for="z in MAIN_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">💎 特色 DOC</span>
        <button
          v-for="z in SMALL_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Verdicchio × 2 / Cònero / Offida / Serrapetrona）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>主力 DOC（Verdicchio Jesi / Rosso Cònero / Rosso Piceno）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>特色 DOC（Lacrima / Falerio / Bianchello）</div>
        </div>
      </div>

      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">{{ selectedInfo.tierLabel }}</div>
        <h3 class="info-name">{{ selectedInfo.name }}</h3>
        <div class="info-rows">
          <div class="info-row" v-for="row in selectedInfo.details" :key="row.label">
            <span class="info-label">{{ row.label }}</span>
            <span class="info-val">{{ row.value }}</span>
          </div>
        </div>
        <div class="info-desc">{{ selectedInfo.desc }}</div>
        <div class="info-pair" v-if="selectedInfo.pairing">
          <span class="pair-label">🍽️ 配餐</span>{{ selectedInfo.pairing }}
        </div>
        <div class="info-price" v-if="selectedInfo.price">
          <span class="price-label">💶 參考價格</span>{{ selectedInfo.price }}
        </div>
      </div>
      <div class="info-panel info-empty" v-else>
        <div class="empty-icon">🌊</div>
        <p>點選上方按鈕或地圖上的產區<br>查看位置與詳細資訊</p>
        <div class="empty-hint">
          <div class="hint-row" v-for="z in ALL_ZONES" :key="z.id">
            <span class="hint-dot" :class="`tier-${z.tier}`"></span>
            <span>{{ z.emoji }} {{ z.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

defineProps({ slide: { type: Object, default: () => ({}) } })

const DOCG_ZONES = [
  {
    id: 'verdicchio-jesi-riserva',
    name: 'Castelli di Jesi Verdicchio Riserva DOCG',
    shortName: 'Verdicchio Jesi DOCG',
    emoji: '🏆',
    tier: 's',
    tierLabel: '👑 旗艦 DOCG — Marche 白酒之冠',
    center: [13.098, 43.520],
    zoom: 10,
    geojsonPath: '/italy/regions/marche/geojson/DOCG/Castelli di Jesi Verdicchio Riserva DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2010 年升格，是 Castelli di Jesi 最高品質認證' },
      { label: '位置', value: 'Ancona 省，Jesi 城周邊丘陵，Adriatic 海岸往內陸延伸，海拔 100-350m' },
      { label: '品種', value: 'Verdicchio（意為「小綠葡萄」）100%，Marche 獨有本土白品種' },
      { label: '陳年', value: 'Riserva：最少 18 個月（含 6 個月瓶陳），最低酒精 13%' },
      { label: '陳年潛力', value: '頂級款可陳年 10-20 年，發展蜂蜜、堅果、石油氣息（類似 Riesling）' }
    ],
    desc: 'Marche 最重要的 DOCG，也是義大利被低估最多的頂級白酒之一。Verdicchio 品種在 Jesi 的鈣質黏土丘陵上展現出令人驚艷的礦物感、杏仁和海洋風味。最著名的是特殊的魚形瓶（Anfora）包裝，源自 1950 年代的行銷創意，但頂級款早已改用波爾多瓶型。Umani Ronchi、Bucci、Garofoli 是世界級酒莊。',
    pairing: 'Vincigrassi（Marche 傳統千層麵）、烤鯛魚、龍蝦、Adriatic 海鮮湯、新鮮 Pecorino',
    price: '€15-25 / 頂級 Riserva €25-50，同等品質 Burgundy 白酒的四分之一價格'
  },
  {
    id: 'verdicchio-matelica-riserva',
    name: 'Verdicchio di Matelica Riserva DOCG',
    shortName: 'Verdicchio Matelica DOCG',
    emoji: '⭐',
    tier: 's',
    tierLabel: '⭐ 內陸 DOCG — 高海拔礦物精英',
    center: [13.018, 43.248],
    zoom: 11.5,
    geojsonPath: '/italy/regions/marche/geojson/DOCG/Verdicchio di Matelica Riserva DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2010 年升格，與 Jesi 同年，但產區更小、更精品化' },
      { label: '位置', value: 'Matelica 山谷（Appennino Umbro-Marchigiano），全封閉內陸山谷，海拔 300-600m' },
      { label: '比較', value: '比 Jesi 更高海拔、更大日夜溫差 → 更高酸度、更強結構、更佳陳年潛力' },
      { label: '土壤', value: '石灰岩、砂質黏土，礦物感比 Jesi 更強烈，帶煙燻和海洋礦物特色' },
      { label: '規模', value: '面積小、產量少，精品化程度更高，是 Verdicchio 的精英版本' }
    ],
    desc: '山谷中的秘密精品——Matelica 完全被 Apennine 山脈環繞，山谷小氣候造就比 Jesi 更冷涼的生長環境。更高的自然酸度和更強的礦物感讓 Matelica 的 Verdicchio 陳年後展現出令人驚艷的複雜度，是義大利最值得關注的白酒新星。Colpaola、Bisci 是代表酒莊，年產量稀少，歐洲市場供不應求。',
    pairing: '白松露義大利麵、烤比目魚、海膽、陳年 Pecorino di Fossa（地窖熟成起司）',
    price: '€18-30 / 頂級款 €30-55，比 Jesi 更稀有、更集中，是 Marche 最值得收藏的白酒'
  },
  {
    id: 'conero-docg',
    name: 'Cònero DOCG',
    shortName: 'Cònero DOCG',
    emoji: '🏔️',
    tier: 's',
    tierLabel: '🏔️ 頂級 DOCG — Marche 最偉大紅酒',
    center: [13.542, 43.548],
    zoom: 11,
    geojsonPath: '/italy/regions/marche/geojson/DOCG/Cònero DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2004 年升格，限於 Riserva 等級（陳年 24 個月）' },
      { label: '品種', value: 'Montepulciano 85%+（可混少量 Sangiovese），Conero 半島黏土石灰岩' },
      { label: '地理', value: 'Monte Cònero（572m）是 Adriatic 海岸唯一的石灰岩岬角，獨特風土' },
      { label: '風格', value: '濃郁深邃，黑色水果、皮革、香料、礦物；比 Abruzzo 的 Montepulciano 更精緻' },
      { label: '陳年', value: '15-25 年陳年潛力，Riserva 需在橡木桶和瓶中陳年共 24 個月' }
    ],
    desc: 'Marche 最偉大的紅酒，產自 Monte Cònero 半島的 Montepulciano。Conero 的石灰岩地形是 Adriatic 沿岸少見的地質奇觀，賦予葡萄酒比平原 Montepulciano 更多的礦物感和結構。Umani Ronchi 的「Pelago」（Montepulciano + Cabernet + Merlot）和「Cùmaro」純 Montepulciano 是 Marche 最有名的頂級紅酒，可媲美義大利任何大區的頂級紅酒。',
    pairing: '野豬燉肉、烤羊腿、Vincigrassi（Marche 野味千層麵）、陳年 Pecorino 起司',
    price: '€25-50 / 頂級 Riserva €40-80，Marche 紅酒的最高峰，陳年 8 年後開瓶最佳'
  },
  {
    id: 'offida-docg',
    name: 'Offida DOCG',
    shortName: 'Offida',
    emoji: '🌟',
    tier: 's',
    tierLabel: '🌟 南部 DOCG — Pecorino 品種的搖籃',
    center: [13.685, 42.932],
    zoom: 12,
    geojsonPath: '/italy/regions/marche/geojson/DOCG/Offida DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2001 年建立，2011 年修訂，Marche 南部唯一 DOCG' },
      { label: '品種', value: '白：Pecorino 85%+；紅：Montepulciano 85%+ 名為 Rosso' },
      { label: 'Pecorino', value: '與起司同名的白葡萄品種（Pecorino 意為「羊奶」），1980 年代瀕臨消失，現已復興' },
      { label: '風格', value: '白酒：芳香、飽滿、礦物感強，白桃、杏仁、蜂蠟、海洋礦物' },
      { label: '位置', value: 'Ascoli Piceno 省，Marche 最南端，Tronto 河谷上游，海拔 400-600m' }
    ],
    desc: 'Marche 南部的寶藏 DOCG，以 Pecorino 白品種的復興為代名詞。1980 年代 Pecorino 幾乎消失，Cocci Grifoni 家族的堅持讓它重獲新生，如今成為義大利最受矚目的新興白品種之一。Offida Pecorino 展現出芳香、飽滿、礦物感並重的個性，完全不同於任何其他義大利白酒，是近年義大利白酒界最令人興奮的發現。',
    pairing: '烤比目魚、海鮮拼盤、白松露起司（Pecorino di Fossa）、Ascoli 炸橄欖（特產）',
    price: '€12-22 / 頂級款 €22-40，義大利最值得關注的新興 DOCG 白酒之一'
  },
  {
    id: 'vernaccia-serrapetrona',
    name: 'Vernaccia di Serrapetrona DOCG',
    shortName: 'Vernaccia Serrapetrona',
    emoji: '🍾',
    tier: 's',
    tierLabel: '🍾 稀有 DOCG — 義大利最罕見氣泡紅酒',
    center: [13.205, 43.188],
    zoom: 12.5,
    geojsonPath: '/italy/regions/marche/geojson/DOCG/Vernaccia di Serrapetrona DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2004 年升格，Marche 最罕見的 DOCG，也是義大利最獨特的氣泡紅酒' },
      { label: '品種', value: 'Vernaccia Nera（黑 Vernaccia）85%+，僅 Serrapetrona 周邊有種植' },
      { label: '釀造', value: '傳統三次發酵法（Rifermentazione），包含風乾葡萄的第三次發酵，非常特殊' },
      { label: '風格', value: '乾型（Secco）/ 甜型（Dolce），紅色氣泡酒，覆盆莓、紫羅蘭、香料' },
      { label: '稀有', value: '全球年產量僅約 10 萬瓶，是義大利最難找到的 DOCG 之一' }
    ],
    desc: '義大利最獨特的氣泡紅酒，完全被外界忽視的稀世珍品。Vernaccia Nera 品種僅在 Serrapetrona 一帶存活，三次發酵的古老工藝造就了複雜的氣泡紅酒——覆盆莓、紫羅蘭、香料的香氣在氣泡中釋放，既不同於法國粉紅氣泡，也不同於 Lambrusco。甜型版本是義大利最令人驚喜的甜型氣泡紅酒，年節配餐極佳。',
    pairing: '甜型：義大利聖誕節甜點、巧克力起司；乾型：烤鴿子、山區燉肉、辣味臘腸',
    price: '€10-18，義大利最稀有且最具話題性的 DOCG，歐洲精品酒商的秘密收藏'
  }
]

const MAIN_ZONES = [
  {
    id: 'verdicchio-jesi-doc',
    name: 'Verdicchio dei Castelli di Jesi DOC',
    shortName: 'Verdicchio Jesi DOC',
    emoji: '⚪',
    tier: 'a',
    tierLabel: '⚪ 主力 DOC — 義大利最暢銷白酒之一',
    center: [13.100, 43.515],
    zoom: 10,
    geojsonPath: '/italy/regions/marche/geojson/DOC/Verdicchio dei Castelli di Jesi DOC.geojson',
    details: [
      { label: 'DOC 年份', value: '1968 年，是 Marche 最早建立的 DOC 之一' },
      { label: '範圍', value: 'DOCG Riserva 的大傘型基礎 DOC，涵蓋更廣的種植區域' },
      { label: '品種', value: 'Verdicchio 85%+，清爽易飲款至中等陳年款都有' },
      { label: '特色', value: '著名的魚形瓶（Anfora）源自 1950 年代的行銷策略，現在已是辨識標誌' },
      { label: '性價比', value: '€7-15 就能喝到清爽礦物感的 Verdicchio，是義大利白酒最佳 CP 值代表' }
    ],
    desc: 'Verdicchio dei Castelli di Jesi DOC 是義大利最具辨識度的白酒之一。1950 年代設計的魚形瓶（Anfora）讓它在義大利以外的市場大獲成功，雖然現代精品款多改用傳統瓶型，但魚形瓶仍是文化標誌。清爽的杏仁、柑橘、礦物風味，搭配 Adriatic 海鮮是絕配。這是認識 Verdicchio 最便宜的方式。',
    pairing: 'Adriatic 烤海鮮、炸沙丁魚、海鮮義大利麵、炸魚排（Brodetto Marchigiano）',
    price: '€7-15，Marche 白酒的入門選擇，同等品質是法國白酒的三分之一價格'
  },
  {
    id: 'rosso-conero-doc',
    name: 'Rosso Cònero DOC',
    shortName: 'Rosso Cònero',
    emoji: '🍷',
    tier: 'a',
    tierLabel: '🍷 主力 DOC — Cònero 紅酒入門',
    center: [13.542, 43.545],
    zoom: 11,
    geojsonPath: '/italy/regions/marche/geojson/DOC/Rosso Cònero DOC.geojson',
    details: [
      { label: '品種', value: 'Montepulciano 85%+，可混少量 Sangiovese，同一區域的 DOCG 基礎版' },
      { label: '差異', value: 'DOC 版無陳年要求，比 DOCG Riserva 更早開瓶，果香更直接鮮活' },
      { label: '風格', value: '黑櫻桃、李子、紫羅蘭、香料，中至飽滿酒體，單寧柔順，酒精 13-14%' },
      { label: '性價比', value: '認識 Montepulciano 在 Marche 最精緻表達的最便宜方式' },
      { label: '位置', value: 'Monte Cònero 海岬，Ancona 南方，Adriatic 海岸唯一的石灰岩地形' }
    ],
    desc: 'Cònero 海岬的 Montepulciano 展現了與 Abruzzo 截然不同的精緻個性——石灰岩土壤帶來更多礦物感和更細緻的單寧。Rosso Cònero DOC 是 DOCG 的入門版，年輕時果香豐沛、易飲，但也有足夠結構可陳年 5-8 年。Umani Ronchi 的「San Lorenzo」是最廣為人知的 Rosso Cònero，是義大利 20 世紀最重要的紅酒之一。',
    pairing: '烤野豬燉肉、Vincigrassi 千層麵、烤乳豬、Marche 燉羊肉、陳年 Pecorino',
    price: '€10-18，Marche 紅酒的最佳入門，比同等 Abruzzo Montepulciano 更精緻'
  },
  {
    id: 'rosso-piceno',
    name: 'Rosso Piceno DOC',
    shortName: 'Rosso Piceno',
    emoji: '🫐',
    tier: 'a',
    tierLabel: '🫐 主力 DOC — Marche 日常紅酒代表',
    center: [13.680, 43.100],
    zoom: 9.5,
    geojsonPath: '/italy/regions/marche/geojson/DOC/Rosso Piceno Piceno DOC.geojson',
    details: [
      { label: '範圍', value: 'Marche 南部廣域 DOC，涵蓋 Ascoli Piceno、Macerata、Fermo 三省' },
      { label: '品種', value: 'Sangiovese 35-85% + Montepulciano 15-50%，兩大品種混釀' },
      { label: '等級', value: 'Rosso Piceno DOC + Rosso Piceno Superiore（來自最佳子產區）' },
      { label: '風格', value: '中等酒體，紅莓果、草本、香料，比 Conero 更輕盈清爽，性格靈活' },
      { label: 'Piceno', value: '名稱源自古代 Piceni 部落，此地釀酒歷史超過 3000 年' }
    ],
    desc: 'Marche 最大的紅酒 DOC，以 Sangiovese 和 Montepulciano 的混釀展現南部 Marche 的日常飲用文化。Rosso Piceno 是理解 Marche 紅酒版圖的重要基礎——廣域 DOC 提供了認識多個子產區風格的機會。Superiore 等級特別值得尋找，選自海拔較高的最佳葡萄園，展現更集中的礦物感和複雜度。',
    pairing: '烤豬肉串、Olive Ascolane（炸橄欖，Marche 特產）、Pizza、燉豬肋排',
    price: '€8-15 / Superiore €15-25，Marche 最親民的日常紅酒，日常餐桌的完美選擇'
  }
]

const SMALL_ZONES = [
  {
    id: 'lacrima-morro',
    name: "Lacrima di Morro d'Alba DOC",
    shortName: "Lacrima di Morro",
    emoji: '🌹',
    tier: 'b',
    tierLabel: "🌹 芳香 DOC — 義大利最香的紅酒",
    center: [13.182, 43.641],
    zoom: 13,
    geojsonPath: "/italy/regions/marche/geojson/DOC/Lacrima di Morro  Lacrima di Morro d'Alba DOC.geojson",
    details: [
      { label: '品種', value: 'Lacrima（意為「眼淚」）100%，Marche 獨有本土紅品種，芳香型' },
      { label: '香氣', value: '義大利最芳香的紅葡萄品種之一：紫羅蘭、玫瑰、黑櫻桃、覆盆莓，濃郁馥郁' },
      { label: '名稱', value: '「Lacrima」（眼淚）源自葡萄成熟後果汁從果皮滲出，形如眼淚' },
      { label: '範圍', value: 'Morro d\'Alba 小鎮周邊，面積極小，年產量有限' },
      { label: '口感', value: '單寧低、酒精中等（12-13%），早飲型，適合微涼服侍，不適合長陳年' }
    ],
    desc: "Marche 最令人驚艷的本土品種，沒有之一。Lacrima 的香氣強度遠超大多數義大利紅品種，一杯下去滿室玫瑰紫羅蘭，是葡萄酒愛好者的「第一次」難忘體驗。低單寧、高香氣的個性讓它既不像 Cabernet 也不像 Pinot Noir，自成一格。Morro d'Alba 小鎮周邊面積極小，Stefano Mancinelli 是最重要的生產者。",
    pairing: '陳年 Pecorino 起司、風乾肉腸（Ciauscolo）、黑巧克力甜點、羊奶起司',
    price: "€8-16，Marche 最具話題性的紅酒，適合當作葡萄酒聚會的「驚喜酒款」"
  },
  {
    id: 'falerio',
    name: 'Falerio DOC',
    shortName: 'Falerio',
    emoji: '🌾',
    tier: 'b',
    tierLabel: '🌾 南部 DOC — Trebbiano 的南方詮釋',
    center: [13.678, 42.960],
    zoom: 11,
    geojsonPath: '/italy/regions/marche/geojson/DOC/Falerio DOC.geojson',
    details: [
      { label: '位置', value: 'Ascoli Piceno 省，Marche 最南端，Tronto 河流域，靠近 Abruzzo 邊界' },
      { label: '品種', value: 'Trebbiano Toscano + Passerina + Pecorino，多品種白酒混釀' },
      { label: '特色', value: 'Passerina 品種是 Marche 南部特有白品種，帶來比 Trebbiano 更豐富的花香' },
      { label: '風格', value: '輕盈清爽，柑橘、白花、杏仁，夏日易飲型，適合搭配 Adriatic 海鮮' },
      { label: '歷史', value: '名稱源自羅馬時代的 Faleria 古城，釀酒歷史超過 2000 年' }
    ],
    desc: 'Marche 南端的傳統白酒 DOC，以 Passerina 品種的芳香特色為亮點。Falerio 是 Offida DOCG 的大型兄弟產區，提供更親民的價格入口。Passerina 這個幾乎只在 Marche 和 Abruzzo 種植的白品種，帶來比 Trebbiano 更有個性的花香果香，是認識 Marche 南部白酒風格的好起點。',
    pairing: 'Brodetto di Pesce（Marche 海鮮湯）、烤海鮮、炸魚、夏日前菜',
    price: '€6-12，Marche 南部最親民的日常白酒，搭配 Adriatic 海鮮無需思考'
  },
  {
    id: 'bianchello-metauro',
    name: 'Bianchello del Metauro DOC',
    shortName: 'Bianchello Metauro',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '🌊 北部 DOC — Metauro 河谷輕盈白酒',
    center: [12.908, 43.760],
    zoom: 11,
    geojsonPath: '/italy/regions/marche/geojson/DOC/Bianchello del Metauro DOC.geojson',
    details: [
      { label: '位置', value: 'Pesaro-Urbino 省，Marche 北部，Metauro 河流域，Adriatic 海岸往內陸' },
      { label: '品種', value: 'Biancame（= Bianchello）85%+，Marche 北部特有白品種' },
      { label: '風格', value: '極清爽輕盈，低酒精（11-12%），柑橘、白花、輕微苦杏仁，立即易飲' },
      { label: '角色', value: 'Marche 最日常的白酒，供應北部海岸餐廳的「口渴時的酒」' },
      { label: '歷史', value: '古羅馬詩人 Pliny 記載此地葡萄酒，Metauro 戰役（207 BC）發生地附近' }
    ],
    desc: 'Marche 北部的輕盈日常白酒，代表義大利中部海岸最純粹的餐桌葡萄酒文化。Biancame 品種幾乎只在這片河谷種植，清爽極致、酒精低、完全不需思考的海岸白酒。在 Pesaro 或 Fano 的海邊餐廳，配著炸沙丁魚喝一瓶 Bianchello，是最道地的 Adriatic 夏日體驗，完全不追求複雜度，只求清爽。',
    pairing: '炸沙丁魚、烤蛤蜊、海鮮前菜、炸魚條（Pesaro 海岸特色料理）',
    price: '€5-10，義大利最不需要動腦的夏日海岸白酒，性價比第一，海邊喝第一'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...MAIN_ZONES, ...SMALL_ZONES]

const TIER_STYLE = {
  s: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#B71C1C', line: '#EF9A9A', fillOpacity: 0.28, lineWidth: 2.2 },
  b: { fill: '#1B5E20', line: '#A5D6A7', fillOpacity: 0.22, lineWidth: 1.8 }
}

const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? ALL_ZONES.find(z => z.id === selected.value) : null
)

async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.type || (data.type === 'Feature' && !data.geometry)) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return
  const geojsonData = await Promise.all(ALL_ZONES.map(z => fetchGeojson(z)))
  ALL_ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return
    const ts = TIER_STYLE[z.tier]
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    if (!map.getSource(z.id)) map.addSource(z.id, { type: 'geojson', data: gj })
    if (!map.getLayer(fillId)) {
      map.addLayer({ id: fillId, type: 'fill', source: z.id,
        paint: { 'fill-color': ts.fill, 'fill-opacity': ts.fillOpacity } })
    }
    if (!map.getLayer(lineId)) {
      map.addLayer({ id: lineId, type: 'line', source: z.id,
        paint: { 'line-color': ts.line, 'line-width': ts.lineWidth } })
    }
    map.on('click', fillId, () => selectZone(z.id))
    map.on('mouseenter', fillId, () => { map.getCanvas().style.cursor = 'pointer' })
    map.on('mouseleave', fillId, () => { map.getCanvas().style.cursor = '' })
  })
  ALL_ZONES.forEach(z => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = 'font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;'
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    markersArr.push(new mapboxgl.Marker({ element: el }).setLngLat(z.center).addTo(map))
  })
}

function selectZone (id) {
  selected.value = id
  const info = ALL_ZONES.find(z => z.id === id)
  if (!info || !map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    const active = z.id === id
    if (map.getLayer(`fill-${z.id}`)) {
      map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', active ? ts.fillOpacity * 2.2 : ts.fillOpacity * 0.35)
    }
    if (map.getLayer(`line-${z.id}`)) {
      map.setPaintProperty(`line-${z.id}`, 'line-width', active ? ts.lineWidth * 1.8 : ts.lineWidth * 0.6)
    }
  })
  map.flyTo({ center: info.center, zoom: info.zoom, duration: 900, essential: true })
}

function resetView () {
  selected.value = null
  if (!map) return
  ALL_ZONES.forEach(z => {
    const ts = TIER_STYLE[z.tier]
    if (map.getLayer(`fill-${z.id}`)) map.setPaintProperty(`fill-${z.id}`, 'fill-opacity', ts.fillOpacity)
    if (map.getLayer(`line-${z.id}`)) map.setPaintProperty(`line-${z.id}`, 'line-width', ts.lineWidth)
  })
  map.flyTo({ center: [13.35, 43.30], zoom: 8.5, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [13.35, 43.30],
    zoom: 8.5,
    attributionControl: false
  })
  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right')
  map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right')
  map.on('load', async () => { await highlightAll(); loading.value = false })
  map.on('error', e => { mapError.value = `地圖錯誤：${e.error?.message || '未知'}`; loading.value = false })
}

onMounted(async () => { await nextTick(); initMap() })
onBeforeUnmount(() => {
  markersArr.forEach(m => m.remove()); markersArr = []
  if (map) { map.remove(); map = null }
})
</script>

<style scoped>
.docg-map-slide {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  padding: 18px 26px 14px; box-sizing: border-box; gap: 8px;
}
.slide-header { flex-shrink: 0; }
.slide-header h2 {
  font-size: 1.38rem; font-weight: 700; color: #2c3e50;
  margin: 0 0 3px; border-bottom: 3px solid #c8a96e; padding-bottom: 7px;
}
.slide-subtitle { font-size: 0.8rem; color: #888; margin: 0; }

.zone-buttons {
  display: flex; flex-wrap: wrap; gap: 6px; align-items: center; flex-shrink: 0;
}
.btn-group { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
.btn-group-label { font-size: 0.72rem; font-weight: 700; color: #888; white-space: nowrap; }

.zone-btn {
  padding: 4px 10px; border-radius: 16px; border: 1.5px solid transparent;
  font-size: 0.76rem; font-weight: 600; cursor: pointer; transition: all 0.15s; white-space: nowrap;
}
.zone-btn.tier-s   { background: #e8eaf6; border-color: #1A237E; color: #1A237E; }
.zone-btn.tier-a   { background: #fff5f5; border-color: #B71C1C; color: #B71C1C; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #1A237E; color: #fff; }
.zone-btn.active.tier-a { background: #B71C1C; color: #fff; }
.zone-btn.active.tier-b { background: #1B5E20; color: #fff; }
.zone-btn:hover:not(.active) { opacity: 0.75; transform: translateY(-1px); }

.reset-btn {
  padding: 4px 10px; border-radius: 14px; border: 1px solid #ccc;
  background: #f5f5f5; color: #666; font-size: 0.74rem; cursor: pointer;
  margin-left: auto; transition: background 0.15s;
}
.reset-btn:hover { background: #e8e8e8; }

.map-info-row { flex: 1; min-height: 0; display: flex; gap: 10px; }
.map-wrapper {
  flex: 1 1 58%; min-height: 0; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.12);
}
.mapbox-container { width: 100%; height: 100%; }
.map-loading, .map-error {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; font-size: 0.88rem; background: rgba(248,245,240,0.9); z-index: 3;
}
.map-error { color: #c0392b; }

.map-legend {
  position: absolute; bottom: 26px; left: 8px;
  background: rgba(255,255,255,0.93); border-radius: 8px; padding: 6px 9px;
  display: flex; flex-direction: column; gap: 4px;
  font-size: 0.7rem; color: #444; box-shadow: 0 2px 8px rgba(0,0,0,0.12); z-index: 5;
}
.legend-row { display: flex; align-items: center; gap: 5px; }
.legend-dot { width: 11px; height: 11px; border-radius: 3px; flex-shrink: 0; }
.legend-dot.tier-s { background: #1A237E; }
.legend-dot.tier-a { background: #B71C1C; }
.legend-dot.tier-b { background: #1B5E20; }

.info-panel {
  flex: 0 0 40%; overflow-y: auto; background: #fafafa; border-radius: 12px;
  padding: 14px 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  display: flex; flex-direction: column; gap: 8px; box-sizing: border-box;
}
.info-empty { align-items: center; justify-content: center; text-align: center; color: #aaa; }
.empty-icon { font-size: 2rem; }
.info-empty p { font-size: 0.84rem; line-height: 1.5; margin: 0; }
.empty-hint {
  display: flex; flex-direction: column; gap: 4px;
  text-align: left; margin-top: 8px; font-size: 0.75rem; color: #666;
}
.hint-row { display: flex; align-items: center; gap: 6px; }
.hint-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hint-dot.tier-s { background: #1A237E; }
.hint-dot.tier-a { background: #B71C1C; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #1A237E; }
.info-badge.tier-a { background: #B71C1C; }
.info-badge.tier-b { background: #1B5E20; }

.info-name { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0; }
.info-rows { display: flex; flex-direction: column; gap: 4px; }
.info-row { display: flex; gap: 6px; font-size: 0.77rem; line-height: 1.4; }
.info-label { flex: 0 0 54px; font-weight: 600; color: #888; font-size: 0.72rem; }
.info-val { color: #333; flex: 1; }

.info-desc {
  font-size: 0.77rem; color: #555; line-height: 1.55;
  background: #f0f4f8; border-radius: 7px; padding: 9px 11px;
}
.info-pair, .info-price {
  font-size: 0.76rem; color: #555; border-radius: 7px; padding: 7px 11px; line-height: 1.45;
}
.info-pair { background: #fff8e8; }
.info-price { background: #e8eaf6; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
