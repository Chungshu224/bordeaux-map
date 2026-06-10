<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Friuli Venezia Giulia DOCG & DOC 互動地圖' }}</h2>
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
        <span class="btn-group-label">⭐ 精品 DOC</span>
        <button
          v-for="z in MAIN_ZONES" :key="z.id"
          class="zone-btn" :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🌿 廣域 DOC</span>
        <button
          v-for="z in OTHER_ZONES" :key="z.id"
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
          <div class="legend-row"><span class="legend-dot tier-s"></span>DOCG（Picolit / Ramandolo / Rosazzo / Lison）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>精品 DOC（Collio / Colli Orientali / Carso）</div>
          <div class="legend-row"><span class="legend-dot tier-b"></span>廣域 DOC（Grave / Isonzo / Aquileia）</div>
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
        <div class="empty-icon">🧡</div>
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
    id: 'picolit-docg',
    name: 'Colli Orientali del Friuli Picolit DOCG',
    shortName: 'Picolit DOCG',
    emoji: '💛',
    tier: 's',
    tierLabel: '💛 稀世 DOCG — 義大利最珍稀的甜白酒',
    center: [13.420, 46.065],
    zoom: 11,
    geojsonPath: '/italy/regions/friuli/geojson/DOCG/Colli Orientali del Friuli Picolit DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2006 年升格，Friuli 第一個 DOCG，Colli Orientali 丘陵最高品質認證' },
      { label: '品種', value: 'Picolit 100%，Friuli 獨有珍稀本土白品種，生理性落花嚴重，產量極低' },
      { label: '稀有原因', value: 'Picolit 每串葡萄只有 10-15 顆（正常 100-200 顆），每公頃產量極低' },
      { label: '風格', value: '甜型：蜂蜜、杏桃、橘皮糖、杏仁花，酸度清爽平衡，酒精 14-17%' },
      { label: '地位', value: '曾是 18 世紀歐洲貴族最鍾愛的義大利甜酒，路易十六宮廷的珍品' }
    ],
    desc: 'Picolit 是義大利最難釀造、最難取得的甜白酒——每串葡萄因生理性落花只留下寥寥數顆，讓它自然而然地成為甜型濃縮酒。18 世紀時 Picolit 風靡歐洲貴族，傳說路易十六的宮廷也有它的身影。現在每年產量僅數萬瓶，頂級生產者 La Roncaia、Ronchi di Cialla 的 Picolit 可陳年 20 年以上，蜂蜜和橘皮糖的風味在陳年後演化為無花果乾和香料。一瓶頂級 Picolit 是 Friuli 最值得珍藏的液體遺產。',
    pairing: 'Gorgonzola 藍起司、Frico（Friuli 起司薄餅）、杏仁餅乾、蜂蜜蛋糕、鵝肝醬',
    price: '€30-80 / 375ml，義大利最珍稀的甜白酒之一，頂級款可達 €100+'
  },
  {
    id: 'ramandolo-docg',
    name: 'Ramandolo DOCG',
    shortName: 'Ramandolo',
    emoji: '🌟',
    tier: 's',
    tierLabel: '🌟 微型 DOCG — 義大利最小的甜白酒 DOCG',
    center: [13.228, 46.332],
    zoom: 13.5,
    geojsonPath: '/italy/regions/friuli/geojson/DOCG/Ramandolo DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2001 年，義大利面積最小的 DOCG 之一，僅約 25 公頃葡萄園' },
      { label: '位置', value: 'Udine 省，Nimis 鎮 Ramandolo 山坡，面南陡坡，海拔 250-350m' },
      { label: '品種', value: 'Verduzzo Friulano 100%，需達一定甜度才能使用 DOCG 標示' },
      { label: '風格', value: '甜型微帶苦澀：蜂蜜、乾杏桃、榛子、焦糖，收尾帶特色苦杏仁' },
      { label: '特色', value: '義大利少數「苦甜」甜酒——苦澀感來自 Verduzzo 高單寧，是品種特色而非缺陷' }
    ],
    desc: 'Ramandolo 以微小的面積（約 25 公頃）擁有 DOCG 地位，是義大利最精品化的甜酒之一。Verduzzo Friulano 這個品種因高單寧而獨特——大多數甜白酒柔滑甜膩，Ramandolo 卻帶著一絲苦澀收尾，讓它成為絕佳的起司或甜點搭配。面南的陡坡讓葡萄充分成熟，部分採用風乾濃縮。這裡的酒莊數量屈指可數，Giovanni Dri（Il Roncat）是最著名的生產者，每年產量有限但品質穩定出色。',
    pairing: 'Frico（Friuli 起司煎餅）、熟成 Montasio 起司、堅果蛋糕、烤蘋果甜點',
    price: '€20-45 / 375ml，義大利最迷人的微型 DOCG，稀有但不像 Picolit 那麼昂貴'
  },
  {
    id: 'rosazzo-docg',
    name: 'Rosazzo DOCG',
    shortName: 'Rosazzo',
    emoji: '🏰',
    tier: 's',
    tierLabel: '🏰 修道院 DOCG — Friuli 最精緻的干白酒',
    center: [13.517, 46.043],
    zoom: 12.5,
    geojsonPath: '/italy/regions/friuli/geojson/DOCG/Rosazzo DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2011 年升格，Friuli 最新 DOCG，以古修道院 Abbazia di Rosazzo 為中心' },
      { label: '位置', value: 'Udine 省，Manzano 鎮，Colli Orientali 核心，Ponca 泥灰岩土壤' },
      { label: '品種', value: '白酒混釀：Friulano 50%+ / Sauvignon / Pinot Bianco，高複雜度白酒 DOCG' },
      { label: '風格', value: '干型複雜白酒：礦物感、白桃、梨、香草花，結構紮實，陳年潛力 8-15 年' },
      { label: '修道院', value: 'Abbazia di Rosazzo（羅薩佐修道院）建於 1070 年，是 Friuli 釀酒文化的精神聖地' }
    ],
    desc: 'Rosazzo 是 Friuli 釀酒文化深度的象徵——修道院自 1070 年起在 Ponca 土壤上種植葡萄，超過 950 年的連續釀酒史讓這片土地充滿靈性。DOCG 白酒混釀代表了 Friuli 白酒的精緻頂峰：不是單一品種的純粹，而是多品種的複雜交響。Livio Felluga 的「Terre Alte」（Colli Orientali 版本）是最廣為人知的標竿，展示了 Ponca 土壤對 Friulano、Sauvignon、Pinot Bianco 的神奇詮釋力。',
    pairing: 'Frico（起司薄餅）、烤干貝、白松露義大利麵、新鮮 Montasio 起司',
    price: '€25-50，Friuli 最精緻的干型白酒 DOCG，性價比遠超同等複雜度的 Burgundy 白酒'
  },
  {
    id: 'lison-docg',
    name: 'Lison DOCG',
    shortName: 'Lison',
    emoji: '🌾',
    tier: 's',
    tierLabel: '🌾 跨區 DOCG — Friulano 品種的最高殊榮',
    center: [12.718, 45.733],
    zoom: 11,
    geojsonPath: '/italy/regions/friuli/geojson/DOCG/Lison DOCG.geojson',
    details: [
      { label: 'DOCG 年份', value: '2011 年升格，橫跨 Friuli 和 Veneto 兩大區，是少數跨大區 DOCG' },
      { label: '位置', value: 'Friuli 西部（Pordenone 省）+ Veneto 東部（Venezia 省），平原沖積土' },
      { label: '品種', value: 'Friulano（= Tocai Friulano）100%，是 Friulano 品種的頂級 DOCG 表達' },
      { label: '風格', value: '干型，豐滿圓潤：白桃、香草、杏仁花、礦物，收尾有 Friulano 標誌性苦杏仁' },
      { label: 'Classico', value: 'Lison Classico 子產區（較小的最佳核心區）品質最高，建議優先選購' }
    ],
    desc: 'Lison DOCG 是 Friulano 這個品種的最高殊榮。Friulano（舊名 Tocai Friulano，因 EU 商標爭議於 2007 年改名）是 Friuli 的靈魂品種，而 Lison 平原上的深層沖積土賦予它圓潤飽滿的特性。苦杏仁的收尾是 Friulano 的標誌——這不是缺陷，而是當地人驕傲的品種個性。Lison 跨越了 Friuli 和 Veneto 的行政邊界，展示了風土的本質優先於地圖上的線條。',
    pairing: 'Prosciutto di San Daniele（Friuli 最著名的火腿）、烤淡水魚、Frico、白蘆筍（春季）',
    price: '€12-22，Friulano 品種的頂級表現，義大利白酒最令人驚艷的性價比之一'
  }
]

