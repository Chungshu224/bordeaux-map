-- ============================================================
-- 課程購買記錄表 (purchases)
-- 上次更新：2026-04-09
-- 說明：記錄每次成功付款的訂單，webhook 寫入後同步更新
--       auth.users 的 app_metadata.subscription_tier
-- ============================================================

-- 課程購買記錄表
create table if not exists public.purchases (
  id                 uuid        primary key default gen_random_uuid(),
  user_id            uuid        references auth.users(id) on delete cascade not null,
  course_id          text        not null check (course_id in ('bordeaux', 'bourgogne', 'italy')),
  tier               text        not null check (tier in ('basic', 'premium')),
  amount             integer     not null,               -- 實際收款金額（元）
  currency           text        not null default 'TWD',
  status             text        not null default 'pending'
                                 check (status in ('pending', 'paid', 'refunded', 'cancelled')),
  payment_provider   text        default 'ecpay',        -- ecpay | stripe
  payment_ref        text        unique,                 -- ECPay TradeNo / Stripe PaymentIntentId
  merchant_trade_no  text        unique,                 -- 我方產生的唯一訂單號
  expires_at         timestamptz,                        -- 訂閱到期日（null = 永久）
  created_at         timestamptz default now(),
  paid_at            timestamptz
);

-- ─── Row Level Security ───────────────────────────────────────────────────────
alter table public.purchases enable row level security;

-- 使用者只能看自己的訂單
create policy "Users can view own purchases"
  on public.purchases for select
  using (auth.uid() = user_id);

-- 插入與更新僅限 service role（webhook）
create policy "Service role can insert purchases"
  on public.purchases for insert
  with check (true);

create policy "Service role can update purchases"
  on public.purchases for update
  using (true);

-- ─── Indexes ─────────────────────────────────────────────────────────────────
create index if not exists purchases_user_id_idx
  on public.purchases (user_id);

create index if not exists purchases_user_course_status_idx
  on public.purchases (user_id, course_id, status);

create index if not exists purchases_merchant_trade_no_idx
  on public.purchases (merchant_trade_no);

-- ─── Helper RPC ──────────────────────────────────────────────────────────────
-- 前端呼叫：取得使用者在特定課程的有效購買清單
create or replace function public.get_user_course_access(
  p_user_id  uuid,
  p_course_id text
)
returns table (
  tier       text,
  paid_at    timestamptz,
  expires_at timestamptz
)
language sql
security definer
as $$
  select tier, paid_at, expires_at
  from   public.purchases
  where  user_id   = p_user_id
    and  course_id = p_course_id
    and  status    = 'paid'
    and  (expires_at is null or expires_at > now())
  order  by
    case tier when 'premium' then 1 when 'basic' then 2 else 3 end,
    paid_at desc
  limit 1;
$$;

-- 前端呼叫：取得使用者所有已購課程摘要
create or replace function public.get_user_all_purchases(p_user_id uuid)
returns table (
  id           uuid,
  course_id    text,
  tier         text,
  amount       integer,
  currency     text,
  status       text,
  paid_at      timestamptz,
  expires_at   timestamptz,
  created_at   timestamptz
)
language sql
security definer
as $$
  select id, course_id, tier, amount, currency, status, paid_at, expires_at, created_at
  from   public.purchases
  where  user_id = p_user_id
  order  by created_at desc;
$$;

-- ─── 查詢範例（管理用，直接在 SQL Editor 執行）──────────────────────
-- 查看所有訂單
-- SELECT p.*, u.email
-- FROM public.purchases p
-- JOIN auth.users u ON u.id = p.user_id
-- ORDER BY p.created_at DESC;

-- 查看特定用戶訂單
-- SELECT * FROM public.purchases WHERE user_id = 'xxx';

-- 手動標記為已付款（測試用）
-- UPDATE public.purchases
-- SET status = 'paid', paid_at = now()
-- WHERE merchant_trade_no = 'xxx';
