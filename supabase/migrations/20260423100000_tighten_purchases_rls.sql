-- ============================================================
-- M3: 收緊 purchases 表 RLS，並補齊 user-context API 所需 policy
-- 上次更新：2026-04-23
--
-- 目的：
--   1. 限制 INSERT 只能寫入 user_id = auth.uid() 的 pending 訂單
--   2. UPDATE 改成只允許 service_role（避免使用者改自己訂單為 paid）
--   3. 保留既有 SELECT own 政策；service_role 仍可 ALL
--
-- 對應變更：
--   - api/ecpay-checkout.js  改用 user-context client INSERT
--   - api/stripe-portal.js   改用 user-context client SELECT
--   - api/stripe-webhook.js  維持 service_role
--   - api/ecpay-callback.js  維持 service_role
-- ============================================================

-- 移除舊的寬鬆政策
drop policy if exists "Service role can insert purchases" on public.purchases;
drop policy if exists "Service role can update purchases" on public.purchases;

-- INSERT：使用者只能寫入自己 user_id 的 pending 訂單
create policy "purchases_user_insert_own_pending"
  on public.purchases
  for insert
  to authenticated
  with check (
    auth.uid() = user_id
    and status = 'pending'
  );

-- UPDATE / DELETE：禁止 authenticated；只有 service_role（webhook/callback）可改
-- 註：service_role bypass RLS，所以不需要明確 policy；不再保留 USING (true) 的開放政策
-- 若日後有 admin 後台需要更新，請走 admin RPC 並在 RPC 內以 SECURITY DEFINER 實作
