-- WordCards: миграция для умных повторений и статистики.
-- Как применить: Supabase → твой проект → SQL Editor → New query → вставить весь файл → Run.
-- Выполнять безопасно повторно (все команды идемпотентные).

-- 1) Колонки для интервальных повторений
alter table public.cards add column if not exists next_review_at timestamptz;
alter table public.cards add column if not exists interval_days integer not null default 0;

-- 2) Дневник занятий: сколько слов повторено/верно/выучено за день
create table if not exists public.study_log (
  user_id  uuid not null references auth.users(id) on delete cascade,
  day      date not null,
  reviewed integer not null default 0,
  correct  integer not null default 0,
  learned  integer not null default 0,
  primary key (user_id, day)
);

alter table public.study_log enable row level security;

drop policy if exists "own study_log" on public.study_log;
create policy "own study_log" on public.study_log
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 3) Функция: прибавить к сегодняшним счётчикам (атомарно, безопасно с двух устройств)
create or replace function public.log_study(p_day date, p_reviewed int, p_correct int, p_learned int)
returns void
language sql
as $$
  insert into public.study_log (user_id, day, reviewed, correct, learned)
  values (auth.uid(), p_day, p_reviewed, p_correct, p_learned)
  on conflict (user_id, day) do update
    set reviewed = public.study_log.reviewed + excluded.reviewed,
        correct  = public.study_log.correct  + excluded.correct,
        learned  = public.study_log.learned  + excluded.learned;
$$;

grant execute on function public.log_study(date, int, int, int) to authenticated;
