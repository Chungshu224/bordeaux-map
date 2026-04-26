<template>
  <div class="vinho-verde-slide">
    <div class="slide-header">
      <h2>{{ slide?.title || '🌿 Vinho Verde 9 大子產區互動深度' }}</h2>
      <p class="slide-desc">{{ slide?.description || 'Vinho Verde 是葡萄牙最大的 DOC（34,000 ha），9 個子產區（sub-regiões）各有主導品種與風土差異。從頂級 Alvarinho 重鎮 Monção/Melgaço，到花香典範 Lima、深色芳香紅酒 Sousa/Baião 的全方位互動探索。' }}</p>
    </div>

    <!-- 9 子產區地圖示意 + 篩選 -->
    <div class="map-mock">
      <div class="map-title">📍 Minho 大區 9 子產區（由北至南）</div>
      <div class="subregion-grid">
        <button
          v-for="(s, i) in subregions"
          :key="i"
          class="sub-card"
          :class="{ active: activeIdx === i, [s.colorClass]: true }"
          @click="activeIdx = i"
        >
          <div class="sub-num">{{ i + 1 }}</div>
          <div class="sub-name">{{ s.name }}</div>
          <div class="sub-grape">{{ s.starGrape }}</div>
        </button>
      </div>
    </div>

    <!-- Active 子產區詳細 -->
    <div class="subregion-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <div>
          <h3>{{ active.icon }} {{ active.name }}</h3>
          <span class="detail-tagline">{{ active.tagline }}</span>
        </div>
        <div class="detail-stats">
          <div class="stat"><strong>{{ active.area }}</strong><span>面積</span></div>
          <div class="stat"><strong>{{ active.rainfall }}</strong><span>年雨量</span></div>
        </div>
      </div>
      <div class="detail-body">
        <div class="metrics-grid">
          <div class="metric"><div class="m-label">主導白品種</div><div class="m-value">{{ active.whiteGrape }}</div></div>
          <div class="metric"><div class="m-label">主導紅品種</div><div class="m-value">{{ active.redGrape }}</div></div>
          <div class="metric"><div class="m-label">土壤</div><div class="m-value">{{ active.soil }}</div></div>
          <div class="metric"><div class="m-label">海拔</div><div class="m-value">{{ active.altitude }}</div></div>
          <div class="metric"><div class="m-label">氣候</div><div class="m-value">{{ active.climate }}</div></div>
          <div class="metric"><div class="m-label">價格區間</div><div class="m-value">{{ active.price }}</div></div>
        </div>
        <div class="info-row style-row"><strong>🎯 風格特色：</strong>{{ active.style }}</div>
        <div class="info-row pairing-row"><strong>🍽️ 配餐：</strong>{{ active.pairing }}</div>
        <div class="info-row producer-row"><strong>🏛️ 代表酒莊：</strong>{{ active.producers }}</div>
      </div>
    </div>

    <!-- 五大白品種對比 -->
    <div class="grapes-section">
      <h3>🍇 Vinho Verde 五大白品種風格對比</h3>
      <div class="grape-cards">
        <div v-for="(g, i) in whiteGrapes" :key="i" class="grape-card" :style="{ borderTopColor: g.color }">
          <div class="grape-icon" :style="{ background: `linear-gradient(135deg, ${g.color}, ${g.colorEnd})` }">{{ g.icon }}</div>
          <h4>{{ g.name }}</h4>
          <p class="grape-region">📍 {{ g.region }}</p>
          <p class="grape-aroma"><strong>香氣：</strong>{{ g.aroma }}</p>
          <p class="grape-acid"><strong>酸度：</strong>{{ g.acid }}</p>
          <div class="grape-tag">{{ g.style }}</div>
        </div>
      </div>
    </div>

    <!-- 「Vinho Verde」迷思破解 -->
    <div class="myth-section">
      <h3>❓ 「Vinho Verde」三大迷思破解</h3>
      <div class="myth-list">
        <div class="myth-item">
          <div class="myth-q">迷思 1：「Verde = 綠色」？</div>
          <div class="myth-a">❌ 「Verde」在葡萄牙語意為「<strong>年輕新鮮</strong>」（young / fresh），與顏色無關。Vinho Verde 可以是白、紅、粉紅、氣泡。</div>
        </div>
        <div class="myth-item">
          <div class="myth-q">迷思 2：「都是低酒精微氣泡入門酒」？</div>
          <div class="myth-a">❌ 入門級確實是低酒精（9–11%）+ 輕微 CO₂，但 <strong>Monção/Melgaço 的 Alvarinho</strong> 可達 12.5–13.5% ABV、無氣泡、可陳年 10+ 年，價格與品質匹敵 Rías Baixas 頂級 Albariño。</div>
        </div>
        <div class="myth-item">
          <div class="myth-q">迷思 3：「Vinho Verde 紅酒不存在」？</div>
          <div class="myth-a">❌ 紅 Vinho Verde（用 <strong>Vinhão</strong> 釀造）是 Sousa/Baião 子產區的傳統酒款，色深如墨、酸度極高、帶野莓與藥草風味，是當地烤豬肉的靈魂搭檔（葡萄牙人稱「espadeira」）。</div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 一句話記住 9 子產區</h4>
      <p>北邊兩個 <strong>Monção / Melgaço</strong>（Alvarinho 王國）= 頂級單一品種；中部 <strong>Lima</strong> = Loureiro 花香典範；中部 <strong>Cávado / Ave / Amarante</strong> = 經典混調白；南東 <strong>Sousa / Baião</strong> = Vinhão 紅 Vinho Verde 重鎮；中部 <strong>Basto / Paiva</strong> = 內陸較溫暖、酒體較飽滿。盲飲時聞到「<strong>桃子 + 礦物 + 13% ABV</strong>」八成是 Monção/Melgaço Alvarinho。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const subregions = [
  {
    name: 'Monção & Melgaço',
    icon: '👑',
    color: '#1e6b3c',
    colorEnd: '#27ae60',
    colorClass: 'top-tier',
    starGrape: 'Alvarinho ⭐',
    tagline: 'Vinho Verde 的皇冠明珠',
    area: '~ 1,800 ha',
    rainfall: '1,200 mm（最少）',
    whiteGrape: 'Alvarinho 100%（單一品種典範）',
    redGrape: '少量 Pedral（罕見紅品種）',
    soil: '花崗岩 + 沖積土',
    altitude: '50–300 m',
    climate: '半大陸型，受 Minho 河谷遮蔽，比其他子產區更乾',
    price: '€10–€40（頂級 €60+）',
    style: '濃郁桃子、杏桃、礦物張力，酒精 12.5–13.5%（其他子產區 9–11%），可陳年 5–10 年。Soalheiro Reserva 與 Anselmo Mendes 為代表。',
    pairing: '生蠔、清蒸海鮮、台式白切雞、鮭魚刺身、米其林海鮮料理',
    producers: 'Soalheiro（先驅）、Anselmo Mendes、Quinta de Soalheiro、Adega de Monção、Quinta de Linhares'
  },
  {
    name: 'Lima',
    icon: '🌸',
    color: '#f4d03f',
    colorEnd: '#f7dc6f',
    colorClass: 'mid-tier',
    starGrape: 'Loureiro',
    tagline: 'Loureiro 花香典範子產區',
    area: '~ 5,500 ha',
    rainfall: '1,500 mm',
    whiteGrape: 'Loureiro 主導 + Trajadura + Arinto',
    redGrape: 'Vinhão',
    soil: '花崗岩、片岩、沖積黏土',
    altitude: '50–200 m',
    climate: '海洋型，Lima 河谷帶來涼爽空氣',
    price: '€7–€18',
    style: '花香（月桂葉之名）、蜜桃、檸檬、輕微氣泡，酒體輕盈（10–11.5% ABV），輕微甜感平衡高酸。',
    pairing: '海鮮、沙拉、清淡白肉、Sushi、Tapas',
    producers: 'Quinta do Ameal（Loureiro 大師）、Quinta da Lixa、Casa de Vila Verde'
  },
  {
    name: 'Cávado',
    icon: '🌊',
    color: '#3498db',
    colorEnd: '#5dade2',
    colorClass: 'mid-tier',
    starGrape: 'Loureiro / Trajadura',
    tagline: '經典混調白的中堅',
    area: '~ 4,200 ha',
    rainfall: '1,400 mm',
    whiteGrape: 'Loureiro + Trajadura + Pedernã (Arinto)',
    redGrape: 'Vinhão + Borraçal',
    soil: '花崗岩 + 片岩',
    altitude: '50–250 m',
    climate: '海洋型，溫和潮濕',
    price: '€6–€15',
    style: '經典 Vinho Verde 風格：清新柑橘、白花、輕氣泡、低酒精（9.5–11%），高 CP 入門首選。',
    pairing: '海鮮、開胃菜、夏日 BBQ、台式快炒',
    producers: 'Aveleda（最大廠牌）、Casal Garcia、Quinta da Aveleda'
  },
  {
    name: 'Ave',
    icon: '🍃',
    color: '#16a085',
    colorEnd: '#1abc9c',
    colorClass: 'mid-tier',
    starGrape: 'Loureiro / Arinto',
    tagline: '溫和海洋風格',
    area: '~ 3,800 ha',
    rainfall: '1,400 mm',
    whiteGrape: 'Loureiro + Trajadura + Arinto',
    redGrape: 'Vinhão',
    soil: '花崗岩、沖積土',
    altitude: '50–300 m',
    climate: '海洋型',
    price: '€6–€14',
    style: '與 Cávado 相近的清新風格，但口感稍圓潤，新鮮花果香為主。',
    pairing: '輕食、海鮮、亞洲料理',
    producers: 'Quinta do Tamariz、Adega Ponte da Barca'
  },
  {
    name: 'Amarante',
    icon: '🍷',
    color: '#9b59b6',
    colorEnd: '#bb8fce',
    colorClass: 'red-tier',
    starGrape: 'Avesso / Vinhão',
    tagline: '內陸 Avesso 飽滿白酒',
    area: '~ 2,500 ha',
    rainfall: '1,100 mm',
    whiteGrape: 'Avesso（特色品種）+ Loureiro',
    redGrape: 'Vinhão + Espadeiro',
    soil: '花崗岩',
    altitude: '100–400 m',
    climate: '較大陸型，比海岸子產區溫暖',
    price: '€7–€16',
    style: 'Avesso 釀出較飽滿、酒精 12% 以上的白酒，帶蜜瓜、烤梨、礦物。是 Vinho Verde 中最像傳統 still wine 的風格。',
    pairing: '燒烤白肉、雞肉、清淡牛排',
    producers: 'Quinta de Covela、Quinta do Ferro、Adega de Amarante'
  },
  {
    name: 'Basto',
    icon: '🏔️',
    color: '#e67e22',
    colorEnd: '#f39c12',
    colorClass: 'red-tier',
    starGrape: 'Azal / Vinhão',
    tagline: '內陸高地、酸度極高',
    area: '~ 1,500 ha',
    rainfall: '1,100 mm',
    whiteGrape: 'Azal 主導 + Trajadura',
    redGrape: 'Vinhão',
    soil: '花崗岩 + 片岩',
    altitude: '300–500 m（最高）',
    climate: '半大陸型，海拔最高、夏季溫差大',
    price: '€6–€12',
    style: 'Azal 葡萄產出極高酸度、青蘋果與檸檬皮的清瘦白酒，酒精偏低。',
    pairing: '酸辣料理、生蠔、Ceviche',
    producers: 'Adega de Basto、小型獨立酒莊'
  },
  {
    name: 'Sousa',
    icon: '🍇',
    color: '#7B1F2A',
    colorEnd: '#A8324A',
    colorClass: 'red-tier',
    starGrape: 'Vinhão',
    tagline: '紅 Vinho Verde 重鎮',
    area: '~ 2,200 ha',
    rainfall: '1,300 mm',
    whiteGrape: 'Loureiro + Avesso',
    redGrape: 'Vinhão 主導（紅酒比例最高）',
    soil: '花崗岩',
    altitude: '100–300 m',
    climate: '溫和、潮濕',
    price: '€6–€14',
    style: '深色紅 Vinho Verde（espadeira），墨黑色澤、極高酸度、帶野莓與藥草，是當地烤乳豬的靈魂。',
    pairing: '葡萄牙烤乳豬 (leitão)、烤章魚、燻肉、香腸',
    producers: 'Quinta da Raza、Casa de Cello'
  },
  {
    name: 'Baião',
    icon: '🌲',
    color: '#A0522D',
    colorEnd: '#CD853F',
    colorClass: 'red-tier',
    starGrape: 'Avesso / Vinhão',
    tagline: 'Douro 邊界飽滿風格',
    area: '~ 1,800 ha',
    rainfall: '1,000 mm（最少）',
    whiteGrape: 'Avesso 主導',
    redGrape: 'Vinhão',
    soil: '花崗岩 + 片岩（接近 Douro）',
    altitude: '200–500 m',
    climate: '較乾、較溫暖（接近 Douro）',
    price: '€7–€18',
    style: '酒體最飽滿的 Vinho Verde，Avesso 釀出蜜桃 + 蜂蠟風格，已接近 Douro 白酒。',
    pairing: '烤魚、奶油醬料海鮮、白肉',
    producers: 'Quinta do Crasto（Vinho Verde 線）、Quinta de Curvos'
  },
  {
    name: 'Paiva',
    icon: '🏞️',
    color: '#2874a6',
    colorEnd: '#3498db',
    colorClass: 'mid-tier',
    starGrape: 'Trajadura / Loureiro',
    tagline: '南境最小子產區',
    area: '~ 800 ha（最小）',
    rainfall: '1,200 mm',
    whiteGrape: 'Trajadura + Loureiro + Arinto',
    redGrape: 'Vinhão',
    soil: '花崗岩',
    altitude: '100–300 m',
    climate: '溫和',
    price: '€6–€12',
    style: '混調白為主，溫和清新風格，市場知名度較低但性價比高。',
    pairing: '日常海鮮、輕食',
    producers: '小型合作社為主'
  }
]

