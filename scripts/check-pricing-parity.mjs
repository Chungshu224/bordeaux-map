// 驗證前後端定價目錄一致：node scripts/check-pricing-parity.mjs
import * as S from '../api/_lib/catalog.js'
import * as C from '../src/lib/pricingCatalog.js'
const keys = ['PRICE_CLASSES', 'COURSE_CLASS', 'LIVE_COURSES', 'BUNDLES', 'GLOBAL_TIERS', 'SPRINT', 'BILLING_PERIODS']
let bad = 0
for (const k of keys) {
  const a = JSON.stringify(S[k], (_, v) => (v === Infinity ? 'Infinity' : v))
  const b = JSON.stringify(C[k], (_, v) => (v === Infinity ? 'Infinity' : v))
  if (a !== b) { console.error('MISMATCH', k); bad++ }
}
for (const [id, tier, per] of [['bordeaux','basic','monthly'],['hungary','basic','yearly'],['global','basic','yearly'],['global','basic','quarterly'],['bundle_france','basic','yearly'],['bundle_france','basic','monthly']]) {
  if (S.getServerPrice(id, tier, per) !== C.getServerPrice(id, tier, per)) { console.error('PRICE MISMATCH', id, tier, per); bad++ }
}
// 區域包不得與其他包重複課程；所有課程必須屬於某一包
const all = Object.values(S.BUNDLES).flatMap((b) => b.courses)
if (new Set(all).size !== all.length) { console.error('bundle overlap'); bad++ }
for (const c of Object.keys(S.COURSE_CLASS)) if (!all.includes(c)) { console.error('course not in any bundle:', c); bad++ }
for (const c of S.LIVE_COURSES) if (!S.COURSE_CLASS[c]) { console.error('live course w/o class:', c); bad++ }
console.log(bad ? `FAIL (${bad})` : 'OK parity; courses=' + Object.keys(S.COURSE_CLASS).length + ' live=' + S.LIVE_COURSES.length + ' global=' + JSON.stringify(S.globalPrice()))
process.exit(bad ? 1 : 0)
