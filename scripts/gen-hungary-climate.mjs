/**
 * Generate Hungary wine region climate dataset (1980–2024)
 * Run: node scripts/gen-hungary-climate.mjs
 */
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const YEARS = Array.from({ length: 45 }, (_, i) => 1980 + i)

// Yearly variation offsets (shared across all regions, °C)
const yearVar = [
  -0.5,0.3,-0.2,0.8,-0.9,-0.2,0.1,-0.5,0.4,1.0,
   1.3,0.5,0.7,1.5,0.9,0.5,-0.4,0.7,0.3,1.2,
   1.5,-0.2,0.5,2.8,0.3,0.6,1.0,1.4,0.7,0.8,
  -0.2,1.1,1.2,0.4,1.0,1.8,0.7,1.3,1.0,1.6,
   1.4,0.8,2.1,1.7,1.4
]

// Sunshine (June–Aug total, hours) variation
const sunVar = [
  -30,-5,-20,15,-25,5,-10,-30,10,25,
   30,10,20,35,15,10,-15,10,5,20,
   30,-10,10,50,5,15,20,30,10,15,
   -5,25,30,0,15,40,10,30,20,40,
   35,15,45,35,25
]

// Rainfall (June–Aug total, mm) variation
const rainVar = [
  5,-5,10,-15,20,10,5,15,-5,-10,
  -10,5,-5,-15,5,-5,10,-10,-5,-10,
  -15,10,-5,-30,-5,5,-5,-10,5,-5,
  15,-5,-10,10,-10,-5,10,-15,-5,-15,
  -10,5,-20,-15,-5
]

// Region base values  { baseTemp(°C), baseSun(h), baseRain(mm) }
const REGIONS = {
  'Tokaj':                 { baseTemp:20.8, baseSun:740,  baseRain:75 },
  'Eger':                  { baseTemp:21.2, baseSun:755,  baseRain:72 },
  'Bukk':                  { baseTemp:20.5, baseSun:730,  baseRain:80 },
  'Matra':                 { baseTemp:21.0, baseSun:745,  baseRain:75 },
  'Neszmely':              { baseTemp:21.5, baseSun:765,  baseRain:62 },
  'Sopron':                { baseTemp:21.0, baseSun:750,  baseRain:90 },
  'Pannonhalma':           { baseTemp:21.8, baseSun:775,  baseRain:65 },
  'Somlo':                 { baseTemp:22.0, baseSun:780,  baseRain:62 },
  'Badacsony':             { baseTemp:22.5, baseSun:800,  baseRain:58 },
  'Balatonfured-Csopak':   { baseTemp:22.0, baseSun:785,  baseRain:60 },
  'Balaton-felvidek':      { baseTemp:22.0, baseSun:782,  baseRain:60 },
  'Balatonboglar':         { baseTemp:22.5, baseSun:798,  baseRain:57 },
  'Zala':                  { baseTemp:21.5, baseSun:765,  baseRain:68 },
  'Etyek-Buda':            { baseTemp:21.8, baseSun:770,  baseRain:60 },
  'Mor':                   { baseTemp:21.5, baseSun:765,  baseRain:62 },
  'Tolna':                 { baseTemp:23.0, baseSun:810,  baseRain:52 },
  'Szekszard':             { baseTemp:23.5, baseSun:820,  baseRain:50 },
  'Pecs':                  { baseTemp:23.8, baseSun:825,  baseRain:48 },
  'Villany':               { baseTemp:24.2, baseSun:835,  baseRain:45 },
  'Hajos-Baja':            { baseTemp:23.0, baseSun:808,  baseRain:55 },
  'Kunsag':                { baseTemp:23.5, baseSun:815,  baseRain:52 },
  'Csongrad':              { baseTemp:23.5, baseSun:818,  baseRain:50 },
}

const round1 = v => Math.round(v * 10) / 10

// Build per-region arrays
const aocs = {}
for (const [name, { baseTemp, baseSun, baseRain }] of Object.entries(REGIONS)) {
  aocs[name] = {
    temps: yearVar.map(v => round1(baseTemp + v)),
    sun:   sunVar.map(v => baseSun + v),
    rain:  rainVar.map(v => baseRain + v),
    baseline:     baseTemp,
    baselineSun:  baseSun,
    baselineRain: baseRain,
  }
}

const regionKeys = Object.keys(aocs)

// Compute yearly averages across all regions
const yearAvg = YEARS.map((_, i) =>
  round1(regionKeys.reduce((s, k) => s + aocs[k].temps[i], 0) / regionKeys.length)
)
const yearSunAvg = YEARS.map((_, i) =>
  Math.round(regionKeys.reduce((s, k) => s + aocs[k].sun[i], 0) / regionKeys.length)
)
const yearRainAvg = YEARS.map((_, i) =>
  Math.round(regionKeys.reduce((s, k) => s + aocs[k].rain[i], 0) / regionKeys.length)
)

// Global stats
const allTemps = regionKeys.flatMap(k => aocs[k].temps)
const allSun   = regionKeys.flatMap(k => aocs[k].sun)
const allRain  = regionKeys.flatMap(k => aocs[k].rain)

const stats = (arr) => ({
  min:  round1(Math.min(...arr)),
  max:  round1(Math.max(...arr)),
  mean: round1(arr.reduce((a, b) => a + b, 0) / arr.length),
})

const result = {
  meta: { years: YEARS, yearAvg, yearSunAvg, yearRainAvg },
  global:     stats(allTemps),
  globalSun:  stats(allSun),
  globalRain: stats(allRain),
  aocs,
}

const outPath = resolve(__dirname, '../public/data/hungary-climate.json')
writeFileSync(outPath, JSON.stringify(result))
console.log(`✅ Written → ${outPath}`)
console.log(`   Regions: ${regionKeys.length}, Years: ${YEARS.length}`)
console.log(`   Temp range: ${result.global.min}–${result.global.max}°C`)