const active = computed(() => subregions[activeIdx.value])

const whiteGrapes = [
  {
    name: 'Alvarinho',
    icon: '👑',
    color: '#1e6b3c',
    colorEnd: '#27ae60',
    region: 'Monção & Melgaço（頂級）',
    aroma: '桃子、杏桃、檸檬、白花、礦物',
    acid: '極高 + 酒精飽滿（12.5–13.5%）',
    style: '頂級單一品種，可陳年'
  },
  {
    name: 'Loureiro',
    icon: '🌸',
    color: '#f4d03f',
    colorEnd: '#f7dc6f',
    region: 'Lima、Cávado、Ave',
    aroma: '月桂葉花香、蜜桃、檸檬、橘花',
    acid: '高 + 輕盈（10–11.5%）',
    style: '花香典範、易飲'
  },
  {
    name: 'Trajadura',
    icon: '🍐',
    color: '#16a085',
    colorEnd: '#1abc9c',
    region: '各子產區（混調主力）',
    aroma: '梨、蘋果、桃、淡花香',
    acid: '中等 + 圓潤質感',
    style: '混調軟化角色'
  },
  {
    name: 'Arinto (Pedernã)',
    icon: '🍋',
    color: '#3498db',
    colorEnd: '#5dade2',
    region: '各子產區（高酸補充）',
    aroma: '青檸、葡萄柚、燧石',
    acid: '極高 + 礦物張力',
    style: '提升結構與陳年潛力'
  },
  {
    name: 'Avesso',
    icon: '🍯',
    color: '#A0522D',
    colorEnd: '#CD853F',
    region: 'Amarante、Baião（內陸）',
    aroma: '蜜桃、烤梨、蜂蠟、堅果',
    acid: '中等 + 飽滿酒體（12%+）',
    style: '最像傳統 still wine'
  }
]
</script>

