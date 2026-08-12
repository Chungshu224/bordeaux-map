#!/usr/bin/env node
/**
 * scripts/build-newzealand-climate.mjs
 *
 * Build New Zealand climate dataset for map heatmap layer.
 * Data source: Open-Meteo archive daily API (no key required).
 *
 * IMPORTANT: New Zealand is in the Southern Hemisphere — "summer" is
 * December–January–February, not June–August. December days are bucketed
 * into the FOLLOWING year to match conventional "vintage year" labeling
 * (e.g. "2013 vintage" = Dec 2012 + Jan 2013 + Feb 2013).
 *
 * Output:
 *   public/data/newzealand-climate.json
 *
 * Usage:
 *   node scripts/build-newzealand-climate.mjs
 *   node scripts/build-newzealand-climate.mjs --dry-run
 *   node scripts/build-newzealand-climate.mjs --delay=1200
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const nzGeojsonDir = join(rootDir, 'public', 'newzealand', 'geojson', 'NewZealand')
const outputPath = join(rootDir, 'public', 'data', 'newzealand-climate.json')

const START_YEAR = 1980
const END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981
const BASELINE_END = 2010

// Fetch window must include Dec of the year before START_YEAR so that
// Dec 1979 -> bucketed into 1980 is available.
const FETCH_START_DATE = '1979-12-01'
const FETCH_END_DATE = `${END_YEAR}-12-31`

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const REQUEST_DELAY_MS = Number((args.find((a) => a.startsWith('--delay=')) || '').split('=')[1] || 3000)

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// ── NZ_REGIONS — mirrors src/components/newzealand/NZMapSection.vue ────────
// (verified against the live file; 17 geojson files -> 10 unique climate ids)
const NZ_REGIONS = [
  { file: 'Auckland.geojson',                     id: 'Auckland' },
  { file: 'Bannockburn.geojson',                  id: 'CentralOtago' },
  { file: 'Central_Hawkes_Bay.geojson',           id: 'HawkesBay' },
  { file: 'Central_Otago.geojson',                id: 'CentralOtago' },
  { file: 'Gisborne.geojson',                     id: 'Gisborne' },
  { file: 'Gladstone.geojson',                    id: 'Wairarapa' },
  { file: 'Hawkes_Bay.geojson',                   id: 'HawkesBay' },
  { file: 'Kumeu.geojson',                        id: 'Auckland' },
  { file: 'Marlborough.geojson',                  id: 'Marlborough' },
  { file: 'Martinborough.geojson',                id: 'Wairarapa' },
  { file: 'Matakana.geojson',                     id: 'Auckland' },
  { file: 'Nelson.geojson',                       id: 'Nelson' },
  { file: 'North_Canterbury.geojson',             id: 'NorthCanterbury' },
  { file: 'Northland.geojson',                    id: 'Northland' },
  { file: 'Waiheke_Island.geojson',                id: 'Auckland' },
  { file: 'Waipara_Valley.geojson',               id: 'NorthCanterbury' },
  { file: 'Waitaki_Valley_North_Otago.geojson',   id: 'WaitakiValley' },
]

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

/**
 * Fetch Dec-Jan-Feb ("Southern Hemisphere summer") aggregates.
 * December days are bucketed into the FOLLOWING year.
 */
