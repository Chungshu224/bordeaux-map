-- 20260601093000_add_atomic_coupon_consume_rpc.sql
-- 原子扣用優惠碼：避免 used_count/max_uses 競態造成超發

create or replace function public.consume_coupon_use(p_code text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_rows int := 0;
begin
  update public.coupon_codes
  set used_count = used_count + 1
  where code = p_code
    and active = true
    and (valid_from is null or valid_from <= now())
    and (valid_until is null or valid_until >= now())
    and (max_uses is null or used_count < max_uses);

  get diagnostics v_rows = row_count;
  return v_rows = 1;
end;
$$;

grant execute on function public.consume_coupon_use(text) to authenticated;
grant execute on function public.consume_coupon_use(text) to service_role;
