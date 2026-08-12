# 🚀 ECPay Vercel 環境變數設定完整指南

> **目標**：在 Vercel 上完整配置 ECPay 支付整合所需的環境變數

---

## 📋 設定前的準備

### ✅ 已完成項目
- [x] 本機 `.env.local` 已修正（ECPAY_ORDER_RESULT_URL 和 ECPAY_STAGE）
- [x] 專案已部署到 Vercel（wineacademy.vercel.app）
- [x] Supabase 已配置並連接

### 📝 需要的資訊
從您的 `.env.local` 中複製以下值：

```bash
ECPAY_MERCHANT_ID="<你的 ECPay 測試 Merchant ID>"
ECPAY_HASH_KEY="<你的 ECPay 測試 Hash Key>"
ECPAY_HASH_IV="<你的 ECPay 測試 Hash IV>"
ECPAY_RETURN_URL="https://wineacademy.vercel.app/api/ecpay-callback"
ECPAY_ORDER_RESULT_URL="https://wineacademy.vercel.app/api/ecpay-order-result"
ECPAY_STAGE="true"
SUPABASE_URL="https://ayyrxnaigvzqktkswhnd.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="<你的 Supabase service_role 密鑰，於 Supabase Dashboard → Settings → API 取得>"
```

---

## 🔧 步驟 1：進入 Vercel 專案設定

### 1.1 開啟 Vercel Dashboard
```
https://vercel.com/chungshu224s-projects/wineacademy
```

### 1.2 進入環境變數設定
1. 點擊專案 `wineacademy`
2. 點擊頂部導航欄的 **Settings** 標籤
3. 左側選單點擊 **Environment Variables**

---

## 📝 步驟 2：新增 ECPay 環境變數

### 2.1 ECPAY_MERCHANT_ID
```
Key:   ECPAY_MERCHANT_ID
Value: <你的 ECPay 測試 Merchant ID>
Environment: ✅ Production  ✅ Preview  ✅ Development
```
點擊 **Save**

### 2.2 ECPAY_HASH_KEY
```
Key:   ECPAY_HASH_KEY
Value: <你的 ECPay 測試 Hash Key>
Environment: ✅ Production  ✅ Preview  ✅ Development
```
點擊 **Save**

### 2.3 ECPAY_HASH_IV
```
Key:   ECPAY_HASH_IV
Value: <你的 ECPay 測試 Hash IV>
Environment: ✅ Production  ✅ Preview  ✅ Development
```
點擊 **Save**

### 2.4 ECPAY_RETURN_URL
```
Key:   ECPAY_RETURN_URL
Value: https://wineacademy.vercel.app/api/ecpay-callback
Environment: ✅ Production  ✅ Preview  ✅ Development
```
⚠️ **重要**：這個 URL 是 ECPay 付款完成後的回呼地址，必須是 **可公開訪問的 HTTPS**

點擊 **Save**

### 2.5 ECPAY_ORDER_RESULT_URL
```
Key:   ECPAY_ORDER_RESULT_URL
Value: https://wineacademy.vercel.app/api/ecpay-order-result
Environment: ✅ Production  ✅ Preview  ✅ Development
```
⚠️ **關鍵修正**：
- ❌ **不要**設為 `/payment/result`（這是前端頁面）
- ✅ **必須**設為 `/api/ecpay-order-result`（這是 API 端點）

點擊 **Save**

### 2.6 ECPAY_STAGE
```
Key:   ECPAY_STAGE
Value: true
Environment: ✅ Production  ✅ Preview  ✅ Development
```
⚠️ **測試階段必須**：
- `true` = 測試環境（可使用測試卡 4311-9522-2222-2222）
- `false` = 正式環境（只接受真實信用卡）

點擊 **Save**

---

## 🗄️ 步驟 3：確認 Supabase 環境變數

### 3.1 SUPABASE_URL
```
Key:   SUPABASE_URL
Value: https://ayyrxnaigvzqktkswhnd.supabase.co
Environment: ✅ Production  ✅ Preview  ✅ Development
```
（如果已存在，跳過此步驟）

### 3.2 SUPABASE_SERVICE_ROLE_KEY
```
Key:   SUPABASE_SERVICE_ROLE_KEY
Value: <你的 Supabase service_role 密鑰，於 Supabase Dashboard → Settings → API 取得>
Environment: ✅ Production  ✅ Preview  ✅ Development
```
⚠️ **安全提醒**：這是 `service_role` 密鑰（非 `anon` 密鑰），具有完整權限，必須保密！

（如果已存在，跳過此步驟）

---

## 🔄 步驟 4：重新部署

### 4.1 觸發部署
環境變數新增後，**必須重新部署**才會生效：

**方法 A：透過 Vercel Dashboard**
1. 進入專案頁面
2. 點擊 **Deployments** 標籤
3. 找到最新的成功部署
4. 點擊右側的 `⋯` 三點選單
5. 選擇 **Redeploy**
6. 確認 **Redeploy**

**方法 B：透過 Git 推送**
```bash
# 在本機專案目錄執行
git commit --allow-empty -m "chore: trigger redeploy for ECPay env vars"
git push
```

