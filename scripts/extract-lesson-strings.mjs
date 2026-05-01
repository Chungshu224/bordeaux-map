/**
 * 從 Bordeaux lesson JS 檔提取可翻譯字串
 * 輸出 flat JSON (與 lessonI18nUtils.extractTranslatable 邏輯一致)
 * 用法: node scripts/extract-lesson-strings.mjs l1-1
 *       node scripts/extract-lesson-strings.mjs all   → 輸出 scripts/extracted/
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const TRANSLATABLE_KEYS = new Set([
  'title','subtitle','content','description','question',
  'explanation','caption','label','text','note','summary',
])
const RECURSIVE_KEYS = new Set([
  'highlights','options','items','cards','sections','list',
])

function walk(node, prefix, out) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => walk(v, `${prefix}.${i}`, out))
    return
  }
  if (!node || typeof node !== 'object') return
  for (const [k, v] of Object.entries(node)) {
    const cp = `${prefix}.${k}`
    if (typeof v === 'string') {
      if (TRANSLATABLE_KEYS.has(k) && v.trim().length > 0) out[cp] = v
    } else if (Array.isArray(v)) {
      if (k === 'options' && v.every(x => typeof x === 'string')) {
        v.forEach((s, i) => { if (s.trim()) out[`${cp}.${i}`] = s })
      } else if (RECURSIVE_KEYS.has(k)) {
        v.forEach((item, i) => walk(item, `${cp}.${i}`, out))
      }
    } else if (v && typeof v === 'object') {
      walk(v, cp, out)
    }
  }
}

function extractFrom(slides) {
  const out = {}
  if (!Array.isArray(slides)) return out
  slides.forEach((slide, i) => {
    if (!slide || typeof slide !== 'object') return
    if (slide.component) return
    walk(slide, `slides.${i}`, out)
  })
  return out
}

const EXPORT_CANDIDATES = [
  'default','lessonContent',
  ...['l21','l22','l23','l24','l25','l26','l27','l28','l29',
      'l31','l32','l33','l34','l35','l36','l37','l38','l39',
      'l310','l311Part1','l311Part2','l312','l313Part1','l313Part2',
      'l314','l3gtc'].map(k => `${k}Content`),
]

async function processLesson(id) {
  const url = new URL(`../src/data/lessons/${id}.js`, import.meta.url)
  const mod = await import(url)
  let content = null
  for (const key of EXPORT_CANDIDATES) {
    if (mod[key] && Array.isArray(mod[key]) && mod[key].length > 0) {
      content = mod[key]; break
    }
  }
  if (!content) throw new Error(`No content found for ${id}`)
  return extractFrom(content)
}

const ALL_LESSONS = [
  'l1-1','l1-2','l1-3','l1-4','l1-5','l1-6','l1-7','l1-8',
  'l2-1','l2-2','l2-3','l2-4','l2-5','l2-6','l2-7','l2-8','l2-9',
  'l3-1','l3-2','l3-3','l3-4','l3-5','l3-6','l3-9','l3-10',
  'l3-11','l3-11-part1','l3-12','l3-13-part1','l3-13-part2','l3-14',
  'l4-1','l4-2','l4-3','l4-4','l4-5','l4-6','l4-7','l4-8','l4-9','l4-10','l4-11','l4-12',
]

const arg = process.argv[2]
const outDir = join(__dirname, 'extracted')
if (!existsSync(outDir)) mkdirSync(outDir)

if (arg === 'all') {
  for (const id of ALL_LESSONS) {
    try {
      const strings = await processLesson(id)
      const count = Object.keys(strings).length
      writeFileSync(join(outDir, `${id}.json`), JSON.stringify(strings, null, 2), 'utf-8')
      console.log(`✓ ${id}: ${count} strings`)
    } catch(e) {
      console.error(`✗ ${id}: ${e.message}`)
    }
  }
  console.log(`\nOutput: ${outDir}`)
} else if (arg) {
  const strings = await processLesson(arg)
  console.log(JSON.stringify(strings, null, 2))
} else {
  console.log('Usage: node extract-lesson-strings.mjs <lessonId|all>')
  console.log('Lessons:', ALL_LESSONS.join(', '))
}
