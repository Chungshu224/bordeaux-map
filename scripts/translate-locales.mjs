#!/usr/bin/env node
/**
 * 自動翻譯腳本
 * ----------------------------------------------------------------
 * 目的：以 src/locales/zh-TW/ 為事實來源，自動翻譯到其他語言。
 *
 * 用法：
 *   # 設定環境變數（OpenAI API Key）
 *   $env:OPENAI_API_KEY="sk-..."         # PowerShell
 *   export OPENAI_API_KEY="sk-..."       # bash
 *
 *   # 翻譯所有缺失的 key 到所有語言
 *   node scripts/translate-locales.mjs
 *
 *   # 只翻譯指定語言
 *   node scripts/translate-locales.mjs --lang=en
 *
 *   # 強制重翻全部（不只是缺失的）
 *   node scripts/translate-locales.mjs --force
 *
 *   # 試跑（不寫檔）
 *   node scripts/translate-locales.mjs --dry-run
 *
 * 機制：
 *   - 遞迴比對 zh-TW/*.js 和 {target}/*.js 的 key 結構
 *   - 找出缺失或標記為 [TODO] 的字串
 *   - 批次呼叫 OpenAI 翻譯（每批最多 30 個 key）
 *   - 寫回對應語言檔，保持原 key 結構
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const LOCALES_DIR = path.resolve(__dirname, '..', 'src', 'locales')
const SOURCE_LOCALE = 'zh-TW'

// ── 目標語言對照（語言碼 → 翻譯指令） ────────────────────────
const LANG_PROMPT = {
  en: 'English (US, professional wine education tone)',
  ja: 'Japanese (です/ます調, formal tone for educational content)',
  fr: 'French (formal tone, wine education vocabulary)',
  ko: 'Korean (formal 합니다 style)',
}

// ── 解析 CLI 參數 ────────────────────────────────────────────
const args = process.argv.slice(2)
const targetLang = args.find(a => a.startsWith('--lang='))?.split('=')[1] || null
const forceAll   = args.includes('--force')
const dryRun     = args.includes('--dry-run')

// ── 工具：遞迴 flatten / unflatten ───────────────────────────
function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      flatten(v, key, out)
    } else {
      out[key] = v
    }
  }
  return out
}

function unflatten(flat) {
  const out = {}
  for (const [k, v] of Object.entries(flat)) {
    const parts = k.split('.')
    let cur = out
    for (let i = 0; i < parts.length - 1; i++) {
      cur[parts[i]] ??= {}
      cur = cur[parts[i]]
    }
    cur[parts[parts.length - 1]] = v
  }
  return out
}

// ── 動態載入 ESM 模組（語系檔） ──────────────────────────────
async function loadLocale(locale, filename) {
  const file = path.join(LOCALES_DIR, locale, filename)
  try {
    const mod = await import(pathToFileURL(file).href + `?t=${Date.now()}`)
    return mod.default
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' || err.code === 'ENOENT') return null
    throw err
  }
}

// ── 序列化為 .js 檔（保留註解非首要，先求結構正確） ────────
function serialize(obj, indent = 2) {
  return `export default ${JSON.stringify(obj, null, indent)}\n`
}

// ── OpenAI 翻譯（批次） ─────────────────────────────────────
async function translateBatch(entries, targetLangPrompt) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('未設定 OPENAI_API_KEY 環境變數')

  // 編成 JSON 結構，請 GPT 回傳同 key 但翻譯後的 value
  const payload = Object.fromEntries(entries.map(([k, v]) => [k, v]))

  const systemPrompt = `You are a professional translator specialized in wine education content.
Translate the following JSON values from Traditional Chinese to ${targetLangPrompt}.

Rules:
1. Return ONLY a valid JSON object with the SAME keys, values translated.
2. Keep proper nouns (Bordeaux, Sangiovese, Riesling, château names, region names like Médoc, etc.) in their original Latin/French/Italian/German spelling. Do NOT translate them.
3. Keep emojis (🍇 🍷 etc.) as-is.
4. Keep placeholders like {name}, {0} unchanged.
5. Use professional but accessible tone for wine education.
6. Do NOT add any explanation, just the JSON.`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: JSON.stringify(payload) },
      ],
    }),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`OpenAI API 錯誤 ${res.status}: ${errText}`)
  }
  const data = await res.json()
  const content = data.choices?.[0]?.message?.content
  if (!content) throw new Error('OpenAI 未回傳內容')
  return JSON.parse(content)
}

// ── 切批（每批 N 筆） ────────────────────────────────────────
function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

// ── 處理單一語言檔 ───────────────────────────────────────────
async function processLocaleFile(targetLocale, filename) {
  const sourceObj = await loadLocale(SOURCE_LOCALE, filename)
  if (!sourceObj) return { skipped: true }

  const targetObj = (await loadLocale(targetLocale, filename)) || {}

  const sourceFlat = flatten(sourceObj)
  const targetFlat = flatten(targetObj)

  // 找出缺失或被標記 [TODO] 的 key
  const missing = []
  for (const [k, v] of Object.entries(sourceFlat)) {
    const cur = targetFlat[k]
    if (forceAll || cur === undefined || cur === '' || (typeof cur === 'string' && cur.startsWith('[TODO]'))) {
      missing.push([k, v])
    }
  }

  if (missing.length === 0) {
    return { added: 0, total: Object.keys(sourceFlat).length }
  }

  console.log(`  ↪ 需翻譯 ${missing.length} / ${Object.keys(sourceFlat).length} key`)
  if (dryRun) {
    missing.slice(0, 5).forEach(([k, v]) => console.log(`     [${k}] ${v}`))
    if (missing.length > 5) console.log(`     … 還有 ${missing.length - 5} 個`)
    return { added: missing.length, dryRun: true }
  }

  // 批次翻譯
  const batches = chunk(missing, 30)
  for (let i = 0; i < batches.length; i++) {
    process.stdout.write(`     批次 ${i + 1}/${batches.length}…`)
    const translated = await translateBatch(batches[i], LANG_PROMPT[targetLocale])
    Object.assign(targetFlat, translated)
    console.log(' ✓')
  }

  // 寫回（包含原 source 中所有 key 的對應翻譯）
  const merged = {}
  for (const k of Object.keys(sourceFlat)) {
    merged[k] = targetFlat[k] ?? sourceFlat[k]
  }
  const out = unflatten(merged)
  const outPath = path.join(LOCALES_DIR, targetLocale, filename)
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, serialize(out), 'utf8')

  return { added: missing.length, total: Object.keys(sourceFlat).length }
}

// ── 取得所有 namespace 檔案（zh-TW 內所有 .js） ──────────────
async function listSourceFiles() {
  const sourceDir = path.join(LOCALES_DIR, SOURCE_LOCALE)
  const files = []
  async function walk(dir, prefix = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const rel = prefix ? `${prefix}/${e.name}` : e.name
      if (e.isDirectory()) await walk(path.join(dir, e.name), rel)
      else if (e.name.endsWith('.js')) files.push(rel)
    }
  }
  await walk(sourceDir)
  return files
}

// ── 主流程 ───────────────────────────────────────────────────
async function main() {
  const targets = targetLang
    ? [targetLang]
    : Object.keys(LANG_PROMPT)

  console.log(`\n🌍 i18n 自動翻譯`)
  console.log(`   來源：${SOURCE_LOCALE}`)
  console.log(`   目標：${targets.join(', ')}`)
  console.log(`   模式：${dryRun ? '🧪 試跑' : forceAll ? '🔁 強制全翻' : '➕ 補缺失'}\n`)

  const files = await listSourceFiles()
  if (files.length === 0) {
    console.error('❌ 找不到任何來源語系檔。請先在 src/locales/zh-TW/ 建立 .js 檔。')
    process.exit(1)
  }

  for (const lang of targets) {
    if (lang === SOURCE_LOCALE) continue
    if (!LANG_PROMPT[lang]) {
      console.warn(`⚠️  未支援語言 "${lang}"，跳過。請在 LANG_PROMPT 加上對應指令。`)
      continue
    }
    console.log(`\n📘 [${lang}] ${LANG_PROMPT[lang]}`)
    for (const f of files) {
      console.log(`  · ${f}`)
      try {
        const r = await processLocaleFile(lang, f)
        if (r.skipped) console.log(`    （跳過，來源不存在）`)
        else if (r.added === 0) console.log(`    ✓ 已是最新（共 ${r.total} key）`)
      } catch (err) {
        console.error(`    ❌ ${err.message}`)
      }
    }
  }

  console.log('\n✅ 完成\n')
}

main().catch(err => {
  console.error('❌ 失敗：', err)
  process.exit(1)
})
