/**
 * api/translate-glossary.js — Vercel Serverless Function
 *
 * 透過 OpenAI 翻譯葡萄酒辭典的「中文詞條」到指定目標語言。
 * 僅供管理員使用（透過 profiles.role = 'admin' 驗證）。
 *
 * 環境變數：
 *   OPENAI_API_KEY              OpenAI API 金鑰
 *   OPENAI_MODEL                （選）模型，預設 gpt-4o-mini
 *   SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY
 *
 * 請求：
 *   POST /api/translate-glossary
 *   Headers: Authorization: Bearer <jwt>
 *   Body: { zh, definition?, region?, targets: ['en','fr','it','es','pt','de','hu'] }
 *
 * 回應：
 *   200 { translations: { en: 'Cabernet Sauvignon', fr: '...', ... } }
 *   4xx { message }
 */

import { verifyAuth, getAdminClient } from './_lib/auth.js'

// 支援的目標語言 → OpenAI 提示詞描述
const LANG_PROMPT = {
  en: 'English (the standard wine industry term)',
  fr: 'French (Français — standard French wine vocabulary)',
  it: 'Italian (Italiano — standard Italian wine vocabulary)',
  es: 'Spanish (Español — standard Spanish wine vocabulary)',
  pt: 'Portuguese (Português — standard Portuguese wine vocabulary)',
  de: 'German (Deutsch — standard German wine vocabulary)',
  hu: 'Hungarian (Magyar — standard Hungarian wine vocabulary)',
}

const MAX_ZH_LEN = 100
const MAX_DEF_LEN = 1000

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // 1) JWT 驗證
  const { user, error: authErr } = await verifyAuth(req)
  if (authErr || !user) {
    return res.status(401).json({ message: authErr || '未授權' })
  }

  // 2) 管理員驗證
  const admin = getAdminClient()
  if (!admin) return res.status(500).json({ message: 'Supabase 未設定' })
  const { data: profile, error: profErr } = await admin
    .from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profErr || !profile || profile.role !== 'admin') {
    return res.status(403).json({ message: '需要管理員權限' })
  }

  // 3) 輸入驗證
  const { zh, definition = '', region = '', targets = [] } = req.body || {}
  if (!zh || typeof zh !== 'string') {
    return res.status(400).json({ message: '缺少 zh 詞條' })
  }
  if (zh.length > MAX_ZH_LEN) {
    return res.status(400).json({ message: 'zh 過長' })
  }
  if (typeof definition === 'string' && definition.length > MAX_DEF_LEN) {
    return res.status(400).json({ message: 'definition 過長' })
  }
  if (!Array.isArray(targets) || targets.length === 0) {
    return res.status(400).json({ message: '缺少 targets' })
  }
  const validTargets = targets.filter(t => LANG_PROMPT[t])
  if (validTargets.length === 0) {
    return res.status(400).json({ message: '無有效的目標語言' })
  }

  // 4) 呼叫 OpenAI
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) return res.status(500).json({ message: 'OPENAI_API_KEY 未設定' })

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

  const langInstructions = validTargets
    .map(code => `- "${code}": ${LANG_PROMPT[code]}`)
    .join('\n')

  const systemPrompt = `You are an expert wine translator who specializes in oenology terminology across multiple languages.

Your task: Translate a Traditional Chinese wine term into the listed target languages.

Rules:
1. Return ONLY a valid JSON object, with the exact keys listed below, no additional text.
2. For proper nouns / wine names that already have a canonical form (grape varieties, regions, château names, classifications), use the standard accepted spelling in that language. e.g. 卡本內蘇維翁 → "Cabernet Sauvignon" (en/fr/it/es/pt/de all use "Cabernet Sauvignon"); 麗絲玲 → "Riesling"; 索甸 → "Sauternes"; 田帕尼歐 → "Tempranillo".
3. For descriptive terms (e.g. 風土, 單寧, 陳年), use the most common professional translation (Terroir / Tannins / Aging).
4. Keep diacritics (é, ñ, ü, à, etc.) correct.
5. Do NOT add explanations, footnotes, or markdown.

Target languages:
${langInstructions}`

  const userContent = JSON.stringify({
    zh,
    context: definition || '(no extra context)',
    region: region || '(unspecified)',
    requested_keys: validTargets,
  })

  let openaiData
  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent },
        ],
      }),
    })
    if (!r.ok) {
      const errText = await r.text()
      return res.status(502).json({ message: `OpenAI 錯誤 ${r.status}: ${errText.slice(0, 300)}` })
    }
    openaiData = await r.json()
  } catch (err) {
    return res.status(502).json({ message: 'OpenAI 連線失敗：' + (err?.message || 'unknown') })
  }

  const content = openaiData?.choices?.[0]?.message?.content
  if (!content) {
    return res.status(502).json({ message: 'OpenAI 未回傳內容' })
  }

  let parsed
  try {
    parsed = JSON.parse(content)
  } catch {
    return res.status(502).json({ message: 'OpenAI 回傳非 JSON 格式' })
  }

  // 只取請求的 keys，過濾異常值
  const translations = {}
  for (const code of validTargets) {
    const v = parsed[code]
    if (typeof v === 'string' && v.trim()) {
      translations[code] = v.trim()
    }
  }

  return res.status(200).json({ translations })
}
