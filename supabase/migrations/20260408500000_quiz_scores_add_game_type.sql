-- 新增 game_type 欄位以區分不同遊戲
ALTER TABLE quiz_scores
  ADD COLUMN IF NOT EXISTS game_type text NOT NULL DEFAULT 'map_quiz';

-- 更新索引（包含 game_type）
DROP INDEX IF EXISTS idx_quiz_scores_difficulty_score;
CREATE INDEX IF NOT EXISTS idx_quiz_scores_game_difficulty_score
  ON quiz_scores (game_type, difficulty, score DESC);

-- 通知 PostgREST 重新載入 schema
SELECT pg_notify('pgrst', 'reload schema');
