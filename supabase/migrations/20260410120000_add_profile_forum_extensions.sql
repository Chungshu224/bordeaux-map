-- ============================================================
-- 個人資料擴充：大頭貼 / 個人簡介 / 最高成就
-- 論壇文章 & 回覆：新增大頭貼 / 最高成就快照欄位
-- ============================================================

-- ── profiles 新增欄位 ──────────────────────────────────────
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS avatar_url      text,
  ADD COLUMN IF NOT EXISTS bio             text,
  ADD COLUMN IF NOT EXISTS top_achievement text;

COMMENT ON COLUMN public.profiles.avatar_url      IS '大頭貼公開 URL（Supabase Storage avatars bucket）';
COMMENT ON COLUMN public.profiles.bio             IS '個人簡介（最多 120 字）';
COMMENT ON COLUMN public.profiles.top_achievement IS '最高成就標籤，如「👑 Level 4 大師」';

-- ── forum_posts 新增欄位 ───────────────────────────────────
ALTER TABLE public.forum_posts
  ADD COLUMN IF NOT EXISTS avatar_url      text,
  ADD COLUMN IF NOT EXISTS top_achievement text;

-- ── forum_replies 新增欄位 ────────────────────────────────
ALTER TABLE public.forum_replies
  ADD COLUMN IF NOT EXISTS avatar_url      text,
  ADD COLUMN IF NOT EXISTS top_achievement text;

-- ============================================================
-- ⚠️  大頭貼 Storage Bucket（需在 Supabase Dashboard 手動建立）
-- 1. 前往 Dashboard → Storage → New Bucket
-- 2. Bucket name: avatars
-- 3. Public: 開啟（Public bucket）
-- 4. 建立後執行以下 RLS policies（可在 SQL Editor 執行）：
-- ============================================================

-- Storage RLS：允許登入使用者上傳自己的大頭貼
-- （只有在 Storage → Policies 介面或以下 SQL 新增）
INSERT INTO storage.buckets (id, name, public)
  VALUES ('avatars', 'avatars', true)
  ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Avatar upload allow" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Avatar update allow" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Avatar public read" ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'avatars');
