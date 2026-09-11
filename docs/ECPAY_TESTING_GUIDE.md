# 🧪 ECPay 信用卡支付測試流程指南

> **目標**：在測試環境中完整驗證 ECPay 信用卡支付功能

---

## ✅ 測試前檢查清單

### 環境配置確認
- [x] 本機 `.env.local` 已設定 ECPAY_STAGE="true"
- [x] 本機 `.env.local` 中 ECPAY_ORDER_RESULT_URL 指向 `/api/ecpay-order-result`
- [ ] Vercel 環境變數已全部設定（8 個變數）
- [ ] Vercel 專案已重新部署（狀態 Ready ✅）

### 測試帳號準備
- [ ] 已有可登入的測試帳號
- [ ] 帳號可以正常登入網站
- [ ] 帳號有 JWT token（前端會自動處理）

---

## 🎯 測試步驟

### 步驟 1：登入網站

#### 1.1 開啟網站
```
https://wineacademy.vercel.app
```

#### 1.2 登入測試帳號
- 輸入帳號密碼
- 確認登入成功（看到個人資訊或歡迎訊息）

✅ **驗證點**：右上角顯示用戶名稱或頭像

---

### 步驟 2：選擇訂閱方案

#### 2.1 進入方案頁面
- 點擊導航欄的「方案」或「訂閱」連結
- 或直接前往：`https://wineacademy.vercel.app/pricing`

#### 2.2 選擇方案
建議選擇**最便宜的方案**進行測試：
- 例如：基礎月費方案
- 金額：建議 NT$ 100 以內的小額方案

✅ **驗證點**：可以看到多個方案卡片

---

### 步驟 3：選擇信用卡支付

#### 3.1 點擊「立即訂閱」或「購買」按鈕

#### 3.2 選擇支付方式
- 選擇 **信用卡（Credit）** 選項
- ❌ **不要**選擇 ATM 或其他支付方式

#### 3.3 確認訂單資訊
- 檢查方案名稱
- 檢查金額
- 點擊「確認購買」或「前往付款」

✅ **驗證點**：看到付款方式選項（Credit / ATM / CVS）

---

### 步驟 4：進入 ECPay 測試環境

#### 4.1 自動跳轉
點擊確認後，應該會自動跳轉到：
```
https://payment-stage.ecpay.com.tw/...
```

⚠️ **注意**：
- ✅ 如果跳到 `payment-stage.ecpay.com.tw` → 正確（測試環境）
- ❌ 如果跳到 `payment.ecpay.com.tw`（無 `-stage`）→ 錯誤（正式環境）

#### 4.2 檢查 ECPay 頁面
確認看到：
- ECPay 綠色標誌
- 訂單資訊（金額、商品名稱）
- 信用卡輸入欄位

✅ **驗證點**：URL 包含 `payment-stage.ecpay.com.tw`

---

### 步驟 5：填寫測試卡資料

#### 5.1 卡號
```
4311-9522-2222-2222
```
或直接輸入（無破折號）：
```
4311952222222222
```

#### 5.2 有效年月
任一**未來日期**即可，例如：
```
12/28  （2028年12月）
或
06/27  （2027年6月）
```

#### 5.3 CVV（卡片背面三碼）
```
222
```

#### 5.4 持卡人姓名（選填）
```
TEST USER
或
測試用戶
```

✅ **驗證點**：所有欄位已填入，無紅色錯誤提示

---

### 步驟 6：3D 驗證

#### 6.1 點擊「確認付款」按鈕

#### 6.2 進入 3D 驗證頁面
會跳出一個彈窗或新頁面，要求輸入驗證碼。

#### 6.3 輸入測試驗證碼
```
1234
```

#### 6.4 點擊「確認」或「Submit」

✅ **驗證點**：看到 3D 驗證頁面（MasterCard SecureCode 或 Visa 3D Secure）

---

### 步驟 7：付款完成

#### 7.1 等待處理
- 顯示「處理中...」
- 約 3-5 秒

#### 7.2 自動導回網站
應該會跳轉回：
```
https://wineacademy.vercel.app/payment/result?ecpay=1&type=credit
```

#### 7.3 檢查付款結果頁面
確認看到：
- ✅ 付款成功訊息
- ✅ 訂單編號（MerchantTradeNo）
- ✅ 付款金額
- ✅ 付款方式：信用卡

