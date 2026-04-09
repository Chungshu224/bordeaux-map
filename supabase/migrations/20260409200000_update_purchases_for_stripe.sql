-- Migration: 為 Stripe 訂閱模型新增欄位
-- 執行前請確認 purchases 資料表已存在（見上一個 migration）

-- 1. 新增 Stripe 相關欄位
alter table public.purchases
  add column if not exists billing_period          text check (billing_period in ('monthly', 'yearly')),
  add column if not exists stripe_subscription_id  text unique,
  add column if not exists stripe_customer_id      text,
  add column if not exists stripe_session_id       text unique;

-- 2. 更新 status 約束，加入 'active'
alter table public.purchases
  drop constraint if exists purchases_status_check;

alter table public.purchases
  add constraint purchases_status_check
  check (status in ('pending', 'paid', 'active', 'refunded', 'cancelled'));

-- 3. 更新 get_user_course_access 回傳 billing_period
create or replace function public.get_user_course_access(
  p_user_id   uuid,
  p_course_id text
)
returns table (
  tier           text,
  billing_period text,
  paid_at        timestamptz,
  expires_at     timestamptz
)
language sql
security definer
as $$
  select tier, billing_period, paid_at, expires_at
  from   public.purchases
  where  user_id   = p_user_id
    and  course_id = p_course_id
    and  status    in ('paid', 'active')
    and  (expires_at is null or expires_at > now())
  order  by
    case tier when 'premium' then 1 when 'basic' then 2 else 3 end,
    paid_at desc
  limit 1;
$$;

-- 4. 更新 get_user_all_purchases 回傳 Stripe 訂閱欄位
create or replace function public.get_user_all_purchases(p_user_id uuid)
returns table (
  id                    uuid,
  course_id             text,
  tier                  text,
  amount                integer,
  currency              text,
  status                text,
  billing_period        text,
  stripe_subscription_id text,
  paid_at               timestamptz,
  expires_at            timestamptz,
  created_at            timestamptz
)
language sql
security definer
as $$
  select id, course_id, tier, amount, currency, status,
         billing_period, stripe_subscription_id,
         paid_at, expires_at, created_at
  from   public.purchases
  where  user_id = p_user_id
  order  by created_at desc;
$$;
