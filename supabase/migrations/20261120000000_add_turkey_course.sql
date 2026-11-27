-- ============================================================
-- 新增「土耳其葡萄酒」至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
-- 本課程【不販售、僅供管理員閱讀】：active = false、show_on_home = false 必須永久維持。
-- 價格欄位無意義（NOT NULL 但帶預設值），一律填 0，不得出現在方案頁、全球通行證、ECPay 允許名單。
-- 不提供「公開」用的 UPDATE。前端以 authActions.isAdmin() 限制（路由 requiresAdmin、PlatformHome 的管理員入口）。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  'turkey',
  'Turkey',
  '土耳其葡萄酒',
  'wine',
  0, 0,
  0, 0,
  0, 0,
  '土耳其葡萄酒延伸課程：歷史、地理氣候與慣用分區、本土品種、葡萄酒公報、產業與論述，共 3 階段 11 課。不販售，僅供管理員閱讀。',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;
