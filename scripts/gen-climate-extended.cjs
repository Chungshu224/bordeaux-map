/**
 * 生成擴充版 bordeaux-climate.json
 * 在現有 temps 基礎上加入 sun (夏季日照時數, h) 和 rain (夏季降雨量, mm)
 * 每個 AOC 根據地理位置加入微小差異
 */
const fs = require('fs')
const path = require('path')

const INPUT  = path.join(__dirname, '../public/data/bordeaux-climate.json')
const OUTPUT = path.join(__dirname, '../public/data/bordeaux-climate.json')

const existing = JSON.parse(fs.readFileSync(INPUT, 'utf8'))
const years = existing.meta.years   // [1980..2024]
const temps = existing.meta.yearAvg // 全域均溫陣列

// ── 基準：波爾多站 1991-2020 夏季（6-8月）統計 ────────────────
// 夏季日照時數 (h)：6月~220 + 7月~240 + 8月~220 = ~680
// 夏季降雨量 (mm)：6月~55  + 7月~50  + 8月~55 = ~160
const BASELINE_SUN  = 680   // 1991-2020 夏季均值日照（小時）
const BASELINE_RAIN = 160   // 1991-2020 夏季均值降雨（mm）

// 長期趨勢：暖化 → 日照略長 (+0.7h/yr)，夏雨略減 (-0.3mm/yr)
const SUN_TREND_PER_YEAR  =  0.7
const RAIN_TREND_PER_YEAR = -0.3
const BASELINE_YEAR = 2000.5  // 趨勢中心點

// 年份均溫 → 日照/降雨的相關性
// 熱年 = 多日照 / 少降雨（晴熱乾燥）；涼年反之
const GLOBAL_TEMP_MEAN = 20.6
const tempToSunDelta  = (t) => (t - GLOBAL_TEMP_MEAN) *  12   // +1°C → +12h
const tempToRainDelta = (t) => (t - GLOBAL_TEMP_MEAN) * -9    // +1°C → -9mm

// 年份固有雜訊（reproducible）
function hashNoise(year, salt, range) {
  let x = Math.sin(year * 7919 + salt * 397) * 9999
  return (x - Math.floor(x) - 0.5) * range
}

// ── 生成全域年度陣列 ─────────────────────────────────────────────
const globalSunByYear  = []
const globalRainByYear = []

for (let i = 0; i < years.length; i++) {
  const yr   = years[i]
  const temp = temps[i]
  const trend = (yr - BASELINE_YEAR)
  const sun  = BASELINE_SUN  + trend * SUN_TREND_PER_YEAR  + tempToSunDelta(temp)  + hashNoise(yr, 1, 30)
  const rain = BASELINE_RAIN + trend * RAIN_TREND_PER_YEAR + tempToRainDelta(temp) + hashNoise(yr, 2, 25)
  globalSunByYear.push( +Math.max(480, sun ).toFixed(1) )
  globalRainByYear.push(+Math.max(25,  rain).toFixed(1) )
}

// ── AOC 地理位置偏差 ─────────────────────────────────────────────
// centroid [lon, lat]：
//   lon 偏西 (<-0.4) → 大西洋氣候 → 日照略少(-15h)，降雨略多(+15mm)
//   lat 偏北 (>44.9) → 降溫 → 日照略少(-10h)
//   Sauternais (lat<44.5) → 秋霧多，夏季降雨略高(+10mm)
function aocGeoOffset(centroid, group) {
  const [lon, lat] = centroid
  let sunOff  = 0
  let rainOff = 0
  // 西岸大西洋偏移
  if (lon < -0.5) { sunOff -= 15; rainOff += 12 }
  else if (lon < -0.2) { sunOff -= 5; rainOff += 5 }
  // 北部稍涼
  if (lat > 45.1) { sunOff -= 10; rainOff += 8 }
  else if (lat > 44.9) { sunOff -= 4; rainOff += 3 }
  // Sauternais 甜酒區（秋露，但夏季較乾熱）
  if (group === 'Sauternais') { sunOff += 15; rainOff -= 8 }
  // 右岸（較大陸性） → 夏畫長
  if (group && group.includes('RightBank')) { sunOff += 8; rainOff -= 5 }
  return { sunOff, rainOff }
}

// ── 更新每個 AOC ─────────────────────────────────────────────────
const aocs = existing.aocs
for (const [aocId, aocData] of Object.entries(aocs)) {
  const { centroid, group, temps: aocTemps, baseline } = aocData
  const { sunOff, rainOff } = aocGeoOffset(centroid, group)

  const aocSun  = []
  const aocRain = []

  for (let i = 0; i < years.length; i++) {
    const yr      = years[i]
    const aocTemp = aocTemps[i]
    const trend   = (yr - BASELINE_YEAR)
    const sun  = BASELINE_SUN  + sunOff  + trend * SUN_TREND_PER_YEAR  + tempToSunDelta(aocTemp)  + hashNoise(yr, 1 + centroid[0] * 10, 18)
    const rain = BASELINE_RAIN + rainOff + trend * RAIN_TREND_PER_YEAR + tempToRainDelta(aocTemp) + hashNoise(yr, 2 + centroid[1] * 10, 18)
    aocSun.push( +Math.max(480, sun ).toFixed(1) )
    aocRain.push(+Math.max(20,  rain).toFixed(1) )
  }
  aocData.sun  = aocSun
  aocData.rain = aocRain
  // 基準線（1981-2010 對應索引 1..30 → index 1-30）
  const sunSlice  = aocSun.slice(1, 31)
  const rainSlice = aocRain.slice(1, 31)
  aocData.baselineSun  = +(sunSlice.reduce((a,b)=>a+b,0)  / sunSlice.length ).toFixed(1)
  aocData.baselineRain = +(rainSlice.reduce((a,b)=>a+b,0) / rainSlice.length).toFixed(1)
}

// ── 更新 global stats ─────────────────────────────────────────────
existing.globalSun = {
  min: +Math.min(...globalSunByYear).toFixed(1),
  max: +Math.max(...globalSunByYear).toFixed(1),
  mean: +(globalSunByYear.reduce((a,b)=>a+b,0)/globalSunByYear.length).toFixed(1),
}
existing.globalRain = {
  min: +Math.min(...globalRainByYear).toFixed(1),
  max: +Math.max(...globalRainByYear).toFixed(1),
  mean: +(globalRainByYear.reduce((a,b)=>a+b,0)/globalRainByYear.length).toFixed(1),
}

// ── 更新 meta ─────────────────────────────────────────────────────
existing.meta.yearSunAvg  = globalSunByYear
existing.meta.yearRainAvg = globalRainByYear
existing.meta.indicators  = ['temp', 'sun', 'rain']
existing.meta.generated   = '2026-04-08'

fs.writeFileSync(OUTPUT, JSON.stringify(existing, null, 2))
console.log('✅ bordeaux-climate.json 已更新，新增 sun & rain 資料')
console.log(`   globalSun:  min=${existing.globalSun.min} max=${existing.globalSun.max} mean=${existing.globalSun.mean}`)
console.log(`   globalRain: min=${existing.globalRain.min} max=${existing.globalRain.max} mean=${existing.globalRain.mean}`)
