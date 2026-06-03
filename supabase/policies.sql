-- Row Level Security policies: public reads active/published content; admins mutate.
alter table profiles enable row level security;
alter table categories enable row level security;
alter table products enable row level security;
alter table product_fabric_colors enable row level security;
alter table product_box_colors enable row level security;
alter table post_categories enable row level security;
alter table posts enable row level security;
alter table media_files enable row level security;
alter table partner_registrations enable row level security;
alter table activity_logs enable row level security;
alter table site_settings enable row level security;

create or replace function public.current_profile_role()
returns user_role
language sql
security definer
set search_path = public
as $$
  select role from profiles where id = auth.uid() and is_active = true
$$;

create or replace function public.is_admin_user()
returns boolean
language sql
security definer
set search_path = public
as $$
  select coalesce(public.current_profile_role() in ('admin', 'editor'), false)
$$;

create policy "profiles read own or admin" on profiles for select using (id = auth.uid() or public.is_admin_user());
create policy "profiles admin manage" on profiles for all using (public.current_profile_role() = 'admin') with check (public.current_profile_role() = 'admin');

create policy "categories public read active" on categories for select using (is_active = true);
create policy "categories admin manage" on categories for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "products public read active" on products for select using (
  is_active = true and exists (select 1 from categories c where c.id = products.category_id and c.is_active = true)
);
create policy "products admin manage" on products for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "fabric colors public read active product" on product_fabric_colors for select using (
  exists (select 1 from products p where p.id = product_fabric_colors.product_id and p.is_active = true)
);
create policy "fabric colors admin manage" on product_fabric_colors for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "box colors public read active product" on product_box_colors for select using (
  exists (select 1 from products p where p.id = product_box_colors.product_id and p.is_active = true)
);
create policy "box colors admin manage" on product_box_colors for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "post categories public read active" on post_categories for select using (is_active = true);
create policy "post categories admin manage" on post_categories for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "posts public read published" on posts for select using (status = 'published' and published_at <= now());
create policy "posts admin manage" on posts for all using (public.is_admin_user()) with check (public.is_admin_user());

create policy "media public read" on media_files for select using (true);
create policy "media admin manage" on media_files for all using (public.is_admin_user()) with check (public.is_admin_user());

-- No anon insert policy: partner leads must pass through the validated server API using service role.
create policy "partner registrations admin read" on partner_registrations for select using (public.is_admin_user());
create policy "partner registrations admin update" on partner_registrations for update using (public.is_admin_user()) with check (public.is_admin_user());

create policy "activity logs admin read" on activity_logs for select using (public.is_admin_user());
create policy "activity logs admin insert" on activity_logs for insert with check (public.is_admin_user());

create policy "settings public read" on site_settings for select using (key in ('site_title', 'site_description', 'public_contact'));
create policy "settings admin manage" on site_settings for all using (public.is_admin_user()) with check (public.is_admin_user());
