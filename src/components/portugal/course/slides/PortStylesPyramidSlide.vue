<template>
  <div class="port-styles-slide">
    <div class="slide-header">
      <h2>{{ slide.title || 'Port 波特酒風格金字塔' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
    </div>

    <!-- 兩大派別切換 -->
    <div class="family-tabs">
      <button
        v-for="fam in families"
        :key="fam.key"
        class="family-tab"
        :class="{ active: activeFamily === fam.key }"
        :style="{ borderColor: activeFamily === fam.key ? fam.color : 'transparent', color: activeFamily === fam.key ? fam.color : '#6b4226' }"
        @click="activeFamily = fam.key"
      >
        <span class="fam-icon">{{ fam.icon }}</span>
        <span>
          <strong>{{ fam.name }}</strong>
          <small>{{ fam.subtitle }}</small>
        </span>
      </button>
    </div>

    <div class="content-wrapper">
      <!-- 風格列表 -->
      <div class="styles-grid">
        <div
          v-for="style in filteredStyles"
          :key="style.key"
          class="style-card"
          :class="{ active: activeKey === style.key }"
          :style="{ borderTopColor: style.color, '--c': style.color }"
          @click="activeKey = style.key"
        >
          <div class="style-icon">{{ style.icon }}</div>
          <h3>{{ style.name }}</h3>
          <span class="style-tagline">{{ style.tagline }}</span>
          <div class="style-meta">
            <span class="meta-pill">{{ style.aging }}</span>
            <span class="meta-pill alt">{{ style.color_text }}</span>
          </div>
        </div>
      </div>

      <!-- 詳情 -->
      <div class="detail-card" v-if="activeStyle" :style="{ borderColor: activeStyle.color }">
        <div class="detail-header" :style="{ backgroundColor: activeStyle.color }">
          <div>
            <h3>{{ activeStyle.icon }} {{ activeStyle.name }}</h3>
            <span class="detail-tagline">{{ activeStyle.tagline }}</span>
          </div>
          <div class="detail-quick">
            <span><strong>陳年</strong> {{ activeStyle.aging }}</span>
            <span><strong>飲用溫度</strong> {{ activeStyle.servingTemp }}</span>
          </div>
        </div>

        <div class="detail-body">
          <div class="detail-grid">
            <div class="info-block">
              <h4>📐 釀造規範</h4>
              <ul>
                <li v-for="(rule, i) in activeStyle.rules" :key="i">{{ rule }}</li>
              </ul>
            </div>
            <div class="info-block">
              <h4>👃 香氣與口感</h4>
              <p>{{ activeStyle.profile }}</p>
              <div class="aroma-chips">
                <span
                  v-for="a in activeStyle.aromas"
                  :key="a"
                  class="chip"
                  :style="{ borderColor: activeStyle.color, backgroundColor: activeStyle.color + '22' }"
                >{{ a }}</span>
              </div>
            </div>
            <div class="info-block">
              <h4>🍽️ 餐酒搭配</h4>
              <ul>
                <li v-for="(p, i) in activeStyle.pairings" :key="i">{{ p }}</li>
              </ul>
            </div>
            <div class="info-block">
              <h4>💰 價格 / 飲用建議</h4>
              <p class="price">{{ activeStyle.priceRange }}</p>
              <p class="advice">{{ activeStyle.advice }}</p>
            </div>
            <div class="info-block full-width">
              <h4>🌟 經典酒莊代表</h4>
              <div class="example-grid">
                <div v-for="ex in activeStyle.examples" :key="ex.name" class="ex-card">
                  <strong>{{ ex.name }}</strong>
                  <span>{{ ex.note }}</span>
                </div>
              </div>
            </div>
            <div class="info-block full-width" v-if="activeStyle.keyFact">
              <h4>💡 重點知識</h4>
              <p class="key-fact">{{ activeStyle.keyFact }}</p>
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

const families = [
  { key: 'all', name: '全部風格', subtitle: '完整 Port 譜系', icon: '🍷', color: '#6b4226' },
  { key: 'wood', name: '橡木桶陳年派', subtitle: 'Tawny / Colheita 系列——氧化陳年', icon: '🛢️', color: '#B8860B' },
  { key: 'bottle', name: '瓶中陳年派', subtitle: 'Ruby / LBV / Vintage 系列——還原陳年', icon: '🍾', color: '#7B1F2A' }
]

const defaultStyles = [
  // === Bottle-aged (Ruby family) ===
  {
    key: 'ruby',
    name: 'Ruby',
    icon: '💎',
    color: '#C0392B',
    family: 'bottle',
    color_text: '深寶石紅',
    tagline: '入門款——年輕奔放的紅色果香',
    aging: '2-3 年（多在大型橡木 vat）',
    servingTemp: '16-18°C',
    rules: [
      '基礎 Port，多年份混合',
      '多在大型 vat（balseiro）陳年 2-3 年',
      '裝瓶後即飲，無瓶陳潛力',
      '可長期保存於開瓶後（4-6 週）'
    ],
    profile: '深寶石紅、年輕果香奔放、單寧細緻、甜度高、酒精 19-22%。是最入門、最易飲的 Port 風格。',
    aromas: ['黑莓', '紅櫻桃', '李子', '巧克力', '紫羅蘭'],
    pairings: ['黑巧克力（70% 以上）', '藍紋乳酪', '紅莓塔', '簡單甜點'],
    priceRange: '€8 – €15',
    advice: '入門認識 Port 的最佳起點；開瓶後 4-6 週內飲用完畢。',
    examples: [
      { name: 'Graham\'s Six Grapes', note: '進階 Ruby 標竿' },
      { name: 'Fonseca Bin No. 27', note: '經典商業 Ruby' },
      { name: 'Taylor\'s Select Reserve', note: '優質 Ruby Reserve' }
    ]
  },
  {
    key: 'lbv',
    name: 'LBV（Late Bottled Vintage）',
    icon: '🍾',
    color: '#8B0000',
    family: 'bottle',
    color_text: '深紫紅',
    tagline: '單一年份遲裝瓶——Vintage 的平價替身',
    aging: '4-6 年木桶 + 部分瓶陳',
    servingTemp: '16-18°C',
    rules: [
      '單一年份（須在採收後第 4-6 年裝瓶）',
      '在木桶陳年 4-6 年（比 Vintage 久）',
      '可分「過濾 LBV」（即飲）與「未過濾 LBV」（須陳年、有沉澱、需醒酒）',
      '未過濾版本酒標常標示「Unfiltered」或「Bottle Matured」'
    ],
    profile: '深紫紅、果香集中、單寧較柔軟（因桶陳更久）、複雜度介於 Ruby Reserve 與 Vintage 之間。',
    aromas: ['黑莓', '黑李', '可可', '皮革', '香料', '咖啡'],
    pairings: ['烤肉', '陳年硬乳酪', '巧克力慕斯', '無花果類甜點'],
    priceRange: '€20 – €40',
    advice: '過濾 LBV 即開即飲；未過濾 LBV 可瓶陳 5-15 年。性價比最高的單一年份 Port。',
    examples: [
      { name: 'Niepoort LBV', note: '未過濾派經典' },
      { name: 'Warre\'s Bottle Matured LBV', note: '傳統未過濾風格' },
      { name: 'Ramos Pinto LBV', note: '果香奔放派' }
    ],
    keyFact: 'LBV 自 1970 年代開始流行——當時 Vintage Port 價格飆升，酒莊推出 LBV 作為平價替代品。Niepoort 與 Warre\'s 維持「未過濾傳統 LBV」風格，需如 Vintage 般醒酒。'
  },
  {
    key: 'vintage',
    name: 'Vintage Port',
    icon: '👑',
    color: '#4A0E1F',
    family: 'bottle',
    color_text: '極深寶石紅 → 老化後變磚紅',
    tagline: '頂級 Port——僅在優異年份 declare',
    aging: '2 年木桶 + 數十年瓶陳',
    servingTemp: '16-18°C（醒酒 2-4 小時）',
    rules: [
      '單一卓越年份（年份須由酒莊「declare」）',
      '只在木桶陳年 2 年後裝瓶',
      '主要陳年發生在瓶中（需 10-50+ 年）',
      '未過濾——需直立保存後醒酒、過濾沉澱',
      '一般而言每 10 年僅 declare 約 3 個年份'
    ],
    profile: '年輕時極深寶石紅、單寧厚重、果香集中需要時間化解；陳年後轉為磚紅色、皮革、菸草、無花果乾的優雅複雜度。',
    aromas: ['黑莓乾', '無花果', '皮革', '菸草', '雪松', '可可', '甘草', '森林地表'],
    pairings: ['Stilton 藍紋乳酪（經典搭配）', '黑巧克力', '陳年硬乳酪', '飯後甜點搭配'],
    priceRange: '€60 – €1,000+',
    advice: '頂級年份可陳年 30-50 年。需直立保存後醒酒 2-4 小時、過濾沉澱。開瓶後可飲用 2-3 天（年輕款）或 1 天（老年份）。',
    examples: [
      { name: 'Taylor\'s Vintage Port', note: '收藏家首選' },
      { name: 'Quinta do Noval Nacional', note: '最稀有，未嫁接古藤' },
      { name: 'Graham\'s Vintage', note: '酒體飽滿派' },
      { name: 'Fonseca Vintage', note: '優雅平衡派' },
      { name: 'Niepoort Vintage', note: '現代派精緻' }
    ],
    keyFact: '近年「declared vintages」：1994、1997、2000、2003、2007、2011、2016、2017、2018、2019、2022。Quinta do Noval Nacional（1931 年版本）是世界最昂貴 Port 之一，單瓶可達 €15,000+。'
  },
  {
    key: 'single-quinta',
    name: 'Single Quinta Vintage',
    icon: '🏰',
    color: '#7B1F2A',
    family: 'bottle',
    color_text: '深寶石紅',
    tagline: '單一葡萄園 Vintage——非 declared 年份的精品',
    aging: '2 年木桶 + 10-20+ 年瓶陳',
    servingTemp: '16-18°C',
    rules: [
      '單一葡萄園（quinta）、單一年份',
      '通常在「未 declare」的中等優異年份釀造',
      '釀造規範同 Vintage Port',
      '比 Vintage Port 早 10-15 年達飲用顛峰'
    ],
    profile: '展現特定 quinta 的獨特風土；比一般 Vintage 早熟、果香較奔放、複雜度略低但更易親近。',
    aromas: ['黑莓', '香料', '可可', '皮革', '紫羅蘭'],
    pairings: ['烤野味', '藍紋乳酪', '黑巧克力'],
    priceRange: '€40 – €150',
    advice: '中價位精品 Port；可陳年 15-25 年，比 Vintage 早飲用。',
    examples: [
      { name: 'Quinta de Vargellas（Taylor\'s）', note: '經典單一葡萄園' },
      { name: 'Quinta dos Malvedos（Graham\'s）', note: 'Symington 旗艦' },
      { name: 'Quinta do Vesúvio', note: 'Symington 獨立 quinta' }
    ]
  },
  // === Wood-aged (Tawny family) ===
  {
    key: 'tawny',
    name: 'Tawny',
    icon: '🍯',
    color: '#C8854A',
    family: 'wood',
    color_text: '茶褐色',
    tagline: '基礎茶色——木桶陳年的入門款',
    aging: '3 年小型木桶（pipe，550L）',
    servingTemp: '12-14°C（微涼飲用）',
    rules: [
      '基礎 Tawny，多年份混合',
      '在 550 升小型木桶（pipe）陳年至少 3 年',
      '色澤從紅寶石轉為茶褐色',
      '可開瓶後保存數週'
    ],
    profile: '淺茶色、堅果與焦糖香、酒體較輕、單寧已融化、酸度較高。比 Ruby 更溫和易飲。',
    aromas: ['焦糖', '杏仁', '無花果', '蜂蜜', '橙皮'],
    pairings: ['杏仁糕點', '焦糖布丁', '中等濃度乳酪', '甜點配茶'],
    priceRange: '€10 – €18',
    advice: '微涼飲用（12-14°C）為佳；夏日 Port 入門首選。',
    examples: [
      { name: 'Sandeman Tawny', note: '商業 Tawny 經典' },
      { name: 'Ramos Pinto Tawny', note: '優質基礎款' }
    ]
  },
  {
    key: 'tawny-aged',
    name: 'Tawny with Indication of Age（10/20/30/40 年）',
    icon: '🌟',
    color: '#B8860B',
    family: 'wood',
    color_text: '琥珀色 → 深金黃',
    tagline: '陳年 Tawny——平均年齡指標的精品',
    aging: '10、20、30、40 年（平均年齡）',
    servingTemp: '12-14°C（10、20 年）；14-16°C（30、40 年）',
    rules: [
      '酒標數字代表「平均」年齡（多年份混合）',
      '10 年 Tawny = 平均混合年齡 10 年',
      '所有酒須在木桶陳年（不能瓶陳替代）',
      '裝瓶後立即上市，無瓶陳潛力',
      '酒標須標示裝瓶年份（bottling date）'
    ],
    profile: '色澤從琥珀（10 年）漸變為深金黃（40 年）；堅果、焦糖、無花果、橙皮、咖啡、巧克力的層次隨年齡加深。酸度仍鮮明、酒體優雅。',
    aromas: ['杏仁', '榛果', '焦糖', '橙皮', '無花果乾', '咖啡', '可可', '楓糖'],
    pairings: ['焦糖類甜點', '陳年硬乳酪', '堅果塔', '黑巧克力（30/40 年）', 'crème brûlée（經典）'],
    priceRange: '10年 €20-30；20年 €40-70；30年 €100-180；40年 €180-400+',
    advice: '是 Port 中最複雜優雅的風格；20 年是性價比最佳點。開瓶後可保存 2-3 個月。',
    examples: [
      { name: 'Taylor\'s 20-Year-Old Tawny', note: '20 年 Tawny 標竿' },
      { name: 'Niepoort 20 Anos', note: '優雅派' },
      { name: 'Graham\'s 40-Year-Old', note: '頂級陳年款' },
      { name: 'Ferreira Duque de Bragança 20 Anos', note: '葡萄牙人最愛' }
    ],
    keyFact: '酒標標示的年齡是「平均」而非「最低」。例如 20 年 Tawny 可能含有 10 年到 40 年的 Port 混合，平均約 20 年。Port and Douro Wines Institute（IVDP）會品評核可。'
  },
  {
    key: 'colheita',
    name: 'Colheita',
    icon: '📅',
    color: '#A0522D',
    family: 'wood',
    color_text: '琥珀色',
    tagline: '單一年份 Tawny——精品收藏選項',
    aging: '至少 7 年木桶（許多達 30-50+ 年）',
    servingTemp: '14-16°C',
    rules: [
      '單一年份 Tawny',
      '在木桶陳年至少 7 年（多數遠超此）',
      '酒標須標示採收年份與裝瓶年份',
      '裝瓶後即飲，無瓶陳潛力'
    ],
    profile: '比 Aged Tawny 更具年份特性；展現特定年份的獨特風格。陳年 30+ 年的 Colheita 展現驚人複雜度——焦糖、咖啡、楓糖、無花果乾、橙皮的層次。',
    aromas: ['焦糖', '楓糖', '咖啡', '橙皮', '無花果乾', '香料', '蜂蜜'],
    pairings: ['焦糖布丁', '陳年硬乳酪', '巧克力與堅果甜點', '吸雪茄'],
    priceRange: '€30 – €500+（取決於年份）',
    advice: '生日年禮物首選；珍藏年份具收藏價值。',
    examples: [
      { name: 'Niepoort Colheita 1970', note: '經典老年份' },
      { name: 'Krohn Colheita', note: '專營 Colheita 的酒莊' },
      { name: 'Quinta do Noval Colheita', note: '頂級單一葡萄園版本' }
    ],
    keyFact: 'Colheita 是 Port 中唯一同時擁有「單一年份」與「木桶長期陳年」雙重特性的風格。葡萄牙文「Colheita」意為「採收」。'
  },
  // === Other ===
  {
    key: 'white',
    name: 'White Port',
    icon: '🤍',
    color: '#D4B886',
    family: 'all',
    color_text: '淡金黃 → 深琥珀',
    tagline: '白葡萄 Port——開胃酒新寵',
    aging: '從年輕乾型到 10/20/30/40 年陳年版本都有',
    servingTemp: '8-10°C（年輕型）；12-14°C（陳年）',
    rules: [
      '使用白葡萄品種（Malvasia Fina、Viosinho、Gouveio、Rabigato 等）',
      '釀造方法同紅 Port',
      '從 dry / off-dry / sweet / extra-dry 各甜度版本',
      '可標示陳年年齡（10 年以上）'
    ],
    profile: '年輕版：金黃色、桃杏柑橘香、常加 tonic 水做雞尾酒；陳年版：琥珀色、堅果與蜂蜜深度。',
    aromas: ['桃子', '杏桃', '柑橘', '蜂蜜', '堅果', '杏仁'],
    pairings: ['橄欖、堅果、火腿等開胃菜', '海鮮 Tapas', '鵝肝（陳年版）'],
    priceRange: '€10 – €100+',
    advice: '近年國際酒吧用 White Port + Tonic 做開胃雞尾酒（葡萄牙當地稱「Portónico」）。',
    examples: [
      { name: 'Niepoort Dry White', note: '傳統乾型' },
      { name: 'Quinta de Santa Eufémia', note: '雞尾酒首選' },
      { name: 'Andresen 20-Year-Old White', note: '陳年精品' }
    ]
  }
]

const styles = computed(() => props.slide.styles || defaultStyles)
const activeFamily = ref('all')
const filteredStyles = computed(() =>
  activeFamily.value === 'all'
    ? styles.value
    : styles.value.filter((s) => s.family === activeFamily.value || s.family === 'all')
)
const activeKey = ref(props.slide.defaultKey || 'vintage')
const activeStyle = computed(() => styles.value.find((s) => s.key === activeKey.value) || styles.value[0])
</script>

<style scoped>
.port-styles-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(135deg, #f9f3ec 0%, #f1dcc4 100%);
  color: #3a2415;
  overflow-y: auto;
}

.slide-header h2 {
  font-size: 1.8rem;
  margin: 0 0 0.4rem 0;
  color: #7B1F2A;
  font-weight: 700;
}

.slide-desc {
  color: #6b4226;
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
}

.family-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.family-tab {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #fff;
  border: 2px solid transparent;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.family-tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.15);
}

.family-tab.active {
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
}

.fam-icon {
  font-size: 1.5rem;
}

.family-tab strong {
  display: block;
  font-size: 0.92rem;
}

.family-tab small {
  display: block;
  font-size: 0.74rem;
  opacity: 0.75;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1rem;
  flex: 1;
  min-height: 0;
}

.styles-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  padding-right: 4px;
}

