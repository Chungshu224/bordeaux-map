#!/usr/bin/env node
/**
 * 全球強化酒專論整合測試（階段 A）（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-test
 *   npx vite preview --outDir /tmp/dist-test --port 4173
 * 用法：node scripts/fortified-smoke-test.mjs [--base=http://localhost:4173]
 * 檢查：存取控制（未登入／非管理員／管理員）、首頁入口、21 課可開啟且無橫向溢出、評量鎖定與通過、遊戲、品飲筆記、成就。
 */
import { createRequire } from 'module'
import { FORTIFIED_CONTENT } from '../src/data/fortified/content.js'
import { FORTIFIED_GAMES } from '../src/data/fortified/gameData.js'
import { REGIONS } from '../src/data/fortified/regions.js'
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

const BASE = (process.argv.find(a => a.startsWith('--base=')) || '--base=http://localhost:4173').split('=')[1]
const ADMIN_EMAIL = 'chungshu224@gmail.com'
const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url')
let failed = 0
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`); if (!ok) failed++ }

async function newCtx(browser, email) {
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

const browser = await chromium.launch()
for (const [label, email] of [['未登入', null], ['非管理員', 'someone@example.com']]) {
  const ctx = await newCtx(browser, email)
  const p = await ctx.newPage()
  await p.goto(`${BASE}/fortified`); await settle(p, 2500)
  check(`${label}進入 /fortified 會被導走`, !new URL(p.url()).pathname.startsWith('/fortified'), p.url())
  await p.goto(`${BASE}/fortified/map`); await settle(p, 2000)
  check(`${label}進入 /fortified/map 會被導走`, !new URL(p.url()).pathname.startsWith('/fortified'), p.url())
  check(`${label}畫面沒有強化酒內容`, (await p.locator('.ftl, .fof-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/fortified`); await settle(p)
