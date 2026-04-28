/**
 * useGeologyPopup.js
 * 共用 — 統一中文土壤介紹 popup（適用於所有產區地圖）
 *
 * 提供：
 *   - GEO_DESC               主要地質類型 → 中文 + 葡萄酒文化說明
 *   - GEO_DEFAULT            預設 fallback（混合沉積土壤）
 *   - getGeoDesc(...)        多關鍵字辨識（中、英、法皆可）
 *   - translateLith(en)      英文岩石名 → 中文
 *   - translateAge(en)       英文地質年代 → 中文
 *   - renderGeologyPopupHTML(opts) 統一渲染 popup
 *   - useRegionGeologyPopup(map, regionFeatureRef, enabledRef)
 *       共用點擊命中測試 + 切換產區 mask 行為（搭配 turf）
 */
import * as turf from '@turf/turf'
import mapboxgl from 'mapbox-gl'

// ── 主要地質類型 → 中文 + 葡萄酒文化說明 ─────────────────────────────
export const GEO_DESC = {
  alluvial: {
    zh: '沖積礫石／砂礫地層', icon: '🪨',
    wine: '河流沖積礫石層排水極佳，逼使葡萄根系深扎，常見於 Bordeaux Médoc、Marlborough Wairau Valley 與 Hawke\'s Bay Gimblett Gravels，能造就濃縮風味的 Cabernet Sauvignon、Sauvignon Blanc 與 Syrah。'
  },
  loess: {
    zh: '黃土層（Loess）', icon: '🌾',
    wine: '由風力搬運的細粉砂組成，質地疏鬆而保水適中，常與底部礫石形成優良組合，賦予葡萄酒清晰的礦物感與細膩芬芳。'
  },
  schist: {
    zh: '片岩（Schist）', icon: '💎',
    wine: '雲母片岩鬆散易碎、熱容量高，白天儲熱、夜晚緩慢釋放，是 Central Otago Pinot Noir、Loire Muscadet 等酒款保留高酸與礦物張力的關鍵。'
  },
  limestone: {
    zh: '石灰岩／鈣質岩層', icon: '🏔️',
    wine: '富含鈣質的石灰岩有助葡萄保留天然酸度，是 Bourgogne Côte d\'Or、Champagne、Loire Sancerre、Waipara Valley 等優雅酒款的核心土壤。'
  },
  marl: {
    zh: '泥灰岩（Marl）', icon: '🟤',
    wine: '泥灰岩混合石灰石與黏土，保水性適中，是波爾多右岸 Saint-Émilion 與 Bourgogne 金丘的代表性土壤，賦予酒款飽滿與細緻並存的結構。'
  },
  basalt: {
    zh: '玄武岩（火山熔岩）', icon: '🌋',
    wine: '玄武岩富含鐵、鎂礦物質，排水佳且保溫，常見於 Auckland 火山丘（Waiheke Island、Kumeu）、Sicilia Etna 與 Oregon Willamette，酒款通常飽滿而結構良好。'
  },
  granite: {
    zh: '花崗岩／侵入岩', icon: '⛰️',
    wine: '花崗岩排水優良、礦物質豐富而貧瘠，造就結構堅實、具礦物張力的酒款，Beaujolais Cru、Northern Rhône、Galicia 等地皆為代表。'
  },
  sandstone: {
    zh: '砂岩／粉砂岩', icon: '🏜️',
    wine: '砂質土壤質地鬆疏、排水迅速，賦予葡萄酒輕盈、細膩的口感；與黃土或黏土互層時可平衡保水與排水，適合多種葡萄品種。'
  },
  greywacke: {
    zh: '灰瓦克岩（硬砂岩）', icon: '🗿',
    wine: '紐西蘭最常見的基岩，構成南阿爾卑斯山骨架。河床圓礫多源自此岩，葡萄根系深達此層常帶出鮮明的礦物鹹感，Marlborough 著名酒莊 Greywacke 即以此命名。'
  },
  clay: {
    zh: '黏土／泥岩', icon: '🟫',
    wine: '黏土保水性強，是 Merlot 在 Bordeaux Pomerol、Saint-Émilion 表現出色的關鍵；Hawke\'s Bay 與 Gisborne 部分黏土區則造就豐腴圓潤的 Chardonnay。'
  },
  volcanic: {
    zh: '火山灰／火山碎屑岩', icon: '🌋',
    wine: '火山灰土壤質地輕鬆、排水佳，富含鐵、鉀等微量元素，賦予葡萄酒獨特的煙燻感與火山礦石風味，Etna、Santorini、Tokaj、Auckland 為知名產區。'
  },
  gneiss: {
    zh: '片麻岩', icon: '💎',
    wine: '片麻岩礦物組成豐富，賦予葡萄酒精緻的礦物感與複雜度，常見於 Wachau、Alsace 與 Galicia 等古老地塊。'
  },
  dolomite: {
    zh: '白雲岩', icon: '🪨',
    wine: '白雲岩含鎂質石灰石，土壤保水性好，能釀出質地豐厚的葡萄酒，Alto Adige、Friuli 部分產區具代表性。'
  },
  colluvium: {
    zh: '坡積物', icon: '⛰️',
    wine: '由山坡沖刷堆積而成，土質多樣，礦物組成隨坡向地點而異，常為山坡葡萄園的基底。'
  },
  peat: {
    zh: '泥炭土', icon: '🌿',
    wine: '泥炭土富含有機質但酸性偏高，葡萄種植較少見。'
  },
  shale: {
    zh: '頁岩', icon: '📚',
    wine: '頁岩易風化、保溫好，賦予葡萄酒煙燻礦物感，常見於 Côte-Rôtie、Priorat 與 Mosel。'
  },
  metamorphic: {
    zh: '變質岩', icon: '💎',
    wine: '變質岩礦物豐富，賦予葡萄酒精緻的礦物感與複雜度。'
  },
  sedimentary: {
    zh: '沉積岩', icon: '📚',
    wine: '沉積岩層理分明，常為石灰岩、砂岩、泥岩交替，適合多種品種。'
  },
  igneous: {
    zh: '火成岩', icon: '🌋',
    wine: '火成岩富含礦物質，有助葡萄酒展現獨特的礦物風味與深度。'
  },
}

