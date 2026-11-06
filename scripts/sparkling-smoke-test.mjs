#!/usr/bin/env node
/**
 * 全球氣泡酒專論整合測試（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-test
 *   npx vite preview --outDir /tmp/dist-test --port 4173
 * 用法：node scripts/sparkling-smoke-test.mjs [--base=http://localhost:4173]
 * 檢查：存取控制（未登入／非管理員／管理員）、首頁入口、21 課可開啟且無橫向溢出、評量鎖定與通過、遊戲、品飲筆記、成就。
 */
import { SPARKLING_GAMES } from '../src/data/sparkling/gameData.js'
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

// 1) 未登入、非管理員：不得停在 /sparkling
for (const [label, email] of [['未登入', null], ['非管理員', 'someone@example.com']]) {
  const ctx = await newCtx(browser, email)
  const p = await ctx.newPage()
  await p.goto(`${BASE}/sparkling`); await settle(p, 2500)
  check(`${label}進入 /sparkling 會被導走`, !new URL(p.url()).pathname.startsWith('/sparkling'), p.url())
  check(`${label}畫面沒有氣泡酒課程內容`, (await p.locator('.spl, .spg, .spn, .spk-admin-note').count()) === 0)
  await ctx.close()
}

// 2) 管理員
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/sparkling`); await settle(p)
check('管理員可進入 /sparkling', new URL(p.url()).pathname === '/sparkling', p.url())
check('課程首頁無橫向溢出', (await overflow(p)) <= 0)
check('成就面板 9 項', (await p.locator('.spa-item').count()) === 9)

const LEVELS = [{ idx: 0, lessons: 6, quiz: 8, pass: [1, 0, 1, 2, 1, 1, 0, 1] }, { idx: 1, lessons: 8, quiz: 10 }, { idx: 2, lessons: 7, quiz: 12 }]
for (const lv of LEVELS) {
  if (lv.idx > 0) { await p.goto(`${BASE}/sparkling`); await settle(p, 1200) }
  await p.locator('.lc-btn').nth(lv.idx).click(); await p.waitForTimeout(500)
  check(`Level ${lv.idx + 1} 列出 ${lv.lessons} 課`, (await p.locator('.spl-lesson').count()) === lv.lessons)
  for (let i = 0; i < lv.lessons; i++) {
    await p.locator('.spl-lesson').nth(i).click(); await p.waitForTimeout(250)
    const blocks = await p.locator('.slide-blocks > *').count()
    const q = await p.locator('.spq-q').count()
    const ov = await overflow(p)
    const shell = await p.locator('.spl-badge').count()
    const ok = blocks > 0 && q > 0 && ov <= 0 && shell === 0
    if (!ok) check(`L${lv.idx + 1}-${i + 1} 內容/小測驗/無溢出`, false, `blocks=${blocks} quiz=${q} overflow=${ov} shell=${shell}`)
    // 非評量課：有練習題
    if (i < lv.lessons - 1) { if ((await p.locator('.spl-points').count()) !== 1) check(`L${lv.idx + 1}-${i + 1} 有練習題`, false) }
    await p.locator('.spl-link').click(); await p.waitForTimeout(150)
  }
  check(`Level ${lv.idx + 1} 全部 ${lv.lessons} 課內容、小測驗、無溢出`, true)
}

// 3) 評量鎖定：Level 1 第 6 課全選第一項 → 不及格 → 按鈕鎖住
await p.goto(`${BASE}/sparkling`); await settle(p, 1200)
await p.locator('.lc-btn').first().click(); await p.waitForTimeout(400)
await p.locator('.spl-lesson').nth(5).click(); await p.waitForTimeout(300)
for (let q = 0; q < 8; q++) await p.locator('.spq-q').nth(q).locator('.spq-opt').first().click()
check('評量不及格時無法標記完成', await p.locator('.spl-primary').isDisabled())
await p.locator('.spq-retry').click()
const ans = [1, 0, 1, 2, 1, 1, 0, 1]
for (let q = 0; q < 8; q++) await p.locator('.spq-q').nth(q).locator('.spq-opt').nth(ans[q]).click()
check('評量及格後可標記完成', !(await p.locator('.spl-primary').isDisabled()))
await p.locator('.spl-primary').click(); await p.waitForTimeout(300)
check('完成後列表出現已完成標記', (await p.locator('.spl-lesson.done').count()) === 1)

// 4) 遊戲、筆記、成就
await p.goto(`${BASE}/sparkling`); await settle(p, 1200)
await p.locator('.qn-card').nth(1).click(); await p.waitForTimeout(400)
check(`遊戲樞紐列出 ${SPARKLING_GAMES.length} 種遊戲`, (await p.locator('.sgh-card').count()) === SPARKLING_GAMES.length)
for (let g = 0; g < SPARKLING_GAMES.length; g++) {
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
  check(`遊戲「${SPARKLING_GAMES[g].name}」可玩完`, (await p.locator('.final-area').count()) === 1 && (await overflow(p)) <= 0)
  await p.locator('.back-btn').first().click(); await p.waitForTimeout(250)
}
await p.goto(`${BASE}/sparkling`); await settle(p, 1200)
await p.locator('.qn-card').nth(2).click(); await p.waitForTimeout(300)
await p.locator('.spn-primary').first().click(); await p.waitForTimeout(150)
await p.locator('input[type=text]').first().fill('整合測試酒款')
await p.locator('.spn-primary').click(); await p.waitForTimeout(250)
check('品飲筆記可新增', (await p.locator('.spn-note').count()) === 1)
await p.locator('.spn-back').click(); await p.waitForTimeout(300)
await p.evaluate((keys) => keys.forEach(k => localStorage.setItem(k, '500')), SPARKLING_GAMES.map(g => g.bestKey))
await p.goto(`${BASE}/sparkling`); await settle(p, 1200)
const unlocked = await p.locator('.spa-item:not(.locked)').count()
check('成就依進度解鎖（至少 3 項：第一口氣泡、遊戲全制霸、第一則筆記）', unlocked >= 3, `unlocked=${unlocked}`)

// 5) 首頁入口
await p.goto(`${BASE}/`); await settle(p, 2000)
const html = await p.content()
check('管理員首頁有「氣泡酒專論」入口', /氣泡酒專論/.test(html))
check('整個流程無 JS 例外', errors.length === 0, errors.slice(0, 2).join(' | '))

await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
