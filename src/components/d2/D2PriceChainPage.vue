<template>
  <div class="d2p">
    <header class="d2p-head">
      <button class="d2p-back" @click="emit('back')">← 返回課程首頁</button>
      <span class="d2p-title">💹 價格鏈試算</span>
    </header>
    <main class="d2p-main">
      <p class="d2p-note">⚠ 以下數字是<b>示意用的假設</b>，不是任何市場或稅制的實際資料。調整各階段的加成，觀察貨架價如何堆疊。</p>

      <label class="d2p-field">出廠價（每瓶，示意單位）
        <input type="number" min="1" max="1000" v-model.number="base" @input="touch" />
      </label>

      <div class="d2p-route" role="group" aria-label="路徑">
        <button :class="['d2p-pill', { on: route === 'long' }]" @click="setRoute('long')">長路徑（進口商＋經銷商）</button>
        <button :class="['d2p-pill', { on: route === 'dtc' }]" @click="setRoute('dtc')">直銷（DTC）</button>
      </div>

      <div v-for="s in activeStages" :key="s.id" class="d2p-stage">
        <div class="d2p-stage-top"><b>{{ s.label }}</b><span>加成 {{ s.pct }}%</span></div>
        <input type="range" min="0" max="60" step="1" v-model.number="s.pct" @input="touch" :aria-label="s.label" />
        <p class="d2p-hint">{{ s.hint }}</p>
      </div>

      <section class="d2p-result" aria-live="polite">
        <h2>結果（示意）</h2>
        <p class="d2p-final">終端價 <b>{{ fmt(final) }}</b></p>
        <p>其中生產者出廠價占終端價 <b>{{ shareBase }}%</b>；其餘為成本與通路加成。</p>
        <ul class="d2p-list">
          <li v-for="r in rows" :key="r.label"><span>{{ r.label }}</span><b>{{ fmt(r.value) }}</b></li>
        </ul>
        <p v-if="route === 'dtc'" class="d2p-hint">直銷省掉進口與經銷兩層，但運輸、客服與合規仍要有人負擔——這裡假設由生產者自己承擔，請調整「運輸與合規」。</p>
      </section>
      <p class="d2p-tip">答題提醒：每一層加價都對應一項功能與成本（物流、稅務、庫存、信用、營運）。省掉一層，工作只是換人做。</p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { d2ExtrasActions } from '../../stores/d2ExtrasStore.js'

const emit = defineEmits(['back'])
const base = ref(10)
const route = ref('long')
const stages = reactive([
  { id: 'freight', label: '運輸與合規', pct: 10, hint: '運輸、保險、標示與合規；酒較重且需控溫。', routes: ['long', 'dtc'] },
  { id: 'tax', label: '稅與關稅', pct: 20, hint: '各國制度不同；這裡只是示意比例。', routes: ['long', 'dtc'] },
  { id: 'importer', label: '進口商', pct: 20, hint: '承擔稅務、匯率、庫存與銷售風險。', routes: ['long'] },
  { id: 'distributor', label: '經銷商', pct: 25, hint: '倉儲、配送、業務與信用風險。', routes: ['long'] },
  { id: 'retail', label: '零售或餐飲', pct: 35, hint: '營運成本與利潤；餐飲加成通常更高。', routes: ['long'] },
  { id: 'dtcops', label: '直銷營運（客服、包裝、物流）', pct: 15, hint: '自己負擔的客服與宅配等成本。', routes: ['dtc'] }
])
const activeStages = computed(() => stages.filter(s => s.routes.includes(route.value)))
const steps = computed(() => {
  let v = Number(base.value) || 0
  const out = [{ label: '出廠價', value: v }]
  for (const s of activeStages.value) { v = v * (1 + s.pct / 100); out.push({ label: `加上 ${s.label}`, value: v }) }
  return out
})
const rows = computed(() => steps.value)
const final = computed(() => steps.value[steps.value.length - 1].value)
const shareBase = computed(() => final.value > 0 ? Math.round(((Number(base.value) || 0) / final.value) * 100) : 0)
const fmt = (n) => (Math.round(n * 100) / 100).toFixed(2)
function touch() { d2ExtrasActions.markChainTried() }
function setRoute(r) {
  const changed = route.value !== r
  route.value = r
  d2ExtrasActions.markChainTried()
  if (changed) d2ExtrasActions.markDtcCompared()
}
</script>

<style scoped>
.d2p { min-height: 100vh; background: #f4f8fc; color: #14212e; width: 100%; min-width: 0; overflow-x: hidden; box-sizing: border-box; }
.d2p-head { position: sticky; top: 0; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 14px; background: linear-gradient(135deg, #2F5D8A, #1B3A57); color: #fff; }
.d2p-back { border: 1px solid rgba(255,255,255,.3); background: rgba(255,255,255,.18); color: #fff; border-radius: 10px; padding: 7px 14px; font-size: .85rem; cursor: pointer; }
.d2p-title { font-weight: 700; }
.d2p-main { max-width: 640px; margin: 0 auto; padding: 18px 16px 48px; box-sizing: border-box; }
.d2p-note { background: #fff7e0; border: 1px solid #ecd48a; border-radius: 10px; padding: 8px 12px; font-size: .85rem; line-height: 1.6; }
.d2p-field { display: block; font-size: .9rem; margin: 12px 0; }
.d2p-field input { display: block; width: 100%; box-sizing: border-box; margin-top: 4px; padding: 9px 10px; border: 1px solid rgba(0,0,0,.18); border-radius: 10px; font-size: 1rem; }
.d2p-route { display: flex; gap: 8px; flex-wrap: wrap; margin: 6px 0 12px; }
.d2p-pill { border: 1px solid #2F5D8A; background: #fff; color: #2F5D8A; border-radius: 999px; padding: 8px 14px; font-size: .85rem; cursor: pointer; }
.d2p-pill.on { background: #2F5D8A; color: #fff; }
.d2p-stage { background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 14px; padding: 10px 14px; margin-bottom: 8px; }
.d2p-stage-top { display: flex; justify-content: space-between; gap: 8px; font-size: .9rem; }
.d2p-stage input[type=range] { width: 100%; }
.d2p-hint { margin: 4px 0 0; font-size: .8rem; color: #55687a; line-height: 1.5; overflow-wrap: anywhere; }
.d2p-result { background: #fff; border: 2px solid #2F5D8A; border-radius: 14px; padding: 12px 16px; margin-top: 14px; }
.d2p-result h2 { margin: 0 0 6px; font-size: 1rem; color: #1B3A57; }
.d2p-final { font-size: 1.2rem; margin: 4px 0; }
.d2p-list { list-style: none; padding: 0; margin: 8px 0 0; }
.d2p-list li { display: flex; justify-content: space-between; gap: 8px; padding: 4px 0; border-top: 1px solid rgba(0,0,0,.06); font-size: .85rem; overflow-wrap: anywhere; }
.d2p-tip { color: #2F5D8A; font-size: .85rem; line-height: 1.6; margin-top: 12px; }
</style>
