# Vanessa Chua — Portfolio

A bilingual (EN/ZH) portfolio site showcasing project work across the Siddeley Group — RedBridge Consulting websites (V1–V3), Siddeley Talent Link, GoodMood Studio, Google Ads campaigns, and the Siddeley Group Website.

## Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- Tailwind CSS 4
- TypeScript
- Cormorant Garamond + Outfit fonts (`next/font/google`)

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

All project content (EN + ZH) lives in [`src/lib/content.ts`](src/lib/content.ts) — `nav`, `hero`, `stats`, `projectCards`, and one export per project page (`p1`–`p7`). Each project page is rendered via the shared [`ProjectPageLayout`](src/components/ProjectPageLayout.tsx) component.

## Build & Deploy

This site is statically exported and deployed to Cloudflare Pages:

```bash
npm run build
npx wrangler pages deploy out/ --project-name=vanessa-portfolio --commit-dirty=true
```

Live at: https://vanessa-portfolio-9us.pages.dev
