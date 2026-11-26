// 將葡萄牙課程投影片的可翻譯字串攤平成 { "slides.N.path": "zh-TW 文字" }，供翻譯 overlay 使用
// 用法：node scripts/extract-portugal-lessons.mjs <outDir>
import fs from 'fs'
import path from 'path'
import { getPortugalLessonSlides } from '../src/components/portugal/data/lessonSlides.js'

const SKIP = new Set(['type', 'icon', 'gradient', 'color', 'id', 'region', 'regionKey', 'answer', 'mapRegion'])
const out = process.argv[2] || 'tmp-portugal-zh'
fs.mkdirSync(out, { recursive: true })

function flatten(v, prefix, acc) {
  if (typeof v === 'string') { if (/[一-鿿]/.test(v)) acc[prefix] = v; return }
  if (Array.isArray(v)) { v.forEach((x, i) => flatten(x, `${prefix}.${i}`, acc)); return }
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) { if (!SKIP.has(k)) flatten(x, prefix ? `${prefix}.${k}` : k, acc) }
}
let total = 0
// courseLevels.js 會引入瀏覽器端 authStore，這裡直接列舉課程 id
const IDS = []
for (let L = 1; L <= 4; L++) { for (let m = 1; m <= 6; m++) for (let l = 1; l <= 4; l++) IDS.push(`P${L}M${m}L${l}`); IDS.push(`P${L}FinalExam`) }
for (const id of IDS) {
  const l = { id }
  const slides = getPortugalLessonSlides(l.id)
  if (slides[0]?.title === '課程內容製作中') continue
  const acc = {}
  flatten(slides, 'slides', acc)
  fs.writeFileSync(path.join(out, `${l.id}.json`), JSON.stringify(acc, null, 2))
  total += Object.values(acc).join('').length
}
console.log('chars', total)

// 課表（等級／章節／課名）→ _levels.json
const src = fs.readFileSync(new URL('../src/components/portugal/data/courseLevels.js', import.meta.url), 'utf8').split('// ─── 進度儲存工具')[0]
const { courseLevels } = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'))
const lv = {}
for (const [k, v] of Object.entries(courseLevels)) {
  const o = { ...v }
  flatten({ [k]: { title: v.title, subtitle: v.subtitle, difficulty: v.difficulty, duration: v.duration, modules: v.modules.map(m => ({ title: m.title, lessons: m.lessons.map(l => ({ title: l.title })) })) } }, '', lv)
}
fs.writeFileSync(path.join(out, '_levels.json'), JSON.stringify(lv, null, 2))
console.log('levels keys', Object.keys(lv).length)
