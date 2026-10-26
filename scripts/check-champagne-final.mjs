#!/usr/bin/env node
/** 階段 F 煙霧測試：21 課完整性、champagneUi 字典對 gt() 字面量與互動資料覆蓋、en 字典殘留中文。
 *  用法：node scripts/check-champagne-final.mjs  （lesson 逐鍵覆蓋另跑 check-champagne-i18n.mjs） */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
const R = process.cwd()
const zh = /[一-鿿]/
let bad = 0
const fail = m => { bad++; console.log('✗', m) }
// 1) 21 課
const ids = [6, 8, 7].flatMap((n, i) => Array.from({ length: n }, (_, k) => `ch-l${i + 1}-${k + 1}`))
for (const id of ids) {
  const f = path.join(R, 'src/data/champagne', id + '.js')
  if (!fs.existsSync(f)) { fail(`缺 ${id}`); continue }
  const { lessonContent } = await import(pathToFileURL(f).href)
  if (!lessonContent || lessonContent.length < 3) fail(`${id} 投影片過少`)
  if (/內容製作中/.test(fs.readFileSync(f, 'utf8'))) fail(`${id} 仍有「內容製作中」`)
  for (const lg of ['en', 'ja']) if (!fs.existsSync(path.join(R, 'src/locales', lg, 'lessons/champagne', id + '.json'))) fail(`缺 ${lg}/${id}.json`)
}
console.log(`課程檔 ${ids.length} 課檢查完`)
// 2) 字典
const en = (await import(pathToFileURL(path.join(R, 'src/locales/champagneUi/en.js')).href)).default
const ja = (await import(pathToFileURL(path.join(R, 'src/locales/champagneUi/ja.js')).href)).default
for (const k of Object.keys(en)) if (!(k in ja)) fail(`ja 缺 ${k.slice(0, 40)}`)
for (const k of Object.keys(ja)) if (!(k in en)) fail(`en 缺 ${k.slice(0, 40)}`)
for (const [k, v] of Object.entries(en)) if (zh.test(v)) fail(`en 殘留中文：${k.slice(0, 40)}`)
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])
for (const f of walk('src/components/champagne').filter(f => /\.(vue|js)$/.test(f))) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(/gt\(\s*(['"`])((?:\\.|(?!\1).)*)\1/gs)) {
    const s = m[2].replace(/\\'/g, "'").replace(/\\"/g, '"')
    if (zh.test(s) && !(s in en && s in ja)) fail(`${path.basename(f)} gt 缺字典：${s.slice(0, 40)}`)
  }
}
for (const f of ['gameData', 'flashData', 'tastingData']) {
  const t = fs.readFileSync(`src/data/champagne/${f}.js`, 'utf8')
  for (const m of t.matchAll(/(['"`])((?:\\.|(?!\1)[^\n\\])*)\1/g)) {
    const s = m[2].replace(/\\'/g, "'")
    if (zh.test(s) && !(s in en && s in ja)) fail(`${f} 缺字典：${s.slice(0, 40)}`)
  }
}
const ach = fs.readFileSync('src/stores/champagneAchievementSystem.js', 'utf8')
for (const m of ach.matchAll(/(?:title|description|name): '([^']*)'/g)) if (zh.test(m[1]) && !(m[1] in en && m[1] in ja)) fail(`成就缺字典：${m[1]}`)
// 3) 有出入的數字不得進測驗
const banned = [/\b44 個/, /2004/, /2010/, /10,000 公斤/, /8,000 公斤/]
for (const id of ids) {
  const { lessonContent } = await import(pathToFileURL(path.join(R, 'src/data/champagne', id + '.js')).href)
  for (const s of lessonContent) for (const q of s.componentProps?.slide?.questions || []) {
    const t = [q.question, ...(q.options || []), q.explanation || ''].join(' ')
    for (const p of banned) if (p.test(t)) fail(`${id} 測驗含有出入數字 ${p}：${q.question.slice(0, 30)}`)
  }
}
console.log(bad ? `\n${bad} 項問題` : '\n全部通過')
process.exit(bad ? 1 : 0)
