-- 區域包 / 衝刺包 / 全部課程可購買
-- 注意：此 migration 僅準備，請在 Supabase (Wine-Education-Platform) 手動套用。可重複執行。

-- 1) purchases.course_id 不再限制為 3 門課（新增區域包 bundle_* 與所有課程 ID）
do $$
declare c record;
begin
  for c in
    select conname from pg_constraint
    where conrelid = 'public.purchases'::regclass and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%course_id%'
  loop
    execute format('alter table public.purchases drop constraint %I', c.conname);
  end loop;
end $$;

-- 2) billing_period 新增 quarterly（衝刺包 90 天）
do $$
declare c record;
begin
  for c in
    select conname from pg_constraint
    where conrelid = 'public.purchases'::regclass and contype = 'c'
      and pg_get_constraintdef(oid) ilike '%billing_period%'
  loop
    execute format('alter table public.purchases drop constraint %I', c.conname);
  end loop;
end $$;
alter table public.purchases
  add constraint purchases_billing_period_check
  check (billing_period is null or billing_period in ('monthly', 'yearly', 'quarterly'));

-- 3) 新課程公開時，替「目前有效的」通行證／區域包／衝刺包持有者補開通
--    用法：select public.grant_new_course_to_bundle_holders('rhone', 'bundle_france');
--          select public.grant_new_course_to_bundle_holders('rhone', 'global');
create or replace function public.grant_new_course_to_bundle_holders(
  p_course text,
  p_bundle text
) returns integer
language plpgsql
security definer
set search_path = public
as $$
declare n integer;
begin
  insert into public.purchases (
    user_id, course_id, tier, amount, currency, status, payment_provider,
    billing_period, merchant_trade_no, payment_ref, paid_at, expires_at
  )
  select distinct on (p.user_id)
    p.user_id, p_course, 'basic', 0, 'TWD', 'paid', coalesce(p.payment_provider, 'ecpay'),
    p.billing_period,
    p.merchant_trade_no || '_' || p_course,
    p.course_id || ':' || coalesce(p.merchant_trade_no, p.id::text) || ':' || p_course,
    now(), p.expires_at
  from public.purchases p
  where p.course_id = p_bundle
    and p.status = 'paid'
    and (p.expires_at is null or p.expires_at > now())
    and p.merchant_trade_no is not null
  order by p.user_id, p.expires_at desc nulls first
  on conflict (merchant_trade_no) do nothing;
  get diagnostics n = row_count;
  return n;
end $$;

revoke all on function public.grant_new_course_to_bundle_holders(text, text) from public, anon, authenticated;
