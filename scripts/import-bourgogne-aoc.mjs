#!/usr/bin/env node
/**
 * scripts/import-bourgogne-aoc.mjs
 *
 * 將 public/bourgogne/geojson/ 下的 AOC 邊界 GeoJSON 匯入 Supabase aoc_features
 *
 * 資料範圍：
 *   - Chablis / Grand Auxerrois 地區的各層級 AOC
 *   - Côte de Nuits、Côte de Beaune、Côte Chalonnaise、Maconnais、Beaujolais
 *   - 布根地大區 (AOC Bourgogne) 地區 AOC
 *
 * 判斷 AOC 邊界檔 vs. 個別酒莊地塊：
 *   跳過「父目錄名稱以 'AOC ' 開頭」的檔案（那些是酒莊地塊，不是 AOC 邊界）
 *
 * 前提：
 *   1. 已執行 supabase db push（套用 20260411100000_bourgogne_spatial_extend.sql）
 *   2. .env.local 已設定 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
 *      (可加入 SUPABASE_SERVICE_KEY 加速)
 *
 * 執行：
 *   node scripts/import-bourgogne-aoc.mjs
 *   node scripts/import-bourgogne-aoc.mjs --dry-run   （只列出清單，不上傳）
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync, readdirSync, statSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join, basename, relative } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const DRY_RUN = process.argv.includes('--dry-run')

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

// ── 每批次 RPC 數量 ──────────────────────────────────────────
const BATCH_SIZE = 5   // AOC 邊界單一 geojson 可能較大，批次縮小
const BATCH_DELAY = 80 // ms

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

// ── 將檔名轉換為乾淨的 aoc_id ────────────────────────────────
// 例: "AOC Chablis Grand Cru Preuses.geojson" → "Bourgogne_Chablis_Grand_Cru_Preuses"
function toAocId(fileName) {
  return 'Bourgogne_' + basename(fileName, '.geojson')
    .replace(/^AOC\s+/, '')          // 移除 leading "AOC "
    .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i').replace(/[òóôõöø]/g, 'o')
    .replace(/[ùúûü]/g, 'u').replace(/[ç]/g, 'c').replace(/[ñ]/g, 'n')
    .replace(/[^a-zA-Z0-9_\-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
}

// ── 從頂層資料夾推斷 group_name ──────────────────────────────
function toGroupName(relPath) {
  // relPath 相對於 bourgogne/geojson/，例如 "Chablis/Chablis 1er cru"
  const parts = relPath.replace(/\\/g, '/').split('/')
  const top = parts[0]
  const groupMap = {
    'Chablis':            'Bourgogne-Chablis',
    'Grand Auxerrois':    'Bourgogne-GrandAuxerrois',
    'AOC Bourgogne':      'Bourgogne-Regional',
    'Cote-de-Nuits':      'Bourgogne-CoteDeNuits',
    'Cote-de-Beaune':     'Bourgogne-CoteDeBeaune',
    'Cote-Chalonnaise':   'Bourgogne-CoteChalonnaise',
    'Maconnais':          'Bourgogne-Maconnais',
    'Beaujolais':         'Bourgogne-Beaujolais',
  }
  return groupMap[top] || `Bourgogne-${top.replace(/[^a-zA-Z0-9]/g, '')}`
}

// ── 遞迴遍歷目錄，收集 AOC 邊界檔 ───────────────────────────
// 最大允許單檔案大小（MB），超過通常是合併地圖，跳過以避免超時
const MAX_FILE_MB = 10

function collectAocFiles(dir, baseDir, results = []) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      collectAocFiles(fullPath, baseDir, results)
    } else if (entry.endsWith('.geojson')) {
      const parentName = basename(dir)
      const relDir = relative(baseDir, dir)

      // 跳過：根目錄的合併總圖（如 "AOC Bourgogne map.geojson"）
      if (relDir === '' || relDir === '.') continue
      // 跳過：父目錄名稱以 "AOC " 開頭 → 那是酒莊地塊資料夾
      if (parentName.startsWith('AOC ')) continue
      // 跳過：個別酒莊地塊（以數字開頭的檔名）
      if (/^\d+/.test(entry)) continue
      // 跳過：超大合併檔
      const sizeMB = stat.size / (1024 * 1024)
      if (sizeMB > MAX_FILE_MB) {
        console.warn(`  ⚠️  跳過大型合併檔 (${sizeMB.toFixed(1)}MB): ${relDir}/${entry}`)
        continue
      }

      results.push({ fullPath, relDir, fileName: entry })
    }
  }
  return results
}

// ── 單一 AOC 匯入 ────────────────────────────────────────────
async function importAocFile({ fullPath, relDir, fileName }) {
  const aocId    = toAocId(fileName)
  const group    = toGroupName(relDir)
  const fileSize = statSync(fullPath).size

  if (DRY_RUN) {
    console.log(`  [DRY] ${group} | ${aocId} | ${formatBytes(fileSize)}`)
    return { success: 0, skipped: 1 }
  }

  let raw
  try {
    raw = readFileSync(fullPath, 'utf-8')
  } catch (e) {
    console.warn(`  ⚠️  讀檔失敗: ${fileName}`)
    return { success: 0, error: 1 }
  }

  let geojson
  try {
    geojson = JSON.parse(raw)
  } catch (e) {
    console.warn(`  ⚠️  JSON 解析失敗: ${fileName}`)
    return { success: 0, error: 1 }
  }

  const features = geojson.type === 'FeatureCollection'
    ? geojson.features
    : [geojson]

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < features.length; i += BATCH_SIZE) {
    const batch = features.slice(i, i + BATCH_SIZE)
    const results = await Promise.allSettled(
      batch.map(f => {
        // 每個 feature 用同一個 aoc_id（若有多個 feature 則加序號避免衝突）
        const fid = features.length > 1 ? `${aocId}_${i + batch.indexOf(f)}` : aocId
        return supabase.rpc('import_aoc_feature', {
          p_aoc_id:  fid,
          p_group:   group,
          p_geojson: JSON.stringify(f.geometry || f),
          p_region:  'bourgogne',
        })
      })
    )
    for (const r of results) {
      if (r.status === 'fulfilled' && !r.value?.error) successCount++
      else errorCount++
    }
    if (i + BATCH_SIZE < features.length) await sleep(BATCH_DELAY)
  }

  const status = errorCount === 0 ? '✅' : '⚠️ '
  console.log(`  ${status} ${group} | ${aocId} | ${features.length} features | ✅${successCount} ❌${errorCount}`)
  return { success: successCount, error: errorCount }
}

// ── 主程式 ───────────────────────────────────────────────────
async function main() {
  const baseDir = join(rootDir, 'public', 'bourgogne', 'geojson')

  console.log('╔══════════════════════════════════════════════╗')
  console.log('║  布根地 AOC 邊界匯入 Supabase aoc_features   ║')
  console.log('╚══════════════════════════════════════════════╝')

  if (DRY_RUN) {
    console.log('⚡ DRY RUN 模式（只列出，不上傳）\n')
  } else {
    console.log(`專案: ${SUPABASE_URL}`)
    console.log(`金鑰: ${env.SUPABASE_SERVICE_KEY ? 'Service Role Key ✓' : 'Anon Key'}\n`)

    // 檢查資料表是否存在
    const { error: tableErr } = await supabase
      .from('aoc_features')
      .select('id', { head: true, count: 'exact' })
    if (tableErr) {
      console.error('❌ 無法存取 aoc_features 資料表：', tableErr.message)
      console.error('   請先執行: npx supabase db push')
      process.exit(1)
    }

    // 確認 region 欄位已存在（migration 有無套用）
    const { error: regionErr } = await supabase
      .from('aoc_features')
      .select('region', { head: true, count: 'exact' })
    if (regionErr) {
      console.error('❌ aoc_features 缺少 region 欄位，請先執行 db push')
      process.exit(1)
    }

    // 查看已有資料量
    const { count } = await supabase
      .from('aoc_features')
      .select('*', { count: 'exact', head: true })
      .eq('region', 'bourgogne')
    if (count > 0) {
      console.warn(`⚠️  bourgogne AOC 已有 ${count} 筆資料。`)
      console.warn('若需重新匯入，請先在 Supabase Dashboard 執行：')
      console.warn("   DELETE FROM aoc_features WHERE region = 'bourgogne';")
      console.warn('--------------------------------------------------')
    }
  }

  // 收集所有 AOC 邊界檔
  console.log('📂 掃描目錄...')
  const files = collectAocFiles(baseDir, baseDir)
  console.log(`📋 找到 ${files.length} 個 AOC 邊界檔\n`)

  let totalSuccess = 0
  let totalError = 0

  for (const file of files) {
    const result = await importAocFile(file)
    totalSuccess += result.success || 0
    totalError   += result.error  || 0
  }

  console.log('\n══════════════════════════════════════════════')
  console.log(`🏁 完成！成功: ${totalSuccess}  失敗: ${totalError}`)
  if (!DRY_RUN && totalError > 0) {
    console.log('⚠️  部分失敗，請檢查上方錯誤訊息。')
  }
}

main().catch(err => {
  console.error('💥 未處理的錯誤:', err)
  process.exit(1)
})
