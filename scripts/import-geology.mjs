#!/usr/bin/env node
/**
 * scripts/import-geology.mjs
 *
 * 將 public/geojson/geology/ 下的 5 個 GeoJSON 地質檔案匯入 Supabase PostGIS
 *
 * 執行前提：
 *   1. 已執行 supabase db push（套用 20260407300000_add_geology_spatial.sql）
 *   2. .env.local 已設定 VITE_SUPABASE_URL 和 VITE_SUPABASE_ANON_KEY
 *
 * 執行方式：
 *   node scripts/import-geology.mjs
 *
 * 可選：加入 Service Role Key 加速（跳過 RLS）：
 *   在 .env.local 加入 SUPABASE_SERVICE_KEY=eyJ...
 *   然後重新執行此腳本
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
// 優先使用 Service Role Key（有的話可繞過 RLS，速度稍快）
// 沒有的話用 anon key + SECURITY DEFINER 函數
const SUPABASE_KEY = env.SUPABASE_SERVICE_KEY || env.VITE_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ 缺少環境變數，請檢查 .env.local：')
  console.error('   VITE_SUPABASE_URL=https://xxx.supabase.co')
  console.error('   VITE_SUPABASE_ANON_KEY=eyJ...')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// ── 地質檔案對應 ─────────────────────────────────────────────
const GEOLOGY_FILES = [
  { file: 'Limestone.geojson', soil_type: 'limestone', label: '石灰岩' },
  { file: 'Gravel.geojson',    soil_type: 'gravel',    label: '礫石/卵石' },
  { file: 'Clay.geojson',      soil_type: 'clay',      label: '黏土' },
  { file: 'Sand.geojson',      soil_type: 'sand',      label: '砂土' },
  { file: 'Mixed.geojson',     soil_type: 'mixed',     label: '混合沉積' },
]

// 每批次呼叫 RPC 數量（避免超過 Supabase 速率限制）
const BATCH_SIZE = 20
// 批次間延遲（ms），免費方案可提高至 100
const BATCH_DELAY = 50

// ── 工具函數 ─────────────────────────────────────────────────
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

// ── 單一檔案匯入 ─────────────────────────────────────────────
async function importFile({ file, soil_type, label }) {
  const filePath = join(rootDir, 'public', 'geojson', 'geology', file)

  if (!existsSync(filePath)) {
    console.warn(`⚠️  找不到檔案: ${filePath}，跳過。`)
    return { success: 0, error: 0 }
  }

  const raw = readFileSync(filePath, 'utf-8')
  console.log(`\n📁 [${label}] ${file} (${formatBytes(raw.length)})`)

  let geojson
  try {
    geojson = JSON.parse(raw)
  } catch (e) {
    console.error(`   ❌ JSON 解析失敗: ${e.message}`)
    return { success: 0, error: 1 }
  }

  const features = geojson.features || []
  console.log(`   共 ${features.length} 個地質多邊形，開始匯入...`)

  let successCount = 0
  let errorCount = 0
  let firstError = null

  for (let i = 0; i < features.length; i += BATCH_SIZE) {
    const batch = features.slice(i, i + BATCH_SIZE)

    // 並行處理本批次（不超過 BATCH_SIZE）
    const results = await Promise.allSettled(
      batch.map(feature => {
        const props = feature.properties || {}
        return supabase.rpc('import_geology_feature', {
          p_soil_type: soil_type,
          p_notation:  props.NOTATION  || null,
          p_desc:      props.DESCR     || null,
          p_mi_prinx:  typeof props.MI_PRINX === 'number' ? props.MI_PRINX : null,
          p_geojson:   JSON.stringify(feature.geometry),
        })
      })
    )

    for (const result of results) {
      if (result.status === 'fulfilled' && !result.value.error) {
        successCount++
      } else {
        errorCount++
        if (!firstError) {
          firstError = result.reason || result.value?.error
        }
      }
    }

    // 進度顯示
    const done = Math.min(i + BATCH_SIZE, features.length)
    process.stdout.write(
      `\r   進度: ${done}/${features.length}  ✅ ${successCount}  ❌ ${errorCount}    `
    )

    if (i + BATCH_SIZE < features.length) {
      await sleep(BATCH_DELAY)
    }
  }

  console.log() // 換行
  if (firstError) {
    console.warn(`   ⚠️  首個錯誤: ${firstError.message || JSON.stringify(firstError)}`)
  }
  console.log(`   ✅ 完成：成功 ${successCount}，失敗 ${errorCount}`)
  return { success: successCount, error: errorCount }
}

// ── 主程式 ───────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════╗')
  console.log('║  地質資料匯入 Supabase PostGIS        ║')
  console.log('╚══════════════════════════════════════╝')
  console.log(`專案: ${SUPABASE_URL}`)
  console.log(`金鑰: ${env.SUPABASE_SERVICE_KEY ? 'Service Role Key ✓' : 'Anon Key (SECURITY DEFINER 模式)'}`)

  // 檢查資料表是否存在
  const { error: tableErr } = await supabase
    .from('geology_features')
    .select('id', { head: true, count: 'exact' })

  if (tableErr) {
    console.error('\n❌ 無法存取 geology_features 資料表：', tableErr.message)
    console.error('   請先執行: npx supabase db push')
    process.exit(1)
  }

  // 檢查是否已有資料
  const { count } = await supabase
    .from('geology_features')
    .select('*', { count: 'exact', head: true })

  if (count > 0) {
    console.log(`\n⚠️  geology_features 已有 ${count} 筆資料。`)
    console.log('若需重新匯入，請先在 Supabase Dashboard 執行：')
    console.log('   TRUNCATE public.geology_features RESTART IDENTITY;')
    console.log('\n繼續匯入將「追加」資料（可能產生重複）。')
    console.log('按 Ctrl+C 中斷，或等待 5 秒後繼續...')
    await sleep(5000)
  }

  let totalSuccess = 0
  let totalError = 0

  for (const item of GEOLOGY_FILES) {
    const { success, error } = await importFile(item)
    totalSuccess += success
    totalError += error
  }

  console.log('\n╔══════════════════════════════════════╗')
  console.log(`║  匯入完成！✅ ${totalSuccess} 筆  ❌ ${totalError} 筆`.padEnd(42) + '║')
  console.log('╚══════════════════════════════════════╝')
  console.log('\n驗證 SQL（可在 Supabase Dashboard > SQL Editor 執行）：')
  console.log('  SELECT soil_type, COUNT(*) FROM geology_features GROUP BY soil_type ORDER BY 1;')
  console.log('\n匯入完成後，可選擇移除匯入輔助函數（提升安全性）：')
  console.log('  DROP FUNCTION IF EXISTS public.import_geology_feature;')

  process.exit(totalError > 0 ? 1 : 0)
}

main().catch(err => {
  console.error('\n❌ 未預期錯誤:', err)
  process.exit(1)
})
