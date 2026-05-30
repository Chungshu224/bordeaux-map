-- ============================================================
-- 20260530000100_add_coupon_templates_for_free_and_bogo.sql
-- 4 種優惠碼範本：單課首月免費 / 單課三月免費 / 全球通行證首月免費 / 單課買一送一月
-- ============================================================

insert into public.coupon_codes (
  code,
  type,
  trial_days,
  discount_pct,
  active,
  note
) values
  (
    'FREE1MCOURSE',
    'free_trial',
    30,
    0,
    true,
    'scope:single'
  ),
  (
    'FREE3MCOURSE',
    'free_trial',
    90,
    0,
    true,
    'scope:single'
  ),
  (
    'FREE1MGLOBAL',
    'free_trial',
    30,
    0,
    true,
    'scope:global'
  ),
  (
    'PAY1GET1M',
    'discount',
    30,
    0,
    true,
    'scope:single,billing:monthly'
  )
on conflict (code) do update
set
  type = excluded.type,
  trial_days = excluded.trial_days,
  discount_pct = excluded.discount_pct,
  active = excluded.active,
  note = excluded.note;
