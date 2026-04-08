-- ============================================================
-- 訂閱層級管理 SQL（Supabase SQL Editor 可直接執行）
-- 上次更新：2026-04-09
-- 層級：free | basic | premium
-- 注意：subscription_tier 儲存於 auth.users.raw_app_meta_data
--       （用戶端無法自行修改，僅 service role 可寫入）
-- ============================================================


-- ============================================================
-- 【查詢】
-- ============================================================

-- 查看所有用戶的層級清單
SELECT
  id,
  email,
  COALESCE(raw_app_meta_data->>'subscription_tier', 'free') AS tier,
  created_at,
  last_sign_in_at
FROM auth.users
ORDER BY created_at DESC;


-- 查看指定用戶的完整 app_metadata
SELECT email, raw_app_meta_data
FROM auth.users
WHERE email = '用戶信箱@example.com';


-- 統計各層級人數
SELECT
  COALESCE(raw_app_meta_data->>'subscription_tier', 'free') AS tier,
  COUNT(*) AS user_count
FROM auth.users
GROUP BY tier
ORDER BY tier;


-- ============================================================
-- 【更新層級】單一用戶
-- ============================================================

-- 升級為 basic（初階）
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data || '{"subscription_tier": "basic"}'::jsonb
WHERE email = '用戶信箱@example.com';

-- 升級為 premium（進階）
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data || '{"subscription_tier": "premium"}'::jsonb
WHERE email = '用戶信箱@example.com';

-- 退回 free（免費）
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data || '{"subscription_tier": "free"}'::jsonb
WHERE email = '用戶信箱@example.com';


-- ============================================================
-- 【更新層級】批次更新多位用戶
-- ============================================================

-- 同時設定多位用戶為 basic
UPDATE auth.users
SET raw_app_meta_data = raw_app_meta_data || '{"subscription_tier": "basic"}'::jsonb
WHERE email IN (
  'user1@example.com',
  'user2@example.com',
  'user3@example.com'
);


-- ============================================================
-- 【強制登出】讓層級修改立即生效（用戶不需手動重登）
-- ============================================================

-- 清除指定用戶的所有 session（下次操作時會自動 refresh token）
DELETE FROM auth.sessions
WHERE user_id = (
  SELECT id FROM auth.users WHERE email = '用戶信箱@example.com'
);

-- 清除多位用戶的 session
DELETE FROM auth.sessions
WHERE user_id IN (
  SELECT id FROM auth.users
  WHERE email IN (
    'user1@example.com',
    'user2@example.com'
  )
);


-- ============================================================
-- 【進階】建立管理用 View（方便日後在 Dashboard Table Editor 查看）
-- ============================================================

CREATE OR REPLACE VIEW public.user_tiers AS
SELECT
  u.id,
  u.email,
  COALESCE(u.raw_app_meta_data->>'subscription_tier', 'free') AS subscription_tier,
  p.display_name,
  u.created_at,
  u.last_sign_in_at
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
ORDER BY u.created_at DESC;

-- 授權：只有 postgres（service role）可查詢，一般用戶端無法直接讀取
REVOKE ALL ON public.user_tiers FROM anon, authenticated;
GRANT SELECT ON public.user_tiers TO postgres;

COMMENT ON VIEW public.user_tiers IS '訂閱層級管理視圖，含用戶信箱、層級、顯示名稱';
