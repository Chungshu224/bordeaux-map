-- Migration: 20260421200000_add_california_course.sql
-- Adds the California wine course to the courses table

INSERT INTO courses (id, name, description, flag, region, active)
VALUES (
  'california',
  '加州葡萄酒',
  '從 Napa Valley 的頂級 Cabernet Sauvignon 到 Sonoma 的精緻 Pinot Noir，探索 154+ AVA 產區，深入了解巴黎品酒會震驚世界的葡萄酒大國',
  '🇺🇸',
  'USA · California',
  true
)
ON CONFLICT (id) DO NOTHING;
