-- ============================================================
-- pg_cron 排程：每日 01:00 UTC（台灣時間 09:00）
-- 呼叫 send-subscription-reminder Edge Function
-- ============================================================
-- 需先在 Supabase Dashboard 啟用 pg_cron extension：
--   Extensions → 搜尋 pg_cron → 啟用
-- ============================================================

-- 啟用 pg_cron（僅需執行一次）
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 設定每日排程（需要 postgres 超級用戶權限，在 SQL Editor 執行）
SELECT cron.schedule(
  'subscription-reminder-daily',   -- job name（唯一）
  '0 1 * * *',                     -- cron: 每日 01:00 UTC = 台灣 09:00
  $$
    SELECT net.http_post(
      url    := current_setting('app.supabase_url') || '/functions/v1/send-subscription-reminder',
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || current_setting('app.service_role_key')
      ),
      body   := '{}'::jsonb
    );
  $$
);

-- 查看排程清單
-- SELECT * FROM cron.job;

-- 刪除排程（如需更改）
-- SELECT cron.unschedule('subscription-reminder-daily');

-- ============================================================
-- 替代方案：如 pg_cron 無法用 http，改用 Supabase Scheduled Functions
-- 在 Dashboard → Functions → Schedule → 新增 send-subscription-reminder
-- ============================================================
