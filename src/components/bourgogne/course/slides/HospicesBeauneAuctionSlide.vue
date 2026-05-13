<template>
  <div class="hospices-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🕯️ Hospices de Beaune 慈善拍賣' }}</h2>
      <p v-if="slide.description" class="slide-desc">{{ slide.description }}</p>
      <p v-else class="slide-desc">1443 年由 Nicolas Rolin 創立的濟貧醫院，以 60 公頃葡萄園產出的酒款進行 580 年連續慈善拍賣 — 全球年份品質風向球。</p>
    </div>

    <!-- 三大切換頁 -->
    <div class="hospices-tabs">
      <button
        v-for="(t, i) in tabs"
        :key="i"
        class="h-tab"
        :class="{ active: activeTab === i }"
        @click="activeTab = i"
      >
        {{ t.icon }} {{ t.label }}
      </button>
    </div>

    <!-- Tab 1: 歷史與起源 -->
    <div v-if="activeTab === 0" class="tab-pane history-pane">
      <div class="origin-card">
        <div class="origin-header">
          <h3>🏛️ Hôtel-Dieu — 1443 年的濟貧傑作</h3>
        </div>
        <div class="origin-body">
          <p>1443 年百年戰爭末期，<strong>Nicolas Rolin</strong>（勃艮第公爵 Philippe le Bon 的大法官）與妻子 Guigone de Salins 創立 <strong>Hôtel-Dieu de Beaune</strong> 作為免費濟貧醫院。為了長期維持運作，他們捐贈葡萄園作為「永續慈善資產」。</p>
          <p>多個世紀以來，當地貴族、布爾喬亞、酒農持續將自己的葡萄園遺贈給醫院，使 Hospices 葡萄園累積到今天的<strong>約 60 公頃</strong>，其中包含<strong>50% 以上 Premier Cru / Grand Cru</strong> 等級。</p>
        </div>
      </div>

      <h3 class="section-h">📜 歷史時間軸</h3>
      <div class="timeline">
        <div v-for="(ev, i) in timeline" :key="i" class="timeline-item">
          <div class="t-year">{{ ev.year }}</div>
          <div class="t-content" :style="{ borderLeftColor: ev.color }">
            <div class="t-title">{{ ev.title }}</div>
            <div class="t-desc">{{ ev.desc }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 2: 知名 Cuvée -->
    <div v-if="activeTab === 1" class="tab-pane cuvees-pane">
      <p class="pane-intro">Hospices 不以「Climat（地塊）」命名，而以<strong>歷史捐贈者</strong>命名 50 個 Cuvée。每個 Cuvée 可能來自<strong>多個 Climat 混調</strong>，由 Hospices 自有酒窖總管 Ludivine Griveau 統一釀造。</p>

      <div class="cuvee-grid">
        <div v-for="(c, i) in cuvees" :key="i" class="cuvee-card" :style="{ borderTopColor: c.color }">
          <div class="cuvee-header">
            <div class="cuvee-tier" :style="{ background: c.color }">{{ c.tier }}</div>
            <div class="cuvee-name">{{ c.name }}</div>
          </div>
          <div class="cuvee-body">
            <div class="cuvee-row"><strong>名稱由來：</strong>{{ c.donor }}</div>
            <div class="cuvee-row"><strong>產區：</strong>{{ c.appellation }}</div>
            <div class="cuvee-row"><strong>桶數：</strong>{{ c.barrels }}</div>
            <div class="cuvee-row"><strong>2023 拍賣均價：</strong><span class="cuvee-price">{{ c.price }}</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 3: 拍賣流程 -->
    <div v-if="activeTab === 2" class="tab-pane auction-pane">
      <div class="auction-meta">
        <div class="meta-item">
          <div class="meta-label">📅 時間</div>
          <div class="meta-value">每年 11 月第三個週日</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">📍 地點</div>
          <div class="meta-value">Beaune 中央廣場 / Marché Couvert</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">🤝 主辦</div>
          <div class="meta-value">Christie's（2005 年起接手 Drouot）</div>
        </div>
        <div class="meta-item">
          <div class="meta-label">🏆 規模</div>
          <div class="meta-value">~600-800 桶 / 年（每桶 228 升 ≈ 300 瓶）</div>
        </div>
      </div>

      <h3 class="section-h">🕯️ 蠟燭拍賣（Aux Enchères à la Chandelle）</h3>
      <div class="candle-flow">
        <div v-for="(s, i) in candleSteps" :key="i" class="candle-step">
          <div class="step-num">{{ i + 1 }}</div>
          <div class="step-content">
            <div class="step-title">{{ s.title }}</div>
            <div class="step-desc">{{ s.desc }}</div>
          </div>
        </div>
      </div>

      <h3 class="section-h">📈 近年拍賣總額</h3>
      <div class="auction-chart">
        <div v-for="(y, i) in yearTotals" :key="i" class="year-row">
          <div class="year-label">{{ y.year }}</div>
          <div class="year-bar-track">
            <div
              class="year-bar"
              :style="{ width: (y.amount / 35) * 100 + '%', background: y.color }"
            >
              <span>€{{ y.amount }}M</span>
            </div>
          </div>
          <div class="year-note">{{ y.note }}</div>
        </div>
      </div>
    </div>

    <div class="key-insight">
      <h4>💡 為何這場拍賣如此重要？</h4>
      <p>① <strong>慈善溢價</strong>：拍賣所得 100% 用於 Hôtel-Dieu 醫院經營，買家通常付出市價 1.5-3 倍。② <strong>年份指標</strong>：Hospices 拍賣價反映業界對「當年布根地年份品質」的集體判斷，被媒體廣泛報導為風向球。③ <strong>桶買 + 自選熟成</strong>：得標者買的是「未瓶裝橡木桶」，可指定布根地任何 négociant 完成 12-24 個月熟成與裝瓶。</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  slide: { type: Object, default: () => ({}) }
})

