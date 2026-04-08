-- ============================================================
-- 產區競答 排行榜
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_scores (
  id              uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         uuid        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  username        text        NOT NULL,
  difficulty      text        NOT NULL CHECK (difficulty IN ('easy', 'hard')),
  score           integer     NOT NULL DEFAULT 0,
  correct_count   integer     NOT NULL DEFAULT 0,
  total_questions integer     NOT NULL DEFAULT 0,
  created_at      timestamptz DEFAULT now() NOT NULL
);

-- RLS
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;

-- 排行榜公開可讀（任何人皆可查）
DROP POLICY IF EXISTS "quiz_leaderboard_public_read" ON quiz_scores;
CREATE POLICY "quiz_leaderboard_public_read" ON quiz_scores
  FOR SELECT USING (true);

-- 只能插入自己的成績
DROP POLICY IF EXISTS "quiz_insert_own_score" ON quiz_scores;
CREATE POLICY "quiz_insert_own_score" ON quiz_scores
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 加速排行榜查詢
CREATE INDEX IF NOT EXISTS idx_quiz_scores_difficulty_score
  ON quiz_scores (difficulty, score DESC);

-- PostgREST 需要的 schema/table 存取權限
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON quiz_scores TO anon, authenticated;
GRANT INSERT ON quiz_scores TO authenticated;

-- 通知 PostgREST 重新載入 schema cache
NOTIFY pgrst, 'reload schema';
