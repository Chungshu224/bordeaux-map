-- 德國葡萄酒遊戲排行榜 game_type 索引
-- quiz_scores 已有 game_type 欄位（migration 20260408500000），此處僅補索引

-- 確保 germany 遊戲類型有專屬複合索引，加速排行榜查詢
CREATE INDEX IF NOT EXISTS idx_quiz_scores_germany_grape
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'germany_grape_match';

CREATE INDEX IF NOT EXISTS idx_quiz_scores_germany_region
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'germany_region_quiz';

CREATE INDEX IF NOT EXISTS idx_quiz_scores_germany_pradikat
  ON quiz_scores (game_type, difficulty, score DESC)
  WHERE game_type = 'germany_pradikat_quiz';

-- 通知 PostgREST 重新載入 schema
SELECT pg_notify('pgrst', 'reload schema');