const activeTab = ref(0)

const tabs = [
  { icon: '🏛️', label: '歷史起源' },
  { icon: '🍷', label: '知名 Cuvée' },
  { icon: '🕯️', label: '拍賣流程' }
]

const timeline = [
  { year: '1443', title: 'Hôtel-Dieu 創立', desc: 'Nicolas Rolin 與妻子 Guigone de Salins 在 Beaune 建立濟貧醫院，捐贈最早一批葡萄園。', color: '#5D2A8E' },
  { year: '1457', title: '首批捐贈葡萄園', desc: 'Guillemette Le Verrier 捐贈 Beaune Cuvée Guigone de Salins 葡萄園，成為最古老 Cuvée 之一。', color: '#7B3FA8' },
  { year: '1859', title: '首次公開拍賣', desc: 'Hospices 首度將自釀葡萄酒以公開拍賣形式出售，籌資維持醫院運作。', color: '#16a085' },
  { year: '1924', title: 'Drouot 主導', desc: '巴黎 Drouot 拍賣行接手主辦，奠定每年 11 月第三個週日的傳統。', color: '#3498db' },
  { year: '2005', title: 'Christie\'s 接手', desc: '改由 Christie\'s 主辦，拍賣形式現代化、開放線上競標、國際買家比例大增。', color: '#e67e22' },
  { year: '2015', title: '醫院遷出', desc: 'Hôtel-Dieu 古蹟改為博物館，醫療服務遷至 Beaune 郊區現代醫院（仍由 Hospices 基金維持）。', color: '#c0392b' },
  { year: '2021', title: '創紀錄總額', desc: '受疫情後復甦推動，總成交額達 €15.3M（含慈善桶 €800,000 一桶）。', color: '#d4af37' }
]