const MAIN_ZONES = [
  {
    id: 'collio',
    name: 'Collio Goriziano / Collio DOC',
    shortName: 'Collio',
    emoji: '🏔️',
    tier: 'a',
    tierLabel: '🏔️ 精品 DOC — 義大利最偉大的白酒產區',
    center: [13.545, 45.960],
    zoom: 11.5,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Collio Goriziano Collio DOC.geojson',
    details: [
      { label: '位置', value: 'Gorizia 省，義大利-斯洛維尼亞邊境，與斯洛維尼亞 Brda 完全連續同一地貌' },
      { label: '土壤', value: 'Ponca（泥灰岩 + 砂岩交互層）：賦予礦物感、鹽感和豐富質地，是 Collio 的靈魂' },
      { label: '品種', value: 'Friulano / Ribolla Gialla / Malvasia Istriana（白）及國際品種，單一品種或混釀' },
      { label: '橘酒聖地', value: 'Oslavia 村：Gravner、Radikon 的基地，橘酒（Anfora 陶罐）運動的全球發源地' },
      { label: '頂級酒莊', value: 'Mario Schiopetto（現代 Friuli 白酒之父）、Gravner、Radikon、Castello di Spessa' }
    ],
    desc: 'Collio 是義大利最讓葡萄酒評論家膜拜的白酒聖地，沒有之一。Ponca 土壤（泥灰岩與砂岩的交互薄層）在義大利-斯洛維尼亞邊境連續延伸，行政線不能切斷地質的連續性。Mario Schiopetto 在 1960 年代革命性地引入溫控不鏽鋼槽，奠定現代 Friuli 清新白酒風格；而 Josko Gravner 在 1997 年前往喬治亞學習 Qvevri 陶罐技術後，引爆全球橘酒（Amber Wine）革命。這片小小的丘陵同時孕育了白酒釀造的兩個極端革命，是 Friuli 最令人著迷的矛盾。',
    pairing: 'San Daniele 生火腿、烤龍蝦、白松露義大利麵、Capesante（扇貝）；橘酒版：紅肉、燉豬腳、陳年起司',
    price: '€20-45 / 頂級橘酒（Gravner/Radikon）€50-100，義大利白酒品質的絕對頂峰'
  },
  {
    id: 'colli-orientali',
    name: 'Friuli Colli Orientali DOC',
    shortName: 'Colli Orientali',
    emoji: '⭐',
    tier: 'a',
    tierLabel: '⭐ 精品 DOC — Friuli 最全面的頂級 DOC',
    center: [13.350, 46.060],
    zoom: 10.5,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Friuli Colli Orientali DOC.geojson',
    details: [
      { label: '位置', value: 'Udine 省東部，Collio 北延伸，同樣 Ponca 土壤，包含 Ramandolo、Picolit 等子產區' },
      { label: '品種', value: '白：Friulano / Ribolla Gialla / Sauvignon / Pinot Grigio / Malvasia；紅：Schioppettino / Refosco / Tazzelenghe' },
      { label: '本土紅', value: 'Schioppettino（「爆裂小炸彈」）：辛辣、黑胡椒、藍莓；1978 年幾乎滅絕，現已復興' },
      { label: '甜酒', value: '包含 Ramandolo DOCG 和 Picolit DOCG 的地理範圍，甜酒以 DOCG 名稱標示' },
      { label: '規模', value: 'Colli Orientali 是 Collio 的「大版本」，品種更多樣、面積更大、價格更親民' }
    ],
    desc: 'Friuli Colli Orientali 是 Friuli 白酒版圖的中樞，涵蓋從甜到干、從輕盈到濃郁的所有風格。同樣的 Ponca 土壤，但比 Collio 面積更大，讓更多人能以更合理的價格接觸到 Friuli 的精髓。特別值得關注的是本土紅品種：Schioppettino（「爆裂小炸彈」）在 1978 年的 DOC 規定中幾乎被消滅，靠著少數農家的堅持存活，如今成為義大利最令人興奮的本土紅酒之一。Livio Felluga 是最具代表性的大型酒莊，每款都是 Friuli 品質的可靠標竿。',
    pairing: '白酒：白蘆筍（春季名菜）、烤鱒魚；Schioppettino 紅：野豬燉肉、黑松露義大利麵',
    price: '€15-35，Friuli 最全方位的 DOC，從€15 到€50 都能找到適合的品質層次'
  },
  {
    id: 'carso',
    name: 'Carso / Carso - Kras DOC',
    shortName: 'Carso',
    emoji: '🪨',
    tier: 'a',
    tierLabel: '🪨 精品 DOC — 喀斯特高原的火山岩葡萄酒',
    center: [13.720, 45.715],
    zoom: 11,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Carso  Carso - Kras DOC.geojson',
    details: [
      { label: '位置', value: 'Trieste 省，Karst 高原（Kras / Carso），石灰岩喀斯特地形，面向 Adriatic 海' },
      { label: '土壤', value: '紅色石灰岩風化土（Terra Rossa），鐵質豐富，是 Terrano 品種的理想土壤' },
      { label: '紅酒', value: 'Terrano（= Refosco dal Peduncolo Rosso）：深紫色、高鐵質、高酸度，被稱為「天然補鐵酒」' },
      { label: '白酒', value: 'Vitovska：Karst 高原特有白品種，幾乎只在 Trieste 周邊種植，礦物感極強' },
      { label: '歷史', value: 'Carso 的 Terrano 在羅馬時期即以「Pucinum」之名供應皇室，皇后 Livia 据说每天飲用以保持健康' }
    ],
    desc: 'Carso 是 Friuli 最奇特的地貌：石灰岩被地下水溶蝕形成洞穴和裂縫，地表幾乎沒有土壤，紅色的 Terra Rossa 在岩石縫隙中積累。Bora 冷風從 Alps 席捲而下，讓葡萄在極端條件下發展出驚人的礦物感。Terrano 的高鐵質讓酒呈深紫紅色，入口的酸度幾乎讓人皺眉，但與 Trieste 的鮮魚料理搭配卻如天造地設。Vitovska 白品種更是喀斯特高原的秘密珍寶——礦物感、鹽感、煙燻石頭，是世界上最「有地感」的白酒之一。',
    pairing: 'Terrano：烤豬肋排、Jota（Trieste 傳統酸菜豆湯）；Vitovska：生蠔、醃漬海鮮、Trieste 鮮魚',
    price: '€12-25，Friuli 最個性化的 DOC，Terrano 和 Vitovska 是真正的稀有品種體驗'
  }
]