// 預設 fallback —— 任何位置點擊都至少有中文介紹
export const GEO_DEFAULT = {
  zh: '混合沉積土壤', icon: '🌱',
  wine: '此處為混合型沉積土壤，通常由風化基岩、河流沖積與細粒沉積物交織而成，排水與保水性介於砂質與黏質之間，能支持多元葡萄品種生長，並賦予葡萄酒柔順的果香與適度的礦物層次。'
}

// 多語關鍵字辨識（英、法、義、西、葡、德常見地質詞）
export function getGeoDesc(...inputs) {
  const combined = inputs.filter(Boolean).join(' ').toLowerCase()
  if (!combined) return null
  // 變質
  if (/schist|schistose|schiste|micaschiste|esquisto|scisto/.test(combined))         return GEO_DESC.schist
  if (/gneiss|migmatite|leptynite|gneis/.test(combined))                              return GEO_DESC.gneiss
  // 沉積（細粒）
  if (/loess|loessial|lœss|löss|limon/.test(combined))                                return GEO_DESC.loess
  if (/marn|marl|marne|marga|mergel/.test(combined))                                  return GEO_DESC.marl
  if (/limestone|calcareous|calcaire|caliza|calcari|kalk|calcschiste|chalk|craie/.test(combined)) return GEO_DESC.limestone
  if (/dolomi|dolostone/.test(combined))                                              return GEO_DESC.dolomite
  if (/shale|argillite|ardoise|pizarra|scisti argillosi/.test(combined))              return GEO_DESC.shale
  if (/clay|clayey|argile|argilo|argilla|arcilla|ton(?!e)/.test(combined))            return GEO_DESC.clay
  // 火成 / 火山
  if (/basalt|basaltic|basalte|basalto|lava|basalt-/.test(combined))                  return GEO_DESC.basalt
  if (/volcan|tephra|tuff|ignimbrite|piroclast|tuf|ash/.test(combined))               return GEO_DESC.volcanic
  if (/granite|granit|granito|granodior|diorit|gabbro|pegmatit|intrusiv/.test(combined)) return GEO_DESC.granite
  // 沖積 / 礫石
  if (/alluv|gravel|fluvial|outwash|gravier|grave\b|graves|galet|cantos|grava/.test(combined)) return GEO_DESC.alluvial
  if (/colluv/.test(combined))                                                        return GEO_DESC.colluvium
  // 砂岩
  if (/sandstone|grès|gres|gréseux|arenisca|arenaria|sand|sable|sabbia|silt|siltstone|mudstone/.test(combined)) return GEO_DESC.sandstone
  // 灰瓦克岩
  if (/greywacke|graywacke|grauwacke/.test(combined))                                 return GEO_DESC.greywacke
  // 泥炭
  if (/peat|tourbe|torba|turba/.test(combined))                                       return GEO_DESC.peat
  // 大類回退
  if (/metamorph|métamorphique|metamórfic|metamorfic/.test(combined))                 return GEO_DESC.metamorphic
  if (/sedimentary|sédimentaire|sedimentari|sedimentar/.test(combined))               return GEO_DESC.sedimentary
  if (/igneous|magmatique|ígne|igneo/.test(combined))                                 return GEO_DESC.igneous
  return null
}

