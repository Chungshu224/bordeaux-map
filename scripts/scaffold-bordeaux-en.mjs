#!/usr/bin/env node
/**
 * scaffold-bordeaux-en.mjs
 * ─────────────────────────────────────────────────────────────
 * 從 zh-TW 為 EN 產生 Bordeaux 課程翻譯草稿：
 *   - 已有 EN 檔且 key 完整 → 跳過
 *   - 新增檔案 → 複製 zh-TW 原文（標記 [ZH] 字首供辨識）
 *   - 既有檔案缺少 key → 補入 zh-TW 原文（標記 [ZH] 字首）
 *
 * 用法：node scripts/scaffold-bordeaux-en.mjs
 *       node scripts/scaffold-bordeaux-en.mjs --clean   （移除 [ZH] 標記、只保留已翻條目統計）
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const SRC_DIR  = path.join(ROOT, 'src', 'locales', 'zh-TW', 'lessons', 'bordeaux')
const OUT_DIR  = path.join(ROOT, 'src', 'locales', 'en',    'lessons', 'bordeaux')

const MARKER = '[ZH] '

async function loadJson(filePath) {
  try {
    const txt = await fs.readFile(filePath, 'utf8')
    return JSON.parse(txt)
  } catch (e) {
    if (e.code === 'ENOENT') return null
    throw e
  }
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  const srcFiles = (await fs.readdir(SRC_DIR))
    .filter(f => f.endsWith('.json'))
    .sort()

  let newFiles = 0, patchedFiles = 0, skippedFiles = 0
  let totalAdded = 0

  for (const fname of srcFiles) {
    const srcPath = path.join(SRC_DIR, fname)
    const outPath = path.join(OUT_DIR, fname)

    const source   = await loadJson(srcPath)
    const existing = await loadJson(outPath)

    if (!source) continue

    if (existing) {
      // 找出缺少的 key
      const missing = Object.entries(source).filter(([k]) => !(k in existing))
      if (!missing.length) {
        console.log(`  ✓ ${fname}（已完整）`)
        skippedFiles++
        continue
      }
      const merged = { ...existing }
      for (const [k, v] of missing) {
        merged[k] = MARKER + (typeof v === 'string' ? v : JSON.stringify(v))
      }
      await fs.writeFile(outPath, JSON.stringify(merged, null, 2) + '\n', 'utf8')
      console.log(`  ↺ ${fname}：補入 ${missing.length} 個缺漏 key`)
      patchedFiles++
      totalAdded += missing.length
    } else {
      // 全新建立
      const scaffold = {}
      for (const [k, v] of Object.entries(source)) {
        scaffold[k] = MARKER + (typeof v === 'string' ? v : JSON.stringify(v))
      }
      await fs.writeFile(outPath, JSON.stringify(scaffold, null, 2) + '\n', 'utf8')
      console.log(`  + ${fname}：新建 ${Object.keys(source).length} 個 key`)
      newFiles++
      totalAdded += Object.keys(source).length
    }
  }

  console.log()
  console.log(`完成 ✨  新建 ${newFiles} 個、補全 ${patchedFiles} 個、略過 ${skippedFiles} 個`)
  console.log(`共新增 ${totalAdded} 個待翻條目（值以 "[ZH] " 開頭表示尚未翻譯）`)
}

main().catch(e => { console.error(e); process.exit(1) })
