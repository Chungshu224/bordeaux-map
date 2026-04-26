<template>
  <div class="appellation-comparison-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '姊妹 DOCG 對比' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <div class="pair-tabs">
      <button
        v-for="(p, i) in pairs"
        :key="i"
        class="pair-tab"
        :class="{ active: activeIdx === i }"
        @click="activeIdx = i"
      >
        <span class="vs-label">
          <span>{{ p.left.name }}</span>
          <span class="vs">VS</span>
          <span>{{ p.right.name }}</span>
        </span>
      </button>
    </div>

    <div class="comparison-body">
      <div class="comparison-intro">
        <h3>{{ activePair.title }}</h3>
        <p>{{ activePair.intro }}</p>
      </div>

      <div class="comparison-table">
        <div class="col col-left" :style="{ borderTopColor: activePair.left.color }">
          <div class="col-header" :style="{ backgroundColor: activePair.left.color }">
            <h4>{{ activePair.left.name }}</h4>
            <span class="region">{{ activePair.left.region }}</span>
          </div>
          <div class="col-body">
            <div v-for="row in rows" :key="'L-' + row.key" class="cell">
              <div class="cell-label">{{ row.label }}</div>
              <div class="cell-value">{{ activePair.left[row.key] }}</div>
            </div>
          </div>
        </div>

        <div class="col col-right" :style="{ borderTopColor: activePair.right.color }">
          <div class="col-header" :style="{ backgroundColor: activePair.right.color }">
            <h4>{{ activePair.right.name }}</h4>
            <span class="region">{{ activePair.right.region }}</span>
          </div>
          <div class="col-body">
            <div v-for="row in rows" :key="'R-' + row.key" class="cell">
              <div class="cell-label">{{ row.label }}</div>
              <div class="cell-value">{{ activePair.right[row.key] }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="key-difference">
        <h4>🎯 關鍵差異</h4>
        <p>{{ activePair.keyDifference }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const rows = [
  { key: 'grape', label: '🍇 主要葡萄' },
  { key: 'soil', label: '🪨 土壤' },
  { key: 'climate', label: '🌤️ 氣候' },
  { key: 'elevation', label: '⛰️ 海拔' },
  { key: 'ageing', label: '⏳ 法定陳年' },
  { key: 'style', label: '🍷 風格' },
  { key: 'aromas', label: '👃 香氣' },
  { key: 'price', label: '💰 價格區間' },
  { key: 'producers', label: '🌟 代表酒莊' }
]

const defaultPairs = [
  {
    title: 'Barolo vs Barbaresco——皮蒙特雙王',
    intro: '同樣 100% Nebbiolo、相距僅 16 km，卻是義大利最常被比較的兩個 DOCG。Barolo 結構紮實如鋼鐵，Barbaresco 優雅細膩如絲綢。',
    left: {
      name: 'Barolo DOCG',
      region: 'Piemonte / Langhe',
      color: '#7B1F2A',
      grape: '100% Nebbiolo',
      soil: '11 個村莊：La Morra/Barolo 為 Tortonian 藍灰泥灰；Serralunga/Monforte/Castiglione 為 Helvetian 紅褐砂質',
      climate: '大陸性、霧氣多、秋季長',
      elevation: '200–500 m',
      ageing: '38 個月（含 18 個月木桶）；Riserva 62 個月',
      style: '結構紮實、單寧粗獷、高酸、需 10+ 年才開瓶。男性化、力量型',
      aromas: '焦油、玫瑰、皮革、松露、甘草、黑櫻桃、雪茄',
      price: '€40 – €1,500+',
      producers: 'Conterno、Bartolo Mascarello、Vietti、Roagna、Burlotto'
    },
    right: {
      name: 'Barbaresco DOCG',
      region: 'Piemonte / Langhe',
      color: '#A8324A',
      grape: '100% Nebbiolo',
      soil: '較單一，主要為 Tortonian 鈣質泥灰岩（calcareous marl）',
      climate: '較 Barolo 略溫暖、海拔較低',
      elevation: '180–350 m',
      ageing: '26 個月（含 9 個月木桶）；Riserva 50 個月',
      style: '較優雅、單寧細緻、酒體中等、可較早飲用。女性化、優雅型',
      aromas: '紅櫻桃、玫瑰、覆盆子、絲質單寧、優雅花香',
      price: '€35 – €800+',
      producers: 'Bruno Giacosa、Gaja、Produttori del Barbaresco、Roagna'
    },
    keyDifference: 'Barolo 因 Helvetian 砂質土帶來鋼鐵骨架，Barbaresco 的鈣質泥灰岩則賦予優雅單寧。Barolo 法定陳年 38 個月、Barbaresco 僅 26 個月——這 12 個月的差異反映兩者單寧結構的本質不同。'
  },
  {
    title: 'Brunello vs Vino Nobile——托斯卡尼姊妹',
    intro: '同為 Sangiovese 為主的托斯卡尼 DOCG、相距僅 30 km，但風格與市場定位截然不同。Brunello 國際聞名、Vino Nobile 性價比之選。',
    left: {
      name: 'Brunello di Montalcino DOCG',
      region: 'Toscana / Montalcino',
      color: '#7B1F2A',
      grape: '100% Sangiovese Grosso（BBS-11 無性系）',
      soil: '多元——Galestro 片岩泥灰、Alberese 石灰岩、海岸黏土',
      climate: '溫暖乾燥、海岸影響、Mt. Amiata 屏障',
      elevation: '120–600 m',
      ageing: '50 個月（含 24 個月木桶 + 4 個月瓶陳）；Riserva 62 個月',
      style: '結構厚實、單寧成熟、果香集中、極高陳年潛力',
      aromas: '黑櫻桃、皮革、雪茄、香料、無花果乾、巧克力',
      price: '€50 – €2,000+',
      producers: 'Biondi-Santi、Soldera Case Basse、Salvioni、Poggio di Sotto'
    },
    right: {
      name: 'Vino Nobile di Montepulciano DOCG',
      region: 'Toscana / Montepulciano',
      color: '#A8324A',
      grape: '70%+ Sangiovese（當地稱 Prugnolo Gentile）+ 可加 Canaiolo、Colorino 等',
      soil: '中新世海洋沉積（黏土、砂、石灰）',
      climate: '較內陸、夏熱冬冷',
      elevation: '250–600 m',
      ageing: '24 個月（含 12 個月木桶）；Riserva 36 個月',
      style: '較易飲、果香奔放、酒體中等偏飽滿',
      aromas: '紅櫻桃、紫羅蘭、菸草、皮革、香料',
      price: '€20 – €100',
      producers: 'Avignonesi、Boscarelli、Salcheto、Poliziano'
    },
    keyDifference: 'Brunello 強制 100% Sangiovese 純粹，並有 50 個月超長陳年，使其成為 Sangiovese 的「終極表達」。Vino Nobile 允許混釀並只需 24 個月陳年，更接近日常飲用的高品質紅酒。價格落差約 3-5 倍，但 Vino Nobile 性價比經常超越 Brunello 入門款。'
  },
  {
    title: 'Verdicchio dei Castelli di Jesi vs di Matelica——海與山',
    intro: 'Marche 兩大 Verdicchio 產區，僅相隔 60 km，但因海洋與山脈影響截然不同。Castelli di Jesi 海風柔和、Matelica 山谷凜冽。',
    left: {
      name: 'Verdicchio dei Castelli di Jesi DOC',
      region: 'Marche / 海岸丘陵',
      color: '#5BA89F',
      grape: '85%+ Verdicchio',
      soil: '黏土、砂質、海洋沉積石灰岩',
      climate: '受 Adriatic 海洋調節、溫和',
      elevation: '50–400 m',
      ageing: '基礎款無；Riserva 18 個月（DOCG 等級）',
      style: '較柔軟、果香明亮、礦物中等、適合早飲',
      aromas: '青蘋果、檸檬、白花、杏仁、鹽味（海風）',
      price: '€10 – €40',
      producers: 'Bucci、Sartarelli、Garofoli、Umani Ronchi'
    },
    right: {
      name: 'Verdicchio di Matelica DOC',
      region: 'Marche / Apennine 山谷',
      color: '#3070A0',
      grape: '85%+ Verdicchio',
      soil: '海洋化石石灰岩、白堊質黏土',
      climate: '山谷大陸氣候、日夜溫差大、無海洋影響',
      elevation: '300–500 m',
      ageing: '基礎款無；Riserva 18 個月',
      style: '骨感緊瘦、極高酸度、礦物張力強、極佳陳年潛力',
      aromas: '青檸、白花、燧石、煙燻、白胡椒、堅果（陳年）',
      price: '€15 – €80',
      producers: 'Belisario、La Monacesca、Bisci、Borgo Paglianetto'
    },
    keyDifference: 'Castelli di Jesi 在海風影響下展現柔和果香與輕度鹽味；Matelica 山谷無海風、晝夜溫差大，產生極高酸度與礦物深度。Matelica 雖產量小（僅 Castelli di Jesi 的 1/10）卻擁有更佳陳年潛力——5-15 年後可發展驚人複雜度。'
  },
  {
    title: 'Amarone vs Valpolicella Superiore——同葡萄、不同工藝',
    intro: '兩者都來自 Veneto Valpolicella、使用相同葡萄組合（Corvina+Rondinella+Molinara），但釀造工藝決定了天差地別的風格。',
    left: {
      name: 'Amarone della Valpolicella DOCG',
      region: 'Veneto / Valpolicella',
      color: '#5C2334',
      grape: '45-95% Corvina + Corvinone、Rondinella、其他',
      soil: 'Valpolicella 石灰質黏土',
      climate: '溫和大陸、Lake Garda 調節',
      elevation: '150–500 m',
      ageing: '24 個月（含至少 木桶陳年）；Riserva 4 年',
      style: '採收後葡萄風乾 100-120 天（appassimento）→ 糖度集中，酒精 14-16%、酒體飽滿、甜潤但不甜',
      aromas: '黑櫻桃、無花果乾、葡萄乾、巧克力、咖啡、皮革、香料',
      price: '€30 – €500+',
      producers: 'Quintarelli、Dal Forno、Bertani、Allegrini、Masi'
    },
    right: {
      name: 'Valpolicella Superiore DOC',
      region: 'Veneto / Valpolicella',
      color: '#A8324A',
      grape: '相同混釀（Corvina+Rondinella+Molinara）',
      soil: '相同',
      climate: '相同',
      elevation: '相同',
      ageing: '12 個月以上',
      style: '新鮮葡萄直接釀造（無風乾）；酒精 12-13%、酒體中等、果香奔放、易飲',
      aromas: '紅櫻桃、覆盆子、紫羅蘭、香料、淡苦杏仁',
      price: '€10 – €30',
      producers: 'Allegrini、Tedeschi、Zenato、Zýme'
    },
    keyDifference: '工藝決定一切：Amarone 將葡萄風乾 3-4 個月使糖分濃縮、釀出 14-16% 酒精的飽滿酒款；Valpolicella Superiore 使用新鮮葡萄、產出輕快易飲。同一個生產者用同一塊葡萄園，可同時釀造這兩種風格。值得注意：Ripasso 是中間版本——將 Valpolicella 倒入剛壓榨的 Amarone 酒渣上二次發酵，被稱為「窮人的 Amarone」。'
  }
]

const pairs = computed(() => props.slide.pairs || defaultPairs)
const activeIdx = ref(0)
const activePair = computed(() => pairs.value[activeIdx.value] || pairs.value[0])
</script>

<style scoped>
.appellation-comparison-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #7B1F2A;
  font-weight: 700;
}

.slide-desc {
  color: #7a6048;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.pair-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.pair-tab {
  background: #fff;
  border: 2px solid transparent;
  padding: 0.55rem 1rem;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  color: #7a6048;
}

.pair-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.15);
}

