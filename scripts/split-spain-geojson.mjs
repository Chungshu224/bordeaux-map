/**
 * split-spain-geojson.mjs
 * 將 spain-wine-regions.geojson 依 autonomiaId 分拆成各自治區小檔案
 * 輸出至 public/spain/geojson/{autonomiaId}.geojson
 * 無法對應的 feature 進入 other.geojson
 *
 * 執行: node scripts/split-spain-geojson.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// 讀取原始 GeoJSON 與 appellations 對應
const wineGeo    = JSON.parse(readFileSync(join(root, 'public/spain/spain-wine-regions.geojson'), 'utf8'))
const appellations = JSON.parse(readFileSync(join(root, 'public/spain/spain-appellations.json'), 'utf8'))

// 建立 zonName → autonomiaId 快速查詢 Map
const zonToAuto = new Map(appellations.map(a => [a.zonName, a.autonomiaId]))

// 輸出目錄
const outDir = join(root, 'public/spain/geojson')
mkdirSync(outDir, { recursive: true })

// 分組
const groups = {}
let matched = 0, unmatched = 0

for (const feature of wineGeo.features) {
  const zonName = feature.properties?.ZON_DS_NOM || ''
  const autoId  = zonToAuto.get(zonName) || 'other'

  if (autoId !== 'other') matched++
  else unmatched++

  if (!groups[autoId]) groups[autoId] = []
  groups[autoId].push(feature)
}

// 寫出各自治區檔案
for (const [autoId, features] of Object.entries(groups)) {
  const geojson = {
    type: 'FeatureCollection',
    features,
  }
  const outPath = join(outDir, `${autoId}.geojson`)
  writeFileSync(outPath, JSON.stringify(geojson), 'utf8')
  const sizeKB = (Buffer.byteLength(JSON.stringify(geojson)) / 1024).toFixed(1)
  console.log(`  ✓ ${autoId}.geojson  (${features.length} features, ${sizeKB} KB)`)
}

console.log(`\n完成：${Object.keys(groups).length} 個檔案`)
console.log(`  matched:   ${matched}`)
console.log(`  unmatched: ${unmatched} → other.geojson`)
