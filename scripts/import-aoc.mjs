#!/usr/bin/env node
/**
 * scripts/import-aoc.mjs
 *
 * 將 public/geojson/ 下的 46 個 AOC GeoJSON 邊界匯入 Supabase PostGIS
 *
 * 執行前提：
 *   1. 已執行 npx supabase db push（套用 20260408000000_add_aoc_spatial.sql）
 *   2. .env.local 已設定 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY
 *
 * 執行方式：
 *   node scripts/import-aoc.mjs
 *
 * 可選：加入 Service Role Key 加速（跳過 RLS）：
 *   在 .env.local 加入 SUPABASE_SERVICE_KEY=eyJ...
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

// ── 讀取環境變數 ─────────────────────────────────────────────
function parseEnvFile(filePath) {
  if (!existsSync(filePath)) return {}
  return Object.fromEntries(
    readFileSync(filePath, 'utf-8')
      .split('\n')
      .filter(line => line && !line.startsWith('#') && line.includes('='))
      .map(line => {
        const idx = line.indexOf('=')
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()]
      })
  )
}

const env = parseEnvFile(join(rootDir, '.env.local'))

const SUPABASE_URL = env.VITE_SUPABASE_URL
const SUPABASE_KEY = env.SUPABASE_SERVICE_KEY || env.VITE_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ 缺少環境變數，請檢查 .env.local：')
  console.error('   VITE_SUPABASE_URL=https://xxx.supabase.co')
  console.error('   VITE_SUPABASE_ANON_KEY=eyJ...')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// ── 46 個 AOC 檔案定義 ────────────────────────────────────────
// 格式: { file, aoc_id, group }
// aoc_id 對應 GeoJSON properties.id（或由檔名推導）
// group 對應 MapSection.vue showAOCGeojson 的 groupName 邏輯
const AOC_FILES = [
  // ── Regional ──────────────────────────────────────────────
  { file: 'Regional/Bordeaux_AOC.geojson',          aoc_id: 'Bordeaux_AOC',          group: 'Regional' },
  { file: 'Regional/Bordeaux-Superior_AOC.geojson', aoc_id: 'Bordeaux-Superior_AOC', group: 'Regional' },
  { file: 'Regional/Cotes-de-Bordeaux_AOC.geojson', aoc_id: 'Cotes-de-Bordeaux_AOC', group: 'Regional' },
  { file: 'Regional/Cremant-de-Bordeaux_AOC.geojson', aoc_id: 'Cremant-de-Bordeaux_AOC', group: 'Regional' },

  // ── LeftBank / Graves ─────────────────────────────────────
  { file: 'LeftBank/Graves/Graves_AOC.geojson',           aoc_id: 'Graves_AOC',           group: 'LeftBank-Graves' },
  { file: 'LeftBank/Graves/Graves-Superieures_AOC.geojson', aoc_id: 'Graves-Superieures_AOC', group: 'LeftBank-Graves' },
  { file: 'LeftBank/Graves/Pessac-Leognan_AOC.geojson',   aoc_id: 'Pessac-Leognan_AOC',   group: 'LeftBank-Graves' },

  // ── LeftBank / Médoc ──────────────────────────────────────
  { file: 'LeftBank/Medoc/Haut-Medoc_AOC.geojson',       aoc_id: 'Haut-Medoc_AOC',       group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/Listrac-Medoc_AOC.geojson',    aoc_id: 'Listrac-Medoc_AOC',    group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/Margaux_AOC.geojson',          aoc_id: 'Margaux_AOC',          group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/Medoc_AOC.geojson',            aoc_id: 'Medoc_AOC',            group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/Moulis-en-Medoc_AOC.geojson',  aoc_id: 'Moulis-en-Medoc_AOC',  group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/Pauillac_AOC.geojson',         aoc_id: 'Pauillac_AOC',         group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/St-Estephe_AOC.geojson',       aoc_id: 'St-Estephe_AOC',       group: 'LeftBank-Medoc' },
  { file: 'LeftBank/Medoc/St-Julien_AOC.geojson',        aoc_id: 'St-Julien_AOC',        group: 'LeftBank-Medoc' },

  // ── RightBank / Blaye ─────────────────────────────────────
  { file: 'RightBank/Blaye/Blaye_AOC.geojson',                   aoc_id: 'Blaye_AOC',                   group: 'RightBank-Blaye' },
  { file: 'RightBank/Blaye/Côtes de Blaye_AOC.geojson',          aoc_id: 'Côtes de Blaye_AOC',          group: 'RightBank-Blaye' },
  { file: 'RightBank/Blaye/Côtes-de-Bordeaux_AOC.geojson',       aoc_id: 'Côtes-de-Bordeaux_AOC',       group: 'RightBank-Blaye' },
  { file: 'RightBank/Blaye/Côtes-de-Bordeaux-Blaye_AOC.geojson', aoc_id: 'Côtes-de-Bordeaux-Blaye_AOC', group: 'RightBank-Blaye' },
  { file: 'RightBank/Blaye/Cotes-de-Bourg_AOC.geojson',          aoc_id: 'Cotes-de-Bourg_AOC',          group: 'RightBank-Blaye' },

  // ── RightBank / Libournais ────────────────────────────────
  { file: 'RightBank/Libournais/Canon-Fronsac_AOC.geojson',           aoc_id: 'Canon-Fronsac_AOC',           group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Castillon-Cotes-de-Bordeaux_AOC.geojson', aoc_id: 'Castillon-Cotes-de-Bordeaux_AOC', group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Fronsac_AOC.geojson',                 aoc_id: 'Fronsac_AOC',                 group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Lalande-de-Pomerol_AOC.geojson',      aoc_id: 'Lalande-de-Pomerol_AOC',      group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Lussac-St-Emilion_AOC.geojson',       aoc_id: 'Lussac-St-Emilion_AOC',       group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Montagne-St-Emilion_AOC.geojson',     aoc_id: 'Montagne-St-Emilion_AOC',     group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Pomerol_AOC.geojson',                 aoc_id: 'Pomerol_AOC',                 group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/Puisseguin-St-Emilion_AOC.geojson',   aoc_id: 'Puisseguin-St-Emilion_AOC',   group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/St-Emilion_AOC.geojson',              aoc_id: 'St-Emilion_AOC',              group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/St-Emilion-Grand-Cru_AOC.geojson',    aoc_id: 'St-Emilion-Grand-Cru_AOC',    group: 'RightBank-Libournais' },
  { file: 'RightBank/Libournais/St-Georges-St-Emilion_AOC.geojson',   aoc_id: 'St-Georges-St-Emilion_AOC',   group: 'RightBank-Libournais' },

  // ── Entre-Deux-Mers ───────────────────────────────────────
  { file: 'Entre-Deux-Mers/1er-Côtes-de-Bordeaux_AOC.geojson',      aoc_id: '1er-Côtes-de-Bordeaux_AOC',      group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Bordeaux Haut-Benauge_AOC.geojson',      aoc_id: 'Bordeaux Haut-Benauge_AOC',      group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Cadillac_AOC.geojson',                   aoc_id: 'Cadillac_AOC',                   group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Côtes-de-Bordeaux-Cadillac_AOC.geojson', aoc_id: 'Côtes-de-Bordeaux-Cadillac_AOC', group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Côtes-de-Bordeaux-Francs_AOC.geojson',   aoc_id: 'Côtes-de-Bordeaux-Francs_AOC',   group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Cotes-de-Bordeaux-St-Macaire_AOC.geojson', aoc_id: 'Cotes-de-Bordeaux-St-Macaire_AOC', group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Entre-Deux-Mers_AOC.geojson',            aoc_id: 'Entre-Deux-Mers_AOC',            group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Entre-deux-Mers-Haut-Benauge_AOC.geojson', aoc_id: 'Entre-deux-Mers-Haut-Benauge_AOC', group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Graves-of-Vayres_AOC.geojson',           aoc_id: 'Graves-of-Vayres_AOC',           group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Loupiac_AOC.geojson',                    aoc_id: 'Loupiac_AOC',                    group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/Sainte-Croix-du-Mont_AOC.geojson',       aoc_id: 'Sainte-Croix-du-Mont_AOC',       group: 'Entre-Deux-Mers' },
  { file: 'Entre-Deux-Mers/St-Foy-Bordeaux_AOC.geojson',            aoc_id: 'St-Foy-Bordeaux_AOC',            group: 'Entre-Deux-Mers' },

  // ── Sauternais ────────────────────────────────────────────
  { file: 'Sauternais/Barsac_AOC.geojson',   aoc_id: 'Barsac_AOC',   group: 'Sauternais' },
  { file: 'Sauternais/Cerons_AOC.geojson',   aoc_id: 'Cerons_AOC',   group: 'Sauternais' },
  { file: 'Sauternais/Sauternes_AOC.geojson', aoc_id: 'Sauternes_AOC', group: 'Sauternais' },
]

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// ── 合併 AOC 的所有 features 幾何為一個 Union ─────────────────
//   AOC GeoJSON 可能是 FeatureCollection（多個 feature），
//   需要 union 成單一幾何再上傳，PostGIS 才能做準確的 ST_Contains
//   但簡化做法：直接傳整個 GeometryCollection
//   最佳做法：傳入 type=FeatureCollection → 用 ST_Collect(array_agg(...)) 建立複合幾何
//
//   這裡我們將整個 GeoJSON 作為字串傳入，在 SQL 端用 ST_GeomFromGeoJSON 解析。
//   為了支援 FeatureCollection，import_aoc_feature 要能接受 FeatureCollection。
//   → 改為傳 geometry 字串（如果是 FeatureCollection，先在 JS 端合併）

function extractGeometry(geojson) {
  // 如果是單個 Feature
  if (geojson.type === 'Feature') {
    return geojson.geometry
  }
  // 如果是單個 Geometry
  if (geojson.type === 'Polygon' || geojson.type === 'MultiPolygon' ||
      geojson.type === 'GeometryCollection') {
    return geojson
  }
  // 如果是 FeatureCollection，合併所有 features 的幾何
  if (geojson.type === 'FeatureCollection' && geojson.features?.length > 0) {
    const geometries = geojson.features
      .map(f => f.geometry)
      .filter(Boolean)
    if (geometries.length === 1) return geometries[0]
    // 多個幾何合併為 GeometryCollection
    return {
      type: 'GeometryCollection',
      geometries
    }
  }
  return null
}

// ── 匯入單一 AOC ──────────────────────────────────────────────
async function importAoc({ file, aoc_id, group }) {
  const filePath = join(rootDir, 'public', 'geojson', file)

  if (!existsSync(filePath)) {
    console.warn(`  ⚠️  找不到: ${file}，跳過。`)
    return false
  }

  let geojson
  try {
    geojson = JSON.parse(readFileSync(filePath, 'utf-8'))
  } catch (e) {
    console.error(`  ❌ JSON 解析失敗 (${file}): ${e.message}`)
    return false
  }

  const geometry = extractGeometry(geojson)
  if (!geometry) {
    console.error(`  ❌ 無法取得幾何資料: ${file}`)
    return false
  }

  const { error } = await supabase.rpc('import_aoc_feature', {
    p_aoc_id:  aoc_id,
    p_group:   group,
    p_geojson: JSON.stringify(geometry),
  })

  if (error) {
    console.error(`  ❌ ${aoc_id}: ${error.message}`)
    return false
  }

  return true
}

// ── 主程式 ───────────────────────────────────────────────────
async function main() {
  console.log('╔═══════════════════════════════════════════╗')
  console.log('║  AOC 產區邊界匯入 Supabase PostGIS        ║')
  console.log('╚═══════════════════════════════════════════╝')
  console.log(`專案: ${SUPABASE_URL}`)
  console.log(`金鑰: ${env.SUPABASE_SERVICE_KEY ? 'Service Role Key ✓' : 'Anon Key (SECURITY DEFINER 模式)'}`)

  // 檢查資料表
  const { error: tableErr } = await supabase
    .from('aoc_features')
    .select('id', { head: true, count: 'exact' })

  if (tableErr) {
    console.error('\n❌ 無法存取 aoc_features 資料表：', tableErr.message)
    console.error('   請先執行: npx supabase db push')
    process.exit(1)
  }

  // 檢查已有資料
  const { count } = await supabase
    .from('aoc_features')
    .select('*', { count: 'exact', head: true })

  if (count > 0) {
    console.log(`\n⚠️  aoc_features 已有 ${count} 筆資料。`)
    console.log('   import_aoc_feature 使用 ON CONFLICT DO UPDATE，重複執行會更新現有資料。')
    console.log('   等待 3 秒後繼續（Ctrl+C 可中斷）...')
    await sleep(3000)
  }

  let successCount = 0
  let errorCount = 0

  for (const item of AOC_FILES) {
    process.stdout.write(`  ${item.aoc_id}... `)
    const ok = await importAoc(item)
    if (ok) {
      successCount++
      console.log('✅')
    } else {
      errorCount++
    }
    // 小延遲避免速率限制
    await sleep(30)
  }

  console.log('\n╔═══════════════════════════════════════════╗')
  console.log(`║  完成！✅ ${successCount} 筆  ❌ ${errorCount} 筆`.padEnd(46) + '║')
  console.log('╚═══════════════════════════════════════════╝')
  console.log('\n驗證 SQL（可在 Supabase Dashboard > SQL Editor 執行）：')
  console.log("  SELECT group_name, COUNT(*) FROM aoc_features GROUP BY group_name ORDER BY 1;")
  console.log('\n測試點選偵測（梅多克中間位置）：')
  console.log("  SELECT * FROM get_aoc_at_point(-0.78, 45.12);")
  console.log('\n匯入完成後可移除匯入函數（提升安全性）：')
  console.log('  DROP FUNCTION IF EXISTS public.import_aoc_feature;')

  process.exit(errorCount > 0 ? 1 : 0)
}

main().catch(err => {
  console.error('\n❌ 未預期錯誤:', err)
  process.exit(1)
})
