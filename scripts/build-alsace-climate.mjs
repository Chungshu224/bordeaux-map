#!/usr/bin/env node
/**
 * scripts/build-alsace-climate.mjs
 *
 * Build Alsace climate dataset for map heatmap layer.
 * Data source: Open-Meteo archive daily API (no key required).
 *
 * AOC list: public/alsace/data/Grand-Cru.json
 * Geojson:  public/alsace/geojson/<folder>/<file>  (plain WGS84, no reprojection needed)
 *
 * Output:
 *   public/data/alsace-climate.json
 *
 * Usage:
 *   node scripts/build-alsace-climate.mjs
 *   node scripts/build-alsace-climate.mjs --dry-run
 *   node scripts/build-alsace-climate.mjs --limit=5
 *   node scripts/build-alsace-climate.mjs --delay=1200
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const itemsPath = join(rootDir, 'public', 'alsace', 'data', 'Grand-Cru.json')
const geojsonBaseDir = join(rootDir, 'public', 'alsace', 'geojson')
const outputPath = join(rootDir, 'public', 'data', 'alsace-climate.json')

const START_YEAR = 1980
const END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END = 2010

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const LIMIT = Number((args.find((a) => a.startsWith('--limit=')) || '').split('=')[1] || 0)
const REQUEST_DELAY_MS = Number((args.find((a) => a.startsWith('--delay=')) || '').split('=')[1] || 2000)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function computeCentroid(filePath) {
  const geojson = JSON.parse(readFileSync(filePath, 'utf-8'))
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

  const visitGeojson = (obj) => {
    if (!obj) return
    if (obj.type === 'FeatureCollection') {
      for (const f of obj.features || []) visitGeometry(f?.geometry)
      return
    }
    if (obj.type === 'Feature') {
      visitGeometry(obj.geometry)
      return
    }
    visitGeometry(obj)
  }

  visitGeojson(geojson)

  if (!count) return null
  return [Number((sumLon / count).toFixed(4)), Number((sumLat / count).toFixed(4))]
}

// Module-level cooldown gate shared across all AOC fetches: once Open-Meteo
// reports an hourly quota exhaustion, every subsequent call waits out the
// same cooldown instead of burning more requests on doomed retries.
let coolDownUntil = 0

async function fetchSummerClimate(lat, lng, retries = 6) {
  const url = new URL('https://archive-api.open-meteo.com/v1/archive')
  url.searchParams.set('latitude', lat.toFixed(4))
  url.searchParams.set('longitude', lng.toFixed(4))
  url.searchParams.set('start_date', `${START_YEAR}-01-01`)
  url.searchParams.set('end_date', `${END_YEAR}-12-31`)
  url.searchParams.set('daily', 'temperature_2m_mean,sunshine_duration,precipitation_sum')
  url.searchParams.set('timezone', 'UTC')

  for (let attempt = 0; attempt <= retries; attempt++) {
    const now = Date.now()
    if (now < coolDownUntil) {
      const waitMs = coolDownUntil - now
      process.stdout.write(` (cooldown ${Math.round(waitMs / 1000)}s)`)
      await sleep(waitMs)
    }

    try {
      const res = await fetch(url.toString())
      if (res.status === 429) {
        let reason = ''
        try {
          const body = await res.json()
          reason = body?.reason || ''
        } catch { /* ignore body parse failure */ }

        if (/minute/i.test(reason)) {
          // Minutely quota exhausted — short, fixed cooldown shared by all callers.
          const waitMs = 70000
          coolDownUntil = Date.now() + waitMs
          process.stdout.write(` (minutely limit hit: "${reason}" — waiting ${Math.round(waitMs / 1000)}s)`)
          await sleep(waitMs)
          continue
        }

        if (/hour/i.test(reason)) {
          // Hourly quota exhausted — no amount of short backoff helps here.
          // Wait until just past the next UTC hour boundary and let every
          // caller (including future AOCs) share that single cooldown.
          const next = new Date()
          next.setUTCHours(next.getUTCHours() + 1, 1, 0, 0)
          const waitMs = Math.max(next.getTime() - Date.now(), 60000)
          coolDownUntil = Date.now() + waitMs
          process.stdout.write(` (hourly limit hit: "${reason}" — waiting ${Math.round(waitMs / 1000)}s until ${next.toISOString()})`)
          await sleep(waitMs)
          continue
        }

        const wait = 8000 * (attempt + 1)
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
        await sleep(3000)
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
  console.log('Alsace climate build start')
  console.log(`years: ${START_YEAR}-${END_YEAR}, dry-run: ${DRY_RUN ? 'yes' : 'no'}`)

  if (!existsSync(itemsPath)) {
    console.error(`No Grand-Cru.json found at ${itemsPath}`)
    process.exit(1)
  }

  const items = JSON.parse(readFileSync(itemsPath, 'utf-8'))
  let tasks = items.map((item) => ({
    item,
    geoPath: join(geojsonBaseDir, item.folder, item.file)
  }))

  if (LIMIT > 0) {
    tasks = tasks.slice(0, LIMIT)
  }

  if (!tasks.length) {
    console.error('No AOC tasks found.')
    process.exit(1)
  }

  let foundGeo = 0
  let missingGeo = 0
  const work = []
  for (const t of tasks) {
    if (!t.geoPath || !existsSync(t.geoPath)) {
      missingGeo += 1
      console.warn(`  missing geojson: ${t.item.id} -> ${t.geoPath}`)
      continue
    }
    const centroid = computeCentroid(t.geoPath)
    if (!centroid) {
      missingGeo += 1
      console.warn(`  no centroid: ${t.item.id}`)
      continue
    }
    foundGeo += 1
    work.push({ ...t, centroid })
  }

  console.log(`AOC entries: ${tasks.length}, matched geojson: ${foundGeo}, missing: ${missingGeo}`)

  if (DRY_RUN) {
    const preview = work.slice(0, 20).map((w) => ({
      id: w.item.id,
      group: w.item.folder,
      centroid: w.centroid,
      file: w.geoPath.split(/[\\/]/).slice(-2).join('/')
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
    process.stdout.write(`[${i + 1}/${work.length}] ${w.item.id} ... `)

    const climate = await fetchSummerClimate(lat, lng)
    if (!climate) {
      fail += 1
      console.log('fail')
      aocs[w.item.id] = {
        group: w.item.folder,
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
      aocs[w.item.id] = {
        group: w.item.folder,
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
      region: 'alsace',
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
  console.log(`output: public/data/alsace-climate.json`)
}

main().catch((err) => {
  console.error('fatal:', err)
  process.exit(1)
})
