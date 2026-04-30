#!/usr/bin/env node
/**
 * Lesson i18n 抽取腳本
 * ----------------------------------------------------------------
 * 將 src/data/{region}/<id>.js 的 lessonContent 陣列展平為
 *   src/locales/zh-TW/lessons/{region}/<id>.json
 * 作為翻譯來源。
 *
 * 用法：
 *   node scripts/extract-lesson-i18n.mjs                      # 預設 california
 *   node scripts/extract-lesson-i18n.mjs --region=california  # 指定地區
 *   node scripts/extract-lesson-i18n.mjs --lesson=ca-l1-1     # 單一課程
 *   node scripts/extract-lesson-i18n.mjs --dry-run            # 試跑
 *
 * 注意：
 *   - 只抽取 lessonContent 陣列；component slides（{component:...}）跳過。
 *   - 翻譯白名單見 src/data/lessonI18nUtils.js
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { extractTranslatable } from '../src/data/lessonI18nUtils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SOURCE_LOCALE = 'zh-TW'

// region → data 目錄 + lesson id 前綴
const REGION_CONFIG = {
  california: { dir: 'src/data/california', prefix: 'ca-' },
  bordeaux: { dir: 'src/data/lessons', prefix: 'l', filter: /^l\d+-\d+(-part\d+)?(-part[12])?\.js$/ },
}

const args = process.argv.slice(2)
const region = args.find(a => a.startsWith('--region='))?.split('=')[1] || 'california'
const onlyLesson = args.find(a => a.startsWith('--lesson='))?.split('=')[1] || null
const dryRun = args.includes('--dry-run')

const cfg = REGION_CONFIG[region]
if (!cfg) {
  console.error(`未知 region: ${region}`)
  process.exit(1)
}

const SRC_DIR = path.join(ROOT, cfg.dir)
const OUT_DIR = path.join(ROOT, 'src', 'locales', SOURCE_LOCALE, 'lessons', region)

async function main() {
  console.log(`📚 抽取 ${region} lesson 翻譯來源`)
  console.log(`   來源：${cfg.dir}`)
  console.log(`   輸出：src/locales/${SOURCE_LOCALE}/lessons/${region}/`)
  console.log()

  const files = (await fs.readdir(SRC_DIR))
    .filter(f => {
      if (!f.endsWith('.js')) return false
      if (cfg.filter) return cfg.filter.test(f)
      return f.startsWith(cfg.prefix)
    })
    .filter(f => !onlyLesson || f === `${onlyLesson}.js`)
    .sort()

  if (!files.length) {
    console.error('找不到任何符合的檔案')
    process.exit(1)
  }

  if (!dryRun) await fs.mkdir(OUT_DIR, { recursive: true })

  let totalKeys = 0
  let totalLessons = 0
  for (const file of files) {
    const id = file.replace(/\.js$/, '')
    const url = pathToFileURL(path.join(SRC_DIR, file)).href + `?t=${Date.now()}`
    let mod
    try {
      mod = await import(url)
    } catch (e) {
      console.warn(`  ⚠ ${id}: 載入失敗 — ${e.message}`)
      continue
    }
    const slides = mod.lessonContent || mod.default || Object.values(mod).find(v => Array.isArray(v) && v.length > 0)
    if (!Array.isArray(slides)) {
      console.warn(`  ⚠ ${id}: 找不到 lessonContent 陣列`)
      continue
    }
    const flat = extractTranslatable(slides)
    const keyCount = Object.keys(flat).length
    totalKeys += keyCount
    totalLessons++

    const outPath = path.join(OUT_DIR, `${id}.json`)
    if (dryRun) {
      console.log(`  ✓ ${id}: ${keyCount} keys (dry-run, not written)`)
      continue
    }
    await fs.writeFile(outPath, JSON.stringify(flat, null, 2) + '\n', 'utf8')
    console.log(`  ✓ ${id}: ${keyCount} keys → ${path.relative(ROOT, outPath)}`)
  }

  console.log()
  console.log(`完成：${totalLessons} 課，共 ${totalKeys} 個翻譯 key`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
