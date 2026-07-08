# S.P. Enterprises

Marketing site + admin CRM for S.P. Enterprises.

Built with **Next.js** (App Router), **TypeScript**, **Tailwind CSS**, and **Neon Postgres**. Ready for **Vercel**.

## Setup

### 1. Install

```bash
npm install
```

### 2. Neon SQL (run in Neon SQL Editor)

1. Open your Neon project → **SQL Editor**
2. Paste and run [`sql/schema.sql`](sql/schema.sql)
3. Then paste and run [`sql/seed.sql`](sql/seed.sql)

### 3. Environment variables

Copy [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

Set:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon connection string (`?sslmode=require`) |
| `ADMIN_PASSWORD` | Shared password for `/admin` |
| `ADMIN_SESSION_SECRET` | Long random string used to sign admin cookies |

**Security:** If a Neon password was ever shared in chat or committed, rotate it in the Neon dashboard and update `DATABASE_URL`.

### 4. Run locally

```bash
npm run dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Admin CRM: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Admin CRM

| Route | Purpose |
| --- | --- |
| `/admin/login` | Password login |
| `/admin` | Dashboard counts |
| `/admin/categories` | Create / edit / delete / publish categories |
| `/admin/products` | Create / edit / delete / publish products (image **URL** fields) |
| `/admin/inquiries` | Contact form inbox (`new` / `read` / `archived`) |

Images are hosted elsewhere — paste full HTTPS image URLs in admin forms.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import at [vercel.com/new](https://vercel.com/new).
3. Add env vars: `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`.
4. Deploy.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Project structure

```
app/
  page.tsx                 # Landing page
  catalogue/page.tsx       # Full catalogue (DB)
  admin/                   # CRM
  actions/                 # Server actions (contact + admin)
sql/
  schema.sql
  seed.sql
lib/
  db.ts
  auth.ts / session.ts
  queries/                 # categories, products, inquiries
components/
  Catalogue.tsx            # Homepage categories from DB
  FullCatalogue.tsx
  Contact.tsx              # Saves inquiries to Neon
```
