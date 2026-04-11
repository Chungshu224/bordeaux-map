-- ============================================================
-- 布根地產區競答 排行榜
-- ============================================================
CREATE TABLE IF NOT EXISTS bourgogne_quiz_scores (
  id              uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  username        text        NOT NULL,
  difficulty      text        NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  score           integer     NOT NULL DEFAULT 0,
  correct_count   integer     NOT NULL DEFAULT 0,
  total_questions integer     NOT NULL DEFAULT 0,
  created_at      timestamptz DEFAULT now() NOT NULL
);

-- RLS
ALTER TABLE bourgogne_quiz_scores ENABLE ROW LEVEL SECURITY;

-- 排行榜公開可讀
DROP POLICY IF EXISTS "bourgogne_quiz_leaderboard_public_read" ON bourgogne_quiz_scores;
CREATE POLICY "bourgogne_quiz_leaderboard_public_read" ON bourgogne_quiz_scores
  FOR SELECT USING (true);

-- 只能插入自己的成績
DROP POLICY IF EXISTS "bourgogne_quiz_insert_own_score" ON bourgogne_quiz_scores;
CREATE POLICY "bourgogne_quiz_insert_own_score" ON bourgogne_quiz_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 加速排行榜查詢
CREATE INDEX IF NOT EXISTS idx_bourgogne_quiz_scores_difficulty_score
  ON bourgogne_quiz_scores (difficulty, score DESC);

-- 權限
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON bourgogne_quiz_scores TO anon, authenticated;
GRANT INSERT ON bourgogne_quiz_scores TO authenticated;

NOTIFY pgrst, 'reload schema';
