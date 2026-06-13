<template>
  <div class="label-guide-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '如何閱讀義大利酒標' }}</h2>
      <p class="slide-desc">{{ slide.description || '掌握這 5 個關鍵元素，輕鬆解讀任何義大利葡萄酒' }}</p>
    </div>

    <div class="content-layout">
      <!-- 左側：模擬酒標 -->
      <div class="label-wrapper">
        <div class="label-card">
          <div class="label-region-banner">PIEMONTE</div>

          <div class="label-wine-name">BAROLO</div>

          <div class="label-row producer-row">
            <span class="callout" :class="activeNum === 1 ? 'active' : ''" :style="{ background: items[0].color }" @click="activeNum = 1">1</span>
            <span class="row-text">Tenuta Giovanni Rossi</span>
          </div>

          <div class="label-ornament">❧ ─────────── ❧</div>

          <div class="label-row grade-row">
            <span class="callout" :class="activeNum === 2 ? 'active' : ''" :style="{ background: items[1].color }" @click="activeNum = 2">2</span>
            <span class="grade-badge">DOCG</span>
          </div>

          <div class="label-row vintage-row">
            <span class="callout" :class="activeNum === 3 ? 'active' : ''" :style="{ background: items[2].color }" @click="activeNum = 3">3</span>
            <span class="vintage-year">2019</span>
          </div>

          <div class="label-ornament small">── Prodotto in Italia ──</div>

          <div class="label-footer">
            <div class="footer-item">
              <span class="callout small" :class="activeNum === 4 ? 'active' : ''" :style="{ background: items[3].color }" @click="activeNum = 4">4</span>
              <span>14.5% vol</span>
            </div>
            <div class="footer-item">
              <span class="callout small" :class="activeNum === 5 ? 'active' : ''" :style="{ background: items[4].color }" @click="activeNum = 5">5</span>
              <span>750 ml</span>
            </div>
          </div>
        </div>
        <p class="label-hint">👆 點擊數字查看說明</p>
      </div>

      <!-- 右側：說明卡 -->
      <div class="explanations">
        <div
          v-for="item in items"
          :key="item.num"
          class="exp-card"
          :class="{ active: activeNum === item.num }"
          :style="{ '--card-color': item.color }"
          @click="activeNum = item.num"
        >
          <div class="exp-num" :style="{ background: item.color }">{{ item.num }}</div>
          <div class="exp-body">
            <div class="exp-zh">{{ item.zh }}</div>
            <div class="exp-en">{{ item.en }}</div>
            <div class="exp-tip">{{ item.tip }}</div>
          </div>
          <div class="exp-icon">{{ item.icon }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ slide: { type: Object, default: () => ({}) } })

const activeNum = ref(1)

const items = [
  {
    num: 1,
    icon: '🏠',
    color: '#B8860B',
    zh: '酒莊名稱',
    en: 'Producer / Winery Name',
    tip: '釀造者或品牌名稱，是酒款風格最重要的線索。頂級酒莊名（Gaja、Antinori）本身即是品質保證。'
  },
  {
    num: 2,
    icon: '🏅',
    color: '#7B1F2A',
    zh: '產區等級',
    en: 'Appellation: DOCG / DOC / IGT',
    tip: 'DOCG = 最高等級（瓶頸有封條）；DOC = 法定產區；IGT = 地區餐酒。等級越高，規範越嚴。'
  },
  {
    num: 3,
    icon: '📅',
    color: '#A87A48',
    zh: '年份',
    en: 'Vintage Year',
    tip: '葡萄採收的年份。對 Barolo、Brunello 等需長期陳年的酒款，年份是判斷適飲期的關鍵。'
  },
  {
    num: 4,
    icon: '🌡️',
    color: '#3D7A5C',
    zh: '酒精濃度',
    en: 'Alcohol Content (%vol)',
    tip: '一般義大利紅酒 12–15%。DOCG 通常有最低酒精度規定（如 Barolo 最少 13%）。'
  },
  {
    num: 5,
    icon: '🍾',
    color: '#2B5DA6',
    zh: '容量',
    en: 'Volume (ml)',
    tip: '標準瓶 750 ml。義大利也常見 375 ml（半瓶）、1500 ml（Magnum）、3000 ml（Double Magnum）。'
  }
]
</script>