⚠️ **如果看到錯誤**：
- 記下錯誤訊息
- 記下訂單編號（如果有）
- 繼續步驟 8 檢查後台日誌

✅ **驗證點**：URL 參數包含 `ecpay=1` 且 `type=credit`

---

## 🔍 步驟 8：驗證 Vercel Callback 日誌

### 8.1 進入 Vercel Functions Logs
```
https://vercel.com/chungshu224s-projects/wineacademy/logs
```

### 8.2 篩選 Callback 請求
1. 在搜尋框輸入：`ecpay-callback`
2. 或篩選 Function：`/api/ecpay-callback`

### 8.3 檢查最新的請求
找到剛才測試時間點的請求，確認：

#### ✅ 成功的日誌應包含：
```
[ecpay-callback] Received callback
[ecpay-callback] CheckMacValue verified successfully
[ecpay-callback] Payment successful: T202608091234567890
[ecpay-callback] Order updated in Supabase
```

#### ❌ 失敗的日誌可能顯示：
```
CheckMacValue verification failed
Invalid HASH_KEY or HASH_IV
Supabase update failed
```

### 8.4 記錄關鍵資訊
- **MerchantTradeNo**：例如 `T202608091234567890`
- **TradeAmt**：付款金額
- **PaymentDate**：付款時間

✅ **驗證點**：
- [ ] 有收到 callback 請求
- [ ] CheckMacValue 驗證成功
- [ ] 訂單狀態更新為 paid

---

## 🗄️ 步驟 9：驗證 Supabase 訂單資料

### 9.1 進入 Supabase SQL Editor
```
https://supabase.com/dashboard/project/ayyrxnaigvzqktkswhnd/sql
```

### 9.2 執行查詢
```sql
SELECT
  id,
  merchant_trade_no,
  user_id,
  status,
  payment_provider,
  payment_ref,
  amount,
  paid_at,
  created_at,
  subscription_type
FROM purchases
WHERE payment_provider = 'ecpay'
ORDER BY created_at DESC
LIMIT 5;
```

### 9.3 驗證最新訂單
找到剛才的訂單（根據 `created_at` 時間），確認：

| 欄位 | 預期值 | 說明 |
|------|--------|------|
| `merchant_trade_no` | `T202608091234567890` | 與 Vercel 日誌中一致 |
| `status` | `paid` | ✅ 已付款 |
| `payment_provider` | `ecpay` | ECPay 支付 |
| `payment_ref` | `202608091234...` | ECPay TradeNo |
| `paid_at` | `2026-08-09 12:34:56` | 付款時間不為 null |
| `amount` | 付款金額 | 與訂單金額一致 |

### 9.4 檢查用戶訂閱狀態（選擇性）
```sql
SELECT
  id,
  user_id,
  subscription_type,
  subscription_status,
  subscription_start,
  subscription_end
FROM user_subscriptions
WHERE user_id = '你的用戶ID'
ORDER BY created_at DESC
LIMIT 1;
```

確認：
- ✅ `subscription_status = 'active'`
- ✅ `subscription_start` 為今天日期
- ✅ `subscription_end` 為 30 天後（月費）或 365 天後（年費）

✅ **驗證點**：
- [ ] 訂單狀態為 `paid`
- [ ] `paid_at` 不為 null
- [ ] `payment_ref` 不為 null
- [ ] 金額正確
- [ ] 用戶訂閱已啟用

---

## 📊 測試結果檢查清單

### 完整流程驗證
- [ ] 可以正常登入網站
- [ ] 可以看到訂閱方案頁面
- [ ] 點擊購買後跳轉到 ECPay 測試環境（payment-stage）
- [ ] 測試卡號可以正常使用
- [ ] 3D 驗證成功（驗證碼 1234）
- [ ] 付款完成後導回 `/payment/result?ecpay=1`
- [ ] 付款結果頁面顯示成功訊息

### 後台資料驗證
- [ ] Vercel logs 中有 `/api/ecpay-callback` 請求
- [ ] CheckMacValue 驗證成功（無錯誤訊息）
- [ ] Supabase `purchases` 表有新訂單
- [ ] 訂單 `status = 'paid'`
- [ ] `paid_at` 不為 null
- [ ] 用戶訂閱已啟用（如果有 subscriptions 表）

---

## 🚨 常見問題與解決方法

