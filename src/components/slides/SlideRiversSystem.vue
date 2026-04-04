<template>
  <div class="slide-rivers">
    <div class="col left">
      <h2 class="title">{{ title }}</h2>
      <div class="content" v-html="content"></div>
    </div>
    <div class="col right">
      <PresentationMap
        key="rivers-system-map"
        :focus-type="'bordeaux-regions'"
        :show-bordeaux="true"
        :on-map-ready="onMapReady"
        :access-token="mapboxToken"
      />
    </div>
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import PresentationMap from '@/components/PresentationMap.vue'

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' }
})

const mapboxToken = (import.meta?.env?.VITE_MAPBOX_TOKEN)
  || (typeof window !== 'undefined' && (window.__MAPBOX_TOKEN || (window.localStorage && window.localStorage.getItem('VITE_MAPBOX_TOKEN'))))
  || ''

// ── 三條主河設定（顏色、寬度、標籤座標）
const MAIN_RIVERS = [
  {
    filename: 'La Garonne.geojson',
    name: '加龍河',
    nameEn: 'Garonne',
    color: '#1565C0',
    width: 3.5,
    labelLng: -0.50,
    labelLat: 44.55,
    tip: '來自庇里牛斯山脈，流經波爾多市中心，沿岸形成左岸產區，砂礫土壤主要由其沖積而成。'
  },
  {
    filename: 'La Dordogne.geojson',
    name: '多爾多涅河',
    nameEn: 'Dordogne',
    color: '#2E7D32',
    width: 3.5,
    labelLng: 0.06,
    labelLat: 44.89,
    tip: '來自法國中央高原，流向吉隆德，形成右岸產區的天然邊界，黏土石灰岩地形由此發展。'
  },
  {
    filename: 'La Gironde.geojson',
    name: '吉隆德河口',
    nameEn: 'Gironde Estuary',
    color: '#6A1B9A',
    width: 5,
    labelLng: -0.82,
    labelLat: 45.30,
    tip: '歐洲最大河口，由加龍河與多爾多涅河匯合形成，直通大西洋，調節整個產區微氣候。'
  }
]

// ── 支流（細線顯示）
const MINOR_RIVERS = [
  { filename: "L'Isle.geojson",    name: "伊勒河 (L'Isle)" },
  { filename: 'Le Ciron.geojson',  name: '希隆河 (Ciron)'  }
]

// ── 三河匯流點（Bec d'Ambès）
const CONFLUENCE = { lng: -0.535, lat: 45.03 }

