#!/usr/bin/env node
/**
 * scripts/build-climate.mjs
 *
 * 從 Open-Meteo Historical Weather API 採集波爾多各 AOC 的夏季均溫
 * 輸出 public/data/bordeaux-climate.json
 *
 * 資料規格：
 *   - 年份：1980–2024（45 年）
 *   - 指標：夏季均溫（6月+7月+8月 平均）
 *   - 基準線：1981–2010 夏季均溫（標準氣候常態期）
 *   - 來源：archive-api.open-meteo.com（免費，無需 API key）
 *
 * 執行前提：
 *   1. 已執行 npx supabase db push（20260408300000）
 *   2. .env.local 已設 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
 *
 * 執行方式：
 *   node scripts/build-climate.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

// ── 環境變數 ─────────────────────────────────────────────────
function parseEnvFile(filePath) {
  if (!existsSync(filePath)) return {}
  return Object.fromEntries(
    readFileSync(filePath, 'utf-8')
      .split('\n')
      .filter(l => l && !l.startsWith('#') && l.includes('='))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
  )
}

const env = parseEnvFile(join(rootDir, '.env.local'))
const SUPABASE_URL = env.VITE_SUPABASE_URL
const SUPABASE_KEY = env.SUPABASE_SERVICE_KEY || env.VITE_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ 缺少環境變數（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
const sleep = ms => new Promise(r => setTimeout(r, ms))

// ── 常數 ─────────────────────────────────────────────────────
const START_YEAR = 1980
const END_YEAR   = 2024
const YEARS      = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END   = 2010

// 波爾多黃金年份（教學標注用）
const GOLDEN_VINTAGES = [1982, 1989, 1990, 2000, 2003, 2005, 2009, 2010, 2015, 2016, 2019, 2020]

// ── Open-Meteo 採集（日資料 → 自行計算月均） ─────────────────
async function fetchSummerTemps(lat, lng, retries = 3) {
  const url = new URL('https://archive-api.open-meteo.com/v1/archive')
  url.searchParams.set('latitude',   lat.toFixed(4))
  url.searchParams.set('longitude',  lng.toFixed(4))
  url.searchParams.set('start_date', `${START_YEAR}-01-01`)
  url.searchParams.set('end_date',   `${END_YEAR}-12-31`)
  url.searchParams.set('daily',      'temperature_2m_mean')
  url.searchParams.set('timezone',   'UTC')

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString())
      if (res.status === 429) {
        const wait = 3000 * (attempt + 1)
        process.stdout.write(` (429 等${wait/1000}s)`)
        await sleep(wait)
        continue
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      if (json.error) throw new Error(json.reason || 'API error')

      const times  = json.daily?.time               || []
      const values = json.daily?.temperature_2m_mean || []
      if (!times.length) throw new Error('no daily data')

      // 按年份計算夏季（6、7、8月）均溫
      const yearSums = {}
      const yearCnts = {}
      times.forEach((t, i) => {
        const [y, m] = t.split('-').map(Number)
        if (m >= 6 && m <= 8 && values[i] != null) {
          yearSums[y] = (yearSums[y] || 0) + values[i]
          yearCnts[y] = (yearCnts[y] || 0) + 1
        }
      })

      return YEARS.map(y => {
        if (!yearCnts[y] || yearCnts[y] < 30) return null   // 至少30天才算有效
        return +(yearSums[y] / yearCnts[y]).toFixed(2)
      })
    } catch (err) {
      if (attempt < retries) {
        await sleep(2000)
      } else {
        console.warn(`\n    ⚠️  Open-Meteo 失敗 (${lat.toFixed(3)},${lng.toFixed(3)}): ${err.message}`)
        return null
      }
    }
  }
  return null
}

// ── 計算基準線（1981–2010 均值） ──────────────────────────────
function calcBaseline(temps) {
  if (!temps) return null
  const vals = YEARS
    .map((y, i) => y >= BASELINE_START && y <= BASELINE_END ? temps[i] : null)
    .filter(v => v != null)
  if (!vals.length) return null
  return +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2)
}

// ── 主程式 ───────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════╗')
  console.log('║  波爾多 AOC 氣候資料採集                     ║')
  console.log('║  資料來源：Open-Meteo Historical Weather API  ║')
  console.log('╚══════════════════════════════════════════════╝')
  console.log(`年份範圍：${START_YEAR}–${END_YEAR}（${YEARS.length} 年）`)
  console.log('指標：夏季均溫（6–8月）')

  // 1. 取得所有 AOC 重心座標
  console.log('\n[1/3] 從 PostGIS 取得 AOC 重心座標...')
  const { data: centroids, error: centErr } = await supabase.rpc('get_aoc_centroids')
  if (centErr || !centroids?.length) {
    console.error('❌ 無法取得座標:', centErr?.message)
    console.error('   請先執行: npx supabase db push')
    process.exit(1)
  }
  console.log(`   取得 ${centroids.length} 個 AOC 重心`)

  // 2. 逐一採集氣候資料
  console.log('\n[2/3] 從 Open-Meteo 採集氣溫資料（每個 AOC 一次請求）...')
  const aocs = {}
  let success = 0, failed = 0

  for (let i = 0; i < centroids.length; i++) {
    const { aoc_id, group_name, lat, lng } = centroids[i]
    process.stdout.write(`  [${i + 1}/${centroids.length}] ${aoc_id}... `)

    const temps = await fetchSummerTemps(lat, lng)

    if (!temps || temps.every(t => t == null)) {
      console.log('❌')
      failed++
      aocs[aoc_id] = { group: group_name, centroid: [lng, lat], temps: YEARS.map(() => null), baseline: null }
    } else {
      const baseline = calcBaseline(temps)
      aocs[aoc_id] = {
        group: group_name,
        centroid: [+lng.toFixed(4), +lat.toFixed(4)],
        temps,
        baseline
      }
      const validCount = temps.filter(t => t != null).length
      console.log(`✅  (${validCount}/${YEARS.length}年, 基準=${baseline}°C)`)
      success++
    }

    // 避免 429（Open-Meteo 免費方案約每秒 10 次，1.5秒確保安全）
    await sleep(1500)
  }

  // 3. 計算全域統計
  console.log('\n[3/3] 計算統計...')
  const allTemps = Object.values(aocs).flatMap(d => d.temps).filter(t => t != null)
  const globalMin  = +(Math.min(...allTemps)).toFixed(2)
  const globalMax  = +(Math.max(...allTemps)).toFixed(2)
  const globalMean = +(allTemps.reduce((a, b) => a + b, 0) / allTemps.length).toFixed(2)

  // 各年份波爾多均溫
  const yearAvg = YEARS.map((y, yi) => {
    const vals = Object.values(aocs).map(d => d.temps[yi]).filter(t => t != null)
    return vals.length ? +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2) : null
  })

  const output = {
    meta: {
      generated: new Date().toISOString().slice(0, 10),
      source: 'Open-Meteo Historical Weather API',
      years: YEARS,
      yearAvg,
      goldenVintages: GOLDEN_VINTAGES,
      indicator: 'summer_mean_temp_june_july_august',
      baselinePeriod: `${BASELINE_START}-${BASELINE_END}`
    },
    global: {
      min: globalMin,
      max: globalMax,
      mean: globalMean
    },
    aocs
  }

  // 寫出 JSON
  const outDir = join(rootDir, 'public', 'data')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, 'bordeaux-climate.json')
  writeFileSync(outPath, JSON.stringify(output, null, 2))
  const fileSizeKB = Math.round(readFileSync(outPath).length / 1024)

  console.log('\n╔══════════════════════════════════════════════╗')
  console.log(`║  完成！✅ ${success} 個 AOC，❌ ${failed} 個失敗`.padEnd(47) + '║')
  console.log(`║  全域溫度範圍：${globalMin}–${globalMax}°C，均值 ${globalMean}°C`.padEnd(47) + '║')
  console.log(`║  輸出：public/data/bordeaux-climate.json (${fileSizeKB}KB)`.padEnd(47) + '║')
  console.log('╚══════════════════════════════════════════════╝')
}

main().catch(err => {
  console.error('❌ 未預期錯誤:', err)
  process.exit(1)
})
