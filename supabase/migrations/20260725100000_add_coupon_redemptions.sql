-- ============================================================
-- 20260725100000_add_coupon_redemptions.sql
-- 資料庫層級保證：每個帳號（user_id）對每組優惠碼（coupon_code）
-- 最多只能成功兌換一次，避免 SELECT-then-INSERT 造成的競態漏洞，
-- 也堵住 discount / affiliate 優惠碼完全沒有防重複使用的漏洞。
--
-- 設計重點：
--   - 這張表記錄的是「一次兌換事件」，不是每一筆 purchases 列，
--     因此全球產區通行證（會同時寫入 global + 3 個子課程共 4 筆
--     purchases）只會對應「一筆」coupon_redemptions，不會誤觸唯一鍵。
--   - UNIQUE (user_id, coupon_code) 由資料庫原子保證，取代原本
--     app 層「先查再寫」的競態寫法。
-- ============================================================

create table if not exists public.coupon_redemptions (
  id           uuid        primary key default gen_random_uuid(),
  user_id      uuid        not null references auth.users(id) on delete cascade,
  coupon_code  text        not null references public.coupon_codes(code),
  purchase_id  uuid        references public.purchases(id) on delete set null,
  created_at   timestamptz not null default now(),
  unique (user_id, coupon_code)
);

alter table public.coupon_redemptions enable row level security;

-- 使用者可讀取自己的兌換紀錄（供前端提前顯示「已使用過」）
drop policy if exists "users_read_own_redemptions" on public.coupon_redemptions;
create policy "users_read_own_redemptions"
  on public.coupon_redemptions
  for select
  to authenticated
  using (auth.uid() = user_id);

-- service_role（後端 API 以 service key 存取）不受 RLS 限制，可自由讀寫

create index if not exists coupon_redemptions_user_idx
  on public.coupon_redemptions (user_id);

create index if not exists coupon_redemptions_code_idx
  on public.coupon_redemptions (coupon_code);
