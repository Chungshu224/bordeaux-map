<template>
  <div class="docg-map-slide">
    <div class="slide-header">
      <h2>{{ slide.title || '🗺️ Veneto 重要 DOCG & DOC 互動地圖' }}</h2>
      <p class="slide-subtitle">點選按鈕查看各產區位置與詳細資訊</p>
    </div>

    <!-- 分類按鈕列 -->
    <div class="zone-buttons">
      <div class="btn-group">
        <span class="btn-group-label">🏆 重要 DOCG</span>
        <button
          v-for="z in DOCG_ZONES"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <div class="btn-group">
        <span class="btn-group-label">🍷 重要 DOC</span>
        <button
          v-for="z in DOC_ZONES"
          :key="z.id"
          class="zone-btn"
          :class="[`tier-${z.tier}`, { active: selected === z.id }]"
          @click="selectZone(z.id)"
        >{{ z.emoji }} {{ z.shortName }}</button>
      </div>
      <button v-if="selected" class="reset-btn" @click="resetView">🔄 全覽</button>
    </div>

    <!-- 地圖 + 資訊 -->
    <div class="map-info-row">
      <div class="map-wrapper">
        <div ref="mapContainer" class="mapbox-container"></div>
        <div v-if="loading" class="map-loading">地圖載入中…</div>
        <div v-if="mapError" class="map-error">{{ mapError }}</div>
        <div class="map-legend">
          <div class="legend-row"><span class="legend-dot tier-s"></span>頂級 DOCG（Amarone）</div>
          <div class="legend-row"><span class="legend-dot tier-a"></span>重要 DOCG</div>
          <div class="legend-row"><span class="legend-dot tier-doc"></span>重要 DOC</div>
        </div>
      </div>

      <!-- 資訊面板 -->
      <div class="info-panel" v-if="selectedInfo">
        <div class="info-badge" :class="`tier-${selectedInfo.tier}`">
          {{ selectedInfo.tierLabel }}
        </div>
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
        <div class="empty-icon">👆</div>
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

