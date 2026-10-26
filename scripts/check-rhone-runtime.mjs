// 隆河互動資料 en/ja 顯示煙霧測試：node scripts/check-rhone-runtime.mjs
// 1) 以 en／ja 實際產生遊戲題目，en 不可殘留中文  2) 掃描互動資料／成就／地圖元件的中文字串字面量是否都有字典
import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const vite = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const imp = async (p) => { const m = await vite.ssrLoadModule('/' + p); return m }
const CJK = /[㐀-鿿]/
let fail = 0
const err = (m) => { fail++; console.log('✗ ' + m) }
const { i18n } = await imp('src/locales/index.js')
const g = await imp('src/data/rhone/gameData.js')
const f = await imp('src/data/rhone/flashData.js')
const walkStr = (o, cb, p = '') => { if (typeof o === 'string') cb(o, p); else if (Array.isArray(o)) o.forEach((v, i) => walkStr(v, cb, p + '.' + i)); else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) walkStr(v, cb, p + '.' + k) }
for (const loc of ['en', 'ja']) {
  i18n.global.locale.value = loc
  let n = 0
  for (const diff of ['easy', 'normal', 'hard', 'medium']) for (let r = 0; r < 6; r++) {
    for (const [name, fn] of [['region', g.buildRegionQuestions], ['grape', g.buildGrapeQuestions], ['class', g.buildClassificationQuestions], ['flash', f.buildFlashQuestions]]) {
      let qs; try { qs = fn(diff) } catch (e) { err(`${loc} ${name}(${diff}) 例外：${e.message}`); continue }
      n += qs.length
      if (loc === 'en') walkStr(qs, (s, p) => { if (CJK.test(s)) err(`en ${name}(${diff}) 殘留中文 ${p}：${s.slice(0, 40)}`) })
    }
  }
  console.log(`${loc}：檢查題目 ${n} 題`)
}
// 字面量掃描
const dict = async (lang) => ({ ...(await imp(`src/locales/greeceUi/${lang}.js`)).default, ...(await imp(`src/locales/rhoneUi/${lang}.js`)).default })
const D = { en: await dict('en'), ja: await dict('ja') }
const files = ['src/data/rhone/gameData.js', 'src/data/rhone/tastingData.js', 'src/data/rhone/pointRef.js', 'src/stores/rhoneAchievementSystem.js']
const strRe = /(["'`])((?:\\.|(?!\1)[^\\\n])*)\1/g
const seen = new Set()
for (const rel of files) {
  const s = fs.readFileSync(path.join(root, rel), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '')
  for (const m of s.matchAll(strRe)) {
    const t = m[2].replace(/\\(["'`])/g, "$1")
    if (!CJK.test(t) || seen.has(t)) continue
    seen.add(t)
    for (const lang of ['en', 'ja']) if (!D[lang][t]) err(`${rel} 字面量無 ${lang} 字典：「${t.slice(0, 40)}」`)
  }
}
console.log(`字面量 ${seen.size} 條`)
await vite.close()
console.log(fail ? `失敗 ${fail}` : '全部通過')
process.exit(fail ? 1 : 0)
