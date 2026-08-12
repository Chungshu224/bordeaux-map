#!/usr/bin/env node
/**
 * scripts/build-germany-climate.mjs
 *
 * Build Germany climate dataset for map heatmap layer.
 * Data source: Open-Meteo archive daily API (no key required).
 *
 * Germany's climate layer only has 13 named Anbaugebiete (wine regions),
 * not per-parcel geojson, so there is no polygon data to compute centroids
 * from. We use well-known representative town coordinates per region
 * instead of computing centroids from geometry.
 *
 * Output:
 *   public/data/germany-climate.json
 *
 * Usage:
 *   node scripts/build-germany-climate.mjs
 *   node scripts/build-germany-climate.mjs --dry-run
 *   node scripts/build-germany-climate.mjs --delay=1200
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const outputPath = join(rootDir, 'public', 'data', 'germany-climate.json')

const START_YEAR = 1980
const END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END = 2010

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const REQUEST_DELAY_MS = Number((args.find((a) => a.startsWith('--delay=')) || '').split('=')[1] || 1200)
const ONLY = (args.find((a) => a.startsWith('--only=')) || '').split('=')[1]
const ONLY_IDS = ONLY ? ONLY.split(',').map((s) => s.trim()) : null

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Representative town coordinates for each Anbaugebiet (WGS84).
// These `id` strings must exactly match DE_REGIONS in
// src/components/germany/map/GermanyMapSection.vue
const DE_REGIONS = [
  { id: 'Mosel', lat: 49.96, lon: 7.13 }, // Bernkastel-Kues
  { id: 'Rheingau', lat: 50.03, lon: 7.95 }, // Rüdesheim/Eltville
  { id: 'Rheinhessen', lat: 49.87, lon: 8.15 }, // Nierstein
  { id: 'Pfalz', lat: 49.35, lon: 8.14 }, // Neustadt an der Weinstraße
  { id: 'Baden', lat: 48.00, lon: 7.85 }, // Freiburg
  { id: 'Württemberg', lat: 49.14, lon: 9.22 }, // Heilbronn
  { id: 'Ahr', lat: 50.54, lon: 7.09 }, // Bad Neuenahr-Ahrweiler
  { id: 'Nahe', lat: 49.85, lon: 7.87 }, // Bad Kreuznach
  { id: 'Mittelrhein', lat: 50.06, lon: 7.74 }, // Bacharach
  { id: 'Franken', lat: 49.79, lon: 9.93 }, // Würzburg
  { id: 'Hessische Bergstrasse', lat: 49.68, lon: 8.62 }, // Bensheim
  { id: 'Saale-Unstrut', lat: 51.20, lon: 11.78 }, // Freyburg (Unstrut)
  { id: 'Sachsen', lat: 51.10, lon: 13.66 } // Radebeul/Meissen
]

async function fetchSummerClimate(lat, lng, retries = 7) {
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
        // Open-Meteo enforces a per-minute quota ("Minutely API request limit
        // exceeded"). Exponential short backoff keeps re-tripping it because
        // each retry itself counts against the window, so wait a flat ~65s
        // to clear the window instead.
        const wait = 65000
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
        return Number(sunSums[y].toFixed(1))
      })

      const rain = YEARS.map((y) => {
        if (!rainCnts[y] || rainCnts[y] < 30) return null
        return Number(rainSums[y].toFixed(1))
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
  console.log('Germany climate build start')
  console.log(`years: ${START_YEAR}-${END_YEAR}, dry-run: ${DRY_RUN ? 'yes' : 'no'}`)
  console.log(`regions: ${DE_REGIONS.length}`)

  if (DRY_RUN) {
    console.log('dry-run preview:')
    console.log(JSON.stringify(DE_REGIONS, null, 2))
    return
  }

  let aocs = {}
  let existingOutput = null
  if (ONLY_IDS && existsSync(outputPath)) {
    existingOutput = JSON.parse(readFileSync(outputPath, 'utf-8'))
    aocs = existingOutput.aocs || {}
    console.log(`--only mode: retrying [${ONLY_IDS.join(', ')}], merging into existing output`)
  }

  let ok = 0
  let fail = 0

  const regionsToFetch = ONLY_IDS ? DE_REGIONS.filter((r) => ONLY_IDS.includes(r.id)) : DE_REGIONS

  for (let i = 0; i < regionsToFetch.length; i++) {
    const region = regionsToFetch[i]
    process.stdout.write(`[${i + 1}/${regionsToFetch.length}] ${region.id} ... `)

    const climate = await fetchSummerClimate(region.lat, region.lon)
    if (!climate) {
      fail += 1
      console.log('fail')
      aocs[region.id] = {
        group: region.id,
        centroid: [region.lon, region.lat],
        temps: YEARS.map(() => null),
        sun: YEARS.map(() => null),
        rain: YEARS.map(() => null),
        baseline: null,
        baselineSun: null,
        baselineRain: null
      }
    } else {
      ok += 1
      const baseline = calcBaseline(climate.temps)
      console.log(`ok (baseline=${baseline}°C)`)
      aocs[region.id] = {
        group: region.id,
        centroid: [region.lon, region.lat],
        temps: climate.temps,
        sun: climate.sun,
        rain: climate.rain,
        baseline,
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
      region: 'germany',
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
  console.log('output: public/data/germany-climate.json')
}

main().catch((err) => {
  console.error('fatal:', err)
  process.exit(1)
})
