<template>
  <div class="monopole-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '👑 布根地 Grand Cru Monopole 獨佔園' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
      <p v-else class="slide-desc">布根地 33 個 Grand Cru 中，僅有約 8 個由「單一酒莊獨家擁有」(Monopole)。這 6 個傳奇 Monopole 凝聚了布根地最稀有、最昂貴的風土。</p>
    </div>

    <!-- 概念說明 -->
    <div class="concept-bar">
      <div class="concept-item">
        <strong>📜 Monopole</strong>
        <span>一個 Climat（地塊）由單一酒莊 100% 擁有</span>
      </div>
      <div class="concept-item">
        <strong>🧩 對比 Clos de Vougeot</strong>
        <span>50.6 ha Grand Cru，但有 80+ 共同持有人</span>
      </div>
      <div class="concept-item">
        <strong>💎 稀有度</strong>
        <span>33 個 Grand Cru × 紅酒中僅 ~6-8 個 Monopole</span>
      </div>
    </div>

    <!-- Monopole tabs -->
    <div class="monopole-tabs">
      <button
        v-for="(m, i) in monopoles"
        :key="i"
        class="monopole-tab"
        :class="{ active: activeIdx === i }"
        :style="{ borderColor: activeIdx === i ? m.color : 'transparent' }"
        @click="activeIdx = i"
      >
        <span class="tab-name">{{ m.name }}</span>
        <span class="tab-meta">{{ m.size }} ha</span>
      </button>
    </div>

    <!-- Active monopole detail -->
    <div class="monopole-detail" :style="{ borderTopColor: active.color }">
      <div class="detail-header" :style="{ background: `linear-gradient(135deg, ${active.color}, ${active.colorEnd})` }">
        <div class="detail-title">
          <h3>{{ active.name }}</h3>
          <span class="detail-village">{{ active.village }} · {{ active.region }}</span>
        </div>
        <div class="detail-owner">
          <div class="owner-label">👑 獨家擁有</div>
          <div class="owner-name">{{ active.owner }}</div>
        </div>
      </div>
      <div class="detail-body">
        <div class="metrics-row">
          <div class="metric">
            <div class="metric-label">面積</div>
            <div class="metric-value">{{ active.size }} ha</div>
          </div>
          <div class="metric">
            <div class="metric-label">年產量</div>
            <div class="metric-value">{{ active.production }}</div>
          </div>
          <div class="metric">
            <div class="metric-label">品種</div>
            <div class="metric-value">{{ active.grape }}</div>
          </div>
          <div class="metric">
            <div class="metric-label">2020 均價</div>
            <div class="metric-value">{{ active.price }}</div>
          </div>
        </div>
        <div class="terroir-row">
          <strong>🪨 風土：</strong>{{ active.terroir }}
        </div>
        <div class="style-row">
          <strong>🎯 風格：</strong>{{ active.style }}
        </div>
        <div class="story-row">
          <strong>📖 故事：</strong>{{ active.story }}
        </div>
        <div v-if="active.note" class="note-row">
          <strong>💡 補充：</strong>{{ active.note }}
        </div>
      </div>
    </div>

    <!-- 規模對比視覺化 -->
    <div class="size-comparison">
      <h3>📐 面積規模對比（公頃）</h3>
      <div class="size-bars">
        <div v-for="(m, i) in monopoles" :key="'sb-' + i" class="size-bar-row" @click="activeIdx = i">
          <div class="bar-label">{{ m.name }}</div>
          <div class="bar-track">
            <div
              class="bar-fill"
              :class="{ active: activeIdx === i }"
              :style="{ width: (m.size / 9 * 100) + '%', background: `linear-gradient(90deg, ${m.color}, ${m.colorEnd})` }"
            >
              <span class="bar-value">{{ m.size }} ha</span>
            </div>
          </div>
        </div>
      </div>
      <p class="size-note">💡 <strong>La Romanée</strong> (0.85 ha) 是法國<strong>最小 AOC 等級</strong>；DRC 的 <strong>Romanée-Conti</strong> (1.81 ha) 年產僅約 5,000 瓶，每瓶副市場價超過 NT$60 萬。</p>
    </div>

    <div class="key-insight">
      <h4>💡 為何 Monopole 如此稀有？</h4>
      <p>1804 年拿破崙《民法典》強制<strong>遺產均分</strong>，使布根地 Grand Cru 在 200 年間被切割成數十至上百小地塊（Clos de Vougeot 從修道院單一擁有 → 80+ 持有人）。能保持 Monopole 完整的，要嘛是<strong>家族 200 年不分家</strong>（Lamarche / DRC），要嘛是<strong>近代資本買回所有持份</strong>（LVMH 收購 Clos des Lambrays、François Pinault 收購 Clos de Tart）。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeIdx = ref(0)

