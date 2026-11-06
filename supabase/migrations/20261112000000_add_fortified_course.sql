-- ============================================================
-- 新增「全球強化酒專論」至 courses 資料表（僅準備檔案，尚未套用到正式資料庫）
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
  'fortified',
  'Fortified Wines of the World',
  '全球強化酒專論',
  'wine',
  0, 0,
  0, 0,
  0, 0,
  '以 WSET Diploma（D5 強化酒）為導向的全球強化酒專論：加烈與陳年原理、全球產區（Sherry、Port、Madeira、天然甜酒、Rutherglen 與其他產區）、D5 品飲與論述，共 3 階段 21 課。不販售，僅供管理員閱讀。',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;