async function fetchSummerClimate(lat, lng, retries = 6) {
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
        let bucketYear
        if (month === 12) bucketYear = year + 1
        else if (month === 1 || month === 2) bucketYear = year
        else continue // skip all other months (Mar-Nov)

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
  console.log('New Zealand climate build start')
  console.log(`years: ${START_YEAR}-${END_YEAR}, dry-run: ${DRY_RUN ? 'yes' : 'no'}`)

  if (!existsSync(nzGeojsonDir)) {
    console.error(`NZ geojson dir not found: ${nzGeojsonDir}`)
    process.exit(1)
  }

  // Compute centroid for EACH file, then average per unique id.
  let foundGeo = 0
  let missingGeo = 0
  const centroidsById = new Map() // id -> [ [lon,lat], ... ]

  for (const region of NZ_REGIONS) {
    const filePath = join(nzGeojsonDir, region.file)
    if (!existsSync(filePath)) {
      missingGeo += 1
      console.warn(`missing geojson: ${region.file}`)
      continue
    }
    const centroid = computeCentroid(filePath)
    if (!centroid) {
      missingGeo += 1
      console.warn(`could not compute centroid: ${region.file}`)
      continue
    }
    foundGeo += 1
    if (!centroidsById.has(region.id)) centroidsById.set(region.id, [])
    centroidsById.get(region.id).push(centroid)
  }

  console.log(`geojson files: ${NZ_REGIONS.length}, matched: ${foundGeo}, missing: ${missingGeo}`)

  const finalCentroids = {} // id -> [lon, lat]
  for (const [id, list] of centroidsById.entries()) {
    const sumLon = list.reduce((s, c) => s + c[0], 0)
    const sumLat = list.reduce((s, c) => s + c[1], 0)
    finalCentroids[id] = [
      Number((sumLon / list.length).toFixed(4)),
      Number((sumLat / list.length).toFixed(4))
    ]
  }

  const uniqueIds = Object.keys(finalCentroids).sort()
  console.log(`unique climate ids: ${uniqueIds.length}`)
  for (const id of uniqueIds) {
    console.log(`  ${id}: [${finalCentroids[id][0]}, ${finalCentroids[id][1]}] (from ${centroidsById.get(id).length} file(s))`)
  }

  if (DRY_RUN) {
    console.log('dry-run preview:')
    console.log(JSON.stringify(finalCentroids, null, 2))
    return
  }

  // Resume support: if an output file already exists (e.g. from a prior
  // rate-limited run) and --resume is passed, skip ids that already have a
  // non-null baseline so we don't hammer the API for entries that succeeded.
  const RESUME = args.includes('--resume')
  let existingAocs = {}
  if (RESUME && existsSync(outputPath)) {
    try {
      existingAocs = JSON.parse(readFileSync(outputPath, 'utf-8')).aocs || {}
    } catch { existingAocs = {} }
  }

  const aocs = {}
  let ok = 0
  let fail = 0

  for (let i = 0; i < uniqueIds.length; i++) {
    const id = uniqueIds[i]
    const [lng, lat] = finalCentroids[id]

    if (RESUME && existingAocs[id]?.baseline != null) {
      console.log(`[${i + 1}/${uniqueIds.length}] ${id} ... skip (resume, already ok)`)
      aocs[id] = existingAocs[id]
      ok += 1
      continue
    }

    process.stdout.write(`[${i + 1}/${uniqueIds.length}] ${id} ... `)

    const climate = await fetchSummerClimate(lat, lng)
    if (!climate) {
      fail += 1
      console.log('fail')
      aocs[id] = {
        group: id,
        centroid: finalCentroids[id],
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
      aocs[id] = {
        group: id,
        centroid: finalCentroids[id],
        temps: climate.temps,
        sun: climate.sun,
        rain: climate.rain,
        baseline: calcBaseline(climate.temps),
        baselineSun: calcBaseline(climate.sun),
        baselineRain: calcBaseline(climate.rain)
      }
    }

    if (i < uniqueIds.length - 1) await sleep(REQUEST_DELAY_MS)
  }

  const global = calcGlobal(Object.values(aocs).flatMap((d) => d.temps))
  const globalSun = calcGlobal(Object.values(aocs).flatMap((d) => d.sun))
  const globalRain = calcGlobal(Object.values(aocs).flatMap((d) => d.rain))

  const output = {
    meta: {
      generated: new Date().toISOString().slice(0, 10),
      source: 'Open-Meteo Historical Weather API',
      region: 'newzealand',
      years: YEARS,
      yearAvg: calcYearAvg(aocs, 'temps'),
      yearSunAvg: calcYearAvg(aocs, 'sun'),
      yearRainAvg: calcYearAvg(aocs, 'rain'),
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
  console.log(`output: public/data/newzealand-climate.json`)
}

main().catch((err) => {
  console.error('fatal:', err)
  process.exit(1)
})