// ── 產區資料 ─────────────────────────────────────────────────
const DOCG_ZONES = [
  {
    id: 'amarone',
    name: 'Amarone della Valpolicella DOCG',
    shortName: 'Amarone',
    emoji: '🍷',
    tier: 's',
    tierLabel: '👑 頂級 DOCG — Legendary',
    center: [10.930, 45.545],
    zoom: 11,
    color: '#8B0000',
    geojsonPath: '/italy/regions/veneto/geojson/DOCG/Amarone della Valpolicella DOCG.geojson',
    details: [
      { label: '品種', value: 'Corvina 45-95%，Corvinone 可替代 50%，Rondinella 5-30%' },
      { label: '工藝', value: '100% Appassimento 風乾 3-4 個月，失水 30-40%' },
      { label: '陳年', value: '最少 2 年（含 2 年橡木桶）；Riserva 4 年+' },
      { label: '風格', value: '15-17% ABV，乾果、巧克力、皮革、菸草，近乎干型' },
      { label: '位置', value: 'Verona 省西北，Valpolicella 谷地，3 個核心村莊' }
    ],
    desc: '義大利最強勁的紅酒。Corvina 葡萄風乾後糖分翻倍，發酵至接近干型，造就義大利酒精最高的紅酒。Classico 子區（Negrar、Marano、Sant\'Ambrogio）品質最佳。',
    pairing: '野味燉肉、陳年 Parmigiano、牛骨髓料理、黑巧克力甜點',
    price: '€25-600+，Riserva 可達 €200+'
  },
  {
    id: 'prosecco-docg',
    name: 'Conegliano Valdobbiadene Prosecco DOCG',
    shortName: 'Prosecco DOCG',
    emoji: '🥂',
    tier: 'a',
    tierLabel: '⭐ 頂級 DOCG — Prosecco 精華',
    center: [12.148, 45.890],
    zoom: 10.5,
    color: '#1565C0',
    geojsonPath: '/italy/regions/veneto/geojson/DOCG/Conegliano Valdobbiadene Prosecco DOCG.geojson',
    details: [
      { label: '品種', value: 'Glera 85%+，其餘當地白品種輔助' },
      { label: '工藝', value: 'Charmat 法（大罐二次發酵），保留清新果香' },
      { label: '等級', value: 'Conegliano（較圓潤）/ Valdobbiadene（較精緻）/ Rive（單一園）/ Cartizze（頂峰）' },
      { label: '風格', value: '細緻氣泡，白桃、梨子、杏花，10.5-11.5% ABV' },
      { label: '位置', value: 'Treviso 省，Conegliano 至 Valdobbiadene 陡峭丘陵，UNESCO 遺址' }
    ],
    desc: 'Prosecco 的精華核心，Cartizze（僅 107 公頃）是最頂級的單一園，坡度達 45 度的陡峭山坡造就微甜版本最高表達。2019 年列入 UNESCO 世界遺產。',
    pairing: '開胃菜、生火腿 Prosciutto、淡海鮮、草莓甜點',
    price: 'Brut €10-25 / Rive €18-40 / Cartizze €25-60+'
  },
  {
    id: 'soave-sup',
    name: 'Soave Superiore DOCG',
    shortName: 'Soave Sup.',
    emoji: '🤍',
    tier: 'a',
    tierLabel: '⭐ 頂級 DOCG — 玄武岩白酒',
    center: [11.248, 45.427],
    zoom: 11.5,
    color: '#4A148C',
    geojsonPath: '/italy/regions/veneto/geojson/DOCG/Soave Superiore DOCG.geojson',
    details: [
      { label: '品種', value: 'Garganega 70%+，Trebbiano di Soave / Pinot Bianco 補充' },
      { label: '土壤', value: '玄武岩火山土 + 石灰岩，老藤帶來礦物複雜度' },
      { label: '陳年', value: 'Superiore：最少 12 個月；Riserva：24 個月+' },
      { label: '風格', value: '礦物感十足，杏仁、白花、蜂蜜（老藤），3-20 年陳年潛力' },
      { label: '位置', value: 'Verona 省東部，Soave 鎮周邊，Classico 核心區品質最佳' }
    ],
    desc: 'Classico 核心區的玄武岩土壤是 Soave 的靈魂，老藤 Garganega（樹齡 60-100 年以上）帶來無可複製的礦物複雜度。Pieropan、Gini 等家族酒莊定義了真正的 Soave 風格。',
    pairing: '海鮮料理、Vitello Tonnato、清淡白肉、奶油海鮮義大利麵',
    price: 'Superiore €12-35 / Riserva €20-55'
  }
]

