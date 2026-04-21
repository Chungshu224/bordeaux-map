-- 新增 show_on_home 欄位至 courses 資料表
-- 控制課程是否顯示於首頁，管理員永遠可存取所有課程

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS show_on_home BOOLEAN NOT NULL DEFAULT TRUE;

-- 現有課程預設全部顯示
UPDATE public.courses SET show_on_home = TRUE WHERE show_on_home IS NULL;
