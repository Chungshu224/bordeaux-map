-- ============================================================
-- 範本 1／3：新增課程至 courses 資料表
-- 使用方式：複製到 supabase/migrations/<時間戳>_add_<course_id>_course.sql，
--           把 {{...}} 佔位字換成實際內容。
-- 預設 active = false、show_on_home = false（不開放購買、不顯示於首頁）。
-- 冪等：可重複執行；已存在時只更新名稱與描述。
-- ⚠ 尚未套用。
-- ============================================================

INSERT INTO public.courses (
  id, name, name_zh, category,
  price_basic, price_premium,
  price_basic_monthly, price_basic_yearly,
  price_premium_monthly, price_premium_yearly,
  description, active, show_on_home
)
VALUES (
  '{{course_id}}',
  '{{英文名稱}}',
  '{{中文名稱}}',
  'wine',
  1200, 2400,
  290, 1800,
  590, 3600,
  '{{課程描述}}',
  false,
  false
)
ON CONFLICT (id) DO UPDATE SET
  name_zh     = EXCLUDED.name_zh,
  description = EXCLUDED.description;

-- 準備好公開時再執行：
-- UPDATE public.courses SET active = true, show_on_home = true WHERE id = '{{course_id}}';
-- （前端另需把 PlatformHome 的 ADMIN_ONLY_COURSES 移除 '{{course_id}}'，並移除路由的 requiresAdmin）