check('管理員可進入 /fortified', new URL(p.url()).pathname === '/fortified', p.url())
check('課程首頁無橫向溢出', (await overflow(p)) <= 0)
check('首頁顯示強化酒標題', (await p.locator('text=全球強化酒專論').count()) > 0)
for (const [idx, n] of [[0, 6], [1, 8], [2, 7]]) {
  if (idx > 0) { await p.goto(`${BASE}/fortified`); await settle(p, 1200) }
  await p.locator('.lc-btn').nth(idx).click(); await p.waitForTimeout(500)
  check(`Level ${idx + 1} 列出 ${n} 課`, (await p.locator('.ftl-lesson').count()) === n)
  for (let i = 0; i < n; i++) {
    const id = `fo-l${idx + 1}-${i + 1}`
    const has = !!FORTIFIED_CONTENT[id]
    await p.locator('.ftl-lesson').nth(i).click(); await p.waitForTimeout(200)
    const ov = await overflow(p)
    if (has) {
      const ok = (await p.locator('.slide-blocks > *').count()) > 0 && (await p.locator('.fq-q').count()) >= 2 && (await p.locator('.ftl-badge').count()) === 0 && ov <= 0
      check(`${id} 內容、小測驗、無溢出`, ok, `overflow=${ov}`)
      if (i < n - 1) check(`${id} 有練習題`, (await p.locator('.ftl-points').count()) === 1)
    } else {
      check(`${id} 顯示施工中、無溢出`, (await p.locator('.ftl-badge').count()) === 1 && ov <= 0)
    }
    await p.locator('.ftl-link').click(); await p.waitForTimeout(150)
  }
}
// 評量鎖定：Level 1 第 6 課
const q6 = FORTIFIED_CONTENT['fo-l1-6'].quiz
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
await p.locator('.lc-btn').first().click(); await p.waitForTimeout(400)
await p.locator('.ftl-lesson').nth(5).click(); await p.waitForTimeout(300)
check('評量為 8 題', (await p.locator('.fq-q').count()) === 8)
check('評量未作答時無法標記完成', await p.locator('.ftl-primary').isDisabled())
for (let q = 0; q < q6.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth((q6[q].answer + 1) % 4).click()
check('評量全錯時無法標記完成', await p.locator('.ftl-primary').isDisabled())
await p.locator('.fq-retry').click()
for (let q = 0; q < q6.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth(q6[q].answer).click()
check('評量全對後可標記完成', !(await p.locator('.ftl-primary').isDisabled()))
await p.locator('.ftl-primary').click(); await p.waitForTimeout(300)
check('完成後列表出現已完成標記', (await p.locator('.ftl-lesson.done').count()) === 1)
// Level 2 評量（第 8 課）
const q28 = FORTIFIED_CONTENT['fo-l2-8'].quiz
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
await p.locator('.lc-btn').nth(1).click(); await p.waitForTimeout(400)
await p.locator('.ftl-lesson').nth(7).click(); await p.waitForTimeout(300)
check('Level 2 評量為 10 題', (await p.locator('.fq-q').count()) === 10)
for (let q = 0; q < q28.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth((q28[q].answer + 1) % 4).click()
check('Level 2 評量全錯時無法標記完成', await p.locator('.ftl-primary').isDisabled())
await p.locator('.fq-retry').click()
for (let q = 0; q < q28.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth(q28[q].answer).click()
check('Level 2 評量全對後可標記完成', !(await p.locator('.ftl-primary').isDisabled()))
// Level 3 評量（第 7 課）
const q37 = FORTIFIED_CONTENT['fo-l3-7'].quiz
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
await p.locator('.lc-btn').nth(2).click(); await p.waitForTimeout(400)
await p.locator('.ftl-lesson').nth(6).click(); await p.waitForTimeout(300)
check('Level 3 評量為 12 題', (await p.locator('.fq-q').count()) === 12)
for (let q = 0; q < q37.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth((q37[q].answer + 1) % 4).click()
check('Level 3 評量全錯時無法標記完成', await p.locator('.ftl-primary').isDisabled())
await p.locator('.fq-retry').click()
for (let q = 0; q < q37.length; q++) await p.locator('.fq-q').nth(q).locator('.fq-opt').nth(q37[q].answer).click()
check('Level 3 評量全對後可標記完成', !(await p.locator('.ftl-primary').isDisabled()))
check('全部 21 課都有內容', Object.keys(FORTIFIED_CONTENT).length === 21)
// 地圖
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
const achTotal = await p.locator('.foa-item').count()
check('成就面板 9 項', achTotal === 9, `count=${achTotal}`)
await p.locator('.qn-card').nth(0).click(); await p.waitForTimeout(800)
check(`地圖頁列出 ${REGIONS.length} 個產區`, (await p.locator('.fom-mini').count()) === REGIONS.length)
check('地圖頁無橫向溢出', (await overflow(p)) <= 0)
await p.locator('.fom-mini').first().click(); await p.waitForTimeout(300)
check('點選產區出現資訊卡', (await p.locator('.fom-card').count()) === 1)
await p.locator('.fom-chip').nth(1).click(); await p.waitForTimeout(200)
check('類型篩選會縮減產區', (await p.locator('.fom-mini').count()) < REGIONS.length)
await p.locator('.fom-back').click(); await p.waitForTimeout(400)
// 遊戲
await p.locator('.qn-card').nth(1).click(); await p.waitForTimeout(400)
check(`遊戲樞紐列出 ${FORTIFIED_GAMES.length} 種遊戲`, (await p.locator('.sgh-card').count()) === FORTIFIED_GAMES.length)
for (let g = 0; g < FORTIFIED_GAMES.length; g++) {
  await p.locator('.sgh-card').nth(g).click(); await p.waitForTimeout(250)
  await p.locator('.diff-card').first().click(); await p.waitForTimeout(250)
  let guard = 0
  while (!(await p.locator('.final-area').count()) && guard++ < 60) {
    if (await p.locator('.btn-next').count()) { await p.locator('.btn-next').click() }
    else if (await p.locator('.btn-submit').count()) {
      for (let k = 0; k < 6 && (await p.locator('.btn-submit').isDisabled()); k++) await p.locator('.opt-btn:not([disabled])').first().click()
      await p.locator('.btn-submit').click()
    } else if (await p.locator('.opt-btn').count()) { await p.locator('.opt-btn').first().click() }
    await p.waitForTimeout(60)
  }
  check(`遊戲「${FORTIFIED_GAMES[g].name}」可玩完`, (await p.locator('.final-area').count()) === 1 && (await overflow(p)) <= 0)
  await p.locator('.back-btn').first().click(); await p.waitForTimeout(250)
}
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
// 筆記
await p.locator('.qn-card').nth(2).click(); await p.waitForTimeout(300)
await p.locator('.fon-primary').first().click(); await p.waitForTimeout(150)
await p.locator('input[type=text]').first().fill('整合測試酒款')
await p.locator('.fon-primary').click(); await p.waitForTimeout(250)
check('品飲筆記可新增', (await p.locator('.fon-note').count()) === 1)
check('筆記頁無橫向溢出', (await overflow(p)) <= 0)
await p.locator('.fon-back').click(); await p.waitForTimeout(400)
await p.evaluate((keys) => keys.forEach(k => localStorage.setItem(k, '500')), FORTIFIED_GAMES.map(g => g.bestKey))
await p.goto(`${BASE}/fortified`); await settle(p, 1200)
const unlocked = await p.locator('.foa-item:not(.locked)').count()
check('成就依進度解鎖（至少：第一口、遊戲全制霸、第一則筆記、Level 評量課）', unlocked >= 3, `unlocked=${unlocked}`)
await p.goto(`${BASE}/`); await settle(p)
await p.locator('.nav-toggle, .hamburger, [class*="mobile-menu-btn"], [class*="menu-toggle"]').first().click({ timeout: 3000 }).catch(() => {})
check('首頁（管理員）有強化酒入口', (await p.locator('a[href="/fortified"]').count()) > 0)
check('無 JS 錯誤', errors.length === 0, errors.join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