.style-card {
  background: #fff;
  border: 2px solid transparent;
  border-top: 4px solid;
  border-radius: 8px;
  padding: 0.7rem 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(123, 31, 42, 0.08);
}

.style-card:hover {
  transform: translateX(3px);
  box-shadow: 0 4px 10px rgba(123, 31, 42, 0.18);
}

.style-card.active {
  border-color: var(--c);
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.25);
  background: linear-gradient(135deg, #fff 0%, #fdf6ec 100%);
}

.style-icon {
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 0.4rem;
}

.style-card h3 {
  display: inline;
  margin: 0;
  font-size: 0.95rem;
  color: #3a2415;
}

.style-tagline {
  display: block;
  font-size: 0.78rem;
  color: #6b4226;
  margin-top: 0.2rem;
  font-style: italic;
}

.style-meta {
  display: flex;
  gap: 0.3rem;
  margin-top: 0.4rem;
  flex-wrap: wrap;
}

.meta-pill {
  background: var(--c);
  color: #fff;
  padding: 0.15rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
}

.meta-pill.alt {
  background: #fff;
  color: var(--c);
  border: 1px solid var(--c);
}

.detail-card {
  background: #fff;
  border-radius: 12px;
  border: 2px solid;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(123, 31, 42, 0.12);
  display: flex;
  flex-direction: column;
}

