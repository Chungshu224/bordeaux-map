import { verifyAuth, getAdminClient } from './_lib/auth.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { user, error } = await verifyAuth(req)
  if (error || !user) {
    return res.status(401).json({ message: error || '未授權' })
  }

  const admin = getAdminClient()
  if (!admin) {
    return res.status(500).json({ message: 'Supabase 未設定' })
  }

  const appMetadata = user.app_metadata || {}
  const tier = appMetadata.subscription_tier || 'free'
  const expiresAt = appMetadata.subscription_expires_at
  const expiresTime = expiresAt ? new Date(expiresAt).getTime() : NaN

  if (!expiresAt || tier === 'free' || !Number.isFinite(expiresTime) || expiresTime >= Date.now()) {
    return res.status(200).json({ changed: false, tier, expired: false })
  }

  const nextMetadata = {
    ...appMetadata,
    subscription_tier: 'free',
    subscription_expires_at: null
  }

  const { error: updateErr } = await admin.auth.admin.updateUserById(user.id, {
    app_metadata: nextMetadata
  })

  if (updateErr) {
    console.error('[sync-subscription-status] 更新失敗:', updateErr)
    return res.status(500).json({ message: '更新訂閱狀態失敗' })
  }

  return res.status(200).json({ changed: true, tier: 'free', expired: true })
}