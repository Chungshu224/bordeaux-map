<template>
  <div class="loire-sweet-method-slide">
    <header class="lsm-header">
      <h2 class="lsm-title">{{ slide.title || '羅亞爾甜白三大釀法' }}</h2>
      <p v-if="slide.description" class="lsm-desc">{{ slide.description }}</p>
    </header>

    <div class="lsm-grid">
      <article
        v-for="m in methods"
        :key="m.key"
        class="lsm-card"
        :class="{ active: activeKey === m.key }"
        :style="{ '--accent': m.color }"
        @click="activeKey = m.key"
      >
        <header class="lsm-card-head">
          <span class="lsm-emoji">{{ m.emoji }}</span>
          <div>
            <h3>{{ m.name }}</h3>
            <p class="lsm-fr"><em>{{ m.frenchTerm }}</em></p>
          </div>
        </header>

        <p class="lsm-summary">{{ m.summary }}</p>

        <!-- 流程步驟 -->
        <ol class="lsm-steps">
          <li v-for="(step, i) in m.steps" :key="i">
            <span class="step-num">{{ i + 1 }}</span>
            <span class="step-text">{{ step }}</span>
          </li>
        </ol>

        <ul class="lsm-meta">
          <li><strong>典型產區</strong>{{ m.regions }}</li>
          <li><strong>風格印象</strong>{{ m.style }}</li>
          <li><strong>名酒</strong>{{ m.examples }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  slide: { type: Object, default: () => ({}) }
})

const DEFAULT_METHODS = [
  {
    key: 'botrytis',
    name: '貴腐菌',
    frenchTerm: 'Pourriture Noble · Botrytis cinerea',
    emoji: '🍯',
    color: '#a25b1f',
    summary: '河谷晨霧 + 午後乾燥太陽，灰葡萄孢菌穿透果皮使水份蒸發、糖分濃縮，香氣從蜂蜜、杏桃乾、橘皮到藏紅花。',
    steps: [
      '羅亞爾河與支流（Layon、Vienne）秋季產生晨霧',
      'Botrytis cinerea 菌絲穿透果皮造成「貴腐」',
      '果粒水份蒸散至原體積 1/3，糖分極度濃縮',
      '逐串挑選最完美貴腐果粒，分批採收（trie）多達 5–6 次',
      '極緩慢發酵保留 80–200 g/L 殘糖'
    ],
    regions: 'Quarts-de-Chaume、Bonnezeaux、Coteaux du Layon',
    style: '濃稠如蜜、橘皮藏紅花、酸度極高撐住極甜',
    examples: 'Quarts-de-Chaume Grand Cru、Bonnezeaux、頂級 Vouvray Moelleux'
  },
  {
    key: 'passerillage',
    name: '葡萄樹上風乾',
    frenchTerm: 'Passerillage sur Souche',
    emoji: '🌬️',
    color: '#d6a14a',
    summary: '不靠菌類，靠晚秋陽光與風使果粒在樹上自然失水濃縮——保留純淨果香（無 Botrytis 風味）。',
    steps: [
      '葡萄成熟後不採收，留在樹上 2–6 週',
      '太陽與風使水份自然蒸散',
      '果粒皺縮、糖分自然濃縮',
      '一次或兩次採收（無需逐粒挑選 Botrytis）',
      '發酵停留於甜型，保留純淨果香'
    ],
    regions: 'Vouvray Moelleux、Montlouis Moelleux 部分酒款',
    style: '純淨蜂蜜、黃蘋果、杏桃，不帶貴腐霉香',
    examples: 'Domaine Huet Vouvray Moelleux、Foreau Clos Naudin'
  },
  {
    key: 'late-harvest',
    name: '晚收',
    frenchTerm: 'Vendanges Tardives',
    emoji: '🍂',
    color: '#7baf6c',
    summary: '延後採收讓葡萄持續成熟，糖分緩慢累積——多用於半干至甜型酒款，較貴腐酒體更輕盈。',
    steps: [
      '採收延後 2–4 週至 10 月底甚至 11 月',
      '葡萄繼續累積糖分但保留水份',
      '一次採收，不挑選貴腐',
      '保留中等酸度與較高殘糖（30–80 g/L）',
      '發酵控制以呈現平衡的 Demi-Sec 至 Moelleux'
    ],
    regions: 'Vouvray Demi-Sec、Coteaux du Layon Village（部分）',
    style: '清爽花蜜、檸檬皮、酸甜平衡，餐搭性強',
    examples: 'Vouvray Demi-Sec、Coteaux du Layon Saint-Lambert'
  }
]

const methods = computed(() => {
  if (Array.isArray(props.slide?.methods) && props.slide.methods.length) return props.slide.methods
  return DEFAULT_METHODS
})
const activeKey = ref(props.slide?.defaultKey || methods.value[0]?.key || '')
</script>

<style scoped>
.loire-sweet-method-slide {
  display: flex; flex-direction: column; gap: 14px;
  padding: 8px 4px;
}
.lsm-header { text-align: center; }
.lsm-title { margin: 0 0 4px; font-size: 1.55rem; color: #2c3e50; }
.lsm-desc { margin: 0; color: #5b6b7a; font-size: 0.92rem; }

.lsm-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.lsm-card {
  border: 2px solid #e0e3e8;
  border-radius: 12px;
  padding: 14px 14px 12px;
  background: #fff;
  cursor: pointer;
  transition: all .2s;
  display: flex; flex-direction: column;
}
.lsm-card:hover, .lsm-card.active {
  border-color: var(--accent);
  background: linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--accent) 7%, #fff) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px color-mix(in srgb, var(--accent) 30%, transparent);
}
.lsm-card-head { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; }
.lsm-emoji { font-size: 1.8rem; line-height: 1; }
.lsm-card-head h3 { margin: 0; font-size: 1.05rem; color: var(--accent); }
.lsm-fr { margin: 2px 0 0; font-size: 0.74rem; color: #889; }

.lsm-summary {
  margin: 0 0 10px;
  font-size: 0.85rem;
  color: #2c3e50;
  line-height: 1.55;
  padding-bottom: 10px;
  border-bottom: 1px dashed #d6dae0;
}

.lsm-steps {
  list-style: none;
  padding: 0;
  margin: 0 0 10px;
  display: grid; gap: 6px;
  font-size: 0.82rem;
}
.lsm-steps li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 8px;
  align-items: start;
  line-height: 1.45;
  color: #2c3e50;
}
.step-num {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 0.72rem;
  display: flex; align-items: center; justify-content: center;
  font-weight: 600;
  margin-top: 1px;
}

.lsm-meta {
  list-style: none;
  padding: 0;
  margin: auto 0 0;
  display: grid; gap: 5px;
  font-size: 0.8rem;
  border-top: 1px dashed #d6dae0;
  padding-top: 8px;
}
.lsm-meta li { line-height: 1.4; color: #2c3e50; }
.lsm-meta strong {
  display: block; color: #555; font-weight: 600;
  font-size: 0.72rem; margin-bottom: 1px;
}

@media (max-width: 1024px) {
  .lsm-grid { grid-template-columns: 1fr; }
}
</style>
