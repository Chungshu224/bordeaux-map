#!/usr/bin/env node
/**
 * Extract translatable dot-path keys from each Bourgogne module JSON.
 * Produces flat { dotPath: zhString } JSONs in scripts/_bourgogne-zh-source/.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcRoot = join(root, 'public', 'bourgogne', 'data', 'courses')
const outRoot = join(root, 'scripts', '_bourgogne-zh-source')
mkdirSync(outRoot, { recursive: true })

// translatable string field names anywhere in the tree
const TRANSLATABLE = new Set([
  'title', 'subtitle', 'content', 'description', 'caption',
  'question', 'explanation', 'note', 'summary', 'text', 'label',
  'tagline', 'altText', 'displayValue', 'highlight', 'event',
  'name', 'nameFr', 'nameEn', 'heading', 'tasting', 'pairing',
  'instructions', 'finalExamTitle', 'leftTitle', 'rightTitle',
  'placeholder', 'hint', 'descShort', 'descLong'
])
// recursive container keys (arrays of objects) — walk in
const RECURSE_KEYS = new Set([
  'lessons', 'slides', 'sections', 'items', 'cards', 'highlights',
  'questions', 'data', 'datasets', 'points', 'list', 'regions',
  'grapes', 'tips', 'objectives', 'timeline', 'mapSlides',
  'labelElements', 'readingExamples', 'features', 'characteristics',
  'tastingNotes', 'pairings', 'examples', 'leftPoints', 'rightPoints',
  'stats', 'tags', 'modules'
])
// arrays of plain strings to flatten with index
const STRING_ARRAY_KEYS = new Set([
  'options', 'points', 'keyPoints', 'tips', 'objectives',
  'leftPoints', 'rightPoints', 'tastingNotes', 'tags',
  'examples', 'list', 'features', 'regions', 'grapes',
  'pairings', 'labels'
])

function walk(node, prefix, out) {
  if (node == null) return
  if (typeof node === 'string') return
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, `${prefix}.${i}`, out))
    return
  }
  if (typeof node !== 'object') return
  for (const [k, v] of Object.entries(node)) {
    const childPrefix = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'string') {
      if (TRANSLATABLE.has(k) && v.trim().length > 0) {
        out[childPrefix] = v
      }
    } else if (Array.isArray(v)) {
      // string-array under known keys
      if (STRING_ARRAY_KEYS.has(k) && v.every(x => typeof x === 'string')) {
        v.forEach((s, i) => {
          if (s.trim().length > 0) out[`${childPrefix}.${i}`] = s
        })
      } else {
        v.forEach((item, i) => walk(item, `${childPrefix}.${i}`, out))
      }
    } else if (v && typeof v === 'object') {
      walk(v, childPrefix, out)
    }
  }
}

const levels = ['level1', 'level2', 'level3', 'level4']
const summary = []
for (const lvl of levels) {
  const lvlDir = join(srcRoot, lvl)
  const files = readdirSync(lvlDir).filter(f =>
    f.endsWith('.json') && f !== 'modules.json' && f !== 'levels.json' && f !== 'quiz-bank.json'
  )
  const outDir = join(outRoot, lvl)
  mkdirSync(outDir, { recursive: true })
  for (const f of files) {
    const src = JSON.parse(readFileSync(join(lvlDir, f), 'utf8'))
    const flat = {}
    // module top-level
    if (src.title) flat.title = src.title
    if (src.description) flat.description = src.description
    if (src.lessons) walk(src.lessons, 'lessons', flat)
    const outPath = join(outDir, f)
    writeFileSync(outPath, JSON.stringify(flat, null, 2), 'utf8')
    summary.push({ lvl, file: f, keys: Object.keys(flat).length })
  }
}

console.table(summary)
const totalKeys = summary.reduce((s, r) => s + r.keys, 0)
console.log(`\n✅ Extracted ${summary.length} modules, total ${totalKeys} translatable keys.`)
console.log(`Output: ${outRoot}`)
