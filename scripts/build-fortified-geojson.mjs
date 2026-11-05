// 由站內既有課程的邊界檔，合成強化酒專論地圖用的 geojson（public/fortified/fortified_regions.geojson）
// 用法：node scripts/build-fortified-geojson.mjs
// 說明：不連網；只讀 public/ 底下既有檔案，簡化後輸出。沒有邊界資料的產區（Commandaria 等）維持代表點。
import fs from 'node:fs'
import path from 'node:path'
import * as turf from '@turf/turf'

const PUB = path.resolve('public')
const OUT = path.join(PUB, 'fortified', 'fortified_regions.geojson')
const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(PUB, rel), 'utf8'))
const polysOf = (fc) => {
  if (fc.type === 'FeatureCollection') return fc.features.filter(f => f.geometry && /Polygon/.test(f.geometry.type))
  if (fc.type === 'Feature') return fc.geometry && /Polygon/.test(fc.geometry.type) ? [fc] : []
  if (/Polygon/.test(fc.type || '')) return [{ type: 'Feature', properties: {}, geometry: fc }]
  return []
}
const TOL = 0.001
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
const TOL_BY_ID = { rivesaltes: 0.004, madeira: 0.004, douro: 0.01, montilla: 0.004, malaga: 0.004, rutherglen: 0.004, marsala: 0.004 }

// approx: true ＝ 近似範圍，非該產區的專屬官方邊界（例：Douro／Madeira／Setúbal 取自 NUTS3＋GADM 合成的 DOC 區域）
const SOURCES = {
  'jerez':      [{ file: 'spain/geojson/appellations/jerez-manzanilla.geojson', filter: p => p.ZON_DS_NOM === 'Jerez-Xeres-Sherry' }],
  'sanlucar':   [{ file: 'spain/geojson/appellations/jerez-manzanilla.geojson', filter: p => /Manzanilla/i.test(p.ZON_DS_NOM || '') }],
  'montilla':   [{ file: 'spain/spain-wine-regions.geojson', filter: p => p.ZON_DS_NOM === 'Montilla-Moriles' }],
  'malaga':     [{ file: 'spain/spain-wine-regions.geojson', filter: p => p.ZON_DS_NOM === 'Málaga' }],
  'douro':      [{ file: 'portugal/doc_regions.geojson', filter: p => p.name === 'Douro', approx: true }],
  'madeira':    [{ file: 'portugal/doc_regions.geojson', filter: p => p.name === 'Madeira', approx: true }],
  'setubal':    [{ file: 'portugal/doc_regions.geojson', filter: p => p.name === 'Setúbal', approx: true }],
  'banyuls':    [{ file: 'languedoc/geojson/banyuls.geojson' }],
  'maury':      [{ file: 'languedoc/geojson/maury.geojson' }],
  'rivesaltes': [{ file: 'languedoc/geojson/rivesaltes.geojson' }],
  'beaumes':    [{ file: 'rhone/rhone_pdo.geojson', filter: p => p.name === 'Muscat de Beaumes-de-Venise' }],
  'rasteau':    [{ file: 'rhone/rhone_pdo.geojson', filter: p => p.name === 'Rasteau' }],
  'rutherglen': [{ file: 'australia/australia-wine-regions.geojson', filter: p => p.GI_NAME === 'Rutherglen' && p.GI_TYPE === 'region' }],
  'marsala':    [{ file: 'italy/regions/sicily/geojson/DOC/Marsala DOC.geojson' }]
}

const cache = new Map()
const load = (rel) => { if (!cache.has(rel)) cache.set(rel, readJson(rel)); return cache.get(rel) }
const out = []
for (const [id, srcs] of Object.entries(SOURCES)) {
  let polys = [], approx = false
  const used = []
  for (const s of srcs) {
    let fs_ = []
    try { fs_ = polysOf(load(s.file)) } catch { console.warn(`[skip] ${id}: 讀不到 ${s.file}`); continue }
    if (s.filter) fs_ = fs_.filter(f => s.filter(f.properties || {}))
    if (!fs_.length) { console.warn(`[skip] ${id}: ${s.file} 沒有符合的 feature`); continue }
    if (s.approx) approx = true
    used.push(s.file); polys.push(...fs_)
  }
  if (!polys.length) continue
  polys = polys.map(f => simplifyGeom(f.geometry, TOL_BY_ID[id] ?? TOL)).filter(Boolean)
  if (!polys.length) { console.warn(`[skip] ${id}: 簡化後無有效多邊形`); continue }
  let merged
  try { merged = polys.length === 1 ? polys[0] : turf.union(turf.featureCollection(polys)) }
  catch (e) { console.warn(`[warn] ${id}: union 失敗，改用 combine（${e.message}）`); merged = turf.combine(turf.featureCollection(polys)).features[0] }
  { const again = simplifyGeom(merged.geometry, (TOL_BY_ID[id] ?? TOL) * 1.5); if (again) merged = again }
  merged = turf.truncate(merged, { precision: 4, coordinates: 2, mutate: true })
  merged.properties = { id, boundary: approx ? 'approx' : 'existing', sources: [...new Set(used)] }
  out.push(merged)
  console.log(`${id}: ${polys.length} → ${merged.geometry.type}`)
}
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify({ type: 'FeatureCollection', features: out }))
console.log(`寫入 ${OUT}（${(fs.statSync(OUT).size / 1024).toFixed(0)} KB，${out.length} 個產區）`)
