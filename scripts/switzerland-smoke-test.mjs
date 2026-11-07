#!/usr/bin/env node
/**
 * 瑞士葡萄酒課程整合測試（Playwright，手機寬度 387px）
 * 前置：以假的 Supabase 環境變數 build 並啟動 preview：
 *   VITE_SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co VITE_SUPABASE_ANON_KEY=fake npx vite build --outDir /tmp/dist-swi
 *   npx vite preview --outDir /tmp/dist-swi --port 4173
 * 用法：node scripts/switzerland-smoke-test.mjs [--base=http://localhost:4173]
 */
import { createRequire } from 'module'
import fs from 'fs'
import { swiLevels, SWI_TOTAL_LESSONS } from '../src/data/switzerland/lessons.js'
import { SWI_CONTENT } from '../src/data/switzerland/content.js'
import { SWISS_GAMES } from '../src/data/switzerland/gameData.js'
import { SWISS_POINTS, SWISS_ZONES } from '../src/data/switzerland/mapData.js'
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

// ── 靜態檢查：課表與題庫結構 ──
check('課表共 18 課', SWI_TOTAL_LESSONS === 18, String(SWI_TOTAL_LESSONS))
const ids = Object.values(swiLevels).flatMap(l => l.lessons.map(x => x.id))
check('課程 id 皆為 swi- 前綴且不重複', ids.every(i => i.startsWith('swi-')) && new Set(ids).size === ids.length)
let quizOk = true
for (const [id, c] of Object.entries(SWI_CONTENT)) {
  for (const q of c.quiz || []) {
    if (!(q.options.length >= 3 && q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length && q.explain)) { quizOk = false; console.log('  題庫異常：', id, q.q) }
  }
}
check('題庫結構正確（選項不重複、答案在範圍、有解析）', quizOk)
check('所有已填內容的課 id 都在課表中', Object.keys(SWI_CONTENT).every(i => ids.includes(i)))

const browser = await chromium.launch()
for (const [label, email] of [['未登入', null], ['非管理員', 'someone@example.com']]) {
  const ctx = await newCtx(browser, email)
  const p = await ctx.newPage()
  await p.goto(`${BASE}/switzerland`); await settle(p, 2500)
  check(`${label}進入 /switzerland 會被導走`, !new URL(p.url()).pathname.startsWith('/switzerland'), p.url())
  check(`${label}畫面沒有瑞士課程內容`, (await p.locator('.dtl, .swih-admin-note').count()) === 0)
  await ctx.close()
}
const ctx = await newCtx(browser, ADMIN_EMAIL)
const p = await ctx.newPage()
const errors = []
p.on('pageerror', e => errors.push(e.message))
await p.goto(`${BASE}/`); await settle(p, 2500)
check('首頁（管理員）有瑞士課程卡片，且與義大利同一個分組', (await p.locator('.course-card.switzerland').count()) === 1 &&
  await p.evaluate(() => document.querySelector('.course-card.switzerland')?.parentElement === document.querySelector('.course-card.italy')?.parentElement))
