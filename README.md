# SkillForce Staffing — skillforcestaffing.com

Enterprise staffing & staff augmentation website. React + TypeScript + Vite + Tailwind CSS,
with every form submission captured as a lead row in Google Sheets.

## Pages

| Route          | Purpose |
| -------------- | ------- |
| `/`            | Home — hero, stats, services, practices, process, featured jobs, industries, testimonials |
| `/what-we-do`  | Service detail, engagement models, practice areas, delivery process, FAQ |
| `/about`       | Story, mission/vision, values, foundation, compliance commitments |
| `/careers`     | Searchable/filterable job listings with inline apply form |
| `/connect`     | Connect With Us — dual intake: job seekers and employers (replaces skill-development page) |
| `/contact`     | Contact form plus direct emails, offices, hours |

## Getting started

```bash
npm install
cp .env.example .env      # then paste your Apps Script URL
npm run dev               # http://localhost:5173
npm run build             # production build in dist/
```

## Lead capture → Google Sheets

All four form types (`candidate`, `job-application`, `employer`, `contact`) post to a single
Google Apps Script Web App which appends a row to your sheet.

1. Create a Google Sheet named e.g. **SkillForce Leads**.
2. **Extensions → Apps Script**, paste the contents of `google-apps-script.gs`, save.
3. Optionally set `NOTIFY_EMAIL` in that script to get an email per lead.
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the `/exec` URL into `.env`:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXX/exec
```

Captured columns: timestamp, lead type, name, email, phone, company, job/req, role, skills,
experience, work authorization, location, hiring need, resume link, message, source, page URL.

> Requests are sent with `mode: "no-cors"`, so no CORS configuration is needed. Verify delivery by
> checking the sheet after a test submission.

## Branding

- Navy `#122040`, Orange `#F26522` (from the SkillForce logo)
- Fonts: Sora (display) + Inter (body)
- The header/footer logo is an SVG recreation in `src/components/Logo.tsx`.
  To use the official artwork, drop the PNG/SVG at `public/logo.png` and swap the SVG block
  for an `<img src="/logo.png" />`.

## Editing content

- Company details, emails, phone: `src/config/site.ts`
- Services, practices, industries, stats, process, testimonials, FAQ: `src/data/content.ts`
- Job listings: `src/data/jobs.ts`

## Deploy

### GitHub Pages (configured)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `VITE_GOOGLE_SHEETS_URL`
   - Value: your Apps Script `/exec` URL

Live URL: `https://vaishaligajapathi.github.io/Skillforcestaffing/`

The workflow builds with `VITE_BASE_PATH=/Skillforcestaffing/` and copies `index.html`
to `404.html` so client-side routes (`/careers`, `/connect`, …) resolve on refresh.

### Custom domain (skillforcestaffing.com)

When you point the domain at Pages, remove `VITE_BASE_PATH` from the workflow (the base
falls back to `/`) and add the domain under Settings → Pages.

### Other hosts

Static SPA — `dist/` also deploys as-is to Netlify, Vercel, or Cloudflare Pages.
`public/_redirects` is included for SPA routing on Netlify. Set
`VITE_GOOGLE_SHEETS_URL` as an environment variable in whichever host you use.