const defaultMonopoles = [
  {
    name: 'Romanée-Conti',
    village: 'Vosne-Romanée',
    region: 'Côte de Nuits',
    owner: 'Domaine de la Romanée-Conti (DRC)',
    size: 1.81,
    production: '~ 5,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 60 萬–200 萬+/瓶',
    terroir: '東南向緩坡、棕色石灰質黏土覆蓋於侏羅紀石灰岩之上、海拔 260–275 m。被視為布根地最完美的風土微氣候。',
    style: '極致細膩、玫瑰花瓣、東方香料、絲滑單寧、陳年潛力 50+ 年。',
    story: '12 世紀由 Saint-Vivant 修道院耕作，1631 年起由 Croonembourg 家族擁有，1760 年 Conti 親王（路易十五的堂弟）以天價購得，1869 年由 Duvault-Blochet 家族（DRC 前身）購入。',
    note: '世界最稀有單一酒款，全球分配名單嚴格管控，新進口商通常需「捆綁採購」DRC 的村莊級 Vosne-Romanée 才能取得 1-2 瓶 Romanée-Conti。',
    color: '#7B1F2A',
    colorEnd: '#A8324A'
  },
  {
    name: 'La Tâche',
    village: 'Vosne-Romanée',
    region: 'Côte de Nuits',
    owner: 'Domaine de la Romanée-Conti (DRC)',
    size: 6.06,
    production: '~ 21,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 15 萬–30 萬/瓶',
    terroir: '與 Romanée-Conti 鄰近的東南向斜坡，土壤略深、礫石較多。',
    style: '比 Romanée-Conti 更強勁、香料感濃郁、黑色果實與松露、結構深沉。',
    story: '1933 年 DRC 收購擴大版圖，將原本 1.43 ha 的 La Tâche 與相鄰的 Les Gaudichots 合併為現今 6.06 ha。',
    color: '#5D2A8E',
    colorEnd: '#7B3FA8'
  },
  {
    name: 'La Romanée',
    village: 'Vosne-Romanée',
    region: 'Côte de Nuits',
    owner: 'Comte Liger-Belair',
    size: 0.85,
    production: '~ 3,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 10 萬–25 萬/瓶',
    terroir: '緊鄰 Romanée-Conti 上方的小地塊，0.85 ha 是<strong>法國面積最小 AOC 等級</strong>。',
    style: '與 Romanée-Conti 風格相近但更挺拔、礦石感強、單寧細膩。',
    story: 'Liger-Belair 伯爵家族自 1815 年（拿破崙百日王朝後）持有，2002 年起由家族第七代 Louis-Michel Liger-Belair 親自釀造。',
    note: '在此之前由 Bouchard Père & Fils 釀造銷售（家族保留所有權但委託釀造）。',
    color: '#16886A',
    colorEnd: '#1FA682'
  },
  {
    name: 'La Grande Rue',
    village: 'Vosne-Romanée',
    region: 'Côte de Nuits',
    owner: 'Domaine François Lamarche',
    size: 1.65,
    production: '~ 7,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 4 萬–8 萬/瓶',
    terroir: '位於 Romanée-Conti 與 La Tâche 之間的長條地塊，1992 年從 Premier Cru 升格為 Grand Cru。',
    style: '比鄰居略樸實，紅果調、優雅平衡、近年品質提升明顯。',
    story: 'Lamarche 家族 1933 年購入，1992 年成功遊說 INAO（國家原產地命名管理局）升級為 Grand Cru，是<strong>20 世紀後期罕見升等案例</strong>。',
    color: '#D4A037',
    colorEnd: '#E8B952'
  },
  {
    name: 'Clos de Tart',
    village: 'Morey-Saint-Denis',
    region: 'Côte de Nuits',
    owner: 'Domaine Clos de Tart (Pinault 家族)',
    size: 7.53,
    production: '~ 30,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 4 萬–12 萬/瓶',
    terroir: '由 Bernardine 修女院於 1141 年種植，900 年完整保持<strong>未曾分割</strong>的 Climat（布根地最古老完整 Monopole）。',
    style: '北側 Chambolle 風格的優雅 + 南側 Gevrey 的力量，雙重個性結合。',
    story: '1141–1791 修女院 → 1791 法國大革命拍賣 → Marey-Monge 家族 → 1932 Mommessin 家族 → 2017 François Pinault（Kering 集團主席、Château Latour 業主）以 €2.6 億收購。',
    note: '葡萄藤行向獨特：不是傳統的「順著等高線」，而是「上下垂直」種植以利排水。',
    color: '#3498db',
    colorEnd: '#5dade2'
  },
  {
    name: 'Clos des Lambrays',
    village: 'Morey-Saint-Denis',
    region: 'Côte de Nuits',
    owner: 'Domaine des Lambrays (LVMH)',
    size: 8.84,
    production: '~ 35,000 瓶/年',
    grape: 'Pinot Noir 100%',
    price: 'NT$ 2.5 萬–6 萬/瓶',
    terroir: '布根地最大 Monopole 之一，西南向斜坡，土壤多元（淺層石灰岩 + 深層黏土）。',
    style: '優雅花香、紅醋栗、薄荷、單寧細緻、近年品質達頂級水準。',
    story: '14 世紀屬 Citeaux 修道院，1981 年才獲得 Grand Cru 等級（之前曾因品質下滑被降至 Premier Cru），1979 年起 Saier 家族重建品質，2014 年 LVMH（Bernard Arnault）收購並延請 Boris Champy / Jacques Devauges 釀造。',
    color: '#c0392b',
    colorEnd: '#e74c3c'
  }
]