const OTHER_ZONES = [
  {
    id: 'friuli-grave',
    name: 'Friuli Grave DOC',
    shortName: 'Friuli Grave',
    emoji: '🪵',
    tier: 'b',
    tierLabel: '🪵 廣域 DOC — Friuli 最大的量產 DOC',
    center: [12.850, 45.980],
    zoom: 10,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Friuli Grave DOC.geojson',
    details: [
      { label: '位置', value: 'Friuli 西部平原，Tagliamento 河和 Cellina 河之間，礫石沖積平原' },
      { label: '土壤', value: 'Grave（礫石）：河川沖積的粗礫石和砂土，排水佳，酒款較清新易飲' },
      { label: '產量', value: 'Friuli 最大 DOC，產量佔全大區相當大比例，提供市場最廣的 Friuli 入門酒款' },
      { label: '品種', value: 'Pinot Grigio / Chardonnay / Friulano（白）/ Merlot / Cabernet（紅），多品種' },
      { label: '角色', value: 'Friuli 日常餐酒的主力供應商，Collio 和 COF 頂級酒的「民主版本」' }
    ],
    desc: 'Grave（礫石之地）的平坦沖積平原是 Friuli 的麵包籃——大量生產讓更多人能以合理價格接觸 Friuli 品種的基本特色。Pinot Grigio 和 Friulano 在這裡失去了 Collio 的礦物深度，但換來了清爽易飲和穩定品質。這是在餐廳喝一杯 Friuli 白酒而不必傾家蕩產的選擇。對於想了解 Friuli 品種特性的初學者，Grave 的平易近人是很好的起點。',
    pairing: 'Pinot Grigio：白魚料理、輕食沙拉；Merlot：義大利麵加番茄肉醬；日常餐桌通殺',
    price: '€7-14，Friuli 最親民的入門選擇，品種教學的好起點'
  },
  {
    id: 'friuli-isonzo',
    name: 'Friuli Isonzo DOC',
    shortName: 'Friuli Isonzo',
    emoji: '🌊',
    tier: 'b',
    tierLabel: '🌊 廣域 DOC — Isonzo 河谷的清新白酒',
    center: [13.480, 45.880],
    zoom: 12,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Friuli Isonzo Isonzo del Friuli DOC.geojson',
    details: [
      { label: '位置', value: 'Gorizia 省，Isonzo（Soča）河下游平原，Collio 南方，靠近 Adriatic 海' },
      { label: '土壤', value: 'Isonzo 河沖積土：砂礫、石灰岩碎屑，賦予酒款清爽礦物感，與 Collio Ponca 不同' },
      { label: '品種', value: 'Friulano / Pinot Grigio / Malvasia Istriana（白）/ Merlot / Cabernet Franc（紅）' },
      { label: '特色', value: 'Rive Alte（高河岸）子區：礫石更多，排水更佳，白酒質地更精細，接近 Collio 品質' },
      { label: '關係', value: 'Isonzo 是 Collio 的「門口」——地理上緊鄰 Collio 山腳，部分生產者兩個 DOC 都有' }
    ],
    desc: 'Isonzo 河谷的平坦葡萄園緊鄰 Collio 丘陵的山腳，是 Friuli 品質地圖上常被忽略的過渡帶。Rive Alte（高河岸）子區因礫石更密集、排水更好，生產出某些接近 Collio 品質的白酒，但價格合理許多。Vie di Romans 是 Isonzo 最知名的酒莊，其 Pinot Grigio「Dessimis」和 Chardonnay「Vie di Romans」可與 Collio 頂級款匹敵。在 Friuli 眾多 DOC 中，Isonzo 是「物超所值」的關鍵詞。',
    pairing: 'Malvasia：烤蝦、海鮮義大利燉飯；Cabernet Franc：燉羊肉、野鴿胸',
    price: '€10-20 / 頂級 Vie di Romans €25-40，性價比極高的 Collio 平替'
  },
  {
    id: 'friuli-aquileia',
    name: 'Friuli Aquileia DOC',
    shortName: 'Friuli Aquileia',
    emoji: '🏛️',
    tier: 'b',
    tierLabel: '🏛️ 廣域 DOC — 羅馬帝國葡萄酒首都的遺址',
    center: [13.360, 45.768],
    zoom: 12,
    geojsonPath: '/italy/regions/friuli/geojson/DOC/Friuli Aquileia DOC.geojson',
    details: [
      { label: '位置', value: 'Udine 省南部，Aquileia 古城周圍，Adriatic 海岸平原' },
      { label: '歷史', value: 'Aquileia（阿奎萊亞）是西元前 181 年建立的羅馬軍事重鎮，古代最重要的葡萄酒貿易中心之一' },
      { label: 'UNESCO', value: 'Aquileia 是 UNESCO 世界文化遺產，城市遺跡中保存了羅馬時期的釀酒遺址' },
      { label: '品種', value: 'Friulano / Pinot Grigio（白）/ Refosco dal Peduncolo Rosso / Merlot（紅）' },
      { label: '土壤', value: '海岸沖積平原，鹽質黏土，賦予酒款特殊的礦物和鹽感，特別是 Refosco' }
    ],
    desc: 'Aquileia 在羅馬時代是僅次於羅馬城的第二大城市，也是整個帝國北部邊境的葡萄酒分發中心。現在這裡是 UNESCO 遺址，古羅馬港口、馬賽克地板和葡萄酒倉庫的遺跡告訴我們，義大利東北角的釀酒傳統至少有 2000 年。Refosco dal Peduncolo Rosso 在海岸鹽質土壤上展現出獨特的礦物紅酒個性，是在地飲食文化的核心。來 Aquileia 喝一杯 Refosco，站在羅馬時期的馬賽克地板旁，是最穿越時空的葡萄酒體驗。',
    pairing: 'Refosco：烤海魚（特別是鯔魚 Cefalo）、海邊燒烤；Friulano：海鮮前菜、生蠔',
    price: '€8-15，Friuli 最有歷史感的 DOC，考古旅遊的完美配酒'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...MAIN_ZONES, ...OTHER_ZONES]

const TIER_STYLE = {
  s: { fill: '#1A237E', line: '#90CAF9', fillOpacity: 0.35, lineWidth: 2.8 },
  a: { fill: '#006064', line: '#80DEEA', fillOpacity: 0.30, lineWidth: 2.2 },
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
  map.flyTo({ center: [13.30, 46.00], zoom: 9.0, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [13.30, 46.00],
    zoom: 9.0,
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
.zone-btn.tier-a   { background: #e0f7fa; border-color: #006064; color: #006064; }
.zone-btn.tier-b   { background: #f1f8e9; border-color: #1B5E20; color: #1B5E20; }
.zone-btn.active.tier-s { background: #1A237E; color: #fff; }
.zone-btn.active.tier-a { background: #006064; color: #fff; }
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
.legend-dot.tier-a { background: #006064; }
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
.hint-dot.tier-a { background: #006064; }
.hint-dot.tier-b { background: #1B5E20; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s { background: #1A237E; }
.info-badge.tier-a { background: #006064; }
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