const onMapReady = async (map) => {
  const markers = []

  try {
    // 1. 清理舊圖層 / 來源
    ['rivers-glow', 'rivers-lines', 'rivers-labels', 'rivers-minor'].forEach(id => {
      if (map.getLayer(id)) map.removeLayer(id)
    })
    ;['rivers-src', 'rivers-minor-src'].forEach(id => {
      if (map.getSource(id)) map.removeSource(id)
    })

    // 2. 通用 GeoJSON 載入器（MultiLineString → Features）
    const loadFeatures = async (riverList) => {
      const features = []
      for (const river of riverList) {
        try {
          const res = await fetch(`/geojson/Rivers/${river.filename}`)
          if (!res.ok) continue
          const geo = await res.json()
          if (geo.type === 'MultiLineString' && Array.isArray(geo.coordinates)) {
            geo.coordinates.forEach(coords => {
              features.push({
                type: 'Feature',
                properties: { ...river },
                geometry: { type: 'LineString', coordinates: coords }
              })
            })
          }
        } catch (e) {
          console.warn('[SlideRiversSystem] Failed:', river.filename, e)
        }
      }
      return { type: 'FeatureCollection', features }
    }

    // 3. 主河圖層
    const mainGeo = await loadFeatures(MAIN_RIVERS)
    map.addSource('rivers-src', { type: 'geojson', data: mainGeo })

    // 光暈層
    map.addLayer({
      id: 'rivers-glow',
      type: 'line',
      source: 'rivers-src',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': ['get', 'color'],
        'line-opacity': 0.28,
        'line-blur': 5,
        'line-width': ['*', ['get', 'width'], 3.5]
      }
    })

    // 主線
    map.addLayer({
      id: 'rivers-lines',
      type: 'line',
      source: 'rivers-src',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': ['interpolate', ['linear'], ['zoom'],
          7, ['get', 'width'],
          11, ['*', ['get', 'width'], 2]
        ],
        'line-opacity': 0.92
      }
    })

    // 沿線文字標籤
    map.addLayer({
      id: 'rivers-labels',
      type: 'symbol',
      source: 'rivers-src',
      layout: {
        'text-field': ['get', 'name'],
        'text-size': 13,
        'symbol-placement': 'line',
        'symbol-spacing': 300,
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-rotation-alignment': 'map',
        'text-pitch-alignment': 'viewport'
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': ['get', 'color'],
        'text-halo-width': 2.5
      }
    })

    // 4. 支流圖層（細淡線）
    const minorGeo = await loadFeatures(MINOR_RIVERS)
    map.addSource('rivers-minor-src', { type: 'geojson', data: minorGeo })
    map.addLayer({
      id: 'rivers-minor',
      type: 'line',
      source: 'rivers-minor-src',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: { 'line-color': '#90A4AE', 'line-width': 1.5, 'line-opacity': 0.7 }
    })

    // 5. 三條主河浮動標籤 Marker
    const makeLabelEl = (river) => {
      const el = document.createElement('div')
      el.innerHTML = `
        <div style="
          background:${river.color};color:white;
          padding:5px 10px;border-radius:8px;
          font-size:13px;font-weight:bold;
          box-shadow:0 2px 8px rgba(0,0,0,0.55);
          white-space:nowrap;pointer-events:none;
          line-height:1.35;text-align:center;
        ">
          🌊 ${river.name}
          <div style="font-size:10px;font-weight:normal;opacity:0.85;">${river.nameEn}</div>
        </div>`
      return el
    }

    MAIN_RIVERS.forEach(river => {
      const m = new mapboxgl.Marker({ element: makeLabelEl(river), anchor: 'center' })
        .setLngLat([river.labelLng, river.labelLat])
        .addTo(map)
      markers.push(m)
    })

    // 6. 三河匯流點 Marker（可點擊展開說明）
    const cfEl = document.createElement('div')
    cfEl.innerHTML = `
      <div style="
        background:linear-gradient(135deg,#1565C0 0%,#2E7D32 100%);
        color:white;padding:6px 12px;border-radius:20px;
        font-size:12px;font-weight:bold;
        box-shadow:0 2px 10px rgba(0,0,0,0.65);
        white-space:nowrap;text-align:center;
        border:2px solid rgba(255,255,255,0.8);cursor:default;
      ">
        🔀 三河匯流點
        <div style="font-size:9px;font-weight:normal;opacity:0.85;">Bec d'Ambès</div>
      </div>`
    const cfMarker = new mapboxgl.Marker({ element: cfEl, anchor: 'center' })
      .setLngLat([CONFLUENCE.lng, CONFLUENCE.lat])
      .setPopup(new mapboxgl.Popup({ offset: 22 }).setHTML(`
        <strong>三河匯流點 (Bec d'Ambès)</strong>
        <p style="margin:4px 0 0;font-size:12px;color:#555;">
          加龍河與多爾多涅河在此匯合，形成歐洲最大的河口——吉隆德河口，直通大西洋，對整個波爾多產區的微氣候起到關鍵調節作用。
        </p>`))
      .addTo(map)
    markers.push(cfMarker)

    // 7. hover popup（滑過河流線顯示說明）
    const hoverPopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
    const onHover = (e) => {
      const f = e?.features?.[0]
      if (!f) return
      map.getCanvas().style.cursor = 'pointer'
      hoverPopup.setLngLat(e.lngLat)
        .setHTML(`<strong>${f.properties.name}</strong><div style="font-size:11px;color:#555;margin-top:3px;">${f.properties.tip || ''}</div>`)
        .addTo(map)
    }
    const onLeave = () => { map.getCanvas().style.cursor = ''; hoverPopup.remove() }
    map.on('mousemove', 'rivers-lines', onHover)
    map.on('mouseleave', 'rivers-lines', onLeave)

    // 8. 調整視角覆蓋整個三河流域
    map.fitBounds(
      [[-1.35, 44.35], [0.35, 45.65]],
      { padding: { top: 40, bottom: 40, left: 30, right: 30 }, duration: 700 }
    )

  } catch (e) {
    console.warn('[SlideRiversSystem] onMapReady error:', e)
  }

  // 清理函式：離開幻燈片時移除所有 Marker
  return () => {
    markers.forEach(m => m.remove())
    markers.length = 0
  }
}
</script>

<style scoped>
.slide-rivers { display: grid; grid-template-columns: 1fr 1.1fr; gap: 24px; align-items: stretch; min-height: 560px; }
.col.left { overflow: auto; }
.col.right { min-height: 560px; }
.title { margin: 0 0 12px; }
.content :deep(p) { margin: 0 0 8px; }
@media (max-width: 1024px) { .slide-rivers { grid-template-columns: 1fr; } .col.right { min-height: 420px; } }
</style>
