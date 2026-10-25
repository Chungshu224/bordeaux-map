#!/usr/bin/env node
/**
 * 香檳課程 en/ja lesson overlay 逐鍵覆蓋率檢查
 * 用法：node scripts/check-champagne-i18n.mjs [前綴，如 ch-l2]
 * 比對每課「中文原文可翻譯鍵」與 en／ja JSON 的鍵：缺漏、多餘、空值、與原文相同（疑似未翻譯）。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { extractTranslatable } from '../src/data/lessonI18nUtils.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const prefix = process.argv[2] || 'ch-l'
const dir = path.join(ROOT, 'src/data/champagne')

function flatten(slides) {
  const out = extractTranslatable(slides)
  slides.forEach((s, i) => {
    if (s?.component !== 'QuizSlide') return
    const q = s.componentProps?.slide
    if (!q) return
    const base = `slides.${i}.componentProps.slide`
    if (q.title) out[`${base}.title`] = q.title
    ;(q.questions || []).forEach((it, j) => {
      out[`${base}.questions.${j}.question`] = it.question
      ;(it.options || []).forEach((o, k) => { out[`${base}.questions.${j}.options.${k}`] = o })
      if (it.explanation) out[`${base}.questions.${j}.explanation`] = it.explanation
    })
  })
  return out
}

let bad = 0, total = 0
for (const f of fs.readdirSync(dir).filter(f => f.startsWith(prefix) && f.endsWith('.js')).sort()) {
  const id = f.replace('.js', '')
  const { lessonContent } = await import(pathToFileURL(path.join(dir, f)).href)
  const zh = flatten(lessonContent)
  for (const lg of ['en', 'ja']) {
    const p = path.join(ROOT, 'src/locales', lg, 'lessons/champagne', `${id}.json`)
    const ov = JSON.parse(fs.readFileSync(p, 'utf8'))
    const missing = Object.keys(zh).filter(k => !(k in ov))
    const extra = Object.keys(ov).filter(k => !(k in zh))
    const empty = Object.keys(ov).filter(k => !String(ov[k]).trim())
    const same = Object.keys(ov).filter(k => ov[k] === zh[k] && zh[k].length > 8 && /[一-鿿]/.test(zh[k]))
    total += Object.keys(zh).length
    const flag = missing.length || extra.length || empty.length || same.length
    if (flag) bad++
    console.log(`${flag ? '✗' : '✓'} ${id} ${lg}: keys ${Object.keys(zh).length}, 缺漏 ${missing.length}, 多餘 ${extra.length}, 空值 ${empty.length}, 同原文 ${same.length}`)
    if (flag) console.log('   ', { missing, extra, empty, same }.toString(), JSON.stringify({ missing, extra, empty, same }))
  }
}
console.log(bad ? `\n有 ${bad} 個檔案未通過` : `\n全部通過（${total} 個中文鍵 × en/ja）`)
process.exit(bad ? 1 : 0)
