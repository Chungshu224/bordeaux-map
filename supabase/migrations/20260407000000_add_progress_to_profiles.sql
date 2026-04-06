-- 在 profiles 資料表新增 progress 欄位，用於雲端同步學習進度
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS progress jsonb DEFAULT '{}'::jsonb;

-- 補上 UPDATE 權限（RLS）：使用者可以更新自己的 progress
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename  = 'profiles'
      AND policyname = 'Users can update own profile'
  ) THEN
    CREATE POLICY "Users can update own profile" ON public.profiles
      FOR UPDATE USING (auth.uid() = id);
  END IF;
END
$$;
