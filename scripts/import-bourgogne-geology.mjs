#!/usr/bin/env node
/**
 * scripts/import-bourgogne-geology.mjs
 *
 * 將 public/bourgogne/geojson/geology/provinces/ 下的 25 個地質 GeoJSON
 * 匯入 Supabase geology_features（region = 'bourgogne'）
 *
 * 資料結構：
 *   provinces/021/clay.geojson     (Côte-d'Or)
 *   provinces/021/gravel.geojson
 *   provinces/021/limestone.geojson
 *   provinces/021/mixed.geojson
 *   provinces/021/sand.geojson
 *   provinces/058/...              (Nièvre)
 *   provinces/069/...              (Rhône)
 *   provinces/071/...              (Saône-et-Loire)
 *   provinces/089/...              (Yonne)
 *
 * 特性總計：~48,000+ 個地質多邊形，約 42 MB
 * 建議使用 Service Role Key 加速（.env.local 加入 SUPABASE_SERVICE_KEY）
 *
 * 執行：
 *   node scripts/import-bourgogne-geology.mjs
 *   node scripts/import-bourgogne-geology.mjs --dry-run
 *   node scripts/import-bourgogne-geology.mjs --province 021   （只匯入指定省份）
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const DRY_RUN = process.argv.includes('--dry-run')

// 可選：只匯入特定省份（e.g. --province 021）
const PROVINCE_ARG = (() => {
  const idx = process.argv.indexOf('--province')
  return idx !== -1 ? process.argv[idx + 1] : null
})()

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

if (!DRY_RUN && (!SUPABASE_URL || !SUPABASE_KEY)) {
  console.error('❌ 缺少環境變數，請檢查 .env.local：')
  console.error('   VITE_SUPABASE_URL=https://xxx.supabase.co')
  console.error('   VITE_SUPABASE_ANON_KEY=eyJ...')
  process.exit(1)
}

const supabase = DRY_RUN ? null : createClient(SUPABASE_URL, SUPABASE_KEY)

// ── 設定 ─────────────────────────────────────────────────────
const BATCH_SIZE  = 30   // 並行 RPC 數量；Service Key 可提高至 50
const BATCH_DELAY = 60   // ms；免費方案可提高至 100

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

// ── 地質檔清單 ───────────────────────────────────────────────
const PROVINCES = [
  { code: '021', name: "Côte-d'Or"     },
  { code: '058', name: 'Nièvre'        },
  { code: '069', name: 'Rhône'         },
  { code: '071', name: 'Saône-et-Loire'},
  { code: '089', name: 'Yonne'         },
]

const SOIL_FILES = [
  { file: 'clay.geojson',      soil_type: 'clay',      label: '黏土'    },
  { file: 'sand.geojson',      soil_type: 'sand',      label: '砂'      },
  { file: 'limestone.geojson', soil_type: 'limestone', label: '石灰岩'  },
  { file: 'gravel.geojson',    soil_type: 'gravel',    label: '礫石'    },
  { file: 'mixed.geojson',     soil_type: 'mixed',     label: '混合沉積'},
]

// ── 單一檔案匯入 ─────────────────────────────────────────────
async function importFile(provinceName, provinceCode, { file, soil_type, label }) {
  const provincesDir = join(
    rootDir, 'public', 'bourgogne', 'geojson', 'geology', 'provinces'
  )
  const filePath = join(provincesDir, provinceCode, file)

  if (!existsSync(filePath)) {
    console.warn(`  ⚠️  找不到: ${provinceCode}/${file}，跳過。`)
    return { success: 0, error: 0 }
  }

  const raw = readFileSync(filePath, 'utf-8')
  const fileSize = Buffer.byteLength(raw, 'utf-8')
  console.log(`\n  📁 [${provinceName}] ${label} (${formatBytes(fileSize)})`)

  if (DRY_RUN) {
    let count = 0
    try {
      const gj = JSON.parse(raw)
      count = (gj.features || []).length
    } catch {}
    console.log(`     [DRY] ${count} 個 features，跳過上傳`)
    return { success: 0, skipped: count }
  }

  let geojson
  try {
    geojson = JSON.parse(raw)
  } catch (e) {
    console.error(`  ❌ JSON 解析失敗: ${e.message}`)
    return { success: 0, error: 1 }
  }

  const features = geojson.features || []
  console.log(`     共 ${features.length} 個地質多邊形，開始匯入...`)

  let successCount = 0
  let errorCount = 0
  let firstError = null

  for (let i = 0; i < features.length; i += BATCH_SIZE) {
    const batch = features.slice(i, i + BATCH_SIZE)

    const results = await Promise.allSettled(
      batch.map(feature => {
        const props = feature.properties || {}
        return supabase.rpc('import_geology_feature', {
          p_soil_type: soil_type,
          p_notation:  props.NOTATION || props.notation || null,
          p_desc:      props.DESCR    || props.description || props.libelle || null,
          p_mi_prinx:  typeof props.MI_PRINX === 'number' ? props.MI_PRINX : null,
          p_geojson:   JSON.stringify(feature.geometry),
          p_region:    'bourgogne',
        })
      })
    )

    for (const result of results) {
      if (result.status === 'fulfilled' && !result.value?.error) {
        successCount++
      } else {
        errorCount++
        if (!firstError) {
          firstError = result.reason || result.value?.error
        }
      }
    }

    const done = Math.min(i + BATCH_SIZE, features.length)
    process.stdout.write(
      `\r     進度: ${done}/${features.length}  ✅ ${successCount}  ❌ ${errorCount}    `
    )

    if (i + BATCH_SIZE < features.length) {
      await sleep(BATCH_DELAY)
    }
  }

  console.log() // 換行
  if (firstError) {
    console.warn(`  ⚠️  首個錯誤: ${firstError.message || JSON.stringify(firstError)}`)
  }
  console.log(`  ✅ 完成：成功 ${successCount}，失敗 ${errorCount}`)
  return { success: successCount, error: errorCount }
}

// ── 主程式 ───────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════╗')
  console.log('║  布根地地質資料匯入 Supabase PostGIS (5省 × 5土壤)   ║')
  console.log('╚══════════════════════════════════════════════════════╝')

  if (DRY_RUN) {
    console.log('⚡ DRY RUN 模式（只列出統計，不上傳）\n')
  } else {
    console.log(`專案: ${SUPABASE_URL}`)
    console.log(`金鑰: ${env.SUPABASE_SERVICE_KEY ? 'Service Role Key ✓（加速模式）' : 'Anon Key（SECURITY DEFINER 模式）'}`)
    if (!env.SUPABASE_SERVICE_KEY) {
      console.log('💡 提示：加入 SUPABASE_SERVICE_KEY 到 .env.local 可提升匯入速度')
    }
    console.log()

    // 檢查資料表
    const { error: tableErr } = await supabase
      .from('geology_features')
      .select('id', { head: true, count: 'exact' })
    if (tableErr) {
      console.error('❌ 無法存取 geology_features 資料表：', tableErr.message)
      console.error('   請先執行: npx supabase db push')
      process.exit(1)
    }

    // 確認 region 欄位已存在
    const { error: regionErr } = await supabase
      .from('geology_features')
      .select('region', { head: true, count: 'exact' })
    if (regionErr) {
      console.error('❌ geology_features 缺少 region 欄位，請先執行 db push')
      process.exit(1)
    }

    const { count } = await supabase
      .from('geology_features')
      .select('*', { count: 'exact', head: true })
      .eq('region', 'bourgogne')
    if (count > 0) {
      console.warn(`⚠️  已有 ${count} 筆布根地地質資料。`)
      console.warn('若需重新匯入，請先執行：')
      console.warn("   DELETE FROM geology_features WHERE region = 'bourgogne';")
      console.warn('--------------------------------------------------\n')
    }
  }

  const provincesToProcess = PROVINCE_ARG
    ? PROVINCES.filter(p => p.code === PROVINCE_ARG)
    : PROVINCES

  if (PROVINCE_ARG && provincesToProcess.length === 0) {
    console.error(`❌ 找不到省份代碼: ${PROVINCE_ARG}`)
    console.error(`   可用代碼: ${PROVINCES.map(p => p.code).join(', ')}`)
    process.exit(1)
  }

  let grandTotalSuccess = 0
  let grandTotalError   = 0

  for (const province of provincesToProcess) {
    console.log(`\n┌─ 省份 ${province.code} ${province.name} ─────────────────────────`)
    let provinceSuccess = 0
    let provinceError   = 0

    for (const soilFile of SOIL_FILES) {
      const result = await importFile(province.name, province.code, soilFile)
      provinceSuccess += result.success || 0
      provinceError   += result.error   || 0
    }

    console.log(`└─ 省份小計：✅ ${provinceSuccess}  ❌ ${provinceError}`)
    grandTotalSuccess += provinceSuccess
    grandTotalError   += provinceError
  }

  console.log('\n══════════════════════════════════════════════════════')
  console.log(`🏁 全部完成！`)
  console.log(`   成功: ${grandTotalSuccess} 筆`)
  console.log(`   失敗: ${grandTotalError} 筆`)
  if (!DRY_RUN && grandTotalError > 0) {
    console.log('⚠️  部分失敗，可用 --province 重跑指定省份')
  }
  if (DRY_RUN) {
    console.log('\n💡 執行正式匯入：')
    console.log('   node scripts/import-bourgogne-geology.mjs')
    console.log('   （建議先執行 --province 021 測試單一省份）')
  }
}

main().catch(err => {
  console.error('💥 未處理的錯誤:', err)
  process.exit(1)
})
