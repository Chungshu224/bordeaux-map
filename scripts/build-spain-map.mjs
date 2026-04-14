import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT  = join(__dirname, '..')
const OUT   = join(ROOT, 'public', 'spain')
const SHP_PATH     = 'C:/Users/Chungshu/Downloads/calidaddiferenciada_vinos/CalidadDiferenciada_Vinos.shp'
const PROVINCE_DIR = 'C:/Users/Chungshu/Downloads/GeoJson_SPAIN-master/GeoJson_SPAIN-master/Spain'
const SKIP_FILES   = new Set(['spain-provinces.geojson', 'spain.geojson', 'canary-islands.json'])

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

// 1. 合併省份 GeoJSON
console.log('📦 合併省份 GeoJSON…')
const files = readdirSync(PROVINCE_DIR).filter(
  f => (f.endsWith('.geojson') || f.endsWith('.json')) && !SKIP_FILES.has(f)
)
const mergedFeatures = []
for (const file of files) {
  try {
    const raw  = readFileSync(join(PROVINCE_DIR, file), 'utf-8')
    const data = JSON.parse(raw)
    const provName = file.replace(/\.(geo)?json$/i, '').replace(/_/g, ' ')
    const features = data.features
      ? data.features.map(f => ({ ...f, properties: { ...(f.properties || {}), province: provName } }))
      : [{ type:'Feature', geometry: data.geometry ?? data, properties: { province: provName } }]
    mergedFeatures.push(...features)
  } catch (e) { console.warn(`  ⚠️  跳過 ${file}: ${e.message}`) }
}
writeFileSync(join(OUT, 'spain-provinces.geojson'), JSON.stringify({ type:'FeatureCollection', features:mergedFeatures }))
console.log(`  ✅ ${mergedFeatures.length} 個省份 feature → spain-provinces.geojson`)

// 2. 轉換 SHP → GeoJSON
console.log('🗺  轉換 SHP 葡萄酒產區…')
const shapefile = await import('shapefile')
const source = await shapefile.open(SHP_PATH)
const wineFeatures = []
let record
while (!(record = await source.read()).done) {
  const f = record.value
  if (wineFeatures.length === 0) {
    console.log('  📋 SHP 屬性欄位：', Object.keys(f.properties || {}).join(', '))
  }
  wineFeatures.push(f)
}
writeFileSync(join(OUT, 'spain-wine-regions.geojson'), JSON.stringify({ type:'FeatureCollection', features:wineFeatures }))
console.log(`  ✅ ${wineFeatures.length} 個葡萄酒產區 → spain-wine-regions.geojson`)

// 3. 印出屬性供建立 appellations.json
console.log('\n📋 所有產區屬性（前 5 筆）：')
wineFeatures.slice(0, 5).forEach((f, i) => console.log(` ${i+1}.`, JSON.stringify(f.properties)))
console.log(`\n（共 ${wineFeatures.length} 筆）`)
