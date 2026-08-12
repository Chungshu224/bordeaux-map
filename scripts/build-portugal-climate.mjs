#!/usr/bin/env node
/**
 * scripts/build-portugal-climate.mjs
 *
 * Build Portugal climate dataset for map heatmap layer.
 * Data source: Open-Meteo archive daily API (no key required).
 *
 * Item source: public/portugal/doc_regions.geojson — a single FeatureCollection
 * with 31 features, each with properties.name / properties.region_type and its
 * own WGS84 geometry (CRS84, no projection needed).
 *
 * Output:
 *   public/data/portugal-climate.json
 *
 * Usage:
 *   node scripts/build-portugal-climate.mjs
 *   node scripts/build-portugal-climate.mjs --dry-run
 *   node scripts/build-portugal-climate.mjs --limit=5
 *   node scripts/build-portugal-climate.mjs --delay=1200
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const inputPath = join(rootDir, 'public', 'portugal', 'doc_regions.geojson')
const outputPath = join(rootDir, 'public', 'data', 'portugal-climate.json')

const START_YEAR = 1980
const END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END = 2010

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const RETRY_FAILED = args.includes('--retry-failed')
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0)
const REQUEST_DELAY_MS = Number((args.find((a) => a.startsWith('--delay=')) || '').split('=')[1] || 1200)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// ── Compute centroid directly from a feature's geometry (WGS84, no reprojection) ──
function computeCentroid(geometry) {
  let sumLon = 0
  let sumLat = 0
  let count = 0

  const visit = (coords) => {
    if (!Array.isArray(coords)) return
    if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
      const [lng, lat] = coords
      if (!Number.isFinite(lng) || !Number.isFinite(lat)) return
      if (Math.abs(lng) > 180 || Math.abs(lat) > 90) return
      sumLon += lng
      sumLat += lat
      count += 1
      return
    }
    for (const nested of coords) visit(nested)
  }

  const visitGeometry = (g) => {
    if (!g) return
    if (g.type === 'GeometryCollection' && Array.isArray(g.geometries)) {
      for (const child of g.geometries) visitGeometry(child)
      return
    }
    if (g.coordinates) visit(g.coordinates)
  }

  visitGeometry(geometry)

  if (!count) return null
  return [Number((sumLon / count).toFixed(4)), Number((sumLat / count).toFixed(4))]
}

async function fetchSummerClimate(lat, lng, retries = 6) {
  const url = new URL('https://archive-api.open-meteo.com/v1/archive')
  url.searchParams.set('latitude', lat.toFixed(4))
  url.searchParams.set('longitude', lng.toFixed(4))
  url.searchParams.set('start_date', `${START_YEAR}-01-01`)
  url.searchParams.set('end_date', `${END_YEAR}-12-31`)
  url.searchParams.set('daily', 'temperature_2m_mean,sunshine_duration,precipitation_sum')
  url.searchParams.set('timezone', 'UTC')

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString())
      if (res.status === 429) {
        const wait = 2500 * (attempt + 1)
        process.stdout.write(` (429 wait ${wait / 1000}s)`)
        await sleep(wait)
        continue
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const json = await res.json()
      if (json.error) throw new Error(json.reason || 'API error')

      const times = json.daily?.time || []
      const tempValues = json.daily?.temperature_2m_mean || []
      const sunValues = json.daily?.sunshine_duration || []
      const rainValues = json.daily?.precipitation_sum || []
      if (!times.length) throw new Error('no daily data')

      const tempSums = {}
      const tempCnts = {}
      const sunSums = {}
      const sunCnts = {}
      const rainSums = {}
      const rainCnts = {}

      for (let i = 0; i < times.length; i++) {
        const [year, month] = times[i].split('-').map(Number)
        if (month < 6 || month > 8) continue

        const t = tempValues[i]
        if (t != null) {
          tempSums[year] = (tempSums[year] || 0) + t
          tempCnts[year] = (tempCnts[year] || 0) + 1
        }

        const s = sunValues[i]
        if (s != null) {
          // Open-Meteo sunshine_duration is seconds/day, convert to hours in summer total
          sunSums[year] = (sunSums[year] || 0) + s / 3600
          sunCnts[year] = (sunCnts[year] || 0) + 1
        }

        const r = rainValues[i]
        if (r != null) {
          rainSums[year] = (rainSums[year] || 0) + r
          rainCnts[year] = (rainCnts[year] || 0) + 1
        }
      }

      const temps = YEARS.map((y) => {
        if (!tempCnts[y] || tempCnts[y] < 30) return null
        return Number((tempSums[y] / tempCnts[y]).toFixed(2))
      })

      const sun = YEARS.map((y) => {
        if (!sunCnts[y] || sunCnts[y] < 30) return null
        return Number((sunSums[y]).toFixed(1))
      })

      const rain = YEARS.map((y) => {
        if (!rainCnts[y] || rainCnts[y] < 30) return null
        return Number((rainSums[y]).toFixed(1))
      })

      return { temps, sun, rain }
    } catch (err) {
      if (attempt < retries) {
        await sleep(1500)
      } else {
        console.warn(`\n    warn open-meteo failed (${lat.toFixed(3)},${lng.toFixed(3)}): ${err.message}`)
        return null
      }
    }
  }

  return null
}

function calcBaseline(arr) {
  if (!arr) return null
  const vals = YEARS
    .map((y, i) => (y >= BASELINE_START && y <= BASELINE_END ? arr[i] : null))
    .filter((v) => v != null)
  if (!vals.length) return null
  return Number((vals.reduce((s, v) => s + v, 0) / vals.length).toFixed(2))
}

function calcGlobal(arr) {
  const vals = arr.filter((v) => v != null)
  if (!vals.length) return { min: null, max: null, mean: null }
  const min = Math.min(...vals)
  const max = Math.max(...vals)
  const mean = vals.reduce((s, v) => s + v, 0) / vals.length
  return {
    min: Number(min.toFixed(2)),
    max: Number(max.toFixed(2)),
    mean: Number(mean.toFixed(2))
  }
}

function calcYearAvg(aocs, key) {
  return YEARS.map((_, yi) => {
    const vals = Object.values(aocs)
      .map((d) => d[key]?.[yi])
      .filter((v) => v != null)
    if (!vals.length) return null
    const avg = vals.reduce((s, v) => s + v, 0) / vals.length
    const digits = key === 'temps' ? 2 : 1
    return Number(avg.toFixed(digits))
  })
}

async function main() {
  console.log('Portugal climate build start')
  console.log(`years: ${START_YEAR}-${END_YEAR}, dry-run: ${DRY_RUN ? 'yes' : 'no'}`)

  if (!existsSync(inputPath)) {
    console.error(`Input geojson not found: ${inputPath}`)
    process.exit(1)
  }

  const geojson = JSON.parse(readFileSync(inputPath, 'utf-8'))
  const features = geojson.features || []
  if (!features.length) {
    console.error('No features found in doc_regions.geojson.')
    process.exit(1)
  }

  let work = []
  let missingGeo = 0
  for (const feature of features) {
    const name = feature.properties?.name
    const group = feature.properties?.region_type || 'DOC'
    if (!name) { missingGeo += 1; continue }
    const centroid = computeCentroid(feature.geometry)
    if (!centroid) { missingGeo += 1; continue }
    work.push({ name, group, centroid })
  }

  if (LIMIT > 0) work = work.slice(0, LIMIT)

  console.log(`features: ${features.length}, matched centroid: ${work.length}, missing: ${missingGeo}`)

  if (DRY_RUN) {
    console.log('dry-run preview:')
    console.log(JSON.stringify(work, null, 2))
    return
  }

  // ── Retry-failed mode: load existing output, only re-fetch entries whose temps are all null ──
  let existingAocs = {}
  if (RETRY_FAILED && existsSync(outputPath)) {
    const prev = JSON.parse(readFileSync(outputPath, 'utf-8'))
    existingAocs = prev.aocs || {}
    const before = work.length
    work = work.filter((w) => {
      const entry = existingAocs[w.name]
      if (!entry) return true
      const allNull = Array.isArray(entry.temps) && entry.temps.every((v) => v == null)
      return allNull
    })
    console.log(`retry-failed mode: ${before} total, ${work.length} need re-fetch (previously null)`)
  }

  const aocs = { ...existingAocs }
  let ok = 0
  let fail = 0

  for (let i = 0; i < work.length; i++) {
    const w = work[i]
    const [lng, lat] = w.centroid
    process.stdout.write(`[${i + 1}/${work.length}] ${w.name} ... `)

    const climate = await fetchSummerClimate(lat, lng)
    if (!climate) {
      fail += 1
      console.log('fail')
      aocs[w.name] = {
        group: w.group,
        centroid: w.centroid,
        temps: YEARS.map(() => null),
        sun: YEARS.map(() => null),
        rain: YEARS.map(() => null),
        baseline: null,
        baselineSun: null,
        baselineRain: null
      }
    } else {
      ok += 1
      console.log('ok')
      aocs[w.name] = {
        group: w.group,
        centroid: w.centroid,
        temps: climate.temps,
        sun: climate.sun,
        rain: climate.rain,
        baseline: calcBaseline(climate.temps),
        baselineSun: calcBaseline(climate.sun),
        baselineRain: calcBaseline(climate.rain)
      }
    }

    await sleep(REQUEST_DELAY_MS)
  }

  const global = calcGlobal(Object.values(aocs).flatMap((d) => d.temps))
  const globalSun = calcGlobal(Object.values(aocs).flatMap((d) => d.sun))
  const globalRain = calcGlobal(Object.values(aocs).flatMap((d) => d.rain))

  const output = {
    meta: {
      generated: new Date().toISOString().slice(0, 10),
      source: 'Open-Meteo Historical Weather API',
      region: 'portugal',
      years: YEARS,
      yearAvg: calcYearAvg(aocs, 'temps'),
      yearSunAvg: calcYearAvg(aocs, 'sun'),
      yearRainAvg: calcYearAvg(aocs, 'rain'),
      indicator: 'summer_mean_temp_june_july_august',
      baselinePeriod: `${BASELINE_START}-${BASELINE_END}`,
      indicators: ['temp', 'sun', 'rain']
    },
    global,
    globalSun,
    globalRain,
    aocs
  }

  const outDir = join(rootDir, 'public', 'data')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8')

  console.log('done')
  console.log(`success: ${ok}, fail: ${fail}`)
  console.log(`output: public/data/portugal-climate.json`)
}

main().catch((err) => {
  console.error('fatal:', err)
  process.exit(1)
})