const monopoles = computed(() => {
  if (Array.isArray(props.slide?.monopoles) && props.slide.monopoles.length) return props.slide.monopoles
  return defaultMonopoles
})

const active = computed(() => monopoles.value[activeIdx.value] || monopoles.value[0])
</script>

<style scoped>
.monopole-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #5D2A8E;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 18px;
  line-height: 1.7;
}

.concept-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.concept-item {
  background: #fff;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.concept-item strong {
  display: block;
  color: #5D2A8E;
  margin-bottom: 4px;
  font-size: 0.95rem;
}
.concept-item span {
  font-size: 0.82rem;
  color: #555;
  line-height: 1.5;
}

.monopole-tabs {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 6px;
  margin-bottom: 16px;
}
.monopole-tab {
  background: #fff;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 10px 4px;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.monopole-tab:hover { transform: translateY(-2px); }
.monopole-tab.active { box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.tab-name { font-weight: 700; font-size: 0.82rem; line-height: 1.3; text-align: center; }
.tab-meta { font-size: 0.7rem; color: #888; }

.monopole-detail {
  background: #fff;
  border-radius: 12px;
  border-top: 5px solid #999;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  margin-bottom: 24px;
}
.detail-header {
  padding: 16px 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.detail-title h3 { margin: 0; font-size: 1.4rem; }
.detail-village { font-size: 0.88rem; opacity: 0.9; }
.detail-owner { text-align: right; }
.owner-label { font-size: 0.78rem; opacity: 0.85; }
.owner-name { font-weight: 700; font-size: 0.95rem; }
.detail-body { padding: 16px 20px; }
.metrics-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}
.metric {
  background: #fafafa;
  border-radius: 8px;
  padding: 10px 8px;
  text-align: center;
}
.metric-label { font-size: 0.75rem; color: #888; margin-bottom: 4px; font-weight: 700; }
.metric-value { font-size: 0.9rem; font-weight: 700; color: #2c3e50; }
.terroir-row,
.style-row,
.story-row,
.note-row {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.7;
  margin-top: 8px;
}
.terroir-row { background: #f0f5ee; border-left: 3px solid #16a085; }
.style-row { background: #fff8e6; border-left: 3px solid #d4af37; }
.story-row { background: #f4ecf7; border-left: 3px solid #5D2A8E; }
.note-row { background: #fef5e7; border-left: 3px solid #e67e22; }

.size-comparison {
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  margin-bottom: 20px;
}
.size-comparison h3 {
  margin: 0 0 12px;
  color: #5D2A8E;
  font-size: 1.1rem;
}
.size-bars { display: flex; flex-direction: column; gap: 8px; }
.size-bar-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 12px;
  align-items: center;
  cursor: pointer;
}
.bar-label { font-size: 0.88rem; font-weight: 600; }
.bar-track {
  background: #f0f0f0;
  border-radius: 16px;
  height: 28px;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  border-radius: 16px;
  transition: opacity 0.25s;
  opacity: 0.7;
}
.bar-fill.active { opacity: 1; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
.bar-value { color: #fff; font-weight: 700; font-size: 0.82rem; text-shadow: 0 1px 2px rgba(0,0,0,0.3); }
.size-note {
  margin: 12px 0 0;
  padding: 10px 12px;
  background: #fff8e6;
  border-radius: 8px;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #6B4500;
}

.key-insight {
  background: linear-gradient(135deg, #5D2A8E, #7B1F2A);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .concept-bar { grid-template-columns: 1fr; }
  .monopole-tabs { grid-template-columns: repeat(2, 1fr); }
  .metrics-row { grid-template-columns: repeat(2, 1fr); }
  .detail-header { flex-direction: column; align-items: flex-start; }
  .detail-owner { text-align: left; }
  .size-bar-row { grid-template-columns: 110px 1fr; }
}
</style>
