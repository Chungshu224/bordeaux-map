# 🎴 ECPay 測試快速參考卡

> **一頁速查表**：包含所有測試所需的關鍵資訊

---

## 🔑 環境變數（Vercel）

```bash
ECPAY_MERCHANT_ID=<你的 ECPay 測試 Merchant ID>
ECPAY_HASH_KEY=<你的 ECPay 測試 Hash Key>
ECPAY_HASH_IV=<你的 ECPay 測試 Hash IV>
ECPAY_RETURN_URL=https://wineacademy.vercel.app/api/ecpay-callback
ECPAY_ORDER_RESULT_URL=https://wineacademy.vercel.app/api/ecpay-order-result
ECPAY_STAGE=true
SUPABASE_URL=https://ayyrxnaigvzqktkswhnd.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...（完整 token）
```

⚠️ **關鍵設定**：
- `ECPAY_STAGE` **必須** 為 `true`（測試環境）
- `ECPAY_ORDER_RESULT_URL` **必須** 指向 `/api/ecpay-order-result`

---

## 💳 測試卡資料

| 項目 | 值 |
|------|-----|
| 卡號 | `4311-9522-2222-2222` |
| 有效年月 | 任一未來日期（例如 `12/28`） |
| CVV | `222` |
| 3D 驗證碼 | `1234` |
| 持卡人 | `TEST USER`（選填） |

---

## 🌐 重要網址

| 用途 | URL |
|------|-----|
| 網站首頁 | https://wineacademy.vercel.app |
| Vercel Dashboard | https://vercel.com/chungshu224s-projects/wineacademy |
| Vercel Logs | https://vercel.com/chungshu224s-projects/wineacademy/logs |
| Supabase Dashboard | https://supabase.com/dashboard/project/ayyrxnaigvzqktkswhnd |
| Supabase SQL Editor | https://supabase.com/dashboard/project/ayyrxnaigvzqktkswhnd/sql |
| ECPay 測試環境 | https://payment-stage.ecpay.com.tw |

---

## ⚡ 快速測試流程（5 步驟）

### 1️⃣ 登入網站
```
https://wineacademy.vercel.app
```

### 2️⃣ 選擇方案並購買
- 點擊「訂閱」或「方案」
- 選擇**信用卡（Credit）**支付

### 3️⃣ 填寫測試卡
- 卡號：`4311-9522-2222-2222`
- CVV：`222`
- 3D 驗證碼：`1234`

### 4️⃣ 確認付款成功
- 跳回 `/payment/result?ecpay=1`
- 看到成功訊息 ✅

### 5️⃣ 驗證資料（二選一）
**A. Vercel Logs**
```
搜尋：ecpay-callback
確認：CheckMacValue verified successfully
```

**B. Supabase SQL**
```sql
SELECT * FROM purchases 
WHERE payment_provider = 'ecpay' 
ORDER BY created_at DESC LIMIT 1;
```
確認：`status = 'paid'`

---

## 🔍 Supabase 查詢 SQL

### 查詢最新 5 筆 ECPay 訂單
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
LIMIT 5;
```

### 查詢特定訂單（依訂單編號）
```sql
SELECT * FROM purchases
WHERE merchant_trade_no = 'T202608091234567890';
```

### 查詢用戶訂閱狀態
```sql
SELECT * FROM user_subscriptions
WHERE user_id = '你的用戶ID'
ORDER BY created_at DESC
LIMIT 1;
```

---

## 🚨 故障排除速查表

| 問題 | 原因 | 解決方法 |
|------|------|----------|
| 跳到 payment.ecpay.com.tw（無 -stage） | ECPAY_STAGE=false | 設為 true，重新部署 |
| 測試卡被拒絕 | 使用正式環境 | 確認 URL 有 `-stage` |
| CheckMacValue 失敗 | HASH_KEY/IV 錯誤 | 檢查環境變數拼寫 |
| 導回 404 | ORDER_RESULT_URL 錯誤 | 改為 `/api/ecpay-order-result` |
| Supabase 無資料 | SERVICE_ROLE_KEY 錯誤 | 確認使用 service_role |
| Callback 未觸發 | RETURN_URL 錯誤 | 檢查 `/api/ecpay-callback` |

---

## ✅ 成功標準檢查清單

測試通過必須滿足：
- [ ] URL 跳到 `payment-stage.ecpay.com.tw`
- [ ] 測試卡號可以正常使用
- [ ] 付款完成後導回 `/payment/result?ecpay=1`
- [ ] Vercel logs 顯示 CheckMacValue 驗證成功
- [ ] Supabase 中訂單 `status = 'paid'`
- [ ] `paid_at` 不為 null

---

## 📞 緊急聯絡資訊

### ECPay 測試環境資訊
```
環境：測試環境（Stage）
Merchant ID：見 Vercel 環境變數 ECPAY_MERCHANT_ID
測試卡號：4311-9522-2222-2222
```

### 專案資訊
```
專案名稱：wineacademy
Vercel 網域：wineacademy.vercel.app
Supabase 專案：ayyrxnaigvzqktkswhnd
```

---

## 📚 完整文件連結

| 文件 | 用途 |
|------|------|
| [ECPAY_TODO_CHECKLIST.md](ECPAY_TODO_CHECKLIST.md) | 完整待辦清單 |
| [ECPAY_VERCEL_SETUP_GUIDE.md](ECPAY_VERCEL_SETUP_GUIDE.md) | Vercel 環境變數設定詳細指南 |
| [ECPAY_TESTING_GUIDE.md](ECPAY_TESTING_GUIDE.md) | 完整測試流程與故障排除 |
| [ECPAY_QUICK_REFERENCE.md](ECPAY_QUICK_REFERENCE.md) | 本文件（快速參考） |

---

## 🎯 今日目標（30 分鐘）

1. ⏱️ **10 分鐘**：設定 Vercel 環境變數（8 個）
2. ⏱️ **3 分鐘**：重新部署專案
3. ⏱️ **5 分鐘**：執行信用卡測試
4. ⏱️ **5 分鐘**：檢查 Vercel logs
5. ⏱️ **2 分鐘**：驗證 Supabase 資料
6. ⏱️ **5 分鐘**：標記完成項目

---

**版本**：v1.0  
**更新日期**：2026-08-09  
**列印友善** ✅ **單頁速查** ✅
