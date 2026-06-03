-- City Blinds Supabase schema for public catalogue, SEO CMS, media, CRM and admin audit logs.
create extension if not exists "pgcrypto";

create type user_role as enum ('admin', 'editor', 'viewer');
create type post_status as enum ('draft', 'published', 'hidden');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null,
  role user_role not null default 'viewer',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories(id) on delete restrict,
  name text not null,
  slug text not null unique,
  code text not null unique,
  short_description text not null default '',
  description text not null default '',
  cover_image text,
  gallery text[] not null default '{}',
  specs jsonb not null default '{}'::jsonb,
  applications text[] not null default '{}',
  is_featured boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table product_fabric_colors (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  name text not null,
  hex text not null check (hex ~ '^#[0-9A-Fa-f]{6}$'),
  image_url text,
  sort_order int not null default 0
);

create table product_box_colors (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  name text not null,
  hex text not null check (hex ~ '^#[0-9A-Fa-f]{6}$'),
  image_url text,
  sort_order int not null default 0
);

create table post_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null default '',
  is_active boolean not null default true
);

create table posts (
  id uuid primary key default gen_random_uuid(),
  post_category_id uuid references post_categories(id) on delete set null,
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content_html text not null default '',
  featured_image text,
  image_alt text not null default '',
  og_image text,
  seo_title text not null default '',
  meta_description text not null default '',
  focus_keyword text not null default '',
  canonical_url text,
  schema_type text not null default 'Article',
  faq jsonb not null default '[]'::jsonb,
  author text not null default 'City Blinds',
  published_at timestamptz,
  status post_status not null default 'draft',
  related_product_ids uuid[] not null default '{}',
  related_category_ids uuid[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table media_files (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  alt_text text not null default '',
  file_name text not null,
  mime_type text not null check (mime_type in ('image/jpeg', 'image/png', 'image/webp')),
  size bigint not null check (size <= 4194304),
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table partner_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text,
  company_name text not null,
  province text not null,
  business_model text not null,
  interested_products text[] not null default '{}',
  note text,
  source_page text,
  form_location text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer_url text,
  current_url text,
  device_type text,
  created_at timestamptz not null default now()
);

create table activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table site_settings (
  key text primary key,
  value jsonb not null,
  updated_by uuid references profiles(id) on delete set null,
  updated_at timestamptz not null default now()
);

create index products_category_id_idx on products(category_id);
create index posts_status_published_at_idx on posts(status, published_at desc);
create index partner_registrations_created_at_idx on partner_registrations(created_at desc);