.detail-header {
  padding: 1rem 1.4rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.detail-header h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.3rem;
}

.detail-tagline {
  font-size: 0.85rem;
  opacity: 0.95;
  font-style: italic;
}

.detail-quick {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.78rem;
  text-align: right;
}

.detail-quick strong {
  opacity: 0.85;
  margin-right: 0.3rem;
}

.detail-body {
  padding: 1.2rem 1.4rem;
  overflow-y: auto;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-block.full-width {
  grid-column: 1 / -1;
}

.info-block h4 {
  margin: 0 0 0.4rem 0;
  font-size: 0.92rem;
  color: #7B1F2A;
}

.info-block p {
  margin: 0;
  color: #4a3826;
  line-height: 1.6;
  font-size: 0.88rem;
}

.info-block ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #4a3826;
  font-size: 0.86rem;
  line-height: 1.6;
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
  color: #4a3826;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.6rem;
}

.ex-card {
  background: #fdf6ec;
  border-left: 3px solid #B8860B;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.ex-card strong {
  color: #7B1F2A;
  font-size: 0.88rem;
}

.ex-card span {
  color: #6b4226;
  font-size: 0.78rem;
  margin-top: 0.2rem;
}

.price {
  font-weight: 700;
  color: #B8860B !important;
  margin-bottom: 0.3rem !important;
}

.advice {
  font-size: 0.83rem !important;
  color: #6b4226 !important;
}

.key-fact {
  background: linear-gradient(135deg, #fdf6ec 0%, #f1dcc4 100%);
  padding: 0.7rem 0.9rem;
  border-left: 3px solid #B8860B;
  border-radius: 4px;
  font-size: 0.85rem !important;
  color: #4a3826 !important;
}

@media (max-width: 900px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .port-styles-slide {
    padding: 1rem;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .detail-quick {
    text-align: left;
  }
}
</style>
