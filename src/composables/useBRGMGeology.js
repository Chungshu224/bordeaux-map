/**
 * useBRGMGeology.js
 * 共用 composable — 法國 BRGM 地質圖（LITHO_1M_SIMPLIFIEE）
 * WMS raster 圖層 + WFS 點擊查詢（GML 解析）
 * 授權：BRGM Open Data (Etalab Open License)
 */
import { ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import * as turf from '@turf/turf'

// ── 法語地質描述 → 中文對應 ──────────────────────────────────────────
const DESCR_MAP = [
  { match: ['calcaire', 'craie', 'calcschiste'],    zh: '石灰岩', icon: '🪨', cat: '石灰岩質', wine: '石灰岩富含鈣質，有助葡萄保留天然酸度，賦予白葡萄酒礦物感，勃根地、香檳、羅亞爾河的核心土壤。' },
  { match: ['granite', 'granit', 'pegmatite'],       zh: '花崗岩', icon: '🗿', cat: '深成岩',   wine: '花崗岩排水優良，貧瘠而礦物質豐富，有助葡萄根系深入尋找養分，產出結構堅實、具礦物張力的葡萄酒。' },
  { match: ['basalte', 'andésite', 'andésite', 'trachyte', 'phonolite', 'volcanique', 'volcan'],
                                                     zh: '火山岩', icon: '🌋', cat: '火山岩',   wine: '火山岩土壤富含礦物質，賦予葡萄酒獨特的煙燻感和火山礦石風味。' },
  { match: ['marne', 'marneux'],                     zh: '泥灰岩', icon: '🟤', cat: '泥灰岩質', wine: '泥灰岩混合石灰石與黏土，保水性適中，是波爾多右岸和勃根地金丘的代表性土壤。' },
  { match: ['argile', 'argileux', 'argilo'],         zh: '黏土', icon: '🟫', cat: '黏土質',   wine: '黏土保水性強，梅洛（Merlot）在黏土上表現特別突出，造就波爾多右岸的豐潤風格。' },
  { match: ['alluvion', 'alluvions'],                zh: '沖積土', icon: '💧', cat: '沖積物',  wine: '河流沖積土含礫石和細沙混合，波爾多梅多克的礫石沖積土是卡本內蘇維翁（Cabernet Sauvignon）的最佳床土。' },
  { match: ['gravel', 'graves', 'galet', 'galets', 'gravelle'],
                                                     zh: '礫石土', icon: '⚪', cat: '礫石質',  wine: '礫石土壤白天吸熱、夜間散熱，有助葡萄均勻成熟，波爾多 Graves 產區以此得名。' },
  { match: ['sable', 'sableux', 'grès', 'gres', 'gréseux'],
                                                     zh: '砂岩/砂土', icon: '🏜️', cat: '砂質',  wine: '砂質土壤排水迅速，賦予葡萄酒輕盈、細膩的口感，也常是釀製輕柔紅酒的良地。' },
  { match: ['schiste', 'phyllite', 'ardoise'],       zh: '片岩/板岩', icon: '💎', cat: '變質岩', wine: '片岩保溫性好，幫助葡萄在涼爽地區積蓄熱能，羅亞爾河穆斯卡德（Muscadet）的黃金土壤。' },
  { match: ['gneiss', 'migmatite', 'leptynite'],     zh: '片麻岩', icon: '💎', cat: '變質岩',  wine: '片麻岩礦物組成豐富，賦予葡萄酒精緻的礦物感與複雜度。' },
  { match: ['dolomie', 'dolomitique', 'dolomitisé'], zh: '白雲岩', icon: '🪨', cat: '石灰岩質', wine: '白雲岩含鎂質石灰石，土壤保水性好，能釀出質地豐厚的葡萄酒。' },
  { match: ['colluvion', 'colluvions', 'colluvio'],  zh: '坡積物', icon: '⛰️', cat: '碎屑物',  wine: '坡積物由山坡沖刷堆積而成，土質多樣，礦物組成隨地而異。' },
  { match: ['limon', 'loess', 'lœss'],               zh: '黃土/粉砂', icon: '🟡', cat: '細粒沉積', wine: '黃土由風力搬運的細粉砂組成，保水性好，適合多種品種生長。' },
  { match: ['tourbe', 'tourbeux'],                   zh: '泥炭土', icon: '🌿', cat: '有機土',  wine: '泥炭土富含有機質，但酸性較高，葡萄種植少見。' },
]

function translateBRGM(descr, type) {
  const d = (descr || '').toLowerCase()
  for (const entry of DESCR_MAP) {
    if (entry.match.some(k => d.includes(k))) {
      return entry
    }
  }
  // 回退到 TYPE 分類
  const t = (type || '').toLowerCase()
  if (t.includes('magmatique') || t.includes('volcanique')) return { zh: '火成岩', icon: '🌋', cat: '火成岩', wine: '' }
  if (t.includes('sédimentaire') || t.includes('sedimentaire')) return { zh: '沉積岩', icon: '📚', cat: '沉積岩', wine: '' }
  if (t.includes('métamorphique') || t.includes('metamorphique')) return { zh: '變質岩', icon: '💎', cat: '變質岩', wine: '' }
  return { zh: descr || '地質岩層', icon: '🗺️', cat: type || '', wine: '' }
}

function getXmlValue(xmlDoc, tagName) {
  // 依序嘗試有 namespace 和無 namespace
  return (
    xmlDoc.getElementsByTagNameNS('http://mapserver.gis.umn.edu/mapserver', tagName)[0]?.textContent?.trim() ||
    xmlDoc.querySelector(tagName)?.textContent?.trim() ||
    ''
  )
}

function renderBRGMPopupHTML(descr, type, codeGeol) {
  const info = translateBRGM(descr, type)
  return `
    <div class="brgm-geology-popup">
      <div class="brgm-popup-header">
        <span class="brgm-type-badge">${info.icon} ${info.zh}</span>
        ${codeGeol ? `<span class="brgm-popup-code">CODE ${codeGeol}</span>` : ''}
      </div>
      ${info.cat ? `<div class="brgm-popup-cat">${info.cat}</div>` : ''}
      ${descr ? `<div class="brgm-popup-descr">${descr}</div>` : ''}
      ${type ? `<div class="brgm-popup-type">類型：${type}</div>` : ''}
      ${info.wine ? `<div class="brgm-popup-wine">${info.wine}</div>` : ''}
      <div class="brgm-popup-footer">© BRGM Géologie (Etalab OL)</div>
    </div>
  `
}

// ── WGS84 (lng/lat) → EPSG:3857 Web Mercator ────────────────────────
function lngLatToWebMercator(lng, lat) {
  const x = lng * 20037508.34 / 180
  const latRad = lat * Math.PI / 180
  const y = Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * 20037508.34 / Math.PI
  return [x, y]
}

// ── Composable 工廠函數 ──────────────────────────────────────────────
export function useBRGMGeology() {
  const brgmEnabled = ref(false)
  const brgmOpacity = ref(0.15)
  let brgmPopup = null
  let brgmClickRegistered = false

  // ── 遮罩：以 GeoJSON 邊界反轉遮蓋，只顯示邊界內的地質圖 ──────────
  function applyClipMask(map, geojson) {
    if (!map || !geojson) return
    let maskData
    try { maskData = turf.mask(geojson) } catch (e) {
      console.warn('[BRGM] turf.mask failed:', e); return
    }
    if (map.getSource('brgm-clip-src')) {
      map.getSource('brgm-clip-src').setData(maskData)
      if (map.getLayer('brgm-clip-mask')) map.setLayoutProperty('brgm-clip-mask', 'visibility', 'visible')
    } else {
      map.addSource('brgm-clip-src', { type: 'geojson', data: maskData })
      map.addLayer({
        id: 'brgm-clip-mask',
        type: 'fill',
        source: 'brgm-clip-src',
        paint: { 'fill-color': '#f5f1eb', 'fill-opacity': 0.92 }
      })
    }
    // WMS 圖層要可見
    if (map.getLayer('brgm-geology-layer'))
      map.setLayoutProperty('brgm-geology-layer', 'visibility', 'visible')
  }

  function hideClipMask(map) {
    if (!map) return
    if (map.getLayer('brgm-clip-mask')) map.setLayoutProperty('brgm-clip-mask', 'visibility', 'none')
    if (map.getLayer('brgm-geology-layer')) map.setLayoutProperty('brgm-geology-layer', 'visibility', 'none')
  }

  function removeClipMask(map) {
    if (!map) return
    if (map.getLayer('brgm-clip-mask')) map.removeLayer('brgm-clip-mask')
    if (map.getSource('brgm-clip-src')) map.removeSource('brgm-clip-src')
  }

  // ── 公開方法：由外部傳入目前選取的 AOC GeoJSON ────────────────────
  // geojson = null 時隱藏地質圖（無選取）
  function updateBRGMClip(map, geojson) {
    if (!map || !brgmEnabled.value) return
    if (!geojson) { hideClipMask(map); return }
    applyClipMask(map, geojson)
  }

  async function loadBRGMLayer(map) {
    if (!map) return
    if (map.getLayer('brgm-geology-layer')) return
    if (!map.getSource('brgm-geology-wms')) {
      map.addSource('brgm-geology-wms', {
        type: 'raster',
        tiles: [
          '/brgm/geologie' +
          '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap' +
          '&LAYERS=LITHO_1M_SIMPLIFIEE' +
          '&CRS=EPSG:3857&BBOX={bbox-epsg-3857}' +
          '&WIDTH=256&HEIGHT=256&FORMAT=image/png&TRANSPARENT=TRUE&STYLES='
        ],
        tileSize: 256,
        attribution: '© BRGM Géologie (Etalab Open License)'
      })
    }
    // 初始隱藏，等待 updateBRGMClip 傳入選取的 AOC GeoJSON 後才顯示
    map.addLayer({
      id: 'brgm-geology-layer',
      type: 'raster',
      source: 'brgm-geology-wms',
      layout: { visibility: 'none' },
      paint: { 'raster-opacity': brgmOpacity.value }
    })

    if (!brgmClickRegistered) {
      map.on('click', async (e) => {
        if (!brgmEnabled.value) return
        if (map.getLayoutProperty('brgm-geology-layer', 'visibility') === 'none') return
        const { lng, lat } = e.lngLat
        try {
          const [mx, my] = lngLatToWebMercator(lng, lat)
          const d = 2000
          const bbox = `${mx - d},${my - d},${mx + d},${my + d}`
          const url =
            '/brgm/geologie' +
            '?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo' +
            '&LAYERS=LITHO_1M_SIMPLIFIEE' +
            '&QUERY_LAYERS=LITHO_1M_SIMPLIFIEE' +
            '&INFO_FORMAT=application/vnd.ogc.gml' +
            '&CRS=EPSG:3857' +
            `&BBOX=${bbox}` +
            '&WIDTH=101&HEIGHT=101&I=50&J=50' +
            '&FEATURE_COUNT=1'
          const res = await fetch(url)
          if (!res.ok) return
          const xmlText = await res.text()
          const parser = new DOMParser()
          const xmlDoc = parser.parseFromString(xmlText, 'application/xml')
          const descr = getXmlValue(xmlDoc, 'DESCR')
          const type = getXmlValue(xmlDoc, 'TYPE')
          const codeGeol = getXmlValue(xmlDoc, 'CODE_GEOL')
          if (!descr && !type) return
          const html = renderBRGMPopupHTML(descr, type, codeGeol)
          if (brgmPopup) brgmPopup.remove()
          brgmPopup = new mapboxgl.Popup({
            className: 'brgm-popup-wrap',
            maxWidth: '320px',
            closeButton: true
          })
            .setLngLat([lng, lat])
            .setHTML(html)
            .addTo(map)
        } catch (err) {
          console.warn('[BRGM] identify error:', err)
        }
      })
      brgmClickRegistered = true
    }
  }

  function removeBRGMLayer(map) {
    if (!map) return
    if (brgmPopup) { brgmPopup.remove(); brgmPopup = null }
    removeClipMask(map)
    if (map.getLayer('brgm-geology-layer')) map.removeLayer('brgm-geology-layer')
    if (map.getSource('brgm-geology-wms')) map.removeSource('brgm-geology-wms')
  }

  async function toggleBRGM(map) {
    if (!map) return
    if (!brgmEnabled.value) {
      brgmEnabled.value = true
      await loadBRGMLayer(map)
    } else {
      brgmEnabled.value = false
      if (brgmPopup) { brgmPopup.remove(); brgmPopup = null }
      removeClipMask(map)
      if (map.getLayer('brgm-geology-layer')) map.removeLayer('brgm-geology-layer')
    }
  }

  function resetBRGM(map) {
    brgmEnabled.value = false
    brgmClickRegistered = false
    if (brgmPopup) { brgmPopup.remove(); brgmPopup = null }
    if (!map) return
    removeClipMask(map)
    if (map.getLayer('brgm-geology-layer')) map.removeLayer('brgm-geology-layer')
    if (map.getSource('brgm-geology-wms')) map.removeSource('brgm-geology-wms')
  }

  function updateBRGMOpacity(map) {
    if (!map || !map.getLayer('brgm-geology-layer')) return
    map.setPaintProperty('brgm-geology-layer', 'raster-opacity', brgmOpacity.value)
  }

  return {
    brgmEnabled,
    brgmOpacity,
    loadBRGMLayer,
    removeBRGMLayer,
    toggleBRGM,
    resetBRGM,
    updateBRGMOpacity,
    updateBRGMClip,
  }
}

// ── 共用 Popup 樣式（全域注入，各地圖共用） ──────────────────────────
export const BRGM_POPUP_STYLES = `
.brgm-popup-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  min-width: 240px;
}
.brgm-geology-popup {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  color: #222;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}
.brgm-popup-header {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #2d5a27 0%, #4a7c3f 100%);
  padding: 12px 14px 10px;
  color: #fff;
}
.brgm-type-badge {
  font-size: 14px;
  font-weight: 700;
  flex: 1;
}
.brgm-popup-code {
  font-size: 10px;
  background: rgba(255,255,255,0.25);
  padding: 2px 7px;
  border-radius: 8px;
  font-weight: 600;
}
.brgm-popup-cat {
  font-size: 11px;
  color: #4a7c3f;
  font-weight: 700;
  padding: 6px 14px 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.brgm-popup-descr {
  font-size: 12px;
  color: #555;
  font-style: italic;
  padding: 4px 14px;
}
.brgm-popup-type {
  font-size: 11px;
  color: #888;
  padding: 2px 14px;
}
.brgm-popup-wine {
  font-size: 12px;
  color: #444;
  line-height: 1.5;
  padding: 8px 14px;
  background: #f6f9f4;
  border-top: 1px solid #e8f0e5;
  margin-top: 4px;
}
.brgm-popup-footer {
  font-size: 10px;
  color: #aaa;
  padding: 5px 14px 8px;
  border-top: 1px solid #eee;
}
`
