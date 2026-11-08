#!/usr/bin/env node
/**
 * 喬治亞葡萄酒課程整合測試（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-ge
 *   npx vite preview --outDir /tmp/dist-ge --port 4173
 * 用法：node scripts/georgia-smoke-test.mjs [--base=http://localhost:4173]
 */
import { createRequire } from 'module'
import fs from 'fs'
import { geLevels, GE_TOTAL_LESSONS } from '../src/data/georgia/lessons.js'
import { GE_CONTENT } from '../src/data/georgia/content.js'
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

const BASE = (process.argv.find(a => a.startsWith('--base=')) || '--base=http://localhost:4173').split('=')[1]
const ADMIN_EMAIL = 'chungshu224@gmail.com'
const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url')
let failed = 0
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`); if (!ok) failed++ }

async function newCtx(browser, email, locale = 'zh-TW') {
  const ctx = await browser.newContext({ viewport: { width: 387, height: 860 }, isMobile: true, hasTouch: true })
  const cors = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' }
  let user = null
  if (email) {
    const now = Math.floor(Date.now() / 1000)
    user = { id: '11111111-1111-1111-1111-111111111111', aud: 'authenticated', role: 'authenticated', email, app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() }
    const jwt = b64({ alg: 'HS256', typ: 'JWT' }) + '.' + b64({ sub: user.id, exp: now + 3600, role: 'authenticated' }) + '.s'
    const session = { access_token: jwt, refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: now + 3600, user }
    await ctx.addInitScript(([k, s]) => localStorage.setItem(k, JSON.stringify(s)), ['sb-ayyrxnaigvzqktkswhnd-auth-token', session])
  }
  await ctx.addInitScript((l) => localStorage.setItem('app_locale', l), locale)
  await ctx.route('**/*.supabase.co/**', r => {
    if (r.request().method() === 'OPTIONS') return r.fulfill({ status: 204, headers: cors })
    if (r.request().url().includes('/auth/v1/user') && user) return r.fulfill({ status: 200, headers: cors, contentType: 'application/json', body: JSON.stringify(user) })
    return r.fulfill({ status: 200, headers: cors, contentType: 'application/json', body: '[]' })
  })
  await ctx.route('**/api/**', r => r.fulfill({ status: 200, contentType: 'application/json', body: '{}' }))
  return ctx
}
const overflow = p => p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
const settle = async (p, ms = 1500) => { await p.waitForLoadState('networkidle').catch(() => {}); await p.waitForTimeout(ms) }

// ── 靜態檢查：課表與題庫結構 ──
check('課表共 21 課', GE_TOTAL_LESSONS === 21, String(GE_TOTAL_LESSONS))
const ids = Object.values(geLevels).flatMap(l => l.lessons.map(x => x.id))
check('課程 id 皆為 ge- 前綴且不重複', ids.every(i => i.startsWith('ge-')) && new Set(ids).size === ids.length)
let quizOk = true
for (const [id, c] of Object.entries(GE_CONTENT)) {
  for (const q of c.quiz || []) {
    if (!(q.options.length >= 3 && q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length && q.explain)) { quizOk = false; console.log('  題庫異常：', id, q.q) }
  }
}
check('題庫結構正確（選項不重複、答案在範圍、有解析）', quizOk)
check('所有已填內容的課 id 都在課表中', Object.keys(GE_CONTENT).every(i => ids.includes(i)))

const browser = await chromium.launch()
for (const [label, email] of [['未登入', null], ['非管理員', 'someone@example.com']]) {
  const ctx = await newCtx(browser, email)
  const p = await ctx.newPage()
  await p.goto(`${BASE}/georgia`); await settle(p, 2500)
  check(`${label}進入 /georgia 會被導走`, !new URL(p.url()).pathname.startsWith('/georgia'), p.url())
  check(`${label}畫面沒有喬治亞課程內容`, (await p.locator('.dtl, .geh-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/`); await settle(p, 2500)
check('首頁（管理員）有喬治亞課程卡片，且與義大利同一個分組', (await p.locator('.course-card.georgia').count()) === 1 &&
  await p.evaluate(() => document.querySelector('.course-card.georgia')?.parentElement === document.querySelector('.course-card.italy')?.parentElement))
