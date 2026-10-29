#!/usr/bin/env node
/**
 * scripts/build-brandy-climate.mjs
 * 白蘭地示意點（src/data/brandy/pointRef.js 的各點）的氣候資料：北半球生長季（4–10 月）的均溫、日照時數、降雨量，1980–2025。
 * ⚠ 只處理北半球的點（緯度 > 0）：Ica、Pisco Elqui、Paarl、Klein Karoo 在南半球，生長季為 10–4 月，與本腳本的季節定義不同，因此不納入（地圖上這些點在氣候圖層顯示為無資料）。
 * 年份以生長季所在的日曆年計（例如 2025 = 2025-04-01 至 2025-10-31）。
 * 資料來源：Open-Meteo Historical Weather API（免金鑰）。
 * ⚠ 刻意指定單一再分析模型：預設的 best_match 在 2017 年起改用 ECMWF IFS，會造成數列在 2017 前後斷層。
 *   因此氣溫用 era5_land（約 9 公里），日照與降雨用 era5（ERA5-Land 沒有日照欄位），整段都來自同一模型。
 * ⚠ 代表點＝示意點座標（非官方邊界）、約 9–10 公里網格；鄰近的點常落在同一格，只適合區域比較。
 *
 * 輸出：public/data/brandy-climate.json（格式與 greece-climate.json 相同，鍵為示意點 id；zone 取代 group）
 * 用法：node scripts/build-brandy-climate.mjs [--delay=1500] [--merge] [--dry-run]
 * Node 需代理時：NODE_USE_ENV_PROXY=1 node scripts/build-brandy-climate.mjs（Node 22.21+ 讀取 HTTPS_PROXY）
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const pointsUrl = pathToFileURL(join(rootDir, 'src', 'data', 'brandy', 'pointRef.js')).href
const outputPath = join(rootDir, 'public', 'data', 'brandy-climate.json')
const START_YEAR = 1980, END_YEAR = 2025
const YEARS = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
const BASELINE_START = 1981, BASELINE_END = 2010
const args = process.argv.slice(2)
const DELAY = Number((args.find(a => a.startsWith('--delay=')) || '').split('=')[1] || 1500)
const MERGE = args.includes('--merge')
// --sunrain-only：沿用現有 JSON 的氣溫，只重抓 era5 的日照與降雨
const SUNRAIN_ONLY = args.includes('--sunrain-only')
const DRY = args.includes('--dry-run')
const sleep = ms => new Promise(r => setTimeout(r, ms))

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
      const [y0, m] = d.split('-').map(Number)
      const y = y0
      if (m < 4 || m > 10) return
      if (temp[i] != null) { S.t[y] = (S.t[y] || 0) + temp[i]; S.tc[y] = (S.tc[y] || 0) + 1 }
      if (sun[i] != null) { S.s[y] = (S.s[y] || 0) + sun[i] / 3600; S.sc[y] = (S.sc[y] || 0) + 1 }
      if (rain[i] != null) { S.r[y] = (S.r[y] || 0) + rain[i]; S.rc[y] = (S.rc[y] || 0) + 1 }
    })
  }
  return {
    temps: YEARS.map(y => (S.tc[y] >= 170 ? Number((S.t[y] / S.tc[y]).toFixed(2)) : null)),
    sun: YEARS.map(y => (S.sc[y] >= 170 ? Number(S.s[y].toFixed(1)) : null)),
    rain: YEARS.map(y => (S.rc[y] >= 170 ? Number(S.r[y].toFixed(1)) : null))
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
  const { POINT_REF } = await import(pointsUrl)
  const items = POINT_REF.filter(p => p.lngLat[1] > 0).map(p => ({ id: p.id, name: p.name, group: p.zone, c: [p.lngLat[0], p.lngLat[1]] }))
  console.log(`示意點: ${items.length}`)
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
    if (!climate) { fail++; console.log('fail'); aocs[it.id] = { name: it.name, zone: it.group, centroid: it.c, temps: YEARS.map(() => null), sun: YEARS.map(() => null), rain: YEARS.map(() => null), baseline: null, baselineSun: null, baselineRain: null }; continue }
    ok++; console.log('ok')
    aocs[it.id] = { name: it.name, zone: it.group, centroid: it.c, ...climate, baseline: baseline(climate.temps), baselineSun: baseline(climate.sun), baselineRain: baseline(climate.rain) }
  }
  const out = {
    meta: { generated: new Date().toISOString().slice(0, 10), source: 'Open-Meteo Historical Weather API (temp: era5_land, sun/rain: era5)', region: 'brandy', years: YEARS,
      yearAvg: yearAvg(aocs, 'temps', 2), yearSunAvg: yearAvg(aocs, 'sun', 1), yearRainAvg: yearAvg(aocs, 'rain', 1),
      indicator: 'growing_season_mean_temp_april_to_october', baselinePeriod: `${BASELINE_START}-${BASELINE_END}`, indicators: ['temp', 'sun', 'rain'] },
    global: stats(Object.values(aocs).flatMap(d => d.temps)),
    globalSun: stats(Object.values(aocs).flatMap(d => d.sun)),
    globalRain: stats(Object.values(aocs).flatMap(d => d.rain)),
    aocs
  }
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, JSON.stringify(out, null, 2), 'utf8')
  console.log(`done\nsuccess: ${ok}, fail: ${fail}${MERGE ? `, kept: ${kept}` : ''}\noutput: public/data/brandy-climate.json`)
}
main().catch(e => { console.error('fatal:', e); process.exit(1) })
