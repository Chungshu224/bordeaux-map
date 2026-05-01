#!/usr/bin/env node
/**
 * 抽取德國課程的可翻譯字串為 flat dot-path JSON。
 * 來源：src/components/germany/data/lessonSlides.js（zh-TW 為 SSOT）
 * 輸出：scripts/_germany-zh-source/{lessonId}.json
 *
 * 之後翻譯腳本會以此為基礎產生 src/locales/{en,ja}/lessons/germany/*.json overlay。
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src/components/germany/data/lessonSlides.js')
const OUT_DIR = path.join(__dirname, '_germany-zh-source')

// 不翻譯的鍵（顏色、圖示、佈局、技術參數等）
const SKIP_KEYS = new Set([
  'lessonId', 'levelKey', 'type', 'background', 'mapRegion', 'icon',
  'answer', 'color',
])
// 含中文字元才視為需翻譯
const HAS_CN = /[\u4e00-\u9fff]/

function flatten(obj, prefix, out) {
  if (obj == null) return
  if (typeof obj === 'string') {
    if (HAS_CN.test(obj)) out[prefix] = obj
    return
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => flatten(v, prefix ? `${prefix}.${i}` : String(i), out))
    return
  }
  if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (SKIP_KEYS.has(k)) continue
      const key = prefix ? `${prefix}.${k}` : k
      flatten(v, key, out)
    }
  }
}

async function main() {
  const mod = await import(pathToFileURL(SRC).href)
  // 11 個已實作的 lesson
  const ids = [
    'G1M1L1','G1M1L2','G1M1L3',
    'G1M2L1','G1M2L2','G1M2L3',
    'G1M3L1','G1M3L2','G1M3L3',
    'G1M4L1',
    'G2M1L1',
  ]
  await fs.mkdir(OUT_DIR, { recursive: true })
  let totalKeys = 0
  for (const id of ids) {
    const lesson = mod[id]
    if (!lesson) { console.warn(`⚠ ${id} 不存在於 lessonSlides.js`); continue }
    const flat = {}
    flatten(lesson, '', flat)
    const outPath = path.join(OUT_DIR, `${id}.json`)
    await fs.writeFile(outPath, JSON.stringify(flat, null, 2) + '\n', 'utf8')
    console.log(`✓ ${id}: ${Object.keys(flat).length} keys → ${path.relative(ROOT, outPath)}`)
    totalKeys += Object.keys(flat).length
  }
  console.log(`\n總計 ${ids.length} 課，${totalKeys} 個 key。`)
}

main().catch(e => { console.error(e); process.exit(1) })
