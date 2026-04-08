-- 品飲筆記表
CREATE TABLE IF NOT EXISTS public.tasting_notes (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  aoc_id       text        NOT NULL,          -- e.g. "Margaux_AOC"
  chateau_name text        NOT NULL,          -- 對應 coordinates_<aoc>.json 的 name 欄位
  vintage      smallint    CHECK (vintage BETWEEN 1900 AND 2100),
  status       text        NOT NULL DEFAULT 'tried'
                           CHECK (status IN ('tried', 'wishlist')),
  rating       smallint    CHECK (rating BETWEEN 1 AND 5),
  notes        text,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- 每位用戶對同一酒莊同一年份只能有一筆紀錄
CREATE UNIQUE INDEX IF NOT EXISTS tasting_notes_user_chateau_vintage_uniq
  ON public.tasting_notes (user_id, aoc_id, chateau_name, vintage);

-- updated_at 自動更新
CREATE OR REPLACE FUNCTION public.set_tasting_notes_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER tasting_notes_updated_at
  BEFORE UPDATE ON public.tasting_notes
  FOR EACH ROW EXECUTE FUNCTION public.set_tasting_notes_updated_at();

-- RLS
ALTER TABLE public.tasting_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own tasting notes"
  ON public.tasting_notes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tasting notes"
  ON public.tasting_notes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasting notes"
  ON public.tasting_notes FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasting notes"
  ON public.tasting_notes FOR DELETE
  USING (auth.uid() = user_id);
