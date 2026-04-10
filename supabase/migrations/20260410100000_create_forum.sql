-- ============================================================
-- 論壇資料表
-- ============================================================

-- 討論主題
create table if not exists public.forum_posts (
  id           uuid        primary key default gen_random_uuid(),
  user_id      uuid        references auth.users(id) on delete cascade not null,
  display_name text        not null default '學員',
  title        text        not null,
  content      text        not null,
  category     text        not null default 'general'
               check (category in ('general','level1','level2','level3','level4','tasting','wine-pairing')),
  reply_count  integer     not null default 0,
  is_pinned    boolean     not null default false,
  created_at   timestamptz default now()
);

-- 回覆
create table if not exists public.forum_replies (
  id           uuid        primary key default gen_random_uuid(),
  post_id      uuid        references public.forum_posts(id) on delete cascade not null,
  user_id      uuid        references auth.users(id) on delete cascade not null,
  display_name text        not null default '學員',
  content      text        not null,
  created_at   timestamptz default now()
);

-- ─── RLS ─────────────────────────────────────────────────────────────────────
alter table public.forum_posts    enable row level security;
alter table public.forum_replies  enable row level security;

create policy "Anyone can read posts"
  on public.forum_posts for select using (true);

create policy "Anyone can read replies"
  on public.forum_replies for select using (true);

create policy "Auth users can insert posts"
  on public.forum_posts for insert
  with check (auth.uid() = user_id);

create policy "Auth users can insert replies"
  on public.forum_replies for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own posts"
  on public.forum_posts for delete
  using (auth.uid() = user_id);

create policy "Users can delete own replies"
  on public.forum_replies for delete
  using (auth.uid() = user_id);

-- ─── Indexes ─────────────────────────────────────────────────────────────────
create index if not exists forum_posts_created_at_idx on public.forum_posts (created_at desc);
create index if not exists forum_posts_category_idx   on public.forum_posts (category);
create index if not exists forum_replies_post_id_idx  on public.forum_replies (post_id);

-- ─── Trigger：自動維護 reply_count ───────────────────────────────────────────
create or replace function public.inc_reply_count()
returns trigger language plpgsql as $$
begin
  update public.forum_posts set reply_count = reply_count + 1 where id = new.post_id;
  return new;
end;
$$;

create or replace function public.dec_reply_count()
returns trigger language plpgsql as $$
begin
  update public.forum_posts set reply_count = greatest(reply_count - 1, 0) where id = old.post_id;
  return old;
end;
$$;

create trigger on_reply_insert
  after insert on public.forum_replies
  for each row execute function public.inc_reply_count();

create trigger on_reply_delete
  after delete on public.forum_replies
  for each row execute function public.dec_reply_count();

-- ─── RPC：首頁預覽用 ─────────────────────────────────────────────────────────
create or replace function public.get_recent_forum_posts(p_limit int default 5)
returns table (
  id           uuid,
  display_name text,
  title        text,
  category     text,
  reply_count  integer,
  is_pinned    boolean,
  created_at   timestamptz
)
language sql security definer as $$
  select id, display_name, title, category, reply_count, is_pinned, created_at
  from   public.forum_posts
  order  by is_pinned desc, created_at desc
  limit  p_limit;
$$;
