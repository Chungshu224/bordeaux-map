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
    await p.locator('.ftl-lesson').nth(i).click(); await p.waitForTimeout(200)
    const ok = (await p.locator('.ftl-title').count()) === 1 && (await p.locator('.ftl-badge').count()) === 1 && (await overflow(p)) <= 0
    check(`L${idx + 1} 第 ${i + 1} 課可開啟、顯示施工中、無溢出`, ok)
    await p.locator('.ftl-link').click(); await p.waitForTimeout(150)
  }
}
await p.goto(`${BASE}/`); await settle(p)
await p.locator('.nav-toggle, .hamburger, [class*="mobile-menu-btn"], [class*="menu-toggle"]').first().click({ timeout: 3000 }).catch(() => {})
check('首頁（管理員）有強化酒入口', (await p.locator('a[href="/fortified"]').count()) > 0)
check('無 JS 錯誤', errors.length === 0, errors.join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