const swBox = await p.evaluate(() => { const r = document.querySelector('.course-card.switzerland .btn-enter-course')?.getBoundingClientRect(); return r ? { width: r.width, height: r.height } : null })
check('卡片的進入按鈕有實際大小', !!swBox && swBox.width > 50 && swBox.height > 20)
await p.evaluate(() => document.querySelector('.course-card.switzerland .btn-enter-course').click()); await p.waitForTimeout(800)
check('點卡片按鈕可進入 /switzerland', new URL(p.url()).pathname === '/switzerland', p.url())
await p.goto(`${BASE}/`); await settle(p, 1500)
await p.goto(`${BASE}/switzerland`); await settle(p)
check('管理員可進入 /switzerland', new URL(p.url()).pathname === '/switzerland', p.url())
check('首頁顯示不販售說明', (await p.locator('.swih-admin-note').count()) === 1)
check('課程首頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
check('首頁三個階段卡片', (await p.locator('.lc-btn').count()) === 3)

let opened = 0, overflowed = 0
for (const n of [1, 2, 3]) {
  await p.goto(`${BASE}/switzerland`); await settle(p, 800)
  await p.locator('.lc-btn').nth(n - 1).click(); await settle(p, 500)
  const ls = swiLevels[`level${n}`].lessons
  for (let i = 0; i < ls.length; i++) {
    await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
    if ((await p.locator('.dtl-title').first().textContent()).includes(ls[i].title)) opened++
    if ((await overflow(p)) > 1) overflowed++
    await p.locator('.dtl-link').click(); await p.waitForTimeout(150)
  }
}
check('18 課都能開啟', opened === 18, `${opened}/18`)
check('18 課無橫向溢出', overflowed === 0, `${overflowed}`)

// Level 1：五課皆有內容與測驗；評量課要通過才能完成
const filled = Object.keys(SWI_CONTENT)
check('Level 1 五課皆有內容', filled.filter(id => id.startsWith('swi-l1-')).length === 5)
await p.goto(`${BASE}/switzerland`); await settle(p, 800)
await p.locator('.lc-btn').nth(0).click(); await settle(p, 500)
let noBadge = 0, withQuiz = 0
for (let i = 0; i < 5; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0) noBadge++
  if ((await p.locator('.dq').count()) === 1) withQuiz++
  if (i < 4) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('五課無「施工中」標記', noBadge === 5, `${noBadge}/5`)
check('五課都有測驗', withQuiz === 5, `${withQuiz}/5`)
check('Level 1 評量為 8 題、及格 60', SWI_CONTENT['swi-l1-5'].quiz.length === 8 && SWI_CONTENT['swi-l1-5'].passScore === 60)
check('評量課未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const qn = SWI_CONTENT['swi-l1-5'].quiz
for (let i = 0; i < qn.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(qn[i].answer).click()
await p.waitForTimeout(200)
check('全對後完成鈕解鎖', await p.locator('.dtl-primary').isEnabled())
await p.locator('.dtl-primary').click(); await p.waitForTimeout(300)
check('完成後該課打勾', (await p.locator('.dtl-lesson.done').count()) >= 1)

// Level 2：八課皆有內容與測驗，評量 10 題、及格 60
check('Level 2 八課皆有內容', filled.filter(id => id.startsWith('swi-l2-')).length === 8)
check('Level 2 評量為 10 題、及格 60', SWI_CONTENT['swi-l2-8'].quiz.length === 10 && SWI_CONTENT['swi-l2-8'].passScore === 60)
await p.goto(`${BASE}/switzerland`); await settle(p, 800)
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
check('Level 2 評量未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())

// Level 3：五課皆有內容與測驗，評量 12 題、及格 60
check('Level 3 五課皆有內容', filled.filter(id => id.startsWith('swi-l3-')).length === 5)
check('Level 3 評量為 12 題、及格 60', SWI_CONTENT['swi-l3-5'].quiz.length === 12 && SWI_CONTENT['swi-l3-5'].passScore === 60)
await p.goto(`${BASE}/switzerland`); await settle(p, 800)
await p.locator('.lc-btn').nth(2).click(); await settle(p, 500)
let l3Ok = 0, l3Over = 0
for (let i = 0; i < 5; i++) {
  await p.locator('.dtl-lesson').nth(i).click(); await p.waitForTimeout(200)
  if ((await p.locator('.dtl-badge').count()) === 0 && (await p.locator('.dq').count()) === 1) l3Ok++
  if ((await overflow(p)) > 1) l3Over++
  if (i < 4) await p.locator('.dtl-link').click()
  await p.waitForTimeout(100)
}
check('Level 3 五課無「施工中」且有測驗', l3Ok === 5, `${l3Ok}/5`)
check('Level 3 五課無橫向溢出', l3Over === 0, `${l3Over}`)
check('Level 3 評量未通過時完成鈕鎖定', await p.locator('.dtl-primary').isDisabled())
const q3 = SWI_CONTENT['swi-l3-5'].quiz
for (let i = 0; i < q3.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth((q3[i].answer + 1) % q3[i].options.length).click()
await p.waitForTimeout(200)
check('全錯時仍鎖定', await p.locator('.dtl-primary').isDisabled())
await p.locator('.dq-retry').click(); await p.waitForTimeout(200)
for (let i = 0; i < q3.length; i++) await p.locator('.dq-q').nth(i).locator('.dq-opt').nth(q3[i].answer).click()
await p.waitForTimeout(200)
check('重做全對後解鎖', await p.locator('.dtl-primary').isEnabled())

// ── 階段 D：地圖與遊戲 ──
check('地圖點皆屬已定義的產區且座標在瑞士範圍', SWISS_POINTS.every(pt => SWISS_ZONES.some(z => z.key === pt.zone) && pt.lng > 5.8 && pt.lng < 10.6 && pt.lat > 45.7 && pt.lat < 47.9))
check('地圖點 id 不重複', new Set(SWISS_POINTS.map(x => x.id)).size === SWISS_POINTS.length)
await p.goto(`${BASE}/switzerland`); await settle(p, 1200)
check('快速入口（地圖、練習）可點', (await p.locator('.qn-card:disabled').count()) === 0)
await p.locator('.qn-card').nth(0).click(); await p.waitForTimeout(500)
check(`地圖頁列出 ${SWISS_POINTS.length} 個點`, (await p.locator('.swm-item').count()) === SWISS_POINTS.length)
await p.locator('.swm-item').nth(3).click(); await p.waitForTimeout(200)
check('點選地點出現資訊卡', (await p.locator('.swm-card').count()) === 1)
await p.locator('.swm-chip').nth(0).click(); await p.waitForTimeout(150)
check('切換產區可隱藏該區的點', (await p.locator('.swm-item').count()) < SWISS_POINTS.length)
check('地圖頁無橫向溢出', (await overflow(p)) <= 1, String(await overflow(p)))
await p.locator('.swm-back').click(); await p.waitForTimeout(400)
await p.locator('.qn-card').nth(1).click(); await p.waitForTimeout(400)
check(`遊戲樞紐列出 ${SWISS_GAMES.length} 種遊戲`, (await p.locator('.sgh-card').count()) === SWISS_GAMES.length)
for (let g = 0; g < SWISS_GAMES.length; g++) {
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
  check(`遊戲「${SWISS_GAMES[g].name}」可玩完`, (await p.locator('.final-area').count()) === 1 && (await overflow(p)) <= 0)
  await p.locator('.back-btn').first().click(); await p.waitForTimeout(250)
}
// 題庫自檢：每款遊戲的題目正解索引在範圍內、選項不重複、排序題項目不重複
let gameOk = true
for (const g of SWISS_GAMES) for (const diff of ['easy', 'hard']) for (const q of g.build(diff)) {
  if (q.type === 'order') { if (!(new Set(q.items).size === q.items.length && q.shuffled.length === q.items.length)) gameOk = false }
  else if (!(q.correct >= 0 && q.correct < q.options.length && new Set(q.options).size === q.options.length)) { gameOk = false; console.log('  題庫異常：', g.id, q.stem) }
}
check('遊戲題庫結構正確', gameOk)

// ── 階段 E：筆記本與成就 ──
await p.goto(`${BASE}/switzerland`); await settle(p, 1200)
check('首頁顯示成就區（8 項）', (await p.locator('.swia-item').count()) === 8)
const unlockedBefore = await p.locator('.swia-item:not(.locked)').count()
await p.locator('.qn-card').nth(2).click(); await p.waitForTimeout(400)
check('筆記本頁有 5 張論述要點卡', (await p.locator('.swn-card').count()) === 5)
await p.locator('.swn-primary').first().click(); await p.waitForTimeout(200)
check('主題為空時無法儲存', await p.locator('.swn-primary').isDisabled())
await p.locator('.swn-main input[type=text]').fill('Dézaley 的 Chasselas')
await p.locator('.swn-main textarea').first().fill('Vaud，Lavaux 梯田')
await p.locator('.swn-primary').click(); await p.waitForTimeout(250)
check('儲存後筆記出現在列表', (await p.locator('.swn-note').count()) === 1 && (await p.locator('.swn-note').first().innerText()).includes('Lavaux'))
check('筆記本頁無橫向溢出', (await overflow(p)) <= 1)
await p.reload(); await settle(p, 1200)
await p.locator('.qn-card').nth(2).click(); await p.waitForTimeout(300)
check('重新整理後筆記仍在', (await p.locator('.swn-note').count()) === 1)
await p.locator('.swn-back').click(); await p.waitForTimeout(300)
check('寫筆記後解鎖「第一則筆記」成就', (await p.locator('.swia-item:not(.locked)').count()) > unlockedBefore)
await p.locator('.qn-card').nth(2).click(); await p.waitForTimeout(300)
await p.locator('.swn-del').first().click(); await p.waitForTimeout(200)
check('刪除筆記後列表為空', (await p.locator('.swn-note').count()) === 0)
await p.locator('.swn-back').click(); await p.waitForTimeout(300)
const swiSrc = fs.readFileSync(new URL('../src/stores/switzerlandAchievementSystem.js', import.meta.url), 'utf8')
check('成就依產區 key 比對地圖探索', /z\.key/.test(swiSrc))
const sql = fs.readFileSync(new URL('../supabase/migrations/20261114000100_add_switzerland_glossary.sql', import.meta.url), 'utf8')
check("詞彙 migration 的 region CHECK 含全部既有值與 'switzerland'", ['canada','sparkling','fortified','d1','switzerland','brandy','provence'].every(v => sql.includes(`'${v}'`)))
check('詞彙 migration 的 de 與 category 值合法', !/'(?:cuisine|style)'\)/.test(sql))

// ── 靜態接線檢查 ──
const home = fs.readFileSync(new URL('../src/components/PlatformHome.vue', import.meta.url), 'utf8')
check("ADMIN_ONLY_COURSES 含 'switzerland'", /ADMIN_ONLY_COURSES = \[[^\]]*'switzerland'/.test(home))
const pricing = fs.readFileSync(new URL('../src/components/PricingPage.vue', import.meta.url), 'utf8')
check("NOT_FOR_SALE_IDS 含 'switzerland'", /NOT_FOR_SALE_IDS = \[[^\]]*'switzerland'/.test(pricing))
const router = fs.readFileSync(new URL('../src/router/index.js', import.meta.url), 'utf8')
check('/switzerland 路由為 requiresAdmin', /path: '\/switzerland',[\s\S]{0,300}requiresAdmin: true/.test(router))

check('無頁面 JS 錯誤', errors.length === 0, errors.join(' | '))
await browser.close()
console.log(failed ? `\n${failed} 項失敗` : '\n全部通過')
process.exit(failed ? 1 : 0)