### 問題 1：無法跳轉到 ECPay
**現象**：點擊購買後停留在原頁面或顯示錯誤

**可能原因**：
- 未登入或 JWT token 失效
- `/api/ecpay-checkout` API 錯誤

**解決方法**：
1. 檢查瀏覽器 Console 是否有錯誤訊息
2. 重新登入網站
3. 檢查 Vercel logs 中 `/api/ecpay-checkout` 的錯誤

---

### 問題 2：跳到正式環境（無 -stage）
**現象**：URL 為 `payment.ecpay.com.tw`（無 `-stage`）

**原因**：`ECPAY_STAGE="false"` 或未設定

**解決方法**：
1. 確認 Vercel 環境變數 `ECPAY_STAGE = true`
2. 重新部署專案
3. 清除瀏覽器快取後重試

---

### 問題 3：測試卡號被拒絕
**現象**：顯示「卡號無效」或「交易失敗」

**原因**：
- 在正式環境使用測試卡
- 卡號輸入錯誤

**解決方法**：
1. 確認 URL 包含 `payment-stage`
2. 重新輸入卡號：`4311-9522-2222-2222`
3. 確認 CVV 為 `222`

---

### 問題 4：3D 驗證失敗
**現象**：3D 驗證頁面顯示錯誤

**原因**：
- 驗證碼輸入錯誤
- 測試環境問題

**解決方法**：
1. 確認驗證碼為 `1234`（不是 `222`）
2. 重新嘗試交易

---

### 問題 5：導回錯誤頁面
**現象**：付款完成後跳到 404 或其他錯誤頁面

**原因**：
- `ECPAY_ORDER_RESULT_URL` 設定錯誤
- 前端路由不存在

**解決方法**：
1. 確認 `ECPAY_ORDER_RESULT_URL` 設為 `/api/ecpay-order-result`
2. 檢查前端是否有 `/payment/result` 路由
3. 重新部署後測試

---

### 問題 6：CheckMacValue 驗證失敗
**現象**：Vercel logs 顯示 "CheckMacValue verification failed"

**原因**：
- HASH_KEY 或 HASH_IV 錯誤
- MERCHANT_ID 不匹配

**解決方法**：
1. 雙重檢查 Vercel 環境變數：
   - `ECPAY_MERCHANT_ID`
   - `ECPAY_HASH_KEY`
   - `ECPAY_HASH_IV`
2. 確認測試/正式環境憑證匹配
3. 重新部署

---

### 問題 7：Supabase 訂單未建立
**現象**：SQL 查詢找不到訂單

**原因**：
- `SUPABASE_SERVICE_ROLE_KEY` 錯誤
- RLS 規則阻擋
- Callback 未成功執行

**解決方法**：
1. 檢查 Vercel logs 中 callback 是否有 Supabase 錯誤
2. 確認使用 `service_role` 密鑰（非 `anon`）
3. 檢查 Supabase `purchases` 表的 RLS 規則

---

## 📝 測試報告範本

完成測試後，填寫以下報告：

```
測試日期：2026-08-09
測試人員：[你的名字]
測試環境：Vercel Production / wineacademy.vercel.app

### 測試結果
- [ ] ✅ 成功 / ❌ 失敗

### 訂單資訊
- MerchantTradeNo：T202608091234567890
- 付款金額：NT$ 100
- 付款時間：2026-08-09 14:30:25

### Vercel Logs
- Callback 請求：✅ 有收到
- CheckMacValue：✅ 驗證成功
- Supabase 更新：✅ 成功

### Supabase 資料
- 訂單 ID：uuid-123-456
- 狀態：paid
- paid_at：2026-08-09 14:30:30

### 問題與備註
[記錄任何遇到的問題或特殊情況]
```

---

## 🎯 下一步

### 測試成功後
- ✅ 標記 ECPAY_TODO_CHECKLIST.md 中的測試項目為完成
- ✅ 繼續測試其他支付方式（ATM、超商代碼）
- ✅ 測試不同方案的訂閱流程

### 測試失敗時
- 📝 填寫測試報告，記錄錯誤訊息
- 🔍 檢查 Vercel logs 和 Supabase 資料
- 💬 提供完整資訊以便協助除錯

---

**測試指南版本**：v1.0  
**最後更新**：2026-08-09  
**適用專案**：wineacademy (Vercel)
