import fs from 'fs'
import https from 'https'

const failed = [
  { key: 'Côtes de Blaye_AOC',       centroid: [-0.546225773748374, 45.1682257443035] },
  { key: 'Cotes-de-Bourg_AOC',        centroid: [-0.55358424673714,  45.0685369070471] },
  { key: 'Graves-Superieures_AOC',    centroid: [-0.44326710575179,  44.6498077618734] },
  { key: 'Medoc_AOC',                 centroid: [-0.771565978201385, 45.1579344770545] },
  { key: 'Sainte-Croix-du-Mont_AOC',  centroid: [-0.267515043346736, 44.5991259813233] },
  { key: 'St-Julien_AOC',             centroid: [-0.756879713185832, 45.1555884848894] },
]

const sleep = ms => new Promise(r => setTimeout(r, ms))

function httpGet(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let b = ''
      r.on('data', d => b += d)
      r.on('end', () => res(b))
    }).on('error', rej)
  })
}

async function fetchWithRetry(url, retries = 5) {
  for (let i = 0; i <= retries; i++) {
    const wait = i === 0 ? 0 : i * 6000
    if (wait) { process.stdout.write(` (等${wait/1000}s)`); await sleep(wait) }
    const txt = await httpGet(url)
    const j = JSON.parse(txt)
    if (j.error) { process.stdout.write(' (429)'); continue }
    return j
  }
  return null
}

function computeSummerTemps(dates, temps, years) {
  const byYear = {}
  for (let i = 0; i < dates.length; i++) {
    const [y, m] = dates[i].split('-').map(Number)
    if (m < 6 || m > 8) continue
    if (!byYear[y]) byYear[y] = []
    if (temps[i] != null) byYear[y].push(temps[i])
  }
  return years.map(y => {
    const vals = byYear[y]
    return (vals && vals.length >= 30)
      ? +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2)
      : null
  })
}

const json = JSON.parse(fs.readFileSync('public/data/bordeaux-climate.json', 'utf8'))
const years = json.meta.years
const START = '1980-01-01', END = '2024-12-31'
const BL_START = 1981, BL_END = 2010

for (const { key, centroid } of failed) {
  process.stdout.write(`  [patch] ${key}...`)
  const [lng, lat] = centroid
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${START}&end_date=${END}&daily=temperature_2m_mean&timezone=Europe%2FLondon`
  const data = await fetchWithRetry(url)
  if (!data) { console.log(' ❌ 超過重試次數，跳過'); continue }
  const ts = computeSummerTemps(data.daily.time, data.daily.temperature_2m_mean, years)
  const blVals = years.map((y, i) => (y >= BL_START && y <= BL_END) ? ts[i] : null).filter(v => v != null)
  const baseline = blVals.length ? +(blVals.reduce((a, b) => a + b, 0) / blVals.length).toFixed(2) : null
  json.aocs[key].temps = ts
  json.aocs[key].baseline = baseline
  console.log(` ✅  (${ts.filter(t => t != null).length}/45年, 基準=${baseline}°C)`)
  await sleep(5000)  // 5s 間隔避免 rate limit
}

// ── 重新計算全域統計 ──
const allTemps = Object.values(json.aocs).map(a => a.temps)
json.meta.yearAvg = years.map((_, i) => {
  const vals = allTemps.map(t => t[i]).filter(v => v != null)
  return vals.length ? +(vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2) : null
})
const allVals = allTemps.flat().filter(v => v != null)
json.global = {
  min:  +Math.min(...allVals).toFixed(2),
  max:  +Math.max(...allVals).toFixed(2),
  mean: +(allVals.reduce((a, b) => a + b, 0) / allVals.length).toFixed(2),
}

fs.writeFileSync('public/data/bordeaux-climate.json', JSON.stringify(json))
console.log('✅  public/data/bordeaux-climate.json 已更新')
console.log('全域溫度範圍：', json.global)
