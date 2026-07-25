-- ============================================================
-- 20260726020000_expire_stale_pending_purchases.sql
-- 自動把「掛太久沒完成」的訂單標記為已取消：
--   - status = 'pending'（使用者連 ECPay 付款頁都沒完成走完）：
--     建立超過 3 天就視為放棄，直接標記 cancelled。
--   - status = 'awaiting_payment'（ATM 虛擬帳號／超商代碼已產生，
--     真正在等使用者去繳費）：優先採用 ECPay 回傳、存在
--     payment_info->>'expireDate' 裡的「代碼實際到期日」；只有在
--     這個欄位缺漏或格式不明時，才退回用「建立時間 + 3 天」判斷。
--
--     這裡刻意不對 awaiting_payment 一律套用「建立時間 + 3 天」，
--     是因為 ECPay 的 ATM／超商代碼有效期不一定剛好是 3 天（依商店
--     設定可能到 7 天），如果代碼還沒過期就把訂單標記 cancelled，
--     使用者之後去超商/ATM 真的繳費、ECPay 回傳付款成功通知時，
--     api/ecpay-callback.js 的 `.in('status', ['pending','awaiting_payment'])`
--     就會比對不到，被當成「已處理過的重複通知」而回 1|OK 放行，
--     等於使用者已經付款成功、課程權限卻永遠不會開通。
-- ============================================================

CREATE OR REPLACE FUNCTION public.expire_stale_pending_purchases()
RETURNS int
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  affected int := 0;
  n int;
BEGIN
  UPDATE public.purchases
  SET status = 'cancelled'
  WHERE status = 'pending'
    AND created_at < now() - interval '3 days';
  GET DIAGNOSTICS n = ROW_COUNT;
  affected := affected + n;

  UPDATE public.purchases
  SET status = 'cancelled'
  WHERE status = 'awaiting_payment'
    AND (
      CASE
        WHEN payment_info->>'expireDate' ~ '^\d{4}/\d{2}/\d{2}( \d{2}:\d{2}:\d{2})?$'
          THEN to_timestamp(payment_info->>'expireDate', 'YYYY/MM/DD HH24:MI:SS') < now()
        ELSE created_at + interval '3 days' < now()
      END
    );
  GET DIAGNOSTICS n = ROW_COUNT;
  affected := affected + n;

  RETURN affected;
END;
$$;

-- 每天跑一次（錯開到期提醒信排程的 01:00 UTC，避免同分鐘搶鎖）
SELECT cron.schedule(
  'expire-stale-pending-purchases',
  '0 2 * * *',   -- 每日 02:00 UTC = 台灣 10:00
  $$ SELECT public.expire_stale_pending_purchases(); $$
);

-- 手動測試／立即跑一次：
-- SELECT public.expire_stale_pending_purchases();

-- 查看排程清單：
-- SELECT * FROM cron.job;

-- 刪除排程（如需更改）：
-- SELECT cron.unschedule('expire-stale-pending-purchases');
