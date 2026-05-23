-- ============================================================
-- 20260524000000_add_payment_info_purchases.sql
-- 為 ECPay 非信用卡付款（ATM / 超商）新增欄位與狀態
-- ============================================================

-- 1. 新增 payment_info JSONB 欄位（儲存 ATM 虛擬帳號、CVS 繳費代碼等）
ALTER TABLE public.purchases
  ADD COLUMN IF NOT EXISTS payment_info JSONB;

-- 2. 擴充 status 允許值，加入 awaiting_payment（ATM/CVS 尚未轉帳）與 amount_mismatch
ALTER TABLE public.purchases
  DROP CONSTRAINT IF EXISTS purchases_status_check;

ALTER TABLE public.purchases
  ADD CONSTRAINT purchases_status_check
  CHECK (status IN (
    'pending',            -- 剛建立，等待跳轉付款頁
    'awaiting_payment',   -- ATM/CVS 已取得繳費資訊，等待使用者轉帳 / 繳費
    'paid',               -- 付款成功
    'active',             -- Stripe 訂閱中（active subscription）
    'refunded',           -- 已退款
    'cancelled',          -- 已取消
    'amount_mismatch'     -- ECPay 回傳金額與 DB 不符，需人工審查
  ));

-- 3. 更新 get_user_course_access 確保 awaiting_payment 不被誤判為已付款
-- （原本只有 'paid' 和 'active' 算開通，不需要改）
