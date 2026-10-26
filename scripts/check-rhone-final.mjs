// 隆河課程階段 F 煙霧測試：node scripts/check-rhone-final.mjs
// 檢查：21 課無空殼、en/ja 逐鍵覆蓋、en 無中文殘留、ja 未原樣照抄中文、rhoneUi 字典對 gt() 呼叫的覆蓋
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const CJK = /[㐀-鿿]/
const KANA = /[぀-ヿ]/
let fail = 0, warn = 0
const err = (m) => { fail++; console.log('✗ ' + m) }
const wn = (m) => { warn++; console.log('△ ' + m) }

function flat(o, p = '', out = {}) {
  if (typeof o === 'string') { out[p] = o; return out }
  if (Array.isArray(o)) o.forEach((v, i) => flat(v, p ? `${p}.${i}` : `${i}`, out))
  else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) flat(v, p ? `${p}.${k}` : k, out)
  return out
}

const ids = []
for (const l of [1, 2, 3]) for (let n = 1; n <= { 1: 6, 2: 8, 3: 7 }[l]; n++) ids.push(`rh-l${l}-${n}`)
let totalKeys = 0
for (const id of ids) {
  const mod = await import(pathToFileURL(path.join(root, 'src/data/rhone', id + '.js')).href)
  const content = mod.lessonContent
  const fl = flat({ slides: content })
  const zhJson = JSON.stringify(content)
  if (/內容製作中|🚧/.test(zhJson)) err(`${id} 仍有「內容製作中」空殼`)
  if (content.length < 3) err(`${id} 投影片過少 (${content.length})`)
  const need = Object.entries(fl).filter(([k, v]) => CJK.test(v))
  totalKeys += need.length
  for (const lang of ['en', 'ja']) {
    const f = path.join(root, 'src/locales', lang, 'lessons/rhone', id + '.json')
    if (!fs.existsSync(f)) { err(`${lang}/${id}.json 不存在`); continue }
    const ov = JSON.parse(fs.readFileSync(f, 'utf8'))
    for (const [k, v] of need) {
      if (!(k in ov) || !String(ov[k]).trim()) { err(`${lang} ${id} 缺鍵 ${k}`); continue }
      if (lang === 'en' && CJK.test(ov[k])) err(`en ${id} ${k} 殘留中文：${ov[k].slice(0, 40)}`)
      if (lang === 'ja' && ov[k] === v && v.length > 14) err(`ja ${id} ${k} 與中文相同`)
      if (lang === 'ja' && !KANA.test(ov[k]) && !/^[\x00-\x7f]*$/.test(ov[k])) wn(`ja ${id} ${k} 無假名：${ov[k].slice(0, 30)}`)
    }
    for (const k of Object.keys(ov)) if (!(k in fl)) err(`${lang} ${id} 多餘鍵 ${k}`)
  }
}
console.log(`課程 ${ids.length}，需翻譯字串 ${totalKeys}`)

// rhoneUi 字典
const dictOf = async (lang) => {
  const g = (await import(pathToFileURL(path.join(root, 'src/locales/greeceUi', lang + '.js')).href)).default
  const r = (await import(pathToFileURL(path.join(root, 'src/locales/rhoneUi', lang + '.js')).href)).default
  return { ...g, ...r }
}
const dicts = { en: await dictOf('en'), ja: await dictOf('ja') }
const files = []
const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? walk(p) : /\.(vue|js)$/.test(f.name) && files.push(p) } }
walk(path.join(root, 'src/components/rhone')); walk(path.join(root, 'src/data/rhone')); files.push(path.join(root, 'src/stores/rhoneAchievementSystem.js'))
const gtRe = /\bgt\(\s*(["'`])((?:\\.|(?!\1)[^\\])*)\1/g
const used = new Map()
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8')
  for (const m of s.matchAll(gtRe)) {
    const key = m[2].replace(/\\(["'`])/g, '$1').replace(/\\n/g, '\n')
    if (CJK.test(key)) used.set(key, f)
  }
}
let miss = 0
for (const [k, f] of used) for (const lang of ['en', 'ja']) {
  if (!dicts[lang][k]) { miss++; err(`字典缺 ${lang}：「${k.slice(0, 40)}」 (${path.relative(root, f)})`) }
  else if (lang === 'en' && CJK.test(dicts.en[k])) err(`en 字典值殘留中文：「${k.slice(0, 30)}」→ ${dicts.en[k].slice(0, 30)}`)
}
console.log(`gt() 靜態字串 ${used.size}，缺漏 ${miss}`)
for (const lang of ['en', 'ja']) {
  const rv = (await import(pathToFileURL(path.join(root, 'src/locales/rhoneUi', lang + '.js')).href)).default
  for (const [k, v] of Object.entries(rv)) {
    if (!String(v).trim()) err(`rhoneUi/${lang} 空值：${k.slice(0, 30)}`)
    if (lang === 'en' && CJK.test(v)) err(`rhoneUi/en 值殘留中文：${k.slice(0, 30)} → ${v.slice(0, 30)}`)
    const ph = (s) => (s.match(/\{\w+\}/g) || []).sort().join()
    if (ph(k) !== ph(String(v))) err(`rhoneUi/${lang} 佔位符不一致：${k.slice(0, 30)}`)
  }
}
console.log(fail ? `失敗 ${fail}，警告 ${warn}` : `全部通過（警告 ${warn}）`)
process.exit(fail ? 1 : 0)
