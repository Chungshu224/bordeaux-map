#!/usr/bin/env node
/**
 * Lesson 內容批次翻譯腳本
 * ----------------------------------------------------------------
 * 來源：src/locales/zh-TW/lessons/{region}/<id>.json   (extract 產生)
 * 輸出：src/locales/{lang}/lessons/{region}/<id>.json
 *
 * 用法：
 *   $env:OPENAI_API_KEY="sk-..."
 *
 *   # 翻譯加州全部 lesson 到所有目標語系（en, ja）
 *   node scripts/translate-lessons.mjs
 *
 *   # 只翻譯指定語言
 *   node scripts/translate-lessons.mjs --lang=en
 *
 *   # 只翻譯單一課程
 *   node scripts/translate-lessons.mjs --lesson=ca-l1-1
 *
 *   # 強制重翻全部（不只是缺失）
 *   node scripts/translate-lessons.mjs --force
 *
 *   # 試跑（不寫檔，只列數量）
 *   node scripts/translate-lessons.mjs --dry-run
 *
 * 機制：
 *   - 比對 zh source 與目標語系現有 key，找出缺失/被改動的條目
 *   - 一次最多翻 8 個 key（HTML 內容較大，避免單批太大）
 *   - HTML-aware system prompt：保留 tag、class、品種/產區專名
 *   - 寫回 JSON，缺失部分以原 zh 補齊（執行 runtime 永不顯示空白）
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SOURCE_LOCALE = 'zh-TW'

const TARGET_LANGS = {
  en: {
    name: 'English (US)',
    instruction: 'Translate to professional, clear American English suitable for wine education.',
  },
  ja: {
    name: '日本語',
    instruction: 'です・ます調の丁寧な日本語に翻訳してください。ワイン教育コンテンツに適した専門的なトーンで。',
  },
}

const REGION_CONFIG = {
  california: {},
  bordeaux: {},
}

const args = process.argv.slice(2)
const region = args.find(a => a.startsWith('--region='))?.split('=')[1] || 'california'
const onlyLang = args.find(a => a.startsWith('--lang='))?.split('=')[1] || null
const onlyLesson = args.find(a => a.startsWith('--lesson='))?.split('=')[1] || null
const forceAll = args.includes('--force')
const dryRun = args.includes('--dry-run')

if (!REGION_CONFIG[region]) {
  console.error(`未知 region: ${region}`)
  process.exit(1)
}

const SRC_DIR = path.join(ROOT, 'src', 'locales', SOURCE_LOCALE, 'lessons', region)
const targetLangCodes = onlyLang ? [onlyLang] : Object.keys(TARGET_LANGS)

// ── OpenAI 翻譯（批次） ─────────────────────────────────────
async function translateBatch(entries, langCode) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('未設定 OPENAI_API_KEY 環境變數')

  const lang = TARGET_LANGS[langCode]
  const payload = Object.fromEntries(entries.map(([k, v]) => [k, v]))

  const systemPrompt = `You are a professional translator for wine-education web content.
Translate JSON values from Traditional Chinese to ${lang.name}.

CRITICAL RULES:
1. Return ONLY a JSON object with the SAME keys; values must be the translation.
2. Many values contain HTML markup (<div>, <p>, <strong>, <ul>, <li>, etc.).
   You MUST preserve every HTML tag, attribute, and class name EXACTLY.
   Translate ONLY the visible text content between tags.
3. Keep proper nouns (Bordeaux, Napa Valley, Sonoma, Cabernet Sauvignon, Pinot Noir,
   Zinfandel, Chardonnay, AVA, Mondavi, Mission, Méthode Champenoise, Rhône, château names,
   varietal names, region names, person names) in their canonical Latin/French/Italian/German spelling.
   Do NOT translate proper nouns.
4. Keep emojis (🍇 🍷 🏆 etc.) and numbers/years exactly as-is.
5. Keep placeholders like {name}, {0}, {n} unchanged.
6. ${lang.instruction}
7. NO explanations, NO markdown fencing — return just the JSON object.`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify(payload) },
      ],
    }),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI API ${res.status}: ${errText.slice(0, 300)}`)
  }
  const data = await res.json()
  const content = data.choices?.[0]?.message?.content
  if (!content) throw new Error('OpenAI 未回傳內容')
  return JSON.parse(content)
}

function chunkBySize(entries, maxChars = 8000, maxItems = 8) {
  const out = []
  let cur = []
  let curChars = 0
  for (const [k, v] of entries) {
    const size = (typeof v === 'string' ? v.length : 0) + k.length
    if (cur.length && (curChars + size > maxChars || cur.length >= maxItems)) {
      out.push(cur)
      cur = []
      curChars = 0
    }
    cur.push([k, v])
    curChars += size
  }
  if (cur.length) out.push(cur)
  return out
}

async function loadJson(file) {
  try {
    const txt = await fs.readFile(file, 'utf8')
    return JSON.parse(txt)
  } catch (e) {
    if (e.code === 'ENOENT') return null
    throw e
  }
}

async function processLesson(lessonId, langCode) {
  const srcPath = path.join(SRC_DIR, `${lessonId}.json`)
  const source = await loadJson(srcPath)
  if (!source) {
    console.warn(`  ⚠ ${lessonId}: 找不到來源 ${path.relative(ROOT, srcPath)}（先跑 extract-lesson-i18n.mjs）`)
    return { skipped: true }
  }

  const outDir = path.join(ROOT, 'src', 'locales', langCode, 'lessons', region)
  const outPath = path.join(outDir, `${lessonId}.json`)
  const existing = (await loadJson(outPath)) || {}

  // 找出需要翻譯的 key
  const missing = []
  for (const [k, v] of Object.entries(source)) {
    if (typeof v !== 'string' || !v.trim()) continue
    const cur = existing[k]
    if (forceAll || !cur || cur === v /* 還沒翻譯，等於原文 */) {
      missing.push([k, v])
    }
  }

  if (!missing.length) {
    return { lessonId, langCode, added: 0, total: Object.keys(source).length }
  }

  if (dryRun) {
    console.log(`  • ${lessonId} → ${langCode}: 需翻 ${missing.length} / ${Object.keys(source).length} key (dry-run)`)
    return { lessonId, langCode, added: missing.length, dryRun: true }
  }

  const batches = chunkBySize(missing)
  console.log(`  • ${lessonId} → ${langCode}: ${missing.length} key, ${batches.length} 批`)
  const merged = { ...existing }
  for (let i = 0; i < batches.length; i++) {
    process.stdout.write(`     批次 ${i + 1}/${batches.length} (${batches[i].length} key)…`)
    try {
      const translated = await translateBatch(batches[i], langCode)
      // 只接受 source 中存在的 key
      for (const [k] of batches[i]) {
        if (typeof translated[k] === 'string') merged[k] = translated[k]
      }
      console.log(' ✓')
    } catch (e) {
      console.log(` ✗ ${e.message}`)
      throw e
    }
  }

  // 補齊：source 有但翻譯缺的，用 source 原文兜底
  for (const k of Object.keys(source)) {
    if (!merged[k]) merged[k] = source[k]
  }
  // 移除 source 已不存在的舊 key
  for (const k of Object.keys(merged)) {
    if (!(k in source)) delete merged[k]
  }

  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(outPath, JSON.stringify(merged, null, 2) + '\n', 'utf8')
  return { lessonId, langCode, added: missing.length, total: Object.keys(source).length }
}

async function main() {
  if (!process.env.OPENAI_API_KEY && !dryRun) {
    console.error('❌ 未設定 OPENAI_API_KEY')
    process.exit(1)
  }

  const allFiles = await fs.readdir(SRC_DIR).catch(() => [])
  const lessonIds = allFiles
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace(/\.json$/, ''))
    .filter(id => !onlyLesson || id === onlyLesson)
    .sort()

  if (!lessonIds.length) {
    console.error(`找不到 ${SRC_DIR} 內的來源 JSON。請先跑 extract-lesson-i18n.mjs。`)
    process.exit(1)
  }

  console.log(`🌐 翻譯 ${region} lessons（${lessonIds.length} 課 × ${targetLangCodes.length} 語言）`)
  console.log()

  for (const langCode of targetLangCodes) {
    if (!TARGET_LANGS[langCode]) {
      console.warn(`跳過未知語言：${langCode}`)
      continue
    }
    console.log(`── ${langCode} (${TARGET_LANGS[langCode].name}) ──`)
    for (const id of lessonIds) {
      await processLesson(id, langCode)
    }
    console.log()
  }

  console.log('全部完成 ✨')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
