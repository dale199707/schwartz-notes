create table if not exists public.medical_note_state (
  user_id uuid not null references auth.users(id) on delete cascade,
  book_id text not null check (char_length(book_id) between 1 and 80),
  chapter_id text not null check (char_length(chapter_id) between 1 and 40),
  kind text not null check (kind in ('personal-notes', 'important', 'highlights')),
  payload jsonb not null,
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (user_id, book_id, chapter_id, kind)
);

alter table public.medical_note_state
drop constraint if exists medical_note_state_known_chapter_check;
alter table public.medical_note_state
add constraint medical_note_state_known_chapter_check
check (
  case
    when chapter_id ~ '^[1-9][0-9]{0,2}$' then
      case book_id
        when 'schwartz-11e' then chapter_id::integer between 1 and 54
        when 'icu-book-5e' then chapter_id::integer between 1 and 53
        when 'zollinger-10e' then chapter_id::integer between 1 and 150
        else false
      end
    else false
  end
);

alter table public.medical_note_state
drop constraint if exists medical_note_state_payload_shape_check;
alter table public.medical_note_state
add constraint medical_note_state_payload_shape_check
check (
  (kind = 'personal-notes' and jsonb_typeof(payload) = 'string')
  or (kind = 'important' and jsonb_typeof(payload) = 'array')
  or (kind = 'highlights' and jsonb_typeof(payload) = 'object')
);

alter table public.medical_note_state
drop constraint if exists medical_note_state_payload_size_check;
alter table public.medical_note_state
add constraint medical_note_state_payload_size_check
check (octet_length(payload::text) <= 100000);

create or replace function public.set_medical_note_state_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists set_medical_note_state_updated_at on public.medical_note_state;
create trigger set_medical_note_state_updated_at
before update on public.medical_note_state
for each row
execute function public.set_medical_note_state_updated_at();

alter table public.medical_note_state enable row level security;

drop policy if exists "Users can read their own medical notes" on public.medical_note_state;
create policy "Users can read their own medical notes"
on public.medical_note_state
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own medical notes" on public.medical_note_state;
create policy "Users can create their own medical notes"
on public.medical_note_state
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own medical notes" on public.medical_note_state;
create policy "Users can update their own medical notes"
on public.medical_note_state
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete their own medical notes" on public.medical_note_state;
create policy "Users can delete their own medical notes"
on public.medical_note_state
for delete
to authenticated
using ((select auth.uid()) = user_id);

revoke all on table public.medical_note_state from anon;
grant select, insert, update, delete on table public.medical_note_state to authenticated;
grant all on table public.medical_note_state to service_role;