<style scoped>
.vinho-verde-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #1e6b3c;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 22px;
  line-height: 1.7;
}

.map-mock {
  background: linear-gradient(135deg, #e8f5e9, #f1f8f4);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 22px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.map-title {
  text-align: center;
  font-weight: 700;
  color: #1e6b3c;
  margin-bottom: 12px;
  font-size: 1rem;
}
.subregion-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.sub-card {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 10px 6px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.sub-card:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
.sub-card.active { border-color: #1e6b3c; box-shadow: 0 6px 14px rgba(30,107,60,0.2); }
.sub-card.top-tier { border-top: 4px solid #1e6b3c; }
.sub-card.mid-tier { border-top: 4px solid #f4d03f; }
.sub-card.red-tier { border-top: 4px solid #7B1F2A; }
.sub-num {
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 0.72rem;
  color: #888;
  font-weight: 700;
}
.sub-name { font-weight: 700; font-size: 0.85rem; text-align: center; line-height: 1.3; margin-top: 6px; }
.sub-grape { font-size: 0.72rem; color: #555; }

.subregion-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  margin-bottom: 22px;
}
.detail-header {
  padding: 14px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.detail-header h3 { margin: 0; font-size: 1.4rem; }
.detail-tagline { font-size: 0.88rem; opacity: 0.9; }
.detail-stats { display: flex; gap: 12px; }
.stat { text-align: right; }
.stat strong { display: block; font-size: 1rem; font-weight: 700; }
.stat span { font-size: 0.74rem; opacity: 0.85; }
.detail-body { padding: 16px 20px; }
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}
.metric {
  background: #fafafa;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
.m-label { font-size: 0.74rem; color: #888; font-weight: 700; margin-bottom: 4px; }
.m-value { font-size: 0.85rem; font-weight: 700; color: #2c3e50; line-height: 1.4; }
.info-row {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 8px;
}
.style-row { background: #e8f5e9; border-left: 3px solid #1e6b3c; }
.pairing-row { background: #fff8e6; border-left: 3px solid #d4af37; }
.producer-row { background: #ebf5fb; border-left: 3px solid #2874a6; }

.grapes-section { margin-bottom: 22px; }
.grapes-section h3 {
  color: #1e6b3c;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.grape-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
.grape-card {
  background: #fff;
  border-top: 4px solid #999;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.grape-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  margin: 0 auto 8px;
}
.grape-card h4 { margin: 0 0 4px; text-align: center; font-size: 0.95rem; color: #2c3e50; }
.grape-region { text-align: center; font-size: 0.75rem; color: #888; margin: 0 0 8px; }
.grape-aroma, .grape-acid { font-size: 0.78rem; line-height: 1.6; margin: 4px 0; }
.grape-aroma strong, .grape-acid strong { color: #555; }
.grape-tag {
  font-size: 0.78rem;
  font-weight: 700;
  background: #e8f5e9;
  color: #1e6b3c;
  padding: 4px 8px;
  border-radius: 6px;
  text-align: center;
  margin-top: 8px;
}

.myth-section { margin-bottom: 22px; }
.myth-section h3 {
  color: #1e6b3c;
  font-size: 1.2rem;
  margin: 0 0 14px;
}
.myth-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
.myth-item {
  background: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border-left: 4px solid #c0392b;
}
.myth-q {
  font-weight: 700;
  color: #c0392b;
  font-size: 0.95rem;
  margin-bottom: 6px;
}
.myth-a {
  font-size: 0.88rem;
  line-height: 1.7;
  color: #2c3e50;
}

.key-insight {
  background: linear-gradient(135deg, #1e6b3c, #16a085);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .subregion-grid { grid-template-columns: repeat(3, 1fr); }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
  .grape-cards { grid-template-columns: repeat(2, 1fr); }
  .detail-header { flex-direction: column; align-items: flex-start; }
  .detail-stats { width: 100%; justify-content: flex-start; }
  .stat { text-align: left; }
}
</style>
