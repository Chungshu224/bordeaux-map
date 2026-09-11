# ECPay + Supabase 代辦核對清單

## 0) 先決條件
- [x] 已有可登入帳號（前端要帶 JWT 呼叫 /api/ecpay-checkout）
- [x] 專案已部署到 Vercel（建議先用 Vercel 驗證 callback）

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
- [x] ECPAY_RETURN_URL 不是 localhost，必須是可公開 HTTPS
- [x] ECPAY_ORDER_RESULT_URL 指向 /api/ecpay-order-result（不要直接設 /payment/result）
- [x] ECPAY_STAGE=true

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
- [x] ECPAY_STAGE=false 卻使用測試卡 → 已修正為 true
- [x] ECPAY_ORDER_RESULT_URL 設成 /payment/result（應為 /api/ecpay-order-result）→ 已修正
- [ ] ReturnURL 指到 localhost
- [ ] SUPABASE_SERVICE_ROLE_KEY 用錯（非 service role）

---

## 📚 已創建的輔助文件

### ✅ ECPAY_VERCEL_SETUP_GUIDE.md
完整的 Vercel 環境變數設定指南，包含：
- 8 個環境變數的詳細設定步驟
- 截圖說明和注意事項
- 重新部署流程
- 故障排除方法

### ✅ ECPAY_TESTING_GUIDE.md
詳細的測試流程指南，包含：
- 9 個測試步驟（登入 → 選方案 → 付款 → 驗證）
- 測試卡資料（4311-9522-2222-2222）
- Vercel logs 檢查方法
- Supabase 資料驗證 SQL
- 常見問題解決方案
- 測試報告範本

---

## 🎯 下一步行動

### 立即執行（優先級高）
1. **前往 Vercel 設定環境變數**
   - 參考：ECPAY_VERCEL_SETUP_GUIDE.md
   - 預計時間：10-15 分鐘

2. **重新部署專案**
   - 在 Vercel Dashboard 執行 Redeploy
   - 等待部署完成（1-3 分鐘）

3. **執行第一次測試**
   - 參考：ECPAY_TESTING_GUIDE.md
   - 使用測試卡號：4311-9522-2222-2222
   - CVV：222 / 3D驗證碼：1234

### 後續驗證（優先級中）
4. **檢查 Vercel Functions Logs**
   - 確認 ecpay-callback 有收到請求
   - 驗證 CheckMacValue 成功

5. **查詢 Supabase 訂單**
   - 執行 SQL 查詢（見測試指南）
   - 確認訂單狀態為 paid

---

## 📝 待完成項目摘要

| 類別 | 項目 | 狀態 | 預計時間 |
|------|------|------|----------|
| 本機配置 | .env.local 設定 | ✅ 已完成 | - |
| Vercel 配置 | 環境變數設定 | ⏳ 待執行 | 10 分鐘 |
| Vercel 配置 | 重新部署 | ⏳ 待執行 | 3 分鐘 |
| 測試 | 信用卡支付測試 | ⏳ 待執行 | 5 分鐘 |
| 驗證 | Callback 日誌檢查 | ⏳ 待執行 | 3 分鐘 |
| 驗證 | Supabase 資料驗證 | ⏳ 待執行 | 2 分鐘 |

**總預計時間**：約 25-30 分鐘