### 4.2 等待部署完成
- 進入 **Deployments** 標籤
- 等待狀態變為 **Ready** ✅
- 預計時間：1-3 分鐘

---

## ✅ 步驟 5：驗證環境變數

### 5.1 檢查是否已正確設定
1. 進入 **Settings** → **Environment Variables**
2. 確認看到以下 8 個變數：
   - ✅ ECPAY_MERCHANT_ID
   - ✅ ECPAY_HASH_KEY
   - ✅ ECPAY_HASH_IV
   - ✅ ECPAY_RETURN_URL
   - ✅ ECPAY_ORDER_RESULT_URL
   - ✅ ECPAY_STAGE
   - ✅ SUPABASE_URL
   - ✅ SUPABASE_SERVICE_ROLE_KEY

### 5.2 檢查部署日誌（選擇性）
```
https://vercel.com/chungshu224s-projects/wineacademy/deployments
```
1. 點擊最新的部署
2. 點擊 **Building** 或 **Runtime Logs**
3. 確認沒有環境變數相關錯誤

---

## 🧪 下一步：執行信用卡測試

完成上述步驟後，您可以進行實際測試：

### 測試流程
1. **登入網站**：https://wineacademy.vercel.app
2. **前往方案頁**：選擇任一訂閱方案
3. **選擇信用卡支付**（Credit）
4. **送出購買**

### 預期行為
- ✅ 跳轉到 `payment-stage.ecpay.com.tw`（ECPay 測試環境）
- ✅ 使用測試卡號：`4311-9522-2222-2222`
- ✅ 有效年月：任一未來日期（例如 12/28）
- ✅ CVV：`222`
- ✅ 3D 驗證碼：`1234`
- ✅ 付款成功後導回 `/payment/result?ecpay=1&type=credit`

### 測試失敗常見原因
❌ **跳轉到錯誤頁面** → 檢查 `ECPAY_ORDER_RESULT_URL` 是否為 `/api/ecpay-order-result`  
❌ **測試卡被拒絕** → 確認 `ECPAY_STAGE="true"`  
❌ **CheckMacValue 驗證失敗** → 檢查 HASH_KEY 和 HASH_IV 是否正確  
❌ **Supabase 訂單未建立** → 檢查 SERVICE_ROLE_KEY 是否正確

---

## 📊 步驟 6：驗證 Supabase 訂單

### 6.1 進入 Supabase SQL Editor
```
https://supabase.com/dashboard/project/ayyrxnaigvzqktkswhnd/sql
```

### 6.2 執行查詢
```sql
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
```

### 6.3 驗證結果
確認最新交易：
- ✅ `status = 'paid'`
- ✅ `paid_at` 不為 null
- ✅ `payment_ref` 不為 null
- ✅ `merchant_trade_no` 與測試時的訂單編號一致

---

## 🎯 完成檢查清單

完成 Vercel 設定後，更新以下項目：

- [ ] 已在 Vercel 新增 ECPAY_MERCHANT_ID
- [ ] 已在 Vercel 新增 ECPAY_HASH_KEY
- [ ] 已在 Vercel 新增 ECPAY_HASH_IV
- [ ] 已在 Vercel 新增 ECPAY_RETURN_URL
- [ ] 已在 Vercel 新增 ECPAY_ORDER_RESULT_URL
- [ ] 已在 Vercel 新增 ECPAY_STAGE
- [ ] 已確認 SUPABASE_URL 存在
- [ ] 已確認 SUPABASE_SERVICE_ROLE_KEY 存在
- [ ] 已重新部署專案（Redeploy）
- [ ] 部署狀態為 Ready ✅

---

## 🔍 故障排除

### 問題 1：環境變數沒有生效
**解決方法**：重新部署專案（步驟 4）

### 問題 2：ECPAY_STAGE 設為 false 無法使用測試卡
**解決方法**：
1. 修改 ECPAY_STAGE 為 `true`
2. 重新部署
3. 清除瀏覽器快取後重試

### 問題 3：CheckMacValue 驗證失敗
**可能原因**：
- HASH_KEY 或 HASH_IV 錯誤
- MERCHANT_ID 不匹配
- 測試/正式環境混用

**解決方法**：
1. 雙重檢查所有 ECPay 憑證
2. 確認 ECPAY_STAGE 與測試卡匹配

### 問題 4：Supabase 訂單未建立
**可能原因**：
- SERVICE_ROLE_KEY 錯誤
- SUPABASE_URL 錯誤
- API 回呼未觸發

**解決方法**：
1. 檢查 Vercel Functions logs
2. 確認 `/api/ecpay-callback` 有收到請求
3. 檢查 Supabase RLS 規則

---

## 📞 需要協助？

如果遇到問題，請提供：
1. **Vercel 部署日誌**（Runtime Logs）
2. **瀏覽器 Console 錯誤訊息**
3. **測試時的 MerchantTradeNo**
4. **Supabase 查詢結果**

---

**最後更新**：2026-08-09  
**Vercel 專案**：wineacademy  
**專案 URL**：https://wineacademy.vercel.app
