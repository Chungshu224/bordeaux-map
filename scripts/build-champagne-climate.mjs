#!/usr/bin/env node
/**
 * scripts/build-champagne-climate.mjs
 * 香檳四大產區的氣候資料（生長季 4–10 月：均溫、日照時數、降雨量；1981–2024，基準 1981–2010）
 * 資料來源：Open-Meteo Historical Weather API（免金鑰）。
 * ⚠ 與希臘版相同，刻意指定單一再分析模型避免 2017 年前後的斷層：氣溫用 era5_land（約 9 公里），
 *   日照與降雨用 era5（ERA5-Land 沒有日照欄位，日降雨也是空值）。
 * 代表點：各產區代表村莊的行政區重心（取自 public/champagne/champagne_crus.geojson）：
 *   漢斯山＝Verzenay、馬恩河谷＝Aÿ-Champagne、白丘＝Avize、巴爾丘＝Les Riceys。僅供區域比較，不代表個別葡萄園。
 * 輸出：public/data/champagne-climate.json（格式與 greece-climate.json 相同，鍵為子產區 id）
 * 用法（Node 22 需代理環境變數）：NODE_USE_ENV_PROXY=1 node scripts/build-champagne-climate.mjs [--delay=1500] [--merge] [--dry-run]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const inputPath = join(rootDir, 'public', 'champagne', 'champagne_crus.geojson')
const outputPath = join(rootDir, 'public', 'data', 'champagne-climate.json')
const START_YEAR = 1981, END_YEAR = 2024
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const SEASON_START = 4, SEASON_END = 10
const BASELINE_START = 1981, BASELINE_END = 2010
const args = process.argv.slice(2)
const DELAY = Number((args.find(a => a.startsWith('--delay=')) || '').split('=')[1] || 1500)
const MERGE = args.includes('--merge')
// --sunrain-only：沿用現有 JSON 的氣溫，只重抓 era5 的日照與降雨
const SUNRAIN_ONLY = args.includes('--sunrain-only')
const DRY = args.includes('--dry-run')
const sleep = ms => new Promise(r => setTimeout(r, ms))

function centroid(geom) {
  let sx = 0, sy = 0, n = 0
  const walk = c => { if (typeof c[0] === 'number') { sx += c[0]; sy += c[1]; n++ } else c.forEach(walk) }
  walk(geom.coordinates)
  return [Number((sx / n).toFixed(4)), Number((sy / n).toFixed(4))]
}
const REPS = [
  { id: 'montagne', name: 'Montagne de Reims', ref: 'Verzenay' },
  { id: 'vallee',   name: 'Vallée de la Marne', ref: 'Aÿ-Champagne' },
  { id: 'blancs',   name: 'Côte des Blancs', ref: 'Avize' },
  { id: 'bar',      name: 'Côte des Bar', ref: 'Riceys' }
]

async function fetchRange(lat, lng, start, end, model, fields, retries = 3) {
  const url = new URL('https://archive-api.open-meteo.com/v1/archive')
  url.searchParams.set('latitude', lat.toFixed(4))
  url.searchParams.set('longitude', lng.toFixed(4))
  url.searchParams.set('start_date', start)
  url.searchParams.set('end_date', end)
  url.searchParams.set('daily', fields)
  url.searchParams.set('models', model)
  url.searchParams.set('timezone', 'UTC')
  for (let a = 0; a <= retries; a++) {
    try {
      const res = await fetch(url.toString())
      if (res.status === 429) {
        const body = await res.text().catch(() => '')
        if (/daily/i.test(body)) { console.error('\n[stop] Open-Meteo 每日額度已用完，請明天再執行（--merge 會接續）'); process.exit(2) }
        await sleep(2500 * (a + 1)); continue
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const j = await res.json()
      if (j.error) throw new Error(j.reason || 'API error')
      const t = j.daily?.time || []
      if (!t.length) throw new Error('no daily data')
      return { times: t, temp: j.daily.temperature_2m_mean || [], sun: j.daily.sunshine_duration || [], rain: j.daily.precipitation_sum || [] }
    } catch (err) {
      if (a < retries) await sleep(1500)
      else { console.warn(`\n    warn failed (${lat},${lng}): ${err.message}`); return null }
    }
  }
  return null
}

function aggregate(parts) {
  const S = { t: {}, tc: {}, s: {}, sc: {}, r: {}, rc: {} }
  for (const { times, temp, sun, rain } of parts) {
    times.forEach((d, i) => {
      const [y, m] = d.split('-').map(Number)
      if (m < SEASON_START || m > SEASON_END) return
      if (temp[i] != null) { S.t[y] = (S.t[y] || 0) + temp[i]; S.tc[y] = (S.tc[y] || 0) + 1 }
      if (sun[i] != null) { S.s[y] = (S.s[y] || 0) + sun[i] / 3600; S.sc[y] = (S.sc[y] || 0) + 1 }
      if (rain[i] != null) { S.r[y] = (S.r[y] || 0) + rain[i]; S.rc[y] = (S.rc[y] || 0) + 1 }
    })
  }
  return {
    temps: YEARS.map(y => (S.tc[y] >= 150 ? Number((S.t[y] / S.tc[y]).toFixed(2)) : null)),
    sun: YEARS.map(y => (S.sc[y] >= 150 ? Number(S.s[y].toFixed(1)) : null)),
    rain: YEARS.map(y => (S.rc[y] >= 150 ? Number(S.r[y].toFixed(1)) : null))
  }
}

async function fetchClimate(lat, lng, keepTemps) {
  const parts = []
  for (const y of YEARS) {
    let a = { times: [], temp: [] }
    if (!keepTemps) {
      a = await fetchRange(lat, lng, `${y}-04-01`, `${y}-10-31`, 'era5_land', 'temperature_2m_mean')
      if (!a) return null
      await sleep(150)
    }
    const b = await fetchRange(lat, lng, `${y}-04-01`, `${y}-10-31`, 'era5', 'sunshine_duration,precipitation_sum')
    if (!b) return null
    parts.push({ times: b.times, temp: keepTemps ? [] : (a.times.length === b.times.length ? a.temp : []), rain: b.rain, sun: b.sun })
    await sleep(150)
  }
  const agg = aggregate(parts)
  if (keepTemps) agg.temps = keepTemps
  return agg
}

const baseline = arr => {
  const v = YEARS.map((y, i) => (y >= BASELINE_START && y <= BASELINE_END ? arr[i] : null)).filter(x => x != null)
  return v.length ? Number((v.reduce((s, x) => s + x, 0) / v.length).toFixed(2)) : null
}
const stats = arr => {
  const v = arr.filter(x => x != null)
  if (!v.length) return { min: null, max: null, mean: null }
  return { min: Number(Math.min(...v).toFixed(2)), max: Number(Math.max(...v).toFixed(2)), mean: Number((v.reduce((s, x) => s + x, 0) / v.length).toFixed(2)) }
}
const yearAvg = (aocs, key, digits) => YEARS.map((_, i) => {
  const v = Object.values(aocs).map(d => d[key]?.[i]).filter(x => x != null)
  return v.length ? Number((v.reduce((s, x) => s + x, 0) / v.length).toFixed(digits)) : null
})

async function main() {
  const gj = JSON.parse(readFileSync(inputPath, 'utf8'))
  const items = REPS.map(r => {
    const f = gj.features.find(x => x.properties.name === r.ref)
    if (!f) throw new Error('missing ' + r.ref)
    return { id: r.id, name: r.name, group: r.id, c: centroid(f.geometry) }
  })
  console.log(`產區代表點: ${items.length}`)
  if (DRY) { console.log(JSON.stringify(items.map(i => [i.id, i.name, i.c]))); return }
  const existing = (MERGE || SUNRAIN_ONLY) && existsSync(outputPath) ? JSON.parse(readFileSync(outputPath, 'utf8')).aocs || {} : {}
  const has = d => Array.isArray(d?.temps) && d.temps.some(v => v != null)
  const aocs = { ...existing }
  const cache = new Map()
  let ok = 0, fail = 0, kept = 0
  for (let i = 0; i < items.length; i++) {
    const it = items[i]
    if (MERGE && !SUNRAIN_ONLY && has(existing[it.id])) { kept++; continue }
    const key = it.c.join(',')
    process.stdout.write(`[${i + 1}/${items.length}] ${it.name} ... `)
    let climate = cache.get(key)
    if (!climate) { climate = await fetchClimate(it.c[1], it.c[0], SUNRAIN_ONLY ? existing[it.id]?.temps : null); if (climate) cache.set(key, climate); await sleep(DELAY) }
    else console.log('(shared) ')
    if (!climate) { fail++; console.log('fail'); aocs[it.id] = { name: it.name, group: it.group, centroid: it.c, temps: YEARS.map(() => null), sun: YEARS.map(() => null), rain: YEARS.map(() => null), baseline: null, baselineSun: null, baselineRain: null }; continue }
    ok++; console.log('ok')
    aocs[it.id] = { name: it.name, group: it.group, centroid: it.c, ...climate, baseline: baseline(climate.temps), baselineSun: baseline(climate.sun), baselineRain: baseline(climate.rain) }
  }
  const out = {
    meta: { generated: new Date().toISOString().slice(0, 10), source: 'Open-Meteo Historical Weather API (temp: era5_land, sun/rain: era5)', region: 'champagne', years: YEARS,
      yearAvg: yearAvg(aocs, 'temps', 2), yearSunAvg: yearAvg(aocs, 'sun', 1), yearRainAvg: yearAvg(aocs, 'rain', 1),
      indicator: 'growing_season_mean_temp_april_october', baselinePeriod: `${BASELINE_START}-${BASELINE_END}`, indicators: ['temp', 'sun', 'rain'] },
    global: stats(Object.values(aocs).flatMap(d => d.temps)),
    globalSun: stats(Object.values(aocs).flatMap(d => d.sun)),
    globalRain: stats(Object.values(aocs).flatMap(d => d.rain)),
    aocs
  }
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, JSON.stringify(out, null, 2), 'utf8')
  console.log(`done\nsuccess: ${ok}, fail: ${fail}${MERGE ? `, kept: ${kept}` : ''}\noutput: public/data/champagne-climate.json`)
}
main().catch(e => { console.error('fatal:', e); process.exit(1) })
