-- ============================================================
-- 20260514_coupon_system.sql
-- 優惠碼 & 合作夥伴分紅系統
-- 請在 Supabase SQL Editor 或 CLI 執行：
--   supabase db push  (若使用 Supabase CLI)
-- ============================================================

-- ── 1. 優惠碼主表 ─────────────────────────────────────────────────────────────
create table if not exists public.coupon_codes (
  code              text        primary key,
  type              text        not null
                    check (type in ('free_trial', 'discount', 'affiliate')),
  trial_days        int         default 0,
  discount_pct      int         default 0
                    check (discount_pct >= 0 and discount_pct <= 100),
  referrer_id       text,                          -- 合作夥伴識別碼
  referrer_name     text,                          -- 顯示名稱（後台用）
  commission_pct    numeric(5,2) default 0,        -- 分紅百分比
  max_uses          int,                           -- null = 無限制
  used_count        int         default 0,
  valid_from        timestamptz,
  valid_until       timestamptz,
  active            bool        default true,
  note              text,
  created_at        timestamptz default now()
);

-- ── 2. purchases 表：新增優惠碼追蹤欄位 ──────────────────────────────────────
alter table public.purchases
  add column if not exists coupon_code  text references public.coupon_codes(code),
  add column if not exists referrer_id  text;

-- ── 3. Row Level Security ────────────────────────────────────────────────────
alter table public.coupon_codes enable row level security;

-- 已驗證使用者可讀取「有效」優惠碼（供前端驗證）
drop policy if exists "users_read_active_coupons" on public.coupon_codes;
create policy "users_read_active_coupons"
  on public.coupon_codes
  for select
  to authenticated
  using (
    active = true
    and (valid_from  is null or valid_from  <= now())
    and (valid_until is null or valid_until >= now())
  );

-- service_role bypass RLS，後台管理介面（Admin Dashboard）透過 service key 存取

-- ── 4. 優惠碼使用次數 atomic increment ──────────────────────────────────────
create or replace function public.increment_coupon_used(p_code text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.coupon_codes
  set used_count = used_count + 1
  where code = p_code;
end;
$$;

-- ── 5. 預設種子資料（範例，可自行刪除）────────────────────────────────────────
insert into public.coupon_codes
  (code, type, trial_days, active, note)
values
  ('WINE2026',   'free_trial', 30, true, '2026 年一般推廣碼，首月免費'),
  ('EARLYBIRD',  'free_trial', 30, true, '早鳥試用碼')
on conflict (code) do nothing;
