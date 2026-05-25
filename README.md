# Srihari Naidu AI Quality Portfolio

Premium futuristic portfolio for Srihari Naidu Pudu, Lead SDET and AI Quality Engineer.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js via React Three Fiber
- ShadCN-style reusable UI primitives
- Vercel-ready SEO, robots, sitemap, OpenGraph, and Twitter cards

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_GITHUB_USERNAME=sriharinaidu
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_GITHUB_URL=https://github.com/sriharinaidu
NEXT_PUBLIC_EMAIL=hello@sriharinaidu.dev
NEXT_PUBLIC_RESUME_URL=/resume-srihari-naidu.pdf
```

## Folder Structure

```text
app/
  page.tsx
  projects/page.tsx
  experience/page.tsx
  blog/page.tsx
  contact/page.tsx
  layout.tsx
  globals.css
components/
  hero.tsx
  cards.tsx
  timeline.tsx
  github-panel.tsx
  ai-chat.tsx
  command-palette.tsx
  background.tsx
  navbar.tsx
lib/
  content.ts
  utils.ts
public/
  profile.svg
  og.svg
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add the environment variables above.
4. Keep the build command as `npm run build`.
5. Deploy.

## Production Notes

- Replace `public/profile.svg` with a polished real profile image when available.
- Add `public/resume-srihari-naidu.pdf` for the resume download CTA.
- Update GitHub and LinkedIn URLs before launch.
- Run `npm run build` before deploying.