<style scoped>
.label-guide-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  background: linear-gradient(135deg, #fef9f5 0%, #f5e8d8 100%);
  color: #2d1a0f;
  overflow-y: auto;
  gap: 1.2rem;
}

.slide-header h2 {
  font-size: 1.7rem;
  margin: 0 0 0.3rem;
  color: #7B1F2A;
  font-weight: 700;
}
.slide-desc {
  color: #7a6048;
  font-size: 0.9rem;
  margin: 0;
}

/* Two-column layout */
.content-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
  flex: 1;
}

/* ── Mock Label ── */
.label-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.label-card {
  width: 100%;
  background: #fffdf8;
  border: 2px solid #c9a84c;
  border-radius: 10px;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  box-shadow: 0 4px 20px rgba(123, 31, 42, 0.15), inset 0 0 0 4px rgba(201, 168, 76, 0.12);
  font-family: 'Georgia', serif;
}

.label-region-banner {
  font-size: 0.65rem;
  letter-spacing: 3px;
  color: #9a7030;
  font-weight: 600;
  text-transform: uppercase;
}

.label-wine-name {
  font-size: 2rem;
  font-weight: 700;
  color: #7B1F2A;
  letter-spacing: 4px;
  text-transform: uppercase;
  border-bottom: 1px solid #c9a84c;
  padding-bottom: 0.4rem;
  width: 100%;
  text-align: center;
}

.label-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  justify-content: center;
}

.row-text {
  font-size: 0.78rem;
  color: #4a3826;
  font-style: italic;
}

.grade-badge {
  font-size: 0.95rem;
  font-weight: 800;
  color: #7B1F2A;
  letter-spacing: 2px;
  border: 2px solid #7B1F2A;
  padding: 0.15rem 0.8rem;
  border-radius: 4px;
}

.vintage-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d1a0f;
  letter-spacing: 2px;
}

.label-ornament {
  font-size: 0.65rem;
  color: #c9a84c;
  letter-spacing: 1px;
  text-align: center;
}
.label-ornament.small {
  font-size: 0.6rem;
  color: #a87a48;
}

.label-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #e8d5b0;
  padding-top: 0.5rem;
  margin-top: 0.2rem;
}
.footer-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: #4a3826;
}

.label-hint {
  font-size: 0.72rem;
  color: #9a7a58;
  margin: 0;
  text-align: center;
}

/* Callout dots */
.callout {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
.callout.small {
  width: 20px;
  height: 20px;
  font-size: 0.68rem;
}
.callout:hover, .callout.active {
  transform: scale(1.25);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}

/* ── Explanation Cards ── */
.explanations {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.exp-card {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.85rem 1rem;
  background: white;
  border-radius: 10px;
  border-left: 4px solid var(--card-color);
  box-shadow: 0 2px 8px rgba(123, 31, 42, 0.08);
  cursor: pointer;
  transition: all 0.2s;
}
.exp-card:hover, .exp-card.active {
  box-shadow: 0 4px 16px rgba(123, 31, 42, 0.18);
  transform: translateX(4px);
  background: #fffdf8;
}

.exp-num {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.exp-body { flex: 1; }
.exp-zh {
  font-size: 1rem;
  font-weight: 700;
  color: #2d1a0f;
  margin-bottom: 0.1rem;
}
.exp-en {
  font-size: 0.78rem;
  color: #7a6048;
  margin-bottom: 0.3rem;
  font-style: italic;
}
.exp-tip {
  font-size: 0.8rem;
  color: #4a3826;
  line-height: 1.5;
}

.exp-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
  }
  .label-card { max-width: 280px; }
}
</style>
