-- ============================================================
-- 課程、學習進度、成就系統 — 完整資料表
-- 建立日期：2026-04-14
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. courses：課程資訊（名稱、價格、分類）
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.courses (
  id              text        PRIMARY KEY,           -- 'bordeaux' | 'bourgogne' | 'italy'
  name            text        NOT NULL,
  name_zh         text        NOT NULL,
  category        text        NOT NULL DEFAULT 'wine',
  price_basic     integer     NOT NULL DEFAULT 0,    -- NT 元
  price_premium   integer     NOT NULL DEFAULT 0,
  description     text,
  thumbnail_url   text,
  active          boolean     NOT NULL DEFAULT true,
  created_at      timestamptz DEFAULT now()
);

-- 課程種子資料
INSERT INTO public.courses (id, name, name_zh, category, price_basic, price_premium, description)
VALUES
  ('bordeaux',  'Bordeaux',   '波爾多葡萄酒課程', 'wine', 1200, 2400, '波爾多產區完整課程，含 Level 1–4，涵蓋地圖、品種、酒莊'),
  ('bourgogne', 'Bourgogne',  '布根地葡萄酒課程', 'wine', 1200, 2400, '布根地產區深度課程，含地質土壤與氣候分析'),
  ('italy',     'Italy',      '義大利葡萄酒課程', 'wine', 1200, 2400, '義大利主要產區與品種完整課程')
ON CONFLICT (id) DO UPDATE SET
  price_basic   = EXCLUDED.price_basic,
  price_premium = EXCLUDED.price_premium;

-- RLS (課程清單公開可讀)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "courses_public_read" ON public.courses
  FOR SELECT USING (active = true);
CREATE POLICY "courses_admin_all" ON public.courses
  FOR ALL USING (
    (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
  );


-- ────────────────────────────────────────────────────────────
-- 2. user_courses（view）：對應 purchases，提供標準化名稱查詢
--    使用 VIEW 避免資料重複，purchases 仍為唯一事實來源
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW public.user_courses AS
SELECT
  p.id,
  p.user_id,
  p.course_id,
  p.tier,
  p.status,
  p.expires_at,
  p.paid_at,
  p.amount,
  p.currency,
  p.created_at,
  -- 計算是否在有效期內
  (p.status = 'active' AND (p.expires_at IS NULL OR p.expires_at > now())) AS is_active
FROM public.purchases p;

-- 注意：RLS 由底層 purchases 資料表負責，view 繼承其策略


-- ────────────────────────────────────────────────────────────
-- 3. learning_progress：追蹤學員的學習進度（完成單元、測驗分數）
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.learning_progress (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id    text        NOT NULL,                 -- 'bordeaux' | 'bourgogne' | 'italy'
  module_id    text        NOT NULL,                 -- 'l1m1', 'l2m3' …
  unit_id      text        NOT NULL DEFAULT 'main',  -- 模組內的子單元（如投影片頁、測驗）
  completed    boolean     NOT NULL DEFAULT false,
  score        smallint,                             -- 測驗分數 0–100（NULL = 未作答）
  attempts     smallint    NOT NULL DEFAULT 0,
  time_spent   integer     DEFAULT 0,               -- 秒數
  completed_at timestamptz,
  updated_at   timestamptz DEFAULT now(),
  UNIQUE (user_id, course_id, module_id, unit_id)
);

-- 索引加速常見查詢
CREATE INDEX IF NOT EXISTS idx_lp_user_course    ON public.learning_progress (user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_lp_updated        ON public.learning_progress (updated_at DESC);

-- 自動更新 updated_at
CREATE OR REPLACE FUNCTION public.touch_learning_progress()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  IF NEW.completed AND OLD.completed IS DISTINCT FROM true THEN
    NEW.completed_at := now();
  END IF;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER trg_touch_learning_progress
  BEFORE UPDATE ON public.learning_progress
  FOR EACH ROW EXECUTE FUNCTION public.touch_learning_progress();

-- RLS
ALTER TABLE public.learning_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lp_read_own"   ON public.learning_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "lp_insert_own" ON public.learning_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "lp_update_own" ON public.learning_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "lp_admin_all"  ON public.learning_progress FOR ALL USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- RPC：取得特定用戶某課程的完成率 (%)
CREATE OR REPLACE FUNCTION public.get_course_completion_rate(
  p_user_id  uuid,
  p_course_id text
)
RETURNS numeric
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT
    CASE
      WHEN COUNT(*) = 0 THEN 0
      ELSE ROUND(100.0 * COUNT(*) FILTER (WHERE completed) / COUNT(*), 1)
    END
  FROM public.learning_progress
  WHERE user_id = p_user_id AND course_id = p_course_id;
$$;


-- ────────────────────────────────────────────────────────────
-- 4. user_achievements：徽章或證書紀錄
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id             uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id      text,                                 -- NULL = 跨課程成就
  achievement_id text        NOT NULL,                 -- 'first_lesson' | 'quiz_master' | …
  title          text        NOT NULL,
  description    text,
  icon           text,                                 -- emoji 或 icon name
  badge_type     text        NOT NULL DEFAULT 'badge'
                             CHECK (badge_type IN ('badge', 'certificate', 'milestone')),
  earned_at      timestamptz DEFAULT now(),
  UNIQUE (user_id, achievement_id)
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_ach_user ON public.user_achievements (user_id, earned_at DESC);

-- RLS
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ach_read_own"    ON public.user_achievements FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "ach_insert_own"  ON public.user_achievements FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "ach_admin_all"   ON public.user_achievements FOR ALL USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);


-- ────────────────────────────────────────────────────────────
-- 5. notification_log：寄件紀錄（避免重複寄送）
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.notification_log (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type        text        NOT NULL,   -- 'subscription_reminder_30d' | '10d' | '7d'
  sent_at     timestamptz DEFAULT now(),
  purchase_id uuid        REFERENCES public.purchases(id) ON DELETE SET NULL,
  meta        jsonb       DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_notif_log_user_type ON public.notification_log (user_id, type, sent_at DESC);

-- RLS（僅 admin / service role 可讀寫）
ALTER TABLE public.notification_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "notif_admin_all" ON public.notification_log FOR ALL USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);


-- ────────────────────────────────────────────────────────────
-- 通知 PostgREST 重載 schema
-- ────────────────────────────────────────────────────────────
NOTIFY pgrst, 'reload schema';