const geBox = await p.evaluate(() => { const r = document.querySelector('.course-card.georgia .btn-enter-course')?.getBoundingClientRect(); return r ? { width: r.width, height: r.height } : null })
check('卡片的進入按鈕有實際大小', !!geBox && geBox.width > 50 && geBox.height > 20)
await p.evaluate(() => document.querySelector('.course-card.georgia .btn-enter-course').click()); await p.waitForTimeout(800)
check('點卡片按鈕可進入 /georgia', new URL(p.url()).pathname === '/georgia', p.url())
await p.goto(`${BASE}/`); await settle(p, 1500)
await p.goto(`${BASE}/georgia`); await settle(p)
check('管理員可進入 /georgia', new URL(p.url()).pathname === '/georgia', p.url())
check('首頁顯示不販售說明', (await p.locator('.geh-admin-note').count()) === 1)
check('課程首頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
check('首頁三個階段卡片', (await p.locator('.lc-btn').count()) === 3)

let opened = 0, overflowed = 0
for (const n of [1, 2, 3]) {
  await p.goto(`${BASE}/georgia`); await settle(p, 800)
  await p.locator('.lc-btn').nth(n - 1).click(); await settle(p, 500)
  const ls = geLevels[`level${n}`].lessons
  for (let i = 0; i < ls.length; i++) {
    await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
    if ((await p.locator('.dtl-title').first().textContent()).includes(ls[i].title)) opened++
    if ((await overflow(p)) > 1) overflowed++
    await p.locator('.dtl-link').click(); await p.waitForTimeout(150)
  }
}
check('21 課都能開啟', opened === 21, `${opened}/21`)
check('21 課無橫向溢出', overflowed === 0, `${overflowed}`)

// Level 1：六課皆有內容與測驗；評量課要通過才能完成
const filled = Object.keys(GE_CONTENT)
check('Level 1 六課皆有內容', filled.filter(id => id.startsWith('ge-l1-')).length === 6)
await p.goto(`${BASE}/georgia`); await settle(p, 800)
await p.locator('.lc-btn').nth(0).click(); await settle(p, 500)
let noBadge = 0, withQuiz = 0
for (let i = 0; i < 6; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0) noBadge++
  if ((await p.locator('.dq').count()) === 1) withQuiz++
  if (i < 5) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('六課無「施工中」標記', noBadge === 6, `${noBadge}/6`)
check('六課都有測驗', withQuiz === 6, `${withQuiz}/6`)
check('Level 1 評量為 8 題、及格 60', GE_CONTENT['ge-l1-6'].quiz.length === 8 && GE_CONTENT['ge-l1-6'].passScore === 60)
check('評量課未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const qn = GE_CONTENT['ge-l1-6'].quiz
for (let i = 0; i < qn.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(qn[i].answer).click()
await p.waitForTimeout(200)
check('全對後完成鈕解鎖', await p.locator('.dtl-primary').isEnabled())
await p.locator('.dtl-primary').click(); await p.waitForTimeout(300)
check('完成後該課打勾', (await p.locator('.dtl-lesson.done').count()) >= 1)


// Level 2：八課皆有內容與測驗，評量 10 題、及格 60
check('Level 2 八課皆有內容', filled.filter(id => id.startsWith('ge-l2-')).length === 8)
check('Level 2 評量為 10 題、及格 60', GE_CONTENT['ge-l2-8'].quiz.length === 10 && GE_CONTENT['ge-l2-8'].passScore === 60)
await p.goto(`${BASE}/georgia`); await settle(p, 800)
await p.locator('.lc-btn').nth(1).click(); await settle(p, 500)
let l2Ok = 0, l2Over = 0
for (let i = 0; i < 8; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l2Ok++
  if ((await overflow(p)) > 1) l2Over++
  if (i < 7) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 2 八課無「施工中」且有測驗', l2Ok === 8, `${l2Ok}/8`)
check('Level 2 八課無橫向溢出', l2Over === 0, `${l2Over}`)

// Level 3：七課皆有內容與測驗，評量 12 題、及格 60
check('Level 3 七課皆有內容', filled.filter(id => id.startsWith('ge-l3-')).length === 7)
check('Level 3 評量為 12 題、及格 60', GE_CONTENT['ge-l3-7'].quiz.length === 12 && GE_CONTENT['ge-l3-7'].passScore === 60)
await p.goto(`${BASE}/georgia`); await settle(p, 800)
await p.locator('.lc-btn').nth(2).click(); await settle(p, 500)
let l3Ok = 0, l3Over = 0
for (let i = 0; i < 7; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l3Ok++
  if ((await overflow(p)) > 1) l3Over++
  if (i < 6) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 3 七課無「施工中」且有測驗', l3Ok === 7, `${l3Ok}/7`)
check('Level 3 七課無橫向溢出', l3Over === 0, `${l3Over}`)

// ── 地圖：近似範圍資料與頁面 ──
const gj = JSON.parse(fs.readFileSync(new URL('../public/georgia/georgia_pdo_areas.geojson', import.meta.url), 'utf-8'))
const PDO_KEYS = ['kakheti', 'kindzmarauli', 'tsinandali', 'mukuzani', 'atenuri', 'sviri', 'tvishi', 'khvanchkara']
const allCoords = []
const walk = (c) => (typeof c[0] === 'number' ? allCoords.push(c) : c.forEach(walk))
gj.features.forEach(f => walk(f.geometry.coordinates))
check('範圍資料的 PDO 皆為已定義的八個', gj.features.every(f => PDO_KEYS.includes(f.properties.pdo)))
check('範圍資料皆標明精度（municipality／village）', gj.features.every(f => ['municipality', 'village'].includes(f.properties.precision)))
check('範圍資料座標皆在喬治亞境內', allCoords.every(c => c[0] > 40 && c[0] < 47 && c[1] > 41 && c[1] < 43.6))
check('Kakheti 有八個市鎮多邊形', gj.features.filter(f => f.properties.pdo === 'kakheti' && f.properties.precision === 'municipality').length === 8)
check('資料含 OSM 授權標示', /OpenStreetMap/.test(gj.properties.attribution))
await p.goto(`${BASE}/georgia`); await settle(p, 1200)
check('快速入口可點', (await p.locator('.qn-card:disabled').count()) === 0)
await p.locator('.qn-card').nth(0).click(); await p.waitForTimeout(1200)
check(`地圖頁列出 ${PDO_KEYS.length} 個 PDO`, (await p.locator('.gem-item').count()) === PDO_KEYS.length)
check('地圖頁有「不是法定邊界」說明', (await p.locator('.gem-note').first().textContent()).includes('不是法定邊界'))
await p.locator('.gem-item').nth(2).click(); await p.waitForTimeout(200)
check('點選 PDO 出現資訊卡', (await p.locator('.gem-card').count()) === 1)
await p.locator('.gem-chip').nth(0).click(); await p.waitForTimeout(150)
check('切換可隱藏該 PDO（晶片變灰）', (await p.locator('.gem-chip.off').count()) === 1)
check('地圖頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
await p.locator('.gem-back').click(); await p.waitForTimeout(400)
check('返回課程首頁', (await p.locator('.lc-btn').count()) === 3)

check('頁面無 JS 錯誤', errors.length === 0, errors.slice(0, 2).join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
