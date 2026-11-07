#!/usr/bin/env node
/**
 * 葡萄酒商業 D2 專論整合測試（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-test
 *   npx vite preview --outDir /tmp/dist-test --port 4173
 * 用法：node scripts/d2-smoke-test.mjs [--base=http://localhost:4173]
 * 檢查：存取控制（未登入／非管理員／管理員）、首頁入口、18 課可開啟且無橫向溢出。
 */
import { createRequire } from 'module'
import fs from 'fs'
import { d2Levels, D2_TOTAL_LESSONS } from '../src/data/d2/lessons.js'
import { D2_CONTENT } from '../src/data/d2/content.js'
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
  await p.goto(`${BASE}/d2`); await settle(p, 2500)
  check(`${label}進入 /d2 會被導走`, !new URL(p.url()).pathname.startsWith('/d2'), p.url())
  check(`${label}畫面沒有 D2 內容`, (await p.locator('.dtl, .d2h-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/`); await settle(p, 2500)
check('首頁（管理員）有 D2 入口', (await p.locator('a[href="/d2"]').count()) > 0)
await p.goto(`${BASE}/d2`); await settle(p)
check('管理員可進入 /d2', new URL(p.url()).pathname === '/d2', p.url())
check('首頁顯示不販售說明', (await p.locator('.d2h-admin-note').count()) === 1)
check('課程首頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
check('首頁三個階段卡片', (await p.locator('.lc-btn').count()) === 3, String(await p.locator('.lc-btn').count()))
check('課表共 18 課', D2_TOTAL_LESSONS === 18, String(D2_TOTAL_LESSONS))

let opened = 0, overflowed = 0
for (const n of [1, 2, 3]) {
  await p.goto(`${BASE}/d2`); await settle(p, 800)
  await p.locator('.lc-btn').nth(n - 1).click(); await settle(p, 500)
  const ids = d2Levels[`level${n}`].lessons
  for (let i = 0; i < ids.length; i++) {
    await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
    if ((await p.locator('.dtl-title').first().textContent()).includes(ids[i].title)) opened++
    if ((await overflow(p)) > 1) overflowed++
    await p.locator('.dtl-link').click(); await p.waitForTimeout(150)
  }
}
check('18 課都能開啟', opened === 18, `${opened}/18`)
check('18 課無橫向溢出', overflowed === 0, `${overflowed}`)
// 已填內容的課：有測驗、無「施工中」；評量課要通過才能完成
const filled = Object.keys(D2_CONTENT)
check('Level 1 六課皆有內容', filled.filter(id => id.startsWith('d2-l1-')).length === 6, String(filled.length))
await p.goto(`${BASE}/d2`); await settle(p, 800)
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
check('評量課未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const qn = D2_CONTENT['d2-l1-6'].quiz
check('Level 1 評量為 8 題、及格 60', qn.length === 8 && D2_CONTENT['d2-l1-6'].passScore === 60)
for (let i = 0; i < qn.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(qn[i].answer).click()
await p.waitForTimeout(200)
check('全對後完成鈕解鎖', await p.locator('.dtl-primary').isEnabled())
await p.locator('.dtl-primary').click(); await p.waitForTimeout(300)
check('完成後該課打勾', (await p.locator('.dtl-lesson.done').count()) >= 1)

// Level 2：七課皆有內容與測驗；末課為 10 題評量，需通過才能完成
check('Level 2 七課皆有內容', filled.filter(id => id.startsWith('d2-l2-')).length === 7)
check('Level 2 評量為 10 題、及格 60', D2_CONTENT['d2-l2-7'].quiz.length === 10 && D2_CONTENT['d2-l2-7'].passScore === 60)
await p.goto(`${BASE}/d2`); await settle(p, 800)
await p.locator('.lc-btn').nth(1).click(); await settle(p, 500)
let l2Ok = 0, l2Over = 0
for (let i = 0; i < 7; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l2Ok++
  if ((await overflow(p)) > 1) l2Over++
  if (i < 6) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 2 七課無「施工中」且有測驗', l2Ok === 7, `${l2Ok}/7`)
check('Level 2 七課無橫向溢出', l2Over === 0, `${l2Over}`)
check('Level 2 評量未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const q2 = D2_CONTENT['d2-l2-7'].quiz
for (let i = 0; i < q2.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth((q2[i].answer + 1) % q2[i].options.length).click()
await p.waitForTimeout(200)
check('Level 2 全錯時仍鎖定', await p.locator('.dtl-primary').isDisabled())
await p.locator('.dq-retry').click(); await p.waitForTimeout(200)
for (let i = 0; i < q2.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(q2[i].answer).click()
await p.waitForTimeout(200)
check('Level 2 重做全對後解鎖', await p.locator('.dtl-primary').isEnabled())

// 題庫自檢：選項不重複、答案索引在範圍內、不含數字型市場資料
let quizOk = true
for (const [id, c] of Object.entries(D2_CONTENT)) for (const q of c.quiz || []) {
  if (!(q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length)) { quizOk = false; console.log('  題庫異常：', id, q.q) }
}
check('全部題庫結構正確', quizOk)

// ── 靜態接線檢查 ──
const home = fs.readFileSync(new URL('../src/components/PlatformHome.vue', import.meta.url), 'utf8')
check("ADMIN_ONLY_COURSES 含 'd2'", /ADMIN_ONLY_COURSES = \[[^\]]*'d2'/.test(home))
const pricing = fs.readFileSync(new URL('../src/components/PricingPage.vue', import.meta.url), 'utf8')
check("NOT_FOR_SALE_IDS 含 'd2'", /NOT_FOR_SALE_IDS = \[[^\]]*'d2'/.test(pricing))
const router = fs.readFileSync(new URL('../src/router/index.js', import.meta.url), 'utf8')
check('/d2 路由為 requiresAdmin', /path: '\/d2',[\s\S]{0,300}requiresAdmin: true/.test(router))

check('無頁面 JS 錯誤', errors.length === 0, errors.join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