// ── 中文翻譯字典（岩石 / 年代）─────────────────────────────────────
const LITH_ZH = {
  'sandstone': '砂岩', 'shale': '頁岩', 'limestone': '石灰岩', 'mudstone': '泥岩',
  'siltstone': '粉砂岩', 'conglomerate': '礫岩', 'chert': '燧石岩', 'dolostone': '白雲岩',
  'dolomite': '白雲岩', 'marble': '大理岩', 'slate': '板岩', 'schist': '片岩',
  'gneiss': '片麻岩', 'phyllite': '千枚岩', 'quartzite': '石英岩',
  'granite': '花崗岩', 'granodiorite': '花崗閃長岩', 'diorite': '閃長岩',
  'gabbro': '輝長岩', 'rhyolite': '流紋岩', 'andesite': '安山岩',
  'basalt': '玄武岩', 'tuff': '凝灰岩', 'ignimbrite': '熔結凝灰岩',
  'tephra': '火山碎屑物', 'loess': '黃土',
  'alluvium': '沖積層', 'gravel': '礫石', 'sand': '砂', 'clay': '黏土',
  'silt': '粉砂', 'mud': '淤泥', 'marl': '泥灰岩',
  'greywacke': '雜砂岩', 'graywacke': '雜砂岩', 'argillite': '泥質岩',
  'mixed': '混合岩', 'undivided': '未分類', 'not reported': '未記錄',
}
const AGE_ZH = {
  'cambrian': '寒武紀', 'ordovician': '奧陶紀', 'silurian': '志留紀',
  'devonian': '泥盆紀', 'carboniferous': '石炭紀', 'permian': '二疊紀',
  'triassic': '三疊紀', 'jurassic': '侏羅紀', 'cretaceous': '白堊紀',
  'paleocene': '古新世', 'eocene': '始新世', 'oligocene': '漸新世',
  'miocene': '中新世', 'pliocene': '上新世', 'pleistocene': '更新世',
  'holocene': '全新世', 'quaternary': '第四紀', 'neogene': '新近紀',
  'paleogene': '古近紀', 'cenozoic': '新生代', 'mesozoic': '中生代',
  'paleozoic': '古生代', 'precambrian': '前寒武紀',
  'early': '早', 'middle': '中', 'late': '晚', 'upper': '晚', 'lower': '早',
}
export function translateLith(en) {
  if (!en) return ''
  let s = String(en).trim().toLowerCase()
  for (const [k, v] of Object.entries(LITH_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  return s
}
export function translateAge(en) {
  if (!en) return ''
  let s = String(en).trim()
  for (const [k, v] of Object.entries(AGE_ZH)) {
    s = s.replace(new RegExp(`\\b${k}\\b`, 'gi'), v)
  }
  return s.replace(/\s+to\s+/gi, ' 至 ').replace(/\s+and\s+/gi, ' 及 ')
}

/**
 * 統一渲染地質 popup HTML
 * @param {object} opts
 *   - lith / type / descr：原始岩性描述（任一即可，皆會用於關鍵字辨識）
 *   - age：地質年代
 *   - regionTitle：產區地圖標題（如「波爾多地質」）
 */
export function renderGeologyPopupHTML(opts = {}) {
  const { lith = '', type = '', descr = '', age = '', regionTitle = '地質資訊' } = opts
  const wineInfo = getGeoDesc(lith, type, descr) || {
    ...GEO_DEFAULT,
    zh: translateLith(lith) || translateLith(type) || GEO_DEFAULT.zh,
  }
  const displayType = wineInfo.zh
  const displayAge  = translateAge(age)
  return `
    <div class="geo-popup-unified">
      <div class="geo-popup-header">🗺️ ${regionTitle}</div>
      ${displayType ? `<div class="geo-popup-row"><span class="geo-popup-label">岩石類型</span><span class="geo-popup-val">${displayType}</span></div>` : ''}
      ${displayAge  ? `<div class="geo-popup-row"><span class="geo-popup-label">地質年代</span><span class="geo-popup-val">${displayAge}</span></div>`  : ''}
      <div class="geo-popup-wine-block">
        <div class="geo-popup-wine-title">${wineInfo.icon} ${wineInfo.zh}</div>
        <div class="geo-popup-wine-text">${wineInfo.wine}</div>
      </div>
    </div>`
}

/**
 * 共用點擊命中測試：點是否在 polygon 範圍內
 */
export function isPointInRegion(lngLat, regionFeature) {
  if (!regionFeature) return false
  try {
    const pt = turf.point([lngLat.lng, lngLat.lat])
    return turf.booleanPointInPolygon(pt, regionFeature)
  } catch (_) { return false }
}

/**
 * 把 GeoJSON FeatureCollection / Feature 合併為單一 polygon Feature
 */
export function mergeToSingleFeature(geojson) {
  if (!geojson) return null
  if (geojson.type === 'Feature') return geojson
  if (geojson.type === 'FeatureCollection' && geojson.features?.length) {
    let merged = geojson.features[0]
    for (let i = 1; i < geojson.features.length; i++) {
      try { merged = turf.union(turf.featureCollection([merged, geojson.features[i]])) } catch (_) {}
    }
    return merged
  }
  return null
}

/**
 * 統一 popup 工廠（避免重複建立同一 Popup 物件）
 * 用法：
 *   const popup = makeGeologyPopup()
 *   popup.show(map, lngLat, html)
 *   popup.close()
 */
export function makeGeologyPopup() {
  let p = null
  return {
    show(map, lngLat, html) {
      if (p) p.remove()
      p = new mapboxgl.Popup({ maxWidth: '340px', className: 'geo-popup-unified-wrap' })
        .setLngLat(lngLat).setHTML(html).addTo(map)
      return p
    },
    close() { if (p) { p.remove(); p = null } }
  }
}

// ── 共用 popup 樣式（全域注入）──────────────────────────────────────
export const GEOLOGY_POPUP_STYLES = `
.geo-popup-unified-wrap .mapboxgl-popup-content {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  min-width: 260px;
  background: linear-gradient(180deg, #1e3a2a 0%, #16291e 100%);
}
.geo-popup-unified-wrap .mapboxgl-popup-close-button {
  color: #d4f5d4; font-size: 18px; padding: 4px 8px;
}
.geo-popup-unified { color: #f5f1eb; font-family: 'Noto Sans TC', sans-serif; }
.geo-popup-header {
  background: rgba(0,0,0,0.25);
  padding: 10px 14px; font-weight: 700; font-size: 14px;
  letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.geo-popup-row {
  display: flex; padding: 8px 14px; gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 13px;
}
.geo-popup-label { color: #a8d8a8; min-width: 64px; }
.geo-popup-val   { color: #fff; flex: 1; }
.geo-popup-wine-block {
  background: rgba(255,255,255,0.06);
  margin: 10px 12px 12px; padding: 10px 12px; border-radius: 8px;
  border-left: 3px solid #6fbf73;
}
.geo-popup-wine-title { font-weight: 700; font-size: 13px; margin-bottom: 6px; color: #c8f0c8; }
.geo-popup-wine-text  { font-size: 12px; line-height: 1.6; color: #e8efe8; }
`