const DOC_ZONES = [
  {
    id: 'valpolicella',
    name: 'Valpolicella DOC',
    shortName: 'Valpolicella',
    emoji: '🍒',
    tier: 'doc',
    tierLabel: '🍷 重要 DOC — Amarone 的基礎',
    center: [10.930, 45.560],
    zoom: 11,
    color: '#B71C1C',
    geojsonPath: '/italy/regions/veneto/geojson/DOC/Valpolicella DOC.geojson',
    details: [
      { label: '品種', value: 'Corvina 45-95%，Rondinella 5-30%，同 Amarone 品種' },
      { label: '風格', value: '輕盈、新鮮，無風乾工藝，鮮活酸度，容易親近' },
      { label: '陳年', value: '普通款：6 個月+；Superiore：1 年+' },
      { label: '關係', value: 'Amarone 的基礎，同葡萄園不同工藝的入門版' },
      { label: '位置', value: '與 Amarone 相同區域，部分 Ripasso 再使用 Amarone 酒渣' }
    ],
    desc: '同一葡萄園、同樣品種，不用風乾工藝就是 Valpolicella。Ripasso 工藝（過 Amarone 酒渣二次浸泡）介於兩者之間，獲得更高酒體與複雜度，是 CP 值最高的選擇。',
    pairing: '日常義大利麵、沙拉米、烤雞、薄餅',
    price: 'Valpolicella €8-18 / Ripasso €15-35'
  },
  {
    id: 'valpolicella-ripasso',
    name: 'Valpolicella Ripasso DOC',
    shortName: 'Ripasso',
    emoji: '🔁',
    tier: 'doc',
    tierLabel: '🍷 重要 DOC — 窮人的 Amarone',
    center: [10.920, 45.548],
    zoom: 11,
    color: '#C62828',
    geojsonPath: '/italy/regions/veneto/geojson/DOC/Valpolicella ripasso DOC.geojson',
    details: [
      { label: '工藝', value: 'Ripasso：將 Valpolicella 過 Amarone 或 Recioto 酒渣再次浸泡' },
      { label: '效果', value: '獲得更多顏色、單寧、酒體，果香更複雜，酒精升至 13-14%' },
      { label: '陳年', value: '最少 1 年（含 6 個月橡木桶）；Superiore 2 年+' },
      { label: '風格', value: '介於 Valpolicella 和 Amarone 之間，黑醋栗、香料、皮革' },
      { label: '定位', value: '被稱為「窮人的 Amarone」，性價比極高的中價位選擇' }
    ],
    desc: 'Ripasso 是 Veneto 最聰明的工藝：將基礎 Valpolicella 葡萄酒過 Amarone 酒渣（pomace）再次浸泡發酵，獲得額外的顏色、單寧與複雜度，又不需要 Amarone 的漫長風乾工藝。Masi、Bertani 是代表酒莊。',
    pairing: '燉牛肉、烤羊、陳年硬質起司、蘑菇料理',
    price: '€15-35，全 Veneto 最佳 CP 值'
  },
  {
    id: 'prosecco-doc',
    name: 'Prosecco DOC',
    shortName: 'Prosecco DOC',
    emoji: '🫧',
    tier: 'doc',
    tierLabel: '🍷 重要 DOC — 廣域 Prosecco',
    center: [12.100, 45.820],
    zoom: 8.8,
    color: '#1976D2',
    geojsonPath: '/italy/regions/veneto/geojson/DOC/Prosecco DOC.geojson',
    details: [
      { label: '品種', value: 'Glera 85%+，大量生產的親民版 Prosecco' },
      { label: '範圍', value: 'Veneto + Friuli Venezia Giulia 九個省，比 DOCG 大得多' },
      { label: '工藝', value: 'Charmat 法，清新果香，不講究土地個性' },
      { label: '風格', value: '白桃、梨子，輕盈易飲，Brut / Extra Dry / Dry 多種甜度' },
      { label: '定位', value: '全球銷量第一氣泡酒，日常場合首選' }
    ],
    desc: '廣域 Prosecco DOC 跨越 Veneto 和 Friuli 兩個大區，是年產超過 6 億瓶的全球最暢銷氣泡酒。DOC 版品質穩定親民，DOCG 版（Conegliano Valdobbiadene）才是精品表達。',
    pairing: '開胃菜、午餐輕食、派對場合、brunch',
    price: '€6-15，全球最實惠的精品氣泡酒'
  }
]

const ALL_ZONES = [...DOCG_ZONES, ...DOC_ZONES]

const TIER_STYLE = {
  s:   { fill: '#8B0000', line: '#EF5350', fillOpacity: 0.30, lineWidth: 2.5 },
  a:   { fill: '#1565C0', line: '#64B5F6', fillOpacity: 0.25, lineWidth: 2.2 },
  doc: { fill: '#4A148C', line: '#CE93D8', fillOpacity: 0.22, lineWidth: 1.8 }
}

// ── 狀態 ─────────────────────────────────────────────────────
const mapContainer = ref(null)
const loading = ref(true)
const mapError = ref(null)
const selected = ref(null)
let map = null
let markersArr = []

