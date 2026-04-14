/**
 * split-spain-provinces.mjs
 * 依自治區將 spain-provinces.geojson 分拆為獨立小檔
 * 輸出至 public/spain/provinces/{autonomiaId}.geojson
 *
 * 執行: node scripts/split-spain-provinces.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'public/spain/provinces')
mkdirSync(outDir, { recursive: true })

const geo = JSON.parse(readFileSync(join(root, 'public/spain/spain-provinces.geojson'), 'utf8'))

// ── province name → autonomiaId 對應表 ────────────────────────────
// autonomiaId 對應 public/spain/geojson/ 的檔名
const PROVINCE_TO_AUTONOMIA = {
  // Andalucía
  'Almeria':       'andalucia',
  'Cadix':         'andalucia',
  'Cordoba':       'andalucia',
  'Granada':       'andalucia',
  'Huelva':        'andalucia',
  'Jaen':          'andalucia',
  'Malaga':        'andalucia',
  'Sevilla':       'andalucia',
  'Andalucia':     'andalucia',   // autonomia-level polygon

  // Aragón
  'Huesca':        'aragon',
  'Teruel':        'aragon',
  'Zaragoza':      'aragon',
  'Aragon':        'aragon',

  // Asturias
  'Asturias':      'asturias',

  // Baleares
  'Baleares':      'baleares',

  // Canarias
  'Fuerteventura': 'canarias',
  'Gran Canaria':  'canarias',
  'Lanzarote':     'canarias',
  'Las Palmas':    'canarias',
  'Santa Cruz Tenerife': 'canarias',

  // Cantabria
  'Cantabria':     'cantabria',

  // Castilla-La Mancha
  'Albacete':      'castilla-la-mancha',
  'Ciudad Real':   'castilla-la-mancha',
  'Cuenca':        'castilla-la-mancha',
  'Guadalajara':   'castilla-la-mancha',
  'Toledo':        'castilla-la-mancha',
  'Castilla-La-Mancha': 'castilla-la-mancha',

  // Castilla y León
  'Avila':         'castilla-leon',
  'Burgos':        'castilla-leon',
  'Leon':          'castilla-leon',
  'Palencia':      'castilla-leon',
  'Salamanca':     'castilla-leon',
  'Segovia':       'castilla-leon',
  'Soria':         'castilla-leon',
  'Valladolid':    'castilla-leon',
  'Zamora':        'castilla-leon',

  // Cataluña
  'Barcelona':     'catalonia',
  'Girona':        'catalonia',
  'Lleida':        'catalonia',
  'Tarragona':     'catalonia',
  'Catalonia':     'catalonia',

  // Extremadura
  'Badajoz':       'extremadura',
  'Caceres':       'extremadura',
  'Extremadura':   'extremadura',

  // Galicia
  'Coruna':        'galicia',
  'Lugo':          'galicia',
  'Ourense':       'galicia',
  'Pontevedra':    'galicia',
  'Galicia':       'galicia',

  // Madrid
  'Madrid':        'madrid',

  // Murcia
  'Murcia':        'murcia',

  // Navarra
  'Navarre':       'navarra',

  // País Vasco
  'Alava':         'pais-vasco',
  'Biskaia':       'pais-vasco',
  'Guipuzcoa':     'pais-vasco',
  'Vizcaya':       'pais-vasco',   // duplicate name for Biskaia
  'Pais Vasco':    'pais-vasco',

  // La Rioja
  'La Rioja':      'rioja',

  // Comunitat Valenciana
  'Alicante':      'valencia',
  'Castellon':     'valencia',
  'Valence':       'valencia',

  // Ciudades autónomas / otros
  'Ceuta':         'otros',
  'Melilla':       'otros',
}

// ── 分組 ──────────────────────────────────────────────────────────
const buckets = {}   // autonomiaId → Feature[]
const unmatched = []

for (const feature of geo.features) {
  const provName = feature.properties.province || feature.properties.name || ''
  const autoId = PROVINCE_TO_AUTONOMIA[provName]
  if (!autoId) {
    unmatched.push(provName)
    continue
  }
  if (!buckets[autoId]) buckets[autoId] = []
  buckets[autoId].push(feature)
}

// ── 寫出 ─────────────────────────────────────────────────────────
let total = 0
for (const [autoId, features] of Object.entries(buckets)) {
  const outGeo = { type: 'FeatureCollection', features }
  const outPath = join(outDir, `${autoId}.geojson`)
  writeFileSync(outPath, JSON.stringify(outGeo), 'utf8')
  total += features.length
  console.log(`  ${autoId}.geojson → ${features.length} 省份`)
}

console.log(`\n完成：${Object.keys(buckets).length} 個自治區，${total} 個 feature`)
if (unmatched.length) console.log(`未對應省份：${[...new Set(unmatched)].join(', ')}`)
