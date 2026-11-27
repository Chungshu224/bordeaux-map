#!/usr/bin/env node
/**
 * 土耳其葡萄酒課程整合測試（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-tr
 *   npx vite preview --outDir /tmp/dist-tr --port 4173
 * 用法：node scripts/turkey-smoke-test.mjs [--base=http://localhost:4173]
 */
import { createRequire } from 'module'
import fs from 'fs'
import { trLevels, TR_TOTAL_LESSONS } from '../src/data/turkey/lessons.js'
import { TR_CONTENT } from '../src/data/turkey/content.js'
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
check('課表共 11 課', TR_TOTAL_LESSONS === 11, String(TR_TOTAL_LESSONS))
const ids = Object.values(trLevels).flatMap(l => l.lessons.map(x => x.id))
check('課程 id 皆為 tr- 前綴且不重複', ids.every(i => i.startsWith('tr-')) && new Set(ids).size === ids.length)
let quizOk = true
for (const [id, c] of Object.entries(TR_CONTENT)) {
  for (const q of c.quiz || []) {
    if (!(q.options.length >= 3 && q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length && q.explain)) { quizOk = false; console.log('  題庫異常：', id, q.q) }
  }
}
check('題庫結構正確（選項不重複、答案在範圍、有解析）', quizOk)
check('所有已填內容的課 id 都在課表中', Object.keys(TR_CONTENT).every(i => ids.includes(i)))

const browser = await chromium.launch()
for (const [label, email] of [['未登入', null], ['非管理員', 'someone@example.com']]) {
  const ctx = await newCtx(browser, email)
  const p = await ctx.newPage()
  await p.goto(`${BASE}/turkey`); await settle(p, 2500)
  check(`${label}進入 /turkey 會被導走`, !new URL(p.url()).pathname.startsWith('/turkey'), p.url())
  check(`${label}畫面沒有土耳其課程內容`, (await p.locator('.dtl, .eeh-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/`); await settle(p, 2500)
check('首頁（管理員）有土耳其課程卡片，且與義大利同一個分組', (await p.locator('.course-card.turkey').count()) === 1 &&
  await p.evaluate(() => document.querySelector('.course-card.turkey')?.parentElement === document.querySelector('.course-card.italy')?.parentElement))
const eeBox = await p.evaluate(() => { const r = document.querySelector('.course-card.turkey .btn-enter-course')?.getBoundingClientRect(); return r ? { width: r.width, height: r.height } : null })
check('卡片的進入按鈕有實際大小', !!eeBox && eeBox.width > 50 && eeBox.height > 20)
await p.evaluate(() => document.querySelector('.course-card.turkey .btn-enter-course').click()); await p.waitForTimeout(800)
check('點卡片按鈕可進入 /turkey', new URL(p.url()).pathname === '/turkey', p.url())
await p.goto(`${BASE}/`); await settle(p, 1500)
await p.goto(`${BASE}/turkey`); await settle(p)
check('管理員可進入 /turkey', new URL(p.url()).pathname === '/turkey', p.url())
check('首頁顯示不販售說明', (await p.locator('.eeh-admin-note').count()) === 1)
check('課程首頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
check('首頁三個階段卡片', (await p.locator('.lc-btn').count()) === 3)

let opened = 0, overflowed = 0
for (const n of [1, 2, 3]) {
  await p.goto(`${BASE}/turkey`); await settle(p, 800)
  await p.locator('.lc-btn').nth(n - 1).click(); await settle(p, 500)
  const ls = trLevels[`level${n}`].lessons
  for (let i = 0; i < ls.length; i++) {
    await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
    if ((await p.locator('.dtl-title').first().textContent()).includes(ls[i].title)) opened++
    if ((await overflow(p)) > 1) overflowed++
    await p.locator('.dtl-link').click(); await p.waitForTimeout(150)
  }
}
check('11 課都能開啟', opened === 11, `${opened}/11`)
check('11 課無橫向溢出', overflowed === 0, `${overflowed}`)


// Level 1：四課皆有內容與測驗；評量 8 題、及格 60、通過才解鎖
check('Level 1 四課皆有內容', Object.keys(TR_CONTENT).filter(id => id.startsWith('tr-l1-')).length === 4)
check('Level 1 評量為 8 題、及格 60', TR_CONTENT['tr-l1-4'].quiz.length === 8 && TR_CONTENT['tr-l1-4'].passScore === 60)
await p.goto(`${BASE}/turkey`); await settle(p, 800)
await p.locator('.lc-btn').nth(0).click(); await settle(p, 500)
let l1Ok = 0, l1Over = 0
for (let i = 0; i < 4; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l1Ok++
  if ((await overflow(p)) > 1) l1Over++
  if (i < 3) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 1 四課無「施工中」且有測驗', l1Ok === 4, `${l1Ok}/4`)
check('Level 1 四課無橫向溢出', l1Over === 0, `${l1Over}`)
check('評量課未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const qn = TR_CONTENT['tr-l1-4'].quiz
for (let i = 0; i < qn.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(qn[i].answer).click()
await p.waitForTimeout(200)
check('全對後完成鈕解鎖', await p.locator('.dtl-primary').isEnabled())
await p.locator('.dtl-primary').click(); await p.waitForTimeout(300)
check('完成後該課打勾', (await p.locator('.dtl-lesson.done').count()) >= 1)

// Level 2：四課皆有內容與測驗，評量 10 題、及格 60
check('Level 2 四課皆有內容', Object.keys(TR_CONTENT).filter(id => id.startsWith('tr-l2-')).length === 4)
check('Level 2 評量為 10 題、及格 60', TR_CONTENT['tr-l2-4'].quiz.length === 10 && TR_CONTENT['tr-l2-4'].passScore === 60)
await p.goto(`${BASE}/turkey`); await settle(p, 800)
await p.locator('.lc-btn').nth(1).click(); await settle(p, 500)
let l2Ok = 0, l2Over = 0
for (let i = 0; i < 4; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l2Ok++
  if ((await overflow(p)) > 1) l2Over++
  if (i < 3) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 2 四課無「施工中」且有測驗', l2Ok === 4, `${l2Ok}/4`)
check('Level 2 四課無橫向溢出', l2Over === 0, `${l2Over}`)

// Level 3：三課皆有內容與測驗，評量 10 題、及格 60
check('Level 3 三課皆有內容', Object.keys(TR_CONTENT).filter(id => id.startsWith('tr-l3-')).length === 3)
check('Level 3 評量為 10 題、及格 60', TR_CONTENT['tr-l3-3'].quiz.length === 10 && TR_CONTENT['tr-l3-3'].passScore === 60)
await p.goto(`${BASE}/turkey`); await settle(p, 800)
await p.locator('.lc-btn').nth(2).click(); await settle(p, 500)
let l3Ok = 0, l3Over = 0
for (let i = 0; i < 3; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l3Ok++
  if ((await overflow(p)) > 1) l3Over++
  if (i < 2) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 3 三課無「施工中」且有測驗', l3Ok === 3, `${l3Ok}/3`)
check('Level 3 三課無橫向溢出', l3Over === 0, `${l3Over}`)
check('頁面無 JS 錯誤', errors.length === 0, errors.slice(0, 2).join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