const selectedInfo = computed(() =>
  selected.value ? ALL_ZONES.find(z => z.id === selected.value) : null
)

// ── GeoJSON 非同步載入 ────────────────────────────────────────
async function fetchGeojson (z) {
  try {
    const res = await fetch(z.geojsonPath)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data.geometry && !data.features) throw new Error('empty geometry')
    return data
  } catch (e) {
    console.warn(`Failed to load GeoJSON for ${z.id}:`, e)
    return null
  }
}

// ── 地圖操作 ─────────────────────────────────────────────────
async function highlightAll () {
  if (!map || !map.isStyleLoaded()) return

  const geojsonData = await Promise.all(ALL_ZONES.map(z => fetchGeojson(z)))

  ALL_ZONES.forEach((z, i) => {
    const gj = geojsonData[i]
    if (!gj) return
    const fillId = `fill-${z.id}`
    const lineId = `line-${z.id}`
    const ts = TIER_STYLE[z.tier]
    if (!map.getSource(z.id)) {
      map.addSource(z.id, { type: 'geojson', data: gj })
    }
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

  // emoji 標記
  ALL_ZONES.forEach(z => {
    const el = document.createElement('div')
    el.innerHTML = z.emoji
    el.style.cssText = `font-size:16px;cursor:pointer;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.5));transition:transform 0.15s;`
    el.addEventListener('mouseenter', () => { el.style.transform = 'scale(1.3)' })
    el.addEventListener('mouseleave', () => { el.style.transform = 'scale(1)' })
    el.addEventListener('click', () => selectZone(z.id))
    const m = new mapboxgl.Marker({ element: el }).setLngLat(z.center).addTo(map)
    markersArr.push(m)
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
  map.flyTo({ center: [11.50, 45.62], zoom: 8.2, duration: 900 })
}

function initMap () {
  if (!mapContainer.value) return
  const token = import.meta.env.VITE_MAPBOX_TOKEN
  if (!token) { mapError.value = '未設定 Mapbox Token'; loading.value = false; return }
  mapboxgl.accessToken = token
  map = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [11.50, 45.62],
    zoom: 8.2,
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
.zone-btn.tier-s   { background: #fdf0f0; border-color: #8B0000; color: #8B0000; }
.zone-btn.tier-a   { background: #f0f4ff; border-color: #1565C0; color: #1565C0; }
.zone-btn.tier-doc { background: #f5f0ff; border-color: #6A1B9A; color: #6A1B9A; }
.zone-btn.active.tier-s   { background: #8B0000; color: #fff; }
.zone-btn.active.tier-a   { background: #1565C0; color: #fff; }
.zone-btn.active.tier-doc { background: #6A1B9A; color: #fff; }
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
.legend-dot.tier-s   { background: #8B0000; }
.legend-dot.tier-a   { background: #1565C0; }
.legend-dot.tier-doc { background: #6A1B9A; }

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
.hint-dot.tier-s   { background: #8B0000; }
.hint-dot.tier-a   { background: #1565C0; }
.hint-dot.tier-doc { background: #6A1B9A; }

.info-badge {
  display: inline-block; padding: 2px 10px; border-radius: 10px;
  font-size: 0.72rem; font-weight: 700; color: #fff; align-self: flex-start;
}
.info-badge.tier-s   { background: #8B0000; }
.info-badge.tier-a   { background: #1565C0; }
.info-badge.tier-doc { background: #6A1B9A; }

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
.info-price { background: #e8f5e9; }
.pair-label, .price-label { font-weight: 700; margin-right: 4px; }

@media (max-width: 680px) {
  .docg-map-slide { padding: 12px 12px 8px; }
  .map-info-row { flex-direction: column; }
  .map-wrapper { flex: 0 0 190px; }
  .info-panel { flex: 1; }
  .slide-header h2 { font-size: 1.05rem; }
}
</style>
