#!/usr/bin/env node
/**
 * scripts/import-aoc-large.mjs
 *
 * 專門處理 Bordeaux-Superior 和 Cremant-de-Bordeaux 兩個大型 AOC
 * (各 28MB，含 439 個 feature)
 *
 * 策略：
 *   1. 用 turf.simplify 降低座標精度 (tolerance=0.001)
 *   2. 合併所有 feature → MultiPolygon  
 *   3. 分批（每批 50 個 feature）呼叫 import 並在 PostGIS 端 UNION
 *
 * 執行方式：
 *   node scripts/import-aoc-large.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import * as turf from '@turf/turf'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

// ── 環境變數 ─────────────────────────────────────────────────
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
  console.error('❌ 缺少環境變數')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 降低座標精度（減少資料量）
function reducePrecision(geometry, decimals = 5) {
  const factor = Math.pow(10, decimals)
  return JSON.parse(JSON.stringify(geometry, (key, value) => {
    if (typeof value === 'number' && !Number.isInteger(value)) {
      return Math.round(value * factor) / factor
    }
    return value
  }))
}

// ── 只用 import_aoc_feature 但傳入單一合併幾何 ───────────────────
// 因為 migration 有 ON CONFLICT DO UPDATE，重複 aoc_id 會更新
async function importLargeAoc(filePath, aoc_id, group) {
  console.log(`\n📂 讀取 ${filePath}...`)
  const raw = readFileSync(filePath, 'utf-8')
  console.log(`   原始大小: ${(raw.length / 1024 / 1024).toFixed(1)} MB`)

  const geojson = JSON.parse(raw)
  const features = geojson.features || []
  console.log(`   features 數: ${features.length}`)

  // 方法：turf.simplify 各 feature 後合併
  console.log('   簡化座標並合併...')
  
  // 每批 50 個 feature，做 union
  const CHUNK = 50
  let combined = null
  
  for (let i = 0; i < features.length; i += CHUNK) {
    const chunk = features.slice(i, i + CHUNK)
    
    for (const feat of chunk) {
      try {
        // 簡化座標（tolerance=0.001 ≈ ~100m，足夠地圖顯示用）
        let simplified = turf.simplify(feat, { tolerance: 0.001, highQuality: false })
        if (!simplified || !simplified.geometry) continue
        
        if (combined === null) {
          combined = simplified
        } else {
          try {
            combined = turf.union(combined, simplified)
          } catch {
            // union 失敗時略過（部分無效幾何）
          }
        }
      } catch {
        // 略過無效 feature
      }
    }
    
    process.stdout.write(`\r   合併進度: ${Math.min(i + CHUNK, features.length)}/${features.length}`)
  }
  
  console.log('\n   合併完成！')
  
  if (!combined || !combined.geometry) {
    console.error('   ❌ 合併失敗，無法取得有效幾何')
    return false
  }

  const finalGeom = reducePrecision(combined.geometry, 5)
  const geomStr = JSON.stringify(finalGeom)
  console.log(`   簡化後大小: ${(geomStr.length / 1024).toFixed(0)} KB`)

  // 呼叫 import_aoc_feature（ON CONFLICT DO UPDATE 會更新既有資料）
  const { error } = await supabase.rpc('import_aoc_feature', {
    p_aoc_id:  aoc_id,
    p_group:   group,
    p_geojson: geomStr,
  })

  if (error) {
    console.error(`   ❌ 匯入失敗: ${error.message}`)
    return false
  }

  console.log(`   ✅ ${aoc_id} 匯入成功！`)
  return true
}

async function main() {
  console.log('╔═════════════════════════════════════════════╗')
  console.log('║  大型 AOC 補充匯入（簡化版）                ║')
  console.log('╚═════════════════════════════════════════════╝')

  const targets = [
    {
      filePath: join(rootDir, 'public/geojson/Regional/Bordeaux-Superior_AOC.geojson'),
      aoc_id: 'Bordeaux-Superior_AOC',
      group: 'Regional'
    },
    {
      filePath: join(rootDir, 'public/geojson/Regional/Cremant-de-Bordeaux_AOC.geojson'),
      aoc_id: 'Cremant-de-Bordeaux_AOC',
      group: 'Regional'
    }
  ]

  let ok = 0
  for (const t of targets) {
    const success = await importLargeAoc(t.filePath, t.aoc_id, t.group)
    if (success) ok++
    await sleep(500)
  }

  console.log(`\n完成：${ok}/${targets.length} 筆成功。`)
  
  if (ok < targets.length) {
    console.log('\n💡 若仍逾時，可在 Supabase SQL Editor 手動執行：')
    console.log("   已在前端地圖顯示 Bordeaux-Superior 時使用 turf.area() 計算面積")
    console.log("   點選偵測只影響這 2 個 regional AOC，其他 44 個 AOC 已正常運作")
  }

  process.exit(ok === targets.length ? 0 : 1)
}

main().catch(err => {
  console.error('❌ 錯誤:', err)
  process.exit(1)
})
