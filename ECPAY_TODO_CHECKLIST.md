# ECPay + Supabase 代辦核對清單

## 0) 先決條件
- [ ] 已有可登入帳號（前端要帶 JWT 呼叫 /api/ecpay-checkout）
- [ ] 專案已部署到 Vercel（建議先用 Vercel 驗證 callback）

## 1) Vercel 環境變數
在 Vercel Project Settings -> Environment Variables 設定：

- [ ] ECPAY_MERCHANT_ID
- [ ] ECPAY_HASH_KEY
- [ ] ECPAY_HASH_IV
- [ ] ECPAY_RETURN_URL = https://<your-domain>/api/ecpay-callback
- [ ] ECPAY_ORDER_RESULT_URL = https://<your-domain>/api/ecpay-order-result
- [ ] ECPAY_STAGE = true（要測試卡必須 true）
- [ ] SUPABASE_URL
- [ ] SUPABASE_SERVICE_ROLE_KEY

完成後：
- [ ] 重新部署一次（Redeploy）

## 2) 本機 .env.local（如果要在本機測）
- [ ] ECPAY_RETURN_URL 不是 localhost，必須是可公開 HTTPS
- [ ] ECPAY_ORDER_RESULT_URL 指向 /api/ecpay-order-result（不要直接設 /payment/result）
- [ ] ECPAY_STAGE=true

## 3) 執行一次信用卡測試
- [ ] 登入網站
- [ ] 到方案頁選擇信用卡（Credit）
- [ ] 送出購買後跳到 payment-stage.ecpay.com.tw
- [ ] 測試卡號：4311-9522-2222-2222
- [ ] 有效年月：任一未來日期
- [ ] CVV：222
- [ ] 3D 驗證碼：1234
- [ ] 完成後導回 /payment/result（URL 參數含 ecpay=1 且 type=credit）

## 4) 驗證 callback 成功
- [ ] 在 Vercel Functions logs 找到 api/ecpay-callback 請求
- [ ] 無 CheckMacValue 驗證失敗訊息
- [ ] 有付款成功訊息（含 MerchantTradeNo）

## 5) 驗證 Supabase 訂單已 paid
到 Supabase SQL Editor 執行：

SELECT
  id,
  merchant_trade_no,
  user_id,
  status,
  payment_ref,
  amount,
  paid_at,
  created_at
FROM purchases
WHERE payment_provider = 'ecpay'
ORDER BY created_at DESC
LIMIT 10;

核對：
- [ ] 最新交易 merchant_trade_no 與本次付款一致
- [ ] status = paid
- [ ] paid_at 不為 null
- [ ] payment_ref 不為 null

## 6) 最常見失敗原因
- [ ] ECPAY_STAGE=false 卻使用測試卡
- [ ] ECPAY_ORDER_RESULT_URL 設成 /payment/result（應為 /api/ecpay-order-result）
- [ ] ReturnURL 指到 localhost
- [ ] SUPABASE_SERVICE_ROLE_KEY 用錯（非 service role）
