# City Blinds Vietnam

Fullstack Next.js App Router website for City Blinds, a B2B blinds manufacturer and distributor in Vietnam.

## 1. Kien Truc Tong The

The project separates public B2B catalogue pages from the hidden admin area.

- Public routes live under `app/(public)` and include homepage, about, products, product detail, partner registration, news, news detail and contact.
- Admin routes live under `app/admin-cbs`; public header, footer, robots and sitemap never expose admin URLs.
- `middleware.ts` protects `/admin-cbs/*`, redirects unauthenticated users to `/admin-cbs/login`, and checks `profiles.role`.
- API routes validate partner registrations, upload images to Supabase Storage, and send Telegram notifications.
- Supabase stores catalogue, CMS, media, CRM, users, settings and activity logs.

Design logic:

- Homepage order moves from brand positioning to catalogue, trust, featured products, cooperation process, partner form, then SEO content.
- Mobile UX uses single-column sections, compact CTA buttons and a collapsible menu so the B2B conversion path remains clear.
- Product pages avoid cart and buy-now UI because the business model is partner/catalogue driven.
- The admin UI is utilitarian and dense, similar to a CMS/CRM rather than a marketing page.

## 2. Cay Thu Muc

```txt
app/
  (public)/
  admin-cbs/
  api/
components/
  public/
  admin/
  forms/
  seo/
  ui/
lib/
  supabase/
  telegram/
  validation/
  security/
  utils/
types/
styles/
supabase/
```

## 3. Database Supabase SQL

Run these files in order:

```bash
supabase/schema.sql
supabase/policies.sql
supabase/seed.sql
```

Tables included: `profiles`, `categories`, `products`, `product_fabric_colors`, `product_box_colors`, `posts`, `post_categories`, `media_files`, `partner_registrations`, `activity_logs`, `site_settings`.

## 4. RLS Policies

`supabase/policies.sql` enables RLS on every table.

- Public users can read only active categories/products and published posts.
- Admin/editor users can manage catalogue, CMS, media, CRM, settings and logs.
- CRM inserts must go through `/api/partner-registration`; there is no anonymous direct insert policy.
- `profiles.role` controls admin access: `admin`, `editor`, `viewer`.

## 5. Ket Noi Supabase

Set environment variables from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_API_SECRET=
NEXT_PUBLIC_SITE_URL=
```

Create admin users in Supabase Auth, then insert the matching row into `profiles` with an allowed role.

## 6. Giao Dien Public

Public pages are implemented with sample data so the site renders before database wiring. Replace sample data in `lib/utils/sample-data.ts` with Supabase queries when the production database is ready.

Included pages:

- `/`
- `/gioi-thieu`
- `/san-pham`
- `/san-pham/[slug]`
- `/doi-tac-ban-hang`
- `/tin-tuc`
- `/tin-tuc/[slug]`
- `/lien-he`

## 7. Giao Dien Admin

Admin entry is `/admin-cbs/login`. There is no public registration button.

Included admin routes:

- `/admin-cbs/dashboard`
- `/admin-cbs/products`
- `/admin-cbs/categories`
- `/admin-cbs/posts`
- `/admin-cbs/media`
- `/admin-cbs/partners`
- `/admin-cbs/users`
- `/admin-cbs/settings`
- `/admin-cbs/activity-logs`

The post form includes SEO title, meta description, focus keyword, canonical URL, schema type, FAQ builder, rich editor placeholder, related products and related categories.

## 8. CRM + Telegram BOT

`/api/partner-registration`:

1. Validates input with Zod.
2. Saves to `partner_registrations`.
3. Sends the required Telegram notification format.
4. Stores tracking fields: source page, form location, UTM, referrer, current URL, device type and created time.

## 9. Bao Mat

Implemented safeguards:

- No service role key in client code.
- Server-side form validation.
- Rich post HTML sanitizing before render.
- Upload MIME, extension and 4MB size checks.
- Admin route protection by middleware.
- Admin noindex metadata and robots disallow.
- Public sitemap excludes admin routes.
- RLS limits public reads to active/published records.

## 10. Deploy GitHub + Vercel

1. Install Node.js 20 LTS or newer.
2. Run `npm install`.
3. Run `npm run build`.
4. Push the repository to GitHub.
5. Import the GitHub repository into Vercel.
6. Add all environment variables in Vercel Project Settings.
7. Run Supabase SQL files and create the Storage bucket `city-blinds`.
8. Create admin users in Supabase Auth and matching `profiles` rows.
9. Deploy and verify `/`, `/san-pham`, `/doi-tac-ban-hang`, `/admin-cbs/login`.

## Local Development

```bash
npm install
npm run dev
```

The local URL is `http://localhost:3000`.
