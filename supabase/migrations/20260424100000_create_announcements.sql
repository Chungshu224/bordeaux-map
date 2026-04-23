-- ============================================================
-- 建立公告（announcements）資料表
-- 上次更新：2026-04-24
--
-- 目的：
--   1. 提供首頁公告 Banner / Modal / Ticker 功能
--   2. 後台管理員可 CRUD 公告
--   3. 訪客與已登入學員皆可讀取有效且在時間內的公告
-- ============================================================

CREATE TABLE IF NOT EXISTS public.announcements (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text        NOT NULL,
  content      text        NOT NULL,
  type         text        NOT NULL DEFAULT 'info',    -- 'info' | 'warning' | 'promo' | 'maintenance'
  display_mode text        NOT NULL DEFAULT 'banner',  -- 'banner' | 'modal' | 'ticker'
  target_tier  text        NOT NULL DEFAULT 'all',     -- 'all' | 'free' | 'basic' | 'premium'
  is_active    boolean     NOT NULL DEFAULT true,
  starts_at    timestamptz NOT NULL DEFAULT now(),
  ends_at      timestamptz,                            -- NULL = 永不自動過期
  priority     int         NOT NULL DEFAULT 0,
  created_by   uuid        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- 允許非空欄位合法範圍
ALTER TABLE public.announcements
  ADD CONSTRAINT announcements_type_check
    CHECK (type IN ('info', 'warning', 'promo', 'maintenance')),
  ADD CONSTRAINT announcements_display_mode_check
    CHECK (display_mode IN ('banner', 'modal', 'ticker')),
  ADD CONSTRAINT announcements_target_tier_check
    CHECK (target_tier IN ('all', 'free', 'basic', 'premium'));

-- 自動更新 updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER announcements_set_updated_at
  BEFORE UPDATE ON public.announcements
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ── RLS ──────────────────────────────────────────────────────────────────────
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- 所有人（含未登入）可讀取：啟用中且在有效時間內
CREATE POLICY "announcements_public_read"
  ON public.announcements
  FOR SELECT
  USING (
    is_active = true
    AND starts_at <= now()
    AND (ends_at IS NULL OR ends_at > now())
  );

-- 管理員完整操作
CREATE POLICY "announcements_admin_all"
  ON public.announcements
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- ── Index ────────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_announcements_active_time
  ON public.announcements (is_active, starts_at, ends_at);
CREATE INDEX IF NOT EXISTS idx_announcements_priority
  ON public.announcements (priority DESC);

-- ── 預設示範公告 ─────────────────────────────────────────────────────────────
INSERT INTO public.announcements (title, content, type, display_mode, target_tier, priority)
VALUES (
  '🎉 歡迎使用侍酒師的筆記本！',
  '平台持續新增課程與功能，目前已開放波爾多、布根地、義大利等 10 大產區，歡迎訂閱解鎖完整內容。',
  'info',
  'banner',
  'all',
  1
);
