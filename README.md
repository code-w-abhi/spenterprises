# S.P. Enterprises

Marketing site for S.P. Enterprises — branding and packaging solutions since 2002.

Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**. Ready to deploy on **Vercel**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default Next.js settings (Framework Preset: Next.js, Build Command: `next build`).
4. Click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

No environment variables are required for the current mailto-based inquiry form.

## Contact form

The Inquire form opens the visitor’s email client via `mailto:inquire@spenterprises.com`. Update the address in `components/Contact.tsx` when you have the real inbox, or later swap it for Resend / Formspree.

## Project structure

```
app/
  layout.tsx      # Fonts + metadata
  page.tsx        # Landing page composition
  globals.css     # Design tokens + motion
components/
  Header.tsx
  Hero.tsx
  VerticalRail.tsx
  Products.tsx
  Catalogue.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
  Section.tsx
```
