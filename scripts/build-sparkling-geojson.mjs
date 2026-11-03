// 由站內既有課程的邊界檔，合成氣泡酒專論地圖用的 geojson（public/sparkling/sparkling_regions.geojson）
// 用法：node scripts/build-sparkling-geojson.mjs
// 說明：不連網；只讀 public/ 底下既有檔案，簡化後輸出。沒有邊界資料的產區（德、奧、英、Limoux、南非、阿根廷、巴西）維持代表點。
import fs from 'node:fs'
import path from 'node:path'
import * as turf from '@turf/turf'

const PUB = path.resolve('public')
const OUT = path.join(PUB, 'sparkling', 'sparkling_regions.geojson')

const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(PUB, rel), 'utf8'))
const polysOf = (fc) => {
  // 支援 FeatureCollection、Feature，以及義大利檔案使用的「裸 geometry」
  if (fc.type === 'FeatureCollection') return fc.features.filter(f => f.geometry && /Polygon/.test(f.geometry.type))
  if (fc.type === 'Feature') return fc.geometry && /Polygon/.test(fc.geometry.type) ? [fc] : []
  if (/Polygon/.test(fc.type || '')) return [{ type: 'Feature', properties: {}, geometry: fc }]
  return []
}

// 逐個多邊形簡化；簡化後退化（少於 4 點）的小塊直接丟掉
const simplifyGeom = (geom, tol = TOL) => {
  const parts = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates
  const kept = []
  for (const part of parts) {
    try {
      const s = turf.simplify(turf.polygon(part), { tolerance: tol, highQuality: false })
      if (s.geometry.coordinates[0] && s.geometry.coordinates[0].length >= 4) kept.push(s.geometry.coordinates)
    } catch { /* 退化小塊略過 */ }
  }
  return kept.length ? turf.multiPolygon(kept) : null
}

// 每個產區的來源：file（相對 public/）＋ 可選 filter(properties) ＋ boundary 精度標記
const TOL = 0.001 // 約 100 m（預設）
// 邊界很細碎的產區用較大的簡化量，控制檔案大小
const TOL_BY_ID = { 'cremant-loire': 0.008, 'cremant-bourgogne': 0.006, 'cremant-alsace': 0.005, tasmania: 0.01, marlborough: 0.005 }
const SOURCES = {
  'champagne':         [{ file: 'champagne/champagne_pdo_outline.geojson', filter: p => p.kind === 'pdo' }],
  'cremant-alsace':    [{ file: 'alsace/geojson/13-Cremant/AOC-Cremant-d-Alsace.geojson' }],
  // 以勃艮地區域 AOC 地圖近似 Crémant de Bourgogne 的範圍（非 Crémant 專屬邊界）
  'cremant-bourgogne': [{ file: 'bourgogne/geojson/AOC Bourgogne map.geojson', approx: true }],
  'cremant-loire':     [{ file: 'geojson/Loire/AnjouSaumur/Crémant-de-Loire.geojson' }],
  'die':               [{ file: 'rhone/rhone_pdo.geojson', filter: p => p.name === 'Clairette de Die' }],
  'cava':              [{ file: 'spain/spain-wine-regions.geojson', filter: p => p.ZON_DS_NOM === 'Cava' }],
  'prosecco': [
    { file: 'italy/regions/veneto/geojson/DOC/Prosecco DOC.geojson' },
    { file: 'italy/regions/friuli/geojson/DOC/Prosecco DOC.geojson' }
  ],
  'asti':              [{ file: 'italy/regions/piedmont/geojson/DOCG/Asti DOCG.geojson' }],
  'franciacorta':      [{ file: 'italy/regions/lombardy/geojson/DOCG/Franciacorta DOCG.geojson' }],
  'trentodoc':         [{ file: 'italy/regions/trentino/geojson/DOC/Trento DOC.geojson' }],
  'oltrepo':           [{ file: 'italy/regions/lombardy/geojson/DOCG/Oltrepò Pavese metodo classico DOCG.geojson' }],
  'lambrusco': [
    { file: 'italy/regions/emilia/geojson/DOC/Lambrusco di Sorbara DOC.geojson' },
    { file: 'italy/regions/emilia/geojson/DOC/Lambrusco Grasparossa di Castelvetro DOC.geojson' },
    { file: 'italy/regions/emilia/geojson/DOC/Lambrusco Salamino di Santa Croce DOC.geojson' },
    { file: 'italy/regions/lombardy/geojson/DOC/Lambrusco Mantovano DOC.geojson' }
  ],
  // Bairrada 邊界在既有資料中由 NUTS3＋GADM 近似而成，非官方 DOC 邊界
  'bairrada':          [{ file: 'portugal/doc_regions.geojson', filter: p => p.name === 'Bairrada', approx: true }],
  'tasmania':          [{ file: 'australia/australia-wine-regions.geojson', filter: p => p.GI_NAME === 'Tasmania' && p.GI_TYPE === 'region' }],
  'sparkling-shiraz':  [{ file: 'australia/australia-wine-regions.geojson', filter: p => p.GI_NAME === 'Barossa Valley' && p.GI_TYPE === 'region' }],
  'marlborough':       [{ file: 'newzealand/geojson/NewZealand/Marlborough.geojson' }],
  'california': [
    { file: 'california/california-ava-regions.geojson', filter: p => p.name === 'Anderson Valley' },
    { file: 'california/california-ava-regions.geojson', filter: p => p.name === 'Los Carneros' }
  ]
}

const cache = new Map()
const load = (rel) => { if (!cache.has(rel)) cache.set(rel, readJson(rel)); return cache.get(rel) }

const out = []
for (const [id, srcs] of Object.entries(SOURCES)) {
  let polys = []
  let approx = false
  const used = []
  for (const s of srcs) {
    let fs_ = []
    try { fs_ = polysOf(load(s.file)) } catch (e) { console.warn(`[skip] ${id}: 讀不到 ${s.file}`); continue }
    if (s.filter) fs_ = fs_.filter(f => s.filter(f.properties || {}))
    if (!fs_.length) { console.warn(`[skip] ${id}: ${s.file} 沒有符合的 feature`); continue }
    if (s.approx) approx = true
    used.push(s.file)
    polys.push(...fs_)
  }
  if (!polys.length) continue
  polys = polys.map(f => simplifyGeom(f.geometry, TOL_BY_ID[id] ?? TOL)).filter(Boolean)
  if (!polys.length) { console.warn(`[skip] ${id}: 簡化後無有效多邊形`); continue }
  let merged
  try {
    merged = polys.length === 1 ? polys[0] : turf.union(turf.featureCollection(polys))
  } catch (e) {
    console.warn(`[warn] ${id}: union 失敗，改用 combine（${e.message}）`)
    merged = turf.combine(turf.featureCollection(polys)).features[0]
  }
  // union 後再簡化一次，去掉合併產生的多餘頂點
  { const again = simplifyGeom(merged.geometry, (TOL_BY_ID[id] ?? TOL) * 1.5); if (again) merged = again }
  merged = turf.truncate(merged, { precision: 4, coordinates: 2, mutate: true })
  merged.properties = { id, boundary: approx ? 'approx' : 'existing', sources: [...new Set(used)] }
  out.push(merged)
  console.log(`${id}: ${polys.length} → ${merged.geometry.type}`)
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify({ type: 'FeatureCollection', features: out }))
console.log(`寫入 ${OUT}（${(fs.statSync(OUT).size / 1024).toFixed(0)} KB，${out.length} 個產區）`)