.pair-tab.active {
  border-color: #7B1F2A;
  color: #7B1F2A;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
}

.vs-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.vs {
  background: #B8860B;
  color: #fff;
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 8px;
  font-weight: 700;
}

.comparison-intro {
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(123, 31, 42, 0.08);
  border-left: 4px solid #B8860B;
}

.comparison-intro h3 {
  margin: 0 0 0.4rem 0;
  color: #7B1F2A;
  font-size: 1.15rem;
}

.comparison-intro p {
  margin: 0;
  color: #4a3826;
  line-height: 1.6;
  font-size: 0.92rem;
}

.comparison-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.col {
  background: #fff;
  border-radius: 10px;
  border-top: 5px solid;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(123, 31, 42, 0.1);
}

.col-header {
  padding: 0.8rem 1rem;
  color: #fff;
}

.col-header h4 {
  margin: 0 0 0.2rem 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.region {
  font-size: 0.78rem;
  opacity: 0.9;
  font-style: italic;
}

.col-body {
  padding: 0.6rem 0;
}

.cell {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid #f3e9d8;
}

.cell:last-child {
  border-bottom: none;
}

.cell-label {
  font-size: 0.78rem;
  color: #7a6048;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.cell-value {
  color: #4a3826;
  font-size: 0.85rem;
  line-height: 1.5;
}

.key-difference {
  background: linear-gradient(135deg, #faf3e8 0%, #f5e8d8 100%);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  border-left: 4px solid #B8860B;
}

.key-difference h4 {
  margin: 0 0 0.5rem 0;
  color: #7B1F2A;
  font-size: 1rem;
}

.key-difference p {
  margin: 0;
  color: #4a3826;
  line-height: 1.7;
  font-size: 0.92rem;
}

@media (max-width: 768px) {
  .appellation-comparison-slide {
    padding: 1rem;
  }
  .comparison-table {
    grid-template-columns: 1fr;
  }
}
</style>
