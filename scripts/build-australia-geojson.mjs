/**
 * build-australia-geojson.mjs
 * 將澳洲各產區個別 GeoJSON 合併為單一 FeatureCollection
 * 並加入 state / zone / gi_level / color 等 metadata
 *
 * 執行：node scripts/build-australia-geojson.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC  = 'C:/Users/Chungshu/OneDrive - stu.nkuht.edu.tw/07QGIS資料/04 Australia/individual'
const OUT  = join(ROOT, 'public', 'australia')

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

// ── 每個 GI 名稱對應的 metadata ────────────────────────────────────────────
// gi_level: Zone | Region | Sub-Region
// state: NSW / VIC / SA / WA / QLD / TAS
// zone: 上層 Zone 名稱（Region 或 Sub-Region 才有）
// color: 以州別區分，符合 Mapbox fill-color 用途
const REGION_META = {
  // ── South Australia ──────────────────────────────────────────
  'Adelaide Hills':           { state: 'SA', zone: 'Mount Lofty Ranges', gi_level: 'Region',     color: '#e67e22' },
  'Adelaide Plains':          { state: 'SA', zone: null,                  gi_level: 'Region',     color: '#e67e22' },
  'Barossa':                  { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'Barossa Valley':           { state: 'SA', zone: 'Barossa',             gi_level: 'Region',     color: '#e67e22' },
  'Clare Valley':             { state: 'SA', zone: 'Mount Lofty Ranges',  gi_level: 'Region',     color: '#e67e22' },
  'Coonawarra':               { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },
  'Currency Creek':           { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Eden Valley':              { state: 'SA', zone: 'Barossa',             gi_level: 'Region',     color: '#e67e22' },
  'Far North':                { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'Fleurieu':                 { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'High Eden':                { state: 'SA', zone: 'Barossa',             gi_level: 'Sub-Region', color: '#f5cba7' },
  'Kangaroo Island':          { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Langhorne Creek':          { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Lenswood':                 { state: 'SA', zone: 'Mount Lofty Ranges',  gi_level: 'Sub-Region', color: '#f5cba7' },
  'Limestone Coast':          { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'Lower Murray':             { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'Mclaren Vale':             { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Mount Benson':             { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },
  'Mount Gambier':            { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },
  'Mount Lofty Ranges':       { state: 'SA', zone: null,                  gi_level: 'Zone',       color: '#ca6f1e' },
  'Padthaway':                { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },
  'Piccadilly Valley':        { state: 'SA', zone: 'Mount Lofty Ranges',  gi_level: 'Sub-Region', color: '#f5cba7' },
  'Riverland':                { state: 'SA', zone: 'Lower Murray',        gi_level: 'Region',     color: '#e67e22' },
  'Robe':                     { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },
  'Southern Fleurieu':        { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Southern Flinders Ranges': { state: 'SA', zone: 'Mount Lofty Ranges',  gi_level: 'Region',     color: '#e67e22' },
  'The Peninsulas':           { state: 'SA', zone: 'Fleurieu',            gi_level: 'Region',     color: '#e67e22' },
  'Wrattonbully':             { state: 'SA', zone: 'Limestone Coast',     gi_level: 'Region',     color: '#e67e22' },

  // ── Victoria ─────────────────────────────────────────────────
  'Alpine Valleys':           { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Beechworth':               { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Bendigo':                  { state: 'VIC', zone: 'Central Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Central Victoria':         { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'Geelong':                  { state: 'VIC', zone: 'Port Phillip',        gi_level: 'Region',     color: '#8e44ad' },
  'Gippsland':                { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'Glenrowan':                { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Goulburn Valley':          { state: 'VIC', zone: 'Central Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Grampians':                { state: 'VIC', zone: 'Western Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Great Western':            { state: 'VIC', zone: 'Western Victoria',    gi_level: 'Sub-Region', color: '#d2b4de' },
  'Heathcote':                { state: 'VIC', zone: 'Central Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Henty':                    { state: 'VIC', zone: 'Western Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'King Valley':              { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Macedon Ranges':           { state: 'VIC', zone: 'Port Phillip',        gi_level: 'Region',     color: '#8e44ad' },
  'Mornington Peninsula':     { state: 'VIC', zone: 'Port Phillip',        gi_level: 'Region',     color: '#8e44ad' },
  'Murray Darling':           { state: 'VIC', zone: 'Big Rivers',          gi_level: 'Region',     color: '#8e44ad' },
  'Nagambie Lakes':           { state: 'VIC', zone: 'Central Victoria',    gi_level: 'Sub-Region', color: '#d2b4de' },
  'North East Victoria':      { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'North West Victoria':      { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'Port Phillip':             { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'Pyrenees':                 { state: 'VIC', zone: 'Western Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Rutherglen':               { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Strathbogie Ranges':       { state: 'VIC', zone: 'North East Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Sunbury':                  { state: 'VIC', zone: 'Port Phillip',        gi_level: 'Region',     color: '#8e44ad' },
  'Swan Hill':                { state: 'VIC', zone: 'North West Victoria', gi_level: 'Region',     color: '#8e44ad' },
  'Upper Goulburn':           { state: 'VIC', zone: 'Central Victoria',    gi_level: 'Region',     color: '#8e44ad' },
  'Western Victoria':         { state: 'VIC', zone: null,                  gi_level: 'Zone',       color: '#7d3c98' },
  'Yarra Valley':             { state: 'VIC', zone: 'Port Phillip',        gi_level: 'Region',     color: '#8e44ad' },

  // ── New South Wales ──────────────────────────────────────────
  'Big Rivers':               { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Broke Fordwich':           { state: 'NSW', zone: 'Hunter',                  gi_level: 'Sub-Region', color: '#aed6f1' },
  'Canberra District':        { state: 'NSW', zone: 'Southern New South Wales', gi_level: 'Region',     color: '#2980b9' },
  'Central Ranges':           { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Cowra':                    { state: 'NSW', zone: 'Central Ranges',          gi_level: 'Region',     color: '#2980b9' },
  'Gundagai':                 { state: 'NSW', zone: 'Southern New South Wales', gi_level: 'Region',     color: '#2980b9' },
  'Hastings River':           { state: 'NSW', zone: 'Northern Rivers',         gi_level: 'Region',     color: '#2980b9' },
  'Hilltops':                 { state: 'NSW', zone: 'Southern New South Wales', gi_level: 'Region',     color: '#2980b9' },
  'Hunter':                   { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Hunter Valley':            { state: 'NSW', zone: 'Hunter',                  gi_level: 'Region',     color: '#2980b9' },
  'Mudgee':                   { state: 'NSW', zone: 'Central Ranges',          gi_level: 'Region',     color: '#2980b9' },
  'New England Australia':    { state: 'NSW', zone: 'Northern Slopes',         gi_level: 'Region',     color: '#2980b9' },
  'Northern Rivers':          { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Northern Slopes':          { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Orange':                   { state: 'NSW', zone: 'Central Ranges',          gi_level: 'Region',     color: '#2980b9' },
  'Perricoota':               { state: 'NSW', zone: 'Big Rivers',              gi_level: 'Region',     color: '#2980b9' },
  'Pokolbin':                 { state: 'NSW', zone: 'Hunter',                  gi_level: 'Sub-Region', color: '#aed6f1' },
  'Riverina':                 { state: 'NSW', zone: 'Big Rivers',              gi_level: 'Region',     color: '#2980b9' },
  'Shoalhaven Coast':         { state: 'NSW', zone: 'South Coast',             gi_level: 'Region',     color: '#2980b9' },
  'South Coast':              { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Southern Highlands':       { state: 'NSW', zone: 'South Coast',             gi_level: 'Region',     color: '#2980b9' },
  'Southern New South Wales': { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },
  'Tumbarumba':               { state: 'NSW', zone: 'Southern New South Wales', gi_level: 'Region',     color: '#2980b9' },
  'Upper Hunter Valley':      { state: 'NSW', zone: 'Hunter',                  gi_level: 'Region',     color: '#2980b9' },
  'Western Plains':           { state: 'NSW', zone: null,                      gi_level: 'Zone',       color: '#2471a3' },

  // ── Western Australia ────────────────────────────────────────
  'Albany':                                          { state: 'WA', zone: 'Great Southern',        gi_level: 'Region',  color: '#f39c12' },
  'Blackwood Valley':                                { state: 'WA', zone: 'South West Australia',  gi_level: 'Region',  color: '#f39c12' },
  'Central Western Australia':                       { state: 'WA', zone: null,                    gi_level: 'Zone',    color: '#d68910' },
  'Denmark':                                         { state: 'WA', zone: 'Great Southern',        gi_level: 'Region',  color: '#f39c12' },
  'Eastern Plains, Inland And North Of Western Australia': { state: 'WA', zone: null,              gi_level: 'Zone',    color: '#d68910' },
  'Frankland River':                                 { state: 'WA', zone: 'Great Southern',        gi_level: 'Region',  color: '#f39c12' },
  'Geographe':                                       { state: 'WA', zone: 'South West Australia',  gi_level: 'Region',  color: '#f39c12' },
  'Great Southern':                                  { state: 'WA', zone: null,                    gi_level: 'Zone',    color: '#d68910' },
  'Greater Perth':                                   { state: 'WA', zone: null,                    gi_level: 'Zone',    color: '#d68910' },
  'Manjimup':                                        { state: 'WA', zone: 'South West Australia',  gi_level: 'Region',  color: '#f39c12' },
  'Margaret River':                                  { state: 'WA', zone: 'South West Australia',  gi_level: 'Region',  color: '#f39c12' },
  'Mount Barker':                                    { state: 'WA', zone: 'Great Southern',        gi_level: 'Region',  color: '#f39c12' },
  'Peel':                                            { state: 'WA', zone: 'Greater Perth',         gi_level: 'Region',  color: '#f39c12' },
  'Pemberton':                                       { state: 'WA', zone: 'South West Australia',  gi_level: 'Region',  color: '#f39c12' },
  'Perth Hills':                                     { state: 'WA', zone: 'Greater Perth',         gi_level: 'Region',  color: '#f39c12' },
  'Porongurup':                                      { state: 'WA', zone: 'Great Southern',        gi_level: 'Region',  color: '#f39c12' },
  'South West Australia':                            { state: 'WA', zone: null,                    gi_level: 'Zone',    color: '#d68910' },
  'Swan District':                                   { state: 'WA', zone: 'Greater Perth',         gi_level: 'Region',  color: '#f39c12' },
  'Swan Valley':                                     { state: 'WA', zone: 'Greater Perth',         gi_level: 'Region',  color: '#f39c12' },
  'West Australian South East Coastal':              { state: 'WA', zone: null,                    gi_level: 'Zone',    color: '#d68910' },

  // ── Queensland ───────────────────────────────────────────────
  'Granite Belt':             { state: 'QLD', zone: null, gi_level: 'Region', color: '#c0392b' },
  'South Burnett':            { state: 'QLD', zone: null, gi_level: 'Region', color: '#c0392b' },

  // ── Tasmania ─────────────────────────────────────────────────
  'Tasmania':                 { state: 'TAS', zone: null, gi_level: 'Zone',   color: '#27ae60' },
}

// ── 讀取所有 GeoJSON 並合併 ─────────────────────────────────────────────────
console.log('📦 開始合併澳洲 GeoJSON 檔案…\n')

const features = []
let successCount = 0
let skipCount = 0

// 取得所有 .geojson 檔案
const { readdirSync } = await import('fs')
const files = readdirSync(SRC).filter(f => f.endsWith('.geojson'))

for (const file of files) {
  try {
    const raw  = readFileSync(join(SRC, file), 'utf-8')
    const data = JSON.parse(raw)

    // 從檔名取得產區名稱（去掉 .geojson 副檔名）
    // Tasmania 分兩個檔案，統一命名為 'Tasmania'
    let regionName = file.replace(/\.geojson$/i, '')
    if (regionName.startsWith('Tasmania_TAS')) regionName = 'Tasmania'

    const meta = REGION_META[regionName]
    if (!meta) {
      console.warn(`  ⚠️  未找到 metadata：${regionName}（${file}）`)
      skipCount++
    }

    const srcFeatures = data.features ?? []
    for (const f of srcFeatures) {
      features.push({
        ...f,
        properties: {
          ...(f.properties || {}),
          name:      regionName,
          state:     meta?.state     ?? 'Unknown',
          zone:      meta?.zone      ?? null,
          gi_level:  meta?.gi_level  ?? 'Region',
          color:     meta?.color     ?? '#95a5a6',
        }
      })
    }
    successCount++
  } catch (e) {
    console.error(`  ❌ 讀取失敗 ${file}：${e.message}`)
  }
}

// ── 輸出合併後的 GeoJSON ────────────────────────────────────────────────────
const merged = { type: 'FeatureCollection', features }
writeFileSync(join(OUT, 'australia-wine-regions.geojson'), JSON.stringify(merged))

console.log(`✅ 成功合併 ${successCount} 個檔案，共 ${features.length} 個 feature`)
if (skipCount > 0) console.log(`⚠️  ${skipCount} 個檔案缺少 metadata`)
console.log(`📁 輸出：public/australia/australia-wine-regions.geojson`)

// ── 統計 ────────────────────────────────────────────────────────────────────
const stateCount = {}
const levelCount = {}
for (const f of features) {
  const s = f.properties.state
  const l = f.properties.gi_level
  stateCount[s] = (stateCount[s] || 0) + 1
  levelCount[l] = (levelCount[l] || 0) + 1
}
console.log('\n📊 各州 feature 數量：')
Object.entries(stateCount).sort().forEach(([k,v]) => console.log(`   ${k}: ${v}`))
console.log('\n📊 各 GI Level 數量：')
Object.entries(levelCount).forEach(([k,v]) => console.log(`   ${k}: ${v}`))