const cuvees = [
  {
    tier: 'Grand Cru',
    name: 'Cuvée Madeleine Collignon',
    donor: 'Madeleine Collignon 1976 捐贈',
    appellation: 'Mazis-Chambertin GC',
    barrels: '~6-8 桶',
    price: '€60,000-90,000 / 桶',
    color: '#7B1F2A'
  },
  {
    tier: 'Grand Cru',
    name: 'Cuvée François de Salins',
    donor: '創辦人 Guigone de Salins 之父',
    appellation: 'Corton GC（白）',
    barrels: '~3-4 桶',
    price: '€40,000-60,000 / 桶',
    color: '#5D2A8E'
  },
  {
    tier: '1er Cru',
    name: 'Cuvée Nicolas Rolin',
    donor: '創辦人 Nicolas Rolin 1443',
    appellation: 'Beaune 1er Cru',
    barrels: '~30-40 桶',
    price: '€8,000-15,000 / 桶',
    color: '#16886A'
  },
  {
    tier: '1er Cru',
    name: 'Cuvée Guigone de Salins',
    donor: '創辦人妻子 Guigone',
    appellation: 'Beaune 1er Cru',
    barrels: '~15-20 桶',
    price: '€7,000-12,000 / 桶',
    color: '#3498db'
  },
  {
    tier: '1er Cru',
    name: 'Cuvée Charlotte Dumay',
    donor: 'Charlotte Dumay 1534 捐贈',
    appellation: 'Corton Renardes GC',
    barrels: '~10-12 桶',
    price: '€20,000-35,000 / 桶',
    color: '#e67e22'
  },
  {
    tier: 'Charity',
    name: 'Pièce des Présidents',
    donor: '每年單獨拍賣的「主席桶」',
    appellation: '每年指定，常為頂級 Grand Cru',
    barrels: '1 桶（單品）',
    price: '€300,000-810,000 / 桶',
    color: '#d4af37'
  }
]

const candleSteps = [
  { title: '預展品酒', desc: '拍賣前 2-3 天，買家於 Hospices 酒窖試桶評估每個 Cuvée 風格。' },
  { title: '蠟燭點燃', desc: '每桶開始競拍時點燃 2 根小蠟燭，為「時間限制」象徵。' },
  { title: '兩根蠟燭交替', desc: '當第 1 根燃盡前無人加價即將熄滅時，主持人立即點燃第 2 根，買家可繼續加價。' },
  { title: '兩根都熄滅 = 成交', desc: '若連續兩根蠟燭都熄滅都無人加價，最後出價者得標（hammer 落槌）。' },
  { title: '主席桶 (Pièce du Président)', desc: '單獨拍賣 1 桶，由名人主持（Carla Bruni、Florent Pagny 等），成交價常達 €300K-€800K，全額慈善。' },
  { title: '橡木桶交付', desc: '得標者選擇 négociant 接手熟成 12-24 個月，自費裝瓶（含 Hospices Logo 標籤）。' }
]

const yearTotals = [
  { year: '2019', amount: 12.3, note: '正常水準', color: 'linear-gradient(90deg, #16a085, #1abc9c)' },
  { year: '2020', amount: 13.7, note: '疫情線上拍賣', color: 'linear-gradient(90deg, #3498db, #5dade2)' },
  { year: '2021', amount: 15.3, note: '🏆 首破 €15M', color: 'linear-gradient(90deg, #e67e22, #f39c12)' },
  { year: '2022', amount: 31.0, note: '🏆🏆 創歷史紀錄', color: 'linear-gradient(90deg, #d4af37, #e8b952)' },
  { year: '2023', amount: 16.4, note: '回歸正常水準', color: 'linear-gradient(90deg, #5D2A8E, #7B3FA8)' }
]
</script>

