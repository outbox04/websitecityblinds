# City Blinds Vietnam

Fullstack Next.js App Router website for City Blinds, separated into public website, hidden admin CMS/CRM, API routes and Supabase database layer.

## Architecture

- Public website lives under `src/app/(public)` with routes for homepage, about, products, product detail, partner registration, news, news detail and contact.
- Admin CMS/CRM lives under `src/app/admin-cbs` and is not linked from public navigation, sitemap or robots.
- API routes live under `src/app/api` for partner registration, Telegram notification and upload handling.
- Supabase access lives under `src/lib/supabase`; public pages call query helpers instead of hardcoding all content in `page.tsx`.
- `middleware.ts` protects `/admin-cbs/*`, redirects unauthenticated users to `/admin-cbs/login`, and checks `profiles.role`.

## Directory

```txt
src/
  app/
    (public)/
    admin-cbs/
    api/
    layout.tsx
    globals.css
  components/
    public/
    admin/
    ui/
    seo/
  lib/
    supabase/
    telegram/
    validation/
    security/
    utils/
  types/
  styles/
supabase/
  schema.sql
  policies.sql
  seed.sql
middleware.ts
.env.local.example
```

## Supabase

Run SQL files in this order:

```bash
supabase/schema.sql
supabase/policies.sql
supabase/seed.sql
```

Tables include catalogue, CMS, media, CRM, user profiles, settings and activity logs. Public RLS reads only active categories/products and published posts. Admin/editor roles manage CMS and CRM data.

## Environment

Copy `.env.local.example` to `.env.local` and fill:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_API_SECRET=
```

## Routes

Public:

- `/`
- `/gioi-thieu`
- `/san-pham`
- `/san-pham/[slug]`
- `/doi-tac-ban-hang`
- `/tin-tuc`
- `/tin-tuc/[slug]`
- `/lien-he`

Admin:

- `/admin-cbs/login`
- `/admin-cbs/dashboard`
- `/admin-cbs/products`
- `/admin-cbs/categories`
- `/admin-cbs/posts`
- `/admin-cbs/media`
- `/admin-cbs/partners`
- `/admin-cbs/users`
- `/admin-cbs/settings`
- `/admin-cbs/activity-logs`

## Development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```
