// 瑞士課程翻譯覆蓋檢查：課文／題庫／地圖／介面文字在 en、ja 字典都要有對應，且 {變數} 不可遺漏
// 用法：node scripts/switzerland-i18n-check.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const imp = (p) => import(pathToFileURL(path.join(root, p)).href)
const en = (await imp('src/locales/swissUi/en.js')).default
const ja = (await imp('src/locales/swissUi/ja.js')).default
const { SWI_CONTENT } = await imp('src/data/switzerland/content.js')
const { swiLevels } = await imp('src/data/switzerland/lessons.js')
const { SWISS_GAMES, SWISS_GAME_SOURCE } = await imp('src/data/switzerland/gameData.js')
const { SWISS_ZONES, SWISS_POINTS } = await imp('src/data/switzerland/mapData.js')

const ZH = /[一-鿿]/
const need = new Set()
const walk = (o) => {
  if (typeof o === 'string') { if (ZH.test(o)) need.add(o) }
  else if (Array.isArray(o)) o.forEach(walk)
  else if (o && typeof o === 'object') Object.values(o).forEach(walk)
}
;[swiLevels, SWI_CONTENT, SWISS_GAMES, SWISS_GAME_SOURCE, SWISS_ZONES, SWISS_POINTS].forEach(walk)

// 元件裡 gt('…') / t('…') 的字面字串
const files = [
  ...fs.readdirSync(path.join(root, 'src/components/switzerland')).map(f => 'src/components/switzerland/' + f),
  'src/components/sparkling/games/SparklingQuizEngine.vue',
  'src/data/switzerland/gameData.js',
  'src/stores/switzerlandAchievementSystem.js'
]
const lit = /\b(?:gt|t)\(\s*'((?:[^'\\]|\\.)*)'/g
for (const f of files) {
  const src = fs.readFileSync(path.join(root, f), 'utf8')
  let m
  while ((m = lit.exec(src))) if (ZH.test(m[1])) need.add(m[1].replace(/\\'/g, "'"))
}
// 成就名稱／說明、筆記本卡片以物件欄位寫在程式裡，另外掃 title/desc/what/frame 與標籤陣列
for (const f of ['src/stores/switzerlandAchievementSystem.js', 'src/components/switzerland/SwissNotebookPage.vue']) {
  const src = fs.readFileSync(path.join(root, f), 'utf8')
  for (const m of src.matchAll(/(?:title|desc|what|frame):\s*'((?:[^'\\]|\\.)*)'/g)) if (ZH.test(m[1])) need.add(m[1])
  for (const m of src.matchAll(/\['(?:region|variety|system|style|market)',\s*'([^']+)'\]/g)) need.add(m[1])
}

let bad = 0
const vars = (s) => (s.match(/\{\w+\}/g) || []).sort().join(',')
for (const zh of need) {
  for (const [name, d] of [['en', en], ['ja', ja]]) {
    const v = d[zh]
    if (!v) { console.log(`MISSING ${name}: ${zh.slice(0, 50)}`); bad++; continue }
    if (name && vars(zh) !== vars(v)) { console.log(`VAR MISMATCH ${name}: ${zh.slice(0, 50)}`); bad++ }
    if (ZH.test(v)) {
      // 日文可含漢字；英文不可含中文字
      if (name === 'en') { console.log(`CJK IN EN: ${zh.slice(0, 40)}`); bad++ }
    }
  }
}
console.log(`checked ${need.size} strings, ${bad} problem(s)`)
process.exit(bad ? 1 : 0)
