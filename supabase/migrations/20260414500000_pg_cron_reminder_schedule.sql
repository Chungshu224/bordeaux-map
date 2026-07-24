-- ============================================================
-- pg_cron 排程：每日 01:00 UTC（台灣時間 09:00）
-- 呼叫 send-subscription-reminder Edge Function
-- ============================================================
-- 狀態（2026-07-23）：已在正式環境（project ayyrxnaigvzqktkswhnd）
-- 透過 Supabase Management API 手動啟用並設定完成，job name
-- 'subscription-reminder-daily'、jobid=1、active=true。
--
-- 此檔案本身「從未」透過 `supabase db push` 實際執行過（下方的
-- current_setting('app.supabase_url' / 'app.service_role_key') 需要額外
-- 用 ALTER DATABASE ... SET 設定才會生效，正式環境並未這樣做）。
-- 保留在這裡僅作為「如何從零重建這個排程」的範本／文件，
-- 實際套用時請把下面兩個 current_setting(...) 換成真正的 URL 與
-- service role key 字面值（不要把 service role key 提交進 git）。
-- ============================================================

-- 啟用 pg_cron 與 pg_net（僅需執行一次）
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 設定每日排程（需要 postgres 超級用戶權限，在 SQL Editor 或 Management API 執行）
-- 範本：實際執行前，請把 current_setting(...) 換成字面值
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

-- 查看執行紀錄（確認是否有失敗）
-- SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 20;

-- 刪除排程（如需更改）
-- SELECT cron.unschedule('subscription-reminder-daily');

-- ============================================================
-- 替代方案：如 pg_cron 無法用 http，改用 Supabase Scheduled Functions
-- 在 Dashboard → Functions → Schedule → 新增 send-subscription-reminder
-- ============================================================
