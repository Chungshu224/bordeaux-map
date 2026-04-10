-- 新增 gamehub（互動練習區）分類到 forum_posts
-- 先移除舊 CHECK constraint，再加入新的含 gamehub

alter table public.forum_posts
  drop constraint if exists forum_posts_category_check;

alter table public.forum_posts
  add constraint forum_posts_category_check
    check (category in ('general','level1','level2','level3','level4','gamehub','tasting','wine-pairing'));
