#!/usr/bin/env node
/**
 * 葡萄酒生產 D1 專論整合測試（階段 A）（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-test
 *   npx vite preview --outDir /tmp/dist-test --port 4173
 * 用法：node scripts/d1-smoke-test.mjs [--base=http://localhost:4173]
 * 檢查：存取控制（未登入／非管理員／管理員）、首頁入口、21 課可開啟且無橫向溢出。
 */
import { createRequire } from 'module'
import { d1Levels, D1_TOTAL_LESSONS } from '../src/data/d1/lessons.js'
import { D1_CONTENT } from '../src/data/d1/content.js'
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
  await p.goto(`${BASE}/d1`); await settle(p, 2500)
  check(`${label}進入 /d1 會被導走`, !new URL(p.url()).pathname.startsWith('/d1'), p.url())
  check(`${label}畫面沒有 D1 內容`, (await p.locator('.dtl, .d1h-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/`); await settle(p, 2500)
check('首頁（管理員）有 D1 入口', (await p.locator('a[href="/d1"]').count()) > 0)
await p.goto(`${BASE}/d1`); await settle(p)
check('管理員可進入 /d1', new URL(p.url()).pathname === '/d1', p.url())
check('首頁顯示不販售說明', (await p.locator('.d1h-admin-note').count()) === 1)
check('課程首頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
check('首頁三個階段卡片', (await p.locator('.lc-btn').count()) === 3, String(await p.locator('.lc-btn').count()))
check('課表共 21 課', D1_TOTAL_LESSONS === 21, String(D1_TOTAL_LESSONS))

let opened = 0, overflowed = 0
for (const n of [1, 2, 3]) {
  await p.goto(`${BASE}/d1`); await settle(p, 800)
  await p.locator('.lc-btn').nth(n - 1).click(); await settle(p, 500)
  const ids = d1Levels[`level${n}`].lessons
  for (let i = 0; i < ids.length; i++) {
    await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
    if ((await p.locator('.dtl-title').first().textContent()).includes(ids[i].title)) opened++
    if ((await overflow(p)) > 1) overflowed++
    await p.locator('.dtl-link').click(); await p.waitForTimeout(150)
  }
}
check('21 課都能開啟', opened === 21, `${opened}/21`)
check('21 課無橫向溢出', overflowed === 0, `${overflowed}`)
// 已填內容的課：有測驗、無「施工中」；評量課要通過才能完成
const filled = Object.keys(D1_CONTENT)
check('Level 1 七課皆有內容', filled.filter(id => id.startsWith('d1-l1-')).length === 7, String(filled.length))
await p.goto(`${BASE}/d1`); await settle(p, 800)
await p.locator('.lc-btn').nth(0).click(); await settle(p, 500)
let noBadge = 0, withQuiz = 0
for (let i = 0; i < 7; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0) noBadge++
  if ((await p.locator('.dq').count()) === 1) withQuiz++
  if (i < 6) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('七課無「施工中」標記', noBadge === 7, `${noBadge}/7`)
check('七課都有測驗', withQuiz === 7, `${withQuiz}/7`)
// 目前在 d1-l1-7（評量）：未答題時完成鈕鎖定
check('評量課未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const qn = D1_CONTENT['d1-l1-7'].quiz
for (let i = 0; i < qn.length; i++) {
  await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(qn[i].answer).click()
}
await p.waitForTimeout(200)
check('全對後完成鈕解鎖', await p.locator('.dtl-primary').isEnabled())
await p.locator('.dtl-primary').click(); await p.waitForTimeout(300)
check('完成後該課打勾', (await p.locator('.dtl-lesson.done').count()) >= 1)

check('無頁面 JS 錯誤', errors.length === 0, errors.join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
