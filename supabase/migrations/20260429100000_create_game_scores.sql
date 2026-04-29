-- ============================================================
-- 遊戲成績排行榜（所有小遊戲共用）
-- ============================================================
CREATE TABLE IF NOT EXISTS game_scores (
  id              uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  username        text        NOT NULL,
  game_type       text        NOT NULL,
  difficulty      text        NOT NULL DEFAULT 'easy',
  score           integer     NOT NULL DEFAULT 0,
  correct_count   integer     NOT NULL DEFAULT 0,
  total_questions integer     NOT NULL DEFAULT 0,
  created_at      timestamptz DEFAULT now() NOT NULL
);

-- RLS
ALTER TABLE game_scores ENABLE ROW LEVEL SECURITY;

-- 排行榜公開可讀
DROP POLICY IF EXISTS "game_scores_public_read" ON game_scores;
CREATE POLICY "game_scores_public_read" ON game_scores
  FOR SELECT USING (true);

-- 只能插入自己的成績
DROP POLICY IF EXISTS "game_scores_insert_own" ON game_scores;
CREATE POLICY "game_scores_insert_own" ON game_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 加速排行榜查詢
CREATE INDEX IF NOT EXISTS idx_game_scores_type_diff_score
  ON game_scores (game_type, difficulty, score DESC);

-- PostgREST 存取權限
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON game_scores TO anon, authenticated;
GRANT INSERT ON game_scores TO authenticated;

-- 通知 PostgREST 重新載入 schema cache
NOTIFY pgrst, 'reload schema';
