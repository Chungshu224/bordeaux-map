#!/usr/bin/env node
/**
 * scripts/build-australia-climate.mjs
 *
 * Build Australia climate dataset for map heatmap layer.
 * Data source: Open-Meteo archive daily API (no key required).
 *
 * IMPORTANT — Southern Hemisphere adaptation:
 * Australia's wine "summer" is December-January-February (NOT June-August like
 * the Northern Hemisphere regions, e.g. Italy). December is conventionally
 * bucketed into the FOLLOWING calendar year to match Australian vintage-year
 * labeling (e.g. the "2003 vintage" = Dec 2002 + Jan 2003 + Feb 2003).
 * To get complete Dec-Jan-Feb triads for vintage years 1980-2024, data is
 * fetched starting 1979-12-01 (so Dec 1979 feeds into the 1980 bucket) through
 * 2024-12-31 (Dec 2024 feeds a 2025 bucket, which is computed but discarded
 * since YEARS stays 1980-2024 to match the other region datasets).
 *
 * Output:
 *   public/data/australia-climate.json
 *
 * Usage:
 *   node scripts/build-australia-climate.mjs
 *   node scripts/build-australia-climate.mjs --dry-run
 *   node scripts/build-australia-climate.mjs --limit=5
 *   node scripts/build-australia-climate.mjs --delay=1200
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const geojsonPath = join(rootDir, 'public', 'australia', 'australia-wine-regions.geojson')
const outputPath = join(rootDir, 'public', 'data', 'australia-climate.json')

const START_YEAR = 1980
const END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END = 2010

// Fetch window: one year earlier so Dec of (start-1) can seed the START_YEAR
// Dec-Jan-Feb bucket, through Dec of END_YEAR (that trailing Dec feeds an
// END_YEAR+1 bucket which is simply not emitted).
const FETCH_START_DATE = `${START_YEAR - 1}-12-01`
const FETCH_END_DATE = `${END_YEAR}-12-31`

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0)
const REQUEST_DELAY_MS = Number((args.find((a) => a.startsWith('--delay=')) || '').split('=')[1] || 3000)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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

async function fetchSummerClimate(lat, lng, retries = 5) {
  const url = new URL('https://archive-api.open-meteo.com/v1/archive')
  url.searchParams.set('latitude', lat.toFixed(4))
  url.searchParams.set('longitude', lng.toFixed(4))
  url.searchParams.set('start_date', FETCH_START_DATE)
  url.searchParams.set('end_date', FETCH_END_DATE)
  url.searchParams.set('daily', 'temperature_2m_mean,sunshine_duration,precipitation_sum')
  url.searchParams.set('timezone', 'UTC')

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url.toString())
      if (res.status === 429) {
        const wait = 6000 * (attempt + 1)
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
        // Southern-hemisphere summer = Dec-Jan-Feb. December belongs to the
        // FOLLOWING vintage year (Dec 2002 -> "2003" bucket, matching AU
        // vintage-year convention). All other months are skipped.
        let bucketYear
        if (month === 12) bucketYear = year + 1
        else if (month === 1 || month === 2) bucketYear = year
        else continue

        const t = tempValues[i]
        if (t != null) {
          tempSums[bucketYear] = (tempSums[bucketYear] || 0) + t
          tempCnts[bucketYear] = (tempCnts[bucketYear] || 0) + 1
        }

        const s = sunValues[i]
        if (s != null) {
          // Open-Meteo sunshine_duration is seconds/day, convert to hours in summer total
          sunSums[bucketYear] = (sunSums[bucketYear] || 0) + s / 3600
          sunCnts[bucketYear] = (sunCnts[bucketYear] || 0) + 1
        }

        const r = rainValues[i]
        if (r != null) {
          rainSums[bucketYear] = (rainSums[bucketYear] || 0) + r
          rainCnts[bucketYear] = (rainCnts[bucketYear] || 0) + 1
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
        await sleep(3000 * (attempt + 1))
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
  console.log('Australia climate build start')
  console.log(`years: ${START_YEAR}-${END_YEAR} (Dec-Jan-Feb, Dec bucketed to following year), dry-run: ${DRY_RUN ? 'yes' : 'no'}`)

  if (!existsSync(geojsonPath)) {
    console.error(`geojson not found: ${geojsonPath}`)
    process.exit(1)
  }

  const geojson = JSON.parse(readFileSync(geojsonPath, 'utf-8'))
  const allFeatures = geojson.features || []
  let regionFeatures = allFeatures.filter((f) => f.properties?.gi_level === 'Region')

  console.log(`total features: ${allFeatures.length}, gi_level === 'Region': ${regionFeatures.length}`)

  if (LIMIT > 0) regionFeatures = regionFeatures.slice(0, LIMIT)

  let foundGeo = 0
  let missingGeo = 0
  const work = []
  for (const f of regionFeatures) {
    const centroid = computeCentroid(f.geometry)
    if (!centroid) {
      missingGeo += 1
      console.warn(`  no centroid for: ${f.properties?.name}`)
      continue
    }
    foundGeo += 1
    work.push({
      name: f.properties.name,
      group: f.properties.zone || f.properties.state || null,
      meanJanTemp: f.properties.MEAN_JAN_TEMP ?? null,
      centroid
    })
  }

  console.log(`Region entries: ${regionFeatures.length}, matched centroid: ${foundGeo}, missing: ${missingGeo}`)

  if (DRY_RUN) {
    const preview = work.slice(0, 20).map((w) => ({
      name: w.name,
      group: w.group,
      centroid: w.centroid,
      meanJanTemp: w.meanJanTemp
    }))
    console.log('dry-run preview (first 20):')
    console.log(JSON.stringify(preview, null, 2))
    return
  }

  const aocs = {}
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
      const cross = w.meanJanTemp != null ? ` (MEAN_JAN_TEMP=${w.meanJanTemp}, baseline=${calcBaseline(climate.temps)})` : ''
      console.log(`ok${cross}`)
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
      region: 'australia',
      years: YEARS,
      yearAvg: calcYearAvg(aocs, 'temps'),
      yearSunAvg: calcYearAvg(aocs, 'sun'),
      yearRainAvg: calcYearAvg(aocs, 'rain'),
      // Southern hemisphere: summer = Dec-Jan-Feb (Dec bucketed into the
      // following vintage year), NOT Jun-Jul-Aug like Italy's dataset.
      indicator: 'summer_mean_temp_dec_jan_feb',
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
  console.log(`output: public/data/australia-climate.json`)
}

main().catch((err) => {
  console.error('fatal:', err)
  process.exit(1)
})