<style scoped>
.hospices-slide {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  color: #2c3e50;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
.slide-header h2 {
  margin: 0 0 8px;
  font-size: 1.8rem;
  color: #7B1F2A;
  text-align: center;
}
.slide-desc {
  text-align: center;
  color: #555;
  margin: 0 0 20px;
  line-height: 1.7;
}

.hospices-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
}
.h-tab {
  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  color: #555;
  transition: all 0.25s;
}
.h-tab:hover { transform: translateY(-2px); }
.h-tab.active {
  background: linear-gradient(135deg, #7B1F2A, #5D2A8E);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}

.tab-pane { animation: fadeIn 0.3s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.section-h {
  color: #7B1F2A;
  font-size: 1.15rem;
  margin: 16px 0 12px;
}
.pane-intro {
  background: #fff8e6;
  padding: 12px 16px;
  border-radius: 10px;
  border-left: 4px solid #d4af37;
  margin: 0 0 16px;
  font-size: 0.93rem;
  line-height: 1.7;
}

/* History tab */
.origin-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 16px;
}
.origin-header {
  background: linear-gradient(135deg, #5D2A8E, #7B1F2A);
  padding: 14px 20px;
  color: #fff;
}
.origin-header h3 { margin: 0; font-size: 1.15rem; }
.origin-body {
  padding: 16px 20px;
  font-size: 0.93rem;
  line-height: 1.8;
}
.origin-body p { margin: 0 0 10px; }
.origin-body p:last-child { margin: 0; }

.timeline { display: flex; flex-direction: column; gap: 8px; }
.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 12px;
  align-items: stretch;
}
.t-year {
  background: linear-gradient(135deg, #5D2A8E, #7B1F2A);
  color: #fff;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.t-content {
  background: #fafafa;
  padding: 10px 14px;
  border-radius: 8px;
  border-left: 4px solid #999;
}
.t-title { font-weight: 700; font-size: 0.93rem; margin-bottom: 3px; }
.t-desc { font-size: 0.86rem; color: #555; line-height: 1.6; }

/* Cuvées tab */
.cuvee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}
.cuvee-card {
  background: #fff;
  border-radius: 10px;
  border-top: 4px solid #999;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.cuvee-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #fafafa;
}
.cuvee-tier {
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
}
.cuvee-name { font-weight: 700; font-size: 0.92rem; line-height: 1.3; }
.cuvee-body { padding: 10px 12px; }
.cuvee-row {
  font-size: 0.83rem;
  line-height: 1.6;
  margin-bottom: 4px;
}
.cuvee-row strong { color: #666; }
.cuvee-price { color: #c0392b; font-weight: 700; }

/* Auction tab */
.auction-meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}
.meta-item {
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
}
.meta-label { font-size: 0.78rem; color: #888; font-weight: 700; margin-bottom: 4px; }
.meta-value { font-size: 0.85rem; font-weight: 700; color: #2c3e50; line-height: 1.4; }

.candle-flow {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-bottom: 16px;
}
.candle-step {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
.candle-step:last-child { margin-bottom: 0; }
.step-num {
  background: linear-gradient(135deg, #d4af37, #e8b952);
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.step-title { font-weight: 700; font-size: 0.92rem; margin-bottom: 3px; }
.step-desc { font-size: 0.85rem; color: #555; line-height: 1.6; }

.auction-chart {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.year-row {
  display: grid;
  grid-template-columns: 60px 1fr 160px;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
}
.year-row:last-child { margin: 0; }
.year-label { font-weight: 700; font-size: 0.92rem; }
.year-bar-track {
  background: #f0f0f0;
  border-radius: 14px;
  height: 26px;
  overflow: hidden;
}
.year-bar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  border-radius: 14px;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  transition: width 0.5s;
}
.year-note { font-size: 0.82rem; color: #555; }

.key-insight {
  background: linear-gradient(135deg, #7B1F2A, #5D2A8E);
  color: #fff;
  border-radius: 12px;
  padding: 18px 20px;
  margin-top: 18px;
}
.key-insight h4 { margin: 0 0 8px; font-size: 1.1rem; }
.key-insight p { margin: 0; line-height: 1.8; font-size: 0.95rem; }

@media (max-width: 768px) {
  .hospices-tabs { grid-template-columns: 1fr; }
  .auction-meta { grid-template-columns: repeat(2, 1fr); }
  .year-row { grid-template-columns: 50px 1fr; }
  .year-note { grid-column: 1 / -1; padding-left: 60px; }
  .timeline-item { grid-template-columns: 60px 1fr; }
}
</style>
