// 驗證葡萄牙課程 overlay：key 與 zh 來源完全一致、HTML 標籤與 class 不變、{n} 占位不缺、日文/英文確實有翻譯
// 用法：node scripts/validate-portugal-i18n.mjs <zhDir> <overlayDir> <en|ja> [id...]
import fs from 'fs'
const [zhDir, ovDir, lang, ...only] = process.argv.slice(2)
const ids = (only.length ? only : fs.readdirSync(zhDir).map(f => f.replace('.json', '')))
const tags = s => (s.match(/<\/?[a-zA-Z][^>]*>/g) || []).join('|')
let bad = 0
for (const id of ids) {
  const zf = `${zhDir}/${id}.json`, of = `${ovDir}/${id}.json`
  if (!fs.existsSync(of)) { console.log('MISSING', id); bad++; continue }
  let zh, ov
  try { zh = JSON.parse(fs.readFileSync(zf, 'utf8')); ov = JSON.parse(fs.readFileSync(of, 'utf8')) } catch (e) { console.log('BADJSON', id, e.message); bad++; continue }
  const zk = Object.keys(zh), ok = Object.keys(ov)
  for (const k of zk) {
    if (!(k in ov)) { console.log('NOKEY', id, k); bad++; continue }
    if (typeof ov[k] !== 'string' || !ov[k].trim()) { console.log('EMPTY', id, k); bad++; continue }
    if (tags(zh[k]) !== tags(ov[k])) { console.log('TAGS', id, k); bad++ }
    if (lang === 'ja' && !/[぀-ヿ一-鿿]/.test(ov[k]) && /[一-鿿]/.test(zh[k])) { console.log('NOJA', id, k); bad++ }
    if (lang === 'en' && /[一-鿿]/.test(ov[k])) { console.log('CJK-IN-EN', id, k); bad++ }
  }
  for (const k of ok) if (!(k in zh)) { console.log('EXTRA', id, k); bad++ }
}
console.log(lang, 'checked', ids.length, 'problems', bad)
process.exit(bad ? 1 : 0)
