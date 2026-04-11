#!/usr/bin/env node
/**
 * scripts/process-bourgogne-geology.mjs
 * 
 * 將布根地五個行政區(89, 71, 69, 58, 21)的地質 GeoJSON 合併
 * 並與布根地 AOC GeoJSON (public/bourgogne/geojson/Bourgogne_AOC.geojson)
 * 進行空間交集 (Intersect/Clip)，只保留在 AOC 範圍內的地質圖塊。
 *
 * 執行前需確保安裝 Turf.js：
 * npm install @turf/turf --save-dev
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as turf from '@turf/turf'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')

// 原始 5 個行政區資料夾的地質資料路徑（請確定使用者將資料放對位置）
// 根據使用者敘述的桌面路徑
const geoPaths = [
  "C:/Users/Chungshu/Desktop/geographie/089/Geological Materials 地質材料/geology.geojson",
  "C:/Users/Chungshu/Desktop/geographie/071/Geological Materials 地質材料/geology.geojson",
  "C:/Users/Chungshu/Desktop/geographie/069/Geological Materials 地質材料/geology.geojson",
  "C:/Users/Chungshu/Desktop/geographie/058/Geological Materials 地質材料/geology.geojson",
  "C:/Users/Chungshu/Desktop/geographie/021/Geological Materials 地質材料/geology.geojson"
]

const aocMaskPath = path.join(rootDir, 'public/bourgogne/geojson/Bourgogne_AOC.geojson')
const outputPath = path.join(rootDir, 'public/bourgogne/geojson/Bourgogne_Geology_Optimized.geojson')

console.log('📦 準備載入布根地 AOC 範圍遮罩 (Mask)...')

if (!fs.existsSync(aocMaskPath)) {
  console.error(`❌ 找不到 AOC 範圍遮罩檔案: ${aocMaskPath}`)
  process.exit(1)
}

const aocMask = JSON.parse(fs.readFileSync(aocMaskPath, 'utf8'))
// 合併 AOC features 為單一範圍（方便做交集判斷）
const dissolvedAOC = turf.dissolve(aocMask)
// 如果溶解後還是有超過一個 feature，只要確定我們有一個綜合的多邊形集合就好
let aocPolygons = dissolvedAOC.features

let combinedFeatures = []

for (const filePath of geoPaths) {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ 找不到檔案: ${filePath}，將跳過此區...`)
    continue
  }
  const folderName = path.basename(path.dirname(path.dirname(filePath)))
  console.log(`🔄 正在處理 ${folderName} 區的地質資料...`)
  
  const geoData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  
  let processedCount = 0
  
  // 遍歷該區所有的地質多邊形
  geoData.features.forEach(feature => {
    if (!feature.geometry) return
    
    try {
      // 確保只留與布根地產區 AOC 範圍有交集的特徵
      // 為了效能，先做 booleanIntersects 快速過濾
      let isIntersecting = false
      for (const aocPoly of aocPolygons) {
        if (turf.booleanIntersects(feature, aocPoly)) {
          isIntersecting = true
          break
        }
      }

      if (isIntersecting) {
        // 如果想更精準，可以使用 turf.intersect() 裁剪掉範圍外的部分
        // 但因為地質區塊通常形狀複雜，turf.intersect 效能較差。
        // 此處我們採用保留整個交集圖區的方式，減少邊界鋸齒破圖，若要強硬裁切可改用 turf.intersect
        combinedFeatures.push(feature)
        processedCount++
      }
    } catch (err) {
      // 忽略無效形狀錯誤
    }
  })
  
  console.log(`  -> 取出 ${processedCount} 個在 AOC 範圍內的地質區塊`)
}

if (combinedFeatures.length === 0) {
  console.error('❌ 沒有找到任何與 AOC 範圍重疊的地質資料！請檢查原始檔案是否含有正確的座標系統 (WGS84 EPSG:4326)')
  process.exit(1)
}

const finalFeatureCollection = turf.featureCollection(combinedFeatures)

// 確保路徑目錄存在
const outDir = path.dirname(outputPath)
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

fs.writeFileSync(outputPath, JSON.stringify(finalFeatureCollection))
console.log(`✅ 所有地質資料處理完成！總計保留 ${combinedFeatures.length} 塊地質區`)
console.log(`📄 已儲存最佳化地質資料至: ${outputPath}`)
